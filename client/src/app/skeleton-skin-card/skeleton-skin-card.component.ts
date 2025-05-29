import { Component } from "@angular/core";
import { environment } from "../../environments/environment";

@Component({
    selector: "app-skeleton-skin-card",
    standalone: true,
    imports: [],
    templateUrl: "./skeleton-skin-card.component.html",
    styleUrl: "./skeleton-skin-card.component.css",
})
export class SkeletonSkinCardComponent {
    markets = environment.markets;
}
