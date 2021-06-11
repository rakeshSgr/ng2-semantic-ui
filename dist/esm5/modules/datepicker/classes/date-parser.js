/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DateFnsParser } from "../helpers/date-fns";
var DateParser = /** @class */ (function () {
    function DateParser(format, locale) {
        this._format = format;
        this._parser = new DateFnsParser(locale);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    DateParser.prototype.format = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this._parser.format(date, this._format);
    };
    /**
     * @param {?} dateString
     * @param {?=} baseDate
     * @return {?}
     */
    DateParser.prototype.parse = /**
     * @param {?} dateString
     * @param {?=} baseDate
     * @return {?}
     */
    function (dateString, baseDate) {
        if (baseDate === void 0) { baseDate = new Date(); }
        return this._parser.parse(dateString, this._format, baseDate);
    };
    return DateParser;
}());
export { DateParser };
function DateParser_tsickle_Closure_declarations() {
    /** @type {?} */
    DateParser.prototype._format;
    /** @type {?} */
    DateParser.prototype._parser;
}
var InternalDateParser = /** @class */ (function (_super) {
    tslib_1.__extends(InternalDateParser, _super);
    function InternalDateParser(mode, locale) {
        var _this = this;
        var /** @type {?} */ internalFormats = {
            time: "HH:mm",
            datetime: "YYYY-MM-DDTHH:mm",
            date: "YYYY-MM-DD",
            month: "YYYY-MM",
            year: "YYYY"
        };
        _this = _super.call(this, internalFormats[mode], locale) || this;
        return _this;
    }
    return InternalDateParser;
}(DateParser));
export { InternalDateParser };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1wYXJzZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL2RhdGVwaWNrZXIvY2xhc3Nlcy9kYXRlLXBhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUdwRCxJQUFBO0lBSUksb0JBQVksTUFBYSxFQUFFLE1BQThCO1FBQ3JELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDNUM7Ozs7O0lBRU0sMkJBQU07Ozs7Y0FBQyxJQUFTO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7Ozs7OztJQUc1QywwQkFBSzs7Ozs7Y0FBQyxVQUFpQixFQUFFLFFBQTBCO1FBQTFCLHlCQUFBLEVBQUEsZUFBb0IsSUFBSSxFQUFFO1FBQ3RELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7O3FCQWxCdEU7SUFvQkMsQ0FBQTtBQWhCRCxzQkFnQkM7Ozs7Ozs7QUFFRCxJQUFBO0lBQXdDLDhDQUFVO0lBQzlDLDRCQUFZLElBQW1CLEVBQUUsTUFBOEI7UUFBL0QsaUJBVUM7UUFURyxxQkFBTSxlQUFlLEdBQWtDO1lBQ25ELElBQUksRUFBRSxPQUFPO1lBQ2IsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixJQUFJLEVBQUUsWUFBWTtZQUNsQixLQUFLLEVBQUUsU0FBUztZQUNoQixJQUFJLEVBQUUsTUFBTTtTQUNmLENBQUM7UUFFRixRQUFBLGtCQUFNLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsU0FBQzs7S0FDeEM7NkJBakNMO0VBc0J3QyxVQUFVLEVBWWpELENBQUE7QUFaRCw4QkFZQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGVwaWNrZXJNb2RlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZGF0ZXBpY2tlclwiO1xuaW1wb3J0IHsgRGF0ZUZuc1BhcnNlciB9IGZyb20gXCIuLi9oZWxwZXJzL2RhdGUtZm5zXCI7XG5pbXBvcnQgeyBJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcywgSURhdGVwaWNrZXJGb3JtYXRzTG9jYWxlVmFsdWVzIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcblxuZXhwb3J0IGNsYXNzIERhdGVQYXJzZXIge1xuICAgIHByaXZhdGUgX2Zvcm1hdDpzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcGFyc2VyOkRhdGVGbnNQYXJzZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihmb3JtYXQ6c3RyaW5nLCBsb2NhbGU6SURhdGVwaWNrZXJMb2NhbGVWYWx1ZXMpIHtcbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gZm9ybWF0O1xuICAgICAgICB0aGlzLl9wYXJzZXIgPSBuZXcgRGF0ZUZuc1BhcnNlcihsb2NhbGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmb3JtYXQoZGF0ZTpEYXRlKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFyc2VyLmZvcm1hdChkYXRlLCB0aGlzLl9mb3JtYXQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwYXJzZShkYXRlU3RyaW5nOnN0cmluZywgYmFzZURhdGU6RGF0ZSA9IG5ldyBEYXRlKCkpOkRhdGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFyc2VyLnBhcnNlKGRhdGVTdHJpbmcsIHRoaXMuX2Zvcm1hdCwgYmFzZURhdGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEludGVybmFsRGF0ZVBhcnNlciBleHRlbmRzIERhdGVQYXJzZXIge1xuICAgIGNvbnN0cnVjdG9yKG1vZGU6RGF0ZXBpY2tlck1vZGUsIGxvY2FsZTpJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcykge1xuICAgICAgICBjb25zdCBpbnRlcm5hbEZvcm1hdHM6SURhdGVwaWNrZXJGb3JtYXRzTG9jYWxlVmFsdWVzID0ge1xuICAgICAgICAgICAgdGltZTogXCJISDptbVwiLFxuICAgICAgICAgICAgZGF0ZXRpbWU6IFwiWVlZWS1NTS1ERFRISDptbVwiLFxuICAgICAgICAgICAgZGF0ZTogXCJZWVlZLU1NLUREXCIsXG4gICAgICAgICAgICBtb250aDogXCJZWVlZLU1NXCIsXG4gICAgICAgICAgICB5ZWFyOiBcIllZWVlcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHN1cGVyKGludGVybmFsRm9ybWF0c1ttb2RlXSwgbG9jYWxlKTtcbiAgICB9XG59XG4iXX0=