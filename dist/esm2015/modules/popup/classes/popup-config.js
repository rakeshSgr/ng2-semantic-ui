/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { PositioningPlacement } from "../../../misc/util/internal";
export const /** @type {?} */ PopupTrigger = {
    Hover: "hover",
    Click: "click",
    OutsideClick: "outsideClick",
    Focus: "focus",
    Manual: "manual"
};
/**
 * @record
 */
export function IPopupConfig() { }
function IPopupConfig_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    IPopupConfig.prototype.header;
    /** @type {?|undefined} */
    IPopupConfig.prototype.text;
    /** @type {?|undefined} */
    IPopupConfig.prototype.placement;
    /** @type {?|undefined} */
    IPopupConfig.prototype.trigger;
    /** @type {?|undefined} */
    IPopupConfig.prototype.isInverted;
    /** @type {?|undefined} */
    IPopupConfig.prototype.delay;
    /** @type {?|undefined} */
    IPopupConfig.prototype.isBasic;
    /** @type {?|undefined} */
    IPopupConfig.prototype.transition;
    /** @type {?|undefined} */
    IPopupConfig.prototype.transitionDuration;
    /** @type {?|undefined} */
    IPopupConfig.prototype.isFlowing;
    /** @type {?|undefined} */
    IPopupConfig.prototype.isInline;
}
export class PopupConfig {
    /**
     * @param {?=} defaults
     */
    constructor(defaults = {}) {
        this.placement = PositioningPlacement.TopLeft;
        this.trigger = PopupTrigger.Hover;
        this.isInverted = false;
        this.delay = 0;
        this.isBasic = false;
        this.transition = "scale";
        this.transitionDuration = 200;
        this.isFlowing = false;
        this.isInline = false;
        Object.assign(this, defaults);
    }
}
function PopupConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    PopupConfig.prototype.header;
    /** @type {?} */
    PopupConfig.prototype.text;
    /** @type {?} */
    PopupConfig.prototype.placement;
    /** @type {?} */
    PopupConfig.prototype.trigger;
    /** @type {?} */
    PopupConfig.prototype.isInverted;
    /** @type {?} */
    PopupConfig.prototype.delay;
    /** @type {?} */
    PopupConfig.prototype.isBasic;
    /** @type {?} */
    PopupConfig.prototype.transition;
    /** @type {?} */
    PopupConfig.prototype.size;
    /** @type {?} */
    PopupConfig.prototype.width;
    /** @type {?} */
    PopupConfig.prototype.transitionDuration;
    /** @type {?} */
    PopupConfig.prototype.isFlowing;
    /** @type {?} */
    PopupConfig.prototype.isInline;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9wb3B1cC9jbGFzc2VzL3BvcHVwLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF1QixvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBT3hGLE1BQU0sQ0FBQyx1QkFBTSxZQUFZLEdBQUc7SUFDeEIsS0FBSyxFQUFFLE9BQXVCO0lBQzlCLEtBQUssRUFBRSxPQUF1QjtJQUM5QixZQUFZLEVBQUUsY0FBOEI7SUFDNUMsS0FBSyxFQUFFLE9BQXVCO0lBQzlCLE1BQU0sRUFBRSxRQUF3QjtDQUNuQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCRixNQUFNLE9BQU8sV0FBVzs7OztJQWVwQixZQUFZLFdBQXdCLEVBQUU7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQyxPQUFPLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztLQUNqQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSVRlbXBsYXRlUmVmQ29udGV4dCwgUG9zaXRpb25pbmdQbGFjZW1lbnQgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBJUG9wdXAgfSBmcm9tIFwiLi9wb3B1cC1jb250cm9sbGVyXCI7XG5cbmV4cG9ydCB0eXBlIFBvcHVwVHJpZ2dlciA9IFwiaG92ZXJcIiB8IFwiY2xpY2tcIiB8IFwib3V0c2lkZUNsaWNrXCIgfCBcImZvY3VzXCIgfCBcIm1hbnVhbFwiO1xuZXhwb3J0IHR5cGUgUG9wdXBTaXplID0gXCJtaW5pXCIgfCBcInRpbnlcIiB8IFwic21hbGxcIiB8IFwibGFyZ2VcIiB8IFwiaHVnZVwiO1xuZXhwb3J0IHR5cGUgUG9wdXBXaWR0aCA9IFwid2lkZVwiIHwgXCJ2ZXJ5IHdpZGVcIiAgfCBcImZsb3dpbmdcIjtcblxuZXhwb3J0IGNvbnN0IFBvcHVwVHJpZ2dlciA9IHtcbiAgICBIb3ZlcjogXCJob3ZlclwiIGFzIFBvcHVwVHJpZ2dlcixcbiAgICBDbGljazogXCJjbGlja1wiIGFzIFBvcHVwVHJpZ2dlcixcbiAgICBPdXRzaWRlQ2xpY2s6IFwib3V0c2lkZUNsaWNrXCIgYXMgUG9wdXBUcmlnZ2VyLFxuICAgIEZvY3VzOiBcImZvY3VzXCIgYXMgUG9wdXBUcmlnZ2VyLFxuICAgIE1hbnVhbDogXCJtYW51YWxcIiBhcyBQb3B1cFRyaWdnZXJcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBvcHVwQ29uZmlnIHtcbiAgICBoZWFkZXI/OnN0cmluZztcbiAgICB0ZXh0PzpzdHJpbmc7XG4gICAgcGxhY2VtZW50PzpQb3NpdGlvbmluZ1BsYWNlbWVudDtcbiAgICB0cmlnZ2VyPzpQb3B1cFRyaWdnZXI7XG4gICAgaXNJbnZlcnRlZD86Ym9vbGVhbjtcbiAgICBkZWxheT86bnVtYmVyO1xuICAgIGlzQmFzaWM/OmJvb2xlYW47XG4gICAgdHJhbnNpdGlvbj86c3RyaW5nO1xuICAgIHRyYW5zaXRpb25EdXJhdGlvbj86bnVtYmVyO1xuICAgIGlzRmxvd2luZz86Ym9vbGVhbjtcbiAgICBpc0lubGluZT86Ym9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIFBvcHVwQ29uZmlnIGltcGxlbWVudHMgSVBvcHVwQ29uZmlnIHtcbiAgICBwdWJsaWMgaGVhZGVyPzpzdHJpbmc7XG4gICAgcHVibGljIHRleHQ/OnN0cmluZztcbiAgICBwdWJsaWMgcGxhY2VtZW50OlBvc2l0aW9uaW5nUGxhY2VtZW50O1xuICAgIHB1YmxpYyB0cmlnZ2VyOlBvcHVwVHJpZ2dlcjtcbiAgICBwdWJsaWMgaXNJbnZlcnRlZDpib29sZWFuO1xuICAgIHB1YmxpYyBkZWxheTpudW1iZXI7XG4gICAgcHVibGljIGlzQmFzaWM6Ym9vbGVhbjtcbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpzdHJpbmc7XG4gICAgcHVibGljIHNpemU6UG9wdXBTaXplO1xuICAgIHB1YmxpYyB3aWR0aDpQb3B1cFdpZHRoO1xuICAgIHB1YmxpYyB0cmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuICAgIHB1YmxpYyBpc0Zsb3dpbmc6Ym9vbGVhbjtcbiAgICBwdWJsaWMgaXNJbmxpbmU6Ym9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRlZmF1bHRzOklQb3B1cENvbmZpZyA9IHt9KSB7XG4gICAgICAgIHRoaXMucGxhY2VtZW50ID0gUG9zaXRpb25pbmdQbGFjZW1lbnQuVG9wTGVmdDtcbiAgICAgICAgdGhpcy50cmlnZ2VyID0gUG9wdXBUcmlnZ2VyLkhvdmVyO1xuICAgICAgICB0aGlzLmlzSW52ZXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kZWxheSA9IDA7XG4gICAgICAgIHRoaXMuaXNCYXNpYyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSBcInNjYWxlXCI7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uID0gMjAwO1xuICAgICAgICB0aGlzLmlzRmxvd2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzSW5saW5lID0gZmFsc2U7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGVmYXVsdHMpO1xuICAgIH1cbn1cbiJdfQ==