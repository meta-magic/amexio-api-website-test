(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-row-row-demo-module"],{

/***/ "./src/app/layout/row/row.demo.module.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/row/row.demo.module.ts ***!
  \***********************************************/
/*! exports provided: RowDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowDemoModule", function() { return RowDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _row_demo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./row.demo */ "./src/app/layout/row/row.demo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Created by sagar on 11/1/18.
 */
var RowDemoModule = /** @class */ (function () {
    function RowDemoModule() {
    }
    RowDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_row_demo__WEBPACK_IMPORTED_MODULE_7__["RowDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"], _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _row_demo__WEBPACK_IMPORTED_MODULE_7__["RowDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], RowDemoModule);
    return RowDemoModule;
}());



/***/ }),

/***/ "./src/app/layout/row/row.demo.ts":
/*!****************************************!*\
  !*** ./src/app/layout/row/row.demo.ts ***!
  \****************************************/
/*! exports provided: RowDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowDemo", function() { return RowDemo; });
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


var RowDemo = /** @class */ (function () {
    function RowDemo(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
    }
    //TO LOAD HTML AND TYPESCRIPT CODE
    RowDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/layout/row/layout.html').subscribe(function (data) {
            responseHtml = data.text();
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/layout/row/layout.text').subscribe(function (data) {
            responseTs = data.text();
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    RowDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    RowDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'row-demo', template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n        Row\n      </amexio-header>\n      <amexio-body>\n        <p>Amexio uses a series of rows and columns to layout and align content and is fully responsive.</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n            <amexio-card header=\"true\">\n              <amexio-header>1 Row 3 Column</amexio-header>\n              <amexio-body>\n                <amexio-row>\n                  <amexio-column size=\"4\">\n                    <amexio-card>\n                      <amexio-body>COL 4</amexio-body>\n                    </amexio-card>\n                  </amexio-column>\n                  <amexio-column size=\"4\">\n                    <amexio-card>\n                      <amexio-body>COL 4</amexio-body>\n                    </amexio-card>\n                  </amexio-column>\n                  <amexio-column size=\"4\">\n                    <amexio-card>\n                      <amexio-body>COL 4</amexio-body>\n                    </amexio-card>\n                  </amexio-column>\n                </amexio-row>\n              </amexio-body>\n            </amexio-card>\n            <amexio-card header=\"true\">\n              <amexio-header>2 Row 2 Column</amexio-header>\n              <amexio-body>\n                <amexio-row>\n                  <amexio-column size=\"6\">\n                    <amexio-card>\n                      <amexio-body>COL 6</amexio-body>\n                    </amexio-card>\n                  </amexio-column>\n                  <amexio-column size=\"6\">\n                    <amexio-card>\n                      <amexio-body>COL 6</amexio-body>\n                    </amexio-card>\n                  </amexio-column>\n                </amexio-row>\n                <amexio-row>\n                  <amexio-column size=\"6\">\n                    <amexio-card>\n                      <amexio-body>COL 6</amexio-body>\n                    </amexio-card>\n                  </amexio-column>\n                  <amexio-column size=\"6\">\n                    <amexio-card>\n                      <amexio-body>COL 6</amexio-body>\n                    </amexio-card>\n                  </amexio-column>\n                </amexio-row>\n              </amexio-body>\n            </amexio-card>\n      \n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n            <amexio-vertical-tab-view>\n              <amexio-tab title=\"HTML\" [active]=\"true\">\n                <ng-container *ngIf=\"htmlCode\">\n                  <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                  <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Type Script\">\n                <ng-container *ngIf=\"typeScriptCode\">\n                  <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n            </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n          <p align=\"center\">Amexio Sandbox</p>\n          <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-rowlayout?embed=1&file=app/layouts/row/row.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n    <!--<amexio-notification [data]=\"copyMsgArray\"></amexio-notification>-->\n\n  "
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], RowDemo);
    return RowDemo;
}());



/***/ })

}]);
//# sourceMappingURL=layout-row-row-demo-module.js.map