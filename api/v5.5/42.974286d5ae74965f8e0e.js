(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{U89g:function(l,e,n){"use strict";n.d(e,"a",function(){return t}),n.d(e,"b",function(){return i});var a=n("CcnG"),t=(n("d2mR"),n("Ip0R"),a.Qa({encapsulation:2,styles:[],data:{}}));function i(l){return a.mb(0,[],null,null)}},XIHC:function(l,e){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(l,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return t}),n("wZee"),n("XIHC");var a=function(){function l(l,e){this._renderer=l,this._el=e,this.nativeElement=e.nativeElement}return l.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},l}(),t=function(){}},"j9+S":function(l,e,n){"use strict";n.r(e);var a=n("CcnG"),t=function(){},i=n("gTgE"),o=n("pMnS"),u=n("O4vx"),r=n("U89g"),s=n("d2mR"),c=n("Ip0R"),d=n("gIcY"),p=function(){},h=function(){function l(l){this.http=l,this.isBoxShow=!1,this.clickShow=!0,this.buttonShowHide="Show",this.text="Hide",this.getHtmlAndTypeScriptCode(),this.colorModel=new g,this.spinnerModel=new p,this.spinnerData={type:[{spinnerType:"rectanglebounce"},{spinnerType:"ring"},{spinnerType:"halfcircle"},{spinnerType:"fadingcircle"},{spinnerType:"ballspin"},{spinnerType:"firespin"},{spinnerType:"threebounce"},{spinnerType:"spinnerround"}],horizontalPosition:[{hposition:"left"},{hposition:"center"},{hposition:"right"}],verticalPosition:[{vposition:"top"},{vposition:"center"},{vposition:"bottom"}]}}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,e,n=this;this.http.get("assets/data/code/data/spinner/spinner.html",{responseType:"text"}).subscribe(function(e){l=e},function(l){},function(){n.htmlCode=l}),this.http.get("assets/data/code/data/spinner/spinner.text",{responseType:"text"}).subscribe(function(l){e=l},function(l){},function(){n.typeScriptCode=e})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l.prototype.setColorForIndictor=function(l){this.colorModel.color=l.target.value},l.prototype.onButtonClick=function(){this.text=this.clickShow?"Show":"Hide",this.clickShow=!this.clickShow},l.prototype.onAdvanceClick=function(){this.buttonShowHide=null!=this.spinnerModel.hposition&&null!=this.spinnerModel.spinnerType&&null!=this.spinnerModel.vposition?"Show":"Hide",this.isBoxShow=!this.isBoxShow,this.buttonShowHide=this.isBoxShow?"Hide":"Show"},l}(),g=function(){},m=n("t/Na"),b=a.Qa({encapsulation:2,styles:[],data:{}});function f(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,1,"amexio-spinner",[],null,null,null,i.Qd,i.rb)),a.Ra(1,638976,null,0,u.fc,[a.F],{type:[0,"type"],color:[1,"color"],verticalposition:[2,"verticalposition"],horizontalposition:[3,"horizontalposition"]},null)],function(l,e){var n=e.component;l(e,1,0,n.spinnerModel.spinnerType,n.colorModel.color,n.spinnerModel.vposition,n.spinnerModel.hposition)},null)}function y(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,r.b,r.a)),a.Ra(2,4243456,null,0,s.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,e){l(e,2,0,e.component.htmlCode,"html")},null)}function x(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,r.b,r.a)),a.Ra(2,4243456,null,0,s.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,e){l(e,2,0,e.component.typeScriptCode,"typescript")},null)}function v(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,242,"amexio-card",[["header","true"]],null,null,null,i.jc,i.k)),a.Ra(1,7585792,null,3,u.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,1,{amexioHeader:1}),a.ib(603979776,2,{amexioBody:1}),a.ib(603979776,3,{amexioFooter:1}),(l()(),a.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,i.vc,i.w)),a.Ra(6,114688,[[1,4]],0,u.C,[],null,null),(l()(),a.kb(-1,0,[" Data Loading Indicator "])),(l()(),a.Sa(8,0,null,1,234,"amexio-body",[],null,null,null,i.dc,i.e)),a.Ra(9,114688,[[2,4]],0,u.d,[],null,null),(l()(),a.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),a.kb(-1,null,["Data Loading Indicator Component Provides up-to-date feedback on the progress of a workflow or action with simple yet flexible spinner and easy to configure."])),(l()(),a.Sa(12,0,null,0,230,"amexio-tab-view",[],null,null,null,i.Gc,i.H)),a.Ra(13,5488640,null,2,u.S,[a.F,a.k,a.F],null,null),a.ib(603979776,4,{queryTabs:1}),a.ib(603979776,5,{queryAction:1}),(l()(),a.Sa(16,0,null,1,182,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.Hc,i.I)),a.Ra(17,114688,[[4,4]],0,u.T,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),a.Sa(18,0,null,0,180,"amexio-row",[],null,null,null,i.Cc,i.D)),a.Ra(19,1163264,null,0,u.O,[],null,null),(l()(),a.Sa(20,0,null,0,178,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,i.lc,i.m)),a.Ra(21,114688,null,0,u.m,[],{size:[0,"size"]},null),(l()(),a.Sa(22,0,null,0,176,"amexio-card",[],null,null,null,i.jc,i.k)),a.Ra(23,7585792,null,3,u.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,6,{amexioHeader:1}),a.ib(603979776,7,{amexioBody:1}),a.ib(603979776,8,{amexioFooter:1}),(l()(),a.Sa(27,0,null,0,2,"amexio-header",[],null,null,null,i.vc,i.w)),a.Ra(28,114688,[[6,4]],0,u.C,[],null,null),(l()(),a.kb(-1,0,[" Data Loading Indicator "])),(l()(),a.Sa(30,0,null,1,168,"amexio-body",[],null,null,null,i.dc,i.e)),a.Ra(31,114688,[[7,4]],0,u.d,[],null,null),(l()(),a.Sa(32,0,null,0,1,"amexio-button",[],null,[[null,"onClick"]],function(l,e,n){var a=!0;return"onClick"===e&&(a=!1!==l.component.onButtonClick()&&a),a},i.hc,i.i)),a.Ra(33,114688,null,0,u.h,[],{label:[0,"label"],type:[1,"type"],tooltip:[2,"tooltip"]},{onClick:"onClick"}),(l()(),a.Sa(34,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),a.Sa(35,0,null,0,2,"amexio-label",[["size","small-bold"]],null,null,null,i.Gd,i.hb)),a.Ra(36,114688,null,0,u.Tb,[],{styleClass:[0,"styleClass"]},null),(l()(),a.kb(-1,0,["Select Color For Spinner : -"])),(l()(),a.Sa(38,0,null,0,0,"input",[["id","head"],["name","color"],["type","color"],["value","colorModel.color"]],null,[[null,"input"]],function(l,e,n){var a=!0;return"input"===e&&(a=!1!==l.component.setColorForIndictor(n)&&a),a},null,null)),(l()(),a.Sa(39,0,null,0,71,"amexio-row",[],null,null,null,i.Cc,i.D)),a.Ra(40,1163264,null,0,u.O,[],null,null),(l()(),a.Sa(41,0,null,0,41,"amexio-column",[],[[1,"class",0]],null,null,i.lc,i.m)),a.Ra(42,114688,null,0,u.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(43,0,null,0,39,"amexio-card",[],null,null,null,i.jc,i.k)),a.Ra(44,7585792,null,3,u.j,[a.F],{header:[0,"header"],footer:[1,"footer"],footeralign:[2,"footeralign"],bodyheight:[3,"bodyheight"]},null),a.ib(603979776,9,{amexioHeader:1}),a.ib(603979776,10,{amexioBody:1}),a.ib(603979776,11,{amexioFooter:1}),(l()(),a.Sa(48,0,null,0,2,"amexio-header",[],null,null,null,i.vc,i.w)),a.Ra(49,114688,[[9,4]],0,u.C,[],null,null),(l()(),a.kb(-1,0,[" Advanced Spinner "])),(l()(),a.Sa(51,0,null,1,27,"amexio-body",[],null,null,null,i.dc,i.e)),a.Ra(52,114688,[[10,4]],0,u.d,[],null,null),(l()(),a.Ja(16777216,null,0,1,null,f)),a.Ra(54,16384,null,0,c.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.Sa(55,0,null,0,7,"amexio-dropdown",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,e,n){var a=!0;return"ngModelChange"===e&&(a=!1!==(l.component.spinnerModel.spinnerType=n)&&a),a},i.se,i.Tb)),a.Ra(56,114688,null,1,u.Xc,[u.Ta,a.l,a.F,a.i],{fieldlabel:[0,"fieldlabel"],data:[1,"data"],datareader:[2,"datareader"],displayfield:[3,"displayfield"],valuefield:[4,"valuefield"],placeholder:[5,"placeholder"]},null),a.ib(335544320,12,{bodyTemplate:0}),a.hb(1024,null,d.o,function(l){return[l]},[u.Xc]),a.hb(1024,null,d.p,function(l){return[l]},[u.Xc]),a.Ra(60,671744,null,0,d.u,[[8,null],[6,d.o],[8,null],[6,d.p]],{model:[0,"model"]},{update:"ngModelChange"}),a.hb(2048,null,d.q,null,[d.u]),a.Ra(62,16384,null,0,d.r,[[4,d.q]],null,null),(l()(),a.Sa(63,0,null,0,7,"amexio-dropdown",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,e,n){var a=!0;return"ngModelChange"===e&&(a=!1!==(l.component.spinnerModel.vposition=n)&&a),a},i.se,i.Tb)),a.Ra(64,114688,null,1,u.Xc,[u.Ta,a.l,a.F,a.i],{fieldlabel:[0,"fieldlabel"],data:[1,"data"],datareader:[2,"datareader"],displayfield:[3,"displayfield"],valuefield:[4,"valuefield"],placeholder:[5,"placeholder"]},null),a.ib(335544320,13,{bodyTemplate:0}),a.hb(1024,null,d.o,function(l){return[l]},[u.Xc]),a.hb(1024,null,d.p,function(l){return[l]},[u.Xc]),a.Ra(68,671744,null,0,d.u,[[8,null],[6,d.o],[8,null],[6,d.p]],{model:[0,"model"]},{update:"ngModelChange"}),a.hb(2048,null,d.q,null,[d.u]),a.Ra(70,16384,null,0,d.r,[[4,d.q]],null,null),(l()(),a.Sa(71,0,null,0,7,"amexio-dropdown",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,e,n){var a=!0;return"ngModelChange"===e&&(a=!1!==(l.component.spinnerModel.hposition=n)&&a),a},i.se,i.Tb)),a.Ra(72,114688,null,1,u.Xc,[u.Ta,a.l,a.F,a.i],{fieldlabel:[0,"fieldlabel"],data:[1,"data"],datareader:[2,"datareader"],displayfield:[3,"displayfield"],valuefield:[4,"valuefield"],placeholder:[5,"placeholder"]},null),a.ib(335544320,14,{bodyTemplate:0}),a.hb(1024,null,d.o,function(l){return[l]},[u.Xc]),a.hb(1024,null,d.p,function(l){return[l]},[u.Xc]),a.Ra(76,671744,null,0,d.u,[[8,null],[6,d.o],[8,null],[6,d.p]],{model:[0,"model"]},{update:"ngModelChange"}),a.hb(2048,null,d.q,null,[d.u]),a.Ra(78,16384,null,0,d.r,[[4,d.q]],null,null),(l()(),a.Sa(79,0,null,2,3,"amexio-action",[],null,null,null,i.nc,i.o)),a.Ra(80,1163264,[[11,4]],0,u.s,[],null,null),(l()(),a.Sa(81,0,null,0,1,"amexio-button",[],null,[[null,"onClick"]],function(l,e,n){var a=!0;return"onClick"===e&&(a=!1!==l.component.onAdvanceClick()&&a),a},i.hc,i.i)),a.Ra(82,114688,null,0,u.h,[],{label:[0,"label"],type:[1,"type"],tooltip:[2,"tooltip"]},{onClick:"onClick"}),(l()(),a.Sa(83,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,i.lc,i.m)),a.Ra(84,114688,null,0,u.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(85,0,null,0,11,"amexio-card",[],null,null,null,i.jc,i.k)),a.Ra(86,7585792,null,3,u.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,15,{amexioHeader:1}),a.ib(603979776,16,{amexioBody:1}),a.ib(603979776,17,{amexioFooter:1}),(l()(),a.Sa(90,0,null,0,2,"amexio-header",[],null,null,null,i.vc,i.w)),a.Ra(91,114688,[[15,4]],0,u.C,[],null,null),(l()(),a.kb(-1,0,[" fading circle round loader "])),(l()(),a.Sa(93,0,null,1,3,"amexio-body",[],null,null,null,i.dc,i.e)),a.Ra(94,114688,[[16,4]],0,u.d,[],null,null),(l()(),a.Sa(95,0,null,0,1,"amexio-spinner",[["relative","true"]],null,null,null,i.Qd,i.rb)),a.Ra(96,638976,null,0,u.fc,[a.F],{type:[0,"type"],color:[1,"color"],show:[2,"show"],size:[3,"size"],relative:[4,"relative"]},null),(l()(),a.Sa(97,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,i.lc,i.m)),a.Ra(98,114688,null,0,u.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(99,0,null,0,11,"amexio-card",[],null,null,null,i.jc,i.k)),a.Ra(100,7585792,null,3,u.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,18,{amexioHeader:1}),a.ib(603979776,19,{amexioBody:1}),a.ib(603979776,20,{amexioFooter:1}),(l()(),a.Sa(104,0,null,0,2,"amexio-header",[],null,null,null,i.vc,i.w)),a.Ra(105,114688,[[18,4]],0,u.C,[],null,null),(l()(),a.kb(-1,0,[" ball spin loader "])),(l()(),a.Sa(107,0,null,1,3,"amexio-body",[],null,null,null,i.dc,i.e)),a.Ra(108,114688,[[19,4]],0,u.d,[],null,null),(l()(),a.Sa(109,0,null,0,1,"amexio-spinner",[["relative","true"]],null,null,null,i.Qd,i.rb)),a.Ra(110,638976,null,0,u.fc,[a.F],{type:[0,"type"],color:[1,"color"],show:[2,"show"],size:[3,"size"],relative:[4,"relative"]},null),(l()(),a.Sa(111,0,null,0,43,"amexio-row",[],null,null,null,i.Cc,i.D)),a.Ra(112,1163264,null,0,u.O,[],null,null),(l()(),a.Sa(113,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,i.lc,i.m)),a.Ra(114,114688,null,0,u.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(115,0,null,0,11,"amexio-card",[],null,null,null,i.jc,i.k)),a.Ra(116,7585792,null,3,u.j,[a.F],{header:[0,"header"],bodyheight:[1,"bodyheight"]},null),a.ib(603979776,21,{amexioHeader:1}),a.ib(603979776,22,{amexioBody:1}),a.ib(603979776,23,{amexioFooter:1}),(l()(),a.Sa(120,0,null,0,2,"amexio-header",[],null,null,null,i.vc,i.w)),a.Ra(121,114688,[[21,4]],0,u.C,[],null,null),(l()(),a.kb(-1,0,[" fire spin loader "])),(l()(),a.Sa(123,0,null,1,3,"amexio-body",[],null,null,null,i.dc,i.e)),a.Ra(124,114688,[[22,4]],0,u.d,[],null,null),(l()(),a.Sa(125,0,null,0,1,"amexio-spinner",[["relative","true"]],null,null,null,i.Qd,i.rb)),a.Ra(126,638976,null,0,u.fc,[a.F],{type:[0,"type"],color:[1,"color"],show:[2,"show"],size:[3,"size"],relative:[4,"relative"]},null),(l()(),a.Sa(127,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,i.lc,i.m)),a.Ra(128,114688,null,0,u.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(129,0,null,0,11,"amexio-card",[],null,null,null,i.jc,i.k)),a.Ra(130,7585792,null,3,u.j,[a.F],{header:[0,"header"],bodyheight:[1,"bodyheight"]},null),a.ib(603979776,24,{amexioHeader:1}),a.ib(603979776,25,{amexioBody:1}),a.ib(603979776,26,{amexioFooter:1}),(l()(),a.Sa(134,0,null,0,2,"amexio-header",[],null,null,null,i.vc,i.w)),a.Ra(135,114688,[[24,4]],0,u.C,[],null,null),(l()(),a.kb(-1,0,[" three bounce loader "])),(l()(),a.Sa(137,0,null,1,3,"amexio-body",[],null,null,null,i.dc,i.e)),a.Ra(138,114688,[[25,4]],0,u.d,[],null,null),(l()(),a.Sa(139,0,null,0,1,"amexio-spinner",[["relative","true"]],null,null,null,i.Qd,i.rb)),a.Ra(140,638976,null,0,u.fc,[a.F],{type:[0,"type"],color:[1,"color"],show:[2,"show"],size:[3,"size"],relative:[4,"relative"]},null),(l()(),a.Sa(141,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,i.lc,i.m)),a.Ra(142,114688,null,0,u.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(143,0,null,0,11,"amexio-card",[],null,null,null,i.jc,i.k)),a.Ra(144,7585792,null,3,u.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,27,{amexioHeader:1}),a.ib(603979776,28,{amexioBody:1}),a.ib(603979776,29,{amexioFooter:1}),(l()(),a.Sa(148,0,null,0,2,"amexio-header",[],null,null,null,i.vc,i.w)),a.Ra(149,114688,[[27,4]],0,u.C,[],null,null),(l()(),a.kb(-1,0,[" spinner round loader "])),(l()(),a.Sa(151,0,null,1,3,"amexio-body",[],null,null,null,i.dc,i.e)),a.Ra(152,114688,[[28,4]],0,u.d,[],null,null),(l()(),a.Sa(153,0,null,0,1,"amexio-spinner",[["relative","true"]],null,null,null,i.Qd,i.rb)),a.Ra(154,638976,null,0,u.fc,[a.F],{type:[0,"type"],color:[1,"color"],show:[2,"show"],size:[3,"size"],relative:[4,"relative"]},null),(l()(),a.Sa(155,0,null,0,43,"amexio-row",[],null,null,null,i.Cc,i.D)),a.Ra(156,1163264,null,0,u.O,[],null,null),(l()(),a.Sa(157,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,i.lc,i.m)),a.Ra(158,114688,null,0,u.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(159,0,null,0,11,"amexio-card",[],null,null,null,i.jc,i.k)),a.Ra(160,7585792,null,3,u.j,[a.F],{header:[0,"header"],bodyheight:[1,"bodyheight"]},null),a.ib(603979776,30,{amexioHeader:1}),a.ib(603979776,31,{amexioBody:1}),a.ib(603979776,32,{amexioFooter:1}),(l()(),a.Sa(164,0,null,0,2,"amexio-header",[],null,null,null,i.vc,i.w)),a.Ra(165,114688,[[30,4]],0,u.C,[],null,null),(l()(),a.kb(-1,0,[" ring loader "])),(l()(),a.Sa(167,0,null,1,3,"amexio-body",[],null,null,null,i.dc,i.e)),a.Ra(168,114688,[[31,4]],0,u.d,[],null,null),(l()(),a.Sa(169,0,null,0,1,"amexio-spinner",[["relative","true"]],null,null,null,i.Qd,i.rb)),a.Ra(170,638976,null,0,u.fc,[a.F],{type:[0,"type"],color:[1,"color"],show:[2,"show"],size:[3,"size"],relative:[4,"relative"]},null),(l()(),a.Sa(171,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,i.lc,i.m)),a.Ra(172,114688,null,0,u.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(173,0,null,0,11,"amexio-card",[],null,null,null,i.jc,i.k)),a.Ra(174,7585792,null,3,u.j,[a.F],{header:[0,"header"],bodyheight:[1,"bodyheight"]},null),a.ib(603979776,33,{amexioHeader:1}),a.ib(603979776,34,{amexioBody:1}),a.ib(603979776,35,{amexioFooter:1}),(l()(),a.Sa(178,0,null,0,2,"amexio-header",[],null,null,null,i.vc,i.w)),a.Ra(179,114688,[[33,4]],0,u.C,[],null,null),(l()(),a.kb(-1,0,[" half circle loader "])),(l()(),a.Sa(181,0,null,1,3,"amexio-body",[],null,null,null,i.dc,i.e)),a.Ra(182,114688,[[34,4]],0,u.d,[],null,null),(l()(),a.Sa(183,0,null,0,1,"amexio-spinner",[["relative","true"]],null,null,null,i.Qd,i.rb)),a.Ra(184,638976,null,0,u.fc,[a.F],{type:[0,"type"],show:[1,"show"],size:[2,"size"],relative:[3,"relative"]},null),(l()(),a.Sa(185,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,i.lc,i.m)),a.Ra(186,114688,null,0,u.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(187,0,null,0,11,"amexio-card",[],null,null,null,i.jc,i.k)),a.Ra(188,7585792,null,3,u.j,[a.F],{header:[0,"header"],bodyheight:[1,"bodyheight"]},null),a.ib(603979776,36,{amexioHeader:1}),a.ib(603979776,37,{amexioBody:1}),a.ib(603979776,38,{amexioFooter:1}),(l()(),a.Sa(192,0,null,0,2,"amexio-header",[],null,null,null,i.vc,i.w)),a.Ra(193,114688,[[36,4]],0,u.C,[],null,null),(l()(),a.kb(-1,0,[" rectangle Bounce loader "])),(l()(),a.Sa(195,0,null,1,3,"amexio-body",[],null,null,null,i.dc,i.e)),a.Ra(196,114688,[[37,4]],0,u.d,[],null,null),(l()(),a.Sa(197,0,null,0,1,"amexio-spinner",[["relative","true"]],null,null,null,i.Qd,i.rb)),a.Ra(198,638976,null,0,u.fc,[a.F],{type:[0,"type"],show:[1,"show"],size:[2,"size"],relative:[3,"relative"]},null),(l()(),a.Sa(199,0,null,1,24,"amexio-tab",[["title","API Reference"]],null,null,null,i.Hc,i.I)),a.Ra(200,114688,[[4,4]],0,u.T,[],{title:[0,"title"]},null),(l()(),a.Sa(201,0,null,0,22,"amexio-datagrid",[["title","Properties<amexio-spinner>"]],null,null,null,i.de,i.Eb)),a.Ra(202,5488640,null,1,u.Dc,[a.l,u.Ta,a.i,a.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,39,{columnRef:1}),(l()(),a.Sa(204,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.fe,i.Gb)),a.Ra(205,49152,[[39,4]],2,u.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,40,{headerTemplate:0}),a.ib(335544320,41,{bodyTemplate:0}),(l()(),a.Sa(208,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.fe,i.Gb)),a.Ra(209,49152,[[39,4]],2,u.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,42,{headerTemplate:0}),a.ib(335544320,43,{bodyTemplate:0}),(l()(),a.Sa(212,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.fe,i.Gb)),a.Ra(213,49152,[[39,4]],2,u.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,44,{headerTemplate:0}),a.ib(335544320,45,{bodyTemplate:0}),(l()(),a.Sa(216,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.fe,i.Gb)),a.Ra(217,49152,[[39,4]],2,u.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,46,{headerTemplate:0}),a.ib(335544320,47,{bodyTemplate:0}),(l()(),a.Sa(220,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.fe,i.Gb)),a.Ra(221,49152,[[39,4]],2,u.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,48,{headerTemplate:0}),a.ib(335544320,49,{bodyTemplate:0}),(l()(),a.Sa(224,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,i.Hc,i.I)),a.Ra(225,114688,[[4,4]],0,u.T,[],{title:[0,"title"]},null),(l()(),a.Sa(226,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),a.Sa(227,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,i.Jc,i.K)),a.Ra(228,5357568,null,1,u.X,[a.F,a.k],null,null),a.ib(603979776,50,{queryTabs:1}),(l()(),a.Sa(230,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.Hc,i.I)),a.Ra(231,114688,[[50,4]],0,u.T,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),a.Ja(16777216,null,0,1,null,y)),a.Ra(233,16384,null,0,c.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.Sa(234,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.Hc,i.I)),a.Ra(235,114688,[[50,4]],0,u.T,[],{title:[0,"title"]},null),(l()(),a.Ja(16777216,null,0,1,null,x)),a.Ra(237,16384,null,0,c.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.Sa(238,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.Hc,i.I)),a.Ra(239,114688,[[4,4]],0,u.T,[],{title:[0,"title"]},null),(l()(),a.Sa(240,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),a.kb(-1,null,["Amexio Sandbox"])),(l()(),a.Sa(242,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-spinner?embed=1&file=src/app/spinner/spinner.demo.component.html&view=editor"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(l,e){var n=e.component;l(e,1,0,"true"),l(e,6,0),l(e,9,0),l(e,13,0),l(e,17,0,"Demo","true"),l(e,19,0),l(e,21,0,"12"),l(e,23,0,!0),l(e,28,0),l(e,31,0),l(e,33,0,n.text,"yellow","show"),l(e,36,0,"small-bold"),l(e,40,0),l(e,42,0,!0,4),l(e,44,0,!0,!0,"right",45),l(e,49,0),l(e,52,0),l(e,54,0,n.isBoxShow),l(e,56,0,"Choose Spinner Type",n.spinnerData,"type","spinnerType","spinnerType","Choose"),l(e,60,0,n.spinnerModel.spinnerType),l(e,64,0,"Choose Vertical Position",n.spinnerData,"verticalPosition","vposition","vposition","Choose"),l(e,68,0,n.spinnerModel.vposition),l(e,72,0,"Choose Horizontal Position",n.spinnerData,"horizontalPosition","hposition","hposition","Choose"),l(e,76,0,n.spinnerModel.hposition),l(e,80,0),l(e,82,0,n.buttonShowHide,"green","show"),l(e,84,0,!0,4),l(e,86,0,!0),l(e,91,0),l(e,94,0),l(e,96,0,"fadingcircle",n.colorModel.color,n.clickShow,"10px","true"),l(e,98,0,!0,4),l(e,100,0,!0),l(e,105,0),l(e,108,0),l(e,110,0,"ballspin",n.colorModel.color,n.clickShow,"9px","true"),l(e,112,0),l(e,114,0,!0,4),l(e,116,0,!0,45),l(e,121,0),l(e,124,0),l(e,126,0,"firespin",n.colorModel.color,n.clickShow,"50px","true"),l(e,128,0,!0,4),l(e,130,0,!0,45),l(e,135,0),l(e,138,0),l(e,140,0,"threebounce",n.colorModel.color,n.clickShow,"8px","true"),l(e,142,0,!0,4),l(e,144,0,!0),l(e,149,0),l(e,152,0),l(e,154,0,"spinnerround",n.colorModel.color,n.clickShow,"6px","true"),l(e,156,0),l(e,158,0,!0,4),l(e,160,0,!0,45),l(e,165,0),l(e,168,0),l(e,170,0,"ring",n.colorModel.color,n.clickShow,"10px","true"),l(e,172,0,!0,4),l(e,174,0,!0,45),l(e,179,0),l(e,182,0),l(e,184,0,"halfcircle",n.clickShow,"10px","true"),l(e,186,0,!0,4),l(e,188,0,!0,45),l(e,193,0),l(e,196,0),l(e,198,0,"rectanglebounce",n.clickShow,"9px","true"),l(e,200,0,"API Reference"),l(e,202,0,"Properties<amexio-spinner>","assets/apireference/data/spinner.json","get","properties",!1,!1),l(e,205,0,"Name","name",!1,"string",15),l(e,209,0,"Version","version",!1,"string",10),l(e,213,0,"Type","type",!1,"string",10),l(e,217,0,"Default","default",!1,"string",10),l(e,221,0,"Description","description",!1,"string",65),l(e,225,0,"Source"),l(e,228,0),l(e,231,0,"HTML",!0),l(e,233,0,n.htmlCode),l(e,235,0,"Type Script"),l(e,237,0,n.typeScriptCode),l(e,239,0,"Live")},function(l,e){l(e,20,0,a.cb(e,21).role),l(e,41,0,a.cb(e,42).role),l(e,55,0,a.cb(e,62).ngClassUntouched,a.cb(e,62).ngClassTouched,a.cb(e,62).ngClassPristine,a.cb(e,62).ngClassDirty,a.cb(e,62).ngClassValid,a.cb(e,62).ngClassInvalid,a.cb(e,62).ngClassPending),l(e,63,0,a.cb(e,70).ngClassUntouched,a.cb(e,70).ngClassTouched,a.cb(e,70).ngClassPristine,a.cb(e,70).ngClassDirty,a.cb(e,70).ngClassValid,a.cb(e,70).ngClassInvalid,a.cb(e,70).ngClassPending),l(e,71,0,a.cb(e,78).ngClassUntouched,a.cb(e,78).ngClassTouched,a.cb(e,78).ngClassPristine,a.cb(e,78).ngClassDirty,a.cb(e,78).ngClassValid,a.cb(e,78).ngClassInvalid,a.cb(e,78).ngClassPending),l(e,83,0,a.cb(e,84).role),l(e,97,0,a.cb(e,98).role),l(e,113,0,a.cb(e,114).role),l(e,127,0,a.cb(e,128).role),l(e,141,0,a.cb(e,142).role),l(e,157,0,a.cb(e,158).role),l(e,171,0,a.cb(e,172).role),l(e,185,0,a.cb(e,186).role)})}var S=a.Oa("amexio-spinner-demo",h,function(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,1,"amexio-spinner-demo",[],null,null,null,v,b)),a.Ra(1,49152,null,0,h,[m.c],null,null)],null,null)},{},{},[]),w=n("ZYCi");n.d(e,"AmexioSpinnerDemoModuleNgFactory",function(){return k});var k=a.Pa(t,[],function(l){return a.Za([a.ab(512,a.k,a.Ea,[[8,[i.a,o.a,S]],[3,a.k],a.z]),a.ab(4608,c.o,c.n,[a.w,[2,c.x]]),a.ab(4608,d.G,d.G,[]),a.ab(4608,m.i,m.o,[c.d,a.D,m.m]),a.ab(4608,m.p,m.p,[m.i,m.n]),a.ab(5120,m.a,function(l){return[l]},[m.p]),a.ab(4608,m.l,m.l,[]),a.ab(6144,m.j,null,[m.l]),a.ab(4608,m.h,m.h,[m.j]),a.ab(6144,m.b,null,[m.h]),a.ab(4608,m.f,m.k,[m.b,a.s]),a.ab(4608,m.c,m.c,[m.f]),a.ab(4608,u.Ta,u.Ta,[m.c]),a.ab(4608,u.ob,u.ob,[]),a.ab(4608,u.db,u.db,[a.D]),a.ab(4608,u.B,u.B,[]),a.ab(4608,u.Pb,u.Pb,[]),a.ab(4608,u.xb,u.xb,[]),a.ab(4608,d.f,d.f,[]),a.ab(4608,u.jb,u.jb,[]),a.ab(1073742336,c.c,c.c,[]),a.ab(1073742336,d.D,d.D,[]),a.ab(1073742336,d.l,d.l,[]),a.ab(1073742336,m.e,m.e,[]),a.ab(1073742336,m.d,m.d,[]),a.ab(1073742336,s.b,s.b,[]),a.ab(1073742336,u.Eb,u.Eb,[]),a.ab(1073742336,u.ec,u.ec,[]),a.ab(1073742336,u.D,u.D,[]),a.ab(1073742336,u.x,u.x,[]),a.ab(1073742336,u.G,u.G,[]),a.ab(1073742336,u.I,u.I,[]),a.ab(1073742336,d.z,d.z,[]),a.ab(1073742336,u.L,u.L,[]),a.ab(1073742336,u.p,u.p,[]),a.ab(1073742336,u.Aa,u.Aa,[]),a.ab(1073742336,w.n,w.n,[[2,w.t],[2,w.m]]),a.ab(1073742336,t,t,[]),a.ab(256,m.m,"XSRF-TOKEN",[]),a.ab(256,m.n,"X-XSRF-TOKEN",[]),a.ab(1024,w.i,function(){return[[{path:"",component:h,pathMatch:"full"}]]},[])])})},wZee:function(l,e){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(){var l=/\blang(?:uage)?-([\w-]+)\b/i,e=0,a=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(l){return l instanceof t?new t(l.type,a.util.encode(l.content),l.alias):"Array"===a.util.type(l)?l.map(a.util.encode):l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(l){return Object.prototype.toString.call(l).match(/\[object (\w+)\]/)[1]},objId:function(l){return l.__id||Object.defineProperty(l,"__id",{value:++e}),l.__id},clone:function(l,e){var n=a.util.type(l);switch(e=e||{},n){case"Object":if(e[a.util.objId(l)])return e[a.util.objId(l)];var t={};for(var i in e[a.util.objId(l)]=t,l)l.hasOwnProperty(i)&&(t[i]=a.util.clone(l[i],e));return t;case"Array":return e[a.util.objId(l)]?e[a.util.objId(l)]:(t=[],e[a.util.objId(l)]=t,l.forEach(function(l,n){t[n]=a.util.clone(l,e)}),t)}return l}},languages:{extend:function(l,e){var n=a.util.clone(a.languages[l]);for(var t in e)n[t]=e[t];return n},insertBefore:function(l,e,n,t){var i=(t=t||a.languages)[l];if(2==arguments.length){for(var o in n=arguments[1])n.hasOwnProperty(o)&&(i[o]=n[o]);return i}var u={};for(var r in i)if(i.hasOwnProperty(r)){if(r==e)for(var o in n)n.hasOwnProperty(o)&&(u[o]=n[o]);u[r]=i[r]}return a.languages.DFS(a.languages,function(e,n){n===t[l]&&e!=l&&(this[e]=u)}),t[l]=u},DFS:function(l,e,n,t){for(var i in t=t||{},l)l.hasOwnProperty(i)&&(e.call(l,i,l[i],n||i),"Object"!==a.util.type(l[i])||t[a.util.objId(l[i])]?"Array"!==a.util.type(l[i])||t[a.util.objId(l[i])]||(t[a.util.objId(l[i])]=!0,a.languages.DFS(l[i],e,i,t)):(t[a.util.objId(l[i])]=!0,a.languages.DFS(l[i],e,null,t)))}},plugins:{},highlightAll:function(l,e){a.highlightAllUnder(document,l,e)},highlightAllUnder:function(l,e,n){var t={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",t);for(var i,o=t.elements||l.querySelectorAll(t.selector),u=0;i=o[u++];)a.highlightElement(i,!0===e,t.callback)},highlightElement:function(e,t,i){for(var o,u,r=e;r&&!l.test(r.className);)r=r.parentNode;r&&(o=(r.className.match(l)||[,""])[1].toLowerCase(),u=a.languages[o]),e.className=e.className.replace(l,"").replace(/\s+/g," ")+" language-"+o,e.parentNode&&/pre/i.test((r=e.parentNode).nodeName)&&(r.className=r.className.replace(l,"").replace(/\s+/g," ")+" language-"+o);var s={element:e,language:o,grammar:u,code:e.textContent};if(a.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(a.hooks.run("before-highlight",s),s.element.textContent=s.code,a.hooks.run("after-highlight",s)),void a.hooks.run("complete",s);if(a.hooks.run("before-highlight",s),t&&n.Worker){var c=new Worker(a.filename);c.onmessage=function(l){s.highlightedCode=l.data,a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),a.hooks.run("after-highlight",s),a.hooks.run("complete",s)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=a.highlight(s.code,s.grammar,s.language),a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(e),a.hooks.run("after-highlight",s),a.hooks.run("complete",s)},highlight:function(l,e,n){var i={code:l,grammar:e,language:n};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),t.stringify(a.util.encode(i.tokens),i.language)},matchGrammar:function(l,e,n,t,i,o,u){var r=a.Token;for(var s in n)if(n.hasOwnProperty(s)&&n[s]){if(s==u)return;var c=n[s];c="Array"===a.util.type(c)?c:[c];for(var d=0;d<c.length;++d){var p=c[d],h=p.inside,g=!!p.lookbehind,m=!!p.greedy,b=0,f=p.alias;if(m&&!p.pattern.global){var y=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,y+"g")}p=p.pattern||p;for(var x=t,v=i;x<e.length;v+=e[x].length,++x){var S=e[x];if(e.length>l.length)return;if(!(S instanceof r)){if(m&&x!=e.length-1){if(p.lastIndex=v,!(T=p.exec(l)))break;for(var w=T.index+(g?T[1].length:0),k=T.index+T[0].length,C=x,R=v,F=e.length;C<F&&(R<k||!e[C].type&&!e[C-1].greedy);++C)w>=(R+=e[C].length)&&(++x,v=R);if(e[x]instanceof r)continue;j=C-x,S=l.slice(v,R),T.index-=v}else{p.lastIndex=0;var T=p.exec(S),j=1}if(T){g&&(b=T[1]?T[1].length:0),k=(w=T.index+b)+(T=T[0].slice(b)).length;var z=S.slice(0,w),A=S.slice(k),M=[x,j];z&&(++x,v+=z.length,M.push(z));var P=new r(s,h?a.tokenize(T,h):T,f,T,m);if(M.push(P),A&&M.push(A),Array.prototype.splice.apply(e,M),1!=j&&a.matchGrammar(l,e,n,x,v,!0,s),o)break}else if(o)break}}}}},tokenize:function(l,e,n){var t=[l],i=e.rest;if(i){for(var o in i)e[o]=i[o];delete e.rest}return a.matchGrammar(l,t,e,0,0,!1),t},hooks:{all:{},add:function(l,e){var n=a.hooks.all;n[l]=n[l]||[],n[l].push(e)},run:function(l,e){var n=a.hooks.all[l];if(n&&n.length)for(var t,i=0;t=n[i++];)t(e)}}},t=a.Token=function(l,e,n,a,t){this.type=l,this.content=e,this.alias=n,this.length=0|(a||"").length,this.greedy=!!t};if(t.stringify=function(l,e,n){if("string"==typeof l)return l;if("Array"===a.util.type(l))return l.map(function(n){return t.stringify(n,e,l)}).join("");var i={type:l.type,content:t.stringify(l.content,e,n),tag:"span",classes:["token",l.type],attributes:{},language:e,parent:n};if(l.alias){var o="Array"===a.util.type(l.alias)?l.alias:[l.alias];Array.prototype.push.apply(i.classes,o)}a.hooks.run("wrap",i);var u=Object.keys(i.attributes).map(function(l){return l+'="'+(i.attributes[l]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(u?" "+u:"")+">"+i.content+"</"+i.tag+">"},!n.document)return n.addEventListener?(a.disableWorkerMessageHandler||n.addEventListener("message",function(l){var e=JSON.parse(l.data),t=e.language,i=e.immediateClose;n.postMessage(a.highlight(e.code,a.languages[t],t)),i&&n.close()},!1),n.Prism):n.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(a.filename=i.src,a.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),n.Prism}();void 0!==l&&l.exports&&(l.exports=a),"undefined"!=typeof global&&(global.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",function(l){"entity"===l.type&&(l.attributes.title=l.content.replace(/&amp;/,"&"))}),a.languages.xml=a.languages.markup,a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},a.languages.css.atrule.inside.rest=a.languages.css,a.languages.markup&&(a.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:a.languages.css,alias:"language-css",greedy:!0}}),a.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:a.languages.css}},alias:"language-css"}},a.languages.markup.tag)),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),a.languages.javascript["template-string"].inside.interpolation.inside.rest=a.languages.javascript,a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:a.languages.javascript,alias:"language-javascript",greedy:!0}}),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(e){for(var n,t=e.getAttribute("data-src"),i=e,o=/\blang(?:uage)?-([\w-]+)\b/i;i&&!o.test(i.className);)i=i.parentNode;if(i&&(n=(e.className.match(o)||[,""])[1]),!n){var u=(t.match(/\.(\w+)$/)||[,""])[1];n=l[u]||u}var r=document.createElement("code");r.className="language-"+n,e.textContent="",r.textContent="Loading\u2026",e.appendChild(r);var s=new XMLHttpRequest;s.open("GET",t,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(r.textContent=s.responseText,a.highlightElement(r)):r.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},s.send(null)}),a.plugins.toolbar&&a.plugins.toolbar.registerButton("download-file",function(l){var e=l.element.parentNode;if(e&&/pre/i.test(e.nodeName)&&e.hasAttribute("data-src")&&e.hasAttribute("data-download-link")){var n=e.getAttribute("data-src"),a=document.createElement("a");return a.textContent=e.getAttribute("data-download-link-label")||"Download",a.setAttribute("download",""),a.href=n,a}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);