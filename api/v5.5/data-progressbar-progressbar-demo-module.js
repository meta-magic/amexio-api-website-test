(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-progressbar-progressbar-demo-module"],{

/***/ "./src/app/data/progressbar/progressbar.demo.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/data/progressbar/progressbar.demo.module.ts ***!
  \*************************************************************/
/*! exports provided: ProgressBarDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarDemoModule", function() { return ProgressBarDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _progressbar_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./progressbar.demo */ "./src/app/data/progressbar/progressbar.demo.ts");
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
var ProgressBarDemoModule = /** @class */ (function () {
    function ProgressBarDemoModule() {
    }
    ProgressBarDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_progressbar_demo__WEBPACK_IMPORTED_MODULE_6__["ProgressBarDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _progressbar_demo__WEBPACK_IMPORTED_MODULE_6__["ProgressBarDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], ProgressBarDemoModule);
    return ProgressBarDemoModule;
}());



/***/ }),

/***/ "./src/app/data/progressbar/progressbar.demo.ts":
/*!******************************************************!*\
  !*** ./src/app/data/progressbar/progressbar.demo.ts ***!
  \******************************************************/
/*! exports provided: ProgressBarDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarDemo", function() { return ProgressBarDemo; });
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


var ProgressBarDemo = /** @class */ (function () {
    function ProgressBarDemo(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
    }
    //TO LOAD HTML AND TYPESCRIPT CODE
    ProgressBarDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/data/progressbar/progressbar.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/data/progressbar/progressbar.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    ProgressBarDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    ProgressBarDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'progressbar-demo', template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n         Progress Bar\n      </amexio-header>\n      <amexio-body>\n        <p>Progress Bar Component Provides up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars and easy to configure.</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n            <amexio-row>\n              <amexio-column size=\"12\">\n                <amexio-card [header]=\"true\">\n                  <amexio-header>\n                     Progress Bar\n                  </amexio-header>\n                  <amexio-body>\n\n                     <h3>Primary</h3>\n                    <amexio-row>\n                      <amexio-column [size]=\"4\">\n                        <amexio-progress-bar [current-value]=\"'50'\" [infinite]=\"false\" type=\"success\"></amexio-progress-bar>\n                      </amexio-column>\n                      <amexio-column [size]=\"4\">\n                        <amexio-progress-bar [current-value]=\"'80'\" [infinite]=\"false\" type=\"success\"></amexio-progress-bar>\n                      </amexio-column>\n                      <amexio-column [size]=\"4\">\n                        <amexio-progress-bar [current-value]=\"'100'\" [infinite]=\"false\" type=\"success\"></amexio-progress-bar>\n                      </amexio-column>\n                    </amexio-row>\n                    <h3>Warning</h3>\n                    <amexio-row>\n                      <amexio-column [size]=\"4\">\n                        <amexio-progress-bar [current-value]=\"'30'\" [infinite]=\"false\" type=\"warning\"></amexio-progress-bar>\n                      </amexio-column>\n                      <amexio-column [size]=\"4\">\n                        <amexio-progress-bar [current-value]=\"'55'\" [infinite]=\"false\" type=\"warning\"></amexio-progress-bar>\n                      </amexio-column>\n                      <amexio-column [size]=\"4\">\n                        <amexio-progress-bar [current-value]=\"'95'\" [infinite]=\"false\" type=\"warning\"></amexio-progress-bar>\n                      </amexio-column>\n                    </amexio-row>\n                    <h3>Success</h3>\n                    <amexio-row>\n                      <amexio-column [size]=\"4\">\n                        <amexio-progress-bar [current-value]=\"'45'\" [infinite]=\"false\" type=\"success\"></amexio-progress-bar>\n                      </amexio-column>\n                      <amexio-column [size]=\"4\">\n                        <amexio-progress-bar [current-value]=\"'63'\" [infinite]=\"false\" type=\"success\"></amexio-progress-bar>\n                      </amexio-column>\n                      <amexio-column [size]=\"4\">\n                        <amexio-progress-bar [current-value]=\"'99'\" [infinite]=\"false\" type=\"success\"></amexio-progress-bar>\n                      </amexio-column>\n                    </amexio-row>\n                    <h3>Danger</h3>\n                    <amexio-row>\n                      <amexio-column [size]=\"4\">\n                        <amexio-progress-bar [current-value]=\"'54'\" [infinite]=\"false\" type=\"danger\"></amexio-progress-bar>\n                      </amexio-column>\n                      <amexio-column [size]=\"4\">\n                        <amexio-progress-bar [current-value]=\"'32'\" [infinite]=\"false\" type=\"danger\"></amexio-progress-bar>\n                      </amexio-column>\n                      <amexio-column [size]=\"4\">\n                        <amexio-progress-bar [current-value]=\"'85'\" [infinite]=\"false\" type=\"danger\"></amexio-progress-bar>\n                      </amexio-column>\n                    </amexio-row>\n                    <h3>Infinite</h3>\n                    <amexio-row>\n                      <amexio-column [size]=\"4\">\n                        <amexio-progress-bar [stripped]=\"true\" [current-value]=\"'54'\" [infinite]=\"true\"  type=\"danger\"></amexio-progress-bar>\n                      </amexio-column>\n                      <amexio-column [size]=\"4\">\n                        <amexio-progress-bar [stripped]=\"true\" [current-value]=\"'32'\" [infinite]=\"true\" type=\"success\"></amexio-progress-bar>\n                      </amexio-column>\n                      <amexio-column [size]=\"4\">\n                        <amexio-progress-bar [stripped]=\"true\" [current-value]=\"'85'\" [infinite]=\"true\" type=\"warning\"></amexio-progress-bar>\n                      </amexio-column>\n                    </amexio-row>\n                    <h3>Amexio - Colours </h3>\n                  <amexio-row>\n                    <amexio-column [size]=\"4\">\n                      <amexio-progress-bar [current-value]=\"'50'\" [infinite]=\"false\" [amexio-color]=\"'amexio-purple'\"></amexio-progress-bar>\n                    </amexio-column>\n                    <amexio-column [size]=\"4\">\n                      <amexio-progress-bar  [current-value]=\"'80'\" [infinite]=\"false\" [amexio-color]=\"'amexio-green'\"></amexio-progress-bar>\n                    </amexio-column>\n                    <amexio-column [size]=\"4\">\n                      <amexio-progress-bar  [current-value]=\"'100'\" [infinite]=\"false\" [amexio-color]=\"'amexio-yellow'\"></amexio-progress-bar>\n                    </amexio-column>\n                  </amexio-row>\n\n                  <amexio-row>\n                    <amexio-column [size]=\"3\">\n                      <amexio-progress-bar [stripped]=\"true\"  [current-value]=\"'50'\" [infinite]=\"false\" [amexio-color]=\"'amexio-red'\"></amexio-progress-bar>\n                    </amexio-column>\n                    <amexio-column [size]=\"3\">\n                      <amexio-progress-bar [stripped]=\"true\" [current-value]=\"'80'\" [infinite]=\"false\" [amexio-color]=\"'amexio-blue'\"></amexio-progress-bar>\n                    </amexio-column>\n                    <amexio-column [size]=\"3\">\n                      <amexio-progress-bar [stripped]=\"true\" [current-value]=\"'60'\" [infinite]=\"false\" [amexio-color]=\"'amexio-brown'\"></amexio-progress-bar>\n                    </amexio-column>\n                    <amexio-column [size]=\"3\">\n                    <amexio-progress-bar [stripped]=\"true\" [current-value]=\"'54'\" [infinite]=\"true\"  [amexio-color]=\"'amexio-black'\"></amexio-progress-bar>\n                    </amexio-column>\n                  </amexio-row>\n                  </amexio-body>\n                </amexio-card>\n\n              </amexio-column>\n            </amexio-row>\n          </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Properties<amexio-progress-bar>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/data/progressbar.json'\"\n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [data-index]=\"'name'\" [width]=\"15\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'type'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'default'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'description'\" [width]=\"65\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n            <amexio-vertical-tab-view>\n              <amexio-tab title=\"HTML\" [active]=\"true\">\n                <ng-container *ngIf=\"htmlCode\">\n                  <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                  <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Type Script\">\n                <ng-container *ngIf=\"typeScriptCode\">\n                  <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n            </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n                      <p align=\"center\">Amexio Sandbox</p>\n<iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-progressbar?embed=1&file=app/data/progressbar/progressbar.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n  "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProgressBarDemo);
    return ProgressBarDemo;
}());



/***/ })

}]);
//# sourceMappingURL=data-progressbar-progressbar-demo-module.js.map