(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-card-cardimage-cardimage-demo-module"],{

/***/ "./src/app/layout/card/cardimage/cardimage.demo.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/card/cardimage/cardimage.demo.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card header=\"true\">\n    <amexio-header>\n        Card\n    </amexio-header>\n    <amexio-body>\n        <p>A Simple Card which renders card based on title, body and actions user has configured</p>\n        <amexio-tab-view>\n            <amexio-tab title=\"Demo\" active=\"true\">\n                <amexio-row>\n                    <amexio-column size=\"3\" [fit]=\"true\">\n                        <amexio-card [header]=\"false\" [footer]=\"true\" [footer-align]=\"'right'\">\n                            <amexio-body>\n                                <amexio-image path=\"assets/images/carousel/set1/1.jpg\"></amexio-image>\n                                  <amexio-label size=\"small-bold\">Let your startup grow!</amexio-label>\n                                <br />  <br />\n                                <amexio-label size=\"small\">Temporibus autem quibusdam et aut officiis debitis aut rerum\n                                    necessitatibus saepe eveniet ut et voluptates.</amexio-label> \n                                  </amexio-body>\n                            <amexio-action>\n                                <amexio-button [label]=\"'Button'\" [type]=\"'primary'\"></amexio-button>\n                            </amexio-action>\n                        </amexio-card>\n                    </amexio-column>\n\n                    <amexio-column size=\"3\"  [fit]=\"true\">\n                        <amexio-card [header]=\"true\" [footer]=\"true\" [footer-align]=\"'left'\" [header-align]=\"'left'\">\n                            <amexio-header>\n                                Coffee\n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-image path=\"assets/images/carousel/set1/2.jpg\"></amexio-image>\n                                <amexio-label size=\"small\">Temporibus autem quibusdam et aut officiis debitis aut rerum\n                                    necessitatibus saepe eveniet ut et voluptates.</amexio-label>\n                            </amexio-body>\n                            <amexio-action>\n                                <amexio-button [label]=\"'Button'\" [type]=\"'primary'\"></amexio-button>\n                            </amexio-action>\n                        </amexio-card>\n                    </amexio-column>\n\n                    <amexio-column size=\"3\"  [fit]=\"true\">\n                        <amexio-card [header]=\"true\" [footer]=\"true\" [footer-align]=\"'right'\" [header-align]=\"'right'\">\n                            <amexio-header>\n                                Animals\n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-image path=\"assets/images/carousel/set1/4.jpg\"></amexio-image>\n                                <amexio-label size=\"small\">Temporibus autem quibusdam et aut officiis debitis aut rerum\n                                    necessitatibus saepe eveniet ut et voluptates.</amexio-label>\n                            </amexio-body>\n                            <amexio-action>\n                                <amexio-button [label]=\"'Button'\" [type]=\"'primary'\"></amexio-button>\n                            </amexio-action>\n                        </amexio-card>\n                    </amexio-column>\n\n                    <amexio-column size=\"3\"  [fit]=\"true\">      \n                        <amexio-card [header]=\"true\" [footer]=\"true\" [footer-align]=\"'center'\" [header-align]=\"'center'\">\n                            <amexio-header>\n                                Morning Walk\n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-image path=\"assets/images/carousel/set1/3.jpg\"></amexio-image>\n                               \n                                <amexio-label size=\"small\">Temporibus autem quibusdam et aut officiis debitis aut rerum\n                                    necessitatibus saepe eveniet ut et voluptates.</amexio-label>\n                            </amexio-body>\n                            <amexio-action>\n                                <amexio-button [label]=\"'Save'\" [type]=\"'primary'\"></amexio-button>\n                                <amexio-button [label]=\"'Cancel'\" [type]=\"'default'\"></amexio-button>\n                            </amexio-action>\n\n                        </amexio-card>\n                    </amexio-column>\n                </amexio-row>\n\n            </amexio-tab>\n            <amexio-tab title=\"API Reference\">\n                <amexio-datagrid title=\"Properties<amexio-card>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\"\n                    [http-url]=\"'assets/apireference/layout/card.json'\" [data-reader]=\"'properties'\"\n                    [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n\n\n            </amexio-tab>\n            <amexio-tab title=\"Source\">\n                <div style=\"overflow-y: scroll\">\n                    <amexio-vertical-tab-view>\n                        <amexio-tab title=\"HTML\" [active]=\"true\">\n                            <ng-container *ngIf=\"htmlCode\">\n                                <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                                <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"Type Script\">\n                            <ng-container *ngIf=\"typeScriptCode\">\n                                <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                    </amexio-vertical-tab-view>\n                </div>\n            </amexio-tab>\n            <amexio-tab title=\"Live\">\n                <p align=\"center\">Amexio Sandbox</p>\n                <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-cardimage?embed=1&file=app/layouts/cardimage/cardimage.demo.html\"\n                    frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n            </amexio-tab>\n        </amexio-tab-view>\n    </amexio-body>\n</amexio-card>\n<!--<amexio-notification [data]=\"copyMsgArray\"></amexio-notification>-->"

/***/ }),

/***/ "./src/app/layout/card/cardimage/cardimage.demo.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/card/cardimage/cardimage.demo.module.ts ***!
  \****************************************************************/
/*! exports provided: CardImageDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImageDemoModule", function() { return CardImageDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _cardimage_demo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cardimage.demo */ "./src/app/layout/card/cardimage/cardimage.demo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Created by sagar on 11/1/18.
 */
var CardImageDemoModule = /** @class */ (function () {
    function CardImageDemoModule() {
    }
    CardImageDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_cardimage_demo__WEBPACK_IMPORTED_MODULE_7__["CardImageDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"], _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _cardimage_demo__WEBPACK_IMPORTED_MODULE_7__["CardImageDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], CardImageDemoModule);
    return CardImageDemoModule;
}());



/***/ }),

/***/ "./src/app/layout/card/cardimage/cardimage.demo.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/card/cardimage/cardimage.demo.ts ***!
  \*********************************************************/
/*! exports provided: CardImageDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImageDemo", function() { return CardImageDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
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


var CardImageDemo = /** @class */ (function () {
    function CardImageDemo(http) {
        this.http = http;
        this.flag = true;
        this.getHtmlAndTypeScriptCode();
    }
    //TO LOAD HTML AND TYPESCRIPT CODE
    CardImageDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/layout/card/cardimage/layout.html').subscribe(function (data) {
            responseHtml = data.text();
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/layout/card/cardimage/layout.text').subscribe(function (data) {
            responseTs = data.text();
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    CardImageDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    CardImageDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'card-image-demo',
            template: __webpack_require__(/*! ./cardimage.demo.component.html */ "./src/app/layout/card/cardimage/cardimage.demo.component.html")
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CardImageDemo);
    return CardImageDemo;
}());



/***/ })

}]);
//# sourceMappingURL=layout-card-cardimage-cardimage-demo-module.js.map