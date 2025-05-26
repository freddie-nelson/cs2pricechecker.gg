import { Component } from "@angular/core";
import { IconComponent } from "../icon/icon.component";

@Component({
    selector: "app-search-bar",
    standalone: true,
    imports: [IconComponent],
    templateUrl: "./search-bar.component.html",
    styleUrl: "./search-bar.component.scss",
})
export class SearchBarComponent {}
