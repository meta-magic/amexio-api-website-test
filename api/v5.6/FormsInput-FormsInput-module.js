(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["FormsInput-FormsInput-module"],{

/***/ "./src/app/FormsInput/FormsInput.module.ts":
/*!*************************************************!*\
  !*** ./src/app/FormsInput/FormsInput.module.ts ***!
  \*************************************************/
/*! exports provided: FormsInputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsInputModule", function() { return FormsInputModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _FormsInput_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormsInput.routes */ "./src/app/FormsInput/FormsInput.routes.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _singlecheckbox_singlecheckbox_demo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./singlecheckbox/singlecheckbox.demo */ "./src/app/FormsInput/singlecheckbox/singlecheckbox.demo.ts");
/* harmony import */ var _checkboxgroup_checkboxgroup_demo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkboxgroup/checkboxgroup.demo */ "./src/app/FormsInput/checkboxgroup/checkboxgroup.demo.ts");
/* harmony import */ var _chips_chips_demo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chips/chips.demo */ "./src/app/FormsInput/chips/chips.demo.ts");
/* harmony import */ var _creditcard_creditcard_demo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./creditcard/creditcard.demo */ "./src/app/FormsInput/creditcard/creditcard.demo.ts");
/* harmony import */ var _datepicker_datepicker_demo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./datepicker/datepicker.demo */ "./src/app/FormsInput/datepicker/datepicker.demo.ts");
/* harmony import */ var _dropdown_dropdown_demo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dropdown/dropdown.demo */ "./src/app/FormsInput/dropdown/dropdown.demo.ts");
/* harmony import */ var _dropdownfilter_dropdownfilter_demo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dropdownfilter/dropdownfilter.demo */ "./src/app/FormsInput/dropdownfilter/dropdownfilter.demo.ts");
/* harmony import */ var _dropdownmulti_dropdownmulti_demo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dropdownmulti/dropdownmulti.demo */ "./src/app/FormsInput/dropdownmulti/dropdownmulti.demo.ts");
/* harmony import */ var _dropdowntemplate_dropdowntemplate_demo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dropdowntemplate/dropdowntemplate.demo */ "./src/app/FormsInput/dropdowntemplate/dropdowntemplate.demo.ts");
/* harmony import */ var _email_email_demo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./email/email.demo */ "./src/app/FormsInput/email/email.demo.ts");
/* harmony import */ var _fileupload_fileupload_demo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./fileupload/fileupload.demo */ "./src/app/FormsInput/fileupload/fileupload.demo.ts");
/* harmony import */ var _label_label_demo__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./label/label.demo */ "./src/app/FormsInput/label/label.demo.ts");
/* harmony import */ var _number_number_demo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./number/number.demo */ "./src/app/FormsInput/number/number.demo.ts");
/* harmony import */ var _password_password_demo__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./password/password.demo */ "./src/app/FormsInput/password/password.demo.ts");
/* harmony import */ var _radiogroup_radiogroup_demo__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./radiogroup/radiogroup.demo */ "./src/app/FormsInput/radiogroup/radiogroup.demo.ts");
/* harmony import */ var _rating_rating_demo__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./rating/rating.demo */ "./src/app/FormsInput/rating/rating.demo.ts");
/* harmony import */ var _recaptcha_recaptcha_demo__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./recaptcha/recaptcha.demo */ "./src/app/FormsInput/recaptcha/recaptcha.demo.ts");
/* harmony import */ var _searchbox_searchbox_demo__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./searchbox/searchbox.demo */ "./src/app/FormsInput/searchbox/searchbox.demo.ts");
/* harmony import */ var _slider_slider_demo__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./slider/slider.demo */ "./src/app/FormsInput/slider/slider.demo.ts");
/* harmony import */ var _socialmedialogin_facebooklogin_facebooklogin_demo__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./socialmedialogin/facebooklogin/facebooklogin.demo */ "./src/app/FormsInput/socialmedialogin/facebooklogin/facebooklogin.demo.ts");
/* harmony import */ var _socialmedialogin_googlelogin_googlelogin_demo__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./socialmedialogin/googlelogin/googlelogin.demo */ "./src/app/FormsInput/socialmedialogin/googlelogin/googlelogin.demo.ts");
/* harmony import */ var _socialmedialogin_linkedinlogin_linkedinlogin_demo__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./socialmedialogin/linkedinlogin/linkedinlogin.demo */ "./src/app/FormsInput/socialmedialogin/linkedinlogin/linkedinlogin.demo.ts");
/* harmony import */ var _taginput_taginput_demo__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./taginput/taginput.demo */ "./src/app/FormsInput/taginput/taginput.demo.ts");
/* harmony import */ var _text_text_demo__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./text/text.demo */ "./src/app/FormsInput/text/text.demo.ts");
/* harmony import */ var _textarea_textarea_demo__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./textarea/textarea.demo */ "./src/app/FormsInput/textarea/textarea.demo.ts");
/* harmony import */ var _toggle_toggle_demo__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./toggle/toggle.demo */ "./src/app/FormsInput/toggle/toggle.demo.ts");
/* harmony import */ var _typeahead_typeahead_demo__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./typeahead/typeahead.demo */ "./src/app/FormsInput/typeahead/typeahead.demo.ts");
/* harmony import */ var _badge_badge_demo__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./badge/badge.demo */ "./src/app/FormsInput/badge/badge.demo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































/**
 * Created by kedar on 1/2/19.
 */
var FormsInputModule = /** @class */ (function () {
    function FormsInputModule() {
    }
    FormsInputModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_singlecheckbox_singlecheckbox_demo__WEBPACK_IMPORTED_MODULE_8__["SinglecheckboxDemo"], _checkboxgroup_checkboxgroup_demo__WEBPACK_IMPORTED_MODULE_9__["CheckBoxGroupDemo"], _chips_chips_demo__WEBPACK_IMPORTED_MODULE_10__["ChipsDemo"],
                _creditcard_creditcard_demo__WEBPACK_IMPORTED_MODULE_11__["CreditCardDemo"], _datepicker_datepicker_demo__WEBPACK_IMPORTED_MODULE_12__["DateTimePickerDemo"],
                _dropdown_dropdown_demo__WEBPACK_IMPORTED_MODULE_13__["DropDownDemo"], _dropdownfilter_dropdownfilter_demo__WEBPACK_IMPORTED_MODULE_14__["DropDownFilterDemo"], _dropdownmulti_dropdownmulti_demo__WEBPACK_IMPORTED_MODULE_15__["DropDownMultiDemo"], _dropdowntemplate_dropdowntemplate_demo__WEBPACK_IMPORTED_MODULE_16__["DropDownTemplateDemo"], _email_email_demo__WEBPACK_IMPORTED_MODULE_17__["EmailDemo"],
                _fileupload_fileupload_demo__WEBPACK_IMPORTED_MODULE_18__["FileuploadDemo"], _label_label_demo__WEBPACK_IMPORTED_MODULE_19__["LabelDemo"], _number_number_demo__WEBPACK_IMPORTED_MODULE_20__["NumberDemo"], _password_password_demo__WEBPACK_IMPORTED_MODULE_21__["PasswordDemo"], _radiogroup_radiogroup_demo__WEBPACK_IMPORTED_MODULE_22__["RadioGroupDemo"], _rating_rating_demo__WEBPACK_IMPORTED_MODULE_23__["RatingDemo"],
                _recaptcha_recaptcha_demo__WEBPACK_IMPORTED_MODULE_24__["RecaptchaDemo"], _searchbox_searchbox_demo__WEBPACK_IMPORTED_MODULE_25__["SearchBox"], _slider_slider_demo__WEBPACK_IMPORTED_MODULE_26__["SliderDemo"], _socialmedialogin_facebooklogin_facebooklogin_demo__WEBPACK_IMPORTED_MODULE_27__["FacebookLoginDemo"], _socialmedialogin_googlelogin_googlelogin_demo__WEBPACK_IMPORTED_MODULE_28__["GoogleLoginDemo"], _socialmedialogin_linkedinlogin_linkedinlogin_demo__WEBPACK_IMPORTED_MODULE_29__["LinkedinLoginDemo"],
                _taginput_taginput_demo__WEBPACK_IMPORTED_MODULE_30__["TagInputDemo"], _text_text_demo__WEBPACK_IMPORTED_MODULE_31__["TextDemo"], _textarea_textarea_demo__WEBPACK_IMPORTED_MODULE_32__["TextareaDemo"], _toggle_toggle_demo__WEBPACK_IMPORTED_MODULE_33__["ToggleDemo"], _typeahead_typeahead_demo__WEBPACK_IMPORTED_MODULE_34__["TypeAheadDemo"], _badge_badge_demo__WEBPACK_IMPORTED_MODULE_35__["BadgeDemo"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"].forRoot(),
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AmexioWidgetModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(_FormsInput_routes__WEBPACK_IMPORTED_MODULE_6__["FORMSINPUT_ROUTE"]),
            ],
            providers: [amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["LoadRecaptchaService"]]
        })
    ], FormsInputModule);
    return FormsInputModule;
}());



/***/ }),

/***/ "./src/app/FormsInput/FormsInput.routes.ts":
/*!*************************************************!*\
  !*** ./src/app/FormsInput/FormsInput.routes.ts ***!
  \*************************************************/
/*! exports provided: FORMSINPUT_ROUTE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORMSINPUT_ROUTE", function() { return FORMSINPUT_ROUTE; });
/* harmony import */ var _singlecheckbox_singlecheckbox_demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./singlecheckbox/singlecheckbox.demo */ "./src/app/FormsInput/singlecheckbox/singlecheckbox.demo.ts");
/* harmony import */ var _checkboxgroup_checkboxgroup_demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkboxgroup/checkboxgroup.demo */ "./src/app/FormsInput/checkboxgroup/checkboxgroup.demo.ts");
/* harmony import */ var _chips_chips_demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chips/chips.demo */ "./src/app/FormsInput/chips/chips.demo.ts");
/* harmony import */ var _creditcard_creditcard_demo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./creditcard/creditcard.demo */ "./src/app/FormsInput/creditcard/creditcard.demo.ts");
/* harmony import */ var _datepicker_datepicker_demo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datepicker/datepicker.demo */ "./src/app/FormsInput/datepicker/datepicker.demo.ts");
/* harmony import */ var _dropdown_dropdown_demo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dropdown/dropdown.demo */ "./src/app/FormsInput/dropdown/dropdown.demo.ts");
/* harmony import */ var _dropdownfilter_dropdownfilter_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropdownfilter/dropdownfilter.demo */ "./src/app/FormsInput/dropdownfilter/dropdownfilter.demo.ts");
/* harmony import */ var _dropdownmulti_dropdownmulti_demo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dropdownmulti/dropdownmulti.demo */ "./src/app/FormsInput/dropdownmulti/dropdownmulti.demo.ts");
/* harmony import */ var _dropdowntemplate_dropdowntemplate_demo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dropdowntemplate/dropdowntemplate.demo */ "./src/app/FormsInput/dropdowntemplate/dropdowntemplate.demo.ts");
/* harmony import */ var _email_email_demo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./email/email.demo */ "./src/app/FormsInput/email/email.demo.ts");
/* harmony import */ var _fileupload_fileupload_demo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fileupload/fileupload.demo */ "./src/app/FormsInput/fileupload/fileupload.demo.ts");
/* harmony import */ var _label_label_demo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./label/label.demo */ "./src/app/FormsInput/label/label.demo.ts");
/* harmony import */ var _number_number_demo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./number/number.demo */ "./src/app/FormsInput/number/number.demo.ts");
/* harmony import */ var _password_password_demo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./password/password.demo */ "./src/app/FormsInput/password/password.demo.ts");
/* harmony import */ var _radiogroup_radiogroup_demo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./radiogroup/radiogroup.demo */ "./src/app/FormsInput/radiogroup/radiogroup.demo.ts");
/* harmony import */ var _rating_rating_demo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./rating/rating.demo */ "./src/app/FormsInput/rating/rating.demo.ts");
/* harmony import */ var _recaptcha_recaptcha_demo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./recaptcha/recaptcha.demo */ "./src/app/FormsInput/recaptcha/recaptcha.demo.ts");
/* harmony import */ var _searchbox_searchbox_demo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./searchbox/searchbox.demo */ "./src/app/FormsInput/searchbox/searchbox.demo.ts");
/* harmony import */ var _slider_slider_demo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./slider/slider.demo */ "./src/app/FormsInput/slider/slider.demo.ts");
/* harmony import */ var _socialmedialogin_facebooklogin_facebooklogin_demo__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./socialmedialogin/facebooklogin/facebooklogin.demo */ "./src/app/FormsInput/socialmedialogin/facebooklogin/facebooklogin.demo.ts");
/* harmony import */ var _socialmedialogin_googlelogin_googlelogin_demo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./socialmedialogin/googlelogin/googlelogin.demo */ "./src/app/FormsInput/socialmedialogin/googlelogin/googlelogin.demo.ts");
/* harmony import */ var _socialmedialogin_linkedinlogin_linkedinlogin_demo__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./socialmedialogin/linkedinlogin/linkedinlogin.demo */ "./src/app/FormsInput/socialmedialogin/linkedinlogin/linkedinlogin.demo.ts");
/* harmony import */ var _taginput_taginput_demo__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./taginput/taginput.demo */ "./src/app/FormsInput/taginput/taginput.demo.ts");
/* harmony import */ var _text_text_demo__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./text/text.demo */ "./src/app/FormsInput/text/text.demo.ts");
/* harmony import */ var _textarea_textarea_demo__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./textarea/textarea.demo */ "./src/app/FormsInput/textarea/textarea.demo.ts");
/* harmony import */ var _toggle_toggle_demo__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./toggle/toggle.demo */ "./src/app/FormsInput/toggle/toggle.demo.ts");
/* harmony import */ var _typeahead_typeahead_demo__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./typeahead/typeahead.demo */ "./src/app/FormsInput/typeahead/typeahead.demo.ts");
/* harmony import */ var _badge_badge_demo__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./badge/badge.demo */ "./src/app/FormsInput/badge/badge.demo.ts");




























var FORMSINPUT_ROUTE = [
    {
        path: 'singlecheckbox-demo', component: _singlecheckbox_singlecheckbox_demo__WEBPACK_IMPORTED_MODULE_0__["SinglecheckboxDemo"],
    },
    {
        path: 'checkboxgroup-demo', component: _checkboxgroup_checkboxgroup_demo__WEBPACK_IMPORTED_MODULE_1__["CheckBoxGroupDemo"],
    },
    {
        path: 'chips-demo', component: _chips_chips_demo__WEBPACK_IMPORTED_MODULE_2__["ChipsDemo"],
    },
    {
        path: 'credit-card-demo', component: _creditcard_creditcard_demo__WEBPACK_IMPORTED_MODULE_3__["CreditCardDemo"],
    },
    {
        path: 'date-picker-demo', component: _datepicker_datepicker_demo__WEBPACK_IMPORTED_MODULE_4__["DateTimePickerDemo"],
    },
    {
        path: 'dropdownbasic', component: _dropdown_dropdown_demo__WEBPACK_IMPORTED_MODULE_5__["DropDownDemo"],
    },
    {
        path: 'dropdownfilter', component: _dropdownfilter_dropdownfilter_demo__WEBPACK_IMPORTED_MODULE_6__["DropDownFilterDemo"],
    },
    {
        path: 'dropdownmulti', component: _dropdownmulti_dropdownmulti_demo__WEBPACK_IMPORTED_MODULE_7__["DropDownMultiDemo"],
    },
    {
        path: 'dropdowntemplate', component: _dropdowntemplate_dropdowntemplate_demo__WEBPACK_IMPORTED_MODULE_8__["DropDownTemplateDemo"],
    },
    {
        path: 'email-demo', component: _email_email_demo__WEBPACK_IMPORTED_MODULE_9__["EmailDemo"],
    },
    {
        path: 'fileupload-demo', component: _fileupload_fileupload_demo__WEBPACK_IMPORTED_MODULE_10__["FileuploadDemo"],
    },
    {
        path: 'label-demo', component: _label_label_demo__WEBPACK_IMPORTED_MODULE_11__["LabelDemo"],
    },
    {
        path: 'number-demo', component: _number_number_demo__WEBPACK_IMPORTED_MODULE_12__["NumberDemo"],
    },
    {
        path: 'password-demo', component: _password_password_demo__WEBPACK_IMPORTED_MODULE_13__["PasswordDemo"],
    },
    {
        path: 'radiogroup-demo', component: _radiogroup_radiogroup_demo__WEBPACK_IMPORTED_MODULE_14__["RadioGroupDemo"],
    },
    {
        path: 'rating-demo', component: _rating_rating_demo__WEBPACK_IMPORTED_MODULE_15__["RatingDemo"],
    },
    {
        path: 'recaptcha-demo', component: _recaptcha_recaptcha_demo__WEBPACK_IMPORTED_MODULE_16__["RecaptchaDemo"],
    },
    {
        path: 'searchbox-demo', component: _searchbox_searchbox_demo__WEBPACK_IMPORTED_MODULE_17__["SearchBox"],
    },
    {
        path: 'slider-demo', component: _slider_slider_demo__WEBPACK_IMPORTED_MODULE_18__["SliderDemo"],
    },
    {
        path: 'facebook-login-demo', component: _socialmedialogin_facebooklogin_facebooklogin_demo__WEBPACK_IMPORTED_MODULE_19__["FacebookLoginDemo"],
    },
    {
        path: 'google-login-demo', component: _socialmedialogin_googlelogin_googlelogin_demo__WEBPACK_IMPORTED_MODULE_20__["GoogleLoginDemo"],
    },
    {
        path: 'linkedin-login-demo', component: _socialmedialogin_linkedinlogin_linkedinlogin_demo__WEBPACK_IMPORTED_MODULE_21__["LinkedinLoginDemo"],
    },
    {
        path: 'taginput-demo', component: _taginput_taginput_demo__WEBPACK_IMPORTED_MODULE_22__["TagInputDemo"],
    },
    {
        path: 'textinput', component: _text_text_demo__WEBPACK_IMPORTED_MODULE_23__["TextDemo"],
    },
    {
        path: 'textarea-demo', component: _textarea_textarea_demo__WEBPACK_IMPORTED_MODULE_24__["TextareaDemo"],
    },
    {
        path: 'toggle-demo', component: _toggle_toggle_demo__WEBPACK_IMPORTED_MODULE_25__["ToggleDemo"],
    },
    {
        path: 'typeahead-demo', component: _typeahead_typeahead_demo__WEBPACK_IMPORTED_MODULE_26__["TypeAheadDemo"],
    },
    {
        path: 'badge-demo', component: _badge_badge_demo__WEBPACK_IMPORTED_MODULE_27__["BadgeDemo"],
    },
];


/***/ }),

/***/ "./src/app/FormsInput/badge/badge.demo.html":
/*!**************************************************!*\
  !*** ./src/app/FormsInput/badge/badge.demo.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   \n<amexio-api-structure  [url]=\"'assets/componentjson/forminputs/badge.json'\">\n    <amexio-api-demo>\n   <amexio-row>\n        <amexio-column [size]=\"12\">\n            <amexio-card [header]=\"true\">\n                <amexio-header>\n                    Badge Demo\n                </amexio-header>\n                <amexio-body>\n                    <amexio-row>\n                        <amexio-column size=\"6\">\n                            <amexio-card-ce>\n                                <amexio-image width=\"100%\" path=\"assets/images/cardce/burger.jpg\"></amexio-image>\n                                <amexio-badge [absolute]=\"true\" [background]=\"'red'\" [color]=\"'white'\" [top]=\"'0px'\" [right]=\"'0px'\">\n                                    <amexio-label size=\"red\">Non-Veg</amexio-label>\n                                </amexio-badge>\n\n                                <amexio-header-ce [border-bottom]=\"true\" [align]=\"'space-between'\">\n                                    <amexio-label size=\"medium-bold\">Burger lovers</amexio-label>\n                                    <amexio-image [icon-class]=\"'fa fa-phone fa-1x'\" [tooltip]=\"'Phone'\"></amexio-image>\n                                </amexio-header-ce>\n                                <amexio-body-ce>\n                                    <amexio-label>Tonight's availability</amexio-label> <br />\n                                    <amexio-chips *ngFor=\"let item of ['07:00', '08:00', '09:00', '11:00']\">\n                                        <amexio-chip [label]=\"item\" [color]=\"item.color\"> </amexio-chip>\n                                    </amexio-chips>\n                                </amexio-body-ce>\n                            </amexio-card-ce>\n\n                        </amexio-column>\n                        <amexio-column size=\"6\">\n                            <amexio-card-ce>\n                                <amexio-header-ce>\n                                    <amexio-image width=\"50px\" height=\"50px\" [filter]=\"'round'\" path=\"https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/022014/triumph_motorcycles_2013.jpg?itok=rysgr_NR\"></amexio-image>\n                                    <amexio-label size=\"medium-bold\">Triumph Bonneville T120 </amexio-label>\n                                </amexio-header-ce>\n                                <amexio-image width=\"100%\" path=\"http://imagesvc.timeincapp.com/v3/foundry/image/?q=70&w=1440&url=https%3A%2F%2Ftimedotcom.files.wordpress.com%2F2018%2F12%2F3201_spt_2019_20191540_original-2.jpg%3Fquality%3D85\"></amexio-image>\n                                <amexio-badge [absolute]=\"true\" [background]=\"'#e74c3c'\" [color]=\"'white'\" [top]=\"'6%'\" [right]=\"'5%'\">\n                                    <amexio-label size=\"large\">2019</amexio-label>\n                                    <amexio-label>Jan</amexio-label>\n                                </amexio-badge>\n\n                                <amexio-body-ce>\n                                    <p>\n                                        It accomplishes that goal with unique finishes and a limited production run. Let’s take a look at what makes the 2019 Triumph Bonneville T120 Diamond Edition a special motorcycle.\n                                    </p>\n                                </amexio-body-ce>\n                                <amexio-action-ce>\n                                    <amexio-button [label]=\"'BUY'\" [type]=\"'transparent'\" [tooltip]=\"'BUY'\">\n                                    </amexio-button>\n                                    <amexio-button [label]=\"'SELL'\" [type]=\"'transparent'\" [tooltip]=\"'SELL'\">\n                                    </amexio-button>\n                                </amexio-action-ce>\n                            </amexio-card-ce>\n                        </amexio-column>\n                    </amexio-row>\n                </amexio-body>\n            </amexio-card>\n        </amexio-column>\n    </amexio-row>\n    </amexio-api-demo>\n    </amexio-api-structure>"

/***/ }),

/***/ "./src/app/FormsInput/badge/badge.demo.ts":
/*!************************************************!*\
  !*** ./src/app/FormsInput/badge/badge.demo.ts ***!
  \************************************************/
/*! exports provided: BadgeDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeDemo", function() { return BadgeDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/**
 * Created by sagar on 04/02/19.
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


var BadgeDemo = /** @class */ (function () {
    function BadgeDemo(http) {
        this.http = http;
    }
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    BadgeDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    BadgeDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'badge-demo',
            template: __webpack_require__(/*! ./badge.demo.html */ "./src/app/FormsInput/badge/badge.demo.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BadgeDemo);
    return BadgeDemo;
}());



/***/ }),

/***/ "./src/app/FormsInput/checkboxgroup/checkboxgroup.demo.html":
/*!******************************************************************!*\
  !*** ./src/app/FormsInput/checkboxgroup/checkboxgroup.demo.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n \n<amexio-api-structure  [url]=\"'assets/componentjson/forminputs/checkboxgroup.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n\n      <amexio-column [size]=\"6\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Vertical Checkbox With Http Url\n          </amexio-header>\n          <amexio-body>\n            <amexio-checkbox-group [field-label]=\"'Vertical Checkbox'\" name=\"language\"\n                                   [data-reader]=\"'data'\"\n                                   [display-field]=\"'language'\"\n                                   [value-field]=\"'checked'\"\n                                   [http-method]=\"'get'\"\n                                   [http-url]=\"'assets/data/componentdata/checkgroup.json'\">\n            </amexio-checkbox-group>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n      <amexio-column size=\"6\">\n        <amexio-card header=\"true\">\n          <amexio-header>\n            Horizontal Checkbox\n          </amexio-header>\n          <amexio-body>\n            <amexio-checkbox-group [field-label]=\"'Horizontal Checkbox'\" name=\"language\"\n                                   [data-reader]=\"'response.data'\"\n                                   [display-field]=\"'language'\"\n                                   [horizontal]=\"true\"\n                                   [value-field]=\"'checked'\"\n                                   (onSelection)=\"selectedCheckboxgroup($event)\"\n                                   [data]=\"checkboxGroupdata\">\n            </amexio-checkbox-group>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n    <amexio-row>\n      <amexio-column size=\"6\">\n        <amexio-card header=\"true\">\n          <amexio-header>\n            Horizontal Checkbox with disabled single item.\n          </amexio-header>\n          <amexio-body>\n            <amexio-checkbox-group [field-label]=\"'Horizontal Checkbox'\" name=\"language\"\n                                   [data-reader]=\"'response.data'\"\n                                   [display-field]=\"'language'\"\n                                   [horizontal]=\"true\"\n                                   [value-field]=\"'checked'\"\n                                   [data]=\"checkboxGroupdatadisabled\">\n            </amexio-checkbox-group>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n      <amexio-column size=\"6\">\n        <amexio-card header=\"true\">\n          <amexio-header>\n            Horizontal Checkbox with disabled all item.\n          </amexio-header>\n          <amexio-body>\n            <amexio-checkbox-group [field-label]=\"'Horizontal Checkbox with disable'\" name=\"language\"\n                                   [data-reader]=\"'response.data'\"\n                                   [display-field]=\"'language'\"\n                                   [horizontal]=\"true\"\n                                   name=\"disabledcheckbox\"\n                                   [disabled]=\"true\"\n                                   [value-field]=\"'checked'\"\n                                   [data]=\"checkboxGroupdatadisabledallitem\">\n            </amexio-checkbox-group>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n  </amexio-api-demo>\n</amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/FormsInput/checkboxgroup/checkboxgroup.demo.ts":
/*!****************************************************************!*\
  !*** ./src/app/FormsInput/checkboxgroup/checkboxgroup.demo.ts ***!
  \****************************************************************/
/*! exports provided: CheckBoxGroupDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBoxGroupDemo", function() { return CheckBoxGroupDemo; });
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

var CheckBoxGroupDemo = /** @class */ (function () {
    function CheckBoxGroupDemo() {
        this.checkboxGroupdata = {
            response: {
                data: [{
                        language: 'Angular 2', checked: false, disabled: false
                    }, {
                        language: 'JAVA', checked: true, disabled: false
                    }, {
                        language: 'C++', checked: false, disabled: false
                    }]
            }
        };
        this.checkboxGroupdatadisabled = {
            response: {
                data: [{
                        language: 'Angular 2', checked: false, disabled: false
                    }, {
                        language: 'JAVA', checked: true, disabled: true
                    }, {
                        language: 'C++', checked: false, disabled: false
                    }]
            }
        };
        this.checkboxGroupdatadisabledallitem = {
            response: {
                data: [{
                        language: 'Angular 2', checked: false
                    }, {
                        language: 'JAVA', checked: true
                    }, {
                        language: 'C++', checked: false
                    }]
            }
        };
    }
    CheckBoxGroupDemo.prototype.selectedCheckboxgroup = function (data) {
        //make some operation here
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    CheckBoxGroupDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    CheckBoxGroupDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'checkboxgroup-demo',
            template: __webpack_require__(/*! ./checkboxgroup.demo.html */ "./src/app/FormsInput/checkboxgroup/checkboxgroup.demo.html"),
        }),
        __metadata("design:paramtypes", [])
    ], CheckBoxGroupDemo);
    return CheckBoxGroupDemo;
}());



/***/ }),

/***/ "./src/app/FormsInput/chips/chips.demo.html":
/*!**************************************************!*\
  !*** ./src/app/FormsInput/chips/chips.demo.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/forminputs/chip.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n\n      <amexio-column size=\"12\">\n        <amexio-card header=\"true\">\n          <amexio-header>\n            Chips with Data Input\n          </amexio-header>\n          <amexio-body>\n            <amexio-chips [data]=\"sampledatachips\" (selectedchipsData)=\"onChipDataLabelClick($event)\" (onCloseClick)=\"onChipDataCloseClick($event)\"></amexio-chips>\n            <pre><code>{{emitdatachips | json}}</code></pre>\n          </amexio-body>\n        </amexio-card>\n        <amexio-card header=\"true\">\n          <amexio-header>\n            Chip with multiple Inputs\n          </amexio-header>\n          <amexio-body>\n            <amexio-chips (selectedchipsData)=\"onChipsLabelClick($event)\" (onCloseClick)=\"onCloseClick($event)\">\n              <amexio-chip [icon]=\"'fa fa-linkedin-square'\" [label]=\"'Linkedin'\" [color]=\"'red'\" [badge]=\"4\" [closable]=\"true\">\n              </amexio-chip>\n\n              <amexio-chip [icon]=\"'fa fa-internet-explorer'\" [label]=\"'Internet-Explorer'\" [color]=\"'blue'\" [badge]=\"2\" [closable]=\"false\">\n              </amexio-chip>\n\n              <amexio-chip [icon]=\"'fa fa-github'\" [label]=\"'Github'\" [color]=\"'green'\" [badge]=\"3\" [closable]=\"true\">\n              </amexio-chip>\n\n            </amexio-chips>\n            <pre><code>{{multipleemitchips | json}}</code></pre>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n  </amexio-api-demo>\n</amexio-api-structure>"

/***/ }),

/***/ "./src/app/FormsInput/chips/chips.demo.ts":
/*!************************************************!*\
  !*** ./src/app/FormsInput/chips/chips.demo.ts ***!
  \************************************************/
/*! exports provided: ChipsDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsDemo", function() { return ChipsDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * Created by rashmi on 19/10/18.
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

var ChipsDemo = /** @class */ (function () {
    function ChipsDemo() {
        this.sampledatachips = [{
                icon: 'fa fa-home',
                label: 'Home',
                color: 'turquoise',
                badge: 4,
                closable: true
            },
            {
                icon: 'fa fa-download',
                label: "Download",
                color: 'lightblue',
                badge: 5,
                closable: false
            }, {
                icon: 'fa fa-camera',
                label: "Camera",
                color: 'lightgreen',
                badge: 6,
                closable: true
            }, {
                icon: 'fa fa-fire-extinguisher',
                label: "Fire Extinguisher",
                color: 'yellow',
                badge: 7,
                closable: true
            }, {
                icon: 'fa fa-ambulance',
                label: "Emergency",
                color: 'pink',
                badge: 8,
                closable: true
            }
        ];
        this.sampledatachip = [{
                icon: 'fa fa-linkedin-square',
                label: 'Linkedin',
                color: 'pink',
                badge: 4,
                closable: true
            },
            {
                icon: 'fa fa-internet-explorer',
                label: "Internet-Explorer",
                color: 'lightblue',
                badge: 5,
                closable: false
            }, {
                icon: 'fa fa-github',
                label: "Github",
                color: 'lightgreen',
                badge: 6,
                closable: true
            }, {
                icon: 'fa fa-twitter',
                label: "Twitter",
                color: 'lightblue',
                badge: 7,
                closable: true
            }, {
                icon: 'fa fa-reddit',
                label: "Reddit",
                color: '',
                badge: 8,
                closable: true
            }
        ];
    }
    ChipsDemo.prototype.onChipDataLabelClick = function (event) {
        this.emitdatachips = event;
    };
    ChipsDemo.prototype.onChipDataCloseClick = function (event) {
        this.emitdatachip = event;
    };
    ChipsDemo.prototype.onChipsLabelClick = function (event) {
        this.multipleemitchips = event;
    };
    ChipsDemo.prototype.onCloseClick = function (event) {
        this.multipleemitchip = event;
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    ChipsDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    ChipsDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'chips-demo',
            template: __webpack_require__(/*! ./chips.demo.html */ "./src/app/FormsInput/chips/chips.demo.html")
        }),
        __metadata("design:paramtypes", [])
    ], ChipsDemo);
    return ChipsDemo;
}());



/***/ }),

/***/ "./src/app/FormsInput/creditcard/creditcard.demo.html":
/*!************************************************************!*\
  !*** ./src/app/FormsInput/creditcard/creditcard.demo.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-api-structure  [url]=\"'assets/componentjson/forminputs/creditcard.json'\">\n  <amexio-api-demo>\n    <amexio-card  header=\"true\" show-error=\"true\">\n      <amexio-header style=\"width:100%\">\n        Credit Card\n      </amexio-header>\n      <amexio-body>\n        <amexio-row>\n          <amexio-column size=\"9\">\n            <pre><code>{{creditcard|json}}</code></pre>\n\n            <h2>Credit Card with Model Binding, label and double column template</h2>\n            <amexio-creditcard [year-count]=\"4\" [show-label]=\"true\" [(ngModel)]=\"creditcard\"></amexio-creditcard>\n            <br>\n            <h2>Credit Card with double column template and without Model Binding and label</h2>\n            <amexio-creditcard [show-label]=\"false\" [year-count]=\"4\"></amexio-creditcard>\n            <br>\n            <h2>Credit Card with single column template</h2>\n            <br>\n            <amexio-creditcard [template]=\"'single-column'\" [year-count]=\"4\"></amexio-creditcard>\n          </amexio-column>\n        </amexio-row>\n      </amexio-body>\n    </amexio-card>\n\n  </amexio-api-demo>\n</amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/FormsInput/creditcard/creditcard.demo.ts":
/*!**********************************************************!*\
  !*** ./src/app/FormsInput/creditcard/creditcard.demo.ts ***!
  \**********************************************************/
/*! exports provided: CreditCardDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCardDemo", function() { return CreditCardDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
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
 * Created by ankita on 11/10/18.
 */


var CreditCardDemo = /** @class */ (function () {
    function CreditCardDemo() {
        this.creditcard = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AmexioCreditCardModel"]();
    }
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    CreditCardDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    CreditCardDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'credit-card-demo',
            template: __webpack_require__(/*! ./creditcard.demo.html */ "./src/app/FormsInput/creditcard/creditcard.demo.html"),
        }),
        __metadata("design:paramtypes", [])
    ], CreditCardDemo);
    return CreditCardDemo;
}());



/***/ }),

/***/ "./src/app/FormsInput/datepicker/datepicker.demo.html":
/*!************************************************************!*\
  !*** ./src/app/FormsInput/datepicker/datepicker.demo.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/forminputs/datetimepicker.json'\">\n    <amexio-api-demo>\n        <amexio-row>\n            <amexio-column [size]=\"6\">\n                <amexio-card [header]=\"true\" [footer]=\"true\" [footer-align]=\"'center'\">\n                    <amexio-header>\n                        Inline Date Picker with min,max and disabled date\n                    </amexio-header>\n                    <amexio-body>\n                        <amexio-row>\n                            <amexio-column [size]=\"12\">\n                                <!-- ---1--- -->\n                                <amexio-date-time-picker [inline-datepicker]=\"true\" [field-label]=\"'Date Of Birth'\" [time-picker]=\"false\" [date-picker]=\"true\" [min-date]=\"'22-Mar-2016'\" [max-date]=\"'22-Feb-2019'\" [disabled-date]=\"disabledDate\" [(ngModel)]=\"currentDate1\">\n                                </amexio-date-time-picker>\n\n\n\n\n\n                            </amexio-column>\n                        </amexio-row>\n\n                    </amexio-body>\n                    <amexio-action>\n                        {{currentDate1}}\n                    </amexio-action>\n                </amexio-card>\n\n            </amexio-column>\n            <amexio-column [size]=\"6\">\n                <!-- -2- -->\n                <amexio-card [header]=\"true\" [footer]=\"true\" [footer-align]=\"'center'\">\n                    <amexio-header>\n                        Time Picker\n                    </amexio-header>\n                    <amexio-body>\n                        <amexio-row>\n                            <amexio-column [size]=\"12\">\n                                <amexio-date-time-picker [field-label]=\"'Time Of Birth'\" [time-picker]=\"true\" [date-picker]=\"false\" [min-date]=\"'Thu Jul 25 2017 00:00:00 GMT+0530 (IST)'\" [ngModel]=\"time\" (change)=\"onChangeTime($event)\">\n                                </amexio-date-time-picker>\n                            </amexio-column>\n                        </amexio-row>\n                    </amexio-body>\n                    <amexio-action>\n                        {{time}}\n                    </amexio-action>\n                </amexio-card>\n\n            </amexio-column>\n\n        </amexio-row>\n        <amexio-row>\n            <amexio-column [size]=\"'6'\">\n                <amexio-card [header]=\"true\" [footer]=\"true\" [footer-align]=\"'center'\">\n                    <amexio-header>\n                        Date Picker with min,max date\n                    </amexio-header>\n                    <amexio-body>\n                        <amexio-row>\n                            <amexio-column [size]=\"12\">\n                                <!-- --3-- -->\n\n                                <amexio-date-time-picker [field-label]=\"'Date Of Birth'\" [place-holder]=\"'Date Of Birth'\" [time-picker]=\"false\" [date-picker]=\"true\" [min-date]=\"'22-Mar-2016'\" [max-date]=\"'22-Feb-2019'\" [(ngModel)]=\"currentDate\">\n                                </amexio-date-time-picker>\n\n\n\n\n                            </amexio-column>\n                        </amexio-row>\n\n                    </amexio-body>\n                    <amexio-action>\n                        {{currentDate}}\n                    </amexio-action>\n                </amexio-card>\n            </amexio-column>\n            <!-- ------4---------- -->\n            <amexio-column [size]=\"'6'\">\n                <amexio-card [header]=\"true\" [footer]=\"true\" [footer-align]=\"'center'\">\n                    <amexio-header>\n                        Date Picker with Year dropdown and disabled date\n                    </amexio-header>\n                    <amexio-body>\n                        <amexio-row>\n                            <amexio-column [size]=\"12\">\n\n                                <amexio-date-time-picker [dropdown-datepicker]=\"true\" [field-label]=\"'Date Of Birth'\" [time-picker]=\"false\" [date-picker]=\"true\" [disabled-date]=\"disabledDate\" [(ngModel)]=\"currentDate2\">\n                                </amexio-date-time-picker>\n                            </amexio-column>\n                        </amexio-row>\n\n                    </amexio-body>\n                    <amexio-action>\n                        {{currentDate2}}\n                    </amexio-action>\n                </amexio-card>\n            </amexio-column>\n        </amexio-row>\n    </amexio-api-demo>\n</amexio-api-structure>"

/***/ }),

/***/ "./src/app/FormsInput/datepicker/datepicker.demo.ts":
/*!**********************************************************!*\
  !*** ./src/app/FormsInput/datepicker/datepicker.demo.ts ***!
  \**********************************************************/
/*! exports provided: DateTimePickerDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimePickerDemo", function() { return DateTimePickerDemo; });
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

var DateTimePickerDemo = /** @class */ (function () {
    function DateTimePickerDemo() {
        this.date = new Date("March 21, 2018 01:15:00");
        this.disabledDate = [
            {
                "from": "13-Jul-2018",
                "to": "15-Jul-2018"
            },
            {
                "from": "20-Jul-2018",
                "to": "23-Jul-2018"
            },
            {
                "from": "15-Jun-2018",
                "to": "19-Jun-2018"
            },
            {
                "from": "27-Jun-2018",
                "to": "29-Jun-2018"
            },
            {
                "from": "23-Aug-2018",
                "to": "28-Aug-2018"
            },
            {
                "from": "17-Aug-2018",
                "to": "19-Aug-2018"
            },
            {
                "from": "19-Sep-2018",
                "to": "21-Sep-2018"
            },
            {
                "from": "25-Sep-2018",
                "to": "28-Sep-2018"
            }
        ];
    }
    DateTimePickerDemo.prototype.onChangeTime = function (data) {
        this.time = data;
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    DateTimePickerDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    DateTimePickerDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'date-picker-demo',
            template: __webpack_require__(/*! ./datepicker.demo.html */ "./src/app/FormsInput/datepicker/datepicker.demo.html"),
        }),
        __metadata("design:paramtypes", [])
    ], DateTimePickerDemo);
    return DateTimePickerDemo;
}());



/***/ }),

/***/ "./src/app/FormsInput/dropdown/dropdown.demo.html":
/*!********************************************************!*\
  !*** ./src/app/FormsInput/dropdown/dropdown.demo.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \n  \n<amexio-api-structure  [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/forminputs/dropdown.json'\">\n  <amexio-api-demo>\n\n  <amexio-row>\n    <amexio-column size=\"6\">\n      <amexio-card header=\"true\">\n        <amexio-header>\n           Dropdown Component \n        </amexio-header>\n        <amexio-body>\n          <amexio-row>\n            <amexio-column size=\"12\">\n              <amexio-dropdown [(ngModel)]=\"countryCode1\"\n                               [place-holder]=\"'Choose'\"\n                               name=\"countryCode1\"\n                               [data-reader]=\"'data'\"\n                               [field-label]=\"'Choose Country'\"\n                               [http-url]=\"'assets/data/componentdata/country.json'\"\n                               [http-method]=\"'get'\"\n                               [display-field]=\"'countryName'\"\n                               [value-field]=\"'countryCode1'\"\n                               [enable-sort]=\"true\"\n                               [sort]=\"'asc'\"\n              >\n              </amexio-dropdown>\n            </amexio-column>\n          </amexio-row>\n        </amexio-body>\n      </amexio-card>\n    </amexio-column>\n    <amexio-column [size]=\"6\">\n      <amexio-card header=\"true\">\n        <amexio-header>\n          Selected Record Data\n        </amexio-header>\n        <amexio-body>\n        <ng-container *ngIf=\"countryCode1\">\n          {{countryCode1}}\n        </ng-container>\n        </amexio-body>\n      </amexio-card>\n    </amexio-column>\n  </amexio-row>\n  <amexio-row>\n    <amexio-column size=\"6\">\n      <amexio-card header=\"true\">\n        <amexio-header>\n           Dropdown Component with Inner Structure\n        </amexio-header>\n        <amexio-body>\n          <amexio-row>\n            <amexio-column size=\"12\">\n              <amexio-dropdown [(ngModel)]=\"personName\"\n                               [place-holder]=\"'Choose'\"\n                               name=\"countryCode1\"\n                               [data-reader]=\"'data'\"\n                               [field-label]=\"'Address'\"\n                               [http-url]=\"'assets/data/componentdata/personProfile.json'\"\n                               [http-method]=\"'get'\"\n                               [display-field]=\"'address.addressLabel'\"\n                               [value-field]=\"'personName'\"\n                               [enable-sort]=\"true\"\n                               [sort]=\"'asc'\"\n              >\n              </amexio-dropdown>\n            </amexio-column>\n          </amexio-row>\n        </amexio-body>\n      </amexio-card>\n    </amexio-column>\n    <amexio-column [size]=\"6\">\n      <amexio-card header=\"true\">\n        <amexio-header>\n          Owner\n        </amexio-header>\n        <amexio-body>\n        <ng-container *ngIf=\"personName\">\n          {{personName}}\n        </ng-container>\n        </amexio-body>\n      </amexio-card>\n    </amexio-column>\n  </amexio-row>\n  </amexio-api-demo>\n  </amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/FormsInput/dropdown/dropdown.demo.ts":
/*!******************************************************!*\
  !*** ./src/app/FormsInput/dropdown/dropdown.demo.ts ***!
  \******************************************************/
/*! exports provided: DropDownDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownDemo", function() { return DropDownDemo; });
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


var DropDownDemo = /** @class */ (function () {
    function DropDownDemo() {
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_1__["ComponentDataStructure"]();
    }
    DropDownDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    DropDownDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Dropdown';
        this.customSourceData.description = 'Drop-Down component has been created to render N numbers of drop-down items based on data-set configured with template. Data-set can be configured using HTTP call OR Define fix number of dropdown-items. User can configure different attributes for enabling filter, multi-select, maximum selection in case of multi select.';
        this.customSourceData.sourceMetadata.htmlUrl = 'forms/dropdown/form.html';
        this.customSourceData.sourceMetadata.tsUrl = 'forms/dropdown/form.text';
        this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/country.json';
        this.customSourceData.sourceMetadata.datasourceUrl1 = 'assets/data/componentdata/personProfile.json';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-dropdown?embed=1&file=app/forms/dropdown/dropdown.demo.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    DropDownDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    DropDownDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dropdownbasic',
            template: __webpack_require__(/*! ./dropdown.demo.html */ "./src/app/FormsInput/dropdown/dropdown.demo.html"),
        }),
        __metadata("design:paramtypes", [])
    ], DropDownDemo);
    return DropDownDemo;
}());



/***/ }),

/***/ "./src/app/FormsInput/dropdownfilter/dropdownfilter.demo.html":
/*!********************************************************************!*\
  !*** ./src/app/FormsInput/dropdownfilter/dropdownfilter.demo.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n \n<amexio-api-structure  [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/forminputs/dropdown.json'\">\n  <amexio-api-demo>\n\n  <amexio-row>\n    <amexio-column size=\"6\">\n      <amexio-card header=\"true\">\n        <amexio-header>\n           Dropdown Filter Component \n        </amexio-header>\n        <amexio-body>\n          <amexio-row>\n            <amexio-column size=\"12\">\n              <amexio-dropdown [(ngModel)]=\"countryCode1\"\n                               [place-holder]=\"'Choose'\"\n                               name=\"countryCode1\"\n                               [search]=\"true\"\n                               [data-reader]=\"'data'\"\n                               [field-label]=\"'Choose Country'\"\n                               [http-url]=\"'assets/data/componentdata/country.json'\"\n                               [http-method]=\"'get'\"\n                               [display-field]=\"'countryName'\"\n                               [value-field]=\"'countryCode1'\"\n                               [enable-sort]=\"true\"\n                               [sort]=\"'asc'\">\n              </amexio-dropdown>\n            </amexio-column>\n          </amexio-row>\n        </amexio-body>\n      </amexio-card>\n    </amexio-column>\n    <amexio-column [size]=\"6\">\n      <amexio-card header=\"true\">\n        <amexio-header>\n          Selected Record Data\n        </amexio-header>\n        <amexio-body>\n        <ng-container *ngIf=\"countryCode1\">\n          {{countryCode1}}\n        </ng-container>\n        </amexio-body>\n      </amexio-card>\n    </amexio-column>\n  </amexio-row>\n\n  </amexio-api-demo>\n  </amexio-api-structure>"

/***/ }),

/***/ "./src/app/FormsInput/dropdownfilter/dropdownfilter.demo.ts":
/*!******************************************************************!*\
  !*** ./src/app/FormsInput/dropdownfilter/dropdownfilter.demo.ts ***!
  \******************************************************************/
/*! exports provided: DropDownFilterDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownFilterDemo", function() { return DropDownFilterDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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



var DropDownFilterDemo = /** @class */ (function () {
    function DropDownFilterDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
    }
    DropDownFilterDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    DropDownFilterDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Dropdown Filter ';
        this.customSourceData.description = 'Drop-Down component has been created to render N numbers of drop-down items based on data-set configured with template. Data-set can be configured using HTTP call OR Define fix number of dropdown-items. User can configure different attributes for enabling filter, multi-select, maximum selection in case of multi select.';
        this.customSourceData.sourceMetadata.htmlUrl = 'forms/dropdownfilter/form.html';
        this.customSourceData.sourceMetadata.tsUrl = 'forms/dropdownfilter/form.text';
        this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/country.json';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-dropdown-filter?embed=1&file=app/forms/dropdownfilter/dropdownfilter.demo.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    DropDownFilterDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    DropDownFilterDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dropdownfilter',
            template: __webpack_require__(/*! ./dropdownfilter.demo.html */ "./src/app/FormsInput/dropdownfilter/dropdownfilter.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DropDownFilterDemo);
    return DropDownFilterDemo;
}());



/***/ }),

/***/ "./src/app/FormsInput/dropdownmulti/dropdownmulti.demo.html":
/*!******************************************************************!*\
  !*** ./src/app/FormsInput/dropdownmulti/dropdownmulti.demo.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/forminputs/dropdown.json'\">\n  <amexio-api-demo>\n<amexio-row>\n    <amexio-column size=\"6\">\n      <amexio-card header=\"true\">\n        <amexio-header>\n           Dropdown Multi Select Component \n        </amexio-header>\n        <amexio-body>\n          <amexio-row>\n            <amexio-column size=\"12\">\n              <amexio-dropdown\n                [place-holder]=\"'Choose'\"\n                [field-label]=\"'Choose Fruit'\"\n                [http-method]=\"'get'\" [http-url]=\"'assets/data/componentdata/fruits.json'\"\n                [display-field]=\"'fruitName'\" [value-field]=\"'code'\"\n                [data-reader]=\"'data'\"\n                [multi-select]=\"true\"\n                (onMultiSelect)=\"onMultiSelectValue($event)\"\n                [enable-sort]=\"true\"\n                [sort]=\"'asc'\"\n              >\n              </amexio-dropdown>\n            </amexio-column>\n          </amexio-row>\n        </amexio-body>\n      </amexio-card>\n    </amexio-column>\n    <amexio-column [size]=\"6\">\n      <amexio-card header=\"true\">\n        <amexio-header>\n          Selected Record Data\n        </amexio-header>\n        <amexio-body>\n          <ng-container *ngIf=\"listOfFriut\">\n            {{listOfFriut|json}}\n          </ng-container>\n        </amexio-body>\n      </amexio-card>\n    </amexio-column>\n  </amexio-row>\n\n  </amexio-api-demo>\n  </amexio-api-structure>"

/***/ }),

/***/ "./src/app/FormsInput/dropdownmulti/dropdownmulti.demo.ts":
/*!****************************************************************!*\
  !*** ./src/app/FormsInput/dropdownmulti/dropdownmulti.demo.ts ***!
  \****************************************************************/
/*! exports provided: DropDownMultiDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownMultiDemo", function() { return DropDownMultiDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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



var DropDownMultiDemo = /** @class */ (function () {
    function DropDownMultiDemo(http) {
        this.http = http;
        this.listOfFriut = [];
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
    }
    DropDownMultiDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    DropDownMultiDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Dropdown Multi Select ';
        this.customSourceData.description = 'Drop-Down component has been created to render N numbers of drop-down items based on data-set configured with template. Data-set can be configured using HTTP call OR Define fix number of dropdown-items. User can configure different attributes for enabling filter, multi-select, maximum selection in case of multi select.';
        this.customSourceData.sourceMetadata.htmlUrl = 'forms/dropdownmulti/form.html';
        this.customSourceData.sourceMetadata.tsUrl = 'forms/dropdownmulti/form.text';
        this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/fruits.json';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-dropdown-multiselect?embed=1&file=app/forms/dropdownmulti/dropdownmulti.demo.html&view=editor';
    };
    DropDownMultiDemo.prototype.onMultiSelectValue = function (data) {
        var _this = this;
        this.listOfFriut = [];
        data.forEach(function (obj) {
            _this.listOfFriut.push(obj);
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    DropDownMultiDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    DropDownMultiDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dropdownmulti',
            template: __webpack_require__(/*! ./dropdownmulti.demo.html */ "./src/app/FormsInput/dropdownmulti/dropdownmulti.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DropDownMultiDemo);
    return DropDownMultiDemo;
}());



/***/ }),

/***/ "./src/app/FormsInput/dropdowntemplate/dropdowntemplate.demo.html":
/*!************************************************************************!*\
  !*** ./src/app/FormsInput/dropdowntemplate/dropdowntemplate.demo.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/forminputs/dropdown.json'\">\n  <amexio-api-demo>\n\n    <amexio-row>\n      <amexio-column size=\"6\">\n        <amexio-card header=\"true\">\n          <amexio-header>\n            Dropdown with Template\n          </amexio-header>\n          <amexio-body>\n            <amexio-row>\n              <amexio-column size=\"12\">\n                <amexio-dropdown [(ngModel)]=\"id\" [place-holder]=\"'Choose'\" name=\"id\" [data-reader]=\"'data'\"\n                  [field-label]=\"'Choose Country'\" [http-url]=\"'assets/data/componentdata/gridtemplate.json'\"\n                  [http-method]=\"'get'\" [search]=\"true\" [display-field]=\"'name'\" [value-field]=\"'id'\" [enable-sort]=\"true\"\n                  [sort]=\"'asc'\" (onSingleSelect)=\"getRowData($event)\">\n                  <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                    <amexio-label>\n                      <amexio-image [width]=\"100\" [path]=\"'assets/images/flags/flags/'+row.flag_32\"></amexio-image>\n                    </amexio-label>&nbsp;&nbsp;\n                    <amexio-label>{{row.name}}</amexio-label>\n                    <amexio-label>( {{row.name_official}} )</amexio-label>\n                  </ng-template>\n\n                </amexio-dropdown>\n              </amexio-column>\n            </amexio-row>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n      <amexio-column [size]=\"6\">\n        <amexio-card header=\"true\">\n          <amexio-header>\n            Selected Record Data\n          </amexio-header>\n          <amexio-body>\n            {{clickedRowData|json}}\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n\n\n\n  </amexio-api-demo>\n</amexio-api-structure>"

/***/ }),

/***/ "./src/app/FormsInput/dropdowntemplate/dropdowntemplate.demo.ts":
/*!**********************************************************************!*\
  !*** ./src/app/FormsInput/dropdowntemplate/dropdowntemplate.demo.ts ***!
  \**********************************************************************/
/*! exports provided: DropDownTemplateDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownTemplateDemo", function() { return DropDownTemplateDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
/**
 * Created by rashmi on 5/6/18.
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



var DropDownTemplateDemo = /** @class */ (function () {
    function DropDownTemplateDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
    }
    DropDownTemplateDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    DropDownTemplateDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Dropdown With Template ';
        this.customSourceData.description = 'Drop-Down component has been created to render N numbers of drop-down items based on data-set configured with template. Data-set can be configured using HTTP call OR Define fix number of dropdown-items. User can configure different attributes for enabling filter, multi-select, maximum selection in case of multi select.';
        this.customSourceData.sourceMetadata.htmlUrl = 'forms/dropdowntemplate/form.html';
        this.customSourceData.sourceMetadata.tsUrl = 'forms/dropdowntemplate/form.text';
        this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/gridtemplate.json';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-dropdown-template?embed=1&file=app/forms/dropdown/dropdown.demo.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    DropDownTemplateDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    DropDownTemplateDemo.prototype.getRowData = function (data) {
        this.clickedRowData = data;
    };
    DropDownTemplateDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dropdowntemplate',
            template: __webpack_require__(/*! ./dropdowntemplate.demo.html */ "./src/app/FormsInput/dropdowntemplate/dropdowntemplate.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DropDownTemplateDemo);
    return DropDownTemplateDemo;
}());



/***/ }),

/***/ "./src/app/FormsInput/email/email.demo.html":
/*!**************************************************!*\
  !*** ./src/app/FormsInput/email/email.demo.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-api-structure  [url]=\"'assets/componentjson/forminputs/email.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n      <amexio-column size=\"6\">\n        <amexio-card header=\"true\">\n          <amexio-header>\n            Basic Email Input\n          </amexio-header>\n          <amexio-body>\n            <amexio-email-input [field-label]=\"'Email Id'\" name =\"email\"\n                                [place-holder]=\"'Enter Email Id'\"\n                                [allow-blank]=\"false\" [error-msg] =\"'Please Enter Email Id'\"\n                                [enable-popover]=\"true\"\n                                [icon-feedback]=\"true\">\n            </amexio-email-input>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n      <amexio-column [size]=\"6\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Email Input With Disable\n          </amexio-header>\n          <amexio-body>\n            <amexio-email-input name =\"email\" [field-label]=\"'Email Id'\"\n                                [place-holder]=\"'Enter Email Id'\"\n                                [disabled]=\"true\">\n            </amexio-email-input>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n    <amexio-row>\n      <amexio-column size=\"6\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Email Input Font Style\n          </amexio-header>\n          <amexio-body>\n            <amexio-email-input [field-label]=\"'Email Id'\" name =\"email\"\n                                [place-holder]=\"'Enter Email Id'\"\n                                [icon-feedback]=\"true\"\n                                [font-style]=\"'italic'\">\n            </amexio-email-input>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n      <amexio-column [size]=\"6\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Font Family\n          </amexio-header>\n          <amexio-body>\n            <amexio-email-input name =\"email\" [field-label]=\"'Email Id'\"\n                                [place-holder]=\"'Enter Email Id'\"\n                                [font-family]=\"'Times New Roman'\"\n                                [font-size]=\"'large'\">\n            </amexio-email-input>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n  </amexio-api-demo>\n</amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/FormsInput/email/email.demo.ts":
/*!************************************************!*\
  !*** ./src/app/FormsInput/email/email.demo.ts ***!
  \************************************************/
/*! exports provided: EmailDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailDemo", function() { return EmailDemo; });
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

var EmailDemo = /** @class */ (function () {
    function EmailDemo() {
    }
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    EmailDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    EmailDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'email-demo',
            template: __webpack_require__(/*! ./email.demo.html */ "./src/app/FormsInput/email/email.demo.html"),
        }),
        __metadata("design:paramtypes", [])
    ], EmailDemo);
    return EmailDemo;
}());



/***/ }),

/***/ "./src/app/FormsInput/fileupload/fileupload.demo.html":
/*!************************************************************!*\
  !*** ./src/app/FormsInput/fileupload/fileupload.demo.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<amexio-api-structure  [url]=\"'assets/componentjson/forminputs/fileupload.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n      <amexio-column size=\"6\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Basic File Upload\n          </amexio-header>\n          <amexio-body>\n            <amexio-fileupload [http-url]=\"'/upload'\" [http-method]=\"'POST'\"\n                               [file-type]=\"'image/*'\" [multiple-file]=\"'*'\" [field-label]=\"'Photo Upload'\">\n            </amexio-fileupload>\n          </amexio-body>\n        </amexio-card>\n\n      </amexio-column>\n      <amexio-column size=\"6\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Drag Drop File Upload\n          </amexio-header>\n          <amexio-body>\n            <amexio-fileupload [http-url]=\"'/upload'\" [http-method]=\"'POST'\" [file-type]=\"'image/*'\" [field-label]=\"'Photo Upload'\" droppable=\"true\"></amexio-fileupload>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n  </amexio-api-demo>\n</amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/FormsInput/fileupload/fileupload.demo.ts":
/*!**********************************************************!*\
  !*** ./src/app/FormsInput/fileupload/fileupload.demo.ts ***!
  \**********************************************************/
/*! exports provided: FileuploadDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileuploadDemo", function() { return FileuploadDemo; });
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

var FileuploadDemo = /** @class */ (function () {
    function FileuploadDemo() {
    }
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    FileuploadDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    FileuploadDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fileupload-demo',
            template: __webpack_require__(/*! ./fileupload.demo.html */ "./src/app/FormsInput/fileupload/fileupload.demo.html"),
        }),
        __metadata("design:paramtypes", [])
    ], FileuploadDemo);
    return FileuploadDemo;
}());



/***/ }),

/***/ "./src/app/FormsInput/label/label.demo.html":
/*!**************************************************!*\
  !*** ./src/app/FormsInput/label/label.demo.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-api-structure [url]=\"'assets/componentjson/forminputs/label.json'\">\n    <amexio-api-demo>\n        <h2>Label Component</h2>\n        <amexio-row>\n            <amexio-column [size]=\"4\">\n                <amexio-label size=\"large\">This is large amexio label</amexio-label>\n            </amexio-column>\n            <amexio-column [size]=\"4\">\n                <amexio-label size=\"large-bold\">This is large-bold amexio label </amexio-label>\n            </amexio-column>\n            <amexio-column [size]=\"4\">\n                <amexio-label size=\"medium-bold\">This is medium-bold amexio label</amexio-label>\n            </amexio-column>\n        </amexio-row>\n        <br />\n        <amexio-row>\n            <amexio-column [size]=\"4\">\n                <amexio-label>This is small amexio label</amexio-label>\n            </amexio-column>\n            <amexio-column [size]=\"4\">\n                <amexio-label size=\"small-bold\">This is small-bold amexio label</amexio-label>\n            </amexio-column>\n            <amexio-column [size]=\"4\">\n                <amexio-label size=\"medium-bold\" font-color=\"#FF5733\">This is amexio label</amexio-label>\n            </amexio-column>\n        </amexio-row>\n        <br />\n        <h2>Label Component With Badges </h2>\n        <amexio-row>\n            <amexio-column [size]=\"4\">\n                <amexio-label size=\"large\" [badge]=\"1\">This is large amexio label</amexio-label>\n            </amexio-column>\n            <amexio-column [size]=\"4\">\n                <amexio-label size=\"large-bold\" [badge]=\"2\">This is large-bold amexio label</amexio-label>\n            </amexio-column>\n            <amexio-column [size]=\"4\">\n                <amexio-label size=\"medium-bold\" [badge]=\"3\">This is medium-bold amexio label</amexio-label>\n            </amexio-column>\n        </amexio-row>\n        <amexio-row>\n            <amexio-column [size]=\"4\">\n                <amexio-label size=\"small\" [badge]=\"3\">This is small amexio label</amexio-label>\n            </amexio-column>\n            <amexio-column [size]=\"4\">\n                <amexio-label size=\"small-bold\" [badge]=\"2\">This is small-bold amexio label</amexio-label>\n            </amexio-column>\n            <amexio-column [size]=\"4\">\n                <amexio-label size=\"medium-bold\" font-color=\"#FF5733\" [badge]=\"5\">This is medium-bold amexio\n                    label</amexio-label>\n            </amexio-column>\n        </amexio-row>\n        <h2>Box Component</h2>\n        <amexio-row>\n            <amexio-column [size]=\"4\">\n                <amexio-box border-color=\"red\" border=\"top\" padding=\"true\" closable=\"'true'\">\n                    <amexio-label>This is small-bold amexio label with red border</amexio-label>\n                </amexio-box>\n            </amexio-column>\n            <amexio-column [size]=\"4\">\n                <amexio-box border-color=\"blue\" border=\"bottom\" padding=\"true\">\n                    <amexio-label>This is small-bold amexio label with blue border</amexio-label>\n                </amexio-box>\n            </amexio-column>\n            <amexio-column [size]=\"4\">\n                <amexio-box border-color=\"yellow\" border=\"right\" padding=\"true\">\n                    <amexio-label>This is small-bold amexio label with yellow border</amexio-label>\n                </amexio-box>\n            </amexio-column>\n        </amexio-row>\n        <br />\n        <amexio-row>\n            <amexio-column [size]=\"4\">\n                <amexio-box border-color=\"green\" border=\"left\" padding=\"true\">\n                    <amexio-label>This is small-bold amexio label with green border</amexio-label>\n                </amexio-box>\n            </amexio-column>\n            <amexio-column [size]=\"4\">\n                <amexio-box background-color=\"purple\" padding=\"true\">\n                    <amexio-label>This is small-bold amexio label with purple bg color</amexio-label>\n                </amexio-box>\n            </amexio-column>\n            <amexio-column [size]=\"4\">\n                <amexio-box background-color=\"yellow\" padding=\"true\">\n                    <amexio-label>This is small-bold amexio label with background-color yellow</amexio-label>\n                </amexio-box>\n            </amexio-column>\n        </amexio-row>\n        <br />\n        <amexio-row>\n            <amexio-column [size]=\"4\">\n                <amexio-box background-color=\"red\" padding=\"true\">\n                    <amexio-label>This is small-bold amexio label with background-color red</amexio-label>\n                </amexio-box>\n            </amexio-column>\n            <amexio-column [size]=\"4\">\n                <amexio-box background-color=\"blue\" padding=\"true\">\n                    <amexio-label>This is small-bold amexio label with background-color blue</amexio-label>\n                </amexio-box>\n            </amexio-column>\n            <amexio-column [size]=\"4\">\n                <amexio-box border-color=\"green\" border=\"bottom\" padding=\"true\" background-color=\"yellow\">\n                    <amexio-label>This is small-bold amexio label with background-color green</amexio-label>\n                </amexio-box>\n            </amexio-column>\n        </amexio-row>\n        <br />\n        <amexio-row>\n\n            <amexio-column [size]=\"4\">\n                <amexio-box border-color=\"brown\" border=\"right-left\" padding=\"true\" background-color=\"brown\">\n                    <amexio-label>This is small-bold amexio label with background-color</amexio-label>\n                </amexio-box>\n            </amexio-column>\n            <amexio-column [size]=\"4\">\n                <amexio-box border-color=\"purple\" border=\"all\" padding=\"true\" background-color=\"purple\" box-height=\"100px\"\n                    box-width=\"282px\">\n                    <amexio-text-input field-label=\"Aadhar No\" name=\"name\" place-holder=\"Enter aadhar card no\"\n                        icon-feedback=\"true\">\n                    </amexio-text-input>\n                </amexio-box>\n            </amexio-column>\n            <amexio-column [size]=\"4\">\n                <amexio-box border=\"top-bottom\" padding=\"true\">\n                    <amexio-label>This is small-bold amexio label with background-color</amexio-label>\n                </amexio-box>\n            </amexio-column>\n        </amexio-row>\n\n    </amexio-api-demo>\n\n</amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/FormsInput/label/label.demo.ts":
/*!************************************************!*\
  !*** ./src/app/FormsInput/label/label.demo.ts ***!
  \************************************************/
/*! exports provided: LabelDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelDemo", function() { return LabelDemo; });
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

var LabelDemo = /** @class */ (function () {
    function LabelDemo() {
    }
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    LabelDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    LabelDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'label-demo',
            template: __webpack_require__(/*! ./label.demo.html */ "./src/app/FormsInput/label/label.demo.html"),
        }),
        __metadata("design:paramtypes", [])
    ], LabelDemo);
    return LabelDemo;
}());



/***/ }),

/***/ "./src/app/FormsInput/number/number.demo.html":
/*!****************************************************!*\
  !*** ./src/app/FormsInput/number/number.demo.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<amexio-api-structure [url]=\"'assets/componentjson/forminputs/number.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n      <amexio-column size=\"6\">\n        <amexio-card header=\"true\">\n          <amexio-header>\n            Basic Number Input\n          </amexio-header>\n          <amexio-body>\n            <amexio-number-input [field-label]=\"'Number Input'\"\n                                 [place-holder]=\"'Enter Age'\">\n            </amexio-number-input>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n      <amexio-column [size]=\"6\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Number Input With Disable\n          </amexio-header>\n          <amexio-body>\n            <amexio-number-input\n              [place-holder]=\"'Enter age'\"\n              [icon-feedback]=\"false\"\n              [has-label]=\"false\" [disabled]=\"true\">\n            </amexio-number-input>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n    <amexio-row>\n      <amexio-column size=\"6\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Number Input Font Style\n          </amexio-header>\n          <amexio-body>\n            <amexio-number-input [field-label]=\"'Age'\"\n                                 [place-holder]=\"'Enter Age'\"\n                                 [font-style]=\"'italic'\">\n            </amexio-number-input>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n      <amexio-column [size]=\"6\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Number Input With Min/Max Validation\n          </amexio-header>\n          <amexio-body>\n            <amexio-number-input  [enable-popover]=\"true\" [field-label]=\"'Age'\"\n                                  [place-holder]=\"'Enter age'\"\n                                  [allow-blank]=\"false\" [error-msg] =\"'Please enter age'\"\n                                  [min-value]=\"1\"\n                                  [min-error-msg]=\"'age can not be less than 1'\"\n                                  [max-value]=\"100\"  [max-error-msg]=\"'age can not be greater than 100'\"\n                                  [icon-feedback]=\"true\"\n            >\n            </amexio-number-input>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n  </amexio-api-demo>\n</amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/FormsInput/number/number.demo.ts":
/*!**************************************************!*\
  !*** ./src/app/FormsInput/number/number.demo.ts ***!
  \**************************************************/
/*! exports provided: NumberDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberDemo", function() { return NumberDemo; });
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

var NumberDemo = /** @class */ (function () {
    function NumberDemo() {
    }
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    NumberDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    NumberDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'number-demo',
            template: __webpack_require__(/*! ./number.demo.html */ "./src/app/FormsInput/number/number.demo.html")
        }),
        __metadata("design:paramtypes", [])
    ], NumberDemo);
    return NumberDemo;
}());



/***/ }),

/***/ "./src/app/FormsInput/password/password.demo.html":
/*!********************************************************!*\
  !*** ./src/app/FormsInput/password/password.demo.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [url]=\"'assets/componentjson/forminputs/password.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n      <amexio-column size=\"6\">\n        <amexio-card header=\"true\">\n          <amexio-header>\n            Basic Password Input\n          </amexio-header>\n          <amexio-body>\n            <amexio-password-input [enable-popover]=\"true\"  [field-label]=\"'Password Input'\" name =\"password\"\n                                   [place-holder]=\"'Enter Password'\"\n                                   [allow-blank]=\"false\"\n                                   [error-msg] =\"'Please enter password'\"\n                                   [min-length]=\"6\"\n                                   [min-error-msg]=\"'Minimum 6 char required'\"\n                                   [max-length]=\"32\"\n                                   [max-error-msg]=\"'Maximum 32 char allowed'\"\n                                   [icon-feedback]=\"true\">\n            </amexio-password-input>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n      <amexio-column [size]=\"6\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Password Input without Label\n          </amexio-header>\n          <amexio-body>\n            <amexio-password-input name =\"password\"\n                                   [place-holder]=\"'Enter Password'\"\n                                   [allow-blank]=\"false\"\n                                   [error-msg] =\"'Please enter password'\"\n                                   [min-length]=\"6\"\n                                   [min-error-msg]=\"'Minimum 6 char required'\"\n                                   [max-length]=\"32\"\n                                   [max-error-msg]=\"'Maximum 32 char allowed'\"\n                                   [icon-feedback]=\"true\"\n                                   [has-label]=\"false\">\n            </amexio-password-input>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n  </amexio-api-demo>\n</amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/FormsInput/password/password.demo.ts":
/*!******************************************************!*\
  !*** ./src/app/FormsInput/password/password.demo.ts ***!
  \******************************************************/
/*! exports provided: PasswordDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordDemo", function() { return PasswordDemo; });
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

var PasswordDemo = /** @class */ (function () {
    function PasswordDemo() {
    }
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    PasswordDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    PasswordDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'password-demo',
            template: __webpack_require__(/*! ./password.demo.html */ "./src/app/FormsInput/password/password.demo.html")
        }),
        __metadata("design:paramtypes", [])
    ], PasswordDemo);
    return PasswordDemo;
}());



/***/ }),

/***/ "./src/app/FormsInput/radiogroup/radiogroup.demo.html":
/*!************************************************************!*\
  !*** ./src/app/FormsInput/radiogroup/radiogroup.demo.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-api-structure [url]=\"'assets/componentjson/forminputs/radiogroup.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n      <amexio-column size=\"6\">\n        <amexio-card header=\"true\">\n          <amexio-header>\n            Horizontal Radio Group\n          </amexio-header>\n          <amexio-body>\n            <amexio-radio-group [field-label]=\"'Horizontal Radio Group'\"\n                                name =\"gender\"\n                                [data-reader]=\"'response.data'\"\n                                [display-field]=\"'gender'\"\n                                [value-field]=\"'genderId'\"\n                                [horizontal]=\"true\"\n                                [data]=\"radioGroupData\"\n                                [(ngModel)]=\"model1\"\n                                (onSelection)=\"setSelectedGender($event)\">\n            </amexio-radio-group>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n      <amexio-column [size]=\"6\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Vertical Radio Group With Http Url\n          </amexio-header>\n          <amexio-body>\n            <amexio-radio-group [field-label]=\"'Vertical Radio Group'\" name =\"gender1\"\n                                [data-reader]=\"'data'\"\n                                [display-field]=\"'gender'\"\n                                [value-field]=\"'genderId'\"\n                                [http-method]=\"'get'\"\n                                [(ngModel)]=\"model2\"\n                                [http-url]=\"'assets/data/componentdata/radiogroup.json'\"\n                                (onSelection)=\"setSelectedGender($event)\">\n            </amexio-radio-group>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n\n    <amexio-row>\n      <amexio-column size=\"6\">\n        <amexio-card header=\"true\">\n          <amexio-header>\n            Horizontal Radio Group Disabled\n          </amexio-header>\n          <amexio-body>\n            <amexio-radio-group [field-label]=\"'Horizontal Radio Group'\" name =\"gendery\"\n                                [data-reader]=\"'radiodata'\"\n                                [display-field]=\"'gender'\"\n                                [value-field]=\"'genderId'\"\n                                [http-method]=\"'get'\"\n                                horizontal=\"true\"\n                                [(ngModel)]=\"model3\"\n                                [http-url]=\"'assets/data/componentdata/radiogroup.json'\"\n                                disabled=\"true\">\n            </amexio-radio-group>\n\n\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n      <amexio-column size=\"6\">\n        <amexio-card header=\"true\">\n          <amexio-header>\n            Horizontal Radio Group single item disabled\n          </amexio-header>\n          <amexio-body>\n\n            <amexio-radio-group [field-label]=\"'Horizontal Radio Group '\" name =\"genderx\"\n                                [data-reader]=\"'data'\"\n                                [(ngModel)]=\"model4\"\n                                [display-field]=\"'gender'\"\n                                [value-field]=\"'genderId'\"\n                                [http-method]=\"'get'\"\n                                horizontal=\"true\"\n                                [http-url]=\"'assets/data/componentdata/radiogroup_disable.json'\"\n            >\n            </amexio-radio-group>\n            <h2>Radio Group model Binding value </h2>\n            {{model4 | json}}\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n  </amexio-api-demo>\n</amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/FormsInput/radiogroup/radiogroup.demo.ts":
/*!**********************************************************!*\
  !*** ./src/app/FormsInput/radiogroup/radiogroup.demo.ts ***!
  \**********************************************************/
/*! exports provided: RadioGroupDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroupDemo", function() { return RadioGroupDemo; });
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

var RadioGroupDemo = /** @class */ (function () {
    function RadioGroupDemo() {
        this.model1 = 'male';
        this.model2 = 'female';
        this.model3 = 'male1';
        this.model4 = 'female';
        this.radioGroupData = {
            response: {
                data: [{
                        gender: 'Male',
                        genderId: 'male'
                    }, {
                        gender: 'Female',
                        genderId: 'female'
                    },
                ]
            }
        };
    }
    //selected Checkbox event
    RadioGroupDemo.prototype.setSelectedGender = function (data) {
        //make some operation here
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    RadioGroupDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    RadioGroupDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'radiogroup-demo',
            template: __webpack_require__(/*! ./radiogroup.demo.html */ "./src/app/FormsInput/radiogroup/radiogroup.demo.html"),
        }),
        __metadata("design:paramtypes", [])
    ], RadioGroupDemo);
    return RadioGroupDemo;
}());



/***/ }),

/***/ "./src/app/FormsInput/rating/rating.demo.html":
/*!****************************************************!*\
  !*** ./src/app/FormsInput/rating/rating.demo.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-api-structure [url]=\"'assets/componentjson/forminputs/rating.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n      <amexio-column [size]=\"6\">\n        <amexio-card [header]=\"true\" [footer]=\"true\" [footer-align]=\"'center'\">\n          <amexio-header>\n            Sample Rating With Label\n          </amexio-header>\n          <amexio-body>\n            <amexio-rating-input [(ngModel)]=\"rate\" [field-label]=\"'Film Rating'\"\n                                 [max]=\"max\" name=\"rate\" [float]=\"true\"\n                                 [read-only]=\"isReadonly\">\n            </amexio-rating-input>\n          </amexio-body>\n          <amexio-action>\n            Rating : {{rate}}\n          </amexio-action>\n        </amexio-card>\n      </amexio-column>\n      <amexio-column [size]=\"6\">\n        <amexio-card [header]=\"true\" [footer]=\"true\"  [footer-align]=\"'center'\">\n          <amexio-header>\n            Rating With Rate Titles\n          </amexio-header>\n          <amexio-body>\n            <amexio-rating-input [(ngModel)]=\"profileRate\"\n                                 [max]=\"profileMaxRate\" name=\"profileRate\"\n                                 [titles]=\"titles\"\n                                 [read-only]=\"isReadonly\">\n            </amexio-rating-input>\n          </amexio-body>\n          <amexio-action>\n            Rating : {{profileRate}}\n          </amexio-action>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n    <amexio-row>\n      <amexio-column size=\"6\">\n        <amexio-card [header]=\"true\" [footer]=\"true\" [footer-align]=\"'center'\">\n          <amexio-header>\n            Custom Rating Icons\n          </amexio-header>\n          <amexio-body>\n            <amexio-rating-input [(ngModel)]=\"customRate\" [full-icon]=\"'☑'\" [empty-icon]=\"'☐'\"\n                                 [max]=\"customIconRate\" name=\"customRate\" [float]=\"true\"\n                                 [read-only]=\"isReadonly\">\n            </amexio-rating-input>\n          </amexio-body>\n          <amexio-action>\n            Rating : {{customRate}}\n          </amexio-action>\n        </amexio-card>\n      </amexio-column>\n      <amexio-column size=\"6\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Rating With Read Only\n          </amexio-header>\n          <amexio-body>\n            <!--Read only Rating-->\n            <amexio-rating-input [field-label]=\"'Profile Rating'\"\n                                 [(ngModel)]=\"disableProfileRate\"\n                                 [max]=\"disableProfileMaxRate\"\n                                 [read-only]=\"true\">\n            </amexio-rating-input>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n  </amexio-api-demo>\n</amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/FormsInput/rating/rating.demo.ts":
/*!**************************************************!*\
  !*** ./src/app/FormsInput/rating/rating.demo.ts ***!
  \**************************************************/
/*! exports provided: RatingDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingDemo", function() { return RatingDemo; });
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

var RatingDemo = /** @class */ (function () {
    function RatingDemo() {
        this.max = 10;
        this.rate = 7;
        this.profileMaxRate = 5;
        this.customIconRate = 10;
        this.customRate = 5;
        this.profileRate = 2;
        this.disableProfileRate = 3;
        this.disableProfileMaxRate = 5;
        this.isReadonly = false;
        this.titles = ['Poor', 'Fair', 'Average', 'Good', 'Excellent'];
    }
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    RatingDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    RatingDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rating-demo',
            template: __webpack_require__(/*! ./rating.demo.html */ "./src/app/FormsInput/rating/rating.demo.html"),
        }),
        __metadata("design:paramtypes", [])
    ], RatingDemo);
    return RatingDemo;
}());



/***/ }),

/***/ "./src/app/FormsInput/recaptcha/recaptcha.demo.html":
/*!**********************************************************!*\
  !*** ./src/app/FormsInput/recaptcha/recaptcha.demo.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<amexio-api-structure [url]=\"'assets/componentjson/forminputs/recaptcha.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n      <amexio-column [size]=\"12\">\n        <amexio-card [header]=\"true\">\n\n\n          <amexio-header>Captcha Response data</amexio-header>\n          <amexio-body>\n\n            <amexio-google-recaptcha (onSuccess)=\"onSuccess($event)\"\n                                     (onFailure)=\"onFailure($event)\"\n                                     [site-key]=\"'6LeZ5W8UAAAAAIHXZf35oYoUhpsICnJzqSxx3fpf'\">\n\n            </amexio-google-recaptcha>\n\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n  </amexio-api-demo>\n</amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/FormsInput/recaptcha/recaptcha.demo.ts":
/*!********************************************************!*\
  !*** ./src/app/FormsInput/recaptcha/recaptcha.demo.ts ***!
  \********************************************************/
/*! exports provided: RecaptchaDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecaptchaDemo", function() { return RecaptchaDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * Created by kedar on 12/9/18.
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

var RecaptchaDemo = /** @class */ (function () {
    function RecaptchaDemo() {
    }
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    RecaptchaDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    RecaptchaDemo.prototype.onSuccess = function (event) {
        this.response = event;
    };
    RecaptchaDemo.prototype.onFailure = function (event) {
        this.response = event;
    };
    RecaptchaDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'recaptcha-demo',
            template: __webpack_require__(/*! ./recaptcha.demo.html */ "./src/app/FormsInput/recaptcha/recaptcha.demo.html"),
        }),
        __metadata("design:paramtypes", [])
    ], RecaptchaDemo);
    return RecaptchaDemo;
}());



/***/ }),

/***/ "./src/app/FormsInput/searchbox/searchbox.demo.html":
/*!**********************************************************!*\
  !*** ./src/app/FormsInput/searchbox/searchbox.demo.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-api-structure [url]=\"'assets/componentjson/forminputs/searchbox.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n      <amexio-column [size]=12>\n        <amexio-card [header]=\"true\" [footer]=\"false\" >\n          <amexio-header>\n            Search Box\n          </amexio-header>\n          <amexio-body>\n\n            <amexio-searchbox\n              [place-holder]=\"'Search'\"\n              [display-field]=\"'subject'\"\n              [data]=\"bindData\"\n              [width]=\"250\"\n            >\n              <amexio-searchbox-options #search [title]=\"'Advance search'\">\n\n                <amexio-text-input field-label=\"Subject:\"\n                                   name=\"subject\"\n                                   place-holder=\"Enter subject\"\n                                   icon-feedback=\"true\"\n                                   [(ngModel)]=\"subject\"\n                >\n                </amexio-text-input>\n                <amexio-text-input field-label=\"From:\"\n                                   name=\"from\"\n                                   place-holder=\"Emailid\"\n                                   icon-feedback=\"true\"\n                                   [(ngModel)]=\"from\"\n                >\n                </amexio-text-input>\n                <amexio-text-input field-label=\"To:\"\n                                   name=\"To\"\n                                   place-holder=\"Emailid\"\n                                   icon-feedback=\"true\"\n                                   [(ngModel)]=\"to\"\n                >\n                </amexio-text-input>\n                <amexio-row><amexio-column [size]=\"'12'\"></amexio-column></amexio-row>\n                <amexio-button\n                  [label]=\"'Filter'\"\n                  [type]=\"'theme-color'\"\n                  [tooltip]=\"'toolTip'\"\n                  [size]=\"'medium'\"\n                  (onClick)=\"filter(search)\"\n                >\n                </amexio-button>\n              </amexio-searchbox-options>\n\n\n\n            </amexio-searchbox>\n\n\n          </amexio-body>\n        </amexio-card>\n\n      </amexio-column>\n    </amexio-row>\n  </amexio-api-demo>\n</amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/FormsInput/searchbox/searchbox.demo.ts":
/*!********************************************************!*\
  !*** ./src/app/FormsInput/searchbox/searchbox.demo.ts ***!
  \********************************************************/
/*! exports provided: SearchBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBox", function() { return SearchBox; });
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

var SearchBox = /** @class */ (function () {
    function SearchBox(element) {
        this.element = element;
        this.subject = "";
        this.from = "";
        this.to = "";
        this.bindData = [];
        this.localData = [
            {
                "from": "araf.karsh@metamagic.in",
                "subject": "amexio release plans",
                "to": "ketan.gote@metamagic.in"
            },
            {
                "from": "araf.karsh@metamagic.in",
                "subject": "visual studio extension",
                "to": "engineering@metamagic.in"
            },
            {
                "from": "ketan.gote@metamagic.in",
                "subject": "amexio on angular.io",
                "to": "engineering@metamagic.in "
            },
            {
                "from": "deepali.arvind@metamagic.in",
                "subject": "amexio npm download spike",
                "to": "ketan.gote@metamagic.in"
            }, {
                "from": "dattaram.gawas@metamagic.in ",
                "subject": "building web components",
                "to": "ketan.gote@metamagic.in"
            },
            {
                "from": "sagar.jadhav@metamagic.in",
                "subject": "showcase app url",
                "to": "deepali.arvind@metamagic.in"
            },
            {
                "from": "ketan.gote@metamagic.in",
                "subject": "spring cloud stream demo",
                "to": "deepali.arvind@metamagic.in"
            },
            {
                "from": "ketan.gote@metamagic.in",
                "subject": "spring microservice demo",
                "to": "deepali.arvind@metamagic.in"
            },
            {
                "from": "ketan.gote@metamagic.in",
                "subject": "spring kafka integration",
                "to": "sagar.jadhav@metamagic.in"
            },
            {
                "from": "ankita.Jain@metamagic.in",
                "subject": "jsr Implementation",
                "to": "ketan.gote@metamagic.in"
            },
            {
                "from": "mahesh.pardeshi@metamagic.in",
                "subject": "axon cqrs demo",
                "to": "ketan.gote@metamagic.in"
            },
            {
                "from": "pratik.kelwalkar@metamagic.in",
                "subject": "angular routing",
                "to": "sagar.jadhav@metamagic.in"
            },
            {
                "from": "dattaram.gawas@metamagic.in",
                "subject": "angular pipes",
                "to": "ashwini.agre@metamagic.in"
            },
            {
                "from": "ketan.gote@metamagic.in",
                "subject": "ribbon, hysterix",
                "to": "dattaram.gawas@metamagic.in "
            },
            {
                "from": "deepali.arvind@metamagic.in",
                "subject": "eureka server using spring cloud",
                "to": "ketan.gote@metamagic.in"
            },
            {
                "from": "kedar.kokil@metamagic.in",
                "subject": "rx java",
                "to": "ashwini.agre@metamgic.in"
            },
            {
                "from": "manisha.boddu@metamgic.in",
                "subject": "spring + mongo db",
                "to": "ketan.gote@metamagic.in"
            }, {
                "from": "araf.karsh@metamagic.in",
                "subject": "flux / redux architecture",
                "to": "ketan.gote@metamgic.in"
            }, {
                "from": "ketan.gote@metamagic.in",
                "subject": "desire platform git repos",
                "to": "rashmi.thakkar@metamagic.in"
            }, {
                "from": "ashwini.agre@metamagic.in",
                "subject": "pwa from react to angular/ionic",
                "to": "sagar.jadhav@metamagic.in"
            }, {
                "from": "rashmi.thakkar@metamagic.in",
                "subject": "messages in platform",
                "to": "ankita.jain@metamagic.in"
            }, {
                "from": "araf.karsh@metamagic.in",
                "subject": "typeScript secret weapon...",
                "to": "sagar.jadhav@metamagic.in"
            }, {
                "from": "araf.karsh@metamagic.in",
                "subject": "visual studio code plugin",
                "to": "sagar.jadhav@metamagic.in"
            }, {
                "from": "kedar.kokil@metamagic.in",
                "subject": "hashing algo",
                "to": "dattaram.gawas@metamagic.in "
            }, {
                "from": "sagar.jadhav@metamagic.in ",
                "subject": "vs code for windows, linux and mac os",
                "to": "dattaram.gawas@metamagic.in "
            }, {
                "from": "dattaram.gawas@metamagic.in",
                "subject": "chart library - open source",
                "to": "rashmi.thakkar@metamagic.in"
            }, {
                "from": "ankita.jain@metamagic.in",
                "subject": "tdom uptos in angular",
                "to": "manisha.boddu@metamagic.in"
            }, {
                "from": "dattaram.gawas@metamagic.in ",
                "subject": "hampi release",
                "to": "sagar.jadhav@metamagic.in"
            }, {
                "from": "manisha.boddu@metamagic.in",
                "subject": "building web components",
                "to": "ankita.jain@metamagic.in"
            }, {
                "from": "ketan.gote@metamagic.in",
                "subject": "spring + redis ",
                "to": "deepali.arvind@metamagic.in"
            }, {
                "from": "rashmi.thakkar@metamgic.in",
                "subject": "amexio plans",
                "to": "ketan.gote@metamagic.in"
            }
        ];
        this.searchdata = this.localData;
    }
    //this function is called on hit of filter and it filters entered data
    SearchBox.prototype.filter = function (search) {
        var _this = this;
        this.bindData = [];
        var sub1 = this.subject;
        var to1 = this.to;
        var frm1 = this.from;
        if (sub1 == "" && frm1 == "" && to1 == "") {
            this.bindData = this.searchdata;
        }
        else {
            this.searchdata.forEach(function (element) {
                //st
                if ((sub1.length > 0 && to1.length > 0)) {
                    if (_this.contains(element.subject, sub1) && _this.contains(element.to, to1)) {
                        _this.bindData.push(element);
                    }
                }
                else if ((sub1.length > 0) && (_this.contains(element.subject, sub1))) {
                    _this.bindData.push(element);
                }
                else if ((to1.length > 0) && (_this.contains(element.to, to1))) {
                    _this.bindData.push(element);
                }
                else if ((frm1.length > 0 && to1.length > 0)) {
                    if (_this.contains(element.from, frm1) && _this.contains(element.to, to1)) {
                        _this.bindData.push(element);
                    }
                }
                else if ((sub1.length > 0 && frm1.length > 0 && to1.length > 0)) {
                    if (_this.contains(element.from, frm1) && _this.contains(element.to, to1) && _this.contains(element.subject, sub1)) {
                        _this.bindData.push(element);
                    }
                }
            });
        }
        search.closeSearchForm();
    };
    //compares data with entered data
    SearchBox.prototype.contains = function (value1, value2) {
        return ((value1 + "").startsWith(value2));
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    SearchBox.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    SearchBox.prototype.ngOnInit = function () {
        this.bindData = JSON.parse(JSON.stringify(this.localData));
    };
    SearchBox = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'searchbox-demo',
            template: __webpack_require__(/*! ./searchbox.demo.html */ "./src/app/FormsInput/searchbox/searchbox.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], SearchBox);
    return SearchBox;
}());



/***/ }),

/***/ "./src/app/FormsInput/singlecheckbox/singlecheckbox.demo.html":
/*!********************************************************************!*\
  !*** ./src/app/FormsInput/singlecheckbox/singlecheckbox.demo.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-api-structure [url]=\"'assets/componentjson/forminputs/checkbox.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n      <amexio-column size=\"6\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Single Checkbox\n          </amexio-header>\n          <amexio-body>\n            <amexio-checkbox [field-label]=\"'I Agree terms and conditions'\" [(ngModel)]=\"check\"\n                             (onSelection)=\"onCheckClick($event)\"></amexio-checkbox>\n            <p>Selected Value : {{check}}</p>\n          </amexio-body>\n        </amexio-card>\n\n      </amexio-column>\n      <amexio-column size=\"6\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Single Checkbox with disable\n          </amexio-header>\n          <amexio-body>\n            <amexio-checkbox [field-label]=\"'Agree'\" disabled=\"true\"></amexio-checkbox>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n  </amexio-api-demo>\n</amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/FormsInput/singlecheckbox/singlecheckbox.demo.ts":
/*!******************************************************************!*\
  !*** ./src/app/FormsInput/singlecheckbox/singlecheckbox.demo.ts ***!
  \******************************************************************/
/*! exports provided: SinglecheckboxDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglecheckboxDemo", function() { return SinglecheckboxDemo; });
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

var SinglecheckboxDemo = /** @class */ (function () {
    function SinglecheckboxDemo() {
        this.check = false;
        this.checkWithDisable = true;
    }
    //Checkbox click event
    SinglecheckboxDemo.prototype.onCheckClick = function (data) {
        //add Some Operation
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    SinglecheckboxDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    SinglecheckboxDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'singlecheckbox-demo',
            template: __webpack_require__(/*! ./singlecheckbox.demo.html */ "./src/app/FormsInput/singlecheckbox/singlecheckbox.demo.html"),
        }),
        __metadata("design:paramtypes", [])
    ], SinglecheckboxDemo);
    return SinglecheckboxDemo;
}());



/***/ }),

/***/ "./src/app/FormsInput/slider/slider.demo.html":
/*!****************************************************!*\
  !*** ./src/app/FormsInput/slider/slider.demo.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-api-structure [url]=\"'assets/componentjson/forminputs/slider.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n      <amexio-column size=\"6\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Simple Slider\n          </amexio-header>\n          <amexio-body>\n            <amexio-row>\n              <amexio-column [size]=\"6\">\n                <amexio-slider [(ngModel)]=\"stepVal1\"></amexio-slider>\n                {{stepVal1}}\n              </amexio-column>\n              <amexio-column [size]=\"6\">\n                <amexio-slider disabled = \"true\" min-value=\"0\" max-value=\"50\" [step-value]=\"2\" [(ngModel)]=\"stepVal2\"></amexio-slider>\n                {{stepVal2}}\n              </amexio-column>\n            </amexio-row>\n            <amexio-row>\n              <amexio-column size=\"12\">\n                <b>Vertical Slider</b>\n                <amexio-slider [style]=\"{'height':'200px'}\" orientation=\"vertical\"></amexio-slider>\n\n              </amexio-column>\n            </amexio-row>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n\n    </amexio-row>\n  </amexio-api-demo>\n</amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/FormsInput/slider/slider.demo.ts":
/*!**************************************************!*\
  !*** ./src/app/FormsInput/slider/slider.demo.ts ***!
  \**************************************************/
/*! exports provided: SliderDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderDemo", function() { return SliderDemo; });
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

var SliderDemo = /** @class */ (function () {
    function SliderDemo() {
        this.stepVal1 = 10;
        this.stepVal2 = 20;
    }
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    SliderDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    SliderDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'slider-demo',
            template: __webpack_require__(/*! ./slider.demo.html */ "./src/app/FormsInput/slider/slider.demo.html"),
        }),
        __metadata("design:paramtypes", [])
    ], SliderDemo);
    return SliderDemo;
}());



/***/ }),

/***/ "./src/app/FormsInput/socialmedialogin/facebooklogin/facebooklogin.demo.html":
/*!***********************************************************************************!*\
  !*** ./src/app/FormsInput/socialmedialogin/facebooklogin/facebooklogin.demo.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<amexio-api-structure [url]=\"'assets/componentjson/forminputs/facebook.json'\">\n  <amexio-api-reference><amexio-box border-color=\"brown\" border=\"left\" padding=\"true\" background-color=\"brown\">\n          <amexio-label>\n            Make sure api-key is created before use this component.refer Facebook developer webside to create key <a href=\"https://developers.facebook.com/apps\" target=\"_blank\">Facebook Sign-In</a>\n            <br/><br/>\n          </amexio-label>\n        </amexio-box>\n  </amexio-api-reference>\n  <amexio-api-demo>\n  <amexio-row>\n    <amexio-column size=\"4\">\n      <amexio-card header=\"true\" [body-height]=\"50\">\n        <amexio-header>\n          Demo\n        </amexio-header>\n        <amexio-body>\n          <amexio-row>\n            <amexio-column size=\"12\">\n              <amexio-login-social [label]=\"'Signup With Facebook'\" [api-key]=\"'2203895509849807'\" [type]=\"'facebook'\"\n                (onLogin)=\"onLoginClick($event)\"></amexio-login-social>\n            </amexio-column>\n          </amexio-row>\n          <amexio-row>\n            <amexio-column size=\"12\">\n              <amexio-login-social [style-type]=\"'square'\" [api-key]=\"'2203895509849807'\" [type]=\"'facebook'\" (onLogin)=\"onLoginClick($event)\"></amexio-login-social>\n            </amexio-column>\n          </amexio-row>\n          <amexio-row>\n            <amexio-column size=\"12\">\n              <amexio-login-social [style-type]=\"'circle'\" [api-key]=\"'2203895509849807'\" [type]=\"'facebook'\" (onLogin)=\"onLoginClick($event)\"></amexio-login-social>\n            </amexio-column>\n          </amexio-row>\n        </amexio-body>\n      </amexio-card>\n    </amexio-column>\n    <amexio-column size=\"8\">\n      <amexio-card header=\"true\" [body-height]=\"50\">\n        <amexio-header>\n          User Info After Login\n        </amexio-header>\n        <amexio-body>\n          <amexio-row>\n            <amexio-column size=\"12\" [fit]=\"true\">\n              {{facebookLoginData|json}}\n            </amexio-column>\n          </amexio-row>\n        </amexio-body>\n      </amexio-card>\n    </amexio-column>\n  </amexio-row>\n  </amexio-api-demo>\n  </amexio-api-structure>"

/***/ }),

/***/ "./src/app/FormsInput/socialmedialogin/facebooklogin/facebooklogin.demo.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/FormsInput/socialmedialogin/facebooklogin/facebooklogin.demo.ts ***!
  \*********************************************************************************/
/*! exports provided: FacebookLoginDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookLoginDemo", function() { return FacebookLoginDemo; });
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
 * Created by sagar on 25/1/19.
 */


var FacebookLoginDemo = /** @class */ (function () {
    function FacebookLoginDemo(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
    }
    FacebookLoginDemo.prototype.onLoginClick = function (data) {
        this.facebookLoginData = data;
    };
    // TO LOAD HTML AND TYPESCRIPT CODE
    FacebookLoginDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        // HTML FILE
        this.http.get('assets/data/code/forms/facebooklogin/form.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        // TS FILE
        this.http.get('assets/data/code/forms/facebooklogin/form.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    // THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    FacebookLoginDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    FacebookLoginDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'facebook-login-demo',
            template: __webpack_require__(/*! ./facebooklogin.demo.html */ "./src/app/FormsInput/socialmedialogin/facebooklogin/facebooklogin.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FacebookLoginDemo);
    return FacebookLoginDemo;
}());



/***/ }),

/***/ "./src/app/FormsInput/socialmedialogin/googlelogin/googlelogin.demo.html":
/*!*******************************************************************************!*\
  !*** ./src/app/FormsInput/socialmedialogin/googlelogin/googlelogin.demo.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<amexio-api-structure [url]=\"'assets/componentjson/forminputs/google.json'\">\n  <amexio-api-reference><amexio-box border-color=\"brown\" border=\"left\" padding=\"true\" background-color=\"brown\">\n          <amexio-label>\n            Make sure api-key is created before use this component.refer google developer webside to create key <a href=\"https://developers.google.com/identity/sign-in/web/sign-in\" target=\"_blank\">Google Sign-In</a>\n            <br/><br/>\n          </amexio-label>\n        </amexio-box>\n  </amexio-api-reference>\n  <amexio-api-demo>\n\n<amexio-row>\n    <amexio-column size=\"4\">\n      <amexio-card header=\"true\" [body-height]=\"50\">\n        <amexio-header>\n          Demo\n        </amexio-header>\n        <amexio-body>\n          <amexio-row>\n            <amexio-column size=\"12\">\n              <amexio-login-social [label]=\"'Signup With Google'\" [api-key]=\"'644642582036-hn15j2lag4h5o4t6lhjpk7pmm2q7bv1i.apps.googleusercontent.com'\"\n                [type]=\"'google'\" (onLogin)=\"onLoginClick($event)\"></amexio-login-social>\n            </amexio-column>\n          </amexio-row>\n          <amexio-row>\n            <amexio-column size=\"12\">\n              <amexio-login-social [style-type]=\"'square'\" [api-key]=\"'644642582036-hn15j2lag4h5o4t6lhjpk7pmm2q7bv1i.apps.googleusercontent.com'\"\n                [type]=\"'google'\" (onLogin)=\"onLoginClick($event)\"></amexio-login-social>\n            </amexio-column>\n          </amexio-row>\n          <amexio-row>\n            <amexio-column size=\"12\">\n              <amexio-login-social [style-type]=\"'circle'\" [api-key]=\"'644642582036-hn15j2lag4h5o4t6lhjpk7pmm2q7bv1i.apps.googleusercontent.com'\"\n                [type]=\"'google'\" (onLogin)=\"onLoginClick($event)\"></amexio-login-social>\n            </amexio-column>\n          </amexio-row>\n\n        </amexio-body>\n      </amexio-card>\n    </amexio-column>\n    <amexio-column size=\"8\">\n      <amexio-card header=\"true\" [body-height]=\"50\">\n        <amexio-header>\n          User Info After Login\n        </amexio-header>\n        <amexio-body>\n          <amexio-row>\n            <amexio-column size=\"12\" [fit]=\"true\">\n              {{googleLoginData|json}}\n            </amexio-column>\n          </amexio-row>\n        </amexio-body>\n      </amexio-card>\n    </amexio-column>\n  </amexio-row>\n  </amexio-api-demo>\n  </amexio-api-structure>"

/***/ }),

/***/ "./src/app/FormsInput/socialmedialogin/googlelogin/googlelogin.demo.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/FormsInput/socialmedialogin/googlelogin/googlelogin.demo.ts ***!
  \*****************************************************************************/
/*! exports provided: GoogleLoginDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginDemo", function() { return GoogleLoginDemo; });
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
 * Created by sagar on 25/1/19.
 */


var GoogleLoginDemo = /** @class */ (function () {
    function GoogleLoginDemo(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
    }
    GoogleLoginDemo.prototype.onLoginClick = function (data) {
        this.googleLoginData = data;
    };
    // TO LOAD HTML AND TYPESCRIPT CODE
    GoogleLoginDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        // HTML FILE
        this.http.get('assets/data/code/forms/googlelogin/form.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        // TS FILE
        this.http.get('assets/data/code/forms/googlelogin/form.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    // THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    GoogleLoginDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    GoogleLoginDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'google-login-demo',
            template: __webpack_require__(/*! ./googlelogin.demo.html */ "./src/app/FormsInput/socialmedialogin/googlelogin/googlelogin.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GoogleLoginDemo);
    return GoogleLoginDemo;
}());



/***/ }),

/***/ "./src/app/FormsInput/socialmedialogin/linkedinlogin/linkedinlogin.demo.html":
/*!***********************************************************************************!*\
  !*** ./src/app/FormsInput/socialmedialogin/linkedinlogin/linkedinlogin.demo.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n \n\n<amexio-api-structure [url]=\"'assets/componentjson/forminputs/linkedln.json'\">\n  <amexio-api-reference><amexio-box border-color=\"brown\" border=\"left\" padding=\"true\" background-color=\"brown\">\n          <amexio-label>\n            Make sure api-key is created before use this component.refer Linkedin developer webside to create key <a href=\"https://developer.linkedin.com/docs/signin-with-linkedin\" target=\"_blank\">Linkedin Sign-In</a>\n            <br/><br/>\n          </amexio-label>\n        </amexio-box>\n  </amexio-api-reference>\n  <amexio-api-demo>\n <amexio-row>\n    <amexio-column size=\"4\">\n      <amexio-card header=\"true\" [body-height]=\"50\">\n        <amexio-header>\n          Demo\n        </amexio-header>\n        <amexio-body>\n          <amexio-row>\n            <amexio-column size=\"12\">\n              <amexio-login-social [label]=\"'Signup With Linkedin'\" [api-key]=\"'8110cgvg7wbie7'\" [type]=\"'linkedin'\"\n                (onLogin)=\"onLoginClick($event)\"></amexio-login-social>\n            </amexio-column>\n          </amexio-row>\n          <amexio-row>\n            <amexio-column size=\"12\">\n              <amexio-login-social [style-type]=\"'square'\" [api-key]=\"'8110cgvg7wbie7'\" [type]=\"'linkedin'\" (onLogin)=\"onLoginClick($event)\"></amexio-login-social>\n            </amexio-column>\n          </amexio-row>\n          <amexio-row>\n            <amexio-column size=\"12\">\n              <amexio-login-social [style-type]=\"'circle'\" [api-key]=\"'8110cgvg7wbie7'\" [type]=\"'linkedin'\" (onLogin)=\"onLoginClick($event)\"></amexio-login-social>\n            </amexio-column>\n          </amexio-row>\n        </amexio-body>\n      </amexio-card>\n    </amexio-column>\n    <amexio-column size=\"8\">\n      <amexio-card header=\"true\" [body-height]=\"50\">\n        <amexio-header>\n          User Info After Login\n        </amexio-header>\n        <amexio-body>\n          <amexio-row>\n            <amexio-column size=\"12\" [fit]=\"true\">\n              {{linkedinLoginData|json}}\n            </amexio-column>\n          </amexio-row>\n        </amexio-body>\n      </amexio-card>\n    </amexio-column>\n  </amexio-row>\n\n  </amexio-api-demo>\n  </amexio-api-structure>"

/***/ }),

/***/ "./src/app/FormsInput/socialmedialogin/linkedinlogin/linkedinlogin.demo.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/FormsInput/socialmedialogin/linkedinlogin/linkedinlogin.demo.ts ***!
  \*********************************************************************************/
/*! exports provided: LinkedinLoginDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedinLoginDemo", function() { return LinkedinLoginDemo; });
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
 * Created by sagar on 25/1/19.
 */


var LinkedinLoginDemo = /** @class */ (function () {
    function LinkedinLoginDemo(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
    }
    LinkedinLoginDemo.prototype.onLoginClick = function (data) {
        this.linkedinLoginData = data;
    };
    // TO LOAD HTML AND TYPESCRIPT CODE
    LinkedinLoginDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        // HTML FILE
        this.http.get('assets/data/code/forms/linkedinlogin/form.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        // TS FILE
        this.http.get('assets/data/code/forms/linkedinlogin/form.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    // THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    LinkedinLoginDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    LinkedinLoginDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'linkedin-login-demo',
            template: __webpack_require__(/*! ./linkedinlogin.demo.html */ "./src/app/FormsInput/socialmedialogin/linkedinlogin/linkedinlogin.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LinkedinLoginDemo);
    return LinkedinLoginDemo;
}());



/***/ }),

/***/ "./src/app/FormsInput/taginput/taginput.demo.html":
/*!********************************************************!*\
  !*** ./src/app/FormsInput/taginput/taginput.demo.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<amexio-api-structure [url]=\"'assets/componentjson/forminputs/taginput.json'\">\n    <amexio-api-demo>\n\n<amexio-row>\n    <amexio-column size=\"12\">\n        <amexio-card header=\"true\">\n            <amexio-header>\n                Simple Tags Input\n            </amexio-header>\n            <amexio-body>\n                <amexio-row>\n                    <amexio-column [size]=\"6\">\n                        <amexio-tag-input [data-reader]=\"'data'\" [http-url]=\"'assets/data/componentdata/country.json'\"\n                            [http-method]=\"'get'\" [key]=\"'countryName'\" [display-field]=\"'countryName'\" [value-field]=\"'countryName'\"\n                            [field-label]=\"'Country Name'\" (onChange)=\"onRecordSelect($event)\">\n                        </amexio-tag-input>\n                    </amexio-column>\n\n                    <amexio-column [size]=\"6\">\n\n                        <amexio-card [header]=\"true\" [body-height]=\"50\">\n                            <amexio-header>\n                                Output Code\n                            </amexio-header>\n                            <amexio-body>\n                                <ng-container *ngIf=\"outputData\">\n                                    <pre><code>  {{outputData|json}} </code></pre>\n                                </ng-container>\n                            </amexio-body>\n                        </amexio-card>\n\n                    </amexio-column>\n                </amexio-row>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n</amexio-row>\n\n</amexio-api-demo>\n</amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/FormsInput/taginput/taginput.demo.ts":
/*!******************************************************!*\
  !*** ./src/app/FormsInput/taginput/taginput.demo.ts ***!
  \******************************************************/
/*! exports provided: TagInputDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputDemo", function() { return TagInputDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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


var TagInputDemo = /** @class */ (function () {
    function TagInputDemo(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
    }
    TagInputDemo.prototype.onRecordSelect = function (data) {
        this.outputData = data;
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    TagInputDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        var responseData;
        //HTML FILE
        this.http.get('assets/data/code/forms/taginput/form.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/forms/taginput/form.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
        //JSON FILE
        this.http.get('assets/data/componentdata/country.json', { responseType: 'text' }).subscribe(function (data) {
            responseData = data;
        }, function (error) {
        }, function () {
            _this.dataSource = responseData;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    TagInputDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    TagInputDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'taginput-demo',
            template: __webpack_require__(/*! ./taginput.demo.html */ "./src/app/FormsInput/taginput/taginput.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TagInputDemo);
    return TagInputDemo;
}());



/***/ }),

/***/ "./src/app/FormsInput/text/text.demo.html":
/*!************************************************!*\
  !*** ./src/app/FormsInput/text/text.demo.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-api-structure [url]=\"'assets/componentjson/forminputs/textinput.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n      <amexio-column size=\"6\">\n        <amexio-card header=\"true\">\n          <amexio-header>\n            Basic Text Field\n          </amexio-header>\n          <amexio-body>\n            <amexio-text-input field-label=\"Name\" name=\"name\" place-holder=\"Enter name\" icon-feedback=\"true\"></amexio-text-input>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n      <amexio-column [size]=\"6\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Input Without Label & Icon feedback\n          </amexio-header>\n          <amexio-body>\n            <amexio-text-input name=\"name\" place-holder=\"Enter name\" has-label=\"false\"></amexio-text-input>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n    <amexio-row>\n      <amexio-column size=\"6\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Min/Max Validations\n          </amexio-header>\n          <amexio-body>\n            <amexio-text-input enable-popover=\"true\" [enable-popover]=\"true\" field-label=\"Name\" name=\"name\" place-holder=\"Enter name\" [allow-blank]=\"false\" error-msg=\"Please Enter Name\" [min-length]=\"1\" min-error-msg=\"Minimum 1 Char Required\" [max-length]=\"10\"\n                               max-error-msg=\"Maximum 10 Char Allowed\" [icon-feedback]=\"true\"></amexio-text-input>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n      <amexio-column [size]=\"6\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Disabled Text Field\n          </amexio-header>\n          <amexio-body>\n            <amexio-text-input name=\"name\" field-label=\"Name\" place-holder=\"Enter name\" disabled=\"true\"></amexio-text-input>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n    <amexio-row>\n      <amexio-column size=\"6\">\n        <amexio-card header=\"true\">\n          <amexio-header>\n            Font Styling\n          </amexio-header>\n          <amexio-body>\n            <amexio-text-input field-label=\"Name\" name=\"name\" place-holder=\"Enter name\" icon-feedback=\"true\" font-style=\"italic\"></amexio-text-input>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n      <amexio-column size=\"6\">\n        <amexio-card header=\"true\">\n          <amexio-header>\n            Font Size & Family Styling\n          </amexio-header>\n          <amexio-body>\n            <amexio-text-input [field-label]=\"'Name'\" name=\"name\" [place-holder]=\"'Enter name'\" [icon-feedback]=\"false\" [font-size]=\"'large'\"></amexio-text-input>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n    <amexio-row>\n      <amexio-column [size]=\"6\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Input with Pattern\n          </amexio-header>\n          <amexio-body>\n            <amexio-text-input name=\"name\" [field-label]=\"'Name'\" [place-holder]=\"'Enter name'\" [pattern]=\"'[a-z]'\" [icon-feedback]=\"true\"></amexio-text-input>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n  </amexio-api-demo>\n</amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/FormsInput/text/text.demo.ts":
/*!**********************************************!*\
  !*** ./src/app/FormsInput/text/text.demo.ts ***!
  \**********************************************/
/*! exports provided: TextDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDemo", function() { return TextDemo; });
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

var TextDemo = /** @class */ (function () {
    function TextDemo() {
    }
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    TextDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    TextDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'text-demo',
            template: __webpack_require__(/*! ./text.demo.html */ "./src/app/FormsInput/text/text.demo.html")
        }),
        __metadata("design:paramtypes", [])
    ], TextDemo);
    return TextDemo;
}());



/***/ }),

/***/ "./src/app/FormsInput/textarea/textarea.demo.html":
/*!********************************************************!*\
  !*** ./src/app/FormsInput/textarea/textarea.demo.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-api-structure [url]=\"'assets/componentjson/forminputs/textarea.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n      <amexio-column size=\"6\">\n        <amexio-card header=\"true\">\n          <amexio-header>\n            Basic TextArea Input\n          </amexio-header>\n          <amexio-body>\n            <amexio-textarea-input [enable-popover]=\"true\"  [field-label]=\"'Textarea Input'\" name =\"Address\"\n                                   [place-holder]=\"'permanent Address'\"\n                                   [allow-blank]=\"false\" [error-msg] =\"'Please enter Address'\"\n                                   [icon-feedback]=\"true\" [rows]=\"'4'\" [columns]=\"'2'\">\n            </amexio-textarea-input>\n\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n      <amexio-column [size]=\"6\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            TextArea Input with rows 7 and columns 4\n          </amexio-header>\n          <amexio-body>\n            <!--TextArea Input with rows 7 and columns 4-->\n\n            <amexio-textarea-input [field-label]=\"'Textarea Input'\" name =\"Address\"\n                                   [place-holder]=\"'permanent Address'\"\n                                   [allow-blank]=\"true\" [error-msg] =\"'Please enter Address'\"\n                                   [icon-feedback]=\"true\" [rows]=\"'7'\" [columns]=\"'4'\">\n            </amexio-textarea-input>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n  </amexio-api-demo>\n</amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/FormsInput/textarea/textarea.demo.ts":
/*!******************************************************!*\
  !*** ./src/app/FormsInput/textarea/textarea.demo.ts ***!
  \******************************************************/
/*! exports provided: TextareaDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaDemo", function() { return TextareaDemo; });
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

var TextareaDemo = /** @class */ (function () {
    function TextareaDemo() {
    }
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    TextareaDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    TextareaDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'textarea-demo',
            template: __webpack_require__(/*! ./textarea.demo.html */ "./src/app/FormsInput/textarea/textarea.demo.html"),
        }),
        __metadata("design:paramtypes", [])
    ], TextareaDemo);
    return TextareaDemo;
}());



/***/ }),

/***/ "./src/app/FormsInput/toggle/toggle.demo.html":
/*!****************************************************!*\
  !*** ./src/app/FormsInput/toggle/toggle.demo.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-api-structure [url]=\"'assets/componentjson/forminputs/toggle.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n      <amexio-column [size]=\"6\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Round Toggle\n          </amexio-header>\n          <amexio-body>\n            <amexio-toggle [field-label]=\"'Round'\"></amexio-toggle>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n      <amexio-column [size]=\"6\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Square Toggle\n          </amexio-header>\n          <amexio-body>\n            <amexio-toggle [field-label]=\"'Square'\" shape=\"square\" (onChange)=\"onSquareToggleClick($event)\"></amexio-toggle>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n\n    </amexio-row>\n  </amexio-api-demo>\n</amexio-api-structure>\n\n\n<amexio-notification [data]=\"toggleMsgArray\" [vertical-position]=\"'top'\" [horizontal-position]=\"'right'\"></amexio-notification>\n"

/***/ }),

/***/ "./src/app/FormsInput/toggle/toggle.demo.ts":
/*!**************************************************!*\
  !*** ./src/app/FormsInput/toggle/toggle.demo.ts ***!
  \**************************************************/
/*! exports provided: ToggleDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleDemo", function() { return ToggleDemo; });
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

var ToggleDemo = /** @class */ (function () {
    function ToggleDemo() {
        this.toggleMsgArray = [];
    }
    //Square Toggle click event
    ToggleDemo.prototype.onSquareToggleClick = function (data) {
        this.toggleMsgArray.push('Square Toggle Click');
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    ToggleDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    ToggleDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'toggle-demo',
            template: __webpack_require__(/*! ./toggle.demo.html */ "./src/app/FormsInput/toggle/toggle.demo.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ToggleDemo);
    return ToggleDemo;
}());



/***/ }),

/***/ "./src/app/FormsInput/typeahead/typeahead.demo.html":
/*!**********************************************************!*\
  !*** ./src/app/FormsInput/typeahead/typeahead.demo.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-api-structure [url]=\"'assets/componentjson/forminputs/typeahead.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n      <amexio-column size=\"6\">\n        <amexio-card header=\"true\">\n          <amexio-header>\n            Simple Type Ahead Field\n          </amexio-header>\n          <amexio-body>\n            <amexio-typeahead [data-reader]=\"'data'\"\n                              [key]=\"'countryCode1'\"\n                              [display-field]=\"'countryName'\"\n                              [place-holder]=\"'Search'\"\n                              [(ngModel)]=\"country\"\n                              [http-url]=\"'assets/data/componentdata/country.json'\"\n                              [http-method]=\"'get'\"\n                              [field-label]=\"'Country Name'\">\n            </amexio-typeahead>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n      <amexio-column size=\"6\">\n        <amexio-card header=\"true\">\n          <amexio-header>\n            Selected Value\n          </amexio-header>\n          <amexio-body>\n            {{country}}\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n  </amexio-api-demo>\n</amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/FormsInput/typeahead/typeahead.demo.ts":
/*!********************************************************!*\
  !*** ./src/app/FormsInput/typeahead/typeahead.demo.ts ***!
  \********************************************************/
/*! exports provided: TypeAheadDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeAheadDemo", function() { return TypeAheadDemo; });
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

var TypeAheadDemo = /** @class */ (function () {
    function TypeAheadDemo() {
        this.typeAHeadData = {
            "data": [{ "sportName": "Cricket", "code": "Ck" }, { "sportName": "Swimming", "code": "Sw" }, {
                    "sportName": "Golf",
                    "code": "Glf"
                }, { "sportName": "Hockey", "code": "Hky" }, { "sportName": "Soccer", "code": "Scr" }, {
                    "sportName": "Formula One",
                    "code": "F1"
                }]
        };
    }
    TypeAheadDemo.prototype.onTypeheadClick = function (data) {
        this.name = data.name;
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    TypeAheadDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    TypeAheadDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'typeahead-demo',
            template: __webpack_require__(/*! ./typeahead.demo.html */ "./src/app/FormsInput/typeahead/typeahead.demo.html"),
        }),
        __metadata("design:paramtypes", [])
    ], TypeAheadDemo);
    return TypeAheadDemo;
}());



/***/ })

}]);
//# sourceMappingURL=FormsInput-FormsInput-module.js.map