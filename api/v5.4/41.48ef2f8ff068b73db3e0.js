(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{U89g:function(l,e,n){"use strict";n.d(e,"a",function(){return t}),n.d(e,"b",function(){return u});var a=n("CcnG"),t=(n("d2mR"),n("Ip0R"),a.Qa({encapsulation:2,styles:[],data:{}}));function u(l){return a.mb(0,[],null,null)}},XIHC:function(l,e){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(l,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return t}),n("wZee"),n("XIHC");var a=function(){function l(l,e){this._renderer=l,this._el=e,this.nativeElement=e.nativeElement}return l.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},l}(),t=function(){}},iDus:function(l,e,n){"use strict";n.r(e);var a=n("CcnG"),t=function(){},u=n("gTgE"),i=n("pMnS"),r=n("U89g"),o=n("d2mR"),s=n("O4vx"),c=n("Ip0R"),d=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,e,n=this;this.http.get("assets/data/code/data/progressbar/progressbar.html",{responseType:"text"}).subscribe(function(e){l=e},function(l){},function(){n.htmlCode=l}),this.http.get("assets/data/code/data/progressbar/progressbar.text",{responseType:"text"}).subscribe(function(l){e=l},function(l){},function(){n.typeScriptCode=e})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),p=n("t/Na"),m=a.Qa({encapsulation:2,styles:[],data:{}});function g(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,r.b,r.a)),a.Ra(2,4243456,null,0,o.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,e){l(e,2,0,e.component.htmlCode,"html")},null)}function b(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,r.b,r.a)),a.Ra(2,4243456,null,0,o.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,e){l(e,2,0,e.component.typeScriptCode,"typescript")},null)}function f(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,185,"amexio-card",[["header","true"]],null,null,null,u.bc,u.k)),a.Ra(1,5488640,null,3,s.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,1,{amexioHeader:1}),a.ib(603979776,2,{amexioBody:1}),a.ib(603979776,3,{amexioFooter:1}),(l()(),a.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,u.mc,u.v)),a.Ra(6,114688,[[1,4]],0,s.A,[],null,null),(l()(),a.kb(-1,0,[" Progress Bar "])),(l()(),a.Sa(8,0,null,1,177,"amexio-body",[],null,null,null,u.Vb,u.e)),a.Ra(9,114688,[[2,4]],0,s.d,[],null,null),(l()(),a.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),a.kb(-1,null,["Progress Bar Component Provides up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars and easy to configure."])),(l()(),a.Sa(12,16777216,null,0,173,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,e,n){var t=!0;return"document:click"===e&&(t=!1!==a.cb(l,13).onWindowClick()&&t),"document:scroll"===e&&(t=!1!==a.cb(l,13).onscroll()&&t),t},u.xc,u.G)),a.Ra(13,5357568,null,2,s.Q,[a.F,a.k,a.R],null,null),a.ib(603979776,4,{queryTabs:1}),a.ib(603979776,5,{queryAction:1}),(l()(),a.Sa(16,0,null,1,129,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,u.yc,u.H)),a.Ra(17,114688,[[4,4]],0,s.R,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),a.Sa(18,0,null,0,127,"amexio-row",[],null,null,null,u.tc,u.C)),a.Ra(19,1163264,null,0,s.M,[],null,null),(l()(),a.Sa(20,0,null,0,125,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(21,114688,null,0,s.m,[],{size:[0,"size"]},null),(l()(),a.Sa(22,0,null,0,123,"amexio-card",[],null,null,null,u.bc,u.k)),a.Ra(23,5488640,null,3,s.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,6,{amexioHeader:1}),a.ib(603979776,7,{amexioBody:1}),a.ib(603979776,8,{amexioFooter:1}),(l()(),a.Sa(27,0,null,0,2,"amexio-header",[],null,null,null,u.mc,u.v)),a.Ra(28,114688,[[6,4]],0,s.A,[],null,null),(l()(),a.kb(-1,0,[" Progress Bar "])),(l()(),a.Sa(30,0,null,1,115,"amexio-body",[],null,null,null,u.Vb,u.e)),a.Ra(31,114688,[[7,4]],0,s.d,[],null,null),(l()(),a.Sa(32,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),a.kb(-1,null,["Primary"])),(l()(),a.Sa(34,0,null,0,13,"amexio-row",[],null,null,null,u.tc,u.C)),a.Ra(35,1163264,null,0,s.M,[],null,null),(l()(),a.Sa(36,0,null,0,3,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(37,114688,null,0,s.m,[],{size:[0,"size"]},null),(l()(),a.Sa(38,0,null,0,1,"amexio-progress-bar",[["type","success"]],null,null,null,u.Rd,u.Ab)),a.Ra(39,114688,null,0,s.oc,[],{infinite:[0,"infinite"],type:[1,"type"],currentvalue:[2,"currentvalue"]},null),(l()(),a.Sa(40,0,null,0,3,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(41,114688,null,0,s.m,[],{size:[0,"size"]},null),(l()(),a.Sa(42,0,null,0,1,"amexio-progress-bar",[["type","success"]],null,null,null,u.Rd,u.Ab)),a.Ra(43,114688,null,0,s.oc,[],{infinite:[0,"infinite"],type:[1,"type"],currentvalue:[2,"currentvalue"]},null),(l()(),a.Sa(44,0,null,0,3,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(45,114688,null,0,s.m,[],{size:[0,"size"]},null),(l()(),a.Sa(46,0,null,0,1,"amexio-progress-bar",[["type","success"]],null,null,null,u.Rd,u.Ab)),a.Ra(47,114688,null,0,s.oc,[],{infinite:[0,"infinite"],type:[1,"type"],currentvalue:[2,"currentvalue"]},null),(l()(),a.Sa(48,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),a.kb(-1,null,["Warning"])),(l()(),a.Sa(50,0,null,0,13,"amexio-row",[],null,null,null,u.tc,u.C)),a.Ra(51,1163264,null,0,s.M,[],null,null),(l()(),a.Sa(52,0,null,0,3,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(53,114688,null,0,s.m,[],{size:[0,"size"]},null),(l()(),a.Sa(54,0,null,0,1,"amexio-progress-bar",[["type","warning"]],null,null,null,u.Rd,u.Ab)),a.Ra(55,114688,null,0,s.oc,[],{infinite:[0,"infinite"],type:[1,"type"],currentvalue:[2,"currentvalue"]},null),(l()(),a.Sa(56,0,null,0,3,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(57,114688,null,0,s.m,[],{size:[0,"size"]},null),(l()(),a.Sa(58,0,null,0,1,"amexio-progress-bar",[["type","warning"]],null,null,null,u.Rd,u.Ab)),a.Ra(59,114688,null,0,s.oc,[],{infinite:[0,"infinite"],type:[1,"type"],currentvalue:[2,"currentvalue"]},null),(l()(),a.Sa(60,0,null,0,3,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(61,114688,null,0,s.m,[],{size:[0,"size"]},null),(l()(),a.Sa(62,0,null,0,1,"amexio-progress-bar",[["type","warning"]],null,null,null,u.Rd,u.Ab)),a.Ra(63,114688,null,0,s.oc,[],{infinite:[0,"infinite"],type:[1,"type"],currentvalue:[2,"currentvalue"]},null),(l()(),a.Sa(64,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),a.kb(-1,null,["Success"])),(l()(),a.Sa(66,0,null,0,13,"amexio-row",[],null,null,null,u.tc,u.C)),a.Ra(67,1163264,null,0,s.M,[],null,null),(l()(),a.Sa(68,0,null,0,3,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(69,114688,null,0,s.m,[],{size:[0,"size"]},null),(l()(),a.Sa(70,0,null,0,1,"amexio-progress-bar",[["type","success"]],null,null,null,u.Rd,u.Ab)),a.Ra(71,114688,null,0,s.oc,[],{infinite:[0,"infinite"],type:[1,"type"],currentvalue:[2,"currentvalue"]},null),(l()(),a.Sa(72,0,null,0,3,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(73,114688,null,0,s.m,[],{size:[0,"size"]},null),(l()(),a.Sa(74,0,null,0,1,"amexio-progress-bar",[["type","success"]],null,null,null,u.Rd,u.Ab)),a.Ra(75,114688,null,0,s.oc,[],{infinite:[0,"infinite"],type:[1,"type"],currentvalue:[2,"currentvalue"]},null),(l()(),a.Sa(76,0,null,0,3,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(77,114688,null,0,s.m,[],{size:[0,"size"]},null),(l()(),a.Sa(78,0,null,0,1,"amexio-progress-bar",[["type","success"]],null,null,null,u.Rd,u.Ab)),a.Ra(79,114688,null,0,s.oc,[],{infinite:[0,"infinite"],type:[1,"type"],currentvalue:[2,"currentvalue"]},null),(l()(),a.Sa(80,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),a.kb(-1,null,["Danger"])),(l()(),a.Sa(82,0,null,0,13,"amexio-row",[],null,null,null,u.tc,u.C)),a.Ra(83,1163264,null,0,s.M,[],null,null),(l()(),a.Sa(84,0,null,0,3,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(85,114688,null,0,s.m,[],{size:[0,"size"]},null),(l()(),a.Sa(86,0,null,0,1,"amexio-progress-bar",[["type","danger"]],null,null,null,u.Rd,u.Ab)),a.Ra(87,114688,null,0,s.oc,[],{infinite:[0,"infinite"],type:[1,"type"],currentvalue:[2,"currentvalue"]},null),(l()(),a.Sa(88,0,null,0,3,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(89,114688,null,0,s.m,[],{size:[0,"size"]},null),(l()(),a.Sa(90,0,null,0,1,"amexio-progress-bar",[["type","danger"]],null,null,null,u.Rd,u.Ab)),a.Ra(91,114688,null,0,s.oc,[],{infinite:[0,"infinite"],type:[1,"type"],currentvalue:[2,"currentvalue"]},null),(l()(),a.Sa(92,0,null,0,3,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(93,114688,null,0,s.m,[],{size:[0,"size"]},null),(l()(),a.Sa(94,0,null,0,1,"amexio-progress-bar",[["type","danger"]],null,null,null,u.Rd,u.Ab)),a.Ra(95,114688,null,0,s.oc,[],{infinite:[0,"infinite"],type:[1,"type"],currentvalue:[2,"currentvalue"]},null),(l()(),a.Sa(96,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),a.kb(-1,null,["Infinite"])),(l()(),a.Sa(98,0,null,0,13,"amexio-row",[],null,null,null,u.tc,u.C)),a.Ra(99,1163264,null,0,s.M,[],null,null),(l()(),a.Sa(100,0,null,0,3,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(101,114688,null,0,s.m,[],{size:[0,"size"]},null),(l()(),a.Sa(102,0,null,0,1,"amexio-progress-bar",[["type","danger"]],null,null,null,u.Rd,u.Ab)),a.Ra(103,114688,null,0,s.oc,[],{infinite:[0,"infinite"],type:[1,"type"],currentvalue:[2,"currentvalue"],stripped:[3,"stripped"]},null),(l()(),a.Sa(104,0,null,0,3,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(105,114688,null,0,s.m,[],{size:[0,"size"]},null),(l()(),a.Sa(106,0,null,0,1,"amexio-progress-bar",[["type","success"]],null,null,null,u.Rd,u.Ab)),a.Ra(107,114688,null,0,s.oc,[],{infinite:[0,"infinite"],type:[1,"type"],currentvalue:[2,"currentvalue"],stripped:[3,"stripped"]},null),(l()(),a.Sa(108,0,null,0,3,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(109,114688,null,0,s.m,[],{size:[0,"size"]},null),(l()(),a.Sa(110,0,null,0,1,"amexio-progress-bar",[["type","warning"]],null,null,null,u.Rd,u.Ab)),a.Ra(111,114688,null,0,s.oc,[],{infinite:[0,"infinite"],type:[1,"type"],currentvalue:[2,"currentvalue"],stripped:[3,"stripped"]},null),(l()(),a.Sa(112,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),a.kb(-1,null,["Amexio - Colours "])),(l()(),a.Sa(114,0,null,0,13,"amexio-row",[],null,null,null,u.tc,u.C)),a.Ra(115,1163264,null,0,s.M,[],null,null),(l()(),a.Sa(116,0,null,0,3,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(117,114688,null,0,s.m,[],{size:[0,"size"]},null),(l()(),a.Sa(118,0,null,0,1,"amexio-progress-bar",[],null,null,null,u.Rd,u.Ab)),a.Ra(119,114688,null,0,s.oc,[],{infinite:[0,"infinite"],amexiocolor:[1,"amexiocolor"],currentvalue:[2,"currentvalue"]},null),(l()(),a.Sa(120,0,null,0,3,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(121,114688,null,0,s.m,[],{size:[0,"size"]},null),(l()(),a.Sa(122,0,null,0,1,"amexio-progress-bar",[],null,null,null,u.Rd,u.Ab)),a.Ra(123,114688,null,0,s.oc,[],{infinite:[0,"infinite"],amexiocolor:[1,"amexiocolor"],currentvalue:[2,"currentvalue"]},null),(l()(),a.Sa(124,0,null,0,3,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(125,114688,null,0,s.m,[],{size:[0,"size"]},null),(l()(),a.Sa(126,0,null,0,1,"amexio-progress-bar",[],null,null,null,u.Rd,u.Ab)),a.Ra(127,114688,null,0,s.oc,[],{infinite:[0,"infinite"],amexiocolor:[1,"amexiocolor"],currentvalue:[2,"currentvalue"]},null),(l()(),a.Sa(128,0,null,0,17,"amexio-row",[],null,null,null,u.tc,u.C)),a.Ra(129,1163264,null,0,s.M,[],null,null),(l()(),a.Sa(130,0,null,0,3,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(131,114688,null,0,s.m,[],{size:[0,"size"]},null),(l()(),a.Sa(132,0,null,0,1,"amexio-progress-bar",[],null,null,null,u.Rd,u.Ab)),a.Ra(133,114688,null,0,s.oc,[],{infinite:[0,"infinite"],amexiocolor:[1,"amexiocolor"],currentvalue:[2,"currentvalue"],stripped:[3,"stripped"]},null),(l()(),a.Sa(134,0,null,0,3,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(135,114688,null,0,s.m,[],{size:[0,"size"]},null),(l()(),a.Sa(136,0,null,0,1,"amexio-progress-bar",[],null,null,null,u.Rd,u.Ab)),a.Ra(137,114688,null,0,s.oc,[],{infinite:[0,"infinite"],amexiocolor:[1,"amexiocolor"],currentvalue:[2,"currentvalue"],stripped:[3,"stripped"]},null),(l()(),a.Sa(138,0,null,0,3,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(139,114688,null,0,s.m,[],{size:[0,"size"]},null),(l()(),a.Sa(140,0,null,0,1,"amexio-progress-bar",[],null,null,null,u.Rd,u.Ab)),a.Ra(141,114688,null,0,s.oc,[],{infinite:[0,"infinite"],amexiocolor:[1,"amexiocolor"],currentvalue:[2,"currentvalue"],stripped:[3,"stripped"]},null),(l()(),a.Sa(142,0,null,0,3,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(143,114688,null,0,s.m,[],{size:[0,"size"]},null),(l()(),a.Sa(144,0,null,0,1,"amexio-progress-bar",[],null,null,null,u.Rd,u.Ab)),a.Ra(145,114688,null,0,s.oc,[],{infinite:[0,"infinite"],amexiocolor:[1,"amexiocolor"],currentvalue:[2,"currentvalue"],stripped:[3,"stripped"]},null),(l()(),a.Sa(146,0,null,1,20,"amexio-tab",[["title","API Reference"]],null,null,null,u.yc,u.H)),a.Ra(147,114688,[[4,4]],0,s.R,[],{title:[0,"title"]},null),(l()(),a.Sa(148,0,null,0,18,"amexio-datagrid",[["title","Properties<amexio-progress-bar>"]],null,[["document","scroll"],["document","click"]],function(l,e,n){var t=!0;return"document:scroll"===e&&(t=!1!==a.cb(l,149).onscroll()&&t),"document:click"===e&&(t=!1!==a.cb(l,149).onclick()&&t),t},u.Od,u.xb)),a.Ra(149,1163264,null,1,s.jc,[a.l,s.Pa,a.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,9,{columnRef:1}),(l()(),a.Sa(151,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),a.Ra(152,49152,[[9,4]],2,s.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,10,{headerTemplate:0}),a.ib(335544320,11,{bodyTemplate:0}),(l()(),a.Sa(155,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),a.Ra(156,49152,[[9,4]],2,s.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,12,{headerTemplate:0}),a.ib(335544320,13,{bodyTemplate:0}),(l()(),a.Sa(159,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),a.Ra(160,49152,[[9,4]],2,s.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,14,{headerTemplate:0}),a.ib(335544320,15,{bodyTemplate:0}),(l()(),a.Sa(163,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),a.Ra(164,49152,[[9,4]],2,s.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,16,{headerTemplate:0}),a.ib(335544320,17,{bodyTemplate:0}),(l()(),a.Sa(167,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,u.yc,u.H)),a.Ra(168,114688,[[4,4]],0,s.R,[],{title:[0,"title"]},null),(l()(),a.Sa(169,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),a.Sa(170,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,u.Ac,u.J)),a.Ra(171,5357568,null,1,s.V,[a.F],null,null),a.ib(603979776,18,{queryTabs:1}),(l()(),a.Sa(173,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,u.yc,u.H)),a.Ra(174,114688,[[18,4]],0,s.R,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),a.Ja(16777216,null,0,1,null,g)),a.Ra(176,16384,null,0,c.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.Sa(177,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,u.yc,u.H)),a.Ra(178,114688,[[18,4]],0,s.R,[],{title:[0,"title"]},null),(l()(),a.Ja(16777216,null,0,1,null,b)),a.Ra(180,16384,null,0,c.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.Sa(181,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,u.yc,u.H)),a.Ra(182,114688,[[4,4]],0,s.R,[],{title:[0,"title"]},null),(l()(),a.Sa(183,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),a.kb(-1,null,["Amexio Sandbox"])),(l()(),a.Sa(185,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-progressbar?embed=1&file=app/data/progressbar/progressbar.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(l,e){var n=e.component;l(e,1,0,"true"),l(e,6,0),l(e,9,0),l(e,13,0),l(e,17,0,"Demo","true"),l(e,19,0),l(e,21,0,"12"),l(e,23,0,!0),l(e,28,0),l(e,31,0),l(e,35,0),l(e,37,0,4),l(e,39,0,!1,"success","50"),l(e,41,0,4),l(e,43,0,!1,"success","80"),l(e,45,0,4),l(e,47,0,!1,"success","100"),l(e,51,0),l(e,53,0,4),l(e,55,0,!1,"warning","30"),l(e,57,0,4),l(e,59,0,!1,"warning","55"),l(e,61,0,4),l(e,63,0,!1,"warning","95"),l(e,67,0),l(e,69,0,4),l(e,71,0,!1,"success","45"),l(e,73,0,4),l(e,75,0,!1,"success","63"),l(e,77,0,4),l(e,79,0,!1,"success","99"),l(e,83,0),l(e,85,0,4),l(e,87,0,!1,"danger","54"),l(e,89,0,4),l(e,91,0,!1,"danger","32"),l(e,93,0,4),l(e,95,0,!1,"danger","85"),l(e,99,0),l(e,101,0,4),l(e,103,0,!0,"danger","54",!0),l(e,105,0,4),l(e,107,0,!0,"success","32",!0),l(e,109,0,4),l(e,111,0,!0,"warning","85",!0),l(e,115,0),l(e,117,0,4),l(e,119,0,!1,"amexio-purple","50"),l(e,121,0,4),l(e,123,0,!1,"amexio-green","80"),l(e,125,0,4),l(e,127,0,!1,"amexio-yellow","100"),l(e,129,0),l(e,131,0,3),l(e,133,0,!1,"amexio-red","50",!0),l(e,135,0,3),l(e,137,0,!1,"amexio-blue","80",!0),l(e,139,0,3),l(e,141,0,!1,"amexio-brown","60",!0),l(e,143,0,3),l(e,145,0,!0,"amexio-black","54",!0),l(e,147,0,"API Reference"),l(e,149,0,"Properties<amexio-progress-bar>","assets/apireference/data/progressbar.json","get","properties",!1,!1),l(e,152,0,"Name","name",!1,"string",15),l(e,156,0,"Type","type",!1,"string",10),l(e,160,0,"Default","default",!1,"string",10),l(e,164,0,"Description","description",!1,"string",65),l(e,168,0,"Source"),l(e,171,0),l(e,174,0,"HTML",!0),l(e,176,0,n.htmlCode),l(e,178,0,"Type Script"),l(e,180,0,n.typeScriptCode),l(e,182,0,"Live")},function(l,e){l(e,20,0,a.cb(e,21).role),l(e,36,0,a.cb(e,37).role),l(e,40,0,a.cb(e,41).role),l(e,44,0,a.cb(e,45).role),l(e,52,0,a.cb(e,53).role),l(e,56,0,a.cb(e,57).role),l(e,60,0,a.cb(e,61).role),l(e,68,0,a.cb(e,69).role),l(e,72,0,a.cb(e,73).role),l(e,76,0,a.cb(e,77).role),l(e,84,0,a.cb(e,85).role),l(e,88,0,a.cb(e,89).role),l(e,92,0,a.cb(e,93).role),l(e,100,0,a.cb(e,101).role),l(e,104,0,a.cb(e,105).role),l(e,108,0,a.cb(e,109).role),l(e,116,0,a.cb(e,117).role),l(e,120,0,a.cb(e,121).role),l(e,124,0,a.cb(e,125).role),l(e,130,0,a.cb(e,131).role),l(e,134,0,a.cb(e,135).role),l(e,138,0,a.cb(e,139).role),l(e,142,0,a.cb(e,143).role)})}var h=a.Oa("progressbar-demo",d,function(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,1,"progressbar-demo",[],null,null,null,f,m)),a.Ra(1,49152,null,0,d,[p.c],null,null)],null,null)},{},{},[]),y=n("gIcY"),x=n("ZYCi");n.d(e,"ProgressBarDemoModuleNgFactory",function(){return v});var v=a.Pa(t,[],function(l){return a.Za([a.ab(512,a.k,a.Ea,[[8,[u.a,i.a,h]],[3,a.k],a.z]),a.ab(4608,c.o,c.n,[a.w,[2,c.x]]),a.ab(4608,y.G,y.G,[]),a.ab(4608,p.i,p.o,[c.d,a.D,p.m]),a.ab(4608,p.p,p.p,[p.i,p.n]),a.ab(5120,p.a,function(l){return[l]},[p.p]),a.ab(4608,p.l,p.l,[]),a.ab(6144,p.j,null,[p.l]),a.ab(4608,p.h,p.h,[p.j]),a.ab(6144,p.b,null,[p.h]),a.ab(4608,p.f,p.k,[p.b,a.s]),a.ab(4608,p.c,p.c,[p.f]),a.ab(4608,s.Pa,s.Pa,[p.c]),a.ab(4608,s.Za,s.Za,[a.D]),a.ab(4608,s.gb,s.gb,[]),a.ab(4608,s.z,s.z,[]),a.ab(4608,s.Ab,s.Ab,[]),a.ab(4608,y.f,y.f,[]),a.ab(1073742336,c.c,c.c,[]),a.ab(1073742336,y.D,y.D,[]),a.ab(1073742336,y.l,y.l,[]),a.ab(1073742336,p.e,p.e,[]),a.ab(1073742336,p.d,p.d,[]),a.ab(1073742336,o.b,o.b,[]),a.ab(1073742336,s.B,s.B,[]),a.ab(1073742336,s.w,s.w,[]),a.ab(1073742336,s.E,s.E,[]),a.ab(1073742336,s.G,s.G,[]),a.ab(1073742336,y.z,y.z,[]),a.ab(1073742336,s.J,s.J,[]),a.ab(1073742336,s.o,s.o,[]),a.ab(1073742336,s.X,s.X,[]),a.ab(1073742336,x.n,x.n,[[2,x.t],[2,x.m]]),a.ab(1073742336,t,t,[]),a.ab(256,p.m,"XSRF-TOKEN",[]),a.ab(256,p.n,"X-XSRF-TOKEN",[]),a.ab(1024,x.i,function(){return[[{path:"",component:d,pathMatch:"full"}]]},[])])})},wZee:function(l,e){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(){var l=/\blang(?:uage)?-([\w-]+)\b/i,e=0,a=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(l){return l instanceof t?new t(l.type,a.util.encode(l.content),l.alias):"Array"===a.util.type(l)?l.map(a.util.encode):l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(l){return Object.prototype.toString.call(l).match(/\[object (\w+)\]/)[1]},objId:function(l){return l.__id||Object.defineProperty(l,"__id",{value:++e}),l.__id},clone:function(l,e){var n=a.util.type(l);switch(e=e||{},n){case"Object":if(e[a.util.objId(l)])return e[a.util.objId(l)];var t={};for(var u in e[a.util.objId(l)]=t,l)l.hasOwnProperty(u)&&(t[u]=a.util.clone(l[u],e));return t;case"Array":return e[a.util.objId(l)]?e[a.util.objId(l)]:(t=[],e[a.util.objId(l)]=t,l.forEach(function(l,n){t[n]=a.util.clone(l,e)}),t)}return l}},languages:{extend:function(l,e){var n=a.util.clone(a.languages[l]);for(var t in e)n[t]=e[t];return n},insertBefore:function(l,e,n,t){var u=(t=t||a.languages)[l];if(2==arguments.length){for(var i in n=arguments[1])n.hasOwnProperty(i)&&(u[i]=n[i]);return u}var r={};for(var o in u)if(u.hasOwnProperty(o)){if(o==e)for(var i in n)n.hasOwnProperty(i)&&(r[i]=n[i]);r[o]=u[o]}return a.languages.DFS(a.languages,function(e,n){n===t[l]&&e!=l&&(this[e]=r)}),t[l]=r},DFS:function(l,e,n,t){for(var u in t=t||{},l)l.hasOwnProperty(u)&&(e.call(l,u,l[u],n||u),"Object"!==a.util.type(l[u])||t[a.util.objId(l[u])]?"Array"!==a.util.type(l[u])||t[a.util.objId(l[u])]||(t[a.util.objId(l[u])]=!0,a.languages.DFS(l[u],e,u,t)):(t[a.util.objId(l[u])]=!0,a.languages.DFS(l[u],e,null,t)))}},plugins:{},highlightAll:function(l,e){a.highlightAllUnder(document,l,e)},highlightAllUnder:function(l,e,n){var t={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",t);for(var u,i=t.elements||l.querySelectorAll(t.selector),r=0;u=i[r++];)a.highlightElement(u,!0===e,t.callback)},highlightElement:function(e,t,u){for(var i,r,o=e;o&&!l.test(o.className);)o=o.parentNode;o&&(i=(o.className.match(l)||[,""])[1].toLowerCase(),r=a.languages[i]),e.className=e.className.replace(l,"").replace(/\s+/g," ")+" language-"+i,e.parentNode&&/pre/i.test((o=e.parentNode).nodeName)&&(o.className=o.className.replace(l,"").replace(/\s+/g," ")+" language-"+i);var s={element:e,language:i,grammar:r,code:e.textContent};if(a.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(a.hooks.run("before-highlight",s),s.element.textContent=s.code,a.hooks.run("after-highlight",s)),void a.hooks.run("complete",s);if(a.hooks.run("before-highlight",s),t&&n.Worker){var c=new Worker(a.filename);c.onmessage=function(l){s.highlightedCode=l.data,a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,u&&u.call(s.element),a.hooks.run("after-highlight",s),a.hooks.run("complete",s)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=a.highlight(s.code,s.grammar,s.language),a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,u&&u.call(e),a.hooks.run("after-highlight",s),a.hooks.run("complete",s)},highlight:function(l,e,n){var u={code:l,grammar:e,language:n};return a.hooks.run("before-tokenize",u),u.tokens=a.tokenize(u.code,u.grammar),a.hooks.run("after-tokenize",u),t.stringify(a.util.encode(u.tokens),u.language)},matchGrammar:function(l,e,n,t,u,i,r){var o=a.Token;for(var s in n)if(n.hasOwnProperty(s)&&n[s]){if(s==r)return;var c=n[s];c="Array"===a.util.type(c)?c:[c];for(var d=0;d<c.length;++d){var p=c[d],m=p.inside,g=!!p.lookbehind,b=!!p.greedy,f=0,h=p.alias;if(b&&!p.pattern.global){var y=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,y+"g")}p=p.pattern||p;for(var x=t,v=u;x<e.length;v+=e[x].length,++x){var S=e[x];if(e.length>l.length)return;if(!(S instanceof o)){if(b&&x!=e.length-1){if(p.lastIndex=v,!(F=p.exec(l)))break;for(var R=F.index+(g?F[1].length:0),k=F.index+F[0].length,w=x,A=v,z=e.length;w<z&&(A<k||!e[w].type&&!e[w-1].greedy);++w)R>=(A+=e[w].length)&&(++x,v=A);if(e[x]instanceof o)continue;C=w-x,S=l.slice(v,A),F.index-=v}else{p.lastIndex=0;var F=p.exec(S),C=1}if(F){g&&(f=F[1]?F[1].length:0),k=(R=F.index+f)+(F=F[0].slice(f)).length;var P=S.slice(0,R),j=S.slice(k),N=[x,C];P&&(++x,v+=P.length,N.push(P));var T=new o(s,m?a.tokenize(F,m):F,h,F,b);if(N.push(T),j&&N.push(j),Array.prototype.splice.apply(e,N),1!=C&&a.matchGrammar(l,e,n,x,v,!0,s),i)break}else if(i)break}}}}},tokenize:function(l,e,n){var t=[l],u=e.rest;if(u){for(var i in u)e[i]=u[i];delete e.rest}return a.matchGrammar(l,t,e,0,0,!1),t},hooks:{all:{},add:function(l,e){var n=a.hooks.all;n[l]=n[l]||[],n[l].push(e)},run:function(l,e){var n=a.hooks.all[l];if(n&&n.length)for(var t,u=0;t=n[u++];)t(e)}}},t=a.Token=function(l,e,n,a,t){this.type=l,this.content=e,this.alias=n,this.length=0|(a||"").length,this.greedy=!!t};if(t.stringify=function(l,e,n){if("string"==typeof l)return l;if("Array"===a.util.type(l))return l.map(function(n){return t.stringify(n,e,l)}).join("");var u={type:l.type,content:t.stringify(l.content,e,n),tag:"span",classes:["token",l.type],attributes:{},language:e,parent:n};if(l.alias){var i="Array"===a.util.type(l.alias)?l.alias:[l.alias];Array.prototype.push.apply(u.classes,i)}a.hooks.run("wrap",u);var r=Object.keys(u.attributes).map(function(l){return l+'="'+(u.attributes[l]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+u.tag+' class="'+u.classes.join(" ")+'"'+(r?" "+r:"")+">"+u.content+"</"+u.tag+">"},!n.document)return n.addEventListener?(a.disableWorkerMessageHandler||n.addEventListener("message",function(l){var e=JSON.parse(l.data),t=e.language,u=e.immediateClose;n.postMessage(a.highlight(e.code,a.languages[t],t)),u&&n.close()},!1),n.Prism):n.Prism;var u=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return u&&(a.filename=u.src,a.manual||u.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),n.Prism}();void 0!==l&&l.exports&&(l.exports=a),"undefined"!=typeof global&&(global.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",function(l){"entity"===l.type&&(l.attributes.title=l.content.replace(/&amp;/,"&"))}),a.languages.xml=a.languages.markup,a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},a.languages.css.atrule.inside.rest=a.languages.css,a.languages.markup&&(a.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:a.languages.css,alias:"language-css",greedy:!0}}),a.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:a.languages.css}},alias:"language-css"}},a.languages.markup.tag)),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),a.languages.javascript["template-string"].inside.interpolation.inside.rest=a.languages.javascript,a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:a.languages.javascript,alias:"language-javascript",greedy:!0}}),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(e){for(var n,t=e.getAttribute("data-src"),u=e,i=/\blang(?:uage)?-([\w-]+)\b/i;u&&!i.test(u.className);)u=u.parentNode;if(u&&(n=(e.className.match(i)||[,""])[1]),!n){var r=(t.match(/\.(\w+)$/)||[,""])[1];n=l[r]||r}var o=document.createElement("code");o.className="language-"+n,e.textContent="",o.textContent="Loading\u2026",e.appendChild(o);var s=new XMLHttpRequest;s.open("GET",t,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(o.textContent=s.responseText,a.highlightElement(o)):o.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},s.send(null)}),a.plugins.toolbar&&a.plugins.toolbar.registerButton("download-file",function(l){var e=l.element.parentNode;if(e&&/pre/i.test(e.nodeName)&&e.hasAttribute("data-src")&&e.hasAttribute("data-download-link")){var n=e.getAttribute("data-src"),a=document.createElement("a");return a.textContent=e.getAttribute("data-download-link-label")||"Download",a.setAttribute("download",""),a.href=n,a}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);