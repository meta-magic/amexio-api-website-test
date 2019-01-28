(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-tree-collapsetree-collapsetree-demo-module"],{

/***/ "./src/app/data/tree/collapsetree/collapsetree.demo.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/data/tree/collapsetree/collapsetree.demo.module.ts ***!
  \********************************************************************/
/*! exports provided: CollapseTreeDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseTreeDemoModule", function() { return CollapseTreeDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _collapsetree_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./collapsetree.demo */ "./src/app/data/tree/collapsetree/collapsetree.demo.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Created by  kedar  on 05/9/18.
 */
var CollapseTreeDemoModule = /** @class */ (function () {
    function CollapseTreeDemoModule() {
    }
    CollapseTreeDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_collapsetree_demo__WEBPACK_IMPORTED_MODULE_6__["CollapseTreeDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _collapsetree_demo__WEBPACK_IMPORTED_MODULE_6__["CollapseTreeDemo"], pathMatch: 'full'
                    }])],
            providers: [amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["IconLoaderService"]]
        })
    ], CollapseTreeDemoModule);
    return CollapseTreeDemoModule;
}());



/***/ }),

/***/ "./src/app/data/tree/collapsetree/collapsetree.demo.ts":
/*!*************************************************************!*\
  !*** ./src/app/data/tree/collapsetree/collapsetree.demo.ts ***!
  \*************************************************************/
/*! exports provided: CollapseTreeDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseTreeDemo", function() { return CollapseTreeDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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


var CollapseTreeDemo = /** @class */ (function () {
    function CollapseTreeDemo(http) {
        this.http = http;
        this.text = "fa fa-minus";
        this.expand = true;
        this.getHtmlAndTypeScriptCode();
        this.treeLocalExpandData = {
            "item": [{
                    "text": "Web App",
                    "expand": true,
                    "children": [
                        {
                            "text": "app",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "Application.js"
                                }
                            ]
                        },
                        {
                            "text": "button",
                            "expand": true,
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
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "ButtonGroup.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Container.js"
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
                            "children": [
                                {
                                    "text": "dom",
                                    "expand": true,
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
    CollapseTreeDemo.prototype.expandAlldata = function (id) {
        if (!this.expand) {
            id.expandAll();
            this.text = "fa fa-minus";
        }
        else {
            id.collapseAll();
            this.text = "fa fa-plus";
        }
        this.expand = !this.expand;
    };
    CollapseTreeDemo.prototype.getNodeData = function (data) {
        this.selectedData = data;
    };
    CollapseTreeDemo.prototype.getNodeDataClick = function (data) {
        this.expandSelectedData = data;
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    CollapseTreeDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/data/tree/collapsetree/collapsetree.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/data/tree/collapsetree/collapsetree.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    CollapseTreeDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    CollapseTreeDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'collapsetree-demo', template: "\n  <amexio-card header=\"true\">\n    <amexio-header>\n    Collapseable and Expandable Tree\n    </amexio-header>\n    <amexio-body>\n        <p>A Collapse and Expandable Tree component which create Tree View based on standard datasource attached.</p>\n        <amexio-tab-view>\n            <amexio-tab title=\"Demo\" active=\"true\">\n                <amexio-row>\n                    <amexio-column size=\"6\">\n                        <amexio-card [header]=\"true\" [footer]=\"true\" [footer-align]=\"'right'\">\n                            <amexio-header style=\"width:100%\">\n                            <amexio-toolbar>\n                            <amexio-toolbar-item position-left >\n                            <amexio-image [ngClass]=\"text\" (click)=\"expandAlldata(id)\">\n                                 </amexio-image>\n                            </amexio-toolbar-item>\n                            <amexio-toolbar-item position-left >\n                             <label style=\"margin-top: 0px; font-size: 18px\">\n                             &nbsp;  &nbsp; Expand all and collapse all function\n                             </label>\n                            </amexio-toolbar-item>\n                            </amexio-toolbar>\n                                \n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-treeview #id [data-reader]=\"'item'\" [data]=\"treeLocalExpandData\" (nodeClick)=\"getNodeDataClick($event)\">\n                                </amexio-treeview>\n                            </amexio-body>\n                            <amexio-action>\n                                </amexio-action>\n                        </amexio-card>\n                    </amexio-column>\n                    <amexio-column size=\"6\" [fit]='true'>\n                        <amexio-card [header]=\"true\">\n                            <amexio-header>\n                                Selected Data\n                            </amexio-header>\n                            <amexio-body>\n                                <pre><code>{{expandSelectedData | json}}</code></pre>\n                            </amexio-body>\n                        </amexio-card>\n                    </amexio-column>\n                </amexio-row>\n            </amexio-tab>\n\n            <amexio-tab title=\"API Reference\">\n                <amexio-datagrid title=\"Properties<amexio-treeview>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/data/tree.json'\"\n                    [data-reader]=\"'properties'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [data-index]=\"'name'\" [width]=\"22\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'version'\"></amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'type'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'default'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'description'\" [width]=\"55\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <amexio-datagrid title=\"Events\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/data/tree.json'\" [data-reader]=\"'events'\"\n                    [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [data-index]=\"'name'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Version'\"></amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'description'\" [width]=\"65\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <amexio-datagrid title=\"Methods\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/data/tree.json'\" [data-reader]=\"'methods'\"\n                [enable-data-filter]=\"false\">\n                <amexio-data-table-column [data-index]=\"'name'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Version'\"></amexio-data-table-column>\n                <amexio-data-table-column [data-index]=\"'description'\" [width]=\"65\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            </amexio-tab>\n            <amexio-tab title=\"Source\">\n                <div style=\"overflow-y: scroll\">\n                    <amexio-vertical-tab-view>\n                        <amexio-tab title=\"HTML\" [active]=\"true\">\n                            <ng-container *ngIf=\"htmlCode\">\n                                <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                                <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"Type Script\">\n                            <ng-container *ngIf=\"typeScriptCode\">\n                                <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                    </amexio-vertical-tab-view>\n                </div>\n            </amexio-tab>\n            <amexio-tab title=\"Live\">\n                <p align=\"center\">Amexio Sandbox</p>\n                <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-collapseble-tree?embed=1&file=app/collapsetree/simpletree/simpletree.demo.html&view=editor\"\n                    frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n            </amexio-tab>\n        </amexio-tab-view>\n    </amexio-body>\n</amexio-card>\n  "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CollapseTreeDemo);
    return CollapseTreeDemo;
}());



/***/ })

}]);
//# sourceMappingURL=data-tree-collapsetree-collapsetree-demo-module.js.map