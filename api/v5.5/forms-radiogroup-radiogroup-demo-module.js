(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-radiogroup-radiogroup-demo-module"],{

/***/ "./src/app/forms/radiogroup/radiogroup.demo.module.ts":
/*!************************************************************!*\
  !*** ./src/app/forms/radiogroup/radiogroup.demo.module.ts ***!
  \************************************************************/
/*! exports provided: RadioGroupDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroupDemoModule", function() { return RadioGroupDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _radiogroup_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./radiogroup.demo */ "./src/app/forms/radiogroup/radiogroup.demo.ts");
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
var RadioGroupDemoModule = /** @class */ (function () {
    function RadioGroupDemoModule() {
    }
    RadioGroupDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_radiogroup_demo__WEBPACK_IMPORTED_MODULE_6__["RadioGroupDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _radiogroup_demo__WEBPACK_IMPORTED_MODULE_6__["RadioGroupDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], RadioGroupDemoModule);
    return RadioGroupDemoModule;
}());



/***/ }),

/***/ "./src/app/forms/radiogroup/radiogroup.demo.ts":
/*!*****************************************************!*\
  !*** ./src/app/forms/radiogroup/radiogroup.demo.ts ***!
  \*****************************************************/
/*! exports provided: RadioGroupDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroupDemo", function() { return RadioGroupDemo; });
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


var RadioGroupDemo = /** @class */ (function () {
    function RadioGroupDemo(http) {
        this.http = http;
        this.model1 = 'male';
        this.model2 = 'female';
        this.model3 = 'male1';
        this.model4 = 'female';
        this.radioGroupData = {
            response: {
                data: [{
                        gender: 'Male',
                        genderId: 'male'
                    }, {
                        gender: 'Female',
                        genderId: 'female'
                    },
                ]
            }
        };
        this.getHtmlAndTypeScriptCode();
    }
    //selected Checkbox event
    RadioGroupDemo.prototype.setSelectedGender = function (data) {
        //make some operation here
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    RadioGroupDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        var responseData;
        //HTML FILE
        this.http.get('assets/data/code/forms/radiogroup/form.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/forms/radiogroup/form.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
        //JSON FILE
        this.http.get('assets/data/code/forms/radiogroup/radiogroup.json', { responseType: 'text' }).subscribe(function (data) {
            responseData = data;
        }, function (error) {
        }, function () {
            _this.dataSource = responseData;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    RadioGroupDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    RadioGroupDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'radiogroup-demo', template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n         Radio Group\n      </amexio-header>\n      <amexio-body>\n        <p>Radio Group input component has been created to render N numbers of radio-button based on data-set configured.\n          Data-set can be configured using HTTP call OR Define fix number of radio-button.</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n            <amexio-row>\n              <amexio-column size=\"6\">\n                <amexio-card header=\"true\">\n                  <amexio-header>\n                     Horizontal Radio Group\n                  </amexio-header>\n                  <amexio-body> \n                    <amexio-radio-group [field-label]=\"'Horizontal Radio Group'\"\n                                        name =\"gender\"\n                                        [data-reader]=\"'response.data'\"\n                                        [display-field]=\"'gender'\"\n                                        [value-field]=\"'genderId'\"\n                                        [horizontal]=\"true\"\n                                        [data]=\"radioGroupData\"\n                                        [(ngModel)]=\"model1\"\n                                        (onSelection)=\"setSelectedGender($event)\">\n                    </amexio-radio-group>\n                  </amexio-body>\n                </amexio-card>\n              </amexio-column>\n              <amexio-column [size]=\"6\">\n                <amexio-card [header]=\"true\">\n                  <amexio-header>\n                     Vertical Radio Group With Http Url\n                  </amexio-header>\n                  <amexio-body> \n                    <amexio-radio-group [field-label]=\"'Vertical Radio Group'\" name =\"gender1\"\n                                        [data-reader]=\"'data'\"\n                                        [display-field]=\"'gender'\"\n                                        [value-field]=\"'genderId'\"\n                                        [http-method]=\"'get'\"\n                                        [(ngModel)]=\"model2\"\n                                        [http-url]=\"'assets/data/componentdata/radiogroup.json'\"\n                                        (onSelection)=\"setSelectedGender($event)\">\n                    </amexio-radio-group>\n                  </amexio-body>\n                </amexio-card>\n              </amexio-column>\n            </amexio-row>\n\n            <amexio-row>\n              <amexio-column size=\"6\">\n                <amexio-card header=\"true\">\n                  <amexio-header>\n                    Horizontal Radio Group Disabled\n                  </amexio-header>\n                  <amexio-body> \n                    <amexio-radio-group [field-label]=\"'Horizontal Radio Group'\" name =\"gendery\"\n                                        [data-reader]=\"'radiodata'\"\n                                        [display-field]=\"'gender'\"\n                                        [value-field]=\"'genderId'\"\n                                        [http-method]=\"'get'\"\n                                        horizontal=\"true\"\n                                        [(ngModel)]=\"model3\"\n                                        [http-url]=\"'assets/data/componentdata/radiogroup.json'\"\n                                        disabled=\"true\">\n                    </amexio-radio-group>\n                   \n\n                  </amexio-body>\n                </amexio-card>\n              </amexio-column>\n              <amexio-column size=\"6\">\n              <amexio-card header=\"true\">\n                <amexio-header>\n                  Horizontal Radio Group single item disabled\n                </amexio-header>\n                <amexio-body>\n              \n                  <amexio-radio-group [field-label]=\"'Horizontal Radio Group '\" name =\"genderx\"\n                                      [data-reader]=\"'data'\"\n                                      [(ngModel)]=\"model4\"\n                                      [display-field]=\"'gender'\"\n                                      [value-field]=\"'genderId'\"\n                                      [http-method]=\"'get'\"\n                                      horizontal=\"true\"\n                                      [http-url]=\"'assets/data/componentdata/radiogroup_disable.json'\"\n                                      >\n                  </amexio-radio-group>\n                  <h2>Radio Group model Binding value </h2>\n                  {{model4 | json}}\n                </amexio-body>\n              </amexio-card>\n            </amexio-column>\n            </amexio-row>\n\n\n          </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Properties <amexio-radio-group>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/forms/radiogroup.json'\"\n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br>\n            <amexio-datagrid title=\"Events\" [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/forms/radiogroup.json'\" [data-reader]=\"'events'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"20\"[data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"80\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n\n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n            <amexio-vertical-tab-view>\n              <amexio-tab title=\"HTML\" [active]=\"true\">\n                <ng-container *ngIf=\"htmlCode\">\n                  <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                  <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Type Script\">\n                <ng-container *ngIf=\"typeScriptCode\">\n                  <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Data Source\">\n                <ng-container *ngIf=\"dataSource\">\n                  <prism-block [code]=\"dataSource\" [language]=\"'json'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n            </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n           <p align=\"center\">Amexio Sandbox</p>\n<iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-radiogroup?embed=1&file=app/forms/radiogroup/radiogroup.demo.html&view=editor\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n    <!--<amexio-notification [data]=\"copyMsgArray\"></amexio-notification>-->\n\n  "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RadioGroupDemo);
    return RadioGroupDemo;
}());



/***/ })

}]);
//# sourceMappingURL=forms-radiogroup-radiogroup-demo-module.js.map