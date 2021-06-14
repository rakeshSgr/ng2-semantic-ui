import { __decorate, __metadata } from "tslib";
import { Component, HostBinding, Input, Output, Renderer2, ElementRef, EventEmitter } from "@angular/core";
import { SidebarService, SidebarTransition, SidebarDirection } from "../services/sidebar.service";
var SuiSidebar = /** @class */ (function () {
    function SuiSidebar(_renderer, _element) {
        var _this = this;
        this._renderer = _renderer;
        this._element = _element;
        this.service = new SidebarService();
        // We set the default here as well to force the classes to update.
        this.transition = SidebarTransition.Uncover;
        this.direction = SidebarDirection.Left;
        setTimeout(function () { return _this.updateDimensions(); });
        this.service.isVisibleChange.subscribe(function () { return _this.updateDimensions(); });
        this.hasClasses = true;
    }
    Object.defineProperty(SuiSidebar.prototype, "transition", {
        get: function () {
            return this.service.transition;
        },
        set: function (transition) {
            var _this = this;
            this.service.transition.split(" ").forEach(function (c) { return _this.setClass(c, false); });
            this.service.transition = transition;
            this.service.transition.split(" ").forEach(function (c) { return _this.setClass(c, true); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSidebar.prototype, "direction", {
        get: function () {
            return this.service.direction;
        },
        set: function (direction) {
            this.setClass(this.service.direction, false);
            this.service.direction = direction;
            this.setClass(this.service.direction, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSidebar.prototype, "isVisible", {
        get: function () {
            return this.service.isVisible;
        },
        set: function (isVisible) {
            this.service.setVisibleState(isVisible);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSidebar.prototype, "isVisibleChange", {
        get: function () {
            return this.service.isVisibleChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSidebar.prototype, "isAnimating", {
        get: function () {
            return this.service.isAnimating;
        },
        enumerable: true,
        configurable: true
    });
    SuiSidebar.prototype.updateDimensions = function () {
        this.service.width = this._element.nativeElement.offsetWidth;
        this.service.height = this._element.nativeElement.offsetHeight;
    };
    SuiSidebar.prototype.setClass = function (className, isAdd) {
        if (isAdd === void 0) { isAdd = true; }
        if (isAdd) {
            this._renderer.addClass(this._element.nativeElement, className);
        }
        else {
            this._renderer.removeClass(this._element.nativeElement, className);
        }
    };
    SuiSidebar.prototype.open = function () {
        this.service.setVisibleState(true);
    };
    SuiSidebar.prototype.close = function () {
        this.service.setVisibleState(false);
    };
    SuiSidebar.prototype.toggle = function () {
        this.service.toggleVisibleState();
    };
    SuiSidebar.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    __decorate([
        HostBinding("class.ui"),
        HostBinding("class.sidebar"),
        HostBinding("class.menu"),
        __metadata("design:type", Boolean)
    ], SuiSidebar.prototype, "hasClasses", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SuiSidebar.prototype, "transition", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SuiSidebar.prototype, "direction", null);
    __decorate([
        HostBinding("class.visible"),
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SuiSidebar.prototype, "isVisible", null);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter),
        __metadata("design:paramtypes", [])
    ], SuiSidebar.prototype, "isVisibleChange", null);
    __decorate([
        HostBinding("class.animating"),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], SuiSidebar.prototype, "isAnimating", null);
    SuiSidebar = __decorate([
        Component({
            selector: "sui-sidebar",
            template: "<ng-content></ng-content>"
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef])
    ], SuiSidebar);
    return SuiSidebar;
}());
export { SuiSidebar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvc2lkZWJhci9jb21wb25lbnRzL3NpZGViYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0csT0FBTyxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBTWxHO0lBc0RJLG9CQUFvQixTQUFtQixFQUFVLFFBQW1CO1FBQXBFLGlCQVVDO1FBVm1CLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ2hFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUNwQyxrRUFBa0U7UUFDbEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7UUFFdkMsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixFQUFFLEVBQXZCLENBQXVCLENBQUMsQ0FBQztRQUV0RSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBdkRELHNCQUFXLGtDQUFVO2FBQXJCO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxDQUFDO2FBRUQsVUFBc0IsVUFBNEI7WUFBbEQsaUJBTUM7WUFMRyxJQUFJLENB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RDtRQURDLEtBQUssRUFBRTs7OytDQUdQO0lBWUQ7UUFGQyxXQUFXLENBQUMsZUFBZSxDQUFDO1FBQzVCLEtBQUssRUFBRTs7OytDQUdQO0lBT0Q7UUFEQyxNQUFNLEVBQUU7a0NBQ29CLFlBQVk7O3FEQUV4QztJQUdEO1FBREMsV0FBVyxDQUFDLGlCQUFpQixDQUFDOzs7aURBRzlCO0lBcERRLFVBQVU7UUFKdEIsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLDJCQUEyQjtTQUN4QyxDQUFDO3lDQXVEZ0MsU0FBUyxFQUFtQixVQUFVO09BdEQzRCxVQUFVLENBMEZ0QjtJQUFELGlCQUFDO0NBQUEsQUExRkQsSUEwRkM7U0ExRlksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBPdXRwdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFNpZGViYXJTZXJ2aWNlLCBTaWRlYmFyVHJhbnNpdGlvbiwgU2lkZWJhckRpcmVjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zaWRlYmFyLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXNpZGViYXJcIixcbiAgICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNpZGViYXIge1xuICAgIHB1YmxpYyBzZXJ2aWNlOlNpZGViYXJTZXJ2aWNlO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudWlcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5zaWRlYmFyXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MubWVudVwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgdHJhbnNpdGlvbigpOlNpZGViYXJUcmFuc2l0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS50cmFuc2l0aW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdHJhbnNpdGlvbih0cmFuc2l0aW9uOlNpZGViYXJUcmFuc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuc2VydmljZS50cmFuc2l0aW9uLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGMgPT4gdGhpcy5zZXRDbGFzcyhjLCBmYWxzZSkpO1xuXG4gICAgICAgIHRoaXMuc2VydmljZS50cmFuc2l0aW9uID0gdHJhbnNpdGlvbjtcblxuICAgICAgICB0aGlzLnNlcnZpY2UudHJhbnNpdGlvbi5zcGxpdChcIiBcIikuZm9yRWFjaChjID0+IHRoaXMuc2V0Q2xhc3MoYywgdHJ1ZSkpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBkaXJlY3Rpb24oKTpTaWRlYmFyRGlyZWN0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5kaXJlY3Rpb247XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBkaXJlY3Rpb24oZGlyZWN0aW9uOlNpZGViYXJEaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5zZXRDbGFzcyh0aGlzLnNlcnZpY2UuZGlyZWN0aW9uLCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5zZXJ2aWNlLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcblxuICAgICAgICB0aGlzLnNldENsYXNzKHRoaXMuc2VydmljZS5kaXJlY3Rpb24sIHRydWUpO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnZpc2libGVcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuaXNWaXNpYmxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNWaXNpYmxlKGlzVmlzaWJsZTpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuc2VydmljZS5zZXRWaXNpYmxlU3RhdGUoaXNWaXNpYmxlKTtcbiAgICB9XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzVmlzaWJsZUNoYW5nZSgpOkV2ZW50RW1pdHRlcjxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuaXNWaXNpYmxlQ2hhbmdlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFuaW1hdGluZ1wiKVxuICAgIHB1YmxpYyBnZXQgaXNBbmltYXRpbmcoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pc0FuaW1hdGluZztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjpSZW5kZXJlcjIsIHByaXZhdGUgX2VsZW1lbnQ6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLnNlcnZpY2UgPSBuZXcgU2lkZWJhclNlcnZpY2UoKTtcbiAgICAgICAgLy8gV2Ugc2V0IHRoZSBkZWZhdWx0IGhlcmUgYXMgd2VsbCB0byBmb3JjZSB0aGUgY2xhc3NlcyB0byB1cGRhdGUuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFNpZGViYXJUcmFuc2l0aW9uLlVuY292ZXI7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gU2lkZWJhckRpcmVjdGlvbi5MZWZ0O1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVEaW1lbnNpb25zKCkpO1xuICAgICAgICB0aGlzLnNlcnZpY2UuaXNWaXNpYmxlQ2hhbmdlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKSk7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZURpbWVuc2lvbnMoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLndpZHRoID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICB0aGlzLnNlcnZpY2UuaGVpZ2h0ID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldENsYXNzKGNsYXNzTmFtZTpzdHJpbmcsIGlzQWRkOmJvb2xlYW4gPSB0cnVlKTp2b2lkIHtcbiAgICAgICAgaWYgKGlzQWRkKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbigpOnZvaWQge1xuICAgICAgICB0aGlzLnNlcnZpY2Uuc2V0VmlzaWJsZVN0YXRlKHRydWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZSgpOnZvaWQge1xuICAgICAgICB0aGlzLnNlcnZpY2Uuc2V0VmlzaWJsZVN0YXRlKGZhbHNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VydmljZS50b2dnbGVWaXNpYmxlU3RhdGUoKTtcbiAgICB9XG59XG4iXX0=