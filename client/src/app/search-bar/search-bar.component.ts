import { Component } from "@angular/core";
import { IconComponent } from "../icon/icon.component";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: "app-search-bar",
    standalone: true,
    imports: [IconComponent, FormsModule],
    templateUrl: "./search-bar.component.html",
    styleUrl: "./search-bar.component.scss",
})
export class SearchBarComponent {
    search: string = "";

    constructor(private router: Router) {}

    onSearch(event: Event): void {
        event.preventDefault();

        this.router.navigate(["/search"], { queryParams: { q: this.search } });
    }
}
