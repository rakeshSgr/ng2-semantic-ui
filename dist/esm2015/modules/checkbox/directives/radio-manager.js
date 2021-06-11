/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ContentChildren, QueryList, ElementRef } from "@angular/core";
import { SuiRadio } from "../components/radio";
import { Util } from "../../../misc/util/internal";
/**
 * @template T
 */
export class SuiRadioManager {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.element = element;
        this.isNested = false;
        this._radioSubs = [];
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.updateNesting();
        this._subManagers.changes.subscribe(() => this.updateNesting());
        this.updateRadios();
        this._renderedRadios.changes.subscribe(() => this.updateRadios());
    }
    /**
     * @return {?}
     */
    updateNesting() {
        this._subManagers
            .filter(m => m !== this)
            .forEach(m => m.isNested = true);
    }
    /**
     * @return {?}
     */
    updateRadios() {
        this._radioSubs.forEach(s => s.unsubscribe());
        this._radioSubs = [];
        const /** @type {?} */ groups = Util.Array.groupBy(this._renderedRadios.toArray(), "name");
        Object
            .keys(groups)
            .map(k => groups[k])
            .forEach(g => g
            .forEach(r => this._radioSubs
            .push(r.onCurrentValueChange
            .subscribe((v) => {
            if (!this.isNested) {
                g.forEach(radio => radio.writeValue(v));
            }
        }))));
    }
}
SuiRadioManager.decorators = [
    { type: Directive, args: [{
                selector: "form:not([ngForm]):not([[ngForm]]),ngForm,[ngForm]"
            },] }
];
/** @nocollapse */
SuiRadioManager.ctorParameters = () => [
    { type: ElementRef }
];
SuiRadioManager.propDecorators = {
    _subManagers: [{ type: ContentChildren, args: [SuiRadioManager, { descendants: true },] }],
    _renderedRadios: [{ type: ContentChildren, args: [SuiRadio, { descendants: true },] }]
};
function SuiRadioManager_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiRadioManager.prototype.isNested;
    /** @type {?} */
    SuiRadioManager.prototype._subManagers;
    /** @type {?} */
    SuiRadioManager.prototype._renderedRadios;
    /** @type {?} */
    SuiRadioManager.prototype._radioSubs;
    /** @type {?} */
    SuiRadioManager.prototype.element;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tbWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvY2hlY2tib3gvZGlyZWN0aXZlcy9yYWRpby1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQixlQUFlLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFL0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBS25ELE1BQU0sT0FBTyxlQUFlOzs7O0lBWXhCLFlBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7S0FDeEI7Ozs7SUFFTSxrQkFBa0I7UUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUVoRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDOzs7OztJQUc5RCxhQUFhO1FBQ2pCLElBQUksQ0FBQyxZQUFZO2FBQ1osTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQzthQUN2QixPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDOzs7OztJQUdqQyxZQUFZO1FBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFFckIsdUJBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDMUUsTUFBTTthQUNELElBQUksQ0FBQyxNQUFNLENBQUM7YUFDWixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbkIsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNWLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVO2FBQ3hCLElBQUksQ0FBQyxDQUFDLENBQUMsb0JBQW9CO2FBQ3ZCLFNBQVMsQ0FBQyxDQUFDLENBQUcsRUFBRSxFQUFFO1lBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2hCLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDM0M7U0FDSixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7WUFqRDdCLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsb0RBQW9EO2FBQ2pFOzs7O1lBUGlFLFVBQVU7OzsyQkFZdkUsZUFBZSxTQUFDLGVBQWUsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7OEJBR3RELGVBQWUsU0FBQyxRQUFRLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBBZnRlckNvbnRlbnRJbml0LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlSYWRpbyB9IGZyb20gXCIuLi9jb21wb25lbnRzL3JhZGlvXCI7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiZm9ybTpub3QoW25nRm9ybV0pOm5vdChbW25nRm9ybV1dKSxuZ0Zvcm0sW25nRm9ybV1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlSYWRpb01hbmFnZXI8VD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcblxuICAgIHB1YmxpYyBpc05lc3RlZDpib29sZWFuO1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihTdWlSYWRpb01hbmFnZXIsIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgICBwcml2YXRlIF9zdWJNYW5hZ2VyczpRdWVyeUxpc3Q8U3VpUmFkaW9NYW5hZ2VyPFQ+PjtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oU3VpUmFkaW8sIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgICBwcml2YXRlIF9yZW5kZXJlZFJhZGlvczpRdWVyeUxpc3Q8U3VpUmFkaW88VD4+O1xuXG4gICAgcHJpdmF0ZSBfcmFkaW9TdWJzOlN1YnNjcmlwdGlvbltdO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmlzTmVzdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3JhZGlvU3VicyA9IFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVOZXN0aW5nKCk7XG4gICAgICAgIHRoaXMuX3N1Yk1hbmFnZXJzLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlTmVzdGluZygpKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVJhZGlvcygpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlZFJhZGlvcy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZVJhZGlvcygpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZU5lc3RpbmcoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fc3ViTWFuYWdlcnNcbiAgICAgICAgICAgIC5maWx0ZXIobSA9PiBtICE9PSB0aGlzKVxuICAgICAgICAgICAgLmZvckVhY2gobSA9PiBtLmlzTmVzdGVkID0gdHJ1ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVSYWRpb3MoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcmFkaW9TdWJzLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgICAgICB0aGlzLl9yYWRpb1N1YnMgPSBbXTtcblxuICAgICAgICBjb25zdCBncm91cHMgPSBVdGlsLkFycmF5Lmdyb3VwQnkodGhpcy5fcmVuZGVyZWRSYWRpb3MudG9BcnJheSgpLCBcIm5hbWVcIik7XG4gICAgICAgIE9iamVjdFxuICAgICAgICAgICAgLmtleXMoZ3JvdXBzKVxuICAgICAgICAgICAgLm1hcChrID0+IGdyb3Vwc1trXSlcbiAgICAgICAgICAgIC5mb3JFYWNoKGcgPT4gZ1xuICAgICAgICAgICAgICAgIC5mb3JFYWNoKHIgPT4gdGhpcy5fcmFkaW9TdWJzXG4gICAgICAgICAgICAgICAgICAgIC5wdXNoKHIub25DdXJyZW50VmFsdWVDaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHY6VCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc05lc3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnLmZvckVhY2gocmFkaW8gPT4gcmFkaW8ud3JpdGVWYWx1ZSh2KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpKSk7XG4gICAgfVxufVxuIl19