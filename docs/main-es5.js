function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/add-student/add-student.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/add-student/add-student.component.ts ***!
    \******************************************************/

  /*! exports provided: AddStudentComponent */

  /***/
  function srcAppAddStudentAddStudentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddStudentComponent", function () {
      return AddStudentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _core_model_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../core/model/user */
    "./src/app/core/model/user.ts");
    /* harmony import */


    var _core_service_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/service/student.service */
    "./src/app/core/service/student.service.ts");
    /* harmony import */


    var _core_service_interaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../core/service/interaction.service */
    "./src/app/core/service/interaction.service.ts");
    /* harmony import */


    var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/components/header/header.component */
    "./src/app/shared/components/header/header.component.ts");

    var AddStudentComponent = /*#__PURE__*/function () {
      function AddStudentComponent(studentService, interactionService) {
        _classCallCheck(this, AddStudentComponent);

        this.studentService = studentService;
        this.interactionService = interactionService;
        this.headerVal = 'Add User';
        this.student = new _core_model_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.submitted = false;
        this.newUser = new _core_model_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.studentsaveform = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          student_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]),
          student_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])
        });
      }

      _createClass(AddStudentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.submitted = false;
        }
      }, {
        key: "saveStudent",
        value: function saveStudent() {
          this.student = new _core_model_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
          this.student.name = this.StudentName.value;
          this.student.email = this.StudentEmail.value;
          this.submitted = true;
          this.interactionService._user = this.student;
          this.interactionService.addUsers(this.student);
          this.save();
        }
      }, {
        key: "save",
        value: function save() {
          this.studentService.createStudent(this.student).subscribe(function (data) {
            return console.log(data);
          }, function (error) {
            return console.log(error);
          });
          this.student = new _core_model_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        }
      }, {
        key: "StudentName",
        get: function get() {
          return this.studentsaveform.get('student_name');
        }
      }, {
        key: "StudentEmail",
        get: function get() {
          return this.studentsaveform.get('student_email');
        }
      }]);

      return AddStudentComponent;
    }();

    AddStudentComponent.ɵfac = function AddStudentComponent_Factory(t) {
      return new (t || AddStudentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_interaction_service__WEBPACK_IMPORTED_MODULE_4__["InteractionService"]));
    };

    AddStudentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddStudentComponent,
      selectors: [["app-add-student"]],
      decls: 26,
      vars: 4,
      consts: [[3, "headerValue"], [1, "row"], [1, "col-sm-4"], [2, "width", "400px", 3, "hidden"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "name"], ["type", "text", "formControlName", "student_name", "data-toggle", "tooltip", "data-placement", "right", "title", "Enter Student Name", 1, "form-control"], ["type", "text", "formControlName", "student_email", "data-toggle", "tooltip", "data-placement", "right", "title", "Enter Student Email", 1, "form-control"], ["type", "submit", 1, "btn", "btn-success"], [3, "hidden"], [1, "btn", "btn-primary"]],
      template: function AddStudentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddStudentComponent_Template_form_ngSubmit_5_listener() {
            return ctx.saveStudent();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Student Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Student Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Student Added SuccessFully!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Add More Student");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerValue", ctx.headerVal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.submitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.studentsaveform);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.submitted);
        }
      },
      directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1zdHVkZW50L2FkZC1zdHVkZW50LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddStudentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-student',
          templateUrl: './add-student.component.html',
          styleUrls: ['./add-student.component.css']
        }]
      }], function () {
        return [{
          type: _core_service_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"]
        }, {
          type: _core_service_interaction_service__WEBPACK_IMPORTED_MODULE_4__["InteractionService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule, routingComponents */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routingComponents", function () {
      return routingComponents;
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


    var _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./student-list/student-list.component */
    "./src/app/student-list/student-list.component.ts");
    /* harmony import */


    var _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-student/add-student.component */
    "./src/app/add-student/add-student.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'view-student',
      pathMatch: 'full'
    }, {
      path: 'view-student',
      component: _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_2__["StudentListComponent"]
    }, {
      path: 'add-student',
      component: _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_3__["AddStudentComponent"]
    }, {
      path: 'student',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | student-list-student-list-module */
        "student-list-student-list-module").then(__webpack_require__.bind(null,
        /*! ./student-list/student-list.module */
        "./src/app/student-list/student-list.module.ts")).then(function (v) {
          return v.StudentListModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();

    var routingComponents = [_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_2__["StudentListComponent"], _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_3__["AddStudentComponent"]];
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_service_interaction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./core/service/interaction.service */
    "./src/app/core/service/interaction.service.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(inreractionService) {
        _classCallCheck(this, AppComponent);

        this.inreractionService = inreractionService;
        this.title = 'student-data';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_interaction_service__WEBPACK_IMPORTED_MODULE_1__["InteractionService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 9,
      vars: 0,
      consts: [[1, "container-fluid"], [1, "example-button-row"], ["mat-raised-button", "", "color", "primary", "routerLink", "view-student"], ["mat-raised-button", "", "color", "accent", "routerLink", "add-student"], [1, "new4"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "View Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add New User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["example-button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .example-button-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  margin-right: 8px;\r\n}\r\nhr.new4[_ngcontent-%COMP%] {\r\n  border: 1px solid red;\r\n  margin-top: .2rem; \r\n  margin-bottom: .2rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZXhhbXBsZS1idXR0b24tcm93IGJ1dHRvbixcclxuLmV4YW1wbGUtYnV0dG9uLXJvdyBhIHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5oci5uZXc0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgbWFyZ2luLXRvcDogLjJyZW07IFxyXG4gIG1hcmdpbi1ib3R0b206IC4ycmVtO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _core_service_interaction_service__WEBPACK_IMPORTED_MODULE_1__["InteractionService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./student-list/student-list.component */
    "./src/app/student-list/student-list.component.ts");
    /* harmony import */


    var _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./add-student/add-student.component */
    "./src/app/add-student/add-student.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forRoot(), _core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_12__["StudentListComponent"], _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_13__["AddStudentComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["routingComponents"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forRoot(), _core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"].forRoot()],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
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


    var _interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./interceptor */
    "./src/app/core/interceptor/index.ts");
    /* harmony import */


    var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./service */
    "./src/app/core/service/index.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CoreModule = /*#__PURE__*/function () {
      function CoreModule(parentModule) {
        _classCallCheck(this, CoreModule);

        if (parentModule) {
          throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
      }

      _createClass(CoreModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: CoreModule,
            providers: [_service__WEBPACK_IMPORTED_MODULE_3__["InteractionService"], _service__WEBPACK_IMPORTED_MODULE_3__["StudentService"], _service__WEBPACK_IMPORTED_MODULE_3__["AppLoaderService"], _interceptor__WEBPACK_IMPORTED_MODULE_2__["AppInterceptorService"]]
          };
        }
      }]);

      return CoreModule;
    }();

    CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CoreModule
    });
    CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CoreModule_Factory(t) {
        return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CoreModule, 12));
      },
      providers: [_service__WEBPACK_IMPORTED_MODULE_3__["InteractionService"], _service__WEBPACK_IMPORTED_MODULE_3__["StudentService"], _service__WEBPACK_IMPORTED_MODULE_3__["AppLoaderService"], _interceptor__WEBPACK_IMPORTED_MODULE_2__["AppInterceptorService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _interceptor__WEBPACK_IMPORTED_MODULE_2__["AppInterceptorService"],
        multi: true
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          providers: [_service__WEBPACK_IMPORTED_MODULE_3__["InteractionService"], _service__WEBPACK_IMPORTED_MODULE_3__["StudentService"], _service__WEBPACK_IMPORTED_MODULE_3__["AppLoaderService"], _interceptor__WEBPACK_IMPORTED_MODULE_2__["AppInterceptorService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _interceptor__WEBPACK_IMPORTED_MODULE_2__["AppInterceptorService"],
            multi: true
          }]
        }]
      }], function () {
        return [{
          type: CoreModule,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/interceptor/app-interceptor.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/core/interceptor/app-interceptor.service.ts ***!
    \*************************************************************/

  /*! exports provided: AppInterceptorService */

  /***/
  function srcAppCoreInterceptorAppInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppInterceptorService", function () {
      return AppInterceptorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _service_app_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/app-loader.service */
    "./src/app/core/service/app-loader.service.ts");

    var AppInterceptorService = /*#__PURE__*/function () {
      function AppInterceptorService(loaderService) {
        _classCallCheck(this, AppInterceptorService);

        this.loaderService = loaderService;
        this.count = 0;
      }

      _createClass(AppInterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this = this;

          this.loaderService.show();
          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'name': 'dev'
          });
          var clone = req.clone({
            headers: header
          });
          return next.handle(clone).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
              _this.loaderService.hide();
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler)); //https://stackoverflow.com/questions/49385369/angular-show-spinner-for-every-http-request-with-very-less-code-changes
          //https://onthecode.co.uk/angular-display-spinner-every-request/

          /*return next.handle(clone)
          .pipe(
            finalize(()=> {
              this.count--;
              if (this.count === 0) {
                this.loaderService.hide()
              }
              
            }),
            catchError(this.errorHandler)
          )*/
          // return null;
        }
      }, {
        key: "errorHandler",
        value: function errorHandler(error) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error || 'Server Error');
        }
      }]);

      return AppInterceptorService;
    }();

    AppInterceptorService.ɵfac = function AppInterceptorService_Factory(t) {
      return new (t || AppInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_app_loader_service__WEBPACK_IMPORTED_MODULE_4__["AppLoaderService"]));
    };

    AppInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppInterceptorService,
      factory: AppInterceptorService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _service_app_loader_service__WEBPACK_IMPORTED_MODULE_4__["AppLoaderService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/interceptor/index.ts":
  /*!*******************************************!*\
    !*** ./src/app/core/interceptor/index.ts ***!
    \*******************************************/

  /*! exports provided: AppInterceptorService */

  /***/
  function srcAppCoreInterceptorIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _app_interceptor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app-interceptor.service */
    "./src/app/core/interceptor/app-interceptor.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppInterceptorService", function () {
      return _app_interceptor_service__WEBPACK_IMPORTED_MODULE_0__["AppInterceptorService"];
    });
    /***/

  },

  /***/
  "./src/app/core/model/student.ts":
  /*!***************************************!*\
    !*** ./src/app/core/model/student.ts ***!
    \***************************************/

  /*! exports provided: Student */

  /***/
  function srcAppCoreModelStudentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Student", function () {
      return Student;
    });

    var Student = function Student() {
      _classCallCheck(this, Student);
    };
    /***/

  },

  /***/
  "./src/app/core/model/user.ts":
  /*!************************************!*\
    !*** ./src/app/core/model/user.ts ***!
    \************************************/

  /*! exports provided: User */

  /***/
  function srcAppCoreModelUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = function User() {
      _classCallCheck(this, User);
    };
    /***/

  },

  /***/
  "./src/app/core/service/app-loader.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/core/service/app-loader.service.ts ***!
    \****************************************************/

  /*! exports provided: AppLoaderService */

  /***/
  function srcAppCoreServiceAppLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppLoaderService", function () {
      return AppLoaderService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");

    var AppLoaderService = /*#__PURE__*/function () {
      function AppLoaderService(spinner) {
        _classCallCheck(this, AppLoaderService);

        this.spinner = spinner;
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(AppLoaderService, [{
        key: "show",
        value: function show() {
          this.isLoading.next('Request is Running');
          this.spinner.show();
        }
      }, {
        key: "hide",
        value: function hide() {
          this.isLoading.next('Request is Completed');
          this.spinner.hide();
        }
      }]);

      return AppLoaderService;
    }();

    AppLoaderService.ɵfac = function AppLoaderService_Factory(t) {
      return new (t || AppLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]));
    };

    AppLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppLoaderService,
      factory: AppLoaderService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppLoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/service/index.ts":
  /*!***************************************!*\
    !*** ./src/app/core/service/index.ts ***!
    \***************************************/

  /*! exports provided: InteractionService, StudentService, AppLoaderService */

  /***/
  function srcAppCoreServiceIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _interaction_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./interaction.service */
    "./src/app/core/service/interaction.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InteractionService", function () {
      return _interaction_service__WEBPACK_IMPORTED_MODULE_0__["InteractionService"];
    });
    /* harmony import */


    var _student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./student.service */
    "./src/app/core/service/student.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StudentService", function () {
      return _student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"];
    });
    /* harmony import */


    var _app_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-loader.service */
    "./src/app/core/service/app-loader.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppLoaderService", function () {
      return _app_loader_service__WEBPACK_IMPORTED_MODULE_2__["AppLoaderService"];
    });
    /***/

  },

  /***/
  "./src/app/core/service/interaction.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/core/service/interaction.service.ts ***!
    \*****************************************************/

  /*! exports provided: InteractionService */

  /***/
  function srcAppCoreServiceInteractionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InteractionService", function () {
      return InteractionService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var InteractionService = /*#__PURE__*/function () {
      function InteractionService() {
        _classCallCheck(this, InteractionService);

        this._studentListSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.studentList$ = this._studentListSource.asObservable();
        this._users = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.user$ = this._users.asObservable();
      }

      _createClass(InteractionService, [{
        key: "sentMessage",
        value: function sentMessage(message) {
          this._studentListSource.next(message);
        }
      }, {
        key: "addUsers",
        value: function addUsers(users) {
          this._users.next(users);
        }
      }, {
        key: "user",
        get: function get() {
          return this._user;
        },
        set: function set(user) {
          this._user = user;
        }
      }]);

      return InteractionService;
    }();

    InteractionService.ɵfac = function InteractionService_Factory(t) {
      return new (t || InteractionService)();
    };

    InteractionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: InteractionService,
      factory: InteractionService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InteractionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/service/student.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/service/student.service.ts ***!
    \*************************************************/

  /*! exports provided: StudentService */

  /***/
  function srcAppCoreServiceStudentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentService", function () {
      return StudentService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var StudentService = /*#__PURE__*/function () {
      function StudentService(http) {
        _classCallCheck(this, StudentService);

        this.http = http;
        this.baseUrl = "http://localhost:8081/api/";
        this.baseUserUrl = "http://ec2-15-206-159-184.ap-south-1.compute.amazonaws.com/fse-pm-app/api/";
      }

      _createClass(StudentService, [{
        key: "getUserList",
        value: function getUserList() {
          var _this2 = this;

          return this.http.get("".concat(this.baseUserUrl) + "user-list").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(2000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return _this2.http.get('assets/data/users.json'); //return throwError(err.message || 'Server Error');
          }));
        }
      }, {
        key: "getStudentList",
        value: function getStudentList() {
          return this.http.get("".concat(this.baseUserUrl) + "user-list").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(5), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err.message || 'Server Error');
          }));
        }
      }, {
        key: "createStudent",
        value: function createStudent(student) {
          return this.http.post("".concat(this.baseUserUrl) + 'save-user', student);
        }
      }, {
        key: "deleteStudent",
        value: function deleteStudent(id) {
          return this.http["delete"]("".concat(this.baseUserUrl) + 'delete-user/' + "".concat(id), {
            responseType: 'text'
          });
        }
      }, {
        key: "getUser",
        value: function getUser(id) {
          return this.http.get("".concat(this.baseUserUrl) + 'user/' + "".concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
        }
        /*getStudent(id: number): Observable<any> {
          return this.http.get<Student>(`${this.baseUrl}` + 'student/' + `${id}`)
            .pipe(
              retry(1),
              catchError(this.errorHandler)
            )
        }*/

      }, {
        key: "updateStudent",
        value: function updateStudent(id, value) {
          return this.http.post("".concat(this.baseUserUrl, "/update-user/").concat(id), value);
        } // updateStudent(id: number, value: User): Observable<Object> {
        //   return this.http.post(`${this.baseUserUrl}users/${id}`, value);
        // }

      }, {
        key: "getAllPostCall",
        value: function getAllPostCall() {
          return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
        }
      }, {
        key: "getAllPost",
        value: function getAllPost() {
          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'neme': 'Shubham'
          });
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('id', '2');
          return this.http.get('https://jsonplaceholder.typicode.com/todos/1', {
            headers: header,
            params: params
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          //https://jsonplaceholder.typicode.com/users --Replace with JSON as open api is not working sometimes
          return this.getUserList().toPromise();
        } //`https://jsonplaceholder.typicode.com/posts?userId=${userId}`

      }, {
        key: "getUserPosts",
        value: function getUserPosts(userId) {
          return this.http.get('assets/data/posts.json').toPromise();
        } //`https://jsonplaceholder.typicode.com/comments?postId=${postId}`

      }, {
        key: "getPostComments",
        value: function getPostComments(postId) {
          return this.http.get('assets/data/comments.json').toPromise();
        }
      }, {
        key: "errorHandler",
        value: function errorHandler(error) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error || 'Server Error');
        }
      }]);

      return StudentService;
    }();

    StudentService.ɵfac = function StudentService_Factory(t) {
      return new (t || StudentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    StudentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StudentService,
      factory: StudentService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/confirmok/confirmok.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/shared/components/confirmok/confirmok.component.ts ***!
    \********************************************************************/

  /*! exports provided: ConfirmOkComponent */

  /***/
  function srcAppSharedComponentsConfirmokConfirmokComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmOkComponent", function () {
      return ConfirmOkComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ConfirmOkComponent_div_0_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmOkComponent_div_0_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r2.bsModalRef.hide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ConfirmOkComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConfirmOkComponent_div_0_button_3_Template, 3, 0, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
      }
    }

    var ConfirmOkComponent = /*#__PURE__*/function () {
      function ConfirmOkComponent(bsModalRef) {
        _classCallCheck(this, ConfirmOkComponent);

        this.bsModalRef = bsModalRef;
        this.title = 'Information';
        this.msg = '';
        this.confirmLabel = 'OK';
      }

      _createClass(ConfirmOkComponent, [{
        key: "confirmClick",
        value: function confirmClick() {
          if (this.confirmCallback) {
            this.confirmCallback();
          }
        }
      }]);

      return ConfirmOkComponent;
    }();

    ConfirmOkComponent.ɵfac = function ConfirmOkComponent_Factory(t) {
      return new (t || ConfirmOkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]));
    };

    ConfirmOkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfirmOkComponent,
      selectors: [["ng-component"]],
      decls: 6,
      vars: 3,
      consts: [["class", "modal-header", 4, "ngIf"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "class", "close pull-right", "aria-label", "Close", 3, "click", 4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"]],
      template: function ConfirmOkComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConfirmOkComponent_div_0_Template, 4, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmOkComponent_Template_button_click_4_listener() {
            ctx.confirmClick();
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title != "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.msg, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.confirmLabel);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".confirmModal {\n    width: 500px;\n    .modal-header {\n        margin: 0;\n        padding: 15px;\n        .close {\n            cursor: pointer;\n        }\n        .close:focus {\n            outline: none;\n        }\n    }\n    .modal-footer {\n        margin: 0;\n        padding: 0 20px 20px;\n    }\n    .modal-body {\n        color: #48535c;\n        margin: 0;\n        padding: 30px 15px;\n    }\n    .modal-content {\n        border: none;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29uZmlybW9rL2NvbmZpcm1vay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaO1FBQ0ksU0FBUztRQUNULGFBQWE7UUFDYjtZQUNJLGVBQWU7UUFDbkI7UUFDQTtZQUNJLGFBQWE7UUFDakI7SUFDSjtJQUNBO1FBQ0ksU0FBUztRQUNULG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksY0FBYztRQUNkLFNBQVM7UUFDVCxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvbmZpcm1vay9jb25maXJtb2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25maXJtTW9kYWwge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICAubW9kYWwtaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAuY2xvc2Uge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5jbG9zZTpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5tb2RhbC1mb290ZXIge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDAgMjBweCAyMHB4O1xuICAgIH1cbiAgICAubW9kYWwtYm9keSB7XG4gICAgICAgIGNvbG9yOiAjNDg1MzVjO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDMwcHggMTVweDtcbiAgICB9XG4gICAgLm1vZGFsLWNvbnRlbnQge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxufSJdfQ== */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmOkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: '',
          templateUrl: './confirmok.component.html',
          styleUrls: ['./confirmok.component.css'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/confirmok/data/modal-service.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/shared/components/confirmok/data/modal-service.ts ***!
    \*******************************************************************/

  /*! exports provided: ModalService */

  /***/
  function srcAppSharedComponentsConfirmokDataModalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalService", function () {
      return ModalService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _confirmok_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../confirmok.component */
    "./src/app/shared/components/confirmok/confirmok.component.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");

    var ModalService = /*#__PURE__*/function () {
      function ModalService(bsModalService) {
        _classCallCheck(this, ModalService);

        this.bsModalService = bsModalService;
      }

      _createClass(ModalService, [{
        key: "confirmOK",
        value: function confirmOK(msg, confirmCallback, title, confirmLabel, cancelLabel) {
          var clsname = title === 'Information' ? 'confirmModal reassign-popup' : 'confirmModal';
          var modalRef = this.bsModalService.show(_confirmok_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmOkComponent"], {
            "class": clsname,
            ignoreBackdropClick: true,
            keyboard: false,
            animated: false,
            backdrop: 'static'
          });
          modalRef.content.title = title || 'Information';
          modalRef.content.confirmLabel = confirmLabel || 'OK';
          modalRef.content.msg = msg;
          modalRef.content.confirmCallback = confirmCallback;
          return modalRef;
        }
      }]);

      return ModalService;
    }();

    ModalService.ɵfac = function ModalService_Factory(t) {
      return new (t || ModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]));
    };

    ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ModalService,
      factory: ModalService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/confirmok/index.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/components/confirmok/index.ts ***!
    \******************************************************/

  /*! exports provided: ConfirmOkComponent */

  /***/
  function srcAppSharedComponentsConfirmokIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _confirmok_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./confirmok.component */
    "./src/app/shared/components/confirmok/confirmok.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ConfirmOkComponent", function () {
      return _confirmok_component__WEBPACK_IMPORTED_MODULE_0__["ConfirmOkComponent"];
    });
    /***/

  },

  /***/
  "./src/app/shared/components/header/header.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/header/header.component.ts ***!
    \**************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      inputs: {
        headerValue: "headerValue"
      },
      decls: 3,
      vars: 1,
      consts: [[1, "header"], [1, "new4"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.headerValue);
        }
      },
      styles: [".header[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\r\n    padding-bottom: 10px;\r\n    color:white;\r\n    border: 1px solid darkorchid ;\r\n    background-color: palevioletred;\r\n    \r\n}\r\n\r\nhr.new4[_ngcontent-%COMP%] {\r\n    border: 1px solid red;\r\n    margin-top: .2rem; \r\n    margin-bottom: .2rem;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHdEQUF3RDtJQUN4RCxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLDZCQUE2QjtJQUM3QiwrQkFBK0I7O0FBRW5DOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFDdEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udDogNDAwIDI0cHgvMzJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrb3JjaGlkIDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHBhbGV2aW9sZXRyZWQ7XHJcbiAgICBcclxufVxyXG5cclxuaHIubmV3NCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICBtYXJnaW4tdG9wOiAuMnJlbTsgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAuMnJlbTtcclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, {
        headerValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/header/index.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/components/header/index.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedComponentsHeaderIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./header.component */
    "./src/app/shared/components/header/header.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return _header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"];
    });
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _components_confirmok__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/confirmok */
    "./src/app/shared/components/confirmok/index.ts");
    /* harmony import */


    var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/header */
    "./src/app/shared/components/header/index.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_components_confirmok__WEBPACK_IMPORTED_MODULE_2__["ConfirmOkComponent"], _components_header__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_components_confirmok__WEBPACK_IMPORTED_MODULE_2__["ConfirmOkComponent"], _components_header__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_confirmok__WEBPACK_IMPORTED_MODULE_2__["ConfirmOkComponent"], _components_header__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          entryComponents: [_components_confirmok__WEBPACK_IMPORTED_MODULE_2__["ConfirmOkComponent"]],
          exports: [_components_confirmok__WEBPACK_IMPORTED_MODULE_2__["ConfirmOkComponent"], _components_header__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/student-list/student-list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/student-list/student-list.component.ts ***!
    \********************************************************/

  /*! exports provided: StudentListComponent */

  /***/
  function srcAppStudentListStudentListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentListComponent", function () {
      return StudentListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_model_student__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../core/model/student */
    "./src/app/core/model/student.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _core_model_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/model/user */
    "./src/app/core/model/user.ts");
    /* harmony import */


    var _core_service_student_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../core/service/student.service */
    "./src/app/core/service/student.service.ts");
    /* harmony import */


    var _core_service_interaction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../core/service/interaction.service */
    "./src/app/core/service/interaction.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _shared_components_confirmok_data_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/components/confirmok/data/modal-service */
    "./src/app/shared/components/confirmok/data/modal-service.ts");
    /* harmony import */


    var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared/components/header/header.component */
    "./src/app/shared/components/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function StudentListComponent_tr_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentListComponent_tr_31_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var student_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.deleteStudent(student_r2.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentListComponent_tr_31_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var student_r2 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.updateStudent(student_r2.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Update");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var student_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r2.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r2.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r2.email);
      }
    }

    var StudentListComponent = /*#__PURE__*/function () {
      function StudentListComponent(studentservice, inreractionService, route, spinner, modalService) {
        _classCallCheck(this, StudentListComponent);

        this.studentservice = studentservice;
        this.inreractionService = inreractionService;
        this.route = route;
        this.spinner = spinner;
        this.modalService = modalService;
        this.deleteMessage = false;
        this.isupdated = false;
        this.user = new _core_model_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.addedUser = new _core_model_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.student = new _core_model_student__WEBPACK_IMPORTED_MODULE_1__["Student"]();
        this.isupdatedMess = true;
        this.parentDataUsingGetterSetter = 'I am Sending data from Parent Componet Using Getter Setter';
        this.isErrorMessage = false;
        this.headerVal = 'User Information';
        this.studentupdateform = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
      }

      _createClass(StudentListComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "moveNext",
        value: function moveNext() {
          this.route.navigate(['/student/student-details']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.isupdated = false;
          this.spinner.show();
          this.inreractionService.user$.subscribe(function (user) {
            _this3.addedUser = user;
            console.log(_this3.addedUser);
          });
          this.studentservice.getStudentList().subscribe(function (data) {
            _this3.userList = data;
          }, function (err) {
            _this3.errorMsg = err;
            _this3.isErrorMessage = true;

            _this3.studentservice.getUserList().subscribe(function (data) {
              if (_this3.inreractionService._user) {
                data.length;
                _this3.inreractionService._user.id = data.length + 1;
                data.push(_this3.inreractionService._user);
              }

              _this3.userList = data;

              _this3.spinner.hide();
            }, function (error) {
              _this3.errorMsg = error;
              _this3.isErrorMessage = true;
            });
          });
        }
      }, {
        key: "deleteStudent",
        value: function deleteStudent(id) {
          var _this4 = this;

          this.studentservice.deleteStudent(id).subscribe(function (data) {
            console.log(data);

            _this4.studentservice.getStudentList().subscribe(function (data) {
              _this4.deleteMessage = true;
              console.log(data);
              _this4.userList = data;

              _this4.modalService.confirmOK('User Data Deleted', function () {}, "Success");
            });
          }, function (error) {
            console.log(error);

            _this4.studentservice.getUserList().subscribe(function (data) {
              _this4.userList = data.filter(function (x) {
                return x.id != id;
              });
              _this4.deleteMessage = true;

              _this4.modalService.confirmOK('User Data Deleted', function () {}, "Success"); //this.userList = data;

            });
          });
        }
      }, {
        key: "updateStudent",
        value: function updateStudent(id) {
          var _this5 = this;

          this.studentservice.getUser(id).subscribe(function (data) {
            _this5.isupdated = true;
            _this5.user = data[0];
          }, function (error) {
            return console.log(error.message);
          });
        }
      }, {
        key: "updateStu",
        value: function updateStu(updstu) {
          var _this6 = this;

          this.user = new _core_model_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
          this.user.id = this.StudentId.value;
          this.user.name = this.StudentName.value;
          this.user.email = this.StudentEmail.value; // this.student.student_branch=this.StudentBranch.value;  
          // console.log(this.StudentBranch.value);

          this.studentservice.updateStudent(this.user.id, this.user).subscribe(function (data) {
            _this6.isupdated = true;

            _this6.studentservice.getStudentList().subscribe(function (data) {
              _this6.isupdatedMess = false;
              _this6.userList = data;
            });
          }, function (error) {
            console.log(error);

            _this6.studentservice.getUserList().subscribe(function (data) {
              _this6.userList = data.map(function (user) {
                if (user.id === _this6.user.id) {
                  user.name = _this6.user.name;
                  user.email = _this6.user.email;
                  return user;
                } else {
                  return user;
                }
              });
            }, function (error) {
              return console.log(error);
            });
          });
        }
      }, {
        key: "changeisUpdate",
        value: function changeisUpdate() {
          this.isupdated = false;
        }
      }, {
        key: "hideError",
        value: function hideError() {
          this.isErrorMessage = false;
        }
      }, {
        key: "StudentName",

        /* updateStu(updstu : any){
             this.student=new Student();
            this.student.student_id=this.StudentId.value;
            this.student.student_name=this.StudentName.value;
            this.student.student_email=this.StudentEmail.value;
           // this.student.student_branch=this.StudentBranch.value;
           // console.log(this.StudentBranch.value);
            this.studentservice.updateStudent(this.student.student_id,this.student).subscribe(
             data => {
               this.isupdated=true;
               this.studentservice.getStudentList().subscribe(data =>{
                 this.isupdatedMess = false;
                 this.studentList =data
                 })
             },
             error => console.log(error));
         }*/
        get: function get() {
          return this.studentupdateform.get('name');
        }
      }, {
        key: "StudentEmail",
        get: function get() {
          return this.studentupdateform.get('email');
        }
      }, {
        key: "StudentId",
        get: function get() {
          return this.studentupdateform.get('id');
        }
      }]);

      return StudentListComponent;
    }();

    StudentListComponent.ɵfac = function StudentListComponent_Factory(t) {
      return new (t || StudentListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_student_service__WEBPACK_IMPORTED_MODULE_4__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_interaction_service__WEBPACK_IMPORTED_MODULE_5__["InteractionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_components_confirmok_data_modal_service__WEBPACK_IMPORTED_MODULE_8__["ModalService"]));
    };

    StudentListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StudentListComponent,
      selectors: [["app-student-list"]],
      decls: 69,
      vars: 12,
      consts: [[1, "panel", "panel-default"], [3, "hidden"], [1, "alert", "alert-info", "alert-dismissible"], ["type", "button", "data-dismiss", "alert", 1, "close", 3, "click"], [1, "panel-heading"], [3, "headerValue"], [1, "row", 3, "hidden"], [1, "col-sm-4"], ["type", "button", "data-dismiss", "alert", 1, "close"], [1, "panel-body"], ["datatable", "", 1, "table", "table-hover", "table-sm"], [1, "thead-light"], [4, "ngFor", "ngForOf"], ["id", "myModal", 3, "hidden"], [1, "modal-dialog"], [1, "modal-content"], [3, "formGroup", "ngSubmit"], ["updstu", ""], [1, "modal-header"], [1, "modal-title", 2, "text-align", "center"], [1, "modal-body"], [1, "form-group"], ["for", "name"], ["formControlName", "id", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-success", 3, "hidden"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], [2, "align-items", "center"], ["type", "submit", 1, "btn", "btn-success", 3, "click"], ["bdColor", "rgba(51, 51, 51, 0.8)", "size", "default", "type", "ball-spin-clockwise"], [2, "color", "white"], [1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-futboll-0"], ["data-toggle", "modal", "data-target", "#myModal", 1, "btn", "btn-info", 3, "click"]],
      template: function StudentListComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentListComponent_Template_button_click_3_listener() {
            return ctx.hideError();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-header", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "User Data Deleted");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "thead", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "User Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "User Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "User Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, StudentListComponent_tr_31_Template, 13, 3, "tr", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "form", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function StudentListComponent_Template_form_ngSubmit_36_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);

            return ctx.updateStu(_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Update Student");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Student Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentListComponent_Template_input_ngModelChange_46_listener($event) {
            return ctx.user.id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Student Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentListComponent_Template_input_ngModelChange_50_listener($event) {
            return ctx.user.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Student Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentListComponent_Template_input_ngModelChange_54_listener($event) {
            return ctx.user.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Student Detail Updated!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentListComponent_Template_button_click_61_listener() {
            return ctx.changeisUpdate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentListComponent_Template_button_click_64_listener() {
            return ctx.moveNext();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ngx-spinner", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Please Wait. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isErrorMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMsg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerValue", ctx.headerVal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.deleteMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isupdated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.studentupdateform);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isupdatedMess);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isupdated);
        }
      },
      directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtbGlzdC9zdHVkZW50LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-student-list',
          templateUrl: './student-list.component.html',
          styleUrls: ['./student-list.component.css']
        }]
      }], function () {
        return [{
          type: _core_service_student_service__WEBPACK_IMPORTED_MODULE_4__["StudentService"]
        }, {
          type: _core_service_interaction_service__WEBPACK_IMPORTED_MODULE_5__["InteractionService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]
        }, {
          type: _shared_components_confirmok_data_modal_service__WEBPACK_IMPORTED_MODULE_8__["ModalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\AngularProject\student-information\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map