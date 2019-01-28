(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-tab-enhancedtab-enhancedtab-demo-module"],{

/***/ "./src/app/layout/tab/enhancedtab/dynamictabdemo.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/tab/enhancedtab/dynamictabdemo.component.ts ***!
  \********************************************************************/
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

/***/ "./src/app/layout/tab/enhancedtab/enhancedtab.demo.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/tab/enhancedtab/enhancedtab.demo.module.ts ***!
  \*******************************************************************/
/*! exports provided: EnhancedTabDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnhancedTabDemoModule", function() { return EnhancedTabDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _enhancedtab_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enhancedtab.demo */ "./src/app/layout/tab/enhancedtab/enhancedtab.demo.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _dynamictabdemo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dynamictabdemo.component */ "./src/app/layout/tab/enhancedtab/dynamictabdemo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









/**
 * Created by sagar on 11/1/18.
 */
var EnhancedTabDemoModule = /** @class */ (function () {
    function EnhancedTabDemoModule() {
    }
    EnhancedTabDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_enhancedtab_demo__WEBPACK_IMPORTED_MODULE_6__["EnhancedTabDemo"], _dynamictabdemo_component__WEBPACK_IMPORTED_MODULE_8__["DyanmicTabComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioPaneModule"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"], _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _enhancedtab_demo__WEBPACK_IMPORTED_MODULE_6__["EnhancedTabDemo"], pathMatch: 'full'
                    }])],
            providers: [],
            entryComponents: [_dynamictabdemo_component__WEBPACK_IMPORTED_MODULE_8__["DyanmicTabComponent"]]
        })
    ], EnhancedTabDemoModule);
    return EnhancedTabDemoModule;
}());



/***/ }),

/***/ "./src/app/layout/tab/enhancedtab/enhancedtab.demo.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/tab/enhancedtab/enhancedtab.demo.ts ***!
  \************************************************************/
/*! exports provided: EnhancedTabDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnhancedTabDemo", function() { return EnhancedTabDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _dynamictabdemo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamictabdemo.component */ "./src/app/layout/tab/enhancedtab/dynamictabdemo.component.ts");
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
        this.tabArray = [
            "work"
        ];
        this.getHtmlAndTypeScriptCode();
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
    //TO LOAD HTML AND TYPESCRIPT CODE
    EnhancedTabDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        var code;
        //HTML FILE
        this.http.get('assets/data/code/layout/tab/enhancedtab/tab.html').subscribe(function (data) {
            responseHtml = data.text();
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/layout/tab/enhancedtab/tab.text').subscribe(function (data) {
            responseTs = data.text();
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
        //TS FILE
        this.http.get('assets/data/code/layout/tab/enhancedtab/dynamictab.text').subscribe(function (data) {
            code = data.text();
        }, function (error) {
        }, function () {
            _this.typeScriptCode2 = code;
        });
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
        var cmp = tab.addDynamicTab(title, "red", true, _dynamictabdemo_component__WEBPACK_IMPORTED_MODULE_2__["DyanmicTabComponent"]);
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
            selector: 'enhanced-tab-demo', template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n         Enhanced Tab \n      </amexio-header>\n      <amexio-body>\n        <p>Enhanced Tab component for Angular Apps with multiple configurations such as Tab, Header, Tab Alignments, Tabs divided equally, Tab Colors and Action Component</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n          <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'right'\">\n          <amexio-header>\n              Tab layout with header and tabs right aligned\n          </amexio-header>\n          <amexio-body>\n              <amexio-tab-view header=\"Work Profile\" [tab-position]=\"'top'\" [header-align]=\"'right'\" [divide-header-equally]=false>\n                  <amexio-tab title=\"Person\" [active]=\"true\" [amexio-color]=\"'red'\">\n                      Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard\n                      dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a\n                      type specimen book.\n                  </amexio-tab>\n                  <amexio-tab title=\"Work\" [amexio-color]=\"'blue'\">\n                      Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean\n                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus\n                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                  </amexio-tab>\n              </amexio-tab-view>\n          </amexio-body>\n      </amexio-card>\n      \n      <br>\n      \n      <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'right'\">\n          <amexio-header>\n              Tab layout with action component(Radio Group) and tabs left aligned\n          </amexio-header>\n          <amexio-body>\n              <amexio-tab-view [action]=\"true\" [closable]=\"false\" [tab-position]=\"'top'\" [header-align]=\"'left'\" [divide-header-equally]=false>\n                  <amexio-tab-action>\n                      <amexio-radio-group name=\"gender\" [data-reader]=\"'response.data'\" [display-field]=\"'gender'\"\n                          [value-field]=\"'genderId'\" [horizontal]=\"true\" [data]=\"radioGroupData\" [default-value]=\"'male'\">\n                      </amexio-radio-group>\n                  </amexio-tab-action>\n      \n                  <amexio-tab title=\"Person\" [active]=\"true\" [amexio-color]=\"'red'\">\n                      Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard\n                      dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a\n                      type specimen book.\n                  </amexio-tab>\n                  <amexio-tab title=\"Work\" [amexio-color]=\"'blue'\">\n                      Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean\n                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus\n                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                  </amexio-tab>\n                  <amexio-tab title=\"Profile\" [amexio-color]=\"'green'\">\n                  Profile Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard\n                  dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a\n                  type specimen book.\n                  </amexio-tab>\n                  <amexio-tab title=\"Education\" [amexio-color]=\"'red'\">\n                  Education Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard\n                  dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a\n                  type specimen book.\n                  </amexio-tab>\n              </amexio-tab-view>\n          </amexio-body>\n      </amexio-card>\n      \n      <br>\n      \n      <amexio-card [header]=\"true\" [footer]=\"true\" [footer-align]=\"'left'\">\n          <amexio-header>\n              Tab layout with action component(button) and tabs left aligned\n          </amexio-header>\n          <amexio-body>\n          \n              <amexio-tab-view #tab [closable]=\"false\" [action]=\"true\" [tab-position]=\"'top'\" [header-align]=\"'left'\">\n                  <amexio-tab-action>\n                      <amexio-button [label]=\"'Add Tab'\" [type]=\"'theme-color'\" (onClick)=\"addtab(tab)\" [tooltip]=\"'Add Tab'\">\n                      </amexio-button>\n                  </amexio-tab-action>\n                  <amexio-tab title=\"Person\" [active]=\"true\" [amexio-color]=\"'red'\" [closable]=\"true\">\n                      Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard\n                      dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a\n                      type specimen book.\n                  </amexio-tab>\n                  <amexio-tab title=\"Work\" [amexio-color]=\"'red'\">\n                      Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean\n                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus\n                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                  </amexio-tab>\n                  <amexio-tab title=\"Profile\" [amexio-color]=\"'red'\">\n                      Profile Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean\n                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus\n                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                  </amexio-tab>\n                  <amexio-tab title=\"Education\" [amexio-color]=\"'red'\" [closable]=\"true\">\n                      Education Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean\n                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus\n                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                  </amexio-tab>\n              </amexio-tab-view>\n          </amexio-body>\n      <amexio-action>\n      <amexio-button [label]=\"'Close Tab'\" [type]=\"'theme-color'\" (onClick)=\"closeAllTabs(tab)\" [tooltip]=\"'Add Tab'\" >\n          </amexio-button>\n          &nbsp;\n          <amexio-button [label]=\"'Active Number Tab'\" [type]=\"'theme-color'\" (onClick)=\"setActiveTabNumber(tab)\" [tooltip]=\"'Activate Tab'\" >\n          </amexio-button>\n          &nbsp;\n          <amexio-button [label]=\"'Active Title Tab'\" [type]=\"'theme-color'\" (onClick)=\"setActiveTabTitle(tab)\" [tooltip]=\"'Activate Tab'\" >\n          </amexio-button>\n          &nbsp;\n          <amexio-button [label]=\"'Close Other Tabs'\" [type]=\"'theme-color'\" (onClick)=\"closeOtherTabs(tab)\" [tooltip]=\"'Close Tab'\" >\n          </amexio-button>\n      </amexio-action>\n      </amexio-card>\n      <br>\n      <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'right'\">\n          <amexio-header>\n              Tab layout with action component(Rating) and tabs right aligned\n          </amexio-header>\n          <amexio-body>\n              <amexio-tab-view [closable]=\"false\" [action]=\"true\" [tab-position]=\"'top'\" [header-align]=\"'right'\" [divide-header-equally]=false>\n                  <amexio-tab-action>\n                      <amexio-rating-input [(ngModel)]=\"rate\" [max]=\"max\" name=\"rate\" [read-only]=\"isReadonly\">\n                      </amexio-rating-input>\n                  </amexio-tab-action>\n                  <amexio-tab title=\"Person\" [active]=\"true\" [amexio-color]=\"'red'\">\n                      Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard\n                      dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a\n                      type specimen book.\n                  </amexio-tab>\n                  <amexio-tab title=\"Work\" [amexio-color]=\"'blue'\">\n                      Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean\n                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus\n                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                  </amexio-tab>\n                  <amexio-tab title=\"Profile\" [amexio-color]=\"'green'\">\n                      Profile Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean\n                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus\n                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                  </amexio-tab>\n                  <amexio-tab title=\"Education\" [amexio-color]=\"'red'\">\n                      Education Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean\n                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus\n                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                  </amexio-tab>\n              </amexio-tab-view>\n          </amexio-body>\n      \n      </amexio-card>\n      \n      <br>\n      \n      <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'right'\">\n          <amexio-header>\n              Tabs equally divided\n          </amexio-header>\n          <amexio-body>\n              <amexio-tab-view [closable]=\"false\" [tab-position]=\"'top'\" [header-align]=\"'right'\" [divide-header-equally]=true>\n      \n                  <amexio-tab title=\"Person\" [active]=\"true\" [amexio-color]=\"'red'\">\n                      Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard\n                      dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a\n                      type specimen book.\n                  </amexio-tab>\n                  <amexio-tab title=\"Work\" [amexio-color]=\"'blue'\">\n                      Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean\n                      dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a\n                      type specimen book.\n                  </amexio-tab>\n                  <amexio-tab title=\"Address\" [amexio-color]=\"'green'\">\n                      Address Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean\n                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus\n                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                  </amexio-tab>\n                  <amexio-tab title=\"Profile\" [amexio-color]=\"'red'\">\n                      Profile Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean\n                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus\n                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                  </amexio-tab>\n              </amexio-tab-view>\n          </amexio-body>\n      \n      </amexio-card>\n      \n      <br>\n      \n      <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'right'\">\n          <amexio-header>\n              Tab Layout with header and scrollable tabs\n          </amexio-header>\n          <amexio-body>\n              <amexio-tab-view [closable]=\"false\" header=\"Work Profile\" [tab-position]=\"'top'\" [header-align]=\"'right'\" [divide-header-equally]=false>\n      \n                  <amexio-tab title=\"tab1\" [active]=\"true\" [amexio-color]=\"'red'\">\n                      Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard\n                      dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a\n                      type specimen book.\n                  </amexio-tab>\n                  <amexio-tab title=\"tab2\" [amexio-color]=\"'blue'\">\n                      Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean\n                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus\n                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                  </amexio-tab>\n                  <amexio-tab title=\"tab3\" [amexio-color]=\"'green'\">\n                      Tab3 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean\n                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus\n                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                  </amexio-tab>\n                  <amexio-tab title=\"tab4\" [amexio-color]=\"'pink'\">\n                      Tab4 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean\n                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus\n                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                  </amexio-tab>\n                  <amexio-tab title=\"tab5\" [amexio-color]=\"'brown'\">\n                      Tab5 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean\n                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus\n                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                  </amexio-tab>\n                  <amexio-tab title=\"tab6\" [amexio-color]=\"'green'\">\n                      Tab6 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean\n                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus\n                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                  </amexio-tab>\n                  <amexio-tab title=\"tab7\" [amexio-color]=\"'red'\">\n                      Tab7 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean\n                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus\n                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                  </amexio-tab>\n                  <amexio-tab title=\"tab8\" [amexio-color]=\"'blue'\">\n                      Tab8 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean\n                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus\n                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                  </amexio-tab>\n                  <amexio-tab title=\"tab9\" [amexio-color]=\"'orange'\">\n                      Tab9 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean\n                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus\n                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                  </amexio-tab>\n                  <amexio-tab title=\"tab10\" [amexio-color]=\"'blue'\">\n                      Tab10 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean\n                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus\n                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                  </amexio-tab>\n                  <amexio-tab title=\"tab11\" [amexio-color]=\"'green'\">\n                      Tab11 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean\n                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus\n                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                  </amexio-tab>\n                  <amexio-tab title=\"tab12\" [amexio-color]=\"'red'\">\n                      Tab12 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean\n                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus\n                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                  </amexio-tab>\n                  <amexio-tab title=\"tab13\" [amexio-color]=\"'pink'\">\n                      Tab13 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean\n                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus\n                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                  </amexio-tab>\n                  <amexio-tab title=\"tab14\" [amexio-color]=\"'blue'\">\n                      Tab14 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean\n                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus\n                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                  </amexio-tab>\n                  <amexio-tab title=\"tab15\" [amexio-color]=\"'red'\">\n                      Tab15 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean\n                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus\n                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                  </amexio-tab>\n                  <amexio-tab title=\"tab16\" [amexio-color]=\"'green'\">\n                      Tab16 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean\n                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus\n                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                  </amexio-tab>\n              </amexio-tab-view>\n          </amexio-body>\n      </amexio-card>\n        \n                   </amexio-tab>\n\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Tab View Properties  <amexio-tab-view>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/layout/tab/horizontaltab.json'\"\n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\" >\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n             <amexio-data-table-column [width]=\"20\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Version'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"45\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br>\n            <amexio-datagrid title=\"Tab Properties  <amexio-tab>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/layout/tab/horizontaltab.json'\"\n                             [data-reader]=\"'tabproperties'\"\n                             [enable-data-filter]=\"false\" >\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"20\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Version'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"45\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br>\n            <amexio-datagrid title=\"Tab Events\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/layout/tab/horizontaltab.json'\"\n                             [data-reader]=\"'events'\"\n                             [enable-data-filter]=\"false\" >\n              <amexio-data-table-column [width]=\"40\"[data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"60\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br>\n            <amexio-datagrid title=\"Tab Methods\" [enable-column-fiter]=\"false\"\n            [http-method]=\"'get'\"\n            [http-url]=\"'assets/apireference/layout/tab/horizontaltab.json'\"\n            [data-reader]=\"'methods'\"\n            [enable-data-filter]=\"false\" >\n            <amexio-data-table-column [width]=\"40\"[data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                       [text]=\"'Name'\"></amexio-data-table-column>\n             <amexio-data-table-column [width]=\"20\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                         [text]=\"'Version'\"></amexio-data-table-column>\n            <amexio-data-table-column [width]=\"40\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                       [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n\n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n            <amexio-vertical-tab-view>\n              <amexio-tab title=\"HTML\" [active]=\"true\">\n                <ng-container *ngIf=\"htmlCode\">\n                  <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                  <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Type Script\">\n                <ng-container *ngIf=\"typeScriptCode\">\n                  <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Dynamic Tab\">\n              <ng-container *ngIf=\"typeScriptCode2\">\n                <prism-block [code]=\"typeScriptCode2\" [language]=\"'typescript'\"></prism-block>\n              </ng-container>\n            </amexio-tab>\n            </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n          <p align=\"center\">Amexio Sandbox</p>\n          <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-horizontal-enhanced-tab?embed=1&file=app/tabs/enhancedtab/enhancedtab.demo.html&view=editor\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n    <!--<amexio-notification [data]=\"copyMsgArray\"></amexio-notification>-->\n\n  "
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], EnhancedTabDemo);
    return EnhancedTabDemo;
}());



/***/ })

}]);
//# sourceMappingURL=layout-tab-enhancedtab-enhancedtab-demo-module.js.map