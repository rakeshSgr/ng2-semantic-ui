import { __decorate, __metadata } from "tslib";
import { Component, Input, EventEmitter, Output } from "@angular/core";
import { CalendarRangeService } from "../services/calendar-range.service";
var SuiCalendarViewTitle = /** @class */ (function () {
    function SuiCalendarViewTitle() {
        this.onZoomOut = new EventEmitter();
    }
    __decorate([
        Input(),
        __metadata("design:type", CalendarRangeService)
    ], SuiCalendarViewTitle.prototype, "ranges", void 0);
    __decorate([
        Output("zoomOut"),
        __metadata("design:type", EventEmitter)
    ], SuiCalendarViewTitle.prototype, "onZoomOut", void 0);
    SuiCalendarViewTitle = __decorate([
        Component({
            selector: "sui-calendar-view-title",
            template: "\n<span class=\"title link\" (click)=\"onZoomOut.emit()\">\n    <ng-content></ng-content>\n</span>\n<span class=\"prev link\" [class.disabled]=\"!ranges?.canMovePrevious\" (click)=\"ranges?.movePrevious()\">\n    <i class=\"chevron left icon\"></i>\n</span>\n<span class=\"next link\" [class.disabled]=\"!ranges?.canMoveNext\" (click)=\"ranges?.moveNext()\">\n    <i class=\"chevron right icon\"></i>\n</span>\n",
            styles: ["\n.title.link {\n    display: inline-block;\n    margin-left: 2rem;\n    margin-right: 2rem;\n}\n"]
        }),
        __metadata("design:paramtypes", [])
    ], SuiCalendarViewTitle);
    return SuiCalendarViewTitle;
}());
export { SuiCalendarViewTitle };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItdmlldy10aXRsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGF0ZXBpY2tlci9jb21wb25lbnRzL2NhbGVuZGFyLXZpZXctdGl0bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUF1QjFFO0lBUUk7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUFDOUMsQ0FBQztJQVBEO1FBREMsS0FBSyxFQUFFO2tDQUNNLG9CQUFvQjt3REFBQztJQUduQztRQURDLE1BQU0sQ0FBQyxTQUFTLENBQUM7a0NBQ0QsWUFBWTsyREFBTztJQU4zQixvQkFBb0I7UUFyQmhDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsUUFBUSxFQUFFLDZaQVViO3FCQUNZLG1HQU1aO1NBQ0EsQ0FBQzs7T0FDVyxvQkFBb0IsQ0FXaEM7SUFBRCwyQkFBQztDQUFBLEFBWEQsSUFXQztTQVhZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENhbGVuZGFyUmFuZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NhbGVuZGFyLXJhbmdlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWNhbGVuZGFyLXZpZXctdGl0bGVcIixcbiAgICB0ZW1wbGF0ZTogYFxuPHNwYW4gY2xhc3M9XCJ0aXRsZSBsaW5rXCIgKGNsaWNrKT1cIm9uWm9vbU91dC5lbWl0KClcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L3NwYW4+XG48c3BhbiBjbGFzcz1cInByZXYgbGlua1wiIFtjbGFzcy5kaXNhYmxlZF09XCIhcmFuZ2VzPy5jYW5Nb3ZlUHJldmlvdXNcIiAoY2xpY2spPVwicmFuZ2VzPy5tb3ZlUHJldmlvdXMoKVwiPlxuICAgIDxpIGNsYXNzPVwiY2hldnJvbiBsZWZ0IGljb25cIj48L2k+XG48L3NwYW4+XG48c3BhbiBjbGFzcz1cIm5leHQgbGlua1wiIFtjbGFzcy5kaXNhYmxlZF09XCIhcmFuZ2VzPy5jYW5Nb3ZlTmV4dFwiIChjbGljayk9XCJyYW5nZXM/Lm1vdmVOZXh0KClcIj5cbiAgICA8aSBjbGFzcz1cImNoZXZyb24gcmlnaHQgaWNvblwiPjwvaT5cbjwvc3Bhbj5cbmAsXG4gICAgc3R5bGVzOiBbYFxuLnRpdGxlLmxpbmsge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlDYWxlbmRhclZpZXdUaXRsZSB7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyByYW5nZXM6Q2FsZW5kYXJSYW5nZVNlcnZpY2U7XG5cbiAgICBAT3V0cHV0KFwiem9vbU91dFwiKVxuICAgIHB1YmxpYyBvblpvb21PdXQ6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub25ab29tT3V0ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICAgIH1cbn1cbiJdfQ==