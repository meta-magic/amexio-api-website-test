(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-tree-simpletree-simpletree-demo-module"],{

/***/ "./src/app/data/tree/simpletree/simpletree.demo.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/data/tree/simpletree/simpletree.demo.module.ts ***!
  \****************************************************************/
/*! exports provided: SimpleTreeDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleTreeDemoModule", function() { return SimpleTreeDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _simpletree_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./simpletree.demo */ "./src/app/data/tree/simpletree/simpletree.demo.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Created by sagar on 11/1/18.
 */
var SimpleTreeDemoModule = /** @class */ (function () {
    function SimpleTreeDemoModule() {
    }
    SimpleTreeDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_simpletree_demo__WEBPACK_IMPORTED_MODULE_6__["SimpleTreeDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _simpletree_demo__WEBPACK_IMPORTED_MODULE_6__["SimpleTreeDemo"], pathMatch: 'full'
                    }])],
            providers: [amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["IconLoaderService"]]
        })
    ], SimpleTreeDemoModule);
    return SimpleTreeDemoModule;
}());



/***/ }),

/***/ "./src/app/data/tree/simpletree/simpletree.demo.ts":
/*!*********************************************************!*\
  !*** ./src/app/data/tree/simpletree/simpletree.demo.ts ***!
  \*********************************************************/
/*! exports provided: SimpleTreeDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleTreeDemo", function() { return SimpleTreeDemo; });
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


var SimpleTreeDemo = /** @class */ (function () {
    function SimpleTreeDemo(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
        this.treeLocalData = {
            "data": [{
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
        this.customArrayLocalData = {
            "customArray": [{
                    "demo": "Web App",
                    "expand": true,
                    "object": [
                        {
                            "demo": "app",
                            "expand": true,
                            "object": [
                                {
                                    "leaf": true,
                                    "demo": "Application.js"
                                }
                            ]
                        },
                        {
                            "demo": "button",
                            "expand": true,
                            "object": [
                                {
                                    "leaf": true,
                                    "demo": "Button.js"
                                },
                                {
                                    "leaf": true,
                                    "demo": "Cycle.js"
                                },
                                {
                                    "leaf": true,
                                    "demo": "Split.js"
                                }
                            ]
                        },
                        {
                            "demo": "container",
                            "expand": true,
                            "object": [
                                {
                                    "leaf": true,
                                    "demo": "ButtonGroup.js"
                                },
                                {
                                    "leaf": true,
                                    "demo": "Container.js"
                                },
                                {
                                    "leaf": true,
                                    "demo": "Viewport.js",
                                    "expand": true,
                                    "object": [],
                                    "lazy": {
                                        "http-url": "data/treeview.json",
                                        "http-method": "get"
                                    }
                                }
                            ]
                        },
                        {
                            "demo": "core",
                            "expand": true,
                            "object": [
                                {
                                    "demo": "dom",
                                    "expand": true,
                                    "object": [
                                        {
                                            "leaf": true,
                                            "demo": "Element.form.js"
                                        },
                                        {
                                            "leaf": true,
                                            "demo": "Element.static-more.js"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }]
        };
    }
    SimpleTreeDemo.prototype.getNodeData = function (data) {
        this.selectedData = data;
    };
    SimpleTreeDemo.prototype.getCustomNodeData = function (data) {
        this.selectedCustomData = data;
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    SimpleTreeDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/data/tree/simpletree/simpletree.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/data/tree/simpletree/simpletree.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
        this.http.get('assets/data/componentdata/treeview.json', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.dataSource = responseTs;
        });
        this.http.get('assets/data/componentdata/treecustomview.json', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.dataCustomSource = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    SimpleTreeDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    SimpleTreeDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'simpletree-demo', template: "\n  <amexio-card header=\"true\">\n    <amexio-header>\n        Simple Tree\n    </amexio-header>\n    <amexio-body>\n        <p>A Simple Expandable Tree component which create Tree View based on standard datasource attached.</p>\n    \n        <amexio-tab-view>\n            <amexio-tab title=\"Demo\" active=\"true\">\n                <amexio-row>\n                    <amexio-column size=\"6\" [fit]=\"true\">\n                        <amexio-card [header]=\"true\" >\n                            <amexio-header>\n                                Simple Tree\n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-treeview [data-reader]=\"'data'\"   [data]=\"treeLocalData\" (nodeClick)=\"getNodeData($event)\">\n                                </amexio-treeview>\n                            </amexio-body>\n                        </amexio-card>\n                    </amexio-column>\n                    <amexio-column size=\"6\" [fit]=\"true\">\n                        <amexio-card [header]=\"true\" >\n                            <amexio-header>\n                                Selected Data\n                            </amexio-header>\n                            <amexio-body>\n                                <pre><code>{{selectedData | json}}</code></pre>\n                            </amexio-body>\n                        </amexio-card>\n                    </amexio-column>\n                </amexio-row>\n               \n                \n                <amexio-card header=\"true\">\n                <amexio-header>\n               Dynamically Changes Tree Data\n                </amexio-header>\n                <amexio-body>\n              \n                <p> By Default Tree consumes standard JSON structure i.e to display node/leaf \u201CText\u201D Key \n                should be present in JSON && array with \u201CChildren\u201D Key present in JSON. \n                Now with 5.2.x release Amexio-tree component can consume user defined data structure and \n                pass what is key for node/leaf and what is key for children array.\n                </p>\n                <amexio-row>\n                    <amexio-column size=\"6\" [fit]=\"true\">\n                        <amexio-card [header]=\"true\" >\n                            <amexio-header>\n                               Tree with user define keys \n                            </amexio-header>\n                            <amexio-body>\n                           \n                                <amexio-treeview [data-reader]=\"'customArray'\" [display-key]=\"'demo'\" [child-array-key]=\"'object'\"  [data]=\"customArrayLocalData\" (nodeClick)=\"getCustomNodeData($event)\">\n                                </amexio-treeview>\n                            </amexio-body>\n                        </amexio-card>\n                    </amexio-column>\n                    <amexio-column size=\"6\" [fit]=\"true\">\n                        <amexio-card [header]=\"true\" >\n                            <amexio-header>\n                                Selected Data\n                            </amexio-header>\n                            <amexio-body>\n                                <pre><code>{{selectedCustomData | json}}</code></pre>\n                            </amexio-body>\n                        </amexio-card>\n                    </amexio-column>\n                </amexio-row>\n                </amexio-body>\n                </amexio-card>\n\n\n            </amexio-tab>\n\n            <amexio-tab title=\"API Reference\">\n                <amexio-datagrid title=\"Properties<amexio-treeview>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/data/tree.json'\"\n                    [data-reader]=\"'properties'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [data-index]=\"'name'\" [width]=\"24\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                   <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Version'\"></amexio-data-table-column>\n                   \n                    <amexio-data-table-column [data-index]=\"'type'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'default'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'description'\" [width]=\"65\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <amexio-datagrid title=\"Events\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/data/tree.json'\" [data-reader]=\"'events'\"\n                    [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [data-index]=\"'name'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Version'\"></amexio-data-table-column>\n                   \n                    <amexio-data-table-column [data-index]=\"'description'\" [width]=\"65\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n\n                <amexio-datagrid title=\"Methods\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/data/tree.json'\" [data-reader]=\"'methods'\"\n            [enable-data-filter]=\"false\">\n            <amexio-data-table-column [data-index]=\"'name'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n            <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Version'\"></amexio-data-table-column>\n            <amexio-data-table-column [data-index]=\"'description'\" [width]=\"65\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n        </amexio-datagrid>\n            </amexio-tab>\n            <amexio-tab title=\"Source\">\n                <div style=\"overflow-y: scroll\">\n                    <amexio-vertical-tab-view>\n                        <amexio-tab title=\"HTML\" [active]=\"true\">\n                            <ng-container *ngIf=\"htmlCode\">\n                                <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                                <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"Type Script\">\n                            <ng-container *ngIf=\"typeScriptCode\">\n                                <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"DataSource\">\n                            <ng-container *ngIf=\"dataSource\">\n                                <prism-block [code]=\"dataSource\" [language]=\"'json'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"DataCustomSource\">\n                        <ng-container *ngIf=\"dataCustomSource\">\n                            <prism-block [code]=\"dataCustomSource\" [language]=\"'json'\"></prism-block>\n                        </ng-container>\n                    </amexio-tab>\n                    </amexio-vertical-tab-view>\n                </div>\n            </amexio-tab>\n            <amexio-tab title=\"Live\">\n                <p align=\"center\">Amexio Sandbox</p>\n                <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-simple-tree?embed=1&file=app/tree/simpletree/simpletree.demo.html&view=editor\"\n                    frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n            </amexio-tab>\n        </amexio-tab-view>\n    </amexio-body>\n</amexio-card>\n  "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SimpleTreeDemo);
    return SimpleTreeDemo;
}());



/***/ })

}]);
//# sourceMappingURL=data-tree-simpletree-simpletree-demo-module.js.map