(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["enterprise-appointment-appointment-demo-module"],{

/***/ "./src/app/enterprise/appointment/appointment.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/enterprise/appointment/appointment.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card header=\"true\">\n    <amexio-header>\n        Appointment\n    </amexio-header>\n    <amexio-body>\n        <p>An appointment component used to schedule appointment with available dates and time.</p>\n        <amexio-tab-view>\n            <amexio-tab title=\"Demo\" active=\"true\">\n                <amexio-card header=\"true\">\n                    <amexio-header> Appointment Demo: Single Select Date </amexio-header>\n                    <amexio-body>\n                        <amexio-ee-appointment [height]=\"'200px'\" [date]=\"date\" (onSingleSelect)=\"onSingleSelect($event)\" [start-time]=\"10\" [end-time]=\"15\"\n                            [available-slots]=\"availableslots\">\n                        </amexio-ee-appointment>\n                    </amexio-body>\n                </amexio-card>\n                <amexio-card header=\"true\">\n                    <amexio-header> Selected Date-Time </amexio-header>\n                    <amexio-body>\n                        <pre><code>{{singleSelectedData | json}}</code></pre>\n                    </amexio-body>\n                </amexio-card>\n                <br>\n                <amexio-card header=\"true\">\n                    <amexio-header> Appointment Demo: Multi Select Date </amexio-header>\n                    <amexio-body>\n                        <amexio-ee-appointment [height]=\"'200px'\" [date]=\"date\" [multi-select]=\"true\" (onMultiSelect)=\"onMultiSelect($event)\" [start-time]=\"12\"\n                            [end-time]=\"17\" [available-slots]=\"multipleAvailableslots\">\n                        </amexio-ee-appointment>\n                    </amexio-body>\n                </amexio-card>\n                <amexio-card header=\"true\">\n                    <amexio-header> Selected Date-Time </amexio-header>\n                    <amexio-body>\n                        <pre><code>{{multiSelectedData | json}}</code></pre>\n                    </amexio-body>\n                </amexio-card>\n            </amexio-tab>\n            <amexio-tab title=\"API Reference\">\n                <amexio-datagrid title=\"Properties<amexio-ee-appointment>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/enterprise/appointment.json'\"\n                    [data-reader]=\"'properties'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'version'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"40\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <amexio-datagrid title=\"Events\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/enterprise/appointment.json'\"\n                    [data-reader]=\"'events'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'version'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n\n            </amexio-tab>\n            <amexio-tab title=\"Source\">\n                <div style=\"overflow-y: scroll\">\n                    <amexio-vertical-tab-view>\n                        <amexio-tab title=\"HTML\" [active]=\"true\">\n                            <ng-container *ngIf=\"htmlCode\">\n                                <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                                <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"Type Script\">\n                            <ng-container *ngIf=\"typeScriptCode\">\n                                <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                    </amexio-vertical-tab-view>\n                </div>\n            </amexio-tab>\n            <amexio-tab title=\"Live\">\n                <p align=\"center\">Amexio Sandbox</p>\n                <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-appointment1?embed=1&file=app/enterprise/appointment/appointment.demo.html&view=editor\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n             </amexio-tab>\n        </amexio-tab-view>\n    </amexio-body>\n</amexio-card>"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
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
    function EEAppointmentDemoComponent(http) {
        this.http = http;
        this.date = new Date();
        this.getHtmlAndTypeScriptCode();
        var atr = [10, 12];
        var atr_1 = [13, 15];
        this.availableslots = [];
        this.availableslots.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AvailableSlotsModel"](new Date(), atr));
        this.availableslots.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AvailableSlotsModel"](new Date(this.date.getTime() + (24 * 60 * 60 * 1000)), atr_1));
        var atr1 = [12, 14, 15];
        var atr2 = [13, 14, 17];
        this.multipleAvailableslots = [];
        this.multipleAvailableslots.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AvailableSlotsModel"](new Date(), atr1));
        this.multipleAvailableslots.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AvailableSlotsModel"](new Date(this.date.getTime() + (24 * 60 * 60 * 1000)), atr2));
    }
    //TO LOAD HTML AND TYPESCRIPT CODE
    EEAppointmentDemoComponent.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/enterprise/appointment/ee.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/enterprise/appointment/ee.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    EEAppointmentDemoComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
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
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EEAppointmentDemoComponent);
    return EEAppointmentDemoComponent;
}());



/***/ }),

/***/ "./src/app/enterprise/appointment/appointment.demo.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/enterprise/appointment/appointment.demo.module.ts ***!
  \*******************************************************************/
/*! exports provided: EEAppointmentRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EEAppointmentRoutingModule", function() { return EEAppointmentRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _appointment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appointment.component */ "./src/app/enterprise/appointment/appointment.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by rashmi on 16/1/19.
 */







var routes = [
    { path: '', component: _appointment_component__WEBPACK_IMPORTED_MODULE_2__["EEAppointmentDemoComponent"] },
];
var EEAppointmentRoutingModule = /** @class */ (function () {
    function EEAppointmentRoutingModule() {
    }
    EEAppointmentRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioEnterpriseModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [_appointment_component__WEBPACK_IMPORTED_MODULE_2__["EEAppointmentDemoComponent"]]
        })
    ], EEAppointmentRoutingModule);
    return EEAppointmentRoutingModule;
}());

var routedComponents = [_appointment_component__WEBPACK_IMPORTED_MODULE_2__["EEAppointmentDemoComponent"]];


/***/ })

}]);
//# sourceMappingURL=enterprise-appointment-appointment-demo-module.js.map