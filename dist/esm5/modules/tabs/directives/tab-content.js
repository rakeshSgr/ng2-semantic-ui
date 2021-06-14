import { __decorate, __metadata } from "tslib";
import { HostBinding, Directive, Input } from "@angular/core";
var SuiTabContent = /** @class */ (function () {
    function SuiTabContent() {
        this.isActive = false;
        this.hasClasses = true;
    }
    __decorate([
        HostBinding("class.tab"),
        __metadata("design:type", Boolean)
    ], SuiTabContent.prototype, "hasClasses", void 0);
    __decorate([
        Input("suiTabContent"),
        __metadata("design:type", String)
    ], SuiTabContent.prototype, "id", void 0);
    __decorate([
        HostBinding("class.active"),
        __metadata("design:type", Boolean)
    ], SuiTabContent.prototype, "isActive", void 0);
    SuiTabContent = __decorate([
        Directive({
            selector: "[suiTabContent]"
        }),
        __metadata("design:paramtypes", [])
    ], SuiTabContent);
    return SuiTabContent;
}());
export { SuiTabContent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWNvbnRlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL3RhYnMvZGlyZWN0aXZlcy90YWItY29udGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzlEO0lBVUk7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUV0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBWkQ7UUFEQyxXQUFXLENBQUMsV0FBVyxDQUFDOztxREFDVTtJQUduQztRQURDLEtBQUssQ0FBQyxlQUFlLENBQUM7OzZDQUNOO0lBR2pCO1FBREMsV0FBVyxDQUFDLGNBQWMsQ0FBQzs7bURBQ0o7SUFSZixhQUFhO1FBSHpCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7U0FDOUIsQ0FBQzs7T0FDVyxhQUFhLENBZXpCO0lBQUQsb0JBQUM7Q0FBQSxBQWZELElBZUM7U0FmWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9zdEJpbmRpbmcsIERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpVGFiQ29udGVudF1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlUYWJDb250ZW50IHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy50YWJcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQElucHV0KFwic3VpVGFiQ29udGVudFwiKVxuICAgIHB1YmxpYyBpZDpzdHJpbmc7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBwdWJsaWMgaXNBY3RpdmU6Ym9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG59XG4iXX0=