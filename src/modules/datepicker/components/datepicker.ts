import { Component, HostBinding, Directive, EventEmitter, Output, HostListener } from "@angular/core";
import { CalendarService, CalendarMode } from "./../services/calendar.service";
import { DatetimeConfig } from "../classes/calendar-config";

export type DatepickerMode = "year" | "month" | "date" | "datetime" | "time";

export const DatepickerMode = {
    Year: "year" as DatepickerMode,
    Month: "month" as DatepickerMode,
    Date: "date" as DatepickerMode,
    Datetime: "datetime" as DatepickerMode,
    Time: "time" as DatepickerMode
};

@Component({
    selector: "sui-datepicker",
    template: `
<ng-container [ngSwitch]="service.currentView">
    <sui-calendar-year-view [service]="service" *ngSwitchCase="0"></sui-calendar-year-view>
    <sui-calendar-month-view [service]="service" *ngSwitchCase="1"></sui-calendar-month-view>    
    <sui-calendar-date-view [service]="service" *ngSwitchCase="2"></sui-calendar-date-view>    
    <sui-calendar-hour-view [service]="service" *ngSwitchCase="3"></sui-calendar-hour-view>    
    <sui-calendar-minute-view [service]="service" *ngSwitchCase="4"></sui-calendar-minute-view>    
</ng-container>
`,
    styles: [`
:host {
    user-select: none;
}
`]
})
export class SuiDatepicker {
    @HostBinding("class.ui")
    @HostBinding("class.active")
    @HostBinding("class.calendar")
    private _calendarClasses:boolean;

    public service:CalendarService;

    constructor(localizationService:SuiLocalizationService) {
        this.service = new CalendarService(new DatetimeConfig(), localizationService.getValues().datepicker);

        this._calendarClasses = true;
    }
}