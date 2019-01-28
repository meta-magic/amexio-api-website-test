(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chartd3-chartd3-demo-module"],{

/***/ "./src/app/chartd3/chard3.demo.ts":
/*!****************************************!*\
  !*** ./src/app/chartd3/chard3.demo.ts ***!
  \****************************************/
/*! exports provided: ChartD3Demo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartD3Demo", function() { return ChartD3Demo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/**
 * Created by kedar on 21/9/18.
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


var ChartD3Demo = /** @class */ (function () {
    function ChartD3Demo(http) {
        this.http = http;
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
        this.comboChartData = [
            ['State', 'Rice Production', 'Rice Export'],
            ['W.B', 600, 50],
            ['Kerala', 500, 100],
            ['Goa', 400, 350],
            ['Assam', 250, 200],
            ['Punjab', 300, 250],
            ['Bihar', 400, 380],
            ['Orissa', 500, 200]
        ];
        this.barData = [
            ['State', 'Corn Export', 'Bajra Export', 'Rice Export', 'Wheat Export', 'Jowar Export'],
            ['Andhra Pradesh', 600, 500, 250, 50, 95],
            ['Kerala', 500, 400, 75, 150, 195],
            ['Tamil Nadu', 400, 300, 250, 50, 95],
            ['Assam', 250, 150, 75, 150, 195],
            ['Maharshtra', 300, 200, 250, 50, 95]
        ];
        this.lineArray = [
            { column: "Rice Export", label: true, color: "yellow" },
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
        this.horizontalBarData = [
            ['year', 'production'],
            ['2011', 300],
            ['2012', 500],
            ['2013', 700],
            ['2014', 400],
            ['2015', 600],
            ['2016', 500],
            ['2017', 200]
        ];
        this.userDefineColors = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00", "#b9936c"];
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
    }
    ChartD3Demo.prototype.ngOnInit = function () {
        this.donutDataColor = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"];
        this.donutData = [
            ['browser', 'activity'],
            ['IE', 11.43],
            ['Chrome', 63.14],
            ['Safari', 3.83],
            ['Firefox', 10.23],
            ['Others', 10.01]
        ];
        this.pieData = [
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
        this.multiData = [
            ['date', 'Sales', 'Expenses', 'Profit'],
            ['2014', 1000, 400, 200],
            ['2015', 1170, 460, 250],
            ['2016', 660, 1120, 300],
            ['2017', 1030, 540, 350],
            ['2018', 1090, 740, 450],
            ['2019', 1050, 640, 350]
        ];
        this.doubleLineData = [[{ "datatype": "number", "label": "Day" }, { "datatype": "number", "label": "XYZ" }, { "datatype": "number", "label": "PQR" }], [0, 0, 0], [1, 10, 5], [2, 23, 15], [3, 17, 9], [4, 18, 10], [5, 9, 5], [6, 11, 3], [7, 27, 19], [8, 33, 25], [9, 40, 32], [10, 32, 24], [11, 35, 27], [12, 30, 22], [13, 40, 32], [14, 42, 34], [15, 47, 39]];
        this.stackData = [
            ['Year', 'Sales', 'Expenses', 'Profit'],
            ['2014', 1000, 400, 200],
            ['2015', 1170, 460, 250],
            ['2016', 660, 1120, 300],
            ['2017', 1030, 540, 350],
            ['2018', 1090, 740, 450],
            ['2019', 1050, 640, 350]
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
        this.waterfallChartData = [
            ["name", "value"],
            ["Product Revenue", 420000],
            ["Services Revenue", 210000],
            ["Fixed Costs", -170000],
            ["letiable Costs", -140000]
        ];
    };
    ChartD3Demo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'chart-d3-page',
            template: __webpack_require__(/*! ./chartd3.demo.html */ "./src/app/chartd3/chartd3.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ChartD3Demo);
    return ChartD3Demo;
}());



/***/ }),

/***/ "./src/app/chartd3/chartd3.demo.html":
/*!*******************************************!*\
  !*** ./src/app/chartd3/chartd3.demo.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-row>\n    <amexio-column size=\"12\">\n        <amexio-card [header]=\"false\" [show]=\"'true'\">\n\n            <amexio-body>\n                <amexio-image [path]=\"'assets/images/logos/D3_chart_page1.jpg'\" [tooltip]=\"'Image'\"></amexio-image>\n\n                <p><b>D3</b> allows you to bind arbitrary data to a Document Object Model (DOM),\n                    and then apply data-driven transformations to the document. For example,\n                    you can use D3 to generate an HTML table from an array of numbers.\n                    Or, use the same data to create an interactive SVG bar chart with smooth transitions\n                    and interaction.</p>\n\n                <p>D3 is not a monolithic framework that seeks to provide every conceivable feature.\n                    Instead, D3 solves the crux of the problem: efficient manipulation of documents\n                    based on data. This avoids proprietary representation and affords extraordinary\n                    flexibility, exposing the full capabilities of web standards such as HTML, SVG, and CSS.\n                    With minimal overhead, D3 is extremely fast, supporting large datasets and dynamic\n                    behaviors for interaction and animation. D3’s functional style allows code reuse\n                    through a diverse collection of <span style=\"color: #0000FF\"><ins>official</ins></span> and <span\n                        style=\"color: #0000FF\"><ins>community-developed</ins></span> modules.</p>\n\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n</amexio-row>\n\n\n<amexio-row>\n    <amexio-column size=\"6\" [fit]=\"true\">\n        <amexio-card [header]=\"true\" [show]=\"'true'\">\n            <amexio-header>\n                amexio D3-bar chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-bar [title]=\"'Population Of Cities In India'\" [label]=\"true\" [color]=\"userDefineColors\" [data]=\"userDefineColorData\">\n                </amexio-d3-chart-bar>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n\n    <amexio-column size=\"6\" [fit]=\"true\">\n        <amexio-card [header]=\"true\" [show]=\"'true'\">\n            <amexio-header>\n                amexio D3-line chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-line [title]=\"'Popularity Of XYZ & PQR'\" [label]=\"true\" [data]=\"doubleLineData\">\n                </amexio-d3-chart-line>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n</amexio-row>\n\n\n\n<amexio-row>\n\n    <amexio-column size=\"6\" [fit]=\"true\">\n        <amexio-card [header]=\"true\" [show]=\"'true'\">\n            <amexio-header>\n                amexio D3-donut chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-donut [label]=\"true\" [title]=\"'Browser Popularity'\" [color]=\"donutDataColor\" [data]=\"donutData\">\n                </amexio-d3-chart-donut>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n\n    <amexio-column size=\"6\" [fit]=\"true\">\n        <amexio-card [header]=\"true\" [show]=\"'true'\">\n            <amexio-header>\n                amexio D3-pie chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-pie [label]=\"true\" [title]=\"'Visitor Visit Country Ratio'\" [color]=\"userDefineColors\" [data]=\"pieData\">\n                </amexio-d3-chart-pie>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n</amexio-row>\n\n<amexio-row>\n    <amexio-column size=\"6\" [fit]=\"true\">\n        <amexio-card [header]=\"true\" [show]=\"'true'\">\n            <amexio-header>\n                Amexio D3-multiseries Chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-multiseries [title]=\"'Market Information'\" [data]=\"stackData\" [label]=\"true\">\n                </amexio-d3-chart-multiseries>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n\n    <amexio-column size=\"6\" [fit]=\"true\">\n        <amexio-card [header]=\"true\" [show]=\"'true'\">\n            <amexio-header>\n                amexio D3-Stack Bar chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-barstack [title]=\"'Market Information'\" [data]=\"stackData\" [label]=\"true\">\n                </amexio-d3-chart-barstack>\n\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n</amexio-row>\n<amexio-row>\n\n    <amexio-column size=\"6\" [fit]=\"true\">\n        <amexio-card [header]=\"true\" [show]=\"'true'\">\n            <amexio-header>\n                amexio D3-Horizontal bar chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-bar [label]=\"true\" [title]=\"'Production Information'\" [horizontal]=\"true\" [data]=\"horizontalBarData\">\n                </amexio-d3-chart-bar>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n\n    <amexio-column size=\"6\" [fit]=\"true\">\n        <amexio-card [header]=\"true\" [show]=\"'true'\">\n            <amexio-header>\n                amexio D3-Combo Chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-combochart [title]=\"'State Wise Rice Production'\" [data]=\"comboChartData\" >\n                </amexio-d3-combochart>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n</amexio-row>\n\n<amexio-row>\n\n    <amexio-column size=\"6\" [fit]=\"true\">\n        <amexio-card [header]=\"true\" [show]=\"'true'\">\n            <amexio-header>\n                amexio D3-Multi-Area chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-multiarea [label]=\"true\" [data]=\"multiAreaData\" [title]=\"'Stock Market Information'\">\n                </amexio-d3-chart-multiarea>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n\n    <amexio-column size=\"6\" [fit]=\"true\">\n        <amexio-card [header]=\"true\" [show]=\"'true'\">\n            <amexio-header>\n                amexio D3-Scatter chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-scatter [title]=\"'Age vs Weight'\" [label]=\"true\" [data]=\"scatterChartData\" [color]=\"'green'\">\n                </amexio-d3-chart-scatter>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n</amexio-row>\n\n<amexio-row>\n    <amexio-column size=\"6\" [fit]=\"true\">\n        <amexio-card [header]=\"true\" [show]=\"'true'\">\n            <amexio-header>\n                amexio D3-Histogram chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-histogram [label]=\"true\" [title]=\"'Count Of Dinosaur'\" [data]=\"histogramdata\" [color]=\"'blue'\"></amexio-d3-chart-histogram>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n\n    <amexio-column size=\"6\" [fit]=\"true\">\n        <amexio-card [header]=\"true\" [show]=\"'true'\">\n            <amexio-header>\n                amexio D3-Waterfall chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-waterfall [title]=\"'Product Information'\" [data]=\"waterfallChartData\" [label]=\"true\">\n                </amexio-d3-chart-waterfall>\n\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n</amexio-row>\n\n\n<amexio-row>\n    <amexio-column size=\"6\" [fit]=\"true\">\n        <amexio-card [header]=\"true\" [show]=\"'true'\">\n            <amexio-header>\n                amexio D3-Bubble chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-bubble [title]=\"'Region Wise Life Expectancy '\" [label]=\"true\"\n                [zoom-enable]=\"true\" [data]=\"bubblechart\">\n                </amexio-d3-chart-bubble>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n    <amexio-column size=\"6\" [fit]=\"true\">\n        <amexio-card [header]=\"true\" [show]=\"'true'\">\n            <amexio-header>\n                amexio D3-Combo Chart with multi lines\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-combochart [title]=\"' Production in India'\" \n                \n               [data]=\"barData\"\n               [bar-data-index]=\"barArray\"\n               [line-data-index]=\"lineArray\"\n               >\n               </amexio-d3-combochart>   \n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n</amexio-row>"

/***/ }),

/***/ "./src/app/chartd3/chartd3.demo.module.ts":
/*!************************************************!*\
  !*** ./src/app/chartd3/chartd3.demo.module.ts ***!
  \************************************************/
/*! exports provided: ChartD3DemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartD3DemoModule", function() { return ChartD3DemoModule; });
/* harmony import */ var _chard3_demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chard3.demo */ "./src/app/chartd3/chard3.demo.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var amexio_chart_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! amexio-chart-d3 */ "./node_modules/amexio-chart-d3/fesm5/amexio-chart-d3.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









/**
 * Created by kedar on 21/09/18.
 */
var ChartD3DemoModule = /** @class */ (function () {
    function ChartD3DemoModule() {
    }
    ChartD3DemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_chard3_demo__WEBPACK_IMPORTED_MODULE_0__["ChartD3Demo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_3__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
                        path: '', component: _chard3_demo__WEBPACK_IMPORTED_MODULE_0__["ChartD3Demo"], pathMatch: 'full'
                    }]), amexio_chart_d3__WEBPACK_IMPORTED_MODULE_8__["AmexioChartD3Module"]],
            providers: []
        })
    ], ChartD3DemoModule);
    return ChartD3DemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=chartd3-chartd3-demo-module.js.map