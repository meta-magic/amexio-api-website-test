(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panes-carousel-carousel-demo-module"],{

/***/ "./src/app/panes/carousel/carousel.demo.module.ts":
/*!********************************************************!*\
  !*** ./src/app/panes/carousel/carousel.demo.module.ts ***!
  \********************************************************/
/*! exports provided: CarouselDemoModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselDemoModule", function() { return CarouselDemoModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _carousel_demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel.demo */ "./src/app/panes/carousel/carousel.demo.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
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
    { path: '', component: _carousel_demo__WEBPACK_IMPORTED_MODULE_2__["CarouselDemoComponent"] },
];
var CarouselDemoModule = /** @class */ (function () {
    function CarouselDemoModule() {
    }
    CarouselDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_6__["AmexioWidgetModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [_carousel_demo__WEBPACK_IMPORTED_MODULE_2__["CarouselDemoComponent"]]
        })
    ], CarouselDemoModule);
    return CarouselDemoModule;
}());

var routedComponents = [_carousel_demo__WEBPACK_IMPORTED_MODULE_2__["CarouselDemoComponent"]];


/***/ }),

/***/ "./src/app/panes/carousel/carousel.demo.ts":
/*!*************************************************!*\
  !*** ./src/app/panes/carousel/carousel.demo.ts ***!
  \*************************************************/
/*! exports provided: CarouselDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselDemoComponent", function() { return CarouselDemoComponent; });
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


var CarouselDemoComponent = /** @class */ (function () {
    function CarouselDemoComponent(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
    }
    CarouselDemoComponent.prototype.getDta = function () {
        var _this = this;
        this.asyncFlag = true;
        setTimeout(function () {
            _this.asyncFlag = false;
        }, 3000);
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    CarouselDemoComponent.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/layout/carousel/carousel.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/layout/carousel/carousel.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    CarouselDemoComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    CarouselDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carousel-demo',
            template: "\n   <amexio-card header=\"true\">\n     <amexio-header>\n        Carousel \n     </amexio-header>\n     <amexio-body>\n       <p>The CarouselView displays a collection of images or other content in a horizontal layout with built-in navigation between the items.</p>\n       <amexio-tab-view>\n         <amexio-tab title=\"Demo\" active=\"true\">\n          <!-- <amexio-carousel [header]=\"'Mobiles'\" [data]=\"[1,2,3,4,5,6,7,8,9,10,11]\" mode=\"multiple\" shuffle-interval=\"2000\">\n             <ng-template let-car amexioTemplate=\"item\">\n               <div style=\"height: 300px;width: 300px;border: 1px solid red;display : inline-block\">\n                <div style=\"text-align: center\">CAR {{car}}</div>\n               </div>\n             </ng-template>\n           </amexio-carousel>-->\n           <amexio-carousel [header]=\"'Gallery'\" [data]=\"[1,2,3,4,5,6,7,8,9,10,11,12]\" mode=\"multiple\">\n             <ng-template let-img amexioTemplate=\"item\">\n                   <amexio-image [height]=\"'300px'\" path=\"assets/images/carousel/set1/{{img}}.jpg\"></amexio-image>\n             </ng-template>\n           </amexio-carousel>\n           <br><br>\n           \n           <amexio-carousel [header]=\"'Gallery With Auto Shuffle (2 seconds)'\" [data]=\"[1,2,3,4,5,6,7,8,9,10,11]\" mode=\"multiple\" shuffle-interval=\"2000\">\n             <ng-template let-gallery amexioTemplate=\"item\">\n                 <amexio-image [height]=\"'300px'\" path=\"assets/images/carousel/set2/{{gallery}}.jpg\"></amexio-image>\n             </ng-template>\n           </amexio-carousel>\n           <br><br>\n           \n           \n         </amexio-tab>\n         <amexio-tab title=\"API Reference\">\n           <amexio-datagrid title=\"Properties<amexio-carousel>\" [enable-column-fiter]=\"false\"\n                            [http-method]=\"'get'\"\n                            [http-url]=\"'assets/apireference/layout/carousel.json'\"\n                            [data-reader]=\"'properties'\"\n                            [enable-data-filter]=\"false\" >\n             <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n           </amexio-datagrid>\n         </amexio-tab>\n         <amexio-tab title=\"Source\">\n           <div style=\"overflow-y: scroll\">\n             <amexio-vertical-tab-view>\n               <amexio-tab title=\"HTML\" [active]=\"true\">\n                 <ng-container *ngIf=\"htmlCode\">\n                   <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                   <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                 </ng-container>\n               </amexio-tab>\n               <amexio-tab title=\"Type Script\">\n                 <ng-container *ngIf=\"typeScriptCode\">\n                   <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                 </ng-container>\n               </amexio-tab>\n             </amexio-vertical-tab-view>   \n           </div>\n          \n         </amexio-tab>\n         <amexio-tab title=\"Live\">\n         <p align=\"center\">Amexio Sandbox</p>\n         <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-panel-carousel?embed=1&file=app/panels/carousel/carousel.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>   \n         </amexio-tab>\n       </amexio-tab-view>\n     </amexio-body>\n   </amexio-card>\n "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CarouselDemoComponent);
    return CarouselDemoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=panes-carousel-carousel-demo-module.js.map