(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contextualmenu-tab-contextmenutab-demo-module"],{

/***/ "./src/app/contextualmenu/tab/contextmenutab.demo.html":
/*!*************************************************************!*\
  !*** ./src/app/contextualmenu/tab/contextmenutab.demo.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card header=\"true\">\n    <amexio-header>\n        Tab with Context Menu\n    </amexio-header>\n    <amexio-body>\n        <p>Tab component for Angular Apps with multiple configurations such as Tab, Icon support, Scrollable tabs,\n            Closable tab, Vertical Tabs and with custom context menu (right click operation) and default context\n            menu(close all and close others) </p>\n        <amexio-tab-view>\n            <amexio-tab title=\"Demo\" active=\"true\">\n                <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'right'\">\n                    <amexio-header>\n                        Tab layout with default context menu\n                    </amexio-header>\n                    <amexio-body>\n                        <amexio-tab-view [tab-position]=\"'top'\" [default-context-menu]=\"true\">\n                            <amexio-tab title=\"Person\" [active]=\"true\" [closable]=\"true\">\n                                Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                                Lorem Ipsum has been the industry's standard\n                                dummy text ever since the 1500s, when an unknown printer took a galley of type and\n                                scrambled it to make a\n                                type specimen book.\n                            </amexio-tab>\n                            <amexio-tab title=\"Work\">\n                                Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit\n                                nisi. Nunc sit amet aliquet risus. Aenean\n                                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non\n                                eleifend nisi. Phasellus\n                                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                            </amexio-tab>\n                            <amexio-tab title=\"Education\" [closable]=\"true\">\n                                Education Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit\n                                nisi. Nunc sit amet aliquet risus. Aenean\n                                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non\n                                eleifend nisi. Phasellus\n                                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                            </amexio-tab>\n                        </amexio-tab-view>\n                    </amexio-body>\n                </amexio-card>\n                <br>\n                <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'right'\">\n                    <amexio-header>\n                        Tab layout with custom context menu\n                    </amexio-header>\n                    <amexio-body>\n                        <amexio-tab-view [context-menu]=\"rightclickdata\">\n                            <amexio-tab title=\"Person\" [active]=\"true\">\n                                Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                                Lorem Ipsum has been the industry's standard\n                                dummy text ever since the 1500s, when an unknown printer took a galley of type and\n                                scrambled it to make a\n                                type specimen book.\n                            </amexio-tab>\n                            <amexio-tab title=\"Work\">\n                                Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit\n                                nisi. Nunc sit amet aliquet risus. Aenean\n                                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non\n                                eleifend nisi. Phasellus\n                                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                            </amexio-tab>\n                            <amexio-tab title=\"Education\">\n                                Education Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit\n                                nisi. Nunc sit amet aliquet risus. Aenean\n                                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non\n                                eleifend nisi. Phasellus\n                                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                            </amexio-tab>\n                            <amexio-tab title=\"Hobbies\">\n                                Hobbies Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit\n                                nisi. Nunc sit amet aliquet risus. Aenean\n                                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non\n                                eleifend nisi. Phasellus\n                                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                            </amexio-tab>\n                        </amexio-tab-view>\n                    </amexio-body>\n                </amexio-card>\n            </amexio-tab>\n            <amexio-tab title=\"API Reference\">\n                <amexio-datagrid title=\"Tab View Properties <amexio-tab-view>\" [enable-column-fiter]=\"false\"\n                    [http-method]=\"'get'\" [http-url]=\"'assets/apireference/layout/tab/contextmenu-tab/contextmenutab.json'\"\n                    [data-reader]=\"'properties'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Version'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <amexio-datagrid title=\"Tab Properties <amexio-tab>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\"\n                    [http-url]=\"'assets/apireference/layout/tab/contextmenu-tab/contextmenutab.json'\" [data-reader]=\"'tabproperties'\"\n                    [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Version'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <amexio-datagrid title=\"Tab Events\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/layout/tab/contextmenu-tab/contextmenutab.json'\"\n                    [data-reader]=\"'events'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"20\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Version'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"70\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <amexio-datagrid title=\"Tab Methods\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/layout/tab/horizontaltab.json'\"\n                    [data-reader]=\"'methods'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"40\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"20\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Version'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"40\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n\n            </amexio-tab>\n            <amexio-tab title=\"Source\">\n                <div style=\"overflow-y: scroll\">\n                    <amexio-vertical-tab-view>\n                        <amexio-tab title=\"HTML\" [active]=\"true\">\n                            <ng-container *ngIf=\"htmlCode\">\n                                <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                                <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"Type Script\">\n                            <ng-container *ngIf=\"typeScriptCode\">\n                                <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                    </amexio-vertical-tab-view>\n                </div>\n            </amexio-tab>\n            <amexio-tab title=\"Live\">\n                <p align=\"center\">Amexio Sandbox</p>\n                <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-tab-contextualmenu?embed=1&file=src/app/contextualmenu/tab/contextmenutab.demo.html&view=editor\"\n                    frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n            </amexio-tab>\n        </amexio-tab-view>\n    </amexio-body>\n</amexio-card>"

/***/ }),

/***/ "./src/app/contextualmenu/tab/contextmenutab.demo.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/contextualmenu/tab/contextmenutab.demo.module.ts ***!
  \******************************************************************/
/*! exports provided: ContextMenuTabDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuTabDemoModule", function() { return ContextMenuTabDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _contextmenutab_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contextmenutab.demo */ "./src/app/contextualmenu/tab/contextmenutab.demo.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Created by Rashmi on 09/7/18.
 */
var ContextMenuTabDemoModule = /** @class */ (function () {
    function ContextMenuTabDemoModule() {
    }
    ContextMenuTabDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_contextmenutab_demo__WEBPACK_IMPORTED_MODULE_6__["ContextMenuTabDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"], _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _contextmenutab_demo__WEBPACK_IMPORTED_MODULE_6__["ContextMenuTabDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], ContextMenuTabDemoModule);
    return ContextMenuTabDemoModule;
}());



/***/ }),

/***/ "./src/app/contextualmenu/tab/contextmenutab.demo.ts":
/*!***********************************************************!*\
  !*** ./src/app/contextualmenu/tab/contextmenutab.demo.ts ***!
  \***********************************************************/
/*! exports provided: ContextMenuTabDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuTabDemo", function() { return ContextMenuTabDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/**
 * Created by rashmi on 9/1/18.
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


var ContextMenuTabDemo = /** @class */ (function () {
    function ContextMenuTabDemo(http) {
        this.http = http;
        this.rightclickdata = [
            {
                "text": "Back",
                "icon": "fa fa-arrow-left",
                "disabled": true
            },
            {
                "text": "Reload",
                "icon": "fa fa-refresh",
                "seperator": false
            },
            {
                "text": "Save",
                "icon": "fa fa-save"
            }
        ];
        this.getHtmlAndTypeScriptCode();
    }
    //TO LOAD HTML AND TYPESCRIPT CODE
    ContextMenuTabDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/layout/tab/contextmenutab/tab.html').subscribe(function (data) {
            responseHtml = data.text();
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/layout/tab/contextmenutab/tab.text').subscribe(function (data) {
            responseTs = data.text();
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    ContextMenuTabDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    ContextMenuTabDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'context-menu-tab-demo',
            template: __webpack_require__(/*! ./contextmenutab.demo.html */ "./src/app/contextualmenu/tab/contextmenutab.demo.html")
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ContextMenuTabDemo);
    return ContextMenuTabDemo;
}());



/***/ })

}]);
//# sourceMappingURL=contextualmenu-tab-contextmenutab-demo-module.js.map