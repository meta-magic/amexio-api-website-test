(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{U89g:function(e,l,a){"use strict";a.d(l,"a",function(){return n}),a.d(l,"b",function(){return i});var t=a("CcnG"),n=(a("d2mR"),a("Ip0R"),t.Qa({encapsulation:2,styles:[],data:{}}));function i(e){return t.mb(0,[],null,null)}},XIHC:function(e,l){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},c8PW:function(e,l,a){"use strict";a.r(l);var t=a("CcnG"),n=function(){},i=a("gTgE"),u=a("pMnS"),r=a("U89g"),o=a("d2mR"),s=a("O4vx"),d=a("Ip0R"),m=function(){function e(e,l){this.http=e,this._gridlayoutService=l,this.createLayouts(),this._gridlayoutService.createLayout(this.gridDesktop),this._gridlayoutService.createLayout(this.gridTablet),this._gridlayoutService.createLayout(this.gridMobile),this.getHtmlAndTypeScriptCode()}return e.prototype.createLayouts=function(){this.gridDesktop=new s.ib("Home",s.jb.Desktop).addlayout(["gridheader1","gridheader2","gridheader3","gridheader4"]).addlayout(["gridtitle","gridmain","gridmain","gridright1"]).addlayout(["gridmenu","gridmain","gridmain","gridright2"]).addlayout(["gridmenu","gridmain","gridmain","gridright3"]),this.gridTablet=new s.ib("Home",s.jb.Tablet).addlayout(["gridheader1","gridheader2","gridheader3","gridheader4"]).addlayout(["gridmain","gridmain","gridmain","gridmain"]).addlayout(["gridtitle","gridtitle","gridright1","gridright1"]).addlayout(["gridmenu","gridmenu","gridright2","gridright2"]).addlayout(["gridright3","gridright3","gridright3","gridright3"]),this.gridMobile=new s.ib("Home",s.jb.Mobile).addlayout(["gridheader1","gridheader2","gridheader3","gridheader4"]).addlayout(["gridmain","gridmain","gridmain","gridmain"]).addlayout(["gridtitle","gridtitle","gridtitle","gridtitle"]).addlayout(["gridmenu","gridmenu","gridmenu","gridmenu"]).addlayout(["gridright1","gridright1","gridright1","gridright1"]).addlayout(["gridright2","gridright2","gridright2","gridright2"]).addlayout(["gridright3","gridright3","gridright3","gridright3"])},e.prototype.getHtmlAndTypeScriptCode=function(){var e,l,a=this;this.http.get("assets/data/code/data/gridlayout/gridlayoutexp3.html",{responseType:"text"}).subscribe(function(l){e=l},function(e){},function(){a.htmlCode=e}),this.http.get("assets/data/code/data/gridlayout/gridlayoutexp3.text",{responseType:"text"}).subscribe(function(e){l=e},function(e){},function(){a.typeScriptCode=l})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e.prototype.onRowSelect=function(e){this.selectedData=e},e}(),g=a("t/Na"),c=t.Qa({encapsulation:2,styles:[],data:{}});function p(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,r.b,r.a)),t.Ra(2,4243456,null,0,o.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.htmlCode,"html")},null)}function h(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,r.b,r.a)),t.Ra(2,4243456,null,0,o.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.typeScriptCode,"typescript")},null)}function b(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,208,"amexio-card",[["header","true"]],null,null,null,i.bc,i.k)),t.Ra(1,7585792,null,3,s.j,[t.F],{header:[0,"header"]},null),t.ib(603979776,1,{amexioHeader:1}),t.ib(603979776,2,{amexioBody:1}),t.ib(603979776,3,{amexioFooter:1}),(e()(),t.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),t.Ra(6,1163264,[[1,4]],0,s.C,[],null,null),(e()(),t.kb(-1,0,[" Grid Layout "])),(e()(),t.Sa(8,0,null,1,200,"amexio-body",[],null,null,null,i.Vb,i.e)),t.Ra(9,1163264,[[2,4]],0,s.d,[],null,null),(e()(),t.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),t.kb(-1,null,["CSS Grid Layout is the most powerful layout system available in CSS. It is a 2-dimensional system, meaning it can handle both columns and rows. Grid Layout can be used by applying CSS rules both to a parent element (which becomes the Grid Container) and to that elements children (which become Grid Items)."])),(e()(),t.Sa(12,0,null,0,196,"amexio-tab-view",[],null,null,null,i.xc,i.G)),t.Ra(13,5488640,null,2,s.S,[t.F,t.k,t.F],null,null),t.ib(603979776,4,{queryTabs:1}),t.ib(603979776,5,{queryAction:1}),(e()(),t.Sa(16,0,null,1,124,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.yc,i.H)),t.Ra(17,114688,[[4,4]],0,s.T,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),t.Sa(18,0,null,0,122,"amexio-row",[],null,null,null,i.tc,i.C)),t.Ra(19,1163264,null,0,s.O,[],null,null),(e()(),t.Sa(20,0,null,0,120,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,i.dc,i.m)),t.Ra(21,114688,null,0,s.m,[],{size:[0,"size"]},null),(e()(),t.Sa(22,0,null,0,118,"amexio-card",[],null,null,null,i.bc,i.k)),t.Ra(23,7585792,null,3,s.j,[t.F],{header:[0,"header"]},null),t.ib(603979776,6,{amexioHeader:1}),t.ib(603979776,7,{amexioBody:1}),t.ib(603979776,8,{amexioFooter:1}),(e()(),t.Sa(27,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),t.Ra(28,1163264,[[6,4]],0,s.C,[],null,null),(e()(),t.kb(-1,0,[" Grid Layout "])),(e()(),t.Sa(30,0,null,1,110,"amexio-body",[],null,null,null,i.Vb,i.e)),t.Ra(31,1163264,[[7,4]],0,s.d,[],null,null),(e()(),t.Sa(32,0,null,0,108,"amexio-layout-grid",[],null,null,null,i.kc,i.t)),t.Ra(33,1163264,null,1,s.z,[s.B],{layout:[0,"layout"]},null),t.ib(603979776,9,{queryItem:1}),(e()(),t.Sa(35,0,null,0,3,"amexio-grid-item",[],[[8,"className",0]],null,null,i.lc,i.u)),t.Ra(36,114688,[[9,4]],0,s.A,[],{name:[0,"name"]},null),(e()(),t.Sa(37,0,null,0,1,"amexio-button",[],null,null,null,i.Zb,i.i)),t.Ra(38,114688,null,0,s.h,[],{label:[0,"label"],type:[1,"type"],tooltip:[2,"tooltip"],size:[3,"size"]},null),(e()(),t.Sa(39,0,null,0,3,"amexio-grid-item",[],[[8,"className",0]],null,null,i.lc,i.u)),t.Ra(40,114688,[[9,4]],0,s.A,[],{name:[0,"name"]},null),(e()(),t.Sa(41,0,null,0,1,"amexio-button",[],null,null,null,i.Zb,i.i)),t.Ra(42,114688,null,0,s.h,[],{label:[0,"label"],type:[1,"type"],tooltip:[2,"tooltip"],size:[3,"size"]},null),(e()(),t.Sa(43,0,null,0,3,"amexio-grid-item",[],[[8,"className",0]],null,null,i.lc,i.u)),t.Ra(44,114688,[[9,4]],0,s.A,[],{name:[0,"name"]},null),(e()(),t.Sa(45,0,null,0,1,"amexio-button",[],null,null,null,i.Zb,i.i)),t.Ra(46,114688,null,0,s.h,[],{label:[0,"label"],type:[1,"type"],tooltip:[2,"tooltip"],size:[3,"size"]},null),(e()(),t.Sa(47,0,null,0,3,"amexio-grid-item",[],[[8,"className",0]],null,null,i.lc,i.u)),t.Ra(48,114688,[[9,4]],0,s.A,[],{name:[0,"name"]},null),(e()(),t.Sa(49,0,null,0,1,"amexio-button",[],null,null,null,i.Zb,i.i)),t.Ra(50,114688,null,0,s.h,[],{label:[0,"label"],type:[1,"type"],tooltip:[2,"tooltip"],size:[3,"size"]},null),(e()(),t.Sa(51,0,null,0,16,"amexio-grid-item",[],[[8,"className",0]],null,null,i.lc,i.u)),t.Ra(52,114688,[[9,4]],0,s.A,[],{name:[0,"name"]},null),(e()(),t.Sa(53,0,null,0,14,"amexio-card",[],null,null,null,i.bc,i.k)),t.Ra(54,7585792,null,3,s.j,[t.F],{headeralign:[0,"headeralign"],header:[1,"header"],footer:[2,"footer"],footeralign:[3,"footeralign"]},null),t.ib(603979776,10,{amexioHeader:1}),t.ib(603979776,11,{amexioBody:1}),t.ib(603979776,12,{amexioFooter:1}),(e()(),t.Sa(58,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),t.Ra(59,1163264,[[10,4]],0,s.C,[],null,null),(e()(),t.kb(-1,0,[" Warli Painting "])),(e()(),t.Sa(61,0,null,1,6,"amexio-body",[],null,null,null,i.Vb,i.e)),t.Ra(62,1163264,[[11,4]],0,s.d,[],null,null),(e()(),t.Sa(63,0,null,0,1,"amexio-image",[["path","assets/images/warli1.jpg"]],null,null,null,i.Gd,i.pb)),t.Ra(64,114688,null,0,s.hc,[],{path:[0,"path"]},null),(e()(),t.Sa(65,0,null,0,2,"amexio-label",[["size","small"]],null,null,null,i.sd,i.bb)),t.Ra(66,114688,null,0,s.Nb,[],{styleClass:[0,"styleClass"]},null),(e()(),t.kb(-1,0,[" Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates. "])),(e()(),t.Sa(68,0,null,0,16,"amexio-grid-item",[],[[8,"className",0]],null,null,i.lc,i.u)),t.Ra(69,114688,[[9,4]],0,s.A,[],{name:[0,"name"]},null),(e()(),t.Sa(70,0,null,0,14,"amexio-card",[],null,null,null,i.bc,i.k)),t.Ra(71,7585792,null,3,s.j,[t.F],{headeralign:[0,"headeralign"],header:[1,"header"],footer:[2,"footer"],footeralign:[3,"footeralign"]},null),t.ib(603979776,13,{amexioHeader:1}),t.ib(603979776,14,{amexioBody:1}),t.ib(603979776,15,{amexioFooter:1}),(e()(),t.Sa(75,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),t.Ra(76,1163264,[[13,4]],0,s.C,[],null,null),(e()(),t.kb(-1,0,[" Gallerist "])),(e()(),t.Sa(78,0,null,1,6,"amexio-body",[],null,null,null,i.Vb,i.e)),t.Ra(79,1163264,[[14,4]],0,s.d,[],null,null),(e()(),t.Sa(80,0,null,0,1,"amexio-image",[["path","assets/images/soap-bubble.jpg"]],null,null,null,i.Gd,i.pb)),t.Ra(81,114688,null,0,s.hc,[],{path:[0,"path"]},null),(e()(),t.Sa(82,0,null,0,2,"amexio-label",[["size","small"]],null,null,null,i.sd,i.bb)),t.Ra(83,114688,null,0,s.Nb,[],{styleClass:[0,"styleClass"]},null),(e()(),t.kb(-1,0,[" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "])),(e()(),t.Sa(85,0,null,0,16,"amexio-grid-item",[],[[8,"className",0]],null,null,i.lc,i.u)),t.Ra(86,114688,[[9,4]],0,s.A,[],{name:[0,"name"]},null),(e()(),t.Sa(87,0,null,0,14,"amexio-card",[],null,null,null,i.bc,i.k)),t.Ra(88,7585792,null,3,s.j,[t.F],{headeralign:[0,"headeralign"],header:[1,"header"],footer:[2,"footer"],footeralign:[3,"footeralign"]},null),t.ib(603979776,16,{amexioHeader:1}),t.ib(603979776,17,{amexioBody:1}),t.ib(603979776,18,{amexioFooter:1}),(e()(),t.Sa(92,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),t.Ra(93,1163264,[[16,4]],0,s.C,[],null,null),(e()(),t.kb(-1,0,[" Calligraphy "])),(e()(),t.Sa(95,0,null,1,6,"amexio-body",[],null,null,null,i.Vb,i.e)),t.Ra(96,1163264,[[17,4]],0,s.d,[],null,null),(e()(),t.Sa(97,0,null,0,1,"amexio-image",[["path","assets/images/calligraphy.jpg"]],null,null,null,i.Gd,i.pb)),t.Ra(98,114688,null,0,s.hc,[],{path:[0,"path"]},null),(e()(),t.Sa(99,0,null,0,2,"amexio-label",[["size","small"]],null,null,null,i.sd,i.bb)),t.Ra(100,114688,null,0,s.Nb,[],{styleClass:[0,"styleClass"]},null),(e()(),t.kb(-1,0,[" Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates. "])),(e()(),t.Sa(102,0,null,0,16,"amexio-grid-item",[],[[8,"className",0]],null,null,i.lc,i.u)),t.Ra(103,114688,[[9,4]],0,s.A,[],{name:[0,"name"]},null),(e()(),t.Sa(104,0,null,0,14,"amexio-card",[],null,null,null,i.bc,i.k)),t.Ra(105,7585792,null,3,s.j,[t.F],{headeralign:[0,"headeralign"],header:[1,"header"],footer:[2,"footer"],footeralign:[3,"footeralign"]},null),t.ib(603979776,19,{amexioHeader:1}),t.ib(603979776,20,{amexioBody:1}),t.ib(603979776,21,{amexioFooter:1}),(e()(),t.Sa(109,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),t.Ra(110,1163264,[[19,4]],0,s.C,[],null,null),(e()(),t.kb(-1,0,[" Landscape "])),(e()(),t.Sa(112,0,null,1,6,"amexio-body",[],null,null,null,i.Vb,i.e)),t.Ra(113,1163264,[[20,4]],0,s.d,[],null,null),(e()(),t.Sa(114,0,null,0,1,"amexio-image",[["path","assets/images/landscape.jpg"]],null,null,null,i.Gd,i.pb)),t.Ra(115,114688,null,0,s.hc,[],{path:[0,"path"]},null),(e()(),t.Sa(116,0,null,0,2,"amexio-label",[["size","small"]],null,null,null,i.sd,i.bb)),t.Ra(117,114688,null,0,s.Nb,[],{styleClass:[0,"styleClass"]},null),(e()(),t.kb(-1,0,[" Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates. "])),(e()(),t.Sa(119,0,null,0,4,"amexio-grid-item",[],[[8,"className",0]],null,null,i.lc,i.u)),t.Ra(120,114688,[[9,4]],0,s.A,[],{name:[0,"name"]},null),(e()(),t.Sa(121,0,null,0,2,"amexio-panel",[],null,null,null,i.Md,i.vb)),t.Ra(122,245760,null,0,s.sc,[t.F],{title:[0,"title"],header:[1,"header"],expanded:[2,"expanded"]},null),(e()(),t.kb(-1,2,[" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. "])),(e()(),t.Sa(124,0,null,0,16,"amexio-grid-item",[],[[8,"className",0]],null,null,i.lc,i.u)),t.Ra(125,114688,[[9,4]],0,s.A,[],{name:[0,"name"]},null),(e()(),t.Sa(126,0,null,0,14,"amexio-card",[],null,null,null,i.bc,i.k)),t.Ra(127,7585792,null,3,s.j,[t.F],{headeralign:[0,"headeralign"],header:[1,"header"],footer:[2,"footer"],footeralign:[3,"footeralign"]},null),t.ib(603979776,22,{amexioHeader:1}),t.ib(603979776,23,{amexioBody:1}),t.ib(603979776,24,{amexioFooter:1}),(e()(),t.Sa(131,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),t.Ra(132,1163264,[[22,4]],0,s.C,[],null,null),(e()(),t.kb(-1,0,[" Origami "])),(e()(),t.Sa(134,0,null,1,6,"amexio-body",[],null,null,null,i.Vb,i.e)),t.Ra(135,1163264,[[23,4]],0,s.d,[],null,null),(e()(),t.Sa(136,0,null,0,1,"amexio-image",[["path","assets/images/origami.jpg"]],null,null,null,i.Gd,i.pb)),t.Ra(137,114688,null,0,s.hc,[],{path:[0,"path"]},null),(e()(),t.Sa(138,0,null,0,2,"amexio-label",[["size","small"]],null,null,null,i.sd,i.bb)),t.Ra(139,114688,null,0,s.Nb,[],{styleClass:[0,"styleClass"]},null),(e()(),t.kb(-1,0,[" Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates. "])),(e()(),t.Sa(141,0,null,1,48,"amexio-tab",[["title","API Reference"]],null,null,null,i.yc,i.H)),t.Ra(142,114688,[[4,4]],0,s.T,[],{title:[0,"title"]},null),(e()(),t.Sa(143,0,null,0,22,"amexio-datagrid",[["title","Properties<amexio-layout-grid>"]],null,null,null,i.Nd,i.wb)),t.Ra(144,1294336,null,1,s.vc,[t.l,s.Sa,t.i,t.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,25,{columnRef:1}),(e()(),t.Sa(146,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),t.Ra(147,49152,[[25,4]],2,s.wc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,26,{headerTemplate:0}),t.ib(335544320,27,{bodyTemplate:0}),(e()(),t.Sa(150,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),t.Ra(151,49152,[[25,4]],2,s.wc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,28,{headerTemplate:0}),t.ib(335544320,29,{bodyTemplate:0}),(e()(),t.Sa(154,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),t.Ra(155,49152,[[25,4]],2,s.wc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,30,{headerTemplate:0}),t.ib(335544320,31,{bodyTemplate:0}),(e()(),t.Sa(158,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),t.Ra(159,49152,[[25,4]],2,s.wc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,32,{headerTemplate:0}),t.ib(335544320,33,{bodyTemplate:0}),(e()(),t.Sa(162,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),t.Ra(163,49152,[[25,4]],2,s.wc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,34,{headerTemplate:0}),t.ib(335544320,35,{bodyTemplate:0}),(e()(),t.Sa(166,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),t.Sa(167,0,null,0,22,"amexio-datagrid",[["title","Properties<amexio-grid-item>"]],null,null,null,i.Nd,i.wb)),t.Ra(168,1294336,null,1,s.vc,[t.l,s.Sa,t.i,t.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,36,{columnRef:1}),(e()(),t.Sa(170,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),t.Ra(171,49152,[[36,4]],2,s.wc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,37,{headerTemplate:0}),t.ib(335544320,38,{bodyTemplate:0}),(e()(),t.Sa(174,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),t.Ra(175,49152,[[36,4]],2,s.wc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,39,{headerTemplate:0}),t.ib(335544320,40,{bodyTemplate:0}),(e()(),t.Sa(178,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),t.Ra(179,49152,[[36,4]],2,s.wc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,41,{headerTemplate:0}),t.ib(335544320,42,{bodyTemplate:0}),(e()(),t.Sa(182,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),t.Ra(183,49152,[[36,4]],2,s.wc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,43,{headerTemplate:0}),t.ib(335544320,44,{bodyTemplate:0}),(e()(),t.Sa(186,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),t.Ra(187,49152,[[36,4]],2,s.wc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,45,{headerTemplate:0}),t.ib(335544320,46,{bodyTemplate:0}),(e()(),t.Sa(190,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,i.yc,i.H)),t.Ra(191,114688,[[4,4]],0,s.T,[],{title:[0,"title"]},null),(e()(),t.Sa(192,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),t.Sa(193,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,i.Ac,i.J)),t.Ra(194,5357568,null,1,s.X,[t.F,t.k],null,null),t.ib(603979776,47,{queryTabs:1}),(e()(),t.Sa(196,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.yc,i.H)),t.Ra(197,114688,[[47,4]],0,s.T,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),t.Ja(16777216,null,0,1,null,p)),t.Ra(199,16384,null,0,d.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(e()(),t.Sa(200,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.yc,i.H)),t.Ra(201,114688,[[47,4]],0,s.T,[],{title:[0,"title"]},null),(e()(),t.Ja(16777216,null,0,1,null,h)),t.Ra(203,16384,null,0,d.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(e()(),t.Sa(204,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.yc,i.H)),t.Ra(205,114688,[[4,4]],0,s.T,[],{title:[0,"title"]},null),(e()(),t.Sa(206,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),t.kb(-1,null,["Amexio Sandbox"])),(e()(),t.kb(-1,0,[' <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-gridlayoutthree?embed=1&file=app/layouts/gridlayout/gridlayoutthree/gridlayout.demo.html" ']))],function(e,l){var a=l.component;e(l,1,0,"true"),e(l,6,0),e(l,9,0),e(l,13,0),e(l,17,0,"Demo","true"),e(l,19,0),e(l,21,0,"12"),e(l,23,0,!0),e(l,28,0),e(l,31,0),e(l,33,0,"Home"),e(l,36,0,"gridheader1"),e(l,38,0,"Home","transparent","Home","small"),e(l,40,0,"gridheader2"),e(l,42,0,"About","transparent","Home","small"),e(l,44,0,"gridheader3"),e(l,46,0,"Gallery","transparent","Home","small"),e(l,48,0,"gridheader4"),e(l,50,0,"Content","transparent","Home","small"),e(l,52,0,"gridtitle"),e(l,54,0,"left",!0,!1,"left"),e(l,59,0),e(l,62,0),e(l,64,0,"assets/images/warli1.jpg"),e(l,66,0,"small"),e(l,69,0,"gridmain"),e(l,71,0,"left",!0,!1,"left"),e(l,76,0),e(l,79,0),e(l,81,0,"assets/images/soap-bubble.jpg"),e(l,83,0,"small"),e(l,86,0,"gridright1"),e(l,88,0,"left",!0,!1,"left"),e(l,93,0),e(l,96,0),e(l,98,0,"assets/images/calligraphy.jpg"),e(l,100,0,"small"),e(l,103,0,"gridright2"),e(l,105,0,"left",!0,!1,"left"),e(l,110,0),e(l,113,0),e(l,115,0,"assets/images/landscape.jpg"),e(l,117,0,"small"),e(l,120,0,"gridright3"),e(l,122,0,"Imaginary Drawing",!0,!0),e(l,125,0,"gridmenu"),e(l,127,0,"left",!0,!1,"left"),e(l,132,0),e(l,135,0),e(l,137,0,"assets/images/origami.jpg"),e(l,139,0,"small"),e(l,142,0,"API Reference"),e(l,144,0,"Properties<amexio-layout-grid>","assets/apireference/data/gridlayout.json","get","properties",!1,!1),e(l,147,0,"Name","name",!1,"string",20),e(l,151,0,"Version","version",!1,"string",20),e(l,155,0,"Type","type",!1,"string",10),e(l,159,0,"Default","default",!1,"string",10),e(l,163,0,"Description","description",!1,"string",45),e(l,168,0,"Properties<amexio-grid-item>","assets/apireference/data/gridlayout.json","get","childproperties",!1,!1),e(l,171,0,"Name","name",!1,"string",20),e(l,175,0,"Version","version",!1,"string",20),e(l,179,0,"Type","type",!1,"string",10),e(l,183,0,"Default","default",!1,"string",10),e(l,187,0,"Description","description",!1,"string",45),e(l,191,0,"Source"),e(l,194,0),e(l,197,0,"HTML",!0),e(l,199,0,a.htmlCode),e(l,201,0,"Type Script"),e(l,203,0,a.typeScriptCode),e(l,205,0,"Live")},function(e,l){e(l,20,0,t.cb(l,21).role),e(l,35,0,t.cb(l,36).hostname),e(l,39,0,t.cb(l,40).hostname),e(l,43,0,t.cb(l,44).hostname),e(l,47,0,t.cb(l,48).hostname),e(l,51,0,t.cb(l,52).hostname),e(l,68,0,t.cb(l,69).hostname),e(l,85,0,t.cb(l,86).hostname),e(l,102,0,t.cb(l,103).hostname),e(l,119,0,t.cb(l,120).hostname),e(l,124,0,t.cb(l,125).hostname)})}var y=t.Oa("gridlayout-demo-exp3",m,function(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,1,"gridlayout-demo-exp3",[],null,null,null,b,c)),t.Ra(1,49152,null,0,m,[g.c,s.B],null,null)],null,null)},{},{},[]),f=a("gIcY"),x=a("ZYCi");a.d(l,"GridLayoutDemoModuleNgFactory",function(){return S});var S=t.Pa(n,[],function(e){return t.Za([t.ab(512,t.k,t.Ea,[[8,[i.a,u.a,y]],[3,t.k],t.z]),t.ab(4608,d.o,d.n,[t.w,[2,d.x]]),t.ab(4608,f.G,f.G,[]),t.ab(4608,g.i,g.o,[d.d,t.D,g.m]),t.ab(4608,g.p,g.p,[g.i,g.n]),t.ab(5120,g.a,function(e){return[e]},[g.p]),t.ab(4608,g.l,g.l,[]),t.ab(6144,g.j,null,[g.l]),t.ab(4608,g.h,g.h,[g.j]),t.ab(6144,g.b,null,[g.h]),t.ab(4608,g.f,g.k,[g.b,t.s]),t.ab(4608,g.c,g.c,[g.f]),t.ab(4608,s.Sa,s.Sa,[g.c]),t.ab(4608,s.Oa,s.Oa,[]),t.ab(4608,s.Va,s.Va,[]),t.ab(4608,s.mb,s.mb,[]),t.ab(4608,s.cb,s.cb,[t.D]),t.ab(4608,s.B,s.B,[]),t.ab(4608,s.Jb,s.Jb,[]),t.ab(4608,s.vb,s.vb,[]),t.ab(4608,f.f,f.f,[]),t.ab(4608,s.hb,s.hb,[]),t.ab(1073742336,d.c,d.c,[]),t.ab(1073742336,f.D,f.D,[]),t.ab(1073742336,f.l,f.l,[]),t.ab(1073742336,g.e,g.e,[]),t.ab(1073742336,g.d,g.d,[]),t.ab(1073742336,s.l,s.l,[]),t.ab(1073742336,s.o,s.o,[]),t.ab(1073742336,o.b,o.b,[]),t.ab(1073742336,s.Cb,s.Cb,[]),t.ab(1073742336,s.D,s.D,[]),t.ab(1073742336,s.x,s.x,[]),t.ab(1073742336,s.G,s.G,[]),t.ab(1073742336,s.I,s.I,[]),t.ab(1073742336,f.z,f.z,[]),t.ab(1073742336,s.L,s.L,[]),t.ab(1073742336,s.p,s.p,[]),t.ab(1073742336,s.Aa,s.Aa,[]),t.ab(1073742336,x.n,x.n,[[2,x.t],[2,x.m]]),t.ab(1073742336,n,n,[]),t.ab(256,g.m,"XSRF-TOKEN",[]),t.ab(256,g.n,"X-XSRF-TOKEN",[]),t.ab(1024,x.i,function(){return[[{path:"",component:m,pathMatch:"full"}]]},[])])})},d2mR:function(e,l,a){"use strict";a.d(l,"a",function(){return t}),a.d(l,"b",function(){return n}),a("wZee"),a("XIHC");var t=function(){function e(e,l){this._renderer=e,this._el=l,this.nativeElement=l.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),n=function(){}},wZee:function(e,l){var a="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},t=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,l=0,t=a.Prism={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof n?new n(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++l}),e.__id},clone:function(e,l){var a=t.util.type(e);switch(l=l||{},a){case"Object":if(l[t.util.objId(e)])return l[t.util.objId(e)];var n={};for(var i in l[t.util.objId(e)]=n,e)e.hasOwnProperty(i)&&(n[i]=t.util.clone(e[i],l));return n;case"Array":return l[t.util.objId(e)]?l[t.util.objId(e)]:(n=[],l[t.util.objId(e)]=n,e.forEach(function(e,a){n[a]=t.util.clone(e,l)}),n)}return e}},languages:{extend:function(e,l){var a=t.util.clone(t.languages[e]);for(var n in l)a[n]=l[n];return a},insertBefore:function(e,l,a,n){var i=(n=n||t.languages)[e];if(2==arguments.length){for(var u in a=arguments[1])a.hasOwnProperty(u)&&(i[u]=a[u]);return i}var r={};for(var o in i)if(i.hasOwnProperty(o)){if(o==l)for(var u in a)a.hasOwnProperty(u)&&(r[u]=a[u]);r[o]=i[o]}return t.languages.DFS(t.languages,function(l,a){a===n[e]&&l!=e&&(this[l]=r)}),n[e]=r},DFS:function(e,l,a,n){for(var i in n=n||{},e)e.hasOwnProperty(i)&&(l.call(e,i,e[i],a||i),"Object"!==t.util.type(e[i])||n[t.util.objId(e[i])]?"Array"!==t.util.type(e[i])||n[t.util.objId(e[i])]||(n[t.util.objId(e[i])]=!0,t.languages.DFS(e[i],l,i,n)):(n[t.util.objId(e[i])]=!0,t.languages.DFS(e[i],l,null,n)))}},plugins:{},highlightAll:function(e,l){t.highlightAllUnder(document,e,l)},highlightAllUnder:function(e,l,a){var n={callback:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};t.hooks.run("before-highlightall",n);for(var i,u=n.elements||e.querySelectorAll(n.selector),r=0;i=u[r++];)t.highlightElement(i,!0===l,n.callback)},highlightElement:function(l,n,i){for(var u,r,o=l;o&&!e.test(o.className);)o=o.parentNode;o&&(u=(o.className.match(e)||[,""])[1].toLowerCase(),r=t.languages[u]),l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+u,l.parentNode&&/pre/i.test((o=l.parentNode).nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+u);var s={element:l,language:u,grammar:r,code:l.textContent};if(t.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(t.hooks.run("before-highlight",s),s.element.textContent=s.code,t.hooks.run("after-highlight",s)),void t.hooks.run("complete",s);if(t.hooks.run("before-highlight",s),n&&a.Worker){var d=new Worker(t.filename);d.onmessage=function(e){s.highlightedCode=e.data,t.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),t.hooks.run("after-highlight",s),t.hooks.run("complete",s)},d.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=t.highlight(s.code,s.grammar,s.language),t.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(l),t.hooks.run("after-highlight",s),t.hooks.run("complete",s)},highlight:function(e,l,a){var i={code:e,grammar:l,language:a};return t.hooks.run("before-tokenize",i),i.tokens=t.tokenize(i.code,i.grammar),t.hooks.run("after-tokenize",i),n.stringify(t.util.encode(i.tokens),i.language)},matchGrammar:function(e,l,a,n,i,u,r){var o=t.Token;for(var s in a)if(a.hasOwnProperty(s)&&a[s]){if(s==r)return;var d=a[s];d="Array"===t.util.type(d)?d:[d];for(var m=0;m<d.length;++m){var g=d[m],c=g.inside,p=!!g.lookbehind,h=!!g.greedy,b=0,y=g.alias;if(h&&!g.pattern.global){var f=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,f+"g")}g=g.pattern||g;for(var x=n,S=i;x<l.length;S+=l[x].length,++x){var v=l[x];if(l.length>e.length)return;if(!(v instanceof o)){if(h&&x!=l.length-1){if(g.lastIndex=S,!(A=g.exec(e)))break;for(var k=A.index+(p?A[1].length:0),w=A.index+A[0].length,R=x,F=S,C=l.length;R<C&&(F<w||!l[R].type&&!l[R-1].greedy);++R)k>=(F+=l[R].length)&&(++x,S=F);if(l[x]instanceof o)continue;T=R-x,v=e.slice(S,F),A.index-=S}else{g.lastIndex=0;var A=g.exec(v),T=1}if(A){p&&(b=A[1]?A[1].length:0),w=(k=A.index+b)+(A=A[0].slice(b)).length;var j=v.slice(0,k),N=v.slice(w),I=[x,T];j&&(++x,S+=j.length,I.push(j));var L=new o(s,c?t.tokenize(A,c):A,y,A,h);if(I.push(L),N&&I.push(N),Array.prototype.splice.apply(l,I),1!=T&&t.matchGrammar(e,l,a,x,S,!0,s),u)break}else if(u)break}}}}},tokenize:function(e,l,a){var n=[e],i=l.rest;if(i){for(var u in i)l[u]=i[u];delete l.rest}return t.matchGrammar(e,n,l,0,0,!1),n},hooks:{all:{},add:function(e,l){var a=t.hooks.all;a[e]=a[e]||[],a[e].push(l)},run:function(e,l){var a=t.hooks.all[e];if(a&&a.length)for(var n,i=0;n=a[i++];)n(l)}}},n=t.Token=function(e,l,a,t,n){this.type=e,this.content=l,this.alias=a,this.length=0|(t||"").length,this.greedy=!!n};if(n.stringify=function(e,l,a){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(a){return n.stringify(a,l,e)}).join("");var i={type:e.type,content:n.stringify(e.content,l,a),tag:"span",classes:["token",e.type],attributes:{},language:l,parent:a};if(e.alias){var u="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,u)}t.hooks.run("wrap",i);var r=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(r?" "+r:"")+">"+i.content+"</"+i.tag+">"},!a.document)return a.addEventListener?(t.disableWorkerMessageHandler||a.addEventListener("message",function(e){var l=JSON.parse(e.data),n=l.language,i=l.immediateClose;a.postMessage(t.highlight(l.code,t.languages[n],n)),i&&a.close()},!1),a.Prism):a.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(t.filename=i.src,t.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(t.highlightAll):window.setTimeout(t.highlightAll,16):document.addEventListener("DOMContentLoaded",t.highlightAll))),a.Prism}();void 0!==e&&e.exports&&(e.exports=t),"undefined"!=typeof global&&(global.Prism=t),t.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),t.languages.xml=t.languages.markup,t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},t.languages.css.atrule.inside.rest=t.languages.css,t.languages.markup&&(t.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:t.languages.css,alias:"language-css",greedy:!0}}),t.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:t.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:t.languages.css}},alias:"language-css"}},t.languages.markup.tag)),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),t.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),t.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),t.languages.javascript["template-string"].inside.interpolation.inside.rest=t.languages.javascript,t.languages.markup&&t.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:t.languages.javascript,alias:"language-javascript",greedy:!0}}),t.languages.js=t.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(l){for(var a,n=l.getAttribute("data-src"),i=l,u=/\blang(?:uage)?-([\w-]+)\b/i;i&&!u.test(i.className);)i=i.parentNode;if(i&&(a=(l.className.match(u)||[,""])[1]),!a){var r=(n.match(/\.(\w+)$/)||[,""])[1];a=e[r]||r}var o=document.createElement("code");o.className="language-"+a,l.textContent="",o.textContent="Loading\u2026",l.appendChild(o);var s=new XMLHttpRequest;s.open("GET",n,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(o.textContent=s.responseText,t.highlightElement(o)):o.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},s.send(null)}),t.plugins.toolbar&&t.plugins.toolbar.registerButton("download-file",function(e){var l=e.element.parentNode;if(l&&/pre/i.test(l.nodeName)&&l.hasAttribute("data-src")&&l.hasAttribute("data-download-link")){var a=l.getAttribute("data-src"),t=document.createElement("a");return t.textContent=l.getAttribute("data-download-link-label")||"Download",t.setAttribute("download",""),t.href=a,t}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);