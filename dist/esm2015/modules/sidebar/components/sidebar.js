import { __decorate, __metadata } from "tslib";
import { Component, HostBinding, Input, Output, Renderer2, ElementRef, EventEmitter } from "@angular/core";
import { SidebarService, SidebarTransition, SidebarDirection } from "../services/sidebar.service";
let SuiSidebar = class SuiSidebar {
    constructor(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this.service = new SidebarService();
        // We set the default here as well to force the classes to update.
        this.transition = SidebarTransition.Uncover;
        this.direction = SidebarDirection.Left;
        setTimeout(() => this.updateDimensions());
        this.service.isVisibleChange.subscribe(() => this.updateDimensions());
        this.hasClasses = true;
    }
    get transition() {
        return this.service.transition;
    }
    set transition(transition) {
        this.service.transition.split(" ").forEach(c => this.setClass(c, false));
        this.service.transition = transition;
        this.service.transition.split(" ").forEach(c => this.setClass(c, true));
    }
    get direction() {
        return this.service.direction;
    }
    set direction(direction) {
        this.setClass(this.service.direction, false);
        this.service.direction = direction;
        this.setClass(this.service.direction, true);
    }
    get isVisible() {
        return this.service.isVisible;
    }
    set isVisible(isVisible) {
        this.service.setVisibleState(isVisible);
    }
    get isVisibleChange() {
        return this.service.isVisibleChange;
    }
    get isAnimating() {
        return this.service.isAnimating;
    }
    updateDimensions() {
        this.service.width = this._element.nativeElement.offsetWidth;
        this.service.height = this._element.nativeElement.offsetHeight;
    }
    setClass(className, isAdd = true) {
        if (isAdd) {
            this._renderer.addClass(this._element.nativeElement, className);
        }
        else {
            this._renderer.removeClass(this._element.nativeElement, className);
        }
    }
    open() {
        this.service.setVisibleState(true);
    }
    close() {
        this.service.setVisibleState(false);
    }
    toggle() {
        this.service.toggleVisibleState();
    }
};
SuiSidebar.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
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
        template: `<ng-content></ng-content>`
    }),
    __metadata("design:paramtypes", [Renderer2, ElementRef])
], SuiSidebar);
export { SuiSidebar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvc2lkZWJhci9jb21wb25lbnRzL3NpZGViYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0csT0FBTyxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBTWxHLElBQWEsVUFBVSxHQUF2QixNQUFhLFVBQVU7SUFzRG5CLFlBQW9CLFNBQW1CLEVBQVUsUUFBbUI7UUFBaEQsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDaEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1FBQ3BDLGtFQUFrRTtRQUNsRSxJQUFJLENBQUMsVUFBVSxHQUFHLGlCQUFpQixDQUFDLE9BQU8sQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQztRQUV2QyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUV0RSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBdkRELElBQVcsVUFBVTtRQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO0lBQ25DLENBQUM7SUFFRCxJQUFXLFVBQVUsQ0FBQyxVQUE0QjtRQUM5QyxJQUFJLENBQUMsT0FBTyxD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QUFHRDtJQURDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQzs7OzZDQUc5QjtBQXBEUSxVQUFVO0lBSnRCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFFBQVEsRUFBRSwyQkFBMkI7S0FDeEMsQ0FBQztxQ0F1RGdDLFNBQVMsRUFBbUIsVUFBVTtHQXREM0QsVUFBVSxDQTBGdEI7U0ExRlksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBPdXRwdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFNpZGViYXJTZXJ2aWNlLCBTaWRlYmFyVHJhbnNpdGlvbiwgU2lkZWJhckRpcmVjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zaWRlYmFyLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXNpZGViYXJcIixcbiAgICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNpZGViYXIge1xuICAgIHB1YmxpYyBzZXJ2aWNlOlNpZGViYXJTZXJ2aWNlO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudWlcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5zaWRlYmFyXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MubWVudVwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgdHJhbnNpdGlvbigpOlNpZGViYXJUcmFuc2l0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS50cmFuc2l0aW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdHJhbnNpdGlvbih0cmFuc2l0aW9uOlNpZGViYXJUcmFuc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuc2VydmljZS50cmFuc2l0aW9uLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGMgPT4gdGhpcy5zZXRDbGFzcyhjLCBmYWxzZSkpO1xuXG4gICAgICAgIHRoaXMuc2VydmljZS50cmFuc2l0aW9uID0gdHJhbnNpdGlvbjtcblxuICAgICAgICB0aGlzLnNlcnZpY2UudHJhbnNpdGlvbi5zcGxpdChcIiBcIikuZm9yRWFjaChjID0+IHRoaXMuc2V0Q2xhc3MoYywgdHJ1ZSkpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBkaXJlY3Rpb24oKTpTaWRlYmFyRGlyZWN0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5kaXJlY3Rpb247XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBkaXJlY3Rpb24oZGlyZWN0aW9uOlNpZGViYXJEaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5zZXRDbGFzcyh0aGlzLnNlcnZpY2UuZGlyZWN0aW9uLCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5zZXJ2aWNlLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcblxuICAgICAgICB0aGlzLnNldENsYXNzKHRoaXMuc2VydmljZS5kaXJlY3Rpb24sIHRydWUpO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnZpc2libGVcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuaXNWaXNpYmxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNWaXNpYmxlKGlzVmlzaWJsZTpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuc2VydmljZS5zZXRWaXNpYmxlU3RhdGUoaXNWaXNpYmxlKTtcbiAgICB9XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzVmlzaWJsZUNoYW5nZSgpOkV2ZW50RW1pdHRlcjxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuaXNWaXNpYmxlQ2hhbmdlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFuaW1hdGluZ1wiKVxuICAgIHB1YmxpYyBnZXQgaXNBbmltYXRpbmcoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pc0FuaW1hdGluZztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjpSZW5kZXJlcjIsIHByaXZhdGUgX2VsZW1lbnQ6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLnNlcnZpY2UgPSBuZXcgU2lkZWJhclNlcnZpY2UoKTtcbiAgICAgICAgLy8gV2Ugc2V0IHRoZSBkZWZhdWx0IGhlcmUgYXMgd2VsbCB0byBmb3JjZSB0aGUgY2xhc3NlcyB0byB1cGRhdGUuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFNpZGViYXJUcmFuc2l0aW9uLlVuY292ZXI7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gU2lkZWJhckRpcmVjdGlvbi5MZWZ0O1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVEaW1lbnNpb25zKCkpO1xuICAgICAgICB0aGlzLnNlcnZpY2UuaXNWaXNpYmxlQ2hhbmdlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKSk7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZURpbWVuc2lvbnMoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLndpZHRoID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICB0aGlzLnNlcnZpY2UuaGVpZ2h0ID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldENsYXNzKGNsYXNzTmFtZTpzdHJpbmcsIGlzQWRkOmJvb2xlYW4gPSB0cnVlKTp2b2lkIHtcbiAgICAgICAgaWYgKGlzQWRkKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbigpOnZvaWQge1xuICAgICAgICB0aGlzLnNlcnZpY2Uuc2V0VmlzaWJsZVN0YXRlKHRydWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZSgpOnZvaWQge1xuICAgICAgICB0aGlzLnNlcnZpY2Uuc2V0VmlzaWJsZVN0YXRlKGZhbHNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VydmljZS50b2dnbGVWaXNpYmxlU3RhdGUoKTtcbiAgICB9XG59XG4iXX0=