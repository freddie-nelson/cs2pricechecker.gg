import Router from "@koa/router";
import { querySchema } from "../schemas/search";
import { errorResponse, successResponse } from "../helpers/response";
import { zodErrorToUserFriendlyMessage } from "../helpers/zod";
import SteamWebApiService from "../services/SteamWebApi";
import { SteamProfileWithInventory } from "../types/SteamProfile";
import { ratelimitIp } from "../middlewares/ratelimit";

export const rootRouter = new Router({
  prefix: "",
});

rootRouter.get("hello", "/hello", async (ctx) => {
  ctx.body = "Hello, world!";
  ctx.status = 200;
});

rootRouter.get("users", "/users", ratelimitIp("users", 3, 60000, true), async (ctx) => {
  const query = ctx.query.query as string;
  const { success, data: search, error } = querySchema.safeParse(query);
  if (!success) {
    return errorResponse(ctx, 400, zodErrorToUserFriendlyMessage(error));
  }

  const profiles = await SteamWebApiService.getProfiles(search, 10);
  if (profiles.length === 0) {
    return successResponse(ctx, []);
  }

  const inventories = await SteamWebApiService.getInventories(
    profiles.map((profile) => profile.steamid),
    "cs2"
  );

  const profilesWithInventories: SteamProfileWithInventory[] = profiles.map((profile) => ({
    ...profile,
    inventory: inventories[profile.steamid] || [],
  }));

  return successResponse(ctx, profilesWithInventories);
});

rootRouter.get("skins", "/skins", ratelimitIp("users", 3, 60000, true), async (ctx) => {
  const query = ctx.query.query as string;
  const { success, data: search, error } = querySchema.safeParse(query);
  if (!success) {
    return errorResponse(ctx, 400, zodErrorToUserFriendlyMessage(error));
  }

  const marketItems = await SteamWebApiService.getMarketItems(search);
  return successResponse(ctx, marketItems);
});
