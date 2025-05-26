import { Component, CUSTOM_ELEMENTS_SCHEMA, HostBinding, Input } from "@angular/core";

@Component({
    selector: "app-icon",
    standalone: true,
    imports: [],
    templateUrl: "./icon.component.html",
    styleUrl: "./icon.component.css",
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IconComponent {
    @Input() icon: string = "";

    @HostBinding("style.width")
    @Input()
    width: string = "1rem";

    @HostBinding("style.height")
    @Input()
    height: string = "1rem";
}
