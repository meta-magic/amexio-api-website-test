(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["navigation-notification-notification-demo-module"],{

/***/ "./src/app/navigation/notification/notification.demo.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/navigation/notification/notification.demo.module.ts ***!
  \*********************************************************************/
/*! exports provided: NotificationDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDemoModule", function() { return NotificationDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _notification_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification.demo */ "./src/app/navigation/notification/notification.demo.ts");
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
var NotificationDemoModule = /** @class */ (function () {
    function NotificationDemoModule() {
    }
    NotificationDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_notification_demo__WEBPACK_IMPORTED_MODULE_6__["NotificationDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _notification_demo__WEBPACK_IMPORTED_MODULE_6__["NotificationDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], NotificationDemoModule);
    return NotificationDemoModule;
}());



/***/ }),

/***/ "./src/app/navigation/notification/notification.demo.ts":
/*!**************************************************************!*\
  !*** ./src/app/navigation/notification/notification.demo.ts ***!
  \**************************************************************/
/*! exports provided: NotificationDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDemo", function() { return NotificationDemo; });
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


var NotificationDemo = /** @class */ (function () {
    function NotificationDemo(http) {
        this.http = http;
        this.verticalLeftMessageArray = [];
        this.verticalCenterMessageArray = [];
        this.verticalRightMessageArray = [];
        this.horizontalLeftMessageArray = [];
        this.horizontalCenterMessageArray = [];
        this.horizontalRightMessageArray = [];
        this.getHtmlAndTypeScriptCode();
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
    //TO LOAD HTML AND TYPESCRIPT CODE
    NotificationDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/navigation/notification/navigation.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/navigation/notification/navigation.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    NotificationDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    NotificationDemo.prototype.closeCookie = function () {
        this.horizontalRightMessageArray = [];
    };
    NotificationDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'notification-demo', template: "\n    \n   \n    <amexio-card header=\"true\">\n      <amexio-header>\n         Notifications \n      </amexio-header>\n      <amexio-body>\n        <p>Notification provides a way to let user know through pop-up messages.</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n            <amexio-row>\n              <amexio-column size=\"4\">\n                <amexio-card [header]=\"true\">\n                  <amexio-header> Vertical Top Notification </amexio-header>\n                  <amexio-body>\n\n                    <amexio-notification\n                      [data]=\"verticalLeftMessageArray\"\n                      [vertical-position]=\"'top'\"\n                      [horizontal-position]=\"'left'\"\n                      [close-on-escape] =\"true\"\n                      [background-color]=\"'orange '\"\n                      [foreground-color]=\"'black'\"\n                      [auto-dismiss-msg]=\"true\"\n                      [auto-dismiss-msg-interval]=\"6000\">\n\n                      <ng-template #amexioNotificationTemp let-data=\"data\">\n                        <amexio-row>\n                          <amexio-column size=\"2\">\n                            <amexio-image [icon-class]=\"'\tfa fa-exclamation-triangle'\" style=\"font-size: 25px;\">\n                            </amexio-image> &nbsp;&nbsp;\n                          </amexio-column>\n                          <amexio-column size=\"8\">\n                            <amexio-label size=\"small-bold\" font-color=\"white\" > Warning Message </amexio-label><br/>\n                            <amexio-label size=\"small\" font-color=\"white\" >{{data}}</amexio-label><br/>\n                          </amexio-column>\n\n                        </amexio-row>\n                      </ng-template>\n\n\n                    </amexio-notification>\n                    <amexio-button\n                      (onClick)=\"verticalLeftNotification()\"\n                      [label]=\"'Info Top Left'\"\n                      [type]=\"'primary'\"\n                      [tooltip]=\"'Primary Button'\">\n                    </amexio-button>\n                  </amexio-body>\n                </amexio-card>\n              </amexio-column>\n              <amexio-column size=\"4\">\n                <amexio-card [header]=\"true\">\n                  <amexio-header> Vertical Center Notification </amexio-header>\n                  <amexio-body>\n                    <amexio-notification \n                      [data]=\"verticalCenterMessageArray\"\n                      [vertical-position]=\"'top'\"\n                      [horizontal-position]=\"'center'\"\n                      [close-on-escape] =\"true\"\n                      [background-color]=\"'yellow'\"\n                      [auto-dismiss-msg]=\"true\"\n                      [auto-dismiss-msg-interval]=\"6000\">\n                      <ng-template #amexioNotificationTemp let-data=\"data\">  \n                            <amexio-box [box-width]=\"'350px'\" >\n                              <amexio-image [icon-class]=\"'\tfa fa-info-circle fa-2x'\" >\n                              </amexio-image> &nbsp;&nbsp;\n                              <amexio-label size=\"small-bold\" [badge]=7 font-color=\"black\"> {{data}}</amexio-label>\n                            </amexio-box>\n                      </ng-template>\n                    </amexio-notification> \n                    <amexio-button\n                      (onClick)=\"verticalCenterNotification()\"\n                      [label]=\"'Info center Popup'\"\n                      [type]=\"'primary'\"\n                      [tooltip]=\"'Primary Button'\">\n                    </amexio-button>\n                  </amexio-body>\n                </amexio-card>\n              </amexio-column>\n              <amexio-column size=\"4\">\n                <amexio-card [header]=\"true\">\n                  <amexio-header> Vertical Right Notification </amexio-header>\n                  <amexio-body>\n                    <amexio-notification\n                      [data]=\"verticalRightMessageArray\"\n                      [vertical-position]=\"'top'\"\n                      [horizontal-position]=\"'right'\"\n                      [close-on-escape] =\"true\"\n                      [background-color]=\"'red'\"\n                      [auto-dismiss-msg]=\"true\"\n                      [auto-dismiss-msg-interval]=\"4000\">\n                      <ng-template #amexioNotificationTemp >\n                                 <amexio-row>\n                                   <amexio-column size=\"2\">\n                                     <amexio-image [icon-class]=\"'\tfa fa-times-circle-o'\" style=\"font-size: 25px;\">\n                                     </amexio-image> &nbsp;&nbsp;\n                                   </amexio-column>\n                                   <amexio-column size=\"10\">\n                                      <amexio-label size=\"small-bold\" font-color=\"white\" >Error Message</amexio-label><br/>\n                                      <amexio-label font-color=\"white\" >Please Enter Name</amexio-label><br/>\n                                      <amexio-label font-color=\"white\" >Please Enter Phone No.</amexio-label>\n                                   </amexio-column>\n                                 </amexio-row>\n                      </ng-template>\n                    </amexio-notification>\n                    <amexio-button\n                      (onClick)=\"verticalRightNotification()\"\n                      [label]=\"'Info Right Popup'\"\n                      [type]=\"'primary'\"\n                      [tooltip]=\"'Primary Button'\">\n                    </amexio-button>\n                  </amexio-body>\n                </amexio-card>\n              </amexio-column>\n            </amexio-row>\n            \n            \n            <amexio-row>\n\n              <amexio-column size=\"4\">\n                <amexio-card [header]=\"true\">\n                  <amexio-header> Horizontal Left Notification </amexio-header>\n                  <amexio-body>\n                    <amexio-notification\n                      [data]=\"horizontalLeftMessageArray\"\n                      [vertical-position]=\"'bottom'\"\n                      [horizontal-position]=\"'left'\"\n                      [close-on-escape] =\"true\"\n                      [background-color]=\"'green'\"\n                      [icon]=\"'\tfa fa-check-square-o fa-fw'\"\n                      [auto-dismiss-msg]=\"true\"\n                      [auto-dismiss-msg-interval]=\"4000\">\n                     \n                      \n                    </amexio-notification>\n                    <amexio-button\n                      (onClick)=\"horizontalLeftNotification()\"\n                      [label]=\"'Info Bottom Left '\"\n                      [type]=\"'primary'\"\n                      [tooltip]=\"'Primary Button'\">\n                    </amexio-button>\n\n                  </amexio-body>\n                </amexio-card>\n              </amexio-column>\n              <amexio-column size=\"4\">\n                <amexio-card [header]=\"true\">\n                  <amexio-header> Horizontal Center Notification </amexio-header>\n                  <amexio-body>\n\n                    <amexio-notification\n                      [data]=\"horizontalCenterMessageArray\"\n                      [vertical-position]=\"'bottom'\"\n                      [horizontal-position]=\"'center'\"\n                      [close-on-escape] =\"true\"\n                      [background-color]=\"'black'\"\n                      [foreground-color]=\"'white'\"\n                      [auto-dismiss-msg]=\"true \"\n                      [auto-dismiss-msg-interval]=\"4000\">\n                      <ng-template #amexioNotificationTemp let-data=\"data\">\n\n\n                        <amexio-box   >\n                          <amexio-image [icon-class]=\"'\tfa fa-check-square-o'\" style=\"font-size: 25px;\">\n                          </amexio-image> &nbsp;&nbsp;\n                          <amexio-label font-color=\"white\">{{data}}</amexio-label>\n                          \n                        </amexio-box>\n                        \n                      </ng-template>\n                      \n                    </amexio-notification>\n                    <amexio-button\n                      (onClick)=\"horizontalCenterNotification()\"\n                      [label]=\"'Info Bottom center'\"\n                      [type]=\"'primary'\"\n                      [tooltip]=\"'Primary Button'\">\n                    </amexio-button>\n\n                  </amexio-body>\n                </amexio-card>\n\n              </amexio-column>\n              <amexio-column size=\"4\">\n                <amexio-card [header]=\"true\">\n                  <amexio-header> Horizontal Right Notification </amexio-header>\n                  <amexio-body>\n\n                    <amexio-notification\n                      [background-color]=\"'orange'\"\n                      [foreground-color]=\"'black'\"\n                      [data]=\"horizontalRightMessageArray\"\n                      [vertical-position]=\"'bottom'\"\n                      [horizontal-position]=\"'right'\"\n                      [close-on-escape] =\"true\"\n                      [auto-dismiss-msg]=\"true\"\n                      [auto-dismiss-msg-interval]=\"6000\">\n\n                      <ng-template #amexioNotificationTemp let-data=\"data\">\n                        <amexio-box padding=\"true\" [box-width]=\"'225px'\">\n                          <amexio-label size=\"medium-bold\">Cookies Policy</amexio-label><br/>\n                          <amexio-label>{{data}}</amexio-label><br/>\n                          <br/>\n                          <amexio-button [label]=\"'Accept & Close'\"\n                                         [type]=\"'theme-color'\"\n                                         (onClick)=\"closeCookie()\"\n                                         [size]=\"'small'\"\n                                         [tooltip]=\"'cookies accepted button'\">\n                          </amexio-button>\n                        </amexio-box>\n                      </ng-template>\n\n\n                    </amexio-notification>\n                    <amexio-button\n                      (onClick)=\"horizontalRightNotification()\"\n                      [label]=\"'Info Bottom Right'\"\n                      [type]=\"'primary'\"\n                      [tooltip]=\"'Primary Button'\">\n                    </amexio-button>\n\n                  </amexio-body>\n                </amexio-card>\n\n              </amexio-column>\n\n            </amexio-row>\n           \n            \n          </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Properties<amexio-notification>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/navigation/notification.json'\"\n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"25\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"55\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n\n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n            <amexio-vertical-tab-view>\n              <amexio-tab title=\"HTML\" [active]=\"true\">\n                <ng-container *ngIf=\"htmlCode\">\n                  <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                  <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Type Script\">\n                <ng-container *ngIf=\"typeScriptCode\">\n                  <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n            </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n           <p align=\"center\">Amexio Sandbox</p>\n        <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-notification?embed=1&file=app/navigation/notification/notification.demo.html&view=editor\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n    <!--<amexio-notification [data]=\"copyMsgArray\"></amexio-notification>-->\n\n  "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NotificationDemo);
    return NotificationDemo;
}());



/***/ })

}]);
//# sourceMappingURL=navigation-notification-notification-demo-module.js.map