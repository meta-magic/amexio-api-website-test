(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panes-fieldset-fieldset-demo-module"],{

/***/ "./src/app/panes/fieldset/fieldset.demo.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/panes/fieldset/fieldset.demo.component.ts ***!
  \***********************************************************/
/*! exports provided: FieldSetDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldSetDemoComponent", function() { return FieldSetDemoComponent; });
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
/**
 * Created by pratik on 16/1/18.
 */


var FieldSetDemoComponent = /** @class */ (function () {
    function FieldSetDemoComponent(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
    }
    FieldSetDemoComponent.prototype.getDta = function () {
        var _this = this;
        this.asyncFlag = true;
        setTimeout(function () {
            _this.asyncFlag = false;
        }, 3000);
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    FieldSetDemoComponent.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/layout/fieldset/fieldset.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/layout/fieldset/fieldset.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    FieldSetDemoComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    FieldSetDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fieldset-demo',
            template: "\n   <amexio-card header=\"true\">\n     <amexio-header>\n        Fieldset \n     </amexio-header>\n     <amexio-body>\n       <p>A FieldSet is a great way to visually separate elements of a form. It's normally used when you have a form with fields that can be divided into groups.Fieldset can optionally have a title at the top</p>\n       <amexio-tab-view>\n         <amexio-tab title=\"Demo\" active=\"true\">\n          <amexio-row>\n            <amexio-column [size]=\"12\">\n              <amexio-fieldset [collapsible]=\"true\" title=\"Employee Registration\">\n                <amexio-row>\n                  <amexio-column [size]=\"6\">\n                    <amexio-text-input [field-label]=\"'Name'\" name=\"country\"\n                                       [place-holder]=\"'Enter name'\"\n                                       [enable-popover]=\"true\"\n                                       [icon-feedback]=\"true\"\n                                       [allow-blank]=\"false\" [error-msg]=\"'Please enter name'\"\n                                       [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Name should be minimum 3 characters'\"\n                                       [max-error-msg]=\"'Name should be less than 15 characters'\"\n                    >\n                    </amexio-text-input>\n                  </amexio-column>\n                  <amexio-column [size]=\"6\">\n                    <amexio-text-input [field-label]=\"'Surname'\" name=\"name\"\n                                       [place-holder]=\"'Enter surname'\"\n                                       [enable-popover]=\"true\"\n                                       [icon-feedback]=\"true\"\n                                       [allow-blank]=\"false\" [error-msg]=\"'Please enter Surname'\"\n                                       [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Surname should be minimum 3 characters'\"\n                                       [max-error-msg]=\"'Surname should be less than 15 characters'\"\n                    >\n                    </amexio-text-input>\n                  </amexio-column>\n                </amexio-row>\n                <amexio-row>\n                  <amexio-column [size]=\"6\">\n\n                    <amexio-textarea-input [field-label]=\"'Address'\" name=\"Address\"\n                                           [place-holder]=\"'Enter address'\"\n                                           [error-msg]=\"'Please enter address'\"\n                                           [icon-feedback]=\"true\"\n                                           [rows]=\"'4'\" [columns]=\"'2'\"\n                                           [allow-blank]=\"false\" [enable-popover]=\"true\"\n\n                    >\n                    </amexio-textarea-input>\n\n\n                  </amexio-column>\n             \n                </amexio-row>\n\n              </amexio-fieldset>\n            </amexio-column>\n          </amexio-row>\n         </amexio-tab>\n         <amexio-tab title=\"API Reference\">\n           <amexio-datagrid title=\"Properties<amexio-fieldset>\" [enable-column-fiter]=\"false\"\n                            [http-method]=\"'get'\"\n                            [http-url]=\"'assets/apireference/layout/fieldset/fieldset.json'\"\n                            [data-reader]=\"'properties'\"\n                            [enable-data-filter]=\"false\" >\n             <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n           </amexio-datagrid>\n\n           \n         </amexio-tab>\n         <amexio-tab title=\"Source\">\n           <div style=\"overflow-y: scroll\">\n           <amexio-vertical-tab-view>\n             <amexio-tab title=\"HTML\" [active]=\"true\">\n               <ng-container *ngIf=\"htmlCode\">\n                 <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                 <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n               </ng-container>\n             </amexio-tab>\n             <amexio-tab title=\"Type Script\">\n               <ng-container *ngIf=\"typeScriptCode\">\n                 <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n               </ng-container>\n             </amexio-tab>\n           </amexio-vertical-tab-view>\n           </div>\n         </amexio-tab>\n         <amexio-tab title=\"Live\">\n         <p align=\"center\">Amexio Sandbox</p>\n         <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-fieldset?embed=1&file=app/panels/fieldset/fieldset.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n         </amexio-tab>\n       </amexio-tab-view>\n     </amexio-body>\n   </amexio-card>\n "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FieldSetDemoComponent);
    return FieldSetDemoComponent;
}());



/***/ }),

/***/ "./src/app/panes/fieldset/fieldset.demo.module.ts":
/*!********************************************************!*\
  !*** ./src/app/panes/fieldset/fieldset.demo.module.ts ***!
  \********************************************************/
/*! exports provided: FieldSetDemoModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldSetDemoModule", function() { return FieldSetDemoModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fieldset_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fieldset.demo.component */ "./src/app/panes/fieldset/fieldset.demo.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by pratik on 16/1/18.
 */








var routes = [
    { path: '', component: _fieldset_demo_component__WEBPACK_IMPORTED_MODULE_2__["FieldSetDemoComponent"] },
];
var FieldSetDemoModule = /** @class */ (function () {
    function FieldSetDemoModule() {
    }
    FieldSetDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_6__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [_fieldset_demo_component__WEBPACK_IMPORTED_MODULE_2__["FieldSetDemoComponent"]]
        })
    ], FieldSetDemoModule);
    return FieldSetDemoModule;
}());

var routedComponents = [_fieldset_demo_component__WEBPACK_IMPORTED_MODULE_2__["FieldSetDemoComponent"]];


/***/ })

}]);
//# sourceMappingURL=panes-fieldset-fieldset-demo-module.js.map