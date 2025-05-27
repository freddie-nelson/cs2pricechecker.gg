import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LogoComponent } from "./logo.component";
import { environment } from "../../environments/environment";

describe("LogoComponent", () => {
    let component: LogoComponent;
    let fixture: ComponentFixture<LogoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LogoComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(LogoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should have an icon component", () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("app-icon")).toBeTruthy();
    });

    it("should have a link to the home page", () => {
        const compiled = fixture.nativeElement;
        const link = compiled.querySelector("a");
        expect(link).toBeTruthy();
        expect(link.getAttribute("routerLink")).toBe("/");
    });

    it("should have a p tag with the app name", () => {
        const compiled = fixture.nativeElement;
        const p = compiled.querySelector("p");
        expect(p).toBeTruthy();
        expect(p.textContent).toContain(environment.appName);
    });
});
