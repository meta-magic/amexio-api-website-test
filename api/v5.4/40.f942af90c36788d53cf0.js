(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{U89g:function(l,e,n){"use strict";n.d(e,"a",function(){return t}),n.d(e,"b",function(){return i});var a=n("CcnG"),t=(n("d2mR"),n("Ip0R"),a.Qa({encapsulation:2,styles:[],data:{}}));function i(l){return a.mb(0,[],null,null)}},XIHC:function(l,e){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(l,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return t}),n("wZee"),n("XIHC");var a=function(){function l(l,e){this._renderer=l,this._el=e,this.nativeElement=e.nativeElement}return l.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},l}(),t=function(){}},"j9+S":function(l,e,n){"use strict";n.r(e);var a=n("CcnG"),t=function(){},i=n("gTgE"),u=n("pMnS"),o=n("U89g"),r=n("d2mR"),s=n("O4vx"),c=n("Ip0R"),d=function(){function l(l){this.http=l,this.clickShow=!0,this.text="Hide",this.getHtmlAndTypeScriptCode(),this.colorModel=new p}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,e,n=this;this.http.get("assets/data/code/data/spinner/spinner.html",{responseType:"text"}).subscribe(function(e){l=e},function(l){},function(){n.htmlCode=l}),this.http.get("assets/data/code/data/spinner/spinner.text",{responseType:"text"}).subscribe(function(l){e=l},function(l){},function(){n.typeScriptCode=e})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l.prototype.setColorForIndictor=function(l){this.colorModel.color=l.target.value},l.prototype.onButtonClick=function(l){this.text=this.clickShow?"Show":"Hide",this.clickShow=!this.clickShow},l}(),p=function(){},m=n("t/Na"),h=a.Qa({encapsulation:2,styles:[],data:{}});function g(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),a.Ra(2,4243456,null,0,r.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,e){l(e,2,0,e.component.htmlCode,"html")},null)}function b(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),a.Ra(2,4243456,null,0,r.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,e){l(e,2,0,e.component.typeScriptCode,"typescript")},null)}function f(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,200,"amexio-card",[["header","true"]],null,null,null,i.bc,i.k)),a.Ra(1,5488640,null,3,s.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,1,{amexioHeader:1}),a.ib(603979776,2,{amexioBody:1}),a.ib(603979776,3,{amexioFooter:1}),(l()(),a.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),a.Ra(6,114688,[[1,4]],0,s.A,[],null,null),(l()(),a.kb(-1,0,[" Data Loading Indicator "])),(l()(),a.Sa(8,0,null,1,192,"amexio-body",[],null,null,null,i.Vb,i.e)),a.Ra(9,114688,[[2,4]],0,s.d,[],null,null),(l()(),a.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),a.kb(-1,null,["Data Loading Indicator Component Provides up-to-date feedback on the progress of a workflow or action with simple yet flexible spinner and easy to configure."])),(l()(),a.Sa(12,16777216,null,0,188,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,e,n){var t=!0;return"document:click"===e&&(t=!1!==a.cb(l,13).onWindowClick()&&t),"document:scroll"===e&&(t=!1!==a.cb(l,13).onscroll()&&t),t},i.xc,i.G)),a.Ra(13,5357568,null,2,s.Q,[a.F,a.k,a.R],null,null),a.ib(603979776,4,{queryTabs:1}),a.ib(603979776,5,{queryAction:1}),(l()(),a.Sa(16,0,null,1,140,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.yc,i.H)),a.Ra(17,114688,[[4,4]],0,s.R,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),a.Sa(18,0,null,0,138,"amexio-row",[],null,null,null,i.tc,i.C)),a.Ra(19,1163264,null,0,s.M,[],null,null),(l()(),a.Sa(20,0,null,0,136,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,i.dc,i.m)),a.Ra(21,114688,null,0,s.m,[],{size:[0,"size"]},null),(l()(),a.Sa(22,0,null,0,134,"amexio-card",[],null,null,null,i.bc,i.k)),a.Ra(23,5488640,null,3,s.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,6,{amexioHeader:1}),a.ib(603979776,7,{amexioBody:1}),a.ib(603979776,8,{amexioFooter:1}),(l()(),a.Sa(27,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),a.Ra(28,114688,[[6,4]],0,s.A,[],null,null),(l()(),a.kb(-1,0,[" Data Loading Indicator "])),(l()(),a.Sa(30,0,null,1,126,"amexio-body",[],null,null,null,i.Vb,i.e)),a.Ra(31,114688,[[7,4]],0,s.d,[],null,null),(l()(),a.Sa(32,0,null,0,1,"amexio-button",[],null,[[null,"onClick"]],function(l,e,n){var t=!0;return"onClick"===e&&(t=!1!==l.component.onButtonClick(a.cb(l,54))&&t),t},i.Zb,i.i)),a.Ra(33,114688,null,0,s.h,[],{label:[0,"label"],type:[1,"type"],tooltip:[2,"tooltip"]},{onClick:"onClick"}),(l()(),a.Sa(34,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),a.Sa(35,0,null,0,2,"amexio-label",[["size","small-bold"]],null,null,null,i.sd,i.bb)),a.Ra(36,114688,null,0,s.Eb,[],{styleClass:[0,"styleClass"]},null),(l()(),a.kb(-1,0,["Select Color For Spinner : -"])),(l()(),a.Sa(38,0,null,0,0,"input",[["id","head"],["name","color"],["type","color"],["value","colorModel.color"]],null,[[null,"input"]],function(l,e,n){var a=!0;return"input"===e&&(a=!1!==l.component.setColorForIndictor(n)&&a),a},null,null)),(l()(),a.Sa(39,0,null,0,43,"amexio-row",[],null,null,null,i.tc,i.C)),a.Ra(40,1163264,null,0,s.M,[],null,null),(l()(),a.Sa(41,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,i.dc,i.m)),a.Ra(42,114688,null,0,s.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(43,0,null,0,11,"amexio-card",[],null,null,null,i.bc,i.k)),a.Ra(44,5488640,null,3,s.j,[a.F],{header:[0,"header"],bodyheight:[1,"bodyheight"]},null),a.ib(603979776,9,{amexioHeader:1}),a.ib(603979776,10,{amexioBody:1}),a.ib(603979776,11,{amexioFooter:1}),(l()(),a.Sa(48,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),a.Ra(49,114688,[[9,4]],0,s.A,[],null,null),(l()(),a.kb(-1,0,[" fading circle round loader "])),(l()(),a.Sa(51,0,null,1,3,"amexio-body",[],null,null,null,i.Vb,i.e)),a.Ra(52,114688,[[10,4]],0,s.d,[],null,null),(l()(),a.Sa(53,0,null,0,1,"amexio-spinner",[],null,null,null,i.Cd,i.lb)),a.Ra(54,114688,[["click",4]],0,s.Pb,[a.F],{type:[0,"type"],color:[1,"color"],show:[2,"show"],size:[3,"size"]},null),(l()(),a.Sa(55,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,i.dc,i.m)),a.Ra(56,114688,null,0,s.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(57,0,null,0,11,"amexio-card",[],null,null,null,i.bc,i.k)),a.Ra(58,5488640,null,3,s.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,12,{amexioHeader:1}),a.ib(603979776,13,{amexioBody:1}),a.ib(603979776,14,{amexioFooter:1}),(l()(),a.Sa(62,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),a.Ra(63,114688,[[12,4]],0,s.A,[],null,null),(l()(),a.kb(-1,0,[" ball spin loader "])),(l()(),a.Sa(65,0,null,1,3,"amexio-body",[],null,null,null,i.Vb,i.e)),a.Ra(66,114688,[[13,4]],0,s.d,[],null,null),(l()(),a.Sa(67,0,null,0,1,"amexio-spinner",[],null,null,null,i.Cd,i.lb)),a.Ra(68,114688,null,0,s.Pb,[a.F],{type:[0,"type"],color:[1,"color"],show:[2,"show"],size:[3,"size"]},null),(l()(),a.Sa(69,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,i.dc,i.m)),a.Ra(70,114688,null,0,s.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(71,0,null,0,11,"amexio-card",[],null,null,null,i.bc,i.k)),a.Ra(72,5488640,null,3,s.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,15,{amexioHeader:1}),a.ib(603979776,16,{amexioBody:1}),a.ib(603979776,17,{amexioFooter:1}),(l()(),a.Sa(76,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),a.Ra(77,114688,[[15,4]],0,s.A,[],null,null),(l()(),a.kb(-1,0,[" fire spin loader "])),(l()(),a.Sa(79,0,null,1,3,"amexio-body",[],null,null,null,i.Vb,i.e)),a.Ra(80,114688,[[16,4]],0,s.d,[],null,null),(l()(),a.Sa(81,0,null,0,1,"amexio-spinner",[],null,null,null,i.Cd,i.lb)),a.Ra(82,114688,null,0,s.Pb,[a.F],{type:[0,"type"],color:[1,"color"],show:[2,"show"],size:[3,"size"]},null),(l()(),a.Sa(83,0,null,0,43,"amexio-row",[],null,null,null,i.tc,i.C)),a.Ra(84,1163264,null,0,s.M,[],null,null),(l()(),a.Sa(85,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,i.dc,i.m)),a.Ra(86,114688,null,0,s.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(87,0,null,0,11,"amexio-card",[],null,null,null,i.bc,i.k)),a.Ra(88,5488640,null,3,s.j,[a.F],{header:[0,"header"],bodyheight:[1,"bodyheight"]},null),a.ib(603979776,18,{amexioHeader:1}),a.ib(603979776,19,{amexioBody:1}),a.ib(603979776,20,{amexioFooter:1}),(l()(),a.Sa(92,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),a.Ra(93,114688,[[18,4]],0,s.A,[],null,null),(l()(),a.kb(-1,0,[" three bounce loader "])),(l()(),a.Sa(95,0,null,1,3,"amexio-body",[],null,null,null,i.Vb,i.e)),a.Ra(96,114688,[[19,4]],0,s.d,[],null,null),(l()(),a.Sa(97,0,null,0,1,"amexio-spinner",[],null,null,null,i.Cd,i.lb)),a.Ra(98,114688,null,0,s.Pb,[a.F],{type:[0,"type"],color:[1,"color"],show:[2,"show"],size:[3,"size"]},null),(l()(),a.Sa(99,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,i.dc,i.m)),a.Ra(100,114688,null,0,s.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(101,0,null,0,11,"amexio-card",[],null,null,null,i.bc,i.k)),a.Ra(102,5488640,null,3,s.j,[a.F],{header:[0,"header"],bodyheight:[1,"bodyheight"]},null),a.ib(603979776,21,{amexioHeader:1}),a.ib(603979776,22,{amexioBody:1}),a.ib(603979776,23,{amexioFooter:1}),(l()(),a.Sa(106,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),a.Ra(107,114688,[[21,4]],0,s.A,[],null,null),(l()(),a.kb(-1,0,[" spinner round loader "])),(l()(),a.Sa(109,0,null,1,3,"amexio-body",[],null,null,null,i.Vb,i.e)),a.Ra(110,114688,[[22,4]],0,s.d,[],null,null),(l()(),a.Sa(111,0,null,0,1,"amexio-spinner",[],null,null,null,i.Cd,i.lb)),a.Ra(112,114688,null,0,s.Pb,[a.F],{type:[0,"type"],color:[1,"color"],show:[2,"show"],size:[3,"size"]},null),(l()(),a.Sa(113,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,i.dc,i.m)),a.Ra(114,114688,null,0,s.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(115,0,null,0,11,"amexio-card",[],null,null,null,i.bc,i.k)),a.Ra(116,5488640,null,3,s.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,24,{amexioHeader:1}),a.ib(603979776,25,{amexioBody:1}),a.ib(603979776,26,{amexioFooter:1}),(l()(),a.Sa(120,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),a.Ra(121,114688,[[24,4]],0,s.A,[],null,null),(l()(),a.kb(-1,0,[" ring loader "])),(l()(),a.Sa(123,0,null,1,3,"amexio-body",[],null,null,null,i.Vb,i.e)),a.Ra(124,114688,[[25,4]],0,s.d,[],null,null),(l()(),a.Sa(125,0,null,0,1,"amexio-spinner",[],null,null,null,i.Cd,i.lb)),a.Ra(126,114688,null,0,s.Pb,[a.F],{type:[0,"type"],color:[1,"color"],show:[2,"show"],size:[3,"size"]},null),(l()(),a.Sa(127,0,null,0,29,"amexio-row",[],null,null,null,i.tc,i.C)),a.Ra(128,1163264,null,0,s.M,[],null,null),(l()(),a.Sa(129,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,i.dc,i.m)),a.Ra(130,114688,null,0,s.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(131,0,null,0,11,"amexio-card",[],null,null,null,i.bc,i.k)),a.Ra(132,5488640,null,3,s.j,[a.F],{header:[0,"header"],bodyheight:[1,"bodyheight"]},null),a.ib(603979776,27,{amexioHeader:1}),a.ib(603979776,28,{amexioBody:1}),a.ib(603979776,29,{amexioFooter:1}),(l()(),a.Sa(136,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),a.Ra(137,114688,[[27,4]],0,s.A,[],null,null),(l()(),a.kb(-1,0,[" half circle loader "])),(l()(),a.Sa(139,0,null,1,3,"amexio-body",[],null,null,null,i.Vb,i.e)),a.Ra(140,114688,[[28,4]],0,s.d,[],null,null),(l()(),a.Sa(141,0,null,0,1,"amexio-spinner",[],null,null,null,i.Cd,i.lb)),a.Ra(142,114688,null,0,s.Pb,[a.F],{type:[0,"type"],show:[1,"show"],size:[2,"size"]},null),(l()(),a.Sa(143,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,i.dc,i.m)),a.Ra(144,114688,null,0,s.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(145,0,null,0,11,"amexio-card",[],null,null,null,i.bc,i.k)),a.Ra(146,5488640,null,3,s.j,[a.F],{header:[0,"header"],bodyheight:[1,"bodyheight"]},null),a.ib(603979776,30,{amexioHeader:1}),a.ib(603979776,31,{amexioBody:1}),a.ib(603979776,32,{amexioFooter:1}),(l()(),a.Sa(150,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),a.Ra(151,114688,[[30,4]],0,s.A,[],null,null),(l()(),a.kb(-1,0,[" rectangle Bounce loader "])),(l()(),a.Sa(153,0,null,1,3,"amexio-body",[],null,null,null,i.Vb,i.e)),a.Ra(154,114688,[[31,4]],0,s.d,[],null,null),(l()(),a.Sa(155,0,null,0,1,"amexio-spinner",[],null,null,null,i.Cd,i.lb)),a.Ra(156,114688,null,0,s.Pb,[a.F],{type:[0,"type"],show:[1,"show"],size:[2,"size"]},null),(l()(),a.Sa(157,0,null,1,24,"amexio-tab",[["title","API Reference"]],null,null,null,i.yc,i.H)),a.Ra(158,114688,[[4,4]],0,s.R,[],{title:[0,"title"]},null),(l()(),a.Sa(159,0,null,0,22,"amexio-datagrid",[["title","Properties<amexio-spinner>"]],null,[["document","scroll"],["document","click"]],function(l,e,n){var t=!0;return"document:scroll"===e&&(t=!1!==a.cb(l,160).onscroll()&&t),"document:click"===e&&(t=!1!==a.cb(l,160).onclick()&&t),t},i.Od,i.xb)),a.Ra(160,1163264,null,1,s.jc,[a.l,s.Pa,a.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,33,{columnRef:1}),(l()(),a.Sa(162,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),a.Ra(163,49152,[[33,4]],2,s.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,34,{headerTemplate:0}),a.ib(335544320,35,{bodyTemplate:0}),(l()(),a.Sa(166,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),a.Ra(167,49152,[[33,4]],2,s.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,36,{headerTemplate:0}),a.ib(335544320,37,{bodyTemplate:0}),(l()(),a.Sa(170,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),a.Ra(171,49152,[[33,4]],2,s.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,38,{headerTemplate:0}),a.ib(335544320,39,{bodyTemplate:0}),(l()(),a.Sa(174,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),a.Ra(175,49152,[[33,4]],2,s.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,40,{headerTemplate:0}),a.ib(335544320,41,{bodyTemplate:0}),(l()(),a.Sa(178,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),a.Ra(179,49152,[[33,4]],2,s.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,42,{headerTemplate:0}),a.ib(335544320,43,{bodyTemplate:0}),(l()(),a.Sa(182,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,i.yc,i.H)),a.Ra(183,114688,[[4,4]],0,s.R,[],{title:[0,"title"]},null),(l()(),a.Sa(184,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),a.Sa(185,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,i.Ac,i.J)),a.Ra(186,5357568,null,1,s.V,[a.F],null,null),a.ib(603979776,44,{queryTabs:1}),(l()(),a.Sa(188,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.yc,i.H)),a.Ra(189,114688,[[44,4]],0,s.R,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),a.Ja(16777216,null,0,1,null,g)),a.Ra(191,16384,null,0,c.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.Sa(192,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.yc,i.H)),a.Ra(193,114688,[[44,4]],0,s.R,[],{title:[0,"title"]},null),(l()(),a.Ja(16777216,null,0,1,null,b)),a.Ra(195,16384,null,0,c.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.Sa(196,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.yc,i.H)),a.Ra(197,114688,[[4,4]],0,s.R,[],{title:[0,"title"]},null),(l()(),a.Sa(198,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),a.kb(-1,null,["Amexio Sandbox"])),(l()(),a.Sa(200,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-spinner?embed=1&file=src/app/spinner/spinner.demo.component.html&view=editor"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(l,e){var n=e.component;l(e,1,0,"true"),l(e,6,0),l(e,9,0),l(e,13,0),l(e,17,0,"Demo","true"),l(e,19,0),l(e,21,0,"12"),l(e,23,0,!0),l(e,28,0),l(e,31,0),l(e,33,0,n.text,"yellow","show"),l(e,36,0,"small-bold"),l(e,40,0),l(e,42,0,!0,4),l(e,44,0,!0,45),l(e,49,0),l(e,52,0),l(e,54,0,"fadingcircle",n.colorModel.color,n.clickShow,"18px"),l(e,56,0,!0,4),l(e,58,0,!0),l(e,63,0),l(e,66,0),l(e,68,0,"ballspin",n.colorModel.color,n.clickShow,"16px"),l(e,70,0,!0,4),l(e,72,0,!0),l(e,77,0),l(e,80,0),l(e,82,0,"firespin",n.colorModel.color,n.clickShow,"40px"),l(e,84,0),l(e,86,0,!0,4),l(e,88,0,!0,45),l(e,93,0),l(e,96,0),l(e,98,0,"threebounce",n.colorModel.color,n.clickShow,"15px"),l(e,100,0,!0,4),l(e,102,0,!0,45),l(e,107,0),l(e,110,0),l(e,112,0,"spinnerround",n.colorModel.color,n.clickShow,"8px"),l(e,114,0,!0,4),l(e,116,0,!0),l(e,121,0),l(e,124,0),l(e,126,0,"ring",n.colorModel.color,n.clickShow,"6px"),l(e,128,0),l(e,130,0,!0,4),l(e,132,0,!0,45),l(e,137,0),l(e,140,0),l(e,142,0,"halfcircle",n.clickShow,"9px"),l(e,144,0,!0,4),l(e,146,0,!0,45),l(e,151,0),l(e,154,0),l(e,156,0,"rectanglebounce",n.clickShow,"16px"),l(e,158,0,"API Reference"),l(e,160,0,"Properties<amexio-spinner>","assets/apireference/data/spinner.json","get","properties",!1,!1),l(e,163,0,"Name","name",!1,"string",15),l(e,167,0,"Version","version",!1,"string",10),l(e,171,0,"Type","type",!1,"string",10),l(e,175,0,"Default","default",!1,"string",10),l(e,179,0,"Description","description",!1,"string",65),l(e,183,0,"Source"),l(e,186,0),l(e,189,0,"HTML",!0),l(e,191,0,n.htmlCode),l(e,193,0,"Type Script"),l(e,195,0,n.typeScriptCode),l(e,197,0,"Live")},function(l,e){l(e,20,0,a.cb(e,21).role),l(e,41,0,a.cb(e,42).role),l(e,55,0,a.cb(e,56).role),l(e,69,0,a.cb(e,70).role),l(e,85,0,a.cb(e,86).role),l(e,99,0,a.cb(e,100).role),l(e,113,0,a.cb(e,114).role),l(e,129,0,a.cb(e,130).role),l(e,143,0,a.cb(e,144).role)})}var y=a.Oa("amexio-spinner-demo",d,function(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,1,"amexio-spinner-demo",[],null,null,null,f,h)),a.Ra(1,49152,null,0,d,[m.c],null,null)],null,null)},{},{},[]),x=n("gIcY"),k=n("ZYCi");n.d(e,"AmexioSpinnerDemoModuleNgFactory",function(){return S});var S=a.Pa(t,[],function(l){return a.Za([a.ab(512,a.k,a.Ea,[[8,[i.a,u.a,y]],[3,a.k],a.z]),a.ab(4608,c.o,c.n,[a.w,[2,c.x]]),a.ab(4608,x.G,x.G,[]),a.ab(4608,m.i,m.o,[c.d,a.D,m.m]),a.ab(4608,m.p,m.p,[m.i,m.n]),a.ab(5120,m.a,function(l){return[l]},[m.p]),a.ab(4608,m.l,m.l,[]),a.ab(6144,m.j,null,[m.l]),a.ab(4608,m.h,m.h,[m.j]),a.ab(6144,m.b,null,[m.h]),a.ab(4608,m.f,m.k,[m.b,a.s]),a.ab(4608,m.c,m.c,[m.f]),a.ab(4608,s.Pa,s.Pa,[m.c]),a.ab(4608,s.Za,s.Za,[a.D]),a.ab(4608,s.gb,s.gb,[]),a.ab(4608,s.z,s.z,[]),a.ab(4608,s.Ab,s.Ab,[]),a.ab(4608,x.f,x.f,[]),a.ab(1073742336,c.c,c.c,[]),a.ab(1073742336,x.D,x.D,[]),a.ab(1073742336,x.l,x.l,[]),a.ab(1073742336,m.e,m.e,[]),a.ab(1073742336,m.d,m.d,[]),a.ab(1073742336,r.b,r.b,[]),a.ab(1073742336,s.B,s.B,[]),a.ab(1073742336,s.w,s.w,[]),a.ab(1073742336,s.E,s.E,[]),a.ab(1073742336,s.G,s.G,[]),a.ab(1073742336,x.z,x.z,[]),a.ab(1073742336,s.J,s.J,[]),a.ab(1073742336,s.o,s.o,[]),a.ab(1073742336,s.X,s.X,[]),a.ab(1073742336,k.n,k.n,[[2,k.t],[2,k.m]]),a.ab(1073742336,t,t,[]),a.ab(256,m.m,"XSRF-TOKEN",[]),a.ab(256,m.n,"X-XSRF-TOKEN",[]),a.ab(1024,k.i,function(){return[[{path:"",component:d,pathMatch:"full"}]]},[])])})},wZee:function(l,e){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(){var l=/\blang(?:uage)?-([\w-]+)\b/i,e=0,a=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(l){return l instanceof t?new t(l.type,a.util.encode(l.content),l.alias):"Array"===a.util.type(l)?l.map(a.util.encode):l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(l){return Object.prototype.toString.call(l).match(/\[object (\w+)\]/)[1]},objId:function(l){return l.__id||Object.defineProperty(l,"__id",{value:++e}),l.__id},clone:function(l,e){var n=a.util.type(l);switch(e=e||{},n){case"Object":if(e[a.util.objId(l)])return e[a.util.objId(l)];var t={};for(var i in e[a.util.objId(l)]=t,l)l.hasOwnProperty(i)&&(t[i]=a.util.clone(l[i],e));return t;case"Array":return e[a.util.objId(l)]?e[a.util.objId(l)]:(t=[],e[a.util.objId(l)]=t,l.forEach(function(l,n){t[n]=a.util.clone(l,e)}),t)}return l}},languages:{extend:function(l,e){var n=a.util.clone(a.languages[l]);for(var t in e)n[t]=e[t];return n},insertBefore:function(l,e,n,t){var i=(t=t||a.languages)[l];if(2==arguments.length){for(var u in n=arguments[1])n.hasOwnProperty(u)&&(i[u]=n[u]);return i}var o={};for(var r in i)if(i.hasOwnProperty(r)){if(r==e)for(var u in n)n.hasOwnProperty(u)&&(o[u]=n[u]);o[r]=i[r]}return a.languages.DFS(a.languages,function(e,n){n===t[l]&&e!=l&&(this[e]=o)}),t[l]=o},DFS:function(l,e,n,t){for(var i in t=t||{},l)l.hasOwnProperty(i)&&(e.call(l,i,l[i],n||i),"Object"!==a.util.type(l[i])||t[a.util.objId(l[i])]?"Array"!==a.util.type(l[i])||t[a.util.objId(l[i])]||(t[a.util.objId(l[i])]=!0,a.languages.DFS(l[i],e,i,t)):(t[a.util.objId(l[i])]=!0,a.languages.DFS(l[i],e,null,t)))}},plugins:{},highlightAll:function(l,e){a.highlightAllUnder(document,l,e)},highlightAllUnder:function(l,e,n){var t={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",t);for(var i,u=t.elements||l.querySelectorAll(t.selector),o=0;i=u[o++];)a.highlightElement(i,!0===e,t.callback)},highlightElement:function(e,t,i){for(var u,o,r=e;r&&!l.test(r.className);)r=r.parentNode;r&&(u=(r.className.match(l)||[,""])[1].toLowerCase(),o=a.languages[u]),e.className=e.className.replace(l,"").replace(/\s+/g," ")+" language-"+u,e.parentNode&&/pre/i.test((r=e.parentNode).nodeName)&&(r.className=r.className.replace(l,"").replace(/\s+/g," ")+" language-"+u);var s={element:e,language:u,grammar:o,code:e.textContent};if(a.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(a.hooks.run("before-highlight",s),s.element.textContent=s.code,a.hooks.run("after-highlight",s)),void a.hooks.run("complete",s);if(a.hooks.run("before-highlight",s),t&&n.Worker){var c=new Worker(a.filename);c.onmessage=function(l){s.highlightedCode=l.data,a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),a.hooks.run("after-highlight",s),a.hooks.run("complete",s)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=a.highlight(s.code,s.grammar,s.language),a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(e),a.hooks.run("after-highlight",s),a.hooks.run("complete",s)},highlight:function(l,e,n){var i={code:l,grammar:e,language:n};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),t.stringify(a.util.encode(i.tokens),i.language)},matchGrammar:function(l,e,n,t,i,u,o){var r=a.Token;for(var s in n)if(n.hasOwnProperty(s)&&n[s]){if(s==o)return;var c=n[s];c="Array"===a.util.type(c)?c:[c];for(var d=0;d<c.length;++d){var p=c[d],m=p.inside,h=!!p.lookbehind,g=!!p.greedy,b=0,f=p.alias;if(g&&!p.pattern.global){var y=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,y+"g")}p=p.pattern||p;for(var x=t,k=i;x<e.length;k+=e[x].length,++x){var S=e[x];if(e.length>l.length)return;if(!(S instanceof r)){if(g&&x!=e.length-1){if(p.lastIndex=k,!(A=p.exec(l)))break;for(var w=A.index+(h?A[1].length:0),v=A.index+A[0].length,R=x,F=k,C=e.length;R<C&&(F<v||!e[R].type&&!e[R-1].greedy);++R)w>=(F+=e[R].length)&&(++x,k=F);if(e[x]instanceof r)continue;z=R-x,S=l.slice(k,F),A.index-=k}else{p.lastIndex=0;var A=p.exec(S),z=1}if(A){h&&(b=A[1]?A[1].length:0),v=(w=A.index+b)+(A=A[0].slice(b)).length;var j=S.slice(0,w),P=S.slice(v),T=[x,z];j&&(++x,k+=j.length,T.push(j));var N=new r(s,m?a.tokenize(A,m):A,f,A,g);if(T.push(N),P&&T.push(P),Array.prototype.splice.apply(e,T),1!=z&&a.matchGrammar(l,e,n,x,k,!0,s),u)break}else if(u)break}}}}},tokenize:function(l,e,n){var t=[l],i=e.rest;if(i){for(var u in i)e[u]=i[u];delete e.rest}return a.matchGrammar(l,t,e,0,0,!1),t},hooks:{all:{},add:function(l,e){var n=a.hooks.all;n[l]=n[l]||[],n[l].push(e)},run:function(l,e){var n=a.hooks.all[l];if(n&&n.length)for(var t,i=0;t=n[i++];)t(e)}}},t=a.Token=function(l,e,n,a,t){this.type=l,this.content=e,this.alias=n,this.length=0|(a||"").length,this.greedy=!!t};if(t.stringify=function(l,e,n){if("string"==typeof l)return l;if("Array"===a.util.type(l))return l.map(function(n){return t.stringify(n,e,l)}).join("");var i={type:l.type,content:t.stringify(l.content,e,n),tag:"span",classes:["token",l.type],attributes:{},language:e,parent:n};if(l.alias){var u="Array"===a.util.type(l.alias)?l.alias:[l.alias];Array.prototype.push.apply(i.classes,u)}a.hooks.run("wrap",i);var o=Object.keys(i.attributes).map(function(l){return l+'="'+(i.attributes[l]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(o?" "+o:"")+">"+i.content+"</"+i.tag+">"},!n.document)return n.addEventListener?(a.disableWorkerMessageHandler||n.addEventListener("message",function(l){var e=JSON.parse(l.data),t=e.language,i=e.immediateClose;n.postMessage(a.highlight(e.code,a.languages[t],t)),i&&n.close()},!1),n.Prism):n.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(a.filename=i.src,a.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),n.Prism}();void 0!==l&&l.exports&&(l.exports=a),"undefined"!=typeof global&&(global.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",function(l){"entity"===l.type&&(l.attributes.title=l.content.replace(/&amp;/,"&"))}),a.languages.xml=a.languages.markup,a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},a.languages.css.atrule.inside.rest=a.languages.css,a.languages.markup&&(a.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:a.languages.css,alias:"language-css",greedy:!0}}),a.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:a.languages.css}},alias:"language-css"}},a.languages.markup.tag)),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),a.languages.javascript["template-string"].inside.interpolation.inside.rest=a.languages.javascript,a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:a.languages.javascript,alias:"language-javascript",greedy:!0}}),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(e){for(var n,t=e.getAttribute("data-src"),i=e,u=/\blang(?:uage)?-([\w-]+)\b/i;i&&!u.test(i.className);)i=i.parentNode;if(i&&(n=(e.className.match(u)||[,""])[1]),!n){var o=(t.match(/\.(\w+)$/)||[,""])[1];n=l[o]||o}var r=document.createElement("code");r.className="language-"+n,e.textContent="",r.textContent="Loading\u2026",e.appendChild(r);var s=new XMLHttpRequest;s.open("GET",t,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(r.textContent=s.responseText,a.highlightElement(r)):r.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},s.send(null)}),a.plugins.toolbar&&a.plugins.toolbar.registerButton("download-file",function(l){var e=l.element.parentNode;if(e&&/pre/i.test(e.nodeName)&&e.hasAttribute("data-src")&&e.hasAttribute("data-download-link")){var n=e.getAttribute("data-src"),a=document.createElement("a");return a.textContent=e.getAttribute("data-download-link-label")||"Download",a.setAttribute("download",""),a.href=n,a}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);