(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-spinner-spinner-demo-module"],{

/***/ "./src/app/data/spinner/spinner.demo.html":
/*!************************************************!*\
  !*** ./src/app/data/spinner/spinner.demo.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card header=\"true\">\n    <amexio-header>\n        Data Loading Indicator\n    </amexio-header>\n    <amexio-body>\n        <p>Data Loading Indicator Component Provides up-to-date feedback on the progress of a workflow or action with\n            simple yet flexible spinner and easy to configure.</p>\n        <amexio-tab-view>\n            <amexio-tab title=\"Demo\" active=\"true\">\n                <amexio-row>\n                    <amexio-column size=\"12\">\n                        <amexio-card [header]=\"true\">\n                            <amexio-header>\n                                Data Loading Indicator\n                            </amexio-header>\n                            <amexio-body>\n\n                                <amexio-button [label]=\"text\" [type]=\"'yellow'\" [tooltip]=\"'show'\" (onClick)=\"onButtonClick()\">\n                                </amexio-button>\n                                <br />\n                                <amexio-label size=\"small-bold\">Select Color For Spinner : -</amexio-label>\n                                <input type=\"color\" id=\"head\" name=\"color\" (input)=\"setColorForIndictor($event)\" value=\"colorModel.color\" />\n\n\n                                <amexio-row>\n                                    <amexio-column [size]=\"4\" [fit]=true>\n                                        <amexio-card [header]=\"true\" [body-height]=\"45\" [footer]=\"true\" [footer-align]=\"'right'\">\n                                            <amexio-header>\n                                                Advanced Spinner\n                                            </amexio-header>\n                                            <amexio-body>\n                                                    <amexio-spinner *ngIf=\"isBoxShow\" [type]=\"spinnerModel.spinnerType\"\n                                                        [vertical-position]=\"spinnerModel.vposition\" [horizontal-position]=\"spinnerModel.hposition\"\n                                                        [color]=\"colorModel.color\">\n                                                    </amexio-spinner>\n                                                <amexio-dropdown  [place-holder]=\"'Choose'\" [(ngModel)]=\"spinnerModel.spinnerType\"\n                                                    [data-reader]=\"'type'\" [field-label]=\"'Choose Spinner Type'\" [data]=\"spinnerData\"\n                                                    [display-field]=\"'spinnerType'\" [value-field]=\"'spinnerType'\">\n                                                </amexio-dropdown>\n\n                                                <amexio-dropdown [(ngModel)]=\"spinnerModel.vposition\" [place-holder]=\"'Choose'\"\n                                                    [data-reader]=\"'verticalPosition'\" [field-label]=\"'Choose Vertical Position'\"\n                                                    [data]=\"spinnerData\" [display-field]=\"'vposition'\" [value-field]=\"'vposition'\" >\n                                                </amexio-dropdown>\n\n                                                <amexio-dropdown [(ngModel)]=\"spinnerModel.hposition\" [place-holder]=\"'Choose'\"\n                                                    [data-reader]=\"'horizontalPosition'\" [field-label]=\"'Choose Horizontal Position'\"\n                                                    [data]=\"spinnerData\" [display-field]=\"'hposition'\" [value-field]=\"'hposition'\">\n                                                </amexio-dropdown>\n                                            </amexio-body>\n\n                                            <amexio-action>\n                                                <amexio-button [label]=\"buttonShowHide\" [type]=\"'green'\" [tooltip]=\"'show'\"\n                                                    (onClick)=\"onAdvanceClick()\">\n                                                </amexio-button>\n                                            </amexio-action>\n                                        </amexio-card>\n                                    </amexio-column>\n                                    <amexio-column [size]=\"4\" [fit]=true>\n                                        <amexio-card [header]=\"true\">\n                                            <amexio-header>\n                                                fading circle round loader\n                                            </amexio-header>\n                                            <amexio-body>\n                                                <amexio-spinner [show]=clickShow [size]=\"'10px'\" relative=\"true\" [type]=\"'fadingcircle'\"\n                                                    [color]=\"colorModel.color\">\n                                                </amexio-spinner>\n                                            </amexio-body>\n                                        </amexio-card>\n                                    </amexio-column>\n                                    <amexio-column [size]=\"4\" [fit]=true>\n                                        <amexio-card [header]=\"true\">\n                                            <amexio-header>\n                                                ball spin loader\n                                            </amexio-header>\n                                            <amexio-body>\n                                                <amexio-spinner [show]=clickShow [size]=\"'9px'\" relative=\"true\" [type]=\"'ballspin'\"\n                                                    [color]=\"colorModel.color\">\n                                                </amexio-spinner>\n                                            </amexio-body>\n                                        </amexio-card>\n                                    </amexio-column>\n                                </amexio-row>\n\n                                <amexio-row>\n                                    <amexio-column [size]=\"4\" [fit]=true>\n                                        <amexio-card [header]=\"true\" [body-height]=\"45\">\n                                            <amexio-header>\n                                                fire spin loader\n                                            </amexio-header>\n                                            <amexio-body>\n                                                <amexio-spinner [show]=clickShow [size]=\"'50px'\" relative=\"true\" [type]=\"'firespin'\"\n                                                    [color]=\"colorModel.color\">\n                                                </amexio-spinner>\n                                            </amexio-body>\n                                        </amexio-card>\n                                    </amexio-column>\n                                    <amexio-column [size]=\"4\" [fit]=true>\n                                        <amexio-card [header]=\"true\" [body-height]=\"45\">\n                                            <amexio-header>\n                                                three bounce loader\n                                            </amexio-header>\n                                            <amexio-body>\n                                                <amexio-spinner [show]='clickShow' [size]=\"'8px'\" relative=\"true\"\n                                                    [type]=\"'threebounce'\" [color]=\"colorModel.color\">\n                                                </amexio-spinner>\n                                            </amexio-body>\n                                        </amexio-card>\n                                    </amexio-column>\n                                    <amexio-column [size]=\"4\" [fit]=true>\n                                        <amexio-card [header]=\"true\">\n                                            <amexio-header>\n                                                spinner round loader\n                                            </amexio-header>\n                                            <amexio-body>\n                                                <amexio-spinner [show]=clickShow [size]=\"'6px'\" relative=\"true\" [type]=\"'spinnerround'\"\n                                                    [color]=\"colorModel.color\">\n                                                </amexio-spinner>\n                                            </amexio-body>\n                                        </amexio-card>\n                                    </amexio-column>\n                                </amexio-row>\n\n                                <amexio-row>\n                                    <amexio-column [size]=\"4\" [fit]=true>\n                                        <amexio-card [header]=\"true\" [body-height]=\"45\">\n                                            <amexio-header>\n                                                ring loader\n                                            </amexio-header>\n                                            <amexio-body>\n                                                <amexio-spinner [show]=clickShow [size]=\"'10px'\" [color]=\"colorModel.color\"\n                                                    relative=\"true\" [type]=\"'ring'\">\n                                                </amexio-spinner>\n                                            </amexio-body>\n                                        </amexio-card>\n                                    </amexio-column>\n\n                                    <amexio-column [size]=\"4\" [fit]=true>\n                                        <amexio-card [header]=\"true\" [body-height]=\"45\">\n                                            <amexio-header>\n                                                half circle loader\n                                            </amexio-header>\n                                            <amexio-body>\n                                                <amexio-spinner [show]=clickShow [size]=\"'10px'\" relative=\"true\" [type]=\"'halfcircle'\">\n                                                </amexio-spinner>\n                                            </amexio-body>\n                                        </amexio-card>\n                                    </amexio-column>\n                                    <amexio-column [size]=\"4\" [fit]=true>\n                                        <amexio-card [header]=\"true\" [body-height]=\"45\">\n                                            <amexio-header>\n                                                rectangle Bounce loader\n                                            </amexio-header>\n                                            <amexio-body>\n                                                <amexio-spinner [show]=clickShow [size]=\"'9px'\" relative=\"true\" [type]=\"'rectanglebounce'\">\n                                                </amexio-spinner>\n                                            </amexio-body>\n                                        </amexio-card>\n                                    </amexio-column>\n                                </amexio-row>\n\n\n\n\n                            </amexio-body>\n                        </amexio-card>\n\n                    </amexio-column>\n                </amexio-row>\n            </amexio-tab>\n            <amexio-tab title=\"API Reference\">\n                <amexio-datagrid title=\"Properties<amexio-spinner>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\"\n                    [http-url]=\"'assets/apireference/data/spinner.json'\" [data-reader]=\"'properties'\"\n                    [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [data-index]=\"'name'\" [width]=\"15\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Version'\"></amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'type'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'default'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [data-index]=\"'description'\" [width]=\"65\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n            </amexio-tab>\n            <amexio-tab title=\"Source\">\n                <div style=\"overflow-y: scroll\">\n                    <amexio-vertical-tab-view>\n                        <amexio-tab title=\"HTML\" [active]=\"true\">\n                            <ng-container *ngIf=\"htmlCode\">\n                                <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                                <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"Type Script\">\n                            <ng-container *ngIf=\"typeScriptCode\">\n                                <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                    </amexio-vertical-tab-view>\n                </div>\n            </amexio-tab>\n            <amexio-tab title=\"Live\">\n                <p align=\"center\">Amexio Sandbox</p>\n                <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-spinner?embed=1&file=src/app/spinner/spinner.demo.component.html&view=editor\"\n                    frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n            </amexio-tab>\n        </amexio-tab-view>\n    </amexio-body>\n</amexio-card>"

/***/ }),

/***/ "./src/app/data/spinner/spinner.demo.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/data/spinner/spinner.demo.module.ts ***!
  \*****************************************************/
/*! exports provided: AmexioSpinnerDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmexioSpinnerDemoModule", function() { return AmexioSpinnerDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _spinner_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spinner.demo */ "./src/app/data/spinner/spinner.demo.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Created by kedar on 19/9/18.
 */
var AmexioSpinnerDemoModule = /** @class */ (function () {
    function AmexioSpinnerDemoModule() {
    }
    AmexioSpinnerDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_spinner_demo__WEBPACK_IMPORTED_MODULE_6__["AmexioSpinnerDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _spinner_demo__WEBPACK_IMPORTED_MODULE_6__["AmexioSpinnerDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], AmexioSpinnerDemoModule);
    return AmexioSpinnerDemoModule;
}());



/***/ }),

/***/ "./src/app/data/spinner/spinner.demo.ts":
/*!**********************************************!*\
  !*** ./src/app/data/spinner/spinner.demo.ts ***!
  \**********************************************/
/*! exports provided: AmexioSpinnerDemo, ColorModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmexioSpinnerDemo", function() { return AmexioSpinnerDemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorModel", function() { return ColorModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _spinner_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinner.model */ "./src/app/data/spinner/spinner.model.ts");
/**
 * Created by kedar on 19/9/18.
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



var AmexioSpinnerDemo = /** @class */ (function () {
    function AmexioSpinnerDemo(http) {
        this.http = http;
        this.isBoxShow = false;
        this.clickShow = true;
        this.buttonShowHide = 'Show';
        this.text = 'Hide';
        this.getHtmlAndTypeScriptCode();
        this.colorModel = new ColorModel();
        this.spinnerModel = new _spinner_model__WEBPACK_IMPORTED_MODULE_2__["SpinnerModel"]();
        this.spinnerData = {
            "type": [
                {
                    "spinnerType": "rectanglebounce",
                },
                {
                    "spinnerType": "ring",
                },
                {
                    "spinnerType": "halfcircle",
                },
                {
                    "spinnerType": "fadingcircle",
                },
                {
                    "spinnerType": "ballspin",
                },
                {
                    "spinnerType": "firespin",
                },
                {
                    "spinnerType": "threebounce",
                },
                {
                    "spinnerType": "spinnerround",
                }
            ],
            "horizontalPosition": [
                {
                    "hposition": "left"
                },
                {
                    "hposition": "center"
                },
                {
                    "hposition": "right"
                }
            ],
            "verticalPosition": [
                {
                    "vposition": "top"
                },
                {
                    "vposition": "center"
                },
                {
                    "vposition": "bottom"
                }
            ]
        };
    }
    //TO LOAD HTML AND TYPESCRIPT CODE
    AmexioSpinnerDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/data/spinner/spinner.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/data/spinner/spinner.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    AmexioSpinnerDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    //THIS METHOD IS USED FOR SETTING COLOR FOR INDICATOR
    AmexioSpinnerDemo.prototype.setColorForIndictor = function (colorName) {
        this.colorModel.color = colorName.target.value;
    };
    // Method For the spinner show and hide
    AmexioSpinnerDemo.prototype.onButtonClick = function () {
        if (this.clickShow) {
            this.text = 'Show';
        }
        else {
            this.text = 'Hide';
        }
        this.clickShow = !this.clickShow;
    };
    AmexioSpinnerDemo.prototype.onAdvanceClick = function () {
        if (this.spinnerModel.hposition != null && this.spinnerModel.spinnerType != null && this.spinnerModel.vposition != null) {
            this.buttonShowHide = 'Show';
        }
        else {
            this.buttonShowHide = 'Hide';
        }
        this.isBoxShow = !this.isBoxShow;
        if (this.isBoxShow) {
            this.buttonShowHide = 'Hide';
        }
        else {
            this.buttonShowHide = 'Show';
        }
    };
    AmexioSpinnerDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'amexio-spinner-demo',
            template: __webpack_require__(/*! ./spinner.demo.html */ "./src/app/data/spinner/spinner.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AmexioSpinnerDemo);
    return AmexioSpinnerDemo;
}());

var ColorModel = /** @class */ (function () {
    function ColorModel() {
    }
    return ColorModel;
}());



/***/ }),

/***/ "./src/app/data/spinner/spinner.model.ts":
/*!***********************************************!*\
  !*** ./src/app/data/spinner/spinner.model.ts ***!
  \***********************************************/
/*! exports provided: SpinnerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerModel", function() { return SpinnerModel; });
var SpinnerModel = /** @class */ (function () {
    function SpinnerModel() {
    }
    return SpinnerModel;
}());



/***/ })

}]);
//# sourceMappingURL=data-spinner-spinner-demo-module.js.map