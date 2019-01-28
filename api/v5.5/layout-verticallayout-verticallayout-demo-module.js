(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-verticallayout-verticallayout-demo-module"],{

/***/ "./src/app/layout/verticallayout/verticallayout.demo.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/verticallayout/verticallayout.demo.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card header=\"true\">\n    <amexio-header>\n        vertical Layouts\n    </amexio-header>\n    <amexio-body>\n        <p>\n                A Vertical layout lays out a container with single column and multiple rows.\n        </p>\n        <amexio-tab-view>\n            <amexio-tab title=\"Demo\" active=\"true\">\n\n                <amexio-layout-columns [orientation]=\"'horizontal'\" [border]=\"false\">\n                    <amexio-layout-item style=\"height:300px;\" [fit]=\"true\" *ngFor=\"let alignment of ['start','space-between','center']\">\n\n                        <b>Alignment is {{alignment}}</b>\n\n                        <amexio-layout-columns [fit]=\"true\" [border]=\"true\" [orientation]=\"'vertical'\" [alignment]=\"alignment\">\n                            <amexio-layout-item *ngFor=\"let item of  ['1','2','3']\">\n\n                                <amexio-panel [header]=\"true\" [border]=\"false\" [title]=\"'Panel'+item\" [expanded]=\"(item === '1') \">\n                                    <amexio-label>\n                                        Panel Content\n                                    </amexio-label>\n                                </amexio-panel>\n                            </amexio-layout-item>\n\n                        </amexio-layout-columns>\n                    </amexio-layout-item>\n                </amexio-layout-columns>\n                <br /><br />\n                <hr />\n\n\n\n\n                <amexio-layout-columns [orientation]=\"'horizontal'\" [border]=\"false\">\n                    <amexio-layout-item style=\"height:300px;\" [fit]=\"true\" *ngFor=\"let alignment of ['start','space-between','center']\">\n\n                        <b>Alignment is {{alignment}}</b>\n\n                        <amexio-layout-columns [fit]=\"true\" [border]=\"true\" [orientation]=\"'vertical'\" [alignment]=\"alignment\">\n                            <amexio-layout-item *ngFor=\"let item of  ['1','2','3']\">\n\n                                <amexio-panel [border]=\"true\" [header]=\"false\" [title]=\"'item'\" [expanded]=\"true\">\n                                    <amexio-label>\n                                        Panel Content\n                                    </amexio-label>\n                                </amexio-panel>\n                            </amexio-layout-item>\n\n                        </amexio-layout-columns>\n                    </amexio-layout-item>\n                </amexio-layout-columns>\n\n                <br /><br />\n                <hr />\n                <amexio-layout-columns [orientation]=\"'horizontal'\" [border]=\"false\">\n                    <amexio-layout-item style=\"height:300px;\" [fit]=\"true\" *ngFor=\"let alignment of ['end','space-around','space-evenly']\">\n\n                        <b>Alignment is {{alignment}}</b>\n\n                        <amexio-layout-columns [fit]=\"true\" [border]=\"false\" [orientation]=\"'vertical'\" [alignment]=\"alignment\">\n                            <amexio-layout-item *ngFor=\"let item of  ['1','2','3']\">\n\n                                <amexio-panel [border]=\"true\" [header]=\"false\" [title]=\"'item'\" [expanded]=\"true\">\n                                    <amexio-label>\n                                        Panel Content\n                                    </amexio-label>\n                                </amexio-panel>\n                            </amexio-layout-item>\n\n                        </amexio-layout-columns>\n                    </amexio-layout-item>\n                </amexio-layout-columns>\n\n\n                <br /> <br />\n\n                <b> Demo - Horizontal + Column Layout </b>\n                <hr />\n                <div style=\"height: 300px;\">\n\n                    <amexio-layout-columns [fit]=\"true\" [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"'space-between'\">\n                        <amexio-layout-item [padding]=\"'0px'\" [fit]=\"true\">\n                            <amexio-layout-columns [border]=\"true\" [orientation]=\"'vertical'\" [alignment]=\"'space-between'\">\n                                <amexio-layout-item *ngFor=\"let item of ['1','2','3']\">\n                                    Vertical item <b>{{item}}</b>\n                                </amexio-layout-item>\n                            </amexio-layout-columns>\n                        </amexio-layout-item>\n\n                        <amexio-layout-item [padding]=\"'0px 5px'\" [fit]=\"true\">\n                            <amexio-layout-columns [border]=\"true\" [orientation]=\"'vertical'\" [alignment]=\"'space-between'\">\n                                <amexio-layout-item *ngFor=\"let item of ['start','center','end']\">\n                                    <amexio-layout-columns [border]=\"true\" [orientation]=\"'horizontal'\" [alignment]=\"item\">\n                                        <amexio-layout-item *ngFor=\"let litem of ['1','2']\">\n                                            Horizontal <b> {{item}} {{litem}}</b>\n                                        </amexio-layout-item>\n                                    </amexio-layout-columns>\n                                </amexio-layout-item>\n                            </amexio-layout-columns>\n                        </amexio-layout-item>\n\n                        <amexio-layout-item [padding]=\"'0px 5px'\" [fit]=\"true\">\n                            <amexio-layout-columns [border]=\"true\" [orientation]=\"'vertical'\" [alignment]=\"'start'\">\n                                <amexio-layout-item [fit]=\"true\" *ngFor=\"let alignment of  ['start','center','end','space-between','space-around','space-evenly']\">\n                                    <amexio-layout-columns [border]=\"true\" [orientation]=\"'horizontal'\" [alignment]=\"alignment\">\n                                        <amexio-layout-item *ngFor=\"let item of ['1','2']\">\n                                            Hor {{alignment}} {{item}}\n                                        </amexio-layout-item>\n                                    </amexio-layout-columns>\n                                </amexio-layout-item>\n                            </amexio-layout-columns>\n                        </amexio-layout-item>\n\n                    </amexio-layout-columns>\n\n                </div>\n\n\n\n\n            </amexio-tab>\n\n\n            <amexio-tab title=\"API Reference\">\n                <amexio-datagrid title=\"Properties <amexio-layout-columns>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\"\n                    [http-url]=\"'assets/apireference/layout/verticallayout.json'\" [data-reader]=\"'properties'\"\n                    [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Version'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <amexio-datagrid title=\"Properties : <Amexio-layout-item>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\"\n                    [http-url]=\"'assets/apireference/layout/verticallayout.json'\" [data-reader]=\"'propertiesitem'\"\n                    [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Version'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"35\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n\n\n            </amexio-tab>\n\n\n            <amexio-tab title=\"Source\">\n                <div style=\"overflow-y: scroll\">\n                    <amexio-vertical-tab-view>\n                        <amexio-tab title=\"HTML\" [active]=\"true\">\n                            <ng-container *ngIf=\"htmlCode\">\n                                <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                                <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"type Script\">\n                            <ng-container *ngIf=\"typeScriptCode\">\n                                <prism-block [code]=\"typeScriptCode\" [language]=\"'typeScriptCode'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                    </amexio-vertical-tab-view>\n                </div>\n            </amexio-tab>\n            <amexio-tab title=\"Live\">\n                <p align=\"center\">Amexio Sandbox</p>\n                <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-column-vertical?embed=1&file=app/layout/verticallayout/verticallayout.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n            </amexio-tab>\n\n\n\n\n\n        </amexio-tab-view>\n    </amexio-body>\n</amexio-card>\n<!--<amexio-notification [data]=\"copyMsgArray\"></amexio-notification>-->"

/***/ }),

/***/ "./src/app/layout/verticallayout/verticallayout.demo.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/verticallayout/verticallayout.demo.module.ts ***!
  \*********************************************************************/
/*! exports provided: VerticalLayoutDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalLayoutDemoModule", function() { return VerticalLayoutDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _verticallayout_demo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./verticallayout.demo */ "./src/app/layout/verticallayout/verticallayout.demo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Created by kedar on 14/11/18.
 */
var VerticalLayoutDemoModule = /** @class */ (function () {
    function VerticalLayoutDemoModule() {
    }
    VerticalLayoutDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_verticallayout_demo__WEBPACK_IMPORTED_MODULE_7__["verticalLayoutDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"], _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _verticallayout_demo__WEBPACK_IMPORTED_MODULE_7__["verticalLayoutDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], VerticalLayoutDemoModule);
    return VerticalLayoutDemoModule;
}());



/***/ }),

/***/ "./src/app/layout/verticallayout/verticallayout.demo.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/verticallayout/verticallayout.demo.ts ***!
  \**************************************************************/
/*! exports provided: verticalLayoutDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verticalLayoutDemo", function() { return verticalLayoutDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/**
 * Created by sagar on 9/1/18.
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


var verticalLayoutDemo = /** @class */ (function () {
    function verticalLayoutDemo(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
    }
    //TO LOAD HTML AND TYPESCRIPT CODE
    verticalLayoutDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/layout/verticallayout/layout.html').subscribe(function (data) {
            responseHtml = data.text();
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/layout/verticallayout/layout.text').subscribe(function (data) {
            responseTs = data.text();
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    verticalLayoutDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    verticalLayoutDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vertical-layout',
            template: __webpack_require__(/*! ./verticallayout.demo.html */ "./src/app/layout/verticallayout/verticallayout.demo.html")
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], verticalLayoutDemo);
    return verticalLayoutDemo;
}());



/***/ })

}]);
//# sourceMappingURL=layout-verticallayout-verticallayout-demo-module.js.map