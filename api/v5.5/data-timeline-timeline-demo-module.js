(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-timeline-timeline-demo-module"],{

/***/ "./src/app/data/timeline/timeline.demo.html":
/*!**************************************************!*\
  !*** ./src/app/data/timeline/timeline.demo.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card header=\"true\">\n    <amexio-header>\n        Timeline\n    </amexio-header>\n    <amexio-body>\n        <p> A timeline is the presentation of a chronological sequence of events along a drawn line that enables a viewer to\n            understand temporal relationships quickly.</p>\n        <amexio-tab-view>\n            <amexio-tab title=\"Demo\" active=\"true\">\n                <amexio-card header=\"true\">\n                    <amexio-header> Timeline Component (Example-1)</amexio-header>\n                    <amexio-body>\n                        <amexio-row>\n                            <amexio-column [size]=\"12\">\n                                <amexio-timeline [content-alignment]=\"''\">\n                                    <amexio-timeline-event [label]=\"'08:30'\" [icon]=\"'fa fa-file'\" [content-border]=\"true\">\n                                        <amexio-label size=\"large-bold\">REGISTRATION</amexio-label>\n                                    </amexio-timeline-event>\n                                    <amexio-timeline-event [label]=\"'09:00'\" [icon]=\"'fa fa-microphone'\">\n                                        <amexio-label>Keynote Talk:Disrupting the Disruptors- Where does Blockchain go from here\n                                        </amexio-label>\n                                    </amexio-timeline-event>\n                                    <amexio-timeline-event [label]=\"'09:15'\" [icon]=\"'fa fa-microphone'\">\n                                        <amexio-label>Blockchain in Enterprise- How Companies are using Blockchain Today\n                                        </amexio-label>\n                                        <amexio-chips>\n                                            <amexio-chip [label]=\"'Araf Karsh Hamid'\" [color]=\"'grey'\">\n                                            </amexio-chip>\n                                        </amexio-chips>\n                                    </amexio-timeline-event>\n                                    <amexio-timeline-event [label]=\"'09:50'\" [icon]=\"'fa fa-coffee'\">\n                                        <amexio-label>Networking Break\n                                        </amexio-label>\n                                    </amexio-timeline-event>\n                                    <amexio-timeline-event [label]=\"'10:05'\" [icon]=\"'fa fa-microphone'\">\n                                        <amexio-label>Understand Blockchain HyperLedger Fabric For Enterprises\n                                        </amexio-label>\n                                        <amexio-chips>\n                                            <amexio-chip [label]=\"'Ketan Gote'\" [color]=\"'grey'\">\n                                            </amexio-chip>\n                                        </amexio-chips>\n                                    </amexio-timeline-event>\n                                </amexio-timeline>\n                            </amexio-column>\n                        </amexio-row>\n                    </amexio-body>\n                </amexio-card>\n                <amexio-card header=\"true\">\n                    <amexio-header> Timeline Component (Example-2)</amexio-header>\n                    <amexio-body>\n                        <amexio-row>\n                            <amexio-column [size]=\"12\">\n                                <amexio-timeline [content-alignment]=\"''\">\n                                    <amexio-timeline-event [label]=\"''\" [icon]=\"'fa fa-asterisk'\">\n                                        <amexio-image [path]=\"'assets/images/timeline/ataturk_1.jpg'\" [filter]=\"'sepia'\" [image-title]=\"'1981'\" [title-position]=\"'bottom-left'\">\n                                        </amexio-image>\n                                        <amexio-label>\n                                            He was born in 1881 (probably in the spring) in Salonica, then an Ottoman city, now inGreece. His father Ali Riza, a customs\n                                            official turned lumber merchant, died when Mustafawas still a boy. His mother\n                                            Zubeyde, adevout and strong-willed woman, raised him and his sister.\n                                        </amexio-label>\n                                    </amexio-timeline-event>\n                                    <amexio-timeline-event [label]=\"''\" [icon]=\"'fa fa-asterisk'\">\n                                        <amexio-image [path]=\"'assets/images/timeline/mustafa-kemal.jpg'\" [filter]=\"'sepia'\" [image-title]=\"'1983'\" [title-position]=\"'bottom-left'\">\n                                        </amexio-image>\n                                        <amexio-label>First enrolled in a traditionalreligious school, he soon switched to a modern school.\n                                            In 1893, he entered a military highschool where his mathematics teacher gave\n                                            him the second name Kemal (meaning perfection)in recognition of young Mustafa's\n                                            superior achievement.\n                                        </amexio-label>\n                                    </amexio-timeline-event>\n                                    <amexio-timeline-event [label]=\"''\" [icon]=\"'fa fa-asterisk'\">\n                                        <amexio-image [path]=\"'assets/images/timeline/mustafa-kemal1.jpg'\" [filter]=\"'sepia'\" [image-title]=\"'1905'\" [title-position]=\"'bottom-left'\">\n                                        </amexio-image>\n                                        <amexio-label>In 1905, Mustafa Kemal graduated from the War Academy in Istanbul with the rank of\n                                            Staff Captain. Posted in Damascus, he started with several colleagues, a clandestinesociety\n                                            called \"Homeland and Freedom\" to fight against the Sultan'sdespotism.\n                                        </amexio-label>\n                                    </amexio-timeline-event>\n                                    <amexio-timeline-event [label]=\"''\" [icon]=\"'fa fa-asterisk'\">\n                                        <amexio-image [path]=\"'assets/images/timeline/ataturk-10-kasim.jpg'\" [filter]=\"'sepia'\" [image-title]=\"'1908'\" [title-position]=\"'bottom-left'\">\n                                        </amexio-image>\n                                        <amexio-label>In 1908 he helped the group of officers who toppled the Sultan. Mustafa Kemal'scareer\n                                            flourished as he won his heroism in the far corners of the Ottoman Empire,including\n                                            Albania and Tripoli. He also briefly served as a staff officer in Salonica andIstanbul\n                                            and as a military attache in Sofia.\n                                        </amexio-label>\n                                    </amexio-timeline-event>\n                                    <amexio-timeline-event [label]=\"''\" [icon]=\"'fa fa-asterisk'\">\n                                        <amexio-image [path]=\"'assets/images/timeline/mustafa-kemal2.jpg'\" [filter]=\"'sepia'\" [image-title]=\"'1915'\" [title-position]=\"'bottom-left'\">\n                                        </amexio-image>\n                                        <amexio-label>In 1915, when Dardanelles campaign was launched, Colonel Mustafa Kemal became anational\n                                            hero by winning successive victories and finally repelling the invaders.\n                                        </amexio-label>\n                                    </amexio-timeline-event>\n                                    <amexio-timeline-event [label]=\"''\" [icon]=\"'fa fa-asterisk'\">\n                                        <amexio-image [path]=\"'assets/images/timeline/atatürk-ün-inanılmaz-karizmatik.jpg'\" [filter]=\"'sepia'\" [image-title]=\"'1916'\"\n                                            [title-position]=\"'bottom-left'\">\n                                        </amexio-image>\n                                        <amexio-label>\n                                            Promotedto general in 1916, at age 35, he liberated two major provinces in eastern Turkey thatyear. In the next two years,\n                                            he served as commander of several Ottoman armies inPalestine, Aleppo, and elsewhere,\n                                            achieving another major victory by stopping the enemyadvance at Aleppo.\n                                        </amexio-label>\n                                    </amexio-timeline-event>\n                                </amexio-timeline>\n                            </amexio-column>\n                        </amexio-row>\n                    </amexio-body>\n                </amexio-card>\n                <amexio-card header=\"true\">\n                    <amexio-header> Timeline Component(Right-Align)</amexio-header>\n                    <amexio-body>\n                        <amexio-row>\n                            <amexio-column [size]=\"12\">\n                                <amexio-timeline [content-alignment]=\"'right'\">\n                                    <amexio-timeline-event [label]=\"'Week One'\" [icon]=\"'fa fa-book'\" [content-border]=\"true\">\n                                        <amexio-label size=\"medium-bold\">UNDERSTAND</amexio-label>\n                                        <amexio-label size=\"small\">Gather existing knowledge,expose assumptions and unknowns</amexio-label>\n                                    </amexio-timeline-event>\n                                    <amexio-timeline-event [label]=\"'Week Two'\" [icon]=\"'fa fa-certificate'\" [content-border]=\"true\">\n\n                                        <amexio-label size=\"medium-bold\"> DIVERGE</amexio-label>\n                                        <amexio-label size=\"small\">Elluminate all paths.Our goal is to explore as many possibilities as possible,regardless\n                                            of how realistic,feasible or viable they may or may not be. </amexio-label>\n                                    </amexio-timeline-event>\n                                    <amexio-timeline-event [label]=\"'Week Three'\" [icon]=\"'fa fa-asterisk'\" [content-border]=\"true\">\n                                        <amexio-label size=\"medium-bold\">CONVERGE</amexio-label>\n                                        <amexio-label size=\"small\">Our Goal is to take all of the possibilities that we have exposed over the past two\n                                            weeks and hone in on a single version of the prototype that we will build tomorrow\n                                        </amexio-label>\n                                    </amexio-timeline-event>\n                                    <amexio-timeline-event [label]=\"'Week Four'\" [icon]=\"'fa fa-cogs'\" [content-border]=\"true\">\n                                        <amexio-label size=\"medium-bold\">PROTOTYPING</amexio-label>\n                                        <amexio-label size=\"small\">During this phase you will build a quick and dirty prototype.Since you only have\n                                            at most a week to build the prototype it should be low-fi as you can get away\n                                            with during Testing.</amexio-label>\n                                    </amexio-timeline-event>\n                                    <amexio-timeline-event [label]=\"'Week Five'\" [icon]=\"'fa fa-edit'\" [content-border]=\"true\">\n                                        <amexio-label size=\"medium-bold\">TESTING</amexio-label>\n                                        <amexio-label size=\"small\">Going into each test you should have a plan of what you area testing and how you\n                                            know if that is successful or not.</amexio-label>\n                                    </amexio-timeline-event>\n                                    <amexio-timeline-event [label]=\"'Week Six'\" [icon]=\"'fa fa-spinner'\" [content-border]=\"true\">\n                                        <amexio-label size=\"medium-bold\">REITERATION</amexio-label>\n                                        <amexio-label size=\"small\">To reiterate something is to say or do something again, or many times.Let me reiterate:if\n                                            you reapeat yourself,you're reiterating the thing you originally said.</amexio-label>\n                                    </amexio-timeline-event>\n                                    <amexio-timeline-event [label]=\"'Week Seven'\" [icon]=\"'fa fa-calendar'\" [content-border]=\"true\">\n                                        <amexio-label size=\"medium-bold\">REVIEW</amexio-label>\n                                        <amexio-label size=\"small\">To look back over something for evaluation or memory.*The year in review* is a popular\n                                            form of news feature near the end of December.</amexio-label>\n                                    </amexio-timeline-event>\n                                    <amexio-timeline-event [label]=\"'Week Eight'\" [icon]=\"'fa fa-thumbs-up'\" [content-border]=\"true\">\n                                        <amexio-label size=\"medium-bold\">FINALIZE </amexio-label>\n                                        <amexio-label size=\"small\">When you put the finishing touches on something,such as agreeeing on a specific time\n                                            and place to meet your friend on Saturday,you finalie your plans.</amexio-label>\n                                    </amexio-timeline-event>\n                                </amexio-timeline>\n                            </amexio-column>\n                        </amexio-row>\n                    </amexio-body>\n                </amexio-card>\n            </amexio-tab>\n            <amexio-tab title=\"API Reference\">\n                <amexio-datagrid title=\"Properties <amexio-timeline>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/panes/timeline/timeline.json'\"\n                    [data-reader]=\"'properties'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <amexio-datagrid title=\"Properties <amexio-timeline-event>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/panes/timeline/timeline.json'\"\n                    [data-reader]=\"'childproperties'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n            </amexio-tab>\n            <amexio-tab title=\"Source\">\n                <div style=\"overflow-y: scroll\">\n                    <amexio-vertical-tab-view>\n                        <amexio-tab title=\"HTML\" [active]=\"true\">\n                            <ng-container *ngIf=\"htmlCode\">\n                                <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                                <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"Type Script\">\n                            <ng-container *ngIf=\"typeScriptCode\">\n                                <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                    </amexio-vertical-tab-view>\n                </div>\n            </amexio-tab>\n            <amexio-tab title=\"Live\">\n                <p align=\"center\">Amexio Sandbox</p>\n                <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-timeline?embed=1&file=app/timeline-demo/timeline/timeline.demo.component.ts\"\n                    frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n                <!-- Work In Progress -->\n            </amexio-tab>\n        </amexio-tab-view>\n    </amexio-body>\n</amexio-card>"

/***/ }),

/***/ "./src/app/data/timeline/timeline.demo.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/data/timeline/timeline.demo.module.ts ***!
  \*******************************************************/
/*! exports provided: TimelineDemoModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineDemoModule", function() { return TimelineDemoModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _timeline_timeline_demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../timeline/timeline.demo */ "./src/app/data/timeline/timeline.demo.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by pratik on 16/1/18.
 */








var routes = [
    { path: '', component: _timeline_timeline_demo__WEBPACK_IMPORTED_MODULE_2__["TimelineDemoComponent"] },
];
var TimelineDemoModule = /** @class */ (function () {
    function TimelineDemoModule() {
    }
    TimelineDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"], _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [_timeline_timeline_demo__WEBPACK_IMPORTED_MODULE_2__["TimelineDemoComponent"]]
        })
    ], TimelineDemoModule);
    return TimelineDemoModule;
}());

var routedComponents = [_timeline_timeline_demo__WEBPACK_IMPORTED_MODULE_2__["TimelineDemoComponent"]];


/***/ }),

/***/ "./src/app/data/timeline/timeline.demo.ts":
/*!************************************************!*\
  !*** ./src/app/data/timeline/timeline.demo.ts ***!
  \************************************************/
/*! exports provided: TimelineDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineDemoComponent", function() { return TimelineDemoComponent; });
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
 * Created by pratik on 16/1/18.
 */


var TimelineDemoComponent = /** @class */ (function () {
    function TimelineDemoComponent(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
    }
    TimelineDemoComponent.prototype.getDta = function () {
        var _this = this;
        this.asyncFlag = true;
        setTimeout(function () {
            _this.asyncFlag = false;
        }, 3000);
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    TimelineDemoComponent.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/layout/timeline/timeline.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/layout/timeline/timeline.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    TimelineDemoComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    TimelineDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'timeline-demo',
            template: __webpack_require__(/*! ./timeline.demo.html */ "./src/app/data/timeline/timeline.demo.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TimelineDemoComponent);
    return TimelineDemoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=data-timeline-timeline-demo-module.js.map