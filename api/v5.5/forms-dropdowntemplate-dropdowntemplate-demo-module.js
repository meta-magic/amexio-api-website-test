(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-dropdowntemplate-dropdowntemplate-demo-module"],{

/***/ "./src/app/forms/dropdowntemplate/dropdowntemplate.demo.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/forms/dropdowntemplate/dropdowntemplate.demo.module.ts ***!
  \************************************************************************/
/*! exports provided: DropDownTemplateDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownTemplateDemoModule", function() { return DropDownTemplateDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _dropdowntemplate_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropdowntemplate.demo */ "./src/app/forms/dropdowntemplate/dropdowntemplate.demo.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Created by rashmi on 5/6/18.
 */
var DropDownTemplateDemoModule = /** @class */ (function () {
    function DropDownTemplateDemoModule() {
    }
    DropDownTemplateDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_dropdowntemplate_demo__WEBPACK_IMPORTED_MODULE_6__["DropDownTemplateDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _dropdowntemplate_demo__WEBPACK_IMPORTED_MODULE_6__["DropDownTemplateDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], DropDownTemplateDemoModule);
    return DropDownTemplateDemoModule;
}());



/***/ }),

/***/ "./src/app/forms/dropdowntemplate/dropdowntemplate.demo.ts":
/*!*****************************************************************!*\
  !*** ./src/app/forms/dropdowntemplate/dropdowntemplate.demo.ts ***!
  \*****************************************************************/
/*! exports provided: DropDownTemplateDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownTemplateDemo", function() { return DropDownTemplateDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/**
 * Created by rashmi on 5/6/18.
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


var DropDownTemplateDemo = /** @class */ (function () {
    function DropDownTemplateDemo(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
    }
    //TO LOAD HTML AND TYPESCRIPT CODE
    DropDownTemplateDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        var responseData;
        //HTML FILE
        this.http.get('assets/data/code/forms/dropdowntemplate/form.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/forms/dropdowntemplate/form.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
        //TS FILE
        this.http.get('assets/data/componentdata/gridtemplate.json', { responseType: 'text' }).subscribe(function (data) {
            responseData = data;
        }, function (error) {
        }, function () {
            _this.dataSource = responseData;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    DropDownTemplateDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    DropDownTemplateDemo.prototype.getRowData = function (data) {
        this.clickedRowData = data;
    };
    DropDownTemplateDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dropdowntemplate', template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n         Dropdown with Template \n      </amexio-header>\n      <amexio-body>\n        <p>Drop-Down component has been created to render N numbers of drop-down items based on data-set configured with template.\n          Data-set can be configured using HTTP call OR Define fix number of dropdown-items.\n          User can configure different attributes for enabling filter, multi-select, maximum selection in case of multi\n          select.\n        </p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n            <amexio-row>\n              <amexio-column size=\"6\">\n                <amexio-card header=\"true\">\n                  <amexio-header>\n                     Dropdown with Template \n                  </amexio-header>\n                  <amexio-body>\n                    <amexio-row>\n                      <amexio-column size=\"12\">\n                      <amexio-dropdown [(ngModel)]=\"id\"\n                      [place-holder]=\"'Choose'\"\n                      name=\"id\"\n                      [data-reader]=\"'data'\"\n                      [field-label]=\"'Choose Country'\"\n                      [http-url]=\"'assets/data/componentdata/gridtemplate.json'\"\n                      [http-method]=\"'get'\"\n                      [search]=\"true\"\n                      [display-field]=\"'name'\"\n                      [value-field]=\"'id'\"\n                      [enable-sort]=\"true\"\n                      [sort]=\"'asc'\"\n                      (onSingleSelect)=\"getRowData($event)\">\n                      <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                      <amexio-label>\n                        <amexio-image [width]=\"100\" [path]=\"'assets/images/flags/flags/'+row.flag_32\"></amexio-image>\n                      </amexio-label>&nbsp;&nbsp;\n                      <amexio-label>{{row.name}}</amexio-label>\n                      <amexio-label>( {{row.name_official}} )</amexio-label>\n                      </ng-template>\n                      \n                      </amexio-dropdown>\n                      </amexio-column>\n                    </amexio-row>\n                  </amexio-body>\n                </amexio-card>\n              </amexio-column>\n              <amexio-column [size]=\"6\">\n                <amexio-card header=\"true\">\n                  <amexio-header>\n                    Selected Record Data\n                  </amexio-header>\n                  <amexio-body>\n                  {{clickedRowData|json}}\n                  </amexio-body>\n                </amexio-card>\n              </amexio-column>\n            </amexio-row>\n          </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Properties <amexio-dropdown>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/forms/dropdown.json'\"\n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\">\n           <amexio-data-table-column [data-index]=\"'name'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\">\n                        <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                            <ng-container *ngIf=\"row.deprecated\">\n                                <div style=\"text-decoration: line-through red;\">{{row.name}}</div>\n                            </ng-container>\n                            <ng-container *ngIf=\"!row.deprecated\">\n                                {{row.name}}\n                            </ng-container>\n                        </ng-template>\n                    </amexio-data-table-column>\n            <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Version'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"45\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br>\n            <amexio-datagrid title=\"Events\" [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/forms/dropdown.json'\" [data-reader]=\"'events'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"20\"[data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"80\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n\n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n            <amexio-vertical-tab-view>\n              <amexio-tab title=\"HTML\" [active]=\"true\">\n                <ng-container *ngIf=\"htmlCode\">\n                  <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                  <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Type Script\">\n                <ng-container *ngIf=\"typeScriptCode\">\n                  <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Data Source\">\n                <ng-container *ngIf=\"dataSource\">\n                  <prism-block [code]=\"dataSource\" [language]=\"'json'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n            </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n          <p align=\"center\">Amexio Sandbox</p>\n<iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-dropdown-template?embed=1&file=app/forms/dropdown/dropdown.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n    <!--<amexio-notification [data]=\"copyMsgArray\"></amexio-notification>-->\n\n  "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DropDownTemplateDemo);
    return DropDownTemplateDemo;
}());



/***/ })

}]);
//# sourceMappingURL=forms-dropdowntemplate-dropdowntemplate-demo-module.js.map