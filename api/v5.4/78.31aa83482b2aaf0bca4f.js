(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{K6N8:function(e,t,l){"use strict";l.r(t);var a=l("CcnG"),n=function(){},i=l("gTgE"),r=l("pMnS"),u=l("U89g"),o=l("d2mR"),d=l("O4vx"),s=l("Ip0R"),c=function(){function e(e){this.http=e,this.candlestickChartData=[["Mon",20,28,38,45],["Tue",31,38,55,66],["Wed",50,55,77,80],["Thu",77,77,66,50],["Fri",68,66,22,15]],this.getHtmlAndTypeScriptCode()}return e.prototype.getHtmlAndTypeScriptCode=function(){var e,t,l=this;this.http.get("assets/data/code/charts/candlestickchart/chart.html",{responseType:"text"}).subscribe(function(t){e=t},function(e){},function(){l.htmlCode=e}),this.http.get("assets/data/code/charts/candlestickchart/chart.text",{responseType:"text"}).subscribe(function(e){t=e},function(e){},function(){l.typeScriptCode=t}),this.http.get("assets/data/code/charts/candlestickchart/datasource.json",{responseType:"text"}).subscribe(function(e){t=e},function(e){},function(){l.dataSourceCode=t})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e.prototype.ngOnInit=function(){},e}(),h=l("t/Na"),p=a.Qa({encapsulation:2,styles:[],data:{}});function g(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),a.Ra(2,4243456,null,0,o.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.htmlCode,"html")},null)}function m(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),a.Ra(2,4243456,null,0,o.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.typeScriptCode,"typescript")},null)}function b(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),a.Ra(2,4243456,null,0,o.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.dataSourceCode,"json")},null)}function f(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,133,"amexio-card",[["header","true"]],null,null,null,i.bc,i.k)),a.Ra(1,5488640,null,3,d.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,1,{amexioHeader:1}),a.ib(603979776,2,{amexioBody:1}),a.ib(603979776,3,{amexioFooter:1}),(e()(),a.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),a.Ra(6,114688,[[1,4]],0,d.A,[],null,null),(e()(),a.kb(-1,0,[" Candlestick Chart "])),(e()(),a.Sa(8,0,null,1,125,"amexio-body",[],null,null,null,i.Vb,i.e)),a.Ra(9,114688,[[2,4]],0,d.d,[],null,null),(e()(),a.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),a.kb(-1,null,["A candlestick chart is used to show an opening and closing value overlaid on top of a total variance. Candlestick charts are often used to show stock value behavior."])),(e()(),a.Sa(12,16777216,null,0,121,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(e,t,l){var n=!0;return"document:click"===t&&(n=!1!==a.cb(e,13).onWindowClick()&&n),"document:scroll"===t&&(n=!1!==a.cb(e,13).onscroll()&&n),n},i.xc,i.G)),a.Ra(13,5357568,null,2,d.Q,[a.F,a.k,a.R],null,null),a.ib(603979776,4,{queryTabs:1}),a.ib(603979776,5,{queryAction:1}),(e()(),a.Sa(16,0,null,1,13,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.yc,i.H)),a.Ra(17,114688,[[4,4]],0,d.R,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),a.Sa(18,0,null,0,11,"amexio-row",[],null,null,null,i.tc,i.C)),a.Ra(19,1163264,null,0,d.M,[],null,null),(e()(),a.Sa(20,0,null,0,9,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,i.dc,i.m)),a.Ra(21,114688,null,0,d.m,[],{size:[0,"size"]},null),(e()(),a.Sa(22,0,null,0,7,"amexio-chart-candlestick",[],null,null,null,i.Lc,i.U)),a.Ra(23,1163264,null,4,d.Ha,[d.La],{width:[0,"width"],height:[1,"height"],data:[2,"data"]},null),a.ib(603979776,6,{chartAreaComp:1}),a.ib(603979776,7,{chartTitleComp:1}),a.ib(603979776,8,{horizontalComp:1}),a.ib(603979776,9,{verticalComp:1}),(e()(),a.Sa(28,0,null,null,1,"amexio-chart-title",[],null,null,null,i.Oc,i.X)),a.Ra(29,114688,[[7,4]],0,d.Ma,[],{title:[0,"title"]},null),(e()(),a.Sa(30,0,null,1,80,"amexio-tab",[["title","API Reference"]],null,null,null,i.yc,i.H)),a.Ra(31,114688,[[4,4]],0,d.R,[],{title:[0,"title"]},null),(e()(),a.Sa(32,0,null,0,18,"amexio-datagrid",[["title","Chart Properties<amexio-chart-candlestick>"]],null,[["document","scroll"],["document","click"]],function(e,t,l){var n=!0;return"document:scroll"===t&&(n=!1!==a.cb(e,33).onscroll()&&n),"document:click"===t&&(n=!1!==a.cb(e,33).onclick()&&n),n},i.Od,i.xb)),a.Ra(33,1163264,null,1,d.jc,[a.l,d.Pa,a.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,10,{columnRef:1}),(e()(),a.Sa(35,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),a.Ra(36,49152,[[10,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,11,{headerTemplate:0}),a.ib(335544320,12,{bodyTemplate:0}),(e()(),a.Sa(39,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),a.Ra(40,49152,[[10,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,13,{headerTemplate:0}),a.ib(335544320,14,{bodyTemplate:0}),(e()(),a.Sa(43,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),a.Ra(44,49152,[[10,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,15,{headerTemplate:0}),a.ib(335544320,16,{bodyTemplate:0}),(e()(),a.Sa(47,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),a.Ra(48,49152,[[10,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,17,{headerTemplate:0}),a.ib(335544320,18,{bodyTemplate:0}),(e()(),a.Sa(51,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),a.Sa(52,0,null,0,18,"amexio-datagrid",[["title","Chart Title Properties<amexio-chart-title>"]],null,[["document","scroll"],["document","click"]],function(e,t,l){var n=!0;return"document:scroll"===t&&(n=!1!==a.cb(e,53).onscroll()&&n),"document:click"===t&&(n=!1!==a.cb(e,53).onclick()&&n),n},i.Od,i.xb)),a.Ra(53,1163264,null,1,d.jc,[a.l,d.Pa,a.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,19,{columnRef:1}),(e()(),a.Sa(55,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),a.Ra(56,49152,[[19,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,20,{headerTemplate:0}),a.ib(335544320,21,{bodyTemplate:0}),(e()(),a.Sa(59,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),a.Ra(60,49152,[[19,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,22,{headerTemplate:0}),a.ib(335544320,23,{bodyTemplate:0}),(e()(),a.Sa(63,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),a.Ra(64,49152,[[19,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,24,{headerTemplate:0}),a.ib(335544320,25,{bodyTemplate:0}),(e()(),a.Sa(67,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),a.Ra(68,49152,[[19,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,26,{headerTemplate:0}),a.ib(335544320,27,{bodyTemplate:0}),(e()(),a.Sa(71,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),a.Sa(72,0,null,0,18,"amexio-datagrid",[["title","Chart Horizontal Axis"]],null,[["document","scroll"],["document","click"]],function(e,t,l){var n=!0;return"document:scroll"===t&&(n=!1!==a.cb(e,73).onscroll()&&n),"document:click"===t&&(n=!1!==a.cb(e,73).onclick()&&n),n},i.Od,i.xb)),a.Ra(73,1163264,null,1,d.jc,[a.l,d.Pa,a.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,28,{columnRef:1}),(e()(),a.Sa(75,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),a.Ra(76,49152,[[28,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,29,{headerTemplate:0}),a.ib(335544320,30,{bodyTemplate:0}),(e()(),a.Sa(79,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),a.Ra(80,49152,[[28,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,31,{headerTemplate:0}),a.ib(335544320,32,{bodyTemplate:0}),(e()(),a.Sa(83,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),a.Ra(84,49152,[[28,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,33,{headerTemplate:0}),a.ib(335544320,34,{bodyTemplate:0}),(e()(),a.Sa(87,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),a.Ra(88,49152,[[28,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,35,{headerTemplate:0}),a.ib(335544320,36,{bodyTemplate:0}),(e()(),a.Sa(91,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),a.Sa(92,0,null,0,18,"amexio-datagrid",[["title","Chart Vertical Axis"]],null,[["document","scroll"],["document","click"]],function(e,t,l){var n=!0;return"document:scroll"===t&&(n=!1!==a.cb(e,93).onscroll()&&n),"document:click"===t&&(n=!1!==a.cb(e,93).onclick()&&n),n},i.Od,i.xb)),a.Ra(93,1163264,null,1,d.jc,[a.l,d.Pa,a.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,37,{columnRef:1}),(e()(),a.Sa(95,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),a.Ra(96,49152,[[37,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,38,{headerTemplate:0}),a.ib(335544320,39,{bodyTemplate:0}),(e()(),a.Sa(99,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),a.Ra(100,49152,[[37,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,40,{headerTemplate:0}),a.ib(335544320,41,{bodyTemplate:0}),(e()(),a.Sa(103,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),a.Ra(104,49152,[[37,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,42,{headerTemplate:0}),a.ib(335544320,43,{bodyTemplate:0}),(e()(),a.Sa(107,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),a.Ra(108,49152,[[37,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,44,{headerTemplate:0}),a.ib(335544320,45,{bodyTemplate:0}),(e()(),a.Sa(111,0,null,1,17,"amexio-tab",[["title","Source"]],null,null,null,i.yc,i.H)),a.Ra(112,114688,[[4,4]],0,d.R,[],{title:[0,"title"]},null),(e()(),a.Sa(113,0,null,0,15,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),a.Sa(114,0,null,null,14,"amexio-vertical-tab-view",[],null,null,null,i.Ac,i.J)),a.Ra(115,5357568,null,1,d.V,[a.F],null,null),a.ib(603979776,46,{queryTabs:1}),(e()(),a.Sa(117,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.yc,i.H)),a.Ra(118,114688,[[46,4]],0,d.R,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),a.Ja(16777216,null,0,1,null,g)),a.Ra(120,16384,null,0,s.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(e()(),a.Sa(121,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.yc,i.H)),a.Ra(122,114688,[[46,4]],0,d.R,[],{title:[0,"title"]},null),(e()(),a.Ja(16777216,null,0,1,null,m)),a.Ra(124,16384,null,0,s.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(e()(),a.Sa(125,0,null,0,3,"amexio-tab",[["title","Data Source"]],null,null,null,i.yc,i.H)),a.Ra(126,114688,[[46,4]],0,d.R,[],{title:[0,"title"]},null),(e()(),a.Ja(16777216,null,0,1,null,b)),a.Ra(128,16384,null,0,s.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(e()(),a.Sa(129,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.yc,i.H)),a.Ra(130,114688,[[4,4]],0,d.R,[],{title:[0,"title"]},null),(e()(),a.Sa(131,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),a.kb(-1,null,["Amexio Sandbox"])),(e()(),a.Sa(133,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-candlestickchart?embed=1&file=app/charts/candlestickchart/candlestickchart.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,t){var l=t.component;e(t,1,0,"true"),e(t,6,0),e(t,9,0),e(t,13,0),e(t,17,0,"Demo","true"),e(t,19,0),e(t,21,0,"12"),e(t,23,0,"100%","400px",l.candlestickChartData),e(t,29,0,"Stock Statistics"),e(t,31,0,"API Reference"),e(t,33,0,"Chart Properties<amexio-chart-candlestick>","assets/apireference/charts/candlestickchart.json","get","chart",!1,!1),e(t,36,0,"Name","name",!1,"string",15),e(t,40,0,"Type","type",!1,"string",10),e(t,44,0,"Default","default",!1,"string",10),e(t,48,0,"Description","description",!1,"string",65),e(t,53,0,"Chart Title Properties<amexio-chart-title>","assets/apireference/charts/candlestickchart.json","get","chartTitle",!1,!1),e(t,56,0,"Name","name",!1,"string",15),e(t,60,0,"Type","type",!1,"string",10),e(t,64,0,"Default","default",!1,"string",10),e(t,68,0,"Description","description",!1,"string",65),e(t,73,0,"Chart Horizontal Axis","assets/apireference/charts/candlestickchart.json","get","horizontalAxis",!1,!1),e(t,76,0,"Name","name",!1,"string",15),e(t,80,0,"Type","type",!1,"string",10),e(t,84,0,"Default","default",!1,"string",10),e(t,88,0,"Description","description",!1,"string",65),e(t,93,0,"Chart Vertical Axis","assets/apireference/charts/candlestickchart.json","get","verticalAxis",!1,!1),e(t,96,0,"Name","name",!1,"string",15),e(t,100,0,"Type","type",!1,"string",10),e(t,104,0,"Default","default",!1,"string",10),e(t,108,0,"Description","description",!1,"string",65),e(t,112,0,"Source"),e(t,115,0),e(t,118,0,"HTML",!0),e(t,120,0,l.htmlCode),e(t,122,0,"Type Script"),e(t,124,0,l.typeScriptCode),e(t,126,0,"Data Source"),e(t,128,0,l.dataSourceCode),e(t,130,0,"Live")},function(e,t){e(t,20,0,a.cb(t,21).role)})}var y=a.Oa("candlestick-chart-demo",c,function(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,1,"candlestick-chart-demo",[],null,null,null,f,p)),a.Ra(1,114688,null,0,c,[h.c],null,null)],function(e,t){e(t,1,0)},null)},{},{},[]),x=l("gIcY"),k=l("ZYCi");l.d(t,"CandlestickChartDemoModuleNgFactory",function(){return w});var w=a.Pa(n,[],function(e){return a.Za([a.ab(512,a.k,a.Ea,[[8,[i.a,r.a,y]],[3,a.k],a.z]),a.ab(4608,s.o,s.n,[a.w,[2,s.x]]),a.ab(4608,x.G,x.G,[]),a.ab(4608,h.i,h.o,[s.d,a.D,h.m]),a.ab(4608,h.p,h.p,[h.i,h.n]),a.ab(5120,h.a,function(e){return[e]},[h.p]),a.ab(4608,h.l,h.l,[]),a.ab(6144,h.j,null,[h.l]),a.ab(4608,h.h,h.h,[h.j]),a.ab(6144,h.b,null,[h.h]),a.ab(4608,h.f,h.k,[h.b,a.s]),a.ab(4608,h.c,h.c,[h.f]),a.ab(4608,d.Pa,d.Pa,[h.c]),a.ab(4608,d.Za,d.Za,[a.D]),a.ab(4608,d.gb,d.gb,[]),a.ab(4608,d.z,d.z,[]),a.ab(4608,d.Ab,d.Ab,[]),a.ab(4608,x.f,x.f,[]),a.ab(4608,d.La,d.La,[]),a.ab(1073742336,s.c,s.c,[]),a.ab(1073742336,x.D,x.D,[]),a.ab(1073742336,x.l,x.l,[]),a.ab(1073742336,h.e,h.e,[]),a.ab(1073742336,h.d,h.d,[]),a.ab(1073742336,d.B,d.B,[]),a.ab(1073742336,d.w,d.w,[]),a.ab(1073742336,d.E,d.E,[]),a.ab(1073742336,d.G,d.G,[]),a.ab(1073742336,x.z,x.z,[]),a.ab(1073742336,d.J,d.J,[]),a.ab(1073742336,d.o,d.o,[]),a.ab(1073742336,d.X,d.X,[]),a.ab(1073742336,o.b,o.b,[]),a.ab(1073742336,d.l,d.l,[]),a.ab(1073742336,k.n,k.n,[[2,k.t],[2,k.m]]),a.ab(1073742336,n,n,[]),a.ab(256,h.m,"XSRF-TOKEN",[]),a.ab(256,h.n,"X-XSRF-TOKEN",[]),a.ab(1024,k.i,function(){return[[{path:"",component:c,pathMatch:"full"}]]},[])])})},U89g:function(e,t,l){"use strict";l.d(t,"a",function(){return n}),l.d(t,"b",function(){return i});var a=l("CcnG"),n=(l("d2mR"),l("Ip0R"),a.Qa({encapsulation:2,styles:[],data:{}}));function i(e){return a.mb(0,[],null,null)}},XIHC:function(e,t){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,t,l){"use strict";l.d(t,"a",function(){return a}),l.d(t,"b",function(){return n}),l("wZee"),l("XIHC");var a=function(){function e(e,t){this._renderer=e,this._el=t,this.nativeElement=t.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),n=function(){}},wZee:function(e,t){var l="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,a=l.Prism={manual:l.Prism&&l.Prism.manual,disableWorkerMessageHandler:l.Prism&&l.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof n?new n(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var l=a.util.type(e);switch(t=t||{},l){case"Object":if(t[a.util.objId(e)])return t[a.util.objId(e)];var n={};for(var i in t[a.util.objId(e)]=n,e)e.hasOwnProperty(i)&&(n[i]=a.util.clone(e[i],t));return n;case"Array":return t[a.util.objId(e)]?t[a.util.objId(e)]:(n=[],t[a.util.objId(e)]=n,e.forEach(function(e,l){n[l]=a.util.clone(e,t)}),n)}return e}},languages:{extend:function(e,t){var l=a.util.clone(a.languages[e]);for(var n in t)l[n]=t[n];return l},insertBefore:function(e,t,l,n){var i=(n=n||a.languages)[e];if(2==arguments.length){for(var r in l=arguments[1])l.hasOwnProperty(r)&&(i[r]=l[r]);return i}var u={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var r in l)l.hasOwnProperty(r)&&(u[r]=l[r]);u[o]=i[o]}return a.languages.DFS(a.languages,function(t,l){l===n[e]&&t!=e&&(this[t]=u)}),n[e]=u},DFS:function(e,t,l,n){for(var i in n=n||{},e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],l||i),"Object"!==a.util.type(e[i])||n[a.util.objId(e[i])]?"Array"!==a.util.type(e[i])||n[a.util.objId(e[i])]||(n[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,i,n)):(n[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,null,n)))}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,l){var n={callback:l,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",n);for(var i,r=n.elements||e.querySelectorAll(n.selector),u=0;i=r[u++];)a.highlightElement(i,!0===t,n.callback)},highlightElement:function(t,n,i){for(var r,u,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(r=(o.className.match(e)||[,""])[1].toLowerCase(),u=a.languages[r]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,t.parentNode&&/pre/i.test((o=t.parentNode).nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+r);var d={element:t,language:r,grammar:u,code:t.textContent};if(a.hooks.run("before-sanity-check",d),!d.code||!d.grammar)return d.code&&(a.hooks.run("before-highlight",d),d.element.textContent=d.code,a.hooks.run("after-highlight",d)),void a.hooks.run("complete",d);if(a.hooks.run("before-highlight",d),n&&l.Worker){var s=new Worker(a.filename);s.onmessage=function(e){d.highlightedCode=e.data,a.hooks.run("before-insert",d),d.element.innerHTML=d.highlightedCode,i&&i.call(d.element),a.hooks.run("after-highlight",d),a.hooks.run("complete",d)},s.postMessage(JSON.stringify({language:d.language,code:d.code,immediateClose:!0}))}else d.highlightedCode=a.highlight(d.code,d.grammar,d.language),a.hooks.run("before-insert",d),d.element.innerHTML=d.highlightedCode,i&&i.call(t),a.hooks.run("after-highlight",d),a.hooks.run("complete",d)},highlight:function(e,t,l){var i={code:e,grammar:t,language:l};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),n.stringify(a.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,l,n,i,r,u){var o=a.Token;for(var d in l)if(l.hasOwnProperty(d)&&l[d]){if(d==u)return;var s=l[d];s="Array"===a.util.type(s)?s:[s];for(var c=0;c<s.length;++c){var h=s[c],p=h.inside,g=!!h.lookbehind,m=!!h.greedy,b=0,f=h.alias;if(m&&!h.pattern.global){var y=h.pattern.toString().match(/[imuy]*$/)[0];h.pattern=RegExp(h.pattern.source,y+"g")}h=h.pattern||h;for(var x=n,k=i;x<t.length;k+=t[x].length,++x){var w=t[x];if(t.length>e.length)return;if(!(w instanceof o)){if(m&&x!=t.length-1){if(h.lastIndex=k,!(A=h.exec(e)))break;for(var v=A.index+(g?A[1].length:0),S=A.index+A[0].length,R=x,T=k,C=t.length;R<C&&(T<S||!t[R].type&&!t[R-1].greedy);++R)v>=(T+=t[R].length)&&(++x,k=T);if(t[x]instanceof o)continue;F=R-x,w=e.slice(k,T),A.index-=k}else{h.lastIndex=0;var A=h.exec(w),F=1}if(A){g&&(b=A[1]?A[1].length:0),S=(v=A.index+b)+(A=A[0].slice(b)).length;var P=w.slice(0,v),j=w.slice(S),N=[x,F];P&&(++x,k+=P.length,N.push(P));var E=new o(d,p?a.tokenize(A,p):A,f,A,m);if(N.push(E),j&&N.push(j),Array.prototype.splice.apply(t,N),1!=F&&a.matchGrammar(e,t,l,x,k,!0,d),r)break}else if(r)break}}}}},tokenize:function(e,t,l){var n=[e],i=t.rest;if(i){for(var r in i)t[r]=i[r];delete t.rest}return a.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var l=a.hooks.all;l[e]=l[e]||[],l[e].push(t)},run:function(e,t){var l=a.hooks.all[e];if(l&&l.length)for(var n,i=0;n=l[i++];)n(t)}}},n=a.Token=function(e,t,l,a,n){this.type=e,this.content=t,this.alias=l,this.length=0|(a||"").length,this.greedy=!!n};if(n.stringify=function(e,t,l){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map(function(l){return n.stringify(l,t,e)}).join("");var i={type:e.type,content:n.stringify(e.content,t,l),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:l};if(e.alias){var r="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,r)}a.hooks.run("wrap",i);var u=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(u?" "+u:"")+">"+i.content+"</"+i.tag+">"},!l.document)return l.addEventListener?(a.disableWorkerMessageHandler||l.addEventListener("message",function(e){var t=JSON.parse(e.data),n=t.language,i=t.immediateClose;l.postMessage(a.highlight(t.code,a.languages[n],n)),i&&l.close()},!1),l.Prism):l.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(a.filename=i.src,a.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),l.Prism}();void 0!==e&&e.exports&&(e.exports=a),"undefined"!=typeof global&&(global.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),a.languages.xml=a.languages.markup,a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},a.languages.css.atrule.inside.rest=a.languages.css,a.languages.markup&&(a.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:a.languages.css,alias:"language-css",greedy:!0}}),a.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:a.languages.css}},alias:"language-css"}},a.languages.markup.tag)),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),a.languages.javascript["template-string"].inside.interpolation.inside.rest=a.languages.javascript,a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:a.languages.javascript,alias:"language-javascript",greedy:!0}}),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var l,n=t.getAttribute("data-src"),i=t,r=/\blang(?:uage)?-([\w-]+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(l=(t.className.match(r)||[,""])[1]),!l){var u=(n.match(/\.(\w+)$/)||[,""])[1];l=e[u]||u}var o=document.createElement("code");o.className="language-"+l,t.textContent="",o.textContent="Loading\u2026",t.appendChild(o);var d=new XMLHttpRequest;d.open("GET",n,!0),d.onreadystatechange=function(){4==d.readyState&&(d.status<400&&d.responseText?(o.textContent=d.responseText,a.highlightElement(o)):o.textContent=d.status>=400?"\u2716 Error "+d.status+" while fetching file: "+d.statusText:"\u2716 Error: File does not exist or is empty")},d.send(null)}),a.plugins.toolbar&&a.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var l=t.getAttribute("data-src"),a=document.createElement("a");return a.textContent=t.getAttribute("data-download-link-label")||"Download",a.setAttribute("download",""),a.href=l,a}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);