import { __decorate, __metadata } from "tslib";
import { ComponentRef, ElementRef, HostListener, OnDestroy, Renderer2, Directive } from "@angular/core";
import { SuiComponentFactory } from "../../../misc/util/internal";
import { PopupConfig, PopupTrigger, IPopupConfig } from "./popup-config";
import { SuiPopup } from "../components/popup";
let SuiPopupController = class SuiPopupController {
    constructor(_renderer, _element, _componentFactory, config) {
        this._renderer = _renderer;
        this._element = _element;
        this._componentFactory = _componentFactory;
        // Generate a new SuiPopup component and attach it to the application view.
        this._componentRef = this._componentFactory.createComponent(SuiPopup);
        // Configure popup with provided config.
        this.popup.config = config;
        // When the popup is closed (onClose fires on animation complete),
        this.popup.onClose.subscribe(() => this.cleanup());
    }
    // Returns generated popup instance.
    get popup() {
        // Use non-null assertion as we only access this when a popup exists.
        return this._componentRef.instance;
    }
    configure(config) {
        if (config) {
            Object.assign(this.popup.config, config);
        }
    }
    openDelayed() {
        // Cancel the opening timer.
        clearTimeout(this._openingTimeout);
        // Start the popup opening after the specified delay interval.
        this._openingTimeout = window.setTimeout(() => this.open(), this.popup.config.delay);
    }
    open() {
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
            .listen("document", "click", (e) => this.onDocumentClick(e));
        // Start popup open transition.
        this.popup.open();
        // Call lifecyle hook
        const lifecycle = this.popupOnOpen;
        if (lifecycle) {
            lifecycle.call(this);
        }
    }
    close() {
        // Cancel the opening timer to stop the popup opening after close has been called.
        clearTimeout(this._openingTimeout);
        if (this._componentRef) {
            // Start popup close transition.
            this.popup.close();
        }
        // Call lifecyle hook
        const lifecycle = this.popupOnClose;
        if (lifecycle) {
            lifecycle.call(this);
        }
    }
    toggleDelayed() {
        // If the popup hasn't been created, or it has but it isn't currently open, open the popup.
        if (!this._componentRef || (this._componentRef && !this.popup.isOpen)) {
            return this.openDelayed();
        }
        // O'wise, close it.
        return this.close();
    }
    toggle() {
        // If the popup hasn't been created, or it has but it isn't currently open, open the popup.
        if (!this._componentRef || (this._componentRef && !this.popup.isOpen)) {
            return this.open();
        }
        // O'wise, close it.
        return this.close();
    }
    onMouseEnter() {
        if (this.popup.config.trigger === PopupTrigger.Hover) {
            this.openDelayed();
        }
    }
    onMouseLeave() {
        if (this.popup.config.trigger === PopupTrigger.Hover) {
            this.close();
        }
    }
    onClick() {
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
    }
    onDocumentClick(e) {
        // If the popup trigger is outside click,
        if (this._componentRef && this.popup.config.trigger === PopupTrigger.OutsideClick) {
            const target = e.target;
            // Close the popup if the click is outside of the popup element.
            if (!this._element.nativeElement.contains(target)) {
                this.close();
            }
        }
    }
    onFocusIn() {
        if (this.popup.config.trigger === PopupTrigger.Focus) {
            this.openDelayed();
        }
    }
    onFocusOut(e) {
        if (!this._element.nativeElement.contains(e.relatedTarget) &&
            !this.popup.elementRef.nativeElement.contains(e.relatedTarget) &&
            this.popup.config.trigger === PopupTrigger.Focus) {
            this.close();
        }
    }
    cleanup() {
        clearTimeout(this._openingTimeout);
        if (this._componentRef.instance && this._componentRef.instance.positioningService) {
            this._componentRef.instance.positioningService.destroy();
        }
        this._componentFactory.detachFromApplication(this._componentRef);
        if (this._documentListener) {
            this._documentListener();
        }
    }
    ngOnDestroy() {
        this.cleanup();
    }
};
SuiPopupController.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: SuiComponentFactory },
    { type: PopupConfig }
];
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
export { SuiPopupController };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvcG9wdXAvY2xhc3Nlcy9wb3B1cC1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBVS9DLElBQXNCLGtCQUFrQixHQUF4QyxNQUFzQixrQkFBa0I7SUFnQnBDLFlBQXNCLFNBQW1CLEVBQ25CLFFBQW1CLEVBQ25CLGlCQUFxQyxFQUMvQyxNQUFrQjtRQUhSLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW9CO1FBR3ZELDJFQUEyRTtRQUMzRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdEUsd0NBQXdDO1FBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUUzQixrRUFBa0U7UUFDbEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUF6QkQsb0NBQW9DO0lBQ3BDLElBQVcsS0FBSztRQUNaLHFFQUFxRTtRQUNyRSxPQUFPLElBQUksQ0FBQyxh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QUM7SUFFTSxXQUFXO1FBQ2QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7Q0FDSixDQUFBOztZQXZLbUMsU0FBUztZQUNWLFVBQVU7WUFDRCxtQkFBbUI7WUFDeEMsV0FBVzs7QUE0RjlCO0lBREMsWUFBWSxDQUFDLFlBQVksQ0FBQzs7OztzREFLMUI7QUFHRDtJQURDLFlBQVksQ0FBQyxZQUFZLENBQUM7Ozs7c0RBSzFCO0FBR0Q7SUFEQyxZQUFZLENBQUMsT0FBTyxDQUFDOzs7O2lEQVlyQjtBQWNEO0lBREMsWUFBWSxDQUFDLFNBQVMsQ0FBQzs7OzttREFLdkI7QUFHRDtJQURDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7OztvREFRcEM7QUFwS2lCLGtCQUFrQjtJQUR2QyxTQUFTLEVBQUU7cUNBaUJ3QixTQUFTO1FBQ1YsVUFBVTtRQUNELG1CQUFtQjtRQUN4QyxXQUFXO0dBbkJaLGtCQUFrQixDQXVMdkM7U0F2THFCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudFJlZiwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiwgRGlyZWN0aXZlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aUNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBQb3B1cENvbmZpZywgUG9wdXBUcmlnZ2VyLCBJUG9wdXBDb25maWcgfSBmcm9tIFwiLi9wb3B1cC1jb25maWdcIjtcbmltcG9ydCB7IFN1aVBvcHVwIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9wdXBcIjtcbmltcG9ydCB7IElQb3B1cExpZmVjeWNsZSB9IGZyb20gXCIuL3BvcHVwLWxpZmVjeWNsZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElQb3B1cCB7XG4gICAgb3BlbigpOnZvaWQ7XG4gICAgY2xvc2UoKTp2b2lkO1xuICAgIHRvZ2dsZSgpOnZvaWQ7XG59XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN1aVBvcHVwQ29udHJvbGxlciBpbXBsZW1lbnRzIElQb3B1cCwgT25EZXN0cm95IHtcbiAgICAvLyBTdG9yZXMgcmVmZXJlbmNlIHRvIGdlbmVyYXRlZCBwb3B1cCBjb21wb25lbnQuXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50UmVmOkNvbXBvbmVudFJlZjxTdWlQb3B1cD47XG5cbiAgICAvLyBSZXR1cm5zIGdlbmVyYXRlZCBwb3B1cCBpbnN0YW5jZS5cbiAgICBwdWJsaWMgZ2V0IHBvcHVwKCk6U3VpUG9wdXAge1xuICAgICAgICAvLyBVc2Ugbm9uLW51bGwgYXNzZXJ0aW9uIGFzIHdlIG9ubHkgYWNjZXNzIHRoaXMgd2hlbiBhIHBvcHVwIGV4aXN0cy5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvLyBgc2V0VGltZW91dGAgdGltZXIgcG9pbnRlciBmb3IgZGVsYXllZCBwb3B1cCBvcGVuLlxuICAgIHByaXZhdGUgX29wZW5pbmdUaW1lb3V0Om51bWJlcjtcblxuICAgIC8vIEZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgZG9jdW1lbnQgY2xpY2sgaGFuZGxlci5cbiAgICBwcml2YXRlIF9kb2N1bWVudExpc3RlbmVyOigoKSA9PiB2b2lkKSB8IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfcmVuZGVyZXI6UmVuZGVyZXIyLFxuICAgICAgICAgICAgICAgIHByb3RlY3RlZCBfZWxlbWVudDpFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIHByb3RlY3RlZCBfY29tcG9uZW50RmFjdG9yeTpTdWlDb21wb25lbnRGYWN0b3J5LFxuICAgICAgICAgICAgICAgIGNvbmZpZzpQb3B1cENvbmZpZykge1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IFN1aVBvcHVwIGNvbXBvbmVudCBhbmQgYXR0YWNoIGl0IHRvIHRoZSBhcHBsaWNhdGlvbiB2aWV3LlxuICAgICAgICB0aGlzLl9jb21wb25lbnRSZWYgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmNyZWF0ZUNvbXBvbmVudChTdWlQb3B1cCk7XG5cbiAgICAgICAgLy8gQ29uZmlndXJlIHBvcHVwIHdpdGggcHJvdmlkZWQgY29uZmlnLlxuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZyA9IGNvbmZpZztcblxuICAgICAgICAvLyBXaGVuIHRoZSBwb3B1cCBpcyBjbG9zZWQgKG9uQ2xvc2UgZmlyZXMgb24gYW5pbWF0aW9uIGNvbXBsZXRlKSxcbiAgICAgICAgdGhpcy5wb3B1cC5vbkNsb3NlLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsZWFudXAoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbmZpZ3VyZShjb25maWc/OklQb3B1cENvbmZpZyk6dm9pZCB7XG4gICAgICAgIGlmIChjb25maWcpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5wb3B1cC5jb25maWcsIGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbkRlbGF5ZWQoKTp2b2lkIHtcbiAgICAgICAgLy8gQ2FuY2VsIHRoZSBvcGVuaW5nIHRpbWVyLlxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fb3BlbmluZ1RpbWVvdXQpO1xuXG4gICAgICAgIC8vIFN0YXJ0IHRoZSBwb3B1cCBvcGVuaW5nIGFmdGVyIHRoZSBzcGVjaWZpZWQgZGVsYXkgaW50ZXJ2YWwuXG4gICAgICAgIHRoaXMuX29wZW5pbmdUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5vcGVuKCksIHRoaXMucG9wdXAuY29uZmlnLmRlbGF5KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbigpOnZvaWQge1xuICAgICAgICAvLyBBdHRhY2ggdGhlIGdlbmVyYXRlZCBjb21wb25lbnQgdG8gdGhlIGN1cnJlbnQgYXBwbGljYXRpb24uXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuYXR0YWNoVG9BcHBsaWNhdGlvbih0aGlzLl9jb21wb25lbnRSZWYpO1xuXG4gICAgICAgIGlmICh0aGlzLnBvcHVwLmNvbmZpZy5pc0lubGluZSkge1xuICAgICAgICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeS5tb3ZlVG9FbGVtZW50KHRoaXMuX2NvbXBvbmVudFJlZiwgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTW92ZSB0aGUgZ2VuZXJhdGVkIGVsZW1lbnQgdG8gdGhlIGJvZHkgdG8gYXZvaWQgYW55IHBvc2l0aW9uaW5nIGlzc3Vlcy5cbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkubW92ZVRvRG9jdW1lbnRCb2R5KHRoaXMuX2NvbXBvbmVudFJlZik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBdHRhY2ggYSByZWZlcmVuY2UgdG8gdGhlIGFuY2hvciBlbGVtZW50LiBXZSBkbyBpdCBoZXJlIGJlY2F1c2UgSUUxMSBsb3ZlcyB0byBjb21wbGFpbi5cbiAgICAgICAgdGhpcy5wb3B1cC5hbmNob3IgPSB0aGlzLl9lbGVtZW50O1xuXG4gICAgICAgIC8vIEFkZCBhIGxpc3RlbmVyIHRvIHRoZSBkb2N1bWVudCBib2R5IHRvIGhhbmRsZSBjbG9zaW5nLlxuICAgICAgICB0aGlzLl9kb2N1bWVudExpc3RlbmVyID0gdGhpcy5fcmVuZGVyZXJcbiAgICAgICAgICAgIC5saXN0ZW4oXCJkb2N1bWVudFwiLCBcImNsaWNrXCIsIChlOk1vdXNlRXZlbnQpID0+XG4gICAgICAgICAgICAgICAgdGhpcy5vbkRvY3VtZW50Q2xpY2soZSkpO1xuXG4gICAgICAgIC8vIFN0YXJ0IHBvcHVwIG9wZW4gdHJhbnNpdGlvbi5cbiAgICAgICAgdGhpcy5wb3B1cC5vcGVuKCk7XG5cbiAgICAgICAgLy8gQ2FsbCBsaWZlY3lsZSBob29rXG4gICAgICAgIGNvbnN0IGxpZmVjeWNsZSA9ICh0aGlzIGFzIElQb3B1cExpZmVjeWNsZSkucG9wdXBPbk9wZW47XG4gICAgICAgIGlmIChsaWZlY3ljbGUpIHtcbiAgICAgICAgICAgIGxpZmVjeWNsZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlKCk6dm9pZCB7XG4gICAgICAgIC8vIENhbmNlbCB0aGUgb3BlbmluZyB0aW1lciB0byBzdG9wIHRoZSBwb3B1cCBvcGVuaW5nIGFmdGVyIGNsb3NlIGhhcyBiZWVuIGNhbGxlZC5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX29wZW5pbmdUaW1lb3V0KTtcblxuICAgICAgICBpZiAodGhpcy5fY29tcG9uZW50UmVmKSB7XG4gICAgICAgICAgICAvLyBTdGFydCBwb3B1cCBjbG9zZSB0cmFuc2l0aW9uLlxuICAgICAgICAgICAgdGhpcy5wb3B1cC5jbG9zZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsbCBsaWZlY3lsZSBob29rXG4gICAgICAgIGNvbnN0IGxpZmVjeWNsZSA9ICh0aGlzIGFzIElQb3B1cExpZmVjeWNsZSkucG9wdXBPbkNsb3NlO1xuICAgICAgICBpZiAobGlmZWN5Y2xlKSB7XG4gICAgICAgICAgICBsaWZlY3ljbGUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVEZWxheWVkKCk6dm9pZCB7XG4gICAgICAgIC8vIElmIHRoZSBwb3B1cCBoYXNuJ3QgYmVlbiBjcmVhdGVkLCBvciBpdCBoYXMgYnV0IGl0IGlzbid0IGN1cnJlbnRseSBvcGVuLCBvcGVuIHRoZSBwb3B1cC5cbiAgICAgICAgaWYgKCF0aGlzLl9jb21wb25lbnRSZWYgfHwgKHRoaXMuX2NvbXBvbmVudFJlZiAmJiAhdGhpcy5wb3B1cC5pc09wZW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcGVuRGVsYXllZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTyd3aXNlLCBjbG9zZSBpdC5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlKCk6dm9pZCB7XG4gICAgICAgIC8vIElmIHRoZSBwb3B1cCBoYXNuJ3QgYmVlbiBjcmVhdGVkLCBvciBpdCBoYXMgYnV0IGl0IGlzbid0IGN1cnJlbnRseSBvcGVuLCBvcGVuIHRoZSBwb3B1cC5cbiAgICAgICAgaWYgKCF0aGlzLl9jb21wb25lbnRSZWYgfHwgKHRoaXMuX2NvbXBvbmVudFJlZiAmJiAhdGhpcy5wb3B1cC5pc09wZW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcGVuKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPJ3dpc2UsIGNsb3NlIGl0LlxuICAgICAgICByZXR1cm4gdGhpcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIpXG4gICAgcHVibGljIG9uTW91c2VFbnRlcigpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLkhvdmVyKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5EZWxheWVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2VsZWF2ZVwiKVxuICAgIHB1YmxpYyBvbk1vdXNlTGVhdmUoKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPT09IFBvcHVwVHJpZ2dlci5Ib3Zlcikge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIpXG4gICAgcHVibGljIG9uQ2xpY2soKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPT09IFBvcHVwVHJpZ2dlci5DbGljayB8fFxuICAgICAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLk91dHNpZGVDbGljaykge1xuXG4gICAgICAgICAgICAvLyBSZXBlYXRlZCBjbGlja3MgcmVxdWlyZSBhIHRvZ2dsZSwgcmF0aGVyIHRoYW4ganVzdCBvcGVuaW5nIHRoZSBwb3B1cCBlYWNoIHRpbWUuXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZURlbGF5ZWQoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyID09PSBQb3B1cFRyaWdnZXIuRm9jdXMgJiZcbiAgICAgICAgICAgICAgICAgICAoIXRoaXMuX2NvbXBvbmVudFJlZiB8fCAodGhpcy5fY29tcG9uZW50UmVmICYmICF0aGlzLnBvcHVwLmlzT3BlbikpKSB7XG4gICAgICAgICAgICAvLyBSZXBlYXRlZCBjbGlja3Mgd2l0aCBhIGZvY3VzIHRyaWdnZXIgcmVxdWlyZXMgYW4gb3BlbiAoYXMgZm9jdXMgaXNuJ3QgZXZlciBsb3N0IG9uIHJlcGVhdGVkIGNsaWNrKS5cbiAgICAgICAgICAgIHRoaXMub3BlbkRlbGF5ZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25Eb2N1bWVudENsaWNrKGU6TW91c2VFdmVudCk6dm9pZCB7XG4gICAgICAgIC8vIElmIHRoZSBwb3B1cCB0cmlnZ2VyIGlzIG91dHNpZGUgY2xpY2ssXG4gICAgICAgIGlmICh0aGlzLl9jb21wb25lbnRSZWYgJiYgdGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLk91dHNpZGVDbGljaykge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgRWxlbWVudDtcbiAgICAgICAgICAgIC8vIENsb3NlIHRoZSBwb3B1cCBpZiB0aGUgY2xpY2sgaXMgb3V0c2lkZSBvZiB0aGUgcG9wdXAgZWxlbWVudC5cbiAgICAgICAgICAgIGlmICghKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50KS5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImZvY3VzaW5cIilcbiAgICBwdWJsaWMgb25Gb2N1c0luKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyID09PSBQb3B1cFRyaWdnZXIuRm9jdXMpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbkRlbGF5ZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c291dFwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uRm9jdXNPdXQoZTphbnkpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQpICYmXG4gICAgICAgICAgICAhdGhpcy5wb3B1cC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSAmJlxuICAgICAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLkZvY3VzKSB7XG5cbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjbGVhbnVwKCk6dm9pZCB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9vcGVuaW5nVGltZW91dCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZSAmJiB0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UucG9zaXRpb25pbmdTZXJ2aWNlKSB7XG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UucG9zaXRpb25pbmdTZXJ2aWNlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuZGV0YWNoRnJvbUFwcGxpY2F0aW9uKHRoaXMuX2NvbXBvbmVudFJlZik7XG5cbiAgICAgICAgaWYgKHRoaXMuX2RvY3VtZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2RvY3VtZW50TGlzdGVuZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOnZvaWQge1xuICAgICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICB9XG59XG4iXX0=