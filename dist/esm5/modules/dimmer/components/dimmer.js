import { __decorate, __extends, __metadata } from "tslib";
import { Component, Input, Output, HostBinding, HostListener, EventEmitter, Renderer2, ElementRef, ChangeDetectorRef } from "@angular/core";
import { TransitionController, SuiTransition, TransitionDirection, Transition } from "../../transition/internal";
var SuiDimmer = /** @class */ (function (_super) {
    __extends(SuiDimmer, _super);
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
        get: function () {
            return this._isDimmed;
        },
        set: function (value) {
            var isDimmed = !!value;
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
    SuiDimmer.prototype.onClick = function () {
        if (this.isClickable) {
            this.isDimmed = false;
            this.isDimmedChange.emit(this.isDimmed);
        }
    };
    SuiDimmer.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
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
            template: "\n<div [class.content]=\"wrapContent\">\n    <ng-content></ng-content>\n</div>\n",
            styles: ["\n:host.dimmer:not(.hidden) {\n    transition: none;\n    display: flex !important;\n}\n"]
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef, ChangeDetectorRef])
    ], SuiDimmer);
    return SuiDimmer;
}(SuiTransition));
export { SuiDimmer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGltbWVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9kaW1tZXIvY29tcG9uZW50cy9kaW1tZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQzVFLFVBQVUsRUFBRSxpQkFBaUIsRUFDaEMsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQWdCakg7SUFBK0IsNkJBQWE7SUFtRHhDLG1CQUFZLFFBQWtCLEVBQUUsT0FBa0IsRUFBRSxjQUFnQztRQUFwRixZQUNJLGtCQUFNLFFBQVEsRUFBRSxPQUFPLEVBQUUsY0FBYyxDQUFDLFNBUzNDO1FBUEcsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ2xELEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBRXhCLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBRXhCLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDOztJQUMzQixDQUFDO0lBbERELHNCQUFXLCtCQUFRO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFFRCxVQUFvQixLQUFhO1lBQzdCLElBQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFFekIsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtnQkFDN0IsNkdBQTZHO2dCQUM3RyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBRXpFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFFekQsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7YUFDN0I7aUJBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFFBQVEsRUFBRTtnQkFFcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7Z0JBRTFCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDckMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FDOUIsSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNySDtRQUNMLENBQUM7OztPQXBCQTtJQW1ETSwyQkFBTyxHQUFkO1FBQ0ksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMzQztJQUNMLENBQUM7O2dCQWxCb0IsU0FBUztnQkFBVSxVQUFVO2dCQUFpQixpQkFBaUI7O0lBaERwRjtRQUZDLFdBQVcsQ0FBQyxVQUFVLENBQUM7UUFDdkIsV0FBVyxDQUFDLGNBQWMsQ0FBQzs7aURBQ087SUFRbkM7UUFGQyxXQUFXLENBQUMsY0FBYyxDQUFDO1FBQzNCLEtBQUssRUFBRTs7OzZDQUdQO0lBdUJEO1FBREMsTUFBTSxFQUFFO2tDQUNhLFlBQVk7cURBQVU7SUFHNUM7UUFEQyxLQUFLLEVBQUU7O2tEQUNtQjtJQUczQjtRQURDLEtBQUssRUFBRTs7aURBQ2lCO0lBR3pCO1FBREMsS0FBSyxFQUFFOzt5REFDeUI7SUFJakM7UUFEQyxLQUFLLEVBQUU7O2tEQUNtQjtJQWUzQjtRQURDLFlBQVksQ0FBQyxPQUFPLENBQUM7Ozs7NENBTXJCO0lBckVRLFNBQVM7UUFkckIsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLGtGQUliO3FCQUNZLDBGQUtaO1NBQ0EsQ0FBQzt5Q0FvRHVCLFNBQVMsRUFBVSxVQUFVLEVBQWlCLGlCQUFpQjtPQW5EM0UsU0FBUyxDQXNFckI7SUFBRCxnQkFBQztDQUFBLEFBdEVELENBQStCLGFBQWEsR0FzRTNDO1NBdEVZLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgRXZlbnRFbWl0dGVyLCBSZW5kZXJlcjIsXG4gICAgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25Db250cm9sbGVyLCBTdWlUcmFuc2l0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uLCBUcmFuc2l0aW9uIH0gZnJvbSBcIi4uLy4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWRpbW1lclwiLFxuICAgIHRlbXBsYXRlOiBgXG48ZGl2IFtjbGFzcy5jb250ZW50XT1cIndyYXBDb250ZW50XCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2Bcbjpob3N0LmRpbW1lcjpub3QoLmhpZGRlbikge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpRGltbWVyIGV4dGVuZHMgU3VpVHJhbnNpdGlvbiB7XG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudWlcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5kaW1tZXJcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgcHJpdmF0ZSBfdHJhbnNpdGlvbkNvbnRyb2xsZXI6VHJhbnNpdGlvbkNvbnRyb2xsZXI7XG5cbiAgICBwcml2YXRlIF9pc0RpbW1lZDpib29sZWFuO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYWN0aXZlXCIpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzRGltbWVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0RpbW1lZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzRGltbWVkKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgaXNEaW1tZWQgPSAhIXZhbHVlO1xuXG4gICAgICAgIGlmICghdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIC8vIEluaXRpYWxpc2UgdHJhbnNpdGlvbiBmdW5jdGlvbmFsaXR5IHdoZW4gZmlyc3Qgc2V0dGluZyBkaW1tZWQsIHRvIGVuc3VyZSBpbml0aWFsIHN0YXRlIGRvZXNuJ3QgdHJhbnNpdGlvbi5cbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyID0gbmV3IFRyYW5zaXRpb25Db250cm9sbGVyKGlzRGltbWVkLCBcImJsb2NrXCIpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFRyYW5zaXRpb25Db250cm9sbGVyKHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyKTtcblxuICAgICAgICAgICAgdGhpcy5faXNEaW1tZWQgPSBpc0RpbW1lZDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9pc0RpbW1lZCAhPT0gaXNEaW1tZWQpIHtcblxuICAgICAgICAgICAgdGhpcy5faXNEaW1tZWQgPSBpc0RpbW1lZDtcblxuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIuc3RvcEFsbCgpO1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICBuZXcgVHJhbnNpdGlvbihcImZhZGVcIiwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24sIGlzRGltbWVkID8gVHJhbnNpdGlvbkRpcmVjdGlvbi5JbiA6IFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgaXNEaW1tZWRDaGFuZ2U6RXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXNDbGlja2FibGU6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRyYW5zaXRpb246c3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbkR1cmF0aW9uOm51bWJlcjtcblxuICAgIC8qIEludGVybmFsIGZvciBub3cgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB3cmFwQ29udGVudDpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyLCBlbGVtZW50OkVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBlbGVtZW50LCBjaGFuZ2VEZXRlY3Rvcik7XG5cbiAgICAgICAgdGhpcy5faXNEaW1tZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0RpbW1lZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICAgICAgdGhpcy5pc0NsaWNrYWJsZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy53cmFwQ29udGVudCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIilcbiAgICBwdWJsaWMgb25DbGljaygpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc0NsaWNrYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5pc0RpbW1lZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pc0RpbW1lZENoYW5nZS5lbWl0KHRoaXMuaXNEaW1tZWQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19