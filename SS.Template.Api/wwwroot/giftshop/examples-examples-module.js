(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["examples-examples-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/example-edit/example-edit.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/example-edit/example-edit.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"py-md-3\">\n  <app-panel [loading]=\"loading\">\n    <form (ngSubmit)=\"submit()\" [formGroup]=\"form\" autocomplete=\"off\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"row form-group\">\n            <label for=\"name\" class=\"col-md-4 col-form-label required\">{{\n              'examples.NAME' | translate\n            }}</label>\n            <div class=\"col-md-8\">\n              <input\n                class=\"form-control\"\n                id=\"name\"\n                type=\"text\"\n                formControlName=\"name\"\n              />\n              <span\n                class=\"messages\"\n                *ngIf=\"submitted &amp;&amp; form.controls.name.invalid\"\n              >\n                <p\n                  *ngIf=\"form.controls.name.errors.required\"\n                  class=\"text-danger error\"\n                >\n                  {{ 'validations.REQUIRED' | translate }}\n                </p>\n                <p\n                  *ngIf=\"form.controls.name.errors.maxlength\"\n                  class=\"text-danger error\"\n                >\n                  {{\n                    'validations.MAX_LENGTH'\n                      | translate\n                        : {\n                            requiredLength:\n                              form.controls.name.errors.maxlength\n                                .requiredLength,\n                            actualLength:\n                              form.controls.name.errors.maxlength.actualLength\n                          }\n                  }}\n                </p>\n              </span>\n            </div>\n          </div>\n\n          <div class=\"row form-group\">\n            <label for=\"email\" class=\"col-md-4 col-form-label required\">{{\n              'examples.EMAIL' | translate\n            }}</label>\n            <div class=\"col-md-8\">\n              <input\n                class=\"form-control\"\n                id=\"email\"\n                type=\"email\"\n                formControlName=\"email\"\n              />\n              <span\n                class=\"messages\"\n                *ngIf=\"submitted &amp;&amp; form.controls.email.invalid\"\n              >\n                <p\n                  *ngIf=\"form.controls.email.errors.required\"\n                  class=\"text-danger error\"\n                >\n                  {{ 'validations.REQUIRED' | translate }}\n                </p>\n                <p\n                  *ngIf=\"form.controls.email.errors.email\"\n                  class=\"text-danger error\"\n                >\n                  {{ 'validations.INVALID_EMAIL' | translate }}\n                </p>\n                <p\n                  *ngIf=\"form.controls.email.errors.maxlength\"\n                  class=\"text-danger error\"\n                >\n                  {{\n                    'validations.MAX_LENGTH'\n                      | translate\n                        : {\n                            requiredLength:\n                              form.controls.email.errors.maxlength\n                                .requiredLength,\n                            actualLength:\n                              form.controls.email.errors.maxlength.actualLength\n                          }\n                  }}\n                </p>\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row form-group\">\n        <div class=\"col text-right form-actions\">\n          <button type=\"submit\" class=\"btn btn-primary\">\n            {{ 'app.SAVE' | translate }}\n          </button>\n          <a [routerLink]=\"['../../']\" class=\"btn btn-danger\">{{\n            'app.CANCEL' | translate\n          }}</a>\n        </div>\n      </div>\n    </form>\n  </app-panel>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/example-list/example-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/example-list/example-list.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"py-md-3\">\n  <a class=\"btn btn-primary btn-lg\" [routerLink]=\"['./new']\">\n    {{ 'app.NEW' | translate }}\n  </a>\n</div>\n<app-panel [loading]=\"loading\">\n  <div class=\"table-responsive\">\n    <table class=\"table table-striped table-bordered\" appTablesort (sort)=\"sort($event)\">\n      <thead>\n        <tr>\n          <th appTablesortCol=\"name\">{{ 'examples.NAME' | translate }}</th>\n          <th appTablesortCol=\"email\">{{ 'examples.EMAIL' | translate }}</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of page?.items\">\n          <td>{{ item.name }}</td>\n          <td>{{ item.email }}</td>\n          <td class=\"table-actions\">\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"delete(item)\">\n              <i class=\"far fa-trash-alt\"></i>\n              {{ 'app.REMOVE' | translate }}\n            </button>\n            <a [routerLink]=\"['./', item.id, 'edit']\" class=\"btn btn-info\">\n              <i class=\"fas fa-pencil-alt\"></i>\n              {{ 'app.EDIT' | translate }}\n            </a>\n          </td>\n        </tr>\n      </tbody>\n      <tfoot>\n        <tr>\n          <td colspan=\"6\">\n            <app-pagination [page]=\"page\" (pageChange)=\"getPage($event)\"></app-pagination>\n          </td>\n        </tr>\n      </tfoot>\n    </table>\n  </div>\n</app-panel>\n");

/***/ }),

/***/ "./src/app/common/component-base.ts":
/*!******************************************!*\
  !*** ./src/app/common/component-base.ts ***!
  \******************************************/
/*! exports provided: ComponentBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentBase", function() { return ComponentBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _requestCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requestCounter */ "./src/app/common/requestCounter.ts");

// app

var editMode = 'edit';
var addMode = 'add';
var ComponentBase = /** @class */ (function () {
    function ComponentBase(counter) {
        if (counter === void 0) { counter = null; }
        this._counter = counter || new _requestCounter__WEBPACK_IMPORTED_MODULE_1__["RequestCounter"]();
        this._ownsCounter = !counter;
    }
    Object.defineProperty(ComponentBase.prototype, "editMode", {
        get: function () {
            return this._mode === editMode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentBase.prototype, "addMode", {
        get: function () {
            return this._mode === addMode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentBase.prototype, "loading", {
        get: function () {
            return this._counter.loading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentBase.prototype, "loadingObservable", {
        get: function () {
            return this._counter.loadingObservable;
        },
        enumerable: true,
        configurable: true
    });
    ComponentBase.prototype.ngOnDestroy = function () {
        if (this._ownsCounter) {
            this._counter.ngOnDestroy();
        }
    };
    ComponentBase.prototype.registerRequest = function (observable) {
        return this._counter.registerRequest(observable);
    };
    ComponentBase.prototype.wrap = function (observable) {
        return this._counter.wrap(observable);
    };
    ComponentBase.prototype.setEditMode = function () {
        this._mode = editMode;
    };
    ComponentBase.prototype.setAddMode = function () {
        this._mode = addMode;
    };
    return ComponentBase;
}());



/***/ }),

/***/ "./src/app/common/requestCounter.ts":
/*!******************************************!*\
  !*** ./src/app/common/requestCounter.ts ***!
  \******************************************/
/*! exports provided: RequestCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestCounter", function() { return RequestCounter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

// Angular



// libs
var RequestAction;
(function (RequestAction) {
    RequestAction[RequestAction["Increase"] = 1] = "Increase";
    RequestAction[RequestAction["Decrease"] = -1] = "Decrease";
})(RequestAction || (RequestAction = {}));
var RequestCounter = /** @class */ (function () {
    function RequestCounter() {
        var _this = this;
        this._ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._requestsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this._requestCount = 0;
        this._requestsSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (delta) {
            _this._requestCount += delta;
            if (_this._requestCount < 0) {
                throw new Error('Request count should not reach negative.');
            }
            return _this._requestCount > 0;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()).subscribe(function (value) {
            setTimeout(function () {
                _this._loadingSubject.next(value);
            });
        });
    }
    Object.defineProperty(RequestCounter.prototype, "isDestroyed", {
        get: function () {
            return this._ngUnsubscribe === null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestCounter.prototype, "loading", {
        get: function () {
            return this._loadingSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestCounter.prototype, "loadingObservable", {
        get: function () {
            return this._loadingSubject;
        },
        enumerable: true,
        configurable: true
    });
    RequestCounter.prototype.registerRequest = function (observable) {
        var _this = this;
        if (this.isDestroyed) {
            throw new Error('Instance is destroyed');
        }
        this.setRequestCount(RequestAction.Increase);
        try {
            return observable
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
                _this.setRequestCount(RequestAction.Decrease);
            }));
        }
        catch (_a) {
            this.setRequestCount(RequestAction.Decrease);
        }
    };
    RequestCounter.prototype.wrap = function (observable) {
        return observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._ngUnsubscribe));
    };
    RequestCounter.prototype.ngOnDestroy = function () {
        if (this.isDestroyed) {
            return;
        }
        this._ngUnsubscribe.next();
        this._ngUnsubscribe.complete();
        this._ngUnsubscribe = null;
        this._requestsSubject.complete();
        this._loadingSubject.complete();
        this._requestCount = 0;
    };
    RequestCounter.prototype.setRequestCount = function (delta) {
        this._requestsSubject.next(delta);
    };
    RequestCounter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RequestCounter);
    return RequestCounter;
}());



/***/ }),

/***/ "./src/app/examples/example-edit/example-edit.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/examples/example-edit/example-edit.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGVzL2V4YW1wbGUtZWRpdC9leGFtcGxlLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/examples/example-edit/example-edit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/examples/example-edit/example-edit.component.ts ***!
  \*****************************************************************/
/*! exports provided: ExampleEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleEditComponent", function() { return ExampleEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_common_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/component-base */ "./src/app/common/component-base.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_examples_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/examples.service */ "./src/app/examples/services/examples.service.ts");
/* harmony import */ var src_app_common_app_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/app-validators */ "./src/app/common/app-validators.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_services_error_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/error-handler.service */ "./src/app/core/services/error-handler.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");









var ExampleEditComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExampleEditComponent, _super);
    function ExampleEditComponent(_examplesService, _route, _router, _errorHandler, _notificationService, fb) {
        var _this = _super.call(this) || this;
        _this._examplesService = _examplesService;
        _this._route = _route;
        _this._router = _router;
        _this._errorHandler = _errorHandler;
        _this._notificationService = _notificationService;
        _this.fb = fb;
        _this.submitted = false;
        _this.form = fb.group({
            email: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50), src_app_common_app_validators__WEBPACK_IMPORTED_MODULE_5__["AppValidators"].email],
            ],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]],
        });
        return _this;
    }
    Object.defineProperty(ExampleEditComponent.prototype, "haveChanges", {
        get: function () {
            return this.form.dirty;
        },
        enumerable: true,
        configurable: true
    });
    ExampleEditComponent.prototype.ngOnInit = function () {
        this.exampleId = this._route.snapshot.paramMap.get('id');
        if (this.exampleId) {
            this.setEditMode();
            this.get(this.exampleId);
        }
        else {
            this.setAddMode();
        }
    };
    ExampleEditComponent.prototype.submit = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        var model = this.form.getRawValue();
        if (this.exampleId) {
            this.registerRequest(this._examplesService.update(this.exampleId, model)).subscribe(function () {
                _this.form.markAsPristine();
                _this.handleSuccess();
            }, function (errorResponse) {
                _this._errorHandler.handle(errorResponse);
            });
        }
        else {
            this.registerRequest(this._examplesService.save(model)).subscribe(function () {
                _this.form.markAsPristine();
                _this.handleSuccess();
            }, function (errorResponse) {
                _this._errorHandler.handle(errorResponse);
            });
        }
    };
    ExampleEditComponent.prototype.get = function (exampleId) {
        var _this = this;
        this.registerRequest(this._examplesService.get(exampleId)).subscribe({
            next: function (queryResult) { return _this.form.patchValue(queryResult); },
            error: function (errorResponse) { return _this._errorHandler.handle(errorResponse); },
        });
    };
    ExampleEditComponent.prototype.back = function () {
        this._router.navigate(['../'], { relativeTo: this._route });
    };
    ExampleEditComponent.prototype.handleSuccess = function () {
        this._notificationService.success({ key: 'app.SAVE_SUCCESS' });
        this.back();
    };
    ExampleEditComponent.ctorParameters = function () { return [
        { type: _services_examples_service__WEBPACK_IMPORTED_MODULE_4__["ExamplesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: src_app_core_services_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["ErrorHandlerService"] },
        { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    ExampleEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-example-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./example-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/example-edit/example-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./example-edit.component.scss */ "./src/app/examples/example-edit/example-edit.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_examples_service__WEBPACK_IMPORTED_MODULE_4__["ExamplesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_core_services_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["ErrorHandlerService"],
            src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ExampleEditComponent);
    return ExampleEditComponent;
}(src_app_common_component_base__WEBPACK_IMPORTED_MODULE_2__["ComponentBase"]));



/***/ }),

/***/ "./src/app/examples/example-list/example-list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/examples/example-list/example-list.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGVzL2V4YW1wbGUtbGlzdC9leGFtcGxlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/examples/example-list/example-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/examples/example-list/example-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ExampleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleListComponent", function() { return ExampleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/component-base */ "./src/app/common/component-base.ts");
/* harmony import */ var _services_examples_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/examples.service */ "./src/app/examples/services/examples.service.ts");
/* harmony import */ var _core_services_message_box_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/message-box.service */ "./src/app/core/services/message-box.service.ts");
/* harmony import */ var _core_services_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/error-handler.service */ "./src/app/core/services/error-handler.service.ts");






var ExampleListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExampleListComponent, _super);
    function ExampleListComponent(_examplesService, _messageBox, _errorHandler) {
        var _this = _super.call(this) || this;
        _this._examplesService = _examplesService;
        _this._messageBox = _messageBox;
        _this._errorHandler = _errorHandler;
        _this._paginatedRequest = {};
        return _this;
    }
    ExampleListComponent.prototype.ngOnInit = function () {
        this.getPage(1);
    };
    ExampleListComponent.prototype.getPage = function (page) {
        var _this = this;
        this._paginatedRequest.page = page;
        this.registerRequest(this._examplesService.getPage(this._paginatedRequest)).subscribe(function (response) {
            _this.page = response;
        });
    };
    ExampleListComponent.prototype.sort = function (value) {
        this._paginatedRequest.orderBy = value;
        this.getPage(this._paginatedRequest.page);
    };
    ExampleListComponent.prototype.delete = function (example) {
        var _this = this;
        this._messageBox
            .confirm({ key: 'examples.CONFIRM_DELETE', arg: { name: example.name } }, 'examples.DELETE')
            .subscribe(function (result) {
            if (result) {
                _this._examplesService.delete(example.id).subscribe(function () {
                    _this.getPage(1);
                }, function (error) { return _this._errorHandler.handle(error); });
            }
        });
    };
    ExampleListComponent.ctorParameters = function () { return [
        { type: _services_examples_service__WEBPACK_IMPORTED_MODULE_3__["ExamplesService"] },
        { type: _core_services_message_box_service__WEBPACK_IMPORTED_MODULE_4__["MessageBoxService"] },
        { type: _core_services_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlerService"] }
    ]; };
    ExampleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-example-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./example-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/example-list/example-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./example-list.component.scss */ "./src/app/examples/example-list/example-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_examples_service__WEBPACK_IMPORTED_MODULE_3__["ExamplesService"],
            _core_services_message_box_service__WEBPACK_IMPORTED_MODULE_4__["MessageBoxService"],
            _core_services_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlerService"]])
    ], ExampleListComponent);
    return ExampleListComponent;
}(_common_component_base__WEBPACK_IMPORTED_MODULE_2__["ComponentBase"]));



/***/ }),

/***/ "./src/app/examples/examples-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/examples/examples-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ExamplesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesRoutingModule", function() { return ExamplesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _example_list_example_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./example-list/example-list.component */ "./src/app/examples/example-list/example-list.component.ts");
/* harmony import */ var _example_edit_example_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./example-edit/example-edit.component */ "./src/app/examples/example-edit/example-edit.component.ts");





var routes = [
    {
        path: '',
        component: _example_list_example_list_component__WEBPACK_IMPORTED_MODULE_3__["ExampleListComponent"],
    },
    {
        path: 'new',
        component: _example_edit_example_edit_component__WEBPACK_IMPORTED_MODULE_4__["ExampleEditComponent"],
    },
    {
        path: ':id/edit',
        component: _example_edit_example_edit_component__WEBPACK_IMPORTED_MODULE_4__["ExampleEditComponent"],
    },
];
var ExamplesRoutingModule = /** @class */ (function () {
    function ExamplesRoutingModule() {
    }
    ExamplesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ExamplesRoutingModule);
    return ExamplesRoutingModule;
}());



/***/ }),

/***/ "./src/app/examples/examples.module.ts":
/*!*********************************************!*\
  !*** ./src/app/examples/examples.module.ts ***!
  \*********************************************/
/*! exports provided: ExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesModule", function() { return ExamplesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _examples_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples-routing.module */ "./src/app/examples/examples-routing.module.ts");
/* harmony import */ var _example_list_example_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./example-list/example-list.component */ "./src/app/examples/example-list/example-list.component.ts");
/* harmony import */ var _services_examples_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/examples.service */ "./src/app/examples/services/examples.service.ts");
/* harmony import */ var _example_edit_example_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./example-edit/example-edit.component */ "./src/app/examples/example-edit/example-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");









var ExamplesModule = /** @class */ (function () {
    function ExamplesModule() {
    }
    ExamplesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_example_list_example_list_component__WEBPACK_IMPORTED_MODULE_4__["ExampleListComponent"], _example_edit_example_edit_component__WEBPACK_IMPORTED_MODULE_6__["ExampleEditComponent"]],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                _examples_routing_module__WEBPACK_IMPORTED_MODULE_3__["ExamplesRoutingModule"],
            ],
            providers: [_services_examples_service__WEBPACK_IMPORTED_MODULE_5__["ExamplesService"]],
            entryComponents: [],
        })
    ], ExamplesModule);
    return ExamplesModule;
}());



/***/ }),

/***/ "./src/app/examples/services/examples.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/examples/services/examples.service.ts ***!
  \*******************************************************/
/*! exports provided: ExamplesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesService", function() { return ExamplesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_api_url_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/api-url.token */ "./src/app/core/api-url.token.ts");
/* harmony import */ var _core_assets_url_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/assets-url.token */ "./src/app/core/assets-url.token.ts");





var ExamplesService = /** @class */ (function () {
    function ExamplesService(_httpClient, apiUrl, assetsUrl) {
        this._httpClient = _httpClient;
        this._url = apiUrl + "/api/examples";
    }
    ExamplesService.prototype.getPage = function (query) {
        var params = query;
        return this._httpClient.get(this._url, { params: params });
    };
    ExamplesService.prototype.get = function (id) {
        return this._httpClient.get(this._url + "/" + id);
    };
    ExamplesService.prototype.save = function (model) {
        return this._httpClient.post(this._url, model);
    };
    ExamplesService.prototype.update = function (id, model) {
        return this._httpClient.put(this._url + "/" + id, model);
    };
    ExamplesService.prototype.delete = function (id) {
        return this._httpClient.delete(this._url + "/" + id);
    };
    ExamplesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_core_api_url_token__WEBPACK_IMPORTED_MODULE_3__["API_URL"],] }] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_core_assets_url_token__WEBPACK_IMPORTED_MODULE_4__["ASSETS_URL"],] }] }
    ]; };
    ExamplesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_core_api_url_token__WEBPACK_IMPORTED_MODULE_3__["API_URL"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_core_assets_url_token__WEBPACK_IMPORTED_MODULE_4__["ASSETS_URL"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, String])
    ], ExamplesService);
    return ExamplesService;
}());



/***/ })

}]);
//# sourceMappingURL=examples-examples-module.js.map