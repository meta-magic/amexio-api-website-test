(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{FDvp:function(e,l,n){"use strict";n.r(l);var t=n("CcnG"),a=function(){},i=n("gTgE"),o=n("pMnS"),r=n("U89g"),u=n("d2mR"),s=n("O4vx"),c=n("Ip0R"),d=function(){function e(e){this.http=e,this.getHtmlAndTypeScriptCode()}return e.prototype.onLoginClick=function(e){this.facebookLoginData=e},e.prototype.getHtmlAndTypeScriptCode=function(){var e,l,n=this;this.http.get("assets/data/code/forms/facebooklogin/form.html",{responseType:"text"}).subscribe(function(l){e=l},function(e){},function(){n.htmlCode=e}),this.http.get("assets/data/code/forms/facebooklogin/form.text",{responseType:"text"}).subscribe(function(e){l=e},function(e){},function(){n.typeScriptCode=l})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e}(),g=n("t/Na"),p=t.Qa({encapsulation:2,styles:[],data:{}});function b(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,r.b,r.a)),t.Ra(2,4243456,null,0,u.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.htmlCode,"html")},null)}function m(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,r.b,r.a)),t.Ra(2,4243456,null,0,u.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.typeScriptCode,"typescript")},null)}function h(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,122,"amexio-card",[["header","true"]],null,null,null,i.ec,i.k)),t.Ra(1,7585792,null,3,s.j,[t.F],{header:[0,"header"],bodyheight:[1,"bodyheight"]},null),t.ib(603979776,1,{amexioHeader:1}),t.ib(603979776,2,{amexioBody:1}),t.ib(603979776,3,{amexioFooter:1}),(e()(),t.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,i.qc,i.w)),t.Ra(6,1163264,[[1,4]],0,s.C,[],null,null),(e()(),t.kb(-1,0,[" Facebook Login "])),(e()(),t.Sa(8,0,null,1,114,"amexio-body",[],null,null,null,i.Yb,i.e)),t.Ra(9,1163264,[[2,4]],0,s.d,[],null,null),(e()(),t.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),t.kb(-1,null,["Amexio Facebook Sign-In component manages the OAuth flow and token lifecycle, simplifying your integration with Facebook APIs using amexio component."])),(e()(),t.Sa(12,0,null,0,110,"amexio-tab-view",[],null,null,null,i.Bc,i.H)),t.Ra(13,5488640,null,2,s.S,[t.F,t.k,t.F],null,null),t.ib(603979776,4,{queryTabs:1}),t.ib(603979776,5,{queryAction:1}),(e()(),t.Sa(16,0,null,1,45,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.Cc,i.I)),t.Ra(17,114688,[[4,4]],0,s.T,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),t.Sa(18,0,null,0,43,"amexio-row",[],null,null,null,i.xc,i.D)),t.Ra(19,1163264,null,0,s.O,[],null,null),(e()(),t.Sa(20,0,null,0,23,"amexio-column",[["size","4"]],[[1,"class",0]],null,null,i.gc,i.m)),t.Ra(21,114688,null,0,s.m,[],{size:[0,"size"]},null),(e()(),t.Sa(22,0,null,0,21,"amexio-card",[["header","true"]],null,null,null,i.ec,i.k)),t.Ra(23,7585792,null,3,s.j,[t.F],{header:[0,"header"],bodyheight:[1,"bodyheight"]},null),t.ib(603979776,6,{amexioHeader:1}),t.ib(603979776,7,{amexioBody:1}),t.ib(603979776,8,{amexioFooter:1}),(e()(),t.Sa(27,0,null,0,2,"amexio-header",[],null,null,null,i.qc,i.w)),t.Ra(28,1163264,[[6,4]],0,s.C,[],null,null),(e()(),t.kb(-1,0,[" Demo "])),(e()(),t.Sa(30,0,null,1,13,"amexio-body",[],null,null,null,i.Yb,i.e)),t.Ra(31,1163264,[[7,4]],0,s.d,[],null,null),(e()(),t.Sa(32,0,null,0,5,"amexio-row",[],null,null,null,i.xc,i.D)),t.Ra(33,1163264,null,0,s.O,[],null,null),(e()(),t.Sa(34,0,null,0,3,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,i.gc,i.m)),t.Ra(35,114688,null,0,s.m,[],{size:[0,"size"]},null),(e()(),t.Sa(36,0,null,0,1,"amexio-login-social",[],null,[[null,"onLogin"]],function(e,l,n){var t=!0;return"onLogin"===l&&(t=!1!==e.component.onLoginClick(n)&&t),t},i.Ld,i.rb)),t.Ra(37,114688,null,0,s.jc,[],{type:[0,"type"],key:[1,"key"],label:[2,"label"]},{onLogin:"onLogin"}),(e()(),t.Sa(38,0,null,0,5,"amexio-row",[],null,null,null,i.xc,i.D)),t.Ra(39,1163264,null,0,s.O,[],null,null),(e()(),t.Sa(40,0,null,0,3,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,i.gc,i.m)),t.Ra(41,114688,null,0,s.m,[],{size:[0,"size"]},null),(e()(),t.Sa(42,0,null,0,1,"amexio-login-social",[],null,[[null,"onLogin"]],function(e,l,n){var t=!0;return"onLogin"===l&&(t=!1!==e.component.onLoginClick(n)&&t),t},i.Ld,i.rb)),t.Ra(43,114688,null,0,s.jc,[],{type:[0,"type"],key:[1,"key"]},{onLogin:"onLogin"}),(e()(),t.Sa(44,0,null,0,17,"amexio-column",[["size","8"]],[[1,"class",0]],null,null,i.gc,i.m)),t.Ra(45,114688,null,0,s.m,[],{size:[0,"size"]},null),(e()(),t.Sa(46,0,null,0,15,"amexio-card",[["header","true"]],null,null,null,i.ec,i.k)),t.Ra(47,7585792,null,3,s.j,[t.F],{header:[0,"header"],bodyheight:[1,"bodyheight"]},null),t.ib(603979776,9,{amexioHeader:1}),t.ib(603979776,10,{amexioBody:1}),t.ib(603979776,11,{amexioFooter:1}),(e()(),t.Sa(51,0,null,0,2,"amexio-header",[],null,null,null,i.qc,i.w)),t.Ra(52,1163264,[[9,4]],0,s.C,[],null,null),(e()(),t.kb(-1,0,[" User Info After Login "])),(e()(),t.Sa(54,0,null,1,7,"amexio-body",[],null,null,null,i.Yb,i.e)),t.Ra(55,1163264,[[10,4]],0,s.d,[],null,null),(e()(),t.Sa(56,0,null,0,5,"amexio-row",[],null,null,null,i.xc,i.D)),t.Ra(57,1163264,null,0,s.O,[],null,null),(e()(),t.Sa(58,0,null,0,3,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,i.gc,i.m)),t.Ra(59,114688,null,0,s.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(e()(),t.kb(60,0,[" "," "])),t.eb(0,c.g,[]),(e()(),t.Sa(62,0,null,1,42,"amexio-tab",[["title","API Reference"]],null,null,null,i.Cc,i.I)),t.Ra(63,114688,[[4,4]],0,s.T,[],{title:[0,"title"]},null),(e()(),t.Sa(64,0,null,0,8,"amexio-box",[["background-color","brown"],["border","left"],["border-color","brown"],["padding","true"]],null,null,null,i.bc,i.h)),t.Ra(65,114688,null,0,s.g,[],{border:[0,"border"],borderColor:[1,"borderColor"],bgColor:[2,"bgColor"],padding:[3,"padding"]},null),(e()(),t.Sa(66,0,null,0,6,"amexio-label",[],null,null,null,i.xd,i.db)),t.Ra(67,114688,null,0,s.Pb,[],null,null),(e()(),t.kb(-1,0,[" Make sure api-key is created before use this component.refer Facebook developer webside to create key "])),(e()(),t.Sa(69,0,null,0,1,"a",[["href","https://developers.facebook.com/apps"],["target","_blank"]],null,null,null,null,null)),(e()(),t.kb(-1,null,["Facebook Sign-In"])),(e()(),t.Sa(71,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),t.Sa(72,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),t.Sa(73,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),t.Sa(74,0,null,0,18,"amexio-datagrid",[["title","Properties <amexio-login-social>"]],null,null,null,i.Td,i.zb)),t.Ra(75,1294336,null,1,s.yc,[t.l,s.Ta,t.i,t.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,12,{columnRef:1}),(e()(),t.Sa(77,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),t.Ra(78,49152,[[12,4]],2,s.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,13,{headerTemplate:0}),t.ib(335544320,14,{bodyTemplate:0}),(e()(),t.Sa(81,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),t.Ra(82,49152,[[12,4]],2,s.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,15,{headerTemplate:0}),t.ib(335544320,16,{bodyTemplate:0}),(e()(),t.Sa(85,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),t.Ra(86,49152,[[12,4]],2,s.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,17,{headerTemplate:0}),t.ib(335544320,18,{bodyTemplate:0}),(e()(),t.Sa(89,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),t.Ra(90,49152,[[12,4]],2,s.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,19,{headerTemplate:0}),t.ib(335544320,20,{bodyTemplate:0}),(e()(),t.Sa(93,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),t.Sa(94,0,null,0,10,"amexio-datagrid",[["title","Events <amexio-login-social> "]],null,null,null,i.Td,i.zb)),t.Ra(95,1294336,null,1,s.yc,[t.l,s.Ta,t.i,t.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),t.ib(603979776,21,{columnRef:1}),(e()(),t.Sa(97,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),t.Ra(98,49152,[[21,4]],2,s.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,22,{headerTemplate:0}),t.ib(335544320,23,{bodyTemplate:0}),(e()(),t.Sa(101,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),t.Ra(102,49152,[[21,4]],2,s.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,24,{headerTemplate:0}),t.ib(335544320,25,{bodyTemplate:0}),(e()(),t.Sa(105,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,i.Cc,i.I)),t.Ra(106,114688,[[4,4]],0,s.T,[],{title:[0,"title"]},null),(e()(),t.Sa(107,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),t.Sa(108,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,i.Ec,i.K)),t.Ra(109,5357568,null,1,s.X,[t.F,t.k],null,null),t.ib(603979776,26,{queryTabs:1}),(e()(),t.Sa(111,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.Cc,i.I)),t.Ra(112,114688,[[26,4]],0,s.T,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),t.Ja(16777216,null,0,1,null,b)),t.Ra(114,16384,null,0,c.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(e()(),t.Sa(115,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.Cc,i.I)),t.Ra(116,114688,[[26,4]],0,s.T,[],{title:[0,"title"]},null),(e()(),t.Ja(16777216,null,0,1,null,m)),t.Ra(118,16384,null,0,c.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(e()(),t.Sa(119,0,null,1,3,"amexio-tab",[["title","Live"]],null,null,null,i.Cc,i.I)),t.Ra(120,114688,[[4,4]],0,s.T,[],{title:[0,"title"],disabled:[1,"disabled"]},null),(e()(),t.Sa(121,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),t.kb(-1,null,["Amexio Sandbox"]))],function(e,l){var n=l.component;e(l,1,0,"true",80),e(l,6,0),e(l,9,0),e(l,13,0),e(l,17,0,"Demo","true"),e(l,19,0),e(l,21,0,"4"),e(l,23,0,"true",50),e(l,28,0),e(l,31,0),e(l,33,0),e(l,35,0,"12"),e(l,37,0,"facebook","320512778592240","Signup With Facebook"),e(l,39,0),e(l,41,0,"12"),e(l,43,0,"facebook","813fmfeb1398lq"),e(l,45,0,"8"),e(l,47,0,"true",50),e(l,52,0),e(l,55,0),e(l,57,0),e(l,59,0,!0,"12"),e(l,63,0,"API Reference"),e(l,65,0,"left","brown","brown","true"),e(l,67,0),e(l,75,0,"Properties <amexio-login-social>","assets/apireference/forms/facebooklogin.json","get","properties",!1,!1),e(l,78,0,"Name","name",!1,"string",10),e(l,82,0,"Type","type",!1,"string",10),e(l,86,0,"Default","default",!1,"string",10),e(l,90,0,"Description","description",!1,"string",65),e(l,95,0,"Events <amexio-login-social> ","assets/apireference/forms/facebooklogin.json","get","events",!1),e(l,98,0,"Name","name",!1,"string",20),e(l,102,0,"Description","description",!1,"string",80),e(l,106,0,"Source"),e(l,109,0),e(l,112,0,"HTML",!0),e(l,114,0,n.htmlCode),e(l,116,0,"Type Script"),e(l,118,0,n.typeScriptCode),e(l,120,0,"Live",!0)},function(e,l){var n=l.component;e(l,20,0,t.cb(l,21).role),e(l,34,0,t.cb(l,35).role),e(l,40,0,t.cb(l,41).role),e(l,44,0,t.cb(l,45).role),e(l,58,0,t.cb(l,59).role),e(l,60,0,t.lb(l,60,0,t.cb(l,61).transform(n.facebookLoginData)))})}var f=t.Oa("facebook-login-demo",d,function(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,1,"facebook-login-demo",[],null,null,null,h,p)),t.Ra(1,49152,null,0,d,[g.c],null,null)],null,null)},{},{},[]),y=n("gIcY"),x=n("ZYCi");n.d(l,"FacebookLoginModuleNgFactory",function(){return k});var k=t.Pa(a,[],function(e){return t.Za([t.ab(512,t.k,t.Ea,[[8,[i.a,o.a,f]],[3,t.k],t.z]),t.ab(4608,c.o,c.n,[t.w,[2,c.x]]),t.ab(4608,y.G,y.G,[]),t.ab(4608,g.i,g.o,[c.d,t.D,g.m]),t.ab(4608,g.p,g.p,[g.i,g.n]),t.ab(5120,g.a,function(e){return[e]},[g.p]),t.ab(4608,g.l,g.l,[]),t.ab(6144,g.j,null,[g.l]),t.ab(4608,g.h,g.h,[g.j]),t.ab(6144,g.b,null,[g.h]),t.ab(4608,g.f,g.k,[g.b,t.s]),t.ab(4608,g.c,g.c,[g.f]),t.ab(4608,s.Ta,s.Ta,[g.c]),t.ab(4608,s.ob,s.ob,[]),t.ab(4608,s.db,s.db,[t.D]),t.ab(4608,s.B,s.B,[]),t.ab(4608,s.Lb,s.Lb,[]),t.ab(4608,s.xb,s.xb,[]),t.ab(4608,y.f,y.f,[]),t.ab(4608,s.jb,s.jb,[]),t.ab(1073742336,c.c,c.c,[]),t.ab(1073742336,y.D,y.D,[]),t.ab(1073742336,y.l,y.l,[]),t.ab(1073742336,g.e,g.e,[]),t.ab(1073742336,g.d,g.d,[]),t.ab(1073742336,u.b,u.b,[]),t.ab(1073742336,s.Eb,s.Eb,[]),t.ab(1073742336,s.D,s.D,[]),t.ab(1073742336,s.x,s.x,[]),t.ab(1073742336,s.G,s.G,[]),t.ab(1073742336,s.I,s.I,[]),t.ab(1073742336,y.z,y.z,[]),t.ab(1073742336,s.L,s.L,[]),t.ab(1073742336,s.p,s.p,[]),t.ab(1073742336,s.Aa,s.Aa,[]),t.ab(1073742336,x.n,x.n,[[2,x.t],[2,x.m]]),t.ab(1073742336,a,a,[]),t.ab(256,g.m,"XSRF-TOKEN",[]),t.ab(256,g.n,"X-XSRF-TOKEN",[]),t.ab(1024,x.i,function(){return[[{path:"",component:d,pathMatch:"full"}]]},[])])})},U89g:function(e,l,n){"use strict";n.d(l,"a",function(){return a}),n.d(l,"b",function(){return i});var t=n("CcnG"),a=(n("d2mR"),n("Ip0R"),t.Qa({encapsulation:2,styles:[],data:{}}));function i(e){return t.mb(0,[],null,null)}},XIHC:function(e,l){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,l,n){"use strict";n.d(l,"a",function(){return t}),n.d(l,"b",function(){return a}),n("wZee"),n("XIHC");var t=function(){function e(e,l){this._renderer=e,this._el=l,this.nativeElement=l.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),a=function(){}},wZee:function(e,l){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},t=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,l=0,t=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++l}),e.__id},clone:function(e,l){var n=t.util.type(e);switch(l=l||{},n){case"Object":if(l[t.util.objId(e)])return l[t.util.objId(e)];var a={};for(var i in l[t.util.objId(e)]=a,e)e.hasOwnProperty(i)&&(a[i]=t.util.clone(e[i],l));return a;case"Array":return l[t.util.objId(e)]?l[t.util.objId(e)]:(a=[],l[t.util.objId(e)]=a,e.forEach(function(e,n){a[n]=t.util.clone(e,l)}),a)}return e}},languages:{extend:function(e,l){var n=t.util.clone(t.languages[e]);for(var a in l)n[a]=l[a];return n},insertBefore:function(e,l,n,a){var i=(a=a||t.languages)[e];if(2==arguments.length){for(var o in n=arguments[1])n.hasOwnProperty(o)&&(i[o]=n[o]);return i}var r={};for(var u in i)if(i.hasOwnProperty(u)){if(u==l)for(var o in n)n.hasOwnProperty(o)&&(r[o]=n[o]);r[u]=i[u]}return t.languages.DFS(t.languages,function(l,n){n===a[e]&&l!=e&&(this[l]=r)}),a[e]=r},DFS:function(e,l,n,a){for(var i in a=a||{},e)e.hasOwnProperty(i)&&(l.call(e,i,e[i],n||i),"Object"!==t.util.type(e[i])||a[t.util.objId(e[i])]?"Array"!==t.util.type(e[i])||a[t.util.objId(e[i])]||(a[t.util.objId(e[i])]=!0,t.languages.DFS(e[i],l,i,a)):(a[t.util.objId(e[i])]=!0,t.languages.DFS(e[i],l,null,a)))}},plugins:{},highlightAll:function(e,l){t.highlightAllUnder(document,e,l)},highlightAllUnder:function(e,l,n){var a={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};t.hooks.run("before-highlightall",a);for(var i,o=a.elements||e.querySelectorAll(a.selector),r=0;i=o[r++];)t.highlightElement(i,!0===l,a.callback)},highlightElement:function(l,a,i){for(var o,r,u=l;u&&!e.test(u.className);)u=u.parentNode;u&&(o=(u.className.match(e)||[,""])[1].toLowerCase(),r=t.languages[o]),l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+o,l.parentNode&&/pre/i.test((u=l.parentNode).nodeName)&&(u.className=u.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var s={element:l,language:o,grammar:r,code:l.textContent};if(t.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(t.hooks.run("before-highlight",s),s.element.textContent=s.code,t.hooks.run("after-highlight",s)),void t.hooks.run("complete",s);if(t.hooks.run("before-highlight",s),a&&n.Worker){var c=new Worker(t.filename);c.onmessage=function(e){s.highlightedCode=e.data,t.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),t.hooks.run("after-highlight",s),t.hooks.run("complete",s)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=t.highlight(s.code,s.grammar,s.language),t.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(l),t.hooks.run("after-highlight",s),t.hooks.run("complete",s)},highlight:function(e,l,n){var i={code:e,grammar:l,language:n};return t.hooks.run("before-tokenize",i),i.tokens=t.tokenize(i.code,i.grammar),t.hooks.run("after-tokenize",i),a.stringify(t.util.encode(i.tokens),i.language)},matchGrammar:function(e,l,n,a,i,o,r){var u=t.Token;for(var s in n)if(n.hasOwnProperty(s)&&n[s]){if(s==r)return;var c=n[s];c="Array"===t.util.type(c)?c:[c];for(var d=0;d<c.length;++d){var g=c[d],p=g.inside,b=!!g.lookbehind,m=!!g.greedy,h=0,f=g.alias;if(m&&!g.pattern.global){var y=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,y+"g")}g=g.pattern||g;for(var x=a,k=i;x<l.length;k+=l[x].length,++x){var v=l[x];if(l.length>e.length)return;if(!(v instanceof u)){if(m&&x!=l.length-1){if(g.lastIndex=k,!(R=g.exec(e)))break;for(var w=R.index+(b?R[1].length:0),S=R.index+R[0].length,F=x,A=k,C=l.length;F<C&&(A<S||!l[F].type&&!l[F-1].greedy);++F)w>=(A+=l[F].length)&&(++x,k=A);if(l[x]instanceof u)continue;T=F-x,v=e.slice(k,A),R.index-=k}else{g.lastIndex=0;var R=g.exec(v),T=1}if(R){b&&(h=R[1]?R[1].length:0),S=(w=R.index+h)+(R=R[0].slice(h)).length;var j=v.slice(0,w),z=v.slice(S),I=[x,T];j&&(++x,k+=j.length,I.push(j));var L=new u(s,p?t.tokenize(R,p):R,f,R,m);if(I.push(L),z&&I.push(z),Array.prototype.splice.apply(l,I),1!=T&&t.matchGrammar(e,l,n,x,k,!0,s),o)break}else if(o)break}}}}},tokenize:function(e,l,n){var a=[e],i=l.rest;if(i){for(var o in i)l[o]=i[o];delete l.rest}return t.matchGrammar(e,a,l,0,0,!1),a},hooks:{all:{},add:function(e,l){var n=t.hooks.all;n[e]=n[e]||[],n[e].push(l)},run:function(e,l){var n=t.hooks.all[e];if(n&&n.length)for(var a,i=0;a=n[i++];)a(l)}}},a=t.Token=function(e,l,n,t,a){this.type=e,this.content=l,this.alias=n,this.length=0|(t||"").length,this.greedy=!!a};if(a.stringify=function(e,l,n){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(n){return a.stringify(n,l,e)}).join("");var i={type:e.type,content:a.stringify(e.content,l,n),tag:"span",classes:["token",e.type],attributes:{},language:l,parent:n};if(e.alias){var o="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,o)}t.hooks.run("wrap",i);var r=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(r?" "+r:"")+">"+i.content+"</"+i.tag+">"},!n.document)return n.addEventListener?(t.disableWorkerMessageHandler||n.addEventListener("message",function(e){var l=JSON.parse(e.data),a=l.language,i=l.immediateClose;n.postMessage(t.highlight(l.code,t.languages[a],a)),i&&n.close()},!1),n.Prism):n.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(t.filename=i.src,t.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(t.highlightAll):window.setTimeout(t.highlightAll,16):document.addEventListener("DOMContentLoaded",t.highlightAll))),n.Prism}();void 0!==e&&e.exports&&(e.exports=t),"undefined"!=typeof global&&(global.Prism=t),t.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),t.languages.xml=t.languages.markup,t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},t.languages.css.atrule.inside.rest=t.languages.css,t.languages.markup&&(t.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:t.languages.css,alias:"language-css",greedy:!0}}),t.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:t.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:t.languages.css}},alias:"language-css"}},t.languages.markup.tag)),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),t.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),t.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),t.languages.javascript["template-string"].inside.interpolation.inside.rest=t.languages.javascript,t.languages.markup&&t.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:t.languages.javascript,alias:"language-javascript",greedy:!0}}),t.languages.js=t.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(l){for(var n,a=l.getAttribute("data-src"),i=l,o=/\blang(?:uage)?-([\w-]+)\b/i;i&&!o.test(i.className);)i=i.parentNode;if(i&&(n=(l.className.match(o)||[,""])[1]),!n){var r=(a.match(/\.(\w+)$/)||[,""])[1];n=e[r]||r}var u=document.createElement("code");u.className="language-"+n,l.textContent="",u.textContent="Loading\u2026",l.appendChild(u);var s=new XMLHttpRequest;s.open("GET",a,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(u.textContent=s.responseText,t.highlightElement(u)):u.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},s.send(null)}),t.plugins.toolbar&&t.plugins.toolbar.registerButton("download-file",function(e){var l=e.element.parentNode;if(l&&/pre/i.test(l.nodeName)&&l.hasAttribute("data-src")&&l.hasAttribute("data-download-link")){var n=l.getAttribute("data-src"),t=document.createElement("a");return t.textContent=l.getAttribute("data-download-link-label")||"Download",t.setAttribute("download",""),t.href=n,t}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);