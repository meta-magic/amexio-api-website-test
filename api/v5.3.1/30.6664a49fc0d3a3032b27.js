(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{U89g:function(l,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var t=n("CcnG"),a=(n("d2mR"),n("Ip0R"),t.Qa({encapsulation:2,styles:[],data:{}}));function i(l){return t.mb(0,[],null,null)}},XIHC:function(l,e){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(l,e,n){"use strict";n.d(e,"a",function(){return t}),n.d(e,"b",function(){return a}),n("wZee"),n("XIHC");var t=function(){function l(l,e){this._renderer=l,this._el=e,this.nativeElement=e.nativeElement}return l.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},l}(),a=function(){}},"j9+S":function(l,e,n){"use strict";n.r(e);var t=n("CcnG"),a=function(){},i=n("gTgE"),o=n("pMnS"),u=n("U89g"),r=n("d2mR"),c=n("O4vx"),s=n("Ip0R"),d=function(){function l(l){this.http=l,this.clickShow=!0,this.text="Hide",this.getHtmlAndTypeScriptCode(),this.colorModel=new m}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,e,n=this;this.http.get("assets/data/code/data/spinner/spinner.html",{responseType:"text"}).subscribe(function(e){l=e},function(l){},function(){n.htmlCode=l}),this.http.get("assets/data/code/data/spinner/spinner.text",{responseType:"text"}).subscribe(function(l){e=l},function(l){},function(){n.typeScriptCode=e})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l.prototype.setColorForIndictor=function(l){this.colorModel.color=l.target.value},l.prototype.onButtonClick=function(l){this.text=this.clickShow?"Show":"Hide",this.clickShow=!this.clickShow},l}(),m=function(){},b=n("t/Na"),p=t.Qa({encapsulation:2,styles:[],data:{}});function h(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),t.Ra(2,4243456,null,0,r.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,e){l(e,2,0,e.component.htmlCode,"html")},null)}function g(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),t.Ra(2,4243456,null,0,r.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,e){l(e,2,0,e.component.typeScriptCode,"typescript")},null)}function f(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,200,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(l,e,n){var a=!0;return"document:click"===e&&(a=!1!==t.cb(l,1).onWindowClick()&&a),"document:scroll"===e&&(a=!1!==t.cb(l,1).onscroll()&&a),a},i.Sb,i.i)),t.Ra(1,5357568,null,3,c.h,[],{header:[0,"header"]},null),t.ib(603979776,1,{amexioHeader:1}),t.ib(603979776,2,{amexioBody:1}),t.ib(603979776,3,{amexioFooter:1}),(l()(),t.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,i.bc,i.r)),t.Ra(6,114688,[[1,4]],0,c.v,[],null,null),(l()(),t.kb(-1,0,[" Data Loading Indicator "])),(l()(),t.Sa(8,0,null,1,192,"amexio-body",[],null,null,null,i.Ob,i.e)),t.Ra(9,114688,[[2,4]],0,c.d,[],null,null),(l()(),t.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["Data Loading Indicator Component Provides up-to-date feedback on the progress of a workflow or action with simple yet flexible spinner and easy to configure."])),(l()(),t.Sa(12,16777216,null,0,188,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,e,n){var a=!0;return"document:click"===e&&(a=!1!==t.cb(l,13).onWindowClick()&&a),"document:scroll"===e&&(a=!1!==t.cb(l,13).onscroll()&&a),a},i.mc,i.C)),t.Ra(13,5357568,null,2,c.L,[t.F,t.k,t.R],null,null),t.ib(603979776,4,{queryTabs:1}),t.ib(603979776,5,{queryAction:1}),(l()(),t.Sa(16,0,null,1,140,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.nc,i.D)),t.Ra(17,114688,[[4,4]],0,c.M,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t.Sa(18,0,null,0,138,"amexio-row",[],null,null,null,i.ic,i.y)),t.Ra(19,1163264,null,0,c.H,[],null,null),(l()(),t.Sa(20,0,null,0,136,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,i.Ub,i.k)),t.Ra(21,114688,null,0,c.k,[],{size:[0,"size"]},null),(l()(),t.Sa(22,0,null,0,134,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(l,e,n){var a=!0;return"document:click"===e&&(a=!1!==t.cb(l,23).onWindowClick()&&a),"document:scroll"===e&&(a=!1!==t.cb(l,23).onscroll()&&a),a},i.Sb,i.i)),t.Ra(23,5357568,null,3,c.h,[],{header:[0,"header"]},null),t.ib(603979776,6,{amexioHeader:1}),t.ib(603979776,7,{amexioBody:1}),t.ib(603979776,8,{amexioFooter:1}),(l()(),t.Sa(27,0,null,0,2,"amexio-header",[],null,null,null,i.bc,i.r)),t.Ra(28,114688,[[6,4]],0,c.v,[],null,null),(l()(),t.kb(-1,0,[" Data Loading Indicator "])),(l()(),t.Sa(30,0,null,1,126,"amexio-body",[],null,null,null,i.Ob,i.e)),t.Ra(31,114688,[[7,4]],0,c.d,[],null,null),(l()(),t.Sa(32,0,null,0,1,"amexio-button",[],null,[[null,"onClick"]],function(l,e,n){var a=!0;return"onClick"===e&&(a=!1!==l.component.onButtonClick(t.cb(l,54))&&a),a},i.Kd,i.Ab)),t.Ra(33,114688,null,0,c.lc,[],{label:[0,"label"],type:[1,"type"],tooltip:[2,"tooltip"]},{onClick:"onClick"}),(l()(),t.Sa(34,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Sa(35,0,null,0,2,"amexio-label",[["size","small-bold"]],null,null,null,i.Td,i.Jb)),t.Ra(36,114688,null,0,c.xc,[],{styleClass:[0,"styleClass"]},null),(l()(),t.kb(-1,0,["Select Color For Spinner : -"])),(l()(),t.Sa(38,0,null,0,0,"input",[["id","head"],["name","color"],["type","color"],["value","colorModel.color"]],null,[[null,"input"]],function(l,e,n){var t=!0;return"input"===e&&(t=!1!==l.component.setColorForIndictor(n)&&t),t},null,null)),(l()(),t.Sa(39,0,null,0,43,"amexio-row",[],null,null,null,i.ic,i.y)),t.Ra(40,1163264,null,0,c.H,[],null,null),(l()(),t.Sa(41,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,i.Ub,i.k)),t.Ra(42,114688,null,0,c.k,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),t.Sa(43,0,null,0,11,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(l,e,n){var a=!0;return"document:click"===e&&(a=!1!==t.cb(l,44).onWindowClick()&&a),"document:scroll"===e&&(a=!1!==t.cb(l,44).onscroll()&&a),a},i.Sb,i.i)),t.Ra(44,5357568,null,3,c.h,[],{header:[0,"header"],bodyheight:[1,"bodyheight"]},null),t.ib(603979776,9,{amexioHeader:1}),t.ib(603979776,10,{amexioBody:1}),t.ib(603979776,11,{amexioFooter:1}),(l()(),t.Sa(48,0,null,0,2,"amexio-header",[],null,null,null,i.bc,i.r)),t.Ra(49,114688,[[9,4]],0,c.v,[],null,null),(l()(),t.kb(-1,0,[" fading circle round loader "])),(l()(),t.Sa(51,0,null,1,3,"amexio-body",[],null,null,null,i.Ob,i.e)),t.Ra(52,114688,[[10,4]],0,c.d,[],null,null),(l()(),t.Sa(53,0,null,0,1,"amexio-spinner",[],null,null,null,i.jd,i.Za)),t.Ra(54,114688,[["click",4]],0,c.Bb,[t.F],{type:[0,"type"],color:[1,"color"],show:[2,"show"],size:[3,"size"]},null),(l()(),t.Sa(55,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,i.Ub,i.k)),t.Ra(56,114688,null,0,c.k,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),t.Sa(57,0,null,0,11,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(l,e,n){var a=!0;return"document:click"===e&&(a=!1!==t.cb(l,58).onWindowClick()&&a),"document:scroll"===e&&(a=!1!==t.cb(l,58).onscroll()&&a),a},i.Sb,i.i)),t.Ra(58,5357568,null,3,c.h,[],{header:[0,"header"]},null),t.ib(603979776,12,{amexioHeader:1}),t.ib(603979776,13,{amexioBody:1}),t.ib(603979776,14,{amexioFooter:1}),(l()(),t.Sa(62,0,null,0,2,"amexio-header",[],null,null,null,i.bc,i.r)),t.Ra(63,114688,[[12,4]],0,c.v,[],null,null),(l()(),t.kb(-1,0,[" ball spin loader "])),(l()(),t.Sa(65,0,null,1,3,"amexio-body",[],null,null,null,i.Ob,i.e)),t.Ra(66,114688,[[13,4]],0,c.d,[],null,null),(l()(),t.Sa(67,0,null,0,1,"amexio-spinner",[],null,null,null,i.jd,i.Za)),t.Ra(68,114688,null,0,c.Bb,[t.F],{type:[0,"type"],color:[1,"color"],show:[2,"show"],size:[3,"size"]},null),(l()(),t.Sa(69,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,i.Ub,i.k)),t.Ra(70,114688,null,0,c.k,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),t.Sa(71,0,null,0,11,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(l,e,n){var a=!0;return"document:click"===e&&(a=!1!==t.cb(l,72).onWindowClick()&&a),"document:scroll"===e&&(a=!1!==t.cb(l,72).onscroll()&&a),a},i.Sb,i.i)),t.Ra(72,5357568,null,3,c.h,[],{header:[0,"header"]},null),t.ib(603979776,15,{amexioHeader:1}),t.ib(603979776,16,{amexioBody:1}),t.ib(603979776,17,{amexioFooter:1}),(l()(),t.Sa(76,0,null,0,2,"amexio-header",[],null,null,null,i.bc,i.r)),t.Ra(77,114688,[[15,4]],0,c.v,[],null,null),(l()(),t.kb(-1,0,[" fire spin loader "])),(l()(),t.Sa(79,0,null,1,3,"amexio-body",[],null,null,null,i.Ob,i.e)),t.Ra(80,114688,[[16,4]],0,c.d,[],null,null),(l()(),t.Sa(81,0,null,0,1,"amexio-spinner",[],null,null,null,i.jd,i.Za)),t.Ra(82,114688,null,0,c.Bb,[t.F],{type:[0,"type"],color:[1,"color"],show:[2,"show"],size:[3,"size"]},null),(l()(),t.Sa(83,0,null,0,43,"amexio-row",[],null,null,null,i.ic,i.y)),t.Ra(84,1163264,null,0,c.H,[],null,null),(l()(),t.Sa(85,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,i.Ub,i.k)),t.Ra(86,114688,null,0,c.k,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),t.Sa(87,0,null,0,11,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(l,e,n){var a=!0;return"document:click"===e&&(a=!1!==t.cb(l,88).onWindowClick()&&a),"document:scroll"===e&&(a=!1!==t.cb(l,88).onscroll()&&a),a},i.Sb,i.i)),t.Ra(88,5357568,null,3,c.h,[],{header:[0,"header"],bodyheight:[1,"bodyheight"]},null),t.ib(603979776,18,{amexioHeader:1}),t.ib(603979776,19,{amexioBody:1}),t.ib(603979776,20,{amexioFooter:1}),(l()(),t.Sa(92,0,null,0,2,"amexio-header",[],null,null,null,i.bc,i.r)),t.Ra(93,114688,[[18,4]],0,c.v,[],null,null),(l()(),t.kb(-1,0,[" three bounce loader "])),(l()(),t.Sa(95,0,null,1,3,"amexio-body",[],null,null,null,i.Ob,i.e)),t.Ra(96,114688,[[19,4]],0,c.d,[],null,null),(l()(),t.Sa(97,0,null,0,1,"amexio-spinner",[],null,null,null,i.jd,i.Za)),t.Ra(98,114688,null,0,c.Bb,[t.F],{type:[0,"type"],color:[1,"color"],show:[2,"show"],size:[3,"size"]},null),(l()(),t.Sa(99,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,i.Ub,i.k)),t.Ra(100,114688,null,0,c.k,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),t.Sa(101,0,null,0,11,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(l,e,n){var a=!0;return"document:click"===e&&(a=!1!==t.cb(l,102).onWindowClick()&&a),"document:scroll"===e&&(a=!1!==t.cb(l,102).onscroll()&&a),a},i.Sb,i.i)),t.Ra(102,5357568,null,3,c.h,[],{header:[0,"header"],bodyheight:[1,"bodyheight"]},null),t.ib(603979776,21,{amexioHeader:1}),t.ib(603979776,22,{amexioBody:1}),t.ib(603979776,23,{amexioFooter:1}),(l()(),t.Sa(106,0,null,0,2,"amexio-header",[],null,null,null,i.bc,i.r)),t.Ra(107,114688,[[21,4]],0,c.v,[],null,null),(l()(),t.kb(-1,0,[" spinner round loader "])),(l()(),t.Sa(109,0,null,1,3,"amexio-body",[],null,null,null,i.Ob,i.e)),t.Ra(110,114688,[[22,4]],0,c.d,[],null,null),(l()(),t.Sa(111,0,null,0,1,"amexio-spinner",[],null,null,null,i.jd,i.Za)),t.Ra(112,114688,null,0,c.Bb,[t.F],{type:[0,"type"],color:[1,"color"],show:[2,"show"],size:[3,"size"]},null),(l()(),t.Sa(113,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,i.Ub,i.k)),t.Ra(114,114688,null,0,c.k,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),t.Sa(115,0,null,0,11,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(l,e,n){var a=!0;return"document:click"===e&&(a=!1!==t.cb(l,116).onWindowClick()&&a),"document:scroll"===e&&(a=!1!==t.cb(l,116).onscroll()&&a),a},i.Sb,i.i)),t.Ra(116,5357568,null,3,c.h,[],{header:[0,"header"]},null),t.ib(603979776,24,{amexioHeader:1}),t.ib(603979776,25,{amexioBody:1}),t.ib(603979776,26,{amexioFooter:1}),(l()(),t.Sa(120,0,null,0,2,"amexio-header",[],null,null,null,i.bc,i.r)),t.Ra(121,114688,[[24,4]],0,c.v,[],null,null),(l()(),t.kb(-1,0,[" ring loader "])),(l()(),t.Sa(123,0,null,1,3,"amexio-body",[],null,null,null,i.Ob,i.e)),t.Ra(124,114688,[[25,4]],0,c.d,[],null,null),(l()(),t.Sa(125,0,null,0,1,"amexio-spinner",[],null,null,null,i.jd,i.Za)),t.Ra(126,114688,null,0,c.Bb,[t.F],{type:[0,"type"],color:[1,"color"],show:[2,"show"],size:[3,"size"]},null),(l()(),t.Sa(127,0,null,0,29,"amexio-row",[],null,null,null,i.ic,i.y)),t.Ra(128,1163264,null,0,c.H,[],null,null),(l()(),t.Sa(129,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,i.Ub,i.k)),t.Ra(130,114688,null,0,c.k,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),t.Sa(131,0,null,0,11,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(l,e,n){var a=!0;return"document:click"===e&&(a=!1!==t.cb(l,132).onWindowClick()&&a),"document:scroll"===e&&(a=!1!==t.cb(l,132).onscroll()&&a),a},i.Sb,i.i)),t.Ra(132,5357568,null,3,c.h,[],{header:[0,"header"],bodyheight:[1,"bodyheight"]},null),t.ib(603979776,27,{amexioHeader:1}),t.ib(603979776,28,{amexioBody:1}),t.ib(603979776,29,{amexioFooter:1}),(l()(),t.Sa(136,0,null,0,2,"amexio-header",[],null,null,null,i.bc,i.r)),t.Ra(137,114688,[[27,4]],0,c.v,[],null,null),(l()(),t.kb(-1,0,[" half circle loader "])),(l()(),t.Sa(139,0,null,1,3,"amexio-body",[],null,null,null,i.Ob,i.e)),t.Ra(140,114688,[[28,4]],0,c.d,[],null,null),(l()(),t.Sa(141,0,null,0,1,"amexio-spinner",[],null,null,null,i.jd,i.Za)),t.Ra(142,114688,null,0,c.Bb,[t.F],{type:[0,"type"],show:[1,"show"],size:[2,"size"]},null),(l()(),t.Sa(143,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,i.Ub,i.k)),t.Ra(144,114688,null,0,c.k,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),t.Sa(145,0,null,0,11,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(l,e,n){var a=!0;return"document:click"===e&&(a=!1!==t.cb(l,146).onWindowClick()&&a),"document:scroll"===e&&(a=!1!==t.cb(l,146).onscroll()&&a),a},i.Sb,i.i)),t.Ra(146,5357568,null,3,c.h,[],{header:[0,"header"],bodyheight:[1,"bodyheight"]},null),t.ib(603979776,30,{amexioHeader:1}),t.ib(603979776,31,{amexioBody:1}),t.ib(603979776,32,{amexioFooter:1}),(l()(),t.Sa(150,0,null,0,2,"amexio-header",[],null,null,null,i.bc,i.r)),t.Ra(151,114688,[[30,4]],0,c.v,[],null,null),(l()(),t.kb(-1,0,[" rectangle Bounce loader "])),(l()(),t.Sa(153,0,null,1,3,"amexio-body",[],null,null,null,i.Ob,i.e)),t.Ra(154,114688,[[31,4]],0,c.d,[],null,null),(l()(),t.Sa(155,0,null,0,1,"amexio-spinner",[],null,null,null,i.jd,i.Za)),t.Ra(156,114688,null,0,c.Bb,[t.F],{type:[0,"type"],show:[1,"show"],size:[2,"size"]},null),(l()(),t.Sa(157,0,null,1,24,"amexio-tab",[["title","API Reference"]],null,null,null,i.nc,i.D)),t.Ra(158,114688,[[4,4]],0,c.M,[],{title:[0,"title"]},null),(l()(),t.Sa(159,0,null,0,22,"amexio-datagrid",[["title","Properties<amexio-spinner>"]],null,[["document","scroll"],["document","click"]],function(l,e,n){var a=!0;return"document:scroll"===e&&(a=!1!==t.cb(l,160).onscroll()&&a),"document:click"===e&&(a=!1!==t.cb(l,160).onclick()&&a),a},i.td,i.jb)),t.Ra(160,1163264,null,1,c.Qb,[t.l,c.Ka,t.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,33,{columnRef:1}),(l()(),t.Sa(162,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.ud,i.kb)),t.Ra(163,49152,[[33,4]],2,c.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,34,{headerTemplate:0}),t.ib(335544320,35,{bodyTemplate:0}),(l()(),t.Sa(166,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.ud,i.kb)),t.Ra(167,49152,[[33,4]],2,c.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,36,{headerTemplate:0}),t.ib(335544320,37,{bodyTemplate:0}),(l()(),t.Sa(170,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.ud,i.kb)),t.Ra(171,49152,[[33,4]],2,c.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,38,{headerTemplate:0}),t.ib(335544320,39,{bodyTemplate:0}),(l()(),t.Sa(174,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.ud,i.kb)),t.Ra(175,49152,[[33,4]],2,c.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,40,{headerTemplate:0}),t.ib(335544320,41,{bodyTemplate:0}),(l()(),t.Sa(178,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.ud,i.kb)),t.Ra(179,49152,[[33,4]],2,c.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,42,{headerTemplate:0}),t.ib(335544320,43,{bodyTemplate:0}),(l()(),t.Sa(182,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,i.nc,i.D)),t.Ra(183,114688,[[4,4]],0,c.M,[],{title:[0,"title"]},null),(l()(),t.Sa(184,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),t.Sa(185,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,i.pc,i.F)),t.Ra(186,5357568,null,1,c.Q,[t.F],null,null),t.ib(603979776,44,{queryTabs:1}),(l()(),t.Sa(188,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.nc,i.D)),t.Ra(189,114688,[[44,4]],0,c.M,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t.Ja(16777216,null,0,1,null,h)),t.Ra(191,16384,null,0,s.l,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Sa(192,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.nc,i.D)),t.Ra(193,114688,[[44,4]],0,c.M,[],{title:[0,"title"]},null),(l()(),t.Ja(16777216,null,0,1,null,g)),t.Ra(195,16384,null,0,s.l,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Sa(196,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.nc,i.D)),t.Ra(197,114688,[[4,4]],0,c.M,[],{title:[0,"title"]},null),(l()(),t.Sa(198,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Amexio Sandbox"])),(l()(),t.Sa(200,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-spinner?embed=1&file=src/app/spinner/spinner.demo.component.html&view=editor"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(l,e){var n=e.component;l(e,1,0,"true"),l(e,6,0),l(e,9,0),l(e,13,0),l(e,17,0,"Demo","true"),l(e,19,0),l(e,21,0,"12"),l(e,23,0,!0),l(e,28,0),l(e,31,0),l(e,33,0,n.text,"yellow","show"),l(e,36,0,"small-bold"),l(e,40,0),l(e,42,0,!0,4),l(e,44,0,!0,45),l(e,49,0),l(e,52,0),l(e,54,0,"fadingcircle",n.colorModel.color,n.clickShow,"18px"),l(e,56,0,!0,4),l(e,58,0,!0),l(e,63,0),l(e,66,0),l(e,68,0,"ballspin",n.colorModel.color,n.clickShow,"16px"),l(e,70,0,!0,4),l(e,72,0,!0),l(e,77,0),l(e,80,0),l(e,82,0,"firespin",n.colorModel.color,n.clickShow,"40px"),l(e,84,0),l(e,86,0,!0,4),l(e,88,0,!0,45),l(e,93,0),l(e,96,0),l(e,98,0,"threebounce",n.colorModel.color,n.clickShow,"15px"),l(e,100,0,!0,4),l(e,102,0,!0,45),l(e,107,0),l(e,110,0),l(e,112,0,"spinnerround",n.colorModel.color,n.clickShow,"8px"),l(e,114,0,!0,4),l(e,116,0,!0),l(e,121,0),l(e,124,0),l(e,126,0,"ring",n.colorModel.color,n.clickShow,"6px"),l(e,128,0),l(e,130,0,!0,4),l(e,132,0,!0,45),l(e,137,0),l(e,140,0),l(e,142,0,"halfcircle",n.clickShow,"9px"),l(e,144,0,!0,4),l(e,146,0,!0,45),l(e,151,0),l(e,154,0),l(e,156,0,"rectanglebounce",n.clickShow,"16px"),l(e,158,0,"API Reference"),l(e,160,0,"Properties<amexio-spinner>","assets/apireference/data/spinner.json","get","properties",!1,!1),l(e,163,0,"Name","name",!1,"string",15),l(e,167,0,"Version","version",!1,"string",10),l(e,171,0,"Type","type",!1,"string",10),l(e,175,0,"Default","default",!1,"string",10),l(e,179,0,"Description","description",!1,"string",65),l(e,183,0,"Source"),l(e,186,0),l(e,189,0,"HTML",!0),l(e,191,0,n.htmlCode),l(e,193,0,"Type Script"),l(e,195,0,n.typeScriptCode),l(e,197,0,"Live")},function(l,e){l(e,20,0,t.cb(e,21).role),l(e,41,0,t.cb(e,42).role),l(e,55,0,t.cb(e,56).role),l(e,69,0,t.cb(e,70).role),l(e,85,0,t.cb(e,86).role),l(e,99,0,t.cb(e,100).role),l(e,113,0,t.cb(e,114).role),l(e,129,0,t.cb(e,130).role),l(e,143,0,t.cb(e,144).role)})}var y=t.Oa("amexio-spinner-demo",d,function(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,1,"amexio-spinner-demo",[],null,null,null,f,p)),t.Ra(1,49152,null,0,d,[b.c],null,null)],null,null)},{},{},[]),x=n("gIcY"),k=n("ZYCi");n.d(e,"AmexioSpinnerDemoModuleNgFactory",function(){return S});var S=t.Pa(a,[],function(l){return t.Za([t.ab(512,t.k,t.Ea,[[8,[i.a,o.a,y]],[3,t.k],t.z]),t.ab(4608,s.n,s.m,[t.w,[2,s.w]]),t.ab(4608,x.v,x.v,[]),t.ab(4608,b.i,b.o,[s.c,t.D,b.m]),t.ab(4608,b.p,b.p,[b.i,b.n]),t.ab(5120,b.a,function(l){return[l]},[b.p]),t.ab(4608,b.l,b.l,[]),t.ab(6144,b.j,null,[b.l]),t.ab(4608,b.h,b.h,[b.j]),t.ab(6144,b.b,null,[b.h]),t.ab(4608,b.f,b.k,[b.b,t.s]),t.ab(4608,b.c,b.c,[b.f]),t.ab(4608,c.Ka,c.Ka,[b.c]),t.ab(4608,c.Ua,c.Ua,[t.D]),t.ab(4608,c.bb,c.bb,[]),t.ab(4608,c.tc,c.tc,[]),t.ab(1073742336,s.b,s.b,[]),t.ab(1073742336,x.s,x.s,[]),t.ab(1073742336,x.e,x.e,[]),t.ab(1073742336,b.e,b.e,[]),t.ab(1073742336,b.d,b.d,[]),t.ab(1073742336,r.b,r.b,[]),t.ab(1073742336,c.w,c.w,[]),t.ab(1073742336,c.u,c.u,[]),t.ab(1073742336,c.z,c.z,[]),t.ab(1073742336,c.B,c.B,[]),t.ab(1073742336,c.E,c.E,[]),t.ab(1073742336,c.m,c.m,[]),t.ab(1073742336,c.S,c.S,[]),t.ab(1073742336,k.n,k.n,[[2,k.t],[2,k.m]]),t.ab(1073742336,a,a,[]),t.ab(256,b.m,"XSRF-TOKEN",[]),t.ab(256,b.n,"X-XSRF-TOKEN",[]),t.ab(1024,k.i,function(){return[[{path:"",component:d,pathMatch:"full"}]]},[])])})},wZee:function(l,e){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},t=function(){var l=/\blang(?:uage)?-([\w-]+)\b/i,e=0,t=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(l){return l instanceof a?new a(l.type,t.util.encode(l.content),l.alias):"Array"===t.util.type(l)?l.map(t.util.encode):l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(l){return Object.prototype.toString.call(l).match(/\[object (\w+)\]/)[1]},objId:function(l){return l.__id||Object.defineProperty(l,"__id",{value:++e}),l.__id},clone:function(l,e){var n=t.util.type(l);switch(e=e||{},n){case"Object":if(e[t.util.objId(l)])return e[t.util.objId(l)];var a={};for(var i in e[t.util.objId(l)]=a,l)l.hasOwnProperty(i)&&(a[i]=t.util.clone(l[i],e));return a;case"Array":return e[t.util.objId(l)]?e[t.util.objId(l)]:(a=[],e[t.util.objId(l)]=a,l.forEach(function(l,n){a[n]=t.util.clone(l,e)}),a)}return l}},languages:{extend:function(l,e){var n=t.util.clone(t.languages[l]);for(var a in e)n[a]=e[a];return n},insertBefore:function(l,e,n,a){var i=(a=a||t.languages)[l];if(2==arguments.length){for(var o in n=arguments[1])n.hasOwnProperty(o)&&(i[o]=n[o]);return i}var u={};for(var r in i)if(i.hasOwnProperty(r)){if(r==e)for(var o in n)n.hasOwnProperty(o)&&(u[o]=n[o]);u[r]=i[r]}return t.languages.DFS(t.languages,function(e,n){n===a[l]&&e!=l&&(this[e]=u)}),a[l]=u},DFS:function(l,e,n,a){for(var i in a=a||{},l)l.hasOwnProperty(i)&&(e.call(l,i,l[i],n||i),"Object"!==t.util.type(l[i])||a[t.util.objId(l[i])]?"Array"!==t.util.type(l[i])||a[t.util.objId(l[i])]||(a[t.util.objId(l[i])]=!0,t.languages.DFS(l[i],e,i,a)):(a[t.util.objId(l[i])]=!0,t.languages.DFS(l[i],e,null,a)))}},plugins:{},highlightAll:function(l,e){t.highlightAllUnder(document,l,e)},highlightAllUnder:function(l,e,n){var a={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};t.hooks.run("before-highlightall",a);for(var i,o=a.elements||l.querySelectorAll(a.selector),u=0;i=o[u++];)t.highlightElement(i,!0===e,a.callback)},highlightElement:function(e,a,i){for(var o,u,r=e;r&&!l.test(r.className);)r=r.parentNode;r&&(o=(r.className.match(l)||[,""])[1].toLowerCase(),u=t.languages[o]),e.className=e.className.replace(l,"").replace(/\s+/g," ")+" language-"+o,e.parentNode&&/pre/i.test((r=e.parentNode).nodeName)&&(r.className=r.className.replace(l,"").replace(/\s+/g," ")+" language-"+o);var c={element:e,language:o,grammar:u,code:e.textContent};if(t.hooks.run("before-sanity-check",c),!c.code||!c.grammar)return c.code&&(t.hooks.run("before-highlight",c),c.element.textContent=c.code,t.hooks.run("after-highlight",c)),void t.hooks.run("complete",c);if(t.hooks.run("before-highlight",c),a&&n.Worker){var s=new Worker(t.filename);s.onmessage=function(l){c.highlightedCode=l.data,t.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,i&&i.call(c.element),t.hooks.run("after-highlight",c),t.hooks.run("complete",c)},s.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=t.highlight(c.code,c.grammar,c.language),t.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,i&&i.call(e),t.hooks.run("after-highlight",c),t.hooks.run("complete",c)},highlight:function(l,e,n){var i={code:l,grammar:e,language:n};return t.hooks.run("before-tokenize",i),i.tokens=t.tokenize(i.code,i.grammar),t.hooks.run("after-tokenize",i),a.stringify(t.util.encode(i.tokens),i.language)},matchGrammar:function(l,e,n,a,i,o,u){var r=t.Token;for(var c in n)if(n.hasOwnProperty(c)&&n[c]){if(c==u)return;var s=n[c];s="Array"===t.util.type(s)?s:[s];for(var d=0;d<s.length;++d){var m=s[d],b=m.inside,p=!!m.lookbehind,h=!!m.greedy,g=0,f=m.alias;if(h&&!m.pattern.global){var y=m.pattern.toString().match(/[imuy]*$/)[0];m.pattern=RegExp(m.pattern.source,y+"g")}m=m.pattern||m;for(var x=a,k=i;x<e.length;k+=e[x].length,++x){var S=e[x];if(e.length>l.length)return;if(!(S instanceof r)){if(h&&x!=e.length-1){if(m.lastIndex=k,!(z=m.exec(l)))break;for(var w=z.index+(p?z[1].length:0),v=z.index+z[0].length,R=x,F=k,C=e.length;R<C&&(F<v||!e[R].type&&!e[R-1].greedy);++R)w>=(F+=e[R].length)&&(++x,k=F);if(e[x]instanceof r)continue;A=R-x,S=l.slice(k,F),z.index-=k}else{m.lastIndex=0;var z=m.exec(S),A=1}if(z){p&&(g=z[1]?z[1].length:0),v=(w=z.index+g)+(z=z[0].slice(g)).length;var j=S.slice(0,w),T=S.slice(v),B=[x,A];j&&(++x,k+=j.length,B.push(j));var M=new r(c,b?t.tokenize(z,b):z,f,z,h);if(B.push(M),T&&B.push(T),Array.prototype.splice.apply(e,B),1!=A&&t.matchGrammar(l,e,n,x,k,!0,c),o)break}else if(o)break}}}}},tokenize:function(l,e,n){var a=[l],i=e.rest;if(i){for(var o in i)e[o]=i[o];delete e.rest}return t.matchGrammar(l,a,e,0,0,!1),a},hooks:{all:{},add:function(l,e){var n=t.hooks.all;n[l]=n[l]||[],n[l].push(e)},run:function(l,e){var n=t.hooks.all[l];if(n&&n.length)for(var a,i=0;a=n[i++];)a(e)}}},a=t.Token=function(l,e,n,t,a){this.type=l,this.content=e,this.alias=n,this.length=0|(t||"").length,this.greedy=!!a};if(a.stringify=function(l,e,n){if("string"==typeof l)return l;if("Array"===t.util.type(l))return l.map(function(n){return a.stringify(n,e,l)}).join("");var i={type:l.type,content:a.stringify(l.content,e,n),tag:"span",classes:["token",l.type],attributes:{},language:e,parent:n};if(l.alias){var o="Array"===t.util.type(l.alias)?l.alias:[l.alias];Array.prototype.push.apply(i.classes,o)}t.hooks.run("wrap",i);var u=Object.keys(i.attributes).map(function(l){return l+'="'+(i.attributes[l]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(u?" "+u:"")+">"+i.content+"</"+i.tag+">"},!n.document)return n.addEventListener?(t.disableWorkerMessageHandler||n.addEventListener("message",function(l){var e=JSON.parse(l.data),a=e.language,i=e.immediateClose;n.postMessage(t.highlight(e.code,t.languages[a],a)),i&&n.close()},!1),n.Prism):n.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(t.filename=i.src,t.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(t.highlightAll):window.setTimeout(t.highlightAll,16):document.addEventListener("DOMContentLoaded",t.highlightAll))),n.Prism}();void 0!==l&&l.exports&&(l.exports=t),"undefined"!=typeof global&&(global.Prism=t),t.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.hooks.add("wrap",function(l){"entity"===l.type&&(l.attributes.title=l.content.replace(/&amp;/,"&"))}),t.languages.xml=t.languages.markup,t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},t.languages.css.atrule.inside.rest=t.languages.css,t.languages.markup&&(t.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:t.languages.css,alias:"language-css",greedy:!0}}),t.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:t.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:t.languages.css}},alias:"language-css"}},t.languages.markup.tag)),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),t.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),t.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}}}),t.languages.markup&&t.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:t.languages.javascript,alias:"language-javascript",greedy:!0}}),t.languages.js=t.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(e){for(var n,a=e.getAttribute("data-src"),i=e,o=/\blang(?:uage)?-(?!\*)([\w-]+)\b/i;i&&!o.test(i.className);)i=i.parentNode;if(i&&(n=(e.className.match(o)||[,""])[1]),!n){var u=(a.match(/\.(\w+)$/)||[,""])[1];n=l[u]||u}var r=document.createElement("code");r.className="language-"+n,e.textContent="",r.textContent="Loading\u2026",e.appendChild(r);var c=new XMLHttpRequest;c.open("GET",a,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(r.textContent=c.responseText,t.highlightElement(r)):r.textContent=c.status>=400?"\u2716 Error "+c.status+" while fetching file: "+c.statusText:"\u2716 Error: File does not exist or is empty")},e.hasAttribute("data-download-link")&&t.plugins.toolbar&&t.plugins.toolbar.registerButton("download-file",function(){var l=document.createElement("a");return l.textContent=e.getAttribute("data-download-link-label")||"Download",l.setAttribute("download",""),l.href=a,l}),c.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);