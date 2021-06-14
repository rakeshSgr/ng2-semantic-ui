import { __decorate, __extends, __metadata } from "tslib";
import { Component, Renderer2 } from "@angular/core";
import { DatePrecision } from "../../../misc/util/internal";
import { CalendarView, CalendarViewType } from "./calendar-view";
import { CalendarRangeService } from "../services/calendar-range.service";
import { DateParser } from "../classes/date-parser";
var CalendarRangeHourService = /** @class */ (function (_super) {
    __extends(CalendarRangeHourService, _super);
    function CalendarRangeHourService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalendarRangeHourService.prototype.configureItem = function (item, baseDate) {
        // Set minutes and seconds to 0
        var customFormat = this.service.localeValues.formats.time.replace(/[ms]/g, "0");
        item.humanReadable = new DateParser(customFormat, this.service.localeValues).format(item.date);
        item.isOutsideRange = false;
    };
    return CalendarRangeHourService;
}(CalendarRangeService));
export { CalendarRangeHourService };
var SuiCalendarHourView = /** @class */ (function (_super) {
    __extends(SuiCalendarHourView, _super);
    function SuiCalendarHourView(renderer) {
        return _super.call(this, renderer, CalendarViewType.Hour, new CalendarRangeHourService(DatePrecision.Date, 6, 4)) || this;
    }
    Object.defineProperty(SuiCalendarHourView.prototype, "date", {
        get: function () {
            return new DateParser(this.service.localeValues.formats.date, this.service.localeValues).format(this.currentDate);
        },
        enumerable: true,
        configurable: true
    });
    SuiCalendarHourView.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    SuiCalendarHourView = __decorate([
        Component({
            selector: "sui-calendar-hour-view",
            template: "\n<table class=\"ui celled center aligned unstackable table four column hour\">\n<thead *ngIf=\"service.config.mode != 1\">\n    <tr>\n        <th colspan=\"4\">\n            <sui-calendar-view-title [ranges]=\"ranges\" (zoomOut)=\"zoomOut()\">\n                {{ date }}\n            </sui-calendar-view-title>\n        </th>\n    </tr>\n</thead>\n<tbody>\n    <tr *ngFor=\"let group of ranges.current.groupedItems\">\n        <td class=\"link\"\n            *ngFor=\"let item of group\"\n            [calendarItem]=\"item\"\n            (click)=\"setDate(item)\">{{ item.humanReadable }}\n        </td>\n    </tr>\n</tbody>\n</table>\n"
        }),
        __metadata("design:paramtypes", [Renderer2])
    ], SuiCalendarHourView);
    return SuiCalendarHourView;
}(CalendarView));
export { SuiCalendarHourView };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG91ci12aWV3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9kYXRlcGlja2VyL3ZpZXdzL2hvdXItdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFcEQ7SUFBOEMsNENBQW9CO0lBQWxFOztJQU9BLENBQUM7SUFOVSxnREFBYSxHQUFwQixVQUFxQixJQUFpQixFQUFFLFFBQWE7UUFDakQsK0JBQStCO1FBQy9CLElBQU0sWUFBWSxHQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksVUFBVSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0YsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUNMLCtCQUFDO0FBQUQsQ0FBQyxBQVBELENBQThDLG9CQUFvQixHQU9qRTs7QUEyQkQ7SUFBeUMsdUNBQVk7SUFNakQsNkJBQVksUUFBa0I7ZUFDMUIsa0JBQU0sUUFBUSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLHdCQUF3QixDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFORCxzQkFBVyxxQ0FBSTthQUFmO1lBQ0ksT0FBTyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0SCxDQUFDOzs7T0FBQTs7Z0JBRW9CLFNBQVM7O0lBTnJCLG1CQUFtQjtRQXpCL0IsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxRQUFRLEVBQUUsZ29CQXFCYjtTQUNBLENBQUM7eUNBT3VCLFNBQVM7T0FOckIsbUJBQW1CLENBUy9CO0lBQUQsMEJBQUM7Q0FBQSxBQVRELENBQXlDLFlBQVksR0FTcEQ7U0FUWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFJlbmRlcmVyMiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEYXRlUHJlY2lzaW9uIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3LCBDYWxlbmRhclZpZXdUeXBlIH0gZnJvbSBcIi4vY2FsZW5kYXItdmlld1wiO1xuaW1wb3J0IHsgQ2FsZW5kYXJJdGVtIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvY2FsZW5kYXItaXRlbVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJSYW5nZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgRGF0ZVBhcnNlciB9IGZyb20gXCIuLi9jbGFzc2VzL2RhdGUtcGFyc2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhclJhbmdlSG91clNlcnZpY2UgZXh0ZW5kcyBDYWxlbmRhclJhbmdlU2VydmljZSB7XG4gICAgcHVibGljIGNvbmZpZ3VyZUl0ZW0oaXRlbTpDYWxlbmRhckl0ZW0sIGJhc2VEYXRlOkRhdGUpOnZvaWQge1xuICAgICAgICAvLyBTZXQgbWludXRlcyBhbmQgc2Vjb25kcyB0byAwXG4gICAgICAgIGNvbnN0IGN1c3RvbUZvcm1hdDpzdHJpbmcgPSB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzLmZvcm1hdHMudGltZS5yZXBsYWNlKC9bbXNdL2csIFwiMFwiKTtcbiAgICAgICAgaXRlbS5odW1hblJlYWRhYmxlID0gbmV3IERhdGVQYXJzZXIoY3VzdG9tRm9ybWF0LCB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzKS5mb3JtYXQoaXRlbS5kYXRlKTtcbiAgICAgICAgaXRlbS5pc091dHNpZGVSYW5nZSA9IGZhbHNlO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWNhbGVuZGFyLWhvdXItdmlld1wiLFxuICAgIHRlbXBsYXRlOiBgXG48dGFibGUgY2xhc3M9XCJ1aSBjZWxsZWQgY2VudGVyIGFsaWduZWQgdW5zdGFja2FibGUgdGFibGUgZm91ciBjb2x1bW4gaG91clwiPlxuPHRoZWFkICpuZ0lmPVwic2VydmljZS5jb25maWcubW9kZSAhPSAxXCI+XG4gICAgPHRyPlxuICAgICAgICA8dGggY29sc3Bhbj1cIjRcIj5cbiAgICAgICAgICAgIDxzdWktY2FsZW5kYXItdmlldy10aXRsZSBbcmFuZ2VzXT1cInJhbmdlc1wiICh6b29tT3V0KT1cInpvb21PdXQoKVwiPlxuICAgICAgICAgICAgICAgIHt7IGRhdGUgfX1cbiAgICAgICAgICAgIDwvc3VpLWNhbGVuZGFyLXZpZXctdGl0bGU+XG4gICAgICAgIDwvdGg+XG4gICAgPC90cj5cbjwvdGhlYWQ+XG48dGJvZHk+XG4gICAgPHRyICpuZ0Zvcj1cImxldCBncm91cCBvZiByYW5nZXMuY3VycmVudC5ncm91cGVkSXRlbXNcIj5cbiAgICAgICAgPHRkIGNsYXNzPVwibGlua1wiXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBncm91cFwiXG4gICAgICAgICAgICBbY2FsZW5kYXJJdGVtXT1cIml0ZW1cIlxuICAgICAgICAgICAgKGNsaWNrKT1cInNldERhdGUoaXRlbSlcIj57eyBpdGVtLmh1bWFuUmVhZGFibGUgfX1cbiAgICAgICAgPC90ZD5cbiAgICA8L3RyPlxuPC90Ym9keT5cbjwvdGFibGU+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNhbGVuZGFySG91clZpZXcgZXh0ZW5kcyBDYWxlbmRhclZpZXcge1xuXG4gICAgcHVibGljIGdldCBkYXRlKCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlUGFyc2VyKHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMuZm9ybWF0cy5kYXRlLCB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzKS5mb3JtYXQodGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyKSB7XG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBDYWxlbmRhclZpZXdUeXBlLkhvdXIsIG5ldyBDYWxlbmRhclJhbmdlSG91clNlcnZpY2UoRGF0ZVByZWNpc2lvbi5EYXRlLCA2LCA0KSk7XG4gICAgfVxufVxuIl19