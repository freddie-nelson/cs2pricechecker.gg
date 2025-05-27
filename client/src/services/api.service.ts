import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

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

    getUserSearchResults(query: string): Observable<UserSearchResult[]> {
        const mock: UserSearchResult[] = [];
        for (let i = 0; i < 10; i++) {
            mock.push({
                id: `${i}`,
                name: `OhnePixel${i}`,
                profilePicUrl: `https://wallpapersok.com/images/hd/anime-profile-picture-of-tanjiro-kamado-b3bkt91v6p4vj5xq.jpg`,
                steamPrice: Math.random() * 5000,
                skinportPrice: Math.random() * 5000,
                dmarketPrice: Math.random() * 5000,
                bitskinsPrice: Math.random() * 5000,
            });
        }

        return new Observable((observer) => {
            setTimeout(() => {
                console.log(mock);
                observer.next(mock);
                observer.complete();
            }, 1000);
        });
    }

    getSkinSearchResults(query: string): Observable<SkinSearchResult[]> {
        const mock: SkinSearchResult[] = [];
        for (let i = 0; i < 10; i++) {
            mock.push({
                id: `${i}`,
                name: `AK-47 | Asiimov`,
                quality: "Factory New",
                imageUrl: `https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092lnYmGmOHLPr7Vn35cppch3LGRrI-n2gTt_EJka2CmJ4aTclBsY1rXq1K3l-m905C1u8vPz3N9-n51tTAQyJo/360fx360f`,
                priceStartDate: "2025-04-25",
                steamPrices: Array.from({ length: 30 }, () => Math.random() * 200),
                skinportPrices: Array.from({ length: 30 }, () => Math.random() * 200),
                dmarketPrices: Array.from({ length: 30 }, () => Math.random() * 200),
                bitskinsPrices: Array.from({ length: 30 }, () => Math.random() * 200),
            });
        }

        return new Observable((observer) => {
            setTimeout(() => {
                observer.next(mock);
                observer.complete();
            }, 1000);
        });
    }
}
