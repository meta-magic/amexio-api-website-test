(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-gridlayout-gridlayoutone-gridlayout-demo-module"],{

/***/ "./src/app/layout/gridlayout/gridlayoutone/gridlayout.demo.html":
/*!**********************************************************************!*\
  !*** ./src/app/layout/gridlayout/gridlayoutone/gridlayout.demo.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card header=\"true\">\n    <amexio-header>\n        Grid Layout\n    </amexio-header>\n    <amexio-body>\n        <p>CSS Grid Layout is the most powerful layout system available in CSS. It is a 2-dimensional system, meaning it can\n            handle both columns and rows. Grid Layout can be used by applying CSS rules both to a parent element (which becomes\n            the Grid Container) and to that elements children (which become Grid Items).</p>\n        <amexio-tab-view>\n            <amexio-tab title=\"Demo\" active=\"true\">\n                <amexio-row>\n                    <amexio-column size=\"12\">\n                        <amexio-card [header]=\"true\">\n                            <amexio-header>\n                                Grid Layout\n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-layout-grid [layout]=\"'Layout1'\">\n                                    <amexio-grid-item [name]=\"'gridheader'\">\n                                        <amexio-panel [content-align]=\"'center'\" [expanded]=\"true\">\n                                            <amexio-label size=\"large-bold\">\n                                                GRID Pile\n                                            </amexio-label>\n                                            <br>\n                                            <amexio-label size=\"medium-bold\">\n                                                Stacked CSS Grid Effect\n                                            </amexio-label>\n                                        </amexio-panel>\n                                    </amexio-grid-item>\n\n                                    <amexio-grid-item [name]=\"'gridmenu1'\">\n                                        <amexio-row>\n                                            <amexio-column [size]=\"12\">\n                                                <amexio-image [path]=\"'assets/images/gridlayout1.jpg'\" [tooltip]=\"'Image'\"></amexio-image>\n                                            </amexio-column>\n                                        </amexio-row>\n                                        <amexio-row>\n                                            <amexio-row>\n                                                <amexio-column [size]=\"12\">\n                                                    <amexio-label size=\"medium-bold\">\n                                                        Magical content restructuring with CSS Grid stacks\n                                                    </amexio-label>\n                                                </amexio-column>\n                                            </amexio-row>\n\n                                            <amexio-row>\n                                                <amexio-column [size]=\"6\">\n                                                    <amexio-panel [header]=\"false\" [border]=\"false\" [expanded]=\"true\">\n                                                        This example demonstrates how to reposition content in a view by stacking multiple grids on top of one another. The goal\n                                                        of the example is to retain a logical markup structure while still\n                                                        allowing content to be split up and positioned on the grid. Case\n                                                        in point: From a HTML semantics standpoint, the main area should\n                                                        come before the sidebar area.\n                                                    </amexio-panel>\n                                                </amexio-column>\n                                                <amexio-column [size]=\"6\">\n                                                    <amexio-panel [header]=\"false\" [border]=\"false\" [expanded]=\"true\">\n                                                        shows how stacking two grids allows the sidebar items to appear as if they are placed on the same grid as the main content\n                                                        while they are in reality placed in a separate grid positioned within\n                                                        and superimposed on top of the original grid. A detailed breakdown\n                                                        of this demo explaining the approach and how everything fits together.\n                                                    </amexio-panel>\n                                                </amexio-column>\n                                            </amexio-row>\n\n                                        </amexio-row>\n\n                                    </amexio-grid-item>\n                                    <amexio-grid-item [name]=\"'gridleft'\">\n                                        <amexio-panel [border]=\"false\" [header]=\"true\" title=\"First Sidebar Item\" [collapsible]=\"true\" [expanded]=\"true\">\n                                            This is the first of two sidebar sections. It appears as the first of two items in the sidebar aside element which is located\n                                            after the main element in the HTML source order. On narrow screens it visually\n                                            appears after the main element.On narrow screens it visually appears after the\n                                            main element. On medium screens it appears at the top of the left-hand sidebar.\n                                            On wide screens it appears at the top of the left-hand sidebar.\n                                        </amexio-panel>\n                                    </amexio-grid-item>\n                                    <amexio-grid-item [name]=\"'gridright1'\">\n                                        <amexio-panel [border]=\"false\" [header]=\"true\" title=\"Second Sidebar Item\" [expanded]=\"true\" [collapsible]=\"true\">\n                                            This is the second of two sidebar sections. It appears as the second of two items in the sidebar aside element which is located\n                                            after the main element in the HTML source order. On narrow screens it visually\n                                            appears after the first sidebar item. On medium screens it appears as the second\n                                            item of the left-hand sidebar. On wide screens it appears at the top of the right-hand\n                                            sidebar. This is the second of two sidebar sections.It appears as the second\n                                            of two items in the sidebar aside element which is located after the main element\n                                            in the HTML source order. On narrow screens it visually appears after the first\n                                            sidebar item.\n                                        </amexio-panel>\n                                    </amexio-grid-item>\n                                    <amexio-grid-item [name]=\"'gridright2'\">\n                                        <amexio-panel [border]=\"false\" [header]=\"false\" title=\"Second Sidebar Item\" [expanded]=\"true\" [collapsible]=\"false\">\n                                            On medium screens it appears as the second item of the left-hand sidebar. On wide screens it appears at the top of the right-hand\n                                            sidebar. This is the second of two sidebar sections. It appears as the second\n                                            of two items in the sidebar aside element which is located after the main element\n                                            in the HTML source order. On narrow screens it visually appears after the first\n                                            sidebar item. On medium screens it appears as the second item of the left-hand\n                                            sidebar.\n                                        </amexio-panel>\n                                    </amexio-grid-item>\n                                    <amexio-grid-item [name]=\"'gridright3'\">\n                                        <amexio-panel [border]=\"false\" [header]=\"false\" title=\"Second Sidebar Item\" [expanded]=\"true\" [collapsible]=\"false\">\n                                            On wide screens it appears at the top of the right-hand sidebar. This is the second of two sidebar sections. It appears as\n                                            the second of two items in the sidebar aside element which is located after the\n                                            main element in the HTML source order. On narrow screens it visually appears\n                                            after the first sidebar item. On medium screens it appears as the second item\n                                            of the left-hand sidebar.\n                                        </amexio-panel>\n                                    </amexio-grid-item>\n                                    <amexio-grid-item [name]=\"'gridright4'\">\n                                        <amexio-panel [border]=\"false\" [header]=\"false\" title=\"Second Sidebar Item\" [expanded]=\"true\" [collapsible]=\"false\">\n                                            On wide screens it appears at the top of the right-hand sidebar. This is the second of two sidebar sections. It appears as\n                                            the second of two items in the sidebar aside element which is located after the\n                                            main element in the HTML source order. On narrow screens it visually appears\n                                            after the first sidebar item. On medium screens it appears as the second item\n                                            of the left-hand sidebar. On wide screens it appears at the top of the right-hand\n                                            sidebar. This is the second of two sidebar sections. It the left-hand sidebar.\n                                            On wide screens it appears at the top of the right-hand sidebar.\n                                        </amexio-panel>\n                                    </amexio-grid-item>\n                                    <amexio-grid-item [name]=\"'gridmenu2'\">\n\n                                        <amexio-card [header]=\"false\" [footer]=\"false\">\n\n                                            <amexio-body>\n                                                <amexio-image path=\"assets/images/grid1.jpg\"></amexio-image>\n                                                <amexio-label size=\"medium-bold\">\n                                                    Grid is great </amexio-label>\n                                                <amexio-label size=\"small\">\n                                                    CSS Grid is a two-dimensional layout tool. It is great for layout out content in a grid, and for laying out content in two\n                                                    dimensions </amexio-label>\n                                            </amexio-body>\n\n                                        </amexio-card>\n\n\n                                    </amexio-grid-item>\n                                    <amexio-grid-item [name]=\"'gridmenu3'\">\n\n                                        <amexio-card [header]=\"false\" [footer]=\"false\">\n\n                                            <amexio-body>\n                                                <amexio-image path=\"assets/images/grid2.jpg\"></amexio-image>\n                                                <amexio-label size=\"medium-bold\">\n                                                    Flex is great too</amexio-label>\n                                                <amexio-label size=\"small\">\n                                                    Grid is not always the right option for layuts. If for example you need to lay out a series of identical boxes like those\n                                                    you see here, Flex may be a better option.</amexio-label>\n                                            </amexio-body>\n\n                                        </amexio-card>\n\n\n                                    </amexio-grid-item>\n\n                                    <amexio-grid-item [name]=\"'gridmenu4'\">\n\n                                        <amexio-panel [border]=\"false\" [header]=\"false\" [collapsible]=\"false\" [expanded]=\"true\">\n                                            <amexio-label size=\"medium-bold\">Subgrid could be nice here\n                                            </amexio-label>\n                                            <br>\n                                            <br> The solution provided here is limited by the lack of support for subgrids. If\n                                            subgrids were available, the solution would be more refined. That said, the lack\n                                            of subgrid was what brought me to this solution, and it has practical applications\n                                            well outside of the current demo. So maybe not having subgrid has opened the\n                                            door to other more interesting opportunities?\n                                        </amexio-panel>\n\n\n                                    </amexio-grid-item>\n\n                                </amexio-layout-grid>\n                            </amexio-body>\n                        </amexio-card>\n                    </amexio-column>\n                </amexio-row>\n            </amexio-tab>\n            <amexio-tab title=\"API Reference\">\n                <amexio-datagrid title=\"Properties<amexio-layout-grid>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/data/gridlayout.json'\"\n                    [data-reader]=\"'properties'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [data-index]=\"'name'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'version'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Version'\">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'type'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'default'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'description'\" [width]=\"45\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <amexio-datagrid title=\"Properties<amexio-grid-item>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/data/gridlayout.json'\"\n                    [data-reader]=\"'childproperties'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [data-index]=\"'name'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'version'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Version'\">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'type'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'default'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'description'\" [width]=\"45\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n            </amexio-tab>\n            <amexio-tab title=\"Source\">\n                <div style=\"overflow-y: scroll\">\n                    <amexio-vertical-tab-view>\n                        <amexio-tab title=\"HTML\" [active]=\"true\">\n                            <ng-container *ngIf=\"htmlCode\">\n                                <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                                <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"Type Script\">\n                            <ng-container *ngIf=\"typeScriptCode\">\n                                <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n\n                    </amexio-vertical-tab-view>\n                </div>\n            </amexio-tab>\n            <amexio-tab title=\"Live\">\n                <p align=\"center\">Amexio Sandbox</p>\n                <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-gridlayoutone?embed=1&file=app/layouts/gridlayout/gridlayoutone/gridlayout.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n            </amexio-tab>\n        </amexio-tab-view>\n    </amexio-body>\n</amexio-card>"

/***/ }),

/***/ "./src/app/layout/gridlayout/gridlayoutone/gridlayout.demo.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/gridlayout/gridlayoutone/gridlayout.demo.module.ts ***!
  \***************************************************************************/
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
/* harmony import */ var _gridlayout_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gridlayout.demo */ "./src/app/layout/gridlayout/gridlayoutone/gridlayout.demo.ts");
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

/***/ "./src/app/layout/gridlayout/gridlayoutone/gridlayout.demo.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/gridlayout/gridlayoutone/gridlayout.demo.ts ***!
  \********************************************************************/
/*! exports provided: GridLayoutDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridLayoutDemo", function() { return GridLayoutDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/**
 * Created by rashmi on 2/1/18.
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
        this.getHtmlAndTypeScriptCode();
    }
    GridLayoutDemo.prototype.createLayouts = function () {
        this.gridDesktop = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('Layout1', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Desktop)
            .addlayout(["gridheader", "gridheader", "gridheader", "gridheader"])
            .addlayout(["gridleft", "gridmenu1", "gridmenu1", "gridright1"])
            .addlayout(["gridleft", "gridmenu2", "gridmenu3", "gridright2"])
            .addlayout(["gridleft", "gridmenu4", "gridmenu4", "gridright3"])
            .addlayout(["gridleft", "gridmenu4", "gridmenu4", "gridright4"]);
        this.gridTablet = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('Layout1', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Tablet)
            .addlayout(["gridheader", "gridheader", "gridheader", "gridheader", "gridheader"])
            .addlayout(["gridleft", "gridmenu1", "gridmenu1", "gridmenu1", "gridmenu1"])
            .addlayout(["gridright1", "gridmenu2", "gridmenu2", "gridmenu3", "gridmenu3"])
            .addlayout(["gridright1", "gridmenu4", "gridmenu4", "gridmenu4", "gridmenu4"])
            .addlayout(["gridright2", "gridmenu4", "gridmenu4", "gridmenu4", "gridmenu4"])
            .addlayout(["gridright3", "gridmenu4", "gridmenu4", "gridmenu4", "gridmenu4"])
            .addlayout(["gridright4", "gridmenu4", "gridmenu4", "gridmenu4", "gridmenu4"]);
        this.gridMobile = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('Layout1', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Mobile)
            .addlayout(["gridheader", "gridheader", "gridheader", "gridheader"])
            .addlayout(["gridmenu1", "gridmenu1", "gridmenu1", "gridmenu1"])
            .addlayout(["gridmenu2", "gridmenu2", "gridmenu2", "gridmenu2"])
            .addlayout(["gridmenu3", "gridmenu3", "gridmenu3", "gridmenu3"])
            .addlayout(["gridmenu4", "gridmenu4", "gridmenu4", "gridmenu4"])
            .addlayout(["gridleft", "gridleft", "gridleft", "gridleft"])
            .addlayout(["gridright1", "gridright1", "gridright1", "gridright1"])
            .addlayout(["gridright2", "gridright2", "gridright2", "gridright2"])
            .addlayout(["gridright3", "gridright3", "gridright3", "gridright3"])
            .addlayout(["gridright4", "gridright4", "gridright4", "gridright4"]);
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    GridLayoutDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/data/gridlayout/gridlayoutexp1.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/data/gridlayout/gridlayoutexp1.text', { responseType: 'text' }).subscribe(function (data) {
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
            selector: 'gridlayout-demo-exp1',
            template: __webpack_require__(/*! ./gridlayout.demo.html */ "./src/app/layout/gridlayout/gridlayoutone/gridlayout.demo.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioGridLayoutService"]])
    ], GridLayoutDemo);
    return GridLayoutDemo;
}());



/***/ })

}]);
//# sourceMappingURL=layout-gridlayout-gridlayoutone-gridlayout-demo-module.js.map