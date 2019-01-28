(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-gridwithtemplate-gridwithtemplate-demo-module"],{

/***/ "./src/app/data/gridwithtemplate/gridwithtemplate.demo.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/data/gridwithtemplate/gridwithtemplate.demo.module.ts ***!
  \***********************************************************************/
/*! exports provided: GridWithTemplateDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridWithTemplateDemoModule", function() { return GridWithTemplateDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _gridwithtemplate_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gridwithtemplate.demo */ "./src/app/data/gridwithtemplate/gridwithtemplate.demo.ts");
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
var GridWithTemplateDemoModule = /** @class */ (function () {
    function GridWithTemplateDemoModule() {
    }
    GridWithTemplateDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_gridwithtemplate_demo__WEBPACK_IMPORTED_MODULE_6__["GridWithTemplateDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _gridwithtemplate_demo__WEBPACK_IMPORTED_MODULE_6__["GridWithTemplateDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], GridWithTemplateDemoModule);
    return GridWithTemplateDemoModule;
}());



/***/ }),

/***/ "./src/app/data/gridwithtemplate/gridwithtemplate.demo.ts":
/*!****************************************************************!*\
  !*** ./src/app/data/gridwithtemplate/gridwithtemplate.demo.ts ***!
  \****************************************************************/
/*! exports provided: GridWithTemplateDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridWithTemplateDemo", function() { return GridWithTemplateDemo; });
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


var GridWithTemplateDemo = /** @class */ (function () {
    function GridWithTemplateDemo(http) {
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
    GridWithTemplateDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/data/templategrid/templategrid.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/data/templategrid/templategrid.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
        this.http.get('assets/data/componentdata/gridtemplate.json', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.dataSource = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    GridWithTemplateDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    GridWithTemplateDemo.prototype.getRowData = function (data) {
        this.clickedRowData = data;
    };
    GridWithTemplateDemo.prototype.getGridTemplateData = function (row) {
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
    GridWithTemplateDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'grid-template-demo', template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n         Data Grid Template \n      </amexio-header>\n      <amexio-body>\n        <p>To define the detail template, nest an ng-template tag inside the AmexioColumn component. The template context is set to the current row.</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n          <!--1-->\n          <amexio-datagrid [enable-checkbox]=\"false\" title=\"Invoice Details\" [http-method]=\"'get'\" [http-url]=\"'assets/data/componentdata/templategrid.json'\"\n              [data-reader]=\"'response.data'\" [page-size]=\"10\" [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"5\" [data-index]=\"'No'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'No.'\">\n                  <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                      <amexio-label size=\"small\" font-color=\"grey\">\n                          {{row.No}}\n                      </amexio-label>\n                  </ng-template>\n              </amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'Invoice Subject'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Invoice Subject'\">\n              </amexio-data-table-column>\n              <amexio-data-table-column [width]=\"8\" [data-index]=\"'client'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Client'\">\n          \n              </amexio-data-table-column>\n              <amexio-data-table-column [width]=\"6\" [data-index]=\"'Vat No.'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Vat No.'\">\n          \n              </amexio-data-table-column>\n              <amexio-data-table-column [width]=\"8\" [data-index]=\"'Created'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Created'\">\n          \n              </amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'Status'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Status'\">\n                  <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                      <amexio-label class=\"fa fa-circle fa-lg\" [ngClass]=\"{'green': row.Status== 'Paid' , 'yellow': row.Status =='Pending' , 'red' : row.Status=='Paid Today'}\"></amexio-label>\n                      &nbsp;{{row.Status}}\n                  </ng-template>\n              </amexio-data-table-column>\n              <amexio-data-table-column [width]=\"5\" [data-index]=\"'Price'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Price'\">\n          \n              </amexio-data-table-column>\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"''\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"''\">\n                  <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                      <amexio-row>\n                          <amexio-column [size]=\"4\">\n                              <amexio-button [label]=\"'Manage'\" [size]=\"'small'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Manage'\">\n                              </amexio-button>\n                          </amexio-column>\n                          <amexio-column [size]=\"5\">\n                              <amexio-btn-dropdown [label]=\"'Action'\" [type]=\"'theme-backgroundcolor'\" [size]=\"'small'\">\n                                  <amexio-btn-dropdown-item [label]=\"'Accept'\">\n                                  </amexio-btn-dropdown-item>\n                                  <amexio-btn-dropdown-item [label]=\"'Reject'\">\n                                  </amexio-btn-dropdown-item>\n                              </amexio-btn-dropdown>\n                          </amexio-column>\n                          <amexio-column [size]=\"3\">\n                              <amexio-image style=\"color:grey;\" [icon-class]=\"'fa fa-pencil fa-2x'\"></amexio-image>\n                          </amexio-column>\n                      </amexio-row>\n                  </ng-template>\n              </amexio-data-table-column>\n          \n          </amexio-datagrid>\n          \n          <!--2-->\n          <br>\n          <amexio-datagrid [enable-checkbox]=\"false\" title=\"User Activity Details\" [http-method]=\"'get'\" [http-url]=\"'assets/data/componentdata/datagridtemplate.json'\"\n              [data-reader]=\"'response.data'\" [page-size]=\"10\" [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"40\" [data-index]=\"'User'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'USER'\">\n                  <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                      <amexio-row>\n                          <amexio-column [size]=\"3\">\n                              <amexio-image [path]=\"'assets/images/profile/'+row.profile\" [c-class]=\"'image-round'\">\n                              </amexio-image>\n                           </amexio-column>\n                          <amexio-column [size]=\"9\">\n                              <amexio-label size=\"small\">\n                                  {{row.User}}\n                              </amexio-label>\n                              <br>\n                              <amexio-label size=\"small\" font-color=\"grey\">\n                                  Registered:{{row.Date}}\n                              </amexio-label>\n                          </amexio-column>\n                      </amexio-row>\n                  </ng-template>\n              </amexio-data-table-column>\n              <amexio-data-table-column [width]=\"40\" [data-index]=\"'Usage'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'USAGE'\">\n                  <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                      <amexio-label>{{row.Usage}}%</amexio-label>\n          \n                      <amexio-progress-bar [height]=\"'10'\" [current-value]=\"row.Usage\" [infinite]=\"false\" [type]=\"getGridTemplateData(row)\"></amexio-progress-bar>\n          \n                      <amexio-label size=\"small\" font-color=\"grey\">\n                          {{row.usageFromDate}}-{{row.usageToDate}}\n                      </amexio-label>\n          \n                  </ng-template>\n              </amexio-data-table-column>\n              <amexio-data-table-column [width]=\"20\" [data-index]=\"'Payment'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'PAYMENT'\">\n                  <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                      <amexio-label>\n                          <amexio-image [height]=\"'59.75px'\" [width]=\"'59.75px'\" [path]=\"'assets/images/'+row.Payment\" [c-class]=\"'image-round'\">\n                          </amexio-image>\n                       </amexio-label>\n                  </ng-template>\n              </amexio-data-table-column>\n              <amexio-data-table-column [width]=\"20\" [data-index]=\"'Activity'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'ACTIVITY'\">\n                  <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                      <amexio-label size=\"small\" font-color=\"grey\">\n                          Last login\n                      </amexio-label>\n                      <br>\n                      <amexio-label size=\"small\">\n                          {{row.Activity}}\n                      </amexio-label>\n          \n          \n                  </ng-template>\n              </amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"''\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"''\">\n                  <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n          \n \n                          <amexio-image  style=\"color:grey;\" [icon-class]=\"'fa fa-pencil  fa-2x'\"></amexio-image>\n \n          \n                  </ng-template>\n              </amexio-data-table-column>\n          </amexio-datagrid>\n          \n          <!--3-->\n          <br>\n          <amexio-datagrid title=\"Country Grid\" [http-method]=\"'get'\" [http-url]=\"'assets/data/componentdata/gridtemplate.json'\" [data-reader]=\"'data'\"\n              [page-size]=\"10\" [enable-data-filter]=\"false\" (rowSelect)=\"getRowData($event)\">\n              <amexio-data-table-column [width]=\"70\" [data-index]=\"'name_official'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\">\n                  <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                      <amexio-label class=\"datagrid-template\">\n                          <amexio-label>\n                              <amexio-image [width]=\"100\" [path]=\"'assets/images/flags/flags/'+row.flag_32\"></amexio-image>\n                          </amexio-label>\n                          <amexio-label>{{row.name}}</amexio-label>\n          \n                          <amexio-label >( {{row.name_official}} )</amexio-label>\n                      </amexio-label>\n                  </ng-template>\n              </amexio-data-table-column>\n              <amexio-data-table-column [width]=\"20\" [data-index]=\"'latitude'\" [data-type]=\"'number'\" [hidden]=\"false\" [text]=\"'Latitude'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"20\" [data-index]=\"'longitude'\" [data-type]=\"'number'\" [hidden]=\"false\" [text]=\"'Longitude'\"></amexio-data-table-column>\n          </amexio-datagrid>\n          <p>\n              <b>Clicked row data :</b> {{clickedRowData | json}}</p>\n\n\n\n\n          </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Properties<amexio-datagrid>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/data/grid.json'\"\n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [data-index]=\"'name'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\">\n                <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                  <ng-container *ngIf=\"row.deprecated\">\n                    <div style=\"text-decoration: line-through red;\">{{row.name}}</div>\n                  </ng-container>\n                  <ng-container *ngIf=\"!row.deprecated\">\n                    {{row.name}}\n                  </ng-container>\n                </ng-template>\n              </amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'type'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'default'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'description'\" [width]=\"65\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid><br>\n            <amexio-datagrid title=\"Column Properties <amexio-data-table-colum>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/data/grid.json'\"\n                             [data-reader]=\"'columnProperties'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [data-index]=\"'name'\" [width]=\"15\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'type'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'default'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'description'\" [width]=\"65\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br>\n            <amexio-datagrid title=\"Events\" [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/data/grid.json'\" [data-reader]=\"'events'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [data-index]=\"'name'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'description'\" [width]=\"65\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n\n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll;\">\n              <amexio-vertical-tab-view>\n                <amexio-tab title=\"HTML\" [active]=\"true\">\n                  <ng-container *ngIf=\"htmlCode\">\n                    <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                    <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                  </ng-container>\n                </amexio-tab>\n                <amexio-tab title=\"Type Script\">\n                  <ng-container *ngIf=\"typeScriptCode\">\n                    <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                  </ng-container>\n                </amexio-tab>\n                <amexio-tab title=\"DataSource\">\n                  <ng-container *ngIf=\"dataSource\">\n                    <prism-block [code]=\"dataSource\" [language]=\"'json'\"></prism-block>\n                  </ng-container>\n                </amexio-tab>\n              </amexio-vertical-tab-view>  \n            </div>\n            \n          </amexio-tab>\n\n          <amexio-tab title=\"Live\">\n          <p align=\"center\">Amexio Sandbox</p>\n          <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-template-grid?embed=1&file=app/grid/templategrid/templategrid.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n  ",
            styles: [
                "\n    .listbox-StatusYellow {\n      background-color: yellow;\n    }\n    .listbox-StatusGreen  {\n      background-color: green;\n     }\n    .listbox-StatusRed {\n      background-color: red;\n  }\n  \n.red {\n    color: red!important;\n   \n}\n.green {\n    color: green!important;\n   \n}\n.yellow {\n    color: yellow!important;\n    \n}\n.template-progressBar .progress{\n  height:5px !important;\n}  \n"
            ]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GridWithTemplateDemo);
    return GridWithTemplateDemo;
}());



/***/ })

}]);
//# sourceMappingURL=data-gridwithtemplate-gridwithtemplate-demo-module.js.map