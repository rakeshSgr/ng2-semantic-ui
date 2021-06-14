import { __decorate, __metadata } from "tslib";
import { Component, Renderer2 } from "@angular/core";
import { Util, DateUtil, DatePrecision } from "../../../misc/util/internal";
import { CalendarView, CalendarViewType } from "./calendar-view";
import { CalendarRangeService } from "../services/calendar-range.service";
export class CalendarRangeYearService extends CalendarRangeService {
    configureItem(item, baseDate) {
        item.humanReadable = Util.String.padLeft(item.date.getFullYear().toString(), 4, "0");
        item.isOutsideRange = item.date.getFullYear() >= this.calcStart(baseDate).getFullYear() + 10;
    }
}
let SuiCalendarYearView = class SuiCalendarYearView extends CalendarView {
    constructor(renderer) {
        super(renderer, CalendarViewType.Year, new CalendarRangeYearService(DatePrecision.Decade, 4, 3));
    }
    get decadeStart() {
        return DateUtil
            .startOf(DatePrecision.Decade, DateUtil.clone(this.service.currentDate))
            .getFullYear();
    }
    pad(year) {
        return Util.String.padLeft(year.toString(), 4, "0");
    }
};
SuiCalendarYearView.ctorParameters = () => [
    { type: Renderer2 }
];
SuiCalendarYearView = __decorate([
    Component({
        selector: "sui-calendar-year-view",
        template: `
<table class="ui celled center aligned unstackable table three column year">
<thead>
    <tr>
        <th colspan="3">
            <sui-calendar-view-title [ranges]="ranges" (zoomOut)="zoomOut()">
                {{ pad(decadeStart) }} - {{ pad(decadeStart + 10) }}
            </sui-calendar-view-title>
        </th>
    </tr>
</thead>
<tbody>
    <tr *ngFor="let group of ranges.current.groupedItems">
        <td class="link"
            *ngFor="let item of group"
            [calendarItem]="item"
            (click)="setDate(item)">{{ item.humanReadable }}
        </td>
    </tr>
</tbody>
</table>
`
    }),
    __metadata("design:paramtypes", [Renderer2])
], SuiCalendarYearView);
export { SuiCalendarYearView };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci12aWV3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9kYXRlcGlja2VyL3ZpZXdzL3llYXItdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUUsT0FBTyxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRTFFLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxvQkFBb0I7SUFDdkQsYUFBYSxDQUFDLElBQWlCLEVBQUUsUUFBYTtRQUNqRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNqRyxDQUFDO0NBQ0o7QUEyQkQsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBb0IsU0FBUSxZQUFZO0lBT2pELFlBQVksUUFBa0I7UUFDMUIsS0FBSyxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSx3QkFBd0IsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFSRCxJQUFXLFdBQVc7UUFDbEIsT0FBTyxRQUFRO2FBQ1YsT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3ZFLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFNTSxHQUFHLENBQUMsSUFBVztRQUNsQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEQsQ0FBQztDQUNKLENBQUE7O1lBUHdCLFNBQVM7O0FBUHJCLG1CQUFtQjtJQXpCL0IsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLHdCQUF3QjtRQUNsQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXFCYjtLQUNBLENBQUM7cUNBUXVCLFNBQVM7R0FQckIsbUJBQW1CLENBYy9CO1NBZFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXRpbCwgRGF0ZVV0aWwsIERhdGVQcmVjaXNpb24gfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBDYWxlbmRhclZpZXcsIENhbGVuZGFyVmlld1R5cGUgfSBmcm9tIFwiLi9jYWxlbmRhci12aWV3XCI7XG5pbXBvcnQgeyBDYWxlbmRhckl0ZW0gfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9jYWxlbmRhci1pdGVtXCI7XG5pbXBvcnQgeyBDYWxlbmRhclJhbmdlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci1yYW5nZS5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhclJhbmdlWWVhclNlcnZpY2UgZXh0ZW5kcyBDYWxlbmRhclJhbmdlU2VydmljZSB7XG4gICAgcHVibGljIGNvbmZpZ3VyZUl0ZW0oaXRlbTpDYWxlbmRhckl0ZW0sIGJhc2VEYXRlOkRhdGUpOnZvaWQge1xuICAgICAgICBpdGVtLmh1bWFuUmVhZGFibGUgPSBVdGlsLlN0cmluZy5wYWRMZWZ0KGl0ZW0uZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCksIDQsIFwiMFwiKTtcbiAgICAgICAgaXRlbS5pc091dHNpZGVSYW5nZSA9IGl0ZW0uZGF0ZS5nZXRGdWxsWWVhcigpID49IHRoaXMuY2FsY1N0YXJ0KGJhc2VEYXRlKS5nZXRGdWxsWWVhcigpICsgMTA7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2FsZW5kYXIteWVhci12aWV3XCIsXG4gICAgdGVtcGxhdGU6IGBcbjx0YWJsZSBjbGFzcz1cInVpIGNlbGxlZCBjZW50ZXIgYWxpZ25lZCB1bnN0YWNrYWJsZSB0YWJsZSB0aHJlZSBjb2x1bW4geWVhclwiPlxuPHRoZWFkPlxuICAgIDx0cj5cbiAgICAgICAgPHRoIGNvbHNwYW49XCIzXCI+XG4gICAgICAgICAgICA8c3VpLWNhbGVuZGFyLXZpZXctdGl0bGUgW3Jhbmdlc109XCJyYW5nZXNcIiAoem9vbU91dCk9XCJ6b29tT3V0KClcIj5cbiAgICAgICAgICAgICAgICB7eyBwYWQoZGVjYWRlU3RhcnQpIH19IC0ge3sgcGFkKGRlY2FkZVN0YXJ0ICsgMTApIH19XG4gICAgICAgICAgICA8L3N1aS1jYWxlbmRhci12aWV3LXRpdGxlPlxuICAgICAgICA8L3RoPlxuICAgIDwvdHI+XG48L3RoZWFkPlxuPHRib2R5PlxuICAgIDx0ciAqbmdGb3I9XCJsZXQgZ3JvdXAgb2YgcmFuZ2VzLmN1cnJlbnQuZ3JvdXBlZEl0ZW1zXCI+XG4gICAgICAgIDx0ZCBjbGFzcz1cImxpbmtcIlxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ3JvdXBcIlxuICAgICAgICAgICAgW2NhbGVuZGFySXRlbV09XCJpdGVtXCJcbiAgICAgICAgICAgIChjbGljayk9XCJzZXREYXRlKGl0ZW0pXCI+e3sgaXRlbS5odW1hblJlYWRhYmxlIH19XG4gICAgICAgIDwvdGQ+XG4gICAgPC90cj5cbjwvdGJvZHk+XG48L3RhYmxlPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBTdWlDYWxlbmRhclllYXJWaWV3IGV4dGVuZHMgQ2FsZW5kYXJWaWV3IHtcbiAgICBwdWJsaWMgZ2V0IGRlY2FkZVN0YXJ0KCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIERhdGVVdGlsXG4gICAgICAgICAgICAuc3RhcnRPZihEYXRlUHJlY2lzaW9uLkRlY2FkZSwgRGF0ZVV0aWwuY2xvbmUodGhpcy5zZXJ2aWNlLmN1cnJlbnREYXRlKSlcbiAgICAgICAgICAgIC5nZXRGdWxsWWVhcigpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMikge1xuICAgICAgICBzdXBlcihyZW5kZXJlciwgQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyLCBuZXcgQ2FsZW5kYXJSYW5nZVllYXJTZXJ2aWNlKERhdGVQcmVjaXNpb24uRGVjYWRlLCA0LCAzKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHBhZCh5ZWFyOm51bWJlcik6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuU3RyaW5nLnBhZExlZnQoeWVhci50b1N0cmluZygpLCA0LCBcIjBcIik7XG4gICAgfVxufVxuIl19