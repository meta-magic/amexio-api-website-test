(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-steps-stepbox-icon-stepbox-icon-demo-module"],{

/***/ "./src/app/layout/steps/stepbox-icon/stepbox.icon.demo.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/steps/stepbox-icon/stepbox.icon.demo.module.ts ***!
  \***********************************************************************/
/*! exports provided: StepBoxIconDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepBoxIconDemoModule", function() { return StepBoxIconDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _stepbox_icon_demo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stepbox.icon.demo */ "./src/app/layout/steps/stepbox-icon/stepbox.icon.demo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Created by sagar on 11/1/18.
 */
var StepBoxIconDemoModule = /** @class */ (function () {
    function StepBoxIconDemoModule() {
    }
    StepBoxIconDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_stepbox_icon_demo__WEBPACK_IMPORTED_MODULE_7__["StepBoxIconComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"], _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioLayoutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _stepbox_icon_demo__WEBPACK_IMPORTED_MODULE_7__["StepBoxIconComponent"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], StepBoxIconDemoModule);
    return StepBoxIconDemoModule;
}());



/***/ }),

/***/ "./src/app/layout/steps/stepbox-icon/stepbox.icon.demo.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/steps/stepbox-icon/stepbox.icon.demo.ts ***!
  \****************************************************************/
/*! exports provided: StepBoxIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepBoxIconComponent", function() { return StepBoxIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
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
        this.getHtmlAndTypeScriptCode();
        this.user = false;
        this.shop = true;
        this.payment = false;
        this.confirmation = false;
    }
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
    //TO LOAD HTML AND TYPESCRIPT CODE
    StepBoxIconComponent.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/layout/steps/steps_icon.html').subscribe(function (data) {
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
            template: "\n   <amexio-card header=\"true\">\n     <amexio-header>\n        Step Box Icon \n     </amexio-header>\n     <amexio-body>\n       <p>Step-box component is an indicator for the steps in a workflow.</p>\n       <amexio-tab-view>\n         <amexio-tab title=\"Demo\" active=\"true\">\n           <amexio-row>\n             <amexio-column size=\"12\">\n               <!--block is true for showing step box  -->\n               <p><strong>Step box</strong></p>\n               <!--Step-box with fontawesome icons-->\n               <amexio-steps [icon]=\"true\">\n                 <amexio-step-block [label]=\"'User'\" [active]=\"true\" [icon]=\"'fa fa-user'\" ></amexio-step-block>\n                 <amexio-step-block [label]=\"'Address'\" [active]=\"false\" [icon]=\"'fa fa-address-card'\"></amexio-step-block>\n                 <amexio-step-block [label]=\"'Shop'\" [active]=\"false\" [icon]=\"'fa fa-shopping-cart'\"></amexio-step-block>\n                 <amexio-step-block [label]=\"'Payment'\" [active]=\"false\" [icon]=\"'fa fa-cc-visa'\"></amexio-step-block>\n               </amexio-steps>\n             </amexio-column>\n           </amexio-row>\n           <amexio-row>\n             <amexio-column size=\"12\">\n               <!--block is true for showing step box  -->\n               <p><strong>Step box with clickabel</strong></p>\n               <!--Step box with icon & clickable<-->\n               <amexio-steps [block]=\"true\" [icon]=\"true\" (onClick)=\"stepBlockClick($event)\">\n                 <amexio-step-block [label]=\"'User'\" [active]=\"user\" [icon]=\"'fa fa-user'\"></amexio-step-block>\n                 <amexio-step-block [label]=\"'Shop'\" [active]=\"shop\" [icon]=\"'fa fa-address-card'\"></amexio-step-block>\n                 <amexio-step-block [label]=\"'Payment'\" [active]=\"payment\" [icon]=\"'fa fa-shopping-cart'\"></amexio-step-block>\n                 <amexio-step-block [label]=\"'Confirmation'\" [active]=\"confirmation\" [icon]=\"'fa fa-cc-visa'\"></amexio-step-block>\n               </amexio-steps>\n             </amexio-column>\n           </amexio-row>\n         </amexio-tab>\n         <amexio-tab title=\"API Reference\">\n         <amexio-datagrid title=\"Properties <amexio-step>\" [enable-column-fiter]=\"false\"\n         [http-method]=\"'get'\"\n         [http-url]=\"'assets/apireference/layout/steps/step.json'\"\n         [data-reader]=\"'properties'\"\n         [enable-data-filter]=\"false\">\n<amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                    [text]=\"'Name'\"></amexio-data-table-column>\n<amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                    [text]=\"'Type'\"></amexio-data-table-column>\n<amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                    [text]=\"'Default'\"></amexio-data-table-column>\n<amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                    [text]=\"'Description'\"></amexio-data-table-column>\n</amexio-datagrid>\n\n<amexio-datagrid title=\"Properties <amexio-step-block>\" [enable-column-fiter]=\"false\"\n[http-method]=\"'get'\"\n[http-url]=\"'assets/apireference/layout/steps/step-block.json'\"\n[data-reader]=\"'properties'\"\n[enable-data-filter]=\"false\">\n<amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n   [text]=\"'Name'\"></amexio-data-table-column>\n<amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n   [text]=\"'Type'\"></amexio-data-table-column>\n<amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n   [text]=\"'Default'\"></amexio-data-table-column>\n<amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n   [text]=\"'Description'\"></amexio-data-table-column>\n</amexio-datagrid>\n\n<amexio-datagrid title=\"Events\" [enable-column-fiter]=\"false\"\n         [http-method]=\"'get'\"\n         [http-url]=\"'assets/apireference/layout/steps/step.json'\"\n         [data-reader]=\"'events'\"\n         [enable-data-filter]=\"false\">\n<amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                    [text]=\"'Name'\"></amexio-data-table-column>\n<amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                    [text]=\"'Description'\"></amexio-data-table-column>\n</amexio-datagrid>\n\n\n         </amexio-tab>\n         <amexio-tab title=\"Source\">\n           <div style=\"overflow-y: scroll\">\n           <amexio-vertical-tab-view>\n             <amexio-tab title=\"HTML\" [active]=\"true\">\n               <ng-container *ngIf=\"htmlCode\">\n                 <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                 <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n               </ng-container>\n             </amexio-tab>\n             <amexio-tab title=\"Type Script\">\n               <ng-container *ngIf=\"typeScriptCode\">\n                 <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n               </ng-container>\n             </amexio-tab>\n           </amexio-vertical-tab-view>\n           </div>\n         </amexio-tab>\n         <amexio-tab title=\"Live\">\n         <p align=\"center\">Amexio Sandbox</p>\n         <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-stepboxicon?embed=1&file=app/panels/stepboxicon/stepboxicon.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n         </amexio-tab>\n       </amexio-tab-view>\n     </amexio-body>\n   </amexio-card>\n   <amexio-notification [data]=\"clickMsgArray\" vertical-position=\"top\" horizontal-position=\"right\" auto-dismiss-msg=\"true\" auto-dismiss-msg-interval=\"1000\"></amexio-notification>\n\n "
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], StepBoxIconComponent);
    return StepBoxIconComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layout-steps-stepbox-icon-stepbox-icon-demo-module.js.map