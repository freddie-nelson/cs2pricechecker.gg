import Logger from "../helpers/Logger";
import { randomInt } from "../helpers/random";
import { SteamInventory } from "../types/SteamInventory";
import { SteamMarketItem } from "../types/SteamMarketItem";
import { SteamProfile } from "../types/SteamProfile";

const apiKey = process.env.STEAMWEBAPI_KEY!;
const baseUrl = process.env.STEAMWEBAPI_BASE_URL!;

if (!apiKey || !baseUrl) {
  Logger.error("Missing STEAMWEBAPI_KEY or STEAMWEBAPI_BASE_URL in environment variables.");
}

export default abstract class SteamWebApiService {
  private static getUrl(
    endpoint: string,
    params: Record<string, string | string[] | number[] | number> = {}
  ): string {
    const url = new URL(`${baseUrl}${endpoint}`);
    url.searchParams.set("key", apiKey);

    for (const [key, value] of Object.entries(params)) {
      url.searchParams.set(key, String(value));
    }

    return url.toString();
  }

  private static async get<T>(
    endpoint: string,
    params: Record<string, string | string[] | number[] | number> = {}
  ): Promise<T> {
    const url = this.getUrl(endpoint, params);
    const response = await fetch(url);

    if (!response.ok) {
      Logger.error(`Failed to fetch from ${url}: ${response.status} ${response.statusText}`);
      throw new Error(`Failed to fetch from ${url}: ${response.status} ${response.statusText}`);
    }

    return response.json() as Promise<T>;
  }

  /**
   * Searches for Steam profiles based on a search query.
   *
   * @param search The search query for the Steam profile. Search string for profile name, account name, or description.
   * @param limit The maximum number of profiles to return. Default is 10.
   *
   * @returns The list of Steam profiles matching the search query.
   */
  public static async getProfiles(search: string, limit = 10): Promise<SteamProfile[]> {
    return this.get<SteamProfile[]>("/explore/api/profile", { search, limit });
  }

  /**
   * Gets the inventories for a list of Steam IDs for a specific game.
   *
   * @param steamIds The steam ids of the inventories to fetch.
   * @param game The game for which to fetch the inventories. Default is "cs2".
   *
   * @returns The inventories of the specified Steam IDs for the given game.
   */
  public static async getInventories(steamIds: string[], game = "cs2") {
    return this.get<Record<string, SteamInventory[]>>("/steam/api/inventory/batch", {
      steam_ids: steamIds,
      game,
    });
  }

  /**
   * Gets market items from the Steam market based on a search query.
   *
   * @param search The search query for the market items.
   * @param page The page number to fetch. Default is 1.
   * @param max The maximum number of items to return. Default is 1000.
   * @param game The game for which to fetch the market items. Default is "cs2".
   *
   * @returns The list of market items matching the search query.
   */
  public static async getMarketItems(search: string, page = 1, max = 1000, game = "cs2") {
    return this.get<SteamMarketItem[]>("/steam/api/items", { search, max, game, page });
  }
}
