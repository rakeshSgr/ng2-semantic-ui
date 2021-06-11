/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, HostBinding, HostListener, EventEmitter, Renderer2, ElementRef, ChangeDetectorRef } from "@angular/core";
import { TransitionController, SuiTransition, TransitionDirection, Transition } from "../../transition/internal";
var SuiDimmer = /** @class */ (function (_super) {
    tslib_1.__extends(SuiDimmer, _super);
    function SuiDimmer(renderer, element, changeDetector) {
        var _this = _super.call(this, renderer, element, changeDetector) || this;
        _this._isDimmed = false;
        _this.isDimmedChange = new EventEmitter();
        _this.isClickable = true;
        _this.wrapContent = true;
        _this.hasClasses = true;
        return _this;
    }
    Object.defineProperty(SuiDimmer.prototype, "isDimmed", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isDimmed;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var /** @type {?} */ isDimmed = !!value;
            if (!this._transitionController) {
                // Initialise transition functionality when first setting dimmed, to ensure initial state doesn't transition.
                this._transitionController = new TransitionController(isDimmed, "block");
                this.setTransitionController(this._transitionController);
                this._isDimmed = isDimmed;
            }
            else if (this._isDimmed !== isDimmed) {
                this._isDimmed = isDimmed;
                this._transitionController.stopAll();
                this._transitionController.animate(new Transition("fade", this.transitionDuration, isDimmed ? TransitionDirection.In : TransitionDirection.Out));
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiDimmer.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.isClickable) {
            this.isDimmed = false;
            this.isDimmedChange.emit(this.isDimmed);
        }
    };
    SuiDimmer.decorators = [
        { type: Component, args: [{
                    selector: "sui-dimmer",
                    template: "\n<div [class.content]=\"wrapContent\">\n    <ng-content></ng-content>\n</div>\n",
                    styles: ["\n:host.dimmer:not(.hidden) {\n    transition: none;\n    display: flex !important;\n}\n"]
                }] }
    ];
    /** @nocollapse */
    SuiDimmer.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    SuiDimmer.propDecorators = {
        hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.dimmer",] }],
        isDimmed: [{ type: HostBinding, args: ["class.active",] }, { type: Input }],
        isDimmedChange: [{ type: Output }],
        isClickable: [{ type: Input }],
        transition: [{ type: Input }],
        transitionDuration: [{ type: Input }],
        wrapContent: [{ type: Input }],
        onClick: [{ type: HostListener, args: ["click",] }]
    };
    return SuiDimmer;
}(SuiTransition));
export { SuiDimmer };
function SuiDimmer_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiDimmer.prototype.hasClasses;
    /** @type {?} */
    SuiDimmer.prototype._transitionController;
    /** @type {?} */
    SuiDimmer.prototype._isDimmed;
    /** @type {?} */
    SuiDimmer.prototype.isDimmedChange;
    /** @type {?} */
    SuiDimmer.prototype.isClickable;
    /** @type {?} */
    SuiDimmer.prototype.transition;
    /** @type {?} */
    SuiDimmer.prototype.transitionDuration;
    /** @type {?} */
    SuiDimmer.prototype.wrapContent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGltbWVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9kaW1tZXIvY29tcG9uZW50cy9kaW1tZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUM1RSxVQUFVLEVBQUUsaUJBQWlCLEVBQ2hDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0lBZ0JsRixxQ0FBYTtJQW1EeEMsbUJBQVksUUFBa0IsRUFBRSxPQUFrQixFQUFFLGNBQWdDO1FBQXBGLFlBQ0ksa0JBQU0sUUFBUSxFQUFFLE9BQU8sRUFBRSxjQUFjLENBQUMsU0FTM0M7UUFQRyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDbEQsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFeEIsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFeEIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7O0tBQzFCO0lBcERELHNCQUVXLCtCQUFROzs7O1FBRm5CO1lBR0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3pCOzs7OztrQkFFbUIsS0FBYTtZQUM3QixxQkFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUV6QixJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFOztnQkFFN0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksb0JBQW9CLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUV6RSxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBRXpELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO2FBQzdCO2lCQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxRQUFRLEVBQUU7Z0JBRXBDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO2dCQUUxQixJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQzlCLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDckg7Ozs7T0FuQko7Ozs7SUFtRE0sMkJBQU87OztJQURkO1FBRUksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMzQztLQUNKOztnQkFuRkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsa0ZBSWI7NkJBQ1ksMEZBS1o7aUJBQ0E7Ozs7Z0JBbEJzRSxTQUFTO2dCQUM1RSxVQUFVO2dCQUFFLGlCQUFpQjs7OzZCQW1CNUIsV0FBVyxTQUFDLFVBQVUsY0FDdEIsV0FBVyxTQUFDLGNBQWM7MkJBTzFCLFdBQVcsU0FBQyxjQUFjLGNBQzFCLEtBQUs7aUNBeUJMLE1BQU07OEJBR04sS0FBSzs2QkFHTCxLQUFLO3FDQUdMLEtBQUs7OEJBSUwsS0FBSzswQkFlTCxZQUFZLFNBQUMsT0FBTzs7b0JBbkZ6QjtFQW9CK0IsYUFBYTtTQUEvQixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIEV2ZW50RW1pdHRlciwgUmVuZGVyZXIyLFxuICAgIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uQ29udHJvbGxlciwgU3VpVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbiwgVHJhbnNpdGlvbiB9IGZyb20gXCIuLi8uLi90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1kaW1tZXJcIixcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBbY2xhc3MuY29udGVudF09XCJ3cmFwQ29udGVudFwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgXG46aG9zdC5kaW1tZXI6bm90KC5oaWRkZW4pIHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aURpbW1lciBleHRlbmRzIFN1aVRyYW5zaXRpb24ge1xuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuZGltbWVyXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIHByaXZhdGUgX3RyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyO1xuXG4gICAgcHJpdmF0ZSBfaXNEaW1tZWQ6Ym9vbGVhbjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjdGl2ZVwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc0RpbW1lZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNEaW1tZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0RpbW1lZCh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IGlzRGltbWVkID0gISF2YWx1ZTtcblxuICAgICAgICBpZiAoIXRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyKSB7XG4gICAgICAgICAgICAvLyBJbml0aWFsaXNlIHRyYW5zaXRpb24gZnVuY3Rpb25hbGl0eSB3aGVuIGZpcnN0IHNldHRpbmcgZGltbWVkLCB0byBlbnN1cmUgaW5pdGlhbCBzdGF0ZSBkb2Vzbid0IHRyYW5zaXRpb24uXG4gICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlciA9IG5ldyBUcmFuc2l0aW9uQ29udHJvbGxlcihpc0RpbW1lZCwgXCJibG9ja1wiKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uQ29udHJvbGxlcih0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlcik7XG5cbiAgICAgICAgICAgIHRoaXMuX2lzRGltbWVkID0gaXNEaW1tZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5faXNEaW1tZWQgIT09IGlzRGltbWVkKSB7XG5cbiAgICAgICAgICAgIHRoaXMuX2lzRGltbWVkID0gaXNEaW1tZWQ7XG5cbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyLnN0b3BBbGwoKTtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAgbmV3IFRyYW5zaXRpb24oXCJmYWRlXCIsIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uLCBpc0RpbW1lZCA/IFRyYW5zaXRpb25EaXJlY3Rpb24uSW4gOiBUcmFuc2l0aW9uRGlyZWN0aW9uLk91dCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIGlzRGltbWVkQ2hhbmdlOkV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzQ2xpY2thYmxlOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uOnN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRyYW5zaXRpb25EdXJhdGlvbjpudW1iZXI7XG5cbiAgICAvKiBJbnRlcm5hbCBmb3Igbm93ICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgd3JhcENvbnRlbnQ6Ym9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMiwgZWxlbWVudDpFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvcjpDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICBzdXBlcihyZW5kZXJlciwgZWxlbWVudCwgY2hhbmdlRGV0ZWN0b3IpO1xuXG4gICAgICAgIHRoaXMuX2lzRGltbWVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNEaW1tZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gICAgICAgIHRoaXMuaXNDbGlja2FibGUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMud3JhcENvbnRlbnQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIpXG4gICAgcHVibGljIG9uQ2xpY2soKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDbGlja2FibGUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNEaW1tZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNEaW1tZWRDaGFuZ2UuZW1pdCh0aGlzLmlzRGltbWVkKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==