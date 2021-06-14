import { __decorate, __metadata } from "tslib";
import { Directive, Input, EventEmitter, Renderer2, ElementRef, HostListener, HostBinding } from "@angular/core";
var SuiSelectSearch = /** @class */ (function () {
    function SuiSelectSearch(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this.onQueryUpdated = new EventEmitter();
        this.onQueryKeyDown = new EventEmitter();
        this.hasClasses = true;
        this.autoComplete = "off";
    }
    Object.defineProperty(SuiSelectSearch.prototype, "query", {
        set: function (query) {
            this._renderer.setProperty(this._element.nativeElement, "value", query);
        },
        enumerable: true,
        configurable: true
    });
    SuiSelectSearch.prototype.updateQuery = function (query) {
        this.onQueryUpdated.emit(query);
    };
    SuiSelectSearch.prototype.onKeyDown = function (e) {
        this.onQueryKeyDown.emit(e);
    };
    SuiSelectSearch.prototype.focus = function () {
        var _this = this;
        // Slightly delay to support in menu search.
        this._element.nativeElement.focus();
        setTimeout(function () { return _this._element.nativeElement.focus(); });
    };
    SuiSelectSearch.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    __decorate([
        HostBinding("class.search"),
        __metadata("design:type", Boolean)
    ], SuiSelectSearch.prototype, "hasClasses", void 0);
    __decorate([
        HostBinding("attr.autocomplete"),
        __metadata("design:type", String)
    ], SuiSelectSearch.prototype, "autoComplete", void 0);
    __decorate([
        HostListener("input", ["$event.target.value"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], SuiSelectSearch.prototype, "updateQuery", null);
    __decorate([
        HostListener("keydown", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], SuiSelectSearch.prototype, "onKeyDown", null);
    SuiSelectSearch = __decorate([
        Directive({
            selector: "input[suiSelectSearch]"
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef])
    ], SuiSelectSearch);
    return SuiSelectSearch;
}());
export { SuiSelectSearch };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXNlYXJjaC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvc2VsZWN0L2RpcmVjdGl2ZXMvc2VsZWN0LXNlYXJjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUtqSDtJQWNJLHlCQUFvQixTQUFtQixFQUFVLFFBQW1CO1FBQWhELGNBQVMsR0FBVCxTQUFTLENBQVU7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ2hFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNqRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBRXhELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFiRCxzQkFBVyxrQ0FBSzthQUFoQixVQUFpQixLQUFZO1lBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1RSxDQUFDOzs7T0FBQTtJQWNNLHFDQUFXLEdBQWxCLFVBQW1CLEtBQVk7UUFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUdNLG1DQUFTLEdBQWhCLFVBQWlCLENBQWU7UUFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLCtCQUFLLEdBQVo7UUFBQSxpQkFJQztRQUhHLDRDQUE0QztRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQyxVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxFQUFuQyxDQUFtQyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Z0JBdEI2QixTQUFTO2dCQUFtQixVQUFVOztJQVpwRTtRQURDLFdBQVcsQ0FBQyxjQUFjLENBQUM7O3VEQUNPO0lBR25DO1FBREMsV0FBVyxDQUFDLG1CQUFtQixDQUFDOzt5REFDRztJQWtCcEM7UUFEQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUMsQ0FBQzs7OztzREFHOUM7SUFHRDtRQURDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7eUNBQ2pCLGFBQWE7O29EQUUvQjtJQTlCUSxlQUFlO1FBSDNCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSx3QkFBd0I7U0FDckMsQ0FBQzt5Q0FlZ0MsU0FBUyxFQUFtQixVQUFVO09BZDNELGVBQWUsQ0FxQzNCO0lBQUQsc0JBQUM7Q0FBQSxBQXJDRCxJQXFDQztTQXJDWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSG9zdEJpbmRpbmcgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJpbnB1dFtzdWlTZWxlY3RTZWFyY2hdXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpU2VsZWN0U2VhcmNoIHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5zZWFyY2hcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiYXR0ci5hdXRvY29tcGxldGVcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgYXV0b0NvbXBsZXRlOnN0cmluZztcblxuICAgIHB1YmxpYyBzZXQgcXVlcnkocXVlcnk6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgXCJ2YWx1ZVwiLCBxdWVyeSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uUXVlcnlVcGRhdGVkOkV2ZW50RW1pdHRlcjxzdHJpbmc+O1xuICAgIHB1YmxpYyBvblF1ZXJ5S2V5RG93bjpFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjpSZW5kZXJlcjIsIHByaXZhdGUgX2VsZW1lbnQ6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLm9uUXVlcnlVcGRhdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gICAgICAgIHRoaXMub25RdWVyeUtleURvd24gPSBuZXcgRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+KCk7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hdXRvQ29tcGxldGUgPSBcIm9mZlwiO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJpbnB1dFwiLCBbXCIkZXZlbnQudGFyZ2V0LnZhbHVlXCJdKVxuICAgIHB1YmxpYyB1cGRhdGVRdWVyeShxdWVyeTpzdHJpbmcpOnZvaWQge1xuICAgICAgICB0aGlzLm9uUXVlcnlVcGRhdGVkLmVtaXQocXVlcnkpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJrZXlkb3duXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25LZXlEb3duKGU6S2V5Ym9hcmRFdmVudCk6dm9pZCB7XG4gICAgICAgIHRoaXMub25RdWVyeUtleURvd24uZW1pdChlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZm9jdXMoKTp2b2lkIHtcbiAgICAgICAgLy8gU2xpZ2h0bHkgZGVsYXkgdG8gc3VwcG9ydCBpbiBtZW51IHNlYXJjaC5cbiAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCkpO1xuICAgIH1cbn1cbiJdfQ==