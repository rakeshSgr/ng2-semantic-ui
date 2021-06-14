import { __decorate, __extends, __metadata } from "tslib";
import { Directive, Input, ElementRef, TemplateRef, Renderer2 } from "@angular/core";
import { ITemplateRefContext, Util, PositioningPlacement, SuiComponentFactory } from "../../../misc/util/internal";
import { PopupConfig, PopupTrigger } from "../classes/popup-config";
import { SuiPopupConfig } from "../services/popup.service";
import { SuiPopupTemplateController } from "../classes/popup-template-controller";
var templateRef = TemplateRef;
var SuiPopupDirective = /** @class */ (function (_super) {
    __extends(SuiPopupDirective, _super);
    function SuiPopupDirective(renderer, element, componentFactory, popupDefaults) {
        return _super.call(this, renderer, element, componentFactory, new PopupConfig(popupDefaults)) || this;
    }
    Object.defineProperty(SuiPopupDirective.prototype, "popupHeader", {
        set: function (header) {
            this.popup.config.header = header;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupText", {
        set: function (text) {
            this.popup.config.text = text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupInverted", {
        set: function (inverted) {
            this.popup.config.isInverted = Util.DOM.parseBooleanAttribute(inverted);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupBasic", {
        set: function (basic) {
            this.popup.config.isBasic = Util.DOM.parseBooleanAttribute(basic);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupInline", {
        set: function (inline) {
            this.popup.config.isInline = Util.DOM.parseBooleanAttribute(inline);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupFlowing", {
        set: function (flowing) {
            this.popup.config.isFlowing = Util.DOM.parseBooleanAttribute(flowing);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTransition", {
        set: function (transition) {
            this.popup.config.transition = transition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTransitionDuration", {
        set: function (duration) {
            this.popup.config.transitionDuration = duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupPlacement", {
        set: function (placement) {
            this.popup.config.placement = placement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupWidth", {
        set: function (width) {
            this.popup.config.width = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupSize", {
        set: function (size) {
            this.popup.config.size = size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupDelay", {
        set: function (delay) {
            this.popup.config.delay = delay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTrigger", {
        get: function () {
            return this.popup.config.trigger;
        },
        set: function (trigger) {
            this.popup.config.trigger = trigger;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTemplate", {
        set: function (template) {
            this.template = template;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTemplateContext", {
        set: function (context) {
            this.context = context;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupConfig", {
        set: function (config) {
            this.configure(config);
        },
        enumerable: true,
        configurable: true
    });
    SuiPopupDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: SuiComponentFactory },
        { type: SuiPopupConfig }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SuiPopupDirective.prototype, "popupHeader", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SuiPopupDirective.prototype, "popupText", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SuiPopupDirective.prototype, "popupInverted", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SuiPopupDirective.prototype, "popupBasic", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SuiPopupDirective.prototype, "popupInline", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SuiPopupDirective.prototype, "popupFlowing", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SuiPopupDirective.prototype, "popupTransition", null);
    __decorate([
        Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], SuiPopupDirective.prototype, "popupTransitionDuration", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SuiPopupDirective.prototype, "popupPlacement", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SuiPopupDirective.prototype, "popupWidth", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SuiPopupDirective.prototype, "popupSize", null);
    __decorate([
        Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], SuiPopupDirective.prototype, "popupDelay", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SuiPopupDirective.prototype, "popupTrigger", null);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef),
        __metadata("design:paramtypes", [TemplateRef])
    ], SuiPopupDirective.prototype, "popupTemplate", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SuiPopupDirective.prototype, "popupTemplateContext", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SuiPopupDirective.prototype, "popupConfig", null);
    SuiPopupDirective = __decorate([
        Directive({
            selector: "[suiPopup]",
            exportAs: "suiPopup"
        }),
        __metadata("design:paramtypes", [Renderer2,
            ElementRef,
            SuiComponentFactory,
            SuiPopupConfig])
    ], SuiPopupDirective);
    return SuiPopupDirective;
}(SuiPopupTemplateController));
export { SuiPopupDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9wb3B1cC9kaXJlY3RpdmVzL3BvcHVwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRW5ILE9BQU8sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUF5QixNQUFNLHlCQUF5QixDQUFDO0FBQzNGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsMEJBQTBCLEVBQStDLE1BQU0sc0NBQXNDLENBQUM7QUFFL0gsSUFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBTWhDO0lBQTBDLHFDQUE2QjtJQXFGbkUsMkJBQVksUUFBa0IsRUFDbEIsT0FBa0IsRUFDbEIsZ0JBQW9DLEVBQ3BDLGFBQTRCO2VBRXBDLGtCQUFNLFFBQVEsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQXpGRCxzQkFBVywwQ0FBVzthQUF0QixVQUF1QixNQUFhO1lBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFHRCxzQkFBVyx3Q0FBUzthQUFwQixVQUFxQixJQUFXO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFHRCxzQkFBVyw0Q0FBYTthQUF4QixVQUF5QixRQUFnQjtZQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RSxDQUFDOzs7T0FBQTtJQUdELHNCQUFXLHlDQUFVO2FBQXJCLFVBQXNCLEtBQWE7WUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEUsQ0FBQzs7O09BQUE7SUFHRCxzQkFBVywwQ0FBVzthQUF0QixVQUF1QixNQUFjO1lBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hFLENBQUM7OztPQUFBO0lBR0Qsc0JBQVcsMkNBQVk7YUFBdkIsVUFBd0IsT0FBZTtZQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxRSxDQUFDOzs7T0FBQTtJQUdELHNCQUFXLDhDQUFlO2FBQTFCLFVBQTJCLFVBQWlCO1lBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDOUMsQ0FBQzs7O09BQUE7SUFHRCxzQkFBVyxzREFBdUI7YUFBbEMsVUFBbUMsUUFBZTtZQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7SUFHRCxzQkFBVyw2Q0FBYzthQUF6QixVQUEwQixTQUE4QjtZQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzVDLENBQUM7OztPQUFBO0lBR0Qsc0JBQVcseUNBQVU7YUFBckIsVUFBc0IsS0FBZ0I7WUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNwQyxDQUFDOzs7T0FBQTtJQUdELHNCQUFXLHdDQUFTO2FBQXBCLFVBQXFCLElBQWM7WUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUdELHNCQUFXLHlDQUFVO2FBQXJCLFVBQXNCLEtBQVk7WUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNwQyxDQUFDOzs7T0FBQTtJQUdELHNCQUFXLDJDQUFZO2FBQXZCO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDckMsQ0FBQzthQUVELFVBQXdCLE9BQW9CO1lBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDeEMsQ0FBQzs7O09BSkE7SUFPRCxzQkFBVyw0Q0FBYTthQUF4QixVQUF5QixRQUEwRDtZQUMvRSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLG1EQUFvQjthQUEvQixVQUFnQyxPQUFxQjtZQUNqRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLDBDQUFXO2FBQXRCLFVBQXVCLE1BQTBDO1lBQzdELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7O2dCQUVvQixTQUFTO2dCQUNWLFVBQVU7Z0JBQ0QsbUJBQW1CO2dCQUN0QixjQUFjOztJQXRGeEM7UUFEQyxLQUFLLEVBQUU7Ozt3REFHUDtJQUdEO1FBREMsS0FBSyxFQUFFOzs7c0RBR1A7SUFHRDtRQURDLEtBQUssRUFBRTs7OzBEQUdQO0lBR0Q7UUFEQyxLQUFLLEVBQUU7Ozt1REFHUDtJQUdEO1FBREMsS0FBSyxFQUFFOzs7d0RBR1A7SUFHRDtRQURDLEtBQUssRUFBRTs7O3lEQUdQO0lBR0Q7UUFEQyxLQUFLLEVBQUU7Ozs0REFHUDtJQUdEO1FBREMsS0FBSyxFQUFFOzs7b0VBR1A7SUFHRDtRQURDLEtBQUssRUFBRTs7OzJEQUdQO0lBR0Q7UUFEQyxLQUFLLEVBQUU7Ozt1REFHUDtJQUdEO1FBREMsS0FBSyxFQUFFOzs7c0RBR1A7SUFHRDtRQURDLEtBQUssRUFBRTs7O3VEQUdQO0lBR0Q7UUFEQyxLQUFLLEVBQUU7Ozt5REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO2tDQUMwQixXQUFXO3lDQUFYLFdBQVc7MERBRTVDO0lBR0Q7UUFEQyxLQUFLLEVBQUU7OztpRUFHUDtJQUdEO1FBREMsS0FBSyxFQUFFOzs7d0RBR1A7SUFuRlEsaUJBQWlCO1FBSjdCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxVQUFVO1NBQ3ZCLENBQUM7eUNBc0Z1QixTQUFTO1lBQ1YsVUFBVTtZQUNELG1CQUFtQjtZQUN0QixjQUFjO09BeEYvQixpQkFBaUIsQ0E0RjdCO0lBQUQsd0JBQUM7Q0FBQSxBQTVGRCxDQUEwQywwQkFBMEIsR0E0Rm5FO1NBNUZZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEVsZW1lbnRSZWYsIFRlbXBsYXRlUmVmLCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSVRlbXBsYXRlUmVmQ29udGV4dCwgVXRpbCwgUG9zaXRpb25pbmdQbGFjZW1lbnQsIFN1aUNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlQb3B1cCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3BvcHVwXCI7XG5pbXBvcnQgeyBQb3B1cENvbmZpZywgUG9wdXBUcmlnZ2VyLCBQb3B1cFNpemUsIFBvcHVwV2lkdGggfSBmcm9tIFwiLi4vY2xhc3Nlcy9wb3B1cC1jb25maWdcIjtcbmltcG9ydCB7IFN1aVBvcHVwQ29uZmlnIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3BvcHVwLnNlcnZpY2VcIjtcbmltcG9ydCB7IFN1aVBvcHVwQ29udHJvbGxlciB9IGZyb20gXCIuLi9jbGFzc2VzL3BvcHVwLWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFN1aVBvcHVwVGVtcGxhdGVDb250cm9sbGVyLCBJVGVtcGxhdGVQb3B1cENvbnRleHQsIElUZW1wbGF0ZVBvcHVwQ29uZmlnIH0gZnJvbSBcIi4uL2NsYXNzZXMvcG9wdXAtdGVtcGxhdGUtY29udHJvbGxlclwiO1xuXG5jb25zdCB0ZW1wbGF0ZVJlZiA9IFRlbXBsYXRlUmVmO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpUG9wdXBdXCIsXG4gICAgZXhwb3J0QXM6IFwic3VpUG9wdXBcIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlQb3B1cERpcmVjdGl2ZTxUPiBleHRlbmRzIFN1aVBvcHVwVGVtcGxhdGVDb250cm9sbGVyPFQ+IHtcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBIZWFkZXIoaGVhZGVyOnN0cmluZykge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5oZWFkZXIgPSBoZWFkZXI7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwVGV4dCh0ZXh0OnN0cmluZykge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy50ZXh0ID0gdGV4dDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBJbnZlcnRlZChpbnZlcnRlZDpib29sZWFuKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLmlzSW52ZXJ0ZWQgPSBVdGlsLkRPTS5wYXJzZUJvb2xlYW5BdHRyaWJ1dGUoaW52ZXJ0ZWQpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cEJhc2ljKGJhc2ljOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcuaXNCYXNpYyA9IFV0aWwuRE9NLnBhcnNlQm9vbGVhbkF0dHJpYnV0ZShiYXNpYyk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwSW5saW5lKGlubGluZTpib29sZWFuKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLmlzSW5saW5lID0gVXRpbC5ET00ucGFyc2VCb29sZWFuQXR0cmlidXRlKGlubGluZSk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwRmxvd2luZyhmbG93aW5nOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcuaXNGbG93aW5nID0gVXRpbC5ET00ucGFyc2VCb29sZWFuQXR0cmlidXRlKGZsb3dpbmcpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cFRyYW5zaXRpb24odHJhbnNpdGlvbjpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwVHJhbnNpdGlvbkR1cmF0aW9uKGR1cmF0aW9uOm51bWJlcikge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBQbGFjZW1lbnQocGxhY2VtZW50OlBvc2l0aW9uaW5nUGxhY2VtZW50KSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnBsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBXaWR0aCh3aWR0aDpQb3B1cFdpZHRoKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLndpZHRoID0gd2lkdGg7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwU2l6ZShzaXplOlBvcHVwU2l6ZSkge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5zaXplID0gc2l6ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBEZWxheShkZWxheTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcuZGVsYXkgPSBkZWxheTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcG9wdXBUcmlnZ2VyKCk6UG9wdXBUcmlnZ2VyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXI7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwb3B1cFRyaWdnZXIodHJpZ2dlcjpQb3B1cFRyaWdnZXIpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9IHRyaWdnZXI7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwVGVtcGxhdGUodGVtcGxhdGU6VGVtcGxhdGVSZWY8SVRlbXBsYXRlUG9wdXBDb250ZXh0PFQ+PiB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwVGVtcGxhdGVDb250ZXh0KGNvbnRleHQ6VCB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cENvbmZpZyhjb25maWc6SVRlbXBsYXRlUG9wdXBDb25maWc8VD4gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmUoY29uZmlnKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgZWxlbWVudDpFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudEZhY3Rvcnk6U3VpQ29tcG9uZW50RmFjdG9yeSxcbiAgICAgICAgICAgICAgICBwb3B1cERlZmF1bHRzOlN1aVBvcHVwQ29uZmlnKSB7XG5cbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIGVsZW1lbnQsIGNvbXBvbmVudEZhY3RvcnksIG5ldyBQb3B1cENvbmZpZyhwb3B1cERlZmF1bHRzKSk7XG4gICAgfVxufVxuIl19