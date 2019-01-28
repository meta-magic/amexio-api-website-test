(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-label-label-demo-module"],{

/***/ "./src/app/forms/label/label.demo.module.ts":
/*!**************************************************!*\
  !*** ./src/app/forms/label/label.demo.module.ts ***!
  \**************************************************/
/*! exports provided: LabelDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelDemoModule", function() { return LabelDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _label_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./label.demo */ "./src/app/forms/label/label.demo.ts");
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
var LabelDemoModule = /** @class */ (function () {
    function LabelDemoModule() {
    }
    LabelDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_label_demo__WEBPACK_IMPORTED_MODULE_6__["LabelDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _label_demo__WEBPACK_IMPORTED_MODULE_6__["LabelDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], LabelDemoModule);
    return LabelDemoModule;
}());



/***/ }),

/***/ "./src/app/forms/label/label.demo.ts":
/*!*******************************************!*\
  !*** ./src/app/forms/label/label.demo.ts ***!
  \*******************************************/
/*! exports provided: LabelDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelDemo", function() { return LabelDemo; });
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


var LabelDemo = /** @class */ (function () {
    function LabelDemo(http) {
        this.http = http;
        this.age = 10;
        this.getHtmlAndTypeScriptCode();
    }
    //TO LOAD HTML AND TYPESCRIPT CODE
    LabelDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/forms/label/label.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/forms/label/label.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    LabelDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    LabelDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'label-demo', template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n        Amexio Label\n      </amexio-header>\n      <amexio-body>\n        <p>Amexio Label can be easily wrapped around any text and configure using the different responsive styling</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n          <h2>Label Component</h2>\n          <amexio-row>\n  <amexio-column [size]=\"4\">\n    <amexio-label size=\"large\">This is large amexio label</amexio-label>\n  </amexio-column>\n  <amexio-column [size]=\"4\">\n    <amexio-label size=\"large-bold\">This is large-bold amexio label </amexio-label>\n  </amexio-column>\n  <amexio-column [size]=\"4\">\n    <amexio-label size=\"medium-bold\">This is medium-bold amexio label</amexio-label>\n  </amexio-column>\n</amexio-row>\n<br />\n<amexio-row>\n  <amexio-column [size]=\"4\">\n    <amexio-label>This is small amexio label</amexio-label>\n  </amexio-column>\n  <amexio-column [size]=\"4\">\n    <amexio-label size=\"small-bold\">This is small-bold amexio label</amexio-label>\n  </amexio-column>\n  <amexio-column [size]=\"4\">\n    <amexio-label size=\"medium-bold\" font-color=\"#FF5733\">This is amexio label</amexio-label>\n  </amexio-column>\n</amexio-row>\n<br />\n<h2>Label Component With Badges </h2>\n<amexio-row>\n  <amexio-column [size]=\"4\">\n    <amexio-label size=\"large\" [badge]=\"1\">This is large amexio label</amexio-label>\n  </amexio-column>\n  <amexio-column [size]=\"4\">\n    <amexio-label size=\"large-bold\" [badge]=\"2\">This is large-bold amexio label</amexio-label>\n  </amexio-column>\n  <amexio-column [size]=\"4\">\n    <amexio-label size=\"medium-bold\" [badge]=\"3\">This is medium-bold amexio label</amexio-label>\n  </amexio-column>\n</amexio-row>\n<amexio-row>\n  <amexio-column [size]=\"4\">\n    <amexio-label size=\"small\" [badge]=\"3\">This is small amexio label</amexio-label>\n  </amexio-column>\n  <amexio-column [size]=\"4\">\n    <amexio-label size=\"small-bold\" [badge]=\"2\">This is small-bold amexio label</amexio-label>\n  </amexio-column>\n  <amexio-column [size]=\"4\">\n    <amexio-label size=\"medium-bold\" font-color=\"#FF5733\" [badge]=\"5\">This is medium-bold amexio label</amexio-label>\n  </amexio-column>\n</amexio-row>\n<h2>Box Component</h2>\n<amexio-row>\n  <amexio-column [size]=\"4\">\n    <amexio-box border-color=\"red\" border=\"top\" padding=\"true\" closable=\"'true'\">\n      <amexio-label>This is small-bold amexio label with red border</amexio-label>\n    </amexio-box>\n  </amexio-column>\n  <amexio-column [size]=\"4\">\n    <amexio-box border-color=\"blue\" border=\"bottom\" padding=\"true\">\n      <amexio-label>This is small-bold amexio label with blue border</amexio-label>\n    </amexio-box>\n  </amexio-column>\n  <amexio-column [size]=\"4\">\n    <amexio-box border-color=\"yellow\" border=\"right\" padding=\"true\">\n      <amexio-label>This is small-bold amexio label with yellow border</amexio-label>\n    </amexio-box>\n  </amexio-column>\n</amexio-row>\n<br />\n<amexio-row>\n  <amexio-column [size]=\"4\">\n    <amexio-box border-color=\"green\" border=\"left\" padding=\"true\">\n      <amexio-label>This is small-bold amexio label with green border</amexio-label>\n    </amexio-box>\n  </amexio-column>\n  <amexio-column [size]=\"4\">\n    <amexio-box background-color=\"purple\" padding=\"true\">\n      <amexio-label>This is small-bold amexio label with purple bg color</amexio-label>\n    </amexio-box>\n  </amexio-column>\n  <amexio-column [size]=\"4\">\n    <amexio-box background-color=\"yellow\" padding=\"true\">\n      <amexio-label>This is small-bold amexio label with background-color yellow</amexio-label>\n    </amexio-box>\n  </amexio-column>\n</amexio-row>\n<br />\n<amexio-row>\n  <amexio-column [size]=\"4\">\n    <amexio-box background-color=\"red\" padding=\"true\">\n      <amexio-label>This is small-bold amexio label with background-color red</amexio-label>\n    </amexio-box>\n  </amexio-column>\n  <amexio-column [size]=\"4\">\n    <amexio-box background-color=\"blue\" padding=\"true\">\n      <amexio-label>This is small-bold amexio label with background-color blue</amexio-label>\n    </amexio-box>\n  </amexio-column>\n  <amexio-column [size]=\"4\">\n    <amexio-box border-color=\"green\" border=\"bottom\" padding=\"true\" background-color=\"yellow\">\n      <amexio-label>This is small-bold amexio label with background-color green</amexio-label>\n    </amexio-box>\n  </amexio-column>\n</amexio-row>\n<br />\n<amexio-row>\n\n  <amexio-column [size]=\"4\">\n    <amexio-box border-color=\"brown\" border=\"right-left\" padding=\"true\" background-color=\"brown\">\n      <amexio-label>This is small-bold amexio label with background-color</amexio-label>\n    </amexio-box>\n  </amexio-column>\n  <amexio-column [size]=\"4\">\n    <amexio-box border-color=\"purple\" border=\"all\" padding=\"true\" background-color=\"purple\" box-height=\"100px\"\n      box-width=\"282px\">\n      <amexio-text-input field-label=\"Aadhar No\" name=\"name\" place-holder=\"Enter aadhar card no\" icon-feedback=\"true\">\n      </amexio-text-input>\n    </amexio-box>\n  </amexio-column>\n  <amexio-column [size]=\"4\">\n    <amexio-box border=\"top-bottom\" padding=\"true\">\n      <amexio-label>This is small-bold amexio label with background-color</amexio-label>\n    </amexio-box>\n  </amexio-column>\n</amexio-row>\n\n          </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Properties <amexio-label>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/forms/label.json'\"\n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\" >\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Version'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br>\n            \n            <amexio-datagrid title=\"Events\" [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/forms/label.json'\" [data-reader]=\"'events'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"20\"[data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"80\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n              <amexio-vertical-tab-view>\n                <amexio-tab title=\"HTML\" [active]=\"true\">\n                  <ng-container *ngIf=\"htmlCode\">\n                    <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                    <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                  </ng-container>\n                </amexio-tab>\n                <amexio-tab title=\"Type Script\">\n                  <ng-container *ngIf=\"typeScriptCode\">\n                    <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                  </ng-container>\n                </amexio-tab>\n              </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n      <p align=\"center\">Amexio Sandbox</p>\n<iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-label?embed=1&file=app/forms/label/label.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n    <!--<amexio-notification [data]=\"copyMsgArray\"></amexio-notification>-->\n\n  "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LabelDemo);
    return LabelDemo;
}());



/***/ })

}]);
//# sourceMappingURL=forms-label-label-demo-module.js.map