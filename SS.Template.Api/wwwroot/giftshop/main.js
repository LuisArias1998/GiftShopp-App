(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-panel [loading]=\"loading$ | async\" [fixed]=\"true\" [large]=\"true\">\n    <router-outlet></router-outlet>\n</app-panel>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center mb-5 mt-5\">\n  <ng-container *ngIf=\"knownError; else elseTemplate\">\n    <div>\n      <i class=\"fa fa-plug fa-5x\"></i>\n    </div>\n    <h1>{{ status | enum: 'errors' }}</h1>\n  </ng-container>\n  <ng-template #elseTemplate>\n    <div>\n      <i class=\"fa fa-error fa-5x\"></i>\n    </div>\n    <h1>{{ 'errors.UNKNOWN' | translate }}</h1>\n    <p>{{ status | enum: 'errors' }}</p>\n  </ng-template>\n  <!-- <button type=\"button\" class=\"btn btn-outline\" (click)=\"reload()\">Reload</button> -->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  home works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <nav class=\"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow\">\n    <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" [routerLink]=\"['/']\">{{ 'app.NAME' | translate }}</a>\n    <app-title class=\"navbar-text\"></app-title>\n    <input class=\"form-control form-control-dark w-100\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n    <ul class=\"navbar-nav px-3\">\n        <li class=\"nav-item text-nowrap\">\n            <button class=\"btn btn-link nav-link\" (click)=\"logOut()\">\n        <i class=\"fas fa-sign-out-alt\"></i>\n        {{ 'app.LOG_OUT' | translate }}</button>\n        </li>\n    </ul>\n</nav>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\n            <div class=\"sidebar-sticky\">\n                <ul class=\"nav flex-column\">\n                    <li class=\"nav-item\" *ngFor=\"let item of navItems\">\n                        <a class=\"nav-link\" [routerLink]=\"item.route\" [routerLinkActive]=\"['active']\">\n              {{ item.name | translate }} <span class=\"sr-only\">(current)</span>\n            </a>\n                    </li>\n                </ul>\n                <div class=\"version\">\n                    <app-version></app-version>\n                </div>\n            </div>\n        </nav>\n\n        <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\n            <router-outlet></router-outlet>\n        </main>\n    </div>\n</div> -->\n<!----------NAVBAR----------->\n<div class=\"row\">\n    <div class=\"container-fluid\">\n        <app-navbar [(isLogged)]=\"isLogged\"></app-navbar>\n    </div>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <nav class=\"col-md-2 d-none d-md-block\" style=\"background-color: white;\">\n            <div class=\"sidebar-sticky\">\n                <ul class=\"nav flex-column list-group list-group-flush\">\n                    <li class=\"nav-item list-group-item\">\n                        <a class=\"nav-link\" style=\"font-size: 20px;\" href=\"#\" (click)=\"listAll()\">\n                            <i class=\"fas fa-list-alt\"></i> View all <span class=\"sr-only\">(current)</span>\n                        </a>\n                    </li>\n                    <li class=\"nav-item list-group-item\" *ngFor=\"let c of categoriesList\">\n                        <a class=\"nav-link\" href=\"#\" (click)=\"filterByCategory($event)\">\n                            {{c}} <span class=\"sr-only\">(current)</span>\n                        </a>\n                    </li>\n                </ul>\n                <div class=\"version\">\n                    <app-version></app-version>\n                </div>\n            </div>\n        </nav>\n\n        <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\n            <h3>Home page</h3>\n            <hr>\n            <div class=\"navbar-nav col-md-5 \">\n                <form class=\"d-flex\" (submit)=\"onSearchForProduct()\">\n                    <div class=\"form-group\">\n                        <input class=\"form-control me-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" name=\"search\" #search=\"ngModel\" [(ngModel)]=\"searchBar\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <button class=\"btn btn-outline-success ml-2\" type=\"submit\">Search</button>\n                    </div>\n                </form>\n                <h3 class=\"mt-5 animate__animated animate__headShake\" *ngIf=\"isProductsEmpty\">Cannot find any product <i class=\"fas fa-sad-tear\"></i>\n                    <hr>\n                </h3>\n            </div>\n            <div class=\"row mb-5\">\n                <div class=\"col-lg-3 d-flex align-items-stretch\" *ngFor=\"let c of products\">\n                    <div class=\"card mt-5 animate__animated animate__pulse\" style=\"width: 18rem; border: none;\">\n\n                        <img class=\"card-img-top card-img m-2\" title=\"{{c.productName}}\" src=\"{{c.productImg}}\" style=\"object-fit: cover;\" alt=\"{{c.productName}}\">\n\n\n                        <div class=\"card-block d-flex flex-column\">\n                            <h5 class=\"card-title text-title\">{{c.productName}}</h5>\n                            <p class=\"card-text text-justify text-description\">{{c.productDescription}}</p>\n                            <small class=\"ml-2\" style=\"color: #41a9d0;\"><strong>{{c.unitPrice | currency}}</strong></small>\n                            <a href=\"\" routerLink='/product/{{c.id}}' class=\"btn btn-color-se ml-auto mr-auto mt-3\"><strong>See product</strong></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <router-outlet></router-outlet>\n        </main>\n    </div>\n</div>\n<!------------FOOTER------------>\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/admin/addProduct/addProduct.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/admin/addProduct/addProduct.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"container-fluid\">\r\n        <app-navbaradmin></app-navbaradmin>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-10 ml-auto mt-5\">\r\n            <h3>Add product</h3>\r\n            <hr>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 ml-auto  mt-5\">\r\n            <form (submit)=\"onAddProduct()\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"productName\">Product name</label>\r\n                    <input type=\"text\" class=\"form-control input-style\" name=\"productName\" #productName=\"ngModel\" [(ngModel)]=\"product.productName\" required />\r\n                    <span *ngIf=\"productName.touched && productName.invalid && productName.errors.required\" class=\"text-danger\">Required</span>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"productDescription\">Product description</label>\r\n                    <textarea type=\"password\" rows=\"4\" class=\"form-control input-style\" name=\"productDescription\" #productDescription=\"ngModel\" [(ngModel)]=\"product.productDescription\" required></textarea>\r\n                    <span *ngIf=\"productDescription.touched && productDescription.invalid && productDescription.errors.required\" class=\"text-danger\">Required</span>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-2\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"unitPrice\">Unit price</label>\r\n                            <input type=\"number\" class=\"form-control \" name=\"unitPrice\" #unitPrice=\"ngModel\" [(ngModel)]=\"product.unitPrice\" required />\r\n                            <span *ngIf=\"unitPrice.touched && unitPrice.invalid && unitPrice.errors.required\" class=\"text-danger\">Required</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"category\">Category</label>\r\n                            <input type=\"text\" class=\"form-control \" name=\"category\" #category=\"ngModel\" [(ngModel)]=\"product.category\" required />\r\n                            <span *ngIf=\"category.touched && category.invalid && category.errors.required\" class=\"text-danger\">Required</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"productImg\">Image URL</label>\r\n                    <input type=\"text\" class=\"form-control input-style\" name=\"productImg\" #productImg=\"ngModel\" [(ngModel)]=\"product.productImg\" required />\r\n                    <span *ngIf=\"productImg.touched && productImg.invalid && productImg.errors.required\" class=\"text-danger\">Required</span>\r\n                </div>\r\n                <div class=\"form-group\">\r\n\r\n                    <button type=\"submit\" class=\"btn btn-success btn-style\" value=\"Add product\" [disabled]=\"productName.invalid || productDescription.invalid || unitPrice.invalid || category.invalid || productImg.invalid\">\r\n                        <i class=\"fas fa-plus-circle\"></i> Add product\r\n                    </button>\r\n\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"col-md-2 mr-auto mt-5\">\r\n            <div class=\"card mt-5\" style=\"width: 18rem; border: none;\">\r\n                <img class=\"card-img-top card-img m-2\" *ngIf=\"product.productImg\" src=\"{{product.productImg}}\" style=\"object-fit: cover; border-radius: 20px;\" alt=\"Card image cap\">\r\n                <div class=\"card-block d-flex flex-column\">\r\n                    <h5 class=\"card-title\" *ngIf=\"product.productName\">{{product.productName}}</h5>\r\n                    <p class=\"card-text text-justify\" *ngIf=\"product.productDescription\">{{product.productDescription}}</p>\r\n                    <small class=\"ml-2\" style=\"color: #41a9d0;\" *ngIf=\"product.unitPrice\"><strong>{{product.unitPrice | currency}}</strong></small>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/admin/index/indexAdmin.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/admin/index/indexAdmin.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"container-fluid\">\r\n        <app-navbaradmin></app-navbaradmin>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <nav class=\"col-md-2 d-none d-md-block\" style=\"background-color: white;\">\r\n            <div class=\"sidebar-sticky\">\r\n                <ul class=\"nav flex-column list-group list-group-flush\">\r\n                    <li class=\"nav-item list-group-item\">\r\n                        <a class=\"nav-link\" style=\"font-size: 20px;\" href=\"javascript:void(0);\" (click)=\"listAll()\">\r\n                            <i class=\"fas fa-list-alt\"></i> View all <span class=\"sr-only\">(current)</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item list-group-item\" *ngFor=\"let c of categoriesList\">\r\n                        <a class=\"nav-link\" href=\"javascript:void(0);\" (click)=\"filterByCategory($event)\">\r\n                            {{c}} <span class=\"sr-only\">(current)</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n                <div class=\"version\">\r\n                    <app-version></app-version>\r\n                </div>\r\n            </div>\r\n        </nav>\r\n\r\n        <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\r\n            <h3 class=\"animate__animated animate__fadeIn\">Products</h3>\r\n            <hr>\r\n            <div class=\"navbar-nav col-md-5 \">\r\n                <form class=\"d-flex\" (submit)=\"onSearchForProduct()\">\r\n                    <div class=\"form-group\">\r\n                        <input class=\"form-control me-2\" type=\"search\" placeholder=\"Search\" style=\"width: 500px;\" aria-label=\"Search\" name=\"search\" #search=\"ngModel\" [(ngModel)]=\"searchBar\" />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button class=\"btn btn-outline-success ml-2\" type=\"submit\">Search</button>\r\n                    </div>\r\n                </form>\r\n                <h3 class=\"mt-5\" *ngIf=\"isProductsEmpty\">Cannot find search results <i class=\"fas fa-sad-tear\"></i>\r\n                    <hr>\r\n                </h3>\r\n            </div>\r\n            <div class=\"col-md-2 ml-auto\">\r\n                <button class=\"btn btn-success btn-style-se\" [routerLink]=\"['/addProduct']\"><i class=\"fas fa-plus-circle\"></i> Add product</button>\r\n            </div>\r\n            <div class=\"row mb-5\">\r\n                <div class=\"col-lg-3 d-flex align-items-stretch\" *ngFor=\"let p of products\">\r\n                    <div class=\"card mt-5 animate__animated animate__pulse\" style=\"width: 18rem; border: none;\">\r\n                        <img class=\"card-img-top card-img m-2\" src=\"{{p.productImg}}\" title=\"{{p.productName}}\" width=\"200\" height=\"200\" style=\"object-fit: cover;\" alt=\"{{p.productName}}\">\r\n                        <div class=\"card-block d-flex flex-column\">\r\n                            <h5 class=\"card-title text-title\">{{p.productName}}</h5>\r\n                            <p class=\"card-text text-justify text-description\">{{p.productDescription}}</p>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6 mr-auto m-0\">\r\n                                    <button class=\"btn btn-danger btn-style-se\" (click)=\"onDeleteProduct(p.id)\"> <i class=\"fas fa-trash\"></i> Delete</button>\r\n                                </div>\r\n                                <div class=\"col-md-6 ml-auto m-0\">\r\n                                    <button routerLink='/modifyProduct/{{p.id}}' class=\"btn btn-primary btn-style-se\"><i class=\"fas fa-edit\"></i> Modify</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <router-outlet></router-outlet>\r\n        </main>\r\n    </div>\r\n</div>\r\n<!------------FOOTER------------>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/admin/login/loginAdmin.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/admin/login/loginAdmin.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid container-gradiant\">\r\n    <div class=\"row justify-content-center\">\r\n        <div class=\"col-auto mt-5\">\r\n            <div class=\"card mt-5 card animate__animated animate__bounceIn\" style=\"width:400px; min-height: 400px; border-radius: 10px;\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"row justify-content-center m-0\">\r\n                        <img src=\"../../../../assets/img/logoV3.png\" width=\"200px\" height=\"auto\" alt=\"\">\r\n                    </div>\r\n                    <form (submit)=\"onLogin()\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"username\">Email</label>\r\n                            <input type=\"email\" class=\"form-control\" name=\"username\" #username=\"ngModel\" [(ngModel)]=\"creds.Email\" required />\r\n                            <span *ngIf=\"username.touched && username.invalid && username.errors.required\" class=\"text-danger\">Required</span>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"password\">Password</label>\r\n                            <input type=\"password\" class=\"form-control\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"creds.Password\" required />\r\n                            <span *ngIf=\"password.touched && password.invalid && password.errors.required\" class=\"text-danger\">Required</span>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"row justify-content-center m-0 mt-5\">\r\n                                <input type=\"submit\" [routerLink]=\"['/index']\" class=\"btn btn-grad\" value=\"Login\" [disabled]=\"username.invalid || password.invalid\" />\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/admin/modifyProduct/modifyProduct.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/admin/modifyProduct/modifyProduct.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"container-fluid\">\r\n        <app-navbaradmin></app-navbaradmin>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-10 ml-auto mt-5\">\r\n            <h3>Modify product</h3>\r\n            <hr>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 ml-auto  mt-5\">\r\n            <form (submit)=\"onModifyProduct()\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"productName\">Product name</label>\r\n                    <input type=\"text\" class=\"form-control input-style\" name=\"productName\" #productName=\"ngModel\" [(ngModel)]=\"product.productName\" required />\r\n                    <span *ngIf=\"productName.touched && productName.invalid && productName.errors.required\" class=\"text-danger\">Required</span>\r\n                    <i class=\"fas fa-exclamation-circle\" style=\"color: rgb(255, 210, 11);\" *ngIf=\"productName.untouched\"></i>\r\n                    <i class=\"fas fa-check-circle\" style=\"color: rgb(0, 146, 0);\" *ngIf=\"productName.touched && productName.valid\"></i>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"productDescription\">Product description</label>\r\n                    <textarea type=\"password\" rows=\"4\" class=\"form-control input-style\" name=\"productDescription\" #productDescription=\"ngModel\" [(ngModel)]=\"product.productDescription\" required></textarea>\r\n                    <span *ngIf=\"productDescription.touched && productDescription.invalid && productDescription.errors.required\" class=\"text-danger\">Required</span>\r\n                    <i class=\"fas fa-exclamation-circle\" style=\"color: rgb(255, 210, 11);\" *ngIf=\"productDescription.untouched\"></i>\r\n                    <i class=\"fas fa-check-circle\" style=\"color: rgb(0, 146, 0);\" *ngIf=\"productDescription.touched && productDescription.valid\"></i>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-2\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"unitPrice\">Unit price</label>\r\n                            <input type=\"number\" class=\"form-control \" name=\"unitPrice\" #unitPrice=\"ngModel\" [(ngModel)]=\"product.unitPrice\" required />\r\n                            <span *ngIf=\"unitPrice.touched && unitPrice.invalid && unitPrice.errors.required\" class=\"text-danger\">Required</span>\r\n                            <i class=\"fas fa-exclamation-circle\" style=\"color: rgb(255, 210, 11);\" *ngIf=\"unitPrice.untouched\"></i>\r\n                            <i class=\"fas fa-check-circle\" style=\"color: rgb(0, 146, 0);\" *ngIf=\"unitPrice.touched && unitPrice.valid\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"category\">Category</label>\r\n                            <input type=\"text\" class=\"form-control \" name=\"category\" #category=\"ngModel\" [(ngModel)]=\"product.category\" required />\r\n                            <span *ngIf=\"category.touched && category.invalid && category.errors.required\" class=\"text-danger\">Required</span>\r\n                            <i class=\"fas fa-exclamation-circle\" style=\"color: rgb(255, 210, 11);\" *ngIf=\"category.untouched\"></i>\r\n                            <i class=\"fas fa-check-circle\" style=\"color: rgb(0, 146, 0);\" *ngIf=\"category.touched && category.valid\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"productImg\">Image URL</label>\r\n                    <input type=\"text\" class=\"form-control input-style\" name=\"productImg\" #productImg=\"ngModel\" [(ngModel)]=\"product.productImg\" required />\r\n                    <span *ngIf=\"productImg.touched && productImg.invalid && productImg.errors.required\" class=\"text-danger\">Required</span>\r\n                    <i class=\"fas fa-exclamation-circle\" style=\"color: rgb(255, 210, 11);\" *ngIf=\"productImg.untouched\"></i>\r\n                    <i class=\"fas fa-check-circle\" style=\"color: rgb(0, 146, 0);\" *ngIf=\"productImg.touched && productImg.valid\"></i>\r\n                </div>\r\n                <div class=\"form-group\">\r\n\r\n                    <button type=\"submit\" class=\"btn btn-primary btn-style\" (click)=\"onModifyProduct()\" [disabled]=\"productName.invalid || productDescription.invalid || unitPrice.invalid || category.invalid || productImg.invalid\">\r\n                        <i class=\"fas fa-edit\"></i> Modify product\r\n                    </button>\r\n\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"col-md-2 mr-auto mt-5\">\r\n            <div class=\"card mt-5\" style=\"width: 18rem; border: none;\">\r\n                <img class=\"card-img-top card-img m-2\" *ngIf=\"product.productImg\" src=\"{{product.productImg}}\" style=\"object-fit: cover; border-radius: 20px;\" alt=\"Card image cap\">\r\n                <div class=\"card-block d-flex flex-column\">\r\n                    <h5 class=\"card-title\" *ngIf=\"product.productName\">{{product.productName}}</h5>\r\n                    <p class=\"card-text text-justify\" *ngIf=\"product.productDescription\">{{product.productDescription}}</p>\r\n                    <small class=\"ml-2\" style=\"color: #41a9d0;\" *ngIf=\"product.unitPrice\"><strong>{{product.unitPrice | currency}}</strong></small>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/admin/navbar/navbarAdmin.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/admin/navbar/navbarAdmin.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-body\">\r\n    <div class=\"container-fluid\">\r\n        <a href=\"\" [routerLink]=\"['/index']\"><img class=\"animate__animated animate__bounceInLeft\" src=\"../../assets/img/logoV3.png\" alt=\"\" width=\"auto\" height=\"80\"></a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n            <ul class=\"navbar-nav col-md-2 ml-auto\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [routerLink]=\"['/index']\" aria-current=\"page\" style=\"font-size: 25px;\" href=\"#\"> <i class=\"fas fa-store\" style=\"color: #41a9d0;\"></i> Products</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link \" [routerLink]=\"['/ordersHistory']\" aria-current=\"page\" style=\"font-size: 25px;\" href=\"#\"> <i class=\"fas fa-history\" style=\"color: #41a9d0;\"></i> Orders History</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#\" aria-current=\"page\"  style=\"font-size: 25px;\" (click)=\"onLogOut()\"><p> <i class=\"fas fa-sign-out-alt\" style=\"color: #41a9d0;\"></i> Logout</p></a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/admin/ordersHistory/ordersHistory.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/admin/ordersHistory/ordersHistory.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"container-fluid\">\r\n        <app-navbaradmin></app-navbaradmin>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\r\n            <h3 class=\"mt-5 animate__animated animate__fadeIn\">Orders history</h3>\r\n            <hr>\r\n            <div class=\"navbar-nav col-md-4 \">\r\n                <form class=\"d-flex\">\r\n                    <input class=\"form-control me-2\" type=\"search\" placeholder=\"Search\" style=\"width: 500px;\" aria-label=\"Search\">\r\n                    <button class=\"btn btn-outline-success ml-2\" type=\"submit\">Search</button>\r\n                </form>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <table class=\"table mt-5\">\r\n                        <thead class=\"\" style=\"background-color: #e4c7c9; color:rgb(99, 99, 99)\">\r\n                            <tr>\r\n                                <th class=\"col-2\">#</th>\r\n                                <th class=\"col-3\">Products</th>\r\n                                <th class=\"col-2\">Address</th>\r\n                                <th class=\"col-2\">Email</th>\r\n                                <th class=\"col-2\">Total</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <th class=\"col-2\"></th>\r\n                                <td class=\"col-3\"></td>\r\n                                <td class=\"col-2\"></td>\r\n                                <td class=\"col-2\"></td>\r\n                                <td> </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </main>\r\n    </div>\r\n</div>\r\n<!------------FOOTER------------>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/card/card.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/card/card.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card {{ fullScreenClass }} {{ loadingClass }}\" [@cardClose]=\"closedClass\" [ngClass]=\"cardClass\">\n    <div class=\"card-header\" *ngIf=\"title\">\n        <h5>{{ title | translate }}</h5>\n        <!-- <span *ngIf=\"!classHeader\">{{ headerContent }}</span>\n    <span *ngIf=\"classHeader\">\n      <ng-content select=\".code-header\"></ng-content>\n    </span> -->\n        <!-- <div class=\"card-header-right\">\n      <ul class=\"list-unstyled card-option\">\n        <li *ngIf=\"!isCardToggled\" (click)=\"this.isCardToggled = !this.isCardToggled\">\n          <i class=\"icofont icofont-simple-left\"></i>\n        </li>\n        <li *ngIf=\"isCardToggled\" (click)=\"this.isCardToggled = !this.isCardToggled\">\n          <i class=\"icofont icofont-simple-right\"></i>\n        </li>\n        <li *ngIf=\"isCardToggled\">\n          <i class=\"icofont icofont-maximize {{ fullScreenIcon }} full-card\" (click)=\"toggleFullScreen($event)\"></i>\n        </li>\n        <li *ngIf=\"isCardToggled\">\n          <i class=\"icofont icofont-minus minimize-card\" cardToggleEvent (click)=\"toggle($event)\"></i>\n        </li>\n        <li *ngIf=\"isCardToggled\">\n          <i class=\"icofont icofont-refresh reload-card\" (click)=\"cardRefresh($event)\"></i>\n        </li>\n        <li *ngIf=\"isCardToggled\">\n          <i class=\"icofont icofont-error close-card\" (click)=\"close($event)\"></i>\n        </li>\n      </ul>\n    </div> -->\n    </div>\n\n    <div class=\"card-header\" *ngIf=\"titleTpl &amp;&amp; titleTpl.templateRef\">\n        <ng-template [ngTemplateOutlet]=\"titleTpl?.templateRef\"></ng-template>\n    </div>\n\n    <div [@cardToggle]=\"collapsedClass\">\n        <div class=\"card-block\" [ngClass]=\"blockClass\">\n            <ng-content></ng-content>\n        </div>\n    </div>\n    <div class=\"card-loader\" *ngIf=\"loading\">\n        <i class=\"fa fa-refresh fa-spin fa-spin-1s fa-3x fa-fw\"></i>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/cart/cart.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/cart/cart.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-------------NAVBAR-------------->\r\n<div class=\"row\">\r\n    <div class=\"container-fluid\">\r\n        <app-navbar [(isLogged)]=\"isLogged\"></app-navbar>\r\n    </div>\r\n</div>\r\n<!---------------TABLE-------------->\r\n<div class=\"container-fluid mb-5 mt-5\">\r\n    <div class=\"row justify-content-center m-0 animate__animated animate__fadeIn\">\r\n        <h3 class=\"mt-5\">Cart products</h3>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8 mr-auto ml-auto\">\r\n            <table class=\"table mt-5\">\r\n                <thead class=\"\" style=\"background-color: #d041c1; color:white\">\r\n                    <tr>\r\n                        <th class=\"col-3\"></th>\r\n                        <th class=\"col-3\">Product</th>\r\n                        <th class=\"col-2\">Price</th>\r\n                        <th class=\"col-2\">Quantity</th>\r\n                        <th class=\"col-2\">Subtotal</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let c of cartProducts\">\r\n                        <th class=\"col-3\"><img src=\"{{c.productImg}}\" alt=\"{{c.productName}}\" height=\"50\" width=\"50\"></th>\r\n                        <td class=\"col-3\">{{c.productName}}</td>\r\n                        <td class=\"col-2\">{{c.unitPrice | currency}}</td>\r\n                        <td class=\"col-2\">{{c.quantity}}</td>\r\n                        <td>{{c.quantity * c.unitPrice | currency}} </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    <!---------------TOTAL CARD------------------>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 ml-auto\">\r\n            <div class=\"card mt-5\">\r\n                <div class=\"card-header text-center header-style\">\r\n                    <strong>Total</strong>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <ul class=\"list-group list-group-flush\">\r\n                        <li class=\"list-group-item\"><strong>Subtotal:</strong> {{subtotal | currency}}</li>\r\n                        <li class=\"list-group-item\"><strong>Shipment:</strong>\r\n                            <div class=\"form-check\">\r\n                                <input class=\"form-check-input\" (click)=\"onStandard()\" type=\"radio\" name=\"flexRadioDefault\" id=\"flexRadioDefault1\">\r\n                                <label class=\"form-check-label\" for=\"flexRadioDefault1\">\r\n                                  Standard shipment (2-4 days): {{4.99 | currency}}\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"form-check\">\r\n                                <input class=\"form-check-input\" (click)=\"onExpress()\" type=\"radio\" name=\"flexRadioDefault\" id=\"flexRadioDefault2\" checked>\r\n                                <label class=\"form-check-label\" for=\"flexRadioDefault2\">\r\n                                    Express shipment (1-2 days) {{6.99 | currency}}\r\n                                </label>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"list-group-item\"><strong>Shipment:</strong>\r\n                            <strong>Total:</strong>{{total | currency}}\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!------------------CHECKOUT CARD---------------->\r\n        <div class=\"col-md-4 mr-auto\">\r\n            <app-checkout [(isLogged)]=\"isLogged\" *ngIf=\"this.cartProducts.length>0\"></app-checkout>\r\n            <h3 class=\"mt-5 text-center\" style=\"color: #d041c1;\" *ngIf=\"this.cartProducts.length===0\">Add something to your cart</h3>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-----------------FOOTER------------>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/checkout/checkout.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/checkout/checkout.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mt-5\">\r\n    <div class=\"card-body\">\r\n        <h4 class=\"card-title text-center\">Checkout</h4>\r\n        <form (submit)=\"onCheckout()\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"First Name\" name=\"FirstName\" #FirstName=\"ngModel\" [(ngModel)]=\"creds.FirstName\" required />\r\n                        <span *ngIf=\"FirstName.touched && FirstName.invalid && FirstName.errors.required\" class=\"text-danger\">Required</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" name=\"LastName\" #LastName=\"ngModel\" [(ngModel)]=\"creds.LastName\" required />\r\n                        <span *ngIf=\"LastName.touched && LastName.invalid && LastName.errors.required\" class=\"text-danger\">Required</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Street address\" name=\"calle\" #calle=\"ngModel\" [(ngModel)]=\"creds.street\" required />\r\n                        <span *ngIf=\"calle.touched && calle.invalid && calle.errors.required\" class=\"text-danger\">Required</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"City\" name=\"city\" #city=\"ngModel\" [(ngModel)]=\"creds.city\" required />\r\n                        <span *ngIf=\"city.touched && city.invalid && city.errors.required\" class=\"text-danger\">Required</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Region\" name=\"region\" #region=\"ngModel\" [(ngModel)]=\"creds.region\" required />\r\n                <span *ngIf=\"region.touched && region.invalid && region.errors.required\" class=\"text-danger\">Required</span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"number\" pattern=\"[0-9]{5}\" onKeyPress=\"if(this.value.length==5) return false;\" class=\"form-control\" placeholder=\"ZIP Code\" name=\"zipCode\" #zipCode=\"ngModel\" [(ngModel)]=\"creds.zipCode\" required />\r\n                <span *ngIf=\"zipCode.touched && zipCode.invalid && zipCode.errors.required\" class=\"text-danger\">Required</span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"tel\" pattern=\"[0-9]{10}\" onKeyPress=\"if(this.value.length==10) return true;\" class=\"form-control\" placeholder=\"Telephone\" name=\"telephone\" #telephone=\"ngModel\" maxlength=\"10\" [(ngModel)]=\"creds.telephone\" required />\r\n                <span *ngIf=\"telephone.touched && telephone.invalid && telephone.errors.required\" class=\"text-danger\">Required</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <div class=\"row justify-content-center m-0 mt-5\">\r\n                    <input type=\"submit\" class=\"btn btn-color\" value=\"Checkout\" [disabled]=\"calle.invalid || city.invalid || region.invalid || zipCode.invalid || telephone.invalid\" />\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/datepicker/datepicker.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/datepicker/datepicker.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"input-group datepicker\" [ngClass]=\"{clearable: clearable}\">\n  <input class=\"form-control\" [placeholder]=\"'app.DATE_FORMAT' | translate\" name=\"dateInput\" ngbDatepicker\n    [disabled]=\"disabled\" (focus)=\"onFocus()\" [id]=\"inputId\">\n\n  <div class=\"input-group-append mb-0\">\n    <button type=\"button\" class=\"btn btn-sm btn-outline-primary\" [disabled]=\"disabled\" (click)=\"dateInput.toggle()\">\n      <i class=\"fas fa-calendar-alt\"></i>\n    </button>\n  </div>\n  <button type=\"button\" class=\"btn btn-sm btn-transparent clear-btn\" (click)=\"clear()\">\n    <i class=\"fas fa-times\"></i>\n  </button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/datetimepicker/datetimepicker.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/datetimepicker/datetimepicker.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-datepicker [inputId]=\"inputId\" [minDate]=\"minDate\" [maxDate]=\"maxDate\"></app-datepicker>\n<ngb-timepicker></ngb-timepicker>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/file/file.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/file/file.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"custom-file\">\n  <input #input type=\"file\" class=\"custom-file-input\" [id]=\"id\">\n  <label class=\"custom-file-label\" [for]=\"id\">\n    <span *ngIf=\"filename\">{{ filename }}</span>\n    <span [hidden]=\"filename\">Choose file</span>\n  </label>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"text-center text-white \" style=\"background-color: #e4c7c9;\">\r\n    <!-- Grid container -->\r\n    <div class=\"container \">\r\n        <!-- Section: Social media -->\r\n        <section class=\"mb-4\">\r\n            <!-- Facebook -->\r\n            <a class=\"btn btn-link btn-floating btn-lg text-dark m-1\" href=\"#!\" role=\"button\" data-mdb-ripple-color=\"dark\"><i class=\"fab fa-facebook-f\"></i\r\n        ></a>\r\n\r\n            <!-- Twitter -->\r\n            <a class=\"btn btn-link btn-floating btn-lg text-dark m-1\" href=\"#!\" role=\"button\" data-mdb-ripple-color=\"dark\"><i class=\"fab fa-twitter\"></i\r\n        ></a>\r\n\r\n            <!-- Google -->\r\n            <a class=\"btn btn-link btn-floating btn-lg text-dark m-1\" href=\"#!\" role=\"button\" data-mdb-ripple-color=\"dark\"><i class=\"fab fa-google\"></i\r\n        ></a>\r\n\r\n            <!-- Instagram -->\r\n            <a class=\"btn btn-link btn-floating btn-lg text-dark m-1\" href=\"#!\" role=\"button\" data-mdb-ripple-color=\"dark\"><i class=\"fab fa-instagram\"></i\r\n        ></a>\r\n\r\n            <!-- Linkedin -->\r\n            <a class=\"btn btn-link btn-floating btn-lg text-dark m-1\" href=\"#!\" role=\"button\" data-mdb-ripple-color=\"dark\"><i class=\"fab fa-linkedin\"></i\r\n        ></a>\r\n            <!-- Github -->\r\n            <a class=\"btn btn-link btn-floating btn-lg text-dark m-1\" href=\"#!\" role=\"button\" data-mdb-ripple-color=\"dark\"><i class=\"fab fa-github\"></i\r\n        ></a>\r\n        </section>\r\n        <!-- Section: Social media -->\r\n    </div>\r\n    <!-- Grid container -->\r\n\r\n    <!-- Copyright -->\r\n    <div class=\"text-center text-dark p-3\" style=\"background-color: rgba(0, 0, 0, 0.2);\">\r\n        © 2022 Copyright:\r\n        <a class=\"text-dark\" href=\"#\">GiftShop.com</a>\r\n    </div>\r\n    <!-- Copyright -->\r\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/login/login.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/login/login.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"container-fluid\">\r\n        <nav class=\"navbar navbar-expand-lg navbar-light bg-style\">\r\n            <div class=\"container-fluid\">\r\n                <a href=\"#\"> <img class=\"animate__animated animate__bounceInLeft\" src=\"../../assets/img/logoV3.png\" routerLink=\"/\" alt=\"GiftShop Logo\" width=\"\" height=\"80\"></a>\r\n            </div>\r\n        </nav>\r\n    </div>\r\n</div>\r\n<div class=\"container-fluid img-bg\">\r\n    <div class=\"row justify-content-center\">\r\n        <div class=\"col-auto mt-5 mb-5\">\r\n            <div class=\"card animate__animated animate__bounceIn\" style=\"width:auto; min-height: 400px; border-radius: 10px;\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title text-center \">Login</h4>\r\n                    <form (submit)=\"onLogin()\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"username\">Email</label>\r\n                            <input type=\"email\" class=\"form-control\" name=\"username\" #username=\"ngModel\" [(ngModel)]=\"creds.Email\" required />\r\n                            <span *ngIf=\"username.touched && username.invalid && username.errors.required\" class=\"text-danger\">Required</span>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"password\">Password</label>\r\n                            <input type=\"password\" class=\"form-control\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"creds.Password\" required />\r\n                            <span *ngIf=\"password.touched && password.invalid && password.errors.required\" class=\"text-danger\">Required</span>\r\n                        </div>\r\n                        <label>Dont have an account? <a [routerLink]=\"['/register']\">Register</a> </label>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"row justify-content-center m-0 mt-5\">\r\n                                <input type=\"submit\" class=\"btn btn-color\" value=\"Login\" [disabled]=\"username.invalid || password.invalid\" />\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/navbar/navbar.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/navbar/navbar.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-body\">\r\n    <div class=\"container-fluid\">\r\n        <a href=\"\" routerLink=\"/\"><img class=\"d animate__animated animate__bounceInLeft\" src=\"../../assets/img/logoV3.png\" alt=\"\" width=\"auto\" height=\"80\"></a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n            <ul class=\"navbar-nav col-md-2 ml-auto \">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link \" [routerLink]=\"['/cart']\"> <i class=\"fas fa-shopping-cart\" style=\"color: #41a9d0;\"></i> <strong> Cart </strong></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link \" [routerLink]=\"['/login']\" *ngIf=\"!isLogged\">  <strong>Login</strong></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link \" [routerLink]=\"['/register']\" *ngIf=\"!isLogged\"><strong>Register</strong></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link \" (click)=\"onLogOut()\"  *ngIf=\"isLogged\" href=\"#\"> <i class=\"fas fa-sign-out-alt text-danger\" ></i> <strong>Logout</strong></a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/pagination/pagination.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/pagination/pagination.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"page\">\n  <div class=\"d-flex align-items-center\" *ngIf=\"page.total; else empty_results\">\n    <div class=\"flex-fill\" [hidden]=\"page.total === 0\">\n      {{ 'app.PAGE_INFO' | translate: { from: from, to: to, total: page.total } }}\n    </div>\n    <div [hidden]=\"page.totalPages &lt; 2\">\n      <ngb-pagination [collectionSize]=\"page.total\" [(page)]=\"page.current\" (pageSize)=\"page.pageSize\"\n        (pageChange)=\"pageChange.emit($event)\" [maxSize]=\"10\" [boundaryLinks]=\"true\"></ngb-pagination>\n    </div>\n  </div>\n</div>\n\n<ng-template #empty_results>\n  <div class=\"text-muted text-center\">{{ 'app.NO_RESULTS' | translate }}</div>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/panel/panel.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/panel/panel.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"spinner-overlay\" [hidden]=\"!loading\" [ngClass]=\"{ 'fixed': fixed, 'lg': large }\">\n  <div class=\"spinner-container\">\n    <div class=\"spinner\" role=\"status\"></div>\n  </div>\n</div>\n<ng-content></ng-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/product/product.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/product/product.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-------------NAVBAR-------------->\r\n<div class=\"row\">\r\n    <div class=\"container-fluid\">\r\n        <app-navbar [(isLogged)]=\"isLogged\"></app-navbar>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container-fluid mb-5\">\r\n    <div class=\"row \">\r\n        <div class=\"col-md-10 ml-auto\">\r\n            <h3 class=\"mt-5\">Product: {{productName}} </h3>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 ml-auto \">\r\n            <img class=\"img-product animate__animated animate__fadeIn\" *ngIf=\"hasInfo\" src=\"{{productImg}}\" title=\"{{productName}}\" alt=\"{{productName}}\">\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <ul class=\"list-group list-group-flush\">\r\n                <li class=\"list-group-item\" style=\"font-size: 18px;\" *ngIf=\"hasInfo\"><strong>{{productName}} \r\n                    <br>\r\n                    <small *ngIf=\"hasInfo\">( {{productCategory}} )</small>\r\n                </strong></li>\r\n\r\n                <li class=\"list-group-item\" *ngIf=\"hasInfo\">{{productDescription}} </li>\r\n                <li class=\"list-group-item text-price-style\" *ngIf=\"hasInfo\">{{productPrice | currency}} </li>\r\n                <li class=\"list-group-item\">\r\n                    <button class=\"btn btn-style\" (click)=\"addToCart()\"> <i class=\"fas fa-shopping-cart\" style=\"color: green;\"></i> Add to cart</button>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-----------------FOOTER------------>\r\n<div class=\"container\" style=\"height: 215px;\"></div>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/register/register.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/register/register.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row animate__animated animate__bounceInLeft\">\r\n    <div class=\"container-fluid\">\r\n        <nav class=\"navbar navbar-expand-lg navbar-dark bg-style\">\r\n            <div class=\"container-fluid\">\r\n                <a href=\"#\"> <img class=\"animate__animated animate__bounceInLeft\" src=\"../../assets/img/logoV3.png\" routerLink=\"/\" alt=\"GiftShop Logo\" width=\"\" height=\"80\"></a>\r\n\r\n\r\n\r\n            </div>\r\n        </nav>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container-fluid img-bg\">\r\n    <div class=\"row justify-content-center\">\r\n        <div class=\"col-auto mt-5\">\r\n            <div class=\"card animate__animated animate__bounceIn\" style=\"width:auto; min-height: 400px; border-radius: 10px;\">\r\n                <div class=\"card-body \">\r\n                    <h4 class=\"card-title text-center\">Register</h4>\r\n                    <form (submit)=\"onSignUp()\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"FirstName\">First Name</label>\r\n                            <input type=\"text\" class=\"form-control\" name=\"FirstName\" #FirstName=\"ngModel\" [(ngModel)]=\"creds.FirstName\" />\r\n                            <span *ngIf=\"FirstName.touched && FirstName.invalid && FirstName.errors.required\" class=\"text-danger\">Required</span>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"LastName\">Last Name</label>\r\n                            <input type=\"text\" class=\"form-control\" name=\"LastName\" #LastName=\"ngModel\" [(ngModel)]=\"creds.LastName\" />\r\n                            <span *ngIf=\"LastName.touched && LastName.invalid && LastName.errors.required\" class=\"text-danger\">Required</span>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"Email\">Email</label>\r\n                            <input type=\"email\" class=\"form-control\" name=\"Email\" #Email=\"ngModel\" [(ngModel)]=\"creds.Email\" required />\r\n                            <span *ngIf=\"Email.touched && Email.invalid && Email.errors.required\" class=\"text-danger\">Required</span>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"Password\">Password</label>\r\n                            <input type=\"password\" class=\"form-control\" name=\"Password\" pattern=\"(?=^.{8,}$)(?=.*\\d)(?=.*[!@#$%^&*]+)(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$\" title=\"{{titlePattern}}\" #Password=\"ngModel\" [(ngModel)]=\"creds.Password\" required />\r\n                            <div *ngFor=\"let t of titlePattern\">\r\n                                <span *ngIf=\"Password.invalid && Password.touched\" class=\"text-danger\">{{t}}\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <label>You already have an account? <a [routerLink]=\"['/login']\">Login</a> </label>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"row justify-content-center m-0 mt-5\">\r\n                                <input type=\"submit\" class=\"btn btn-color\" value=\"Sign up\" [disabled]=\"Email.invalid || Password.invalid\" />\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts",
		"auth-auth-module"
	],
	"./examples/examples.module": [
		"./src/app/examples/examples.module.ts",
		"examples-examples-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/layout/layout.component */ "./src/app/shared/components/layout/layout.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/login/login.component */ "./src/app/shared/components/login/login.component.ts");
/* harmony import */ var _shared_components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/components/register/register.component */ "./src/app/shared/components/register/register.component.ts");
/* harmony import */ var _shared_components_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/components/cart/cart.component */ "./src/app/shared/components/cart/cart.component.ts");
/* harmony import */ var _shared_components_product_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/product/product.component */ "./src/app/shared/components/product/product.component.ts");
/* harmony import */ var _shared_components_admin_login_loginAdmin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/components/admin/login/loginAdmin.component */ "./src/app/shared/components/admin/login/loginAdmin.component.ts");
/* harmony import */ var _shared_components_admin_index_indexAdmin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/components/admin/index/indexAdmin.component */ "./src/app/shared/components/admin/index/indexAdmin.component.ts");
/* harmony import */ var _shared_components_admin_addProduct_addProduct_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/components/admin/addProduct/addProduct.component */ "./src/app/shared/components/admin/addProduct/addProduct.component.ts");
/* harmony import */ var _shared_components_admin_modifyProduct_modifyProduct_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/components/admin/modifyProduct/modifyProduct.component */ "./src/app/shared/components/admin/modifyProduct/modifyProduct.component.ts");
/* harmony import */ var _shared_components_admin_ordersHistory_ordersHistory_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/components/admin/ordersHistory/ordersHistory.component */ "./src/app/shared/components/admin/ordersHistory/ordersHistory.component.ts");
/* harmony import */ var _core_guards_logged_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/guards/logged.guard */ "./src/app/core/guards/logged.guard.ts");
/* harmony import */ var _core_guards_admin_auth_admin_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/guards/admin/auth-admin.guard */ "./src/app/core/guards/admin/auth-admin.guard.ts");

















var routes = [
    {
        path: 'auth',
        component: _shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: '',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
        data: {
            title: 'app.HOME'
        },
        children: [
            {
                path: 'examples',
                component: _shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
                loadChildren: './examples/examples.module#ExamplesModule',
                data: {
                    title: 'examples.$TITLE'
                }
            },
        ]
    },
    {
        path: 'error',
        component: _error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"],
    },
    { path: "login", component: _shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], canActivate: [_core_guards_logged_guard__WEBPACK_IMPORTED_MODULE_15__["LoggedGuard"]] },
    { path: "register", component: _shared_components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], canActivate: [_core_guards_logged_guard__WEBPACK_IMPORTED_MODULE_15__["LoggedGuard"]] },
    { path: "cart", component: _shared_components_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"] },
    { path: "product/:id", component: _shared_components_product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"] },
    { path: "admin", component: _shared_components_admin_login_loginAdmin_component__WEBPACK_IMPORTED_MODULE_10__["LoginAdminComponent"] },
    { path: 'index', component: _shared_components_admin_index_indexAdmin_component__WEBPACK_IMPORTED_MODULE_11__["IndexAdminComponent"], canActivate: [_core_guards_admin_auth_admin_guard__WEBPACK_IMPORTED_MODULE_16__["AuthAdminGuard"]] },
    { path: 'addProduct', component: _shared_components_admin_addProduct_addProduct_component__WEBPACK_IMPORTED_MODULE_12__["AddProductComponent"], canActivate: [_core_guards_admin_auth_admin_guard__WEBPACK_IMPORTED_MODULE_16__["AuthAdminGuard"]] },
    { path: 'modifyProduct/:id', component: _shared_components_admin_modifyProduct_modifyProduct_component__WEBPACK_IMPORTED_MODULE_13__["ModifyProductComponent"], canActivate: [_core_guards_admin_auth_admin_guard__WEBPACK_IMPORTED_MODULE_16__["AuthAdminGuard"]] },
    { path: 'ordersHistory', component: _shared_components_admin_ordersHistory_ordersHistory_component__WEBPACK_IMPORTED_MODULE_14__["OrdersHistoryComponent"], canActivate: [_core_guards_admin_auth_admin_guard__WEBPACK_IMPORTED_MODULE_16__["AuthAdminGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/services/loading.service */ "./src/app/core/services/loading.service.ts");




var AppComponent = /** @class */ (function () {
    /**
     *
     */
    function AppComponent(translate, loadingService) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
        this.loading$ = loadingService.loading$;
    }
    AppComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: _core_services_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _core_services_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]],
            imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/app-validators.ts":
/*!******************************************!*\
  !*** ./src/app/common/app-validators.ts ***!
  \******************************************/
/*! exports provided: AppValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppValidators", function() { return AppValidators; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// tslint:disable-next-line:max-line-length
var EMAIL_REGEXP = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
var PASSWORD_COMPLEXITY_REGEXP = /^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*\W)(?=.*\d))).{8,}$/;
function isEmptyInputValue(value) {
    // we don't check for string here so it also works with arrays
    return value === '' || value == null || value.length === 0;
}
var AppValidators = /** @class */ (function () {
    function AppValidators() {
    }
    AppValidators.conditionalRequired = function (condition) {
        return function (control) {
            if (condition()) {
                if (isEmptyInputValue(control.value) || (typeof control.value === 'string' && control.value.trim() === '')) {
                    return {
                        required: true
                    };
                }
            }
            return null;
        };
    };
    AppValidators.integer = function (control) {
        if (isEmptyInputValue(control.value)) {
            return null;
        }
        return isInteger(control.value) ? null : {
            integer: true
        };
        function isInteger(value) {
            if ((parseFloat(value) === parseInt(value, 10)) && !isNaN(value)) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    AppValidators.email = function (control) {
        if (isEmptyInputValue(control.value)) {
            return null;
        }
        return EMAIL_REGEXP.test(control.value) ? null : { email: true };
    };
    AppValidators.password = function (control) {
        if (isEmptyInputValue(control.value)) {
            return null;
        }
        return PASSWORD_COMPLEXITY_REGEXP.test(control.value) ? null : { password: true };
    };
    AppValidators.areEqual = function (field1, field2) {
        return function (control) {
            var control1 = control.get(field1);
            var control2 = control.get(field2);
            if (!control1) {
                throw new Error("Control " + field1 + " does not exist.");
            }
            if (!control2) {
                throw new Error("Control " + field2 + " does not exist.");
            }
            if (control1.value !== control2.value) {
                return {
                    areEqual: true
                };
            }
            return null;
        };
    };
    AppValidators.fileExtension = function (type) {
        return function (control) {
            var file = control.value;
            if (file) {
                var parts = file.name.split('.');
                var extension = parts[parts.length - 1];
                if (extension && type.toLowerCase() !== extension.toLowerCase()) {
                    return {
                        fileExtension: true
                    };
                }
            }
            return null;
        };
    };
    AppValidators.fileMimeType = function (type) {
        return function (control) {
            var file = control.value;
            if (file) {
                if (!file.type.match(type)) {
                    return {
                        fileMimeType: true
                    };
                }
            }
            return null;
        };
    };
    AppValidators.image = function (control) {
        var file = control.value;
        if (file) {
            if (!file.type.match(/image\/(png|x-png|jpeg)/)) {
                return {
                    fileMimeType: true
                };
            }
        }
        return null;
    };
    return AppValidators;
}());



/***/ }),

/***/ "./src/app/common/util.ts":
/*!********************************!*\
  !*** ./src/app/common/util.ts ***!
  \********************************/
/*! exports provided: modelToFormData, urlEncode, toObject, sum, groupBy, getPreview, dateToString, parseDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modelToFormData", function() { return modelToFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlEncode", function() { return urlEncode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toObject", function() { return toObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return sum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreview", function() { return getPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateToString", function() { return dateToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDate", function() { return parseDate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



function append(model, formData, prefix) {
    if (model === null || model === undefined) {
        return;
    }
    if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isArray"])(model)) {
        for (var i = 0; i < model.length; i++) {
            var item = model[i];
            append(item, formData, prefix + ("[" + i + "]"));
        }
    }
    else if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isObject"])(model)) {
        if (prefix) {
            prefix = prefix + '.';
        }
        for (var prop in model) {
            if (model.hasOwnProperty(prop)) {
                var value = model[prop];
                append(value, formData, prefix + prop);
            }
        }
    }
    else {
        formData.append(prefix, model);
    }
}
function modelToFormData(model, file) {
    var formData = new FormData();
    if (file) {
        formData.append('file', file, file.name);
    }
    append(model, formData, '');
    return formData;
}
function encodeInternal(model, parts, prefix) {
    if (model === null || model === undefined /*|| model === emptyValue*/) {
        return;
    }
    if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isArray"])(model)) {
        for (var i = 0; i < model.length; i++) {
            var item = model[i];
            encodeInternal(item, parts, prefix + ("[" + i + "]"));
        }
        // } else if (moment.isMoment(model)) {
        //   parts.push(`${prefix}=${encodeURIComponent(model.toJSON())}`);
    }
    else if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isObject"])(model)) {
        if (prefix) {
            prefix = prefix + '.';
        }
        for (var prop in model) {
            if (model.hasOwnProperty(prop)) {
                var value = model[prop];
                encodeInternal(value, parts, prefix + encodeURIComponent(prop));
            }
        }
    }
    else {
        parts.push(prefix + "=" + encodeURIComponent(model.toString()));
    }
}
function urlEncode(model) {
    var parts = [];
    encodeInternal(model, parts, '');
    if (parts.length > 0) {
        return '?' + parts.join('&');
    }
    return '';
}
function toObject(items, key, valueSelector) {
    if (!valueSelector) {
        valueSelector = function (x) { return x; };
    }
    return items.reduce(function (map, item) {
        map[item[key]] = valueSelector(item);
        return map;
    }, {});
}
function sum(items, accessor) {
    if (items.length === 0) {
        return 0;
    }
    return items.reduce(function (acc, item) { return acc + (accessor(item) || 0); }, 0);
}
function groupBy(items, key) {
    return items.reduce(function (map, item) {
        var value = item[key];
        (map[value] = map[value] || []).push(item);
        return map;
    }, {});
}
function getPreview(file) {
    if (!file) {
        this._previewData = null;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('No image to preview.');
    }
    var mimeType = file.type;
    if (mimeType.match(/image\/*/) == null) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('File is not an image.');
    }
    var subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (_event) {
        subject.next(reader.result);
    };
    return subject.asObservable();
}
function dateToString(date) {
    return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate());
}
function pad(n) {
    if (n < 10) {
        return '0' + n;
    }
    return '' + n;
}
var DATE_REGEX = /^(\d{4})-(\d{2})-(\d{2})/;
function parseDate(s) {
    if (typeof s === 'string') {
        var m = DATE_REGEX.exec(s);
        if (m) {
            return new Date(parseInt(m[1], 10), parseInt(m[2], 10) - 1, parseInt(m[3], 10));
        }
        throw new Error("Unexecpected date format: " + s);
    }
    if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isDate"])(s)) {
        return s;
    }
    throw new Error('Unexecpected date value');
}


/***/ }),

/***/ "./src/app/core/api-url.token.ts":
/*!***************************************!*\
  !*** ./src/app/core/api-url.token.ts ***!
  \***************************************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var API_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('API_URL');


/***/ }),

/***/ "./src/app/core/assets-url.token.ts":
/*!******************************************!*\
  !*** ./src/app/core/assets-url.token.ts ***!
  \******************************************/
/*! exports provided: ASSETS_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASSETS_URL", function() { return ASSETS_URL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ASSETS_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('ASSETS_URL');


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: createTranslateLoader, CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _throwIfAlreadyLoaded__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./throwIfAlreadyLoaded */ "./src/app/core/throwIfAlreadyLoaded.ts");
/* harmony import */ var _services_error_handler_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/error-handler.service */ "./src/app/core/services/error-handler.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _services_redirect_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/redirect.service */ "./src/app/core/services/redirect.service.ts");
/* harmony import */ var _api_url_token__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./api-url.token */ "./src/app/core/api-url.token.ts");
/* harmony import */ var _assets_url_token__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets-url.token */ "./src/app/core/assets-url.token.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./interceptors/auth.interceptor */ "./src/app/core/interceptors/auth.interceptor.ts");
/* harmony import */ var _services_message_box_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/message-box.service */ "./src/app/core/services/message-box.service.ts");
/* harmony import */ var _services_download_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/download.service */ "./src/app/core/services/download.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/config.service */ "./src/app/core/services/config.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/loading.service */ "./src/app/core/services/loading.service.ts");






















function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var appInitializerFn = function (configService) {
    return function () {
        return configService.load();
    };
};
var apiUrlFactory = function (configService) {
    return configService.apiUrl;
};
var assetsUrlFactory = function (configService) {
    return configService.assetsUrl;
};
var entryComponents = [
    // Add entry components here
    _services_message_box_service__WEBPACK_IMPORTED_MODULE_18__["ModalConfirmComponent"],
    _services_message_box_service__WEBPACK_IMPORTED_MODULE_18__["ModalMessageComponent"]
];
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        Object(_throwIfAlreadyLoaded__WEBPACK_IMPORTED_MODULE_9__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
    CoreModule.ctorParameters = function () { return [
        { type: CoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
    ]; };
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: entryComponents.slice(),
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
            ],
            entryComponents: entryComponents.slice(),
            providers: [
                _services_error_handler_service__WEBPACK_IMPORTED_MODULE_10__["ErrorHandlerService"],
                _services_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"],
                _services_redirect_service__WEBPACK_IMPORTED_MODULE_13__["RedirectService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthState"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"],
                _services_message_box_service__WEBPACK_IMPORTED_MODULE_18__["MessageBoxService"],
                _services_download_service__WEBPACK_IMPORTED_MODULE_19__["DownloadService"],
                _services_config_service__WEBPACK_IMPORTED_MODULE_20__["ConfigService"],
                _services_loading_service__WEBPACK_IMPORTED_MODULE_21__["LoadingService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__["AuthInterceptor"],
                    multi: true
                },
                {
                    provide: _api_url_token__WEBPACK_IMPORTED_MODULE_14__["API_URL"],
                    // useValue: environment.apiUrl,
                    useFactory: apiUrlFactory,
                    deps: [_services_config_service__WEBPACK_IMPORTED_MODULE_20__["ConfigService"]]
                },
                {
                    provide: _assets_url_token__WEBPACK_IMPORTED_MODULE_15__["ASSETS_URL"],
                    // useValue: environment.apiUrl,
                    useFactory: assetsUrlFactory,
                    deps: [_services_config_service__WEBPACK_IMPORTED_MODULE_20__["ConfigService"]]
                },
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                    useFactory: appInitializerFn,
                    multi: true,
                    deps: [_services_config_service__WEBPACK_IMPORTED_MODULE_20__["ConfigService"]]
                }
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/guards/admin/auth-admin.guard.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/guards/admin/auth-admin.guard.ts ***!
  \*******************************************************/
/*! exports provided: AuthAdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthAdminGuard", function() { return AuthAdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/core/services/auth.service.ts");






var AuthAdminGuard = /** @class */ (function () {
    function AuthAdminGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthAdminGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this._authService.getAuthInfo()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (info) {
            if (info != null) {
                var userRoles = info.roles || [];
                if (userRoles[0] == 'Admin') {
                    return true;
                }
            }
            return false;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            // TODO: Define error status codes to handle
            if (error.status === 500 || error.status === 0) {
                _this._router.navigate(['/error'], { skipLocationChange: true, queryParams: { status: error.status } });
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }));
    };
    AuthAdminGuard.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthAdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthAdminGuard);
    return AuthAdminGuard;
}());



/***/ }),

/***/ "./src/app/core/guards/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");






var AuthGuard = /** @class */ (function () {
    /**
     *
     */
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this._authService.getAuthInfo()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (info) {
            if (info != null) {
                var userRoles = info.roles || [];
                return true;
            }
            return false;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            // TODO: Define error status codes to handle
            if (error.status === 500 || error.status === 0) {
                _this._router.navigate(['/error'], { skipLocationChange: true, queryParams: { status: error.status } });
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }));
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/guards/logged.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/core/guards/logged.guard.ts ***!
  \*********************************************/
/*! exports provided: LoggedGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedGuard", function() { return LoggedGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");






var LoggedGuard = /** @class */ (function () {
    function LoggedGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    LoggedGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this._authService.getAuthInfo()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (info) {
            if (info == null) {
                var userRoles = info.roles || [];
                return true;
            }
            return false;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            // TODO: Define error status codes to handle
            if (error.status === 401)
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
            if (error.status === 500 || error.status === 0) {
                _this._router.navigate(['/error'], { skipLocationChange: true, queryParams: { status: error.status } });
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }));
    };
    LoggedGuard.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LoggedGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoggedGuard);
    return LoggedGuard;
}());



/***/ }),

/***/ "./src/app/core/interceptors/auth.interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/interceptors/auth.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_services_redirect_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/redirect.service */ "./src/app/core/services/redirect.service.ts");



// libs



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(_redirectService) {
        this._redirectService = _redirectService;
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        request = request.clone({
            withCredentials: true
        });
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            // check for unauthorized error and redirect to login page.
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    //this._redirectService.toLogin(true, RedirectReason.Unauthorized);
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }));
    };
    AuthInterceptor.ctorParameters = function () { return [
        { type: _core_services_redirect_service__WEBPACK_IMPORTED_MODULE_5__["RedirectService"] }
    ]; };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_redirect_service__WEBPACK_IMPORTED_MODULE_5__["RedirectService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthState, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthState", function() { return AuthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _redirect_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redirect.service */ "./src/app/core/services/redirect.service.ts");
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/util */ "./src/app/common/util.ts");
/* harmony import */ var _api_url_token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api-url.token */ "./src/app/core/api-url.token.ts");








var anonymous = {
    id: '',
    email: '',
    name: '',
    roles: [],
    expiresIn: 0
};
var AuthState = /** @class */ (function () {
    function AuthState() {
        this._latestOrAnonymous = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](anonymous);
    }
    Object.defineProperty(AuthState.prototype, "current", {
        get: function () {
            return this._latestOrAnonymous.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthState.prototype, "isAuthenticated", {
        get: function () {
            return this._latestOrAnonymous.value !== anonymous;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthState.prototype, "info$", {
        /**
         * Gets an observable for the latest resolved auth info or the default info (anonymous)
         * if not resolved yet
         * @returns Observable<any>
         */
        get: function () {
            return this._latestOrAnonymous;
        },
        enumerable: true,
        configurable: true
    });
    AuthState.prototype.set = function (info) {
        this._latestOrAnonymous.next(info);
    };
    AuthState.prototype.ngOnDestroy = function () {
        this._latestOrAnonymous.complete();
    };
    AuthState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthState);
    return AuthState;
}());

var AuthService = /** @class */ (function () {
    function AuthService(_httpClient, _state, _redirect, apiUrl) {
        this._httpClient = _httpClient;
        this._state = _state;
        this._redirect = _redirect;
        this._url = apiUrl + "/api/account/";
    }
    /**
     * Gets an observable for the latest resolved auth info
     * @returns Observable<any>
     */
    AuthService.prototype.getAuthInfo = function () {
        if (this._state.isAuthenticated) {
            console.log('Hola ' + this._state);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this._state.current);
        }
        return this.get();
    };
    AuthService.prototype.isAuthenticated = function () {
        if (this._state.isAuthenticated) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
        }
        return this._httpClient.get(this._url + "authenticated")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response.isAuthenticated;
        }));
    };
    AuthService.prototype.reload = function () {
        this.get().subscribe(function () { });
    };
    AuthService.prototype.login = function (model) {
        return this._httpClient.post(this._url + "login", model);
    };
    AuthService.prototype.logOut = function (timedOut) {
        var _this = this;
        if (timedOut === void 0) { timedOut = false; }
        this._httpClient.post(this._url + "logout", {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            //console.log("Se desloggeo")
        }))
            .subscribe(function () {
            _this._state.set(anonymous);
            //console.log("Sin errores")
        }, function () {
        });
    };
    AuthService.prototype.forgotPassword = function (model) {
        return this._httpClient.post(this._url + "forgot-password", model);
    };
    AuthService.prototype.resetPassword = function (model) {
        return this._httpClient.post(this._url + "reset-password", model);
    };
    AuthService.prototype.validateActivationToken = function (userId, token) {
        // Need to manually encode the params since Angular seems to have problems
        // encoding the token correctly
        var params = Object(_common_util__WEBPACK_IMPORTED_MODULE_6__["urlEncode"])({ userId: userId, token: token });
        return this._httpClient.get(this._url + "activate" + params);
    };
    AuthService.prototype.activate = function (model) {
        return this._httpClient.post(this._url + "activate", model);
    };
    AuthService.prototype.changePassword = function (model) {
        return this._httpClient.post(this._url + "change-password", model);
    };
    AuthService.prototype.updatePassword = function (model) {
        return this._httpClient.post(this._url + "update-password", model);
    };
    AuthService.prototype.get = function () {
        var _this = this;
        return this._httpClient.get(this._url + "info")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
            _this._state.set(response);
        }));
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: AuthState },
        { type: _redirect_service__WEBPACK_IMPORTED_MODULE_5__["RedirectService"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_api_url_token__WEBPACK_IMPORTED_MODULE_7__["API_URL"],] }] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_api_url_token__WEBPACK_IMPORTED_MODULE_7__["API_URL"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            AuthState,
            _redirect_service__WEBPACK_IMPORTED_MODULE_5__["RedirectService"], String])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/services/config.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/config.service.ts ***!
  \*************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ConfigService = /** @class */ (function () {
    function ConfigService(http) {
        this.http = http;
    }
    Object.defineProperty(ConfigService.prototype, "apiUrl", {
        get: function () {
            return this._apiUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "assetsUrl", {
        get: function () {
            return this._assetsUrl;
        },
        enumerable: true,
        configurable: true
    });
    ConfigService.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get('/assets/config.json')
                            .toPromise()];
                    case 1:
                        data = _a.sent();
                        this._apiUrl = data.apiUrl;
                        this._assetsUrl = data.assetsUrl;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    ConfigService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/core/services/download.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/download.service.ts ***!
  \***************************************************/
/*! exports provided: DownloadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadService", function() { return DownloadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
var contentDispositionHeader = 'Content-Disposition';
var defaultFilename = 'file';
function getFilename(disposition) {
    var index = disposition.indexOf('attachment');
    if (index >= 0) {
        var matches = filenameRegex.exec(disposition);
        if (matches != null && matches[1]) {
            var filename = matches[1].replace(/['"]/g, '');
            return filename;
        }
    }
    return '';
}
function downloadBlob(blob, filename) {
    var url = window.URL.createObjectURL(blob);
    var a = window.document.createElement('a');
    a.style.display = 'none';
    window.document.body.appendChild(a);
    try {
        a.href = url;
        a.download = filename;
        a.click();
    }
    finally {
        window.document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }
}
function wrap(request) {
    return request.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (response) {
        try {
            downloadFromResponse(response);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(response);
        }
        catch (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }
    }));
}
function downloadFromResponse(response) {
    var contentDisposition = response.headers.get(contentDispositionHeader);
    var filename = contentDisposition && getFilename(contentDisposition) || defaultFilename;
    if (typeof window.navigator.msSaveBlob === 'function') {
        // IE
        window.navigator.msSaveBlob(response.body, filename);
    }
    else {
        downloadBlob(response.body, filename);
    }
}
var DownloadService = /** @class */ (function () {
    function DownloadService(_httpClient) {
        this._httpClient = _httpClient;
    }
    DownloadService.prototype.get = function (url, params) {
        if (params === void 0) { params = null; }
        return wrap(this._httpClient.get(url, {
            params: params || {},
            responseType: 'blob',
            observe: 'response'
        }));
    };
    DownloadService.prototype.post = function (url, body, params) {
        if (body === void 0) { body = null; }
        if (params === void 0) { params = null; }
        return wrap(this._httpClient.post(url, body, {
            params: params || {},
            responseType: 'blob',
            observe: 'response'
        }));
    };
    DownloadService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DownloadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DownloadService);
    return DownloadService;
}());



/***/ }),

/***/ "./src/app/core/services/error-handler.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/services/error-handler.service.ts ***!
  \********************************************************/
/*! exports provided: ErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function() { return ErrorHandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.service */ "./src/app/core/services/notification.service.ts");




function getStatusMessage(status) {
    return { key: "errors." + status };
}
var ErrorHandlerService = /** @class */ (function () {
    function ErrorHandlerService(_notificationService) {
        this._notificationService = _notificationService;
    }
    ErrorHandlerService.prototype.handle = function (errorResponse) {
        var messages = this.getErrorMessages(errorResponse);
        for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
            var error = messages_1[_i];
            this._notificationService.error(error);
        }
    };
    ErrorHandlerService.prototype.getErrorMessages = function (errorResponse) {
        var errors = [];
        switch (errorResponse.status) {
            case 0:
            case 401:
            case 403:
            case 404:
            case 500:
            case 504:
                errors.push(getStatusMessage(errorResponse.status));
                break;
            case 400:
                if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isObject"])(errorResponse.error)) {
                    var values = Object.values(errorResponse.error);
                    var concat = Array.prototype.concat;
                    var merged = concat.apply([], values);
                    merged.forEach(function (error) {
                        errors.push(error);
                    });
                }
                else {
                    errors.push(getStatusMessage(errorResponse.status));
                }
                break;
            default:
                if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isArray"])(errorResponse.error)) {
                    errorResponse.error.forEach(function (error) {
                        errors.push(error.description);
                    });
                }
                else {
                    if (typeof errorResponse.error === 'string') {
                        errors.push(errorResponse.error);
                    }
                    else {
                        errors.push({ key: 'errors.CODE', arg: { code: errorResponse.status } });
                    }
                }
                break;
        }
        return errors;
    };
    ErrorHandlerService.ctorParameters = function () { return [
        { type: _notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }
    ]; };
    ErrorHandlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])
    ], ErrorHandlerService);
    return ErrorHandlerService;
}());



/***/ }),

/***/ "./src/app/core/services/loading.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/loading.service.ts ***!
  \**************************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var LoadingService = /** @class */ (function () {
    function LoadingService(router) {
        this.loading$ = router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterEvent"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["GuardsCheckStart"]) {
                return true;
            }
            return false;
        }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()));
    }
    LoadingService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoadingService);
    return LoadingService;
}());



/***/ }),

/***/ "./src/app/core/services/message-box.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/services/message-box.service.ts ***!
  \******************************************************/
/*! exports provided: ModalMessageComponent, ModalConfirmComponent, MessageBoxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalMessageComponent", function() { return ModalMessageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalConfirmComponent", function() { return ModalConfirmComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageBoxService", function() { return MessageBoxService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _translate_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./translate-helper */ "./src/app/core/services/translate-helper.ts");






var ModalMessageComponent = /** @class */ (function () {
    function ModalMessageComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ModalMessageComponent.prototype.close = function (value) {
        this.activeModal.close(value);
    };
    ModalMessageComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
    ]; };
    ModalMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{title}}</h4>\n    <button type=\"button\" class=\"close\" [attr.aria-label]=\"'app.CLOSE' | translate\" (click)=\"close(false)\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>{{message}}</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"close(true)\" ngbAutofocus>{{ 'app.OK' | translate }}</button>\n  </div>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], ModalMessageComponent);
    return ModalMessageComponent;
}());

var ModalConfirmComponent = /** @class */ (function () {
    function ModalConfirmComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ModalConfirmComponent.prototype.close = function (value) {
        this.activeModal.close(value);
    };
    ModalConfirmComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
    ]; };
    ModalConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{title}}</h4>\n    <button type=\"button\" class=\"close\" [attr.aria-label]=\"'app.CLOSE' | translate\" (click)=\"close(false)\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>{{message}}</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"close(true)\">{{ 'app.OK' | translate }}</button>\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"close(false)\" ngbAutofocus>{{ 'app.CANCEL' | translate }}</button>\n  </div>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], ModalConfirmComponent);
    return ModalConfirmComponent;
}());

var modalOptions = {
    backdrop: 'static',
    keyboard: false
};
var MessageBoxService = /** @class */ (function () {
    function MessageBoxService(_ngbModal, _translate) {
        this._ngbModal = _ngbModal;
        this._translate = _translate;
    }
    MessageBoxService.prototype.show = function (message, title) {
        return this._show(ModalMessageComponent, message, title);
    };
    MessageBoxService.prototype.confirm = function (message, title) {
        return this._show(ModalConfirmComponent, message, title);
    };
    MessageBoxService.prototype._show = function (content, message, title) {
        var modalRef = this._ngbModal.open(content, modalOptions);
        Object(_translate_helper__WEBPACK_IMPORTED_MODULE_5__["getMessages"])(this._translate, message, title)
            .subscribe(function (_a) {
            var $message = _a[0], $title = _a[1];
            modalRef.componentInstance.message = $message;
            modalRef.componentInstance.title = $title;
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(modalRef.result);
    };
    MessageBoxService.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
    ]; };
    MessageBoxService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], MessageBoxService);
    return MessageBoxService;
}());



/***/ }),

/***/ "./src/app/core/services/notification.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/notification.service.ts ***!
  \*******************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _translate_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./translate-helper */ "./src/app/core/services/translate-helper.ts");






var NotificationService = /** @class */ (function () {
    function NotificationService(_toastr, _translate) {
        this._toastr = _toastr;
        this._translate = _translate;
        this._fn = {
            success: this._toastr.success.bind(this._toastr),
            info: this._toastr.info.bind(this._toastr),
            warning: this._toastr.warning.bind(this._toastr),
            error: this._toastr.error.bind(this._toastr)
        };
    }
    NotificationService.prototype.success = function (message, title) {
        return this.show(this._fn.success, message, title);
    };
    NotificationService.prototype.info = function (message, title) {
        return this.show(this._fn.info, message, title);
    };
    NotificationService.prototype.warning = function (message, title) {
        return this.show(this._fn.warning, message, title);
    };
    NotificationService.prototype.error = function (message, title) {
        return this.show(this._fn.error, message, title);
    };
    NotificationService.prototype.clearToasts = function () {
        this._toastr.clear();
    };
    NotificationService.prototype.show = function (fn, message, title) {
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        Object(_translate_helper__WEBPACK_IMPORTED_MODULE_5__["getMessages"])(this._translate, message, title)
            .subscribe(function (_a) {
            var $message = _a[0], $title = _a[1];
            subject.next(fn($message, $title));
            subject.complete();
        });
        return subject.asObservable();
    };
    NotificationService.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
    ]; };
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/core/services/redirect.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/redirect.service.ts ***!
  \***************************************************/
/*! exports provided: RedirectReason, RedirectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectReason", function() { return RedirectReason; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectService", function() { return RedirectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var loginUrl = '/auth/login';
var RedirectReason;
(function (RedirectReason) {
    RedirectReason[RedirectReason["LogOut"] = 0] = "LogOut";
    RedirectReason[RedirectReason["TimeOut"] = 1] = "TimeOut";
    RedirectReason[RedirectReason["Unauthorized"] = 2] = "Unauthorized";
})(RedirectReason || (RedirectReason = {}));
var RedirectService = /** @class */ (function () {
    function RedirectService(_router, _location) {
        this._router = _router;
        this._location = _location;
        this._reason = null;
        this._redirected = false;
    }
    Object.defineProperty(RedirectService.prototype, "timedOut", {
        get: function () {
            return this._reason === RedirectReason.TimeOut;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RedirectService.prototype, "loggedOut", {
        get: function () {
            return this._reason === RedirectReason.LogOut;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RedirectService.prototype, "redirected", {
        get: function () {
            return this._redirected;
        },
        enumerable: true,
        configurable: true
    });
    RedirectService.prototype.reset = function () {
        this._redirected = false;
        this._reason = null;
    };
    RedirectService.prototype.toLogin = function (keep, reason, params) {
        if (keep === void 0) { keep = false; }
        if (reason === void 0) { reason = null; }
        var current = this._location.path(false);
        if (current.indexOf(loginUrl) === 0) {
            // Already in login page, do nothing
            return;
        }
        var queryParams = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, params);
        if (keep) {
            queryParams['returnUrl'] = current;
        }
        this._redirected = true;
        this._reason = reason;
        this._router.navigate([loginUrl], { queryParams: queryParams });
    };
    RedirectService.prototype.fromRoute = function (snapshot) {
        var returnTo = snapshot.queryParams['returnUrl'];
        if (returnTo) {
            this._router.navigateByUrl(returnTo);
        }
        else {
            this._router.navigate(['/']);
        }
    };
    RedirectService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
    ]; };
    RedirectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], RedirectService);
    return RedirectService;
}());



/***/ }),

/***/ "./src/app/core/services/translate-helper.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/translate-helper.ts ***!
  \***************************************************/
/*! exports provided: getMessages, getMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMessages", function() { return getMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMessage", function() { return getMessage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");



function getMessages(service) {
    var messages = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        messages[_i - 1] = arguments[_i];
    }
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(messages.map(function (x) { return getMessage(service, x); }))
        .pipe(
    // Need to add this delay to ensure the observable will run asynchronously
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1));
}
function getMessage(service, message) {
    if (message === null || message === undefined) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])('');
    }
    if (typeof message === 'string') {
        return service.get(message);
    }
    var translation = message;
    return service.get(translation.key, translation.arg);
}


/***/ }),

/***/ "./src/app/core/throwIfAlreadyLoaded.ts":
/*!**********************************************!*\
  !*** ./src/app/core/throwIfAlreadyLoaded.ts ***!
  \**********************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var knownErrors = [0, 404, 500, 504];
var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(route) {
        this.knownError = false;
        var status = parseInt(route.snapshot.queryParams.status, 10);
        if (typeof status === 'number') {
            this.status = status;
            if (knownErrors.includes(status)) {
                this.knownError = true;
            }
        }
    }
    ErrorComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n * Sidebar\n */\n.sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  /* Behind the navbar */\n  padding: 48px 0 0;\n  /* Height of navbar */\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1); }\n.sidebar-sticky {\n  position: relative;\n  top: 0;\n  height: calc(100vh - 48px);\n  padding-top: .5rem;\n  padding-bottom: 2rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n  /* Scrollable contents if viewport is shorter than content. */ }\n.sidebar-sticky .version {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    text-align: center;\n    opacity: .8;\n    line-height: 2; }\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  .sidebar-sticky {\n    position: -webkit-sticky;\n    position: sticky; } }\n.sidebar .nav-link {\n  font-weight: 500;\n  color: #333; }\n.sidebar .nav-link.active {\n  color: #007bff; }\n.sidebar-heading {\n  font-size: .75rem;\n  text-transform: uppercase; }\n/*\n * Content\n */\n[role=\"main\"] {\n  padding-top: 133px;\n  /* Space for fixed navbar */ }\n@media (min-width: 768px) {\n  [role=\"main\"] {\n    padding-top: 48px;\n    /* Space for fixed navbar */ } }\n/*\n * Navbar\n */\n.navbar-brand {\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n  font-size: 1rem;\n  background-color: rgba(0, 0, 0, 0.25);\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25); }\n.navbar .form-control {\n  padding: .75rem 1rem;\n  border-width: 0;\n  border-radius: 0; }\n.card-img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 250px;\n  height: 250px;\n  border-radius: 20px; }\n.btn-color-se {\n  background-color: #6d41d0;\n  color: white;\n  border-radius: 20px;\n  height: 40px;\n  width: 140px; }\n.text-description {\n  display: inline-block;\n  width: 250px;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis; }\n.text-title {\n  display: inline-block;\n  width: 300px;\n  font-size: 18px;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9DOlxcVXNlcnNcXGxhcmlhc1xcRG9jdW1lbnRzXFxHaWZ0U2hvcFxcU1MuVGVtcGxhdGUuQXBpXFx3d3dyb290XFxhbmd1bGFyX3RlbXBsYXRlLW1hc3Rlci9zcmNcXGFwcFxcbWFpblxcbWFpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQ0VFO0FERUY7RUFDSSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsWUFBWTtFQUNaLHNCQUFBO0VBQ0EsaUJBQWlCO0VBQ2pCLHFCQUFBO0VBQ0EsNkNBQTRDLEVBQUE7QUFHaEQ7RUFDSSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNkRBQUEsRUFBOEQ7QUFSbEU7SUFVUSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjLEVBQUE7QUFJc0M7RUFDeEQ7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCLEVBQUEsRUFDbkI7QUFHTDtFQUNJLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7QUFHZjtFQUNJLGNBQWMsRUFBQTtBQUdsQjtFQUNJLGlCQUFpQjtFQUNqQix5QkFBeUIsRUFBQTtBQUk3Qjs7RUNSRTtBQUNGO0VEWUksa0JBQWtCO0VBQ2xCLDJCQUFBLEVBQTRCO0FBR2hDO0VDWEU7SURhTSxpQkFBaUI7SUFDakIsMkJBQUEsRUFBNEIsRUFDL0I7QUFJTDs7RUNiRTtBRGlCRjtFQUNJLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLHFDQUFvQztFQUNwQyw4Q0FBNkMsRUFBQTtBQUdqRDtFQUNJLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7QUFHcEI7RUFDSSxvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7QUFHdkI7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWSxFQUFBO0FBR2hCO0VBQ0kscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLHVCQUF1QixFQUFBO0FBRzNCO0VBQ0kscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTaWRlYmFyXG4gKi9cblxuLnNpZGViYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTAwO1xuICAgIC8qIEJlaGluZCB0aGUgbmF2YmFyICovXG4gICAgcGFkZGluZzogNDhweCAwIDA7XG4gICAgLyogSGVpZ2h0IG9mIG5hdmJhciAqL1xuICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCAwIHJnYmEoMCwgMCwgMCwgLjEpO1xufVxuXG4uc2lkZWJhci1zdGlja3kge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhweCk7XG4gICAgcGFkZGluZy10b3A6IC41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIC8qIFNjcm9sbGFibGUgY29udGVudHMgaWYgdmlld3BvcnQgaXMgc2hvcnRlciB0aGFuIGNvbnRlbnQuICovXG4gICAgLnZlcnNpb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgb3BhY2l0eTogLjg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyO1xuICAgIH1cbn1cblxuQHN1cHBvcnRzICgocG9zaXRpb246IC13ZWJraXQtc3RpY2t5KSBvciAocG9zaXRpb246IHN0aWNreSkpIHtcbiAgICAuc2lkZWJhci1zdGlja3kge1xuICAgICAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgfVxufVxuXG4uc2lkZWJhciAubmF2LWxpbmsge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbi5zaWRlYmFyIC5uYXYtbGluay5hY3RpdmUge1xuICAgIGNvbG9yOiAjMDA3YmZmO1xufVxuXG4uc2lkZWJhci1oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IC43NXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5cbi8qXG4gKiBDb250ZW50XG4gKi9cblxuW3JvbGU9XCJtYWluXCJdIHtcbiAgICBwYWRkaW5nLXRvcDogMTMzcHg7XG4gICAgLyogU3BhY2UgZm9yIGZpeGVkIG5hdmJhciAqL1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBbcm9sZT1cIm1haW5cIl0ge1xuICAgICAgICBwYWRkaW5nLXRvcDogNDhweDtcbiAgICAgICAgLyogU3BhY2UgZm9yIGZpeGVkIG5hdmJhciAqL1xuICAgIH1cbn1cblxuXG4vKlxuICogTmF2YmFyXG4gKi9cblxuLm5hdmJhci1icmFuZCB7XG4gICAgcGFkZGluZy10b3A6IC43NXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjc1cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4yNSk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMjUpO1xufVxuXG4ubmF2YmFyIC5mb3JtLWNvbnRyb2wge1xuICAgIHBhZGRpbmc6IC43NXJlbSAxcmVtO1xuICAgIGJvcmRlci13aWR0aDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uY2FyZC1pbWcge1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5idG4tY29sb3Itc2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZDQxZDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAxNDBweDtcbn1cblxuLnRleHQtZGVzY3JpcHRpb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi50ZXh0LXRpdGxlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn0iLCIvKlxuICogU2lkZWJhclxuICovXG4uc2lkZWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgLyogQmVoaW5kIHRoZSBuYXZiYXIgKi9cbiAgcGFkZGluZzogNDhweCAwIDA7XG4gIC8qIEhlaWdodCBvZiBuYXZiYXIgKi9cbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjEpOyB9XG5cbi5zaWRlYmFyLXN0aWNreSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcbiAgcGFkZGluZy10b3A6IC41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICAvKiBTY3JvbGxhYmxlIGNvbnRlbnRzIGlmIHZpZXdwb3J0IGlzIHNob3J0ZXIgdGhhbiBjb250ZW50LiAqLyB9XG4gIC5zaWRlYmFyLXN0aWNreSAudmVyc2lvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAuODtcbiAgICBsaW5lLWhlaWdodDogMjsgfVxuXG5Ac3VwcG9ydHMgKHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSkgb3IgKHBvc2l0aW9uOiBzdGlja3kpIHtcbiAgLnNpZGViYXItc3RpY2t5IHtcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgcG9zaXRpb246IHN0aWNreTsgfSB9XG5cbi5zaWRlYmFyIC5uYXYtbGluayB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMzMzOyB9XG5cbi5zaWRlYmFyIC5uYXYtbGluay5hY3RpdmUge1xuICBjb2xvcjogIzAwN2JmZjsgfVxuXG4uc2lkZWJhci1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAuNzVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cblxuLypcbiAqIENvbnRlbnRcbiAqL1xuW3JvbGU9XCJtYWluXCJdIHtcbiAgcGFkZGluZy10b3A6IDEzM3B4O1xuICAvKiBTcGFjZSBmb3IgZml4ZWQgbmF2YmFyICovIH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIFtyb2xlPVwibWFpblwiXSB7XG4gICAgcGFkZGluZy10b3A6IDQ4cHg7XG4gICAgLyogU3BhY2UgZm9yIGZpeGVkIG5hdmJhciAqLyB9IH1cblxuLypcbiAqIE5hdmJhclxuICovXG4ubmF2YmFyLWJyYW5kIHtcbiAgcGFkZGluZy10b3A6IC43NXJlbTtcbiAgcGFkZGluZy1ib3R0b206IC43NXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgMCByZ2JhKDAsIDAsIDAsIDAuMjUpOyB9XG5cbi5uYXZiYXIgLmZvcm0tY29udHJvbCB7XG4gIHBhZGRpbmc6IC43NXJlbSAxcmVtO1xuICBib3JkZXItd2lkdGg6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7IH1cblxuLmNhcmQtaW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDsgfVxuXG4uYnRuLWNvbG9yLXNlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZkNDFkMDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxNDBweDsgfVxuXG4udGV4dC1kZXNjcmlwdGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDI1MHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG5cbi50ZXh0LXRpdGxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzAwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuIl19 */");

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _core_services_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/services/error-handler.service */ "./src/app/core/services/error-handler.service.ts");







var MainComponent = /** @class */ (function () {
    function MainComponent(_authService, _productSvc, router, _notificactionSvc, _error, _auth) {
        this._authService = _authService;
        this._productSvc = _productSvc;
        this.router = router;
        this._notificactionSvc = _notificactionSvc;
        this._error = _error;
        this._auth = _auth;
        this.isProductsEmpty = true;
        this.isLogged = false;
        this.navItems = [
            { name: 'examples.$TITLE', route: ['/examples'] }
        ];
        if (this.products) {
            this.isProductsEmpty = false;
        }
        else {
            this.isProductsEmpty = true;
        }
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productSvc.loadProducts().subscribe(function () {
            _this.products = _this._productSvc.products;
            _this.setCategoriesList();
            if (_this.products && !_this.products.length) {
                _this.isProductsEmpty = true;
            }
            else {
                _this.isProductsEmpty = false;
            }
        }, function (err) { return _this._error.handle(err); });
        try {
            this._auth.getAuthInfo().subscribe(function (data) {
                console.log(data);
                _this.isLogged = true;
            }, function (err) {
                //this._error.handle(err);
                // this._auth.getAuthInfo().subscribe(data => {
                //     console.log(data);
                //   });
            });
        }
        catch (ex) {
        }
    };
    MainComponent.prototype.setCategoriesList = function () {
        var catList = [];
        this.products.forEach(function (cp, index) {
            catList[index] = cp.category;
        });
        // NON REPEATED ITEMS
        var dataArr = new Set(catList);
        this.categoriesList = dataArr;
    };
    MainComponent.prototype.logOut = function () {
        this._authService.logOut();
    };
    MainComponent.prototype.filterByCategory = function (e) {
        var category = e.target.text.replace('(current)', '');
        category = category.substring(1, category.length - 1);
        this.products = this._productSvc.getProductsByCategory(category);
    };
    MainComponent.prototype.listAll = function () {
        this.products = this._productSvc.getProducts();
        if (this.products) {
            this.isProductsEmpty = false;
        }
        else {
            this.isProductsEmpty = true;
        }
    };
    MainComponent.prototype.onSearchForProduct = function () {
        try {
            this.products = this._productSvc.getProductsByName(this.searchBar);
            if (this.products.length === 0) {
                this.isProductsEmpty = true;
            }
            else {
                this.isProductsEmpty = false;
            }
        }
        catch (ex) {
            this.isProductsEmpty = true;
        }
    };
    MainComponent.ctorParameters = function () { return [
        { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
        { type: _core_services_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlerService"] },
        { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"],
            _core_services_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlerService"], _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/services/admin/add-product.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/admin/add-product.service.ts ***!
  \*******************************************************/
/*! exports provided: AddProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductService", function() { return AddProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AddProductService = /** @class */ (function () {
    function AddProductService(http) {
        this.http = http;
        this.URL = 'https://localhost:44383';
    }
    AddProductService.prototype.postProduct = function (model) {
        console.log(model);
        return this.http.post(this.URL + "/api/products", model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { }));
    };
    AddProductService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AddProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AddProductService);
    return AddProductService;
}());



/***/ }),

/***/ "./src/app/services/admin/delete-product.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/admin/delete-product.service.ts ***!
  \**********************************************************/
/*! exports provided: DeleteProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProductService", function() { return DeleteProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var DeleteProductService = /** @class */ (function () {
    function DeleteProductService(http) {
        this.http = http;
        this.URL = 'https://localhost:44383';
    }
    DeleteProductService.prototype.deleteProduct = function (id) {
        return this.http.delete(this.URL + "/api/products/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { }));
    };
    DeleteProductService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DeleteProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DeleteProductService);
    return DeleteProductService;
}());



/***/ }),

/***/ "./src/app/services/admin/update-product.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/admin/update-product.service.ts ***!
  \**********************************************************/
/*! exports provided: UpdateProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProductService", function() { return UpdateProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var UpdateProductService = /** @class */ (function () {
    function UpdateProductService(http) {
        this.http = http;
        this.URL = 'https://localhost:44383';
    }
    UpdateProductService.prototype.putProduct = function (model) {
        return this.http.put(this.URL + "/api/products/", model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { }));
    };
    UpdateProductService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UpdateProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UpdateProductService);
    return UpdateProductService;
}());



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_Order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Order */ "./src/app/shared/Order.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var CartService = /** @class */ (function () {
    function CartService(http) {
        this.http = http;
        this.products = [];
        this.order = new _shared_Order__WEBPACK_IMPORTED_MODULE_3__["Order"]();
        this.URL = 'https://localhost:44383';
        this.expiration = new Date();
    }
    CartService.prototype.addToOrder = function (product) {
        var item;
        console.log("Entro al order");
        item = this.order.items.find(function (o) { return o.id === product.id; });
        if (item) {
            item.quantity++;
            console.log("Entró al if");
        }
        else {
            var item_1 = {};
            //item.id = product.id;
            item_1.productName = product.productName;
            item_1.productDescription = product.productDescription;
            item_1.productImg = product.productImg;
            item_1.category = product.category;
            item_1.unitPrice = product.unitPrice;
            item_1.quantity = 1;
            this.order.items.push(item_1);
        }
    };
    CartService.prototype.getOrder = function () {
        return this.order;
    };
    CartService.prototype.getCustomers = function () {
        console.log("in cart service");
        return this.http.get(this.URL + "/api/customers").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            console.log(res);
            return res;
        }, function (err) {
            return console.log(err);
        }));
    };
    CartService.prototype.postOrder = function (order) {
        return this.http.post(this.URL + "/api/order", order).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        }));
    };
    CartService.prototype.postCustomer = function (customer) {
        return this.http.post(this.URL + "/api/Customers", customer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { }));
    };
    CartService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ProductsService = /** @class */ (function () {
    function ProductsService(_http) {
        this._http = _http;
        this.URL = 'https://localhost:44383';
    }
    ProductsService.prototype.loadProducts = function () {
        var _this = this;
        return this._http.get(this.URL + "/api/products")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this.products = data;
            return;
        }));
    };
    ProductsService.prototype.getProducts = function () {
        return this.products;
    };
    ProductsService.prototype.getProductById = function (idProduct) {
        var _this = this;
        return this._http.get(this.URL + "/api/products/" + idProduct)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this.singleProduct = data;
            return;
        }));
    };
    ProductsService.prototype.getProductsByCategory = function (cat) {
        var temp = this.products.filter(function (cp) { return cp.category.includes(cat); });
        return temp;
    };
    ProductsService.prototype.getProductsByName = function (na) {
        var temp = this.products.filter(function (cp) { return cp.productName.toLowerCase().includes(na.toLowerCase()); });
        return temp;
    };
    ProductsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/services/register.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
        this.URL = 'https://localhost:44383';
    }
    RegisterService.prototype.postRegister = function (user) {
        return this.http.post(this.URL + "/api/account/sign-up", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { }));
    };
    RegisterService.prototype.postCustomer = function (customer) {
        return this.http.post(this.URL + "/api/Customers", customer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { }));
    };
    RegisterService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/shared/Order.ts":
/*!*********************************!*\
  !*** ./src/app/shared/Order.ts ***!
  \*********************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Order = /** @class */ (function () {
    function Order() {
        this.orderNumber = Math.random().toString(36).substring(2, 5);
        this.items = [];
    }
    Object.defineProperty(Order.prototype, "subtotal", {
        get: function () {
            var result = this.items.reduce(function (tot, val) {
                return tot + (val.unitPrice * val.quantity);
            }, 0);
            return result;
        },
        enumerable: true,
        configurable: true
    });
    return Order;
}());



/***/ }),

/***/ "./src/app/shared/components/admin/addProduct/addProduct.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/admin/addProduct/addProduct.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input-style {\n  width: 500px; }\n\n.card-img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 250px;\n  height: 250px;\n  border-radius: 20px; }\n\n.btn-style {\n  border-radius: 20px;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWRtaW4vYWRkUHJvZHVjdC9DOlxcVXNlcnNcXGxhcmlhc1xcRG9jdW1lbnRzXFxHaWZ0U2hvcFxcU1MuVGVtcGxhdGUuQXBpXFx3d3dyb290XFxhbmd1bGFyX3RlbXBsYXRlLW1hc3Rlci9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxhZG1pblxcYWRkUHJvZHVjdFxcYWRkUHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWRtaW4vYWRkUHJvZHVjdC9hZGRQcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LXN0eWxlIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuLmNhcmQtaW1nIHtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4tc3R5bGUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/shared/components/admin/addProduct/addProduct.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/admin/addProduct/addProduct.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_admin_add_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/admin/add-product.service */ "./src/app/services/admin/add-product.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(_http, _addSvc) {
        this._http = _http;
        this._addSvc = _addSvc;
        this.product = {
            productName: "",
            productDescription: "",
            quantity: 0,
            unitPrice: 0,
            productImg: "",
            category: ""
        };
    }
    AddProductComponent.prototype.ngOnInit = function () {
    };
    AddProductComponent.prototype.onAddProduct = function () {
        console.log(this.product);
        this._addSvc.postProduct(this.product).subscribe(function (res) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: 'success',
                title: 'Your product has been added',
                showConfirmButton: false,
                timer: 1500
            });
        }, function (err) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: 'error',
                title: 'Your product has not been added',
                showConfirmButton: false,
                timer: 1500
            });
        });
    };
    AddProductComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _services_admin_add_product_service__WEBPACK_IMPORTED_MODULE_3__["AddProductService"] }
    ]; };
    AddProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addproduct',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addProduct.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/admin/addProduct/addProduct.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addProduct.component.scss */ "./src/app/shared/components/admin/addProduct/addProduct.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_admin_add_product_service__WEBPACK_IMPORTED_MODULE_3__["AddProductService"]])
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/admin/index/indexAdmin.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/admin/index/indexAdmin.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\r\n * Sidebar\r\n */\n.sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  /* Behind the navbar */\n  padding: 48px 0 0;\n  /* Height of navbar */\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1); }\n.sidebar-sticky {\n  position: relative;\n  top: 0;\n  height: calc(100vh - 48px);\n  padding-top: .5rem;\n  padding-bottom: 2rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n  /* Scrollable contents if viewport is shorter than content. */ }\n.sidebar-sticky .version {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    text-align: center;\n    opacity: .8;\n    line-height: 2; }\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  .sidebar-sticky {\n    position: -webkit-sticky;\n    position: sticky; } }\n.sidebar .nav-link {\n  font-weight: 500;\n  color: #333; }\n.sidebar .nav-link.active {\n  color: #007bff; }\n.sidebar-heading {\n  font-size: .75rem;\n  text-transform: uppercase; }\n/*\r\n * Content\r\n */\n[role=\"main\"] {\n  padding-top: 133px;\n  /* Space for fixed navbar */ }\n@media (min-width: 768px) {\n  [role=\"main\"] {\n    padding-top: 48px;\n    /* Space for fixed navbar */ } }\n/*\r\n * Navbar\r\n */\n.navbar-brand {\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n  font-size: 1rem;\n  background-color: rgba(0, 0, 0, 0.25);\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25); }\n.navbar .form-control {\n  padding: .75rem 1rem;\n  border-width: 0;\n  border-radius: 0; }\n.card-img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 250px;\n  height: 250px; }\n.btn-color-se {\n  background-color: #6d41d0;\n  color: white;\n  border-radius: 20px;\n  height: 30px;\n  width: 100px; }\n.btn-style-se {\n  border-radius: 20px; }\n.text-description {\n  display: inline-block;\n  width: 250px;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis; }\n.text-title {\n  display: inline-block;\n  width: 300px;\n  font-size: 18px;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWRtaW4vaW5kZXgvQzpcXFVzZXJzXFxsYXJpYXNcXERvY3VtZW50c1xcR2lmdFNob3BcXFNTLlRlbXBsYXRlLkFwaVxcd3d3cm9vdFxcYW5ndWxhcl90ZW1wbGF0ZS1tYXN0ZXIvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcYWRtaW5cXGluZGV4XFxpbmRleEFkbWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9hZG1pbi9pbmRleC9pbmRleEFkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQ0VFO0FERUY7RUFDSSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsWUFBWTtFQUNaLHNCQUFBO0VBQ0EsaUJBQWlCO0VBQ2pCLHFCQUFBO0VBQ0EsNkNBQTRDLEVBQUE7QUFHaEQ7RUFDSSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNkRBQUEsRUFBOEQ7QUFSbEU7SUFVUSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjLEVBQUE7QUFJc0M7RUFDeEQ7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCLEVBQUEsRUFDbkI7QUFHTDtFQUNJLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7QUFHZjtFQUNJLGNBQWMsRUFBQTtBQUdsQjtFQUNJLGlCQUFpQjtFQUNqQix5QkFBeUIsRUFBQTtBQUk3Qjs7RUNSRTtBQUNGO0VEWUksa0JBQWtCO0VBQ2xCLDJCQUFBLEVBQTRCO0FBR2hDO0VDWEU7SURhTSxpQkFBaUI7SUFDakIsMkJBQUEsRUFBNEIsRUFDL0I7QUFJTDs7RUNiRTtBRGlCRjtFQUNJLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLHFDQUFvQztFQUNwQyw4Q0FBNkMsRUFBQTtBQUdqRDtFQUNJLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7QUFHcEI7RUFDSSxvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhLEVBQUE7QUFHakI7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWSxFQUFBO0FBR2hCO0VBQ0ksbUJBQW1CLEVBQUE7QUFHdkI7RUFDSSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsdUJBQXVCLEVBQUE7QUFHM0I7RUFDSSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWRtaW4vaW5kZXgvaW5kZXhBZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFNpZGViYXJcclxuICovXHJcblxyXG4uc2lkZWJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgLyogQmVoaW5kIHRoZSBuYXZiYXIgKi9cclxuICAgIHBhZGRpbmc6IDQ4cHggMCAwO1xyXG4gICAgLyogSGVpZ2h0IG9mIG5hdmJhciAqL1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMSk7XHJcbn1cclxuXHJcbi5zaWRlYmFyLXN0aWNreSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcclxuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIC8qIFNjcm9sbGFibGUgY29udGVudHMgaWYgdmlld3BvcnQgaXMgc2hvcnRlciB0aGFuIGNvbnRlbnQuICovXHJcbiAgICAudmVyc2lvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBvcGFjaXR5OiAuODtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjtcclxuICAgIH1cclxufVxyXG5cclxuQHN1cHBvcnRzICgocG9zaXRpb246IC13ZWJraXQtc3RpY2t5KSBvciAocG9zaXRpb246IHN0aWNreSkpIHtcclxuICAgIC5zaWRlYmFyLXN0aWNreSB7XHJcbiAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtbGluayB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtbGluay5hY3RpdmUge1xyXG4gICAgY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAuNzVyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5cclxuLypcclxuICogQ29udGVudFxyXG4gKi9cclxuXHJcbltyb2xlPVwibWFpblwiXSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTMzcHg7XHJcbiAgICAvKiBTcGFjZSBmb3IgZml4ZWQgbmF2YmFyICovXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgW3JvbGU9XCJtYWluXCJdIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNDhweDtcclxuICAgICAgICAvKiBTcGFjZSBmb3IgZml4ZWQgbmF2YmFyICovXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKlxyXG4gKiBOYXZiYXJcclxuICovXHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICAgIHBhZGRpbmctdG9wOiAuNzVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMjUpO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMjUpO1xyXG59XHJcblxyXG4ubmF2YmFyIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgcGFkZGluZzogLjc1cmVtIDFyZW07XHJcbiAgICBib3JkZXItd2lkdGg6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uY2FyZC1pbWcge1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG59XHJcblxyXG4uYnRuLWNvbG9yLXNlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZDQxZDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4uYnRuLXN0eWxlLXNlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi50ZXh0LWRlc2NyaXB0aW9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLnRleHQtdGl0bGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59IiwiLypcclxuICogU2lkZWJhclxyXG4gKi9cbi5zaWRlYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAwO1xuICAvKiBCZWhpbmQgdGhlIG5hdmJhciAqL1xuICBwYWRkaW5nOiA0OHB4IDAgMDtcbiAgLyogSGVpZ2h0IG9mIG5hdmJhciAqL1xuICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgMCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cblxuLnNpZGViYXItc3RpY2t5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpO1xuICBwYWRkaW5nLXRvcDogLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIC8qIFNjcm9sbGFibGUgY29udGVudHMgaWYgdmlld3BvcnQgaXMgc2hvcnRlciB0aGFuIGNvbnRlbnQuICovIH1cbiAgLnNpZGViYXItc3RpY2t5IC52ZXJzaW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG9wYWNpdHk6IC44O1xuICAgIGxpbmUtaGVpZ2h0OiAyOyB9XG5cbkBzdXBwb3J0cyAocG9zaXRpb246IC13ZWJraXQtc3RpY2t5KSBvciAocG9zaXRpb246IHN0aWNreSkge1xuICAuc2lkZWJhci1zdGlja3kge1xuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgICBwb3NpdGlvbjogc3RpY2t5OyB9IH1cblxuLnNpZGViYXIgLm5hdi1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMzMzM7IH1cblxuLnNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDA3YmZmOyB9XG5cbi5zaWRlYmFyLWhlYWRpbmcge1xuICBmb250LXNpemU6IC43NXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuXG4vKlxyXG4gKiBDb250ZW50XHJcbiAqL1xuW3JvbGU9XCJtYWluXCJdIHtcbiAgcGFkZGluZy10b3A6IDEzM3B4O1xuICAvKiBTcGFjZSBmb3IgZml4ZWQgbmF2YmFyICovIH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIFtyb2xlPVwibWFpblwiXSB7XG4gICAgcGFkZGluZy10b3A6IDQ4cHg7XG4gICAgLyogU3BhY2UgZm9yIGZpeGVkIG5hdmJhciAqLyB9IH1cblxuLypcclxuICogTmF2YmFyXHJcbiAqL1xuLm5hdmJhci1icmFuZCB7XG4gIHBhZGRpbmctdG9wOiAuNzVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjI1KTsgfVxuXG4ubmF2YmFyIC5mb3JtLWNvbnRyb2wge1xuICBwYWRkaW5nOiAuNzVyZW0gMXJlbTtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBib3JkZXItcmFkaXVzOiAwOyB9XG5cbi5jYXJkLWltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMjUwcHg7IH1cblxuLmJ0bi1jb2xvci1zZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZDQxZDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTAwcHg7IH1cblxuLmJ0bi1zdHlsZS1zZSB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7IH1cblxuLnRleHQtZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyNTBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuXG4udGV4dC10aXRsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMwMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/admin/index/indexAdmin.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/admin/index/indexAdmin.component.ts ***!
  \***********************************************************************/
/*! exports provided: IndexAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexAdminComponent", function() { return IndexAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_admin_delete_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/admin/delete-product.service */ "./src/app/services/admin/delete-product.service.ts");






var IndexAdminComponent = /** @class */ (function () {
    function IndexAdminComponent(_productSvc, _deleteSvc, _auth, _authState) {
        this._productSvc = _productSvc;
        this._deleteSvc = _deleteSvc;
        this._auth = _auth;
        this._authState = _authState;
        this.isProductsEmpty = true;
        if (this.products) {
            this.isProductsEmpty = false;
        }
        else {
            this.isProductsEmpty = true;
        }
    }
    IndexAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productSvc.loadProducts().subscribe(function () {
            try {
                _this.products = _this._productSvc.products;
                _this.setCategoriesList();
                if (_this.products.length === 0) {
                    _this.isProductsEmpty = true;
                }
                else {
                    _this.isProductsEmpty = false;
                }
            }
            catch (ex) {
                _this.isProductsEmpty = true;
            }
        });
        try {
            this._auth.getAuthInfo().subscribe(function (data) {
                console.log(data);
                //this.isLogged=true;
            }, function (err) {
                //this._error.handle(err);
                // this._auth.getAuthInfo().subscribe(data => {
                //     console.log(data);
                //   });
            });
        }
        catch (ex) {
        }
    };
    IndexAdminComponent.prototype.setCategoriesList = function () {
        var catList = [];
        this.products.forEach(function (cp, index) {
            catList[index] = cp.category;
        });
        //NON REPEATED ITEMS
        var dataArr = new Set(catList);
        this.categoriesList = dataArr;
    };
    IndexAdminComponent.prototype.filterByCategory = function (e) {
        var category = e.target.text.replace("(current)", "");
        category = category.substring(1, category.length - 1);
        this.products = this._productSvc.getProductsByCategory(category);
    };
    IndexAdminComponent.prototype.listAll = function () {
        this.products = this._productSvc.getProducts();
        if (this.products)
            this.isProductsEmpty = false;
        else
            this.isProductsEmpty = true;
    };
    IndexAdminComponent.prototype.onSearchForProduct = function () {
        try {
            this.products = this._productSvc.getProductsByName(this.searchBar);
            if (this.products.length === 0)
                this.isProductsEmpty = true;
            else
                this.isProductsEmpty = false;
        }
        catch (ex) {
            this.isProductsEmpty = true;
        }
    };
    IndexAdminComponent.prototype.onDeleteProduct = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#28a745',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.isConfirmed) {
                _this._deleteSvc.deleteProduct(id).subscribe(function (res) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Deleted!', 'Your file has been deleted.', 'success');
                    window.location.reload();
                }, function (err) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Something went wrong!', 'Your file has not been deleted.', 'error');
                });
            }
        });
    };
    IndexAdminComponent.ctorParameters = function () { return [
        { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] },
        { type: _services_admin_delete_product_service__WEBPACK_IMPORTED_MODULE_5__["DeleteProductService"] },
        { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthState"] }
    ]; };
    IndexAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-indexadmin',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./indexAdmin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/admin/index/indexAdmin.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./indexAdmin.component.scss */ "./src/app/shared/components/admin/index/indexAdmin.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"], _services_admin_delete_product_service__WEBPACK_IMPORTED_MODULE_5__["DeleteProductService"],
            src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthState"]])
    ], IndexAdminComponent);
    return IndexAdminComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/admin/login/loginAdmin.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/admin/login/loginAdmin.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-gradiant {\n  background: #22c1c3;\n  background: linear-gradient(0deg, #22c1c3 0%, #f22dfd 100%);\n  min-height: 100vh; }\n\n.btn-grad {\n  background-image: linear-gradient(to right, #DA22FF 0%, #9733EE 51%, #DA22FF 100%); }\n\n.btn-grad {\n  margin: 10px;\n  padding: 15px 45px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: 0.5s;\n  background-size: 200% auto;\n  color: white;\n  box-shadow: 0 0 20px #eee;\n  border-radius: 10px;\n  display: block;\n  font-weight: bold; }\n\n.btn-grad:hover {\n  background-position: right center;\n  /* change the direction of the change here */\n  color: #fff;\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWRtaW4vbG9naW4vQzpcXFVzZXJzXFxsYXJpYXNcXERvY3VtZW50c1xcR2lmdFNob3BcXFNTLlRlbXBsYXRlLkFwaVxcd3d3cm9vdFxcYW5ndWxhcl90ZW1wbGF0ZS1tYXN0ZXIvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcYWRtaW5cXGxvZ2luXFxsb2dpbkFkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQTZCO0VBQzdCLDJEQUF1RjtFQUN2RixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxrRkFBa0YsRUFBQTs7QUFHdEY7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksaUNBQWlDO0VBQ2pDLDRDQUFBO0VBQ0EsV0FBVztFQUNYLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWRtaW4vbG9naW4vbG9naW5BZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZ3JhZGlhbnQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDM0LCAxOTMsIDE5NSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgzNCwgMTkzLCAxOTUsIDEpIDAlLCByZ2JhKDI0MiwgNDUsIDI1MywgMSkgMTAwJSk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmJ0bi1ncmFkIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0RBMjJGRiAwJSwgIzk3MzNFRSA1MSUsICNEQTIyRkYgMTAwJSlcclxufVxyXG5cclxuLmJ0bi1ncmFkIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHBhZGRpbmc6IDE1cHggNDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAjZWVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5idG4tZ3JhZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XHJcbiAgICAvKiBjaGFuZ2UgdGhlIGRpcmVjdGlvbiBvZiB0aGUgY2hhbmdlIGhlcmUgKi9cclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/shared/components/admin/login/loginAdmin.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/admin/login/loginAdmin.component.ts ***!
  \***********************************************************************/
/*! exports provided: LoginAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAdminComponent", function() { return LoginAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var LoginAdminComponent = /** @class */ (function () {
    function LoginAdminComponent(_auth, _authState, _route) {
        this._auth = _auth;
        this._authState = _authState;
        this._route = _route;
        this.creds = {
            FirstName: "",
            LastName: "",
            Email: "",
            Password: ""
        };
    }
    LoginAdminComponent.prototype.ngOnInit = function () {
    };
    LoginAdminComponent.prototype.onLogin = function () {
        var _this = this;
        console.log(this.creds);
        this._auth.login(this.creds).subscribe(function (res) {
            console.log(res);
            var user = {
                id: res.user.id,
                email: res.user.email,
                name: res.user.email,
                roles: res.role,
                expiresIn: 0
            };
            if (user.roles[0] == 'Admin') {
                _this._authState.set(user);
                _this._auth.isAuthenticated().subscribe(function (res) { return console.log(res); });
                _this._auth.getAuthInfo().subscribe(function (res) {
                    console.log(res);
                    _this._route.navigateByUrl('/index');
                }, function (err) { return console.log(err); });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    icon: 'error',
                    title: 'User not authorized',
                    heightAuto: true,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }, function (err) {
            alert('Err ' + err);
        });
    };
    LoginAdminComponent.ctorParameters = function () { return [
        { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthState"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LoginAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loginadmin',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loginAdmin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/admin/login/loginAdmin.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loginAdmin.component.scss */ "./src/app/shared/components/admin/login/loginAdmin.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthState"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginAdminComponent);
    return LoginAdminComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/admin/modifyProduct/modifyProduct.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/admin/modifyProduct/modifyProduct.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input-style {\n  width: 500px; }\n\n.card-img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 250px;\n  height: 250px;\n  border-radius: 20px; }\n\n.btn-style {\n  border-radius: 20px;\n  font-weight: bold; }\n\n.input-wrapper {\n  position: relative;\n  width: 271px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWRtaW4vbW9kaWZ5UHJvZHVjdC9DOlxcVXNlcnNcXGxhcmlhc1xcRG9jdW1lbnRzXFxHaWZ0U2hvcFxcU1MuVGVtcGxhdGUuQXBpXFx3d3dyb290XFxhbmd1bGFyX3RlbXBsYXRlLW1hc3Rlci9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxhZG1pblxcbW9kaWZ5UHJvZHVjdFxcbW9kaWZ5UHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9hZG1pbi9tb2RpZnlQcm9kdWN0L21vZGlmeVByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtc3R5bGUge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4uY2FyZC1pbWcge1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmJ0bi1zdHlsZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5pbnB1dC13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAyNzFweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/admin/modifyProduct/modifyProduct.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/admin/modifyProduct/modifyProduct.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ModifyProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyProductComponent", function() { return ModifyProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_admin_update_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/admin/update-product.service */ "./src/app/services/admin/update-product.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






var ModifyProductComponent = /** @class */ (function () {
    function ModifyProductComponent(_productSvc, _activatedRouter, _updateSvc) {
        this._productSvc = _productSvc;
        this._activatedRouter = _activatedRouter;
        this._updateSvc = _updateSvc;
    }
    ModifyProductComponent.prototype.ngOnInit = function () {
        this.id = +this._activatedRouter.snapshot.params.id;
        this.product = this._productSvc.getProductById(this.id);
    };
    ModifyProductComponent.prototype.onModifyProduct = function () {
        this._updateSvc.putProduct(this.product).subscribe(function (res) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                icon: 'success',
                title: 'Your product has been added',
                showConfirmButton: false,
                timer: 1500
            });
        }, function (err) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                icon: 'error',
                title: 'Your product has not been added',
                showConfirmButton: false,
                timer: 1500
            });
        });
    };
    ModifyProductComponent.ctorParameters = function () { return [
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_admin_update_product_service__WEBPACK_IMPORTED_MODULE_4__["UpdateProductService"] }
    ]; };
    ModifyProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modifyproduct',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modifyProduct.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/admin/modifyProduct/modifyProduct.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modifyProduct.component.scss */ "./src/app/shared/components/admin/modifyProduct/modifyProduct.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_admin_update_product_service__WEBPACK_IMPORTED_MODULE_4__["UpdateProductService"]])
    ], ModifyProductComponent);
    return ModifyProductComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/admin/navbar/navbarAdmin.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/admin/navbar/navbarAdmin.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg-style {\n  height: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWRtaW4vbmF2YmFyL0M6XFxVc2Vyc1xcbGFyaWFzXFxEb2N1bWVudHNcXEdpZnRTaG9wXFxTUy5UZW1wbGF0ZS5BcGlcXHd3d3Jvb3RcXGFuZ3VsYXJfdGVtcGxhdGUtbWFzdGVyL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGFkbWluXFxuYXZiYXJcXG5hdmJhckFkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWRtaW4vbmF2YmFyL25hdmJhckFkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLXN0eWxlIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/admin/navbar/navbarAdmin.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/admin/navbar/navbarAdmin.component.ts ***!
  \*************************************************************************/
/*! exports provided: NavbarAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarAdminComponent", function() { return NavbarAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");




var NavbarAdminComponent = /** @class */ (function () {
    function NavbarAdminComponent(_authSvc, _route, _authState) {
        this._authSvc = _authSvc;
        this._route = _route;
        this._authState = _authState;
    }
    NavbarAdminComponent.prototype.onLogOut = function () {
        this._authSvc.logOut();
    };
    NavbarAdminComponent.ctorParameters = function () { return [
        { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthState"] }
    ]; };
    NavbarAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbaradmin',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbarAdmin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/admin/navbar/navbarAdmin.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbarAdmin.component.scss */ "./src/app/shared/components/admin/navbar/navbarAdmin.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthState"]])
    ], NavbarAdminComponent);
    return NavbarAdminComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/admin/ordersHistory/ordersHistory.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/admin/ordersHistory/ordersHistory.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2FkbWluL29yZGVyc0hpc3Rvcnkvb3JkZXJzSGlzdG9yeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/components/admin/ordersHistory/ordersHistory.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/admin/ordersHistory/ordersHistory.component.ts ***!
  \**********************************************************************************/
/*! exports provided: OrdersHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersHistoryComponent", function() { return OrdersHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrdersHistoryComponent = /** @class */ (function () {
    function OrdersHistoryComponent() {
    }
    OrdersHistoryComponent.prototype.ngOnInit = function () {
    };
    OrdersHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ordershistory',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ordersHistory.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/admin/ordersHistory/ordersHistory.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ordersHistory.component.scss */ "./src/app/shared/components/admin/ordersHistory/ordersHistory.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrdersHistoryComponent);
    return OrdersHistoryComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/card/card-animation.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/card/card-animation.ts ***!
  \**********************************************************/
/*! exports provided: cardToggle, cardClose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardToggle", function() { return cardToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardClose", function() { return cardClose; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");


var cardToggle = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('cardToggle', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        overflow: 'hidden',
        height: '0px',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        height: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AUTO_STYLE"],
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('collapsed <=> expanded', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')
    ])
]);
var cardClose = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('cardClose', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: 1
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: 0,
        display: 'none'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open <=> closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms')),
]);


/***/ }),

/***/ "./src/app/shared/components/card/card.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shared/components/card/card.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-header-right {\n    z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1oZWFkZXItcmlnaHQge1xuICAgIHotaW5kZXg6IDk5OTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/card/card.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/card/card.component.ts ***!
  \**********************************************************/
/*! exports provided: CardTitleDirective, CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTitleDirective", function() { return CardTitleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _card_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-animation */ "./src/app/shared/components/card/card-animation.ts");



var CardTitleDirective = /** @class */ (function () {
    function CardTitleDirective(templateRef) {
        this.templateRef = templateRef;
    }
    CardTitleDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
    ]; };
    CardTitleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: 'ng-template[appCardTitle]' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
    ], CardTitleDirective);
    return CardTitleDirective;
}());

var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.classHeader = false;
        this.isCardToggled = false;
        this.setCollapsed(false);
        this.setFullScreen(false);
        this.loading = false;
    }
    Object.defineProperty(CardComponent.prototype, "fullScreen", {
        get: function () {
            return this._fullScreen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardComponent.prototype, "fullScreenClass", {
        get: function () {
            return this._fullScreenClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardComponent.prototype, "fullScreenIcon", {
        get: function () {
            return this._fullScreenIcon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardComponent.prototype, "loading", {
        get: function () {
            return this._loading;
        },
        set: function (value) {
            this._loading = value;
            this._loadingClass = value ? 'card-load' : '';
            this.open();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardComponent.prototype, "loadingClass", {
        get: function () {
            return this._loadingClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardComponent.prototype, "closed", {
        get: function () {
            return this._closed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardComponent.prototype, "closedClass", {
        get: function () {
            return this._closedClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardComponent.prototype, "collapsed", {
        get: function () {
            return this._collapsed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardComponent.prototype, "collapsedClass", {
        get: function () {
            return this._collapsedClass;
        },
        enumerable: true,
        configurable: true
    });
    CardComponent.prototype.ngAfterContentChecked = function () {
        this.titleTpl = this.titleTpls.first;
    };
    CardComponent.prototype.toggle = function () {
        this.setCollapsed(!this.collapsed);
        // this.cardToggle = this.cardToggle === 'collapsed' ? 'expanded' : 'collapsed';
    };
    CardComponent.prototype.close = function () {
        this.setClosed(true);
        // this.cardClose = this.cardClose === 'closed' ? 'open' : 'closed';
    };
    CardComponent.prototype.open = function () {
        this.setClosed(false);
    };
    CardComponent.prototype.toggleFullScreen = function () {
        this.setFullScreen(!this.fullScreen);
    };
    /*
      cardRefresh() {
        this.loading = true;
        this.cardLoad = 'card-load';
        setTimeout(() => {
          this.cardLoad = '';
          this.loading = false;
        }, 3000);
      }
    */
    CardComponent.prototype.setFullScreen = function (value) {
        this._fullScreen = value;
        this._fullScreenClass = value ? 'full-card' : '';
        this._fullScreenIcon = value ? 'icofont-resize' : '';
    };
    CardComponent.prototype.setClosed = function (value) {
        this._closed = value;
        this._closedClass = value ? 'closed' : 'open';
    };
    CardComponent.prototype.setCollapsed = function (value) {
        this._collapsed = value;
        this._collapsedClass = value ? 'collapsed' : 'expanded';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardComponent.prototype, "headerContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardComponent.prototype, "blockClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardComponent.prototype, "cardClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardComponent.prototype, "classHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(CardTitleDirective, { descendants: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], CardComponent.prototype, "titleTpls", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], CardComponent.prototype, "loading", null);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/card/card.component.html")).default,
            animations: [_card_animation__WEBPACK_IMPORTED_MODULE_2__["cardToggle"], _card_animation__WEBPACK_IMPORTED_MODULE_2__["cardClose"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card.component.css */ "./src/app/shared/components/card/card.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/cart/cart.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/components/cart/cart.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-color {\n  background-color: #41a9d0;\n  color: white;\n  border-radius: 20px;\n  height: 50px;\n  width: 150px; }\n\n.btn-color-se {\n  background-color: #6d41d0;\n  color: white;\n  border-radius: 20px;\n  height: 50px;\n  width: 150px; }\n\n.header-style {\n  font-size: 22px;\n  background-color: #91588e;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2FydC9DOlxcVXNlcnNcXGxhcmlhc1xcRG9jdW1lbnRzXFxHaWZ0U2hvcFxcU1MuVGVtcGxhdGUuQXBpXFx3d3dyb290XFxhbmd1bGFyX3RlbXBsYXRlLW1hc3Rlci9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxjYXJ0XFxjYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFHaEI7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUdoQjtFQUNJLGVBQWU7RUFDZix5QkFBbUM7RUFDbkMsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1jb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDFhOWQwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLmJ0bi1jb2xvci1zZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQ0MWQwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLmhlYWRlci1zdHlsZSB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ1LCA4OCwgMTQyKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/cart/cart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/cart/cart.component.ts ***!
  \**********************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var CartComponent = /** @class */ (function () {
    function CartComponent(_productSvc, _cartSvc, _auth, _router) {
        this._productSvc = _productSvc;
        this._cartSvc = _cartSvc;
        this._auth = _auth;
        this._router = _router;
        this.clickCount = 0;
        this.clickCountExpress = 1;
        this.isLogged = false;
        this.creds = {
            street: "",
            city: "",
            region: "",
            zipCode: "",
            telephone: ""
        };
        this.cartProducts = this._cartSvc.order.items;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subtotal = this._cartSvc.order.subtotal;
        this.total = this.subtotal += 6.99;
        this._cartSvc.total = this.total;
        try {
            this._auth.getAuthInfo().subscribe(function (data) {
                console.log(data);
                _this.isLogged = true;
            }, function (err) {
                //this._error.handle(err);
                // this._auth.getAuthInfo().subscribe(data => {
                //     console.log(data);
                //   });
            });
        }
        catch (ex) {
        }
    };
    CartComponent.prototype.onStandard = function () {
        this.clickCountExpress = 0;
        if (this.clickCount < 1) {
            this.total -= 2;
            this._cartSvc.total = this.total;
        }
        this.clickCount++;
    };
    CartComponent.prototype.onExpress = function () {
        this.clickCount = 0;
        if (this.clickCountExpress < 1) {
            this.total += 2;
            this._cartSvc.total = this.total;
        }
        this.clickCountExpress++;
    };
    CartComponent.prototype.onCheckout = function () {
    };
    CartComponent.ctorParameters = function () { return [
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] },
        { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
        { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/cart/cart.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.component.scss */ "./src/app/shared/components/cart/cart.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
            src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/checkout/checkout.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/checkout/checkout.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-color {\n  background-color: #6d41d0;\n  color: white;\n  border-radius: 20px;\n  height: 50px;\n  width: 150px;\n  font-weight: bold; }\n\n.footer-style {\n  position: relative;\n  margin-top: 15%;\n  bottom: 0;\n  left: 0;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2hlY2tvdXQvQzpcXFVzZXJzXFxsYXJpYXNcXERvY3VtZW50c1xcR2lmdFNob3BcXFNTLlRlbXBsYXRlLkFwaVxcd3d3cm9vdFxcYW5ndWxhcl90ZW1wbGF0ZS1tYXN0ZXIvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcY2hlY2tvdXRcXGNoZWNrb3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWNvbG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZDQxZDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5mb290ZXItc3R5bGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogMTUlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/shared/components/checkout/checkout.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/checkout/checkout.component.ts ***!
  \******************************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");







var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(_http, _cartSvc, _router, _auth) {
        this._http = _http;
        this._cartSvc = _cartSvc;
        this._router = _router;
        this._auth = _auth;
        this.creds = {
            street: "",
            city: "",
            region: "",
            zipCode: "",
            telephone: "",
            FirstName: "",
            LastName: ""
        };
        this.customers = [];
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    CheckoutComponent.prototype.onCheckout = function () {
        var _this = this;
        if (this.isLogged) {
            console.log("in checkout component");
            try {
                this._auth.getAuthInfo().subscribe(function (data) {
                    console.log(data);
                    _this.isLogged = true;
                    // this.oneCustomer = this.customers.find(c=>c.email.includes(data.email));
                    // console.log(this.oneCustomer)
                    var order = _this._cartSvc.getOrder();
                    var newCustomer = {
                        name: _this.creds.FirstName + " " + _this.creds.LastName,
                        city: _this.creds.city,
                        orderTotal: _this._cartSvc.total,
                        status: 1,
                        dateCreated: new Date(),
                        dateUpdated: new Date(),
                        email: data.email
                    };
                    order.customer = newCustomer;
                    console.log("SE imprimió la order: ", order.customer);
                    _this._cartSvc.postOrder(order).subscribe(function (res) {
                        console.log("Salió bien ", res);
                    }, function (err) { console.log("Salió mal"); });
                }, function (err) {
                    //this._error.handle(err);
                    // this._auth.getAuthInfo().subscribe(data => {
                    //     console.log(data);
                    //   });
                });
            }
            catch (ex) {
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: 'warning',
                title: 'You need to login first',
                heightAuto: true,
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(function () {
                _this._router.navigateByUrl("/login");
            }, 1500);
        }
    };
    CheckoutComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CheckoutComponent.prototype, "isLogged", void 0);
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/checkout/checkout.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checkout.component.scss */ "./src/app/shared/components/checkout/checkout.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/datepicker/datepicker.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/datepicker/datepicker.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".datepicker .clear-btn {\n  position: absolute;\n  right: 2rem;\n  line-height: 2;\n  z-index: 1000;\n  display: none; }\n\n.datepicker.clearable .clear-btn {\n  display: block; }\n\n.datepicker.clearable > input {\n  padding-right: 36px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9DOlxcVXNlcnNcXGxhcmlhc1xcRG9jdW1lbnRzXFxHaWZ0U2hvcFxcU1MuVGVtcGxhdGUuQXBpXFx3d3dyb290XFxhbmd1bGFyX3RlbXBsYXRlLW1hc3Rlci9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxkYXRlcGlja2VyXFxkYXRlcGlja2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsYUFBYTtFQUNiLGFBQWEsRUFBQTs7QUFOakI7RUFVTSxjQUFjLEVBQUE7O0FBVnBCO0VBYU0sbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0ZXBpY2tlciB7XG4gIC5jbGVhci1idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMjtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgJi5jbGVhcmFibGUge1xuICAgIC5jbGVhci1idG4ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgICYgPiBpbnB1dCB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/shared/components/datepicker/datepicker.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/datepicker/datepicker.component.ts ***!
  \**********************************************************************/
/*! exports provided: DatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerComponent", function() { return DatepickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");




var DatepickerComponent = /** @class */ (function () {
    // private _onValidatorChanged = () => { };
    function DatepickerComponent(_element, _ngbDateAdapter) {
        this._element = _element;
        this._ngbDateAdapter = _ngbDateAdapter;
        this.inputId = "datepicker-" + new Date().getTime();
        this.clearable = true;
        this.disabled = false;
        // CONTROL VALUE ACCESSOR FUNCTIONS
        this._onChange = function (_) { };
        this._onTouched = function () { };
    }
    DatepickerComponent_1 = DatepickerComponent;
    Object.defineProperty(DatepickerComponent.prototype, "maxDate", {
        set: function (value) {
            this.dateInput.maxDate = this._ngbDateAdapter.fromModel(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatepickerComponent.prototype, "minDate", {
        set: function (value) {
            this.dateInput.minDate = this._ngbDateAdapter.fromModel(value);
        },
        enumerable: true,
        configurable: true
    });
    // ControlValueAccessor members
    DatepickerComponent.prototype.writeValue = function (dateValue) {
        // this._onChange(dateValue);
        this.dateInput.writeValue(dateValue);
    };
    DatepickerComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
        this.dateInput.registerOnChange(fn);
    };
    DatepickerComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
        // this.dateInput.registerOnTouched(fn);
    };
    DatepickerComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.dateInput.setDisabledState(isDisabled);
    };
    DatepickerComponent.prototype.registerOnValidatorChange = function (fn) {
        // this._onValidatorChanged = fn;
        this.dateInput.registerOnValidatorChange(fn);
    };
    // End ControlValueAccessor members
    DatepickerComponent.prototype.ngOnChanges = function (changes) {
        if (changes['minDate'] || changes['maxDate']) {
            // this._onValidatorChanged();
            this.dateInput.ngOnChanges(changes);
        }
    };
    DatepickerComponent.prototype.validate = function (c) {
        return this.dateInput.validate(c);
    };
    DatepickerComponent.prototype.onDatePickerOutsideClick = function (event) {
        var dateIsOpen = this.dateInput.isOpen();
        if (dateIsOpen) {
            if (!this.containsElement(event.target)) {
                this.dateInput.close();
            }
        }
    };
    DatepickerComponent.prototype.onFocus = function () {
        this._onTouched();
        this.dateInput.toggle();
    };
    DatepickerComponent.prototype.clear = function () {
        this._onChange(null);
        this.dateInput.writeValue(null);
    };
    DatepickerComponent.prototype.containsElement = function (target) {
        if (this._element && this._element.nativeElement && this._element.nativeElement.contains(target)) {
            return true;
        }
        if (this.dateInput.container === 'body') {
            var dateInput = this.dateInput;
            if (dateInput._cRef.location.nativeElement.contains(target)) {
                return true;
            }
        }
        return false;
    };
    var DatepickerComponent_1;
    DatepickerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDateAdapter"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DatepickerComponent.prototype, "inputId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('maxDate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], DatepickerComponent.prototype, "maxDate", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('minDate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], DatepickerComponent.prototype, "minDate", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DatepickerComponent.prototype, "clearable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbInputDatepicker"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbInputDatepicker"])
    ], DatepickerComponent.prototype, "dateInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DatepickerComponent.prototype, "onDatePickerOutsideClick", null);
    DatepickerComponent = DatepickerComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-datepicker',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./datepicker.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/datepicker/datepicker.component.html")).default,
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return DatepickerComponent_1; }),
                    multi: true
                },
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return DatepickerComponent_1; }),
                    multi: true
                }
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./datepicker.component.scss */ "./src/app/shared/components/datepicker/datepicker.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDateAdapter"]])
    ], DatepickerComponent);
    return DatepickerComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/datetimepicker/datetimepicker.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/datetimepicker/datetimepicker.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RhdGV0aW1lcGlja2VyL2RhdGV0aW1lcGlja2VyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/components/datetimepicker/datetimepicker.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/datetimepicker/datetimepicker.component.ts ***!
  \******************************************************************************/
/*! exports provided: DatetimepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatetimepickerComponent", function() { return DatetimepickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../datepicker/datepicker.component */ "./src/app/shared/components/datepicker/datepicker.component.ts");






var DatetimepickerComponent = /** @class */ (function () {
    function DatetimepickerComponent() {
        this.inputId = "datetimepicker-" + new Date().getTime();
        this.clearable = true;
        this.disabled = false;
    }
    DatetimepickerComponent_1 = DatetimepickerComponent;
    // CONTROL VALUE ACCESSOR FUNCTIONS
    // private _onChange = (_: any) => { };
    // private _onValidatorChanged = () => { };
    DatetimepickerComponent.prototype.ngOnInit = function () {
        this.timeInput.writeValue({ hour: 0, minute: 0, second: 0 });
    };
    // ControlValueAccessor members
    DatetimepickerComponent.prototype.writeValue = function (value) {
        this.dateInput.writeValue(value);
        if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isDate"])(value)) {
            var time = {
                hour: value.getHours(),
                minute: value.getMinutes(),
                second: value.getSeconds()
            };
            this.timeInput.writeValue(time);
            this._date = value;
        }
    };
    DatetimepickerComponent.prototype.registerOnChange = function (fn) {
        var _this = this;
        var valueChanged = function () {
            if (_this._date) {
                if (_this._time) {
                    _this._date.setHours(_this._time.hour, _this._time.minute, _this._time.second, 0);
                }
            }
            fn(_this._date);
        };
        this.dateInput.registerOnChange(function (value) {
            _this._date = value;
            valueChanged();
        });
        this.timeInput.registerOnChange(function (value) {
            _this._time = value;
            valueChanged();
        });
    };
    DatetimepickerComponent.prototype.registerOnTouched = function (fn) {
        this.dateInput.registerOnTouched(fn);
        this.timeInput.registerOnTouched(fn);
    };
    DatetimepickerComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.dateInput.setDisabledState(isDisabled);
        this.timeInput.setDisabledState(isDisabled);
    };
    DatetimepickerComponent.prototype.registerOnValidatorChange = function (fn) {
        // this._onValidatorChanged = fn;
        this.dateInput.registerOnValidatorChange(fn);
    };
    // End ControlValueAccessor members
    DatetimepickerComponent.prototype.validate = function (c) {
        return this.dateInput.validate(c);
    };
    var DatetimepickerComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DatetimepickerComponent.prototype, "inputId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DatetimepickerComponent.prototype, "maxDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DatetimepickerComponent.prototype, "minDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DatetimepickerComponent.prototype, "clearable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__["DatepickerComponent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__["DatepickerComponent"])
    ], DatetimepickerComponent.prototype, "dateInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTimepicker"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTimepicker"])
    ], DatetimepickerComponent.prototype, "timeInput", void 0);
    DatetimepickerComponent = DatetimepickerComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-datetimepicker',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./datetimepicker.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/datetimepicker/datetimepicker.component.html")).default,
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return DatetimepickerComponent_1; }),
                    multi: true
                },
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return DatetimepickerComponent_1; }),
                    multi: true
                }
            ],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./datetimepicker.component.scss */ "./src/app/shared/components/datetimepicker/datetimepicker.component.scss")).default]
        })
    ], DatetimepickerComponent);
    return DatetimepickerComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/file/file.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/components/file/file.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZpbGUvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/components/file/file.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/file/file.component.ts ***!
  \**********************************************************/
/*! exports provided: FileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileComponent", function() { return FileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var FileComponent = /** @class */ (function () {
    function FileComponent() {
        this.id = "file-input-" + new Date().getTime();
        this.filename = null;
        this._onChange = function (_) { };
    }
    FileComponent_1 = FileComponent;
    Object.defineProperty(FileComponent.prototype, "accept", {
        set: function (value) {
            if (typeof value === 'string') {
                this.fileInput.nativeElement.accept = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    FileComponent.prototype.emitFiles = function (event) {
        var file = event && event.item(0);
        this.filename = file.name;
        this._onChange(file);
    };
    FileComponent.prototype.writeValue = function (value) {
        // clear file input
        this.fileInput.nativeElement.value = '';
        this.filename = null;
    };
    FileComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    FileComponent.prototype.registerOnTouched = function (fn) {
    };
    var FileComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], FileComponent.prototype, "accept", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FileComponent.prototype, "fileInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('change', ['$event.target.files']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [FileList]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], FileComponent.prototype, "emitFiles", null);
    FileComponent = FileComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./file.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/file/file.component.html")).default,
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return FileComponent_1; }),
                    multi: true
                }
            ],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./file.component.scss */ "./src/app/shared/components/file/file.component.scss")).default]
        })
    ], FileComponent);
    return FileComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/components/footer/footer.component.scss")).default]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/layout/layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/layout/layout.component.ts ***!
  \**************************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: '<router-outlet></router-outlet>'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/login/login.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/login/login.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-color {\n  background-color: #6d41d0;\n  color: white;\n  border-radius: 20px;\n  height: 50px;\n  width: 150px;\n  font-weight: bold; }\n\n.img-bg {\n  background-image: url('bg.jpg');\n  min-height: 100vh; }\n\n.bg-style {\n  height: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9naW4vQzpcXFVzZXJzXFxsYXJpYXNcXERvY3VtZW50c1xcR2lmdFNob3BcXFNTLlRlbXBsYXRlLkFwaVxcd3d3cm9vdFxcYW5ndWxhcl90ZW1wbGF0ZS1tYXN0ZXIvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSwrQkFBMEQ7RUFDMUQsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWNvbG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZDQxZDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5pbWctYmcge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvbG9naW4vYmcuanBnKTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uYmctc3R5bGUge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/login/login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_route, _auth, _authState) {
        this._route = _route;
        this._auth = _auth;
        this._authState = _authState;
        this.creds = {
            FirstName: '',
            LastName: '',
            Email: '',
            Password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        console.log(this.creds);
        this._auth.login(this.creds).subscribe(function (res) {
            console.log(res);
            var user = {
                id: res.user.id,
                email: res.user.email,
                name: res.user.email,
                roles: res.role,
                expiresIn: 0
            };
            _this._authState.set(user);
            _this._auth.isAuthenticated().subscribe(function (res) { return console.log(res); });
            _this._auth.getAuthInfo().subscribe(function (res) {
                console.log(res);
                _this._route.navigateByUrl('/');
            }, function (err) { return console.log(err); });
        }, function (err) {
            alert('Err ' + err);
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthState"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/login/login.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/shared/components/login/login.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthState"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/navbar/navbar.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/components/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(_authSvc) {
        this._authSvc = _authSvc;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        console.log(this.isLogged);
    };
    NavbarComponent.prototype.onLogOut = function () {
        this._authSvc.logOut();
        this.isLogged = false;
        window.location.reload();
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NavbarComponent.prototype, "isLogged", void 0);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/navbar/navbar.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/components/navbar/navbar.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/pagination/pagination.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/pagination/pagination.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pagination {\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9DOlxcVXNlcnNcXGxhcmlhc1xcRG9jdW1lbnRzXFxHaWZ0U2hvcFxcU1MuVGVtcGxhdGUuQXBpXFx3d3dyb290XFxhbmd1bGFyX3RlbXBsYXRlLW1hc3Rlci9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxwYWdpbmF0aW9uXFxwYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2luYXRpb24ge1xuICBtYXJnaW46IDA7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/pagination/pagination.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/pagination/pagination.component.ts ***!
  \**********************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(PaginationComponent.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (value) {
            this._page = value;
            if (value && value.total > 0) {
                this.from = (value.current - 1) * value.pageSize + 1;
                this.to = Math.min(value.current * value.pageSize, value.total);
            }
            else {
                this.from = 0;
                this.to = 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], PaginationComponent.prototype, "page", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaginationComponent.prototype, "pageChange", void 0);
    PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagination',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pagination.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/pagination/pagination.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pagination.component.scss */ "./src/app/shared/components/pagination/pagination.component.scss")).default]
        })
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/panel/panel.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/panel/panel.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  position: relative;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFuZWwvQzpcXFVzZXJzXFxsYXJpYXNcXERvY3VtZW50c1xcR2lmdFNob3BcXFNTLlRlbXBsYXRlLkFwaVxcd3d3cm9vdFxcYW5ndWxhcl90ZW1wbGF0ZS1tYXN0ZXIvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xccGFuZWxcXHBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhbmVsL3BhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/shared/components/panel/panel.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/panel/panel.component.ts ***!
  \************************************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PanelComponent = /** @class */ (function () {
    function PanelComponent() {
        this.loading = false;
        this.fixed = false;
        this.large = false;
    }
    PanelComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PanelComponent.prototype, "loading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PanelComponent.prototype, "fixed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PanelComponent.prototype, "large", void 0);
    PanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-panel',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/panel/panel.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./panel.component.scss */ "./src/app/shared/components/panel/panel.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PanelComponent);
    return PanelComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/product/product.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/product/product.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-product {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: auto;\n  height: 350px; }\n\n.btn-style {\n  border-radius: 20px; }\n\n.text-price-style {\n  font-size: 30px;\n  font-weight: bold;\n  color: #41a9d0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvZHVjdC9DOlxcVXNlcnNcXGxhcmlhc1xcRG9jdW1lbnRzXFxHaWZ0U2hvcFxcU1MuVGVtcGxhdGUuQXBpXFx3d3dyb290XFxhbmd1bGFyX3RlbXBsYXRlLW1hc3Rlci9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxwcm9kdWN0XFxwcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQUdqQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1wcm9kdWN0IHtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG59XHJcblxyXG4uYnRuLXN0eWxlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi50ZXh0LXByaWNlLXN0eWxlIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICM0MWE5ZDA7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/product/product.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/product/product.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");







var ProductComponent = /** @class */ (function () {
    function ProductComponent(_activatedRoute, _productService, _cartSvc, _auth, _router) {
        this._activatedRoute = _activatedRoute;
        this._productService = _productService;
        this._cartSvc = _cartSvc;
        this._auth = _auth;
        this._router = _router;
        this.hasInfo = false;
        this.isLogged = false;
        this.productImg = "";
        this.productName = "";
        this.productCategory = "";
        this.productDescription = "";
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        //CONVERTED TO NUMBER 
        this.id = +this._activatedRoute.snapshot.params.id;
        this._productService.getProductById(this.id).subscribe(function () {
            try {
                _this.product = _this._productService.singleProduct;
                _this.productName = _this.product[0].productName;
                _this.productDescription = _this.product[0].productDescription;
                _this.productCategory = _this.product[0].productCategory;
                _this.productImg = _this.product[0].productImg;
                _this.productPrice = _this.product[0].unitPrice;
                _this.hasInfo = true;
            }
            catch (ex) {
            }
        });
        try {
            this._auth.getAuthInfo().subscribe(function (data) {
                console.log(data);
                _this.isLogged = true;
            }, function (err) {
                //this._error.handle(err);
                // this._auth.getAuthInfo().subscribe(data => {
                //     console.log(data);
                //   });
            });
        }
        catch (ex) {
        }
    };
    ProductComponent.prototype.addToCart = function () {
        this._cartSvc.addToOrder(this.product[0]);
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Product added to cart',
            heightAuto: true,
            showConfirmButton: false,
            timer: 1500
        });
    };
    ProductComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] },
        { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
        { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-component',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/product/product.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product.component.scss */ "./src/app/shared/components/product/product.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/register/register.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/register/register.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-color {\n  background-color: #6d41d0;\n  color: white;\n  border-radius: 20px;\n  height: 50px;\n  width: 150px;\n  font-weight: bold; }\n\n.img-bg {\n  background-image: url('bg.jpg');\n  min-height: 100vh; }\n\n.bg-style {\n  height: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmVnaXN0ZXIvQzpcXFVzZXJzXFxsYXJpYXNcXERvY3VtZW50c1xcR2lmdFNob3BcXFNTLlRlbXBsYXRlLkFwaVxcd3d3cm9vdFxcYW5ndWxhcl90ZW1wbGF0ZS1tYXN0ZXIvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSwrQkFBNkQ7RUFDN0QsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWNvbG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZDQxZDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5pbWctYmcge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvcmVnaXN0ZXIvYmcuanBnKTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uYmctc3R5bGUge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/register/register.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/register/register.component.ts ***!
  \******************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_registerSvc, route) {
        this._registerSvc = _registerSvc;
        this.route = route;
        this.titlePattern = [
            "•The password length must be greater than or equal to 8",
            "•The password must contain one or more uppercase characters",
            "•The password must contain one or more lowercase characters",
            "•The password must contain one or more lowercase characters",
            "•The password must contain one or more lowercase characters"
        ];
        this.creds = {
            FirstName: "",
            LastName: "",
            Email: "",
            Password: ""
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSignUp = function () {
        var _this = this;
        var customer = {
            name: this.creds.FirstName + " " + this.creds.LastName,
            city: '',
            orderTotal: 0,
            status: 1,
            dateCreated: new Date(),
            dateUpdated: new Date(),
            email: this.creds.Email
        };
        this._registerSvc.postRegister(this.creds).subscribe(function (res) {
            _this.route.navigateByUrl("/login");
            // this._registerSvc.postCustomer(customer).subscribe(res=>{
            //     this.route.navigateByUrl("/login");
            // },err=>{})
        }, function (err) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                icon: 'error',
                title: 'Error in your registration',
                showConfirmButton: false,
                timer: 1500
            });
        });
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _services_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/register/register.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/shared/components/register/register.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/title/title.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/title/title.component.ts ***!
  \************************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");






function getTitle(router) {
    var currentRoute = router.routerState.root;
    var titleText = '';
    do {
        var childrenRoutes = currentRoute.children;
        currentRoute = null;
        childrenRoutes.forEach(function (routes) {
            if (routes.outlet === 'primary') {
                if (routes.snapshot.data.title) {
                    titleText = routes.snapshot.data.title;
                }
                currentRoute = routes;
            }
        });
    } while (currentRoute);
    return titleText;
}
var TitleComponent = /** @class */ (function () {
    function TitleComponent(router, translate, title) {
        var _this = this;
        this.title = title.getTitle();
        this.subscription = router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return getTitle(router); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (t) { return !!t; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (t) { return translate.get(t); }))
            .subscribe(function (event) {
            _this.title = event;
            title.setTitle(event);
        });
    }
    TitleComponent.prototype.ngOnInit = function () {
    };
    TitleComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    TitleComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    TitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-title',
            template: '{{title}}'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], TitleComponent);
    return TitleComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/version/version.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/version/version.component.ts ***!
  \****************************************************************/
/*! exports provided: VersionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionComponent", function() { return VersionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/version */ "./src/environments/version.ts");



var VersionComponent = /** @class */ (function () {
    function VersionComponent() {
        this.version = _environments_version__WEBPACK_IMPORTED_MODULE_2__["VERSION"];
    }
    VersionComponent.prototype.ngOnInit = function () {
    };
    VersionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-version',
            template: "{{ 'app.VERSION' | translate: version }}",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VersionComponent);
    return VersionComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/autofocus.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/autofocus.directive.ts ***!
  \**********************************************************/
/*! exports provided: AutofocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutofocusDirective", function() { return AutofocusDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AutofocusDirective = /** @class */ (function () {
    function AutofocusDirective(el) {
        this.el = el;
    }
    AutofocusDirective.prototype.ngAfterViewInit = function () {
        this.el.nativeElement.focus();
    };
    AutofocusDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    AutofocusDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            // tslint:disable-next-line:directive-selector
            selector: '[autofocus]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AutofocusDirective);
    return AutofocusDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/email.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/directives/email.directive.ts ***!
  \******************************************************/
/*! exports provided: EmailDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailDirective", function() { return EmailDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_app_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/app-validators */ "./src/app/common/app-validators.ts");

// @Angular



// app
var EmailDirective = /** @class */ (function () {
    function EmailDirective() {
    }
    EmailDirective_1 = EmailDirective;
    EmailDirective.prototype.validate = function (control) {
        return _common_app_validators__WEBPACK_IMPORTED_MODULE_3__["AppValidators"].email(control);
    };
    EmailDirective.prototype.registerOnValidatorChange = function (fn) {
    };
    var EmailDirective_1;
    EmailDirective = EmailDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            // tslint:disable-next-line:directive-selector
            selector: 'input[type=email]',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return EmailDirective_1; }),
                    multi: true
                }
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmailDirective);
    return EmailDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/tablesort.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/tablesort.directive.ts ***!
  \**********************************************************/
/*! exports provided: TablesortDirective, TablesortColDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesortDirective", function() { return TablesortDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesortColDirective", function() { return TablesortColDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ascending = 1;
var unset = 0;
var descending = -1;
var states = [
    unset,
    ascending,
    descending
];
var TablesortDirective = /** @class */ (function () {
    function TablesortDirective(renderer, elementRef) {
        this.columns = [];
        this.sortColumns = [];
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        renderer.addClass(elementRef.nativeElement, 'tablesort');
    }
    TablesortDirective.prototype.register = function (column) {
        this.columns.push(column);
    };
    TablesortDirective.prototype.setSortColumn = function (column) {
        if (!(this.sortColumns.length === 1 && this.sortColumns[0] === column)) {
            this.clearSortColumns();
            this.sortColumns.push(column);
        }
        this.rotateState(column);
        this.trigger();
    };
    TablesortDirective.prototype.addSortColumn = function (column) {
        var found = false;
        for (var _i = 0, _a = this.columns; _i < _a.length; _i++) {
            var col = _a[_i];
            if (col === column) {
                found = true;
                break;
            }
        }
        if (!found) {
            this.sortColumns.push(column);
        }
        this.rotateState(column);
        this.trigger();
    };
    TablesortDirective.prototype.trigger = function () {
        var values = [];
        for (var _i = 0, _a = this.columns; _i < _a.length; _i++) {
            var col = _a[_i];
            if (col.descending || col.ascending) {
                values.push((col.descending ? '-' : '') + col.name);
            }
        }
        var expression = values.join(',');
        this.sort.emit(expression);
    };
    TablesortDirective.prototype.rotateState = function (column) {
        column.stateIndex = ++column.stateIndex % states.length;
    };
    TablesortDirective.prototype.clearSortColumns = function () {
        while (this.sortColumns.length > 0) {
            var col = this.sortColumns.pop();
            col.stateIndex = 0;
        }
    };
    TablesortDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TablesortDirective.prototype, "sort", void 0);
    TablesortDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appTablesort]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TablesortDirective);
    return TablesortDirective;
}());

var TablesortColDirective = /** @class */ (function () {
    function TablesortColDirective(_parent, renderer, elementRef) {
        this._parent = _parent;
        this.stateIndex = 0;
        renderer.addClass(elementRef.nativeElement, 'tablesort-col');
    }
    Object.defineProperty(TablesortColDirective.prototype, "ascending", {
        get: function () {
            return states[this.stateIndex] === ascending;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TablesortColDirective.prototype, "descending", {
        get: function () {
            return states[this.stateIndex] === descending;
        },
        enumerable: true,
        configurable: true
    });
    TablesortColDirective.prototype.ngOnInit = function () {
        this._parent.register(this);
    };
    TablesortColDirective.prototype.onClick = function (event) {
        if (event.ctrlKey) {
            this._parent.addSortColumn(this);
        }
        else {
            this._parent.setSortColumn(this);
        }
    };
    TablesortColDirective.ctorParameters = function () { return [
        { type: TablesortDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return TablesortDirective; }),] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.asc'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TablesortColDirective.prototype, "ascending", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.desc'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TablesortColDirective.prototype, "descending", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appTablesortCol'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TablesortColDirective.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], TablesortColDirective.prototype, "onClick", null);
    TablesortColDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appTablesortCol]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return TablesortDirective; }))),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [TablesortDirective,
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TablesortColDirective);
    return TablesortColDirective;
}());



/***/ }),

/***/ "./src/app/shared/pipes/enum.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/enum.pipe.ts ***!
  \*******************************************/
/*! exports provided: EnumPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumPipe", function() { return EnumPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var EnumPipe = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EnumPipe, _super);
    function EnumPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EnumPipe.prototype.transform = function (value, namespace) {
        if (value === null || value === undefined) {
            return null;
        }
        if (!namespace) {
            throw new Error('Resource namespace is required.');
        }
        var resource = namespace + '.' + value;
        return _super.prototype.transform.call(this, resource);
    };
    EnumPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'enum'
        })
    ], EnumPipe);
    return EnumPipe;
}(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]));



/***/ }),

/***/ "./src/app/shared/pipes/yes-no.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/yes-no.pipe.ts ***!
  \*********************************************/
/*! exports provided: YesNoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YesNoPipe", function() { return YesNoPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var YesNoPipe = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](YesNoPipe, _super);
    function YesNoPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YesNoPipe.prototype.transform = function (value, args) {
        switch (value) {
            case true:
                return _super.prototype.transform.call(this, 'app.YES');
            case false:
                return _super.prototype.transform.call(this, 'app.NO');
            default:
                return value;
        }
    };
    YesNoPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'yesNo'
        })
    ], YesNoPipe);
    return YesNoPipe;
}(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]));



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_file_file_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/file/file.component */ "./src/app/shared/components/file/file.component.ts");
/* harmony import */ var _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/autofocus.directive */ "./src/app/shared/directives/autofocus.directive.ts");
/* harmony import */ var _directives_email_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/email.directive */ "./src/app/shared/directives/email.directive.ts");
/* harmony import */ var _directives_tablesort_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/tablesort.directive */ "./src/app/shared/directives/tablesort.directive.ts");
/* harmony import */ var _pipes_enum_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/enum.pipe */ "./src/app/shared/pipes/enum.pipe.ts");
/* harmony import */ var _pipes_yes_no_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/yes-no.pipe */ "./src/app/shared/pipes/yes-no.pipe.ts");
/* harmony import */ var _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/panel/panel.component */ "./src/app/shared/components/panel/panel.component.ts");
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/title/title.component */ "./src/app/shared/components/title/title.component.ts");
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pagination/pagination.component */ "./src/app/shared/components/pagination/pagination.component.ts");
/* harmony import */ var _components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/datepicker/datepicker.component */ "./src/app/shared/components/datepicker/datepicker.component.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/shared/components/layout/layout.component.ts");
/* harmony import */ var _components_version_version_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/version/version.component */ "./src/app/shared/components/version/version.component.ts");
/* harmony import */ var _components_datetimepicker_datetimepicker_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/datetimepicker/datetimepicker.component */ "./src/app/shared/components/datetimepicker/datetimepicker.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/shared/components/card/card.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/shared/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/shared/components/register/register.component.ts");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/shared/components/cart/cart.component.ts");
/* harmony import */ var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/checkout/checkout.component */ "./src/app/shared/components/checkout/checkout.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/shared/components/navbar/navbar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/product/product.component */ "./src/app/shared/components/product/product.component.ts");
/* harmony import */ var _components_admin_login_loginAdmin_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/admin/login/loginAdmin.component */ "./src/app/shared/components/admin/login/loginAdmin.component.ts");
/* harmony import */ var _components_admin_index_indexAdmin_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/admin/index/indexAdmin.component */ "./src/app/shared/components/admin/index/indexAdmin.component.ts");
/* harmony import */ var _components_admin_navbar_navbarAdmin_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/admin/navbar/navbarAdmin.component */ "./src/app/shared/components/admin/navbar/navbarAdmin.component.ts");
/* harmony import */ var _components_admin_addProduct_addProduct_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/admin/addProduct/addProduct.component */ "./src/app/shared/components/admin/addProduct/addProduct.component.ts");
/* harmony import */ var _components_admin_modifyProduct_modifyProduct_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/admin/modifyProduct/modifyProduct.component */ "./src/app/shared/components/admin/modifyProduct/modifyProduct.component.ts");
/* harmony import */ var _components_admin_ordersHistory_ordersHistory_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/admin/ordersHistory/ordersHistory.component */ "./src/app/shared/components/admin/ordersHistory/ordersHistory.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




































var imports = [
    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"],
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTimepickerModule"],
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbProgressbarModule"],
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalModule"],
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTypeaheadModule"],
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
    _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HttpClientModule"],
];
var declarations = [
    _components_file_file_component__WEBPACK_IMPORTED_MODULE_7__["FileComponent"],
    _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_13__["PanelComponent"],
    _components_title_title_component__WEBPACK_IMPORTED_MODULE_14__["TitleComponent"],
    _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_15__["PaginationComponent"],
    _components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_16__["DatepickerComponent"],
    _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_17__["LayoutComponent"],
    _components_version_version_component__WEBPACK_IMPORTED_MODULE_18__["VersionComponent"],
    _components_datetimepicker_datetimepicker_component__WEBPACK_IMPORTED_MODULE_19__["DatetimepickerComponent"],
    _components_card_card_component__WEBPACK_IMPORTED_MODULE_21__["CardComponent"],
    _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_8__["AutofocusDirective"],
    _directives_email_directive__WEBPACK_IMPORTED_MODULE_9__["EmailDirective"],
    _directives_tablesort_directive__WEBPACK_IMPORTED_MODULE_10__["TablesortDirective"],
    _directives_tablesort_directive__WEBPACK_IMPORTED_MODULE_10__["TablesortColDirective"],
    _pipes_enum_pipe__WEBPACK_IMPORTED_MODULE_11__["EnumPipe"],
    _pipes_yes_no_pipe__WEBPACK_IMPORTED_MODULE_12__["YesNoPipe"],
    _components_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
    _components_register_register_component__WEBPACK_IMPORTED_MODULE_23__["RegisterComponent"],
    _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_24__["CartComponent"],
    _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_25__["CheckoutComponent"],
    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_26__["NavbarComponent"],
    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_27__["FooterComponent"],
    _components_product_product_component__WEBPACK_IMPORTED_MODULE_28__["ProductComponent"],
    _components_admin_login_loginAdmin_component__WEBPACK_IMPORTED_MODULE_29__["LoginAdminComponent"],
    _components_admin_index_indexAdmin_component__WEBPACK_IMPORTED_MODULE_30__["IndexAdminComponent"],
    _components_admin_navbar_navbarAdmin_component__WEBPACK_IMPORTED_MODULE_31__["NavbarAdminComponent"],
    _components_admin_addProduct_addProduct_component__WEBPACK_IMPORTED_MODULE_32__["AddProductComponent"],
    _components_admin_modifyProduct_modifyProduct_component__WEBPACK_IMPORTED_MODULE_33__["ModifyProductComponent"],
    _components_admin_ordersHistory_ordersHistory_component__WEBPACK_IMPORTED_MODULE_34__["OrdersHistoryComponent"]
];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: declarations.slice(),
            imports: imports.concat([_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPaginationModule"]]),
            exports: declarations.concat(imports),
            providers: [{ provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDateAdapter"], useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDateNativeAdapter"] }],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/environments/version.ts":
/*!*************************************!*\
  !*** ./src/environments/version.ts ***!
  \*************************************/
/*! exports provided: VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/* tslint:disable */
var VERSION = {
    "dirty": true,
    "raw": "v0.0.0-0",
    "hash": "0",
    "distance": 0,
    "tag": null,
    "semver": {
        "raw": "v0.0.0",
        "major": 0,
        "minor": 0,
        "patch": 0,
        "prerelease": [],
        "build": [],
        "version": "0.0.0"
    },
    "suffix": "0",
    "semverString": "0.0.0+0.0",
    "version": "0.0.0"
};
/* tslint:enable */


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\larias\Documents\GiftShop\SS.Template.Api\wwwroot\angular_template-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map