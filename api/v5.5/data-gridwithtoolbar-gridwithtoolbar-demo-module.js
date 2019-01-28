(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-gridwithtoolbar-gridwithtoolbar-demo-module"],{

/***/ "./src/app/data/gridwithtoolbar/gridwithtoolbar.demo.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/data/gridwithtoolbar/gridwithtoolbar.demo.module.ts ***!
  \*********************************************************************/
/*! exports provided: GridWithToolBarDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridWithToolBarDemoModule", function() { return GridWithToolBarDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _gridwithtoolbar_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gridwithtoolbar.demo */ "./src/app/data/gridwithtoolbar/gridwithtoolbar.demo.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Created by kedar on 17/10/18.
 */
var GridWithToolBarDemoModule = /** @class */ (function () {
    function GridWithToolBarDemoModule() {
    }
    GridWithToolBarDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_gridwithtoolbar_demo__WEBPACK_IMPORTED_MODULE_6__["GridWithToolBarDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _gridwithtoolbar_demo__WEBPACK_IMPORTED_MODULE_6__["GridWithToolBarDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], GridWithToolBarDemoModule);
    return GridWithToolBarDemoModule;
}());



/***/ }),

/***/ "./src/app/data/gridwithtoolbar/gridwithtoolbar.demo.ts":
/*!**************************************************************!*\
  !*** ./src/app/data/gridwithtoolbar/gridwithtoolbar.demo.ts ***!
  \**************************************************************/
/*! exports provided: GridWithToolBarDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridWithToolBarDemo", function() { return GridWithToolBarDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/**
 * Created by kedar on 17/10/18.
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


var GridWithToolBarDemo = /** @class */ (function () {
    function GridWithToolBarDemo(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
    }
    //TO LOAD HTML AND TYPESCRIPT CODE
    GridWithToolBarDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/data/gridwithtoolbar/gridwithtoolbar.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/data/gridwithtoolbar/gridwithtoolbar.text', { responseType: 'text' }).subscribe(function (data) {
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
    GridWithToolBarDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    GridWithToolBarDemo.prototype.getSelectedData = function (data) {
        this.selectedData = data;
    };
    GridWithToolBarDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gridwithtoolbar-demo', template: "\n  <amexio-card header=\"true\">\n    <amexio-header>\n    Grid with Toolbar\n    </amexio-header>\n    <amexio-body>\n        <p>Grid with Toolbar contains toolbar at header of Data grid component and it renders large amount of data-set with various options like sorting in ascending or descending\n            order, client-side pagination, column hide/unhide, single/multi selection, user define template for rendering\n            for column header and column data, displaying summation of numeric column.</p>\n        <amexio-tab-view>\n            <amexio-tab title=\"Demo\" active=\"true\">\n                <amexio-row>\n                    <amexio-column size=\"12\">\n                        <amexio-card [header]=\"true\">\n                            <amexio-header>\n                                Grid with Toolbar\n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-datagrid [enable-column-fiter]=\"true\" title=\" Grid with Toolbar \" [enable-checkbox]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/data/componentdata/country.json'\"\n                                    [data-reader]=\"'data'\" [page-size]=\"10\">\n                                    <amexio-datagrid-header>\n                                        <amexio-drop-down-menu [icon-align]=\"'left'\" [title]=\"'Country Currency '\" [padding]=\"'5px 10px'\" [icon]=\"'fa fa-empire'\">\n                                            <amexio-drop-down-menu-item [label]=\"'India'\" [icon]=\"'fa fa-inr'\">\n                                            </amexio-drop-down-menu-item>\n                                            <amexio-drop-down-menu-item [label]=\"'Russia'\" [icon]=\"'fa fa-rouble'\" [separator]=\"true\">\n                                            </amexio-drop-down-menu-item>\n                                            <amexio-drop-down-menu-item [label]=\"'Japan'\" [icon]=\"'fa fa-cny'\">\n                                            </amexio-drop-down-menu-item>\n                                            <amexio-drop-down-menu-item [label]=\"'United States'\" [icon]=\"'fa fa-dollar'\">\n                                            </amexio-drop-down-menu-item>\n                                        </amexio-drop-down-menu>\n                                        <amexio-label size=\"small\">\n                                            My Drive\n                                        </amexio-label>\n                                       <amexio-image aria-hidden=\"true\" [icon-class]=\"'fa fa-info-circle'\"> </amexio-image>\n                                        \n                                    </amexio-datagrid-header>\n                                    <amexio-data-table-column [data-index]=\"'countryName'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\" (selectedRowData)=\"getSelectedData($event)\">\n                                    </amexio-data-table-column>\n                                    <amexio-data-table-column [sort]=\"false\" [data-index]=\"'countryCode1'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Code'\"></amexio-data-table-column>\n                                    <amexio-data-table-column [data-index]=\"'currencyName'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Currency'\"></amexio-data-table-column>\n                                </amexio-datagrid>\n                            </amexio-body>\n                        </amexio-card>\n                    </amexio-column>\n                </amexio-row>\n            </amexio-tab>\n\n\n            <amexio-tab title=\"API Reference\">\n                <amexio-datagrid title=\"Properties<amexio-datagrid>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/data/grid.json'\"\n                    [data-reader]=\"'properties'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [data-index]=\"'name'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\">\n                        <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                            <ng-container *ngIf=\"row.deprecated\">\n                                <div style=\"text-decoration: line-through red;\">{{row.name}}</div>\n                            </ng-container>\n                            <ng-container *ngIf=\"!row.deprecated\">\n                                {{row.name}}\n                            </ng-container>\n                        </ng-template>\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'type'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'default'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'description'\" [width]=\"65\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <amexio-datagrid title=\"Column Properties <amexio-data-table-colum>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/data/grid.json'\"\n                    [data-reader]=\"'columnProperties'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [data-index]=\"'name'\" [width]=\"15\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'type'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'default'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'description'\" [width]=\"65\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <amexio-datagrid title=\"Events\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/data/grid.json'\" [data-reader]=\"'events'\"\n                    [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [data-index]=\"'name'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'description'\" [width]=\"65\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n\n            </amexio-tab>\n            <amexio-tab title=\"Source\">\n                <div style=\"overflow-y: scroll\">\n                    <amexio-vertical-tab-view>\n                        <amexio-tab title=\"HTML\" [active]=\"true\">\n                            <ng-container *ngIf=\"htmlCode\">\n                                <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                                <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"Type Script\">\n                            <ng-container *ngIf=\"typeScriptCode\">\n                                <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"DataSource\">\n                            <ng-container *ngIf=\"dataSource\">\n                                <prism-block [code]=\"dataSource\" [language]=\"'json'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                    </amexio-vertical-tab-view>\n                </div>\n            </amexio-tab>\n            <amexio-tab title=\"Live\">\n                <p align=\"center\">Amexio Sandbox</p>\n                <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-grid-with-toolbar?embed=1&file=app/grid/gridwithtoolbar/gridwithtoolbar.demo.html&view=editor\"></iframe>\n            </amexio-tab>\n        </amexio-tab-view>\n    </amexio-body>\n</amexio-card>\n  "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GridWithToolBarDemo);
    return GridWithToolBarDemo;
}());



/***/ })

}]);
//# sourceMappingURL=data-gridwithtoolbar-gridwithtoolbar-demo-module.js.map