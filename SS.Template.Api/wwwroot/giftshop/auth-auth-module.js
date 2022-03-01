(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngSwitch]=\"currentStage\">\n\n  <div *ngSwitchCase=\"Stage.Login\">\n    <form [formGroup]=\"form\" (ngSubmit)=\"submit()\" autocomplete=\"off\" class=\"form-signin\">\n      <h3 class=\"text-left txt-primary\">\n        {{ 'auth.login.$TITLE' | translate }}\n      </h3>\n      <hr />\n      <div class=\"form-group\">\n        <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\" autofocus />\n        <div class=\"messages\" *ngIf=\"submitted &amp;&amp; form.controls.email.invalid\">\n          <p [hidden]=\"!form.controls.email.errors.required\" class=\"text-danger error\">\n            {{ 'validations.REQUIRED' | translate }}\n          </p>\n          <p [hidden]=\"!form.controls.email.errors.email\" class=\"text-danger error\">\n            {{ 'validations.INVALID_EMAIL' | translate }}\n          </p>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\" />\n        <div class=\"messages\" *ngIf=\"submitted &amp;&amp; form.controls.password.invalid\">\n          <p [hidden]=\"!form.controls.password.errors.required\" class=\"text-danger error\">\n            {{ 'validations.REQUIRED' | translate }}\n          </p>\n        </div>\n      </div>\n      <p class=\"forgot-phone text-right\">\n        <a class=\"text-right f-w-600 text-inverse\" [routerLink]=\"['../forgot-password']\">\n          {{ 'auth.login.FORGOT_PASSWORD' | translate }}\n        </a>\n      </p>\n      <button type=\"submit\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20\"\n        [disabled]=\"submitting\">\n        <i class=\"fa fa-refresh fa-spin fa-spin-1s fa-fw\" [hidden]=\"!submitting\"></i>\n        {{ 'auth.login.LOG_IN' | translate }}\n      </button>\n    </form>\n  </div>\n  <div *ngSwitchCase=\"Stage.Lockout\">\n    <div class=\"text-center\">\n      <i class=\"fa fa-lock fa-5x\"></i>\n      <h4>{{ 'auth.login.LOCKED_OUT' | translate }}</h4>\n    </div>\n    <button type=\"button\" class=\"btn btn-link\" (click)=\"reset()\">{{ 'app.BACK' | translate }}</button>\n  </div>\n  <div *ngSwitchCase=\"Stage.TwoFactor\">\n\n  </div>\n</div>\n<div class=\"text-center\">\n  <app-version></app-version>\n</div>\n");

/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");




var routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/login.service */ "./src/app/auth/services/login.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");






var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"]
            ],
            providers: [_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-signin {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: auto; }\n  .form-signin .checkbox {\n    font-weight: 400; }\n  .form-signin .form-control {\n    position: relative;\n    box-sizing: border-box;\n    height: auto;\n    padding: 10px;\n    font-size: 16px; }\n  .form-signin .form-control:focus {\n    z-index: 2; }\n  .form-signin input[type=\"email\"] {\n    margin-bottom: -1px;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0; }\n  .form-signin input[type=\"password\"] {\n    margin-bottom: 10px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9DOlxcVXNlcnNcXGxhcmlhc1xcRG9jdW1lbnRzXFxHaWZ0U2hvcFxcU1MuVGVtcGxhdGUuQXBpXFx3d3dyb290XFxhbmd1bGFyX3RlbXBsYXRlLW1hc3Rlci9zcmNcXGFwcFxcYXV0aFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWSxFQUFBO0VBSmQ7SUFPSSxnQkFBZ0IsRUFBQTtFQVBwQjtJQVVJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlLEVBQUE7RUFkbkI7SUFpQkksVUFBVSxFQUFBO0VBakJkO0lBb0JJLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsNEJBQTRCLEVBQUE7RUF0QmhDO0lBeUJJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tc2lnbmluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzMwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogYXV0bztcblxuICAuY2hlY2tib3gge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICAgIHotaW5kZXg6IDI7XG4gIH1cbiAgaW5wdXRbdHlwZT1cImVtYWlsXCJdIHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIH1cbiAgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_models_login_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/models/login-status */ "./src/app/common/models/login-status.ts");
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _core_services_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/error-handler.service */ "./src/app/core/services/error-handler.service.ts");
/* harmony import */ var _core_services_redirect_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/services/redirect.service */ "./src/app/core/services/redirect.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/login.service */ "./src/app/auth/services/login.service.ts");
/* harmony import */ var _common_app_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/app-validators */ "./src/app/common/app-validators.ts");










var Stage;
(function (Stage) {
    Stage[Stage["Login"] = 0] = "Login";
    Stage[Stage["Lockout"] = 1] = "Lockout";
    Stage[Stage["TwoFactor"] = 2] = "TwoFactor";
})(Stage || (Stage = {}));
function getLoginStatusMessage(status) {
    return { key: "auth.loginStatusDescription." + status };
}
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, _route, _errorHandler, _notificationService, _redirectService, _loginService) {
        this._route = _route;
        this._errorHandler = _errorHandler;
        this._notificationService = _notificationService;
        this._redirectService = _redirectService;
        this._loginService = _loginService;
        this.submitted = false;
        this.Stage = Stage;
        this.currentStage = Stage.Login;
        this.submitting = false;
        this.form = fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _common_app_validators__WEBPACK_IMPORTED_MODULE_9__["AppValidators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this._redirectService.reset();
    }
    LoginComponent.prototype.submit = function () {
        var _this = this;
        if (this.submitting) {
            return;
        }
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        var model = this.form.value;
        this.submitting = true;
        this._loginService.login(model)
            .subscribe(function (result) {
            switch (result.status) {
                case _common_models_login_status__WEBPACK_IMPORTED_MODULE_4__["LoginStatus"].Success:
                    setTimeout(function () {
                        _this.navigate();
                    }, 10);
                    break;
                case _common_models_login_status__WEBPACK_IMPORTED_MODULE_4__["LoginStatus"].IsLockedOut:
                    _this.currentStage = Stage.Lockout;
                    break;
                case _common_models_login_status__WEBPACK_IMPORTED_MODULE_4__["LoginStatus"].Inactive:
                case _common_models_login_status__WEBPACK_IMPORTED_MODULE_4__["LoginStatus"].NotAllowed:
                case _common_models_login_status__WEBPACK_IMPORTED_MODULE_4__["LoginStatus"].Failed:
                case _common_models_login_status__WEBPACK_IMPORTED_MODULE_4__["LoginStatus"].NotConfirmed:
                    _this._notificationService.error(getLoginStatusMessage(result.status));
                    break;
                case _common_models_login_status__WEBPACK_IMPORTED_MODULE_4__["LoginStatus"].RequiresTwoFactor:
                    // TODO: Process two factor authentication
                    _this.currentStage = Stage.TwoFactor;
                    break;
                default:
                    _this._notificationService.error({ key: 'errors.UNKNOWN' });
                    break;
            }
            _this.submitting = false;
        }, function (error) {
            _this._errorHandler.handle(error);
            _this.submitting = false;
        });
    };
    LoginComponent.prototype.onPasswordUpdated = function () {
        this.navigate();
    };
    LoginComponent.prototype.reset = function () {
        this.submitted = false;
        this.form.reset({});
        this.currentStage = Stage.Login;
    };
    LoginComponent.prototype.navigate = function () {
        this._redirectService.fromRoute(this._route.snapshot);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _core_services_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlerService"] },
        { type: _core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
        { type: _core_services_redirect_service__WEBPACK_IMPORTED_MODULE_7__["RedirectService"] },
        { type: _services_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _core_services_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlerService"],
            _core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"],
            _core_services_redirect_service__WEBPACK_IMPORTED_MODULE_7__["RedirectService"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/services/login.service.ts":
/*!************************************************!*\
  !*** ./src/app/auth/services/login.service.ts ***!
  \************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_api_url_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/api-url.token */ "./src/app/core/api-url.token.ts");




var LoginService = /** @class */ (function () {
    function LoginService(_httpClient, apiUrl) {
        this._httpClient = _httpClient;
        this._url = apiUrl + "/api/account/";
    }
    LoginService.prototype.login = function (model) {
        return this._httpClient.post(this._url + "login", model, { withCredentials: true });
    };
    LoginService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_core_api_url_token__WEBPACK_IMPORTED_MODULE_3__["API_URL"],] }] }
    ]; };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_core_api_url_token__WEBPACK_IMPORTED_MODULE_3__["API_URL"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/common/models/login-status.ts":
/*!***********************************************!*\
  !*** ./src/app/common/models/login-status.ts ***!
  \***********************************************/
/*! exports provided: LoginStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginStatus", function() { return LoginStatus; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var LoginStatus;
(function (LoginStatus) {
    LoginStatus[LoginStatus["Failed"] = 0] = "Failed";
    LoginStatus[LoginStatus["Inactive"] = 1] = "Inactive";
    LoginStatus[LoginStatus["NotConfirmed"] = 2] = "NotConfirmed";
    LoginStatus[LoginStatus["RequiresTwoFactor"] = 3] = "RequiresTwoFactor";
    LoginStatus[LoginStatus["IsLockedOut"] = 4] = "IsLockedOut";
    LoginStatus[LoginStatus["PasswordExpired"] = 5] = "PasswordExpired";
    LoginStatus[LoginStatus["Success"] = 200] = "Success";
    LoginStatus[LoginStatus["NotAllowed"] = 401] = "NotAllowed";
})(LoginStatus || (LoginStatus = {}));


/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map