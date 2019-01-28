(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contextualmenu-window-contextmenuwindow-demo-module"],{

/***/ "./src/app/contextualmenu/window/contextmenuwindow.demo.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/contextualmenu/window/contextmenuwindow.demo.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card header=\"true\">\n    <amexio-header>\n        Window\n    </amexio-header>\n    <amexio-body>\n        <p>Window Pane component is a customizable Modal Pane in which user can enter custom content</p>\n        <amexio-tab-view>\n            <amexio-tab title=\"Demo\" active=\"true\">\n                <amexio-card [header]=\"true\">\n                    <amexio-header> Window With Context-Menu </amexio-header>\n                    <amexio-body>\n                        <amexio-row>\n                            <amexio-column [size]=\"4\"></amexio-column>\n                            <amexio-column [size]=\"4\">\n                                <amexio-button type=\"success\" (onClick)=\"toggleBasicWindow('material')\" label=\"Context-Menu Window\"></amexio-button>\n                                <amexio-window [body-height]=\"40\" \n                                [context-menu]=\"rightclickdata\"\n                                 [(show)]=\"showBasicWindowMaterial\"\n                                    [close-on-escape]=\"true\" [material-design]=\"true\" [footer]=\"true\"\n                                    [vertical-position]=\"'top'\" [horizontal-position]=\"'center'\">\n                                    <amexio-header>\n                                        Employee Form\n                                    </amexio-header>\n                                    <amexio-body>\n                                        <amexio-row>\n                                            <amexio-column [size]=\"6\">\n                                                <amexio-text-input [field-label]=\"'Name'\" name=\"country\" [place-holder]=\"'Enter name'\"\n                                                    [enable-popover]=\"true\" [icon-feedback]=\"true\" [allow-blank]=\"false\"\n                                                    [error-msg]=\"'Please enter name'\" [min-length]=\"3\" [max-length]=\"15\"\n                                                    [min-error-msg]=\"'Name should be minimum 3 characters'\"\n                                                    [max-error-msg]=\"'Name should be less than 15 characters'\">\n                                                </amexio-text-input>\n                                            </amexio-column>\n                                            <amexio-column [size]=\"6\">\n                                                <amexio-text-input [field-label]=\"'Surname'\" name=\"name\" [place-holder]=\"'Enter surname'\"\n                                                    [enable-popover]=\"true\" [icon-feedback]=\"true\" [allow-blank]=\"false\"\n                                                    [error-msg]=\"'Please enter Surname'\" [min-length]=\"3\" [max-length]=\"15\"\n                                                    [min-error-msg]=\"'Surname should be minimum 3 characters'\"\n                                                    [max-error-msg]=\"'Surname should be less than 15 characters'\">\n                                                </amexio-text-input>\n                                            </amexio-column>\n                                        </amexio-row>\n\n                                        <amexio-row>\n                                            <amexio-column [size]=\"6\">\n                                                <amexio-text-input [field-label]=\"'Description'\" name=\"country\"\n                                                    [place-holder]=\"'Description'\" [enable-popover]=\"true\"\n                                                    [icon-feedback]=\"true\" [allow-blank]=\"false\" [error-msg]=\"'Please enter name'\"\n                                                    [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Name should be minimum 3 characters'\"\n                                                    [max-error-msg]=\"'Name should be less than 15 characters'\">\n                                                </amexio-text-input>\n                                            </amexio-column>\n                                            <amexio-column [size]=\"6\">\n                                                <amexio-text-input [field-label]=\"'Hobbies'\" name=\"name\" [place-holder]=\"'Hobbies'\"\n                                                    [enable-popover]=\"true\" [icon-feedback]=\"true\" [allow-blank]=\"false\"\n                                                    [error-msg]=\"'Please enter Surname'\" [min-length]=\"3\" [max-length]=\"15\"\n                                                    [min-error-msg]=\"'Surname should be minimum 3 characters'\"\n                                                    [max-error-msg]=\"'Surname should be less than 15 characters'\">\n                                                </amexio-text-input>\n                                            </amexio-column>\n                                        </amexio-row>\n\n                                        <amexio-row>\n                                            <amexio-column [size]=\"6\">\n\n                                                <amexio-textarea-input [field-label]=\"'Address'\" name=\"Address\"\n                                                    [place-holder]=\"'Enter address'\" [error-msg]=\"'Please enter address'\"\n                                                    [icon-feedback]=\"true\" [rows]=\"'1'\" [columns]=\"'2'\" [allow-blank]=\"false\"\n                                                    [enable-popover]=\"true\">\n                                                </amexio-textarea-input>\n                                            </amexio-column>\n                                        </amexio-row>\n                                        <amexio-row>\n                                            <amexio-column [size]=\"6\">\n                                                <amexio-text-input [field-label]=\"'Phone'\" name=\"country\"\n                                                    [place-holder]=\"'Phone'\" [enable-popover]=\"true\" [icon-feedback]=\"true\"\n                                                    [allow-blank]=\"false\" [error-msg]=\"'Please enter name'\"\n                                                    [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Name should be minimum 3 characters'\"\n                                                    [max-error-msg]=\"'Name should be less than 15 characters'\">\n                                                </amexio-text-input>\n                                            </amexio-column>\n                                            <amexio-column [size]=\"6\">\n                                                <amexio-text-input [field-label]=\"'Email'\" name=\"name\" [place-holder]=\"'Email'\"\n                                                    [enable-popover]=\"true\" [icon-feedback]=\"true\" [allow-blank]=\"false\"\n                                                    [error-msg]=\"'Please enter Surname'\" [min-length]=\"3\" [max-length]=\"15\"\n                                                    [min-error-msg]=\"'Surname should be minimum 3 characters'\"\n                                                    [max-error-msg]=\"'Surname should be less than 15 characters'\">\n                                                </amexio-text-input>\n                                            </amexio-column>\n                                        </amexio-row>\n\n                                    </amexio-body>\n                                    <amexio-action>\n                                        <amexio-button [type]=\"'default'\" (onClick)=\"showBasicWindowMaterial = false\"\n                                            label=\"Cancel\"></amexio-button>\n                                        &nbsp;&nbsp;&nbsp;\n                                        <amexio-button [type]=\"'theme-color'\" (onClick)=\"showBasicWindowMaterial = false\"\n                                            label=\"Save\"></amexio-button>\n                                    </amexio-action>\n\n                                </amexio-window>\n\n                            </amexio-column>\n                            <amexio-column [size]=\"4\"></amexio-column>\n                        </amexio-row>\n                    </amexio-body>\n                </amexio-card>\n            </amexio-tab>\n\n            <amexio-tab title=\"API Reference\">\n                <amexio-datagrid title=\"Properties <amexio-window>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\"\n                    [http-url]=\"'assets/apireference/panes/window/window.json'\" [data-reader]=\"'properties'\"\n                    [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'version'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"55\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <amexio-datagrid title=\"Events\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/panes/window/window.json'\"\n                    [data-reader]=\"'events'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n\n\n            </amexio-tab>\n            <amexio-tab title=\"Source\">\n                <div style=\"overflow-y: scroll\">\n                    <amexio-vertical-tab-view>\n                        <amexio-tab title=\"HTML\" [active]=\"true\">\n                            <ng-container *ngIf=\"htmlCode\">\n                                <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                                <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"Type Script\">\n                            <ng-container *ngIf=\"typeScriptCode\">\n                                <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                    </amexio-vertical-tab-view>\n                </div>\n            </amexio-tab>\n            <amexio-tab title=\"Live\">\n                <p align=\"center\">Amexio Sandbox</p>\n                <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-window-contextmenu-demo?file=src%2Fapp%2Fcontextualmenu%2Fwindow%2Fwindow.demo.component.ts\"\n                    frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n            </amexio-tab>\n        </amexio-tab-view>\n    </amexio-body>\n</amexio-card>"

/***/ }),

/***/ "./src/app/contextualmenu/window/contextmenuwindow.demo.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/contextualmenu/window/contextmenuwindow.demo.component.ts ***!
  \***************************************************************************/
/*! exports provided: ContextMenuWindowDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuWindowDemoComponent", function() { return ContextMenuWindowDemoComponent; });
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


var ContextMenuWindowDemoComponent = /** @class */ (function () {
    function ContextMenuWindowDemoComponent(http) {
        this.http = http;
        this.rightclickdata =
            [{ "text": "Add New", "icon": "fa fa-plus", "disabled": true }, { "text": "Edit", "icon": "", "seperator": true },
                { "text": "Send data in email", "icon": "" }];
        this.getHtmlAndTypeScriptCode();
    }
    ContextMenuWindowDemoComponent.prototype.getDta = function () {
        var _this = this;
        this.asyncFlag = true;
        setTimeout(function () {
            _this.asyncFlag = false;
        }, 3000);
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    ContextMenuWindowDemoComponent.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/pane/contextmenuwindow/window.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/pane/contextmenuwindow/window.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    ContextMenuWindowDemoComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    ContextMenuWindowDemoComponent.prototype.toggleBasicWindow = function (data) {
        if (data == 'material') {
            this.showBasicWindowMaterial = !this.showBasicWindowMaterial;
        }
        else {
            this.showBasicWindowNonMaterial = !this.showBasicWindowNonMaterial;
        }
    };
    ContextMenuWindowDemoComponent.prototype.toggleMaxWindow = function (data) {
        if (data == 'material') {
            this.showMaxWindowMaterial = !this.showMaxWindowMaterial;
        }
        else {
            this.showMaxWindowNonMaterial = !this.showMaxWindowNonMaterial;
        }
    };
    ContextMenuWindowDemoComponent.prototype.toggleClosable = function (data) {
        if (data == 'material') {
            this.showClosableMaterial = !this.showClosableMaterial;
        }
        else {
            this.showClosableNonMaterial = !this.showClosableNonMaterial;
        }
    };
    ContextMenuWindowDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contextmenu-window',
            template: __webpack_require__(/*! ./contextmenuwindow.demo.component.html */ "./src/app/contextualmenu/window/contextmenuwindow.demo.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContextMenuWindowDemoComponent);
    return ContextMenuWindowDemoComponent;
}());



/***/ }),

/***/ "./src/app/contextualmenu/window/contextmenuwindow.demo.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/contextualmenu/window/contextmenuwindow.demo.module.ts ***!
  \************************************************************************/
/*! exports provided: ContextMenuWindowDemoModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuWindowDemoModule", function() { return ContextMenuWindowDemoModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contextmenuwindow_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contextmenuwindow.demo.component */ "./src/app/contextualmenu/window/contextmenuwindow.demo.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
    { path: '', component: _contextmenuwindow_demo_component__WEBPACK_IMPORTED_MODULE_2__["ContextMenuWindowDemoComponent"] },
];
var ContextMenuWindowDemoModule = /** @class */ (function () {
    function ContextMenuWindowDemoModule() {
    }
    ContextMenuWindowDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_6__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [_contextmenuwindow_demo_component__WEBPACK_IMPORTED_MODULE_2__["ContextMenuWindowDemoComponent"]]
        })
    ], ContextMenuWindowDemoModule);
    return ContextMenuWindowDemoModule;
}());

var routedComponents = [_contextmenuwindow_demo_component__WEBPACK_IMPORTED_MODULE_2__["ContextMenuWindowDemoComponent"]];


/***/ })

}]);
//# sourceMappingURL=contextualmenu-window-contextmenuwindow-demo-module.js.map