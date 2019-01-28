(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-D3charts-d3timelinechart-d3timelinechart-demo-module"],{

/***/ "./src/app/charts/D3charts/d3timelinechart/d3timelinechart.demo.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3timelinechart/d3timelinechart.demo.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card header=\"true\">\n    <amexio-header>\n        D3 Timeline Chart\n    </amexio-header>\n    <amexio-body>\n        <p>An D3 Timeline chart that is rendered within the browser using SVG .Displays tips when hovering over points.</p>\n        <amexio-tab-view>\n            <amexio-tab title=\"Demo\" active=\"true\">\n                <amexio-row>\n                    <amexio-column [size]=\"12\">\n                            <amexio-row>\n                                    <amexio-column [size]=\"12\" [fit]=\"true\">\n                                        <amexio-card [header]=\"true\" [show]=\"'true'\">\n                                            <amexio-header>\n                                                D3-timeline chart with UserDefined Color\n                                            </amexio-header>\n                                            <amexio-body>\n                                                <amexio-d3-chart-timeline\n                                                       [label]=\"true\"\n                                                       [title]=\"'Presidentship Duration'\" \n                                                       [data]=\"timelinedata\"\n                                                       (onChartClick)=\"onDefaultChartClick($event)\" \n                                                       (onLegendClick)=\"onUserDefineLegendClick($event)\"\n                                                 ></amexio-d3-chart-timeline> \n                                            </amexio-body>\n                                        </amexio-card>\n                                    </amexio-column>\n                                </amexio-row>   \n                                <amexio-row>\n                                    <amexio-column [size]=\"12\" [fit]=\"true\">\n                                        <amexio-card header=\"true\" >\n                                            <amexio-header>\n                                                Click On Legend/Click on Chart\n                                            </amexio-header>\n                                            <amexio-body>\n                                                <pre><code>{{userDataSource |json }}</code></pre>\n                                             </amexio-body>\n                                        </amexio-card>\n\n                                    </amexio-column>\n                                </amexio-row>\n                    </amexio-column>\n                </amexio-row>\n\n\n            </amexio-tab>\n            <amexio-tab title=\"API Reference\">\n                <amexio-datagrid title=\"D3-Timeline-Chart Properties </amexio-d3-chart-timeline>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\"\n                    [http-url]=\"'assets/apireference/charts/d3charts/d3timelinechart.json'\" [data-reader]=\"'properties'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"[text]=\"'version'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"40\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <amexio-datagrid title=\"Chart Event </amexio-d3-chart-timeline>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/charts/d3charts/d3timelinechart.json'\"\n                    [data-reader]=\"'chartevent'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"[text]=\"'version'\"></amexio-data-table-column>                   \n                    <amexio-data-table-column [width]=\"55\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                 <br>\n                <amexio-datagrid title=\"Legend Event <amexio-d3-chart-timeline>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/charts/d3charts/d3timelinechart.json'\"\n                    [data-reader]=\"'legend'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'version'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"55\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n            </amexio-tab>\n            <amexio-tab title=\"Source\">\n                <div style=\"overflow-y: scroll\">\n                    <amexio-vertical-tab-view>\n                        <amexio-tab title=\"HTML\" [active]=\"true\">\n                            <ng-container *ngIf=\"htmlCode\">\n                                <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                                <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"Type Script\">\n                            <ng-container *ngIf=\"typeScriptCode\">\n                                <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"Data Source\">\n                            <ng-container *ngIf=\"dataSourceCode\">\n                              <prism-block [code]=\"dataSourceCode\" [language]=\"'json'\"></prism-block>\n                            </ng-container>\n                          </amexio-tab>\n                    </amexio-vertical-tab-view>\n                </div>\n            </amexio-tab>\n            <amexio-tab title=\"Live\">\n                <p align=\"center\">Amexio Sandbox</p>\n                 <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-d3-chart-timeline?embed=1&file=src/app/d3chart/d3timelinechart/d3timelinechart.demo.module.ts&view=editor\"\n                    frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe> \n            </amexio-tab>\n        </amexio-tab-view>\n    </amexio-body>\n</amexio-card>\n"

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


var AmexioD3TimeLineChartDemoComponent = /** @class */ (function () {
    function AmexioD3TimeLineChartDemoComponent(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
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
    //TO LOAD HTML AND TYPESCRIPT CODE
    AmexioD3TimeLineChartDemoComponent.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        var dataSource;
        //HTML FILE
        this.http.get('assets/data/code/charts/D3Charts/d3timelinechart/d3chart.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        // TS FILE
        this.http.get('assets/data/code/charts/D3Charts/d3timelinechart/d3chart.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
        // DataSource FILE
        this.http.get('assets/data/code/charts/D3Charts/d3timelinechart/datasource.json', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.dataSourceCode = responseTs;
        });
        // User DataSource FILE
        this.http.get('assets/data/code/charts/D3Charts/d3timelinechart/usersource.json', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.userDataSourceCode = responseTs;
        });
    };
    //this code use copy to html code from tabpanel
    AmexioD3TimeLineChartDemoComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    AmexioD3TimeLineChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'amexio-d3-chart-timeline-demo',
            template: __webpack_require__(/*! ./d3timelinechart.demo.component.html */ "./src/app/charts/D3charts/d3timelinechart/d3timelinechart.demo.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AmexioD3TimeLineChartDemoComponent);
    return AmexioD3TimeLineChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/D3charts/d3timelinechart/d3timelinechart.demo.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3timelinechart/d3timelinechart.demo.module.ts ***!
  \********************************************************************************/
/*! exports provided: D3TimelineChartDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3TimelineChartDemoModule", function() { return D3TimelineChartDemoModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _d3timelinechart_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./d3timelinechart.demo.component */ "./src/app/charts/D3charts/d3timelinechart/d3timelinechart.demo.component.ts");
/* harmony import */ var amexio_chart_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! amexio-chart-d3 */ "./node_modules/amexio-chart-d3/fesm5/amexio-chart-d3.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var D3TimelineChartDemoModule = /** @class */ (function () {
    function D3TimelineChartDemoModule() {
    }
    D3TimelineChartDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [_d3timelinechart_demo_component__WEBPACK_IMPORTED_MODULE_7__["AmexioD3TimeLineChartDemoComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([{
                        path: '', component: _d3timelinechart_demo_component__WEBPACK_IMPORTED_MODULE_7__["AmexioD3TimeLineChartDemoComponent"], pathMatch: 'full'
                    }]), amexio_chart_d3__WEBPACK_IMPORTED_MODULE_8__["AmexioChartD3Module"]],
            providers: []
        })
    ], D3TimelineChartDemoModule);
    return D3TimelineChartDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=charts-D3charts-d3timelinechart-d3timelinechart-demo-module.js.map