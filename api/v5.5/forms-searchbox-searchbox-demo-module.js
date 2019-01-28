(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-searchbox-searchbox-demo-module"],{

/***/ "./src/app/forms/searchbox/searchbox.demo.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/forms/searchbox/searchbox.demo.module.ts ***!
  \**********************************************************/
/*! exports provided: SearchBoxDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxDemoModule", function() { return SearchBoxDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _searchbox_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchbox.demo */ "./src/app/forms/searchbox/searchbox.demo.ts");
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
var SearchBoxDemoModule = /** @class */ (function () {
    function SearchBoxDemoModule() {
    }
    SearchBoxDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_searchbox_demo__WEBPACK_IMPORTED_MODULE_6__["SearchBox"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _searchbox_demo__WEBPACK_IMPORTED_MODULE_6__["SearchBox"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], SearchBoxDemoModule);
    return SearchBoxDemoModule;
}());



/***/ }),

/***/ "./src/app/forms/searchbox/searchbox.demo.ts":
/*!***************************************************!*\
  !*** ./src/app/forms/searchbox/searchbox.demo.ts ***!
  \***************************************************/
/*! exports provided: SearchBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBox", function() { return SearchBox; });
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


var SearchBox = /** @class */ (function () {
    function SearchBox(http, element) {
        this.http = http;
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
        this.getHtmlAndTypeScriptCode();
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
    //TO LOAD HTML AND TYPESCRIPT CODE
    SearchBox.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/forms/searchbox/form.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/forms/searchbox/form.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
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
            template: "\n      <amexio-card header=\"true\">\n        <amexio-header>\n           Search Box\n        </amexio-header>\n        <amexio-body>\n        \n          <p>Search Box component can be  used to search data with auto complete recommmendation list and advance search facility providing advance search form.</p>\n          <amexio-tab-view>\n            <amexio-tab title=\"Demo\" active=\"true\">\n            <amexio-row>\n            <amexio-column [size]=12>\n                <amexio-card [header]=\"true\" [footer]=\"false\" >\n                    <amexio-header>\n                        Search Box \n                    </amexio-header>\n                    <amexio-body>\n\n                    <amexio-searchbox \n                    [place-holder]=\"'Search'\" \n                    [display-field]=\"'subject'\"\n                    [data]=\"bindData\"\n                     [width]=\"250\"\n                    >\n                    <amexio-searchbox-options #search [title]=\"'Advance search'\">    \n                    \n                        <amexio-text-input field-label=\"Subject:\"\n                   name=\"subject\"\n                   place-holder=\"Enter subject\"\n                   icon-feedback=\"true\"\n                   [(ngModel)]=\"subject\"\n                   >\n                     </amexio-text-input>\n                     <amexio-text-input field-label=\"From:\"\n                   name=\"from\"\n                   place-holder=\"Emailid\"\n                   icon-feedback=\"true\"\n                   [(ngModel)]=\"from\"\n                   >\n                     </amexio-text-input>\n                     <amexio-text-input field-label=\"To:\"\n                   name=\"To\"\n                   place-holder=\"Emailid\"\n                   icon-feedback=\"true\"\n                   [(ngModel)]=\"to\"\n                   >\n                     </amexio-text-input>\n                        <amexio-row><amexio-column [size]=\"'12'\"></amexio-column></amexio-row>\n                        <amexio-button\n                        [label]=\"'Filter'\"\n                        [type]=\"'theme-color'\"\n                        [tooltip]=\"'toolTip'\"\n                        [size]=\"'medium'\"\n                        (onClick)=\"filter(search)\"\n                        >\n                   </amexio-button>\n                    </amexio-searchbox-options>\n  \n\n                    \n                    </amexio-searchbox>\n                      \n                    \n        </amexio-body>\n                </amexio-card>\n                \n            </amexio-column>\n        </amexio-row>    \n            </amexio-tab>\n            <amexio-tab title=\"API Reference\">\n              <amexio-datagrid title=\"Properties <amexio-searchbox> \" [enable-column-fiter]=\"false\"\n                               [http-method]=\"'get'\"\n                               [http-url]=\"'assets/apireference/forms/searchbox.json'\" \n                               [data-reader]=\"'properties'\"\n                               [enable-data-filter]=\"false\" >\n                <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                          [text]=\"'Name'\"></amexio-data-table-column>\n                <amexio-data-table-column [width]=\"20\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                          [text]=\"'Version'\"></amexio-data-table-column>                                                  \n                <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                          [text]=\"'Type'\"></amexio-data-table-column>\n                <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                          [text]=\"'Default'\"></amexio-data-table-column>\n                <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                          [text]=\"'Description'\"></amexio-data-table-column>\n              </amexio-datagrid>\n              <br>\n              <amexio-datagrid title=\"Properties <amexio-searchbox-options> \" [enable-column-fiter]=\"false\"\n                               [http-method]=\"'get'\"\n                               [http-url]=\"'assets/apireference/forms/searchbox.json'\" \n                               [data-reader]=\"'childproperties'\"\n                               [enable-data-filter]=\"false\" >\n                <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                          [text]=\"'Name'\"></amexio-data-table-column>\n                <amexio-data-table-column [width]=\"20\" [data-index]=\"'version'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                          [text]=\"'Version'\"></amexio-data-table-column>                                                  \n                <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                          [text]=\"'Type'\"></amexio-data-table-column>\n                <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                          [text]=\"'Default'\"></amexio-data-table-column>\n                <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                          [text]=\"'Description'\"></amexio-data-table-column>\n              </amexio-datagrid>\n              <br>\n              <amexio-datagrid title=\"Events\" [http-method]=\"'get'\" \n                               [http-url]=\"'assets/apireference/forms/searchbox.json'\" [data-reader]=\"'events'\"\n                               [enable-data-filter]=\"false\">\n                <amexio-data-table-column [width]=\"20\"[data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                          [text]=\"'Name'\"></amexio-data-table-column>\n                <amexio-data-table-column [width]=\"80\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                          [text]=\"'Description'\"></amexio-data-table-column>\n              </amexio-datagrid>\n              \n            </amexio-tab>\n            <amexio-tab title=\"Source\">\n              <div style=\"overflow-y: scroll\">\n              <amexio-vertical-tab-view>\n                <amexio-tab title=\"HTML\" [active]=\"true\">\n                  <ng-container *ngIf=\"htmlCode\">\n                    <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                    <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                  </ng-container>\n                </amexio-tab>\n                <amexio-tab title=\"Type Script\">\n                  <ng-container *ngIf=\"typeScriptCode\">\n                    <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                  </ng-container>\n                </amexio-tab>\n              </amexio-vertical-tab-view>\n              </div>\n            </amexio-tab>\n            <amexio-tab title=\"Live\">\n             <p align=\"center\">Amexio Sandbox</p>\n  <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-searchbox?embed=1&file=src/app/forms/searchbox/searchbox.demo.html \"></iframe>\n            </amexio-tab>\n          </amexio-tab-view>\n        </amexio-body>\n      </amexio-card> "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], SearchBox);
    return SearchBox;
}());



/***/ })

}]);
//# sourceMappingURL=forms-searchbox-searchbox-demo-module.js.map