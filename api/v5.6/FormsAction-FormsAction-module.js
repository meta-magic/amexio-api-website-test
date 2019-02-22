(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["FormsAction-FormsAction-module"],{

/***/ "./src/app/FormsAction/FormsAction.module.ts":
/*!***************************************************!*\
  !*** ./src/app/FormsAction/FormsAction.module.ts ***!
  \***************************************************/
/*! exports provided: FormsActionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsActionModule", function() { return FormsActionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _FormsAction_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormsAction.routes */ "./src/app/FormsAction/FormsAction.routes.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notification_notification_demo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notification/notification.demo */ "./src/app/FormsAction/notification/notification.demo.ts");
/* harmony import */ var _progressbar_progressbar_demo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./progressbar/progressbar.demo */ "./src/app/FormsAction/progressbar/progressbar.demo.ts");
/* harmony import */ var _paginator_paginator_demo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./paginator/paginator.demo */ "./src/app/FormsAction/paginator/paginator.demo.ts");
/* harmony import */ var _floatinggroup_floatinggroupbutton_demo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./floatinggroup/floatinggroupbutton.demo */ "./src/app/FormsAction/floatinggroup/floatinggroupbutton.demo.ts");
/* harmony import */ var _floatingbutton_floatingbutton_demo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./floatingbutton/floatingbutton.demo */ "./src/app/FormsAction/floatingbutton/floatingbutton.demo.ts");
/* harmony import */ var _buttongroup_buttongroup_demo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./buttongroup/buttongroup.demo */ "./src/app/FormsAction/buttongroup/buttongroup.demo.ts");
/* harmony import */ var _buttondropdown_buttondropdown_demo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./buttondropdown/buttondropdown.demo */ "./src/app/FormsAction/buttondropdown/buttondropdown.demo.ts");
/* harmony import */ var _button_button_demo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./button/button.demo */ "./src/app/FormsAction/button/button.demo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















/**
 * Created by kedar on 4/2/19.
 */
var FormsActionModule = /** @class */ (function () {
    function FormsActionModule() {
    }
    FormsActionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_notification_notification_demo__WEBPACK_IMPORTED_MODULE_8__["NotificationDemo"], _progressbar_progressbar_demo__WEBPACK_IMPORTED_MODULE_9__["ProgressBarDemo"], _paginator_paginator_demo__WEBPACK_IMPORTED_MODULE_10__["PaginatorDemo"], _floatinggroup_floatinggroupbutton_demo__WEBPACK_IMPORTED_MODULE_11__["FloatingGroupButtonDemo"],
                _floatingbutton_floatingbutton_demo__WEBPACK_IMPORTED_MODULE_12__["FloatingButtonDemo"], _buttongroup_buttongroup_demo__WEBPACK_IMPORTED_MODULE_13__["ButtonGroupDemo"], _buttondropdown_buttondropdown_demo__WEBPACK_IMPORTED_MODULE_14__["ButtonDropDownDemo"], _button_button_demo__WEBPACK_IMPORTED_MODULE_15__["ButtonDemo"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"].forRoot(),
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AmexioWidgetModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(_FormsAction_routes__WEBPACK_IMPORTED_MODULE_6__["FORMSACTION_ROUTE"]),
            ],
            providers: []
        })
    ], FormsActionModule);
    return FormsActionModule;
}());



/***/ }),

/***/ "./src/app/FormsAction/FormsAction.routes.ts":
/*!***************************************************!*\
  !*** ./src/app/FormsAction/FormsAction.routes.ts ***!
  \***************************************************/
/*! exports provided: FORMSACTION_ROUTE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORMSACTION_ROUTE", function() { return FORMSACTION_ROUTE; });
/* harmony import */ var _notification_notification_demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification/notification.demo */ "./src/app/FormsAction/notification/notification.demo.ts");
/* harmony import */ var _progressbar_progressbar_demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progressbar/progressbar.demo */ "./src/app/FormsAction/progressbar/progressbar.demo.ts");
/* harmony import */ var _paginator_paginator_demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paginator/paginator.demo */ "./src/app/FormsAction/paginator/paginator.demo.ts");
/* harmony import */ var _floatinggroup_floatinggroupbutton_demo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./floatinggroup/floatinggroupbutton.demo */ "./src/app/FormsAction/floatinggroup/floatinggroupbutton.demo.ts");
/* harmony import */ var _floatingbutton_floatingbutton_demo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./floatingbutton/floatingbutton.demo */ "./src/app/FormsAction/floatingbutton/floatingbutton.demo.ts");
/* harmony import */ var _buttongroup_buttongroup_demo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buttongroup/buttongroup.demo */ "./src/app/FormsAction/buttongroup/buttongroup.demo.ts");
/* harmony import */ var _buttondropdown_buttondropdown_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buttondropdown/buttondropdown.demo */ "./src/app/FormsAction/buttondropdown/buttondropdown.demo.ts");
/* harmony import */ var _button_button_demo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./button/button.demo */ "./src/app/FormsAction/button/button.demo.ts");








var FORMSACTION_ROUTE = [
    {
        path: 'notification-demo', component: _notification_notification_demo__WEBPACK_IMPORTED_MODULE_0__["NotificationDemo"],
    },
    {
        path: 'progressbar-demo', component: _progressbar_progressbar_demo__WEBPACK_IMPORTED_MODULE_1__["ProgressBarDemo"],
    },
    {
        path: 'paginator-demo', component: _paginator_paginator_demo__WEBPACK_IMPORTED_MODULE_2__["PaginatorDemo"],
    },
    {
        path: 'floatinggroupbutton-demo', component: _floatinggroup_floatinggroupbutton_demo__WEBPACK_IMPORTED_MODULE_3__["FloatingGroupButtonDemo"],
    },
    {
        path: 'floatingbutton-demo', component: _floatingbutton_floatingbutton_demo__WEBPACK_IMPORTED_MODULE_4__["FloatingButtonDemo"],
    },
    {
        path: 'buttongroup-demo', component: _buttongroup_buttongroup_demo__WEBPACK_IMPORTED_MODULE_5__["ButtonGroupDemo"],
    },
    {
        path: 'buttondropdown-demo', component: _buttondropdown_buttondropdown_demo__WEBPACK_IMPORTED_MODULE_6__["ButtonDropDownDemo"],
    },
    {
        path: 'button-demo', component: _button_button_demo__WEBPACK_IMPORTED_MODULE_7__["ButtonDemo"],
    },
];


/***/ }),

/***/ "./src/app/FormsAction/button/button.demo.html":
/*!*****************************************************!*\
  !*** ./src/app/FormsAction/button/button.demo.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/formactions/button.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n      <amexio-column [size]=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Button Types\n          </amexio-header>\n          <amexio-body>\n            <amexio-row>\n              <amexio-column size=\"2\">\n                <amexio-button [label]=\"'Theme Color'\" [type]=\"'theme-color'\" [tooltip]=\"'Primary Button'\"></amexio-button>\n              </amexio-column>\n              <amexio-column size=\"1\"></amexio-column>\n              <amexio-column size=\"2\">\n                <amexio-button [label]=\"'Green'\" [type]=\"'green'\" [tooltip]=\"'Success Button'\"></amexio-button>\n              </amexio-column>\n              <amexio-column size=\"2\">\n                <amexio-button [label]=\"'Red'\" [type]=\"'red'\" [tooltip]=\"'danger Button'\"></amexio-button>\n              </amexio-column>\n              <amexio-column size=\"2\">\n                <amexio-button [label]=\"'Yellow'\" [type]=\"'yellow'\" [tooltip]=\"'Warning Button'\"></amexio-button>\n              </amexio-column>\n              <amexio-column size=\"2\">\n                <amexio-button [label]=\"'Transparent'\" [type]=\"'transparent'\" [tooltip]=\"'Transparent Button'\"></amexio-button>\n              </amexio-column>\n              <amexio-column size=\"2\">\n                <amexio-button [label]=\"'Background Color'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Secondary Button'\"></amexio-button>\n              </amexio-column>\n            </amexio-row>\n          </amexio-body>\n        </amexio-card>\n\n      </amexio-column>\n    </amexio-row>\n    <amexio-row>\n      <amexio-column [size]=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Button States\n          </amexio-header>\n          <amexio-body>\n            <amexio-row>\n              <amexio-column [size]=\"4\">\n                <amexio-button [label]=\"'Disabled'\" [type]=\"'green'\" [tooltip]=\"'Disabled'\" [disabled]=\"'true'\" ></amexio-button>\n              </amexio-column>\n              <amexio-column [size]=\"4\">\n                <amexio-button [label]=\"'Enabled'\" [type]=\"'green'\" [tooltip]=\"'Enable'\" ></amexio-button>\n              </amexio-column>\n              <amexio-column [size]=\"4\">\n                <!--<amexio-button [label]=\"'Async Task'\" [type]=\"'theme-color'\" [tooltip]=\"'Async Task'\" (onClick)=\"switchasyncFlag()\" [isLoading]=\"asyncFlag\"></amexio-button>-->\n              </amexio-column>\n            </amexio-row>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n    <amexio-row>\n      <amexio-column [size]=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Button with Icons\n          </amexio-header>\n          <amexio-body>\n            <amexio-row>\n              <amexio-column [size]=\"4\">\n                <amexio-button [label]=\"'Next'\" [type]=\"'theme-color'\" [tooltip]=\"'Next'\" [icon]=\"'fa fa-chevron-right'\"></amexio-button>\n              </amexio-column>\n              <amexio-column [size]=\"4\">\n                <amexio-button [label]=\"'Download'\" [type]=\"'green'\" [tooltip]=\"'Download'\" [icon]=\"'fa fa-save'\"></amexio-button>\n              </amexio-column>\n              <amexio-column [size]=\"4\">\n                <amexio-button [label]=\"'Delete'\" [type]=\"'red'\" [tooltip]=\"'delete'\" [icon]=\"'fa fa-trash'\"></amexio-button>\n              </amexio-column>\n            </amexio-row>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n    <amexio-row>\n      <amexio-column [size]=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Button Sizes\n          </amexio-header>\n          <amexio-body>\n            <amexio-row>\n              <amexio-column [size]=\"4\">\n                <amexio-button [label]=\"'Large Button'\" [type]=\"'theme-color'\" [tooltip]=\"'large'\" [size]=\"'large'\"></amexio-button>\n              </amexio-column>\n              <amexio-column [size]=\"4\">\n                <amexio-button [label]=\"'Default Button'\" [type]=\"'theme-color'\" [tooltip]=\"'default'\"></amexio-button>\n              </amexio-column>\n              <amexio-column [size]=\"4\">\n                <amexio-button [label]=\"'Small Button'\" [type]=\"'theme-color'\" [tooltip]=\"'small'\" [size]=\"'small'\"></amexio-button>\n              </amexio-column>\n            </amexio-row>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n    <amexio-row>\n      <amexio-column size=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Block Button\n          </amexio-header>\n          <amexio-body>\n            <amexio-row>\n              <amexio-column size=\"12\">\n                <amexio-button [label]=\"'Block Button(theme color)'\" [type]=\"'theme-color'\" [tooltip]=\"'large'\"  [block]=\"true\"></amexio-button>\n              </amexio-column>\n            </amexio-row>\n            <amexio-row>\n              <amexio-column size=\"12\">\n                <amexio-button [label]=\"'Block Button(success)'\" [type]=\"'green'\" [tooltip]=\"'green'\" [block]=\"true\"></amexio-button>\n              </amexio-column>\n            </amexio-row>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n\n    <amexio-row>\n      <amexio-column [size]=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Button With Badges - Small / Default / Large\n          </amexio-header>\n          <amexio-body>\n\n            <amexio-row>\n              <amexio-column [size]=\"3\">\n                <amexio-button [label]=\"'Background Color'\" [badge] = \"10\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Secondary Button'\"></amexio-button>\n              </amexio-column>\n              <amexio-column [size]=\"3\">\n                <amexio-button  [label]=\"'Theme Color'\" [badge] = \"11\" [type]=\"'theme-color'\" [tooltip]=\"'Primary Button'\"></amexio-button>\n              </amexio-column>\n              <amexio-column [size]=\"3\">\n                <amexio-button   [label]=\"'Green'\" [badge] = \"12\" [type]=\"'green'\" [tooltip]=\"'Success Button'\"></amexio-button>\n              </amexio-column>\n              <amexio-column [size]=\"3\">\n                <amexio-button  [label]=\"'Red'\" [badge] = \"13\" [type]=\"'red'\" [tooltip]=\"'Danger Button'\"></amexio-button>\n              </amexio-column>\n            </amexio-row>\n\n\n\n          </amexio-body>\n        </amexio-card>\n\n      </amexio-column>\n    </amexio-row>\n    <!-- custom color buttons -->\n    <amexio-row>\n      <amexio-column [size]=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Button with custom color\n          </amexio-header>\n          <amexio-body>\n            <amexio-row>\n              <amexio-column [size]=\"4\">\n                <amexio-button [label]=\"'Next'\"  [color]=\"'#622569'\" [bg-color]=\"'#96ceb4'\"  [tooltip]=\"'Next'\"></amexio-button>\n              </amexio-column>\n              <amexio-column [size]=\"4\">\n                <amexio-button [label]=\"'Download'\" [bg-color]=\"'#f4a688'\" [color]=\"'brown'\" [tooltip]=\"'Download'\"></amexio-button>\n              </amexio-column>\n              <amexio-column [size]=\"4\">\n                <amexio-button [label]=\"'Delete'\" [bg-color]=\"'#b7d7e8'\" [color]=\"'blue'\" [tooltip]=\"'delete'\"></amexio-button>\n              </amexio-column>\n            </amexio-row>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n    <!-- custom color buttons end here-->\n  </amexio-api-demo>\n</amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/FormsAction/button/button.demo.ts":
/*!***************************************************!*\
  !*** ./src/app/FormsAction/button/button.demo.ts ***!
  \***************************************************/
/*! exports provided: ButtonDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDemo", function() { return ButtonDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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


var ButtonDemo = /** @class */ (function () {
    function ButtonDemo() {
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_1__["ComponentDataStructure"]();
    }
    ButtonDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    ButtonDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'button';
        this.customSourceData.description = 'A button component with various modes and configurations.';
        this.customSourceData.sourceMetadata.htmlUrl = 'forms/button/form.html';
        this.customSourceData.sourceMetadata.tsUrl = 'forms/button/form.text';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-button?embed=1&file=app/forms/button/button.demo.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    ButtonDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    ButtonDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'button-demo',
            template: __webpack_require__(/*! ./button.demo.html */ "./src/app/FormsAction/button/button.demo.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ButtonDemo);
    return ButtonDemo;
}());



/***/ }),

/***/ "./src/app/FormsAction/buttondropdown/buttondropdown.demo.html":
/*!*********************************************************************!*\
  !*** ./src/app/FormsAction/buttondropdown/buttondropdown.demo.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/formactions/bottondropdown.json'\">\n  <amexio-api-demo>\n      <amexio-row>\n        <amexio-column [size]=\"6\">\n          <amexio-card [header]=\"true\">\n            <amexio-header>\n              Dropdown Button\n            </amexio-header>\n            <amexio-body>\n              <amexio-row>\n                <amexio-column [size]=\"12\">\n                  <amexio-btn-dropdown [label]=\"'Button'\" [type]=\"'success'\" [size]=\"'default'\" >\n                    <amexio-btn-dropdown-item [label]=\"'Link 1'\" [icon]=\"'fa fa-arrows-alt'\" ></amexio-btn-dropdown-item>\n                    <amexio-btn-dropdown-item [label]=\"'Link 2'\"  [icon]=\"'fa fa-trash'\"></amexio-btn-dropdown-item>\n                  </amexio-btn-dropdown>\n                </amexio-column>\n              </amexio-row>\n            </amexio-body>\n          </amexio-card>\n        </amexio-column>\n        <amexio-column size=\"6\">\n          <amexio-card [header]=\"true\">\n            <amexio-header>\n              Dropdown Button with size\n            </amexio-header>\n            <amexio-body>\n              <amexio-row>\n                <amexio-column size=\"6\">\n                  <amexio-btn-dropdown [label]=\"'Button'\" [type]=\"'primary'\" [size]=\"'large'\">\n                    <amexio-btn-dropdown-item [label]=\"'Link 1'\" ></amexio-btn-dropdown-item>\n                    <amexio-btn-dropdown-item [label]=\"'Link 2'\" ></amexio-btn-dropdown-item>\n                  </amexio-btn-dropdown>\n                </amexio-column>\n                <amexio-column size=\"6\">\n                  <amexio-btn-dropdown [label]=\"'Button'\" [type]=\"'primary'\" [size]=\"'small'\">\n                    <amexio-btn-dropdown-item [label]=\"'Link 1'\" ></amexio-btn-dropdown-item>\n                    <amexio-btn-dropdown-item [label]=\"'Link 2'\" ></amexio-btn-dropdown-item>\n                  </amexio-btn-dropdown>\n                </amexio-column>\n              </amexio-row>\n            </amexio-body>\n          </amexio-card>\n        </amexio-column>\n      </amexio-row>\n      <br><br>\n      <amexio-row>\n        <amexio-column size=\"6\">\n          <amexio-card [header]=\"true\">\n            <amexio-header>\n              Dropdown Button with disabled link\n            </amexio-header>\n            <amexio-body>\n              <amexio-row>\n                <amexio-btn-dropdown  [label]=\"'Disabled Link'\" [type]=\"'primary'\" [size]=\"'default'\">\n                  <amexio-btn-dropdown-item [label]=\"'Disabled'\"  [icon]=\"'fa fa-fullscreen'\" [disabled]=\"true\"></amexio-btn-dropdown-item>\n                  <amexio-btn-dropdown-item [label]=\"'Link 2'\" [icon]=\"'fa fa-trash'\"></amexio-btn-dropdown-item>\n                </amexio-btn-dropdown>\n              </amexio-row>\n            </amexio-body>\n          </amexio-card>\n        </amexio-column>\n        <amexio-column size=\"6\">\n          <amexio-card [header]=\"true\">\n            <amexio-header>\n              Dropdown Button With Badges\n            </amexio-header>\n            <amexio-body>\n              <amexio-row>\n                <amexio-btn-dropdown [label]=\"'Button with badge'\"   [type]=\"'theme-color'\" [size]=\"'default'\">\n                  <amexio-btn-dropdown-item  [label]=\"'Expand'\" [badge] = \"32\" [icon]=\"'fa fa-arrows-alt'\" ></amexio-btn-dropdown-item>\n                  <amexio-btn-dropdown-item [label]=\"'Delete'\" [badge] = \"31\" [icon]=\"'fa fa-trash'\" ></amexio-btn-dropdown-item>\n                </amexio-btn-dropdown>\n              </amexio-row>\n            </amexio-body>\n          </amexio-card>\n        </amexio-column>\n\n      </amexio-row>\n    </amexio-api-demo>\n  </amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/FormsAction/buttondropdown/buttondropdown.demo.ts":
/*!*******************************************************************!*\
  !*** ./src/app/FormsAction/buttondropdown/buttondropdown.demo.ts ***!
  \*******************************************************************/
/*! exports provided: ButtonDropDownDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDropDownDemo", function() { return ButtonDropDownDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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


var ButtonDropDownDemo = /** @class */ (function () {
    function ButtonDropDownDemo() {
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_1__["ComponentDataStructure"]();
    }
    ButtonDropDownDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    ButtonDropDownDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Button Dropdown';
        this.customSourceData.description = 'A Dropdown Button component with various modes and configurations.';
        this.customSourceData.sourceMetadata.htmlUrl = 'forms/buttondropdown/form.html';
        this.customSourceData.sourceMetadata.tsUrl = 'forms/buttondropdown/form.text';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-buttondropdown?embed=1&file=app/forms/buttondropdown/buttondropdown.demo.html&view=editor';
    };
    ButtonDropDownDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'buttondropdown-demo',
            template: __webpack_require__(/*! ./buttondropdown.demo.html */ "./src/app/FormsAction/buttondropdown/buttondropdown.demo.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ButtonDropDownDemo);
    return ButtonDropDownDemo;
}());



/***/ }),

/***/ "./src/app/FormsAction/buttongroup/buttongroup.demo.html":
/*!***************************************************************!*\
  !*** ./src/app/FormsAction/buttongroup/buttongroup.demo.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/formactions/buttongroup.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n      <amexio-column [size]=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Button Group Types\n          </amexio-header>\n          <amexio-body>\n            <amexio-row>\n              <amexio-column [size]=\"12\">\n                <amexio-btn-group>\n                  <amexio-button [label]=\"'Secondary'\" ></amexio-button>\n                  <amexio-button [label]=\"'primary'\"  [type]=\"'primary'\"  ></amexio-button>\n                  <amexio-button [label]=\"'Success'\" [type]=\"'success'\" ></amexio-button>\n                  <amexio-button [label]=\"'Danger'\" [type]=\"'danger'\" ></amexio-button>\n                  <amexio-button [label]=\"'Warning'\" [type]=\"'warning'\" ></amexio-button>\n                </amexio-btn-group>\n              </amexio-column>\n            </amexio-row>\n          </amexio-body>\n        </amexio-card>\n\n      </amexio-column>\n    </amexio-row>\n    <amexio-row>\n      <amexio-column [size]=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Button Group States\n          </amexio-header>\n          <amexio-body>\n            <amexio-row>\n              <amexio-column [size]=\"12\">\n                <amexio-btn-group>\n                  <amexio-button [label]=\"'Disabled'\"  [type]=\"'primary'\"  [tooltip]=\"'Disabled'\" [disabled]=\"'true'\"></amexio-button>\n                  <amexio-button [label]=\"'Enabled'\" [type]=\"'primary'\" [tooltip]=\"'Enabled'\"></amexio-button>\n                </amexio-btn-group>\n              </amexio-column>\n            </amexio-row>\n          </amexio-body>\n        </amexio-card>\n\n      </amexio-column>\n    </amexio-row>\n    <amexio-row>\n      <amexio-column [size]=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Button Group with Icons\n          </amexio-header>\n          <amexio-body>\n            <amexio-row>\n              <amexio-column [size]=\"12\">\n                <amexio-btn-group>\n                  <amexio-button [label]=\"'Next'\" [type]=\"'primary'\" [tooltip]=\"'Next'\" [icon]=\"'fa fa-chevron-right'\"  ></amexio-button>\n                  <amexio-button [label]=\"'Download'\" [type]=\"'success'\" [tooltip]=\"'Save'\" [icon]=\"'fa fa-save'\" ></amexio-button>\n                  <amexio-button [label]=\"'Delete'\" [type]=\"'danger'\" [tooltip]=\"'delete'\" [icon]=\"'fa fa-trash'\" ></amexio-button>\n                </amexio-btn-group>\n              </amexio-column>\n            </amexio-row>\n          </amexio-body>\n        </amexio-card>\n\n      </amexio-column>\n    </amexio-row>\n    <amexio-row>\n      <amexio-column [size]=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Button Group Sizes\n          </amexio-header>\n          <amexio-body>\n            <amexio-row>\n              <amexio-column [size]=\"6\">\n                <amexio-btn-group [size]=\"'large'\"  >\n                  <amexio-button  [label]=\"'Next'\" [type]=\"'primary'\" [tooltip]=\"'Next'\" [icon]=\"'fa fa-chevron-right'\" ></amexio-button>\n                  <amexio-button  [label]=\"'Download'\" [type]=\"'success'\" [tooltip]=\"'Save'\" [icon]=\"'fa fa-save'\" ></amexio-button>\n                  <amexio-button  [label]=\"'Delete'\" [type]=\"'danger'\" [tooltip]=\"'delete'\" [icon]=\"'fa fa-trash'\" ></amexio-button>\n                </amexio-btn-group>\n              </amexio-column>\n              <amexio-column [size]=\"6\">\n                <amexio-btn-group [size]=\"'small'\" >\n                  <amexio-button  [label]=\"'Next'\" [type]=\"'primary'\" [tooltip]=\"'Next'\" [icon]=\"'fa fa-chevron-right'\"  ></amexio-button>\n                  <amexio-button  [label]=\"'Download'\" [type]=\"'success'\" [tooltip]=\"'Save'\" [icon]=\"'fa fa-save'\" ></amexio-button>\n                  <amexio-button  [label]=\"'Delete'\" [type]=\"'danger'\" [tooltip]=\"'delete'\" [icon]=\"'fa fa-trash'\" ></amexio-button>\n                </amexio-btn-group>\n              </amexio-column>\n            </amexio-row>\n          </amexio-body>\n        </amexio-card>\n\n      </amexio-column>\n    </amexio-row>\n\n    <amexio-row>\n      <amexio-column [size]=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Button Group With Badges\n          </amexio-header>\n          <amexio-body>\n\n            <amexio-row>\n              <amexio-column [size]=\"4\">\n                <amexio-btn-group [size]=\"'small'\" >\n                  <amexio-button [label]=\"'Save'\" [badge] = \"15\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Secondary Button'\"></amexio-button>\n                  <amexio-button  [label]=\"'Cancel'\" [badge] = \"16\"  [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Secondary Button'\"></amexio-button>\n                </amexio-btn-group>\n              </amexio-column>\n              <amexio-column [size]=\"4\" >\n                <amexio-btn-group [size]=\"'default'\" >\n                  <amexio-button [label]=\"'Save'\"  [badge] = \"17\" [type]=\"'green'\" [tooltip]=\"'Secondary Button'\"></amexio-button>\n                  <amexio-button  [label]=\"'Cancel'\" [badge] = \"18\" [type]=\"'green'\" [tooltip]=\"'Secondary Button'\"></amexio-button>\n                </amexio-btn-group>\n              </amexio-column>\n              <amexio-column [size]=\"4\" >\n                <amexio-btn-group [size]=\"'large'\" >\n                  <amexio-button [label]=\"'Save'\"  [badge] = \"19\" [type]=\"'red'\" [tooltip]=\"'Secondary Button'\"></amexio-button>\n                  <amexio-button  [label]=\"'Cancel'\"  [badge] = \"20\" [type]=\"'red'\" [tooltip]=\"'Secondary Button'\"></amexio-button>\n                </amexio-btn-group>\n              </amexio-column>\n            </amexio-row>\n\n\n\n\n          </amexio-body>\n        </amexio-card>\n\n      </amexio-column>\n    </amexio-row>\n  </amexio-api-demo>\n</amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/FormsAction/buttongroup/buttongroup.demo.ts":
/*!*************************************************************!*\
  !*** ./src/app/FormsAction/buttongroup/buttongroup.demo.ts ***!
  \*************************************************************/
/*! exports provided: ButtonGroupDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroupDemo", function() { return ButtonGroupDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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


var ButtonGroupDemo = /** @class */ (function () {
    function ButtonGroupDemo() {
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_1__["ComponentDataStructure"]();
    }
    ButtonGroupDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    ButtonGroupDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Button Group';
        this.customSourceData.description = 'A Button Group component with various modes and configurations.';
        this.customSourceData.sourceMetadata.htmlUrl = 'forms/buttongroup/form.html';
        this.customSourceData.sourceMetadata.tsUrl = 'forms/buttongroup/form.text';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-buttongroup?embed=1&file=app/forms/buttongroup/buttongroup.demo.html&view=editor';
    };
    ButtonGroupDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'buttongroup-demo',
            template: __webpack_require__(/*! ./buttongroup.demo.html */ "./src/app/FormsAction/buttongroup/buttongroup.demo.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ButtonGroupDemo);
    return ButtonGroupDemo;
}());



/***/ }),

/***/ "./src/app/FormsAction/floatingbutton/floatingbutton.demo.html":
/*!*********************************************************************!*\
  !*** ./src/app/FormsAction/floatingbutton/floatingbutton.demo.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/formactions/floatingbutton.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n      <amexio-column [size]=\"12\">\n        <amexio-card [header]=\"true\" [body-height]=\"'50%'\">\n          <amexio-header>\n            Floating Button Types\n          </amexio-header>\n          <amexio-body>\n            <amexio-row>\n              <amexio-column size=3>\n                <amexio-floating-button [bg-color]=\"'#a2b9bc'\" [color]=\"' #6b5b95'\" [relative]=\"true\" [icon]=\"'fa fa-snowflake-o'\"\n                  [type]=\"'theme-color'\"></amexio-floating-button>\n              </amexio-column>\n              <amexio-column size=3>\n                <amexio-floating-button [relative]=\"true\" [icon]=\"'fa fa-user-circle-o'\" [type]=\"'yellow'\"></amexio-floating-button>\n              </amexio-column>\n              <amexio-column size=3>\n                <amexio-floating-button [relative]=\"true\" [icon]=\"'fa fa-envelope-open'\" [type]=\"'red'\"></amexio-floating-button>\n              </amexio-column>\n              <amexio-column size=3>\n                <amexio-floating-button [relative]=\"true\" [icon]=\"'fa fa fa-telegram'\" [type]=\"'theme-color'\"></amexio-floating-button>\n              </amexio-column>\n            </amexio-row>\n\n          </amexio-body>\n        </amexio-card>\n        <amexio-card [header]=\"true\" [body-height]=\"'50%'\">\n          <amexio-header>\n            Floating Button with tooltip\n          </amexio-header>\n          <amexio-body>\n            <amexio-row>\n              <amexio-column size=3>\n                <amexio-floating-button [bg-color]=\"'#a2b9bc'\" [color]=\"' #6b5b95'\" [relative]=\"true\" [tool-tip]=\"'Setting'\"\n                  [icon]=\"'fa fa-snowflake-o'\" [type]=\"'theme-color'\"></amexio-floating-button>\n              </amexio-column>\n              <amexio-column size=3>\n                <amexio-floating-button [relative]=\"true\" [tool-tip]=\"'User'\" [icon]=\"'fa fa-user-circle-o'\" [type]=\"'yellow'\"></amexio-floating-button>\n              </amexio-column>\n            </amexio-row>\n            <amexio-row>\n              <amexio-column size=12>\n                <amexio-button [label]=\"'Vertical/Horizontal Positioning'\" (onClick)=\"onFloatingButtonClick1($event)\"\n                  [type]=\"'theme-color'\" [tooltip]=\"'Using Vertical/Horizontal Positioning'\"></amexio-button>\n                <br />\n                <br />\n                <amexio-button [label]=\"'Right/Left/Top/Right Positioning'\" (onClick)=\"onFloatingButtonClick2($event)\"\n                  [type]=\"'theme-color'\" [tooltip]=\"'Using Right/Left/Top/Right Positioning'\"></amexio-button>\n              </amexio-column>\n            </amexio-row>\n\n            <div *ngIf=\"toggle1\">\n              <amexio-floating-button [vertical-position]=\"'top'\" [horizontal-position]=\"'left'\" [label]=\"'top-left'\"\n                [icon]=\"'fa fa-snowflake-o'\" [type]=\"'theme-color'\"></amexio-floating-button>\n              <amexio-floating-button [vertical-position]=\"'top'\" [horizontal-position]=\"'right'\" [label]=\"'top-right'\"\n                [icon]=\"'fa fa-telegram'\" [type]=\"'green'\"></amexio-floating-button>\n              <amexio-floating-button [vertical-position]=\"'bottom'\" [horizontal-position]=\"'left'\" [label]=\"'bottom-left'\"\n                [icon]=\"'fa fa-user-circle-o'\" [type]=\"'yellow'\"></amexio-floating-button>\n              <amexio-floating-button [vertical-position]=\"'bottom'\" [horizontal-position]=\"'right'\" [label]=\"'bottom-right'\"\n                [icon]=\"'fa fa-envelope-open'\" [type]=\"'red'\"></amexio-floating-button>\n              <amexio-floating-button [vertical-position]=\"'center'\" [horizontal-position]=\"'center'\" [icon]=\"'fa fa-snowflake-o'\"\n                [type]=\"'red'\" (onClick)=\"onFloatingButtonClick($event)\"></amexio-floating-button>\n            </div>\n\n            <div *ngIf=\"toggle2\">\n              <amexio-floating-button [position-top]=\"'30px'\" [position-right]=\"'40px'\" [label]=\"'top-left'\" [icon]=\"'fa fa-snowflake-o'\"\n                [type]=\"'theme-color'\"></amexio-floating-button>\n              <amexio-floating-button [position-top]=\"'50%'\" [position-right]=\"'40px'\" [label]=\"'top-left'\" [icon]=\"'fa fa-snowflake-o'\"\n                [type]=\"'green'\"></amexio-floating-button>\n              <amexio-floating-button [position-bottom]=\"'30px'\" [position-right]=\"'40px'\" [label]=\"'top-left'\" [icon]=\"'fa fa-snowflake-o'\"\n                [type]=\"'yellow'\"></amexio-floating-button>\n              <amexio-floating-button [position-bottom]=\"'30px'\" [position-left]=\"'40px'\" [label]=\"'top-left'\" [icon]=\"'fa fa-snowflake-o'\"\n                [type]=\"'red'\"></amexio-floating-button>\n              <amexio-floating-button [position-top]=\"'30px'\" [position-left]=\"'40px'\" [label]=\"'top-left'\" [icon]=\"'fa fa-snowflake-o'\"\n                [bg-color]=\"'blue'\"></amexio-floating-button>\n            </div>\n          </amexio-body>\n        </amexio-card>\n\n      </amexio-column>\n    </amexio-row>\n  </amexio-api-demo>\n</amexio-api-structure>"

/***/ }),

/***/ "./src/app/FormsAction/floatingbutton/floatingbutton.demo.ts":
/*!*******************************************************************!*\
  !*** ./src/app/FormsAction/floatingbutton/floatingbutton.demo.ts ***!
  \*******************************************************************/
/*! exports provided: FloatingButtonDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatingButtonDemo", function() { return FloatingButtonDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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


var FloatingButtonDemo = /** @class */ (function () {
    function FloatingButtonDemo() {
        this.toggle1 = false;
        this.toggle2 = false;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_1__["ComponentDataStructure"]();
    }
    FloatingButtonDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    FloatingButtonDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Floating button';
        this.customSourceData.description = 'A Floating button component with various position options (vertical/horizontal/top/bottom/left/right)';
        this.customSourceData.sourceMetadata.htmlUrl = 'forms/floatingbutton/form.html';
        this.customSourceData.sourceMetadata.tsUrl = 'forms/floatingbutton/form.text';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v41-floatingbutton?embed=1&file=app/forms/floatingbutton/floatingbutton.demo.html&view=editor';
    };
    FloatingButtonDemo.prototype.onFloatingButtonClick1 = function (event) {
        this.toggle1 = !this.toggle1;
        this.toggle2 = false;
    };
    FloatingButtonDemo.prototype.onFloatingButtonClick2 = function (event) {
        this.toggle2 = !this.toggle2;
        this.toggle1 = false;
    };
    FloatingButtonDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'floating-button-demo',
            template: __webpack_require__(/*! ./floatingbutton.demo.html */ "./src/app/FormsAction/floatingbutton/floatingbutton.demo.html"),
        }),
        __metadata("design:paramtypes", [])
    ], FloatingButtonDemo);
    return FloatingButtonDemo;
}());



/***/ }),

/***/ "./src/app/FormsAction/floatinggroup/floatinggroupbutton.demo.html":
/*!*************************************************************************!*\
  !*** ./src/app/FormsAction/floatinggroup/floatinggroupbutton.demo.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/formactions/floatinggroup.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n      <amexio-column [size]=\"12\">\n        <amexio-card [header]=\"true\" [body-height]=\"'50%'\">\n          <amexio-header>\n            Floating group button types\n          </amexio-header>\n          <amexio-body>\n            <amexio-row>\n              <amexio-column size=12>\n\n                <b>Demo focus on showcasing three demos</b><br/>\n                1 - Relative with floating group poisitioned bottom right<br/>\n                2 - Relative with floating  group poisitioned top right<br/>\n                3 - Floating group poisitioned bottom right<br/>\n\n              </amexio-column>\n            </amexio-row>\n            <amexio-row>\n              <amexio-column size=6>\n                <amexio-floating-group-button [relative]=\"true\"\n                                              (onClick)=\"onFloatingClick($event)\" [data]=\"floatingbuttongroup\" [floating-group-position]=\"'top'\"\n                                              [icon]=\"'fa fa-ellipsis-v'\" [type]=\"'theme-color'\">\n                </amexio-floating-group-button>\n              </amexio-column>\n              <amexio-column size=6>\n                <amexio-floating-group-button [relative]=\"true\"\n                                              (onClick)=\"onFloatingClick($event)\" [data]=\"floatingbuttongroup\" [floating-group-position]=\"'bottom'\"\n                                              [icon]=\"'fa fa-ellipsis-v'\" [type]=\"'green'\">\n                </amexio-floating-group-button>\n              </amexio-column>\n\n              <amexio-floating-group-button (onClick)=\"onFloatingClick($event)\" [data]=\"floatingbuttongroup\" [floating-group-position]=\"'top'\"\n                                            [position-bottom]=\"'5%'\" [position-right]=\"'5%'\"\n                                            [icon]=\"'fa fa-ellipsis-v'\" [type]=\"'red'\">\n              </amexio-floating-group-button>\n\n            </amexio-row>\n\n          </amexio-body>\n        </amexio-card>\n\n      </amexio-column>\n    </amexio-row>\n  </amexio-api-demo>\n</amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/FormsAction/floatinggroup/floatinggroupbutton.demo.ts":
/*!***********************************************************************!*\
  !*** ./src/app/FormsAction/floatinggroup/floatinggroupbutton.demo.ts ***!
  \***********************************************************************/
/*! exports provided: FloatingGroupButtonDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatingGroupButtonDemo", function() { return FloatingGroupButtonDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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


var FloatingGroupButtonDemo = /** @class */ (function () {
    function FloatingGroupButtonDemo() {
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_1__["ComponentDataStructure"]();
        this.floatingbuttongroup = [
            { 'label': 'Facebook', 'icon': 'fa fa-facebook', 'type': 'yellow' },
            { 'label': 'Twitter', 'icon': 'fa fa-twitter', 'type': 'green' },
            { 'label': 'Google', 'icon': 'fa fa-google-plus', 'type': 'theme-color' }
        ];
    }
    FloatingGroupButtonDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    FloatingGroupButtonDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'floating group button';
        this.customSourceData.description = 'A Floating group button component with various position options (vertical/horizontal/top/bottom/left/right)    ';
        this.customSourceData.sourceMetadata.htmlUrl = 'forms/floatinggroupbutton/form.html';
        this.customSourceData.sourceMetadata.tsUrl = 'forms/floatinggroupbutton/form.text';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v41-floatingbuttongroup?embed=1&file=app/forms/floatingbuttongroup/floatingbuttongroup.demo.html&view=editor';
    };
    FloatingGroupButtonDemo.prototype.onFloatingClick = function (event) {
    };
    FloatingGroupButtonDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'floating-group-button-demo',
            template: __webpack_require__(/*! ./floatinggroupbutton.demo.html */ "./src/app/FormsAction/floatinggroup/floatinggroupbutton.demo.html"),
        }),
        __metadata("design:paramtypes", [])
    ], FloatingGroupButtonDemo);
    return FloatingGroupButtonDemo;
}());



/***/ }),

/***/ "./src/app/FormsAction/notification/notification.demo.html":
/*!*****************************************************************!*\
  !*** ./src/app/FormsAction/notification/notification.demo.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <amexio-api-structure  [url]=\"'assets/componentjson/formactions/notification.json'\">\n      <amexio-api-demo>\n        <amexio-row>\n          <amexio-column size=\"4\">\n            <amexio-card [header]=\"true\">\n              <amexio-header> Vertical Top Notification </amexio-header>\n              <amexio-body>\n\n                <amexio-notification\n                  [data]=\"verticalLeftMessageArray\"\n                  [vertical-position]=\"'top'\"\n                  [horizontal-position]=\"'left'\"\n                  [close-on-escape] =\"true\"\n                  [background-color]=\"'orange '\"\n                  [foreground-color]=\"'black'\"\n                  [auto-dismiss-msg]=\"true\"\n                  [auto-dismiss-msg-interval]=\"6000\">\n\n                  <ng-template #amexioNotificationTemp let-data=\"data\">\n                    <amexio-row>\n                      <amexio-column size=\"2\">\n                        <amexio-image [icon-class]=\"'\tfa fa-exclamation-triangle'\" style=\"font-size: 25px;\">\n                        </amexio-image> &nbsp;&nbsp;\n                      </amexio-column>\n                      <amexio-column size=\"8\">\n                        <amexio-label size=\"small-bold\" font-color=\"white\" > Warning Message </amexio-label><br/>\n                        <amexio-label size=\"small\" font-color=\"white\" >{{data}}</amexio-label><br/>\n                      </amexio-column>\n\n                    </amexio-row>\n                  </ng-template>\n\n\n                </amexio-notification>\n                <amexio-button\n                  (onClick)=\"verticalLeftNotification()\"\n                  [label]=\"'Info Top Left'\"\n                  [type]=\"'primary'\"\n                  [tooltip]=\"'Primary Button'\">\n                </amexio-button>\n              </amexio-body>\n            </amexio-card>\n          </amexio-column>\n          <amexio-column size=\"4\">\n            <amexio-card [header]=\"true\">\n              <amexio-header> Vertical Center Notification </amexio-header>\n              <amexio-body>\n                <amexio-notification\n                  [data]=\"verticalCenterMessageArray\"\n                  [vertical-position]=\"'top'\"\n                  [horizontal-position]=\"'center'\"\n                  [close-on-escape] =\"true\"\n                  [background-color]=\"'yellow'\"\n                  [auto-dismiss-msg]=\"true\"\n                  [auto-dismiss-msg-interval]=\"6000\">\n                  <ng-template #amexioNotificationTemp let-data=\"data\">\n                    <amexio-box [box-width]=\"'350px'\" >\n                      <amexio-image [icon-class]=\"'\tfa fa-info-circle fa-2x'\" >\n                      </amexio-image> &nbsp;&nbsp;\n                      <amexio-label size=\"small-bold\" [badge]=7 font-color=\"black\"> {{data}}</amexio-label>\n                    </amexio-box>\n                  </ng-template>\n                </amexio-notification>\n                <amexio-button\n                  (onClick)=\"verticalCenterNotification()\"\n                  [label]=\"'Info center Popup'\"\n                  [type]=\"'primary'\"\n                  [tooltip]=\"'Primary Button'\">\n                </amexio-button>\n              </amexio-body>\n            </amexio-card>\n          </amexio-column>\n          <amexio-column size=\"4\">\n            <amexio-card [header]=\"true\">\n              <amexio-header> Vertical Right Notification </amexio-header>\n              <amexio-body>\n                <amexio-notification\n                  [data]=\"verticalRightMessageArray\"\n                  [vertical-position]=\"'top'\"\n                  [horizontal-position]=\"'right'\"\n                  [close-on-escape] =\"true\"\n                  [background-color]=\"'red'\"\n                  [auto-dismiss-msg]=\"true\"\n                  [auto-dismiss-msg-interval]=\"4000\">\n                  <ng-template #amexioNotificationTemp >\n                    <amexio-row>\n                      <amexio-column size=\"2\">\n                        <amexio-image [icon-class]=\"'\tfa fa-times-circle-o'\" style=\"font-size: 25px;\">\n                        </amexio-image> &nbsp;&nbsp;\n                      </amexio-column>\n                      <amexio-column size=\"10\">\n                        <amexio-label size=\"small-bold\" font-color=\"white\" >Error Message</amexio-label><br/>\n                        <amexio-label font-color=\"white\" >Please Enter Name</amexio-label><br/>\n                        <amexio-label font-color=\"white\" >Please Enter Phone No.</amexio-label>\n                      </amexio-column>\n                    </amexio-row>\n                  </ng-template>\n                </amexio-notification>\n                <amexio-button\n                  (onClick)=\"verticalRightNotification()\"\n                  [label]=\"'Info Right Popup'\"\n                  [type]=\"'primary'\"\n                  [tooltip]=\"'Primary Button'\">\n                </amexio-button>\n              </amexio-body>\n            </amexio-card>\n          </amexio-column>\n        </amexio-row>\n        <amexio-row>\n\n          <amexio-column size=\"4\">\n            <amexio-card [header]=\"true\">\n              <amexio-header> Horizontal Left Notification </amexio-header>\n              <amexio-body>\n                <amexio-notification\n                  [data]=\"horizontalLeftMessageArray\"\n                  [vertical-position]=\"'bottom'\"\n                  [horizontal-position]=\"'left'\"\n                  [close-on-escape] =\"true\"\n                  [background-color]=\"'green'\"\n                  [icon]=\"'\tfa fa-check-square-o fa-fw'\"\n                  [auto-dismiss-msg]=\"true\"\n                  [auto-dismiss-msg-interval]=\"4000\">\n\n\n                </amexio-notification>\n                <amexio-button\n                  (onClick)=\"horizontalLeftNotification()\"\n                  [label]=\"'Info Bottom Left '\"\n                  [type]=\"'primary'\"\n                  [tooltip]=\"'Primary Button'\">\n                </amexio-button>\n\n              </amexio-body>\n            </amexio-card>\n          </amexio-column>\n          <amexio-column size=\"4\">\n            <amexio-card [header]=\"true\">\n              <amexio-header> Horizontal Center Notification </amexio-header>\n              <amexio-body>\n\n                <amexio-notification\n                  [data]=\"horizontalCenterMessageArray\"\n                  [vertical-position]=\"'bottom'\"\n                  [horizontal-position]=\"'center'\"\n                  [close-on-escape] =\"true\"\n                  [background-color]=\"'black'\"\n                  [foreground-color]=\"'white'\"\n                  [auto-dismiss-msg]=\"true \"\n                  [auto-dismiss-msg-interval]=\"4000\">\n                  <ng-template #amexioNotificationTemp let-data=\"data\">\n\n\n                    <amexio-box   >\n                      <amexio-image [icon-class]=\"'\tfa fa-check-square-o'\" style=\"font-size: 25px;\">\n                      </amexio-image> &nbsp;&nbsp;\n                      <amexio-label font-color=\"white\">{{data}}</amexio-label>\n\n                    </amexio-box>\n\n                  </ng-template>\n\n                </amexio-notification>\n                <amexio-button\n                  (onClick)=\"horizontalCenterNotification()\"\n                  [label]=\"'Info Bottom center'\"\n                  [type]=\"'primary'\"\n                  [tooltip]=\"'Primary Button'\">\n                </amexio-button>\n\n              </amexio-body>\n            </amexio-card>\n\n          </amexio-column>\n          <amexio-column size=\"4\">\n            <amexio-card [header]=\"true\">\n              <amexio-header> Horizontal Right Notification </amexio-header>\n              <amexio-body>\n\n                <amexio-notification\n                  [background-color]=\"'orange'\"\n                  [foreground-color]=\"'black'\"\n                  [data]=\"horizontalRightMessageArray\"\n                  [vertical-position]=\"'bottom'\"\n                  [horizontal-position]=\"'right'\"\n                  [close-on-escape] =\"true\"\n                  [auto-dismiss-msg]=\"true\"\n                  [auto-dismiss-msg-interval]=\"6000\">\n\n                  <ng-template #amexioNotificationTemp let-data=\"data\">\n                    <amexio-box padding=\"true\" [box-width]=\"'225px'\">\n                      <amexio-label size=\"medium-bold\">Cookies Policy</amexio-label><br/>\n                      <amexio-label>{{data}}</amexio-label><br/>\n                      <br/>\n                      <amexio-button [label]=\"'Accept & Close'\"\n                                     [type]=\"'theme-color'\"\n                                     (onClick)=\"closeCookie()\"\n                                     [size]=\"'small'\"\n                                     [tooltip]=\"'cookies accepted button'\">\n                      </amexio-button>\n                    </amexio-box>\n                  </ng-template>\n\n\n                </amexio-notification>\n                <amexio-button\n                  (onClick)=\"horizontalRightNotification()\"\n                  [label]=\"'Info Bottom Right'\"\n                  [type]=\"'primary'\"\n                  [tooltip]=\"'Primary Button'\">\n                </amexio-button>\n\n              </amexio-body>\n            </amexio-card>\n\n          </amexio-column>\n\n        </amexio-row>\n      </amexio-api-demo>\n    </amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/FormsAction/notification/notification.demo.ts":
/*!***************************************************************!*\
  !*** ./src/app/FormsAction/notification/notification.demo.ts ***!
  \***************************************************************/
/*! exports provided: NotificationDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDemo", function() { return NotificationDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

var NotificationDemo = /** @class */ (function () {
    function NotificationDemo() {
        this.verticalLeftMessageArray = [];
        this.verticalCenterMessageArray = [];
        this.verticalRightMessageArray = [];
        this.horizontalLeftMessageArray = [];
        this.horizontalCenterMessageArray = [];
        this.horizontalRightMessageArray = [];
    }
    NotificationDemo.prototype.verticalLeftNotification = function () {
        this.verticalLeftMessageArray.push('There are unsaved changes');
    };
    NotificationDemo.prototype.verticalCenterNotification = function () {
        this.verticalCenterMessageArray.push('We have to update security policy');
    };
    NotificationDemo.prototype.verticalRightNotification = function () {
        this.verticalRightMessageArray.push('top Right Notification!!!');
    };
    NotificationDemo.prototype.horizontalLeftNotification = function () {
        this.horizontalLeftMessageArray.push('Order Submitted ');
    };
    NotificationDemo.prototype.horizontalCenterNotification = function () {
        this.horizontalCenterMessageArray.push('Event Registered');
    };
    NotificationDemo.prototype.horizontalRightNotification = function () {
        this.horizontalRightMessageArray.push('We use cookies to help our site work, to understand how it is used and analytics cookies to learn more and track the websites performance. By continuing to use this site,you accept our use of cookies.');
    };
    NotificationDemo.prototype.closeCookie = function () {
        this.horizontalRightMessageArray = [];
    };
    NotificationDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'notification-demo',
            template: __webpack_require__(/*! ./notification.demo.html */ "./src/app/FormsAction/notification/notification.demo.html"),
        }),
        __metadata("design:paramtypes", [])
    ], NotificationDemo);
    return NotificationDemo;
}());



/***/ }),

/***/ "./src/app/FormsAction/paginator/paginator.demo.html":
/*!***********************************************************!*\
  !*** ./src/app/FormsAction/paginator/paginator.demo.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-api-structure  [url]=\"'assets/componentjson/formactions/paginator.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n      <amexio-column size=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Paginator with page size 10\n          </amexio-header>\n          <amexio-body>\n            <amexio-paginator [pages]=\"50\"\n                              [rows]=\"10\"\n                              (onPageChange)=\"loadPageData($event)\">\n            </amexio-paginator>\n            <p>Current active page :  {{currentPage}}</p>\n          </amexio-body>\n        </amexio-card>\n\n      </amexio-column>\n    </amexio-row>\n    <amexio-row>\n      <amexio-column size=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Paginator with page size 5\n          </amexio-header>\n          <amexio-body>\n            <amexio-paginator [pages]=\"30\"\n                              [rows]=\"5\">\n            </amexio-paginator>\n          </amexio-body>\n        </amexio-card>\n\n      </amexio-column>\n    </amexio-row>\n  </amexio-api-demo>\n</amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/FormsAction/paginator/paginator.demo.ts":
/*!*********************************************************!*\
  !*** ./src/app/FormsAction/paginator/paginator.demo.ts ***!
  \*********************************************************/
/*! exports provided: PaginatorDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorDemo", function() { return PaginatorDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

var PaginatorDemo = /** @class */ (function () {
    function PaginatorDemo() {
        this.currentPage = 1;
    }
    PaginatorDemo.prototype.loadPageData = function (pageInfo) {
        this.currentPage = pageInfo.pageNumber;
    };
    PaginatorDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'paginator-demo',
            template: __webpack_require__(/*! ./paginator.demo.html */ "./src/app/FormsAction/paginator/paginator.demo.html"),
        }),
        __metadata("design:paramtypes", [])
    ], PaginatorDemo);
    return PaginatorDemo;
}());



/***/ }),

/***/ "./src/app/FormsAction/progressbar/progressbar.demo.html":
/*!***************************************************************!*\
  !*** ./src/app/FormsAction/progressbar/progressbar.demo.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-api-structure  [url]=\"'assets/componentjson/formactions/progressbar.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n      <amexio-column size=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Progress Bar\n          </amexio-header>\n          <amexio-body>\n\n            <h3>Primary</h3>\n            <amexio-row>\n              <amexio-column [size]=\"4\">\n                <amexio-progress-bar [current-value]=\"'50'\" [infinite]=\"false\" type=\"success\"></amexio-progress-bar>\n              </amexio-column>\n              <amexio-column [size]=\"4\">\n                <amexio-progress-bar [current-value]=\"'80'\" [infinite]=\"false\" type=\"success\"></amexio-progress-bar>\n              </amexio-column>\n              <amexio-column [size]=\"4\">\n                <amexio-progress-bar [current-value]=\"'100'\" [infinite]=\"false\" type=\"success\"></amexio-progress-bar>\n              </amexio-column>\n            </amexio-row>\n            <h3>Warning</h3>\n            <amexio-row>\n              <amexio-column [size]=\"4\">\n                <amexio-progress-bar [current-value]=\"'30'\" [infinite]=\"false\" type=\"warning\"></amexio-progress-bar>\n              </amexio-column>\n              <amexio-column [size]=\"4\">\n                <amexio-progress-bar [current-value]=\"'55'\" [infinite]=\"false\" type=\"warning\"></amexio-progress-bar>\n              </amexio-column>\n              <amexio-column [size]=\"4\">\n                <amexio-progress-bar [current-value]=\"'95'\" [infinite]=\"false\" type=\"warning\"></amexio-progress-bar>\n              </amexio-column>\n            </amexio-row>\n            <h3>Success</h3>\n            <amexio-row>\n              <amexio-column [size]=\"4\">\n                <amexio-progress-bar [current-value]=\"'45'\" [infinite]=\"false\" type=\"success\"></amexio-progress-bar>\n              </amexio-column>\n              <amexio-column [size]=\"4\">\n                <amexio-progress-bar [current-value]=\"'63'\" [infinite]=\"false\" type=\"success\"></amexio-progress-bar>\n              </amexio-column>\n              <amexio-column [size]=\"4\">\n                <amexio-progress-bar [current-value]=\"'99'\" [infinite]=\"false\" type=\"success\"></amexio-progress-bar>\n              </amexio-column>\n            </amexio-row>\n            <h3>Danger</h3>\n            <amexio-row>\n              <amexio-column [size]=\"4\">\n                <amexio-progress-bar [current-value]=\"'54'\" [infinite]=\"false\" type=\"danger\"></amexio-progress-bar>\n              </amexio-column>\n              <amexio-column [size]=\"4\">\n                <amexio-progress-bar [current-value]=\"'32'\" [infinite]=\"false\" type=\"danger\"></amexio-progress-bar>\n              </amexio-column>\n              <amexio-column [size]=\"4\">\n                <amexio-progress-bar [current-value]=\"'85'\" [infinite]=\"false\" type=\"danger\"></amexio-progress-bar>\n              </amexio-column>\n            </amexio-row>\n            <h3>Infinite</h3>\n            <amexio-row>\n              <amexio-column [size]=\"4\">\n                <amexio-progress-bar [stripped]=\"true\" [current-value]=\"'54'\" [infinite]=\"true\"  type=\"danger\"></amexio-progress-bar>\n              </amexio-column>\n              <amexio-column [size]=\"4\">\n                <amexio-progress-bar [stripped]=\"true\" [current-value]=\"'32'\" [infinite]=\"true\" type=\"success\"></amexio-progress-bar>\n              </amexio-column>\n              <amexio-column [size]=\"4\">\n                <amexio-progress-bar [stripped]=\"true\" [current-value]=\"'85'\" [infinite]=\"true\" type=\"warning\"></amexio-progress-bar>\n              </amexio-column>\n            </amexio-row>\n            <h3>Amexio - Colours </h3>\n            <amexio-row>\n              <amexio-column [size]=\"4\">\n                <amexio-progress-bar [current-value]=\"'50'\" [infinite]=\"false\" [amexio-color]=\"'amexio-purple'\"></amexio-progress-bar>\n              </amexio-column>\n              <amexio-column [size]=\"4\">\n                <amexio-progress-bar  [current-value]=\"'80'\" [infinite]=\"false\" [amexio-color]=\"'amexio-green'\"></amexio-progress-bar>\n              </amexio-column>\n              <amexio-column [size]=\"4\">\n                <amexio-progress-bar  [current-value]=\"'100'\" [infinite]=\"false\" [amexio-color]=\"'amexio-yellow'\"></amexio-progress-bar>\n              </amexio-column>\n            </amexio-row>\n\n            <amexio-row>\n              <amexio-column [size]=\"3\">\n                <amexio-progress-bar [stripped]=\"true\"  [current-value]=\"'50'\" [infinite]=\"false\" [amexio-color]=\"'amexio-red'\"></amexio-progress-bar>\n              </amexio-column>\n              <amexio-column [size]=\"3\">\n                <amexio-progress-bar [stripped]=\"true\" [current-value]=\"'80'\" [infinite]=\"false\" [amexio-color]=\"'amexio-blue'\"></amexio-progress-bar>\n              </amexio-column>\n              <amexio-column [size]=\"3\">\n                <amexio-progress-bar [stripped]=\"true\" [current-value]=\"'60'\" [infinite]=\"false\" [amexio-color]=\"'amexio-brown'\"></amexio-progress-bar>\n              </amexio-column>\n              <amexio-column [size]=\"3\">\n                <amexio-progress-bar [stripped]=\"true\" [current-value]=\"'54'\" [infinite]=\"true\"  [amexio-color]=\"'amexio-black'\"></amexio-progress-bar>\n              </amexio-column>\n            </amexio-row>\n          </amexio-body>\n        </amexio-card>\n\n      </amexio-column>\n    </amexio-row>\n  </amexio-api-demo>\n</amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/FormsAction/progressbar/progressbar.demo.ts":
/*!*************************************************************!*\
  !*** ./src/app/FormsAction/progressbar/progressbar.demo.ts ***!
  \*************************************************************/
/*! exports provided: ProgressBarDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarDemo", function() { return ProgressBarDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

var ProgressBarDemo = /** @class */ (function () {
    function ProgressBarDemo() {
    }
    ProgressBarDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'progressbar-demo',
            template: __webpack_require__(/*! ./progressbar.demo.html */ "./src/app/FormsAction/progressbar/progressbar.demo.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarDemo);
    return ProgressBarDemo;
}());



/***/ })

}]);
//# sourceMappingURL=FormsAction-FormsAction-module.js.map