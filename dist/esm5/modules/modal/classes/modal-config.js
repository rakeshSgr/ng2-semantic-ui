/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
export var /** @type {?} */ ModalSize = {
    Mini: "mini",
    Tiny: "tiny",
    Small: "small",
    Normal: "normal",
    Large: "large"
};
/**
 * @template T, U, V
 */
var /**
 * @template T, U, V
 */
ModalConfig = /** @class */ (function () {
    function ModalConfig(context, isClosable) {
        if (context === void 0) { context = undefined; }
        if (isClosable === void 0) { isClosable = true; }
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
    return ModalConfig;
}());
/**
 * @template T, U, V
 */
export { ModalConfig };
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
var /**
 * @template T, U, V
 */
TemplateModalConfig = /** @class */ (function (_super) {
    tslib_1.__extends(TemplateModalConfig, _super);
    function TemplateModalConfig(template, context, isClosable) {
        if (context === void 0) { context = undefined; }
        if (isClosable === void 0) { isClosable = true; }
        var _this = _super.call(this, context, isClosable) || this;
        _this.template = template;
        return _this;
    }
    return TemplateModalConfig;
}(ModalConfig));
/**
 * @template T, U, V
 */
export { TemplateModalConfig };
function TemplateModalConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    TemplateModalConfig.prototype.template;
}
/**
 * @template T, U, V
 */
var /**
 * @template T, U, V
 */
ComponentModalConfig = /** @class */ (function (_super) {
    tslib_1.__extends(ComponentModalConfig, _super);
    function ComponentModalConfig(component, context, isClosable) {
        if (context === void 0) { context = undefined; }
        if (isClosable === void 0) { isClosable = true; }
        var _this = _super.call(this, context, isClosable) || this;
        _this.component = component;
        return _this;
    }
    return ComponentModalConfig;
}(ModalConfig));
/**
 * @template T, U, V
 */
export { ComponentModalConfig };
function ComponentModalConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    ComponentModalConfig.prototype.component;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9tb2RhbC9jbGFzc2VzL21vZGFsLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBLE1BQU0sQ0FBQyxxQkFBTSxTQUFTLEdBQUc7SUFDckIsSUFBSSxFQUFFLE1BQW1CO0lBQ3pCLElBQUksRUFBRSxNQUFtQjtJQUN6QixLQUFLLEVBQUUsT0FBb0I7SUFDM0IsTUFBTSxFQUFFLFFBQXFCO0lBQzdCLEtBQUssRUFBRSxPQUFvQjtDQUM5QixDQUFDOzs7O0FBR0Y7OztBQUFBO0lBNEJJLHFCQUFZLE9BQWlDLEVBQUUsVUFBeUI7UUFBNUQsd0JBQUEsRUFBQSxtQkFBaUM7UUFBRSwyQkFBQSxFQUFBLGlCQUF5Qjs7UUFFcEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFdkIsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBRXZCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBRXhCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1FBQzFCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLENBQUM7S0FDakM7c0JBekRMO0lBMERDLENBQUE7Ozs7QUE1Q0QsdUJBNENDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0Q7OztBQUFBO0lBQTBFLCtDQUFvQjtJQUcxRiw2QkFBWSxRQUErQixFQUFFLE9BQWlDLEVBQUUsVUFBeUI7UUFBNUQsd0JBQUEsRUFBQSxtQkFBaUM7UUFBRSwyQkFBQSxFQUFBLGlCQUF5QjtRQUF6RyxZQUNJLGtCQUFNLE9BQU8sRUFBRSxVQUFVLENBQUMsU0FHN0I7UUFERyxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQzs7S0FDNUI7OEJBcEVMO0VBNkQwRSxXQUFXLEVBUXBGLENBQUE7Ozs7QUFSRCwrQkFRQzs7Ozs7Ozs7QUFHRDs7O0FBQUE7SUFBMkUsZ0RBQW9CO0lBRzNGLDhCQUFZLFNBQW1CLEVBQUUsT0FBaUMsRUFBRSxVQUF5QjtRQUE1RCx3QkFBQSxFQUFBLG1CQUFpQztRQUFFLDJCQUFBLEVBQUEsaUJBQXlCO1FBQTdGLFlBQ0ksa0JBQU0sT0FBTyxFQUFFLFVBQVUsQ0FBQyxTQUc3QjtRQURHLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDOztLQUM5QjsrQkEvRUw7RUF3RTJFLFdBQVcsRUFRckYsQ0FBQTs7OztBQVJELGdDQVFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbFRlbXBsYXRlIH0gZnJvbSBcIi4vbW9kYWwtdGVtcGxhdGVcIjtcblxuZXhwb3J0IHR5cGUgTW9kYWxTaXplID0gXCJtaW5pXCIgfCBcInRpbnlcIiB8IFwic21hbGxcIiB8IFwibm9ybWFsXCIgfCBcImxhcmdlXCI7XG5cbmV4cG9ydCBjb25zdCBNb2RhbFNpemUgPSB7XG4gICAgTWluaTogXCJtaW5pXCIgYXMgTW9kYWxTaXplLFxuICAgIFRpbnk6IFwidGlueVwiIGFzIE1vZGFsU2l6ZSxcbiAgICBTbWFsbDogXCJzbWFsbFwiIGFzIE1vZGFsU2l6ZSxcbiAgICBOb3JtYWw6IFwibm9ybWFsXCIgYXMgTW9kYWxTaXplLFxuICAgIExhcmdlOiBcImxhcmdlXCIgYXMgTW9kYWxTaXplXG59O1xuXG4vLyBTdG9yZXMgYSBiYXNpYyBzZXQgb2YgY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBhIG1vZGFsLlxuZXhwb3J0IGNsYXNzIE1vZGFsQ29uZmlnPFQsIFUgPSB1bmRlZmluZWQsIFYgPSB1bmRlZmluZWQ+IHtcbiAgICAvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG1vZGFsIGNhbiBiZSBjbG9zZWQgd2l0aCBhIGNsb3NlIGJ1dHRvbiwgY2xpY2tpbmcgb3V0c2lkZSwgb3IgdGhlIGVzY2FwZSBrZXkuXG4gICAgcHVibGljIGlzQ2xvc2FibGU6Ym9vbGVhbjtcbiAgICAvLyBWYWx1ZSB0byBkZW55IHdpdGggd2hlbiBjbG9zaW5nIHZpYSBgaXNDbG9zYWJsZWAuXG4gICAgcHVibGljIGNsb3NlUmVzdWx0OlY7XG5cbiAgICAvLyBEYXRhIHRvIHBhc3MgdG8gdGhlIG1vZGFsIGluc3RhbmNlIHdoZW4gb3BlbmVkLlxuICAgIHB1YmxpYyBjb250ZXh0PzpUO1xuXG4gICAgLy8gU2l6ZSB1c2VkIHRvIGRpc3BsYXkgdGhlIG1vZGFsLlxuICAgIHB1YmxpYyBzaXplOk1vZGFsU2l6ZTtcbiAgICAvLyBXaGV0aGVyIHRoZSBtb2RhbCB0YWtlcyB1cCB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLlxuICAgIHB1YmxpYyBpc0Z1bGxTY3JlZW46Ym9vbGVhbjtcbiAgICAvLyBXaGV0aGVyIG9yIG5vdCB0aGUgbW9kYWwgaGFzIGJhc2ljIHN0eWxlcyBhcHBsaWVkLlxuICAgIHB1YmxpYyBpc0Jhc2ljOmJvb2xlYW47XG4gICAgLy8gV2hldGhlciB0aGUgbW9kYWwgc2hvd3MgYWdhaW5zdCBhIGxpZ2h0IGJhY2tncm91bmQuXG4gICAgcHVibGljIGlzSW52ZXJ0ZWQ6Ym9vbGVhbjtcbiAgICAvLyBXaGV0aGVyIG9yIG5vdCB0aGUgbW9kYWwgc2hvdWxkIGJlIHBsYWNlZCBpbiB0aGUgY2VudGVyIG9mIHRoZSBwYWdlLlxuICAgIHB1YmxpYyBpc0NlbnRlcmVkOmJvb2xlYW47XG5cbiAgICAvLyBXaGV0aGVyIG9yIG5vdCB0aGUgbW9kYWwgc2hvdWxkIGFsd2F5cyBkaXNwbGF5IGEgc2Nyb2xsYmFyLlxuICAgIHB1YmxpYyBtdXN0U2Nyb2xsOmJvb2xlYW47XG5cbiAgICAvLyBUcmFuc2l0aW9uIHRvIGRpc3BsYXkgbW9kYWwgd2l0aC5cbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpzdHJpbmc7XG4gICAgLy8gRHVyYXRpb24gb2YgdGhlIG1vZGFsICYgZGltbWVyIHRyYW5zaXRpb25zLlxuICAgIHB1YmxpYyB0cmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDpUIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkLCBpc0Nsb3NhYmxlOmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIC8vIEluaXRpYWxpc2Ugd2l0aCBkZWZhdWx0IHZhbHVlcy5cbiAgICAgICAgdGhpcy5pc0Nsb3NhYmxlID0gaXNDbG9zYWJsZTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgICAgICB0aGlzLnNpemUgPSBNb2RhbFNpemUuTm9ybWFsO1xuICAgICAgICB0aGlzLmlzRnVsbFNjcmVlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzQmFzaWMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0ludmVydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNDZW50ZXJlZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5tdXN0U2Nyb2xsID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gXCJzY2FsZVwiO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IDUwMDtcbiAgICB9XG59XG5cbi8vIFVzZWQgd2hlbiBjcmVhdGluZyBhIG1vZGFsIGZyb20gYSBgVGVtcGxhdGVSZWZgLlxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlTW9kYWxDb25maWc8VCwgVSA9IHVuZGVmaW5lZCwgViA9IHVuZGVmaW5lZD4gZXh0ZW5kcyBNb2RhbENvbmZpZzxULCBVLCBWPiB7XG4gICAgcHVibGljIHRlbXBsYXRlOk1vZGFsVGVtcGxhdGU8VCwgVSwgVj47XG5cbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZTpNb2RhbFRlbXBsYXRlPFQsIFUsIFY+LCBjb250ZXh0OlQgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQsIGlzQ2xvc2FibGU6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCwgaXNDbG9zYWJsZSk7XG5cbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIH1cbn1cblxuLy8gVXNlZCB3aGVuIGNyZWF0aW5nIGEgbW9kYWwgZnJvbSBhbiBleGlzdGluZyBjb21wb25lbnQuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TW9kYWxDb25maWc8VCwgVSA9IHVuZGVmaW5lZCwgViA9IHVuZGVmaW5lZD4gZXh0ZW5kcyBNb2RhbENvbmZpZzxULCBVLCBWPiB7XG4gICAgcHVibGljIGNvbXBvbmVudDpUeXBlPGFueT47XG5cbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnQ6VHlwZTxhbnk+LCBjb250ZXh0OlQgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQsIGlzQ2xvc2FibGU6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCwgaXNDbG9zYWJsZSk7XG5cbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgfVxufVxuIl19