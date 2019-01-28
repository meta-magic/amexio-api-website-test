(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-datapoints-datapoint-demo-module"],{

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
 * Created by sagar on 11/1/18.
 */


var DataPointComponent = /** @class */ (function () {
    function DataPointComponent(http) {
        this.http = http;
        this.gaugeChartData = [['Label', 'Value'], ['Memory', 80], ['CPU', 55], ['Network', 68]];
        this.getHtmlAndTypeScriptCode();
    }
    //TO LOAD HTML AND TYPESCRIPT CODE
    DataPointComponent.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/dashboard/datapoint/datapoint.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/dashboard/datapoint/datapoint.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //this code use copy to html code from tabpanel
    DataPointComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    DataPointComponent.prototype.ngOnInit = function () {
    };
    DataPointComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'datapoint', template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n        Data Point\n      </amexio-header>\n      <amexio-body>\n        <p>Represent the summary of the data in bullet point format.</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n            <amexio-row>\n              <amexio-column [size]=\"6\">\n                <amexio-datapoints [amexio-color]=\"'amexio-yellow'\" [west]=\"true\" [center]=\"true\" [east]=\"true\" [south]=\"true\">\n                  <amexio-west  [content-align]=\"'center'\">\n                    <amexio-image [icon-class]=\"'fa fa-line-chart fa-3x'\">\n                    </amexio-image>\n                  </amexio-west>\n                  <amexio-center [content-align]=\"'center'\">\n                    <amexio-label size=\"large-bold\">$200 Million</amexio-label><br/>\n                    <amexio-label size=\"medium\">Sales Volume</amexio-label>\n                  </amexio-center>\n                  <amexio-south [c-class]= \"'amexio-yellow-light'\" [content-align]=\"'center'\">\n                    <amexio-label>10% More than last year</amexio-label>\n                  </amexio-south>\n                </amexio-datapoints>\n              </amexio-column>\n              <amexio-column [size]=\"6\">\n\n                <amexio-datapoints [west]=\"true\" [center]=\"true\" [east]=\"true\" [south]=\"true\">\n                  <amexio-west [content-align]=\"'center'\">\n                    <amexio-image [icon-class]=\"'fa fa-line-chart fa-3x'\">\n                    </amexio-image>\n                  </amexio-west>\n                  <amexio-center [content-align]=\"'center'\">\n                    <amexio-label size=\"large-bold\">$10 Million</amexio-label>\n                    <br/>\n                    <amexio-label size=\"medium\">Sales Revenue</amexio-label>\n                  </amexio-center>\n                  <amexio-south [content-align]=\"'center'\">\n                    <amexio-label>5% More than last year</amexio-label>\n                  </amexio-south>\n                </amexio-datapoints>\n              </amexio-column>\n               \n            </amexio-row>\n            \n           \n          </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Data Point Properties<amexio-datapoints>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/dashboard/datapoint.json'\"\n                             [data-reader]=\"'datapoint'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\"\n                                        [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br>\n            <amexio-datagrid title=\" Data Point Region Properties ( Center, East, South, North, West )\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/dashboard/datapoint.json'\"\n                             [data-reader]=\"'location'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\"\n                                        [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <amexio-vertical-tab-view>\n              <amexio-tab title=\"HTML\" [active]=\"true\">\n                <ng-container *ngIf=\"htmlCode\">\n                  <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                  <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Type Script\">\n                <ng-container *ngIf=\"typeScriptCode\">\n                  <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n            </amexio-vertical-tab-view>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n          <p align=\"center\">Amexio Sandbox</p>\n<iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-datapoint\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n\n  "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataPointComponent);
    return DataPointComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/datapoints/datapoint.demo.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/datapoints/datapoint.demo.module.ts ***!
  \***************************************************************/
/*! exports provided: DatapointsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatapointsModule", function() { return DatapointsModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datapoint_demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datapoint.demo.component */ "./src/app/dashboard/datapoints/datapoint.demo.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DatapointsModule = /** @class */ (function () {
    function DatapointsModule() {
    }
    DatapointsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [_datapoint_demo_component__WEBPACK_IMPORTED_MODULE_5__["DataPointComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AmexioWidgetModule"], _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AmexioDashBoardModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([{
                        path: '', component: _datapoint_demo_component__WEBPACK_IMPORTED_MODULE_5__["DataPointComponent"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], DatapointsModule);
    return DatapointsModule;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-datapoints-datapoint-demo-module.js.map