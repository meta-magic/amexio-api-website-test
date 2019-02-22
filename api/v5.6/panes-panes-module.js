(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panes-panes-module"],{

/***/ "./src/app/panes/carousel/carousel.demo.html":
/*!***************************************************!*\
  !*** ./src/app/panes/carousel/carousel.demo.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/panels/carousel.json'\">\n    <amexio-api-demo>\n        <amexio-carousel [header]=\"'Gallery'\" [data]=\"[1,2,3,4,5,6,7,8,9,10,11,12]\" mode=\"multiple\">\n            <ng-template let-img amexioTemplate=\"item\">\n                <amexio-image [height]=\"'300px'\" path=\"assets/images/carousel/set1/{{img}}.jpg\"></amexio-image>\n            </ng-template>\n        </amexio-carousel>\n        <br><br>\n\n        <amexio-carousel [header]=\"'Gallery With Auto Shuffle (2 seconds)'\" [data]=\"[1,2,3,4,5,6,7,8,9,10,11]\" mode=\"multiple\"\n            shuffle-interval=\"2000\">\n            <ng-template let-gallery amexioTemplate=\"item\">\n                <amexio-image [height]=\"'300px'\" path=\"assets/images/carousel/set2/{{gallery}}.jpg\"></amexio-image>\n            </ng-template>\n        </amexio-carousel>\n        <br><br>\n\n\n    </amexio-api-demo>\n</amexio-api-structure>"

/***/ }),

/***/ "./src/app/panes/carousel/carousel.demo.ts":
/*!*************************************************!*\
  !*** ./src/app/panes/carousel/carousel.demo.ts ***!
  \*************************************************/
/*! exports provided: CarouselDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselDemoComponent", function() { return CarouselDemoComponent; });
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
/**
 * Created by pratik on 16/1/18.
 */

var CarouselDemoComponent = /** @class */ (function () {
    function CarouselDemoComponent() {
    }
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    CarouselDemoComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    CarouselDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carousel-demo',
            template: __webpack_require__(/*! ./carousel.demo.html */ "./src/app/panes/carousel/carousel.demo.html"),
        }),
        __metadata("design:paramtypes", [])
    ], CarouselDemoComponent);
    return CarouselDemoComponent;
}());



/***/ }),

/***/ "./src/app/panes/dialogue/dialogue.demo.component.html":
/*!*************************************************************!*\
  !*** ./src/app/panes/dialogue/dialogue.demo.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<amexio-api-structure  [url]=\"'assets/componentjson/panels/dialogue.json'\">\n  <amexio-api-demo>\n  <amexio-row>\n    <amexio-column size=\"6\">\n      <amexio-card [header]=\"true\">\n        <amexio-header> Material Design Pattern</amexio-header>\n        <amexio-body>\n\n          <amexio-row>\n\n            <amexio-column [size]=\"6\">\n\n              <amexio-button type=\"success\" (onClick)=\"toggleConfirm('material')\" label=\"Confirm\"></amexio-button>\n\n              <amexio-dialogue [(show)]=\"confirmdialoguematerial\" [button-size]=\"'medium'\" [material-design]=\"true\"\n                [title]=\"'Confirm'\" [message]=\"'Are you sure ?'\" [message-type]=\"'confirm'\">\n              </amexio-dialogue>\n\n            </amexio-column>\n            <amexio-column [size]=\"6\">\n              <amexio-button type=\"danger\" (onClick)=\"toggleError('material')\" label=\"Error\"></amexio-button>\n\n              <amexio-dialogue [(show)]=\"errordialoguematerial\" [close-on-escape]=\"true\" [material-design]=\"true\"\n                [message]=\"'Error Occurred.'\" [primary-action-label]=\"'Ok'\" [title]=\"'Error'\" [message-type]=\"'error'\"\n                [type]=\"'alert'\">\n              </amexio-dialogue>\n            </amexio-column>\n\n          </amexio-row>\n          <amexio-row>\n\n            <amexio-column [size]=\"6\">\n              <amexio-button [type]=\"'warning'\" (onClick)=\"toggleWarning('material')\" label=\"Warning\"></amexio-button>\n\n              <amexio-dialogue [(show)]=\"warningdialoguematerial\" [material-design]=\"true\" [message]=\"'Data not found.'\"\n                [title]=\"'Warning'\" [message-type]=\"'warning'\" [type]=\"'alert'\">\n              </amexio-dialogue>\n            </amexio-column>\n            <amexio-column [size]=\"6\">\n              <amexio-button type=\"primary\" (onClick)=\"toggleHelp('material')\" label=\"Help\"></amexio-button>\n\n              <amexio-dialogue [(show)]=\"helpdialoguematerial\" [material-design]=\"true\" [title]=\"'Help'\" [message]=\"'Check Server.'\"\n                [message-type]=\"'help'\" [type]=\"'alert'\">\n              </amexio-dialogue>\n            </amexio-column>\n\n          </amexio-row>\n          <amexio-row>\n\n            <amexio-column [size]=\"12\">\n              <amexio-button type=\"primary\" (onClick)=\"toggleCustom('material')\" label=\"Custom\"></amexio-button>\n              <amexio-dialogue [(show)]=\"customdialoguematerial\" [material-design]=\"true\" [close-on-escape]=\"false\"\n                [custom]=\"true\" [title]=\"'Custom dialogue'\" [type]=\"'confirm'\">\n                <amexio-body>\n                  <amexio-text-input field-label=\"Name\" name=\"name\" place-holder=\"Enter name\" icon-feedback=\"true\">\n                  </amexio-text-input>\n                </amexio-body>\n                <amexio-action>\n                  <amexio-button type=\"primary\" (onClick)=\"toggleCustom('material')\" label=\"save\">\n                  </amexio-button>\n                </amexio-action>\n              </amexio-dialogue>\n              <amexio-row>\n                <amexio-column [size]=\"'12'\">\n                  <amexio-label size=\"small\">\n                    (Escape functionality is disabled)\n                  </amexio-label>\n                </amexio-column>\n              </amexio-row>\n\n            </amexio-column>\n\n          </amexio-row>\n\n        </amexio-body>\n      </amexio-card>\n\n    </amexio-column>\n\n\n    <amexio-column size=\"6\">\n      <amexio-card [header]=\"true\">\n        <amexio-header> Non Material Design Pattern</amexio-header>\n        <amexio-body>\n          <amexio-row>\n            <amexio-column [size]=\"6\">\n\n              <amexio-button type=\"success\" (onClick)=\"toggleConfirm('nonmaterial')\" label=\"Confirm\"></amexio-button>\n              <amexio-dialogue [(show)]=\"confirmdialoguenonmaterial\" [button-size]=\"'medium'\" [material-design]=\"false\"\n                [title]=\"'Confirm'\" [message]=\"'Are you sure ?'\" [message-type]=\"'confirm'\">\n              </amexio-dialogue>\n\n            </amexio-column>\n            <amexio-column [size]=\"6\">\n              <amexio-button type=\"danger\" (onClick)=\"toggleError('nonmaterial')\" label=\"Error\"></amexio-button>\n              <amexio-dialogue [(show)]=\"errordialoguenonmaterial\" [close-on-escape]=\"true\" [material-design]=\"false\"\n                [message]=\"'Error Occurred.'\" [primary-action-label]=\"'Ok'\" [title]=\"'Error'\" [message-type]=\"'error'\"\n                [type]=\"'alert'\">\n              </amexio-dialogue>\n            </amexio-column>\n          </amexio-row>\n\n          <amexio-row>\n            <amexio-column [size]=\"6\">\n              <amexio-button [type]=\"'warning'\" (onClick)=\"toggleWarning('nonmaterial')\" label=\"Warning\"></amexio-button>\n              <amexio-dialogue [(show)]=\"warningdialoguenonmaterial\" [material-design]=\"false\" [message]=\"'Data not found.'\"\n                [title]=\"'Warning'\" [message-type]=\"'warning'\" [type]=\"'alert'\">\n              </amexio-dialogue>\n            </amexio-column>\n            <amexio-column [size]=\"6\">\n              <amexio-button type=\"primary\" (onClick)=\"toggleHelp('nonmaterial')\" label=\"Help\"></amexio-button>\n              <amexio-dialogue [(show)]=\"helpdialoguenonmaterial\" [material-design]=\"false\" [title]=\"'Help'\" [message]=\"'Check Server.'\"\n                [message-type]=\"'help'\" [type]=\"'alert'\">\n              </amexio-dialogue>\n            </amexio-column>\n          </amexio-row>\n\n          <amexio-row>\n            <amexio-column [size]=\"12\">\n              <amexio-button type=\"primary\" (onClick)=\"toggleCustom('nonmaterial')\" label=\"Custom\"></amexio-button>\n\n              <amexio-dialogue [(show)]=\"customdialoguenonmaterial\" [material-design]=\"false\" [close-on-escape]=\"false\"\n                [custom]=\"true\" [title]=\"'Custom dialogue'\" [type]=\"'confirm'\">\n                <amexio-body>\n                  <amexio-text-input field-label=\"Name\" name=\"name\" place-holder=\"Enter name\" icon-feedback=\"true\"></amexio-text-input>\n                </amexio-body>\n                <amexio-action>\n                  <amexio-button type=\"primary\" (onClick)=\"toggleCustom('nonmaterial')\" label=\"save\">\n                  </amexio-button>\n                </amexio-action>\n              </amexio-dialogue>\n\n              <amexio-row>\n                <amexio-column [size]=\"'12'\">\n                  <amexio-label size=\"small\">\n                    (Escape functionality is disabled)\n                  </amexio-label>\n                </amexio-column>\n              </amexio-row>\n\n            </amexio-column>\n          </amexio-row>\n\n        </amexio-body>\n      </amexio-card>\n\n\n    </amexio-column>\n  </amexio-row>\n\n</amexio-api-demo>\n</amexio-api-structure>\n"

/***/ }),

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
    function DialogueDemoComponent() {
    }
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
            selector: 'dialogue-demo',
            template: __webpack_require__(/*! ./dialogue.demo.component.html */ "./src/app/panes/dialogue/dialogue.demo.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], DialogueDemoComponent);
    return DialogueDemoComponent;
}());



/***/ }),

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
    function FieldSetDemoComponent() {
    }
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
            template: __webpack_require__(/*! ./fieldset.demo.html */ "./src/app/panes/fieldset/fieldset.demo.html"),
        }),
        __metadata("design:paramtypes", [])
    ], FieldSetDemoComponent);
    return FieldSetDemoComponent;
}());



/***/ }),

/***/ "./src/app/panes/fieldset/fieldset.demo.html":
/*!***************************************************!*\
  !*** ./src/app/panes/fieldset/fieldset.demo.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-api-structure  [url]=\"'assets/componentjson/panels/fieldset.json'\">\n  <amexio-api-demo>  \n    <amexio-row>\n      <amexio-column [size]=\"12\">\n        <amexio-fieldset [collapsible]=\"true\" title=\"Employee Registration\">\n          <amexio-row>\n            <amexio-column [size]=\"6\">\n              <amexio-text-input [field-label]=\"'Name'\" name=\"country\"\n                                 [place-holder]=\"'Enter name'\"\n                                 [enable-popover]=\"true\"\n                                 [icon-feedback]=\"true\"\n                                 [allow-blank]=\"false\" [error-msg]=\"'Please enter name'\"\n                                 [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Name should be minimum 3 characters'\"\n                                 [max-error-msg]=\"'Name should be less than 15 characters'\"\n              >\n              </amexio-text-input>\n            </amexio-column>\n            <amexio-column [size]=\"6\">\n              <amexio-text-input [field-label]=\"'Surname'\" name=\"name\"\n                                 [place-holder]=\"'Enter surname'\"\n                                 [enable-popover]=\"true\"\n                                 [icon-feedback]=\"true\"\n                                 [allow-blank]=\"false\" [error-msg]=\"'Please enter Surname'\"\n                                 [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Surname should be minimum 3 characters'\"\n                                 [max-error-msg]=\"'Surname should be less than 15 characters'\"\n              >\n              </amexio-text-input>\n            </amexio-column>\n          </amexio-row>\n          <amexio-row>\n            <amexio-column [size]=\"6\">\n\n              <amexio-textarea-input [field-label]=\"'Address'\" name=\"Address\"\n                                     [place-holder]=\"'Enter address'\"\n                                     [error-msg]=\"'Please enter address'\"\n                                     [icon-feedback]=\"true\"\n                                     [rows]=\"'4'\" [columns]=\"'2'\"\n                                     [allow-blank]=\"false\" [enable-popover]=\"true\"\n\n              >\n              </amexio-textarea-input>\n\n\n            </amexio-column>\n       \n          </amexio-row>\n\n        </amexio-fieldset>\n      </amexio-column>\n    </amexio-row>\n</amexio-api-demo>\n</amexio-api-structure>\n\n\n"

/***/ }),

/***/ "./src/app/panes/panel/panel.demo.html":
/*!*********************************************!*\
  !*** ./src/app/panes/panel/panel.demo.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/panels/panel.json'\">\n    <amexio-api-demo>\n\n\n        <h2>Demo:Panel</h2>\n        <amexio-row>\n            <amexio-column [size]=\"4\">\n                <amexio-panel title=\"Panel\" [height]=\"'360'\" [fit]=\"true\" [expanded]=\"true\">\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has\n                    been the industry's standard dummy\n                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it\n                    to\n                    make a type specimen book. It has survived not only five centuries, but also the leap into\n                    electronic\n                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the\n                    release\n                    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop\n                    publishing\n                    software like Aldus PageMaker including versions of Lorem Ipsum.\n                </amexio-panel>\n            </amexio-column>\n            <amexio-column [size]=\"4\">\n\n                <amexio-panel [fit]=\"true\" [border]=\"true\" [header]=\"true\" title=\"Panel Header \" [expanded]=\"true\">\n                    <amexio-panel-header>\n                        <amexio-image [icon-class]=\"'fa fa-refresh fa-fw'\" (onClick)=\"refreshData()\">\n                        </amexio-image>\n                    </amexio-panel-header>\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has\n                    been the industry's standard dummy\n                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it\n                    to\n                    make a type specimen book. It has survived not only five centuries, but al so the leap into\n                    electronic\n                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the\n                    release\n                    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop\n                    publishing\n                    software like Aldus PageMaker including versions of Lorem Ipsum.\n                </amexio-panel>\n\n                <amexio-dialogue [(show)]=\"refreshDialogue\" [material-design]=\"false\" [message]=\"'Data refresh successfully.'\"\n                    [title]=\"'Refresh'\" [message-type]=\"'warning'\" [type]=\"'alert'\">\n                </amexio-dialogue>\n            </amexio-column>\n            <amexio-column [size]=\"4\">\n                <amexio-panel [fit]=\"true\" [border]=\"true\" [header]=\"false\" [height]=\"'360'\" [expanded]=\"false\">\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has\n                    been the industry's standard dummy\n                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it\n                    to\n                    make a type specimen book. It has survived not only five centuries, but also the leap into\n                    electronic\n                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the\n                    release\n                    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop\n                    publishing\n                    software like Aldus PageMaker including versions of Lorem Ipsum.\n                </amexio-panel>\n            </amexio-column>\n        </amexio-row>\n\n        <h2>Demo:Panel with ToolBar</h2>\n\n        <amexio-row>\n            <amexio-column [size]=\"12\">\n                <amexio-panel [fit]=\"false\" [border]=\"true\" [header]=\"true\" title=\"Custom Header\" [expanded]=\"true\">\n                    <amexio-panel-header>\n                        <amexio-label size=\"small\" font-color=\"white\">\n                            My Drive\n                        </amexio-label>\n                        <amexio-text-input name=\"name\" place-holder=\"Enter name\" icon-feedback=\"true\">\n                        </amexio-text-input>\n                        <amexio-image style=\"margin-top : auto;\" [icon-class]=\"'fa fa-info-circle'\" [tooltip]=\"'Fontawesome apple'\">\n                        </amexio-image>\n\n\n                    </amexio-panel-header>\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has\n                    been the industry's standard dummy\n                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it\n                    to\n                    make a type specimen book. It has survived not only five centuries, but also the leap into\n                    electronic\n                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the\n                    release\n                    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop\n                    publishing\n                    software like Aldus PageMaker including versions of Lorem Ipsum.\n                </amexio-panel>\n\n            </amexio-column>\n\n        </amexio-row>"

/***/ }),

/***/ "./src/app/panes/panel/panel.demo.ts":
/*!*******************************************!*\
  !*** ./src/app/panes/panel/panel.demo.ts ***!
  \*******************************************/
/*! exports provided: PanelDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelDemoComponent", function() { return PanelDemoComponent; });
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
/**
 * Created by pratik on 16/1/18.
 */

var PanelDemoComponent = /** @class */ (function () {
    function PanelDemoComponent() {
        this.rightclickdata =
            [{ "text": "Add New", "icon": "fa fa-plus", "disabled": true }, { "text": "Edit", "icon": "", "seperator": true },
                { "text": "Send data in email", "icon": "" }];
    }
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    PanelDemoComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    PanelDemoComponent.prototype.refreshData = function () {
        this.refreshDialogue = !this.refreshDialogue;
    };
    PanelDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'panel-demo',
            template: __webpack_require__(/*! ./panel.demo.html */ "./src/app/panes/panel/panel.demo.html")
        }),
        __metadata("design:paramtypes", [])
    ], PanelDemoComponent);
    return PanelDemoComponent;
}());



/***/ }),

/***/ "./src/app/panes/panes.module.ts":
/*!***************************************!*\
  !*** ./src/app/panes/panes.module.ts ***!
  \***************************************/
/*! exports provided: PanesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanesModule", function() { return PanesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _panes_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./panes.routes */ "./src/app/panes/panes.routes.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _window_window_demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./window/window.demo.component */ "./src/app/panes/window/window.demo.component.ts");
/* harmony import */ var _steps_stepbox_stepbox_demo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./steps/stepbox/stepbox.demo */ "./src/app/panes/steps/stepbox/stepbox.demo.ts");
/* harmony import */ var _steps_stepbox_icon_stepbox_icon_demo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./steps/stepbox-icon/stepbox.icon.demo */ "./src/app/panes/steps/stepbox-icon/stepbox.icon.demo.ts");
/* harmony import */ var _tab_closabletab_closabletab_demo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tab/closabletab/closabletab.demo */ "./src/app/panes/tab/closabletab/closabletab.demo.ts");
/* harmony import */ var _panel_panel_demo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./panel/panel.demo */ "./src/app/panes/panel/panel.demo.ts");
/* harmony import */ var _fieldset_fieldset_demo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fieldset/fieldset.demo.component */ "./src/app/panes/fieldset/fieldset.demo.component.ts");
/* harmony import */ var _dialogue_dialogue_demo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialogue/dialogue.demo.component */ "./src/app/panes/dialogue/dialogue.demo.component.ts");
/* harmony import */ var _carousel_carousel_demo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./carousel/carousel.demo */ "./src/app/panes/carousel/carousel.demo.ts");
/* harmony import */ var _tab_enhancedtab_enhancedtab_demo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tab/enhancedtab/enhancedtab.demo */ "./src/app/panes/tab/enhancedtab/enhancedtab.demo.ts");
/* harmony import */ var _tab_enhancedverticaltab_enhancedverticaltab_demo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tab/enhancedverticaltab/enhancedverticaltab.demo */ "./src/app/panes/tab/enhancedverticaltab/enhancedverticaltab.demo.ts");
/* harmony import */ var _tab_scrollabletab_scrollabletab_demo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tab/scrollabletab/scrollabletab.demo */ "./src/app/panes/tab/scrollabletab/scrollabletab.demo.ts");
/* harmony import */ var _tab_iconwithtab_iconwithtab_demo__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tab/iconwithtab/iconwithtab.demo */ "./src/app/panes/tab/iconwithtab/iconwithtab.demo.ts");
/* harmony import */ var _tab_verticalrighttab_verticalrighttab_demo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tab/verticalrighttab/verticalrighttab.demo */ "./src/app/panes/tab/verticalrighttab/verticalrighttab.demo.ts");
/* harmony import */ var _tab_verticaltab_verticaltab_demo__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tab/verticaltab/verticaltab.demo */ "./src/app/panes/tab/verticaltab/verticaltab.demo.ts");
/* harmony import */ var _tab_basictab_tab_demo__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./tab/basictab/tab.demo */ "./src/app/panes/tab/basictab/tab.demo.ts");
/* harmony import */ var _tab_enhancedtab_dynamictabdemo_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./tab/enhancedtab/dynamictabdemo.component */ "./src/app/panes/tab/enhancedtab/dynamictabdemo.component.ts");
/* harmony import */ var _tab_enhancedverticaltab_dynamicverticaltabdemo_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./tab/enhancedverticaltab/dynamicverticaltabdemo.component */ "./src/app/panes/tab/enhancedverticaltab/dynamicverticaltabdemo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























/**
 * Created by kedar on 1/2/19.
 */
var PanesModule = /** @class */ (function () {
    function PanesModule() {
    }
    PanesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_window_window_demo_component__WEBPACK_IMPORTED_MODULE_8__["WindowDemoComponent"], _steps_stepbox_icon_stepbox_icon_demo__WEBPACK_IMPORTED_MODULE_10__["StepBoxIconComponent"], _steps_stepbox_stepbox_demo__WEBPACK_IMPORTED_MODULE_9__["StepBoxDemoComponent"],
                _tab_closabletab_closabletab_demo__WEBPACK_IMPORTED_MODULE_11__["ClosableTabDemo"], _panel_panel_demo__WEBPACK_IMPORTED_MODULE_12__["PanelDemoComponent"], _fieldset_fieldset_demo_component__WEBPACK_IMPORTED_MODULE_13__["FieldSetDemoComponent"], _dialogue_dialogue_demo_component__WEBPACK_IMPORTED_MODULE_14__["DialogueDemoComponent"],
                _carousel_carousel_demo__WEBPACK_IMPORTED_MODULE_15__["CarouselDemoComponent"], _tab_enhancedtab_enhancedtab_demo__WEBPACK_IMPORTED_MODULE_16__["EnhancedTabDemo"], _tab_enhancedverticaltab_enhancedverticaltab_demo__WEBPACK_IMPORTED_MODULE_17__["EnhancedVerticalTabDemo"], _tab_scrollabletab_scrollabletab_demo__WEBPACK_IMPORTED_MODULE_18__["ScrollableTabDemo"],
                _tab_iconwithtab_iconwithtab_demo__WEBPACK_IMPORTED_MODULE_19__["IconWithTabDemo"], _tab_verticalrighttab_verticalrighttab_demo__WEBPACK_IMPORTED_MODULE_20__["VerticalRightTabDemo"], _tab_verticaltab_verticaltab_demo__WEBPACK_IMPORTED_MODULE_21__["VerticalTabDemo"], _tab_basictab_tab_demo__WEBPACK_IMPORTED_MODULE_22__["TabDemo"], _tab_enhancedtab_dynamictabdemo_component__WEBPACK_IMPORTED_MODULE_23__["DyanmicTabComponent"],
                _tab_enhancedverticaltab_dynamicverticaltabdemo_component__WEBPACK_IMPORTED_MODULE_24__["DyanmicVerticalTabComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"].forRoot(),
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AmexioWidgetModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(_panes_routes__WEBPACK_IMPORTED_MODULE_6__["PANES_ROUTE"]),
            ],
            providers: [],
            entryComponents: [_tab_enhancedtab_dynamictabdemo_component__WEBPACK_IMPORTED_MODULE_23__["DyanmicTabComponent"], _tab_enhancedverticaltab_dynamicverticaltabdemo_component__WEBPACK_IMPORTED_MODULE_24__["DyanmicVerticalTabComponent"]]
        })
    ], PanesModule);
    return PanesModule;
}());



/***/ }),

/***/ "./src/app/panes/panes.routes.ts":
/*!***************************************!*\
  !*** ./src/app/panes/panes.routes.ts ***!
  \***************************************/
/*! exports provided: PANES_ROUTE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PANES_ROUTE", function() { return PANES_ROUTE; });
/* harmony import */ var _window_window_demo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./window/window.demo.component */ "./src/app/panes/window/window.demo.component.ts");
/* harmony import */ var _tab_closabletab_closabletab_demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab/closabletab/closabletab.demo */ "./src/app/panes/tab/closabletab/closabletab.demo.ts");
/* harmony import */ var _steps_stepbox_icon_stepbox_icon_demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./steps/stepbox-icon/stepbox.icon.demo */ "./src/app/panes/steps/stepbox-icon/stepbox.icon.demo.ts");
/* harmony import */ var _steps_stepbox_stepbox_demo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./steps/stepbox/stepbox.demo */ "./src/app/panes/steps/stepbox/stepbox.demo.ts");
/* harmony import */ var _panel_panel_demo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panel/panel.demo */ "./src/app/panes/panel/panel.demo.ts");
/* harmony import */ var _fieldset_fieldset_demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fieldset/fieldset.demo.component */ "./src/app/panes/fieldset/fieldset.demo.component.ts");
/* harmony import */ var _dialogue_dialogue_demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialogue/dialogue.demo.component */ "./src/app/panes/dialogue/dialogue.demo.component.ts");
/* harmony import */ var _carousel_carousel_demo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carousel/carousel.demo */ "./src/app/panes/carousel/carousel.demo.ts");
/* harmony import */ var _tab_enhancedtab_enhancedtab_demo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab/enhancedtab/enhancedtab.demo */ "./src/app/panes/tab/enhancedtab/enhancedtab.demo.ts");
/* harmony import */ var _tab_enhancedverticaltab_enhancedverticaltab_demo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tab/enhancedverticaltab/enhancedverticaltab.demo */ "./src/app/panes/tab/enhancedverticaltab/enhancedverticaltab.demo.ts");
/* harmony import */ var _tab_scrollabletab_scrollabletab_demo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tab/scrollabletab/scrollabletab.demo */ "./src/app/panes/tab/scrollabletab/scrollabletab.demo.ts");
/* harmony import */ var _tab_iconwithtab_iconwithtab_demo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tab/iconwithtab/iconwithtab.demo */ "./src/app/panes/tab/iconwithtab/iconwithtab.demo.ts");
/* harmony import */ var _tab_verticalrighttab_verticalrighttab_demo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tab/verticalrighttab/verticalrighttab.demo */ "./src/app/panes/tab/verticalrighttab/verticalrighttab.demo.ts");
/* harmony import */ var _tab_verticaltab_verticaltab_demo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tab/verticaltab/verticaltab.demo */ "./src/app/panes/tab/verticaltab/verticaltab.demo.ts");
/* harmony import */ var _tab_basictab_tab_demo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tab/basictab/tab.demo */ "./src/app/panes/tab/basictab/tab.demo.ts");















/**
 * Created by kedar on 1/2/19.
 */
var PANES_ROUTE = [
    {
        path: 'window-demo', component: _window_window_demo_component__WEBPACK_IMPORTED_MODULE_0__["WindowDemoComponent"],
    },
    {
        path: 'closable-tab-demo', component: _tab_closabletab_closabletab_demo__WEBPACK_IMPORTED_MODULE_1__["ClosableTabDemo"],
    },
    {
        path: 'stepbox-icon-demo', component: _steps_stepbox_icon_stepbox_icon_demo__WEBPACK_IMPORTED_MODULE_2__["StepBoxIconComponent"],
    },
    {
        path: 'step-box-demo', component: _steps_stepbox_stepbox_demo__WEBPACK_IMPORTED_MODULE_3__["StepBoxDemoComponent"],
    },
    {
        path: 'panel-demo', component: _panel_panel_demo__WEBPACK_IMPORTED_MODULE_4__["PanelDemoComponent"],
    },
    {
        path: 'fieldset-demo', component: _fieldset_fieldset_demo_component__WEBPACK_IMPORTED_MODULE_5__["FieldSetDemoComponent"],
    },
    {
        path: 'dialogue-demo', component: _dialogue_dialogue_demo_component__WEBPACK_IMPORTED_MODULE_6__["DialogueDemoComponent"],
    },
    {
        path: 'carousel-demo', component: _carousel_carousel_demo__WEBPACK_IMPORTED_MODULE_7__["CarouselDemoComponent"],
    },
    {
        path: 'enhanced-tab-demo', component: _tab_enhancedtab_enhancedtab_demo__WEBPACK_IMPORTED_MODULE_8__["EnhancedTabDemo"],
    },
    {
        path: 'enhanced-vertical-tab-demo', component: _tab_enhancedverticaltab_enhancedverticaltab_demo__WEBPACK_IMPORTED_MODULE_9__["EnhancedVerticalTabDemo"],
    },
    {
        path: 'scrollable-tab-demo', component: _tab_scrollabletab_scrollabletab_demo__WEBPACK_IMPORTED_MODULE_10__["ScrollableTabDemo"],
    },
    {
        path: 'icon-tab-demo', component: _tab_iconwithtab_iconwithtab_demo__WEBPACK_IMPORTED_MODULE_11__["IconWithTabDemo"],
    },
    {
        path: 'verticalright-tab-demo', component: _tab_verticalrighttab_verticalrighttab_demo__WEBPACK_IMPORTED_MODULE_12__["VerticalRightTabDemo"],
    },
    {
        path: 'vertical-tab-demo', component: _tab_verticaltab_verticaltab_demo__WEBPACK_IMPORTED_MODULE_13__["VerticalTabDemo"],
    },
    {
        path: 'basic-tab-demo', component: _tab_basictab_tab_demo__WEBPACK_IMPORTED_MODULE_14__["TabDemo"],
    },
];


/***/ }),

/***/ "./src/app/panes/steps/stepbox-icon/stepbox.icon.demo.ts":
/*!***************************************************************!*\
  !*** ./src/app/panes/steps/stepbox-icon/stepbox.icon.demo.ts ***!
  \***************************************************************/
/*! exports provided: StepBoxIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepBoxIconComponent", function() { return StepBoxIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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
 * Created by pratik on 15/1/18.
 */



var StepBoxIconComponent = /** @class */ (function () {
    function StepBoxIconComponent(http) {
        this.http = http;
        this.clickMsgArray = [];
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
        this.user = false;
        this.shop = true;
        this.payment = false;
        this.confirmation = false;
    }
    StepBoxIconComponent.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    StepBoxIconComponent.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Step Box';
        this.customSourceData.description = 'Step-box component is an indicator for the steps in a workflow.';
        this.customSourceData.sourceMetadata.htmlUrl = 'layout/steps/steps_icon.html';
        this.customSourceData.sourceMetadata.tsUrl = 'layout/steps/steps.text';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-stepboxicon?embed=1&file=app/panels/stepboxicon/stepboxicon.demo.html&view=editor';
    };
    // step box click event
    StepBoxIconComponent.prototype.stepBlockClick = function (event) {
        if (event.label == "User") {
            this.showMsg("Step 1 User");
            this.updateFlag(true, false, false, false);
        }
        else if (event.label == "Shop") {
            this.showMsg("Step 2 Shop");
            this.updateFlag(false, true, false, false);
        }
        else if (event.label == "Payment") {
            this.updateFlag(false, false, true, false);
            this.showMsg("Step 3 Payment");
        }
        else if (event.label == "Confirmation") {
            this.showMsg("Step 4 Confirmation");
            this.updateFlag(false, false, false, true);
        }
    };
    StepBoxIconComponent.prototype.updateFlag = function (user, shop, payment, confirmation) {
        this.user = user;
        this.shop = shop;
        this.payment = payment;
        this.confirmation = confirmation;
    };
    StepBoxIconComponent.prototype.showMsg = function (msg) {
        if (this.clickMsgArray.length >= 1) {
            this.clickMsgArray = [];
            this.clickMsgArray.push(msg);
        }
        else {
            this.clickMsgArray.push(msg);
        }
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    StepBoxIconComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push('Code Copied');
        }
        else {
            this.copyMsgArray.push('Code Copied');
        }
    };
    StepBoxIconComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'stepbox-icon-demo',
            template: __webpack_require__(/*! ./stepboxicon.demo.html */ "./src/app/panes/steps/stepbox-icon/stepboxicon.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StepBoxIconComponent);
    return StepBoxIconComponent;
}());



/***/ }),

/***/ "./src/app/panes/steps/stepbox-icon/stepboxicon.demo.html":
/*!****************************************************************!*\
  !*** ./src/app/panes/steps/stepbox-icon/stepboxicon.demo.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/panels/step.json'\">\n    <amexio-api-demo>\n\n\n        <amexio-row>\n            <amexio-column size=\"12\">\n                <!--block is true for showing step box  -->\n                <p><strong>Step box</strong></p>\n                <!--Step-box with fontawesome icons-->\n                <amexio-steps [icon]=\"true\">\n                    <amexio-step-block [label]=\"'User'\" [active]=\"true\" [icon]=\"'fa fa-user'\"></amexio-step-block>\n                    <amexio-step-block [label]=\"'Address'\" [active]=\"false\" [icon]=\"'fa fa-address-card'\"></amexio-step-block>\n                    <amexio-step-block [label]=\"'Shop'\" [active]=\"false\" [icon]=\"'fa fa-shopping-cart'\"></amexio-step-block>\n                    <amexio-step-block [label]=\"'Payment'\" [active]=\"false\" [icon]=\"'fa fa-cc-visa'\"></amexio-step-block>\n                </amexio-steps>\n            </amexio-column>\n        </amexio-row>\n        <amexio-row>\n            <amexio-column size=\"12\">\n                <!--block is true for showing step box  -->\n                <p><strong>Step box with clickabel</strong></p>\n                <!--Step box with icon & clickable<-->\n                <amexio-steps [block]=\"true\" [icon]=\"true\" (onClick)=\"stepBlockClick($event)\">\n                    <amexio-step-block [label]=\"'User'\" [active]=\"user\" [icon]=\"'fa fa-user'\"></amexio-step-block>\n                    <amexio-step-block [label]=\"'Shop'\" [active]=\"shop\" [icon]=\"'fa fa-address-card'\"></amexio-step-block>\n                    <amexio-step-block [label]=\"'Payment'\" [active]=\"payment\" [icon]=\"'fa fa-shopping-cart'\"></amexio-step-block>\n                    <amexio-step-block [label]=\"'Confirmation'\" [active]=\"confirmation\" [icon]=\"'fa fa-cc-visa'\"></amexio-step-block>\n                </amexio-steps>\n            </amexio-column>\n        </amexio-row>\n    </amexio-api-demo>\n</amexio-api-structure>"

/***/ }),

/***/ "./src/app/panes/steps/stepbox/stepbox.demo.html":
/*!*******************************************************!*\
  !*** ./src/app/panes/steps/stepbox/stepbox.demo.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/panels/step.json'\">\n  <amexio-api-demo>\n\n    <amexio-row>\n      <amexio-column size=\"12\">\n        <!--block is true for showing step box  -->\n        <amexio-label [size]=\"'medium'\">Step box\n        </amexio-label>\n        <amexio-steps [block]=\"true\" [index]=\"true\">\n          <amexio-step-block [label]=\"'User'\" [active]=\"true\" ></amexio-step-block>\n          <amexio-step-block [label]=\"'Shop'\" [active]=\"false\" ></amexio-step-block>\n          <amexio-step-block [label]=\"'Payment'\" [active]=\"false\"></amexio-step-block>\n          <amexio-step-block [label]=\"'Confirmation'\" [active]=\"false\" ></amexio-step-block>\n        </amexio-steps>\n      </amexio-column>\n    </amexio-row>\n    <amexio-row>\n      <amexio-column size=\"12\">\n        <!--block is true for showing step box  -->\n        <amexio-label [size]=\"'medium'\">Step box with clickabel</amexio-label>\n        <amexio-steps [block]=\"true\" [index]=\"true\" (onClick)=\"stepBlockClick($event)\">\n          <amexio-step-block [label]=\"'User'\" [active]=\"user\" ></amexio-step-block>\n          <amexio-step-block [label]=\"'Shop'\" [active]=\"shop\" ></amexio-step-block>\n          <amexio-step-block [label]=\"'Payment'\" [active]=\"payment\"></amexio-step-block>\n          <amexio-step-block [label]=\"'Confirmation'\" [active]=\"confirmation\"></amexio-step-block>\n        </amexio-steps>\n      </amexio-column>\n    </amexio-row>\n    <amexio-row>\n      <amexio-column size=\"12\">\n        index is true for number inside circle\n        <br>\n        <amexio-label [size]=\"'medium'\">Step-box index\n        </amexio-label>\n        <amexio-steps [index]=\"true\">\n          <amexio-step-block [label]=\"'Step-1'\" [active]=\"true\"></amexio-step-block>\n          <amexio-step-block [label]=\"'Step-2'\" [active]=\"false\"></amexio-step-block>\n          <amexio-step-block [label]=\"'Step-3'\" [active]=\"false\"></amexio-step-block>\n          <amexio-step-block [label]=\"'Step-4'\" [active]=\"false\"></amexio-step-block>\n        </amexio-steps>\n      </amexio-column>\n    </amexio-row>\n   \n    </amexio-api-demo>\n    </amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/panes/steps/stepbox/stepbox.demo.ts":
/*!*****************************************************!*\
  !*** ./src/app/panes/steps/stepbox/stepbox.demo.ts ***!
  \*****************************************************/
/*! exports provided: StepBoxDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepBoxDemoComponent", function() { return StepBoxDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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



var StepBoxDemoComponent = /** @class */ (function () {
    function StepBoxDemoComponent(http) {
        this.http = http;
        this.clickMsgArray = [];
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
        this.user = false;
        this.shop = true;
        this.payment = false;
        this.confirmation = false;
    }
    StepBoxDemoComponent.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    StepBoxDemoComponent.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Step Box';
        this.customSourceData.description = 'Step-box component is an indicator for the steps in a workflow.';
        this.customSourceData.sourceMetadata.htmlUrl = 'layout/steps/steps.html';
        this.customSourceData.sourceMetadata.tsUrl = 'layout/steps/steps.text';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-stepbox?embed=1&file=app/panels/stepbox/stepbox.demo.html&view=editor';
    };
    // step box click event
    StepBoxDemoComponent.prototype.stepBlockClick = function (event) {
        if (event.label == "User") {
            this.showMsg("Step 1 User");
            this.updateFlag(true, false, false, false);
        }
        else if (event.label == "Shop") {
            this.showMsg("Step 2 Shop");
            this.updateFlag(false, true, false, false);
        }
        else if (event.label == "Payment") {
            this.showMsg("Step 3 Payment");
            this.updateFlag(false, false, true, false);
        }
        else if (event.label == "Confirmation") {
            this.showMsg("Step 4 Confirmation");
            this.updateFlag(false, false, false, true);
        }
    };
    StepBoxDemoComponent.prototype.updateFlag = function (user, shop, payment, confirmation) {
        this.user = user;
        this.shop = shop;
        this.payment = payment;
        this.confirmation = confirmation;
    };
    StepBoxDemoComponent.prototype.showMsg = function (msg) {
        if (this.clickMsgArray.length >= 1) {
            this.clickMsgArray = [];
            this.clickMsgArray.push(msg);
        }
        else {
            this.clickMsgArray.push(msg);
        }
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    StepBoxDemoComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push('Code Copied');
        }
        else {
            this.copyMsgArray.push('Code Copied');
        }
    };
    StepBoxDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'step-box',
            template: __webpack_require__(/*! ./stepbox.demo.html */ "./src/app/panes/steps/stepbox/stepbox.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StepBoxDemoComponent);
    return StepBoxDemoComponent;
}());



/***/ }),

/***/ "./src/app/panes/tab/basictab/tab.demo.html":
/*!**************************************************!*\
  !*** ./src/app/panes/tab/basictab/tab.demo.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/panels/tab.json'\">\n  <amexio-api-demo>\n    \n    <amexio-tab-view  [closable]=\"false\">\n      <amexio-tab title=\"Personal\" [active]=\"true\">\n         Personal \n        Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\n        when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n      </amexio-tab>\n      <amexio-tab title=\"Work\">\n         Work \n        Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi.\n        Nunc sit amet aliquet risus. Aenean placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque.\n        In non eleifend nisi. Phasellus tempor hendrerit posuere.\n        Praesent ornare rutrum mi et condimentum.\n      </amexio-tab>\n      <amexio-tab title=\"Notes\">\n         Notes \n        Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis dis parturient montes,\n        nascetur ridiculus mus. Aliquam erat volutpat.Sed viverra libero vel massa accumsan aliquet. Mauris a dui nec sapien\n        pretium euismod.\n      </amexio-tab>\n    </amexio-tab-view>\n\n    </amexio-api-demo>\n    </amexio-api-structure>"

/***/ }),

/***/ "./src/app/panes/tab/basictab/tab.demo.ts":
/*!************************************************!*\
  !*** ./src/app/panes/tab/basictab/tab.demo.ts ***!
  \************************************************/
/*! exports provided: TabDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabDemo", function() { return TabDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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



var TabDemo = /** @class */ (function () {
    function TabDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
    }
    TabDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    TabDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Basic Tab';
        this.customSourceData.description = 'Basic Tab component for Angular Apps with multiple configurations such as Tab, Icon support, Scrollable tabs, Closable tab, Vertical Tabs.';
        this.customSourceData.sourceMetadata.htmlUrl = 'layout/tab/basictab/layout.html';
        this.customSourceData.sourceMetadata.tsUrl = 'layout/tab/basictab/tab.text';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-tab-basic-bw4ppe?embed=1&file=src/app/basic/tab/tab.demo.component.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    TabDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    TabDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'basic-tab-demo',
            template: __webpack_require__(/*! ./tab.demo.html */ "./src/app/panes/tab/basictab/tab.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TabDemo);
    return TabDemo;
}());



/***/ }),

/***/ "./src/app/panes/tab/closabletab/closabletab.demo.html":
/*!*************************************************************!*\
  !*** ./src/app/panes/tab/closabletab/closabletab.demo.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/panels/tab.json'\">\n  <amexio-api-demo>\n    \n\n    <amexio-tab-view  [closable]=\"true\">\n      <amexio-tab title=\"Personal\" [active]=\"true\">\n         Personal \n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \n        when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n      </amexio-tab>\n      <amexio-tab title=\"Work\">\n         Work \n        Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. \n        Nunc sit amet aliquet risus. Aenean placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. \n        In non eleifend nisi. Phasellus tempor hendrerit posuere. \n        Praesent ornare rutrum mi et condimentum. \n      </amexio-tab>\n      <amexio-tab title=\"Notes\">\n         Notes \n        Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis dis parturient montes, \n        nascetur ridiculus mus. Aliquam erat volutpat.Sed viverra libero vel massa accumsan aliquet. Mauris a dui nec sapien\n        pretium euismod.    \n      </amexio-tab>\n    </amexio-tab-view>\n    \n    </amexio-api-demo>\n    </amexio-api-structure>\n\n\n"

/***/ }),

/***/ "./src/app/panes/tab/closabletab/closabletab.demo.ts":
/*!***********************************************************!*\
  !*** ./src/app/panes/tab/closabletab/closabletab.demo.ts ***!
  \***********************************************************/
/*! exports provided: ClosableTabDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClosableTabDemo", function() { return ClosableTabDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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



var ClosableTabDemo = /** @class */ (function () {
    function ClosableTabDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
    }
    ClosableTabDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    ClosableTabDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Closable Tab ';
        this.customSourceData.description = 'Closable Tab  component for Angular Apps with multiple configurations such as Tab, Icon support, Scrollable tabs, Closable tab, Vertical Tabs.';
        this.customSourceData.sourceMetadata.htmlUrl = 'layout/tab/closabletab/tab.html';
        this.customSourceData.sourceMetadata.tsUrl = 'layout/tab/closabletab/tab.text';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-tab-basic-bw4ppe?embed=1&file=src/app/basic/tab/tab.demo.component.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    ClosableTabDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    ClosableTabDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'closable-tab-demo',
            template: __webpack_require__(/*! ./closabletab.demo.html */ "./src/app/panes/tab/closabletab/closabletab.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ClosableTabDemo);
    return ClosableTabDemo;
}());



/***/ }),

/***/ "./src/app/panes/tab/enhancedtab/dynamictabdemo.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/panes/tab/enhancedtab/dynamictabdemo.component.ts ***!
  \*******************************************************************/
/*! exports provided: DyanmicTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DyanmicTabComponent", function() { return DyanmicTabComponent; });
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


var DyanmicTabComponent = /** @class */ (function () {
    function DyanmicTabComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DyanmicTabComponent.prototype, "content", void 0);
    DyanmicTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "dynamictab",
            template: "\n        Content : {{content}}\n    "
        })
    ], DyanmicTabComponent);
    return DyanmicTabComponent;
}());



/***/ }),

/***/ "./src/app/panes/tab/enhancedtab/enhancedtab.demo.html":
/*!*************************************************************!*\
  !*** ./src/app/panes/tab/enhancedtab/enhancedtab.demo.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/panels/tab.json'\">\n    <amexio-api-demo>\n\n        <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'right'\">\n            <amexio-header>\n                Tab layout with header and tabs right aligned\n            </amexio-header>\n            <amexio-body>\n                <amexio-tab-view header=\"Work Profile\" [tab-position]=\"'top'\" [header-align]=\"'right'\"\n                    [divide-header-equally]=false>\n                    <amexio-tab title=\"Person\" [active]=\"true\" [amexio-color]=\"'red'\">\n                        Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum\n                        has\n                        been the industry's standard\n                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it\n                        to\n                        make a\n                        type specimen book.\n                    </amexio-tab>\n                    <amexio-tab title=\"Work\" [amexio-color]=\"'blue'\">\n                        Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                        sit\n                        amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                        Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                </amexio-tab-view>\n            </amexio-body>\n        </amexio-card>\n\n        <br>\n\n        <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'right'\">\n            <amexio-header>\n                Tab layout with action component(Radio Group) and tabs left aligned\n            </amexio-header>\n            <amexio-body>\n                <amexio-tab-view [action]=\"true\" [closable]=\"false\" [tab-position]=\"'top'\" [header-align]=\"'left'\"\n                    [divide-header-equally]=false>\n                    <amexio-tab-action>\n                        <amexio-radio-group name=\"gender\" [data-reader]=\"'response.data'\" [display-field]=\"'gender'\"\n                            [value-field]=\"'genderId'\" [horizontal]=\"true\" [data]=\"radioGroupData\" [default-value]=\"'male'\">\n                        </amexio-radio-group>\n                    </amexio-tab-action>\n\n                    <amexio-tab title=\"Person\" [active]=\"true\" [amexio-color]=\"'red'\">\n                        Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum\n                        has\n                        been the industry's standard\n                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it\n                        to\n                        make a\n                        type specimen book.\n                    </amexio-tab>\n                    <amexio-tab title=\"Work\" [amexio-color]=\"'blue'\">\n                        Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                        sit\n                        amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                        Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                    <amexio-tab title=\"Profile\" [amexio-color]=\"'green'\">\n                        Profile Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum\n                        has\n                        been the industry's standard\n                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it\n                        to\n                        make a\n                        type specimen book.\n                    </amexio-tab>\n                    <amexio-tab title=\"Education\" [amexio-color]=\"'red'\">\n                        Education Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n                        Ipsum\n                        has been the industry's standard\n                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it\n                        to\n                        make a\n                        type specimen book.\n                    </amexio-tab>\n                </amexio-tab-view>\n            </amexio-body>\n        </amexio-card>\n\n        <br>\n\n        <amexio-card [header]=\"true\" [footer]=\"true\" [footer-align]=\"'left'\">\n            <amexio-header>\n                Tab layout with action component(button) and tabs left aligned\n            </amexio-header>\n            <amexio-body>\n\n                <amexio-tab-view #tab [closable]=\"false\" [action]=\"true\" [tab-position]=\"'top'\" [header-align]=\"'left'\">\n                    <amexio-tab-action>\n                        <amexio-button [label]=\"'Add Tab'\" [type]=\"'theme-color'\" (onClick)=\"addtab(tab)\" [tooltip]=\"'Add Tab'\">\n                        </amexio-button>\n                    </amexio-tab-action>\n                    <amexio-tab title=\"Person\" [active]=\"true\" [amexio-color]=\"'red'\" [closable]=\"true\">\n                        Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum\n                        has\n                        been the industry's standard\n                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it\n                        to\n                        make a\n                        type specimen book.\n                    </amexio-tab>\n                    <amexio-tab title=\"Work\" [amexio-color]=\"'red'\">\n                        Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                        sit\n                        amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                        Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                    <amexio-tab title=\"Profile\" [amexio-color]=\"'red'\">\n                        Profile Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi.\n                        Nunc\n                        sit amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                        Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                    <amexio-tab title=\"Education\" [amexio-color]=\"'red'\" [closable]=\"true\">\n                        Education Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi.\n                        Nunc\n                        sit amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                        Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                </amexio-tab-view>\n            </amexio-body>\n            <amexio-action>\n                <amexio-button [label]=\"'Close Tab'\" [type]=\"'theme-color'\" (onClick)=\"closeAllTabs(tab)\" [tooltip]=\"'Add Tab'\">\n                </amexio-button>\n                &nbsp;\n                <amexio-button [label]=\"'Active Number Tab'\" [type]=\"'theme-color'\" (onClick)=\"setActiveTabNumber(tab)\"\n                    [tooltip]=\"'Activate Tab'\">\n                </amexio-button>\n                &nbsp;\n                <amexio-button [label]=\"'Active Title Tab'\" [type]=\"'theme-color'\" (onClick)=\"setActiveTabTitle(tab)\"\n                    [tooltip]=\"'Activate Tab'\">\n                </amexio-button>\n                &nbsp;\n                <amexio-button [label]=\"'Close Other Tabs'\" [type]=\"'theme-color'\" (onClick)=\"closeOtherTabs(tab)\"\n                    [tooltip]=\"'Close Tab'\">\n                </amexio-button>\n            </amexio-action>\n        </amexio-card>\n        <br>\n        <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'right'\">\n            <amexio-header>\n                Tab layout with action component(Rating) and tabs right aligned\n            </amexio-header>\n            <amexio-body>\n                <amexio-tab-view [closable]=\"false\" [action]=\"true\" [tab-position]=\"'top'\" [header-align]=\"'right'\"\n                    [divide-header-equally]=false>\n                    <amexio-tab-action>\n                        <amexio-rating-input [(ngModel)]=\"rate\" [max]=\"max\" name=\"rate\" [read-only]=\"isReadonly\">\n                        </amexio-rating-input>\n                    </amexio-tab-action>\n                    <amexio-tab title=\"Person\" [active]=\"true\" [amexio-color]=\"'red'\">\n                        Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum\n                        has\n                        been the industry's standard\n                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it\n                        to\n                        make a\n                        type specimen book.\n                    </amexio-tab>\n                    <amexio-tab title=\"Work\" [amexio-color]=\"'blue'\">\n                        Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                        sit\n                        amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                        Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                    <amexio-tab title=\"Profile\" [amexio-color]=\"'green'\">\n                        Profile Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi.\n                        Nunc\n                        sit amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                        Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                    <amexio-tab title=\"Education\" [amexio-color]=\"'red'\">\n                        Education Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi.\n                        Nunc\n                        sit amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                        Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                </amexio-tab-view>\n            </amexio-body>\n\n        </amexio-card>\n\n        <br>\n\n        <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'right'\">\n            <amexio-header>\n                Tabs equally divided\n            </amexio-header>\n            <amexio-body>\n                <amexio-tab-view [closable]=\"false\" [tab-position]=\"'top'\" [header-align]=\"'right'\"\n                    [divide-header-equally]=true>\n\n                    <amexio-tab title=\"Person\" [active]=\"true\" [amexio-color]=\"'red'\">\n                        Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum\n                        has\n                        been the industry's standard\n                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it\n                        to\n                        make a\n                        type specimen book.\n                    </amexio-tab>\n                    <amexio-tab title=\"Work\" [amexio-color]=\"'blue'\">\n                        Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                        sit\n                        amet aliquet risus. Aenean\n                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it\n                        to\n                        make a\n                        type specimen book.\n                    </amexio-tab>\n                    <amexio-tab title=\"Address\" [amexio-color]=\"'green'\">\n                        Address Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi.\n                        Nunc\n                        sit amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                        Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                    <amexio-tab title=\"Profile\" [amexio-color]=\"'red'\">\n                        Profile Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi.\n                        Nunc\n                        sit amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                        Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                </amexio-tab-view>\n            </amexio-body>\n\n        </amexio-card>\n\n        <br>\n\n        <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'right'\">\n            <amexio-header>\n                Tab Layout with header and scrollable tabs\n            </amexio-header>\n            <amexio-body>\n                <amexio-tab-view [closable]=\"false\" header=\"Work Profile\" [tab-position]=\"'top'\" [header-align]=\"'right'\"\n                    [divide-header-equally]=false>\n\n                    <amexio-tab title=\"tab1\" [active]=\"true\" [amexio-color]=\"'red'\">\n                        Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum\n                        has\n                        been the industry's standard\n                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it\n                        to\n                        make a\n                        type specimen book.\n                    </amexio-tab>\n                    <amexio-tab title=\"tab2\" [amexio-color]=\"'blue'\">\n                        Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                        sit\n                        amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                        Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                    <amexio-tab title=\"tab3\" [amexio-color]=\"'green'\">\n                        Tab3 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                        sit\n                        amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                        Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                    <amexio-tab title=\"tab4\" [amexio-color]=\"'pink'\">\n                        Tab4 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                        sit\n                        amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                        Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                    <amexio-tab title=\"tab5\" [amexio-color]=\"'brown'\">\n                        Tab5 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                        sit\n                        amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                        Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                    <amexio-tab title=\"tab6\" [amexio-color]=\"'green'\">\n                        Tab6 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                        sit\n                        amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                        Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                    <amexio-tab title=\"tab7\" [amexio-color]=\"'red'\">\n                        Tab7 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                        sit\n                        amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                        Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                    <amexio-tab title=\"tab8\" [amexio-color]=\"'blue'\">\n                        Tab8 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                        sit\n                        amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                        Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                    <amexio-tab title=\"tab9\" [amexio-color]=\"'orange'\">\n                        Tab9 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                        sit\n                        amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                        Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                    <amexio-tab title=\"tab10\" [amexio-color]=\"'blue'\">\n                        Tab10 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                        sit\n                        amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                        Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                    <amexio-tab title=\"tab11\" [amexio-color]=\"'green'\">\n                        Tab11 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                        sit\n                        amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                        Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                    <amexio-tab title=\"tab12\" [amexio-color]=\"'red'\">\n                        Tab12 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                        sit\n                        amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                        Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                    <amexio-tab title=\"tab13\" [amexio-color]=\"'pink'\">\n                        Tab13 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                        sit\n                        amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                        Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                    <amexio-tab title=\"tab14\" [amexio-color]=\"'blue'\">\n                        Tab14 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                        sit\n                        amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                        Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                    <amexio-tab title=\"tab15\" [amexio-color]=\"'red'\">\n                        Tab15 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                        sit\n                        amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                        Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                    <amexio-tab title=\"tab16\" [amexio-color]=\"'green'\">\n                        Tab16 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                        sit\n                        amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                        Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                </amexio-tab-view>\n            </amexio-body>\n        </amexio-card>\n\n\n    </amexio-api-demo>\n</amexio-api-structure>"

/***/ }),

/***/ "./src/app/panes/tab/enhancedtab/enhancedtab.demo.ts":
/*!***********************************************************!*\
  !*** ./src/app/panes/tab/enhancedtab/enhancedtab.demo.ts ***!
  \***********************************************************/
/*! exports provided: EnhancedTabDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnhancedTabDemo", function() { return EnhancedTabDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dynamictabdemo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamictabdemo.component */ "./src/app/panes/tab/enhancedtab/dynamictabdemo.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
/**
 * Created by Rashmi on 30/4/18.
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




var EnhancedTabDemo = /** @class */ (function () {
    function EnhancedTabDemo(http) {
        this.http = http;
        this.rate = 7;
        this.max = 10;
        this.isReadonly = false;
        this.tabcount = 4;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_3__["ComponentDataStructure"]();
        this.tabArray = [
            "work"
        ];
        this.radioGroupData = {
            response: {
                data: [{
                        gender: 'Male', genderId: 'male'
                    }, {
                        gender: 'Female', genderId: 'female'
                    },]
            }
        };
    }
    EnhancedTabDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    EnhancedTabDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Enhanced Tab ';
        this.customSourceData.description = 'Enhanced Tab  component for Angular Apps with multiple configurations such as Tab, Icon support, Scrollable tabs, Closable tab, Vertical Tabs.';
        this.customSourceData.sourceMetadata.htmlUrl = 'layout/tab/enhancedtab/tab.html';
        this.customSourceData.sourceMetadata.tsUrl = 'layout/tab/enhancedtab/tab.text';
        this.customSourceData.sourceMetadata.dynamicUrl = 'layout/tab/enhancedtab/dynamictab.text';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-horizontal-enhanced-tab?embed=1&file=app/tabs/enhancedtab/enhancedtab.demo.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    EnhancedTabDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    EnhancedTabDemo.prototype.addtab = function (tab) {
        this.tabcount++;
        var title = 'Tab ' + this.tabcount;
        var cmp = tab.addDynamicTab(title, "red", true, _dynamictabdemo_component__WEBPACK_IMPORTED_MODULE_1__["DyanmicTabComponent"]);
        cmp.content = "Content of " + title;
    };
    //Method to close all tabs alltogether
    EnhancedTabDemo.prototype.closeAllTabs = function (tab) {
        tab.closeAllTabs();
    };
    //Method to set tab active on the basis of tab sequence.(2 is the tab position from left to right)
    EnhancedTabDemo.prototype.setActiveTabNumber = function (tab) {
        tab.setActiveTab(2);
    };
    //Method to set tab active on the basis of tab title.("profile" is the tab title)
    EnhancedTabDemo.prototype.setActiveTabTitle = function (tab) {
        tab.setActiveTab("profile");
    };
    //Method to close tabs and keep open some of the required tabs.
    EnhancedTabDemo.prototype.closeOtherTabs = function (tab) {
        tab.closeTabs(this.tabArray);
    };
    EnhancedTabDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'enhanced-tab-demo',
            template: __webpack_require__(/*! ./enhancedtab.demo.html */ "./src/app/panes/tab/enhancedtab/enhancedtab.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EnhancedTabDemo);
    return EnhancedTabDemo;
}());



/***/ }),

/***/ "./src/app/panes/tab/enhancedverticaltab/dynamicverticaltabdemo.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/panes/tab/enhancedverticaltab/dynamicverticaltabdemo.component.ts ***!
  \***********************************************************************************/
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

/***/ "./src/app/panes/tab/enhancedverticaltab/enhancedverticaltab.demo.html":
/*!*****************************************************************************!*\
  !*** ./src/app/panes/tab/enhancedverticaltab/enhancedverticaltab.demo.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/panels/verticaltableft.json'\">\n    <amexio-api-demo>\n\n\n        <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'right'\">\n            <amexio-header>\n                Tab layout with Color,Closable and Left Bottom aligned\n            </amexio-header>\n            <amexio-body>\n                <amexio-button [label]=\"'Add Tab'\" [type]=\"'theme-color'\" (onClick)=\"addtab(tab)\" [tooltip]=\"'Add Tab'\">\n                </amexio-button>\n                <amexio-vertical-tab-view #tab [closable]=\"true\" [tabPosition]=\"'bottom'\">\n                    <amexio-tab title=\"Personal\" [active]=\"true\" [amexio-color]=\"'red'\" [icon]=\"'fa fa-user-circle'\">\n                        Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry.</amexio-tab>\n                    <amexio-tab title=\"Work\" [amexio-color]=\"'blue'\" [icon]=\"'fa fa-building'\">\n                        Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                        sit amet aliquet risus.\n                    </amexio-tab>\n                    <amexio-tab title=\"Team\" [icon]=\"'fa fa-users'\">\n                        Team Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et\n                        magnis dis parturient montes,nascetur\n                        ridiculus mus.\n                    </amexio-tab>\n                    <amexio-tab title=\"Disabled\" [disabled]=true [icon]=\"'fa fa-snowflake'\">\n                        Team Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et\n                        magnis dis parturient montes,nascetur\n                        ridiculus mus.\n                    </amexio-tab>\n                </amexio-vertical-tab-view>\n            </amexio-body>\n        </amexio-card>\n        <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'right'\">\n            <amexio-header>\n                Tab layout Color,Closable and Right Bottom aligned\n            </amexio-header>\n            <amexio-body>\n                <amexio-button [label]=\"'Add Tab'\" [type]=\"'theme-color'\" (onClick)=\"addrighttab(tab1)\" [tooltip]=\"'Add Tab'\">\n                </amexio-button>\n                <amexio-right-vertical-tab-view #tab1 [closable]=\"true\" [tabPosition]=\"'bottom'\">\n\n                    <amexio-tab title=\"Personal\" [active]=\"true\" [amexio-color]=\"'red'\" [icon]=\"'fa fa-user-circle'\">\n                        Personal Lorem Ipsum is simply text of printing and typesetting industry.\n                    </amexio-tab>\n                    <amexio-tab title=\"Work\" [amexio-color]=\"'blue'\" [icon]=\"'fa fa-building'\">\n                        Work Nullam nec dolor lobortis, dictum ac, massa. Donec id suscipit.\n                    </amexio-tab>\n                    <amexio-tab title=\"Team\" [icon]=\"'fa fa-users'\">\n                        Team Phasellus in condimentum. In et sem. Orci varius penatibus.\n                    </amexio-tab>\n                    <amexio-tab title=\"Disabled\" [disabled]=true [icon]=\"'fa fa-snowflake'\">\n                        Team Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et\n                        magnis dis parturient montes,nascetur\n                        ridiculus mus.\n                    </amexio-tab>\n                </amexio-right-vertical-tab-view>\n            </amexio-body>\n        </amexio-card>\n\n\n    </amexio-api-demo>\n</amexio-api-structure>"

/***/ }),

/***/ "./src/app/panes/tab/enhancedverticaltab/enhancedverticaltab.demo.ts":
/*!***************************************************************************!*\
  !*** ./src/app/panes/tab/enhancedverticaltab/enhancedverticaltab.demo.ts ***!
  \***************************************************************************/
/*! exports provided: EnhancedVerticalTabDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnhancedVerticalTabDemo", function() { return EnhancedVerticalTabDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dynamicverticaltabdemo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamicverticaltabdemo.component */ "./src/app/panes/tab/enhancedverticaltab/dynamicverticaltabdemo.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_3__["ComponentDataStructure"]();
    }
    EnhancedVerticalTabDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    EnhancedVerticalTabDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Enhanced vertical Tab ';
        this.customSourceData.description = 'Enhanced vertical Tab  component for Angular Apps with multiple configurations such as Tab, Icon support, Scrollable tabs, Closable tab, Vertical Tabs.';
        this.customSourceData.sourceMetadata.htmlUrl = 'layout/tab/enhancedverticaltab/tab.html';
        this.customSourceData.sourceMetadata.tsUrl = 'layout/tab/enhancedverticaltab/dynamictab.text';
        this.customSourceData.sourceMetadata.dynamicUrl = 'layout/tab/enhancedverticaltab/tab.text';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-vertical-enhanced-tab1?embed=1&file=app/tabs/enhancedverticaltab/enhancedverticaltab.demo.html&view=editor';
    };
    EnhancedVerticalTabDemo.prototype.addtab = function (tab) {
        this.tabcountleft++;
        var title = 'Tab ' + this.tabcountleft;
        var cmp = tab.addDynamicTab(title, "red", true, _dynamicverticaltabdemo_component__WEBPACK_IMPORTED_MODULE_1__["DyanmicVerticalTabComponent"]);
        cmp.content = "Content of " + title;
    };
    EnhancedVerticalTabDemo.prototype.addrighttab = function (tab1) {
        this.tabcountright++;
        var title = 'Tab ' + this.tabcountright;
        var cmp = tab1.addDynamicTab(title, "red", true, _dynamicverticaltabdemo_component__WEBPACK_IMPORTED_MODULE_1__["DyanmicVerticalTabComponent"]);
        cmp.content = "Content of " + title;
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
            template: __webpack_require__(/*! ./enhancedverticaltab.demo.html */ "./src/app/panes/tab/enhancedverticaltab/enhancedverticaltab.demo.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EnhancedVerticalTabDemo);
    return EnhancedVerticalTabDemo;
}());



/***/ }),

/***/ "./src/app/panes/tab/iconwithtab/iconwithtab.demo.html":
/*!*************************************************************!*\
  !*** ./src/app/panes/tab/iconwithtab/iconwithtab.demo.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/panels/tab.json'\">\n  <amexio-api-demo>\n  \n  \n  <amexio-tab-view  [closable]=\"false\">\n      <amexio-tab title=\"Personal\" [active]=\"true\"  [icon]=\"'fa fa-user-circle'\">\n         Personal \n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \n        when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n      </amexio-tab>\n      <amexio-tab title=\"Work\" [icon]=\"'fa fa-building'\">\n         Work \n        Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. \n        Nunc sit amet aliquet risus. Aenean placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. \n        In non eleifend nisi. Phasellus tempor hendrerit posuere. \n        Praesent ornare rutrum mi et condimentum. \n      </amexio-tab>\n      <amexio-tab title=\"Team\" [icon]=\"'fa fa-users'\">\n         Team \n        Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis dis parturient montes, \n        nascetur ridiculus mus. Aliquam erat volutpat.Sed viverra libero vel massa accumsan aliquet. Mauris a dui nec sapien\n        pretium euismod.    \n      </amexio-tab>\n      <amexio-tab title=\"Disabled\" [disabled]= true [icon]=\"'fa fa-snowflake'\">\n      Team \n     Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis \n     dis parturient montes,nascetur ridiculus mus. \n   </amexio-tab>\n    </amexio-tab-view>\n\n    </amexio-api-demo>\n    </amexio-api-structure>"

/***/ }),

/***/ "./src/app/panes/tab/iconwithtab/iconwithtab.demo.ts":
/*!***********************************************************!*\
  !*** ./src/app/panes/tab/iconwithtab/iconwithtab.demo.ts ***!
  \***********************************************************/
/*! exports provided: IconWithTabDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconWithTabDemo", function() { return IconWithTabDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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



var IconWithTabDemo = /** @class */ (function () {
    function IconWithTabDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
    }
    IconWithTabDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    IconWithTabDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Icon With Tab ';
        this.customSourceData.description = 'Icon With Tab  component for Angular Apps with multiple configurations such as Tab, Icon support, Scrollable tabs, Closable tab, Vertical Tabs.';
        this.customSourceData.sourceMetadata.htmlUrl = 'layout/tab/iconwithtab/tab.html';
        this.customSourceData.sourceMetadata.tsUrl = 'layout/tab/iconwithtab/tab.text';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-horizontal-tabwithicon?embed=1&file=app/tabs/tabwithicon/tabwithicon.demo.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    IconWithTabDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    IconWithTabDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'icon-tab-demo',
            template: __webpack_require__(/*! ./iconwithtab.demo.html */ "./src/app/panes/tab/iconwithtab/iconwithtab.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IconWithTabDemo);
    return IconWithTabDemo;
}());



/***/ }),

/***/ "./src/app/panes/tab/scrollabletab/scrollabletab.demo.html":
/*!*****************************************************************!*\
  !*** ./src/app/panes/tab/scrollabletab/scrollabletab.demo.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/panels/tab.json'\">\n    <amexio-api-demo>\n\n<amexio-tab-view [closable]=\"true\">\n            <amexio-tab [title]=\"'Tab 1'\" [active]=\"true\">\n                <amexio-label [size]=\"'medium'\">Tab 1</amexio-label>\n            </amexio-tab>\n            <amexio-tab [title]=\"'Tab 2'\">\n                <amexio-label [size]=\"'medium'\">Tab 2</amexio-label>\n            </amexio-tab>\n            <amexio-tab [title]=\"'Tab 3'\">\n                <amexio-label [size]=\"'medium'\">Tab 3</amexio-label>\n            </amexio-tab>\n            <amexio-tab [title]=\"'Tab 4'\">\n                <amexio-label [size]=\"'medium'\">Tab 4</amexio-label>\n            </amexio-tab>\n            <amexio-tab [title]=\"'Tab 5'\">\n                <amexio-label [size]=\"'medium'\">Tab 5</amexio-label>\n            </amexio-tab>\n            <amexio-tab [title]=\"'Tab 6'\">\n                <amexio-label [size]=\"'medium'\">Tab 6</amexio-label>\n            </amexio-tab>\n            <amexio-tab [title]=\"'Tab 7'\">\n                <amexio-label [size]=\"'medium'\">Tab 7</amexio-label>\n            </amexio-tab>\n            <amexio-tab [title]=\"'Tab 8'\">\n\n                <amexio-label [size]=\"'medium'\">Tab 8</amexio-label>\n            </amexio-tab>\n            <amexio-tab [title]=\"'Tab 9'\">\n                <amexio-label [size]=\"'medium'\">Tab 9</amexio-label>\n            </amexio-tab>\n            <amexio-tab [title]=\"'Tab 10'\">\n                <amexio-label [size]=\"'medium'\">Tab 10</amexio-label>\n\n            </amexio-tab>\n            <amexio-tab [title]=\"'Tab 11'\">\n                <amexio-label [size]=\"'medium'\">Tab 11</amexio-label>\n            </amexio-tab>\n            <amexio-tab [title]=\"'Tab 12'\">\n                <amexio-label [size]=\"'medium'\">Tab 12</amexio-label>\n            </amexio-tab>\n            <amexio-tab [title]=\"'Tab 13'\">\n                <amexio-label [size]=\"'medium'\">Tab 13</amexio-label>\n            </amexio-tab>\n            <amexio-tab [title]=\"'Tab 14'\">\n                <amexio-label [size]=\"'medium'\">Tab 14</amexio-label>\n            </amexio-tab>\n            <amexio-tab [title]=\"'Tab 15'\">\n                <amexio-label [size]=\"'medium'\">Tab 15</amexio-label>\n            </amexio-tab>\n            <amexio-tab [title]=\"'Tab 16'\">\n                <amexio-label [size]=\"'medium'\">Tab 16</amexio-label>\n            </amexio-tab>\n            <amexio-tab [title]=\"'Tab 17'\">\n                <amexio-label [size]=\"'medium'\">Tab 17</amexio-label>\n            </amexio-tab>\n            <amexio-tab [title]=\"'Tab 18'\">\n                <amexio-label [size]=\"'medium'\">Tab 18</amexio-label>\n            </amexio-tab>\n        </amexio-tab-view>\n\n\n        </amexio-api-demo>\n        </amexio-api-structure>"

/***/ }),

/***/ "./src/app/panes/tab/scrollabletab/scrollabletab.demo.ts":
/*!***************************************************************!*\
  !*** ./src/app/panes/tab/scrollabletab/scrollabletab.demo.ts ***!
  \***************************************************************/
/*! exports provided: ScrollableTabDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollableTabDemo", function() { return ScrollableTabDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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



var ScrollableTabDemo = /** @class */ (function () {
    function ScrollableTabDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
    }
    ScrollableTabDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    ScrollableTabDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Scrollable Tab ';
        this.customSourceData.description = 'Scrollable Tab  component for Angular Apps with multiple configurations such as Tab, Icon support, Scrollable tabs, Closable tab, Vertical Tabs.';
        this.customSourceData.sourceMetadata.htmlUrl = 'layout/tab/scrollabletab/tab.html';
        this.customSourceData.sourceMetadata.tsUrl = 'layout/tab/scrollabletab/tab.text';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-tab-basic-bw4ppe?embed=1&file=src/app/basic/tab/tab.demo.component.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    ScrollableTabDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    ScrollableTabDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'scrollable-tab-demo',
            template: __webpack_require__(/*! ./scrollabletab.demo.html */ "./src/app/panes/tab/scrollabletab/scrollabletab.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ScrollableTabDemo);
    return ScrollableTabDemo;
}());



/***/ }),

/***/ "./src/app/panes/tab/verticalrighttab/verticalrighttab.demo.html":
/*!***********************************************************************!*\
  !*** ./src/app/panes/tab/verticalrighttab/verticalrighttab.demo.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \n<amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/panels/verticaltabright.json'\">\n  <amexio-api-demo>\n\n  <amexio-right-vertical-tab-view>\n      <amexio-tab title=\"Personal\" [active]=\"true\"  [icon]=\"'fa fa-user-circle'\">\n         Personal \n        Lorem Ipsum is simply text of printing and typesetting industry. \n      </amexio-tab>\n      <amexio-tab title=\"Work\" [icon]=\"'fa fa-building'\">\n         Work \n        Nullam nec dolor lobortis, dictum ac, massa. Donec id suscipit.\n      </amexio-tab>\n      <amexio-tab title=\"Team\" [icon]=\"'fa fa-users'\">\n         Team \n        Phasellus in condimentum. In et sem. Orci   varius penatibus.\n      </amexio-tab>\n      <amexio-tab title=\"Disabled\" [disabled]= true [icon]=\"'fa fa-snowflake'\">\n      Team \n     Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis \n     dis parturient montes,nascetur ridiculus mus. \n   </amexio-tab>\n    </amexio-right-vertical-tab-view>\n    </amexio-api-demo>\n    </amexio-api-structure>\n\n    "

/***/ }),

/***/ "./src/app/panes/tab/verticalrighttab/verticalrighttab.demo.ts":
/*!*********************************************************************!*\
  !*** ./src/app/panes/tab/verticalrighttab/verticalrighttab.demo.ts ***!
  \*********************************************************************/
/*! exports provided: VerticalRightTabDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalRightTabDemo", function() { return VerticalRightTabDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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



var VerticalRightTabDemo = /** @class */ (function () {
    function VerticalRightTabDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
    }
    VerticalRightTabDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    VerticalRightTabDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Right Aligned vertical Tab ';
        this.customSourceData.description = ' Vertical Right Tab  component for Angular Apps with multiple configurations such as Tab, Icon support, Scrollable tabs, Closable tab, Vertical Tabs.';
        this.customSourceData.sourceMetadata.htmlUrl = 'layout/tab/verticalrighttab/tab.html';
        this.customSourceData.sourceMetadata.tsUrl = 'layout/tab/verticalrighttab/tab.text';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-right-aligned-vertical-tab?embed=1&file=app/tabs/rightverticaltab/rightverticaltab.demo.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    VerticalRightTabDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    VerticalRightTabDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'verticalright-tab-demo',
            template: __webpack_require__(/*! ./verticalrighttab.demo.html */ "./src/app/panes/tab/verticalrighttab/verticalrighttab.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], VerticalRightTabDemo);
    return VerticalRightTabDemo;
}());



/***/ }),

/***/ "./src/app/panes/tab/verticaltab/verticaltab.demo.html":
/*!*************************************************************!*\
  !*** ./src/app/panes/tab/verticaltab/verticaltab.demo.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/panels/verticaltableft.json'\">\n  <amexio-api-demo>\n \n <amexio-vertical-tab-view >\n    <amexio-tab title=\"Personal\" [active]=\"true\"  [icon]=\"'fa fa-user-circle'\">\n       Personal \n      Lorem Ipsum is simply dummy text of the printing and typesetting industry.</amexio-tab>\n    <amexio-tab title=\"Work\" [icon]=\"'fa fa-building'\">\n       Work \n      Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. \n      Nunc sit amet aliquet risus.\n    </amexio-tab>\n    <amexio-tab title=\"Team\" [icon]=\"'fa fa-users'\">\n       Team \n      Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis \n      dis parturient montes,nascetur ridiculus mus. \n    </amexio-tab>\n    <amexio-tab title=\"Disabled\" [disabled]= true [icon]=\"'fa fa-snowflake'\">\n    Team \n   Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis \n   dis parturient montes,nascetur ridiculus mus. \n </amexio-tab>\n  </amexio-vertical-tab-view>\n  </amexio-api-demo>\n  </amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/panes/tab/verticaltab/verticaltab.demo.ts":
/*!***********************************************************!*\
  !*** ./src/app/panes/tab/verticaltab/verticaltab.demo.ts ***!
  \***********************************************************/
/*! exports provided: VerticalTabDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalTabDemo", function() { return VerticalTabDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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



var VerticalTabDemo = /** @class */ (function () {
    function VerticalTabDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
    }
    VerticalTabDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    VerticalTabDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Left Aligned Vertical Tab ';
        this.customSourceData.description = ' Vertical Left Tab  component for Angular Apps with multiple configurations such as Tab, Icon support, Scrollable tabs, Closable tab, Vertical Tabs.';
        this.customSourceData.sourceMetadata.htmlUrl = 'layout/tab/verticaltab/tab.html';
        this.customSourceData.sourceMetadata.tsUrl = 'layout/tab/verticaltab/tab.text';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-right-aligned-vertical-tab?embed=1&file=app/tabs/rightverticaltab/rightverticaltab.demo.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    VerticalTabDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    VerticalTabDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vertical-tab-demo',
            template: __webpack_require__(/*! ./verticaltab.demo.html */ "./src/app/panes/tab/verticaltab/verticaltab.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], VerticalTabDemo);
    return VerticalTabDemo;
}());



/***/ }),

/***/ "./src/app/panes/window/window.demo.component.html":
/*!*********************************************************!*\
  !*** ./src/app/panes/window/window.demo.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n \n <amexio-api-structure  [url]=\"'assets/componentjson/panels/window.json'\">\n  <amexio-api-demo>  \n    \n \n <amexio-card [header]=\"true\">\n      <amexio-header> Material Pattern</amexio-header>\n      <amexio-body>\n    <amexio-row>\n\n\n\n      <amexio-column [size]=\"4\">\n        <amexio-button type=\"success\"\n                       (onClick)=\"toggleBasicWindow('material')\"\n                       label=\"Basic Window\"></amexio-button>\n        <amexio-window\n          [body-height]=\"40\"\n          [(show)]=\"showBasicWindowMaterial\"\n          [close-on-escape]=\"true\"\n          [material-design]=\"true\"\n          [width]=\"'auto'\"\n          [footer]=\"true\">\n          <amexio-header>\n            Employee Form\n          </amexio-header>\n          <amexio-body>\n            <amexio-row>\n              <amexio-column [size]=\"6\">\n                <amexio-text-input [field-label]=\"'Name'\" name=\"country\"\n                                   [place-holder]=\"'Enter name'\"\n                                   [enable-popover]=\"true\"\n\n                                   [icon-feedback]=\"true\"\n                                   [allow-blank]=\"false\" [error-msg]=\"'Please enter name'\"\n                                   [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Name should be minimum 3 characters'\"\n                                   [max-error-msg]=\"'Name should be less than 15 characters'\"\n                >\n                </amexio-text-input>\n              </amexio-column>\n              <amexio-column [size]=\"6\">\n                <amexio-text-input [field-label]=\"'Surname'\" name=\"name\"\n                                   [place-holder]=\"'Enter surname'\"\n                                   [enable-popover]=\"true\"\n                                   [icon-feedback]=\"true\"\n                                   [allow-blank]=\"false\" [error-msg]=\"'Please enter Surname'\"\n                                   [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Surname should be minimum 3 characters'\"\n                                   [max-error-msg]=\"'Surname should be less than 15 characters'\"\n                >\n                </amexio-text-input>\n              </amexio-column>\n            </amexio-row>\n\n            <amexio-row>\n              <amexio-column [size]=\"6\">\n                <amexio-text-input [field-label]=\"'Description'\" name=\"country\"\n                                   [place-holder]=\"'Description'\"\n                                   [enable-popover]=\"true\"\n                                   [icon-feedback]=\"true\"\n                                   [allow-blank]=\"false\" [error-msg]=\"'Please enter name'\"\n                                   [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Name should be minimum 3 characters'\"\n                                   [max-error-msg]=\"'Name should be less than 15 characters'\"\n                >\n                </amexio-text-input>\n              </amexio-column>\n              <amexio-column [size]=\"6\">\n                <amexio-text-input [field-label]=\"'Hobbies'\" name=\"name\"\n                                   [place-holder]=\"'Hobbies'\"\n                                   [enable-popover]=\"true\"\n                                   [icon-feedback]=\"true\"\n                                   [allow-blank]=\"false\" [error-msg]=\"'Please enter Surname'\"\n                                   [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Surname should be minimum 3 characters'\"\n                                   [max-error-msg]=\"'Surname should be less than 15 characters'\"\n                >\n                </amexio-text-input>\n              </amexio-column>\n            </amexio-row>\n\n            <amexio-row>\n              <amexio-column [size]=\"6\">\n\n                <amexio-textarea-input [field-label]=\"'Address'\" name=\"Address\"\n                                       [place-holder]=\"'Enter address'\"\n                                       [error-msg]=\"'Please enter address'\"\n                                       [icon-feedback]=\"true\"\n                                       [rows]=\"'1'\" [columns]=\"'2'\"\n                                       [allow-blank]=\"false\" [enable-popover]=\"true\"\n\n                >\n                </amexio-textarea-input>\n\n\n              </amexio-column>\n\n            </amexio-row>\n\n\n            <amexio-row>\n              <amexio-column [size]=\"6\">\n                <amexio-text-input [field-label]=\"'Phone'\" name=\"country\"\n                                   [place-holder]=\"'Phone'\"\n                                   [enable-popover]=\"true\"\n                                   [icon-feedback]=\"true\"\n                                   [allow-blank]=\"false\" [error-msg]=\"'Please enter name'\"\n                                   [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Name should be minimum 3 characters'\"\n                                   [max-error-msg]=\"'Name should be less than 15 characters'\"\n                >\n                </amexio-text-input>\n              </amexio-column>\n              <amexio-column [size]=\"6\">\n                <amexio-text-input [field-label]=\"'Email'\" name=\"name\"\n                                   [place-holder]=\"'Email'\"\n                                   [enable-popover]=\"true\"\n                                   [icon-feedback]=\"true\"\n                                   [allow-blank]=\"false\" [error-msg]=\"'Please enter Surname'\"\n                                   [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Surname should be minimum 3 characters'\"\n                                   [max-error-msg]=\"'Surname should be less than 15 characters'\"\n                >\n                </amexio-text-input>\n              </amexio-column>\n            </amexio-row>\n\n          </amexio-body>\n          <amexio-action>\n            <amexio-button [type]= \"'default'\"(onClick)=\"showBasicWindowMaterial = false\" label=\"Cancel\"></amexio-button>\n              <amexio-button [type]=\"'theme-color'\" (onClick)=\"showBasicWindowMaterial = false\" label=\"Save\"></amexio-button>\n          </amexio-action>\n\n        </amexio-window>\n        <amexio-row>\n          <amexio-column [size]=\"'12'\">\n            <amexio-label>\n              (Horizontal and Vertical positioning enabled)\n            </amexio-label>\n          </amexio-column>\n        </amexio-row>\n      </amexio-column>\n      <amexio-column [size]=\"4\">\n        <amexio-button type=\"warning\" (onClick)=\"toggleMaxWindow('material')\" label=\"Maximizable Window\"></amexio-button>\n        <amexio-window  [(show)]=\"showMaxWindowMaterial\"\n                        [footer]=\"true\"\n                        [material-design]=\"true\"\n                        [maximize]=\"true\">\n          <amexio-header>\n            Employee Form\n          </amexio-header>\n          <amexio-body>\n            <amexio-row>\n              <amexio-column [size]=\"6\">\n                <amexio-text-input [field-label]=\"'Name'\" name=\"country\"\n                                   [place-holder]=\"'Enter name'\"\n                                   [enable-popover]=\"true\"\n                                   [icon-feedback]=\"true\"\n                                   [allow-blank]=\"false\" [error-msg]=\"'Please enter name'\"\n                                   [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Name should be minimum 3 characters'\"\n                                   [max-error-msg]=\"'Name should be less than 15 characters'\"\n                >\n                </amexio-text-input>\n              </amexio-column>\n              <amexio-column [size]=\"6\">\n                <amexio-text-input [field-label]=\"'Surname'\" name=\"name\"\n                                   [place-holder]=\"'Enter surname'\"\n                                   [enable-popover]=\"true\"\n                                   [icon-feedback]=\"true\"\n                                   [allow-blank]=\"false\" [error-msg]=\"'Please enter Surname'\"\n                                   [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Surname should be minimum 3 characters'\"\n                                   [max-error-msg]=\"'Surname should be less than 15 characters'\"\n                >\n                </amexio-text-input>\n              </amexio-column>\n            </amexio-row>\n            <amexio-row>\n              <amexio-column [size]=\"6\">\n\n                <amexio-textarea-input [field-label]=\"'Address'\" name=\"Address\"\n                                       [place-holder]=\"'Enter address'\"\n                                       [error-msg]=\"'Please enter address'\"\n                                       [icon-feedback]=\"true\"\n                                       [rows]=\"'1'\" [columns]=\"'2'\"\n                                       [allow-blank]=\"false\" [enable-popover]=\"true\"\n\n                >\n                </amexio-textarea-input>\n\n\n              </amexio-column>\n\n            </amexio-row>\n          </amexio-body>\n          <amexio-action>\n            <amexio-button (onClick)=\"showMaxWindowMaterial = false\" label=\"Close\"></amexio-button>\n          </amexio-action>\n\n        </amexio-window>\n      </amexio-column>\n      <amexio-column [size]=\"4\">\n        <amexio-button type=\"red\" (onClick)=\"toggleClosable('material')\" label=\"Closable Window\"></amexio-button>\n        <amexio-window   [(show)]=\"showClosableMaterial\"\n                         [close-on-escape]=\"false\"\n                         [material-design]=\"true\"\n                         [closable]=\"true\"  >\n          <amexio-header>\n            Employee Form\n          </amexio-header>\n          <amexio-body>\n            <amexio-row>\n              <amexio-column [size]=\"6\">\n                <amexio-text-input [field-label]=\"'Name'\" name=\"country\"\n                                   [place-holder]=\"'Enter name'\"\n                                   [enable-popover]=\"true\"\n                                   [icon-feedback]=\"true\"\n                                   [allow-blank]=\"false\" [error-msg]=\"'Please enter name'\"\n                                   [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Name should be minimum 3 characters'\"\n                                   [max-error-msg]=\"'Name should be less than 15 characters'\"\n                >\n                </amexio-text-input>\n              </amexio-column>\n              <amexio-column [size]=\"6\">\n                <amexio-text-input [field-label]=\"'Surname'\" name=\"name\"\n                                   [place-holder]=\"'Enter surname'\"\n                                   [enable-popover]=\"true\"\n                                   [icon-feedback]=\"true\"\n                                   [allow-blank]=\"false\" [error-msg]=\"'Please enter Surname'\"\n                                   [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Surname should be minimum 3 characters'\"\n                                   [max-error-msg]=\"'Surname should be less than 15 characters'\"\n                >\n                </amexio-text-input>\n              </amexio-column>\n            </amexio-row>\n            <amexio-row>\n              <amexio-column [size]=\"6\">\n                <amexio-textarea-input [field-label]=\"'Address'\" name=\"Address\"\n                                       [place-holder]=\"'Enter address'\"\n                                       [error-msg]=\"'Please enter address'\"\n                                       [icon-feedback]=\"true\"\n                                       [rows]=\"'1'\" [columns]=\"'2'\"\n                                       [allow-blank]=\"false\" [enable-popover]=\"true\"\n                >\n                </amexio-textarea-input>\n              </amexio-column>\n            </amexio-row>\n          </amexio-body>\n        </amexio-window>\n        <amexio-row>\n          <amexio-column [size]=\"'12'\">\n            <amexio-label size=\"small\">\n              (Escape functionality disabled)\n            </amexio-label>\n          </amexio-column>\n        </amexio-row>\n      </amexio-column>\n\n    </amexio-row>\n      </amexio-body>\n    </amexio-card>\n\n    <amexio-card [header]=\"true\">\n      <amexio-header>Non Material Pattern </amexio-header>\n      <amexio-body>\n      <amexio-row>\n\n        <amexio-column [size]=\"4\">\n          <amexio-button type=\"success\"\n                         (onClick)=\"toggleBasicWindow('nonmaterial')\"\n                         label=\"Basic Window\"></amexio-button>\n          <amexio-window\n            [body-height]=\"40\"\n            [(show)]=\"showBasicWindowNonMaterial\"\n            [close-on-escape]=\"true\"\n            [material-design]=\"false\"\n            [footer]=\"true\"\n            [width]=\"'auto'\">\n            <amexio-header>\n               Employee Form\n            </amexio-header>\n            <amexio-body>\n              <amexio-row>\n                <amexio-column [size]=\"6\">\n                  <amexio-text-input [field-label]=\"'Name'\" name=\"country\"\n                                     [place-holder]=\"'Enter name'\"\n                                     [enable-popover]=\"true\"\n\n                                     [icon-feedback]=\"true\"\n                                     [allow-blank]=\"false\" [error-msg]=\"'Please enter name'\"\n                                     [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Name should be minimum 3 characters'\"\n                                     [max-error-msg]=\"'Name should be less than 15 characters'\"\n                  >\n                  </amexio-text-input>\n                </amexio-column>\n                <amexio-column [size]=\"6\">\n                  <amexio-text-input [field-label]=\"'Surname'\" name=\"name\"\n                                     [place-holder]=\"'Enter surname'\"\n                                     [enable-popover]=\"true\"\n                                     [icon-feedback]=\"true\"\n                                     [allow-blank]=\"false\" [error-msg]=\"'Please enter Surname'\"\n                                     [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Surname should be minimum 3 characters'\"\n                                     [max-error-msg]=\"'Surname should be less than 15 characters'\"\n                  >\n                  </amexio-text-input>\n                </amexio-column>\n              </amexio-row>\n\n              <amexio-row>\n                <amexio-column [size]=\"6\">\n                  <amexio-text-input [field-label]=\"'Description'\" name=\"country\"\n                                     [place-holder]=\"'Description'\"\n                                     [enable-popover]=\"true\"\n                                     [icon-feedback]=\"true\"\n                                     [allow-blank]=\"false\" [error-msg]=\"'Please enter name'\"\n                                     [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Name should be minimum 3 characters'\"\n                                     [max-error-msg]=\"'Name should be less than 15 characters'\"\n                  >\n                  </amexio-text-input>\n                </amexio-column>\n                <amexio-column [size]=\"6\">\n                  <amexio-text-input [field-label]=\"'Hobbies'\" name=\"name\"\n                                     [place-holder]=\"'Hobbies'\"\n                                     [enable-popover]=\"true\"\n                                     [icon-feedback]=\"true\"\n                                     [allow-blank]=\"false\" [error-msg]=\"'Please enter Surname'\"\n                                     [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Surname should be minimum 3 characters'\"\n                                     [max-error-msg]=\"'Surname should be less than 15 characters'\"\n                  >\n                  </amexio-text-input>\n                </amexio-column>\n              </amexio-row>\n\n              <amexio-row>\n                <amexio-column [size]=\"6\">\n\n                  <amexio-textarea-input [field-label]=\"'Address'\" name=\"Address\"\n                                         [place-holder]=\"'Enter address'\"\n                                         [error-msg]=\"'Please enter address'\"\n                                         [icon-feedback]=\"true\"\n                                         [rows]=\"'1'\" [columns]=\"'2'\"\n                                         [allow-blank]=\"false\" [enable-popover]=\"true\"\n\n                  >\n                  </amexio-textarea-input>\n\n\n                </amexio-column>\n\n              </amexio-row>\n\n\n              <amexio-row>\n                <amexio-column [size]=\"6\">\n                  <amexio-text-input [field-label]=\"'Phone'\" name=\"country\"\n                                     [place-holder]=\"'Phone'\"\n                                     [enable-popover]=\"true\"\n                                     [icon-feedback]=\"true\"\n                                     [allow-blank]=\"false\" [error-msg]=\"'Please enter name'\"\n                                     [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Name should be minimum 3 characters'\"\n                                     [max-error-msg]=\"'Name should be less than 15 characters'\"\n                  >\n                  </amexio-text-input>\n                </amexio-column>\n                <amexio-column [size]=\"6\">\n                  <amexio-text-input [field-label]=\"'Email'\" name=\"name\"\n                                     [place-holder]=\"'Email'\"\n                                     [enable-popover]=\"true\"\n                                     [icon-feedback]=\"true\"\n                                     [allow-blank]=\"false\" [error-msg]=\"'Please enter Surname'\"\n                                     [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Surname should be minimum 3 characters'\"\n                                     [max-error-msg]=\"'Surname should be less than 15 characters'\"\n                  >\n                  </amexio-text-input>\n                </amexio-column>\n              </amexio-row>\n\n            </amexio-body>\n            <amexio-action>\n              <amexio-button [type]= \"'default'\"(onClick)=\"showBasicWindowNonMaterial = false\" label=\"Cancel\"></amexio-button>\n              <amexio-button [type]=\"'theme-color'\" (onClick)=\"showBasicWindowNonMaterial = false\" label=\"Save\"></amexio-button>\n            </amexio-action>\n\n          </amexio-window>\n          <amexio-row>\n            <amexio-column [size]=\"'12'\">\n              <amexio-label>\n                (Horizontal and Vertical positioning enabled)\n              </amexio-label>\n            </amexio-column>\n          </amexio-row>\n        </amexio-column>\n        <amexio-column [size]=\"4\">\n          <amexio-button type=\"warning\" (onClick)=\"toggleMaxWindow('nonmaterial')\" label=\"Maximizable Window\"></amexio-button>\n          <amexio-window  [(show)]=\"showMaxWindowNonMaterial\"\n                          [footer]=\"true\"\n                          [material-design]=\"false\"\n\n                          [maximize]=\"true\">\n            <amexio-header>\n              Employee Form\n            </amexio-header>\n            <amexio-body>\n              <amexio-row>\n                <amexio-column [size]=\"6\">\n                  <amexio-text-input [field-label]=\"'Name'\" name=\"country\"\n                                     [place-holder]=\"'Enter name'\"\n                                     [enable-popover]=\"true\"\n                                     [icon-feedback]=\"true\"\n                                     [allow-blank]=\"false\" [error-msg]=\"'Please enter name'\"\n                                     [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Name should be minimum 3 characters'\"\n                                     [max-error-msg]=\"'Name should be less than 15 characters'\"\n                  >\n                  </amexio-text-input>\n                </amexio-column>\n                <amexio-column [size]=\"6\">\n                  <amexio-text-input [field-label]=\"'Surname'\" name=\"name\"\n                                     [place-holder]=\"'Enter surname'\"\n                                     [enable-popover]=\"true\"\n                                     [icon-feedback]=\"true\"\n                                     [allow-blank]=\"false\" [error-msg]=\"'Please enter Surname'\"\n                                     [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Surname should be minimum 3 characters'\"\n                                     [max-error-msg]=\"'Surname should be less than 15 characters'\"\n                  >\n                  </amexio-text-input>\n                </amexio-column>\n              </amexio-row>\n              <amexio-row>\n                <amexio-column [size]=\"6\">\n\n                  <amexio-textarea-input [field-label]=\"'Address'\" name=\"Address\"\n                                         [place-holder]=\"'Enter address'\"\n                                         [error-msg]=\"'Please enter address'\"\n                                         [icon-feedback]=\"true\"\n                                         [rows]=\"'1'\" [columns]=\"'2'\"\n                                         [allow-blank]=\"false\" [enable-popover]=\"true\"\n\n                  >\n                  </amexio-textarea-input>\n\n\n                </amexio-column>\n\n              </amexio-row>\n            </amexio-body>\n            <amexio-action>\n              <amexio-button (onClick)=\"showMaxWindowNonMaterial = false\" label=\"Close\"></amexio-button>\n            </amexio-action>\n\n          </amexio-window>\n        </amexio-column>\n        <amexio-column [size]=\"4\">\n          <amexio-button type=\"red\" (onClick)=\"toggleClosable('nonmaterial')\" label=\"Closable Window\"></amexio-button>\n          <amexio-window   [(show)]=\"showClosableNonMaterial\"\n                           [close-on-escape]=\"false\"\n                           [material-design]=\"false\"\n                           [closable]=\"true\">\n            <amexio-header>\n              Employee Form\n            </amexio-header>\n            <amexio-body>\n              <amexio-row>\n                <amexio-column [size]=\"6\">\n                  <amexio-text-input [field-label]=\"'Name'\" name=\"country\"\n                                     [place-holder]=\"'Enter name'\"\n                                     [enable-popover]=\"true\"\n                                     [icon-feedback]=\"true\"\n                                     [allow-blank]=\"false\" [error-msg]=\"'Please enter name'\"\n                                     [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Name should be minimum 3 characters'\"\n                                     [max-error-msg]=\"'Name should be less than 15 characters'\"\n                  >\n                  </amexio-text-input>\n                </amexio-column>\n                <amexio-column [size]=\"6\">\n                  <amexio-text-input [field-label]=\"'Surname'\" name=\"name\"\n                                     [place-holder]=\"'Enter surname'\"\n                                     [enable-popover]=\"true\"\n                                     [icon-feedback]=\"true\"\n                                     [allow-blank]=\"false\" [error-msg]=\"'Please enter Surname'\"\n                                     [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Surname should be minimum 3 characters'\"\n                                     [max-error-msg]=\"'Surname should be less than 15 characters'\"\n                  >\n                  </amexio-text-input>\n                </amexio-column>\n              </amexio-row>\n              <amexio-row>\n                <amexio-column [size]=\"6\">\n                  <amexio-textarea-input [field-label]=\"'Address'\" name=\"Address\"\n                                         [place-holder]=\"'Enter address'\"\n                                         [error-msg]=\"'Please enter address'\"\n                                         [icon-feedback]=\"true\"\n                                         [rows]=\"'1'\" [columns]=\"'2'\"\n                                         [allow-blank]=\"false\" [enable-popover]=\"true\"\n                  >\n                  </amexio-textarea-input>\n                </amexio-column>\n              </amexio-row>\n            </amexio-body>\n          </amexio-window>\n          <amexio-row>\n            <amexio-column [size]=\"'12'\">\n              <amexio-label size=\"small\">\n                (Escape functionality disabled)\n              </amexio-label>\n            </amexio-column>\n          </amexio-row>\n        </amexio-column>\n\n      </amexio-row>\n      </amexio-body>\n    </amexio-card>\n    <amexio-card [header]=\"true\">\n    <amexio-header>Non Material Pattern with Toolbar </amexio-header>\n    <amexio-body>\n    <amexio-row>\n\n      <amexio-column [size]=\"4\">\n        <amexio-button type=\"success\"\n                       (onClick)=\"toggleBasicWindow('nonmaterialtoolbar')\"\n                       label=\"Basic Window\"></amexio-button>\n        <amexio-window\n          [body-height]=\"40\"\n          [(show)]=\"showBasicWindowNonMateialToolbar\"\n          [close-on-escape]=\"true\"\n          [material-design]=\"false\"\n          [footer]=\"true\"\n          [width]=\"'auto'\">\n          <amexio-header>\n         <amexio-window-header>\n         <amexio-toolbar >\n         <amexio-toolbar-item position-left>\n         <amexio-label size=\"small\" >\n          Registration\n         </amexio-label>\n       </amexio-toolbar-item>\n\n       <amexio-toolbar-item position-right [seperator-position]=\"'left'\">\n       <amexio-image aria-hidden=\"true\" [icon-class]=\"'fa fa-th'\"> </amexio-image>\n     </amexio-toolbar-item>\n     <amexio-toolbar-item position-right [seperator-position]=\"'left'\">\n       <amexio-image aria-hidden=\"true\" [icon-class]=\"'fa fa-info-circle'\"> </amexio-image>\n     </amexio-toolbar-item>\n     <amexio-toolbar-item position-right [seperator-position]=\"'left'\">\n       <amexio-image aria-hidden=\"true\" [icon-class]=\"'fa fa-question-circle'\"> </amexio-image>\n     </amexio-toolbar-item>\n     <amexio-toolbar-item position-right [seperator-position]=\"'left'\">\n       <amexio-image aria-hidden=\"true\" [icon-class]=\"'fa fa-cog'\"> </amexio-image>\n     </amexio-toolbar-item>\n      </amexio-toolbar>\n         </amexio-window-header>\n          </amexio-header>\n          <amexio-body>\n            <amexio-row>\n              <amexio-column [size]=\"6\">\n                <amexio-text-input [field-label]=\"'Name'\" name=\"country\"\n                                   [place-holder]=\"'Enter name'\"\n                                   [enable-popover]=\"true\"\n\n                                   [icon-feedback]=\"true\"\n                                   [allow-blank]=\"false\" [error-msg]=\"'Please enter name'\"\n                                   [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Name should be minimum 3 characters'\"\n                                   [max-error-msg]=\"'Name should be less than 15 characters'\"\n                >\n                </amexio-text-input>\n              </amexio-column>\n              <amexio-column [size]=\"6\">\n                <amexio-text-input [field-label]=\"'Surname'\" name=\"name\"\n                                   [place-holder]=\"'Enter surname'\"\n                                   [enable-popover]=\"true\"\n                                   [icon-feedback]=\"true\"\n                                   [allow-blank]=\"false\" [error-msg]=\"'Please enter Surname'\"\n                                   [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Surname should be minimum 3 characters'\"\n                                   [max-error-msg]=\"'Surname should be less than 15 characters'\"\n                >\n                </amexio-text-input>\n              </amexio-column>\n            </amexio-row>\n\n            <amexio-row>\n              <amexio-column [size]=\"6\">\n                <amexio-text-input [field-label]=\"'Description'\" name=\"country\"\n                                   [place-holder]=\"'Description'\"\n                                   [enable-popover]=\"true\"\n                                   [icon-feedback]=\"true\"\n                                   [allow-blank]=\"false\" [error-msg]=\"'Please enter name'\"\n                                   [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Name should be minimum 3 characters'\"\n                                   [max-error-msg]=\"'Name should be less than 15 characters'\"\n                >\n                </amexio-text-input>\n              </amexio-column>\n              <amexio-column [size]=\"6\">\n                <amexio-text-input [field-label]=\"'Hobbies'\" name=\"name\"\n                                   [place-holder]=\"'Hobbies'\"\n                                   [enable-popover]=\"true\"\n                                   [icon-feedback]=\"true\"\n                                   [allow-blank]=\"false\" [error-msg]=\"'Please enter Surname'\"\n                                   [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Surname should be minimum 3 characters'\"\n                                   [max-error-msg]=\"'Surname should be less than 15 characters'\"\n                >\n                </amexio-text-input>\n              </amexio-column>\n            </amexio-row>\n\n            <amexio-row>\n              <amexio-column [size]=\"6\">\n\n                <amexio-textarea-input [field-label]=\"'Address'\" name=\"Address\"\n                                       [place-holder]=\"'Enter address'\"\n                                       [error-msg]=\"'Please enter address'\"\n                                       [icon-feedback]=\"true\"\n                                       [rows]=\"'1'\" [columns]=\"'2'\"\n                                       [allow-blank]=\"false\" [enable-popover]=\"true\"\n\n                >\n                </amexio-textarea-input>\n\n\n              </amexio-column>\n\n            </amexio-row>\n\n\n            <amexio-row>\n              <amexio-column [size]=\"6\">\n                <amexio-text-input [field-label]=\"'Phone'\" name=\"country\"\n                                   [place-holder]=\"'Phone'\"\n                                   [enable-popover]=\"true\"\n                                   [icon-feedback]=\"true\"\n                                   [allow-blank]=\"false\" [error-msg]=\"'Please enter name'\"\n                                   [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Name should be minimum 3 characters'\"\n                                   [max-error-msg]=\"'Name should be less than 15 characters'\"\n                >\n                </amexio-text-input>\n              </amexio-column>\n              <amexio-column [size]=\"6\">\n                <amexio-text-input [field-label]=\"'Email'\" name=\"name\"\n                                   [place-holder]=\"'Email'\"\n                                   [enable-popover]=\"true\"\n                                   [icon-feedback]=\"true\"\n                                   [allow-blank]=\"false\" [error-msg]=\"'Please enter Surname'\"\n                                   [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Surname should be minimum 3 characters'\"\n                                   [max-error-msg]=\"'Surname should be less than 15 characters'\"\n                >\n                </amexio-text-input>\n              </amexio-column>\n            </amexio-row>\n\n          </amexio-body>\n          <amexio-action>\n            <amexio-button [type]= \"'default'\"(onClick)=\"showBasicWindowNonMaterial = false\" label=\"Cancel\"></amexio-button>\n            <amexio-button [type]=\"'theme-color'\" (onClick)=\"showBasicWindowNonMaterial = false\" label=\"Save\"></amexio-button>\n          </amexio-action>\n\n        </amexio-window>\n\n      </amexio-column>\n      <amexio-column [size]=\"4\">\n\n      </amexio-column>\n      <amexio-column [size]=\"4\">\n\n        <amexio-row>\n          <amexio-column [size]=\"'12'\">\n\n          </amexio-column>\n        </amexio-row>\n      </amexio-column>\n\n    </amexio-row>\n    </amexio-body>\n  </amexio-card>\n\n"

/***/ }),

/***/ "./src/app/panes/window/window.demo.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/panes/window/window.demo.component.ts ***!
  \*******************************************************/
/*! exports provided: WindowDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowDemoComponent", function() { return WindowDemoComponent; });
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
/**
 * Created by pratik on 16/1/18.
 */

var WindowDemoComponent = /** @class */ (function () {
    function WindowDemoComponent() {
    }
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    WindowDemoComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    WindowDemoComponent.prototype.toggleBasicWindow = function (data) {
        if (data == 'material') {
            this.showBasicWindowMaterial = !this.showBasicWindowMaterial;
        }
        else if (data == 'nonmaterial') {
            this.showBasicWindowNonMaterial = !this.showBasicWindowNonMaterial;
        }
        else {
            this.showBasicWindowNonMateialToolbar = !this.showBasicWindowNonMateialToolbar;
        }
    };
    WindowDemoComponent.prototype.toggleMaxWindow = function (data) {
        if (data == 'material') {
            this.showMaxWindowMaterial = !this.showMaxWindowMaterial;
        }
        else {
            this.showMaxWindowNonMaterial = !this.showMaxWindowNonMaterial;
        }
    };
    WindowDemoComponent.prototype.toggleClosable = function (data) {
        if (data == 'material') {
            this.showClosableMaterial = !this.showClosableMaterial;
        }
        else {
            this.showClosableNonMaterial = !this.showClosableNonMaterial;
        }
    };
    WindowDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'window-demo',
            template: __webpack_require__(/*! ./window.demo.component.html */ "./src/app/panes/window/window.demo.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], WindowDemoComponent);
    return WindowDemoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=panes-panes-module.js.map