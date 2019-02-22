(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-theme-module"],{

/***/ "./src/app/theme/theme.component.ts":
/*!******************************************!*\
  !*** ./src/app/theme/theme.component.ts ***!
  \******************************************/
/*! exports provided: ThemeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeComponent", function() { return ThemeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
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
 * Created by sagar on 11/1/18.
 */



var ThemeComponent = /** @class */ (function () {
    function ThemeComponent(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.hasThemeInit = false;
    }
    ThemeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var response;
        this.http.get('assets/data/theme/theme-api-showcase.json', { responseType: 'json' }).subscribe(function (data) {
            response = data;
        }, function (error) {
        }, function () {
            _this.mdThemeData = response;
        });
        this.http.get('assets/data/theme/theme-api-showcase-amexio.json', { responseType: 'json' }).subscribe(function (data) {
            response = data;
        }, function (error) {
        }, function () {
            _this.amexioThemeData = response;
        });
    };
    ThemeComponent.prototype.addNewTheme = function (newTheme, existingTheme) {
        var _this = this;
        var linkEl = document.createElement('link');
        linkEl.onload = function () {
            _this.removeExistingTheme(existingTheme);
        };
        linkEl.setAttribute('rel', 'stylesheet');
        linkEl.id = 'themeid';
        linkEl.href = newTheme;
        document.head.appendChild(linkEl);
    };
    //removed old theme css
    ThemeComponent.prototype.removeExistingTheme = function (keyList) {
        if (keyList != null && keyList && keyList.length != 0) {
            for (var i = 0; i < keyList.length; i++) {
                var key = keyList[i];
                if (key.id == 'themeid') {
                    document.head.removeChild(key);
                }
            }
        }
    };
    ThemeComponent.prototype.themeChange = function (theme) {
        this.newThemePath = 'assets/themes/' + theme.themeCssFile + '.css';
        var currentTheme = document.head.querySelectorAll("link[rel=\"stylesheet\"]");
        // this.removeExistingTheme(currentTheme);
        this.addNewTheme(this.newThemePath, currentTheme);
        var themeObj = {
            id: Math.floor(Math.random() * 9) + 1,
            themeName: theme.themeCssFile
        };
        this.cookieService.set('theme-info', JSON.stringify(themeObj));
    };
    ThemeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'theme-page',
            template: "\n\n    <amexio-image [path]=\"'assets/images/logos/amexio_colors.jpeg'\"[tooltip]=\"'Image'\"></amexio-image>\n\n    <amexio-tab-view  [closable]=\"false\">\n        <amexio-tab title=\"Material Design\" [active]=\"true\">\n            <amexio-row *ngFor=\"let row of mdThemeData\">\n                <amexio-column [size]=\"(12/row.length)\" *ngFor=\"let col of row\">\n                    <div class=\"card-container\">\n                        <header class=\"card-header flex-start\" [ngStyle]=\"{'background-color':col.navBarBGColor, 'color':col.navBarFontColor}\" >\n                            <amexio-label>{{col.themeName}}</amexio-label>\n                        </header>\n                        <div class=\"card-body cardbody\">\n                            <amexio-image [path]=\"'assets/images/theme-icons/'+col.link\"></amexio-image> <br/>\n                            <amexio-label [size]=\"'small'\">Version: {{col.version}}</amexio-label> <br/>\n                            <amexio-label>Style: {{col.style}}</amexio-label> <br/>\n                        </div> \n                        <footer class=\"card-footer flex-end\">\n                            <amexio-button [label]=\"'Test'\" [type]=\"'default'\" (onClick)=\"themeChange(col)\"></amexio-button>\n                        </footer>\n                    </div>\n                </amexio-column>\n            </amexio-row>\n        </amexio-tab>\n        <amexio-tab title=\"Amexio\">\n            <amexio-row *ngFor=\"let row of amexioThemeData\">\n                <amexio-column [size]=\"(12/row.length)\" *ngFor=\"let col of row\">\n                    <div class=\"card-container\">\n                        <header class=\"card-header flex-start\" [ngStyle]=\"{'background-color':col.navBarBGColor, 'color':col.navBarFontColor}\" >\n                            <amexio-label>{{col.themeName}}</amexio-label>\n                        </header>\n                        <div class=\"card-body cardbody\">\n                            <amexio-image [path]=\"'assets/images/theme-icons/'+col.link\"></amexio-image> <br/>\n                            <amexio-label [size]=\"'small'\">Version: {{col.version}}</amexio-label> <br/>\n                            <amexio-label>Style: {{col.style}}</amexio-label> <br/>\n                        </div> \n                    </div>\n                </amexio-column>\n            </amexio-row>\n        </amexio-tab>\n        <amexio-tab title=\"Colors\">\n        Eventually we can apply this attribute [amexio-color] to all components, currently we can apply to progress bar and datapoints. \n        To know more refer the API reference section\n        <amexio-datagrid title=\"Amexio Colors\" [enable-column-fiter]=\"false\"\n        [http-method]=\"'get'\"\n        [http-url]=\"'assets/data/theme/amexio-colours.json'\"\n        [data-reader]=\"'colors'\"\n        [enable-data-filter]=\"false\">\n<amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                   [text]=\"'Name'\"></amexio-data-table-column>\n<amexio-data-table-column [width]=\"15\" [data-index]=\"'css'\" [data-type]=\"'string'\" [hidden]=\"false\"\n[text]=\"'CSS Class Name'\"><ng-template #amexioBodyTmpl let-column let-row=\"row\">\n<span>\n[amexio-color] = '{{row.css}}' </span>\n</ng-template>\n</amexio-data-table-column>\n<amexio-data-table-column [width]=\"15\" [data-index]=\"'BG'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                   [text]=\"'Color'\">\n                   <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                   <span>\n                    <div [ngStyle]=\"{'background-color':row.BG, 'color' : row.font}\">\n                    This is amexio color {{ row.name }} background <b> {{ row.BG }} </b> with opposite font color <b> {{ row.font }} </b>             \n                    </div>                  \n                   </span>\n                    </ng-template>\n                   </amexio-data-table-column>\n</amexio-datagrid>\n        </amexio-tab>\n        <amexio-tab title=\"Getting Started\">\n        <amexio-label size=\"large\">To install the Amexio Colors:</amexio-label>\n        <amexio-box background-color=\"blue\" border=\"left\" border-color=\"blue\" padding=\"true\">\n            <amexio-label size=\"medium-bold\">$ sudo npm install -g amexio-colors</amexio-label>\n        </amexio-box>\n        <amexio-label size=\"large\">Check the Amexio Colors version:</amexio-label>\n        <amexio-box background-color=\"blue\" border=\"left\" border-color=\"blue\" padding=\"true\" >\n            <amexio-label size=\"medium-bold\"> $ ac </amexio-label><br/>\n            <amexio-label> Amexio Colors v1.0 </amexio-label><br/>\n            <amexio-label> Copyright (c) 2018, MetaMagic Global Inc, NJ, USA </amexio-label><br/>\n            <amexio-label> ..... </amexio-label><br/>\n        </amexio-box>\n        <amexio-label size=\"large\">To Generate Amexio Material Design Themes</amexio-label>\n        \n        <amexio-box background-color=\"blue\" border=\"left\" border-color=\"blue\" padding=\"true\" >       \n        <amexio-label size=\"medium-bold\">$ pwd</amexio-label><br/>\n        <amexio-label size=\"medium\">/home/user/</amexio-label><br/><br/>\n        <amexio-label size=\"medium-bold\">$ mkdir mythemes</amexio-label><br/>\n        <amexio-label size=\"medium-bold\">$ echo \"// Amexio Themes v0.0 \" >> Themes-Data.txt</amexio-label><br/>\n        <amexio-label size=\"medium-bold\">$ echo \"// Design-Type : Material Design \" >> Themes-Data.txt</amexio-label><br/>\n        <amexio-label size=\"medium-bold\">$ echo \"// Theme-Version : 4.0 \" >> Themes-Data.txt</amexio-label><br/>\n        <amexio-label size=\"medium-bold\">$ echo \"army-olive,#4B5320,#708238\" >> Themes-Data.txt</amexio-label><br/>\n        <amexio-label size=\"medium-bold\">$ echo \"ash-stone-black,#544C4A,#877F7D\" >> Themes-Data.txt</amexio-label><br/>\n        <br />\n        <amexio-label size=\"medium-bold\">$ ac Themes-Data.txt /home/user/mythemes/</amexio-label><br/>\n        </amexio-box>\n        <amexio-label size=\"large\"> Amexio Colors API Documentation</amexio-label>\n        <p>\n        <amexio-label>\n            Checkout the Amexio Colors API Documentation published in </amexio-label>\n            <a href=\"https://meta-magic.github.io/AmexioColors/\" target=\"_blank\"> GitHub Pages</a>\n            <br/>\n            <amexio-label>For Testing the Themes Autogenerated by the Amexio Colors Checkout the Amexio</amexio-label>\n            <a href=\"https://api.amexio.org\" target=\"_blank\"> API Site</a>\n        </p>\n            \n        </amexio-tab>\n    </amexio-tab-view>\n\n  "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], ThemeComponent);
    return ThemeComponent;
}());



/***/ }),

/***/ "./src/app/theme/theme.module.ts":
/*!***************************************!*\
  !*** ./src/app/theme/theme.module.ts ***!
  \***************************************/
/*! exports provided: ThemeModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeModule", function() { return ThemeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _theme_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme.component */ "./src/app/theme/theme.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Ketan on 16/1/18.
 */








var routes = [
    { path: '', component: _theme_component__WEBPACK_IMPORTED_MODULE_7__["ThemeComponent"] },
];
var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    ThemeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [_theme_component__WEBPACK_IMPORTED_MODULE_7__["ThemeComponent"]],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]]
        })
    ], ThemeModule);
    return ThemeModule;
}());

var routedComponents = [_theme_component__WEBPACK_IMPORTED_MODULE_7__["ThemeComponent"]];


/***/ })

}]);
//# sourceMappingURL=theme-theme-module.js.map