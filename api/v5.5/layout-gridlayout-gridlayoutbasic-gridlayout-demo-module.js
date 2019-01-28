(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-gridlayout-gridlayoutbasic-gridlayout-demo-module"],{

/***/ "./src/app/layout/gridlayout/gridlayoutbasic/gridlayout.demo.html":
/*!************************************************************************!*\
  !*** ./src/app/layout/gridlayout/gridlayoutbasic/gridlayout.demo.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card header=\"true\">\n    <amexio-header>\n        Grid Layout\n    </amexio-header>\n    <amexio-body>\n        <p>CSS Grid Layout is the most powerful layout system available in CSS. It is a 2-dimensional system, meaning it can\n            handle both columns and rows. Grid Layout can be used by applying CSS rules both to a parent element (which becomes\n            the Grid Container) and to that elements children (which become Grid Items).</p>\n        <amexio-tab-view>\n            <amexio-tab title=\"Demo\" active=\"true\">\n                <amexio-row>\n                    <amexio-column size=\"12\">\n                        <amexio-card [header]=\"true\">\n                            <amexio-header>\n                                Grid Layout : Sample Example1\n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-layout-grid [layout]=\"'LayoutSample1'\">\n                                    <amexio-grid-item style=\"border: 1px dashed black; \" [name]=\"'gridheader'\">Header</amexio-grid-item>\n                                    <amexio-grid-item style=\"border: 1px dashed black\" [name]=\"'gridmenu'\">Menu</amexio-grid-item>\n                                    <amexio-grid-item style=\"border: 1px dashed black\" [name]=\"'gridmain'\">Main </amexio-grid-item>\n                                    <amexio-grid-item style=\"border: 1px dashed black\" [name]=\"'gridright'\">Right</amexio-grid-item>\n                                    <amexio-grid-item style=\"border: 1px dashed black\" [name]=\"'gridfooter'\">Footer</amexio-grid-item>\n                                </amexio-layout-grid>\n                                <br>\n                                <h2> Steps To Create Above Grid Layout :-</h2>\n                                <amexio-box border-color=\"red\" border=\"left\" padding=\"true\">\n                                    <ul>\n                                        <li>\n                                            Firstly you need to import AmexioGridLayoutService, GridConfig and GridConstants from amexio-ng-extensions.\n                                        </li>\n                                        <li>\n                                            To create grid-template-areas, need to create a method creating GridConfig model where first attribute will be the name of\n                                            the Ui and second will be the layout type(desktop, tab or mobile) then call addlayout\n                                            method to design grid-template-areas. (Refer source tab - typescript code)\n                                        </li>\n                                        <li>\n                                            Call above created method in constructor and createLayout from the service to generate Uis for individual layout type. (Refer\n                                            source tab - typescript code).\n                                        </li>\n                                        <li>\n                                            grid-area: Gives an item a name so that it can be referenced by a template created with the grid-template-areas property.\n                                            It can contain any amexio component withih it. (Refer source tab- html code)\n                                        </li>\n                                    </ul>\n                                </amexio-box>\n                            </amexio-body>\n                        </amexio-card>\n                        <br>\n                        <amexio-card [header]=\"true\">\n                            <amexio-header>\n                                Grid Layout : Sample Example2\n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-layout-grid [layout]=\"'LayoutSample2'\">\n                                    <amexio-grid-item style=\"border: 1px dashed black; \" [name]=\"'gridheader'\">GRID LAYOUT HEADER</amexio-grid-item>\n                                    <amexio-grid-item style=\"border: 1px dashed black\" [name]=\"'gridmenu'\">GRID LAYOUT MENU</amexio-grid-item>\n                                    <amexio-grid-item style=\"border: 1px dashed black\" [name]=\"'gridmain'\">GRID LAYOUT MAIN </amexio-grid-item>\n                                    <amexio-grid-item style=\"border: 1px dashed black\" [name]=\"'gridright'\">GRID LAYOUT RIGHT</amexio-grid-item>\n                                    <amexio-grid-item style=\"border: 1px dashed black\" [name]=\"'gridfooter'\">GRID LAYOUT FOOTER</amexio-grid-item>\n                                </amexio-layout-grid>\n                            </amexio-body>\n                        </amexio-card>\n                    </amexio-column>\n                </amexio-row>\n            </amexio-tab>\n            <amexio-tab title=\"API Reference\">\n                <amexio-datagrid title=\"Properties<amexio-layout-grid>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/data/gridlayout.json'\"\n                    [data-reader]=\"'properties'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [data-index]=\"'name'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'version'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Version'\">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'type'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'default'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'description'\" [width]=\"45\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <amexio-datagrid title=\"Properties<amexio-grid-item>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/data/gridlayout.json'\"\n                    [data-reader]=\"'childproperties'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [data-index]=\"'name'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'version'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Version'\">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'type'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'default'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'description'\" [width]=\"45\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n            </amexio-tab>\n            <amexio-tab title=\"Source\">\n                <div style=\"overflow-y: scroll\">\n                    <amexio-vertical-tab-view>\n                        <amexio-tab title=\"HTML\" [active]=\"true\">\n                            <ng-container *ngIf=\"htmlCode\">\n                                <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                                <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"Type Script\">\n                            <ng-container *ngIf=\"typeScriptCode\">\n                                <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n\n                    </amexio-vertical-tab-view>\n                </div>\n            </amexio-tab>\n            <amexio-tab title=\"Live\">\n                <p align=\"center\">Amexio Sandbox</p>\n                <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-gridlayoutbasic?embed=1&file=app/layouts/gridlayout/gridlayoutbasic/gridlayout.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n            </amexio-tab>\n        </amexio-tab-view>\n    </amexio-body>\n</amexio-card>"

/***/ }),

/***/ "./src/app/layout/gridlayout/gridlayoutbasic/gridlayout.demo.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/gridlayout/gridlayoutbasic/gridlayout.demo.module.ts ***!
  \*****************************************************************************/
/*! exports provided: GridLayoutDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridLayoutDemoModule", function() { return GridLayoutDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _gridlayout_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gridlayout.demo */ "./src/app/layout/gridlayout/gridlayoutbasic/gridlayout.demo.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Created by ankita on 1/11/18.
 */
var GridLayoutDemoModule = /** @class */ (function () {
    function GridLayoutDemoModule() {
    }
    GridLayoutDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_gridlayout_demo__WEBPACK_IMPORTED_MODULE_6__["GridLayoutDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioChartsModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioDashBoardModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _gridlayout_demo__WEBPACK_IMPORTED_MODULE_6__["GridLayoutDemo"], pathMatch: 'full'
                    }])],
            providers: [amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioGridLayoutService"]]
        })
    ], GridLayoutDemoModule);
    return GridLayoutDemoModule;
}());



/***/ }),

/***/ "./src/app/layout/gridlayout/gridlayoutbasic/gridlayout.demo.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/gridlayout/gridlayoutbasic/gridlayout.demo.ts ***!
  \**********************************************************************/
/*! exports provided: GridLayoutDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridLayoutDemo", function() { return GridLayoutDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/**
 * Created by rashmi on 28/11/18.
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





var GridLayoutDemo = /** @class */ (function () {
    function GridLayoutDemo(http, _gridlayoutService) {
        this.http = http;
        this._gridlayoutService = _gridlayoutService;
        this.createLayouts();
        this._gridlayoutService.createLayout(this.gridDesktop);
        this._gridlayoutService.createLayout(this.gridTablet);
        this._gridlayoutService.createLayout(this.gridMobile);
        this._gridlayoutService.createLayout(this.gridDesktop1);
        this._gridlayoutService.createLayout(this.gridTablet1);
        this._gridlayoutService.createLayout(this.gridMobile1);
        this.getHtmlAndTypeScriptCode();
    }
    GridLayoutDemo.prototype.createLayouts = function () {
        this.gridDesktop = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('LayoutSample1', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Desktop)
            .addlayout(["gridmenu", "gridheader", "gridheader", "gridheader", "gridheader", "gridheader"])
            .addlayout(["gridmenu", "gridmain", "gridmain", "gridmain", "gridright", "gridright"])
            .addlayout(["gridfooter", "gridfooter", "gridfooter", "gridfooter", "gridright", "gridright"]);
        this.gridTablet = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('LayoutSample1', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Tablet)
            .addlayout(["gridmenu", "gridmenu", "gridheader", "gridheader", "gridheader", "gridheader"])
            .addlayout(["gridmenu", "gridmenu", "gridmain", "gridmain", "gridright", "gridright"])
            .addlayout(["gridmenu", "gridmenu", "gridmain", "gridmain", "gridright", "gridright"])
            .addlayout(["gridmenu", "gridmenu", "gridfooter", "gridfooter", "gridfooter", "gridfooter"]);
        this.gridMobile = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('LayoutSample1', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Mobile)
            .addlayout(["gridheader", "gridheader", "gridheader", "gridheader", "gridheader", "gridheader"])
            .addlayout(["gridmenu", "gridmenu", "gridmenu", "gridmenu", "gridmenu", "gridmenu"])
            .addlayout(["gridmain", "gridmain", "gridmain", "gridmain", "gridmain", "gridmain"])
            .addlayout(["gridright", "gridright", "gridright", "gridright", "gridright", "gridright"])
            .addlayout(["gridfooter", "gridfooter", "gridfooter", "gridfooter", "gridfooter", "gridfooter"]);
        this.gridDesktop1 = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('LayoutSample2', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Desktop)
            .addlayout(["gridmenu", "gridmenu", "gridheader", "gridheader", "gridheader", "gridheader"])
            .addlayout(["gridmenu", "gridmenu", "gridmain", "gridmain", "gridright", "gridright"])
            .addlayout(["gridmenu", "gridmenu", "gridfooter", "gridfooter", "gridfooter", "gridfooter"]);
        this.gridTablet1 = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('LayoutSample2', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Tablet)
            .addlayout(["gridmenu", "gridmenu", "gridheader", "gridheader", "gridheader", "gridheader"])
            .addlayout(["gridmenu", "gridmenu", "gridmain", "gridmain", "gridmain", "gridmain"])
            .addlayout(["gridmenu", "gridmenu", "gridright", "gridright", "gridright", "gridright"])
            .addlayout(["gridmenu", "gridmenu", "gridfooter", "gridfooter", "gridfooter", "gridfooter"]);
        this.gridMobile1 = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('LayoutSample2', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Mobile)
            .addlayout(["gridheader", "gridheader", "gridheader", "gridheader", "gridheader", "gridheader"])
            .addlayout(["gridmenu", "gridmenu", "gridmenu", "gridmenu", "gridmenu", "gridmenu"])
            .addlayout(["gridmain", "gridmain", "gridmain", "gridmain", "gridmain", "gridmain"])
            .addlayout(["gridright", "gridright", "gridright", "gridright", "gridright", "gridright"])
            .addlayout(["gridfooter", "gridfooter", "gridfooter", "gridfooter", "gridfooter", "gridfooter"]);
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    GridLayoutDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/data/gridlayout/gridlayout.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/data/gridlayout/gridlayout.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    GridLayoutDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    GridLayoutDemo.prototype.onRowSelect = function (data) {
        this.selectedData = data;
    };
    GridLayoutDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gridlayout-demo',
            template: __webpack_require__(/*! ./gridlayout.demo.html */ "./src/app/layout/gridlayout/gridlayoutbasic/gridlayout.demo.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioGridLayoutService"]])
    ], GridLayoutDemo);
    return GridLayoutDemo;
}());



/***/ })

}]);
//# sourceMappingURL=layout-gridlayout-gridlayoutbasic-gridlayout-demo-module.js.map