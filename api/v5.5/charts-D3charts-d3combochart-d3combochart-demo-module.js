(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-D3charts-d3combochart-d3combochart-demo-module"],{

/***/ "./src/app/charts/D3charts/d3combochart/d3combochart.demo.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3combochart/d3combochart.demo.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card header=\"true\">\n    <amexio-header>\n        D3 Combo Chart\n    </amexio-header>\n    <amexio-body>\n        <p>An D3 Combo chart that is rendered within the browser using SVG .Displays tips when hovering over points.</p>\n        <amexio-tab-view>\n            <amexio-tab title=\"Demo\" active=\"true\">\n                <amexio-row>\n                    <amexio-column [size]=\"12\">\n                          <!-- bar + line + data sc1 -->\n                        <amexio-row>\n                            <amexio-column [size]=\"8\" [fit]=\"true\">\n                                <amexio-card [header]=\"true\" [show]=\"'true'\">\n                                    <amexio-header>\n                                        D3-Combo Chart with bar, line and Data attribute\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <amexio-d3-combochart [title]=\"'Rice Production in India'\" \n                                         (onChartClick)=\"onDefaultChartClicksc1($event)\"\n                                        (onLineClick)=\"onDefaultLineClicksc1($event)\"\n                                        (onLegendClick)=\"onUserDefineLegendClicksc1($event)\" \n                                        [data]=\"barData\"\n                                        [bar-data-index]=\"barArray\"\n                                        [line-data-index]=\"lineArray\"\n                                        >\n                                        </amexio-d3-combochart>\n                                    </amexio-body>\n                                </amexio-card>\n                            </amexio-column>\n                            <amexio-column [size]=\"4\" [fit]=\"true\">\n                                <amexio-card header=\"true\">\n                                    <amexio-header>\n                                        Click On Legend/ Click on Chart\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <pre><code>{{userDataSourcesc1 |json }}</code></pre>\n\n                                    </amexio-body>\n                                </amexio-card>\n                            </amexio-column>\n                        </amexio-row>\n                         <!-- line + data sc2-->\n                        <amexio-row>\n                            <amexio-column [size]=\"8\" [fit]=\"true\">\n                                <amexio-card [header]=\"true\" [show]=\"'true'\">\n                                    <amexio-header>\n                                        D3-Combo Chart with data and line attribute\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <amexio-d3-combochart [title]=\"'Rice Production in India'\"\n                                         (onChartClick)=\"onDefaultChartClicksc2($event)\" \n                                        (onLineClick)=\"onDefaultLineClicksc2($event)\"\n                                        (onLegendClick)=\"onUserDefineLegendClicksc2($event)\" \n                                        [data]=\"barData\"\n                                        [line-data-index]=\"lineArray2\"\n                                        >\n                                        </amexio-d3-combochart>\n                                    </amexio-body>\n                                </amexio-card>\n                            </amexio-column>\n                            <amexio-column [size]=\"4\" [fit]=\"true\">\n                                <amexio-card header=\"true\">\n                                    <amexio-header>\n                                        Click On Legend/ Click on Chart\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <pre><code>{{userDataSourcesc2 |json }}</code></pre>\n\n                                    </amexio-body>\n                                </amexio-card>\n                            </amexio-column>\n                        </amexio-row>\n                        <!-- bar + data sc3-->\n                        <amexio-row>\n                            <amexio-column [size]=\"8\" [fit]=\"true\">\n                                <amexio-card [header]=\"true\" [show]=\"'true'\">\n                                    <amexio-header>\n                                        D3-Combo Chart with bar and data attribute\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <amexio-d3-combochart [title]=\"'Rice Production in India'\" \n                                         (onChartClick)=\"onDefaultChartClicksc3($event)\" \n                                        (onLineClick)=\"onDefaultLineClicksc3($event)\"\n                                        (onLegendClick)=\"onUserDefineLegendClicksc3($event)\" \n                                        [data]=\"barData\"\n                                        [bar-data-index]=\"barArray\"\n                                        >\n                                        </amexio-d3-combochart>\n                                    </amexio-body>\n                                </amexio-card>\n                            </amexio-column>\n                            <amexio-column [size]=\"4\" [fit]=\"true\">\n                                <amexio-card header=\"true\">\n                                    <amexio-header>\n                                        Click On Legend/ Click on Chart\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <pre><code>{{userDataSourcesc3 |json }}</code></pre>\n\n                                    </amexio-body>\n                                </amexio-card>\n                            </amexio-column>\n                        </amexio-row>\n                        <!-- only data sc4-->\n                        <amexio-row>\n                            <amexio-column [size]=\"8\" [fit]=\"true\">\n                                <amexio-card [header]=\"true\" [show]=\"'true'\">\n                                    <amexio-header>\n                                        D3-Combo Chart with only data attribute\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <amexio-d3-combochart [title]=\"'Rice Production in India'\" \n                                        [label]=\"true\" \n                                        (onChartClick)=\"onDefaultChartClicksc4($event)\"  \n                                        (onLineClick)=\"onDefaultLineClicksc4($event)\"\n                                        (onLegendClick)=\"onUserDefineLegendClicksc4($event)\" \n                                        [data]=\"barData\"\n                                        >\n                                        </amexio-d3-combochart>\n                                    </amexio-body>\n                                </amexio-card>\n                            </amexio-column>\n                            <amexio-column [size]=\"4\" [fit]=\"true\">\n                                <amexio-card header=\"true\">\n                                    <amexio-header>\n                                        Click On Legend/ Click on Chart\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <pre><code>{{userDataSourcesc4 |json }}</code></pre>\n\n                                    </amexio-body>\n                                </amexio-card>\n                            </amexio-column>\n                        </amexio-row>\n                    </amexio-column>\n                </amexio-row>\n\n\n            </amexio-tab>\n            <amexio-tab title=\"API Reference\">\n                <amexio-datagrid title=\"D3-Combo-Chart Properties<amexio-d3-combochart>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\"\n                    [http-url]=\"'assets/apireference/charts/d3charts/d3combochart.json'\" [data-reader]=\"'properties'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'version'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"40\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <amexio-datagrid title=\"Legend<amexio-d3-combochart>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/charts/d3charts/d3combochart.json'\"\n                    [data-reader]=\"'legend'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'version'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"55\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <amexio-datagrid title=\"Chart Event <amexio-d3-combochart>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/charts/d3charts/d3combochart.json'\"\n                    [data-reader]=\"'chartevent'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'version'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"55\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n            </amexio-tab>\n            <amexio-tab title=\"Source\">\n                <div style=\"overflow-y: scroll\">\n                    <amexio-vertical-tab-view>\n                        <amexio-tab title=\"HTML\" [active]=\"true\">\n                            <ng-container *ngIf=\"htmlCode\">\n                                <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                                <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"Type Script\">\n                            <ng-container *ngIf=\"typeScriptCode\">\n                                <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"Data Source\">\n                            <ng-container *ngIf=\"dataSourceCode\">\n                                <prism-block [code]=\"dataSourceCode\" [language]=\"'json'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                    </amexio-vertical-tab-view>\n                </div>\n            </amexio-tab>\n            <amexio-tab title=\"Live\">\n                <p align=\"center\">Amexio Sandbox</p>\n                <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-d3-chart-combo?embed=1&file=src/app/d3chart/d3linechart/d3linechart.demo.component.html&view=editor\"\n                    frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n            </amexio-tab>\n        </amexio-tab-view>\n    </amexio-body>\n</amexio-card>"

/***/ }),

/***/ "./src/app/charts/D3charts/d3combochart/d3combochart.demo.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3combochart/d3combochart.demo.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AmexioD3ComboChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmexioD3ComboChartDemoComponent", function() { return AmexioD3ComboChartDemoComponent; });
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


var AmexioD3ComboChartDemoComponent = /** @class */ (function () {
    function AmexioD3ComboChartDemoComponent(http) {
        this.http = http;
        this.lineArray = [];
        this.lineArray2 = [];
        this.barArray = [];
        this.getHtmlAndTypeScriptCode();
    }
    AmexioD3ComboChartDemoComponent.prototype.ngOnInit = function () {
        this.barData = [
            ['State', 'Corn Export', 'Bajra Export', 'Rice Export', 'Wheat Export', 'Jowar Export'],
            ['Andhra Pradesh', 600, 500, 250, 50, 95],
            ['Kerala', 500, 400, 75, 150, 195],
            ['Tamil Nadu', 400, 300, 250, 50, 95],
            ['Assam', 250, 150, 75, 150, 195],
            ['Maharshtra', 300, 200, 250, 50, 95]
        ];
        this.lineArray = [
            { column: "Rice Export", label: true, color: "#7a3b2e" },
            { column: "Jowar Export" },
            { column: "Wheat Export" }
        ];
        this.lineArray2 = [
            { column: "Jowar Export" },
            { column: "Wheat Export", label: true }
        ];
        this.barArray = [
            { column: "Corn Export", label: true },
            { column: "Bajra Export", label: true }
        ];
    };
    //scenario 1 bar + line + data
    AmexioD3ComboChartDemoComponent.prototype.onDefaultChartClicksc1 = function (event) {
        this.userDataSourcesc1 = event;
    };
    AmexioD3ComboChartDemoComponent.prototype.onDefaultLineClicksc1 = function (event) {
        this.userDataSourcesc1 = event;
    };
    AmexioD3ComboChartDemoComponent.prototype.onUserDefineLegendClicksc1 = function (event) {
        this.userDataSourcesc1 = event;
    };
    //scenario 2 line + data
    AmexioD3ComboChartDemoComponent.prototype.onDefaultChartClicksc2 = function (event) {
        this.userDataSourcesc2 = event;
    };
    AmexioD3ComboChartDemoComponent.prototype.onDefaultLineClicksc2 = function (event) {
        this.userDataSourcesc2 = event;
    };
    AmexioD3ComboChartDemoComponent.prototype.onUserDefineLegendClicksc2 = function (event) {
        this.userDataSourcesc4 = event;
    };
    //scenario 3 bar + data
    AmexioD3ComboChartDemoComponent.prototype.onDefaultChartClicksc3 = function (event) {
        this.userDataSourcesc3 = event;
    };
    AmexioD3ComboChartDemoComponent.prototype.onDefaultLineClicksc3 = function (event) {
        this.userDataSourcesc3 = event;
    };
    AmexioD3ComboChartDemoComponent.prototype.onUserDefineLegendClicksc3 = function (event) {
        this.userDataSourcesc3 = event;
    };
    //scenario 4 data
    AmexioD3ComboChartDemoComponent.prototype.onDefaultChartClicksc4 = function (event) {
        this.userDataSourcesc4 = event;
    };
    AmexioD3ComboChartDemoComponent.prototype.onDefaultLineClicksc4 = function (event) {
        this.userDataSourcesc4 = event;
    };
    AmexioD3ComboChartDemoComponent.prototype.onUserDefineLegendClicksc4 = function (event) {
        this.userDataSourcesc4 = event;
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    AmexioD3ComboChartDemoComponent.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        var dataSource;
        //HTML FILE
        this.http.get('assets/data/code/charts/D3Charts/d3combochart/d3chart.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        // TS FILE
        this.http.get('assets/data/code/charts/D3Charts/d3combochart/d3chart.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
        // DataSource FILE
        this.http.get('assets/data/code/charts/D3Charts/d3combochart/datasource.json', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.dataSourceCode = responseTs;
        });
        // User DataSource FILE
        this.http.get('assets/data/code/charts/D3Charts/d3combochart/usersource.json', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.userDataSourceCode = responseTs;
        });
    };
    //this code use copy to html code from tabpanel
    AmexioD3ComboChartDemoComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    AmexioD3ComboChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'amexio-d3-chart-combo-demo',
            template: __webpack_require__(/*! ./d3combochart.demo.component.html */ "./src/app/charts/D3charts/d3combochart/d3combochart.demo.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AmexioD3ComboChartDemoComponent);
    return AmexioD3ComboChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/D3charts/d3combochart/d3combochart.demo.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3combochart/d3combochart.demo.module.ts ***!
  \**************************************************************************/
/*! exports provided: D3ComboChartDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3ComboChartDemoModule", function() { return D3ComboChartDemoModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _d3combochart_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./d3combochart.demo.component */ "./src/app/charts/D3charts/d3combochart/d3combochart.demo.component.ts");
/* harmony import */ var amexio_chart_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! amexio-chart-d3 */ "./node_modules/amexio-chart-d3/fesm5/amexio-chart-d3.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var D3ComboChartDemoModule = /** @class */ (function () {
    function D3ComboChartDemoModule() {
    }
    D3ComboChartDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [_d3combochart_demo_component__WEBPACK_IMPORTED_MODULE_7__["AmexioD3ComboChartDemoComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([{
                        path: '', component: _d3combochart_demo_component__WEBPACK_IMPORTED_MODULE_7__["AmexioD3ComboChartDemoComponent"], pathMatch: 'full'
                    }]), amexio_chart_d3__WEBPACK_IMPORTED_MODULE_8__["AmexioChartD3Module"]],
            providers: []
        })
    ], D3ComboChartDemoModule);
    return D3ComboChartDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=charts-D3charts-d3combochart-d3combochart-demo-module.js.map