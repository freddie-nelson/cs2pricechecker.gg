import { Component } from "@angular/core";
import { LogoComponent } from "../logo/logo.component";
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-navbar",
    standalone: true,
    imports: [LogoComponent, SearchBarComponent, RouterLink],
    templateUrl: "./navbar.component.html",
    styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {}
