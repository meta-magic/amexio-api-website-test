(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{U89g:function(l,a,n){"use strict";n.d(a,"a",function(){return t}),n.d(a,"b",function(){return u});var e=n("CcnG"),t=(n("d2mR"),n("Ip0R"),e.Qa({encapsulation:2,styles:[],data:{}}));function u(l){return e.mb(0,[],null,null)}},lAKZ:function(l,a,n){"use strict";n.r(a);var e=n("CcnG"),t=function(){},u=n("gTgE"),i=n("pMnS"),d=n("U89g"),o=n("d2mR"),r=n("O4vx"),c=n("thSD"),b=n("Jovw"),m=n("Ip0R"),h=function(){function l(l){this.http=l,this.multiAreaData=[],this.getHtmlAndTypeScriptCode()}return l.prototype.ngOnInit=function(){this.multiAreaData=[["date","index","open","close","high"],["2014",58.13,610,234,100],["2015",53.98,626,356,150],["2016",99,543,456,200],["2017",130.28,443,556,250],["2018",58.13,610,245,300],["2019",53.98,626,345,350],["2020",99,543,556,400],["2021",130.28,443,443,500]]},l.prototype.onMultiAreaLegendClick=function(l){this.userDataSource=l},l.prototype.onMultiAreaChartClick=function(l){this.userDataSource=l},l.prototype.getHtmlAndTypeScriptCode=function(){var l,a,n=this;this.http.get("assets/data/code/charts/D3Charts/d3multiareachart/d3chart.html",{responseType:"text"}).subscribe(function(a){l=a},function(l){},function(){n.htmlCode=l}),this.http.get("assets/data/code/charts/D3Charts/d3multiareachart/d3chart.text",{responseType:"text"}).subscribe(function(l){a=l},function(l){},function(){n.typeScriptCode=a}),this.http.get("assets/data/code/charts/D3Charts/d3multiareachart/datasource.json",{responseType:"text"}).subscribe(function(l){a=l},function(l){},function(){n.dataSourceCode=a}),this.http.get("assets/data/code/charts/D3Charts/d3multiareachart/usersource.json",{responseType:"text"}).subscribe(function(l){a=l},function(l){},function(){n.userDataSourceCode=a})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),s=n("t/Na"),p=e.Qa({encapsulation:2,styles:[],data:{}});function x(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.Sa(1,0,null,null,1,"prism-block",[],null,null,null,d.b,d.a)),e.Ra(2,4243456,null,0,o.a,[e.F,e.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,a){l(a,2,0,a.component.htmlCode,"html")},null)}function f(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.Sa(1,0,null,null,1,"prism-block",[],null,null,null,d.b,d.a)),e.Ra(2,4243456,null,0,o.a,[e.F,e.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,a){l(a,2,0,a.component.typeScriptCode,"typescript")},null)}function y(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.Sa(1,0,null,null,1,"prism-block",[],null,null,null,d.b,d.a)),e.Ra(2,4243456,null,0,o.a,[e.F,e.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,a){l(a,2,0,a.component.dataSourceCode,"json")},null)}function S(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,133,"amexio-card",[["header","true"]],null,null,null,u.cc,u.k)),e.Ra(1,5488640,null,3,r.j,[e.F],{header:[0,"header"]},null),e.ib(603979776,1,{amexioHeader:1}),e.ib(603979776,2,{amexioBody:1}),e.ib(603979776,3,{amexioFooter:1}),(l()(),e.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,u.oc,u.w)),e.Ra(6,114688,[[1,4]],0,r.C,[],null,null),(l()(),e.kb(-1,0,[" D3 multi-area Chart "])),(l()(),e.Sa(8,0,null,1,125,"amexio-body",[],null,null,null,u.Wb,u.e)),e.Ra(9,114688,[[2,4]],0,r.d,[],null,null),(l()(),e.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.kb(-1,null,["An D3 multi-area chart that is rendered within the browser using SVG .Displays tips when hovering over points."])),(l()(),e.Sa(12,0,null,0,121,"amexio-tab-view",[],null,null,null,u.zc,u.H)),e.Ra(13,5488640,null,2,r.S,[e.F,e.k,e.F],null,null),e.ib(603979776,4,{queryTabs:1}),e.ib(603979776,5,{queryAction:1}),(l()(),e.Sa(16,0,null,1,37,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,u.Ac,u.I)),e.Ra(17,114688,[[4,4]],0,r.T,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e.Sa(18,0,null,0,35,"amexio-row",[],null,null,null,u.vc,u.D)),e.Ra(19,1163264,null,0,r.O,[],null,null),(l()(),e.Sa(20,0,null,0,33,"amexio-column",[],[[1,"class",0]],null,null,u.ec,u.m)),e.Ra(21,114688,null,0,r.m,[],{size:[0,"size"]},null),(l()(),e.Sa(22,0,null,0,31,"amexio-row",[],null,null,null,u.vc,u.D)),e.Ra(23,1163264,null,0,r.O,[],null,null),(l()(),e.Sa(24,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,u.ec,u.m)),e.Ra(25,114688,null,0,r.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),e.Sa(26,0,null,0,11,"amexio-card",[],null,null,null,u.cc,u.k)),e.Ra(27,5488640,null,3,r.j,[e.F],{header:[0,"header"],show:[1,"show"]},null),e.ib(603979776,6,{amexioHeader:1}),e.ib(603979776,7,{amexioBody:1}),e.ib(603979776,8,{amexioFooter:1}),(l()(),e.Sa(31,0,null,0,2,"amexio-header",[],null,null,null,u.oc,u.w)),e.Ra(32,114688,[[6,4]],0,r.C,[],null,null),(l()(),e.kb(-1,0,[" D3-multi-area Chart with default Colors "])),(l()(),e.Sa(34,0,null,1,3,"amexio-body",[],null,null,null,u.Wb,u.e)),e.Ra(35,114688,[[7,4]],0,r.d,[],null,null),(l()(),e.Sa(36,0,null,0,1,"amexio-d3-chart-multiarea",[],null,[[null,"onLegendClick"],[null,"onChartClick"]],function(l,a,n){var e=!0,t=l.component;return"onLegendClick"===a&&(e=!1!==t.onMultiAreaLegendClick(n)&&e),"onChartClick"===a&&(e=!1!==t.onMultiAreaChartClick(n)&&e),e},c.y,c.k)),e.Ra(37,114688,null,0,b.o,[b.i,b.j],{data:[0,"data"],title:[1,"title"],labelflag:[2,"labelflag"]},{onLegendClick:"onLegendClick",onChartClick:"onChartClick"}),(l()(),e.Sa(38,0,null,0,15,"amexio-column",[],[[1,"class",0]],null,null,u.ec,u.m)),e.Ra(39,114688,null,0,r.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),e.Sa(40,0,null,0,13,"amexio-card",[["header","true"]],null,null,null,u.cc,u.k)),e.Ra(41,5488640,null,3,r.j,[e.F],{header:[0,"header"]},null),e.ib(603979776,9,{amexioHeader:1}),e.ib(603979776,10,{amexioBody:1}),e.ib(603979776,11,{amexioFooter:1}),(l()(),e.Sa(45,0,null,0,2,"amexio-header",[],null,null,null,u.oc,u.w)),e.Ra(46,114688,[[9,4]],0,r.C,[],null,null),(l()(),e.kb(-1,0,[" Click On Legend/Click on Chart "])),(l()(),e.Sa(48,0,null,1,5,"amexio-body",[],null,null,null,u.Wb,u.e)),e.Ra(49,114688,[[10,4]],0,r.d,[],null,null),(l()(),e.Sa(50,0,null,0,3,"pre",[],null,null,null,null,null)),(l()(),e.Sa(51,0,null,null,2,"code",[],null,null,null,null,null)),(l()(),e.kb(52,null,["",""])),e.eb(0,m.g,[]),(l()(),e.Sa(54,0,null,1,56,"amexio-tab",[["title","API Reference"]],null,null,null,u.Ac,u.I)),e.Ra(55,114688,[[4,4]],0,r.T,[],{title:[0,"title"]},null),(l()(),e.Sa(56,0,null,0,22,"amexio-datagrid",[["title","D3-multi-area-Chart Properties <amexio-d3-chart-multiarea>"]],null,null,null,u.Pd,u.xb)),e.Ra(57,1294336,null,1,r.sc,[e.l,r.Sa,e.i,e.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e.ib(603979776,12,{columnRef:1}),(l()(),e.Sa(59,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Qd,u.yb)),e.Ra(60,49152,[[12,4]],2,r.tc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,13,{headerTemplate:0}),e.ib(335544320,14,{bodyTemplate:0}),(l()(),e.Sa(63,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Qd,u.yb)),e.Ra(64,49152,[[12,4]],2,r.tc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,15,{headerTemplate:0}),e.ib(335544320,16,{bodyTemplate:0}),(l()(),e.Sa(67,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Qd,u.yb)),e.Ra(68,49152,[[12,4]],2,r.tc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,17,{headerTemplate:0}),e.ib(335544320,18,{bodyTemplate:0}),(l()(),e.Sa(71,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Qd,u.yb)),e.Ra(72,49152,[[12,4]],2,r.tc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,19,{headerTemplate:0}),e.ib(335544320,20,{bodyTemplate:0}),(l()(),e.Sa(75,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Qd,u.yb)),e.Ra(76,49152,[[12,4]],2,r.tc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,21,{headerTemplate:0}),e.ib(335544320,22,{bodyTemplate:0}),(l()(),e.Sa(79,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(80,0,null,0,14,"amexio-datagrid",[["title","Legend Event <amexio-d3-chart-multiarea>"]],null,null,null,u.Pd,u.xb)),e.Ra(81,1294336,null,1,r.sc,[e.l,r.Sa,e.i,e.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e.ib(603979776,23,{columnRef:1}),(l()(),e.Sa(83,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Qd,u.yb)),e.Ra(84,49152,[[23,4]],2,r.tc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,24,{headerTemplate:0}),e.ib(335544320,25,{bodyTemplate:0}),(l()(),e.Sa(87,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Qd,u.yb)),e.Ra(88,49152,[[23,4]],2,r.tc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,26,{headerTemplate:0}),e.ib(335544320,27,{bodyTemplate:0}),(l()(),e.Sa(91,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Qd,u.yb)),e.Ra(92,49152,[[23,4]],2,r.tc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,28,{headerTemplate:0}),e.ib(335544320,29,{bodyTemplate:0}),(l()(),e.Sa(95,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(96,0,null,0,14,"amexio-datagrid",[["title","Chart Event <amexio-d3-chart-multiarea>"]],null,null,null,u.Pd,u.xb)),e.Ra(97,1294336,null,1,r.sc,[e.l,r.Sa,e.i,e.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e.ib(603979776,30,{columnRef:1}),(l()(),e.Sa(99,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Qd,u.yb)),e.Ra(100,49152,[[30,4]],2,r.tc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,31,{headerTemplate:0}),e.ib(335544320,32,{bodyTemplate:0}),(l()(),e.Sa(103,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Qd,u.yb)),e.Ra(104,49152,[[30,4]],2,r.tc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,33,{headerTemplate:0}),e.ib(335544320,34,{bodyTemplate:0}),(l()(),e.Sa(107,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Qd,u.yb)),e.Ra(108,49152,[[30,4]],2,r.tc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,35,{headerTemplate:0}),e.ib(335544320,36,{bodyTemplate:0}),(l()(),e.Sa(111,0,null,1,17,"amexio-tab",[["title","Source"]],null,null,null,u.Ac,u.I)),e.Ra(112,114688,[[4,4]],0,r.T,[],{title:[0,"title"]},null),(l()(),e.Sa(113,0,null,0,15,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),e.Sa(114,0,null,null,14,"amexio-vertical-tab-view",[],null,null,null,u.Cc,u.K)),e.Ra(115,5357568,null,1,r.X,[e.F,e.k],null,null),e.ib(603979776,37,{queryTabs:1}),(l()(),e.Sa(117,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,u.Ac,u.I)),e.Ra(118,114688,[[37,4]],0,r.T,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e.Ja(16777216,null,0,1,null,x)),e.Ra(120,16384,null,0,m.m,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.Sa(121,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,u.Ac,u.I)),e.Ra(122,114688,[[37,4]],0,r.T,[],{title:[0,"title"]},null),(l()(),e.Ja(16777216,null,0,1,null,f)),e.Ra(124,16384,null,0,m.m,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.Sa(125,0,null,0,3,"amexio-tab",[["title","Data Source"]],null,null,null,u.Ac,u.I)),e.Ra(126,114688,[[37,4]],0,r.T,[],{title:[0,"title"]},null),(l()(),e.Ja(16777216,null,0,1,null,y)),e.Ra(128,16384,null,0,m.m,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.Sa(129,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,u.Ac,u.I)),e.Ra(130,114688,[[4,4]],0,r.T,[],{title:[0,"title"]},null),(l()(),e.Sa(131,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),e.kb(-1,null,["Amexio Sandbox"])),(l()(),e.Sa(133,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-d3-chartmultiarea?embed=1&file=src/app/d3chart/d3linechart/d3linechart.demo.component.html&view=editor"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(l,a){var n=a.component;l(a,1,0,"true"),l(a,6,0),l(a,9,0),l(a,13,0),l(a,17,0,"Demo","true"),l(a,19,0),l(a,21,0,12),l(a,23,0),l(a,25,0,!0,8),l(a,27,0,!0,"true"),l(a,32,0),l(a,35,0),l(a,37,0,n.multiAreaData,"Stock Market Information",!0),l(a,39,0,!0,4),l(a,41,0,"true"),l(a,46,0),l(a,49,0),l(a,55,0,"API Reference"),l(a,57,0,"D3-multi-area-Chart Properties <amexio-d3-chart-multiarea>","assets/apireference/charts/d3charts/d3multiareachart.json","get","properties",!1,!1),l(a,60,0,"Name","name",!1,"string",15),l(a,64,0,"version","version",!1,"string",15),l(a,68,0,"Type","type",!1,"string",15),l(a,72,0,"Default","default",!1,"string",15),l(a,76,0,"Description","description",!1,"string",45),l(a,81,0,"Legend Event <amexio-d3-chart-multiarea>","assets/apireference/charts/d3charts/d3multiareachart.json","get","legend",!1,!1),l(a,84,0,"Name","name",!1,"string",15),l(a,88,0,"version","version",!1,"string",15),l(a,92,0,"Description","description",!1,"string",55),l(a,97,0,"Chart Event <amexio-d3-chart-multiarea>","assets/apireference/charts/d3charts/d3multiareachart.json","get","chartevent",!1,!1),l(a,100,0,"Name","name",!1,"string",15),l(a,104,0,"version","version",!1,"string",15),l(a,108,0,"Description","description",!1,"string",55),l(a,112,0,"Source"),l(a,115,0),l(a,118,0,"HTML",!0),l(a,120,0,n.htmlCode),l(a,122,0,"Type Script"),l(a,124,0,n.typeScriptCode),l(a,126,0,"Data Source"),l(a,128,0,n.dataSourceCode),l(a,130,0,"Live")},function(l,a){var n=a.component;l(a,20,0,e.cb(a,21).role),l(a,24,0,e.cb(a,25).role),l(a,38,0,e.cb(a,39).role),l(a,52,0,e.lb(a,52,0,e.cb(a,53).transform(n.userDataSource)))})}var g=e.Oa("amexio-d3-chart-bar-stack-demo",h,function(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,1,"amexio-d3-chart-bar-stack-demo",[],null,null,null,S,p)),e.Ra(1,114688,null,0,h,[s.c],null,null)],function(l,a){l(a,1,0)},null)},{},{},[]),C=n("gIcY"),R=n("ZYCi");n.d(a,"D3MultiAreaChartDemoModuleNgFactory",function(){return w});var w=e.Pa(t,[],function(l){return e.Za([e.ab(512,e.k,e.Ea,[[8,[u.a,i.a,g]],[3,e.k],e.z]),e.ab(4608,m.o,m.n,[e.w,[2,m.x]]),e.ab(4608,C.G,C.G,[]),e.ab(4608,s.i,s.o,[m.d,e.D,s.m]),e.ab(4608,s.p,s.p,[s.i,s.n]),e.ab(5120,s.a,function(l){return[l]},[s.p]),e.ab(4608,s.l,s.l,[]),e.ab(6144,s.j,null,[s.l]),e.ab(4608,s.h,s.h,[s.j]),e.ab(6144,s.b,null,[s.h]),e.ab(4608,s.f,s.k,[s.b,e.s]),e.ab(4608,s.c,s.c,[s.f]),e.ab(4608,r.Sa,r.Sa,[s.c]),e.ab(4608,r.nb,r.nb,[]),e.ab(4608,r.cb,r.cb,[e.D]),e.ab(4608,r.B,r.B,[]),e.ab(4608,r.Jb,r.Jb,[]),e.ab(4608,C.f,C.f,[]),e.ab(4608,r.ib,r.ib,[]),e.ab(4608,b.j,b.j,[e.D]),e.ab(1073742336,m.c,m.c,[]),e.ab(1073742336,C.D,C.D,[]),e.ab(1073742336,C.l,C.l,[]),e.ab(1073742336,s.e,s.e,[]),e.ab(1073742336,s.d,s.d,[]),e.ab(1073742336,o.b,o.b,[]),e.ab(1073742336,r.Cb,r.Cb,[]),e.ab(1073742336,r.D,r.D,[]),e.ab(1073742336,r.x,r.x,[]),e.ab(1073742336,r.G,r.G,[]),e.ab(1073742336,r.I,r.I,[]),e.ab(1073742336,C.z,C.z,[]),e.ab(1073742336,r.L,r.L,[]),e.ab(1073742336,r.p,r.p,[]),e.ab(1073742336,r.Aa,r.Aa,[]),e.ab(1073742336,R.n,R.n,[[2,R.t],[2,R.m]]),e.ab(1073742336,b.a,b.a,[]),e.ab(1073742336,t,t,[]),e.ab(256,s.m,"XSRF-TOKEN",[]),e.ab(256,s.n,"X-XSRF-TOKEN",[]),e.ab(1024,R.i,function(){return[[{path:"",component:h,pathMatch:"full"}]]},[])])})}}]);