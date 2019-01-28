(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-treedatatemplate-treedatatemplate-demo-module"],{

/***/ "./src/app/data/treedatatemplate/treedatatemplate.demo.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/data/treedatatemplate/treedatatemplate.demo.module.ts ***!
  \***********************************************************************/
/*! exports provided: TreeDataTemplateDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDataTemplateDemoModule", function() { return TreeDataTemplateDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _treedatatemplate_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./treedatatemplate.demo */ "./src/app/data/treedatatemplate/treedatatemplate.demo.ts");
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
var TreeDataTemplateDemoModule = /** @class */ (function () {
    function TreeDataTemplateDemoModule() {
    }
    TreeDataTemplateDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_treedatatemplate_demo__WEBPACK_IMPORTED_MODULE_6__["TreeDataTemplateDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _treedatatemplate_demo__WEBPACK_IMPORTED_MODULE_6__["TreeDataTemplateDemo"], pathMatch: 'full'
                    }])],
            providers: [amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["IconLoaderService"]]
        })
    ], TreeDataTemplateDemoModule);
    return TreeDataTemplateDemoModule;
}());



/***/ }),

/***/ "./src/app/data/treedatatemplate/treedatatemplate.demo.ts":
/*!****************************************************************!*\
  !*** ./src/app/data/treedatatemplate/treedatatemplate.demo.ts ***!
  \****************************************************************/
/*! exports provided: TreeDataTemplateDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDataTemplateDemo", function() { return TreeDataTemplateDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeDataTemplateDemo = /** @class */ (function () {
    function TreeDataTemplateDemo(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
    }
    //TO LOAD HTML AND TYPESCRIPT CODE
    TreeDataTemplateDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/data/treedatatemplate/treedatatemplate.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/data/treedatatemplate/treedatatemplate.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
        this.http.get('assets/data/componentdata/treedatatable.json', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.dataSource = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    TreeDataTemplateDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    TreeDataTemplateDemo.prototype.getSelectedData = function (data) {
        this.selectedData = data;
    };
    TreeDataTemplateDemo.prototype.onCheckClick = function (data) {
        if (data.hasOwnProperty('children') && data.children.length > 0) {
            this.checkchild(data);
        }
    };
    TreeDataTemplateDemo.prototype.checkchild = function (data) {
        var _this = this;
        data.children.forEach(function (element) {
            element.done = !element.done;
            if (element.hasOwnProperty('children') && element.children.length > 0) {
                _this.checkchild(element);
            }
        });
    };
    TreeDataTemplateDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'treedata-grid-demo', template: "\n  <amexio-card header=\"true\">\n      <amexio-header>\n         Tree Data Template\n      </amexio-header>\n      <amexio-body>\n        <p>Collapsible Data Grid Component with template property and displays data in expandable/collapsible rows.</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n          <amexio-row>\n          <amexio-column size=\"12\">\n            <amexio-card [footer]=\"false\" [header]=\"true\">\n              <amexio-header> Tree Data Template </amexio-header>\n              <amexio-body>\n              <amexio-tree-data-table [http-method]=\"'get'\"\n              [http-url]=\"'assets/data/componentdata/treedatatable.json'\" \n              [data-reader]=\"'data'\" (selectedRecord)=\"getSelectedData($event)\">\n              \n              <amexio-data-table-column [data-index]=\"'task'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Task'\">\n              \n              </amexio-data-table-column>\n                  <amexio-data-table-column [data-index]=\"'user'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'User'\"></amexio-data-table-column>\n                  <amexio-data-table-column    [data-index]=\"'duration'\" [data-type]=\"'number'\" [hidden]=\"false\" [text]=\"'Duration'\"></amexio-data-table-column>\n                  \n                 \n\n              <!--checkbox-->\n              <amexio-data-table-column  [data-index]=\"'done'\"  \n              [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Done'\">\n\n              <ng-template #amexioHeaderTmpl let-column=\"column\" let-index=\"index\">\n              <span style=\"padding-left:65px\">{{column.text}} </span> \n              </ng-template>\n\n              <ng-template #amexioBodyTmpl let-column let-row=\"row\" >\n          <span  style=\"display: flex;\n              justify-content: center;\">\n              <amexio-checkbox   \n                  (onSelection)=\"onCheckClick(row)\" [(ngModel)]=\"row.done\">\n                  \n              </amexio-checkbox>\n              \n            </span>\n              </ng-template>\n              </amexio-data-table-column>\n\n              <!--edit-->\n              <amexio-data-table-column   [data-index]=\"'edit'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Edit'\">\n              \n              <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                <amexio-image style=\"color:grey;\" [icon-class]=\"'fa fa-edit  fa-2x'\"></amexio-image>\n              </ng-template>\n              </amexio-data-table-column>\n\n              </amexio-tree-data-table> \n\n\n               </amexio-body>\n            </amexio-card>\n          </amexio-column>\n        </amexio-row>   \n\n\n\n\n          </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Properties<amexio-tree-data-table>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/data/treedatagrid.json'\"\n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [data-index]=\"'name'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n            <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Version'\"></amexio-data-table-column>\n             \n                                        <amexio-data-table-column [data-index]=\"'type'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'default'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'description'\" [width]=\"65\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid><br>\n            <amexio-datagrid title=\"Column Properties<amexio-data-table-column> \" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/data/grid.json'\"\n                             [data-reader]=\"'columnProperties'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [data-index]=\"'name'\" [width]=\"24\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n            <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Version'\"></amexio-data-table-column>\n                                        \n              <amexio-data-table-column [data-index]=\"'type'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'default'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'description'\" [width]=\"65\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br>\n            <amexio-datagrid title=\"Events\" [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/data/grid.json'\" [data-reader]=\"'events'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [data-index]=\"'name'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n            <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Version'\"></amexio-data-table-column>\n              \n                                        <amexio-data-table-column [data-index]=\"'description'\" [width]=\"65\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n<br>\n            <amexio-datagrid title=\"Methods\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/data/tree.json'\" [data-reader]=\"'methods'\"\n            [enable-data-filter]=\"false\">\n            <amexio-data-table-column [data-index]=\"'name'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n            <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Version'\"></amexio-data-table-column>\n            <amexio-data-table-column [data-index]=\"'description'\" [width]=\"65\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n        </amexio-datagrid>\n\n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n            <amexio-vertical-tab-view>\n              <amexio-tab title=\"HTML\" [active]=\"true\">\n                <ng-container *ngIf=\"htmlCode\">\n                  <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                  <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Type Script\">\n                <ng-container *ngIf=\"typeScriptCode\">\n                  <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"DataSource\">\n                <ng-container *ngIf=\"dataSource\">\n                  <prism-block [code]=\"dataSource\" [language]=\"'json'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n            </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n          <p align=\"center\">Amexio Sandbox</p>\n          <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-tree-data-grid?embed=1&file=app/grid/treedatagrid/treedatagrid.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n\n      "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TreeDataTemplateDemo);
    return TreeDataTemplateDemo;
}());



/***/ })

}]);
//# sourceMappingURL=data-treedatatemplate-treedatatemplate-demo-module.js.map