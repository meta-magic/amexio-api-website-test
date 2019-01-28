(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["navigation-dropdownmenu-dropdownmenu-demo-module"],{

/***/ "./src/app/navigation/dropdownmenu/dropdownmenu.demo.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/navigation/dropdownmenu/dropdownmenu.demo.module.ts ***!
  \*********************************************************************/
/*! exports provided: DropDownMenuDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownMenuDemoModule", function() { return DropDownMenuDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _dropdownmenu_demo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dropdownmenu.demo */ "./src/app/navigation/dropdownmenu/dropdownmenu.demo.ts");
/**
 * Created by kedar on 24/5/18.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DropDownMenuDemoModule = /** @class */ (function () {
    function DropDownMenuDemoModule() {
    }
    DropDownMenuDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_dropdownmenu_demo__WEBPACK_IMPORTED_MODULE_7__["DropDownMenuDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _dropdownmenu_demo__WEBPACK_IMPORTED_MODULE_7__["DropDownMenuDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], DropDownMenuDemoModule);
    return DropDownMenuDemoModule;
}());



/***/ }),

/***/ "./src/app/navigation/dropdownmenu/dropdownmenu.demo.ts":
/*!**************************************************************!*\
  !*** ./src/app/navigation/dropdownmenu/dropdownmenu.demo.ts ***!
  \**************************************************************/
/*! exports provided: DropDownMenuDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownMenuDemo", function() { return DropDownMenuDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/**
 * Created by kedar on 29/5/18.
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


var DropDownMenuDemo = /** @class */ (function () {
    function DropDownMenuDemo(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
        this.payment = [
            { "label": "Visa", "icon": "fa fa-cc-visa" },
            { "label": "Paypal", "icon": "fa fa-paypal", "separator": true },
            { "label": "Google wallet", "icon": "fa fa-google-wallet" },
            { "label": "Stripe", "icon": "fa fa-cc-stripe", "separator": true },
            { "label": "Mastercard", "icon": "fa fa-cc-mastercard" },
            { "label": "JCB", "icon": "fa fa-cc-jcb" }
        ];
        this.transport = [
            { "label": "Motorcycle", "icon": "fa fa-motorcycle" },
            { "label": "Plane", "icon": "fa fa-plane" },
            { "label": "Ship", "icon": "fa fa-ship" },
            { "label": "Space shuttle", "icon": "fa fa-space-shuttle" },
            { "label": "Bicycle", "icon": "fa fa-bicycle" },
            { "label": "Rocket", "icon": "fa fa-rocket" }
        ];
    }
    //TO LOAD HTML AND TYPESCRIPT CODE
    DropDownMenuDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtmlData;
        var responseTs;
        var responseData;
        //HTML FILE
        this.http.get('assets/data/code/navigation/dropdownmenu/form.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtmlData = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtmlData;
        });
        //TS FILE
        this.http.get('assets/data/code/navigation/dropdownmenu/form.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
        //TS FILE
        // this.http.get('assets/data/componentdata/country.json',{responseType: 'text'}).subscribe(data => {
        //   responseData = data;
        // }, error => {
        // }, () => {
        //   this.dataSource = responseData;
        // });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    DropDownMenuDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    DropDownMenuDemo.prototype.onDropDownMenuClick = function (event) {
        var jsonData = {
            'icon': '',
            'label': '',
            'labelalign': '',
            'iconalign': '',
            'separator': ''
        };
        if (event.this.icon) {
            jsonData.icon = event.this.icon;
        }
        if (event.this.label) {
            jsonData.label = event.this.label;
        }
        if (event.this.labelalign) {
            jsonData.labelalign = event.this.labelalign;
        }
        if (event.this.iconalign) {
            jsonData.iconalign = event.this.iconalign;
        }
        if (event.this.separator) {
            jsonData.separator = event.this.separator;
        }
        this.sourceData = jsonData;
    };
    DropDownMenuDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dropdownmenu', template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n        Dropdown Menu\n      </amexio-header>\n      <amexio-body>\n        <p>Drop-Down Menu component has been created to render N numbers of drop-down items based on data-set configured.\n        </p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n            <amexio-row>\n              <amexio-column size=\"4\">\n                <amexio-card [header]=\"true\"\n                             [footer]=\"false\">\n                  <amexio-header>Demo 1</amexio-header>\n                  <amexio-body>\n                    <amexio-drop-down-menu  [icon-align]=\"'left'\"\n                                           [title]=\"'Payment '\"\n                                           [data]=\"payment\"\n                                           [down-arrow-icon] =\"true\"\n                                           [icon]=\"'fa fa-credit-card'\"\n                                           [transparent]=\"false\"\n                                           (onClick)=\"onDropDownMenuClick($event)\">\n                    </amexio-drop-down-menu>\n                  </amexio-body>\n                </amexio-card>\n              </amexio-column>\n              <amexio-column size=\"4  \">\n                <amexio-card [header]=\"true\"\n                             [footer]=\"false\">\n                  <amexio-header>Demo 2</amexio-header>\n                  <amexio-body>\n                    <amexio-drop-down-menu [icon-align]=\"'left'\"  \n                                           [title]=\"'Advance'\"\n                                           [icon]=\"'fa fa-flash'\"\n                                           (onClick)=\"onDropDownMenuClick($event)\">\n\n                      <amexio-drop-down-menu-item >\n\n                        <amexio-box background-color=\"purple\" padding=\"true\">\n                          <amexio-label size=\"small-bold\">This account is managed by metamagic.in. </amexio-label>\n                        </amexio-box>\n                        <amexio-row>\n                          <amexio-column size=\"5\">\n                            <amexio-image [height]=\"'89.75px'\" [width]=\"'89.75px'\"  [c-class]=\"'image-round'\"\n                                          path=\"assets/images/profile/ketan.jpg\">\n                            </amexio-image>\n                          </amexio-column>\n                          <amexio-column size=\"7\">\n\n                            <amexio-label > Ketan Gote</amexio-label>\n                            <amexio-label > xyz@metamagic.in</amexio-label><br/>\n                            <amexio-button  (onClick)=\"onDropDownMenuClick($event)\" [label]=\"'My Account'\" [type]=\"'theme-color'\" [tooltip]=\"'My Account'\"><br/>\n                            </amexio-button>\n\n                          </amexio-column>\n\n                        </amexio-row>\n\n                      </amexio-drop-down-menu-item>\n\n                      <amexio-drop-down-menu-item\n                        [label]=\"'Settings'\"\n                       \n                        [icon]=\"'fa fa-cog'\"\n                        (onClick)=\"onDropDownMenuClick($event)\"\n                      >\n                      </amexio-drop-down-menu-item>\n                      <amexio-drop-down-menu-item\n                        [label]=\"'Help Center'\"\n                        [icon]=\"'fa fa-question-circle'\"\n                       \n                        [separator] =\"true\"\n                        (onClick)=\"onDropDownMenuClick($event)\"\n                      >\n                      </amexio-drop-down-menu-item>\n                      <amexio-drop-down-menu-item\n                        [label]=\"'Location'\"\n                        \n                        [icon]=\"'fa fa-map-marker'\"\n                        (onClick)=\"onDropDownMenuClick($event)\"\n\n                      >\n                      </amexio-drop-down-menu-item>\n                      <amexio-drop-down-menu-item\n                        [label]=\"'Sign Out'\"\n                       \n                        [icon]=\"'fa fa-sign-out'\"\n                        (onClick)=\"onDropDownMenuClick($event)\"\n                      >\n                      </amexio-drop-down-menu-item>\n\n                    </amexio-drop-down-menu>\n                  </amexio-body>\n                </amexio-card>\n              </amexio-column>\n              <amexio-column size=\"4\">\n                <amexio-card [header]=\"true\"\n                             [footer]=\"false\">\n                  <amexio-header>Demo 3  </amexio-header>\n                  <amexio-body>\n                    <amexio-drop-down-menu \n                                           [title]=\"'Brands'\"\n                                           [icon]=\"'fa fa-slack'\"\n                                           (onClick)=\"onDropDownMenuClick($event)\">\n\n                      <amexio-drop-down-menu-item\n                      [icon-align]=\"'right'\"\n                      [label-align]=\"'left'\"\n                        [label]=\"'VK'\"\n                        [icon]=\"'fa fa-vk'\"\n                        [separator]=\"false\"\n                        (onClick)=\"onDropDownMenuClick($event)\"\n                      >\n                      </amexio-drop-down-menu-item>\n\n                      <amexio-drop-down-menu-item\n                      [icon-align]=\"'right'\"\n                      [label-align]=\"'left'\"\n                        [label]=\"'Twitter'\"\n                        [icon]=\"'fa fa-twitter'\"\n                        [separator]=\"false\"\n                        (onClick)=\"onDropDownMenuClick($event)\"\n                      >\n                      </amexio-drop-down-menu-item>\n\n                      <amexio-drop-down-menu-item\n                      [icon-align]=\"'right'\"\n                      [label-align]=\"'left'\"\n                        [label]=\"'Telegram'\"\n                        [icon]=\"'fa fa-telegram'\"\n                        [separator]=\"true\"\n                        (onClick)=\"onDropDownMenuClick($event)\"\n                      >\n                      </amexio-drop-down-menu-item>\n\n                      <amexio-drop-down-menu-item\n                      [icon-align]=\"'right'\"\n                      [label-align]=\"'left'\"\n                        [label]=\"'Github'\"\n                        [icon]=\"'fa fa-github-alt'\"\n                        [separator]=\"false\"\n                        (onClick)=\"onDropDownMenuClick($event)\"\n                      >\n                      </amexio-drop-down-menu-item>\n                      <amexio-drop-down-menu-item\n                      [icon-align]=\"'right'\"\n                      [label-align]=\"'left'\"\n                        [label]=\"'Apple'\"\n                        [icon]=\"'fa fa-apple'\"\n                        [separator]=\"false\"\n                        (onClick)=\"onDropDownMenuClick($event)\"\n                      >\n                      </amexio-drop-down-menu-item>\n\n                      <amexio-drop-down-menu-item\n                      [icon-align]=\"'right'\"\n                      [label-align]=\"'left'\"\n                        [label]=\"'WhatsApp'\"\n                        [icon]=\"'fa fa-whatsapp'\"\n                        [separator]=\"false\"\n                        (onClick)=\"onDropDownMenuClick($event)\"\n                      >\n                      </amexio-drop-down-menu-item>\n\n                    </amexio-drop-down-menu>\n                  </amexio-body>\n                </amexio-card>\n              </amexio-column>\n            </amexio-row>\n\n            <amexio-row>\n              <amexio-column size=\"4\" >\n                <amexio-card [header]=\"true\"\n                             [footer]=\"false\">\n                  <amexio-header>Demo 4</amexio-header>\n                  <amexio-body>\n                    <amexio-drop-down-menu [icon-align]=\"'right'\"\n                                           [title]=\"'Transport'\"\n                                           [data]=\"transport\"\n                                           [icon]=\"'fa fa-truck'\"\n                                           (onClick)=\"onDropDownMenuClick($event)\">\n                    </amexio-drop-down-menu>\n                  </amexio-body>\n                </amexio-card>\n              </amexio-column>\n\n              <amexio-column size=\"8\">\n                <amexio-card [header]=\"true\"\n                             [footer]=\"false\">\n                  <amexio-header> Source data</amexio-header>\n                  <amexio-body>\n                    <pre><code>{{sourceData |json }}</code></pre>\n                  </amexio-body>\n                </amexio-card>\n              </amexio-column>\n            </amexio-row>\n          </amexio-tab>\n\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Properties : <amexio-drop-down-menu>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/navigation/dropdownmenu.component.json'\"\n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Version'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"35\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br>\n            <amexio-datagrid title=\"Properties : <amexio-drop-down-menu-item>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/navigation/dropdownmenu.component.json'\"\n                             [data-reader]=\"'propertiesitem'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"15\"[data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Version'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"35\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br>\n            <amexio-datagrid title=\"Events\" [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/navigation/dropdownmenu.component.json'\" [data-reader]=\"'events'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"20\"[data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"80\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n              <amexio-vertical-tab-view>\n                <amexio-tab title=\"HTML\" [active]=\"true\">\n                  <ng-container *ngIf=\"htmlCode\">\n                    <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                    <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                  </ng-container>\n                </amexio-tab>\n                <amexio-tab title=\"Type Script\">\n                  <ng-container *ngIf=\"typeScriptCode\">\n                    <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                  </ng-container>\n                </amexio-tab>\n\n                <!--<amexio-tab title=\"Data Source\">-->\n                <!--<ng-container *ngIf=\"dataSource\">-->\n                <!--<prism-block [code]=\"dataSource\" [language]=\"'json'\"></prism-block>-->\n                <!--</ng-container>-->\n                <!--</amexio-tab>-->\n\n              </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n\n            <p align=\"center\">Amexio DropdownMenu</p>\n            <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/angular-dropdownmenu?embed=1&file=src/app/navigation/dropdownmenu/dropdownmenu.demo.html&view=editor\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n\n\n    <!--<amexio-notification [data]=\"copyMsgArray\"></amexio-notification>-->\n\n\n  "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DropDownMenuDemo);
    return DropDownMenuDemo;
}());



/***/ })

}]);
//# sourceMappingURL=navigation-dropdownmenu-dropdownmenu-demo-module.js.map