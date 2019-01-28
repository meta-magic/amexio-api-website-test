(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-email-email-demo-module"],{

/***/ "./src/app/forms/email/email.demo.module.ts":
/*!**************************************************!*\
  !*** ./src/app/forms/email/email.demo.module.ts ***!
  \**************************************************/
/*! exports provided: EmailDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailDemoModule", function() { return EmailDemoModule; });
/* harmony import */ var _email_demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email.demo */ "./src/app/forms/email/email.demo.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Created by sagar on 11/1/18.
 */
var EmailDemoModule = /** @class */ (function () {
    function EmailDemoModule() {
    }
    EmailDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_email_demo__WEBPACK_IMPORTED_MODULE_0__["EmailDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_3__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
                        path: '', component: _email_demo__WEBPACK_IMPORTED_MODULE_0__["EmailDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], EmailDemoModule);
    return EmailDemoModule;
}());



/***/ }),

/***/ "./src/app/forms/email/email.demo.ts":
/*!*******************************************!*\
  !*** ./src/app/forms/email/email.demo.ts ***!
  \*******************************************/
/*! exports provided: EmailDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailDemo", function() { return EmailDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/**
 * Created by sagar on 9/1/18.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmailDemo = /** @class */ (function () {
    function EmailDemo(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
    }
    //TO LOAD HTML AND TYPESCRIPT CODE
    EmailDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/forms/email/form.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/forms/email/form.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    EmailDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    EmailDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'email-demo', template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n         Email Input \n      </amexio-header>\n      <amexio-body>\n        <p>Email input special component has been created, which restrict user to enter only email format. \n          User can configure attributes for validation(Allow Blank), custom error message, help, custom styles.</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n            <amexio-row>\n              <amexio-column size=\"6\">\n                <amexio-card header=\"true\">\n                  <amexio-header>\n                     Basic Email Input \n                  </amexio-header>\n                  <amexio-body>\n                    <amexio-email-input [field-label]=\"'Email Id'\" name =\"email\"\n                                        [place-holder]=\"'Enter Email Id'\"\n                                        [allow-blank]=\"false\" [error-msg] =\"'Please Enter Email Id'\"\n                                        [enable-popover]=\"true\"\n                                        [icon-feedback]=\"true\">\n                    </amexio-email-input>\n                  </amexio-body>\n                </amexio-card>\n              </amexio-column>\n              <amexio-column [size]=\"6\">\n                <amexio-card [header]=\"true\">\n                  <amexio-header>\n                     Email Input With Disable \n                  </amexio-header>\n                  <amexio-body>\n                    <amexio-email-input name =\"email\" [field-label]=\"'Email Id'\"\n                                        [place-holder]=\"'Enter Email Id'\"\n                                        [disabled]=\"true\">\n                    </amexio-email-input>\n                  </amexio-body>\n                </amexio-card>\n              </amexio-column>\n            </amexio-row>\n            <amexio-row>\n              <amexio-column size=\"6\">\n                <amexio-card [header]=\"true\">\n                  <amexio-header>\n                     Email Input Font Style \n                  </amexio-header>\n                  <amexio-body>\n                    <amexio-email-input [field-label]=\"'Email Id'\" name =\"email\"\n                                        [place-holder]=\"'Enter Email Id'\"\n                                        [icon-feedback]=\"true\"\n                                        [font-style]=\"'italic'\">\n                    </amexio-email-input>\n                  </amexio-body>\n                </amexio-card>\n              </amexio-column>\n              <amexio-column [size]=\"6\">\n                <amexio-card [header]=\"true\">\n                  <amexio-header>\n                     Font Family \n                  </amexio-header>\n                  <amexio-body>\n                    <amexio-email-input name =\"email\" [field-label]=\"'Email Id'\"\n                                        [place-holder]=\"'Enter Email Id'\"\n                                        [font-family]=\"'Times New Roman'\"\n                                        [font-size]=\"'large'\">\n                    </amexio-email-input>\n                  </amexio-body>\n                </amexio-card>\n              </amexio-column>\n            </amexio-row>\n            \n          </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Properties <amexio-email-input>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/forms/email.json'\" \n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\" >\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br>\n            <amexio-datagrid title=\"Events\" [http-method]=\"'get'\" \n                             [http-url]=\"'assets/apireference/forms/email.json'\" [data-reader]=\"'events'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"20\"[data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"80\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            \n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n            <amexio-vertical-tab-view>\n              <amexio-tab title=\"HTML\" [active]=\"true\">\n                <ng-container *ngIf=\"htmlCode\">\n                  <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                  <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Type Script\">\n                <ng-container *ngIf=\"typeScriptCode\">\n                  <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n            </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n           <p align=\"center\">Amexio Sandbox</p>\n<iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-email-input?embed=1&file=app/forms/email/email.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n    <!--<amexio-notification [data]=\"copyMsgArray\"></amexio-notification>-->\n\n  "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmailDemo);
    return EmailDemo;
}());



/***/ })

}]);
//# sourceMappingURL=forms-email-email-demo-module.js.map