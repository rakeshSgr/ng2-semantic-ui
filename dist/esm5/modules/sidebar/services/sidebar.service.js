/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { EventEmitter } from "@angular/core";
export var /** @type {?} */ SidebarTransition = {
    Overlay: "overlay",
    Push: "push",
    ScaleDown: "scale down",
    Uncover: "uncover",
    SlideAlong: "slide along",
    SlideOut: "slide out"
};
export var /** @type {?} */ SidebarDirection = {
    Left: "left",
    Right: "right",
    Top: "top",
    Bottom: "bottom"
};
var SidebarService = /** @class */ (function () {
    function SidebarService(isVisible) {
        if (isVisible === void 0) { isVisible = false; }
        this.isVisible = isVisible;
        this.isAnimating = false;
        this.wasJustOpened = false;
        this.isVisibleChange = new EventEmitter();
        this.widthChange = new EventEmitter();
        this.heightChange = new EventEmitter();
        this.width = 260;
        this.height = 0;
        this.transition = SidebarTransition.Uncover;
    }
    Object.defineProperty(SidebarService.prototype, "width", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.direction === SidebarDirection.Left) {
                return this._width;
            }
            if (this.direction === SidebarDirection.Right) {
                return -this._width;
            }
            return 0;
        },
        set: /**
         * @param {?} width
         * @return {?}
         */
        function (width) {
            this._width = width;
            this.widthChange.emit();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarService.prototype, "height", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.direction === SidebarDirection.Top) {
                return this._height;
            }
            if (this.direction === SidebarDirection.Bottom) {
                return -this._height;
            }
            return 0;
        },
        set: /**
         * @param {?} height
         * @return {?}
         */
        function (height) {
            this._height = height;
            this.heightChange.emit();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} isVisible
     * @return {?}
     */
    SidebarService.prototype.setVisibleState = /**
     * @param {?} isVisible
     * @return {?}
     */
    function (isVisible) {
        var _this = this;
        if (this.isVisible !== isVisible) {
            this.isVisible = isVisible;
            this.isAnimating = true;
            this.wasJustOpened = true;
            this.isVisibleChange.emit(isVisible);
            setTimeout(function () { return _this.wasJustOpened = false; });
            clearTimeout(this._isAnimatingTimeout);
            this._isAnimatingTimeout = window.setTimeout(function () { return _this.isAnimating = false; }, 500);
        }
    };
    /**
     * @return {?}
     */
    SidebarService.prototype.toggleVisibleState = /**
     * @return {?}
     */
    function () {
        this.setVisibleState(!this.isVisible);
    };
    return SidebarService;
}());
export { SidebarService };
function SidebarService_tsickle_Closure_declarations() {
    /** @type {?} */
    SidebarService.prototype.isVisible;
    /** @type {?} */
    SidebarService.prototype.isAnimating;
    /** @type {?} */
    SidebarService.prototype.wasJustOpened;
    /** @type {?} */
    SidebarService.prototype.direction;
    /** @type {?} */
    SidebarService.prototype._width;
    /** @type {?} */
    SidebarService.prototype._height;
    /** @type {?} */
    SidebarService.prototype.isVisibleChange;
    /** @type {?} */
    SidebarService.prototype.widthChange;
    /** @type {?} */
    SidebarService.prototype.heightChange;
    /** @type {?} */
    SidebarService.prototype._isAnimatingTimeout;
    /** @type {?} */
    SidebarService.prototype.transition;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9zaWRlYmFyL3NlcnZpY2VzL3NpZGViYXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUk3QyxNQUFNLENBQUMscUJBQU0saUJBQWlCLEdBQUc7SUFDN0IsT0FBTyxFQUFFLFNBQThCO0lBQ3ZDLElBQUksRUFBRSxNQUEyQjtJQUNqQyxTQUFTLEVBQUUsWUFBaUM7SUFDNUMsT0FBTyxFQUFFLFNBQThCO0lBQ3ZDLFVBQVUsRUFBRSxhQUFrQztJQUM5QyxRQUFRLEVBQUUsV0FBZ0M7Q0FDN0MsQ0FBQztBQUlGLE1BQU0sQ0FBQyxxQkFBTSxnQkFBZ0IsR0FBRztJQUM1QixJQUFJLEVBQUUsTUFBMEI7SUFDaEMsS0FBSyxFQUFFLE9BQTJCO0lBQ2xDLEdBQUcsRUFBRSxLQUF5QjtJQUM5QixNQUFNLEVBQUUsUUFBNEI7Q0FDdkMsQ0FBQztBQUVGLElBQUE7SUFnREksd0JBQVksU0FBeUI7UUFBekIsMEJBQUEsRUFBQSxpQkFBeUI7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFFM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ25ELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFN0MsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFFaEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7S0FDL0M7MEJBbkRVLGlDQUFLOzs7OztZQUNaLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUU7Z0JBQzFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUN0QjtZQUNELElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7Z0JBQzNDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ3ZCO1lBQ0QsT0FBTyxDQUFDLENBQUM7Ozs7OztrQkFHSSxLQUFZO1lBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7OzBCQUdqQixrQ0FBTTs7Ozs7WUFDYixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssZ0JBQWdCLENBQUMsR0FBRyxFQUFFO2dCQUN6QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDdkI7WUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssZ0JBQWdCLENBQUMsTUFBTSxFQUFFO2dCQUM1QyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUN4QjtZQUNELE9BQU8sQ0FBQyxDQUFDOzs7Ozs7a0JBR0ssTUFBYTtZQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDOzs7Ozs7Ozs7SUEwQnRCLHdDQUFlOzs7O2NBQUMsU0FBaUI7O1FBQ3BDLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFFMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFckMsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO1lBQzdDLFlBQVksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLEVBQXhCLENBQXdCLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDckY7Ozs7O0lBR0UsMkNBQWtCOzs7O1FBQ3JCLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7O3lCQXBHOUM7SUFzR0MsQ0FBQTtBQWhGRCwwQkFnRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgdHlwZSBTaWRlYmFyVHJhbnNpdGlvbiA9IFwib3ZlcmxheVwiIHwgXCJwdXNoXCIgfCBcInNjYWxlIGRvd25cIiB8IFwidW5jb3ZlclwiIHwgXCJzbGlkZSBhbG9uZ1wiIHwgXCJzbGlkZSBvdXRcIjtcblxuZXhwb3J0IGNvbnN0IFNpZGViYXJUcmFuc2l0aW9uID0ge1xuICAgIE92ZXJsYXk6IFwib3ZlcmxheVwiIGFzIFNpZGViYXJUcmFuc2l0aW9uLFxuICAgIFB1c2g6IFwicHVzaFwiIGFzIFNpZGViYXJUcmFuc2l0aW9uLFxuICAgIFNjYWxlRG93bjogXCJzY2FsZSBkb3duXCIgYXMgU2lkZWJhclRyYW5zaXRpb24sXG4gICAgVW5jb3ZlcjogXCJ1bmNvdmVyXCIgYXMgU2lkZWJhclRyYW5zaXRpb24sXG4gICAgU2xpZGVBbG9uZzogXCJzbGlkZSBhbG9uZ1wiIGFzIFNpZGViYXJUcmFuc2l0aW9uLFxuICAgIFNsaWRlT3V0OiBcInNsaWRlIG91dFwiIGFzIFNpZGViYXJUcmFuc2l0aW9uXG59O1xuXG5leHBvcnQgdHlwZSBTaWRlYmFyRGlyZWN0aW9uID0gXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcInRvcFwiIHwgXCJib3R0b21cIjtcblxuZXhwb3J0IGNvbnN0IFNpZGViYXJEaXJlY3Rpb24gPSB7XG4gICAgTGVmdDogXCJsZWZ0XCIgYXMgU2lkZWJhckRpcmVjdGlvbixcbiAgICBSaWdodDogXCJyaWdodFwiIGFzIFNpZGViYXJEaXJlY3Rpb24sXG4gICAgVG9wOiBcInRvcFwiIGFzIFNpZGViYXJEaXJlY3Rpb24sXG4gICAgQm90dG9tOiBcImJvdHRvbVwiIGFzIFNpZGViYXJEaXJlY3Rpb25cbn07XG5cbmV4cG9ydCBjbGFzcyBTaWRlYmFyU2VydmljZSB7XG4gICAgcHVibGljIGlzVmlzaWJsZTpib29sZWFuO1xuICAgIHB1YmxpYyBpc0FuaW1hdGluZzpib29sZWFuO1xuICAgIHB1YmxpYyB3YXNKdXN0T3BlbmVkOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgZGlyZWN0aW9uOlNpZGViYXJEaXJlY3Rpb247XG5cbiAgICBwcml2YXRlIF93aWR0aDpudW1iZXI7XG4gICAgcHJpdmF0ZSBfaGVpZ2h0Om51bWJlcjtcblxuICAgIHB1YmxpYyBnZXQgd2lkdGgoKTpudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFNpZGViYXJEaXJlY3Rpb24uTGVmdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gU2lkZWJhckRpcmVjdGlvbi5SaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuIC10aGlzLl93aWR0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHdpZHRoKHdpZHRoOm51bWJlcikge1xuICAgICAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLndpZHRoQ2hhbmdlLmVtaXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGhlaWdodCgpOm51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gU2lkZWJhckRpcmVjdGlvbi5Ub3ApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBTaWRlYmFyRGlyZWN0aW9uLkJvdHRvbSkge1xuICAgICAgICAgICAgcmV0dXJuIC10aGlzLl9oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBoZWlnaHQoaGVpZ2h0Om51bWJlcikge1xuICAgICAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuaGVpZ2h0Q2hhbmdlLmVtaXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNWaXNpYmxlQ2hhbmdlOkV2ZW50RW1pdHRlcjxib29sZWFuPjtcbiAgICBwdWJsaWMgd2lkdGhDaGFuZ2U6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuICAgIHB1YmxpYyBoZWlnaHRDaGFuZ2U6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgcHJpdmF0ZSBfaXNBbmltYXRpbmdUaW1lb3V0Om51bWJlcjtcblxuICAgIHB1YmxpYyB0cmFuc2l0aW9uOlNpZGViYXJUcmFuc2l0aW9uO1xuXG4gICAgY29uc3RydWN0b3IoaXNWaXNpYmxlOmJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGlzVmlzaWJsZTtcbiAgICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLndhc0p1c3RPcGVuZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmlzVmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICAgICAgdGhpcy53aWR0aENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgICAgICAgdGhpcy5oZWlnaHRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICAgICAgdGhpcy53aWR0aCA9IDI2MDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAwO1xuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFNpZGViYXJUcmFuc2l0aW9uLlVuY292ZXI7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFZpc2libGVTdGF0ZShpc1Zpc2libGU6Ym9vbGVhbik6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzVmlzaWJsZSAhPT0gaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGlzVmlzaWJsZTtcbiAgICAgICAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy53YXNKdXN0T3BlbmVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5pc1Zpc2libGVDaGFuZ2UuZW1pdChpc1Zpc2libGUpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMud2FzSnVzdE9wZW5lZCA9IGZhbHNlKTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9pc0FuaW1hdGluZ1RpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy5faXNBbmltYXRpbmdUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlLCA1MDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZVZpc2libGVTdGF0ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLnNldFZpc2libGVTdGF0ZSghdGhpcy5pc1Zpc2libGUpO1xuICAgIH1cbn1cbiJdfQ==