(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{NWud:function(e,l,t){"use strict";t.r(l);var n=t("CcnG"),a=function(){},i=t("gTgE"),o=t("pMnS"),u=t("O4vx"),r=t("U89g"),s=t("d2mR"),d=t("Ip0R"),c=function(){function e(e){this.http=e,this.sampledatachips=[{icon:"fa fa-home",label:"Home",color:"red",badge:4,closable:!0},{icon:"fa fa-download",label:"Download",color:"blue",badge:5,closable:!1},{icon:"fa fa-camera",label:"Camera",color:"green",badge:6,closable:!0},{icon:"fa fa-fire-extinguisher",label:"Fire Extinguisher",color:"yellow",badge:7,closable:!0},{icon:"fa fa-ambulance",label:"Emergency",color:"pink",badge:8,closable:!0}],this.sampledatachip=[{icon:"fa fa-linkedin-square",label:"Linkedin",color:"red",badge:4,closable:!0},{icon:"fa fa-internet-explorer",label:"Internet-Explorer",color:"blue",badge:5,closable:!1},{icon:"fa fa-github",label:"Github",color:"green",badge:6,closable:!0},{icon:"fa fa-twitter",label:"Twitter",color:"yellow",badge:7,closable:!0},{icon:"fa fa-reddit",label:"Reddit",color:"",badge:8,closable:!0}],this.getHtmlAndTypeScriptCode()}return e.prototype.onChipsLabelClick=function(e){this.emitdatachips=e},e.prototype.onChipLabelClick=function(e){this.emitdatachip=e},e.prototype.onCloseClick=function(e){this.emitdatachips=e},e.prototype.getHtmlAndTypeScriptCode=function(){var e,l,t,n=this;this.http.get("assets/data/code/forms/chips/form.html",{responseType:"text"}).subscribe(function(l){e=l},function(e){},function(){n.htmlCode=e}),this.http.get("assets/data/code/forms/chips/form.text",{responseType:"text"}).subscribe(function(e){l=e},function(e){},function(){n.typeScriptCode=l}),this.http.get("assets/data/code/forms/chips/datasource.json",{responseType:"text"}).subscribe(function(e){t=e},function(e){},function(){n.dataSource=t})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e}(),p=t("t/Na"),m=n.Qa({encapsulation:2,styles:[],data:{}});function b(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,3,"amexio-chips",[],null,null,null,i.nd,i.cb)),n.Ra(1,49152,null,0,u.Eb,[],null,null),(e()(),n.Sa(2,0,null,0,1,"amexio-chip",[],null,[[null,"labelClick"],[null,"closeClick"]],function(e,l,t){var n=!0,a=e.component;return"labelClick"===l&&(n=!1!==a.onChipLabelClick(t)&&n),"closeClick"===l&&(n=!1!==a.onCloseClick(t)&&n),n},i.md,i.bb)),n.Ra(3,114688,null,0,u.Db,[],{icon:[0,"icon"],label:[1,"label"],color:[2,"color"],badge:[3,"badge"],closable:[4,"closable"]},{closeClick:"closeClick",labelClick:"labelClick"})],function(e,l){e(l,3,0,l.context.$implicit.icon,l.context.$implicit.label,l.context.$implicit.color,l.context.$implicit.badge,l.context.$implicit.closable)},null)}function h(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,r.b,r.a)),n.Ra(2,4243456,null,0,s.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.htmlCode,"html")},null)}function g(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,r.b,r.a)),n.Ra(2,4243456,null,0,s.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.typeScriptCode,"typescript")},null)}function f(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,r.b,r.a)),n.Ra(2,4243456,null,0,s.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.dataSource,"json")},null)}function y(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,155,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(e,l,t){var a=!0;return"document:click"===l&&(a=!1!==n.cb(e,1).onWindowClick()&&a),"document:scroll"===l&&(a=!1!==n.cb(e,1).onscroll()&&a),a},i.Tb,i.i)),n.Ra(1,5357568,null,3,u.h,[],{header:[0,"header"]},null),n.ib(603979776,1,{amexioHeader:1}),n.ib(603979776,2,{amexioBody:1}),n.ib(603979776,3,{amexioFooter:1}),(e()(),n.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,i.cc,i.r)),n.Ra(6,114688,[[1,4]],0,u.v,[],null,null),(e()(),n.kb(-1,0,[" Chips "])),(e()(),n.Sa(8,0,null,1,147,"amexio-body",[],null,null,null,i.Pb,i.e)),n.Ra(9,114688,[[2,4]],0,u.d,[],null,null),(e()(),n.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),n.kb(-1,null,["Chips allow users to enter information, make selections, filter content, or trigger actions. Chips appear dynamically as a group of multiple interactive elements."])),(e()(),n.Sa(12,16777216,null,0,143,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(e,l,t){var a=!0;return"document:click"===l&&(a=!1!==n.cb(e,13).onWindowClick()&&a),"document:scroll"===l&&(a=!1!==n.cb(e,13).onscroll()&&a),a},i.nc,i.C)),n.Ra(13,5357568,null,2,u.L,[n.F,n.k,n.R],null,null),n.ib(603979776,4,{queryTabs:1}),n.ib(603979776,5,{queryAction:1}),(e()(),n.Sa(16,0,null,1,37,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.oc,i.D)),n.Ra(17,114688,[[4,4]],0,u.M,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),n.Sa(18,0,null,0,35,"amexio-row",[],null,null,null,i.jc,i.y)),n.Ra(19,1163264,null,0,u.H,[],null,null),(e()(),n.Sa(20,0,null,0,33,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,i.Vb,i.k)),n.Ra(21,114688,null,0,u.k,[],{size:[0,"size"]},null),(e()(),n.Sa(22,0,null,0,15,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(e,l,t){var a=!0;return"document:click"===l&&(a=!1!==n.cb(e,23).onWindowClick()&&a),"document:scroll"===l&&(a=!1!==n.cb(e,23).onscroll()&&a),a},i.Tb,i.i)),n.Ra(23,5357568,null,3,u.h,[],{header:[0,"header"]},null),n.ib(603979776,6,{amexioHeader:1}),n.ib(603979776,7,{amexioBody:1}),n.ib(603979776,8,{amexioFooter:1}),(e()(),n.Sa(27,0,null,0,2,"amexio-header",[],null,null,null,i.cc,i.r)),n.Ra(28,114688,[[6,4]],0,u.v,[],null,null),(e()(),n.kb(-1,0,[" Chips with Data Input "])),(e()(),n.Sa(30,0,null,1,7,"amexio-body",[],null,null,null,i.Pb,i.e)),n.Ra(31,114688,[[7,4]],0,u.d,[],null,null),(e()(),n.Sa(32,0,null,0,1,"amexio-chips",[],null,[[null,"selectedchipsData"],[null,"onCloseClick"]],function(e,l,t){var n=!0,a=e.component;return"selectedchipsData"===l&&(n=!1!==a.onChipsLabelClick(t)&&n),"onCloseClick"===l&&(n=!1!==a.onCloseClick(t)&&n),n},i.nd,i.cb)),n.Ra(33,49152,null,0,u.Eb,[],{data:[0,"data"]},{selectedchipsData:"selectedchipsData"}),(e()(),n.Sa(34,0,null,0,3,"pre",[],null,null,null,null,null)),(e()(),n.Sa(35,0,null,null,2,"code",[],null,null,null,null,null)),(e()(),n.kb(36,null,["",""])),n.eb(0,d.f,[]),(e()(),n.Sa(38,0,null,0,15,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(e,l,t){var a=!0;return"document:click"===l&&(a=!1!==n.cb(e,39).onWindowClick()&&a),"document:scroll"===l&&(a=!1!==n.cb(e,39).onscroll()&&a),a},i.Tb,i.i)),n.Ra(39,5357568,null,3,u.h,[],{header:[0,"header"]},null),n.ib(603979776,9,{amexioHeader:1}),n.ib(603979776,10,{amexioBody:1}),n.ib(603979776,11,{amexioFooter:1}),(e()(),n.Sa(43,0,null,0,2,"amexio-header",[],null,null,null,i.cc,i.r)),n.Ra(44,114688,[[9,4]],0,u.v,[],null,null),(e()(),n.kb(-1,0,[" Chip with multiple Inputs "])),(e()(),n.Sa(46,0,null,1,7,"amexio-body",[],null,null,null,i.Pb,i.e)),n.Ra(47,114688,[[10,4]],0,u.d,[],null,null),(e()(),n.Ja(16777216,null,0,1,null,b)),n.Ra(49,278528,null,0,d.k,[n.R,n.O,n.u],{ngForOf:[0,"ngForOf"]},null),(e()(),n.Sa(50,0,null,0,3,"pre",[],null,null,null,null,null)),(e()(),n.Sa(51,0,null,null,2,"code",[],null,null,null,null,null)),(e()(),n.kb(52,null,["",""])),n.eb(0,d.f,[]),(e()(),n.Sa(54,0,null,1,78,"amexio-tab",[["title","API Reference"]],null,null,null,i.oc,i.D)),n.Ra(55,114688,[[4,4]],0,u.M,[],{title:[0,"title"]},null),(e()(),n.Sa(56,0,null,0,22,"amexio-datagrid",[["title","Properties<amexio-chips>"]],null,[["document","scroll"],["document","click"]],function(e,l,t){var a=!0;return"document:scroll"===l&&(a=!1!==n.cb(e,57).onscroll()&&a),"document:click"===l&&(a=!1!==n.cb(e,57).onclick()&&a),a},i.vd,i.kb)),n.Ra(57,1163264,null,1,u.Rb,[n.l,u.Ka,n.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),n.ib(603979776,12,{columnRef:1}),(e()(),n.Sa(59,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.xd,i.mb)),n.Ra(60,49152,[[12,4]],2,u.Tb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,13,{headerTemplate:0}),n.ib(335544320,14,{bodyTemplate:0}),(e()(),n.Sa(63,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.xd,i.mb)),n.Ra(64,49152,[[12,4]],2,u.Tb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,15,{headerTemplate:0}),n.ib(335544320,16,{bodyTemplate:0}),(e()(),n.Sa(67,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.xd,i.mb)),n.Ra(68,49152,[[12,4]],2,u.Tb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,17,{headerTemplate:0}),n.ib(335544320,18,{bodyTemplate:0}),(e()(),n.Sa(71,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.xd,i.mb)),n.Ra(72,49152,[[12,4]],2,u.Tb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,19,{headerTemplate:0}),n.ib(335544320,20,{bodyTemplate:0}),(e()(),n.Sa(75,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.xd,i.mb)),n.Ra(76,49152,[[12,4]],2,u.Tb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,21,{headerTemplate:0}),n.ib(335544320,22,{bodyTemplate:0}),(e()(),n.Sa(79,0,null,0,22,"amexio-datagrid",[["title","Properties<amexio-chip>"]],null,[["document","scroll"],["document","click"]],function(e,l,t){var a=!0;return"document:scroll"===l&&(a=!1!==n.cb(e,80).onscroll()&&a),"document:click"===l&&(a=!1!==n.cb(e,80).onclick()&&a),a},i.vd,i.kb)),n.Ra(80,1163264,null,1,u.Rb,[n.l,u.Ka,n.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),n.ib(603979776,23,{columnRef:1}),(e()(),n.Sa(82,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.xd,i.mb)),n.Ra(83,49152,[[23,4]],2,u.Tb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,24,{headerTemplate:0}),n.ib(335544320,25,{bodyTemplate:0}),(e()(),n.Sa(86,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.xd,i.mb)),n.Ra(87,49152,[[23,4]],2,u.Tb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,26,{headerTemplate:0}),n.ib(335544320,27,{bodyTemplate:0}),(e()(),n.Sa(90,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.xd,i.mb)),n.Ra(91,49152,[[23,4]],2,u.Tb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,28,{headerTemplate:0}),n.ib(335544320,29,{bodyTemplate:0}),(e()(),n.Sa(94,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.xd,i.mb)),n.Ra(95,49152,[[23,4]],2,u.Tb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,30,{headerTemplate:0}),n.ib(335544320,31,{bodyTemplate:0}),(e()(),n.Sa(98,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.xd,i.mb)),n.Ra(99,49152,[[23,4]],2,u.Tb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,32,{headerTemplate:0}),n.ib(335544320,33,{bodyTemplate:0}),(e()(),n.Sa(102,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),n.Sa(103,0,null,0,14,"amexio-datagrid",[["title","Events<amexio-chips>"]],null,[["document","scroll"],["document","click"]],function(e,l,t){var a=!0;return"document:scroll"===l&&(a=!1!==n.cb(e,104).onscroll()&&a),"document:click"===l&&(a=!1!==n.cb(e,104).onclick()&&a),a},i.vd,i.kb)),n.Ra(104,1163264,null,1,u.Rb,[n.l,u.Ka,n.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),n.ib(603979776,34,{columnRef:1}),(e()(),n.Sa(106,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.xd,i.mb)),n.Ra(107,49152,[[34,4]],2,u.Tb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,35,{headerTemplate:0}),n.ib(335544320,36,{bodyTemplate:0}),(e()(),n.Sa(110,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.xd,i.mb)),n.Ra(111,49152,[[34,4]],2,u.Tb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,37,{headerTemplate:0}),n.ib(335544320,38,{bodyTemplate:0}),(e()(),n.Sa(114,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.xd,i.mb)),n.Ra(115,49152,[[34,4]],2,u.Tb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,39,{headerTemplate:0}),n.ib(335544320,40,{bodyTemplate:0}),(e()(),n.Sa(118,0,null,0,14,"amexio-datagrid",[["title","Events<amexio-chip>"]],null,[["document","scroll"],["document","click"]],function(e,l,t){var a=!0;return"document:scroll"===l&&(a=!1!==n.cb(e,119).onscroll()&&a),"document:click"===l&&(a=!1!==n.cb(e,119).onclick()&&a),a},i.vd,i.kb)),n.Ra(119,1163264,null,1,u.Rb,[n.l,u.Ka,n.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),n.ib(603979776,41,{columnRef:1}),(e()(),n.Sa(121,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.xd,i.mb)),n.Ra(122,49152,[[41,4]],2,u.Tb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,42,{headerTemplate:0}),n.ib(335544320,43,{bodyTemplate:0}),(e()(),n.Sa(125,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.xd,i.mb)),n.Ra(126,49152,[[41,4]],2,u.Tb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,44,{headerTemplate:0}),n.ib(335544320,45,{bodyTemplate:0}),(e()(),n.Sa(129,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.xd,i.mb)),n.Ra(130,49152,[[41,4]],2,u.Tb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,46,{headerTemplate:0}),n.ib(335544320,47,{bodyTemplate:0}),(e()(),n.Sa(133,0,null,1,17,"amexio-tab",[["title","Source"]],null,null,null,i.oc,i.D)),n.Ra(134,114688,[[4,4]],0,u.M,[],{title:[0,"title"]},null),(e()(),n.Sa(135,0,null,0,15,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),n.Sa(136,0,null,null,14,"amexio-vertical-tab-view",[],null,null,null,i.qc,i.F)),n.Ra(137,5357568,null,1,u.Q,[n.F],null,null),n.ib(603979776,48,{queryTabs:1}),(e()(),n.Sa(139,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.oc,i.D)),n.Ra(140,114688,[[48,4]],0,u.M,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),n.Ja(16777216,null,0,1,null,h)),n.Ra(142,16384,null,0,d.l,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(e()(),n.Sa(143,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.oc,i.D)),n.Ra(144,114688,[[48,4]],0,u.M,[],{title:[0,"title"]},null),(e()(),n.Ja(16777216,null,0,1,null,g)),n.Ra(146,16384,null,0,d.l,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(e()(),n.Sa(147,0,null,0,3,"amexio-tab",[["title","Data Source"]],null,null,null,i.oc,i.D)),n.Ra(148,114688,[[48,4]],0,u.M,[],{title:[0,"title"]},null),(e()(),n.Ja(16777216,null,0,1,null,f)),n.Ra(150,16384,null,0,d.l,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(e()(),n.Sa(151,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.oc,i.D)),n.Ra(152,114688,[[4,4]],0,u.M,[],{title:[0,"title"]},null),(e()(),n.Sa(153,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),n.kb(-1,null,["Amexio Sandbox"])),(e()(),n.kb(-1,0,[" Work in Progress "]))],function(e,l){var t=l.component;e(l,1,0,"true"),e(l,6,0),e(l,9,0),e(l,13,0),e(l,17,0,"Demo","true"),e(l,19,0),e(l,21,0,"12"),e(l,23,0,"true"),e(l,28,0),e(l,31,0),e(l,33,0,t.sampledatachips),e(l,39,0,"true"),e(l,44,0),e(l,47,0),e(l,49,0,t.sampledatachip),e(l,55,0,"API Reference"),e(l,57,0,"Properties<amexio-chips>","assets/apireference/forms/chips.json","get","properties",!1,!1),e(l,60,0,"Name","name",!1,"string",15),e(l,64,0,"Version","version",!1,"string",15),e(l,68,0,"Type","type",!1,"string",15),e(l,72,0,"Default","default",!1,"string",15),e(l,76,0,"Description","description",!1,"string",45),e(l,80,0,"Properties<amexio-chip>","assets/apireference/forms/chip.json","get","properties",!1,!1),e(l,83,0,"Name","name",!1,"string",15),e(l,87,0,"Version","version",!1,"string",15),e(l,91,0,"Type","type",!1,"string",15),e(l,95,0,"Default","default",!1,"string",15),e(l,99,0,"Description","description",!1,"string",45),e(l,104,0,"Events<amexio-chips>","assets/apireference/forms/chips.json","get","events",!1),e(l,107,0,"Name","name",!1,"string",20),e(l,111,0,"Version","version",!1,"string",15),e(l,115,0,"Description","description",!1,"string",80),e(l,119,0,"Events<amexio-chip>","assets/apireference/forms/chip.json","get","events",!1),e(l,122,0,"Name","name",!1,"string",20),e(l,126,0,"Version","version",!1,"string",15),e(l,130,0,"Description","description",!1,"string",80),e(l,134,0,"Source"),e(l,137,0),e(l,140,0,"HTML",!0),e(l,142,0,t.htmlCode),e(l,144,0,"Type Script"),e(l,146,0,t.typeScriptCode),e(l,148,0,"Data Source"),e(l,150,0,t.dataSource),e(l,152,0,"Live")},function(e,l){var t=l.component;e(l,20,0,n.cb(l,21).role),e(l,36,0,n.lb(l,36,0,n.cb(l,37).transform(t.emitdatachips))),e(l,52,0,n.lb(l,52,0,n.cb(l,53).transform(t.emitdatachip)))})}var x=n.Oa("chips-demo",c,function(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,1,"chips-demo",[],null,null,null,y,m)),n.Ra(1,49152,null,0,c,[p.c],null,null)],null,null)},{},{},[]),k=t("gIcY"),v=t("ZYCi");t.d(l,"ChipsDemoModuleNgFactory",function(){return w});var w=n.Pa(a,[],function(e){return n.Za([n.ab(512,n.k,n.Ea,[[8,[i.a,o.a,x]],[3,n.k],n.z]),n.ab(4608,d.n,d.m,[n.w,[2,d.w]]),n.ab(4608,k.v,k.v,[]),n.ab(4608,p.i,p.o,[d.c,n.D,p.m]),n.ab(4608,p.p,p.p,[p.i,p.n]),n.ab(5120,p.a,function(e){return[e]},[p.p]),n.ab(4608,p.l,p.l,[]),n.ab(6144,p.j,null,[p.l]),n.ab(4608,p.h,p.h,[p.j]),n.ab(6144,p.b,null,[p.h]),n.ab(4608,p.f,p.k,[p.b,n.s]),n.ab(4608,p.c,p.c,[p.f]),n.ab(4608,u.Ka,u.Ka,[p.c]),n.ab(4608,u.Ua,u.Ua,[n.D]),n.ab(4608,u.bb,u.bb,[]),n.ab(4608,u.uc,u.uc,[]),n.ab(1073742336,d.b,d.b,[]),n.ab(1073742336,k.s,k.s,[]),n.ab(1073742336,k.e,k.e,[]),n.ab(1073742336,p.e,p.e,[]),n.ab(1073742336,p.d,p.d,[]),n.ab(1073742336,s.b,s.b,[]),n.ab(1073742336,u.w,u.w,[]),n.ab(1073742336,u.u,u.u,[]),n.ab(1073742336,u.z,u.z,[]),n.ab(1073742336,u.B,u.B,[]),n.ab(1073742336,u.E,u.E,[]),n.ab(1073742336,u.m,u.m,[]),n.ab(1073742336,u.S,u.S,[]),n.ab(1073742336,v.n,v.n,[[2,v.t],[2,v.m]]),n.ab(1073742336,a,a,[]),n.ab(256,p.m,"XSRF-TOKEN",[]),n.ab(256,p.n,"X-XSRF-TOKEN",[]),n.ab(1024,v.i,function(){return[[{path:"",component:c,pathMatch:"full"}]]},[])])})},U89g:function(e,l,t){"use strict";t.d(l,"a",function(){return a}),t.d(l,"b",function(){return i});var n=t("CcnG"),a=(t("d2mR"),t("Ip0R"),n.Qa({encapsulation:2,styles:[],data:{}}));function i(e){return n.mb(0,[],null,null)}},XIHC:function(e,l){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,l,t){"use strict";t.d(l,"a",function(){return n}),t.d(l,"b",function(){return a}),t("wZee"),t("XIHC");var n=function(){function e(e,l){this._renderer=e,this._el=l,this.nativeElement=l.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),a=function(){}},wZee:function(e,l){var t="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},n=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,l=0,n=t.Prism={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++l}),e.__id},clone:function(e,l){var t=n.util.type(e);switch(l=l||{},t){case"Object":if(l[n.util.objId(e)])return l[n.util.objId(e)];var a={};for(var i in l[n.util.objId(e)]=a,e)e.hasOwnProperty(i)&&(a[i]=n.util.clone(e[i],l));return a;case"Array":return l[n.util.objId(e)]?l[n.util.objId(e)]:(a=[],l[n.util.objId(e)]=a,e.forEach(function(e,t){a[t]=n.util.clone(e,l)}),a)}return e}},languages:{extend:function(e,l){var t=n.util.clone(n.languages[e]);for(var a in l)t[a]=l[a];return t},insertBefore:function(e,l,t,a){var i=(a=a||n.languages)[e];if(2==arguments.length){for(var o in t=arguments[1])t.hasOwnProperty(o)&&(i[o]=t[o]);return i}var u={};for(var r in i)if(i.hasOwnProperty(r)){if(r==l)for(var o in t)t.hasOwnProperty(o)&&(u[o]=t[o]);u[r]=i[r]}return n.languages.DFS(n.languages,function(l,t){t===a[e]&&l!=e&&(this[l]=u)}),a[e]=u},DFS:function(e,l,t,a){for(var i in a=a||{},e)e.hasOwnProperty(i)&&(l.call(e,i,e[i],t||i),"Object"!==n.util.type(e[i])||a[n.util.objId(e[i])]?"Array"!==n.util.type(e[i])||a[n.util.objId(e[i])]||(a[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],l,i,a)):(a[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],l,null,a)))}},plugins:{},highlightAll:function(e,l){n.highlightAllUnder(document,e,l)},highlightAllUnder:function(e,l,t){var a={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",a);for(var i,o=a.elements||e.querySelectorAll(a.selector),u=0;i=o[u++];)n.highlightElement(i,!0===l,a.callback)},highlightElement:function(l,a,i){for(var o,u,r=l;r&&!e.test(r.className);)r=r.parentNode;r&&(o=(r.className.match(e)||[,""])[1].toLowerCase(),u=n.languages[o]),l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+o,l.parentNode&&/pre/i.test((r=l.parentNode).nodeName)&&(r.className=r.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var s={element:l,language:o,grammar:u,code:l.textContent};if(n.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(n.hooks.run("before-highlight",s),s.element.textContent=s.code,n.hooks.run("after-highlight",s)),void n.hooks.run("complete",s);if(n.hooks.run("before-highlight",s),a&&t.Worker){var d=new Worker(n.filename);d.onmessage=function(e){s.highlightedCode=e.data,n.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),n.hooks.run("after-highlight",s),n.hooks.run("complete",s)},d.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=n.highlight(s.code,s.grammar,s.language),n.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(l),n.hooks.run("after-highlight",s),n.hooks.run("complete",s)},highlight:function(e,l,t){var i={code:e,grammar:l,language:t};return n.hooks.run("before-tokenize",i),i.tokens=n.tokenize(i.code,i.grammar),n.hooks.run("after-tokenize",i),a.stringify(n.util.encode(i.tokens),i.language)},matchGrammar:function(e,l,t,a,i,o,u){var r=n.Token;for(var s in t)if(t.hasOwnProperty(s)&&t[s]){if(s==u)return;var d=t[s];d="Array"===n.util.type(d)?d:[d];for(var c=0;c<d.length;++c){var p=d[c],m=p.inside,b=!!p.lookbehind,h=!!p.greedy,g=0,f=p.alias;if(h&&!p.pattern.global){var y=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,y+"g")}p=p.pattern||p;for(var x=a,k=i;x<l.length;k+=l[x].length,++x){var v=l[x];if(l.length>e.length)return;if(!(v instanceof r)){if(h&&x!=l.length-1){if(p.lastIndex=k,!(F=p.exec(e)))break;for(var w=F.index+(b?F[1].length:0),S=F.index+F[0].length,C=x,T=k,R=l.length;C<R&&(T<S||!l[C].type&&!l[C-1].greedy);++C)w>=(T+=l[C].length)&&(++x,k=T);if(l[x]instanceof r)continue;A=C-x,v=e.slice(k,T),F.index-=k}else{p.lastIndex=0;var F=p.exec(v),A=1}if(F){b&&(g=F[1]?F[1].length:0),S=(w=F.index+g)+(F=F[0].slice(g)).length;var j=v.slice(0,w),E=v.slice(S),N=[x,A];j&&(++x,k+=j.length,N.push(j));var D=new r(s,m?n.tokenize(F,m):F,f,F,h);if(N.push(D),E&&N.push(E),Array.prototype.splice.apply(l,N),1!=A&&n.matchGrammar(e,l,t,x,k,!0,s),o)break}else if(o)break}}}}},tokenize:function(e,l,t){var a=[e],i=l.rest;if(i){for(var o in i)l[o]=i[o];delete l.rest}return n.matchGrammar(e,a,l,0,0,!1),a},hooks:{all:{},add:function(e,l){var t=n.hooks.all;t[e]=t[e]||[],t[e].push(l)},run:function(e,l){var t=n.hooks.all[e];if(t&&t.length)for(var a,i=0;a=t[i++];)a(l)}}},a=n.Token=function(e,l,t,n,a){this.type=e,this.content=l,this.alias=t,this.length=0|(n||"").length,this.greedy=!!a};if(a.stringify=function(e,l,t){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(t){return a.stringify(t,l,e)}).join("");var i={type:e.type,content:a.stringify(e.content,l,t),tag:"span",classes:["token",e.type],attributes:{},language:l,parent:t};if(e.alias){var o="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,o)}n.hooks.run("wrap",i);var u=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(u?" "+u:"")+">"+i.content+"</"+i.tag+">"},!t.document)return t.addEventListener?(n.disableWorkerMessageHandler||t.addEventListener("message",function(e){var l=JSON.parse(e.data),a=l.language,i=l.immediateClose;t.postMessage(n.highlight(l.code,n.languages[a],a)),i&&t.close()},!1),t.Prism):t.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(n.filename=i.src,n.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),t.Prism}();void 0!==e&&e.exports&&(e.exports=n),"undefined"!=typeof global&&(global.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),n.languages.xml=n.languages.markup,n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},n.languages.css.atrule.inside.rest=n.languages.css,n.languages.markup&&(n.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:n.languages.css,alias:"language-css",greedy:!0}}),n.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:n.languages.css}},alias:"language-css"}},n.languages.markup.tag)),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),n.languages.javascript["template-string"].inside.interpolation.inside.rest=n.languages.javascript,n.languages.markup&&n.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:n.languages.javascript,alias:"language-javascript",greedy:!0}}),n.languages.js=n.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(l){for(var t,a=l.getAttribute("data-src"),i=l,o=/\blang(?:uage)?-([\w-]+)\b/i;i&&!o.test(i.className);)i=i.parentNode;if(i&&(t=(l.className.match(o)||[,""])[1]),!t){var u=(a.match(/\.(\w+)$/)||[,""])[1];t=e[u]||u}var r=document.createElement("code");r.className="language-"+t,l.textContent="",r.textContent="Loading\u2026",l.appendChild(r);var s=new XMLHttpRequest;s.open("GET",a,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(r.textContent=s.responseText,n.highlightElement(r)):r.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},s.send(null)}),n.plugins.toolbar&&n.plugins.toolbar.registerButton("download-file",function(e){var l=e.element.parentNode;if(l&&/pre/i.test(l.nodeName)&&l.hasAttribute("data-src")&&l.hasAttribute("data-download-link")){var t=l.getAttribute("data-src"),n=document.createElement("a");return n.textContent=l.getAttribute("data-download-link-label")||"Download",n.setAttribute("download",""),n.href=t,n}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);