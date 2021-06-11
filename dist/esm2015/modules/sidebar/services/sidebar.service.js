/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { EventEmitter } from "@angular/core";
export const /** @type {?} */ SidebarTransition = {
    Overlay: "overlay",
    Push: "push",
    ScaleDown: "scale down",
    Uncover: "uncover",
    SlideAlong: "slide along",
    SlideOut: "slide out"
};
export const /** @type {?} */ SidebarDirection = {
    Left: "left",
    Right: "right",
    Top: "top",
    Bottom: "bottom"
};
export class SidebarService {
    /**
     * @return {?}
     */
    get width() {
        if (this.direction === SidebarDirection.Left) {
            return this._width;
        }
        if (this.direction === SidebarDirection.Right) {
            return -this._width;
        }
        return 0;
    }
    /**
     * @param {?} width
     * @return {?}
     */
    set width(width) {
        this._width = width;
        this.widthChange.emit();
    }
    /**
     * @return {?}
     */
    get height() {
        if (this.direction === SidebarDirection.Top) {
            return this._height;
        }
        if (this.direction === SidebarDirection.Bottom) {
            return -this._height;
        }
        return 0;
    }
    /**
     * @param {?} height
     * @return {?}
     */
    set height(height) {
        this._height = height;
        this.heightChange.emit();
    }
    /**
     * @param {?=} isVisible
     */
    constructor(isVisible = false) {
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
    /**
     * @param {?} isVisible
     * @return {?}
     */
    setVisibleState(isVisible) {
        if (this.isVisible !== isVisible) {
            this.isVisible = isVisible;
            this.isAnimating = true;
            this.wasJustOpened = true;
            this.isVisibleChange.emit(isVisible);
            setTimeout(() => this.wasJustOpened = false);
            clearTimeout(this._isAnimatingTimeout);
            this._isAnimatingTimeout = window.setTimeout(() => this.isAnimating = false, 500);
        }
    }
    /**
     * @return {?}
     */
    toggleVisibleState() {
        this.setVisibleState(!this.isVisible);
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9zaWRlYmFyL3NlcnZpY2VzL3NpZGViYXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUk3QyxNQUFNLENBQUMsdUJBQU0saUJBQWlCLEdBQUc7SUFDN0IsT0FBTyxFQUFFLFNBQThCO0lBQ3ZDLElBQUksRUFBRSxNQUEyQjtJQUNqQyxTQUFTLEVBQUUsWUFBaUM7SUFDNUMsT0FBTyxFQUFFLFNBQThCO0lBQ3ZDLFVBQVUsRUFBRSxhQUFrQztJQUM5QyxRQUFRLEVBQUUsV0FBZ0M7Q0FDN0MsQ0FBQztBQUlGLE1BQU0sQ0FBQyx1QkFBTSxnQkFBZ0IsR0FBRztJQUM1QixJQUFJLEVBQUUsTUFBMEI7SUFDaEMsS0FBSyxFQUFFLE9BQTJCO0lBQ2xDLEdBQUcsRUFBRSxLQUF5QjtJQUM5QixNQUFNLEVBQUUsUUFBNEI7Q0FDdkMsQ0FBQztBQUVGLE1BQU0sT0FBTyxjQUFjOzs7O1FBVVosS0FBSztRQUNaLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUU7WUFDMUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLGdCQUFnQixDQUFDLEtBQUssRUFBRTtZQUMzQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUN2QjtRQUNELE9BQU8sQ0FBQyxDQUFDOzs7Ozs7UUFHRixLQUFLLENBQUMsS0FBWTtRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDOzs7OztRQUdqQixNQUFNO1FBQ2IsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLGdCQUFnQixDQUFDLEdBQUcsRUFBRTtZQUN6QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDdkI7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssZ0JBQWdCLENBQUMsTUFBTSxFQUFFO1lBQzVDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxDQUFDLENBQUM7Ozs7OztRQUdGLE1BQU0sQ0FBQyxNQUFhO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7O0lBVzdCLFlBQVksWUFBb0IsS0FBSztRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUUzQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzVDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUU3QyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUVoQixJQUFJLENBQUMsVUFBVSxHQUFHLGlCQUFpQixDQUFDLE9BQU8sQ0FBQztLQUMvQzs7Ozs7SUFFTSxlQUFlLENBQUMsU0FBaUI7UUFDcEMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUUxQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUVyQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUM3QyxZQUFZLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDckY7Ozs7O0lBR0Usa0JBQWtCO1FBQ3JCLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7O0NBRTdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZXhwb3J0IHR5cGUgU2lkZWJhclRyYW5zaXRpb24gPSBcIm92ZXJsYXlcIiB8IFwicHVzaFwiIHwgXCJzY2FsZSBkb3duXCIgfCBcInVuY292ZXJcIiB8IFwic2xpZGUgYWxvbmdcIiB8IFwic2xpZGUgb3V0XCI7XG5cbmV4cG9ydCBjb25zdCBTaWRlYmFyVHJhbnNpdGlvbiA9IHtcbiAgICBPdmVybGF5OiBcIm92ZXJsYXlcIiBhcyBTaWRlYmFyVHJhbnNpdGlvbixcbiAgICBQdXNoOiBcInB1c2hcIiBhcyBTaWRlYmFyVHJhbnNpdGlvbixcbiAgICBTY2FsZURvd246IFwic2NhbGUgZG93blwiIGFzIFNpZGViYXJUcmFuc2l0aW9uLFxuICAgIFVuY292ZXI6IFwidW5jb3ZlclwiIGFzIFNpZGViYXJUcmFuc2l0aW9uLFxuICAgIFNsaWRlQWxvbmc6IFwic2xpZGUgYWxvbmdcIiBhcyBTaWRlYmFyVHJhbnNpdGlvbixcbiAgICBTbGlkZU91dDogXCJzbGlkZSBvdXRcIiBhcyBTaWRlYmFyVHJhbnNpdGlvblxufTtcblxuZXhwb3J0IHR5cGUgU2lkZWJhckRpcmVjdGlvbiA9IFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJ0b3BcIiB8IFwiYm90dG9tXCI7XG5cbmV4cG9ydCBjb25zdCBTaWRlYmFyRGlyZWN0aW9uID0ge1xuICAgIExlZnQ6IFwibGVmdFwiIGFzIFNpZGViYXJEaXJlY3Rpb24sXG4gICAgUmlnaHQ6IFwicmlnaHRcIiBhcyBTaWRlYmFyRGlyZWN0aW9uLFxuICAgIFRvcDogXCJ0b3BcIiBhcyBTaWRlYmFyRGlyZWN0aW9uLFxuICAgIEJvdHRvbTogXCJib3R0b21cIiBhcyBTaWRlYmFyRGlyZWN0aW9uXG59O1xuXG5leHBvcnQgY2xhc3MgU2lkZWJhclNlcnZpY2Uge1xuICAgIHB1YmxpYyBpc1Zpc2libGU6Ym9vbGVhbjtcbiAgICBwdWJsaWMgaXNBbmltYXRpbmc6Ym9vbGVhbjtcbiAgICBwdWJsaWMgd2FzSnVzdE9wZW5lZDpib29sZWFuO1xuXG4gICAgcHVibGljIGRpcmVjdGlvbjpTaWRlYmFyRGlyZWN0aW9uO1xuXG4gICAgcHJpdmF0ZSBfd2lkdGg6bnVtYmVyO1xuICAgIHByaXZhdGUgX2hlaWdodDpudW1iZXI7XG5cbiAgICBwdWJsaWMgZ2V0IHdpZHRoKCk6bnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBTaWRlYmFyRGlyZWN0aW9uLkxlZnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFNpZGViYXJEaXJlY3Rpb24uUmlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiAtdGhpcy5fd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB3aWR0aCh3aWR0aDpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fd2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy53aWR0aENoYW5nZS5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBoZWlnaHQoKTpudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFNpZGViYXJEaXJlY3Rpb24uVG9wKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gU2lkZWJhckRpcmVjdGlvbi5Cb3R0b20pIHtcbiAgICAgICAgICAgIHJldHVybiAtdGhpcy5faGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaGVpZ2h0KGhlaWdodDpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLmhlaWdodENoYW5nZS5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzVmlzaWJsZUNoYW5nZTpFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG4gICAgcHVibGljIHdpZHRoQ2hhbmdlOkV2ZW50RW1pdHRlcjx2b2lkPjtcbiAgICBwdWJsaWMgaGVpZ2h0Q2hhbmdlOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIHByaXZhdGUgX2lzQW5pbWF0aW5nVGltZW91dDpudW1iZXI7XG5cbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpTaWRlYmFyVHJhbnNpdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKGlzVmlzaWJsZTpib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSBpc1Zpc2libGU7XG4gICAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy53YXNKdXN0T3BlbmVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5pc1Zpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gICAgICAgIHRoaXMud2lkdGhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gICAgICAgIHRoaXMuaGVpZ2h0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgICAgIHRoaXMud2lkdGggPSAyNjA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcblxuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSBTaWRlYmFyVHJhbnNpdGlvbi5VbmNvdmVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRWaXNpYmxlU3RhdGUoaXNWaXNpYmxlOmJvb2xlYW4pOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc1Zpc2libGUgIT09IGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5pc1Zpc2libGUgPSBpc1Zpc2libGU7XG4gICAgICAgICAgICB0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMud2FzSnVzdE9wZW5lZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlQ2hhbmdlLmVtaXQoaXNWaXNpYmxlKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLndhc0p1c3RPcGVuZWQgPSBmYWxzZSk7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5faXNBbmltYXRpbmdUaW1lb3V0KTtcbiAgICAgICAgICAgIHRoaXMuX2lzQW5pbWF0aW5nVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZSwgNTAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVWaXNpYmxlU3RhdGUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRWaXNpYmxlU3RhdGUoIXRoaXMuaXNWaXNpYmxlKTtcbiAgICB9XG59XG4iXX0=