(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{NOlE:function(e,l,a){"use strict";a.r(l);var t=a("CcnG"),n=function(){},i=a("gTgE"),r=a("pMnS"),u=a("U89g"),o=a("d2mR"),d=a("O4vx"),s=a("Ip0R"),g=function(){function e(e,l){this.http=e,this._gridlayoutService=l,this.createLayouts(),this._gridlayoutService.createLayout(this.gridDesktop),this._gridlayoutService.createLayout(this.gridTablet),this._gridlayoutService.createLayout(this.gridMobile),this._gridlayoutService.createLayout(this.gridDesktop1),this._gridlayoutService.createLayout(this.gridTablet1),this._gridlayoutService.createLayout(this.gridMobile1),this.getHtmlAndTypeScriptCode()}return e.prototype.createLayouts=function(){this.gridDesktop=new d.kb("LayoutSample1",d.lb.Desktop).addlayout(["gridmenu","gridheader","gridheader","gridheader","gridheader","gridheader"]).addlayout(["gridmenu","gridmain","gridmain","gridmain","gridright","gridright"]).addlayout(["gridfooter","gridfooter","gridfooter","gridfooter","gridright","gridright"]),this.gridTablet=new d.kb("LayoutSample1",d.lb.Tablet).addlayout(["gridmenu","gridmenu","gridheader","gridheader","gridheader","gridheader"]).addlayout(["gridmenu","gridmenu","gridmain","gridmain","gridright","gridright"]).addlayout(["gridmenu","gridmenu","gridmain","gridmain","gridright","gridright"]).addlayout(["gridmenu","gridmenu","gridfooter","gridfooter","gridfooter","gridfooter"]),this.gridMobile=new d.kb("LayoutSample1",d.lb.Mobile).addlayout(["gridheader","gridheader","gridheader","gridheader","gridheader","gridheader"]).addlayout(["gridmenu","gridmenu","gridmenu","gridmenu","gridmenu","gridmenu"]).addlayout(["gridmain","gridmain","gridmain","gridmain","gridmain","gridmain"]).addlayout(["gridright","gridright","gridright","gridright","gridright","gridright"]).addlayout(["gridfooter","gridfooter","gridfooter","gridfooter","gridfooter","gridfooter"]),this.gridDesktop1=new d.kb("LayoutSample2",d.lb.Desktop).addlayout(["gridmenu","gridmenu","gridheader","gridheader","gridheader","gridheader"]).addlayout(["gridmenu","gridmenu","gridmain","gridmain","gridright","gridright"]).addlayout(["gridmenu","gridmenu","gridfooter","gridfooter","gridfooter","gridfooter"]),this.gridTablet1=new d.kb("LayoutSample2",d.lb.Tablet).addlayout(["gridmenu","gridmenu","gridheader","gridheader","gridheader","gridheader"]).addlayout(["gridmenu","gridmenu","gridmain","gridmain","gridmain","gridmain"]).addlayout(["gridmenu","gridmenu","gridright","gridright","gridright","gridright"]).addlayout(["gridmenu","gridmenu","gridfooter","gridfooter","gridfooter","gridfooter"]),this.gridMobile1=new d.kb("LayoutSample2",d.lb.Mobile).addlayout(["gridheader","gridheader","gridheader","gridheader","gridheader","gridheader"]).addlayout(["gridmenu","gridmenu","gridmenu","gridmenu","gridmenu","gridmenu"]).addlayout(["gridmain","gridmain","gridmain","gridmain","gridmain","gridmain"]).addlayout(["gridright","gridright","gridright","gridright","gridright","gridright"]).addlayout(["gridfooter","gridfooter","gridfooter","gridfooter","gridfooter","gridfooter"])},e.prototype.getHtmlAndTypeScriptCode=function(){var e,l,a=this;this.http.get("assets/data/code/data/gridlayout/gridlayout.html",{responseType:"text"}).subscribe(function(l){e=l},function(e){},function(){a.htmlCode=e}),this.http.get("assets/data/code/data/gridlayout/gridlayout.text",{responseType:"text"}).subscribe(function(e){l=e},function(e){},function(){a.typeScriptCode=l})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e.prototype.onRowSelect=function(e){this.selectedData=e},e}(),c=a("t/Na"),m=t.Qa({encapsulation:2,styles:[],data:{}});function h(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),t.Ra(2,4243456,null,0,o.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.htmlCode,"html")},null)}function p(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),t.Ra(2,4243456,null,0,o.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.typeScriptCode,"typescript")},null)}function b(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,160,"amexio-card",[["header","true"]],null,null,null,i.ec,i.k)),t.Ra(1,7585792,null,3,d.j,[t.F],{header:[0,"header"]},null),t.ib(603979776,1,{amexioHeader:1}),t.ib(603979776,2,{amexioBody:1}),t.ib(603979776,3,{amexioFooter:1}),(e()(),t.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,i.qc,i.w)),t.Ra(6,1163264,[[1,4]],0,d.C,[],null,null),(e()(),t.kb(-1,0,[" Grid Layout "])),(e()(),t.Sa(8,0,null,1,152,"amexio-body",[],null,null,null,i.Yb,i.e)),t.Ra(9,1163264,[[2,4]],0,d.d,[],null,null),(e()(),t.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),t.kb(-1,null,["CSS Grid Layout is the most powerful layout system available in CSS. It is a 2-dimensional system, meaning it can handle both columns and rows. Grid Layout can be used by applying CSS rules both to a parent element (which becomes the Grid Container) and to that elements children (which become Grid Items)."])),(e()(),t.Sa(12,0,null,0,148,"amexio-tab-view",[],null,null,null,i.Bc,i.H)),t.Ra(13,5488640,null,2,d.S,[t.F,t.k,t.F],null,null),t.ib(603979776,4,{queryTabs:1}),t.ib(603979776,5,{queryAction:1}),(e()(),t.Sa(16,0,null,1,76,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.Cc,i.I)),t.Ra(17,114688,[[4,4]],0,d.T,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),t.Sa(18,0,null,0,74,"amexio-row",[],null,null,null,i.xc,i.D)),t.Ra(19,1163264,null,0,d.O,[],null,null),(e()(),t.Sa(20,0,null,0,72,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,i.gc,i.m)),t.Ra(21,114688,null,0,d.m,[],{size:[0,"size"]},null),(e()(),t.Sa(22,0,null,0,41,"amexio-card",[],null,null,null,i.ec,i.k)),t.Ra(23,7585792,null,3,d.j,[t.F],{header:[0,"header"]},null),t.ib(603979776,6,{amexioHeader:1}),t.ib(603979776,7,{amexioBody:1}),t.ib(603979776,8,{amexioFooter:1}),(e()(),t.Sa(27,0,null,0,2,"amexio-header",[],null,null,null,i.qc,i.w)),t.Ra(28,1163264,[[6,4]],0,d.C,[],null,null),(e()(),t.kb(-1,0,[" Grid Layout : Sample Example1 "])),(e()(),t.Sa(30,0,null,1,33,"amexio-body",[],null,null,null,i.Yb,i.e)),t.Ra(31,1163264,[[7,4]],0,d.d,[],null,null),(e()(),t.Sa(32,0,null,0,17,"amexio-layout-grid",[],null,null,null,i.oc,i.u)),t.Ra(33,1163264,null,1,d.z,[d.B],{layout:[0,"layout"]},null),t.ib(603979776,9,{queryItem:1}),(e()(),t.Sa(35,0,null,0,2,"amexio-grid-item",[["style","border: 1px dashed black; "]],[[8,"className",0]],null,null,i.pc,i.v)),t.Ra(36,114688,[[9,4]],0,d.A,[],{name:[0,"name"]},null),(e()(),t.kb(-1,0,["Header"])),(e()(),t.Sa(38,0,null,0,2,"amexio-grid-item",[["style","border: 1px dashed black"]],[[8,"className",0]],null,null,i.pc,i.v)),t.Ra(39,114688,[[9,4]],0,d.A,[],{name:[0,"name"]},null),(e()(),t.kb(-1,0,["Menu"])),(e()(),t.Sa(41,0,null,0,2,"amexio-grid-item",[["style","border: 1px dashed black"]],[[8,"className",0]],null,null,i.pc,i.v)),t.Ra(42,114688,[[9,4]],0,d.A,[],{name:[0,"name"]},null),(e()(),t.kb(-1,0,["Main "])),(e()(),t.Sa(44,0,null,0,2,"amexio-grid-item",[["style","border: 1px dashed black"]],[[8,"className",0]],null,null,i.pc,i.v)),t.Ra(45,114688,[[9,4]],0,d.A,[],{name:[0,"name"]},null),(e()(),t.kb(-1,0,["Right"])),(e()(),t.Sa(47,0,null,0,2,"amexio-grid-item",[["style","border: 1px dashed black"]],[[8,"className",0]],null,null,i.pc,i.v)),t.Ra(48,114688,[[9,4]],0,d.A,[],{name:[0,"name"]},null),(e()(),t.kb(-1,0,["Footer"])),(e()(),t.Sa(50,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),t.Sa(51,0,null,0,1,"h2",[],null,null,null,null,null)),(e()(),t.kb(-1,null,[" Steps To Create Above Grid Layout :-"])),(e()(),t.Sa(53,0,null,0,10,"amexio-box",[["border","left"],["border-color","red"],["padding","true"]],null,null,null,i.bc,i.h)),t.Ra(54,114688,null,0,d.g,[],{border:[0,"border"],borderColor:[1,"borderColor"],padding:[2,"padding"]},null),(e()(),t.Sa(55,0,null,0,8,"ul",[],null,null,null,null,null)),(e()(),t.Sa(56,0,null,null,1,"li",[],null,null,null,null,null)),(e()(),t.kb(-1,null,[" Firstly you need to import AmexioGridLayoutService, GridConfig and GridConstants from amexio-ng-extensions. "])),(e()(),t.Sa(58,0,null,null,1,"li",[],null,null,null,null,null)),(e()(),t.kb(-1,null,[" To create grid-template-areas, need to create a method creating GridConfig model where first attribute will be the name of the Ui and second will be the layout type(desktop, tab or mobile) then call addlayout method to design grid-template-areas. (Refer source tab - typescript code) "])),(e()(),t.Sa(60,0,null,null,1,"li",[],null,null,null,null,null)),(e()(),t.kb(-1,null,[" Call above created method in constructor and createLayout from the service to generate Uis for individual layout type. (Refer source tab - typescript code). "])),(e()(),t.Sa(62,0,null,null,1,"li",[],null,null,null,null,null)),(e()(),t.kb(-1,null,[" grid-area: Gives an item a name so that it can be referenced by a template created with the grid-template-areas property. It can contain any amexio component withih it. (Refer source tab- html code) "])),(e()(),t.Sa(64,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),t.Sa(65,0,null,0,27,"amexio-card",[],null,null,null,i.ec,i.k)),t.Ra(66,7585792,null,3,d.j,[t.F],{header:[0,"header"]},null),t.ib(603979776,10,{amexioHeader:1}),t.ib(603979776,11,{amexioBody:1}),t.ib(603979776,12,{amexioFooter:1}),(e()(),t.Sa(70,0,null,0,2,"amexio-header",[],null,null,null,i.qc,i.w)),t.Ra(71,1163264,[[10,4]],0,d.C,[],null,null),(e()(),t.kb(-1,0,[" Grid Layout : Sample Example2 "])),(e()(),t.Sa(73,0,null,1,19,"amexio-body",[],null,null,null,i.Yb,i.e)),t.Ra(74,1163264,[[11,4]],0,d.d,[],null,null),(e()(),t.Sa(75,0,null,0,17,"amexio-layout-grid",[],null,null,null,i.oc,i.u)),t.Ra(76,1163264,null,1,d.z,[d.B],{layout:[0,"layout"]},null),t.ib(603979776,13,{queryItem:1}),(e()(),t.Sa(78,0,null,0,2,"amexio-grid-item",[["style","border: 1px dashed black; "]],[[8,"className",0]],null,null,i.pc,i.v)),t.Ra(79,114688,[[13,4]],0,d.A,[],{name:[0,"name"]},null),(e()(),t.kb(-1,0,["GRID LAYOUT HEADER"])),(e()(),t.Sa(81,0,null,0,2,"amexio-grid-item",[["style","border: 1px dashed black"]],[[8,"className",0]],null,null,i.pc,i.v)),t.Ra(82,114688,[[13,4]],0,d.A,[],{name:[0,"name"]},null),(e()(),t.kb(-1,0,["GRID LAYOUT MENU"])),(e()(),t.Sa(84,0,null,0,2,"amexio-grid-item",[["style","border: 1px dashed black"]],[[8,"className",0]],null,null,i.pc,i.v)),t.Ra(85,114688,[[13,4]],0,d.A,[],{name:[0,"name"]},null),(e()(),t.kb(-1,0,["GRID LAYOUT MAIN "])),(e()(),t.Sa(87,0,null,0,2,"amexio-grid-item",[["style","border: 1px dashed black"]],[[8,"className",0]],null,null,i.pc,i.v)),t.Ra(88,114688,[[13,4]],0,d.A,[],{name:[0,"name"]},null),(e()(),t.kb(-1,0,["GRID LAYOUT RIGHT"])),(e()(),t.Sa(90,0,null,0,2,"amexio-grid-item",[["style","border: 1px dashed black"]],[[8,"className",0]],null,null,i.pc,i.v)),t.Ra(91,114688,[[13,4]],0,d.A,[],{name:[0,"name"]},null),(e()(),t.kb(-1,0,["GRID LAYOUT FOOTER"])),(e()(),t.Sa(93,0,null,1,48,"amexio-tab",[["title","API Reference"]],null,null,null,i.Cc,i.I)),t.Ra(94,114688,[[4,4]],0,d.T,[],{title:[0,"title"]},null),(e()(),t.Sa(95,0,null,0,22,"amexio-datagrid",[["title","Properties<amexio-layout-grid>"]],null,null,null,i.Td,i.zb)),t.Ra(96,5488640,null,1,d.yc,[t.l,d.Ta,t.i,t.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,14,{columnRef:1}),(e()(),t.Sa(98,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),t.Ra(99,49152,[[14,4]],2,d.Ac,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,15,{headerTemplate:0}),t.ib(335544320,16,{bodyTemplate:0}),(e()(),t.Sa(102,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),t.Ra(103,49152,[[14,4]],2,d.Ac,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,17,{headerTemplate:0}),t.ib(335544320,18,{bodyTemplate:0}),(e()(),t.Sa(106,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),t.Ra(107,49152,[[14,4]],2,d.Ac,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,19,{headerTemplate:0}),t.ib(335544320,20,{bodyTemplate:0}),(e()(),t.Sa(110,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),t.Ra(111,49152,[[14,4]],2,d.Ac,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,21,{headerTemplate:0}),t.ib(335544320,22,{bodyTemplate:0}),(e()(),t.Sa(114,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),t.Ra(115,49152,[[14,4]],2,d.Ac,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,23,{headerTemplate:0}),t.ib(335544320,24,{bodyTemplate:0}),(e()(),t.Sa(118,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),t.Sa(119,0,null,0,22,"amexio-datagrid",[["title","Properties<amexio-grid-item>"]],null,null,null,i.Td,i.zb)),t.Ra(120,5488640,null,1,d.yc,[t.l,d.Ta,t.i,t.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,25,{columnRef:1}),(e()(),t.Sa(122,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),t.Ra(123,49152,[[25,4]],2,d.Ac,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,26,{headerTemplate:0}),t.ib(335544320,27,{bodyTemplate:0}),(e()(),t.Sa(126,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),t.Ra(127,49152,[[25,4]],2,d.Ac,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,28,{headerTemplate:0}),t.ib(335544320,29,{bodyTemplate:0}),(e()(),t.Sa(130,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),t.Ra(131,49152,[[25,4]],2,d.Ac,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,30,{headerTemplate:0}),t.ib(335544320,31,{bodyTemplate:0}),(e()(),t.Sa(134,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),t.Ra(135,49152,[[25,4]],2,d.Ac,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,32,{headerTemplate:0}),t.ib(335544320,33,{bodyTemplate:0}),(e()(),t.Sa(138,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),t.Ra(139,49152,[[25,4]],2,d.Ac,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,34,{headerTemplate:0}),t.ib(335544320,35,{bodyTemplate:0}),(e()(),t.Sa(142,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,i.Cc,i.I)),t.Ra(143,114688,[[4,4]],0,d.T,[],{title:[0,"title"]},null),(e()(),t.Sa(144,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),t.Sa(145,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,i.Ec,i.K)),t.Ra(146,5357568,null,1,d.X,[t.F,t.k],null,null),t.ib(603979776,36,{queryTabs:1}),(e()(),t.Sa(148,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.Cc,i.I)),t.Ra(149,114688,[[36,4]],0,d.T,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),t.Ja(16777216,null,0,1,null,h)),t.Ra(151,16384,null,0,s.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(e()(),t.Sa(152,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.Cc,i.I)),t.Ra(153,114688,[[36,4]],0,d.T,[],{title:[0,"title"]},null),(e()(),t.Ja(16777216,null,0,1,null,p)),t.Ra(155,16384,null,0,s.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(e()(),t.Sa(156,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.Cc,i.I)),t.Ra(157,114688,[[4,4]],0,d.T,[],{title:[0,"title"]},null),(e()(),t.Sa(158,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),t.kb(-1,null,["Amexio Sandbox"])),(e()(),t.Sa(160,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-gridlayoutbasic?embed=1&file=app/layouts/gridlayout/gridlayoutbasic/gridlayout.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,l){var a=l.component;e(l,1,0,"true"),e(l,6,0),e(l,9,0),e(l,13,0),e(l,17,0,"Demo","true"),e(l,19,0),e(l,21,0,"12"),e(l,23,0,!0),e(l,28,0),e(l,31,0),e(l,33,0,"LayoutSample1"),e(l,36,0,"gridheader"),e(l,39,0,"gridmenu"),e(l,42,0,"gridmain"),e(l,45,0,"gridright"),e(l,48,0,"gridfooter"),e(l,54,0,"left","red","true"),e(l,66,0,!0),e(l,71,0),e(l,74,0),e(l,76,0,"LayoutSample2"),e(l,79,0,"gridheader"),e(l,82,0,"gridmenu"),e(l,85,0,"gridmain"),e(l,88,0,"gridright"),e(l,91,0,"gridfooter"),e(l,94,0,"API Reference"),e(l,96,0,"Properties<amexio-layout-grid>","assets/apireference/data/gridlayout.json","get","properties",!1,!1),e(l,99,0,"Name","name",!1,"string",20),e(l,103,0,"Version","version",!1,"string",20),e(l,107,0,"Type","type",!1,"string",10),e(l,111,0,"Default","default",!1,"string",10),e(l,115,0,"Description","description",!1,"string",45),e(l,120,0,"Properties<amexio-grid-item>","assets/apireference/data/gridlayout.json","get","childproperties",!1,!1),e(l,123,0,"Name","name",!1,"string",20),e(l,127,0,"Version","version",!1,"string",20),e(l,131,0,"Type","type",!1,"string",10),e(l,135,0,"Default","default",!1,"string",10),e(l,139,0,"Description","description",!1,"string",45),e(l,143,0,"Source"),e(l,146,0),e(l,149,0,"HTML",!0),e(l,151,0,a.htmlCode),e(l,153,0,"Type Script"),e(l,155,0,a.typeScriptCode),e(l,157,0,"Live")},function(e,l){e(l,20,0,t.cb(l,21).role),e(l,35,0,t.cb(l,36).hostname),e(l,38,0,t.cb(l,39).hostname),e(l,41,0,t.cb(l,42).hostname),e(l,44,0,t.cb(l,45).hostname),e(l,47,0,t.cb(l,48).hostname),e(l,78,0,t.cb(l,79).hostname),e(l,81,0,t.cb(l,82).hostname),e(l,84,0,t.cb(l,85).hostname),e(l,87,0,t.cb(l,88).hostname),e(l,90,0,t.cb(l,91).hostname)})}var y=t.Oa("gridlayout-demo",g,function(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,1,"gridlayout-demo",[],null,null,null,b,m)),t.Ra(1,49152,null,0,g,[c.c,d.B],null,null)],null,null)},{},{},[]),f=a("gIcY"),x=a("ZYCi");a.d(l,"GridLayoutDemoModuleNgFactory",function(){return S});var S=t.Pa(n,[],function(e){return t.Za([t.ab(512,t.k,t.Ea,[[8,[i.a,r.a,y]],[3,t.k],t.z]),t.ab(4608,s.o,s.n,[t.w,[2,s.x]]),t.ab(4608,f.G,f.G,[]),t.ab(4608,c.i,c.o,[s.d,t.D,c.m]),t.ab(4608,c.p,c.p,[c.i,c.n]),t.ab(5120,c.a,function(e){return[e]},[c.p]),t.ab(4608,c.l,c.l,[]),t.ab(6144,c.j,null,[c.l]),t.ab(4608,c.h,c.h,[c.j]),t.ab(6144,c.b,null,[c.h]),t.ab(4608,c.f,c.k,[c.b,t.s]),t.ab(4608,c.c,c.c,[c.f]),t.ab(4608,d.Ta,d.Ta,[c.c]),t.ab(4608,d.Pa,d.Pa,[]),t.ab(4608,d.Wa,d.Wa,[]),t.ab(4608,d.ob,d.ob,[]),t.ab(4608,d.db,d.db,[t.D]),t.ab(4608,d.B,d.B,[]),t.ab(4608,d.Lb,d.Lb,[]),t.ab(4608,d.xb,d.xb,[]),t.ab(4608,f.f,f.f,[]),t.ab(4608,d.jb,d.jb,[]),t.ab(1073742336,s.c,s.c,[]),t.ab(1073742336,f.D,f.D,[]),t.ab(1073742336,f.l,f.l,[]),t.ab(1073742336,c.e,c.e,[]),t.ab(1073742336,c.d,c.d,[]),t.ab(1073742336,d.l,d.l,[]),t.ab(1073742336,d.o,d.o,[]),t.ab(1073742336,o.b,o.b,[]),t.ab(1073742336,d.Eb,d.Eb,[]),t.ab(1073742336,d.D,d.D,[]),t.ab(1073742336,d.x,d.x,[]),t.ab(1073742336,d.G,d.G,[]),t.ab(1073742336,d.I,d.I,[]),t.ab(1073742336,f.z,f.z,[]),t.ab(1073742336,d.L,d.L,[]),t.ab(1073742336,d.p,d.p,[]),t.ab(1073742336,d.Aa,d.Aa,[]),t.ab(1073742336,x.n,x.n,[[2,x.t],[2,x.m]]),t.ab(1073742336,n,n,[]),t.ab(256,c.m,"XSRF-TOKEN",[]),t.ab(256,c.n,"X-XSRF-TOKEN",[]),t.ab(1024,x.i,function(){return[[{path:"",component:g,pathMatch:"full"}]]},[])])})},U89g:function(e,l,a){"use strict";a.d(l,"a",function(){return n}),a.d(l,"b",function(){return i});var t=a("CcnG"),n=(a("d2mR"),a("Ip0R"),t.Qa({encapsulation:2,styles:[],data:{}}));function i(e){return t.mb(0,[],null,null)}},XIHC:function(e,l){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,l,a){"use strict";a.d(l,"a",function(){return t}),a.d(l,"b",function(){return n}),a("wZee"),a("XIHC");var t=function(){function e(e,l){this._renderer=e,this._el=l,this.nativeElement=l.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),n=function(){}},wZee:function(e,l){var a="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},t=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,l=0,t=a.Prism={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof n?new n(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++l}),e.__id},clone:function(e,l){var a=t.util.type(e);switch(l=l||{},a){case"Object":if(l[t.util.objId(e)])return l[t.util.objId(e)];var n={};for(var i in l[t.util.objId(e)]=n,e)e.hasOwnProperty(i)&&(n[i]=t.util.clone(e[i],l));return n;case"Array":return l[t.util.objId(e)]?l[t.util.objId(e)]:(n=[],l[t.util.objId(e)]=n,e.forEach(function(e,a){n[a]=t.util.clone(e,l)}),n)}return e}},languages:{extend:function(e,l){var a=t.util.clone(t.languages[e]);for(var n in l)a[n]=l[n];return a},insertBefore:function(e,l,a,n){var i=(n=n||t.languages)[e];if(2==arguments.length){for(var r in a=arguments[1])a.hasOwnProperty(r)&&(i[r]=a[r]);return i}var u={};for(var o in i)if(i.hasOwnProperty(o)){if(o==l)for(var r in a)a.hasOwnProperty(r)&&(u[r]=a[r]);u[o]=i[o]}return t.languages.DFS(t.languages,function(l,a){a===n[e]&&l!=e&&(this[l]=u)}),n[e]=u},DFS:function(e,l,a,n){for(var i in n=n||{},e)e.hasOwnProperty(i)&&(l.call(e,i,e[i],a||i),"Object"!==t.util.type(e[i])||n[t.util.objId(e[i])]?"Array"!==t.util.type(e[i])||n[t.util.objId(e[i])]||(n[t.util.objId(e[i])]=!0,t.languages.DFS(e[i],l,i,n)):(n[t.util.objId(e[i])]=!0,t.languages.DFS(e[i],l,null,n)))}},plugins:{},highlightAll:function(e,l){t.highlightAllUnder(document,e,l)},highlightAllUnder:function(e,l,a){var n={callback:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};t.hooks.run("before-highlightall",n);for(var i,r=n.elements||e.querySelectorAll(n.selector),u=0;i=r[u++];)t.highlightElement(i,!0===l,n.callback)},highlightElement:function(l,n,i){for(var r,u,o=l;o&&!e.test(o.className);)o=o.parentNode;o&&(r=(o.className.match(e)||[,""])[1].toLowerCase(),u=t.languages[r]),l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,l.parentNode&&/pre/i.test((o=l.parentNode).nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+r);var d={element:l,language:r,grammar:u,code:l.textContent};if(t.hooks.run("before-sanity-check",d),!d.code||!d.grammar)return d.code&&(t.hooks.run("before-highlight",d),d.element.textContent=d.code,t.hooks.run("after-highlight",d)),void t.hooks.run("complete",d);if(t.hooks.run("before-highlight",d),n&&a.Worker){var s=new Worker(t.filename);s.onmessage=function(e){d.highlightedCode=e.data,t.hooks.run("before-insert",d),d.element.innerHTML=d.highlightedCode,i&&i.call(d.element),t.hooks.run("after-highlight",d),t.hooks.run("complete",d)},s.postMessage(JSON.stringify({language:d.language,code:d.code,immediateClose:!0}))}else d.highlightedCode=t.highlight(d.code,d.grammar,d.language),t.hooks.run("before-insert",d),d.element.innerHTML=d.highlightedCode,i&&i.call(l),t.hooks.run("after-highlight",d),t.hooks.run("complete",d)},highlight:function(e,l,a){var i={code:e,grammar:l,language:a};return t.hooks.run("before-tokenize",i),i.tokens=t.tokenize(i.code,i.grammar),t.hooks.run("after-tokenize",i),n.stringify(t.util.encode(i.tokens),i.language)},matchGrammar:function(e,l,a,n,i,r,u){var o=t.Token;for(var d in a)if(a.hasOwnProperty(d)&&a[d]){if(d==u)return;var s=a[d];s="Array"===t.util.type(s)?s:[s];for(var g=0;g<s.length;++g){var c=s[g],m=c.inside,h=!!c.lookbehind,p=!!c.greedy,b=0,y=c.alias;if(p&&!c.pattern.global){var f=c.pattern.toString().match(/[imuy]*$/)[0];c.pattern=RegExp(c.pattern.source,f+"g")}c=c.pattern||c;for(var x=n,S=i;x<l.length;S+=l[x].length,++x){var k=l[x];if(l.length>e.length)return;if(!(k instanceof o)){if(p&&x!=l.length-1){if(c.lastIndex=S,!(F=c.exec(e)))break;for(var v=F.index+(h?F[1].length:0),w=F.index+F[0].length,A=x,R=S,T=l.length;A<T&&(R<w||!l[A].type&&!l[A-1].greedy);++A)v>=(R+=l[A].length)&&(++x,S=R);if(l[x]instanceof o)continue;C=A-x,k=e.slice(S,R),F.index-=S}else{c.lastIndex=0;var F=c.exec(k),C=1}if(F){h&&(b=F[1]?F[1].length:0),w=(v=F.index+b)+(F=F[0].slice(b)).length;var L=k.slice(0,v),N=k.slice(w),I=[x,C];L&&(++x,S+=L.length,I.push(L));var j=new o(d,m?t.tokenize(F,m):F,y,F,p);if(I.push(j),N&&I.push(N),Array.prototype.splice.apply(l,I),1!=C&&t.matchGrammar(e,l,a,x,S,!0,d),r)break}else if(r)break}}}}},tokenize:function(e,l,a){var n=[e],i=l.rest;if(i){for(var r in i)l[r]=i[r];delete l.rest}return t.matchGrammar(e,n,l,0,0,!1),n},hooks:{all:{},add:function(e,l){var a=t.hooks.all;a[e]=a[e]||[],a[e].push(l)},run:function(e,l){var a=t.hooks.all[e];if(a&&a.length)for(var n,i=0;n=a[i++];)n(l)}}},n=t.Token=function(e,l,a,t,n){this.type=e,this.content=l,this.alias=a,this.length=0|(t||"").length,this.greedy=!!n};if(n.stringify=function(e,l,a){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(a){return n.stringify(a,l,e)}).join("");var i={type:e.type,content:n.stringify(e.content,l,a),tag:"span",classes:["token",e.type],attributes:{},language:l,parent:a};if(e.alias){var r="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,r)}t.hooks.run("wrap",i);var u=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(u?" "+u:"")+">"+i.content+"</"+i.tag+">"},!a.document)return a.addEventListener?(t.disableWorkerMessageHandler||a.addEventListener("message",function(e){var l=JSON.parse(e.data),n=l.language,i=l.immediateClose;a.postMessage(t.highlight(l.code,t.languages[n],n)),i&&a.close()},!1),a.Prism):a.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(t.filename=i.src,t.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(t.highlightAll):window.setTimeout(t.highlightAll,16):document.addEventListener("DOMContentLoaded",t.highlightAll))),a.Prism}();void 0!==e&&e.exports&&(e.exports=t),"undefined"!=typeof global&&(global.Prism=t),t.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),t.languages.xml=t.languages.markup,t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},t.languages.css.atrule.inside.rest=t.languages.css,t.languages.markup&&(t.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:t.languages.css,alias:"language-css",greedy:!0}}),t.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:t.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:t.languages.css}},alias:"language-css"}},t.languages.markup.tag)),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),t.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),t.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),t.languages.javascript["template-string"].inside.interpolation.inside.rest=t.languages.javascript,t.languages.markup&&t.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:t.languages.javascript,alias:"language-javascript",greedy:!0}}),t.languages.js=t.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(l){for(var a,n=l.getAttribute("data-src"),i=l,r=/\blang(?:uage)?-([\w-]+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(a=(l.className.match(r)||[,""])[1]),!a){var u=(n.match(/\.(\w+)$/)||[,""])[1];a=e[u]||u}var o=document.createElement("code");o.className="language-"+a,l.textContent="",o.textContent="Loading\u2026",l.appendChild(o);var d=new XMLHttpRequest;d.open("GET",n,!0),d.onreadystatechange=function(){4==d.readyState&&(d.status<400&&d.responseText?(o.textContent=d.responseText,t.highlightElement(o)):o.textContent=d.status>=400?"\u2716 Error "+d.status+" while fetching file: "+d.statusText:"\u2716 Error: File does not exist or is empty")},d.send(null)}),t.plugins.toolbar&&t.plugins.toolbar.registerButton("download-file",function(e){var l=e.element.parentNode;if(l&&/pre/i.test(l.nodeName)&&l.hasAttribute("data-src")&&l.hasAttribute("data-download-link")){var a=l.getAttribute("data-src"),t=document.createElement("a");return t.textContent=l.getAttribute("data-download-link-label")||"Download",t.setAttribute("download",""),t.href=a,t}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);