import { __decorate, __metadata } from "tslib";
import { Component, HostBinding, Renderer2, ElementRef, ChangeDetectorRef } from "@angular/core";
import { SuiDimmer } from "../../dimmer/internal";
let SuiModalDimmer = class SuiModalDimmer extends SuiDimmer {
    constructor(renderer, element, changeDetector) {
        super(renderer, element, changeDetector);
        this.hasClasses = true;
        this.isClickable = false;
    }
};
SuiModalDimmer.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
__decorate([
    HostBinding("class.page"),
    HostBinding("class.modals"),
    __metadata("design:type", Boolean)
], SuiModalDimmer.prototype, "hasClasses", void 0);
SuiModalDimmer = __decorate([
    Component({
        selector: "sui-modal-dimmer",
        template: `<ng-content></ng-content>`,
        styles: [`
        :host.ui.dimmer:not(.hidden) {
            transition: none;
            overflow-y: auto;
            display: flex !important; 
        }
    `]
    }),
    __metadata("design:paramtypes", [Renderer2, ElementRef, ChangeDetectorRef])
], SuiModalDimmer);
export { SuiModalDimmer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGltbWVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9tb2RhbC9jb21wb25lbnRzL2RpbW1lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFhbEQsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBZSxTQUFRLFNBQVM7SUFNekMsWUFBWSxRQUFrQixFQUFFLE9BQWtCLEVBQUUsY0FBZ0M7UUFDaEYsS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztDQUNKLENBQUE7O1lBTHdCLFNBQVM7WUFBVSxVQUFVO1lBQWlCLGlCQUFpQjs7QUFGcEY7SUFGQyxXQUFXLENBQUMsWUFBWSxDQUFDO0lBQ3pCLFdBQVcsQ0FBQyxjQUFjLENBQUM7O2tEQUNPO0FBSjFCLGNBQWM7SUFYMUIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixRQUFRLEVBQUUsMkJBQTJCO2lCQUM1Qjs7Ozs7O0tBTVI7S0FDSixDQUFDO3FDQU91QixTQUFTLEVBQVUsVUFBVSxFQUFpQixpQkFBaUI7R0FOM0UsY0FBYyxDQVcxQjtTQVhZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aURpbW1lciB9IGZyb20gXCIuLi8uLi9kaW1tZXIvaW50ZXJuYWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLW1vZGFsLWRpbW1lclwiLFxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICA6aG9zdC51aS5kaW1tZXI6bm90KC5oaWRkZW4pIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50OyBcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aU1vZGFsRGltbWVyIGV4dGVuZHMgU3VpRGltbWVyIHtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnBhZ2VcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5tb2RhbHNcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyLCBlbGVtZW50OkVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBlbGVtZW50LCBjaGFuZ2VEZXRlY3Rvcik7XG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNDbGlja2FibGUgPSBmYWxzZTtcbiAgICB9XG59XG4iXX0=