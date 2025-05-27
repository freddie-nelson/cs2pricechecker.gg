import { Component } from "@angular/core";
import { LogoComponent } from "../../app/logo/logo.component";
import { environment } from "../../environments/environment";
import { SearchBarComponent } from "../../app/search-bar/search-bar.component";

@Component({
    selector: "app-landing-page",
    standalone: true,
    imports: [LogoComponent, SearchBarComponent],
    templateUrl: "./landing-page.component.html",
    styleUrl: "./landing-page.component.scss",
})
export class LandingPageComponent {
    landingText = environment.landingText;
}
