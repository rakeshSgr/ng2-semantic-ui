/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ViewChild, HostBinding, HostListener, Input, ContentChildren, QueryList, TemplateRef, ContentChild, EventEmitter, Output } from "@angular/core";
import { DropdownService, SuiDropdownMenu } from "../../dropdown/internal";
import { SearchService } from "../../search/internal";
import { Util, HandledEvent, KeyCode } from "../../../misc/util/internal";
import { SuiSelectOption } from "../components/select-option";
import { SuiSelectSearch } from "../directives/select-search";
/**
 * @record
 * @template T
 */
export function IOptionContext() { }
function IOptionContext_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    IOptionContext.prototype.query;
}
/**
 * @abstract
 * @template T, U
 */
var SuiSelectBase = /** @class */ (function () {
    function SuiSelectBase(_element, _localizationService) {
        var _this = this;
        this._element = _element;
        this._localizationService = _localizationService;
        this.dropdownService = new DropdownService();
        // We do want an empty query to return all results.
        this.searchService = new SearchService(true);
        this.isSearchable = false;
        this.onLocaleUpdate();
        this._localizationService.onLanguageUpdate.subscribe(function () { return _this.onLocaleUpdate(); });
        this._renderedSubscriptions = [];
        this.icon = "dropdown";
        this.transition = "slide down";
        this.transitionDuration = 200;
        this.onTouched = new EventEmitter();
        this.hasClasses = true;
    }
    Object.defineProperty(SuiSelectBase.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dropdownService.isOpen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "isVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._menu.isVisible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "hasSearchClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isSearchable && !this.isSearchExternal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "isSearching", {
        get: /**
         * @return {?}
         */
        function () {
            return this.searchService.isSearching;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "searchInput", {
        get: /**
         * @return {?}
         */
        function () {
            return this._manualSearch || this._internalSearch;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "tabindex", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.isDisabled) {
                // If disabled, remove from tabindex.
                return -1;
            }
            if (this.dropdownService.isOpen && this.isSearchExternal) {
                // If open & in menu search, remove from tabindex (as input always autofocusses).
                return -1;
            }
            if (this._tabIndex != undefined) {
                // If custom tabindex, default to that.
                return this._tabIndex;
            }
            if (this.hasSearchClass) {
                // If search input enabled, tab goes to input.
                return -1;
            }
            // Otherwise, return default of 0.
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "isDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dropdownService.isDisabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dropdownService.isDisabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "options", {
        set: /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            if (options) {
                this.searchService.options = options;
                this.optionsUpdateHook();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "optionsFilter", {
        set: /**
         * @param {?} filter
         * @return {?}
         */
        function (filter) {
            if (filter) {
                this.searchService.optionsFilter = filter;
                this.optionsUpdateHook();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "optionsLookup", {
        set: /**
         * @param {?} lookup
         * @return {?}
         */
        function (lookup) {
            if (lookup) {
                this.searchService.optionsLookup = lookup;
                this.optionsUpdateHook();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "filteredOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this.searchService.results;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "availableOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this.filteredOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "query", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isSearchable ? this.searchService.query : undefined;
        },
        set: /**
         * @param {?} query
         * @return {?}
         */
        function (query) {
            var _this = this;
            if (query != undefined) {
                this.queryUpdateHook();
                this.updateQuery(query);
                // Update the rendered text as query has changed.
                this._renderedOptions.forEach(function (ro) { return _this.initialiseRenderedOption(ro); });
                if (this.searchInput) {
                    this.searchInput.query = query;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "labelField", {
        get: /**
         * @return {?}
         */
        function () {
            return this.searchService.optionsField;
        },
        set: /**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            this.searchService.optionsField = field;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "labelGetter", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            // Helper function to retrieve the label from an item.
            return function (obj) {
                var /** @type {?} */ label = Util.Object.readValue(obj, _this.labelField);
                if (label != undefined) {
                    return label.toString();
                }
                return "";
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "valueGetter", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            // Helper function to retrieve the value from an item.
            return function (obj) { return Util.Object.readValue(obj, _this.valueField); };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "configuredFormatter", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this._optionFormatter) {
                return function (o) { return ((_this._optionFormatter))(o, _this.isSearchable ? _this.query : undefined); };
            }
            else if (this.searchService.optionsLookup) {
                return function (o) { return _this.labelGetter(o); };
            }
            else {
                return function (o) { return _this.searchService.highlightMatches(_this.labelGetter(o), _this.query || ""); };
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "optionFormatter", {
        set: /**
         * @param {?} formatter
         * @return {?}
         */
        function (formatter) {
            this._optionFormatter = formatter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "localeValues", {
        get: /**
         * @return {?}
         */
        function () {
            return this._localizationService.override(this._localeValues, this.localeOverrides);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiSelectBase.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._menu.service = this.dropdownService;
        // We manually specify the menu items to the menu because the @ContentChildren doesn't pick up our dynamically rendered items.
        this._menu.items = this._renderedOptions;
        this._menu.parentElement = this._element;
        if (this._manualSearch) {
            this.isSearchable = true;
            this.isSearchExternal = true;
        }
        if (this.searchInput) {
            this.searchInput.onQueryUpdated.subscribe(function (q) { return _this.query = q; });
            this.searchInput.onQueryKeyDown.subscribe(function (e) { return _this.onQueryInputKeydown(e); });
        }
        // We must call this immediately as changes doesn't fire when you subscribe.
        this.onAvailableOptionsRendered();
        this._renderedOptions.changes.subscribe(function () { return _this.onAvailableOptionsRendered(); });
    };
    /**
     * @return {?}
     */
    SuiSelectBase.prototype.onLocaleUpdate = /**
     * @return {?}
     */
    function () {
        this._localeValues = this._localizationService.get().select;
    };
    // Hook is here since Typescript doesn't yet support overriding getters & setters while still calling the superclass.
    /**
     * @return {?}
     */
    SuiSelectBase.prototype.optionsUpdateHook = /**
     * @return {?}
     */
    function () { };
    // Hook is here since Typescript doesn't yet support overriding getters & setters while still calling the superclass.
    /**
     * @return {?}
     */
    SuiSelectBase.prototype.queryUpdateHook = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} query
     * @return {?}
     */
    SuiSelectBase.prototype.updateQuery = /**
     * @param {?} query
     * @return {?}
     */
    function (query) {
        var _this = this;
        // Update the query then open the dropdown, as after keyboard input it should always be open.
        this.searchService.updateQuery(query, function () {
            return _this.dropdownService.setOpenState(true);
        });
    };
    /**
     * @param {?=} delayed
     * @return {?}
     */
    SuiSelectBase.prototype.resetQuery = /**
     * @param {?=} delayed
     * @return {?}
     */
    function (delayed) {
        if (delayed === void 0) { delayed = true; }
        // The search delay is set to the transition duration to ensure results
        // aren't rendered as the select closes as that causes a sudden flash.
        if (delayed) {
            this.searchService.searchDelay = this._menu.menuTransitionDuration;
            this.searchService.updateQueryDelayed("");
        }
        else {
            this.searchService.updateQuery("");
        }
        if (this.searchInput) {
            this.searchInput.query = "";
        }
    };
    /**
     * @return {?}
     */
    SuiSelectBase.prototype.onAvailableOptionsRendered = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Unsubscribe from all previous subscriptions to avoid memory leaks on large selects.
        this._renderedSubscriptions.forEach(function (rs) { return rs.unsubscribe(); });
        this._renderedSubscriptions = [];
        this._renderedOptions.forEach(function (ro) {
            // Slightly delay initialisation to avoid change after checked errors. TODO - look into avoiding this!
            setTimeout(function () { return _this.initialiseRenderedOption(ro); });
            _this._renderedSubscriptions.push(ro.onSelected.subscribe(function () { return _this.selectOption(ro.value); }));
        });
        // If no options have been provided, autogenerate them from the rendered ones.
        if (this.searchService.options.length === 0 && !this.searchService.optionsLookup) {
            this.options = this._renderedOptions.map(function (ro) { return ro.value; });
        }
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SuiSelectBase.prototype.initialiseRenderedOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        option.usesTemplate = !!this.optionTemplate;
        option.formatter = this.configuredFormatter;
        if (option.usesTemplate) {
            this.drawTemplate(option.templateSibling, option.value);
        }
        option.changeDetector.markForCheck();
    };
    /**
     * @param {?} options
     * @param {?} value
     * @return {?}
     */
    SuiSelectBase.prototype.findOption = /**
     * @param {?} options
     * @param {?} value
     * @return {?}
     */
    function (options, value) {
        var _this = this;
        // Tries to find an option in options array
        return options.find(function (o) { return value === _this.valueGetter(o); });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiSelectBase.prototype.onCaretClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!e.eventHandled) {
            e.eventHandled = true;
            if (!this.dropdownService.isAnimating) {
                this.dropdownService.setOpenState(!this.dropdownService.isOpen);
                this.focus();
            }
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiSelectBase.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!e.eventHandled && !this.dropdownService.isAnimating) {
            e.eventHandled = true;
            // If the dropdown is searchable, clicking should keep it open, otherwise we toggle the open state.
            this.dropdownService.setOpenState(this.isSearchable ? true : !this.dropdownService.isOpen);
            // Immediately focus the search input whenever clicking on the select.
            this.focus();
        }
    };
    /**
     * @return {?}
     */
    SuiSelectBase.prototype.onFocusIn = /**
     * @return {?}
     */
    function () {
        if (!this.dropdownService.isOpen && !this.dropdownService.isAnimating) {
            this.dropdownService.setOpenState(true);
            this.focus();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiSelectBase.prototype.onFocusOut = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this._element.nativeElement.contains(e.relatedTarget)) {
            this.dropdownService.setOpenState(false);
            this.onTouched.emit();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiSelectBase.prototype.onKeyPress = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.keyCode === KeyCode.Enter) {
            // Enables support for focussing and opening with the keyboard alone.
            // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
            this._element.nativeElement.click();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiSelectBase.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.dropdownService.isOpen && e.keyCode === KeyCode.Down) {
            // Enables support for focussing and opening with the keyboard alone.
            // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
            this._element.nativeElement.click();
            e.preventDefault();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SuiSelectBase.prototype.onQueryInputKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @return {?}
     */
    SuiSelectBase.prototype.focus = /**
     * @return {?}
     */
    function () {
        if (this.isSearchable && this.searchInput) {
            // Focusses the search input only when searchable.
            // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
            this.searchInput.focus();
        }
        else {
            this._element.nativeElement.focus();
        }
    };
    // Helper that draws the provided template beside the provided ViewContainerRef.
    /**
     * @param {?} siblingRef
     * @param {?} value
     * @return {?}
     */
    SuiSelectBase.prototype.drawTemplate = /**
     * @param {?} siblingRef
     * @param {?} value
     * @return {?}
     */
    function (siblingRef, value) {
        siblingRef.clear();
        // Use of `$implicit` means use of <ng-template let-option> syntax is supported.
        siblingRef.createEmbeddedView(this.optionTemplate, {
            $implicit: value,
            query: this.query
        });
    };
    /**
     * @return {?}
     */
    SuiSelectBase.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._renderedSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    SuiSelectBase.propDecorators = {
        _menu: [{ type: ViewChild, args: [SuiDropdownMenu, { static: true },] }],
        _renderedOptions: [{ type: ContentChildren, args: [SuiSelectOption, { descendants: true },] }],
        hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.dropdown",] }],
        isActive: [{ type: HostBinding, args: ["class.active",] }],
        isVisible: [{ type: HostBinding, args: ["class.visible",] }],
        isSearchable: [{ type: Input }],
        hasSearchClass: [{ type: HostBinding, args: ["class.search",] }],
        isSearching: [{ type: HostBinding, args: ["class.loading",] }],
        _internalSearch: [{ type: ViewChild, args: [SuiSelectSearch, { static: true },] }],
        _manualSearch: [{ type: ContentChild, args: [SuiSelectSearch, { static: false },] }],
        _tabIndex: [{ type: Input, args: ["tabindex",] }],
        tabindex: [{ type: HostBinding, args: ["attr.tabindex",] }],
        isDisabled: [{ type: HostBinding, args: ["class.disabled",] }, { type: Input }],
        options: [{ type: Input }],
        optionsFilter: [{ type: Input }],
        optionsLookup: [{ type: Input }],
        labelField: [{ type: Input }],
        valueField: [{ type: Input }],
        optionTemplate: [{ type: Input }],
        optionFormatter: [{ type: Input }],
        icon: [{ type: Input }],
        transition: [{ type: Input }],
        transitionDuration: [{ type: Input }],
        onTouched: [{ type: Output, args: ["touched",] }],
        onClick: [{ type: HostListener, args: ["click", ["$event"],] }],
        onFocusIn: [{ type: HostListener, args: ["focusin",] }],
        onFocusOut: [{ type: HostListener, args: ["focusout", ["$event"],] }],
        onKeyPress: [{ type: HostListener, args: ["keypress", ["$event"],] }],
        onKeyDown: [{ type: HostListener, args: ["keydown", ["$event"],] }]
    };
    return SuiSelectBase;
}());
export { SuiSelectBase };
function SuiSelectBase_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiSelectBase.prototype.dropdownService;
    /** @type {?} */
    SuiSelectBase.prototype.searchService;
    /** @type {?} */
    SuiSelectBase.prototype._menu;
    /** @type {?} */
    SuiSelectBase.prototype._renderedOptions;
    /** @type {?} */
    SuiSelectBase.prototype._renderedSubscriptions;
    /** @type {?} */
    SuiSelectBase.prototype.hasClasses;
    /** @type {?} */
    SuiSelectBase.prototype.isSearchable;
    /** @type {?} */
    SuiSelectBase.prototype.isSearchExternal;
    /** @type {?} */
    SuiSelectBase.prototype._internalSearch;
    /** @type {?} */
    SuiSelectBase.prototype._manualSearch;
    /** @type {?} */
    SuiSelectBase.prototype._tabIndex;
    /** @type {?} */
    SuiSelectBase.prototype.valueField;
    /** @type {?} */
    SuiSelectBase.prototype.optionTemplate;
    /** @type {?} */
    SuiSelectBase.prototype._optionFormatter;
    /** @type {?} */
    SuiSelectBase.prototype._localeValues;
    /** @type {?} */
    SuiSelectBase.prototype.localeOverrides;
    /** @type {?} */
    SuiSelectBase.prototype.icon;
    /** @type {?} */
    SuiSelectBase.prototype.transition;
    /** @type {?} */
    SuiSelectBase.prototype.transitionDuration;
    /** @type {?} */
    SuiSelectBase.prototype.onTouched;
    /** @type {?} */
    SuiSelectBase.prototype._element;
    /** @type {?} */
    SuiSelectBase.prototype._localizationService;
    /**
     * @abstract
     * @param {?} option
     * @return {?}
     */
    SuiSelectBase.prototype.selectOption = function (option) { };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL3NlbGVjdC9jbGFzc2VzL3NlbGVjdC1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUFFLFdBQVcsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQ2pFLFdBQVcsRUFBb0IsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQ3RGLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGFBQWEsRUFBc0IsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsSUFBSSxFQUF1QixZQUFZLEVBQUUsT0FBTyxFQUFlLE1BQU0sNkJBQTZCLENBQUM7QUFFNUcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lBeU4xRCx1QkFBb0IsUUFBbUIsRUFBWSxvQkFBMkM7UUFBOUYsaUJBa0JDO1FBbEJtQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVkseUJBQW9CLEdBQXBCLG9CQUFvQixDQUF1QjtRQUMxRixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7O1FBRTdDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxhQUFhLENBQU8sSUFBSSxDQUFDLENBQUM7UUFFbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFFMUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxjQUFjLEVBQUUs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VyxTQUFDLGVBQWU7a0NBSzNCLFNBQVMsU0FBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dDQUczQyxZQUFZLFNBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs0QkFPL0MsS0FBSyxTQUFDLFVBQVU7MkJBR2hCLFdBQVcsU0FBQyxlQUFlOzZCQXNCM0IsV0FBVyxTQUFDLGdCQUFnQixjQUM1QixLQUFLOzBCQVNMLEtBQUs7Z0NBU0wsS0FBSztnQ0FTTCxLQUFLOzZCQW1DTCxLQUFLOzZCQW9CTCxLQUFLO2lDQVFMLEtBQUs7a0NBZUwsS0FBSzt1QkFZTCxLQUFLOzZCQUdMLEtBQUs7cUNBR0wsS0FBSzs0QkFHTCxNQUFNLFNBQUMsU0FBUzswQkEySGhCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7NEJBYWhDLFlBQVksU0FBQyxTQUFTOzZCQVN0QixZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDOzZCQVFuQyxZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDOzRCQVNuQyxZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOzt3QkFsWXZDOztTQWtCc0IsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgVmlld0NoaWxkLCBIb3N0QmluZGluZywgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsXG4gICAgQWZ0ZXJDb250ZW50SW5pdCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYsIENvbnRlbnRDaGlsZCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uRGVzdHJveVxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IERyb3Bkb3duU2VydmljZSwgU3VpRHJvcGRvd25NZW51IH0gZnJvbSBcIi4uLy4uL2Ryb3Bkb3duL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTZWFyY2hTZXJ2aWNlLCBMb29rdXBGbiwgRmlsdGVyRm4gfSBmcm9tIFwiLi4vLi4vc2VhcmNoL2ludGVybmFsXCI7XG5pbXBvcnQgeyBVdGlsLCBJVGVtcGxhdGVSZWZDb250ZXh0LCBIYW5kbGVkRXZlbnQsIEtleUNvZGUsIElGb2N1c0V2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgSVNlbGVjdExvY2FsZVZhbHVlcywgUmVjdXJzaXZlUGFydGlhbCwgU3VpTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9iZWhhdmlvcnMvbG9jYWxpemF0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlTZWxlY3RPcHRpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWxlY3Qtb3B0aW9uXCI7XG5pbXBvcnQgeyBTdWlTZWxlY3RTZWFyY2ggfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9zZWxlY3Qtc2VhcmNoXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9wdGlvbkNvbnRleHQ8VD4gZXh0ZW5kcyBJVGVtcGxhdGVSZWZDb250ZXh0PFQ+IHtcbiAgICBxdWVyeT86c3RyaW5nO1xufVxuXG4vLyBXZSB1c2UgZ2VuZXJpYyB0eXBlIFQgdG8gc3BlY2lmeSB0aGUgdHlwZSBvZiB0aGUgb3B0aW9ucyB3ZSBhcmUgd29ya2luZyB3aXRoLFxuLy8gYW5kIFUgdG8gc3BlY2lmeSB0aGUgdHlwZSBvZiB0aGUgcHJvcGVydHkgb2YgdGhlIG9wdGlvbiB1c2VkIGFzIHRoZSB2YWx1ZS5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdWlTZWxlY3RCYXNlPFQsIFU+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgICBwdWJsaWMgZHJvcGRvd25TZXJ2aWNlOkRyb3Bkb3duU2VydmljZTtcbiAgICBwdWJsaWMgc2VhcmNoU2VydmljZTpTZWFyY2hTZXJ2aWNlPFQsIFU+O1xuXG4gICAgQFZpZXdDaGlsZChTdWlEcm9wZG93bk1lbnUsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIF9tZW51OlN1aURyb3Bkb3duTWVudTtcblxuICAgIC8vIEtlZXAgdHJhY2sgb2YgYWxsIG9mIHRoZSByZW5kZXJlZCBzZWxlY3Qgb3B0aW9ucy4gKFJlbmRlcmVkIGJ5IHRoZSB1c2VyIHVzaW5nICpuZ0ZvcikuXG4gICAgQENvbnRlbnRDaGlsZHJlbihTdWlTZWxlY3RPcHRpb24sIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgICBwcm90ZWN0ZWQgX3JlbmRlcmVkT3B0aW9uczpRdWVyeUxpc3Q8U3VpU2VsZWN0T3B0aW9uPFQ+PjtcblxuICAgIC8vIEtlZXAgdHJhY2sgb2YgYWxsIG9mIHRoZSBzdWJzY3JpcHRpb25zIHRvIHRoZSBzZWxlY3RlZCBldmVudHMgb24gdGhlIHJlbmRlcmVkIG9wdGlvbnMuXG4gICAgcHJpdmF0ZSBfcmVuZGVyZWRTdWJzY3JpcHRpb25zOlN1YnNjcmlwdGlvbltdO1xuXG4gICAgLy8gU2V0cyB0aGUgU2VtYW50aWMgVUkgY2xhc3NlcyBvbiB0aGUgaG9zdCBlbGVtZW50LlxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuZHJvcGRvd25cIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYWN0aXZlXCIpXG4gICAgcHVibGljIGdldCBpc0FjdGl2ZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kcm9wZG93blNlcnZpY2UuaXNPcGVuO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnZpc2libGVcIilcbiAgICBwdWJsaWMgZ2V0IGlzVmlzaWJsZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWVudS5pc1Zpc2libGU7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXNTZWFyY2hhYmxlOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgaXNTZWFyY2hFeHRlcm5hbDpib29sZWFuO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3Muc2VhcmNoXCIpXG4gICAgcHVibGljIGdldCBoYXNTZWFyY2hDbGFzcygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1NlYXJjaGFibGUgJiYgIXRoaXMuaXNTZWFyY2hFeHRlcm5hbDtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5sb2FkaW5nXCIpXG4gICAgcHVibGljIGdldCBpc1NlYXJjaGluZygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hTZXJ2aWNlLmlzU2VhcmNoaW5nO1xuICAgIH1cblxuICAgIEBWaWV3Q2hpbGQoU3VpU2VsZWN0U2VhcmNoLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHByaXZhdGUgX2ludGVybmFsU2VhcmNoPzpTdWlTZWxlY3RTZWFyY2g7XG5cbiAgICBAQ29udGVudENoaWxkKFN1aVNlbGVjdFNlYXJjaCwgeyBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHJpdmF0ZSBfbWFudWFsU2VhcmNoPzpTdWlTZWxlY3RTZWFyY2g7XG5cbiAgICBwdWJsaWMgZ2V0IHNlYXJjaElucHV0KCk6U3VpU2VsZWN0U2VhcmNoIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hbnVhbFNlYXJjaCB8fCB0aGlzLl9pbnRlcm5hbFNlYXJjaDtcbiAgICB9XG5cbiAgICBASW5wdXQoXCJ0YWJpbmRleFwiKVxuICAgIHByaXZhdGUgX3RhYkluZGV4PzpudW1iZXI7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJhdHRyLnRhYmluZGV4XCIpXG4gICAgcHVibGljIGdldCB0YWJpbmRleCgpOm51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIC8vIElmIGRpc2FibGVkLCByZW1vdmUgZnJvbSB0YWJpbmRleC5cbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kcm9wZG93blNlcnZpY2UuaXNPcGVuICYmIHRoaXMuaXNTZWFyY2hFeHRlcm5hbCkge1xuICAgICAgICAgICAgLy8gSWYgb3BlbiAmIGluIG1lbnUgc2VhcmNoLCByZW1vdmUgZnJvbSB0YWJpbmRleCAoYXMgaW5wdXQgYWx3YXlzIGF1dG9mb2N1c3NlcykuXG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3RhYkluZGV4ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gSWYgY3VzdG9tIHRhYmluZGV4LCBkZWZhdWx0IHRvIHRoYXQuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFiSW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaGFzU2VhcmNoQ2xhc3MpIHtcbiAgICAgICAgICAgIC8vIElmIHNlYXJjaCBpbnB1dCBlbmFibGVkLCB0YWIgZ29lcyB0byBpbnB1dC5cbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICAvLyBPdGhlcndpc2UsIHJldHVybiBkZWZhdWx0IG9mIDAuXG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmRpc2FibGVkXCIpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzRGlzYWJsZWQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzRGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0Rpc2FibGVkKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2UuaXNEaXNhYmxlZCA9ICEhdmFsdWU7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IG9wdGlvbnMob3B0aW9uczpUW10pIHtcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zID0gb3B0aW9ucztcblxuICAgICAgICAgICAgdGhpcy5vcHRpb25zVXBkYXRlSG9vaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IG9wdGlvbnNGaWx0ZXIoZmlsdGVyOkZpbHRlckZuPFQ+IHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zRmlsdGVyID0gZmlsdGVyO1xuXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNVcGRhdGVIb29rKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgb3B0aW9uc0xvb2t1cChsb29rdXA6TG9va3VwRm48VCwgVT4gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGxvb2t1cCkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNMb29rdXAgPSBsb29rdXA7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1VwZGF0ZUhvb2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZmlsdGVyZWRPcHRpb25zKCk6VFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoU2VydmljZS5yZXN1bHRzO1xuICAgIH1cblxuICAgIC8vIERlcHJlY2F0ZWRcbiAgICBwdWJsaWMgZ2V0IGF2YWlsYWJsZU9wdGlvbnMoKTpUW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJlZE9wdGlvbnM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBxdWVyeSgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzU2VhcmNoYWJsZSA/IHRoaXMuc2VhcmNoU2VydmljZS5xdWVyeSA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHF1ZXJ5KHF1ZXJ5OnN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAocXVlcnkgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5VXBkYXRlSG9vaygpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVRdWVyeShxdWVyeSk7XG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHJlbmRlcmVkIHRleHQgYXMgcXVlcnkgaGFzIGNoYW5nZWQuXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlZE9wdGlvbnMuZm9yRWFjaChybyA9PiB0aGlzLmluaXRpYWxpc2VSZW5kZXJlZE9wdGlvbihybykpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hJbnB1dCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5wdXQucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBsYWJlbEZpZWxkKCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zRmllbGQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBsYWJlbEZpZWxkKGZpZWxkOnN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9uc0ZpZWxkID0gZmllbGQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBsYWJlbEdldHRlcigpOihvYmo6VCkgPT4gc3RyaW5nIHtcbiAgICAgICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHJldHJpZXZlIHRoZSBsYWJlbCBmcm9tIGFuIGl0ZW0uXG4gICAgICAgIHJldHVybiAob2JqOlQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gVXRpbC5PYmplY3QucmVhZFZhbHVlPFQsIHN0cmluZz4ob2JqLCB0aGlzLmxhYmVsRmllbGQpO1xuICAgICAgICAgICAgaWYgKGxhYmVsICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsYWJlbC50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdmFsdWVGaWVsZDpzdHJpbmc7XG5cbiAgICBwdWJsaWMgZ2V0IHZhbHVlR2V0dGVyKCk6KG9iajpUKSA9PiBVIHtcbiAgICAgICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIGFuIGl0ZW0uXG4gICAgICAgIHJldHVybiAob2JqOlQpID0+IFV0aWwuT2JqZWN0LnJlYWRWYWx1ZTxULCBVPihvYmosIHRoaXMudmFsdWVGaWVsZCk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgb3B0aW9uVGVtcGxhdGU6VGVtcGxhdGVSZWY8SU9wdGlvbkNvbnRleHQ8VD4+O1xuXG4gICAgcHJpdmF0ZSBfb3B0aW9uRm9ybWF0dGVyPzoobzpULCBxPzpzdHJpbmcpID0+IHN0cmluZztcblxuICAgIHB1YmxpYyBnZXQgY29uZmlndXJlZEZvcm1hdHRlcigpOihvcHRpb246VCkgPT4gc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbkZvcm1hdHRlcikge1xuICAgICAgICAgICAgcmV0dXJuIG8gPT4gdGhpcy5fb3B0aW9uRm9ybWF0dGVyIShvLCB0aGlzLmlzU2VhcmNoYWJsZSA/IHRoaXMucXVlcnkgOiB1bmRlZmluZWQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zTG9va3VwKSB7XG4gICAgICAgICAgICByZXR1cm4gbyA9PiB0aGlzLmxhYmVsR2V0dGVyKG8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG8gPT4gdGhpcy5zZWFyY2hTZXJ2aWNlLmhpZ2hsaWdodE1hdGNoZXModGhpcy5sYWJlbEdldHRlcihvKSwgdGhpcy5xdWVyeSB8fCBcIlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBvcHRpb25Gb3JtYXR0ZXIoZm9ybWF0dGVyOigob3B0aW9uOlQsIHF1ZXJ5PzpzdHJpbmcpID0+IHN0cmluZykgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9uRm9ybWF0dGVyID0gZm9ybWF0dGVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2xvY2FsZVZhbHVlczpJU2VsZWN0TG9jYWxlVmFsdWVzO1xuICAgIHB1YmxpYyBsb2NhbGVPdmVycmlkZXM6UmVjdXJzaXZlUGFydGlhbDxJU2VsZWN0TG9jYWxlVmFsdWVzPjtcblxuICAgIHB1YmxpYyBnZXQgbG9jYWxlVmFsdWVzKCk6SVNlbGVjdExvY2FsZVZhbHVlcyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGl6YXRpb25TZXJ2aWNlLm92ZXJyaWRlPFwic2VsZWN0XCI+KHRoaXMuX2xvY2FsZVZhbHVlcywgdGhpcy5sb2NhbGVPdmVycmlkZXMpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGljb246c3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuXG4gICAgQE91dHB1dChcInRvdWNoZWRcIilcbiAgICBwdWJsaWMgb25Ub3VjaGVkOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnQ6RWxlbWVudFJlZiwgcHJvdGVjdGVkIF9sb2NhbGl6YXRpb25TZXJ2aWNlOlN1aUxvY2FsaXphdGlvblNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2UgPSBuZXcgRHJvcGRvd25TZXJ2aWNlKCk7XG4gICAgICAgIC8vIFdlIGRvIHdhbnQgYW4gZW1wdHkgcXVlcnkgdG8gcmV0dXJuIGFsbCByZXN1bHRzLlxuICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UgPSBuZXcgU2VhcmNoU2VydmljZTxULCBVPih0cnVlKTtcblxuICAgICAgICB0aGlzLmlzU2VhcmNoYWJsZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMub25Mb2NhbGVVcGRhdGUoKTtcbiAgICAgICAgdGhpcy5fbG9jYWxpemF0aW9uU2VydmljZS5vbkxhbmd1YWdlVXBkYXRlLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uTG9jYWxlVXBkYXRlKCkpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlZFN1YnNjcmlwdGlvbnMgPSBbXTtcblxuICAgICAgICB0aGlzLmljb24gPSBcImRyb3Bkb3duXCI7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFwic2xpZGUgZG93blwiO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IDIwMDtcblxuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fbWVudS5zZXJ2aWNlID0gdGhpcy5kcm9wZG93blNlcnZpY2U7XG4gICAgICAgIC8vIFdlIG1hbnVhbGx5IHNwZWNpZnkgdGhlIG1lbnUgaXRlbXMgdG8gdGhlIG1lbnUgYmVjYXVzZSB0aGUgQENvbnRlbnRDaGlsZHJlbiBkb2Vzbid0IHBpY2sgdXAgb3VyIGR5bmFtaWNhbGx5IHJlbmRlcmVkIGl0ZW1zLlxuICAgICAgICB0aGlzLl9tZW51Lml0ZW1zID0gdGhpcy5fcmVuZGVyZWRPcHRpb25zO1xuICAgICAgICB0aGlzLl9tZW51LnBhcmVudEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuXG4gICAgICAgIGlmICh0aGlzLl9tYW51YWxTZWFyY2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTZWFyY2hhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaXNTZWFyY2hFeHRlcm5hbCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZWFyY2hJbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5vblF1ZXJ5VXBkYXRlZC5zdWJzY3JpYmUoKHE6c3RyaW5nKSA9PiB0aGlzLnF1ZXJ5ID0gcSk7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaElucHV0Lm9uUXVlcnlLZXlEb3duLnN1YnNjcmliZSgoZTpLZXlib2FyZEV2ZW50KSA9PiB0aGlzLm9uUXVlcnlJbnB1dEtleWRvd24oZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2UgbXVzdCBjYWxsIHRoaXMgaW1tZWRpYXRlbHkgYXMgY2hhbmdlcyBkb2Vzbid0IGZpcmUgd2hlbiB5b3Ugc3Vic2NyaWJlLlxuICAgICAgICB0aGlzLm9uQXZhaWxhYmxlT3B0aW9uc1JlbmRlcmVkKCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVkT3B0aW9ucy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uQXZhaWxhYmxlT3B0aW9uc1JlbmRlcmVkKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Mb2NhbGVVcGRhdGUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fbG9jYWxlVmFsdWVzID0gdGhpcy5fbG9jYWxpemF0aW9uU2VydmljZS5nZXQoKS5zZWxlY3Q7XG4gICAgfVxuXG4gICAgLy8gSG9vayBpcyBoZXJlIHNpbmNlIFR5cGVzY3JpcHQgZG9lc24ndCB5ZXQgc3VwcG9ydCBvdmVycmlkaW5nIGdldHRlcnMgJiBzZXR0ZXJzIHdoaWxlIHN0aWxsIGNhbGxpbmcgdGhlIHN1cGVyY2xhc3MuXG4gICAgcHJvdGVjdGVkIG9wdGlvbnNVcGRhdGVIb29rKCk6dm9pZCB7fVxuXG4gICAgLy8gSG9vayBpcyBoZXJlIHNpbmNlIFR5cGVzY3JpcHQgZG9lc24ndCB5ZXQgc3VwcG9ydCBvdmVycmlkaW5nIGdldHRlcnMgJiBzZXR0ZXJzIHdoaWxlIHN0aWxsIGNhbGxpbmcgdGhlIHN1cGVyY2xhc3MuXG4gICAgcHJvdGVjdGVkIHF1ZXJ5VXBkYXRlSG9vaygpOnZvaWQge31cblxuICAgIHByb3RlY3RlZCB1cGRhdGVRdWVyeShxdWVyeTpzdHJpbmcpOnZvaWQge1xuICAgICAgICAvLyBVcGRhdGUgdGhlIHF1ZXJ5IHRoZW4gb3BlbiB0aGUgZHJvcGRvd24sIGFzIGFmdGVyIGtleWJvYXJkIGlucHV0IGl0IHNob3VsZCBhbHdheXMgYmUgb3Blbi5cbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCAoKSA9PlxuICAgICAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKHRydWUpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVzZXRRdWVyeShkZWxheWVkOmJvb2xlYW4gPSB0cnVlKTp2b2lkIHtcbiAgICAgICAgLy8gVGhlIHNlYXJjaCBkZWxheSBpcyBzZXQgdG8gdGhlIHRyYW5zaXRpb24gZHVyYXRpb24gdG8gZW5zdXJlIHJlc3VsdHNcbiAgICAgICAgLy8gYXJlbid0IHJlbmRlcmVkIGFzIHRoZSBzZWxlY3QgY2xvc2VzIGFzIHRoYXQgY2F1c2VzIGEgc3VkZGVuIGZsYXNoLlxuICAgICAgICBpZiAoZGVsYXllZCkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNlYXJjaERlbGF5ID0gdGhpcy5fbWVudS5tZW51VHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnVwZGF0ZVF1ZXJ5RGVsYXllZChcIlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS51cGRhdGVRdWVyeShcIlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaElucHV0KSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaElucHV0LnF1ZXJ5ID0gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkF2YWlsYWJsZU9wdGlvbnNSZW5kZXJlZCgpOnZvaWQge1xuICAgICAgICAvLyBVbnN1YnNjcmliZSBmcm9tIGFsbCBwcmV2aW91cyBzdWJzY3JpcHRpb25zIHRvIGF2b2lkIG1lbW9yeSBsZWFrcyBvbiBsYXJnZSBzZWxlY3RzLlxuICAgICAgICB0aGlzLl9yZW5kZXJlZFN1YnNjcmlwdGlvbnMuZm9yRWFjaChycyA9PiBycy51bnN1YnNjcmliZSgpKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRTdWJzY3JpcHRpb25zID0gW107XG5cbiAgICAgICAgdGhpcy5fcmVuZGVyZWRPcHRpb25zLmZvckVhY2gocm8gPT4ge1xuICAgICAgICAgICAgLy8gU2xpZ2h0bHkgZGVsYXkgaW5pdGlhbGlzYXRpb24gdG8gYXZvaWQgY2hhbmdlIGFmdGVyIGNoZWNrZWQgZXJyb3JzLiBUT0RPIC0gbG9vayBpbnRvIGF2b2lkaW5nIHRoaXMhXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5pdGlhbGlzZVJlbmRlcmVkT3B0aW9uKHJvKSk7XG5cbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVkU3Vic2NyaXB0aW9ucy5wdXNoKHJvLm9uU2VsZWN0ZWQuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2VsZWN0T3B0aW9uKHJvLnZhbHVlKSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBJZiBubyBvcHRpb25zIGhhdmUgYmVlbiBwcm92aWRlZCwgYXV0b2dlbmVyYXRlIHRoZW0gZnJvbSB0aGUgcmVuZGVyZWQgb25lcy5cbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zLmxlbmd0aCA9PT0gMCAmJiAhdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNMb29rdXApIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuX3JlbmRlcmVkT3B0aW9ucy5tYXAocm8gPT4gcm8udmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRpYWxpc2VSZW5kZXJlZE9wdGlvbihvcHRpb246U3VpU2VsZWN0T3B0aW9uPFQ+KTp2b2lkIHtcbiAgICAgICAgb3B0aW9uLnVzZXNUZW1wbGF0ZSA9ICEhdGhpcy5vcHRpb25UZW1wbGF0ZTtcbiAgICAgICAgb3B0aW9uLmZvcm1hdHRlciA9IHRoaXMuY29uZmlndXJlZEZvcm1hdHRlcjtcblxuICAgICAgICBpZiAob3B0aW9uLnVzZXNUZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5kcmF3VGVtcGxhdGUob3B0aW9uLnRlbXBsYXRlU2libGluZywgb3B0aW9uLnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbi5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWJzdHJhY3Qgc2VsZWN0T3B0aW9uKG9wdGlvbjpUKTp2b2lkO1xuXG4gICAgcHJvdGVjdGVkIGZpbmRPcHRpb24ob3B0aW9uczpUW10sIHZhbHVlOlUpOlQgfCB1bmRlZmluZWQge1xuICAgICAgICAvLyBUcmllcyB0byBmaW5kIGFuIG9wdGlvbiBpbiBvcHRpb25zIGFycmF5XG4gICAgICAgIHJldHVybiBvcHRpb25zLmZpbmQobyA9PiB2YWx1ZSA9PT0gdGhpcy52YWx1ZUdldHRlcihvKSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2FyZXRDbGljayhlOkhhbmRsZWRFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmICghZS5ldmVudEhhbmRsZWQpIHtcbiAgICAgICAgICAgIGUuZXZlbnRIYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmRyb3Bkb3duU2VydmljZS5pc0FuaW1hdGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZSghdGhpcy5kcm9wZG93blNlcnZpY2UuaXNPcGVuKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uQ2xpY2soZTpIYW5kbGVkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoIWUuZXZlbnRIYW5kbGVkICYmICF0aGlzLmRyb3Bkb3duU2VydmljZS5pc0FuaW1hdGluZykge1xuICAgICAgICAgICAgZS5ldmVudEhhbmRsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgZHJvcGRvd24gaXMgc2VhcmNoYWJsZSwgY2xpY2tpbmcgc2hvdWxkIGtlZXAgaXQgb3Blbiwgb3RoZXJ3aXNlIHdlIHRvZ2dsZSB0aGUgb3BlbiBzdGF0ZS5cbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZSh0aGlzLmlzU2VhcmNoYWJsZSA/IHRydWUgOiAhdGhpcy5kcm9wZG93blNlcnZpY2UuaXNPcGVuKTtcblxuICAgICAgICAgICAgLy8gSW1tZWRpYXRlbHkgZm9jdXMgdGhlIHNlYXJjaCBpbnB1dCB3aGVuZXZlciBjbGlja2luZyBvbiB0aGUgc2VsZWN0LlxuICAgICAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImZvY3VzaW5cIilcbiAgICBwdWJsaWMgb25Gb2N1c0luKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5kcm9wZG93blNlcnZpY2UuaXNPcGVuICYmICF0aGlzLmRyb3Bkb3duU2VydmljZS5pc0FuaW1hdGluZykge1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKHRydWUpO1xuXG4gICAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkZvY3VzT3V0KGU6SUZvY3VzRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5vblRvdWNoZWQuZW1pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImtleXByZXNzXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25LZXlQcmVzcyhlOktleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBLZXlDb2RlLkVudGVyKSB7XG4gICAgICAgICAgICAvLyBFbmFibGVzIHN1cHBvcnQgZm9yIGZvY3Vzc2luZyBhbmQgb3BlbmluZyB3aXRoIHRoZSBrZXlib2FyZCBhbG9uZS5cbiAgICAgICAgICAgIC8vIFVzaW5nIGRpcmVjdGx5IGJlY2F1c2UgUmVuZGVyZXIyIGRvZXNuJ3QgaGF2ZSBpbnZva2VFbGVtZW50TWV0aG9kIG1ldGhvZCBhbnltb3JlLlxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwia2V5ZG93blwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uS2V5RG93bihlOktleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzT3BlbiAmJiBlLmtleUNvZGUgPT09IEtleUNvZGUuRG93bikge1xuXG4gICAgICAgICAgICAvLyBFbmFibGVzIHN1cHBvcnQgZm9yIGZvY3Vzc2luZyBhbmQgb3BlbmluZyB3aXRoIHRoZSBrZXlib2FyZCBhbG9uZS5cbiAgICAgICAgICAgIC8vIFVzaW5nIGRpcmVjdGx5IGJlY2F1c2UgUmVuZGVyZXIyIGRvZXNuJ3QgaGF2ZSBpbnZva2VFbGVtZW50TWV0aG9kIG1ldGhvZCBhbnltb3JlLlxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblF1ZXJ5SW5wdXRLZXlkb3duKGV2ZW50OktleWJvYXJkRXZlbnQpOnZvaWQge31cblxuICAgIHByb3RlY3RlZCBmb2N1cygpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc1NlYXJjaGFibGUgJiYgdGhpcy5zZWFyY2hJbnB1dCkge1xuICAgICAgICAgICAgLy8gRm9jdXNzZXMgdGhlIHNlYXJjaCBpbnB1dCBvbmx5IHdoZW4gc2VhcmNoYWJsZS5cbiAgICAgICAgICAgIC8vIFVzaW5nIGRpcmVjdGx5IGJlY2F1c2UgUmVuZGVyZXIyIGRvZXNuJ3QgaGF2ZSBpbnZva2VFbGVtZW50TWV0aG9kIG1ldGhvZCBhbnltb3JlLlxuICAgICAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5mb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIZWxwZXIgdGhhdCBkcmF3cyB0aGUgcHJvdmlkZWQgdGVtcGxhdGUgYmVzaWRlIHRoZSBwcm92aWRlZCBWaWV3Q29udGFpbmVyUmVmLlxuICAgIHByb3RlY3RlZCBkcmF3VGVtcGxhdGUoc2libGluZ1JlZjpWaWV3Q29udGFpbmVyUmVmLCB2YWx1ZTpUKTp2b2lkIHtcbiAgICAgICAgc2libGluZ1JlZi5jbGVhcigpO1xuICAgICAgICAvLyBVc2Ugb2YgYCRpbXBsaWNpdGAgbWVhbnMgdXNlIG9mIDxuZy10ZW1wbGF0ZSBsZXQtb3B0aW9uPiBzeW50YXggaXMgc3VwcG9ydGVkLlxuICAgICAgICBzaWJsaW5nUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLm9wdGlvblRlbXBsYXRlLCB7XG4gICAgICAgICAgICAkaW1wbGljaXQ6IHZhbHVlLFxuICAgICAgICAgICAgcXVlcnk6IHRoaXMucXVlcnlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVkU3Vic2NyaXB0aW9ucy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgICB9XG59XG4iXX0=