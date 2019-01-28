(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["draganddrop-acrosstree-acrosstree-demo-module"],{

/***/ "./src/app/draganddrop/acrosstree/acrosstree.demo.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/draganddrop/acrosstree/acrosstree.demo.component.ts ***!
  \*********************************************************************/
/*! exports provided: AcrossTreeDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcrossTreeDemo", function() { return AcrossTreeDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/**
 * Created by rashmi on 20/6/18.
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


var AcrossTreeDemo = /** @class */ (function () {
    function AcrossTreeDemo(http) {
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
        this.treeLocalData1 = {
            "data": [{
                    "text": "Web App",
                    "expand": true,
                    "children": [
                        {
                            "text": "Grid",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "Column.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Boolean.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Check.js"
                                }
                            ]
                        },
                        {
                            "text": "Layout",
                            "expand": true,
                            "children": [
                                {
                                    "text": "Component",
                                    "expand": true,
                                    "children": [
                                        {
                                            "leaf": true,
                                            "text": "Auto.js"
                                        },
                                        {
                                            "leaf": true,
                                            "text": "FieldSet.js"
                                        },
                                        {
                                            "leaf": true,
                                            "text": "Dock.js"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "text": "Tree",
                            "expand": true,
                            "children": [
                                {
                                    "text": "Plugin",
                                    "expand": true,
                                    "children": [
                                        {
                                            "leaf": true,
                                            "text": "TreeViewDragDrop.js"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "text": "Panel",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "Header.js"
                                }
                            ]
                        }
                    ]
                }]
        };
    }
    //TO LOAD HTML AND TYPESCRIPT CODE
    AcrossTreeDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/draganddrop/acrosstree/tree.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/draganddrop/acrosstree/tree.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    AcrossTreeDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    AcrossTreeDemo.prototype.getNodeData = function (data) {
        this.selectedData = data;
    };
    AcrossTreeDemo.prototype.getDropData = function (event) {
        this.treeRef.removeNode(event);
    };
    AcrossTreeDemo.prototype.getDropData1 = function (event) {
        this.treeRef1.removeNode(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tree'),
        __metadata("design:type", Object)
    ], AcrossTreeDemo.prototype, "treeRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tree1'),
        __metadata("design:type", Object)
    ], AcrossTreeDemo.prototype, "treeRef1", void 0);
    AcrossTreeDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dragdroptree-demo', template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n         Tree with Drag Drop Functionality \n      </amexio-header>\n      <amexio-body>\n        <p>A Expandable Tree component which create Tree View based on standard datasource attached and having functionality of drag and drop : across tree</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n            <amexio-row>\n\n <amexio-column size=\"12\">\n<amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'right'\">\n    <amexio-header>\n        Drag Drop Functionality across Tree\n    </amexio-header>\n    <amexio-body>\n        <amexio-row>\n            <amexio-column [size]=\"6\">\n                <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'right'\">\n                    <amexio-header>\n                        Tree 1\n                    </amexio-header>\n                    <amexio-body>\n                    <amexio-treeview #tree  (onDrop)=\"getDropData1($event)\" [data-reader]=\"'data'\" [enable-drag]=\"true\" [enable-drop]=\"true\" [data]=\"treeLocalData\" [across-tree]=\"true\">\n                    </amexio-treeview>\n                    </amexio-body>\n                </amexio-card>\n            </amexio-column>\n\n            <amexio-column [size]=\"6\">\n                <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'right'\">\n                    <amexio-header>\n                        Tree 2\n                    </amexio-header>\n                    <amexio-body>\n                    <amexio-treeview #tree1 (onDrop)=\"getDropData($event)\" [data-reader]=\"'data'\" [enable-drag]=\"true\" [enable-drop]=\"true\" [data]=\"treeLocalData1\" [across-tree]=\"true\">\n                    </amexio-treeview>\n                    </amexio-body>\n                </amexio-card>\n            </amexio-column>\n        </amexio-row>\n    </amexio-body>\n</amexio-card>\n</amexio-column>\n</amexio-row>\n\n          </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Properties<amexio-treeview>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/data/tree.json'\"\n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [data-index]=\"'name'\" [width]=\"15\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"20\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Version'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'type'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'default'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'description'\" [width]=\"45\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br>\n            <amexio-datagrid title=\"Events\" [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/data/tree.json'\" [data-reader]=\"'events'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [data-index]=\"'name'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'description'\" [width]=\"65\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n\n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n            <amexio-vertical-tab-view>\n              <amexio-tab title=\"HTML\" [active]=\"true\">\n                <ng-container *ngIf=\"htmlCode\">\n                  <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                  <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Type Script\">\n                <ng-container *ngIf=\"typeScriptCode\">\n                  <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n            </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n          <p align=\"center\">Amexio Sandbox</p>\n          <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v5-dragdropacrosstree?embed=1&file=app/tree/acrosstree/acrosstree.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n  "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AcrossTreeDemo);
    return AcrossTreeDemo;
}());



/***/ }),

/***/ "./src/app/draganddrop/acrosstree/acrosstree.demo.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/draganddrop/acrosstree/acrosstree.demo.module.ts ***!
  \******************************************************************/
/*! exports provided: AcrossTreeDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcrossTreeDemoModule", function() { return AcrossTreeDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _acrosstree_demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./acrosstree.demo.component */ "./src/app/draganddrop/acrosstree/acrosstree.demo.component.ts");
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
var AcrossTreeDemoModule = /** @class */ (function () {
    function AcrossTreeDemoModule() {
    }
    AcrossTreeDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_acrosstree_demo_component__WEBPACK_IMPORTED_MODULE_6__["AcrossTreeDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _acrosstree_demo_component__WEBPACK_IMPORTED_MODULE_6__["AcrossTreeDemo"], pathMatch: 'full'
                    }])],
            providers: [amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["IconLoaderService"]]
        })
    ], AcrossTreeDemoModule);
    return AcrossTreeDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=draganddrop-acrosstree-acrosstree-demo-module.js.map