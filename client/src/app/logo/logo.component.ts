import { Component } from "@angular/core";
import { IconComponent } from "../icon/icon.component";
import { environment } from "../../environments/environment";

@Component({
    selector: "app-logo",
    standalone: true,
    imports: [IconComponent],
    templateUrl: "./logo.component.html",
    styleUrl: "./logo.component.scss",
})
export class LogoComponent {
    appName = environment.appName;
}
