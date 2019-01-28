(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-tab-enhancedverticaltab-enhancedverticaltab-demo-module"],{

/***/ "./src/app/layout/tab/enhancedverticaltab/dynamicverticaltabdemo.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layout/tab/enhancedverticaltab/dynamicverticaltabdemo.component.ts ***!
  \************************************************************************************/
/*! exports provided: DyanmicVerticalTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DyanmicVerticalTabComponent", function() { return DyanmicVerticalTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DyanmicVerticalTabComponent = /** @class */ (function () {
    function DyanmicVerticalTabComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DyanmicVerticalTabComponent.prototype, "content", void 0);
    DyanmicVerticalTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "dynamictab",
            template: "\n        Content : {{content}}\n    "
        })
    ], DyanmicVerticalTabComponent);
    return DyanmicVerticalTabComponent;
}());



/***/ }),

/***/ "./src/app/layout/tab/enhancedverticaltab/enhancedverticaltab.demo.html":
/*!******************************************************************************!*\
  !*** ./src/app/layout/tab/enhancedverticaltab/enhancedverticaltab.demo.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card header=\"true\">\n    <amexio-header>\n        Enhanced Tab\n    </amexio-header>\n    <amexio-body>\n        <p>Enhanced Tab component for Angular Apps with multiple configurations such as Tab, Header, Tab Alignments, Tabs divided\n            Closable,Tab Colors and Tab Position</p>\n        <amexio-tab-view>\n            <amexio-tab title=\"Demo\" active=\"true\">\n                <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'right'\">\n                    <amexio-header>\n                        Tab layout with Color,Closable and Left Bottom aligned\n                    </amexio-header>\n                    <amexio-body>\n                        <amexio-button [label]=\"'Add Tab'\" [type]=\"'theme-color'\" (onClick)=\"addtab(tab)\" [tooltip]=\"'Add Tab'\">\n                        </amexio-button>\n                        <amexio-vertical-tab-view #tab [closable]=\"true\" [tabPosition]=\"'bottom'\">\n                            <amexio-tab title=\"Personal\" [active]=\"true\" [amexio-color]=\"'red'\" [icon]=\"'fa fa-user-circle'\">\n                                Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry.</amexio-tab>\n                            <amexio-tab title=\"Work\" [amexio-color]=\"'blue'\" [icon]=\"'fa fa-building'\">\n                                Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus.\n                            </amexio-tab>\n                            <amexio-tab title=\"Team\" [icon]=\"'fa fa-users'\">\n                                Team Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis dis parturient montes,nascetur\n                                ridiculus mus.\n                            </amexio-tab>\n                            <amexio-tab title=\"Disabled\" [disabled]=true [icon]=\"'fa fa-snowflake'\">\n                                Team Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis dis parturient montes,nascetur\n                                ridiculus mus.\n                            </amexio-tab>\n                        </amexio-vertical-tab-view>\n                    </amexio-body>\n                </amexio-card>\n                <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'right'\">\n                    <amexio-header>\n                        Tab layout Color,Closable and Right Bottom aligned\n                    </amexio-header>\n                    <amexio-body>\n                        <amexio-button [label]=\"'Add Tab'\" [type]=\"'theme-color'\" (onClick)=\"addrighttab(tab1)\" [tooltip]=\"'Add Tab'\">\n                        </amexio-button>\n                        <amexio-right-vertical-tab-view #tab1 [closable]=\"true\" [tabPosition]=\"'bottom'\">\n\n                            <amexio-tab title=\"Personal\" [active]=\"true\" [amexio-color]=\"'red'\" [icon]=\"'fa fa-user-circle'\">\n                                Personal Lorem Ipsum is simply text of printing and typesetting industry.\n                            </amexio-tab>\n                            <amexio-tab title=\"Work\" [amexio-color]=\"'blue'\" [icon]=\"'fa fa-building'\">\n                                Work Nullam nec dolor lobortis, dictum ac, massa. Donec id suscipit.\n                            </amexio-tab>\n                            <amexio-tab title=\"Team\" [icon]=\"'fa fa-users'\">\n                                Team Phasellus in condimentum. In et sem. Orci varius penatibus.\n                            </amexio-tab>\n                            <amexio-tab title=\"Disabled\" [disabled]=true [icon]=\"'fa fa-snowflake'\">\n                                Team Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis dis parturient montes,nascetur\n                                ridiculus mus.\n                            </amexio-tab>\n                        </amexio-right-vertical-tab-view>\n                    </amexio-body>\n                </amexio-card>\n            </amexio-tab>\n            <amexio-tab title=\"API Reference\">\n                <amexio-datagrid title=\"Tab View Properties  <amexio-vertical-tab-view>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\"\n                    [http-url]=\"'assets/apireference/layout/tab/enhanced-vertical-tab/enhancedverticaltab.json'\" [data-reader]=\"'properties'\"\n                    [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"20\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Version'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"45\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <amexio-datagrid title=\"Tab Properties  <amexio-tab>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/layout/tab/enhanced-vertical-tab/enhancedverticaltab.json'\"\n                    [data-reader]=\"'tabproperties'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"20\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Version'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"45\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <amexio-datagrid title=\"Tab Events\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/layout/tab/enhanced-vertical-tab/enhancedverticaltab.json'\"\n                    [data-reader]=\"'events'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"40\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"60\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <!-- <amexio-datagrid title=\"Tab Methods\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/layout/tab/enhanced-vertical-tab/enhancedverticaltab.json'\"\n                    [data-reader]=\"'methods'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"40\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"20\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Version'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"40\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid> -->\n\n            </amexio-tab>\n            <amexio-tab title=\"Source\">\n                <div style=\"overflow-y: scroll\">\n                    <amexio-vertical-tab-view>\n                        <amexio-tab title=\"HTML\" [active]=\"true\">\n                            <ng-container *ngIf=\"htmlCode\">\n                                <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                                <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"Type Script\">\n                            <ng-container *ngIf=\"typeScriptCode\">\n                                <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"Dynamic Tab\">\n                            <ng-container *ngIf=\"typeScriptCode2\">\n                                <prism-block [code]=\"typeScriptCode2\" [language]=\"'typescript'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                    </amexio-vertical-tab-view>\n                </div>\n            </amexio-tab>\n            <amexio-tab title=\"Live\">\n                <p align=\"center\">Amexio Sandbox</p>\n                <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-vertical-enhanced-tab1?embed=1&file=app/tabs/enhancedverticaltab/enhancedverticaltab.demo.html&view=editor\"\n                    frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n                    Work In Progress\n            </amexio-tab>\n        </amexio-tab-view>\n    </amexio-body>\n</amexio-card>"

/***/ }),

/***/ "./src/app/layout/tab/enhancedverticaltab/enhancedverticaltab.demo.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/tab/enhancedverticaltab/enhancedverticaltab.demo.module.ts ***!
  \***********************************************************************************/
/*! exports provided: EnhancedVerticalTabDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnhancedVerticalTabDemoModule", function() { return EnhancedVerticalTabDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _enhancedverticaltab_demo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enhancedverticaltab.demo */ "./src/app/layout/tab/enhancedverticaltab/enhancedverticaltab.demo.ts");
/* harmony import */ var _dynamicverticaltabdemo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dynamicverticaltabdemo.component */ "./src/app/layout/tab/enhancedverticaltab/dynamicverticaltabdemo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









/**
 * Created by sagar on 11/1/18.
 */
var EnhancedVerticalTabDemoModule = /** @class */ (function () {
    function EnhancedVerticalTabDemoModule() {
    }
    EnhancedVerticalTabDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_enhancedverticaltab_demo__WEBPACK_IMPORTED_MODULE_7__["EnhancedVerticalTabDemo"], _dynamicverticaltabdemo_component__WEBPACK_IMPORTED_MODULE_8__["DyanmicVerticalTabComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"], _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioPaneModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _enhancedverticaltab_demo__WEBPACK_IMPORTED_MODULE_7__["EnhancedVerticalTabDemo"], pathMatch: 'full'
                    }])],
            providers: [],
            entryComponents: [_dynamicverticaltabdemo_component__WEBPACK_IMPORTED_MODULE_8__["DyanmicVerticalTabComponent"]]
        })
    ], EnhancedVerticalTabDemoModule);
    return EnhancedVerticalTabDemoModule;
}());



/***/ }),

/***/ "./src/app/layout/tab/enhancedverticaltab/enhancedverticaltab.demo.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/tab/enhancedverticaltab/enhancedverticaltab.demo.ts ***!
  \****************************************************************************/
/*! exports provided: EnhancedVerticalTabDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnhancedVerticalTabDemo", function() { return EnhancedVerticalTabDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _dynamicverticaltabdemo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamicverticaltabdemo.component */ "./src/app/layout/tab/enhancedverticaltab/dynamicverticaltabdemo.component.ts");
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



var EnhancedVerticalTabDemo = /** @class */ (function () {
    function EnhancedVerticalTabDemo(http) {
        this.http = http;
        // title = 'component';
        this.tabcountleft = 4;
        this.tabcountright = 4;
        this.getHtmlAndTypeScriptCode();
    }
    EnhancedVerticalTabDemo.prototype.addtab = function (tab) {
        this.tabcountleft++;
        var title = 'Tab ' + this.tabcountleft;
        var cmp = tab.addDynamicTab(title, "red", true, _dynamicverticaltabdemo_component__WEBPACK_IMPORTED_MODULE_2__["DyanmicVerticalTabComponent"]);
        cmp.content = "Content of " + title;
    };
    EnhancedVerticalTabDemo.prototype.addrighttab = function (tab1) {
        this.tabcountright++;
        var title = 'Tab ' + this.tabcountright;
        var cmp = tab1.addDynamicTab(title, "red", true, _dynamicverticaltabdemo_component__WEBPACK_IMPORTED_MODULE_2__["DyanmicVerticalTabComponent"]);
        cmp.content = "Content of " + title;
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    EnhancedVerticalTabDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        var code;
        //HTML FILE
        this.http.get('assets/data/code/layout/tab/enhancedverticaltab/tab.html').subscribe(function (data) {
            responseHtml = data.text();
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/layout/tab/enhancedverticaltab/tab.text').subscribe(function (data) {
            responseTs = data.text();
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
        //TS FILE
        this.http.get('assets/data/code/layout/tab/enhancedverticaltab/dynamictab.text').subscribe(function (data) {
            code = data.text();
        }, function (error) {
        }, function () {
            _this.typeScriptCode2 = code;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    EnhancedVerticalTabDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    EnhancedVerticalTabDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'enhanced-vertical-tab-demo',
            template: __webpack_require__(/*! ./enhancedverticaltab.demo.html */ "./src/app/layout/tab/enhancedverticaltab/enhancedverticaltab.demo.html")
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], EnhancedVerticalTabDemo);
    return EnhancedVerticalTabDemo;
}());



/***/ })

}]);
//# sourceMappingURL=layout-tab-enhancedverticaltab-enhancedverticaltab-demo-module.js.map