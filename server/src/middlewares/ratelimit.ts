import { ParameterizedContext } from "koa";
import { errorResponse } from "../helpers/response";
import Logger from "../helpers/Logger";

const ratelimitPruneInterval = parseInt(process.env.RATELIMIT_PRUNE_INTERVAL!);

if (isNaN(ratelimitPruneInterval)) {
  throw new Error("Missing environment variable RATELIMIT_PRUNE_INTERVAL");
}

export interface RouteHit {
  timestamp: number;
}

// oldest hits are at the start of the array
export interface RateLimitRoutes {
  [key: string]: RouteHit[];
}

const ratelimitMap = new Map<string, RateLimitRoutes>();

function pruneOldHits(hits: RouteHit[], now: number, timelimit: number) {
  while (hits.length > 0 && hits[0].timestamp + timelimit < now) {
    hits.shift();
  }
}

setInterval(() => {
  const now = Date.now();

  for (const [key, routes] of ratelimitMap) {
    for (const route in routes) {
      pruneOldHits(routes[route], now, ratelimitPruneInterval);

      if (routes[route].length === 0) {
        delete routes[route];
      }
    }

    if (Object.keys(routes).length === 0) {
      ratelimitMap.delete(key);
    }
  }
}, ratelimitPruneInterval);

export function ratelimitIp(
  route: string,
  hits: number,
  timelimit: number,
  withLogs = false
): (ctx: ParameterizedContext, next: () => Promise<void>) => Promise<ParameterizedContext | void> {
  return async (ctx, next) => {
    const ip = ctx.ip;

    if (!ratelimitMap.has(ip)) {
      ratelimitMap.set(ip, {});
    }

    const ipRoutes = ratelimitMap.get(ip)!;
    if (!ipRoutes[route]) {
      ipRoutes[route] = [];
    }

    const now = Date.now();

    pruneOldHits(ipRoutes[route], now, timelimit);
    if (ipRoutes[route].length > hits) {
      if (withLogs) {
        Logger.warn(`Rate limit exceeded for IP ${ip} on route ${route}`);
      }

      return errorResponse(ctx, 429, "Rate limit exceeded, wait a bit before trying again.");
    }

    ipRoutes[route].push({ timestamp: now });

    await next();
  };
}
