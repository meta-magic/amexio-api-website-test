(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-Data-module"],{

/***/ "./src/app/data/Data.module.ts":
/*!*************************************!*\
  !*** ./src/app/data/Data.module.ts ***!
  \*************************************/
/*! exports provided: DataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataModule", function() { return DataModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _Data_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Data.routes */ "./src/app/data/Data.routes.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _itemselector_itemselector_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./itemselector/itemselector.demo */ "./src/app/data/itemselector/itemselector.demo.ts");
/* harmony import */ var _listbox_listbox_demo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listbox/listbox.demo */ "./src/app/data/listbox/listbox.demo.ts");
/* harmony import */ var _timeline_timeline_demo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./timeline/timeline.demo */ "./src/app/data/timeline/timeline.demo.ts");
/* harmony import */ var _spinner_spinner_demo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./spinner/spinner.demo */ "./src/app/data/spinner/spinner.demo.ts");
/* harmony import */ var _tree_simpletree_simpletree_demo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tree/simpletree/simpletree.demo */ "./src/app/data/tree/simpletree/simpletree.demo.ts");
/* harmony import */ var _tree_checkboxtree_checkboxtree_demo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tree/checkboxtree/checkboxtree.demo */ "./src/app/data/tree/checkboxtree/checkboxtree.demo.ts");
/* harmony import */ var _tree_collapsetree_collapsetree_demo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tree/collapsetree/collapsetree.demo */ "./src/app/data/tree/collapsetree/collapsetree.demo.ts");
/* harmony import */ var _tree_contextmenutree_contextmenutree_demo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tree/contextmenutree/contextmenutree.demo.component */ "./src/app/data/tree/contextmenutree/contextmenutree.demo.component.ts");
/* harmony import */ var _tree_filtertree_filtertree_demo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tree/filtertree/filtertree.demo */ "./src/app/data/tree/filtertree/filtertree.demo.ts");
/* harmony import */ var _tree_horizontaltree_horizontaltree_demo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tree/horizontaltree/horizontaltree.demo */ "./src/app/data/tree/horizontaltree/horizontaltree.demo.ts");
/* harmony import */ var _tree_treewithbadge_treewithbadge_demo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tree/treewithbadge/treewithbadge.demo.component */ "./src/app/data/tree/treewithbadge/treewithbadge.demo.component.ts");
/* harmony import */ var _tree_treedragdrop_treedragdrop_demo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tree/treedragdrop/treedragdrop.demo */ "./src/app/data/tree/treedragdrop/treedragdrop.demo.ts");
/* harmony import */ var _tree_treewithtemplate_treewithtemplate_demo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tree/treewithtemplate/treewithtemplate.demo */ "./src/app/data/tree/treewithtemplate/treewithtemplate.demo.ts");
/* harmony import */ var _simplegrid_simplegrid_demo__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./simplegrid/simplegrid.demo */ "./src/app/data/simplegrid/simplegrid.demo.ts");
/* harmony import */ var _customcolsize_customcolsizegrid_demo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./customcolsize/customcolsizegrid.demo */ "./src/app/data/customcolsize/customcolsizegrid.demo.ts");
/* harmony import */ var _filtergrid_filtergrid_demo__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./filtergrid/filtergrid.demo */ "./src/app/data/filtergrid/filtergrid.demo.ts");
/* harmony import */ var _globalfiltergrid_globalfilter_demo__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./globalfiltergrid/globalfilter.demo */ "./src/app/data/globalfiltergrid/globalfilter.demo.ts");
/* harmony import */ var _gridwithtemplate_gridwithtemplate_demo__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./gridwithtemplate/gridwithtemplate.demo */ "./src/app/data/gridwithtemplate/gridwithtemplate.demo.ts");
/* harmony import */ var _gridwithcontextmenu_gridwithcontextmenu_demo__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./gridwithcontextmenu/gridwithcontextmenu.demo */ "./src/app/data/gridwithcontextmenu/gridwithcontextmenu.demo.ts");
/* harmony import */ var _gridwithscroll_gridwithscroll_demo__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./gridwithscroll/gridwithscroll.demo */ "./src/app/data/gridwithscroll/gridwithscroll.demo.ts");
/* harmony import */ var _gridwithtoolbar_gridwithtoolbar_demo__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./gridwithtoolbar/gridwithtoolbar.demo */ "./src/app/data/gridwithtoolbar/gridwithtoolbar.demo.ts");
/* harmony import */ var _groupby_groupbygrid_demo__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./groupby/groupbygrid.demo */ "./src/app/data/groupby/groupbygrid.demo.ts");
/* harmony import */ var _headertemplate_headertemplate_demo__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./headertemplate/headertemplate.demo */ "./src/app/data/headertemplate/headertemplate.demo.ts");
/* harmony import */ var _treedatagrid_treedatagrid_demo__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./treedatagrid/treedatagrid.demo */ "./src/app/data/treedatagrid/treedatagrid.demo.ts");
/* harmony import */ var _treedatatemplate_treedatatemplate_demo__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./treedatatemplate/treedatatemplate.demo */ "./src/app/data/treedatatemplate/treedatatemplate.demo.ts");
/* harmony import */ var _serversidepagination_serversidepagination_demo__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./serversidepagination/serversidepagination.demo */ "./src/app/data/serversidepagination/serversidepagination.demo.ts");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//  Tree









// Grid














/**
 * Created by kedar on 4/2/19.
 */
var DataModule = /** @class */ (function () {
    function DataModule() {
    }
    DataModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_itemselector_itemselector_demo__WEBPACK_IMPORTED_MODULE_6__["ItemSelectorDemo"], _listbox_listbox_demo__WEBPACK_IMPORTED_MODULE_7__["ListBoxDemo"], _timeline_timeline_demo__WEBPACK_IMPORTED_MODULE_8__["TimelineDemoComponent"], _spinner_spinner_demo__WEBPACK_IMPORTED_MODULE_9__["AmexioSpinnerDemo"],
                _tree_simpletree_simpletree_demo__WEBPACK_IMPORTED_MODULE_10__["SimpleTreeDemo"], _tree_checkboxtree_checkboxtree_demo__WEBPACK_IMPORTED_MODULE_11__["CheckboxTreeDemo"], _tree_collapsetree_collapsetree_demo__WEBPACK_IMPORTED_MODULE_12__["CollapseTreeDemo"], _tree_contextmenutree_contextmenutree_demo_component__WEBPACK_IMPORTED_MODULE_13__["ContextMenuTreeDemo"], _tree_filtertree_filtertree_demo__WEBPACK_IMPORTED_MODULE_14__["FilterTreeDemo"],
                _tree_horizontaltree_horizontaltree_demo__WEBPACK_IMPORTED_MODULE_15__["HorizontalTreeDemo"], _tree_treewithbadge_treewithbadge_demo_component__WEBPACK_IMPORTED_MODULE_16__["TreeWithBadgeDemo"], _tree_treedragdrop_treedragdrop_demo__WEBPACK_IMPORTED_MODULE_17__["DragDropTreeDemo"], _tree_treewithtemplate_treewithtemplate_demo__WEBPACK_IMPORTED_MODULE_18__["TreeWithTemplateDemo"],
                _simplegrid_simplegrid_demo__WEBPACK_IMPORTED_MODULE_19__["SimpleGridDemo"], _customcolsize_customcolsizegrid_demo__WEBPACK_IMPORTED_MODULE_20__["CustomColSizeDemo"], _filtergrid_filtergrid_demo__WEBPACK_IMPORTED_MODULE_21__["FilterGridDemo"], _globalfiltergrid_globalfilter_demo__WEBPACK_IMPORTED_MODULE_22__["GlobalFilterDemo"], _gridwithtemplate_gridwithtemplate_demo__WEBPACK_IMPORTED_MODULE_23__["GridWithTemplateDemo"],
                _gridwithcontextmenu_gridwithcontextmenu_demo__WEBPACK_IMPORTED_MODULE_24__["GridWithContextMenuDemo"], _gridwithscroll_gridwithscroll_demo__WEBPACK_IMPORTED_MODULE_25__["GridWithScrollDemo"], _gridwithtoolbar_gridwithtoolbar_demo__WEBPACK_IMPORTED_MODULE_26__["GridWithToolBarDemo"], _groupby_groupbygrid_demo__WEBPACK_IMPORTED_MODULE_27__["GroupByGridDemo"], _headertemplate_headertemplate_demo__WEBPACK_IMPORTED_MODULE_28__["HeaderTemplateDemo"],
                _treedatagrid_treedatagrid_demo__WEBPACK_IMPORTED_MODULE_29__["TreeDataGridDemo"], _treedatatemplate_treedatatemplate_demo__WEBPACK_IMPORTED_MODULE_30__["TreeDataTemplateDemo"], _serversidepagination_serversidepagination_demo__WEBPACK_IMPORTED_MODULE_31__["ServerSidePaginationDemo"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_32__["AmexioWidgetModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_Data_routes__WEBPACK_IMPORTED_MODULE_4__["DATA_ROUTE"]),
            ],
            providers: []
        })
    ], DataModule);
    return DataModule;
}());



/***/ }),

/***/ "./src/app/data/Data.routes.ts":
/*!*************************************!*\
  !*** ./src/app/data/Data.routes.ts ***!
  \*************************************/
/*! exports provided: DATA_ROUTE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_ROUTE", function() { return DATA_ROUTE; });
/* harmony import */ var _itemselector_itemselector_demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itemselector/itemselector.demo */ "./src/app/data/itemselector/itemselector.demo.ts");
/* harmony import */ var _listbox_listbox_demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listbox/listbox.demo */ "./src/app/data/listbox/listbox.demo.ts");
/* harmony import */ var _timeline_timeline_demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeline/timeline.demo */ "./src/app/data/timeline/timeline.demo.ts");
/* harmony import */ var _spinner_spinner_demo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spinner/spinner.demo */ "./src/app/data/spinner/spinner.demo.ts");
/* harmony import */ var _tree_simpletree_simpletree_demo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tree/simpletree/simpletree.demo */ "./src/app/data/tree/simpletree/simpletree.demo.ts");
/* harmony import */ var _tree_checkboxtree_checkboxtree_demo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tree/checkboxtree/checkboxtree.demo */ "./src/app/data/tree/checkboxtree/checkboxtree.demo.ts");
/* harmony import */ var _tree_collapsetree_collapsetree_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tree/collapsetree/collapsetree.demo */ "./src/app/data/tree/collapsetree/collapsetree.demo.ts");
/* harmony import */ var _tree_contextmenutree_contextmenutree_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tree/contextmenutree/contextmenutree.demo.component */ "./src/app/data/tree/contextmenutree/contextmenutree.demo.component.ts");
/* harmony import */ var _tree_filtertree_filtertree_demo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tree/filtertree/filtertree.demo */ "./src/app/data/tree/filtertree/filtertree.demo.ts");
/* harmony import */ var _tree_horizontaltree_horizontaltree_demo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tree/horizontaltree/horizontaltree.demo */ "./src/app/data/tree/horizontaltree/horizontaltree.demo.ts");
/* harmony import */ var _tree_treewithbadge_treewithbadge_demo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tree/treewithbadge/treewithbadge.demo.component */ "./src/app/data/tree/treewithbadge/treewithbadge.demo.component.ts");
/* harmony import */ var _tree_treedragdrop_treedragdrop_demo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tree/treedragdrop/treedragdrop.demo */ "./src/app/data/tree/treedragdrop/treedragdrop.demo.ts");
/* harmony import */ var _tree_treewithtemplate_treewithtemplate_demo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tree/treewithtemplate/treewithtemplate.demo */ "./src/app/data/tree/treewithtemplate/treewithtemplate.demo.ts");
/* harmony import */ var _simplegrid_simplegrid_demo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./simplegrid/simplegrid.demo */ "./src/app/data/simplegrid/simplegrid.demo.ts");
/* harmony import */ var _customcolsize_customcolsizegrid_demo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./customcolsize/customcolsizegrid.demo */ "./src/app/data/customcolsize/customcolsizegrid.demo.ts");
/* harmony import */ var _filtergrid_filtergrid_demo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./filtergrid/filtergrid.demo */ "./src/app/data/filtergrid/filtergrid.demo.ts");
/* harmony import */ var _globalfiltergrid_globalfilter_demo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./globalfiltergrid/globalfilter.demo */ "./src/app/data/globalfiltergrid/globalfilter.demo.ts");
/* harmony import */ var _gridwithtemplate_gridwithtemplate_demo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./gridwithtemplate/gridwithtemplate.demo */ "./src/app/data/gridwithtemplate/gridwithtemplate.demo.ts");
/* harmony import */ var _gridwithcontextmenu_gridwithcontextmenu_demo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./gridwithcontextmenu/gridwithcontextmenu.demo */ "./src/app/data/gridwithcontextmenu/gridwithcontextmenu.demo.ts");
/* harmony import */ var _gridwithscroll_gridwithscroll_demo__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./gridwithscroll/gridwithscroll.demo */ "./src/app/data/gridwithscroll/gridwithscroll.demo.ts");
/* harmony import */ var _gridwithtoolbar_gridwithtoolbar_demo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./gridwithtoolbar/gridwithtoolbar.demo */ "./src/app/data/gridwithtoolbar/gridwithtoolbar.demo.ts");
/* harmony import */ var _groupby_groupbygrid_demo__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./groupby/groupbygrid.demo */ "./src/app/data/groupby/groupbygrid.demo.ts");
/* harmony import */ var _headertemplate_headertemplate_demo__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./headertemplate/headertemplate.demo */ "./src/app/data/headertemplate/headertemplate.demo.ts");
/* harmony import */ var _treedatagrid_treedatagrid_demo__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./treedatagrid/treedatagrid.demo */ "./src/app/data/treedatagrid/treedatagrid.demo.ts");
/* harmony import */ var _treedatatemplate_treedatatemplate_demo__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./treedatatemplate/treedatatemplate.demo */ "./src/app/data/treedatatemplate/treedatatemplate.demo.ts");
/* harmony import */ var _serversidepagination_serversidepagination_demo__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./serversidepagination/serversidepagination.demo */ "./src/app/data/serversidepagination/serversidepagination.demo.ts");




//  Tree









// Grid













var DATA_ROUTE = [
    {
        path: 'itemselector-demo', component: _itemselector_itemselector_demo__WEBPACK_IMPORTED_MODULE_0__["ItemSelectorDemo"],
    },
    {
        path: 'listbox-demo', component: _listbox_listbox_demo__WEBPACK_IMPORTED_MODULE_1__["ListBoxDemo"],
    },
    {
        path: 'timeline-demo', component: _timeline_timeline_demo__WEBPACK_IMPORTED_MODULE_2__["TimelineDemoComponent"],
    },
    {
        path: 'amexio-spinner-demo', component: _spinner_spinner_demo__WEBPACK_IMPORTED_MODULE_3__["AmexioSpinnerDemo"],
    },
    // Tree demo
    {
        path: 'simple-tree-demo', component: _tree_simpletree_simpletree_demo__WEBPACK_IMPORTED_MODULE_4__["SimpleTreeDemo"],
    },
    {
        path: 'collapsetree-demo', component: _tree_collapsetree_collapsetree_demo__WEBPACK_IMPORTED_MODULE_6__["CollapseTreeDemo"],
    },
    {
        path: 'template-tree-demo', component: _tree_treewithtemplate_treewithtemplate_demo__WEBPACK_IMPORTED_MODULE_12__["TreeWithTemplateDemo"],
    },
    {
        path: 'filter-tree-demo', component: _tree_filtertree_filtertree_demo__WEBPACK_IMPORTED_MODULE_8__["FilterTreeDemo"],
    },
    {
        path: 'checkbox-tree-demo', component: _tree_checkboxtree_checkboxtree_demo__WEBPACK_IMPORTED_MODULE_5__["CheckboxTreeDemo"],
    },
    {
        path: 'dragdrop-tree-demo', component: _tree_treedragdrop_treedragdrop_demo__WEBPACK_IMPORTED_MODULE_11__["DragDropTreeDemo"],
    },
    {
        path: 'badge-tree-demo', component: _tree_treewithbadge_treewithbadge_demo_component__WEBPACK_IMPORTED_MODULE_10__["TreeWithBadgeDemo"],
    },
    {
        path: 'context-menu-tree-demo', component: _tree_contextmenutree_contextmenutree_demo_component__WEBPACK_IMPORTED_MODULE_7__["ContextMenuTreeDemo"],
    },
    {
        path: 'horizontal-tree-demo', component: _tree_horizontaltree_horizontaltree_demo__WEBPACK_IMPORTED_MODULE_9__["HorizontalTreeDemo"],
    },
    // Grid Demo
    {
        path: 'simplegrid-demo', component: _simplegrid_simplegrid_demo__WEBPACK_IMPORTED_MODULE_13__["SimpleGridDemo"],
    },
    {
        path: 'custom-col-grid-demo', component: _customcolsize_customcolsizegrid_demo__WEBPACK_IMPORTED_MODULE_14__["CustomColSizeDemo"],
    },
    {
        path: 'filter-grid-demo', component: _filtergrid_filtergrid_demo__WEBPACK_IMPORTED_MODULE_15__["FilterGridDemo"],
    },
    {
        path: 'global-filter-grid-demo', component: _globalfiltergrid_globalfilter_demo__WEBPACK_IMPORTED_MODULE_16__["GlobalFilterDemo"],
    },
    {
        path: 'template-grid-demo', component: _gridwithtemplate_gridwithtemplate_demo__WEBPACK_IMPORTED_MODULE_17__["GridWithTemplateDemo"],
    },
    {
        path: 'scroll-grid-demo', component: _gridwithscroll_gridwithscroll_demo__WEBPACK_IMPORTED_MODULE_19__["GridWithScrollDemo"],
    },
    {
        path: 'gridwithtoolbar-demo', component: _gridwithtoolbar_gridwithtoolbar_demo__WEBPACK_IMPORTED_MODULE_20__["GridWithToolBarDemo"],
    },
    {
        path: 'groupby-grid-demo', component: _groupby_groupbygrid_demo__WEBPACK_IMPORTED_MODULE_21__["GroupByGridDemo"],
    },
    {
        path: 'header-template-demo', component: _headertemplate_headertemplate_demo__WEBPACK_IMPORTED_MODULE_22__["HeaderTemplateDemo"],
    },
    {
        path: 'tree-data-grid-demo', component: _treedatagrid_treedatagrid_demo__WEBPACK_IMPORTED_MODULE_23__["TreeDataGridDemo"],
    },
    {
        path: 'tree-data-template-demo', component: _treedatatemplate_treedatatemplate_demo__WEBPACK_IMPORTED_MODULE_24__["TreeDataTemplateDemo"],
    },
    {
        path: 'grid-context-menu-demo', component: _gridwithcontextmenu_gridwithcontextmenu_demo__WEBPACK_IMPORTED_MODULE_18__["GridWithContextMenuDemo"],
    },
    {
        path: 'server-side-pagination-demo', component: _serversidepagination_serversidepagination_demo__WEBPACK_IMPORTED_MODULE_25__["ServerSidePaginationDemo"],
    }
];


/***/ }),

/***/ "./src/app/data/customcolsize/customcolsizegrid.demo.html":
/*!****************************************************************!*\
  !*** ./src/app/data/customcolsize/customcolsizegrid.demo.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/data/grid.json'\">\n  <amexio-api-demo>\n  \n    <amexio-row>\n      <amexio-column size=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Data Grid With Custom Column Size\n          </amexio-header>\n          <amexio-body>\n            <amexio-datagrid title=\"Country Grid\" [http-method]=\"'get'\" [http-url]=\"'assets/data/componentdata/gridtemplate.json'\"\n              [data-reader]=\"'data'\" [page-size]=\"10\" [enable-data-filter]=\"false\" (rowSelect)=\"getRowData($event)\">\n              <amexio-data-table-column [width]=\"70\" [data-index]=\"'name_official'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                [text]=\"'Name'\">\n                <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                  <span>\n                    <amexio-image [path]=\"'assets/images/flags/flags/'+row.flag_32\"></amexio-image>&nbsp;{{row.name}} (\n                    {{row.name_official}} )\n                  </span>\n                </ng-template>\n              </amexio-data-table-column>\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'latitude'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                [text]=\"'Latitude'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'longitude'\" [data-type]=\"'number'\" [hidden]=\"false\"\n                [text]=\"'Longitude'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <p><b>Clicked row data :</b> {{clickedRowData | json}}</p>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n\n  </amexio-api-demo>\n</amexio-api-structure>"

/***/ }),

/***/ "./src/app/data/customcolsize/customcolsizegrid.demo.ts":
/*!**************************************************************!*\
  !*** ./src/app/data/customcolsize/customcolsizegrid.demo.ts ***!
  \**************************************************************/
/*! exports provided: CustomColSizeDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomColSizeDemo", function() { return CustomColSizeDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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



var CustomColSizeDemo = /** @class */ (function () {
    function CustomColSizeDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
    }
    CustomColSizeDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    CustomColSizeDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Data Grid With Custom Column Size';
        this.customSourceData.description = 'Data grid component to render large amount of data-set with various options like sorting in ascending or descending order, client-side pagination, column hide/unhide, single/multi selection, user define template for rendering for column header and column data, displaying summation of numeric column.';
        this.customSourceData.sourceMetadata.htmlUrl = 'data/customcolsize/customcolsize.html';
        this.customSourceData.sourceMetadata.tsUrl = 'data/customcolsize/customcolsize.text';
        this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/gridtemplate.json';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-column-sizing-grid?embed=1&file=app/grid/columnsize/columnsize.demo.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    CustomColSizeDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    CustomColSizeDemo.prototype.getRowData = function (data) {
        this.clickedRowData = data;
    };
    CustomColSizeDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-col-size-grid-demo',
            template: __webpack_require__(/*! ./customcolsizegrid.demo.html */ "./src/app/data/customcolsize/customcolsizegrid.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CustomColSizeDemo);
    return CustomColSizeDemo;
}());



/***/ }),

/***/ "./src/app/data/filtergrid/filtergrid.demo.html":
/*!******************************************************!*\
  !*** ./src/app/data/filtergrid/filtergrid.demo.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/data/grid.json'\">\n  <amexio-api-demo>\n  \n    <amexio-row>\n      <amexio-column size=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n             Data Grid With Filter \n          </amexio-header>\n          <amexio-body>\n            <amexio-datagrid\n              [title]=\"'Employee Data'\"\n              [page-size] = \"10\"\n              [data-reader]=\"'data'\"\n              [http-url]=\"'assets/data/componentdata/datagridgroupby.json'\"\n              [http-method]=\"'get'\"\n              [enable-data-filter]=\"true\"\n              (rowSelect)=\"onRowSelect($event)\">\n              <amexio-data-table-column [data-index]=\"'preferredFullName'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Full Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'jobTitle'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Job Title'\">\n              </amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'salary'\" [data-type]=\"'number'\" [hidden]=\"false\" [text]=\"'Salary'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <p><b>Selected row data : </b>{{selectedData | json}}</p>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n\n    </amexio-api-demo>\n    </amexio-api-structure>"

/***/ }),

/***/ "./src/app/data/filtergrid/filtergrid.demo.ts":
/*!****************************************************!*\
  !*** ./src/app/data/filtergrid/filtergrid.demo.ts ***!
  \****************************************************/
/*! exports provided: FilterGridDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterGridDemo", function() { return FilterGridDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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



var FilterGridDemo = /** @class */ (function () {
    function FilterGridDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
    }
    FilterGridDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    FilterGridDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Data Grid With Filter';
        this.customSourceData.description = 'Data grid component to render large amount of data-set with various options like sorting in ascending or descending order, client-side pagination, column hide/unhide, single/multi selection,Filtering(enable only for string and number type data) user define template for rendering for column header and column data, displaying summation of numeric column.';
        this.customSourceData.sourceMetadata.htmlUrl = 'data/filter/filter.html';
        this.customSourceData.sourceMetadata.tsUrl = 'data/filter/filter.text';
        this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/datagridgroupby.json';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-global-filter-grid?embed=1&file=app/grid/filtergrid/filtergrid.demo.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    FilterGridDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    FilterGridDemo.prototype.onRowSelect = function (data) {
        this.selectedData = data;
    };
    FilterGridDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'filtergrid-demo',
            template: __webpack_require__(/*! ./filtergrid.demo.html */ "./src/app/data/filtergrid/filtergrid.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FilterGridDemo);
    return FilterGridDemo;
}());



/***/ }),

/***/ "./src/app/data/globalfiltergrid/globalfilter.demo.html":
/*!**************************************************************!*\
  !*** ./src/app/data/globalfiltergrid/globalfilter.demo.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/data/grid.json'\">\n  <amexio-api-demo>\n  \n<amexio-row>\n      <amexio-column size=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n             Data Grid with Global Filter \n          </amexio-header>\n          <amexio-body>\n          <amexio-datagrid\n          [global-filter]=\"true\" title=\"Country Grid\"   [http-method]=\"'get'\" [http-url]=\"'assets/data/componentdata/datagrid.json'\" [data-reader]=\"'data'\"  [page-size] = \"10\" (rowSelect)=\"getRowData($event)\">\n          <amexio-data-table-column [data-index]=\"'name_official'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\">\n          </amexio-data-table-column>\n          <amexio-data-table-column [data-index]=\"'code3l'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Country Code'\">\n          </amexio-data-table-column>\n          <amexio-data-table-column [data-index]=\"'latitude'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Latitude'\">\n          </amexio-data-table-column>\n          <amexio-data-table-column [data-index]=\"'longitude'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Longitude'\"></amexio-data-table-column>\n        </amexio-datagrid>\n            <p><b>Selected row data : </b>{{clickedRowData | json}}</p>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n\n    </amexio-api-demo>\n    </amexio-api-structure>"

/***/ }),

/***/ "./src/app/data/globalfiltergrid/globalfilter.demo.ts":
/*!************************************************************!*\
  !*** ./src/app/data/globalfiltergrid/globalfilter.demo.ts ***!
  \************************************************************/
/*! exports provided: GlobalFilterDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalFilterDemo", function() { return GlobalFilterDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
/**
 * Created by rashmi on 30/5/18.
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



var GlobalFilterDemo = /** @class */ (function () {
    function GlobalFilterDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
    }
    GlobalFilterDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    GlobalFilterDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Data Grid With Global Filter';
        this.customSourceData.description = 'Data grid component to render large amount of data-set with various options like sorting in ascending or descending order, client-side pagination, column hide/unhide, single/multi selection,Common Filtering for all columns(enable only for string and number)(Filtering Criteria: starts with, ends with and contains) user define template for rendering for column header and column data, displaying summation of numeric column.';
        this.customSourceData.sourceMetadata.htmlUrl = 'data/globalfiltergrid/globalfiltergrid.html';
        this.customSourceData.sourceMetadata.tsUrl = 'data/globalfiltergrid/globalfiltergrid.text';
        this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/gridtemplate.json';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-global-filter-grid?embed=1&file=app/grid/filtergrid/filtergrid.demo.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    GlobalFilterDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    GlobalFilterDemo.prototype.getRowData = function (data) {
        this.clickedRowData = data;
    };
    GlobalFilterDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'global-filter-grid',
            template: __webpack_require__(/*! ./globalfilter.demo.html */ "./src/app/data/globalfiltergrid/globalfilter.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GlobalFilterDemo);
    return GlobalFilterDemo;
}());



/***/ }),

/***/ "./src/app/data/gridwithcontextmenu/gridwithcontextmenu.demo.html":
/*!************************************************************************!*\
  !*** ./src/app/data/gridwithcontextmenu/gridwithcontextmenu.demo.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   \n   <amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/data/grid.json'\">\n    <amexio-api-demo>\n    \n   <amexio-row>\n      <amexio-column size=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n             Data Grid with Context Menu \n          </amexio-header>\n          <amexio-body>\n            <amexio-datagrid\n              [enable-column-fiter]=\"true\" [context-menu]=\"contextMenuRowData\" [height]=\"200\" title=\"Country Grid\" [enable-checkbox]=\"false\"  [http-method]=\"'get'\" [http-url]=\"'assets/data/componentdata/country.json'\" [data-reader]=\"'data'\"  [page-size] = \"10\">\n              <amexio-data-table-column [data-index]=\"'countryName'\" \n                                        [data-type]=\"'string'\" \n                                        [context-menu]=\"contextMenuColData\"\n                                        [hidden]=\"false\" [text]=\"'Name'\">\n              </amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'countryCode1'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Code'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'currencyName'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Currency'\"></amexio-data-table-column>\n            </amexio-datagrid>\n         <!--   <p><b>Selected row data : </b>{{selectedData | json}}</p>-->\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n    </amexio-api-demo>\n    </amexio-api-structure>"

/***/ }),

/***/ "./src/app/data/gridwithcontextmenu/gridwithcontextmenu.demo.ts":
/*!**********************************************************************!*\
  !*** ./src/app/data/gridwithcontextmenu/gridwithcontextmenu.demo.ts ***!
  \**********************************************************************/
/*! exports provided: GridWithContextMenuDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridWithContextMenuDemo", function() { return GridWithContextMenuDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
/**
 * Created by rashmi on 29/6/18.
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



var GridWithContextMenuDemo = /** @class */ (function () {
    function GridWithContextMenuDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
        this.contextMenuColData =
            [{ "text": "Add State", "icon": "fa fa-plus", "disabled": true }, { "text": "Edit", "icon": "", "seperator": true },
                { "text": "Delete", "icon": "" }];
        this.contextMenuRowData = [{ "text": "Reload", "icon": "fa fa-refresh", "disabled": false, "seperator": false }, { "text": "Save", "icon": "fa fa-save", "seperator": false },
            { "text": "Delete", "icon": "fa fa-close" }];
    }
    GridWithContextMenuDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    GridWithContextMenuDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Data Grid With Context Menu';
        this.customSourceData.description = 'Data grid component to render large amount of data-set with various options like sorting in ascending or descending order, client-side pagination, column hide/unhide, single/multi selection, user define template for rendering for column header and column data, displaying summation of numeric column and with context menu(right-click mouse operation).';
        this.customSourceData.sourceMetadata.htmlUrl = 'data/contextmenugrid/contextmenugrid.html';
        this.customSourceData.sourceMetadata.tsUrl = 'data/contextmenugrid/contextmenugrid.text';
        this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/country.json';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-grid-contextmenu?embed=1&file=src/app/contextualmenu/grid/grid.demo.component.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    GridWithContextMenuDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    GridWithContextMenuDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'grid-context-menu-demo',
            template: __webpack_require__(/*! ./gridwithcontextmenu.demo.html */ "./src/app/data/gridwithcontextmenu/gridwithcontextmenu.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GridWithContextMenuDemo);
    return GridWithContextMenuDemo;
}());



/***/ }),

/***/ "./src/app/data/gridwithscroll/gridwithscroll.demo.html":
/*!**************************************************************!*\
  !*** ./src/app/data/gridwithscroll/gridwithscroll.demo.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   \n   <amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/data/grid.json'\">\n    <amexio-api-demo>\n    \n   \n   <amexio-row>\n      <amexio-column size=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n             Data Grid with scroll \n          </amexio-header>\n          <amexio-body>\n            <amexio-datagrid\n              [enable-column-fiter]=\"true\" [height]=\"200\" title=\"Country Grid\" [enable-checkbox]=\"false\"  [http-method]=\"'get'\" [http-url]=\"'assets/data/componentdata/country.json'\" [data-reader]=\"'data'\"  [page-size] = \"10\">\n              <amexio-data-table-column [data-index]=\"'countryName'\" \n                                        [data-type]=\"'string'\" \n                                        [hidden]=\"false\" [text]=\"'Name'\" (selectedRowData)=\"getSelectedData($event)\">\n              </amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'countryCode1'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Code'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'currencyName'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Currency'\"></amexio-data-table-column>\n            </amexio-datagrid>\n         <!--   <p><b>Selected row data : </b>{{selectedData | json}}</p>-->\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n\n    </amexio-api-demo>\n    </amexio-api-structure>"

/***/ }),

/***/ "./src/app/data/gridwithscroll/gridwithscroll.demo.ts":
/*!************************************************************!*\
  !*** ./src/app/data/gridwithscroll/gridwithscroll.demo.ts ***!
  \************************************************************/
/*! exports provided: GridWithScrollDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridWithScrollDemo", function() { return GridWithScrollDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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



var GridWithScrollDemo = /** @class */ (function () {
    function GridWithScrollDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
    }
    GridWithScrollDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    GridWithScrollDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Data Grid With Scroll';
        this.customSourceData.description = 'Data grid component to render large amount of data-set with various options like sorting in ascending or descending order, client-side pagination, column hide/unhide, single/multi selection, user define template for rendering for column header and column data, displaying summation of numeric column.';
        this.customSourceData.sourceMetadata.htmlUrl = 'data/scrollgrid/scrollgrid.html';
        this.customSourceData.sourceMetadata.tsUrl = 'data/scrollgrid/scrollgrid.text';
        this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/country.json';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-grid-with-scroll?embed=1&file=app/grid/gridwithscroll/gridwithscroll.demo.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    GridWithScrollDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    GridWithScrollDemo.prototype.getSelectedData = function (data) {
        this.selectedData = data;
    };
    GridWithScrollDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'grid-scroll-demo',
            template: __webpack_require__(/*! ./gridwithscroll.demo.html */ "./src/app/data/gridwithscroll/gridwithscroll.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GridWithScrollDemo);
    return GridWithScrollDemo;
}());



/***/ }),

/***/ "./src/app/data/gridwithtemplate/gridwithtemplate.demo.html":
/*!******************************************************************!*\
  !*** ./src/app/data/gridwithtemplate/gridwithtemplate.demo.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "        \n   <amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/data/grid.json'\">\n    <amexio-api-demo>\n       \n       <!--1-->\n        <amexio-datagrid [enable-checkbox]=\"false\" title=\"Invoice Details\" [http-method]=\"'get'\" [http-url]=\"'assets/data/componentdata/templategrid.json'\"\n            [data-reader]=\"'response.data'\" [page-size]=\"10\" [enable-data-filter]=\"false\">\n            <amexio-data-table-column [width]=\"5\" [data-index]=\"'No'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'No.'\">\n                <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                    <amexio-label size=\"small\" font-color=\"grey\">\n                        {{row.No}}\n                    </amexio-label>\n                </ng-template>\n            </amexio-data-table-column>\n            <amexio-data-table-column [width]=\"10\" [data-index]=\"'Invoice Subject'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Invoice Subject'\">\n            </amexio-data-table-column>\n            <amexio-data-table-column [width]=\"8\" [data-index]=\"'client'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Client'\">\n        \n            </amexio-data-table-column>\n            <amexio-data-table-column [width]=\"6\" [data-index]=\"'Vat No.'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Vat No.'\">\n        \n            </amexio-data-table-column>\n            <amexio-data-table-column [width]=\"8\" [data-index]=\"'Created'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Created'\">\n        \n            </amexio-data-table-column>\n            <amexio-data-table-column [width]=\"10\" [data-index]=\"'Status'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Status'\">\n                <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                    <amexio-label class=\"fa fa-circle fa-lg\" [ngClass]=\"{'green': row.Status== 'Paid' , 'yellow': row.Status =='Pending' , 'red' : row.Status=='Paid Today'}\"></amexio-label>\n                    &nbsp;{{row.Status}}\n                </ng-template>\n            </amexio-data-table-column>\n            <amexio-data-table-column [width]=\"5\" [data-index]=\"'Price'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Price'\">\n        \n            </amexio-data-table-column>\n            <amexio-data-table-column [width]=\"15\" [data-index]=\"''\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"''\">\n                <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                    <amexio-row>\n                        <amexio-column [size]=\"4\">\n                            <amexio-button [label]=\"'Manage'\" [size]=\"'small'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Manage'\">\n                            </amexio-button>\n                        </amexio-column>\n                        <amexio-column [size]=\"5\">\n                            <amexio-btn-dropdown [label]=\"'Action'\" [type]=\"'theme-backgroundcolor'\" [size]=\"'small'\">\n                                <amexio-btn-dropdown-item [label]=\"'Accept'\">\n                                </amexio-btn-dropdown-item>\n                                <amexio-btn-dropdown-item [label]=\"'Reject'\">\n                                </amexio-btn-dropdown-item>\n                            </amexio-btn-dropdown>\n                        </amexio-column>\n                        <amexio-column [size]=\"3\">\n                            <amexio-image style=\"color:grey;\" [icon-class]=\"'fa fa-pencil fa-2x'\"></amexio-image>\n                        </amexio-column>\n                    </amexio-row>\n                </ng-template>\n            </amexio-data-table-column>\n        \n        </amexio-datagrid>\n        \n        <!--2-->\n        <br>\n        <amexio-datagrid [enable-checkbox]=\"false\" title=\"User Activity Details\" [http-method]=\"'get'\" [http-url]=\"'assets/data/componentdata/datagridtemplate.json'\"\n            [data-reader]=\"'response.data'\" [page-size]=\"10\" [enable-data-filter]=\"false\">\n            <amexio-data-table-column [width]=\"40\" [data-index]=\"'User'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'USER'\">\n                <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                    <amexio-row>\n                        <amexio-column [size]=\"3\">\n                            <amexio-image [path]=\"'assets/images/profile/'+row.profile\" [c-class]=\"'image-round'\">\n                            </amexio-image>\n                         </amexio-column>\n                        <amexio-column [size]=\"9\">\n                            <amexio-label size=\"small\">\n                                {{row.User}}\n                            </amexio-label>\n                            <br>\n                            <amexio-label size=\"small\" font-color=\"grey\">\n                                Registered:{{row.Date}}\n                            </amexio-label>\n                        </amexio-column>\n                    </amexio-row>\n                </ng-template>\n            </amexio-data-table-column>\n            <amexio-data-table-column [width]=\"40\" [data-index]=\"'Usage'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'USAGE'\">\n                <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                    <amexio-label>{{row.Usage}}%</amexio-label>\n        \n                    <amexio-progress-bar [height]=\"'10'\" [current-value]=\"row.Usage\" [infinite]=\"false\" [type]=\"getGridTemplateData(row)\"></amexio-progress-bar>\n        \n                    <amexio-label size=\"small\" font-color=\"grey\">\n                        {{row.usageFromDate}}-{{row.usageToDate}}\n                    </amexio-label>\n        \n                </ng-template>\n            </amexio-data-table-column>\n            <amexio-data-table-column [width]=\"20\" [data-index]=\"'Payment'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'PAYMENT'\">\n                <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                    <amexio-label>\n                        <amexio-image [height]=\"'59.75px'\" [width]=\"'59.75px'\" [path]=\"'assets/images/'+row.Payment\" [c-class]=\"'image-round'\">\n                        </amexio-image>\n                     </amexio-label>\n                </ng-template>\n            </amexio-data-table-column>\n            <amexio-data-table-column [width]=\"20\" [data-index]=\"'Activity'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'ACTIVITY'\">\n                <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                    <amexio-label size=\"small\" font-color=\"grey\">\n                        Last login\n                    </amexio-label>\n                    <br>\n                    <amexio-label size=\"small\">\n                        {{row.Activity}}\n                    </amexio-label>\n        \n        \n                </ng-template>\n            </amexio-data-table-column>\n            <amexio-data-table-column [width]=\"10\" [data-index]=\"''\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"''\">\n                <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n        \n\n                        <amexio-image  style=\"color:grey;\" [icon-class]=\"'fa fa-pencil  fa-2x'\"></amexio-image>\n\n        \n                </ng-template>\n            </amexio-data-table-column>\n        </amexio-datagrid>\n        \n        <!--3-->\n        <br>\n        <amexio-datagrid title=\"Country Grid\" [http-method]=\"'get'\" [http-url]=\"'assets/data/componentdata/gridtemplate.json'\" [data-reader]=\"'data'\"\n            [page-size]=\"10\" [enable-data-filter]=\"false\" (rowSelect)=\"getRowData($event)\">\n            <amexio-data-table-column [width]=\"70\" [data-index]=\"'name_official'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\">\n                <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                    <amexio-label class=\"datagrid-template\">\n                        <amexio-label>\n                            <amexio-image [width]=\"100\" [path]=\"'assets/images/flags/flags/'+row.flag_32\"></amexio-image>\n                        </amexio-label>\n                        <amexio-label>{{row.name}}</amexio-label>\n        \n                        <amexio-label >( {{row.name_official}} )</amexio-label>\n                    </amexio-label>\n                </ng-template>\n            </amexio-data-table-column>\n            <amexio-data-table-column [width]=\"20\" [data-index]=\"'latitude'\" [data-type]=\"'number'\" [hidden]=\"false\" [text]=\"'Latitude'\"></amexio-data-table-column>\n            <amexio-data-table-column [width]=\"20\" [data-index]=\"'longitude'\" [data-type]=\"'number'\" [hidden]=\"false\" [text]=\"'Longitude'\"></amexio-data-table-column>\n        </amexio-datagrid>\n        <p>\n            <b>Clicked row data :</b> {{clickedRowData | json}}</p>\n\n</amexio-api-demo>\n</amexio-api-structure>\n\n"

/***/ }),

/***/ "./src/app/data/gridwithtemplate/gridwithtemplate.demo.ts":
/*!****************************************************************!*\
  !*** ./src/app/data/gridwithtemplate/gridwithtemplate.demo.ts ***!
  \****************************************************************/
/*! exports provided: GridWithTemplateDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridWithTemplateDemo", function() { return GridWithTemplateDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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



var GridWithTemplateDemo = /** @class */ (function () {
    function GridWithTemplateDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
        this.projectData = {
            "response": {
                "success": true,
                "message": "Fetching  Data  Request Succeeded: Profile",
                "data": [
                    {
                        "name": "Admin Template	",
                        "status": " 65%"
                    },
                    {
                        "name": "Landing Page",
                        "status": "Finished"
                    },
                    {
                        "name": "Backend UI	",
                        "status": "Rejected"
                    },
                    {
                        "name": "Personal Blog",
                        "status": "40%"
                    },
                    {
                        "name": "E-mail Templates	",
                        "status": "13%"
                    },
                    {
                        "name": "Corporate Website",
                        "status": "Pending"
                    }
                ]
            }
        };
        this.browserData = {
            "response": {
                "success": true,
                "message": "Fetching  Data  Request Succeeded: Profile",
                "data": [
                    {
                        "name": "Google Chrome",
                        "usage": "23%",
                        "icon": "GoogleChrome.jpg "
                    },
                    {
                        "name": "Mozila Firefox",
                        "usage": "15%",
                        "icon": "MozilaFirefox.png "
                    },
                    {
                        "name": "Apple Safari",
                        "usage": "7%",
                        "icon": "AppleSafari.png "
                    },
                    {
                        "name": "Internet Explorer",
                        "usage": "9%",
                        "icon": "InternetExplorer.jpeg"
                    },
                    {
                        "name": "Opera mini",
                        "usage": "20%",
                        "icon": "Operamini.jpg"
                    },
                    {
                        "name": "Microsoft edge",
                        "usage": "9%",
                        "icon": "Microsoftedge.jpg"
                    }
                ]
            }
        };
    }
    GridWithTemplateDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    GridWithTemplateDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Data Grid With template';
        this.customSourceData.description = 'To define the detail template, nest an ng-template tag inside the AmexioColumn component. The template context is set to the current row.';
        this.customSourceData.sourceMetadata.htmlUrl = 'data/templategrid/templategrid.html';
        this.customSourceData.sourceMetadata.tsUrl = 'data/templategrid/templategrid.text';
        this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/gridtemplate.json';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-template-grid?embed=1&file=app/grid/templategrid/templategrid.demo.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    GridWithTemplateDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    GridWithTemplateDemo.prototype.getRowData = function (data) {
        this.clickedRowData = data;
    };
    GridWithTemplateDemo.prototype.getGridTemplateData = function (row) {
        if (row.Usage >= 50) {
            return "success";
        }
        if (row.Usage < 50 && row.Usage >= 30) {
            return "warning";
        }
        if (row.Usage < 30) {
            return "danger";
        }
    };
    GridWithTemplateDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'grid-template-demo',
            template: __webpack_require__(/*! ./gridwithtemplate.demo.html */ "./src/app/data/gridwithtemplate/gridwithtemplate.demo.html"),
            styles: [
                "\n    .listbox-StatusYellow {\n      background-color: yellow;\n    }\n    .listbox-StatusGreen  {\n      background-color: green;\n     }\n    .listbox-StatusRed {\n      background-color: red;\n  }\n  \n.red {\n    color: red!important;\n   \n}\n.green {\n    color: green!important;\n   \n}\n.yellow {\n    color: yellow!important;\n    \n}\n.template-progressBar .progress{\n  height:5px !important;\n}  \n"
            ]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GridWithTemplateDemo);
    return GridWithTemplateDemo;
}());



/***/ }),

/***/ "./src/app/data/gridwithtoolbar/gridwithtoolbar.demo.html":
/*!****************************************************************!*\
  !*** ./src/app/data/gridwithtoolbar/gridwithtoolbar.demo.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/data/grid.json'\">\n    <amexio-api-demo>\n\n        <amexio-row>\n            <amexio-column size=\"12\">\n                <amexio-card [header]=\"true\">\n                    <amexio-header>\n                        Grid with Toolbar\n                    </amexio-header>\n                    <amexio-body>\n                        <amexio-datagrid [enable-column-fiter]=\"true\" title=\" Grid with Toolbar \" [enable-checkbox]=\"false\"\n                            [http-method]=\"'get'\" [http-url]=\"'assets/data/componentdata/country.json'\" [data-reader]=\"'data'\"\n                            [page-size]=\"10\">\n                            <amexio-datagrid-header>\n                                <amexio-drop-down-menu [icon-align]=\"'left'\" [title]=\"'Country Currency '\" [padding]=\"'5px 10px'\"\n                                    [icon]=\"'fa fa-empire'\">\n                                    <amexio-drop-down-menu-item [label]=\"'India'\" [icon]=\"'fa fa-inr'\">\n                                    </amexio-drop-down-menu-item>\n                                    <amexio-drop-down-menu-item [label]=\"'Russia'\" [icon]=\"'fa fa-rouble'\" [separator]=\"true\">\n                                    </amexio-drop-down-menu-item>\n                                    <amexio-drop-down-menu-item [label]=\"'Japan'\" [icon]=\"'fa fa-cny'\">\n                                    </amexio-drop-down-menu-item>\n                                    <amexio-drop-down-menu-item [label]=\"'United States'\" [icon]=\"'fa fa-dollar'\">\n                                    </amexio-drop-down-menu-item>\n                                </amexio-drop-down-menu>\n                                <amexio-label size=\"small\">\n                                    My Drive\n                                </amexio-label>\n                                <amexio-image aria-hidden=\"true\" [icon-class]=\"'fa fa-info-circle'\"> </amexio-image>\n\n                            </amexio-datagrid-header>\n                            <amexio-data-table-column [data-index]=\"'countryName'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                [text]=\"'Name'\" (selectedRowData)=\"getSelectedData($event)\">\n                            </amexio-data-table-column>\n                            <amexio-data-table-column [sort]=\"false\" [data-index]=\"'countryCode1'\" [data-type]=\"'string'\"\n                                [hidden]=\"false\" [text]=\"'Code'\"></amexio-data-table-column>\n                            <amexio-data-table-column [data-index]=\"'currencyName'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                [text]=\"'Currency'\"></amexio-data-table-column>\n                        </amexio-datagrid>\n                    </amexio-body>\n                </amexio-card>\n            </amexio-column>\n        </amexio-row>\n\n    </amexio-api-demo>\n</amexio-api-structure>"

/***/ }),

/***/ "./src/app/data/gridwithtoolbar/gridwithtoolbar.demo.ts":
/*!**************************************************************!*\
  !*** ./src/app/data/gridwithtoolbar/gridwithtoolbar.demo.ts ***!
  \**************************************************************/
/*! exports provided: GridWithToolBarDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridWithToolBarDemo", function() { return GridWithToolBarDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
/**
 * Created by kedar on 17/10/18.
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



var GridWithToolBarDemo = /** @class */ (function () {
    function GridWithToolBarDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
    }
    GridWithToolBarDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    GridWithToolBarDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Data Grid With toolbar';
        this.customSourceData.description = 'Data grid component to render large amount of data-set with various options like sorting in ascending or descending order, client-side pagination, column hide/unhide, single/multi selection, user define template for rendering for column header and column data, displaying summation of numeric column.';
        this.customSourceData.sourceMetadata.htmlUrl = 'data/gridwithtoolbar/gridwithtoolbar.html';
        this.customSourceData.sourceMetadata.tsUrl = 'data/gridwithtoolbar/gridwithtoolbar.text';
        this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/country.json';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-grid-with-toolbar?embed=1&file=app/grid/gridwithtoolbar/gridwithtoolbar.demo.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    GridWithToolBarDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    GridWithToolBarDemo.prototype.getSelectedData = function (data) {
        this.selectedData = data;
    };
    GridWithToolBarDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gridwithtoolbar-demo',
            template: __webpack_require__(/*! ./gridwithtoolbar.demo.html */ "./src/app/data/gridwithtoolbar/gridwithtoolbar.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GridWithToolBarDemo);
    return GridWithToolBarDemo;
}());



/***/ }),

/***/ "./src/app/data/groupby/groupbygrid.demo.html":
/*!****************************************************!*\
  !*** ./src/app/data/groupby/groupbygrid.demo.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/data/grid.json'\">\n  <amexio-api-demo>\n  \n\n<amexio-row>\n      <amexio-column size=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n             Data Grid Group By \n          </amexio-header>\n          <amexio-body>\n            <amexio-datagrid\n              [title]=\"'Employee Data'\"\n              [page-size] = \"10\"\n              [data-reader]=\"'data'\"\n              [groupby]=\"true\"\n              [groupby-data-index]=\"'jobTitle'\"\n              [http-url]=\"'assets/data/componentdata/datagridgroupby.json'\"\n              [http-method]=\"'get'\">\n              <amexio-data-table-column [width]=\"30\" [data-index]=\"'preferredFullName'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Full Name'\"></amexio-data-table-column>\n              <amexio-data-table-column  [width]=\"30\" [data-index]=\"'jobTitle'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Job Title'\">\n              </amexio-data-table-column>\n              <amexio-data-table-column [width]=\"30\" [data-index]=\"'salary'\" [data-type]=\"'number'\" [hidden]=\"false\" [text]=\"'Salary'\"></amexio-data-table-column>\n            </amexio-datagrid>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n\n    </amexio-api-demo>\n    </amexio-api-structure>"

/***/ }),

/***/ "./src/app/data/groupby/groupbygrid.demo.ts":
/*!**************************************************!*\
  !*** ./src/app/data/groupby/groupbygrid.demo.ts ***!
  \**************************************************/
/*! exports provided: GroupByGridDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupByGridDemo", function() { return GroupByGridDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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



var GroupByGridDemo = /** @class */ (function () {
    function GroupByGridDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
    }
    GroupByGridDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    GroupByGridDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Data Grid Group By';
        this.customSourceData.description = 'Data grid component to render large amount of data-set with various options like sorting in ascending or descending order, client-side pagination, column hide/unhide, single/multi selection,Filtering(enable only for string and number type data), user define template for rendering for column header and column data, displaying summation of numeric column and grouping column.';
        this.customSourceData.sourceMetadata.htmlUrl = 'data/groupby/groupby.html';
        this.customSourceData.sourceMetadata.tsUrl = 'data/groupby/groupby.text';
        this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/datagridgroupby.json';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-groupby-grid?embed=1&file=app/grid/groupbygrid/groupbygrid.demo.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    GroupByGridDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    GroupByGridDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'groupbygrid-demo',
            template: __webpack_require__(/*! ./groupbygrid.demo.html */ "./src/app/data/groupby/groupbygrid.demo.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GroupByGridDemo);
    return GroupByGridDemo;
}());



/***/ }),

/***/ "./src/app/data/headertemplate/headertemplate.demo.html":
/*!**************************************************************!*\
  !*** ./src/app/data/headertemplate/headertemplate.demo.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/data/grid.json'\">\n  <amexio-api-demo>\n           \n    <!--1-->\n    <amexio-datagrid [enable-checkbox]=\"false\" title=\"Registration Details\" [http-method]=\"'get'\" [http-url]=\"'assets/data/componentdata/headertemplateemail.json'\"\n        [data-reader]=\"'data'\" [page-size]=\"10\" [enable-data-filter]=\"false\">\n        <amexio-data-table-column [width]=\"5\" [data-index]=\"'No'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'No.'\">\n            <ng-template #amexioHeaderTmpl let-column=\"column\" let-index=\"index\">\n                <amexio-label size=\"small\" font-color=\"white\">\n                    {{column.text}}\n                </amexio-label>\n            </ng-template>\n        </amexio-data-table-column>\n        <amexio-data-table-column   [width]=\"10\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\">\n        <ng-template #amexioHeaderTmpl let-column=\"column\" let-index=\"index\">\n                <amexio-label size=\"small-bold\" font-color=\"white\">\n                    {{column.text}}\n                </amexio-label>\n            </ng-template>\n        </amexio-data-table-column>\n        <amexio-data-table-column [width]=\"8\" [data-index]=\"'loginid'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Login-Id'\">\n        <ng-template #amexioHeaderTmpl let-column=\"column\" let-index=\"index\">\n        <amexio-label size=\"small\" font-color=\"red\">\n            {{column.text}}\n        </amexio-label>\n    </ng-template>\n        </amexio-data-table-column>\n        <amexio-data-table-column [width]=\"14\" [data-index]=\"'emailid'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Email-Id'\">\n        <ng-template #amexioHeaderTmpl let-column=\"column\" let-index=\"index\">\n        <amexio-label size=\"small\" font-color=\"white\">\n        <i class=\"fa fa-envelope\"  style=\"color:white\"></i>\n            {{column.text}}\n        </amexio-label>\n    </ng-template>\n        </amexio-data-table-column>\n        <amexio-data-table-column [width]=\"8\" [data-index]=\"'phone'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Phone'\">\n        <ng-template #amexioHeaderTmpl let-column=\"column\" let-index=\"index\">\n        <amexio-label size=\"small\" font-color=\"white\">\n        <i class=\"fa fa-phone\"  style=\"color:white\"></i>\n            {{column.text}}\n        </amexio-label>\n    </ng-template>\n        </amexio-data-table-column>\n        <amexio-data-table-column [sort]=\"false\" [width]=\"10\" [data-index]=\"'Status'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Status'\">\n        <ng-template #amexioHeaderTmpl let-column=\"column\" let-index=\"index\">\n        <amexio-btn-dropdown [label]=\"'Status'\" [type]=\"'red'\" [size]=\"'small'\">\n        \n        <amexio-btn-dropdown-item  [label]=\"'Accept All'\">\n        </amexio-btn-dropdown-item>\n        <amexio-btn-dropdown-item [label]=\"'Reject All'\">\n        </amexio-btn-dropdown-item>\n        \n    </amexio-btn-dropdown>\n    </ng-template>\n        <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                <amexio-label class=\"fa fa-circle fa-lg\" [ngClass]=\"{'green': row.Status== 'Paid' , 'yellow': row.Status =='Pending' , 'red' : row.Status=='Approved'}\"></amexio-label>\n                &nbsp;{{row.Status}}\n            </ng-template>\n        </amexio-data-table-column>\n         \n    </amexio-datagrid>\n\n    </amexio-api-demo>\n    </amexio-api-structure>\n\n"

/***/ }),

/***/ "./src/app/data/headertemplate/headertemplate.demo.ts":
/*!************************************************************!*\
  !*** ./src/app/data/headertemplate/headertemplate.demo.ts ***!
  \************************************************************/
/*! exports provided: HeaderTemplateDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTemplateDemo", function() { return HeaderTemplateDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
/**
 * Created by Manisha on 22/6/18.
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



var HeaderTemplateDemo = /** @class */ (function () {
    function HeaderTemplateDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
        this.projectData = {
            "response": {
                "success": true,
                "message": "Fetching  Data  Request Succeeded: Profile",
                "data": [
                    {
                        "name": "Admin Template	",
                        "status": " 65%"
                    },
                    {
                        "name": "Landing Page",
                        "status": "Finished"
                    },
                    {
                        "name": "Backend UI	",
                        "status": "Rejected"
                    },
                    {
                        "name": "Personal Blog",
                        "status": "40%"
                    },
                    {
                        "name": "E-mail Templates	",
                        "status": "13%"
                    },
                    {
                        "name": "Corporate Website",
                        "status": "Pending"
                    }
                ]
            }
        };
        this.browserData = {
            "response": {
                "success": true,
                "message": "Fetching  Data  Request Succeeded: Profile",
                "data": [
                    {
                        "name": "Google Chrome",
                        "usage": "23%",
                        "icon": "GoogleChrome.jpg "
                    },
                    {
                        "name": "Mozila Firefox",
                        "usage": "15%",
                        "icon": "MozilaFirefox.png "
                    },
                    {
                        "name": "Apple Safari",
                        "usage": "7%",
                        "icon": "AppleSafari.png "
                    },
                    {
                        "name": "Internet Explorer",
                        "usage": "9%",
                        "icon": "InternetExplorer.jpeg"
                    },
                    {
                        "name": "Opera mini",
                        "usage": "20%",
                        "icon": "Operamini.jpg"
                    },
                    {
                        "name": "Microsoft edge",
                        "usage": "9%",
                        "icon": "Microsoftedge.jpg"
                    }
                ]
            }
        };
    }
    HeaderTemplateDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    HeaderTemplateDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Header Template';
        this.customSourceData.description = 'Defines header template for user customization AmexioColumn component. The template context is set to the current header.';
        this.customSourceData.sourceMetadata.htmlUrl = 'data/headertemplate/headertemplate.html';
        this.customSourceData.sourceMetadata.tsUrl = 'data/headertemplate/headertemplate.text';
        this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/headertemplateemail.json';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/header-template?embed=1&file=app/data/headertemplate/headertemplate.demo.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    HeaderTemplateDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    HeaderTemplateDemo.prototype.getRowData = function (data) {
        this.clickedRowData = data;
    };
    HeaderTemplateDemo.prototype.getGridTemplateData = function (row) {
        if (row.Usage >= 50) {
            return "success";
        }
        if (row.Usage < 50 && row.Usage >= 30) {
            return "warning";
        }
        if (row.Usage < 30) {
            return "danger";
        }
    };
    HeaderTemplateDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'grid-template-demo',
            template: __webpack_require__(/*! ./headertemplate.demo.html */ "./src/app/data/headertemplate/headertemplate.demo.html"),
            styles: [
                "\n    .button-dropdown{\n        color:black;\n        padding: 50px;\n    }\n    .listbox-StatusYellow {\n      background-color: yellow;\n    }\n    .listbox-StatusGreen  {\n      background-color: green;\n     }\n    .listbox-StatusRed {\n      background-color: red;\n  }\n  \n.red {\n    color: red!important;\n   \n}\n.green {\n    color: green!important;\n   \n}\n.yellow {\n    color: yellow!important;\n    \n}\n.template-progressBar .progress{\n  height:5px !important;\n}  \n"
            ]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HeaderTemplateDemo);
    return HeaderTemplateDemo;
}());



/***/ }),

/***/ "./src/app/data/itemselector/itemselector.demo.html":
/*!**********************************************************!*\
  !*** ./src/app/data/itemselector/itemselector.demo.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [custom-com-data]=\"customSourceData\"  [url]=\"'assets/componentjson/data/item-selector.json'\">\n  <amexio-api-demo>\n   \n   <amexio-row>\n      <amexio-column [size]=\"12\">\n        <amexio-card >\n          <amexio-body>\n            <amexio-row>\n              <amexio-column [size]=\"12\">\n                <amexio-item-selector  [height]=\"250\" [display-field]=\"'countryName'\"\n                                      [value-field]=\"'countryId'\"  (selectedRecords)=\"getSelectedData($event)\"\n                                      [http-url]=\"'assets/data/componentdata/selectordata.json'\"\n                                      [http-method]=\"'get'\" [data-reader]=\"'data'\" \n                                        >\n                </amexio-item-selector>\n              </amexio-column>\n            </amexio-row>\n            \n            <amexio-row>\n              <amexio-column [size]=\"12\">\n                <amexio-card [header]=\"true\">\n                  <amexio-header>Selected data</amexio-header>\n                  <amexio-body>\n                    {{selectedData|json}}\n                  </amexio-body>\n                </amexio-card>\n              </amexio-column>\n            </amexio-row>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n\n    </amexio-api-demo>\n    </amexio-api-structure>"

/***/ }),

/***/ "./src/app/data/itemselector/itemselector.demo.ts":
/*!********************************************************!*\
  !*** ./src/app/data/itemselector/itemselector.demo.ts ***!
  \********************************************************/
/*! exports provided: ItemSelectorDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemSelectorDemo", function() { return ItemSelectorDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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



var ItemSelectorDemo = /** @class */ (function () {
    function ItemSelectorDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
    }
    ItemSelectorDemo.prototype.getSelectedData = function (data) {
        this.selectedData = data;
    };
    ItemSelectorDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    ItemSelectorDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Amexio Item-Selector';
        this.customSourceData.description = 'ItemSelector is a specialized MultiSelect field that renders as a pair of MultiSelect field, one with available options and the other with selected options. A set of buttons in between allows items to be moved between the fields and reordered within the selection.';
        this.customSourceData.sourceMetadata.htmlUrl = 'forms/itemselector/form.html';
        this.customSourceData.sourceMetadata.tsUrl = 'forms/itemselector/form.text';
        this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/country.json';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-itemselector?embed=1&file=app/data/itemselector/itemselector.demo.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    ItemSelectorDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    ItemSelectorDemo.prototype.getDropData = function (event) {
        this.itemRef.removeNode(event);
    };
    ItemSelectorDemo.prototype.drag = function (data) {
        data.event.dataTransfer.setData("dragdata", JSON.stringify(data.data));
    };
    ItemSelectorDemo.prototype.dragOver = function (event) {
        event.preventDefault();
    };
    ItemSelectorDemo.prototype.drop = function (event) {
        event.preventDefault();
        this.selectedData = JSON.parse(event.dataTransfer.getData('dragdata'));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('item'),
        __metadata("design:type", Object)
    ], ItemSelectorDemo.prototype, "itemRef", void 0);
    ItemSelectorDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'itemselector-demo',
            template: __webpack_require__(/*! ./itemselector.demo.html */ "./src/app/data/itemselector/itemselector.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ItemSelectorDemo);
    return ItemSelectorDemo;
}());



/***/ }),

/***/ "./src/app/data/listbox/listbox.demo.html":
/*!************************************************!*\
  !*** ./src/app/data/listbox/listbox.demo.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure  [url]=\"'assets/componentjson/data/listbox.json'\">\n  <amexio-api-demo>\n    \n    <amexio-row>\n      <amexio-column size=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n             Simple List Box\n          </amexio-header>\n          <amexio-body>\n            <amexio-listbox [enable-checkbox]=\"true\" [height]=\"400\"\n                            [header]=\"'Contacts'\" [search-placeholder]=\"'Search Contacts'\"\n                            [data]=\"localData\" [filter]=\"true\"\n                            [data-reader]=\"'response.data'\"\n                            [display-field]=\"'name_official'\" (selectedRows)=\"getSelectedData($event)\">\n            </amexio-listbox>\n            <p>\n              <b>selected data</b> : {{selectedData | json}}\n            </p>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n    <amexio-row>\n      <amexio-column size=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n             List Box with Template\n          </amexio-header>\n          <amexio-body>\n            <amexio-listbox [height]=\"400\" [header]=\"'Contacts'\" [search-placeholder]=\"'Search Contacts'\"\n                            [data]=\"localData\" [filter]=\"false\"\n                            [data-reader]=\"'response.data'\"\n                            [display-field]=\"'name'\" (onRowClick)=\"onRowClick($event)\">\n              <ng-template #amexioBodyTmpl let-row=\"row\">\n                <amexio-row>\n                  <amexio-column [size]=\"1\">\n                      <amexio-image [c-class]=\"'around-image'\" height=\"50px\" width=\"50px\" path=\"assets/images/profile/{{row.profile}}\"></amexio-image>\n                  </amexio-column>\n                  <amexio-column [size]=\"11\">\n                    {{row.name}}\n                  </amexio-column>\n                </amexio-row>\n              </ng-template>\n            </amexio-listbox>\n           <!-- <p>\n              <b>clicked record data</b> : {{onRowClickData | json}}\n            </p>-->\n\n            <amexio-row>\n            <amexio-column [size]=\"5\">\n              <amexio-listbox [height]=\"360\" [data]=\"projectData\" [filter]=\"false\" [header]=\"'Project'\" [enable-checkbox]=\"false\" [data-reader]=\"'response.data'\"\n                [display-field]=\"'name'\">\n                <ng-template #amexioBodyTmpl let-row=\"row\">\n                  <amexio-row>\n                    <amexio-column [size]=\"5\">\n                      <amexio-label size=\"small\">\n                        {{row.name}}\n                      </amexio-label>\n                    </amexio-column>\n                    <amexio-column [size]=\"3\">\n  \n                    </amexio-column>\n                    <amexio-column [size]=\"4\">\n  \n                      <a [ngClass]=\"{'listbox-StatusYellow': row.status == 'Pending', 'listbox-StatusGreen' : row.status == 'Finished','listbox-StatusRed'  : row.status == 'Rejected'}\">\n                        {{row.status}}\n                      </a>\n                    </amexio-column>\n                  </amexio-row>\n                </ng-template>\n              </amexio-listbox>\n            </amexio-column>\n            <amexio-column [size]=\"7\">\n              <amexio-listbox [height]=\"400\" [data]=\"browserData\" [filter]=\"false\" [header]=\"'Browser Stats'\" [enable-checkbox]=\"false\"\n                [data-reader]=\"'response.data'\" [display-field]=\"'name'\">\n                <ng-template #amexioBodyTmpl let-row=\"row\">\n                  <amexio-row>\n                    <amexio-column [size]=\"4\">\n                      <span>\n  \n                        <amexio-image [path]=\"'assets/images/'+row.icon\" [c-class]=\"'image-round'\">\n                        </amexio-image>\n  \n                      </span>\n  \n                    </amexio-column>\n                    <amexio-column [size]=\"6\">\n                      <amexio-label size=\"small\">\n                        {{row.name}}\n                      </amexio-label>\n                    </amexio-column>\n                    <amexio-column [size]=\"2\">\n                      <amexio-label size=\"small\" font-color=\"grey\">\n                        {{row.usage}}\n                      </amexio-label>\n  \n                    </amexio-column>\n                  </amexio-row>\n                </ng-template>\n              </amexio-listbox>\n            </amexio-column>\n          </amexio-row>\n\n\n          </amexio-body>\n        </amexio-card>\n\n      </amexio-column>\n    </amexio-row>\n\n    <amexio-row>\n    <amexio-column size=\"12\">\n      <amexio-card [header]=\"true\">\n        <amexio-header>\n           List Box With Context Menu\n        </amexio-header>\n        <amexio-body>\n          <amexio-listbox [enable-checkbox]=\"true\" [height]=\"400\"\n                          [header]=\"'Contacts'\" [search-placeholder]=\"'Search Contacts'\"\n                          [data]=\"localData\" [filter]=\"true\"\n                          [data-reader]=\"'response.data'\" [context-menu]=\"contextMenuData\"\n                          [display-field]=\"'name_official'\" (selectedRows)=\"getSelectedData($event)\">\n          </amexio-listbox>\n        </amexio-body>\n      </amexio-card>\n    </amexio-column>\n  </amexio-row>\n\n     \n  </amexio-api-demo>\n  </amexio-api-structure>"

/***/ }),

/***/ "./src/app/data/listbox/listbox.demo.ts":
/*!**********************************************!*\
  !*** ./src/app/data/listbox/listbox.demo.ts ***!
  \**********************************************/
/*! exports provided: ListBoxDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBoxDemo", function() { return ListBoxDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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


var ListBoxDemo = /** @class */ (function () {
    function ListBoxDemo(http) {
        this.http = http;
        this.contextMenuData =
            [{ "text": "Add New", "icon": "fa fa-arrows", "disabled": true },
                { "text": "Edit", "icon": "", "seperator": true },
                { "text": "Send data in email", "icon": "" }];
        this.localData = { "response": {
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
                        "name": "ketan Gote",
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
            } };
        this.projectData = {
            "response": {
                "success": true,
                "message": "Fetching  Data  Request Succeeded: Profile",
                "data": [
                    {
                        "name": "Admin Template	",
                        "status": " 65%"
                    },
                    {
                        "name": "Landing Page",
                        "status": "Finished"
                    },
                    {
                        "name": "Backend UI	",
                        "status": "Rejected"
                    },
                    {
                        "name": "Personal Blog",
                        "status": "40%"
                    },
                    {
                        "name": "E-mail Templates	",
                        "status": "13%"
                    },
                    {
                        "name": "Corporate Website",
                        "status": "Pending"
                    }
                ]
            }
        };
        this.browserData = {
            "response": {
                "success": true,
                "message": "Fetching  Data  Request Succeeded: Profile",
                "data": [
                    {
                        "name": "Google Chrome",
                        "usage": "23%",
                        "icon": "GoogleChrome.jpg "
                    },
                    {
                        "name": "Mozila Firefox",
                        "usage": "15%",
                        "icon": "MozilaFirefox.png "
                    },
                    {
                        "name": "Apple Safari",
                        "usage": "7%",
                        "icon": "AppleSafari.png "
                    },
                    {
                        "name": "Internet Explorer",
                        "usage": "9%",
                        "icon": "InternetExplorer.jpeg"
                    },
                    {
                        "name": "Opera mini",
                        "usage": "20%",
                        "icon": "Operamini.jpg"
                    },
                    {
                        "name": "Microsoft edge",
                        "usage": "9%",
                        "icon": "Microsoftedge.jpg"
                    }
                ]
            }
        };
    }
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    ListBoxDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    ListBoxDemo.prototype.onRowClick = function (data) {
        this.onRowClickData = data;
    };
    ListBoxDemo.prototype.getSelectedData = function (data) {
        this.selectedData = data;
    };
    ListBoxDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'listbox-demo',
            template: __webpack_require__(/*! ./listbox.demo.html */ "./src/app/data/listbox/listbox.demo.html"),
            styles: [
                "\n    .listbox-StatusYellow {\n      background-color: yellow;\n    }\n    .listbox-StatusGreen  {\n      background-color: green;\n     }\n    .listbox-StatusRed {\n      background-color: red;\n  }\n  \n.red {\n    color: red!important;\n   \n}\n.green {\n    color: green!important;\n   \n}\n.yellow {\n    color: yellow!important;\n    \n}\n.template-progressBar .progress{\n  height:5px !important;\n}  \n"
            ]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ListBoxDemo);
    return ListBoxDemo;
}());



/***/ }),

/***/ "./src/app/data/serversidepagination/serversidepagination.demo.html":
/*!**************************************************************************!*\
  !*** ./src/app/data/serversidepagination/serversidepagination.demo.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [custom-com-data]=\"customSourceData\"  [url]=\"'assets/componentjson/data/grid.json'\">\n  <amexio-api-demo>\n    <amexio-row>\n      <amexio-column size=\"12\">\n        <amexio-spinner [show]=showLoader [type]=\"'fadingcircle'\" [vertical-position]=\"'center'\"\n                        [horizontal-position]=\"'center'\">\n        </amexio-spinner>\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n            Grid - Lazy Loading\n          </amexio-header>\n          <amexio-body>\n            <amexio-datagrid\n              title=\"Country Data \"\n              [data]=\"countryData\"\n              [height]=\"500\"\n              [server-side-paging]=\"true\"\n              [total-data-count]=\"totalDataCount\"\n              (onPageChange)=\"loadPageData($event)\">\n              <amexio-data-table-column\n                [data-index]=\"'countryName'\"\n                [data-type]=\"'string'\"\n                [sort]=\"true\"\n                [text]=\"'Name'\">\n              </amexio-data-table-column>\n              <amexio-data-table-column\n                [sort]=\"true\"\n                [data-index]=\"'countryCode1'\"\n                [data-type]=\"'string'\"\n                [text]=\"'Country Code'\">\n              </amexio-data-table-column>\n              <amexio-data-table-column\n                [sort]=\"true\"\n                [data-index]=\"'currencyName'\"\n                [data-type]=\"'string'\"\n                [text]=\"'Currency'\">\n              </amexio-data-table-column>\n            </amexio-datagrid>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n  </amexio-api-demo>\n\n</amexio-api-structure>\n\n"

/***/ }),

/***/ "./src/app/data/serversidepagination/serversidepagination.demo.ts":
/*!************************************************************************!*\
  !*** ./src/app/data/serversidepagination/serversidepagination.demo.ts ***!
  \************************************************************************/
/*! exports provided: ServerSidePaginationDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerSidePaginationDemo", function() { return ServerSidePaginationDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/**
 * Created by dattaram on 15/2/19.
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



var ServerSidePaginationDemo = /** @class */ (function () {
    function ServerSidePaginationDemo(_httpClient) {
        this._httpClient = _httpClient;
        this.countryData = [];
        this.totalDataCount = 239;
        this.showLoader = false;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_1__["ComponentDataStructure"]();
    }
    ServerSidePaginationDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
        this.getData(0, 10);
    };
    ServerSidePaginationDemo.prototype.getData = function (startIndex, lastIndex) {
        var _this = this;
        this.showLoader = true;
        this._httpClient.get('https://restapi.amexio.org:8991/rest-sample-app/api/region/country/' + startIndex + '/' + lastIndex).subscribe(function (res) {
            _this.countryData = res.response.data;
            _this.showLoader = false;
        });
    };
    ServerSidePaginationDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Grid- Lazy Loading';
        this.customSourceData.description = 'Data grid With lazy loading enabled for large data sets pagination, user can bring only require data and show. Based on total-count (attribute mapped) and initial datasize number of pages will be shown.';
        this.customSourceData.sourceMetadata.htmlUrl = 'data/serversidepagination/serversidepagination.html';
        this.customSourceData.sourceMetadata.tsUrl = 'data/serversidepagination/serversidepagination.text';
        this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/country.json';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/server-side-paging?embed=1&file=src/app/grid/serverside.paging.component.html&view=editor';
    };
    ServerSidePaginationDemo.prototype.loadPageData = function (pageInfo) {
        this.getData(pageInfo.next.startIndex - 1, (pageInfo.next.endIndex > this.totalDataCount) ? this.totalDataCount : pageInfo.next.endIndex);
    };
    ServerSidePaginationDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'server-side-pagination-demo',
            template: __webpack_require__(/*! ./serversidepagination.demo.html */ "./src/app/data/serversidepagination/serversidepagination.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ServerSidePaginationDemo);
    return ServerSidePaginationDemo;
}());



/***/ }),

/***/ "./src/app/data/simplegrid/simplegrid.demo.html":
/*!******************************************************!*\
  !*** ./src/app/data/simplegrid/simplegrid.demo.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [custom-com-data]=\"customSourceData\"  [url]=\"'assets/componentjson/data/grid.json'\">\n    <amexio-api-demo>\n      <amexio-row>\n        <amexio-column size=\"12\">\n          <amexio-card [header]=\"true\">\n            <amexio-header>\n              Simple Data Grid\n            </amexio-header>\n            <amexio-body>\n              <amexio-datagrid [enable-column-fiter]=\"true\" title=\"Simple Data Grid \" [enable-checkbox]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/data/componentdata/country.json'\"\n                               [data-reader]=\"'data'\" [page-size]=\"10\">\n\n                <amexio-data-table-column [data-index]=\"'countryName'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\" (selectedRowData)=\"getSelectedData($event)\">\n                </amexio-data-table-column>\n                <amexio-data-table-column [sort]=\"false\" [data-index]=\"'countryCode1'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Code'\"></amexio-data-table-column>\n                <amexio-data-table-column [data-index]=\"'currencyName'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Currency'\"></amexio-data-table-column>\n              </amexio-datagrid>\n            </amexio-body>\n          </amexio-card>\n        </amexio-column>\n        <br>\n        <amexio-column size=\"12\">\n          <amexio-card [header]=\"true\">\n            <amexio-header>\n              Simple Data Grid with inner structure\n            </amexio-header>\n            <amexio-body>\n              <amexio-datagrid [enable-column-fiter]=\"true\" title=\"Simple Data Grid with inner structure\" [enable-checkbox]=\"false\" [http-method]=\"'get'\" [http-url]=\"'assets/data/componentdata/personProfile.json'\"\n                               [data-reader]=\"'data'\" [page-size]=\"10\">\n\n                <amexio-data-table-column [data-index]=\"'personName'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\" (selectedRowData)=\"getSelectedRecord($event)\">\n                </amexio-data-table-column>\n                <amexio-data-table-column [sort]=\"false\" [data-index]=\"'designation'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Designation'\"></amexio-data-table-column>\n                <amexio-data-table-column [data-index]=\"'address.addressLabel'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Address'\"></amexio-data-table-column>\n              </amexio-datagrid>\n            </amexio-body>\n          </amexio-card>\n        </amexio-column>\n      </amexio-row>\n    </amexio-api-demo>\n\n  </amexio-api-structure>\n\n"

/***/ }),

/***/ "./src/app/data/simplegrid/simplegrid.demo.ts":
/*!****************************************************!*\
  !*** ./src/app/data/simplegrid/simplegrid.demo.ts ***!
  \****************************************************/
/*! exports provided: SimpleGridDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleGridDemo", function() { return SimpleGridDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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



var SimpleGridDemo = /** @class */ (function () {
    function SimpleGridDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
    }
    SimpleGridDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    SimpleGridDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Simple Data Grid';
        this.customSourceData.description = 'Data grid component to render large amount of data-set with various options like sorting in ascending or descending order, client-side pagination, column hide/unhide, single/multi selection, user define template for rendering for column header and column data, displaying summation of numeric column.';
        this.customSourceData.sourceMetadata.htmlUrl = 'data/simplegrid/simplegrid.html';
        this.customSourceData.sourceMetadata.tsUrl = 'data/simplegrid/simplegrid.text';
        this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/country.json';
        this.customSourceData.sourceMetadata.datasourceUrl1 = 'assets/data/componentdata/personProfile.json';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-simple-grid?embed=1&file=app/grid/simplegrid/simplegrid.demo.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    SimpleGridDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    SimpleGridDemo.prototype.getSelectedData = function (data) {
        this.selectedData = data;
    };
    SimpleGridDemo.prototype.getSelectedRecord = function (data) {
        this.selectedRecord = data;
    };
    SimpleGridDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'simplegrid-demo',
            template: __webpack_require__(/*! ./simplegrid.demo.html */ "./src/app/data/simplegrid/simplegrid.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SimpleGridDemo);
    return SimpleGridDemo;
}());



/***/ }),

/***/ "./src/app/data/spinner/spinner.demo.html":
/*!************************************************!*\
  !*** ./src/app/data/spinner/spinner.demo.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure  [url]=\"'assets/componentjson/data/spinner.json'\">\n    <amexio-api-demo>\n   \n   <amexio-row>\n        <amexio-column size=\"12\">\n            <amexio-card [header]=\"true\">\n                <amexio-header>\n                    Data Loading Indicator\n                </amexio-header>\n                <amexio-body>\n\n                    <amexio-button [label]=\"text\" [type]=\"'yellow'\" [tooltip]=\"'show'\" (onClick)=\"onButtonClick()\">\n                    </amexio-button>\n                    <br />\n                    <amexio-label size=\"small-bold\">Select Color For Spinner : -</amexio-label>\n                    <input type=\"color\" id=\"head\" name=\"color\" (input)=\"setColorForIndictor($event)\" value=\"colorModel.color\" />\n\n\n                    <amexio-row>\n                        <amexio-column [size]=\"4\" [fit]=true>\n                            <amexio-card [header]=\"true\" [body-height]=\"45\" [footer]=\"true\" [footer-align]=\"'right'\">\n                                <amexio-header>\n                                    Advanced Spinner\n                                </amexio-header>\n                                <amexio-body>\n                                    <amexio-spinner *ngIf=\"isBoxShow\" [type]=\"spinnerModel.spinnerType\"\n                                        [vertical-position]=\"spinnerModel.vposition\" [horizontal-position]=\"spinnerModel.hposition\"\n                                        [color]=\"colorModel.color\">\n                                    </amexio-spinner>\n                                    <amexio-dropdown [place-holder]=\"'Choose'\" [(ngModel)]=\"spinnerModel.spinnerType\"\n                                        [data-reader]=\"'type'\" [field-label]=\"'Choose Spinner Type'\" [data]=\"spinnerData\"\n                                        [display-field]=\"'spinnerType'\" [value-field]=\"'spinnerType'\">\n                                    </amexio-dropdown>\n\n                                    <amexio-dropdown [(ngModel)]=\"spinnerModel.vposition\" [place-holder]=\"'Choose'\"\n                                        [data-reader]=\"'verticalPosition'\" [field-label]=\"'Choose Vertical Position'\"\n                                        [data]=\"spinnerData\" [display-field]=\"'vposition'\" [value-field]=\"'vposition'\">\n                                    </amexio-dropdown>\n\n                                    <amexio-dropdown [(ngModel)]=\"spinnerModel.hposition\" [place-holder]=\"'Choose'\"\n                                        [data-reader]=\"'horizontalPosition'\" [field-label]=\"'Choose Horizontal Position'\"\n                                        [data]=\"spinnerData\" [display-field]=\"'hposition'\" [value-field]=\"'hposition'\">\n                                    </amexio-dropdown>\n                                </amexio-body>\n\n                                <amexio-action>\n                                    <amexio-button [label]=\"buttonShowHide\" [type]=\"'green'\" [tooltip]=\"'show'\"\n                                        (onClick)=\"onAdvanceClick()\">\n                                    </amexio-button>\n                                </amexio-action>\n                            </amexio-card>\n                        </amexio-column>\n                        <amexio-column [size]=\"4\" [fit]=true>\n                            <amexio-card [header]=\"true\">\n                                <amexio-header>\n                                    fading circle round loader\n                                </amexio-header>\n                                <amexio-body>\n                                    <amexio-spinner [show]=clickShow [size]=\"'10px'\" relative=\"true\" [type]=\"'fadingcircle'\"\n                                        [color]=\"colorModel.color\">\n                                    </amexio-spinner>\n                                </amexio-body>\n                            </amexio-card>\n                        </amexio-column>\n                        <amexio-column [size]=\"4\" [fit]=true>\n                            <amexio-card [header]=\"true\">\n                                <amexio-header>\n                                    ball spin loader\n                                </amexio-header>\n                                <amexio-body>\n                                    <amexio-spinner [show]=clickShow [size]=\"'9px'\" relative=\"true\" [type]=\"'ballspin'\"\n                                        [color]=\"colorModel.color\">\n                                    </amexio-spinner>\n                                </amexio-body>\n                            </amexio-card>\n                        </amexio-column>\n                    </amexio-row>\n\n                    <amexio-row>\n                        <amexio-column [size]=\"4\" [fit]=true>\n                            <amexio-card [header]=\"true\" [body-height]=\"45\">\n                                <amexio-header>\n                                    fire spin loader\n                                </amexio-header>\n                                <amexio-body>\n                                    <amexio-spinner [show]=clickShow [size]=\"'50px'\" relative=\"true\" [type]=\"'firespin'\"\n                                        [color]=\"colorModel.color\">\n                                    </amexio-spinner>\n                                </amexio-body>\n                            </amexio-card>\n                        </amexio-column>\n                        <amexio-column [size]=\"4\" [fit]=true>\n                            <amexio-card [header]=\"true\" [body-height]=\"45\">\n                                <amexio-header>\n                                    three bounce loader\n                                </amexio-header>\n                                <amexio-body>\n                                    <amexio-spinner [show]='clickShow' [size]=\"'8px'\" relative=\"true\" [type]=\"'threebounce'\"\n                                        [color]=\"colorModel.color\">\n                                    </amexio-spinner>\n                                </amexio-body>\n                            </amexio-card>\n                        </amexio-column>\n                        <amexio-column [size]=\"4\" [fit]=true>\n                            <amexio-card [header]=\"true\">\n                                <amexio-header>\n                                    spinner round loader\n                                </amexio-header>\n                                <amexio-body>\n                                    <amexio-spinner [show]=clickShow [size]=\"'6px'\" relative=\"true\" [type]=\"'spinnerround'\"\n                                        [color]=\"colorModel.color\">\n                                    </amexio-spinner>\n                                </amexio-body>\n                            </amexio-card>\n                        </amexio-column>\n                    </amexio-row>\n\n                    <amexio-row>\n                        <amexio-column [size]=\"4\" [fit]=true>\n                            <amexio-card [header]=\"true\" [body-height]=\"45\">\n                                <amexio-header>\n                                    ring loader\n                                </amexio-header>\n                                <amexio-body>\n                                    <amexio-spinner [show]=clickShow [size]=\"'10px'\" [color]=\"colorModel.color\"\n                                        relative=\"true\" [type]=\"'ring'\">\n                                    </amexio-spinner>\n                                </amexio-body>\n                            </amexio-card>\n                        </amexio-column>\n\n                        <amexio-column [size]=\"4\" [fit]=true>\n                            <amexio-card [header]=\"true\" [body-height]=\"45\">\n                                <amexio-header>\n                                    half circle loader\n                                </amexio-header>\n                                <amexio-body>\n                                    <amexio-spinner [show]=clickShow [size]=\"'10px'\" relative=\"true\" [type]=\"'halfcircle'\">\n                                    </amexio-spinner>\n                                </amexio-body>\n                            </amexio-card>\n                        </amexio-column>\n                        <amexio-column [size]=\"4\" [fit]=true>\n                            <amexio-card [header]=\"true\" [body-height]=\"45\">\n                                <amexio-header>\n                                    rectangle Bounce loader\n                                </amexio-header>\n                                <amexio-body>\n                                    <amexio-spinner [show]=clickShow [size]=\"'9px'\" relative=\"true\" [type]=\"'rectanglebounce'\">\n                                    </amexio-spinner>\n                                </amexio-body>\n                            </amexio-card>\n                        </amexio-column>\n                    </amexio-row>\n\n\n\n\n                </amexio-body>\n            </amexio-card>\n\n        </amexio-column>\n    </amexio-row>\n</amexio-api-demo>\n</amexio-api-structure>"

/***/ }),

/***/ "./src/app/data/spinner/spinner.demo.ts":
/*!**********************************************!*\
  !*** ./src/app/data/spinner/spinner.demo.ts ***!
  \**********************************************/
/*! exports provided: AmexioSpinnerDemo, ColorModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmexioSpinnerDemo", function() { return AmexioSpinnerDemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorModel", function() { return ColorModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _spinner_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinner.model */ "./src/app/data/spinner/spinner.model.ts");
/**
 * Created by kedar on 19/9/18.
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



var AmexioSpinnerDemo = /** @class */ (function () {
    function AmexioSpinnerDemo(http) {
        this.http = http;
        this.isBoxShow = false;
        this.clickShow = true;
        this.buttonShowHide = 'Show';
        this.text = 'Hide';
        this.colorModel = new ColorModel();
        this.spinnerModel = new _spinner_model__WEBPACK_IMPORTED_MODULE_2__["SpinnerModel"]();
        this.spinnerData = {
            "type": [
                {
                    "spinnerType": "rectanglebounce",
                },
                {
                    "spinnerType": "ring",
                },
                {
                    "spinnerType": "halfcircle",
                },
                {
                    "spinnerType": "fadingcircle",
                },
                {
                    "spinnerType": "ballspin",
                },
                {
                    "spinnerType": "firespin",
                },
                {
                    "spinnerType": "threebounce",
                },
                {
                    "spinnerType": "spinnerround",
                }
            ],
            "horizontalPosition": [
                {
                    "hposition": "left"
                },
                {
                    "hposition": "center"
                },
                {
                    "hposition": "right"
                }
            ],
            "verticalPosition": [
                {
                    "vposition": "top"
                },
                {
                    "vposition": "center"
                },
                {
                    "vposition": "bottom"
                }
            ]
        };
    }
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    AmexioSpinnerDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    //THIS METHOD IS USED FOR SETTING COLOR FOR INDICATOR
    AmexioSpinnerDemo.prototype.setColorForIndictor = function (colorName) {
        this.colorModel.color = colorName.target.value;
    };
    // Method For the spinner show and hide
    AmexioSpinnerDemo.prototype.onButtonClick = function () {
        if (this.clickShow) {
            this.text = 'Show';
        }
        else {
            this.text = 'Hide';
        }
        this.clickShow = !this.clickShow;
    };
    AmexioSpinnerDemo.prototype.onAdvanceClick = function () {
        if (this.spinnerModel.hposition != null && this.spinnerModel.spinnerType != null && this.spinnerModel.vposition != null) {
            this.buttonShowHide = 'Show';
        }
        else {
            this.buttonShowHide = 'Hide';
        }
        this.isBoxShow = !this.isBoxShow;
        if (this.isBoxShow) {
            this.buttonShowHide = 'Hide';
        }
        else {
            this.buttonShowHide = 'Show';
        }
    };
    AmexioSpinnerDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'amexio-spinner-demo',
            template: __webpack_require__(/*! ./spinner.demo.html */ "./src/app/data/spinner/spinner.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AmexioSpinnerDemo);
    return AmexioSpinnerDemo;
}());

var ColorModel = /** @class */ (function () {
    function ColorModel() {
    }
    return ColorModel;
}());



/***/ }),

/***/ "./src/app/data/spinner/spinner.model.ts":
/*!***********************************************!*\
  !*** ./src/app/data/spinner/spinner.model.ts ***!
  \***********************************************/
/*! exports provided: SpinnerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerModel", function() { return SpinnerModel; });
var SpinnerModel = /** @class */ (function () {
    function SpinnerModel() {
    }
    return SpinnerModel;
}());



/***/ }),

/***/ "./src/app/data/timeline/timeline.demo.html":
/*!**************************************************!*\
  !*** ./src/app/data/timeline/timeline.demo.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure  [url]=\"'assets/componentjson/data/timeline.json'\">\n    <amexio-api-demo>\n      \n      <amexio-card header=\"true\">\n            <amexio-header> Timeline Component (Example-1)</amexio-header>\n            <amexio-body>\n                <amexio-row>\n                    <amexio-column [size]=\"12\">\n                        <amexio-timeline [content-alignment]=\"''\">\n                            <amexio-timeline-event [label]=\"'08:30'\" [icon]=\"'fa fa-file'\" [content-border]=\"true\">\n                                <amexio-label size=\"large-bold\">REGISTRATION</amexio-label>\n                            </amexio-timeline-event>\n                            <amexio-timeline-event [label]=\"'09:00'\" [icon]=\"'fa fa-microphone'\">\n                                <amexio-label>Keynote Talk:Disrupting the Disruptors- Where does Blockchain go from here\n                                </amexio-label>\n                            </amexio-timeline-event>\n                            <amexio-timeline-event [label]=\"'09:15'\" [icon]=\"'fa fa-microphone'\">\n                                <amexio-label>Blockchain in Enterprise- How Companies are using Blockchain Today\n                                </amexio-label>\n                                <amexio-chips>\n                                    <amexio-chip [label]=\"'Araf Karsh Hamid'\" [color]=\"'grey'\">\n                                    </amexio-chip>\n                                </amexio-chips>\n                            </amexio-timeline-event>\n                            <amexio-timeline-event [label]=\"'09:50'\" [icon]=\"'fa fa-coffee'\">\n                                <amexio-label>Networking Break\n                                </amexio-label>\n                            </amexio-timeline-event>\n                            <amexio-timeline-event [label]=\"'10:05'\" [icon]=\"'fa fa-microphone'\">\n                                <amexio-label>Understand Blockchain HyperLedger Fabric For Enterprises\n                                </amexio-label>\n                                <amexio-chips>\n                                    <amexio-chip [label]=\"'Ketan Gote'\" [color]=\"'grey'\">\n                                    </amexio-chip>\n                                </amexio-chips>\n                            </amexio-timeline-event>\n                        </amexio-timeline>\n                    </amexio-column>\n                </amexio-row>\n            </amexio-body>\n        </amexio-card>\n        <amexio-card header=\"true\">\n            <amexio-header> Timeline Component (Example-2)</amexio-header>\n            <amexio-body>\n                <amexio-row>\n                    <amexio-column [size]=\"12\">\n                        <amexio-timeline [content-alignment]=\"''\">\n                            <amexio-timeline-event [label]=\"''\" [icon]=\"'fa fa-asterisk'\">\n                                <amexio-image [path]=\"'assets/images/timeline/ataturk_1.jpg'\" [filter]=\"'sepia'\" [image-title]=\"'1981'\" [title-position]=\"'bottom-left'\">\n                                </amexio-image>\n                                <amexio-label>\n                                    He was born in 1881 (probably in the spring) in Salonica, then an Ottoman city, now inGreece. His father Ali Riza, a customs\n                                    official turned lumber merchant, died when Mustafawas still a boy. His mother\n                                    Zubeyde, adevout and strong-willed woman, raised him and his sister.\n                                </amexio-label>\n                            </amexio-timeline-event>\n                            <amexio-timeline-event [label]=\"''\" [icon]=\"'fa fa-asterisk'\">\n                                <amexio-image [path]=\"'assets/images/timeline/mustafa-kemal.jpg'\" [filter]=\"'sepia'\" [image-title]=\"'1983'\" [title-position]=\"'bottom-left'\">\n                                </amexio-image>\n                                <amexio-label>First enrolled in a traditionalreligious school, he soon switched to a modern school.\n                                    In 1893, he entered a military highschool where his mathematics teacher gave\n                                    him the second name Kemal (meaning perfection)in recognition of young Mustafa's\n                                    superior achievement.\n                                </amexio-label>\n                            </amexio-timeline-event>\n                            <amexio-timeline-event [label]=\"''\" [icon]=\"'fa fa-asterisk'\">\n                                <amexio-image [path]=\"'assets/images/timeline/mustafa-kemal1.jpg'\" [filter]=\"'sepia'\" [image-title]=\"'1905'\" [title-position]=\"'bottom-left'\">\n                                </amexio-image>\n                                <amexio-label>In 1905, Mustafa Kemal graduated from the War Academy in Istanbul with the rank of\n                                    Staff Captain. Posted in Damascus, he started with several colleagues, a clandestinesociety\n                                    called \"Homeland and Freedom\" to fight against the Sultan'sdespotism.\n                                </amexio-label>\n                            </amexio-timeline-event>\n                            <amexio-timeline-event [label]=\"''\" [icon]=\"'fa fa-asterisk'\">\n                                <amexio-image [path]=\"'assets/images/timeline/ataturk-10-kasim.jpg'\" [filter]=\"'sepia'\" [image-title]=\"'1908'\" [title-position]=\"'bottom-left'\">\n                                </amexio-image>\n                                <amexio-label>In 1908 he helped the group of officers who toppled the Sultan. Mustafa Kemal'scareer\n                                    flourished as he won his heroism in the far corners of the Ottoman Empire,including\n                                    Albania and Tripoli. He also briefly served as a staff officer in Salonica andIstanbul\n                                    and as a military attache in Sofia.\n                                </amexio-label>\n                            </amexio-timeline-event>\n                            <amexio-timeline-event [label]=\"''\" [icon]=\"'fa fa-asterisk'\">\n                                <amexio-image [path]=\"'assets/images/timeline/mustafa-kemal2.jpg'\" [filter]=\"'sepia'\" [image-title]=\"'1915'\" [title-position]=\"'bottom-left'\">\n                                </amexio-image>\n                                <amexio-label>In 1915, when Dardanelles campaign was launched, Colonel Mustafa Kemal became anational\n                                    hero by winning successive victories and finally repelling the invaders.\n                                </amexio-label>\n                            </amexio-timeline-event>\n                            <amexio-timeline-event [label]=\"''\" [icon]=\"'fa fa-asterisk'\">\n                                <amexio-image [path]=\"'assets/images/timeline/atatürk-ün-inanılmaz-karizmatik.jpg'\" [filter]=\"'sepia'\" [image-title]=\"'1916'\"\n                                    [title-position]=\"'bottom-left'\">\n                                </amexio-image>\n                                <amexio-label>\n                                    Promotedto general in 1916, at age 35, he liberated two major provinces in eastern Turkey thatyear. In the next two years,\n                                    he served as commander of several Ottoman armies inPalestine, Aleppo, and elsewhere,\n                                    achieving another major victory by stopping the enemyadvance at Aleppo.\n                                </amexio-label>\n                            </amexio-timeline-event>\n                        </amexio-timeline>\n                    </amexio-column>\n                </amexio-row>\n            </amexio-body>\n        </amexio-card>\n        <amexio-card header=\"true\">\n            <amexio-header> Timeline Component(Right-Align)</amexio-header>\n            <amexio-body>\n                <amexio-row>\n                    <amexio-column [size]=\"12\">\n                        <amexio-timeline [content-alignment]=\"'right'\">\n                            <amexio-timeline-event [label]=\"'Week One'\" [icon]=\"'fa fa-book'\" [content-border]=\"true\">\n                                <amexio-label size=\"medium-bold\">UNDERSTAND</amexio-label>\n                                <amexio-label size=\"small\">Gather existing knowledge,expose assumptions and unknowns</amexio-label>\n                            </amexio-timeline-event>\n                            <amexio-timeline-event [label]=\"'Week Two'\" [icon]=\"'fa fa-certificate'\" [content-border]=\"true\">\n\n                                <amexio-label size=\"medium-bold\"> DIVERGE</amexio-label>\n                                <amexio-label size=\"small\">Elluminate all paths.Our goal is to explore as many possibilities as possible,regardless\n                                    of how realistic,feasible or viable they may or may not be. </amexio-label>\n                            </amexio-timeline-event>\n                            <amexio-timeline-event [label]=\"'Week Three'\" [icon]=\"'fa fa-asterisk'\" [content-border]=\"true\">\n                                <amexio-label size=\"medium-bold\">CONVERGE</amexio-label>\n                                <amexio-label size=\"small\">Our Goal is to take all of the possibilities that we have exposed over the past two\n                                    weeks and hone in on a single version of the prototype that we will build tomorrow\n                                </amexio-label>\n                            </amexio-timeline-event>\n                            <amexio-timeline-event [label]=\"'Week Four'\" [icon]=\"'fa fa-cogs'\" [content-border]=\"true\">\n                                <amexio-label size=\"medium-bold\">PROTOTYPING</amexio-label>\n                                <amexio-label size=\"small\">During this phase you will build a quick and dirty prototype.Since you only have\n                                    at most a week to build the prototype it should be low-fi as you can get away\n                                    with during Testing.</amexio-label>\n                            </amexio-timeline-event>\n                            <amexio-timeline-event [label]=\"'Week Five'\" [icon]=\"'fa fa-edit'\" [content-border]=\"true\">\n                                <amexio-label size=\"medium-bold\">TESTING</amexio-label>\n                                <amexio-label size=\"small\">Going into each test you should have a plan of what you area testing and how you\n                                    know if that is successful or not.</amexio-label>\n                            </amexio-timeline-event>\n                            <amexio-timeline-event [label]=\"'Week Six'\" [icon]=\"'fa fa-spinner'\" [content-border]=\"true\">\n                                <amexio-label size=\"medium-bold\">REITERATION</amexio-label>\n                                <amexio-label size=\"small\">To reiterate something is to say or do something again, or many times.Let me reiterate:if\n                                    you reapeat yourself,you're reiterating the thing you originally said.</amexio-label>\n                            </amexio-timeline-event>\n                            <amexio-timeline-event [label]=\"'Week Seven'\" [icon]=\"'fa fa-calendar'\" [content-border]=\"true\">\n                                <amexio-label size=\"medium-bold\">REVIEW</amexio-label>\n                                <amexio-label size=\"small\">To look back over something for evaluation or memory.*The year in review* is a popular\n                                    form of news feature near the end of December.</amexio-label>\n                            </amexio-timeline-event>\n                            <amexio-timeline-event [label]=\"'Week Eight'\" [icon]=\"'fa fa-thumbs-up'\" [content-border]=\"true\">\n                                <amexio-label size=\"medium-bold\">FINALIZE </amexio-label>\n                                <amexio-label size=\"small\">When you put the finishing touches on something,such as agreeeing on a specific time\n                                    and place to meet your friend on Saturday,you finalie your plans.</amexio-label>\n                            </amexio-timeline-event>\n                        </amexio-timeline>\n                    </amexio-column>\n                </amexio-row>\n            </amexio-body>\n        </amexio-card>\n\n        </amexio-api-demo>\n        </amexio-api-structure>\n"

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
    }
    TimelineDemoComponent.prototype.getDta = function () {
        var _this = this;
        this.asyncFlag = true;
        setTimeout(function () {
            _this.asyncFlag = false;
        }, 3000);
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



/***/ }),

/***/ "./src/app/data/tree/checkboxtree/checkboxtree.demo.html":
/*!***************************************************************!*\
  !*** ./src/app/data/tree/checkboxtree/checkboxtree.demo.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    \n    <amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/data/tree.json'\">\n      <amexio-api-demo>\n      \n    <amexio-row>\n      <amexio-column size=\"6\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n             Tree with Checkbox\n          </amexio-header>\n          <amexio-body>\n            <amexio-treeview [enable-checkbox]=\"true\" [data-reader]=\"'data'\"\n                             [data]=\"treeLocalData\" (onTreeNodeChecked)=\"getNodeData($event)\">\n            </amexio-treeview>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n      <amexio-column size=\"6\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n             Selected Data \n          </amexio-header>\n          <amexio-body>\n            <pre><code>{{selectedData | json}}</code></pre>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>"

/***/ }),

/***/ "./src/app/data/tree/checkboxtree/checkboxtree.demo.ts":
/*!*************************************************************!*\
  !*** ./src/app/data/tree/checkboxtree/checkboxtree.demo.ts ***!
  \*************************************************************/
/*! exports provided: CheckboxTreeDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxTreeDemo", function() { return CheckboxTreeDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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



var CheckboxTreeDemo = /** @class */ (function () {
    function CheckboxTreeDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
        this.treeLocalData = {
            "data": [{
                    "text": "Web App",
                    "expand": true,
                    "children": [
                        {
                            "text": "app",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "Application.js"
                                }
                            ]
                        },
                        {
                            "text": "button",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "Button.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Cycle.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Split.js"
                                }
                            ]
                        },
                        {
                            "text": "container",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "ButtonGroup.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Container.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Viewport.js",
                                    "expand": true,
                                    "children": [],
                                    "lazy": {
                                        "http-url": "data/treeview.json",
                                        "http-method": "get"
                                    }
                                }
                            ]
                        },
                        {
                            "text": "core",
                            "expand": true,
                            "children": [
                                {
                                    "text": "dom",
                                    "expand": true,
                                    "children": [
                                        {
                                            "leaf": true,
                                            "text": "Element.form.js"
                                        },
                                        {
                                            "leaf": true,
                                            "text": "Element.static-more.js"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }]
        };
    }
    CheckboxTreeDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    CheckboxTreeDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Tree With Checkbox';
        this.customSourceData.description = 'A Expandable Tree Component for Angular, having Checkbox functionality.';
        this.customSourceData.sourceMetadata.htmlUrl = 'data/tree/checkboxtree/checkboxtree.html';
        this.customSourceData.sourceMetadata.tsUrl = 'data/tree/checkboxtree/checkboxtree.text';
        this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/treeview.json';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-tree-with-checkbox?embed=1&file=app/tree/treewithcheckbox/treewithcheckbox.demo.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    CheckboxTreeDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    CheckboxTreeDemo.prototype.getNodeData = function (data) {
        this.selectedData = data;
    };
    CheckboxTreeDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'checkbox-tree-demo',
            template: __webpack_require__(/*! ./checkboxtree.demo.html */ "./src/app/data/tree/checkboxtree/checkboxtree.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CheckboxTreeDemo);
    return CheckboxTreeDemo;
}());



/***/ }),

/***/ "./src/app/data/tree/collapsetree/collapsetree.demo.html":
/*!***************************************************************!*\
  !*** ./src/app/data/tree/collapsetree/collapsetree.demo.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/data/tree.json'\">\n    <amexio-api-demo>\n    \n       \n       <amexio-row>\n            <amexio-column size=\"6\">\n                <amexio-card [header]=\"true\" [footer]=\"true\" [footer-align]=\"'right'\">\n                    <amexio-header style=\"width:100%\">\n                    <amexio-toolbar>\n                    <amexio-toolbar-item position-left >\n                    <amexio-image [ngClass]=\"text\" (click)=\"expandAlldata(id)\">\n                         </amexio-image>\n                    </amexio-toolbar-item>\n                    <amexio-toolbar-item position-left >\n                     <label style=\"margin-top: 0px; font-size: 18px\">\n                     &nbsp;  &nbsp; Expand all and collapse all function\n                     </label>\n                    </amexio-toolbar-item>\n                    </amexio-toolbar>\n                        \n                    </amexio-header>\n                    <amexio-body>\n                        <amexio-treeview #id [data-reader]=\"'item'\" [data]=\"treeLocalExpandData\" (nodeClick)=\"getNodeDataClick($event)\">\n                        </amexio-treeview>\n                    </amexio-body>\n                    <amexio-action>\n                        </amexio-action>\n                </amexio-card>\n            </amexio-column>\n            <amexio-column size=\"6\" [fit]='true'>\n                <amexio-card [header]=\"true\">\n                    <amexio-header>\n                        Selected Data\n                    </amexio-header>\n                    <amexio-body>\n                        <pre><code>{{expandSelectedData | json}}</code></pre>\n                    </amexio-body>\n                </amexio-card>\n            </amexio-column>\n        </amexio-row>\n\n        </amexio-api-demo>\n        </amexio-api-structure>"

/***/ }),

/***/ "./src/app/data/tree/collapsetree/collapsetree.demo.ts":
/*!*************************************************************!*\
  !*** ./src/app/data/tree/collapsetree/collapsetree.demo.ts ***!
  \*************************************************************/
/*! exports provided: CollapseTreeDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseTreeDemo", function() { return CollapseTreeDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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



var CollapseTreeDemo = /** @class */ (function () {
    function CollapseTreeDemo(http) {
        this.http = http;
        this.text = "fa fa-minus";
        this.expand = true;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
        this.treeLocalExpandData = {
            "item": [{
                    "text": "Web App",
                    "expand": true,
                    "children": [
                        {
                            "text": "app",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "Application.js"
                                }
                            ]
                        },
                        {
                            "text": "button",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "Button.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Cycle.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Split.js"
                                }
                            ]
                        },
                        {
                            "text": "container",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "ButtonGroup.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Container.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Viewport.js",
                                    "expand": true,
                                    "children": [],
                                    "lazy": {
                                        "http-url": "data/treeview.json",
                                        "http-method": "get"
                                    }
                                }
                            ]
                        },
                        {
                            "text": "core",
                            "expand": true,
                            "children": [
                                {
                                    "text": "dom",
                                    "expand": true,
                                    "children": [
                                        {
                                            "leaf": true,
                                            "text": "Element.form.js"
                                        },
                                        {
                                            "leaf": true,
                                            "text": "Element.static-more.js"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }]
        };
    }
    CollapseTreeDemo.prototype.expandAlldata = function (id) {
        if (!this.expand) {
            id.expandAll();
            this.text = "fa fa-minus";
        }
        else {
            id.collapseAll();
            this.text = "fa fa-plus";
        }
        this.expand = !this.expand;
    };
    CollapseTreeDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    CollapseTreeDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Collapseable And Expandable Tree ';
        this.customSourceData.description = 'A Collapse and Expandable Tree component which create Tree View based on standard datasource attached.';
        this.customSourceData.sourceMetadata.htmlUrl = 'data/tree/collapsetree/collapsetree.html';
        this.customSourceData.sourceMetadata.tsUrl = 'data/tree/collapsetree/collapsetree.text';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-collapseble-tree?embed=1&file=app/collapsetree/simpletree/simpletree.demo.html&view=editor';
    };
    CollapseTreeDemo.prototype.getNodeData = function (data) {
        this.selectedData = data;
    };
    CollapseTreeDemo.prototype.getNodeDataClick = function (data) {
        this.expandSelectedData = data;
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    CollapseTreeDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    CollapseTreeDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'collapsetree-demo',
            template: __webpack_require__(/*! ./collapsetree.demo.html */ "./src/app/data/tree/collapsetree/collapsetree.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CollapseTreeDemo);
    return CollapseTreeDemo;
}());



/***/ }),

/***/ "./src/app/data/tree/contextmenutree/contextmenutree.demo.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/data/tree/contextmenutree/contextmenutree.demo.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   \n    <amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/data/tree.json'\">\n      <amexio-api-demo>\n      \n   <amexio-row>\n      <amexio-column size=\"8\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n              Tree With Context Menu \n          </amexio-header>\n          <amexio-body>\n            <amexio-treeview \n                [data-reader]=\"'data'\" \n                [data]=\"treeLocalData\" \n                [context-menu]=\"rightclickdata\">\n            </amexio-treeview>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n    </amexio-api-demo>\n    </amexio-api-structure>"

/***/ }),

/***/ "./src/app/data/tree/contextmenutree/contextmenutree.demo.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/data/tree/contextmenutree/contextmenutree.demo.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ContextMenuTreeDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuTreeDemo", function() { return ContextMenuTreeDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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



var ContextMenuTreeDemo = /** @class */ (function () {
    function ContextMenuTreeDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
        this.rightclickdata =
            [{ "text": "Add New", "icon": "fa fa-plus", "disabled": true }, { "text": "Edit", "icon": "", "seperator": true },
                { "text": "Send data in email", "icon": "" }];
        this.treeLocalData = {
            "data": [{
                    "text": "Web App",
                    "expand": true,
                    "children": [
                        {
                            "text": "app",
                            "expand": true,
                            "badge": 1,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "Application.js",
                                }
                            ]
                        },
                        {
                            "text": "button",
                            "expand": true,
                            "badge": 3,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "Button.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Cycle.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Split.js"
                                }
                            ]
                        },
                        {
                            "text": "container",
                            "expand": true,
                            "badge": 3,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "ButtonGroup.js",
                                },
                                {
                                    "leaf": true,
                                    "text": "Container.js",
                                },
                                {
                                    "leaf": true,
                                    "text": "Viewport.js",
                                    "expand": true,
                                    "children": [],
                                    "lazy": {
                                        "http-url": "data/treeview.json",
                                        "http-method": "get"
                                    }
                                }
                            ]
                        },
                        {
                            "text": "core",
                            "expand": true,
                            "badge": 1,
                            "children": [
                                {
                                    "text": "dom",
                                    "expand": true,
                                    "badge": 2,
                                    "children": [
                                        {
                                            "leaf": true,
                                            "text": "Element.form.js"
                                        },
                                        {
                                            "leaf": true,
                                            "text": "Element.static-more.js"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }]
        };
    }
    ContextMenuTreeDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    ContextMenuTreeDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Tree With Context Menu';
        this.customSourceData.description = 'A Expandable Tree component which create Tree View based on standard datasource with context menu(right-click mouse operation)';
        this.customSourceData.sourceMetadata.htmlUrl = 'data/tree/contextmenutree/tree.html';
        this.customSourceData.sourceMetadata.tsUrl = 'data/tree/contextmenutree/tree.text';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-tree-contextmenu-demo?embed=1&file=src/app/contextualmenu/tree/tree.demo.component.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    ContextMenuTreeDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    ContextMenuTreeDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contextmenutree-demo',
            template: __webpack_require__(/*! ./contextmenutree.demo.component.html */ "./src/app/data/tree/contextmenutree/contextmenutree.demo.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContextMenuTreeDemo);
    return ContextMenuTreeDemo;
}());



/***/ }),

/***/ "./src/app/data/tree/filtertree/filtertree.demo.html":
/*!***********************************************************!*\
  !*** ./src/app/data/tree/filtertree/filtertree.demo.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    \n     <amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/data/filtertree.json'\">\n      <amexio-api-demo>\n    <amexio-row>\n      <amexio-column size=\"6\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n             Filter Tree\n          </amexio-header>\n          <amexio-body>\n            <amexio-tree-filter-view [data-reader]=\"'data'\"\n                                     [http-method]=\"'get'\" (nodeClick)=\"getNodeData($event)\"\n                                     [http-url]=\"'assets/data/componentdata/sidenav.json'\">\n            </amexio-tree-filter-view>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n      <amexio-column size=\"6\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n             Selected Data\n          </amexio-header>\n          <amexio-body>\n            <pre><code>{{selectedData | json}}</code></pre>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>"

/***/ }),

/***/ "./src/app/data/tree/filtertree/filtertree.demo.ts":
/*!*********************************************************!*\
  !*** ./src/app/data/tree/filtertree/filtertree.demo.ts ***!
  \*********************************************************/
/*! exports provided: FilterTreeDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTreeDemo", function() { return FilterTreeDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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



var FilterTreeDemo = /** @class */ (function () {
    function FilterTreeDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
        this.treeLocalData = {
            "data": [{
                    "text": "Web App",
                    "expand": true,
                    "children": [
                        {
                            "text": "app",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "Application.js"
                                }
                            ]
                        },
                        {
                            "text": "button",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "Button.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Cycle.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Split.js"
                                }
                            ]
                        },
                        {
                            "text": "container",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "ButtonGroup.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Container.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Viewport.js",
                                    "expand": true,
                                    "children": [],
                                    "lazy": {
                                        "http-url": "data/treeview.json",
                                        "http-method": "get"
                                    }
                                }
                            ]
                        },
                        {
                            "text": "core",
                            "expand": true,
                            "children": [
                                {
                                    "text": "dom",
                                    "expand": true,
                                    "children": [
                                        {
                                            "leaf": true,
                                            "text": "Element.form.js"
                                        },
                                        {
                                            "leaf": true,
                                            "text": "Element.static-more.js"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }]
        };
    }
    FilterTreeDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    FilterTreeDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Filter Tree';
        this.customSourceData.description = 'A Expandable Tree Component for Angular, having Filtering functionality.';
        this.customSourceData.sourceMetadata.htmlUrl = 'data/tree/filtertree/filtertree.html';
        this.customSourceData.sourceMetadata.tsUrl = 'data/tree/filtertree/filtertree.text';
        this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/sidenav.json';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-tree-with-filter?embed=1&file=app/tree/treewithfilter/treewithfilter.demo.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    FilterTreeDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    FilterTreeDemo.prototype.getNodeData = function (data) {
        this.selectedData = data;
    };
    FilterTreeDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tree-filter-demo',
            template: __webpack_require__(/*! ./filtertree.demo.html */ "./src/app/data/tree/filtertree/filtertree.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FilterTreeDemo);
    return FilterTreeDemo;
}());



/***/ }),

/***/ "./src/app/data/tree/horizontaltree/horizontaltree.demo.html":
/*!*******************************************************************!*\
  !*** ./src/app/data/tree/horizontaltree/horizontaltree.demo.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/data/horizontaltree.json'\">\n  <amexio-api-demo>\n  \n  <amexio-row>\n      <amexio-column size=\"12\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n             Horizontal Tree \n          </amexio-header>\n          <amexio-body>\n            <amexio-horizontal-treeview [data-reader]=\"'data'\"\n                                     [http-method]=\"'get'\" \n                                     [label]=\"'Menu'\"\n                                     (nodeClick)=\"getNodeData($event)\"\n                                     [http-url]=\"'assets/data/componentdata/sidenav.json'\">\n            </amexio-horizontal-treeview>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n    <amexio-row>\n      <amexio-column size=\"6\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n             Selected Data \n          </amexio-header>\n          <amexio-body>\n            <pre><code>{{selectedData | json}}</code></pre>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n\n    </amexio-api-demo>\n    </amexio-api-structure>\n    "

/***/ }),

/***/ "./src/app/data/tree/horizontaltree/horizontaltree.demo.ts":
/*!*****************************************************************!*\
  !*** ./src/app/data/tree/horizontaltree/horizontaltree.demo.ts ***!
  \*****************************************************************/
/*! exports provided: HorizontalTreeDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalTreeDemo", function() { return HorizontalTreeDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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



var HorizontalTreeDemo = /** @class */ (function () {
    function HorizontalTreeDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
        this.treeLocalData = {
            "data": [{
                    "text": "Web App",
                    "expand": true,
                    "children": [
                        {
                            "text": "app",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "Application.js"
                                }
                            ]
                        },
                        {
                            "text": "button",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "Button.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Cycle.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Split.js"
                                }
                            ]
                        },
                        {
                            "text": "container",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "ButtonGroup.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Container.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Viewport.js",
                                    "expand": true,
                                    "children": [],
                                    "lazy": {
                                        "http-url": "data/treeview.json",
                                        "http-method": "get"
                                    }
                                }
                            ]
                        },
                        {
                            "text": "core",
                            "expand": true,
                            "children": [
                                {
                                    "text": "dom",
                                    "expand": true,
                                    "children": [
                                        {
                                            "leaf": true,
                                            "text": "Element.form.js"
                                        },
                                        {
                                            "leaf": true,
                                            "text": "Element.static-more.js"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }]
        };
    }
    HorizontalTreeDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    HorizontalTreeDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'horizontal Tree';
        this.customSourceData.description = 'A Horizontal Tree Component.';
        this.customSourceData.sourceMetadata.htmlUrl = 'data/tree/horizontaltree/horizontaltree.html';
        this.customSourceData.sourceMetadata.tsUrl = 'data/tree/horizontaltree/horizontaltree.text';
        this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/sidenav.json';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-tree-horizontal?embed=1&file=app/tree/treehorizontal/treehorizontal.demo.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    HorizontalTreeDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    HorizontalTreeDemo.prototype.getNodeData = function (data) {
        this.selectedData = data;
    };
    HorizontalTreeDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'horizontal-tree-demo',
            template: __webpack_require__(/*! ./horizontaltree.demo.html */ "./src/app/data/tree/horizontaltree/horizontaltree.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HorizontalTreeDemo);
    return HorizontalTreeDemo;
}());



/***/ }),

/***/ "./src/app/data/tree/simpletree/simpletree.demo.html":
/*!***********************************************************!*\
  !*** ./src/app/data/tree/simpletree/simpletree.demo.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/data/tree.json'\">\n    <amexio-api-demo>\n        <amexio-row>\n            <amexio-column size=\"6\" [fit]=\"true\">\n                <amexio-card [header]=\"true\">\n                    <amexio-header>\n                        Simple Tree\n                    </amexio-header>\n                    <amexio-body>\n                        <amexio-treeview [data-reader]=\"'data'\" [data]=\"treeLocalData\" (nodeClick)=\"getNodeData($event)\">\n                        </amexio-treeview>\n                    </amexio-body>\n                </amexio-card>\n            </amexio-column>\n            <amexio-column size=\"6\" [fit]=\"true\">\n                <amexio-card [header]=\"true\">\n                    <amexio-header>\n                        Selected Data\n                    </amexio-header>\n                    <amexio-body>\n                        <pre><code>{{selectedData | json}}</code></pre>\n                    </amexio-body>\n                </amexio-card>\n            </amexio-column>\n        </amexio-row>\n\n\n        <amexio-card header=\"true\">\n            <amexio-header>\n                Dynamically Changes Tree Data\n            </amexio-header>\n            <amexio-body>\n\n                <p> By Default Tree consumes standard JSON structure i.e to display node/leaf “Text” Key\n                    should be present in JSON && array with “Children” Key present in JSON.\n                    Now with 5.2.x release Amexio-tree component can consume user defined data structure and\n                    pass what is key for node/leaf and what is key for children array.\n                </p>\n                <amexio-row>\n                    <amexio-column size=\"6\" [fit]=\"true\">\n                        <amexio-card [header]=\"true\">\n                            <amexio-header>\n                                Tree with user define keys\n                            </amexio-header>\n                            <amexio-body>\n\n                                <amexio-treeview [data-reader]=\"'customArray'\" [display-key]=\"'demo'\" [child-array-key]=\"'object'\"\n                                    [data]=\"customArrayLocalData\" (nodeClick)=\"getCustomNodeData($event)\">\n                                </amexio-treeview>\n                            </amexio-body>\n                        </amexio-card>\n                    </amexio-column>\n                    <amexio-column size=\"6\" [fit]=\"true\">\n                        <amexio-card [header]=\"true\">\n                            <amexio-header>\n                                Selected Data\n                            </amexio-header>\n                            <amexio-body>\n                                <pre><code>{{selectedCustomData | json}}</code></pre>\n                            </amexio-body>\n                        </amexio-card>\n                    </amexio-column>\n                </amexio-row>\n            </amexio-body>\n        </amexio-card>\n\n    </amexio-api-demo>\n</amexio-api-structure>"

/***/ }),

/***/ "./src/app/data/tree/simpletree/simpletree.demo.ts":
/*!*********************************************************!*\
  !*** ./src/app/data/tree/simpletree/simpletree.demo.ts ***!
  \*********************************************************/
/*! exports provided: SimpleTreeDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleTreeDemo", function() { return SimpleTreeDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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



var SimpleTreeDemo = /** @class */ (function () {
    function SimpleTreeDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
        this.treeLocalData = {
            "data": [{
                    "text": "Web App",
                    "expand": true,
                    "children": [
                        {
                            "text": "app",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "Application.js"
                                }
                            ]
                        },
                        {
                            "text": "button",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "Button.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Cycle.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Split.js"
                                }
                            ]
                        },
                        {
                            "text": "container",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "ButtonGroup.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Container.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Viewport.js",
                                    "expand": true,
                                    "children": [],
                                    "lazy": {
                                        "http-url": "data/treeview.json",
                                        "http-method": "get"
                                    }
                                }
                            ]
                        },
                        {
                            "text": "core",
                            "expand": true,
                            "children": [
                                {
                                    "text": "dom",
                                    "expand": true,
                                    "children": [
                                        {
                                            "leaf": true,
                                            "text": "Element.form.js"
                                        },
                                        {
                                            "leaf": true,
                                            "text": "Element.static-more.js"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }]
        };
        this.customArrayLocalData = {
            "customArray": [{
                    "demo": "Web App",
                    "expand": true,
                    "object": [
                        {
                            "demo": "app",
                            "expand": true,
                            "object": [
                                {
                                    "leaf": true,
                                    "demo": "Application.js"
                                }
                            ]
                        },
                        {
                            "demo": "button",
                            "expand": true,
                            "object": [
                                {
                                    "leaf": true,
                                    "demo": "Button.js"
                                },
                                {
                                    "leaf": true,
                                    "demo": "Cycle.js"
                                },
                                {
                                    "leaf": true,
                                    "demo": "Split.js"
                                }
                            ]
                        },
                        {
                            "demo": "container",
                            "expand": true,
                            "object": [
                                {
                                    "leaf": true,
                                    "demo": "ButtonGroup.js"
                                },
                                {
                                    "leaf": true,
                                    "demo": "Container.js"
                                },
                                {
                                    "leaf": true,
                                    "demo": "Viewport.js",
                                    "expand": true,
                                    "object": [],
                                    "lazy": {
                                        "http-url": "data/treeview.json",
                                        "http-method": "get"
                                    }
                                }
                            ]
                        },
                        {
                            "demo": "core",
                            "expand": true,
                            "object": [
                                {
                                    "demo": "dom",
                                    "expand": true,
                                    "object": [
                                        {
                                            "leaf": true,
                                            "demo": "Element.form.js"
                                        },
                                        {
                                            "leaf": true,
                                            "demo": "Element.static-more.js"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }]
        };
    }
    SimpleTreeDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    SimpleTreeDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'simple Tree';
        this.customSourceData.description = 'A Simple Expandable Tree component which create Tree View based on standard datasource attached.';
        this.customSourceData.sourceMetadata.htmlUrl = 'data/tree/simpletree/simpletree.html';
        this.customSourceData.sourceMetadata.tsUrl = 'data/tree/simpletree/simpletree.text';
        this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/simpletreeview.json';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-simple-tree?embed=1&file=app/tree/simpletree/simpletree.demo.html&view=editor';
    };
    SimpleTreeDemo.prototype.getNodeData = function (data) {
        this.selectedData = data;
    };
    SimpleTreeDemo.prototype.getCustomNodeData = function (data) {
        this.selectedCustomData = data;
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    SimpleTreeDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    SimpleTreeDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'simpletree-demo',
            template: __webpack_require__(/*! ./simpletree.demo.html */ "./src/app/data/tree/simpletree/simpletree.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SimpleTreeDemo);
    return SimpleTreeDemo;
}());



/***/ }),

/***/ "./src/app/data/tree/treedragdrop/treedragdrop.demo.html":
/*!***************************************************************!*\
  !*** ./src/app/data/tree/treedragdrop/treedragdrop.demo.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/data/tree.json'\">\n    <amexio-api-demo>\n<amexio-row>\n    <amexio-column size=\"12\">\n        <amexio-card [header]=\"true\">\n            <amexio-header>\n                Drag Drop Functionality within Tree\n            </amexio-header>\n            <amexio-body>\n                <amexio-treeview [data-reader]=\"'data'\" [enable-drag]=\"true\" [enable-drop]=\"true\" [data]=\"treeData\">\n                </amexio-treeview>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n\n    <amexio-column size=\"12\">\n        <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'right'\">\n            <amexio-header>\n                Drag Drop Functionality across Tree\n            </amexio-header>\n            <amexio-body>\n                <amexio-row>\n                    <amexio-column [size]=\"6\">\n                        <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'right'\">\n                            <amexio-header>\n                                Tree 1\n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-treeview #tree (onDrop)=\"getDropData1($event)\" [data-reader]=\"'data'\"\n                                    [enable-drag]=\"true\" [enable-drop]=\"true\" [data]=\"treeLocalData\" [across-tree]=\"true\">\n                                </amexio-treeview>\n                            </amexio-body>\n                        </amexio-card>\n                    </amexio-column>\n\n                    <amexio-column [size]=\"6\">\n                        <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'right'\">\n                            <amexio-header>\n                                Tree 2\n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-treeview #tree1 (onDrop)=\"getDropData($event)\" [data-reader]=\"'data'\"\n                                    [enable-drag]=\"true\" [enable-drop]=\"true\" [data]=\"treeLocalData1\" [across-tree]=\"true\">\n                                </amexio-treeview>\n                            </amexio-body>\n                        </amexio-card>\n                    </amexio-column>\n                </amexio-row>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n\n    <amexio-column size=\"12\">\n        <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'right'\">\n            <amexio-header>\n                Drag and Drop: Tree to Panel\n            </amexio-header>\n            <amexio-body>\n                <amexio-row>\n                    <amexio-column [size]=\"6\">\n                        <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'right'\">\n                            <amexio-header>\n                                Tree 1\n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-treeview [data-reader]=\"'data'\" (onDrag)=\"drag($event)\" [enable-drag]=\"true\"\n                                    [enable-drop]=\"false\" [data]=\"treeLocalData\">\n                                </amexio-treeview>\n                            </amexio-body>\n                        </amexio-card>\n                    </amexio-column>\n\n                    <amexio-column [size]=\"6\">\n                        <amexio-panel (dragover)=\"dragOver($event)\" (drop)=\"drop($event)\" [header]=\"true\" [title]=\"'Panel'\"\n                            [expanded]=\"true\">\n                            <pre><code>{{selectedData | json}}</code></pre>\n                        </amexio-panel>\n                    </amexio-column>\n                </amexio-row>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n</amexio-row>\n</amexio-api-demo>\n</amexio-api-structure>"

/***/ }),

/***/ "./src/app/data/tree/treedragdrop/treedragdrop.demo.ts":
/*!*************************************************************!*\
  !*** ./src/app/data/tree/treedragdrop/treedragdrop.demo.ts ***!
  \*************************************************************/
/*! exports provided: DragDropTreeDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropTreeDemo", function() { return DragDropTreeDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
/**
 * Created by rashmi on 20/6/18.
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



var DragDropTreeDemo = /** @class */ (function () {
    function DragDropTreeDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
        this.treeData = {
            "data": [{
                    "text": "Web App",
                    "expand": true,
                    "children": [
                        {
                            "text": "app",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "Application.js"
                                }
                            ]
                        },
                        {
                            "text": "button",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "Button.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Cycle.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Split.js"
                                }
                            ]
                        },
                        {
                            "text": "container",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "ButtonGroup.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Container.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Viewport.js",
                                    "expand": true,
                                    "children": [],
                                    "lazy": {
                                        "http-url": "data/treeview.json",
                                        "http-method": "get"
                                    }
                                }
                            ]
                        },
                        {
                            "text": "core",
                            "expand": true,
                            "children": [
                                {
                                    "text": "dom",
                                    "expand": true,
                                    "children": [
                                        {
                                            "leaf": true,
                                            "text": "Element.form.js"
                                        },
                                        {
                                            "leaf": true,
                                            "text": "Element.static-more.js"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }]
        };
        this.treeLocalData = {
            "data": [{
                    "text": "Web App",
                    "expand": true,
                    "children": [
                        {
                            "text": "app",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "Application.js"
                                }
                            ]
                        },
                        {
                            "text": "button",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "Button.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Cycle.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Split.js"
                                }
                            ]
                        },
                        {
                            "text": "container",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "ButtonGroup.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Container.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Viewport.js",
                                    "expand": true,
                                    "children": [],
                                    "lazy": {
                                        "http-url": "data/treeview.json",
                                        "http-method": "get"
                                    }
                                }
                            ]
                        },
                        {
                            "text": "core",
                            "expand": true,
                            "children": [
                                {
                                    "text": "dom",
                                    "expand": true,
                                    "children": [
                                        {
                                            "leaf": true,
                                            "text": "Element.form.js"
                                        },
                                        {
                                            "leaf": true,
                                            "text": "Element.static-more.js"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }]
        };
        this.treeLocalData1 = {
            "data": [{
                    "text": "Web App",
                    "expand": true,
                    "children": [
                        {
                            "text": "Grid",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "Column.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Boolean.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Check.js"
                                }
                            ]
                        },
                        {
                            "text": "Layout",
                            "expand": true,
                            "children": [
                                {
                                    "text": "Component",
                                    "expand": true,
                                    "children": [
                                        {
                                            "leaf": true,
                                            "text": "Auto.js"
                                        },
                                        {
                                            "leaf": true,
                                            "text": "FieldSet.js"
                                        },
                                        {
                                            "leaf": true,
                                            "text": "Dock.js"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "text": "Tree",
                            "expand": true,
                            "children": [
                                {
                                    "text": "Plugin",
                                    "expand": true,
                                    "children": [
                                        {
                                            "leaf": true,
                                            "text": "TreeViewDragDrop.js"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "text": "Panel",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "Header.js"
                                }
                            ]
                        }
                    ]
                }]
        };
    }
    DragDropTreeDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    DragDropTreeDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'drag and drop Tree';
        this.customSourceData.description = 'A Expandable Tree component which create Tree View based on standard datasource attached and having functionality of drag and drop (within tree as well as across tree).    ';
        this.customSourceData.sourceMetadata.htmlUrl = 'data/tree/dragdroptree/dragdroptree.html';
        this.customSourceData.sourceMetadata.tsUrl = 'data/tree/dragdroptree/dragdroptree.text';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-dragdrop?embed=1&file=app/tree/acrosstree/acrosstree.demo.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    DragDropTreeDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    DragDropTreeDemo.prototype.getDropData = function (event) {
        this.treeRef.removeNode(event);
    };
    DragDropTreeDemo.prototype.getDropData1 = function (event) {
        this.treeRef1.removeNode(event);
    };
    DragDropTreeDemo.prototype.drag = function (data) {
        data.event.dataTransfer.setData("dragdata", JSON.stringify(data.data));
    };
    DragDropTreeDemo.prototype.dragOver = function (event) {
        event.preventDefault();
    };
    DragDropTreeDemo.prototype.drop = function (event) {
        event.preventDefault();
        this.selectedData = JSON.parse(event.dataTransfer.getData('dragdata'));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tree'),
        __metadata("design:type", Object)
    ], DragDropTreeDemo.prototype, "treeRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tree1'),
        __metadata("design:type", Object)
    ], DragDropTreeDemo.prototype, "treeRef1", void 0);
    DragDropTreeDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dragdroptree-demo',
            template: __webpack_require__(/*! ./treedragdrop.demo.html */ "./src/app/data/tree/treedragdrop/treedragdrop.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DragDropTreeDemo);
    return DragDropTreeDemo;
}());



/***/ }),

/***/ "./src/app/data/tree/treewithbadge/treewithbadge.demo.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/data/tree/treewithbadge/treewithbadge.demo.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/data/tree.json'\">\n  <amexio-api-demo>\n   \n   <amexio-row>\n      <amexio-column size=\"6\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n             Simple Tree \n          </amexio-header>\n          <amexio-body>\n            <amexio-treeview [badge]=\"true\" [data-reader]=\"'data'\" [data]=\"treeLocalData\" (nodeClick)=\"getNodeData($event)\">\n            </amexio-treeview>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n      <amexio-column size=\"6\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n             Selected Data \n          </amexio-header>\n          <amexio-body>\n            <pre><code>{{selectedData | json}}</code></pre>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n\n    </amexio-api-demo>\n    </amexio-api-structure>"

/***/ }),

/***/ "./src/app/data/tree/treewithbadge/treewithbadge.demo.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/data/tree/treewithbadge/treewithbadge.demo.component.ts ***!
  \*************************************************************************/
/*! exports provided: TreeWithBadgeDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeWithBadgeDemo", function() { return TreeWithBadgeDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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



var TreeWithBadgeDemo = /** @class */ (function () {
    function TreeWithBadgeDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
        this.treeLocalData = {
            "data": [{
                    "text": "Web App",
                    "expand": true,
                    "children": [
                        {
                            "text": "app",
                            "expand": true,
                            "badge": 1,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "Application.js",
                                }
                            ]
                        },
                        {
                            "text": "button",
                            "expand": true,
                            "badge": 3,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "Button.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Cycle.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Split.js"
                                }
                            ]
                        },
                        {
                            "text": "container",
                            "expand": true,
                            "badge": 3,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "ButtonGroup.js",
                                },
                                {
                                    "leaf": true,
                                    "text": "Container.js",
                                },
                                {
                                    "leaf": true,
                                    "text": "Viewport.js",
                                    "expand": true,
                                    "children": [],
                                    "lazy": {
                                        "http-url": "data/treeview.json",
                                        "http-method": "get"
                                    }
                                }
                            ]
                        },
                        {
                            "text": "core",
                            "expand": true,
                            "badge": 1,
                            "children": [
                                {
                                    "text": "dom",
                                    "expand": true,
                                    "badge": 2,
                                    "children": [
                                        {
                                            "leaf": true,
                                            "text": "Element.form.js"
                                        },
                                        {
                                            "leaf": true,
                                            "text": "Element.static-more.js"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }]
        };
    }
    TreeWithBadgeDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    TreeWithBadgeDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Tree With Badge';
        this.customSourceData.description = 'A Simple Expandable Tree component which create Tree View based on standard datasource attached with badge property    ';
        this.customSourceData.sourceMetadata.htmlUrl = 'data/tree/treewithbadge/tree.html';
        this.customSourceData.sourceMetadata.tsUrl = 'data/tree/treewithbadge/tree.text';
        this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/treeviewwithbadge.json';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-tree-with-badge?embed=1&file=app/tree/simpletree/simpletree.demo.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    TreeWithBadgeDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    TreeWithBadgeDemo.prototype.getNodeData = function (data) {
        this.selectedData = data;
    };
    TreeWithBadgeDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'treewithbadge-demo',
            template: __webpack_require__(/*! ./treewithbadge.demo.component.html */ "./src/app/data/tree/treewithbadge/treewithbadge.demo.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TreeWithBadgeDemo);
    return TreeWithBadgeDemo;
}());



/***/ }),

/***/ "./src/app/data/tree/treewithtemplate/treewithtemplate.demo.html":
/*!***********************************************************************!*\
  !*** ./src/app/data/tree/treewithtemplate/treewithtemplate.demo.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/data/tree.json'\">\n  <amexio-api-demo>\n    \n    <amexio-row>\n      <amexio-column size=\"6\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n             Tree With template \n          </amexio-header>\n          <amexio-body>\n            <amexio-treeview [data-reader]=\"'data'\"\n                             [http-url]=\"'assets/data/componentdata/sidenav.json'\"\n                             [http-method]=\"'get'\" (nodeClick)=\"getNodeData($event)\">\n              <ng-template #amexioTreeTemplate let-tree let-icon=\"icon\" let-node=\"node\">\n                <i [attr.class]=\"node.icon\"></i> &nbsp;{{tree.text}}\n              </ng-template>\n            </amexio-treeview>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n      <amexio-column size=\"6\">\n        <amexio-card [header]=\"true\">\n          <amexio-header>\n             Selected Data \n          </amexio-header>\n          <amexio-body>\n            <pre><code>{{selectedData | json}}</code></pre>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n\n    </amexio-api-demo>\n    </amexio-api-structure>"

/***/ }),

/***/ "./src/app/data/tree/treewithtemplate/treewithtemplate.demo.ts":
/*!*********************************************************************!*\
  !*** ./src/app/data/tree/treewithtemplate/treewithtemplate.demo.ts ***!
  \*********************************************************************/
/*! exports provided: TreeWithTemplateDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeWithTemplateDemo", function() { return TreeWithTemplateDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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



var TreeWithTemplateDemo = /** @class */ (function () {
    function TreeWithTemplateDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
        this.treeLocalData = {
            "data": [{
                    "text": "Web App",
                    "expand": true,
                    "children": [
                        {
                            "text": "app",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "Application.js"
                                }
                            ]
                        },
                        {
                            "text": "button",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "Button.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Cycle.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Split.js"
                                }
                            ]
                        },
                        {
                            "text": "container",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "ButtonGroup.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Container.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Viewport.js",
                                    "expand": true,
                                    "children": [],
                                    "lazy": {
                                        "http-url": "data/treeview.json",
                                        "http-method": "get"
                                    }
                                }
                            ]
                        },
                        {
                            "text": "core",
                            "expand": true,
                            "children": [
                                {
                                    "text": "dom",
                                    "expand": true,
                                    "children": [
                                        {
                                            "leaf": true,
                                            "text": "Element.form.js"
                                        },
                                        {
                                            "leaf": true,
                                            "text": "Element.static-more.js"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }]
        };
    }
    TreeWithTemplateDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    TreeWithTemplateDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Tree With template';
        this.customSourceData.description = 'To define the detail template, nested ng-template tag inside the AmexioTreeComponent component. The template context is set to the current node.    ';
        this.customSourceData.sourceMetadata.htmlUrl = 'data/tree/treetemplate/treetemplate.html';
        this.customSourceData.sourceMetadata.tsUrl = 'data/tree/treetemplate/treetemplate.text';
        this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/sidenav.json';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-tree-with-template?embed=1&file=app/tree/treewithtemplate/treewithtemplate.demo.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    TreeWithTemplateDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    TreeWithTemplateDemo.prototype.getNodeData = function (data) {
        this.selectedData = data;
    };
    TreeWithTemplateDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tree-template-demo',
            template: __webpack_require__(/*! ./treewithtemplate.demo.html */ "./src/app/data/tree/treewithtemplate/treewithtemplate.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TreeWithTemplateDemo);
    return TreeWithTemplateDemo;
}());



/***/ }),

/***/ "./src/app/data/treedatagrid/treedatagrid.demo.html":
/*!**********************************************************!*\
  !*** ./src/app/data/treedatagrid/treedatagrid.demo.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/data/treedatagrid.json'\">\n    <amexio-api-demo>\n<amexio-row>\n            <amexio-column size=\"12\">\n                <amexio-card [footer]=\"false\" [header]=\"true\">\n                    <amexio-header> Tree Data Grid </amexio-header>\n                    <amexio-body>\n                        <amexio-tree-data-table [http-method]=\"'get'\" [http-url]=\"'assets/data/componentdata/treedatatable.json'\"\n                            [data-reader]=\"'data'\" (selectedRecord)=\"getSelectedData($event)\">\n                            <amexio-data-table-column [data-index]=\"'task'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                [text]=\"'Task'\"></amexio-data-table-column>\n                            <amexio-data-table-column [data-index]=\"'user'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                [text]=\"'User'\"></amexio-data-table-column>\n                            <amexio-data-table-column [data-index]=\"'duration'\" [data-type]=\"'number'\" [hidden]=\"false\"\n                                [text]=\"'Duration'\"></amexio-data-table-column>\n                        </amexio-tree-data-table>\n                        <p><b>Clicked Row Data : </b>{{selectedData | json}}</p>\n                    </amexio-body>\n                </amexio-card>\n            </amexio-column>\n        </amexio-row>\n\n\n        </amexio-api-demo>\n        </amexio-api-structure>\n        "

/***/ }),

/***/ "./src/app/data/treedatagrid/treedatagrid.demo.ts":
/*!********************************************************!*\
  !*** ./src/app/data/treedatagrid/treedatagrid.demo.ts ***!
  \********************************************************/
/*! exports provided: TreeDataGridDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDataGridDemo", function() { return TreeDataGridDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
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



var TreeDataGridDemo = /** @class */ (function () {
    function TreeDataGridDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
    }
    TreeDataGridDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    TreeDataGridDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Tree Data Grid';
        this.customSourceData.description = 'Collapsible Data Grid Component displays data in expandable/collapsible rows.';
        this.customSourceData.sourceMetadata.htmlUrl = 'data/treedatagrid/treedatagrid.html';
        this.customSourceData.sourceMetadata.tsUrl = 'data/treedatagrid/treedatagrid.text';
        this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/treedatatable.json';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-tree-data-grid?embed=1&file=app/grid/treedatagrid/treedatagrid.demo.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    TreeDataGridDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    TreeDataGridDemo.prototype.getSelectedData = function (data) {
        this.selectedData = data;
    };
    TreeDataGridDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'treedata-grid-demo',
            template: __webpack_require__(/*! ./treedatagrid.demo.html */ "./src/app/data/treedatagrid/treedatagrid.demo.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TreeDataGridDemo);
    return TreeDataGridDemo;
}());



/***/ }),

/***/ "./src/app/data/treedatatemplate/treedatatemplate.demo.html":
/*!******************************************************************!*\
  !*** ./src/app/data/treedatatemplate/treedatatemplate.demo.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-api-structure [custom-com-data]=\"customSourceData\" [url]=\"'assets/componentjson/data/treedatagrid.json'\">\n  <amexio-api-demo>\n  \n\n<amexio-row>\n    <amexio-column size=\"12\">\n      <amexio-card [footer]=\"false\" [header]=\"true\">\n        <amexio-header> Tree Data Template </amexio-header>\n        <amexio-body>\n        <amexio-tree-data-table [http-method]=\"'get'\"\n        [http-url]=\"'assets/data/componentdata/treedatatable.json'\" \n        [data-reader]=\"'data'\" (selectedRecord)=\"getSelectedData($event)\">\n        \n        <amexio-data-table-column [data-index]=\"'task'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Task'\">\n        \n        </amexio-data-table-column>\n            <amexio-data-table-column [data-index]=\"'user'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'User'\"></amexio-data-table-column>\n            <amexio-data-table-column    [data-index]=\"'duration'\" [data-type]=\"'number'\" [hidden]=\"false\" [text]=\"'Duration'\"></amexio-data-table-column>\n            \n           \n\n        <!--checkbox-->\n        <amexio-data-table-column  [data-index]=\"'done'\"  \n        [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Done'\">\n\n        <ng-template #amexioHeaderTmpl let-column=\"column\" let-index=\"index\">\n        <span style=\"padding-left:65px\">{{column.text}} </span> \n        </ng-template>\n\n        <ng-template #amexioBodyTmpl let-column let-row=\"row\" >\n    <span  style=\"display: flex;\n        justify-content: center;\">\n        <amexio-checkbox   \n            (onSelection)=\"onCheckClick(row)\" [(ngModel)]=\"row.done\">\n            \n        </amexio-checkbox>\n        \n      </span>\n        </ng-template>\n        </amexio-data-table-column>\n\n        <!--edit-->\n        <amexio-data-table-column   [data-index]=\"'edit'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Edit'\">\n        \n        <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n          <amexio-image style=\"color:grey;\" [icon-class]=\"'fa fa-edit  fa-2x'\"></amexio-image>\n        </ng-template>\n        </amexio-data-table-column>\n\n        </amexio-tree-data-table> \n\n\n         </amexio-body>\n      </amexio-card>\n    </amexio-column>\n  </amexio-row>   \n</amexio-api-demo>\n</amexio-api-structure>\n\n\n"

/***/ }),

/***/ "./src/app/data/treedatatemplate/treedatatemplate.demo.ts":
/*!****************************************************************!*\
  !*** ./src/app/data/treedatatemplate/treedatatemplate.demo.ts ***!
  \****************************************************************/
/*! exports provided: TreeDataTemplateDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDataTemplateDemo", function() { return TreeDataTemplateDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apimetadata/models/component.structure */ "./src/app/apimetadata/models/component.structure.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TreeDataTemplateDemo = /** @class */ (function () {
    function TreeDataTemplateDemo(http) {
        this.http = http;
        this.customSourceData = new _apimetadata_models_component_structure__WEBPACK_IMPORTED_MODULE_2__["ComponentDataStructure"]();
    }
    TreeDataTemplateDemo.prototype.ngOnInit = function () {
        this.createCustomSourceData();
    };
    TreeDataTemplateDemo.prototype.createCustomSourceData = function () {
        this.customSourceData.title = 'Tree Data Template';
        this.customSourceData.description = 'Collapsible Data Grid Component displays data in expandable/collapsible rows.';
        this.customSourceData.sourceMetadata.htmlUrl = 'data/treedatatemplate/treedatatemplate.html';
        this.customSourceData.sourceMetadata.tsUrl = 'data/treedatatemplate/treedatatemplate.text';
        this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/treedatatable.json';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-tree-data-grid?embed=1&file=app/grid/treedatagrid/treedatagrid.demo.html&view=editor';
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    TreeDataTemplateDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    TreeDataTemplateDemo.prototype.getSelectedData = function (data) {
        this.selectedData = data;
    };
    TreeDataTemplateDemo.prototype.onCheckClick = function (data) {
        if (data.hasOwnProperty('children') && data.children.length > 0) {
            this.checkchild(data);
        }
    };
    TreeDataTemplateDemo.prototype.checkchild = function (data) {
        var _this = this;
        data.children.forEach(function (element) {
            element.done = !element.done;
            if (element.hasOwnProperty('children') && element.children.length > 0) {
                _this.checkchild(element);
            }
        });
    };
    TreeDataTemplateDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'treedata-grid-demo',
            template: __webpack_require__(/*! ./treedatatemplate.demo.html */ "./src/app/data/treedatatemplate/treedatatemplate.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TreeDataTemplateDemo);
    return TreeDataTemplateDemo;
}());



/***/ })

}]);
//# sourceMappingURL=data-Data-module.js.map