import { __decorate, __extends, __metadata } from "tslib";
import { Component, HostBinding, Renderer2, ElementRef, ChangeDetectorRef } from "@angular/core";
import { SuiDimmer } from "../../dimmer/internal";
var SuiModalDimmer = /** @class */ (function (_super) {
    __extends(SuiModalDimmer, _super);
    function SuiModalDimmer(renderer, element, changeDetector) {
        var _this = _super.call(this, renderer, element, changeDetector) || this;
        _this.hasClasses = true;
        _this.isClickable = false;
        return _this;
    }
    SuiModalDimmer.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        HostBinding("class.page"),
        HostBinding("class.modals"),
        __metadata("design:type", Boolean)
    ], SuiModalDimmer.prototype, "hasClasses", void 0);
    SuiModalDimmer = __decorate([
        Component({
            selector: "sui-modal-dimmer",
            template: "<ng-content></ng-content>",
            styles: ["\n        :host.ui.dimmer:not(.hidden) {\n            transition: none;\n            overflow-y: auto;\n            display: flex !important; \n        }\n    "]
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef, ChangeDetectorRef])
    ], SuiModalDimmer);
    return SuiModalDimmer;
}(SuiDimmer));
export { SuiModalDimmer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGltbWVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9tb2RhbC9jb21wb25lbnRzL2RpbW1lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFhbEQ7SUFBb0Msa0NBQVM7SUFNekMsd0JBQVksUUFBa0IsRUFBRSxPQUFrQixFQUFFLGNBQWdDO1FBQXBGLFlBQ0ksa0JBQU0sUUFBUSxFQUFFLE9BQU8sRUFBRSxjQUFjLENBQUMsU0FHM0M7UUFGRyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzs7SUFDN0IsQ0FBQzs7Z0JBSm9CLFNBQVM7Z0JBQVUsVUFBVTtnQkFBaUIsaUJBQWlCOztJQUZwRjtRQUZDLFdBQVcsQ0FBQyxZQUFZLENBQUM7UUFDekIsV0FBVyxDQUFDLGNBQWMsQ0FBQzs7c0RBQ087SUFKMUIsY0FBYztRQVgxQixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSwyQkFBMkI7cUJBQzVCLGlLQU1SO1NBQ0osQ0FBQzt5Q0FPdUIsU0FBUyxFQUFVLFVBQVUsRUFBaUIsaUJBQWlCO09BTjNFLGNBQWMsQ0FXMUI7SUFBRCxxQkFBQztDQUFBLEFBWEQsQ0FBb0MsU0FBUyxHQVc1QztTQVhZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aURpbW1lciB9IGZyb20gXCIuLi8uLi9kaW1tZXIvaW50ZXJuYWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLW1vZGFsLWRpbW1lclwiLFxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICA6aG9zdC51aS5kaW1tZXI6bm90KC5oaWRkZW4pIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50OyBcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aU1vZGFsRGltbWVyIGV4dGVuZHMgU3VpRGltbWVyIHtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnBhZ2VcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5tb2RhbHNcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyLCBlbGVtZW50OkVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBlbGVtZW50LCBjaGFuZ2VEZXRlY3Rvcik7XG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNDbGlja2FibGUgPSBmYWxzZTtcbiAgICB9XG59XG4iXX0=