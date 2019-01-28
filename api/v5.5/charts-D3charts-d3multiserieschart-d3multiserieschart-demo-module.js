(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-D3charts-d3multiserieschart-d3multiserieschart-demo-module"],{

/***/ "./src/app/charts/D3charts/d3multiserieschart/d3multiserieschart.demo.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3multiserieschart/d3multiserieschart.demo.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card header=\"true\">\n    <amexio-header>\n        D3 multiseries Chart\n    </amexio-header>\n    <amexio-body>\n        <p>An D3 multiseries chart that is rendered within the browser using SVG .Displays tips when hovering over points.</p>\n        <amexio-tab-view>\n\n            <amexio-tab title=\"Demo\" active=\"true\">\n                <amexio-row>\n                    <amexio-column [size]=\"12\">\n\n                        <amexio-row>\n                            <amexio-column [size]=\"8\" [fit]=\"true\">\n                                <amexio-card [header]=\"true\" [show]=\"'true'\">\n                                    <amexio-header>\n                                        D3-multiseries-chart\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <amexio-d3-chart-multiseries [label]=\"true\" [label-color]=\"'#7B0099'\"  [title]=\"'MULTISERIESBARCHART'\"[data]=\"userDefineColorData\" (onChartClick)=\"onDefaultChartClick($event)\" \n                                          (onLegendClick)=\"onUserDefineLegendClick($event)\"  >\n                                       </amexio-d3-chart-multiseries>\n                                  </amexio-body>\n                                </amexio-card>\n                            </amexio-column>\n                            <amexio-column [size]=\"4\" [fit]=\"true\">\n                                <amexio-card header=\"true\" >\n                                    <amexio-header>\n                                        Click On Legend/Click On Chart\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <pre><code>{{userDataSource |json }}</code></pre>\n\n                                    </amexio-body>\n                                </amexio-card>\n\n                            </amexio-column>\n\n                        </amexio-row>\n\n                    </amexio-column>\n                </amexio-row>\n\n            </amexio-tab>\n\n            <amexio-tab title=\"API Reference\">\n                <amexio-datagrid title=\"D3-multiseries-Chart Properties<amexio-d3-chart-multiseries>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\"\n                    [http-url]=\"'assets/apireference/charts/d3charts/d3multiserieschart.json'\" [data-reader]=\"'properties'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"[text]=\"'version'\"></amexio-data-table-column>                    \n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"45\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <amexio-datagrid title=\"Legend <amexio-d3-chart-multiseries>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/charts/d3charts/d3multiserieschart.json'\"\n                    [data-reader]=\"'legend'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"[text]=\"'version'\"></amexio-data-table-column>                    \n                    <amexio-data-table-column [width]=\"55\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <amexio-datagrid title=\"Chart Event <amexio-d3-chart-multiseries>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/charts/d3charts/d3multiserieschart.json'\"\n                    [data-reader]=\"'chartevent'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"[text]=\"'version'\"></amexio-data-table-column>                    \n                    <amexio-data-table-column [width]=\"55\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n            </amexio-tab>\n            <amexio-tab title=\"Source\">\n                <div style=\"overflow-y: scroll\">\n                    <amexio-vertical-tab-view>\n                        <amexio-tab title=\"HTML\" [active]=\"true\">\n                            <ng-container *ngIf=\"htmlCode\">\n                                <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                                <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"Type Script\">\n                            <ng-container *ngIf=\"typeScriptCode\">\n                                <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"Data Source\">\n                            <ng-container *ngIf=\"dataSourceCode\">\n                              <prism-block [code]=\"dataSourceCode\" [language]=\"'json'\"></prism-block>\n                            </ng-container>\n                          </amexio-tab>\n                    </amexio-vertical-tab-view>\n                </div>\n            </amexio-tab>\n            <amexio-tab title=\"Live\">\n                <p align=\"center\">Amexio Sandbox</p>\n                <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-d3-chart-multiseries?embed=1&file=src/app/d3chart/d3multiserieschart/d3multiserieschart.demo.component.html&view=editor\"\n                    frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n            </amexio-tab>\n        </amexio-tab-view>\n    </amexio-body>\n</amexio-card>"

/***/ }),

/***/ "./src/app/charts/D3charts/d3multiserieschart/d3multiserieschart.demo.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3multiserieschart/d3multiserieschart.demo.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AmexioD3MultiSeriesChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmexioD3MultiSeriesChartDemoComponent", function() { return AmexioD3MultiSeriesChartDemoComponent; });
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


var AmexioD3MultiSeriesChartDemoComponent = /** @class */ (function () {
    function AmexioD3MultiSeriesChartDemoComponent(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
    }
    AmexioD3MultiSeriesChartDemoComponent.prototype.ngOnInit = function () {
        this.userDefineColorData = [
            ['Year', 'Sales', 'Expenses', 'Profit'],
            ['2014', 1000, 400, 200],
            ['2015', 1170, 460, 250],
            ['2016', 660, 1120, 300],
            ['2017', 1030, 540, 350],
            ['2018', 1090, 740, 450],
            ['2019', 1050, 640, 350]
        ];
    };
    AmexioD3MultiSeriesChartDemoComponent.prototype.onDefaultChartClick = function (event) {
        this.userDataSource = event;
    };
    AmexioD3MultiSeriesChartDemoComponent.prototype.onUserDefineLegendClick = function (event) {
        this.userDataSource = event;
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    AmexioD3MultiSeriesChartDemoComponent.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        var dataSource;
        //HTML FILE
        this.http.get('assets/data/code/charts/D3Charts/d3multiserieschart/d3chart.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        // TS FILE
        this.http.get('assets/data/code/charts/D3Charts/d3multiserieschart/d3chart.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
        // DataSource FILE
        this.http.get('assets/data/code/charts/D3Charts/d3multiserieschart/datasource.json', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.dataSourceCode = responseTs;
        });
        // User DataSource FILE
        this.http.get('assets/data/code/charts/D3Charts/d3multiserieschart/usersource.json', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.userDataSourceCode = responseTs;
        });
    };
    //this code use copy to html code from tabpanel
    AmexioD3MultiSeriesChartDemoComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    AmexioD3MultiSeriesChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'amexio-d3-chart-multiseries-demo',
            template: __webpack_require__(/*! ./d3multiserieschart.demo.component.html */ "./src/app/charts/D3charts/d3multiserieschart/d3multiserieschart.demo.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AmexioD3MultiSeriesChartDemoComponent);
    return AmexioD3MultiSeriesChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/D3charts/d3multiserieschart/d3multiserieschart.demo.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3multiserieschart/d3multiserieschart.demo.module.ts ***!
  \**************************************************************************************/
/*! exports provided: D3MultiSeriesChartDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3MultiSeriesChartDemoModule", function() { return D3MultiSeriesChartDemoModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _d3multiserieschart_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./d3multiserieschart.demo.component */ "./src/app/charts/D3charts/d3multiserieschart/d3multiserieschart.demo.component.ts");
/* harmony import */ var amexio_chart_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! amexio-chart-d3 */ "./node_modules/amexio-chart-d3/fesm5/amexio-chart-d3.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var D3MultiSeriesChartDemoModule = /** @class */ (function () {
    function D3MultiSeriesChartDemoModule() {
    }
    D3MultiSeriesChartDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [_d3multiserieschart_demo_component__WEBPACK_IMPORTED_MODULE_7__["AmexioD3MultiSeriesChartDemoComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([{
                        path: '', component: _d3multiserieschart_demo_component__WEBPACK_IMPORTED_MODULE_7__["AmexioD3MultiSeriesChartDemoComponent"], pathMatch: 'full'
                    }]), amexio_chart_d3__WEBPACK_IMPORTED_MODULE_8__["AmexioChartD3Module"]],
            providers: []
        })
    ], D3MultiSeriesChartDemoModule);
    return D3MultiSeriesChartDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=charts-D3charts-d3multiserieschart-d3multiserieschart-demo-module.js.map