(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-tab-scrollabletab-scrollabletab-demo-module"],{

/***/ "./src/app/layout/tab/scrollabletab/scrollabletab.demo.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/tab/scrollabletab/scrollabletab.demo.module.ts ***!
  \***********************************************************************/
/*! exports provided: ScrollableTabDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollableTabDemoModule", function() { return ScrollableTabDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _scrollabletab_demo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scrollabletab.demo */ "./src/app/layout/tab/scrollabletab/scrollabletab.demo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Created by sagar on 11/1/18.
 */
var ScrollableTabDemoModule = /** @class */ (function () {
    function ScrollableTabDemoModule() {
    }
    ScrollableTabDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_scrollabletab_demo__WEBPACK_IMPORTED_MODULE_7__["ScrollableTabDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"], _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _scrollabletab_demo__WEBPACK_IMPORTED_MODULE_7__["ScrollableTabDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], ScrollableTabDemoModule);
    return ScrollableTabDemoModule;
}());



/***/ }),

/***/ "./src/app/layout/tab/scrollabletab/scrollabletab.demo.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/tab/scrollabletab/scrollabletab.demo.ts ***!
  \****************************************************************/
/*! exports provided: ScrollableTabDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollableTabDemo", function() { return ScrollableTabDemo; });
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


var ScrollableTabDemo = /** @class */ (function () {
    function ScrollableTabDemo(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
    }
    //TO LOAD HTML AND TYPESCRIPT CODE
    ScrollableTabDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/layout/tab/scrollabletab/tab.html').subscribe(function (data) {
            responseHtml = data.text();
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/layout/tab/scrollabletab/tab.text').subscribe(function (data) {
            responseTs = data.text();
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    ScrollableTabDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    ScrollableTabDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'scrollable-tab-demo', template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n         Scrollable Tab \n      </amexio-header>\n      <amexio-body>\n        <p>Scrollable Tab component for Angular Apps with multiple configurations such as Tab, Icon support, Scrollable tabs, Closable tab, Vertical Tabs</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n            <amexio-tab-view  [closable]=\"true\">\n            <amexio-tab [title]=\"'Tab 1'\" [active]=\"true\">\n              <amexio-label [size]=\"'medium'\">Tab 1</amexio-label>\n            </amexio-tab>\n              <amexio-tab [title]=\"'Tab 2'\">\n                <amexio-label [size]=\"'medium'\">Tab 2</amexio-label>\n              </amexio-tab>\n              <amexio-tab [title]=\"'Tab 3'\">\n                <amexio-label [size]=\"'medium'\">Tab 3</amexio-label>\n              </amexio-tab>\n              <amexio-tab [title]=\"'Tab 4'\">\n                <amexio-label [size]=\"'medium'\">Tab 4</amexio-label>\n              </amexio-tab>\n              <amexio-tab [title]=\"'Tab 5'\">\n                <amexio-label [size]=\"'medium'\">Tab 5</amexio-label>\n              </amexio-tab> \n              <amexio-tab [title]=\"'Tab 6'\">\n                <amexio-label [size]=\"'medium'\">Tab 6</amexio-label>\n            </amexio-tab> <amexio-tab [title]=\"'Tab 7'\">\n              <amexio-label [size]=\"'medium'\">Tab 7</amexio-label>\n            </amexio-tab> <amexio-tab [title]=\"'Tab 8'\">\n\n              <amexio-label [size]=\"'medium'\">Tab 8</amexio-label>\n            </amexio-tab>\n              <amexio-tab [title]=\"'Tab 9'\">\n               <amexio-label [size]=\"'medium'\">Tab 9</amexio-label>\n              </amexio-tab>\n              <amexio-tab [title]=\"'Tab 10'\">\n                <amexio-label [size]=\"'medium'\">Tab 10</amexio-label>\n          \n              </amexio-tab>\n              <amexio-tab [title]=\"'Tab 11'\">\n                <amexio-label [size]=\"'medium'\">Tab 11</amexio-label>\n              </amexio-tab>\n              <amexio-tab [title]=\"'Tab 12'\">\n                <amexio-label [size]=\"'medium'\">Tab 12</amexio-label>\n              </amexio-tab>\n              <amexio-tab [title]=\"'Tab 13'\">\n                <amexio-label [size]=\"'medium'\">Tab 13</amexio-label>\n              </amexio-tab>  \n              <amexio-tab [title]=\"'Tab 14'\">\n                <amexio-label [size]=\"'medium'\">Tab 14</amexio-label>\n            </amexio-tab>  \n              <amexio-tab [title]=\"'Tab 15'\">\n                <amexio-label [size]=\"'medium'\">Tab 15</amexio-label>\n            </amexio-tab>  \n              <amexio-tab [title]=\"'Tab 16'\">\n                <amexio-label [size]=\"'medium'\">Tab 16</amexio-label>\n            </amexio-tab>  \n              <amexio-tab [title]=\"'Tab 17'\">\n                <amexio-label [size]=\"'medium'\">Tab 17</amexio-label>\n            </amexio-tab> \n              <amexio-tab [title]=\"'Tab 18'\">\n                <amexio-label [size]=\"'medium'\">Tab 18</amexio-label>\n            </amexio-tab>  \n            </amexio-tab-view>\n          </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Tab View Properties  <amexio-tab-view>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/layout/tab/horizontaltab.json'\"\n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\" >\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"20\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Version'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"45\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br>\n            <amexio-datagrid title=\"Tab Properties  <amexio-tab>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/layout/tab/horizontaltab.json'\"\n                             [data-reader]=\"'tabproperties'\"\n                             [enable-data-filter]=\"false\" >\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"20\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Version'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"45\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br>\n            <amexio-datagrid title=\"Tab Events\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/layout/tab/horizontaltab.json'\"\n                             [data-reader]=\"'events'\"\n                             [enable-data-filter]=\"false\" >\n              <amexio-data-table-column [width]=\"40\"[data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"60\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br>\n            <amexio-datagrid title=\"Tab Methods\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/layout/tab/horizontaltab.json'\"\n                             [data-reader]=\"'methods'\"\n                             [enable-data-filter]=\"false\" >\n              <amexio-data-table-column [width]=\"40\"[data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"20\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Version'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"40\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n\n          </amexio-tab>\n\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n            <amexio-vertical-tab-view>\n              <amexio-tab title=\"HTML\" [active]=\"true\">\n                <ng-container *ngIf=\"htmlCode\">\n                  <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                  <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Type Script\">\n                <ng-container *ngIf=\"typeScriptCode\">\n                  <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n            </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n          <p align=\"center\">Amexio Sandbox</p>\n          <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-horizontal-scrollable-tab?embed=1&file=app/tabs/scrollabletab/scrollabletab.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n    <!--<amexio-notification [data]=\"copyMsgArray\"></amexio-notification>-->\n\n  "
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ScrollableTabDemo);
    return ScrollableTabDemo;
}());



/***/ })

}]);
//# sourceMappingURL=layout-tab-scrollabletab-scrollabletab-demo-module.js.map