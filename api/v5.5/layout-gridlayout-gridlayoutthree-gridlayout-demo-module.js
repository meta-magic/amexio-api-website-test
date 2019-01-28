(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-gridlayout-gridlayoutthree-gridlayout-demo-module"],{

/***/ "./src/app/layout/gridlayout/gridlayoutthree/gridlayout.demo.html":
/*!************************************************************************!*\
  !*** ./src/app/layout/gridlayout/gridlayoutthree/gridlayout.demo.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card header=\"true\">\n    <amexio-header>\n        Grid Layout\n    </amexio-header>\n    <amexio-body>\n        <p>CSS Grid Layout is the most powerful layout system available in CSS. It is a 2-dimensional system, meaning it can handle both columns and rows. Grid Layout can be used by applying CSS rules both to a parent element (which becomes the Grid Container) and to that elements children (which become Grid Items).</p>\n        <amexio-tab-view>\n            <amexio-tab title=\"Demo\" active=\"true\">\n                <amexio-row>\n                    <amexio-column size=\"12\">\n                        <amexio-card [header]=\"true\">\n                            <amexio-header>\n                                Grid Layout\n                            </amexio-header>\n                            <amexio-body>\n\n                                <amexio-layout-grid [layout]=\"'Home'\">\n                                    <amexio-grid-item [name]=\"'gridheader1'\">\n                                        <amexio-button [label]=\"'Home'\" [type]=\"'transparent'\" [tooltip]=\"'Home'\" [size]=\"'small'\">\n                                        </amexio-button>\n                                    </amexio-grid-item>\n                                    <amexio-grid-item [name]=\"'gridheader2'\">\n                                        <amexio-button [label]=\"'About'\" [type]=\"'transparent'\" [tooltip]=\"'Home'\" [size]=\"'small'\">\n                                        </amexio-button>\n                                    </amexio-grid-item>\n                                    <amexio-grid-item [name]=\"'gridheader3'\">\n                                        <amexio-button [label]=\"'Gallery'\" [type]=\"'transparent'\" [tooltip]=\"'Home'\" [size]=\"'small'\">\n                                        </amexio-button>\n                                    </amexio-grid-item>\n                                    <amexio-grid-item [name]=\"'gridheader4'\">\n                                        <amexio-button [label]=\"'Content'\" [type]=\"'transparent'\" [tooltip]=\"'Home'\" [size]=\"'small'\">\n                                        </amexio-button>\n                                    </amexio-grid-item>\n                                   \n\n\n                                    <amexio-grid-item [name]=\"'gridtitle'\">\n\n                                        <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'left'\" [header-align]=\"'left'\">\n                                            <amexio-header>\n                                                Warli Painting\n                                            </amexio-header>\n                                            <amexio-body>\n                                                <amexio-image path=\"assets/images/warli1.jpg\"></amexio-image>\n                                                <amexio-label size=\"small\">\n                                                    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.\n                                                </amexio-label>\n                                            </amexio-body>\n\n                                        </amexio-card>\n\n                                    </amexio-grid-item>\n                                    <amexio-grid-item [name]=\"'gridmain'\">\n\n                                        <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'left'\" [header-align]=\"'left'\">\n                                            <amexio-header>\n                                                Gallerist\n                                            </amexio-header>\n                                            <amexio-body>\n                                                <amexio-image path=\"assets/images/soap-bubble.jpg\"></amexio-image>\n                                                <amexio-label size=\"small\">\n                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy\n                                                    text ever since the 1500s, when an unknown printer took a galley of type\n                                                    and scrambled it to make a type specimen book. Lorem Ipsum is simply\n                                                    dummy text of the printing and typesetting industry. Lorem Ipsum has\n                                                    been the industry's standard dummy text ever since the 1500s, when an\n                                                    unknown printer took a galley of type and scrambled it to make a type\n                                                    specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting\n                                                    industry. Lorem Ipsum has been the industry's standard dummy text ever\n                                                    since the 1500s, when an unknown printer took a galley of type and scrambled\n                                                    it to make a type specimen book. Lorem Ipsum is simply dummy text of\n                                                    the printing and typesetting industry. Lorem Ipsum has been the industry's\n                                                    standard dummy text ever since the 1500s, when an unknown printer took\n                                                    a galley of type and scrambled it to make a type specimen book.\n\n                                                </amexio-label>\n                                            </amexio-body>\n\n                                        </amexio-card>\n\n                                    </amexio-grid-item>\n                                    <amexio-grid-item [name]=\"'gridright1'\">\n                                        <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'left'\" [header-align]=\"'left'\">\n                                            <amexio-header>\n                                                Calligraphy\n                                            </amexio-header>\n                                            <amexio-body>\n                                                <amexio-image path=\"assets/images/calligraphy.jpg\"></amexio-image>\n                                                <amexio-label size=\"small\">\n                                                    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.\n                                                </amexio-label>\n                                            </amexio-body>\n\n                                        </amexio-card>\n\n\n                                    </amexio-grid-item>\n                                    <amexio-grid-item [name]=\"'gridright2'\">\n                                        <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'left'\" [header-align]=\"'left'\">\n                                            <amexio-header>\n                                                Landscape\n                                            </amexio-header>\n                                            <amexio-body>\n                                                <amexio-image path=\"assets/images/landscape.jpg\"></amexio-image>\n                                                <amexio-label size=\"small\">\n                                                    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates. Temporibus autem\n                                                    quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet\n                                                    ut et voluptates.\n                                                </amexio-label>\n                                            </amexio-body>\n\n                                        </amexio-card>\n                                    </amexio-grid-item>\n                                    <amexio-grid-item [name]=\"'gridright3'\">\n                                        <amexio-panel [header]=\"true\" [title]=\"'Imaginary Drawing'\" [expanded]=\"true\">\n                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.\n\n\n                                        </amexio-panel>\n                                    </amexio-grid-item>\n                                    <amexio-grid-item [name]=\"'gridmenu'\">\n                                        <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'left'\" [header-align]=\"'left'\">\n                                            <amexio-header>\n                                                Origami\n                                            </amexio-header>\n                                            <amexio-body>\n                                                <amexio-image path=\"assets/images/origami.jpg\"></amexio-image>\n                                                <amexio-label size=\"small\">\n                                                    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates. Temporibus autem\n                                                    quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet\n                                                    ut et voluptates.\n\n                                                </amexio-label>\n                                            </amexio-body>\n\n                                        </amexio-card>\n                                    </amexio-grid-item>\n                                </amexio-layout-grid>\n\n                            </amexio-body>\n                        </amexio-card>\n\n                    </amexio-column>\n                </amexio-row>\n            </amexio-tab>\n            <amexio-tab title=\"API Reference\">\n                <amexio-datagrid title=\"Properties<amexio-layout-grid>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/data/gridlayout.json'\"\n                    [data-reader]=\"'properties'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [data-index]=\"'name'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'version'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Version'\">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'type'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'default'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'description'\" [width]=\"45\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <amexio-datagrid title=\"Properties<amexio-grid-item>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/data/gridlayout.json'\"\n                    [data-reader]=\"'childproperties'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [data-index]=\"'name'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'version'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Version'\">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'type'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'default'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'description'\" [width]=\"45\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n            </amexio-tab>\n            <amexio-tab title=\"Source\">\n                <div style=\"overflow-y: scroll\">\n                    <amexio-vertical-tab-view>\n                        <amexio-tab title=\"HTML\" [active]=\"true\">\n                            <ng-container *ngIf=\"htmlCode\">\n                                <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                                <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"Type Script\">\n                            <ng-container *ngIf=\"typeScriptCode\">\n                                <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n\n                    </amexio-vertical-tab-view>\n                </div>\n            </amexio-tab>\n            <amexio-tab title=\"Live\">\n                <p align=\"center\">Amexio Sandbox</p>\n                <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-gridlayoutthree?embed=1&file=app/layouts/gridlayout/gridlayoutthree/gridlayout.demo.html&view=editor\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n            </amexio-tab>\n        </amexio-tab-view>\n    </amexio-body>\n</amexio-card>"

/***/ }),

/***/ "./src/app/layout/gridlayout/gridlayoutthree/gridlayout.demo.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/gridlayout/gridlayoutthree/gridlayout.demo.module.ts ***!
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
/* harmony import */ var _gridlayout_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gridlayout.demo */ "./src/app/layout/gridlayout/gridlayoutthree/gridlayout.demo.ts");
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

/***/ "./src/app/layout/gridlayout/gridlayoutthree/gridlayout.demo.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/gridlayout/gridlayoutthree/gridlayout.demo.ts ***!
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
        this.gridDesktop = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('Home', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Desktop)
            .addlayout(["gridheader1", "gridheader2", "gridheader3", "gridheader4"])
            .addlayout(["gridtitle", "gridmain", "gridmain", "gridright1"])
            .addlayout(["gridmenu", "gridmain", "gridmain", "gridright2"])
            .addlayout(["gridmenu", "gridmain", "gridmain", "gridright3"]);
        this.gridTablet = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('Home', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Tablet)
            .addlayout(["gridheader1", "gridheader2", "gridheader3", "gridheader4"])
            .addlayout(["gridmain", "gridmain", "gridmain", "gridmain"])
            .addlayout(["gridtitle", "gridtitle", "gridright1", "gridright1"])
            .addlayout(["gridmenu", "gridmenu", "gridright2", "gridright2"])
            .addlayout(["gridright3", "gridright3", "gridright3", "gridright3"]);
        this.gridMobile = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('Home', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Mobile)
            .addlayout(["gridheader1", "gridheader2", "gridheader3", "gridheader4"])
            .addlayout(["gridmain", "gridmain", "gridmain", "gridmain"])
            .addlayout(["gridtitle", "gridtitle", "gridtitle", "gridtitle"])
            .addlayout(["gridmenu", "gridmenu", "gridmenu", "gridmenu"])
            .addlayout(["gridright1", "gridright1", "gridright1", "gridright1"])
            .addlayout(["gridright2", "gridright2", "gridright2", "gridright2"])
            .addlayout(["gridright3", "gridright3", "gridright3", "gridright3"]);
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    GridLayoutDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/data/gridlayout/gridlayoutexp3.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/data/gridlayout/gridlayoutexp3.text', { responseType: 'text' }).subscribe(function (data) {
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
            selector: 'gridlayout-demo-exp3',
            template: __webpack_require__(/*! ./gridlayout.demo.html */ "./src/app/layout/gridlayout/gridlayoutthree/gridlayout.demo.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioGridLayoutService"]])
    ], GridLayoutDemo);
    return GridLayoutDemo;
}());



/***/ })

}]);
//# sourceMappingURL=layout-gridlayout-gridlayoutthree-gridlayout-demo-module.js.map