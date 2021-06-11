/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, ElementRef, TemplateRef, Renderer2 } from "@angular/core";
import { Util, PositioningPlacement, SuiComponentFactory } from "../../../misc/util/internal";
import { PopupConfig, PopupTrigger } from "../classes/popup-config";
import { SuiPopupConfig } from "../services/popup.service";
import { SuiPopupTemplateController } from "../classes/popup-template-controller";
var /** @type {?} */ templateRef = TemplateRef;
/**
 * @template T
 */
var SuiPopupDirective = /** @class */ (function (_super) {
    tslib_1.__extends(SuiPopupDirective, _super);
    function SuiPopupDirective(renderer, element, componentFactory, popupDefaults) {
        return _super.call(this, renderer, element, componentFactory, new PopupConfig(popupDefaults)) || this;
    }
    Object.defineProperty(SuiPopupDirective.prototype, "popupHeader", {
        set: /**
         * @param {?} header
         * @return {?}
         */
        function (header) {
            this.popup.config.header = header;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupText", {
        set: /**
         * @param {?} text
         * @return {?}
         */
        function (text) {
            this.popup.config.text = text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupInverted", {
        set: /**
         * @param {?} inverted
         * @return {?}
         */
        function (inverted) {
            this.popup.config.isInverted = Util.DOM.parseBooleanAttribute(inverted);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupBasic", {
        set: /**
         * @param {?} basic
         * @return {?}
         */
        function (basic) {
            this.popup.config.isBasic = Util.DOM.parseBooleanAttribute(basic);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupInline", {
        set: /**
         * @param {?} inline
         * @return {?}
         */
        function (inline) {
            this.popup.config.isInline = Util.DOM.parseBooleanAttribute(inline);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupFlowing", {
        set: /**
         * @param {?} flowing
         * @return {?}
         */
        function (flowing) {
            this.popup.config.isFlowing = Util.DOM.parseBooleanAttribute(flowing);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTransition", {
        set: /**
         * @param {?} transition
         * @return {?}
         */
        function (transition) {
            this.popup.config.transition = transition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTransitionDuration", {
        set: /**
         * @param {?} duration
         * @return {?}
         */
        function (duration) {
            this.popup.config.transitionDuration = duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupPlacement", {
        set: /**
         * @param {?} placement
         * @return {?}
         */
        function (placement) {
            this.popup.config.placement = placement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupWidth", {
        set: /**
         * @param {?} width
         * @return {?}
         */
        function (width) {
            this.popup.config.width = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupSize", {
        set: /**
         * @param {?} size
         * @return {?}
         */
        function (size) {
            this.popup.config.size = size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupDelay", {
        set: /**
         * @param {?} delay
         * @return {?}
         */
        function (delay) {
            this.popup.config.delay = delay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTrigger", {
        get: /**
         * @return {?}
         */
        function () {
            return this.popup.config.trigger;
        },
        set: /**
         * @param {?} trigger
         * @return {?}
         */
        function (trigger) {
            this.popup.config.trigger = trigger;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTemplate", {
        set: /**
         * @param {?} template
         * @return {?}
         */
        function (template) {
            this.template = template;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTemplateContext", {
        set: /**
         * @param {?} context
         * @return {?}
         */
        function (context) {
            this.context = context;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupConfig", {
        set: /**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            this.configure(config);
        },
        enumerable: true,
        configurable: true
    });
    SuiPopupDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[suiPopup]",
                    exportAs: "suiPopup"
                },] }
    ];
    /** @nocollapse */
    SuiPopupDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: SuiComponentFactory },
        { type: SuiPopupConfig }
    ]; };
    SuiPopupDirective.propDecorators = {
        popupHeader: [{ type: Input }],
        popupText: [{ type: Input }],
        popupInverted: [{ type: Input }],
        popupBasic: [{ type: Input }],
        popupInline: [{ type: Input }],
        popupFlowing: [{ type: Input }],
        popupTransition: [{ type: Input }],
        popupTransitionDuration: [{ type: Input }],
        popupPlacement: [{ type: Input }],
        popupWidth: [{ type: Input }],
        popupSize: [{ type: Input }],
        popupDelay: [{ type: Input }],
        popupTrigger: [{ type: Input }],
        popupTemplate: [{ type: Input }],
        popupTemplateContext: [{ type: Input }],
        popupConfig: [{ type: Input }]
    };
    return SuiPopupDirective;
}(SuiPopupTemplateController));
export { SuiPopupDirective };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9wb3B1cC9kaXJlY3RpdmVzL3BvcHVwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JGLE9BQU8sRUFBdUIsSUFBSSxFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFbkgsT0FBTyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQXlCLE1BQU0seUJBQXlCLENBQUM7QUFDM0YsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTNELE9BQU8sRUFBRSwwQkFBMEIsRUFBK0MsTUFBTSxzQ0FBc0MsQ0FBQztBQUUvSCxxQkFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDOzs7OztJQU1VLDZDQUE2QjtJQXFGbkUsMkJBQVksUUFBa0IsRUFDbEIsT0FBa0IsRUFDbEIsZ0JBQW9DLEVBQ3BDLGFBQTRCO2VBRXBDLGtCQUFNLFFBQVEsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDN0U7SUExRkQsc0JBQ1csMENBQVc7Ozs7O1FBRHRCLFVBQ3VCLE1BQWE7WUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUNyQzs7O09BQUE7SUFFRCxzQkFDVyx3Q0FBUzs7Ozs7UUFEcEIsVUFDcUIsSUFBVztZQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2pDOzs7T0FBQTtJQUVELHNCQUNXLDRDQUFhOzs7OztRQUR4QixVQUN5QixRQUFnQjtZQUNyQyxJ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QUs7a0NBS0wsS0FBSzswQ0FLTCxLQUFLO2lDQUtMLEtBQUs7NkJBS0wsS0FBSzs0QkFLTCxLQUFLOzZCQUtMLEtBQUs7K0JBS0wsS0FBSztnQ0FTTCxLQUFLO3VDQUtMLEtBQUs7OEJBS0wsS0FBSzs7NEJBOUZWO0VBYzBDLDBCQUEwQjtTQUF2RCxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBUZW1wbGF0ZVJlZiwgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElUZW1wbGF0ZVJlZkNvbnRleHQsIFV0aWwsIFBvc2l0aW9uaW5nUGxhY2VtZW50LCBTdWlDb21wb25lbnRGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpUG9wdXAgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3B1cFwiO1xuaW1wb3J0IHsgUG9wdXBDb25maWcsIFBvcHVwVHJpZ2dlciwgUG9wdXBTaXplLCBQb3B1cFdpZHRoIH0gZnJvbSBcIi4uL2NsYXNzZXMvcG9wdXAtY29uZmlnXCI7XG5pbXBvcnQgeyBTdWlQb3B1cENvbmZpZyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9wb3B1cC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTdWlQb3B1cENvbnRyb2xsZXIgfSBmcm9tIFwiLi4vY2xhc3Nlcy9wb3B1cC1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBTdWlQb3B1cFRlbXBsYXRlQ29udHJvbGxlciwgSVRlbXBsYXRlUG9wdXBDb250ZXh0LCBJVGVtcGxhdGVQb3B1cENvbmZpZyB9IGZyb20gXCIuLi9jbGFzc2VzL3BvcHVwLXRlbXBsYXRlLWNvbnRyb2xsZXJcIjtcblxuY29uc3QgdGVtcGxhdGVSZWYgPSBUZW1wbGF0ZVJlZjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3N1aVBvcHVwXVwiLFxuICAgIGV4cG9ydEFzOiBcInN1aVBvcHVwXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpUG9wdXBEaXJlY3RpdmU8VD4gZXh0ZW5kcyBTdWlQb3B1cFRlbXBsYXRlQ29udHJvbGxlcjxUPiB7XG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwSGVhZGVyKGhlYWRlcjpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcuaGVhZGVyID0gaGVhZGVyO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cFRleHQodGV4dDpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudGV4dCA9IHRleHQ7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwSW52ZXJ0ZWQoaW52ZXJ0ZWQ6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5pc0ludmVydGVkID0gVXRpbC5ET00ucGFyc2VCb29sZWFuQXR0cmlidXRlKGludmVydGVkKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBCYXNpYyhiYXNpYzpib29sZWFuKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLmlzQmFzaWMgPSBVdGlsLkRPTS5wYXJzZUJvb2xlYW5BdHRyaWJ1dGUoYmFzaWMpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cElubGluZShpbmxpbmU6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5pc0lubGluZSA9IFV0aWwuRE9NLnBhcnNlQm9vbGVhbkF0dHJpYnV0ZShpbmxpbmUpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cEZsb3dpbmcoZmxvd2luZzpib29sZWFuKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLmlzRmxvd2luZyA9IFV0aWwuRE9NLnBhcnNlQm9vbGVhbkF0dHJpYnV0ZShmbG93aW5nKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBUcmFuc2l0aW9uKHRyYW5zaXRpb246c3RyaW5nKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cFRyYW5zaXRpb25EdXJhdGlvbihkdXJhdGlvbjpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwUGxhY2VtZW50KHBsYWNlbWVudDpQb3NpdGlvbmluZ1BsYWNlbWVudCkge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5wbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwV2lkdGgod2lkdGg6UG9wdXBXaWR0aCkge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy53aWR0aCA9IHdpZHRoO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cFNpemUoc2l6ZTpQb3B1cFNpemUpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcuc2l6ZSA9IHNpemU7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwRGVsYXkoZGVsYXk6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLmRlbGF5ID0gZGVsYXk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHBvcHVwVHJpZ2dlcigpOlBvcHVwVHJpZ2dlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcG9wdXBUcmlnZ2VyKHRyaWdnZXI6UG9wdXBUcmlnZ2VyKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPSB0cmlnZ2VyO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cFRlbXBsYXRlKHRlbXBsYXRlOlRlbXBsYXRlUmVmPElUZW1wbGF0ZVBvcHVwQ29udGV4dDxUPj4gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cFRlbXBsYXRlQ29udGV4dChjb250ZXh0OlQgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBDb25maWcoY29uZmlnOklUZW1wbGF0ZVBvcHVwQ29uZmlnPFQ+IHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJlKGNvbmZpZyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6RWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBjb21wb25lbnRGYWN0b3J5OlN1aUNvbXBvbmVudEZhY3RvcnksXG4gICAgICAgICAgICAgICAgcG9wdXBEZWZhdWx0czpTdWlQb3B1cENvbmZpZykge1xuXG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBlbGVtZW50LCBjb21wb25lbnRGYWN0b3J5LCBuZXcgUG9wdXBDb25maWcocG9wdXBEZWZhdWx0cykpO1xuICAgIH1cbn1cbiJdfQ==