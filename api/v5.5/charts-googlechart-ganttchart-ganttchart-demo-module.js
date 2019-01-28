(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-googlechart-ganttchart-ganttchart-demo-module"],{

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


var GanttChartDemoComponent = /** @class */ (function () {
    function GanttChartDemoComponent(http) {
        this.http = http;
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
        this.getHtmlAndTypeScriptCode();
    }
    GanttChartDemoComponent.prototype.toMilliseconds = function (days) {
        return days * 24 * 60 * 60 * 1000;
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    GanttChartDemoComponent.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/charts/ganttchart/chart.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/charts/ganttchart/chart.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
        //DataSource FILE
        this.http.get('assets/data/code/charts/ganttchart/datasource.json', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.dataSourceCode = responseTs;
        });
    };
    //this code use copy to html code from tabpanel
    GanttChartDemoComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    GanttChartDemoComponent.prototype.ngOnInit = function () {
    };
    GanttChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gantt-chart-demo',
            template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n         Gantt Chart Component\n      </amexio-header>\n      <amexio-body>\n        <p>A Gantt chart is a type of chart that illustrates the breakdown of a project into its component tasks.</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n           <amexio-row>\n             <amexio-column size=\"12\">\n             <amexio-label>A simple example</amexio-label><br>\n               <amexio-chart-gantt  [data]=\"ganttChartData\" [width]=\"'100%'\"  >\n               </amexio-chart-gantt>\n             </amexio-column>\n           </amexio-row>\n           <br>\n           <amexio-row>\n           <amexio-column size=\"12\">\n           <amexio-label>A Gantt Chart with no dependencies</amexio-label><br>\n             <amexio-chart-gantt [data]=\"ganttChartWithNoDepData\" [width]=\"'100%'\"  >\n             </amexio-chart-gantt>\n\n           </amexio-column>\n         </amexio-row>\n         <br>\n         <amexio-row>\n         <amexio-column size=\"12\">\n         <amexio-label>A Gantt Chart with grouping resources</amexio-label><br>\n           <amexio-chart-gantt [data]=\"ganttChartWithGropResources\" [width]=\"'100%'\"  >\n           </amexio-chart-gantt>\n\n         </amexio-column>\n       </amexio-row>\n          </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Chart Properties <amexio-chart-gantt>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/charts/ganttchart.json'\"\n                             [data-reader]=\"'chart'\"\n                             [enable-data-filter]=\"false\" >\n              <amexio-data-table-column [width]=\"25\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"55\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n\n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n            <amexio-vertical-tab-view>\n              <amexio-tab title=\"HTML\" [active]=\"true\">\n                <ng-container *ngIf=\"htmlCode\">\n                  <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                  <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Type Script\">\n                <ng-container *ngIf=\"typeScriptCode\">\n                  <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Data Source\">\n                <ng-container *ngIf=\"dataSourceCode\">\n                  <prism-block [code]=\"dataSourceCode\" [language]=\"'json'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n            </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n           <p align=\"center\">Amexio Sandbox</p>\n           <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-gantt-chart?embed=1&file=app/charts/timelinechart/ganttchart.demo.html&view=editor\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n           </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n\n  "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GanttChartDemoComponent);
    return GanttChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/charts/googlechart/ganttchart/ganttchart.demo.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/charts/googlechart/ganttchart/ganttchart.demo.module.ts ***!
  \*************************************************************************/
/*! exports provided: GanttChartDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GanttChartDemoModule", function() { return GanttChartDemoModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ganttchart_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ganttchart.demo.component */ "./src/app/charts/googlechart/ganttchart/ganttchart.demo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var GanttChartDemoModule = /** @class */ (function () {
    function GanttChartDemoModule() {
    }
    GanttChartDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [_ganttchart_demo_component__WEBPACK_IMPORTED_MODULE_7__["GanttChartDemoComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AmexioWidgetModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AmexioChartsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([{
                        path: '', component: _ganttchart_demo_component__WEBPACK_IMPORTED_MODULE_7__["GanttChartDemoComponent"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], GanttChartDemoModule);
    return GanttChartDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=charts-googlechart-ganttchart-ganttchart-demo-module.js.map