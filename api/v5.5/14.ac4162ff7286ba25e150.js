(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{U89g:function(l,a,e){"use strict";e.d(a,"a",function(){return t}),e.d(a,"b",function(){return u});var n=e("CcnG"),t=(e("d2mR"),e("Ip0R"),n.Qa({encapsulation:2,styles:[],data:{}}));function u(l){return n.mb(0,[],null,null)}},Z1z6:function(l,a,e){"use strict";e.r(a);var n=e("CcnG"),t=function(){},u=e("gTgE"),i=e("pMnS"),d=e("U89g"),o=e("d2mR"),r=e("O4vx"),c=e("thSD"),b=e("Jovw"),h=e("Ip0R"),s=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.ngOnInit=function(){this.waterfallChartData=[["Product","Yield"],["Product Revenue",42e4],["Services Revenue",21e4],["Fixed Costs",-17e4],["letiable Costs",-14e4]]},l.prototype.onLegendClick=function(l){this.sourceData=l},l.prototype.onChartClick=function(l){this.sourceData=l},l.prototype.getHtmlAndTypeScriptCode=function(){var l,a,e=this;this.http.get("assets/data/code/charts/D3Charts/d3waterfallchart/d3chart.html",{responseType:"text"}).subscribe(function(a){l=a},function(l){},function(){e.htmlCode=l}),this.http.get("assets/data/code/charts/D3Charts/d3waterfallchart/d3chart.text",{responseType:"text"}).subscribe(function(l){a=l},function(l){},function(){e.typeScriptCode=a}),this.http.get("assets/data/code/charts/D3Charts/d3waterfallchart/datasource.json",{responseType:"text"}).subscribe(function(l){a=l},function(l){},function(){e.dataSourceCode=a}),this.http.get("assets/data/code/charts/D3Charts/d3waterfallchart/usersource.json",{responseType:"text"}).subscribe(function(l){a=l},function(l){},function(){e.userDataSourceCode=a})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),m=e("t/Na"),p=n.Qa({encapsulation:2,styles:[],data:{}});function f(l){return n.mb(0,[(l()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,d.b,d.a)),n.Ra(2,4243456,null,0,o.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,a){l(a,2,0,a.component.htmlCode,"html")},null)}function x(l){return n.mb(0,[(l()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,d.b,d.a)),n.Ra(2,4243456,null,0,o.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,a){l(a,2,0,a.component.typeScriptCode,"typescript")},null)}function y(l){return n.mb(0,[(l()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,d.b,d.a)),n.Ra(2,4243456,null,0,o.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,a){l(a,2,0,a.component.dataSourceCode,"json")},null)}function S(l){return n.mb(0,[(l()(),n.Sa(0,0,null,null,133,"amexio-card",[["header","true"]],null,null,null,u.jc,u.k)),n.Ra(1,7585792,null,3,r.j,[n.F],{header:[0,"header"]},null),n.ib(603979776,1,{amexioHeader:1}),n.ib(603979776,2,{amexioBody:1}),n.ib(603979776,3,{amexioFooter:1}),(l()(),n.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,u.vc,u.w)),n.Ra(6,114688,[[1,4]],0,r.C,[],null,null),(l()(),n.kb(-1,0,[" D3 Waterfall Chart "])),(l()(),n.Sa(8,0,null,1,125,"amexio-body",[],null,null,null,u.dc,u.e)),n.Ra(9,114688,[[2,4]],0,r.d,[],null,null),(l()(),n.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),n.kb(-1,null,["An D3 waterfall chart that is rendered within the browser using SVG .Displays tips when hovering over points."])),(l()(),n.Sa(12,0,null,0,121,"amexio-tab-view",[],null,null,null,u.Gc,u.H)),n.Ra(13,5488640,null,2,r.S,[n.F,n.k,n.F],null,null),n.ib(603979776,4,{queryTabs:1}),n.ib(603979776,5,{queryAction:1}),(l()(),n.Sa(16,0,null,1,37,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,u.Hc,u.I)),n.Ra(17,114688,[[4,4]],0,r.T,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),n.Sa(18,0,null,0,35,"amexio-row",[],null,null,null,u.Cc,u.D)),n.Ra(19,1163264,null,0,r.O,[],null,null),(l()(),n.Sa(20,0,null,0,33,"amexio-column",[],[[1,"class",0]],null,null,u.lc,u.m)),n.Ra(21,114688,null,0,r.m,[],{size:[0,"size"]},null),(l()(),n.Sa(22,0,null,0,31,"amexio-row",[],null,null,null,u.Cc,u.D)),n.Ra(23,1163264,null,0,r.O,[],null,null),(l()(),n.Sa(24,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,u.lc,u.m)),n.Ra(25,114688,null,0,r.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),n.Sa(26,0,null,0,11,"amexio-card",[],null,null,null,u.jc,u.k)),n.Ra(27,7585792,null,3,r.j,[n.F],{header:[0,"header"],show:[1,"show"]},null),n.ib(603979776,6,{amexioHeader:1}),n.ib(603979776,7,{amexioBody:1}),n.ib(603979776,8,{amexioFooter:1}),(l()(),n.Sa(31,0,null,0,2,"amexio-header",[],null,null,null,u.vc,u.w)),n.Ra(32,114688,[[6,4]],0,r.C,[],null,null),(l()(),n.kb(-1,0,[" D3-waterfall chart "])),(l()(),n.Sa(34,0,null,1,3,"amexio-body",[],null,null,null,u.dc,u.e)),n.Ra(35,114688,[[7,4]],0,r.d,[],null,null),(l()(),n.Sa(36,0,null,0,1,"amexio-d3-chart-waterfall",[],null,[[null,"onChartClick"],[null,"onLegendClick"]],function(l,a,e){var n=!0,t=l.component;return"onChartClick"===a&&(n=!1!==t.onChartClick(e)&&n),"onLegendClick"===a&&(n=!1!==t.onLegendClick(e)&&n),n},c.z,c.l)),n.Ra(37,114688,null,0,b.p,[b.i,b.j],{data:[0,"data"],title:[1,"title"],labelcolor:[2,"labelcolor"],labelflag:[3,"labelflag"]},{onLegendClick:"onLegendClick",onChartClick:"onChartClick"}),(l()(),n.Sa(38,0,null,0,15,"amexio-column",[],[[1,"class",0]],null,null,u.lc,u.m)),n.Ra(39,114688,null,0,r.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),n.Sa(40,0,null,0,13,"amexio-card",[["header","true"]],null,null,null,u.jc,u.k)),n.Ra(41,7585792,null,3,r.j,[n.F],{header:[0,"header"]},null),n.ib(603979776,9,{amexioHeader:1}),n.ib(603979776,10,{amexioBody:1}),n.ib(603979776,11,{amexioFooter:1}),(l()(),n.Sa(45,0,null,0,2,"amexio-header",[],null,null,null,u.vc,u.w)),n.Ra(46,114688,[[9,4]],0,r.C,[],null,null),(l()(),n.kb(-1,0,[" Click On Legend/ Click on Chart "])),(l()(),n.Sa(48,0,null,1,5,"amexio-body",[],null,null,null,u.dc,u.e)),n.Ra(49,114688,[[10,4]],0,r.d,[],null,null),(l()(),n.Sa(50,0,null,0,3,"pre",[],null,null,null,null,null)),(l()(),n.Sa(51,0,null,null,2,"code",[],null,null,null,null,null)),(l()(),n.kb(52,null,["",""])),n.eb(0,h.g,[]),(l()(),n.Sa(54,0,null,1,56,"amexio-tab",[["title","API Reference"]],null,null,null,u.Hc,u.I)),n.Ra(55,114688,[[4,4]],0,r.T,[],{title:[0,"title"]},null),(l()(),n.Sa(56,0,null,0,22,"amexio-datagrid",[["title","D3-Waterfall-Chart Properties<amexio-d3-chart-waterfall>"]],null,null,null,u.de,u.Eb)),n.Ra(57,5488640,null,1,r.Dc,[n.l,r.Ta,n.i,n.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),n.ib(603979776,12,{columnRef:1}),(l()(),n.Sa(59,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),n.Ra(60,49152,[[12,4]],2,r.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,13,{headerTemplate:0}),n.ib(335544320,14,{bodyTemplate:0}),(l()(),n.Sa(63,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),n.Ra(64,49152,[[12,4]],2,r.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,15,{headerTemplate:0}),n.ib(335544320,16,{bodyTemplate:0}),(l()(),n.Sa(67,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),n.Ra(68,49152,[[12,4]],2,r.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,17,{headerTemplate:0}),n.ib(335544320,18,{bodyTemplate:0}),(l()(),n.Sa(71,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),n.Ra(72,49152,[[12,4]],2,r.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,19,{headerTemplate:0}),n.ib(335544320,20,{bodyTemplate:0}),(l()(),n.Sa(75,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),n.Ra(76,49152,[[12,4]],2,r.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,21,{headerTemplate:0}),n.ib(335544320,22,{bodyTemplate:0}),(l()(),n.Sa(79,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),n.Sa(80,0,null,0,14,"amexio-datagrid",[["title","Legend Event<amexio-d3-chart-waterfall>"]],null,null,null,u.de,u.Eb)),n.Ra(81,5488640,null,1,r.Dc,[n.l,r.Ta,n.i,n.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),n.ib(603979776,23,{columnRef:1}),(l()(),n.Sa(83,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),n.Ra(84,49152,[[23,4]],2,r.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,24,{headerTemplate:0}),n.ib(335544320,25,{bodyTemplate:0}),(l()(),n.Sa(87,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),n.Ra(88,49152,[[23,4]],2,r.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,26,{headerTemplate:0}),n.ib(335544320,27,{bodyTemplate:0}),(l()(),n.Sa(91,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),n.Ra(92,49152,[[23,4]],2,r.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,28,{headerTemplate:0}),n.ib(335544320,29,{bodyTemplate:0}),(l()(),n.Sa(95,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),n.Sa(96,0,null,0,14,"amexio-datagrid",[["title","Chart Event <amexio-d3-chart-waterfall>"]],null,null,null,u.de,u.Eb)),n.Ra(97,5488640,null,1,r.Dc,[n.l,r.Ta,n.i,n.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),n.ib(603979776,30,{columnRef:1}),(l()(),n.Sa(99,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),n.Ra(100,49152,[[30,4]],2,r.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,31,{headerTemplate:0}),n.ib(335544320,32,{bodyTemplate:0}),(l()(),n.Sa(103,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),n.Ra(104,49152,[[30,4]],2,r.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,33,{headerTemplate:0}),n.ib(335544320,34,{bodyTemplate:0}),(l()(),n.Sa(107,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),n.Ra(108,49152,[[30,4]],2,r.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,35,{headerTemplate:0}),n.ib(335544320,36,{bodyTemplate:0}),(l()(),n.Sa(111,0,null,1,17,"amexio-tab",[["title","Source"]],null,null,null,u.Hc,u.I)),n.Ra(112,114688,[[4,4]],0,r.T,[],{title:[0,"title"]},null),(l()(),n.Sa(113,0,null,0,15,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),n.Sa(114,0,null,null,14,"amexio-vertical-tab-view",[],null,null,null,u.Jc,u.K)),n.Ra(115,5357568,null,1,r.X,[n.F,n.k],null,null),n.ib(603979776,37,{queryTabs:1}),(l()(),n.Sa(117,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,u.Hc,u.I)),n.Ra(118,114688,[[37,4]],0,r.T,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),n.Ja(16777216,null,0,1,null,f)),n.Ra(120,16384,null,0,h.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(l()(),n.Sa(121,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,u.Hc,u.I)),n.Ra(122,114688,[[37,4]],0,r.T,[],{title:[0,"title"]},null),(l()(),n.Ja(16777216,null,0,1,null,x)),n.Ra(124,16384,null,0,h.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(l()(),n.Sa(125,0,null,0,3,"amexio-tab",[["title","Data Source"]],null,null,null,u.Hc,u.I)),n.Ra(126,114688,[[37,4]],0,r.T,[],{title:[0,"title"]},null),(l()(),n.Ja(16777216,null,0,1,null,y)),n.Ra(128,16384,null,0,h.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(l()(),n.Sa(129,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,u.Hc,u.I)),n.Ra(130,114688,[[4,4]],0,r.T,[],{title:[0,"title"]},null),(l()(),n.Sa(131,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),n.kb(-1,null,["Amexio Sandbox"])),(l()(),n.Sa(133,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-d3-chart-waterfall?embed=1&file=src/app/d3chart/d3barchart/d3barchart.demo.component.html&view=editor"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(l,a){var e=a.component;l(a,1,0,"true"),l(a,6,0),l(a,9,0),l(a,13,0),l(a,17,0,"Demo","true"),l(a,19,0),l(a,21,0,12),l(a,23,0),l(a,25,0,!0,8),l(a,27,0,!0,"true"),l(a,32,0),l(a,35,0),l(a,37,0,e.waterfallChartData,"Product Information","white",!0),l(a,39,0,!0,4),l(a,41,0,"true"),l(a,46,0),l(a,49,0),l(a,55,0,"API Reference"),l(a,57,0,"D3-Waterfall-Chart Properties<amexio-d3-chart-waterfall>","assets/apireference/charts/d3charts/d3waterfallchart.json","get","properties",!1,!1),l(a,60,0,"Name","name",!1,"string",15),l(a,64,0,"version","version",!1,"string",15),l(a,68,0,"Type","type",!1,"string",15),l(a,72,0,"Default","default",!1,"string",15),l(a,76,0,"Description","description",!1,"string",40),l(a,81,0,"Legend Event<amexio-d3-chart-waterfall>","assets/apireference/charts/d3charts/d3waterfallchart.json","get","legend",!1,!1),l(a,84,0,"Name","name",!1,"string",15),l(a,88,0,"version","version",!1,"string",15),l(a,92,0,"Description","description",!1,"string",55),l(a,97,0,"Chart Event <amexio-d3-chart-waterfall>","assets/apireference/charts/d3charts/d3waterfallchart.json","get","chartevent",!1,!1),l(a,100,0,"Name","name",!1,"string",15),l(a,104,0,"version","version",!1,"string",15),l(a,108,0,"Description","description",!1,"string",55),l(a,112,0,"Source"),l(a,115,0),l(a,118,0,"HTML",!0),l(a,120,0,e.htmlCode),l(a,122,0,"Type Script"),l(a,124,0,e.typeScriptCode),l(a,126,0,"Data Source"),l(a,128,0,e.dataSourceCode),l(a,130,0,"Live")},function(l,a){var e=a.component;l(a,20,0,n.cb(a,21).role),l(a,24,0,n.cb(a,25).role),l(a,38,0,n.cb(a,39).role),l(a,52,0,n.lb(a,52,0,n.cb(a,53).transform(e.sourceData)))})}var g=n.Oa("amexio-d3-chart-waterfall-demo",s,function(l){return n.mb(0,[(l()(),n.Sa(0,0,null,null,1,"amexio-d3-chart-waterfall-demo",[],null,null,null,S,p)),n.Ra(1,114688,null,0,s,[m.c],null,null)],function(l,a){l(a,1,0)},null)},{},{},[]),w=e("gIcY"),C=e("ZYCi");e.d(a,"D3WaterfallChartDemoModuleNgFactory",function(){return R});var R=n.Pa(t,[],function(l){return n.Za([n.ab(512,n.k,n.Ea,[[8,[u.a,i.a,g]],[3,n.k],n.z]),n.ab(4608,h.o,h.n,[n.w,[2,h.x]]),n.ab(4608,w.G,w.G,[]),n.ab(4608,m.i,m.o,[h.d,n.D,m.m]),n.ab(4608,m.p,m.p,[m.i,m.n]),n.ab(5120,m.a,function(l){return[l]},[m.p]),n.ab(4608,m.l,m.l,[]),n.ab(6144,m.j,null,[m.l]),n.ab(4608,m.h,m.h,[m.j]),n.ab(6144,m.b,null,[m.h]),n.ab(4608,m.f,m.k,[m.b,n.s]),n.ab(4608,m.c,m.c,[m.f]),n.ab(4608,r.Ta,r.Ta,[m.c]),n.ab(4608,r.ob,r.ob,[]),n.ab(4608,r.db,r.db,[n.D]),n.ab(4608,r.B,r.B,[]),n.ab(4608,r.Pb,r.Pb,[]),n.ab(4608,r.xb,r.xb,[]),n.ab(4608,w.f,w.f,[]),n.ab(4608,r.jb,r.jb,[]),n.ab(4608,b.j,b.j,[n.D]),n.ab(1073742336,h.c,h.c,[]),n.ab(1073742336,w.D,w.D,[]),n.ab(1073742336,w.l,w.l,[]),n.ab(1073742336,m.e,m.e,[]),n.ab(1073742336,m.d,m.d,[]),n.ab(1073742336,o.b,o.b,[]),n.ab(1073742336,r.Eb,r.Eb,[]),n.ab(1073742336,r.ec,r.ec,[]),n.ab(1073742336,r.D,r.D,[]),n.ab(1073742336,r.x,r.x,[]),n.ab(1073742336,r.G,r.G,[]),n.ab(1073742336,r.I,r.I,[]),n.ab(1073742336,w.z,w.z,[]),n.ab(1073742336,r.L,r.L,[]),n.ab(1073742336,r.p,r.p,[]),n.ab(1073742336,r.Aa,r.Aa,[]),n.ab(1073742336,C.n,C.n,[[2,C.t],[2,C.m]]),n.ab(1073742336,b.a,b.a,[]),n.ab(1073742336,t,t,[]),n.ab(256,m.m,"XSRF-TOKEN",[]),n.ab(256,m.n,"X-XSRF-TOKEN",[]),n.ab(1024,C.i,function(){return[[{path:"",component:s,pathMatch:"full"}]]},[])])})}}]);