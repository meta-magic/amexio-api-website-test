(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-dropdownfilter-dropdownfilter-demo-module"],{

/***/ "./src/app/forms/dropdownfilter/dropdownfilter.demo.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/forms/dropdownfilter/dropdownfilter.demo.module.ts ***!
  \********************************************************************/
/*! exports provided: DropDownFilterDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownFilterDemoModule", function() { return DropDownFilterDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _dropdownfilter_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropdownfilter.demo */ "./src/app/forms/dropdownfilter/dropdownfilter.demo.ts");
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
var DropDownFilterDemoModule = /** @class */ (function () {
    function DropDownFilterDemoModule() {
    }
    DropDownFilterDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_dropdownfilter_demo__WEBPACK_IMPORTED_MODULE_6__["DropDownFilterDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _dropdownfilter_demo__WEBPACK_IMPORTED_MODULE_6__["DropDownFilterDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], DropDownFilterDemoModule);
    return DropDownFilterDemoModule;
}());



/***/ }),

/***/ "./src/app/forms/dropdownfilter/dropdownfilter.demo.ts":
/*!*************************************************************!*\
  !*** ./src/app/forms/dropdownfilter/dropdownfilter.demo.ts ***!
  \*************************************************************/
/*! exports provided: DropDownFilterDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownFilterDemo", function() { return DropDownFilterDemo; });
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


var DropDownFilterDemo = /** @class */ (function () {
    function DropDownFilterDemo(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
    }
    //TO LOAD HTML AND TYPESCRIPT CODE
    DropDownFilterDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        var responseData;
        //HTML FILE
        this.http.get('assets/data/code/forms/dropdownfilter/form.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/forms/dropdownfilter/form.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
        //TS FILE
        this.http.get('assets/data/componentdata/country.json', { responseType: 'text' }).subscribe(function (data) {
            responseData = data;
        }, function (error) {
        }, function () {
            _this.dataSource = responseData;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    DropDownFilterDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    DropDownFilterDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dropdownfilter', template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n         Dropdown Filter \n      </amexio-header>\n      <amexio-body>\n        <p>Drop-Down component has been created to render N numbers of drop-down items based on data-set configured.\n          Data-set can be configured using HTTP call OR Define fix number of dropdown-items. \n          User can configure different attributes for enabling filter, multi-select, maximum selection in case of multi select.\n        </p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n            <amexio-row>\n              <amexio-column size=\"6\">\n                <amexio-card header=\"true\">\n                  <amexio-header>\n                     Dropdown Filter Component \n                  </amexio-header>\n                  <amexio-body>\n                    <amexio-row>\n                      <amexio-column size=\"12\">\n                        <amexio-dropdown [(ngModel)]=\"countryCode1\"\n                                         [place-holder]=\"'Choose'\"\n                                         name=\"countryCode1\"\n                                         [search]=\"true\"\n                                         [data-reader]=\"'data'\"\n                                         [field-label]=\"'Choose Country'\"\n                                         [http-url]=\"'assets/data/componentdata/country.json'\"\n                                         [http-method]=\"'get'\"\n                                         [display-field]=\"'countryName'\"\n                                         [value-field]=\"'countryCode1'\"\n                                         [enable-sort]=\"true\"\n                                         [sort]=\"'asc'\">\n                        </amexio-dropdown>\n                      </amexio-column>\n                    </amexio-row>\n                  </amexio-body>\n                </amexio-card>\n              </amexio-column>\n              <amexio-column [size]=\"6\">\n                <amexio-card header=\"true\">\n                  <amexio-header>\n                    Selected Record Data\n                  </amexio-header>\n                  <amexio-body>\n                  <ng-container *ngIf=\"countryCode1\">\n                    {{countryCode1}}\n                  </ng-container>\n                  </amexio-body>\n                </amexio-card>\n              </amexio-column>\n            </amexio-row>\n          </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Properties <amexio-dropdown>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/forms/dropdown.json'\"\n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\">\n               <amexio-data-table-column [data-index]=\"'name'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\">\n                        <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                            <ng-container *ngIf=\"row.deprecated\">\n                                <div style=\"text-decoration: line-through red;\">{{row.name}}</div>\n                            </ng-container>\n                            <ng-container *ngIf=\"!row.deprecated\">\n                                {{row.name}}\n                            </ng-container>\n                        </ng-template>\n                    </amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br>\n            <amexio-datagrid title=\"Events\" [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/forms/dropdown.json'\" [data-reader]=\"'events'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"20\"[data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"80\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n\n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n            <amexio-vertical-tab-view>\n              <amexio-tab title=\"HTML\" [active]=\"true\">\n                <ng-container *ngIf=\"htmlCode\">\n                  <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                  <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Type Script\">\n                <ng-container *ngIf=\"typeScriptCode\">\n                  <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Data Source\">\n                <ng-container *ngIf=\"dataSource\">\n                  <prism-block [code]=\"dataSource\" [language]=\"'json'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n            </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n          <p align=\"center\">Amexio Sandbox</p>\n<iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-dropdown-filter?embed=1&file=app/forms/dropdownfilter/dropdownfilter.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n    <!--<amexio-notification [data]=\"copyMsgArray\"></amexio-notification>-->\n\n  "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DropDownFilterDemo);
    return DropDownFilterDemo;
}());



/***/ })

}]);
//# sourceMappingURL=forms-dropdownfilter-dropdownfilter-demo-module.js.map