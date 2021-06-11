/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, HostBinding, HostListener, EventEmitter, ViewContainerRef, ViewChild, Renderer2, ElementRef, Output, ChangeDetectorRef } from "@angular/core";
import { SuiDropdownMenuItem } from "../../dropdown/internal";
import { HandledEvent } from "../../../misc/util/internal";
/**
 * @template T
 */
var SuiSelectOption = /** @class */ (function (_super) {
    tslib_1.__extends(SuiSelectOption, _super);
    function SuiSelectOption(renderer, element, changeDetector) {
        var _this = 
        // We inherit SuiDropdownMenuItem to automatically gain all keyboard navigation functionality.
        // This is not done via adding the .item class because it isn't supported by Angular.
        _super.call(this, renderer, element) || this;
        _this.changeDetector = changeDetector;
        _this.hasClasses = true;
        _this.isActive = false;
        _this.onSelected = new EventEmitter();
        // By default we make the default text an empty label, for the brief moment when it isn't displaying the correct one.
        _this.renderedText = "";
        _this.usesTemplate = false;
        return _this;
    }
    Object.defineProperty(SuiSelectOption.prototype, "formatter", {
        set: /**
         * @param {?} formatter
         * @return {?}
         */
        function (formatter) {
            if (!this.usesTemplate) {
                this.renderedText = formatter(this.value);
            }
            else {
                this.renderedText = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    SuiSelectOption.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.eventHandled = true;
        setTimeout(function () { return _this.onSelected.emit(_this.value); });
    };
    SuiSelectOption.decorators = [
        { type: Component, args: [{
                    selector: "sui-select-option",
                    template: "\n<span #templateSibling></span>\n<span [innerHTML]=\"renderedText\"></span>\n"
                }] }
    ];
    /** @nocollapse */
    SuiSelectOption.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    SuiSelectOption.propDecorators = {
        hasClasses: [{ type: HostBinding, args: ["class.item",] }],
        value: [{ type: Input }],
        onSelected: [{ type: Output }],
        isActive: [{ type: HostBinding, args: ["class.active",] }],
        templateSibling: [{ type: ViewChild, args: ["templateSibling", { read: ViewContainerRef, static: true },] }],
        onClick: [{ type: HostListener, args: ["click", ["$event"],] }]
    };
    return SuiSelectOption;
}(SuiDropdownMenuItem));
export { SuiSelectOption };
function SuiSelectOption_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiSelectOption.prototype.hasClasses;
    /** @type {?} */
    SuiSelectOption.prototype.value;
    /** @type {?} */
    SuiSelectOption.prototype.onSelected;
    /** @type {?} */
    SuiSelectOption.prototype.isActive;
    /** @type {?} */
    SuiSelectOption.prototype.renderedText;
    /** @type {?} */
    SuiSelectOption.prototype.usesTemplate;
    /** @type {?} */
    SuiSelectOption.prototype.templateSibling;
    /** @type {?} */
    SuiSelectOption.prototype.changeDetector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvc2VsZWN0L2NvbXBvbmVudHMvc2VsZWN0LW9wdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUMzRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQzlELE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7SUFTbkIsMkNBQW1CO0lBK0J2RCx5QkFBWSxRQUFrQixFQUFFLE9BQWtCLEVBQVMsY0FBZ0M7UUFBM0Y7UUFDSSw4RkFBOEY7UUFDOUYscUZBQXFGO1FBQ3JGLGtCQUFNLFFBQVEsRUFBRSxPQUFPLENBQUMsU0FVM0I7UUFiMEQsb0JBQWMsR0FBZCxjQUFjLENBQWtCO1FBS3ZGLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUssQ0FBQzs7UUFHeEMsS0FBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFFdkIsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7O0tBQzdCOzBCQTNCVSxzQ0FBUzs7Ozs7a0JBQUMsU0FBMkI7WUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM3QztpQkFBTTtnQkFDSCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQzthQUMxQjs7Ozs7Ozs7O0lBeUJFLGlDQUFPOzs7O0lBRGQsVUFDZSxDQUFjO1FBRDdCLGlCQUtDO1FBSEcsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFdEIsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQWhDLENBQWdDLENBQUMsQ0FBQztLQUN0RDs7Z0JBMURKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsZ0ZBR2I7aUJBQ0E7Ozs7Z0JBWGMsU0FBUztnQkFBRSxVQUFVO2dCQUFVLGlCQUFpQjs7OzZCQWMxRCxXQUFXLFNBQUMsWUFBWTt3QkFHeEIsS0FBSzs2QkFJTCxNQUFNOzJCQUdOLFdBQVcsU0FBQyxjQUFjO2tDQWdCMUIsU0FBUyxTQUFDLGlCQUFpQixFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MEJBa0JyRSxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzswQkE1RHJDO0VBY3dDLG1CQUFtQjtTQUE5QyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBFdmVudEVtaXR0ZXIsIFZpZXdDb250YWluZXJSZWYsXG4gICAgVmlld0NoaWxkLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIE91dHB1dCwgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aURyb3Bkb3duTWVudUl0ZW0gfSBmcm9tIFwiLi4vLi4vZHJvcGRvd24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IEhhbmRsZWRFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXNlbGVjdC1vcHRpb25cIixcbiAgICB0ZW1wbGF0ZTogYFxuPHNwYW4gI3RlbXBsYXRlU2libGluZz48L3NwYW4+XG48c3BhbiBbaW5uZXJIVE1MXT1cInJlbmRlcmVkVGV4dFwiPjwvc3Bhbj5cbmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpU2VsZWN0T3B0aW9uPFQ+IGV4dGVuZHMgU3VpRHJvcGRvd25NZW51SXRlbSB7XG4gICAgLy8gU2V0cyB0aGUgU2VtYW50aWMgVUkgY2xhc3NlcyBvbiB0aGUgaG9zdCBlbGVtZW50LlxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLml0ZW1cIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdmFsdWU6VDtcblxuICAgIC8vIEZpcmVzIHdoZW4gdGhlIG9wdGlvbiBpcyBzZWxlY3RlZCwgd2hldGhlciBieSBjbGlja2luZyBvciBieSBrZXlib2FyZC5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25TZWxlY3RlZDpFdmVudEVtaXR0ZXI8VD47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBwdWJsaWMgaXNBY3RpdmU6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyByZW5kZXJlZFRleHQ/OnN0cmluZztcblxuICAgIHB1YmxpYyBzZXQgZm9ybWF0dGVyKGZvcm1hdHRlcjoob2JqOlQpID0+IHN0cmluZykge1xuICAgICAgICBpZiAoIXRoaXMudXNlc1RlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkVGV4dCA9IGZvcm1hdHRlcih0aGlzLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRUZXh0ID0gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB1c2VzVGVtcGxhdGU6Ym9vbGVhbjtcblxuICAgIC8vIFBsYWNlaG9sZGVyIHRvIGRyYXcgdGVtcGxhdGUgYmVzaWRlLlxuICAgIEBWaWV3Q2hpbGQoXCJ0ZW1wbGF0ZVNpYmxpbmdcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgdGVtcGxhdGVTaWJsaW5nOlZpZXdDb250YWluZXJSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsIGVsZW1lbnQ6RWxlbWVudFJlZiwgcHVibGljIGNoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIC8vIFdlIGluaGVyaXQgU3VpRHJvcGRvd25NZW51SXRlbSB0byBhdXRvbWF0aWNhbGx5IGdhaW4gYWxsIGtleWJvYXJkIG5hdmlnYXRpb24gZnVuY3Rpb25hbGl0eS5cbiAgICAgICAgLy8gVGhpcyBpcyBub3QgZG9uZSB2aWEgYWRkaW5nIHRoZSAuaXRlbSBjbGFzcyBiZWNhdXNlIGl0IGlzbid0IHN1cHBvcnRlZCBieSBBbmd1bGFyLlxuICAgICAgICBzdXBlcihyZW5kZXJlciwgZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XG5cbiAgICAgICAgLy8gQnkgZGVmYXVsdCB3ZSBtYWtlIHRoZSBkZWZhdWx0IHRleHQgYW4gZW1wdHkgbGFiZWwsIGZvciB0aGUgYnJpZWYgbW9tZW50IHdoZW4gaXQgaXNuJ3QgZGlzcGxheWluZyB0aGUgY29ycmVjdCBvbmUuXG4gICAgICAgIHRoaXMucmVuZGVyZWRUZXh0ID0gXCJcIjtcblxuICAgICAgICB0aGlzLnVzZXNUZW1wbGF0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uQ2xpY2soZTpIYW5kbGVkRXZlbnQpOnZvaWQge1xuICAgICAgICBlLmV2ZW50SGFuZGxlZCA9IHRydWU7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm9uU2VsZWN0ZWQuZW1pdCh0aGlzLnZhbHVlKSk7XG4gICAgfVxufVxuIl19