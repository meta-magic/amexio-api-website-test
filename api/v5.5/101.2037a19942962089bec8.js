(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{j4UJ:function(l,e,t){"use strict";t.r(e);var a=t("CcnG"),n=function(){},u=t("gTgE"),i=t("pMnS"),d=t("U89g"),b=t("d2mR"),o=t("O4vx"),r=t("Ip0R"),c=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,e,t=this;this.http.get("assets/data/code/layout/tab/verticaltab/tab.html").subscribe(function(e){l=e.text()},function(l){},function(){t.htmlCode=l}),this.http.get("assets/data/code/layout/tab/verticaltab/tab.text").subscribe(function(l){e=l.text()},function(l){},function(){t.typeScriptCode=e})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),m=t("sE5F"),p=a.Qa({encapsulation:2,styles:[],data:{}});function s(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,d.b,d.a)),a.Ra(2,4243456,null,0,b.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,e){l(e,2,0,e.component.htmlCode,"html")},null)}function h(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,d.b,d.a)),a.Ra(2,4243456,null,0,b.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,e){l(e,2,0,e.component.typeScriptCode,"typescript")},null)}function x(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,108,"amexio-card",[["header","true"]],null,null,null,u.jc,u.k)),a.Ra(1,7585792,null,3,o.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,1,{amexioHeader:1}),a.ib(603979776,2,{amexioBody:1}),a.ib(603979776,3,{amexioFooter:1}),(l()(),a.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,u.vc,u.w)),a.Ra(6,114688,[[1,4]],0,o.C,[],null,null),(l()(),a.kb(-1,0,[" Left Aligned Vertical Tab "])),(l()(),a.Sa(8,0,null,1,100,"amexio-body",[],null,null,null,u.dc,u.e)),a.Ra(9,114688,[[2,4]],0,o.d,[],null,null),(l()(),a.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),a.kb(-1,null,["Left Aligned Vertical Tab Component for Angular Apps with multiple configurations such as Tab, Icon support"])),(l()(),a.Sa(12,0,null,0,96,"amexio-tab-view",[],null,null,null,u.Gc,u.H)),a.Ra(13,5488640,null,2,o.S,[a.F,a.k,a.F],null,null),a.ib(603979776,4,{queryTabs:1}),a.ib(603979776,5,{queryAction:1}),(l()(),a.Sa(16,0,null,1,16,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,u.Hc,u.I)),a.Ra(17,114688,[[4,4]],0,o.T,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),a.Sa(18,0,null,0,14,"amexio-vertical-tab-view",[],null,null,null,u.Jc,u.K)),a.Ra(19,5357568,null,1,o.X,[a.F,a.k],null,null),a.ib(603979776,6,{queryTabs:1}),(l()(),a.Sa(21,0,null,0,2,"amexio-tab",[["title","Personal"]],null,null,null,u.Hc,u.I)),a.Ra(22,114688,[[6,4]],0,o.T,[],{title:[0,"title"],active:[1,"active"],icon:[2,"icon"]},null),(l()(),a.kb(-1,0,[" Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry."])),(l()(),a.Sa(24,0,null,0,2,"amexio-tab",[["title","Work"]],null,null,null,u.Hc,u.I)),a.Ra(25,114688,[[6,4]],0,o.T,[],{title:[0,"title"],icon:[1,"icon"]},null),(l()(),a.kb(-1,0,[" Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. "])),(l()(),a.Sa(27,0,null,0,2,"amexio-tab",[["title","Team"]],null,null,null,u.Hc,u.I)),a.Ra(28,114688,[[6,4]],0,o.T,[],{title:[0,"title"],icon:[1,"icon"]},null),(l()(),a.kb(-1,0,[" Team Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis dis parturient montes,nascetur ridiculus mus. "])),(l()(),a.Sa(30,0,null,0,2,"amexio-tab",[["title","Disabled"]],null,null,null,u.Hc,u.I)),a.Ra(31,114688,[[6,4]],0,o.T,[],{title:[0,"title"],disabled:[1,"disabled"],icon:[2,"icon"]},null),(l()(),a.kb(-1,0,[" Team Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis dis parturient montes,nascetur ridiculus mus. "])),(l()(),a.Sa(33,0,null,1,56,"amexio-tab",[["title","API Reference"]],null,null,null,u.Hc,u.I)),a.Ra(34,114688,[[4,4]],0,o.T,[],{title:[0,"title"]},null),(l()(),a.Sa(35,0,null,0,22,"amexio-datagrid",[["title","Tab Properties <amexio-tab>"]],null,null,null,u.de,u.Eb)),a.Ra(36,5488640,null,1,o.Dc,[a.l,o.Ta,a.i,a.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,7,{columnRef:1}),(l()(),a.Sa(38,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),a.Ra(39,49152,[[7,4]],2,o.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,8,{headerTemplate:0}),a.ib(335544320,9,{bodyTemplate:0}),(l()(),a.Sa(42,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),a.Ra(43,49152,[[7,4]],2,o.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,10,{headerTemplate:0}),a.ib(335544320,11,{bodyTemplate:0}),(l()(),a.Sa(46,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),a.Ra(47,49152,[[7,4]],2,o.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,12,{headerTemplate:0}),a.ib(335544320,13,{bodyTemplate:0}),(l()(),a.Sa(50,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),a.Ra(51,49152,[[7,4]],2,o.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,14,{headerTemplate:0}),a.ib(335544320,15,{bodyTemplate:0}),(l()(),a.Sa(54,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),a.Ra(55,49152,[[7,4]],2,o.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,16,{headerTemplate:0}),a.ib(335544320,17,{bodyTemplate:0}),(l()(),a.Sa(58,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),a.Sa(59,0,null,0,18,"amexio-datagrid",[["title","Vertical Tab Properties <amexio-vertical-tab-view >"]],null,null,null,u.de,u.Eb)),a.Ra(60,5488640,null,1,o.Dc,[a.l,o.Ta,a.i,a.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,18,{columnRef:1}),(l()(),a.Sa(62,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),a.Ra(63,49152,[[18,4]],2,o.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,19,{headerTemplate:0}),a.ib(335544320,20,{bodyTemplate:0}),(l()(),a.Sa(66,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),a.Ra(67,49152,[[18,4]],2,o.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,21,{headerTemplate:0}),a.ib(335544320,22,{bodyTemplate:0}),(l()(),a.Sa(70,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),a.Ra(71,49152,[[18,4]],2,o.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,23,{headerTemplate:0}),a.ib(335544320,24,{bodyTemplate:0}),(l()(),a.Sa(74,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),a.Ra(75,49152,[[18,4]],2,o.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,25,{headerTemplate:0}),a.ib(335544320,26,{bodyTemplate:0}),(l()(),a.Sa(78,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),a.Sa(79,0,null,0,10,"amexio-datagrid",[["title","Tab Events"]],null,null,null,u.de,u.Eb)),a.Ra(80,5488640,null,1,o.Dc,[a.l,o.Ta,a.i,a.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,27,{columnRef:1}),(l()(),a.Sa(82,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),a.Ra(83,49152,[[27,4]],2,o.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,28,{headerTemplate:0}),a.ib(335544320,29,{bodyTemplate:0}),(l()(),a.Sa(86,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),a.Ra(87,49152,[[27,4]],2,o.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,30,{headerTemplate:0}),a.ib(335544320,31,{bodyTemplate:0}),(l()(),a.Sa(90,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,u.Hc,u.I)),a.Ra(91,114688,[[4,4]],0,o.T,[],{title:[0,"title"]},null),(l()(),a.Sa(92,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),a.Sa(93,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,u.Jc,u.K)),a.Ra(94,5357568,null,1,o.X,[a.F,a.k],null,null),a.ib(603979776,32,{queryTabs:1}),(l()(),a.Sa(96,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,u.Hc,u.I)),a.Ra(97,114688,[[32,4]],0,o.T,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),a.Ja(16777216,null,0,1,null,s)),a.Ra(99,16384,null,0,r.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.Sa(100,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,u.Hc,u.I)),a.Ra(101,114688,[[32,4]],0,o.T,[],{title:[0,"title"]},null),(l()(),a.Ja(16777216,null,0,1,null,h)),a.Ra(103,16384,null,0,r.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.Sa(104,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,u.Hc,u.I)),a.Ra(105,114688,[[4,4]],0,o.T,[],{title:[0,"title"]},null),(l()(),a.Sa(106,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),a.kb(-1,null,["Amexio Sandbox"])),(l()(),a.Sa(108,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-left-aligned-vertical-tab?embed=1&file=app/tabs/leftverticaltab/leftverticaltab.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(l,e){var t=e.component;l(e,1,0,"true"),l(e,6,0),l(e,9,0),l(e,13,0),l(e,17,0,"Demo","true"),l(e,19,0),l(e,22,0,"Personal",!0,"fa fa-user-circle"),l(e,25,0,"Work","fa fa-building"),l(e,28,0,"Team","fa fa-users"),l(e,31,0,"Disabled",!0,"fa fa-snowflake"),l(e,34,0,"API Reference"),l(e,36,0,"Tab Properties <amexio-tab>","assets/apireference/layout/tab/tab.json","get","properties",!1,!1),l(e,39,0,"Name","name",!1,"string",15),l(e,43,0,"Version","version",!1,"string",10),l(e,47,0,"Type","type",!1,"string",10),l(e,51,0,"Default","default",!1,"string",10),l(e,55,0,"Description","description",!1,"string",65),l(e,60,0,"Vertical Tab Properties <amexio-vertical-tab-view >","assets/apireference/layout/tab/vertical-tab/basictab.json","get","properties",!1,!1),l(e,63,0,"Name","name",!1,"string",15),l(e,67,0,"Type","type",!1,"string",10),l(e,71,0,"Default","default",!1,"string",10),l(e,75,0,"Description","description",!1,"string",65),l(e,80,0,"Tab Events","assets/apireference/layout/tab/vertical-tab/basictab.json","get","events",!1,!1),l(e,83,0,"Name","name",!1,"string",20),l(e,87,0,"Description","description",!1,"string",80),l(e,91,0,"Source"),l(e,94,0),l(e,97,0,"HTML",!0),l(e,99,0,t.htmlCode),l(e,101,0,"Type Script"),l(e,103,0,t.typeScriptCode),l(e,105,0,"Live")},null)}var f=a.Oa("vertical-tab-demo",c,function(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,1,"vertical-tab-demo",[],null,null,null,x,p)),a.Ra(1,49152,null,0,c,[m.d],null,null)],null,null)},{},{},[]),y=t("gIcY"),T=t("t/Na"),g=t("ZYCi");t.d(e,"VerticalTabDemoModuleNgFactory",function(){return S});var S=a.Pa(n,[],function(l){return a.Za([a.ab(512,a.k,a.Ea,[[8,[u.a,i.a,f]],[3,a.k],a.z]),a.ab(4608,r.o,r.n,[a.w,[2,r.x]]),a.ab(4608,y.G,y.G,[]),a.ab(4608,m.c,m.c,[]),a.ab(4608,m.g,m.b,[]),a.ab(5120,m.i,m.j,[]),a.ab(4608,m.h,m.h,[m.c,m.g,m.i]),a.ab(4608,m.f,m.a,[]),a.ab(5120,m.d,m.k,[m.h,m.f]),a.ab(4608,T.i,T.o,[r.d,a.D,T.m]),a.ab(4608,T.p,T.p,[T.i,T.n]),a.ab(5120,T.a,function(l){return[l]},[T.p]),a.ab(4608,T.l,T.l,[]),a.ab(6144,T.j,null,[T.l]),a.ab(4608,T.h,T.h,[T.j]),a.ab(6144,T.b,null,[T.h]),a.ab(4608,T.f,T.k,[T.b,a.s]),a.ab(4608,T.c,T.c,[T.f]),a.ab(4608,o.Ta,o.Ta,[T.c]),a.ab(4608,o.ob,o.ob,[]),a.ab(4608,o.db,o.db,[a.D]),a.ab(4608,o.B,o.B,[]),a.ab(4608,o.Pb,o.Pb,[]),a.ab(4608,o.xb,o.xb,[]),a.ab(4608,y.f,y.f,[]),a.ab(4608,o.jb,o.jb,[]),a.ab(1073742336,r.c,r.c,[]),a.ab(1073742336,y.D,y.D,[]),a.ab(1073742336,y.l,y.l,[]),a.ab(1073742336,m.e,m.e,[]),a.ab(1073742336,b.b,b.b,[]),a.ab(1073742336,T.e,T.e,[]),a.ab(1073742336,T.d,T.d,[]),a.ab(1073742336,o.Eb,o.Eb,[]),a.ab(1073742336,o.ec,o.ec,[]),a.ab(1073742336,o.D,o.D,[]),a.ab(1073742336,o.x,o.x,[]),a.ab(1073742336,o.G,o.G,[]),a.ab(1073742336,o.I,o.I,[]),a.ab(1073742336,y.z,y.z,[]),a.ab(1073742336,o.L,o.L,[]),a.ab(1073742336,o.p,o.p,[]),a.ab(1073742336,o.Aa,o.Aa,[]),a.ab(1073742336,g.n,g.n,[[2,g.t],[2,g.m]]),a.ab(1073742336,n,n,[]),a.ab(256,T.m,"XSRF-TOKEN",[]),a.ab(256,T.n,"X-XSRF-TOKEN",[]),a.ab(1024,g.i,function(){return[[{path:"",component:c,pathMatch:"full"}]]},[])])})}}]);