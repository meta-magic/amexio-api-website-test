(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"5r3b":function(l,e,a){"use strict";a.r(e);var n=a("CcnG"),t=function(){},i=a("gTgE"),u=a("pMnS"),r=a("U89g"),o=a("d2mR"),d=a("O4vx"),s=a("Ip0R"),c=function(){function l(l,e){this.http=l,this._gridlayoutService=e,this._gridlayoutService.createLayout("Layout2","desktop").addlayout(["gridheader","gridheader","gridheader","gridheader"]).addlayout(["gridheader1","gridheader1","gridheader2","gridheader2"]).addlayout(["gridleft","gridmain","gridmain","gridright"]).addlayout(["gridleft","gridmain","gridmain","gridright"]).addlayout(["gridleft","gridfooter","gridfooter1","gridfooter1"]),this._gridlayoutService.createLayout("Layout2","tab").addlayout(["gridheader","gridheader","gridheader","gridheader"]).addlayout(["gridheader1","gridheader1","gridheader1","gridheader1"]).addlayout(["gridheader2","gridheader2","gridright","gridright"]).addlayout(["gridheader2","gridheader2","gridright","gridright"]).addlayout(["gridmain","gridmain","gridmain","gridmain"]).addlayout(["gridfooter","gridfooter","gridfooter","gridfooter"]).addlayout(["gridfooter1","gridfooter1","gridfooter1","gridfooter1"]).addlayout(["gridleft","gridleft","gridleft","gridleft"]),this._gridlayoutService.createLayout("Layout2","mobile").addlayout(["gridheader","gridheader","gridheader","gridheader"]).addlayout(["gridheader1","gridheader1","gridheader1","gridheader1"]).addlayout(["gridheader2","gridheader2","gridheader2","gridheader2"]).addlayout(["gridright","gridright","gridright","gridright"]).addlayout(["gridmain","gridmain","gridmain","gridmain"]).addlayout(["gridfooter","gridfooter","gridfooter","gridfooter"]).addlayout(["gridfooter1","gridfooter1","gridfooter1","gridfooter1"]).addlayout(["gridleft","gridleft","gridleft","gridleft"]),this._gridlayoutService.createLayout("gridimagelayout","desktop").addlayout(["gridimage1","gridimage2","gridimage3","gridimage4"]),this._gridlayoutService.createLayout("gridimagelayout","tab").addlayout(["gridimage1","gridimage2","gridimage3","gridimage4"]),this._gridlayoutService.createLayout("gridimagelayout","mobile").addlayout(["gridimage1","gridimage1","gridimage2","gridimage2"]).addlayout(["gridimage3","gridimage3","gridimage4","gridimage4"]),this._gridlayoutService.createLayout("leftlayout","desktop").addlayout(["leftlayout1","leftlayout1","leftlayout1","leftlayout1"]).addlayout(["leftlayout2","leftlayout2","leftlayout2","leftlayout2"]).addlayout(["leftlayout3","leftlayout3","leftlayout3","leftlayout3"]).addlayout(["leftlayout4","leftlayout4","leftlayout4","leftlayout4"]),this._gridlayoutService.createLayout("leftlayout","tab").addlayout(["leftlayout1","leftlayout2","leftlayout3","leftlayout4"]),this._gridlayoutService.createLayout("leftlayout","mobile").addlayout(["leftlayout1","leftlayout1","leftlayout2","leftlayout2"]).addlayout(["leftlayout3","leftlayout3","leftlayout4","leftlayout4"]),this.getHtmlAndTypeScriptCode()}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,e,a=this;this.http.get("assets/data/code/data/gridlayout/gridlayoutexp2.html",{responseType:"text"}).subscribe(function(e){l=e},function(l){},function(){a.htmlCode=l}),this.http.get("assets/data/code/data/gridlayout/gridlayoutexp2.text",{responseType:"text"}).subscribe(function(l){e=l},function(l){},function(){a.typeScriptCode=e})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l.prototype.onClick=function(){},l.prototype.onRowSelect=function(l){this.selectedData=l},l}(),g=a("t/Na"),m=n.Qa({encapsulation:2,styles:[],data:{}});function p(l){return n.mb(0,[(l()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,r.b,r.a)),n.Ra(2,4243456,null,0,o.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,e){l(e,2,0,e.component.htmlCode,"html")},null)}function b(l){return n.mb(0,[(l()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,r.b,r.a)),n.Ra(2,4243456,null,0,o.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,e){l(e,2,0,e.component.typeScriptCode,"typescript")},null)}function h(l){return n.mb(0,[(l()(),n.Sa(0,0,null,null,220,"amexio-card",[["header","true"]],null,null,null,i.bc,i.k)),n.Ra(1,5488640,null,3,d.j,[n.F],{header:[0,"header"]},null),n.ib(603979776,1,{amexioHeader:1}),n.ib(603979776,2,{amexioBody:1}),n.ib(603979776,3,{amexioFooter:1}),(l()(),n.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),n.Ra(6,114688,[[1,4]],0,d.A,[],null,null),(l()(),n.kb(-1,0,[" Grid Layout "])),(l()(),n.Sa(8,0,null,1,212,"amexio-body",[],null,null,null,i.Vb,i.e)),n.Ra(9,114688,[[2,4]],0,d.d,[],null,null),(l()(),n.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),n.kb(-1,null,["CSS Grid Layout is the most powerful layout system available in CSS. It is a 2-dimensional system, meaning it can handle both columns and rows. Grid Layout can be used by applying CSS rules both to a parent element (which becomes the Grid Container) and to that elements children (which become Grid Items)."])),(l()(),n.Sa(12,16777216,null,0,208,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,e,a){var t=!0;return"document:click"===e&&(t=!1!==n.cb(l,13).onWindowClick()&&t),"document:scroll"===e&&(t=!1!==n.cb(l,13).onscroll()&&t),t},i.xc,i.G)),n.Ra(13,5357568,null,2,d.Q,[n.F,n.k,n.R],null,null),n.ib(603979776,4,{queryTabs:1}),n.ib(603979776,5,{queryAction:1}),(l()(),n.Sa(16,0,null,1,137,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.yc,i.H)),n.Ra(17,114688,[[4,4]],0,d.R,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),n.Sa(18,0,null,0,135,"amexio-row",[],null,null,null,i.tc,i.C)),n.Ra(19,1163264,null,0,d.M,[],null,null),(l()(),n.Sa(20,0,null,0,133,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,i.dc,i.m)),n.Ra(21,114688,null,0,d.m,[],{size:[0,"size"]},null),(l()(),n.Sa(22,0,null,0,131,"amexio-card",[],null,null,null,i.bc,i.k)),n.Ra(23,5488640,null,3,d.j,[n.F],{header:[0,"header"]},null),n.ib(603979776,6,{amexioHeader:1}),n.ib(603979776,7,{amexioBody:1}),n.ib(603979776,8,{amexioFooter:1}),(l()(),n.Sa(27,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),n.Ra(28,114688,[[6,4]],0,d.A,[],null,null),(l()(),n.kb(-1,0,[" Grid Layout "])),(l()(),n.Sa(30,0,null,1,123,"amexio-body",[],null,null,null,i.Vb,i.e)),n.Ra(31,114688,[[7,4]],0,d.d,[],null,null),(l()(),n.Sa(32,0,null,0,121,"amexio-layout-grid",[],null,null,null,i.kc,i.t)),n.Ra(33,1163264,null,1,d.x,[d.z],{layout:[0,"layout"]},null),n.ib(603979776,9,{queryItem:1}),(l()(),n.Sa(35,0,null,0,7,"amexio-grid-item",[],[[8,"className",0]],null,null,i.lc,i.u)),n.Ra(36,114688,[[9,4]],0,d.y,[],{name:[0,"name"]},null),(l()(),n.Sa(37,0,null,0,5,"amexio-panel",[],null,[["document","click"],["document","scroll"]],function(l,e,a){var t=!0;return"document:click"===e&&(t=!1!==n.cb(l,38).onWindowClick()&&t),"document:scroll"===e&&(t=!1!==n.cb(l,38).onscroll()&&t),t},i.Nd,i.wb)),n.Ra(38,114688,null,0,d.gc,[],{expanded:[0,"expanded"],contentAlign:[1,"contentAlign"]},null),(l()(),n.Sa(39,0,null,2,3,"amexio-label",[],null,null,null,i.sd,i.bb)),n.Ra(40,114688,null,0,d.Eb,[],{styleClass:[0,"styleClass"]},null),(l()(),n.Sa(41,0,null,0,1,"u",[],null,null,null,null,null)),(l()(),n.kb(-1,null,["THE COLLECTION"])),(l()(),n.Sa(43,0,null,0,16,"amexio-grid-item",[],[[8,"className",0]],null,null,i.lc,i.u)),n.Ra(44,114688,[[9,4]],0,d.y,[],{name:[0,"name"]},null),(l()(),n.Sa(45,0,null,0,14,"amexio-panel",[],null,[["document","click"],["document","scroll"]],function(l,e,a){var t=!0;return"document:click"===e&&(t=!1!==n.cb(l,46).onWindowClick()&&t),"document:scroll"===e&&(t=!1!==n.cb(l,46).onscroll()&&t),t},i.Nd,i.wb)),n.Ra(46,114688,null,0,d.gc,[],{expanded:[0,"expanded"],border:[1,"border"],contentAlign:[2,"contentAlign"]},null),(l()(),n.Sa(47,0,null,2,2,"amexio-label",[],null,null,null,i.sd,i.bb)),n.Ra(48,114688,null,0,d.Eb,[],null,null),(l()(),n.kb(-1,0,[" CLASSIC "])),(l()(),n.Sa(50,0,null,2,0,"br",[],null,null,null,null,null)),(l()(),n.Sa(51,0,null,2,4,"amexio-label",[],null,null,null,i.sd,i.bb)),n.Ra(52,114688,null,0,d.Eb,[],null,null),(l()(),n.Sa(53,0,null,0,2,"em",[],null,null,null,null,null)),(l()(),n.Sa(54,0,null,null,1,"u",[],null,null,null,null,null)),(l()(),n.kb(-1,null,["Holiday"])),(l()(),n.Sa(56,0,null,2,0,"br",[],null,null,null,null,null)),(l()(),n.Sa(57,0,null,2,2,"amexio-label",[],null,null,null,i.sd,i.bb)),n.Ra(58,114688,null,0,d.Eb,[],null,null),(l()(),n.kb(-1,0,["COLLECTION"])),(l()(),n.Sa(60,0,null,0,3,"amexio-grid-item",[],[[8,"className",0]],null,null,i.lc,i.u)),n.Ra(61,114688,[[9,4]],0,d.y,[],{name:[0,"name"]},null),(l()(),n.Sa(62,0,null,0,1,"h2",[["class","label-block"]],null,null,null,null,null)),(l()(),n.kb(-1,null,[" ART . LOVE . COLOR "])),(l()(),n.Sa(64,0,null,0,9,"amexio-grid-item",[],[[8,"className",0]],null,null,i.lc,i.u)),n.Ra(65,114688,[[9,4]],0,d.y,[],{name:[0,"name"]},null),(l()(),n.Sa(66,0,null,0,2,"amexio-panel",[["title","Panel"]],null,[["document","click"],["document","scroll"]],function(l,e,a){var t=!0;return"document:click"===e&&(t=!1!==n.cb(l,67).onWindowClick()&&t),"document:scroll"===e&&(t=!1!==n.cb(l,67).onscroll()&&t),t},i.Nd,i.wb)),n.Ra(67,114688,null,0,d.gc,[],{title:[0,"title"],expanded:[1,"expanded"]},null),(l()(),n.kb(-1,2,[" Inspired by painter Yago Hortal\u2019s one-of-a-kind, vivid artwork, this set features 40 shades of color for cheeks and eyes. The panels easily pop in and out, making it perfectly portable for holiday trips. limited-edition kits featuring all of their bestsellers in a range of shades\u2014from bold pops of color to always-flattering neutrals. "])),(l()(),n.Sa(69,0,null,0,4,"amexio-panel",[],null,[["document","click"],["document","scroll"]],function(l,e,a){var t=!0;return"document:click"===e&&(t=!1!==n.cb(l,70).onWindowClick()&&t),"document:scroll"===e&&(t=!1!==n.cb(l,70).onscroll()&&t),t},i.Nd,i.wb)),n.Ra(70,114688,null,0,d.gc,[],{expanded:[0,"expanded"],border:[1,"border"],contentAlign:[2,"contentAlign"]},null),(l()(),n.Sa(71,0,null,2,2,"amexio-label",[],null,null,null,i.sd,i.bb)),n.Ra(72,114688,null,0,d.Eb,[],null,null),(l()(),n.kb(-1,0,[" MORE DETAILS "])),(l()(),n.Sa(74,0,null,0,20,"amexio-grid-item",[],[[8,"className",0]],null,null,i.lc,i.u)),n.Ra(75,114688,[[9,4]],0,d.y,[],{name:[0,"name"]},null),(l()(),n.Sa(76,0,null,0,18,"amexio-layout-grid",[],null,null,null,i.kc,i.t)),n.Ra(77,1163264,null,1,d.x,[d.z],{layout:[0,"layout"]},null),n.ib(603979776,10,{queryItem:1}),(l()(),n.Sa(79,0,null,0,3,"amexio-grid-item",[],[[8,"className",0]],null,null,i.lc,i.u)),n.Ra(80,114688,[[10,4]],0,d.y,[],{name:[0,"name"]},null),(l()(),n.Sa(81,0,null,0,1,"amexio-image",[],null,null,null,i.Gd,i.pb)),n.Ra(82,114688,null,0,d.Ub,[],{tooltip:[0,"tooltip"],path:[1,"path"]},null),(l()(),n.Sa(83,0,null,0,3,"amexio-grid-item",[],[[8,"className",0]],null,null,i.lc,i.u)),n.Ra(84,114688,[[10,4]],0,d.y,[],{name:[0,"name"]},null),(l()(),n.Sa(85,0,null,0,1,"amexio-image",[],null,null,null,i.Gd,i.pb)),n.Ra(86,114688,null,0,d.Ub,[],{tooltip:[0,"tooltip"],path:[1,"path"]},null),(l()(),n.Sa(87,0,null,0,3,"amexio-grid-item",[],[[8,"className",0]],null,null,i.lc,i.u)),n.Ra(88,114688,[[10,4]],0,d.y,[],{name:[0,"name"]},null),(l()(),n.Sa(89,0,null,0,1,"amexio-image",[],null,null,null,i.Gd,i.pb)),n.Ra(90,114688,null,0,d.Ub,[],{tooltip:[0,"tooltip"],path:[1,"path"]},null),(l()(),n.Sa(91,0,null,0,3,"amexio-grid-item",[],[[8,"className",0]],null,null,i.lc,i.u)),n.Ra(92,114688,[[10,4]],0,d.y,[],{name:[0,"name"]},null),(l()(),n.Sa(93,0,null,0,1,"amexio-image",[],null,null,null,i.Gd,i.pb)),n.Ra(94,114688,null,0,d.Ub,[],{tooltip:[0,"tooltip"],path:[1,"path"]},null),(l()(),n.Sa(95,0,null,0,42,"amexio-grid-item",[],[[8,"className",0]],null,null,i.lc,i.u)),n.Ra(96,114688,[[9,4]],0,d.y,[],{name:[0,"name"]},null),(l()(),n.Sa(97,0,null,0,2,"amexio-label",[],null,null,null,i.sd,i.bb)),n.Ra(98,114688,null,0,d.Eb,[],{styleClass:[0,"styleClass"]},null),(l()(),n.kb(-1,0,[" Shop By "])),(l()(),n.Sa(100,0,null,0,0,"hr",[],null,null,null,null,null)),(l()(),n.Sa(101,0,null,0,36,"amexio-layout-grid",[],null,null,null,i.kc,i.t)),n.Ra(102,1163264,null,1,d.x,[d.z],{layout:[0,"layout"]},null),n.ib(603979776,11,{queryItem:1}),(l()(),n.Sa(104,0,null,0,8,"amexio-grid-item",[],[[8,"className",0]],null,null,i.lc,i.u)),n.Ra(105,114688,[[11,4]],0,d.y,[],{name:[0,"name"]},null),(l()(),n.Sa(106,0,null,0,6,"amexio-panel",[],null,[["document","click"],["document","scroll"]],function(l,e,a){var t=!0;return"document:click"===e&&(t=!1!==n.cb(l,107).onWindowClick()&&t),"document:scroll"===e&&(t=!1!==n.cb(l,107).onscroll()&&t),t},i.Nd,i.wb)),n.Ra(107,114688,null,0,d.gc,[],{header:[0,"header"],expanded:[1,"expanded"]},null),(l()(),n.kb(-1,2,[" Makeup "])),(l()(),n.Sa(109,0,null,2,0,"br",[],null,null,null,null,null)),(l()(),n.kb(-1,2,[" Skincare "])),(l()(),n.Sa(111,0,null,2,0,"br",[],null,null,null,null,null)),(l()(),n.kb(-1,2,[" Fragrance "])),(l()(),n.Sa(113,0,null,0,8,"amexio-grid-item",[],[[8,"className",0]],null,null,i.lc,i.u)),n.Ra(114,114688,[[11,4]],0,d.y,[],{name:[0,"name"]},null),(l()(),n.Sa(115,0,null,0,6,"amexio-panel",[],null,[["document","click"],["document","scroll"]],function(l,e,a){var t=!0;return"document:click"===e&&(t=!1!==n.cb(l,116).onWindowClick()&&t),"document:scroll"===e&&(t=!1!==n.cb(l,116).onscroll()&&t),t},i.Nd,i.wb)),n.Ra(116,114688,null,0,d.gc,[],{header:[0,"header"],expanded:[1,"expanded"]},null),(l()(),n.kb(-1,2,[" Bath & Body "])),(l()(),n.Sa(118,0,null,2,0,"br",[],null,null,null,null,null)),(l()(),n.kb(-1,2,[" Hair "])),(l()(),n.Sa(120,0,null,2,0,"br",[],null,null,null,null,null)),(l()(),n.kb(-1,2,[" Nails "])),(l()(),n.Sa(122,0,null,0,8,"amexio-grid-item",[],[[8,"className",0]],null,null,i.lc,i.u)),n.Ra(123,114688,[[11,4]],0,d.y,[],{name:[0,"name"]},null),(l()(),n.Sa(124,0,null,0,6,"amexio-panel",[],null,[["document","click"],["document","scroll"]],function(l,e,a){var t=!0;return"document:click"===e&&(t=!1!==n.cb(l,125).onWindowClick()&&t),"document:scroll"===e&&(t=!1!==n.cb(l,125).onscroll()&&t),t},i.Nd,i.wb)),n.Ra(125,114688,null,0,d.gc,[],{header:[0,"header"],expanded:[1,"expanded"]},null),(l()(),n.kb(-1,2,[" Tools & Brushes "])),(l()(),n.Sa(127,0,null,2,0,"br",[],null,null,null,null,null)),(l()(),n.kb(-1,2,[" Men "])),(l()(),n.Sa(129,0,null,2,0,"br",[],null,null,null,null,null)),(l()(),n.kb(-1,2,[" Gifts "])),(l()(),n.Sa(131,0,null,0,6,"amexio-grid-item",[],[[8,"className",0]],null,null,i.lc,i.u)),n.Ra(132,114688,[[11,4]],0,d.y,[],{name:[0,"name"]},null),(l()(),n.Sa(133,0,null,0,4,"amexio-panel",[],null,[["document","click"],["document","scroll"]],function(l,e,a){var t=!0;return"document:click"===e&&(t=!1!==n.cb(l,134).onWindowClick()&&t),"document:scroll"===e&&(t=!1!==n.cb(l,134).onscroll()&&t),t},i.Nd,i.wb)),n.Ra(134,114688,null,0,d.gc,[],{header:[0,"header"],expanded:[1,"expanded"]},null),(l()(),n.kb(-1,2,[" Sales "])),(l()(),n.Sa(136,0,null,2,0,"br",[],null,null,null,null,null)),(l()(),n.kb(-1,2,[" Brands "])),(l()(),n.Sa(138,0,null,0,3,"amexio-grid-item",[],[[8,"className",0]],null,null,i.lc,i.u)),n.Ra(139,114688,[[9,4]],0,d.y,[],{name:[0,"name"]},null),(l()(),n.Sa(140,0,null,0,1,"amexio-image",[["path","assets/images/grid1.jpg"]],null,null,null,i.Gd,i.pb)),n.Ra(141,114688,null,0,d.Ub,[],{path:[0,"path"]},null),(l()(),n.Sa(142,0,null,0,11,"amexio-grid-item",[],[[8,"className",0]],null,null,i.lc,i.u)),n.Ra(143,114688,[[9,4]],0,d.y,[],{name:[0,"name"]},null),(l()(),n.Sa(144,0,null,0,9,"amexio-panel",[],null,[["document","click"],["document","scroll"]],function(l,e,a){var t=!0;return"document:click"===e&&(t=!1!==n.cb(l,145).onWindowClick()&&t),"document:scroll"===e&&(t=!1!==n.cb(l,145).onscroll()&&t),t},i.Nd,i.wb)),n.Ra(145,114688,null,0,d.gc,[],{expanded:[0,"expanded"],contentAlign:[1,"contentAlign"]},null),(l()(),n.Sa(146,0,null,2,7,"amexio-label",[],null,null,null,i.sd,i.bb)),n.Ra(147,114688,null,0,d.Eb,[],{styleClass:[0,"styleClass"]},null),(l()(),n.kb(-1,0,[" OUR "])),(l()(),n.Sa(149,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),n.Sa(150,0,null,0,1,"em",[],null,null,null,null,null)),(l()(),n.kb(-1,null,["COMMUNITY"])),(l()(),n.Sa(152,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),n.kb(-1,0,[" FEATURING YOU! "])),(l()(),n.Sa(154,0,null,1,47,"amexio-tab",[["title","API Reference"]],null,null,null,i.yc,i.H)),n.Ra(155,114688,[[4,4]],0,d.R,[],{title:[0,"title"]},null),(l()(),n.Sa(156,0,null,0,22,"amexio-datagrid",[["title","Properties<amexio-layout-grid>"]],null,[["document","scroll"],["document","click"]],function(l,e,a){var t=!0;return"document:scroll"===e&&(t=!1!==n.cb(l,157).onscroll()&&t),"document:click"===e&&(t=!1!==n.cb(l,157).onclick()&&t),t},i.Od,i.xb)),n.Ra(157,1163264,null,1,d.jc,[n.l,d.Pa,n.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),n.ib(603979776,12,{columnRef:1}),(l()(),n.Sa(159,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),n.Ra(160,49152,[[12,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,13,{headerTemplate:0}),n.ib(335544320,14,{bodyTemplate:0}),(l()(),n.Sa(163,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),n.Ra(164,49152,[[12,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,15,{headerTemplate:0}),n.ib(335544320,16,{bodyTemplate:0}),(l()(),n.Sa(167,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),n.Ra(168,49152,[[12,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,17,{headerTemplate:0}),n.ib(335544320,18,{bodyTemplate:0}),(l()(),n.Sa(171,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),n.Ra(172,49152,[[12,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,19,{headerTemplate:0}),n.ib(335544320,20,{bodyTemplate:0}),(l()(),n.Sa(175,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),n.Ra(176,49152,[[12,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,21,{headerTemplate:0}),n.ib(335544320,22,{bodyTemplate:0}),(l()(),n.Sa(179,0,null,0,22,"amexio-datagrid",[["title","Properties<amexio-grid-item>"]],null,[["document","scroll"],["document","click"]],function(l,e,a){var t=!0;return"document:scroll"===e&&(t=!1!==n.cb(l,180).onscroll()&&t),"document:click"===e&&(t=!1!==n.cb(l,180).onclick()&&t),t},i.Od,i.xb)),n.Ra(180,1163264,null,1,d.jc,[n.l,d.Pa,n.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),n.ib(603979776,23,{columnRef:1}),(l()(),n.Sa(182,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),n.Ra(183,49152,[[23,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,24,{headerTemplate:0}),n.ib(335544320,25,{bodyTemplate:0}),(l()(),n.Sa(186,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),n.Ra(187,49152,[[23,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,26,{headerTemplate:0}),n.ib(335544320,27,{bodyTemplate:0}),(l()(),n.Sa(190,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),n.Ra(191,49152,[[23,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,28,{headerTemplate:0}),n.ib(335544320,29,{bodyTemplate:0}),(l()(),n.Sa(194,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),n.Ra(195,49152,[[23,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,30,{headerTemplate:0}),n.ib(335544320,31,{bodyTemplate:0}),(l()(),n.Sa(198,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),n.Ra(199,49152,[[23,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,32,{headerTemplate:0}),n.ib(335544320,33,{bodyTemplate:0}),(l()(),n.Sa(202,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,i.yc,i.H)),n.Ra(203,114688,[[4,4]],0,d.R,[],{title:[0,"title"]},null),(l()(),n.Sa(204,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),n.Sa(205,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,i.Ac,i.J)),n.Ra(206,5357568,null,1,d.V,[n.F],null,null),n.ib(603979776,34,{queryTabs:1}),(l()(),n.Sa(208,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.yc,i.H)),n.Ra(209,114688,[[34,4]],0,d.R,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),n.Ja(16777216,null,0,1,null,p)),n.Ra(211,16384,null,0,s.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(l()(),n.Sa(212,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.yc,i.H)),n.Ra(213,114688,[[34,4]],0,d.R,[],{title:[0,"title"]},null),(l()(),n.Ja(16777216,null,0,1,null,b)),n.Ra(215,16384,null,0,s.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(l()(),n.Sa(216,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.yc,i.H)),n.Ra(217,114688,[[4,4]],0,d.R,[],{title:[0,"title"]},null),(l()(),n.Sa(218,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),n.kb(-1,null,["Amexio Sandbox"])),(l()(),n.kb(-1,0,[" Work in Progress "]))],function(l,e){var a=e.component;l(e,1,0,"true"),l(e,6,0),l(e,9,0),l(e,13,0),l(e,17,0,"Demo","true"),l(e,19,0),l(e,21,0,"12"),l(e,23,0,!0),l(e,28,0),l(e,31,0),l(e,33,0,"Layout2"),l(e,36,0,"gridheader"),l(e,38,0,!0,"center"),l(e,40,0,"large-9vw-bold"),l(e,44,0,"gridheader1"),l(e,46,0,!0,!0,"center"),l(e,48,0),l(e,52,0),l(e,58,0),l(e,61,0,"gridheader2"),l(e,65,0,"gridright"),l(e,67,0,"Panel",!0),l(e,70,0,!0,!0,"center"),l(e,72,0),l(e,75,0,"gridfooter1"),l(e,77,0,"gridimagelayout"),l(e,80,0,"gridimage1"),l(e,82,0,"Image","assets/images/imggrid.jpg"),l(e,84,0,"gridimage2"),l(e,86,0,"Image","assets/images/imggrid.jpg"),l(e,88,0,"gridimage3"),l(e,90,0,"Image","assets/images/imggrid.jpg"),l(e,92,0,"gridimage4"),l(e,94,0,"Image","assets/images/imggrid.jpg"),l(e,96,0,"gridleft"),l(e,98,0,"medium-bold"),l(e,102,0,"leftlayout"),l(e,105,0,"leftlayout1"),l(e,107,0,!1,!0),l(e,114,0,"leftlayout2"),l(e,116,0,!1,!0),l(e,123,0,"leftlayout3"),l(e,125,0,!1,!0),l(e,132,0,"leftlayout4"),l(e,134,0,!1,!0),l(e,139,0,"gridmain"),l(e,141,0,"assets/images/grid1.jpg"),l(e,143,0,"gridfooter"),l(e,145,0,!0,"center"),l(e,147,0,"large-24-bold"),l(e,155,0,"API Reference"),l(e,157,0,"Properties<amexio-layout-grid>","assets/apireference/data/gridlayout.json","get","properties",!1,!1),l(e,160,0,"Name","name",!1,"string",20),l(e,164,0,"Version","version",!1,"string",20),l(e,168,0,"Type","type",!1,"string",10),l(e,172,0,"Default","default",!1,"string",10),l(e,176,0,"Description","description",!1,"string",45),l(e,180,0,"Properties<amexio-grid-item>","assets/apireference/data/gridlayout.json","get","childproperties",!1,!1),l(e,183,0,"Name","name",!1,"string",20),l(e,187,0,"Version","version",!1,"string",20),l(e,191,0,"Type","type",!1,"string",10),l(e,195,0,"Default","default",!1,"string",10),l(e,199,0,"Description","description",!1,"string",45),l(e,203,0,"Source"),l(e,206,0),l(e,209,0,"HTML",!0),l(e,211,0,a.htmlCode),l(e,213,0,"Type Script"),l(e,215,0,a.typeScriptCode),l(e,217,0,"Live")},function(l,e){l(e,20,0,n.cb(e,21).role),l(e,35,0,n.cb(e,36).hostname),l(e,43,0,n.cb(e,44).hostname),l(e,60,0,n.cb(e,61).hostname),l(e,64,0,n.cb(e,65).hostname),l(e,74,0,n.cb(e,75).hostname),l(e,79,0,n.cb(e,80).hostname),l(e,83,0,n.cb(e,84).hostname),l(e,87,0,n.cb(e,88).hostname),l(e,91,0,n.cb(e,92).hostname),l(e,95,0,n.cb(e,96).hostname),l(e,104,0,n.cb(e,105).hostname),l(e,113,0,n.cb(e,114).hostname),l(e,122,0,n.cb(e,123).hostname),l(e,131,0,n.cb(e,132).hostname),l(e,138,0,n.cb(e,139).hostname),l(e,142,0,n.cb(e,143).hostname)})}var y=n.Oa("gridlayout-demo-exp2",c,function(l){return n.mb(0,[(l()(),n.Sa(0,0,null,null,1,"gridlayout-demo-exp2",[],null,null,null,h,m)),n.Ra(1,49152,null,0,c,[g.c,d.z],null,null)],null,null)},{},{},[]),f=a("gIcY"),x=a("ZYCi");a.d(e,"GridLayoutDemoModuleNgFactory",function(){return k});var k=n.Pa(t,[],function(l){return n.Za([n.ab(512,n.k,n.Ea,[[8,[i.a,u.a,y]],[3,n.k],n.z]),n.ab(4608,s.o,s.n,[n.w,[2,s.x]]),n.ab(4608,f.G,f.G,[]),n.ab(4608,g.i,g.o,[s.d,n.D,g.m]),n.ab(4608,g.p,g.p,[g.i,g.n]),n.ab(5120,g.a,function(l){return[l]},[g.p]),n.ab(4608,g.l,g.l,[]),n.ab(6144,g.j,null,[g.l]),n.ab(4608,g.h,g.h,[g.j]),n.ab(6144,g.b,null,[g.h]),n.ab(4608,g.f,g.k,[g.b,n.s]),n.ab(4608,g.c,g.c,[g.f]),n.ab(4608,d.Pa,d.Pa,[g.c]),n.ab(4608,d.La,d.La,[]),n.ab(4608,d.Sa,d.Sa,[]),n.ab(4608,d.Za,d.Za,[n.D]),n.ab(4608,d.gb,d.gb,[]),n.ab(4608,d.z,d.z,[]),n.ab(4608,d.Ab,d.Ab,[]),n.ab(4608,f.f,f.f,[]),n.ab(1073742336,s.c,s.c,[]),n.ab(1073742336,f.D,f.D,[]),n.ab(1073742336,f.l,f.l,[]),n.ab(1073742336,g.e,g.e,[]),n.ab(1073742336,g.d,g.d,[]),n.ab(1073742336,d.l,d.l,[]),n.ab(1073742336,d.n,d.n,[]),n.ab(1073742336,o.b,o.b,[]),n.ab(1073742336,d.B,d.B,[]),n.ab(1073742336,d.w,d.w,[]),n.ab(1073742336,d.E,d.E,[]),n.ab(1073742336,d.G,d.G,[]),n.ab(1073742336,f.z,f.z,[]),n.ab(1073742336,d.J,d.J,[]),n.ab(1073742336,d.o,d.o,[]),n.ab(1073742336,d.X,d.X,[]),n.ab(1073742336,x.n,x.n,[[2,x.t],[2,x.m]]),n.ab(1073742336,t,t,[]),n.ab(256,g.m,"XSRF-TOKEN",[]),n.ab(256,g.n,"X-XSRF-TOKEN",[]),n.ab(1024,x.i,function(){return[[{path:"",component:c,pathMatch:"full"}]]},[])])})},U89g:function(l,e,a){"use strict";a.d(e,"a",function(){return t}),a.d(e,"b",function(){return i});var n=a("CcnG"),t=(a("d2mR"),a("Ip0R"),n.Qa({encapsulation:2,styles:[],data:{}}));function i(l){return n.mb(0,[],null,null)}},XIHC:function(l,e){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(l,e,a){"use strict";a.d(e,"a",function(){return n}),a.d(e,"b",function(){return t}),a("wZee"),a("XIHC");var n=function(){function l(l,e){this._renderer=l,this._el=e,this.nativeElement=e.nativeElement}return l.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},l}(),t=function(){}},wZee:function(l,e){var a="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},n=function(){var l=/\blang(?:uage)?-([\w-]+)\b/i,e=0,n=a.Prism={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function(l){return l instanceof t?new t(l.type,n.util.encode(l.content),l.alias):"Array"===n.util.type(l)?l.map(n.util.encode):l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(l){return Object.prototype.toString.call(l).match(/\[object (\w+)\]/)[1]},objId:function(l){return l.__id||Object.defineProperty(l,"__id",{value:++e}),l.__id},clone:function(l,e){var a=n.util.type(l);switch(e=e||{},a){case"Object":if(e[n.util.objId(l)])return e[n.util.objId(l)];var t={};for(var i in e[n.util.objId(l)]=t,l)l.hasOwnProperty(i)&&(t[i]=n.util.clone(l[i],e));return t;case"Array":return e[n.util.objId(l)]?e[n.util.objId(l)]:(t=[],e[n.util.objId(l)]=t,l.forEach(function(l,a){t[a]=n.util.clone(l,e)}),t)}return l}},languages:{extend:function(l,e){var a=n.util.clone(n.languages[l]);for(var t in e)a[t]=e[t];return a},insertBefore:function(l,e,a,t){var i=(t=t||n.languages)[l];if(2==arguments.length){for(var u in a=arguments[1])a.hasOwnProperty(u)&&(i[u]=a[u]);return i}var r={};for(var o in i)if(i.hasOwnProperty(o)){if(o==e)for(var u in a)a.hasOwnProperty(u)&&(r[u]=a[u]);r[o]=i[o]}return n.languages.DFS(n.languages,function(e,a){a===t[l]&&e!=l&&(this[e]=r)}),t[l]=r},DFS:function(l,e,a,t){for(var i in t=t||{},l)l.hasOwnProperty(i)&&(e.call(l,i,l[i],a||i),"Object"!==n.util.type(l[i])||t[n.util.objId(l[i])]?"Array"!==n.util.type(l[i])||t[n.util.objId(l[i])]||(t[n.util.objId(l[i])]=!0,n.languages.DFS(l[i],e,i,t)):(t[n.util.objId(l[i])]=!0,n.languages.DFS(l[i],e,null,t)))}},plugins:{},highlightAll:function(l,e){n.highlightAllUnder(document,l,e)},highlightAllUnder:function(l,e,a){var t={callback:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",t);for(var i,u=t.elements||l.querySelectorAll(t.selector),r=0;i=u[r++];)n.highlightElement(i,!0===e,t.callback)},highlightElement:function(e,t,i){for(var u,r,o=e;o&&!l.test(o.className);)o=o.parentNode;o&&(u=(o.className.match(l)||[,""])[1].toLowerCase(),r=n.languages[u]),e.className=e.className.replace(l,"").replace(/\s+/g," ")+" language-"+u,e.parentNode&&/pre/i.test((o=e.parentNode).nodeName)&&(o.className=o.className.replace(l,"").replace(/\s+/g," ")+" language-"+u);var d={element:e,language:u,grammar:r,code:e.textContent};if(n.hooks.run("before-sanity-check",d),!d.code||!d.grammar)return d.code&&(n.hooks.run("before-highlight",d),d.element.textContent=d.code,n.hooks.run("after-highlight",d)),void n.hooks.run("complete",d);if(n.hooks.run("before-highlight",d),t&&a.Worker){var s=new Worker(n.filename);s.onmessage=function(l){d.highlightedCode=l.data,n.hooks.run("before-insert",d),d.element.innerHTML=d.highlightedCode,i&&i.call(d.element),n.hooks.run("after-highlight",d),n.hooks.run("complete",d)},s.postMessage(JSON.stringify({language:d.language,code:d.code,immediateClose:!0}))}else d.highlightedCode=n.highlight(d.code,d.grammar,d.language),n.hooks.run("before-insert",d),d.element.innerHTML=d.highlightedCode,i&&i.call(e),n.hooks.run("after-highlight",d),n.hooks.run("complete",d)},highlight:function(l,e,a){var i={code:l,grammar:e,language:a};return n.hooks.run("before-tokenize",i),i.tokens=n.tokenize(i.code,i.grammar),n.hooks.run("after-tokenize",i),t.stringify(n.util.encode(i.tokens),i.language)},matchGrammar:function(l,e,a,t,i,u,r){var o=n.Token;for(var d in a)if(a.hasOwnProperty(d)&&a[d]){if(d==r)return;var s=a[d];s="Array"===n.util.type(s)?s:[s];for(var c=0;c<s.length;++c){var g=s[c],m=g.inside,p=!!g.lookbehind,b=!!g.greedy,h=0,y=g.alias;if(b&&!g.pattern.global){var f=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,f+"g")}g=g.pattern||g;for(var x=t,k=i;x<e.length;k+=e[x].length,++x){var S=e[x];if(e.length>l.length)return;if(!(S instanceof o)){if(b&&x!=e.length-1){if(g.lastIndex=k,!(N=g.exec(l)))break;for(var v=N.index+(p?N[1].length:0),w=N.index+N[0].length,R=x,C=k,A=e.length;R<A&&(C<w||!e[R].type&&!e[R-1].greedy);++R)v>=(C+=e[R].length)&&(++x,k=C);if(e[x]instanceof o)continue;F=R-x,S=l.slice(k,C),N.index-=k}else{g.lastIndex=0;var N=g.exec(S),F=1}if(N){p&&(h=N[1]?N[1].length:0),w=(v=N.index+h)+(N=N[0].slice(h)).length;var T=S.slice(0,v),P=S.slice(w),j=[x,F];T&&(++x,k+=T.length,j.push(T));var E=new o(d,m?n.tokenize(N,m):N,y,N,b);if(j.push(E),P&&j.push(P),Array.prototype.splice.apply(e,j),1!=F&&n.matchGrammar(l,e,a,x,k,!0,d),u)break}else if(u)break}}}}},tokenize:function(l,e,a){var t=[l],i=e.rest;if(i){for(var u in i)e[u]=i[u];delete e.rest}return n.matchGrammar(l,t,e,0,0,!1),t},hooks:{all:{},add:function(l,e){var a=n.hooks.all;a[l]=a[l]||[],a[l].push(e)},run:function(l,e){var a=n.hooks.all[l];if(a&&a.length)for(var t,i=0;t=a[i++];)t(e)}}},t=n.Token=function(l,e,a,n,t){this.type=l,this.content=e,this.alias=a,this.length=0|(n||"").length,this.greedy=!!t};if(t.stringify=function(l,e,a){if("string"==typeof l)return l;if("Array"===n.util.type(l))return l.map(function(a){return t.stringify(a,e,l)}).join("");var i={type:l.type,content:t.stringify(l.content,e,a),tag:"span",classes:["token",l.type],attributes:{},language:e,parent:a};if(l.alias){var u="Array"===n.util.type(l.alias)?l.alias:[l.alias];Array.prototype.push.apply(i.classes,u)}n.hooks.run("wrap",i);var r=Object.keys(i.attributes).map(function(l){return l+'="'+(i.attributes[l]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(r?" "+r:"")+">"+i.content+"</"+i.tag+">"},!a.document)return a.addEventListener?(n.disableWorkerMessageHandler||a.addEventListener("message",function(l){var e=JSON.parse(l.data),t=e.language,i=e.immediateClose;a.postMessage(n.highlight(e.code,n.languages[t],t)),i&&a.close()},!1),a.Prism):a.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(n.filename=i.src,n.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),a.Prism}();void 0!==l&&l.exports&&(l.exports=n),"undefined"!=typeof global&&(global.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.hooks.add("wrap",function(l){"entity"===l.type&&(l.attributes.title=l.content.replace(/&amp;/,"&"))}),n.languages.xml=n.languages.markup,n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},n.languages.css.atrule.inside.rest=n.languages.css,n.languages.markup&&(n.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:n.languages.css,alias:"language-css",greedy:!0}}),n.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:n.languages.css}},alias:"language-css"}},n.languages.markup.tag)),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),n.languages.javascript["template-string"].inside.interpolation.inside.rest=n.languages.javascript,n.languages.markup&&n.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:n.languages.javascript,alias:"language-javascript",greedy:!0}}),n.languages.js=n.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(e){for(var a,t=e.getAttribute("data-src"),i=e,u=/\blang(?:uage)?-([\w-]+)\b/i;i&&!u.test(i.className);)i=i.parentNode;if(i&&(a=(e.className.match(u)||[,""])[1]),!a){var r=(t.match(/\.(\w+)$/)||[,""])[1];a=l[r]||r}var o=document.createElement("code");o.className="language-"+a,e.textContent="",o.textContent="Loading\u2026",e.appendChild(o);var d=new XMLHttpRequest;d.open("GET",t,!0),d.onreadystatechange=function(){4==d.readyState&&(d.status<400&&d.responseText?(o.textContent=d.responseText,n.highlightElement(o)):o.textContent=d.status>=400?"\u2716 Error "+d.status+" while fetching file: "+d.statusText:"\u2716 Error: File does not exist or is empty")},d.send(null)}),n.plugins.toolbar&&n.plugins.toolbar.registerButton("download-file",function(l){var e=l.element.parentNode;if(e&&/pre/i.test(e.nodeName)&&e.hasAttribute("data-src")&&e.hasAttribute("data-download-link")){var a=e.getAttribute("data-src"),n=document.createElement("a");return n.textContent=e.getAttribute("data-download-link-label")||"Download",n.setAttribute("download",""),n.href=a,n}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);