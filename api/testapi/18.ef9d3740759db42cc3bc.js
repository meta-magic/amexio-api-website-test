(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{D77Q:function(e,l,n){"use strict";n.r(l);var a=n("CcnG"),t=function(){function e(e){this.http=e,this.rightclickdata=[{text:"Add New",icon:"fa fa-plus",disabled:!0},{text:"Edit",icon:"",seperator:!0},{text:"Send data in email",icon:""}],this.getHtmlAndTypeScriptCode()}return e.prototype.getDta=function(){var e=this;this.asyncFlag=!0,setTimeout(function(){e.asyncFlag=!1},3e3)},e.prototype.getHtmlAndTypeScriptCode=function(){var e,l,n=this;this.http.get("assets/data/code/pane/contextmenuwindow/window.html",{responseType:"text"}).subscribe(function(l){e=l},function(e){},function(){n.htmlCode=e}),this.http.get("assets/data/code/pane/contextmenuwindow/window.text",{responseType:"text"}).subscribe(function(e){l=e},function(e){},function(){n.typeScriptCode=l})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e.prototype.toggleBasicWindow=function(e){"material"==e?this.showBasicWindowMaterial=!this.showBasicWindowMaterial:this.showBasicWindowNonMaterial=!this.showBasicWindowNonMaterial},e.prototype.toggleMaxWindow=function(e){"material"==e?this.showMaxWindowMaterial=!this.showMaxWindowMaterial:this.showMaxWindowNonMaterial=!this.showMaxWindowNonMaterial},e.prototype.toggleClosable=function(e){"material"==e?this.showClosableMaterial=!this.showClosableMaterial:this.showClosableNonMaterial=!this.showClosableNonMaterial},e}(),i=function(){},r=n("gTgE"),o=n("pMnS"),u=n("U89g"),s=n("d2mR"),c=n("O4vx"),d=n("gIcY"),m=n("Ip0R"),h=n("t/Na"),p=a.Qa({encapsulation:2,styles:[],data:{}});function g(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),a.Ra(2,4243456,null,0,s.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.htmlCode,"html")},null)}function b(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),a.Ra(2,4243456,null,0,s.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.typeScriptCode,"typescript")},null)}function f(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,157,"amexio-card",[["header","true"]],null,null,null,r.cc,r.k)),a.Ra(1,5488640,null,3,c.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,1,{amexioHeader:1}),a.ib(603979776,2,{amexioBody:1}),a.ib(603979776,3,{amexioFooter:1}),(e()(),a.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,r.oc,r.w)),a.Ra(6,114688,[[1,4]],0,c.C,[],null,null),(e()(),a.kb(-1,0,[" Window "])),(e()(),a.Sa(8,0,null,1,149,"amexio-body",[],null,null,null,r.Wb,r.e)),a.Ra(9,114688,[[2,4]],0,c.d,[],null,null),(e()(),a.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),a.kb(-1,null,["Window Pane component is a customizable Modal Pane in which user can enter custom content"])),(e()(),a.Sa(12,0,null,0,145,"amexio-tab-view",[],null,null,null,r.zc,r.H)),a.Ra(13,5488640,null,2,c.S,[a.F,a.k,a.F],null,null),a.ib(603979776,4,{queryTabs:1}),a.ib(603979776,5,{queryAction:1}),(e()(),a.Sa(16,0,null,1,86,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,r.Ac,r.I)),a.Ra(17,114688,[[4,4]],0,c.T,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),a.Sa(18,0,null,0,84,"amexio-card",[],null,null,null,r.cc,r.k)),a.Ra(19,5488640,null,3,c.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,6,{amexioHeader:1}),a.ib(603979776,7,{amexioBody:1}),a.ib(603979776,8,{amexioFooter:1}),(e()(),a.Sa(23,0,null,0,2,"amexio-header",[],null,null,null,r.oc,r.w)),a.Ra(24,114688,[[6,4]],0,c.C,[],null,null),(e()(),a.kb(-1,0,[" Window With Context-Menu "])),(e()(),a.Sa(26,0,null,1,76,"amexio-body",[],null,null,null,r.Wb,r.e)),a.Ra(27,114688,[[7,4]],0,c.d,[],null,null),(e()(),a.Sa(28,0,null,0,74,"amexio-row",[],null,null,null,r.vc,r.D)),a.Ra(29,1163264,null,0,c.O,[],null,null),(e()(),a.Sa(30,0,null,0,1,"amexio-column",[],[[1,"class",0]],null,null,r.ec,r.m)),a.Ra(31,114688,null,0,c.m,[],{size:[0,"size"]},null),(e()(),a.Sa(32,0,null,0,68,"amexio-column",[],[[1,"class",0]],null,null,r.ec,r.m)),a.Ra(33,114688,null,0,c.m,[],{size:[0,"size"]},null),(e()(),a.Sa(34,0,null,0,1,"amexio-button",[["label","Context-menu Window"],["type","success"]],null,[[null,"onClick"]],function(e,l,n){var a=!0;return"onClick"===l&&(a=!1!==e.component.toggleBasicWindow("material")&&a),a},r.ac,r.i)),a.Ra(35,114688,null,0,c.h,[],{label:[0,"label"],type:[1,"type"]},{onClick:"onClick"}),(e()(),a.Sa(36,0,null,0,64,"amexio-window",[],null,[[null,"showChange"]],function(e,l,n){var a=!0;return"showChange"===l&&(a=!1!==(e.component.showBasicWindowMaterial=n)&&a),a},r.Fc,r.N)),a.Ra(37,770048,null,1,c.Ca,[a.F],{verticalposition:[0,"verticalposition"],horizontalposition:[1,"horizontalposition"],closeonescape:[2,"closeonescape"],materialDesign:[3,"materialDesign"],show:[4,"show"],bodyHeight:[5,"bodyHeight"],footer:[6,"footer"],contextmenu:[7,"contextmenu"]},{showChange:"showChange"}),a.ib(603979776,9,{amexioHeader:1}),(e()(),a.Sa(39,0,null,0,2,"amexio-header",[],null,null,null,r.oc,r.w)),a.Ra(40,114688,null,0,c.C,[],null,null),(e()(),a.kb(-1,0,[" Employee Form "])),(e()(),a.Sa(42,0,null,2,51,"amexio-body",[],null,null,null,r.Wb,r.e)),a.Ra(43,114688,null,0,c.d,[],null,null),(e()(),a.Sa(44,0,null,0,13,"amexio-row",[],null,null,null,r.vc,r.D)),a.Ra(45,1163264,null,0,c.O,[],null,null),(e()(),a.Sa(46,0,null,0,5,"amexio-column",[],[[1,"class",0]],null,null,r.ec,r.m)),a.Ra(47,114688,null,0,c.m,[],{size:[0,"size"]},null),(e()(),a.Sa(48,0,null,0,3,"amexio-text-input",[["name","country"]],null,null,null,r.Yd,r.Gb)),a.hb(5120,null,d.p,function(e){return[e]},[c.Fc]),a.hb(5120,null,d.o,function(e){return[e]},[c.Fc]),a.Ra(51,114688,null,0,c.Fc,[],{fieldlabel:[0,"fieldlabel"],minlength:[1,"minlength"],maxlength:[2,"maxlength"],allowblank:[3,"allowblank"],minerrormsg:[4,"minerrormsg"],maxerrormsg:[5,"maxerrormsg"],errormsg:[6,"errormsg"],placeholder:[7,"placeholder"],iconfeedback:[8,"iconfeedback"],enablepopover:[9,"enablepopover"],name:[10,"name"]},null),(e()(),a.Sa(52,0,null,0,5,"amexio-column",[],[[1,"class",0]],null,null,r.ec,r.m)),a.Ra(53,114688,null,0,c.m,[],{size:[0,"size"]},null),(e()(),a.Sa(54,0,null,0,3,"amexio-text-input",[["name","name"]],null,null,null,r.Yd,r.Gb)),a.hb(5120,null,d.p,function(e){return[e]},[c.Fc]),a.hb(5120,null,d.o,function(e){return[e]},[c.Fc]),a.Ra(57,114688,null,0,c.Fc,[],{fieldlabel:[0,"fieldlabel"],minlength:[1,"minlength"],maxlength:[2,"maxlength"],allowblank:[3,"allowblank"],minerrormsg:[4,"minerrormsg"],maxerrormsg:[5,"maxerrormsg"],errormsg:[6,"errormsg"],placeholder:[7,"placeholder"],iconfeedback:[8,"iconfeedback"],enablepopover:[9,"enablepopover"],name:[10,"name"]},null),(e()(),a.Sa(58,0,null,0,13,"amexio-row",[],null,null,null,r.vc,r.D)),a.Ra(59,1163264,null,0,c.O,[],null,null),(e()(),a.Sa(60,0,null,0,5,"amexio-column",[],[[1,"class",0]],null,null,r.ec,r.m)),a.Ra(61,114688,null,0,c.m,[],{size:[0,"size"]},null),(e()(),a.Sa(62,0,null,0,3,"amexio-text-input",[["name","country"]],null,null,null,r.Yd,r.Gb)),a.hb(5120,null,d.p,function(e){return[e]},[c.Fc]),a.hb(5120,null,d.o,function(e){return[e]},[c.Fc]),a.Ra(65,114688,null,0,c.Fc,[],{fieldlabel:[0,"fieldlabel"],minlength:[1,"minlength"],maxlength:[2,"maxlength"],allowblank:[3,"allowblank"],minerrormsg:[4,"minerrormsg"],maxerrormsg:[5,"maxerrormsg"],errormsg:[6,"errormsg"],placeholder:[7,"placeholder"],iconfeedback:[8,"iconfeedback"],enablepopover:[9,"enablepopover"],name:[10,"name"]},null),(e()(),a.Sa(66,0,null,0,5,"amexio-column",[],[[1,"class",0]],null,null,r.ec,r.m)),a.Ra(67,114688,null,0,c.m,[],{size:[0,"size"]},null),(e()(),a.Sa(68,0,null,0,3,"amexio-text-input",[["name","name"]],null,null,null,r.Yd,r.Gb)),a.hb(5120,null,d.p,function(e){return[e]},[c.Fc]),a.hb(5120,null,d.o,function(e){return[e]},[c.Fc]),a.Ra(71,114688,null,0,c.Fc,[],{fieldlabel:[0,"fieldlabel"],minlength:[1,"minlength"],maxlength:[2,"maxlength"],allowblank:[3,"allowblank"],minerrormsg:[4,"minerrormsg"],maxerrormsg:[5,"maxerrormsg"],errormsg:[6,"errormsg"],placeholder:[7,"placeholder"],iconfeedback:[8,"iconfeedback"],enablepopover:[9,"enablepopover"],name:[10,"name"]},null),(e()(),a.Sa(72,0,null,0,7,"amexio-row",[],null,null,null,r.vc,r.D)),a.Ra(73,1163264,null,0,c.O,[],null,null),(e()(),a.Sa(74,0,null,0,5,"amexio-column",[],[[1,"class",0]],null,null,r.ec,r.m)),a.Ra(75,114688,null,0,c.m,[],{size:[0,"size"]},null),(e()(),a.Sa(76,0,null,0,3,"amexio-textarea-input",[["name","Address"]],null,null,null,r.ge,r.Ob)),a.hb(5120,null,d.p,function(e){return[e]},[c.Pc]),a.hb(5120,null,d.o,function(e){return[e]},[c.Pc]),a.Ra(79,114688,null,0,c.Pc,[],{fieldlabel:[0,"fieldlabel"],rows:[1,"rows"],columns:[2,"columns"],allowblank:[3,"allowblank"],errormsg:[4,"errormsg"],placeholder:[5,"placeholder"],iconfeedback:[6,"iconfeedback"],enablepopover:[7,"enablepopover"],name:[8,"name"]},null),(e()(),a.Sa(80,0,null,0,13,"amexio-row",[],null,null,null,r.vc,r.D)),a.Ra(81,1163264,null,0,c.O,[],null,null),(e()(),a.Sa(82,0,null,0,5,"amexio-column",[],[[1,"class",0]],null,null,r.ec,r.m)),a.Ra(83,114688,null,0,c.m,[],{size:[0,"size"]},null),(e()(),a.Sa(84,0,null,0,3,"amexio-text-input",[["name","country"]],null,null,null,r.Yd,r.Gb)),a.hb(5120,null,d.p,function(e){return[e]},[c.Fc]),a.hb(5120,null,d.o,function(e){return[e]},[c.Fc]),a.Ra(87,114688,null,0,c.Fc,[],{fieldlabel:[0,"fieldlabel"],minlength:[1,"minlength"],maxlength:[2,"maxlength"],allowblank:[3,"allowblank"],minerrormsg:[4,"minerrormsg"],maxerrormsg:[5,"maxerrormsg"],errormsg:[6,"errormsg"],placeholder:[7,"placeholder"],iconfeedback:[8,"iconfeedback"],enablepopover:[9,"enablepopover"],name:[10,"name"]},null),(e()(),a.Sa(88,0,null,0,5,"amexio-column",[],[[1,"class",0]],null,null,r.ec,r.m)),a.Ra(89,114688,null,0,c.m,[],{size:[0,"size"]},null),(e()(),a.Sa(90,0,null,0,3,"amexio-text-input",[["name","name"]],null,null,null,r.Yd,r.Gb)),a.hb(5120,null,d.p,function(e){return[e]},[c.Fc]),a.hb(5120,null,d.o,function(e){return[e]},[c.Fc]),a.Ra(93,114688,null,0,c.Fc,[],{fieldlabel:[0,"fieldlabel"],minlength:[1,"minlength"],maxlength:[2,"maxlength"],allowblank:[3,"allowblank"],minerrormsg:[4,"minerrormsg"],maxerrormsg:[5,"maxerrormsg"],errormsg:[6,"errormsg"],placeholder:[7,"placeholder"],iconfeedback:[8,"iconfeedback"],enablepopover:[9,"enablepopover"],name:[10,"name"]},null),(e()(),a.Sa(94,0,null,3,6,"amexio-action",[],null,null,null,r.gc,r.o)),a.Ra(95,114688,null,0,c.s,[],null,null),(e()(),a.Sa(96,0,null,0,1,"amexio-button",[["label","Cancel"]],null,[[null,"onClick"]],function(e,l,n){var a=!0;return"onClick"===l&&(a=0!=(e.component.showBasicWindowMaterial=!1)&&a),a},r.ac,r.i)),a.Ra(97,114688,null,0,c.h,[],{label:[0,"label"],type:[1,"type"]},{onClick:"onClick"}),(e()(),a.kb(-1,0,[" \xa0\xa0\xa0 "])),(e()(),a.Sa(99,0,null,0,1,"amexio-button",[["label","Save"]],null,[[null,"onClick"]],function(e,l,n){var a=!0;return"onClick"===l&&(a=0!=(e.component.showBasicWindowMaterial=!1)&&a),a},r.ac,r.i)),a.Ra(100,114688,null,0,c.h,[],{label:[0,"label"],type:[1,"type"]},{onClick:"onClick"}),(e()(),a.Sa(101,0,null,0,1,"amexio-column",[],[[1,"class",0]],null,null,r.ec,r.m)),a.Ra(102,114688,null,0,c.m,[],{size:[0,"size"]},null),(e()(),a.Sa(103,0,null,1,35,"amexio-tab",[["title","API Reference"]],null,null,null,r.Ac,r.I)),a.Ra(104,114688,[[4,4]],0,c.T,[],{title:[0,"title"]},null),(e()(),a.Sa(105,0,null,0,22,"amexio-datagrid",[["title","Properties <amexio-window>"]],null,null,null,r.Pd,r.xb)),a.Ra(106,1294336,null,1,c.sc,[a.l,c.Sa,a.i,a.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,10,{columnRef:1}),(e()(),a.Sa(108,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Qd,r.yb)),a.Ra(109,49152,[[10,4]],2,c.tc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,11,{headerTemplate:0}),a.ib(335544320,12,{bodyTemplate:0}),(e()(),a.Sa(112,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Qd,r.yb)),a.Ra(113,49152,[[10,4]],2,c.tc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,13,{headerTemplate:0}),a.ib(335544320,14,{bodyTemplate:0}),(e()(),a.Sa(116,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Qd,r.yb)),a.Ra(117,49152,[[10,4]],2,c.tc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,15,{headerTemplate:0}),a.ib(335544320,16,{bodyTemplate:0}),(e()(),a.Sa(120,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Qd,r.yb)),a.Ra(121,49152,[[10,4]],2,c.tc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,17,{headerTemplate:0}),a.ib(335544320,18,{bodyTemplate:0}),(e()(),a.Sa(124,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Qd,r.yb)),a.Ra(125,49152,[[10,4]],2,c.tc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,19,{headerTemplate:0}),a.ib(335544320,20,{bodyTemplate:0}),(e()(),a.Sa(128,0,null,0,10,"amexio-datagrid",[["title","Events"]],null,null,null,r.Pd,r.xb)),a.Ra(129,1294336,null,1,c.sc,[a.l,c.Sa,a.i,a.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,21,{columnRef:1}),(e()(),a.Sa(131,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Qd,r.yb)),a.Ra(132,49152,[[21,4]],2,c.tc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,22,{headerTemplate:0}),a.ib(335544320,23,{bodyTemplate:0}),(e()(),a.Sa(135,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Qd,r.yb)),a.Ra(136,49152,[[21,4]],2,c.tc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,24,{headerTemplate:0}),a.ib(335544320,25,{bodyTemplate:0}),(e()(),a.Sa(139,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,r.Ac,r.I)),a.Ra(140,114688,[[4,4]],0,c.T,[],{title:[0,"title"]},null),(e()(),a.Sa(141,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),a.Sa(142,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,r.Cc,r.K)),a.Ra(143,5357568,null,1,c.X,[a.F,a.k],null,null),a.ib(603979776,26,{queryTabs:1}),(e()(),a.Sa(145,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,r.Ac,r.I)),a.Ra(146,114688,[[26,4]],0,c.T,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),a.Ja(16777216,null,0,1,null,g)),a.Ra(148,16384,null,0,m.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(e()(),a.Sa(149,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,r.Ac,r.I)),a.Ra(150,114688,[[26,4]],0,c.T,[],{title:[0,"title"]},null),(e()(),a.Ja(16777216,null,0,1,null,b)),a.Ra(152,16384,null,0,m.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(e()(),a.Sa(153,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,r.Ac,r.I)),a.Ra(154,114688,[[4,4]],0,c.T,[],{title:[0,"title"]},null),(e()(),a.Sa(155,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),a.kb(-1,null,["Amexio Sandbox"])),(e()(),a.Sa(157,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-window-contextmenu-demo?file=src%2Fapp%2Fcontextualmenu%2Fwindow%2Fwindow.demo.component.ts"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,l){var n=l.component;e(l,1,0,"true"),e(l,6,0),e(l,9,0),e(l,13,0),e(l,17,0,"Demo","true"),e(l,19,0,!0),e(l,24,0),e(l,27,0),e(l,29,0),e(l,31,0,4),e(l,33,0,4),e(l,35,0,"Context-menu Window","success"),e(l,37,0,"top","center",!0,!0,n.showBasicWindowMaterial,40,!0,n.rightclickdata),e(l,40,0),e(l,43,0),e(l,45,0),e(l,47,0,6),e(l,51,1,["Name",3,15,!1,"Name should be minimum 3 characters","Name should be less than 15 characters","Please enter name","Enter name",!0,!0,"country"]),e(l,53,0,6),e(l,57,1,["Surname",3,15,!1,"Surname should be minimum 3 characters","Surname should be less than 15 characters","Please enter Surname","Enter surname",!0,!0,"name"]),e(l,59,0),e(l,61,0,6),e(l,65,1,["Description",3,15,!1,"Name should be minimum 3 characters","Name should be less than 15 characters","Please enter name","Description",!0,!0,"country"]),e(l,67,0,6),e(l,71,1,["Hobbies",3,15,!1,"Surname should be minimum 3 characters","Surname should be less than 15 characters","Please enter Surname","Hobbies",!0,!0,"name"]),e(l,73,0),e(l,75,0,6),e(l,79,0,"Address","1","2",!1,"Please enter address","Enter address",!0,!0,"Address"),e(l,81,0),e(l,83,0,6),e(l,87,1,["Phone",3,15,!1,"Name should be minimum 3 characters","Name should be less than 15 characters","Please enter name","Phone",!0,!0,"country"]),e(l,89,0,6),e(l,93,1,["Email",3,15,!1,"Surname should be minimum 3 characters","Surname should be less than 15 characters","Please enter Surname","Email",!0,!0,"name"]),e(l,95,0),e(l,97,0,"Cancel","default"),e(l,100,0,"Save","theme-color"),e(l,102,0,4),e(l,104,0,"API Reference"),e(l,106,0,"Properties <amexio-window>","assets/apireference/panes/window/window.json","get","properties",!1,!1),e(l,109,0,"Name","name",!1,"string",15),e(l,113,0,"version","version",!1,"string",15),e(l,117,0,"Type","type",!1,"string",10),e(l,121,0,"Default","default",!1,"string",10),e(l,125,0,"Description","description",!1,"string",55),e(l,129,0,"Events","assets/apireference/panes/window/window.json","get","events",!1,!1),e(l,132,0,"Name","name",!1,"string",15),e(l,136,0,"Description","description",!1,"string",65),e(l,140,0,"Source"),e(l,143,0),e(l,146,0,"HTML",!0),e(l,148,0,n.htmlCode),e(l,150,0,"Type Script"),e(l,152,0,n.typeScriptCode),e(l,154,0,"Live")},function(e,l){e(l,30,0,a.cb(l,31).role),e(l,32,0,a.cb(l,33).role),e(l,46,0,a.cb(l,47).role),e(l,52,0,a.cb(l,53).role),e(l,60,0,a.cb(l,61).role),e(l,66,0,a.cb(l,67).role),e(l,74,0,a.cb(l,75).role),e(l,82,0,a.cb(l,83).role),e(l,88,0,a.cb(l,89).role),e(l,101,0,a.cb(l,102).role)})}var x=a.Oa("contextmenu-window",t,function(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,1,"contextmenu-window",[],null,null,null,f,p)),a.Ra(1,49152,null,0,t,[h.c],null,null)],null,null)},{},{},[]),y=n("ZYCi");n.d(l,"ContextMenuWindowDemoModuleNgFactory",function(){return w});var w=a.Pa(i,[],function(e){return a.Za([a.ab(512,a.k,a.Ea,[[8,[r.a,o.a,x]],[3,a.k],a.z]),a.ab(4608,m.o,m.n,[a.w,[2,m.x]]),a.ab(4608,h.i,h.o,[m.d,a.D,h.m]),a.ab(4608,h.p,h.p,[h.i,h.n]),a.ab(5120,h.a,function(e){return[e]},[h.p]),a.ab(4608,h.l,h.l,[]),a.ab(6144,h.j,null,[h.l]),a.ab(4608,h.h,h.h,[h.j]),a.ab(6144,h.b,null,[h.h]),a.ab(4608,h.f,h.k,[h.b,a.s]),a.ab(4608,h.c,h.c,[h.f]),a.ab(4608,d.G,d.G,[]),a.ab(4608,c.Sa,c.Sa,[h.c]),a.ab(4608,c.nb,c.nb,[]),a.ab(4608,c.cb,c.cb,[a.D]),a.ab(4608,c.B,c.B,[]),a.ab(4608,c.Jb,c.Jb,[]),a.ab(4608,d.f,d.f,[]),a.ab(4608,c.ib,c.ib,[]),a.ab(1073742336,m.c,m.c,[]),a.ab(1073742336,h.e,h.e,[]),a.ab(1073742336,h.d,h.d,[]),a.ab(1073742336,s.b,s.b,[]),a.ab(1073742336,d.D,d.D,[]),a.ab(1073742336,d.l,d.l,[]),a.ab(1073742336,c.Cb,c.Cb,[]),a.ab(1073742336,c.D,c.D,[]),a.ab(1073742336,c.x,c.x,[]),a.ab(1073742336,c.G,c.G,[]),a.ab(1073742336,c.I,c.I,[]),a.ab(1073742336,d.z,d.z,[]),a.ab(1073742336,c.L,c.L,[]),a.ab(1073742336,c.p,c.p,[]),a.ab(1073742336,c.Aa,c.Aa,[]),a.ab(1073742336,y.n,y.n,[[2,y.t],[2,y.m]]),a.ab(1073742336,i,i,[]),a.ab(256,h.m,"XSRF-TOKEN",[]),a.ab(256,h.n,"X-XSRF-TOKEN",[]),a.ab(1024,y.i,function(){return[[{path:"",component:t}]]},[])])})},U89g:function(e,l,n){"use strict";n.d(l,"a",function(){return t}),n.d(l,"b",function(){return i});var a=n("CcnG"),t=(n("d2mR"),n("Ip0R"),a.Qa({encapsulation:2,styles:[],data:{}}));function i(e){return a.mb(0,[],null,null)}},XIHC:function(e,l){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,l,n){"use strict";n.d(l,"a",function(){return a}),n.d(l,"b",function(){return t}),n("wZee"),n("XIHC");var a=function(){function e(e,l){this._renderer=e,this._el=l,this.nativeElement=l.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),t=function(){}},wZee:function(e,l){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,l=0,a=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof t?new t(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++l}),e.__id},clone:function(e,l){var n=a.util.type(e);switch(l=l||{},n){case"Object":if(l[a.util.objId(e)])return l[a.util.objId(e)];var t={};for(var i in l[a.util.objId(e)]=t,e)e.hasOwnProperty(i)&&(t[i]=a.util.clone(e[i],l));return t;case"Array":return l[a.util.objId(e)]?l[a.util.objId(e)]:(t=[],l[a.util.objId(e)]=t,e.forEach(function(e,n){t[n]=a.util.clone(e,l)}),t)}return e}},languages:{extend:function(e,l){var n=a.util.clone(a.languages[e]);for(var t in l)n[t]=l[t];return n},insertBefore:function(e,l,n,t){var i=(t=t||a.languages)[e];if(2==arguments.length){for(var r in n=arguments[1])n.hasOwnProperty(r)&&(i[r]=n[r]);return i}var o={};for(var u in i)if(i.hasOwnProperty(u)){if(u==l)for(var r in n)n.hasOwnProperty(r)&&(o[r]=n[r]);o[u]=i[u]}return a.languages.DFS(a.languages,function(l,n){n===t[e]&&l!=e&&(this[l]=o)}),t[e]=o},DFS:function(e,l,n,t){for(var i in t=t||{},e)e.hasOwnProperty(i)&&(l.call(e,i,e[i],n||i),"Object"!==a.util.type(e[i])||t[a.util.objId(e[i])]?"Array"!==a.util.type(e[i])||t[a.util.objId(e[i])]||(t[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],l,i,t)):(t[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],l,null,t)))}},plugins:{},highlightAll:function(e,l){a.highlightAllUnder(document,e,l)},highlightAllUnder:function(e,l,n){var t={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",t);for(var i,r=t.elements||e.querySelectorAll(t.selector),o=0;i=r[o++];)a.highlightElement(i,!0===l,t.callback)},highlightElement:function(l,t,i){for(var r,o,u=l;u&&!e.test(u.className);)u=u.parentNode;u&&(r=(u.className.match(e)||[,""])[1].toLowerCase(),o=a.languages[r]),l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,l.parentNode&&/pre/i.test((u=l.parentNode).nodeName)&&(u.className=u.className.replace(e,"").replace(/\s+/g," ")+" language-"+r);var s={element:l,language:r,grammar:o,code:l.textContent};if(a.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(a.hooks.run("before-highlight",s),s.element.textContent=s.code,a.hooks.run("after-highlight",s)),void a.hooks.run("complete",s);if(a.hooks.run("before-highlight",s),t&&n.Worker){var c=new Worker(a.filename);c.onmessage=function(e){s.highlightedCode=e.data,a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),a.hooks.run("after-highlight",s),a.hooks.run("complete",s)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=a.highlight(s.code,s.grammar,s.language),a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(l),a.hooks.run("after-highlight",s),a.hooks.run("complete",s)},highlight:function(e,l,n){var i={code:e,grammar:l,language:n};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),t.stringify(a.util.encode(i.tokens),i.language)},matchGrammar:function(e,l,n,t,i,r,o){var u=a.Token;for(var s in n)if(n.hasOwnProperty(s)&&n[s]){if(s==o)return;var c=n[s];c="Array"===a.util.type(c)?c:[c];for(var d=0;d<c.length;++d){var m=c[d],h=m.inside,p=!!m.lookbehind,g=!!m.greedy,b=0,f=m.alias;if(g&&!m.pattern.global){var x=m.pattern.toString().match(/[imuy]*$/)[0];m.pattern=RegExp(m.pattern.source,x+"g")}m=m.pattern||m;for(var y=t,w=i;y<l.length;w+=l[y].length,++y){var k=l[y];if(l.length>e.length)return;if(!(k instanceof u)){if(g&&y!=l.length-1){if(m.lastIndex=w,!(A=m.exec(e)))break;for(var v=A.index+(p?A[1].length:0),S=A.index+A[0].length,F=y,C=w,R=l.length;F<R&&(C<S||!l[F].type&&!l[F-1].greedy);++F)v>=(C+=l[F].length)&&(++y,w=C);if(l[y]instanceof u)continue;N=F-y,k=e.slice(w,C),A.index-=w}else{m.lastIndex=0;var A=m.exec(k),N=1}if(A){p&&(b=A[1]?A[1].length:0),S=(v=A.index+b)+(A=A[0].slice(b)).length;var T=k.slice(0,v),P=k.slice(S),M=[y,N];T&&(++y,w+=T.length,M.push(T));var z=new u(s,h?a.tokenize(A,h):A,f,A,g);if(M.push(z),P&&M.push(P),Array.prototype.splice.apply(l,M),1!=N&&a.matchGrammar(e,l,n,y,w,!0,s),r)break}else if(r)break}}}}},tokenize:function(e,l,n){var t=[e],i=l.rest;if(i){for(var r in i)l[r]=i[r];delete l.rest}return a.matchGrammar(e,t,l,0,0,!1),t},hooks:{all:{},add:function(e,l){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(l)},run:function(e,l){var n=a.hooks.all[e];if(n&&n.length)for(var t,i=0;t=n[i++];)t(l)}}},t=a.Token=function(e,l,n,a,t){this.type=e,this.content=l,this.alias=n,this.length=0|(a||"").length,this.greedy=!!t};if(t.stringify=function(e,l,n){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map(function(n){return t.stringify(n,l,e)}).join("");var i={type:e.type,content:t.stringify(e.content,l,n),tag:"span",classes:["token",e.type],attributes:{},language:l,parent:n};if(e.alias){var r="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,r)}a.hooks.run("wrap",i);var o=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(o?" "+o:"")+">"+i.content+"</"+i.tag+">"},!n.document)return n.addEventListener?(a.disableWorkerMessageHandler||n.addEventListener("message",function(e){var l=JSON.parse(e.data),t=l.language,i=l.immediateClose;n.postMessage(a.highlight(l.code,a.languages[t],t)),i&&n.close()},!1),n.Prism):n.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(a.filename=i.src,a.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),n.Prism}();void 0!==e&&e.exports&&(e.exports=a),"undefined"!=typeof global&&(global.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),a.languages.xml=a.languages.markup,a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},a.languages.css.atrule.inside.rest=a.languages.css,a.languages.markup&&(a.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:a.languages.css,alias:"language-css",greedy:!0}}),a.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:a.languages.css}},alias:"language-css"}},a.languages.markup.tag)),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),a.languages.javascript["template-string"].inside.interpolation.inside.rest=a.languages.javascript,a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:a.languages.javascript,alias:"language-javascript",greedy:!0}}),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(l){for(var n,t=l.getAttribute("data-src"),i=l,r=/\blang(?:uage)?-([\w-]+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(n=(l.className.match(r)||[,""])[1]),!n){var o=(t.match(/\.(\w+)$/)||[,""])[1];n=e[o]||o}var u=document.createElement("code");u.className="language-"+n,l.textContent="",u.textContent="Loading\u2026",l.appendChild(u);var s=new XMLHttpRequest;s.open("GET",t,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(u.textContent=s.responseText,a.highlightElement(u)):u.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},s.send(null)}),a.plugins.toolbar&&a.plugins.toolbar.registerButton("download-file",function(e){var l=e.element.parentNode;if(l&&/pre/i.test(l.nodeName)&&l.hasAttribute("data-src")&&l.hasAttribute("data-download-link")){var n=l.getAttribute("data-src"),a=document.createElement("a");return a.textContent=l.getAttribute("data-download-link-label")||"Download",a.setAttribute("download",""),a.href=n,a}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);