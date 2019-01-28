(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contextualmenu-listbox-contextmenulistbox-demo-module"],{

/***/ "./src/app/contextualmenu/listbox/contextmenulistbox.demo.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/contextualmenu/listbox/contextmenulistbox.demo.module.ts ***!
  \**************************************************************************/
/*! exports provided: ContextualMenuListBoxDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuListBoxDemoModule", function() { return ContextualMenuListBoxDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _contextmenulistbox_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contextmenulistbox.demo */ "./src/app/contextualmenu/listbox/contextmenulistbox.demo.ts");
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
var ContextualMenuListBoxDemoModule = /** @class */ (function () {
    function ContextualMenuListBoxDemoModule() {
    }
    ContextualMenuListBoxDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_contextmenulistbox_demo__WEBPACK_IMPORTED_MODULE_6__["ContextMenuListBoxDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _contextmenulistbox_demo__WEBPACK_IMPORTED_MODULE_6__["ContextMenuListBoxDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], ContextualMenuListBoxDemoModule);
    return ContextualMenuListBoxDemoModule;
}());



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


var ContextMenuListBoxDemo = /** @class */ (function () {
    function ContextMenuListBoxDemo(http) {
        this.http = http;
        this.contextMenuData =
            [{ "text": "Add New", "icon": "fa fa-arrows", "disabled": true },
                { "text": "Edit", "icon": "", "seperator": true },
                { "text": "Send data in email", "icon": "" }];
        this.getHtmlAndTypeScriptCode();
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
    //TO LOAD HTML AND TYPESCRIPT CODE
    ContextMenuListBoxDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/data/contextmenulistbox/listbox.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/data/contextmenulistbox/listbox.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
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
            selector: 'contextmenu-listbox-demo', template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n         List Box With Context Menu\n      </amexio-header>\n      <amexio-body>\n        <p>Simple list box which allows user to select one of more items from list based on configuration. User can\n          provide custom template to change look and feel and with context menu (right-click mouse operation)</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n            <amexio-row>\n            <amexio-column size=\"12\">\n              <amexio-card [header]=\"true\">\n                <amexio-header>\n                   List Box With Context Menu\n                </amexio-header>\n                <amexio-body>\n                  <amexio-listbox [enable-checkbox]=\"true\" [height]=\"400\"\n                                  [header]=\"'Contacts'\" [search-placeholder]=\"'Search Contacts'\"\n                                  [data]=\"localData\" [filter]=\"true\"\n                                  [data-reader]=\"'response.data'\" [context-menu]=\"contextMenuData\"\n                                  [display-field]=\"'name_official'\" (selectedRows)=\"getSelectedData($event)\">\n                  </amexio-listbox>\n                </amexio-body>\n              </amexio-card>\n            </amexio-column>\n          </amexio-row>\n\n             \n\n               </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Properties<amexio-listbox>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/data/listbox.json'\"\n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"20\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Version'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"45\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br>\n            <amexio-datagrid title=\"Events\" [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/data/listbox.json'\" [data-reader]=\"'events'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"20\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"70\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n\n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n            <amexio-vertical-tab-view>\n              <amexio-tab title=\"HTML\" [active]=\"true\">\n                <ng-container *ngIf=\"htmlCode\">\n                  <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                  <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Type Script\">\n                <ng-container *ngIf=\"typeScriptCode\">\n                  <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n            </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n          <p align=\"center\">Amexio Sandbox</p>\n          <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-listbox-contextmenu?embed=1&file=src/app/contextualmenu/list/list.demo.component.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n  ",
            styles: [
                "\n    .listbox-StatusYellow {\n      background-color: yellow;\n    }\n    .listbox-StatusGreen  {\n      background-color: green;\n     }\n    .listbox-StatusRed {\n      background-color: red;\n  }\n  \n.red {\n    color: red!important;\n   \n}\n.green {\n    color: green!important;\n   \n}\n.yellow {\n    color: yellow!important;\n    \n}\n.template-progressBar .progress{\n  height:5px !important;\n}  \n"
            ]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContextMenuListBoxDemo);
    return ContextMenuListBoxDemo;
}());



/***/ })

}]);
//# sourceMappingURL=contextualmenu-listbox-contextmenulistbox-demo-module.js.map