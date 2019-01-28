(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-googlemap-googlemap-demo-module"],{

/***/ "./src/app/data/googlemap/googlemap.demo.html":
/*!****************************************************!*\
  !*** ./src/app/data/googlemap/googlemap.demo.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card header=\"true\">\n  <amexio-header>\n    Google Map Demo\n  </amexio-header>\n  <amexio-body>\n    <p>A Google Map Demo, show overlays and emitt the data on-click on overlay.</p>\n    <amexio-tab-view>\n      <amexio-tab title=\"Demo\" active=true>\n        <amexio-row>\n          <amexio-column [size]=12>\n              <amexio-button\n              [label]=\"'Remove Location'\"\n              [type]=\"'theme-color'\"\n              [size]=\"'small'\"\n              [loading]=\"false\"\n              [block]=\"false\"\n              (onClick)=\"removeLocation($event)\">\n            </amexio-button>\n            <amexio-button\n              [label]=\"'Add Location'\"\n              [type]=\"'theme-color'\"\n              [size]=\"'small'\"\n              [loading]=\"false\"\n              [block]=\"false\"\n              (onClick)=\"addLocation($event)\">\n            </amexio-button>\n            <amexio-google-map [initial-zoom-level]=\"2\" [height]=\"'500px'\" [data]=\"data\" [google-map-key]=\"'AIzaSyDKSPX97z-ndeh_Mgq3xkaML2Kp9AwHA9s'\"\n            (onMarkerClick)=\"onMarkerClick($event)\">\n            </amexio-google-map>\n          </amexio-column>\n        </amexio-row>\n        <amexio-row>\n          <amexio-column [size]=12>\n            <amexio-card header=\"true\">\n              <amexio-header>\n                Data emitted on click\n              </amexio-header>\n              <amexio-body>\n                <pre>{{markerdata | json}}</pre>\n              </amexio-body>\n            </amexio-card>\n\n\n          </amexio-column>\n        </amexio-row>\n      </amexio-tab>\n\n      <amexio-tab title=\"API Reference\">\n          <amexio-box border-color=\"brown\" border=\"left\" padding=\"true\" background-color=\"brown\">\n              <amexio-label>\n                Make sure you include google map script and key in your index.html <br/><br/>\n                {{script}}\n              </amexio-label>\n            </amexio-box>\n        <amexio-datagrid title=\"Properties <amexio-google-map>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\"\n          [http-url]=\"'assets/apireference/data/googlemap.json'\" [data-reader]=\"'properties'\"\n          [enable-data-filter]=\"false\">\n          <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n          <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"[text]=\"'version'\"></amexio-data-table-column>\n          <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Type'\"></amexio-data-table-column>\n          <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n            [text]=\"'Default'\"></amexio-data-table-column>\n          <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n            [text]=\"'Description'\"></amexio-data-table-column>\n        </amexio-datagrid>\n        <br>\n        <amexio-datagrid title=\"Events\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/data/googlemap.json'\"\n          [data-reader]=\"'events'\" [enable-data-filter]=\"false\">\n          <amexio-data-table-column [width]=\"20\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n          <amexio-data-table-column [width]=\"80\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n            [text]=\"'Description'\"></amexio-data-table-column>\n        </amexio-datagrid>\n\n      </amexio-tab>\n      <amexio-tab title=\"Source\">\n        <div style=\"overflow-y: scroll\">\n          <amexio-vertical-tab-view>\n            <amexio-tab title=\"HTML\" [active]=\"true\">\n              <ng-container *ngIf=\"htmlCode\">\n                <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                <div>\n                  <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                </div>\n              </ng-container>\n            </amexio-tab>\n            <amexio-tab title=\"Type Script\">\n              <ng-container *ngIf=\"typeScriptCode\">\n                <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n              </ng-container>\n            </amexio-tab>\n          </amexio-vertical-tab-view>\n        </div>\n      </amexio-tab>\n      <amexio-tab title=\"Live\"  [disabled]=\"false\">\n        <p align=\"center\">Amexio Sandbox</p>\n        <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-googlemap?embed=1&file=app/map/googlemap/googlemap.demo.component.ts&view=editor\"\n        frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n      </amexio-tab>\n    </amexio-tab-view>\n  </amexio-body>\n</amexio-card>\n<!--<amexio-notification [data]=\"copyMsgArray\"></amexio-notification>-->"

/***/ }),

/***/ "./src/app/data/googlemap/googlemap.demo.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/data/googlemap/googlemap.demo.module.ts ***!
  \*********************************************************/
/*! exports provided: GoogleMapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapModule", function() { return GoogleMapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _googlemap_demo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./googlemap.demo */ "./src/app/data/googlemap/googlemap.demo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Created by ketan on 11/1/18.
 */
var GoogleMapModule = /** @class */ (function () {
    function GoogleMapModule() {
    }
    GoogleMapModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_googlemap_demo__WEBPACK_IMPORTED_MODULE_7__["GoogleMapDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _googlemap_demo__WEBPACK_IMPORTED_MODULE_7__["GoogleMapDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], GoogleMapModule);
    return GoogleMapModule;
}());



/***/ }),

/***/ "./src/app/data/googlemap/googlemap.demo.ts":
/*!**************************************************!*\
  !*** ./src/app/data/googlemap/googlemap.demo.ts ***!
  \**************************************************/
/*! exports provided: GoogleMapDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapDemo", function() { return GoogleMapDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
    function GoogleMapDemo(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
    }
    GoogleMapDemo.prototype.removeLocation = function (event) {
        this.data = [];
    };
    GoogleMapDemo.prototype.addLocation = function (event) {
        this.data = [];
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](43.653225, -79.383186, 'Toronto, Canada', true, 'assets/images/googlemap/mercgooglemarker.png', { country: 'Canada', capital: 'Toronto', population: '20, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](39.904202, 116.407394, 'Beijing, China', true, 'assets/images/googlemap/mercgooglemarker.png', { country: 'China', capital: 'Beijing', population: '21, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](-6.175110, 106.865036, 'Jakarta, Indonesia', true, 'assets/images/googlemap/mercgooglemarker.png', { country: 'Indonesia', capital: 'Jakarta', population: '9, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](-15.826691, -47.921822, 'Brasília, Brazil', true, 'assets/images/googlemap/mercgooglemarker.png', { country: 'Brazil', capital: 'Brasília', population: '2.41, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](9.0765, 7.3986, 'Abuja, Nigeria', true, 'assets/images/googlemap/mercgooglemarker.png', { country: 'Nigeria', capital: 'Abuja', population: '776,298' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](23.8103, 90.4125, 'Dhaka, Bangladesh', true, 'assets/images/googlemap/mercgooglemarker.png', { country: 'Bangladesh', capital: 'Dhaka', population: '8, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](55.7558, 37.6173, 'Moscow, Russia', true, 'assets/images/googlemap/mercgooglemarker.png', { country: 'Russia', capital: 'Moscow', population: '11, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](35.6895, 139.6917, 'Tokyo, Japan', true, 'assets/images/googlemap/mercgooglemarker.png', { country: 'Japan', capital: 'Tokyo', population: '9.73, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](19.4326, -99.1332, 'Mexico City, Mexico', true, 'assets/images/googlemap/mercgooglemarker.png', { country: 'Mexico', capital: 'Mexico City', population: '8.51, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](14.5995, 120.9842, 'Manila, Philippines', true, 'assets/images/googlemap/mercgooglemarker.png', { country: 'Philippines', capital: 'Manila', population: '1.73, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](8.9806, 38.7578, 'Addis Ababa, Ethiopia', true, 'assets/images/googlemap/mercgooglemarker.png', { country: 'Ethiopia', capital: 'Addis Ababa', population: '33, Lakh' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](30.0444, 31.2357, 'Cairo, Egypt', true, 'assets/images/googlemap/mercgooglemarker.png', { country: 'Egypt', capital: 'Cairo', population: '19, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](35.6892, 51.3890, 'Tehran, Iran', true, 'assets/images/googlemap/mercgooglemarker.png', { country: 'Iran', capital: 'Tehran', population: '8.96, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](52.5200, 13.4050, 'Berlin, Germany', true, 'assets/images/googlemap/mercgooglemarker.png', { country: 'Germany', capital: 'Berlin', population: '3.57, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](39.9334, 32.8597, 'Ankara, Turkey', true, 'assets/images/googlemap/mercgooglemarker.png', { country: 'Turkey', capital: 'Ankara', population: '5.44, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](13.7563, 100.5018, 'Bangkok, Thailand', true, 'assets/images/googlemap/mercgooglemarker.png', { country: 'Thailand', capital: 'Bangkok', population: '8, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](48.8566, 2.3522, 'Paris, France', true, 'assets/images/googlemap/mercgooglemarker.png', { country: 'France', capital: 'Paris', population: '2.2, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](51.5074, -0.1278, 'london, United Kingdom', true, 'assets/images/googlemap/mercgooglemarker.png', { country: 'United Kingdom', capital: 'london', population: '8.1, Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](41.9028, 12.4964, 'Rome, Italy', true, 'assets/images/googlemap/mercgooglemarker.png', { country: 'Italy', capital: 'Rome', population: ',2.8 Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](-33.9249, 18.4241, 'Cape Town, South Africa', true, 'assets/images/googlemap/mercgooglemarker.png', { country: 'South Africa', capital: 'Cape Town', population: ',4 Lakh' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](40.4168, -3.7038, 'Madrid, Spain', true, 'assets/images/googlemap/mercgooglemarker.png', { country: 'Spain', capital: 'Madrid', population: ',3.16 Million' }));
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](50.4501, 30.5234, 'Kiev, Ukraine', true, 'assets/images/googlemap/mercgooglemarker.png', { country: 'Ukraine', capital: 'Kiev', population: ',2.8 Million' }));
    };
    GoogleMapDemo.prototype.onMarkerClick = function (event) {
        this.markerdata = event;
    };
    GoogleMapDemo.prototype.getDta = function () {
        var _this = this;
        this.asyncFlag = true;
        setTimeout(function () {
            _this.asyncFlag = false;
        }, 3000);
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    GoogleMapDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/data/googlemap/googlemap.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/data/googlemap/googlemap.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    GoogleMapDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    GoogleMapDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'googlemap-demo',
            template: __webpack_require__(/*! ./googlemap.demo.html */ "./src/app/data/googlemap/googlemap.demo.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GoogleMapDemo);
    return GoogleMapDemo;
}());



/***/ })

}]);
//# sourceMappingURL=data-googlemap-googlemap-demo-module.js.map