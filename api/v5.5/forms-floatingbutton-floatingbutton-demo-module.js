(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-floatingbutton-floatingbutton-demo-module"],{

/***/ "./src/app/forms/floatingbutton/floatingbutton.demo.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/forms/floatingbutton/floatingbutton.demo.module.ts ***!
  \********************************************************************/
/*! exports provided: FloatingButtonDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatingButtonDemoModule", function() { return FloatingButtonDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _floatingbutton_demo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./floatingbutton.demo */ "./src/app/forms/floatingbutton/floatingbutton.demo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Created by sagar on 11/1/18.
 */
var FloatingButtonDemoModule = /** @class */ (function () {
    function FloatingButtonDemoModule() {
    }
    FloatingButtonDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_floatingbutton_demo__WEBPACK_IMPORTED_MODULE_7__["FloatingButtonDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _floatingbutton_demo__WEBPACK_IMPORTED_MODULE_7__["FloatingButtonDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], FloatingButtonDemoModule);
    return FloatingButtonDemoModule;
}());



/***/ }),

/***/ "./src/app/forms/floatingbutton/floatingbutton.demo.ts":
/*!*************************************************************!*\
  !*** ./src/app/forms/floatingbutton/floatingbutton.demo.ts ***!
  \*************************************************************/
/*! exports provided: FloatingButtonDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatingButtonDemo", function() { return FloatingButtonDemo; });
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


var FloatingButtonDemo = /** @class */ (function () {
    function FloatingButtonDemo(http) {
        this.http = http;
        this.toggle1 = false;
        this.toggle2 = false;
        this.getHtmlAndTypeScriptCode();
    }
    FloatingButtonDemo.prototype.getDta = function () {
        var _this = this;
        this.asyncFlag = true;
        setTimeout(function () {
            _this.asyncFlag = false;
        }, 3000);
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    FloatingButtonDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/forms/floatingbutton/form.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/forms/floatingbutton/form.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    FloatingButtonDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    FloatingButtonDemo.prototype.onFloatingButtonClick1 = function (event) {
        this.toggle1 = !this.toggle1;
        this.toggle2 = false;
    };
    FloatingButtonDemo.prototype.onFloatingButtonClick2 = function (event) {
        this.toggle2 = !this.toggle2;
        this.toggle1 = false;
    };
    FloatingButtonDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'floating-button-demo', template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n         Floating Button\n      </amexio-header>\n      <amexio-body>\n        <p>A Floating button component with various position options (vertical/horizontal/top/bottom/left/right)</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n            <amexio-row>\n            <amexio-column [size]=\"12\">\n              <amexio-card [header]=\"true\" [body-height]=\"'50%'\">\n                <amexio-header>\n                   Floating Button Types \n                </amexio-header>\n                <amexio-body>\n                  <amexio-row>\n                    <amexio-column size=3>\n                      <amexio-floating-button [relative]=\"true\" [tool-tip]=\"'Setting'\" [icon]=\"'fa fa-snowflake-o'\" [type]=\"'theme-color'\"></amexio-floating-button>\n                    </amexio-column>\n                    <amexio-column size=3>\n                      <amexio-floating-button [relative]=\"true\"  [tool-tip]=\"'User'\" [icon]=\"'fa fa-user-circle-o'\" [type]=\"'yellow'\"></amexio-floating-button>\n                    </amexio-column>\n                    <amexio-column size=3>\n                      <amexio-floating-button [relative]=\"true\"  [tool-tip]=\"'open'\" [icon]=\"'fa fa-envelope-open'\" [type]=\"'red'\"></amexio-floating-button>\n                    </amexio-column>\n                    <amexio-column size=3>\n                      <amexio-floating-button [relative]=\"true\" [tool-tip]=\"'message'\" [icon]=\"'fa fa fa-telegram'\" [type]=\"'theme-color'\"></amexio-floating-button>\n                    </amexio-column>\n                  </amexio-row>\n                  <amexio-row>\n                    <amexio-column size=12>\n                    <amexio-button [label]=\"'Vertical/Horizontal Positioning'\" (onClick)=\"onFloatingButtonClick1($event)\" [type]=\"'theme-color'\" [tooltip]=\"'Using Vertical/Horizontal Positioning'\"></amexio-button>\n                    <br/>\n                    <br/>\n                    <amexio-button [label]=\"'Right/Left/Top/Right Positioning'\" (onClick)=\"onFloatingButtonClick2($event)\" [type]=\"'theme-color'\" [tooltip]=\"'Using Right/Left/Top/Right Positioning'\"></amexio-button>\n                    </amexio-column>\n                  </amexio-row>\n\n                <div *ngIf=\"toggle1\">\n                  <amexio-floating-button [vertical-position]=\"'top'\" [horizontal-position]=\"'left'\" [label]=\"'top-left'\" [icon]=\"'fa fa-snowflake-o'\" [type]=\"'theme-color'\"></amexio-floating-button>\n                  <amexio-floating-button [vertical-position]=\"'top'\" [horizontal-position]=\"'right'\" [label]=\"'top-right'\" [icon]=\"'fa fa-telegram'\" [type]=\"'green'\"></amexio-floating-button>\n                  <amexio-floating-button [vertical-position]=\"'bottom'\" [horizontal-position]=\"'left'\" [label]=\"'bottom-left'\" [icon]=\"'fa fa-user-circle-o'\" [type]=\"'yellow'\"></amexio-floating-button>\n                  <amexio-floating-button [vertical-position]=\"'bottom'\" [horizontal-position]=\"'right'\" [label]=\"'bottom-right'\" [icon]=\"'fa fa-envelope-open'\" [type]=\"'red'\"></amexio-floating-button>\n                  <amexio-floating-button [vertical-position]=\"'center'\" [horizontal-position]=\"'center'\" [icon]=\"'fa fa-snowflake-o'\" [type]=\"'red'\" (onClick)=\"onFloatingButtonClick($event)\"></amexio-floating-button>                \n                </div>              \n\n                <div *ngIf=\"toggle2\">\n                  <amexio-floating-button [position-top]=\"'30px'\" [position-right]=\"'40px'\" [label]=\"'top-left'\" [icon]=\"'fa fa-snowflake-o'\" [type]=\"'theme-color'\"></amexio-floating-button>\n                  <amexio-floating-button [position-top]=\"'50%'\" [position-right]=\"'40px'\" [label]=\"'top-left'\" [icon]=\"'fa fa-snowflake-o'\" [type]=\"'green'\"></amexio-floating-button>\n                  <amexio-floating-button [position-bottom]=\"'30px'\" [position-right]=\"'40px'\" [label]=\"'top-left'\" [icon]=\"'fa fa-snowflake-o'\" [type]=\"'yellow'\"></amexio-floating-button>\n                  <amexio-floating-button [position-bottom]=\"'30px'\" [position-left]=\"'40px'\" [label]=\"'top-left'\" [icon]=\"'fa fa-snowflake-o'\" [type]=\"'red'\"></amexio-floating-button>\n                  <amexio-floating-button [position-top]=\"'30px'\" [position-left]=\"'40px'\" [label]=\"'top-left'\" [icon]=\"'fa fa-snowflake-o'\"></amexio-floating-button>\n                  \n                </div>\n                </amexio-body>\n              </amexio-card>\n\n            </amexio-column>\n            </amexio-row>\n            \n          </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n         \n            <amexio-datagrid title=\"Properties <amexio-floating-button>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/forms/floatingbutton.json'\"\n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br>\n            <amexio-datagrid title=\"Events\" [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/forms/floatingbutton.json'\" [data-reader]=\"'events'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"20\"[data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"80\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n\n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n             <amexio-vertical-tab-view>\n              <amexio-tab title=\"HTML\" [active]=\"true\">\n                <ng-container *ngIf=\"htmlCode\">\n                  <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                  <div>\n                   <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                  </div>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Type Script\">\n                <ng-container *ngIf=\"typeScriptCode\">\n                  <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n            </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n          <p align=\"center\">Amexio Sandbox</p>\n              <iframe style=\"width: 100%; height: 600px\" \n              src=\"https://stackblitz.com/edit/amexio-v41-floatingbutton?embed=1&file=app/forms/floatingbutton/floatingbutton.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n              </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n    <!--<amexio-notification [data]=\"copyMsgArray\"></amexio-notification>-->\n\n  "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FloatingButtonDemo);
    return FloatingButtonDemo;
}());



/***/ })

}]);
//# sourceMappingURL=forms-floatingbutton-floatingbutton-demo-module.js.map