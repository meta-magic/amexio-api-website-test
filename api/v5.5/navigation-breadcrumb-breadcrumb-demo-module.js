(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["navigation-breadcrumb-breadcrumb-demo-module"],{

/***/ "./src/app/navigation/breadcrumb/breadcrumb.demo.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/navigation/breadcrumb/breadcrumb.demo.module.ts ***!
  \*****************************************************************/
/*! exports provided: BreadcrumbDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbDemoModule", function() { return BreadcrumbDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _breadcrumb_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./breadcrumb.demo */ "./src/app/navigation/breadcrumb/breadcrumb.demo.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Created by kedarkokil on 26/09/18.
 */
var BreadcrumbDemoModule = /** @class */ (function () {
    function BreadcrumbDemoModule() {
    }
    BreadcrumbDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_breadcrumb_demo__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _breadcrumb_demo__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], BreadcrumbDemoModule);
    return BreadcrumbDemoModule;
}());



/***/ }),

/***/ "./src/app/navigation/breadcrumb/breadcrumb.demo.ts":
/*!**********************************************************!*\
  !*** ./src/app/navigation/breadcrumb/breadcrumb.demo.ts ***!
  \**********************************************************/
/*! exports provided: BreadcrumbDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbDemo", function() { return BreadcrumbDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/**
 * Created by kedar on 26/09/18.
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


var BreadcrumbDemo = /** @class */ (function () {
    function BreadcrumbDemo(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
        this.JsonData =
            {
                "data": [
                    {
                        "text": "Amexio Modules",
                        "icon": "fa fa-snowflake-o",
                        "expand": false,
                        "show": false,
                        "children": [
                            {
                                "text": "App Navigation",
                                "badge": "3",
                                "children": [
                                    {
                                        "text": "Dockbar",
                                        "link": "dockbar-demo"
                                    },
                                    {
                                        "text": "Dropdown Menu",
                                        "link": "dropdownmenu",
                                        "badge": "N"
                                    },
                                    {
                                        "text": "Nav Bar",
                                        "icon": "fa fa-bars fa-fw",
                                        "link": "navbar-demo"
                                    },
                                    {
                                        "text": "Side Nav Bar",
                                        "icon": "fa fa-bars fa-fw",
                                        "link": "sidenav-demo",
                                        "badge": "U"
                                    },
                                    {
                                        "text": "Menu Bar",
                                        "icon": "fa fa-bars fa-fw",
                                        "link": "menubar-demo"
                                    },
                                    {
                                        "text": "Tool Bar",
                                        "icon": "fa fa-bars fa-fw",
                                        "link": "toolbar-demo",
                                        "badge": "N"
                                    },
                                    {
                                        "text": "Breadcrumb",
                                        "icon": "fa fa-arrow-right fa-fw",
                                        "link": "breadcrumb-demo",
                                        "badge": "N"
                                    }
                                ]
                            },
                            {
                                "text": "Charts",
                                "icon": "fa fa-keyboard-o fa-fw",
                                "badge": "7",
                                "children": [
                                    {
                                        "text": "D3 Charts",
                                        "icon": "fa fa-openid fa-fw",
                                        "badge": "New",
                                        "children": [
                                            {
                                                "text": "Bar Chart",
                                                "icon": "fa fa-bar-chart fa-fw",
                                                "badge": "New",
                                                "link": "amexio-d3-chart-bar"
                                            },
                                            {
                                                "text": "Stack Chart",
                                                "icon": "fa fa-bar-chart fa-fw",
                                                "badge": "New",
                                                "link": "amexio-d3-chart-bar-stack"
                                            },
                                            {
                                                "text": "Donut Chart",
                                                "icon": "fa fa-pie-chart fa-fw",
                                                "badge": "New",
                                                "link": "amexio-d3-chart-donut"
                                            },
                                            {
                                                "text": "Line Chart",
                                                "icon": "fa fa-line-chart fa-fw",
                                                "badge": "New",
                                                "link": "amexio-d3-chart-line"
                                            },
                                            {
                                                "text": "Pie Chart",
                                                "icon": "fa fa-pie-chart fa-fw",
                                                "badge": "New",
                                                "link": "amexio-d3-chart-pie"
                                            },
                                            {
                                                "text": "MultiSeriesBar Chart",
                                                "icon": "fa fa-bar-chart fa-fw",
                                                "badge": "New",
                                                "link": "amexio-d3-chart-multiseries"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "Google Charts",
                                        "icon": "fa fa-google fa-fw",
                                        "badge": "U",
                                        "children": [
                                            {
                                                "text": "Area Chart",
                                                "icon": "fa fa-area-chart fa-fw",
                                                "link": "area-chart-demo"
                                            },
                                            {
                                                "text": "Bar Chart",
                                                "icon": "fa fa-bar-chart fa-fw",
                                                "link": "bar-chart-demo"
                                            },
                                            {
                                                "text": "Bubble Chart",
                                                "icon": "fa fa-circle fa-fw",
                                                "link": "bubble-chart-demo"
                                            },
                                            {
                                                "text": "Candlestick Chart",
                                                "icon": "fa fa-stack-exchange fa-fw",
                                                "link": "candlestick-chart-demo"
                                            },
                                            {
                                                "text": "Candlestick Waterfall",
                                                "icon": "fa fa-tint fa-fw",
                                                "link": "candlestickwaterfall-chart-demo"
                                            },
                                            {
                                                "text": "Column Chart",
                                                "icon": "fa fa-columns fa-fw",
                                                "link": "column-chart-demo"
                                            },
                                            {
                                                "text": "Combo Chart",
                                                "icon": "fa fa-area-chart fa-fw",
                                                "link": "combo-chart-demo"
                                            },
                                            {
                                                "text": "Donut Chart",
                                                "icon": "fa fa-pie-chart fa-fw",
                                                "link": "donut-chart-demo"
                                            },
                                            {
                                                "text": "Gantt Chart",
                                                "icon": "fa fa-calendar fa-fw",
                                                "link": "gantt-chart-demo",
                                                "badge": "New"
                                            },
                                            {
                                                "text": "Histogram Chart",
                                                "icon": "fa fa-bars fa-fw",
                                                "link": "histogram-chart-demo"
                                            },
                                            {
                                                "text": "Line Chart",
                                                "icon": "fa fa-line-chart fa-fw",
                                                "link": "line-chart-demo"
                                            },
                                            {
                                                "text": "Pie Chart",
                                                "icon": "fa fa-pie-chart fa-fw",
                                                "link": "pie-chart-demo"
                                            },
                                            {
                                                "text": "Scatter Chart",
                                                "icon": "fa fa-dot-circle-o fa-fw",
                                                "link": "scatter-chart-demo"
                                            },
                                            {
                                                "text": "Timeline Chart",
                                                "icon": "fa fa-calendar fa-fw",
                                                "link": "timeline-chart-demo"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "Contextual Menus",
                                "icon": "fa fa-bars",
                                "badge": "New",
                                "children": [
                                    {
                                        "text": "Card",
                                        "icon": "fa fa-id-card-o fa-fw",
                                        "badge": "N",
                                        "link": "contextmenu-card-form"
                                    },
                                    {
                                        "text": "Grid",
                                        "icon": "fa fa-database fa-fw",
                                        "link": "contextual-menu-grid"
                                    },
                                    {
                                        "text": "List Box",
                                        "icon": "fa fa-list fa-fw",
                                        "link": "contextual-menu-listbox"
                                    },
                                    {
                                        "text": "Panel",
                                        "icon": "fa fa-bars fa-fw",
                                        "badge": "N",
                                        "link": "contextmenu-panel"
                                    },
                                    {
                                        "text": "Tab",
                                        "icon": "fa fa-folder fa-fw",
                                        "link": "contextual-menu-tab"
                                    },
                                    {
                                        "text": "Tree",
                                        "icon": "fa fa-tree fa-fw",
                                        "link": "contextual-menu-tree"
                                    },
                                    {
                                        "text": "Window",
                                        "icon": "fa fa-window-maximize fa-fw",
                                        "badge": "N",
                                        "link": "contextmenu-window"
                                    }
                                ]
                            },
                            {
                                "text": "Dashboard",
                                "icon": "fa fa-dashcube fa-fw",
                                "children": [
                                    {
                                        "text": "Gauge Chart",
                                        "icon": "fa fa-tachometer fa-fw",
                                        "link": "gauge-dashboard-demo"
                                    },
                                    {
                                        "text": "Data Points",
                                        "icon": "fa fa-address-card-o fa-fw",
                                        "link": "datapoint"
                                    }
                                ]
                            },
                            {
                                "text": "Enterprise",
                                "icon": "fa fa-medium",
                                "children": [
                                    {
                                        "text": "Media Content",
                                        "icon": "fa fa-id-card-o fa-fw",
                                        "link": "ee-content"
                                    },
                                    {
                                        "text": "YouTube Video Player",
                                        "icon": "fa fa-video-camera fa-fw",
                                        "link": "ee-video"
                                    },
                                    {
                                        "text": "Multi-item Carousel",
                                        "icon": "fa fa-television fa-fw",
                                        "link": "multi-item-carousel"
                                    }
                                ]
                            },
                            {
                                "text": "Maps",
                                "icon": "fa fa-globe fa-fw",
                                "children": [
                                    {
                                        "text": "Geo Chart",
                                        "icon": "fa fa-globe fa-fw",
                                        "link": "geo-chart-demo"
                                    },
                                    {
                                        "text": "Tree Map",
                                        "icon": "fa fa-trello fa-fw",
                                        "link": "tree-map-demo"
                                    }
                                ]
                            },
                            {
                                "text": "Media",
                                "icon": "fa fa-keyboard-o fa-fw",
                                "children": [
                                    {
                                        "text": "Image",
                                        "icon": "fa fa-picture-o fa-fw",
                                        "link": "image-demo"
                                    },
                                    {
                                        "text": "Video Player",
                                        "icon": "fa fa-video-camera fa-fw",
                                        "link": "video-demo"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            };
    }
    //TO LOAD HTML AND TYPESCRIPT CODE
    BreadcrumbDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/navigation/breadcrumb/breadcrumb.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/navigation/breadcrumb/breadcrumb.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    BreadcrumbDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    BreadcrumbDemo.prototype.getSelectedData = function (data) {
        this.selectedData = data;
    };
    BreadcrumbDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'breadcrumb-demo', template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n      Amexio Breadcrumb navigation\n      </amexio-header>\n      <amexio-body>\n      <p>Amexio Breadcrumb navigation is displayed to the user, so they can easily see exactly where that Web page is located within the Web site.\n      A type of text-based Web site navigation that breaks the site into links of categories and sub-categories allowing major categories of information to be linked in a range of sequential order.</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n            <amexio-row>\n              <amexio-column size=\"12\">\n                <amexio-card [header]=\"true\">\n                  <amexio-header>\n                    breadcrumb\n                  </amexio-header>\n                  <amexio-body> \n                   <amexio-breadcrumb  [data-reader]=\"'data'\"\n                   [data]=\"JsonData\"\n                   \n                   (onListItemClick)=\"getSelectedData($event)\" \n                   (onClick)=\"getSelectedData($event)\"\n                   >\n                   </amexio-breadcrumb>\n                  </amexio-body>\n                </amexio-card>\n              </amexio-column>\n            </amexio-row>\n\n            <amexio-row>\n            <amexio-column size=\"12\">\n            <amexio-card [header]=\"true\">\n            <amexio-header>\n            selected data\n          </amexio-header>\n                  <amexio-body>\n                  <pre><code> {{selectedData | json}} </code></pre>\n                  </amexio-body>\n                  </amexio-card>\n            </amexio-column>\n            </amexio-row>\n\n\n               </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Properties<amexio-breadcrumb>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/navigation/breadcrumb.json'\"\n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"20\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Version'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"45\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br>\n            <amexio-datagrid title=\"Events\" [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/navigation/breadcrumb.json'\" [data-reader]=\"'events'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"20\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Version'\"></amexio-data-table-column>\n             \n              <amexio-data-table-column [width]=\"70\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n\n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n            <amexio-vertical-tab-view>\n              <amexio-tab title=\"HTML\" [active]=\"true\">\n                <ng-container *ngIf=\"htmlCode\">\n                  <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                  <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Type Script\">\n                <ng-container *ngIf=\"typeScriptCode\">\n                  <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n            </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n          <p align=\"center\">Amexio Sandbox</p>\n          <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-breadcrumb-demo?embed=1&file=src/app/breadcrumb/breadcrumb.demo.component.html&view=editor\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n  ",
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BreadcrumbDemo);
    return BreadcrumbDemo;
}());



/***/ })

}]);
//# sourceMappingURL=navigation-breadcrumb-breadcrumb-demo-module.js.map