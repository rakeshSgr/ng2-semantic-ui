var SuiMultiSelectValueAccessor_1;
import { __decorate, __metadata } from "tslib";
import { Component, HostBinding, ElementRef, EventEmitter, Output, Input, Directive } from "@angular/core";
import { KeyCode, customValueAccessorFactory, CustomValueAccessor } from "../../../misc/util/internal";
import { SuiLocalizationService } from "../../../behaviors/localization/internal";
import { SuiSelectBase } from "../classes/select-base";
let SuiMultiSelect = class SuiMultiSelect extends SuiSelectBase {
    constructor(element, localizationService) {
        super(element, localizationService);
        this.selectedOptions = [];
        this.selectedOptionsChange = new EventEmitter();
        this.hasLabels = true;
        this.hasClasses = true;
    }
    get filteredOptions() {
        if (this.maxSelectedReached) {
            // If we have reached the maximum number of selections, then empty the results completely.
            return [];
        }
        const searchResults = this.searchService.results;
        if (!this.hasLabels) {
            return searchResults;
        }
        else {
            // Returns the search results \ selected options.
            return searchResults
                .filter(r => this.selectedOptions.find(o => r === o) == undefined);
        }
    }
    get availableOptions() {
        return this.filteredOptions;
    }
    get hasLabels() {
        return this._hasLabels;
    }
    set hasLabels(hasLabels) {
        this._hasLabels = hasLabels;
    }
    get placeholder() {
        return this._placeholder || this.localeValues.multi.placeholder;
    }
    set placeholder(placeholder) {
        this._placeholder = placeholder;
    }
    get zeroSelectionText() {
        return this._zeroSelectionText;
    }
    set zeroSelectionText(zeroSelectionText) {
        this._zeroSelectionText = zeroSelectionText;
    }
    get defaultSelectionText() {
        return this._defaultSelectionText || this.localeValues.multi.placeholder;
    }
    set defaultSelectionText(defaultSelectionText) {
        this._defaultSelectionText = `#{count} ${defaultSelectionText}`;
    }
    get maxSelectedReached() {
        if (this.maxSelected == undefined) {
            // If there is no maximum then we can immediately return.
            return false;
        }
        return this.selectedOptions.length === this.maxSelected;
    }
    get maxSelectedMessage() {
        return this._localizationService.interpolate(this.localeValues.multi.maxSelectedMessage, [["max", this.maxSelected.toString()]]);
    }
    get selectedMessage() {
        if (this.selectedOptions.length > 0) {
            return this._localizationService.interpolate(this._defaultSelectionText ? this._defaultSelectionText : this.localeValues.multi.selectedMessage, [["count", this.selectedOptions.length.toString()]]);
        }
        else {
            return this._localizationService.interpolate(this._defaultSelectionText ? this._defaultSelectionText : this.localeValues.multi.selectedMessage, [["count", this._zeroSelectionText ? this._zeroSelectionText : this.selectedOptions.length.toString()]]);
        }
    }
    optionsUpdateHook() {
        if (!this._writtenOptions && this.selectedOptions.length > 0) {
            // We need to check the options still exist.
            this.writeValue(this.selectedOptions.map(o => this.valueGetter(o)));
        }
        if (this._writtenOptions && this.searchService.options.length > 0) {
            // If there were values written by ngModel before the options had been loaded, this runs to fix it.
            this.selectedOptions = this._writtenOptions
                // non-null assertion added here because Typescript doesn't recognise the non-null filter.
                .map(v => this.findOption(this.searchService.options, v))
                .filter(v => v != undefined);
            if (this.selectedOptions.length === this._writtenOptions.length) {
                this._writtenOptions = undefined;
            }
        }
    }
    initialiseRenderedOption(option) {
        super.initialiseRenderedOption(option);
        // Boldens the item so it appears selected in the dropdown.
        option.isActive = !this.hasLabels && this.selectedOptions.indexOf(option.value) !== -1;
    }
    selectOption(option) {
        if (this.selectedOptions.indexOf(option) !== -1) {
            this.deselectOption(option);
            return;
        }
        this.selectedOptions.push(option);
        this.selectedOptionsChange.emit(this.selectedOptions.map(o => this.valueGetter(o)));
        this.resetQuery(false);
        // Automatically refocus the search input for better keyboard accessibility.
        this.focus();
        if (!this.hasLabels) {
            this.onAvailableOptionsRendered();
        }
    }
    writeValue(values) {
        if (values instanceof Array) {
            if (this.searchService.options.length > 0) {
                // If the options have already been loaded, we can immediately match the ngModel values to options.
                this.selectedOptions = values
                    // non-null assertion added here because Typescript doesn't recognise the non-null filter.
                    .map(v => this.findOption(this.searchService.options, v))
                    .filter(v => v != undefined);
            }
            if (values.length > 0 && this.selectedOptions.length === 0) {
                if (this.valueField && this.searchService.hasItemLookup) {
                    // If the search service has a selected lookup function, make use of that to load the initial values.
                    this.searchService
                        .initialLookup(values)
                        .then(items => this.selectedOptions = items);
                }
                else {
                    // Otherwise, cache the written value for when options are set.
                    this._writtenOptions = values;
                }
            }
            if (values.length === 0) {
                this.selectedOptions = [];
            }
        }
        else {
            this.selectedOptions = [];
        }
    }
    deselectOption(option) {
        // Update selected options to the previously selected options \ {option}.
        this.selectedOptions = this.selectedOptions.filter(so => so !== option);
        this.selectedOptionsChange.emit(this.selectedOptions.map(o => this.valueGetter(o)));
        // Automatically refocus the search input for better keyboard accessibility.
        this.focus();
        if (!this.hasLabels) {
            this.onAvailableOptionsRendered();
        }
    }
    onQueryInputKeydown(event) {
        if (event.keyCode === KeyCode.Backspace && this.query === "" && this.selectedOptions.length > 0) {
            // Deselect the rightmost option when the user presses backspace in the search input.
            this.deselectOption(this.selectedOptions[this.selectedOptions.length - 1]);
        }
    }
};
SuiMultiSelect.ctorParameters = () => [
    { type: ElementRef },
    { type: SuiLocalizationService }
];
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], SuiMultiSelect.prototype, "selectedOptionsChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SuiMultiSelect.prototype, "hasLabels", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SuiMultiSelect.prototype, "placeholder", null);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SuiMultiSelect.prototype, "maxSelected", void 0);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SuiMultiSelect.prototype, "zeroSelectionText", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SuiMultiSelect.prototype, "defaultSelectionText", null);
__decorate([
    HostBinding("class.multiple"),
    __metadata("design:type", Boolean)
], SuiMultiSelect.prototype, "hasClasses", void 0);
SuiMultiSelect = __decorate([
    Component({
        selector: "sui-multi-select",
        template: `
<!-- Dropdown icon -->
<i class="{{ icon }} icon" (click)="onCaretClick($event)"></i>

<ng-container *ngIf="hasLabels">
<!-- Multi-select labels -->
    <sui-multi-select-label *ngFor="let selected of selectedOptions;"
                            [value]="selected"
                            [query]="query"
                            [formatter]="configuredFormatter"
                            [template]="optionTemplate"
                            (deselected)="deselectOption($event)"></sui-multi-select-label>
</ng-container>

<!-- Query input -->
<input suiSelectSearch
       type="text"
       [hidden]="!isSearchable || isSearchExternal">

<!-- Helper text -->
<div class="text"
     [class.default]="hasLabels"
     [class.filtered]="!!query && !isSearchExternal">
    
    <!-- Placeholder text -->
    <ng-container *ngIf="hasLabels; else selectedBlock">{{ placeholder }}</ng-container>
    
    <!-- Summary shown when labels are hidden -->
    <ng-template #selectedBlock> {{ selectedMessage }}</ng-template>
</div>

<!-- Select dropdown menu -->
<div class="menu"
     suiDropdownMenu
     [menuTransition]="transition"
     [menuTransitionDuration]="transitionDuration"
     [menuAutoSelectFirst]="true">

    <ng-content></ng-content>
    <ng-container *ngIf="availableOptions.length == 0 ">
        <div *ngIf="!maxSelectedReached" class="message">{{ localeValues.noResultsMessage }}</div>
        <div *ngIf="maxSelectedReached" class="message">{{ maxSelectedMessage }}</div>
    </ng-container>
</div>
`,
        styles: [`
:host input.search {
    width: 12em !important;
}
`]
    }),
    __metadata("design:paramtypes", [ElementRef, SuiLocalizationService])
], SuiMultiSelect);
export { SuiMultiSelect };
// Value accessor directive for the select to support ngModel.
let SuiMultiSelectValueAccessor = SuiMultiSelectValueAccessor_1 = class SuiMultiSelectValueAccessor extends CustomValueAccessor {
    constructor(host) {
        super(host);
    }
};
SuiMultiSelectValueAccessor.ctorParameters = () => [
    { type: SuiMultiSelect }
];
SuiMultiSelectValueAccessor = SuiMultiSelectValueAccessor_1 = __decorate([
    Directive({
        selector: "sui-multi-select",
        host: {
            "(selectedOptionsChange)": "onChange($event)",
            "(touched)": "onTouched()"
        },
        providers: [customValueAccessorFactory(SuiMultiSelectValueAccessor_1)]
    }),
    __metadata("design:paramtypes", [SuiMultiSelect])
], SuiMultiSelectValueAccessor);
export { SuiMultiSelectValueAccessor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktc2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9zZWxlY3QvY29tcG9uZW50cy9tdWx0aS1zZWxlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNHLE9BQU8sRUFBNEIsT0FBTyxFQUFFLDBCQUEwQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakksT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBd0R2RCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFxQixTQUFRLGFBQW1CO0lBd0d6RCxZQUFZLE9BQWtCLEVBQUUsbUJBQTBDO1FBQ3RFLEtBQUssQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUVwQyxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVyRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBeEdELElBQVcsZUFBZTtRQUN0QixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUN6QiwwRkFBMEY7WUFDMUYsT0FBTyxFQUFFLENBQUM7U0FDYjtRQUVELE1BQU0sYUFBYSxHQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBRXJELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLE9BQU8sYUFBYSxDQUFDO1NBQ3hCO2FBQU07WUFDSCxpREFBaUQ7WUFDakQsT0FBTyxhQUFhO2lCQUNmLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDO1NBQzFFO0lBQ0wsQ0FBQztJQUVELElBQVcsZ0JBQWdCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUNoQyxDQUFDO0lBS0QsSUFBVyxTQUFTO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBVyxTQUFTLENBQUMsU0FBaUI7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUtELElBQVcsV0FBVztRQUNsQixPQUFPLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxJQUFXLFdBQVcsQ0FBQyxXQUFrQjtRQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztJQUNwQyxDQUFDO0lBU0QsSUFBVyxpQkFBaUI7UUFDeEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDbkMsQ0FBQztJQUVELElBQVcsaUJBQWlCLENBQUMsaUJBQXdCO1FBQ2pELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxpQkFBaUIsQ0FBQztJQUNoRCxDQUFDO0lBR0QsSUFBVyxvQkFBb0I7UUFDM0IsT0FBTyxJQUFJLENBQUMscUJBQXFCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO0lBQzdFLENBQUM7SUFFRCxJQUFXLG9CQUFvQixDQUFDLG9CQUEyQjtRQUN2RCxJQUFJLENBQUMscUJBQXFCLEdBQUcsWUFBWSxvQkFBb0IsRUFBRSxDQUFDO0lBQ3BFLENBQUM7SUFFRCxJQUFXLGtCQUFrQjtRQUN6QixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksU0FBUyxFQUFFO1lBQy9CLHlEQUF5RDtZQUN6RCxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1RCxDQUFDO0lBRUQsSUFBVyxrQkFBa0I7UUFDekIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFDMUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxJQUFXLGVBQWU7UUFDdEIsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBSSxDQUFDLEVBQUU7WUFDbEMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUN4QyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUNqRyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzVEO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQ3hDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQ2pHLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hIO0lBQ0wsQ0FBQztJQWVTLGlCQUFpQjtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDMUQsNENBQTRDO1lBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2RTtRQUVELElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQy9ELG1HQUFtRztZQUNuRyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlO2dCQUN2QywwRkFBMEY7aUJBQ3pGLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFFLENBQUM7aUJBQ3pELE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQztZQUVqQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQzthQUNwQztTQUNKO0lBQ0wsQ0FBQztJQUVTLHdCQUF3QixDQUFDLE1BQXlCO1FBQ3hELEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV2QywyREFBMkQ7UUFDM0QsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFFTSxZQUFZLENBQUMsTUFBUTtRQUN4QixJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzdDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUIsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXBGLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdkIsNEVBQTRFO1FBQzVFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUViLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQUVNLFVBQVUsQ0FBQyxNQUFVO1FBQ3hCLElBQUksTUFBTSxZQUFZLEtBQUssRUFBRTtZQUN6QixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3ZDLG1HQUFtRztnQkFDbkcsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNO29CQUN6QiwwRkFBMEY7cUJBQ3pGLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFFLENBQUM7cUJBQ3pELE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQzthQUNwQztZQUNELElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN4RCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUU7b0JBQ3JELHFHQUFxRztvQkFDckcsSUFBSSxDQUFDLGFBQWE7eUJBQ2IsYUFBYSxDQUFDLE1BQU0sQ0FBQzt5QkFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsQ0FBQztpQkFDcEQ7cUJBQU07b0JBQ0gsK0RBQStEO29CQUMvRCxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztpQkFDakM7YUFDSjtZQUNELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO2FBQzdCO1NBQ0o7YUFBTTtZQUNILElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQUVNLGNBQWMsQ0FBQyxNQUFRO1FBQzFCLHlFQUF5RTtRQUN6RSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVwRiw0RUFBNEU7UUFDNUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7U0FDckM7SUFDTCxDQUFDO0lBRU0sbUJBQW1CLENBQUMsS0FBbUI7UUFDMUMsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzdGLHFGQUFxRjtZQUNyRixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5RTtJQUNMLENBQUM7Q0FDSixDQUFBOztZQXJHdUIsVUFBVTtZQUFzQixzQkFBc0I7O0FBbEcxRTtJQURDLE1BQU0sRUFBRTs4QkFDb0IsWUFBWTs2REFBTTtBQTBCL0M7SUFEQyxLQUFLLEVBQUU7OzsrQ0FHUDtBQVNEO0lBREMsS0FBSyxFQUFFOzs7aURBR1A7QUFPRDtJQURDLEtBQUssRUFBRTs7bURBQ2tCO0FBTTFCO0lBREMsS0FBSyxFQUFFOzs7dURBR1A7QUFPRDtJQURDLEtBQUssRUFBRTs7OzBEQUdQO0FBaUNEO0lBREMsV0FBVyxDQUFDLGdCQUFnQixDQUFDOztrREFDSztBQXRHMUIsY0FBYztJQXJEMUIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBNENiO2lCQUNZOzs7O0NBSVo7S0FDQSxDQUFDO3FDQXlHc0IsVUFBVSxFQUFzQixzQkFBc0I7R0F4R2pFLGNBQWMsQ0E2TTFCO1NBN01ZLGNBQWM7QUErTTNCLDhEQUE4RDtBQVM5RCxJQUFhLDJCQUEyQixtQ0FBeEMsTUFBYSwyQkFBa0MsU0FBUSxtQkFBOEM7SUFDakcsWUFBWSxJQUF5QjtRQUNqQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEIsQ0FBQztDQUNKLENBQUE7O1lBSG9CLGNBQWM7O0FBRHRCLDJCQUEyQjtJQVJ2QyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLElBQUksRUFBRTtZQUNGLHlCQUF5QixFQUFFLGtCQUFrQjtZQUM3QyxXQUFXLEVBQUUsYUFBYTtTQUM3QjtRQUNELFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDLDZCQUEyQixDQUFDLENBQUM7S0FDdkUsQ0FBQztxQ0FFbUIsY0FBYztHQUR0QiwyQkFBMkIsQ0FJdkM7U0FKWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQsIERpcmVjdGl2ZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3QsIEtleUNvZGUsIGN1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5LCBDdXN0b21WYWx1ZUFjY2Vzc29yIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9iZWhhdmlvcnMvbG9jYWxpemF0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlTZWxlY3RCYXNlIH0gZnJvbSBcIi4uL2NsYXNzZXMvc2VsZWN0LWJhc2VcIjtcbmltcG9ydCB7IFN1aVNlbGVjdE9wdGlvbiB9IGZyb20gXCIuL3NlbGVjdC1vcHRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLW11bHRpLXNlbGVjdFwiLFxuICAgIHRlbXBsYXRlOiBgXG48IS0tIERyb3Bkb3duIGljb24gLS0+XG48aSBjbGFzcz1cInt7IGljb24gfX0gaWNvblwiIChjbGljayk9XCJvbkNhcmV0Q2xpY2soJGV2ZW50KVwiPjwvaT5cblxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc0xhYmVsc1wiPlxuPCEtLSBNdWx0aS1zZWxlY3QgbGFiZWxzIC0tPlxuICAgIDxzdWktbXVsdGktc2VsZWN0LWxhYmVsICpuZ0Zvcj1cImxldCBzZWxlY3RlZCBvZiBzZWxlY3RlZE9wdGlvbnM7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwic2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtxdWVyeV09XCJxdWVyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdHRlcl09XCJjb25maWd1cmVkRm9ybWF0dGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwib3B0aW9uVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkZXNlbGVjdGVkKT1cImRlc2VsZWN0T3B0aW9uKCRldmVudClcIj48L3N1aS1tdWx0aS1zZWxlY3QtbGFiZWw+XG48L25nLWNvbnRhaW5lcj5cblxuPCEtLSBRdWVyeSBpbnB1dCAtLT5cbjxpbnB1dCBzdWlTZWxlY3RTZWFyY2hcbiAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgW2hpZGRlbl09XCIhaXNTZWFyY2hhYmxlIHx8IGlzU2VhcmNoRXh0ZXJuYWxcIj5cblxuPCEtLSBIZWxwZXIgdGV4dCAtLT5cbjxkaXYgY2xhc3M9XCJ0ZXh0XCJcbiAgICAgW2NsYXNzLmRlZmF1bHRdPVwiaGFzTGFiZWxzXCJcbiAgICAgW2NsYXNzLmZpbHRlcmVkXT1cIiEhcXVlcnkgJiYgIWlzU2VhcmNoRXh0ZXJuYWxcIj5cbiAgICBcbiAgICA8IS0tIFBsYWNlaG9sZGVyIHRleHQgLS0+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc0xhYmVsczsgZWxzZSBzZWxlY3RlZEJsb2NrXCI+e3sgcGxhY2Vob2xkZXIgfX08L25nLWNvbnRhaW5lcj5cbiAgICBcbiAgICA8IS0tIFN1bW1hcnkgc2hvd24gd2hlbiBsYWJlbHMgYXJlIGhpZGRlbiAtLT5cbiAgICA8bmctdGVtcGxhdGUgI3NlbGVjdGVkQmxvY2s+IHt7IHNlbGVjdGVkTWVzc2FnZSB9fTwvbmctdGVtcGxhdGU+XG48L2Rpdj5cblxuPCEtLSBTZWxlY3QgZHJvcGRvd24gbWVudSAtLT5cbjxkaXYgY2xhc3M9XCJtZW51XCJcbiAgICAgc3VpRHJvcGRvd25NZW51XG4gICAgIFttZW51VHJhbnNpdGlvbl09XCJ0cmFuc2l0aW9uXCJcbiAgICAgW21lbnVUcmFuc2l0aW9uRHVyYXRpb25dPVwidHJhbnNpdGlvbkR1cmF0aW9uXCJcbiAgICAgW21lbnVBdXRvU2VsZWN0Rmlyc3RdPVwidHJ1ZVwiPlxuXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJhdmFpbGFibGVPcHRpb25zLmxlbmd0aCA9PSAwIFwiPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiIW1heFNlbGVjdGVkUmVhY2hlZFwiIGNsYXNzPVwibWVzc2FnZVwiPnt7IGxvY2FsZVZhbHVlcy5ub1Jlc3VsdHNNZXNzYWdlIH19PC9kaXY+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJtYXhTZWxlY3RlZFJlYWNoZWRcIiBjbGFzcz1cIm1lc3NhZ2VcIj57eyBtYXhTZWxlY3RlZE1lc3NhZ2UgfX08L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgXG46aG9zdCBpbnB1dC5zZWFyY2gge1xuICAgIHdpZHRoOiAxMmVtICFpbXBvcnRhbnQ7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlNdWx0aVNlbGVjdDxULCBVPiBleHRlbmRzIFN1aVNlbGVjdEJhc2U8VCwgVT4gaW1wbGVtZW50cyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3Q8VVtdPiB7XG4gICAgcHVibGljIHNlbGVjdGVkT3B0aW9uczpUW107XG4gICAgLy8gU3RvcmVzIHRoZSB2YWx1ZXMgd3JpdHRlbiBieSBuZ01vZGVsIGJlZm9yZSBpdCBjYW4gYmUgbWF0Y2hlZCB0byBhbiBvcHRpb24gZnJvbSBgb3B0aW9uc2AuXG4gICAgcHJpdmF0ZSBfd3JpdHRlbk9wdGlvbnM/OlVbXTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBzZWxlY3RlZE9wdGlvbnNDaGFuZ2U6RXZlbnRFbWl0dGVyPFVbXT47XG5cbiAgICBwdWJsaWMgZ2V0IGZpbHRlcmVkT3B0aW9ucygpOlRbXSB7XG4gICAgICAgIGlmICh0aGlzLm1heFNlbGVjdGVkUmVhY2hlZCkge1xuICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSByZWFjaGVkIHRoZSBtYXhpbXVtIG51bWJlciBvZiBzZWxlY3Rpb25zLCB0aGVuIGVtcHR5IHRoZSByZXN1bHRzIGNvbXBsZXRlbHkuXG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWFyY2hSZXN1bHRzOlRbXSA9IHRoaXMuc2VhcmNoU2VydmljZS5yZXN1bHRzO1xuXG4gICAgICAgIGlmICghdGhpcy5oYXNMYWJlbHMpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWFyY2hSZXN1bHRzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gUmV0dXJucyB0aGUgc2VhcmNoIHJlc3VsdHMgXFwgc2VsZWN0ZWQgb3B0aW9ucy5cbiAgICAgICAgICAgIHJldHVybiBzZWFyY2hSZXN1bHRzXG4gICAgICAgICAgICAgICAgLmZpbHRlcihyID0+IHRoaXMuc2VsZWN0ZWRPcHRpb25zLmZpbmQobyA9PiByID09PSBvKSA9PSB1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhdmFpbGFibGVPcHRpb25zKCk6VFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyZWRPcHRpb25zO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2hhc0xhYmVsczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGhhc0xhYmVscygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFzTGFiZWxzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaGFzTGFiZWxzKGhhc0xhYmVsczpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2hhc0xhYmVscyA9IGhhc0xhYmVscztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9wbGFjZWhvbGRlcjpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcGxhY2Vob2xkZXIoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXIgfHwgdGhpcy5sb2NhbGVWYWx1ZXMubXVsdGkucGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwbGFjZWhvbGRlcihwbGFjZWhvbGRlcjpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtYXhTZWxlY3RlZDpudW1iZXI7XG5cbiAgICBwcml2YXRlIF96ZXJvU2VsZWN0aW9uVGV4dDpzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZGVmYXVsdFNlbGVjdGlvblRleHQ6c3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHplcm9TZWxlY3Rpb25UZXh0KCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3plcm9TZWxlY3Rpb25UZXh0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgemVyb1NlbGVjdGlvblRleHQoemVyb1NlbGVjdGlvblRleHQ6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3plcm9TZWxlY3Rpb25UZXh0ID0gemVyb1NlbGVjdGlvblRleHQ7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGRlZmF1bHRTZWxlY3Rpb25UZXh0KCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRTZWxlY3Rpb25UZXh0IHx8IHRoaXMubG9jYWxlVmFsdWVzLm11bHRpLnBsYWNlaG9sZGVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgZGVmYXVsdFNlbGVjdGlvblRleHQoZGVmYXVsdFNlbGVjdGlvblRleHQ6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRTZWxlY3Rpb25UZXh0ID0gYCN7Y291bnR9ICR7ZGVmYXVsdFNlbGVjdGlvblRleHR9YDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG1heFNlbGVjdGVkUmVhY2hlZCgpOmJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5tYXhTZWxlY3RlZCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIG1heGltdW0gdGhlbiB3ZSBjYW4gaW1tZWRpYXRlbHkgcmV0dXJuLlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IHRoaXMubWF4U2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBtYXhTZWxlY3RlZE1lc3NhZ2UoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxpemF0aW9uU2VydmljZS5pbnRlcnBvbGF0ZShcbiAgICAgICAgICAgIHRoaXMubG9jYWxlVmFsdWVzLm11bHRpLm1heFNlbGVjdGVkTWVzc2FnZSxcbiAgICAgICAgICAgIFtbXCJtYXhcIiwgdGhpcy5tYXhTZWxlY3RlZC50b1N0cmluZygpXV0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWRNZXNzYWdlKCk6c3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCAgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxpemF0aW9uU2VydmljZS5pbnRlcnBvbGF0ZShcbiAgICAgICAgICAgICAgICB0aGlzLl9kZWZhdWx0U2VsZWN0aW9uVGV4dCA/IHRoaXMuX2RlZmF1bHRTZWxlY3Rpb25UZXh0IDogdGhpcy5sb2NhbGVWYWx1ZXMubXVsdGkuc2VsZWN0ZWRNZXNzYWdlLFxuICAgICAgICAgICAgICAgIFtbXCJjb3VudFwiLCB0aGlzLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGgudG9TdHJpbmcoKV1dKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGl6YXRpb25TZXJ2aWNlLmludGVycG9sYXRlKFxuICAgICAgICAgICAgICAgIHRoaXMuX2RlZmF1bHRTZWxlY3Rpb25UZXh0ID8gdGhpcy5fZGVmYXVsdFNlbGVjdGlvblRleHQgOiB0aGlzLmxvY2FsZVZhbHVlcy5tdWx0aS5zZWxlY3RlZE1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgW1tcImNvdW50XCIsIHRoaXMuX3plcm9TZWxlY3Rpb25UZXh0ID8gdGhpcy5femVyb1NlbGVjdGlvblRleHQgOiB0aGlzLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGgudG9TdHJpbmcoKV1dKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLm11bHRpcGxlXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6RWxlbWVudFJlZiwgbG9jYWxpemF0aW9uU2VydmljZTpTdWlMb2NhbGl6YXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKGVsZW1lbnQsIGxvY2FsaXphdGlvblNlcnZpY2UpO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gW107XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxVW10+KCk7XG5cbiAgICAgICAgdGhpcy5oYXNMYWJlbHMgPSB0cnVlO1xuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvcHRpb25zVXBkYXRlSG9vaygpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX3dyaXR0ZW5PcHRpb25zICYmIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgdGhlIG9wdGlvbnMgc3RpbGwgZXhpc3QuXG4gICAgICAgICAgICB0aGlzLndyaXRlVmFsdWUodGhpcy5zZWxlY3RlZE9wdGlvbnMubWFwKG8gPT4gdGhpcy52YWx1ZUdldHRlcihvKSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX3dyaXR0ZW5PcHRpb25zICYmIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIHdlcmUgdmFsdWVzIHdyaXR0ZW4gYnkgbmdNb2RlbCBiZWZvcmUgdGhlIG9wdGlvbnMgaGFkIGJlZW4gbG9hZGVkLCB0aGlzIHJ1bnMgdG8gZml4IGl0LlxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSB0aGlzLl93cml0dGVuT3B0aW9uc1xuICAgICAgICAgICAgICAgIC8vIG5vbi1udWxsIGFzc2VydGlvbiBhZGRlZCBoZXJlIGJlY2F1c2UgVHlwZXNjcmlwdCBkb2Vzbid0IHJlY29nbmlzZSB0aGUgbm9uLW51bGwgZmlsdGVyLlxuICAgICAgICAgICAgICAgIC5tYXAodiA9PiB0aGlzLmZpbmRPcHRpb24odGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnMsIHYpISlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHYgPT4gdiAhPSB1bmRlZmluZWQpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSB0aGlzLl93cml0dGVuT3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl93cml0dGVuT3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0aWFsaXNlUmVuZGVyZWRPcHRpb24ob3B0aW9uOlN1aVNlbGVjdE9wdGlvbjxUPik6dm9pZCB7XG4gICAgICAgIHN1cGVyLmluaXRpYWxpc2VSZW5kZXJlZE9wdGlvbihvcHRpb24pO1xuXG4gICAgICAgIC8vIEJvbGRlbnMgdGhlIGl0ZW0gc28gaXQgYXBwZWFycyBzZWxlY3RlZCBpbiB0aGUgZHJvcGRvd24uXG4gICAgICAgIG9wdGlvbi5pc0FjdGl2ZSA9ICF0aGlzLmhhc0xhYmVscyAmJiB0aGlzLnNlbGVjdGVkT3B0aW9ucy5pbmRleE9mKG9wdGlvbi52YWx1ZSkgIT09IC0xO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RPcHRpb24ob3B0aW9uOlQpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbnMuaW5kZXhPZihvcHRpb24pICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5kZXNlbGVjdE9wdGlvbihvcHRpb24pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zLnB1c2gob3B0aW9uKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnNDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkT3B0aW9ucy5tYXAobyA9PiB0aGlzLnZhbHVlR2V0dGVyKG8pKSk7XG5cbiAgICAgICAgdGhpcy5yZXNldFF1ZXJ5KGZhbHNlKTtcblxuICAgICAgICAvLyBBdXRvbWF0aWNhbGx5IHJlZm9jdXMgdGhlIHNlYXJjaCBpbnB1dCBmb3IgYmV0dGVyIGtleWJvYXJkIGFjY2Vzc2liaWxpdHkuXG4gICAgICAgIHRoaXMuZm9jdXMoKTtcblxuICAgICAgICBpZiAoIXRoaXMuaGFzTGFiZWxzKSB7XG4gICAgICAgICAgICB0aGlzLm9uQXZhaWxhYmxlT3B0aW9uc1JlbmRlcmVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZXM6VVtdKTp2b2lkIHtcbiAgICAgICAgaWYgKHZhbHVlcyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBvcHRpb25zIGhhdmUgYWxyZWFkeSBiZWVuIGxvYWRlZCwgd2UgY2FuIGltbWVkaWF0ZWx5IG1hdGNoIHRoZSBuZ01vZGVsIHZhbHVlcyB0byBvcHRpb25zLlxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vbi1udWxsIGFzc2VydGlvbiBhZGRlZCBoZXJlIGJlY2F1c2UgVHlwZXNjcmlwdCBkb2Vzbid0IHJlY29nbmlzZSB0aGUgbm9uLW51bGwgZmlsdGVyLlxuICAgICAgICAgICAgICAgICAgICAubWFwKHYgPT4gdGhpcy5maW5kT3B0aW9uKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zLCB2KSEpXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIodiA9PiB2ICE9IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA+IDAgJiYgdGhpcy5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVGaWVsZCAmJiB0aGlzLnNlYXJjaFNlcnZpY2UuaGFzSXRlbUxvb2t1cCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgc2VhcmNoIHNlcnZpY2UgaGFzIGEgc2VsZWN0ZWQgbG9va3VwIGZ1bmN0aW9uLCBtYWtlIHVzZSBvZiB0aGF0IHRvIGxvYWQgdGhlIGluaXRpYWwgdmFsdWVzLlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbml0aWFsTG9va3VwKHZhbHVlcylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGl0ZW1zID0+IHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gaXRlbXMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgY2FjaGUgdGhlIHdyaXR0ZW4gdmFsdWUgZm9yIHdoZW4gb3B0aW9ucyBhcmUgc2V0LlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93cml0dGVuT3B0aW9ucyA9IHZhbHVlcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGRlc2VsZWN0T3B0aW9uKG9wdGlvbjpUKTp2b2lkIHtcbiAgICAgICAgLy8gVXBkYXRlIHNlbGVjdGVkIG9wdGlvbnMgdG8gdGhlIHByZXZpb3VzbHkgc2VsZWN0ZWQgb3B0aW9ucyBcXCB7b3B0aW9ufS5cbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSB0aGlzLnNlbGVjdGVkT3B0aW9ucy5maWx0ZXIoc28gPT4gc28gIT09IG9wdGlvbik7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZE9wdGlvbnMubWFwKG8gPT4gdGhpcy52YWx1ZUdldHRlcihvKSkpO1xuXG4gICAgICAgIC8vIEF1dG9tYXRpY2FsbHkgcmVmb2N1cyB0aGUgc2VhcmNoIGlucHV0IGZvciBiZXR0ZXIga2V5Ym9hcmQgYWNjZXNzaWJpbGl0eS5cbiAgICAgICAgdGhpcy5mb2N1cygpO1xuXG4gICAgICAgIGlmICghdGhpcy5oYXNMYWJlbHMpIHtcbiAgICAgICAgICAgIHRoaXMub25BdmFpbGFibGVPcHRpb25zUmVuZGVyZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblF1ZXJ5SW5wdXRLZXlkb3duKGV2ZW50OktleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZS5CYWNrc3BhY2UgJiYgdGhpcy5xdWVyeSA9PT0gXCJcIiAmJiB0aGlzLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBEZXNlbGVjdCB0aGUgcmlnaHRtb3N0IG9wdGlvbiB3aGVuIHRoZSB1c2VyIHByZXNzZXMgYmFja3NwYWNlIGluIHRoZSBzZWFyY2ggaW5wdXQuXG4gICAgICAgICAgICB0aGlzLmRlc2VsZWN0T3B0aW9uKHRoaXMuc2VsZWN0ZWRPcHRpb25zW3RoaXMuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gVmFsdWUgYWNjZXNzb3IgZGlyZWN0aXZlIGZvciB0aGUgc2VsZWN0IHRvIHN1cHBvcnQgbmdNb2RlbC5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1tdWx0aS1zZWxlY3RcIixcbiAgICBob3N0OiB7XG4gICAgICAgIFwiKHNlbGVjdGVkT3B0aW9uc0NoYW5nZSlcIjogXCJvbkNoYW5nZSgkZXZlbnQpXCIsXG4gICAgICAgIFwiKHRvdWNoZWQpXCI6IFwib25Ub3VjaGVkKClcIlxuICAgIH0sXG4gICAgcHJvdmlkZXJzOiBbY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnkoU3VpTXVsdGlTZWxlY3RWYWx1ZUFjY2Vzc29yKV1cbn0pXG5leHBvcnQgY2xhc3MgU3VpTXVsdGlTZWxlY3RWYWx1ZUFjY2Vzc29yPFQsIFU+IGV4dGVuZHMgQ3VzdG9tVmFsdWVBY2Nlc3NvcjxVW10sIFN1aU11bHRpU2VsZWN0PFQsIFU+PiB7XG4gICAgY29uc3RydWN0b3IoaG9zdDpTdWlNdWx0aVNlbGVjdDxULCBVPikge1xuICAgICAgICBzdXBlcihob3N0KTtcbiAgICB9XG59XG4iXX0=