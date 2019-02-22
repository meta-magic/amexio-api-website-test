(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Forms-forms-module"],{

/***/ "./src/app/Forms/form-html/reactive-forms/reactiveform.demo.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/Forms/form-html/reactive-forms/reactiveform.demo.component.ts ***!
  \*******************************************************************************/
/*! exports provided: HtmlReactiveFormComponent, Address, EmplpoyeeRegistration, Registration, DynamicFormsReg, Phone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlReactiveFormComponent", function() { return HtmlReactiveFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmplpoyeeRegistration", function() { return EmplpoyeeRegistration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Registration", function() { return Registration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormsReg", function() { return DynamicFormsReg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phone", function() { return Phone; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
/**
 * Created by kedar kokil on 22/11/18.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HtmlReactiveFormComponent = /** @class */ (function () {
    function HtmlReactiveFormComponent(http, fb) {
        this.http = http;
        this.fb = fb;
        this.copyMsgArray = [];
        this.radioGroupData = [];
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_3__["ComponentDataStructure"]();
        this.address = new Address();
        this.emplpoyeeRegistration = new EmplpoyeeRegistration();
        this.registration1 = new Registration();
        this.registration = new Registration();
        this.dynamicFormsReg = new DynamicFormsReg();
        this.radioGroupData = [{
                genderName: 'Male',
                genderId: 'male'
            }, {
                genderName: 'Female',
                genderId: 'female'
            }];
    }
    HtmlReactiveFormComponent.prototype.ngOnInit = function () {
        this.createCustomSourceData();
        this.employeeForm = this.fb.group({
            FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            LastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            Age: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(18), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100)]],
            Gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Agree: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]]
        });
        //HERE EMP FORM VALIDATION ADDED
        this.employeeFormInsideForm = this.fb.group({
            FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            LastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            Age: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(18), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100)]],
            Gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Agree: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]]
        });
        //HERE INNER ADDRESS FORM VALIDATION ADDED
        this.addressForm = this.fb.group({
            TemporaryAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            PermanentAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        // froms inside group
        this.employeeFormGroup = this.fb.group({
            FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            LastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            Age: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(18), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100)]],
            Gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Agree: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]],
            AddressFormGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                temporaryAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                permanentAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            })
        });
        this.dynamicEmployeeForm = this.fb.group({
            FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            LastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            Age: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(18), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100)]],
            Gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Agree: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]],
            phones: this.fb.array([])
        });
    };
    HtmlReactiveFormComponent.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Reactive  Forms With HTML Form Tag And Amexio Inputs Components ';
        this.customSourceData.description = 'Reactive Forms can be used basically for validation purposes and below examples show reactive forms with amexio inputs components';
        this.customSourceData.sourceMetadata.htmlUrl = 'pane/html-form/reactiveform/form.html';
        this.customSourceData.sourceMetadata.tsUrl = 'pane/html-form/reactiveform/form.text';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/simple-reactive-forms-tu9tkf?file=src%2Fapp%2Famexio-reactive-forms%2Famexio-reactive-forms%2Famexio-reactive-forms.component.html';
        this.customSourceData.liveMetadata.stackblitzUrl1 = 'https://stackblitz.com/edit/reactive-forms-within-forms-wxnrvo?embed=1&file=src/app/app.component.ts';
        this.customSourceData.liveMetadata.stackblitzUrl2 = 'https://stackblitz.com/edit/amexio-reactive-form-group-inside-form-usemf8?embed=1&file=src/app/app.component.ts';
    };
    Object.defineProperty(HtmlReactiveFormComponent.prototype, "phoneForms", {
        // GET PHONE FORMS
        get: function () {
            return this.dynamicEmployeeForm.get('phones');
        },
        enumerable: true,
        configurable: true
    });
    // ADD PHONE NUMBER
    HtmlReactiveFormComponent.prototype.addPhone = function () {
        var phone = this.fb.group({
            phoneLabel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            countryCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9 ]*')]]
        });
        this.phoneForms.push(phone);
    };
    // THIS EVENT FIRE WHEN USER ADD PHONE NUMBER
    HtmlReactiveFormComponent.prototype.addPhoneClick = function () {
        this.enableFieldSet = true;
        this.dynamicFormsReg.add(new Phone());
        this.addPhone();
    };
    //THIS METHOD IS USED FOR MAKING PERMANENT ADDRESS AS TEMP ADDRESS BASE UPON CHECKED
    HtmlReactiveFormComponent.prototype.onCheckClick1 = function (data) {
        if (data) {
            this.registration.address.perAddress = this.registration.address.tempAddress;
        }
    };
    HtmlReactiveFormComponent.prototype.onCheckClick2 = function (data) {
        if (data) {
            this.registration1.address.perAddress = this.registration1.address.tempAddress;
        }
    };
    HtmlReactiveFormComponent.prototype.onDeleteClick = function (index) {
        this.phoneForms.removeAt(index);
    };
    HtmlReactiveFormComponent.prototype.onAddClick = function (data) {
        this.dynamicFormsReg.add(data);
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    HtmlReactiveFormComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    HtmlReactiveFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'reactive-form',
            template: __webpack_require__(/*! ./reactiveform.demo.html */ "./src/app/Forms/form-html/reactive-forms/reactiveform.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], HtmlReactiveFormComponent);
    return HtmlReactiveFormComponent;
}());

//THIS MODEL CLASS IS USED FOR BINDING TO EMPLOYEE ADDRESS
var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());

var EmplpoyeeRegistration = /** @class */ (function () {
    function EmplpoyeeRegistration() {
    }
    return EmplpoyeeRegistration;
}());

var Registration = /** @class */ (function (_super) {
    __extends(Registration, _super);
    function Registration() {
        var _this = _super.call(this) || this;
        _this.address = new Address();
        return _this;
    }
    return Registration;
}(EmplpoyeeRegistration));

var DynamicFormsReg = /** @class */ (function (_super) {
    __extends(DynamicFormsReg, _super);
    function DynamicFormsReg() {
        var _this = _super.call(this) || this;
        _this.phones = [];
        return _this;
    }
    DynamicFormsReg.prototype.add = function (phone) {
        this.phones.push(phone);
    };
    return DynamicFormsReg;
}(EmplpoyeeRegistration));

var Phone = /** @class */ (function () {
    function Phone() {
    }
    return Phone;
}());



/***/ }),

/***/ "./src/app/Forms/form-html/reactive-forms/reactiveform.demo.html":
/*!***********************************************************************!*\
  !*** ./src/app/Forms/form-html/reactive-forms/reactiveform.demo.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \n  \n <amexio-api-structure [custom-com-data]=\"customSourceData\" >\n    <amexio-api-demo>\n    \n  <amexio-card [header]=\"true\" [footer]=\"true\" [footer-align]=\"'right'\">\n        <amexio-header>\n            Simple Reactive Forms\n        </amexio-header>\n        <amexio-body>\n            <form [formGroup]=\"employeeForm\">\n                <amexio-row>\n                    <amexio-column size=\"6\">\n                        <amexio-text-input formControlName=\"FirstName\" [(ngModel)]=\"emplpoyeeRegistration.firstName\" [field-label]=\"'First Name'\" [allow-blank]=\"true\" [error-msg]=\"'Please enter valid First Name'\" [enable-popover]=\"true\" [place-holder]=\"'Please enter first name'\"\n                            [min-length]=\"2\"  [icon-feedback]=\"false\" [min-error-msg]=\"'Minimum 2 char allowed'\" [max-error-msg]=\"'Maximum 20 char allowed'\" [max-length]=\"20\">\n                        </amexio-text-input>\n                    </amexio-column>\n                    <amexio-column size=\"6\">\n                        <amexio-text-input formControlName=\"LastName\" [(ngModel)]=\"emplpoyeeRegistration.lastName\" [field-label]=\"'Last Name'\" [place-holder]=\"'Please enter last name'\" [allow-blank]=\"true\" [error-msg]=\"'errorMsg'\" [enable-popover]=\"true\" [min-length]=\"2\" [min-error-msg]=\"'Minimum 2 char allowed'\"\n                            [max-error-msg]=\"'Maximum 20 char allowed'\" [max-length]=\"20\">\n                            [icon-feedback]=\"true\" >\n                        </amexio-text-input>\n                    </amexio-column>\n                </amexio-row>\n                <amexio-row>\n                    <amexio-column size=\"6\">\n                        <amexio-email-input formControlName=\"Email\" [(ngModel)]=\"emplpoyeeRegistration.email\" [field-label]=\"'Email Id'\" [place-holder]=\"'Please enter Email Id'\" [allow-blank]=\"false\" [error-msg]=\"'Please Enter Email Id'\" [enable-popover]=\"true\" [icon-feedback]=\"true\">\n                        </amexio-email-input>\n                    </amexio-column>\n                    <amexio-column size=\"6\">\n                        <amexio-number-input formControlName=\"Age\" [(ngModel)]=\"emplpoyeeRegistration.age\" [enable-popover]=\"true\" [field-label]=\"'Age'\" [place-holder]=\"'Enter age'\" [error-msg]=\"'Please enter age'\" [min-value]=\"18\" [min-error-msg]=\"'age can not be less than 18'\"\n                            [max-value]=\"100\" [max-error-msg]=\"'age can not be greater than 100'\" [icon-feedback]=\"true\">\n                        </amexio-number-input>\n                    </amexio-column>\n                </amexio-row>\n\n                <amexio-row>\n                    <amexio-column size=\"6\">\n                        <amexio-radio-group formControlName=\"Gender\" [(ngModel)]=\"emplpoyeeRegistration.gender\" [field-label]=\"'Gender'\" [horizontal]=\"true\" [display-field]=\"'genderName'\" [value-field]=\"'genderId'\" [data]=\"radioGroupData\">\n                        </amexio-radio-group>\n                    </amexio-column>\n                    <amexio-column size=\"6\">\n                        <amexio-checkbox formControlName=\"Agree\" [(ngModel)]=\"emplpoyeeRegistration.agree\" [field-label]=\"'Agree'\">\n                        </amexio-checkbox>\n                    </amexio-column>\n                </amexio-row>\n            </form>\n        </amexio-body>\n        <amexio-action>\n            <amexio-button [label]=\"'Save'\" [disabled]=\"!employeeForm.valid\" [type]=\"'green'\" [tooltip]=\"'Save Form'\">\n            </amexio-button>\n        </amexio-action>\n    </amexio-card>\n    <br>\n    <b style=\"color:green\">Form Model Data : </b> {{employeeForm.value | json}}<br>\n    <b style=\"color:blue\">UI Model Data </b>: {{emplpoyeeRegistration|json}} <br>\n\n    <!-- forms within forms -->\n    <br>\n    <amexio-card [header]=\"true\" [footer]=\"true\" [footer-align]=\"'right'\">\n        <amexio-header>\n            Reactive Forms Within Forms\n        </amexio-header>\n        <amexio-body>\n            <form [formGroup]=\"employeeFormInsideForm\">\n                <amexio-row>\n                    <amexio-column size=\"6\">\n                        <amexio-text-input formControlName=\"FirstName\" [(ngModel)]=\"registration.firstName\" [field-label]=\"'First Name'\" [allow-blank]=\"true\" [error-msg]=\"'Please enter valid First Name'\" [enable-popover]=\"true\" [place-holder]=\"'Please enter first name'\" [min-length]=\"2\"\n                            [icon-feedback]=\"false\" [min-error-msg]=\"'Minimum 2 char allowed'\" [max-error-msg]=\"'Maximum 20 char allowed'\" [max-length]=\"20\">\n                        </amexio-text-input>\n                    </amexio-column>\n                    <amexio-column size=\"6\">\n                        <amexio-text-input formControlName=\"LastName\" [(ngModel)]=\"registration.lastName\" [field-label]=\"'Last Name'\" [place-holder]=\"'Please enter last name'\" [allow-blank]=\"true\" [error-msg]=\"'errorMsg'\" [enable-popover]=\"true\" [min-length]=\"2\" [min-error-msg]=\"'Minimum 2 char allowed'\"\n                            [max-error-msg]=\"'Maximum 20 char allowed'\" [max-length]=\"20\">\n                            [icon-feedback]=\"true\" >\n                        </amexio-text-input>\n                    </amexio-column>\n                </amexio-row>\n                <amexio-row>\n                    <amexio-column size=\"6\">\n                        <amexio-email-input formControlName=\"Email\" [(ngModel)]=\"registration.email\" [field-label]=\"'Email Id'\" [place-holder]=\"'Please enter Email Id'\" [allow-blank]=\"false\" [error-msg]=\"'Please Enter Email Id'\" [enable-popover]=\"true\" [icon-feedback]=\"true\">\n                        </amexio-email-input>\n                    </amexio-column>\n                    <amexio-column size=\"6\">\n                        <amexio-number-input formControlName=\"Age\" [(ngModel)]=\"registration.age\" [enable-popover]=\"true\" [field-label]=\"'Age'\" [place-holder]=\"'Enter age'\" [error-msg]=\"'Please enter age'\" [min-value]=\"18\" [min-error-msg]=\"'age can not be less than 18'\" [max-value]=\"100\"\n                            [max-error-msg]=\"'age can not be greater than 100'\" [icon-feedback]=\"true\">\n                        </amexio-number-input>\n                    </amexio-column>\n                </amexio-row>\n\n                <amexio-row>\n                    <amexio-column size=\"12\">\n                        <amexio-fieldset [collapsible]=\"true\" title=\"Address\">\n                            <form [formGroup]=\"addressForm\">\n                                <amexio-row>\n                                    <amexio-column size=\"5\">\n                                        <amexio-textarea-input formControlName=\"TemporaryAddress\" [enable-popover]=\"true\" [field-label]=\"'Temporary Address'\" [place-holder]=\"'Temporary address'\" [allow-blank]=\"false\" [error-msg]=\"'Please enter temporary address'\" [(ngModel)]=\"registration.address.tempAddress\"\n                                            [icon-feedback]=\"true\" [rows]=\"'2'\" [columns]=\"'1'\">\n                                        </amexio-textarea-input>\n                                    </amexio-column>\n                                    <amexio-column size=\"2\">\n                                        <amexio-checkbox [field-label]=\"'Permanent address same as temporary address'\" (onSelection)=\"onCheckClick1($event)\">\n                                        </amexio-checkbox>\n\n                                    </amexio-column>\n                                    <amexio-column size=\"5\">\n                                        <amexio-textarea-input formControlName=\"PermanentAddress\" [enable-popover]=\"true\" [field-label]=\"'Permanent Address'\" [place-holder]=\"'Permanent address'\" [allow-blank]=\"false\" [error-msg]=\"'Please enter permanent address'\" [(ngModel)]=\"registration.address.perAddress\"\n                                            [icon-feedback]=\"true\" [rows]=\"'2'\" [columns]=\"'1'\">\n                                        </amexio-textarea-input>\n                                    </amexio-column>\n                                </amexio-row>\n\n                            </form>\n                            <amexio-row>\n                                <amexio-column size=\"12\">\n                                    <amexio-button [label]=\"'Add Address'\" [disabled]=\"!addressForm.valid\" [type]=\"'green'\" [tooltip]=\"'Save Form'\">\n                                    </amexio-button>\n                                </amexio-column>\n                            </amexio-row>\n                        </amexio-fieldset>\n\n                    </amexio-column>\n                </amexio-row>\n                <amexio-row>\n                    <amexio-column size=\"6\">\n                        <amexio-radio-group formControlName=\"Gender\" [(ngModel)]=\"registration.gender\" [field-label]=\"'Gender'\" [horizontal]=\"true\" [display-field]=\"'genderName'\" [value-field]=\"'genderId'\" [data]=\"radioGroupData\">\n                        </amexio-radio-group>\n                    </amexio-column>\n                    <amexio-column size=\"6\">\n                        <amexio-checkbox formControlName=\"Agree\" [(ngModel)]=\"registration.agree\" [field-label]=\"'Agree'\">\n                        </amexio-checkbox>\n                    </amexio-column>\n                </amexio-row>\n            </form>\n        </amexio-body>\n        <amexio-action>\n            <amexio-button [label]=\"'Save'\" [disabled]=\"!employeeFormInsideForm.valid\" [type]=\"'green'\" [tooltip]=\"'Save Form'\">\n            </amexio-button>\n        </amexio-action>\n    </amexio-card>\n    <br>\n    <b style=\"color:green\">Form Model Data : </b> {{employeeFormInsideForm.value | json}}<br>\n    <b style=\"color:green\">Inner Form Model Data : </b> {{addressForm.value | json}}<br>\n    <b style=\"color:blue\">UI Model Data </b>: {{registration|json}} <br>\n    <br>\n\n    <!--  forms group inside forms -->\n\n    <amexio-card [header]=\"true\" [footer]=\"true\" [footer-align]=\"'right'\">\n        <amexio-header>\n            Reactive Forms Group Inside Forms\n        </amexio-header>\n        <amexio-body>\n            <form [formGroup]=\"employeeFormGroup\">\n                <amexio-row>\n                    <amexio-column size=\"6\">\n                        <amexio-text-input formControlName=\"FirstName\" [(ngModel)]=\"registration1.firstName\" [field-label]=\"'First Name'\" [allow-blank]=\"true\" [error-msg]=\"'Please enter valid First Name'\" [enable-popover]=\"true\" [place-holder]=\"'Please enter first name'\" [min-length]=\"2\"\n                             [icon-feedback]=\"false\" [min-error-msg]=\"'Minimum 2 char allowed'\" [max-error-msg]=\"'Maximum 20 char allowed'\" [max-length]=\"20\">\n                        </amexio-text-input>\n                    </amexio-column>\n                    <amexio-column size=\"6\">\n                        <amexio-text-input formControlName=\"LastName\" [(ngModel)]=\"registration1.lastName\" [field-label]=\"'Last Name'\" [place-holder]=\"'Please enter last name'\" [allow-blank]=\"true\" [error-msg]=\"'errorMsg'\" [enable-popover]=\"true\" [min-length]=\"2\" [min-error-msg]=\"'Minimum 2 char allowed'\"\n                            [max-error-msg]=\"'Maximum 20 char allowed'\" [max-length]=\"20\">\n                            [icon-feedback]=\"true\" >\n                        </amexio-text-input>\n                    </amexio-column>\n                </amexio-row>\n                <amexio-row>\n                    <amexio-column size=\"6\">\n                        <amexio-email-input formControlName=\"Email\" [(ngModel)]=\"registration1.email\" [field-label]=\"'Email Id'\" [place-holder]=\"'Please enter Email Id'\" [allow-blank]=\"false\" [error-msg]=\"'Please Enter Email Id'\" [enable-popover]=\"true\" [icon-feedback]=\"true\">\n                        </amexio-email-input>\n                    </amexio-column>\n                    <amexio-column size=\"6\">\n                        <amexio-number-input formControlName=\"Age\" [(ngModel)]=\"registration1.age\" [enable-popover]=\"true\" [field-label]=\"'Age'\" [place-holder]=\"'Enter age'\" [error-msg]=\"'Please enter age'\" [min-value]=\"18\" [min-error-msg]=\"'age can not be less than 18'\" [max-value]=\"100\"\n                            [max-error-msg]=\"'age can not be greater than 100'\" [icon-feedback]=\"true\">\n                        </amexio-number-input>\n                    </amexio-column>\n                </amexio-row>\n\n                <amexio-row>\n                    <amexio-column size=\"12\">\n                        <amexio-fieldset [collapsible]=\"true\" title=\"Address\">\n                            <form formGroupName=\"AddressFormGroup\">\n                                <amexio-row>\n                                    <amexio-column size=\"5\">\n                                        <amexio-textarea-input formControlName=\"temporaryAddress\" [enable-popover]=\"true\" [(ngModel)]=\"registration1.address.tempAddress\" [field-label]=\"'Temporary Address'\" [place-holder]=\"'Temporary Address'\" [allow-blank]=\"false\" [error-msg]=\"'Please enter temporary address'\"\n                                            [icon-feedback]=\"true\" [rows]=\"'2'\" [columns]=\"'1'\">\n                                        </amexio-textarea-input>\n                                    </amexio-column>\n                                    <amexio-column size=\"2\">\n                                        <amexio-checkbox [field-label]=\"'Permanent address same as temporary address'\" (onSelection)=\"onCheckClick2($event)\">\n                                        </amexio-checkbox>\n\n                                    </amexio-column>\n                                    <amexio-column size=\"5\">\n                                        <amexio-textarea-input formControlName=\"permanentAddress\" [(ngModel)]=\"registration1.address.perAddress\" [enable-popover]=\"true\" [field-label]=\"'Permanent Address'\" [place-holder]=\"'Permanent Address'\" [allow-blank]=\"false\" [error-msg]=\"'Please enter permanent address'\"\n                                            [icon-feedback]=\"true\" [rows]=\"'2'\" [columns]=\"'1'\">\n                                        </amexio-textarea-input>\n                                    </amexio-column>\n                                </amexio-row>\n                            </form>\n                        </amexio-fieldset>\n\n                    </amexio-column>\n                </amexio-row>\n                <amexio-row>\n                    <amexio-column size=\"6\">\n                        <amexio-radio-group formControlName=\"Gender\" [(ngModel)]=\"registration1.gender\" [field-label]=\"'Gender'\" [horizontal]=\"true\" [display-field]=\"'genderName'\" [value-field]=\"'genderId'\" [data]=\"radioGroupData\">\n                        </amexio-radio-group>\n                    </amexio-column>\n                    <amexio-column size=\"6\">\n                        <amexio-checkbox formControlName=\"Agree\" [(ngModel)]=\"registration1.agree\" [field-label]=\"'Agree'\">\n                        </amexio-checkbox>\n                    </amexio-column>\n                </amexio-row>\n            </form>\n        </amexio-body>\n        <amexio-action>\n            <amexio-button [label]=\"'Save'\" [disabled]=\"!employeeFormGroup.valid\" [type]=\"'green'\" [tooltip]=\"'Save Form'\">\n            </amexio-button>\n        </amexio-action>\n    </amexio-card>\n    <br>\n    <b style=\"color:green\">Form Model Data : </b> {{employeeFormGroup.value | json}}<br>\n    <b style=\"color:blue\">UI Model Data </b>: {{registration1|json}} <br>\n    <br>\n    <!-- Reactive Form with Dynamic Forms -->\n\n    <amexio-card [header]=\"true\" [footer]=\"true\" [footer-align]=\"'right'\">\n        <amexio-header>\n            Reactive Form with Dynamic Forms\n        </amexio-header>\n        <amexio-body>\n            <form [formGroup]=\"dynamicEmployeeForm\">\n                <amexio-row>\n                    <amexio-column size=\"6\">\n                        <amexio-text-input formControlName=\"FirstName\" [(ngModel)]=\"dynamicFormsReg.firstName\" [field-label]=\"'First Name'\" [allow-blank]=\"true\" [error-msg]=\"'Please enter valid First Name'\" [enable-popover]=\"true\" [place-holder]=\"'Please enter first name'\" [min-length]=\"2\"\n                             [icon-feedback]=\"false\" [min-error-msg]=\"'Minimum 2 char allowed'\" [max-error-msg]=\"'Maximum 20 char allowed'\" [max-length]=\"20\">\n                        </amexio-text-input>\n                    </amexio-column>\n                    <amexio-column size=\"6\">\n                        <amexio-text-input formControlName=\"LastName\" [(ngModel)]=\"dynamicFormsReg.lastName\" [field-label]=\"'Last Name'\" [place-holder]=\"'Please enter last name'\" [allow-blank]=\"true\" [error-msg]=\"'errorMsg'\" [enable-popover]=\"true\" [min-length]=\"2\" [min-error-msg]=\"'Minimum 2 char allowed'\"\n                            [max-error-msg]=\"'Maximum 20 char allowed'\" [max-length]=\"20\">\n                            [icon-feedback]=\"true\" >\n                        </amexio-text-input>\n                    </amexio-column>\n                </amexio-row>\n                <amexio-row>\n                    <amexio-column size=\"6\">\n                        <amexio-email-input formControlName=\"Email\" [(ngModel)]=\"dynamicFormsReg.email\" [field-label]=\"'Email Id'\" [place-holder]=\"'Please enter Email Id'\" [allow-blank]=\"false\" [error-msg]=\"'Please Enter Email Id'\" [enable-popover]=\"true\" [icon-feedback]=\"true\">\n                        </amexio-email-input>\n                    </amexio-column>\n                    <amexio-column size=\"6\">\n                        <amexio-number-input formControlName=\"Age\" [(ngModel)]=\"dynamicFormsReg.age\" [enable-popover]=\"true\" [field-label]=\"'Age'\" [place-holder]=\"'Enter age'\" [error-msg]=\"'Please enter age'\" [min-value]=\"18\" [min-error-msg]=\"'age can not be less than 18'\" [max-value]=\"100\"\n                            [max-error-msg]=\"'age can not be greater than 100'\" [icon-feedback]=\"true\">\n                        </amexio-number-input>\n                    </amexio-column>\n                </amexio-row>\n                <amexio-row>\n                    <amexio-column size=\"6\">\n                        <amexio-button [label]=\"'Add Phone'\" [type]=\"'green'\" [tooltip]=\"'Add Phone'\" (onClick)=\"addPhoneClick()\">\n                        </amexio-button>\n                    </amexio-column>\n                </amexio-row>\n                <amexio-fieldset *ngIf=\"enableFieldSet\" formArrayName=\"phones\" [collapsible]=\"false\" [title]=\"'Add Phone Numbers'\">\n                    <amexio-row *ngFor=\"let phone of phoneForms.controls;let i=index\" [formGroupName]=\"i\">\n                        <amexio-column size=\"3\">\n                            <amexio-text-input formControlName=\"phoneLabel\" [(ngModel)]=\"phone.phoneLabel\" enable-popover=\"true\" field-label=\"Phone Label\" name=\"phoneLabel\" error-msg=\"Please add phone label\" place-holder=\"Enter phone label\" allow-blank=\"false\" min-length=\"3\" min-error-msg=\"Minimum 3 char required\"\n                                max-length=\"10\" max-error-msg=\"Maximum 10 char allowed\" icon-feedback=\"true\">\n                            </amexio-text-input>\n                        </amexio-column>\n                        <amexio-column size=\"3\">\n                            <amexio-text-input formControlName=\"countryCode\" [(ngModel)]=\"phone.countryCode\" enable-popover=\"true\" field-label=\"Country Code\" name=\"countryCode\" error-msg=\"Please add country code\" place-holder=\"Enter country code\" allow-blank=\"false\" min-length=\"1\"\n                                min-error-msg=\"Minimum 1 char required\" max-length=\"10\" max-error-msg=\"Maximum 10 char allowed\" icon-feedback=\"true\">\n                            </amexio-text-input>\n                        </amexio-column>\n                        <amexio-column size=\"3\">\n                            <amexio-text-input formControlName=\"phoneNumber\" [(ngModel)]=\"phone.phoneNumber\" enable-popover=\"true\" field-label=\"Phone Number\" name=\"phoneNumber\" error-msg=\"Please add phone number\" place-holder=\"Enter phone number\" allow-blank=\"false\" min-length=\"8\"\n                                min-error-msg=\"Minimum 8 char required\" max-length=\"10\" max-error-msg=\"Maximum 10 char allowed\" icon-feedback=\"true\">\n                            </amexio-text-input>\n                        </amexio-column>\n                        <amexio-column size=\"3\">\n                            <!-- <amexio-button  [label]=\"'Add'\"  [type]=\"'green'\" [tooltip]=\"'add'\"  [icon]=\"'fa fa-check'\" (onClick)=\"addClick({'phoneLabel':phone.phoneLabel,'countryCode':phone.countryCode,'phoneNumber':phone.phoneNumber})\">\n                                </amexio-button> -->\n                            <amexio-button [label]=\"'Delete'\" [type]=\"'red'\" [tooltip]=\"'delete'\" [icon]=\"'fa fa-trash'\" (onClick)=\"onDeleteClick(i)\">\n                            </amexio-button>\n                        </amexio-column>\n                    </amexio-row>\n                </amexio-fieldset>\n                <amexio-row>\n                    <amexio-column size=\"6\">\n                        <amexio-radio-group formControlName=\"Gender\" [(ngModel)]=\"dynamicFormsReg.gender\" [field-label]=\"'Gender'\" [horizontal]=\"true\" [display-field]=\"'genderName'\" [value-field]=\"'genderId'\" [data]=\"radioGroupData\">\n                        </amexio-radio-group>\n                    </amexio-column>\n                    <amexio-column size=\"6\">\n                        <amexio-checkbox formControlName=\"Agree\" [(ngModel)]=\"dynamicFormsReg.agree\" [field-label]=\"'Agree'\">\n                        </amexio-checkbox>\n                    </amexio-column>\n                </amexio-row>\n\n            </form>\n        </amexio-body>\n        <amexio-action>\n            <amexio-button [label]=\"'Save'\" [disabled]=\"!dynamicEmployeeForm.valid\" [type]=\"'green'\" [tooltip]=\"'Save Form'\">\n            </amexio-button>\n        </amexio-action>\n    </amexio-card>\n    <br>\n    <b style=\"color:green\">Form Model Data : </b> {{dynamicEmployeeForm.value | json}}<br>\n    <!-- <b style=\"color:blue\">UI Model Data </b>: {{dynamicFormsReg|json}} <br> -->\n\n    <br>\n\n</amexio-api-demo>\n</amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/Forms/form-html/template-driven/employee.registration.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Forms/form-html/template-driven/employee.registration.ts ***!
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

/***/ "./src/app/Forms/form-html/template-driven/form.demo.html":
/*!****************************************************************!*\
  !*** ./src/app/Forms/form-html/template-driven/form.demo.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   \n   \n <amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/forms/amexioforms.json'\">\n    <amexio-api-demo>\n   \n   <h2>Demo: Form </h2>\n    <amexio-card header=\"true\" footer=\"true\">\n        <amexio-header>\n            Simple Form\n        </amexio-header>\n        <amexio-body>\n            <form #empForm=\"ngForm\">\n                <amexio-row>\n                    <amexio-column [size]=\"6\">\n                        <amexio-text-input [min-length]=\"3\" [(ngModel)]=\"userRegistration.firstName\" [max-length]=\"5\" [allow-blank]=\"false\" field-label=\"First Name\" name=\"firstName\" place-holder=\"Enter first name\" icon-feedback=\"true\">\n                        </amexio-text-input>\n                    </amexio-column>\n                    <amexio-column [size]=\"6\">\n                        <amexio-text-input field-label=\"Last Name\" name=\"lastName\" [(ngModel)]=\"userRegistration.lastName\" place-holder=\"Enter last name(not mandatory)\" allow-blank=\"true\" error-msg=\"Please enter last name\" [min-length]=\"3\" min-error-msg=\"Minimum 3 char required\"\n                            [max-length]=\"10\" max-error-msg=\"Maximum 10 char allowed\" icon-feedback=\"true\">\n                        </amexio-text-input>\n                    </amexio-column>\n                </amexio-row>\n                <amexio-textarea-input [field-label]=\"'Address'\" name=\"Address\" [(ngModel)]=\"userRegistration.address\" [place-holder]=\"'Enter address'\" [error-msg]=\"'Please enter address'\" [icon-feedback]=\"true\" [rows]=\"'1'\" [columns]=\"'2'\" [allow-blank]=\"false\"\n                    [enable-popover]=\"true\"></amexio-textarea-input>\n                <amexio-row>\n                    <amexio-column [size]=\"6\">\n                        <amexio-radio-group [name]=\"'genderList'\" [field-label]=\"'Gender'\" [horizontal]=\"true\" [allow-blank]=\"false\" [(ngModel)]=\"userRegistration.gender\" [data-reader]=\"'response.data'\" [display-field]=\"'gender'\" [value-field]=\"'genderId'\" [data]=\"radioGroupData\">\n                        </amexio-radio-group>\n                    </amexio-column>\n                    <amexio-column [size]=\"6\">\n                        <amexio-checkbox-group [field-label]=\"'Hobbies'\" name=\"hobbies\" [(ngModel)]=\"userRegistration.hobbies\" [horizontal]=\"true\" [required]=\"true\"  [data-reader]=\"'response.data'\" [display-field]=\"'hobbieName'\" [value-field]=\"'checked'\" [data]=\"checkboxGroupdata\">\n                        </amexio-checkbox-group>\n                    </amexio-column>\n                </amexio-row>\n                <amexio-row>\n                    <amexio-column [size]=\"6\">\n                        <amexio-tag-input [data-reader]=\"'response.data'\" [http-url]=\"'assets/data/componentdata/countryy.json'\" [has-label]=\"true\" [http-method]=\"'get'\" [key]=\"'countryName'\" [allow-blank]=\"false\" [display-field]=\"'countryName'\" [field-label]=\"'Having visa'\">\n                        </amexio-tag-input>\n                    </amexio-column>\n                    <amexio-column [size]=\"6\">\n                        <amexio-dropdown [place-holder]=\"'Choose City'\" name=\"city\" [(ngModel)]=\"userRegistration.city\" [allow-blank]=\"false\" [data-reader]=\"'response.data'\" [field-label]=\"'City'\" [http-url]=\"'assets/data/componentdata/cities.json'\" [http-method]=\"'get'\" [search]=\"'true'\"\n                            [display-field]=\"'cityName'\" [value-field]=\"'cityName'\">\n                        </amexio-dropdown>\n                    </amexio-column>\n                </amexio-row>\n                <amexio-row>\n                    <amexio-column size=\"6\">\n                        <amexio-number-input [name]=\"'age'\" [(ngModel)]=\"userRegistration.age\" [enable-popover]=\"true\" [field-label]=\"'Age'\" [place-holder]=\"'Enter age'\" [allow-blank]=\"false\" [error-msg]=\"'Please enter age'\" [min-value]=\"18\" [min-error-msg]=\"'age can not be less than 18'\"\n                            [max-value]=\"100\" [max-error-msg]=\"'age can not be greater than 100'\" [icon-feedback]=\"true\">\n                        </amexio-number-input>\n                    </amexio-column>\n                    <amexio-column [size]=\"6\">\n                        <amexio-date-time-picker [(ngModel)]=\"userRegistration.dateOfBirth\" name=\"dateOfBirth\" [field-label]=\"'Date Of Birth'\" [time-picker]=\"false\" [date-picker]=\"true\" [required]=\"true\">\n                        </amexio-date-time-picker>\n                    </amexio-column>\n                </amexio-row>\n                <amexio-row>\n                    <amexio-column [size]=\"6\">\n                        <amexio-email-input [field-label]=\"'Email Id'\" name=\"email\" [(ngModel)]=\"userRegistration.email\" [place-holder]=\"'Enter Email Id'\" [allow-blank]=\"false\" [error-msg]=\"'Please Enter Email Id'\" [enable-popover]=\"true\" [icon-feedback]=\"true\">\n                        </amexio-email-input>\n                    </amexio-column>\n                    <amexio-column [size]=\"6\">\n                        <amexio-password-input [enable-popover]=\"true\" [field-label]=\"'Password Input'\" name=\"password\" [(ngModel)]=\"userRegistration.password\" [place-holder]=\"'Enter Password'\" [allow-blank]=\"false\" [error-msg]=\"'Please enter password'\" [min-length]=\"6\" [min-error-msg]=\"'Minimum 6 char required'\"\n                            [max-length]=\"32\" [max-error-msg]=\"'Maximum 32 char allowed'\" [icon-feedback]=\"true\">\n                        </amexio-password-input>\n                    </amexio-column>\n                </amexio-row>\n                <amexio-checkbox [field-label]=\"'Agree'\" name=\"agree\" [required]=\"true\" [(ngModel)]=\"userRegistration.agree\">\n                </amexio-checkbox>\n            </form>\n        </amexio-body>\n        <amexio-action>\n            <amexio-button [disabled]=\"!empForm.valid\" [label]=\"'Save'\" [type]=\"'primary'\" [tooltip]=\"'Save'\" [size]=\"'large'\">\n            </amexio-button>\n        </amexio-action>\n    </amexio-card>\n\n    <br>\n    <b style=\"color:green\">Form Model Data : </b> {{empForm.form.value | json}}<br>\n    <b style=\"color:blue\">UI Model Data </b>: {{userRegistration|json}} <br><br>\n    <amexio-card header=\"true\" footer=\"true\">\n        <amexio-header>\n            Employee Registration With Address\n        </amexio-header>\n        <amexio-body>\n            <form #empFormWithAddress=\"ngForm\">\n                <amexio-row>\n                    <amexio-column [size]=\"6\">\n                        <amexio-text-input [(ngModel)]=\"emplpoyeeRegistration.firstName\" [min-length]=\"3\" [max-length]=\"5\" [allow-blank]=\"false\" field-label=\"First Name\" [name]=\"'Firstname'\" place-holder=\"Enter first name\" icon-feedback=\"true\">\n                        </amexio-text-input>\n                    </amexio-column>\n                    <amexio-column [size]=\"6\">\n                        <amexio-text-input field-label=\"Last Name\" [name]=\"'lastName'\" [(ngModel)]=\"emplpoyeeRegistration.lastName\" place-holder=\"Enter last name\" [allow-blank]=\"false\" error-msg=\"Please enter last name\" [min-length]=\"3\" min-error-msg=\"Minimum 3 char required\"\n                            [max-length]=\"10\" max-error-msg=\"Maximum 10 char allowed\" icon-feedback=\"true\">\n                        </amexio-text-input>\n                    </amexio-column>\n                </amexio-row>\n                <amexio-row>\n                    <amexio-column [size]=\"6\">\n                        <amexio-radio-group [name]=\"'genderList'\" [field-label]=\"'Gender'\" [horizontal]=\"true\" [allow-blank]=\"false\" [(ngModel)]=\"emplpoyeeRegistration.gender\" [data-reader]=\"'response.data'\" [display-field]=\"'gender'\" [value-field]=\"'genderId'\" [data]=\"radioGroupData\">\n                        </amexio-radio-group>\n                    </amexio-column>\n                    <amexio-column [size]=\"6\">\n                        <amexio-dropdown [place-holder]=\"'Choose Department'\" [name]=\"'department'\" [(ngModel)]=\"emplpoyeeRegistration.department\" [allow-blank]=\"false\" [field-label]=\"'Department'\" [search]=\"'true'\" [data]=\"departmentData\" [display-field]=\"'deptName'\" [value-field]=\"'deptId'\">\n                        </amexio-dropdown>\n                    </amexio-column>\n                </amexio-row>\n                <amexio-row>\n                    <amexio-column [size]=\"6\">\n                        <amexio-email-input [field-label]=\"'Email Id'\" [name]=\"'email'\" [(ngModel)]=\"emplpoyeeRegistration.email\" [place-holder]=\"'Enter Email Id'\" [allow-blank]=\"false\" [error-msg]=\"'Please Enter Email Id'\" [enable-popover]=\"true\" [icon-feedback]=\"true\">\n                        </amexio-email-input>\n                    </amexio-column>\n                    <amexio-column [size]=\"6\">\n                        <amexio-date-time-picker [(ngModel)]=\"emplpoyeeRegistration.dateOfBirth\" [name]=\"'dateOfBirth'\" [field-label]=\"'Date Of Birth'\" [time-picker]=\"false\" [date-picker]=\"true\" [required]=\"true\">\n                        </amexio-date-time-picker>\n                    </amexio-column>\n                </amexio-row>\n                <amexio-fieldset ngModelGroup=\"address\" title=\"Address\">\n                    <amexio-row>\n                        <amexio-column [size]=\"6\">\n                            <amexio-text-input field-label=\"Street\" [name]=\"'street'\" [(ngModel)]=\"emplpoyeeRegistration.address.street\" place-holder=\"Enter street\" enable-popover=\"true\" [min-length]=\"3\" min-error-msg=\"Minimum 3 char required\" [allow-blank]=\"false\" error-msg=\"Please enter street\"\n                                icon-feedback=\"true\">\n                            </amexio-text-input>\n                        </amexio-column>\n                        <amexio-column [size]=\"6\">\n                            <amexio-text-input field-label=\"city\" [name]=\"'city'\" [(ngModel)]=\"emplpoyeeRegistration.address.city\" [min-length]=\"3\" enable-popover=\"true\" min-error-msg=\"Minimum 3 char required\" place-holder=\"Enter city\" [allow-blank]=\"false\" error-msg=\"Please enter city\"\n                                icon-feedback=\"true\">\n                            </amexio-text-input>\n                        </amexio-column>\n                    </amexio-row>\n                    <amexio-row>\n                        <amexio-column [size]=\"6\">\n                            <amexio-text-input field-label=\"pincode\" [name]=\"'pincode'\" [(ngModel)]=\"emplpoyeeRegistration.address.pincode\" [min-length]=\"3\" enable-popover=\"true\" min-error-msg=\"Minimum 3 char required\" place-holder=\"Enter pincode\" [allow-blank]=\"false\" error-msg=\"Please enter pincode\"\n                                icon-feedback=\"true\">\n                            </amexio-text-input>\n                        </amexio-column>\n                    </amexio-row>\n                </amexio-fieldset>\n            </form>\n        </amexio-body>\n        <amexio-action>\n            <amexio-button [disabled]=\"!empFormWithAddress.valid\" [label]=\"'Save'\" [type]=\"'primary'\" [tooltip]=\"'Save'\" [size]=\"'large'\">\n            </amexio-button>\n        </amexio-action>\n    </amexio-card>\n\n    <br>\n    <b style=\"color:green\">Form Model Data : </b> {{empFormWithAddress.form.value | json}}<br>\n    <b style=\"color:blue\">UI Model Data : </b> {{emplpoyeeRegistration | json}} <br>\n\n</amexio-api-demo>\n</amexio-api-structure>"

/***/ }),

/***/ "./src/app/Forms/form-html/template-driven/form.demo.ts":
/*!**************************************************************!*\
  !*** ./src/app/Forms/form-html/template-driven/form.demo.ts ***!
  \**************************************************************/
/*! exports provided: HtmlFormDemoComponent, UserRegistration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlFormDemoComponent", function() { return HtmlFormDemoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistration", function() { return UserRegistration; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _employee_registration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee.registration */ "./src/app/Forms/form-html/template-driven/employee.registration.ts");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_3__["ComponentDataStructure"]();
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
    }
    HtmlFormDemoComponent.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    HtmlFormDemoComponent.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Form With HTML Form Tag And Amexio Inputs Components';
        this.customSourceData.description = 'Html Form can be used basically for validation purposes';
        this.customSourceData.sourceMetadata.htmlUrl = 'pane/html-form/form/form.html';
        this.customSourceData.sourceMetadata.tsUrl = 'pane/html-form/form/form.text';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v42-form?embed=1&file=app/forms/form/form.demo.html&view=editor';
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
            template: __webpack_require__(/*! ./form.demo.html */ "./src/app/Forms/form-html/template-driven/form.demo.html"),
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



/***/ }),

/***/ "./src/app/Forms/form/employee.registration.ts":
/*!*****************************************************!*\
  !*** ./src/app/Forms/form/employee.registration.ts ***!
  \*****************************************************/
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

/***/ "./src/app/Forms/form/form.demo.html":
/*!*******************************************!*\
  !*** ./src/app/Forms/form/form.demo.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n\n <amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/forms/amexioforms.json'\">\n    <amexio-api-demo>\n    \n <h2>Demo: Form </h2>\n    <amexio-form #simpleForm form-name=\"validateForm\" header=\"true\" show-error=\"true\">\n        <amexio-form-header style='width:100%;'>\n            Form\n        </amexio-form-header>\n        <amexio-form-body>\n            <amexio-row>\n                <amexio-column [size]=\"6\">\n                    <amexio-text-input [min-length]=\"3\" [(ngModel)]=\"userRegistration.firstName\" [max-length]=\"5\" [allow-blank]=\"false\" field-label=\"First Name\" name=\"firstName\" place-holder=\"Enter first name\" icon-feedback=\"true\">\n                    </amexio-text-input>\n                </amexio-column>\n                <amexio-column [size]=\"6\">\n                    <amexio-text-input field-label=\"Last Name\" name=\"lastName\" [(ngModel)]=\"userRegistration.lastName\" place-holder=\"Enter last name(not mandatory)\" allow-blank=\"true\" error-msg=\"Please enter last name\" [min-length]=\"3\" min-error-msg=\"Minimum 3 char required\"\n                        [max-length]=\"10\" max-error-msg=\"Maximum 10 char allowed\" icon-feedback=\"true\">\n                    </amexio-text-input>\n                </amexio-column>\n            </amexio-row>\n            <amexio-textarea-input  [field-label]=\"'Address'\" name=\"Address\" [(ngModel)]=\"userRegistration.address\" [place-holder]=\"'Enter address'\" [error-msg]=\"'Please enter address'\" [icon-feedback]=\"true\" [rows]=\"'1'\" [columns]=\"'2'\" [allow-blank]=\"false\"\n                [enable-popover]=\"true\"></amexio-textarea-input>\n            <amexio-row>\n                <amexio-column [size]=\"6\">\n                    <amexio-radio-group [name]=\"'genderList'\" [field-label]=\"'Gender'\" [horizontal]=\"true\" [allow-blank]=\"false\" [(ngModel)]=\"userRegistration.gender\" [data-reader]=\"'response.data'\" [display-field]=\"'gender'\" [value-field]=\"'genderId'\" [data]=\"radioGroupData\">\n                    </amexio-radio-group>\n                </amexio-column>\n                <amexio-column [size]=\"6\">\n                    <amexio-checkbox-group [field-label]=\"'Hobbies'\" name=\"hobbies\" [(ngModel)]=\"userRegistration.hobbies\" [horizontal]=\"true\" [required]=\"true\"  [data-reader]=\"'response.data'\" [display-field]=\"'hobbieName'\" [value-field]=\"'checked'\" [data]=\"checkboxGroupdata\">\n                    </amexio-checkbox-group>\n                </amexio-column>\n            </amexio-row>\n            <amexio-row>\n                <amexio-column [size]=\"6\">\n                    <amexio-tag-input [data-reader]=\"'response.data'\" [http-url]=\"'assets/data/componentdata/countryy.json'\" [has-label]=\"true\" [http-method]=\"'get'\" [key]=\"'countryName'\" [allow-blank]=\"false\" [display-field]=\"'countryName'\" [field-label]=\"'Having visa'\">\n                    </amexio-tag-input>\n                </amexio-column>\n                <amexio-column [size]=\"6\">\n                    <amexio-dropdown [place-holder]=\"'Choose City'\" name=\"city\" [(ngModel)]=\"userRegistration.city\" [allow-blank]=\"false\" [data-reader]=\"'response.data'\" [field-label]=\"'City'\" [http-url]=\"'assets/data/componentdata/cities.json'\" [http-method]=\"'get'\" [search]=\"'true'\"\n                        [display-field]=\"'cityName'\" [value-field]=\"'cityName'\">\n                    </amexio-dropdown>\n                </amexio-column>\n            </amexio-row>\n            <amexio-row>\n                <amexio-column size=\"6\">\n                    <amexio-number-input [name]=\"'age'\" [(ngModel)]=\"userRegistration.age\" [enable-popover]=\"true\" [field-label]=\"'Age'\" [place-holder]=\"'Enter age'\" [allow-blank]=\"false\" [error-msg]=\"'Please enter age'\" [min-value]=\"18\" [min-error-msg]=\"'age can not be less than 18'\"\n                        [max-value]=\"100\" [max-error-msg]=\"'age can not be greater than 100'\" [icon-feedback]=\"true\">\n                    </amexio-number-input>\n                </amexio-column>\n                <amexio-column [size]=\"6\">\n                    <amexio-date-time-picker [(ngModel)]=\"userRegistration.dateOfBirth\" name=\"dateOfBirth\" [field-label]=\"'Date Of Birth'\" [time-picker]=\"false\" [date-picker]=\"true\" [required]=\"true\">\n                    </amexio-date-time-picker>\n                </amexio-column>\n            </amexio-row>\n            <amexio-row>\n                <amexio-column [size]=\"6\">\n                    <amexio-email-input [field-label]=\"'Email Id'\" name=\"email\" [(ngModel)]=\"userRegistration.email\" [place-holder]=\"'Enter Email Id'\" [allow-blank]=\"false\" [error-msg]=\"'Please Enter Email Id'\" [enable-popover]=\"true\" [icon-feedback]=\"true\">\n                    </amexio-email-input>\n                </amexio-column>\n                <amexio-column [size]=\"6\">\n                    <amexio-password-input [enable-popover]=\"true\" [field-label]=\"'Password Input'\" name=\"password\" [(ngModel)]=\"userRegistration.password\" [place-holder]=\"'Enter Password'\" [allow-blank]=\"false\" [error-msg]=\"'Please enter password'\" [min-length]=\"6\" [min-error-msg]=\"'Minimum 6 char required'\"\n                        [max-length]=\"32\" [max-error-msg]=\"'Maximum 32 char allowed'\" [icon-feedback]=\"true\">\n                    </amexio-password-input>\n                </amexio-column>\n            </amexio-row>\n            <amexio-checkbox [field-label]=\"'Agree'\" name=\"agree\" [required]=\"true\" [(ngModel)]=\"userRegistration.agree\">\n            </amexio-checkbox>\n        </amexio-form-body>\n        <amexio-form-action>\n            <amexio-button [disabled]=\"false\" [label]=\"'OK'\" [type]=\"'primary'\" [tooltip]=\"'Save'\" [form-bind]=\"'validateForm'\">\n            </amexio-button>\n            <amexio-button [label]=\"'Cancel'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Cancel'\">\n            </amexio-button>\n        </amexio-form-action>\n    </amexio-form>\n    <br>\n  \n    <h2>Demo: Form with Toolbar</h2>\n    <amexio-form form-name=\"validateForm\" header=\"true\" show-error=\"true\">\n        <amexio-form-header style='width:100%;display:inherit'>\n            <amexio-toolbar>\n                <amexio-toolbar-item position-left>\n                    <amexio-label size=\"small\">\n                        Registration\n                    </amexio-label>\n                </amexio-toolbar-item>\n\n                <amexio-toolbar-item position-right [seperator-position]=\"'left'\">\n                    <amexio-image aria-hidden=\"true\" [icon-class]=\"'fa fa-th'\"> </amexio-image>\n                  </amexio-toolbar-item>\n                  <amexio-toolbar-item position-right [seperator-position]=\"'left'\">\n                    <amexio-image aria-hidden=\"true\" [icon-class]=\"'fa fa-info-circle'\"> </amexio-image>\n                  </amexio-toolbar-item>\n                  <amexio-toolbar-item position-right [seperator-position]=\"'left'\">\n                    <amexio-image aria-hidden=\"true\" [icon-class]=\"'fa fa-question-circle'\"> </amexio-image>\n                  </amexio-toolbar-item>\n                  <amexio-toolbar-item position-right [seperator-position]=\"'left'\">\n                    <amexio-image aria-hidden=\"true\" [icon-class]=\"'fa fa-cog'\"> </amexio-image>\n                  </amexio-toolbar-item>\n            </amexio-toolbar>\n        </amexio-form-header>\n        <amexio-form-body>\n            <amexio-row>\n                <amexio-column [size]=\"6\">\n                    <amexio-text-input [min-length]=\"3\" [(ngModel)]=\"firstName\" [max-length]=\"5\" [allow-blank]=\"false\" field-label=\"First Name\" name=\"firstName\" place-holder=\"Enter first name\" icon-feedback=\"true\">\n                    </amexio-text-input>\n                </amexio-column>\n                <amexio-column [size]=\"6\">\n                    <amexio-text-input field-label=\"Last Name\" name=\"lastName\" [(ngModel)]=\"lastName\" place-holder=\"Enter last name(not mandatory)\" allow-blank=\"true\" error-msg=\"Please enter last name\" [min-length]=\"3\" min-error-msg=\"Minimum 3 char required\" [max-length]=\"10\"\n                        max-error-msg=\"Maximum 10 char allowed\" icon-feedback=\"true\">\n                    </amexio-text-input>\n                </amexio-column>\n\n            </amexio-row>\n        </amexio-form-body>\n        <amexio-form-action>\n            <amexio-button [label]=\"'Save'\" [type]=\"'primary'\" [tooltip]=\"'Save'\" [form-bind]=\"'validateForm'\">\n            </amexio-button>\n            <amexio-button [label]=\"'Cancel'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Cancel'\">\n            </amexio-button>\n        </amexio-form-action>\n    </amexio-form>\n    <br>\n    <h2>Demo: Employee Registration with address </h2>\n    <amexio-form #empForm form-name=\"empployeeForm\" header=\"true\" [header-align]=\"'left'\" show-error=\"true\">\n        <amexio-form-header style='width:100%; display:flex;justify-content:inherit;'>\n            Employee Registration\n        </amexio-form-header>\n        <amexio-form-body>\n            <amexio-row>\n                <amexio-column [size]=\"6\">\n                    <amexio-text-input [(ngModel)]=\"emplpoyeeRegistration.firstName\" [min-length]=\"3\" [max-length]=\"5\" [allow-blank]=\"false\" field-label=\"First Name\" [name]=\"'Firstname'\" place-holder=\"Enter first name\" icon-feedback=\"true\">\n                    </amexio-text-input>\n                </amexio-column>\n                <amexio-column [size]=\"6\">\n                    <amexio-text-input field-label=\"Last Name\" [name]=\"'lastName'\" [(ngModel)]=\"emplpoyeeRegistration.lastName\" place-holder=\"Enter last name\" [allow-blank]=\"false\" error-msg=\"Please enter last name\" [min-length]=\"3\" min-error-msg=\"Minimum 3 char required\"\n                        [max-length]=\"10\" max-error-msg=\"Maximum 10 char allowed\" icon-feedback=\"true\">\n                    </amexio-text-input>\n                </amexio-column>\n            </amexio-row>\n            <amexio-row>\n                <amexio-column [size]=\"6\">\n                    <amexio-radio-group [name]=\"'genderList'\" [field-label]=\"'Gender'\" [horizontal]=\"true\" [allow-blank]=\"false\" [(ngModel)]=\"emplpoyeeRegistration.gender\" [data-reader]=\"'response.data'\" [display-field]=\"'gender'\" [value-field]=\"'genderId'\" [data]=\"radioGroupData\">\n                    </amexio-radio-group>\n                </amexio-column>\n                <amexio-column [size]=\"6\">\n                    <amexio-dropdown [place-holder]=\"'Choose Department'\" [name]=\"'department'\" [(ngModel)]=\"emplpoyeeRegistration.department\" [allow-blank]=\"false\" [field-label]=\"'Department'\" [search]=\"'true'\" [data]=\"departmentData\" [display-field]=\"'deptName'\" [value-field]=\"'deptId'\">\n                    </amexio-dropdown>\n                </amexio-column>\n            </amexio-row>\n            <amexio-row>\n                <amexio-column [size]=\"6\">\n                    <amexio-email-input [field-label]=\"'Email Id'\" [name]=\"'email'\" [(ngModel)]=\"emplpoyeeRegistration.email\" [place-holder]=\"'Enter Email Id'\" [allow-blank]=\"false\" [error-msg]=\"'Please Enter Email Id'\" [enable-popover]=\"true\" [icon-feedback]=\"true\">\n                    </amexio-email-input>\n                </amexio-column>\n                <amexio-column [size]=\"6\">\n                    <amexio-date-time-picker [(ngModel)]=\"emplpoyeeRegistration.dateOfBirth\" [name]=\"'dateOfBirth'\" [field-label]=\"'Date Of Birth'\" [time-picker]=\"false\" [date-picker]=\"true\" [required]=\"true\">\n                    </amexio-date-time-picker>\n                </amexio-column>\n            </amexio-row>\n            <amexio-fieldset [form-group]=\"'address'\" title=\"Address\">\n                <amexio-row>\n                    <amexio-column [size]=\"6\">\n                        <amexio-text-input field-label=\"Street\" [name]=\"'street'\" [(ngModel)]=\"emplpoyeeRegistration.address.street\" place-holder=\"Enter street\" enable-popover=\"true\" [min-length]=\"3\" min-error-msg=\"Minimum 3 char required\" [allow-blank]=\"false\" error-msg=\"Please enter street\"\n                            icon-feedback=\"true\">\n                        </amexio-text-input>\n                    </amexio-column>\n                    <amexio-column [size]=\"6\">\n                        <amexio-text-input field-label=\"city\" [name]=\"'city'\" [(ngModel)]=\"emplpoyeeRegistration.address.city\" [min-length]=\"3\" enable-popover=\"true\" min-error-msg=\"Minimum 3 char required\" place-holder=\"Enter city\" [allow-blank]=\"false\" error-msg=\"Please enter city\"\n                            icon-feedback=\"true\">\n                        </amexio-text-input>\n                    </amexio-column>\n                </amexio-row>\n                <amexio-row>\n                    <amexio-column [size]=\"6\">\n                        <amexio-text-input field-label=\"pincode\" [name]=\"'pincode'\" [(ngModel)]=\"emplpoyeeRegistration.address.pincode\" [min-length]=\"3\" enable-popover=\"true\" min-error-msg=\"Minimum 3 char required\" place-holder=\"Enter pincode\" [allow-blank]=\"false\" error-msg=\"Please enter pincode\"\n                            icon-feedback=\"true\">\n                        </amexio-text-input>\n                    </amexio-column>\n                </amexio-row>\n            </amexio-fieldset>\n        </amexio-form-body>\n        <amexio-form-action>\n            <amexio-button [disabled]=\"false\" [label]=\"'OK'\" [type]=\"'primary'\" [tooltip]=\"'Save'\" [form-bind]=\"'empployeeForm'\">\n            </amexio-button>\n            <amexio-button [label]=\"'Cancel'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Cancel'\">\n            </amexio-button>\n        </amexio-form-action>\n    </amexio-form>\n    <br>\n    <b style=\"color:green\">Form Model Data : </b> {{empForm.form.value | json}}<br>\n    <b style=\"color:blue\">UI Model Data : </b> {{emplpoyeeRegistration | json}} <br>\n\n\n    </amexio-api-demo>\n    </amexio-api-structure>\n\n\n"

/***/ }),

/***/ "./src/app/Forms/form/form.demo.ts":
/*!*****************************************!*\
  !*** ./src/app/Forms/form/form.demo.ts ***!
  \*****************************************/
/*! exports provided: FormDemoComponent, UserRegistration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDemoComponent", function() { return FormDemoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistration", function() { return UserRegistration; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _employee_registration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee.registration */ "./src/app/Forms/form/employee.registration.ts");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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




var FormDemoComponent = /** @class */ (function () {
    function FormDemoComponent(http) {
        this.http = http;
        this.currentDate = new Date();
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_3__["ComponentDataStructure"]();
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
    }
    FormDemoComponent.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    FormDemoComponent.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Form ';
        this.customSourceData.description = 'Amexio Form can be used basically for validation purposes. amexio-form component gives more power over the html form tag. 1. Shows error messages when form is invalid. 2. User need not to add extra validations to inputs .only add min,max,min-length,max-length in amexio input fields';
        this.customSourceData.sourceMetadata.htmlUrl = 'pane/form/form.html';
        this.customSourceData.sourceMetadata.tsUrl = 'pane/form/form.text';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v42-form?embed=1&file=app/forms/form/form.demo.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    FormDemoComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    FormDemoComponent.prototype.refreshData = function () {
        this.refreshDialogue = !this.refreshDialogue;
    };
    FormDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-demo',
            template: __webpack_require__(/*! ./form.demo.html */ "./src/app/Forms/form/form.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FormDemoComponent);
    return FormDemoComponent;
}());

var UserRegistration = /** @class */ (function () {
    function UserRegistration() {
        this.dateOfBirth = new Date();
        this.hobbies = [];
    }
    return UserRegistration;
}());



/***/ }),

/***/ "./src/app/Forms/forms.module.ts":
/*!***************************************!*\
  !*** ./src/app/Forms/forms.module.ts ***!
  \***************************************/
/*! exports provided: FormsDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsDemoModule", function() { return FormsDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _forms_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms.routes */ "./src/app/Forms/forms.routes.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_html_reactive_forms_reactiveform_demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form-html/reactive-forms/reactiveform.demo.component */ "./src/app/Forms/form-html/reactive-forms/reactiveform.demo.component.ts");
/* harmony import */ var _reactiveform_reactiveform_demo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reactiveform/reactiveform.demo.component */ "./src/app/Forms/reactiveform/reactiveform.demo.component.ts");
/* harmony import */ var _form_form_demo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form/form.demo */ "./src/app/Forms/form/form.demo.ts");
/* harmony import */ var _form_html_template_driven_form_demo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form-html/template-driven/form.demo */ "./src/app/Forms/form-html/template-driven/form.demo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













/**
 * Created by kedar on 1/2/19.
 */
var FormsDemoModule = /** @class */ (function () {
    function FormsDemoModule() {
    }
    FormsDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_form_html_reactive_forms_reactiveform_demo_component__WEBPACK_IMPORTED_MODULE_8__["HtmlReactiveFormComponent"], _reactiveform_reactiveform_demo_component__WEBPACK_IMPORTED_MODULE_9__["reactiveFormComponent"], _form_form_demo__WEBPACK_IMPORTED_MODULE_10__["FormDemoComponent"],
                _form_html_template_driven_form_demo__WEBPACK_IMPORTED_MODULE_11__["HtmlFormDemoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"].forRoot(),
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AmexioWidgetModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(_forms_routes__WEBPACK_IMPORTED_MODULE_5__["FORMS_ROUTE"]),
            ],
            providers: []
        })
    ], FormsDemoModule);
    return FormsDemoModule;
}());



/***/ }),

/***/ "./src/app/Forms/forms.routes.ts":
/*!***************************************!*\
  !*** ./src/app/Forms/forms.routes.ts ***!
  \***************************************/
/*! exports provided: FORMS_ROUTE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORMS_ROUTE", function() { return FORMS_ROUTE; });
/* harmony import */ var _form_html_reactive_forms_reactiveform_demo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-html/reactive-forms/reactiveform.demo.component */ "./src/app/Forms/form-html/reactive-forms/reactiveform.demo.component.ts");
/* harmony import */ var _reactiveform_reactiveform_demo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactiveform/reactiveform.demo.component */ "./src/app/Forms/reactiveform/reactiveform.demo.component.ts");
/* harmony import */ var _form_form_demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.demo */ "./src/app/Forms/form/form.demo.ts");
/* harmony import */ var _form_html_template_driven_form_demo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-html/template-driven/form.demo */ "./src/app/Forms/form-html/template-driven/form.demo.ts");




var FORMS_ROUTE = [
    {
        path: 'html-reactive-form', component: _form_html_reactive_forms_reactiveform_demo_component__WEBPACK_IMPORTED_MODULE_0__["HtmlReactiveFormComponent"],
    },
    {
        path: 'reactive-form', component: _reactiveform_reactiveform_demo_component__WEBPACK_IMPORTED_MODULE_1__["reactiveFormComponent"],
    },
    {
        path: 'form-demo', component: _form_form_demo__WEBPACK_IMPORTED_MODULE_2__["FormDemoComponent"],
    },
    {
        path: 'html-form-demo', component: _form_html_template_driven_form_demo__WEBPACK_IMPORTED_MODULE_3__["HtmlFormDemoComponent"],
    }
];


/***/ }),

/***/ "./src/app/Forms/reactiveform/reactiveform.demo.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Forms/reactiveform/reactiveform.demo.component.ts ***!
  \*******************************************************************/
/*! exports provided: reactiveFormComponent, Address, EmplpoyeeRegistration, Registration, DynamicFormsReg, Phone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactiveFormComponent", function() { return reactiveFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmplpoyeeRegistration", function() { return EmplpoyeeRegistration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Registration", function() { return Registration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormsReg", function() { return DynamicFormsReg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phone", function() { return Phone; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
/**
 * Created by kedar kokil on 22/11/18.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var reactiveFormComponent = /** @class */ (function () {
    function reactiveFormComponent(http, fb) {
        this.http = http;
        this.fb = fb;
        this.copyMsgArray = [];
        this.radioGroupData = [];
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_3__["ComponentDataStructure"]();
        this.address = new Address();
        this.emplpoyeeRegistration = new EmplpoyeeRegistration();
        this.registration1 = new Registration();
        this.registration = new Registration();
        this.dynamicFormsReg = new DynamicFormsReg();
        this.radioGroupData = [{
                genderName: 'Male',
                genderId: 'male'
            }, {
                genderName: 'Female',
                genderId: 'female'
            }];
    }
    reactiveFormComponent.prototype.ngOnInit = function () {
        this.createCustomSourceData();
        this.employeeForm = this.fb.group({
            FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            LastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            Age: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(18), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100)]],
            Gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Agree: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]]
        });
        // HERE EMP FORM VALIDATION ADDED
        this.employeeFormInsideForm = this.fb.group({
            FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            LastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            Age: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(18), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100)]],
            Gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Agree: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]]
        });
        // HERE INNER ADDRESS FORM VALIDATION ADDED
        this.addressForm = this.fb.group({
            TemporaryAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            PermanentAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        // froms inside group
        this.employeeFormGroup = this.fb.group({
            FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            LastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            Age: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(18), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100)]],
            Gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Agree: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]],
            AddressFormGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                temporaryAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                permanentAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            })
        });
        this.dynamicEmployeeForm = this.fb.group({
            FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            LastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            Age: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(18), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100)]],
            Gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Agree: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]],
            phones: this.fb.array([])
        });
    };
    reactiveFormComponent.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Reactive Forms With Amexio Inputs Components';
        this.customSourceData.description = 'Reactive forms provide a model-driven approach to handling form inputs whose values change over time. Reactive forms can be used basically for validation purposes and below examples show reactive forms with amexio inputs components. User can add any complex validations.';
        this.customSourceData.sourceMetadata.htmlUrl = 'pane/reactiveform/form.html';
        this.customSourceData.sourceMetadata.tsUrl = 'pane/reactiveform/form.text';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/simple-reactive-forms-tu9tkf?file=src%2Fapp%2Famexio-reactive-forms%2Famexio-reactive-forms%2Famexio-reactive-forms.component.html';
        this.customSourceData.liveMetadata.stackblitzUrl1 = 'https://stackblitz.com/edit/reactive-forms-within-forms-wxnrvo?embed=1&file=src/app/app.component.ts';
        this.customSourceData.liveMetadata.stackblitzUrl2 = 'https://stackblitz.com/edit/amexio-reactive-form-group-inside-form-usemf8?embed=1&file=src/app/app.component.ts';
    };
    //THIS METHOD IS USED FOR MAKING PERMANENT ADDRESS AS TEMP ADDRESS BASE UPON CHECKED
    reactiveFormComponent.prototype.onCheckClick1 = function (data) {
        if (data) {
            this.registration.address.perAddress = this.registration.address.tempAddress;
        }
    };
    reactiveFormComponent.prototype.onCheckClick2 = function (data) {
        if (data) {
            this.registration1.address.perAddress = this.registration1.address.tempAddress;
        }
    };
    Object.defineProperty(reactiveFormComponent.prototype, "phoneForms", {
        // GET PHONE FORMS
        get: function () {
            return this.dynamicEmployeeForm.get('phones');
        },
        enumerable: true,
        configurable: true
    });
    // ADD PHONE NUMBER
    reactiveFormComponent.prototype.addPhone = function () {
        var phone = this.fb.group({
            phoneLabel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            countryCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9 ]*')]]
        });
        this.phoneForms.push(phone);
    };
    // THIS EVENT FIRE WHEN USER ADD PHONE NUMBER
    reactiveFormComponent.prototype.addPhoneClick = function () {
        this.enableFieldSet = true;
        this.dynamicFormsReg.add(new Phone());
        this.addPhone();
    };
    reactiveFormComponent.prototype.onDeleteClick = function (index) {
        this.phoneForms.removeAt(index);
    };
    reactiveFormComponent.prototype.onAddClick = function (data) {
        this.dynamicFormsReg.add(data);
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    reactiveFormComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    reactiveFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'reactive-form',
            template: __webpack_require__(/*! ./reactiveform.demo.html */ "./src/app/Forms/reactiveform/reactiveform.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], reactiveFormComponent);
    return reactiveFormComponent;
}());

// THIS MODEL CLASS IS USED FOR BINDING TO EMPLOYEE ADDRESS
var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());

var EmplpoyeeRegistration = /** @class */ (function () {
    function EmplpoyeeRegistration() {
    }
    return EmplpoyeeRegistration;
}());

var Registration = /** @class */ (function (_super) {
    __extends(Registration, _super);
    function Registration() {
        var _this = _super.call(this) || this;
        _this.address = new Address();
        return _this;
    }
    return Registration;
}(EmplpoyeeRegistration));

// THIS CLASS IS USED FOR DYNAMIC FORM REGISTRATION
var DynamicFormsReg = /** @class */ (function (_super) {
    __extends(DynamicFormsReg, _super);
    function DynamicFormsReg() {
        var _this = _super.call(this) || this;
        _this.phones = [];
        return _this;
    }
    DynamicFormsReg.prototype.add = function (phone) {
        this.phones.push(phone);
    };
    return DynamicFormsReg;
}(EmplpoyeeRegistration));

// THIS CLASS IS USED FOR PHONE NUMBER
var Phone = /** @class */ (function () {
    function Phone() {
    }
    return Phone;
}());



/***/ }),

/***/ "./src/app/Forms/reactiveform/reactiveform.demo.html":
/*!***********************************************************!*\
  !*** ./src/app/Forms/reactiveform/reactiveform.demo.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <amexio-api-structure [custom-com-data]=\"customSourceData\" >\n    <amexio-api-demo>\n\n\n<!-- Reactive Forms with Amexio Form With <amexio-form> -->\n\n    <amexio-form [header]=\"true\" [formGroup]=\"employeeForm\">\n        <amexio-form-header>\n            Simple Reactive Forms\n        </amexio-form-header>\n        <amexio-form-body>\n            <amexio-row>\n                <amexio-column size=\"6\">\n                    <amexio-text-input formControlName=\"FirstName\" [(ngModel)]=\"emplpoyeeRegistration.firstName\" [field-label]=\"'First Name'\" [allow-blank]=\"true\" [error-msg]=\"'Please enter valid First Name'\" [enable-popover]=\"true\" [place-holder]=\"'Please enter first name'\"\n                        [min-length]=\"2\" [icon-feedback]=\"false\" [min-error-msg]=\"'Minimum 2 char allowed'\" [max-error-msg]=\"'Maximum 20 char allowed'\" [max-length]=\"20\">\n                    </amexio-text-input>\n                </amexio-column>\n                <amexio-column size=\"6\">\n                    <amexio-text-input formControlName=\"LastName\" [(ngModel)]=\"emplpoyeeRegistration.lastName\" [field-label]=\"'Last Name'\" [place-holder]=\"'Please enter last name'\" [allow-blank]=\"true\" [error-msg]=\"'errorMsg'\" [enable-popover]=\"true\" [min-length]=\"2\" [min-error-msg]=\"'Minimum 2 char allowed'\"\n                        [max-error-msg]=\"'Maximum 20 char allowed'\" [max-length]=\"20\">\n                        [icon-feedback]=\"true\" >\n                    </amexio-text-input>\n                </amexio-column>\n            </amexio-row>\n            <amexio-row>\n                <amexio-column size=\"6\">\n                    <amexio-email-input formControlName=\"Email\" [(ngModel)]=\"emplpoyeeRegistration.email\" [field-label]=\"'Email Id'\" [place-holder]=\"'Please enter Email Id'\" [allow-blank]=\"false\" [error-msg]=\"'Please Enter Email Id'\" [enable-popover]=\"true\" [icon-feedback]=\"true\">\n                    </amexio-email-input>\n                </amexio-column>\n                <amexio-column size=\"6\">\n                    <amexio-number-input formControlName=\"Age\" [(ngModel)]=\"emplpoyeeRegistration.age\" [enable-popover]=\"true\" [field-label]=\"'Age'\" [place-holder]=\"'Enter age'\" [error-msg]=\"'Please enter age'\" [min-value]=\"18\" [min-error-msg]=\"'age can not be less than 18'\"\n                        [max-value]=\"100\" [max-error-msg]=\"'age can not be greater than 100'\" [icon-feedback]=\"true\">\n                    </amexio-number-input>\n                </amexio-column>\n            </amexio-row>\n            <amexio-row>\n                <amexio-column size=\"6\">\n                    <amexio-radio-group formControlName=\"Gender\" [(ngModel)]=\"emplpoyeeRegistration.gender\" [field-label]=\"'Gender'\" [horizontal]=\"true\" [display-field]=\"'genderName'\" [value-field]=\"'genderId'\" [data]=\"radioGroupData\">\n                    </amexio-radio-group>\n                </amexio-column>\n                <amexio-column size=\"6\">\n                    <amexio-checkbox formControlName=\"Agree\" [(ngModel)]=\"emplpoyeeRegistration.agree\" [field-label]=\"'Agree'\">\n                    </amexio-checkbox>\n                </amexio-column>\n            </amexio-row>\n        </amexio-form-body>\n        <amexio-form-action>\n            <amexio-button [label]=\"'Save'\" [disabled]=\"!employeeForm.valid\" [type]=\"'green'\" [tooltip]=\"'Save Form'\">\n            </amexio-button>\n        </amexio-form-action>\n\n    </amexio-form>\n\n    <br>\n    <b style=\"color:green\">Form Model Data : </b> {{employeeForm.value | json}}<br>\n    <b style=\"color:blue\">UI Model Data </b>: {{emplpoyeeRegistration|json}} <br>\n\n    <!-- Reactive Forms Within Form Amexio Form With <amexio-form> -->\n    <br>\n\n    <amexio-form [header]=\"true\" [footer-align]=\"'right'\" [formGroup]=\"employeeFormInsideForm\">\n        <amexio-form-header>\n            Reactive Forms Within Forms\n        </amexio-form-header>\n        <amexio-form-body>\n            <amexio-row>\n                <amexio-column size=\"6\">\n                    <amexio-text-input formControlName=\"FirstName\" [(ngModel)]=\"registration.firstName\" [field-label]=\"'First Name'\" [allow-blank]=\"true\" [error-msg]=\"'Please enter valid First Name'\" [enable-popover]=\"true\" [place-holder]=\"'Please enter first name'\" [min-length]=\"2\"\n                        [icon-feedback]=\"false\" [min-error-msg]=\"'Minimum 2 char allowed'\" [max-error-msg]=\"'Maximum 20 char allowed'\" [max-length]=\"20\">\n                    </amexio-text-input>\n                </amexio-column>\n                <amexio-column size=\"6\">\n                    <amexio-text-input formControlName=\"LastName\" [(ngModel)]=\"registration.lastName\" [field-label]=\"'Last Name'\" [place-holder]=\"'Please enter last name'\" [allow-blank]=\"true\" [error-msg]=\"'errorMsg'\" [enable-popover]=\"true\" [min-length]=\"2\" [min-error-msg]=\"'Minimum 2 char allowed'\"\n                        [max-error-msg]=\"'Maximum 20 char allowed'\" [max-length]=\"20\">\n                        [icon-feedback]=\"true\" >\n                    </amexio-text-input>\n                </amexio-column>\n            </amexio-row>\n            <amexio-row>\n                <amexio-column size=\"6\">\n                    <amexio-email-input formControlName=\"Email\" [(ngModel)]=\"registration.email\" [field-label]=\"'Email Id'\" [place-holder]=\"'Please enter Email Id'\" [allow-blank]=\"false\" [error-msg]=\"'Please Enter Email Id'\" [enable-popover]=\"true\" [icon-feedback]=\"true\">\n                    </amexio-email-input>\n                </amexio-column>\n                <amexio-column size=\"6\">\n                    <amexio-number-input formControlName=\"Age\" [(ngModel)]=\"registration.age\" [enable-popover]=\"true\" [field-label]=\"'Age'\" [place-holder]=\"'Enter age'\" [error-msg]=\"'Please enter age'\" [min-value]=\"18\" [min-error-msg]=\"'age can not be less than 18'\" [max-value]=\"100\"\n                        [max-error-msg]=\"'age can not be greater than 100'\" [icon-feedback]=\"true\">\n                    </amexio-number-input>\n                </amexio-column>\n            </amexio-row>\n            <amexio-row>\n                <amexio-column size=\"12\">\n                    <amexio-fieldset [formGroup]=\"addressForm\" [collapsible]=\"true\" title=\"Address\">\n                        <amexio-row>\n                            <amexio-column size=\"5\">\n                                <amexio-textarea-input formControlName=\"TemporaryAddress\" [enable-popover]=\"true\" [(ngModel)]=\"registration.address.tempAddress\" [field-label]=\"'Temporary Address'\" [place-holder]=\"'Temporary address'\" [allow-blank]=\"false\" [error-msg]=\"'Please enter temporary address'\"\n                                    [icon-feedback]=\"true\" [rows]=\"'2'\" [columns]=\"'1'\">\n                                </amexio-textarea-input>\n                            </amexio-column>\n                            <amexio-column size=\"2\">\n                                <amexio-checkbox [field-label]=\"'Permanent address same as temporary address'\" (onSelection)=\"onCheckClick1($event)\">\n                                </amexio-checkbox>\n                            </amexio-column>\n                            <amexio-column size=\"5\">\n                                <amexio-textarea-input formControlName=\"PermanentAddress\" [(ngModel)]=\"registration.address.perAddress\" [enable-popover]=\"true\" [field-label]=\"'Permanent Address'\" [place-holder]=\"'Permanent address'\" [allow-blank]=\"false\" [error-msg]=\"'Please enter permanent address'\"\n                                    [icon-feedback]=\"true\" [rows]=\"'2'\" [columns]=\"'1'\">\n                                </amexio-textarea-input>\n                            </amexio-column>\n                        </amexio-row>\n                        <amexio-row>\n                            <amexio-column size=\"12\">\n                                <amexio-button [label]=\"'Add Address'\" [disabled]=\"!addressForm.valid\" [type]=\"'green'\" [tooltip]=\"'Save Form'\">\n                                </amexio-button>\n                            </amexio-column>\n                        </amexio-row>\n                    </amexio-fieldset>\n                </amexio-column>\n            </amexio-row>\n            <amexio-row>\n                <amexio-column size=\"6\">\n                    <amexio-radio-group formControlName=\"Gender\" [(ngModel)]=\"registration.gender\" [field-label]=\"'Gender'\" [horizontal]=\"true\" [display-field]=\"'genderName'\" [value-field]=\"'genderId'\" [data]=\"radioGroupData\">\n                    </amexio-radio-group>\n                </amexio-column>\n                <amexio-column size=\"6\">\n                    <amexio-checkbox formControlName=\"Agree\" [(ngModel)]=\"registration.agree\" [field-label]=\"'Agree'\">\n                    </amexio-checkbox>\n                </amexio-column>\n            </amexio-row>\n        </amexio-form-body>\n        <amexio-form-action>\n            <amexio-button [label]=\"'Save'\" [disabled]=\"!employeeFormInsideForm.valid\" [type]=\"'green'\" [tooltip]=\"'Save Form'\">\n            </amexio-button>\n        </amexio-form-action>\n    </amexio-form>\n\n    <br>\n    <b style=\"color:green\">Form Model Data : </b> {{employeeFormInsideForm.value | json}}<br>\n    <b style=\"color:green\">Inner Form Model Data : </b> {{addressForm.value | json}}<br>\n    <b style=\"color:blue\">UI Model Data </b>: {{registration|json}} <br>\n    <br>\n    <!-- Reactive forms group inside forms With <amexio-form>-->\n\n\n    <amexio-form [header]=\"true\" [formGroup]=\"employeeFormGroup\">\n        <amexio-form-header>\n            Reactive Forms Group Inside Forms\n        </amexio-form-header>\n        <amexio-form-body>\n            <amexio-row>\n                <amexio-column size=\"6\">\n                    <amexio-text-input formControlName=\"FirstName\" [(ngModel)]=\"registration1.firstName\" [field-label]=\"'First Name'\" [allow-blank]=\"true\" [error-msg]=\"'Please enter valid First Name'\" [enable-popover]=\"true\" [place-holder]=\"'Please enter first name'\" [min-length]=\"2\"\n                        [icon-feedback]=\"false\" [min-error-msg]=\"'Minimum 2 char allowed'\" [max-error-msg]=\"'Maximum 20 char allowed'\" [max-length]=\"20\">\n                    </amexio-text-input>\n                </amexio-column>\n                <amexio-column size=\"6\">\n                    <amexio-text-input formControlName=\"LastName\" [(ngModel)]=\"registration1.lastName\" [field-label]=\"'Last Name'\" [place-holder]=\"'Please enter last name'\" [allow-blank]=\"true\" [error-msg]=\"'errorMsg'\" [enable-popover]=\"true\" [min-length]=\"2\" [min-error-msg]=\"'Minimum 2 char allowed'\"\n                        [max-error-msg]=\"'Maximum 20 char allowed'\" [max-length]=\"20\">\n                        [icon-feedback]=\"true\" >\n                    </amexio-text-input>\n                </amexio-column>\n            </amexio-row>\n            <amexio-row>\n                <amexio-column size=\"6\">\n                    <amexio-email-input formControlName=\"Email\" [(ngModel)]=\"registration1.email\" [field-label]=\"'Email Id'\" [place-holder]=\"'Please enter Email Id'\" [allow-blank]=\"false\" [error-msg]=\"'Please Enter Email Id'\" [enable-popover]=\"true\" [icon-feedback]=\"true\">\n                    </amexio-email-input>\n                </amexio-column>\n                <amexio-column size=\"6\">\n                    <amexio-number-input formControlName=\"Age\" [(ngModel)]=\"registration1.age\" [enable-popover]=\"true\" [field-label]=\"'Age'\" [place-holder]=\"'Enter age'\" [error-msg]=\"'Please enter age'\" [min-value]=\"18\" [min-error-msg]=\"'age can not be less than 18'\" [max-value]=\"100\"\n                        [max-error-msg]=\"'age can not be greater than 100'\" [icon-feedback]=\"true\">\n                    </amexio-number-input>\n                </amexio-column>\n            </amexio-row>\n            <amexio-row>\n                <amexio-column size=\"12\">\n                    <amexio-fieldset formGroupName=\"AddressFormGroup\" [collapsible]=\"true\" title=\"Address\">\n                        <amexio-row>\n                            <amexio-column size=\"5\">\n                                <amexio-textarea-input formControlName=\"temporaryAddress\" [(ngModel)]=\"registration1.address.tempAddress\" [enable-popover]=\"true\" [field-label]=\"'Temporary Address'\" [place-holder]=\"'Temporary Address'\" [allow-blank]=\"false\" [error-msg]=\"'Please enter temporary address'\"\n                                    [icon-feedback]=\"true\" [rows]=\"'2'\" [columns]=\"'1'\">\n                                </amexio-textarea-input>\n                            </amexio-column>\n                            <amexio-column size=\"2\">\n                                <amexio-checkbox [field-label]=\"'Permanent address same as temporary address'\" (onSelection)=\"onCheckClick2($event)\">\n                                </amexio-checkbox>\n                            </amexio-column>\n                            <amexio-column size=\"5\">\n                                <amexio-textarea-input formControlName=\"permanentAddress\" [(ngModel)]=\"registration1.address.perAddress\" [enable-popover]=\"true\" [field-label]=\"'Permanent Address'\" [place-holder]=\"'Permanent Address'\" [allow-blank]=\"false\" [error-msg]=\"'Please enter permanent address'\"\n                                    [icon-feedback]=\"true\" [rows]=\"'2'\" [columns]=\"'1'\">\n                                </amexio-textarea-input>\n                            </amexio-column>\n                        </amexio-row>\n                    </amexio-fieldset>\n                </amexio-column>\n            </amexio-row>\n            <amexio-row>\n                <amexio-column size=\"6\">\n                    <amexio-radio-group formControlName=\"Gender\" [(ngModel)]=\"registration1.gender\" [field-label]=\"'Gender'\" [horizontal]=\"true\" [display-field]=\"'genderName'\" [value-field]=\"'genderId'\" [data]=\"radioGroupData\">\n                    </amexio-radio-group>\n                </amexio-column>\n                <amexio-column size=\"6\">\n                    <amexio-checkbox formControlName=\"Agree\" [(ngModel)]=\"registration1.agree\" [field-label]=\"'Agree'\">\n                    </amexio-checkbox>\n                </amexio-column>\n            </amexio-row>\n        </amexio-form-body>\n        <amexio-form-action>\n            <amexio-button [label]=\"'Save'\" [disabled]=\"!employeeFormGroup.valid\" [type]=\"'green'\" [tooltip]=\"'Save Form'\">\n            </amexio-button>\n        </amexio-form-action>\n    </amexio-form>\n\n    <br>\n    <b style=\"color:green\">Form Model Data : </b> {{employeeFormGroup.value | json}}<br>\n    <b style=\"color:blue\">UI Model Data </b>: {{registration1|json}} <br>\n    <br>\n\n    <amexio-form [formGroup]=\"dynamicEmployeeForm\" header=\"true\" footer=\"false\">\n        <amexio-form-header>\n            Reactive Form with Dynamic Forms\n        </amexio-form-header>\n        <amexio-form-body>\n            <amexio-row>\n                <amexio-column size=\"6\">\n                    <amexio-text-input formControlName=\"FirstName\" [(ngModel)]=\"dynamicFormsReg.firstName\" [field-label]=\"'First Name'\" [allow-blank]=\"true\" [error-msg]=\"'Please enter valid First Name'\" [enable-popover]=\"true\" [place-holder]=\"'Please enter first name'\" [min-length]=\"2\"\n                        [icon-feedback]=\"false\" [min-error-msg]=\"'Minimum 2 char allowed'\" [max-error-msg]=\"'Maximum 20 char allowed'\" [max-length]=\"20\">\n                    </amexio-text-input>\n                </amexio-column>\n                <amexio-column size=\"6\">\n                    <amexio-text-input formControlName=\"LastName\" [(ngModel)]=\"dynamicFormsReg.lastName\" [field-label]=\"'Last Name'\" [place-holder]=\"'Please enter last name'\" [allow-blank]=\"true\" [error-msg]=\"'errorMsg'\" [enable-popover]=\"true\" [min-length]=\"2\" [min-error-msg]=\"'Minimum 2 char allowed'\"\n                        [max-error-msg]=\"'Maximum 20 char allowed'\" [max-length]=\"20\">\n                        [icon-feedback]=\"true\" >\n                    </amexio-text-input>\n                </amexio-column>\n            </amexio-row>\n            <amexio-row>\n                <amexio-column size=\"6\">\n                    <amexio-email-input formControlName=\"Email\" [(ngModel)]=\"dynamicFormsReg.email\" [field-label]=\"'Email Id'\" [place-holder]=\"'Please enter Email Id'\" [allow-blank]=\"false\" [error-msg]=\"'Please Enter Email Id'\" [enable-popover]=\"true\" [icon-feedback]=\"true\">\n                    </amexio-email-input>\n                </amexio-column>\n                <amexio-column size=\"6\">\n                    <amexio-number-input formControlName=\"Age\" [(ngModel)]=\"dynamicFormsReg.age\" [enable-popover]=\"true\" [field-label]=\"'Age'\" [place-holder]=\"'Enter age'\" [error-msg]=\"'Please enter age'\" [min-value]=\"18\" [min-error-msg]=\"'age can not be less than 18'\" [max-value]=\"100\"\n                        [max-error-msg]=\"'age can not be greater than 100'\" [icon-feedback]=\"true\">\n                    </amexio-number-input>\n                </amexio-column>\n            </amexio-row>\n            <amexio-row>\n                <amexio-column size=\"6\">\n                    <amexio-button [label]=\"'Add Phone'\" [type]=\"'green'\" [tooltip]=\"'Add Phone'\" (onClick)=\"addPhoneClick()\">\n                    </amexio-button>\n                </amexio-column>\n            </amexio-row>\n            <amexio-fieldset *ngIf=\"enableFieldSet\" formArrayName=\"phones\" [collapsible]=\"false\" [title]=\"'Add Phone Numbers'\">\n                <amexio-row *ngFor=\"let phone of phoneForms.controls;let i=index\" [formGroupName]=\"i\">\n                    <amexio-column size=\"3\">\n                        <amexio-text-input formControlName=\"phoneLabel\" [(ngModel)]=\"phone.phoneLabel\" enable-popover=\"true\" field-label=\"Phone Label\" name=\"phoneLabel\" error-msg=\"Please add phone label\" place-holder=\"Enter phone label\" allow-blank=\"false\" min-length=\"3\" min-error-msg=\"Minimum 3 char required\"\n                            max-length=\"10\" max-error-msg=\"Maximum 10 char allowed\" icon-feedback=\"true\">\n                        </amexio-text-input>\n                    </amexio-column>\n                    <amexio-column size=\"3\">\n                        <amexio-text-input formControlName=\"countryCode\" [(ngModel)]=\"phone.countryCode\" enable-popover=\"true\" field-label=\"Country Code\" name=\"countryCode\" error-msg=\"Please add country code\" place-holder=\"Enter country code\" allow-blank=\"false\" min-length=\"1\"\n                            min-error-msg=\"Minimum 1 char required\" max-length=\"10\" max-error-msg=\"Maximum 10 char allowed\" icon-feedback=\"true\">\n                        </amexio-text-input>\n                    </amexio-column>\n                    <amexio-column size=\"3\">\n                        <amexio-text-input formControlName=\"phoneNumber\" [(ngModel)]=\"phone.phoneNumber\" enable-popover=\"true\" field-label=\"Phone Number\" name=\"phoneNumber\" error-msg=\"Please add phone number\" place-holder=\"Enter phone number\" allow-blank=\"false\" min-length=\"8\"\n                            min-error-msg=\"Minimum 8 char required\" max-length=\"10\" max-error-msg=\"Maximum 10 char allowed\" icon-feedback=\"true\">\n                        </amexio-text-input>\n                    </amexio-column>\n                    <amexio-column size=\"3\">\n                        <!-- <amexio-button  [label]=\"'Add'\"  [type]=\"'green'\" [tooltip]=\"'add'\"  [icon]=\"'fa fa-check'\" (onClick)=\"addClick({'phoneLabel':phone.phoneLabel,'countryCode':phone.countryCode,'phoneNumber':phone.phoneNumber})\">\n                                </amexio-button> -->\n                        <amexio-button [label]=\"'Delete'\" [type]=\"'red'\" [tooltip]=\"'delete'\" [icon]=\"'fa fa-trash'\" (onClick)=\"onDeleteClick(i)\">\n                        </amexio-button>\n                    </amexio-column>\n                </amexio-row>\n            </amexio-fieldset>\n            <amexio-row>\n                <amexio-column size=\"6\">\n                    <amexio-radio-group formControlName=\"Gender\" [(ngModel)]=\"dynamicFormsReg.gender\" [field-label]=\"'Gender'\" [horizontal]=\"true\" [display-field]=\"'genderName'\" [value-field]=\"'genderId'\" [data]=\"radioGroupData\">\n                    </amexio-radio-group>\n                </amexio-column>\n                <amexio-column size=\"6\">\n                    <amexio-checkbox formControlName=\"Agree\" [(ngModel)]=\"dynamicFormsReg.agree\" [field-label]=\"'Agree'\">\n                    </amexio-checkbox>\n                </amexio-column>\n            </amexio-row>\n        </amexio-form-body>\n\n        <amexio-form-action>\n            <amexio-button [label]=\"'Save'\" [disabled]=\"!dynamicEmployeeForm.valid\" [type]=\"'green'\" [tooltip]=\"'Save Form'\">\n            </amexio-button>\n        </amexio-form-action>\n    </amexio-form>\n\n\n    <br>\n    <b style=\"color:green\">Form Model Data : </b> {{dynamicEmployeeForm.value | json}}<br>\n    <!-- <b style=\"color:blue\">UI Model Data </b>: {{dynamicFormsReg|json}} <br> -->\n\n\n    </amexio-api-demo>\n    </amexio-api-structure>\n"

/***/ })

}]);
//# sourceMappingURL=Forms-forms-module.js.map