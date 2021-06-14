import { __decorate, __metadata } from "tslib";
import { Directive, HostBinding, HostListener, Input, EventEmitter, ChangeDetectorRef } from "@angular/core";
var CalendarItem = /** @class */ (function () {
    function CalendarItem(date) {
        this.date = date;
    }
    return CalendarItem;
}());
export { CalendarItem };
var SuiCalendarItem = /** @class */ (function () {
    function SuiCalendarItem(changeDetector) {
        this.changeDetector = changeDetector;
        this.hasFocus = false;
        this.onFocussed = new EventEmitter();
    }
    Object.defineProperty(SuiCalendarItem.prototype, "isSelectable", {
        get: function () {
            return this.item.isSelectable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiCalendarItem.prototype, "isActive", {
        get: function () {
            return this.item.isActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiCalendarItem.prototype, "isToday", {
        get: function () {
            return this.item.isToday;
        },
        enumerable: true,
        configurable: true
    });
    SuiCalendarItem.prototype.onMouseMove = function () {
        if (!this.hasFocus) {
            this.hasFocus = true;
            this.onFocussed.emit(this.hasFocus);
        }
    };
    SuiCalendarItem.prototype.onMouseLeave = function () {
        this.hasFocus = false;
        this.onFocussed.emit(this.hasFocus);
    };
    SuiCalendarItem.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        Input("calendarItem"),
        __metadata("design:type", CalendarItem)
    ], SuiCalendarItem.prototype, "item", void 0);
    __decorate([
        HostBinding("class.disabled"),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], SuiCalendarItem.prototype, "isSelectable", null);
    __decorate([
        HostBinding("class.active"),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], SuiCalendarItem.prototype, "isActive", null);
    __decorate([
        HostBinding("class.today"),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], SuiCalendarItem.prototype, "isToday", null);
    __decorate([
        HostBinding("class.focus"),
        __metadata("design:type", Boolean)
    ], SuiCalendarItem.prototype, "hasFocus", void 0);
    __decorate([
        HostListener("mousemove"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SuiCalendarItem.prototype, "onMouseMove", null);
    __decorate([
        HostListener("mouseleave"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SuiCalendarItem.prototype, "onMouseLeave", null);
    SuiCalendarItem = __decorate([
        Directive({
            selector: "[calendarItem]"
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], SuiCalendarItem);
    return SuiCalendarItem;
}());
export { SuiCalendarItem };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItaXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGF0ZXBpY2tlci9kaXJlY3RpdmVzL2NhbGVuZGFyLWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdHO0lBU0ksc0JBQVksSUFBUztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQzs7QUFLRDtJQXdCSSx5QkFBbUIsY0FBZ0M7UUFBaEMsbUJBQWMsR0FBZCxjQUFjLENBQWtCO1FBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUNsRCxDQUFDO0lBdkJELHNCQUFXLHlDQUFZO2FBQXZCO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUdELHNCQUFXLHFDQUFRO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLG9DQUFPO2FBQWxCO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQWNNLHFDQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztJQUdNLHNDQUFZLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7O2dCQWxCaUMsaUJBQWlCOztJQXRCbkQ7UUFEQyxLQUFLLENBQUMsY0FBYyxDQUFDO2tDQUNWLFlBQVk7aURBQUM7SUFHekI7UUFEQyxXQUFXLENBQUMsZ0JBQWdCLENBQUM7Ozt1REFHN0I7SUFHRDtRQURDLFdBQVcsQ0FBQyxjQUFjLENBQUM7OzttREFHM0I7SUFHRDtRQURDLFdBQVcsQ0FBQyxhQUFhLENBQUM7OztrREFHMUI7SUFHRDtRQURDLFdBQVcsQ0FBQyxhQUFhLENBQUM7O3FEQUNIO0lBV3hCO1FBREMsWUFBWSxDQUFDLFdBQVcsQ0FBQzs7OztzREFNekI7SUFHRDtRQURDLFlBQVksQ0FBQyxZQUFZLENBQUM7Ozs7dURBSTFCO0lBMUNRLGVBQWU7UUFIM0IsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtTQUM3QixDQUFDO3lDQXlCb0MsaUJBQWlCO09BeEIxQyxlQUFlLENBMkMzQjtJQUFELHNCQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7U0EzQ1ksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhckl0ZW0ge1xuICAgIHB1YmxpYyBkYXRlOkRhdGU7XG4gICAgcHVibGljIGh1bWFuUmVhZGFibGU6c3RyaW5nO1xuICAgIHB1YmxpYyBpc0Rpc2FibGVkOmJvb2xlYW47XG4gICAgcHVibGljIGlzQWN0aXZlOmJvb2xlYW47XG4gICAgcHVibGljIGlzT3V0c2lkZVJhbmdlOmJvb2xlYW47XG4gICAgcHVibGljIGlzVG9kYXk6Ym9vbGVhbjtcbiAgICBwdWJsaWMgaXNTZWxlY3RhYmxlOmJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRlOkRhdGUpIHtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltjYWxlbmRhckl0ZW1dXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpQ2FsZW5kYXJJdGVtIHtcbiAgICBASW5wdXQoXCJjYWxlbmRhckl0ZW1cIilcbiAgICBwdWJsaWMgaXRlbTpDYWxlbmRhckl0ZW07XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5kaXNhYmxlZFwiKVxuICAgIHB1YmxpYyBnZXQgaXNTZWxlY3RhYmxlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0uaXNTZWxlY3RhYmxlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjdGl2ZVwiKVxuICAgIHB1YmxpYyBnZXQgaXNBY3RpdmUoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbS5pc0FjdGl2ZTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy50b2RheVwiKVxuICAgIHB1YmxpYyBnZXQgaXNUb2RheSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtLmlzVG9kYXk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuZm9jdXNcIilcbiAgICBwdWJsaWMgaGFzRm9jdXM6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBvbkZvY3Vzc2VkOkV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjaGFuZ2VEZXRlY3RvcjpDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICB0aGlzLmhhc0ZvY3VzID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5vbkZvY3Vzc2VkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJtb3VzZW1vdmVcIilcbiAgICBwdWJsaWMgb25Nb3VzZU1vdmUoKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzKSB7XG4gICAgICAgICAgICB0aGlzLmhhc0ZvY3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMub25Gb2N1c3NlZC5lbWl0KHRoaXMuaGFzRm9jdXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIilcbiAgICBwdWJsaWMgb25Nb3VzZUxlYXZlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkZvY3Vzc2VkLmVtaXQodGhpcy5oYXNGb2N1cyk7XG4gICAgfVxufVxuIl19