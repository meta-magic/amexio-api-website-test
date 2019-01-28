(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["navigation-sidenavpage-sidenavpage-demo-module"],{

/***/ "./src/app/navigation/sidenavpage/sidenavpage.demo.html":
/*!**************************************************************!*\
  !*** ./src/app/navigation/sidenavpage/sidenavpage.demo.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card header=\"true\">\n    <amexio-header>\n        Advanced Side Nav Bar\n    </amexio-header>\n    <amexio-body>\n        <p>The Advanced Side Nav Bar Component is a familiar side navigation pattern for users.\n            Advanced Side nav bar can be placed on left or right side. It can fit as many navigation links as needed,\n            scrolling\n            when the content exceeds the viewport.\n            Take a look at Datastructure format which this component can consume in datasource tab.</p>\n        <amexio-tab-view>\n            <amexio-tab title=\"Demo\" active=\"true\">\n\n\n                <amexio-row>\n\n                    <amexio-column [size]=\"12\" [fit]=\"true\">\n                        <amexio-card [header]=\"true\">\n                            <amexio-header> Advanced Side Nav </amexio-header>\n                            <amexio-body>\n                                <amexio-side-nav [width]=\"'320px'\" [position]=\"'relative'\">\n\n                                    <amexio-sidenav-node>\n\n\n                                        <amexio-row>\n                                            <amexio-column size=\"5\">\n                                                <amexio-image [height]=\"'89.75px'\" [width]=\"'89.75px'\" [c-class]=\"'image-round'\"\n                                                    path=\"assets/images/profile/ketan.jpg\">\n                                                </amexio-image>\n                                            </amexio-column>\n                                            <amexio-column size=\"7\">\n\n                                                <amexio-label> Ketan Gote</amexio-label>\n                                                <amexio-label> xyz@metamagic.in</amexio-label><br />\n\n                                            </amexio-column>\n\n                                        </amexio-row>\n\n                                    </amexio-sidenav-node>\n                                    <amexio-sidenav-node [collapsable]=\"true\" [enable-border]=\"true\" [icon]=\"'fa fa-cog'\"\n                                        [label]=\"'Settings'\">\n                                        <amexio-row>\n                                            <amexio-column [size]=6>\n                                                <amexio-button [block]=\"true\" [size]=\"'small'\" [label]=\"'Notification'\"\n                                                    [type]=\"'theme-color'\" [icon]=\"'fa fa-envelope'\">\n                                                </amexio-button>\n                                            </amexio-column>\n                                            <amexio-column [size]=6>\n                                                <amexio-button [block]=\"true\" [size]=\"'small'\" [label]=\"'Profile'\"\n                                                    [type]=\"'theme-backgroundcolor'\" [icon]=\"'fa fa-user'\">\n                                                </amexio-button>\n                                            </amexio-column>\n                                        </amexio-row>\n                                        <amexio-row>\n                                            <amexio-column [size]=6>\n                                                <amexio-button [block]=\"true\" [size]=\"'small'\" [label]=\"'Revenue'\"\n                                                    [type]=\"'green'\" [icon]=\"'fa fa-money'\">\n                                                </amexio-button>\n                                            </amexio-column>\n                                            <amexio-column [size]=6>\n                                                <amexio-button [block]=\"true\" [size]=\"'small'\" [label]=\"'My Feeds'\"\n                                                    [type]=\"'yellow'\" [icon]=\"'fa fa-rss'\">\n                                                </amexio-button>\n                                            </amexio-column>\n                                        </amexio-row>\n                                    </amexio-sidenav-node>\n                                    <amexio-sidenav-node [collapsable]=\"true\" [enable-border]=\"true\" [icon]=\"'fa fa-calendar'\"\n                                        [badge]=\"'4'\" [label]=\"'Upcoming Event'\">\n                                        <amexio-timeline [content-alignment]=\"'left'\">\n                                            <amexio-timeline-event [label]=\"'Dec 4'\" [icon]=\"'fa fa-calendar'\">\n                                                <amexio-label> Amexio Meetup</amexio-label>\n                                            </amexio-timeline-event>\n                                            <amexio-timeline-event [label]=\"'Jan 4'\" [icon]=\"'fa fa-calendar'\">\n                                                <amexio-label> Microservice Meetup</amexio-label>\n                                            </amexio-timeline-event>\n                                            <amexio-timeline-event [label]=\"'Feb 4'\" [icon]=\"'fa fa-calendar'\">\n                                                <amexio-label> kubernetes Meetup</amexio-label>\n                                            </amexio-timeline-event>\n                                            <amexio-timeline-event [label]=\"'Feb 4'\" [icon]=\"'fa fa-calendar'\">\n                                                <amexio-label> Blockchain Meetup</amexio-label>\n                                            </amexio-timeline-event>\n                                        </amexio-timeline>\n                                    </amexio-sidenav-node>\n\n                                    <amexio-sidenav-node [enable-border]=\"true\" [collapsable]=\"true\" [label]=\"'Contacts'\"\n                                        [icon]=\"'fa fa-address-book-o'\">\n\n                                        <amexio-tab-view [closable]=\"false\">\n                                            <amexio-tab [active]=\"true\" [icon]=\"'fa fa-users'\">\n\n\n                                                <amexio-listbox [enable-header]=\"false\" [header]=\"'Projects'\"\n                                                    [search-placeholder]=\"'Search'\" [data]=\"contactList\" [filter]=\"true\"\n                                                    [data-reader]=\"'response.data'\" [display-field]=\"'name'\" [border]=\"'none'\"\n                                                    >\n                                                    <ng-template #amexioBodyTmpl let-row=\"row\">\n                                                        <amexio-row>\n                                                            <amexio-column [size]=\"3\">\n                                                                <amexio-image [c-class]=\"'around-image'\" height=\"50px\"\n                                                                    width=\"50px\" path=\"assets/images/profile/{{row.profile}}\"></amexio-image>\n                                                            </amexio-column>\n                                                            <amexio-column [size]=\"9\">\n                                                                {{row.name}}\n                                                            </amexio-column>\n                                                        </amexio-row>\n                                                    </ng-template>\n                                                </amexio-listbox>\n\n                                            </amexio-tab>\n\n                                            <amexio-tab [icon]=\"'fa fa-star-o'\">\n                                                <amexio-listbox [enable-header]=\"false\" [header]=\"'Projects'\"\n                                                    [search-placeholder]=\"'Search'\" [data]=\"contactList\" [filter]=\"true\"\n                                                    [data-reader]=\"'response.data'\" [display-field]=\"'name'\" [border]=\"'none'\"\n                                                   >\n                                                </amexio-listbox>\n                                            </amexio-tab>\n                                        </amexio-tab-view>\n                                    </amexio-sidenav-node>\n\n                                    <amexio-sidenav-node [enable-border]=\"true\" [label]=\"'Reports'\" [icon]=\"'fa fa-picture-o fa-fw'\"\n                                        [collapsable]=\"true\" [data]='reportsMenu'>\n\n                                    </amexio-sidenav-node>\n\n                                    <amexio-sidenav-node [enable-border]=\"true\" [label]=\"'Dashboard'\" [icon]=\"'fa fa-television fa-fw'\"\n                                        [collapsable]=\"true\" [data]='dashboardMenu'>\n\n                                    </amexio-sidenav-node>\n\n\n                                </amexio-side-nav>\n                            </amexio-body>\n                        </amexio-card>\n                    </amexio-column>\n\n                </amexio-row>\n\n\n\n\n\n            </amexio-tab>\n            <amexio-tab title=\"API Reference\">\n                <amexio-datagrid title=\"Properties<amexio-side-nav>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\"\n                    [http-url]=\"'assets/apireference/navigation/sidenav.json'\" [data-reader]=\"'properties'\"\n                    [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n\n                <br>\n\n                <amexio-datagrid title=\"Properties : <Amexio-sidenav-node>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\"\n                    [http-url]=\"'assets/apireference/navigation/sidenav.json'\" [data-reader]=\"'propertiesitem'\"\n                    [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Version'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"35\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <amexio-datagrid title=\"Events\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/navigation/sidenav.json'\"\n                    [data-reader]=\"'events'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"20\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"80\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                        [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n\n            </amexio-tab>\n            <amexio-tab title=\"Source\">\n                <amexio-vertical-tab-view>\n                    <amexio-tab title=\"HTML\" [active]=\"true\">\n                        <ng-container *ngIf=\"htmlCode\">\n                            <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                            <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                        </ng-container>\n                    </amexio-tab>\n                    <amexio-tab title=\"Type Script\">\n                        <ng-container *ngIf=\"typeScriptCode\">\n                            <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                        </ng-container>\n                    </amexio-tab>\n                </amexio-vertical-tab-view>\n            </amexio-tab>\n            <amexio-tab title=\"Live\">\n                <p align=\"center\">Amexio Sandbox</p>\n                <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-side-navpage?embed=1&file=app/navigation/sidenavpage/sidenavpage.demo.html\"\n                    frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n            </amexio-tab>\n        </amexio-tab-view>\n    </amexio-body>\n</amexio-card>"

/***/ }),

/***/ "./src/app/navigation/sidenavpage/sidenavpage.demo.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/navigation/sidenavpage/sidenavpage.demo.module.ts ***!
  \*******************************************************************/
/*! exports provided: sideNavDemoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sideNavDemoPageModule", function() { return sideNavDemoPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _sidenavpage_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidenavpage.demo */ "./src/app/navigation/sidenavpage/sidenavpage.demo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







/**
 * Created by kedar on 13/11/18.
 */
var sideNavDemoPageModule = /** @class */ (function () {
    function sideNavDemoPageModule() {
    }
    sideNavDemoPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_sidenavpage_demo__WEBPACK_IMPORTED_MODULE_6__["sideNavDemoPage"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _sidenavpage_demo__WEBPACK_IMPORTED_MODULE_6__["sideNavDemoPage"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], sideNavDemoPageModule);
    return sideNavDemoPageModule;
}());



/***/ }),

/***/ "./src/app/navigation/sidenavpage/sidenavpage.demo.ts":
/*!************************************************************!*\
  !*** ./src/app/navigation/sidenavpage/sidenavpage.demo.ts ***!
  \************************************************************/
/*! exports provided: sideNavDemoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sideNavDemoPage", function() { return sideNavDemoPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/**
 * Created by kedar on 13/11/18.
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


var sideNavDemoPage = /** @class */ (function () {
    function sideNavDemoPage(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
        this.contactList = {
            "response": {
                "success": true,
                "message": "Fetching  Data  Request Succeeded: Profile",
                "data": [
                    {
                        "name": "Buck Kulkarni",
                        "name_official": "Buck Kulkarni",
                        "profile": "buck.jpg",
                        "email": "XYZ@metamagic.in"
                    },
                    {
                        "name": "Araf Karsh Hamid",
                        "name_official": "Araf Karsh Hamid",
                        "profile": "karsh.jpg",
                        "email": "XYZ@metamagic.in"
                    },
                    {
                        "name": "Ketan Gote",
                        "name_official": "Ketan Gote",
                        "profile": "ketan.jpg",
                        "email": "XYZ@metamagic.in"
                    },
                    {
                        "name": "Dattaram Gawas",
                        "name_official": "Dattaram Gawas",
                        "profile": "dats.jpg",
                        "email": "XYZ@metamagic.in"
                    },
                    {
                        "name": "Sagar Jadhav",
                        "name_official": "Sagar Jadhav",
                        "profile": "sagar.jpg",
                        "email": "XYZ@metamagic.in"
                    },
                    {
                        "name": "Rashmi Thakkar",
                        "name_official": "Rashmi Thakkar",
                        "profile": "rashmi.jpg",
                        "email": "XYZ@metamagic.in"
                    },
                    {
                        "name": "Deepali Arvind",
                        "name_official": "Deepali Arvind",
                        "profile": "dipali.jpg",
                        "email": "XYZ@metamagic.in"
                    },
                    {
                        "name": "Ashwini Agre",
                        "name_official": "Ashwini Agre",
                        "profile": "ashwini.jpg",
                        "email": "XYZ@metamagic.in"
                    }
                ]
            }
        };
        this.reportsMenu = [
            {
                "text": "Issue",
                "icon": "fa fa-ticket fa-fw",
                "mdaIcon": "bug_report",
                "link": "/home/issue"
            },
            {
                "text": "Group By Issue",
                "icon": "fa fa-ticket fa-fw",
                "mdaIcon": "link",
                "link": "/home/group-by-issue"
            }
        ];
        this.dashboardMenu =
            [
                {
                    "text": "Charts",
                    "icon": "fa fa-bar-chart fa-fw",
                    "mdaIcon": "insert_chart",
                    "link": "/home/charts"
                },
                {
                    "text": "Maps",
                    "icon": "fa fa-map-marker fa-fw",
                    "mdaIcon": "location_on",
                    "link": "/home/maps"
                }
            ];
    }
    sideNavDemoPage.prototype.ngOnInit = function () { };
    //TO LOAD HTML AND TYPESCRIPT CODE
    sideNavDemoPage.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        var datasourceData;
        //HTML FILE
        this.http.get('assets/data/code/navigation/sidenav/advancedsidenav/navigation.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/navigation/sidenav/advancedsidenav/navigation.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    sideNavDemoPage.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    sideNavDemoPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidenav-page',
            template: __webpack_require__(/*! ./sidenavpage.demo.html */ "./src/app/navigation/sidenavpage/sidenavpage.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], sideNavDemoPage);
    return sideNavDemoPage;
}());



/***/ })

}]);
//# sourceMappingURL=navigation-sidenavpage-sidenavpage-demo-module.js.map