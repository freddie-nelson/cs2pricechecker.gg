import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NavbarComponent } from "./navbar.component";

describe("NavbarComponent", () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NavbarComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should have a logo component", () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("app-logo")).toBeTruthy();
    });

    it("should have a search bar component", () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("app-search-bar")).toBeTruthy();
    });
});
