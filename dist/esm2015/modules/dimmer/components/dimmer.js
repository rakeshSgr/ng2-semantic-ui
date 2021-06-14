import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, HostBinding, HostListener, EventEmitter, Renderer2, ElementRef, ChangeDetectorRef } from "@angular/core";
import { TransitionController, SuiTransition, TransitionDirection, Transition } from "../../transition/internal";
let SuiDimmer = class SuiDimmer extends SuiTransition {
    constructor(renderer, element, changeDetector) {
        super(renderer, element, changeDetector);
        this._isDimmed = false;
        this.isDimmedChange = new EventEmitter();
        this.isClickable = true;
        this.wrapContent = true;
        this.hasClasses = true;
    }
    get isDimmed() {
        return this._isDimmed;
    }
    set isDimmed(value) {
        const isDimmed = !!value;
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
    }
    onClick() {
        if (this.isClickable) {
            this.isDimmed = false;
            this.isDimmedChange.emit(this.isDimmed);
        }
    }
};
SuiDimmer.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
__decorate([
    HostBinding("class.ui"),
    HostBinding("class.dimmer"),
    __metadata("design:type", Boolean)
], SuiDimmer.prototype, "hasClasses", void 0);
__decorate([
    HostBinding("class.active"),
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SuiDimmer.prototype, "isDimmed", null);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], SuiDimmer.prototype, "isDimmedChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SuiDimmer.prototype, "isClickable", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SuiDimmer.prototype, "transition", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SuiDimmer.prototype, "transitionDuration", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SuiDimmer.prototype, "wrapContent", void 0);
__decorate([
    HostListener("click"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SuiDimmer.prototype, "onClick", null);
SuiDimmer = __decorate([
    Component({
        selector: "sui-dimmer",
        template: `
<div [class.content]="wrapContent">
    <ng-content></ng-content>
</div>
`,
        styles: [`
:host.dimmer:not(.hidden) {
    transition: none;
    display: flex !important;
}
`]
    }),
    __metadata("design:paramtypes", [Renderer2, ElementRef, ChangeDetectorRef])
], SuiDimmer);
export { SuiDimmer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGltbWVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9kaW1tZXIvY29tcG9uZW50cy9kaW1tZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQzVFLFVBQVUsRUFBRSxpQkFBaUIsRUFDaEMsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQWdCakgsSUFBYSxTQUFTLEdBQXRCLE1BQWEsU0FBVSxTQUFRLGFBQWE7SUFtRHhDLFlBQVksUUFBa0IsRUFBRSxPQUFrQixFQUFFLGNBQWdDO1FBQ2hGLEtBQUssQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBRXpDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNsRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUV4QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUV4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBbERELElBQVcsUUFBUTtRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBVyxRQUFRLENBQUMsS0FBYTtRQUM3QixNQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBRXpCLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDN0IsNkdBQTZHO1lBQzdHLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUV6RSxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFFekQsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7U0FDN0I7YUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssUUFBUSxFQUFFO1lBRXBDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1lBRTFCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUM5QixJQUFJLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3JIO0lBQ0wsQ0FBQztJQStCTSxPQUFPO1FBQ1YsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMzQztJQUNMLENBQUM7Q0FDSixDQUFBOztZQW5Cd0IsU0FBUztZQUFVLFVBQVU7WUFBaUIsaUJBQWlCOztBQWhEcEY7SUFGQyxXQUFXLENBQUMsVUFBVSxDQUFDO0lBQ3ZCLFdBQVcsQ0FBQyxjQUFjLENBQUM7OzZDQUNPO0FBUW5DO0lBRkMsV0FBVyxDQUFDLGNBQWMsQ0FBQztJQUMzQixLQUFLLEVBQUU7Ozt5Q0FHUDtBQXVCRDtJQURDLE1BQU0sRUFBRTs4QkFDYSxZQUFZO2lEQUFVO0FBRzVDO0lBREMsS0FBSyxFQUFFOzs4Q0FDbUI7QUFHM0I7SUFEQyxLQUFLLEVBQUU7OzZDQUNpQjtBQUd6QjtJQURDLEtBQUssRUFBRTs7cURBQ3lCO0FBSWpDO0lBREMsS0FBSyxFQUFFOzs4Q0FDbUI7QUFlM0I7SUFEQyxZQUFZLENBQUMsT0FBTyxDQUFDOzs7O3dDQU1yQjtBQXJFUSxTQUFTO0lBZHJCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRTs7OztDQUliO2lCQUNZOzs7OztDQUtaO0tBQ0EsQ0FBQztxQ0FvRHVCLFNBQVMsRUFBVSxVQUFVLEVBQWlCLGlCQUFpQjtHQW5EM0UsU0FBUyxDQXNFckI7U0F0RVksU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBFdmVudEVtaXR0ZXIsIFJlbmRlcmVyMixcbiAgICBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbkNvbnRyb2xsZXIsIFN1aVRyYW5zaXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24sIFRyYW5zaXRpb24gfSBmcm9tIFwiLi4vLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktZGltbWVyXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgW2NsYXNzLmNvbnRlbnRdPVwid3JhcENvbnRlbnRcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYFxuOmhvc3QuZGltbWVyOm5vdCguaGlkZGVuKSB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlEaW1tZXIgZXh0ZW5kcyBTdWlUcmFuc2l0aW9uIHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmRpbW1lclwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBwcml2YXRlIF90cmFuc2l0aW9uQ29udHJvbGxlcjpUcmFuc2l0aW9uQ29udHJvbGxlcjtcblxuICAgIHByaXZhdGUgX2lzRGltbWVkOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNEaW1tZWQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGltbWVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNEaW1tZWQodmFsdWU6Ym9vbGVhbikge1xuICAgICAgICBjb25zdCBpc0RpbW1lZCA9ICEhdmFsdWU7XG5cbiAgICAgICAgaWYgKCF0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlcikge1xuICAgICAgICAgICAgLy8gSW5pdGlhbGlzZSB0cmFuc2l0aW9uIGZ1bmN0aW9uYWxpdHkgd2hlbiBmaXJzdCBzZXR0aW5nIGRpbW1lZCwgdG8gZW5zdXJlIGluaXRpYWwgc3RhdGUgZG9lc24ndCB0cmFuc2l0aW9uLlxuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIgPSBuZXcgVHJhbnNpdGlvbkNvbnRyb2xsZXIoaXNEaW1tZWQsIFwiYmxvY2tcIik7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbkNvbnRyb2xsZXIodGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIpO1xuXG4gICAgICAgICAgICB0aGlzLl9pc0RpbW1lZCA9IGlzRGltbWVkO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2lzRGltbWVkICE9PSBpc0RpbW1lZCkge1xuXG4gICAgICAgICAgICB0aGlzLl9pc0RpbW1lZCA9IGlzRGltbWVkO1xuXG4gICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlci5zdG9wQWxsKCk7XG4gICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKFxuICAgICAgICAgICAgICAgIG5ldyBUcmFuc2l0aW9uKFwiZmFkZVwiLCB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiwgaXNEaW1tZWQgPyBUcmFuc2l0aW9uRGlyZWN0aW9uLkluIDogVHJhbnNpdGlvbkRpcmVjdGlvbi5PdXQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBpc0RpbW1lZENoYW5nZTpFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc0NsaWNrYWJsZTpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuXG4gICAgLyogSW50ZXJuYWwgZm9yIG5vdyAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHdyYXBDb250ZW50OmJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsIGVsZW1lbnQ6RWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIGVsZW1lbnQsIGNoYW5nZURldGVjdG9yKTtcblxuICAgICAgICB0aGlzLl9pc0RpbW1lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRGltbWVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgICAgICB0aGlzLmlzQ2xpY2thYmxlID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLndyYXBDb250ZW50ID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxuICAgIHB1YmxpYyBvbkNsaWNrKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzQ2xpY2thYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmlzRGltbWVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzRGltbWVkQ2hhbmdlLmVtaXQodGhpcy5pc0RpbW1lZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=