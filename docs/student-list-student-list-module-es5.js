function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-list-student-list-module"], {
  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js ***!
    \***********************************************************************/

  /*! exports provided: AutofillMonitor, CdkAutofill, CdkTextareaAutosize, TextFieldModule */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015TextFieldJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutofillMonitor", function () {
      return AutofillMonitor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkAutofill", function () {
      return CdkAutofill;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTextareaAutosize", function () {
      return CdkTextareaAutosize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextFieldModule", function () {
      return TextFieldModule;
    });
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/text-field/autofill.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Options to pass to the animationstart listener.
     * @type {?}
     */


    var listenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({
      passive: true
    });
    /**
     * An injectable service that can be used to monitor the autofill state of an input.
     * Based on the following blog post:
     * https://medium.com/\@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7
     */

    var AutofillMonitor = /*#__PURE__*/function () {
      /**
       * @param {?} _platform
       * @param {?} _ngZone
       */
      function AutofillMonitor(_platform, _ngZone) {
        _classCallCheck(this, AutofillMonitor);

        this._platform = _platform;
        this._ngZone = _ngZone;
        this._monitoredElements = new Map();
      }
      /**
       * @param {?} elementOrRef
       * @return {?}
       */


      _createClass(AutofillMonitor, [{
        key: "monitor",
        value: function monitor(elementOrRef) {
          var _this = this;

          if (!this._platform.isBrowser) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
          }
          /** @type {?} */


          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceElement"])(elementOrRef);
          /** @type {?} */

          var info = this._monitoredElements.get(element);

          if (info) {
            return info.subject.asObservable();
          }
          /** @type {?} */


          var result = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          /** @type {?} */

          var cssClass = 'cdk-text-field-autofilled';
          /** @type {?} */

          var listener =
          /** @type {?} */

          /**
          * @param {?} event
          * @return {?}
          */
          function listener(event) {
            // Animation events fire on initial element render, we check for the presence of the autofill
            // CSS class to make sure this is a real change in state, not just the initial render before
            // we fire off events.
            if (event.animationName === 'cdk-text-field-autofill-start' && !element.classList.contains(cssClass)) {
              element.classList.add(cssClass);

              _this._ngZone.run(
              /**
              * @return {?}
              */
              function () {
                return result.next({
                  target:
                  /** @type {?} */
                  event.target,
                  isAutofilled: true
                });
              });
            } else if (event.animationName === 'cdk-text-field-autofill-end' && element.classList.contains(cssClass)) {
              element.classList.remove(cssClass);

              _this._ngZone.run(
              /**
              * @return {?}
              */
              function () {
                return result.next({
                  target:
                  /** @type {?} */
                  event.target,
                  isAutofilled: false
                });
              });
            }
          };

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            element.addEventListener('animationstart', listener, listenerOptions);
            element.classList.add('cdk-text-field-autofill-monitored');
          });

          this._monitoredElements.set(element, {
            subject: result,
            unlisten:
            /**
            * @return {?}
            */
            function unlisten() {
              element.removeEventListener('animationstart', listener, listenerOptions);
            }
          });

          return result.asObservable();
        }
        /**
         * @param {?} elementOrRef
         * @return {?}
         */

      }, {
        key: "stopMonitoring",
        value: function stopMonitoring(elementOrRef) {
          /** @type {?} */
          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceElement"])(elementOrRef);
          /** @type {?} */

          var info = this._monitoredElements.get(element);

          if (info) {
            info.unlisten();
            info.subject.complete();
            element.classList.remove('cdk-text-field-autofill-monitored');
            element.classList.remove('cdk-text-field-autofilled');

            this._monitoredElements["delete"](element);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this2 = this;

          this._monitoredElements.forEach(
          /**
          * @param {?} _info
          * @param {?} element
          * @return {?}
          */
          function (_info, element) {
            return _this2.stopMonitoring(element);
          });
        }
      }]);

      return AutofillMonitor;
    }();

    AutofillMonitor.ɵfac = function AutofillMonitor_Factory(t) {
      return new (t || AutofillMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };
    /** @nocollapse */


    AutofillMonitor.ctorParameters = function () {
      return [{
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };
    /** @nocollapse */


    AutofillMonitor.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function AutofillMonitor_Factory() {
        return new AutofillMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      },
      token: AutofillMonitor,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AutofillMonitor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * A directive that can be used to monitor the autofill state of an input.
     */


    var CdkAutofill = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       * @param {?} _autofillMonitor
       */
      function CdkAutofill(_elementRef, _autofillMonitor) {
        _classCallCheck(this, CdkAutofill);

        this._elementRef = _elementRef;
        this._autofillMonitor = _autofillMonitor;
        /**
         * Emits when the autofill state of the element changes.
         */

        this.cdkAutofill = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      /**
       * @return {?}
       */


      _createClass(CdkAutofill, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this._autofillMonitor.monitor(this._elementRef).subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return _this3.cdkAutofill.emit(event);
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._autofillMonitor.stopMonitoring(this._elementRef);
        }
      }]);

      return CdkAutofill;
    }();

    CdkAutofill.ɵfac = function CdkAutofill_Factory(t) {
      return new (t || CdkAutofill)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](AutofillMonitor));
    };

    CdkAutofill.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkAutofill,
      selectors: [["", "cdkAutofill", ""]],
      outputs: {
        cdkAutofill: "cdkAutofill"
      }
    });
    /** @nocollapse */

    CdkAutofill.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: AutofillMonitor
      }];
    };

    CdkAutofill.propDecorators = {
      cdkAutofill: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkAutofill, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdkAutofill]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: AutofillMonitor
        }];
      }, {
        cdkAutofill: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/text-field/autosize.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Directive to automatically resize a textarea to fit its content.
     */


    var CdkTextareaAutosize = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       * @param {?} _platform
       * @param {?} _ngZone
       * @param {?=} document
       */
      function CdkTextareaAutosize(_elementRef, _platform, _ngZone,
      /** @breaking-change 11.0.0 make document required */
      document) {
        _classCallCheck(this, CdkTextareaAutosize);

        this._elementRef = _elementRef;
        this._platform = _platform;
        this._ngZone = _ngZone;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._enabled = true;
        /**
         * Value of minRows as of last resize. If the minRows has decreased, the
         * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
         * does not have the same problem because it does not affect the textarea's scrollHeight.
         */

        this._previousMinRows = -1;
        this._document = document;
        this._textareaElement =
        /** @type {?} */
        this._elementRef.nativeElement;
      }
      /**
       * Minimum amount of rows in the textarea.
       * @return {?}
       */


      _createClass(CdkTextareaAutosize, [{
        key: "_setMinHeight",

        /**
         * Sets the minimum height of the textarea as determined by minRows.
         * @return {?}
         */
        value: function _setMinHeight() {
          /** @type {?} */
          var minHeight = this.minRows && this._cachedLineHeight ? "".concat(this.minRows * this._cachedLineHeight, "px") : null;

          if (minHeight) {
            this._textareaElement.style.minHeight = minHeight;
          }
        }
        /**
         * Sets the maximum height of the textarea as determined by maxRows.
         * @return {?}
         */

      }, {
        key: "_setMaxHeight",
        value: function _setMaxHeight() {
          /** @type {?} */
          var maxHeight = this.maxRows && this._cachedLineHeight ? "".concat(this.maxRows * this._cachedLineHeight, "px") : null;

          if (maxHeight) {
            this._textareaElement.style.maxHeight = maxHeight;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this4 = this;

          if (this._platform.isBrowser) {
            // Remember the height which we started with in case autosizing is disabled
            this._initialHeight = this._textareaElement.style.height;
            this.resizeToFitContent();

            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var window = _this4._getWindow();

              Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["auditTime"])(16), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this4._destroyed)).subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this4.resizeToFitContent(true);
              });
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Cache the height of a single-row textarea if it has not already been cached.
         *
         * We need to know how large a single "row" of a textarea is in order to apply minRows and
         * maxRows. For the initial version, we will assume that the height of a single line in the
         * textarea does not ever change.
         * @private
         * @return {?}
         */

      }, {
        key: "_cacheTextareaLineHeight",
        value: function _cacheTextareaLineHeight() {
          if (this._cachedLineHeight) {
            return;
          } // Use a clone element because we have to override some styles.

          /** @type {?} */


          var textareaClone =
          /** @type {?} */
          this._textareaElement.cloneNode(false);

          textareaClone.rows = 1; // Use `position: absolute` so that this doesn't cause a browser layout and use
          // `visibility: hidden` so that nothing is rendered. Clear any other styles that
          // would affect the height.

          textareaClone.style.position = 'absolute';
          textareaClone.style.visibility = 'hidden';
          textareaClone.style.border = 'none';
          textareaClone.style.padding = '0';
          textareaClone.style.height = '';
          textareaClone.style.minHeight = '';
          textareaClone.style.maxHeight = ''; // In Firefox it happens that textarea elements are always bigger than the specified amount
          // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
          // As a workaround that removes the extra space for the scrollbar, we can just set overflow
          // to hidden. This ensures that there is no invalid calculation of the line height.
          // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654

          textareaClone.style.overflow = 'hidden';

          /** @type {?} */
          this._textareaElement.parentNode.appendChild(textareaClone);

          this._cachedLineHeight = textareaClone.clientHeight;

          /** @type {?} */
          this._textareaElement.parentNode.removeChild(textareaClone); // Min and max heights have to be re-calculated if the cached line height changes


          this._setMinHeight();

          this._setMaxHeight();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this._platform.isBrowser) {
            this.resizeToFitContent();
          }
        }
        /**
         * Resize the textarea to fit its content.
         * @param {?=} force Whether to force a height recalculation. By default the height will be
         *    recalculated only if the value changed since the last call.
         * @return {?}
         */

      }, {
        key: "resizeToFitContent",
        value: function resizeToFitContent() {
          var _this5 = this;

          var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          // If autosizing is disabled, just skip everything else
          if (!this._enabled) {
            return;
          }

          this._cacheTextareaLineHeight(); // If we haven't determined the line-height yet, we know we're still hidden and there's no point
          // in checking the height of the textarea.


          if (!this._cachedLineHeight) {
            return;
          }
          /** @type {?} */


          var textarea =
          /** @type {?} */
          this._elementRef.nativeElement;
          /** @type {?} */

          var value = textarea.value; // Only resize if the value or minRows have changed since these calculations can be expensive.

          if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
            return;
          }
          /** @type {?} */


          var placeholderText = textarea.placeholder; // Reset the textarea height to auto in order to shrink back to its default size.
          // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
          // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
          // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
          // need to be removed temporarily.

          textarea.classList.add('cdk-textarea-autosize-measuring');
          textarea.placeholder = ''; // The cdk-textarea-autosize-measuring class includes a 2px padding to workaround an issue with
          // Chrome, so we account for that extra space here by subtracting 4 (2px top + 2px bottom).

          /** @type {?} */

          var height = textarea.scrollHeight - 4; // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.

          textarea.style.height = "".concat(height, "px");
          textarea.classList.remove('cdk-textarea-autosize-measuring');
          textarea.placeholder = placeholderText;

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            if (typeof requestAnimationFrame !== 'undefined') {
              requestAnimationFrame(
              /**
              * @return {?}
              */
              function () {
                return _this5._scrollToCaretPosition(textarea);
              });
            } else {
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                return _this5._scrollToCaretPosition(textarea);
              });
            }
          });

          this._previousValue = value;
          this._previousMinRows = this._minRows;
        }
        /**
         * Resets the textarea to its original size
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          // Do not try to change the textarea, if the initialHeight has not been determined yet
          // This might potentially remove styles when reset() is called before ngAfterViewInit
          if (this._initialHeight !== undefined) {
            this._textareaElement.style.height = this._initialHeight;
          }
        } // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
        // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
        // can move this back into `host`.
        // tslint:disable:no-host-decorator-in-concrete

        /**
         * @return {?}
         */

      }, {
        key: "_noopInputHandler",
        value: function _noopInputHandler() {} // no-op handler that ensures we're running change detection on input events.

        /**
         * Access injected document if available or fallback to global document reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getDocument",
        value: function _getDocument() {
          return this._document || document;
        }
        /**
         * Use defaultView of injected document if available or fallback to global window reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getWindow",
        value: function _getWindow() {
          /** @type {?} */
          var doc = this._getDocument();

          return doc.defaultView || window;
        }
        /**
         * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
         * prevent it from scrolling to the caret position. We need to re-set the selection
         * in order for it to scroll to the proper position.
         * @private
         * @param {?} textarea
         * @return {?}
         */

      }, {
        key: "_scrollToCaretPosition",
        value: function _scrollToCaretPosition(textarea) {
          var selectionStart = textarea.selectionStart,
              selectionEnd = textarea.selectionEnd;
          /** @type {?} */

          var document = this._getDocument(); // IE will throw an "Unspecified error" if we try to set the selection range after the
          // element has been removed from the DOM. Assert that the directive hasn't been destroyed
          // between the time we requested the animation frame and when it was executed.
          // Also note that we have to assert that the textarea is focused before we set the
          // selection range. Setting the selection range on a non-focused textarea will cause
          // it to receive focus on IE and Edge.


          if (!this._destroyed.isStopped && document.activeElement === textarea) {
            textarea.setSelectionRange(selectionStart, selectionEnd);
          }
        }
      }, {
        key: "minRows",
        get: function get() {
          return this._minRows;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._minRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value);

          this._setMinHeight();
        }
        /**
         * Maximum amount of rows in the textarea.
         * @return {?}
         */

      }, {
        key: "maxRows",
        get: function get() {
          return this._maxRows;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._maxRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value);

          this._setMaxHeight();
        }
        /**
         * Whether autosizing is enabled or not
         * @return {?}
         */

      }, {
        key: "enabled",
        get: function get() {
          return this._enabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value); // Only act if the actual value changed. This specifically helps to not run
          // resizeToFitContent too early (i.e. before ngAfterViewInit)

          if (this._enabled !== value) {
            (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
          }
        }
      }]);

      return CdkTextareaAutosize;
    }();

    CdkTextareaAutosize.ɵfac = function CdkTextareaAutosize_Factory(t) {
      return new (t || CdkTextareaAutosize)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
    };

    CdkTextareaAutosize.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkTextareaAutosize,
      selectors: [["textarea", "cdkTextareaAutosize", ""]],
      hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"],
      hostBindings: function CdkTextareaAutosize_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function CdkTextareaAutosize_input_HostBindingHandler() {
            return ctx._noopInputHandler();
          });
        }
      },
      inputs: {
        minRows: ["cdkAutosizeMinRows", "minRows"],
        maxRows: ["cdkAutosizeMaxRows", "maxRows"],
        enabled: ["cdkTextareaAutosize", "enabled"]
      },
      exportAs: ["cdkTextareaAutosize"]
    });
    /** @nocollapse */

    CdkTextareaAutosize.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }];
    };

    CdkTextareaAutosize.propDecorators = {
      minRows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkAutosizeMinRows']
      }],
      maxRows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkAutosizeMaxRows']
      }],
      enabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkTextareaAutosize']
      }],
      _noopInputHandler: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
        args: ['input']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkTextareaAutosize, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'textarea[cdkTextareaAutosize]',
          exportAs: 'cdkTextareaAutosize',
          host: {
            'class': 'cdk-textarea-autosize',
            // Textarea elements that have the directive applied should have a single row by default.
            // Browsers normally show two rows by default and therefore this limits the minRows binding.
            'rows': '1'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      }, {
        minRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkAutosizeMinRows']
        }],
        maxRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkAutosizeMaxRows']
        }],
        enabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkTextareaAutosize']
        }],
        _noopInputHandler: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['input']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/text-field/text-field-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TextFieldModule = function TextFieldModule() {
      _classCallCheck(this, TextFieldModule);
    };

    TextFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: TextFieldModule
    });
    TextFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function TextFieldModule_Factory(t) {
        return new (t || TextFieldModule)();
      },
      imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TextFieldModule, {
        declarations: function declarations() {
          return [CdkAutofill, CdkTextareaAutosize];
        },
        imports: function imports() {
          return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]];
        },
        exports: function exports() {
          return [CdkAutofill, CdkTextareaAutosize];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TextFieldModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [CdkAutofill, CdkTextareaAutosize],
          imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]],
          exports: [CdkAutofill, CdkTextareaAutosize]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/text-field/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=text-field.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js ***!
    \**********************************************************************/

  /*! exports provided: MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardModule, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015CardJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCard", function () {
      return MatCard;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardActions", function () {
      return MatCardActions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardAvatar", function () {
      return MatCardAvatar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardContent", function () {
      return MatCardContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardFooter", function () {
      return MatCardFooter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardHeader", function () {
      return MatCardHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardImage", function () {
      return MatCardImage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardLgImage", function () {
      return MatCardLgImage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardMdImage", function () {
      return MatCardMdImage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardModule", function () {
      return MatCardModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardSmImage", function () {
      return MatCardSmImage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardSubtitle", function () {
      return MatCardSubtitle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardTitle", function () {
      return MatCardTitle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardTitleGroup", function () {
      return MatCardTitleGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardXlImage", function () {
      return MatCardXlImage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/card/card.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Content of a card, needed as it's used as a selector in the API.
     * \@docs-private
     */


    var _c0 = ["*", [["mat-card-footer"]]];
    var _c1 = ["*", "mat-card-footer"];
    var _c2 = [[["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], [["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], "*"];
    var _c3 = ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"];
    var _c4 = [[["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], [["img"]], "*"];
    var _c5 = ["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "img", "*"];

    var MatCardContent = function MatCardContent() {
      _classCallCheck(this, MatCardContent);
    };

    MatCardContent.ɵfac = function MatCardContent_Factory(t) {
      return new (t || MatCardContent)();
    };

    MatCardContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatCardContent,
      selectors: [["mat-card-content"], ["", "mat-card-content", ""], ["", "matCardContent", ""]],
      hostAttrs: [1, "mat-card-content"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'mat-card-content, [mat-card-content], [matCardContent]',
          host: {
            'class': 'mat-card-content'
          }
        }]
      }], null, null);
    })();
    /**
     * Title of a card, needed as it's used as a selector in the API.
     * \@docs-private
     */


    var MatCardTitle = function MatCardTitle() {
      _classCallCheck(this, MatCardTitle);
    };

    MatCardTitle.ɵfac = function MatCardTitle_Factory(t) {
      return new (t || MatCardTitle)();
    };

    MatCardTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatCardTitle,
      selectors: [["mat-card-title"], ["", "mat-card-title", ""], ["", "matCardTitle", ""]],
      hostAttrs: [1, "mat-card-title"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardTitle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: "mat-card-title, [mat-card-title], [matCardTitle]",
          host: {
            'class': 'mat-card-title'
          }
        }]
      }], null, null);
    })();
    /**
     * Sub-title of a card, needed as it's used as a selector in the API.
     * \@docs-private
     */


    var MatCardSubtitle = function MatCardSubtitle() {
      _classCallCheck(this, MatCardSubtitle);
    };

    MatCardSubtitle.ɵfac = function MatCardSubtitle_Factory(t) {
      return new (t || MatCardSubtitle)();
    };

    MatCardSubtitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatCardSubtitle,
      selectors: [["mat-card-subtitle"], ["", "mat-card-subtitle", ""], ["", "matCardSubtitle", ""]],
      hostAttrs: [1, "mat-card-subtitle"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardSubtitle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]",
          host: {
            'class': 'mat-card-subtitle'
          }
        }]
      }], null, null);
    })();
    /**
     * Action section of a card, needed as it's used as a selector in the API.
     * \@docs-private
     */


    var MatCardActions = function MatCardActions() {
      _classCallCheck(this, MatCardActions);

      /**
       * Position of the actions inside the card.
       */
      this.align = 'start';
    };

    MatCardActions.ɵfac = function MatCardActions_Factory(t) {
      return new (t || MatCardActions)();
    };

    MatCardActions.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatCardActions,
      selectors: [["mat-card-actions"]],
      hostAttrs: [1, "mat-card-actions"],
      hostVars: 2,
      hostBindings: function MatCardActions_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-card-actions-align-end", ctx.align === "end");
        }
      },
      inputs: {
        align: "align"
      },
      exportAs: ["matCardActions"]
    });
    MatCardActions.propDecorators = {
      align: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardActions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'mat-card-actions',
          exportAs: 'matCardActions',
          host: {
            'class': 'mat-card-actions',
            '[class.mat-card-actions-align-end]': 'align === "end"'
          }
        }]
      }], function () {
        return [];
      }, {
        align: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * Footer of a card, needed as it's used as a selector in the API.
     * \@docs-private
     */


    var MatCardFooter = function MatCardFooter() {
      _classCallCheck(this, MatCardFooter);
    };

    MatCardFooter.ɵfac = function MatCardFooter_Factory(t) {
      return new (t || MatCardFooter)();
    };

    MatCardFooter.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatCardFooter,
      selectors: [["mat-card-footer"]],
      hostAttrs: [1, "mat-card-footer"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardFooter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'mat-card-footer',
          host: {
            'class': 'mat-card-footer'
          }
        }]
      }], null, null);
    })();
    /**
     * Image used in a card, needed to add the mat- CSS styling.
     * \@docs-private
     */


    var MatCardImage = function MatCardImage() {
      _classCallCheck(this, MatCardImage);
    };

    MatCardImage.ɵfac = function MatCardImage_Factory(t) {
      return new (t || MatCardImage)();
    };

    MatCardImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatCardImage,
      selectors: [["", "mat-card-image", ""], ["", "matCardImage", ""]],
      hostAttrs: [1, "mat-card-image"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardImage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[mat-card-image], [matCardImage]',
          host: {
            'class': 'mat-card-image'
          }
        }]
      }], null, null);
    })();
    /**
     * Image used in a card, needed to add the mat- CSS styling.
     * \@docs-private
     */


    var MatCardSmImage = function MatCardSmImage() {
      _classCallCheck(this, MatCardSmImage);
    };

    MatCardSmImage.ɵfac = function MatCardSmImage_Factory(t) {
      return new (t || MatCardSmImage)();
    };

    MatCardSmImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatCardSmImage,
      selectors: [["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""]],
      hostAttrs: [1, "mat-card-sm-image"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardSmImage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[mat-card-sm-image], [matCardImageSmall]',
          host: {
            'class': 'mat-card-sm-image'
          }
        }]
      }], null, null);
    })();
    /**
     * Image used in a card, needed to add the mat- CSS styling.
     * \@docs-private
     */


    var MatCardMdImage = function MatCardMdImage() {
      _classCallCheck(this, MatCardMdImage);
    };

    MatCardMdImage.ɵfac = function MatCardMdImage_Factory(t) {
      return new (t || MatCardMdImage)();
    };

    MatCardMdImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatCardMdImage,
      selectors: [["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""]],
      hostAttrs: [1, "mat-card-md-image"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardMdImage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[mat-card-md-image], [matCardImageMedium]',
          host: {
            'class': 'mat-card-md-image'
          }
        }]
      }], null, null);
    })();
    /**
     * Image used in a card, needed to add the mat- CSS styling.
     * \@docs-private
     */


    var MatCardLgImage = function MatCardLgImage() {
      _classCallCheck(this, MatCardLgImage);
    };

    MatCardLgImage.ɵfac = function MatCardLgImage_Factory(t) {
      return new (t || MatCardLgImage)();
    };

    MatCardLgImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatCardLgImage,
      selectors: [["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""]],
      hostAttrs: [1, "mat-card-lg-image"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardLgImage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[mat-card-lg-image], [matCardImageLarge]',
          host: {
            'class': 'mat-card-lg-image'
          }
        }]
      }], null, null);
    })();
    /**
     * Large image used in a card, needed to add the mat- CSS styling.
     * \@docs-private
     */


    var MatCardXlImage = function MatCardXlImage() {
      _classCallCheck(this, MatCardXlImage);
    };

    MatCardXlImage.ɵfac = function MatCardXlImage_Factory(t) {
      return new (t || MatCardXlImage)();
    };

    MatCardXlImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatCardXlImage,
      selectors: [["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]],
      hostAttrs: [1, "mat-card-xl-image"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardXlImage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[mat-card-xl-image], [matCardImageXLarge]',
          host: {
            'class': 'mat-card-xl-image'
          }
        }]
      }], null, null);
    })();
    /**
     * Avatar image used in a card, needed to add the mat- CSS styling.
     * \@docs-private
     */


    var MatCardAvatar = function MatCardAvatar() {
      _classCallCheck(this, MatCardAvatar);
    };

    MatCardAvatar.ɵfac = function MatCardAvatar_Factory(t) {
      return new (t || MatCardAvatar)();
    };

    MatCardAvatar.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatCardAvatar,
      selectors: [["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]],
      hostAttrs: [1, "mat-card-avatar"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardAvatar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[mat-card-avatar], [matCardAvatar]',
          host: {
            'class': 'mat-card-avatar'
          }
        }]
      }], null, null);
    })();
    /**
     * A basic content container component that adds the styles of a Material design card.
     *
     * While this component can be used alone, it also provides a number
     * of preset styles for common card sections, including:
     * - mat-card-title
     * - mat-card-subtitle
     * - mat-card-content
     * - mat-card-actions
     * - mat-card-footer
     */


    var MatCard = // @breaking-change 9.0.0 `_animationMode` parameter to be made required.

    /**
     * @param {?=} _animationMode
     */
    function MatCard(_animationMode) {
      _classCallCheck(this, MatCard);

      this._animationMode = _animationMode;
    };

    MatCard.ɵfac = function MatCard_Factory(t) {
      return new (t || MatCard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatCard.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatCard,
      selectors: [["mat-card"]],
      hostAttrs: [1, "mat-card", "mat-focus-indicator"],
      hostVars: 2,
      hostBindings: function MatCard_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        }
      },
      exportAs: ["matCard"],
      ngContentSelectors: _c1,
      decls: 2,
      vars: 0,
      template: function MatCard_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
        }
      },
      styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatCard.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-card',
          exportAs: 'matCard',
          template: "<ng-content></ng-content>\n<ng-content select=\"mat-card-footer\"></ng-content>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          host: {
            'class': 'mat-card mat-focus-indicator',
            '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
          },
          styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"]
        }]
      }], function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Component intended to be used within the `<mat-card>` component. It adds styles for a
     * preset header section (i.e. a title, subtitle, and avatar layout).
     * \@docs-private
     */


    var MatCardHeader = function MatCardHeader() {
      _classCallCheck(this, MatCardHeader);
    };

    MatCardHeader.ɵfac = function MatCardHeader_Factory(t) {
      return new (t || MatCardHeader)();
    };

    MatCardHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatCardHeader,
      selectors: [["mat-card-header"]],
      hostAttrs: [1, "mat-card-header"],
      ngContentSelectors: _c3,
      decls: 4,
      vars: 0,
      consts: [[1, "mat-card-header-text"]],
      template: function MatCardHeader_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-card-header',
          template: "<ng-content select=\"[mat-card-avatar], [matCardAvatar]\"></ng-content>\n<div class=\"mat-card-header-text\">\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content></ng-content>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          host: {
            'class': 'mat-card-header'
          }
        }]
      }], null, null);
    })();
    /**
     * Component intended to be used within the `<mat-card>` component. It adds styles for a preset
     * layout that groups an image with a title section.
     * \@docs-private
     */


    var MatCardTitleGroup = function MatCardTitleGroup() {
      _classCallCheck(this, MatCardTitleGroup);
    };

    MatCardTitleGroup.ɵfac = function MatCardTitleGroup_Factory(t) {
      return new (t || MatCardTitleGroup)();
    };

    MatCardTitleGroup.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatCardTitleGroup,
      selectors: [["mat-card-title-group"]],
      hostAttrs: [1, "mat-card-title-group"],
      ngContentSelectors: _c5,
      decls: 4,
      vars: 0,
      template: function MatCardTitleGroup_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardTitleGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-card-title-group',
          template: "<div>\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content select=\"img\"></ng-content>\n<ng-content></ng-content>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          host: {
            'class': 'mat-card-title-group'
          }
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/card/card-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatCardModule = function MatCardModule() {
      _classCallCheck(this, MatCardModule);
    };

    MatCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatCardModule
    });
    MatCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatCardModule_Factory(t) {
        return new (t || MatCardModule)();
      },
      imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatCardModule, {
        declarations: function declarations() {
          return [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar];
        },
        imports: function imports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          exports: [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          declarations: [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/card/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=card.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js ***!
    \****************************************************************************/

  /*! exports provided: MAT_FORM_FIELD, MAT_FORM_FIELD_DEFAULT_OPTIONS, MatError, MatFormField, MatFormFieldControl, MatFormFieldModule, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix, getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, getMatFormFieldPlaceholderConflictError, matFormFieldAnimations */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015FormFieldJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD", function () {
      return MAT_FORM_FIELD;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD_DEFAULT_OPTIONS", function () {
      return MAT_FORM_FIELD_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatError", function () {
      return MatError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatFormField", function () {
      return MatFormField;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatFormFieldControl", function () {
      return MatFormFieldControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatFormFieldModule", function () {
      return MatFormFieldModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatHint", function () {
      return MatHint;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatLabel", function () {
      return MatLabel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPlaceholder", function () {
      return MatPlaceholder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPrefix", function () {
      return MatPrefix;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSuffix", function () {
      return MatSuffix;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatFormFieldDuplicatedHintError", function () {
      return getMatFormFieldDuplicatedHintError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatFormFieldMissingControlError", function () {
      return getMatFormFieldMissingControlError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatFormFieldPlaceholderConflictError", function () {
      return getMatFormFieldPlaceholderConflictError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matFormFieldAnimations", function () {
      return matFormFieldAnimations;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/error.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var _c0 = ["underline"];
    var _c1 = ["connectionContainer"];
    var _c2 = ["inputContainer"];
    var _c3 = ["label"];

    function MatFormField_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }
    }

    function MatFormField_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1, 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MatFormField_label_9_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1, 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10._control.placeholder);
      }
    }

    function MatFormField_label_9_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0, 3, ["*ngSwitchCase", "true"]);
      }
    }

    function MatFormField_label_9_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MatFormField_label_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 20, 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkObserveContent", function MatFormField_label_9_Template_label_cdkObserveContent_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r13.updateOutlineGap();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MatFormField_label_9_ng_container_2_Template, 4, 1, "ng-container", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MatFormField_label_9_3_Template, 1, 0, undefined, 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MatFormField_label_9_span_4_Template, 2, 0, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat)("mat-form-field-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat)("mat-accent", ctx_r4.color == "accent")("mat-warn", ctx_r4.color == "warn");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkObserveContentDisabled", ctx_r4.appearance != "outline")("id", ctx_r4._labelId)("ngSwitch", ctx_r4._hasLabel());

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("for", ctx_r4._control.id)("aria-owns", ctx_r4._control.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.hideRequiredMarker && ctx_r4._control.required && !ctx_r4._control.disabled);
      }
    }

    function MatFormField_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1, 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MatFormField_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25, 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-accent", ctx_r6.color == "accent")("mat-warn", ctx_r6.color == "warn");
      }
    }

    function MatFormField_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@transitionMessages", ctx_r7._subscriptAnimationState);
      }
    }

    function MatFormField_div_14_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx_r16._hintLabelId);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r16.hintLabel);
      }
    }

    function MatFormField_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MatFormField_div_14_div_1_Template, 2, 2, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@transitionMessages", ctx_r8._subscriptAnimationState);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.hintLabel);
      }
    }

    var _c4 = ["*", [["", "matPrefix", ""]], [["mat-placeholder"]], [["mat-label"]], [["", "matSuffix", ""]], [["mat-error"]], [["mat-hint", 3, "align", "end"]], [["mat-hint", "align", "end"]]];
    var _c5 = ["*", "[matPrefix]", "mat-placeholder", "mat-label", "[matSuffix]", "mat-error", "mat-hint:not([align='end'])", "mat-hint[align='end']"];
    var nextUniqueId = 0;
    /**
     * Single error message to be shown underneath the form field.
     */

    var MatError = function MatError() {
      _classCallCheck(this, MatError);

      this.id = "mat-error-".concat(nextUniqueId++);
    };

    MatError.ɵfac = function MatError_Factory(t) {
      return new (t || MatError)();
    };

    MatError.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatError,
      selectors: [["mat-error"]],
      hostAttrs: ["role", "alert", 1, "mat-error"],
      hostVars: 1,
      hostBindings: function MatError_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id);
        }
      },
      inputs: {
        id: "id"
      }
    });
    MatError.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatError, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'mat-error',
          host: {
            'class': 'mat-error',
            'role': 'alert',
            '[attr.id]': 'id'
          }
        }]
      }], function () {
        return [];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/form-field-animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Animations used by the MatFormField.
     * \@docs-private
     * @type {?}
     */


    var matFormFieldAnimations = {
      /**
       * Animation that transitions the form field's error and hint messages.
       */
      transitionMessages: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('transitionMessages', [// TODO(mmalerba): Use angular animations for label animation as well.
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        opacity: 1,
        transform: 'translateY(0%)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('void => enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        opacity: 0,
        transform: 'translateY(-100%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('300ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/form-field-control.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * An interface which allows a control to work inside of a `MatFormField`.
     * @abstract
     * @template T
     */

    var MatFormFieldControl = function MatFormFieldControl() {
      _classCallCheck(this, MatFormFieldControl);
    };

    MatFormFieldControl.ɵfac = function MatFormFieldControl_Factory(t) {
      return new (t || MatFormFieldControl)();
    };

    MatFormFieldControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatFormFieldControl
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatFormFieldControl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
      }], null, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/form-field-errors.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * \@docs-private
     * @return {?}
     */


    function getMatFormFieldPlaceholderConflictError() {
      return Error('Placeholder attribute and child element were both specified.');
    }
    /**
     * \@docs-private
     * @param {?} align
     * @return {?}
     */


    function getMatFormFieldDuplicatedHintError(align) {
      return Error("A hint was already declared for 'align=\"".concat(align, "\"'."));
    }
    /**
     * \@docs-private
     * @return {?}
     */


    function getMatFormFieldMissingControlError() {
      return Error('mat-form-field must contain a MatFormFieldControl.');
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/hint.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var nextUniqueId$1 = 0;
    /**
     * Hint text to be shown underneath the form field control.
     */

    var MatHint = function MatHint() {
      _classCallCheck(this, MatHint);

      /**
       * Whether to align the hint label at the start or end of the line.
       */
      this.align = 'start';
      /**
       * Unique ID for the hint. Used for the aria-describedby on the form field control.
       */

      this.id = "mat-hint-".concat(nextUniqueId$1++);
    };

    MatHint.ɵfac = function MatHint_Factory(t) {
      return new (t || MatHint)();
    };

    MatHint.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatHint,
      selectors: [["mat-hint"]],
      hostAttrs: [1, "mat-hint"],
      hostVars: 4,
      hostBindings: function MatHint_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id)("align", null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-right", ctx.align == "end");
        }
      },
      inputs: {
        align: "align",
        id: "id"
      }
    });
    MatHint.propDecorators = {
      align: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatHint, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'mat-hint',
          host: {
            'class': 'mat-hint',
            '[class.mat-right]': 'align == "end"',
            '[attr.id]': 'id',
            // Remove align attribute to prevent it from interfering with layout.
            '[attr.align]': 'null'
          }
        }]
      }], function () {
        return [];
      }, {
        align: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/label.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The floating label for a `mat-form-field`.
     */


    var MatLabel = function MatLabel() {
      _classCallCheck(this, MatLabel);
    };

    MatLabel.ɵfac = function MatLabel_Factory(t) {
      return new (t || MatLabel)();
    };

    MatLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatLabel,
      selectors: [["mat-label"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatLabel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'mat-label'
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/placeholder.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The placeholder text for an `MatFormField`.
     * @deprecated Use `<mat-label>` to specify the label and the `placeholder` attribute to specify the
     *     placeholder.
     * \@breaking-change 8.0.0
     */


    var MatPlaceholder = function MatPlaceholder() {
      _classCallCheck(this, MatPlaceholder);
    };

    MatPlaceholder.ɵfac = function MatPlaceholder_Factory(t) {
      return new (t || MatPlaceholder)();
    };

    MatPlaceholder.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatPlaceholder,
      selectors: [["mat-placeholder"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatPlaceholder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'mat-placeholder'
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/prefix.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Prefix to be placed in front of the form field.
     */


    var MatPrefix = function MatPrefix() {
      _classCallCheck(this, MatPrefix);
    };

    MatPrefix.ɵfac = function MatPrefix_Factory(t) {
      return new (t || MatPrefix)();
    };

    MatPrefix.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatPrefix,
      selectors: [["", "matPrefix", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatPrefix, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[matPrefix]'
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/suffix.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Suffix to be placed at the end of the form field.
     */


    var MatSuffix = function MatSuffix() {
      _classCallCheck(this, MatSuffix);
    };

    MatSuffix.ɵfac = function MatSuffix_Factory(t) {
      return new (t || MatSuffix)();
    };

    MatSuffix.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatSuffix,
      selectors: [["", "matSuffix", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSuffix, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[matSuffix]'
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/form-field.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var nextUniqueId$2 = 0;
    /** @type {?} */

    var floatingLabelScale = 0.75;
    /** @type {?} */

    var outlineGapPadding = 5;
    /**
     * Boilerplate for applying mixins to MatFormField.
     * \@docs-private
     */

    var MatFormFieldBase =
    /**
     * @param {?} _elementRef
     */
    function MatFormFieldBase(_elementRef) {
      _classCallCheck(this, MatFormFieldBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /**
     * Base class to which we're applying the form field mixins.
     * \@docs-private
     * @type {?}
     */


    var _MatFormFieldMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinColor"])(MatFormFieldBase, 'primary');
    /**
     * Represents the default options for the form field that can be configured
     * using the `MAT_FORM_FIELD_DEFAULT_OPTIONS` injection token.
     * @record
     */


    function MatFormFieldDefaultOptions() {}

    if (false) {}
    /**
     * Injection token that can be used to configure the
     * default options for all form field within an app.
     * @type {?}
     */


    var MAT_FORM_FIELD_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MAT_FORM_FIELD_DEFAULT_OPTIONS');
    /**
     * Injection token that can be used to inject an instances of `MatFormField`. It serves
     * as alternative token to the actual `MatFormField` class which would cause unnecessary
     * retention of the `MatFormField` class and its component metadata.
     * @type {?}
     */

    var MAT_FORM_FIELD = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatFormField');
    /**
     * Container for form controls that applies Material Design styling and behavior.
     */

    var MatFormField = /*#__PURE__*/function (_MatFormFieldMixinBas) {
      _inherits(MatFormField, _MatFormFieldMixinBas);

      var _super = _createSuper(MatFormField);

      /**
       * @param {?} _elementRef
       * @param {?} _changeDetectorRef
       * @param {?} labelOptions
       * @param {?} _dir
       * @param {?} _defaults
       * @param {?} _platform
       * @param {?} _ngZone
       * @param {?} _animationMode
       */
      function MatFormField(_elementRef, _changeDetectorRef, labelOptions, _dir, _defaults, _platform, _ngZone, _animationMode) {
        var _this6;

        _classCallCheck(this, MatFormField);

        _this6 = _super.call(this, _elementRef);
        _this6._elementRef = _elementRef;
        _this6._changeDetectorRef = _changeDetectorRef;
        _this6._dir = _dir;
        _this6._defaults = _defaults;
        _this6._platform = _platform;
        _this6._ngZone = _ngZone;
        /**
         * Whether the outline gap needs to be calculated
         * immediately on the next change detection run.
         */

        _this6._outlineGapCalculationNeededImmediately = false;
        /**
         * Whether the outline gap needs to be calculated next time the zone has stabilized.
         */

        _this6._outlineGapCalculationNeededOnStable = false;
        _this6._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Override for the logic that disables the label animation in certain cases.
         */

        _this6._showAlwaysAnimate = false;
        /**
         * State of the mat-hint and mat-error animations.
         */

        _this6._subscriptAnimationState = '';
        _this6._hintLabel = ''; // Unique id for the hint label.

        _this6._hintLabelId = "mat-hint-".concat(nextUniqueId$2++); // Unique id for the internal form field label.

        _this6._labelId = "mat-form-field-label-".concat(nextUniqueId$2++);
        _this6._labelOptions = labelOptions ? labelOptions : {};
        _this6.floatLabel = _this6._getDefaultFloatLabelState();
        _this6._animationsEnabled = _animationMode !== 'NoopAnimations'; // Set the default through here so we invoke the setter on the first run.

        _this6.appearance = _defaults && _defaults.appearance ? _defaults.appearance : 'legacy';
        _this6._hideRequiredMarker = _defaults && _defaults.hideRequiredMarker != null ? _defaults.hideRequiredMarker : false;
        return _this6;
      }
      /**
       * The form-field appearance style.
       * @return {?}
       */


      _createClass(MatFormField, [{
        key: "getConnectedOverlayOrigin",

        /**
         * Gets an ElementRef for the element that a overlay attached to the form-field should be
         * positioned relative to.
         * @return {?}
         */
        value: function getConnectedOverlayOrigin() {
          return this._connectionContainerRef || this._elementRef;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this7 = this;

          this._validateControlChild();
          /** @type {?} */


          var control = this._control;

          if (control.controlType) {
            this._elementRef.nativeElement.classList.add("mat-form-field-type-".concat(control.controlType));
          } // Subscribe to changes in the child control state in order to update the form field UI.


          control.stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(
          /** @type {?} */
          null)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this7._validatePlaceholders();

            _this7._syncDescribedByIds();

            _this7._changeDetectorRef.markForCheck();
          }); // Run change detection if the value changes.

          if (control.ngControl && control.ngControl.valueChanges) {
            control.ngControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(
            /**
            * @return {?}
            */
            function () {
              return _this7._changeDetectorRef.markForCheck();
            });
          } // Note that we have to run outside of the `NgZone` explicitly,
          // in order to avoid throwing users into an infinite loop
          // if `zone-patch-rxjs` is included.


          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this7._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this7._destroyed)).subscribe(
            /**
            * @return {?}
            */
            function () {
              if (_this7._outlineGapCalculationNeededOnStable) {
                _this7.updateOutlineGap();
              }
            });
          }); // Run change detection and update the outline if the suffix or prefix changes.


          Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this7._outlineGapCalculationNeededOnStable = true;

            _this7._changeDetectorRef.markForCheck();
          }); // Re-validate when the number of hints changes.

          this._hintChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this7._processHints();

            _this7._changeDetectorRef.markForCheck();
          }); // Update the aria-described by when the number of errors changes.


          this._errorChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this7._syncDescribedByIds();

            _this7._changeDetectorRef.markForCheck();
          });

          if (this._dir) {
            this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(
            /**
            * @return {?}
            */
            function () {
              if (typeof requestAnimationFrame === 'function') {
                _this7._ngZone.runOutsideAngular(
                /**
                * @return {?}
                */
                function () {
                  requestAnimationFrame(
                  /**
                  * @return {?}
                  */
                  function () {
                    return _this7.updateOutlineGap();
                  });
                });
              } else {
                _this7.updateOutlineGap();
              }
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          this._validateControlChild();

          if (this._outlineGapCalculationNeededImmediately) {
            this.updateOutlineGap();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          // Avoid animations on load.
          this._subscriptAnimationState = 'enter';

          this._changeDetectorRef.detectChanges();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Determines whether a class from the NgControl should be forwarded to the host element.
         * @param {?} prop
         * @return {?}
         */

      }, {
        key: "_shouldForward",
        value: function _shouldForward(prop) {
          /** @type {?} */
          var ngControl = this._control ? this._control.ngControl : null;
          return ngControl && ngControl[prop];
        }
        /**
         * @return {?}
         */

      }, {
        key: "_hasPlaceholder",
        value: function _hasPlaceholder() {
          return !!(this._control && this._control.placeholder || this._placeholderChild);
        }
        /**
         * @return {?}
         */

      }, {
        key: "_hasLabel",
        value: function _hasLabel() {
          return !!this._labelChild;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_shouldLabelFloat",
        value: function _shouldLabelFloat() {
          return this._canLabelFloat && (this._control.shouldLabelFloat || this._shouldAlwaysFloat);
        }
        /**
         * @return {?}
         */

      }, {
        key: "_hideControlPlaceholder",
        value: function _hideControlPlaceholder() {
          // In the legacy appearance the placeholder is promoted to a label if no label is given.
          return this.appearance === 'legacy' && !this._hasLabel() || this._hasLabel() && !this._shouldLabelFloat();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_hasFloatingLabel",
        value: function _hasFloatingLabel() {
          // In the legacy appearance the placeholder is promoted to a label if no label is given.
          return this._hasLabel() || this.appearance === 'legacy' && this._hasPlaceholder();
        }
        /**
         * Determines whether to display hints or errors.
         * @return {?}
         */

      }, {
        key: "_getDisplayedMessages",
        value: function _getDisplayedMessages() {
          return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? 'error' : 'hint';
        }
        /**
         * Animates the placeholder up and locks it in position.
         * @return {?}
         */

      }, {
        key: "_animateAndLockLabel",
        value: function _animateAndLockLabel() {
          var _this8 = this;

          if (this._hasFloatingLabel() && this._canLabelFloat) {
            // If animations are disabled, we shouldn't go in here,
            // because the `transitionend` will never fire.
            if (this._animationsEnabled && this._label) {
              this._showAlwaysAnimate = true;
              Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this._label.nativeElement, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(
              /**
              * @return {?}
              */
              function () {
                _this8._showAlwaysAnimate = false;
              });
            }

            this.floatLabel = 'always';

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
         * or child element with the `mat-placeholder` directive).
         * @private
         * @return {?}
         */

      }, {
        key: "_validatePlaceholders",
        value: function _validatePlaceholders() {
          if (this._control.placeholder && this._placeholderChild) {
            throw getMatFormFieldPlaceholderConflictError();
          }
        }
        /**
         * Does any extra processing that is required when handling the hints.
         * @private
         * @return {?}
         */

      }, {
        key: "_processHints",
        value: function _processHints() {
          this._validateHints();

          this._syncDescribedByIds();
        }
        /**
         * Ensure that there is a maximum of one of each `<mat-hint>` alignment specified, with the
         * attribute being considered as `align="start"`.
         * @private
         * @return {?}
         */

      }, {
        key: "_validateHints",
        value: function _validateHints() {
          var _this9 = this;

          if (this._hintChildren) {
            /** @type {?} */
            var startHint;
            /** @type {?} */

            var endHint;

            this._hintChildren.forEach(
            /**
            * @param {?} hint
            * @return {?}
            */
            function (hint) {
              if (hint.align === 'start') {
                if (startHint || _this9.hintLabel) {
                  throw getMatFormFieldDuplicatedHintError('start');
                }

                startHint = hint;
              } else if (hint.align === 'end') {
                if (endHint) {
                  throw getMatFormFieldDuplicatedHintError('end');
                }

                endHint = hint;
              }
            });
          }
        }
        /**
         * Gets the default float label state.
         * @private
         * @return {?}
         */

      }, {
        key: "_getDefaultFloatLabelState",
        value: function _getDefaultFloatLabelState() {
          return this._defaults && this._defaults.floatLabel || this._labelOptions["float"] || 'auto';
        }
        /**
         * Sets the list of element IDs that describe the child control. This allows the control to update
         * its `aria-describedby` attribute accordingly.
         * @private
         * @return {?}
         */

      }, {
        key: "_syncDescribedByIds",
        value: function _syncDescribedByIds() {
          if (this._control) {
            /** @type {?} */
            var ids = [];

            if (this._getDisplayedMessages() === 'hint') {
              /** @type {?} */
              var startHint = this._hintChildren ? this._hintChildren.find(
              /**
              * @param {?} hint
              * @return {?}
              */
              function (hint) {
                return hint.align === 'start';
              }) : null;
              /** @type {?} */

              var endHint = this._hintChildren ? this._hintChildren.find(
              /**
              * @param {?} hint
              * @return {?}
              */
              function (hint) {
                return hint.align === 'end';
              }) : null;

              if (startHint) {
                ids.push(startHint.id);
              } else if (this._hintLabel) {
                ids.push(this._hintLabelId);
              }

              if (endHint) {
                ids.push(endHint.id);
              }
            } else if (this._errorChildren) {
              ids = this._errorChildren.map(
              /**
              * @param {?} error
              * @return {?}
              */
              function (error) {
                return error.id;
              });
            }

            this._control.setDescribedByIds(ids);
          }
        }
        /**
         * Throws an error if the form field's control is missing.
         * @protected
         * @return {?}
         */

      }, {
        key: "_validateControlChild",
        value: function _validateControlChild() {
          if (!this._control) {
            throw getMatFormFieldMissingControlError();
          }
        }
        /**
         * Updates the width and position of the gap in the outline. Only relevant for the outline
         * appearance.
         * @return {?}
         */

      }, {
        key: "updateOutlineGap",
        value: function updateOutlineGap() {
          /** @type {?} */
          var labelEl = this._label ? this._label.nativeElement : null;

          if (this.appearance !== 'outline' || !labelEl || !labelEl.children.length || !labelEl.textContent.trim()) {
            return;
          }

          if (!this._platform.isBrowser) {
            // getBoundingClientRect isn't available on the server.
            return;
          } // If the element is not present in the DOM, the outline gap will need to be calculated
          // the next time it is checked and in the DOM.


          if (!this._isAttachedToDOM()) {
            this._outlineGapCalculationNeededImmediately = true;
            return;
          }
          /** @type {?} */


          var startWidth = 0;
          /** @type {?} */

          var gapWidth = 0;
          /** @type {?} */

          var container = this._connectionContainerRef.nativeElement;
          /** @type {?} */

          var startEls = container.querySelectorAll('.mat-form-field-outline-start');
          /** @type {?} */

          var gapEls = container.querySelectorAll('.mat-form-field-outline-gap');

          if (this._label && this._label.nativeElement.children.length) {
            /** @type {?} */
            var containerRect = container.getBoundingClientRect(); // If the container's width and height are zero, it means that the element is
            // invisible and we can't calculate the outline gap. Mark the element as needing
            // to be checked the next time the zone stabilizes. We can't do this immediately
            // on the next change detection, because even if the element becomes visible,
            // the `ClientRect` won't be reclaculated immediately. We reset the
            // `_outlineGapCalculationNeededImmediately` flag some we don't run the checks twice.

            if (containerRect.width === 0 && containerRect.height === 0) {
              this._outlineGapCalculationNeededOnStable = true;
              this._outlineGapCalculationNeededImmediately = false;
              return;
            }
            /** @type {?} */


            var containerStart = this._getStartEnd(containerRect);
            /** @type {?} */


            var labelStart = this._getStartEnd(labelEl.children[0].getBoundingClientRect());
            /** @type {?} */


            var labelWidth = 0;

            var _iterator = _createForOfIteratorHelper(labelEl.children),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var child = _step.value;
                labelWidth += child.offsetWidth;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            startWidth = Math.abs(labelStart - containerStart) - outlineGapPadding;
            gapWidth = labelWidth > 0 ? labelWidth * floatingLabelScale + outlineGapPadding * 2 : 0;
          }

          for (var i = 0; i < startEls.length; i++) {
            startEls[i].style.width = "".concat(startWidth, "px");
          }

          for (var _i = 0; _i < gapEls.length; _i++) {
            gapEls[_i].style.width = "".concat(gapWidth, "px");
          }

          this._outlineGapCalculationNeededOnStable = this._outlineGapCalculationNeededImmediately = false;
        }
        /**
         * Gets the start end of the rect considering the current directionality.
         * @private
         * @param {?} rect
         * @return {?}
         */

      }, {
        key: "_getStartEnd",
        value: function _getStartEnd(rect) {
          return this._dir && this._dir.value === 'rtl' ? rect.right : rect.left;
        }
        /**
         * Checks whether the form field is attached to the DOM.
         * @private
         * @return {?}
         */

      }, {
        key: "_isAttachedToDOM",
        value: function _isAttachedToDOM() {
          /** @type {?} */
          var element = this._elementRef.nativeElement;

          if (element.getRootNode) {
            /** @type {?} */
            var rootNode = element.getRootNode(); // If the element is inside the DOM the root node will be either the document
            // or the closest shadow root, otherwise it'll be the element itself.

            return rootNode && rootNode !== element;
          } // Otherwise fall back to checking if it's in the document. This doesn't account for
          // shadow DOM, however browser that support shadow DOM should support `getRootNode` as well.


          return (
            /** @type {?} */
            document.documentElement.contains(element)
          );
        }
      }, {
        key: "appearance",
        get: function get() {
          return this._appearance;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var oldValue = this._appearance;
          this._appearance = value || this._defaults && this._defaults.appearance || 'legacy';

          if (this._appearance === 'outline' && oldValue !== value) {
            this._outlineGapCalculationNeededOnStable = true;
          }
        }
        /**
         * Whether the required marker should be hidden.
         * @return {?}
         */

      }, {
        key: "hideRequiredMarker",
        get: function get() {
          return this._hideRequiredMarker;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._hideRequiredMarker = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the floating label should always float or not.
         * @return {?}
         */

      }, {
        key: "_shouldAlwaysFloat",
        get: function get() {
          return this.floatLabel === 'always' && !this._showAlwaysAnimate;
        }
        /**
         * Whether the label can float or not.
         * @return {?}
         */

      }, {
        key: "_canLabelFloat",
        get: function get() {
          return this.floatLabel !== 'never';
        }
        /**
         * Text for the form field hint.
         * @return {?}
         */

      }, {
        key: "hintLabel",
        get: function get() {
          return this._hintLabel;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._hintLabel = value;

          this._processHints();
        }
        /**
         * Whether the label should always float, never float or float as the user types.
         *
         * Note: only the legacy appearance supports the `never` option. `never` was originally added as a
         * way to make the floating label emulate the behavior of a standard input placeholder. However
         * the form field now supports both floating labels and placeholders. Therefore in the non-legacy
         * appearances the `never` option has been disabled in favor of just using the placeholder.
         * @return {?}
         */

      }, {
        key: "floatLabel",
        get: function get() {
          return this.appearance !== 'legacy' && this._floatLabel === 'never' ? 'auto' : this._floatLabel;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value !== this._floatLabel) {
            this._floatLabel = value || this._getDefaultFloatLabelState();

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_control",
        get: function get() {
          // TODO(crisbeto): we need this workaround in order to support both Ivy and ViewEngine.
          //  We should clean this up once Ivy is the default renderer.
          return this._explicitFormFieldControl || this._controlNonStatic || this._controlStatic;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._explicitFormFieldControl = value;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_labelChild",
        get: function get() {
          return this._labelChildNonStatic || this._labelChildStatic;
        }
      }]);

      return MatFormField;
    }(_MatFormFieldMixinBase);

    MatFormField.ɵfac = function MatFormField_Factory(t) {
      return new (t || MatFormField)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_LABEL_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_FORM_FIELD_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatFormField.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatFormField,
      selectors: [["mat-form-field"]],
      contentQueries: function MatFormField_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatFormFieldControl, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticContentQuery"](dirIndex, MatFormFieldControl, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatLabel, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticContentQuery"](dirIndex, MatLabel, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatPlaceholder, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatError, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatHint, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatPrefix, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatSuffix, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._controlNonStatic = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._controlStatic = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._labelChildNonStatic = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._labelChildStatic = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._placeholderChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._errorChildren = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._hintChildren = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._prefixChildren = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._suffixChildren = _t);
        }
      },
      viewQuery: function MatFormField_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.underlineRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._connectionContainerRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._inputContainerRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._label = _t.first);
        }
      },
      hostAttrs: [1, "mat-form-field"],
      hostVars: 44,
      hostBindings: function MatFormField_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-form-field-appearance-standard", ctx.appearance == "standard")("mat-form-field-appearance-fill", ctx.appearance == "fill")("mat-form-field-appearance-outline", ctx.appearance == "outline")("mat-form-field-appearance-legacy", ctx.appearance == "legacy")("mat-form-field-invalid", ctx._control.errorState)("mat-form-field-can-float", ctx._canLabelFloat)("mat-form-field-should-float", ctx._shouldLabelFloat())("mat-form-field-has-label", ctx._hasFloatingLabel())("mat-form-field-hide-placeholder", ctx._hideControlPlaceholder())("mat-form-field-disabled", ctx._control.disabled)("mat-form-field-autofilled", ctx._control.autofilled)("mat-focused", ctx._control.focused)("mat-accent", ctx.color == "accent")("mat-warn", ctx.color == "warn")("ng-untouched", ctx._shouldForward("untouched"))("ng-touched", ctx._shouldForward("touched"))("ng-pristine", ctx._shouldForward("pristine"))("ng-dirty", ctx._shouldForward("dirty"))("ng-valid", ctx._shouldForward("valid"))("ng-invalid", ctx._shouldForward("invalid"))("ng-pending", ctx._shouldForward("pending"))("_mat-animation-noopable", !ctx._animationsEnabled);
        }
      },
      inputs: {
        color: "color",
        floatLabel: "floatLabel",
        appearance: "appearance",
        hideRequiredMarker: "hideRequiredMarker",
        hintLabel: "hintLabel"
      },
      exportAs: ["matFormField"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: MAT_FORM_FIELD,
        useExisting: MatFormField
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c5,
      decls: 15,
      vars: 8,
      consts: [[1, "mat-form-field-wrapper"], [1, "mat-form-field-flex", 3, "click"], ["connectionContainer", ""], [4, "ngIf"], ["class", "mat-form-field-prefix", 4, "ngIf"], [1, "mat-form-field-infix"], ["inputContainer", ""], [1, "mat-form-field-label-wrapper"], ["class", "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "mat-empty", "mat-form-field-empty", "mat-accent", "mat-warn", "ngSwitch", "cdkObserveContent", 4, "ngIf"], ["class", "mat-form-field-suffix", 4, "ngIf"], ["class", "mat-form-field-underline", 4, "ngIf"], [1, "mat-form-field-subscript-wrapper", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "mat-form-field-hint-wrapper", 4, "ngSwitchCase"], [1, "mat-form-field-outline"], [1, "mat-form-field-outline-start"], [1, "mat-form-field-outline-gap"], [1, "mat-form-field-outline-end"], [1, "mat-form-field-outline", "mat-form-field-outline-thick"], [1, "mat-form-field-prefix"], [1, "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "ngSwitch", "cdkObserveContent"], ["label", ""], ["class", "mat-placeholder-required mat-form-field-required-marker", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "mat-placeholder-required", "mat-form-field-required-marker"], [1, "mat-form-field-suffix"], [1, "mat-form-field-underline"], ["underline", ""], [1, "mat-form-field-ripple"], [1, "mat-form-field-hint-wrapper"], ["class", "mat-hint", 3, "id", 4, "ngIf"], [1, "mat-form-field-hint-spacer"], [1, "mat-hint", 3, "id"]],
      template: function MatFormField_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatFormField_Template_div_click_1_listener($event) {
            return ctx._control.onContainerClick && ctx._control.onContainerClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MatFormField_ng_container_3_Template, 9, 0, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MatFormField_div_4_Template, 2, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MatFormField_label_9_Template, 5, 16, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MatFormField_div_10_Template, 2, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MatFormField_div_11_Template, 3, 4, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MatFormField_div_13_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, MatFormField_div_14_Template, 5, 2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.appearance == "outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._prefixChildren.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._hasFloatingLabel());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._suffixChildren.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.appearance != "outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx._getDisplayedMessages());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "hint");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgSwitchCase"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["CdkObserveContent"]],
      styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n", ".mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"],
      encapsulation: 2,
      data: {
        animation: [matFormFieldAnimations.transitionMessages]
      },
      changeDetection: 0
    });
    /** @nocollapse */

    MatFormField.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_LABEL_GLOBAL_OPTIONS"]]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
        }]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatFormField.propDecorators = {
      appearance: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      hideRequiredMarker: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      hintLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      floatLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      underlineRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['underline']
      }],
      _connectionContainerRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['connectionContainer', {
          "static": true
        }]
      }],
      _inputContainerRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['inputContainer']
      }],
      _label: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['label']
      }],
      _controlNonStatic: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
        args: [MatFormFieldControl]
      }],
      _controlStatic: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
        args: [MatFormFieldControl, {
          "static": true
        }]
      }],
      _labelChildNonStatic: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
        args: [MatLabel]
      }],
      _labelChildStatic: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
        args: [MatLabel, {
          "static": true
        }]
      }],
      _placeholderChild: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
        args: [MatPlaceholder]
      }],
      _errorChildren: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
        args: [MatError, {
          descendants: true
        }]
      }],
      _hintChildren: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
        args: [MatHint, {
          descendants: true
        }]
      }],
      _prefixChildren: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
        args: [MatPrefix, {
          descendants: true
        }]
      }],
      _suffixChildren: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
        args: [MatSuffix, {
          descendants: true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatFormField, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mat-form-field',
          exportAs: 'matFormField',
          template: "<div class=\"mat-form-field-wrapper\">\n  <div class=\"mat-form-field-flex\" #connectionContainer\n       (click)=\"_control.onContainerClick && _control.onContainerClick($event)\">\n\n    <!-- Outline used for outline appearance. -->\n    <ng-container *ngIf=\"appearance == 'outline'\">\n      <div class=\"mat-form-field-outline\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n      <div class=\"mat-form-field-outline mat-form-field-outline-thick\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n    </ng-container>\n\n    <div class=\"mat-form-field-prefix\" *ngIf=\"_prefixChildren.length\">\n      <ng-content select=\"[matPrefix]\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-infix\" #inputContainer>\n      <ng-content></ng-content>\n\n      <span class=\"mat-form-field-label-wrapper\">\n        <!-- We add aria-owns as a workaround for an issue in JAWS & NVDA where the label isn't\n             read if it comes before the control in the DOM. -->\n        <label class=\"mat-form-field-label\"\n               (cdkObserveContent)=\"updateOutlineGap()\"\n               [cdkObserveContentDisabled]=\"appearance != 'outline'\"\n               [id]=\"_labelId\"\n               [attr.for]=\"_control.id\"\n               [attr.aria-owns]=\"_control.id\"\n               [class.mat-empty]=\"_control.empty && !_shouldAlwaysFloat\"\n               [class.mat-form-field-empty]=\"_control.empty && !_shouldAlwaysFloat\"\n               [class.mat-accent]=\"color == 'accent'\"\n               [class.mat-warn]=\"color == 'warn'\"\n               #label\n               *ngIf=\"_hasFloatingLabel()\"\n               [ngSwitch]=\"_hasLabel()\">\n\n          <!-- @breaking-change 8.0.0 remove in favor of mat-label element an placeholder attr. -->\n          <ng-container *ngSwitchCase=\"false\">\n            <ng-content select=\"mat-placeholder\"></ng-content>\n            <span>{{_control.placeholder}}</span>\n          </ng-container>\n\n          <ng-content select=\"mat-label\" *ngSwitchCase=\"true\"></ng-content>\n\n          <!-- @breaking-change 8.0.0 remove `mat-placeholder-required` class -->\n          <span\n            class=\"mat-placeholder-required mat-form-field-required-marker\"\n            aria-hidden=\"true\"\n            *ngIf=\"!hideRequiredMarker && _control.required && !_control.disabled\">&#32;*</span>\n        </label>\n      </span>\n    </div>\n\n    <div class=\"mat-form-field-suffix\" *ngIf=\"_suffixChildren.length\">\n      <ng-content select=\"[matSuffix]\"></ng-content>\n    </div>\n  </div>\n\n  <!-- Underline used for legacy, standard, and box appearances. -->\n  <div class=\"mat-form-field-underline\" #underline\n       *ngIf=\"appearance != 'outline'\">\n    <span class=\"mat-form-field-ripple\"\n          [class.mat-accent]=\"color == 'accent'\"\n          [class.mat-warn]=\"color == 'warn'\"></span>\n  </div>\n\n  <div class=\"mat-form-field-subscript-wrapper\"\n       [ngSwitch]=\"_getDisplayedMessages()\">\n    <div *ngSwitchCase=\"'error'\" [@transitionMessages]=\"_subscriptAnimationState\">\n      <ng-content select=\"mat-error\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-hint-wrapper\" *ngSwitchCase=\"'hint'\"\n      [@transitionMessages]=\"_subscriptAnimationState\">\n      <!-- TODO(mmalerba): use an actual <mat-hint> once all selectors are switched to mat-* -->\n      <div *ngIf=\"hintLabel\" [id]=\"_hintLabelId\" class=\"mat-hint\">{{hintLabel}}</div>\n      <ng-content select=\"mat-hint:not([align='end'])\"></ng-content>\n      <div class=\"mat-form-field-hint-spacer\"></div>\n      <ng-content select=\"mat-hint[align='end']\"></ng-content>\n    </div>\n  </div>\n</div>\n",
          animations: [matFormFieldAnimations.transitionMessages],
          host: {
            'class': 'mat-form-field',
            '[class.mat-form-field-appearance-standard]': 'appearance == "standard"',
            '[class.mat-form-field-appearance-fill]': 'appearance == "fill"',
            '[class.mat-form-field-appearance-outline]': 'appearance == "outline"',
            '[class.mat-form-field-appearance-legacy]': 'appearance == "legacy"',
            '[class.mat-form-field-invalid]': '_control.errorState',
            '[class.mat-form-field-can-float]': '_canLabelFloat',
            '[class.mat-form-field-should-float]': '_shouldLabelFloat()',
            '[class.mat-form-field-has-label]': '_hasFloatingLabel()',
            '[class.mat-form-field-hide-placeholder]': '_hideControlPlaceholder()',
            '[class.mat-form-field-disabled]': '_control.disabled',
            '[class.mat-form-field-autofilled]': '_control.autofilled',
            '[class.mat-focused]': '_control.focused',
            '[class.mat-accent]': 'color == "accent"',
            '[class.mat-warn]': 'color == "warn"',
            '[class.ng-untouched]': '_shouldForward("untouched")',
            '[class.ng-touched]': '_shouldForward("touched")',
            '[class.ng-pristine]': '_shouldForward("pristine")',
            '[class.ng-dirty]': '_shouldForward("dirty")',
            '[class.ng-valid]': '_shouldForward("valid")',
            '[class.ng-invalid]': '_shouldForward("invalid")',
            '[class.ng-pending]': '_shouldForward("pending")',
            '[class._mat-animation-noopable]': '!_animationsEnabled'
          },
          inputs: ['color'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          providers: [{
            provide: MAT_FORM_FIELD,
            useExisting: MatFormField
          }],
          styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n", ".mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_LABEL_GLOBAL_OPTIONS"]]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        floatLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        appearance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hideRequiredMarker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hintLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        underlineRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['underline']
        }],
        _connectionContainerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['connectionContainer', {
            "static": true
          }]
        }],
        _inputContainerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['inputContainer']
        }],
        _label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['label']
        }],
        _controlNonStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MatFormFieldControl]
        }],
        _controlStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MatFormFieldControl, {
            "static": true
          }]
        }],
        _labelChildNonStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MatLabel]
        }],
        _labelChildStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MatLabel, {
            "static": true
          }]
        }],
        _placeholderChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MatPlaceholder]
        }],
        _errorChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [MatError, {
            descendants: true
          }]
        }],
        _hintChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [MatHint, {
            descendants: true
          }]
        }],
        _prefixChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [MatPrefix, {
            descendants: true
          }]
        }],
        _suffixChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [MatSuffix, {
            descendants: true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/form-field-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatFormFieldModule = function MatFormFieldModule() {
      _classCallCheck(this, MatFormFieldModule);
    };

    MatFormFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatFormFieldModule
    });
    MatFormFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function MatFormFieldModule_Factory(t) {
        return new (t || MatFormFieldModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["ObserversModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatFormFieldModule, {
        declarations: function declarations() {
          return [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["ObserversModule"]];
        },
        exports: function exports() {
          return [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatFormFieldModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["ObserversModule"]],
          exports: [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=form-field.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js ***!
    \**********************************************************************/

  /*! exports provided: ICON_REGISTRY_PROVIDER, ICON_REGISTRY_PROVIDER_FACTORY, MAT_ICON_LOCATION, MAT_ICON_LOCATION_FACTORY, MatIcon, MatIconModule, MatIconRegistry, getMatIconFailedToSanitizeLiteralError, getMatIconFailedToSanitizeUrlError, getMatIconNameNotFoundError, getMatIconNoHttpProviderError */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015IconJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER", function () {
      return ICON_REGISTRY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER_FACTORY", function () {
      return ICON_REGISTRY_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION", function () {
      return MAT_ICON_LOCATION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION_FACTORY", function () {
      return MAT_ICON_LOCATION_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatIcon", function () {
      return MatIcon;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatIconModule", function () {
      return MatIconModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatIconRegistry", function () {
      return MatIconRegistry;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeLiteralError", function () {
      return getMatIconFailedToSanitizeLiteralError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeUrlError", function () {
      return getMatIconFailedToSanitizeUrlError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatIconNameNotFoundError", function () {
      return getMatIconNameNotFoundError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatIconNoHttpProviderError", function () {
      return getMatIconNoHttpProviderError;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/icon/icon-registry.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Returns an exception to be thrown in the case when attempting to
     * load an icon with a name that cannot be found.
     * \@docs-private
     * @param {?} iconName
     * @return {?}
     */


    var _c0 = ["*"];

    function getMatIconNameNotFoundError(iconName) {
      return Error("Unable to find icon with the name \"".concat(iconName, "\""));
    }
    /**
     * Returns an exception to be thrown when the consumer attempts to use
     * `<mat-icon>` without including \@angular/common/http.
     * \@docs-private
     * @return {?}
     */


    function getMatIconNoHttpProviderError() {
      return Error('Could not find HttpClient provider for use with Angular Material icons. ' + 'Please include the HttpClientModule from @angular/common/http in your ' + 'app imports.');
    }
    /**
     * Returns an exception to be thrown when a URL couldn't be sanitized.
     * \@docs-private
     * @param {?} url URL that was attempted to be sanitized.
     * @return {?}
     */


    function getMatIconFailedToSanitizeUrlError(url) {
      return Error("The URL provided to MatIconRegistry was not trusted as a resource URL " + "via Angular's DomSanitizer. Attempted URL was \"".concat(url, "\"."));
    }
    /**
     * Returns an exception to be thrown when a HTML string couldn't be sanitized.
     * \@docs-private
     * @param {?} literal HTML that was attempted to be sanitized.
     * @return {?}
     */


    function getMatIconFailedToSanitizeLiteralError(literal) {
      return Error("The literal provided to MatIconRegistry was not trusted as safe HTML by " + "Angular's DomSanitizer. Attempted literal was \"".concat(literal, "\"."));
    }
    /**
     * Options that can be used to configure how an icon or the icons in an icon set are presented.
     * @record
     */


    function IconOptions() {}

    if (false) {}
    /**
     * Configuration for an icon, including the URL and possibly the cached SVG element.
     * \@docs-private
     */


    var SvgIconConfig =
    /**
     * @param {?} data
     * @param {?=} options
     */
    function SvgIconConfig(data, options) {
      _classCallCheck(this, SvgIconConfig);

      this.options = options; // Note that we can't use `instanceof SVGElement` here,
      // because it'll break during server-side rendering.

      if (!!
      /** @type {?} */
      data.nodeName) {
        this.svgElement =
        /** @type {?} */
        data;
      } else {
        this.url =
        /** @type {?} */
        data;
      }
    };

    if (false) {}
    /**
     * Service to register and display icons used by the `<mat-icon>` component.
     * - Registers icon URLs by namespace and name.
     * - Registers icon set URLs by namespace.
     * - Registers aliases for CSS classes, for use with icon fonts.
     * - Loads icons from URLs and extracts individual icons from icon sets.
     */


    var MatIconRegistry = /*#__PURE__*/function () {
      /**
       * @param {?} _httpClient
       * @param {?} _sanitizer
       * @param {?} document
       * @param {?=} _errorHandler
       */
      function MatIconRegistry(_httpClient, _sanitizer, document, _errorHandler) {
        _classCallCheck(this, MatIconRegistry);

        this._httpClient = _httpClient;
        this._sanitizer = _sanitizer;
        this._errorHandler = _errorHandler;
        /**
         * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
         */

        this._svgIconConfigs = new Map();
        /**
         * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
         * Multiple icon sets can be registered under the same namespace.
         */

        this._iconSetConfigs = new Map();
        /**
         * Cache for icons loaded by direct URLs.
         */

        this._cachedIconsByUrl = new Map();
        /**
         * In-progress icon fetches. Used to coalesce multiple requests to the same URL.
         */

        this._inProgressUrlFetches = new Map();
        /**
         * Map from font identifiers to their CSS class names. Used for icon fonts.
         */

        this._fontCssClassesByAlias = new Map();
        /**
         * The CSS class to apply when an `<mat-icon>` component has no icon name, url, or font specified.
         * The default 'material-icons' value assumes that the material icon font has been loaded as
         * described at http://google.github.io/material-design-icons/#icon-font-for-the-web
         */

        this._defaultFontSetClass = 'material-icons';
        this._document = document;
      }
      /**
       * Registers an icon by URL in the default namespace.
       * @template THIS
       * @this {THIS}
       * @param {?} iconName Name under which the icon should be registered.
       * @param {?} url
       * @param {?=} options
       * @return {THIS}
       */


      _createClass(MatIconRegistry, [{
        key: "addSvgIcon",
        value: function addSvgIcon(iconName, url, options) {
          return (
            /** @type {?} */
            this.addSvgIconInNamespace('', iconName, url, options)
          );
        }
        /**
         * Registers an icon using an HTML string in the default namespace.
         * @template THIS
         * @this {THIS}
         * @param {?} iconName Name under which the icon should be registered.
         * @param {?} literal SVG source of the icon.
         * @param {?=} options
         * @return {THIS}
         */

      }, {
        key: "addSvgIconLiteral",
        value: function addSvgIconLiteral(iconName, literal, options) {
          return (
            /** @type {?} */
            this.addSvgIconLiteralInNamespace('', iconName, literal, options)
          );
        }
        /**
         * Registers an icon by URL in the specified namespace.
         * @template THIS
         * @this {THIS}
         * @param {?} namespace Namespace in which the icon should be registered.
         * @param {?} iconName Name under which the icon should be registered.
         * @param {?} url
         * @param {?=} options
         * @return {THIS}
         */

      }, {
        key: "addSvgIconInNamespace",
        value: function addSvgIconInNamespace(namespace, iconName, url, options) {
          return (
            /** @type {?} */
            this._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url, options))
          );
        }
        /**
         * Registers an icon using an HTML string in the specified namespace.
         * @template THIS
         * @this {THIS}
         * @param {?} namespace Namespace in which the icon should be registered.
         * @param {?} iconName Name under which the icon should be registered.
         * @param {?} literal SVG source of the icon.
         * @param {?=} options
         * @return {THIS}
         */

      }, {
        key: "addSvgIconLiteralInNamespace",
        value: function addSvgIconLiteralInNamespace(namespace, iconName, literal, options) {
          /** @type {?} */
          var sanitizedLiteral =
          /** @type {?} */
          this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, literal);

          if (!sanitizedLiteral) {
            throw getMatIconFailedToSanitizeLiteralError(literal);
          }
          /** @type {?} */


          var svgElement =
          /** @type {?} */
          this._createSvgElementForSingleIcon(sanitizedLiteral, options);

          return (
            /** @type {?} */
            this._addSvgIconConfig(namespace, iconName, new SvgIconConfig(svgElement, options))
          );
        }
        /**
         * Registers an icon set by URL in the default namespace.
         * @template THIS
         * @this {THIS}
         * @param {?} url
         * @param {?=} options
         * @return {THIS}
         */

      }, {
        key: "addSvgIconSet",
        value: function addSvgIconSet(url, options) {
          return (
            /** @type {?} */
            this.addSvgIconSetInNamespace('', url, options)
          );
        }
        /**
         * Registers an icon set using an HTML string in the default namespace.
         * @template THIS
         * @this {THIS}
         * @param {?} literal SVG source of the icon set.
         * @param {?=} options
         * @return {THIS}
         */

      }, {
        key: "addSvgIconSetLiteral",
        value: function addSvgIconSetLiteral(literal, options) {
          return (
            /** @type {?} */
            this.addSvgIconSetLiteralInNamespace('', literal, options)
          );
        }
        /**
         * Registers an icon set by URL in the specified namespace.
         * @template THIS
         * @this {THIS}
         * @param {?} namespace Namespace in which to register the icon set.
         * @param {?} url
         * @param {?=} options
         * @return {THIS}
         */

      }, {
        key: "addSvgIconSetInNamespace",
        value: function addSvgIconSetInNamespace(namespace, url, options) {
          return (
            /** @type {?} */
            this._addSvgIconSetConfig(namespace, new SvgIconConfig(url, options))
          );
        }
        /**
         * Registers an icon set using an HTML string in the specified namespace.
         * @template THIS
         * @this {THIS}
         * @param {?} namespace Namespace in which to register the icon set.
         * @param {?} literal SVG source of the icon set.
         * @param {?=} options
         * @return {THIS}
         */

      }, {
        key: "addSvgIconSetLiteralInNamespace",
        value: function addSvgIconSetLiteralInNamespace(namespace, literal, options) {
          /** @type {?} */
          var sanitizedLiteral =
          /** @type {?} */
          this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, literal);

          if (!sanitizedLiteral) {
            throw getMatIconFailedToSanitizeLiteralError(literal);
          }
          /** @type {?} */


          var svgElement =
          /** @type {?} */
          this._svgElementFromString(sanitizedLiteral);

          return (
            /** @type {?} */
            this._addSvgIconSetConfig(namespace, new SvgIconConfig(svgElement, options))
          );
        }
        /**
         * Defines an alias for a CSS class name to be used for icon fonts. Creating an matIcon
         * component with the alias as the fontSet input will cause the class name to be applied
         * to the `<mat-icon>` element.
         *
         * @template THIS
         * @this {THIS}
         * @param {?} alias Alias for the font.
         * @param {?=} className Class name override to be used instead of the alias.
         * @return {THIS}
         */

      }, {
        key: "registerFontClassAlias",
        value: function registerFontClassAlias(alias) {
          var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : alias;

          /** @type {?} */
          this._fontCssClassesByAlias.set(alias, className);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Returns the CSS class name associated with the alias by a previous call to
         * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
         * @param {?} alias
         * @return {?}
         */

      }, {
        key: "classNameForFontAlias",
        value: function classNameForFontAlias(alias) {
          return this._fontCssClassesByAlias.get(alias) || alias;
        }
        /**
         * Sets the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
         * have a fontSet input value, and is not loading an icon by name or URL.
         *
         * @template THIS
         * @this {THIS}
         * @param {?} className
         * @return {THIS}
         */

      }, {
        key: "setDefaultFontSetClass",
        value: function setDefaultFontSetClass(className) {
          /** @type {?} */
          this._defaultFontSetClass = className;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Returns the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
         * have a fontSet input value, and is not loading an icon by name or URL.
         * @return {?}
         */

      }, {
        key: "getDefaultFontSetClass",
        value: function getDefaultFontSetClass() {
          return this._defaultFontSetClass;
        }
        /**
         * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
         * The response from the URL may be cached so this will not always cause an HTTP request, but
         * the produced element will always be a new copy of the originally fetched icon. (That is,
         * it will not contain any modifications made to elements previously returned).
         *
         * @param {?} safeUrl URL from which to fetch the SVG icon.
         * @return {?}
         */

      }, {
        key: "getSvgIconFromUrl",
        value: function getSvgIconFromUrl(safeUrl) {
          var _this10 = this;

          /** @type {?} */
          var url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].RESOURCE_URL, safeUrl);

          if (!url) {
            throw getMatIconFailedToSanitizeUrlError(safeUrl);
          }
          /** @type {?} */


          var cachedIcon = this._cachedIconsByUrl.get(url);

          if (cachedIcon) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(cloneSvg(cachedIcon));
          }

          return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(
          /**
          * @param {?} svg
          * @return {?}
          */
          function (svg) {
            return _this10._cachedIconsByUrl.set(
            /** @type {?} */
            url, svg);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
          /**
          * @param {?} svg
          * @return {?}
          */
          function (svg) {
            return cloneSvg(svg);
          }));
        }
        /**
         * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
         * and namespace. The icon must have been previously registered with addIcon or addIconSet;
         * if not, the Observable will throw an error.
         *
         * @param {?} name Name of the icon to be retrieved.
         * @param {?=} namespace Namespace in which to look for the icon.
         * @return {?}
         */

      }, {
        key: "getNamedSvgIcon",
        value: function getNamedSvgIcon(name) {
          var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          // Return (copy of) cached icon if possible.

          /** @type {?} */
          var key = iconKey(namespace, name);
          /** @type {?} */

          var config = this._svgIconConfigs.get(key);

          if (config) {
            return this._getSvgFromConfig(config);
          } // See if we have any icon sets registered for the namespace.

          /** @type {?} */


          var iconSetConfigs = this._iconSetConfigs.get(namespace);

          if (iconSetConfigs) {
            return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(getMatIconNameNotFoundError(key));
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._svgIconConfigs.clear();

          this._iconSetConfigs.clear();

          this._cachedIconsByUrl.clear();
        }
        /**
         * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
         * @private
         * @param {?} config
         * @return {?}
         */

      }, {
        key: "_getSvgFromConfig",
        value: function _getSvgFromConfig(config) {
          if (config.svgElement) {
            // We already have the SVG element for this icon, return a copy.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(cloneSvg(config.svgElement));
          } else {
            // Fetch the icon from the config's URL, cache it, and return a copy.
            return this._loadSvgIconFromConfig(config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(
            /**
            * @param {?} svg
            * @return {?}
            */
            function (svg) {
              return config.svgElement = svg;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
            /**
            * @param {?} svg
            * @return {?}
            */
            function (svg) {
              return cloneSvg(svg);
            }));
          }
        }
        /**
         * Attempts to find an icon with the specified name in any of the SVG icon sets.
         * First searches the available cached icons for a nested element with a matching name, and
         * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
         * that have not been cached, and searches again after all fetches are completed.
         * The returned Observable produces the SVG element if possible, and throws
         * an error if no icon with the specified name can be found.
         * @private
         * @param {?} name
         * @param {?} iconSetConfigs
         * @return {?}
         */

      }, {
        key: "_getSvgFromIconSetConfigs",
        value: function _getSvgFromIconSetConfigs(name, iconSetConfigs) {
          var _this11 = this;

          // For all the icon set SVG elements we've fetched, see if any contain an icon with the
          // requested name.

          /** @type {?} */
          var namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);

          if (namedIcon) {
            // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
            // time anyway, there's probably not much advantage compared to just always extracting
            // it from the icon set.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(namedIcon);
          } // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
          // fetched, fetch them now and look for iconName in the results.

          /** @type {?} */


          var iconSetFetchRequests = iconSetConfigs.filter(
          /**
          * @param {?} iconSetConfig
          * @return {?}
          */
          function (iconSetConfig) {
            return !iconSetConfig.svgElement;
          }).map(
          /**
          * @param {?} iconSetConfig
          * @return {?}
          */
          function (iconSetConfig) {
            return _this11._loadSvgIconSetFromConfig(iconSetConfig).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(
            /**
            * @param {?} err
            * @return {?}
            */
            function (err) {
              /** @type {?} */
              var url = _this11._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].RESOURCE_URL, iconSetConfig.url); // Swallow errors fetching individual URLs so the
              // combined Observable won't necessarily fail.

              /** @type {?} */


              var errorMessage = "Loading icon set URL: ".concat(url, " failed: ").concat(err.message); // @breaking-change 9.0.0 _errorHandler parameter to be made required

              if (_this11._errorHandler) {
                _this11._errorHandler.handleError(new Error(errorMessage));
              } else {
                console.error(errorMessage);
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(null);
            }));
          }); // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
          // cached SVG element (unless the request failed), and we can check again for the icon.

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(iconSetFetchRequests).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var foundIcon = _this11._extractIconWithNameFromAnySet(name, iconSetConfigs);

            if (!foundIcon) {
              throw getMatIconNameNotFoundError(name);
            }

            return foundIcon;
          }));
        }
        /**
         * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
         * tag matches the specified name. If found, copies the nested element to a new SVG element and
         * returns it. Returns null if no matching element is found.
         * @private
         * @param {?} iconName
         * @param {?} iconSetConfigs
         * @return {?}
         */

      }, {
        key: "_extractIconWithNameFromAnySet",
        value: function _extractIconWithNameFromAnySet(iconName, iconSetConfigs) {
          // Iterate backwards, so icon sets added later have precedence.
          for (var i = iconSetConfigs.length - 1; i >= 0; i--) {
            /** @type {?} */
            var config = iconSetConfigs[i];

            if (config.svgElement) {
              /** @type {?} */
              var foundIcon = this._extractSvgIconFromSet(config.svgElement, iconName, config.options);

              if (foundIcon) {
                return foundIcon;
              }
            }
          }

          return null;
        }
        /**
         * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
         * from it.
         * @private
         * @param {?} config
         * @return {?}
         */

      }, {
        key: "_loadSvgIconFromConfig",
        value: function _loadSvgIconFromConfig(config) {
          var _this12 = this;

          return this._fetchUrl(config.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
          /**
          * @param {?} svgText
          * @return {?}
          */
          function (svgText) {
            return _this12._createSvgElementForSingleIcon(svgText, config.options);
          }));
        }
        /**
         * Loads the content of the icon set URL specified in the SvgIconConfig and creates an SVG element
         * from it.
         * @private
         * @param {?} config
         * @return {?}
         */

      }, {
        key: "_loadSvgIconSetFromConfig",
        value: function _loadSvgIconSetFromConfig(config) {
          var _this13 = this;

          // If the SVG for this icon set has already been parsed, do nothing.
          if (config.svgElement) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(config.svgElement);
          }

          return this._fetchUrl(config.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
          /**
          * @param {?} svgText
          * @return {?}
          */
          function (svgText) {
            // It is possible that the icon set was parsed and cached by an earlier request, so parsing
            // only needs to occur if the cache is yet unset.
            if (!config.svgElement) {
              config.svgElement = _this13._svgElementFromString(svgText);
            }

            return config.svgElement;
          }));
        }
        /**
         * Creates a DOM element from the given SVG string, and adds default attributes.
         * @private
         * @param {?} responseText
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "_createSvgElementForSingleIcon",
        value: function _createSvgElementForSingleIcon(responseText, options) {
          /** @type {?} */
          var svg = this._svgElementFromString(responseText);

          this._setSvgAttributes(svg, options);

          return svg;
        }
        /**
         * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
         * tag matches the specified name. If found, copies the nested element to a new SVG element and
         * returns it. Returns null if no matching element is found.
         * @private
         * @param {?} iconSet
         * @param {?} iconName
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "_extractSvgIconFromSet",
        value: function _extractSvgIconFromSet(iconSet, iconName, options) {
          // Use the `id="iconName"` syntax in order to escape special
          // characters in the ID (versus using the #iconName syntax).

          /** @type {?} */
          var iconSource = iconSet.querySelector("[id=\"".concat(iconName, "\"]"));

          if (!iconSource) {
            return null;
          } // Clone the element and remove the ID to prevent multiple elements from being added
          // to the page with the same ID.

          /** @type {?} */


          var iconElement =
          /** @type {?} */
          iconSource.cloneNode(true);
          iconElement.removeAttribute('id'); // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
          // the content of a new <svg> node.

          if (iconElement.nodeName.toLowerCase() === 'svg') {
            return this._setSvgAttributes(
            /** @type {?} */
            iconElement, options);
          } // If the node is a <symbol>, it won't be rendered so we have to convert it into <svg>. Note
          // that the same could be achieved by referring to it via <use href="#id">, however the <use>
          // tag is problematic on Firefox, because it needs to include the current page path.


          if (iconElement.nodeName.toLowerCase() === 'symbol') {
            return this._setSvgAttributes(this._toSvgElement(iconElement), options);
          } // createElement('SVG') doesn't work as expected; the DOM ends up with
          // the correct nodes, but the SVG content doesn't render. Instead we
          // have to create an empty SVG node using innerHTML and append its content.
          // Elements created using DOMParser.parseFromString have the same problem.
          // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display

          /** @type {?} */


          var svg = this._svgElementFromString('<svg></svg>'); // Clone the node so we don't remove it from the parent icon set element.


          svg.appendChild(iconElement);
          return this._setSvgAttributes(svg, options);
        }
        /**
         * Creates a DOM element from the given SVG string.
         * @private
         * @param {?} str
         * @return {?}
         */

      }, {
        key: "_svgElementFromString",
        value: function _svgElementFromString(str) {
          /** @type {?} */
          var div = this._document.createElement('DIV');

          div.innerHTML = str;
          /** @type {?} */

          var svg =
          /** @type {?} */
          div.querySelector('svg');

          if (!svg) {
            throw Error('<svg> tag not found');
          }

          return svg;
        }
        /**
         * Converts an element into an SVG node by cloning all of its children.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_toSvgElement",
        value: function _toSvgElement(element) {
          /** @type {?} */
          var svg = this._svgElementFromString('<svg></svg>');
          /** @type {?} */


          var attributes = element.attributes; // Copy over all the attributes from the `symbol` to the new SVG, except the id.

          for (var i = 0; i < attributes.length; i++) {
            var _attributes$i = attributes[i],
                name = _attributes$i.name,
                value = _attributes$i.value;

            if (name !== 'id') {
              svg.setAttribute(name, value);
            }
          }

          for (var _i2 = 0; _i2 < element.childNodes.length; _i2++) {
            if (element.childNodes[_i2].nodeType === this._document.ELEMENT_NODE) {
              svg.appendChild(element.childNodes[_i2].cloneNode(true));
            }
          }

          return svg;
        }
        /**
         * Sets the default attributes for an SVG element to be used as an icon.
         * @private
         * @param {?} svg
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "_setSvgAttributes",
        value: function _setSvgAttributes(svg, options) {
          svg.setAttribute('fit', '');
          svg.setAttribute('height', '100%');
          svg.setAttribute('width', '100%');
          svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
          svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.

          if (options && options.viewBox) {
            svg.setAttribute('viewBox', options.viewBox);
          }

          return svg;
        }
        /**
         * Returns an Observable which produces the string contents of the given URL. Results may be
         * cached, so future calls with the same URL may not cause another HTTP request.
         * @private
         * @param {?} safeUrl
         * @return {?}
         */

      }, {
        key: "_fetchUrl",
        value: function _fetchUrl(safeUrl) {
          var _this14 = this;

          if (!this._httpClient) {
            throw getMatIconNoHttpProviderError();
          }

          if (safeUrl == null) {
            throw Error("Cannot fetch icon from URL \"".concat(safeUrl, "\"."));
          }
          /** @type {?} */


          var url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].RESOURCE_URL, safeUrl);

          if (!url) {
            throw getMatIconFailedToSanitizeUrlError(safeUrl);
          } // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
          // already a request in progress for that URL. It's necessary to call share() on the
          // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.

          /** @type {?} */


          var inProgressFetch = this._inProgressUrlFetches.get(url);

          if (inProgressFetch) {
            return inProgressFetch;
          } // TODO(jelbourn): for some reason, the `finalize` operator "loses" the generic type on the
          // Observable. Figure out why and fix it.

          /** @type {?} */


          var req = this._httpClient.get(url, {
            responseType: 'text'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(
          /**
          * @return {?}
          */
          function () {
            return _this14._inProgressUrlFetches["delete"](url);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());

          this._inProgressUrlFetches.set(url, req);

          return req;
        }
        /**
         * Registers an icon config by name in the specified namespace.
         * @private
         * @template THIS
         * @this {THIS}
         * @param {?} namespace Namespace in which to register the icon config.
         * @param {?} iconName Name under which to register the config.
         * @param {?} config Config to be registered.
         * @return {THIS}
         */

      }, {
        key: "_addSvgIconConfig",
        value: function _addSvgIconConfig(namespace, iconName, config) {
          /** @type {?} */
          this._svgIconConfigs.set(iconKey(namespace, iconName), config);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Registers an icon set config in the specified namespace.
         * @private
         * @template THIS
         * @this {THIS}
         * @param {?} namespace Namespace in which to register the icon config.
         * @param {?} config Config to be registered.
         * @return {THIS}
         */

      }, {
        key: "_addSvgIconSetConfig",
        value: function _addSvgIconSetConfig(namespace, config) {
          /** @type {?} */
          var configNamespace =
          /** @type {?} */
          this._iconSetConfigs.get(namespace);

          if (configNamespace) {
            configNamespace.push(config);
          } else {
            /** @type {?} */
            this._iconSetConfigs.set(namespace, [config]);
          }

          return (
            /** @type {?} */
            this
          );
        }
      }]);

      return MatIconRegistry;
    }();

    MatIconRegistry.ɵfac = function MatIconRegistry_Factory(t) {
      return new (t || MatIconRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], 8));
    };
    /** @nocollapse */


    MatIconRegistry.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };
    /** @nocollapse */


    MatIconRegistry.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function MatIconRegistry_Factory() {
        return new MatIconRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], 8));
      },
      token: MatIconRegistry,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatIconRegistry, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * \@docs-private
     * @param {?} parentRegistry
     * @param {?} httpClient
     * @param {?} sanitizer
     * @param {?=} document
     * @param {?=} errorHandler
     * @return {?}
     */


    function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, httpClient, sanitizer, document, errorHandler) {
      return parentRegistry || new MatIconRegistry(httpClient, sanitizer, document, errorHandler);
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var ICON_REGISTRY_PROVIDER = {
      // If there is already an MatIconRegistry available, use that. Otherwise, provide a new one.
      provide: MatIconRegistry,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), MatIconRegistry], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](),
      /** @type {?} */
      _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]],
      useFactory: ICON_REGISTRY_PROVIDER_FACTORY
    };
    /**
     * Clones an SVGElement while preserving type information.
     * @param {?} svg
     * @return {?}
     */

    function cloneSvg(svg) {
      return (
        /** @type {?} */
        svg.cloneNode(true)
      );
    }
    /**
     * Returns the cache key to use for an icon namespace and name.
     * @param {?} namespace
     * @param {?} name
     * @return {?}
     */


    function iconKey(namespace, name) {
      return namespace + ':' + name;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/icon/icon.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to MatIcon.

    /**
     * \@docs-private
     */


    var MatIconBase =
    /**
     * @param {?} _elementRef
     */
    function MatIconBase(_elementRef) {
      _classCallCheck(this, MatIconBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /** @type {?} */


    var _MatIconMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinColor"])(MatIconBase);
    /**
     * Injection token used to provide the current location to `MatIcon`.
     * Used to handle server-side rendering and to stub out during unit tests.
     * \@docs-private
     * @type {?}
     */


    var MAT_ICON_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-icon-location', {
      providedIn: 'root',
      factory: MAT_ICON_LOCATION_FACTORY
    });
    /**
     * Stubbed out location for `MatIcon`.
     * \@docs-private
     * @record
     */

    function MatIconLocation() {}

    if (false) {}
    /**
     * \@docs-private
     * @return {?}
     */


    function MAT_ICON_LOCATION_FACTORY() {
      /** @type {?} */
      var _document = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]);
      /** @type {?} */


      var _location = _document ? _document.location : null;

      return {
        // Note that this needs to be a function, rather than a property, because Angular
        // will only resolve it once, but we want the current path on each call.
        getPathname:
        /**
        * @return {?}
        */
        function getPathname() {
          return _location ? _location.pathname + _location.search : '';
        }
      };
    }
    /**
     * SVG attributes that accept a FuncIRI (e.g. `url(<something>)`).
     * @type {?}
     */


    var funcIriAttributes = ['clip-path', 'color-profile', 'src', 'cursor', 'fill', 'filter', 'marker', 'marker-start', 'marker-mid', 'marker-end', 'mask', 'stroke'];

    var ɵ0 =
    /**
    * @param {?} attr
    * @return {?}
    */
    function ɵ0(attr) {
      return "[".concat(attr, "]");
    };
    /**
     * Selector that can be used to find all elements that are using a `FuncIRI`.
     * @type {?}
     */


    var funcIriAttributeSelector = funcIriAttributes.map(ɵ0).join(', ');
    /**
     * Regex that can be used to extract the id out of a FuncIRI.
     * @type {?}
     */

    var funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;
    /**
     * Component to display an icon. It can be used in the following ways:
     *
     * - Specify the svgIcon input to load an SVG icon from a URL previously registered with the
     *   addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
     *   MatIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
     *   "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
     *   Examples:
     *     `<mat-icon svgIcon="left-arrow"></mat-icon>
     *     <mat-icon svgIcon="animals:cat"></mat-icon>`
     *
     * - Use a font ligature as an icon by putting the ligature text in the content of the `<mat-icon>`
     *   component. By default the Material icons font is used as described at
     *   http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
     *   alternate font by setting the fontSet input to either the CSS class to apply to use the
     *   desired font, or to an alias previously registered with MatIconRegistry.registerFontClassAlias.
     *   Examples:
     *     `<mat-icon>home</mat-icon>
     *     <mat-icon fontSet="myfont">sun</mat-icon>`
     *
     * - Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
     *   font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
     *   CSS class which causes the glyph to be displayed via a :before selector, as in
     *   https://fortawesome.github.io/Font-Awesome/examples/
     *   Example:
     *     `<mat-icon fontSet="fa" fontIcon="alarm"></mat-icon>`
     */

    var MatIcon = /*#__PURE__*/function (_MatIconMixinBase2) {
      _inherits(MatIcon, _MatIconMixinBase2);

      var _super2 = _createSuper(MatIcon);

      /**
       * @param {?} elementRef
       * @param {?} _iconRegistry
       * @param {?} ariaHidden
       * @param {?=} _location
       * @param {?=} _errorHandler
       */
      function MatIcon(elementRef, _iconRegistry, ariaHidden, _location, _errorHandler) {
        var _this15;

        _classCallCheck(this, MatIcon);

        _this15 = _super2.call(this, elementRef);
        _this15._iconRegistry = _iconRegistry;
        _this15._location = _location;
        _this15._errorHandler = _errorHandler;
        _this15._inline = false; // If the user has not explicitly set aria-hidden, mark the icon as hidden, as this is
        // the right thing to do for the majority of icon use-cases.

        if (!ariaHidden) {
          elementRef.nativeElement.setAttribute('aria-hidden', 'true');
        }

        return _this15;
      }
      /**
       * Whether the icon should be inlined, automatically sizing the icon to match the font size of
       * the element the icon is contained in.
       * @return {?}
       */


      _createClass(MatIcon, [{
        key: "_splitIconName",

        /**
         * Splits an svgIcon binding value into its icon set and icon name components.
         * Returns a 2-element array of [(icon set), (icon name)].
         * The separator for the two fields is ':'. If there is no separator, an empty
         * string is returned for the icon set and the entire value is returned for
         * the icon name. If the argument is falsy, returns an array of two empty strings.
         * Throws an error if the name contains two or more ':' separators.
         * Examples:
         *   `'social:cake' -> ['social', 'cake']
         *   'penguin' -> ['', 'penguin']
         *   null -> ['', '']
         *   'a:b:c' -> (throws Error)`
         * @private
         * @param {?} iconName
         * @return {?}
         */
        value: function _splitIconName(iconName) {
          if (!iconName) {
            return ['', ''];
          }
          /** @type {?} */


          var parts = iconName.split(':');

          switch (parts.length) {
            case 1:
              return ['', parts[0]];
            // Use default namespace.

            case 2:
              return (
                /** @type {?} */
                parts
              );

            default:
              throw Error("Invalid icon name: \"".concat(iconName, "\""));
          }
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this16 = this;

          // Only update the inline SVG icon if the inputs changed, to avoid unnecessary DOM operations.

          /** @type {?} */
          var svgIconChanges = changes['svgIcon'];

          if (svgIconChanges) {
            if (this.svgIcon) {
              var _this$_splitIconName = this._splitIconName(this.svgIcon),
                  _this$_splitIconName2 = _slicedToArray(_this$_splitIconName, 2),
                  namespace = _this$_splitIconName2[0],
                  iconName = _this$_splitIconName2[1];

              this._iconRegistry.getNamedSvgIcon(iconName, namespace).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(
              /**
              * @param {?} svg
              * @return {?}
              */
              function (svg) {
                return _this16._setSvgElement(svg);
              },
              /**
              * @param {?} err
              * @return {?}
              */
              function (err) {
                /** @type {?} */
                var errorMessage = "Error retrieving icon ".concat(namespace, ":").concat(iconName, "! ").concat(err.message); // @breaking-change 9.0.0 _errorHandler parameter to be made required.

                if (_this16._errorHandler) {
                  _this16._errorHandler.handleError(new Error(errorMessage));
                } else {
                  console.error(errorMessage);
                }
              });
            } else if (svgIconChanges.previousValue) {
              this._clearSvgElement();
            }
          }

          if (this._usingFontIcon()) {
            this._updateFontIconClasses();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          // Update font classes because ngOnChanges won't be called if none of the inputs are present,
          // e.g. <mat-icon>arrow</mat-icon> In this case we need to add a CSS class for the default font.
          if (this._usingFontIcon()) {
            this._updateFontIconClasses();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          /** @type {?} */
          var cachedElements = this._elementsWithExternalReferences;

          if (cachedElements && this._location && cachedElements.size) {
            /** @type {?} */
            var newPath = this._location.getPathname(); // We need to check whether the URL has changed on each change detection since
            // the browser doesn't have an API that will let us react on link clicks and
            // we can't depend on the Angular router. The references need to be updated,
            // because while most browsers don't care whether the URL is correct after
            // the first render, Safari will break if the user navigates to a different
            // page and the SVG isn't re-rendered.


            if (newPath !== this._previousPath) {
              this._previousPath = newPath;

              this._prependPathToReferences(newPath);
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._elementsWithExternalReferences) {
            this._elementsWithExternalReferences.clear();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_usingFontIcon",
        value: function _usingFontIcon() {
          return !this.svgIcon;
        }
        /**
         * @private
         * @param {?} svg
         * @return {?}
         */

      }, {
        key: "_setSvgElement",
        value: function _setSvgElement(svg) {
          this._clearSvgElement(); // Workaround for IE11 and Edge ignoring `style` tags inside dynamically-created SVGs.
          // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
          // Do this before inserting the element into the DOM, in order to avoid a style recalculation.

          /** @type {?} */


          var styleTags =
          /** @type {?} */
          svg.querySelectorAll('style');

          for (var i = 0; i < styleTags.length; i++) {
            styleTags[i].textContent += ' ';
          } // Note: we do this fix here, rather than the icon registry, because the
          // references have to point to the URL at the time that the icon was created.


          if (this._location) {
            /** @type {?} */
            var path = this._location.getPathname();

            this._previousPath = path;

            this._cacheChildrenWithExternalReferences(svg);

            this._prependPathToReferences(path);
          }

          this._elementRef.nativeElement.appendChild(svg);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_clearSvgElement",
        value: function _clearSvgElement() {
          /** @type {?} */
          var layoutElement = this._elementRef.nativeElement;
          /** @type {?} */

          var childCount = layoutElement.childNodes.length;

          if (this._elementsWithExternalReferences) {
            this._elementsWithExternalReferences.clear();
          } // Remove existing non-element child nodes and SVGs, and add the new SVG element. Note that
          // we can't use innerHTML, because IE will throw if the element has a data binding.


          while (childCount--) {
            /** @type {?} */
            var child = layoutElement.childNodes[childCount]; // 1 corresponds to Node.ELEMENT_NODE. We remove all non-element nodes in order to get rid
            // of any loose text nodes, as well as any SVG elements in order to remove any old icons.

            if (child.nodeType !== 1 || child.nodeName.toLowerCase() === 'svg') {
              layoutElement.removeChild(child);
            }
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_updateFontIconClasses",
        value: function _updateFontIconClasses() {
          if (!this._usingFontIcon()) {
            return;
          }
          /** @type {?} */


          var elem = this._elementRef.nativeElement;
          /** @type {?} */

          var fontSetClass = this.fontSet ? this._iconRegistry.classNameForFontAlias(this.fontSet) : this._iconRegistry.getDefaultFontSetClass();

          if (fontSetClass != this._previousFontSetClass) {
            if (this._previousFontSetClass) {
              elem.classList.remove(this._previousFontSetClass);
            }

            if (fontSetClass) {
              elem.classList.add(fontSetClass);
            }

            this._previousFontSetClass = fontSetClass;
          }

          if (this.fontIcon != this._previousFontIconClass) {
            if (this._previousFontIconClass) {
              elem.classList.remove(this._previousFontIconClass);
            }

            if (this.fontIcon) {
              elem.classList.add(this.fontIcon);
            }

            this._previousFontIconClass = this.fontIcon;
          }
        }
        /**
         * Cleans up a value to be used as a fontIcon or fontSet.
         * Since the value ends up being assigned as a CSS class, we
         * have to trim the value and omit space-separated values.
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_cleanupFontValue",
        value: function _cleanupFontValue(value) {
          return typeof value === 'string' ? value.trim().split(' ')[0] : value;
        }
        /**
         * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
         * reference. This is required because WebKit browsers require references to be prefixed with
         * the current path, if the page has a `base` tag.
         * @private
         * @param {?} path
         * @return {?}
         */

      }, {
        key: "_prependPathToReferences",
        value: function _prependPathToReferences(path) {
          /** @type {?} */
          var elements = this._elementsWithExternalReferences;

          if (elements) {
            elements.forEach(
            /**
            * @param {?} attrs
            * @param {?} element
            * @return {?}
            */
            function (attrs, element) {
              attrs.forEach(
              /**
              * @param {?} attr
              * @return {?}
              */
              function (attr) {
                element.setAttribute(attr.name, "url('".concat(path, "#").concat(attr.value, "')"));
              });
            });
          }
        }
        /**
         * Caches the children of an SVG element that have `url()`
         * references that we need to prefix with the current path.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_cacheChildrenWithExternalReferences",
        value: function _cacheChildrenWithExternalReferences(element) {
          /** @type {?} */
          var elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
          /** @type {?} */

          var elements = this._elementsWithExternalReferences = this._elementsWithExternalReferences || new Map();

          var _loop = function _loop(i) {
            funcIriAttributes.forEach(
            /**
            * @param {?} attr
            * @return {?}
            */
            function (attr) {
              /** @type {?} */
              var elementWithReference = elementsWithFuncIri[i];
              /** @type {?} */

              var value = elementWithReference.getAttribute(attr);
              /** @type {?} */

              var match = value ? value.match(funcIriPattern) : null;

              if (match) {
                /** @type {?} */
                var attributes = elements.get(elementWithReference);

                if (!attributes) {
                  attributes = [];
                  elements.set(elementWithReference, attributes);
                }

                /** @type {?} */
                attributes.push({
                  name: attr,
                  value: match[1]
                });
              }
            });
          };

          for (var i = 0; i < elementsWithFuncIri.length; i++) {
            _loop(i);
          }
        }
      }, {
        key: "inline",
        get: function get() {
          return this._inline;
        }
        /**
         * @param {?} inline
         * @return {?}
         */
        ,
        set: function set(inline) {
          this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(inline);
        }
        /**
         * Font set that the icon is a part of.
         * @return {?}
         */

      }, {
        key: "fontSet",
        get: function get() {
          return this._fontSet;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._fontSet = this._cleanupFontValue(value);
        }
        /**
         * Name of an icon within a font set.
         * @return {?}
         */

      }, {
        key: "fontIcon",
        get: function get() {
          return this._fontIcon;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._fontIcon = this._cleanupFontValue(value);
        }
      }]);

      return MatIcon;
    }(_MatIconMixinBase);

    MatIcon.ɵfac = function MatIcon_Factory(t) {
      return new (t || MatIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('aria-hidden'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_ICON_LOCATION, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], 8));
    };

    MatIcon.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatIcon,
      selectors: [["mat-icon"]],
      hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
      hostVars: 4,
      hostBindings: function MatIcon_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-icon-inline", ctx.inline)("mat-icon-no-color", ctx.color !== "primary" && ctx.color !== "accent" && ctx.color !== "warn");
        }
      },
      inputs: {
        color: "color",
        inline: "inline",
        fontSet: "fontSet",
        fontIcon: "fontIcon",
        svgIcon: "svgIcon"
      },
      exportAs: ["matIcon"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function MatIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatIcon.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: MatIconRegistry
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
          args: ['aria-hidden']
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_ICON_LOCATION]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    MatIcon.propDecorators = {
      inline: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      svgIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fontSet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fontIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: '<ng-content></ng-content>',
          selector: 'mat-icon',
          exportAs: 'matIcon',
          inputs: ['color'],
          host: {
            'role': 'img',
            'class': 'mat-icon notranslate',
            '[class.mat-icon-inline]': 'inline',
            '[class.mat-icon-no-color]': 'color !== "primary" && color !== "accent" && color !== "warn"'
          },
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: MatIconRegistry
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
            args: ['aria-hidden']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_ICON_LOCATION]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, {
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fontSet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fontIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        svgIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/icon/icon-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatIconModule = function MatIconModule() {
      _classCallCheck(this, MatIconModule);
    };

    MatIconModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatIconModule
    });
    MatIconModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatIconModule_Factory(t) {
        return new (t || MatIconModule)();
      },
      imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatIconModule, {
        declarations: function declarations() {
          return [MatIcon];
        },
        imports: function imports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatIconModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
          exports: [MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
          declarations: [MatIcon]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/icon/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=icon.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js ***!
    \***********************************************************************/

  /*! exports provided: MAT_INPUT_VALUE_ACCESSOR, MatInput, MatInputModule, MatTextareaAutosize, getMatInputUnsupportedTypeError */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015InputJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_INPUT_VALUE_ACCESSOR", function () {
      return MAT_INPUT_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatInput", function () {
      return MatInput;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatInputModule", function () {
      return MatInputModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTextareaAutosize", function () {
      return MatTextareaAutosize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatInputUnsupportedTypeError", function () {
      return getMatInputUnsupportedTypeError;
    });
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/input/autosize.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Directive to automatically resize a textarea to fit its content.
     * @deprecated Use `cdkTextareaAutosize` from `\@angular/cdk/text-field` instead.
     * \@breaking-change 8.0.0
     */


    var MatTextareaAutosize = /*#__PURE__*/function (_angular_cdk_text_fie) {
      _inherits(MatTextareaAutosize, _angular_cdk_text_fie);

      var _super3 = _createSuper(MatTextareaAutosize);

      function MatTextareaAutosize() {
        _classCallCheck(this, MatTextareaAutosize);

        return _super3.apply(this, arguments);
      }

      _createClass(MatTextareaAutosize, [{
        key: "matAutosizeMinRows",

        /**
         * @return {?}
         */
        get: function get() {
          return this.minRows;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.minRows = value;
        }
        /**
         * @return {?}
         */

      }, {
        key: "matAutosizeMaxRows",
        get: function get() {
          return this.maxRows;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.maxRows = value;
        }
        /**
         * @return {?}
         */

      }, {
        key: "matAutosize",
        get: function get() {
          return this.enabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.enabled = value;
        }
        /**
         * @return {?}
         */

      }, {
        key: "matTextareaAutosize",
        get: function get() {
          return this.enabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.enabled = value;
        }
      }]);

      return MatTextareaAutosize;
    }(_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["CdkTextareaAutosize"]);

    MatTextareaAutosize.ɵfac = function MatTextareaAutosize_Factory(t) {
      return ɵMatTextareaAutosize_BaseFactory(t || MatTextareaAutosize);
    };

    MatTextareaAutosize.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatTextareaAutosize,
      selectors: [["textarea", "mat-autosize", ""], ["textarea", "matTextareaAutosize", ""]],
      hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize", "mat-autosize"],
      inputs: {
        cdkAutosizeMinRows: "cdkAutosizeMinRows",
        cdkAutosizeMaxRows: "cdkAutosizeMaxRows",
        matAutosizeMinRows: "matAutosizeMinRows",
        matAutosizeMaxRows: "matAutosizeMaxRows",
        matAutosize: ["mat-autosize", "matAutosize"],
        matTextareaAutosize: "matTextareaAutosize"
      },
      exportAs: ["matTextareaAutosize"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
    MatTextareaAutosize.propDecorators = {
      matAutosizeMinRows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      matAutosizeMaxRows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      matAutosize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['mat-autosize']
      }],
      matTextareaAutosize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };

    var ɵMatTextareaAutosize_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatTextareaAutosize);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTextareaAutosize, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'textarea[mat-autosize], textarea[matTextareaAutosize]',
          exportAs: 'matTextareaAutosize',
          inputs: ['cdkAutosizeMinRows', 'cdkAutosizeMaxRows'],
          host: {
            'class': 'cdk-textarea-autosize mat-autosize',
            // Textarea elements that have the directive applied should have a single row by default.
            // Browsers normally show two rows by default and therefore this limits the minRows binding.
            'rows': '1'
          }
        }]
      }], null, {
        matAutosizeMinRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        matAutosizeMaxRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        matAutosize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['mat-autosize']
        }],
        matTextareaAutosize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/input/input-errors.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * \@docs-private
     * @param {?} type
     * @return {?}
     */


    function getMatInputUnsupportedTypeError(type) {
      return Error("Input type \"".concat(type, "\" isn't supported by matInput."));
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/input/input-value-accessor.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This token is used to inject the object whose value should be set into `MatInput`. If none is
     * provided, the native `HTMLInputElement` is used. Directives like `MatDatepickerInput` can provide
     * themselves for this token, in order to make `MatInput` delegate the getting and setting of the
     * value to them.
     * @type {?}
     */


    var MAT_INPUT_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MAT_INPUT_VALUE_ACCESSOR');
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/input/input.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Invalid input type. Using one of these will throw an MatInputUnsupportedTypeError.

    /** @type {?} */

    var MAT_INPUT_INVALID_TYPES = ['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'range', 'reset', 'submit'];
    /** @type {?} */

    var nextUniqueId = 0; // Boilerplate for applying mixins to MatInput.

    /**
     * \@docs-private
     */

    var MatInputBase =
    /**
     * @param {?} _defaultErrorStateMatcher
     * @param {?} _parentForm
     * @param {?} _parentFormGroup
     * @param {?} ngControl
     */
    function MatInputBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
      _classCallCheck(this, MatInputBase);

      this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
      this._parentForm = _parentForm;
      this._parentFormGroup = _parentFormGroup;
      this.ngControl = ngControl;
    };

    if (false) {}
    /** @type {?} */


    var _MatInputMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinErrorState"])(MatInputBase);
    /**
     * Directive that allows a native input to work inside a `MatFormField`.
     */


    var MatInput = /*#__PURE__*/function (_MatInputMixinBase2) {
      _inherits(MatInput, _MatInputMixinBase2);

      var _super4 = _createSuper(MatInput);

      /**
       * @param {?} _elementRef
       * @param {?} _platform
       * @param {?} ngControl
       * @param {?} _parentForm
       * @param {?} _parentFormGroup
       * @param {?} _defaultErrorStateMatcher
       * @param {?} inputValueAccessor
       * @param {?} _autofillMonitor
       * @param {?} ngZone
       */
      function MatInput(_elementRef, _platform, ngControl, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, inputValueAccessor, _autofillMonitor, ngZone) {
        var _this17;

        _classCallCheck(this, MatInput);

        _this17 = _super4.call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
        _this17._elementRef = _elementRef;
        _this17._platform = _platform;
        _this17.ngControl = ngControl;
        _this17._autofillMonitor = _autofillMonitor;
        _this17._uid = "mat-input-".concat(nextUniqueId++);
        /**
         * Whether the component is being rendered on the server.
         */

        _this17._isServer = false;
        /**
         * Whether the component is a native html select.
         */

        _this17._isNativeSelect = false;
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */

        _this17.focused = false;
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */

        _this17.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */

        _this17.controlType = 'mat-input';
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */

        _this17.autofilled = false;
        _this17._disabled = false;
        _this17._required = false;
        _this17._type = 'text';
        _this17._readonly = false;
        _this17._neverEmptyInputTypes = ['date', 'datetime', 'datetime-local', 'month', 'time', 'week'].filter(
        /**
        * @param {?} t
        * @return {?}
        */
        function (t) {
          return Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["getSupportedInputTypes"])().has(t);
        });
        /** @type {?} */

        var element = _this17._elementRef.nativeElement; // If no input value accessor was explicitly specified, use the element as the input value
        // accessor.

        _this17._inputValueAccessor = inputValueAccessor || element;
        _this17._previousNativeValue = _this17.value; // Force setter to be called in case id was not specified.

        _this17.id = _this17.id; // On some versions of iOS the caret gets stuck in the wrong place when holding down the delete
        // key. In order to get around this we need to "jiggle" the caret loose. Since this bug only
        // exists on iOS, we only bother to install the listener on iOS.

        if (_platform.IOS) {
          ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _elementRef.nativeElement.addEventListener('keyup',
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              /** @type {?} */
              var el =
              /** @type {?} */
              event.target;

              if (!el.value && !el.selectionStart && !el.selectionEnd) {
                // Note: Just setting `0, 0` doesn't fix the issue. Setting
                // `1, 1` fixes it for the first time that you type text and
                // then hold delete. Toggling to `1, 1` and then back to
                // `0, 0` seems to completely fix it.
                el.setSelectionRange(1, 1);
                el.setSelectionRange(0, 0);
              }
            });
          });
        }

        _this17._isServer = !_this17._platform.isBrowser;
        _this17._isNativeSelect = element.nodeName.toLowerCase() === 'select';

        if (_this17._isNativeSelect) {
          _this17.controlType =
          /** @type {?} */
          element.multiple ? 'mat-native-select-multiple' : 'mat-native-select';
        }

        return _this17;
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * \@docs-private
       * @return {?}
       */


      _createClass(MatInput, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this18 = this;

          if (this._platform.isBrowser) {
            this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              _this18.autofilled = event.isAutofilled;

              _this18.stateChanges.next();
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.stateChanges.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.stateChanges.complete();

          if (this._platform.isBrowser) {
            this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this.ngControl) {
            // We need to re-evaluate this on every change detection cycle, because there are some
            // error triggers that we can't subscribe to (e.g. parent form submissions). This means
            // that whatever logic is in here has to be super lean or we risk destroying the performance.
            this.updateErrorState();
          } // We need to dirty-check the native element's value, because there are some cases where
          // we won't be notified when it changes (e.g. the consumer isn't using forms or they're
          // updating the value using `emitEvent: false`).


          this._dirtyCheckNativeValue();
        }
        /**
         * Focuses the input.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus(options) {
          this._elementRef.nativeElement.focus(options);
        } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritten.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.

        /**
         * Callback for the cases where the focused state of the input changes.
         * @param {?} isFocused
         * @return {?}
         */
        // tslint:disable:no-host-decorator-in-concrete
        // tslint:enable:no-host-decorator-in-concrete

      }, {
        key: "_focusChanged",
        value: function _focusChanged(isFocused) {
          if (isFocused !== this.focused && (!this.readonly || !isFocused)) {
            this.focused = isFocused;
            this.stateChanges.next();
          }
        } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritten.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
        // tslint:disable-next-line:no-host-decorator-in-concrete

        /**
         * @return {?}
         */

      }, {
        key: "_onInput",
        value: function _onInput() {} // This is a noop function and is used to let Angular know whenever the value changes.
        // Angular will run a new change detection each time the `input` event has been dispatched.
        // It's necessary that Angular recognizes the value change, because when floatingLabel
        // is set to false and Angular forms aren't used, the placeholder won't recognize the
        // value changes and will not disappear.
        // Listening to the input event wouldn't be necessary when the input is using the
        // FormsModule or ReactiveFormsModule, because Angular forms also listens to input events.

        /**
         * Determines if the component host is a textarea.
         * @return {?}
         */

      }, {
        key: "_isTextarea",
        value: function _isTextarea() {
          return this._elementRef.nativeElement.nodeName.toLowerCase() === 'textarea';
        }
        /**
         * Does some manual dirty checking on the native input `value` property.
         * @protected
         * @return {?}
         */

      }, {
        key: "_dirtyCheckNativeValue",
        value: function _dirtyCheckNativeValue() {
          /** @type {?} */
          var newValue = this._elementRef.nativeElement.value;

          if (this._previousNativeValue !== newValue) {
            this._previousNativeValue = newValue;
            this.stateChanges.next();
          }
        }
        /**
         * Make sure the input is a supported type.
         * @protected
         * @return {?}
         */

      }, {
        key: "_validateType",
        value: function _validateType() {
          if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1) {
            throw getMatInputUnsupportedTypeError(this._type);
          }
        }
        /**
         * Checks whether the input type is one of the types that are never empty.
         * @protected
         * @return {?}
         */

      }, {
        key: "_isNeverEmpty",
        value: function _isNeverEmpty() {
          return this._neverEmptyInputTypes.indexOf(this._type) > -1;
        }
        /**
         * Checks whether the input is invalid based on the native validation.
         * @protected
         * @return {?}
         */

      }, {
        key: "_isBadInput",
        value: function _isBadInput() {
          // The `validity` property won't be present on platform-server.

          /** @type {?} */
          var validity =
          /** @type {?} */
          this._elementRef.nativeElement.validity;
          return validity && validity.badInput;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "setDescribedByIds",

        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @param {?} ids
         * @return {?}
         */
        value: function setDescribedByIds(ids) {
          this._ariaDescribedby = ids.join(' ');
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "onContainerClick",
        value: function onContainerClick() {
          // Do not re-focus the input element if the element is already focused. Otherwise it can happen
          // that someone clicks on a time input and the cursor resets to the "hours" field while the
          // "minutes" field was actually clicked. See: https://github.com/angular/components/issues/12849
          if (!this.focused) {
            this.focus();
          }
        }
      }, {
        key: "disabled",
        get: function get() {
          if (this.ngControl && this.ngControl.disabled !== null) {
            return this.ngControl.disabled;
          }

          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value); // Browsers may not fire the blur event if the input is disabled too quickly.
          // Reset from here to ensure that the element doesn't become stuck.

          if (this.focused) {
            this.focused = false;
            this.stateChanges.next();
          }
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "id",
        get: function get() {
          return this._id;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._id = value || this._uid;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "required",
        get: function get() {
          return this._required;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        }
        /**
         * Input type of the element.
         * @return {?}
         */

      }, {
        key: "type",
        get: function get() {
          return this._type;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._type = value || 'text';

          this._validateType(); // When using Angular inputs, developers are no longer able to set the properties on the native
          // input element. To ensure that bindings for `type` work, we need to sync the setter
          // with the native property. Textarea elements don't support the type property or attribute.


          if (!this._isTextarea() && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["getSupportedInputTypes"])().has(this._type)) {
            /** @type {?} */
            this._elementRef.nativeElement.type = this._type;
          }
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this._inputValueAccessor.value;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value !== this.value) {
            this._inputValueAccessor.value = value;
            this.stateChanges.next();
          }
        }
        /**
         * Whether the element is readonly.
         * @return {?}
         */

      }, {
        key: "readonly",
        get: function get() {
          return this._readonly;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._readonly = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        }
      }, {
        key: "empty",
        get: function get() {
          return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "shouldLabelFloat",
        get: function get() {
          if (this._isNativeSelect) {
            // For a single-selection `<select>`, the label should float when the selected option has
            // a non-empty display value. For a `<select multiple>`, the label *always* floats to avoid
            // overlapping the label with the options.

            /** @type {?} */
            var selectElement =
            /** @type {?} */
            this._elementRef.nativeElement;
            /** @type {?} */

            var firstOption = selectElement.options[0]; // On most browsers the `selectedIndex` will always be 0, however on IE and Edge it'll be
            // -1 if the `value` is set to something, that isn't in the list of options, at a later point.

            return this.focused || selectElement.multiple || !this.empty || !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
          } else {
            return this.focused || !this.empty;
          }
        }
      }]);

      return MatInput;
    }(_MatInputMixinBase);

    MatInput.ɵfac = function MatInput_Factory(t) {
      return new (t || MatInput)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_INPUT_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    MatInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatInput,
      selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]],
      hostAttrs: [1, "mat-input-element", "mat-form-field-autofill-control"],
      hostVars: 10,
      hostBindings: function MatInput_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatInput_focus_HostBindingHandler() {
            return ctx._focusChanged(true);
          })("blur", function MatInput_blur_HostBindingHandler() {
            return ctx._focusChanged(false);
          })("input", function MatInput_input_HostBindingHandler() {
            return ctx._onInput();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("disabled", ctx.disabled)("required", ctx.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id)("placeholder", ctx.placeholder)("readonly", ctx.readonly && !ctx._isNativeSelect || null)("aria-describedby", ctx._ariaDescribedby || null)("aria-invalid", ctx.errorState)("aria-required", ctx.required.toString());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-input-server", ctx._isServer);
        }
      },
      inputs: {
        id: "id",
        disabled: "disabled",
        required: "required",
        type: "type",
        value: "value",
        readonly: "readonly",
        placeholder: "placeholder",
        errorStateMatcher: "errorStateMatcher"
      },
      exportAs: ["matInput"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldControl"],
        useExisting: MatInput
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    /** @nocollapse */

    MatInput.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [MAT_INPUT_VALUE_ACCESSOR]
        }]
      }, {
        type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    MatInput.propDecorators = {
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      placeholder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      required: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      errorStateMatcher: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      readonly: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      _focusChanged: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
        args: ['focus', ['true']]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
        args: ['blur', ['false']]
      }],
      _onInput: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
        args: ['input']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatInput, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: "input[matInput], textarea[matInput], select[matNativeControl],\n      input[matNativeControl], textarea[matNativeControl]",
          exportAs: 'matInput',
          host: {
            /**
             * \@breaking-change 8.0.0 remove .mat-form-field-autofill-control in favor of AutofillMonitor.
             */
            'class': 'mat-input-element mat-form-field-autofill-control',
            '[class.mat-input-server]': '_isServer',
            // Native input properties that are overwritten by Angular inputs need to be synced with
            // the native input element. Otherwise property bindings for those don't work.
            '[attr.id]': 'id',
            '[attr.placeholder]': 'placeholder',
            '[disabled]': 'disabled',
            '[required]': 'required',
            '[attr.readonly]': 'readonly && !_isNativeSelect || null',
            '[attr.aria-describedby]': '_ariaDescribedby || null',
            '[attr.aria-invalid]': 'errorState',
            '[attr.aria-required]': 'required.toString()'
          },
          providers: [{
            provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldControl"],
            useExisting: MatInput
          }]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_INPUT_VALUE_ACCESSOR]
          }]
        }, {
          type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        _focusChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['focus', ['true']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['blur', ['false']]
        }],
        _onInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['input']
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        errorStateMatcher: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/input/input-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatInputModule = function MatInputModule() {
      _classCallCheck(this, MatInputModule);
    };

    MatInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatInputModule
    });
    MatInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function MatInputModule_Factory(t) {
        return new (t || MatInputModule)();
      },
      providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]],
      imports: [[_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
      // be used together with `MatFormField`.
      _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatInputModule, {
        declarations: function declarations() {
          return [MatInput, MatTextareaAutosize];
        },
        imports: function imports() {
          return [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]];
        },
        exports: function exports() {
          return [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
          // be used together with `MatFormField`.
          _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], MatInput, MatTextareaAutosize];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatInputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [MatInput, MatTextareaAutosize],
          imports: [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]],
          exports: [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
          // be used together with `MatFormField`.
          _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], MatInput, MatTextareaAutosize],
          providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/input/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=input.js.map

    /***/

  },

  /***/
  "./src/app/core/index.ts":
  /*!*******************************!*\
    !*** ./src/app/core/index.ts ***!
    \*******************************/

  /*! exports provided: InteractionService, StudentService, AppLoaderService, AppInterceptorService */

  /***/
  function srcAppCoreIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./service */
    "./src/app/core/service/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InteractionService", function () {
      return _service__WEBPACK_IMPORTED_MODULE_0__["InteractionService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StudentService", function () {
      return _service__WEBPACK_IMPORTED_MODULE_0__["StudentService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppLoaderService", function () {
      return _service__WEBPACK_IMPORTED_MODULE_0__["AppLoaderService"];
    });
    /* harmony import */


    var _interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./interceptor */
    "./src/app/core/interceptor/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppInterceptorService", function () {
      return _interceptor__WEBPACK_IMPORTED_MODULE_1__["AppInterceptorService"];
    });
    /***/

  },

  /***/
  "./src/app/student-list/miscellaneous/miscellaneous-child1/miscellaneous-child1.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/student-list/miscellaneous/miscellaneous-child1/miscellaneous-child1.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: MiscellaneousChild1Component */

  /***/
  function srcAppStudentListMiscellaneousMiscellaneousChild1MiscellaneousChild1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MiscellaneousChild1Component", function () {
      return MiscellaneousChild1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_core_service_interaction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/core/service/interaction.service */
    "./src/app/core/service/interaction.service.ts");

    var MiscellaneousChild1Component = /*#__PURE__*/function () {
      function MiscellaneousChild1Component(interactionService) {
        _classCallCheck(this, MiscellaneousChild1Component);

        this.interactionService = interactionService;
      }

      _createClass(MiscellaneousChild1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.interactionService.studentList$.subscribe(function (message) {
            if (message == 'Good Morning Child') {
              _this19.greetingMessage = message + "-1";
              alert(message);

              _this19.interactionService.sentMessage('Good Morning Friend');
            }

            if (message == 'Thanks Child') {
              _this19.greetingMessage = message + "-1";
              alert(message);

              _this19.interactionService.sentMessage('Welcome Friend');
            }
          });
        }
      }]);

      return MiscellaneousChild1Component;
    }();

    MiscellaneousChild1Component.ɵfac = function MiscellaneousChild1Component_Factory(t) {
      return new (t || MiscellaneousChild1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_service_interaction_service__WEBPACK_IMPORTED_MODULE_1__["InteractionService"]));
    };

    MiscellaneousChild1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MiscellaneousChild1Component,
      selectors: [["app-miscellaneous-child1"]],
      decls: 6,
      vars: 2,
      consts: [[1, "child1"]],
      template: function MiscellaneousChild1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Child -1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.viewChildMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.greetingMessage);
        }
      },
      styles: [".child1[_ngcontent-%COMP%]{\r\n    color: #ffffff;\r\n    padding-left: 50px;\r\n    padding-top: 30px;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC1saXN0L21pc2NlbGxhbmVvdXMvbWlzY2VsbGFuZW91cy1jaGlsZDEvbWlzY2VsbGFuZW91cy1jaGlsZDEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCOztBQUVyQiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtbGlzdC9taXNjZWxsYW5lb3VzL21pc2NlbGxhbmVvdXMtY2hpbGQxL21pc2NlbGxhbmVvdXMtY2hpbGQxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hpbGQxe1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIFxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MiscellaneousChild1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-miscellaneous-child1',
          templateUrl: './miscellaneous-child1.component.html',
          styleUrls: ['./miscellaneous-child1.component.css']
        }]
      }], function () {
        return [{
          type: src_app_core_service_interaction_service__WEBPACK_IMPORTED_MODULE_1__["InteractionService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/student-list/miscellaneous/miscellaneous-child2/miscellaneous-child2.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/student-list/miscellaneous/miscellaneous-child2/miscellaneous-child2.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: MiscellaneousChild2Component */

  /***/
  function srcAppStudentListMiscellaneousMiscellaneousChild2MiscellaneousChild2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MiscellaneousChild2Component", function () {
      return MiscellaneousChild2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    var MiscellaneousChild2Component = /*#__PURE__*/function () {
      function MiscellaneousChild2Component() {
        _classCallCheck(this, MiscellaneousChild2Component);

        this.child2Variable = "Child -2";
      }

      _createClass(MiscellaneousChild2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "great",
        value: function great() {
          this.hashChild2Variable = 'Click Even with Template Reference';
        }
      }]);

      return MiscellaneousChild2Component;
    }();

    MiscellaneousChild2Component.ɵfac = function MiscellaneousChild2Component_Factory(t) {
      return new (t || MiscellaneousChild2Component)();
    };

    MiscellaneousChild2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MiscellaneousChild2Component,
      selectors: [["app-miscellaneous-child2"]],
      decls: 7,
      vars: 2,
      consts: [[1, "child2"], [1, "child2hash"]],
      template: function MiscellaneousChild2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Child -2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.child2Variable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hashChild2Variable);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"]],
      styles: [".child2[_ngcontent-%COMP%]{\r\n    color:orangered;\r\n    font-size: large;\r\n    padding-left: 80px;\r\n    padding-top: 10px;\r\n  }\r\n\r\n.child2hash[_ngcontent-%COMP%]{\r\n\r\n    color:black;\r\n    font-size: medium;\r\n    padding-top: 10px;\r\n    -webkit-animation: blinkingText 1.2s infinite;\r\n            animation: blinkingText 1.2s infinite;\r\n}\r\n\r\n.example-form-field[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n}\r\n\r\n@-webkit-keyframes blinkingText{\r\n    0%{     color: #000;    }\r\n    49%{    color: #000; }\r\n    60%{    color: transparent; }\r\n    99%{    color:transparent;  }\r\n    100%{   color: #000;    }\r\n}\r\n\r\n@keyframes blinkingText{\r\n    0%{     color: #000;    }\r\n    49%{    color: #000; }\r\n    60%{    color: transparent; }\r\n    99%{    color:transparent;  }\r\n    100%{   color: #000;    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC1saXN0L21pc2NlbGxhbmVvdXMvbWlzY2VsbGFuZW91cy1jaGlsZDIvbWlzY2VsbGFuZW91cy1jaGlsZDIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7QUFFRjs7SUFFSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiw2Q0FBcUM7WUFBckMscUNBQXFDO0FBQ3pDOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0lBQ0ksUUFBUSxXQUFXLEtBQUs7SUFDeEIsUUFBUSxXQUFXLEVBQUU7SUFDckIsUUFBUSxrQkFBa0IsRUFBRTtJQUM1QixRQUFRLGlCQUFpQixHQUFHO0lBQzVCLFFBQVEsV0FBVyxLQUFLO0FBQzVCOztBQU5BO0lBQ0ksUUFBUSxXQUFXLEtBQUs7SUFDeEIsUUFBUSxXQUFXLEVBQUU7SUFDckIsUUFBUSxrQkFBa0IsRUFBRTtJQUM1QixRQUFRLGlCQUFpQixHQUFHO0lBQzVCLFFBQVEsV0FBVyxLQUFLO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGVudC1saXN0L21pc2NlbGxhbmVvdXMvbWlzY2VsbGFuZW91cy1jaGlsZDIvbWlzY2VsbGFuZW91cy1jaGlsZDIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGlsZDJ7XHJcbiAgICBjb2xvcjpvcmFuZ2VyZWQ7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgfVxyXG5cclxuLmNoaWxkMmhhc2h7XHJcblxyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgYW5pbWF0aW9uOiBibGlua2luZ1RleHQgMS4ycyBpbmZpbml0ZTtcclxufVxyXG4uZXhhbXBsZS1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuQGtleWZyYW1lcyBibGlua2luZ1RleHR7XHJcbiAgICAwJXsgICAgIGNvbG9yOiAjMDAwOyAgICB9XHJcbiAgICA0OSV7ICAgIGNvbG9yOiAjMDAwOyB9XHJcbiAgICA2MCV7ICAgIGNvbG9yOiB0cmFuc3BhcmVudDsgfVxyXG4gICAgOTkleyAgICBjb2xvcjp0cmFuc3BhcmVudDsgIH1cclxuICAgIDEwMCV7ICAgY29sb3I6ICMwMDA7ICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MiscellaneousChild2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-miscellaneous-child2',
          templateUrl: './miscellaneous-child2.component.html',
          styleUrls: ['./miscellaneous-child2.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/student-list/miscellaneous/miscellaneous-child3/miscellaneous-child3.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/student-list/miscellaneous/miscellaneous-child3/miscellaneous-child3.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: MiscellaneousChild3Component */

  /***/
  function srcAppStudentListMiscellaneousMiscellaneousChild3MiscellaneousChild3ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MiscellaneousChild3Component", function () {
      return MiscellaneousChild3Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function MiscellaneousChild3Component_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MiscellaneousChild3Component_button_7_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.name = "";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MiscellaneousChild3Component_button_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MiscellaneousChild3Component_button_12_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.customerName = "";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var MiscellaneousChild3Component = /*#__PURE__*/function () {
      function MiscellaneousChild3Component() {
        _classCallCheck(this, MiscellaneousChild3Component);
      }

      _createClass(MiscellaneousChild3Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "customerName",
        get: function get() {
          return this._customerName;
        },
        set: function set(customerName) {
          this._customerName = customerName;
        }
      }]);

      return MiscellaneousChild3Component;
    }();

    MiscellaneousChild3Component.ɵfac = function MiscellaneousChild3Component_Factory(t) {
      return new (t || MiscellaneousChild3Component)();
    };

    MiscellaneousChild3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MiscellaneousChild3Component,
      selectors: [["app-miscellaneous-child3"]],
      decls: 15,
      vars: 6,
      consts: [[1, "example-form-field"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"]],
      template: function MiscellaneousChild3Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Child3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Two Way Binding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MiscellaneousChild3Component_Template_input_ngModelChange_6_listener($event) {
            return ctx.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MiscellaneousChild3Component_button_7_Template, 3, 0, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Two Way Binding with Getter-Setter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MiscellaneousChild3Component_Template_input_ngModelChange_11_listener($event) {
            return ctx.customerName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MiscellaneousChild3Component_button_12_Template, 3, 0, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.customerName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customerName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Welcome !! ", ctx.name, " ", ctx.customerName, "");
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtbGlzdC9taXNjZWxsYW5lb3VzL21pc2NlbGxhbmVvdXMtY2hpbGQzL21pc2NlbGxhbmVvdXMtY2hpbGQzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MiscellaneousChild3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-miscellaneous-child3',
          templateUrl: './miscellaneous-child3.component.html',
          styleUrls: ['./miscellaneous-child3.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/student-list/miscellaneous/miscellaneous-child4/miscellaneous-child4.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/student-list/miscellaneous/miscellaneous-child4/miscellaneous-child4.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: MiscellaneousChild4Component */

  /***/
  function srcAppStudentListMiscellaneousMiscellaneousChild4MiscellaneousChild4ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MiscellaneousChild4Component", function () {
      return MiscellaneousChild4Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var MiscellaneousChild4Component = /*#__PURE__*/function () {
      function MiscellaneousChild4Component() {
        _classCallCheck(this, MiscellaneousChild4Component);

        this.greetEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(MiscellaneousChild4Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "childGreet",
        value: function childGreet() {
          this.greetEvent.emit('Value from Child component -4');
        }
      }, {
        key: "parentToChild4Getter",
        get: function get() {
          return this._parentToChild4Getter;
        },
        set: function set(value) {
          this._parentToChild4Getter = value;
        }
      }]);

      return MiscellaneousChild4Component;
    }();

    MiscellaneousChild4Component.ɵfac = function MiscellaneousChild4Component_Factory(t) {
      return new (t || MiscellaneousChild4Component)();
    };

    MiscellaneousChild4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MiscellaneousChild4Component,
      selectors: [["app-miscellaneous-child4"]],
      inputs: {
        parentToChild4: ["parentDataToChild4", "parentToChild4"],
        parentToChild4Getter: "parentToChild4Getter"
      },
      outputs: {
        greetEvent: "greetEvent"
      },
      decls: 10,
      vars: 2,
      consts: [[2, "border", "1px solid"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
      template: function MiscellaneousChild4Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Child4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MiscellaneousChild4Component_Template_button_click_8_listener() {
            return ctx.childGreet();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "@Output() Button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", ctx.parentToChild4, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.parentToChild4Getter, "\n");
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtbGlzdC9taXNjZWxsYW5lb3VzL21pc2NlbGxhbmVvdXMtY2hpbGQ0L21pc2NlbGxhbmVvdXMtY2hpbGQ0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MiscellaneousChild4Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-miscellaneous-child4',
          templateUrl: './miscellaneous-child4.component.html',
          styleUrls: ['./miscellaneous-child4.component.css']
        }]
      }], function () {
        return [];
      }, {
        parentToChild4: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['parentDataToChild4']
        }],
        greetEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        parentToChild4Getter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/student-list/miscellaneous/student-miscellaneous.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/student-list/miscellaneous/student-miscellaneous.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: StudentMiscellaneousComponent */

  /***/
  function srcAppStudentListMiscellaneousStudentMiscellaneousComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentMiscellaneousComponent", function () {
      return StudentMiscellaneousComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _miscellaneous_child1_miscellaneous_child1_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./miscellaneous-child1/miscellaneous-child1.component */
    "./src/app/student-list/miscellaneous/miscellaneous-child1/miscellaneous-child1.component.ts");
    /* harmony import */


    var src_app_core_service_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/service/interaction.service */
    "./src/app/core/service/interaction.service.ts");
    /* harmony import */


    var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/components/header/header.component */
    "./src/app/shared/components/header/header.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _miscellaneous_child2_miscellaneous_child2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./miscellaneous-child2/miscellaneous-child2.component */
    "./src/app/student-list/miscellaneous/miscellaneous-child2/miscellaneous-child2.component.ts");
    /* harmony import */


    var _miscellaneous_child3_miscellaneous_child3_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./miscellaneous-child3/miscellaneous-child3.component */
    "./src/app/student-list/miscellaneous/miscellaneous-child3/miscellaneous-child3.component.ts");
    /* harmony import */


    var _miscellaneous_child4_miscellaneous_child4_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./miscellaneous-child4/miscellaneous-child4.component */
    "./src/app/student-list/miscellaneous/miscellaneous-child4/miscellaneous-child4.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function StudentMiscellaneousComponent_button_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentMiscellaneousComponent_button_22_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.inputDataTo4Child = "";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var StudentMiscellaneousComponent = /*#__PURE__*/function () {
      function StudentMiscellaneousComponent(interactionService) {
        _classCallCheck(this, StudentMiscellaneousComponent);

        this.interactionService = interactionService;
        this.headerVal = 'Data flow between Parent-Child & Child-Parent and Sibling';
      }

      _createClass(StudentMiscellaneousComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          this.interactionService.studentList$.subscribe(function (message) {
            return _this20.childRespMessage = message;
          });
        }
      }, {
        key: "clickToHello",
        value: function clickToHello() {
          this.interactionService.sentMessage('Good Morning Child');
        }
      }, {
        key: "clickToThanks",
        value: function clickToThanks() {
          this.interactionService.sentMessage('Thanks Child');
        }
      }, {
        key: "clickToChild",
        value: function clickToChild() {
          this.child1Ref.viewChildMessage = '@ViewChild() - Concept';
        }
      }, {
        key: "clickParentMethod",
        value: function clickParentMethod(message) {
          //alert(message)
          this.childRespMessage = message;
        }
      }]);

      return StudentMiscellaneousComponent;
    }();

    StudentMiscellaneousComponent.ɵfac = function StudentMiscellaneousComponent_Factory(t) {
      return new (t || StudentMiscellaneousComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_service_interaction_service__WEBPACK_IMPORTED_MODULE_2__["InteractionService"]));
    };

    StudentMiscellaneousComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StudentMiscellaneousComponent,
      selectors: [["app-student-miscellaneous"]],
      viewQuery: function StudentMiscellaneousComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_miscellaneous_child1_miscellaneous_child1_component__WEBPACK_IMPORTED_MODULE_1__["MiscellaneousChild1Component"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.child1Ref = _t.first);
        }
      },
      decls: 35,
      vars: 7,
      consts: [[3, "headerValue"], [1, "container"], [1, "logo"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"], [1, "menu"], [1, "child2", 2, "padding-top", "80px"], [1, "example-form-field", 2, "margin-left", "200px"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], [1, "first-box"], [1, "second-box"], ["child2", ""], [1, "third-box"], [1, "fourth-box"], [3, "parentDataToChild4", "parentToChild4Getter", "greetEvent"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"]],
      template: function StudentMiscellaneousComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Parent Component ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentMiscellaneousComponent_Template_button_click_5_listener() {
            return ctx.clickToChild();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "@ViewChild Button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentMiscellaneousComponent_Template_button_click_7_listener() {
            return ctx.clickToHello();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Say Hello to Child-1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentMiscellaneousComponent_Template_button_click_9_listener() {
            return ctx.clickToThanks();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Say Thanks to Child-1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentMiscellaneousComponent_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

            return _r1.great();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Template Ref concept using #");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Parent to Child-4 - @Input Decorator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentMiscellaneousComponent_Template_input_ngModelChange_21_listener($event) {
            return ctx.inputDataTo4Child = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, StudentMiscellaneousComponent_button_22_Template, 3, 0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-miscellaneous-child1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-miscellaneous-child2", null, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-miscellaneous-child3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "app-miscellaneous-child4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("greetEvent", function StudentMiscellaneousComponent_Template_app_miscellaneous_child4_greetEvent_31_listener($event) {
            return ctx.clickParentMethod($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Website Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerValue", ctx.headerVal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.childRespMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Parent to read this value using #child --- ", _r1.child2Variable, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputDataTo4Child);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputDataTo4Child);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentDataToChild4", ctx.inputDataTo4Child)("parentToChild4Getter", ctx.inputDataTo4Child);
        }
      },
      directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _miscellaneous_child1_miscellaneous_child1_component__WEBPACK_IMPORTED_MODULE_1__["MiscellaneousChild1Component"], _miscellaneous_child2_miscellaneous_child2_component__WEBPACK_IMPORTED_MODULE_9__["MiscellaneousChild2Component"], _miscellaneous_child3_miscellaneous_child3_component__WEBPACK_IMPORTED_MODULE_10__["MiscellaneousChild3Component"], _miscellaneous_child4_miscellaneous_child4_component__WEBPACK_IMPORTED_MODULE_11__["MiscellaneousChild4Component"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"]],
      styles: [".container[_ngcontent-%COMP%] {\r\n    width:900px; \r\n    height: 150px;\r\n  }\r\n  \r\n  header[_ngcontent-%COMP%] {\r\n    width:900px; \r\n    float:left; \r\n    background: pink; \r\n    height: 150px;\r\n  }\r\n  \r\n  .logo[_ngcontent-%COMP%] {\r\n    float: left;\r\n    padding: 15px\r\n  }\r\n  \r\n  .menu[_ngcontent-%COMP%] {\r\n    float: right;\r\n    padding: 15px;\r\n    -webkit-animation: blinkingText 1.2s infinite;\r\n            animation: blinkingText 1.2s infinite;\r\n  }\r\n  \r\n  .first-box[_ngcontent-%COMP%] {\r\n    width:300px; \r\n    float:left; \r\n    background: green; \r\n    height: 150px;\r\n    margin: 20px\r\n  }\r\n  \r\n  .first-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n    padding-left: 80px;\r\n    padding-top: 50px;\r\n  }\r\n  \r\n  .second-box[_ngcontent-%COMP%] {\r\n    width:300px; \r\n    height: 150px; \r\n    float:right; \r\n    background:yellowgreen;\r\n    margin: 20px\r\n  }\r\n  \r\n  .second-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n    padding-left: 10px;\r\n    padding-top: 50px;\r\n  }\r\n  \r\n  .fourth-box[_ngcontent-%COMP%] {\r\n    width:300px; \r\n    height: 150px; \r\n    float:right; \r\n    background:blanchedalmond;\r\n    margin: 20px\r\n  }\r\n  \r\n  .fourth-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n    padding-left: 10px;\r\n    padding-top: 50px;\r\n  }\r\n  \r\n  .third-box[_ngcontent-%COMP%] {\r\n    width:300px; \r\n    float:left; \r\n    background: darkorange; \r\n    margin: 20px\r\n  }\r\n  \r\n  .third-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n    padding-left: 80px;\r\n    padding-top: 50px;\r\n  }\r\n  \r\n  footer[_ngcontent-%COMP%] {\r\n    width:900px; \r\n    float:left; \r\n    background: black; \r\n    height: 50px;\r\n    color: #ffffff;\r\n  }\r\n  \r\n  footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n  }\r\n  \r\n  .child2[_ngcontent-%COMP%]{\r\n    color:orangered;\r\n    font-size: large;\r\n    padding-left: 80px;\r\n    padding-top: 50px;\r\n  }\r\n  \r\n  @-webkit-keyframes blinkingText{\r\n    0%{     color: #000;    }\r\n    49%{    color: #000; }\r\n    60%{    color: transparent; }\r\n    99%{    color:transparent;  }\r\n    100%{   color: #000;    }\r\n}\r\n  \r\n  @keyframes blinkingText{\r\n    0%{     color: #000;    }\r\n    49%{    color: #000; }\r\n    60%{    color: transparent; }\r\n    99%{    color:transparent;  }\r\n    100%{   color: #000;    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC1saXN0L21pc2NlbGxhbmVvdXMvc3R1ZGVudC1taXNjZWxsYW5lb3VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztJQUNYO0VBQ0Y7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLDZDQUFxQztZQUFyQyxxQ0FBcUM7RUFDdkM7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2I7RUFDRjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCO0VBQ0Y7O0VBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsV0FBVztJQUNYLHlCQUF5QjtJQUN6QjtFQUNGOztFQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QjtFQUNGOztFQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osY0FBYztFQUNoQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFFBQVEsV0FBVyxLQUFLO0lBQ3hCLFFBQVEsV0FBVyxFQUFFO0lBQ3JCLFFBQVEsa0JBQWtCLEVBQUU7SUFDNUIsUUFBUSxpQkFBaUIsR0FBRztJQUM1QixRQUFRLFdBQVcsS0FBSztBQUM1Qjs7RUFORTtJQUNFLFFBQVEsV0FBVyxLQUFLO0lBQ3hCLFFBQVEsV0FBVyxFQUFFO0lBQ3JCLFFBQVEsa0JBQWtCLEVBQUU7SUFDNUIsUUFBUSxpQkFBaUIsR0FBRztJQUM1QixRQUFRLFdBQVcsS0FBSztBQUM1QiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtbGlzdC9taXNjZWxsYW5lb3VzL3N0dWRlbnQtbWlzY2VsbGFuZW91cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDo5MDBweDsgXHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gIH1cclxuICBcclxuICBoZWFkZXIge1xyXG4gICAgd2lkdGg6OTAwcHg7IFxyXG4gICAgZmxvYXQ6bGVmdDsgXHJcbiAgICBiYWNrZ3JvdW5kOiBwaW5rOyBcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dvIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTVweFxyXG4gIH1cclxuICBcclxuICAubWVudSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYW5pbWF0aW9uOiBibGlua2luZ1RleHQgMS4ycyBpbmZpbml0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmZpcnN0LWJveCB7XHJcbiAgICB3aWR0aDozMDBweDsgXHJcbiAgICBmbG9hdDpsZWZ0OyBcclxuICAgIGJhY2tncm91bmQ6IGdyZWVuOyBcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBtYXJnaW46IDIwcHhcclxuICB9XHJcbiAgXHJcbiAgLmZpcnN0LWJveCBwIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWNvbmQtYm94IHtcclxuICAgIHdpZHRoOjMwMHB4OyBcclxuICAgIGhlaWdodDogMTUwcHg7IFxyXG4gICAgZmxvYXQ6cmlnaHQ7IFxyXG4gICAgYmFja2dyb3VuZDp5ZWxsb3dncmVlbjtcclxuICAgIG1hcmdpbjogMjBweFxyXG4gIH1cclxuICBcclxuICAuc2Vjb25kLWJveCBwIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgfVxyXG5cclxuICAuZm91cnRoLWJveCB7XHJcbiAgICB3aWR0aDozMDBweDsgXHJcbiAgICBoZWlnaHQ6IDE1MHB4OyBcclxuICAgIGZsb2F0OnJpZ2h0OyBcclxuICAgIGJhY2tncm91bmQ6YmxhbmNoZWRhbG1vbmQ7XHJcbiAgICBtYXJnaW46IDIwcHhcclxuICB9XHJcbiAgXHJcbiAgLmZvdXJ0aC1ib3ggcCB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnRoaXJkLWJveCB7XHJcbiAgICB3aWR0aDozMDBweDsgXHJcbiAgICBmbG9hdDpsZWZ0OyBcclxuICAgIGJhY2tncm91bmQ6IGRhcmtvcmFuZ2U7IFxyXG4gICAgbWFyZ2luOiAyMHB4XHJcbiAgfVxyXG4gIFxyXG4gIC50aGlyZC1ib3ggcCB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmctbGVmdDogODBweDtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyIHtcclxuICAgIHdpZHRoOjkwMHB4OyBcclxuICAgIGZsb2F0OmxlZnQ7IFxyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7IFxyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIGZvb3RlciBkaXYge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcblxyXG4gIC5jaGlsZDJ7XHJcbiAgICBjb2xvcjpvcmFuZ2VyZWQ7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGJsaW5raW5nVGV4dHtcclxuICAgIDAleyAgICAgY29sb3I6ICMwMDA7ICAgIH1cclxuICAgIDQ5JXsgICAgY29sb3I6ICMwMDA7IH1cclxuICAgIDYwJXsgICAgY29sb3I6IHRyYW5zcGFyZW50OyB9XHJcbiAgICA5OSV7ICAgIGNvbG9yOnRyYW5zcGFyZW50OyAgfVxyXG4gICAgMTAwJXsgICBjb2xvcjogIzAwMDsgICAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentMiscellaneousComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-student-miscellaneous',
          templateUrl: './student-miscellaneous.component.html',
          styleUrls: ['./student-miscellaneous.component.css']
        }]
      }], function () {
        return [{
          type: src_app_core_service_interaction_service__WEBPACK_IMPORTED_MODULE_2__["InteractionService"]
        }];
      }, {
        child1Ref: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_miscellaneous_child1_miscellaneous_child1_component__WEBPACK_IMPORTED_MODULE_1__["MiscellaneousChild1Component"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/student-list/student-details/student-details.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/student-list/student-details/student-details.component.ts ***!
    \***************************************************************************/

  /*! exports provided: StudentDetailsComponent */

  /***/
  function srcAppStudentListStudentDetailsStudentDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentDetailsComponent", function () {
      return StudentDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_service_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../core/service/student.service */
    "./src/app/core/service/student.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/components/header/header.component */
    "./src/app/shared/components/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function StudentDetailsComponent_li_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentDetailsComponent_li_3_Template_span_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var student_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.moveToStudentInfo(student_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Click Me ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var student_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r0.isSelected(student_r1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", student_r1.id, " - ", student_r1.name, " ");
      }
    }

    var StudentDetailsComponent = /*#__PURE__*/function () {
      function StudentDetailsComponent(router, studentSetvice, route, spinner) {
        _classCallCheck(this, StudentDetailsComponent);

        this.router = router;
        this.studentSetvice = studentSetvice;
        this.route = route;
        this.spinner = spinner;
        this.headerVal = 'Route And Navigation';
      }

      _createClass(StudentDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          this.spinner.show();
          this.studentSetvice.getUserList().subscribe(function (data) {
            _this21.userList = data;

            _this21.spinner.hide();
          });
          /*this.studentSetvice.getStudentList().subscribe(data => {
            this.studentList = data;
          })*/

          this.route.paramMap.subscribe(function (param) {
            _this21.selectedId = parseInt(param.get('id'));
          });
        }
      }, {
        key: "moveBack",
        value: function moveBack() {
          this.router.navigate(['/view-student']);
        }
      }, {
        key: "moveToStudentInfo",
        value: function moveToStudentInfo(student) {
          this.router.navigate(['/student/student-details', student.id]); //this.router.navigate([student.student_id],{relativeTo:this.route});
        }
      }, {
        key: "isSelected",
        value: function isSelected(student) {
          console.log('this.selectedId-' + this.selectedId);
          console.log('student.student_id-' + student.id);
          return this.selectedId === student.id;
        }
      }]);

      return StudentDetailsComponent;
    }();

    StudentDetailsComponent.ɵfac = function StudentDetailsComponent_Factory(t) {
      return new (t || StudentDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]));
    };

    StudentDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StudentDetailsComponent,
      selectors: [["app-student-details"]],
      decls: 10,
      vars: 2,
      consts: [[3, "headerValue"], [1, "items"], [4, "ngFor", "ngForOf"], [2, "align-items", "center"], ["type", "submit", 1, "btn", "btn-success", 3, "click"], ["bdColor", "rgba(51, 51, 51, 0.8)", "size", "default", "type", "ball-spin-clockwise"], [2, "color", "white"], [1, "btn", "student-info", 3, "click"], [1, "blink"]],
      template: function StudentDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StudentDetailsComponent_li_3_Template, 5, 4, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentDetailsComponent_Template_button_click_5_listener() {
            return ctx.moveBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ngx-spinner", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Please Wait. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerValue", ctx.headerVal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userList);
        }
      },
      directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"]],
      styles: [".selected[_ngcontent-%COMP%]{\r\n    background-color: #17a2b8;\r\n}\r\n\r\n.student-info[_ngcontent-%COMP%] {\r\n    border-color: #17a2b8;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    background-color: transparent;\r\n    border: 1px solid transparent;\r\n    padding: 0.375rem 0.75rem;\r\n    font-size: 1rem;\r\n    line-height: 1.5;\r\n    border-radius: 0.25rem;\r\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n}\r\n\r\n.blink[_ngcontent-%COMP%]{\r\n    color:tomato;\r\n    font-size: small;\r\n    padding-top: 10px;\r\n    -webkit-animation: blinkingText 1.2s infinite;\r\n            animation: blinkingText 1.2s infinite;\r\n}\r\n\r\n@-webkit-keyframes blinkingText{\r\n    0%{     color: mediumblue;    }\r\n    49%{    color: mediumblue; }\r\n    60%{    color: transparent; }\r\n    99%{    color:transparent;  }\r\n    100%{   color: mediumblue;    }\r\n}\r\n\r\n@keyframes blinkingText{\r\n    0%{     color: mediumblue;    }\r\n    49%{    color: mediumblue; }\r\n    60%{    color: transparent; }\r\n    99%{    color:transparent;  }\r\n    100%{   color: mediumblue;    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC1saXN0L3N0dWRlbnQtZGV0YWlscy9zdHVkZW50LWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHFJQUFxSTtBQUN6STs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDZDQUFxQztZQUFyQyxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxRQUFRLGlCQUFpQixLQUFLO0lBQzlCLFFBQVEsaUJBQWlCLEVBQUU7SUFDM0IsUUFBUSxrQkFBa0IsRUFBRTtJQUM1QixRQUFRLGlCQUFpQixHQUFHO0lBQzVCLFFBQVEsaUJBQWlCLEtBQUs7QUFDbEM7O0FBTkE7SUFDSSxRQUFRLGlCQUFpQixLQUFLO0lBQzlCLFFBQVEsaUJBQWlCLEVBQUU7SUFDM0IsUUFBUSxrQkFBa0IsRUFBRTtJQUM1QixRQUFRLGlCQUFpQixHQUFHO0lBQzVCLFFBQVEsaUJBQWlCLEtBQUs7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50LWxpc3Qvc3R1ZGVudC1kZXRhaWxzL3N0dWRlbnQtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdGVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODtcclxufVxyXG5cclxuLnN0dWRlbnQtaW5mbyB7XHJcbiAgICBib3JkZXItY29sb3I6ICMxN2EyYjg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5ibGlua3tcclxuICAgIGNvbG9yOnRvbWF0bztcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGFuaW1hdGlvbjogYmxpbmtpbmdUZXh0IDEuMnMgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmxpbmtpbmdUZXh0e1xyXG4gICAgMCV7ICAgICBjb2xvcjogbWVkaXVtYmx1ZTsgICAgfVxyXG4gICAgNDkleyAgICBjb2xvcjogbWVkaXVtYmx1ZTsgfVxyXG4gICAgNjAleyAgICBjb2xvcjogdHJhbnNwYXJlbnQ7IH1cclxuICAgIDk5JXsgICAgY29sb3I6dHJhbnNwYXJlbnQ7ICB9XHJcbiAgICAxMDAleyAgIGNvbG9yOiBtZWRpdW1ibHVlOyAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-student-details',
          templateUrl: './student-details.component.html',
          styleUrls: ['./student-details.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _core_service_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/student-list/student-information/student-information.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/student-list/student-information/student-information.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: StudentInformationComponent */

  /***/
  function srcAppStudentListStudentInformationStudentInformationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentInformationComponent", function () {
      return StudentInformationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/components/header/header.component */
    "./src/app/shared/components/header/header.component.ts");

    var StudentInformationComponent = /*#__PURE__*/function () {
      function StudentInformationComponent(router, activatedRoute) {
        _classCallCheck(this, StudentInformationComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.headerVal = "Router using option parameter";
      }

      _createClass(StudentInformationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          //let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
          this.activatedRoute.paramMap.subscribe(function (param) {
            var id = parseInt(param.get('id'));
            _this22.studentId = id;
          });
        }
      }, {
        key: "moveBack",
        value: function moveBack() {
          var selectedId = this.studentId; //this.router.navigate(['student-details',{id: selectedId}]);

          this.router.navigate(['../', {
            id: selectedId
          }], {
            relativeTo: this.activatedRoute
          });
        }
      }, {
        key: "goPrevious",
        value: function goPrevious() {
          var previousId = this.studentId - 1;
          this.router.navigate(['student/student-details', previousId]);
        }
      }, {
        key: "goNext",
        value: function goNext() {
          var nextId = this.studentId + 1;
          this.router.navigate(['student/student-details', nextId]);
        }
      }, {
        key: "nextToInterceptor",
        value: function nextToInterceptor() {
          this.router.navigate(['../../student-summary'], {
            relativeTo: this.activatedRoute
          });
        }
      }]);

      return StudentInformationComponent;
    }();

    StudentInformationComponent.ɵfac = function StudentInformationComponent_Factory(t) {
      return new (t || StudentInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    StudentInformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StudentInformationComponent,
      selectors: [["app-student-information"]],
      decls: 20,
      vars: 2,
      consts: [[3, "headerValue"], [2, "color", "darkcyan"], [2, "color", "deeppink"], [2, "border", "teal 2px solid"], [2, "align-items", "center"], ["type", "submit", 3, "click"], ["type", "submit", 1, "btn", "btn-success", 3, "click"]],
      template: function StudentInformationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " You have selected student whose id is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Param Map Observable in Router");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentInformationComponent_Template_button_click_10_listener() {
            return ctx.goPrevious();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentInformationComponent_Template_button_click_12_listener() {
            return ctx.goNext();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentInformationComponent_Template_button_click_16_listener() {
            return ctx.moveBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentInformationComponent_Template_button_click_18_listener() {
            return ctx.nextToInterceptor();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerValue", ctx.headerVal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.studentId);
        }
      },
      directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtbGlzdC9zdHVkZW50LWluZm9ybWF0aW9uL3N0dWRlbnQtaW5mb3JtYXRpb24uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentInformationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-student-information',
          templateUrl: './student-information.component.html',
          styleUrls: ['./student-information.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/student-list/student-list-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/student-list/student-list-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: StudentListRoutingModule, studentRoutingComponents */

  /***/
  function srcAppStudentListStudentListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentListRoutingModule", function () {
      return StudentListRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "studentRoutingComponents", function () {
      return studentRoutingComponents;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _student_details_student_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./student-details/student-details.component */
    "./src/app/student-list/student-details/student-details.component.ts");
    /* harmony import */


    var _student_information_student_information_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./student-information/student-information.component */
    "./src/app/student-list/student-information/student-information.component.ts");
    /* harmony import */


    var _miscellaneous_student_miscellaneous_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./miscellaneous/student-miscellaneous.component */
    "./src/app/student-list/miscellaneous/student-miscellaneous.component.ts");
    /* harmony import */


    var _miscellaneous_miscellaneous_child1_miscellaneous_child1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./miscellaneous/miscellaneous-child1/miscellaneous-child1.component */
    "./src/app/student-list/miscellaneous/miscellaneous-child1/miscellaneous-child1.component.ts");
    /* harmony import */


    var _miscellaneous_miscellaneous_child2_miscellaneous_child2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./miscellaneous/miscellaneous-child2/miscellaneous-child2.component */
    "./src/app/student-list/miscellaneous/miscellaneous-child2/miscellaneous-child2.component.ts");
    /* harmony import */


    var _student_summary_student_summary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./student-summary/student-summary.component */
    "./src/app/student-list/student-summary/student-summary.component.ts");

    var routes = [{
      path: 'student-details',
      component: _student_details_student_details_component__WEBPACK_IMPORTED_MODULE_2__["StudentDetailsComponent"]
    }, {
      path: 'student-details/:id',
      component: _student_information_student_information_component__WEBPACK_IMPORTED_MODULE_3__["StudentInformationComponent"]
    }, {
      path: 'student-summary',
      component: _student_summary_student_summary_component__WEBPACK_IMPORTED_MODULE_7__["StudentSummaryComponent"]
    }, {
      path: 'student-miscellaneous',
      component: _miscellaneous_student_miscellaneous_component__WEBPACK_IMPORTED_MODULE_4__["StudentMiscellaneousComponent"]
    }];

    var StudentListRoutingModule = function StudentListRoutingModule() {
      _classCallCheck(this, StudentListRoutingModule);
    };

    StudentListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: StudentListRoutingModule
    });
    StudentListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function StudentListRoutingModule_Factory(t) {
        return new (t || StudentListRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StudentListRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentListRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();

    var studentRoutingComponents = [_student_details_student_details_component__WEBPACK_IMPORTED_MODULE_2__["StudentDetailsComponent"], _student_information_student_information_component__WEBPACK_IMPORTED_MODULE_3__["StudentInformationComponent"], _student_summary_student_summary_component__WEBPACK_IMPORTED_MODULE_7__["StudentSummaryComponent"], _miscellaneous_student_miscellaneous_component__WEBPACK_IMPORTED_MODULE_4__["StudentMiscellaneousComponent"], _miscellaneous_miscellaneous_child1_miscellaneous_child1_component__WEBPACK_IMPORTED_MODULE_5__["MiscellaneousChild1Component"], _miscellaneous_miscellaneous_child2_miscellaneous_child2_component__WEBPACK_IMPORTED_MODULE_6__["MiscellaneousChild2Component"]];
    /***/
  },

  /***/
  "./src/app/student-list/student-list.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/student-list/student-list.module.ts ***!
    \*****************************************************/

  /*! exports provided: StudentListModule */

  /***/
  function srcAppStudentListStudentListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentListModule", function () {
      return StudentListModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _student_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./student-list-routing.module */
    "./src/app/student-list/student-list-routing.module.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _miscellaneous_miscellaneous_child3_miscellaneous_child3_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./miscellaneous/miscellaneous-child3/miscellaneous-child3.component */
    "./src/app/student-list/miscellaneous/miscellaneous-child3/miscellaneous-child3.component.ts");
    /* harmony import */


    var _miscellaneous_miscellaneous_child4_miscellaneous_child4_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./miscellaneous/miscellaneous-child4/miscellaneous-child4.component */
    "./src/app/student-list/miscellaneous/miscellaneous-child4/miscellaneous-child4.component.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _student_summary_student_summary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./student-summary/student-summary.component */
    "./src/app/student-list/student-summary/student-summary.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _student_details_student_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./student-details/student-details.component */
    "./src/app/student-list/student-details/student-details.component.ts");
    /* harmony import */


    var _student_information_student_information_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./student-information/student-information.component */
    "./src/app/student-list/student-information/student-information.component.ts");
    /* harmony import */


    var _miscellaneous_student_miscellaneous_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./miscellaneous/student-miscellaneous.component */
    "./src/app/student-list/miscellaneous/student-miscellaneous.component.ts");
    /* harmony import */


    var _miscellaneous_miscellaneous_child1_miscellaneous_child1_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./miscellaneous/miscellaneous-child1/miscellaneous-child1.component */
    "./src/app/student-list/miscellaneous/miscellaneous-child1/miscellaneous-child1.component.ts");
    /* harmony import */


    var _miscellaneous_miscellaneous_child2_miscellaneous_child2_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./miscellaneous/miscellaneous-child2/miscellaneous-child2.component */
    "./src/app/student-list/miscellaneous/miscellaneous-child2/miscellaneous-child2.component.ts");

    var StudentListModule = function StudentListModule() {
      _classCallCheck(this, StudentListModule);
    };

    StudentListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: StudentListModule
    });
    StudentListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function StudentListModule_Factory(t) {
        return new (t || StudentListModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _student_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["StudentListRoutingModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StudentListModule, {
        declarations: [_student_details_student_details_component__WEBPACK_IMPORTED_MODULE_13__["StudentDetailsComponent"], _student_information_student_information_component__WEBPACK_IMPORTED_MODULE_14__["StudentInformationComponent"], _student_summary_student_summary_component__WEBPACK_IMPORTED_MODULE_11__["StudentSummaryComponent"], _miscellaneous_student_miscellaneous_component__WEBPACK_IMPORTED_MODULE_15__["StudentMiscellaneousComponent"], _miscellaneous_miscellaneous_child1_miscellaneous_child1_component__WEBPACK_IMPORTED_MODULE_16__["MiscellaneousChild1Component"], _miscellaneous_miscellaneous_child2_miscellaneous_child2_component__WEBPACK_IMPORTED_MODULE_17__["MiscellaneousChild2Component"], _miscellaneous_miscellaneous_child3_miscellaneous_child3_component__WEBPACK_IMPORTED_MODULE_8__["MiscellaneousChild3Component"], _miscellaneous_miscellaneous_child4_miscellaneous_child4_component__WEBPACK_IMPORTED_MODULE_9__["MiscellaneousChild4Component"], _student_summary_student_summary_component__WEBPACK_IMPORTED_MODULE_11__["StudentSummaryComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _student_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["StudentListRoutingModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_student_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["studentRoutingComponents"], _miscellaneous_miscellaneous_child3_miscellaneous_child3_component__WEBPACK_IMPORTED_MODULE_8__["MiscellaneousChild3Component"], _miscellaneous_miscellaneous_child4_miscellaneous_child4_component__WEBPACK_IMPORTED_MODULE_9__["MiscellaneousChild4Component"], _student_summary_student_summary_component__WEBPACK_IMPORTED_MODULE_11__["StudentSummaryComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _student_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["StudentListRoutingModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/student-list/student-summary/student-summary.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/student-list/student-summary/student-summary.component.ts ***!
    \***************************************************************************/

  /*! exports provided: StudentSummaryComponent */

  /***/
  function srcAppStudentListStudentSummaryStudentSummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentSummaryComponent", function () {
      return StudentSummaryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_core_service_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/service/student.service */
    "./src/app/core/service/student.service.ts");
    /* harmony import */


    var src_app_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core */
    "./src/app/core/index.ts");
    /* harmony import */


    var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/components/header/header.component */
    "./src/app/shared/components/header/header.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");

    function StudentSummaryComponent_tr_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var dt_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dt_r3.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dt_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dt_r3.email);
      }
    }

    function StudentSummaryComponent_tr_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var dt_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dt_r4.userId);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dt_r4.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dt_r4.title);
      }
    }

    function StudentSummaryComponent_tr_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var dt_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dt_r5.postId);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dt_r5.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dt_r5.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dt_r5.email);
      }
    }

    var StudentSummaryComponent = /*#__PURE__*/function () {
      function StudentSummaryComponent(serviceService, loaderService) {
        _classCallCheck(this, StudentSummaryComponent);

        this.serviceService = serviceService;
        this.loaderService = loaderService;
        this.headerVal = 'Async call using Angular Promise or await';
        this.title = 'my-http-interceptor';
      }

      _createClass(StudentSummaryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.loaderService.show();
          this.loaderService.isLoading.subscribe(function (data) {
            return _this23.loadingValue = data;
          });
          this.serviceService.getAllPostCall().subscribe(function (data) {
            return console.log(data);
          }, function (error) {
            _this23.loaderService.hide();

            _this23.errorMessage = error.message;
            console.log(error);
          });
          this.serviceService.getAllPost().subscribe(function (data) {
            return console.log(data);
          }, function (error) {
            _this23.errorMessage = error.message;
            console.log(error);
          });
          this.getAllDataUsingPromiseThen();
        } //USing async and await to manage async call sequencely

      }, {
        key: "getAllData",
        value: function getAllData() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var users, posts, comments;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.serviceService.getUsers();

                  case 2:
                    users = _context.sent;
                    this.users = users;
                    _context.next = 6;
                    return this.serviceService.getUserPosts(users[0].id);

                  case 6:
                    posts = _context.sent;
                    this.posts = posts;
                    _context.next = 10;
                    return this.serviceService.getPostComments(posts[0].id);

                  case 10:
                    comments = _context.sent;
                    this.comments = comments;

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } //USing Promise Then manage async call sequencely
        //https://stackoverflow.com/questions/52115904/how-to-call-a-function-after-the-termination-of-another-function-in-angular/52116063

      }, {
        key: "getAllDataUsingPromiseThen",
        value: function getAllDataUsingPromiseThen() {
          var _this24 = this;

          this.serviceService.getUsers().then(function (users) {
            _this24.users = users;
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(8000);

            _this24.serviceService.getUserPosts(users[0].id).then(function (posts) {
              _this24.posts = posts;

              _this24.serviceService.getPostComments(posts[0].id).then(function (comm) {
                _this24.comments = comm;
              });
            });
          })["catch"](function (error) {
            _this24.loaderService.hide();

            _this24.errorMessage = error.message;
          });
          /* const users = await this.serviceService.getUsers();
           this.users = JSON.stringify(users);
           const posts = await this.serviceService.getUserPosts(users[0].id);
           this.posts =JSON.stringify(posts);
           const comments = await this.serviceService.getPostComments(posts[0].id);*/
        }
      }]);

      return StudentSummaryComponent;
    }();

    StudentSummaryComponent.ɵfac = function StudentSummaryComponent_Factory(t) {
      return new (t || StudentSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_service_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core__WEBPACK_IMPORTED_MODULE_4__["AppLoaderService"]));
    };

    StudentSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: StudentSummaryComponent,
      selectors: [["app-student-summary"]],
      decls: 58,
      vars: 6,
      consts: [[3, "headerValue"], [1, "example-button-row"], ["routerLink", "../student-miscellaneous", "mat-raised-button", "", "color", "primary", 2, "align-items", "flex-end"], [2, "color", "crimson"], [2, "color", "cornflowerblue"], [1, "text-center", "mt-4"], [1, "container", "mt-4"], [1, "table", "table-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["bdColor", "rgba(51, 51, 51, 0.8)", "size", "default", "type", "ball-spin-clockwise"], [2, "color", "white"]],
      template: function StudentSummaryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "User Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, StudentSummaryComponent_tr_22_Template, 7, 3, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Post Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "User Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, StudentSummaryComponent_tr_37_Template, 7, 3, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Comment Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Post Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, StudentSummaryComponent_tr_54_Template, 9, 4, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ngx-spinner", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Please Wait. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("headerValue", ctx.headerVal);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.errorMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.loadingValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.users);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.posts);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.comments);
        }
      },
      directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtbGlzdC9zdHVkZW50LXN1bW1hcnkvc3R1ZGVudC1zdW1tYXJ5LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StudentSummaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-student-summary',
          templateUrl: './student-summary.component.html',
          styleUrls: ['./student-summary.component.css']
        }]
      }], function () {
        return [{
          type: src_app_core_service_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"]
        }, {
          type: src_app_core__WEBPACK_IMPORTED_MODULE_4__["AppLoaderService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=student-list-student-list-module-es5.js.map