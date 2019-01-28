(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contextualmenu-panel-contextmenupanel-demo-module"],{

/***/ "./src/app/contextualmenu/panel/contextmenupanel.demo.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/contextualmenu/panel/contextmenupanel.demo.module.ts ***!
  \**********************************************************************/
/*! exports provided: ContextMenuPanelDemoModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuPanelDemoModule", function() { return ContextMenuPanelDemoModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contextmenupanel_demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contextmenupanel.demo */ "./src/app/contextualmenu/panel/contextmenupanel.demo.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _contextmenupanel_demo__WEBPACK_IMPORTED_MODULE_2__["ContextMenuPanelDemoComponent"] },
];
var ContextMenuPanelDemoModule = /** @class */ (function () {
    function ContextMenuPanelDemoModule() {
    }
    ContextMenuPanelDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"], _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [_contextmenupanel_demo__WEBPACK_IMPORTED_MODULE_2__["ContextMenuPanelDemoComponent"]]
        })
    ], ContextMenuPanelDemoModule);
    return ContextMenuPanelDemoModule;
}());

var routedComponents = [_contextmenupanel_demo__WEBPACK_IMPORTED_MODULE_2__["ContextMenuPanelDemoComponent"]];


/***/ }),

/***/ "./src/app/contextualmenu/panel/contextmenupanel.demo.ts":
/*!***************************************************************!*\
  !*** ./src/app/contextualmenu/panel/contextmenupanel.demo.ts ***!
  \***************************************************************/
/*! exports provided: ContextMenuPanelDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuPanelDemoComponent", function() { return ContextMenuPanelDemoComponent; });
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


var ContextMenuPanelDemoComponent = /** @class */ (function () {
    function ContextMenuPanelDemoComponent(http) {
        this.http = http;
        this.rightclickdata =
            [{ "text": "Add New", "icon": "fa fa-plus", "disabled": true }, { "text": "Edit", "icon": "", "seperator": true },
                { "text": "Send data in email", "icon": "" }];
        this.getHtmlAndTypeScriptCode();
    }
    ContextMenuPanelDemoComponent.prototype.getDta = function () {
        var _this = this;
        this.asyncFlag = true;
        setTimeout(function () {
            _this.asyncFlag = false;
        }, 3000);
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    ContextMenuPanelDemoComponent.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/layout/panel/panelcontextmenu/panel.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/layout/panel/panelcontextmenu/panel.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    ContextMenuPanelDemoComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    ContextMenuPanelDemoComponent.prototype.refreshData = function () {
        this.refreshDialogue = !this.refreshDialogue;
    };
    ContextMenuPanelDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contextmenu-panel',
            template: "\n    <amexio-card header=\"true\">\n    \n      <amexio-header>\n         Panel \n      </amexio-header>\n      <amexio-body>\n        <p>Panel provides an easy way to organize big forms by grouping the fields in panel and with context menu functionality (right click option).</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n          \n            <amexio-row>\n            <amexio-column [size]=\"4\">\n            </amexio-column>\n              <amexio-column [size]=\"4\">\n                <amexio-panel [border]=\"true\" [context-menu]=\"rightclickdata\" [header]=\"true\"  title=\"Custom Header\" expanded=\"true\" >\n                  <amexio-panel-header>\n                    <amexio-image [icon-class]=\"'fa fa-refresh fa-fw'\" (onClick)=\"refreshData()\">\n                    </amexio-image>\n                  </amexio-panel-header>\n                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                </amexio-panel>\n                <amexio-dialogue [show-dialogue]=\"refreshDialogue\" [title]=\"'refresh'\" [message]=\"'Data refresh successfully.'\"\n                                [primary-action-label]=\"'ok'\" [message-type]=\"'warning'\" [type]=\"'alert'\">\n                </amexio-dialogue>\n              </amexio-column>\n              <amexio-column [size]=\"4\">\n              </amexio-column>\n            </amexio-row>\n            \n          </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Properties <amexio-panel>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/layout/panel/panel.json'\"\n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\" >\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'version'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br />\n            <amexio-datagrid title=\"Events\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/layout/panel/panel.json'\"\n                             [data-reader]=\"'events'\"\n                             [enable-data-filter]=\"false\" >\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n\n\n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n              <div style=\"overflow-y: scroll\">\n              <amexio-vertical-tab-view>\n                <amexio-tab title=\"HTML\" [active]=\"true\">\n                  <ng-container *ngIf=\"htmlCode\">\n                    <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                    <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                  </ng-container>\n                </amexio-tab>\n                <amexio-tab title=\"Type Script\">\n                  <ng-container *ngIf=\"typeScriptCode\">\n                    <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                  </ng-container>\n                </amexio-tab>\n              </amexio-vertical-tab-view> \n              </div>\n            </div>\n           \n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n          <p align=\"center\">Amexio Sandbox</p>\n          <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-panel-contextmenu-demo?embed=1&file=src/app/app.component.ts&view=preview\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n  "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContextMenuPanelDemoComponent);
    return ContextMenuPanelDemoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=contextualmenu-panel-contextmenupanel-demo-module.js.map