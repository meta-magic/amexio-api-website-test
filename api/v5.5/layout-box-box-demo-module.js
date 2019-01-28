(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-box-box-demo-module"],{

/***/ "./src/app/layout/box/box.demo.module.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/box/box.demo.module.ts ***!
  \***********************************************/
/*! exports provided: BoxDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxDemoModule", function() { return BoxDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _box_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./box.demo */ "./src/app/layout/box/box.demo.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Created by anagha on 13/3/18.
 */
var BoxDemoModule = /** @class */ (function () {
    function BoxDemoModule() {
    }
    BoxDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_box_demo__WEBPACK_IMPORTED_MODULE_6__["BoxDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _box_demo__WEBPACK_IMPORTED_MODULE_6__["BoxDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], BoxDemoModule);
    return BoxDemoModule;
}());



/***/ }),

/***/ "./src/app/layout/box/box.demo.ts":
/*!****************************************!*\
  !*** ./src/app/layout/box/box.demo.ts ***!
  \****************************************/
/*! exports provided: BoxDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxDemo", function() { return BoxDemo; });
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
 * Created by anaghak07 on 13/3/18.
 */


var BoxDemo = /** @class */ (function () {
    function BoxDemo(http) {
        this.http = http;
        this.age = 10;
        this.getHtmlAndTypeScriptCode();
    }
    //TO LOAD HTML AND TYPESCRIPT CODE
    BoxDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/layout/box/box.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/layout/box/box.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    BoxDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    BoxDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'box-demo', template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n        Amexio Box\n      </amexio-header>\n      <amexio-body>\n        <p>Amexio Box can be easily wrapped around any other component and configure using the different responsive styling</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n          <h2>Box Component</h2>\n          <amexio-row>\n            <amexio-column [size]=\"4\">\n              <amexio-box border-color =\"red\" border=\"top\" padding=\"true\" closable=\"'true'\">\n                 <amexio-label  border=\"top\">This is small-bold amexio label with red border</amexio-label>\n              </amexio-box>\n            </amexio-column>\n            <amexio-column [size]=\"4\">\n              <amexio-box border-color =\"blue\" border=\"bottom\" padding=\"true\">\n                <amexio-label  border=\"bottom\">This is small-bold amexio label with blue border</amexio-label>\n              </amexio-box>\n              </amexio-column>\n              <amexio-column [size]=\"4\">\n            <amexio-box border-color =\"yellow\" border=\"right\" padding=\"true\">\n              <amexio-label  border=\"right\">This is small-bold amexio label with yellow border</amexio-label>\n            </amexio-box>   \n            </amexio-column>\n            </amexio-row>\n            <br />\n            <amexio-row>\n            <amexio-column [size]=\"4\">\n            <amexio-box border-color =\"green\" border=\"left\" padding=\"true\">\n              <amexio-label  border=\"left\">This is small-bold amexio label with green border</amexio-label>\n            </amexio-box>\n            </amexio-column>\n              <amexio-column [size]=\"4\">\n            <amexio-box background-color=\"purple\" padding=\"true\">\n              <amexio-label>This is small-bold amexio label with purple bg color</amexio-label>\n           </amexio-box>  \n           </amexio-column>\n              <amexio-column [size]=\"4\">\n           <amexio-box background-color=\"yellow\" padding=\"true\">\n              <amexio-label>This is small-bold amexio label with background-color yellow</amexio-label>\n            </amexio-box>  </amexio-column>\n            </amexio-row>\n            <br />\n            <amexio-row>\n            <amexio-column [size]=\"4\">\n            <amexio-box background-color=\"red\" padding=\"true\">\n              <amexio-label>This is small-bold amexio label with background-color red</amexio-label>\n            </amexio-box>  \n            </amexio-column>\n              <amexio-column [size]=\"4\">\n            <amexio-box background-color=\"blue\" padding=\"true\">\n              <amexio-label>This is small-bold amexio label with background-color blue</amexio-label>\n            </amexio-box>        \n            </amexio-column>\n              <amexio-column [size]=\"4\">\n              <amexio-box border-color =\"green\" border=\"bottom\" padding=\"true\" background-color=\"yellow\">\n              <amexio-label >This is small-bold amexio label with background-color green</amexio-label>\n              </amexio-box></amexio-column>\n              </amexio-row>\n              <br />\n              <amexio-row>\n \n              <amexio-column [size]=\"4\">\n              <amexio-box border-color =\"brown\" border=\"right-left\" padding=\"true\" background-color=\"brown\">\n              <amexio-label >This is small-bold amexio label with background-color</amexio-label>\n              </amexio-box>\n              </amexio-column>\n                <amexio-column [size]=\"4\">\n                  <amexio-box border-color =\"purple\" border=\"all\" padding=\"true\" background-color=\"purple\" box-height=\"100px\" box-width=\"282px\">\n                    <amexio-text-input field-label=\"Aadhar No\" name=\"name\"\n                              place-holder=\"Enter aadhar card no\"\n                              icon-feedback=\"true\">\n                    </amexio-text-input>\n                  </amexio-box>\n                </amexio-column>\n              <amexio-column [size]=\"4\">\n              <amexio-box border=\"top-bottom\" padding=\"true\">\n              <amexio-label >This is small-bold amexio label with background-color</amexio-label>        \n              </amexio-box>\n              </amexio-column>\n           </amexio-row>\n\n          </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Properties <amexio-box>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/layout/box.json'\"\n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\" >\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Version'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"45\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>            \n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n              <amexio-vertical-tab-view>\n                <amexio-tab title=\"HTML\" [active]=\"true\">\n                  <ng-container *ngIf=\"htmlCode\">\n                    <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                    <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                  </ng-container>\n                </amexio-tab>\n                <amexio-tab title=\"Type Script\">\n                  <ng-container *ngIf=\"typeScriptCode\">\n                    <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                  </ng-container>\n                </amexio-tab>\n              </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n      <p align=\"center\">Amexio Sandbox</p>\n<iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v41-box?embed=1&file=app/forms/box/box.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n\n  "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BoxDemo);
    return BoxDemo;
}());



/***/ })

}]);
//# sourceMappingURL=layout-box-box-demo-module.js.map