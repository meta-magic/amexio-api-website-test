(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{U89g:function(l,n,a){"use strict";a.d(n,"a",function(){return t}),a.d(n,"b",function(){return u});var e=a("CcnG"),t=(a("d2mR"),a("Ip0R"),e.Qa({encapsulation:2,styles:[],data:{}}));function u(l){return e.mb(0,[],null,null)}},Z1z6:function(l,n,a){"use strict";a.r(n);var e=a("CcnG"),t=function(){},u=a("gTgE"),i=a("pMnS"),d=a("U89g"),o=a("d2mR"),r=a("O4vx"),c=a("thSD"),b=a("Jovw"),h=a("Ip0R"),m=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.ngOnInit=function(){this.waterfallChartData=[["Product","Yield"],["Product Revenue",42e4],["Services Revenue",21e4],["Fixed Costs",-17e4],["letiable Costs",-14e4]]},l.prototype.onLegendClick=function(l){this.sourceData=l},l.prototype.onChartClick=function(l){this.sourceData=l},l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,a=this;this.http.get("assets/data/code/charts/D3Charts/d3waterfallchart/d3chart.html",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){a.htmlCode=l}),this.http.get("assets/data/code/charts/D3Charts/d3waterfallchart/d3chart.text",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){a.typeScriptCode=n}),this.http.get("assets/data/code/charts/D3Charts/d3waterfallchart/datasource.json",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){a.dataSourceCode=n}),this.http.get("assets/data/code/charts/D3Charts/d3waterfallchart/usersource.json",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){a.userDataSourceCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),s=a("t/Na"),p=e.Qa({encapsulation:2,styles:[],data:{}});function x(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.Sa(1,0,null,null,1,"prism-block",[],null,null,null,d.b,d.a)),e.Ra(2,4243456,null,0,o.a,[e.F,e.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.htmlCode,"html")},null)}function f(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.Sa(1,0,null,null,1,"prism-block",[],null,null,null,d.b,d.a)),e.Ra(2,4243456,null,0,o.a,[e.F,e.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.typeScriptCode,"typescript")},null)}function y(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.Sa(1,0,null,null,1,"prism-block",[],null,null,null,d.b,d.a)),e.Ra(2,4243456,null,0,o.a,[e.F,e.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.dataSourceCode,"json")},null)}function S(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,133,"amexio-card",[["header","true"]],null,null,null,u.bc,u.k)),e.Ra(1,5488640,null,3,r.j,[e.F],{header:[0,"header"]},null),e.ib(603979776,1,{amexioHeader:1}),e.ib(603979776,2,{amexioBody:1}),e.ib(603979776,3,{amexioFooter:1}),(l()(),e.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,u.mc,u.v)),e.Ra(6,114688,[[1,4]],0,r.B,[],null,null),(l()(),e.kb(-1,0,[" D3 Waterfall Chart "])),(l()(),e.Sa(8,0,null,1,125,"amexio-body",[],null,null,null,u.Vb,u.e)),e.Ra(9,114688,[[2,4]],0,r.d,[],null,null),(l()(),e.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.kb(-1,null,["An D3 waterfall chart that is rendered within the browser using SVG .Displays tips when hovering over points."])),(l()(),e.Sa(12,0,null,0,121,"amexio-tab-view",[],null,null,null,u.xc,u.G)),e.Ra(13,5488640,null,2,r.R,[e.F,e.k,e.F],null,null),e.ib(603979776,4,{queryTabs:1}),e.ib(603979776,5,{queryAction:1}),(l()(),e.Sa(16,0,null,1,37,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,u.yc,u.H)),e.Ra(17,114688,[[4,4]],0,r.S,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e.Sa(18,0,null,0,35,"amexio-row",[],null,null,null,u.tc,u.C)),e.Ra(19,1163264,null,0,r.N,[],null,null),(l()(),e.Sa(20,0,null,0,33,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),e.Ra(21,114688,null,0,r.m,[],{size:[0,"size"]},null),(l()(),e.Sa(22,0,null,0,31,"amexio-row",[],null,null,null,u.tc,u.C)),e.Ra(23,1163264,null,0,r.N,[],null,null),(l()(),e.Sa(24,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),e.Ra(25,114688,null,0,r.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),e.Sa(26,0,null,0,11,"amexio-card",[],null,null,null,u.bc,u.k)),e.Ra(27,5488640,null,3,r.j,[e.F],{header:[0,"header"],show:[1,"show"]},null),e.ib(603979776,6,{amexioHeader:1}),e.ib(603979776,7,{amexioBody:1}),e.ib(603979776,8,{amexioFooter:1}),(l()(),e.Sa(31,0,null,0,2,"amexio-header",[],null,null,null,u.mc,u.v)),e.Ra(32,114688,[[6,4]],0,r.B,[],null,null),(l()(),e.kb(-1,0,[" D3-waterfall chart "])),(l()(),e.Sa(34,0,null,1,3,"amexio-body",[],null,null,null,u.Vb,u.e)),e.Ra(35,114688,[[7,4]],0,r.d,[],null,null),(l()(),e.Sa(36,0,null,0,1,"amexio-d3-chart-waterfall",[],null,[[null,"onChartClick"],[null,"onLegendClick"]],function(l,n,a){var e=!0,t=l.component;return"onChartClick"===n&&(e=!1!==t.onChartClick(a)&&e),"onLegendClick"===n&&(e=!1!==t.onLegendClick(a)&&e),e},c.z,c.l)),e.Ra(37,114688,null,0,b.p,[b.i,b.j],{data:[0,"data"],title:[1,"title"],labelcolor:[2,"labelcolor"],labelflag:[3,"labelflag"]},{onLegendClick:"onLegendClick",onChartClick:"onChartClick"}),(l()(),e.Sa(38,0,null,0,15,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),e.Ra(39,114688,null,0,r.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),e.Sa(40,0,null,0,13,"amexio-card",[["header","true"]],null,null,null,u.bc,u.k)),e.Ra(41,5488640,null,3,r.j,[e.F],{header:[0,"header"]},null),e.ib(603979776,9,{amexioHeader:1}),e.ib(603979776,10,{amexioBody:1}),e.ib(603979776,11,{amexioFooter:1}),(l()(),e.Sa(45,0,null,0,2,"amexio-header",[],null,null,null,u.mc,u.v)),e.Ra(46,114688,[[9,4]],0,r.B,[],null,null),(l()(),e.kb(-1,0,[" Click On Legend/ Click on Chart "])),(l()(),e.Sa(48,0,null,1,5,"amexio-body",[],null,null,null,u.Vb,u.e)),e.Ra(49,114688,[[10,4]],0,r.d,[],null,null),(l()(),e.Sa(50,0,null,0,3,"pre",[],null,null,null,null,null)),(l()(),e.Sa(51,0,null,null,2,"code",[],null,null,null,null,null)),(l()(),e.kb(52,null,["",""])),e.eb(0,h.g,[]),(l()(),e.Sa(54,0,null,1,56,"amexio-tab",[["title","API Reference"]],null,null,null,u.yc,u.H)),e.Ra(55,114688,[[4,4]],0,r.S,[],{title:[0,"title"]},null),(l()(),e.Sa(56,0,null,0,22,"amexio-datagrid",[["title","D3-Waterfall-Chart Properties<amexio-d3-chart-waterfall>"]],null,null,null,u.Od,u.xb)),e.Ra(57,1294336,null,1,r.mc,[e.l,r.Qa,e.i,e.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e.ib(603979776,12,{columnRef:1}),(l()(),e.Sa(59,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(60,49152,[[12,4]],2,r.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,13,{headerTemplate:0}),e.ib(335544320,14,{bodyTemplate:0}),(l()(),e.Sa(63,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(64,49152,[[12,4]],2,r.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,15,{headerTemplate:0}),e.ib(335544320,16,{bodyTemplate:0}),(l()(),e.Sa(67,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(68,49152,[[12,4]],2,r.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,17,{headerTemplate:0}),e.ib(335544320,18,{bodyTemplate:0}),(l()(),e.Sa(71,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(72,49152,[[12,4]],2,r.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,19,{headerTemplate:0}),e.ib(335544320,20,{bodyTemplate:0}),(l()(),e.Sa(75,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(76,49152,[[12,4]],2,r.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,21,{headerTemplate:0}),e.ib(335544320,22,{bodyTemplate:0}),(l()(),e.Sa(79,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(80,0,null,0,14,"amexio-datagrid",[["title","Legend Event<amexio-d3-chart-waterfall>"]],null,null,null,u.Od,u.xb)),e.Ra(81,1294336,null,1,r.mc,[e.l,r.Qa,e.i,e.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e.ib(603979776,23,{columnRef:1}),(l()(),e.Sa(83,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(84,49152,[[23,4]],2,r.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,24,{headerTemplate:0}),e.ib(335544320,25,{bodyTemplate:0}),(l()(),e.Sa(87,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(88,49152,[[23,4]],2,r.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,26,{headerTemplate:0}),e.ib(335544320,27,{bodyTemplate:0}),(l()(),e.Sa(91,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(92,49152,[[23,4]],2,r.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,28,{headerTemplate:0}),e.ib(335544320,29,{bodyTemplate:0}),(l()(),e.Sa(95,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(96,0,null,0,14,"amexio-datagrid",[["title","Chart Event <amexio-d3-chart-waterfall>"]],null,null,null,u.Od,u.xb)),e.Ra(97,1294336,null,1,r.mc,[e.l,r.Qa,e.i,e.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e.ib(603979776,30,{columnRef:1}),(l()(),e.Sa(99,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(100,49152,[[30,4]],2,r.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,31,{headerTemplate:0}),e.ib(335544320,32,{bodyTemplate:0}),(l()(),e.Sa(103,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(104,49152,[[30,4]],2,r.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,33,{headerTemplate:0}),e.ib(335544320,34,{bodyTemplate:0}),(l()(),e.Sa(107,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(108,49152,[[30,4]],2,r.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,35,{headerTemplate:0}),e.ib(335544320,36,{bodyTemplate:0}),(l()(),e.Sa(111,0,null,1,17,"amexio-tab",[["title","Source"]],null,null,null,u.yc,u.H)),e.Ra(112,114688,[[4,4]],0,r.S,[],{title:[0,"title"]},null),(l()(),e.Sa(113,0,null,0,15,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),e.Sa(114,0,null,null,14,"amexio-vertical-tab-view",[],null,null,null,u.Ac,u.J)),e.Ra(115,5357568,null,1,r.W,[e.F],null,null),e.ib(603979776,37,{queryTabs:1}),(l()(),e.Sa(117,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,u.yc,u.H)),e.Ra(118,114688,[[37,4]],0,r.S,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e.Ja(16777216,null,0,1,null,x)),e.Ra(120,16384,null,0,h.m,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.Sa(121,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,u.yc,u.H)),e.Ra(122,114688,[[37,4]],0,r.S,[],{title:[0,"title"]},null),(l()(),e.Ja(16777216,null,0,1,null,f)),e.Ra(124,16384,null,0,h.m,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.Sa(125,0,null,0,3,"amexio-tab",[["title","Data Source"]],null,null,null,u.yc,u.H)),e.Ra(126,114688,[[37,4]],0,r.S,[],{title:[0,"title"]},null),(l()(),e.Ja(16777216,null,0,1,null,y)),e.Ra(128,16384,null,0,h.m,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.Sa(129,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,u.yc,u.H)),e.Ra(130,114688,[[4,4]],0,r.S,[],{title:[0,"title"]},null),(l()(),e.Sa(131,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),e.kb(-1,null,["Amexio Sandbox"])),(l()(),e.kb(-1,0,[" Work in progress "]))],function(l,n){var a=n.component;l(n,1,0,"true"),l(n,6,0),l(n,9,0),l(n,13,0),l(n,17,0,"Demo","true"),l(n,19,0),l(n,21,0,12),l(n,23,0),l(n,25,0,!0,8),l(n,27,0,!0,"true"),l(n,32,0),l(n,35,0),l(n,37,0,a.waterfallChartData,"Product Information","white",!0),l(n,39,0,!0,4),l(n,41,0,"true"),l(n,46,0),l(n,49,0),l(n,55,0,"API Reference"),l(n,57,0,"D3-Waterfall-Chart Properties<amexio-d3-chart-waterfall>","assets/apireference/charts/d3charts/d3waterfallchart.json","get","properties",!1,!1),l(n,60,0,"Name","name",!1,"string",15),l(n,64,0,"version","version",!1,"string",15),l(n,68,0,"Type","type",!1,"string",15),l(n,72,0,"Default","default",!1,"string",15),l(n,76,0,"Description","description",!1,"string",40),l(n,81,0,"Legend Event<amexio-d3-chart-waterfall>","assets/apireference/charts/d3charts/d3waterfallchart.json","get","legend",!1,!1),l(n,84,0,"Name","name",!1,"string",15),l(n,88,0,"version","version",!1,"string",15),l(n,92,0,"Description","description",!1,"string",55),l(n,97,0,"Chart Event <amexio-d3-chart-waterfall>","assets/apireference/charts/d3charts/d3waterfallchart.json","get","chartevent",!1,!1),l(n,100,0,"Name","name",!1,"string",15),l(n,104,0,"version","version",!1,"string",15),l(n,108,0,"Description","description",!1,"string",55),l(n,112,0,"Source"),l(n,115,0),l(n,118,0,"HTML",!0),l(n,120,0,a.htmlCode),l(n,122,0,"Type Script"),l(n,124,0,a.typeScriptCode),l(n,126,0,"Data Source"),l(n,128,0,a.dataSourceCode),l(n,130,0,"Live")},function(l,n){var a=n.component;l(n,20,0,e.cb(n,21).role),l(n,24,0,e.cb(n,25).role),l(n,38,0,e.cb(n,39).role),l(n,52,0,e.lb(n,52,0,e.cb(n,53).transform(a.sourceData)))})}var g=e.Oa("amexio-d3-chart-waterfall-demo",m,function(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,1,"amexio-d3-chart-waterfall-demo",[],null,null,null,S,p)),e.Ra(1,114688,null,0,m,[s.c],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),R=a("gIcY"),w=a("ZYCi");a.d(n,"D3WaterfallChartDemoModuleNgFactory",function(){return C});var C=e.Pa(t,[],function(l){return e.Za([e.ab(512,e.k,e.Ea,[[8,[u.a,i.a,g]],[3,e.k],e.z]),e.ab(4608,h.o,h.n,[e.w,[2,h.x]]),e.ab(4608,R.G,R.G,[]),e.ab(4608,s.i,s.o,[h.d,e.D,s.m]),e.ab(4608,s.p,s.p,[s.i,s.n]),e.ab(5120,s.a,function(l){return[l]},[s.p]),e.ab(4608,s.l,s.l,[]),e.ab(6144,s.j,null,[s.l]),e.ab(4608,s.h,s.h,[s.j]),e.ab(6144,s.b,null,[s.h]),e.ab(4608,s.f,s.k,[s.b,e.s]),e.ab(4608,s.c,s.c,[s.f]),e.ab(4608,r.Qa,r.Qa,[s.c]),e.ab(4608,r.ab,r.ab,[e.D]),e.ab(4608,r.jb,r.jb,[]),e.ab(4608,r.A,r.A,[]),e.ab(4608,r.Db,r.Db,[]),e.ab(4608,R.f,R.f,[]),e.ab(4608,b.j,b.j,[e.D]),e.ab(1073742336,h.c,h.c,[]),e.ab(1073742336,R.D,R.D,[]),e.ab(1073742336,R.l,R.l,[]),e.ab(1073742336,s.e,s.e,[]),e.ab(1073742336,s.d,s.d,[]),e.ab(1073742336,o.b,o.b,[]),e.ab(1073742336,r.C,r.C,[]),e.ab(1073742336,r.x,r.x,[]),e.ab(1073742336,r.F,r.F,[]),e.ab(1073742336,r.H,r.H,[]),e.ab(1073742336,R.z,R.z,[]),e.ab(1073742336,r.K,r.K,[]),e.ab(1073742336,r.p,r.p,[]),e.ab(1073742336,r.Y,r.Y,[]),e.ab(1073742336,w.n,w.n,[[2,w.t],[2,w.m]]),e.ab(1073742336,b.a,b.a,[]),e.ab(1073742336,t,t,[]),e.ab(256,s.m,"XSRF-TOKEN",[]),e.ab(256,s.n,"X-XSRF-TOKEN",[]),e.ab(1024,w.i,function(){return[[{path:"",component:m,pathMatch:"full"}]]},[])])})}}]);