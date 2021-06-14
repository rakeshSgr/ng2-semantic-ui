import { __decorate, __metadata } from "tslib";
import { Component, HostBinding, ContentChild } from "@angular/core";
import { SuiSidebar } from "./sidebar";
import { SuiSidebarSibling } from "./sidebar-sibling";
let SuiSidebarContainer = class SuiSidebarContainer {
    constructor() {
        this.hasClasses = true;
    }
    ngAfterContentInit() {
        if (!this.sidebar) {
            throw new Error("You must include a <sui-sidebar> element within the container.");
        }
        this.service = this.sidebar.service;
        if (!this.sibling) {
            throw new Error("You must include a <sui-sidebar-sibling> element within the container.");
        }
        this.sibling.service = this.service;
    }
};
__decorate([
    HostBinding("class.pushable"),
    __metadata("design:type", Boolean)
], SuiSidebarContainer.prototype, "hasClasses", void 0);
__decorate([
    ContentChild(SuiSidebar),
    __metadata("design:type", SuiSidebar)
], SuiSidebarContainer.prototype, "sidebar", void 0);
__decorate([
    ContentChild(SuiSidebarSibling),
    __metadata("design:type", SuiSidebarSibling)
], SuiSidebarContainer.prototype, "sibling", void 0);
SuiSidebarContainer = __decorate([
    Component({
        selector: "sui-sidebar-container",
        template: `<ng-content></ng-content>`,
        styles: [`
:host {
    display: block;
}
`]
    }),
    __metadata("design:paramtypes", [])
], SuiSidebarContainer);
export { SuiSidebarContainer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1jb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL3NpZGViYXIvY29tcG9uZW50cy9zaWRlYmFyLWNvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0IsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBV3RELElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBWTVCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVNLGtCQUFrQjtRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0VBQWdFLENBQUMsQ0FBQztTQUNyRjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFFcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZixNQUFNLElBQUksS0FBSyxDQUFDLHdFQUF3RSxDQUFDLENBQUM7U0FDN0Y7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hDLENBQUM7Q0FDSixDQUFBO0FBdkJHO0lBREMsV0FBVyxDQUFDLGdCQUFnQixDQUFDOzt1REFDSztBQUduQztJQURDLFlBQVksQ0FBQyxVQUFVLENBQUM7OEJBQ1YsVUFBVTtvREFBQztBQUcxQjtJQURDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQzs4QkFDakIsaUJBQWlCO29EQUFDO0FBVnhCLG1CQUFtQjtJQVQvQixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLFFBQVEsRUFBRSwyQkFBMkI7aUJBQzVCOzs7O0NBSVo7S0FDQSxDQUFDOztHQUNXLG1CQUFtQixDQTJCL0I7U0EzQlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlckNvbnRlbnRJbml0LCBIb3N0QmluZGluZywgQ29udGVudENoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFNpZGViYXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NpZGViYXIuc2VydmljZVwiO1xuaW1wb3J0IHsgU3VpU2lkZWJhciB9IGZyb20gXCIuL3NpZGViYXJcIjtcbmltcG9ydCB7IFN1aVNpZGViYXJTaWJsaW5nIH0gZnJvbSBcIi4vc2lkZWJhci1zaWJsaW5nXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1zaWRlYmFyLWNvbnRhaW5lclwiLFxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gICAgc3R5bGVzOiBbYFxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpU2lkZWJhckNvbnRhaW5lciBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICAgIHB1YmxpYyBzZXJ2aWNlOlNpZGViYXJTZXJ2aWNlO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MucHVzaGFibGVcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQENvbnRlbnRDaGlsZChTdWlTaWRlYmFyKVxuICAgIHB1YmxpYyBzaWRlYmFyOlN1aVNpZGViYXI7XG5cbiAgICBAQ29udGVudENoaWxkKFN1aVNpZGViYXJTaWJsaW5nKVxuICAgIHB1YmxpYyBzaWJsaW5nOlN1aVNpZGViYXJTaWJsaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuc2lkZWJhcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgaW5jbHVkZSBhIDxzdWktc2lkZWJhcj4gZWxlbWVudCB3aXRoaW4gdGhlIGNvbnRhaW5lci5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gdGhpcy5zaWRlYmFyLnNlcnZpY2U7XG5cbiAgICAgICAgaWYgKCF0aGlzLnNpYmxpbmcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IGluY2x1ZGUgYSA8c3VpLXNpZGViYXItc2libGluZz4gZWxlbWVudCB3aXRoaW4gdGhlIGNvbnRhaW5lci5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaWJsaW5nLnNlcnZpY2UgPSB0aGlzLnNlcnZpY2U7XG4gICAgfVxufVxuIl19