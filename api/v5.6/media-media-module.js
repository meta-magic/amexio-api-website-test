(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["media-media-module"],{

/***/ "./src/app/media/image/image.demo.html":
/*!*********************************************!*\
  !*** ./src/app/media/image/image.demo.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-api-structure  [url]=\"'assets/componentjson/media/image.json'\">\n  <amexio-api-demo>\n    <!-- icon only-->\n    <amexio-row>\n      <amexio-column size=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Font Awesome Icon\n          </amexio-header>\n          <amexio-body>\n            <amexio-row>\n              <amexio-column size=\"12\">\n                <amexio-row>\n\n                  <amexio-column size=\"2\">\n                    Apple &nbsp;\n                    <amexio-image [icon-class]=\"'fa fa-apple fa-2x'\" [tooltip]=\"'Fontawesome apple'\"></amexio-image>\n                  </amexio-column>\n                  <amexio-column size=\"2\">\n                    BitCoin &nbsp;\n                    <amexio-image [icon-class]=\"'\tfa fa-btc fa-2x'\" [tooltip]=\"'Fontawesome bitcoin'\"></amexio-image>\n                  </amexio-column>\n                  <amexio-column size=\"2\">\n                    Facebook &nbsp;\n                    <amexio-image [icon-class]=\"'fa fa-facebook-square fa-2x'\" [tooltip]=\"'Fontawesome facebook'\"></amexio-image>\n                  </amexio-column>\n                  <amexio-column size=\"2\">\n                    Github &nbsp;\n                    <amexio-image [icon-class]=\"'fa fa-github fa-2x'\" [tooltip]=\"'Fontawesome github'\"></amexio-image>\n                  </amexio-column>\n\n                  <amexio-column size=\"2\">\n                    Telegram &nbsp;\n                    <amexio-image [icon-class]=\"'fa fa-telegram fa-2x'\" [tooltip]=\"'Fontawesome telegram'\"></amexio-image>\n                  </amexio-column>\n                  <amexio-column size=\"2\">\n                    VK &nbsp;\n                    <amexio-image [icon-class]=\"'fa fa-vk fa-2x'\" [tooltip]=\"'Fontawesome VK'\"></amexio-image>\n                  </amexio-column>\n\n                </amexio-row>\n              </amexio-column>\n            </amexio-row>\n            <br>\n\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n    <!-- Image with Labels -->\n    <amexio-row>\n      <amexio-column size=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Image with Labels\n          </amexio-header>\n          <amexio-body>\n            <amexio-row>\n              <amexio-column [size]=\"3\">\n                <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\" [filter]=\"'normal'\"\n                              [image-title]=\"'normal'\" [title-position]=\"'top-left'\">\n                </amexio-image>\n              </amexio-column>\n              <amexio-column [size]=\"3\">\n                <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\" [filter]=\"'grayscale'\"\n                              [image-title]=\"'grayscale'\" [title-position]=\"'centered'\">\n                </amexio-image>\n              </amexio-column>\n              <amexio-column [size]=\"3\">\n                <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\" [filter]=\"'invert'\"\n                              [image-title]=\"'invert'\" [title-position]=\"'bottom-right'\">\n                </amexio-image>\n              </amexio-column>\n              <amexio-column [size]=\"3\">\n                <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\" [filter]=\"'sepia'\"\n                              [image-title]=\"'sepia'\" [title-position]=\"'bottom-left'\"></amexio-image>\n              </amexio-column>\n\n            </amexio-row>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n    <!-- Overlay Labels - Left, Right, Top, Bottom-->\n    <amexio-row>\n      <amexio-column size=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Image Overlay Labels\n          </amexio-header>\n          <amexio-body>\n            <amexio-row>\n              <amexio-column size=\"12\">\n                <amexio-row>\n                  <amexio-column [size]=\"3\">\n                    <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\"\n                                  [overlay-effect]=\"'slide-right'\" [overlay-text]=\"'Overlay Fade Right!'\"></amexio-image>\n                  </amexio-column>\n                  <amexio-column [size]=\"3\">\n                    <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\"\n                                  [overlay-effect]=\"'slide-left'\" [overlay-text]=\"'Overlay Fade Left!'\"></amexio-image>\n                  </amexio-column>\n                  <amexio-column [size]=\"3\">\n                    <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\"\n                                  [overlay-effect]=\"'slide-top'\" [overlay-text]=\"'Overlay Fade top!'\"></amexio-image>\n                  </amexio-column>\n                  <amexio-column [size]=\"3\">\n                    <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\"\n                                  [overlay-effect]=\"'slide-bottom'\" [overlay-text]=\"'Overlay Fade Bottom!'\">\n                    </amexio-image>\n                  </amexio-column>\n                </amexio-row>\n              </amexio-column>\n            </amexio-row>\n            <br>\n\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n    <!--  Base Effect - Normal, Small, Opacity, Shadow,Blur, Round-->\n\n    <amexio-row>\n      <amexio-column size=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Base Effect\n          </amexio-header>\n          <amexio-body>\n            <amexio-row>\n              <amexio-column size=\"12\">\n                <amexio-row>\n                  <amexio-column [size]=\"1\"></amexio-column>\n                  <amexio-column [size]=\"3\">\n                    <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\" [filter]=\"'shadow'\"\n                                  [title]=\"'shadow'\" [title-position]=\"'top-left'\">\n                    </amexio-image>\n                  </amexio-column>\n                  <amexio-column [size]=\"1\"></amexio-column>\n\n                  <amexio-column [size]=\"3\">\n                    <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\" [filter]=\"'normal'\"\n                                  [title]=\"'normal'\" [title-position]=\"'centered'\">\n                    </amexio-image>\n                  </amexio-column>\n                  <amexio-column [size]=\"1\"></amexio-column>\n\n                  <amexio-column [size]=\"3\">\n                    <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\" [filter]=\"'opacity'\"\n                                  [title]=\"'opacity'\" [title-position]=\"'bottom-right'\"></amexio-image>\n                  </amexio-column>\n\n                </amexio-row>\n              </amexio-column>\n            </amexio-row>\n            <br>\n            <amexio-row>\n              <amexio-column size=\"12\">\n                <amexio-row>\n                  <amexio-column [size]=\"1\"></amexio-column>\n\n                  <amexio-column [size]=\"3\">\n                    <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\" [filter]=\"'blur'\"\n                                  [title]=\"'blur'\" [title-position]=\"'bottom-left'\"></amexio-image>\n                  </amexio-column>\n                  <amexio-column [size]=\"1\"></amexio-column>\n\n                  <amexio-column [size]=\"3\">\n                    <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\" [filter]=\"'round'\"\n                                  [title]=\"'round'\" [title-position]=\"'centered'\"></amexio-image>\n                  </amexio-column>\n                  <amexio-column [size]=\"1\"></amexio-column>\n\n                  <amexio-column [size]=\"3\">\n                    <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\" [filter]=\"'small'\"\n                                  [title]=\"'small'\" [title-position]=\"'top-right'\"></amexio-image>\n                  </amexio-column>\n                </amexio-row>\n              </amexio-column>\n            </amexio-row>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n\n    <!-- Color Effect - Gray Scale, Invert, Sepia, Saturate, Brigtness, hue-->\n    <amexio-row>\n      <amexio-column size=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Color Effect\n          </amexio-header>\n          <amexio-body>\n            <amexio-row>\n              <amexio-column size=\"12\">\n                <amexio-row>\n                  <amexio-column [size]=\"1\"></amexio-column>\n                  <amexio-column [size]=\"3\">\n                    <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\" [title]=\"'sepia'\"\n                                  [filter]=\"'sepia'\" [title-position]=\"'top-left'\">\n                    </amexio-image>\n                  </amexio-column>\n                  <amexio-column [size]=\"1\"></amexio-column>\n                  <amexio-column [size]=\"3\">\n                    <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\" [filter]=\"'grayscale'\"\n                                  [title]=\"'grayscale'\" [title-position]=\"'centered'\">\n                    </amexio-image>\n                  </amexio-column>\n                  <amexio-column [size]=\"1\"></amexio-column>\n                  <amexio-column [size]=\"3\">\n                    <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\" [filter]=\"'invert'\"\n                                  [title]=\"'invert'\" [title-position]=\"'bottom-right'\">\n                    </amexio-image>\n                  </amexio-column>\n                </amexio-row>\n              </amexio-column>\n            </amexio-row>\n            <br>\n            <amexio-row>\n              <amexio-column size=\"12\">\n                <amexio-row>\n                  <amexio-column [size]=\"1\"></amexio-column>\n                  <amexio-column [size]=\"3\">\n                    <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\" [filter]=\"'Saturate'\"\n                                  [title]=\"'Saturate'\" [title-position]=\"'bottom-left'\">\n                    </amexio-image>\n                  </amexio-column>\n                  <amexio-column [size]=\"1\"></amexio-column>\n\n                  <amexio-column [size]=\"3\">\n                    <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\" [filter]=\"'brightness'\"\n                                  [title]=\"'brightness'\" [title-position]=\"'centered'\">\n                    </amexio-image>\n                  </amexio-column>\n                  <amexio-column [size]=\"1\"></amexio-column>\n\n                  <amexio-column [size]=\"3\">\n                    <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\" [filter]=\"'hua'\"\n                                  [title]=\"'hua'\" [title-position]=\"'top-right'\"></amexio-image>\n                  </amexio-column>\n                </amexio-row>\n              </amexio-column>\n            </amexio-row>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n\n    <!-- simple image-->\n    <amexio-row>\n      <amexio-column size=\"12\">\n        <amexio-card header=\"true\">\n          <amexio-header> Simple Image </amexio-header>\n          <amexio-body>\n            <amexio-row>\n              <amexio-column size=\"3\"></amexio-column>\n              <amexio-column size=\"6\">\n                <amexio-image [path]=\"'assets/images/soap-bubble.jpg'\" [tooltip]=\"'Image'\"></amexio-image>\n              </amexio-column>\n              <amexio-column size=\"3\"></amexio-column>\n            </amexio-row>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n  </amexio-api-demo>\n</amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/media/image/image.demo.ts":
/*!*******************************************!*\
  !*** ./src/app/media/image/image.demo.ts ***!
  \*******************************************/
/*! exports provided: ImageDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageDemo", function() { return ImageDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

var ImageDemo = /** @class */ (function () {
    function ImageDemo() {
    }
    ImageDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'image-demo',
            template: __webpack_require__(/*! ./image.demo.html */ "./src/app/media/image/image.demo.html")
        }),
        __metadata("design:paramtypes", [])
    ], ImageDemo);
    return ImageDemo;
}());



/***/ }),

/***/ "./src/app/media/media.module.ts":
/*!***************************************!*\
  !*** ./src/app/media/media.module.ts ***!
  \***************************************/
/*! exports provided: MediaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaModule", function() { return MediaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _media_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./media.routes */ "./src/app/media/media.routes.ts");
/* harmony import */ var _video_video_demo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./video/video.demo */ "./src/app/media/video/video.demo.ts");
/* harmony import */ var _image_image_demo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./image/image.demo */ "./src/app/media/image/image.demo.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










/**
 * Created by kedar on 31/1/19.
 */
var MediaModule = /** @class */ (function () {
    function MediaModule() {
    }
    MediaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_video_video_demo__WEBPACK_IMPORTED_MODULE_7__["VideoDemo"], _image_image_demo__WEBPACK_IMPORTED_MODULE_8__["ImageDemo"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"].forRoot(),
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AmexioWidgetModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forChild(_media_routes__WEBPACK_IMPORTED_MODULE_6__["MEDIA_ROUTE"]),
            ],
            providers: []
        })
    ], MediaModule);
    return MediaModule;
}());



/***/ }),

/***/ "./src/app/media/media.routes.ts":
/*!***************************************!*\
  !*** ./src/app/media/media.routes.ts ***!
  \***************************************/
/*! exports provided: MEDIA_ROUTE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_ROUTE", function() { return MEDIA_ROUTE; });
/* harmony import */ var _image_image_demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image/image.demo */ "./src/app/media/image/image.demo.ts");
/* harmony import */ var _video_video_demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video/video.demo */ "./src/app/media/video/video.demo.ts");


var MEDIA_ROUTE = [
    {
        path: 'image', component: _image_image_demo__WEBPACK_IMPORTED_MODULE_0__["ImageDemo"],
    },
    {
        path: 'video', component: _video_video_demo__WEBPACK_IMPORTED_MODULE_1__["VideoDemo"],
    }
];


/***/ }),

/***/ "./src/app/media/video/video.demo.html":
/*!*********************************************!*\
  !*** ./src/app/media/video/video.demo.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-api-structure  [url]=\"'assets/componentjson/media/video.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n      <amexio-column size=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Video Player\n          </amexio-header>\n          <amexio-body>\n            <amexio-row>\n              <amexio-video-player path=\"assets/videos/sample_bunny.mp4\"></amexio-video-player>\n            </amexio-row>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n  </amexio-api-demo>\n</amexio-api-structure>\n"

/***/ }),

/***/ "./src/app/media/video/video.demo.ts":
/*!*******************************************!*\
  !*** ./src/app/media/video/video.demo.ts ***!
  \*******************************************/
/*! exports provided: VideoDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoDemo", function() { return VideoDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

var VideoDemo = /** @class */ (function () {
    function VideoDemo() {
    }
    VideoDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'video-demo',
            template: __webpack_require__(/*! ./video.demo.html */ "./src/app/media/video/video.demo.html"),
        }),
        __metadata("design:paramtypes", [])
    ], VideoDemo);
    return VideoDemo;
}());



/***/ })

}]);
//# sourceMappingURL=media-media-module.js.map