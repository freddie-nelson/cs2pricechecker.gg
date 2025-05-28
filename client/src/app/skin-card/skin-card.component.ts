import { Component, Input } from "@angular/core";
import { SkinSearchResult } from "../../services/api.service";
import { environment } from "../../environments/environment";
import { PriceChartComponent } from "../price-chart/price-chart.component";

@Component({
    selector: "app-skin-card",
    standalone: true,
    imports: [PriceChartComponent],
    templateUrl: "./skin-card.component.html",
    styleUrl: "./skin-card.component.css",
})
export class SkinCardComponent {
    @Input({ required: true }) skin!: SkinSearchResult;

    markets = environment.markets;
    activeMarket = this.markets[0];
}
