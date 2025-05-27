import { Component, Input } from "@angular/core";
import { SkinSearchResult } from "../../services/api.service";
import { environment } from "../../environments/environment";

@Component({
    selector: "app-skin-card",
    standalone: true,
    imports: [],
    templateUrl: "./skin-card.component.html",
    styleUrl: "./skin-card.component.css",
})
export class SkinCardComponent {
    @Input({ required: true }) skin!: SkinSearchResult;

    markets = environment.markets;
    activeMarket = this.markets[0];
}
