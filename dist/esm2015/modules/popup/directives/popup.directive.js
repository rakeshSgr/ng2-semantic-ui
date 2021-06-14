import { __decorate, __metadata } from "tslib";
import { Directive, Input, ElementRef, TemplateRef, Renderer2 } from "@angular/core";
import { ITemplateRefContext, Util, PositioningPlacement, SuiComponentFactory } from "../../../misc/util/internal";
import { PopupConfig, PopupTrigger } from "../classes/popup-config";
import { SuiPopupConfig } from "../services/popup.service";
import { SuiPopupTemplateController } from "../classes/popup-template-controller";
const templateRef = TemplateRef;
let SuiPopupDirective = class SuiPopupDirective extends SuiPopupTemplateController {
    constructor(renderer, element, componentFactory, popupDefaults) {
        super(renderer, element, componentFactory, new PopupConfig(popupDefaults));
    }
    set popupHeader(header) {
        this.popup.config.header = header;
    }
    set popupText(text) {
        this.popup.config.text = text;
    }
    set popupInverted(inverted) {
        this.popup.config.isInverted = Util.DOM.parseBooleanAttribute(inverted);
    }
    set popupBasic(basic) {
        this.popup.config.isBasic = Util.DOM.parseBooleanAttribute(basic);
    }
    set popupInline(inline) {
        this.popup.config.isInline = Util.DOM.parseBooleanAttribute(inline);
    }
    set popupFlowing(flowing) {
        this.popup.config.isFlowing = Util.DOM.parseBooleanAttribute(flowing);
    }
    set popupTransition(transition) {
        this.popup.config.transition = transition;
    }
    set popupTransitionDuration(duration) {
        this.popup.config.transitionDuration = duration;
    }
    set popupPlacement(placement) {
        this.popup.config.placement = placement;
    }
    set popupWidth(width) {
        this.popup.config.width = width;
    }
    set popupSize(size) {
        this.popup.config.size = size;
    }
    set popupDelay(delay) {
        this.popup.config.delay = delay;
    }
    get popupTrigger() {
        return this.popup.config.trigger;
    }
    set popupTrigger(trigger) {
        this.popup.config.trigger = trigger;
    }
    set popupTemplate(template) {
        this.template = template;
    }
    set popupTemplateContext(context) {
        this.context = context;
    }
    set popupConfig(config) {
        this.configure(config);
    }
};
SuiPopupDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: SuiComponentFactory },
    { type: SuiPopupConfig }
];
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
export { SuiPopupDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9wb3B1cC9kaXJlY3RpdmVzL3BvcHVwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRW5ILE9BQU8sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUF5QixNQUFNLHlCQUF5QixDQUFDO0FBQzNGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsMEJBQTBCLEVBQStDLE1BQU0sc0NBQXNDLENBQUM7QUFFL0gsTUFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBTWhDLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQXFCLFNBQVEsMEJBQTZCO0lBcUZuRSxZQUFZLFFBQWtCLEVBQ2xCLE9BQWtCLEVBQ2xCLGdCQUFvQyxFQUNwQyxhQUE0QjtRQUVwQyxLQUFLLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUF6RkQsSUFBVyxXQUFXLENBQUMsTUFBYTtRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3RDLENBQUM7SUFHRCxJQUFXLFNBQVMsQ0FBQyxJQUFXO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUdELElBQVcsYUFBYSxDQUFDLFFBQWdC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RUFBRTs7O2tEQUdQO0FBR0Q7SUFEQyxLQUFLLEVBQUU7OzttREFHUDtBQUdEO0lBREMsS0FBSyxFQUFFOzs7cURBR1A7QUFPRDtJQURDLEtBQUssRUFBRTs4QkFDMEIsV0FBVztxQ0FBWCxXQUFXO3NEQUU1QztBQUdEO0lBREMsS0FBSyxFQUFFOzs7NkRBR1A7QUFHRDtJQURDLEtBQUssRUFBRTs7O29EQUdQO0FBbkZRLGlCQUFpQjtJQUo3QixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUUsVUFBVTtLQUN2QixDQUFDO3FDQXNGdUIsU0FBUztRQUNWLFVBQVU7UUFDRCxtQkFBbUI7UUFDdEIsY0FBYztHQXhGL0IsaUJBQWlCLENBNEY3QjtTQTVGWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBUZW1wbGF0ZVJlZiwgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElUZW1wbGF0ZVJlZkNvbnRleHQsIFV0aWwsIFBvc2l0aW9uaW5nUGxhY2VtZW50LCBTdWlDb21wb25lbnRGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpUG9wdXAgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3B1cFwiO1xuaW1wb3J0IHsgUG9wdXBDb25maWcsIFBvcHVwVHJpZ2dlciwgUG9wdXBTaXplLCBQb3B1cFdpZHRoIH0gZnJvbSBcIi4uL2NsYXNzZXMvcG9wdXAtY29uZmlnXCI7XG5pbXBvcnQgeyBTdWlQb3B1cENvbmZpZyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9wb3B1cC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTdWlQb3B1cENvbnRyb2xsZXIgfSBmcm9tIFwiLi4vY2xhc3Nlcy9wb3B1cC1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBTdWlQb3B1cFRlbXBsYXRlQ29udHJvbGxlciwgSVRlbXBsYXRlUG9wdXBDb250ZXh0LCBJVGVtcGxhdGVQb3B1cENvbmZpZyB9IGZyb20gXCIuLi9jbGFzc2VzL3BvcHVwLXRlbXBsYXRlLWNvbnRyb2xsZXJcIjtcblxuY29uc3QgdGVtcGxhdGVSZWYgPSBUZW1wbGF0ZVJlZjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3N1aVBvcHVwXVwiLFxuICAgIGV4cG9ydEFzOiBcInN1aVBvcHVwXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpUG9wdXBEaXJlY3RpdmU8VD4gZXh0ZW5kcyBTdWlQb3B1cFRlbXBsYXRlQ29udHJvbGxlcjxUPiB7XG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwSGVhZGVyKGhlYWRlcjpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcuaGVhZGVyID0gaGVhZGVyO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cFRleHQodGV4dDpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudGV4dCA9IHRleHQ7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwSW52ZXJ0ZWQoaW52ZXJ0ZWQ6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5pc0ludmVydGVkID0gVXRpbC5ET00ucGFyc2VCb29sZWFuQXR0cmlidXRlKGludmVydGVkKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBCYXNpYyhiYXNpYzpib29sZWFuKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLmlzQmFzaWMgPSBVdGlsLkRPTS5wYXJzZUJvb2xlYW5BdHRyaWJ1dGUoYmFzaWMpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cElubGluZShpbmxpbmU6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5pc0lubGluZSA9IFV0aWwuRE9NLnBhcnNlQm9vbGVhbkF0dHJpYnV0ZShpbmxpbmUpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cEZsb3dpbmcoZmxvd2luZzpib29sZWFuKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLmlzRmxvd2luZyA9IFV0aWwuRE9NLnBhcnNlQm9vbGVhbkF0dHJpYnV0ZShmbG93aW5nKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBUcmFuc2l0aW9uKHRyYW5zaXRpb246c3RyaW5nKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cFRyYW5zaXRpb25EdXJhdGlvbihkdXJhdGlvbjpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwUGxhY2VtZW50KHBsYWNlbWVudDpQb3NpdGlvbmluZ1BsYWNlbWVudCkge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5wbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwV2lkdGgod2lkdGg6UG9wdXBXaWR0aCkge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy53aWR0aCA9IHdpZHRoO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cFNpemUoc2l6ZTpQb3B1cFNpemUpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcuc2l6ZSA9IHNpemU7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwRGVsYXkoZGVsYXk6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLmRlbGF5ID0gZGVsYXk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHBvcHVwVHJpZ2dlcigpOlBvcHVwVHJpZ2dlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcG9wdXBUcmlnZ2VyKHRyaWdnZXI6UG9wdXBUcmlnZ2VyKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPSB0cmlnZ2VyO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cFRlbXBsYXRlKHRlbXBsYXRlOlRlbXBsYXRlUmVmPElUZW1wbGF0ZVBvcHVwQ29udGV4dDxUPj4gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cFRlbXBsYXRlQ29udGV4dChjb250ZXh0OlQgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBDb25maWcoY29uZmlnOklUZW1wbGF0ZVBvcHVwQ29uZmlnPFQ+IHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJlKGNvbmZpZyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6RWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBjb21wb25lbnRGYWN0b3J5OlN1aUNvbXBvbmVudEZhY3RvcnksXG4gICAgICAgICAgICAgICAgcG9wdXBEZWZhdWx0czpTdWlQb3B1cENvbmZpZykge1xuXG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBlbGVtZW50LCBjb21wb25lbnRGYWN0b3J5LCBuZXcgUG9wdXBDb25maWcocG9wdXBEZWZhdWx0cykpO1xuICAgIH1cbn1cbiJdfQ==