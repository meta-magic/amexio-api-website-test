(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contextualmenu-contextualmenu-module"],{

/***/ "./src/app/contextualmenu/card/contextmenucardform.demo.html":
/*!*******************************************************************!*\
  !*** ./src/app/contextualmenu/card/contextmenucardform.demo.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   \n    <amexio-api-structure [custom-com-data]=\"customSourceData\"  [url]=\"'assets/componentjson/layouts/card.json'\">\n      <amexio-api-demo>\n   <amexio-row>\n      <amexio-column size=\"12\">\n        <amexio-button [label]=\"'Hide / Un-hide Card'\" [type]=\"'primary'\" [tooltip]=\"'Hide/UnHide Card'\" (click)=\"toggle()\"> </amexio-button>\n      </amexio-column>\n    </amexio-row>\n    <amexio-row>\n      <amexio-column size=\"12\">\n        <amexio-card  [context-menu]=\"rightclickdata\" [header]=\"true\" [footer]=\"true\" [show]=\"flag\" [footer-align]=\"'right'\" height=\"250\">\n          <amexio-header>\n            Employee Registration\n          </amexio-header>\n          <amexio-body>\n            <amexio-row>\n              <amexio-column [size]=\"6\">\n                <amexio-text-input [field-label]=\"'Name'\" name=\"name\" [place-holder]=\"'Enter name'\" [icon-feedback]=\"true\">\n                </amexio-text-input>\n              </amexio-column>\n              <amexio-column [size]=\"6\">\n                <amexio-text-input [field-label]=\"'Local Address'\" name=\"address\" [place-holder]=\"'Enter address'\" [icon-feedback]=\"true\">\n                </amexio-text-input>\n              </amexio-column>\n            </amexio-row>\n            <amexio-row>\n              <amexio-column [size]=\"6\">\n                <amexio-number-input [field-label]=\"'Number Input'\" [place-holder]=\"'Enter Age'\">\n                </amexio-number-input>\n              </amexio-column>\n              <amexio-column [size]=\"6\">\n                <amexio-email-input [field-label]=\"'Email Id'\" name=\"email\" [place-holder]=\"'Enter Email Id'\" [allow-blank]=\"false\" [error-msg]=\"'Please Enter Email Id'\"\n                  [enable-popover]=\"true\" [icon-feedback]=\"true\">\n                </amexio-email-input>\n              </amexio-column>\n            </amexio-row>\n            <amexio-row>\n              <amexio-column [size]=\"6\">\n                <amexio-text-input [field-label]=\"'Father Name'\" name=\"name\" [place-holder]=\"'Enter name'\" [icon-feedback]=\"true\">\n                </amexio-text-input>\n              </amexio-column>\n              <amexio-column [size]=\"6\">\n                <amexio-text-input [field-label]=\"'Present Address'\" name=\"address\" [place-holder]=\"'Enter address'\" [icon-feedback]=\"true\">\n                </amexio-text-input>\n              </amexio-column>\n            </amexio-row>\n            <amexio-row>\n              <amexio-column [size]=\"6\">\n                <amexio-number-input [field-label]=\"'Number Input'\" [place-holder]=\"'Enter Age'\">\n                </amexio-number-input>\n              </amexio-column>\n              <amexio-column [size]=\"6\">\n                <amexio-email-input [field-label]=\"'Father Email Id'\" name=\"email\" [place-holder]=\"'Enter Email Id'\" [allow-blank]=\"false\"\n                  [error-msg]=\"'Please Enter Email Id'\" [enable-popover]=\"true\" [icon-feedback]=\"true\">\n                </amexio-email-input>\n              </amexio-column>\n            </amexio-row>\n          </amexio-body>\n          <amexio-action>\n            <amexio-button [label]=\"'Save'\" [type]=\"'primary'\"></amexio-button>\n          </amexio-action>\n        </amexio-card>\n      </amexio-column>\n    \n    </amexio-row>\n\n    \n</amexio-api-demo>\n</amexio-api-structure>"

/***/ }),

/***/ "./src/app/contextualmenu/card/contextmenucardform.demo.ts":
/*!*****************************************************************!*\
  !*** ./src/app/contextualmenu/card/contextmenucardform.demo.ts ***!
  \*****************************************************************/
/*! exports provided: ContextMenuCardFormDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuCardFormDemo", function() { return ContextMenuCardFormDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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



var ContextMenuCardFormDemo = /** @class */ (function () {
    function ContextMenuCardFormDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
        this.rightclickdata =
            [{ "text": "Add New", "icon": "fa fa-plus", "disabled": true }, { "text": "Edit", "icon": "", "seperator": true },
                { "text": "Send data in email", "icon": "" }];
        this.flag = true;
    }
    ContextMenuCardFormDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    ContextMenuCardFormDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Card contextmenu';
        this.customSourceData.description = 'A Simple Card which renders card based on title, body and actions that user configures with context menu option. (Right Click functionality).';
        this.customSourceData.sourceMetadata.htmlUrl = 'layout/card/carddemo/layout.html';
        this.customSourceData.sourceMetadata.tsUrl = 'layout/card/carddemo/layout.text';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-card-contextmenu-demo?embed=1&file=src/app/contextualmenu/card/card.demo.component.html&view=editor';
    };
    //Toggle event
    ContextMenuCardFormDemo.prototype.toggle = function () {
        this.flag = !this.flag;
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    ContextMenuCardFormDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    ContextMenuCardFormDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contextmenu-card-form',
            template: __webpack_require__(/*! ./contextmenucardform.demo.html */ "./src/app/contextualmenu/card/contextmenucardform.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContextMenuCardFormDemo);
    return ContextMenuCardFormDemo;
}());



/***/ }),

/***/ "./src/app/contextualmenu/contextualmenu.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/contextualmenu/contextualmenu.module.ts ***!
  \*********************************************************/
/*! exports provided: ContextualMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuModule", function() { return ContextualMenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _contextualmenu_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contextualmenu.routes */ "./src/app/contextualmenu/contextualmenu.routes.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _card_contextmenucardform_demo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card/contextmenucardform.demo */ "./src/app/contextualmenu/card/contextmenucardform.demo.ts");
/* harmony import */ var _grid_contextmenugrid_demo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./grid/contextmenugrid.demo */ "./src/app/contextualmenu/grid/contextmenugrid.demo.ts");
/* harmony import */ var _listbox_contextmenulistbox_demo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./listbox/contextmenulistbox.demo */ "./src/app/contextualmenu/listbox/contextmenulistbox.demo.ts");
/* harmony import */ var _panel_contextmenupanel_demo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./panel/contextmenupanel.demo */ "./src/app/contextualmenu/panel/contextmenupanel.demo.ts");
/* harmony import */ var _tab_contextmenutab_demo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tab/contextmenutab.demo */ "./src/app/contextualmenu/tab/contextmenutab.demo.ts");
/* harmony import */ var _window_contextmenuwindow_demo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./window/contextmenuwindow.demo.component */ "./src/app/contextualmenu/window/contextmenuwindow.demo.component.ts");
/* harmony import */ var _tree_contextmenutree_demo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tree/contextmenutree.demo */ "./src/app/contextualmenu/tree/contextmenutree.demo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















/**
 * Created by kedar on 4/2/19.
 */
var ContextualMenuModule = /** @class */ (function () {
    function ContextualMenuModule() {
    }
    ContextualMenuModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_card_contextmenucardform_demo__WEBPACK_IMPORTED_MODULE_8__["ContextMenuCardFormDemo"], _grid_contextmenugrid_demo__WEBPACK_IMPORTED_MODULE_9__["GridWithContextMenuDemo"], _listbox_contextmenulistbox_demo__WEBPACK_IMPORTED_MODULE_10__["ContextMenuListBoxDemo"],
                _panel_contextmenupanel_demo__WEBPACK_IMPORTED_MODULE_11__["ContextMenuPanelDemoComponent"], _tab_contextmenutab_demo__WEBPACK_IMPORTED_MODULE_12__["ContextMenuTabDemo"], _tree_contextmenutree_demo__WEBPACK_IMPORTED_MODULE_14__["ContextMenuTreeDemo"], _window_contextmenuwindow_demo_component__WEBPACK_IMPORTED_MODULE_13__["ContextMenuWindowDemoComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"].forRoot(),
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AmexioWidgetModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(_contextualmenu_routes__WEBPACK_IMPORTED_MODULE_6__["CONTEXTUALMENU_ROUTE"]),
            ],
            providers: []
        })
    ], ContextualMenuModule);
    return ContextualMenuModule;
}());



/***/ }),

/***/ "./src/app/contextualmenu/contextualmenu.routes.ts":
/*!*********************************************************!*\
  !*** ./src/app/contextualmenu/contextualmenu.routes.ts ***!
  \*********************************************************/
/*! exports provided: CONTEXTUALMENU_ROUTE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXTUALMENU_ROUTE", function() { return CONTEXTUALMENU_ROUTE; });
/* harmony import */ var _card_contextmenucardform_demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card/contextmenucardform.demo */ "./src/app/contextualmenu/card/contextmenucardform.demo.ts");
/* harmony import */ var _grid_contextmenugrid_demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid/contextmenugrid.demo */ "./src/app/contextualmenu/grid/contextmenugrid.demo.ts");
/* harmony import */ var _listbox_contextmenulistbox_demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listbox/contextmenulistbox.demo */ "./src/app/contextualmenu/listbox/contextmenulistbox.demo.ts");
/* harmony import */ var _panel_contextmenupanel_demo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panel/contextmenupanel.demo */ "./src/app/contextualmenu/panel/contextmenupanel.demo.ts");
/* harmony import */ var _tab_contextmenutab_demo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab/contextmenutab.demo */ "./src/app/contextualmenu/tab/contextmenutab.demo.ts");
/* harmony import */ var _window_contextmenuwindow_demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./window/contextmenuwindow.demo.component */ "./src/app/contextualmenu/window/contextmenuwindow.demo.component.ts");
/* harmony import */ var _tree_contextmenutree_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tree/contextmenutree.demo */ "./src/app/contextualmenu/tree/contextmenutree.demo.ts");







var CONTEXTUALMENU_ROUTE = [
    {
        path: 'contextmenu-card-form-demo', component: _card_contextmenucardform_demo__WEBPACK_IMPORTED_MODULE_0__["ContextMenuCardFormDemo"],
    },
    {
        path: 'contextual-menu-grid-demo', component: _grid_contextmenugrid_demo__WEBPACK_IMPORTED_MODULE_1__["GridWithContextMenuDemo"],
    },
    {
        path: 'contextual-menu-listbox-demo', component: _listbox_contextmenulistbox_demo__WEBPACK_IMPORTED_MODULE_2__["ContextMenuListBoxDemo"],
    },
    {
        path: 'contextmenu-panel-demo', component: _panel_contextmenupanel_demo__WEBPACK_IMPORTED_MODULE_3__["ContextMenuPanelDemoComponent"],
    },
    {
        path: 'contextual-menu-tab-demo', component: _tab_contextmenutab_demo__WEBPACK_IMPORTED_MODULE_4__["ContextMenuTabDemo"],
    },
    {
        path: 'contextmenu-window-demo', component: _window_contextmenuwindow_demo_component__WEBPACK_IMPORTED_MODULE_5__["ContextMenuWindowDemoComponent"],
    },
    {
        path: 'contextual-menu-tree-demo', component: _tree_contextmenutree_demo__WEBPACK_IMPORTED_MODULE_6__["ContextMenuTreeDemo"],
    },
];


/***/ }),

/***/ "./src/app/contextualmenu/grid/contextmenugrid.demo.html":
/*!***************************************************************!*\
  !*** ./src/app/contextualmenu/grid/contextmenugrid.demo.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   \n   \n   <amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/data/grid.json'\">\n    <amexio-api-demo>\n       \n   <amexio-row>\n      <amexio-column size=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n             Data Grid with Context Menu \n          </amexio-header>\n          <amexio-body>\n            <amexio-datagrid\n              [enable-column-fiter]=\"true\" [context-menu]=\"contextMenuRowData\" [height]=\"200\" title=\"Country Grid\" [enable-checkbox]=\"false\"  [http-method]=\"'get'\" [http-url]=\"'assets/data/componentdata/country.json'\" [data-reader]=\"'data'\"  [page-size] = \"10\">\n              <amexio-data-table-column [data-index]=\"'countryName'\" \n                                        [data-type]=\"'string'\" \n                                        [context-menu]=\"contextMenuColData\"\n                                        [hidden]=\"false\" [text]=\"'Name'\">\n              </amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'countryCode1'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Code'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'currencyName'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Currency'\"></amexio-data-table-column>\n            </amexio-datagrid>\n         <!--   <p><b>Selected row data : </b>{{selectedData | json}}</p>-->\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n\n    </amexio-api-demo>\n    </amexio-api-structure>"

/***/ }),

/***/ "./src/app/contextualmenu/grid/contextmenugrid.demo.ts":
/*!*************************************************************!*\
  !*** ./src/app/contextualmenu/grid/contextmenugrid.demo.ts ***!
  \*************************************************************/
/*! exports provided: GridWithContextMenuDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridWithContextMenuDemo", function() { return GridWithContextMenuDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
        this.contextMenuColData =
            [{ "text": "Add State", "icon": "fa fa-plus", "disabled": true }, { "text": "Edit", "icon": "", "seperator": true },
                { "text": "Delete", "icon": "" }];
        this.contextMenuRowData = [{ "text": "Reload", "icon": "fa fa-refresh", "disabled": false, "seperator": false }, { "text": "Save", "icon": "fa fa-save", "seperator": false },
            { "text": "Delete", "icon": "fa fa-close" }];
    }
    GridWithContextMenuDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    GridWithContextMenuDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Data Grid With context menu';
        this.customSourceData.description = 'Data grid component to render large amount of data-set with various options like sorting in ascending or descending order, client-side pagination, column hide/unhide, single/multi selection, user define template for rendering for column header and column data, displaying summation of numeric column and with context menu(right-click mouse operation).';
        this.customSourceData.sourceMetadata.htmlUrl = 'data/contextmenugrid/contextmenugrid.html';
        this.customSourceData.sourceMetadata.tsUrl = 'data/contextmenugrid/contextmenugrid.text';
        this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/country.json';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-grid-contextmenu?embed=1&file=src/app/contextualmenu/grid/grid.demo.component.html';
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
            selector: 'grid-context-menu-demo',
            template: __webpack_require__(/*! ./contextmenugrid.demo.html */ "./src/app/contextualmenu/grid/contextmenugrid.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GridWithContextMenuDemo);
    return GridWithContextMenuDemo;
}());



/***/ }),

/***/ "./src/app/contextualmenu/listbox/contextmenulistbox.demo.html":
/*!*********************************************************************!*\
  !*** ./src/app/contextualmenu/listbox/contextmenulistbox.demo.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   \n   <amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/data/listbox.json'\">\n    <amexio-api-demo>\n   \n   <amexio-row>\n    <amexio-column size=\"12\">\n      <amexio-card [header]=\"true\">\n        <amexio-header>\n           List Box With Context Menu\n        </amexio-header>\n        <amexio-body>\n          <amexio-listbox [enable-checkbox]=\"true\" [height]=\"400\"\n                          [header]=\"'Contacts'\" [search-placeholder]=\"'Search Contacts'\"\n                          [data]=\"localData\" [filter]=\"true\"\n                          [data-reader]=\"'response.data'\" [context-menu]=\"contextMenuData\"\n                          [display-field]=\"'name_official'\" (selectedRows)=\"getSelectedData($event)\">\n          </amexio-listbox>\n        </amexio-body>\n      </amexio-card>\n    </amexio-column>\n  </amexio-row>\n\n  </amexio-api-demo>\n  </amexio-api-structure>\n\n     \n"

/***/ }),

/***/ "./src/app/contextualmenu/listbox/contextmenulistbox.demo.ts":
/*!*******************************************************************!*\
  !*** ./src/app/contextualmenu/listbox/contextmenulistbox.demo.ts ***!
  \*******************************************************************/
/*! exports provided: ContextMenuListBoxDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuListBoxDemo", function() { return ContextMenuListBoxDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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
 * Created by sagar on 9/1/18.
 */



var ContextMenuListBoxDemo = /** @class */ (function () {
    function ContextMenuListBoxDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
        this.contextMenuData =
            [{ "text": "Add New", "icon": "fa fa-arrows", "disabled": true },
                { "text": "Edit", "icon": "", "seperator": true },
                { "text": "Send data in email", "icon": "" }];
        this.localData = { "response": {
                "success": true,
                "message": "Fetching  Data  Request Succeeded: Profile",
                "data": [
                    {
                        "name": "Buck Kulkarni",
                        "name_official": "Buck Kulkarni",
                        "profile": "buck.jpg",
                        "email": "XYZ@metamagic.in"
                    },
                    {
                        "name": "Araf Karsh Hamid",
                        "name_official": "Araf Karsh Hamid",
                        "profile": "karsh.jpg",
                        "email": "XYZ@metamagic.in"
                    },
                    {
                        "name": "ketan Gote",
                        "name_official": "Ketan Gote",
                        "profile": "ketan.jpg",
                        "email": "XYZ@metamagic.in"
                    },
                    {
                        "name": "Dattaram Gawas",
                        "name_official": "Dattaram Gawas",
                        "profile": "dats.jpg",
                        "email": "XYZ@metamagic.in"
                    },
                    {
                        "name": "Sagar Jadhav",
                        "name_official": "Sagar Jadhav",
                        "profile": "sagar.jpg",
                        "email": "XYZ@metamagic.in"
                    },
                    {
                        "name": "Rashmi Thakkar",
                        "name_official": "Rashmi Thakkar",
                        "profile": "rashmi.jpg",
                        "email": "XYZ@metamagic.in"
                    },
                    {
                        "name": "Deepali Arvind",
                        "name_official": "Deepali Arvind",
                        "profile": "dipali.jpg",
                        "email": "XYZ@metamagic.in"
                    },
                    {
                        "name": "Ashwini Agre",
                        "name_official": "Ashwini Agre",
                        "profile": "ashwini.jpg",
                        "email": "XYZ@metamagic.in"
                    }
                ]
            } };
        this.projectData = {
            "response": {
                "success": true,
                "message": "Fetching  Data  Request Succeeded: Profile",
                "data": [
                    {
                        "name": "Admin Template	",
                        "status": " 65%"
                    },
                    {
                        "name": "Landing Page",
                        "status": "Finished"
                    },
                    {
                        "name": "Backend UI	",
                        "status": "Rejected"
                    },
                    {
                        "name": "Personal Blog",
                        "status": "40%"
                    },
                    {
                        "name": "E-mail Templates	",
                        "status": "13%"
                    },
                    {
                        "name": "Corporate Website",
                        "status": "Pending"
                    }
                ]
            }
        };
        this.browserData = {
            "response": {
                "success": true,
                "message": "Fetching  Data  Request Succeeded: Profile",
                "data": [
                    {
                        "name": "Google Chrome",
                        "usage": "23%",
                        "icon": "GoogleChrome.jpg "
                    },
                    {
                        "name": "Mozila Firefox",
                        "usage": "15%",
                        "icon": "MozilaFirefox.png "
                    },
                    {
                        "name": "Apple Safari",
                        "usage": "7%",
                        "icon": "AppleSafari.png "
                    },
                    {
                        "name": "Internet Explorer",
                        "usage": "9%",
                        "icon": "InternetExplorer.jpeg"
                    },
                    {
                        "name": "Opera mini",
                        "usage": "20%",
                        "icon": "Operamini.jpg"
                    },
                    {
                        "name": "Microsoft edge",
                        "usage": "9%",
                        "icon": "Microsoftedge.jpg"
                    }
                ]
            }
        };
    }
    ContextMenuListBoxDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    ContextMenuListBoxDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'listbox With context menu';
        this.customSourceData.description = 'Simple list box which allows user to select one of more items from list based on configuration. User can provide custom template to change look and feel and with context menu (right-click mouse operation)';
        this.customSourceData.sourceMetadata.htmlUrl = 'data/contextmenulistbox/listbox.html';
        this.customSourceData.sourceMetadata.tsUrl = 'data/contextmenulistbox/listbox.text';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-listbox-contextmenu?embed=1&file=src/app/contextualmenu/list/list.demo.component.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    ContextMenuListBoxDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    ContextMenuListBoxDemo.prototype.onRowClick = function (data) {
        this.onRowClickData = data;
    };
    ContextMenuListBoxDemo.prototype.getSelectedData = function (data) {
        this.selectedData = data;
    };
    ContextMenuListBoxDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contextmenu-listbox-demo',
            template: __webpack_require__(/*! ./contextmenulistbox.demo.html */ "./src/app/contextualmenu/listbox/contextmenulistbox.demo.html"),
            styles: [
                "\n    .listbox-StatusYellow {\n      background-color: yellow;\n    }\n    .listbox-StatusGreen  {\n      background-color: green;\n     }\n    .listbox-StatusRed {\n      background-color: red;\n  }\n  \n.red {\n    color: red!important;\n   \n}\n.green {\n    color: green!important;\n   \n}\n.yellow {\n    color: yellow!important;\n    \n}\n.template-progressBar .progress{\n  height:5px !important;\n}  \n"
            ]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContextMenuListBoxDemo);
    return ContextMenuListBoxDemo;
}());



/***/ }),

/***/ "./src/app/contextualmenu/panel/contextmenupanel.demo.html":
/*!*****************************************************************!*\
  !*** ./src/app/contextualmenu/panel/contextmenupanel.demo.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   \n     <amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/panels/panel.json'\">\n      <amexio-api-demo>\n    <amexio-row>\n    <amexio-column [size]=\"4\">\n    </amexio-column>\n      <amexio-column [size]=\"4\">\n        <amexio-panel [border]=\"true\" [context-menu]=\"rightclickdata\" [header]=\"true\"  title=\"Custom Header\" expanded=\"true\" >\n          <amexio-panel-header>\n            <amexio-image [icon-class]=\"'fa fa-refresh fa-fw'\" (onClick)=\"refreshData()\">\n            </amexio-image>\n          </amexio-panel-header>\n          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n        </amexio-panel>\n        <amexio-dialogue [show-dialogue]=\"refreshDialogue\" [title]=\"'refresh'\" [message]=\"'Data refresh successfully.'\"\n                        [primary-action-label]=\"'ok'\" [message-type]=\"'warning'\" [type]=\"'alert'\">\n        </amexio-dialogue>\n      </amexio-column>\n      <amexio-column [size]=\"4\">\n      </amexio-column>\n    </amexio-row>\n    </amexio-api-demo>\n    </amexio-api-structure>\n    "

/***/ }),

/***/ "./src/app/contextualmenu/panel/contextmenupanel.demo.ts":
/*!***************************************************************!*\
  !*** ./src/app/contextualmenu/panel/contextmenupanel.demo.ts ***!
  \***************************************************************/
/*! exports provided: ContextMenuPanelDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuPanelDemoComponent", function() { return ContextMenuPanelDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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
 * Created by pratik on 16/1/18.
 */



var ContextMenuPanelDemoComponent = /** @class */ (function () {
    function ContextMenuPanelDemoComponent(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
        this.rightclickdata =
            [{ "text": "Add New", "icon": "fa fa-plus", "disabled": true }, { "text": "Edit", "icon": "", "seperator": true },
                { "text": "Send data in email", "icon": "" }];
    }
    ContextMenuPanelDemoComponent.prototype.getDta = function () {
        var _this = this;
        this.asyncFlag = true;
        setTimeout(function () {
            _this.asyncFlag = false;
        }, 3000);
    };
    ContextMenuPanelDemoComponent.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    ContextMenuPanelDemoComponent.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'panel contextmenu';
        this.customSourceData.description = 'Panel provides an easy way to organize big forms by grouping the fields in panel and with context menu functionality (right click option).';
        this.customSourceData.sourceMetadata.htmlUrl = 'layout/panel/panelcontextmenu/panel.html    ';
        this.customSourceData.sourceMetadata.tsUrl = 'layout/panel/panelcontextmenu/panel.text    ';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-panel-contextmenu-demo?embed=1&file=src/app/contextualmenu/panel/panel.demo.component.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    ContextMenuPanelDemoComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    ContextMenuPanelDemoComponent.prototype.refreshData = function () {
        this.refreshDialogue = !this.refreshDialogue;
    };
    ContextMenuPanelDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contextmenu-panel',
            template: __webpack_require__(/*! ./contextmenupanel.demo.html */ "./src/app/contextualmenu/panel/contextmenupanel.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContextMenuPanelDemoComponent);
    return ContextMenuPanelDemoComponent;
}());



/***/ }),

/***/ "./src/app/contextualmenu/tab/contextmenutab.demo.html":
/*!*************************************************************!*\
  !*** ./src/app/contextualmenu/tab/contextmenutab.demo.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    \n      <amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/panels/tab.json'\">\n        <amexio-api-demo>\n    \n    <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'right'\">\n            <amexio-header>\n                Tab layout with default context menu\n            </amexio-header>\n            <amexio-body>\n                <amexio-tab-view [tab-position]=\"'top'\" [default-context-menu]=\"true\">\n                    <amexio-tab title=\"Person\" [active]=\"true\" [closable]=\"true\">\n                        Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                        Lorem Ipsum has been the industry's standard\n                        dummy text ever since the 1500s, when an unknown printer took a galley of type and\n                        scrambled it to make a\n                        type specimen book.\n                    </amexio-tab>\n                    <amexio-tab title=\"Work\">\n                        Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit\n                        nisi. Nunc sit amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non\n                        eleifend nisi. Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                    <amexio-tab title=\"Education\" [closable]=\"true\">\n                        Education Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit\n                        nisi. Nunc sit amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non\n                        eleifend nisi. Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                </amexio-tab-view>\n            </amexio-body>\n        </amexio-card>\n        <br>\n        <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'right'\">\n            <amexio-header>\n                Tab layout with custom context menu\n            </amexio-header>\n            <amexio-body>\n                <amexio-tab-view [context-menu]=\"rightclickdata\">\n                    <amexio-tab title=\"Person\" [active]=\"true\">\n                        Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                        Lorem Ipsum has been the industry's standard\n                        dummy text ever since the 1500s, when an unknown printer took a galley of type and\n                        scrambled it to make a\n                        type specimen book.\n                    </amexio-tab>\n                    <amexio-tab title=\"Work\">\n                        Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit\n                        nisi. Nunc sit amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non\n                        eleifend nisi. Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                    <amexio-tab title=\"Education\">\n                        Education Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit\n                        nisi. Nunc sit amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non\n                        eleifend nisi. Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                    <amexio-tab title=\"Hobbies\">\n                        Hobbies Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit\n                        nisi. Nunc sit amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non\n                        eleifend nisi. Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                </amexio-tab-view>\n            </amexio-body>\n        </amexio-card>"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
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
    }
    ContextMenuTabDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    ContextMenuTabDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'context menu Tab ';
        this.customSourceData.description = 'Tab component for Angular Apps with multiple configurations such as Tab, Icon support, Scrollable tabs, Closable tab, Vertical Tabs and with custom context menu (right click operation) and default context menu(close all and close others).';
        this.customSourceData.sourceMetadata.htmlUrl = 'layout/tab/contextmenutab/tab.html';
        this.customSourceData.sourceMetadata.tsUrl = 'layout/tab/contextmenutab/tab.text';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-tab-contextualmenu?embed=1&file=src/app/contextualmenu/tab/contextmenutab.demo.html&view=editor';
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
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContextMenuTabDemo);
    return ContextMenuTabDemo;
}());



/***/ }),

/***/ "./src/app/contextualmenu/tree/contextmenutree.demo.html":
/*!***************************************************************!*\
  !*** ./src/app/contextualmenu/tree/contextmenutree.demo.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   \n    <amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/data/tree.json'\">\n      <amexio-api-demo>\n   <amexio-row>\n      <amexio-column size=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n              Tree With Context Menu \n          </amexio-header>\n          <amexio-body>\n            <amexio-treeview [data-reader]=\"'data'\" [data]=\"treeLocalData\" [context-menu]=\"rightclickdata\">\n            </amexio-treeview>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n    </amexio-api-demo>\n    </amexio-api-structure>"

/***/ }),

/***/ "./src/app/contextualmenu/tree/contextmenutree.demo.ts":
/*!*************************************************************!*\
  !*** ./src/app/contextualmenu/tree/contextmenutree.demo.ts ***!
  \*************************************************************/
/*! exports provided: ContextMenuTreeDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuTreeDemo", function() { return ContextMenuTreeDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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



var ContextMenuTreeDemo = /** @class */ (function () {
    function ContextMenuTreeDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
        this.rightclickdata =
            [{ "text": "Add New", "icon": "fa fa-plus", "disabled": true }, { "text": "Edit", "icon": "", "seperator": true },
                { "text": "Send data in email", "icon": "" }];
        this.treeLocalData = {
            "data": [{
                    "text": "Web App",
                    "expand": true,
                    "children": [
                        {
                            "text": "app",
                            "expand": true,
                            "badge": 1,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "Application.js",
                                }
                            ]
                        },
                        {
                            "text": "button",
                            "expand": true,
                            "badge": 3,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "Button.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Cycle.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Split.js"
                                }
                            ]
                        },
                        {
                            "text": "container",
                            "expand": true,
                            "badge": 3,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "ButtonGroup.js",
                                },
                                {
                                    "leaf": true,
                                    "text": "Container.js",
                                },
                                {
                                    "leaf": true,
                                    "text": "Viewport.js",
                                    "expand": true,
                                    "children": [],
                                    "lazy": {
                                        "http-url": "data/treeview.json",
                                        "http-method": "get"
                                    }
                                }
                            ]
                        },
                        {
                            "text": "core",
                            "expand": true,
                            "badge": 1,
                            "children": [
                                {
                                    "text": "dom",
                                    "expand": true,
                                    "badge": 2,
                                    "children": [
                                        {
                                            "leaf": true,
                                            "text": "Element.form.js"
                                        },
                                        {
                                            "leaf": true,
                                            "text": "Element.static-more.js"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }]
        };
    }
    ContextMenuTreeDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    ContextMenuTreeDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Tree With context menu';
        this.customSourceData.description = 'A Expandable Tree component which create Tree View based on standard datasource with context menu (right-click mouse operation).';
        this.customSourceData.sourceMetadata.htmlUrl = 'data/tree/contextmenutree/tree.html';
        this.customSourceData.sourceMetadata.tsUrl = 'data/tree/contextmenutree/tree.text';
        this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/treeview.json';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-tree-contextmenu-demo?embed=1&file=src/app/contextualmenu/tree/tree.demo.component.html';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    ContextMenuTreeDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    ContextMenuTreeDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contextmenutree-demo',
            template: __webpack_require__(/*! ./contextmenutree.demo.html */ "./src/app/contextualmenu/tree/contextmenutree.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContextMenuTreeDemo);
    return ContextMenuTreeDemo;
}());



/***/ }),

/***/ "./src/app/contextualmenu/window/contextmenuwindow.demo.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/contextualmenu/window/contextmenuwindow.demo.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/panels/window.json'\">\n    <amexio-api-demo>\n\n\n        <amexio-card [header]=\"true\">\n            <amexio-header> Window With Context-Menu </amexio-header>\n            <amexio-body>\n                <amexio-row>\n                    <amexio-column [size]=\"4\"></amexio-column>\n                    <amexio-column [size]=\"4\">\n                        <amexio-button type=\"success\" (onClick)=\"toggleBasicWindow('material')\" label=\"Context-Menu Window\"></amexio-button>\n                        <amexio-window [body-height]=\"40\" [context-menu]=\"rightclickdata\" [(show)]=\"showBasicWindowMaterial\"\n                            [close-on-escape]=\"true\" [material-design]=\"true\" [footer]=\"true\" [vertical-position]=\"'top'\"\n                            [horizontal-position]=\"'center'\">\n                            <amexio-header>\n                                Employee Form\n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-row>\n                                    <amexio-column [size]=\"6\">\n                                        <amexio-text-input [field-label]=\"'Name'\" name=\"country\" [place-holder]=\"'Enter name'\"\n                                            [enable-popover]=\"true\" [icon-feedback]=\"true\" [allow-blank]=\"false\"\n                                            [error-msg]=\"'Please enter name'\" [min-length]=\"3\" [max-length]=\"15\"\n                                            [min-error-msg]=\"'Name should be minimum 3 characters'\" [max-error-msg]=\"'Name should be less than 15 characters'\">\n                                        </amexio-text-input>\n                                    </amexio-column>\n                                    <amexio-column [size]=\"6\">\n                                        <amexio-text-input [field-label]=\"'Surname'\" name=\"name\" [place-holder]=\"'Enter surname'\"\n                                            [enable-popover]=\"true\" [icon-feedback]=\"true\" [allow-blank]=\"false\"\n                                            [error-msg]=\"'Please enter Surname'\" [min-length]=\"3\" [max-length]=\"15\"\n                                            [min-error-msg]=\"'Surname should be minimum 3 characters'\" [max-error-msg]=\"'Surname should be less than 15 characters'\">\n                                        </amexio-text-input>\n                                    </amexio-column>\n                                </amexio-row>\n\n                                <amexio-row>\n                                    <amexio-column [size]=\"6\">\n                                        <amexio-text-input [field-label]=\"'Description'\" name=\"country\" [place-holder]=\"'Description'\"\n                                            [enable-popover]=\"true\" [icon-feedback]=\"true\" [allow-blank]=\"false\"\n                                            [error-msg]=\"'Please enter name'\" [min-length]=\"3\" [max-length]=\"15\"\n                                            [min-error-msg]=\"'Name should be minimum 3 characters'\" [max-error-msg]=\"'Name should be less than 15 characters'\">\n                                        </amexio-text-input>\n                                    </amexio-column>\n                                    <amexio-column [size]=\"6\">\n                                        <amexio-text-input [field-label]=\"'Hobbies'\" name=\"name\" [place-holder]=\"'Hobbies'\"\n                                            [enable-popover]=\"true\" [icon-feedback]=\"true\" [allow-blank]=\"false\"\n                                            [error-msg]=\"'Please enter Surname'\" [min-length]=\"3\" [max-length]=\"15\"\n                                            [min-error-msg]=\"'Surname should be minimum 3 characters'\" [max-error-msg]=\"'Surname should be less than 15 characters'\">\n                                        </amexio-text-input>\n                                    </amexio-column>\n                                </amexio-row>\n\n                                <amexio-row>\n                                    <amexio-column [size]=\"6\">\n\n                                        <amexio-textarea-input [field-label]=\"'Address'\" name=\"Address\" [place-holder]=\"'Enter address'\"\n                                            [error-msg]=\"'Please enter address'\" [icon-feedback]=\"true\" [rows]=\"'1'\"\n                                            [columns]=\"'2'\" [allow-blank]=\"false\" [enable-popover]=\"true\">\n                                        </amexio-textarea-input>\n                                    </amexio-column>\n                                </amexio-row>\n                                <amexio-row>\n                                    <amexio-column [size]=\"6\">\n                                        <amexio-text-input [field-label]=\"'Phone'\" name=\"country\" [place-holder]=\"'Phone'\"\n                                            [enable-popover]=\"true\" [icon-feedback]=\"true\" [allow-blank]=\"false\"\n                                            [error-msg]=\"'Please enter name'\" [min-length]=\"3\" [max-length]=\"15\"\n                                            [min-error-msg]=\"'Name should be minimum 3 characters'\" [max-error-msg]=\"'Name should be less than 15 characters'\">\n                                        </amexio-text-input>\n                                    </amexio-column>\n                                    <amexio-column [size]=\"6\">\n                                        <amexio-text-input [field-label]=\"'Email'\" name=\"name\" [place-holder]=\"'Email'\"\n                                            [enable-popover]=\"true\" [icon-feedback]=\"true\" [allow-blank]=\"false\"\n                                            [error-msg]=\"'Please enter Surname'\" [min-length]=\"3\" [max-length]=\"15\"\n                                            [min-error-msg]=\"'Surname should be minimum 3 characters'\" [max-error-msg]=\"'Surname should be less than 15 characters'\">\n                                        </amexio-text-input>\n                                    </amexio-column>\n                                </amexio-row>\n\n                            </amexio-body>\n                            <amexio-action>\n                                <amexio-button [type]=\"'default'\" (onClick)=\"showBasicWindowMaterial = false\" label=\"Cancel\"></amexio-button>\n                                &nbsp;&nbsp;&nbsp;\n                                <amexio-button [type]=\"'theme-color'\" (onClick)=\"showBasicWindowMaterial = false\" label=\"Save\"></amexio-button>\n                            </amexio-action>\n\n                        </amexio-window>\n\n                    </amexio-column>\n                    <amexio-column [size]=\"4\"></amexio-column>\n                </amexio-row>\n            </amexio-body>\n        </amexio-card>\n\n    </amexio-api-demo>\n</amexio-api-structure>"

/***/ }),

/***/ "./src/app/contextualmenu/window/contextmenuwindow.demo.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/contextualmenu/window/contextmenuwindow.demo.component.ts ***!
  \***************************************************************************/
/*! exports provided: ContextMenuWindowDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuWindowDemoComponent", function() { return ContextMenuWindowDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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
 * Created by pratik on 16/1/18.
 */



var ContextMenuWindowDemoComponent = /** @class */ (function () {
    function ContextMenuWindowDemoComponent(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
        this.rightclickdata =
            [{ "text": "Add New", "icon": "fa fa-plus", "disabled": true }, { "text": "Edit", "icon": "", "seperator": true },
                { "text": "Send data in email", "icon": "" }];
    }
    ContextMenuWindowDemoComponent.prototype.getDta = function () {
        var _this = this;
        this.asyncFlag = true;
        setTimeout(function () {
            _this.asyncFlag = false;
        }, 3000);
    };
    ContextMenuWindowDemoComponent.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    ContextMenuWindowDemoComponent.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'context menu window ';
        this.customSourceData.description = 'Window Pane component is a customizable Modal Pane in which user can enter custom content';
        this.customSourceData.sourceMetadata.htmlUrl = 'pane/contextmenuwindow/window.html';
        this.customSourceData.sourceMetadata.tsUrl = 'pane/contextmenuwindow/window.text';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-window-contextmenu-demo?embed=1&file=src/app/contextualmenu/window/window.demo.component.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    ContextMenuWindowDemoComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    ContextMenuWindowDemoComponent.prototype.toggleBasicWindow = function (data) {
        if (data == 'material') {
            this.showBasicWindowMaterial = !this.showBasicWindowMaterial;
        }
        else {
            this.showBasicWindowNonMaterial = !this.showBasicWindowNonMaterial;
        }
    };
    ContextMenuWindowDemoComponent.prototype.toggleMaxWindow = function (data) {
        if (data == 'material') {
            this.showMaxWindowMaterial = !this.showMaxWindowMaterial;
        }
        else {
            this.showMaxWindowNonMaterial = !this.showMaxWindowNonMaterial;
        }
    };
    ContextMenuWindowDemoComponent.prototype.toggleClosable = function (data) {
        if (data == 'material') {
            this.showClosableMaterial = !this.showClosableMaterial;
        }
        else {
            this.showClosableNonMaterial = !this.showClosableNonMaterial;
        }
    };
    ContextMenuWindowDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contextmenu-window',
            template: __webpack_require__(/*! ./contextmenuwindow.demo.component.html */ "./src/app/contextualmenu/window/contextmenuwindow.demo.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContextMenuWindowDemoComponent);
    return ContextMenuWindowDemoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=contextualmenu-contextualmenu-module.js.map