(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{U89g:function(l,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u});var t=e("CcnG"),a=(e("d2mR"),e("Ip0R"),t.Qa({encapsulation:2,styles:[],data:{}}));function u(l){return t.mb(0,[],null,null)}},lAKZ:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),a=function(){},u=e("gTgE"),i=e("pMnS"),o=e("U89g"),d=e("d2mR"),r=e("O4vx"),c=e("thSD"),b=e("Jovw"),m=e("Ip0R"),s=function(){function l(l){this.http=l,this.multiAreaData=[],this.getHtmlAndTypeScriptCode()}return l.prototype.ngOnInit=function(){this.multiAreaData=[["date","index","open","close","high"],["2014",58.13,610,234,100],["2015",53.98,626,356,150],["2016",99,543,456,200],["2017",130.28,443,556,250],["2018",58.13,610,245,300],["2019",53.98,626,345,350],["2020",99,543,556,400],["2021",130.28,443,443,500]]},l.prototype.onMultiAreaLegendClick=function(l){this.userDataSource=l},l.prototype.onMultiAreaChartClick=function(l){this.userDataSource=l},l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,e=this;this.http.get("assets/data/code/charts/D3Charts/d3multiareachart/d3chart.html",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){e.htmlCode=l}),this.http.get("assets/data/code/charts/D3Charts/d3multiareachart/d3chart.text",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.typeScriptCode=n}),this.http.get("assets/data/code/charts/D3Charts/d3multiareachart/datasource.json",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.dataSourceCode=n}),this.http.get("assets/data/code/charts/D3Charts/d3multiareachart/usersource.json",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.userDataSourceCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),h=e("t/Na"),p=t.Qa({encapsulation:2,styles:[],data:{}});function x(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),t.Ra(2,4243456,null,0,d.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.htmlCode,"html")},null)}function f(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),t.Ra(2,4243456,null,0,d.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.typeScriptCode,"typescript")},null)}function y(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),t.Ra(2,4243456,null,0,d.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.dataSourceCode,"json")},null)}function S(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,131,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(l,n,e){var a=!0;return"document:click"===n&&(a=!1!==t.cb(l,1).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==t.cb(l,1).onscroll()&&a),a},u.Tb,u.i)),t.Ra(1,5357568,null,3,r.h,[],{header:[0,"header"]},null),t.ib(603979776,1,{amexioHeader:1}),t.ib(603979776,2,{amexioBody:1}),t.ib(603979776,3,{amexioFooter:1}),(l()(),t.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,u.cc,u.r)),t.Ra(6,114688,[[1,4]],0,r.v,[],null,null),(l()(),t.kb(-1,0,[" D3 multi-area Chart "])),(l()(),t.Sa(8,0,null,1,123,"amexio-body",[],null,null,null,u.Pb,u.e)),t.Ra(9,114688,[[2,4]],0,r.d,[],null,null),(l()(),t.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["An D3 multi-area chart that is rendered within the browser using SVG .Displays tips when hovering over points."])),(l()(),t.Sa(12,16777216,null,0,119,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,n,e){var a=!0;return"document:click"===n&&(a=!1!==t.cb(l,13).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==t.cb(l,13).onscroll()&&a),a},u.nc,u.C)),t.Ra(13,5357568,null,2,r.L,[t.F,t.k,t.R],null,null),t.ib(603979776,4,{queryTabs:1}),t.ib(603979776,5,{queryAction:1}),(l()(),t.Sa(16,0,null,1,37,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,u.oc,u.D)),t.Ra(17,114688,[[4,4]],0,r.M,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t.Sa(18,0,null,0,35,"amexio-row",[],null,null,null,u.jc,u.y)),t.Ra(19,1163264,null,0,r.H,[],null,null),(l()(),t.Sa(20,0,null,0,33,"amexio-column",[],[[1,"class",0]],null,null,u.Vb,u.k)),t.Ra(21,114688,null,0,r.k,[],{size:[0,"size"]},null),(l()(),t.Sa(22,0,null,0,31,"amexio-row",[],null,null,null,u.jc,u.y)),t.Ra(23,1163264,null,0,r.H,[],null,null),(l()(),t.Sa(24,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,u.Vb,u.k)),t.Ra(25,114688,null,0,r.k,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),t.Sa(26,0,null,0,11,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(l,n,e){var a=!0;return"document:click"===n&&(a=!1!==t.cb(l,27).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==t.cb(l,27).onscroll()&&a),a},u.Tb,u.i)),t.Ra(27,5357568,null,3,r.h,[],{header:[0,"header"],show:[1,"show"]},null),t.ib(603979776,6,{amexioHeader:1}),t.ib(603979776,7,{amexioBody:1}),t.ib(603979776,8,{amexioFooter:1}),(l()(),t.Sa(31,0,null,0,2,"amexio-header",[],null,null,null,u.cc,u.r)),t.Ra(32,114688,[[6,4]],0,r.v,[],null,null),(l()(),t.kb(-1,0,[" D3-multi-area Chart with default Colors "])),(l()(),t.Sa(34,0,null,1,3,"amexio-body",[],null,null,null,u.Pb,u.e)),t.Ra(35,114688,[[7,4]],0,r.d,[],null,null),(l()(),t.Sa(36,0,null,0,1,"amexio-d3-chart-multiarea",[],null,[[null,"onLegendClick"],[null,"onChartClick"]],function(l,n,e){var t=!0,a=l.component;return"onLegendClick"===n&&(t=!1!==a.onMultiAreaLegendClick(e)&&t),"onChartClick"===n&&(t=!1!==a.onMultiAreaChartClick(e)&&t),t},c.v,c.k)),t.Ra(37,114688,null,0,b.n,[b.i],{data:[0,"data"],title:[1,"title"]},{onLegendClick:"onLegendClick",onChartClick:"onChartClick"}),(l()(),t.Sa(38,0,null,0,15,"amexio-column",[],[[1,"class",0]],null,null,u.Vb,u.k)),t.Ra(39,114688,null,0,r.k,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),t.Sa(40,0,null,0,13,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(l,n,e){var a=!0;return"document:click"===n&&(a=!1!==t.cb(l,41).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==t.cb(l,41).onscroll()&&a),a},u.Tb,u.i)),t.Ra(41,5357568,null,3,r.h,[],{header:[0,"header"]},null),t.ib(603979776,9,{amexioHeader:1}),t.ib(603979776,10,{amexioBody:1}),t.ib(603979776,11,{amexioFooter:1}),(l()(),t.Sa(45,0,null,0,2,"amexio-header",[],null,null,null,u.cc,u.r)),t.Ra(46,114688,[[9,4]],0,r.v,[],null,null),(l()(),t.kb(-1,0,[" Click On Legend/Click on Chart "])),(l()(),t.Sa(48,0,null,1,5,"amexio-body",[],null,null,null,u.Pb,u.e)),t.Ra(49,114688,[[10,4]],0,r.d,[],null,null),(l()(),t.Sa(50,0,null,0,3,"pre",[],null,null,null,null,null)),(l()(),t.Sa(51,0,null,null,2,"code",[],null,null,null,null,null)),(l()(),t.kb(52,null,["",""])),t.eb(0,m.f,[]),(l()(),t.Sa(54,0,null,1,56,"amexio-tab",[["title","API Reference"]],null,null,null,u.oc,u.D)),t.Ra(55,114688,[[4,4]],0,r.M,[],{title:[0,"title"]},null),(l()(),t.Sa(56,0,null,0,22,"amexio-datagrid",[["title","D3-multi-area-Chart Properties <amexio-d3-chart-multiarea>"]],null,[["document","scroll"],["document","click"]],function(l,n,e){var a=!0;return"document:scroll"===n&&(a=!1!==t.cb(l,57).onscroll()&&a),"document:click"===n&&(a=!1!==t.cb(l,57).onclick()&&a),a},u.vd,u.kb)),t.Ra(57,1163264,null,1,r.Rb,[t.l,r.Ka,t.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,12,{columnRef:1}),(l()(),t.Sa(59,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.xd,u.mb)),t.Ra(60,49152,[[12,4]],2,r.Tb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,13,{headerTemplate:0}),t.ib(335544320,14,{bodyTemplate:0}),(l()(),t.Sa(63,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.xd,u.mb)),t.Ra(64,49152,[[12,4]],2,r.Tb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,15,{headerTemplate:0}),t.ib(335544320,16,{bodyTemplate:0}),(l()(),t.Sa(67,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.xd,u.mb)),t.Ra(68,49152,[[12,4]],2,r.Tb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,17,{headerTemplate:0}),t.ib(335544320,18,{bodyTemplate:0}),(l()(),t.Sa(71,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.xd,u.mb)),t.Ra(72,49152,[[12,4]],2,r.Tb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,19,{headerTemplate:0}),t.ib(335544320,20,{bodyTemplate:0}),(l()(),t.Sa(75,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.xd,u.mb)),t.Ra(76,49152,[[12,4]],2,r.Tb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,21,{headerTemplate:0}),t.ib(335544320,22,{bodyTemplate:0}),(l()(),t.Sa(79,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Sa(80,0,null,0,14,"amexio-datagrid",[["title","Legend Event <amexio-d3-chart-multiarea>"]],null,[["document","scroll"],["document","click"]],function(l,n,e){var a=!0;return"document:scroll"===n&&(a=!1!==t.cb(l,81).onscroll()&&a),"document:click"===n&&(a=!1!==t.cb(l,81).onclick()&&a),a},u.vd,u.kb)),t.Ra(81,1163264,null,1,r.Rb,[t.l,r.Ka,t.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,23,{columnRef:1}),(l()(),t.Sa(83,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.xd,u.mb)),t.Ra(84,49152,[[23,4]],2,r.Tb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,24,{headerTemplate:0}),t.ib(335544320,25,{bodyTemplate:0}),(l()(),t.Sa(87,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.xd,u.mb)),t.Ra(88,49152,[[23,4]],2,r.Tb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,26,{headerTemplate:0}),t.ib(335544320,27,{bodyTemplate:0}),(l()(),t.Sa(91,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.xd,u.mb)),t.Ra(92,49152,[[23,4]],2,r.Tb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,28,{headerTemplate:0}),t.ib(335544320,29,{bodyTemplate:0}),(l()(),t.Sa(95,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Sa(96,0,null,0,14,"amexio-datagrid",[["title","Chart Event <amexio-d3-chart-multiarea>"]],null,[["document","scroll"],["document","click"]],function(l,n,e){var a=!0;return"document:scroll"===n&&(a=!1!==t.cb(l,97).onscroll()&&a),"document:click"===n&&(a=!1!==t.cb(l,97).onclick()&&a),a},u.vd,u.kb)),t.Ra(97,1163264,null,1,r.Rb,[t.l,r.Ka,t.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,30,{columnRef:1}),(l()(),t.Sa(99,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.xd,u.mb)),t.Ra(100,49152,[[30,4]],2,r.Tb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,31,{headerTemplate:0}),t.ib(335544320,32,{bodyTemplate:0}),(l()(),t.Sa(103,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.xd,u.mb)),t.Ra(104,49152,[[30,4]],2,r.Tb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,33,{headerTemplate:0}),t.ib(335544320,34,{bodyTemplate:0}),(l()(),t.Sa(107,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.xd,u.mb)),t.Ra(108,49152,[[30,4]],2,r.Tb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,35,{headerTemplate:0}),t.ib(335544320,36,{bodyTemplate:0}),(l()(),t.Sa(111,0,null,1,17,"amexio-tab",[["title","Source"]],null,null,null,u.oc,u.D)),t.Ra(112,114688,[[4,4]],0,r.M,[],{title:[0,"title"]},null),(l()(),t.Sa(113,0,null,0,15,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),t.Sa(114,0,null,null,14,"amexio-vertical-tab-view",[],null,null,null,u.qc,u.F)),t.Ra(115,5357568,null,1,r.Q,[t.F],null,null),t.ib(603979776,37,{queryTabs:1}),(l()(),t.Sa(117,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,u.oc,u.D)),t.Ra(118,114688,[[37,4]],0,r.M,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t.Ja(16777216,null,0,1,null,x)),t.Ra(120,16384,null,0,m.l,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Sa(121,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,u.oc,u.D)),t.Ra(122,114688,[[37,4]],0,r.M,[],{title:[0,"title"]},null),(l()(),t.Ja(16777216,null,0,1,null,f)),t.Ra(124,16384,null,0,m.l,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Sa(125,0,null,0,3,"amexio-tab",[["title","Data Source"]],null,null,null,u.oc,u.D)),t.Ra(126,114688,[[37,4]],0,r.M,[],{title:[0,"title"]},null),(l()(),t.Ja(16777216,null,0,1,null,y)),t.Ra(128,16384,null,0,m.l,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Sa(129,0,null,1,2,"amexio-tab",[["title","Live"]],null,null,null,u.oc,u.D)),t.Ra(130,114688,[[4,4]],0,r.M,[],{title:[0,"title"]},null),(l()(),t.kb(-1,0,[" Work in Progress "]))],function(l,n){var e=n.component;l(n,1,0,"true"),l(n,6,0),l(n,9,0),l(n,13,0),l(n,17,0,"Demo","true"),l(n,19,0),l(n,21,0,12),l(n,23,0),l(n,25,0,!0,8),l(n,27,0,!0,"true"),l(n,32,0),l(n,35,0),l(n,37,0,e.multiAreaData,"Stock Market Information"),l(n,39,0,!0,4),l(n,41,0,"true"),l(n,46,0),l(n,49,0),l(n,55,0,"API Reference"),l(n,57,0,"D3-multi-area-Chart Properties <amexio-d3-chart-multiarea>","assets/apireference/charts/d3charts/d3multiareachart.json","get","properties",!1,!1),l(n,60,0,"Name","name",!1,"string",15),l(n,64,0,"version","version",!1,"string",15),l(n,68,0,"Type","type",!1,"string",15),l(n,72,0,"Default","default",!1,"string",15),l(n,76,0,"Description","description",!1,"string",45),l(n,81,0,"Legend Event <amexio-d3-chart-multiarea>","assets/apireference/charts/d3charts/d3multiareachart.json","get","legend",!1,!1),l(n,84,0,"Name","name",!1,"string",15),l(n,88,0,"version","version",!1,"string",15),l(n,92,0,"Description","description",!1,"string",55),l(n,97,0,"Chart Event <amexio-d3-chart-multiarea>","assets/apireference/charts/d3charts/d3multiareachart.json","get","chartevent",!1,!1),l(n,100,0,"Name","name",!1,"string",15),l(n,104,0,"version","version",!1,"string",15),l(n,108,0,"Description","description",!1,"string",55),l(n,112,0,"Source"),l(n,115,0),l(n,118,0,"HTML",!0),l(n,120,0,e.htmlCode),l(n,122,0,"Type Script"),l(n,124,0,e.typeScriptCode),l(n,126,0,"Data Source"),l(n,128,0,e.dataSourceCode),l(n,130,0,"Live")},function(l,n){var e=n.component;l(n,20,0,t.cb(n,21).role),l(n,24,0,t.cb(n,25).role),l(n,38,0,t.cb(n,39).role),l(n,52,0,t.lb(n,52,0,t.cb(n,53).transform(e.userDataSource)))})}var g=t.Oa("amexio-d3-chart-bar-stack-demo",s,function(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,1,"amexio-d3-chart-bar-stack-demo",[],null,null,null,S,p)),t.Ra(1,114688,null,0,s,[h.c],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),k=e("gIcY"),R=e("ZYCi");e.d(n,"D3MultiAreaChartDemoModuleNgFactory",function(){return C});var C=t.Pa(a,[],function(l){return t.Za([t.ab(512,t.k,t.Ea,[[8,[u.a,i.a,g]],[3,t.k],t.z]),t.ab(4608,m.n,m.m,[t.w,[2,m.w]]),t.ab(4608,k.v,k.v,[]),t.ab(4608,h.i,h.o,[m.c,t.D,h.m]),t.ab(4608,h.p,h.p,[h.i,h.n]),t.ab(5120,h.a,function(l){return[l]},[h.p]),t.ab(4608,h.l,h.l,[]),t.ab(6144,h.j,null,[h.l]),t.ab(4608,h.h,h.h,[h.j]),t.ab(6144,h.b,null,[h.h]),t.ab(4608,h.f,h.k,[h.b,t.s]),t.ab(4608,h.c,h.c,[h.f]),t.ab(4608,r.Ka,r.Ka,[h.c]),t.ab(4608,r.Ua,r.Ua,[t.D]),t.ab(4608,r.bb,r.bb,[]),t.ab(4608,r.uc,r.uc,[]),t.ab(1073742336,m.b,m.b,[]),t.ab(1073742336,k.s,k.s,[]),t.ab(1073742336,k.e,k.e,[]),t.ab(1073742336,h.e,h.e,[]),t.ab(1073742336,h.d,h.d,[]),t.ab(1073742336,d.b,d.b,[]),t.ab(1073742336,r.w,r.w,[]),t.ab(1073742336,r.u,r.u,[]),t.ab(1073742336,r.z,r.z,[]),t.ab(1073742336,r.B,r.B,[]),t.ab(1073742336,r.E,r.E,[]),t.ab(1073742336,r.m,r.m,[]),t.ab(1073742336,r.S,r.S,[]),t.ab(1073742336,R.n,R.n,[[2,R.t],[2,R.m]]),t.ab(1073742336,b.a,b.a,[]),t.ab(1073742336,a,a,[]),t.ab(256,h.m,"XSRF-TOKEN",[]),t.ab(256,h.n,"X-XSRF-TOKEN",[]),t.ab(1024,R.i,function(){return[[{path:"",component:s,pathMatch:"full"}]]},[])])})}}]);