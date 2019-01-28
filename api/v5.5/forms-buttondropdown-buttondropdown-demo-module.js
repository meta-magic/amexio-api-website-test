(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-buttondropdown-buttondropdown-demo-module"],{

/***/ "./src/app/forms/buttondropdown/buttondropdown.demo.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/forms/buttondropdown/buttondropdown.demo.module.ts ***!
  \********************************************************************/
/*! exports provided: ButtonDropDownDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDropDownDemoModule", function() { return ButtonDropDownDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _buttondropdown_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buttondropdown.demo */ "./src/app/forms/buttondropdown/buttondropdown.demo.ts");
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
var ButtonDropDownDemoModule = /** @class */ (function () {
    function ButtonDropDownDemoModule() {
    }
    ButtonDropDownDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_buttondropdown_demo__WEBPACK_IMPORTED_MODULE_6__["ButtonDropDownDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _buttondropdown_demo__WEBPACK_IMPORTED_MODULE_6__["ButtonDropDownDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], ButtonDropDownDemoModule);
    return ButtonDropDownDemoModule;
}());



/***/ }),

/***/ "./src/app/forms/buttondropdown/buttondropdown.demo.ts":
/*!*************************************************************!*\
  !*** ./src/app/forms/buttondropdown/buttondropdown.demo.ts ***!
  \*************************************************************/
/*! exports provided: ButtonDropDownDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDropDownDemo", function() { return ButtonDropDownDemo; });
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


var ButtonDropDownDemo = /** @class */ (function () {
    function ButtonDropDownDemo(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
    }
    //TO LOAD HTML AND TYPESCRIPT CODE
    ButtonDropDownDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/forms/buttondropdown/form.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/forms/buttondropdown/form.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    ButtonDropDownDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    ButtonDropDownDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'buttondropdown-demo', template: "\n     \n  <amexio-card header=\"true\">\n  <amexio-header>\n     Dropdown Button\n  </amexio-header>\n  <amexio-body>\n    <p>A Dropdown Button component with various modes and configurations.\n    </p>\n    <amexio-tab-view>\n      <amexio-tab title=\"Demo\" active=\"true\">\n        <amexio-row>\n          <amexio-column [size]=\"6\">\n            <amexio-card [header]=\"true\">\n              <amexio-header>\n                 Dropdown Button\n              </amexio-header>\n              <amexio-body>\n                <amexio-row>\n               <amexio-column [size]=\"12\">\n                 <amexio-btn-dropdown [label]=\"'Button'\" [type]=\"'success'\" [size]=\"'default'\" >\n                   <amexio-btn-dropdown-item [label]=\"'Link 1'\" [icon]=\"'fa fa-arrows-alt'\" ></amexio-btn-dropdown-item>\n                   <amexio-btn-dropdown-item [label]=\"'Link 2'\"  [icon]=\"'fa fa-trash'\"></amexio-btn-dropdown-item>\n                 </amexio-btn-dropdown>\n               </amexio-column>\n                </amexio-row>\n              </amexio-body>\n            </amexio-card>\n          </amexio-column>\n          <amexio-column size=\"6\">\n            <amexio-card [header]=\"true\">\n              <amexio-header>\n                  Dropdown Button with size\n              </amexio-header>\n              <amexio-body>\n                <amexio-row>\n                  <amexio-column size=\"6\">\n                    <amexio-btn-dropdown [label]=\"'Button'\" [type]=\"'primary'\" [size]=\"'large'\">\n                      <amexio-btn-dropdown-item [label]=\"'Link 1'\" ></amexio-btn-dropdown-item>\n                      <amexio-btn-dropdown-item [label]=\"'Link 2'\" ></amexio-btn-dropdown-item>\n                    </amexio-btn-dropdown>\n                  </amexio-column>\n                  <amexio-column size=\"6\">\n                    <amexio-btn-dropdown [label]=\"'Button'\" [type]=\"'primary'\" [size]=\"'small'\">\n                      <amexio-btn-dropdown-item [label]=\"'Link 1'\" ></amexio-btn-dropdown-item>\n                      <amexio-btn-dropdown-item [label]=\"'Link 2'\" ></amexio-btn-dropdown-item>\n                    </amexio-btn-dropdown>\n                  </amexio-column>\n                </amexio-row>\n              </amexio-body>\n            </amexio-card>\n          </amexio-column>\n        </amexio-row>\n        <br><br>\n        <amexio-row>\n          <amexio-column size=\"6\">\n            <amexio-card [header]=\"true\">\n              <amexio-header>\n                  Dropdown Button with disabled link\n              </amexio-header>\n              <amexio-body>\n                <amexio-row>\n                  <amexio-btn-dropdown  [label]=\"'Disabled Link'\" [type]=\"'primary'\" [size]=\"'default'\">\n                    <amexio-btn-dropdown-item [label]=\"'Disabled'\"  [icon]=\"'fa fa-fullscreen'\" [disabled]=\"true\"></amexio-btn-dropdown-item>\n                    <amexio-btn-dropdown-item [label]=\"'Link 2'\" [icon]=\"'fa fa-trash'\"></amexio-btn-dropdown-item>\n                  </amexio-btn-dropdown>\n                </amexio-row>\n              </amexio-body>\n            </amexio-card>\n          </amexio-column>\n          <amexio-column size=\"6\">\n          <amexio-card [header]=\"true\">\n            <amexio-header>\n                Dropdown Button With Badges\n            </amexio-header>\n            <amexio-body>\n              <amexio-row>\n              <amexio-btn-dropdown [label]=\"'Button with badge'\"   [type]=\"'theme-color'\" [size]=\"'default'\">\n              <amexio-btn-dropdown-item  [label]=\"'Expand'\" [badge] = \"32\" [icon]=\"'fa fa-arrows-alt'\" ></amexio-btn-dropdown-item>\n              <amexio-btn-dropdown-item [label]=\"'Delete'\" [badge] = \"31\" [icon]=\"'fa fa-trash'\" ></amexio-btn-dropdown-item>\n            </amexio-btn-dropdown>\n              </amexio-row>\n            </amexio-body>\n          </amexio-card>\n        </amexio-column>\n        \n          </amexio-row>\n\n      </amexio-tab>\n      <amexio-tab title=\"API Reference\">\n        <amexio-datagrid title=\"Properties <amexio-btn-dropdown>\" [enable-column-fiter]=\"false\"\n                         [http-method]=\"'get'\"\n                         [http-url]=\"'assets/apireference/forms/buttondropdown.json'\"\n                         [data-reader]=\"'properties'\"\n                         [enable-data-filter]=\"false\">\n          <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                    [text]=\"'Name'\"></amexio-data-table-column>\n          <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                    [text]=\"'Type'\"></amexio-data-table-column>\n          <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                    [text]=\"'Default'\"></amexio-data-table-column>\n          <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                    [text]=\"'Description'\"></amexio-data-table-column>\n        </amexio-datagrid>\n        <br>\n        <amexio-datagrid title=\"Events\" [http-method]=\"'get'\"\n                         [http-url]=\"'assets/apireference/forms/buttondropdown.json'\" [data-reader]=\"'events'\"\n                         [enable-data-filter]=\"false\">\n          <amexio-data-table-column [width]=\"20\"[data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                    [text]=\"'Name'\"></amexio-data-table-column>\n          <amexio-data-table-column [width]=\"80\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                    [text]=\"'Description'\"></amexio-data-table-column>\n        </amexio-datagrid>\n\n      </amexio-tab>\n      <amexio-tab title=\"Source\">\n        <div style=\"  overflow-y: scroll\">\n        <amexio-vertical-tab-view>\n          <amexio-tab title=\"HTML\" [active]=\"true\">\n            <ng-container *ngIf=\"htmlCode\">\n              <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n              <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n            </ng-container>\n          </amexio-tab>\n          <amexio-tab title=\"Type Script\">\n            <ng-container *ngIf=\"typeScriptCode\">\n              <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n            </ng-container>\n          </amexio-tab>\n        </amexio-vertical-tab-view>\n        </div>\n      </amexio-tab>\n      <amexio-tab title=\"Live\">\n      <p align=\"center\">Amexio Sandbox</p>\n<iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-buttondropdown?embed=1&file=app/forms/buttondropdown/buttondropdown.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n      </amexio-tab>\n    </amexio-tab-view>\n  </amexio-body>\n</amexio-card>\n<!--<amexio-notification [data]=\"copyMsgArray\"></amexio-notification>-->\n\n\n  "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ButtonDropDownDemo);
    return ButtonDropDownDemo;
}());



/***/ })

}]);
//# sourceMappingURL=forms-buttondropdown-buttondropdown-demo-module.js.map