import { CurrencyPipe, DatePipe } from "@angular/common";
import { Component, ElementRef, Input, NgZone, ViewChild } from "@angular/core";

@Component({
    selector: "app-price-chart",
    standalone: true,
    imports: [CurrencyPipe, DatePipe],
    templateUrl: "./price-chart.component.html",
    styleUrl: "./price-chart.component.css",
})
export class PriceChartComponent {
    @Input({ required: true }) prices!: number[];
    @Input({ required: true, transform: (s: string | Date) => new Date(s) }) startDate!: Date;

    selected: number = 0;

    @ViewChild("container", { static: true }) container!: ElementRef<HTMLDivElement>;
    svgWidth: number = 1000;
    svgHeight: number = 200;

    private _observer: ResizeObserver | null = null;

    get maxY(): number {
        return this.svgHeight * 0.8;
    }

    get dates(): Date[] {
        const dates: Date[] = [];

        for (let i = 0; i < this.prices.length; i++) {
            const date = new Date(this.startDate.getTime() + i * 24 * 60 * 60 * 1000); // Increment by one day
            dates.push(date);
        }

        return dates;
    }

    get path(): string {
        const padding = 20;
        let p = `M ${-this.svgWidth - padding},${this.svgHeight + padding}`;
        const stepX = this.svgWidth / (this.prices.length - 1);
        const maxPrice = Math.max(...this.prices);

        for (let i = 0; i < this.prices.length; i++) {
            const x = i * stepX;
            const y = this.svgHeight - (this.prices[i] / maxPrice) * this.maxY;

            p += ` L ${x},${y}`;
        }

        p += `l ${padding},0 L ${this.svgWidth + padding},${this.svgHeight + padding} Z`;

        return p;
    }

    get selectedX(): number {
        const stepX = this.svgWidth / (this.prices.length - 1);
        return this.selected * stepX;
    }

    get selectedY(): number {
        const maxPrice = Math.max(...this.prices);
        return this.svgHeight - (this.prices[this.selected] / maxPrice) * this.maxY;
    }

    constructor(private zone: NgZone) {}

    ngOnInit() {
        this.selected = this.prices.length - 1;
    }

    ngAfterViewInit() {
        if (this.container) {
            const c = this.container.nativeElement;

            this._observer = new ResizeObserver((entries) => {
                const { contentRect } = entries[0];
                const { width, height } = contentRect;

                if (width > 0 && height > 0) {
                    this.zone.run(() => {
                        this.svgWidth = width;
                        this.svgHeight = height;
                    });
                }
            });

            this._observer.observe(c);
        }
    }

    ngOnDestroy() {
        if (this._observer) {
            this._observer.disconnect();
            this._observer = null;
        }
    }

    onMouseMove(event: MouseEvent) {
        const rect = this.container.nativeElement.getBoundingClientRect();
        const x = event.clientX - rect.left;

        const stepX = rect.width / (this.prices.length - 1);
        this.selected = Math.max(0, Math.min(this.prices.length - 1, Math.round(x / stepX)));
    }

    onMouseLeave() {
        this.selected = this.prices.length - 1;
    }
}
