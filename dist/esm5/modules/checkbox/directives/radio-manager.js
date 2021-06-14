import { __decorate, __metadata } from "tslib";
import { Directive, AfterContentInit, ContentChildren, QueryList, ElementRef } from "@angular/core";
import { SuiRadio } from "../components/radio";
import { Util } from "../../../misc/util/internal";
var SuiRadioManager = /** @class */ (function () {
    function SuiRadioManager(element) {
        this.element = element;
        this.isNested = false;
        this._radioSubs = [];
    }
    SuiRadioManager_1 = SuiRadioManager;
    SuiRadioManager.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.updateNesting();
        this._subManagers.changes.subscribe(function () { return _this.updateNesting(); });
        this.updateRadios();
        this._renderedRadios.changes.subscribe(function () { return _this.updateRadios(); });
    };
    SuiRadioManager.prototype.updateNesting = function () {
        var _this = this;
        this._subManagers
            .filter(function (m) { return m !== _this; })
            .forEach(function (m) { return m.isNested = true; });
    };
    SuiRadioManager.prototype.updateRadios = function () {
        var _this = this;
        this._radioSubs.forEach(function (s) { return s.unsubscribe(); });
        this._radioSubs = [];
        var groups = Util.Array.groupBy(this._renderedRadios.toArray(), "name");
        Object
            .keys(groups)
            .map(function (k) { return groups[k]; })
            .forEach(function (g) { return g
            .forEach(function (r) { return _this._radioSubs
            .push(r.onCurrentValueChange
            .subscribe(function (v) {
            if (!_this.isNested) {
                g.forEach(function (radio) { return radio.writeValue(v); });
            }
        })); }); });
    };
    var SuiRadioManager_1;
    SuiRadioManager.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        ContentChildren(SuiRadioManager_1, { descendants: true }),
        __metadata("design:type", QueryList)
    ], SuiRadioManager.prototype, "_subManagers", void 0);
    __decorate([
        ContentChildren(SuiRadio, { descendants: true }),
        __metadata("design:type", QueryList)
    ], SuiRadioManager.prototype, "_renderedRadios", void 0);
    SuiRadioManager = SuiRadioManager_1 = __decorate([
        Directive({
            selector: "form:not([ngForm]):not([[ngForm]]),ngForm,[ngForm]"
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], SuiRadioManager);
    return SuiRadioManager;
}());
export { SuiRadioManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tbWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvY2hlY2tib3gvZGlyZWN0aXZlcy9yYWRpby1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFLbkQ7SUFZSSx5QkFBbUIsT0FBa0I7UUFBbEIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN6QixDQUFDO3dCQWZRLGVBQWU7SUFpQmpCLDRDQUFrQixHQUF6QjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUM7UUFFaEUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFlBQVksRUFBRSxFQUFuQixDQUFtQixDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVPLHVDQUFhLEdBQXJCO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsWUFBWTthQUNaLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxLQUFJLEVBQVYsQ0FBVSxDQUFDO2FBQ3ZCLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVPLHNDQUFZLEdBQXBCO1FBQUEsaUJBZ0JDO1FBZkcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFFckIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMxRSxNQUFNO2FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNaLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBVCxDQUFTLENBQUM7YUFDbkIsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQzthQUNWLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVO2FBQ3hCLElBQUksQ0FBQyxDQUFDLENBQUMsb0JBQW9CO2FBQ3ZCLFNBQVMsQ0FBQyxVQUFDLENBQUc7WUFDWCxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRTtnQkFDaEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQW5CLENBQW1CLENBQUMsQ0FBQzthQUMzQztRQUNMLENBQUMsQ0FBQyxDQUFDLEVBTkcsQ0FNSCxDQUFDLEVBUEYsQ0FPRSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7O2dCQW5DMEIsVUFBVTs7SUFQckM7UUFEQyxlQUFlLENBQUMsaUJBQWUsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQztrQ0FDbkMsU0FBUzt5REFBcUI7SUFHbkQ7UUFEQyxlQUFlLENBQUMsUUFBUSxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDO2tDQUN6QixTQUFTOzREQUFjO0lBUnRDLGVBQWU7UUFIM0IsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG9EQUFvRDtTQUNqRSxDQUFDO3lDQWE2QixVQUFVO09BWjVCLGVBQWUsQ0FnRDNCO0lBQUQsc0JBQUM7Q0FBQSxBQWhERCxJQWdEQztTQWhEWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBBZnRlckNvbnRlbnRJbml0LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlSYWRpbyB9IGZyb20gXCIuLi9jb21wb25lbnRzL3JhZGlvXCI7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiZm9ybTpub3QoW25nRm9ybV0pOm5vdChbW25nRm9ybV1dKSxuZ0Zvcm0sW25nRm9ybV1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlSYWRpb01hbmFnZXI8VD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcblxuICAgIHB1YmxpYyBpc05lc3RlZDpib29sZWFuO1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihTdWlSYWRpb01hbmFnZXIsIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgICBwcml2YXRlIF9zdWJNYW5hZ2VyczpRdWVyeUxpc3Q8U3VpUmFkaW9NYW5hZ2VyPFQ+PjtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oU3VpUmFkaW8sIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgICBwcml2YXRlIF9yZW5kZXJlZFJhZGlvczpRdWVyeUxpc3Q8U3VpUmFkaW88VD4+O1xuXG4gICAgcHJpdmF0ZSBfcmFkaW9TdWJzOlN1YnNjcmlwdGlvbltdO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmlzTmVzdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3JhZGlvU3VicyA9IFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVOZXN0aW5nKCk7XG4gICAgICAgIHRoaXMuX3N1Yk1hbmFnZXJzLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlTmVzdGluZygpKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVJhZGlvcygpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlZFJhZGlvcy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZVJhZGlvcygpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZU5lc3RpbmcoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fc3ViTWFuYWdlcnNcbiAgICAgICAgICAgIC5maWx0ZXIobSA9PiBtICE9PSB0aGlzKVxuICAgICAgICAgICAgLmZvckVhY2gobSA9PiBtLmlzTmVzdGVkID0gdHJ1ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVSYWRpb3MoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcmFkaW9TdWJzLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgICAgICB0aGlzLl9yYWRpb1N1YnMgPSBbXTtcblxuICAgICAgICBjb25zdCBncm91cHMgPSBVdGlsLkFycmF5Lmdyb3VwQnkodGhpcy5fcmVuZGVyZWRSYWRpb3MudG9BcnJheSgpLCBcIm5hbWVcIik7XG4gICAgICAgIE9iamVjdFxuICAgICAgICAgICAgLmtleXMoZ3JvdXBzKVxuICAgICAgICAgICAgLm1hcChrID0+IGdyb3Vwc1trXSlcbiAgICAgICAgICAgIC5mb3JFYWNoKGcgPT4gZ1xuICAgICAgICAgICAgICAgIC5mb3JFYWNoKHIgPT4gdGhpcy5fcmFkaW9TdWJzXG4gICAgICAgICAgICAgICAgICAgIC5wdXNoKHIub25DdXJyZW50VmFsdWVDaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHY6VCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc05lc3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnLmZvckVhY2gocmFkaW8gPT4gcmFkaW8ud3JpdGVWYWx1ZSh2KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpKSk7XG4gICAgfVxufVxuIl19