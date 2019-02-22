(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["enterprise-enterprise-module"],{

/***/ "./src/app/enterprise/appointment/appointment.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/enterprise/appointment/appointment.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-api-structure  [url]=\"'assets/componentjson/enterprise/appointment.json'\">\n    <amexio-api-demo>\n        <amexio-card header=\"true\">\n            <amexio-header> Appointment Demo: Single Select Date </amexio-header>\n            <amexio-body>\n                <amexio-ee-appointment [height]=\"'200px'\" [date]=\"date\" (onSingleSelect)=\"onSingleSelect($event)\" [start-time]=\"10\" [end-time]=\"15\"\n                    [available-slots]=\"availableslots\">\n                </amexio-ee-appointment>\n            </amexio-body>\n        </amexio-card>\n        <amexio-card header=\"true\">\n            <amexio-header> Selected Date-Time </amexio-header>\n            <amexio-body>\n                <pre><code>{{singleSelectedData | json}}</code></pre>\n            </amexio-body>\n        </amexio-card>\n        <br>\n        <amexio-card header=\"true\">\n            <amexio-header> Appointment Demo: Multi Select Date </amexio-header>\n            <amexio-body>\n                <amexio-ee-appointment [height]=\"'200px'\" [date]=\"date\" [multi-select]=\"true\" (onMultiSelect)=\"onMultiSelect($event)\" [start-time]=\"12\"\n                    [end-time]=\"17\" [available-slots]=\"multipleAvailableslots\">\n                </amexio-ee-appointment>\n            </amexio-body>\n        </amexio-card>\n        <amexio-card header=\"true\">\n            <amexio-header> Selected Date-Time </amexio-header>\n            <amexio-body>\n                <pre><code>{{multiSelectedData | json}}</code></pre>\n            </amexio-body>\n        </amexio-card>\n\n        </amexio-api-demo>\n        </amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/enterprise/appointment/appointment.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/enterprise/appointment/appointment.component.ts ***!
  \*****************************************************************/
/*! exports provided: EEAppointmentDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EEAppointmentDemoComponent", function() { return EEAppointmentDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
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
 * Created by pratik on 18/1/18.
 */


var EEAppointmentDemoComponent = /** @class */ (function () {
    function EEAppointmentDemoComponent() {
        this.date = new Date();
        var atr = [10, 12];
        var atr_1 = [13, 15];
        this.availableslots = [];
        this.availableslots.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AvailableSlotsModel"](new Date(), atr));
        this.availableslots.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AvailableSlotsModel"](new Date(this.date.getTime() + (24 * 60 * 60 * 1000)), atr_1));
        var atr1 = [12, 14, 15];
        var atr2 = [13, 14, 17];
        this.multipleAvailableslots = [];
        this.multipleAvailableslots.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AvailableSlotsModel"](new Date(), atr1));
        this.multipleAvailableslots.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AvailableSlotsModel"](new Date(this.date.getTime() + (24 * 60 * 60 * 1000)), atr2));
    }
    EEAppointmentDemoComponent.prototype.ngOnInit = function () {
    };
    EEAppointmentDemoComponent.prototype.onSingleSelect = function (event) {
        this.singleSelectedData = event;
    };
    EEAppointmentDemoComponent.prototype.onMultiSelect = function (event) {
        this.multiSelectedData = event;
    };
    EEAppointmentDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ee-appointment',
            template: __webpack_require__(/*! ./appointment.component.html */ "./src/app/enterprise/appointment/appointment.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], EEAppointmentDemoComponent);
    return EEAppointmentDemoComponent;
}());



/***/ }),

/***/ "./src/app/enterprise/content/content.compnent.html":
/*!**********************************************************!*\
  !*** ./src/app/enterprise/content/content.compnent.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure  [url]=\"'assets/componentjson/enterprise/content.json'\">\n  <amexio-api-demo>\n<amexio-card enableheader=\"true\">\n    <amexio-header> Media Content Demo </amexio-header>\n    <amexio-body>\n      <amexio-ee-content\n        [bg-image-url]=\"'assets/images/narcos_main_header_img.jpg'\"\n        [title]=\"'Narcos'\"\n        [description]=\"'The true story of Colombia infamously violent and powerful drug cartels fuels this gritty gangster drama series.'\"\n        [link]=\"'https://www.youtube.com/embed/U7elNhHwgBU'\" [match-percentage]=\"'90%'\"\n        [age-limit]=\"'16'\" [release-year]=\"'2016'\" [season-no]=\"1\"\n        [rate]=\"7\" [max]=\"10\" [watch]=\"true\" [my-list]=\"true\">\n      </amexio-ee-content>\n    </amexio-body>\n  </amexio-card>\n  </amexio-api-demo>\n  </amexio-api-structure>"

/***/ }),

/***/ "./src/app/enterprise/content/content.compnent.ts":
/*!********************************************************!*\
  !*** ./src/app/enterprise/content/content.compnent.ts ***!
  \********************************************************/
/*! exports provided: EEContentDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EEContentDemoComponent", function() { return EEContentDemoComponent; });
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
 * Created by pratik on 18/1/18.
 */

var EEContentDemoComponent = /** @class */ (function () {
    function EEContentDemoComponent() {
    }
    EEContentDemoComponent.prototype.ngOnInit = function () {
    };
    EEContentDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ee-content-demo',
            template: __webpack_require__(/*! ./content.compnent.html */ "./src/app/enterprise/content/content.compnent.html"),
        }),
        __metadata("design:paramtypes", [])
    ], EEContentDemoComponent);
    return EEContentDemoComponent;
}());



/***/ }),

/***/ "./src/app/enterprise/enterprise.module.ts":
/*!*************************************************!*\
  !*** ./src/app/enterprise/enterprise.module.ts ***!
  \*************************************************/
/*! exports provided: EnterpriseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterpriseModule", function() { return EnterpriseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _enterprise_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enterprise.routes */ "./src/app/enterprise/enterprise.routes.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _youtube_player_youtube_demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./youtube-player/youtube.demo.component */ "./src/app/enterprise/youtube-player/youtube.demo.component.ts");
/* harmony import */ var _multi_item_carousel_multi_item_carousel_demo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./multi-item-carousel/multi.item.carousel.demo */ "./src/app/enterprise/multi-item-carousel/multi.item.carousel.demo.ts");
/* harmony import */ var _content_content_compnent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./content/content.compnent */ "./src/app/enterprise/content/content.compnent.ts");
/* harmony import */ var _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./appointment/appointment.component */ "./src/app/enterprise/appointment/appointment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












/**
 * Created by kedar on 4/2/19.
 */
var EnterpriseModule = /** @class */ (function () {
    function EnterpriseModule() {
    }
    EnterpriseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_youtube_player_youtube_demo_component__WEBPACK_IMPORTED_MODULE_8__["YoutubePlayerDemoComponent"], _multi_item_carousel_multi_item_carousel_demo__WEBPACK_IMPORTED_MODULE_9__["EECarouselDemoComponent"], _content_content_compnent__WEBPACK_IMPORTED_MODULE_10__["EEContentDemoComponent"],
                _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_11__["EEAppointmentDemoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AmexioEnterpriseModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"].forRoot(),
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AmexioWidgetModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(_enterprise_routes__WEBPACK_IMPORTED_MODULE_6__["ENTERPRISE_ROUTE"]),
            ],
            providers: []
        })
    ], EnterpriseModule);
    return EnterpriseModule;
}());



/***/ }),

/***/ "./src/app/enterprise/enterprise.routes.ts":
/*!*************************************************!*\
  !*** ./src/app/enterprise/enterprise.routes.ts ***!
  \*************************************************/
/*! exports provided: ENTERPRISE_ROUTE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERPRISE_ROUTE", function() { return ENTERPRISE_ROUTE; });
/* harmony import */ var _youtube_player_youtube_demo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./youtube-player/youtube.demo.component */ "./src/app/enterprise/youtube-player/youtube.demo.component.ts");
/* harmony import */ var _multi_item_carousel_multi_item_carousel_demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multi-item-carousel/multi.item.carousel.demo */ "./src/app/enterprise/multi-item-carousel/multi.item.carousel.demo.ts");
/* harmony import */ var _content_content_compnent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/content.compnent */ "./src/app/enterprise/content/content.compnent.ts");
/* harmony import */ var _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appointment/appointment.component */ "./src/app/enterprise/appointment/appointment.component.ts");




var ENTERPRISE_ROUTE = [
    {
        path: 'ee-video-demo', component: _youtube_player_youtube_demo_component__WEBPACK_IMPORTED_MODULE_0__["YoutubePlayerDemoComponent"],
    },
    {
        path: 'multi-item-carousel-demo', component: _multi_item_carousel_multi_item_carousel_demo__WEBPACK_IMPORTED_MODULE_1__["EECarouselDemoComponent"],
    },
    {
        path: 'ee-content-demo', component: _content_content_compnent__WEBPACK_IMPORTED_MODULE_2__["EEContentDemoComponent"],
    },
    {
        path: 'ee-appointment-demo', component: _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_3__["EEAppointmentDemoComponent"],
    }
];


/***/ }),

/***/ "./src/app/enterprise/multi-item-carousel/multi.item.carousel.demo.html":
/*!******************************************************************************!*\
  !*** ./src/app/enterprise/multi-item-carousel/multi.item.carousel.demo.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-api-structure  [url]=\"'assets/componentjson/enterprise/carousel.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n      <amexio-column [size]=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n             Horizontal Carousel \n          </amexio-header>\n          <amexio-body>\n            <br><br>\n            <div style=\"background-color: black\">\n              <amexio-media-ee-carousel title=\"Top Movies\" [data]=\"newreleases\"></amexio-media-ee-carousel>\n            </div>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n\n    <amexio-row>\n      <amexio-column [size]=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n             Vertical Carousel \n          </amexio-header>\n          <amexio-body>\n            <br><br>\n            <div style=\"background-color: black\">\n              <amexio-media-ee-carousel title=\"Trending\" [data]=\"topRateContent\"\n                                        carousel-type=\"vertical\"\n              >\n              </amexio-media-ee-carousel>\n            </div>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n    </amexio-api-demo>\n  </amexio-api-structure>\n\n\n"

/***/ }),

/***/ "./src/app/enterprise/multi-item-carousel/multi.item.carousel.demo.ts":
/*!****************************************************************************!*\
  !*** ./src/app/enterprise/multi-item-carousel/multi.item.carousel.demo.ts ***!
  \****************************************************************************/
/*! exports provided: EECarouselDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EECarouselDemoComponent", function() { return EECarouselDemoComponent; });
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
/**
 * Created by pratik on 18/1/18.
 */


var EECarouselDemoComponent = /** @class */ (function () {
    function EECarouselDemoComponent(http) {
        var _this = this;
        this.http = http;
        http.get('assets/data/enterprise/eee.json')
            .subscribe(function (response) {
            _this.newreleases = response;
        });
        this.http.get('assets/data/enterprise/topratedcontent.json').subscribe(function (res) { return _this.topRateContent = res; });
    }
    EECarouselDemoComponent.prototype.ngOnInit = function () {
    };
    EECarouselDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ee-carousel-demo',
            template: __webpack_require__(/*! ./multi.item.carousel.demo.html */ "./src/app/enterprise/multi-item-carousel/multi.item.carousel.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EECarouselDemoComponent);
    return EECarouselDemoComponent;
}());



/***/ }),

/***/ "./src/app/enterprise/youtube-player/youtube.demo.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/enterprise/youtube-player/youtube.demo.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/enterprise/youtube.json'\">\n  <amexio-api-demo>\n    <amexio-card header=\"true\">\n      <amexio-header> Video player </amexio-header>\n      <amexio-body>\n        <amexio-row>\n          <amexio-column size=\"12\">\n            <amexio-card header=\"true\">\n              <amexio-header> Video player without Width </amexio-header>\n              <amexio-body>\n                <amexio-ee-youtube-player url=\"https://www.youtube.com/embed/Rciv-Vb299Y\" [height]=\"450\">\n\n                </amexio-ee-youtube-player>\n              </amexio-body>\n            </amexio-card>\n\n          </amexio-column>\n        </amexio-row>\n        <amexio-row>\n          <amexio-column size=\"12\">\n            <amexio-card header=\"true\">\n              <amexio-header> Video player with Width </amexio-header>\n              <amexio-body>\n                <amexio-ee-youtube-player url=\"https://www.youtube.com/embed/Rciv-Vb299Y\" [height]=\"450\" [width]=\"50\">\n\n                </amexio-ee-youtube-player>\n              </amexio-body>\n            </amexio-card>\n\n          </amexio-column>\n        </amexio-row>\n      </amexio-body>\n    </amexio-card>\n  </amexio-api-demo>\n</amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/enterprise/youtube-player/youtube.demo.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/enterprise/youtube-player/youtube.demo.component.ts ***!
  \*********************************************************************/
/*! exports provided: YoutubePlayerDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubePlayerDemoComponent", function() { return YoutubePlayerDemoComponent; });
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
 * Created by pratik on 18/1/18.
 */

var YoutubePlayerDemoComponent = /** @class */ (function () {
    function YoutubePlayerDemoComponent() {
    }
    YoutubePlayerDemoComponent.prototype.ngOnInit = function () { };
    YoutubePlayerDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'youtube-player',
            template: __webpack_require__(/*! ./youtube.demo.component.html */ "./src/app/enterprise/youtube-player/youtube.demo.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], YoutubePlayerDemoComponent);
    return YoutubePlayerDemoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=enterprise-enterprise-module.js.map