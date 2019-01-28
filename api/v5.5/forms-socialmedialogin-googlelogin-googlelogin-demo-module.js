(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-socialmedialogin-googlelogin-googlelogin-demo-module"],{

/***/ "./src/app/forms/socialmedialogin/googlelogin/googlelogin.demo.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/forms/socialmedialogin/googlelogin/googlelogin.demo.module.ts ***!
  \*******************************************************************************/
/*! exports provided: GoogleLoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginModule", function() { return GoogleLoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _googlelogin_demo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./googlelogin.demo */ "./src/app/forms/socialmedialogin/googlelogin/googlelogin.demo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Created by sagar on 25/1/19.
 */
var GoogleLoginModule = /** @class */ (function () {
    function GoogleLoginModule() {
    }
    GoogleLoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_googlelogin_demo__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _googlelogin_demo__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], GoogleLoginModule);
    return GoogleLoginModule;
}());



/***/ }),

/***/ "./src/app/forms/socialmedialogin/googlelogin/googlelogin.demo.ts":
/*!************************************************************************!*\
  !*** ./src/app/forms/socialmedialogin/googlelogin/googlelogin.demo.ts ***!
  \************************************************************************/
/*! exports provided: GoogleLoginDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginDemo", function() { return GoogleLoginDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by sagar on 25/1/19.
 */


var GoogleLoginDemo = /** @class */ (function () {
    function GoogleLoginDemo(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
    }
    GoogleLoginDemo.prototype.onLoginClick = function (data) {
        this.googleLoginData = data;
    };
    // TO LOAD HTML AND TYPESCRIPT CODE
    GoogleLoginDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        // HTML FILE
        this.http.get('assets/data/code/forms/googlelogin/form.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        // TS FILE
        this.http.get('assets/data/code/forms/googlelogin/form.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    // THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    GoogleLoginDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    GoogleLoginDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'google-login-demo', template: "\n    <amexio-card header=\"true\" [body-height]=\"80\">\n      <amexio-header>\n         Google Login\n      </amexio-header>\n      <amexio-body>\n        <p>Amexio Google Sign-In component manages the OAuth 2.0 flow and token lifecycle,\n         simplifying your integration with Google APIs using amexio component.</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n            <amexio-row>\n              <amexio-column size=\"4\">\n              <amexio-card header=\"true\" [body-height]=\"50\">\n              <amexio-header>\n             Demo\n            </amexio-header>\n              <amexio-body>\n              <amexio-social [api-key]=\"'644642582036-hn15j2lag4h5o4t6lhjpk7pmm2q7bv1i.apps.googleusercontent.com'\" [type]=\"'google'\" (onLogin)=\"onLoginClick($event)\"></amexio-social>\n              </amexio-body>\n              </amexio-card>\n               </amexio-column>\n              <amexio-column size=\"8\">\n              <amexio-card header=\"true\" [body-height]=\"50\">\n              <amexio-header>\n             User Info After Login\n            </amexio-header>\n              <amexio-body>\n             <amexio-row>\n             <amexio-column size=\"12\" [fit]=\"true\">\n             {{googleLoginData|json}}\n             </amexio-column>\n             </amexio-row>\n              </amexio-body>\n              </amexio-card>\n              </amexio-column>\n            </amexio-row>\n          </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n          <amexio-box border-color=\"brown\" border=\"left\" padding=\"true\" background-color=\"brown\">\n          <amexio-label>\n            Make sure api-key is created before use this component.refer google developer webside to create key <a href=\"https://developers.google.com/identity/sign-in/web/sign-in\" target=\"_blank\">Google Sign-In</a>\n            <br/><br/>\n          </amexio-label>\n        </amexio-box>\n        <br>\n            <amexio-datagrid title=\"Properties <amexio-social>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/forms/googlelogin.json'\"\n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n\n            </amexio-datagrid>\n            <br>\n            <amexio-datagrid title=\"Events <amexio-social> \" [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/forms/googlelogin.json'\" [data-reader]=\"'events'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"20\"[data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"80\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n\n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n            <amexio-vertical-tab-view>\n              <amexio-tab title=\"HTML\" [active]=\"true\">\n                <ng-container *ngIf=\"htmlCode\">\n                  <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                  <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Type Script\">\n                <ng-container *ngIf=\"typeScriptCode\">\n                  <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n            </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\" [disabled]=\"true\">\n            <p align=\"center\">Amexio Sandbox</p>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n    <!--<amexio-notification [data]=\"copyMsgArray\"></amexio-notification>-->\n  "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GoogleLoginDemo);
    return GoogleLoginDemo;
}());



/***/ })

}]);
//# sourceMappingURL=forms-socialmedialogin-googlelogin-googlelogin-demo-module.js.map