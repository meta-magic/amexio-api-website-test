(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-googlechart-columnchart-columnchart-demo-module"],{

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


var ColumnChartDemoComponent = /** @class */ (function () {
    function ColumnChartDemoComponent(http) {
        this.http = http;
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
        this.getHtmlAndTypeScriptCode();
    }
    //TO LOAD HTML AND TYPESCRIPT CODE
    ColumnChartDemoComponent.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/charts/columnchart/chart.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/charts/columnchart/chart.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
        //DataSource FILE
        this.http.get('assets/data/code/charts/columnchart/datasource.json', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.dataSourceCode = responseTs;
        });
    };
    //this code use copy to html code from tabpanel
    ColumnChartDemoComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    ColumnChartDemoComponent.prototype.ngOnInit = function () {
    };
    ColumnChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'column-chart-demo',
            template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n         Column Chart \n      </amexio-header>\n      <amexio-body>\n        <p>A column chart is a vertical bar chart rendered in the browser using SVG.</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n           <amexio-row>\n             <amexio-column size=\"6\">\n               <amexio-chart-column [data]=\"columnChartData\" [height]=\"'400px'\" [width]=\"'100%'\" >\n                 <amexio-chart-title [title]=\"'Motivation and Energy Level Throughout the Day'\"></amexio-chart-title>\n                 <amexio-chart-legend [position]=\"'bottom'\"></amexio-chart-legend>\n               </amexio-chart-column>\n             </amexio-column>\n             <amexio-column size=\"6\">\n               <amexio-chart-column [data]=\"columnStackChartData\" [height]=\"'400px'\"[width]=\"'100%'\"  [stacked]=\"true\">\n                 <amexio-chart-title [title]=\"'Motivation Level Throughout the Day'\"></amexio-chart-title>\n                 <amexio-chart-legend [position]=\"'bottom'\"></amexio-chart-legend>\n               </amexio-chart-column>\n             </amexio-column>\n           </amexio-row>\n          </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Chart Properties<amexio-chart-column> \" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/charts/columnchart.json'\"\n                             [data-reader]=\"'chart'\"\n                             [enable-data-filter]=\"false\" >\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br>\n            <amexio-datagrid title=\"Chart Title Properties<amexio-chart-title>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/charts/columnchart.json'\"\n                             [data-reader]=\"'chartTitle'\"\n                             [enable-data-filter]=\"false\" >\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br>\n            <amexio-datagrid title=\"Chart Legend Properties<amexio-chart-legend>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/charts/columnchart.json'\"\n                             [data-reader]=\"'chartLegend'\"\n                             [enable-data-filter]=\"false\" >\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n           \n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n            <amexio-vertical-tab-view>\n              <amexio-tab title=\"HTML\" [active]=\"true\">\n                <ng-container *ngIf=\"htmlCode\">\n                  <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                  <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Type Script\">\n                <ng-container *ngIf=\"typeScriptCode\">\n                  <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Data Source\">\n                <ng-container *ngIf=\"dataSourceCode\">\n                  <prism-block [code]=\"dataSourceCode\" [language]=\"'json'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n            </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n                      <p align=\"center\">Amexio Sandbox</p>\n<iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-columnchart?embed=1&file=app/charts/columnchart/columnchart.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n  \n  "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ColumnChartDemoComponent);
    return ColumnChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/googlechart/columnchart/columnchart.demo.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/charts/googlechart/columnchart/columnchart.demo.module.ts ***!
  \***************************************************************************/
/*! exports provided: ColumnChartDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnChartDemoModule", function() { return ColumnChartDemoModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _columnchart_demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./columnchart.demo.component */ "./src/app/charts/googlechart/columnchart/columnchart.demo.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ColumnChartDemoModule = /** @class */ (function () {
    function ColumnChartDemoModule() {
    }
    ColumnChartDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [_columnchart_demo_component__WEBPACK_IMPORTED_MODULE_5__["ColumnChartDemoComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AmexioWidgetModule"], _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AmexioChartsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([{
                        path: '', component: _columnchart_demo_component__WEBPACK_IMPORTED_MODULE_5__["ColumnChartDemoComponent"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], ColumnChartDemoModule);
    return ColumnChartDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=charts-googlechart-columnchart-columnchart-demo-module.js.map