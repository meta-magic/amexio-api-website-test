(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-text-text-demo-module"],{

/***/ "./src/app/forms/text/text.demo.component.html":
/*!*****************************************************!*\
  !*** ./src/app/forms/text/text.demo.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card header=\"true\">\n    <amexio-header>\n        Text Input\n    </amexio-header>\n    <amexio-body>\n        <p>Text input component has been created with different configurable attributes for validation (min/max length, allow blank, custom regex), custom error message, help, custom styles.</p>\n        <amexio-tab-view>\n            <amexio-tab title=\"Demo\" active=\"true\">\n                <amexio-row>\n                    <amexio-column size=\"6\">\n                        <amexio-card header=\"true\">\n                            <amexio-header>\n                                Basic Text Field\n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-text-input field-label=\"Name\" name=\"name\" place-holder=\"Enter name\" icon-feedback=\"true\"></amexio-text-input>\n                            </amexio-body>\n                        </amexio-card>\n                    </amexio-column>\n                    <amexio-column [size]=\"6\">\n                        <amexio-card [header]=\"true\">\n                            <amexio-header>\n                                Input Without Label & Icon feedback\n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-text-input name=\"name\" place-holder=\"Enter name\" has-label=\"false\"></amexio-text-input>\n                            </amexio-body>\n                        </amexio-card>\n                    </amexio-column>\n                </amexio-row>\n                <amexio-row>\n                    <amexio-column size=\"6\">\n                        <amexio-card [header]=\"true\">\n                            <amexio-header>\n                                Min/Max Validations\n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-text-input enable-popover=\"true\" [enable-popover]=\"true\" field-label=\"Name\" name=\"name\" place-holder=\"Enter name\" [allow-blank]=\"false\" error-msg=\"Please Enter Name\" [min-length]=\"1\" min-error-msg=\"Minimum 1 Char Required\" [max-length]=\"10\"\n                                    max-error-msg=\"Maximum 10 Char Allowed\" [icon-feedback]=\"true\"></amexio-text-input>\n                            </amexio-body>\n                        </amexio-card>\n                    </amexio-column>\n                    <amexio-column [size]=\"6\">\n                        <amexio-card [header]=\"true\">\n                            <amexio-header>\n                                Disabled Text Field\n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-text-input name=\"name\" field-label=\"Name\" place-holder=\"Enter name\" disabled=\"true\"></amexio-text-input>\n                            </amexio-body>\n                        </amexio-card>\n                    </amexio-column>\n                </amexio-row>\n                <amexio-row>\n                    <amexio-column size=\"6\">\n                        <amexio-card header=\"true\">\n                            <amexio-header>\n                                Font Styling\n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-text-input field-label=\"Name\" name=\"name\" place-holder=\"Enter name\" icon-feedback=\"true\" font-style=\"italic\"></amexio-text-input>\n                            </amexio-body>\n                        </amexio-card>\n                    </amexio-column>\n                    <amexio-column size=\"6\">\n                        <amexio-card header=\"true\">\n                            <amexio-header>\n                                Font Size & Family Styling\n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-text-input [field-label]=\"'Name'\" name=\"name\" [place-holder]=\"'Enter name'\" [icon-feedback]=\"false\" [font-size]=\"'large'\"></amexio-text-input>\n                            </amexio-body>\n                        </amexio-card>\n                    </amexio-column>\n                </amexio-row>\n                <amexio-row>\n                    <amexio-column [size]=\"6\">\n                        <amexio-card [header]=\"true\">\n                            <amexio-header>\n                                Input with Pattern\n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-text-input name=\"name\" [field-label]=\"'Name'\" [place-holder]=\"'Enter name'\" [pattern]=\"'[a-z]'\" [icon-feedback]=\"true\"></amexio-text-input>\n                            </amexio-body>\n                        </amexio-card>\n                    </amexio-column>\n                </amexio-row>\n            </amexio-tab>\n\n\n\n\n\n\n\n            <amexio-tab title=\"API Reference\">\n                <amexio-datagrid title=\"Properties <amexio-textinput>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/forms/textinput.json'\" [data-reader]=\"'properties'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <amexio-datagrid title=\"Events <amexio-textinput>\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/forms/textinput.json'\" [data-reader]=\"'events'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"20\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"80\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n\n            </amexio-tab>\n            <amexio-tab title=\"Source\">\n                <div style=\"overflow-y: scroll\">\n                    <amexio-vertical-tab-view>\n                        <amexio-tab title=\"HTML\" [active]=\"true\">\n                            <ng-container *ngIf=\"htmlCode\">\n                                <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                                <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"Type Script\">\n                            <ng-container *ngIf=\"typeScriptCode\">\n                                <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                    </amexio-vertical-tab-view>\n                </div>\n            </amexio-tab>\n            <amexio-tab title=\"Live\">\n                <p align=\"center\">Amexio Sandbox</p>\n                <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-textinput?embed=1&file=app/forms/text/text.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n            </amexio-tab>\n        </amexio-tab-view>\n    </amexio-body>\n</amexio-card>\n<!--<amexio-notification [data]=\"copyMsgArray\"></amexio-notification>-->"

/***/ }),

/***/ "./src/app/forms/text/text.demo.module.ts":
/*!************************************************!*\
  !*** ./src/app/forms/text/text.demo.module.ts ***!
  \************************************************/
/*! exports provided: TextDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDemoModule", function() { return TextDemoModule; });
/* harmony import */ var _text_demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text.demo */ "./src/app/forms/text/text.demo.ts");
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
var TextDemoModule = /** @class */ (function () {
    function TextDemoModule() {
    }
    TextDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_text_demo__WEBPACK_IMPORTED_MODULE_0__["TextDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_3__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
                        path: '', component: _text_demo__WEBPACK_IMPORTED_MODULE_0__["TextDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], TextDemoModule);
    return TextDemoModule;
}());



/***/ }),

/***/ "./src/app/forms/text/text.demo.ts":
/*!*****************************************!*\
  !*** ./src/app/forms/text/text.demo.ts ***!
  \*****************************************/
/*! exports provided: TextDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDemo", function() { return TextDemo; });
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


var TextDemo = /** @class */ (function () {
    function TextDemo(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
    }
    //TO LOAD HTML AND TYPESCRIPT CODE
    TextDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/forms/textinput/form.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/forms/textinput/form.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    TextDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    TextDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'text-demo',
            template: __webpack_require__(/*! ./text.demo.component.html */ "./src/app/forms/text/text.demo.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TextDemo);
    return TextDemo;
}());



/***/ })

}]);
//# sourceMappingURL=forms-text-text-demo-module.js.map