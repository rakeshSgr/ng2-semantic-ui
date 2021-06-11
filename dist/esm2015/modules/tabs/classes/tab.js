/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export class Tab {
    /**
     * @param {?} header
     * @param {?} content
     */
    constructor(header, content) {
        this.id = header.id;
        this.header = header;
        this.content = content;
        // So that the header and content isActive properties are always in sync.
        this.header.isActiveChange
            .subscribe(() => this.content.isActive = this.isActive);
    }
    /**
     * @return {?}
     */
    get isActive() {
        return this.header.isActive;
    }
    /**
     * @param {?} active
     * @return {?}
     */
    set isActive(active) {
        // Use `setActiveState` so as not to fire 'external changes' event.
        this.header.setActiveState(active);
    }
    /**
     * @return {?}
     */
    get isDisabled() {
        return this.header.isDisabled;
    }
}
function Tab_tsickle_Closure_declarations() {
    /** @type {?} */
    Tab.prototype.id;
    /** @type {?} */
    Tab.prototype.header;
    /** @type {?} */
    Tab.prototype.content;
    /** @type {?} */
    Tab.prototype.index;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy90YWJzL2NsYXNzZXMvdGFiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxNQUFNLE9BQU8sR0FBRzs7Ozs7SUFNWixZQUFZLE1BQW1CLEVBQUUsT0FBcUI7UUFDbEQsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOztRQUd2QixJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWM7YUFDckIsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUMvRDs7OztRQUdVLFFBQVE7UUFDZixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDOzs7Ozs7UUFHckIsUUFBUSxDQUFDLE1BQWM7O1FBRTlCLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7OztRQUk1QixVQUFVO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7O0NBRXJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3VpVGFiSGVhZGVyIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvdGFiLWhlYWRlclwiO1xuaW1wb3J0IHsgU3VpVGFiQ29udGVudCB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL3RhYi1jb250ZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBUYWIge1xuICAgIHB1YmxpYyBpZDpzdHJpbmc7XG4gICAgcHVibGljIGhlYWRlcjpTdWlUYWJIZWFkZXI7XG4gICAgcHVibGljIGNvbnRlbnQ6U3VpVGFiQ29udGVudDtcbiAgICBwdWJsaWMgaW5kZXg6bnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoaGVhZGVyOlN1aVRhYkhlYWRlciwgY29udGVudDpTdWlUYWJDb250ZW50KSB7XG4gICAgICAgIHRoaXMuaWQgPSBoZWFkZXIuaWQ7XG4gICAgICAgIHRoaXMuaGVhZGVyID0gaGVhZGVyO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuXG4gICAgICAgIC8vIFNvIHRoYXQgdGhlIGhlYWRlciBhbmQgY29udGVudCBpc0FjdGl2ZSBwcm9wZXJ0aWVzIGFyZSBhbHdheXMgaW4gc3luYy5cbiAgICAgICAgdGhpcy5oZWFkZXIuaXNBY3RpdmVDaGFuZ2VcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jb250ZW50LmlzQWN0aXZlID0gdGhpcy5pc0FjdGl2ZSk7XG4gICAgfVxuXG4gICAgLy8gU2F2ZXMgYWNjZXNzaW5nIC5oZWFkZXIuaXNBY3RpdmUgZXZlcnkgdGltZS5cbiAgICBwdWJsaWMgZ2V0IGlzQWN0aXZlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYWRlci5pc0FjdGl2ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzQWN0aXZlKGFjdGl2ZTpib29sZWFuKSB7XG4gICAgICAgIC8vIFVzZSBgc2V0QWN0aXZlU3RhdGVgIHNvIGFzIG5vdCB0byBmaXJlICdleHRlcm5hbCBjaGFuZ2VzJyBldmVudC5cbiAgICAgICAgdGhpcy5oZWFkZXIuc2V0QWN0aXZlU3RhdGUoYWN0aXZlKTtcbiAgICB9XG5cbiAgICAvLyBTYXZlcyBhY2Nlc3NpbmcgLmhlYWRlci5pc0Rpc2FibGVkIGV2ZXJ5IHRpbWUuXG4gICAgcHVibGljIGdldCBpc0Rpc2FibGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYWRlci5pc0Rpc2FibGVkO1xuICAgIH1cbn1cbiJdfQ==