(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{RxMr:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),a=function(){},u=t("gTgE"),i=t("pMnS"),o=t("U89g"),d=t("d2mR"),r=t("O4vx"),c=t("thSD"),b=t("Jovw"),h=t("Ip0R"),s=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.ngOnInit=function(){this.userDefineColors=["#4040a1","#e06377"," #7e4a35","#6b5b95","#feb236","#d64161","#ff7b25"],this.barData=[["year","production"],["2011",300],["2012",500],["2013",700],["2014",400],["2015",600],["2016",500],["2017",200]]},l.prototype.onDefaultLegendClick=function(l){this.sourceData=l},l.prototype.onDefaultLegendClick1=function(l){this.sourceData1=l},l.prototype.onDefaultChartClick1=function(l){this.sourceData=l},l.prototype.onDefaultChartClick2=function(l){this.sourceData1=l},l.prototype.onDefaultChartClick=function(l){this.userDataSource=l},l.prototype.onUserDefineLegendClick=function(l){this.userDataSource=l},l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,t=this;this.http.get("assets/data/code/charts/D3Charts/d3horizontalbarchart/d3chart.html",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){t.htmlCode=l}),this.http.get("assets/data/code/charts/D3Charts/d3horizontalbarchart/d3chart.text",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){t.typeScriptCode=n}),this.http.get("assets/data/code/charts/D3Charts/d3horizontalbarchart/datasource.json",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){t.dataSourceCode=n}),this.http.get("assets/data/code/charts/D3Charts/d3barchart/usersource.json",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){t.userDataSourceCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),m=t("t/Na"),p=e.Qa({encapsulation:2,styles:[],data:{}});function x(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),e.Ra(2,4243456,null,0,d.a,[e.F,e.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.htmlCode,"html")},null)}function f(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),e.Ra(2,4243456,null,0,d.a,[e.F,e.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.typeScriptCode,"typescript")},null)}function y(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),e.Ra(2,4243456,null,0,d.a,[e.F,e.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.dataSourceCode,"json")},null)}function g(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,129,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(l,n,t){var a=!0;return"document:click"===n&&(a=!1!==e.cb(l,1).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==e.cb(l,1).onscroll()&&a),a},u.bc,u.k)),e.Ra(1,5357568,null,3,r.j,[],{header:[0,"header"]},null),e.ib(603979776,1,{amexioHeader:1}),e.ib(603979776,2,{amexioBody:1}),e.ib(603979776,3,{amexioFooter:1}),(l()(),e.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,u.mc,u.v)),e.Ra(6,114688,[[1,4]],0,r.A,[],null,null),(l()(),e.kb(-1,0,[" D3 Horizontal bar Chart "])),(l()(),e.Sa(8,0,null,1,121,"amexio-body",[],null,null,null,u.Vb,u.e)),e.Ra(9,114688,[[2,4]],0,r.d,[],null,null),(l()(),e.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.kb(-1,null,["An D3 Horizontal bar chart that is rendered within the browser using SVG .Displays tips when hovering over points."])),(l()(),e.Sa(12,16777216,null,0,117,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,n,t){var a=!0;return"document:click"===n&&(a=!1!==e.cb(l,13).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==e.cb(l,13).onscroll()&&a),a},u.xc,u.G)),e.Ra(13,5357568,null,2,r.Q,[e.F,e.k,e.R],null,null),e.ib(603979776,4,{queryTabs:1}),e.ib(603979776,5,{queryAction:1}),(l()(),e.Sa(16,0,null,1,33,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,u.yc,u.H)),e.Ra(17,114688,[[4,4]],0,r.R,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e.Sa(18,0,null,0,31,"amexio-row",[],null,null,null,u.tc,u.C)),e.Ra(19,1163264,null,0,r.M,[],null,null),(l()(),e.Sa(20,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),e.Ra(21,114688,null,0,r.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),e.Sa(22,0,null,0,11,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(l,n,t){var a=!0;return"document:click"===n&&(a=!1!==e.cb(l,23).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==e.cb(l,23).onscroll()&&a),a},u.bc,u.k)),e.Ra(23,5357568,null,3,r.j,[],{header:[0,"header"],show:[1,"show"]},null),e.ib(603979776,6,{amexioHeader:1}),e.ib(603979776,7,{amexioBody:1}),e.ib(603979776,8,{amexioFooter:1}),(l()(),e.Sa(27,0,null,0,2,"amexio-header",[],null,null,null,u.mc,u.v)),e.Ra(28,114688,[[6,4]],0,r.A,[],null,null),(l()(),e.kb(-1,0,[" Horizontal D3-bar "])),(l()(),e.Sa(30,0,null,1,3,"amexio-body",[],null,null,null,u.Vb,u.e)),e.Ra(31,114688,[[7,4]],0,r.d,[],null,null),(l()(),e.Sa(32,0,null,0,1,"amexio-d3-chart-bar",[],null,[[null,"onChartClick"],[null,"onLegendClick"]],function(l,n,t){var e=!0,a=l.component;return"onChartClick"===n&&(e=!1!==a.onDefaultChartClick2(t)&&e),"onLegendClick"===n&&(e=!1!==a.onDefaultLegendClick1(t)&&e),e},c.n,c.a)),e.Ra(33,114688,null,0,b.b,[b.i,e.i],{data:[0,"data"],title:[1,"title"],horizontal:[2,"horizontal"]},{onLegendClick:"onLegendClick",onChartClick:"onChartClick"}),(l()(),e.Sa(34,0,null,0,15,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),e.Ra(35,114688,null,0,r.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),e.Sa(36,0,null,0,13,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(l,n,t){var a=!0;return"document:click"===n&&(a=!1!==e.cb(l,37).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==e.cb(l,37).onscroll()&&a),a},u.bc,u.k)),e.Ra(37,5357568,null,3,r.j,[],{header:[0,"header"]},null),e.ib(603979776,9,{amexioHeader:1}),e.ib(603979776,10,{amexioBody:1}),e.ib(603979776,11,{amexioFooter:1}),(l()(),e.Sa(41,0,null,0,2,"amexio-header",[],null,null,null,u.mc,u.v)),e.Ra(42,114688,[[9,4]],0,r.A,[],null,null),(l()(),e.kb(-1,0,[" Click On Legend/ Click On Chart "])),(l()(),e.Sa(44,0,null,1,5,"amexio-body",[],null,null,null,u.Vb,u.e)),e.Ra(45,114688,[[10,4]],0,r.d,[],null,null),(l()(),e.Sa(46,0,null,0,3,"pre",[],null,null,null,null,null)),(l()(),e.Sa(47,0,null,null,2,"code",[],null,null,null,null,null)),(l()(),e.kb(48,null,["",""])),e.eb(0,h.g,[]),(l()(),e.Sa(50,0,null,1,56,"amexio-tab",[["title","API Reference"]],null,null,null,u.yc,u.H)),e.Ra(51,114688,[[4,4]],0,r.R,[],{title:[0,"title"]},null),(l()(),e.Sa(52,0,null,0,22,"amexio-datagrid",[["title","D3-Bar-Chart Properties<amexio-d3-chart-bar>"]],null,[["document","scroll"],["document","click"]],function(l,n,t){var a=!0;return"document:scroll"===n&&(a=!1!==e.cb(l,53).onscroll()&&a),"document:click"===n&&(a=!1!==e.cb(l,53).onclick()&&a),a},u.Od,u.xb)),e.Ra(53,1163264,null,1,r.gc,[e.l,r.Pa,e.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e.ib(603979776,12,{columnRef:1}),(l()(),e.Sa(55,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(56,49152,[[12,4]],2,r.hc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,13,{headerTemplate:0}),e.ib(335544320,14,{bodyTemplate:0}),(l()(),e.Sa(59,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(60,49152,[[12,4]],2,r.hc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,15,{headerTemplate:0}),e.ib(335544320,16,{bodyTemplate:0}),(l()(),e.Sa(63,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(64,49152,[[12,4]],2,r.hc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,17,{headerTemplate:0}),e.ib(335544320,18,{bodyTemplate:0}),(l()(),e.Sa(67,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(68,49152,[[12,4]],2,r.hc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,19,{headerTemplate:0}),e.ib(335544320,20,{bodyTemplate:0}),(l()(),e.Sa(71,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(72,49152,[[12,4]],2,r.hc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,21,{headerTemplate:0}),e.ib(335544320,22,{bodyTemplate:0}),(l()(),e.Sa(75,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(76,0,null,0,14,"amexio-datagrid",[["title","Legend<amexio-d3-chart-bar>"]],null,[["document","scroll"],["document","click"]],function(l,n,t){var a=!0;return"document:scroll"===n&&(a=!1!==e.cb(l,77).onscroll()&&a),"document:click"===n&&(a=!1!==e.cb(l,77).onclick()&&a),a},u.Od,u.xb)),e.Ra(77,1163264,null,1,r.gc,[e.l,r.Pa,e.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e.ib(603979776,23,{columnRef:1}),(l()(),e.Sa(79,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(80,49152,[[23,4]],2,r.hc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,24,{headerTemplate:0}),e.ib(335544320,25,{bodyTemplate:0}),(l()(),e.Sa(83,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(84,49152,[[23,4]],2,r.hc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,26,{headerTemplate:0}),e.ib(335544320,27,{bodyTemplate:0}),(l()(),e.Sa(87,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(88,49152,[[23,4]],2,r.hc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,28,{headerTemplate:0}),e.ib(335544320,29,{bodyTemplate:0}),(l()(),e.Sa(91,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(92,0,null,0,14,"amexio-datagrid",[["title","Chart Event <amexio-d3-chart-bar>"]],null,[["document","scroll"],["document","click"]],function(l,n,t){var a=!0;return"document:scroll"===n&&(a=!1!==e.cb(l,93).onscroll()&&a),"document:click"===n&&(a=!1!==e.cb(l,93).onclick()&&a),a},u.Od,u.xb)),e.Ra(93,1163264,null,1,r.gc,[e.l,r.Pa,e.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e.ib(603979776,30,{columnRef:1}),(l()(),e.Sa(95,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(96,49152,[[30,4]],2,r.hc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,31,{headerTemplate:0}),e.ib(335544320,32,{bodyTemplate:0}),(l()(),e.Sa(99,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(100,49152,[[30,4]],2,r.hc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,33,{headerTemplate:0}),e.ib(335544320,34,{bodyTemplate:0}),(l()(),e.Sa(103,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(104,49152,[[30,4]],2,r.hc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,35,{headerTemplate:0}),e.ib(335544320,36,{bodyTemplate:0}),(l()(),e.Sa(107,0,null,1,17,"amexio-tab",[["title","Source"]],null,null,null,u.yc,u.H)),e.Ra(108,114688,[[4,4]],0,r.R,[],{title:[0,"title"]},null),(l()(),e.Sa(109,0,null,0,15,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),e.Sa(110,0,null,null,14,"amexio-vertical-tab-view",[],null,null,null,u.Ac,u.J)),e.Ra(111,5357568,null,1,r.V,[e.F],null,null),e.ib(603979776,37,{queryTabs:1}),(l()(),e.Sa(113,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,u.yc,u.H)),e.Ra(114,114688,[[37,4]],0,r.R,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e.Ja(16777216,null,0,1,null,x)),e.Ra(116,16384,null,0,h.m,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.Sa(117,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,u.yc,u.H)),e.Ra(118,114688,[[37,4]],0,r.R,[],{title:[0,"title"]},null),(l()(),e.Ja(16777216,null,0,1,null,f)),e.Ra(120,16384,null,0,h.m,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.Sa(121,0,null,0,3,"amexio-tab",[["title","Data Source"]],null,null,null,u.yc,u.H)),e.Ra(122,114688,[[37,4]],0,r.R,[],{title:[0,"title"]},null),(l()(),e.Ja(16777216,null,0,1,null,y)),e.Ra(124,16384,null,0,h.m,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.Sa(125,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,u.yc,u.H)),e.Ra(126,114688,[[4,4]],0,r.R,[],{title:[0,"title"]},null),(l()(),e.Sa(127,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),e.kb(-1,null,["Amexio Sandbox"])),(l()(),e.Sa(129,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-d3-chart-bar?embed=1&file=src/app/d3chart/d3barchart/d3barchart.demo.component.html&view=editor"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(l,n){var t=n.component;l(n,1,0,"true"),l(n,6,0),l(n,9,0),l(n,13,0),l(n,17,0,"Demo","true"),l(n,19,0),l(n,21,0,!0,8),l(n,23,0,!0,"true"),l(n,28,0),l(n,31,0),l(n,33,0,t.barData,"Coffee Production Analysis",!0),l(n,35,0,!0,4),l(n,37,0,"true"),l(n,42,0),l(n,45,0),l(n,51,0,"API Reference"),l(n,53,0,"D3-Bar-Chart Properties<amexio-d3-chart-bar>","assets/apireference/charts/d3charts/d3barchart.json","get","properties",!1,!1),l(n,56,0,"Name","name",!1,"string",15),l(n,60,0,"version","version",!1,"string",15),l(n,64,0,"Type","type",!1,"string",15),l(n,68,0,"Default","default",!1,"string",15),l(n,72,0,"Description","description",!1,"string",40),l(n,77,0,"Legend<amexio-d3-chart-bar>","assets/apireference/charts/d3charts/d3barchart.json","get","legend",!1,!1),l(n,80,0,"Name","name",!1,"string",15),l(n,84,0,"version","version",!1,"string",15),l(n,88,0,"Description","description",!1,"string",55),l(n,93,0,"Chart Event <amexio-d3-chart-bar>","assets/apireference/charts/d3charts/d3barchart.json","get","chartevent",!1,!1),l(n,96,0,"Name","name",!1,"string",15),l(n,100,0,"version","version",!1,"string",15),l(n,104,0,"Description","description",!1,"string",55),l(n,108,0,"Source"),l(n,111,0),l(n,114,0,"HTML",!0),l(n,116,0,t.htmlCode),l(n,118,0,"Type Script"),l(n,120,0,t.typeScriptCode),l(n,122,0,"Data Source"),l(n,124,0,t.dataSourceCode),l(n,126,0,"Live")},function(l,n){var t=n.component;l(n,20,0,e.cb(n,21).role),l(n,34,0,e.cb(n,35).role),l(n,48,0,e.lb(n,48,0,e.cb(n,49).transform(t.sourceData1)))})}var S=e.Oa("amexio-d3-chart-bar-demo",s,function(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,1,"amexio-d3-chart-bar-demo",[],null,null,null,g,p)),e.Ra(1,114688,null,0,s,[m.c],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),C=t("gIcY"),R=t("ZYCi");t.d(n,"D3HorizontalBarChartComponentModuleNgFactory",function(){return k});var k=e.Pa(a,[],function(l){return e.Za([e.ab(512,e.k,e.Ea,[[8,[u.a,i.a,S]],[3,e.k],e.z]),e.ab(4608,h.o,h.n,[e.w,[2,h.x]]),e.ab(4608,C.E,C.E,[]),e.ab(4608,m.i,m.o,[h.d,e.D,m.m]),e.ab(4608,m.p,m.p,[m.i,m.n]),e.ab(5120,m.a,function(l){return[l]},[m.p]),e.ab(4608,m.l,m.l,[]),e.ab(6144,m.j,null,[m.l]),e.ab(4608,m.h,m.h,[m.j]),e.ab(6144,m.b,null,[m.h]),e.ab(4608,m.f,m.k,[m.b,e.s]),e.ab(4608,m.c,m.c,[m.f]),e.ab(4608,r.Pa,r.Pa,[m.c]),e.ab(4608,r.Za,r.Za,[e.D]),e.ab(4608,r.gb,r.gb,[]),e.ab(4608,r.z,r.z,[]),e.ab(4608,r.yb,r.yb,[]),e.ab(1073742336,h.c,h.c,[]),e.ab(1073742336,C.B,C.B,[]),e.ab(1073742336,C.k,C.k,[]),e.ab(1073742336,m.e,m.e,[]),e.ab(1073742336,m.d,m.d,[]),e.ab(1073742336,d.b,d.b,[]),e.ab(1073742336,r.B,r.B,[]),e.ab(1073742336,r.w,r.w,[]),e.ab(1073742336,r.E,r.E,[]),e.ab(1073742336,r.G,r.G,[]),e.ab(1073742336,r.J,r.J,[]),e.ab(1073742336,r.o,r.o,[]),e.ab(1073742336,r.X,r.X,[]),e.ab(1073742336,R.n,R.n,[[2,R.t],[2,R.m]]),e.ab(1073742336,b.a,b.a,[]),e.ab(1073742336,a,a,[]),e.ab(256,m.m,"XSRF-TOKEN",[]),e.ab(256,m.n,"X-XSRF-TOKEN",[]),e.ab(1024,R.i,function(){return[[{path:"",component:s,pathMatch:"full"}]]},[])])})},U89g:function(l,n,t){"use strict";t.d(n,"a",function(){return a}),t.d(n,"b",function(){return u});var e=t("CcnG"),a=(t("d2mR"),t("Ip0R"),e.Qa({encapsulation:2,styles:[],data:{}}));function u(l){return e.mb(0,[],null,null)}}}]);