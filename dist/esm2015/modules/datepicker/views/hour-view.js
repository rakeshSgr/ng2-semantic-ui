import { __decorate, __metadata } from "tslib";
import { Component, Renderer2 } from "@angular/core";
import { DatePrecision } from "../../../misc/util/internal";
import { CalendarView, CalendarViewType } from "./calendar-view";
import { CalendarRangeService } from "../services/calendar-range.service";
import { DateParser } from "../classes/date-parser";
export class CalendarRangeHourService extends CalendarRangeService {
    configureItem(item, baseDate) {
        // Set minutes and seconds to 0
        const customFormat = this.service.localeValues.formats.time.replace(/[ms]/g, "0");
        item.humanReadable = new DateParser(customFormat, this.service.localeValues).format(item.date);
        item.isOutsideRange = false;
    }
}
let SuiCalendarHourView = class SuiCalendarHourView extends CalendarView {
    constructor(renderer) {
        super(renderer, CalendarViewType.Hour, new CalendarRangeHourService(DatePrecision.Date, 6, 4));
    }
    get date() {
        return new DateParser(this.service.localeValues.formats.date, this.service.localeValues).format(this.currentDate);
    }
};
SuiCalendarHourView.ctorParameters = () => [
    { type: Renderer2 }
];
SuiCalendarHourView = __decorate([
    Component({
        selector: "sui-calendar-hour-view",
        template: `
<table class="ui celled center aligned unstackable table four column hour">
<thead *ngIf="service.config.mode != 1">
    <tr>
        <th colspan="4">
            <sui-calendar-view-title [ranges]="ranges" (zoomOut)="zoomOut()">
                {{ date }}
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
], SuiCalendarHourView);
export { SuiCalendarHourView };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG91ci12aWV3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9kYXRlcGlja2VyL3ZpZXdzL2hvdXItdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFcEQsTUFBTSxPQUFPLHdCQUF5QixTQUFRLG9CQUFvQjtJQUN2RCxhQUFhLENBQUMsSUFBaUIsRUFBRSxRQUFhO1FBQ2pELCtCQUErQjtRQUMvQixNQUFNLFlBQVksR0FBVSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDekYsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLFVBQVUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9GLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7Q0FDSjtBQTJCRCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFvQixTQUFRLFlBQVk7SUFNakQsWUFBWSxRQUFrQjtRQUMxQixLQUFLLENBQUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLHdCQUF3QixDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQU5ELElBQVcsSUFBSTtRQUNYLE9BQU8sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEgsQ0FBQztDQUtKLENBQUE7O1lBSHdCLFNBQVM7O0FBTnJCLG1CQUFtQjtJQXpCL0IsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLHdCQUF3QjtRQUNsQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXFCYjtLQUNBLENBQUM7cUNBT3VCLFNBQVM7R0FOckIsbUJBQW1CLENBUy9CO1NBVFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRGF0ZVByZWNpc2lvbiB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IENhbGVuZGFyVmlldywgQ2FsZW5kYXJWaWV3VHlwZSB9IGZyb20gXCIuL2NhbGVuZGFyLXZpZXdcIjtcbmltcG9ydCB7IENhbGVuZGFySXRlbSB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL2NhbGVuZGFyLWl0ZW1cIjtcbmltcG9ydCB7IENhbGVuZGFyUmFuZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NhbGVuZGFyLXJhbmdlLnNlcnZpY2VcIjtcbmltcG9ydCB7IERhdGVQYXJzZXIgfSBmcm9tIFwiLi4vY2xhc3Nlcy9kYXRlLXBhcnNlclwiO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJSYW5nZUhvdXJTZXJ2aWNlIGV4dGVuZHMgQ2FsZW5kYXJSYW5nZVNlcnZpY2Uge1xuICAgIHB1YmxpYyBjb25maWd1cmVJdGVtKGl0ZW06Q2FsZW5kYXJJdGVtLCBiYXNlRGF0ZTpEYXRlKTp2b2lkIHtcbiAgICAgICAgLy8gU2V0IG1pbnV0ZXMgYW5kIHNlY29uZHMgdG8gMFxuICAgICAgICBjb25zdCBjdXN0b21Gb3JtYXQ6c3RyaW5nID0gdGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcy5mb3JtYXRzLnRpbWUucmVwbGFjZSgvW21zXS9nLCBcIjBcIik7XG4gICAgICAgIGl0ZW0uaHVtYW5SZWFkYWJsZSA9IG5ldyBEYXRlUGFyc2VyKGN1c3RvbUZvcm1hdCwgdGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcykuZm9ybWF0KGl0ZW0uZGF0ZSk7XG4gICAgICAgIGl0ZW0uaXNPdXRzaWRlUmFuZ2UgPSBmYWxzZTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1jYWxlbmRhci1ob3VyLXZpZXdcIixcbiAgICB0ZW1wbGF0ZTogYFxuPHRhYmxlIGNsYXNzPVwidWkgY2VsbGVkIGNlbnRlciBhbGlnbmVkIHVuc3RhY2thYmxlIHRhYmxlIGZvdXIgY29sdW1uIGhvdXJcIj5cbjx0aGVhZCAqbmdJZj1cInNlcnZpY2UuY29uZmlnLm1vZGUgIT0gMVwiPlxuICAgIDx0cj5cbiAgICAgICAgPHRoIGNvbHNwYW49XCI0XCI+XG4gICAgICAgICAgICA8c3VpLWNhbGVuZGFyLXZpZXctdGl0bGUgW3Jhbmdlc109XCJyYW5nZXNcIiAoem9vbU91dCk9XCJ6b29tT3V0KClcIj5cbiAgICAgICAgICAgICAgICB7eyBkYXRlIH19XG4gICAgICAgICAgICA8L3N1aS1jYWxlbmRhci12aWV3LXRpdGxlPlxuICAgICAgICA8L3RoPlxuICAgIDwvdHI+XG48L3RoZWFkPlxuPHRib2R5PlxuICAgIDx0ciAqbmdGb3I9XCJsZXQgZ3JvdXAgb2YgcmFuZ2VzLmN1cnJlbnQuZ3JvdXBlZEl0ZW1zXCI+XG4gICAgICAgIDx0ZCBjbGFzcz1cImxpbmtcIlxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ3JvdXBcIlxuICAgICAgICAgICAgW2NhbGVuZGFySXRlbV09XCJpdGVtXCJcbiAgICAgICAgICAgIChjbGljayk9XCJzZXREYXRlKGl0ZW0pXCI+e3sgaXRlbS5odW1hblJlYWRhYmxlIH19XG4gICAgICAgIDwvdGQ+XG4gICAgPC90cj5cbjwvdGJvZHk+XG48L3RhYmxlPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBTdWlDYWxlbmRhckhvdXJWaWV3IGV4dGVuZHMgQ2FsZW5kYXJWaWV3IHtcblxuICAgIHB1YmxpYyBnZXQgZGF0ZSgpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZVBhcnNlcih0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzLmZvcm1hdHMuZGF0ZSwgdGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcykuZm9ybWF0KHRoaXMuY3VycmVudERhdGUpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMikge1xuICAgICAgICBzdXBlcihyZW5kZXJlciwgQ2FsZW5kYXJWaWV3VHlwZS5Ib3VyLCBuZXcgQ2FsZW5kYXJSYW5nZUhvdXJTZXJ2aWNlKERhdGVQcmVjaXNpb24uRGF0ZSwgNiwgNCkpO1xuICAgIH1cbn1cbiJdfQ==