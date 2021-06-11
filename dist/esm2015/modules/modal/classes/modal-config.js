/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export const /** @type {?} */ ModalSize = {
    Mini: "mini",
    Tiny: "tiny",
    Small: "small",
    Normal: "normal",
    Large: "large"
};
/**
 * @template T, U, V
 */
export class ModalConfig {
    /**
     * @param {?=} context
     * @param {?=} isClosable
     */
    constructor(context = undefined, isClosable = true) {
        // Initialise with default values.
        this.isClosable = isClosable;
        this.context = context;
        this.size = ModalSize.Normal;
        this.isFullScreen = false;
        this.isBasic = false;
        this.isInverted = false;
        this.isCentered = true;
        this.mustScroll = false;
        this.transition = "scale";
        this.transitionDuration = 500;
    }
}
function ModalConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    ModalConfig.prototype.isClosable;
    /** @type {?} */
    ModalConfig.prototype.closeResult;
    /** @type {?} */
    ModalConfig.prototype.context;
    /** @type {?} */
    ModalConfig.prototype.size;
    /** @type {?} */
    ModalConfig.prototype.isFullScreen;
    /** @type {?} */
    ModalConfig.prototype.isBasic;
    /** @type {?} */
    ModalConfig.prototype.isInverted;
    /** @type {?} */
    ModalConfig.prototype.isCentered;
    /** @type {?} */
    ModalConfig.prototype.mustScroll;
    /** @type {?} */
    ModalConfig.prototype.transition;
    /** @type {?} */
    ModalConfig.prototype.transitionDuration;
}
/**
 * @template T, U, V
 */
export class TemplateModalConfig extends ModalConfig {
    /**
     * @param {?} template
     * @param {?=} context
     * @param {?=} isClosable
     */
    constructor(template, context = undefined, isClosable = true) {
        super(context, isClosable);
        this.template = template;
    }
}
function TemplateModalConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    TemplateModalConfig.prototype.template;
}
/**
 * @template T, U, V
 */
export class ComponentModalConfig extends ModalConfig {
    /**
     * @param {?} component
     * @param {?=} context
     * @param {?=} isClosable
     */
    constructor(component, context = undefined, isClosable = true) {
        super(context, isClosable);
        this.component = component;
    }
}
function ComponentModalConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    ComponentModalConfig.prototype.component;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9tb2RhbC9jbGFzc2VzL21vZGFsLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0EsTUFBTSxDQUFDLHVCQUFNLFNBQVMsR0FBRztJQUNyQixJQUFJLEVBQUUsTUFBbUI7SUFDekIsSUFBSSxFQUFFLE1BQW1CO0lBQ3pCLEtBQUssRUFBRSxPQUFvQjtJQUMzQixNQUFNLEVBQUUsUUFBcUI7SUFDN0IsS0FBSyxFQUFFLE9BQW9CO0NBQzlCLENBQUM7Ozs7QUFHRixNQUFNLE9BQU8sV0FBVzs7Ozs7SUE0QnBCLFlBQVksVUFBd0IsU0FBUyxFQUFFLGFBQXFCLElBQUk7O1FBRXBFLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXZCLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUV2QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUV4QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUMxQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxDQUFDO0tBQ2pDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRCxNQUFNLE9BQU8sbUJBQXFELFNBQVEsV0FBb0I7Ozs7OztJQUcxRixZQUFZLFFBQStCLEVBQUUsVUFBd0IsU0FBUyxFQUFFLGFBQXFCLElBQUk7UUFDckcsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztRQUUzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztLQUM1QjtDQUNKOzs7Ozs7OztBQUdELE1BQU0sT0FBTyxvQkFBc0QsU0FBUSxXQUFvQjs7Ozs7O0lBRzNGLFlBQVksU0FBbUIsRUFBRSxVQUF3QixTQUFTLEVBQUUsYUFBcUIsSUFBSTtRQUN6RixLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRTNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0tBQzlCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsVGVtcGxhdGUgfSBmcm9tIFwiLi9tb2RhbC10ZW1wbGF0ZVwiO1xuXG5leHBvcnQgdHlwZSBNb2RhbFNpemUgPSBcIm1pbmlcIiB8IFwidGlueVwiIHwgXCJzbWFsbFwiIHwgXCJub3JtYWxcIiB8IFwibGFyZ2VcIjtcblxuZXhwb3J0IGNvbnN0IE1vZGFsU2l6ZSA9IHtcbiAgICBNaW5pOiBcIm1pbmlcIiBhcyBNb2RhbFNpemUsXG4gICAgVGlueTogXCJ0aW55XCIgYXMgTW9kYWxTaXplLFxuICAgIFNtYWxsOiBcInNtYWxsXCIgYXMgTW9kYWxTaXplLFxuICAgIE5vcm1hbDogXCJub3JtYWxcIiBhcyBNb2RhbFNpemUsXG4gICAgTGFyZ2U6IFwibGFyZ2VcIiBhcyBNb2RhbFNpemVcbn07XG5cbi8vIFN0b3JlcyBhIGJhc2ljIHNldCBvZiBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIGEgbW9kYWwuXG5leHBvcnQgY2xhc3MgTW9kYWxDb25maWc8VCwgVSA9IHVuZGVmaW5lZCwgViA9IHVuZGVmaW5lZD4ge1xuICAgIC8vIERldGVybWluZXMgd2hldGhlciB0aGUgbW9kYWwgY2FuIGJlIGNsb3NlZCB3aXRoIGEgY2xvc2UgYnV0dG9uLCBjbGlja2luZyBvdXRzaWRlLCBvciB0aGUgZXNjYXBlIGtleS5cbiAgICBwdWJsaWMgaXNDbG9zYWJsZTpib29sZWFuO1xuICAgIC8vIFZhbHVlIHRvIGRlbnkgd2l0aCB3aGVuIGNsb3NpbmcgdmlhIGBpc0Nsb3NhYmxlYC5cbiAgICBwdWJsaWMgY2xvc2VSZXN1bHQ6VjtcblxuICAgIC8vIERhdGEgdG8gcGFzcyB0byB0aGUgbW9kYWwgaW5zdGFuY2Ugd2hlbiBvcGVuZWQuXG4gICAgcHVibGljIGNvbnRleHQ/OlQ7XG5cbiAgICAvLyBTaXplIHVzZWQgdG8gZGlzcGxheSB0aGUgbW9kYWwuXG4gICAgcHVibGljIHNpemU6TW9kYWxTaXplO1xuICAgIC8vIFdoZXRoZXIgdGhlIG1vZGFsIHRha2VzIHVwIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBzY3JlZW4uXG4gICAgcHVibGljIGlzRnVsbFNjcmVlbjpib29sZWFuO1xuICAgIC8vIFdoZXRoZXIgb3Igbm90IHRoZSBtb2RhbCBoYXMgYmFzaWMgc3R5bGVzIGFwcGxpZWQuXG4gICAgcHVibGljIGlzQmFzaWM6Ym9vbGVhbjtcbiAgICAvLyBXaGV0aGVyIHRoZSBtb2RhbCBzaG93cyBhZ2FpbnN0IGEgbGlnaHQgYmFja2dyb3VuZC5cbiAgICBwdWJsaWMgaXNJbnZlcnRlZDpib29sZWFuO1xuICAgIC8vIFdoZXRoZXIgb3Igbm90IHRoZSBtb2RhbCBzaG91bGQgYmUgcGxhY2VkIGluIHRoZSBjZW50ZXIgb2YgdGhlIHBhZ2UuXG4gICAgcHVibGljIGlzQ2VudGVyZWQ6Ym9vbGVhbjtcblxuICAgIC8vIFdoZXRoZXIgb3Igbm90IHRoZSBtb2RhbCBzaG91bGQgYWx3YXlzIGRpc3BsYXkgYSBzY3JvbGxiYXIuXG4gICAgcHVibGljIG11c3RTY3JvbGw6Ym9vbGVhbjtcblxuICAgIC8vIFRyYW5zaXRpb24gdG8gZGlzcGxheSBtb2RhbCB3aXRoLlxuICAgIHB1YmxpYyB0cmFuc2l0aW9uOnN0cmluZztcbiAgICAvLyBEdXJhdGlvbiBvZiB0aGUgbW9kYWwgJiBkaW1tZXIgdHJhbnNpdGlvbnMuXG4gICAgcHVibGljIHRyYW5zaXRpb25EdXJhdGlvbjpudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OlQgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQsIGlzQ2xvc2FibGU6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgLy8gSW5pdGlhbGlzZSB3aXRoIGRlZmF1bHQgdmFsdWVzLlxuICAgICAgICB0aGlzLmlzQ2xvc2FibGUgPSBpc0Nsb3NhYmxlO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgICAgIHRoaXMuc2l6ZSA9IE1vZGFsU2l6ZS5Ob3JtYWw7XG4gICAgICAgIHRoaXMuaXNGdWxsU2NyZWVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNCYXNpYyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzSW52ZXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0NlbnRlcmVkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLm11c3RTY3JvbGwgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSBcInNjYWxlXCI7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uID0gNTAwO1xuICAgIH1cbn1cblxuLy8gVXNlZCB3aGVuIGNyZWF0aW5nIGEgbW9kYWwgZnJvbSBhIGBUZW1wbGF0ZVJlZmAuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVNb2RhbENvbmZpZzxULCBVID0gdW5kZWZpbmVkLCBWID0gdW5kZWZpbmVkPiBleHRlbmRzIE1vZGFsQ29uZmlnPFQsIFUsIFY+IHtcbiAgICBwdWJsaWMgdGVtcGxhdGU6TW9kYWxUZW1wbGF0ZTxULCBVLCBWPjtcblxuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlOk1vZGFsVGVtcGxhdGU8VCwgVSwgVj4sIGNvbnRleHQ6VCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZCwgaXNDbG9zYWJsZTpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihjb250ZXh0LCBpc0Nsb3NhYmxlKTtcblxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgfVxufVxuXG4vLyBVc2VkIHdoZW4gY3JlYXRpbmcgYSBtb2RhbCBmcm9tIGFuIGV4aXN0aW5nIGNvbXBvbmVudC5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnRNb2RhbENvbmZpZzxULCBVID0gdW5kZWZpbmVkLCBWID0gdW5kZWZpbmVkPiBleHRlbmRzIE1vZGFsQ29uZmlnPFQsIFUsIFY+IHtcbiAgICBwdWJsaWMgY29tcG9uZW50OlR5cGU8YW55PjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudDpUeXBlPGFueT4sIGNvbnRleHQ6VCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZCwgaXNDbG9zYWJsZTpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihjb250ZXh0LCBpc0Nsb3NhYmxlKTtcblxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICB9XG59XG4iXX0=