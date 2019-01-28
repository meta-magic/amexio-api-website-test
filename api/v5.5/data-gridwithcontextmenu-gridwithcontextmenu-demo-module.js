(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-gridwithcontextmenu-gridwithcontextmenu-demo-module"],{

/***/ "./src/app/data/gridwithcontextmenu/gridwithcontextmenu.demo.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/data/gridwithcontextmenu/gridwithcontextmenu.demo.module.ts ***!
  \*****************************************************************************/
/*! exports provided: GridWithScrollDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridWithScrollDemoModule", function() { return GridWithScrollDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _gridwithcontextmenu_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gridwithcontextmenu.demo */ "./src/app/data/gridwithcontextmenu/gridwithcontextmenu.demo.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Created by rashmi on 29/6/18.
 */
var GridWithScrollDemoModule = /** @class */ (function () {
    function GridWithScrollDemoModule() {
    }
    GridWithScrollDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_gridwithcontextmenu_demo__WEBPACK_IMPORTED_MODULE_6__["GridWithContextMenuDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _gridwithcontextmenu_demo__WEBPACK_IMPORTED_MODULE_6__["GridWithContextMenuDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], GridWithScrollDemoModule);
    return GridWithScrollDemoModule;
}());



/***/ }),

/***/ "./src/app/data/gridwithcontextmenu/gridwithcontextmenu.demo.ts":
/*!**********************************************************************!*\
  !*** ./src/app/data/gridwithcontextmenu/gridwithcontextmenu.demo.ts ***!
  \**********************************************************************/
/*! exports provided: GridWithContextMenuDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridWithContextMenuDemo", function() { return GridWithContextMenuDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/**
 * Created by rashmi on 29/6/18.
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


var GridWithContextMenuDemo = /** @class */ (function () {
    function GridWithContextMenuDemo(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
        this.contextMenuColData =
            [{ "text": "Add State", "icon": "fa fa-plus", "disabled": true }, { "text": "Edit", "icon": "", "seperator": true },
                { "text": "Delete", "icon": "" }];
        this.contextMenuRowData = [{ "text": "Reload", "icon": "fa fa-refresh", "disabled": false, "seperator": false }, { "text": "Save", "icon": "fa fa-save", "seperator": false },
            { "text": "Delete", "icon": "fa fa-close" }];
    }
    //TO LOAD HTML AND TYPESCRIPT CODE
    GridWithContextMenuDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/data/contextmenugrid/contextmenugrid.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/data/contextmenugrid/contextmenugrid.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
        this.http.get('assets/data/componentdata/country.json', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.dataSource = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    GridWithContextMenuDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    GridWithContextMenuDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'grid-context-menu-demo', template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n         Data Grid with Context Menu \n      </amexio-header>\n      <amexio-body>\n        <p>Data grid component to render large amount of data-set with various options like sorting in ascending or descending order, client-side pagination, column hide/unhide, single/multi selection, user define template for rendering for column header and column data, displaying summation of numeric column and with context menu(right-click mouse operation).\n        </p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n            <amexio-row>\n              <amexio-column size=\"12\">\n                <amexio-card [header]=\"true\">\n                  <amexio-header>\n                     Data Grid with Context Menu \n                  </amexio-header>\n                  <amexio-body>\n                    <amexio-datagrid\n                      [enable-column-fiter]=\"true\" [context-menu]=\"contextMenuRowData\" [height]=\"200\" title=\"Country Grid\" [enable-checkbox]=\"false\"  [http-method]=\"'get'\" [http-url]=\"'assets/data/componentdata/country.json'\" [data-reader]=\"'data'\"  [page-size] = \"10\">\n                      <amexio-data-table-column [data-index]=\"'countryName'\" \n                                                [data-type]=\"'string'\" \n                                                [context-menu]=\"contextMenuColData\"\n                                                [hidden]=\"false\" [text]=\"'Name'\">\n                      </amexio-data-table-column>\n                      <amexio-data-table-column [data-index]=\"'countryCode1'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Code'\"></amexio-data-table-column>\n                      <amexio-data-table-column [data-index]=\"'currencyName'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Currency'\"></amexio-data-table-column>\n                    </amexio-datagrid>\n                 <!--   <p><b>Selected row data : </b>{{selectedData | json}}</p>-->\n                  </amexio-body>\n                </amexio-card>\n              </amexio-column>\n            </amexio-row>\n          </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Properties<amexio-datagrid>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/data/grid.json'\"\n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [data-index]=\"'name'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\">\n                <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                  <ng-container *ngIf=\"row.deprecated\">\n                    <div style=\"text-decoration: line-through red;\">{{row.name}}</div>\n                  </ng-container>\n                  <ng-container *ngIf=\"!row.deprecated\">\n                    {{row.name}}\n                  </ng-container>\n                </ng-template>\n              </amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'type'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'default'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'description'\" [width]=\"65\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid><br>\n            <amexio-datagrid title=\"Column Properties <amexio-data-table-colum>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/data/grid.json'\"\n                             [data-reader]=\"'columnProperties'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [data-index]=\"'name'\" [width]=\"15\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'type'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'default'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'description'\" [width]=\"65\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br>\n            <amexio-datagrid title=\"Events\" [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/data/grid.json'\" [data-reader]=\"'events'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [data-index]=\"'name'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'description'\" [width]=\"65\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n\n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll;\">\n              <amexio-vertical-tab-view>\n                <amexio-tab title=\"HTML\" [active]=\"true\">\n                  <ng-container *ngIf=\"htmlCode\">\n                    <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                    <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                  </ng-container>\n                </amexio-tab>\n                <amexio-tab title=\"Type Script\">\n                  <ng-container *ngIf=\"typeScriptCode\">\n                    <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                  </ng-container>\n                </amexio-tab>\n                <amexio-tab title=\"DataSource\">\n                  <ng-container *ngIf=\"dataSource\">\n                    <prism-block [code]=\"dataSource\" [language]=\"'json'\"></prism-block>\n                  </ng-container>\n                </amexio-tab>\n              </amexio-vertical-tab-view>\n            </div>\n           \n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n          <p align=\"center\">Amexio Sandbox</p>\n          <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-grid-contextmenu?embed=1&file=src/app/contextualmenu/grid/grid.demo.component.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n  "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GridWithContextMenuDemo);
    return GridWithContextMenuDemo;
}());



/***/ })

}]);
//# sourceMappingURL=data-gridwithcontextmenu-gridwithcontextmenu-demo-module.js.map