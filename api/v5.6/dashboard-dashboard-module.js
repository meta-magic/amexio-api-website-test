(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _dashboard_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.routes */ "./src/app/dashboard/dashboard.routes.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gauge_gauge_demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gauge/gauge.demo.component */ "./src/app/dashboard/gauge/gauge.demo.component.ts");
/* harmony import */ var _datapoints_datapoint_demo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./datapoints/datapoint.demo.component */ "./src/app/dashboard/datapoints/datapoint.demo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










/**
 * Created by kedar on 4/2/19.
 */
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_datapoints_datapoint_demo_component__WEBPACK_IMPORTED_MODULE_9__["DataPointComponent"], _gauge_gauge_demo_component__WEBPACK_IMPORTED_MODULE_8__["GaugeDemoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AmexioDashBoardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"].forRoot(),
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AmexioWidgetModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(_dashboard_routes__WEBPACK_IMPORTED_MODULE_6__["DASHBOARD_ROUTE"]),
            ],
            providers: []
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.routes.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.routes.ts ***!
  \***********************************************/
/*! exports provided: DASHBOARD_ROUTE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DASHBOARD_ROUTE", function() { return DASHBOARD_ROUTE; });
/* harmony import */ var _gauge_gauge_demo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gauge/gauge.demo.component */ "./src/app/dashboard/gauge/gauge.demo.component.ts");
/* harmony import */ var _datapoints_datapoint_demo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datapoints/datapoint.demo.component */ "./src/app/dashboard/datapoints/datapoint.demo.component.ts");


var DASHBOARD_ROUTE = [
    {
        path: 'gauge-dashboard-demo', component: _gauge_gauge_demo_component__WEBPACK_IMPORTED_MODULE_0__["GaugeDemoComponent"],
    },
    {
        path: 'datapoint-demo', component: _datapoints_datapoint_demo_component__WEBPACK_IMPORTED_MODULE_1__["DataPointComponent"],
    }
];


/***/ }),

/***/ "./src/app/dashboard/datapoints/datapoint.demo.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/datapoints/datapoint.demo.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-api-structure  [url]=\"'assets/componentjson/dashboard/datapoint.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n      <amexio-column [size]=\"6\">\n        <amexio-datapoints [amexio-color]=\"'amexio-yellow'\" [west]=\"true\" [center]=\"true\" [east]=\"true\" [south]=\"true\">\n          <amexio-west  [content-align]=\"'center'\">\n            <amexio-image [icon-class]=\"'fa fa-line-chart fa-3x'\">\n            </amexio-image>\n          </amexio-west>\n          <amexio-center [content-align]=\"'center'\">\n            <amexio-label size=\"large-bold\">$200 Million</amexio-label><br/>\n            <amexio-label size=\"medium\">Sales Volume</amexio-label>\n          </amexio-center>\n          <amexio-south [c-class]= \"'amexio-yellow-light'\" [content-align]=\"'center'\">\n            <amexio-label>10% More than last year</amexio-label>\n          </amexio-south>\n        </amexio-datapoints>\n      </amexio-column>\n      <amexio-column [size]=\"6\">\n\n        <amexio-datapoints [west]=\"true\" [center]=\"true\" [east]=\"true\" [south]=\"true\">\n          <amexio-west [content-align]=\"'center'\">\n            <amexio-image [icon-class]=\"'fa fa-line-chart fa-3x'\">\n            </amexio-image>\n          </amexio-west>\n          <amexio-center [content-align]=\"'center'\">\n            <amexio-label size=\"large-bold\">$10 Million</amexio-label>\n            <br/>\n            <amexio-label size=\"medium\">Sales Revenue</amexio-label>\n          </amexio-center>\n          <amexio-south [content-align]=\"'center'\">\n            <amexio-label>5% More than last year</amexio-label>\n          </amexio-south>\n        </amexio-datapoints>\n      </amexio-column>\n\n    </amexio-row>\n  </amexio-api-demo>\n</amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/dashboard/datapoints/datapoint.demo.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/datapoints/datapoint.demo.component.ts ***!
  \******************************************************************/
/*! exports provided: DataPointComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataPointComponent", function() { return DataPointComponent; });
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

var DataPointComponent = /** @class */ (function () {
    function DataPointComponent() {
        this.gaugeChartData = [['Label', 'Value'], ['Memory', 80], ['CPU', 55], ['Network', 68]];
    }
    DataPointComponent.prototype.ngOnInit = function () {
    };
    DataPointComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'datapoint',
            template: __webpack_require__(/*! ./datapoint.demo.component.html */ "./src/app/dashboard/datapoints/datapoint.demo.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], DataPointComponent);
    return DataPointComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/gauge/gauge.demo.component.html":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/gauge/gauge.demo.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-api-structure  [url]=\"'assets/componentjson/dashboard/gaugechart.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n      <amexio-column size=\"12\">\n        <amexio-dashboard-gauge [height]=\"'400px'\" [data]=\"gaugeChartData\"\n                                [red-color-from]=\"90\" [red-color-to]=\"100\" [yellow-color-from]=\"75\"\n                                [yellow-color-to]=\"90\" [scale-value]=\"5\">\n        </amexio-dashboard-gauge>\n      </amexio-column>\n    </amexio-row>\n  </amexio-api-demo>\n</amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/dashboard/gauge/gauge.demo.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/gauge/gauge.demo.component.ts ***!
  \*********************************************************/
/*! exports provided: GaugeDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaugeDemoComponent", function() { return GaugeDemoComponent; });
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

var GaugeDemoComponent = /** @class */ (function () {
    function GaugeDemoComponent() {
        this.gaugeChartData = [
            ['Label', 'Value'],
            ['Memory', 80],
            ['CPU', 55],
            ['Network', 68]
        ];
    }
    GaugeDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gauge-dashboard-demo',
            template: __webpack_require__(/*! ./gauge.demo.component.html */ "./src/app/dashboard/gauge/gauge.demo.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], GaugeDemoComponent);
    return GaugeDemoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map