(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{U89g:function(l,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u});var t=e("CcnG"),a=(e("d2mR"),e("Ip0R"),t.Qa({encapsulation:2,styles:[],data:{}}));function u(l){return t.mb(0,[],null,null)}},kejL:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),a=function(){},u=e("gTgE"),i=e("pMnS"),d=e("U89g"),o=e("d2mR"),r=e("O4vx"),c=e("thSD"),b=e("Jovw"),m=e("Ip0R"),h=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.ngOnInit=function(){this.timelinedata=[["Washington",new Date(1789,3,30),new Date(1797,2,4)],["Adams",new Date(1797,2,4),new Date(1801,2,4)],["Jefferson",new Date(1801,2,4),new Date(1809,2,4)]]},l.prototype.onDefaultChartClick=function(l){this.userDataSource=l},l.prototype.onUserDefineLegendClick=function(l){this.userDataSource=l},l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,e=this;this.http.get("assets/data/code/charts/D3Charts/d3timelinechart/d3chart.html",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){e.htmlCode=l}),this.http.get("assets/data/code/charts/D3Charts/d3timelinechart/d3chart.text",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.typeScriptCode=n}),this.http.get("assets/data/code/charts/D3Charts/d3timelinechart/datasource.json",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.dataSourceCode=n}),this.http.get("assets/data/code/charts/D3Charts/d3timelinechart/usersource.json",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.userDataSourceCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),s=e("t/Na"),p=t.Qa({encapsulation:2,styles:[],data:{}});function x(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,d.b,d.a)),t.Ra(2,4243456,null,0,o.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.htmlCode,"html")},null)}function y(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,d.b,d.a)),t.Ra(2,4243456,null,0,o.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.typeScriptCode,"typescript")},null)}function f(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,d.b,d.a)),t.Ra(2,4243456,null,0,o.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.dataSourceCode,"json")},null)}function S(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,135,"amexio-card",[["header","true"]],null,null,null,u.bc,u.k)),t.Ra(1,5488640,null,3,r.j,[t.F],{header:[0,"header"]},null),t.ib(603979776,1,{amexioHeader:1}),t.ib(603979776,2,{amexioBody:1}),t.ib(603979776,3,{amexioFooter:1}),(l()(),t.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,u.mc,u.v)),t.Ra(6,114688,[[1,4]],0,r.B,[],null,null),(l()(),t.kb(-1,0,[" D3 Timeline Chart "])),(l()(),t.Sa(8,0,null,1,127,"amexio-body",[],null,null,null,u.Vb,u.e)),t.Ra(9,114688,[[2,4]],0,r.d,[],null,null),(l()(),t.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["An D3 Timeline chart that is rendered within the browser using SVG .Displays tips when hovering over points."])),(l()(),t.Sa(12,0,null,0,123,"amexio-tab-view",[],null,null,null,u.xc,u.G)),t.Ra(13,5488640,null,2,r.R,[t.F,t.k,t.F],null,null),t.ib(603979776,4,{queryTabs:1}),t.ib(603979776,5,{queryAction:1}),(l()(),t.Sa(16,0,null,1,39,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,u.yc,u.H)),t.Ra(17,114688,[[4,4]],0,r.S,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t.Sa(18,0,null,0,37,"amexio-row",[],null,null,null,u.tc,u.C)),t.Ra(19,1163264,null,0,r.N,[],null,null),(l()(),t.Sa(20,0,null,0,35,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),t.Ra(21,114688,null,0,r.m,[],{size:[0,"size"]},null),(l()(),t.Sa(22,0,null,0,15,"amexio-row",[],null,null,null,u.tc,u.C)),t.Ra(23,1163264,null,0,r.N,[],null,null),(l()(),t.Sa(24,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),t.Ra(25,114688,null,0,r.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),t.Sa(26,0,null,0,11,"amexio-card",[],null,null,null,u.bc,u.k)),t.Ra(27,5488640,null,3,r.j,[t.F],{header:[0,"header"],show:[1,"show"]},null),t.ib(603979776,6,{amexioHeader:1}),t.ib(603979776,7,{amexioBody:1}),t.ib(603979776,8,{amexioFooter:1}),(l()(),t.Sa(31,0,null,0,2,"amexio-header",[],null,null,null,u.mc,u.v)),t.Ra(32,114688,[[6,4]],0,r.B,[],null,null),(l()(),t.kb(-1,0,[" D3-timeline chart with UserDefined Color "])),(l()(),t.Sa(34,0,null,1,3,"amexio-body",[],null,null,null,u.Vb,u.e)),t.Ra(35,114688,[[7,4]],0,r.d,[],null,null),(l()(),t.Sa(36,0,null,0,1,"amexio-d3-chart-timeline",[],null,[[null,"onChartClick"],[null,"onLegendClick"]],function(l,n,e){var t=!0,a=l.component;return"onChartClick"===n&&(t=!1!==a.onDefaultChartClick(e)&&t),"onLegendClick"===n&&(t=!1!==a.onUserDefineLegendClick(e)&&t),t},c.B,c.n)),t.Ra(37,114688,null,0,b.r,[b.i,b.j],{data:[0,"data"],title:[1,"title"],labelflag:[2,"labelflag"]},{onLegendClick:"onLegendClick",onChartClick:"onChartClick"}),(l()(),t.Sa(38,0,null,0,17,"amexio-row",[],null,null,null,u.tc,u.C)),t.Ra(39,1163264,null,0,r.N,[],null,null),(l()(),t.Sa(40,0,null,0,15,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),t.Ra(41,114688,null,0,r.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),t.Sa(42,0,null,0,13,"amexio-card",[["header","true"]],null,null,null,u.bc,u.k)),t.Ra(43,5488640,null,3,r.j,[t.F],{header:[0,"header"]},null),t.ib(603979776,9,{amexioHeader:1}),t.ib(603979776,10,{amexioBody:1}),t.ib(603979776,11,{amexioFooter:1}),(l()(),t.Sa(47,0,null,0,2,"amexio-header",[],null,null,null,u.mc,u.v)),t.Ra(48,114688,[[9,4]],0,r.B,[],null,null),(l()(),t.kb(-1,0,[" Click On Legend/Click on Chart "])),(l()(),t.Sa(50,0,null,1,5,"amexio-body",[],null,null,null,u.Vb,u.e)),t.Ra(51,114688,[[10,4]],0,r.d,[],null,null),(l()(),t.Sa(52,0,null,0,3,"pre",[],null,null,null,null,null)),(l()(),t.Sa(53,0,null,null,2,"code",[],null,null,null,null,null)),(l()(),t.kb(54,null,["",""])),t.eb(0,m.g,[]),(l()(),t.Sa(56,0,null,1,56,"amexio-tab",[["title","API Reference"]],null,null,null,u.yc,u.H)),t.Ra(57,114688,[[4,4]],0,r.S,[],{title:[0,"title"]},null),(l()(),t.Sa(58,0,null,0,22,"amexio-datagrid",[["title","D3-Timeline-Chart Properties </amexio-d3-chart-timeline>"]],null,null,null,u.Od,u.xb)),t.Ra(59,1294336,null,1,r.mc,[t.l,r.Qa,t.i,t.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,12,{columnRef:1}),(l()(),t.Sa(61,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),t.Ra(62,49152,[[12,4]],2,r.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,13,{headerTemplate:0}),t.ib(335544320,14,{bodyTemplate:0}),(l()(),t.Sa(65,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),t.Ra(66,49152,[[12,4]],2,r.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,15,{headerTemplate:0}),t.ib(335544320,16,{bodyTemplate:0}),(l()(),t.Sa(69,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),t.Ra(70,49152,[[12,4]],2,r.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,17,{headerTemplate:0}),t.ib(335544320,18,{bodyTemplate:0}),(l()(),t.Sa(73,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),t.Ra(74,49152,[[12,4]],2,r.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,19,{headerTemplate:0}),t.ib(335544320,20,{bodyTemplate:0}),(l()(),t.Sa(77,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),t.Ra(78,49152,[[12,4]],2,r.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,21,{headerTemplate:0}),t.ib(335544320,22,{bodyTemplate:0}),(l()(),t.Sa(81,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Sa(82,0,null,0,14,"amexio-datagrid",[["title","Chart Event </amexio-d3-chart-timeline>"]],null,null,null,u.Od,u.xb)),t.Ra(83,1294336,null,1,r.mc,[t.l,r.Qa,t.i,t.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,23,{columnRef:1}),(l()(),t.Sa(85,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),t.Ra(86,49152,[[23,4]],2,r.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,24,{headerTemplate:0}),t.ib(335544320,25,{bodyTemplate:0}),(l()(),t.Sa(89,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),t.Ra(90,49152,[[23,4]],2,r.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,26,{headerTemplate:0}),t.ib(335544320,27,{bodyTemplate:0}),(l()(),t.Sa(93,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),t.Ra(94,49152,[[23,4]],2,r.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,28,{headerTemplate:0}),t.ib(335544320,29,{bodyTemplate:0}),(l()(),t.Sa(97,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Sa(98,0,null,0,14,"amexio-datagrid",[["title","Legend Event <amexio-d3-chart-timeline>"]],null,null,null,u.Od,u.xb)),t.Ra(99,1294336,null,1,r.mc,[t.l,r.Qa,t.i,t.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,30,{columnRef:1}),(l()(),t.Sa(101,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),t.Ra(102,49152,[[30,4]],2,r.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,31,{headerTemplate:0}),t.ib(335544320,32,{bodyTemplate:0}),(l()(),t.Sa(105,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),t.Ra(106,49152,[[30,4]],2,r.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,33,{headerTemplate:0}),t.ib(335544320,34,{bodyTemplate:0}),(l()(),t.Sa(109,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),t.Ra(110,49152,[[30,4]],2,r.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,35,{headerTemplate:0}),t.ib(335544320,36,{bodyTemplate:0}),(l()(),t.Sa(113,0,null,1,17,"amexio-tab",[["title","Source"]],null,null,null,u.yc,u.H)),t.Ra(114,114688,[[4,4]],0,r.S,[],{title:[0,"title"]},null),(l()(),t.Sa(115,0,null,0,15,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),t.Sa(116,0,null,null,14,"amexio-vertical-tab-view",[],null,null,null,u.Ac,u.J)),t.Ra(117,5357568,null,1,r.W,[t.F],null,null),t.ib(603979776,37,{queryTabs:1}),(l()(),t.Sa(119,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,u.yc,u.H)),t.Ra(120,114688,[[37,4]],0,r.S,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t.Ja(16777216,null,0,1,null,x)),t.Ra(122,16384,null,0,m.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Sa(123,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,u.yc,u.H)),t.Ra(124,114688,[[37,4]],0,r.S,[],{title:[0,"title"]},null),(l()(),t.Ja(16777216,null,0,1,null,y)),t.Ra(126,16384,null,0,m.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Sa(127,0,null,0,3,"amexio-tab",[["title","Data Source"]],null,null,null,u.yc,u.H)),t.Ra(128,114688,[[37,4]],0,r.S,[],{title:[0,"title"]},null),(l()(),t.Ja(16777216,null,0,1,null,f)),t.Ra(130,16384,null,0,m.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Sa(131,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,u.yc,u.H)),t.Ra(132,114688,[[4,4]],0,r.S,[],{title:[0,"title"]},null),(l()(),t.Sa(133,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Amexio Sandbox"])),(l()(),t.kb(-1,0,[" Work in Progress "]))],function(l,n){var e=n.component;l(n,1,0,"true"),l(n,6,0),l(n,9,0),l(n,13,0),l(n,17,0,"Demo","true"),l(n,19,0),l(n,21,0,12),l(n,23,0),l(n,25,0,!0,12),l(n,27,0,!0,"true"),l(n,32,0),l(n,35,0),l(n,37,0,e.timelinedata,"Presidentship Duration",!0),l(n,39,0),l(n,41,0,!0,12),l(n,43,0,"true"),l(n,48,0),l(n,51,0),l(n,57,0,"API Reference"),l(n,59,0,"D3-Timeline-Chart Properties </amexio-d3-chart-timeline>","assets/apireference/charts/d3charts/d3timelinechart.json","get","properties",!1,!1),l(n,62,0,"Name","name",!1,"string",15),l(n,66,0,"version","version",!1,"string",15),l(n,70,0,"Type","type",!1,"string",15),l(n,74,0,"Default","default",!1,"string",15),l(n,78,0,"Description","description",!1,"string",40),l(n,83,0,"Chart Event </amexio-d3-chart-timeline>","assets/apireference/charts/d3charts/d3timelinechart.json","get","chartevent",!1,!1),l(n,86,0,"Name","name",!1,"string",15),l(n,90,0,"version","version",!1,"string",15),l(n,94,0,"Description","description",!1,"string",55),l(n,99,0,"Legend Event <amexio-d3-chart-timeline>","assets/apireference/charts/d3charts/d3timelinechart.json","get","legend",!1,!1),l(n,102,0,"Name","name",!1,"string",15),l(n,106,0,"version","version",!1,"string",15),l(n,110,0,"Description","description",!1,"string",55),l(n,114,0,"Source"),l(n,117,0),l(n,120,0,"HTML",!0),l(n,122,0,e.htmlCode),l(n,124,0,"Type Script"),l(n,126,0,e.typeScriptCode),l(n,128,0,"Data Source"),l(n,130,0,e.dataSourceCode),l(n,132,0,"Live")},function(l,n){var e=n.component;l(n,20,0,t.cb(n,21).role),l(n,24,0,t.cb(n,25).role),l(n,40,0,t.cb(n,41).role),l(n,54,0,t.lb(n,54,0,t.cb(n,55).transform(e.userDataSource)))})}var g=t.Oa("amexio-d3-chart-timeline-demo",h,function(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,1,"amexio-d3-chart-timeline-demo",[],null,null,null,S,p)),t.Ra(1,114688,null,0,h,[s.c],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),R=e("gIcY"),C=e("ZYCi");e.d(n,"D3TimelineChartDemoModuleNgFactory",function(){return w});var w=t.Pa(a,[],function(l){return t.Za([t.ab(512,t.k,t.Ea,[[8,[u.a,i.a,g]],[3,t.k],t.z]),t.ab(4608,m.o,m.n,[t.w,[2,m.x]]),t.ab(4608,R.G,R.G,[]),t.ab(4608,s.i,s.o,[m.d,t.D,s.m]),t.ab(4608,s.p,s.p,[s.i,s.n]),t.ab(5120,s.a,function(l){return[l]},[s.p]),t.ab(4608,s.l,s.l,[]),t.ab(6144,s.j,null,[s.l]),t.ab(4608,s.h,s.h,[s.j]),t.ab(6144,s.b,null,[s.h]),t.ab(4608,s.f,s.k,[s.b,t.s]),t.ab(4608,s.c,s.c,[s.f]),t.ab(4608,r.Qa,r.Qa,[s.c]),t.ab(4608,r.ab,r.ab,[t.D]),t.ab(4608,r.jb,r.jb,[]),t.ab(4608,r.A,r.A,[]),t.ab(4608,r.Db,r.Db,[]),t.ab(4608,R.f,R.f,[]),t.ab(4608,b.j,b.j,[t.D]),t.ab(1073742336,m.c,m.c,[]),t.ab(1073742336,R.D,R.D,[]),t.ab(1073742336,R.l,R.l,[]),t.ab(1073742336,s.e,s.e,[]),t.ab(1073742336,s.d,s.d,[]),t.ab(1073742336,o.b,o.b,[]),t.ab(1073742336,r.C,r.C,[]),t.ab(1073742336,r.x,r.x,[]),t.ab(1073742336,r.F,r.F,[]),t.ab(1073742336,r.H,r.H,[]),t.ab(1073742336,R.z,R.z,[]),t.ab(1073742336,r.K,r.K,[]),t.ab(1073742336,r.p,r.p,[]),t.ab(1073742336,r.Y,r.Y,[]),t.ab(1073742336,C.n,C.n,[[2,C.t],[2,C.m]]),t.ab(1073742336,b.a,b.a,[]),t.ab(1073742336,a,a,[]),t.ab(256,s.m,"XSRF-TOKEN",[]),t.ab(256,s.n,"X-XSRF-TOKEN",[]),t.ab(1024,C.i,function(){return[[{path:"",component:h,pathMatch:"full"}]]},[])])})}}]);