(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{"3LPF":function(e,l,n){"use strict";n.r(l);var a=n("CcnG"),t=function(){},u=n("gTgE"),i=n("pMnS"),r=n("U89g"),o=n("d2mR"),c=n("O4vx"),s=n("gIcY"),d=n("Ip0R"),m=function(){function e(e){this.http=e,this.getHtmlAndTypeScriptCode()}return e.prototype.getHtmlAndTypeScriptCode=function(){var e,l,n=this;this.http.get("assets/data/code/forms/textinput/form.html",{responseType:"text"}).subscribe(function(l){e=l},function(e){},function(){n.htmlCode=e}),this.http.get("assets/data/code/forms/textinput/form.text",{responseType:"text"}).subscribe(function(e){l=e},function(e){},function(){n.typeScriptCode=l})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e}(),b=n("t/Na"),p=a.Qa({encapsulation:2,styles:[],data:{}});function h(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,r.b,r.a)),a.Ra(2,4243456,null,0,o.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.htmlCode,"html")},null)}function g(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,r.b,r.a)),a.Ra(2,4243456,null,0,o.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.typeScriptCode,"typescript")},null)}function f(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,189,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(e,l,n){var t=!0;return"document:click"===l&&(t=!1!==a.cb(e,1).onWindowClick()&&t),"document:scroll"===l&&(t=!1!==a.cb(e,1).onscroll()&&t),t},u.cc,u.k)),a.Ra(1,5357568,null,3,c.j,[],{header:[0,"header"]},null),a.ib(603979776,1,{amexioHeader:1}),a.ib(603979776,2,{amexioBody:1}),a.ib(603979776,3,{amexioFooter:1}),(e()(),a.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,u.nc,u.v)),a.Ra(6,114688,[[1,4]],0,c.A,[],null,null),(e()(),a.kb(-1,0,[" Text Input "])),(e()(),a.Sa(8,0,null,1,181,"amexio-body",[],null,null,null,u.Wb,u.e)),a.Ra(9,114688,[[2,4]],0,c.d,[],null,null),(e()(),a.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),a.kb(-1,null,["Text input component has been created with different configurable attributes for validation (min/max length, allow blank, custom regex), custom error message, help, custom styles."])),(e()(),a.Sa(12,16777216,null,0,177,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(e,l,n){var t=!0;return"document:click"===l&&(t=!1!==a.cb(e,13).onWindowClick()&&t),"document:scroll"===l&&(t=!1!==a.cb(e,13).onscroll()&&t),t},u.yc,u.G)),a.Ra(13,5357568,null,2,c.Q,[a.F,a.k,a.R],null,null),a.ib(603979776,4,{queryTabs:1}),a.ib(603979776,5,{queryAction:1}),(e()(),a.Sa(16,0,null,1,121,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,u.zc,u.H)),a.Ra(17,114688,[[4,4]],0,c.R,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),a.Sa(18,0,null,0,33,"amexio-row",[],null,null,null,u.uc,u.C)),a.Ra(19,1163264,null,0,c.M,[],null,null),(e()(),a.Sa(20,0,null,0,15,"amexio-column",[["size","6"]],[[1,"class",0]],null,null,u.ec,u.m)),a.Ra(21,114688,null,0,c.m,[],{size:[0,"size"]},null),(e()(),a.Sa(22,0,null,0,13,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(e,l,n){var t=!0;return"document:click"===l&&(t=!1!==a.cb(e,23).onWindowClick()&&t),"document:scroll"===l&&(t=!1!==a.cb(e,23).onscroll()&&t),t},u.cc,u.k)),a.Ra(23,5357568,null,3,c.j,[],{header:[0,"header"]},null),a.ib(603979776,6,{amexioHeader:1}),a.ib(603979776,7,{amexioBody:1}),a.ib(603979776,8,{amexioFooter:1}),(e()(),a.Sa(27,0,null,0,2,"amexio-header",[],null,null,null,u.nc,u.v)),a.Ra(28,114688,[[6,4]],0,c.A,[],null,null),(e()(),a.kb(-1,0,[" Basic Text Field "])),(e()(),a.Sa(30,0,null,1,5,"amexio-body",[],null,null,null,u.Wb,u.e)),a.Ra(31,114688,[[7,4]],0,c.d,[],null,null),(e()(),a.Sa(32,0,null,0,3,"amexio-text-input",[["field-label","Name"],["icon-feedback","true"],["name","name"],["place-holder","Enter name"]],null,null,null,u.Xd,u.Fb)),a.hb(5120,null,s.o,function(e){return[e]},[c.uc]),a.hb(5120,null,s.n,function(e){return[e]},[c.uc]),a.Ra(35,114688,null,0,c.uc,[],{fieldlabel:[0,"fieldlabel"],placeholder:[1,"placeholder"],iconfeedback:[2,"iconfeedback"],name:[3,"name"]},null),(e()(),a.Sa(36,0,null,0,15,"amexio-column",[],[[1,"class",0]],null,null,u.ec,u.m)),a.Ra(37,114688,null,0,c.m,[],{size:[0,"size"]},null),(e()(),a.Sa(38,0,null,0,13,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(e,l,n){var t=!0;return"document:click"===l&&(t=!1!==a.cb(e,39).onWindowClick()&&t),"document:scroll"===l&&(t=!1!==a.cb(e,39).onscroll()&&t),t},u.cc,u.k)),a.Ra(39,5357568,null,3,c.j,[],{header:[0,"header"]},null),a.ib(603979776,9,{amexioHeader:1}),a.ib(603979776,10,{amexioBody:1}),a.ib(603979776,11,{amexioFooter:1}),(e()(),a.Sa(43,0,null,0,2,"amexio-header",[],null,null,null,u.nc,u.v)),a.Ra(44,114688,[[9,4]],0,c.A,[],null,null),(e()(),a.kb(-1,0,[" Input Without Label and Icon feedback "])),(e()(),a.Sa(46,0,null,1,5,"amexio-body",[],null,null,null,u.Wb,u.e)),a.Ra(47,114688,[[10,4]],0,c.d,[],null,null),(e()(),a.Sa(48,0,null,0,3,"amexio-text-input",[["has-label","false"],["name","name"],["place-holder","Enter name"]],null,null,null,u.Xd,u.Fb)),a.hb(5120,null,s.o,function(e){return[e]},[c.uc]),a.hb(5120,null,s.n,function(e){return[e]},[c.uc]),a.Ra(51,114688,null,0,c.uc,[],{placeholder:[0,"placeholder"],haslabel:[1,"haslabel"],name:[2,"name"]},null),(e()(),a.Sa(52,0,null,0,33,"amexio-row",[],null,null,null,u.uc,u.C)),a.Ra(53,1163264,null,0,c.M,[],null,null),(e()(),a.Sa(54,0,null,0,15,"amexio-column",[["size","6"]],[[1,"class",0]],null,null,u.ec,u.m)),a.Ra(55,114688,null,0,c.m,[],{size:[0,"size"]},null),(e()(),a.Sa(56,0,null,0,13,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(e,l,n){var t=!0;return"document:click"===l&&(t=!1!==a.cb(e,57).onWindowClick()&&t),"document:scroll"===l&&(t=!1!==a.cb(e,57).onscroll()&&t),t},u.cc,u.k)),a.Ra(57,5357568,null,3,c.j,[],{header:[0,"header"]},null),a.ib(603979776,12,{amexioHeader:1}),a.ib(603979776,13,{amexioBody:1}),a.ib(603979776,14,{amexioFooter:1}),(e()(),a.Sa(61,0,null,0,2,"amexio-header",[],null,null,null,u.nc,u.v)),a.Ra(62,114688,[[12,4]],0,c.A,[],null,null),(e()(),a.kb(-1,0,[" Min/Max Validations "])),(e()(),a.Sa(64,0,null,1,5,"amexio-body",[],null,null,null,u.Wb,u.e)),a.Ra(65,114688,[[13,4]],0,c.d,[],null,null),(e()(),a.Sa(66,0,null,0,3,"amexio-text-input",[["allow-blank","false"],["enable-popover","true"],["error-msg","Please enter last name"],["field-label","Name"],["icon-feedback","true"],["max-error-msg","Maximum 10 char allowed"],["max-length","10"],["min-length","1"],["minerror-msg","Minimum 1 char required"],["name","name"],["place-holder","Enter name"]],null,null,null,u.Xd,u.Fb)),a.hb(5120,null,s.o,function(e){return[e]},[c.uc]),a.hb(5120,null,s.n,function(e){return[e]},[c.uc]),a.Ra(69,114688,null,0,c.uc,[],{fieldlabel:[0,"fieldlabel"],minlength:[1,"minlength"],maxlength:[2,"maxlength"],allowblank:[3,"allowblank"],errormsg:[4,"errormsg"],maxerrormsg:[5,"maxerrormsg"],placeholder:[6,"placeholder"],iconfeedback:[7,"iconfeedback"],enablepopover:[8,"enablepopover"],name:[9,"name"]},null),(e()(),a.Sa(70,0,null,0,15,"amexio-column",[],[[1,"class",0]],null,null,u.ec,u.m)),a.Ra(71,114688,null,0,c.m,[],{size:[0,"size"]},null),(e()(),a.Sa(72,0,null,0,13,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(e,l,n){var t=!0;return"document:click"===l&&(t=!1!==a.cb(e,73).onWindowClick()&&t),"document:scroll"===l&&(t=!1!==a.cb(e,73).onscroll()&&t),t},u.cc,u.k)),a.Ra(73,5357568,null,3,c.j,[],{header:[0,"header"]},null),a.ib(603979776,15,{amexioHeader:1}),a.ib(603979776,16,{amexioBody:1}),a.ib(603979776,17,{amexioFooter:1}),(e()(),a.Sa(77,0,null,0,2,"amexio-header",[],null,null,null,u.nc,u.v)),a.Ra(78,114688,[[15,4]],0,c.A,[],null,null),(e()(),a.kb(-1,0,[" Disabled Text Field "])),(e()(),a.Sa(80,0,null,1,5,"amexio-body",[],null,null,null,u.Wb,u.e)),a.Ra(81,114688,[[16,4]],0,c.d,[],null,null),(e()(),a.Sa(82,0,null,0,3,"amexio-text-input",[["disabled","true"],["field-label","Name"],["name","name"],["place-holder","Enter name"]],null,null,null,u.Xd,u.Fb)),a.hb(5120,null,s.o,function(e){return[e]},[c.uc]),a.hb(5120,null,s.n,function(e){return[e]},[c.uc]),a.Ra(85,114688,null,0,c.uc,[],{fieldlabel:[0,"fieldlabel"],placeholder:[1,"placeholder"],disabled:[2,"disabled"],name:[3,"name"]},null),(e()(),a.Sa(86,0,null,0,33,"amexio-row",[],null,null,null,u.uc,u.C)),a.Ra(87,1163264,null,0,c.M,[],null,null),(e()(),a.Sa(88,0,null,0,15,"amexio-column",[["size","6"]],[[1,"class",0]],null,null,u.ec,u.m)),a.Ra(89,114688,null,0,c.m,[],{size:[0,"size"]},null),(e()(),a.Sa(90,0,null,0,13,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(e,l,n){var t=!0;return"document:click"===l&&(t=!1!==a.cb(e,91).onWindowClick()&&t),"document:scroll"===l&&(t=!1!==a.cb(e,91).onscroll()&&t),t},u.cc,u.k)),a.Ra(91,5357568,null,3,c.j,[],{header:[0,"header"]},null),a.ib(603979776,18,{amexioHeader:1}),a.ib(603979776,19,{amexioBody:1}),a.ib(603979776,20,{amexioFooter:1}),(e()(),a.Sa(95,0,null,0,2,"amexio-header",[],null,null,null,u.nc,u.v)),a.Ra(96,114688,[[18,4]],0,c.A,[],null,null),(e()(),a.kb(-1,0,[" Font Styling "])),(e()(),a.Sa(98,0,null,1,5,"amexio-body",[],null,null,null,u.Wb,u.e)),a.Ra(99,114688,[[19,4]],0,c.d,[],null,null),(e()(),a.Sa(100,0,null,0,3,"amexio-text-input",[["field-label","Name"],["font-style","italic"],["icon-feedback","true"],["name","name"],["place-holder","Enter name"]],null,null,null,u.Xd,u.Fb)),a.hb(5120,null,s.o,function(e){return[e]},[c.uc]),a.hb(5120,null,s.n,function(e){return[e]},[c.uc]),a.Ra(103,114688,null,0,c.uc,[],{fieldlabel:[0,"fieldlabel"],placeholder:[1,"placeholder"],iconfeedback:[2,"iconfeedback"],fontstyle:[3,"fontstyle"],name:[4,"name"]},null),(e()(),a.Sa(104,0,null,0,15,"amexio-column",[["size","6"]],[[1,"class",0]],null,null,u.ec,u.m)),a.Ra(105,114688,null,0,c.m,[],{size:[0,"size"]},null),(e()(),a.Sa(106,0,null,0,13,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(e,l,n){var t=!0;return"document:click"===l&&(t=!1!==a.cb(e,107).onWindowClick()&&t),"document:scroll"===l&&(t=!1!==a.cb(e,107).onscroll()&&t),t},u.cc,u.k)),a.Ra(107,5357568,null,3,c.j,[],{header:[0,"header"]},null),a.ib(603979776,21,{amexioHeader:1}),a.ib(603979776,22,{amexioBody:1}),a.ib(603979776,23,{amexioFooter:1}),(e()(),a.Sa(111,0,null,0,2,"amexio-header",[],null,null,null,u.nc,u.v)),a.Ra(112,114688,[[21,4]],0,c.A,[],null,null),(e()(),a.kb(-1,0,[" Font Size & Family Styling "])),(e()(),a.Sa(114,0,null,1,5,"amexio-body",[],null,null,null,u.Wb,u.e)),a.Ra(115,114688,[[22,4]],0,c.d,[],null,null),(e()(),a.Sa(116,0,null,0,3,"amexio-text-input",[["name","name"]],null,null,null,u.Xd,u.Fb)),a.hb(5120,null,s.o,function(e){return[e]},[c.uc]),a.hb(5120,null,s.n,function(e){return[e]},[c.uc]),a.Ra(119,114688,null,0,c.uc,[],{fieldlabel:[0,"fieldlabel"],placeholder:[1,"placeholder"],iconfeedback:[2,"iconfeedback"],fontsize:[3,"fontsize"],name:[4,"name"]},null),(e()(),a.Sa(120,0,null,0,17,"amexio-row",[],null,null,null,u.uc,u.C)),a.Ra(121,1163264,null,0,c.M,[],null,null),(e()(),a.Sa(122,0,null,0,15,"amexio-column",[],[[1,"class",0]],null,null,u.ec,u.m)),a.Ra(123,114688,null,0,c.m,[],{size:[0,"size"]},null),(e()(),a.Sa(124,0,null,0,13,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(e,l,n){var t=!0;return"document:click"===l&&(t=!1!==a.cb(e,125).onWindowClick()&&t),"document:scroll"===l&&(t=!1!==a.cb(e,125).onscroll()&&t),t},u.cc,u.k)),a.Ra(125,5357568,null,3,c.j,[],{header:[0,"header"]},null),a.ib(603979776,24,{amexioHeader:1}),a.ib(603979776,25,{amexioBody:1}),a.ib(603979776,26,{amexioFooter:1}),(e()(),a.Sa(129,0,null,0,2,"amexio-header",[],null,null,null,u.nc,u.v)),a.Ra(130,114688,[[24,4]],0,c.A,[],null,null),(e()(),a.kb(-1,0,[" Input with Pattern "])),(e()(),a.Sa(132,0,null,1,5,"amexio-body",[],null,null,null,u.Wb,u.e)),a.Ra(133,114688,[[25,4]],0,c.d,[],null,null),(e()(),a.Sa(134,0,null,0,3,"amexio-text-input",[["name","name"]],null,null,null,u.Xd,u.Fb)),a.hb(5120,null,s.o,function(e){return[e]},[c.uc]),a.hb(5120,null,s.n,function(e){return[e]},[c.uc]),a.Ra(137,114688,null,0,c.uc,[],{fieldlabel:[0,"fieldlabel"],placeholder:[1,"placeholder"],iconfeedback:[2,"iconfeedback"],pattern:[3,"pattern"],name:[4,"name"]},null),(e()(),a.Sa(138,0,null,1,32,"amexio-tab",[["title","API Reference"]],null,null,null,u.zc,u.H)),a.Ra(139,114688,[[4,4]],0,c.R,[],{title:[0,"title"]},null),(e()(),a.Sa(140,0,null,0,18,"amexio-datagrid",[["title","Properties <amexio-textinput>"]],null,[["document","scroll"],["document","click"]],function(e,l,n){var t=!0;return"document:scroll"===l&&(t=!1!==a.cb(e,141).onscroll()&&t),"document:click"===l&&(t=!1!==a.cb(e,141).onclick()&&t),t},u.Qd,u.yb)),a.Ra(141,1163264,null,1,c.jc,[a.l,c.Pa,a.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,27,{columnRef:1}),(e()(),a.Sa(143,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Rd,u.zb)),a.Ra(144,49152,[[27,4]],2,c.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,28,{headerTemplate:0}),a.ib(335544320,29,{bodyTemplate:0}),(e()(),a.Sa(147,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Rd,u.zb)),a.Ra(148,49152,[[27,4]],2,c.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,30,{headerTemplate:0}),a.ib(335544320,31,{bodyTemplate:0}),(e()(),a.Sa(151,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Rd,u.zb)),a.Ra(152,49152,[[27,4]],2,c.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,32,{headerTemplate:0}),a.ib(335544320,33,{bodyTemplate:0}),(e()(),a.Sa(155,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Rd,u.zb)),a.Ra(156,49152,[[27,4]],2,c.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,34,{headerTemplate:0}),a.ib(335544320,35,{bodyTemplate:0}),(e()(),a.Sa(159,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),a.Sa(160,0,null,0,10,"amexio-datagrid",[["title","Events <amexio-textinput>"]],null,[["document","scroll"],["document","click"]],function(e,l,n){var t=!0;return"document:scroll"===l&&(t=!1!==a.cb(e,161).onscroll()&&t),"document:click"===l&&(t=!1!==a.cb(e,161).onclick()&&t),t},u.Qd,u.yb)),a.Ra(161,1163264,null,1,c.jc,[a.l,c.Pa,a.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),a.ib(603979776,36,{columnRef:1}),(e()(),a.Sa(163,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Rd,u.zb)),a.Ra(164,49152,[[36,4]],2,c.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,37,{headerTemplate:0}),a.ib(335544320,38,{bodyTemplate:0}),(e()(),a.Sa(167,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Rd,u.zb)),a.Ra(168,49152,[[36,4]],2,c.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,39,{headerTemplate:0}),a.ib(335544320,40,{bodyTemplate:0}),(e()(),a.Sa(171,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,u.zc,u.H)),a.Ra(172,114688,[[4,4]],0,c.R,[],{title:[0,"title"]},null),(e()(),a.Sa(173,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),a.Sa(174,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,u.Bc,u.J)),a.Ra(175,5357568,null,1,c.V,[a.F],null,null),a.ib(603979776,41,{queryTabs:1}),(e()(),a.Sa(177,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,u.zc,u.H)),a.Ra(178,114688,[[41,4]],0,c.R,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),a.Ja(16777216,null,0,1,null,h)),a.Ra(180,16384,null,0,d.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(e()(),a.Sa(181,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,u.zc,u.H)),a.Ra(182,114688,[[41,4]],0,c.R,[],{title:[0,"title"]},null),(e()(),a.Ja(16777216,null,0,1,null,g)),a.Ra(184,16384,null,0,d.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(e()(),a.Sa(185,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,u.zc,u.H)),a.Ra(186,114688,[[4,4]],0,c.R,[],{title:[0,"title"]},null),(e()(),a.Sa(187,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),a.kb(-1,null,["Amexio Sandbox"])),(e()(),a.Sa(189,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-textinput?embed=1&file=app/forms/text/text.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,l){var n=l.component;e(l,1,0,"true"),e(l,6,0),e(l,9,0),e(l,13,0),e(l,17,0,"Demo","true"),e(l,19,0),e(l,21,0,"6"),e(l,23,0,"true"),e(l,28,0),e(l,31,0),e(l,35,0,"Name","Enter name","true","name"),e(l,37,0,6),e(l,39,0,!0),e(l,44,0),e(l,47,0),e(l,51,0,"Enter name","false","name"),e(l,53,0),e(l,55,0,"6"),e(l,57,0,!0),e(l,62,0),e(l,65,0),e(l,69,0,"Name","1","10","false","Please enter last name","Maximum 10 char allowed","Enter name","true",!0,"name"),e(l,71,0,6),e(l,73,0,!0),e(l,78,0),e(l,81,0),e(l,85,0,"Name","Enter name","true","name"),e(l,87,0),e(l,89,0,"6"),e(l,91,0,"true"),e(l,96,0),e(l,99,0),e(l,103,0,"Name","Enter name","true","italic","name"),e(l,105,0,"6"),e(l,107,0,"true"),e(l,112,0),e(l,115,0),e(l,119,0,"Name","Enter name",!1,"large","name"),e(l,121,0),e(l,123,0,6),e(l,125,0,!0),e(l,130,0),e(l,133,0),e(l,137,0,"Name","Enter name",!0,"[a-z]","name"),e(l,139,0,"API Reference"),e(l,141,0,"Properties <amexio-textinput>","assets/apireference/forms/textinput.json","get","properties",!1,!1),e(l,144,0,"Name","name",!1,"string",15),e(l,148,0,"Type","type",!1,"string",10),e(l,152,0,"Default","default",!1,"string",10),e(l,156,0,"Description","description",!1,"string",65),e(l,161,0,"Events <amexio-textinput>","assets/apireference/forms/textinput.json","get","events",!1),e(l,164,0,"Name","name",!1,"string",20),e(l,168,0,"Description","description",!1,"string",80),e(l,172,0,"Source"),e(l,175,0),e(l,178,0,"HTML",!0),e(l,180,0,n.htmlCode),e(l,182,0,"Type Script"),e(l,184,0,n.typeScriptCode),e(l,186,0,"Live")},function(e,l){e(l,20,0,a.cb(l,21).role),e(l,36,0,a.cb(l,37).role),e(l,54,0,a.cb(l,55).role),e(l,70,0,a.cb(l,71).role),e(l,88,0,a.cb(l,89).role),e(l,104,0,a.cb(l,105).role),e(l,122,0,a.cb(l,123).role)})}var x=a.Oa("text-demo",m,function(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,1,"text-demo",[],null,null,null,f,p)),a.Ra(1,49152,null,0,m,[b.c],null,null)],null,null)},{},{},[]),y=n("ZYCi");n.d(l,"TextDemoModuleNgFactory",function(){return k});var k=a.Pa(t,[],function(e){return a.Za([a.ab(512,a.k,a.Ea,[[8,[u.a,i.a,x]],[3,a.k],a.z]),a.ab(4608,d.o,d.n,[a.w,[2,d.x]]),a.ab(4608,s.E,s.E,[]),a.ab(4608,b.i,b.o,[d.d,a.D,b.m]),a.ab(4608,b.p,b.p,[b.i,b.n]),a.ab(5120,b.a,function(e){return[e]},[b.p]),a.ab(4608,b.l,b.l,[]),a.ab(6144,b.j,null,[b.l]),a.ab(4608,b.h,b.h,[b.j]),a.ab(6144,b.b,null,[b.h]),a.ab(4608,b.f,b.k,[b.b,a.s]),a.ab(4608,b.c,b.c,[b.f]),a.ab(4608,c.Pa,c.Pa,[b.c]),a.ab(4608,c.Za,c.Za,[a.D]),a.ab(4608,c.gb,c.gb,[]),a.ab(4608,c.z,c.z,[]),a.ab(4608,c.Ab,c.Ab,[]),a.ab(4608,s.e,s.e,[]),a.ab(1073742336,d.c,d.c,[]),a.ab(1073742336,s.B,s.B,[]),a.ab(1073742336,s.k,s.k,[]),a.ab(1073742336,b.e,b.e,[]),a.ab(1073742336,b.d,b.d,[]),a.ab(1073742336,o.b,o.b,[]),a.ab(1073742336,c.B,c.B,[]),a.ab(1073742336,c.w,c.w,[]),a.ab(1073742336,c.E,c.E,[]),a.ab(1073742336,c.G,c.G,[]),a.ab(1073742336,s.x,s.x,[]),a.ab(1073742336,c.J,c.J,[]),a.ab(1073742336,c.o,c.o,[]),a.ab(1073742336,c.X,c.X,[]),a.ab(1073742336,y.n,y.n,[[2,y.t],[2,y.m]]),a.ab(1073742336,t,t,[]),a.ab(256,b.m,"XSRF-TOKEN",[]),a.ab(256,b.n,"X-XSRF-TOKEN",[]),a.ab(1024,y.i,function(){return[[{path:"",component:m,pathMatch:"full"}]]},[])])})},U89g:function(e,l,n){"use strict";n.d(l,"a",function(){return t}),n.d(l,"b",function(){return u});var a=n("CcnG"),t=(n("d2mR"),n("Ip0R"),a.Qa({encapsulation:2,styles:[],data:{}}));function u(e){return a.mb(0,[],null,null)}},XIHC:function(e,l){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,l,n){"use strict";n.d(l,"a",function(){return a}),n.d(l,"b",function(){return t}),n("wZee"),n("XIHC");var a=function(){function e(e,l){this._renderer=e,this._el=l,this.nativeElement=l.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),t=function(){}},wZee:function(e,l){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,l=0,a=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof t?new t(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++l}),e.__id},clone:function(e,l){var n=a.util.type(e);switch(l=l||{},n){case"Object":if(l[a.util.objId(e)])return l[a.util.objId(e)];var t={};for(var u in l[a.util.objId(e)]=t,e)e.hasOwnProperty(u)&&(t[u]=a.util.clone(e[u],l));return t;case"Array":return l[a.util.objId(e)]?l[a.util.objId(e)]:(t=[],l[a.util.objId(e)]=t,e.forEach(function(e,n){t[n]=a.util.clone(e,l)}),t)}return e}},languages:{extend:function(e,l){var n=a.util.clone(a.languages[e]);for(var t in l)n[t]=l[t];return n},insertBefore:function(e,l,n,t){var u=(t=t||a.languages)[e];if(2==arguments.length){for(var i in n=arguments[1])n.hasOwnProperty(i)&&(u[i]=n[i]);return u}var r={};for(var o in u)if(u.hasOwnProperty(o)){if(o==l)for(var i in n)n.hasOwnProperty(i)&&(r[i]=n[i]);r[o]=u[o]}return a.languages.DFS(a.languages,function(l,n){n===t[e]&&l!=e&&(this[l]=r)}),t[e]=r},DFS:function(e,l,n,t){for(var u in t=t||{},e)e.hasOwnProperty(u)&&(l.call(e,u,e[u],n||u),"Object"!==a.util.type(e[u])||t[a.util.objId(e[u])]?"Array"!==a.util.type(e[u])||t[a.util.objId(e[u])]||(t[a.util.objId(e[u])]=!0,a.languages.DFS(e[u],l,u,t)):(t[a.util.objId(e[u])]=!0,a.languages.DFS(e[u],l,null,t)))}},plugins:{},highlightAll:function(e,l){a.highlightAllUnder(document,e,l)},highlightAllUnder:function(e,l,n){var t={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",t);for(var u,i=t.elements||e.querySelectorAll(t.selector),r=0;u=i[r++];)a.highlightElement(u,!0===l,t.callback)},highlightElement:function(l,t,u){for(var i,r,o=l;o&&!e.test(o.className);)o=o.parentNode;o&&(i=(o.className.match(e)||[,""])[1].toLowerCase(),r=a.languages[i]),l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+i,l.parentNode&&/pre/i.test((o=l.parentNode).nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+i);var c={element:l,language:i,grammar:r,code:l.textContent};if(a.hooks.run("before-sanity-check",c),!c.code||!c.grammar)return c.code&&(a.hooks.run("before-highlight",c),c.element.textContent=c.code,a.hooks.run("after-highlight",c)),void a.hooks.run("complete",c);if(a.hooks.run("before-highlight",c),t&&n.Worker){var s=new Worker(a.filename);s.onmessage=function(e){c.highlightedCode=e.data,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,u&&u.call(c.element),a.hooks.run("after-highlight",c),a.hooks.run("complete",c)},s.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=a.highlight(c.code,c.grammar,c.language),a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,u&&u.call(l),a.hooks.run("after-highlight",c),a.hooks.run("complete",c)},highlight:function(e,l,n){var u={code:e,grammar:l,language:n};return a.hooks.run("before-tokenize",u),u.tokens=a.tokenize(u.code,u.grammar),a.hooks.run("after-tokenize",u),t.stringify(a.util.encode(u.tokens),u.language)},matchGrammar:function(e,l,n,t,u,i,r){var o=a.Token;for(var c in n)if(n.hasOwnProperty(c)&&n[c]){if(c==r)return;var s=n[c];s="Array"===a.util.type(s)?s:[s];for(var d=0;d<s.length;++d){var m=s[d],b=m.inside,p=!!m.lookbehind,h=!!m.greedy,g=0,f=m.alias;if(h&&!m.pattern.global){var x=m.pattern.toString().match(/[imuy]*$/)[0];m.pattern=RegExp(m.pattern.source,x+"g")}m=m.pattern||m;for(var y=t,k=u;y<l.length;k+=l[y].length,++y){var v=l[y];if(l.length>e.length)return;if(!(v instanceof o)){if(h&&y!=l.length-1){if(m.lastIndex=k,!(C=m.exec(e)))break;for(var S=C.index+(p?C[1].length:0),w=C.index+C[0].length,R=y,F=k,A=l.length;R<A&&(F<w||!l[R].type&&!l[R-1].greedy);++R)S>=(F+=l[R].length)&&(++y,k=F);if(l[y]instanceof o)continue;z=R-y,v=e.slice(k,F),C.index-=k}else{m.lastIndex=0;var C=m.exec(v),z=1}if(C){p&&(g=C[1]?C[1].length:0),w=(S=C.index+g)+(C=C[0].slice(g)).length;var j=v.slice(0,S),E=v.slice(w),N=[y,z];j&&(++y,k+=j.length,N.push(j));var T=new o(c,b?a.tokenize(C,b):C,f,C,h);if(N.push(T),E&&N.push(E),Array.prototype.splice.apply(l,N),1!=z&&a.matchGrammar(e,l,n,y,k,!0,c),i)break}else if(i)break}}}}},tokenize:function(e,l,n){var t=[e],u=l.rest;if(u){for(var i in u)l[i]=u[i];delete l.rest}return a.matchGrammar(e,t,l,0,0,!1),t},hooks:{all:{},add:function(e,l){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(l)},run:function(e,l){var n=a.hooks.all[e];if(n&&n.length)for(var t,u=0;t=n[u++];)t(l)}}},t=a.Token=function(e,l,n,a,t){this.type=e,this.content=l,this.alias=n,this.length=0|(a||"").length,this.greedy=!!t};if(t.stringify=function(e,l,n){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map(function(n){return t.stringify(n,l,e)}).join("");var u={type:e.type,content:t.stringify(e.content,l,n),tag:"span",classes:["token",e.type],attributes:{},language:l,parent:n};if(e.alias){var i="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(u.classes,i)}a.hooks.run("wrap",u);var r=Object.keys(u.attributes).map(function(e){return e+'="'+(u.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+u.tag+' class="'+u.classes.join(" ")+'"'+(r?" "+r:"")+">"+u.content+"</"+u.tag+">"},!n.document)return n.addEventListener?(a.disableWorkerMessageHandler||n.addEventListener("message",function(e){var l=JSON.parse(e.data),t=l.language,u=l.immediateClose;n.postMessage(a.highlight(l.code,a.languages[t],t)),u&&n.close()},!1),n.Prism):n.Prism;var u=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return u&&(a.filename=u.src,a.manual||u.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),n.Prism}();void 0!==e&&e.exports&&(e.exports=a),"undefined"!=typeof global&&(global.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),a.languages.xml=a.languages.markup,a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},a.languages.css.atrule.inside.rest=a.languages.css,a.languages.markup&&(a.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:a.languages.css,alias:"language-css",greedy:!0}}),a.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:a.languages.css}},alias:"language-css"}},a.languages.markup.tag)),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),a.languages.javascript["template-string"].inside.interpolation.inside.rest=a.languages.javascript,a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:a.languages.javascript,alias:"language-javascript",greedy:!0}}),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(l){for(var n,t=l.getAttribute("data-src"),u=l,i=/\blang(?:uage)?-([\w-]+)\b/i;u&&!i.test(u.className);)u=u.parentNode;if(u&&(n=(l.className.match(i)||[,""])[1]),!n){var r=(t.match(/\.(\w+)$/)||[,""])[1];n=e[r]||r}var o=document.createElement("code");o.className="language-"+n,l.textContent="",o.textContent="Loading\u2026",l.appendChild(o);var c=new XMLHttpRequest;c.open("GET",t,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(o.textContent=c.responseText,a.highlightElement(o)):o.textContent=c.status>=400?"\u2716 Error "+c.status+" while fetching file: "+c.statusText:"\u2716 Error: File does not exist or is empty")},c.send(null)}),a.plugins.toolbar&&a.plugins.toolbar.registerButton("download-file",function(e){var l=e.element.parentNode;if(l&&/pre/i.test(l.nodeName)&&l.hasAttribute("data-src")&&l.hasAttribute("data-download-link")){var n=l.getAttribute("data-src"),a=document.createElement("a");return a.textContent=l.getAttribute("data-download-link-label")||"Download",a.setAttribute("download",""),a.href=n,a}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);