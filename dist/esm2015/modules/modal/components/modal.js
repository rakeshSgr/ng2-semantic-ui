import { __decorate, __metadata } from "tslib";
import { Component, Input, OnInit, ViewChild, ElementRef, Renderer2, EventEmitter, Output, HostListener, ViewContainerRef, AfterViewInit } from "@angular/core";
import { Util, IDynamicClasses, KeyCode, SuiComponentFactory } from "../../../misc/util/internal";
import { TransitionController, Transition, TransitionDirection } from "../../transition/internal";
import { ModalControls } from "../classes/modal-controls";
import { ModalConfig, ModalSize } from "../classes/modal-config";
let SuiModal = class SuiModal {
    constructor(_renderer, _element, _componentFactory) {
        this._renderer = _renderer;
        this._element = _element;
        this._componentFactory = _componentFactory;
        // Initialise with default configuration from `ModalConfig` (to avoid writing defaults twice).
        const config = new ModalConfig();
        this.loadConfig(config);
        // Event emitters for each of the possible modal outcomes.
        this.onApprove = new EventEmitter();
        this.onDeny = new EventEmitter();
        this.onDismiss = new EventEmitter();
        // Initialise controls with actions for the `approve` and `deny` cases.
        this.controls = new ModalControls(res => this.dismiss(() => this.onApprove.emit(res)), res => this.dismiss(() => this.onDeny.emit(res)));
        // Internal variable initialisation.
        this.dimBackground = false;
        this._isClosing = false;
        this.transitionController = new TransitionController(false);
    }
    get approve() {
        return this.controls.approve;
    }
    get deny() {
        return this.controls.deny;
    }
    // Value to deny with when closing via `isClosable`.
    get isFullScreen() {
        return this._isFullScreen;
    }
    set isFullScreen(fullScreen) {
        this._isFullScreen = Util.DOM.parseBooleanAttribute(fullScreen);
    }
    get mustScroll() {
        return this._mustScroll;
    }
    set mustScroll(mustScroll) {
        this._mustScroll = mustScroll;
        // 'Cache' value in _mustAlwaysScroll so that if `true`, _mustScroll isn't ever auto-updated.
        this._mustAlwaysScroll = mustScroll;
        this.updateScroll();
    }
    get isInverted() {
        return this._isInverted;
    }
    set isInverted(inverted) {
        this._isInverted = Util.DOM.parseBooleanAttribute(inverted);
    }
    get dynamicClasses() {
        const classes = {};
        if (this.size) {
            classes[this.size] = true;
        }
        return classes;
    }
    ngOnInit() {
        // Transition the modal to be visible.
        this.transitionController.animate(new Transition(this.transition, this.transitionDuration, TransitionDirection.In));
        setTimeout(() => this.dimBackground = true);
    }
    ngAfterViewInit() {
        // Move the modal to the document body to ensure correct scrolling.
        this._originalContainer = this._element.nativeElement.parentNode;
        document.querySelector("body").appendChild(this._element.nativeElement);
        // Remove the #templateSibling element from the DOM to fix bottom border styles.
        const templateElement = this.templateSibling.element.nativeElement;
        if (templateElement.parentNode) {
            templateElement.parentNode.removeChild(templateElement);
        }
        const element = this._modalElement.nativeElement;
        setTimeout(() => this.updateScroll());
        // Focus any element with [autofocus] attribute.
        const autoFocus = element.querySelector("[autofocus]");
        if (autoFocus) {
            // Autofocus after the browser has had time to process other event handlers.
            setTimeout(() => autoFocus.focus(), 10);
            // Try to focus again when the modal has opened so that autofocus works in IE11.
            setTimeout(() => autoFocus.focus(), this.transitionDuration);
        }
    }
    // Updates the modal with the specified configuration.
    loadConfig(config) {
        this.isClosable = config.isClosable;
        this.closeResult = config.closeResult;
        this.size = config.size;
        this.isFullScreen = config.isFullScreen;
        this.isBasic = config.isBasic;
        this.isInverted = config.isInverted;
        this.isCentered = config.isCentered;
        this.mustScroll = config.mustScroll;
        this.transition = config.transition;
        this.transitionDuration = config.transitionDuration;
    }
    // Dismisses the modal with a transition, firing the callback after the modal has finished transitioning.
    dismiss(callback = () => { }) {
        // If we aren't currently closing,
        if (!this._isClosing) {
            this._isClosing = true;
            // Transition the modal to be invisible.
            this.dimBackground = false;
            this.transitionController.stopAll();
            this.transitionController.animate(new Transition(this.transition, this.transitionDuration, TransitionDirection.Out, () => {
                // When done, move the modal back to its original location, emit a dismiss event, and fire the callback.
                if (this._originalContainer) {
                    this._originalContainer.appendChild(this._element.nativeElement);
                }
                this.onDismiss.emit();
                callback();
            }));
        }
    }
    // Closes the modal with a 'deny' outcome, using the specified default reason.
    close() {
        if (this.isClosable) {
            // If we are allowed to close, fire the deny result with the default value.
            this.deny(this.closeResult);
        }
    }
    // Decides whether the modal needs to reposition to allow scrolling.
    updateScroll() {
        // _mustAlwaysScroll works by stopping _mustScroll from being automatically updated, so it stays `true`.
        if (!this._mustAlwaysScroll && this._modalElement) {
            // Semantic UI modal margin and dimmer padding are 1rem, which is relative to the global font size, so for compatibility:
            const fontSize = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("font-size"));
            const margin = fontSize * 2;
            const element = this._modalElement.nativeElement;
            // The modal must scroll if the window height is smaller than the modal height + both margins.
            this._mustScroll = window.innerHeight < element.clientHeight + margin * 2;
        }
    }
    onClick(e) {
        // Makes sense here, as the modal shouldn't be attached to any DOM element.
        e.stopPropagation();
    }
    // Document listener is fine here because nobody will have enough modals open.
    onDocumentKeyUp(e) {
        if (e.keyCode === KeyCode.Escape) {
            // Close automatically covers case of `!isClosable`, so check not needed.
            this.close();
        }
    }
    onDocumentResize() {
        this.updateScroll();
    }
};
SuiModal.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: SuiComponentFactory }
];
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SuiModal.prototype, "isClosable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SuiModal.prototype, "closeResult", void 0);
__decorate([
    Output("approved"),
    __metadata("design:type", EventEmitter)
], SuiModal.prototype, "onApprove", void 0);
__decorate([
    Output("denied"),
    __metadata("design:type", EventEmitter)
], SuiModal.prototype, "onDeny", void 0);
__decorate([
    Output("dismissed"),
    __metadata("design:type", EventEmitter)
], SuiModal.prototype, "onDismiss", void 0);
__decorate([
    ViewChild("modal", { static: true }),
    __metadata("design:type", ElementRef)
], SuiModal.prototype, "_modalElement", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SuiModal.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SuiModal.prototype, "isCentered", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SuiModal.prototype, "isFullScreen", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SuiModal.prototype, "isBasic", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SuiModal.prototype, "mustScroll", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SuiModal.prototype, "isInverted", null);
__decorate([
    Input(),
    __metadata("design:type", String)
], SuiModal.prototype, "transition", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SuiModal.prototype, "transitionDuration", void 0);
__decorate([
    ViewChild("templateSibling", { read: ViewContainerRef, static: true }),
    __metadata("design:type", ViewContainerRef)
], SuiModal.prototype, "templateSibling", void 0);
__decorate([
    HostListener("document:keyup", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], SuiModal.prototype, "onDocumentKeyUp", null);
__decorate([
    HostListener("window:resize"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SuiModal.prototype, "onDocumentResize", null);
SuiModal = __decorate([
    Component({
        selector: "sui-modal",
        template: `
<!-- Page dimmer for modal background. -->
<sui-modal-dimmer [ngClass]="{'top aligned': !isCentered}" 
                  [class.inverted]="isInverted"
                  [(isDimmed)]="dimBackground"
                  [transitionDuration]="transitionDuration"
                  (click)="close()">

    <!-- Modal component, with transition component attached -->
    <div class="ui modal"
         [suiTransition]="transitionController"
         [class.active]="transitionController?.isVisible"
         [class.fullscreen]="isFullScreen"
         [class.basic]="isBasic"
         [class.scrolling]="mustScroll"
         [class.inverted]="isInverted"
         [ngClass]="dynamicClasses"
         (click)="onClick($event)"
         #modal>

        <!-- Configurable close icon -->
        <i class="close icon" *ngIf="isClosable" (click)="close()"></i>
        <!-- <ng-content> so that <sui-modal> can be used as a normal component. -->
        <ng-content></ng-content>
        <!-- @ViewChild reference so we can insert elements beside this div. -->
        <div #templateSibling></div>
    </div>
</sui-modal-dimmer>
`,
        styles: [``]
    }),
    __metadata("design:paramtypes", [Renderer2, ElementRef, SuiComponentFactory])
], SuiModal);
export { SuiModal };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL21vZGFsL2NvbXBvbmVudHMvbW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFDMUQsWUFBWSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUN0RSxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNsRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsVUFBVSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEcsT0FBTyxFQUFFLGFBQWEsRUFBZSxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFtQ2pFLElBQWEsUUFBUSxHQUFyQixNQUFhLFFBQVE7SUFzSGpCLFlBQW9CLFNBQW1CLEVBQVUsUUFBbUIsRUFBVSxpQkFBcUM7UUFBL0YsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW9CO1FBQy9HLDhGQUE4RjtRQUM5RixNQUFNLE1BQU0sR0FBRyxJQUFJLFdBQVcsRUFBbUIsQ0FBQztRQUNsRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXhCLDBEQUEwRDtRQUMxRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFLLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxTQUFT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QUFFLElBQUksRUFBRSxDQUFDOzhCQUNmLFVBQVU7K0NBQUM7QUFJakM7SUFEQyxLQUFLLEVBQUU7O3NDQUNjO0FBR3RCO0lBREMsS0FBSyxFQUFFOzs0Q0FDa0I7QUFPMUI7SUFEQyxLQUFLLEVBQUU7Ozs0Q0FHUDtBQVFEO0lBREMsS0FBSyxFQUFFOzt5Q0FDZTtBQVF2QjtJQURDLEtBQUssRUFBRTs7OzBDQUdQO0FBYUQ7SUFEQyxLQUFLLEVBQUU7OzswQ0FHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs0Q0FDaUI7QUFJekI7SUFEQyxLQUFLLEVBQUU7O29EQUN5QjtBQVNqQztJQURDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7OEJBQ2hELGdCQUFnQjtpREFBQztBQW9JeEM7SUFEQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7cUNBQ2xCLGFBQWE7OytDQUtyQztBQUdEO0lBREMsWUFBWSxDQUFDLGVBQWUsQ0FBQzs7OztnREFHN0I7QUF2UFEsUUFBUTtJQWpDcEIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBNEJiO2lCQUNZLEVBQUU7S0FDZCxDQUFDO3FDQXVIZ0MsU0FBUyxFQUFtQixVQUFVLEVBQTRCLG1CQUFtQjtHQXRIMUcsUUFBUSxDQXdQcEI7U0F4UFksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMixcbiAgICBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSG9zdExpc3RlbmVyLCBWaWV3Q29udGFpbmVyUmVmLCBBZnRlclZpZXdJbml0XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVdGlsLCBJRHluYW1pY0NsYXNzZXMsIEtleUNvZGUsIFN1aUNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uQ29udHJvbGxlciwgVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbiB9IGZyb20gXCIuLi8uLi90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBNb2RhbENvbnRyb2xzLCBNb2RhbFJlc3VsdCB9IGZyb20gXCIuLi9jbGFzc2VzL21vZGFsLWNvbnRyb2xzXCI7XG5pbXBvcnQgeyBNb2RhbENvbmZpZywgTW9kYWxTaXplIH0gZnJvbSBcIi4uL2NsYXNzZXMvbW9kYWwtY29uZmlnXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1tb2RhbFwiLFxuICAgIHRlbXBsYXRlOiBgXG48IS0tIFBhZ2UgZGltbWVyIGZvciBtb2RhbCBiYWNrZ3JvdW5kLiAtLT5cbjxzdWktbW9kYWwtZGltbWVyIFtuZ0NsYXNzXT1cInsndG9wIGFsaWduZWQnOiAhaXNDZW50ZXJlZH1cIiBcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5pbnZlcnRlZF09XCJpc0ludmVydGVkXCJcbiAgICAgICAgICAgICAgICAgIFsoaXNEaW1tZWQpXT1cImRpbUJhY2tncm91bmRcIlxuICAgICAgICAgICAgICAgICAgW3RyYW5zaXRpb25EdXJhdGlvbl09XCJ0cmFuc2l0aW9uRHVyYXRpb25cIlxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImNsb3NlKClcIj5cblxuICAgIDwhLS0gTW9kYWwgY29tcG9uZW50LCB3aXRoIHRyYW5zaXRpb24gY29tcG9uZW50IGF0dGFjaGVkIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBtb2RhbFwiXG4gICAgICAgICBbc3VpVHJhbnNpdGlvbl09XCJ0cmFuc2l0aW9uQ29udHJvbGxlclwiXG4gICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInRyYW5zaXRpb25Db250cm9sbGVyPy5pc1Zpc2libGVcIlxuICAgICAgICAgW2NsYXNzLmZ1bGxzY3JlZW5dPVwiaXNGdWxsU2NyZWVuXCJcbiAgICAgICAgIFtjbGFzcy5iYXNpY109XCJpc0Jhc2ljXCJcbiAgICAgICAgIFtjbGFzcy5zY3JvbGxpbmddPVwibXVzdFNjcm9sbFwiXG4gICAgICAgICBbY2xhc3MuaW52ZXJ0ZWRdPVwiaXNJbnZlcnRlZFwiXG4gICAgICAgICBbbmdDbGFzc109XCJkeW5hbWljQ2xhc3Nlc1wiXG4gICAgICAgICAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCJcbiAgICAgICAgICNtb2RhbD5cblxuICAgICAgICA8IS0tIENvbmZpZ3VyYWJsZSBjbG9zZSBpY29uIC0tPlxuICAgICAgICA8aSBjbGFzcz1cImNsb3NlIGljb25cIiAqbmdJZj1cImlzQ2xvc2FibGVcIiAoY2xpY2spPVwiY2xvc2UoKVwiPjwvaT5cbiAgICAgICAgPCEtLSA8bmctY29udGVudD4gc28gdGhhdCA8c3VpLW1vZGFsPiBjYW4gYmUgdXNlZCBhcyBhIG5vcm1hbCBjb21wb25lbnQuIC0tPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwhLS0gQFZpZXdDaGlsZCByZWZlcmVuY2Ugc28gd2UgY2FuIGluc2VydCBlbGVtZW50cyBiZXNpZGUgdGhpcyBkaXYuIC0tPlxuICAgICAgICA8ZGl2ICN0ZW1wbGF0ZVNpYmxpbmc+PC9kaXY+XG4gICAgPC9kaXY+XG48L3N1aS1tb2RhbC1kaW1tZXI+XG5gLFxuICAgIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlNb2RhbDxULCBVPiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KClcbiAgICAvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG1vZGFsIGNhbiBiZSBjbG9zZWQgd2l0aCBhIGNsb3NlIGJ1dHRvbiwgY2xpY2tpbmcgb3V0c2lkZSwgb3IgdGhlIGVzY2FwZSBrZXkuXG4gICAgcHVibGljIGlzQ2xvc2FibGU6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgLy8gVmFsdWUgdG8gZGVueSB3aXRoIHdoZW4gY2xvc2luZyB2aWEgYGlzQ2xvc2FibGVgLlxuICAgIHB1YmxpYyBjbG9zZVJlc3VsdDpVO1xuXG4gICAgLy8gU2VwYXJhdGUgY2xhc3MgZm9yIHRoZSBgYXBwcm92ZWAgYW5kIGBkZW55YCBtZXRob2RzIHRvIHN1cHBvcnQgcGFzc2luZyBpbnRvIGNvbXBvbmVudHMuXG4gICAgcHVibGljIGNvbnRyb2xzOk1vZGFsQ29udHJvbHM8VCwgVT47XG5cbiAgICBwdWJsaWMgZ2V0IGFwcHJvdmUoKTpNb2RhbFJlc3VsdDxUPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xzLmFwcHJvdmU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkZW55KCk6TW9kYWxSZXN1bHQ8VT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9scy5kZW55O1xuICAgIH1cblxuICAgIC8vIEZpcmVzIHdoZW4gdGhlIG1vZGFsIGNsb3NlcywgYWZ0ZXIgYGFwcHJvdmVgIGhhcyBiZWVuIGNhbGxlZC5cbiAgICBAT3V0cHV0KFwiYXBwcm92ZWRcIilcbiAgICBwdWJsaWMgb25BcHByb3ZlOkV2ZW50RW1pdHRlcjxUPjtcblxuICAgIC8vIEZpcmVzIHdoZW4gdGhlIG1vZGFsIGNsb3NlcywgYWZ0ZXIgYGRlbnlgIGhhcyBiZWVuIGNhbGxlZC5cbiAgICBAT3V0cHV0KFwiZGVuaWVkXCIpXG4gICAgcHVibGljIG9uRGVueTpFdmVudEVtaXR0ZXI8VT47XG5cbiAgICAvLyBGaXJlcyB3aGVuIHRoZSBtb2RhbCBjbG9zZXMuXG4gICAgQE91dHB1dChcImRpc21pc3NlZFwiKVxuICAgIHB1YmxpYyBvbkRpc21pc3M6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgQFZpZXdDaGlsZChcIm1vZGFsXCIsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJpdmF0ZSBfbW9kYWxFbGVtZW50OkVsZW1lbnRSZWY7XG5cbiAgICAvLyBTaXplIHVzZWQgdG8gZGlzcGxheSB0aGUgbW9kYWwuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2l6ZTpNb2RhbFNpemU7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc0NlbnRlcmVkOmJvb2xlYW47XG5cbiAgICAvLyBXaGV0aGVyIHRoZSBtb2RhbCB0YWtlcyB1cCB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLlxuICAgIHByaXZhdGUgX2lzRnVsbFNjcmVlbjpib29sZWFuO1xuXG4gICAgLy8gVmFsdWUgdG8gZGVueSB3aXRoIHdoZW4gY2xvc2luZyB2aWEgYGlzQ2xvc2FibGVgLlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc0Z1bGxTY3JlZW4oKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRnVsbFNjcmVlbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzRnVsbFNjcmVlbihmdWxsU2NyZWVuOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNGdWxsU2NyZWVuID0gVXRpbC5ET00ucGFyc2VCb29sZWFuQXR0cmlidXRlKGZ1bGxTY3JlZW4pO1xuICAgIH1cblxuICAgIC8vIFdoZXRoZXIgb3Igbm90IHRoZSBtb2RhbCBoYXMgYmFzaWMgc3R5bGVzIGFwcGxpZWQuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXNCYXNpYzpib29sZWFuO1xuXG4gICAgLy8gV2hldGhlciB0aGUgbW9kYWwgY3VycmVudGx5IGlzIGRpc3BsYXlpbmcgYSBzY3JvbGxiYXIuXG4gICAgcHJpdmF0ZSBfbXVzdFNjcm9sbDpib29sZWFuO1xuICAgIC8vIFdoZXRoZXIgb3Igbm90IHRoZSBtb2RhbCBzaG91bGQgYWx3YXlzIGRpc3BsYXkgYSBzY3JvbGxiYXIuXG4gICAgcHJpdmF0ZSBfbXVzdEFsd2F5c1Njcm9sbDpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IG11c3RTY3JvbGwoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX211c3RTY3JvbGw7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBtdXN0U2Nyb2xsKG11c3RTY3JvbGw6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9tdXN0U2Nyb2xsID0gbXVzdFNjcm9sbDtcbiAgICAgICAgLy8gJ0NhY2hlJyB2YWx1ZSBpbiBfbXVzdEFsd2F5c1Njcm9sbCBzbyB0aGF0IGlmIGB0cnVlYCwgX211c3RTY3JvbGwgaXNuJ3QgZXZlciBhdXRvLXVwZGF0ZWQuXG4gICAgICAgIHRoaXMuX211c3RBbHdheXNTY3JvbGwgPSBtdXN0U2Nyb2xsO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjcm9sbCgpO1xuICAgIH1cblxuICAgIC8vIFdoZXRoZXIgdGhlIG1vZGFsIHNob3dzIGFnYWluc3QgYSBsaWdodCBiYWNrZ3JvdW5kLlxuICAgIHByaXZhdGUgX2lzSW52ZXJ0ZWQ6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc0ludmVydGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0ludmVydGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNJbnZlcnRlZChpbnZlcnRlZDpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzSW52ZXJ0ZWQgPSBVdGlsLkRPTS5wYXJzZUJvb2xlYW5BdHRyaWJ1dGUoaW52ZXJ0ZWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0cmFuc2l0aW9uQ29udHJvbGxlcjpUcmFuc2l0aW9uQ29udHJvbGxlcjtcblxuICAgIC8vIFRyYW5zaXRpb24gdG8gZGlzcGxheSBtb2RhbCB3aXRoLlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRyYW5zaXRpb246c3RyaW5nO1xuXG4gICAgLy8gRHVyYXRpb24gb2YgdGhlIG1vZGFsICYgZGltbWVyIHRyYW5zaXRpb25zLlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRyYW5zaXRpb25EdXJhdGlvbjpudW1iZXI7XG5cbiAgICAvLyBXaGV0aGVyIG9yIG5vdCB0aGUgYmFja3JvdW5kIGRpbW1lciBpcyBhY3RpdmUuXG4gICAgcHVibGljIGRpbUJhY2tncm91bmQ6Ym9vbGVhbjtcbiAgICAvLyBUcnVlIGFmdGVyIGBhcHByb3ZlYCBvciBgZGVueWAgaGFzIGJlZW4gY2FsbGVkLlxuICAgIHByaXZhdGUgX2lzQ2xvc2luZzpib29sZWFuO1xuXG4gICAgLy8gYFZpZXdDb250YWluZXJSZWZgIGZvciB0aGUgZWxlbWVudCB0aGUgdGVtcGxhdGUgZ2V0cyBpbmplY3RlZCBhcyBhIHNpYmxpbmcgb2YuXG4gICAgQFZpZXdDaGlsZChcInRlbXBsYXRlU2libGluZ1wiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyB0ZW1wbGF0ZVNpYmxpbmc6Vmlld0NvbnRhaW5lclJlZjtcblxuICAgIC8vIFBhcmVudCBlbGVtZW50IG9mIG1vZGFsIGJlZm9yZSByZWxvY2F0aW9uIHRvIGRvY3VtZW50IGJvZHkuXG4gICAgcHJpdmF0ZSBfb3JpZ2luYWxDb250YWluZXI/OkVsZW1lbnQ7XG5cbiAgICBwdWJsaWMgZ2V0IGR5bmFtaWNDbGFzc2VzKCk6SUR5bmFtaWNDbGFzc2VzIHtcbiAgICAgICAgY29uc3QgY2xhc3NlczpJRHluYW1pY0NsYXNzZXMgPSB7fTtcbiAgICAgICAgaWYgKHRoaXMuc2l6ZSkge1xuICAgICAgICAgICAgY2xhc3Nlc1t0aGlzLnNpemVdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xhc3NlcztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjpSZW5kZXJlcjIsIHByaXZhdGUgX2VsZW1lbnQ6RWxlbWVudFJlZiwgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeTpTdWlDb21wb25lbnRGYWN0b3J5KSB7XG4gICAgICAgIC8vIEluaXRpYWxpc2Ugd2l0aCBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gZnJvbSBgTW9kYWxDb25maWdgICh0byBhdm9pZCB3cml0aW5nIGRlZmF1bHRzIHR3aWNlKS5cbiAgICAgICAgY29uc3QgY29uZmlnID0gbmV3IE1vZGFsQ29uZmlnPHVuZGVmaW5lZCwgVCwgVT4oKTtcbiAgICAgICAgdGhpcy5sb2FkQ29uZmlnKGNvbmZpZyk7XG5cbiAgICAgICAgLy8gRXZlbnQgZW1pdHRlcnMgZm9yIGVhY2ggb2YgdGhlIHBvc3NpYmxlIG1vZGFsIG91dGNvbWVzLlxuICAgICAgICB0aGlzLm9uQXBwcm92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcbiAgICAgICAgdGhpcy5vbkRlbnkgPSBuZXcgRXZlbnRFbWl0dGVyPFU+KCk7XG4gICAgICAgIHRoaXMub25EaXNtaXNzID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgY29udHJvbHMgd2l0aCBhY3Rpb25zIGZvciB0aGUgYGFwcHJvdmVgIGFuZCBgZGVueWAgY2FzZXMuXG4gICAgICAgIHRoaXMuY29udHJvbHMgPSBuZXcgTW9kYWxDb250cm9sczxULCBVPihcbiAgICAgICAgICAgIHJlcyA9PiB0aGlzLmRpc21pc3MoKCkgPT4gdGhpcy5vbkFwcHJvdmUuZW1pdChyZXMpKSxcbiAgICAgICAgICAgIHJlcyA9PiB0aGlzLmRpc21pc3MoKCkgPT4gdGhpcy5vbkRlbnkuZW1pdChyZXMpKSk7XG5cbiAgICAgICAgLy8gSW50ZXJuYWwgdmFyaWFibGUgaW5pdGlhbGlzYXRpb24uXG4gICAgICAgIHRoaXMuZGltQmFja2dyb3VuZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc0Nsb3NpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlciA9IG5ldyBUcmFuc2l0aW9uQ29udHJvbGxlcihmYWxzZSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCk6dm9pZCB7XG4gICAgICAgIC8vIFRyYW5zaXRpb24gdGhlIG1vZGFsIHRvIGJlIHZpc2libGUuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShuZXcgVHJhbnNpdGlvbih0aGlzLnRyYW5zaXRpb24sIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uLkluKSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kaW1CYWNrZ3JvdW5kID0gdHJ1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOnZvaWQge1xuICAgICAgICAvLyBNb3ZlIHRoZSBtb2RhbCB0byB0aGUgZG9jdW1lbnQgYm9keSB0byBlbnN1cmUgY29ycmVjdCBzY3JvbGxpbmcuXG4gICAgICAgIHRoaXMuX29yaWdpbmFsQ29udGFpbmVyID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpIS5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAvLyBSZW1vdmUgdGhlICN0ZW1wbGF0ZVNpYmxpbmcgZWxlbWVudCBmcm9tIHRoZSBET00gdG8gZml4IGJvdHRvbSBib3JkZXIgc3R5bGVzLlxuICAgICAgICBjb25zdCB0ZW1wbGF0ZUVsZW1lbnQgPSB0aGlzLnRlbXBsYXRlU2libGluZy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgRWxlbWVudDtcbiAgICAgICAgaWYgKHRlbXBsYXRlRWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0ZW1wbGF0ZUVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX21vZGFsRWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEVsZW1lbnQ7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVTY3JvbGwoKSk7XG5cbiAgICAgICAgLy8gRm9jdXMgYW55IGVsZW1lbnQgd2l0aCBbYXV0b2ZvY3VzXSBhdHRyaWJ1dGUuXG4gICAgICAgIGNvbnN0IGF1dG9Gb2N1cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIlthdXRvZm9jdXNdXCIpIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgICAgICAgaWYgKGF1dG9Gb2N1cykge1xuICAgICAgICAgICAgLy8gQXV0b2ZvY3VzIGFmdGVyIHRoZSBicm93c2VyIGhhcyBoYWQgdGltZSB0byBwcm9jZXNzIG90aGVyIGV2ZW50IGhhbmRsZXJzLlxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBhdXRvRm9jdXMuZm9jdXMoKSwgMTApO1xuICAgICAgICAgICAgLy8gVHJ5IHRvIGZvY3VzIGFnYWluIHdoZW4gdGhlIG1vZGFsIGhhcyBvcGVuZWQgc28gdGhhdCBhdXRvZm9jdXMgd29ya3MgaW4gSUUxMS5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYXV0b0ZvY3VzLmZvY3VzKCksIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFVwZGF0ZXMgdGhlIG1vZGFsIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWd1cmF0aW9uLlxuICAgIHB1YmxpYyBsb2FkQ29uZmlnPFY+KGNvbmZpZzpNb2RhbENvbmZpZzxWLCBULCBVPik6dm9pZCB7XG4gICAgICAgIHRoaXMuaXNDbG9zYWJsZSA9IGNvbmZpZy5pc0Nsb3NhYmxlO1xuICAgICAgICB0aGlzLmNsb3NlUmVzdWx0ID0gY29uZmlnLmNsb3NlUmVzdWx0O1xuXG4gICAgICAgIHRoaXMuc2l6ZSA9IGNvbmZpZy5zaXplO1xuICAgICAgICB0aGlzLmlzRnVsbFNjcmVlbiA9IGNvbmZpZy5pc0Z1bGxTY3JlZW47XG4gICAgICAgIHRoaXMuaXNCYXNpYyA9IGNvbmZpZy5pc0Jhc2ljO1xuICAgICAgICB0aGlzLmlzSW52ZXJ0ZWQgPSBjb25maWcuaXNJbnZlcnRlZDtcbiAgICAgICAgdGhpcy5pc0NlbnRlcmVkID0gY29uZmlnLmlzQ2VudGVyZWQ7XG5cbiAgICAgICAgdGhpcy5tdXN0U2Nyb2xsID0gY29uZmlnLm11c3RTY3JvbGw7XG5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gY29uZmlnLnRyYW5zaXRpb247XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uID0gY29uZmlnLnRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICB9XG5cbiAgICAvLyBEaXNtaXNzZXMgdGhlIG1vZGFsIHdpdGggYSB0cmFuc2l0aW9uLCBmaXJpbmcgdGhlIGNhbGxiYWNrIGFmdGVyIHRoZSBtb2RhbCBoYXMgZmluaXNoZWQgdHJhbnNpdGlvbmluZy5cbiAgICBwcml2YXRlIGRpc21pc3MoY2FsbGJhY2s6KCkgPT4gdm9pZCA9ICgpID0+IHt9KTp2b2lkIHtcbiAgICAgICAgLy8gSWYgd2UgYXJlbid0IGN1cnJlbnRseSBjbG9zaW5nLFxuICAgICAgICBpZiAoIXRoaXMuX2lzQ2xvc2luZykge1xuICAgICAgICAgICAgdGhpcy5faXNDbG9zaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gVHJhbnNpdGlvbiB0aGUgbW9kYWwgdG8gYmUgaW52aXNpYmxlLlxuICAgICAgICAgICAgdGhpcy5kaW1CYWNrZ3JvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLnN0b3BBbGwoKTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICBuZXcgVHJhbnNpdGlvbih0aGlzLnRyYW5zaXRpb24sIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uLk91dCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIGRvbmUsIG1vdmUgdGhlIG1vZGFsIGJhY2sgdG8gaXRzIG9yaWdpbmFsIGxvY2F0aW9uLCBlbWl0IGEgZGlzbWlzcyBldmVudCwgYW5kIGZpcmUgdGhlIGNhbGxiYWNrLlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fb3JpZ2luYWxDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29yaWdpbmFsQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkRpc21pc3MuZW1pdCgpO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENsb3NlcyB0aGUgbW9kYWwgd2l0aCBhICdkZW55JyBvdXRjb21lLCB1c2luZyB0aGUgc3BlY2lmaWVkIGRlZmF1bHQgcmVhc29uLlxuICAgIHB1YmxpYyBjbG9zZSgpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc0Nsb3NhYmxlKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBhcmUgYWxsb3dlZCB0byBjbG9zZSwgZmlyZSB0aGUgZGVueSByZXN1bHQgd2l0aCB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAgICAgICAgICAgIHRoaXMuZGVueSh0aGlzLmNsb3NlUmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIERlY2lkZXMgd2hldGhlciB0aGUgbW9kYWwgbmVlZHMgdG8gcmVwb3NpdGlvbiB0byBhbGxvdyBzY3JvbGxpbmcuXG4gICAgcHJpdmF0ZSB1cGRhdGVTY3JvbGwoKTp2b2lkIHtcblxuICAgICAgICAvLyBfbXVzdEFsd2F5c1Njcm9sbCB3b3JrcyBieSBzdG9wcGluZyBfbXVzdFNjcm9sbCBmcm9tIGJlaW5nIGF1dG9tYXRpY2FsbHkgdXBkYXRlZCwgc28gaXQgc3RheXMgYHRydWVgLlxuICAgICAgICBpZiAoIXRoaXMuX211c3RBbHdheXNTY3JvbGwgJiYgdGhpcy5fbW9kYWxFbGVtZW50KSB7XG5cbiAgICAgICAgICAgIC8vIFNlbWFudGljIFVJIG1vZGFsIG1hcmdpbiBhbmQgZGltbWVyIHBhZGRpbmcgYXJlIDFyZW0sIHdoaWNoIGlzIHJlbGF0aXZlIHRvIHRoZSBnbG9iYWwgZm9udCBzaXplLCBzbyBmb3IgY29tcGF0aWJpbGl0eTpcbiAgICAgICAgICAgIGNvbnN0IGZvbnRTaXplID0gcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXNpemVcIikpO1xuICAgICAgICAgICAgY29uc3QgbWFyZ2luID0gZm9udFNpemUgKiAyO1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX21vZGFsRWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIC8vIFRoZSBtb2RhbCBtdXN0IHNjcm9sbCBpZiB0aGUgd2luZG93IGhlaWdodCBpcyBzbWFsbGVyIHRoYW4gdGhlIG1vZGFsIGhlaWdodCArIGJvdGggbWFyZ2lucy5cbiAgICAgICAgICAgIHRoaXMuX211c3RTY3JvbGwgPSB3aW5kb3cuaW5uZXJIZWlnaHQgPCBlbGVtZW50LmNsaWVudEhlaWdodCArIG1hcmdpbiAqIDI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25DbGljayhlOk1vdXNlRXZlbnQpOnZvaWQge1xuICAgICAgICAvLyBNYWtlcyBzZW5zZSBoZXJlLCBhcyB0aGUgbW9kYWwgc2hvdWxkbid0IGJlIGF0dGFjaGVkIHRvIGFueSBET00gZWxlbWVudC5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICAvLyBEb2N1bWVudCBsaXN0ZW5lciBpcyBmaW5lIGhlcmUgYmVjYXVzZSBub2JvZHkgd2lsbCBoYXZlIGVub3VnaCBtb2RhbHMgb3Blbi5cbiAgICBASG9zdExpc3RlbmVyKFwiZG9jdW1lbnQ6a2V5dXBcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkRvY3VtZW50S2V5VXAoZTpLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gS2V5Q29kZS5Fc2NhcGUpIHtcbiAgICAgICAgICAgIC8vIENsb3NlIGF1dG9tYXRpY2FsbHkgY292ZXJzIGNhc2Ugb2YgYCFpc0Nsb3NhYmxlYCwgc28gY2hlY2sgbm90IG5lZWRlZC5cbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJ3aW5kb3c6cmVzaXplXCIpXG4gICAgcHVibGljIG9uRG9jdW1lbnRSZXNpemUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVTY3JvbGwoKTtcbiAgICB9XG59XG4iXX0=