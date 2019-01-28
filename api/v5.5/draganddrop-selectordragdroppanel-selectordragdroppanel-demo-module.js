(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["draganddrop-selectordragdroppanel-selectordragdroppanel-demo-module"],{

/***/ "./src/app/draganddrop/selectordragdroppanel/selectordragdroppanel.demo.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/draganddrop/selectordragdroppanel/selectordragdroppanel.demo.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ItemSelectorDragdropPanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemSelectorDragdropPanelModule", function() { return ItemSelectorDragdropPanelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _selectordragdroppanel_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selectordragdroppanel.demo */ "./src/app/draganddrop/selectordragdroppanel/selectordragdroppanel.demo.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Created by kedar on 11/9/18.
 */
var ItemSelectorDragdropPanelModule = /** @class */ (function () {
    function ItemSelectorDragdropPanelModule() {
    }
    ItemSelectorDragdropPanelModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_selectordragdroppanel_demo__WEBPACK_IMPORTED_MODULE_6__["ItemSelectorDragdropPanel"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '', component: _selectordragdroppanel_demo__WEBPACK_IMPORTED_MODULE_6__["ItemSelectorDragdropPanel"], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], ItemSelectorDragdropPanelModule);
    return ItemSelectorDragdropPanelModule;
}());



/***/ }),

/***/ "./src/app/draganddrop/selectordragdroppanel/selectordragdroppanel.demo.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/draganddrop/selectordragdroppanel/selectordragdroppanel.demo.ts ***!
  \*********************************************************************************/
/*! exports provided: ItemSelectorDragdropPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemSelectorDragdropPanel", function() { return ItemSelectorDragdropPanel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/**
 * Created by kedar on 11/9/18.
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


var ItemSelectorDragdropPanel = /** @class */ (function () {
    function ItemSelectorDragdropPanel(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
    }
    ItemSelectorDragdropPanel.prototype.getSelectedData = function (data) {
        this.selectedData = data;
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    ItemSelectorDragdropPanel.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        var responseData;
        //HTML FILE
        this.http.get('assets/data/code/draganddrop/selectordragdroppanel/form.html', { responseType: 'text' }).subscribe(function (data) {
            responseHtml = data;
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE 
        this.http.get('assets/data/code/draganddrop/selectordragdroppanel/form.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
        //JSON FILE
        this.http.get('assets/data/componentdata/selectordata.json', { responseType: 'text' }).subscribe(function (data) {
            responseData = data;
        }, function (error) {
        }, function () {
            _this.dataSource = responseData;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    ItemSelectorDragdropPanel.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    ItemSelectorDragdropPanel.prototype.getDropData = function (data) {
        data.event.dataTransfer.setData("dragdata", JSON.stringify(data.data));
    };
    ItemSelectorDragdropPanel.prototype.dragOver = function (event) {
        event.preventDefault();
    };
    ItemSelectorDragdropPanel.prototype.drop = function (event) {
        event.preventDefault();
        this.selectedPanelData = JSON.parse(event.dataTransfer.getData('dragdata'));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('item'),
        __metadata("design:type", Object)
    ], ItemSelectorDragdropPanel.prototype, "itemRef", void 0);
    ItemSelectorDragdropPanel = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'selectordragdrop-panel', template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n         Item Selector drag and drop to panel\n      </amexio-header>\n      <amexio-body>\n        <p>ItemSelector  and  functionlity\n        <p>ItemSelector is a specialized with drag and drop functionality. Drag and drop is possible from left to right and vice versa and item selector to other new panel</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n            <amexio-row>\n              <amexio-column [size]=\"12\">\n                <amexio-card >\n                  <amexio-body>\n                    <amexio-row>\n                      <amexio-column [size]=\"12\">\n                        <amexio-item-selector  [height]=\"250\" [display-field]=\"'countryName'\"\n                                              [value-field]=\"'countryId'\"  (selectedRecords)=\"getSelectedData($event)\"\n                                              [http-url]=\"'assets/data/componentdata/selectordragdrop.json'\"\n                                              [http-method]=\"'get'\" [data-reader]=\"'data'\" \n                                              [enable-drag]=\"true\" [enable-drop]=\"false\" \n                                              (onDrag) =\"getDropData($event)\"\n                                              [across-itemselector] = \"true\"\n                                                                                           >\n                        </amexio-item-selector>\n                      </amexio-column>\n                    </amexio-row>\n                    \n                    <amexio-row>\n                      <amexio-column [size]=\"12\">\n                        <amexio-panel (dragover)=\"dragOver($event)\" \n                            (drop)=\"drop($event)\" \n                            [header]=\"true\"\n                            [title]=\"'Panel'\" [expanded]=\"true\">\n                           <pre><code>{{selectedPanelData | json}}</code></pre>\n                        </amexio-panel>\n                       </amexio-column>\n                    </amexio-row>\n                  </amexio-body>\n                </amexio-card>\n              </amexio-column>\n            </amexio-row>\n          </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Properties<amexio-item-selector>\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/forms/selectordragdroppanel.json'\"\n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br>\n            <amexio-datagrid title=\"Events\" [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/forms/itemselector.json'\" [data-reader]=\"'events'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"20\"[data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"80\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n\n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n            <amexio-vertical-tab-view>\n              <amexio-tab title=\"HTML\" [active]=\"true\">\n                <ng-container *ngIf=\"htmlCode\">\n                  <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                  <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Type Script\">\n                <ng-container *ngIf=\"typeScriptCode\">\n                  <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Data Source\">\n                <ng-container *ngIf=\"dataSource\">\n                  <prism-block [code]=\"dataSource\" [language]=\"'json'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n            </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n          <p align=\"center\">Amexio Sandbox</p>\n          <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-itemselector-draganddrop-to-panel?embed=1&file=src/app/itemselectorTopanel/itemselector.demo.component.html&view=editor\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n    <!--<amexio-notification [data]=\"copyMsgArray\"></amexio-notification>-->\n\n  "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ItemSelectorDragdropPanel);
    return ItemSelectorDragdropPanel;
}());



/***/ })

}]);
//# sourceMappingURL=draganddrop-selectordragdroppanel-selectordragdroppanel-demo-module.js.map