import { __decorate, __metadata } from "tslib";
import { Renderer2, ElementRef, Directive, Input, HostBinding, ChangeDetectorRef } from "@angular/core";
import { TransitionController } from "../classes/transition-controller";
var SuiTransition = /** @class */ (function () {
    function SuiTransition(_renderer, _element, _changeDetector) {
        this._renderer = _renderer;
        this._element = _element;
        this._changeDetector = _changeDetector;
        this.transitionClass = true;
    }
    Object.defineProperty(SuiTransition.prototype, "suiTransition", {
        set: function (tC) {
            // Set the transition controller (e.g. '<div [suiTransition]="transitionController"></div>').
            this.setTransitionController(tC);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiTransition.prototype, "isVisible", {
        get: function () {
            if (this._controller) {
                return this._controller.isVisible;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiTransition.prototype, "isHidden", {
        get: function () {
            if (this._controller) {
                return this._controller.isHidden;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    // Initialises the controller with the injected renderer and elementRef.
    SuiTransition.prototype.setTransitionController = function (transitionController) {
        this._controller = transitionController;
        this._controller.registerRenderer(this._renderer);
        this._controller.registerElement(this._element.nativeElement);
        this._controller.registerChangeDetector(this._changeDetector);
    };
    SuiTransition.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", TransitionController),
        __metadata("design:paramtypes", [TransitionController])
    ], SuiTransition.prototype, "suiTransition", null);
    __decorate([
        HostBinding("class.transition"),
        __metadata("design:type", Boolean)
    ], SuiTransition.prototype, "transitionClass", void 0);
    __decorate([
        HostBinding("class.visible"),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], SuiTransition.prototype, "isVisible", null);
    __decorate([
        HostBinding("class.hidden"),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], SuiTransition.prototype, "isHidden", null);
    SuiTransition = __decorate([
        Directive({
            selector: "[suiTransition]",
            exportAs: "transition"
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef, ChangeDetectorRef])
    ], SuiTransition);
    return SuiTransition;
}());
export { SuiTransition };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJhbnNpdGlvbi9kaXJlY3RpdmVzL3RyYW5zaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBTXhFO0lBNkJJLHVCQUFzQixTQUFtQixFQUFZLFFBQW1CLEVBQVUsZUFBaUM7UUFBN0YsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUFZLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFsQjVHLG9CQUFlLEdBQVcsSUFBSSxDQUFDO0lBa0JnRixDQUFDO0lBeEJ2SCxzQkFBVyx3Q0FBYTthQUF4QixVQUF5QixFQUF1QjtZQUM1Qyw2RkFBNkY7WUFDN0YsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7OztPQUFBO0lBTUQsc0JBQVcsb0NBQVM7YUFBcEI7WUFDSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7YUFDckM7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLG1DQUFRO2FBQW5CO1lBQ0ksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNsQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO2FBQ3BDO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQzs7O09BQUE7SUFJRCx3RUFBd0U7SUFDakUsK0NBQXVCLEdBQTlCLFVBQStCLG9CQUF5QztRQUNwRSxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFvQixDQUFDO1FBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Z0JBUitCLFNBQVM7Z0JBQXFCLFVBQVU7Z0JBQTBCLGlCQUFpQjs7SUF4Qm5IO1FBREMsS0FBSyxFQUFFO2tDQUNvQixvQkFBb0I7eUNBQXBCLG9CQUFvQjtzREFHL0M7SUFHRDtRQURDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQzs7MERBQ007SUFHdEM7UUFEQyxXQUFXLENBQUMsZUFBZSxDQUFDOzs7a0RBTTVCO0lBR0Q7UUFEQyxXQUFXLENBQUMsY0FBYyxDQUFDOzs7aURBTTNCO0lBM0JRLGFBQWE7UUFKekIsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUUsWUFBWTtTQUN6QixDQUFDO3lDQThCa0MsU0FBUyxFQUFxQixVQUFVLEVBQTBCLGlCQUFpQjtPQTdCMUcsYUFBYSxDQXNDekI7SUFBRCxvQkFBQztDQUFBLEFBdENELElBc0NDO1NBdENZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIERpcmVjdGl2ZSwgSW5wdXQsIEhvc3RCaW5kaW5nLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uQ29udHJvbGxlciB9IGZyb20gXCIuLi9jbGFzc2VzL3RyYW5zaXRpb24tY29udHJvbGxlclwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpVHJhbnNpdGlvbl1cIixcbiAgICBleHBvcnRBczogXCJ0cmFuc2l0aW9uXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpVHJhbnNpdGlvbiB7XG4gICAgLy8gRWFjaCB0cmFuc2l0aW9uIG11c3QgaGF2ZSBhIGNvbnRyb2xsZXIgYXNzb2NpYXRlZCB0aGF0IGRpc3BhdGNoZXMgdGhlIHRyYW5zaXRpb25zLlxuICAgIHByaXZhdGUgX2NvbnRyb2xsZXI6VHJhbnNpdGlvbkNvbnRyb2xsZXI7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgc3VpVHJhbnNpdGlvbih0QzpUcmFuc2l0aW9uQ29udHJvbGxlcikge1xuICAgICAgICAvLyBTZXQgdGhlIHRyYW5zaXRpb24gY29udHJvbGxlciAoZS5nLiAnPGRpdiBbc3VpVHJhbnNpdGlvbl09XCJ0cmFuc2l0aW9uQ29udHJvbGxlclwiPjwvZGl2PicpLlxuICAgICAgICB0aGlzLnNldFRyYW5zaXRpb25Db250cm9sbGVyKHRDKTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy50cmFuc2l0aW9uXCIpXG4gICAgcHVibGljIHRyYW5zaXRpb25DbGFzczpib29sZWFuID0gdHJ1ZTtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnZpc2libGVcIilcbiAgICBwdWJsaWMgZ2V0IGlzVmlzaWJsZSgpOmJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5fY29udHJvbGxlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRyb2xsZXIuaXNWaXNpYmxlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5oaWRkZW5cIilcbiAgICBwdWJsaWMgZ2V0IGlzSGlkZGVuKCk6Ym9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLl9jb250cm9sbGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29udHJvbGxlci5pc0hpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9yZW5kZXJlcjpSZW5kZXJlcjIsIHByb3RlY3RlZCBfZWxlbWVudDpFbGVtZW50UmVmLCBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvcjpDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICAgIC8vIEluaXRpYWxpc2VzIHRoZSBjb250cm9sbGVyIHdpdGggdGhlIGluamVjdGVkIHJlbmRlcmVyIGFuZCBlbGVtZW50UmVmLlxuICAgIHB1YmxpYyBzZXRUcmFuc2l0aW9uQ29udHJvbGxlcih0cmFuc2l0aW9uQ29udHJvbGxlcjpUcmFuc2l0aW9uQ29udHJvbGxlcik6dm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXIgPSB0cmFuc2l0aW9uQ29udHJvbGxlcjtcbiAgICAgICAgdGhpcy5fY29udHJvbGxlci5yZWdpc3RlclJlbmRlcmVyKHRoaXMuX3JlbmRlcmVyKTtcbiAgICAgICAgdGhpcy5fY29udHJvbGxlci5yZWdpc3RlckVsZW1lbnQodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgdGhpcy5fY29udHJvbGxlci5yZWdpc3RlckNoYW5nZURldGVjdG9yKHRoaXMuX2NoYW5nZURldGVjdG9yKTtcbiAgICB9XG59XG4iXX0=