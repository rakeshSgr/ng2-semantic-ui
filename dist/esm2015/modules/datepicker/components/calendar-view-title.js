/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from "@angular/core";
import { CalendarRangeService } from "../services/calendar-range.service";
export class SuiCalendarViewTitle {
    constructor() {
        this.onZoomOut = new EventEmitter();
    }
}
SuiCalendarViewTitle.decorators = [
    { type: Component, args: [{
                selector: "sui-calendar-view-title",
                template: `
<span class="title link" (click)="onZoomOut.emit()">
    <ng-content></ng-content>
</span>
<span class="prev link" [class.disabled]="!ranges?.canMovePrevious" (click)="ranges?.movePrevious()">
    <i class="chevron left icon"></i>
</span>
<span class="next link" [class.disabled]="!ranges?.canMoveNext" (click)="ranges?.moveNext()">
    <i class="chevron right icon"></i>
</span>
`,
                styles: [`
.title.link {
    display: inline-block;
    margin-left: 2rem;
    margin-right: 2rem;
}
`]
            }] }
];
/** @nocollapse */
SuiCalendarViewTitle.ctorParameters = () => [];
SuiCalendarViewTitle.propDecorators = {
    ranges: [{ type: Input }],
    onZoomOut: [{ type: Output, args: ["zoomOut",] }]
};
function SuiCalendarViewTitle_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiCalendarViewTitle.prototype.ranges;
    /** @type {?} */
    SuiCalendarViewTitle.prototype.onZoomOut;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItdmlldy10aXRsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGF0ZXBpY2tlci9jb21wb25lbnRzL2NhbGVuZGFyLXZpZXctdGl0bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUF1QjFFLE1BQU0sT0FBTyxvQkFBb0I7SUFRN0I7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7S0FDN0M7OztZQS9CSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFOzs7Ozs7Ozs7O0NBVWI7eUJBQ1k7Ozs7OztDQU1aO2FBQ0E7Ozs7O3FCQUdJLEtBQUs7d0JBR0wsTUFBTSxTQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDYWxlbmRhclJhbmdlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci1yYW5nZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1jYWxlbmRhci12aWV3LXRpdGxlXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxzcGFuIGNsYXNzPVwidGl0bGUgbGlua1wiIChjbGljayk9XCJvblpvb21PdXQuZW1pdCgpXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9zcGFuPlxuPHNwYW4gY2xhc3M9XCJwcmV2IGxpbmtcIiBbY2xhc3MuZGlzYWJsZWRdPVwiIXJhbmdlcz8uY2FuTW92ZVByZXZpb3VzXCIgKGNsaWNrKT1cInJhbmdlcz8ubW92ZVByZXZpb3VzKClcIj5cbiAgICA8aSBjbGFzcz1cImNoZXZyb24gbGVmdCBpY29uXCI+PC9pPlxuPC9zcGFuPlxuPHNwYW4gY2xhc3M9XCJuZXh0IGxpbmtcIiBbY2xhc3MuZGlzYWJsZWRdPVwiIXJhbmdlcz8uY2FuTW92ZU5leHRcIiAoY2xpY2spPVwicmFuZ2VzPy5tb3ZlTmV4dCgpXCI+XG4gICAgPGkgY2xhc3M9XCJjaGV2cm9uIHJpZ2h0IGljb25cIj48L2k+XG48L3NwYW4+XG5gLFxuICAgIHN0eWxlczogW2Bcbi50aXRsZS5saW5rIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpQ2FsZW5kYXJWaWV3VGl0bGUge1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcmFuZ2VzOkNhbGVuZGFyUmFuZ2VTZXJ2aWNlO1xuXG4gICAgQE91dHB1dChcInpvb21PdXRcIilcbiAgICBwdWJsaWMgb25ab29tT3V0OkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9uWm9vbU91dCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgICB9XG59XG4iXX0=