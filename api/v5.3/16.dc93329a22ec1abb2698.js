(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{D77Q:function(e,l,n){"use strict";n.r(l);var a=n("CcnG"),t=function(){function e(e){this.http=e,this.rightclickdata=[{text:"Add New",icon:"fa fa-plus",disabled:!0},{text:"Edit",icon:"",seperator:!0},{text:"Send data in email",icon:""}],this.getHtmlAndTypeScriptCode()}return e.prototype.getDta=function(){var e=this;this.asyncFlag=!0,setTimeout(function(){e.asyncFlag=!1},3e3)},e.prototype.getHtmlAndTypeScriptCode=function(){var e,l,n=this;this.http.get("assets/data/code/pane/window/window.html",{responseType:"text"}).subscribe(function(l){e=l},function(e){},function(){n.htmlCode=e}),this.http.get("assets/data/code/pane/window/window.text",{responseType:"text"}).subscribe(function(e){l=e},function(e){},function(){n.typeScriptCode=l})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e.prototype.toggleBasicWindow=function(e){"material"==e?this.showBasicWindowMaterial=!this.showBasicWindowMaterial:this.showBasicWindowNonMaterial=!this.showBasicWindowNonMaterial},e.prototype.toggleMaxWindow=function(e){"material"==e?this.showMaxWindowMaterial=!this.showMaxWindowMaterial:this.showMaxWindowNonMaterial=!this.showMaxWindowNonMaterial},e.prototype.toggleClosable=function(e){"material"==e?this.showClosableMaterial=!this.showClosableMaterial:this.showClosableNonMaterial=!this.showClosableNonMaterial},e}(),i=function(){},r=n("gTgE"),o=n("pMnS"),u=n("U89g"),s=n("d2mR"),c=n("O4vx"),d=n("gIcY"),m=n("Ip0R"),p=n("t/Na"),h=a.Qa({encapsulation:2,styles:[],data:{}});function g(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),a.Ra(2,4243456,null,0,s.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.htmlCode,"html")},null)}function b(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),a.Ra(2,4243456,null,0,s.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.typeScriptCode,"typescript")},null)}function f(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,150,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(e,l,n){var t=!0;return"document:click"===l&&(t=!1!==a.cb(e,1).onWindowClick()&&t),"document:scroll"===l&&(t=!1!==a.cb(e,1).onscroll()&&t),t},r.Wb,r.i)),a.Ra(1,5357568,null,3,c.h,[],{header:[0,"header"]},null),a.ib(603979776,1,{amexioHeader:1}),a.ib(603979776,2,{amexioBody:1}),a.ib(603979776,3,{amexioFooter:1}),(e()(),a.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,r.fc,r.r)),a.Ra(6,114688,[[1,4]],0,c.v,[],null,null),(e()(),a.kb(-1,0,[" Window "])),(e()(),a.Sa(8,0,null,1,142,"amexio-body",[],null,null,null,r.Sb,r.e)),a.Ra(9,114688,[[2,4]],0,c.d,[],null,null),(e()(),a.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),a.kb(-1,null,["Window Pane component is a customizable Modal Pane in which user can enter custom content"])),(e()(),a.Sa(12,16777216,null,0,138,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(e,l,n){var t=!0;return"document:click"===l&&(t=!1!==a.cb(e,13).onWindowClick()&&t),"document:scroll"===l&&(t=!1!==a.cb(e,13).onscroll()&&t),t},r.qc,r.C)),a.Ra(13,5357568,null,2,c.L,[a.F,a.k,a.R],null,null),a.ib(603979776,4,{queryTabs:1}),a.ib(603979776,5,{queryAction:1}),(e()(),a.Sa(16,0,null,1,79,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,r.rc,r.D)),a.Ra(17,114688,[[4,4]],0,c.M,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),a.Sa(18,0,null,0,77,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(e,l,n){var t=!0;return"document:click"===l&&(t=!1!==a.cb(e,19).onWindowClick()&&t),"document:scroll"===l&&(t=!1!==a.cb(e,19).onscroll()&&t),t},r.Wb,r.i)),a.Ra(19,5357568,null,3,c.h,[],{header:[0,"header"]},null),a.ib(603979776,6,{amexioHeader:1}),a.ib(603979776,7,{amexioBody:1}),a.ib(603979776,8,{amexioFooter:1}),(e()(),a.Sa(23,0,null,0,2,"amexio-header",[],null,null,null,r.fc,r.r)),a.Ra(24,114688,[[6,4]],0,c.v,[],null,null),(e()(),a.kb(-1,0,[" Window With Context-Menu "])),(e()(),a.Sa(26,0,null,1,69,"amexio-body",[],null,null,null,r.Sb,r.e)),a.Ra(27,114688,[[7,4]],0,c.d,[],null,null),(e()(),a.Sa(28,0,null,0,67,"amexio-row",[],null,null,null,r.mc,r.y)),a.Ra(29,1163264,null,0,c.H,[],null,null),(e()(),a.Sa(30,0,null,0,1,"amexio-column",[],[[1,"class",0]],null,null,r.Yb,r.k)),a.Ra(31,114688,null,0,c.k,[],{size:[0,"size"]},null),(e()(),a.Sa(32,0,null,0,61,"amexio-column",[],[[1,"class",0]],null,null,r.Yb,r.k)),a.Ra(33,114688,null,0,c.k,[],{size:[0,"size"]},null),(e()(),a.Sa(34,0,null,0,1,"amexio-button",[["label","Context-menu Window"],["type","success"]],null,[[null,"onClick"]],function(e,l,n){var a=!0;return"onClick"===l&&(a=!1!==e.component.toggleBasicWindow("material")&&a),a},r.Sd,r.Eb)),a.Ra(35,114688,null,0,c.pc,[],{label:[0,"label"],type:[1,"type"]},{onClick:"onClick"}),(e()(),a.Sa(36,0,null,0,57,"amexio-window",[],null,[[null,"showChange"],["window","keyup"],["document","click"],["document","scroll"]],function(e,l,n){var t=!0,i=e.component;return"window:keyup"===l&&(t=!1!==a.cb(e,37).keyEvent(n)&&t),"document:click"===l&&(t=!1!==a.cb(e,37).onWindowClick()&&t),"document:scroll"===l&&(t=!1!==a.cb(e,37).onscroll()&&t),"showChange"===l&&(t=!1!==(i.showBasicWindowMaterial=n)&&t),t},r.wc,r.I)),a.Ra(37,638976,null,1,c.U,[],{verticalposition:[0,"verticalposition"],horizontalposition:[1,"horizontalposition"],closeonescape:[2,"closeonescape"],materialDesign:[3,"materialDesign"],show:[4,"show"],bodyHeight:[5,"bodyHeight"],footer:[6,"footer"],contextmenu:[7,"contextmenu"]},{showChange:"showChange"}),a.ib(603979776,9,{amexioHeader:1}),(e()(),a.Sa(39,0,null,0,2,"amexio-header",[],null,null,null,r.fc,r.r)),a.Ra(40,114688,null,0,c.v,[],null,null),(e()(),a.kb(-1,0,[" Employee Form "])),(e()(),a.Sa(42,0,null,2,44,"amexio-body",[],null,null,null,r.Sb,r.e)),a.Ra(43,114688,null,0,c.d,[],null,null),(e()(),a.Sa(44,0,null,0,11,"amexio-row",[],null,null,null,r.mc,r.y)),a.Ra(45,1163264,null,0,c.H,[],null,null),(e()(),a.Sa(46,0,null,0,4,"amexio-column",[],[[1,"class",0]],null,null,r.Yb,r.k)),a.Ra(47,114688,null,0,c.k,[],{size:[0,"size"]},null),(e()(),a.Sa(48,0,null,0,2,"amexio-text-input",[["name","country"]],null,null,null,r.fd,r.Ra)),a.hb(5120,null,d.h,function(e){return[e]},[c.rb]),a.Ra(50,114688,null,0,c.rb,[],{fieldlabel:[0,"fieldlabel"],minlength:[1,"minlength"],maxlength:[2,"maxlength"],allowblank:[3,"allowblank"],errormsg:[4,"errormsg"],minerrormsg:[5,"minerrormsg"],maxerrormsg:[6,"maxerrormsg"],placeholder:[7,"placeholder"],iconfeedback:[8,"iconfeedback"],enablepopover:[9,"enablepopover"]},null),(e()(),a.Sa(51,0,null,0,4,"amexio-column",[],[[1,"class",0]],null,null,r.Yb,r.k)),a.Ra(52,114688,null,0,c.k,[],{size:[0,"size"]},null),(e()(),a.Sa(53,0,null,0,2,"amexio-text-input",[["name","name"]],null,null,null,r.fd,r.Ra)),a.hb(5120,null,d.h,function(e){return[e]},[c.rb]),a.Ra(55,114688,null,0,c.rb,[],{fieldlabel:[0,"fieldlabel"],minlength:[1,"minlength"],maxlength:[2,"maxlength"],allowblank:[3,"allowblank"],errormsg:[4,"errormsg"],minerrormsg:[5,"minerrormsg"],maxerrormsg:[6,"maxerrormsg"],placeholder:[7,"placeholder"],iconfeedback:[8,"iconfeedback"],enablepopover:[9,"enablepopover"]},null),(e()(),a.Sa(56,0,null,0,11,"amexio-row",[],null,null,null,r.mc,r.y)),a.Ra(57,1163264,null,0,c.H,[],null,null),(e()(),a.Sa(58,0,null,0,4,"amexio-column",[],[[1,"class",0]],null,null,r.Yb,r.k)),a.Ra(59,114688,null,0,c.k,[],{size:[0,"size"]},null),(e()(),a.Sa(60,0,null,0,2,"amexio-text-input",[["name","country"]],null,null,null,r.fd,r.Ra)),a.hb(5120,null,d.h,function(e){return[e]},[c.rb]),a.Ra(62,114688,null,0,c.rb,[],{fieldlabel:[0,"fieldlabel"],minlength:[1,"minlength"],maxlength:[2,"maxlength"],allowblank:[3,"allowblank"],errormsg:[4,"errormsg"],minerrormsg:[5,"minerrormsg"],maxerrormsg:[6,"maxerrormsg"],placeholder:[7,"placeholder"],iconfeedback:[8,"iconfeedback"],enablepopover:[9,"enablepopover"]},null),(e()(),a.Sa(63,0,null,0,4,"amexio-column",[],[[1,"class",0]],null,null,r.Yb,r.k)),a.Ra(64,114688,null,0,c.k,[],{size:[0,"size"]},null),(e()(),a.Sa(65,0,null,0,2,"amexio-text-input",[["name","name"]],null,null,null,r.fd,r.Ra)),a.hb(5120,null,d.h,function(e){return[e]},[c.rb]),a.Ra(67,114688,null,0,c.rb,[],{fieldlabel:[0,"fieldlabel"],minlength:[1,"minlength"],maxlength:[2,"maxlength"],allowblank:[3,"allowblank"],errormsg:[4,"errormsg"],minerrormsg:[5,"minerrormsg"],maxerrormsg:[6,"maxerrormsg"],placeholder:[7,"placeholder"],iconfeedback:[8,"iconfeedback"],enablepopover:[9,"enablepopover"]},null),(e()(),a.Sa(68,0,null,0,6,"amexio-row",[],null,null,null,r.mc,r.y)),a.Ra(69,1163264,null,0,c.H,[],null,null),(e()(),a.Sa(70,0,null,0,4,"amexio-column",[],[[1,"class",0]],null,null,r.Yb,r.k)),a.Ra(71,114688,null,0,c.k,[],{size:[0,"size"]},null),(e()(),a.Sa(72,0,null,0,2,"amexio-textarea-input",[["name","Address"]],null,null,null,r.Pd,r.Bb)),a.hb(5120,null,d.h,function(e){return[e]},[c.mc]),a.Ra(74,114688,null,0,c.mc,[],{fieldlabel:[0,"fieldlabel"],rows:[1,"rows"],columns:[2,"columns"],allowblank:[3,"allowblank"],errormsg:[4,"errormsg"],placeholder:[5,"placeholder"],iconfeedback:[6,"iconfeedback"],enablepopover:[7,"enablepopover"]},null),(e()(),a.Sa(75,0,null,0,11,"amexio-row",[],null,null,null,r.mc,r.y)),a.Ra(76,1163264,null,0,c.H,[],null,null),(e()(),a.Sa(77,0,null,0,4,"amexio-column",[],[[1,"class",0]],null,null,r.Yb,r.k)),a.Ra(78,114688,null,0,c.k,[],{size:[0,"size"]},null),(e()(),a.Sa(79,0,null,0,2,"amexio-text-input",[["name","country"]],null,null,null,r.fd,r.Ra)),a.hb(5120,null,d.h,function(e){return[e]},[c.rb]),a.Ra(81,114688,null,0,c.rb,[],{fieldlabel:[0,"fieldlabel"],minlength:[1,"minlength"],maxlength:[2,"maxlength"],allowblank:[3,"allowblank"],errormsg:[4,"errormsg"],minerrormsg:[5,"minerrormsg"],maxerrormsg:[6,"maxerrormsg"],placeholder:[7,"placeholder"],iconfeedback:[8,"iconfeedback"],enablepopover:[9,"enablepopover"]},null),(e()(),a.Sa(82,0,null,0,4,"amexio-column",[],[[1,"class",0]],null,null,r.Yb,r.k)),a.Ra(83,114688,null,0,c.k,[],{size:[0,"size"]},null),(e()(),a.Sa(84,0,null,0,2,"amexio-text-input",[["name","name"]],null,null,null,r.fd,r.Ra)),a.hb(5120,null,d.h,function(e){return[e]},[c.rb]),a.Ra(86,114688,null,0,c.rb,[],{fieldlabel:[0,"fieldlabel"],minlength:[1,"minlength"],maxlength:[2,"maxlength"],allowblank:[3,"allowblank"],errormsg:[4,"errormsg"],minerrormsg:[5,"minerrormsg"],maxerrormsg:[6,"maxerrormsg"],placeholder:[7,"placeholder"],iconfeedback:[8,"iconfeedback"],enablepopover:[9,"enablepopover"]},null),(e()(),a.Sa(87,0,null,3,6,"amexio-action",[],null,null,null,r.ac,r.m)),a.Ra(88,114688,null,0,c.p,[],null,null),(e()(),a.Sa(89,0,null,0,1,"amexio-button",[["label","Cancel"]],null,[[null,"onClick"]],function(e,l,n){var a=!0;return"onClick"===l&&(a=0!=(e.component.showBasicWindowMaterial=!1)&&a),a},r.Sd,r.Eb)),a.Ra(90,114688,null,0,c.pc,[],{label:[0,"label"],type:[1,"type"]},{onClick:"onClick"}),(e()(),a.kb(-1,0,[" \xa0\xa0\xa0 "])),(e()(),a.Sa(92,0,null,0,1,"amexio-button",[["label","Save"]],null,[[null,"onClick"]],function(e,l,n){var a=!0;return"onClick"===l&&(a=0!=(e.component.showBasicWindowMaterial=!1)&&a),a},r.Sd,r.Eb)),a.Ra(93,114688,null,0,c.pc,[],{label:[0,"label"],type:[1,"type"]},{onClick:"onClick"}),(e()(),a.Sa(94,0,null,0,1,"amexio-column",[],[[1,"class",0]],null,null,r.Yb,r.k)),a.Ra(95,114688,null,0,c.k,[],{size:[0,"size"]},null),(e()(),a.Sa(96,0,null,1,35,"amexio-tab",[["title","API Reference"]],null,null,null,r.rc,r.D)),a.Ra(97,114688,[[4,4]],0,c.M,[],{title:[0,"title"]},null),(e()(),a.Sa(98,0,null,0,22,"amexio-datagrid",[["title","Properties <amexio-window>"]],null,[["document","scroll"],["document","click"]],function(e,l,n){var t=!0;return"document:scroll"===l&&(t=!1!==a.cb(e,99).onscroll()&&t),"document:click"===l&&(t=!1!==a.cb(e,99).onclick()&&t),t},r.Cd,r.ob)),a.Ra(99,1163264,null,1,c.Vb,[a.l,c.Ka,a.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,10,{columnRef:1}),(e()(),a.Sa(101,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Dd,r.pb)),a.Ra(102,49152,[[10,4]],2,c.Wb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,11,{headerTemplate:0}),a.ib(335544320,12,{bodyTemplate:0}),(e()(),a.Sa(105,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Dd,r.pb)),a.Ra(106,49152,[[10,4]],2,c.Wb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,13,{headerTemplate:0}),a.ib(335544320,14,{bodyTemplate:0}),(e()(),a.Sa(109,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Dd,r.pb)),a.Ra(110,49152,[[10,4]],2,c.Wb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,15,{headerTemplate:0}),a.ib(335544320,16,{bodyTemplate:0}),(e()(),a.Sa(113,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Dd,r.pb)),a.Ra(114,49152,[[10,4]],2,c.Wb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,17,{headerTemplate:0}),a.ib(335544320,18,{bodyTemplate:0}),(e()(),a.Sa(117,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Dd,r.pb)),a.Ra(118,49152,[[10,4]],2,c.Wb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,19,{headerTemplate:0}),a.ib(335544320,20,{bodyTemplate:0}),(e()(),a.Sa(121,0,null,0,10,"amexio-datagrid",[["title","Events"]],null,[["document","scroll"],["document","click"]],function(e,l,n){var t=!0;return"document:scroll"===l&&(t=!1!==a.cb(e,122).onscroll()&&t),"document:click"===l&&(t=!1!==a.cb(e,122).onclick()&&t),t},r.Cd,r.ob)),a.Ra(122,1163264,null,1,c.Vb,[a.l,c.Ka,a.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,21,{columnRef:1}),(e()(),a.Sa(124,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Dd,r.pb)),a.Ra(125,49152,[[21,4]],2,c.Wb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,22,{headerTemplate:0}),a.ib(335544320,23,{bodyTemplate:0}),(e()(),a.Sa(128,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Dd,r.pb)),a.Ra(129,49152,[[21,4]],2,c.Wb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,24,{headerTemplate:0}),a.ib(335544320,25,{bodyTemplate:0}),(e()(),a.Sa(132,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,r.rc,r.D)),a.Ra(133,114688,[[4,4]],0,c.M,[],{title:[0,"title"]},null),(e()(),a.Sa(134,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),a.Sa(135,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,r.tc,r.F)),a.Ra(136,5357568,null,1,c.Q,[a.F],null,null),a.ib(603979776,26,{queryTabs:1}),(e()(),a.Sa(138,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,r.rc,r.D)),a.Ra(139,114688,[[26,4]],0,c.M,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),a.Ja(16777216,null,0,1,null,g)),a.Ra(141,16384,null,0,m.l,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(e()(),a.Sa(142,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,r.rc,r.D)),a.Ra(143,114688,[[26,4]],0,c.M,[],{title:[0,"title"]},null),(e()(),a.Ja(16777216,null,0,1,null,b)),a.Ra(145,16384,null,0,m.l,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(e()(),a.Sa(146,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,r.rc,r.D)),a.Ra(147,114688,[[4,4]],0,c.M,[],{title:[0,"title"]},null),(e()(),a.Sa(148,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),a.kb(-1,null,["Amexio Sandbox"])),(e()(),a.Sa(150,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-window-contextmenu-demo?file=src%2Fapp%2Fcontextualmenu%2Fwindow%2Fwindow.demo.component.ts"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,l){var n=l.component;e(l,1,0,"true"),e(l,6,0),e(l,9,0),e(l,13,0),e(l,17,0,"Demo","true"),e(l,19,0,!0),e(l,24,0),e(l,27,0),e(l,29,0),e(l,31,0,4),e(l,33,0,4),e(l,35,0,"Context-menu Window","success"),e(l,37,0,"top","center",!0,!0,n.showBasicWindowMaterial,40,!0,n.rightclickdata),e(l,40,0),e(l,43,0),e(l,45,0),e(l,47,0,6),e(l,50,0,"Name",3,15,!1,"Please enter name","Name should be minimum 3 characters","Name should be less than 15 characters","Enter name",!0,!0),e(l,52,0,6),e(l,55,0,"Surname",3,15,!1,"Please enter Surname","Surname should be minimum 3 characters","Surname should be less than 15 characters","Enter surname",!0,!0),e(l,57,0),e(l,59,0,6),e(l,62,0,"Description",3,15,!1,"Please enter name","Name should be minimum 3 characters","Name should be less than 15 characters","Description",!0,!0),e(l,64,0,6),e(l,67,0,"Hobbies",3,15,!1,"Please enter Surname","Surname should be minimum 3 characters","Surname should be less than 15 characters","Hobbies",!0,!0),e(l,69,0),e(l,71,0,6),e(l,74,0,"Address","1","2",!1,"Please enter address","Enter address",!0,!0),e(l,76,0),e(l,78,0,6),e(l,81,0,"Phone",3,15,!1,"Please enter name","Name should be minimum 3 characters","Name should be less than 15 characters","Phone",!0,!0),e(l,83,0,6),e(l,86,0,"Email",3,15,!1,"Please enter Surname","Surname should be minimum 3 characters","Surname should be less than 15 characters","Email",!0,!0),e(l,88,0),e(l,90,0,"Cancel","default"),e(l,93,0,"Save","theme-color"),e(l,95,0,4),e(l,97,0,"API Reference"),e(l,99,0,"Properties <amexio-window>","assets/apireference/panes/window/window.json","get","properties",!1,!1),e(l,102,0,"Name","name",!1,"string",15),e(l,106,0,"version","version",!1,"string",15),e(l,110,0,"Type","type",!1,"string",10),e(l,114,0,"Default","default",!1,"string",10),e(l,118,0,"Description","description",!1,"string",55),e(l,122,0,"Events","assets/apireference/panes/window/window.json","get","events",!1,!1),e(l,125,0,"Name","name",!1,"string",15),e(l,129,0,"Description","description",!1,"string",65),e(l,133,0,"Source"),e(l,136,0),e(l,139,0,"HTML",!0),e(l,141,0,n.htmlCode),e(l,143,0,"Type Script"),e(l,145,0,n.typeScriptCode),e(l,147,0,"Live")},function(e,l){e(l,30,0,a.cb(l,31).role),e(l,32,0,a.cb(l,33).role),e(l,46,0,a.cb(l,47).role),e(l,51,0,a.cb(l,52).role),e(l,58,0,a.cb(l,59).role),e(l,63,0,a.cb(l,64).role),e(l,70,0,a.cb(l,71).role),e(l,77,0,a.cb(l,78).role),e(l,82,0,a.cb(l,83).role),e(l,94,0,a.cb(l,95).role)})}var w=a.Oa("contextmenu-window",t,function(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,1,"contextmenu-window",[],null,null,null,f,h)),a.Ra(1,49152,null,0,t,[p.c],null,null)],null,null)},{},{},[]),y=n("ZYCi");n.d(l,"ContextMenuWindowDemoModuleNgFactory",function(){return x});var x=a.Pa(i,[],function(e){return a.Za([a.ab(512,a.k,a.Ea,[[8,[r.a,o.a,w]],[3,a.k],a.z]),a.ab(4608,m.n,m.m,[a.w,[2,m.w]]),a.ab(4608,p.i,p.o,[m.c,a.D,p.m]),a.ab(4608,p.p,p.p,[p.i,p.n]),a.ab(5120,p.a,function(e){return[e]},[p.p]),a.ab(4608,p.l,p.l,[]),a.ab(6144,p.j,null,[p.l]),a.ab(4608,p.h,p.h,[p.j]),a.ab(6144,p.b,null,[p.h]),a.ab(4608,p.f,p.k,[p.b,a.s]),a.ab(4608,p.c,p.c,[p.f]),a.ab(4608,d.v,d.v,[]),a.ab(4608,c.Ka,c.Ka,[p.c]),a.ab(4608,c.Ua,c.Ua,[a.D]),a.ab(4608,c.bb,c.bb,[]),a.ab(4608,c.xc,c.xc,[]),a.ab(1073742336,m.b,m.b,[]),a.ab(1073742336,p.e,p.e,[]),a.ab(1073742336,p.d,p.d,[]),a.ab(1073742336,s.b,s.b,[]),a.ab(1073742336,d.s,d.s,[]),a.ab(1073742336,d.e,d.e,[]),a.ab(1073742336,c.w,c.w,[]),a.ab(1073742336,c.u,c.u,[]),a.ab(1073742336,c.z,c.z,[]),a.ab(1073742336,c.B,c.B,[]),a.ab(1073742336,c.E,c.E,[]),a.ab(1073742336,c.m,c.m,[]),a.ab(1073742336,c.S,c.S,[]),a.ab(1073742336,y.n,y.n,[[2,y.t],[2,y.m]]),a.ab(1073742336,i,i,[]),a.ab(256,p.m,"XSRF-TOKEN",[]),a.ab(256,p.n,"X-XSRF-TOKEN",[]),a.ab(1024,y.i,function(){return[[{path:"",component:t}]]},[])])})},U89g:function(e,l,n){"use strict";n.d(l,"a",function(){return t}),n.d(l,"b",function(){return i});var a=n("CcnG"),t=(n("d2mR"),n("Ip0R"),a.Qa({encapsulation:2,styles:[],data:{}}));function i(e){return a.mb(0,[],null,null)}},XIHC:function(e,l){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,l,n){"use strict";n.d(l,"a",function(){return a}),n.d(l,"b",function(){return t}),n("wZee"),n("XIHC");var a=function(){function e(e,l){this._renderer=e,this._el=l,this.nativeElement=l.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),t=function(){}},wZee:function(e,l){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,l=0,a=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof t?new t(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++l}),e.__id},clone:function(e,l){var n=a.util.type(e);switch(l=l||{},n){case"Object":if(l[a.util.objId(e)])return l[a.util.objId(e)];var t={};for(var i in l[a.util.objId(e)]=t,e)e.hasOwnProperty(i)&&(t[i]=a.util.clone(e[i],l));return t;case"Array":return l[a.util.objId(e)]?l[a.util.objId(e)]:(t=[],l[a.util.objId(e)]=t,e.forEach(function(e,n){t[n]=a.util.clone(e,l)}),t)}return e}},languages:{extend:function(e,l){var n=a.util.clone(a.languages[e]);for(var t in l)n[t]=l[t];return n},insertBefore:function(e,l,n,t){var i=(t=t||a.languages)[e];if(2==arguments.length){for(var r in n=arguments[1])n.hasOwnProperty(r)&&(i[r]=n[r]);return i}var o={};for(var u in i)if(i.hasOwnProperty(u)){if(u==l)for(var r in n)n.hasOwnProperty(r)&&(o[r]=n[r]);o[u]=i[u]}return a.languages.DFS(a.languages,function(l,n){n===t[e]&&l!=e&&(this[l]=o)}),t[e]=o},DFS:function(e,l,n,t){for(var i in t=t||{},e)e.hasOwnProperty(i)&&(l.call(e,i,e[i],n||i),"Object"!==a.util.type(e[i])||t[a.util.objId(e[i])]?"Array"!==a.util.type(e[i])||t[a.util.objId(e[i])]||(t[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],l,i,t)):(t[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],l,null,t)))}},plugins:{},highlightAll:function(e,l){a.highlightAllUnder(document,e,l)},highlightAllUnder:function(e,l,n){var t={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",t);for(var i,r=t.elements||e.querySelectorAll(t.selector),o=0;i=r[o++];)a.highlightElement(i,!0===l,t.callback)},highlightElement:function(l,t,i){for(var r,o,u=l;u&&!e.test(u.className);)u=u.parentNode;u&&(r=(u.className.match(e)||[,""])[1].toLowerCase(),o=a.languages[r]),l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,l.parentNode&&/pre/i.test((u=l.parentNode).nodeName)&&(u.className=u.className.replace(e,"").replace(/\s+/g," ")+" language-"+r);var s={element:l,language:r,grammar:o,code:l.textContent};if(a.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(a.hooks.run("before-highlight",s),s.element.textContent=s.code,a.hooks.run("after-highlight",s)),void a.hooks.run("complete",s);if(a.hooks.run("before-highlight",s),t&&n.Worker){var c=new Worker(a.filename);c.onmessage=function(e){s.highlightedCode=e.data,a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),a.hooks.run("after-highlight",s),a.hooks.run("complete",s)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=a.highlight(s.code,s.grammar,s.language),a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(l),a.hooks.run("after-highlight",s),a.hooks.run("complete",s)},highlight:function(e,l,n){var i={code:e,grammar:l,language:n};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),t.stringify(a.util.encode(i.tokens),i.language)},matchGrammar:function(e,l,n,t,i,r,o){var u=a.Token;for(var s in n)if(n.hasOwnProperty(s)&&n[s]){if(s==o)return;var c=n[s];c="Array"===a.util.type(c)?c:[c];for(var d=0;d<c.length;++d){var m=c[d],p=m.inside,h=!!m.lookbehind,g=!!m.greedy,b=0,f=m.alias;if(g&&!m.pattern.global){var w=m.pattern.toString().match(/[imuy]*$/)[0];m.pattern=RegExp(m.pattern.source,w+"g")}m=m.pattern||m;for(var y=t,x=i;y<l.length;x+=l[y].length,++y){var k=l[y];if(l.length>e.length)return;if(!(k instanceof u)){if(g&&y!=l.length-1){if(m.lastIndex=x,!(A=m.exec(e)))break;for(var v=A.index+(h?A[1].length:0),S=A.index+A[0].length,R=y,C=x,F=l.length;R<F&&(C<S||!l[R].type&&!l[R-1].greedy);++R)v>=(C+=l[R].length)&&(++y,x=C);if(l[y]instanceof u)continue;N=R-y,k=e.slice(x,C),A.index-=x}else{m.lastIndex=0;var A=m.exec(k),N=1}if(A){h&&(b=A[1]?A[1].length:0),S=(v=A.index+b)+(A=A[0].slice(b)).length;var M=k.slice(0,v),E=k.slice(S),P=[y,N];M&&(++y,x+=M.length,P.push(M));var W=new u(s,p?a.tokenize(A,p):A,f,A,g);if(P.push(W),E&&P.push(E),Array.prototype.splice.apply(l,P),1!=N&&a.matchGrammar(e,l,n,y,x,!0,s),r)break}else if(r)break}}}}},tokenize:function(e,l,n){var t=[e],i=l.rest;if(i){for(var r in i)l[r]=i[r];delete l.rest}return a.matchGrammar(e,t,l,0,0,!1),t},hooks:{all:{},add:function(e,l){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(l)},run:function(e,l){var n=a.hooks.all[e];if(n&&n.length)for(var t,i=0;t=n[i++];)t(l)}}},t=a.Token=function(e,l,n,a,t){this.type=e,this.content=l,this.alias=n,this.length=0|(a||"").length,this.greedy=!!t};if(t.stringify=function(e,l,n){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map(function(n){return t.stringify(n,l,e)}).join("");var i={type:e.type,content:t.stringify(e.content,l,n),tag:"span",classes:["token",e.type],attributes:{},language:l,parent:n};if(e.alias){var r="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,r)}a.hooks.run("wrap",i);var o=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(o?" "+o:"")+">"+i.content+"</"+i.tag+">"},!n.document)return n.addEventListener?(a.disableWorkerMessageHandler||n.addEventListener("message",function(e){var l=JSON.parse(e.data),t=l.language,i=l.immediateClose;n.postMessage(a.highlight(l.code,a.languages[t],t)),i&&n.close()},!1),n.Prism):n.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(a.filename=i.src,a.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),n.Prism}();void 0!==e&&e.exports&&(e.exports=a),"undefined"!=typeof global&&(global.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),a.languages.xml=a.languages.markup,a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},a.languages.css.atrule.inside.rest=a.languages.css,a.languages.markup&&(a.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:a.languages.css,alias:"language-css",greedy:!0}}),a.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:a.languages.css}},alias:"language-css"}},a.languages.markup.tag)),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),a.languages.javascript["template-string"].inside.interpolation.inside.rest=a.languages.javascript,a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:a.languages.javascript,alias:"language-javascript",greedy:!0}}),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(l){for(var n,t=l.getAttribute("data-src"),i=l,r=/\blang(?:uage)?-([\w-]+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(n=(l.className.match(r)||[,""])[1]),!n){var o=(t.match(/\.(\w+)$/)||[,""])[1];n=e[o]||o}var u=document.createElement("code");u.className="language-"+n,l.textContent="",u.textContent="Loading\u2026",l.appendChild(u);var s=new XMLHttpRequest;s.open("GET",t,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(u.textContent=s.responseText,a.highlightElement(u)):u.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},s.send(null)}),a.plugins.toolbar&&a.plugins.toolbar.registerButton("download-file",function(e){var l=e.element.parentNode;if(l&&/pre/i.test(l.nodeName)&&l.hasAttribute("data-src")&&l.hasAttribute("data-download-link")){var n=l.getAttribute("data-src"),a=document.createElement("a");return a.textContent=l.getAttribute("data-download-link-label")||"Download",a.setAttribute("download",""),a.href=n,a}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);