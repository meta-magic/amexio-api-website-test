(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-datepicker-datepicker-demo-module"],{

/***/ "./src/app/forms/datepicker/datepicker.demo.module.ts":
/*!************************************************************!*\
  !*** ./src/app/forms/datepicker/datepicker.demo.module.ts ***!
  \************************************************************/
/*! exports provided: DateTimeDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeDemoModule", function() { return DateTimeDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _datepicker_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datepicker.demo */ "./src/app/forms/datepicker/datepicker.demo.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Created by sagar on 11/1/18.
 */
var DateTimeDemoModule = /** @class */ (function () {
    function DateTimeDemoModule() {
    }
    DateTimeDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_datepicker_demo__WEBPACK_IMPORTED_MODULE_6__["DateTimePickerDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _datepicker_demo__WEBPACK_IMPORTED_MODULE_6__["DateTimePickerDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], DateTimeDemoModule);
    return DateTimeDemoModule;
}());



/***/ }),

/***/ "./src/app/forms/datepicker/datepicker.demo.ts":
/*!*****************************************************!*\
  !*** ./src/app/forms/datepicker/datepicker.demo.ts ***!
  \*****************************************************/
/*! exports provided: DateTimePickerDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimePickerDemo", function() { return DateTimePickerDemo; });
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


var DateTimePickerDemo = /** @class */ (function () {
    function DateTimePickerDemo(http) {
        this.http = http;
        this.date = new Date("March 21, 2018 01:15:00");
        this.getHtmlAndTypeScriptCode();
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
    //TO LOAD HTML AND TYPESCRIPT CODE
    DateTimePickerDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/forms/datepicker/form.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/forms/datepicker/form.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
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
            selector: 'date-picker-demo', template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n         Date Time Picker \n      </amexio-header>\n      <amexio-body>\n        <p>This component is flexible for both Date and time picker with all required configurations in Style.</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n            <amexio-row>\n              <amexio-column [size]=\"6\">\n                <amexio-card [header]=\"true\" [footer]=\"true\" [footer-align]=\"'center'\">\n                  <amexio-header>\n                    Inline Date Picker with min,max and disabled date\n                  </amexio-header>\n                  <amexio-body>\n                    <amexio-row>\n                      <amexio-column [size]=\"12\">\n                       <!-- ---1--- -->\n                       <amexio-date-time-picker\n                       [inline-datepicker]=\"true\"\n                         [field-label]=\"'Date Of Birth'\"\n                         [time-picker]=\"false\"\n                         [date-picker]=\"true\"\n                         [min-date]=\"'22-Mar-2016'\" \n                         [max-date]=\"'22-Feb-2019'\"\n                         [disabled-date]=\"disabledDate\"\n                         [(ngModel)]=\"currentDate1\">\n                       </amexio-date-time-picker>\n     \n\n\n\n\n                      </amexio-column>\n                    </amexio-row>\n                    \n                  </amexio-body>\n                  <amexio-action>\n                     {{currentDate1}} \n                  </amexio-action>\n                </amexio-card>\n               \n              </amexio-column>\n              <amexio-column [size]=\"6\">\n              <!-- -2- -->\n                <amexio-card [header]=\"true\" [footer]=\"true\" [footer-align]=\"'center'\">\n                  <amexio-header>\n                     Time Picker \n                  </amexio-header>\n                  <amexio-body>\n                    <amexio-row>\n                      <amexio-column [size]=\"12\">\n                        <amexio-date-time-picker\n                          [field-label]=\"'Time Of Birth'\"\n                          [time-picker]=\"true\"\n                          [date-picker]=\"false\"\n                          [min-date]=\"'Thu Jul 25 2017 00:00:00 GMT+0530 (IST)'\"\n                          [ngModel]=\"time\"\n                          (change)=\"onChangeTime($event)\">\n                        </amexio-date-time-picker>\n                      </amexio-column>\n                    </amexio-row>\n                  </amexio-body>\n                  <amexio-action>\n                     {{time}} \n                  </amexio-action>\n                </amexio-card>\n               \n              </amexio-column>\n\n            </amexio-row>\n            <amexio-row>\n            <amexio-column [size]=\"'6'\">\n         <amexio-card [header]=\"true\" [footer]=\"true\" [footer-align]=\"'center'\">\n            <amexio-header>\n            Date Picker with min,max date\n            </amexio-header>\n            <amexio-body>\n              <amexio-row>\n                <amexio-column [size]=\"12\">\n                 <!-- --3-- -->\n                  \n                 <amexio-date-time-picker\n                    [field-label]=\"'Date Of Birth'\"\n                   [time-picker]=\"false\"\n                   [date-picker]=\"true\"\n                   [min-date]=\"'22-Mar-2016'\" \n                   [max-date]=\"'22-Feb-2019'\"\n                   [(ngModel)]=\"currentDate\">\n                 </amexio-date-time-picker>\n\n\n\n\n                </amexio-column>\n              </amexio-row>\n              \n            </amexio-body>\n            <amexio-action>\n               {{currentDate}} \n            </amexio-action>\n          </amexio-card>\n            </amexio-column>\n            <!-- ------4---------- -->\n            <amexio-column [size]=\"'6'\">\n            <amexio-card [header]=\"true\" [footer]=\"true\" [footer-align]=\"'center'\">\n            <amexio-header>\n               Date Picker with Year dropdown and disabled date\n            </amexio-header>\n            <amexio-body>\n              <amexio-row>\n                <amexio-column [size]=\"12\">\n              \n                <amexio-date-time-picker\n                [dropdown-datepicker]=\"true\"\n                  [field-label]=\"'Date Of Birth'\"\n                  [time-picker]=\"false\"\n                  [date-picker]=\"true\" \n                  [disabled-date]=\"disabledDate\"\n                  [(ngModel)]=\"currentDate2\">\n                </amexio-date-time-picker>\n                </amexio-column>\n              </amexio-row>\n              \n            </amexio-body>\n            <amexio-action>\n               {{currentDate2}} \n            </amexio-action>\n          </amexio-card>\n            </amexio-column>\n            </amexio-row>\n\n\n            </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Properties <amexio-date-time-picker>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/forms/datepicker.json'\"\n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br>\n            <amexio-datagrid title=\"Events\" [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/forms/datepicker.json'\" [data-reader]=\"'events'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"20\"[data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"80\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n\n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n            <amexio-vertical-tab-view>\n              <amexio-tab title=\"HTML\" [active]=\"true\">\n                <ng-container *ngIf=\"htmlCode\">\n                  <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                  <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Type Script\">\n                <ng-container *ngIf=\"typeScriptCode\">\n                  <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n            </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n                      <p align=\"center\">Amexio Sandbox</p>\n<iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-datepicker?ctl=1&embed=1&file=app/forms/datepicker/datepicker.demo.html&view=editor\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n    <!--<amexio-notification [data]=\"copyMsgArray\"></amexio-notification>-->\n\n  "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DateTimePickerDemo);
    return DateTimePickerDemo;
}());



/***/ })

}]);
//# sourceMappingURL=forms-datepicker-datepicker-demo-module.js.map