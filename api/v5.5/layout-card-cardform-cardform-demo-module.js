(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-card-cardform-cardform-demo-module"],{

/***/ "./src/app/layout/card/cardform/cardform.demo.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/card/cardform/cardform.demo.module.ts ***!
  \**************************************************************/
/*! exports provided: CardFormDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardFormDemoModule", function() { return CardFormDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _cardform_demo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cardform.demo */ "./src/app/layout/card/cardform/cardform.demo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Created by sagar on 11/1/18.
 */
var CardFormDemoModule = /** @class */ (function () {
    function CardFormDemoModule() {
    }
    CardFormDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_cardform_demo__WEBPACK_IMPORTED_MODULE_7__["CardFormDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"], _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _cardform_demo__WEBPACK_IMPORTED_MODULE_7__["CardFormDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], CardFormDemoModule);
    return CardFormDemoModule;
}());



/***/ }),

/***/ "./src/app/layout/card/cardform/cardform.demo.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/card/cardform/cardform.demo.ts ***!
  \*******************************************************/
/*! exports provided: CardFormDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardFormDemo", function() { return CardFormDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
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


var CardFormDemo = /** @class */ (function () {
    function CardFormDemo(http) {
        this.http = http;
        this.rightclickdata =
            [{ "text": "Add New", "icon": "fa fa-plus", "disabled": true }, { "text": "Edit", "icon": "", "seperator": true },
                { "text": "Send data in email", "icon": "" }];
        this.flag = true;
        this.getHtmlAndTypeScriptCode();
    }
    //Toggle event
    CardFormDemo.prototype.toggle = function () {
        this.flag = !this.flag;
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    CardFormDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/layout/card/layout.html').subscribe(function (data) {
            responseHtml = data.text();
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/layout/card/layout.text').subscribe(function (data) {
            responseTs = data.text();
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    CardFormDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    CardFormDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'card-form-demo', template: "\n\n  <amexio-card header=\"true\">\n\n  <amexio-header>\n    Card\n  </amexio-header>\n  <amexio-body>\n    <p>A Simple Card which renders card based on title, body and actions user has configured</p>\n    <amexio-tab-view>\n      <amexio-tab title=\"Demo\" active=\"true\">\n        <amexio-row>\n          <amexio-column size=\"12\">\n            <amexio-button [label]=\"'Hide / Un-hide Card'\" [type]=\"'primary'\" [tooltip]=\"'Hide/UnHide Card'\" (click)=\"toggle()\"> </amexio-button>\n          </amexio-column>\n        </amexio-row>\n        <amexio-row>\n          <amexio-column size=\"12\">\n            <amexio-card [header]=\"true\" [footer]=\"true\" [show]=\"flag\" [footer-align]=\"'right'\" height=\"250\">\n              <amexio-header>\n                Employee Registration\n\n              </amexio-header>\n              <amexio-body>\n                <amexio-row>\n                  <amexio-column [size]=\"6\">\n                    <amexio-text-input [field-label]=\"'Name'\" name=\"name\" [place-holder]=\"'Enter name'\" [icon-feedback]=\"true\">\n                    </amexio-text-input>\n                  </amexio-column>\n                  <amexio-column [size]=\"6\">\n                    <amexio-text-input [field-label]=\"'Local Address'\" name=\"address\" [place-holder]=\"'Enter address'\" [icon-feedback]=\"true\">\n                    </amexio-text-input>\n                  </amexio-column>\n                </amexio-row>\n                <amexio-row>\n                  <amexio-column [size]=\"6\">\n                    <amexio-number-input [field-label]=\"'Number Input'\" [place-holder]=\"'Enter Age'\">\n                    </amexio-number-input>\n                  </amexio-column>\n                  <amexio-column [size]=\"6\">\n                    <amexio-email-input [field-label]=\"'Email Id'\" name=\"email\" [place-holder]=\"'Enter Email Id'\" [allow-blank]=\"false\" [error-msg]=\"'Please Enter Email Id'\"\n                      [enable-popover]=\"true\" [icon-feedback]=\"true\">\n                    </amexio-email-input>\n                  </amexio-column>\n                </amexio-row>\n                <amexio-row>\n                  <amexio-column [size]=\"6\">\n                    <amexio-text-input [field-label]=\"'Father Name'\" name=\"name\" [place-holder]=\"'Enter name'\" [icon-feedback]=\"true\">\n                    </amexio-text-input>\n                  </amexio-column>\n                  <amexio-column [size]=\"6\">\n                    <amexio-text-input [field-label]=\"'Present Address'\" name=\"address\" [place-holder]=\"'Enter address'\" [icon-feedback]=\"true\">\n                    </amexio-text-input>\n                  </amexio-column>\n                </amexio-row>\n                <amexio-row>\n                  <amexio-column [size]=\"6\">\n                    <amexio-number-input [field-label]=\"'Number Input'\" [place-holder]=\"'Enter Age'\">\n                    </amexio-number-input>\n                  </amexio-column>\n                  <amexio-column [size]=\"6\">\n                    <amexio-email-input [field-label]=\"'Father Email Id'\" name=\"email\" [place-holder]=\"'Enter Email Id'\" [allow-blank]=\"false\"\n                      [error-msg]=\"'Please Enter Email Id'\" [enable-popover]=\"true\" [icon-feedback]=\"true\">\n                    </amexio-email-input>\n                  </amexio-column>\n                </amexio-row>\n              </amexio-body>\n              <amexio-action>\n                <amexio-button [label]=\"'Save'\" [type]=\"'primary'\"></amexio-button>\n              </amexio-action>\n            </amexio-card>\n          </amexio-column>\n        </amexio-row>\n\n      </amexio-tab>\n      <amexio-tab title=\"API Reference\">\n        <amexio-datagrid title=\"Properties<amexio-card>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/layout/card.json'\"\n          [data-reader]=\"'properties'\" [enable-data-filter]=\"false\">\n          <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n          <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Type'\"></amexio-data-table-column>\n          <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Default'\"></amexio-data-table-column>\n          <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n        </amexio-datagrid>\n        <amexio-datagrid title=\"Events\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/layout/card.json'\"\n                [data-reader]=\"'events'\" [enable-data-filter]=\"false\">\n                <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n\n      </amexio-tab>\n      <amexio-tab title=\"Source\">\n        <div style=\"overflow-y: scroll\">\n          <amexio-vertical-tab-view>\n            <amexio-tab title=\"HTML\" [active]=\"true\">\n              <ng-container *ngIf=\"htmlCode\">\n                <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n              </ng-container>\n            </amexio-tab>\n            <amexio-tab title=\"Type Script\">\n              <ng-container *ngIf=\"typeScriptCode\">\n                <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n              </ng-container>\n            </amexio-tab>\n          </amexio-vertical-tab-view>\n        </div>\n      </amexio-tab>\n      <amexio-tab title=\"Live\">\n        <p align=\"center\">Amexio Sandbox</p>\n        <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-card-form?embed=1&file=app/layouts/cardform/cardform.demo.html\"\n          frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n      </amexio-tab>\n    </amexio-tab-view>\n  </amexio-body>\n</amexio-card>\n\n    <!--<amexio-notification [data]=\"copyMsgArray\"></amexio-notification>-->\n\n  "
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CardFormDemo);
    return CardFormDemo;
}());



/***/ })

}]);
//# sourceMappingURL=layout-card-cardform-cardform-demo-module.js.map