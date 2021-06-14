import { __decorate, __metadata } from "tslib";
import { Component, ViewChild, HostBinding, Input, AfterViewInit, HostListener, EventEmitter, Output, Directive, ElementRef, TemplateRef, Renderer2 } from "@angular/core";
import { Util } from "../../../misc/util/internal";
import { DropdownService, SuiDropdownMenu } from "../../dropdown/internal";
import { ISearchLocaleValues, RecursivePartial, SuiLocalizationService } from "../../../behaviors/localization/internal";
import { SearchService } from "../services/search.service";
let SuiSearch = class SuiSearch {
    constructor(_element, renderer, _localizationService) {
        this._element = _element;
        this._localizationService = _localizationService;
        this.dropdownService = new DropdownService();
        this.searchService = new SearchService();
        this.onLocaleUpdate();
        this._localizationService.onLanguageUpdate.subscribe(() => this.onLocaleUpdate());
        this.hasClasses = true;
        this.tabindex = 0;
        this.hasIcon = true;
        this.retainSelectedResult = true;
        this.searchDelay = 200;
        this.maxResults = 7;
        this.onResultSelected = new EventEmitter();
        this.transition = "scale";
        this.transitionDuration = 200;
    }
    get isActive() {
        return this.dropdownService.isOpen;
    }
    // Gets & sets the placeholder text displayed inside the text input.
    get placeholder() {
        return this._placeholder || this.localeValues.placeholder;
    }
    set placeholder(placeholder) {
        this._placeholder = placeholder;
    }
    get localeValues() {
        return this._localizationService.override(this._localeValues, this.localeOverrides);
    }
    get query() {
        return this.searchService.query;
    }
    set query(query) {
        this.selectedResult = undefined;
        // Initialise a delayed search.
        this.searchService.updateQueryDelayed(query, () => 
        // Set the results open state depending on whether a query has been entered.
        this.dropdownService.setOpenState(this.searchService.query.length > 0));
    }
    set options(options) {
        if (options) {
            this.searchService.options = options;
        }
    }
    set optionsFilter(filter) {
        if (filter) {
            this.searchService.optionsFilter = filter;
        }
    }
    set optionsLookup(lookupFn) {
        this.searchService.optionsLookup = lookupFn;
    }
    set optionsField(field) {
        this.searchService.optionsField = field;
    }
    get resultFormatter() {
        if (this._resultFormatter) {
            return this._resultFormatter;
        }
        else if (this.searchService.optionsLookup) {
            return r => this.readValue(r);
        }
        else {
            return (r, q) => this.searchService.highlightMatches(this.readValue(r), q);
        }
    }
    set resultFormatter(formatter) {
        this._resultFormatter = formatter;
    }
    set searchDelay(delay) {
        this.searchService.searchDelay = delay;
    }
    get isSearching() {
        return this.searchService.isSearching;
    }
    get results() {
        return this.searchService.results.slice(0, this.maxResults);
    }
    ngAfterViewInit() {
        this._menu.service = this.dropdownService;
    }
    onLocaleUpdate() {
        this._localeValues = this._localizationService.get().search;
    }
    // Selects a result.
    select(result) {
        this.onResultSelected.emit(result);
        this.dropdownService.setOpenState(false);
        if (this.retainSelectedResult) {
            this.selectedResult = result;
            this.searchService.updateQuery(this.readValue(result));
        }
        else {
            this.searchService.updateQuery("");
        }
    }
    onClick(e) {
        this.open();
    }
    onFocusIn() {
        if (!this.dropdownService.isAnimating) {
            this.open();
        }
    }
    open() {
        if (this.searchService.query.length > 0) {
            // Only open on click when there is a query entered.
            this.dropdownService.setOpenState(true);
        }
    }
    onFocusOut(e) {
        console.log(e);
        if (!this._element.nativeElement.contains(e.relatedTarget)) {
            this.dropdownService.setOpenState(false);
        }
    }
    // Reads the specified field from an item.
    readValue(object) {
        return Util.Object.readValue(object, this.searchService.optionsField);
    }
};
SuiSearch.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: SuiLocalizationService }
];
__decorate([
    ViewChild(SuiDropdownMenu, { static: true }),
    __metadata("design:type", SuiDropdownMenu)
], SuiSearch.prototype, "_menu", void 0);
__decorate([
    HostBinding("class.ui"),
    HostBinding("class.search"),
    __metadata("design:type", Boolean)
], SuiSearch.prototype, "hasClasses", void 0);
__decorate([
    HostBinding("attr.tabindex"),
    __metadata("design:type", Number)
], SuiSearch.prototype, "tabindex", void 0);
__decorate([
    HostBinding("class.active"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], SuiSearch.prototype, "isActive", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SuiSearch.prototype, "hasIcon", void 0);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SuiSearch.prototype, "placeholder", null);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], SuiSearch.prototype, "options", null);
__decorate([
    Input(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function])
], SuiSearch.prototype, "optionsFilter", null);
__decorate([
    Input(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function])
], SuiSearch.prototype, "optionsLookup", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SuiSearch.prototype, "optionsField", null);
__decorate([
    Input(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function])
], SuiSearch.prototype, "resultFormatter", null);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], SuiSearch.prototype, "resultTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SuiSearch.prototype, "retainSelectedResult", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SuiSearch.prototype, "searchDelay", null);
__decorate([
    HostBinding("class.loading"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], SuiSearch.prototype, "isSearching", null);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SuiSearch.prototype, "maxResults", void 0);
__decorate([
    Output("resultSelected"),
    __metadata("design:type", EventEmitter)
], SuiSearch.prototype, "onResultSelected", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SuiSearch.prototype, "transition", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SuiSearch.prototype, "transitionDuration", void 0);
__decorate([
    HostListener("focusin"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SuiSearch.prototype, "onFocusIn", null);
__decorate([
    HostListener("focusout", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SuiSearch.prototype, "onFocusOut", null);
SuiSearch = __decorate([
    Component({
        selector: "sui-search",
        template: `
<div class="ui input" [class.icon]="hasIcon" (click)="onClick($event)">
    <input class="prompt" type="text" [attr.placeholder]="placeholder" autocomplete="off" [(ngModel)]="query">
    <i *ngIf="hasIcon" class="search icon"></i>
</div>
<div class="results"
     suiDropdownMenu
     [menuTransition]="transition"
     [menuTransitionDuration]="transitionDuration"
     menuSelectedItemClass="active">

    <sui-search-result *ngFor="let r of results"
                       class="item"
                       [value]="r"
                       [query]="query"
                       [formatter]="resultFormatter"
                       [template]="resultTemplate"
                       (click)="select(r)"></sui-search-result>

    <div *ngIf="results.length == 0" class="message empty">
        <div class="header">{{ localeValues.noResults.header }}</div>
        <div class="description">{{ localeValues.noResults.message }}</div>
    </div>
</div>
`,
        styles: [`
/* Ensures results div has margin. */
:host {
    display: inline-block;
    outline: 0;
}

/* Fixes positioning when results are pushed above the search. */
.results {
    margin-bottom: .5em;
}
`]
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer2, SuiLocalizationService])
], SuiSearch);
export { SuiSearch };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9zZWFyY2gvY29tcG9uZW50cy9zZWFyY2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFDckUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQ3RFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQW9DLE1BQU0sNkJBQTZCLENBQUM7QUFDckYsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN6SCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUErQzNELElBQWEsU0FBUyxHQUF0QixNQUFhLFNBQVM7SUFzSWxCLFlBQW9CLFFBQW1CLEVBQUUsUUFBa0IsRUFBVSxvQkFBMkM7UUFBNUYsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUE4Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXVCO1FBQzVHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksYUFBYSxFQUFRLENBQUM7UUFFL0MsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFFbEYsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFB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Q0FLUDtBQUdEO0lBREMsS0FBSyxFQUFFOzs7OENBR1A7QUFHRDtJQURDLEtBQUssRUFBRTs7OzZDQUdQO0FBZUQ7SUFEQyxLQUFLLEVBQUU7OztnREFHUDtBQUdEO0lBREMsS0FBSyxFQUFFOzhCQUNjLFdBQVc7aURBQW9CO0FBR3JEO0lBREMsS0FBSyxFQUFFOzt1REFDNEI7QUFHcEM7SUFEQyxLQUFLLEVBQUU7Ozs0Q0FHUDtBQUdEO0lBREMsV0FBVyxDQUFDLGVBQWUsQ0FBQzs7OzRDQUc1QjtBQUdEO0lBREMsS0FBSyxFQUFFOzs2Q0FDaUI7QUFXekI7SUFEQyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7OEJBQ0QsWUFBWTttREFBSTtBQUd4QztJQURDLEtBQUssRUFBRTs7NkNBQ2lCO0FBR3pCO0lBREMsS0FBSyxFQUFFOztxREFDeUI7QUFnRGpDO0lBREMsWUFBWSxDQUFDLFNBQVMsQ0FBQzs7OzswQ0FLdkI7QUFVRDtJQURDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7OzsyQ0FNcEM7QUF2TVEsU0FBUztJQXhDckIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFlBQVk7UUFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F3QmI7aUJBQ1k7Ozs7Ozs7Ozs7O0NBV1o7S0FDQSxDQUFDO3FDQXVJK0IsVUFBVSxFQUFXLFNBQVMsRUFBK0Isc0JBQXNCO0dBdEl2RyxTQUFTLENBNk1yQjtTQTdNWSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIFZpZXdDaGlsZCwgSG9zdEJpbmRpbmcsIElucHV0LCBBZnRlclZpZXdJbml0LCBIb3N0TGlzdGVuZXIsXG4gICAgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgVGVtcGxhdGVSZWYsIFJlbmRlcmVyMlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXRpbCwgSVRlbXBsYXRlUmVmQ29udGV4dCwgSUZvY3VzRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBEcm9wZG93blNlcnZpY2UsIFN1aURyb3Bkb3duTWVudSB9IGZyb20gXCIuLi8uLi9kcm9wZG93bi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgSVNlYXJjaExvY2FsZVZhbHVlcywgUmVjdXJzaXZlUGFydGlhbCwgU3VpTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9iZWhhdmlvcnMvbG9jYWxpemF0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTZWFyY2hTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBMb29rdXBGbiwgRmlsdGVyRm4gfSBmcm9tIFwiLi4vaGVscGVycy9sb29rdXAtZm5cIjtcblxuZXhwb3J0IGludGVyZmFjZSBJUmVzdWx0Q29udGV4dDxUPiBleHRlbmRzIElUZW1wbGF0ZVJlZkNvbnRleHQ8VD4ge1xuICAgIHF1ZXJ5OnN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXNlYXJjaFwiLFxuICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwidWkgaW5wdXRcIiBbY2xhc3MuaWNvbl09XCJoYXNJY29uXCIgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiPlxuICAgIDxpbnB1dCBjbGFzcz1cInByb21wdFwiIHR5cGU9XCJ0ZXh0XCIgW2F0dHIucGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBbKG5nTW9kZWwpXT1cInF1ZXJ5XCI+XG4gICAgPGkgKm5nSWY9XCJoYXNJY29uXCIgY2xhc3M9XCJzZWFyY2ggaWNvblwiPjwvaT5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInJlc3VsdHNcIlxuICAgICBzdWlEcm9wZG93bk1lbnVcbiAgICAgW21lbnVUcmFuc2l0aW9uXT1cInRyYW5zaXRpb25cIlxuICAgICBbbWVudVRyYW5zaXRpb25EdXJhdGlvbl09XCJ0cmFuc2l0aW9uRHVyYXRpb25cIlxuICAgICBtZW51U2VsZWN0ZWRJdGVtQ2xhc3M9XCJhY3RpdmVcIj5cblxuICAgIDxzdWktc2VhcmNoLXJlc3VsdCAqbmdGb3I9XCJsZXQgciBvZiByZXN1bHRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cInJcIlxuICAgICAgICAgICAgICAgICAgICAgICBbcXVlcnldPVwicXVlcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0dGVyXT1cInJlc3VsdEZvcm1hdHRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJyZXN1bHRUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3QocilcIj48L3N1aS1zZWFyY2gtcmVzdWx0PlxuXG4gICAgPGRpdiAqbmdJZj1cInJlc3VsdHMubGVuZ3RoID09IDBcIiBjbGFzcz1cIm1lc3NhZ2UgZW1wdHlcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPnt7IGxvY2FsZVZhbHVlcy5ub1Jlc3VsdHMuaGVhZGVyIH19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPnt7IGxvY2FsZVZhbHVlcy5ub1Jlc3VsdHMubWVzc2FnZSB9fTwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2Bcbi8qIEVuc3VyZXMgcmVzdWx0cyBkaXYgaGFzIG1hcmdpbi4gKi9cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgb3V0bGluZTogMDtcbn1cblxuLyogRml4ZXMgcG9zaXRpb25pbmcgd2hlbiByZXN1bHRzIGFyZSBwdXNoZWQgYWJvdmUgdGhlIHNlYXJjaC4gKi9cbi5yZXN1bHRzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpU2VhcmNoPFQ+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgcHVibGljIGRyb3Bkb3duU2VydmljZTpEcm9wZG93blNlcnZpY2U7XG4gICAgcHVibGljIHNlYXJjaFNlcnZpY2U6U2VhcmNoU2VydmljZTxULCBUPjtcblxuICAgIEBWaWV3Q2hpbGQoU3VpRHJvcGRvd25NZW51LCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHByaXZhdGUgX21lbnU6U3VpRHJvcGRvd25NZW51O1xuXG4gICAgLy8gU2V0cyB0aGUgU2VtYW50aWMgVUkgY2xhc3NlcyBvbiB0aGUgaG9zdCBlbGVtZW50LlxuICAgIC8vIERvaW5nIGl0IG9uIHRoZSBob3N0IGVuYWJsZXMgdXNlIGluIG1lbnVzIGV0Yy5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnNlYXJjaFwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJhdHRyLnRhYmluZGV4XCIpXG4gICAgcHVibGljIHJlYWRvbmx5IHRhYmluZGV4Om51bWJlcjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjdGl2ZVwiKVxuICAgIHB1YmxpYyBnZXQgaXNBY3RpdmUoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzT3BlbjtcbiAgICB9XG5cbiAgICAvLyBTZXRzIHdoZXRoZXIgdGhlIHNlYXJjaCBlbGVtZW50IGhhcyBhIHZpc2libGUgc2VhcmNoIGljb24uXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaGFzSWNvbjpib29sZWFuO1xuXG4gICAgcHJpdmF0ZSBfcGxhY2Vob2xkZXI6c3RyaW5nO1xuXG4gICAgLy8gR2V0cyAmIHNldHMgdGhlIHBsYWNlaG9sZGVyIHRleHQgZGlzcGxheWVkIGluc2lkZSB0aGUgdGV4dCBpbnB1dC5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcGxhY2Vob2xkZXIoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXIgfHwgdGhpcy5sb2NhbGVWYWx1ZXMucGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwbGFjZWhvbGRlcihwbGFjZWhvbGRlcjpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9sb2NhbGVWYWx1ZXM6SVNlYXJjaExvY2FsZVZhbHVlcztcblxuICAgIHB1YmxpYyBsb2NhbGVPdmVycmlkZXM6UmVjdXJzaXZlUGFydGlhbDxJU2VhcmNoTG9jYWxlVmFsdWVzPjtcblxuICAgIHB1YmxpYyBnZXQgbG9jYWxlVmFsdWVzKCk6SVNlYXJjaExvY2FsZVZhbHVlcyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGl6YXRpb25TZXJ2aWNlLm92ZXJyaWRlPFwic2VhcmNoXCI+KHRoaXMuX2xvY2FsZVZhbHVlcywgdGhpcy5sb2NhbGVPdmVycmlkZXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcXVlcnkoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hTZXJ2aWNlLnF1ZXJ5O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcXVlcnkocXVlcnk6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSZXN1bHQgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIEluaXRpYWxpc2UgYSBkZWxheWVkIHNlYXJjaC5cbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnVwZGF0ZVF1ZXJ5RGVsYXllZChxdWVyeSwgKCkgPT5cbiAgICAgICAgICAgIC8vIFNldCB0aGUgcmVzdWx0cyBvcGVuIHN0YXRlIGRlcGVuZGluZyBvbiB3aGV0aGVyIGEgcXVlcnkgaGFzIGJlZW4gZW50ZXJlZC5cbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZSh0aGlzLnNlYXJjaFNlcnZpY2UucXVlcnkubGVuZ3RoID4gMCkpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBvcHRpb25zKG9wdGlvbnM6VFtdIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgb3B0aW9uc0ZpbHRlcihmaWx0ZXI6RmlsdGVyRm48VD4gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGZpbHRlcikge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNGaWx0ZXIgPSBmaWx0ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgb3B0aW9uc0xvb2t1cChsb29rdXBGbjpMb29rdXBGbjxUPiB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9uc0xvb2t1cCA9IGxvb2t1cEZuO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBvcHRpb25zRmllbGQoZmllbGQ6c3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zRmllbGQgPSBmaWVsZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9yZXN1bHRGb3JtYXR0ZXI/OihyOlQsIHE6c3RyaW5nKSA9PiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgZ2V0IHJlc3VsdEZvcm1hdHRlcigpOihyZXN1bHQ6VCwgcXVlcnk6c3RyaW5nKSA9PiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5fcmVzdWx0Rm9ybWF0dGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVzdWx0Rm9ybWF0dGVyO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zTG9va3VwKSB7XG4gICAgICAgICAgICByZXR1cm4gciA9PiB0aGlzLnJlYWRWYWx1ZShyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAociwgcSkgPT4gdGhpcy5zZWFyY2hTZXJ2aWNlLmhpZ2hsaWdodE1hdGNoZXModGhpcy5yZWFkVmFsdWUociksIHEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHJlc3VsdEZvcm1hdHRlcihmb3JtYXR0ZXI6KHJlc3VsdDpULCBxdWVyeTpzdHJpbmcpID0+IHN0cmluZykge1xuICAgICAgICB0aGlzLl9yZXN1bHRGb3JtYXR0ZXIgPSBmb3JtYXR0ZXI7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcmVzdWx0VGVtcGxhdGU6VGVtcGxhdGVSZWY8SVJlc3VsdENvbnRleHQ8VD4+O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcmV0YWluU2VsZWN0ZWRSZXN1bHQ6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBzZWFyY2hEZWxheShkZWxheTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNlYXJjaERlbGF5ID0gZGVsYXk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MubG9hZGluZ1wiKVxuICAgIHB1YmxpYyBnZXQgaXNTZWFyY2hpbmcoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoU2VydmljZS5pc1NlYXJjaGluZztcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtYXhSZXN1bHRzOm51bWJlcjtcblxuICAgIHB1YmxpYyBnZXQgcmVzdWx0cygpOlRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2UucmVzdWx0cy5zbGljZSgwLCB0aGlzLm1heFJlc3VsdHMpO1xuICAgIH1cblxuICAgIC8vIFN0b3JlcyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHJlc3VsdC5cbiAgICBwdWJsaWMgc2VsZWN0ZWRSZXN1bHQ/OlQ7XG5cbiAgICAvLyBFbWl0cyB3aGVuZXZlciBhIG5ldyByZXN1bHQgaXMgc2VsZWN0ZWQuXG4gICAgQE91dHB1dChcInJlc3VsdFNlbGVjdGVkXCIpXG4gICAgcHVibGljIG9uUmVzdWx0U2VsZWN0ZWQ6RXZlbnRFbWl0dGVyPFQ+O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmLCByZW5kZXJlcjpSZW5kZXJlcjIsIHByaXZhdGUgX2xvY2FsaXphdGlvblNlcnZpY2U6U3VpTG9jYWxpemF0aW9uU2VydmljZSkge1xuICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZSA9IG5ldyBEcm9wZG93blNlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlID0gbmV3IFNlYXJjaFNlcnZpY2U8VCwgVD4oKTtcblxuICAgICAgICB0aGlzLm9uTG9jYWxlVXBkYXRlKCk7XG4gICAgICAgIHRoaXMuX2xvY2FsaXphdGlvblNlcnZpY2Uub25MYW5ndWFnZVVwZGF0ZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vbkxvY2FsZVVwZGF0ZSgpKTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgICAgICB0aGlzLnRhYmluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5oYXNJY29uID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZXRhaW5TZWxlY3RlZFJlc3VsdCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2VhcmNoRGVsYXkgPSAyMDA7XG4gICAgICAgIHRoaXMubWF4UmVzdWx0cyA9IDc7XG5cbiAgICAgICAgdGhpcy5vblJlc3VsdFNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFwic2NhbGVcIjtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSAyMDA7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOnZvaWQge1xuICAgICAgICB0aGlzLl9tZW51LnNlcnZpY2UgPSB0aGlzLmRyb3Bkb3duU2VydmljZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uTG9jYWxlVXBkYXRlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2xvY2FsZVZhbHVlcyA9IHRoaXMuX2xvY2FsaXphdGlvblNlcnZpY2UuZ2V0KCkuc2VhcmNoO1xuICAgIH1cblxuICAgIC8vIFNlbGVjdHMgYSByZXN1bHQuXG4gICAgcHVibGljIHNlbGVjdChyZXN1bHQ6VCk6dm9pZCB7XG4gICAgICAgIHRoaXMub25SZXN1bHRTZWxlY3RlZC5lbWl0KHJlc3VsdCk7XG4gICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZShmYWxzZSk7XG5cbiAgICAgICAgaWYgKHRoaXMucmV0YWluU2VsZWN0ZWRSZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UudXBkYXRlUXVlcnkodGhpcy5yZWFkVmFsdWUocmVzdWx0KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UudXBkYXRlUXVlcnkoXCJcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25DbGljayhlOk1vdXNlRXZlbnQpOnZvaWQge1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNpblwiKVxuICAgIHB1YmxpYyBvbkZvY3VzSW4oKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmRyb3Bkb3duU2VydmljZS5pc0FuaW1hdGluZykge1xuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9wZW4oKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoU2VydmljZS5xdWVyeS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBPbmx5IG9wZW4gb24gY2xpY2sgd2hlbiB0aGVyZSBpcyBhIHF1ZXJ5IGVudGVyZWQuXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5zZXRPcGVuU3RhdGUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkZvY3VzT3V0KGU6SUZvY3VzRXZlbnQpOnZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlYWRzIHRoZSBzcGVjaWZpZWQgZmllbGQgZnJvbSBhbiBpdGVtLlxuICAgIHB1YmxpYyByZWFkVmFsdWUob2JqZWN0OlQpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBVdGlsLk9iamVjdC5yZWFkVmFsdWU8VCwgc3RyaW5nPihvYmplY3QsIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zRmllbGQpO1xuICAgIH1cbn1cbiJdfQ==