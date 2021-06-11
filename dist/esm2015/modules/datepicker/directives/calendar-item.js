/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, HostBinding, HostListener, Input, EventEmitter, ChangeDetectorRef } from "@angular/core";
export class CalendarItem {
    /**
     * @param {?} date
     */
    constructor(date) {
        this.date = date;
    }
}
function CalendarItem_tsickle_Closure_declarations() {
    /** @type {?} */
    CalendarItem.prototype.date;
    /** @type {?} */
    CalendarItem.prototype.humanReadable;
    /** @type {?} */
    CalendarItem.prototype.isDisabled;
    /** @type {?} */
    CalendarItem.prototype.isActive;
    /** @type {?} */
    CalendarItem.prototype.isOutsideRange;
    /** @type {?} */
    CalendarItem.prototype.isToday;
    /** @type {?} */
    CalendarItem.prototype.isSelectable;
}
export class SuiCalendarItem {
    /**
     * @param {?} changeDetector
     */
    constructor(changeDetector) {
        this.changeDetector = changeDetector;
        this.hasFocus = false;
        this.onFocussed = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get isSelectable() {
        return this.item.isSelectable;
    }
    /**
     * @return {?}
     */
    get isActive() {
        return this.item.isActive;
    }
    /**
     * @return {?}
     */
    get isToday() {
        return this.item.isToday;
    }
    /**
     * @return {?}
     */
    onMouseMove() {
        if (!this.hasFocus) {
            this.hasFocus = true;
            this.onFocussed.emit(this.hasFocus);
        }
    }
    /**
     * @return {?}
     */
    onMouseLeave() {
        this.hasFocus = false;
        this.onFocussed.emit(this.hasFocus);
    }
}
SuiCalendarItem.decorators = [
    { type: Directive, args: [{
                selector: "[calendarItem]"
            },] }
];
/** @nocollapse */
SuiCalendarItem.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
SuiCalendarItem.propDecorators = {
    item: [{ type: Input, args: ["calendarItem",] }],
    isSelectable: [{ type: HostBinding, args: ["class.disabled",] }],
    isActive: [{ type: HostBinding, args: ["class.active",] }],
    isToday: [{ type: HostBinding, args: ["class.today",] }],
    hasFocus: [{ type: HostBinding, args: ["class.focus",] }],
    onMouseMove: [{ type: HostListener, args: ["mousemove",] }],
    onMouseLeave: [{ type: HostListener, args: ["mouseleave",] }]
};
function SuiCalendarItem_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiCalendarItem.prototype.item;
    /** @type {?} */
    SuiCalendarItem.prototype.hasFocus;
    /** @type {?} */
    SuiCalendarItem.prototype.onFocussed;
    /** @type {?} */
    SuiCalendarItem.prototype.changeDetector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItaXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGF0ZXBpY2tlci9kaXJlY3RpdmVzL2NhbGVuZGFyLWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdHLE1BQU0sT0FBTyxZQUFZOzs7O0lBU3JCLFlBQVksSUFBUztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUNwQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtELE1BQU0sT0FBTyxlQUFlOzs7O0lBd0J4QixZQUFtQixjQUFnQztRQUFoQyxtQkFBYyxHQUFkLGNBQWMsQ0FBa0I7UUFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0tBQ2pEOzs7O0lBeEJELElBQ1csWUFBWTtRQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0tBQ2pDOzs7O0lBRUQsSUFDVyxRQUFRO1FBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztLQUM3Qjs7OztJQUVELElBQ1csT0FBTztRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDNUI7Ozs7SUFjTSxXQUFXO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZDO0tBQ0o7Ozs7SUFHTSxZQUFZO1FBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3ZDOzs7WUE3Q0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7YUFDN0I7Ozs7WUFsQm1FLGlCQUFpQjs7O21CQW9CaEYsS0FBSyxTQUFDLGNBQWM7MkJBR3BCLFdBQVcsU0FBQyxnQkFBZ0I7dUJBSzVCLFdBQVcsU0FBQyxjQUFjO3NCQUsxQixXQUFXLFNBQUMsYUFBYTt1QkFLekIsV0FBVyxTQUFDLGFBQWE7MEJBV3pCLFlBQVksU0FBQyxXQUFXOzJCQVF4QixZQUFZLFNBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhckl0ZW0ge1xuICAgIHB1YmxpYyBkYXRlOkRhdGU7XG4gICAgcHVibGljIGh1bWFuUmVhZGFibGU6c3RyaW5nO1xuICAgIHB1YmxpYyBpc0Rpc2FibGVkOmJvb2xlYW47XG4gICAgcHVibGljIGlzQWN0aXZlOmJvb2xlYW47XG4gICAgcHVibGljIGlzT3V0c2lkZVJhbmdlOmJvb2xlYW47XG4gICAgcHVibGljIGlzVG9kYXk6Ym9vbGVhbjtcbiAgICBwdWJsaWMgaXNTZWxlY3RhYmxlOmJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRlOkRhdGUpIHtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltjYWxlbmRhckl0ZW1dXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpQ2FsZW5kYXJJdGVtIHtcbiAgICBASW5wdXQoXCJjYWxlbmRhckl0ZW1cIilcbiAgICBwdWJsaWMgaXRlbTpDYWxlbmRhckl0ZW07XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5kaXNhYmxlZFwiKVxuICAgIHB1YmxpYyBnZXQgaXNTZWxlY3RhYmxlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0uaXNTZWxlY3RhYmxlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjdGl2ZVwiKVxuICAgIHB1YmxpYyBnZXQgaXNBY3RpdmUoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbS5pc0FjdGl2ZTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy50b2RheVwiKVxuICAgIHB1YmxpYyBnZXQgaXNUb2RheSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtLmlzVG9kYXk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuZm9jdXNcIilcbiAgICBwdWJsaWMgaGFzRm9jdXM6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBvbkZvY3Vzc2VkOkV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjaGFuZ2VEZXRlY3RvcjpDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICB0aGlzLmhhc0ZvY3VzID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5vbkZvY3Vzc2VkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJtb3VzZW1vdmVcIilcbiAgICBwdWJsaWMgb25Nb3VzZU1vdmUoKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzKSB7XG4gICAgICAgICAgICB0aGlzLmhhc0ZvY3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMub25Gb2N1c3NlZC5lbWl0KHRoaXMuaGFzRm9jdXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIilcbiAgICBwdWJsaWMgb25Nb3VzZUxlYXZlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkZvY3Vzc2VkLmVtaXQodGhpcy5oYXNGb2N1cyk7XG4gICAgfVxufVxuIl19