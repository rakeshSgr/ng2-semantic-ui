/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, HostBinding, ContentChildren, QueryList } from "@angular/core";
import { SuiAccordionPanel } from "./accordion-panel";
import { SuiAccordionService } from "../services/accordion.service";
var SuiAccordion = /** @class */ (function () {
    function SuiAccordion() {
        // Accordion service is unique to each set of panels.
        this._service = new SuiAccordionService();
        this.hasClasses = true;
    }
    Object.defineProperty(SuiAccordion.prototype, "closeOthers", {
        get: /**
         * @return {?}
         */
        function () {
            return this._service.closeOthers;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._service.closeOthers = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiAccordion.prototype, "transition", {
        set: /**
         * @param {?} transition
         * @return {?}
         */
        function (transition) {
            this._service.transition = transition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiAccordion.prototype, "transitionDuration", {
        set: /**
         * @param {?} duration
         * @return {?}
         */
        function (duration) {
            this._service.transitionDuration = duration;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiAccordion.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.updatePanels();
        // Reconnect panels after they have updated.
        this._panels.changes.subscribe(function () { return _this.updatePanels(); });
    };
    /**
     * @return {?}
     */
    SuiAccordion.prototype.updatePanels = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._panels.forEach(function (p) { return _this._service.addPanel(p); });
    };
    SuiAccordion.decorators = [
        { type: Component, args: [{
                    selector: "sui-accordion",
                    template: "\n<ng-content></ng-content>\n",
                    styles: ["\n/* Fix for general styling issues */\n:host {\n    display: block;\n}\n\n/* Fix for styled border issue */\n:host.styled sui-accordion-panel:first-child .title {\n    border-top: none\n}\n"]
                }] }
    ];
    /** @nocollapse */
    SuiAccordion.ctorParameters = function () { return []; };
    SuiAccordion.propDecorators = {
        hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.accordion",] }],
        closeOthers: [{ type: Input }],
        transition: [{ type: Input }],
        transitionDuration: [{ type: Input }],
        _panels: [{ type: ContentChildren, args: [SuiAccordionPanel,] }]
    };
    return SuiAccordion;
}());
export { SuiAccordion };
function SuiAccordion_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiAccordion.prototype.hasClasses;
    /** @type {?} */
    SuiAccordion.prototype._service;
    /** @type {?} */
    SuiAccordion.prototype._panels;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9hY2NvcmRpb24vY29tcG9uZW50cy9hY2NvcmRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUM1RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7SUFnRGhFOztRQUVJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1FBRTFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0tBQzFCO0lBN0JELHNCQUNXLHFDQUFXOzs7O1FBRHRCO1lBRUksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztTQUNwQzs7Ozs7a0JBRXNCLEtBQWE7WUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDOzs7O09BSHJDO0lBTUQsc0JBQ1csb0NBQVU7Ozs7O1FBRHJCLFVBQ3NCLFVBQWlCO1lBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztTQUN6Qzs7O09BQUE7SUFFRCxzQkFDVyw0Q0FBa0I7Ozs7O1FBRDdCLFVBQzhCLFFBQWU7WUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUM7U0FDL0M7OztPQUFBOzs7O0lBY00seUNBQWtCOzs7OztRQUNyQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7O1FBR3BCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFlBQVksRUFBRSxFQUFuQixDQUFtQixDQUFDLENBQUM7Ozs7O0lBR3ZELG1DQUFZOzs7OztRQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQzs7O2dCQTdENUQsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsK0JBRWI7NkJBQ1ksZ01BVVo7aUJBQ0E7Ozs7OzZCQUVJLFdBQVcsU0FBQyxVQUFVLGNBQ3RCLFdBQVcsU0FBQyxpQkFBaUI7OEJBRzdCLEtBQUs7NkJBU0wsS0FBSztxQ0FLTCxLQUFLOzBCQU9MLGVBQWUsU0FBQyxpQkFBaUI7O3VCQS9DdEM7O1NBcUJhLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZywgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEFmdGVyQ29udGVudEluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3VpQWNjb3JkaW9uUGFuZWwgfSBmcm9tIFwiLi9hY2NvcmRpb24tcGFuZWxcIjtcbmltcG9ydCB7IFN1aUFjY29yZGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYWNjb3JkaW9uLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWFjY29yZGlvblwiLFxuICAgIHRlbXBsYXRlOiBgXG48bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5gLFxuICAgIHN0eWxlczogW2Bcbi8qIEZpeCBmb3IgZ2VuZXJhbCBzdHlsaW5nIGlzc3VlcyAqL1xuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBGaXggZm9yIHN0eWxlZCBib3JkZXIgaXNzdWUgKi9cbjpob3N0LnN0eWxlZCBzdWktYWNjb3JkaW9uLXBhbmVsOmZpcnN0LWNoaWxkIC50aXRsZSB7XG4gICAgYm9yZGVyLXRvcDogbm9uZVxufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpQWNjb3JkaW9uIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudWlcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY2NvcmRpb25cIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGNsb3NlT3RoZXJzKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlLmNsb3NlT3RoZXJzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgY2xvc2VPdGhlcnModmFsdWU6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9zZXJ2aWNlLmNsb3NlT3RoZXJzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHRyYW5zaXRpb24odHJhbnNpdGlvbjpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fc2VydmljZS50cmFuc2l0aW9uID0gdHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgdHJhbnNpdGlvbkR1cmF0aW9uKGR1cmF0aW9uOm51bWJlcikge1xuICAgICAgICB0aGlzLl9zZXJ2aWNlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfc2VydmljZTpTdWlBY2NvcmRpb25TZXJ2aWNlO1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihTdWlBY2NvcmRpb25QYW5lbClcbiAgICBwcm90ZWN0ZWQgX3BhbmVsczpRdWVyeUxpc3Q8U3VpQWNjb3JkaW9uUGFuZWw+O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIEFjY29yZGlvbiBzZXJ2aWNlIGlzIHVuaXF1ZSB0byBlYWNoIHNldCBvZiBwYW5lbHMuXG4gICAgICAgIHRoaXMuX3NlcnZpY2UgPSBuZXcgU3VpQWNjb3JkaW9uU2VydmljZSgpO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOnZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVBhbmVscygpO1xuXG4gICAgICAgIC8vIFJlY29ubmVjdCBwYW5lbHMgYWZ0ZXIgdGhleSBoYXZlIHVwZGF0ZWQuXG4gICAgICAgIHRoaXMuX3BhbmVscy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZVBhbmVscygpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlUGFuZWxzKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3BhbmVscy5mb3JFYWNoKHAgPT4gdGhpcy5fc2VydmljZS5hZGRQYW5lbChwKSk7XG4gICAgfVxufVxuIl19