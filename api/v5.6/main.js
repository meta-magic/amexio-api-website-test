(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Forms/forms.module": [
		"./src/app/Forms/forms.module.ts",
		"Forms-forms-module~FormsAction-FormsAction-module~FormsInput-FormsInput-module~chartd3-chartd3-demo-~eb2e7e41",
		"Forms-forms-module"
	],
	"./FormsAction/FormsAction.module": [
		"./src/app/FormsAction/FormsAction.module.ts",
		"Forms-forms-module~FormsAction-FormsAction-module~FormsInput-FormsInput-module~chartd3-chartd3-demo-~eb2e7e41",
		"FormsAction-FormsAction-module"
	],
	"./FormsInput/FormsInput.module": [
		"./src/app/FormsInput/FormsInput.module.ts",
		"Forms-forms-module~FormsAction-FormsAction-module~FormsInput-FormsInput-module~chartd3-chartd3-demo-~eb2e7e41",
		"FormsInput-FormsInput-module"
	],
	"./chartd3/chartd3.demo.module": [
		"./src/app/chartd3/chartd3.demo.module.ts",
		"Forms-forms-module~FormsAction-FormsAction-module~FormsInput-FormsInput-module~chartd3-chartd3-demo-~eb2e7e41",
		"chartd3-chartd3-demo-module"
	],
	"./charts/D3charts/D3charts.module": [
		"./src/app/charts/D3charts/D3charts.module.ts",
		"Forms-forms-module~FormsAction-FormsAction-module~FormsInput-FormsInput-module~chartd3-chartd3-demo-~eb2e7e41",
		"charts-D3charts-D3charts-module"
	],
	"./charts/googlechart/googlechart.module": [
		"./src/app/charts/googlechart/googlechart.module.ts",
		"Forms-forms-module~FormsAction-FormsAction-module~FormsInput-FormsInput-module~chartd3-chartd3-demo-~eb2e7e41",
		"charts-googlechart-googlechart-module"
	],
	"./contextualmenu/contextualmenu.module": [
		"./src/app/contextualmenu/contextualmenu.module.ts",
		"Forms-forms-module~FormsAction-FormsAction-module~FormsInput-FormsInput-module~chartd3-chartd3-demo-~eb2e7e41",
		"contextualmenu-contextualmenu-module"
	],
	"./creative/creative.module": [
		"./src/app/creative/creative.module.ts",
		"Forms-forms-module~FormsAction-FormsAction-module~FormsInput-FormsInput-module~chartd3-chartd3-demo-~eb2e7e41",
		"creative-creative-module"
	],
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"Forms-forms-module~FormsAction-FormsAction-module~FormsInput-FormsInput-module~chartd3-chartd3-demo-~eb2e7e41",
		"dashboard-dashboard-module"
	],
	"./data/Data.module": [
		"./src/app/data/Data.module.ts",
		"Forms-forms-module~FormsAction-FormsAction-module~FormsInput-FormsInput-module~chartd3-chartd3-demo-~eb2e7e41",
		"data-Data-module"
	],
	"./draganddrop/DragDrop.module": [
		"./src/app/draganddrop/DragDrop.module.ts",
		"Forms-forms-module~FormsAction-FormsAction-module~FormsInput-FormsInput-module~chartd3-chartd3-demo-~eb2e7e41",
		"draganddrop-DragDrop-module"
	],
	"./drillableChart/drillablechart.module": [
		"./src/app/drillableChart/drillablechart.module.ts",
		"Forms-forms-module~FormsAction-FormsAction-module~FormsInput-FormsInput-module~chartd3-chartd3-demo-~eb2e7e41",
		"drillableChart-drillablechart-module"
	],
	"./enterprise/enterprise.module": [
		"./src/app/enterprise/enterprise.module.ts",
		"Forms-forms-module~FormsAction-FormsAction-module~FormsInput-FormsInput-module~chartd3-chartd3-demo-~eb2e7e41",
		"enterprise-enterprise-module"
	],
	"./gettingstarted/gettingstarted": [
		"./src/app/gettingstarted/gettingstarted.ts",
		"Forms-forms-module~FormsAction-FormsAction-module~FormsInput-FormsInput-module~chartd3-chartd3-demo-~eb2e7e41",
		"gettingstarted-gettingstarted"
	],
	"./layout/layout.module": [
		"./src/app/layout/layout.module.ts",
		"Forms-forms-module~FormsAction-FormsAction-module~FormsInput-FormsInput-module~chartd3-chartd3-demo-~eb2e7e41",
		"layout-layout-module"
	],
	"./map/map.module": [
		"./src/app/map/map.module.ts",
		"Forms-forms-module~FormsAction-FormsAction-module~FormsInput-FormsInput-module~chartd3-chartd3-demo-~eb2e7e41",
		"map-map-module"
	],
	"./media/media.module": [
		"./src/app/media/media.module.ts",
		"Forms-forms-module~FormsAction-FormsAction-module~FormsInput-FormsInput-module~chartd3-chartd3-demo-~eb2e7e41",
		"media-media-module"
	],
	"./navigation/navigation.module": [
		"./src/app/navigation/navigation.module.ts",
		"Forms-forms-module~FormsAction-FormsAction-module~FormsInput-FormsInput-module~chartd3-chartd3-demo-~eb2e7e41",
		"navigation-navigation-module"
	],
	"./panes/panes.module": [
		"./src/app/panes/panes.module.ts",
		"Forms-forms-module~FormsAction-FormsAction-module~FormsInput-FormsInput-module~chartd3-chartd3-demo-~eb2e7e41",
		"panes-panes-module"
	],
	"./theme/theme.module": [
		"./src/app/theme/theme.module.ts",
		"theme-theme-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"font-family: 'Titillium Web', sans-serif;\">\n  <amexio-nav [enable-side-nav-position]=\"true\" [title]=\"'Amexio'\" [logo]=\"'assets/images/logos/amexio-logo.png'\">\n\n    <amexio-nav-item position-right *ngFor=\"let menus of amexiotechmenus\" [type]=\"'menu'\" [title]=\"menus.text\" [icon]=\"menus.icon\"\n      [data]=\"menus.submenus\" (onNavItemClick)=\"externalLink($event)\">\n    </amexio-nav-item>\n  </amexio-nav>\n\n  <amexio-row>\n    <amexio-column [size]=\"'2pt5'\" style=\"padding-top: 68px;\">\n      <amexio-side-nav [http-url]=\"'assets/data/menus/menu.json'\" [http-method]=\"'get'\" [data-reader]=\"'data'\" [height]=\"'92%'\"\n        (nodeClick)=\"onNodeClick($event)\">\n      </amexio-side-nav>\n    </amexio-column>\n    <amexio-column [size]=\"'9pt5'\">\n      <div class=\"route-container\">\n        <div *ngIf=\"isRouteLoading\">\n\n          <amexio-spinner [type]=\"'rectanglebounce'\" [vertical-position]=\"'center'\" [horizontal-position]=\"'center'\"\n            [color]=\"'black'\" [size]=\"'7px'\">\n          </amexio-spinner>\n\n        </div>\n\n        <router-outlet></router-outlet>\n      </div>\n      <br /><br />\n      <div id=\"footer1\" style=\"bottom: 0;\">\n        <p style=\"text-align: center;\">\n            ©2018-19 MetaMagic Global Inc, 1st floor, 46 Stuyvesant Avenue, NJ, USA. BetaMagic Global Pvt Ltd, INDIA.. All Rights Reserved. Source Code : <a\n            href=\"https://api.amexio.org/api/license.html\" target=\"_blank\">Apache 2 License</a> Docs by <a href=\"https://creativecommons.org/licenses/by/3.0/\"\n            target=\"_blank\">CC By 3.0</a></p>\n      </div>\n      <br>\n      <br>\n      <br>\n    </amexio-column>\n  </amexio-row>\n\n</div>\nremoved data\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AppComponent = /** @class */ (function () {
    function AppComponent(router, document, _httpClient, _cookieService) {
        this.router = router;
        this.document = document;
        this._httpClient = _httpClient;
        this._cookieService = _cookieService;
        this.isRouteLoading = false;
        this.mdThemeData = [];
        this.newThemePath = '';
        this.topMenuData = JSON.parse("[\n    {\n      \"label\" : \"Features\",\n      \"link\" : \"https://amexio.tech/features\"\n    },\n    {\n      \"label\" : \"Roadmap\",\n      \"link\" : \"https://amexio.tech/roadmap\"\n    },\n    {\n      \"label\" : \"Downloads\",\n      \"link\" : \"https://amexio.tech/download\"\n    },\n    {\n      \"label\" : \"Forum\",\n      \"link\" : \"http://forum.metamagicglobal.com/\"\n    },\n    {\n      \"label\" : \"Blogs\",\n      \"link\" : \"https://www.metamagicglobal.com/blogs\"\n    },\n    {\n      \"label\" : \"MetaMagic\",\n      \"link\" : \"http://www.metamagicglobal.com\"\n    }\n  ]\n");
        this.amexiotechmenus = [
            {
                "text": "Home",
                "icon": "fa fa-home fa-fw fa-lg ",
                "link": 'http://api.amexio.org',
                "submenus": [
                    {
                        "text": "Version 5.5",
                        "link": "../v5.5/index.html"
                    },
                    {
                        "text": "Version 5.4",
                        "link": "../v5.4/index.html"
                    },
                    {
                        "text": "Version 5.3",
                        "link": "../v5.3/index.html"
                    },
                    {
                        "text": "Version 5.2",
                        "link": "../v5.2/index.html"
                    },
                    {
                        "text": "Version 5.1",
                        "link": "../v5.1/index.html"
                    },
                    {
                        "text": "Version 5.0",
                        "link": "../v5.0/index.html"
                    },
                    {
                        "text": "Version 4.0",
                        "link": "../v4/index.html"
                    },
                    {
                        "text": "Version 3.0",
                        "link": "../v3/index.html"
                    },
                    {
                        "text": "Version 2.0",
                        "link": "../v2/index.html"
                    },
                    {
                        "text": "Version 1.0",
                        "link": "../v1/index.html"
                    }
                ]
            },
            {
                "text": "Products",
                "icon": "fa fa-snowflake-o fa-fw",
                "submenus": [
                    {
                        "text": "Amexio API",
                        "link": "https://amexio.tech/amexio-api"
                    },
                    {
                        "text": "Amexio D3 Charts",
                        "link": " https://amexio.tech/amexio-d3-charts"
                    },
                    {
                        "text": "Amexio Canvas",
                        "link": "https://amexio.tech/amexio-canvas"
                    }, {
                        "text": "Amexio Colors",
                        "link": "https://amexio.tech/amexio-colors"
                    }, {
                        "text": "Amexio Plugins",
                        "link": "https://amexio.tech/amexio-plugins-1"
                    },
                    {
                        "text": "Amexio Demo Apps",
                        "link": " https://demo.amexio.org/se/v5.1/index.html"
                    }
                ]
            },
            {
                "text": "Start Using",
                "icon": "fa fa-television fa-fw",
                "submenus": [
                    {
                        "text": "Pricing",
                        "link": "https://amexio.tech/pricing"
                    },
                    {
                        "text": "Quality-Assurance",
                        "link": "https://amexio.tech/quality-assurance"
                    },
                    {
                        "text": "Downloads",
                        "link": "https://amexio.tech/download"
                    }, {
                        "text": "Subscribe ",
                        "link": "https://canvas.amexio.org/#/user/signup"
                    },
                    {
                        "text": "Support",
                        "link": "https://amexio.tech/support"
                    }, {
                        "text": "Canvas Login (Beta)",
                        "link": "https://canvas.amexio.org/"
                    }, {
                        "text": "License and Other Docs",
                        "link": "https://amexio.tech/license-and-other-docs-1"
                    },
                    {
                        "text": "Roadmap",
                        "link": "https://amexio.tech/roadmap"
                    }
                ]
            },
            {
                "text": "Training",
                "icon": "fa fa-user fa-fw",
                "submenus": [
                    {
                        "text": "Component Example",
                        "link": "http://demo.amexio.tech/"
                    }, {
                        "text": "Amexio Training",
                        "link": "http://metaarivu.com/amexio-training"
                    }
                ]
            },
            {
                "text": "Case Studies",
                "icon": "fa fa-clone fa-fw",
                "submenus": [
                    { "text": "Shopping Portal", "link": "https://demo.amexio.org/se/shoppingportal/#/home" },
                    { "text": "US Election Results", "link": "https://demo.amexio.org/se/us-election/ " },
                    { "text": "Insurance Portal", "link": "https://demo.amexio.org/se/insuranceportal/#/home" },
                    { "text": "Movie Portal", "link": "https://demo.amexio.org/ee/" },
                    { "text": "NpmStats", "link": "https://www.npmstats.com/" }
                ]
            },
            {
                "text": "Engage",
                "icon": "fa fa-envelope fa-fw",
                "submenus": [{
                        "text": "Events",
                        "link": "https://metamagicglobal.com/events"
                    }, {
                        "text": "Forums",
                        "link": "http://forum.metamagicglobal.com/"
                    }, {
                        "text": "Blogs",
                        "link": "http://blog.metamagicglobal.com/"
                    }, {
                        "text": "Node Package Manager",
                        "link": "https://www.npmjs.com/package/amexio-ng-extensions"
                    }, {
                        "text": "GitHub - Source Code",
                        "link": "https://github.com/meta-magic/amexio.github.io"
                    }]
            },
            {
                "text": "About Us",
                "icon": "fa fa-address-book-o fa-fw",
                "submenus": [{
                        "text": "Contact",
                        "link": "https://metamagicglobal.com/contact"
                    }, {
                        "text": "Company",
                        "link": "http://www.metamagicglobal.com/company"
                    }, {
                        "text": "MetaMagic",
                        "link": "https://www.metamagicglobal.com/"
                    }]
            }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.changeTheme();
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadStart"]) {
                _this.isRouteLoading = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadEnd"]) {
                _this.isRouteLoading = false;
            }
        });
    };
    AppComponent.prototype.changeTheme = function () {
        var _this = this;
        this._httpClient.get('assets/data/theme/material-themes.json').subscribe(function (res) {
            _this.mdThemeData = res.bestThemes;
        }, function (error) {
            console.log(error);
        }, function () {
            var themeRef;
            var themeId = 1;
            if (_this._cookieService.check('theme-info')) {
                themeId = JSON.parse(_this._cookieService.get('theme-info')).id + 1;
                themeId = _this.mdThemeData.length - 1 < themeId ? 0 : themeId;
                themeRef = _this.mdThemeData[themeId];
            }
            else {
                themeId = 0;
                themeRef = _this.mdThemeData[0];
            }
            _this._cookieService.set('theme-info', JSON.stringify({ id: themeId, themeName: themeRef.themeCssFile }));
            _this.themeChange(themeRef);
        });
    };
    AppComponent.prototype.addNewTheme = function (newTheme, existingTheme) {
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
    AppComponent.prototype.removeExistingTheme = function (keyList) {
        if (keyList != null && keyList && keyList.length != 0) {
            for (var i = 0; i < keyList.length; i++) {
                var key = keyList[i];
                if (key.id == 'themeid') {
                    document.head.removeChild(key);
                }
            }
        }
    };
    AppComponent.prototype.themeChange = function (theme) {
        this.newThemePath = 'assets/themes/' + theme.themeCssFile + '.css';
        var currentTheme = document.head.querySelectorAll("link[rel=\"stylesheet\"]");
        // this.removeExistingTheme(currentTheme);
        this.addNewTheme(this.newThemePath, currentTheme);
        var themeObj = {
            id: Math.floor(Math.random() * 9) + 1,
            themeName: theme.themeCssFile
        };
        // this._cookieService.set('theme-info', JSON.stringify(themeObj));
    };
    AppComponent.prototype.externalLink = function (event) {
        if (event.data.node.link)
            //this.document.location.href=event.data.node.link;
            window.open(event.data.node.link, '_blank');
    };
    AppComponent.prototype.homeLink = function (link) {
        this.document.location.href = link;
    };
    //TO CLOSE NABVAR IN MOBILE
    AppComponent.prototype.onMenuClick = function () {
        this.amexioNav.close();
    };
    AppComponent.prototype.onNodeClick = function (node) {
        if (node.hasOwnProperty('link')) {
            this.router.navigate([node.link]);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioNavBarComponent"]),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "amexioNav", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: ["\n  .BgColor {\n    \n  }\n  "]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var amexio_chart_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! amexio-chart-d3 */ "./node_modules/amexio-chart-d3/fesm5/amexio-chart-d3.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                amexio_chart_d3__WEBPACK_IMPORTED_MODULE_8__["AmexioChartD3Module"], amexio_chart_d3__WEBPACK_IMPORTED_MODULE_8__["AmexioChartD3Module"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioChartsModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioMapModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioDashBoardModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioPaneModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_4__["APP_ROUTE"], { useHash: true }),
            ],
            providers: [amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["CommonDataService"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["DeviceQueryService"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["IconLoaderService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTE", function() { return APP_ROUTE; });
var APP_ROUTE = [
    {
        path: '', redirectTo: 'getting-started', pathMatch: 'full'
    },
    /** Getting Started  Page */
    {
        path: 'getting-started', loadChildren: './gettingstarted/gettingstarted#GettingStatedModule'
    },
    /** Amexio Color  Page */
    {
        path: 'amexio-colors', loadChildren: './theme/theme.module#ThemeModule'
    },
    /** D3 Chart Page */
    {
        path: 'd3-charts', loadChildren: './chartd3/chartd3.demo.module#ChartD3DemoModule'
    },
    /** Forms Input */
    {
        path: 'forms-Input', loadChildren: './FormsInput/FormsInput.module#FormsInputModule'
    },
    /** Forms Action */
    {
        path: 'forms-Action', loadChildren: './FormsAction/FormsAction.module#FormsActionModule'
    },
    /** DATA contain grid and Tree*/
    {
        path: 'data', loadChildren: './data/Data.module#DataModule'
    },
    /** Drag and Drop Tree*/
    {
        path: 'dragdrop', loadChildren: './draganddrop/DragDrop.module#DragDropModule'
    },
    /** Navigation*/
    {
        path: 'navigation', loadChildren: './navigation/navigation.module#NavigationModule'
    },
    /** Media Routes*/
    {
        path: 'media-demo', loadChildren: './media/media.module#MediaModule'
    },
    /**Layout Routes*/
    {
        path: 'layout', loadChildren: './layout/layout.module#LayoutModule'
    },
    /** panes Routes*/
    {
        path: 'panes', loadChildren: './panes/panes.module#PanesModule'
    },
    /** Contextual Menu Routes*/
    {
        path: 'contextualmenu', loadChildren: './contextualmenu/contextualmenu.module#ContextualMenuModule'
    },
    /**Dashboard Routes*/
    {
        path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    /**Map Routes*/
    {
        path: 'map', loadChildren: './map/map.module#MapModule'
    },
    /** Enterprise */
    {
        path: 'enterprise', loadChildren: './enterprise/enterprise.module#EnterpriseModule'
    },
    /** drillableD3Chart */
    {
        path: 'drillableD3Chart', loadChildren: './drillableChart/drillablechart.module#DrillableD3ChartModule'
    },
    /** Google Chart Routes*/
    {
        path: 'google-chart', loadChildren: './charts/googlechart/googlechart.module#GoogleChartModule'
    },
    /* D3-Charts */
    {
        path: 'D3chart', loadChildren: './charts/D3charts/D3charts.module#D3ChartModule'
    },
    /** Forms HTML AND REACTIVE */
    {
        path: 'forms', loadChildren: './Forms/forms.module#FormsDemoModule'
    },
    {
        path: 'creative', loadChildren: './creative/creative.module#CreativeModule'
    },
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/meta-magic/Amexio5API/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map