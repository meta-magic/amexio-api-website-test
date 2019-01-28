(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["navigation-navbar-navbar-demo-module"],{

/***/ "./src/app/navigation/navbar/navbar.demo.html":
/*!****************************************************!*\
  !*** ./src/app/navigation/navbar/navbar.demo.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card header=\"true\">\n    <amexio-header>\n        Nav Bar\n    </amexio-header>\n    <amexio-body>\n        <p>\n            The Nav Bar Component is a familiar top navigation pattern for users.\n            Nav bar has Logo/Title left align, than link, text field, button and menus on right side.\n            v4.1 Nav bar is not backward compatible of v4.0, for v4.0 refer <a href=\"https://amexio.org/api/v4.1/#/navbar-demo\">link</a>\n        </p>\n        <amexio-tab-view>\n            <amexio-tab title=\"Demo\" active=\"true\">\n                <amexio-row>\n                    <amexio-column [size]=\"12\">\n\n                        <amexio-card header=\"true\">\n                            <amexio-header>\n                                Nav Bar Demo\n                            </amexio-header>\n                            <amexio-body>\n                                <div class=\"navbardemo\">\n\n                                    <amexio-nav [enable-side-nav-position]=\"false\" [title]=\"'Amexio'\" [logo]=\"'assets/images/logos/amexio-logo.png'\">\n\n                                        <amexio-nav-item position-right (onNavItemClick)=\"onClick('http://amexio.tech')\"\n                                            [icon]=\"'fa fa-bell fa-fw fa-lg'\" [type]=\"'button'\" style=\"cursor: pointer;\">\n                                        </amexio-nav-item>\n                                        <amexio-nav-item position-right [type]=\"'textfield'\" [title]=\"'Enter your name'\">\n                                        </amexio-nav-item>\n\n                                        <amexio-nav-item position-right [title]=\"'Settings'\" [type]=\"'menucontainer'\">\n\n                                            <amexio-box background-color=\"purple\" padding=\"true\">\n                                                <amexio-label size=\"small-bold\">This account is managed by\n                                                    metamagic.in. </amexio-label>\n                                            </amexio-box>\n                                            <amexio-row>\n                                                <amexio-column size=\"5\">\n                                                    <amexio-image [height]=\"'95.75px'\" [width]=\"'95.75px'\" [c-class]=\"'image-round'\"\n                                                        path=\"assets/images/profile/mark.jpg\">\n                                                    </amexio-image>\n                                                </amexio-column>\n                                                <amexio-column size=\"7\">\n                                                    <amexio-label>John deo\n                                                    </amexio-label> <br />\n                                                    <amexio-label>john@metamagic.in</amexio-label>\n\n                                                </amexio-column>\n\n                                            </amexio-row>\n                                            <amexio-drop-down-menu-item\n                                            [label]=\"'Settings'\"\n                                           \n                                            [icon]=\"'fa fa-cog'\"\n                                            \n                                          >\n                                          </amexio-drop-down-menu-item>\n                                          <amexio-drop-down-menu-item\n                                            [label]=\"'Help Center'\"\n                                            [icon]=\"'fa fa-question-circle'\"\n                                           \n                                            [separator] =\"true\"\n                                          \n                                          >\n                                          </amexio-drop-down-menu-item>\n                                            <amexio-drop-down-menu-item>\n                                                <amexio-button [label]=\"'My Account'\" [type]=\"'theme-color'\" [tooltip]=\"'My Account'\">\n                                                </amexio-button>\n                                            </amexio-drop-down-menu-item>\n\n                                        </amexio-nav-item>\n                                        <amexio-nav-item position-right *ngFor=\"let menus of topMenuData\" [type]=\"'menu'\"\n                                            [title]=\"menus.text\" [data]=\"menus.submenus\" (onNavItemClick)=\"externalLink($event)\">\n                                        </amexio-nav-item>\n\n\n                                    </amexio-nav>\n\n\n                                </div>\n                            </amexio-body>\n                        </amexio-card>\n                    </amexio-column>\n                </amexio-row>\n            </amexio-tab>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n            <amexio-tab title=\"API Reference\">\n                <amexio-datagrid title=\"Properties<amexio-nav>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\"\n                    [http-url]=\"'assets/apireference/navigation/navbar.json'\" [data-reader]=\"'properties'\"\n                    [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <amexio-datagrid title=\"Events<amexio-nav>\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/navigation/navbar.json'\"\n                    [data-reader]=\"'navevents'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"20\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"80\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <amexio-datagrid title=\"Properties<amexio-nav-item>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\"\n                    [http-url]=\"'assets/apireference/navigation/navbar.json'\" [data-reader]=\"'propertiesitem'\"\n                    [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"20\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"80\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <amexio-datagrid title=\"Events<amexio-nav-item>\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/navigation/navbar.json'\"\n                    [data-reader]=\"'events'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"20\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"80\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n            </amexio-tab>\n            <amexio-tab title=\"Source\">\n                <amexio-vertical-tab-view>\n                    <amexio-tab title=\"HTML\" [active]=\"true\">\n                        <ng-container *ngIf=\"htmlCode\">\n                            <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                            <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                        </ng-container>\n                    </amexio-tab>\n                    <amexio-tab title=\"Type Script\">\n                        <ng-container *ngIf=\"typeScriptCode\">\n                            <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                        </ng-container>\n                    </amexio-tab>\n\n                </amexio-vertical-tab-view>\n            </amexio-tab>\n            <amexio-tab title=\"Live\">\n                <p align=\"center\">Amexio Sandbox</p>\n\n                <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v41-navbar?embed=1&file=app/forms/navbar/navbar.demo.html&view=editor\"\n                    frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n\n            </amexio-tab>\n        </amexio-tab-view>\n    </amexio-body>\n</amexio-card>\n<!--<amexio-notification [data]=\"copyMsgArray\"></amexio-notification>-->"

/***/ }),

/***/ "./src/app/navigation/navbar/navbar.demo.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/navigation/navbar/navbar.demo.module.ts ***!
  \*********************************************************/
/*! exports provided: NavBarDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarDemoModule", function() { return NavBarDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _navbar_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar.demo */ "./src/app/navigation/navbar/navbar.demo.ts");
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
var NavBarDemoModule = /** @class */ (function () {
    function NavBarDemoModule() {
    }
    NavBarDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_navbar_demo__WEBPACK_IMPORTED_MODULE_6__["NavbarDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _navbar_demo__WEBPACK_IMPORTED_MODULE_6__["NavbarDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], NavBarDemoModule);
    return NavBarDemoModule;
}());



/***/ }),

/***/ "./src/app/navigation/navbar/navbar.demo.ts":
/*!**************************************************!*\
  !*** ./src/app/navigation/navbar/navbar.demo.ts ***!
  \**************************************************/
/*! exports provided: NavbarDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarDemo", function() { return NavbarDemo; });
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


var NavbarDemo = /** @class */ (function () {
    function NavbarDemo(http) {
        this.http = http;
        this.topMenuData = JSON.parse("[{\n      \"text\": \"About Us\",\n      \"submenus\": [{\n        \"text\": \"Amexio Canvas\",\n        \"link\": \"https://amexio.tech/amexio-canvas\"\n      }, {\n        \"text\": \"Amexio Themes\",\n        \"link\": \"https://amexio.tech/amexio-themes\"\n      }]\n    }]\n");
        this.getHtmlAndTypeScriptCode();
    }
    NavbarDemo.prototype.onClick = function (event) {
    };
    NavbarDemo.prototype.externalLink = function (event) {
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    NavbarDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        var datasourceData;
        //HTML FILE
        this.http.get('assets/data/code/navigation/navbar/navigation.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/navigation/navbar/navigation.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
        //TS FILE
        this.http.get('assets/data/componentdata/navbar.json', { responseType: 'text' }).subscribe(function (data) {
            datasourceData = data;
        }, function (error) {
        }, function () {
            _this.dataSource = datasourceData;
        });
        this.dataSource = "";
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    NavbarDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    NavbarDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navbar-demo',
            template: __webpack_require__(/*! ./navbar.demo.html */ "./src/app/navigation/navbar/navbar.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NavbarDemo);
    return NavbarDemo;
}());



/***/ })

}]);
//# sourceMappingURL=navigation-navbar-navbar-demo-module.js.map