import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable, reduce } from "rxjs";
import { SteamMarketItem } from "../types/SteamMarketItem";
import { environment } from "../environments/environment";
import { SteamProfileWithInventory } from "../types/SteamProfile";
import { SuccessResponse } from "../types/response";

export interface UserSearchResult {
    id: string;
    name: string;
    profilePicUrl: string;
    steamPrice: number;
    skinportPrice: number;
    dmarketPrice: number;
    bitskinsPrice: number;
}

export interface SkinSearchResult {
    id: string;
    name: string;
    quality: string;
    imageUrl: string;
    priceStartDate: string;
    steamPrices: number[];
    skinportPrices: number[];
    dmarketPrices: number[];
    bitskinsPrices: number[];
}

@Injectable({
    providedIn: "root",
})
export default class ApiService {
    private http = inject(HttpClient);

    private formatWear(wear: string): string {
        switch (wear) {
            case "fn":
                return "Factory New";
            case "mw":
                return "Minimal Wear";
            case "ft":
                return "Field-Tested";
            case "ww":
                return "Well-Worn";
            case "bs":
                return "Battle-Scarred";
            default:
                return wear;
        }
    }

    getUserSearchResults(query: string): Observable<UserSearchResult[]> {
        const res = this.http
            .get<
                SuccessResponse<SteamProfileWithInventory[]>
            >(`${environment.apiBaseUrl}/users?query=${encodeURIComponent(query)}`)
            .pipe(
                map((profiles) =>
                    profiles.data.map((profile) => {
                        const value = profile.inventory.reduce((acc, item) => acc + item.priceavg24h, 0);

                        return {
                            id: profile.steamid,
                            name: profile.personaname,
                            profilePicUrl: profile.avatarfull,
                            steamPrice: value,
                            skinportPrice: value,
                            dmarketPrice: value,
                            bitskinsPrice: value,
                        } satisfies UserSearchResult;
                    }),
                ),
            );

        return res;
    }

    getSkinSearchResults(query: string): Observable<SkinSearchResult[]> {
        const res = this.http
            .get<
                SuccessResponse<SteamMarketItem[]>
            >(`${environment.apiBaseUrl}/skins?query=${encodeURIComponent(query)}`)
            .pipe(
                map((items) => {
                    return items.data.map(
                        (item) =>
                            ({
                                id: item.id,
                                name: item.markethashname,
                                quality:
                                    item.quality !== "Normal"
                                        ? `${item.quality} | ${this.formatWear(item.wear)}`
                                        : this.formatWear(item.wear),
                                imageUrl: item.itemimage,
                                priceStartDate: new Date(new Date().getTime() - 5 * 24 * 60 * 60 * 1000).toString(),
                                steamPrices: [
                                    item.priceavg90d,
                                    item.priceavg30d,
                                    item.priceavg7d,
                                    item.priceavg24h,
                                    item.pricelatest,
                                ],
                                skinportPrices: [
                                    item.priceavg90d,
                                    item.priceavg30d,
                                    item.priceavg7d,
                                    item.priceavg24h,
                                    item.pricelatest,
                                ],
                                dmarketPrices: [
                                    item.priceavg90d,
                                    item.priceavg30d,
                                    item.priceavg7d,
                                    item.priceavg24h,
                                    item.pricelatest,
                                ],
                                bitskinsPrices: [
                                    item.priceavg90d,
                                    item.priceavg30d,
                                    item.priceavg7d,
                                    item.priceavg24h,
                                    item.pricelatest,
                                ],
                            }) satisfies SkinSearchResult,
                    );
                }),
            );

        return res;
    }
}
