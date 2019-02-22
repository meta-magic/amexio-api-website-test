(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-D3charts-D3charts-module"],{

/***/ "./src/app/charts/D3charts/D3charts.module.ts":
/*!****************************************************!*\
  !*** ./src/app/charts/D3charts/D3charts.module.ts ***!
  \****************************************************/
/*! exports provided: D3ChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3ChartModule", function() { return D3ChartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _D3charts_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./D3charts.routes */ "./src/app/charts/D3charts/D3charts.routes.ts");
/* harmony import */ var amexio_chart_d3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! amexio-chart-d3 */ "./node_modules/amexio-chart-d3/fesm5/amexio-chart-d3.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _d3barchart_d3barchart_demo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./d3barchart/d3barchart.demo.component */ "./src/app/charts/D3charts/d3barchart/d3barchart.demo.component.ts");
/* harmony import */ var _d3barstackchart_d3barstackchart_demo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./d3barstackchart/d3barstackchart.demo.component */ "./src/app/charts/D3charts/d3barstackchart/d3barstackchart.demo.component.ts");
/* harmony import */ var _d3bubblechart_d3bubblechart_demo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./d3bubblechart/d3bubblechart.demo.component */ "./src/app/charts/D3charts/d3bubblechart/d3bubblechart.demo.component.ts");
/* harmony import */ var _d3combochart_d3combochart_demo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./d3combochart/d3combochart.demo.component */ "./src/app/charts/D3charts/d3combochart/d3combochart.demo.component.ts");
/* harmony import */ var _d3donutchart_d3donutchart_demo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./d3donutchart/d3donutchart.demo.component */ "./src/app/charts/D3charts/d3donutchart/d3donutchart.demo.component.ts");
/* harmony import */ var _d3histogramchart_d3histogramchart_demo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./d3histogramchart/d3histogramchart.demo.component */ "./src/app/charts/D3charts/d3histogramchart/d3histogramchart.demo.component.ts");
/* harmony import */ var _d3horizontalbarchart_d3horizontalbarchart_demo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./d3horizontalbarchart/d3horizontalbarchart.demo.component */ "./src/app/charts/D3charts/d3horizontalbarchart/d3horizontalbarchart.demo.component.ts");
/* harmony import */ var _d3linechart_d3linechart_demo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./d3linechart/d3linechart.demo.component */ "./src/app/charts/D3charts/d3linechart/d3linechart.demo.component.ts");
/* harmony import */ var _d3multiareachart_d3multiareachart_demo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./d3multiareachart/d3multiareachart.demo.component */ "./src/app/charts/D3charts/d3multiareachart/d3multiareachart.demo.component.ts");
/* harmony import */ var _d3multiserieschart_d3multiserieschart_demo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./d3multiserieschart/d3multiserieschart.demo.component */ "./src/app/charts/D3charts/d3multiserieschart/d3multiserieschart.demo.component.ts");
/* harmony import */ var _d3piechart_d3piechart_demo_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./d3piechart/d3piechart.demo.component */ "./src/app/charts/D3charts/d3piechart/d3piechart.demo.component.ts");
/* harmony import */ var _d3scatterchart_d3scatterchart_demo_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./d3scatterchart/d3scatterchart.demo.component */ "./src/app/charts/D3charts/d3scatterchart/d3scatterchart.demo.component.ts");
/* harmony import */ var _d3timelinechart_d3timelinechart_demo_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./d3timelinechart/d3timelinechart.demo.component */ "./src/app/charts/D3charts/d3timelinechart/d3timelinechart.demo.component.ts");
/* harmony import */ var _d3waterfallchart_d3waterfallchart_demo_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./d3waterfallchart/d3waterfallchart.demo.component */ "./src/app/charts/D3charts/d3waterfallchart/d3waterfallchart.demo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























/**
 * Created by kedar on 4/2/19.
 */
var D3ChartModule = /** @class */ (function () {
    function D3ChartModule() {
    }
    D3ChartModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_d3barchart_d3barchart_demo_component__WEBPACK_IMPORTED_MODULE_9__["AmexioD3BarChartDemoComponent"], _d3barstackchart_d3barstackchart_demo_component__WEBPACK_IMPORTED_MODULE_10__["AmexioD3BarStackChartDemoComponent"],
                _d3bubblechart_d3bubblechart_demo_component__WEBPACK_IMPORTED_MODULE_11__["AmexioD3BubbleChartDemoComponent"], _d3combochart_d3combochart_demo_component__WEBPACK_IMPORTED_MODULE_12__["AmexioD3ComboChartDemoComponent"], _d3donutchart_d3donutchart_demo_component__WEBPACK_IMPORTED_MODULE_13__["AmexioD3DonutChartDemoComponent"],
                _d3histogramchart_d3histogramchart_demo_component__WEBPACK_IMPORTED_MODULE_14__["AmexioD3HistogramChartDemoComponent"], _d3horizontalbarchart_d3horizontalbarchart_demo_component__WEBPACK_IMPORTED_MODULE_15__["AmexioD3HorizontalBarChartComponent"], _d3linechart_d3linechart_demo_component__WEBPACK_IMPORTED_MODULE_16__["AmexioD3LineChartDemoComponent"],
                _d3multiareachart_d3multiareachart_demo_component__WEBPACK_IMPORTED_MODULE_17__["AmexioD3MultiAreaChartDemoComponent"], _d3multiserieschart_d3multiserieschart_demo_component__WEBPACK_IMPORTED_MODULE_18__["AmexioD3MultiSeriesChartDemoComponent"], _d3piechart_d3piechart_demo_component__WEBPACK_IMPORTED_MODULE_19__["AmexioD3PieChartDemoComponent"],
                _d3scatterchart_d3scatterchart_demo_component__WEBPACK_IMPORTED_MODULE_20__["AmexioD3ScatterChartDemoComponent"], _d3timelinechart_d3timelinechart_demo_component__WEBPACK_IMPORTED_MODULE_21__["AmexioD3TimeLineChartDemoComponent"], _d3waterfallchart_d3waterfallchart_demo_component__WEBPACK_IMPORTED_MODULE_22__["AmexioD3WaterfallChartDemoComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                amexio_chart_d3__WEBPACK_IMPORTED_MODULE_7__["AmexioChartD3Module"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"].forRoot(),
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AmexioWidgetModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(_D3charts_routes__WEBPACK_IMPORTED_MODULE_6__["D3CHART_ROUTE"]),
            ],
            providers: []
        })
    ], D3ChartModule);
    return D3ChartModule;
}());



/***/ }),

/***/ "./src/app/charts/D3charts/D3charts.routes.ts":
/*!****************************************************!*\
  !*** ./src/app/charts/D3charts/D3charts.routes.ts ***!
  \****************************************************/
/*! exports provided: D3CHART_ROUTE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3CHART_ROUTE", function() { return D3CHART_ROUTE; });
/* harmony import */ var _d3barchart_d3barchart_demo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./d3barchart/d3barchart.demo.component */ "./src/app/charts/D3charts/d3barchart/d3barchart.demo.component.ts");
/* harmony import */ var _d3barstackchart_d3barstackchart_demo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./d3barstackchart/d3barstackchart.demo.component */ "./src/app/charts/D3charts/d3barstackchart/d3barstackchart.demo.component.ts");
/* harmony import */ var _d3bubblechart_d3bubblechart_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./d3bubblechart/d3bubblechart.demo.component */ "./src/app/charts/D3charts/d3bubblechart/d3bubblechart.demo.component.ts");
/* harmony import */ var _d3combochart_d3combochart_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./d3combochart/d3combochart.demo.component */ "./src/app/charts/D3charts/d3combochart/d3combochart.demo.component.ts");
/* harmony import */ var _d3donutchart_d3donutchart_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./d3donutchart/d3donutchart.demo.component */ "./src/app/charts/D3charts/d3donutchart/d3donutchart.demo.component.ts");
/* harmony import */ var _d3histogramchart_d3histogramchart_demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./d3histogramchart/d3histogramchart.demo.component */ "./src/app/charts/D3charts/d3histogramchart/d3histogramchart.demo.component.ts");
/* harmony import */ var _d3horizontalbarchart_d3horizontalbarchart_demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./d3horizontalbarchart/d3horizontalbarchart.demo.component */ "./src/app/charts/D3charts/d3horizontalbarchart/d3horizontalbarchart.demo.component.ts");
/* harmony import */ var _d3linechart_d3linechart_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./d3linechart/d3linechart.demo.component */ "./src/app/charts/D3charts/d3linechart/d3linechart.demo.component.ts");
/* harmony import */ var _d3multiareachart_d3multiareachart_demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./d3multiareachart/d3multiareachart.demo.component */ "./src/app/charts/D3charts/d3multiareachart/d3multiareachart.demo.component.ts");
/* harmony import */ var _d3multiserieschart_d3multiserieschart_demo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./d3multiserieschart/d3multiserieschart.demo.component */ "./src/app/charts/D3charts/d3multiserieschart/d3multiserieschart.demo.component.ts");
/* harmony import */ var _d3piechart_d3piechart_demo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./d3piechart/d3piechart.demo.component */ "./src/app/charts/D3charts/d3piechart/d3piechart.demo.component.ts");
/* harmony import */ var _d3scatterchart_d3scatterchart_demo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./d3scatterchart/d3scatterchart.demo.component */ "./src/app/charts/D3charts/d3scatterchart/d3scatterchart.demo.component.ts");
/* harmony import */ var _d3timelinechart_d3timelinechart_demo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./d3timelinechart/d3timelinechart.demo.component */ "./src/app/charts/D3charts/d3timelinechart/d3timelinechart.demo.component.ts");
/* harmony import */ var _d3waterfallchart_d3waterfallchart_demo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./d3waterfallchart/d3waterfallchart.demo.component */ "./src/app/charts/D3charts/d3waterfallchart/d3waterfallchart.demo.component.ts");














var D3CHART_ROUTE = [
    {
        path: 'amexio-d3-chart-bar', component: _d3barchart_d3barchart_demo_component__WEBPACK_IMPORTED_MODULE_0__["AmexioD3BarChartDemoComponent"],
    },
    {
        path: 'amexio-d3-chart-bar-stack', component: _d3barstackchart_d3barstackchart_demo_component__WEBPACK_IMPORTED_MODULE_1__["AmexioD3BarStackChartDemoComponent"],
    },
    {
        path: 'amexio-d3-chart-bubble', component: _d3bubblechart_d3bubblechart_demo_component__WEBPACK_IMPORTED_MODULE_2__["AmexioD3BubbleChartDemoComponent"],
    },
    {
        path: 'amexio-d3-chart-combo', component: _d3combochart_d3combochart_demo_component__WEBPACK_IMPORTED_MODULE_3__["AmexioD3ComboChartDemoComponent"],
    },
    {
        path: 'amexio-d3-chart-donut', component: _d3donutchart_d3donutchart_demo_component__WEBPACK_IMPORTED_MODULE_4__["AmexioD3DonutChartDemoComponent"],
    },
    {
        path: 'amexio-d3-chart-histogram', component: _d3histogramchart_d3histogramchart_demo_component__WEBPACK_IMPORTED_MODULE_5__["AmexioD3HistogramChartDemoComponent"],
    },
    {
        path: 'amexio-d3-chart-horizontal', component: _d3horizontalbarchart_d3horizontalbarchart_demo_component__WEBPACK_IMPORTED_MODULE_6__["AmexioD3HorizontalBarChartComponent"],
    },
    {
        path: 'amexio-d3-chart-line', component: _d3linechart_d3linechart_demo_component__WEBPACK_IMPORTED_MODULE_7__["AmexioD3LineChartDemoComponent"],
    },
    {
        path: 'amexio-d3-chart-multiarea', component: _d3multiareachart_d3multiareachart_demo_component__WEBPACK_IMPORTED_MODULE_8__["AmexioD3MultiAreaChartDemoComponent"],
    },
    {
        path: 'amexio-d3-chart-multiseries', component: _d3multiserieschart_d3multiserieschart_demo_component__WEBPACK_IMPORTED_MODULE_9__["AmexioD3MultiSeriesChartDemoComponent"],
    },
    {
        path: 'amexio-d3-chart-pie', component: _d3piechart_d3piechart_demo_component__WEBPACK_IMPORTED_MODULE_10__["AmexioD3PieChartDemoComponent"],
    },
    {
        path: 'amexio-d3-chart-scatter', component: _d3scatterchart_d3scatterchart_demo_component__WEBPACK_IMPORTED_MODULE_11__["AmexioD3ScatterChartDemoComponent"],
    },
    {
        path: 'amexio-d3-chart-timeline', component: _d3timelinechart_d3timelinechart_demo_component__WEBPACK_IMPORTED_MODULE_12__["AmexioD3TimeLineChartDemoComponent"],
    },
    {
        path: 'amexio-d3-chart-waterfall', component: _d3waterfallchart_d3waterfallchart_demo_component__WEBPACK_IMPORTED_MODULE_13__["AmexioD3WaterfallChartDemoComponent"],
    }
];


/***/ }),

/***/ "./src/app/charts/D3charts/d3barchart/d3barchart.demo.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3barchart/d3barchart.demo.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-api-structure  [custom-com-data]=\"customSourceData\"[url]=\"'assets/componentjson/charts/d3charts/d3barchart.json'\">\n<amexio-api-demo>  \n  <amexio-row>\n        <amexio-column [size]=\"12\">\n\n            <amexio-row>\n                <amexio-column [size]=\"8\" [fit]=\"true\">\n                    <amexio-card [header]=\"true\" [show]=\"'true'\">\n                        <amexio-header>\n                            D3-bar chart with UserDefine Color\n                        </amexio-header>\n                        <amexio-body>\n                            <amexio-d3-chart-bar [title]=\"'Population of Cities in India'\" [label-color]=\"'white'\"\n                                [label]=\"true\" (onChartClick)=\"onDefaultChartClick($event)\" (onLegendClick)=\"onUserDefineLegendClick($event)\"\n                                [color]=\"userDefineColors\" [data]=\"userDefineColorData\">\n                            </amexio-d3-chart-bar>\n                        </amexio-body>\n                    </amexio-card>\n                </amexio-column>\n                <amexio-column [size]=\"4\" [fit]=\"true\">\n                    <amexio-card header=\"true\">\n                        <amexio-header>\n                            Click On Legend/ Click on Chart\n                        </amexio-header>\n                        <amexio-body>\n                            <pre><code>{{userDataSource |json }}</code></pre>\n\n                        </amexio-body>\n                    </amexio-card>\n\n                </amexio-column>\n            </amexio-row>\n            <amexio-row>\n                <amexio-column [size]=\"8\" [fit]=\"true\">\n                    <amexio-card [header]=\"true\" [show]=\"'true'\">\n                        <amexio-header>\n                            D3-bar with Legend Default Color\n                        </amexio-header>\n                        <amexio-body>\n                            <amexio-d3-chart-bar [title]=\"'Company Performance Details'\" [label]=\"true\" (onChartClick)=\"onDefaultChartClick1($event)\"\n                                (onLegendClick)=\"onDefaultLegendClick($event)\" [data]=\"defultColorData\">\n                            </amexio-d3-chart-bar>\n                        </amexio-body>\n                    </amexio-card>\n                </amexio-column>\n                <amexio-column [size]=\"4\" [fit]=\"true\">\n                    <amexio-card header=\"true\">\n                        <amexio-header>\n                            Click On Legend/ Click On Chart\n                        </amexio-header>\n                        <amexio-body>\n                            <pre><code>{{sourceData |json }}</code></pre>\n\n                        </amexio-body>\n                    </amexio-card>\n\n                </amexio-column>\n            </amexio-row>\n\n        </amexio-column>\n    </amexio-row>\n    </amexio-api-demo>\n    </amexio-api-structure>\n\n"

/***/ }),

/***/ "./src/app/charts/D3charts/d3barchart/d3barchart.demo.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3barchart/d3barchart.demo.component.ts ***!
  \*************************************************************************/
/*! exports provided: AmexioD3BarChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmexioD3BarChartDemoComponent", function() { return AmexioD3BarChartDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AmexioD3BarChartDemoComponent = /** @class */ (function () {
    function AmexioD3BarChartDemoComponent() {
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_1__["ComponentDataStructure"]();
    }
    AmexioD3BarChartDemoComponent.prototype.ngOnInit = function () {
        this.createCustomSourceData();
        this.userDefineColors =
            [
                "#4040a1",
                "#e06377",
                " #7e4a35",
                "#6b5b95",
                "#feb236",
                "#d64161",
                "#ff7b25"
            ];
        this.defultColorData = [
            ['year', 'performance'],
            ['2011', 1020],
            ['2012', 590],
            ['2013', 1260],
            ['2014', 830],
            ['2015', 1030],
            ['2016', 209],
            ['2017', 1006]
        ];
        this.userDefineColorData =
            [
                ['city', 'population'],
                ['Mumbai', 94423],
                ['Kochi', 69932],
                ['Delhi', 91345],
                ['Chennai', 46467],
                ['Pune', 31244],
                ['Jaipur', 30461],
                ['Ranchi', 84436]
            ];
        this.barData =
            [
                ['year', 'production'],
                ['2011', 300],
                ['2012', 500],
                ['2013', 700],
                ['2014', 400],
                ['2015', 600],
                ['2016', 500],
                ['2017', 200]
            ];
    };
    AmexioD3BarChartDemoComponent.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'D3 Bar Chart';
        this.customSourceData.description = 'An D3 bar chart that is rendered within the browser using SVG .Displays tips when hovering over points.';
        this.customSourceData.sourceMetadata.htmlUrl = 'charts/D3Charts/d3barchart/d3chart.html';
        this.customSourceData.sourceMetadata.tsUrl = 'charts/D3Charts/d3barchart/d3chart.text';
        this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/code/charts/D3Charts/d3barchart/datasource.json';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-d3-chart-bar?embed=1&file=src/app/d3chart/d3barchart/d3barchart.demo.component.html&view=editor';
    };
    AmexioD3BarChartDemoComponent.prototype.onDefaultLegendClick = function (event) {
        this.sourceData = event;
    };
    AmexioD3BarChartDemoComponent.prototype.onDefaultLegendClick1 = function (event) {
        this.sourceData1 = event;
    };
    AmexioD3BarChartDemoComponent.prototype.onDefaultChartClick1 = function (event) {
        this.sourceData = event;
    };
    AmexioD3BarChartDemoComponent.prototype.onDefaultChartClick2 = function (event) {
        this.sourceData1 = event;
    };
    AmexioD3BarChartDemoComponent.prototype.onDefaultChartClick = function (event) {
        this.userDataSource = event;
    };
    AmexioD3BarChartDemoComponent.prototype.onUserDefineLegendClick = function (event) {
        this.userDataSource = event;
    };
    AmexioD3BarChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'amexio-d3-chart-bar-demo',
            template: __webpack_require__(/*! ./d3barchart.demo.component.html */ "./src/app/charts/D3charts/d3barchart/d3barchart.demo.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AmexioD3BarChartDemoComponent);
    return AmexioD3BarChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/D3charts/d3barstackchart/d3barstackchart.demo.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3barstackchart/d3barstackchart.demo.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/charts/d3charts/d3barstackchart.json'\">\n    <amexio-api-demo>       \n            <amexio-row>\n                <amexio-column [size]=\"12\">\n                    <amexio-row>\n                        <amexio-column [size]=\"8\" [fit]=\"true\">\n                            <amexio-card [header]=\"true\" [show]=\"'true'\">\n                                <amexio-header>\n                                    D3-bar-stack Chart with default Colors\n                                </amexio-header>\n                                <amexio-body>\n                                    <amexio-d3-chart-barstack [data]=\"userDefineColorData\" [label]=\"true\" [label-color]=\"'white'\" [title]=\"'STACKBARCHART'\" (onLegendClick)=\"onUserDefineLegendClick($event)\"\n                                        (onChartClick)=\"onDefaultChartClick($event)\">\n                                    </amexio-d3-chart-barstack>\n                                </amexio-body>\n                            </amexio-card>\n                        </amexio-column>\n                        <amexio-column [size]=\"4\" [fit]=\"true\">\n                            <amexio-card header=\"true\" >\n                                <amexio-header>\n                                    Click On Legend/Click on Chart\n                                </amexio-header>\n                                <amexio-body>\n                                    <pre><code>{{userDataSource |json }}</code></pre>\n                                </amexio-body>\n                            </amexio-card>\n\n                        </amexio-column>\n\n                    </amexio-row>\n\n                    <amexio-row>\n                        <amexio-column [size]=\"8\" [fit]=\"true\">\n                            <amexio-card [header]=\"true\" [show]=\"'true'\">\n                                <amexio-header>\n                                    D3-bar-stack Chart with User Defined Colors\n                                </amexio-header>\n                                <amexio-body>\n                                    <amexio-d3-chart-barstack [data]=\"userDefineColorData\" [label]=\"true\" [color] = \"colorArray\" [title]=\"'STACKBARCHART'\" (onLegendClick)=\"onUserDefineLegendClick1($event)\"\n                                        (onChartClick)=\"onDefaultChartClick1($event)\">\n                                    </amexio-d3-chart-barstack>\n                                </amexio-body>\n                            </amexio-card>\n                        </amexio-column>\n                        <amexio-column [size]=\"4\" [fit]=\"true\">\n                            <amexio-card header=\"true\" >\n                                <amexio-header>\n                                    Click On Legend/Click on Chart\n                                </amexio-header>\n                                <amexio-body>\n                                    <pre><code>{{userDataSource1 |json }}</code></pre>\n\n                                </amexio-body>\n                            </amexio-card>\n\n                        </amexio-column>\n\n                    </amexio-row>\n\n                </amexio-column>\n            </amexio-row>      \n   </amexio-api-demo>\n    </amexio-api-structure>\n\n"

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
    function AmexioD3BarStackChartDemoComponent() {
        this.colorArray = ["blue",
            "yellow",
            "green"];
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
    AmexioD3BarStackChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'amexio-d3-chart-bar-stack-demo',
            template: __webpack_require__(/*! ./d3barstackchart.demo.component.html */ "./src/app/charts/D3charts/d3barstackchart/d3barstackchart.demo.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AmexioD3BarStackChartDemoComponent);
    return AmexioD3BarStackChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/D3charts/d3bubblechart/d3bubblechart.demo.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3bubblechart/d3bubblechart.demo.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/charts/d3charts/d3bubblechart.json'\">\n    <amexio-api-demo> \n            <amexio-row>\n                    <amexio-column [size]=\"12\">\n                            <amexio-row>\n                                    <amexio-column [size]=\"8\" [fit]=\"true\">\n                                        <amexio-card [header]=\"true\" [show]=\"'true'\">\n                                            <amexio-header>\n                                                D3-Bubble Chart\n                                            </amexio-header>\n                                            <amexio-body>\n                                                <amexio-d3-chart-bubble\n                                                [title]=\"'Correlation between life expectancy, fertility rate\n                                                '\" \n                                                [data]=\"bubblechart\"\n                                                [label]=\"true\"\n                                                [zoom-enable]=\"true\"\n                                                (onChartClick)=\"onDefaultChartClick($event)\"\n                                                (onLegendClick)=\"onLegendClick($event)\"\n                                                >\n                                              </amexio-d3-chart-bubble>\n                                            </amexio-body>\n                                        </amexio-card>\n                                    </amexio-column>\n                                    <amexio-column [size]=\"4\" [fit]=\"true\">\n                                        <amexio-card header=\"true\" >\n                                            <amexio-header>\n                                                Click On Legend/ Click on Chart\n                                            </amexio-header>\n                                            <amexio-body>\n                                                <pre><code>{{userDataSource |json }}</code></pre>\n\n                                            </amexio-body>\n                                        </amexio-card>\n\n                                    </amexio-column>\n                                </amexio-row>  \n                    </amexio-column>\n                </amexio-row>\n     </amexio-api-demo>    \n</amexio-api-structure>"

/***/ }),

/***/ "./src/app/charts/D3charts/d3bubblechart/d3bubblechart.demo.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3bubblechart/d3bubblechart.demo.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AmexioD3BubbleChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmexioD3BubbleChartDemoComponent", function() { return AmexioD3BubbleChartDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AmexioD3BubbleChartDemoComponent = /** @class */ (function () {
    function AmexioD3BubbleChartDemoComponent() {
    }
    AmexioD3BubbleChartDemoComponent.prototype.ngOnInit = function () {
        this.bubblechart = [
            ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
            ['CAN', 80.66, 1.67, 'North America', 33739900],
            ['DEU', 79.84, 1.36, 'Europe', 81902307],
            ['DNK', 78.6, 1.84, 'Europe', 5523095],
            ['EGY', 72.73, 2.78, 'Middle East', 79716203],
            ['GBR', 80.05, 2, 'Europe', 61801570],
            ['IRN', 72.49, 1.7, 'Middle East', 73137148],
            ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
            ['ISR', 81.55, 2.96, 'Middle East', 7485600],
            ['RUS', 68.6, 1.54, 'Europe', 141850000],
            ['USA', 78.09, 2.05, 'North America', 307007000]
        ];
    };
    AmexioD3BubbleChartDemoComponent.prototype.onDefaultChartClick = function (event) {
        this.userDataSource = event;
    };
    AmexioD3BubbleChartDemoComponent.prototype.onLegendClick = function (event) {
        this.userDataSource = event;
    };
    AmexioD3BubbleChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'amexio-d3-chart-bubble-demo',
            template: __webpack_require__(/*! ./d3bubblechart.demo.component.html */ "./src/app/charts/D3charts/d3bubblechart/d3bubblechart.demo.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AmexioD3BubbleChartDemoComponent);
    return AmexioD3BubbleChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/D3charts/d3combochart/d3combochart.demo.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3combochart/d3combochart.demo.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/charts/d3charts/d3combochart.json'\">\n    <amexio-api-demo>\n            <amexio-row>\n                    <amexio-column [size]=\"12\">\n                          <!-- bar + line + data sc1 -->\n                        <amexio-row>\n                            <amexio-column [size]=\"8\" [fit]=\"true\">\n                                <amexio-card [header]=\"true\" [show]=\"'true'\">\n                                    <amexio-header>\n                                        D3-Combo Chart with bar, line and Data attribute\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <amexio-d3-combochart [title]=\"'Rice Production in India'\" \n                                         (onChartClick)=\"onDefaultChartClicksc1($event)\"\n                                        (onLineClick)=\"onDefaultLineClicksc1($event)\"\n                                        (onLegendClick)=\"onUserDefineLegendClicksc1($event)\" \n                                        [data]=\"barData\"\n                                        [bar-data-index]=\"barArray\"\n                                        [line-data-index]=\"lineArray\"\n                                        >\n                                        </amexio-d3-combochart>\n                                    </amexio-body>\n                                </amexio-card>\n                            </amexio-column>\n                            <amexio-column [size]=\"4\" [fit]=\"true\">\n                                <amexio-card header=\"true\">\n                                    <amexio-header>\n                                        Click On Legend/ Click on Chart\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <pre><code>{{userDataSourcesc1 |json }}</code></pre>\n\n                                    </amexio-body>\n                                </amexio-card>\n                            </amexio-column>\n                        </amexio-row>\n                         <!-- line + data sc2-->\n                        <amexio-row>\n                            <amexio-column [size]=\"8\" [fit]=\"true\">\n                                <amexio-card [header]=\"true\" [show]=\"'true'\">\n                                    <amexio-header>\n                                        D3-Combo Chart with data and line attribute\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <amexio-d3-combochart [title]=\"'Rice Production in India'\"\n                                         (onChartClick)=\"onDefaultChartClicksc2($event)\" \n                                        (onLineClick)=\"onDefaultLineClicksc2($event)\"\n                                        (onLegendClick)=\"onUserDefineLegendClicksc2($event)\" \n                                        [data]=\"barData\"\n                                        [line-data-index]=\"lineArray2\"\n                                        >\n                                        </amexio-d3-combochart>\n                                    </amexio-body>\n                                </amexio-card>\n                            </amexio-column>\n                            <amexio-column [size]=\"4\" [fit]=\"true\">\n                                <amexio-card header=\"true\">\n                                    <amexio-header>\n                                        Click On Legend/ Click on Chart\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <pre><code>{{userDataSourcesc2 |json }}</code></pre>\n\n                                    </amexio-body>\n                                </amexio-card>\n                            </amexio-column>\n                        </amexio-row>\n                        <!-- bar + data sc3-->\n                        <amexio-row>\n                            <amexio-column [size]=\"8\" [fit]=\"true\">\n                                <amexio-card [header]=\"true\" [show]=\"'true'\">\n                                    <amexio-header>\n                                        D3-Combo Chart with bar and data attribute\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <amexio-d3-combochart [title]=\"'Rice Production in India'\" \n                                         (onChartClick)=\"onDefaultChartClicksc3($event)\" \n                                        (onLineClick)=\"onDefaultLineClicksc3($event)\"\n                                        (onLegendClick)=\"onUserDefineLegendClicksc3($event)\" \n                                        [data]=\"barData\"\n                                        [bar-data-index]=\"barArray\"\n                                        >\n                                        </amexio-d3-combochart>\n                                    </amexio-body>\n                                </amexio-card>\n                            </amexio-column>\n                            <amexio-column [size]=\"4\" [fit]=\"true\">\n                                <amexio-card header=\"true\">\n                                    <amexio-header>\n                                        Click On Legend/ Click on Chart\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <pre><code>{{userDataSourcesc3 |json }}</code></pre>\n\n                                    </amexio-body>\n                                </amexio-card>\n                            </amexio-column>\n                        </amexio-row>\n                        <!-- only data sc4-->\n                        <amexio-row>\n                            <amexio-column [size]=\"8\" [fit]=\"true\">\n                                <amexio-card [header]=\"true\" [show]=\"'true'\">\n                                    <amexio-header>\n                                        D3-Combo Chart with only data attribute\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <amexio-d3-combochart [title]=\"'Rice Production in India'\" \n                                        [label]=\"true\" \n                                        (onChartClick)=\"onDefaultChartClicksc4($event)\"  \n                                        (onLineClick)=\"onDefaultLineClicksc4($event)\"\n                                        (onLegendClick)=\"onUserDefineLegendClicksc4($event)\" \n                                        [data]=\"barData\"\n                                        >\n                                        </amexio-d3-combochart>\n                                    </amexio-body>\n                                </amexio-card>\n                            </amexio-column>\n                            <amexio-column [size]=\"4\" [fit]=\"true\">\n                                <amexio-card header=\"true\">\n                                    <amexio-header>\n                                        Click On Legend/ Click on Chart\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <pre><code>{{userDataSourcesc4 |json }}</code></pre>\n\n                                    </amexio-body>\n                                </amexio-card>\n                            </amexio-column>\n                        </amexio-row>\n                    </amexio-column>\n                </amexio-row>\n     </amexio-api-demo>\n </amexio-api-structure> "

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
    function AmexioD3ComboChartDemoComponent() {
        this.lineArray = [];
        this.lineArray2 = [];
        this.barArray = [];
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
    AmexioD3ComboChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'amexio-d3-chart-combo-demo',
            template: __webpack_require__(/*! ./d3combochart.demo.component.html */ "./src/app/charts/D3charts/d3combochart/d3combochart.demo.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AmexioD3ComboChartDemoComponent);
    return AmexioD3ComboChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/D3charts/d3donutchart/d3donutchart.demo.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3donutchart/d3donutchart.demo.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/charts/d3charts/d3donutchart.json'\">\n    <amexio-api-demo>\n            <amexio-row>\n                    <amexio-column [size]=\"12\">\n                                <amexio-row>\n                                    <amexio-column [size]=\"8\" [fit]=\"true\">\n                                        <amexio-card [header]=\"true\" [show]=\"'true'\">\n                                            <amexio-header>\n                                                D3-donut with  Legend UserDefine Color\n                                            </amexio-header>\n                                            <amexio-body>\n                                                <amexio-d3-chart-donut [label]=\"true\" [title]=\"'Visitor Visit Country Ratio'\" [color]=\"userDefineColors\" [data]=\"userDefineColorData\" (onChartClick)=\"onDefaultChartClick($event)\"  (onLegendClick)=\"onUserDefineLegendClick($event)\">\n                                                </amexio-d3-chart-donut>\n                                            </amexio-body>\n                                        </amexio-card>\n                                    </amexio-column>\n                                    <amexio-column [size]=\"4\" [fit]=\"true\">\n                                        <amexio-card header=\"true\">\n                                            <amexio-header>\n                                                Click On Legend/Click on Chart\n                                            </amexio-header>\n                                            <amexio-body>\n                                                <pre><code>{{userDataSource |json }}</code></pre>\n\n                                            </amexio-body>\n                                        </amexio-card>\n\n                                    </amexio-column>\n\n                                </amexio-row>\n\n                    </amexio-column>\n                </amexio-row>\n     </amexio-api-demo>\n </amexio-api-structure>"

/***/ }),

/***/ "./src/app/charts/D3charts/d3donutchart/d3donutchart.demo.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3donutchart/d3donutchart.demo.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AmexioD3DonutChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmexioD3DonutChartDemoComponent", function() { return AmexioD3DonutChartDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AmexioD3DonutChartDemoComponent = /** @class */ (function () {
    function AmexioD3DonutChartDemoComponent() {
    }
    AmexioD3DonutChartDemoComponent.prototype.ngOnInit = function () {
        this.userDefineColors = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00", "#b9936c"];
        this.defultColorData =
            [
                ['browser', 'activity'],
                ['IE', 11.43],
                ['Chrome', 63.14],
                ['Safari', 3.83],
                ['Firefox', 10.23],
                ['Others', 10.01]
            ];
        this.userDefineColorData =
            [
                ['country', 'ratio'],
                ['India', 30.3],
                ['Spain', 9.52],
                ['France', 13.68],
                ['China', 18.71],
                ['Germany', 8.01],
                ['U.K', 8.01],
                ['U.S', 14.01],
                ['Korea', 4.01]
            ];
    };
    AmexioD3DonutChartDemoComponent.prototype.onDefaultLegendClick = function (event) {
        this.sourceData = event;
    };
    AmexioD3DonutChartDemoComponent.prototype.onDefaultChartClick1 = function (event) {
        this.sourceData = event;
    };
    AmexioD3DonutChartDemoComponent.prototype.onUserDefineLegendClick = function (event) {
        this.userDataSource = event;
    };
    AmexioD3DonutChartDemoComponent.prototype.onDefaultChartClick = function (event) {
        this.userDataSource = event;
    };
    AmexioD3DonutChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'amexio-d3-chart-donut-demo',
            template: __webpack_require__(/*! ./d3donutchart.demo.component.html */ "./src/app/charts/D3charts/d3donutchart/d3donutchart.demo.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], AmexioD3DonutChartDemoComponent);
    return AmexioD3DonutChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/D3charts/d3histogramchart/d3histogramchart.demo.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3histogramchart/d3histogramchart.demo.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/charts/d3charts/d3histogramchart.json'\">\n    <amexio-api-demo>\n            <amexio-row>\n                    <amexio-column [size]=\"12\">\n                            <amexio-row>\n                                    <amexio-column [size]=\"12\" [fit]=\"true\">\n                                        <amexio-card [header]=\"true\" [show]=\"'true'\">\n                                            <amexio-header>\n                                                D3-histogram chart with UserDefined Color\n                                            </amexio-header>\n                                            <amexio-body>\n                                                <amexio-d3-chart-histogram\n                                                       [label]=\"true\"\n                                                       [title]=\"'Histogram Chart '\" \n                                                       [data]=\"histogramdata\"\n                                                       [color]=\"'blue'\"\n                                                       (onChartClick)=\"onDefaultChartClick($event)\" \n                                                 ></amexio-d3-chart-histogram> \n                                            </amexio-body>\n                                        </amexio-card>\n                                    </amexio-column>\n                                </amexio-row>   \n                                <amexio-row>\n                                    <amexio-column [size]=\"12\" [fit]=\"true\">\n                                        <amexio-card header=\"true\" >\n                                            <amexio-header>\n                                                Click on Chart\n                                            </amexio-header>\n                                            <amexio-body>\n                                                <pre><code>{{userDataSource |json }}</code></pre>\n                                             </amexio-body>\n                                        </amexio-card>\n\n                                    </amexio-column>\n                                </amexio-row>\n                    </amexio-column>\n                </amexio-row>\n  </amexio-api-demo>\n  </amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/charts/D3charts/d3histogramchart/d3histogramchart.demo.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3histogramchart/d3histogramchart.demo.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AmexioD3HistogramChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmexioD3HistogramChartDemoComponent", function() { return AmexioD3HistogramChartDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AmexioD3HistogramChartDemoComponent = /** @class */ (function () {
    function AmexioD3HistogramChartDemoComponent() {
    }
    AmexioD3HistogramChartDemoComponent.prototype.ngOnInit = function () {
        this.histogramdata = [
            ['Dinosaur', 'Length'],
            ['Acrocanthosaurus (top-spined lizard)', 12.2],
            ['Albertosaurus (Alberta lizard)', 9.1],
            ['Allosaurus (other lizard)', 12.2],
            ['Apatosaurus (deceptive lizard)', 22.9],
            ['Archaeopteryx (ancient wing)', 0.9],
            ['Argentinosaurus (Argentina lizard)', 36.6],
            ['Baryonyx (heavy claws)', 9.1],
            ['Brachiosaurus (arm lizard)', 30.5],
            ['Ceratosaurus (horned lizard)', 6.1],
            ['Coelophysis (hollow form)', 2.7],
            ['Compsognathus (elegant jaw)', 0.9],
            ['Deinonychus (terrible claw)', 2.7],
            ['Diplodocus (double beam)', 27.1],
            ['Dromicelomimus (emu mimic)', 3.4],
            ['Gallimimus (fowl mimic)', 5.5],
            ['Mamenchisaurus (Mamenchi lizard)', 21.0],
            ['Megalosaurus (big lizard)', 7.9],
            ['Microvenator (small hunter)', 1.2],
            ['Ornithomimus (bird mimic)', 4.6],
            ['Oviraptor (egg robber)', 1.5],
            ['Plateosaurus (flat lizard)', 7.9],
            ['Sauronithoides (narrow-clawed lizard)', 2.0],
            ['Seismosaurus (tremor lizard)', 45.7],
            ['Spinosaurus (spiny lizard)', 12.2],
            ['Supersaurus (super lizard)', 30.5],
            ['Tyrannosaurus (tyrant lizard)', 15.2],
            ['Ultrasaurus (ultra lizard)', 30.5],
            ['Velociraptor (swift robber)', 1.8]
        ];
    };
    AmexioD3HistogramChartDemoComponent.prototype.onDefaultChartClick = function (event) {
        this.userDataSource = event;
    };
    AmexioD3HistogramChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'amexio-d3-chart-histogram-demo',
            template: __webpack_require__(/*! ./d3histogramchart.demo.component.html */ "./src/app/charts/D3charts/d3histogramchart/d3histogramchart.demo.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AmexioD3HistogramChartDemoComponent);
    return AmexioD3HistogramChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/D3charts/d3horizontalbarchart/d3horizontalbarchart.demo.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3horizontalbarchart/d3horizontalbarchart.demo.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure  [custom-com-data]=\"customSourceData\"[url]=\"'assets/componentjson/charts/d3charts/d3barchart.json'\">\n    <amexio-api-demo>  \n            <amexio-row>\n                    <amexio-column [size]=\"8\" [fit]=\"true\">\n                        <amexio-card [header]=\"true\" [show]=\"'true'\">\n                            <amexio-header>\n                                Horizontal D3-bar\n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-d3-chart-bar [label]=\"true\" [horizontal]=\"true\" [title]=\"'Coffee Production Analysis'\"\n                                    (onChartClick)=\"onDefaultChartClick2($event)\" (onLegendClick)=\"onDefaultLegendClick1($event)\"\n                                    [data]=\"barData\">\n                                </amexio-d3-chart-bar>\n                            </amexio-body>\n                        </amexio-card>\n                    </amexio-column>\n                    <amexio-column [size]=\"4\" [fit]=\"true\">\n                        <amexio-card header=\"true\">\n                            <amexio-header>\n                                Click On Legend/ Click On Chart\n                            </amexio-header>\n                            <amexio-body>\n                                <pre><code>{{sourceData1 |json }}</code></pre>\n\n                            </amexio-body>\n                        </amexio-card>\n\n                    </amexio-column>\n            </amexio-row>\n    </amexio-api-demo>\n</amexio-api-structure>"

/***/ }),

/***/ "./src/app/charts/D3charts/d3horizontalbarchart/d3horizontalbarchart.demo.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3horizontalbarchart/d3horizontalbarchart.demo.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AmexioD3HorizontalBarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmexioD3HorizontalBarChartComponent", function() { return AmexioD3HorizontalBarChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AmexioD3HorizontalBarChartComponent = /** @class */ (function () {
    function AmexioD3HorizontalBarChartComponent() {
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_1__["ComponentDataStructure"]();
    }
    AmexioD3HorizontalBarChartComponent.prototype.ngOnInit = function () {
        this.createCustomSourceData();
        this.userDefineColors =
            [
                "#4040a1",
                "#e06377",
                " #7e4a35",
                "#6b5b95",
                "#feb236",
                "#d64161",
                "#ff7b25"
            ];
        this.barData =
            [
                ['year', 'production'],
                ['2011', 300],
                ['2012', 500],
                ['2013', 700],
                ['2014', 400],
                ['2015', 600],
                ['2016', 500],
                ['2017', 200]
            ];
    };
    AmexioD3HorizontalBarChartComponent.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'D3 Horizontal  Bar Chart';
        this.customSourceData.description = 'An D3 Horizontal bar chart that is rendered within the browser using SVG .Displays tips when hovering over points.';
        this.customSourceData.sourceMetadata.htmlUrl = 'charts/D3Charts/d3horizontalbarchart/d3chart.html';
        this.customSourceData.sourceMetadata.tsUrl = 'charts/D3Charts/d3horizontalbarchart/d3chart.text';
        this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/code/charts/D3Charts/d3horizontalbarchart/datasource.json';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-d3-chart-horizontal-bar?embed=1&file=src/app/d3chart/d3barchart/d3barchart.demo.component.html&view=editor';
    };
    AmexioD3HorizontalBarChartComponent.prototype.onDefaultLegendClick = function (event) {
        this.sourceData = event;
    };
    AmexioD3HorizontalBarChartComponent.prototype.onDefaultLegendClick1 = function (event) {
        this.sourceData1 = event;
    };
    AmexioD3HorizontalBarChartComponent.prototype.onDefaultChartClick1 = function (event) {
        this.sourceData = event;
    };
    AmexioD3HorizontalBarChartComponent.prototype.onDefaultChartClick2 = function (event) {
        this.sourceData1 = event;
    };
    AmexioD3HorizontalBarChartComponent.prototype.onDefaultChartClick = function (event) {
        this.userDataSource = event;
    };
    AmexioD3HorizontalBarChartComponent.prototype.onUserDefineLegendClick = function (event) {
        this.userDataSource = event;
    };
    AmexioD3HorizontalBarChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'amexio-d3-chart-bar-demo',
            template: __webpack_require__(/*! ./d3horizontalbarchart.demo.component.html */ "./src/app/charts/D3charts/d3horizontalbarchart/d3horizontalbarchart.demo.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AmexioD3HorizontalBarChartComponent);
    return AmexioD3HorizontalBarChartComponent;
}());



/***/ }),

/***/ "./src/app/charts/D3charts/d3linechart/d3linechart.demo.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3linechart/d3linechart.demo.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/charts/d3charts/d3linechart.json'\">\n    <amexio-api-demo>\n            <amexio-row>\n                    <amexio-column [size]=\"12\">\n                        <amexio-row>\n                            <amexio-column [size]=\"8\" [fit]=\"true\">\n                                <amexio-card [header]=\"true\" [show]=\"'true'\">\n                                    <amexio-header>\n                                        D3-line with multiple lines\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <amexio-d3-chart-line \n                                                 (onChartClick)=\"onUserDefineChartClick($event)\" \n                                                 [label]=\"true\" \n                                                 (onLegendClick)=\"onUserDefineLegendClick($event)\"\n                                                 [title]=\"'Popularity Of XYZ & PQR'\"\n                                                [data] = \"doubleLineData\"\n                                                >\n                                             </amexio-d3-chart-line>\n                                    </amexio-body>\n                                </amexio-card>\n                            </amexio-column>\n                            <amexio-column [size]=\"4\" [fit]=\"true\" >\n                                <amexio-card header=\"true\" >\n                                    <amexio-header>\n                                        Click On Legend/Click on Chart\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <pre><code>{{userDataSource |json }}</code></pre>\n\n                                    </amexio-body>\n                                </amexio-card>\n\n                            </amexio-column>\n\n                        </amexio-row>\n\n                                <amexio-row>\n                                    <amexio-column [size]=\"8\" [fit]=\"true\">\n                                        <amexio-card [header]=\"true\" [show]=\"'true'\">\n                                            <amexio-header>\n                                                D3-line With Single line\n                                            </amexio-header>\n                                            <amexio-body>\n                                                <amexio-d3-chart-line \n                                                (onChartClick)=\"onDefaultChartClick($event)\"\n                                                (onLegendClick)=\"onDefaultLegendClick($event)\"\n                                                [title]=\"'CNX Resources Corp'\"\n                                                [label]=\"true\"\n                                                 [data] = \"singlelinedata\">\n                                             </amexio-d3-chart-line>\n                                            </amexio-body>\n                                        </amexio-card>\n                                    </amexio-column>\n                                    <amexio-column [size]=\"4\" [fit]=\"true\" >\n                                        <amexio-card header=\"true\" >\n                                            <amexio-header>\n                                                Click On Legend/ Click on Chart\n                                            </amexio-header>\n                                            <amexio-body>\n                                                <pre><code>{{sourceData |json }}</code></pre>\n\n                                            </amexio-body>\n                                        </amexio-card>\n\n                                    </amexio-column>\n                                </amexio-row>\n                                <!-- -->\n                                <amexio-row>\n                                    <amexio-column [size]=\"8\" [fit]=\"true\">\n                                        <amexio-card [header]=\"true\" [show]=\"'true'\">\n                                            <amexio-header>\n                                                D3-line with Yaxis interval\n                                            </amexio-header>\n                                            <amexio-body>\n                                                <amexio-d3-chart-line \n                                                        (onChartClick)=\"onLineChartClick($event)\" \n                                                        [label]=\"true\" \n                                                        (onLegendClick)=\"onLineLegendClick($event)\"\n                                                        [title]=\"'Company Performance'\"\n                                                        [data] = \"lineData\"\n                                                        [label-color] = \"'brown'\"\n                                                        [yaxis-interval] = \"5\"\n                                                        >\n                                                     </amexio-d3-chart-line>\n                                            </amexio-body>\n                                        </amexio-card>\n                                    </amexio-column>\n                                    <amexio-column [size]=\"4\" [fit]=\"true\" >\n                                        <amexio-card header=\"true\" >\n                                            <amexio-header>\n                                                Click On Legend/Click on Chart\n                                            </amexio-header>\n                                            <amexio-body>\n                                                <pre><code>{{userDataSource3 |json }}</code></pre>\n        \n                                            </amexio-body>\n                                        </amexio-card>\n        \n                                    </amexio-column>\n        \n                                </amexio-row>\n                    </amexio-column>\n                </amexio-row>\n        </amexio-api-demo>\n        </amexio-api-structure>"

/***/ }),

/***/ "./src/app/charts/D3charts/d3linechart/d3linechart.demo.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3linechart/d3linechart.demo.component.ts ***!
  \***************************************************************************/
/*! exports provided: AmexioD3LineChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmexioD3LineChartDemoComponent", function() { return AmexioD3LineChartDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AmexioD3LineChartDemoComponent = /** @class */ (function () {
    function AmexioD3LineChartDemoComponent() {
    }
    AmexioD3LineChartDemoComponent.prototype.ngOnInit = function () {
        this.singlelinedata = [[{ "datatype": "number", "label": "Day" }, { "datatype": "number", "label": "CNX Resources Corp" }], [0, 0], [1, 10], [2, 23], [3, 17], [4, 18], [5, 9], [6, 11], [7, 27], [8, 33], [9, 40], [10, 32], [11, 35], [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48], [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57], [24, 60], [25, 50], [26, 52], [27, 51], [28, 49]];
        this.doubleLineData = [[{ "datatype": "number", "label": "Day" }, { "datatype": "number", "label": "XYZ" }, { "datatype": "number", "label": "PQR" }], [0, 0, 0], [1, 10, 5], [2, 23, 15], [3, 17, 9], [4, 18, 10], [5, 9, 5], [6, 11, 3], [7, 27, 19], [8, 33, 25], [9, 40, 32], [10, 32, 24], [11, 35, 27], [12, 30, 22], [13, 40, 32], [14, 42, 34], [15, 47, 39]];
        this.lineData = [[{ "datatype": "number", "label": "Day" }, { "datatype": "number", "label": "Sales" }, { "datatype": "number", "label": "Profit" }], [0, 0, 0], [1, 10, 5], [2, 23, 15], [3, 17, 9], [4, 18, 10]];
    };
    AmexioD3LineChartDemoComponent.prototype.onDefaultLegendClick = function (event) {
        this.sourceData = event;
    };
    AmexioD3LineChartDemoComponent.prototype.onUserDefineChartClick = function (event) {
        this.userDataSource = event;
    };
    AmexioD3LineChartDemoComponent.prototype.onUserDefineLegendClick = function (event) {
        this.userDataSource = event;
    };
    AmexioD3LineChartDemoComponent.prototype.onDefaultChartClick = function (event) {
        this.sourceData = event;
    };
    AmexioD3LineChartDemoComponent.prototype.onLineLegendClick = function (event) {
        this.userDataSource3 = event;
    };
    AmexioD3LineChartDemoComponent.prototype.onLineChartClick = function (event) {
        this.userDataSource3 = event;
    };
    AmexioD3LineChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'amexio-d3-chart-line-demo',
            template: __webpack_require__(/*! ./d3linechart.demo.component.html */ "./src/app/charts/D3charts/d3linechart/d3linechart.demo.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AmexioD3LineChartDemoComponent);
    return AmexioD3LineChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/D3charts/d3multiareachart/d3multiareachart.demo.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3multiareachart/d3multiareachart.demo.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/charts/d3charts/d3multiareachart.json'\">\n    <amexio-api-demo>\n            <amexio-row>\n                    <amexio-column [size]=\"12\">\n\n                        <amexio-row>\n                            <amexio-column [size]=\"8\" [fit]=\"true\">\n                                <amexio-card [header]=\"true\" [show]=\"'true'\">\n                                    <amexio-header>\n                                        D3-multi-area Chart with default Colors\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <amexio-d3-chart-multiarea [label]=\"true\" [data]=\"multiAreaData\" [title]=\"'Stock Market Information'\" (onLegendClick)=\"onMultiAreaLegendClick($event)\"\n                                            (onChartClick)=\"onMultiAreaChartClick($event)\">\n                                        </amexio-d3-chart-multiarea>\n                                    </amexio-body>\n                                </amexio-card>\n                            </amexio-column>\n                            <amexio-column [size]=\"4\" [fit]=\"true\">\n                                <amexio-card header=\"true\" >\n                                    <amexio-header>\n                                        Click On Legend/Click on Chart\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <pre><code>{{userDataSource |json }}</code></pre>\n\n                                    </amexio-body>\n                                </amexio-card>\n\n                            </amexio-column>\n\n                        </amexio-row>\n\n                    </amexio-column>\n                </amexio-row>\n    </amexio-api-demo>\n    </amexio-api-structure>"

/***/ }),

/***/ "./src/app/charts/D3charts/d3multiareachart/d3multiareachart.demo.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3multiareachart/d3multiareachart.demo.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AmexioD3MultiAreaChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmexioD3MultiAreaChartDemoComponent", function() { return AmexioD3MultiAreaChartDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AmexioD3MultiAreaChartDemoComponent = /** @class */ (function () {
    function AmexioD3MultiAreaChartDemoComponent() {
        this.multiAreaData = [];
    }
    AmexioD3MultiAreaChartDemoComponent.prototype.ngOnInit = function () {
        this.multiAreaData = [
            ["date", "index", "open", "close", "high"],
            ["2014", 58.13, 610, 234, 100],
            ["2015", 53.98, 626, 356, 150],
            ["2016", 99.00, 543, 456, 200],
            ["2017", 130.28, 443, 556, 250],
            ["2018", 58.13, 610, 245, 300],
            ["2019", 53.98, 626, 345, 350],
            ["2020", 99.00, 543, 556, 400],
            ["2021", 130.28, 443, 443, 500]
        ];
    };
    AmexioD3MultiAreaChartDemoComponent.prototype.onMultiAreaLegendClick = function (event) {
        this.userDataSource = event;
    };
    AmexioD3MultiAreaChartDemoComponent.prototype.onMultiAreaChartClick = function (event) {
        this.userDataSource = event;
    };
    AmexioD3MultiAreaChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'amexio-d3-chart-bar-stack-demo',
            template: __webpack_require__(/*! ./d3multiareachart.demo.component.html */ "./src/app/charts/D3charts/d3multiareachart/d3multiareachart.demo.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AmexioD3MultiAreaChartDemoComponent);
    return AmexioD3MultiAreaChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/D3charts/d3multiserieschart/d3multiserieschart.demo.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3multiserieschart/d3multiserieschart.demo.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/charts/d3charts/d3multiserieschart.json'\">\n    <amexio-api-demo>\n            <amexio-row>\n                    <amexio-column [size]=\"12\">\n                        <amexio-row>\n                            <amexio-column [size]=\"8\" [fit]=\"true\">\n                                <amexio-card [header]=\"true\" [show]=\"'true'\">\n                                    <amexio-header>\n                                        D3-multiseries-chart\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <amexio-d3-chart-multiseries [label]=\"true\" [label-color]=\"'#7B0099'\"  [title]=\"'MULTISERIESBARCHART'\"[data]=\"userDefineColorData\" (onChartClick)=\"onDefaultChartClick($event)\" \n                                          (onLegendClick)=\"onUserDefineLegendClick($event)\"  >\n                                       </amexio-d3-chart-multiseries>\n                                  </amexio-body>\n                                </amexio-card>\n                            </amexio-column>\n                            <amexio-column [size]=\"4\" [fit]=\"true\">\n                                <amexio-card header=\"true\" >\n                                    <amexio-header>\n                                        Click On Legend/Click On Chart\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <pre><code>{{userDataSource |json }}</code></pre>\n\n                                    </amexio-body>\n                                </amexio-card>\n\n                            </amexio-column>\n\n                        </amexio-row>\n\n                    </amexio-column>\n                </amexio-row>\n        </amexio-api-demo>\n        </amexio-api-structure>"

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
    function AmexioD3MultiSeriesChartDemoComponent() {
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
    AmexioD3MultiSeriesChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'amexio-d3-chart-multiseries-demo',
            template: __webpack_require__(/*! ./d3multiserieschart.demo.component.html */ "./src/app/charts/D3charts/d3multiserieschart/d3multiserieschart.demo.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AmexioD3MultiSeriesChartDemoComponent);
    return AmexioD3MultiSeriesChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/D3charts/d3piechart/d3piechart.demo.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3piechart/d3piechart.demo.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/charts/d3charts/d3piechart.json'\">\n    <amexio-api-demo>\n            <amexio-row>\n                    <amexio-column [size]=\"12\">\n                        <amexio-row>\n                            <amexio-column [size]=\"8\" [fit]=\"true\">\n                                <amexio-card [header]=\"true\" [show]=\"'true'\">\n                                    <amexio-header>\n                                        D3-pie with Legend and Default Color\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <amexio-d3-chart-pie [label]=\"true\" [title]=\"'Visitor Visit Country Ratio'\" [color]=\"userDefineColors\" (onLegendClick)=\"onUserDefineLegendClick($event)\"\n                                            [data]=\"userDefineColorData\" (onChartClick)=\"onDefaultChartClick($event)\" >\n                                        </amexio-d3-chart-pie>\n                                    </amexio-body>\n                                </amexio-card>\n                            </amexio-column>\n                            <amexio-column [size]=\"4\" [fit]=\"true\">\n                                <amexio-card header=\"true\">\n                                    <amexio-header>\n                                        Click On Legend/Click on Chart\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <pre><code>{{userDataSource |json }}</code></pre>\n\n                                    </amexio-body>\n                                </amexio-card>\n\n                            </amexio-column>\n\n                        </amexio-row>\n\n                    </amexio-column>\n                </amexio-row>\n   </amexio-api-demo>\n </amexio-api-structure>"

/***/ }),

/***/ "./src/app/charts/D3charts/d3piechart/d3piechart.demo.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3piechart/d3piechart.demo.component.ts ***!
  \*************************************************************************/
/*! exports provided: AmexioD3PieChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmexioD3PieChartDemoComponent", function() { return AmexioD3PieChartDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AmexioD3PieChartDemoComponent = /** @class */ (function () {
    function AmexioD3PieChartDemoComponent() {
    }
    AmexioD3PieChartDemoComponent.prototype.ngOnInit = function () {
        this.userDefineColors = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00", "#b9936c"];
        this.defultColorData =
            [
                ['browser', 'activity'],
                ['IE', 39.3],
                ['Chrome', 32.52],
                ['Safari', 13.68],
                ['Firefox', 8.71],
                ['Others', 6.01]
            ];
        this.userDefineColorData = [
            ['country', 'ratio'],
            ['India', 30.3],
            ['Spain', 9.52],
            ['France', 13.68],
            ['China', 18.71],
            ['Germany', 8.01],
            ['U.K', 8.01],
            ['U.S', 14.01],
            ['Korea', 4.01]
        ];
    };
    AmexioD3PieChartDemoComponent.prototype.onDefaultLegendClick = function (event) {
        this.sourceData = event;
    };
    AmexioD3PieChartDemoComponent.prototype.onDefaultChartClick1 = function (event) {
        this.sourceData = event;
    };
    AmexioD3PieChartDemoComponent.prototype.onDefaultChartClick = function (event) {
        this.userDataSource = event;
    };
    AmexioD3PieChartDemoComponent.prototype.onUserDefineLegendClick = function (event) {
        this.userDataSource = event;
    };
    AmexioD3PieChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'amexio-d3-chart-pie-demo',
            template: __webpack_require__(/*! ./d3piechart.demo.component.html */ "./src/app/charts/D3charts/d3piechart/d3piechart.demo.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AmexioD3PieChartDemoComponent);
    return AmexioD3PieChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/D3charts/d3scatterchart/d3scatterchart.demo.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3scatterchart/d3scatterchart.demo.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/charts/d3charts/d3scatterchart.json'\">\n    <amexio-api-demo>\n            <amexio-row>\n                    <amexio-column [size]=\"12\">\n\n                        <amexio-row>\n                            <amexio-column [size]=\"8\" [fit]=\"true\">\n                                <amexio-card [header]=\"true\" [show]=\"'true'\">\n                                    <amexio-header>\n                                        D3-scatter chart with UserDefine Color\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <amexio-d3-chart-scatter \n                                        [data]=\"scatterChartData\" \n                                        [label]=\"true\"\n                                        [label-color]=\"'#0000b3'\"\n                                        [color]=\"'green'\"\n                                        [zoom-enable]=\"true\"\n                                        (onChartClick)=\"onChartClick($event)\"\n                                        (onLegendClick)=\"onLegendClick($event)\">\n                                    </amexio-d3-chart-scatter>\n\n                                    </amexio-body>\n                                </amexio-card>\n                            </amexio-column>\n                            <amexio-column [size]=\"4\" [fit]=\"true\">\n                                <amexio-card header=\"true\">\n                                    <amexio-header>\n                                        Click On Legend/ Click on Chart\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <pre><code>{{userDataSource |json }}</code></pre>\n\n                                    </amexio-body>\n                                </amexio-card>\n\n                            </amexio-column>\n                        </amexio-row>\n\n                        <amexio-row>\n                            <amexio-column [size]=\"8\" [fit]=\"true\">\n                                <amexio-card [header]=\"true\" [show]=\"'true'\">\n                                    <amexio-header>\n                                        D3-scatter chart with Multiple Scatter Points\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <amexio-d3-chart-scatter \n                                        [width]=\"400\"\n                                        [data]=\"mineralScatterChartData\" \n                                        [label]=\"true\"\n                                        [height]=\"400\" \n                                        [zoom-enable]=\"true\"\n                                        [title]=\"'Minerals'\"\n                                        [vertical-scale]=\"false\"\n                                        (onChartClick)=\"onChartClick1($event)\"\n                                        (onLegendClick)=\"onLegendClick1($event)\"\n                                        >\n                                 </amexio-d3-chart-scatter>\n                                    </amexio-body>\n                                </amexio-card>\n                            </amexio-column>\n                            <amexio-column [size]=\"4\" [fit]=\"true\">\n                                <amexio-card header=\"true\">\n                                    <amexio-header>\n                                        Click On Legend/ Click on Chart\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <pre><code>{{userDataSource1 |json }}</code></pre>\n\n                                    </amexio-body>\n                                </amexio-card>\n\n                            </amexio-column>\n                        </amexio-row>\n                    </amexio-column>\n                </amexio-row>\n        </amexio-api-demo>\n        </amexio-api-structure>"

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
    function AmexioD3ScatterChartDemoComponent() {
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
    AmexioD3ScatterChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'amexio-d3-chart-scatter-demo',
            template: __webpack_require__(/*! ./d3scatterchart.demo.component.html */ "./src/app/charts/D3charts/d3scatterchart/d3scatterchart.demo.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AmexioD3ScatterChartDemoComponent);
    return AmexioD3ScatterChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/D3charts/d3timelinechart/d3timelinechart.demo.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3timelinechart/d3timelinechart.demo.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/charts/d3charts/d3timelinechart.json'\">\n    <amexio-api-demo>\n            <amexio-row>\n                    <amexio-column [size]=\"12\">\n                            <amexio-row>\n                                    <amexio-column [size]=\"12\" [fit]=\"true\">\n                                        <amexio-card [header]=\"true\" [show]=\"'true'\">\n                                            <amexio-header>\n                                                D3-timeline chart with UserDefined Color\n                                            </amexio-header>\n                                            <amexio-body>\n                                                <amexio-d3-chart-timeline\n                                                       [label]=\"true\"\n                                                       [title]=\"'Presidentship Duration'\" \n                                                       [data]=\"timelinedata\"\n                                                       (onChartClick)=\"onDefaultChartClick($event)\" \n                                                       (onLegendClick)=\"onUserDefineLegendClick($event)\"\n                                                 ></amexio-d3-chart-timeline> \n                                            </amexio-body>\n                                        </amexio-card>\n                                    </amexio-column>\n                                </amexio-row>   \n                                <amexio-row>\n                                    <amexio-column [size]=\"12\" [fit]=\"true\">\n                                        <amexio-card header=\"true\" >\n                                            <amexio-header>\n                                                Click On Legend/Click on Chart\n                                            </amexio-header>\n                                            <amexio-body>\n                                                <pre><code>{{userDataSource |json }}</code></pre>\n                                             </amexio-body>\n                                        </amexio-card>\n\n                                    </amexio-column>\n                                </amexio-row>\n                    </amexio-column>\n                </amexio-row> \n   </amexio-api-demo>\n </amexio-api-structure>"

/***/ }),

/***/ "./src/app/charts/D3charts/d3timelinechart/d3timelinechart.demo.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3timelinechart/d3timelinechart.demo.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AmexioD3TimeLineChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmexioD3TimeLineChartDemoComponent", function() { return AmexioD3TimeLineChartDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AmexioD3TimeLineChartDemoComponent = /** @class */ (function () {
    function AmexioD3TimeLineChartDemoComponent() {
    }
    AmexioD3TimeLineChartDemoComponent.prototype.ngOnInit = function () {
        this.timelinedata = [
            ['Washington', new Date(1789, 3, 30), new Date(1797, 2, 4)],
            ['Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],
            ['Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4)]
        ];
    };
    AmexioD3TimeLineChartDemoComponent.prototype.onDefaultChartClick = function (event) {
        this.userDataSource = event;
    };
    AmexioD3TimeLineChartDemoComponent.prototype.onUserDefineLegendClick = function (event) {
        this.userDataSource = event;
    };
    AmexioD3TimeLineChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'amexio-d3-chart-timeline-demo',
            template: __webpack_require__(/*! ./d3timelinechart.demo.component.html */ "./src/app/charts/D3charts/d3timelinechart/d3timelinechart.demo.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AmexioD3TimeLineChartDemoComponent);
    return AmexioD3TimeLineChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/D3charts/d3waterfallchart/d3waterfallchart.demo.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3waterfallchart/d3waterfallchart.demo.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/charts/d3charts/d3waterfallchart.json'\">\n    <amexio-api-demo>\n            <amexio-row>\n                    <amexio-column [size]=\"12\">\n                            <amexio-row>\n                                    <amexio-column [size]=\"8\" [fit]=\"true\">\n                                        <amexio-card [header]=\"true\" [show]=\"'true'\">\n                                            <amexio-header>\n                                                D3-waterfall chart\n                                            </amexio-header>\n                                            <amexio-body>\n                                                <amexio-d3-chart-waterfall \n                                                [title]=\"'Product Information'\" \n                                                [data]=\"waterfallChartData\"\n                                                [label]=\"true\"\n                                                [label-color]=\"'white'\"\n                                                (onChartClick)=\"onChartClick($event)\"\n                                                (onLegendClick)=\"onLegendClick($event)\">\n                                            </amexio-d3-chart-waterfall>\n                                            </amexio-body>\n                                        </amexio-card>\n                                    </amexio-column>\n                                    <amexio-column [size]=\"4\" [fit]=\"true\">\n                                        <amexio-card header=\"true\" >\n                                            <amexio-header>\n                                                Click On Legend/ Click on Chart\n                                            </amexio-header>\n                                            <amexio-body>\n                                                <pre><code>{{sourceData |json }}</code></pre>\n\n                                            </amexio-body>\n                                        </amexio-card>\n\n                                    </amexio-column>\n                                </amexio-row>\n                    </amexio-column>\n                </amexio-row>\n        </amexio-api-demo>\n        </amexio-api-structure>"

/***/ }),

/***/ "./src/app/charts/D3charts/d3waterfallchart/d3waterfallchart.demo.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3waterfallchart/d3waterfallchart.demo.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AmexioD3WaterfallChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmexioD3WaterfallChartDemoComponent", function() { return AmexioD3WaterfallChartDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AmexioD3WaterfallChartDemoComponent = /** @class */ (function () {
    function AmexioD3WaterfallChartDemoComponent() {
    }
    AmexioD3WaterfallChartDemoComponent.prototype.ngOnInit = function () {
        this.waterfallChartData = [
            ["Product", "Yield"],
            ["Product Revenue", 420000],
            ["Services Revenue", 210000],
            ["Fixed Costs", -170000],
            ["letiable Costs", -140000]
        ];
    };
    AmexioD3WaterfallChartDemoComponent.prototype.onLegendClick = function (event) {
        this.sourceData = event;
    };
    AmexioD3WaterfallChartDemoComponent.prototype.onChartClick = function (event) {
        this.sourceData = event;
    };
    AmexioD3WaterfallChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'amexio-d3-chart-waterfall-demo',
            template: __webpack_require__(/*! ./d3waterfallchart.demo.component.html */ "./src/app/charts/D3charts/d3waterfallchart/d3waterfallchart.demo.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AmexioD3WaterfallChartDemoComponent);
    return AmexioD3WaterfallChartDemoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=charts-D3charts-D3charts-module.js.map