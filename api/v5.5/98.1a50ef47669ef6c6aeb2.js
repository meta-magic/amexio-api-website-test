(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{Uta3:function(l,e,a){"use strict";a.r(e);var n=a("CcnG"),t=function(){},u=a("gTgE"),i=a("pMnS"),o=a("U89g"),d=a("d2mR"),s=a("O4vx"),b=a("Ip0R"),c=function(){function l(l){this.http=l,this.clickMsgArray=[],this.getHtmlAndTypeScriptCode(),this.user=!1,this.shop=!0,this.payment=!1,this.confirmation=!1}return l.prototype.stepBlockClick=function(l){"User"==l.label?(this.showMsg("Step 1 User"),this.updateFlag(!0,!1,!1,!1)):"Shop"==l.label?(this.showMsg("Step 2 Shop"),this.updateFlag(!1,!0,!1,!1)):"Payment"==l.label?(this.showMsg("Step 3 Payment"),this.updateFlag(!1,!1,!0,!1)):"Confirmation"==l.label&&(this.showMsg("Step 4 Confirmation"),this.updateFlag(!1,!1,!1,!0))},l.prototype.updateFlag=function(l,e,a,n){this.user=l,this.shop=e,this.payment=a,this.confirmation=n},l.prototype.showMsg=function(l){this.clickMsgArray.length>=1?(this.clickMsgArray=[],this.clickMsgArray.push(l)):this.clickMsgArray.push(l)},l.prototype.getHtmlAndTypeScriptCode=function(){var l,e,a=this;this.http.get("assets/data/code/layout/steps/steps.html").subscribe(function(e){l=e.text()},function(l){},function(){a.htmlCode=l}),this.http.get("assets/data/code/layout/steps/steps.text").subscribe(function(l){e=l.text()},function(l){},function(){a.typeScriptCode=e})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push("Code Copied")):this.copyMsgArray.push("Code Copied")},l}(),p=a("sE5F"),r=n.Qa({encapsulation:2,styles:[],data:{}});function m(l){return n.mb(0,[(l()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),n.Ra(2,4243456,null,0,d.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,e){l(e,2,0,e.component.htmlCode,"html")},null)}function h(l){return n.mb(0,[(l()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),n.Ra(2,4243456,null,0,d.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,e){l(e,2,0,e.component.typeScriptCode,"typescript")},null)}function x(l){return n.mb(0,[(l()(),n.Sa(0,0,null,null,143,"amexio-card",[["header","true"]],null,null,null,u.jc,u.k)),n.Ra(1,7585792,null,3,s.j,[n.F],{header:[0,"header"]},null),n.ib(603979776,1,{amexioHeader:1}),n.ib(603979776,2,{amexioBody:1}),n.ib(603979776,3,{amexioFooter:1}),(l()(),n.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,u.vc,u.w)),n.Ra(6,114688,[[1,4]],0,s.C,[],null,null),(l()(),n.kb(-1,0,[" Step Box "])),(l()(),n.Sa(8,0,null,1,135,"amexio-body",[],null,null,null,u.dc,u.e)),n.Ra(9,114688,[[2,4]],0,s.d,[],null,null),(l()(),n.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),n.kb(-1,null,["Step-box component is an indicator for the steps in a workflow."])),(l()(),n.Sa(12,0,null,0,131,"amexio-tab-view",[],null,null,null,u.Gc,u.H)),n.Ra(13,5488640,null,2,s.S,[n.F,n.k,n.F],null,null),n.ib(603979776,4,{queryTabs:1}),n.ib(603979776,5,{queryAction:1}),(l()(),n.Sa(16,0,null,1,57,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,u.Hc,u.I)),n.Ra(17,114688,[[4,4]],0,s.T,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),n.Sa(18,0,null,0,17,"amexio-row",[],null,null,null,u.Cc,u.D)),n.Ra(19,1163264,null,0,s.O,[],null,null),(l()(),n.Sa(20,0,null,0,15,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,u.lc,u.m)),n.Ra(21,114688,null,0,s.m,[],{size:[0,"size"]},null),(l()(),n.Sa(22,0,null,0,2,"amexio-label",[],null,null,null,u.Gd,u.hb)),n.Ra(23,114688,null,0,s.Tb,[],{styleClass:[0,"styleClass"]},null),(l()(),n.kb(-1,0,["Step box "])),(l()(),n.Sa(25,0,null,0,10,"amexio-steps",[],null,null,null,u.Ec,u.F)),n.Ra(26,1097728,null,1,s.Q,[],{index:[0,"index"],block:[1,"block"]},null),n.ib(603979776,6,{stepBlocks:1}),(l()(),n.Sa(28,0,null,null,1,"amexio-step-block",[],null,null,null,u.sd,u.Ta)),n.Ra(29,114688,[[6,4]],0,s.zb,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),n.Sa(30,0,null,null,1,"amexio-step-block",[],null,null,null,u.sd,u.Ta)),n.Ra(31,114688,[[6,4]],0,s.zb,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),n.Sa(32,0,null,null,1,"amexio-step-block",[],null,null,null,u.sd,u.Ta)),n.Ra(33,114688,[[6,4]],0,s.zb,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),n.Sa(34,0,null,null,1,"amexio-step-block",[],null,null,null,u.sd,u.Ta)),n.Ra(35,114688,[[6,4]],0,s.zb,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),n.Sa(36,0,null,0,17,"amexio-row",[],null,null,null,u.Cc,u.D)),n.Ra(37,1163264,null,0,s.O,[],null,null),(l()(),n.Sa(38,0,null,0,15,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,u.lc,u.m)),n.Ra(39,114688,null,0,s.m,[],{size:[0,"size"]},null),(l()(),n.Sa(40,0,null,0,2,"amexio-label",[],null,null,null,u.Gd,u.hb)),n.Ra(41,114688,null,0,s.Tb,[],{styleClass:[0,"styleClass"]},null),(l()(),n.kb(-1,0,["Step box with clickabel"])),(l()(),n.Sa(43,0,null,0,10,"amexio-steps",[],null,[[null,"onClick"]],function(l,e,a){var n=!0;return"onClick"===e&&(n=!1!==l.component.stepBlockClick(a)&&n),n},u.Ec,u.F)),n.Ra(44,1097728,null,1,s.Q,[],{index:[0,"index"],block:[1,"block"]},{onClick:"onClick"}),n.ib(603979776,7,{stepBlocks:1}),(l()(),n.Sa(46,0,null,null,1,"amexio-step-block",[],null,null,null,u.sd,u.Ta)),n.Ra(47,114688,[[7,4]],0,s.zb,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),n.Sa(48,0,null,null,1,"amexio-step-block",[],null,null,null,u.sd,u.Ta)),n.Ra(49,114688,[[7,4]],0,s.zb,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),n.Sa(50,0,null,null,1,"amexio-step-block",[],null,null,null,u.sd,u.Ta)),n.Ra(51,114688,[[7,4]],0,s.zb,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),n.Sa(52,0,null,null,1,"amexio-step-block",[],null,null,null,u.sd,u.Ta)),n.Ra(53,114688,[[7,4]],0,s.zb,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),n.Sa(54,0,null,0,19,"amexio-row",[],null,null,null,u.Cc,u.D)),n.Ra(55,1163264,null,0,s.O,[],null,null),(l()(),n.Sa(56,0,null,0,17,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,u.lc,u.m)),n.Ra(57,114688,null,0,s.m,[],{size:[0,"size"]},null),(l()(),n.kb(-1,0,[" index is true for number inside circle "])),(l()(),n.Sa(59,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),n.Sa(60,0,null,0,2,"amexio-label",[],null,null,null,u.Gd,u.hb)),n.Ra(61,114688,null,0,s.Tb,[],{styleClass:[0,"styleClass"]},null),(l()(),n.kb(-1,0,["Step-box index "])),(l()(),n.Sa(63,0,null,0,10,"amexio-steps",[],null,null,null,u.Ec,u.F)),n.Ra(64,1097728,null,1,s.Q,[],{index:[0,"index"]},null),n.ib(603979776,8,{stepBlocks:1}),(l()(),n.Sa(66,0,null,null,1,"amexio-step-block",[],null,null,null,u.sd,u.Ta)),n.Ra(67,114688,[[8,4]],0,s.zb,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),n.Sa(68,0,null,null,1,"amexio-step-block",[],null,null,null,u.sd,u.Ta)),n.Ra(69,114688,[[8,4]],0,s.zb,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),n.Sa(70,0,null,null,1,"amexio-step-block",[],null,null,null,u.sd,u.Ta)),n.Ra(71,114688,[[8,4]],0,s.zb,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),n.Sa(72,0,null,null,1,"amexio-step-block",[],null,null,null,u.sd,u.Ta)),n.Ra(73,114688,[[8,4]],0,s.zb,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),n.Sa(74,0,null,1,50,"amexio-tab",[["title","API Reference"]],null,null,null,u.Hc,u.I)),n.Ra(75,114688,[[4,4]],0,s.T,[],{title:[0,"title"]},null),(l()(),n.Sa(76,0,null,0,18,"amexio-datagrid",[["title","Properties <amexio-steps>"]],null,null,null,u.de,u.Eb)),n.Ra(77,5488640,null,1,s.Dc,[n.l,s.Ta,n.i,n.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),n.ib(603979776,9,{columnRef:1}),(l()(),n.Sa(79,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),n.Ra(80,49152,[[9,4]],2,s.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,10,{headerTemplate:0}),n.ib(335544320,11,{bodyTemplate:0}),(l()(),n.Sa(83,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),n.Ra(84,49152,[[9,4]],2,s.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,12,{headerTemplate:0}),n.ib(335544320,13,{bodyTemplate:0}),(l()(),n.Sa(87,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),n.Ra(88,49152,[[9,4]],2,s.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,14,{headerTemplate:0}),n.ib(335544320,15,{bodyTemplate:0}),(l()(),n.Sa(91,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),n.Ra(92,49152,[[9,4]],2,s.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,16,{headerTemplate:0}),n.ib(335544320,17,{bodyTemplate:0}),(l()(),n.Sa(95,0,null,0,18,"amexio-datagrid",[["title","Properties <amexio-step-block>"]],null,null,null,u.de,u.Eb)),n.Ra(96,5488640,null,1,s.Dc,[n.l,s.Ta,n.i,n.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),n.ib(603979776,18,{columnRef:1}),(l()(),n.Sa(98,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),n.Ra(99,49152,[[18,4]],2,s.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,19,{headerTemplate:0}),n.ib(335544320,20,{bodyTemplate:0}),(l()(),n.Sa(102,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),n.Ra(103,49152,[[18,4]],2,s.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,21,{headerTemplate:0}),n.ib(335544320,22,{bodyTemplate:0}),(l()(),n.Sa(106,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),n.Ra(107,49152,[[18,4]],2,s.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,23,{headerTemplate:0}),n.ib(335544320,24,{bodyTemplate:0}),(l()(),n.Sa(110,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),n.Ra(111,49152,[[18,4]],2,s.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,25,{headerTemplate:0}),n.ib(335544320,26,{bodyTemplate:0}),(l()(),n.Sa(114,0,null,0,10,"amexio-datagrid",[["title","Events"]],null,null,null,u.de,u.Eb)),n.Ra(115,5488640,null,1,s.Dc,[n.l,s.Ta,n.i,n.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),n.ib(603979776,27,{columnRef:1}),(l()(),n.Sa(117,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),n.Ra(118,49152,[[27,4]],2,s.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,28,{headerTemplate:0}),n.ib(335544320,29,{bodyTemplate:0}),(l()(),n.Sa(121,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.fe,u.Gb)),n.Ra(122,49152,[[27,4]],2,s.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,30,{headerTemplate:0}),n.ib(335544320,31,{bodyTemplate:0}),(l()(),n.Sa(125,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,u.Hc,u.I)),n.Ra(126,114688,[[4,4]],0,s.T,[],{title:[0,"title"]},null),(l()(),n.Sa(127,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),n.Sa(128,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,u.Jc,u.K)),n.Ra(129,5357568,null,1,s.X,[n.F,n.k],null,null),n.ib(603979776,32,{queryTabs:1}),(l()(),n.Sa(131,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,u.Hc,u.I)),n.Ra(132,114688,[[32,4]],0,s.T,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),n.Ja(16777216,null,0,1,null,m)),n.Ra(134,16384,null,0,b.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(l()(),n.Sa(135,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,u.Hc,u.I)),n.Ra(136,114688,[[32,4]],0,s.T,[],{title:[0,"title"]},null),(l()(),n.Ja(16777216,null,0,1,null,h)),n.Ra(138,16384,null,0,b.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(l()(),n.Sa(139,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,u.Hc,u.I)),n.Ra(140,114688,[[4,4]],0,s.T,[],{title:[0,"title"]},null),(l()(),n.Sa(141,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),n.kb(-1,null,["Amexio Sandbox"])),(l()(),n.Sa(143,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-stepbox?embed=1&file=app/panels/stepbox/stepbox.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(l()(),n.Sa(144,0,null,null,2,"amexio-notification",[["auto-dismiss-msg","true"],["auto-dismiss-msg-interval","1000"],["horizontal-position","right"],["vertical-position","top"]],null,[["window","keyup.esc"]],function(l,e,a){var t=!0;return"window:keyup.esc"===e&&(t=!1!==n.cb(l,145).keyEvent(a)&&t),t},u.yc,u.z)),n.Ra(145,114688,null,1,s.J,[n.i],{messageData:[0,"messageData"],verticalposition:[1,"verticalposition"],horizontalposition:[2,"horizontalposition"],autodismissmsg:[3,"autodismissmsg"],autodismissmsginterval:[4,"autodismissmsginterval"]},null),n.ib(335544320,33,{notificationTemplate:0})],function(l,e){var a=e.component;l(e,1,0,"true"),l(e,6,0),l(e,9,0),l(e,13,0),l(e,17,0,"Demo","true"),l(e,19,0),l(e,21,0,"12"),l(e,23,0,"medium"),l(e,26,0,!0,!0),l(e,29,0,!0,"User"),l(e,31,0,!1,"Shop"),l(e,33,0,!1,"Payment"),l(e,35,0,!1,"Confirmation"),l(e,37,0),l(e,39,0,"12"),l(e,41,0,"medium"),l(e,44,0,!0,!0),l(e,47,0,a.user,"User"),l(e,49,0,a.shop,"Shop"),l(e,51,0,a.payment,"Payment"),l(e,53,0,a.confirmation,"Confirmation"),l(e,55,0),l(e,57,0,"12"),l(e,61,0,"medium"),l(e,64,0,!0),l(e,67,0,!0,"Step-1"),l(e,69,0,!1,"Step-2"),l(e,71,0,!1,"Step-3"),l(e,73,0,!1,"Step-4"),l(e,75,0,"API Reference"),l(e,77,0,"Properties <amexio-steps>","assets/apireference/layout/steps/step.json","get","properties",!1,!1),l(e,80,0,"Name","name",!1,"string",15),l(e,84,0,"Type","type",!1,"string",10),l(e,88,0,"Default","default",!1,"string",10),l(e,92,0,"Description","description",!1,"string",65),l(e,96,0,"Properties <amexio-step-block>","assets/apireference/layout/steps/step-block.json","get","properties",!1,!1),l(e,99,0,"Name","name",!1,"string",15),l(e,103,0,"Type","type",!1,"string",10),l(e,107,0,"Default","default",!1,"string",10),l(e,111,0,"Description","description",!1,"string",65),l(e,115,0,"Events","assets/apireference/layout/steps/step.json","get","events",!1,!1),l(e,118,0,"Name","name",!1,"string",15),l(e,122,0,"Description","description",!1,"string",65),l(e,126,0,"Source"),l(e,129,0),l(e,132,0,"HTML",!0),l(e,134,0,a.htmlCode),l(e,136,0,"Type Script"),l(e,138,0,a.typeScriptCode),l(e,140,0,"Live"),l(e,145,0,a.clickMsgArray,"top","right","true","1000")},function(l,e){l(e,20,0,n.cb(e,21).role),l(e,38,0,n.cb(e,39).role),l(e,56,0,n.cb(e,57).role)})}var y=n.Oa("step-box",c,function(l){return n.mb(0,[(l()(),n.Sa(0,0,null,null,1,"step-box",[],null,null,null,x,r)),n.Ra(1,49152,null,0,c,[p.d],null,null)],null,null)},{},{},[]),f=a("gIcY"),S=a("t/Na"),g=a("ZYCi");a.d(e,"StepBoxDemoModuleNgFactory",function(){return R});var R=n.Pa(t,[],function(l){return n.Za([n.ab(512,n.k,n.Ea,[[8,[u.a,i.a,y]],[3,n.k],n.z]),n.ab(4608,b.o,b.n,[n.w,[2,b.x]]),n.ab(4608,f.G,f.G,[]),n.ab(4608,p.c,p.c,[]),n.ab(4608,p.g,p.b,[]),n.ab(5120,p.i,p.j,[]),n.ab(4608,p.h,p.h,[p.c,p.g,p.i]),n.ab(4608,p.f,p.a,[]),n.ab(5120,p.d,p.k,[p.h,p.f]),n.ab(4608,S.i,S.o,[b.d,n.D,S.m]),n.ab(4608,S.p,S.p,[S.i,S.n]),n.ab(5120,S.a,function(l){return[l]},[S.p]),n.ab(4608,S.l,S.l,[]),n.ab(6144,S.j,null,[S.l]),n.ab(4608,S.h,S.h,[S.j]),n.ab(6144,S.b,null,[S.h]),n.ab(4608,S.f,S.k,[S.b,n.s]),n.ab(4608,S.c,S.c,[S.f]),n.ab(4608,s.Ta,s.Ta,[S.c]),n.ab(4608,s.ob,s.ob,[]),n.ab(4608,s.db,s.db,[n.D]),n.ab(4608,s.B,s.B,[]),n.ab(4608,s.Pb,s.Pb,[]),n.ab(4608,s.xb,s.xb,[]),n.ab(4608,f.f,f.f,[]),n.ab(4608,s.jb,s.jb,[]),n.ab(1073742336,b.c,b.c,[]),n.ab(1073742336,f.D,f.D,[]),n.ab(1073742336,f.l,f.l,[]),n.ab(1073742336,p.e,p.e,[]),n.ab(1073742336,d.b,d.b,[]),n.ab(1073742336,S.e,S.e,[]),n.ab(1073742336,S.d,S.d,[]),n.ab(1073742336,s.Eb,s.Eb,[]),n.ab(1073742336,s.ec,s.ec,[]),n.ab(1073742336,s.D,s.D,[]),n.ab(1073742336,s.x,s.x,[]),n.ab(1073742336,s.G,s.G,[]),n.ab(1073742336,s.I,s.I,[]),n.ab(1073742336,f.z,f.z,[]),n.ab(1073742336,s.L,s.L,[]),n.ab(1073742336,s.p,s.p,[]),n.ab(1073742336,s.Aa,s.Aa,[]),n.ab(1073742336,g.n,g.n,[[2,g.t],[2,g.m]]),n.ab(1073742336,t,t,[]),n.ab(256,S.m,"XSRF-TOKEN",[]),n.ab(256,S.n,"X-XSRF-TOKEN",[]),n.ab(1024,g.i,function(){return[[{path:"",component:c,pathMatch:"full"}]]},[])])})}}]);