/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T, U
 */
export class ModalControls {
    /**
     * @param {?} approve
     * @param {?} deny
     */
    constructor(approve, deny) {
        this.approve = approve;
        this.deny = deny;
    }
    /**
     * @param {?} result
     * @return {?}
     */
    approve(result) { }
    /**
     * @param {?} result
     * @return {?}
     */
    deny(result) { }
}
/**
 * @template T, U, V
 */
export class Modal extends ModalControls {
    /**
     * @param {?} controls
     * @param {?} context
     */
    constructor(controls, context) {
        // Instances of `ModalControls` are only created in the `SuiModal` constructor,
        // so we take an initialised instance rather than remaking one each time.
        super(controls.approve, controls.deny);
        this.context = context;
    }
}
function Modal_tsickle_Closure_declarations() {
    /** @type {?} */
    Modal.prototype.context;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29udHJvbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL21vZGFsL2NsYXNzZXMvbW9kYWwtY29udHJvbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE1BQU0sT0FBTyxhQUFhOzs7OztJQUN0QixZQUFZLE9BQXNCLEVBQUUsSUFBbUI7UUFDbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7S0FDcEI7Ozs7O0lBR00sT0FBTyxDQUFDLE1BQVE7Ozs7O0lBQ2hCLElBQUksQ0FBQyxNQUFRO0NBQ3ZCOzs7O0FBR0QsTUFBTSxPQUFPLEtBQXVDLFNBQVEsYUFBbUI7Ozs7O0lBRzNFLFlBQVksUUFBNEIsRUFBRSxPQUFTOzs7UUFHL0MsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBQzFCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTaG9ydGhhbmQgdG8gYXZvaWQgd3JpdGluZyBhcnJvdyB0eXBlcyBldmVyeXdoZXJlLlxuZXhwb3J0IHR5cGUgTW9kYWxSZXN1bHQ8VD4gPSAocmVzdWx0OlQpID0+IHZvaWQ7XG5cbi8vIFVzZWQgdG8gcGFzcyBhYmlsaXR5IHRvIGNvbnRyb2wgYSBtb2RhbCB0byBhIGNvbXBvbmVudC5cbmV4cG9ydCBjbGFzcyBNb2RhbENvbnRyb2xzPFQsIFU+IHtcbiAgICBjb25zdHJ1Y3RvcihhcHByb3ZlOk1vZGFsUmVzdWx0PFQ+LCBkZW55Ok1vZGFsUmVzdWx0PFU+KSB7XG4gICAgICAgIHRoaXMuYXBwcm92ZSA9IGFwcHJvdmU7XG4gICAgICAgIHRoaXMuZGVueSA9IGRlbnk7XG4gICAgfVxuXG4gICAgLy8gVXNlIG1ldGhvZCBoZXJlIHJhdGhlciB0aGFuIGFycm93IHZhcmlhYmxlcyB0byBtYWtlIGludGVsbGlzZW5zZSBzaG93IHRoZXkncmUgbWV0aG9kcy5cbiAgICBwdWJsaWMgYXBwcm92ZShyZXN1bHQ6VCk6dm9pZCB7fVxuICAgIHB1YmxpYyBkZW55KHJlc3VsdDpVKTp2b2lkIHt9XG59XG5cbi8vIEluamVjdGVkIGludG8gY3VzdG9tIG1vZGFsIGNvbXBvbmVudHMsIHRvIGFsbG93IGNvbnRyb2wgb2YgdGhlIG1vZGFsLCBhbmQgYWNjZXNzIHRvIGEgY29udGV4dCBvYmplY3QuXG5leHBvcnQgY2xhc3MgTW9kYWw8VCwgVSA9IHVuZGVmaW5lZCwgViA9IHVuZGVmaW5lZD4gZXh0ZW5kcyBNb2RhbENvbnRyb2xzPFUsIFY+IHtcbiAgICBwdWJsaWMgY29udGV4dDpUO1xuXG4gICAgY29uc3RydWN0b3IoY29udHJvbHM6TW9kYWxDb250cm9sczxVLCBWPiwgY29udGV4dDpUKSB7XG4gICAgICAgIC8vIEluc3RhbmNlcyBvZiBgTW9kYWxDb250cm9sc2AgYXJlIG9ubHkgY3JlYXRlZCBpbiB0aGUgYFN1aU1vZGFsYCBjb25zdHJ1Y3RvcixcbiAgICAgICAgLy8gc28gd2UgdGFrZSBhbiBpbml0aWFsaXNlZCBpbnN0YW5jZSByYXRoZXIgdGhhbiByZW1ha2luZyBvbmUgZWFjaCB0aW1lLlxuICAgICAgICBzdXBlcihjb250cm9scy5hcHByb3ZlLCBjb250cm9scy5kZW55KTtcblxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cbn1cbiJdfQ==