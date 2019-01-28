(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panes-dialogue-dialogue-demo-module"],{

/***/ "./src/app/panes/dialogue/dialogue.demo.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/panes/dialogue/dialogue.demo.component.ts ***!
  \***********************************************************/
/*! exports provided: DialogueDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogueDemoComponent", function() { return DialogueDemoComponent; });
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


var DialogueDemoComponent = /** @class */ (function () {
    function DialogueDemoComponent(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
    }
    DialogueDemoComponent.prototype.getDta = function () {
        var _this = this;
        this.asyncFlag = true;
        setTimeout(function () {
            _this.asyncFlag = false;
        }, 3000);
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    DialogueDemoComponent.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/pane/dialogue/dialogue.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/pane/dialogue/dialogue.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    DialogueDemoComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    DialogueDemoComponent.prototype.toggleConfirm = function (data) {
        if (data == 'material') {
            this.confirmdialoguematerial = !this.confirmdialoguematerial;
        }
        else if (data == 'nonmaterial') {
            this.confirmdialoguenonmaterial = !this.confirmdialoguenonmaterial;
        }
    };
    DialogueDemoComponent.prototype.toggleError = function (data) {
        if (data == 'material') {
            this.errordialoguematerial = !this.errordialoguematerial;
        }
        else if (data == 'nonmaterial') {
            this.errordialoguenonmaterial = !this.errordialoguenonmaterial;
        }
    };
    DialogueDemoComponent.prototype.toggleWarning = function (data) {
        if (data == 'material') {
            this.warningdialoguematerial = !this.warningdialoguematerial;
        }
        else if (data == 'nonmaterial') {
            this.warningdialoguenonmaterial = !this.warningdialoguenonmaterial;
        }
    };
    DialogueDemoComponent.prototype.toggleHelp = function (data) {
        if (data == 'material') {
            this.helpdialoguematerial = !this.helpdialoguematerial;
        }
        else if (data == 'nonmaterial') {
            this.helpdialoguenonmaterial = !this.helpdialoguenonmaterial;
        }
    };
    DialogueDemoComponent.prototype.toggleCustom = function (data) {
        if (data == 'material') {
            this.customdialoguematerial = !this.customdialoguematerial;
        }
        else if (data == 'nonmaterial') {
            this.customdialoguenonmaterial = !this.customdialoguenonmaterial;
        }
    };
    DialogueDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialogue-demo', template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n        dialogue\n      </amexio-header>\n      <amexio-body>\n        <p>A Simple dialogue which renders various prompts like Confirmation/Alert based on type, title, body user has\n          configured.</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n            <amexio-row>\n              <amexio-column size=\"6\">\n                <amexio-card [header]=\"true\">\n                  <amexio-header> Material Design Pattern</amexio-header>\n                  <amexio-body>\n\n                    <amexio-row>\n\n                      <amexio-column [size]=\"6\" >\n\n                        <amexio-button type=\"success\" (onClick)=\"toggleConfirm('material')\" label=\"Confirm\"></amexio-button>\n\n                        <amexio-dialogue  [(show)]=\"confirmdialoguematerial\"\n                                          [button-size]=\"'medium'\"\n                                          [material-design]=\"true\"\n                                          [title]=\"'Confirm'\"\n                                          [message]=\"'Are you sure ?'\"\n                                          [message-type]=\"'confirm'\" >\n                        </amexio-dialogue>\n\n                      </amexio-column>\n                      <amexio-column [size]=\"6\">\n                        <amexio-button type=\"danger\" (onClick)=\"toggleError('material')\" label=\"Error\"></amexio-button>\n\n                        <amexio-dialogue [(show)]=\"errordialoguematerial\"\n                                         [close-on-escape]=\"true\"\n                                         [material-design]=\"true\"\n                                         [message]=\"'Error Occurred.'\"\n                                         [primary-action-label]=\"'Ok'\"\n                                         [title]=\"'Error'\"\n                                         [message-type]=\"'error'\"\n                                         [type]=\"'alert'\">\n                        </amexio-dialogue>\n                      </amexio-column>\n\n                    </amexio-row>\n                    <amexio-row>\n\n                      <amexio-column [size]=\"6\">\n                        <amexio-button [type]=\"'warning'\" (onClick)=\"toggleWarning('material')\" label=\"Warning\"></amexio-button>\n\n                        <amexio-dialogue [(show)]=\"warningdialoguematerial\"\n                                         [material-design]=\"true\"\n                                         [message]=\"'Data not found.'\"\n                                         [title]=\"'Warning'\"\n                                         [message-type]=\"'warning'\"\n                                         [type]=\"'alert'\">\n                        </amexio-dialogue>\n                      </amexio-column>\n                      <amexio-column [size]=\"6\">\n                        <amexio-button type=\"primary\" (onClick)=\"toggleHelp('material')\" label=\"Help\"></amexio-button>\n\n                        <amexio-dialogue [(show)]=\"helpdialoguematerial\"\n                                         [material-design]=\"true\"\n                                         [title]=\"'Help'\"\n                                         [message]=\"'Check Server.'\"\n                                         [message-type]=\"'help'\"\n                                         [type]=\"'alert'\">\n                        </amexio-dialogue>\n                      </amexio-column>\n\n                    </amexio-row>\n                    <amexio-row>\n\n                      <amexio-column [size]=\"12\">\n                        <amexio-button  type=\"primary\" (onClick)=\"toggleCustom('material')\" label=\"Custom\"></amexio-button>\n                        <amexio-dialogue [(show)]=\"customdialoguematerial\"\n                                         [material-design]=\"true\"\n                                         [close-on-escape]=\"false\"\n                                         [custom]=\"true\"\n                                         [title]=\"'Custom dialogue'\"\n                                         [type]=\"'confirm'\">\n                          <amexio-body>\n                            <amexio-text-input field-label=\"Name\" name=\"name\"\n                                               place-holder=\"Enter name\"\n                                               icon-feedback=\"true\">\n                            </amexio-text-input>\n                          </amexio-body>\n                          <amexio-action>\n                            <amexio-button type=\"primary\"\n                                           (onClick)=\"toggleCustom('material')\"\n                                           label=\"save\">\n                            </amexio-button>\n                          </amexio-action>\n                        </amexio-dialogue>\n                        <amexio-row>\n                          <amexio-column [size]=\"'12'\">\n                            <amexio-label\n                              size=\"small\">\n                              (Escape functionality is disabled)\n                            </amexio-label>\n                          </amexio-column>\n                        </amexio-row>\n\n                      </amexio-column>\n\n                    </amexio-row>\n                    \n                  </amexio-body>\n                </amexio-card>\n               \n              </amexio-column>\n              \n              \n                <amexio-column size=\"6\">\n                  <amexio-card [header]=\"true\">\n                    <amexio-header> Non Material Design Pattern</amexio-header>\n                    <amexio-body>\n                      <amexio-row>\n                        <amexio-column [size]=\"6\" >\n\n                          <amexio-button type=\"success\" (onClick)=\"toggleConfirm('nonmaterial')\" label=\"Confirm\"></amexio-button>\n                          <amexio-dialogue  [(show)]=\"confirmdialoguenonmaterial\"  [button-size]=\"'medium'\"  [material-design]=\"false\" [title]=\"'Confirm'\" [message]=\"'Are you sure ?'\"\n                                            [message-type]=\"'confirm'\" >\n                          </amexio-dialogue>\n\n                        </amexio-column>\n                        <amexio-column [size]=\"6\">\n                          <amexio-button type=\"danger\" (onClick)=\"toggleError('nonmaterial')\" label=\"Error\"></amexio-button>\n                          <amexio-dialogue [(show)]=\"errordialoguenonmaterial\"\n                                           [close-on-escape]=\"true\"\n                                           [material-design]=\"false\"\n                                           [message]=\"'Error Occurred.'\"\n                                           [primary-action-label]=\"'Ok'\"\n                                           [title]=\"'Error'\"\n                                           [message-type]=\"'error'\"\n                                           [type]=\"'alert'\">\n                          </amexio-dialogue>\n                        </amexio-column>\n                        </amexio-row>\n                      \n                        <amexio-row>\n                        <amexio-column [size]=\"6\">\n                          <amexio-button [type]=\"'warning'\" (onClick)=\"toggleWarning('nonmaterial')\" label=\"Warning\"></amexio-button>\n                          <amexio-dialogue [(show)]=\"warningdialoguenonmaterial\"\n                                           [material-design]=\"false\"\n                                           [message]=\"'Data not found.'\"\n                                           [title]=\"'Warning'\"\n                                           [message-type]=\"'warning'\"\n                                           [type]=\"'alert'\">\n                          </amexio-dialogue>\n                        </amexio-column>\n                        <amexio-column [size]=\"6\">\n                          <amexio-button type=\"primary\" (onClick)=\"toggleHelp('nonmaterial')\" label=\"Help\"></amexio-button>\n                          <amexio-dialogue [(show)]=\"helpdialoguenonmaterial\"\n                                           [material-design]=\"false\"\n                                           [title]=\"'Help'\"\n                                           [message]=\"'Check Server.'\"\n                                           [message-type]=\"'help'\"\n                                           [type]=\"'alert'\">\n                          </amexio-dialogue>\n                        </amexio-column>\n                        </amexio-row>\n                      \n                        <amexio-row>\n                        <amexio-column [size]=\"12\">\n                          <amexio-button type=\"primary\" (onClick)=\"toggleCustom('nonmaterial')\" label=\"Custom\"></amexio-button>\n\n                          <amexio-dialogue [(show)]=\"customdialoguenonmaterial\"\n                                           [material-design]=\"false\"\n                                           [close-on-escape]=\"false\"\n                                           [custom]=\"true\"\n                                           [title]=\"'Custom dialogue'\"\n                                           [type]=\"'confirm'\">\n                            <amexio-body>\n                              <amexio-text-input field-label=\"Name\" name=\"name\"\n                                                 place-holder=\"Enter name\"\n                                                 icon-feedback=\"true\"\n                              ></amexio-text-input>\n                            </amexio-body>\n                            <amexio-action>\n                              <amexio-button type=\"primary\"\n                                             (onClick)=\"toggleCustom('nonmaterial')\"\n                                             label=\"save\">\n                              </amexio-button>\n                            </amexio-action>\n                          </amexio-dialogue>\n\n                          <amexio-row>\n                            <amexio-column [size]=\"'12'\">\n                              <amexio-label\n                                size=\"small\">\n                                (Escape functionality is disabled)\n                              </amexio-label>\n                            </amexio-column>\n                          </amexio-row>\n\n                        </amexio-column>\n                        </amexio-row>\n\n                    </amexio-body>\n                  </amexio-card>\n                  \n               \n              </amexio-column>\n            </amexio-row>\n          \n            \n              \n            \n            \n          </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Properties <amexio-dialogue>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/panes/dialogue/dialogue.json'\"\n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"20\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\"\n                                        [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br>\n            <amexio-datagrid title=\"Events\" [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/panes/dialogue/dialogue.json'\" [data-reader]=\"'events'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [data-index]=\"'name'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'description'\" [width]=\"65\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n            <amexio-vertical-tab-view>\n              <amexio-tab title=\"HTML\" [active]=\"true\">\n                <ng-container *ngIf=\"htmlCode\">\n                  <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                  <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Type Script\">\n                <ng-container *ngIf=\"typeScriptCode\">\n                  <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n            </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n          <p align=\"center\">Amexio Sandbox</p>\n            <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-dialogue?embed=1&file=app/panels/dialogue/dialogue.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n  "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DialogueDemoComponent);
    return DialogueDemoComponent;
}());



/***/ }),

/***/ "./src/app/panes/dialogue/dialogue.demo.module.ts":
/*!********************************************************!*\
  !*** ./src/app/panes/dialogue/dialogue.demo.module.ts ***!
  \********************************************************/
/*! exports provided: DialogueDemoModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogueDemoModule", function() { return DialogueDemoModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _dialogue_demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialogue.demo.component */ "./src/app/panes/dialogue/dialogue.demo.component.ts");
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
    { path: '', component: _dialogue_demo_component__WEBPACK_IMPORTED_MODULE_6__["DialogueDemoComponent"] },
];
var DialogueDemoModule = /** @class */ (function () {
    function DialogueDemoModule() {
    }
    DialogueDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [_dialogue_demo_component__WEBPACK_IMPORTED_MODULE_6__["DialogueDemoComponent"]]
        })
    ], DialogueDemoModule);
    return DialogueDemoModule;
}());

var routedComponents = [_dialogue_demo_component__WEBPACK_IMPORTED_MODULE_6__["DialogueDemoComponent"]];


/***/ })

}]);
//# sourceMappingURL=panes-dialogue-dialogue-demo-module.js.map