/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { SuiMessageModule, SuiPaginationModule } from "./collections/internal";
import { SuiAccordionModule, SuiCheckboxModule, SuiCollapseModule, SuiDatepickerModule, SuiDimmerModule, SuiDropdownModule, SuiModalModule, SuiPopupModule, SuiProgressModule, SuiRatingModule, SuiSearchModule, SuiSidebarModule, SuiTabsModule, SuiSelectModule, SuiTransitionModule } from "./modules/internal";
import { SuiLocalizationModule } from "./behaviors/internal";
import { SuiUtilityModule } from "./misc/internal";
export class SuiModule {
}
SuiModule.decorators = [
    { type: NgModule, args: [{
                exports: [
                    SuiMessageModule,
                    SuiPaginationModule,
                    SuiAccordionModule,
                    SuiCheckboxModule,
                    SuiCollapseModule,
                    SuiDatepickerModule,
                    SuiDimmerModule,
                    SuiDropdownModule,
                    SuiModalModule,
                    SuiPopupModule,
                    SuiProgressModule,
                    SuiRatingModule,
                    SuiSearchModule,
                    SuiSelectModule,
                    SuiSidebarModule,
                    SuiTabsModule,
                    SuiTransitionModule,
                    SuiLocalizationModule,
                    SuiUtilityModule
                ]
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VpLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbInN1aS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHekMsT0FBTyxFQUNILGdCQUFnQixFQUNoQixtQkFBbUIsRUFDdEIsTUFBTSx3QkFBd0IsQ0FBQztBQUdoQyxPQUFPLEVBQ0gsa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixpQkFBaUIsRUFDakIsbUJBQW1CLEVBQ25CLGVBQWUsRUFDZixpQkFBaUIsRUFDakIsY0FBYyxFQUNkLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsZUFBZSxFQUNmLGVBQWUsRUFDZixnQkFBZ0IsRUFDaEIsYUFBYSxFQUNiLGVBQWUsRUFDZixtQkFBbUIsRUFDdEIsTUFBTSxvQkFBb0IsQ0FBQztBQUc1QixPQUFPLEVBQ0gscUJBQXFCLEVBQ3hCLE1BQU0sc0JBQXNCLENBQUM7QUFHOUIsT0FBTyxFQUNILGdCQUFnQixFQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBZ0N6QixNQUFNLE9BQU8sU0FBUzs7O1lBOUJyQixRQUFRLFNBQUM7Z0JBQ04sT0FBTyxFQUFFO29CQUVMLGdCQUFnQjtvQkFDaEIsbUJBQW1CO29CQUduQixrQkFBa0I7b0JBQ2xCLGlCQUFpQjtvQkFDakIsaUJBQWlCO29CQUNqQixtQkFBbUI7b0JBQ25CLGVBQWU7b0JBQ2YsaUJBQWlCO29CQUNqQixjQUFjO29CQUNkLGNBQWM7b0JBQ2QsaUJBQWlCO29CQUNqQixlQUFlO29CQUNmLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixnQkFBZ0I7b0JBQ2hCLGFBQWE7b0JBQ2IsbUJBQW1CO29CQUduQixxQkFBcUI7b0JBR3JCLGdCQUFnQjtpQkFDbkI7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuLy8gQ29sbGVjdGlvbnNcbmltcG9ydCB7XG4gICAgU3VpTWVzc2FnZU1vZHVsZSxcbiAgICBTdWlQYWdpbmF0aW9uTW9kdWxlXG59IGZyb20gXCIuL2NvbGxlY3Rpb25zL2ludGVybmFsXCI7XG5cbi8vIE1vZHVsZXNcbmltcG9ydCB7XG4gICAgU3VpQWNjb3JkaW9uTW9kdWxlLFxuICAgIFN1aUNoZWNrYm94TW9kdWxlLFxuICAgIFN1aUNvbGxhcHNlTW9kdWxlLFxuICAgIFN1aURhdGVwaWNrZXJNb2R1bGUsXG4gICAgU3VpRGltbWVyTW9kdWxlLFxuICAgIFN1aURyb3Bkb3duTW9kdWxlLFxuICAgIFN1aU1vZGFsTW9kdWxlLFxuICAgIFN1aVBvcHVwTW9kdWxlLFxuICAgIFN1aVByb2dyZXNzTW9kdWxlLFxuICAgIFN1aVJhdGluZ01vZHVsZSxcbiAgICBTdWlTZWFyY2hNb2R1bGUsXG4gICAgU3VpU2lkZWJhck1vZHVsZSxcbiAgICBTdWlUYWJzTW9kdWxlLFxuICAgIFN1aVNlbGVjdE1vZHVsZSxcbiAgICBTdWlUcmFuc2l0aW9uTW9kdWxlXG59IGZyb20gXCIuL21vZHVsZXMvaW50ZXJuYWxcIjtcblxuLy8gQmVoYXZpb3JzXG5pbXBvcnQge1xuICAgIFN1aUxvY2FsaXphdGlvbk1vZHVsZVxufSBmcm9tIFwiLi9iZWhhdmlvcnMvaW50ZXJuYWxcIjtcblxuLy8gTWlzY1xuaW1wb3J0IHtcbiAgICBTdWlVdGlsaXR5TW9kdWxlXG59IGZyb20gXCIuL21pc2MvaW50ZXJuYWxcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIC8vIENvbGxlY3Rpb25zXG4gICAgICAgIFN1aU1lc3NhZ2VNb2R1bGUsXG4gICAgICAgIFN1aVBhZ2luYXRpb25Nb2R1bGUsXG5cbiAgICAgICAgLy8gTW9kdWxlc1xuICAgICAgICBTdWlBY2NvcmRpb25Nb2R1bGUsXG4gICAgICAgIFN1aUNoZWNrYm94TW9kdWxlLFxuICAgICAgICBTdWlDb2xsYXBzZU1vZHVsZSxcbiAgICAgICAgU3VpRGF0ZXBpY2tlck1vZHVsZSxcbiAgICAgICAgU3VpRGltbWVyTW9kdWxlLFxuICAgICAgICBTdWlEcm9wZG93bk1vZHVsZSxcbiAgICAgICAgU3VpTW9kYWxNb2R1bGUsXG4gICAgICAgIFN1aVBvcHVwTW9kdWxlLFxuICAgICAgICBTdWlQcm9ncmVzc01vZHVsZSxcbiAgICAgICAgU3VpUmF0aW5nTW9kdWxlLFxuICAgICAgICBTdWlTZWFyY2hNb2R1bGUsXG4gICAgICAgIFN1aVNlbGVjdE1vZHVsZSxcbiAgICAgICAgU3VpU2lkZWJhck1vZHVsZSxcbiAgICAgICAgU3VpVGFic01vZHVsZSxcbiAgICAgICAgU3VpVHJhbnNpdGlvbk1vZHVsZSxcblxuICAgICAgICAvLyBCZWhhdmlvcnNcbiAgICAgICAgU3VpTG9jYWxpemF0aW9uTW9kdWxlLFxuXG4gICAgICAgIC8vIE1pc2NcbiAgICAgICAgU3VpVXRpbGl0eU1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpTW9kdWxlIHt9XG4iXX0=