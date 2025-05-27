import { Component, Input } from "@angular/core";
import { IconComponent } from "../icon/icon.component";
import { environment } from "../../environments/environment";
import { SizeLarge, SizeMedium } from "../../types/size";

@Component({
    selector: "app-logo",
    standalone: true,
    imports: [IconComponent],
    templateUrl: "./logo.component.html",
    styleUrl: "./logo.component.scss",
})
export class LogoComponent {
    @Input() size: SizeMedium | SizeLarge = "md";

    appName = environment.appName;
}
