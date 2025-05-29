import { Component, Input } from "@angular/core";
import { IconComponent } from "../icon/icon.component";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { SizeLarge, SizeMedium } from "../../types/size";
import { Subscription } from "rxjs";

@Component({
    selector: "app-search-bar",
    standalone: true,
    imports: [IconComponent, FormsModule],
    templateUrl: "./search-bar.component.html",
    styleUrl: "./search-bar.component.scss",
})
export class SearchBarComponent {
    @Input() size: SizeMedium | SizeLarge = "md";

    search: string = "";

    private queryParamSubscription: Subscription | null = null;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.queryParamSubscription = this.route.queryParamMap.subscribe((params) => {
            this.search = params.get("q") || "";
        });
    }

    ngOnDestroy() {
        if (this.queryParamSubscription) {
            this.queryParamSubscription.unsubscribe();
        }
    }

    onSearch(event: Event): void {
        event.preventDefault();

        this.router.navigate(["/search"], { queryParams: { q: this.search } });
    }
}
