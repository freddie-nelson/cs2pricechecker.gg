import { Routes } from "@angular/router";
import { LandingPageComponent } from "../views/landing-page/landing-page.component";

export const routes: Routes = [
    {
        title: "CS2PriceChecker",
        path: "",
        component: LandingPageComponent,
    },
    {
        title: "CS2PriceChecker - Search Results",
        path: "search",
        loadComponent: () => import("../views/search-page/search-page.component").then((c) => c.SearchPageComponent),
    },
];
