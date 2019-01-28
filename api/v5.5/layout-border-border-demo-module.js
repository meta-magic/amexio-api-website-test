(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-border-border-demo-module"],{

/***/ "./src/app/layout/border/border.demo.component.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/border/border.demo.component.ts ***!
  \********************************************************/
/*! exports provided: BorderDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorderDemoComponent", function() { return BorderDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by pratik on 16/1/18.
 */


var BorderDemoComponent = /** @class */ (function () {
    function BorderDemoComponent(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
    }
    BorderDemoComponent.prototype.getDta = function () {
        var _this = this;
        this.asyncFlag = true;
        setTimeout(function () {
            _this.asyncFlag = false;
        }, 3000);
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    BorderDemoComponent.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/border/border.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/border/border.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    BorderDemoComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    BorderDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'border-demo',
            template: __webpack_require__(/*! ./border.demo.html */ "./src/app/layout/border/border.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BorderDemoComponent);
    return BorderDemoComponent;
}());



/***/ }),

/***/ "./src/app/layout/border/border.demo.html":
/*!************************************************!*\
  !*** ./src/app/layout/border/border.demo.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card header=\"true\">\n    <amexio-header>\n        Border Layout\n    </amexio-header>\n    <amexio-body>\n        <p>A border layout lays out a container, arranging and resizing its components to fit in five regions: north,\n            south, east, west, and center.</p>\n        <amexio-tab-view>\n            <amexio-tab title=\"Demo\" active=\"true\">\n                <amexio-card header=\"true\">\n                    <amexio-header> Border Layout</amexio-header>\n                    <amexio-body>\n                        <amexio-borderlayout>\n                            <amexio-borderlayout-item position=\"north\">\n\n\n                                <amexio-panel  [header]=\"true\" [border]=\"false\" [title]=\"'North Panel'\" [expanded]=\"true\">\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\n                                    deserunt mollit anim id est laborum.\n                                </amexio-panel>\n\n\n                            </amexio-borderlayout-item>\n                            <amexio-borderlayout-item position=\"east\">\n                                <amexio-panel  [header]=\"true\" [border]=\"false\" [title]=\"'East Panel'\" [expanded]=\"true\">\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\n                                    deserunt mollit anim id est laborum.\n                                </amexio-panel>\n                            </amexio-borderlayout-item>\n                            <amexio-borderlayout-item position=\"center\">\n\n                                <amexio-panel  [header]=\"true\" [border]=\"false\" [title]=\"'Center Panel'\" [expanded]=\"true\">\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\n                                    deserunt mollit anim id est laborum.\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\n                                    deserunt mollit anim id est laborum.\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\n                                    deserunt mollit anim id est laborum.\n\n                                </amexio-panel>\n\n                            </amexio-borderlayout-item>\n                            <amexio-borderlayout-item position=\"west\">\n                                <amexio-panel  [header]=\"true\" [border]=\"false\" [title]=\"'West Panel'\" [expanded]=\"true\">\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\n                                    deserunt mollit anim id est laborum.\n                                </amexio-panel>\n                            </amexio-borderlayout-item>\n                            <amexio-borderlayout-item position=\"south\">\n                                <amexio-panel  [header]=\"true\" [border]=\"false\" [title]=\"'South Panel'\" [expanded]=\"true\">\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\n                                    deserunt mollit anim id est laborum.\n                                </amexio-panel>\n                            </amexio-borderlayout-item>\n                        </amexio-borderlayout>\n                    </amexio-body>\n                </amexio-card>\n\n            </amexio-tab>\n            <amexio-tab title=\"API Reference\">\n                    <amexio-panel border=\"true\">\n                             <amexio-label>amexio-borderlayout is a container, which can contain multiple border layout items</amexio-label>\n                    </amexio-panel>\n                    <br>\n                    <amexio-box border-color=\"brown\" border=\"right-left\"  padding=\"true\" background-color=\"brown\">\n                            <amexio-label> <b>amexio-borderlayout acts as a container, which contains amexio-border-layout-item. </b>  </amexio-label>\n                          </amexio-box> \n                          <br>\n                <amexio-datagrid title=\"Properties <amexio-borderlayout-item>\" [enable-column-fiter]=\"false\"\n                    [http-method]=\"'get'\" [http-url]=\"'assets/apireference/border/borderlayoutitem.component.json'\"\n                    [data-reader]=\"'properties'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n            </amexio-tab>\n            <amexio-tab title=\"Source\">\n                <div style=\"overflow-y: scroll\">\n                    <amexio-vertical-tab-view>\n                        <amexio-tab title=\"HTML\" [active]=\"true\">\n                            <ng-container *ngIf=\"htmlCode\">\n                                <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                                <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"Type Script\">\n                            <ng-container *ngIf=\"typeScriptCode\">\n                                <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                    </amexio-vertical-tab-view>\n                </div>\n            </amexio-tab>\n            <amexio-tab title=\"Live\">\n                <p align=\"center\">Amexio Sandbox</p>\n                <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-borderlayout?embed=1&file=app/layouts/borderlayout/borderlayout.demo.html\"\n                    frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n            </amexio-tab>\n        </amexio-tab-view>\n    </amexio-body>\n</amexio-card>"

/***/ }),

/***/ "./src/app/layout/border/border.demo.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/border/border.demo.module.ts ***!
  \*****************************************************/
/*! exports provided: BorderDemoRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorderDemoRoutingModule", function() { return BorderDemoRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _border_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./border.demo.component */ "./src/app/layout/border/border.demo.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by pratik on 16/1/18.
 */







var routes = [
    { path: '', component: _border_demo_component__WEBPACK_IMPORTED_MODULE_2__["BorderDemoComponent"] },
];
var BorderDemoRoutingModule = /** @class */ (function () {
    function BorderDemoRoutingModule() {
    }
    BorderDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [_border_demo_component__WEBPACK_IMPORTED_MODULE_2__["BorderDemoComponent"]]
        })
    ], BorderDemoRoutingModule);
    return BorderDemoRoutingModule;
}());

var routedComponents = [_border_demo_component__WEBPACK_IMPORTED_MODULE_2__["BorderDemoComponent"]];


/***/ })

}]);
//# sourceMappingURL=layout-border-border-demo-module.js.map