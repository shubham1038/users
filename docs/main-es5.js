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


    var _model_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../model/user */
    "./src/app/model/user.ts");
    /* harmony import */


    var _service_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/student.service */
    "./src/app/service/student.service.ts");
    /* harmony import */


    var _service_interaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/interaction.service */
    "./src/app/service/interaction.service.ts");

    var AddStudentComponent = /*#__PURE__*/function () {
      function AddStudentComponent(studentService, interactionService) {
        _classCallCheck(this, AddStudentComponent);

        this.studentService = studentService;
        this.interactionService = interactionService;
        this.student = new _model_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.submitted = false;
        this.newUser = new _model_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
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
          this.student = new _model_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
          this.student.name = this.StudentName.value;
          this.student.email = this.StudentEmail.value; // this.student.student_branch = this.StudentBranch.value;

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
          this.student = new _model_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
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
      return new (t || AddStudentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_interaction_service__WEBPACK_IMPORTED_MODULE_4__["InteractionService"]));
    };

    AddStudentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddStudentComponent,
      selectors: [["app-add-student"]],
      decls: 37,
      vars: 3,
      consts: [[1, "row"], [1, "col-sm-4"], [2, "width", "400px", 3, "hidden"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "name"], ["type", "text", "formControlName", "student_name", "data-toggle", "tooltip", "data-placement", "right", "title", "Enter Student Name", 1, "form-control"], [1, "alert", "alert-danger", 2, "margin-top", "5px"], ["type", "text", "formControlName", "student_email", "data-toggle", "tooltip", "data-placement", "right", "title", "Enter Student Email", 1, "form-control"], ["type", "submit", 1, "btn", "btn-success"], [3, "hidden"], [1, "btn", "btn-primary"]],
      template: function AddStudentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create Student");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddStudentComponent_Template_form_ngSubmit_6_listener() {
            return ctx.saveStudent();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Student Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Student Name is Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " MinLength Error ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Student Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Student Email is Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Invalid Email Format ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Student Added SuccessFully!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Add More Student");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.submitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.studentsaveform);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.submitted);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
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
          type: _service_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"]
        }, {
          type: _service_interaction_service__WEBPACK_IMPORTED_MODULE_4__["InteractionService"]
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


    var _service_interaction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./service/interaction.service */
    "./src/app/service/interaction.service.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      // respMessage :string;
      function AppComponent(inreractionService) {
        _classCallCheck(this, AppComponent);

        this.inreractionService = inreractionService;
        this.title = 'student-data';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.inreractionService.studentList$.subscribe(
          //   message => this.respMessage = message
          // )
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_interaction_service__WEBPACK_IMPORTED_MODULE_1__["InteractionService"]));
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
      styles: ["example-button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .example-button-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  margin-right: 8px;\r\n}\r\nhr.new4[_ngcontent-%COMP%] {\r\n  border: 1px solid red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImV4YW1wbGUtYnV0dG9uLXJvdyBidXR0b24sXHJcbi5leGFtcGxlLWJ1dHRvbi1yb3cgYSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuaHIubmV3NCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59Il19 */"]
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
          type: _service_interaction_service__WEBPACK_IMPORTED_MODULE_1__["InteractionService"]
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


    var _interceptor_app_interceptor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./interceptor/app-interceptor.service */
    "./src/app/interceptor/app-interceptor.service.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./student-list/student-list.component */
    "./src/app/student-list/student-list.component.ts");
    /* harmony import */


    var _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
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
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
        useClass: _interceptor_app_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["AppInterceptorService"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_9__["StudentListComponent"], _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_10__["AddStudentComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["routingComponents"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _interceptor_app_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["AppInterceptorService"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/interceptor/app-interceptor.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/interceptor/app-interceptor.service.ts ***!
    \********************************************************/

  /*! exports provided: AppInterceptorService */

  /***/
  function srcAppInterceptorAppInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
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


    var _app_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-loader.service */
    "./src/app/interceptor/app-loader.service.ts");

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

          this.count++;

          if (this.count == 1) {
            this.loaderService.show();
          }

          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'name': 'dev'
          });
          var clone = req.clone({
            headers: header
          });
          return next.handle(clone).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
              _this.count--;

              if (_this.count == 0) {
                _this.loaderService.hide();
              }
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
      return new (t || AppInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_loader_service__WEBPACK_IMPORTED_MODULE_4__["AppLoaderService"]));
    };

    AppInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppInterceptorService,
      factory: AppInterceptorService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _app_loader_service__WEBPACK_IMPORTED_MODULE_4__["AppLoaderService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/interceptor/app-loader.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/interceptor/app-loader.service.ts ***!
    \***************************************************/

  /*! exports provided: AppLoaderService */

  /***/
  function srcAppInterceptorAppLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
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

    var AppLoaderService = /*#__PURE__*/function () {
      function AppLoaderService() {
        _classCallCheck(this, AppLoaderService);

        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(AppLoaderService, [{
        key: "show",
        value: function show() {
          this.isLoading.next('Request is Running');
        }
      }, {
        key: "hide",
        value: function hide() {
          this.isLoading.next('Request is Completed');
        }
      }]);

      return AppLoaderService;
    }();

    AppLoaderService.ɵfac = function AppLoaderService_Factory(t) {
      return new (t || AppLoaderService)();
    };

    AppLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppLoaderService,
      factory: AppLoaderService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppLoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/model/student.ts":
  /*!**********************************!*\
    !*** ./src/app/model/student.ts ***!
    \**********************************/

  /*! exports provided: Student */

  /***/
  function srcAppModelStudentTs(module, __webpack_exports__, __webpack_require__) {
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
  "./src/app/model/user.ts":
  /*!*******************************!*\
    !*** ./src/app/model/user.ts ***!
    \*******************************/

  /*! exports provided: User */

  /***/
  function srcAppModelUserTs(module, __webpack_exports__, __webpack_require__) {
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
  "./src/app/service/interaction.service.ts":
  /*!************************************************!*\
    !*** ./src/app/service/interaction.service.ts ***!
    \************************************************/

  /*! exports provided: InteractionService */

  /***/
  function srcAppServiceInteractionServiceTs(module, __webpack_exports__, __webpack_require__) {
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
      factory: InteractionService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InteractionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/student.service.ts":
  /*!********************************************!*\
    !*** ./src/app/service/student.service.ts ***!
    \********************************************/

  /*! exports provided: StudentService */

  /***/
  function srcAppServiceStudentServiceTs(module, __webpack_exports__, __webpack_require__) {
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
        this.baseUserUrl = "https://jsonplaceholder.typicode.com/";
      }

      _createClass(StudentService, [{
        key: "getUserList",
        value: function getUserList() {
          return this.http.get("".concat(this.baseUserUrl) + "users").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(5), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err.message || 'Server Error');
          }));
        }
      }, {
        key: "getStudentList",
        value: function getStudentList() {
          return this.http.get("".concat(this.baseUrl) + "students-list").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(5), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err.message || 'Server Error');
          }));
        }
      }, {
        key: "createStudent",
        value: function createStudent(student) {
          return this.http.post("".concat(this.baseUrl) + 'save-student', student);
        }
      }, {
        key: "deleteStudent",
        value: function deleteStudent(id) {
          return this.http["delete"]("".concat(this.baseUrl) + 'delete-student/' + "".concat(id), {
            responseType: 'text'
          });
        }
      }, {
        key: "getUser",
        value: function getUser(id) {
          return this.http.get("".concat(this.baseUserUrl) + 'users/' + "".concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
        }
        /*getStudent(id: number): Observable<any> {
          return this.http.get<Student>(`${this.baseUrl}` + 'student/' + `${id}`)
            .pipe(
              retry(1),
              catchError(this.errorHandler)
            )
        }*/

        /*updateStudent(id: number, value: any): Observable<Object> {
          return this.http.post(`${this.baseUrl}/update-student/${id}`, value);
        }*/

      }, {
        key: "updateStudent",
        value: function updateStudent(id, value) {
          return this.http.post("".concat(this.baseUserUrl, "users/").concat(id), value);
        }
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
          return this.http.get('https://jsonplaceholder.typicode.com/users').toPromise();
        }
      }, {
        key: "getUserPosts",
        value: function getUserPosts(userId) {
          return this.http.get("https://jsonplaceholder.typicode.com/posts?userId=".concat(userId)).toPromise();
        }
      }, {
        key: "getPostComments",
        value: function getPostComments(postId) {
          return this.http.get("https://jsonplaceholder.typicode.com/comments?postId=".concat(postId)).toPromise();
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
      factory: StudentService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
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


    var _model_student__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../model/student */
    "./src/app/model/student.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _model_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../model/user */
    "./src/app/model/user.ts");
    /* harmony import */


    var _service_student_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/student.service */
    "./src/app/service/student.service.ts");
    /* harmony import */


    var _service_interaction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../service/interaction.service */
    "./src/app/service/interaction.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function StudentListComponent_tr_33_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentListComponent_tr_33_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var student_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.deleteStudent(student_r2.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentListComponent_tr_33_Template_button_click_11_listener() {
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
      // @ViewChild(StudentListChildComponent) childComponentRef : StudentListChildComponent;
      function StudentListComponent(studentservice, inreractionService, route) {
        _classCallCheck(this, StudentListComponent);

        this.studentservice = studentservice;
        this.inreractionService = inreractionService;
        this.route = route;
        this.deleteMessage = false;
        this.isupdated = false;
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.addedUser = new _model_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.student = new _model_student__WEBPACK_IMPORTED_MODULE_1__["Student"]();
        this.isupdatedMess = true; //public parentData ='I am Sending data from Parent Componet';

        this.parentDataUsingGetterSetter = 'I am Sending data from Parent Componet Using Getter Setter';
        this.isErrorMessage = false;
        this.studentupdateform = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
      }

      _createClass(StudentListComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {//this.childComponentRef.message ='Message from Parent Component';
        }
      }, {
        key: "moveNext",
        value: function moveNext() {
          this.route.navigate(['/student/student-details']);
        } // clickToHello(){
        //   this.inreractionService.sentMessage('Good Morning Child')
        // }
        // clickToThanks(){
        //   this.inreractionService.sentMessage('Thanks Child')
        // }
        // clickToChild(){
        //   this.childComponentRef.message = 'Message from Parent Component';
        // }

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.isupdated = false;
          this.inreractionService.user$.subscribe(function (user) {
            _this2.addedUser = user;
            console.log(_this2.addedUser);
          });
          this.studentservice.getUserList().subscribe(function (data) {
            // console.log(this.inreractionService._user);
            /// if(this.addedUser)
            //if (isEmpty(this.addedUser))
            if (_this2.inreractionService._user) {
              data.length;
              _this2.inreractionService._user.id = data.length + 1;
              data.push(_this2.inreractionService._user); // console.log(data1);
            }

            _this2.userList = data;
          }, function (error) {
            _this2.errorMsg = error;
            _this2.isErrorMessage = true;
          });
          /*this.studentservice.getStudentList()
            .subscribe(
              data => {
                this.studentList = data;
              },
              err => {
                this.errorMsg = err;
                this.isErrorMessage = true;
              }
            )*/
        }
      }, {
        key: "deleteStudent",
        value: function deleteStudent(id) {
          var _this3 = this;

          this.studentservice.getUserList().subscribe(function (data) {
            _this3.userList = data.filter(function (x) {
              return x.id != id;
            });
            _this3.deleteMessage = true;
            console.log(data); //this.userList = data;
          });
          /* this.studentservice.deleteStudent(id).subscribe(data => {
             console.log(data)
             this.studentservice.getStudentList().subscribe(
               data => {
                 this.deleteMessage = true;
                 console.log(data)
                 this.studentList = data;
               }
             )
           },
             error => { console.log(error)
             }
           )*/
        }
      }, {
        key: "updateStudent",
        value: function updateStudent(id) {
          var _this4 = this;

          this.studentservice.getUser(id).subscribe(function (data) {
            _this4.isupdated = true;
            _this4.user = data;
          }, function (error) {
            return console.log(error.message);
          });
        }
      }, {
        key: "updateStu",
        value: function updateStu(updstu) {
          var _this5 = this;

          this.user = new _model_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
          this.user.id = this.StudentId.value;
          this.user.name = this.StudentName.value;
          this.user.email = this.StudentEmail.value; // this.student.student_branch=this.StudentBranch.value;  
          // console.log(this.StudentBranch.value);

          this.studentservice.getUserList().subscribe(function (data) {
            _this5.userList = data.map(function (user) {
              if (user.id === _this5.user.id) {
                user.name = _this5.user.name;
                user.email = _this5.user.email;
                return user;
              } else {
                return user;
              }
            });
          }, function (error) {
            return console.log(error);
          });
          /*this.studentservice.updateStudent(this.user.id,this.user).subscribe(
           data => {
             this.isupdated=true;
             this.studentservice.getStudentList().subscribe(data =>{
               this.isupdatedMess = false;
               this.studentList =data
               })
           },
           error => console.log(error)); */
        }
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

      }, {
        key: "changeisUpdate",
        value: function changeisUpdate() {
          this.isupdated = false;
        } // clickParentMethod(message :string){
        //   alert('HiHihhi' + message);
        // }

      }, {
        key: "hideError",
        value: function hideError() {
          this.isErrorMessage = false;
        }
      }, {
        key: "StudentName",
        get: function get() {
          return this.studentupdateform.get('name');
        }
      }, {
        key: "StudentEmail",
        get: function get() {
          return this.studentupdateform.get('email');
        }
        /*get StudentBranch(){
          return this.studentupdateform.get('student_branch');
        }  */

      }, {
        key: "StudentId",
        get: function get() {
          return this.studentupdateform.get('id');
        }
      }]);

      return StudentListComponent;
    }();

    StudentListComponent.ɵfac = function StudentListComponent_Factory(t) {
      return new (t || StudentListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_student_service__WEBPACK_IMPORTED_MODULE_4__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_interaction_service__WEBPACK_IMPORTED_MODULE_5__["InteractionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    StudentListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StudentListComponent,
      selectors: [["app-student-list"]],
      decls: 68,
      vars: 11,
      consts: [[1, "panel", "panel-default"], [3, "hidden"], [1, "alert", "alert-info", "alert-dismissible"], ["type", "button", "data-dismiss", "alert", 1, "close", 3, "click"], [1, "panel-heading"], [2, "text-align", "center"], [1, "row", 3, "hidden"], [1, "col-sm-4"], ["type", "button", "data-dismiss", "alert", 1, "close"], [1, "panel-body"], ["datatable", "", 1, "table", "table-hover", "table-sm"], [1, "thead-light"], [4, "ngFor", "ngForOf"], ["id", "myModal", 3, "hidden"], [1, "modal-dialog"], [1, "modal-content"], [3, "formGroup", "ngSubmit"], ["updstu", ""], [1, "modal-header"], [1, "modal-title", 2, "text-align", "center"], [1, "modal-body"], [1, "form-group"], ["for", "name"], ["formControlName", "id", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-success", 3, "hidden"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], [2, "align-items", "center"], ["type", "submit", 1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-futboll-0"], ["data-toggle", "modal", "data-target", "#myModal", 1, "btn", "btn-info", 3, "click"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "User Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "User Data Deleted");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "thead", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "User Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "User Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "User Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, StudentListComponent_tr_33_Template, 13, 3, "tr", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "form", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function StudentListComponent_Template_form_ngSubmit_38_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);

            return ctx.updateStu(_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Update Student");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Student Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentListComponent_Template_input_ngModelChange_48_listener($event) {
            return ctx.user.id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Student Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentListComponent_Template_input_ngModelChange_52_listener($event) {
            return ctx.user.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Student Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentListComponent_Template_input_ngModelChange_56_listener($event) {
            return ctx.user.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Student Detail Updated!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentListComponent_Template_button_click_63_listener() {
            return ctx.changeisUpdate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentListComponent_Template_button_click_66_listener() {
            return ctx.moveNext();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isErrorMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMsg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

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
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
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
          type: _service_student_service__WEBPACK_IMPORTED_MODULE_4__["StudentService"]
        }, {
          type: _service_interaction_service__WEBPACK_IMPORTED_MODULE_5__["InteractionService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
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