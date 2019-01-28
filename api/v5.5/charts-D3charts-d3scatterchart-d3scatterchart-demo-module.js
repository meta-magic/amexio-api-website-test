(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-D3charts-d3scatterchart-d3scatterchart-demo-module"],{

/***/ "./src/app/charts/D3charts/d3scatterchart/d3scatterchart.demo.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3scatterchart/d3scatterchart.demo.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card header=\"true\">\n    <amexio-header>\n        D3 Scatter Chart\n    </amexio-header>\n    <amexio-body>\n        <p>An D3 scatter chart that is rendered within the browser using SVG .Displays tips when hovering over points.</p>\n        <amexio-tab-view>\n            <amexio-tab title=\"Demo\" active=\"true\">\n                <amexio-row>\n                    <amexio-column [size]=\"12\">\n\n                        <amexio-row>\n                            <amexio-column [size]=\"8\" [fit]=\"true\">\n                                <amexio-card [header]=\"true\" [show]=\"'true'\">\n                                    <amexio-header>\n                                        D3-scatter chart with UserDefine Color\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <amexio-d3-chart-scatter \n                                        [data]=\"scatterChartData\" \n                                        [label]=\"true\"\n                                        [label-color]=\"'#0000b3'\"\n                                        [color]=\"'green'\"\n                                        [zoom-enable]=\"true\"\n                                        (onChartClick)=\"onChartClick($event)\"\n                                        (onLegendClick)=\"onLegendClick($event)\">\n                                    </amexio-d3-chart-scatter>\n\n                                    </amexio-body>\n                                </amexio-card>\n                            </amexio-column>\n                            <amexio-column [size]=\"4\" [fit]=\"true\">\n                                <amexio-card header=\"true\">\n                                    <amexio-header>\n                                        Click On Legend/ Click on Chart\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <pre><code>{{userDataSource |json }}</code></pre>\n\n                                    </amexio-body>\n                                </amexio-card>\n\n                            </amexio-column>\n                        </amexio-row>\n\n                        <amexio-row>\n                            <amexio-column [size]=\"8\" [fit]=\"true\">\n                                <amexio-card [header]=\"true\" [show]=\"'true'\">\n                                    <amexio-header>\n                                        D3-scatter chart with Multiple Scatter Points\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <amexio-d3-chart-scatter \n                                        [width]=\"400\"\n                                        [data]=\"mineralScatterChartData\" \n                                        [label]=\"true\"\n                                        [height]=\"400\" \n                                        [zoom-enable]=\"true\"\n                                        [title]=\"'Minerals'\"\n                                        [vertical-scale]=\"false\"\n                                        (onChartClick)=\"onChartClick1($event)\"\n                                        (onLegendClick)=\"onLegendClick1($event)\"\n                                        >\n                                 </amexio-d3-chart-scatter>\n                                    </amexio-body>\n                                </amexio-card>\n                            </amexio-column>\n                            <amexio-column [size]=\"4\" [fit]=\"true\">\n                                <amexio-card header=\"true\">\n                                    <amexio-header>\n                                        Click On Legend/ Click on Chart\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <pre><code>{{userDataSource1 |json }}</code></pre>\n\n                                    </amexio-body>\n                                </amexio-card>\n\n                            </amexio-column>\n                        </amexio-row>\n                    </amexio-column>\n                </amexio-row>\n\n\n            </amexio-tab>\n            <amexio-tab title=\"API Reference\">\n                <amexio-datagrid title=\"D3-Scatter-Chart Properties <amexio-d3-chart-scatter>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\"\n                    [http-url]=\"'assets/apireference/charts/d3charts/d3scatterchart.json'\" [data-reader]=\"'properties'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'version'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"40\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <amexio-datagrid title=\"Legend Event <amexio-d3-chart-scatter>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/charts/d3charts/d3scatterchart.json'\"\n                    [data-reader]=\"'legend'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'version'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"55\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <amexio-datagrid title=\"Chart Event <amexio-d3-chart-scatter>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/charts/d3charts/d3scatterchart.json'\"\n                    [data-reader]=\"'chartevent'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'version'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"55\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n            </amexio-tab>\n            <amexio-tab title=\"Source\">\n                <div style=\"overflow-y: scroll\">\n                    <amexio-vertical-tab-view>\n                        <amexio-tab title=\"HTML\" [active]=\"true\">\n                            <ng-container *ngIf=\"htmlCode\">\n                                <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                                <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"Type Script\">\n                            <ng-container *ngIf=\"typeScriptCode\">\n                                <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"Data Source\">\n                            <ng-container *ngIf=\"dataSourceCode\">\n                                <prism-block [code]=\"dataSourceCode\" [language]=\"'json'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                    </amexio-vertical-tab-view>\n                </div>\n            </amexio-tab>\n            <amexio-tab title=\"Live\">\n                <p align=\"center\">Amexio Sandbox</p>\n                <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-d3-chart-scatter?embed=1&file=src/app/d3chart/d3linechart/d3linechart.demo.component.html&view=editor\"\n                    frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n            </amexio-tab>\n        </amexio-tab-view>\n    </amexio-body>\n</amexio-card>"

/***/ }),

/***/ "./src/app/charts/D3charts/d3scatterchart/d3scatterchart.demo.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3scatterchart/d3scatterchart.demo.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AmexioD3ScatterChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmexioD3ScatterChartDemoComponent", function() { return AmexioD3ScatterChartDemoComponent; });
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


var AmexioD3ScatterChartDemoComponent = /** @class */ (function () {
    function AmexioD3ScatterChartDemoComponent(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
    }
    AmexioD3ScatterChartDemoComponent.prototype.ngOnInit = function () {
        this.mineralScatterChartData = [
            ['Calories', 'Protein', 'Type', 'Brand'],
            [5, 25, 'Kelloggs', 'All-Bran'],
            [8, 20, 'Kelloggs', 'Apple_Jacks'],
            [10, 25, 'Kelloggs', 'Corn_Flakes'],
            [2, 15, 'Kelloggs', 'All-Bran'],
            [12, 22, 'Kelloggs', 'Apple_Jacks'],
            [10, 15, 'Kelloggs', 'Corn_Flakes'],
            [3, 12, 'Kelloggs', 'Fruitful_Bran'],
            [12, 18, 'Oats', 'Honey_Graham_Ohs'],
            [7, 19, 'Oats', 'Life'],
            [11, 9, 'Oats', 'Honey_Graham_Ohs'],
            [6, 19, 'Oats', 'Life'],
            [7, 10, 'Oats', 'Puffed_Rice'],
            [8, 22, 'General Mills', 'Lucky_Charms'],
            [5, 1, 'General Mills', 'Raisin_Nut'],
            [7, 16, 'General Mills', 'Triples'],
            [7, 26, 'General Mills', 'Corn Flakes'],
        ];
        this.scatterChartData = [
            ['Age', 'Weight'],
            [5, 35],
            [8, 40],
            [10, 45],
            [3, 12],
            [12, 48],
            [6, 39],
            [8, 42],
            [5, 32],
            [7, 46],
            [1, 10],
            [3, 15],
            [2, 8],
            [4, 20]
        ];
    };
    AmexioD3ScatterChartDemoComponent.prototype.onLegendClick = function (event) {
        this.userDataSource = event;
    };
    AmexioD3ScatterChartDemoComponent.prototype.onChartClick = function (event) {
        this.userDataSource = event;
    };
    AmexioD3ScatterChartDemoComponent.prototype.onLegendClick1 = function (event) {
        this.userDataSource1 = event;
    };
    AmexioD3ScatterChartDemoComponent.prototype.onChartClick1 = function (event) {
        this.userDataSource1 = event;
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    AmexioD3ScatterChartDemoComponent.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        var dataSource;
        //HTML FILE
        this.http.get('assets/data/code/charts/D3Charts/d3scatterchart/d3chart.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        // TS FILE
        this.http.get('assets/data/code/charts/D3Charts/d3scatterchart/d3chart.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
        // DataSource FILE
        this.http.get('assets/data/code/charts/D3Charts/d3scatterchart/datasource.json', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.dataSourceCode = responseTs;
        });
        // User DataSource FILE
        this.http.get('assets/data/code/charts/D3Charts/d3scatterchart/usersource.json', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.userDataSourceCode = responseTs;
        });
    };
    //this code use copy to html code from tabpanel
    AmexioD3ScatterChartDemoComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    AmexioD3ScatterChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'amexio-d3-chart-scatter-demo',
            template: __webpack_require__(/*! ./d3scatterchart.demo.component.html */ "./src/app/charts/D3charts/d3scatterchart/d3scatterchart.demo.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AmexioD3ScatterChartDemoComponent);
    return AmexioD3ScatterChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/D3charts/d3scatterchart/d3scatterchart.demo.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3scatterchart/d3scatterchart.demo.module.ts ***!
  \******************************************************************************/
/*! exports provided: D3ScatterChartDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3ScatterChartDemoModule", function() { return D3ScatterChartDemoModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _d3scatterchart_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./d3scatterchart.demo.component */ "./src/app/charts/D3charts/d3scatterchart/d3scatterchart.demo.component.ts");
/* harmony import */ var amexio_chart_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! amexio-chart-d3 */ "./node_modules/amexio-chart-d3/fesm5/amexio-chart-d3.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by rashmi on 28/8/18.
 */









var D3ScatterChartDemoModule = /** @class */ (function () {
    function D3ScatterChartDemoModule() {
    }
    D3ScatterChartDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [_d3scatterchart_demo_component__WEBPACK_IMPORTED_MODULE_7__["AmexioD3ScatterChartDemoComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([{
                        path: '', component: _d3scatterchart_demo_component__WEBPACK_IMPORTED_MODULE_7__["AmexioD3ScatterChartDemoComponent"], pathMatch: 'full'
                    }]), amexio_chart_d3__WEBPACK_IMPORTED_MODULE_8__["AmexioChartD3Module"]],
            providers: []
        })
    ], D3ScatterChartDemoModule);
    return D3ScatterChartDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=charts-D3charts-d3scatterchart-d3scatterchart-demo-module.js.map