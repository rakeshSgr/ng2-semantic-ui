import { __decorate, __extends, __metadata } from "tslib";
import { ComponentRef, ElementRef, Type, Renderer2, OnDestroy, Directive } from "@angular/core";
import { SuiComponentFactory } from "../../../misc/util/internal";
import { SuiPopupController } from "./popup-controller";
import { PopupConfig } from "./popup-config";
var SuiPopupComponentController = /** @class */ (function (_super) {
    __extends(SuiPopupComponentController, _super);
    function SuiPopupComponentController(renderer, element, componentFactory, _component, config) {
        var _this = _super.call(this, renderer, element, componentFactory, config) || this;
        _this._component = _component;
        return _this;
    }
    Object.defineProperty(SuiPopupComponentController.prototype, "componentInstance", {
        get: function () {
            if (this._contentComponentRef) {
                return this._contentComponentRef.instance;
            }
        },
        enumerable: true,
        configurable: true
    });
    SuiPopupComponentController.prototype.open = function () {
        if (!this._contentComponentRef) {
            this._contentComponentRef = this._componentFactory.createComponent(this._component);
            this._componentFactory.attachToView(this._contentComponentRef, this.popup.templateSibling);
        }
        _super.prototype.open.call(this);
    };
    SuiPopupComponentController.prototype.cleanup = function () {
        _super.prototype.cleanup.call(this);
        if (this._contentComponentRef) {
            this._contentComponentRef.destroy();
            this._contentComponentRef = undefined;
        }
    };
    SuiPopupComponentController.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: SuiComponentFactory },
        { type: Type },
        { type: PopupConfig }
    ]; };
    SuiPopupComponentController = __decorate([
        Directive(),
        __metadata("design:paramtypes", [Renderer2,
            ElementRef,
            SuiComponentFactory,
            Type,
            PopupConfig])
    ], SuiPopupComponentController);
    return SuiPopupComponentController;
}(SuiPopupController));
export { SuiPopupComponentController };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAtY29tcG9uZW50LWNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL3BvcHVwL2NsYXNzZXMvcG9wdXAtY29tcG9uZW50LWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHN0M7SUFBb0QsK0NBQWtCO0lBVWxFLHFDQUFZLFFBQWtCLEVBQ2xCLE9BQWtCLEVBQ2xCLGdCQUFvQyxFQUM1QixVQUFrQixFQUMxQixNQUFrQjtRQUo5QixZQU1JLGtCQUFNLFFBQVEsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLFNBQ3JEO1FBSm1CLGdCQUFVLEdBQVYsVUFBVSxDQUFROztJQUl0QyxDQUFDO0lBYkQsc0JBQVcsMERBQWlCO2FBQTVCO1lBQ0ksSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQzthQUM3QztRQUNMLENBQUM7OztPQUFBO0lBV00sMENBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDNUIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQXFCLENBQUMsQ0FBQztZQUMvRixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzlGO1FBRUQsaUJBQU0sSUFBSSxXQUFFLENBQUM7SUFDakIsQ0FBQztJQUVTLDZDQUFPLEdBQWpCO1FBQ0ksaUJBQU0sT0FBTyxXQUFFLENBQUM7UUFFaEIsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDM0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxTQUFTLENBQUM7U0FDekM7SUFDTCxDQUFDOztnQkF6Qm9CLFNBQVM7Z0JBQ1YsVUFBVTtnQkFDRCxtQkFBbUI7Z0JBQ2pCLElBQUk7Z0JBQ2hCLFdBQVc7O0lBZHJCLDJCQUEyQjtRQUR2QyxTQUFTLEVBQUU7eUNBV2EsU0FBUztZQUNWLFVBQVU7WUFDRCxtQkFBbUI7WUFDakIsSUFBSTtZQUNoQixXQUFXO09BZHJCLDJCQUEyQixDQW9DdkM7SUFBRCxrQ0FBQztDQUFBLEFBcENELENBQW9ELGtCQUFrQixHQW9DckU7U0FwQ1ksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBFbGVtZW50UmVmLCBUeXBlLCBSZW5kZXJlcjIsIE9uRGVzdHJveSwgRGlyZWN0aXZlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aUNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlQb3B1cENvbnRyb2xsZXIgfSBmcm9tIFwiLi9wb3B1cC1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBQb3B1cENvbmZpZyB9IGZyb20gXCIuL3BvcHVwLWNvbmZpZ1wiO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBjbGFzcyBTdWlQb3B1cENvbXBvbmVudENvbnRyb2xsZXI8VD4gZXh0ZW5kcyBTdWlQb3B1cENvbnRyb2xsZXIge1xuICAgIC8vIFN0b3JlcyByZWZlcmVuY2UgdG8gZ2VuZXJhdGVkIGNvbnRlbnQgY29tcG9uZW50LlxuICAgIHByaXZhdGUgX2NvbnRlbnRDb21wb25lbnRSZWY/OkNvbXBvbmVudFJlZjxUPjtcblxuICAgIHB1YmxpYyBnZXQgY29tcG9uZW50SW5zdGFuY2UoKTpUIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRlbnRDb21wb25lbnRSZWYpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb250ZW50Q29tcG9uZW50UmVmLmluc3RhbmNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6RWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBjb21wb25lbnRGYWN0b3J5OlN1aUNvbXBvbmVudEZhY3RvcnksXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfY29tcG9uZW50OlR5cGU8VD4sXG4gICAgICAgICAgICAgICAgY29uZmlnOlBvcHVwQ29uZmlnKSB7XG5cbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIGVsZW1lbnQsIGNvbXBvbmVudEZhY3RvcnksIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW4oKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jb250ZW50Q29tcG9uZW50UmVmKSB7XG4gICAgICAgICAgICB0aGlzLl9jb250ZW50Q29tcG9uZW50UmVmID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeS5jcmVhdGVDb21wb25lbnQodGhpcy5fY29tcG9uZW50IGFzIFR5cGU8VD4pO1xuICAgICAgICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeS5hdHRhY2hUb1ZpZXcodGhpcy5fY29udGVudENvbXBvbmVudFJlZiwgdGhpcy5wb3B1cC50ZW1wbGF0ZVNpYmxpbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIub3BlbigpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjbGVhbnVwKCk6dm9pZCB7XG4gICAgICAgIHN1cGVyLmNsZWFudXAoKTtcblxuICAgICAgICBpZiAodGhpcy5fY29udGVudENvbXBvbmVudFJlZikge1xuICAgICAgICAgICAgdGhpcy5fY29udGVudENvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLl9jb250ZW50Q29tcG9uZW50UmVmID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19