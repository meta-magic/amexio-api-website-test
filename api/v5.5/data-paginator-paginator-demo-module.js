(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-paginator-paginator-demo-module"],{

/***/ "./src/app/data/paginator/paginator.demo.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/data/paginator/paginator.demo.module.ts ***!
  \*********************************************************/
/*! exports provided: PaginatorDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorDemoModule", function() { return PaginatorDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _paginator_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paginator.demo */ "./src/app/data/paginator/paginator.demo.ts");
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
var PaginatorDemoModule = /** @class */ (function () {
    function PaginatorDemoModule() {
    }
    PaginatorDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_paginator_demo__WEBPACK_IMPORTED_MODULE_6__["PaginatorDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _paginator_demo__WEBPACK_IMPORTED_MODULE_6__["PaginatorDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], PaginatorDemoModule);
    return PaginatorDemoModule;
}());



/***/ }),

/***/ "./src/app/data/paginator/paginator.demo.ts":
/*!**************************************************!*\
  !*** ./src/app/data/paginator/paginator.demo.ts ***!
  \**************************************************/
/*! exports provided: PaginatorDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorDemo", function() { return PaginatorDemo; });
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


var PaginatorDemo = /** @class */ (function () {
    function PaginatorDemo(http) {
        this.http = http;
        this.currentPage = 1;
        this.getHtmlAndTypeScriptCode();
    }
    //TO LOAD HTML AND TYPESCRIPT CODE
    PaginatorDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/data/paginator/paginator.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/data/paginator/paginator.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    PaginatorDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    PaginatorDemo.prototype.loadPageData = function (pageNumber) {
        this.currentPage = pageNumber;
    };
    PaginatorDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'paginator-demo', template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n         Paginator \n      </amexio-header>\n      <amexio-body>\n        <p>Paginator is a generic widget to display content in paged format.</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n            <amexio-row>\n              <amexio-column size=\"12\">\n                <amexio-card [header]=\"true\">\n                  <amexio-header>\n                     Paginator with page size 10 \n                  </amexio-header>\n                  <amexio-body>\n                    <amexio-paginator [pages]=\"50\" \n                                      [rows]=\"10\"\n                                      (onPageChange)=\"loadPageData($event)\">\n                    </amexio-paginator>\n                    <p>Current active page :  {{currentPage}}</p>\n                  </amexio-body>\n                </amexio-card>\n\n              </amexio-column>\n            </amexio-row>\n          <amexio-row>\n              <amexio-column size=\"12\">\n                <amexio-card [header]=\"true\">\n                  <amexio-header>\n                     Paginator with page size 5 \n                  </amexio-header>\n                  <amexio-body>\n                    <amexio-paginator [pages]=\"30\"\n                                      [rows]=\"5\">\n                    </amexio-paginator>\n                  </amexio-body>\n                </amexio-card>\n\n              </amexio-column>\n            </amexio-row>\n          </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Properties<amexio-paginator>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/data/paginator.json'\"\n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [data-index]=\"'name'\" [width]=\"15\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'type'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'default'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'description'\" [width]=\"65\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br>\n            <amexio-datagrid title=\"Events\" [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/data/paginator.json'\" [data-reader]=\"'events'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [data-index]=\"'name'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'description'\" [width]=\"70\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n\n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n            <amexio-vertical-tab-view>\n              <amexio-tab title=\"HTML\" [active]=\"true\">\n                <ng-container *ngIf=\"htmlCode\">\n                  <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                  <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Type Script\">\n                <ng-container *ngIf=\"typeScriptCode\">\n                  <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n            </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n                     <p align=\"center\">Amexio Sandbox</p>\n<iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-paginator?embed=1&file=app/data/paginator/paginator.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n  "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PaginatorDemo);
    return PaginatorDemo;
}());



/***/ })

}]);
//# sourceMappingURL=data-paginator-paginator-demo-module.js.map