(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-D3charts-d3histogramchart-d3histogramchart-demo-module"],{

/***/ "./src/app/charts/D3charts/d3histogramchart/d3histogramchart.demo.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3histogramchart/d3histogramchart.demo.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card header=\"true\">\n    <amexio-header>\n        D3 Histogram Chart\n    </amexio-header>\n    <amexio-body>\n        <p>An D3 Histogram chart that is rendered within the browser using SVG .Displays tips when hovering over points.</p>\n        <amexio-tab-view>\n            <amexio-tab title=\"Demo\" active=\"true\">\n                <amexio-row>\n                    <amexio-column [size]=\"12\">\n                            <amexio-row>\n                                    <amexio-column [size]=\"12\" [fit]=\"true\">\n                                        <amexio-card [header]=\"true\" [show]=\"'true'\">\n                                            <amexio-header>\n                                                D3-histogram chart with UserDefined Color\n                                            </amexio-header>\n                                            <amexio-body>\n                                                <amexio-d3-chart-histogram\n                                                       [label]=\"true\"\n                                                       [title]=\"'Histogram Chart '\" \n                                                       [data]=\"histogramdata\"\n                                                       [color]=\"'blue'\"\n                                                       (onChartClick)=\"onDefaultChartClick($event)\" \n                                                 ></amexio-d3-chart-histogram> \n                                            </amexio-body>\n                                        </amexio-card>\n                                    </amexio-column>\n                                </amexio-row>   \n                                <amexio-row>\n                                    <amexio-column [size]=\"12\" [fit]=\"true\">\n                                        <amexio-card header=\"true\" >\n                                            <amexio-header>\n                                                Click on Chart\n                                            </amexio-header>\n                                            <amexio-body>\n                                                <pre><code>{{userDataSource |json }}</code></pre>\n                                             </amexio-body>\n                                        </amexio-card>\n\n                                    </amexio-column>\n                                </amexio-row>\n                    </amexio-column>\n                </amexio-row>\n\n\n            </amexio-tab>\n            <amexio-tab title=\"API Reference\">\n                <amexio-datagrid title=\"D3-Histogram-Chart Properties </amexio-d3-chart-histogram>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\"\n                    [http-url]=\"'assets/apireference/charts/d3charts/d3histogramchart.json'\" [data-reader]=\"'properties'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"[text]=\"'version'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"40\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <amexio-datagrid title=\"Chart Event </amexio-d3-chart-histogram>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/charts/d3charts/d3histogramchart.json'\"\n                    [data-reader]=\"'chartevent'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"[text]=\"'version'\"></amexio-data-table-column>                   \n                    <amexio-data-table-column [width]=\"55\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n            </amexio-tab>\n            <amexio-tab title=\"Source\">\n                <div style=\"overflow-y: scroll\">\n                    <amexio-vertical-tab-view>\n                        <amexio-tab title=\"HTML\" [active]=\"true\">\n                            <ng-container *ngIf=\"htmlCode\">\n                                <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                                <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"Type Script\">\n                            <ng-container *ngIf=\"typeScriptCode\">\n                                <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"Data Source\">\n                            <ng-container *ngIf=\"dataSourceCode\">\n                              <prism-block [code]=\"dataSourceCode\" [language]=\"'json'\"></prism-block>\n                            </ng-container>\n                          </amexio-tab>\n                    </amexio-vertical-tab-view>\n                </div>\n            </amexio-tab>\n            <amexio-tab title=\"Live\">\n                <p align=\"center\">Amexio Sandbox</p>\n                <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-d3-chart-histogram?embed=1&file=src/app/d3chart/d3linechart/d3linechart.demo.component.html&view=editor\"\n                    frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n            </amexio-tab>\n        </amexio-tab-view>\n    </amexio-body>\n</amexio-card>\n"

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


var AmexioD3HistogramChartDemoComponent = /** @class */ (function () {
    function AmexioD3HistogramChartDemoComponent(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
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
    //TO LOAD HTML AND TYPESCRIPT CODE
    AmexioD3HistogramChartDemoComponent.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        var dataSource;
        //HTML FILE
        this.http.get('assets/data/code/charts/D3Charts/d3histogramchart/d3chart.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        // TS FILE
        this.http.get('assets/data/code/charts/D3Charts/d3histogramchart/d3chart.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
        // DataSource FILE
        this.http.get('assets/data/code/charts/D3Charts/d3histogramchart/datasource.json', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.dataSourceCode = responseTs;
        });
        // User DataSource FILE
        this.http.get('assets/data/code/charts/D3Charts/d3histogramchart/usersource.json', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.userDataSourceCode = responseTs;
        });
    };
    //this code use copy to html code from tabpanel
    AmexioD3HistogramChartDemoComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    AmexioD3HistogramChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'amexio-d3-chart-histogram-demo',
            template: __webpack_require__(/*! ./d3histogramchart.demo.component.html */ "./src/app/charts/D3charts/d3histogramchart/d3histogramchart.demo.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AmexioD3HistogramChartDemoComponent);
    return AmexioD3HistogramChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/D3charts/d3histogramchart/d3histogramchart.demo.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/charts/D3charts/d3histogramchart/d3histogramchart.demo.module.ts ***!
  \**********************************************************************************/
/*! exports provided: D3HistogramChartDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3HistogramChartDemoModule", function() { return D3HistogramChartDemoModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _d3histogramchart_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./d3histogramchart.demo.component */ "./src/app/charts/D3charts/d3histogramchart/d3histogramchart.demo.component.ts");
/* harmony import */ var amexio_chart_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! amexio-chart-d3 */ "./node_modules/amexio-chart-d3/fesm5/amexio-chart-d3.js");
/**
 * Created by kedar on 28/8/18.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var D3HistogramChartDemoModule = /** @class */ (function () {
    function D3HistogramChartDemoModule() {
    }
    D3HistogramChartDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [_d3histogramchart_demo_component__WEBPACK_IMPORTED_MODULE_7__["AmexioD3HistogramChartDemoComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([{
                        path: '', component: _d3histogramchart_demo_component__WEBPACK_IMPORTED_MODULE_7__["AmexioD3HistogramChartDemoComponent"], pathMatch: 'full'
                    }]), amexio_chart_d3__WEBPACK_IMPORTED_MODULE_8__["AmexioChartD3Module"]],
            providers: []
        })
    ], D3HistogramChartDemoModule);
    return D3HistogramChartDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=charts-D3charts-d3histogramchart-d3histogramchart-demo-module.js.map