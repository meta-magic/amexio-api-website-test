(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-chips-chips-demo-module"],{

/***/ "./src/app/forms/chips/chips.demo.html":
/*!*********************************************!*\
  !*** ./src/app/forms/chips/chips.demo.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card header=\"true\">\n    <amexio-header>\n        Chips\n    </amexio-header>\n    <amexio-body>\n        <p>Chips allow users to enter information, make selections, filter content, or trigger actions. Chips appear dynamically\n            as a group of multiple interactive elements.</p>\n        <amexio-tab-view>\n            <amexio-tab title=\"Demo\" active=\"true\">\n                <amexio-row>\n\n                    <amexio-column size=\"12\">\n                        <amexio-card header=\"true\">\n                            <amexio-header>\n                                Chips with Data Input\n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-chips [data]=\"sampledatachips\" (selectedchipsData)=\"onChipsLabelClick($event)\" (onCloseClick)=\"onCloseClick($event)\"></amexio-chips>\n                                <pre><code>{{emitdatachips | json}}</code></pre>\n                            </amexio-body>\n                        </amexio-card>\n                        <amexio-card header=\"true\">\n                            <amexio-header>\n                                Chip with multiple Inputs\n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-chips *ngFor=\"let item of sampledatachip\">\n                                    <amexio-chip [icon]=\"item.icon\" [label]=\"item.label\" [color]=\"item.color\" [badge]=\"item.badge\" [closable]=\"item.closable\"\n                                        (labelClick)=\"onChipLabelClick($event)\" (closeClick)=\"onCloseClick($event)\">\n                                    </amexio-chip>\n                                </amexio-chips>\n                                <pre><code>{{emitdatachip | json}}</code></pre>\n                            </amexio-body>\n                        </amexio-card>\n                    </amexio-column>\n                </amexio-row>\n            </amexio-tab>\n            <amexio-tab title=\"API Reference\">\n                <amexio-datagrid title=\"Properties<amexio-chips>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/forms/chips.json'\"\n                    [data-reader]=\"'properties'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Version'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"45\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <amexio-datagrid title=\"Properties<amexio-chip>\" [enable-column-fiter]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/forms/chip.json'\"\n                    [data-reader]=\"'properties'\" [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Version'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Type'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Default'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"45\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <br>\n                <amexio-datagrid title=\"Events<amexio-chips>\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/forms/chips.json'\" [data-reader]=\"'events'\"\n                    [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"20\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Version'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"80\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n                <amexio-datagrid title=\"Events<amexio-chip>\" [http-method]=\"'get'\" [http-url]=\"'assets/apireference/forms/chip.json'\" [data-reader]=\"'events'\"\n                    [enable-data-filter]=\"false\">\n                    <amexio-data-table-column [width]=\"20\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Version'\"></amexio-data-table-column>\n                    <amexio-data-table-column [width]=\"80\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\"></amexio-data-table-column>\n                </amexio-datagrid>\n\n            </amexio-tab>\n            <amexio-tab title=\"Source\">\n                <div style=\"overflow-y: scroll\">\n                    <amexio-vertical-tab-view>\n                        <amexio-tab title=\"HTML\" [active]=\"true\">\n                            <ng-container *ngIf=\"htmlCode\">\n                                <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                                <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"Type Script\">\n                            <ng-container *ngIf=\"typeScriptCode\">\n                                <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                        <amexio-tab title=\"Data Source\">\n                            <ng-container *ngIf=\"dataSource\">\n                                <prism-block [code]=\"dataSource\" [language]=\"'json'\"></prism-block>\n                            </ng-container>\n                        </amexio-tab>\n                    </amexio-vertical-tab-view>\n                </div>\n            </amexio-tab>\n            <amexio-tab title=\"Live\">\n                <p align=\"center\">Amexio Sandbox</p>\n                <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-chips?embed=1&file=app/forminputs/chips/chips.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n            </amexio-tab>\n        </amexio-tab-view>\n    </amexio-body>\n</amexio-card>"

/***/ }),

/***/ "./src/app/forms/chips/chips.demo.module.ts":
/*!**************************************************!*\
  !*** ./src/app/forms/chips/chips.demo.module.ts ***!
  \**************************************************/
/*! exports provided: ChipsDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsDemoModule", function() { return ChipsDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _chips_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chips.demo */ "./src/app/forms/chips/chips.demo.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Created by rashmi on 19/10/18.
 */
var ChipsDemoModule = /** @class */ (function () {
    function ChipsDemoModule() {
    }
    ChipsDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_chips_demo__WEBPACK_IMPORTED_MODULE_6__["ChipsDemo"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _chips_demo__WEBPACK_IMPORTED_MODULE_6__["ChipsDemo"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], ChipsDemoModule);
    return ChipsDemoModule;
}());



/***/ }),

/***/ "./src/app/forms/chips/chips.demo.ts":
/*!*******************************************!*\
  !*** ./src/app/forms/chips/chips.demo.ts ***!
  \*******************************************/
/*! exports provided: ChipsDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsDemo", function() { return ChipsDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
    function ChipsDemo(http) {
        this.http = http;
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
        this.getHtmlAndTypeScriptCode();
    }
    ChipsDemo.prototype.onChipsLabelClick = function (event) {
        this.emitdatachips = event;
    };
    ChipsDemo.prototype.onChipLabelClick = function (event) {
        this.emitdatachip = event;
    };
    ChipsDemo.prototype.onCloseClick = function (event) {
        this.emitdatachip = event;
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    ChipsDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        var responseData;
        //HTML FILE
        this.http.get('assets/data/code/forms/chips/form.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/forms/chips/form.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
        //TS FILE
        this.http.get('assets/data/code/forms/chips/datasource.json', { responseType: 'text' }).subscribe(function (data) {
            responseData = data;
        }, function (error) {
        }, function () {
            _this.dataSource = responseData;
        });
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
            template: __webpack_require__(/*! ./chips.demo.html */ "./src/app/forms/chips/chips.demo.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ChipsDemo);
    return ChipsDemo;
}());



/***/ })

}]);
//# sourceMappingURL=forms-chips-chips-demo-module.js.map