(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-steps-stepbox-stepbox-demo-module"],{

/***/ "./src/app/layout/steps/stepbox/stepbox.demo.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/steps/stepbox/stepbox.demo.module.ts ***!
  \*************************************************************/
/*! exports provided: StepBoxDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepBoxDemoModule", function() { return StepBoxDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _stepbox_demo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stepbox.demo */ "./src/app/layout/steps/stepbox/stepbox.demo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Created by sagar on 11/1/18.
 */
var StepBoxDemoModule = /** @class */ (function () {
    function StepBoxDemoModule() {
    }
    StepBoxDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_stepbox_demo__WEBPACK_IMPORTED_MODULE_7__["StepBoxDemoComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"], _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _stepbox_demo__WEBPACK_IMPORTED_MODULE_7__["StepBoxDemoComponent"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], StepBoxDemoModule);
    return StepBoxDemoModule;
}());



/***/ }),

/***/ "./src/app/layout/steps/stepbox/stepbox.demo.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/steps/stepbox/stepbox.demo.ts ***!
  \******************************************************/
/*! exports provided: StepBoxDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepBoxDemoComponent", function() { return StepBoxDemoComponent; });
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


var StepBoxDemoComponent = /** @class */ (function () {
    function StepBoxDemoComponent(http) {
        this.http = http;
        this.clickMsgArray = [];
        this.getHtmlAndTypeScriptCode();
        this.user = false;
        this.shop = true;
        this.payment = false;
        this.confirmation = false;
    }
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
    //TO LOAD HTML AND TYPESCRIPT CODE
    StepBoxDemoComponent.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/layout/steps/steps.html').subscribe(function (data) {
            responseHtml = data.text();
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/layout/steps/steps.text').subscribe(function (data) {
            responseTs = data.text();
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
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
            selector: 'step-box', template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n         Step Box \n      </amexio-header>\n      <amexio-body>\n        <p>Step-box component is an indicator for the steps in a workflow.</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n            <amexio-row>\n              <amexio-column size=\"12\">\n                <!--block is true for showing step box  -->\n                <amexio-label [size]=\"'medium'\">Step box\n                </amexio-label>\n                <amexio-steps [block]=\"true\" [index]=\"true\">\n                  <amexio-step-block [label]=\"'User'\" [active]=\"true\" ></amexio-step-block>\n                  <amexio-step-block [label]=\"'Shop'\" [active]=\"false\" ></amexio-step-block>\n                  <amexio-step-block [label]=\"'Payment'\" [active]=\"false\"></amexio-step-block>\n                  <amexio-step-block [label]=\"'Confirmation'\" [active]=\"false\" ></amexio-step-block>\n                </amexio-steps>\n              </amexio-column>\n            </amexio-row>\n            <amexio-row>\n              <amexio-column size=\"12\">\n                <!--block is true for showing step box  -->\n                <amexio-label [size]=\"'medium'\">Step box with clickabel</amexio-label>\n                <amexio-steps [block]=\"true\" [index]=\"true\" (onClick)=\"stepBlockClick($event)\">\n                  <amexio-step-block [label]=\"'User'\" [active]=\"user\" ></amexio-step-block>\n                  <amexio-step-block [label]=\"'Shop'\" [active]=\"shop\" ></amexio-step-block>\n                  <amexio-step-block [label]=\"'Payment'\" [active]=\"payment\"></amexio-step-block>\n                  <amexio-step-block [label]=\"'Confirmation'\" [active]=\"confirmation\"></amexio-step-block>\n                </amexio-steps>\n              </amexio-column>\n            </amexio-row>\n            <amexio-row>\n              <amexio-column size=\"12\">\n                index is true for number inside circle\n                <br>\n                <amexio-label [size]=\"'medium'\">Step-box index\n                </amexio-label>\n                <amexio-steps [index]=\"true\">\n                  <amexio-step-block [label]=\"'Step-1'\" [active]=\"true\"></amexio-step-block>\n                  <amexio-step-block [label]=\"'Step-2'\" [active]=\"false\"></amexio-step-block>\n                  <amexio-step-block [label]=\"'Step-3'\" [active]=\"false\"></amexio-step-block>\n                  <amexio-step-block [label]=\"'Step-4'\" [active]=\"false\"></amexio-step-block>\n                </amexio-steps>\n              </amexio-column>\n            </amexio-row>\n           </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Properties <amexio-steps>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/layout/steps/step.json'\"\n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n\n            <amexio-datagrid title=\"Properties <amexio-step-block>\" [enable-column-fiter]=\"false\"\n            [http-method]=\"'get'\"\n            [http-url]=\"'assets/apireference/layout/steps/step-block.json'\"\n            [data-reader]=\"'properties'\"\n            [enable-data-filter]=\"false\">\n<amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                       [text]=\"'Name'\"></amexio-data-table-column>\n<amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                       [text]=\"'Type'\"></amexio-data-table-column>\n<amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                       [text]=\"'Default'\"></amexio-data-table-column>\n<amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                       [text]=\"'Description'\"></amexio-data-table-column>\n</amexio-datagrid>\n\n            <amexio-datagrid title=\"Events\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/layout/steps/step.json'\"\n                             [data-reader]=\"'events'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n           \n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n            <amexio-vertical-tab-view>\n              <amexio-tab title=\"HTML\" [active]=\"true\">\n                <ng-container *ngIf=\"htmlCode\">\n                  <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                  <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Type Script\">\n                <ng-container *ngIf=\"typeScriptCode\">\n                  <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n            </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n          <p align=\"center\">Amexio Sandbox</p>\n          <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-stepbox?embed=1&file=app/panels/stepbox/stepbox.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n    <amexio-notification [data]=\"clickMsgArray\" vertical-position=\"top\" horizontal-position=\"right\" auto-dismiss-msg=\"true\" auto-dismiss-msg-interval=\"1000\"></amexio-notification>\n\n  "
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], StepBoxDemoComponent);
    return StepBoxDemoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layout-steps-stepbox-stepbox-demo-module.js.map