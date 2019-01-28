(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-gridlayout-gridlayouttwo-gridlayout-demo-module"],{

/***/ "./src/app/layout/gridlayout/gridlayouttwo/gridlayout.demo.html":
/*!**********************************************************************!*\
  !*** ./src/app/layout/gridlayout/gridlayouttwo/gridlayout.demo.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card header=\"true\">\n    <amexio-header>\n        Grid Layout\n    </amexio-header>\n    <amexio-body>\n        <p>CSS Grid Layout is the most powerful layout system available in CSS. It is a 2-dimensional system, meaning it can\n            handle both columns and rows. Grid Layout can be used by applying CSS rules both to a parent element (which becomes\n            the Grid Container) and to that elements children (which become Grid Items).</p>\n        <amexio-tab-view>\n            <amexio-tab title=\"Demo\" active=\"true\">\n                <amexio-row>\n                    <amexio-column size=\"12\">\n                        <amexio-card [header]=\"true\">\n                            <amexio-header>\n                                Grid Layout\n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-layout-grid [layout]=\"'Layout2'\">\n                                    <amexio-grid-item [name]=\"'gridheader'\">\n                                        <amexio-panel [content-align]=\"'center'\" [expanded]=\"true\">\n                                            <amexio-label [size]=\"'large-9vw-bold'\">\n                                                <u>THE COLLECTION</u>\n                                            </amexio-label>\n                                        </amexio-panel>\n                                    </amexio-grid-item>\n\n                                    <amexio-grid-item [name]=\"'gridheader1'\">\n                                        <amexio-panel [content-align]=\"'center'\" [border]=\"true\" [expanded]=\"true\">\n                                            <amexio-label>\n                                                CLASSIC\n                                            </amexio-label>\n                                            <br>\n                                            <amexio-label>\n                                                <em>\n                                                    <u>Holiday</u>\n                                                </em>\n                                            </amexio-label>\n                                            <br>\n                                            <amexio-label>COLLECTION</amexio-label>\n                                        </amexio-panel>\n                                    </amexio-grid-item>\n                                    <amexio-grid-item [name]=\"'gridheader2'\">\n                                        <h2 class=\"label-block\">\n                                            ART . LOVE . COLOR\n                                        </h2>\n                                    </amexio-grid-item>\n                                    <amexio-grid-item [name]=\"'gridright'\">\n                                        <amexio-panel title=\"Panel\" [expanded]=\"true\">\n                                            Inspired by painter Yago Hortal’s one-of-a-kind, vivid artwork, this set features 40 shades of color for cheeks and eyes.\n                                            The panels easily pop in and out, making it perfectly portable for holiday trips.\n                                            limited-edition kits featuring all of their bestsellers in a range of shades—from\n                                            bold pops of color to always-flattering neutrals.\n                                        </amexio-panel>\n                                        <amexio-panel [content-align]=\"'center'\" [border]=\"true\" [expanded]=\"true\">\n                                            <amexio-label>\n                                                MORE DETAILS\n                                            </amexio-label>\n                                        </amexio-panel>\n                                    </amexio-grid-item>\n                                    <!-- <amexio-grid-item [name]=\"'gridright1'\"> -->\n\n\n                                    <!-- </amexio-grid-item> -->\n                                    <amexio-grid-item [name]=\"'gridfooter1'\">\n                                        <amexio-layout-grid [layout]=\"'gridimagelayout'\">\n                                            <amexio-grid-item [name]=\"'gridimage1'\">\n                                                <amexio-image [path]=\"'assets/images/imggrid.jpg'\" [tooltip]=\"'Image'\"></amexio-image>\n                                            </amexio-grid-item>\n                                            <amexio-grid-item [name]=\"'gridimage2'\">\n                                                <amexio-image [path]=\"'assets/images/imggrid.jpg'\" [tooltip]=\"'Image'\"></amexio-image>\n                                            </amexio-grid-item>\n                                            <amexio-grid-item [name]=\"'gridimage3'\">\n                                                <amexio-image [path]=\"'assets/images/imggrid.jpg'\" [tooltip]=\"'Image'\"></amexio-image>\n                                            </amexio-grid-item>\n                                            <amexio-grid-item [name]=\"'gridimage4'\">\n                                                <amexio-image [path]=\"'assets/images/imggrid.jpg'\" [tooltip]=\"'Image'\"></amexio-image>\n                                            </amexio-grid-item>\n                                        </amexio-layout-grid>\n                                    </amexio-grid-item>\n                                    <amexio-grid-item [name]=\"'gridleft1'\">\n                                        <amexio-label [size]=\"'medium-bold'\">\n                                            Shop By\n                                        </amexio-label>\n                                        <hr/>\n                                        <amexio-layout-grid [layout]=\"'leftlayout'\">\n                                            <amexio-grid-item [name]=\"'leftlayout1'\">\n                                                <amexio-panel [header]=\"false\" [expanded]=\"true\">\n                                                    Makeup\n                                                    <br> Skincare\n                                                    <br> Fragrance\n                                                </amexio-panel>\n\n                                            </amexio-grid-item>\n                                            <amexio-grid-item [name]=\"'leftlayout2'\">\n                                                <amexio-panel [header]=\"false\" [expanded]=\"true\">\n                                                    Bath & Body\n                                                    <br> Hair\n                                                    <br> Nails\n                                                </amexio-panel>\n                                            </amexio-grid-item>\n                                            <amexio-grid-item [name]=\"'leftlayout3'\">\n                                                <amexio-panel [header]=\"false\" [expanded]=\"true\">\n                                                    Tools & Brushes\n                                                    <br> Men\n                                                    <br> Gifts\n                                                </amexio-panel>\n                                            </amexio-grid-item>\n                                            <amexio-grid-item [name]=\"'leftlayout4'\">\n                                                <amexio-panel [header]=\"false\" [expanded]=\"true\">\n                                                    Sales\n                                                    <br> Brands\n                                                </amexio-panel>\n\n                                            </amexio-grid-item>\n\n                                        </amexio-layout-grid>\n                                    </amexio-grid-item>\n                                    <amexio-grid-item [name]=\"'gridmain'\">\n\n                                        <amexio-image path=\"assets/images/grid1.jpg\"></amexio-image>\n\n                                    </amexio-grid-item>\n                                    <amexio-grid-item [name]=\"'gridfooter'\">\n                                        <amexio-panel [content-align]=\"'center'\" [expanded]=\"true\">\n                                            <amexio-label [size]=\"'large-24-bold'\">\n                                                OUR\n                                                <br>\n                                                <em>COMMUNITY</em>\n                                                <br> FEATURING YOU!\n                                            </amexio-label>\n                                        </amexio-panel>\n                                    </amexio-grid-item>\n\n                                </amexio-layout-grid>\n                            </amexio-body>\n                        </amexio-card>\n\n                    </amexio-column>\n                </amexio-row>\n            </amexio-tab>\n            <amexio-tab title=\"API Reference\">\n                <amexio-datagrid title=\"Properties<amexio-layout-grid>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/data/gridlayout.json'\"\n                    [data-reader]=\"'properties'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [data-index]=\"'name'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'version'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Version'\">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'type'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'default'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'description'\" [width]=\"45\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <amexio-datagrid title=\"Properties<amexio-grid-item>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/data/gridlayout.json'\"\n                    [data-reader]=\"'childproperties'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [data-index]=\"'name'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'version'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Version'\">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'type'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'default'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'description'\" [width]=\"45\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n            </amexio-tab>\n            <amexio-tab title=\"Source\">\n                <div style=\"overflow-y: scroll\">\n                    <amexio-vertical-tab-view>\n                        <amexio-tab title=\"HTML\" [active]=\"true\">\n                            <ng-container *ngIf=\"htmlCode\">\n                                <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                                <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"Type Script\">\n                            <ng-container *ngIf=\"typeScriptCode\">\n                                <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n\n                    </amexio-vertical-tab-view>\n                </div>\n            </amexio-tab>\n            <amexio-tab title=\"Live\">\n                <p align=\"center\">Amexio Sandbox</p>\n                <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-gridlayouttwo?embed=1&file=app/layouts/gridlayout/gridlayouttwo/gridlayout.demo.html&view=editor\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n            </amexio-tab>\n        </amexio-tab-view>\n    </amexio-body>\n</amexio-card>\n"

/***/ }),

/***/ "./src/app/layout/gridlayout/gridlayouttwo/gridlayout.demo.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/gridlayout/gridlayouttwo/gridlayout.demo.module.ts ***!
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
/* harmony import */ var _gridlayout_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gridlayout.demo */ "./src/app/layout/gridlayout/gridlayouttwo/gridlayout.demo.ts");
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

/***/ "./src/app/layout/gridlayout/gridlayouttwo/gridlayout.demo.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/gridlayout/gridlayouttwo/gridlayout.demo.ts ***!
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
        this._gridlayoutService.createLayout(this.imageGridDesktop);
        this._gridlayoutService.createLayout(this.imageGridTablet);
        this._gridlayoutService.createLayout(this.imageGridMobile);
        this._gridlayoutService.createLayout(this.leftGridDesktop);
        this._gridlayoutService.createLayout(this.leftGridTablet);
        this._gridlayoutService.createLayout(this.leftGridMobile);
        this._gridlayoutService.createLayout(this.gridDesktop);
        this._gridlayoutService.createLayout(this.gridTablet);
        this._gridlayoutService.createLayout(this.gridMobile);
        this.getHtmlAndTypeScriptCode();
    }
    GridLayoutDemo.prototype.createLayouts = function () {
        this.gridDesktop = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('Layout2', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Desktop)
            .addlayout(["gridheader", "gridheader", "gridheader", "gridheader"])
            .addlayout(["gridheader1", "gridheader1", "gridheader2", "gridheader2"])
            .addlayout(["gridleft1", "gridmain", "gridmain", "gridright"])
            .addlayout(["gridleft1", "gridmain", "gridmain", "gridright"])
            .addlayout(["gridleft1", "gridfooter", "gridfooter1", "gridfooter1"]);
        this.gridTablet = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('Layout2', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Tablet)
            .addlayout(["gridheader", "gridheader", "gridheader", "gridheader"])
            .addlayout(["gridheader1", "gridheader1", "gridheader1", "gridheader1"])
            .addlayout(["gridheader2", "gridheader2", "gridright", "gridright"])
            .addlayout(["gridheader2", "gridheader2", "gridright", "gridright"])
            .addlayout(["gridmain", "gridmain", "gridmain", "gridmain"])
            .addlayout(["gridfooter", "gridfooter", "gridfooter", "gridfooter"])
            .addlayout(["gridfooter1", "gridfooter1", "gridfooter1", "gridfooter1"])
            .addlayout(["gridleft1", "gridleft1", "gridleft1", "gridleft1"]);
        this.gridMobile = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('Layout2', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Mobile)
            .addlayout(["gridheader", "gridheader", "gridheader", "gridheader"])
            .addlayout(["gridheader1", "gridheader1", "gridheader1", "gridheader1"])
            .addlayout(["gridheader2", "gridheader2", "gridheader2", "gridheader2"])
            .addlayout(["gridright", "gridright", "gridright", "gridright"])
            .addlayout(["gridmain", "gridmain", "gridmain", "gridmain"])
            .addlayout(["gridfooter", "gridfooter", "gridfooter", "gridfooter"])
            .addlayout(["gridfooter1", "gridfooter1", "gridfooter1", "gridfooter1"])
            .addlayout(["gridleft1", "gridleft1", "gridleft1", "gridleft1"]);
        this.imageGridDesktop = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('gridimagelayout', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Desktop)
            .addlayout(["gridimage1", "gridimage2", "gridimage3", "gridimage4"]);
        this.imageGridTablet = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('gridimagelayout', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Tablet)
            .addlayout(["gridimage1", "gridimage2", "gridimage3", "gridimage4"]);
        this.imageGridMobile = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('gridimagelayout', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Mobile)
            .addlayout(["gridimage1", "gridimage1", "gridimage2", "gridimage2"])
            .addlayout(["gridimage3", "gridimage3", "gridimage4", "gridimage4"]);
        this.leftGridDesktop = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('leftlayout', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Desktop)
            .addlayout(["leftlayout1", "leftlayout1", "leftlayout1", "leftlayout1"])
            .addlayout(["leftlayout2", "leftlayout2", "leftlayout2", "leftlayout2"])
            .addlayout(["leftlayout3", "leftlayout3", "leftlayout3", "leftlayout3"])
            .addlayout(["leftlayout4", "leftlayout4", "leftlayout4", "leftlayout4"]);
        this.leftGridTablet = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('leftlayout', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Tablet)
            .addlayout(["leftlayout1", "leftlayout2", "leftlayout3", "leftlayout4"]);
        this.leftGridMobile = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('leftlayout', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Mobile)
            .addlayout(["leftlayout1", "leftlayout1", "leftlayout2", "leftlayout2"])
            .addlayout(["leftlayout3", "leftlayout3", "leftlayout4", "leftlayout4"]);
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    GridLayoutDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/data/gridlayout/gridlayoutexp2.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/data/gridlayout/gridlayoutexp2.text', { responseType: 'text' }).subscribe(function (data) {
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
    GridLayoutDemo.prototype.onClick = function () {
    };
    GridLayoutDemo.prototype.onRowSelect = function (data) {
        this.selectedData = data;
    };
    GridLayoutDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gridlayout-demo-exp2',
            template: __webpack_require__(/*! ./gridlayout.demo.html */ "./src/app/layout/gridlayout/gridlayouttwo/gridlayout.demo.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioGridLayoutService"]])
    ], GridLayoutDemo);
    return GridLayoutDemo;
}());



/***/ })

}]);
//# sourceMappingURL=layout-gridlayout-gridlayouttwo-gridlayout-demo-module.js.map