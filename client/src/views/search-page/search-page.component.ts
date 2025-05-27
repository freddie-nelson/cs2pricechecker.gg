import { Component, Input } from "@angular/core";
import ApiService, { SkinSearchResult, UserSearchResult } from "../../services/api.service";
import { Observable } from "rxjs";
import { UserCardComponent } from "../../app/user-card/user-card.component";
import { AsyncPipe } from "@angular/common";
import { SkinCardComponent } from "../../app/skin-card/skin-card.component";

@Component({
    selector: "app-search-page",
    standalone: true,
    imports: [UserCardComponent, AsyncPipe, SkinCardComponent],
    templateUrl: "./search-page.component.html",
    styleUrl: "./search-page.component.scss",
})
export class SearchPageComponent {
    query: string = "";
    userResults$!: Observable<UserSearchResult[]>;
    skinResults$!: Observable<SkinSearchResult[]>;

    @Input()
    set q(query: string) {
        this.query = query;
    }

    constructor(private apiService: ApiService) {}

    ngOnInit() {
        if (!this.query) {
            return;
        }

        this.userResults$ = this.apiService.getUserSearchResults(this.query);
        this.skinResults$ = this.apiService.getSkinSearchResults(this.query);
    }
}
