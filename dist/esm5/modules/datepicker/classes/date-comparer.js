/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DatePrecision, DateUtil, Util } from "../../../misc/util/internal";
var DateComparer = /** @class */ (function () {
    function DateComparer(precision, isSmallest) {
        this._precision = precision;
        this._isSmallest = isSmallest;
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    DateComparer.prototype.equal = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        if (this._precision === DatePrecision.Minute) {
            return !!b &&
                DateUtil.equal(DatePrecision.Hour, b, a) &&
                Util.Math.roundDown(b.getMinutes(), 5) === Util.Math.roundDown(a.getMinutes(), 5);
        }
        return !!b && DateUtil.equal(this._precision, a, b);
    };
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    DateComparer.prototype.lessThan = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        if (this._isSmallest) {
            return !b || (b >= a);
        }
        return !b || (DateUtil.endOf(this._precision, DateUtil.clone(b)) >= a);
    };
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    DateComparer.prototype.greaterThan = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        if (this._isSmallest) {
            return !b || (b <= a);
        }
        return !b || (DateUtil.startOf(this._precision, DateUtil.clone(b)) <= a);
    };
    /**
     * @param {?} date
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    DateComparer.prototype.between = /**
     * @param {?} date
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    function (date, left, right) {
        return this.greaterThan(date, left) && this.lessThan(date, right);
    };
    return DateComparer;
}());
export { DateComparer };
function DateComparer_tsickle_Closure_declarations() {
    /** @type {?} */
    DateComparer.prototype._precision;
    /** @type {?} */
    DateComparer.prototype._isSmallest;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1jb21wYXJlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGF0ZXBpY2tlci9jbGFzc2VzL2RhdGUtY29tcGFyZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTVFLElBQUE7SUFJSSxzQkFBWSxTQUF1QixFQUFFLFVBQWtCO1FBQ25ELElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0tBQ2pDOzs7Ozs7SUFFTSw0QkFBSzs7Ozs7Y0FBQyxDQUFNLEVBQUUsQ0FBa0I7UUFDbkMsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLGFBQWEsQ0FBQyxNQUFNLEVBQUU7WUFDMUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDUCxRQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN4RjtRQUVELE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O0lBR2pELCtCQUFROzs7OztjQUFDLENBQU0sRUFBRSxDQUFrQjtRQUN0QyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUN6QjtRQUVELE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O0lBR3BFLGtDQUFXOzs7OztjQUFDLENBQU0sRUFBRSxDQUFrQjtRQUN6QyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUN6QjtRQUVELE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7Ozs7OztJQUd0RSw4QkFBTzs7Ozs7O2NBQUMsSUFBUyxFQUFFLElBQXFCLEVBQUUsS0FBc0I7UUFDbkUsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQzs7dUJBdEMxRTtJQXdDQyxDQUFBO0FBdENELHdCQXNDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGVQcmVjaXNpb24sIERhdGVVdGlsLCBVdGlsIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5leHBvcnQgY2xhc3MgRGF0ZUNvbXBhcmVyIHtcbiAgICBwcml2YXRlIF9wcmVjaXNpb246RGF0ZVByZWNpc2lvbjtcbiAgICBwcml2YXRlIF9pc1NtYWxsZXN0OmJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihwcmVjaXNpb246RGF0ZVByZWNpc2lvbiwgaXNTbWFsbGVzdDpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3ByZWNpc2lvbiA9IHByZWNpc2lvbjtcbiAgICAgICAgdGhpcy5faXNTbWFsbGVzdCA9IGlzU21hbGxlc3Q7XG4gICAgfVxuXG4gICAgcHVibGljIGVxdWFsKGE6RGF0ZSwgYjpEYXRlIHwgdW5kZWZpbmVkKTpib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuX3ByZWNpc2lvbiA9PT0gRGF0ZVByZWNpc2lvbi5NaW51dGUpIHtcbiAgICAgICAgICAgIHJldHVybiAhIWIgJiZcbiAgICAgICAgICAgICAgIERhdGVVdGlsLmVxdWFsKERhdGVQcmVjaXNpb24uSG91ciwgYiwgYSkgJiZcbiAgICAgICAgICAgICAgIFV0aWwuTWF0aC5yb3VuZERvd24oYi5nZXRNaW51dGVzKCksIDUpID09PSBVdGlsLk1hdGgucm91bmREb3duKGEuZ2V0TWludXRlcygpLCA1KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhIWIgJiYgRGF0ZVV0aWwuZXF1YWwodGhpcy5fcHJlY2lzaW9uLCBhLCBiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbGVzc1RoYW4oYTpEYXRlLCBiOkRhdGUgfCB1bmRlZmluZWQpOmJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5faXNTbWFsbGVzdCkge1xuICAgICAgICAgICAgcmV0dXJuICFiIHx8IChiID49IGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICFiIHx8IChEYXRlVXRpbC5lbmRPZih0aGlzLl9wcmVjaXNpb24sIERhdGVVdGlsLmNsb25lKGIpKSA+PSBhKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ3JlYXRlclRoYW4oYTpEYXRlLCBiOkRhdGUgfCB1bmRlZmluZWQpOmJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5faXNTbWFsbGVzdCkge1xuICAgICAgICAgICAgcmV0dXJuICFiIHx8IChiIDw9IGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICFiIHx8IChEYXRlVXRpbC5zdGFydE9mKHRoaXMuX3ByZWNpc2lvbiwgRGF0ZVV0aWwuY2xvbmUoYikpIDw9IGEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBiZXR3ZWVuKGRhdGU6RGF0ZSwgbGVmdDpEYXRlIHwgdW5kZWZpbmVkLCByaWdodDpEYXRlIHwgdW5kZWZpbmVkKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JlYXRlclRoYW4oZGF0ZSwgbGVmdCkgJiYgdGhpcy5sZXNzVGhhbihkYXRlLCByaWdodCk7XG4gICAgfVxufVxuIl19