(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{U89g:function(e,l,t){"use strict";t.d(l,"a",function(){return a}),t.d(l,"b",function(){return i});var n=t("CcnG"),a=(t("d2mR"),t("Ip0R"),n.Qa({encapsulation:2,styles:[],data:{}}));function i(e){return n.mb(0,[],null,null)}},"WfW/":function(e,l,t){"use strict";t.r(l);var n=t("CcnG"),a=function(){},i=t("gTgE"),u=t("pMnS"),o=t("U89g"),r=t("d2mR"),c=t("O4vx"),d=t("Ip0R"),s=function(){function e(e){this.http=e,this.getHtmlAndTypeScriptCode(),this.treeLocalData={data:[{text:"Web App",expand:!0,children:[{text:"app",expand:!0,children:[{leaf:!0,text:"Application.js"}]},{text:"button",expand:!0,children:[{leaf:!0,text:"Button.js"},{leaf:!0,text:"Cycle.js"},{leaf:!0,text:"Split.js"}]},{text:"container",expand:!0,children:[{leaf:!0,text:"ButtonGroup.js"},{leaf:!0,text:"Container.js"},{leaf:!0,text:"Viewport.js",expand:!0,children:[],lazy:{"http-url":"data/treeview.json","http-method":"get"}}]},{text:"core",expand:!0,children:[{text:"dom",expand:!0,children:[{leaf:!0,text:"Element.form.js"},{leaf:!0,text:"Element.static-more.js"}]}]}]}]},this.customArrayLocalData={customArray:[{demo:"Web App",expand:!0,object:[{demo:"app",expand:!0,object:[{leaf:!0,demo:"Application.js"}]},{demo:"button",expand:!0,object:[{leaf:!0,demo:"Button.js"},{leaf:!0,demo:"Cycle.js"},{leaf:!0,demo:"Split.js"}]},{demo:"container",expand:!0,object:[{leaf:!0,demo:"ButtonGroup.js"},{leaf:!0,demo:"Container.js"},{leaf:!0,demo:"Viewport.js",expand:!0,object:[],lazy:{"http-url":"data/treeview.json","http-method":"get"}}]},{demo:"core",expand:!0,object:[{demo:"dom",expand:!0,object:[{leaf:!0,demo:"Element.form.js"},{leaf:!0,demo:"Element.static-more.js"}]}]}]}]}}return e.prototype.getNodeData=function(e){this.selectedData=e},e.prototype.getCustomNodeData=function(e){this.selectedCustomData=e},e.prototype.getHtmlAndTypeScriptCode=function(){var e,l,t=this;this.http.get("assets/data/code/data/tree/simpletree/simpletree.html",{responseType:"text"}).subscribe(function(l){e=l},function(e){},function(){t.htmlCode=e}),this.http.get("assets/data/code/data/tree/simpletree/simpletree.text",{responseType:"text"}).subscribe(function(e){l=e},function(e){},function(){t.typeScriptCode=l}),this.http.get("assets/data/componentdata/treeview.json",{responseType:"text"}).subscribe(function(e){l=e},function(e){},function(){t.dataSource=l}),this.http.get("assets/data/componentdata/treecustomview.json",{responseType:"text"}).subscribe(function(e){l=e},function(e){},function(){t.dataCustomSource=l})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e}(),m=t("t/Na"),p=n.Qa({encapsulation:2,styles:[],data:{}});function h(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),n.Ra(2,4243456,null,0,r.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.htmlCode,"html")},null)}function b(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),n.Ra(2,4243456,null,0,r.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.typeScriptCode,"typescript")},null)}function g(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),n.Ra(2,4243456,null,0,r.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.dataSource,"json")},null)}function f(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),n.Ra(2,4243456,null,0,r.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.dataCustomSource,"json")},null)}function y(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,178,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(e,l,t){var a=!0;return"document:click"===l&&(a=!1!==n.cb(e,1).onWindowClick()&&a),"document:scroll"===l&&(a=!1!==n.cb(e,1).onscroll()&&a),a},i.bc,i.k)),n.Ra(1,5357568,null,3,c.j,[],{header:[0,"header"]},null),n.ib(603979776,1,{amexioHeader:1}),n.ib(603979776,2,{amexioBody:1}),n.ib(603979776,3,{amexioFooter:1}),(e()(),n.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),n.Ra(6,114688,[[1,4]],0,c.A,[],null,null),(e()(),n.kb(-1,0,[" Simple Tree "])),(e()(),n.Sa(8,0,null,1,170,"amexio-body",[],null,null,null,i.Vb,i.e)),n.Ra(9,114688,[[2,4]],0,c.d,[],null,null),(e()(),n.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),n.kb(-1,null,["A Simple Expandable Tree component which create Tree View based on standard datasource attached."])),(e()(),n.Sa(12,16777216,null,0,166,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(e,l,t){var a=!0;return"document:click"===l&&(a=!1!==n.cb(e,13).onWindowClick()&&a),"document:scroll"===l&&(a=!1!==n.cb(e,13).onscroll()&&a),a},i.xc,i.G)),n.Ra(13,5357568,null,2,c.Q,[n.F,n.k,n.R],null,null),n.ib(603979776,4,{queryTabs:1}),n.ib(603979776,5,{queryAction:1}),(e()(),n.Sa(16,0,null,1,79,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.yc,i.H)),n.Ra(17,114688,[[4,4]],0,c.R,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),n.Sa(18,0,null,0,32,"amexio-row",[],null,null,null,i.tc,i.C)),n.Ra(19,1163264,null,0,c.M,[],null,null),(e()(),n.Sa(20,0,null,0,14,"amexio-column",[["size","6"]],[[1,"class",0]],null,null,i.dc,i.m)),n.Ra(21,114688,null,0,c.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(e()(),n.Sa(22,0,null,0,12,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(e,l,t){var a=!0;return"document:click"===l&&(a=!1!==n.cb(e,23).onWindowClick()&&a),"document:scroll"===l&&(a=!1!==n.cb(e,23).onscroll()&&a),a},i.bc,i.k)),n.Ra(23,5357568,null,3,c.j,[],{header:[0,"header"]},null),n.ib(603979776,6,{amexioHeader:1}),n.ib(603979776,7,{amexioBody:1}),n.ib(603979776,8,{amexioFooter:1}),(e()(),n.Sa(27,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),n.Ra(28,114688,[[6,4]],0,c.A,[],null,null),(e()(),n.kb(-1,0,[" Simple Tree "])),(e()(),n.Sa(30,0,null,1,4,"amexio-body",[],null,null,null,i.Vb,i.e)),n.Ra(31,114688,[[7,4]],0,c.d,[],null,null),(e()(),n.Sa(32,0,null,0,2,"amexio-treeview",[],null,[[null,"nodeClick"],["document","click"],["document","scroll"]],function(e,l,t){var a=!0,i=e.component;return"document:click"===l&&(a=!1!==n.cb(e,33).onWindowClick()&&a),"document:scroll"===l&&(a=!1!==n.cb(e,33).onscroll()&&a),"nodeClick"===l&&(a=!1!==i.getNodeData(t)&&a),a},i.zc,i.I)),n.Ra(33,4308992,null,1,c.U,[n.l,c.Pa,n.i],{data:[0,"data"],datareader:[1,"datareader"]},{nodeClick:"nodeClick"}),n.ib(335544320,9,{parentTmp:0}),(e()(),n.Sa(35,0,null,0,15,"amexio-column",[["size","6"]],[[1,"class",0]],null,null,i.dc,i.m)),n.Ra(36,114688,null,0,c.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(e()(),n.Sa(37,0,null,0,13,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(e,l,t){var a=!0;return"document:click"===l&&(a=!1!==n.cb(e,38).onWindowClick()&&a),"document:scroll"===l&&(a=!1!==n.cb(e,38).onscroll()&&a),a},i.bc,i.k)),n.Ra(38,5357568,null,3,c.j,[],{header:[0,"header"]},null),n.ib(603979776,10,{amexioHeader:1}),n.ib(603979776,11,{amexioBody:1}),n.ib(603979776,12,{amexioFooter:1}),(e()(),n.Sa(42,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),n.Ra(43,114688,[[10,4]],0,c.A,[],null,null),(e()(),n.kb(-1,0,[" Selected Data "])),(e()(),n.Sa(45,0,null,1,5,"amexio-body",[],null,null,null,i.Vb,i.e)),n.Ra(46,114688,[[11,4]],0,c.d,[],null,null),(e()(),n.Sa(47,0,null,0,3,"pre",[],null,null,null,null,null)),(e()(),n.Sa(48,0,null,null,2,"code",[],null,null,null,null,null)),(e()(),n.kb(49,null,["",""])),n.eb(0,d.g,[]),(e()(),n.Sa(51,0,null,0,44,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(e,l,t){var a=!0;return"document:click"===l&&(a=!1!==n.cb(e,52).onWindowClick()&&a),"document:scroll"===l&&(a=!1!==n.cb(e,52).onscroll()&&a),a},i.bc,i.k)),n.Ra(52,5357568,null,3,c.j,[],{header:[0,"header"]},null),n.ib(603979776,13,{amexioHeader:1}),n.ib(603979776,14,{amexioBody:1}),n.ib(603979776,15,{amexioFooter:1}),(e()(),n.Sa(56,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),n.Ra(57,114688,[[13,4]],0,c.A,[],null,null),(e()(),n.kb(-1,0,[" Dynamically Changes Tree Data "])),(e()(),n.Sa(59,0,null,1,36,"amexio-body",[],null,null,null,i.Vb,i.e)),n.Ra(60,114688,[[14,4]],0,c.d,[],null,null),(e()(),n.Sa(61,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),n.kb(-1,null,[" By Default Tree consumes standard JSON structure i.e to display node/leaf \u201cText\u201d Key should be present in JSON && array with \u201cChildren\u201d Key present in JSON. Now with 5.2.x release Amexio-tree component can consume user defined data structure and pass what is key for node/leaf and what is key for children array. "])),(e()(),n.Sa(63,0,null,0,32,"amexio-row",[],null,null,null,i.tc,i.C)),n.Ra(64,1163264,null,0,c.M,[],null,null),(e()(),n.Sa(65,0,null,0,14,"amexio-column",[["size","6"]],[[1,"class",0]],null,null,i.dc,i.m)),n.Ra(66,114688,null,0,c.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(e()(),n.Sa(67,0,null,0,12,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(e,l,t){var a=!0;return"document:click"===l&&(a=!1!==n.cb(e,68).onWindowClick()&&a),"document:scroll"===l&&(a=!1!==n.cb(e,68).onscroll()&&a),a},i.bc,i.k)),n.Ra(68,5357568,null,3,c.j,[],{header:[0,"header"]},null),n.ib(603979776,16,{amexioHeader:1}),n.ib(603979776,17,{amexioBody:1}),n.ib(603979776,18,{amexioFooter:1}),(e()(),n.Sa(72,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),n.Ra(73,114688,[[16,4]],0,c.A,[],null,null),(e()(),n.kb(-1,0,[" Tree with user define keys "])),(e()(),n.Sa(75,0,null,1,4,"amexio-body",[],null,null,null,i.Vb,i.e)),n.Ra(76,114688,[[17,4]],0,c.d,[],null,null),(e()(),n.Sa(77,0,null,0,2,"amexio-treeview",[],null,[[null,"nodeClick"],["document","click"],["document","scroll"]],function(e,l,t){var a=!0,i=e.component;return"document:click"===l&&(a=!1!==n.cb(e,78).onWindowClick()&&a),"document:scroll"===l&&(a=!1!==n.cb(e,78).onscroll()&&a),"nodeClick"===l&&(a=!1!==i.getCustomNodeData(t)&&a),a},i.zc,i.I)),n.Ra(78,4308992,null,1,c.U,[n.l,c.Pa,n.i],{data:[0,"data"],datareader:[1,"datareader"],displaykey:[2,"displaykey"],childarraykey:[3,"childarraykey"]},{nodeClick:"nodeClick"}),n.ib(335544320,19,{parentTmp:0}),(e()(),n.Sa(80,0,null,0,15,"amexio-column",[["size","6"]],[[1,"class",0]],null,null,i.dc,i.m)),n.Ra(81,114688,null,0,c.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(e()(),n.Sa(82,0,null,0,13,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(e,l,t){var a=!0;return"document:click"===l&&(a=!1!==n.cb(e,83).onWindowClick()&&a),"document:scroll"===l&&(a=!1!==n.cb(e,83).onscroll()&&a),a},i.bc,i.k)),n.Ra(83,5357568,null,3,c.j,[],{header:[0,"header"]},null),n.ib(603979776,20,{amexioHeader:1}),n.ib(603979776,21,{amexioBody:1}),n.ib(603979776,22,{amexioFooter:1}),(e()(),n.Sa(87,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),n.Ra(88,114688,[[20,4]],0,c.A,[],null,null),(e()(),n.kb(-1,0,[" Selected Data "])),(e()(),n.Sa(90,0,null,1,5,"amexio-body",[],null,null,null,i.Vb,i.e)),n.Ra(91,114688,[[21,4]],0,c.d,[],null,null),(e()(),n.Sa(92,0,null,0,3,"pre",[],null,null,null,null,null)),(e()(),n.Sa(93,0,null,null,2,"code",[],null,null,null,null,null)),(e()(),n.kb(94,null,["",""])),n.eb(0,d.g,[]),(e()(),n.Sa(96,0,null,1,55,"amexio-tab",[["title","API Reference"]],null,null,null,i.yc,i.H)),n.Ra(97,114688,[[4,4]],0,c.R,[],{title:[0,"title"]},null),(e()(),n.Sa(98,0,null,0,22,"amexio-datagrid",[["title","Properties<amexio-treeview>"]],null,[["document","scroll"],["document","click"]],function(e,l,t){var a=!0;return"document:scroll"===l&&(a=!1!==n.cb(e,99).onscroll()&&a),"document:click"===l&&(a=!1!==n.cb(e,99).onclick()&&a),a},i.Od,i.xb)),n.Ra(99,1163264,null,1,c.gc,[n.l,c.Pa,n.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),n.ib(603979776,23,{columnRef:1}),(e()(),n.Sa(101,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),n.Ra(102,49152,[[23,4]],2,c.hc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,24,{headerTemplate:0}),n.ib(335544320,25,{bodyTemplate:0}),(e()(),n.Sa(105,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),n.Ra(106,49152,[[23,4]],2,c.hc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,26,{headerTemplate:0}),n.ib(335544320,27,{bodyTemplate:0}),(e()(),n.Sa(109,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),n.Ra(110,49152,[[23,4]],2,c.hc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,28,{headerTemplate:0}),n.ib(335544320,29,{bodyTemplate:0}),(e()(),n.Sa(113,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),n.Ra(114,49152,[[23,4]],2,c.hc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,30,{headerTemplate:0}),n.ib(335544320,31,{bodyTemplate:0}),(e()(),n.Sa(117,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),n.Ra(118,49152,[[23,4]],2,c.hc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,32,{headerTemplate:0}),n.ib(335544320,33,{bodyTemplate:0}),(e()(),n.Sa(121,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),n.Sa(122,0,null,0,14,"amexio-datagrid",[["title","Events"]],null,[["document","scroll"],["document","click"]],function(e,l,t){var a=!0;return"document:scroll"===l&&(a=!1!==n.cb(e,123).onscroll()&&a),"document:click"===l&&(a=!1!==n.cb(e,123).onclick()&&a),a},i.Od,i.xb)),n.Ra(123,1163264,null,1,c.gc,[n.l,c.Pa,n.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),n.ib(603979776,34,{columnRef:1}),(e()(),n.Sa(125,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),n.Ra(126,49152,[[34,4]],2,c.hc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,35,{headerTemplate:0}),n.ib(335544320,36,{bodyTemplate:0}),(e()(),n.Sa(129,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),n.Ra(130,49152,[[34,4]],2,c.hc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,37,{headerTemplate:0}),n.ib(335544320,38,{bodyTemplate:0}),(e()(),n.Sa(133,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),n.Ra(134,49152,[[34,4]],2,c.hc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,39,{headerTemplate:0}),n.ib(335544320,40,{bodyTemplate:0}),(e()(),n.Sa(137,0,null,0,14,"amexio-datagrid",[["title","Methods"]],null,[["document","scroll"],["document","click"]],function(e,l,t){var a=!0;return"document:scroll"===l&&(a=!1!==n.cb(e,138).onscroll()&&a),"document:click"===l&&(a=!1!==n.cb(e,138).onclick()&&a),a},i.Od,i.xb)),n.Ra(138,1163264,null,1,c.gc,[n.l,c.Pa,n.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),n.ib(603979776,41,{columnRef:1}),(e()(),n.Sa(140,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),n.Ra(141,49152,[[41,4]],2,c.hc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,42,{headerTemplate:0}),n.ib(335544320,43,{bodyTemplate:0}),(e()(),n.Sa(144,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),n.Ra(145,49152,[[41,4]],2,c.hc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,44,{headerTemplate:0}),n.ib(335544320,45,{bodyTemplate:0}),(e()(),n.Sa(148,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),n.Ra(149,49152,[[41,4]],2,c.hc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,46,{headerTemplate:0}),n.ib(335544320,47,{bodyTemplate:0}),(e()(),n.Sa(152,0,null,1,21,"amexio-tab",[["title","Source"]],null,null,null,i.yc,i.H)),n.Ra(153,114688,[[4,4]],0,c.R,[],{title:[0,"title"]},null),(e()(),n.Sa(154,0,null,0,19,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),n.Sa(155,0,null,null,18,"amexio-vertical-tab-view",[],null,null,null,i.Ac,i.J)),n.Ra(156,5357568,null,1,c.V,[n.F],null,null),n.ib(603979776,48,{queryTabs:1}),(e()(),n.Sa(158,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.yc,i.H)),n.Ra(159,114688,[[48,4]],0,c.R,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),n.Ja(16777216,null,0,1,null,h)),n.Ra(161,16384,null,0,d.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(e()(),n.Sa(162,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.yc,i.H)),n.Ra(163,114688,[[48,4]],0,c.R,[],{title:[0,"title"]},null),(e()(),n.Ja(16777216,null,0,1,null,b)),n.Ra(165,16384,null,0,d.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(e()(),n.Sa(166,0,null,0,3,"amexio-tab",[["title","DataSource"]],null,null,null,i.yc,i.H)),n.Ra(167,114688,[[48,4]],0,c.R,[],{title:[0,"title"]},null),(e()(),n.Ja(16777216,null,0,1,null,g)),n.Ra(169,16384,null,0,d.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(e()(),n.Sa(170,0,null,0,3,"amexio-tab",[["title","DataCustomSource"]],null,null,null,i.yc,i.H)),n.Ra(171,114688,[[48,4]],0,c.R,[],{title:[0,"title"]},null),(e()(),n.Ja(16777216,null,0,1,null,f)),n.Ra(173,16384,null,0,d.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(e()(),n.Sa(174,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.yc,i.H)),n.Ra(175,114688,[[4,4]],0,c.R,[],{title:[0,"title"]},null),(e()(),n.Sa(176,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),n.kb(-1,null,["Amexio Sandbox"])),(e()(),n.Sa(178,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-simple-tree?embed=1&file=app/tree/simpletree/simpletree.demo.html&view=editor"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,l){var t=l.component;e(l,1,0,"true"),e(l,6,0),e(l,9,0),e(l,13,0),e(l,17,0,"Demo","true"),e(l,19,0),e(l,21,0,!0,"6"),e(l,23,0,!0),e(l,28,0),e(l,31,0),e(l,33,0,t.treeLocalData,"data"),e(l,36,0,!0,"6"),e(l,38,0,!0),e(l,43,0),e(l,46,0),e(l,52,0,"true"),e(l,57,0),e(l,60,0),e(l,64,0),e(l,66,0,!0,"6"),e(l,68,0,!0),e(l,73,0),e(l,76,0),e(l,78,0,t.customArrayLocalData,"customArray","demo","object"),e(l,81,0,!0,"6"),e(l,83,0,!0),e(l,88,0),e(l,91,0),e(l,97,0,"API Reference"),e(l,99,0,"Properties<amexio-treeview>","assets/apireference/data/tree.json","get","properties",!1,!1),e(l,102,0,"Name","name",!1,"string",24),e(l,106,0,"Version","version",!1,"string",15),e(l,110,0,"Type","type",!1,"string",10),e(l,114,0,"Default","default",!1,"string",10),e(l,118,0,"Description","description",!1,"string",65),e(l,123,0,"Events","assets/apireference/data/tree.json","get","events",!1),e(l,126,0,"Name","name",!1,"string",20),e(l,130,0,"Version","version",!1,"string",15),e(l,134,0,"Description","description",!1,"string",65),e(l,138,0,"Methods","assets/apireference/data/tree.json","get","methods",!1),e(l,141,0,"Name","name",!1,"string",20),e(l,145,0,"Version","version",!1,"string",15),e(l,149,0,"Description","description",!1,"string",65),e(l,153,0,"Source"),e(l,156,0),e(l,159,0,"HTML",!0),e(l,161,0,t.htmlCode),e(l,163,0,"Type Script"),e(l,165,0,t.typeScriptCode),e(l,167,0,"DataSource"),e(l,169,0,t.dataSource),e(l,171,0,"DataCustomSource"),e(l,173,0,t.dataCustomSource),e(l,175,0,"Live")},function(e,l){var t=l.component;e(l,20,0,n.cb(l,21).role),e(l,35,0,n.cb(l,36).role),e(l,49,0,n.lb(l,49,0,n.cb(l,50).transform(t.selectedData))),e(l,65,0,n.cb(l,66).role),e(l,80,0,n.cb(l,81).role),e(l,94,0,n.lb(l,94,0,n.cb(l,95).transform(t.selectedCustomData)))})}var x=n.Oa("simpletree-demo",s,function(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,1,"simpletree-demo",[],null,null,null,y,p)),n.Ra(1,49152,null,0,s,[m.c],null,null)],null,null)},{},{},[]),k=t("gIcY"),S=t("ZYCi");t.d(l,"SimpleTreeDemoModuleNgFactory",function(){return w});var w=n.Pa(a,[],function(e){return n.Za([n.ab(512,n.k,n.Ea,[[8,[i.a,u.a,x]],[3,n.k],n.z]),n.ab(4608,d.o,d.n,[n.w,[2,d.x]]),n.ab(4608,k.w,k.w,[]),n.ab(4608,m.i,m.o,[d.d,n.D,m.m]),n.ab(4608,m.p,m.p,[m.i,m.n]),n.ab(5120,m.a,function(e){return[e]},[m.p]),n.ab(4608,m.l,m.l,[]),n.ab(6144,m.j,null,[m.l]),n.ab(4608,m.h,m.h,[m.j]),n.ab(6144,m.b,null,[m.h]),n.ab(4608,m.f,m.k,[m.b,n.s]),n.ab(4608,m.c,m.c,[m.f]),n.ab(4608,c.Pa,c.Pa,[m.c]),n.ab(4608,c.Za,c.Za,[n.D]),n.ab(4608,c.gb,c.gb,[]),n.ab(4608,c.z,c.z,[]),n.ab(4608,c.yb,c.yb,[]),n.ab(1073742336,d.c,d.c,[]),n.ab(1073742336,k.t,k.t,[]),n.ab(1073742336,k.e,k.e,[]),n.ab(1073742336,m.e,m.e,[]),n.ab(1073742336,m.d,m.d,[]),n.ab(1073742336,r.b,r.b,[]),n.ab(1073742336,c.B,c.B,[]),n.ab(1073742336,c.w,c.w,[]),n.ab(1073742336,c.E,c.E,[]),n.ab(1073742336,c.G,c.G,[]),n.ab(1073742336,c.J,c.J,[]),n.ab(1073742336,c.o,c.o,[]),n.ab(1073742336,c.X,c.X,[]),n.ab(1073742336,S.n,S.n,[[2,S.t],[2,S.m]]),n.ab(1073742336,a,a,[]),n.ab(256,m.m,"XSRF-TOKEN",[]),n.ab(256,m.n,"X-XSRF-TOKEN",[]),n.ab(1024,S.i,function(){return[[{path:"",component:s,pathMatch:"full"}]]},[])])})},XIHC:function(e,l){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,l,t){"use strict";t.d(l,"a",function(){return n}),t.d(l,"b",function(){return a}),t("wZee"),t("XIHC");var n=function(){function e(e,l){this._renderer=e,this._el=l,this.nativeElement=l.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),a=function(){}},wZee:function(e,l){var t="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},n=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,l=0,n=t.Prism={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++l}),e.__id},clone:function(e,l){var t=n.util.type(e);switch(l=l||{},t){case"Object":if(l[n.util.objId(e)])return l[n.util.objId(e)];var a={};for(var i in l[n.util.objId(e)]=a,e)e.hasOwnProperty(i)&&(a[i]=n.util.clone(e[i],l));return a;case"Array":return l[n.util.objId(e)]?l[n.util.objId(e)]:(a=[],l[n.util.objId(e)]=a,e.forEach(function(e,t){a[t]=n.util.clone(e,l)}),a)}return e}},languages:{extend:function(e,l){var t=n.util.clone(n.languages[e]);for(var a in l)t[a]=l[a];return t},insertBefore:function(e,l,t,a){var i=(a=a||n.languages)[e];if(2==arguments.length){for(var u in t=arguments[1])t.hasOwnProperty(u)&&(i[u]=t[u]);return i}var o={};for(var r in i)if(i.hasOwnProperty(r)){if(r==l)for(var u in t)t.hasOwnProperty(u)&&(o[u]=t[u]);o[r]=i[r]}return n.languages.DFS(n.languages,function(l,t){t===a[e]&&l!=e&&(this[l]=o)}),a[e]=o},DFS:function(e,l,t,a){for(var i in a=a||{},e)e.hasOwnProperty(i)&&(l.call(e,i,e[i],t||i),"Object"!==n.util.type(e[i])||a[n.util.objId(e[i])]?"Array"!==n.util.type(e[i])||a[n.util.objId(e[i])]||(a[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],l,i,a)):(a[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],l,null,a)))}},plugins:{},highlightAll:function(e,l){n.highlightAllUnder(document,e,l)},highlightAllUnder:function(e,l,t){var a={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",a);for(var i,u=a.elements||e.querySelectorAll(a.selector),o=0;i=u[o++];)n.highlightElement(i,!0===l,a.callback)},highlightElement:function(l,a,i){for(var u,o,r=l;r&&!e.test(r.className);)r=r.parentNode;r&&(u=(r.className.match(e)||[,""])[1].toLowerCase(),o=n.languages[u]),l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+u,l.parentNode&&/pre/i.test((r=l.parentNode).nodeName)&&(r.className=r.className.replace(e,"").replace(/\s+/g," ")+" language-"+u);var c={element:l,language:u,grammar:o,code:l.textContent};if(n.hooks.run("before-sanity-check",c),!c.code||!c.grammar)return c.code&&(n.hooks.run("before-highlight",c),c.element.textContent=c.code,n.hooks.run("after-highlight",c)),void n.hooks.run("complete",c);if(n.hooks.run("before-highlight",c),a&&t.Worker){var d=new Worker(n.filename);d.onmessage=function(e){c.highlightedCode=e.data,n.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,i&&i.call(c.element),n.hooks.run("after-highlight",c),n.hooks.run("complete",c)},d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=n.highlight(c.code,c.grammar,c.language),n.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,i&&i.call(l),n.hooks.run("after-highlight",c),n.hooks.run("complete",c)},highlight:function(e,l,t){var i={code:e,grammar:l,language:t};return n.hooks.run("before-tokenize",i),i.tokens=n.tokenize(i.code,i.grammar),n.hooks.run("after-tokenize",i),a.stringify(n.util.encode(i.tokens),i.language)},matchGrammar:function(e,l,t,a,i,u,o){var r=n.Token;for(var c in t)if(t.hasOwnProperty(c)&&t[c]){if(c==o)return;var d=t[c];d="Array"===n.util.type(d)?d:[d];for(var s=0;s<d.length;++s){var m=d[s],p=m.inside,h=!!m.lookbehind,b=!!m.greedy,g=0,f=m.alias;if(b&&!m.pattern.global){var y=m.pattern.toString().match(/[imuy]*$/)[0];m.pattern=RegExp(m.pattern.source,y+"g")}m=m.pattern||m;for(var x=a,k=i;x<l.length;k+=l[x].length,++x){var S=l[x];if(l.length>e.length)return;if(!(S instanceof r)){if(b&&x!=l.length-1){if(m.lastIndex=k,!(A=m.exec(e)))break;for(var w=A.index+(h?A[1].length:0),v=A.index+A[0].length,R=x,C=k,j=l.length;R<j&&(C<v||!l[R].type&&!l[R-1].greedy);++R)w>=(C+=l[R].length)&&(++x,k=C);if(l[x]instanceof r)continue;T=R-x,S=e.slice(k,C),A.index-=k}else{m.lastIndex=0;var A=m.exec(S),T=1}if(A){h&&(g=A[1]?A[1].length:0),v=(w=A.index+g)+(A=A[0].slice(g)).length;var F=S.slice(0,w),P=S.slice(v),N=[x,T];F&&(++x,k+=F.length,N.push(F));var D=new r(c,p?n.tokenize(A,p):A,f,A,b);if(N.push(D),P&&N.push(P),Array.prototype.splice.apply(l,N),1!=T&&n.matchGrammar(e,l,t,x,k,!0,c),u)break}else if(u)break}}}}},tokenize:function(e,l,t){var a=[e],i=l.rest;if(i){for(var u in i)l[u]=i[u];delete l.rest}return n.matchGrammar(e,a,l,0,0,!1),a},hooks:{all:{},add:function(e,l){var t=n.hooks.all;t[e]=t[e]||[],t[e].push(l)},run:function(e,l){var t=n.hooks.all[e];if(t&&t.length)for(var a,i=0;a=t[i++];)a(l)}}},a=n.Token=function(e,l,t,n,a){this.type=e,this.content=l,this.alias=t,this.length=0|(n||"").length,this.greedy=!!a};if(a.stringify=function(e,l,t){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(t){return a.stringify(t,l,e)}).join("");var i={type:e.type,content:a.stringify(e.content,l,t),tag:"span",classes:["token",e.type],attributes:{},language:l,parent:t};if(e.alias){var u="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,u)}n.hooks.run("wrap",i);var o=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(o?" "+o:"")+">"+i.content+"</"+i.tag+">"},!t.document)return t.addEventListener?(n.disableWorkerMessageHandler||t.addEventListener("message",function(e){var l=JSON.parse(e.data),a=l.language,i=l.immediateClose;t.postMessage(n.highlight(l.code,n.languages[a],a)),i&&t.close()},!1),t.Prism):t.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(n.filename=i.src,n.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),t.Prism}();void 0!==e&&e.exports&&(e.exports=n),"undefined"!=typeof global&&(global.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),n.languages.xml=n.languages.markup,n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},n.languages.css.atrule.inside.rest=n.languages.css,n.languages.markup&&(n.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:n.languages.css,alias:"language-css",greedy:!0}}),n.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:n.languages.css}},alias:"language-css"}},n.languages.markup.tag)),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),n.languages.javascript["template-string"].inside.interpolation.inside.rest=n.languages.javascript,n.languages.markup&&n.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:n.languages.javascript,alias:"language-javascript",greedy:!0}}),n.languages.js=n.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(l){for(var t,a=l.getAttribute("data-src"),i=l,u=/\blang(?:uage)?-([\w-]+)\b/i;i&&!u.test(i.className);)i=i.parentNode;if(i&&(t=(l.className.match(u)||[,""])[1]),!t){var o=(a.match(/\.(\w+)$/)||[,""])[1];t=e[o]||o}var r=document.createElement("code");r.className="language-"+t,l.textContent="",r.textContent="Loading\u2026",l.appendChild(r);var c=new XMLHttpRequest;c.open("GET",a,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(r.textContent=c.responseText,n.highlightElement(r)):r.textContent=c.status>=400?"\u2716 Error "+c.status+" while fetching file: "+c.statusText:"\u2716 Error: File does not exist or is empty")},c.send(null)}),n.plugins.toolbar&&n.plugins.toolbar.registerButton("download-file",function(e){var l=e.element.parentNode;if(l&&/pre/i.test(l.nodeName)&&l.hasAttribute("data-src")&&l.hasAttribute("data-download-link")){var t=l.getAttribute("data-src"),n=document.createElement("a");return n.textContent=l.getAttribute("data-download-link-label")||"Download",n.setAttribute("download",""),n.href=t,n}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);