(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panes-reactiveform-reactiveform-demo-module"],{

/***/ "./src/app/panes/reactiveform/reactiveform.demo.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/panes/reactiveform/reactiveform.demo.component.ts ***!
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
        this.getHtmlAndTypeScriptCode();
    }
    reactiveFormComponent.prototype.ngOnInit = function () {
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
    //TO LOAD HTML AND TYPESCRIPT CODE
    reactiveFormComponent.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/pane/reactiveform/form.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/pane/reactiveform/form.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
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
            template: __webpack_require__(/*! ./reactiveform.demo.html */ "./src/app/panes/reactiveform/reactiveform.demo.html"),
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

/***/ "./src/app/panes/reactiveform/reactiveform.demo.html":
/*!***********************************************************!*\
  !*** ./src/app/panes/reactiveform/reactiveform.demo.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card header=\"true\">\n    <amexio-header>\n        Reactive Forms With Amexio Inputs Components\n    </amexio-header>\n    <amexio-body>\n        <p>\n            Reactive forms provide a model-driven approach to handling form inputs whose values change over time.<br> Reactive forms can be used basically for validation purposes and below examples show reactive forms with amexio inputs components. User\n            can add any complex validations.\n        </p>\n        <amexio-tab-view>\n            <amexio-tab title=\"Demo\" active=\"true\">\n                <!-- Reactive Forms with Amexio Form With <amexio-form> -->\n\n                <amexio-form [header]=\"true\" [formGroup]=\"employeeForm\">\n                    <amexio-form-header>\n                        Simple Reactive Forms\n                    </amexio-form-header>\n                    <amexio-form-body>\n                        <amexio-row>\n                            <amexio-column size=\"6\">\n                                <amexio-text-input formControlName=\"FirstName\" [(ngModel)]=\"emplpoyeeRegistration.firstName\" [field-label]=\"'First Name'\" [allow-blank]=\"true\" [error-msg]=\"'Please enter valid First Name'\" [enable-popover]=\"true\" [place-holder]=\"'Please enter first name'\"\n                                    [min-length]=\"2\" [icon-feedback]=\"false\" [min-error-msg]=\"'Minimum 2 char allowed'\" [max-error-msg]=\"'Maximum 20 char allowed'\" [max-length]=\"20\">\n                                </amexio-text-input>\n                            </amexio-column>\n                            <amexio-column size=\"6\">\n                                <amexio-text-input formControlName=\"LastName\" [(ngModel)]=\"emplpoyeeRegistration.lastName\" [field-label]=\"'Last Name'\" [place-holder]=\"'Please enter last name'\" [allow-blank]=\"true\" [error-msg]=\"'errorMsg'\" [enable-popover]=\"true\" [min-length]=\"2\" [min-error-msg]=\"'Minimum 2 char allowed'\"\n                                    [max-error-msg]=\"'Maximum 20 char allowed'\" [max-length]=\"20\">\n                                    [icon-feedback]=\"true\" >\n                                </amexio-text-input>\n                            </amexio-column>\n                        </amexio-row>\n                        <amexio-row>\n                            <amexio-column size=\"6\">\n                                <amexio-email-input formControlName=\"Email\" [(ngModel)]=\"emplpoyeeRegistration.email\" [field-label]=\"'Email Id'\" [place-holder]=\"'Please enter Email Id'\" [allow-blank]=\"false\" [error-msg]=\"'Please Enter Email Id'\" [enable-popover]=\"true\" [icon-feedback]=\"true\">\n                                </amexio-email-input>\n                            </amexio-column>\n                            <amexio-column size=\"6\">\n                                <amexio-number-input formControlName=\"Age\" [(ngModel)]=\"emplpoyeeRegistration.age\" [enable-popover]=\"true\" [field-label]=\"'Age'\" [place-holder]=\"'Enter age'\" [error-msg]=\"'Please enter age'\" [min-value]=\"18\" [min-error-msg]=\"'age can not be less than 18'\"\n                                    [max-value]=\"100\" [max-error-msg]=\"'age can not be greater than 100'\" [icon-feedback]=\"true\">\n                                </amexio-number-input>\n                            </amexio-column>\n                        </amexio-row>\n                        <amexio-row>\n                            <amexio-column size=\"6\">\n                                <amexio-radio-group formControlName=\"Gender\" [(ngModel)]=\"emplpoyeeRegistration.gender\" [field-label]=\"'Gender'\" [horizontal]=\"true\" [display-field]=\"'genderName'\" [value-field]=\"'genderId'\" [data]=\"radioGroupData\">\n                                </amexio-radio-group>\n                            </amexio-column>\n                            <amexio-column size=\"6\">\n                                <amexio-checkbox formControlName=\"Agree\" [(ngModel)]=\"emplpoyeeRegistration.agree\" [field-label]=\"'Agree'\">\n                                </amexio-checkbox>\n                            </amexio-column>\n                        </amexio-row>\n                    </amexio-form-body>\n                    <amexio-form-action>\n                        <amexio-button [label]=\"'Save'\" [disabled]=\"!employeeForm.valid\" [type]=\"'green'\" [tooltip]=\"'Save Form'\">\n                        </amexio-button>\n                    </amexio-form-action>\n\n                </amexio-form>\n\n                <br>\n                <b style=\"color:green\">Form Model Data : </b> {{employeeForm.value | json}}<br>\n                <b style=\"color:blue\">UI Model Data </b>: {{emplpoyeeRegistration|json}} <br>\n\n                <!-- Reactive Forms Within Form Amexio Form With <amexio-form> -->\n                <br>\n\n                <amexio-form [header]=\"true\" [footer-align]=\"'right'\" [formGroup]=\"employeeFormInsideForm\">\n                    <amexio-form-header>\n                        Reactive Forms Within Forms\n                    </amexio-form-header>\n                    <amexio-form-body>\n                        <amexio-row>\n                            <amexio-column size=\"6\">\n                                <amexio-text-input formControlName=\"FirstName\" [(ngModel)]=\"registration.firstName\" [field-label]=\"'First Name'\" [allow-blank]=\"true\" [error-msg]=\"'Please enter valid First Name'\" [enable-popover]=\"true\" [place-holder]=\"'Please enter first name'\" [min-length]=\"2\"\n                                    [icon-feedback]=\"false\" [min-error-msg]=\"'Minimum 2 char allowed'\" [max-error-msg]=\"'Maximum 20 char allowed'\" [max-length]=\"20\">\n                                </amexio-text-input>\n                            </amexio-column>\n                            <amexio-column size=\"6\">\n                                <amexio-text-input formControlName=\"LastName\" [(ngModel)]=\"registration.lastName\" [field-label]=\"'Last Name'\" [place-holder]=\"'Please enter last name'\" [allow-blank]=\"true\" [error-msg]=\"'errorMsg'\" [enable-popover]=\"true\" [min-length]=\"2\" [min-error-msg]=\"'Minimum 2 char allowed'\"\n                                    [max-error-msg]=\"'Maximum 20 char allowed'\" [max-length]=\"20\">\n                                    [icon-feedback]=\"true\" >\n                                </amexio-text-input>\n                            </amexio-column>\n                        </amexio-row>\n                        <amexio-row>\n                            <amexio-column size=\"6\">\n                                <amexio-email-input formControlName=\"Email\" [(ngModel)]=\"registration.email\" [field-label]=\"'Email Id'\" [place-holder]=\"'Please enter Email Id'\" [allow-blank]=\"false\" [error-msg]=\"'Please Enter Email Id'\" [enable-popover]=\"true\" [icon-feedback]=\"true\">\n                                </amexio-email-input>\n                            </amexio-column>\n                            <amexio-column size=\"6\">\n                                <amexio-number-input formControlName=\"Age\" [(ngModel)]=\"registration.age\" [enable-popover]=\"true\" [field-label]=\"'Age'\" [place-holder]=\"'Enter age'\" [error-msg]=\"'Please enter age'\" [min-value]=\"18\" [min-error-msg]=\"'age can not be less than 18'\" [max-value]=\"100\"\n                                    [max-error-msg]=\"'age can not be greater than 100'\" [icon-feedback]=\"true\">\n                                </amexio-number-input>\n                            </amexio-column>\n                        </amexio-row>\n                        <amexio-row>\n                            <amexio-column size=\"12\">\n                                <amexio-fieldset [formGroup]=\"addressForm\" [collapsible]=\"true\" title=\"Address\">\n                                    <amexio-row>\n                                        <amexio-column size=\"5\">\n                                            <amexio-textarea-input formControlName=\"TemporaryAddress\" [enable-popover]=\"true\" [(ngModel)]=\"registration.address.tempAddress\" [field-label]=\"'Temporary Address'\" [place-holder]=\"'Temporary address'\" [allow-blank]=\"false\" [error-msg]=\"'Please enter temporary address'\"\n                                                [icon-feedback]=\"true\" [rows]=\"'2'\" [columns]=\"'1'\">\n                                            </amexio-textarea-input>\n                                        </amexio-column>\n                                        <amexio-column size=\"2\">\n                                            <amexio-checkbox [field-label]=\"'Permanent address same as temporary address'\" (onSelection)=\"onCheckClick1($event)\">\n                                            </amexio-checkbox>\n                                        </amexio-column>\n                                        <amexio-column size=\"5\">\n                                            <amexio-textarea-input formControlName=\"PermanentAddress\" [(ngModel)]=\"registration.address.perAddress\" [enable-popover]=\"true\" [field-label]=\"'Permanent Address'\" [place-holder]=\"'Permanent address'\" [allow-blank]=\"false\" [error-msg]=\"'Please enter permanent address'\"\n                                                [icon-feedback]=\"true\" [rows]=\"'2'\" [columns]=\"'1'\">\n                                            </amexio-textarea-input>\n                                        </amexio-column>\n                                    </amexio-row>\n                                    <amexio-row>\n                                        <amexio-column size=\"12\">\n                                            <amexio-button [label]=\"'Add Address'\" [disabled]=\"!addressForm.valid\" [type]=\"'green'\" [tooltip]=\"'Save Form'\">\n                                            </amexio-button>\n                                        </amexio-column>\n                                    </amexio-row>\n                                </amexio-fieldset>\n                            </amexio-column>\n                        </amexio-row>\n                        <amexio-row>\n                            <amexio-column size=\"6\">\n                                <amexio-radio-group formControlName=\"Gender\" [(ngModel)]=\"registration.gender\" [field-label]=\"'Gender'\" [horizontal]=\"true\" [display-field]=\"'genderName'\" [value-field]=\"'genderId'\" [data]=\"radioGroupData\">\n                                </amexio-radio-group>\n                            </amexio-column>\n                            <amexio-column size=\"6\">\n                                <amexio-checkbox formControlName=\"Agree\" [(ngModel)]=\"registration.agree\" [field-label]=\"'Agree'\">\n                                </amexio-checkbox>\n                            </amexio-column>\n                        </amexio-row>\n                    </amexio-form-body>\n                    <amexio-form-action>\n                        <amexio-button [label]=\"'Save'\" [disabled]=\"!employeeFormInsideForm.valid\" [type]=\"'green'\" [tooltip]=\"'Save Form'\">\n                        </amexio-button>\n                    </amexio-form-action>\n                </amexio-form>\n\n                <br>\n                <b style=\"color:green\">Form Model Data : </b> {{employeeFormInsideForm.value | json}}<br>\n                <b style=\"color:green\">Inner Form Model Data : </b> {{addressForm.value | json}}<br>\n                <b style=\"color:blue\">UI Model Data </b>: {{registration|json}} <br>\n                <br>\n                <!-- Reactive forms group inside forms With <amexio-form>-->\n\n\n                <amexio-form [header]=\"true\" [formGroup]=\"employeeFormGroup\">\n                    <amexio-form-header>\n                        Reactive Forms Group Inside Forms\n                    </amexio-form-header>\n                    <amexio-form-body>\n                        <amexio-row>\n                            <amexio-column size=\"6\">\n                                <amexio-text-input formControlName=\"FirstName\" [(ngModel)]=\"registration1.firstName\" [field-label]=\"'First Name'\" [allow-blank]=\"true\" [error-msg]=\"'Please enter valid First Name'\" [enable-popover]=\"true\" [place-holder]=\"'Please enter first name'\" [min-length]=\"2\"\n                                    [icon-feedback]=\"false\" [min-error-msg]=\"'Minimum 2 char allowed'\" [max-error-msg]=\"'Maximum 20 char allowed'\" [max-length]=\"20\">\n                                </amexio-text-input>\n                            </amexio-column>\n                            <amexio-column size=\"6\">\n                                <amexio-text-input formControlName=\"LastName\" [(ngModel)]=\"registration1.lastName\" [field-label]=\"'Last Name'\" [place-holder]=\"'Please enter last name'\" [allow-blank]=\"true\" [error-msg]=\"'errorMsg'\" [enable-popover]=\"true\" [min-length]=\"2\" [min-error-msg]=\"'Minimum 2 char allowed'\"\n                                    [max-error-msg]=\"'Maximum 20 char allowed'\" [max-length]=\"20\">\n                                    [icon-feedback]=\"true\" >\n                                </amexio-text-input>\n                            </amexio-column>\n                        </amexio-row>\n                        <amexio-row>\n                            <amexio-column size=\"6\">\n                                <amexio-email-input formControlName=\"Email\" [(ngModel)]=\"registration1.email\" [field-label]=\"'Email Id'\" [place-holder]=\"'Please enter Email Id'\" [allow-blank]=\"false\" [error-msg]=\"'Please Enter Email Id'\" [enable-popover]=\"true\" [icon-feedback]=\"true\">\n                                </amexio-email-input>\n                            </amexio-column>\n                            <amexio-column size=\"6\">\n                                <amexio-number-input formControlName=\"Age\" [(ngModel)]=\"registration1.age\" [enable-popover]=\"true\" [field-label]=\"'Age'\" [place-holder]=\"'Enter age'\" [error-msg]=\"'Please enter age'\" [min-value]=\"18\" [min-error-msg]=\"'age can not be less than 18'\" [max-value]=\"100\"\n                                    [max-error-msg]=\"'age can not be greater than 100'\" [icon-feedback]=\"true\">\n                                </amexio-number-input>\n                            </amexio-column>\n                        </amexio-row>\n                        <amexio-row>\n                            <amexio-column size=\"12\">\n                                <amexio-fieldset formGroupName=\"AddressFormGroup\" [collapsible]=\"true\" title=\"Address\">\n                                    <amexio-row>\n                                        <amexio-column size=\"5\">\n                                            <amexio-textarea-input formControlName=\"temporaryAddress\" [(ngModel)]=\"registration1.address.tempAddress\" [enable-popover]=\"true\" [field-label]=\"'Temporary Address'\" [place-holder]=\"'Temporary Address'\" [allow-blank]=\"false\" [error-msg]=\"'Please enter temporary address'\"\n                                                [icon-feedback]=\"true\" [rows]=\"'2'\" [columns]=\"'1'\">\n                                            </amexio-textarea-input>\n                                        </amexio-column>\n                                        <amexio-column size=\"2\">\n                                            <amexio-checkbox [field-label]=\"'Permanent address same as temporary address'\" (onSelection)=\"onCheckClick2($event)\">\n                                            </amexio-checkbox>\n                                        </amexio-column>\n                                        <amexio-column size=\"5\">\n                                            <amexio-textarea-input formControlName=\"permanentAddress\" [(ngModel)]=\"registration1.address.perAddress\" [enable-popover]=\"true\" [field-label]=\"'Permanent Address'\" [place-holder]=\"'Permanent Address'\" [allow-blank]=\"false\" [error-msg]=\"'Please enter permanent address'\"\n                                                [icon-feedback]=\"true\" [rows]=\"'2'\" [columns]=\"'1'\">\n                                            </amexio-textarea-input>\n                                        </amexio-column>\n                                    </amexio-row>\n                                </amexio-fieldset>\n                            </amexio-column>\n                        </amexio-row>\n                        <amexio-row>\n                            <amexio-column size=\"6\">\n                                <amexio-radio-group formControlName=\"Gender\" [(ngModel)]=\"registration1.gender\" [field-label]=\"'Gender'\" [horizontal]=\"true\" [display-field]=\"'genderName'\" [value-field]=\"'genderId'\" [data]=\"radioGroupData\">\n                                </amexio-radio-group>\n                            </amexio-column>\n                            <amexio-column size=\"6\">\n                                <amexio-checkbox formControlName=\"Agree\" [(ngModel)]=\"registration1.agree\" [field-label]=\"'Agree'\">\n                                </amexio-checkbox>\n                            </amexio-column>\n                        </amexio-row>\n                    </amexio-form-body>\n                    <amexio-form-action>\n                        <amexio-button [label]=\"'Save'\" [disabled]=\"!employeeFormGroup.valid\" [type]=\"'green'\" [tooltip]=\"'Save Form'\">\n                        </amexio-button>\n                    </amexio-form-action>\n                </amexio-form>\n\n                <br>\n                <b style=\"color:green\">Form Model Data : </b> {{employeeFormGroup.value | json}}<br>\n                <b style=\"color:blue\">UI Model Data </b>: {{registration1|json}} <br>\n                <br>\n\n                <amexio-form [formGroup]=\"dynamicEmployeeForm\" header=\"true\" footer=\"false\">\n                    <amexio-form-header>\n                        Reactive Form with Dynamic Forms\n                    </amexio-form-header>\n                    <amexio-form-body>\n                        <amexio-row>\n                            <amexio-column size=\"6\">\n                                <amexio-text-input formControlName=\"FirstName\" [(ngModel)]=\"dynamicFormsReg.firstName\" [field-label]=\"'First Name'\" [allow-blank]=\"true\" [error-msg]=\"'Please enter valid First Name'\" [enable-popover]=\"true\" [place-holder]=\"'Please enter first name'\" [min-length]=\"2\"\n                                    [icon-feedback]=\"false\" [min-error-msg]=\"'Minimum 2 char allowed'\" [max-error-msg]=\"'Maximum 20 char allowed'\" [max-length]=\"20\">\n                                </amexio-text-input>\n                            </amexio-column>\n                            <amexio-column size=\"6\">\n                                <amexio-text-input formControlName=\"LastName\" [(ngModel)]=\"dynamicFormsReg.lastName\" [field-label]=\"'Last Name'\" [place-holder]=\"'Please enter last name'\" [allow-blank]=\"true\" [error-msg]=\"'errorMsg'\" [enable-popover]=\"true\" [min-length]=\"2\" [min-error-msg]=\"'Minimum 2 char allowed'\"\n                                    [max-error-msg]=\"'Maximum 20 char allowed'\" [max-length]=\"20\">\n                                    [icon-feedback]=\"true\" >\n                                </amexio-text-input>\n                            </amexio-column>\n                        </amexio-row>\n                        <amexio-row>\n                            <amexio-column size=\"6\">\n                                <amexio-email-input formControlName=\"Email\" [(ngModel)]=\"dynamicFormsReg.email\" [field-label]=\"'Email Id'\" [place-holder]=\"'Please enter Email Id'\" [allow-blank]=\"false\" [error-msg]=\"'Please Enter Email Id'\" [enable-popover]=\"true\" [icon-feedback]=\"true\">\n                                </amexio-email-input>\n                            </amexio-column>\n                            <amexio-column size=\"6\">\n                                <amexio-number-input formControlName=\"Age\" [(ngModel)]=\"dynamicFormsReg.age\" [enable-popover]=\"true\" [field-label]=\"'Age'\" [place-holder]=\"'Enter age'\" [error-msg]=\"'Please enter age'\" [min-value]=\"18\" [min-error-msg]=\"'age can not be less than 18'\" [max-value]=\"100\"\n                                    [max-error-msg]=\"'age can not be greater than 100'\" [icon-feedback]=\"true\">\n                                </amexio-number-input>\n                            </amexio-column>\n                        </amexio-row>\n                        <amexio-row>\n                            <amexio-column size=\"6\">\n                                <amexio-button [label]=\"'Add Phone'\" [type]=\"'green'\" [tooltip]=\"'Add Phone'\" (onClick)=\"addPhoneClick()\">\n                                </amexio-button>\n                            </amexio-column>\n                        </amexio-row>\n                        <amexio-fieldset *ngIf=\"enableFieldSet\" formArrayName=\"phones\" [collapsible]=\"false\" [title]=\"'Add Phone Numbers'\">\n                            <amexio-row *ngFor=\"let phone of phoneForms.controls;let i=index\" [formGroupName]=\"i\">\n                                <amexio-column size=\"3\">\n                                    <amexio-text-input formControlName=\"phoneLabel\" [(ngModel)]=\"phone.phoneLabel\" enable-popover=\"true\" field-label=\"Phone Label\" name=\"phoneLabel\" error-msg=\"Please add phone label\" place-holder=\"Enter phone label\" allow-blank=\"false\" min-length=\"3\" min-error-msg=\"Minimum 3 char required\"\n                                        max-length=\"10\" max-error-msg=\"Maximum 10 char allowed\" icon-feedback=\"true\">\n                                    </amexio-text-input>\n                                </amexio-column>\n                                <amexio-column size=\"3\">\n                                    <amexio-text-input formControlName=\"countryCode\" [(ngModel)]=\"phone.countryCode\" enable-popover=\"true\" field-label=\"Country Code\" name=\"countryCode\" error-msg=\"Please add country code\" place-holder=\"Enter country code\" allow-blank=\"false\" min-length=\"1\"\n                                        min-error-msg=\"Minimum 1 char required\" max-length=\"10\" max-error-msg=\"Maximum 10 char allowed\" icon-feedback=\"true\">\n                                    </amexio-text-input>\n                                </amexio-column>\n                                <amexio-column size=\"3\">\n                                    <amexio-text-input formControlName=\"phoneNumber\" [(ngModel)]=\"phone.phoneNumber\" enable-popover=\"true\" field-label=\"Phone Number\" name=\"phoneNumber\" error-msg=\"Please add phone number\" place-holder=\"Enter phone number\" allow-blank=\"false\" min-length=\"8\"\n                                        min-error-msg=\"Minimum 8 char required\" max-length=\"10\" max-error-msg=\"Maximum 10 char allowed\" icon-feedback=\"true\">\n                                    </amexio-text-input>\n                                </amexio-column>\n                                <amexio-column size=\"3\">\n                                    <!-- <amexio-button  [label]=\"'Add'\"  [type]=\"'green'\" [tooltip]=\"'add'\"  [icon]=\"'fa fa-check'\" (onClick)=\"addClick({'phoneLabel':phone.phoneLabel,'countryCode':phone.countryCode,'phoneNumber':phone.phoneNumber})\">\n                                            </amexio-button> -->\n                                    <amexio-button [label]=\"'Delete'\" [type]=\"'red'\" [tooltip]=\"'delete'\" [icon]=\"'fa fa-trash'\" (onClick)=\"onDeleteClick(i)\">\n                                    </amexio-button>\n                                </amexio-column>\n                            </amexio-row>\n                        </amexio-fieldset>\n                        <amexio-row>\n                            <amexio-column size=\"6\">\n                                <amexio-radio-group formControlName=\"Gender\" [(ngModel)]=\"dynamicFormsReg.gender\" [field-label]=\"'Gender'\" [horizontal]=\"true\" [display-field]=\"'genderName'\" [value-field]=\"'genderId'\" [data]=\"radioGroupData\">\n                                </amexio-radio-group>\n                            </amexio-column>\n                            <amexio-column size=\"6\">\n                                <amexio-checkbox formControlName=\"Agree\" [(ngModel)]=\"dynamicFormsReg.agree\" [field-label]=\"'Agree'\">\n                                </amexio-checkbox>\n                            </amexio-column>\n                        </amexio-row>\n                    </amexio-form-body>\n\n                    <amexio-form-action>\n                        <amexio-button [label]=\"'Save'\" [disabled]=\"!dynamicEmployeeForm.valid\" [type]=\"'green'\" [tooltip]=\"'Save Form'\">\n                        </amexio-button>\n                    </amexio-form-action>\n                </amexio-form>\n\n\n                <br>\n                <b style=\"color:green\">Form Model Data : </b> {{dynamicEmployeeForm.value | json}}<br>\n                <!-- <b style=\"color:blue\">UI Model Data </b>: {{dynamicFormsReg|json}} <br> -->\n\n            </amexio-tab>\n\n            <amexio-tab title=\"Source\">\n                <div style=\"overflow-y: scroll\">\n                    <div style=\"overflow-y: scroll\">\n                        <amexio-vertical-tab-view>\n                            <amexio-tab title=\"HTML\" [active]=\"true\">\n                                <ng-container *ngIf=\"htmlCode\">\n                                    <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                                    <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                                </ng-container>\n                            </amexio-tab>\n                            <amexio-tab title=\"Type Script\">\n                                <ng-container *ngIf=\"typeScriptCode\">\n                                    <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                                </ng-container>\n                            </amexio-tab>\n                        </amexio-vertical-tab-view>\n                    </div>\n                </div>\n\n            </amexio-tab>\n            <amexio-tab title=\"Live\">\n                <p align=\"center\">Amexio Sandbox</p>\n                <b>Simple Reactive Forms With Amexio Inputs Comonents</b>\n                <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/simple-reactive-forms-tu9tkf?file=src%2Fapp%2Famexio-reactive-forms%2Famexio-reactive-forms%2Famexio-reactive-forms.component.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n                <br>\n                <b>Simple Reactive Forms Within Forms</b>\n                <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/reactive-forms-within-forms-wxnrvo?embed=1&file=src/app/app.component.ts\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n                <br>\n                <b>Simple Reactive Form Group Within Forms</b>\n                <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-reactive-form-group-inside-form-usemf8?embed=1&file=src/app/app.component.ts\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n            </amexio-tab>\n        </amexio-tab-view>\n    </amexio-body>\n</amexio-card>"

/***/ }),

/***/ "./src/app/panes/reactiveform/reactiveform.demo.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/panes/reactiveform/reactiveform.demo.module.ts ***!
  \****************************************************************/
/*! exports provided: ReactiveFormComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormComponentModule", function() { return ReactiveFormComponentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _reactiveform_demo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactiveform.demo.component */ "./src/app/panes/reactiveform/reactiveform.demo.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/**
 * Created by kedar kokil on 22/11/18.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: _reactiveform_demo_component__WEBPACK_IMPORTED_MODULE_1__["reactiveFormComponent"] }
];
var ReactiveFormComponentModule = /** @class */ (function () {
    function ReactiveFormComponentModule() {
    }
    ReactiveFormComponentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_6__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]],
            declarations: [_reactiveform_demo_component__WEBPACK_IMPORTED_MODULE_1__["reactiveFormComponent"]],
            providers: [],
        })
    ], ReactiveFormComponentModule);
    return ReactiveFormComponentModule;
}());



/***/ })

}]);
//# sourceMappingURL=panes-reactiveform-reactiveform-demo-module.js.map