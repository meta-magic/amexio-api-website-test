(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-D3charts-d3barstackchart-d3barstackchart-demo-module"],{

/***/ "./src/app/charts/D3charts/d3barstackchart/d3barstackchart.demo.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3barstackchart/d3barstackchart.demo.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card header=\"true\">\n    <amexio-header>\n        D3 bar-stack Chart\n    </amexio-header>\n    <amexio-body>\n        <p>An D3 bar-stack chart that is rendered within the browser using SVG .Displays tips when hovering over points.</p>\n        <amexio-tab-view>\n\n            <amexio-tab title=\"Demo\" active=\"true\">\n                <amexio-row>\n                    <amexio-column [size]=\"12\">\n\n                        <amexio-row>\n                            <amexio-column [size]=\"8\" [fit]=\"true\">\n                                <amexio-card [header]=\"true\" [show]=\"'true'\">\n                                    <amexio-header>\n                                        D3-bar-stack Chart with default Colors\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <amexio-d3-chart-barstack [data]=\"userDefineColorData\" [label]=\"true\" [label-color]=\"'white'\" [title]=\"'STACKBARCHART'\" (onLegendClick)=\"onUserDefineLegendClick($event)\"\n                                            (onChartClick)=\"onDefaultChartClick($event)\">\n                                        </amexio-d3-chart-barstack>\n                                    </amexio-body>\n                                </amexio-card>\n                            </amexio-column>\n                            <amexio-column [size]=\"4\" [fit]=\"true\">\n                                <amexio-card header=\"true\" >\n                                    <amexio-header>\n                                        Click On Legend/Click on Chart\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <pre><code>{{userDataSource |json }}</code></pre>\n\n                                    </amexio-body>\n                                </amexio-card>\n\n                            </amexio-column>\n\n                        </amexio-row>\n\n                        <amexio-row>\n                            <amexio-column [size]=\"8\" [fit]=\"true\">\n                                <amexio-card [header]=\"true\" [show]=\"'true'\">\n                                    <amexio-header>\n                                        D3-bar-stack Chart with User Defined Colors\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <amexio-d3-chart-barstack [data]=\"userDefineColorData\" [label]=\"true\" [color] = \"colorArray\" [title]=\"'STACKBARCHART'\" (onLegendClick)=\"onUserDefineLegendClick1($event)\"\n                                            (onChartClick)=\"onDefaultChartClick1($event)\">\n                                        </amexio-d3-chart-barstack>\n                                    </amexio-body>\n                                </amexio-card>\n                            </amexio-column>\n                            <amexio-column [size]=\"4\" [fit]=\"true\">\n                                <amexio-card header=\"true\" >\n                                    <amexio-header>\n                                        Click On Legend/Click on Chart\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <pre><code>{{userDataSource1 |json }}</code></pre>\n\n                                    </amexio-body>\n                                </amexio-card>\n\n                            </amexio-column>\n\n                        </amexio-row>\n\n                    </amexio-column>\n                </amexio-row>\n\n            </amexio-tab>\n\n            <amexio-tab title=\"API Reference\">\n                <amexio-datagrid title=\"D3-bar-stack-Chart Properties<amexio-d3-chart-bar-stack>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\"\n                    [http-url]=\"'assets/apireference/charts/d3charts/d3barstackchart.json'\" [data-reader]=\"'properties'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"[text]=\"'version'\"></amexio-data-table-column>                    \n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"45\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <amexio-datagrid title=\"Legend <amexio-d3-chart-bar-stack>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/charts/d3charts/d3barstackchart.json'\"\n                    [data-reader]=\"'legend'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"[text]=\"'version'\"></amexio-data-table-column>                    \n                    <amexio-data-table-column [width]=\"55\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <amexio-datagrid title=\"Chart Event <amexio-d3-chart-stack>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/charts/d3charts/d3barstackchart.json'\"\n                    [data-reader]=\"'chartevent'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"[text]=\"'version'\"></amexio-data-table-column>                    \n                    <amexio-data-table-column [width]=\"55\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n\n\n\n\n            </amexio-tab>\n            <amexio-tab title=\"Source\">\n                <div style=\"overflow-y: scroll\">\n                    <amexio-vertical-tab-view>\n                        <amexio-tab title=\"HTML\" [active]=\"true\">\n                            <ng-container *ngIf=\"htmlCode\">\n                                <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                                <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"Type Script\">\n                            <ng-container *ngIf=\"typeScriptCode\">\n                                <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"Data Source\">\n                            <ng-container *ngIf=\"dataSourceCode\">\n                              <prism-block [code]=\"dataSourceCode\" [language]=\"'json'\"></prism-block>\n                            </ng-container>\n                          </amexio-tab>\n                    </amexio-vertical-tab-view>\n                </div>\n            </amexio-tab>\n            <amexio-tab title=\"Live\">\n                <p align=\"center\">Amexio Sandbox</p>\n                <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-d3-chart-stackbar?embed=1&file=src/app/d3chart/d3stackbarchart/d3stackbarchart.demo.component.html&view=editor\"\n                    frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n            </amexio-tab>\n        </amexio-tab-view>\n    </amexio-body>\n</amexio-card>"

/***/ }),

/***/ "./src/app/charts/D3charts/d3barstackchart/d3barstackchart.demo.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3barstackchart/d3barstackchart.demo.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AmexioD3BarStackChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmexioD3BarStackChartDemoComponent", function() { return AmexioD3BarStackChartDemoComponent; });
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


var AmexioD3BarStackChartDemoComponent = /** @class */ (function () {
    function AmexioD3BarStackChartDemoComponent(http) {
        this.http = http;
        this.colorArray = ["blue",
            "yellow",
            "green"];
        this.getHtmlAndTypeScriptCode();
    }
    AmexioD3BarStackChartDemoComponent.prototype.ngOnInit = function () {
        this.userDefineColorData = [
            ['Year', 'Sales', 'Expenses', 'Profit'],
            ['2014', 1000, 400, 375],
            ['2015', 1170, 460, 250],
            ['2016', 660, 1120, 300],
            ['2017', 1030, 540, 350],
            ['2018', 900, 600, 275],
            ['2019', 600, 1000, 400]
        ];
    };
    AmexioD3BarStackChartDemoComponent.prototype.onUserDefineLegendClick = function (event) {
        this.userDataSource = event;
    };
    AmexioD3BarStackChartDemoComponent.prototype.onDefaultChartClick = function (event) {
        this.userDataSource = event;
    };
    AmexioD3BarStackChartDemoComponent.prototype.onUserDefineLegendClick1 = function (event) {
        this.userDataSource1 = event;
    };
    AmexioD3BarStackChartDemoComponent.prototype.onDefaultChartClick1 = function (event) {
        this.userDataSource1 = event;
    };
    // TO LOAD HTML AND TYPESCRIPT CODE
    AmexioD3BarStackChartDemoComponent.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        var dataSource;
        // HTML FILE
        this.http.get('assets/data/code/charts/D3Charts/d3barstackchart/d3chart.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //  TS FILE
        this.http.get('assets/data/code/charts/D3Charts/d3barstackchart/d3chart.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
        // DataSource FILE
        this.http.get('assets/data/code/charts/D3Charts/d3barstackchart/datasource.json', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.dataSourceCode = responseTs;
        });
        // User DataSource FILE
        this.http.get('assets/data/code/charts/D3Charts/d3barstackchart/usersource.json', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.userDataSourceCode = responseTs;
        });
    };
    //this code use copy to html code from tabpanel
    AmexioD3BarStackChartDemoComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    AmexioD3BarStackChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'amexio-d3-chart-bar-stack-demo',
            template: __webpack_require__(/*! ./d3barstackchart.demo.component.html */ "./src/app/charts/D3charts/d3barstackchart/d3barstackchart.demo.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AmexioD3BarStackChartDemoComponent);
    return AmexioD3BarStackChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/D3charts/d3barstackchart/d3barstackchart.demo.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3barstackchart/d3barstackchart.demo.module.ts ***!
  \********************************************************************************/
/*! exports provided: D3BarStackChartDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3BarStackChartDemoModule", function() { return D3BarStackChartDemoModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _d3barstackchart_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./d3barstackchart.demo.component */ "./src/app/charts/D3charts/d3barstackchart/d3barstackchart.demo.component.ts");
/* harmony import */ var amexio_chart_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! amexio-chart-d3 */ "./node_modules/amexio-chart-d3/fesm5/amexio-chart-d3.js");
/**
 * Created by kedar on 28/8/18.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var D3BarStackChartDemoModule = /** @class */ (function () {
    function D3BarStackChartDemoModule() {
    }
    D3BarStackChartDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [_d3barstackchart_demo_component__WEBPACK_IMPORTED_MODULE_7__["AmexioD3BarStackChartDemoComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([{
                        path: '', component: _d3barstackchart_demo_component__WEBPACK_IMPORTED_MODULE_7__["AmexioD3BarStackChartDemoComponent"], pathMatch: 'full'
                    }]), amexio_chart_d3__WEBPACK_IMPORTED_MODULE_8__["AmexioChartD3Module"]],
            providers: []
        })
    ], D3BarStackChartDemoModule);
    return D3BarStackChartDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=charts-D3charts-d3barstackchart-d3barstackchart-demo-module.js.map