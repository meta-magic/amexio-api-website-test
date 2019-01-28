(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["map-treemap-treemap-demo-module"],{

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


var TreeMapDemoComponent = /** @class */ (function () {
    function TreeMapDemoComponent(http) {
        this.http = http;
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
        this.getHtmlAndTypeScriptCode();
    }
    //TO LOAD HTML AND TYPESCRIPT CODE
    TreeMapDemoComponent.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/map/treemap/chart.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/map/treemap/chart.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
        //DataSource FILE
        this.http.get('assets/data/code/map/treemap/datasource.json', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.dataSourceCode = responseTs;
        });
    };
    //this code use copy to html code from tabpanel
    TreeMapDemoComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    TreeMapDemoComponent.prototype.ngOnInit = function () {
    };
    TreeMapDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tree-map-demo',
            template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n         TreeMap \n      </amexio-header>\n      <amexio-body>\n        <p>A visual representation of a data tree, where each node can have zero or more children, and one parent (except for the root, which has no parents). Each node is displayed as a rectangle, sized and colored according to values that you assign. </p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n           <amexio-row>\n             <amexio-column size=\"12\">\n               <amexio-map-treemap [title]=\"'tree'\" [height]=\"'500px'\" [width]=\"'100%'\" [data]=\"treeMapData\"\n                                   [max-color]=\"'#0d0'\" [mid-color]=\"'#ddd'\" [min-color]=\"'#f00'\" [max-post-depth]=\"2\" [show-scale]=\"true\">\n\n                                   <amexio-map-title \n                                   [title]=\"'TreeMapDemo'\">\n                                   </amexio-map-title>\n               </amexio-map-treemap>\n             </amexio-column>\n           </amexio-row>\n          </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Map Properties<amexio-map-treemap>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/map/treemap.json'\"\n                             [data-reader]=\"'chart'\"\n                             [enable-data-filter]=\"false\" >\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br>\n            <amexio-datagrid title=\"Map Title Properties<amexio-map-title\n            >\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/map/treemap.json'\"\n                             [data-reader]=\"'chartTitle'\"\n                             [enable-data-filter]=\"false\" >\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n            <amexio-vertical-tab-view>\n              <amexio-tab title=\"HTML\" [active]=\"true\">\n                <ng-container *ngIf=\"htmlCode\">\n                  <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                  <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Type Script\">\n                <ng-container *ngIf=\"typeScriptCode\">\n                  <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Data Source\">\n                <ng-container *ngIf=\"dataSourceCode\">\n                  <prism-block [code]=\"dataSourceCode\" [language]=\"'json'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n            </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n          <p align=\"center\">Amexio Sandbox</p>\n<iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexi-v4-treemap?embed=1&file=app/map/treemap/treemap.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n  \n  "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TreeMapDemoComponent);
    return TreeMapDemoComponent;
}());



/***/ }),

/***/ "./src/app/map/treemap/treemap.demo.module.ts":
/*!****************************************************!*\
  !*** ./src/app/map/treemap/treemap.demo.module.ts ***!
  \****************************************************/
/*! exports provided: TreeMapDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeMapDemoModule", function() { return TreeMapDemoModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _treemap_demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./treemap.demo.component */ "./src/app/map/treemap/treemap.demo.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TreeMapDemoModule = /** @class */ (function () {
    function TreeMapDemoModule() {
    }
    TreeMapDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [_treemap_demo_component__WEBPACK_IMPORTED_MODULE_5__["TreeMapDemoComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AmexioWidgetModule"], _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AmexioMapModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([{
                        path: '', component: _treemap_demo_component__WEBPACK_IMPORTED_MODULE_5__["TreeMapDemoComponent"], pathMatch: 'full'
                    }])]
        })
    ], TreeMapDemoModule);
    return TreeMapDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=map-treemap-treemap-demo-module.js.map