(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panes-form-html-template-driven-form-demo-module"],{

/***/ "./src/app/panes/form-html/template-driven/employee.registration.ts":
/*!**************************************************************************!*\
  !*** ./src/app/panes/form-html/template-driven/employee.registration.ts ***!
  \**************************************************************************/
/*! exports provided: EmplpoyeeRegistration, Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmplpoyeeRegistration", function() { return EmplpoyeeRegistration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
var EmplpoyeeRegistration = /** @class */ (function () {
    function EmplpoyeeRegistration() {
        this.address = new Address();
    }
    return EmplpoyeeRegistration;
}());

var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());



/***/ }),

/***/ "./src/app/panes/form-html/template-driven/form.demo.html":
/*!****************************************************************!*\
  !*** ./src/app/panes/form-html/template-driven/form.demo.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card header=\"true\">\n    <amexio-header>\n        Form with HTML form tag and amexio inputs components\n    </amexio-header>\n    <amexio-body>\n        <p> Html Form can be used basically for validation purposes\n        </p>\n        <amexio-tab-view>\n            <amexio-tab title=\"Demo\" active=\"true\">\n                <h2>Demo: Form </h2>\n                <amexio-card header=\"true\" footer=\"true\">\n                    <amexio-header>\n                        Simple Form\n                    </amexio-header>\n                    <amexio-body>\n                        <form #empForm=\"ngForm\">\n                            <amexio-row>\n                                <amexio-column [size]=\"6\">\n                                    <amexio-text-input [min-length]=\"3\" [(ngModel)]=\"userRegistration.firstName\" [max-length]=\"5\" [allow-blank]=\"false\" field-label=\"First Name\" name=\"firstName\" place-holder=\"Enter first name\" icon-feedback=\"true\">\n                                    </amexio-text-input>\n                                </amexio-column>\n                                <amexio-column [size]=\"6\">\n                                    <amexio-text-input field-label=\"Last Name\" name=\"lastName\" [(ngModel)]=\"userRegistration.lastName\" place-holder=\"Enter last name(not mandatory)\" allow-blank=\"true\" error-msg=\"Please enter last name\" [min-length]=\"3\" min-error-msg=\"Minimum 3 char required\"\n                                        [max-length]=\"10\" max-error-msg=\"Maximum 10 char allowed\" icon-feedback=\"true\">\n                                    </amexio-text-input>\n                                </amexio-column>\n                            </amexio-row>\n                            <amexio-textarea-input [field-label]=\"'Address'\" name=\"Address\" [(ngModel)]=\"userRegistration.address\" [place-holder]=\"'Enter address'\" [error-msg]=\"'Please enter address'\" [icon-feedback]=\"true\" [rows]=\"'1'\" [columns]=\"'2'\" [allow-blank]=\"false\"\n                                [enable-popover]=\"true\"></amexio-textarea-input>\n                            <amexio-row>\n                                <amexio-column [size]=\"6\">\n                                    <amexio-radio-group [name]=\"'genderList'\" [field-label]=\"'Gender'\" [horizontal]=\"true\" [allow-blank]=\"false\" [(ngModel)]=\"userRegistration.gender\" [data-reader]=\"'response.data'\" [display-field]=\"'gender'\" [value-field]=\"'genderId'\" [data]=\"radioGroupData\">\n                                    </amexio-radio-group>\n                                </amexio-column>\n                                <amexio-column [size]=\"6\">\n                                    <amexio-checkbox-group [field-label]=\"'Hobbies'\" name=\"hobbies\" [(ngModel)]=\"userRegistration.hobbies\" [horizontal]=\"true\" [required]=\"true\"  [data-reader]=\"'response.data'\" [display-field]=\"'hobbieName'\" [value-field]=\"'checked'\" [data]=\"checkboxGroupdata\">\n                                    </amexio-checkbox-group>\n                                </amexio-column>\n                            </amexio-row>\n                            <amexio-row>\n                                <amexio-column [size]=\"6\">\n                                    <amexio-tag-input [data-reader]=\"'response.data'\" [http-url]=\"'assets/data/componentdata/countryy.json'\" [has-label]=\"true\" [http-method]=\"'get'\" [key]=\"'countryName'\" [allow-blank]=\"false\" [display-field]=\"'countryName'\" [field-label]=\"'Having visa'\">\n                                    </amexio-tag-input>\n                                </amexio-column>\n                                <amexio-column [size]=\"6\">\n                                    <amexio-dropdown [place-holder]=\"'Choose City'\" name=\"city\" [(ngModel)]=\"userRegistration.city\" [allow-blank]=\"false\" [data-reader]=\"'response.data'\" [field-label]=\"'City'\" [http-url]=\"'assets/data/componentdata/cities.json'\" [http-method]=\"'get'\" [search]=\"'true'\"\n                                        [display-field]=\"'cityName'\" [value-field]=\"'cityName'\">\n                                    </amexio-dropdown>\n                                </amexio-column>\n                            </amexio-row>\n                            <amexio-row>\n                                <amexio-column size=\"6\">\n                                    <amexio-number-input [name]=\"'age'\" [(ngModel)]=\"userRegistration.age\" [enable-popover]=\"true\" [field-label]=\"'Age'\" [place-holder]=\"'Enter age'\" [allow-blank]=\"false\" [error-msg]=\"'Please enter age'\" [min-value]=\"18\" [min-error-msg]=\"'age can not be less than 18'\"\n                                        [max-value]=\"100\" [max-error-msg]=\"'age can not be greater than 100'\" [icon-feedback]=\"true\">\n                                    </amexio-number-input>\n                                </amexio-column>\n                                <amexio-column [size]=\"6\">\n                                    <amexio-date-time-picker [(ngModel)]=\"userRegistration.dateOfBirth\" name=\"dateOfBirth\" [field-label]=\"'Date Of Birth'\" [time-picker]=\"false\" [date-picker]=\"true\" [required]=\"true\">\n                                    </amexio-date-time-picker>\n                                </amexio-column>\n                            </amexio-row>\n                            <amexio-row>\n                                <amexio-column [size]=\"6\">\n                                    <amexio-email-input [field-label]=\"'Email Id'\" name=\"email\" [(ngModel)]=\"userRegistration.email\" [place-holder]=\"'Enter Email Id'\" [allow-blank]=\"false\" [error-msg]=\"'Please Enter Email Id'\" [enable-popover]=\"true\" [icon-feedback]=\"true\">\n                                    </amexio-email-input>\n                                </amexio-column>\n                                <amexio-column [size]=\"6\">\n                                    <amexio-password-input [enable-popover]=\"true\" [field-label]=\"'Password Input'\" name=\"password\" [(ngModel)]=\"userRegistration.password\" [place-holder]=\"'Enter Password'\" [allow-blank]=\"false\" [error-msg]=\"'Please enter password'\" [min-length]=\"6\" [min-error-msg]=\"'Minimum 6 char required'\"\n                                        [max-length]=\"32\" [max-error-msg]=\"'Maximum 32 char allowed'\" [icon-feedback]=\"true\">\n                                    </amexio-password-input>\n                                </amexio-column>\n                            </amexio-row>\n                            <amexio-checkbox [field-label]=\"'Agree'\" name=\"agree\" [required]=\"true\" [(ngModel)]=\"userRegistration.agree\">\n                            </amexio-checkbox>\n                        </form>\n                    </amexio-body>\n                    <amexio-action>\n                        <amexio-button [disabled]=\"!empForm.valid\" [label]=\"'Save'\" [type]=\"'primary'\" [tooltip]=\"'Save'\" [size]=\"'large'\">\n                        </amexio-button>\n                    </amexio-action>\n                </amexio-card>\n\n                <br>\n                <b style=\"color:green\">Form Model Data : </b> {{empForm.form.value | json}}<br>\n                <b style=\"color:blue\">UI Model Data </b>: {{userRegistration|json}} <br><br>\n                <amexio-card header=\"true\" footer=\"true\">\n                    <amexio-header>\n                        Employee Registration With Address\n                    </amexio-header>\n                    <amexio-body>\n                        <form #empFormWithAddress=\"ngForm\">\n                            <amexio-row>\n                                <amexio-column [size]=\"6\">\n                                    <amexio-text-input [(ngModel)]=\"emplpoyeeRegistration.firstName\" [min-length]=\"3\" [max-length]=\"5\" [allow-blank]=\"false\" field-label=\"First Name\" [name]=\"'Firstname'\" place-holder=\"Enter first name\" icon-feedback=\"true\">\n                                    </amexio-text-input>\n                                </amexio-column>\n                                <amexio-column [size]=\"6\">\n                                    <amexio-text-input field-label=\"Last Name\" [name]=\"'lastName'\" [(ngModel)]=\"emplpoyeeRegistration.lastName\" place-holder=\"Enter last name\" [allow-blank]=\"false\" error-msg=\"Please enter last name\" [min-length]=\"3\" min-error-msg=\"Minimum 3 char required\"\n                                        [max-length]=\"10\" max-error-msg=\"Maximum 10 char allowed\" icon-feedback=\"true\">\n                                    </amexio-text-input>\n                                </amexio-column>\n                            </amexio-row>\n                            <amexio-row>\n                                <amexio-column [size]=\"6\">\n                                    <amexio-radio-group [name]=\"'genderList'\" [field-label]=\"'Gender'\" [horizontal]=\"true\" [allow-blank]=\"false\" [(ngModel)]=\"emplpoyeeRegistration.gender\" [data-reader]=\"'response.data'\" [display-field]=\"'gender'\" [value-field]=\"'genderId'\" [data]=\"radioGroupData\">\n                                    </amexio-radio-group>\n                                </amexio-column>\n                                <amexio-column [size]=\"6\">\n                                    <amexio-dropdown [place-holder]=\"'Choose Department'\" [name]=\"'department'\" [(ngModel)]=\"emplpoyeeRegistration.department\" [allow-blank]=\"false\" [field-label]=\"'Department'\" [search]=\"'true'\" [data]=\"departmentData\" [display-field]=\"'deptName'\" [value-field]=\"'deptId'\">\n                                    </amexio-dropdown>\n                                </amexio-column>\n                            </amexio-row>\n                            <amexio-row>\n                                <amexio-column [size]=\"6\">\n                                    <amexio-email-input [field-label]=\"'Email Id'\" [name]=\"'email'\" [(ngModel)]=\"emplpoyeeRegistration.email\" [place-holder]=\"'Enter Email Id'\" [allow-blank]=\"false\" [error-msg]=\"'Please Enter Email Id'\" [enable-popover]=\"true\" [icon-feedback]=\"true\">\n                                    </amexio-email-input>\n                                </amexio-column>\n                                <amexio-column [size]=\"6\">\n                                    <amexio-date-time-picker [(ngModel)]=\"emplpoyeeRegistration.dateOfBirth\" [name]=\"'dateOfBirth'\" [field-label]=\"'Date Of Birth'\" [time-picker]=\"false\" [date-picker]=\"true\" [required]=\"true\">\n                                    </amexio-date-time-picker>\n                                </amexio-column>\n                            </amexio-row>\n                            <amexio-fieldset ngModelGroup=\"address\" title=\"Address\">\n                                <amexio-row>\n                                    <amexio-column [size]=\"6\">\n                                        <amexio-text-input field-label=\"Street\" [name]=\"'street'\" [(ngModel)]=\"emplpoyeeRegistration.address.street\" place-holder=\"Enter street\" enable-popover=\"true\" [min-length]=\"3\" min-error-msg=\"Minimum 3 char required\" [allow-blank]=\"false\" error-msg=\"Please enter street\"\n                                            icon-feedback=\"true\">\n                                        </amexio-text-input>\n                                    </amexio-column>\n                                    <amexio-column [size]=\"6\">\n                                        <amexio-text-input field-label=\"city\" [name]=\"'city'\" [(ngModel)]=\"emplpoyeeRegistration.address.city\" [min-length]=\"3\" enable-popover=\"true\" min-error-msg=\"Minimum 3 char required\" place-holder=\"Enter city\" [allow-blank]=\"false\" error-msg=\"Please enter city\"\n                                            icon-feedback=\"true\">\n                                        </amexio-text-input>\n                                    </amexio-column>\n                                </amexio-row>\n                                <amexio-row>\n                                    <amexio-column [size]=\"6\">\n                                        <amexio-text-input field-label=\"pincode\" [name]=\"'pincode'\" [(ngModel)]=\"emplpoyeeRegistration.address.pincode\" [min-length]=\"3\" enable-popover=\"true\" min-error-msg=\"Minimum 3 char required\" place-holder=\"Enter pincode\" [allow-blank]=\"false\" error-msg=\"Please enter pincode\"\n                                            icon-feedback=\"true\">\n                                        </amexio-text-input>\n                                    </amexio-column>\n                                </amexio-row>\n                            </amexio-fieldset>\n                        </form>\n                    </amexio-body>\n                    <amexio-action>\n                        <amexio-button [disabled]=\"!empFormWithAddress.valid\" [label]=\"'Save'\" [type]=\"'primary'\" [tooltip]=\"'Save'\" [size]=\"'large'\">\n                        </amexio-button>\n                    </amexio-action>\n                </amexio-card>\n\n                <br>\n                <b style=\"color:green\">Form Model Data : </b> {{empFormWithAddress.form.value | json}}<br>\n                <b style=\"color:blue\">UI Model Data : </b> {{emplpoyeeRegistration | json}} <br>\n\n\n            </amexio-tab>\n            <amexio-tab title=\"Source\">\n                <div style=\"overflow-y: scroll\">\n                    <div style=\"overflow-y: scroll\">\n                        <amexio-vertical-tab-view>\n                            <amexio-tab title=\"HTML\" [active]=\"true\">\n                                <ng-container *ngIf=\"htmlCode\">\n                                    <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                                    <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                                </ng-container>\n                            </amexio-tab>\n                            <amexio-tab title=\"Type Script\">\n                                <ng-container *ngIf=\"typeScriptCode\">\n                                    <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                                </ng-container>\n                            </amexio-tab>\n                        </amexio-vertical-tab-view>\n                    </div>\n                </div>\n\n            </amexio-tab>\n            <amexio-tab title=\"Live\">\n                <p align=\"center\">Amexio Sandbox</p>\n                <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v42-form?embed=1&file=app/forms/form/form.demo.html&view=editor\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n            </amexio-tab>\n        </amexio-tab-view>\n    </amexio-body>\n</amexio-card>"

/***/ }),

/***/ "./src/app/panes/form-html/template-driven/form.demo.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/panes/form-html/template-driven/form.demo.module.ts ***!
  \*********************************************************************/
/*! exports provided: HtmlFormDemoModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlFormDemoModule", function() { return HtmlFormDemoModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _form_demo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form.demo */ "./src/app/panes/form-html/template-driven/form.demo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by anaghak07 on 16/4/18.
 */








var routes = [
    { path: '', component: _form_demo__WEBPACK_IMPORTED_MODULE_7__["HtmlFormDemoComponent"] },
];
var HtmlFormDemoModule = /** @class */ (function () {
    function HtmlFormDemoModule() {
    }
    HtmlFormDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioWidgetModule"], _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [_form_demo__WEBPACK_IMPORTED_MODULE_7__["HtmlFormDemoComponent"]]
        })
    ], HtmlFormDemoModule);
    return HtmlFormDemoModule;
}());

var routedComponents = [_form_demo__WEBPACK_IMPORTED_MODULE_7__["HtmlFormDemoComponent"]];


/***/ }),

/***/ "./src/app/panes/form-html/template-driven/form.demo.ts":
/*!**************************************************************!*\
  !*** ./src/app/panes/form-html/template-driven/form.demo.ts ***!
  \**************************************************************/
/*! exports provided: HtmlFormDemoComponent, UserRegistration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlFormDemoComponent", function() { return HtmlFormDemoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistration", function() { return UserRegistration; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _employee_registration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee.registration */ "./src/app/panes/form-html/template-driven/employee.registration.ts");
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
 * Created by anaghak07 on 16/4/18.
 */



var HtmlFormDemoComponent = /** @class */ (function () {
    function HtmlFormDemoComponent(http) {
        this.http = http;
        this.currentDate = new Date();
        this.userRegistration = new UserRegistration();
        this.emplpoyeeRegistration = new _employee_registration__WEBPACK_IMPORTED_MODULE_2__["EmplpoyeeRegistration"]();
        this.departmentData = [{
                'deptId': '1',
                'deptName': 'Engineering'
            }, {
                'deptId': '2',
                'deptName': 'Tech Suppport'
            }, {
                'deptId': '3',
                'deptName': 'HR'
            }];
        this.checkboxGroupdata = {
            response: {
                data: [{
                        hobbieName: 'Learning',
                        checked: false,
                        disabled: false
                    }, {
                        hobbieName: 'Shopping',
                        checked: false,
                        disabled: false
                    }, {
                        hobbieName: 'Fishing',
                        checked: false,
                        disabled: false
                    }
                ]
            }
        };
        this.payment = [
            { "label": "Open With", "icon": "fa fa-arrows-alt " },
            { "label": "Make a Copy", "icon": "fa fa-files-o", "separator": "true" },
            { "label": "Refresh", "icon": "fa fa-refresh" },
            { "label": "Add Star", "icon": "fa fa-star" },
            { "label": "download", "icon": "fa fa-download" },
            { "label": "bookmark", "icon": "fa fa-bookmark" }
        ];
        this.radioGroupData = {
            response: {
                data: [{
                        gender: 'Male',
                        genderId: 'male'
                    }, {
                        gender: 'Female',
                        genderId: 'female',
                    },
                ]
            }
        };
        this.getHtmlAndTypeScriptCode();
    }
    HtmlFormDemoComponent.prototype.getDta = function () {
        var _this = this;
        this.asyncFlag = true;
        setTimeout(function () {
            _this.asyncFlag = false;
        }, 3000);
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    HtmlFormDemoComponent.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/pane/html-form/form/form.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/pane/html-form/form/form.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    HtmlFormDemoComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    HtmlFormDemoComponent.prototype.refreshData = function () {
        this.refreshDialogue = !this.refreshDialogue;
    };
    HtmlFormDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-demo',
            template: __webpack_require__(/*! ./form.demo.html */ "./src/app/panes/form-html/template-driven/form.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HtmlFormDemoComponent);
    return HtmlFormDemoComponent;
}());

var UserRegistration = /** @class */ (function () {
    function UserRegistration() {
        this.dateOfBirth = new Date();
        this.hobbies = [];
    }
    return UserRegistration;
}());



/***/ })

}]);
//# sourceMappingURL=panes-form-html-template-driven-form-demo-module.js.map