import { Component, Input } from "@angular/core";
import { UserSearchResult } from "../../services/api.service";
import { CurrencyPipe } from "@angular/common";
import { environment } from "../../environments/environment";

@Component({
    selector: "app-user-card",
    standalone: true,
    imports: [CurrencyPipe],
    templateUrl: "./user-card.component.html",
    styleUrl: "./user-card.component.css",
})
export class UserCardComponent {
    @Input({ required: true }) user!: UserSearchResult;

    markets = environment.markets;
}
