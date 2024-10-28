"use strict";
(self["webpackChunkRestaurantBooking"] = self["webpackChunkRestaurantBooking"] || []).push([["src_app_auth_auth_module_ts"],{

/***/ 5911:
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthRoutingModule: () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login/login.component */ 7626);
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/signup/signup.component */ 3544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;





const routes = [{
  path: '',
  children: [{
    path: 'login',
    component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
  }, {
    path: 'signup',
    component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__.SignupComponent
  }, {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }]
}];
class AuthRoutingModule {}
_class = AuthRoutingModule;
_class.ɵfac = function AuthRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 4788:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthModule: () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 5911);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../material/material.module */ 6889);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 6208);
/* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/change-password/change-password.component */ 9826);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ 7626);
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/signup/signup.component */ 3544);
/* harmony import */ var _staff_staff_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../staff/staff.module */ 9196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;










class AuthModule {}
_class = AuthModule;
_class.ɵfac = function AuthModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _staff_staff_module__WEBPACK_IMPORTED_MODULE_6__.StaffModule, _material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent, _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__.SignupComponent, _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__.ChangePasswordComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _staff_staff_module__WEBPACK_IMPORTED_MODULE_6__.StaffModule, _material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule],
    exports: [_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__.ChangePasswordComponent]
  });
})();

/***/ }),

/***/ 7626:
/*!**********************************************************!*\
  !*** ./src/app/auth/components/login/login.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var src_app_shared_components_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/ok-dialog/ok-dialog.component */ 79);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 4567);
/* harmony import */ var src_app_shared_validators_validator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/validators/validator.service */ 8379);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/loading-spinner/loading-spinner.component */ 5860);
var _class;















function LoginComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "shared-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
const _c0 = function () {
  return ["/auth/signup"];
};
function LoginComponent_mat_card_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card", 3)(1, "mat-card-title", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Log In");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-card-content")(4, "div", 5)(5, "mat-form-field", 6)(6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-form-field", 6)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function LoginComponent_mat_card_2_Template_input_keyup_enter_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.logIn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-card-actions")(14, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_mat_card_2_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.logIn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 10)(17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Don't have an account? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Sign up here");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.disableBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c0));
  }
}
class LoginComponent {
  constructor(fb, authService, validatorService, dialog, router) {
    this.fb = fb;
    this.authService = authService;
    this.validatorService = validatorService;
    this.dialog = dialog;
    this.router = router;
    this.disableBtn = false;
    this.isLoading = false;
    this.loginForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(this.validatorService.emailPattern)]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
    });
  }
  logIn() {
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.disableBtn = true;
    this.authService.login(this.loginForm.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(({
      error
    }) => {
      const dialogRef = this.dialog.open(src_app_shared_components_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_0__.OkDialogComponent, {
        data: {
          title: "Failed",
          message: error.message
        }
      });
      dialogRef.afterClosed().subscribe();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(error);
    })).subscribe(() => {
      this.disableBtn = false;
      this.isLoading = false;
      this.router.navigateByUrl('/reservations');
    });
  }
}
_class = LoginComponent;
_class.ɵfac = function LoginComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_validators_validator_service__WEBPACK_IMPORTED_MODULE_2__.ValidatorsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["auth-login-page"]],
  decls: 3,
  vars: 2,
  consts: [[1, "cardsContainer"], [4, "ngIf"], ["class", "logInCard", 4, "ngIf"], [1, "logInCard"], [1, "titleLogIn"], [3, "formGroup"], ["appearance", "fill", 1, "inputLogIn"], ["matInput", "", "placeholder", "johndoe@domain.com", "formControlName", "email"], ["type", "password", "matInput", "", "formControlName", "password", 3, "keyup.enter"], ["mat-raised-button", "", "type", "submit", 1, "logIn", 3, "disabled", "click"], [1, "registerText"], [1, "registerLink", 3, "routerLink"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LoginComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, LoginComponent_mat_card_2_Template, 21, 4, "mat-card", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__.LoadingSpinnerComponent],
  styles: [".cardsContainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: whitesmoke;\n}\n.cardsContainer[_ngcontent-%COMP%]   .logInCard[_ngcontent-%COMP%] {\n  width: 300px;\n  padding: 20px;\n}\n.cardsContainer[_ngcontent-%COMP%]   .logInCard[_ngcontent-%COMP%]   .titleLogIn[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.cardsContainer[_ngcontent-%COMP%]   .logInCard[_ngcontent-%COMP%]   .inputLogIn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.cardsContainer[_ngcontent-%COMP%]   .logInCard[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.cardsContainer[_ngcontent-%COMP%]   .logInCard[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   .logIn[_ngcontent-%COMP%] {\n  width: 100%;\n  color: whitesmoke;\n  background-color: #34495e;\n}\n.cardsContainer[_ngcontent-%COMP%]   .logInCard[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   .logIn[_ngcontent-%COMP%]:hover {\n  background-color: #2c3e50;\n}\n.cardsContainer[_ngcontent-%COMP%]   .logInCard[_ngcontent-%COMP%]   .registerText[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n  font-size: 14px;\n}\n.cardsContainer[_ngcontent-%COMP%]   .logInCard[_ngcontent-%COMP%]   .registerText[_ngcontent-%COMP%]   .registerLink[_ngcontent-%COMP%] {\n  color: #34495e;\n  text-decoration: none;\n  font-weight: bold;\n  cursor: pointer; \n\n}\n.cardsContainer[_ngcontent-%COMP%]   .logInCard[_ngcontent-%COMP%]   .registerText[_ngcontent-%COMP%]   .registerLink[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n@media (max-width: 400px) {\n  .logInCard[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFDSjtBQUNJO0VBQ0Usa0JBQUE7QUFDTjtBQUVJO0VBQ0UsV0FBQTtBQUFOO0FBR0k7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFETjtBQUdNO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFEUjtBQUVRO0VBQ0UseUJBQUE7QUFBVjtBQU1JO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFKTjtBQU1NO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBLEVBQUEsaURBQUE7QUFKUjtBQUtRO0VBQ0UsMEJBQUE7QUFIVjs7QUFXQTtFQUNFO0lBQ0UsVUFBQTtFQVJGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHNDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDsgLy8gRnVsbCB2aWV3cG9ydCBoZWlnaHRcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcblxuICAubG9nSW5DYXJkIHtcbiAgICB3aWR0aDogMzAwcHg7IC8vIEFkanVzdCBhcyBuZWNlc3NhcnlcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgLnRpdGxlTG9nSW4ge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5pbnB1dExvZ0luIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIG1hdC1jYXJkLWFjdGlvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAubG9nSW4ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDQ5NWU7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7IC8vIFNsaWdodGx5IGRhcmtlciBvbiBob3ZlclxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3R5bGluZyBmb3IgdGhlIHJlZ2lzdHJhdGlvbiB0ZXh0IGFuZCBsaW5rXG4gICAgLnJlZ2lzdGVyVGV4dCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICAucmVnaXN0ZXJMaW5rIHtcbiAgICAgICAgY29sb3I6ICMzNDQ5NWU7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgLyogQ2FtYmlhIGVsIGN1cnNvciBhIHBvaW50ZXIgYWwgcGFzYXIgZWwgbW91c2UgKi9cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBhZGp1c3RtZW50c1xuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5sb2dJbkNhcmQge1xuICAgIHdpZHRoOiA5MCU7IC8vIEZvciBzbWFsbGVyIHNjcmVlbnNcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3544:
/*!************************************************************!*\
  !*** ./src/app/auth/components/signup/signup.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignupComponent: () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var src_app_shared_components_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/ok-dialog/ok-dialog.component */ 79);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 4567);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _shared_validators_validator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/validators/validator.service */ 8379);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/loading-spinner/loading-spinner.component */ 5860);
var _class;















function SignupComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "shared-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["/auth/login"];
};
function SignupComponent_mat_card_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card", 3)(1, "mat-card-title", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-card-content")(4, "div", 5)(5, "mat-form-field", 6)(6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-form-field", 6)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-form-field", 6)(14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-form-field", 6)(18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function SignupComponent_mat_card_2_Template_input_keyup_enter_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.signUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-card-actions")(22, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SignupComponent_mat_card_2_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.signUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Signup ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 12)(25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Already have an account? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Log in here");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.signupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.disableBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c0));
  }
}
class SignupComponent {
  constructor(fb, authService, dialog, validatorService, router) {
    this.fb = fb;
    this.authService = authService;
    this.dialog = dialog;
    this.validatorService = validatorService;
    this.router = router;
    this.disableBtn = false;
    this.isLoading = false;
    this.signupForm = this.fb.group({
      firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(this.validatorService.emailPattern)]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6)]]
    });
  }
  signUp() {
    if (!this.signupForm.valid) {
      this.signupForm.markAllAsTouched();
      return;
    }
    this.disableBtn = true;
    this.authService.signup(this.signupForm.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(({
      error
    }) => {
      const dialogRef = this.dialog.open(src_app_shared_components_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_0__.OkDialogComponent, {
        data: {
          title: "Failed",
          message: error.message
        }
      });
      dialogRef.afterClosed().subscribe();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(error);
    })).subscribe(() => {
      this.disableBtn = false;
      this.router.navigateByUrl('/home');
    });
  }
}
_class = SignupComponent;
_class.ɵfac = function SignupComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_validators_validator_service__WEBPACK_IMPORTED_MODULE_2__.ValidatorsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["auth-signup-page"]],
  decls: 3,
  vars: 2,
  consts: [[1, "cardsContainer"], [4, "ngIf"], ["class", "signUpCard", 4, "ngIf"], [1, "signUpCard"], [1, "title"], [3, "formGroup"], ["appearance", "fill", 1, "input"], ["matInput", "", "placeholder", "John", "formControlName", "firstName"], ["matInput", "", "placeholder", "Doe", "formControlName", "lastName"], ["matInput", "", "placeholder", "user@domain.com", "formControlName", "email"], ["type", "password", "matInput", "", "formControlName", "password", 3, "keyup.enter"], ["mat-raised-button", "", "type", "submit", 1, "signUp", 3, "disabled", "click"], [1, "loginRedirect"], [1, "loginLink", 3, "routerLink"]],
  template: function SignupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SignupComponent_div_1_Template, 2, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SignupComponent_mat_card_2_Template, 29, 4, "mat-card", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__.LoadingSpinnerComponent],
  styles: [".cardsContainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: whitesmoke;\n}\n.cardsContainer[_ngcontent-%COMP%]   .signUpCard[_ngcontent-%COMP%] {\n  width: 300px;\n  padding: 20px;\n}\n.cardsContainer[_ngcontent-%COMP%]   .signUpCard[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.cardsContainer[_ngcontent-%COMP%]   .signUpCard[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.cardsContainer[_ngcontent-%COMP%]   .signUpCard[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.cardsContainer[_ngcontent-%COMP%]   .signUpCard[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   .signUp[_ngcontent-%COMP%] {\n  width: 100%;\n  color: whitesmoke;\n  background-color: #34495e;\n}\n.cardsContainer[_ngcontent-%COMP%]   .signUpCard[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   .signUp[_ngcontent-%COMP%]:hover {\n  background-color: #2c3e50;\n}\n.cardsContainer[_ngcontent-%COMP%]   .signUpCard[_ngcontent-%COMP%]   .loginRedirect[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n  font-size: 14px;\n}\n.cardsContainer[_ngcontent-%COMP%]   .signUpCard[_ngcontent-%COMP%]   .loginRedirect[_ngcontent-%COMP%]   .loginLink[_ngcontent-%COMP%] {\n  color: #34495e;\n  text-decoration: none;\n  font-weight: bold;\n  cursor: pointer; \n\n}\n.cardsContainer[_ngcontent-%COMP%]   .signUpCard[_ngcontent-%COMP%]   .loginRedirect[_ngcontent-%COMP%]   .loginLink[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n@media (max-width: 400px) {\n  .signUpCard[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQ0k7RUFDRSxrQkFBQTtBQUNOO0FBRUk7RUFDRSxXQUFBO0FBQU47QUFHSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUROO0FBR007RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQURSO0FBRVE7RUFDRSx5QkFBQTtBQUFWO0FBS0k7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUhOO0FBS007RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUEsRUFBQSxpREFBQTtBQUhSO0FBSVE7RUFDRSwwQkFBQTtBQUZWOztBQVVBO0VBQ0U7SUFDRSxVQUFBO0VBUEY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkc0NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoOyAvLyBGdWxsIHZpZXdwb3J0IGhlaWdodFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuXG4gIC5zaWduVXBDYXJkIHtcbiAgICB3aWR0aDogMzAwcHg7IC8vIEFkanVzdCBhcyBuZWNlc3NhcnlcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgLnRpdGxlIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuaW5wdXQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgbWF0LWNhcmQtYWN0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgIC5zaWduVXAge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDQ5NWU7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubG9naW5SZWRpcmVjdCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICAubG9naW5MaW5rIHtcbiAgICAgICAgY29sb3I6ICMzNDQ5NWU7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgLyogQ2FtYmlhIGVsIGN1cnNvciBhIHBvaW50ZXIgYWwgcGFzYXIgZWwgbW91c2UgKi9cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBhZGp1c3RtZW50c1xuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5zaWduVXBDYXJkIHtcbiAgICB3aWR0aDogOTAlOyAvLyBGb3Igc21hbGxlciBzY3JlZW5zXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 5931:
/*!*********************************************************************!*\
  !*** ./src/app/staff/components/list-staff/list-staff.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListStaffComponent: () => (/* binding */ ListStaffComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_staff_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/staff.service */ 6971);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;




class ListStaffComponent {
  constructor(staffService) {
    this.staffService = staffService;
    this.staff = [];
  }
  ngOnInit() {
    this.staffService.getALl().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(staff => this.staff = staff)).subscribe();
  }
}
_class = ListStaffComponent;
_class.ɵfac = function ListStaffComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_staff_service__WEBPACK_IMPORTED_MODULE_0__.StaffService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["list-staff"]],
  decls: 5,
  vars: 3,
  template: function ListStaffComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "list-staff works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "json");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 1, ctx.staff));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.JsonPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6971:
/*!*************************************************!*\
  !*** ./src/app/staff/services/staff.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StaffService: () => (/* binding */ StaffService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_env_environment_dev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/env/environment.dev */ 7825);
/* harmony import */ var src_app_shared_components_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/ok-dialog/ok-dialog.component */ 79);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/services/auth.service */ 4567);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
var _class;








class StaffService {
  constructor(http, authService, dialog) {
    this.http = http;
    this.authService = authService;
    this.dialog = dialog;
    this.baseUrl = src_env_environment_dev__WEBPACK_IMPORTED_MODULE_0__.enviroments.baseURL;
    this.bearerToken = this.authService.getBearerToken();
    this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('authorization', this.bearerToken);
  }
  getALl(currentPage = 1, pageSize = 20) {
    const url = `${this.baseUrl}/restaurantStaff?CurrentPage=${currentPage}&PageSize=${pageSize}`;
    return this.http.get(url, {
      headers: this.headers
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(({
      error
    }) => {
      this.dialog.open(src_app_shared_components_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_1__.OkDialogComponent, {
        data: {
          title: "Failed",
          message: `${error.message ?? "Something happend!!"}`
        }
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)();
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(res => res.data));
  }
  getById(uid) {
    const url = `${this.baseUrl}/restaurantStaff/${uid}`;
    return this.http.get(url, {
      headers: this.headers
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(({
      error
    }) => {
      this.dialog.open(src_app_shared_components_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_1__.OkDialogComponent, {
        data: {
          title: "Failed",
          message: `${error.message ?? "Something happend!!"}`
        }
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)();
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(res => res.data[0]));
  }
  //public endpoint
  create(model) {
    const url = `${this.baseUrl}/restaurantStaff`;
    return this.http.post(url, model, {
      headers: this.headers
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(({
      error
    }) => {
      this.dialog.open(src_app_shared_components_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_1__.OkDialogComponent, {
        data: {
          title: "Failed",
          message: `${error.message ?? "Something happend!!"}`
        }
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)();
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(res => res.data[0]));
  }
  delete(uid) {
    const url = `${this.baseUrl}/restaurantStaff/${uid}`;
    return this.http.delete(url, {
      headers: this.headers
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(({
      error
    }) => {
      this.dialog.open(src_app_shared_components_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_1__.OkDialogComponent, {
        data: {
          title: "Failed",
          message: `${error.message ?? "Something happend!!"}`
        }
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)();
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(() => true));
  }
}
_class = StaffService;
_class.ɵfac = function StaffService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4115:
/*!***********************************************!*\
  !*** ./src/app/staff/staff-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StaffRoutingModule: () => (/* binding */ StaffRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_list_staff_list_staff_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/list-staff/list-staff.component */ 5931);
/* harmony import */ var _shared_layout_layout_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/layout/layout-page.component */ 1763);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;





const routes = [{
  path: '',
  component: _shared_layout_layout_page_component__WEBPACK_IMPORTED_MODULE_1__.LayoutPageComponent,
  children: [{
    path: '',
    component: _components_list_staff_list_staff_component__WEBPACK_IMPORTED_MODULE_0__.ListStaffComponent
  }, {
    path: '**',
    redirectTo: '/'
  }]
}];
class StaffRoutingModule {}
_class = StaffRoutingModule;
_class.ɵfac = function StaffRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](StaffRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 9196:
/*!***************************************!*\
  !*** ./src/app/staff/staff.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StaffModule: () => (/* binding */ StaffModule)
/* harmony export */ });
/* harmony import */ var _staff_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staff-routing.module */ 4115);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 6208);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material/material.module */ 6889);
/* harmony import */ var _components_list_staff_list_staff_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/list-staff/list-staff.component */ 5931);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;






class StaffModule {}
_class = StaffModule;
_class.ɵfac = function StaffModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _staff_routing_module__WEBPACK_IMPORTED_MODULE_0__.StaffRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](StaffModule, {
    declarations: [_components_list_staff_list_staff_component__WEBPACK_IMPORTED_MODULE_3__.ListStaffComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _staff_routing_module__WEBPACK_IMPORTED_MODULE_0__.StaffRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_auth_auth_module_ts.js.map