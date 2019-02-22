(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["map-map-module"],{

/***/ "./src/app/map/geochart/geochart.demo.component.html":
/*!***********************************************************!*\
  !*** ./src/app/map/geochart/geochart.demo.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-api-structure  [url]=\"'assets/componentjson/maps/geochart.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n      <amexio-column size=\"12\">\n        <amexio-map-geo-chart [height]=\"'500px'\" [width]=\"'100%'\" [data]=\"geoChartData\">\n        </amexio-map-geo-chart>\n      </amexio-column>\n    </amexio-row>\n  </amexio-api-demo>\n</amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/map/geochart/geochart.demo.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/map/geochart/geochart.demo.component.ts ***!
  \*********************************************************/
/*! exports provided: GeoChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoChartDemoComponent", function() { return GeoChartDemoComponent; });
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

var GeoChartDemoComponent = /** @class */ (function () {
    function GeoChartDemoComponent() {
        this.geoChartData = [
            ['Country', 'Popularity'],
            ['Germany', 200],
            ['United States', 300],
            ['Brazil', 400],
            ['Canada', 500],
            ['France', 550],
            ['RU', 350],
            ['India', 700]
        ];
    }
    GeoChartDemoComponent.prototype.ngOnInit = function () {
    };
    GeoChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'geo-chart-demo',
            template: __webpack_require__(/*! ./geochart.demo.component.html */ "./src/app/map/geochart/geochart.demo.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], GeoChartDemoComponent);
    return GeoChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/map/googlemap/googlemap.demo.html":
/*!***************************************************!*\
  !*** ./src/app/map/googlemap/googlemap.demo.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-api-structure  [url]=\"'assets/componentjson/maps/googlemap.json'\">\n  <amexio-api-reference>\n    <amexio-box border-color=\"brown\" border=\"left\" padding=\"true\" background-color=\"brown\">\n              <amexio-label>\n                Make sure you include google map script and key in your index.html <br/><br/>\n                {{script}}\n              </amexio-label>\n            </amexio-box>\n  </amexio-api-reference>\n  <amexio-api-demo>\n    <amexio-row>\n      <amexio-column [size]=12>\n        <amexio-button\n          [label]=\"'Remove Location'\"\n          [type]=\"'theme-color'\"\n          [size]=\"'small'\"\n          [loading]=\"false\"\n          [block]=\"false\"\n          (onClick)=\"removeLocation($event)\">\n        </amexio-button>\n        <amexio-button\n          [label]=\"'Add Location'\"\n          [type]=\"'theme-color'\"\n          [size]=\"'small'\"\n          [loading]=\"false\"\n          [block]=\"false\"\n          (onClick)=\"addLocation($event)\">\n        </amexio-button>\n        <amexio-google-map [initial-zoom-level]=\"2\" [height]=\"'500px'\" [data]=\"data\" [google-map-key]=\"'AIzaSyDKSPX97z-ndeh_Mgq3xkaML2Kp9AwHA9s'\"\n                           (onMarkerClick)=\"onMarkerClick($event)\">\n        </amexio-google-map>\n      </amexio-column>\n    </amexio-row>\n    <amexio-row>\n      <amexio-column [size]=12>\n        <amexio-card header=\"true\">\n          <amexio-header>\n            Data emitted on click\n          </amexio-header>\n          <amexio-body>\n            <pre>{{markerdata | json}}</pre>\n          </amexio-body>\n        </amexio-card>\n\n\n      </amexio-column>\n    </amexio-row>\n  </amexio-api-demo>\n</amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/map/googlemap/googlemap.demo.ts":
/*!*************************************************!*\
  !*** ./src/app/map/googlemap/googlemap.demo.ts ***!
  \*************************************************/
/*! exports provided: GoogleMapDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapDemo", function() { return GoogleMapDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
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


var GoogleMapDemo = /** @class */ (function () {
    function GoogleMapDemo() {
    }
    GoogleMapDemo.prototype.removeLocation = function (event) {
        this.data = [];
    };
    GoogleMapDemo.prototype.addLocation = function (event) {
        this.data = [];
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](43.653225, -79.383186, 'Toronto, Canada', true, 'assets/images/logos/amexio-logo.png', { country: 'Canada', capital: 'Toronto', population: '20, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](39.904202, 116.407394, 'Beijing, China', true, 'assets/images/logos/amexio-logo.png', { country: 'China', capital: 'Beijing', population: '21, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](-6.175110, 106.865036, 'Jakarta, Indonesia', true, 'assets/images/logos/amexio-logo.png', { country: 'Indonesia', capital: 'Jakarta', population: '9, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](-15.826691, -47.921822, 'Brasília, Brazil', true, 'assets/images/logos/amexio-logo.png', { country: 'Brazil', capital: 'Brasília', population: '2.41, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](9.0765, 7.3986, 'Abuja, Nigeria', true, 'assets/images/logos/amexio-logo.png', { country: 'Nigeria', capital: 'Abuja', population: '776,298' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](23.8103, 90.4125, 'Dhaka, Bangladesh', true, 'assets/images/logos/amexio-logo.png', { country: 'Bangladesh', capital: 'Dhaka', population: '8, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](55.7558, 37.6173, 'Moscow, Russia', true, 'assets/images/logos/amexio-logo.png', { country: 'Russia', capital: 'Moscow', population: '11, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](35.6895, 139.6917, 'Tokyo, Japan', true, 'assets/images/logos/amexio-logo.png', { country: 'Japan', capital: 'Tokyo', population: '9.73, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](19.4326, -99.1332, 'Mexico City, Mexico', true, 'assets/images/logos/amexio-logo.png', { country: 'Mexico', capital: 'Mexico City', population: '8.51, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](14.5995, 120.9842, 'Manila, Philippines', true, 'assets/images/logos/amexio-logo.png', { country: 'Philippines', capital: 'Manila', population: '1.73, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](8.9806, 38.7578, 'Addis Ababa, Ethiopia', true, 'assets/images/logos/amexio-logo.png', { country: 'Ethiopia', capital: 'Addis Ababa', population: '33, Lakh' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](30.0444, 31.2357, 'Cairo, Egypt', true, 'assets/images/logos/amexio-logo.png', { country: 'Egypt', capital: 'Cairo', population: '19, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](35.6892, 51.3890, 'Tehran, Iran', true, 'assets/images/logos/amexio-logo.png', { country: 'Iran', capital: 'Tehran', population: '8.96, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](52.5200, 13.4050, 'Berlin, Germany', true, 'assets/images/logos/amexio-logo.png', { country: 'Germany', capital: 'Berlin', population: '3.57, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](39.9334, 32.8597, 'Ankara, Turkey', true, 'assets/images/logos/amexio-logo.png', { country: 'Turkey', capital: 'Ankara', population: '5.44, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](13.7563, 100.5018, 'Bangkok, Thailand', true, 'assets/images/logos/amexio-logo.png', { country: 'Thailand', capital: 'Bangkok', population: '8, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](48.8566, 2.3522, 'Paris, France', true, 'assets/images/logos/amexio-logo.png', { country: 'France', capital: 'Paris', population: '2.2, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](51.5074, -0.1278, 'london, United Kingdom', true, 'assets/images/logos/amexio-logo.png', { country: 'United Kingdom', capital: 'london', population: '8.1, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](41.9028, 12.4964, 'Rome, Italy', true, 'assets/images/logos/amexio-logo.png', { country: 'Italy', capital: 'Rome', population: ',2.8 Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](-33.9249, 18.4241, 'Cape Town, South Africa', true, 'assets/images/logos/amexio-logo.png', { country: 'South Africa', capital: 'Cape Town', population: ',4 Lakh' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](40.4168, -3.7038, 'Madrid, Spain', true, 'assets/images/logos/amexio-logo.png', { country: 'Spain', capital: 'Madrid', population: ',3.16 Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](50.4501, 30.5234, 'Kiev, Ukraine', true, 'assets/images/logos/amexio-logo.png', { country: 'Ukraine', capital: 'Kiev', population: ',2.8 Million' }));
    };
    GoogleMapDemo.prototype.onMarkerClick = function (event) {
        this.markerdata = event;
    };
    GoogleMapDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'googlemap-demo',
            template: __webpack_require__(/*! ./googlemap.demo.html */ "./src/app/map/googlemap/googlemap.demo.html"),
        }),
        __metadata("design:paramtypes", [])
    ], GoogleMapDemo);
    return GoogleMapDemo;
}());



/***/ }),

/***/ "./src/app/map/map.module.ts":
/*!***********************************!*\
  !*** ./src/app/map/map.module.ts ***!
  \***********************************/
/*! exports provided: MapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModule", function() { return MapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _map_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map.routes */ "./src/app/map/map.routes.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _geochart_geochart_demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./geochart/geochart.demo.component */ "./src/app/map/geochart/geochart.demo.component.ts");
/* harmony import */ var _treemap_treemap_demo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./treemap/treemap.demo.component */ "./src/app/map/treemap/treemap.demo.component.ts");
/* harmony import */ var _googlemap_googlemap_demo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./googlemap/googlemap.demo */ "./src/app/map/googlemap/googlemap.demo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











/**
 * Created by kedar on 4/2/19.
 */
var MapModule = /** @class */ (function () {
    function MapModule() {
    }
    MapModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_geochart_geochart_demo_component__WEBPACK_IMPORTED_MODULE_8__["GeoChartDemoComponent"], _treemap_treemap_demo_component__WEBPACK_IMPORTED_MODULE_9__["TreeMapDemoComponent"], _googlemap_googlemap_demo__WEBPACK_IMPORTED_MODULE_10__["GoogleMapDemo"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AmexioMapModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"].forRoot(),
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AmexioWidgetModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(_map_routes__WEBPACK_IMPORTED_MODULE_6__["MAP_ROUTE"]),
            ],
            providers: []
        })
    ], MapModule);
    return MapModule;
}());



/***/ }),

/***/ "./src/app/map/map.routes.ts":
/*!***********************************!*\
  !*** ./src/app/map/map.routes.ts ***!
  \***********************************/
/*! exports provided: MAP_ROUTE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP_ROUTE", function() { return MAP_ROUTE; });
/* harmony import */ var _geochart_geochart_demo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geochart/geochart.demo.component */ "./src/app/map/geochart/geochart.demo.component.ts");
/* harmony import */ var _treemap_treemap_demo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./treemap/treemap.demo.component */ "./src/app/map/treemap/treemap.demo.component.ts");
/* harmony import */ var _googlemap_googlemap_demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./googlemap/googlemap.demo */ "./src/app/map/googlemap/googlemap.demo.ts");



var MAP_ROUTE = [
    {
        path: 'geo-chart-demo', component: _geochart_geochart_demo_component__WEBPACK_IMPORTED_MODULE_0__["GeoChartDemoComponent"],
    },
    {
        path: 'tree-map-demo', component: _treemap_treemap_demo_component__WEBPACK_IMPORTED_MODULE_1__["TreeMapDemoComponent"],
    },
    {
        path: 'googlemap-demo', component: _googlemap_googlemap_demo__WEBPACK_IMPORTED_MODULE_2__["GoogleMapDemo"],
    },
];


/***/ }),

/***/ "./src/app/map/treemap/treemap.demo.component.html":
/*!*********************************************************!*\
  !*** ./src/app/map/treemap/treemap.demo.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<amexio-api-structure  [url]=\"'assets/componentjson/maps/treemap.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n      <amexio-column size=\"12\">\n        <amexio-map-treemap [title]=\"'tree'\" [height]=\"'500px'\" [width]=\"'100%'\" [data]=\"treeMapData\"\n                            [max-color]=\"'#0d0'\" [mid-color]=\"'#ddd'\" [min-color]=\"'#f00'\" [max-post-depth]=\"2\" [show-scale]=\"true\">\n\n          <amexio-map-title\n            [title]=\"'TreeMapDemo'\">\n          </amexio-map-title>\n        </amexio-map-treemap>\n      </amexio-column>\n    </amexio-row>\n  </amexio-api-demo>\n</amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/map/treemap/treemap.demo.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/map/treemap/treemap.demo.component.ts ***!
  \*******************************************************/
/*! exports provided: TreeMapDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeMapDemoComponent", function() { return TreeMapDemoComponent; });
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

var TreeMapDemoComponent = /** @class */ (function () {
    function TreeMapDemoComponent() {
        this.treeMapData = [
            ['Location', 'Parent', 'Market trade volume (size)', 'Market increase/decrease (color)'],
            ['Global', null, 0, 0],
            ['America', 'Global', 0, 0],
            ['Europe', 'Global', 0, 0],
            ['Asia', 'Global', 0, 0],
            ['Australia', 'Global', 0, 0],
            ['Africa', 'Global', 0, 0],
            ['Brazil', 'America', 11, 10],
            ['USA', 'America', 52, 31],
            ['Mexico', 'America', 24, 12],
            ['Canada', 'America', 16, -23],
            ['France', 'Europe', 42, -11],
            ['Germany', 'Europe', 31, -2],
            ['Sweden', 'Europe', 22, -13],
            ['Italy', 'Europe', 17, 4],
            ['UK', 'Europe', 21, -5],
            ['China', 'Asia', 36, 4],
            ['Japan', 'Asia', 20, -12],
            ['India', 'Asia', 40, 63],
            ['Laos', 'Asia', 4, 34],
            ['Mongolia', 'Asia', 1, -5],
            ['Israel', 'Asia', 12, 24],
            ['Iran', 'Asia', 18, 13],
            ['Pakistan', 'Asia', 11, -52],
            ['Egypt', 'Africa', 21, 0],
            ['S. Africa', 'Africa', 30, 43],
            ['Sudan', 'Africa', 12, 2],
            ['Congo', 'Africa', 10, 12],
            ['Zaire', 'Africa', 8, 10]
        ];
    }
    TreeMapDemoComponent.prototype.ngOnInit = function () {
    };
    TreeMapDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tree-map-demo',
            template: __webpack_require__(/*! ./treemap.demo.component.html */ "./src/app/map/treemap/treemap.demo.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], TreeMapDemoComponent);
    return TreeMapDemoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=map-map-module.js.map