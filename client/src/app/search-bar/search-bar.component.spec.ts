import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchBarComponent } from "./search-bar.component";
import { Router } from "@angular/router";

describe("SearchBarComponent", () => {
    let component: SearchBarComponent;
    let fixture: ComponentFixture<SearchBarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SearchBarComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(SearchBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should have an input field", () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('input[type="text"]')).toBeTruthy();
        expect(compiled.querySelector('input[type="text"]').name).toBe("search");
    });

    it("should bind the input value to the search property", () => {
        const input = fixture.nativeElement.querySelector('input[type="text"]');
        input.value = "test search";
        input.dispatchEvent(new Event("input"));
        expect(component.search).toBe("test search");
    });

    it("should call onSearch method when form is submitted", () => {
        spyOn(component, "onSearch");
        const form = fixture.nativeElement.querySelector("form");
        form.dispatchEvent(new Event("submit"));
        expect(component.onSearch).toHaveBeenCalled();
    });

    it("should navigate to /search with query params when onSearch is called", () => {
        const router = TestBed.inject(Router);
        spyOn(router, "navigate");

        component.search = "test search";
        component.onSearch(new Event("submit"));
        expect(router.url).toBe("/search?q=test search");
    });

    it("should have a search icon", () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('app-icon[icon="cuida:search-outline"]')).toBeTruthy();
    });
});
