(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-button-button-demo-module"],{

/***/ "./src/app/forms/button/button.demo.module.ts":
/*!****************************************************!*\
  !*** ./src/app/forms/button/button.demo.module.ts ***!
  \****************************************************/
/*! exports provided: ButtonDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDemoModule", function() { return ButtonDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _button_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button.demo */ "./src/app/forms/button/button.demo.ts");
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
var ButtonDemoModule = /** @class */ (function () {
    function ButtonDemoModule() {
    }
    ButtonDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_button_demo__WEBPACK_IMPORTED_MODULE_6__["ButtonDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _button_demo__WEBPACK_IMPORTED_MODULE_6__["ButtonDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], ButtonDemoModule);
    return ButtonDemoModule;
}());



/***/ }),

/***/ "./src/app/forms/button/button.demo.ts":
/*!*********************************************!*\
  !*** ./src/app/forms/button/button.demo.ts ***!
  \*********************************************/
/*! exports provided: ButtonDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDemo", function() { return ButtonDemo; });
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


var ButtonDemo = /** @class */ (function () {
    function ButtonDemo(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
    }
    ButtonDemo.prototype.getDta = function () {
        var _this = this;
        this.asyncFlag = true;
        setTimeout(function () {
            _this.asyncFlag = false;
        }, 3000);
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    ButtonDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/forms/button/form.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/forms/button/form.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    ButtonDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    ButtonDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'button-demo', template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n         Button\n      </amexio-header>\n      <amexio-body>\n        <p>A button component with various modes and configurations.</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n            <amexio-row>\n            <amexio-column [size]=\"12\">\n              <amexio-card [header]=\"true\">\n                <amexio-header>\n                   Button Types\n                </amexio-header>\n                <amexio-body>\n                  <amexio-row>\n                    <amexio-column size=\"2\">\n                      <amexio-button [label]=\"'Theme Color'\" [type]=\"'theme-color'\" [tooltip]=\"'Primary Button'\"></amexio-button>\n                    </amexio-column>\n                    <amexio-column size=\"1\"></amexio-column>\n                    <amexio-column size=\"2\">\n                      <amexio-button [label]=\"'Green'\" [type]=\"'green'\" [tooltip]=\"'Success Button'\"></amexio-button>\n                    </amexio-column>\n                    <amexio-column size=\"2\">\n                      <amexio-button [label]=\"'Red'\" [type]=\"'red'\" [tooltip]=\"'danger Button'\"></amexio-button>\n                    </amexio-column>\n                    <amexio-column size=\"2\">\n                      <amexio-button [label]=\"'Yellow'\" [type]=\"'yellow'\" [tooltip]=\"'Warning Button'\"></amexio-button>\n                    </amexio-column>\n                    <amexio-column size=\"2\">\n                      <amexio-button [label]=\"'Transparent'\" [type]=\"'transparent'\" [tooltip]=\"'Transparent Button'\"></amexio-button>\n                    </amexio-column>\n                    <amexio-column size=\"2\">\n                    <amexio-button [label]=\"'Background Color'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Secondary Button'\"></amexio-button>\n                  </amexio-column>\n                  </amexio-row>\n                </amexio-body>\n              </amexio-card>\n\n            </amexio-column>\n            </amexio-row>\n            <amexio-row>\n              <amexio-column [size]=\"12\">\n                <amexio-card [header]=\"true\">\n                  <amexio-header>\n                      Button States\n                  </amexio-header>\n                  <amexio-body>\n                    <amexio-row>\n                      <amexio-column [size]=\"4\">\n                        <amexio-button [label]=\"'Disabled'\" [type]=\"'green'\" [tooltip]=\"'Disabled'\" [disabled]=\"'true'\" ></amexio-button>\n                      </amexio-column>\n                      <amexio-column [size]=\"4\">\n                        <amexio-button [label]=\"'Enabled'\" [type]=\"'green'\" [tooltip]=\"'Enable'\" ></amexio-button>\n                      </amexio-column>\n                      <amexio-column [size]=\"4\">\n                        <!--<amexio-button [label]=\"'Async Task'\" [type]=\"'theme-color'\" [tooltip]=\"'Async Task'\" (onClick)=\"switchasyncFlag()\" [isLoading]=\"asyncFlag\"></amexio-button>-->\n                      </amexio-column>\n                    </amexio-row>\n                  </amexio-body>\n                </amexio-card>\n              </amexio-column>\n            </amexio-row>\n            <amexio-row>\n              <amexio-column [size]=\"12\">\n                <amexio-card [header]=\"true\">\n                  <amexio-header>\n                      Button with Icons\n                  </amexio-header>\n                  <amexio-body>\n                    <amexio-row>\n                      <amexio-column [size]=\"4\">\n                        <amexio-button [label]=\"'Next'\" [type]=\"'theme-color'\" [tooltip]=\"'Next'\" [icon]=\"'fa fa-chevron-right'\"></amexio-button>\n                      </amexio-column>\n                      <amexio-column [size]=\"4\">\n                        <amexio-button [label]=\"'Download'\" [type]=\"'green'\" [tooltip]=\"'Save'\" [icon]=\"'fa fa-save'\"></amexio-button>\n                      </amexio-column>\n                      <amexio-column [size]=\"4\">\n                        <amexio-button [label]=\"'Delete'\" [type]=\"'red'\" [tooltip]=\"'delete'\" [icon]=\"'fa fa-trash'\"></amexio-button>\n                      </amexio-column>\n                    </amexio-row>\n                  </amexio-body>\n                </amexio-card>\n              </amexio-column>\n            </amexio-row>\n            <amexio-row>\n              <amexio-column [size]=\"12\">\n                <amexio-card [header]=\"true\">\n                  <amexio-header>\n                      Button Sizes\n                  </amexio-header>\n                  <amexio-body>\n                    <amexio-row>\n                      <amexio-column [size]=\"4\">\n                        <amexio-button [label]=\"'Large Button'\" [type]=\"'theme-color'\" [tooltip]=\"'large'\" [size]=\"'large'\"></amexio-button>\n                      </amexio-column>\n                      <amexio-column [size]=\"4\">\n                        <amexio-button [label]=\"'Default Button'\" [type]=\"'theme-color'\" [tooltip]=\"'default'\"></amexio-button>\n                      </amexio-column>\n                      <amexio-column [size]=\"4\">\n                        <amexio-button [label]=\"'Small Button'\" [type]=\"'theme-color'\" [tooltip]=\"'small'\" [size]=\"'small'\"></amexio-button>\n                      </amexio-column>\n                    </amexio-row>\n                  </amexio-body>\n                </amexio-card>\n              </amexio-column>\n            </amexio-row>\n            <amexio-row>\n              <amexio-column size=\"12\">\n                <amexio-card [header]=\"true\">\n                  <amexio-header>\n                    Block Button\n                </amexio-header>\n                  <amexio-body>\n                    <amexio-row>\n                      <amexio-column size=\"12\">\n                        <amexio-button [label]=\"'Block Button(theme color)'\" [type]=\"'theme-color'\" [tooltip]=\"'large'\"  [block]=\"true\"></amexio-button>\n                      </amexio-column>\n                      </amexio-row>\n                      <amexio-row>\n                      <amexio-column size=\"12\">\n                      <amexio-button [label]=\"'Block Button(success)'\" [type]=\"'green'\" [tooltip]=\"'green'\" [block]=\"true\"></amexio-button>\n                      </amexio-column>\n                    </amexio-row>\n                  </amexio-body>\n                </amexio-card>\n              </amexio-column>\n            </amexio-row>\n\n            <amexio-row>\n            <amexio-column [size]=\"12\">\n              <amexio-card [header]=\"true\">\n                <amexio-header>\n                   Button With Badges - Small / Default / Large \n                </amexio-header>\n                <amexio-body>\n                    \n                    <amexio-row>\n                      <amexio-column [size]=\"3\">\n                         <amexio-button [label]=\"'Background Color'\" [badge] = \"10\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Secondary Button'\"></amexio-button>\n                      </amexio-column>\n                      <amexio-column [size]=\"3\">\n                         <amexio-button  [label]=\"'Theme Color'\" [badge] = \"11\" [type]=\"'theme-color'\" [tooltip]=\"'Primary Button'\"></amexio-button>\n                      </amexio-column>\n                      <amexio-column [size]=\"3\">\n                         <amexio-button   [label]=\"'Green'\" [badge] = \"12\" [type]=\"'green'\" [tooltip]=\"'Success Button'\"></amexio-button>\n                      </amexio-column>\n                      <amexio-column [size]=\"3\">\n                        <amexio-button  [label]=\"'Red'\" [badge] = \"13\" [type]=\"'red'\" [tooltip]=\"'Danger Button'\"></amexio-button>\n                      </amexio-column>\n                    </amexio-row>\n\n\n\n                </amexio-body>\n              </amexio-card>\n\n            </amexio-column>\n            </amexio-row>\n\n          </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Properties <amexio-button>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/forms/button.component.json'\"\n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br>\n            <amexio-datagrid title=\"Events\" [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/forms/button.component.json'\" [data-reader]=\"'events'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"20\"[data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"80\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            \n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n             <amexio-vertical-tab-view>\n              <amexio-tab title=\"HTML\" [active]=\"true\">\n                <ng-container *ngIf=\"htmlCode\">\n                  <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                  <div>\n                   <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                  </div>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Type Script\">\n                <ng-container *ngIf=\"typeScriptCode\">\n                  <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n            </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n          <p align=\"center\">Amexio Sandbox</p>\n<iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-button?embed=1&file=app/forms/button/button.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n    <!--<amexio-notification [data]=\"copyMsgArray\"></amexio-notification>-->\n\n  "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ButtonDemo);
    return ButtonDemo;
}());



/***/ })

}]);
//# sourceMappingURL=forms-button-button-demo-module.js.map