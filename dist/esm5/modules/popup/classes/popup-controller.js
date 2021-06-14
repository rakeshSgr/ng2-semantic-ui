import { __decorate, __metadata } from "tslib";
import { ComponentRef, ElementRef, HostListener, OnDestroy, Renderer2, Directive } from "@angular/core";
import { SuiComponentFactory } from "../../../misc/util/internal";
import { PopupConfig, PopupTrigger, IPopupConfig } from "./popup-config";
import { SuiPopup } from "../components/popup";
var SuiPopupController = /** @class */ (function () {
    function SuiPopupController(_renderer, _element, _componentFactory, config) {
        var _this = this;
        this._renderer = _renderer;
        this._element = _element;
        this._componentFactory = _componentFactory;
        // Generate a new SuiPopup component and attach it to the application view.
        this._componentRef = this._componentFactory.createComponent(SuiPopup);
        // Configure popup with provided config.
        this.popup.config = config;
        // When the popup is closed (onClose fires on animation complete),
        this.popup.onClose.subscribe(function () { return _this.cleanup(); });
    }
    Object.defineProperty(SuiPopupController.prototype, "popup", {
        // Returns generated popup instance.
        get: function () {
            // Use non-null assertion as we only access this when a popup exists.
            return this._componentRef.instance;
        },
        enumerable: true,
        configurable: true
    });
    SuiPopupController.prototype.configure = function (config) {
        if (config) {
            Object.assign(this.popup.config, config);
        }
    };
    SuiPopupController.prototype.openDelayed = function () {
        var _this = this;
        // Cancel the opening timer.
        clearTimeout(this._openingTimeout);
        // Start the popup opening after the specified delay interval.
        this._openingTimeout = window.setTimeout(function () { return _this.open(); }, this.popup.config.delay);
    };
    SuiPopupController.prototype.open = function () {
        var _this = this;
        // Attach the generated component to the current application.
        this._componentFactory.attachToApplication(this._componentRef);
        if (this.popup.config.isInline) {
            this._componentFactory.moveToElement(this._componentRef, this._element.nativeElement.parentElement);
        }
        else {
            // Move the generated element to the body to avoid any positioning issues.
            this._componentFactory.moveToDocumentBody(this._componentRef);
        }
        // Attach a reference to the anchor element. We do it here because IE11 loves to complain.
        this.popup.anchor = this._element;
        // Add a listener to the document body to handle closing.
        this._documentListener = this._renderer
            .listen("document", "click", function (e) {
            return _this.onDocumentClick(e);
        });
        // Start popup open transition.
        this.popup.open();
        // Call lifecyle hook
        var lifecycle = this.popupOnOpen;
        if (lifecycle) {
            lifecycle.call(this);
        }
    };
    SuiPopupController.prototype.close = function () {
        // Cancel the opening timer to stop the popup opening after close has been called.
        clearTimeout(this._openingTimeout);
        if (this._componentRef) {
            // Start popup close transition.
            this.popup.close();
        }
        // Call lifecyle hook
        var lifecycle = this.popupOnClose;
        if (lifecycle) {
            lifecycle.call(this);
        }
    };
    SuiPopupController.prototype.toggleDelayed = function () {
        // If the popup hasn't been created, or it has but it isn't currently open, open the popup.
        if (!this._componentRef || (this._componentRef && !this.popup.isOpen)) {
            return this.openDelayed();
        }
        // O'wise, close it.
        return this.close();
    };
    SuiPopupController.prototype.toggle = function () {
        // If the popup hasn't been created, or it has but it isn't currently open, open the popup.
        if (!this._componentRef || (this._componentRef && !this.popup.isOpen)) {
            return this.open();
        }
        // O'wise, close it.
        return this.close();
    };
    SuiPopupController.prototype.onMouseEnter = function () {
        if (this.popup.config.trigger === PopupTrigger.Hover) {
            this.openDelayed();
        }
    };
    SuiPopupController.prototype.onMouseLeave = function () {
        if (this.popup.config.trigger === PopupTrigger.Hover) {
            this.close();
        }
    };
    SuiPopupController.prototype.onClick = function () {
        if (this.popup.config.trigger === PopupTrigger.Click ||
            this.popup.config.trigger === PopupTrigger.OutsideClick) {
            // Repeated clicks require a toggle, rather than just opening the popup each time.
            this.toggleDelayed();
        }
        else if (this.popup.config.trigger === PopupTrigger.Focus &&
            (!this._componentRef || (this._componentRef && !this.popup.isOpen))) {
            // Repeated clicks with a focus trigger requires an open (as focus isn't ever lost on repeated click).
            this.openDelayed();
        }
    };
    SuiPopupController.prototype.onDocumentClick = function (e) {
        // If the popup trigger is outside click,
        if (this._componentRef && this.popup.config.trigger === PopupTrigger.OutsideClick) {
            var target = e.target;
            // Close the popup if the click is outside of the popup element.
            if (!this._element.nativeElement.contains(target)) {
                this.close();
            }
        }
    };
    SuiPopupController.prototype.onFocusIn = function () {
        if (this.popup.config.trigger === PopupTrigger.Focus) {
            this.openDelayed();
        }
    };
    SuiPopupController.prototype.onFocusOut = function (e) {
        if (!this._element.nativeElement.contains(e.relatedTarget) &&
            !this.popup.elementRef.nativeElement.contains(e.relatedTarget) &&
            this.popup.config.trigger === PopupTrigger.Focus) {
            this.close();
        }
    };
    SuiPopupController.prototype.cleanup = function () {
        clearTimeout(this._openingTimeout);
        if (this._componentRef.instance && this._componentRef.instance.positioningService) {
            this._componentRef.instance.positioningService.destroy();
        }
        this._componentFactory.detachFromApplication(this._componentRef);
        if (this._documentListener) {
            this._documentListener();
        }
    };
    SuiPopupController.prototype.ngOnDestroy = function () {
        this.cleanup();
    };
    SuiPopupController.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: SuiComponentFactory },
        { type: PopupConfig }
    ]; };
    __decorate([
        HostListener("mouseenter"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SuiPopupController.prototype, "onMouseEnter", null);
    __decorate([
        HostListener("mouseleave"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SuiPopupController.prototype, "onMouseLeave", null);
    __decorate([
        HostListener("click"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SuiPopupController.prototype, "onClick", null);
    __decorate([
        HostListener("focusin"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SuiPopupController.prototype, "onFocusIn", null);
    __decorate([
        HostListener("focusout", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SuiPopupController.prototype, "onFocusOut", null);
    SuiPopupController = __decorate([
        Directive(),
        __metadata("design:paramtypes", [Renderer2,
            ElementRef,
            SuiComponentFactory,
            PopupConfig])
    ], SuiPopupController);
    return SuiPopupController;
}());
export { SuiPopupController };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvcG9wdXAvY2xhc3Nlcy9wb3B1cC1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBVS9DO0lBZ0JJLDRCQUFzQixTQUFtQixFQUNuQixRQUFtQixFQUNuQixpQkFBcUMsRUFDL0MsTUFBa0I7UUFIOUIsaUJBYUM7UUFicUIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBb0I7UUFHdkQsMkVBQTJFO1FBQzNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV0RSx3Q0FBd0M7UUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBRTNCLGtFQUFrRTtRQUNsRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBeEJELHNCQUFXLHFDQUFLO1FBRGhCLG9DQUFvQzthQUNwQztZQUNJLHFFQUFxRTtZQUNyRSxPQUFPLElBQUksQ0FBQyxhQUFhLENB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QUFpQixDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVqRSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUN4QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFFTSx3Q0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDOztnQkF0SytCLFNBQVM7Z0JBQ1YsVUFBVTtnQkFDRCxtQkFBbUI7Z0JBQ3hDLFdBQVc7O0lBNEY5QjtRQURDLFlBQVksQ0FBQyxZQUFZLENBQUM7Ozs7MERBSzFCO0lBR0Q7UUFEQyxZQUFZLENBQUMsWUFBWSxDQUFDOzs7OzBEQUsxQjtJQUdEO1FBREMsWUFBWSxDQUFDLE9BQU8sQ0FBQzs7OztxREFZckI7SUFjRDtRQURDLFlBQVksQ0FBQyxTQUFTLENBQUM7Ozs7dURBS3ZCO0lBR0Q7UUFEQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7d0RBUXBDO0lBcEtpQixrQkFBa0I7UUFEdkMsU0FBUyxFQUFFO3lDQWlCd0IsU0FBUztZQUNWLFVBQVU7WUFDRCxtQkFBbUI7WUFDeEMsV0FBVztPQW5CWixrQkFBa0IsQ0F1THZDO0lBQUQseUJBQUM7Q0FBQSxBQXZMRCxJQXVMQztTQXZMcUIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIE9uRGVzdHJveSwgUmVuZGVyZXIyLCBEaXJlY3RpdmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3VpQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFBvcHVwQ29uZmlnLCBQb3B1cFRyaWdnZXIsIElQb3B1cENvbmZpZyB9IGZyb20gXCIuL3BvcHVwLWNvbmZpZ1wiO1xuaW1wb3J0IHsgU3VpUG9wdXAgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3B1cFwiO1xuaW1wb3J0IHsgSVBvcHVwTGlmZWN5Y2xlIH0gZnJvbSBcIi4vcG9wdXAtbGlmZWN5Y2xlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBvcHVwIHtcbiAgICBvcGVuKCk6dm9pZDtcbiAgICBjbG9zZSgpOnZvaWQ7XG4gICAgdG9nZ2xlKCk6dm9pZDtcbn1cblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3VpUG9wdXBDb250cm9sbGVyIGltcGxlbWVudHMgSVBvcHVwLCBPbkRlc3Ryb3kge1xuICAgIC8vIFN0b3JlcyByZWZlcmVuY2UgdG8gZ2VuZXJhdGVkIHBvcHVwIGNvbXBvbmVudC5cbiAgICBwcml2YXRlIF9jb21wb25lbnRSZWY6Q29tcG9uZW50UmVmPFN1aVBvcHVwPjtcblxuICAgIC8vIFJldHVybnMgZ2VuZXJhdGVkIHBvcHVwIGluc3RhbmNlLlxuICAgIHB1YmxpYyBnZXQgcG9wdXAoKTpTdWlQb3B1cCB7XG4gICAgICAgIC8vIFVzZSBub24tbnVsbCBhc3NlcnRpb24gYXMgd2Ugb25seSBhY2Nlc3MgdGhpcyB3aGVuIGEgcG9wdXAgZXhpc3RzLlxuICAgICAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlO1xuICAgIH1cblxuICAgIC8vIGBzZXRUaW1lb3V0YCB0aW1lciBwb2ludGVyIGZvciBkZWxheWVkIHBvcHVwIG9wZW4uXG4gICAgcHJpdmF0ZSBfb3BlbmluZ1RpbWVvdXQ6bnVtYmVyO1xuXG4gICAgLy8gRnVuY3Rpb24gdG8gcmVtb3ZlIHRoZSBkb2N1bWVudCBjbGljayBoYW5kbGVyLlxuICAgIHByaXZhdGUgX2RvY3VtZW50TGlzdGVuZXI6KCgpID0+IHZvaWQpIHwgdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9yZW5kZXJlcjpSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIF9lbGVtZW50OkVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIF9jb21wb25lbnRGYWN0b3J5OlN1aUNvbXBvbmVudEZhY3RvcnksXG4gICAgICAgICAgICAgICAgY29uZmlnOlBvcHVwQ29uZmlnKSB7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgU3VpUG9wdXAgY29tcG9uZW50IGFuZCBhdHRhY2ggaXQgdG8gdGhlIGFwcGxpY2F0aW9uIHZpZXcuXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZiA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuY3JlYXRlQ29tcG9uZW50KFN1aVBvcHVwKTtcblxuICAgICAgICAvLyBDb25maWd1cmUgcG9wdXAgd2l0aCBwcm92aWRlZCBjb25maWcuXG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnID0gY29uZmlnO1xuXG4gICAgICAgIC8vIFdoZW4gdGhlIHBvcHVwIGlzIGNsb3NlZCAob25DbG9zZSBmaXJlcyBvbiBhbmltYXRpb24gY29tcGxldGUpLFxuICAgICAgICB0aGlzLnBvcHVwLm9uQ2xvc2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xlYW51cCgpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29uZmlndXJlKGNvbmZpZz86SVBvcHVwQ29uZmlnKTp2b2lkIHtcbiAgICAgICAgaWYgKGNvbmZpZykge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnBvcHVwLmNvbmZpZywgY29uZmlnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuRGVsYXllZCgpOnZvaWQge1xuICAgICAgICAvLyBDYW5jZWwgdGhlIG9wZW5pbmcgdGltZXIuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9vcGVuaW5nVGltZW91dCk7XG5cbiAgICAgICAgLy8gU3RhcnQgdGhlIHBvcHVwIG9wZW5pbmcgYWZ0ZXIgdGhlIHNwZWNpZmllZCBkZWxheSBpbnRlcnZhbC5cbiAgICAgICAgdGhpcy5fb3BlbmluZ1RpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLm9wZW4oKSwgdGhpcy5wb3B1cC5jb25maWcuZGVsYXkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuKCk6dm9pZCB7XG4gICAgICAgIC8vIEF0dGFjaCB0aGUgZ2VuZXJhdGVkIGNvbXBvbmVudCB0byB0aGUgY3VycmVudCBhcHBsaWNhdGlvbi5cbiAgICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeS5hdHRhY2hUb0FwcGxpY2F0aW9uKHRoaXMuX2NvbXBvbmVudFJlZik7XG5cbiAgICAgICAgaWYgKHRoaXMucG9wdXAuY29uZmlnLmlzSW5saW5lKSB7XG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5Lm1vdmVUb0VsZW1lbnQodGhpcy5fY29tcG9uZW50UmVmLCB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBNb3ZlIHRoZSBnZW5lcmF0ZWQgZWxlbWVudCB0byB0aGUgYm9keSB0byBhdm9pZCBhbnkgcG9zaXRpb25pbmcgaXNzdWVzLlxuICAgICAgICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeS5tb3ZlVG9Eb2N1bWVudEJvZHkodGhpcy5fY29tcG9uZW50UmVmKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEF0dGFjaCBhIHJlZmVyZW5jZSB0byB0aGUgYW5jaG9yIGVsZW1lbnQuIFdlIGRvIGl0IGhlcmUgYmVjYXVzZSBJRTExIGxvdmVzIHRvIGNvbXBsYWluLlxuICAgICAgICB0aGlzLnBvcHVwLmFuY2hvciA9IHRoaXMuX2VsZW1lbnQ7XG5cbiAgICAgICAgLy8gQWRkIGEgbGlzdGVuZXIgdG8gdGhlIGRvY3VtZW50IGJvZHkgdG8gaGFuZGxlIGNsb3NpbmcuXG4gICAgICAgIHRoaXMuX2RvY3VtZW50TGlzdGVuZXIgPSB0aGlzLl9yZW5kZXJlclxuICAgICAgICAgICAgLmxpc3RlbihcImRvY3VtZW50XCIsIFwiY2xpY2tcIiwgKGU6TW91c2VFdmVudCkgPT5cbiAgICAgICAgICAgICAgICB0aGlzLm9uRG9jdW1lbnRDbGljayhlKSk7XG5cbiAgICAgICAgLy8gU3RhcnQgcG9wdXAgb3BlbiB0cmFuc2l0aW9uLlxuICAgICAgICB0aGlzLnBvcHVwLm9wZW4oKTtcblxuICAgICAgICAvLyBDYWxsIGxpZmVjeWxlIGhvb2tcbiAgICAgICAgY29uc3QgbGlmZWN5Y2xlID0gKHRoaXMgYXMgSVBvcHVwTGlmZWN5Y2xlKS5wb3B1cE9uT3BlbjtcbiAgICAgICAgaWYgKGxpZmVjeWNsZSkge1xuICAgICAgICAgICAgbGlmZWN5Y2xlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2UoKTp2b2lkIHtcbiAgICAgICAgLy8gQ2FuY2VsIHRoZSBvcGVuaW5nIHRpbWVyIHRvIHN0b3AgdGhlIHBvcHVwIG9wZW5pbmcgYWZ0ZXIgY2xvc2UgaGFzIGJlZW4gY2FsbGVkLlxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fb3BlbmluZ1RpbWVvdXQpO1xuXG4gICAgICAgIGlmICh0aGlzLl9jb21wb25lbnRSZWYpIHtcbiAgICAgICAgICAgIC8vIFN0YXJ0IHBvcHVwIGNsb3NlIHRyYW5zaXRpb24uXG4gICAgICAgICAgICB0aGlzLnBvcHVwLmNsb3NlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWxsIGxpZmVjeWxlIGhvb2tcbiAgICAgICAgY29uc3QgbGlmZWN5Y2xlID0gKHRoaXMgYXMgSVBvcHVwTGlmZWN5Y2xlKS5wb3B1cE9uQ2xvc2U7XG4gICAgICAgIGlmIChsaWZlY3ljbGUpIHtcbiAgICAgICAgICAgIGxpZmVjeWNsZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZURlbGF5ZWQoKTp2b2lkIHtcbiAgICAgICAgLy8gSWYgdGhlIHBvcHVwIGhhc24ndCBiZWVuIGNyZWF0ZWQsIG9yIGl0IGhhcyBidXQgaXQgaXNuJ3QgY3VycmVudGx5IG9wZW4sIG9wZW4gdGhlIHBvcHVwLlxuICAgICAgICBpZiAoIXRoaXMuX2NvbXBvbmVudFJlZiB8fCAodGhpcy5fY29tcG9uZW50UmVmICYmICF0aGlzLnBvcHVwLmlzT3BlbikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wZW5EZWxheWVkKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPJ3dpc2UsIGNsb3NlIGl0LlxuICAgICAgICByZXR1cm4gdGhpcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGUoKTp2b2lkIHtcbiAgICAgICAgLy8gSWYgdGhlIHBvcHVwIGhhc24ndCBiZWVuIGNyZWF0ZWQsIG9yIGl0IGhhcyBidXQgaXQgaXNuJ3QgY3VycmVudGx5IG9wZW4sIG9wZW4gdGhlIHBvcHVwLlxuICAgICAgICBpZiAoIXRoaXMuX2NvbXBvbmVudFJlZiB8fCAodGhpcy5fY29tcG9uZW50UmVmICYmICF0aGlzLnBvcHVwLmlzT3BlbikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wZW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE8nd2lzZSwgY2xvc2UgaXQuXG4gICAgICAgIHJldHVybiB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIilcbiAgICBwdWJsaWMgb25Nb3VzZUVudGVyKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyID09PSBQb3B1cFRyaWdnZXIuSG92ZXIpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbkRlbGF5ZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIpXG4gICAgcHVibGljIG9uTW91c2VMZWF2ZSgpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLkhvdmVyKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIilcbiAgICBwdWJsaWMgb25DbGljaygpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLkNsaWNrIHx8XG4gICAgICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyID09PSBQb3B1cFRyaWdnZXIuT3V0c2lkZUNsaWNrKSB7XG5cbiAgICAgICAgICAgIC8vIFJlcGVhdGVkIGNsaWNrcyByZXF1aXJlIGEgdG9nZ2xlLCByYXRoZXIgdGhhbiBqdXN0IG9wZW5pbmcgdGhlIHBvcHVwIGVhY2ggdGltZS5cbiAgICAgICAgICAgIHRoaXMudG9nZ2xlRGVsYXllZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPT09IFBvcHVwVHJpZ2dlci5Gb2N1cyAmJlxuICAgICAgICAgICAgICAgICAgICghdGhpcy5fY29tcG9uZW50UmVmIHx8ICh0aGlzLl9jb21wb25lbnRSZWYgJiYgIXRoaXMucG9wdXAuaXNPcGVuKSkpIHtcbiAgICAgICAgICAgIC8vIFJlcGVhdGVkIGNsaWNrcyB3aXRoIGEgZm9jdXMgdHJpZ2dlciByZXF1aXJlcyBhbiBvcGVuIChhcyBmb2N1cyBpc24ndCBldmVyIGxvc3Qgb24gcmVwZWF0ZWQgY2xpY2spLlxuICAgICAgICAgICAgdGhpcy5vcGVuRGVsYXllZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRvY3VtZW50Q2xpY2soZTpNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgLy8gSWYgdGhlIHBvcHVwIHRyaWdnZXIgaXMgb3V0c2lkZSBjbGljayxcbiAgICAgICAgaWYgKHRoaXMuX2NvbXBvbmVudFJlZiAmJiB0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyID09PSBQb3B1cFRyaWdnZXIuT3V0c2lkZUNsaWNrKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBFbGVtZW50O1xuICAgICAgICAgICAgLy8gQ2xvc2UgdGhlIHBvcHVwIGlmIHRoZSBjbGljayBpcyBvdXRzaWRlIG9mIHRoZSBwb3B1cCBlbGVtZW50LlxuICAgICAgICAgICAgaWYgKCEodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEVsZW1lbnQpLmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNpblwiKVxuICAgIHB1YmxpYyBvbkZvY3VzSW4oKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPT09IFBvcHVwVHJpZ2dlci5Gb2N1cykge1xuICAgICAgICAgICAgdGhpcy5vcGVuRGVsYXllZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25Gb2N1c091dChlOmFueSk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGUucmVsYXRlZFRhcmdldCkgJiZcbiAgICAgICAgICAgICF0aGlzLnBvcHVwLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQpICYmXG4gICAgICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyID09PSBQb3B1cFRyaWdnZXIuRm9jdXMpIHtcblxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNsZWFudXAoKTp2b2lkIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX29wZW5pbmdUaW1lb3V0KTtcblxuICAgICAgICBpZiAodGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlICYmIHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZS5wb3NpdGlvbmluZ1NlcnZpY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZS5wb3NpdGlvbmluZ1NlcnZpY2UuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeS5kZXRhY2hGcm9tQXBwbGljYXRpb24odGhpcy5fY29tcG9uZW50UmVmKTtcblxuICAgICAgICBpZiAodGhpcy5fZG9jdW1lbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5fZG9jdW1lbnRMaXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIH1cbn1cbiJdfQ==