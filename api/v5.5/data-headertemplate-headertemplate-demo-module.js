(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-headertemplate-headertemplate-demo-module"],{

/***/ "./src/app/data/headertemplate/headertemplate.demo.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/data/headertemplate/headertemplate.demo.module.ts ***!
  \*******************************************************************/
/*! exports provided: HeaderTemplateDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTemplateDemoModule", function() { return HeaderTemplateDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _headertemplate_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./headertemplate.demo */ "./src/app/data/headertemplate/headertemplate.demo.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Created by manisha on 22/6/18.
 */
var HeaderTemplateDemoModule = /** @class */ (function () {
    function HeaderTemplateDemoModule() {
    }
    HeaderTemplateDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_headertemplate_demo__WEBPACK_IMPORTED_MODULE_6__["HeaderTemplateDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _headertemplate_demo__WEBPACK_IMPORTED_MODULE_6__["HeaderTemplateDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], HeaderTemplateDemoModule);
    return HeaderTemplateDemoModule;
}());



/***/ }),

/***/ "./src/app/data/headertemplate/headertemplate.demo.ts":
/*!************************************************************!*\
  !*** ./src/app/data/headertemplate/headertemplate.demo.ts ***!
  \************************************************************/
/*! exports provided: HeaderTemplateDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTemplateDemo", function() { return HeaderTemplateDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/**
 * Created by Manisha on 22/6/18.
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


var HeaderTemplateDemo = /** @class */ (function () {
    function HeaderTemplateDemo(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
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
    HeaderTemplateDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/data/headertemplate/headertemplate.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/data/headertemplate/headertemplate.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
        this.http.get('assets/data/componentdata/headertemplateemail.json', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.dataSource = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    HeaderTemplateDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    HeaderTemplateDemo.prototype.getRowData = function (data) {
        this.clickedRowData = data;
    };
    HeaderTemplateDemo.prototype.getGridTemplateData = function (row) {
        if (row.Usage >= 50) {
            return "success";
        }
        if (row.Usage < 50 && row.Usage >= 30) {
            return "warning";
        }
        if (row.Usage < 30) {
            return "danger";
        }
    };
    HeaderTemplateDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'grid-template-demo', template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n         Header Template \n      </amexio-header>\n      <amexio-body>\n        <p>Defines header template for user customization AmexioColumn component. The template context is set to the current header</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n           \n          <!--1-->\n          <amexio-datagrid [enable-checkbox]=\"false\" title=\"Registration Details\" [http-method]=\"'get'\" [http-url]=\"'assets/data/componentdata/headertemplateemail.json'\"\n              [data-reader]=\"'data'\" [page-size]=\"10\" [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"5\" [data-index]=\"'No'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'No.'\">\n                  <ng-template #amexioHeaderTmpl let-column=\"column\" let-index=\"index\">\n                      <amexio-label size=\"small\" font-color=\"white\">\n                          {{column.text}}\n                      </amexio-label>\n                  </ng-template>\n              </amexio-data-table-column>\n              <amexio-data-table-column   [width]=\"10\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\">\n              <ng-template #amexioHeaderTmpl let-column=\"column\" let-index=\"index\">\n                      <amexio-label size=\"small-bold\" font-color=\"white\">\n                          {{column.text}}\n                      </amexio-label>\n                  </ng-template>\n              </amexio-data-table-column>\n              <amexio-data-table-column [width]=\"8\" [data-index]=\"'loginid'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Login-Id'\">\n              <ng-template #amexioHeaderTmpl let-column=\"column\" let-index=\"index\">\n              <amexio-label size=\"small\" font-color=\"red\">\n                  {{column.text}}\n              </amexio-label>\n          </ng-template>\n              </amexio-data-table-column>\n              <amexio-data-table-column [width]=\"14\" [data-index]=\"'emailid'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Email-Id'\">\n              <ng-template #amexioHeaderTmpl let-column=\"column\" let-index=\"index\">\n              <amexio-label size=\"small\" font-color=\"white\">\n              <i class=\"fa fa-envelope\"  style=\"color:white\"></i>\n                  {{column.text}}\n              </amexio-label>\n          </ng-template>\n              </amexio-data-table-column>\n              <amexio-data-table-column [width]=\"8\" [data-index]=\"'phone'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Phone'\">\n              <ng-template #amexioHeaderTmpl let-column=\"column\" let-index=\"index\">\n              <amexio-label size=\"small\" font-color=\"white\">\n              <i class=\"fa fa-phone\"  style=\"color:white\"></i>\n                  {{column.text}}\n              </amexio-label>\n          </ng-template>\n              </amexio-data-table-column>\n              <amexio-data-table-column [sort]=\"false\" [width]=\"10\" [data-index]=\"'Status'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Status'\">\n              <ng-template #amexioHeaderTmpl let-column=\"column\" let-index=\"index\">\n              <amexio-btn-dropdown [label]=\"'Status'\" [type]=\"'red'\" [size]=\"'small'\">\n              \n              <amexio-btn-dropdown-item  [label]=\"'Accept All'\">\n              </amexio-btn-dropdown-item>\n              <amexio-btn-dropdown-item [label]=\"'Reject All'\">\n              </amexio-btn-dropdown-item>\n              \n          </amexio-btn-dropdown>\n          </ng-template>\n              <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                      <amexio-label class=\"fa fa-circle fa-lg\" [ngClass]=\"{'green': row.Status== 'Paid' , 'yellow': row.Status =='Pending' , 'red' : row.Status=='Approved'}\"></amexio-label>\n                      &nbsp;{{row.Status}}\n                  </ng-template>\n              </amexio-data-table-column>\n               \n          </amexio-datagrid>\n\n\n          </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Properties<amexio-datagrid>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/data/grid.json'\"\n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [data-index]=\"'name'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\">\n                <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                  <ng-container *ngIf=\"row.deprecated\">\n                    <div style=\"text-decoration: line-through red;\">{{row.name}}</div>\n                  </ng-container>\n                  <ng-container *ngIf=\"!row.deprecated\">\n                    {{row.name}}\n                  </ng-container>\n                </ng-template>\n              </amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'type'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'default'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'description'\" [width]=\"65\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid><br>\n            <amexio-datagrid title=\"Column Properties <amexio-data-table-colum>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/data/grid.json'\"\n                             [data-reader]=\"'columnProperties'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [data-index]=\"'name'\" [width]=\"15\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'type'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'default'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'description'\" [width]=\"65\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br>\n            <amexio-datagrid title=\"Events\" [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/data/grid.json'\" [data-reader]=\"'events'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [data-index]=\"'name'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'description'\" [width]=\"65\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n\n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll;\">\n              <amexio-vertical-tab-view>\n                <amexio-tab title=\"HTML\" [active]=\"true\">\n                  <ng-container *ngIf=\"htmlCode\">\n                    <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                    <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                  </ng-container>\n                </amexio-tab>\n                <amexio-tab title=\"Type Script\">\n                  <ng-container *ngIf=\"typeScriptCode\">\n                    <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                  </ng-container>\n                </amexio-tab>\n                <amexio-tab title=\"DataSource\">\n                  <ng-container *ngIf=\"dataSource\">\n                    <prism-block [code]=\"dataSource\" [language]=\"'json'\"></prism-block>\n                  </ng-container>\n                </amexio-tab>\n              </amexio-vertical-tab-view>  \n            </div>\n            \n          </amexio-tab>\n\n          <amexio-tab title=\"Live\">\n          <p align=\"center\">Amexio Sandbox</p>\n          <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/header-template?ctl=1&embed=1&file=app/data/headertemplate/headertemplate.demo.html&view=editor\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n  ",
            styles: [
                "\n    .button-dropdown{\n        color:black;\n        padding: 50px;\n    }\n    .listbox-StatusYellow {\n      background-color: yellow;\n    }\n    .listbox-StatusGreen  {\n      background-color: green;\n     }\n    .listbox-StatusRed {\n      background-color: red;\n  }\n  \n.red {\n    color: red!important;\n   \n}\n.green {\n    color: green!important;\n   \n}\n.yellow {\n    color: yellow!important;\n    \n}\n.template-progressBar .progress{\n  height:5px !important;\n}  \n"
            ]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HeaderTemplateDemo);
    return HeaderTemplateDemo;
}());



/***/ })

}]);
//# sourceMappingURL=data-headertemplate-headertemplate-demo-module.js.map