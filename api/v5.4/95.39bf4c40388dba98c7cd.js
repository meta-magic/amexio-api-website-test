(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{"0VIB":function(l,n,a){"use strict";a.r(n);var t=a("CcnG"),e=function(){},u=a("gTgE"),i=a("pMnS"),o=a("U89g"),d=a("d2mR"),c=a("O4vx"),s=a("Ip0R"),b=function(){function l(l){this.http=l,this.clickMsgArray=[],this.getHtmlAndTypeScriptCode(),this.user=!1,this.shop=!0,this.payment=!1,this.confirmation=!1}return l.prototype.stepBlockClick=function(l){"User"==l.label?(this.showMsg("Step 1 User"),this.updateFlag(!0,!1,!1,!1)):"Shop"==l.label?(this.showMsg("Step 2 Shop"),this.updateFlag(!1,!0,!1,!1)):"Payment"==l.label?(this.updateFlag(!1,!1,!0,!1),this.showMsg("Step 3 Payment")):"Confirmation"==l.label&&(this.showMsg("Step 4 Confirmation"),this.updateFlag(!1,!1,!1,!0))},l.prototype.updateFlag=function(l,n,a,t){this.user=l,this.shop=n,this.payment=a,this.confirmation=t},l.prototype.showMsg=function(l){this.clickMsgArray.length>=1?(this.clickMsgArray=[],this.clickMsgArray.push(l)):this.clickMsgArray.push(l)},l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,a=this;this.http.get("assets/data/code/layout/steps/steps_icon.html").subscribe(function(n){l=n.text()},function(l){},function(){a.htmlCode=l}),this.http.get("assets/data/code/layout/steps/steps.text").subscribe(function(l){n=l.text()},function(l){},function(){a.typeScriptCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push("Code Copied")):this.copyMsgArray.push("Code Copied")},l}(),p=a("sE5F"),r=t.Qa({encapsulation:2,styles:[],data:{}});function m(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),t.Ra(2,4243456,null,0,d.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.htmlCode,"html")},null)}function h(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),t.Ra(2,4243456,null,0,d.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.typeScriptCode,"typescript")},null)}function x(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,123,"amexio-card",[["header","true"]],null,null,null,u.bc,u.k)),t.Ra(1,5488640,null,3,c.j,[t.F],{header:[0,"header"]},null),t.ib(603979776,1,{amexioHeader:1}),t.ib(603979776,2,{amexioBody:1}),t.ib(603979776,3,{amexioFooter:1}),(l()(),t.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,u.mc,u.v)),t.Ra(6,114688,[[1,4]],0,c.B,[],null,null),(l()(),t.kb(-1,0,[" Step Box Icon "])),(l()(),t.Sa(8,0,null,1,115,"amexio-body",[],null,null,null,u.Vb,u.e)),t.Ra(9,114688,[[2,4]],0,c.d,[],null,null),(l()(),t.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["Step-box component is an indicator for the steps in a workflow."])),(l()(),t.Sa(12,0,null,0,111,"amexio-tab-view",[],null,null,null,u.xc,u.G)),t.Ra(13,5488640,null,2,c.R,[t.F,t.k,t.F],null,null),t.ib(603979776,4,{queryTabs:1}),t.ib(603979776,5,{queryAction:1}),(l()(),t.Sa(16,0,null,1,37,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,u.yc,u.H)),t.Ra(17,114688,[[4,4]],0,c.S,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t.Sa(18,0,null,0,17,"amexio-row",[],null,null,null,u.tc,u.C)),t.Ra(19,1163264,null,0,c.N,[],null,null),(l()(),t.Sa(20,0,null,0,15,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,u.dc,u.m)),t.Ra(21,114688,null,0,c.m,[],{size:[0,"size"]},null),(l()(),t.Sa(22,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),t.Sa(23,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["Step box"])),(l()(),t.Sa(25,0,null,0,10,"amexio-steps",[],null,null,null,u.vc,u.E)),t.Ra(26,1097728,null,1,c.P,[],{icon:[0,"icon"]},null),t.ib(603979776,6,{stepBlocks:1}),(l()(),t.Sa(28,0,null,null,1,"amexio-step-block",[],null,null,null,u.id,u.Ra)),t.Ra(29,114688,[[6,4]],0,c.tb,[],{active:[0,"active"],label:[1,"label"],icon:[2,"icon"]},null),(l()(),t.Sa(30,0,null,null,1,"amexio-step-block",[],null,null,null,u.id,u.Ra)),t.Ra(31,114688,[[6,4]],0,c.tb,[],{active:[0,"active"],label:[1,"label"],icon:[2,"icon"]},null),(l()(),t.Sa(32,0,null,null,1,"amexio-step-block",[],null,null,null,u.id,u.Ra)),t.Ra(33,114688,[[6,4]],0,c.tb,[],{active:[0,"active"],label:[1,"label"],icon:[2,"icon"]},null),(l()(),t.Sa(34,0,null,null,1,"amexio-step-block",[],null,null,null,u.id,u.Ra)),t.Ra(35,114688,[[6,4]],0,c.tb,[],{active:[0,"active"],label:[1,"label"],icon:[2,"icon"]},null),(l()(),t.Sa(36,0,null,0,17,"amexio-row",[],null,null,null,u.tc,u.C)),t.Ra(37,1163264,null,0,c.N,[],null,null),(l()(),t.Sa(38,0,null,0,15,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,u.dc,u.m)),t.Ra(39,114688,null,0,c.m,[],{size:[0,"size"]},null),(l()(),t.Sa(40,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),t.Sa(41,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["Step box with clickabel"])),(l()(),t.Sa(43,0,null,0,10,"amexio-steps",[],null,[[null,"onClick"]],function(l,n,a){var t=!0;return"onClick"===n&&(t=!1!==l.component.stepBlockClick(a)&&t),t},u.vc,u.E)),t.Ra(44,1097728,null,1,c.P,[],{icon:[0,"icon"],block:[1,"block"]},{onClick:"onClick"}),t.ib(603979776,7,{stepBlocks:1}),(l()(),t.Sa(46,0,null,null,1,"amexio-step-block",[],null,null,null,u.id,u.Ra)),t.Ra(47,114688,[[7,4]],0,c.tb,[],{active:[0,"active"],label:[1,"label"],icon:[2,"icon"]},null),(l()(),t.Sa(48,0,null,null,1,"amexio-step-block",[],null,null,null,u.id,u.Ra)),t.Ra(49,114688,[[7,4]],0,c.tb,[],{active:[0,"active"],label:[1,"label"],icon:[2,"icon"]},null),(l()(),t.Sa(50,0,null,null,1,"amexio-step-block",[],null,null,null,u.id,u.Ra)),t.Ra(51,114688,[[7,4]],0,c.tb,[],{active:[0,"active"],label:[1,"label"],icon:[2,"icon"]},null),(l()(),t.Sa(52,0,null,null,1,"amexio-step-block",[],null,null,null,u.id,u.Ra)),t.Ra(53,114688,[[7,4]],0,c.tb,[],{active:[0,"active"],label:[1,"label"],icon:[2,"icon"]},null),(l()(),t.Sa(54,0,null,1,50,"amexio-tab",[["title","API Reference"]],null,null,null,u.yc,u.H)),t.Ra(55,114688,[[4,4]],0,c.S,[],{title:[0,"title"]},null),(l()(),t.Sa(56,0,null,0,18,"amexio-datagrid",[["title","Properties <amexio-step>"]],null,null,null,u.Od,u.xb)),t.Ra(57,1294336,null,1,c.mc,[t.l,c.Qa,t.i,t.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,8,{columnRef:1}),(l()(),t.Sa(59,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),t.Ra(60,49152,[[8,4]],2,c.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,9,{headerTemplate:0}),t.ib(335544320,10,{bodyTemplate:0}),(l()(),t.Sa(63,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),t.Ra(64,49152,[[8,4]],2,c.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,11,{headerTemplate:0}),t.ib(335544320,12,{bodyTemplate:0}),(l()(),t.Sa(67,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),t.Ra(68,49152,[[8,4]],2,c.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,13,{headerTemplate:0}),t.ib(335544320,14,{bodyTemplate:0}),(l()(),t.Sa(71,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),t.Ra(72,49152,[[8,4]],2,c.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,15,{headerTemplate:0}),t.ib(335544320,16,{bodyTemplate:0}),(l()(),t.Sa(75,0,null,0,18,"amexio-datagrid",[["title","Properties <amexio-step-block>"]],null,null,null,u.Od,u.xb)),t.Ra(76,1294336,null,1,c.mc,[t.l,c.Qa,t.i,t.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,17,{columnRef:1}),(l()(),t.Sa(78,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),t.Ra(79,49152,[[17,4]],2,c.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,18,{headerTemplate:0}),t.ib(335544320,19,{bodyTemplate:0}),(l()(),t.Sa(82,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),t.Ra(83,49152,[[17,4]],2,c.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,20,{headerTemplate:0}),t.ib(335544320,21,{bodyTemplate:0}),(l()(),t.Sa(86,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),t.Ra(87,49152,[[17,4]],2,c.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,22,{headerTemplate:0}),t.ib(335544320,23,{bodyTemplate:0}),(l()(),t.Sa(90,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),t.Ra(91,49152,[[17,4]],2,c.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,24,{headerTemplate:0}),t.ib(335544320,25,{bodyTemplate:0}),(l()(),t.Sa(94,0,null,0,10,"amexio-datagrid",[["title","Events"]],null,null,null,u.Od,u.xb)),t.Ra(95,1294336,null,1,c.mc,[t.l,c.Qa,t.i,t.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,26,{columnRef:1}),(l()(),t.Sa(97,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),t.Ra(98,49152,[[26,4]],2,c.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,27,{headerTemplate:0}),t.ib(335544320,28,{bodyTemplate:0}),(l()(),t.Sa(101,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),t.Ra(102,49152,[[26,4]],2,c.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,29,{headerTemplate:0}),t.ib(335544320,30,{bodyTemplate:0}),(l()(),t.Sa(105,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,u.yc,u.H)),t.Ra(106,114688,[[4,4]],0,c.S,[],{title:[0,"title"]},null),(l()(),t.Sa(107,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),t.Sa(108,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,u.Ac,u.J)),t.Ra(109,5357568,null,1,c.W,[t.F],null,null),t.ib(603979776,31,{queryTabs:1}),(l()(),t.Sa(111,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,u.yc,u.H)),t.Ra(112,114688,[[31,4]],0,c.S,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t.Ja(16777216,null,0,1,null,m)),t.Ra(114,16384,null,0,s.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Sa(115,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,u.yc,u.H)),t.Ra(116,114688,[[31,4]],0,c.S,[],{title:[0,"title"]},null),(l()(),t.Ja(16777216,null,0,1,null,h)),t.Ra(118,16384,null,0,s.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Sa(119,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,u.yc,u.H)),t.Ra(120,114688,[[4,4]],0,c.S,[],{title:[0,"title"]},null),(l()(),t.Sa(121,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Amexio Sandbox"])),(l()(),t.Sa(123,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-stepboxicon?embed=1&file=app/panels/stepboxicon/stepboxicon.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(l()(),t.Sa(124,0,null,null,2,"amexio-notification",[["auto-dismiss-msg","true"],["auto-dismiss-msg-interval","1000"],["horizontal-position","right"],["vertical-position","top"]],null,[["window","keyup.esc"]],function(l,n,a){var e=!0;return"window:keyup.esc"===n&&(e=!1!==t.cb(l,125).keyEvent(a)&&e),e},u.pc,u.y)),t.Ra(125,114688,null,1,c.I,[t.i],{messageData:[0,"messageData"],verticalposition:[1,"verticalposition"],horizontalposition:[2,"horizontalposition"],autodismissmsg:[3,"autodismissmsg"],autodismissmsginterval:[4,"autodismissmsginterval"]},null),t.ib(335544320,32,{notificationTemplate:0})],function(l,n){var a=n.component;l(n,1,0,"true"),l(n,6,0),l(n,9,0),l(n,13,0),l(n,17,0,"Demo","true"),l(n,19,0),l(n,21,0,"12"),l(n,26,0,!0),l(n,29,0,!0,"User","fa fa-user"),l(n,31,0,!1,"Address","fa fa-address-card"),l(n,33,0,!1,"Shop","fa fa-shopping-cart"),l(n,35,0,!1,"Payment","fa fa-cc-visa"),l(n,37,0),l(n,39,0,"12"),l(n,44,0,!0,!0),l(n,47,0,a.user,"User","fa fa-user"),l(n,49,0,a.shop,"Shop","fa fa-address-card"),l(n,51,0,a.payment,"Payment","fa fa-shopping-cart"),l(n,53,0,a.confirmation,"Confirmation","fa fa-cc-visa"),l(n,55,0,"API Reference"),l(n,57,0,"Properties <amexio-step>","assets/apireference/layout/steps/step.json","get","properties",!1,!1),l(n,60,0,"Name","name",!1,"string",15),l(n,64,0,"Type","type",!1,"string",10),l(n,68,0,"Default","default",!1,"string",10),l(n,72,0,"Description","description",!1,"string",65),l(n,76,0,"Properties <amexio-step-block>","assets/apireference/layout/steps/step-block.json","get","properties",!1,!1),l(n,79,0,"Name","name",!1,"string",15),l(n,83,0,"Type","type",!1,"string",10),l(n,87,0,"Default","default",!1,"string",10),l(n,91,0,"Description","description",!1,"string",65),l(n,95,0,"Events","assets/apireference/layout/steps/step.json","get","events",!1,!1),l(n,98,0,"Name","name",!1,"string",15),l(n,102,0,"Description","description",!1,"string",65),l(n,106,0,"Source"),l(n,109,0),l(n,112,0,"HTML",!0),l(n,114,0,a.htmlCode),l(n,116,0,"Type Script"),l(n,118,0,a.typeScriptCode),l(n,120,0,"Live"),l(n,125,0,a.clickMsgArray,"top","right","true","1000")},function(l,n){l(n,20,0,t.cb(n,21).role),l(n,38,0,t.cb(n,39).role)})}var y=t.Oa("stepbox-icon-demo",b,function(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,1,"stepbox-icon-demo",[],null,null,null,x,r)),t.Ra(1,49152,null,0,b,[p.d],null,null)],null,null)},{},{},[]),f=a("gIcY"),S=a("t/Na"),g=a("ZYCi");a.d(n,"StepBoxIconDemoModuleNgFactory",function(){return R});var R=t.Pa(e,[],function(l){return t.Za([t.ab(512,t.k,t.Ea,[[8,[u.a,i.a,y]],[3,t.k],t.z]),t.ab(4608,s.o,s.n,[t.w,[2,s.x]]),t.ab(4608,f.G,f.G,[]),t.ab(4608,p.c,p.c,[]),t.ab(4608,p.g,p.b,[]),t.ab(5120,p.i,p.j,[]),t.ab(4608,p.h,p.h,[p.c,p.g,p.i]),t.ab(4608,p.f,p.a,[]),t.ab(5120,p.d,p.k,[p.h,p.f]),t.ab(4608,S.i,S.o,[s.d,t.D,S.m]),t.ab(4608,S.p,S.p,[S.i,S.n]),t.ab(5120,S.a,function(l){return[l]},[S.p]),t.ab(4608,S.l,S.l,[]),t.ab(6144,S.j,null,[S.l]),t.ab(4608,S.h,S.h,[S.j]),t.ab(6144,S.b,null,[S.h]),t.ab(4608,S.f,S.k,[S.b,t.s]),t.ab(4608,S.c,S.c,[S.f]),t.ab(4608,c.Qa,c.Qa,[S.c]),t.ab(4608,c.ab,c.ab,[t.D]),t.ab(4608,c.jb,c.jb,[]),t.ab(4608,c.A,c.A,[]),t.ab(4608,c.Db,c.Db,[]),t.ab(4608,f.f,f.f,[]),t.ab(1073742336,s.c,s.c,[]),t.ab(1073742336,f.D,f.D,[]),t.ab(1073742336,f.l,f.l,[]),t.ab(1073742336,p.e,p.e,[]),t.ab(1073742336,d.b,d.b,[]),t.ab(1073742336,S.e,S.e,[]),t.ab(1073742336,S.d,S.d,[]),t.ab(1073742336,c.C,c.C,[]),t.ab(1073742336,c.x,c.x,[]),t.ab(1073742336,c.F,c.F,[]),t.ab(1073742336,c.H,c.H,[]),t.ab(1073742336,f.z,f.z,[]),t.ab(1073742336,c.K,c.K,[]),t.ab(1073742336,c.p,c.p,[]),t.ab(1073742336,c.Y,c.Y,[]),t.ab(1073742336,g.n,g.n,[[2,g.t],[2,g.m]]),t.ab(1073742336,e,e,[]),t.ab(256,S.m,"XSRF-TOKEN",[]),t.ab(256,S.n,"X-XSRF-TOKEN",[]),t.ab(1024,g.i,function(){return[[{path:"",component:b,pathMatch:"full"}]]},[])])})}}]);