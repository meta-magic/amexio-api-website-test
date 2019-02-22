(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-googlechart-googlechart-module"],{

/***/ "./src/app/charts/googlechart/areachart/areachart.demo.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/charts/googlechart/areachart/areachart.demo.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/charts/google charts/areachart.json'\">\n  <amexio-api-demo>  \n      <amexio-row>\n          <amexio-column size=\"12\">\n            <amexio-chart-area [data]=\"areaChartData\" [height]=\"'500px'\" [width]=\"'100%'\" >\n              <amexio-chart-title [title]=\"'Company Performance'\"></amexio-chart-title>\n              <amexio-chart-legend [position]=\"'bottom'\"></amexio-chart-legend>\n            </amexio-chart-area>\n          </amexio-column>\n        </amexio-row>\n    </amexio-api-demo>\n    </amexio-api-structure>"

/***/ }),

/***/ "./src/app/charts/googlechart/areachart/areachart.demo.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/charts/googlechart/areachart/areachart.demo.component.ts ***!
  \**************************************************************************/
/*! exports provided: AreaChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaChartDemoComponent", function() { return AreaChartDemoComponent; });
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
/**
 * Created by sagar on 11/1/18.
 */

var AreaChartDemoComponent = /** @class */ (function () {
    function AreaChartDemoComponent() {
        this.areaChartData = [
            ['Year', 'Sales', 'Expenses'],
            ['2013', 1000, 400],
            ['2014', 1170, 460],
            ['2015', 660, 1120],
            ['2016', 1030, 540]
        ];
    }
    AreaChartDemoComponent.prototype.ngOnInit = function () {
    };
    AreaChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'area-chart-demo',
            template: __webpack_require__(/*! ./areachart.demo.component.html */ "./src/app/charts/googlechart/areachart/areachart.demo.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], AreaChartDemoComponent);
    return AreaChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/googlechart/barchart/barchart.demo.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/charts/googlechart/barchart/barchart.demo.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/charts/google charts/barchart.json'\">\n   <amexio-api-demo>  \n      <amexio-row>\n          <amexio-column size=\"6\">\n            <amexio-chart-bar [data]=\"barChartData\" [height]=\"'400px'\" [width]=\"'100%'\" >\n              <amexio-chart-title [title]=\"'Population of Largest U.S. Cities'\"></amexio-chart-title>\n              <amexio-chart-legend [position]=\"'bottom'\"></amexio-chart-legend>\n            </amexio-chart-bar>\n          </amexio-column>\n          <amexio-column size=\"6\">\n            <amexio-chart-bar [data]=\"barStackChartData\" [height]=\"'400px'\" [width]=\"'100%'\"  [stacked]=\"true\">\n              <amexio-chart-title [title]=\"'Company Performance'\"></amexio-chart-title>\n              <amexio-chart-legend [position]=\"'bottom'\"></amexio-chart-legend>\n            </amexio-chart-bar>\n          </amexio-column>\n        </amexio-row>\n  </amexio-api-demo>\n</amexio-api-structure>"

/***/ }),

/***/ "./src/app/charts/googlechart/barchart/barchart.demo.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/charts/googlechart/barchart/barchart.demo.component.ts ***!
  \************************************************************************/
/*! exports provided: BarChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartDemoComponent", function() { return BarChartDemoComponent; });
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
/**
 * Created by sagar on 11/1/18.
 */

var BarChartDemoComponent = /** @class */ (function () {
    function BarChartDemoComponent() {
        this.barStackChartData = [
            ['Year', 'Sales', 'Expenses', 'Profit'],
            ['2014', 1000, 400, 200],
            ['2015', 1170, 460, 250],
            ['2016', 660, 1120, 300],
            ['2017', 1030, 540, 350]
        ];
        this.barChartData = [
            ['City', '2010 Population',],
            ['New York City, NY', 8175000],
            ['Los Angeles, CA', 3792000],
            ['Chicago, IL', 2695000],
            ['Houston, TX', 2099000],
            ['Philadelphia, PA', 1526000]
        ];
    }
    BarChartDemoComponent.prototype.ngOnInit = function () {
    };
    BarChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bar-chart-demo',
            template: __webpack_require__(/*! ./barchart.demo.component.html */ "./src/app/charts/googlechart/barchart/barchart.demo.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], BarChartDemoComponent);
    return BarChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/googlechart/bubblechart/bubblechart.demo.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/charts/googlechart/bubblechart/bubblechart.demo.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/charts/google charts/bubblechart.json'\">\n    <amexio-api-demo>  \n      <amexio-row>\n          <amexio-column size=\"6\">\n            <amexio-chart-bubble [height]=\"'400px'\" [width]=\"'100%'\" [data]=\"bubbleChartData\">\n              <amexio-chart-title [title]=\"'Correlation between life expectancy, fertility rate'\"></amexio-chart-title>\n              <amexio-chart-horizontal-axis [title]=\"'Life Expectancy'\"></amexio-chart-horizontal-axis>\n              <amexio-chart-vertical-axis [title]=\"'Fertility Rate'\"></amexio-chart-vertical-axis>\n            </amexio-chart-bubble>\n          </amexio-column>\n          <amexio-column size=\"6\">\n            <amexio-chart-bubble [height]=\"'400px'\" [width]=\"'100%'\" [data]=\"bubbleChartColorAxis\" [axis-color]=\"['yellow', 'red']\">\n            </amexio-chart-bubble>\n          </amexio-column>\n     </amexio-row>\n   </amexio-api-demo>\n  </amexio-api-structure>"

/***/ }),

/***/ "./src/app/charts/googlechart/bubblechart/bubblechart.demo.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/charts/googlechart/bubblechart/bubblechart.demo.component.ts ***!
  \******************************************************************************/
/*! exports provided: BubbleChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubbleChartDemoComponent", function() { return BubbleChartDemoComponent; });
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
/**
 * Created by sagar on 11/1/18.
 */

var BubbleChartDemoComponent = /** @class */ (function () {
    function BubbleChartDemoComponent() {
        this.bubbleChartData = [
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
        this.bubbleChartColorAxis = [
            ['ID', 'X', 'Y', 'Temperature'],
            ['', 80, 167, 120],
            ['', 79, 136, 130],
            ['', 78, 184, 50],
            ['', 72, 278, 230],
            ['', 81, 200, 210],
            ['', 72, 170, 100],
            ['', 68, 477, 80]
        ];
    }
    BubbleChartDemoComponent.prototype.ngOnInit = function () {
    };
    BubbleChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bubble-chart-demo',
            template: __webpack_require__(/*! ./bubblechart.demo.component.html */ "./src/app/charts/googlechart/bubblechart/bubblechart.demo.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], BubbleChartDemoComponent);
    return BubbleChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/googlechart/candlestickchart/candlestickchart.demo.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/charts/googlechart/candlestickchart/candlestickchart.demo.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/charts/google charts/candlestickchart.json'\">\n  <amexio-api-demo>  \n      <amexio-row>\n          <amexio-column size=\"12\">\n            <amexio-chart-candlestick [width]=\"'100%'\" [height]=\"'400px'\" [data]=\"candlestickChartData\">\n              <amexio-chart-title [title]=\"'Stock Statistics'\"></amexio-chart-title>\n            </amexio-chart-candlestick>\n          </amexio-column>\n        </amexio-row>\n    </amexio-api-demo>\n    </amexio-api-structure>"

/***/ }),

/***/ "./src/app/charts/googlechart/candlestickchart/candlestickchart.demo.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/charts/googlechart/candlestickchart/candlestickchart.demo.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CandlestickChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandlestickChart", function() { return CandlestickChart; });
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
/**
 * Created by sagar on 11/1/18.
 */

var CandlestickChart = /** @class */ (function () {
    function CandlestickChart() {
        this.candlestickChartData = [
            ['Mon', 20, 28, 38, 45],
            ['Tue', 31, 38, 55, 66],
            ['Wed', 50, 55, 77, 80],
            ['Thu', 77, 77, 66, 50],
            ['Fri', 68, 66, 22, 15]
        ];
    }
    CandlestickChart.prototype.ngOnInit = function () {
    };
    CandlestickChart = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'candlestick-chart-demo',
            template: __webpack_require__(/*! ./candlestickchart.demo.component.html */ "./src/app/charts/googlechart/candlestickchart/candlestickchart.demo.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], CandlestickChart);
    return CandlestickChart;
}());



/***/ }),

/***/ "./src/app/charts/googlechart/candlestickwaterfallchart/candlestickchartwaterfall.demo.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/charts/googlechart/candlestickwaterfallchart/candlestickchartwaterfall.demo.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/charts/google charts/candlestick-waterfall.json'\">\n  <amexio-api-demo> \n      <amexio-row>\n          <amexio-column size=\"12\">\n            <amexio-chart-candlestick-waterfall [width]=\"'100%'\" [height]=\"'400px'\" [data]=\"candlestickWaterfallChart\" [bar-width]=\"'100%'\" [falling-color]=\"'#a52714'\" [rising-color]=\"'#0f9d58'\">\n              <amexio-chart-title [title]=\"'Stock Statistics'\"></amexio-chart-title>\n            </amexio-chart-candlestick-waterfall>\n          </amexio-column>\n      </amexio-row>\n    </amexio-api-demo>\n    </amexio-api-structure>"

/***/ }),

/***/ "./src/app/charts/googlechart/candlestickwaterfallchart/candlestickchartwaterfall.demo.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/charts/googlechart/candlestickwaterfallchart/candlestickchartwaterfall.demo.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CandlestickWaterfallChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandlestickWaterfallChartDemoComponent", function() { return CandlestickWaterfallChartDemoComponent; });
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
/**
 * Created by sagar on 11/1/18.
 */

var CandlestickWaterfallChartDemoComponent = /** @class */ (function () {
    function CandlestickWaterfallChartDemoComponent() {
        this.candlestickWaterfallChart = [
            ['Mon', 28, 28, 38, 38],
            ['Tue', 38, 38, 55, 55],
            ['Wed', 55, 55, 77, 77],
            ['Thu', 77, 77, 66, 66],
            ['Fri', 66, 66, 22, 22]
        ];
    }
    CandlestickWaterfallChartDemoComponent.prototype.ngOnInit = function () {
    };
    CandlestickWaterfallChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'candlestickwaterfall-chart-demo',
            template: __webpack_require__(/*! ./candlestickchartwaterfall.demo.component.html */ "./src/app/charts/googlechart/candlestickwaterfallchart/candlestickchartwaterfall.demo.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], CandlestickWaterfallChartDemoComponent);
    return CandlestickWaterfallChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/googlechart/columnchart/columnchart.demo.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/charts/googlechart/columnchart/columnchart.demo.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/charts/google charts/columnchart.json'\">\n  <amexio-api-demo> \n<amexio-row>\n    <amexio-column size=\"6\">\n      <amexio-chart-column [data]=\"columnChartData\" [height]=\"'400px'\" [width]=\"'100%'\" >\n        <amexio-chart-title [title]=\"'Motivation and Energy Level Throughout the Day'\"></amexio-chart-title>\n        <amexio-chart-legend [position]=\"'bottom'\"></amexio-chart-legend>\n      </amexio-chart-column>\n    </amexio-column>\n    <amexio-column size=\"6\">\n      <amexio-chart-column [data]=\"columnStackChartData\" [height]=\"'400px'\"[width]=\"'100%'\"  [stacked]=\"true\">\n        <amexio-chart-title [title]=\"'Motivation Level Throughout the Day'\"></amexio-chart-title>\n        <amexio-chart-legend [position]=\"'bottom'\"></amexio-chart-legend>\n      </amexio-chart-column>\n    </amexio-column>\n  </amexio-row>\n  </amexio-api-demo>\n  </amexio-api-structure>"

/***/ }),

/***/ "./src/app/charts/googlechart/columnchart/columnchart.demo.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/charts/googlechart/columnchart/columnchart.demo.component.ts ***!
  \******************************************************************************/
/*! exports provided: ColumnChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnChartDemoComponent", function() { return ColumnChartDemoComponent; });
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
/**
 * Created by sagar on 11/1/18.
 */

var ColumnChartDemoComponent = /** @class */ (function () {
    function ColumnChartDemoComponent() {
        this.columnStackChartData = [
            [{ "datatype": 'timeofday', "label": 'Time of Day' },
                { "datatype": "number", "label": 'Motivation Level' },
                { "datatype": "number", "label": "Energy Level" }
            ],
            [{ v: [8, 0, 0], f: '8 am' }, 1, .25],
            [{ v: [9, 0, 0], f: '9 am' }, 2, .5],
            [{ v: [10, 0, 0], f: '10 am' }, 3, 1],
            [{ v: [11, 0, 0], f: '11 am' }, 4, 2.25],
            [{ v: [12, 0, 0], f: '12 pm' }, 5, 2.25],
            [{ v: [13, 0, 0], f: '1 pm' }, 6, 3],
            [{ v: [14, 0, 0], f: '2 pm' }, 7, 4],
            [{ v: [15, 0, 0], f: '3 pm' }, 8, 5.25],
            [{ v: [16, 0, 0], f: '4 pm' }, 9, 7.5],
            [{ v: [17, 0, 0], f: '5 pm' }, 10, 10],
        ];
        this.columnChartData = [
            [{ "datatype": 'timeofday', "label": 'Time of Day' },
                { "datatype": "number", "label": 'Motivation Level' }
            ],
            [{ v: [8, 0, 0], f: '8 am' }, 1],
            [{ v: [9, 0, 0], f: '9 am' }, 2],
            [{ v: [10, 0, 0], f: '10 am' }, 3],
            [{ v: [11, 0, 0], f: '11 am' }, 4],
            [{ v: [12, 0, 0], f: '12 pm' }, 5],
            [{ v: [13, 0, 0], f: '1 pm' }, 6],
            [{ v: [14, 0, 0], f: '2 pm' }, 7],
            [{ v: [15, 0, 0], f: '3 pm' }, 8],
            [{ v: [16, 0, 0], f: '4 pm' }, 9],
            [{ v: [17, 0, 0], f: '5 pm' }, 10],
        ];
    }
    ColumnChartDemoComponent.prototype.ngOnInit = function () {
    };
    ColumnChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'column-chart-demo',
            template: __webpack_require__(/*! ./columnchart.demo.component.html */ "./src/app/charts/googlechart/columnchart/columnchart.demo.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ColumnChartDemoComponent);
    return ColumnChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/googlechart/combochart/combochart.demo.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/charts/googlechart/combochart/combochart.demo.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/charts/google charts/combochart.json'\">\n  <amexio-api-demo> \n      <amexio-row>\n          <amexio-column size=\"12\">\n            <amexio-chart-combo [height]=\"'400px'\" [width]=\"'100%'\" [data]=\"comboChartData\">\n              <amexio-chart-title [title]=\"'Monthly Coffee Production by Country'\"></amexio-chart-title>\n              <amexio-chart-legend [position]=\"'bottom'\"></amexio-chart-legend>\n              <amexio-chart-horizontal-axis [title]=\"'Month'\"></amexio-chart-horizontal-axis>\n              <amexio-chart-vertical-axis [title]=\"'Cups'\"></amexio-chart-vertical-axis>\n            </amexio-chart-combo>\n          </amexio-column>\n        </amexio-row>\n   </amexio-api-demo>\n  </amexio-api-structure>"

/***/ }),

/***/ "./src/app/charts/googlechart/combochart/combochart.demo.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/charts/googlechart/combochart/combochart.demo.component.ts ***!
  \****************************************************************************/
/*! exports provided: ComboChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboChartDemoComponent", function() { return ComboChartDemoComponent; });
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
/**
 * Created by sagar on 11/1/18.
 */

var ComboChartDemoComponent = /** @class */ (function () {
    function ComboChartDemoComponent() {
        this.comboChartData = [
            ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
            ['2004/05', 165, 938, 522, 998, 450, 614.6],
            ['2005/06', 135, 1120, 599, 1268, 288, 682],
            ['2006/07', 157, 1167, 587, 807, 397, 623],
            ['2007/08', 139, 1110, 615, 968, 215, 609.4],
            ['2008/09', 136, 691, 629, 1026, 366, 569.6]
        ];
    }
    ComboChartDemoComponent.prototype.ngOnInit = function () {
    };
    ComboChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'combo-chart-demo',
            template: __webpack_require__(/*! ./combochart.demo.component.html */ "./src/app/charts/googlechart/combochart/combochart.demo.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ComboChartDemoComponent);
    return ComboChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/googlechart/donutchart/donutchart.demo.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/charts/googlechart/donutchart/donutchart.demo.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/charts/google charts/donutchart.json'\">\n  <amexio-api-demo>\n      <amexio-row>\n          <amexio-column size=\"12\">\n            <amexio-chart-donut [height]=\"'400px'\" [width]=\"'100%'\"  [data]=\"donutChartData\">\n              <amexio-chart-title [title]=\"'My Daily Activities'\"></amexio-chart-title>\n              <amexio-chart-legend [position]=\"'right'\"></amexio-chart-legend>\n            </amexio-chart-donut>\n          </amexio-column>\n        </amexio-row>\n    </amexio-api-demo>\n </amexio-api-structure>"

/***/ }),

/***/ "./src/app/charts/googlechart/donutchart/donutchart.demo.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/charts/googlechart/donutchart/donutchart.demo.component.ts ***!
  \****************************************************************************/
/*! exports provided: DonutChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonutChartDemoComponent", function() { return DonutChartDemoComponent; });
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
/**
 * Created by sagar on 11/1/18.
 */

var DonutChartDemoComponent = /** @class */ (function () {
    function DonutChartDemoComponent() {
        this.donutChartData = [
            ['Task', 'Hours per Day'],
            ['Work', 11],
            ['Eat', 2],
            ['Commute', 2],
            ['Watch TV', 2],
            ['Sleep', 7]
        ];
    }
    DonutChartDemoComponent.prototype.ngOnInit = function () {
    };
    DonutChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'donut-chart-demo',
            template: __webpack_require__(/*! ./donutchart.demo.component.html */ "./src/app/charts/googlechart/donutchart/donutchart.demo.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], DonutChartDemoComponent);
    return DonutChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/googlechart/ganttchart/ganttchart.demo.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/charts/googlechart/ganttchart/ganttchart.demo.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/charts/google charts/ganttchart.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n      <amexio-column size=\"12\">\n      <amexio-label>A simple example</amexio-label><br>\n        <amexio-chart-gantt  [data]=\"ganttChartData\" [width]=\"'100%'\"  >\n        </amexio-chart-gantt>\n      </amexio-column>\n    </amexio-row>\n    <br>\n    <amexio-row>\n    <amexio-column size=\"12\">\n    <amexio-label>A Gantt Chart with no dependencies</amexio-label><br>\n      <amexio-chart-gantt [data]=\"ganttChartWithNoDepData\" [width]=\"'100%'\"  >\n      </amexio-chart-gantt>\n\n    </amexio-column>\n  </amexio-row>\n  <br>\n  <amexio-row>\n  <amexio-column size=\"12\">\n  <amexio-label>A Gantt Chart with grouping resources</amexio-label><br>\n    <amexio-chart-gantt [data]=\"ganttChartWithGropResources\" [width]=\"'100%'\"  >\n    </amexio-chart-gantt>\n\n  </amexio-column>\n</amexio-row>\n    </amexio-api-demo>\n    </amexio-api-structure>"

/***/ }),

/***/ "./src/app/charts/googlechart/ganttchart/ganttchart.demo.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/charts/googlechart/ganttchart/ganttchart.demo.component.ts ***!
  \****************************************************************************/
/*! exports provided: GanttChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GanttChartDemoComponent", function() { return GanttChartDemoComponent; });
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
/**
 * Created by sagar on 11/1/18.
 */

var GanttChartDemoComponent = /** @class */ (function () {
    function GanttChartDemoComponent() {
        this.ganttChartData = [
            [{ "datatype": 'string', "label": 'Task ID' }, { "datatype": 'string', "label": 'Task Name' }, { "datatype": 'string', "label": 'Resource' }, { "datatype": 'date', "label": 'Start' }, { "datatype": 'date', "label": 'End' }, { "datatype": 'number', "label": 'Duration' }, { "datatype": 'number', "label": 'Percent Complete' }, { "datatype": 'string', "label": 'Dependencies' }],
            ['toTrain', 'Walk to train stop', 'walk', null, null, this.toMilliseconds(5), 100, null],
            ['music', 'Listen to music', 'music', null, null, this.toMilliseconds(70), 100, null],
            ['wait', 'Wait for train', 'wait', null, null, this.toMilliseconds(10), 100, 'toTrain'],
            ['train', 'Train ride', 'train', null, null, this.toMilliseconds(45), 75, 'wait'],
            ['toWork', 'Walk to work', 'walk', null, null, this.toMilliseconds(10), 0, 'train'],
            ['work', 'Sit down at desk', null, null, null, this.toMilliseconds(2), 0, 'toWork']
        ];
        this.ganttChartWithNoDepData = [
            [{ "datatype": 'string', "label": 'Task ID' }, { "datatype": 'string', "label": 'Task Name' },
                { "datatype": 'string', "label": 'Resource' }, { "datatype": 'date', "label": 'Start' },
                { "datatype": 'date', "label": 'End' }, { "datatype": 'number', "label": 'Duration' },
                { "datatype": 'number', "label": 'Percent Complete' },
                { "datatype": 'string', "label": 'Dependencies' }],
            ['2014Spring', 'Spring 2014', 'spring',
                new Date(2014, 2, 22), new Date(2014, 5, 20), null, 100, null],
            ['2014Summer', 'Summer 2014', 'summer',
                new Date(2014, 5, 21), new Date(2014, 8, 20), null, 100, null],
            ['2014Autumn', 'Autumn 2014', 'autumn',
                new Date(2014, 8, 21), new Date(2014, 11, 20), null, 100, null],
            ['2014Winter', 'Winter 2014', 'winter',
                new Date(2014, 11, 21), new Date(2015, 2, 21), null, 100, null],
            ['2015Spring', 'Spring 2015', 'spring',
                new Date(2015, 2, 22), new Date(2015, 5, 20), null, 50, null],
            ['2015Summer', 'Summer 2015', 'summer',
                new Date(2015, 5, 21), new Date(2015, 8, 20), null, 0, null],
            ['2015Autumn', 'Autumn 2015', 'autumn',
                new Date(2015, 8, 21), new Date(2015, 11, 20), null, 0, null],
            ['2015Winter', 'Winter 2015', 'winter',
                new Date(2015, 11, 21), new Date(2016, 2, 21), null, 0, null],
            ['Football', 'Football Season', 'sports',
                new Date(2014, 8, 4), new Date(2015, 1, 1), null, 100, null],
            ['Baseball', 'Baseball Season', 'sports',
                new Date(2015, 2, 31), new Date(2015, 9, 20), null, 14, null],
            ['Basketball', 'Basketball Season', 'sports',
                new Date(2014, 9, 28), new Date(2015, 5, 20), null, 86, null],
            ['Hockey', 'Hockey Season', 'sports',
                new Date(2014, 9, 8), new Date(2015, 5, 21), null, 89, null]
        ];
        this.ganttChartWithGropResources = [
            [{ "datatype": 'string', "label": 'Task ID' },
                { "datatype": 'string', "label": 'Task Name' },
                { "datatype": 'string', "label": 'Resource' },
                { "datatype": 'date', "label": 'Start' },
                { "datatype": 'date', "label": 'End' },
                { "datatype": 'number', "label": 'Duration' },
                { "datatype": 'number', "label": 'Percent Complete' },
                { "datatype": 'string', "label": 'Dependencies' }],
            ['Research', 'Find sources', null,
                new Date(2015, 0, 1), new Date(2015, 0, 5), null, 100, null],
            ['Write', 'Write paper', 'write',
                null, new Date(2015, 0, 9), this.toMilliseconds(3), 25, 'Research,Outline'],
            ['Cite', 'Create bibliography', 'write',
                null, new Date(2015, 0, 7), this.toMilliseconds(1), 20, 'Research'],
            ['Complete', 'Hand in paper', 'complete',
                null, new Date(2015, 0, 10), this.toMilliseconds(1), 0, 'Cite,Write'],
            ['Outline', 'Outline paper', 'write',
                null, new Date(2015, 0, 6), this.toMilliseconds(1), 100, 'Research']
        ];
    }
    GanttChartDemoComponent.prototype.toMilliseconds = function (days) {
        return days * 24 * 60 * 60 * 1000;
    };
    GanttChartDemoComponent.prototype.ngOnInit = function () {
    };
    GanttChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gantt-chart-demo',
            template: __webpack_require__(/*! ./ganttchart.demo.component.html */ "./src/app/charts/googlechart/ganttchart/ganttchart.demo.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], GanttChartDemoComponent);
    return GanttChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/googlechart/googlechart.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/charts/googlechart/googlechart.module.ts ***!
  \**********************************************************/
/*! exports provided: GoogleChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartModule", function() { return GoogleChartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _googlechart_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./googlechart.routes */ "./src/app/charts/googlechart/googlechart.routes.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _areachart_areachart_demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./areachart/areachart.demo.component */ "./src/app/charts/googlechart/areachart/areachart.demo.component.ts");
/* harmony import */ var _barchart_barchart_demo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./barchart/barchart.demo.component */ "./src/app/charts/googlechart/barchart/barchart.demo.component.ts");
/* harmony import */ var _bubblechart_bubblechart_demo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bubblechart/bubblechart.demo.component */ "./src/app/charts/googlechart/bubblechart/bubblechart.demo.component.ts");
/* harmony import */ var _candlestickchart_candlestickchart_demo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./candlestickchart/candlestickchart.demo.component */ "./src/app/charts/googlechart/candlestickchart/candlestickchart.demo.component.ts");
/* harmony import */ var _candlestickwaterfallchart_candlestickchartwaterfall_demo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./candlestickwaterfallchart/candlestickchartwaterfall.demo.component */ "./src/app/charts/googlechart/candlestickwaterfallchart/candlestickchartwaterfall.demo.component.ts");
/* harmony import */ var _columnchart_columnchart_demo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./columnchart/columnchart.demo.component */ "./src/app/charts/googlechart/columnchart/columnchart.demo.component.ts");
/* harmony import */ var _combochart_combochart_demo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./combochart/combochart.demo.component */ "./src/app/charts/googlechart/combochart/combochart.demo.component.ts");
/* harmony import */ var _donutchart_donutchart_demo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./donutchart/donutchart.demo.component */ "./src/app/charts/googlechart/donutchart/donutchart.demo.component.ts");
/* harmony import */ var _ganttchart_ganttchart_demo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ganttchart/ganttchart.demo.component */ "./src/app/charts/googlechart/ganttchart/ganttchart.demo.component.ts");
/* harmony import */ var _histogramchart_histogramchart_demo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./histogramchart/histogramchart.demo.component */ "./src/app/charts/googlechart/histogramchart/histogramchart.demo.component.ts");
/* harmony import */ var _linechart_linechart_demo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./linechart/linechart.demo.component */ "./src/app/charts/googlechart/linechart/linechart.demo.component.ts");
/* harmony import */ var _scatterchart_scatterchart_demo_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./scatterchart/scatterchart.demo.component */ "./src/app/charts/googlechart/scatterchart/scatterchart.demo.component.ts");
/* harmony import */ var _timelinechart_timelinechart_demo_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./timelinechart/timelinechart.demo.component */ "./src/app/charts/googlechart/timelinechart/timelinechart.demo.component.ts");
/* harmony import */ var _piechart_piechart_demo_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./piechart/piechart.demo.component */ "./src/app/charts/googlechart/piechart/piechart.demo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















/**
 * Created by kedar on 4/2/19.
 */
var GoogleChartModule = /** @class */ (function () {
    function GoogleChartModule() {
    }
    GoogleChartModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_areachart_areachart_demo_component__WEBPACK_IMPORTED_MODULE_8__["AreaChartDemoComponent"], _barchart_barchart_demo_component__WEBPACK_IMPORTED_MODULE_9__["BarChartDemoComponent"], _bubblechart_bubblechart_demo_component__WEBPACK_IMPORTED_MODULE_10__["BubbleChartDemoComponent"],
                _candlestickchart_candlestickchart_demo_component__WEBPACK_IMPORTED_MODULE_11__["CandlestickChart"], _candlestickwaterfallchart_candlestickchartwaterfall_demo_component__WEBPACK_IMPORTED_MODULE_12__["CandlestickWaterfallChartDemoComponent"], _columnchart_columnchart_demo_component__WEBPACK_IMPORTED_MODULE_13__["ColumnChartDemoComponent"], _combochart_combochart_demo_component__WEBPACK_IMPORTED_MODULE_14__["ComboChartDemoComponent"],
                _donutchart_donutchart_demo_component__WEBPACK_IMPORTED_MODULE_15__["DonutChartDemoComponent"], _ganttchart_ganttchart_demo_component__WEBPACK_IMPORTED_MODULE_16__["GanttChartDemoComponent"], _histogramchart_histogramchart_demo_component__WEBPACK_IMPORTED_MODULE_17__["HistogramChartDemoComponent"], _linechart_linechart_demo_component__WEBPACK_IMPORTED_MODULE_18__["LineChartDemoComponent"],
                _scatterchart_scatterchart_demo_component__WEBPACK_IMPORTED_MODULE_19__["ScatterChartDemoComponent"], _timelinechart_timelinechart_demo_component__WEBPACK_IMPORTED_MODULE_20__["TimelineChartDemoComponent"], _piechart_piechart_demo_component__WEBPACK_IMPORTED_MODULE_21__["PieChartDemoComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AmexioChartsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"].forRoot(),
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AmexioWidgetModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(_googlechart_routes__WEBPACK_IMPORTED_MODULE_6__["GOOGLECHART_ROUTE"]),
            ],
            providers: []
        })
    ], GoogleChartModule);
    return GoogleChartModule;
}());



/***/ }),

/***/ "./src/app/charts/googlechart/googlechart.routes.ts":
/*!**********************************************************!*\
  !*** ./src/app/charts/googlechart/googlechart.routes.ts ***!
  \**********************************************************/
/*! exports provided: GOOGLECHART_ROUTE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOOGLECHART_ROUTE", function() { return GOOGLECHART_ROUTE; });
/* harmony import */ var _areachart_areachart_demo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./areachart/areachart.demo.component */ "./src/app/charts/googlechart/areachart/areachart.demo.component.ts");
/* harmony import */ var _barchart_barchart_demo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./barchart/barchart.demo.component */ "./src/app/charts/googlechart/barchart/barchart.demo.component.ts");
/* harmony import */ var _bubblechart_bubblechart_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bubblechart/bubblechart.demo.component */ "./src/app/charts/googlechart/bubblechart/bubblechart.demo.component.ts");
/* harmony import */ var _candlestickchart_candlestickchart_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./candlestickchart/candlestickchart.demo.component */ "./src/app/charts/googlechart/candlestickchart/candlestickchart.demo.component.ts");
/* harmony import */ var _candlestickwaterfallchart_candlestickchartwaterfall_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./candlestickwaterfallchart/candlestickchartwaterfall.demo.component */ "./src/app/charts/googlechart/candlestickwaterfallchart/candlestickchartwaterfall.demo.component.ts");
/* harmony import */ var _columnchart_columnchart_demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./columnchart/columnchart.demo.component */ "./src/app/charts/googlechart/columnchart/columnchart.demo.component.ts");
/* harmony import */ var _combochart_combochart_demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./combochart/combochart.demo.component */ "./src/app/charts/googlechart/combochart/combochart.demo.component.ts");
/* harmony import */ var _donutchart_donutchart_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./donutchart/donutchart.demo.component */ "./src/app/charts/googlechart/donutchart/donutchart.demo.component.ts");
/* harmony import */ var _ganttchart_ganttchart_demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ganttchart/ganttchart.demo.component */ "./src/app/charts/googlechart/ganttchart/ganttchart.demo.component.ts");
/* harmony import */ var _histogramchart_histogramchart_demo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./histogramchart/histogramchart.demo.component */ "./src/app/charts/googlechart/histogramchart/histogramchart.demo.component.ts");
/* harmony import */ var _linechart_linechart_demo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./linechart/linechart.demo.component */ "./src/app/charts/googlechart/linechart/linechart.demo.component.ts");
/* harmony import */ var _scatterchart_scatterchart_demo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scatterchart/scatterchart.demo.component */ "./src/app/charts/googlechart/scatterchart/scatterchart.demo.component.ts");
/* harmony import */ var _timelinechart_timelinechart_demo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./timelinechart/timelinechart.demo.component */ "./src/app/charts/googlechart/timelinechart/timelinechart.demo.component.ts");
/* harmony import */ var _piechart_piechart_demo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./piechart/piechart.demo.component */ "./src/app/charts/googlechart/piechart/piechart.demo.component.ts");














var GOOGLECHART_ROUTE = [
    {
        path: 'area-chart-demo', component: _areachart_areachart_demo_component__WEBPACK_IMPORTED_MODULE_0__["AreaChartDemoComponent"],
    },
    {
        path: 'bar-chart-demo', component: _barchart_barchart_demo_component__WEBPACK_IMPORTED_MODULE_1__["BarChartDemoComponent"],
    },
    {
        path: 'bubble-chart-demo', component: _bubblechart_bubblechart_demo_component__WEBPACK_IMPORTED_MODULE_2__["BubbleChartDemoComponent"],
    },
    {
        path: 'candlestick-chart-demo', component: _candlestickchart_candlestickchart_demo_component__WEBPACK_IMPORTED_MODULE_3__["CandlestickChart"],
    },
    {
        path: 'candlestickwaterfall-chart-demo', component: _candlestickwaterfallchart_candlestickchartwaterfall_demo_component__WEBPACK_IMPORTED_MODULE_4__["CandlestickWaterfallChartDemoComponent"],
    },
    {
        path: 'column-chart-demo', component: _columnchart_columnchart_demo_component__WEBPACK_IMPORTED_MODULE_5__["ColumnChartDemoComponent"],
    },
    {
        path: 'combo-chart-demo', component: _combochart_combochart_demo_component__WEBPACK_IMPORTED_MODULE_6__["ComboChartDemoComponent"],
    },
    {
        path: 'donut-chart-demo', component: _donutchart_donutchart_demo_component__WEBPACK_IMPORTED_MODULE_7__["DonutChartDemoComponent"],
    },
    {
        path: 'gantt-chart-demo', component: _ganttchart_ganttchart_demo_component__WEBPACK_IMPORTED_MODULE_8__["GanttChartDemoComponent"],
    },
    {
        path: 'histogram-chart-demo', component: _histogramchart_histogramchart_demo_component__WEBPACK_IMPORTED_MODULE_9__["HistogramChartDemoComponent"],
    },
    {
        path: 'line-chart-demo', component: _linechart_linechart_demo_component__WEBPACK_IMPORTED_MODULE_10__["LineChartDemoComponent"],
    },
    {
        path: 'scatter-chart-demo', component: _scatterchart_scatterchart_demo_component__WEBPACK_IMPORTED_MODULE_11__["ScatterChartDemoComponent"],
    },
    {
        path: 'timeline-chart-demo', component: _timelinechart_timelinechart_demo_component__WEBPACK_IMPORTED_MODULE_12__["TimelineChartDemoComponent"],
    },
    {
        path: 'pie-chart-demo', component: _piechart_piechart_demo_component__WEBPACK_IMPORTED_MODULE_13__["PieChartDemoComponent"],
    },
];


/***/ }),

/***/ "./src/app/charts/googlechart/histogramchart/histogramchart.demo.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/charts/googlechart/histogramchart/histogramchart.demo.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/charts/google charts/histogramchart.json'\">\n  <amexio-api-demo>\n      <amexio-row>\n          <amexio-column size=\"12\">\n            <amexio-chart-histogram [height]=\"'400px'\" [width]=\"'100%'\" [data]=\"histogramChartData\">\n              <amexio-chart-title [title]=\"'Lengths of dinosaurs, in meters'\"></amexio-chart-title>\n            </amexio-chart-histogram>\n          </amexio-column>\n        </amexio-row>\n    </amexio-api-demo>\n    </amexio-api-structure>"

/***/ }),

/***/ "./src/app/charts/googlechart/histogramchart/histogramchart.demo.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/charts/googlechart/histogramchart/histogramchart.demo.component.ts ***!
  \************************************************************************************/
/*! exports provided: HistogramChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistogramChartDemoComponent", function() { return HistogramChartDemoComponent; });
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
/**
 * Created by sagar on 11/1/18.
 */

var HistogramChartDemoComponent = /** @class */ (function () {
    function HistogramChartDemoComponent() {
        this.histogramChartData = [['Dinosaur', 'Length'], ['Acrocanthosaurus (top-spined lizard)', 12.2], ['Albertosaurus (Alberta lizard)', 9.1], ['Allosaurus (other lizard)', 12.2], ['Apatosaurus (deceptive lizard)', 22.9], ['Archaeopteryx (ancient wing)', 0.9], ['Argentinosaurus (Argentina lizard)', 36.6], ['Baryonyx (heavy claws)', 9.1], ['Brachiosaurus (arm lizard)', 30.5], ['Ceratosaurus (horned lizard)', 6.1], ['Coelophysis (hollow form)', 2.7], ['Compsognathus (elegant jaw)', 0.9], ['Deinonychus (terrible claw)', 2.7], ['Diplodocus (double beam)', 27.1], ['Dromicelomimus (emu mimic)', 3.4], ['Gallimimus (fowl mimic)', 5.5], ['Mamenchisaurus (Mamenchi lizard)', 21.0], ['Megalosaurus (big lizard)', 7.9], ['Microvenator (small hunter)', 1.2], ['Ornithomimus (bird mimic)', 4.6], ['Oviraptor (egg robber)', 1.5], ['Plateosaurus (flat lizard)', 7.9], ['Sauronithoides (narrow-clawed lizard)', 2.0], ['Seismosaurus (tremor lizard)', 45.7], ['Spinosaurus (spiny lizard)', 12.2], ['Supersaurus (super lizard)', 30.5], ['Tyrannosaurus (tyrant lizard)', 15.2], ['Ultrasaurus (ultra lizard)', 30.5], ['Velociraptor (swift robber)', 1.8]];
    }
    HistogramChartDemoComponent.prototype.ngOnInit = function () {
    };
    HistogramChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'histogram-chart-demo',
            template: __webpack_require__(/*! ./histogramchart.demo.component.html */ "./src/app/charts/googlechart/histogramchart/histogramchart.demo.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], HistogramChartDemoComponent);
    return HistogramChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/googlechart/linechart/linechart.demo.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/charts/googlechart/linechart/linechart.demo.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/charts/google charts/linechart.json'\">\n  <amexio-api-demo>\n      <amexio-row>\n          <amexio-column size=\"12\">\n            <amexio-chart-line [data]=\"lineChartData\" [height]=\"'400px'\" [width]=\"'100%'\" >\n              <amexio-chart-legend [position]=\"'top'\"></amexio-chart-legend>\n            </amexio-chart-line>\n          </amexio-column>\n        </amexio-row>\n    </amexio-api-demo>\n    </amexio-api-structure>"

/***/ }),

/***/ "./src/app/charts/googlechart/linechart/linechart.demo.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/charts/googlechart/linechart/linechart.demo.component.ts ***!
  \**************************************************************************/
/*! exports provided: LineChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartDemoComponent", function() { return LineChartDemoComponent; });
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
/**
 * Created by sagar on 11/1/18.
 */

var LineChartDemoComponent = /** @class */ (function () {
    function LineChartDemoComponent() {
        this.lineChartData = [
            [{ "datatype": "number", "label": 'Day' }, { "datatype": "number", "label": 'Guardians of the Galaxy' },
                { "datatype": "number", "label": 'The Avengers' }, { "datatype": "number", "label": 'Transformers: Age of Extinction' }
            ],
            [1, 37.8, 80.8, 41.8],
            [2, 30.9, 69.5, 32.4],
            [3, 25.4, 57, 25.7],
            [4, 11.7, 18.8, 10.5],
            [5, 11.9, 17.6, 10.4],
            [6, 8.8, 13.6, 7.7],
            [7, 7.6, 12.3, 9.6],
            [8, 12.3, 29.2, 10.6],
            [9, 16.9, 42.9, 14.8],
            [10, 12.8, 30.9, 11.6],
            [11, 5.3, 7.9, 4.7],
            [12, 6.6, 8.4, 5.2],
            [13, 4.8, 6.3, 3.6],
            [14, 4.2, 6.2, 3.4]
        ];
    }
    LineChartDemoComponent.prototype.ngOnInit = function () {
    };
    LineChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'line-chart-demo',
            template: __webpack_require__(/*! ./linechart.demo.component.html */ "./src/app/charts/googlechart/linechart/linechart.demo.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], LineChartDemoComponent);
    return LineChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/googlechart/piechart/piechart.demo.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/charts/googlechart/piechart/piechart.demo.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/charts/google charts/piechart.json'\">\n  <amexio-api-demo>\n      <amexio-row>\n          <amexio-column size=\"6\">\n            <amexio-chart-pie [height]=\"'400px'\" [width]=\"'100%'\"  [data]=\"pieChartData\">\n              <amexio-chart-title [title]=\"'My Daily Activities'\"></amexio-chart-title>\n              <amexio-chart-legend [position]=\"'right'\"></amexio-chart-legend>\n            </amexio-chart-pie>\n          </amexio-column>\n          <amexio-column size=\"6\">\n            <amexio-chart-pie [height]=\"'400px'\" [width]=\"'100%'\" [is3d]=\"true\" [data]=\"pieChartData\">\n              <amexio-chart-title [title]=\"'My Daily Activities'\"></amexio-chart-title>\n              <amexio-chart-legend [position]=\"'right'\"></amexio-chart-legend>\n            </amexio-chart-pie>\n          </amexio-column>\n        </amexio-row>\n    </amexio-api-demo>\n    </amexio-api-structure>"

/***/ }),

/***/ "./src/app/charts/googlechart/piechart/piechart.demo.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/charts/googlechart/piechart/piechart.demo.component.ts ***!
  \************************************************************************/
/*! exports provided: PieChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartDemoComponent", function() { return PieChartDemoComponent; });
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
/**
 * Created by sagar on 11/1/18.
 */

var PieChartDemoComponent = /** @class */ (function () {
    function PieChartDemoComponent() {
        this.pieChartData = [
            ['Task', 'Hours per Day'],
            ['Work', 11],
            ['Eat', 2],
            ['Commute', 2],
            ['Watch TV', 2],
            ['Sleep', 7]
        ];
    }
    PieChartDemoComponent.prototype.ngOnInit = function () {
    };
    PieChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pie-chart-demo',
            template: __webpack_require__(/*! ./piechart.demo.component.html */ "./src/app/charts/googlechart/piechart/piechart.demo.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], PieChartDemoComponent);
    return PieChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/googlechart/scatterchart/scatterchart.demo.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/charts/googlechart/scatterchart/scatterchart.demo.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/charts/google charts/scatterchart.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n      <amexio-column size=\"12\">\n        <amexio-chart-scatter [height]=\"'400px'\" [data]=\"scatterChartData\">\n          <amexio-chart-title [title]=\"'Age vs. Weight comparison'\"></amexio-chart-title>\n          <amexio-chart-horizontal-axis [title]=\"'Age'\"></amexio-chart-horizontal-axis>\n          <amexio-chart-vertical-axis [title]=\"'Weight'\"></amexio-chart-vertical-axis>\n        </amexio-chart-scatter>\n      </amexio-column>\n    </amexio-row>\n  </amexio-api-demo>\n</amexio-api-structure>"

/***/ }),

/***/ "./src/app/charts/googlechart/scatterchart/scatterchart.demo.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/charts/googlechart/scatterchart/scatterchart.demo.component.ts ***!
  \********************************************************************************/
/*! exports provided: ScatterChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScatterChartDemoComponent", function() { return ScatterChartDemoComponent; });
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
/**
 * Created by sagar on 11/1/18.
 */

var ScatterChartDemoComponent = /** @class */ (function () {
    function ScatterChartDemoComponent() {
        this.scatterChartData = [
            ['Age', 'Weight'],
            [8, 12],
            [4, 5.5],
            [11, 14],
            [4, 5],
            [3, 3.5],
            [6.5, 7]
        ];
    }
    ScatterChartDemoComponent.prototype.ngOnInit = function () {
    };
    ScatterChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'scatter-chart-demo',
            template: __webpack_require__(/*! ./scatterchart.demo.component.html */ "./src/app/charts/googlechart/scatterchart/scatterchart.demo.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ScatterChartDemoComponent);
    return ScatterChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/googlechart/timelinechart/timelinechart.demo.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/charts/googlechart/timelinechart/timelinechart.demo.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/charts/google charts/timelinechart.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n      <amexio-column size=\"12\">\n        <amexio-chart-timeline [data]=\"timelineChartData\" [width]=\"'100%'\"></amexio-chart-timeline>\n      </amexio-column>\n    </amexio-row>\n  </amexio-api-demo>\n</amexio-api-structure>"

/***/ }),

/***/ "./src/app/charts/googlechart/timelinechart/timelinechart.demo.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/charts/googlechart/timelinechart/timelinechart.demo.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TimelineChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineChartDemoComponent", function() { return TimelineChartDemoComponent; });
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
/**
 * Created by sagar on 11/1/18.
 */

var TimelineChartDemoComponent = /** @class */ (function () {
    function TimelineChartDemoComponent() {
        this.timelineChartData = [
            [{ "datatype": 'string', "label": 'Prime Minister' },
                { "datatype": "date", "label": 'Start' },
                { "datatype": "date", "label": "End" }
            ],
            ['Washington', new Date(1789, 3, 30), new Date(1797, 2, 4)],
            ['Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],
            ['Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4)]
        ];
    }
    TimelineChartDemoComponent.prototype.ngOnInit = function () {
    };
    TimelineChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'scatter-chart-demo',
            template: __webpack_require__(/*! ./timelinechart.demo.component.html */ "./src/app/charts/googlechart/timelinechart/timelinechart.demo.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], TimelineChartDemoComponent);
    return TimelineChartDemoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=charts-googlechart-googlechart-module.js.map