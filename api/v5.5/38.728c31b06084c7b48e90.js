(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"/1oW":function(e,l,t){"use strict";t.r(l);var n=t("CcnG"),a=function(){function e(e){this.http=e,this.getHtmlAndTypeScriptCode()}return e.prototype.getHtmlAndTypeScriptCode=function(){var e,l,t=this;this.http.get("assets/data/code/enterprise/videoplayer/ee.html",{responseType:"text"}).subscribe(function(l){e=l},function(e){},function(){t.htmlCode=e}),this.http.get("assets/data/code/enterprise/videoplayer/ee.text",{responseType:"text"}).subscribe(function(e){l=e},function(e){},function(){t.typeScriptCode=l})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e.prototype.ngOnInit=function(){},e}(),i=function(){},r=t("gTgE"),u=t("pMnS"),o=t("U89g"),s=t("d2mR"),c=t("O4vx"),d=t("ZYjt"),p=t("Ip0R"),g=t("t/Na"),h=n.Qa({encapsulation:2,styles:[],data:{}});function m(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),n.Ra(2,4243456,null,0,s.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.htmlCode,"html")},null)}function b(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),n.Ra(2,4243456,null,0,s.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.typeScriptCode,"typescript")},null)}function f(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,99,"amexio-card",[["header","true"]],null,null,null,r.jc,r.k)),n.Ra(1,7585792,null,3,c.j,[n.F],{header:[0,"header"]},null),n.ib(603979776,1,{amexioHeader:1}),n.ib(603979776,2,{amexioBody:1}),n.ib(603979776,3,{amexioFooter:1}),(e()(),n.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,r.vc,r.w)),n.Ra(6,114688,[[1,4]],0,c.C,[],null,null),(e()(),n.kb(-1,0,[" YouTube Video Player "])),(e()(),n.Sa(8,0,null,1,91,"amexio-body",[],null,null,null,r.dc,r.e)),n.Ra(9,114688,[[2,4]],0,c.d,[],null,null),(e()(),n.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),n.kb(-1,null,["A simple configurable of video player."])),(e()(),n.Sa(12,0,null,0,87,"amexio-tab-view",[],null,null,null,r.Gc,r.H)),n.Ra(13,5488640,null,2,c.S,[n.F,n.k,n.F],null,null),n.ib(603979776,4,{queryTabs:1}),n.ib(603979776,5,{queryAction:1}),(e()(),n.Sa(16,0,null,1,43,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,r.Hc,r.I)),n.Ra(17,114688,[[4,4]],0,c.T,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),n.Sa(18,0,null,0,41,"amexio-card",[["header","true"]],null,null,null,r.jc,r.k)),n.Ra(19,7585792,null,3,c.j,[n.F],{header:[0,"header"]},null),n.ib(603979776,6,{amexioHeader:1}),n.ib(603979776,7,{amexioBody:1}),n.ib(603979776,8,{amexioFooter:1}),(e()(),n.Sa(23,0,null,0,2,"amexio-header",[],null,null,null,r.vc,r.w)),n.Ra(24,114688,[[6,4]],0,c.C,[],null,null),(e()(),n.kb(-1,0,[" Video player "])),(e()(),n.Sa(26,0,null,1,33,"amexio-body",[],null,null,null,r.dc,r.e)),n.Ra(27,114688,[[7,4]],0,c.d,[],null,null),(e()(),n.Sa(28,0,null,0,15,"amexio-row",[],null,null,null,r.Cc,r.D)),n.Ra(29,1163264,null,0,c.O,[],null,null),(e()(),n.Sa(30,0,null,0,13,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,r.lc,r.m)),n.Ra(31,114688,null,0,c.m,[],{size:[0,"size"]},null),(e()(),n.Sa(32,0,null,0,11,"amexio-card",[["header","true"]],null,null,null,r.jc,r.k)),n.Ra(33,7585792,null,3,c.j,[n.F],{header:[0,"header"]},null),n.ib(603979776,9,{amexioHeader:1}),n.ib(603979776,10,{amexioBody:1}),n.ib(603979776,11,{amexioFooter:1}),(e()(),n.Sa(37,0,null,0,2,"amexio-header",[],null,null,null,r.vc,r.w)),n.Ra(38,114688,[[9,4]],0,c.C,[],null,null),(e()(),n.kb(-1,0,[" Video player without Width "])),(e()(),n.Sa(40,0,null,1,3,"amexio-body",[],null,null,null,r.dc,r.e)),n.Ra(41,114688,[[10,4]],0,c.d,[],null,null),(e()(),n.Sa(42,0,null,0,1,"amexio-ee-youtube-player",[["url","https://www.youtube.com/embed/U7elNhHwgBU"]],null,null,null,r.Oc,r.P)),n.Ra(43,114688,null,0,c.Da,[d.c],{url:[0,"url"],height:[1,"height"]},null),(e()(),n.Sa(44,0,null,0,15,"amexio-row",[],null,null,null,r.Cc,r.D)),n.Ra(45,1163264,null,0,c.O,[],null,null),(e()(),n.Sa(46,0,null,0,13,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,r.lc,r.m)),n.Ra(47,114688,null,0,c.m,[],{size:[0,"size"]},null),(e()(),n.Sa(48,0,null,0,11,"amexio-card",[["header","true"]],null,null,null,r.jc,r.k)),n.Ra(49,7585792,null,3,c.j,[n.F],{header:[0,"header"]},null),n.ib(603979776,12,{amexioHeader:1}),n.ib(603979776,13,{amexioBody:1}),n.ib(603979776,14,{amexioFooter:1}),(e()(),n.Sa(53,0,null,0,2,"amexio-header",[],null,null,null,r.vc,r.w)),n.Ra(54,114688,[[12,4]],0,c.C,[],null,null),(e()(),n.kb(-1,0,[" Video player with Width "])),(e()(),n.Sa(56,0,null,1,3,"amexio-body",[],null,null,null,r.dc,r.e)),n.Ra(57,114688,[[13,4]],0,c.d,[],null,null),(e()(),n.Sa(58,0,null,0,1,"amexio-ee-youtube-player",[["url","https://www.youtube.com/embed/U7elNhHwgBU"]],null,null,null,r.Oc,r.P)),n.Ra(59,114688,null,0,c.Da,[d.c],{url:[0,"url"],height:[1,"height"],width:[2,"width"]},null),(e()(),n.Sa(60,0,null,1,20,"amexio-tab",[["title","API Reference"]],null,null,null,r.Hc,r.I)),n.Ra(61,114688,[[4,4]],0,c.T,[],{title:[0,"title"]},null),(e()(),n.Sa(62,0,null,0,18,"amexio-datagrid",[["title","Propeties<amexio-ee-youtube-player> "]],null,null,null,r.de,r.Eb)),n.Ra(63,5488640,null,1,c.Dc,[n.l,c.Ta,n.i,n.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),n.ib(603979776,15,{columnRef:1}),(e()(),n.Sa(65,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.fe,r.Gb)),n.Ra(66,49152,[[15,4]],2,c.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,16,{headerTemplate:0}),n.ib(335544320,17,{bodyTemplate:0}),(e()(),n.Sa(69,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.fe,r.Gb)),n.Ra(70,49152,[[15,4]],2,c.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,18,{headerTemplate:0}),n.ib(335544320,19,{bodyTemplate:0}),(e()(),n.Sa(73,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.fe,r.Gb)),n.Ra(74,49152,[[15,4]],2,c.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,20,{headerTemplate:0}),n.ib(335544320,21,{bodyTemplate:0}),(e()(),n.Sa(77,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.fe,r.Gb)),n.Ra(78,49152,[[15,4]],2,c.Gc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,22,{headerTemplate:0}),n.ib(335544320,23,{bodyTemplate:0}),(e()(),n.Sa(81,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,r.Hc,r.I)),n.Ra(82,114688,[[4,4]],0,c.T,[],{title:[0,"title"]},null),(e()(),n.Sa(83,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),n.Sa(84,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,r.Jc,r.K)),n.Ra(85,5357568,null,1,c.X,[n.F,n.k],null,null),n.ib(603979776,24,{queryTabs:1}),(e()(),n.Sa(87,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,r.Hc,r.I)),n.Ra(88,114688,[[24,4]],0,c.T,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),n.Ja(16777216,null,0,1,null,m)),n.Ra(90,16384,null,0,p.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(e()(),n.Sa(91,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,r.Hc,r.I)),n.Ra(92,114688,[[24,4]],0,c.T,[],{title:[0,"title"]},null),(e()(),n.Ja(16777216,null,0,1,null,b)),n.Ra(94,16384,null,0,p.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(e()(),n.Sa(95,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,r.Hc,r.I)),n.Ra(96,114688,[[4,4]],0,c.T,[],{title:[0,"title"]},null),(e()(),n.Sa(97,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),n.kb(-1,null,["Amexio Sandbox"])),(e()(),n.Sa(99,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-youtube-player?embed=1&file=app/enterprise/youtube-player/youtube.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,l){var t=l.component;e(l,1,0,"true"),e(l,6,0),e(l,9,0),e(l,13,0),e(l,17,0,"Demo","true"),e(l,19,0,"true"),e(l,24,0),e(l,27,0),e(l,29,0),e(l,31,0,"12"),e(l,33,0,"true"),e(l,38,0),e(l,41,0),e(l,43,0,"https://www.youtube.com/embed/U7elNhHwgBU",450),e(l,45,0),e(l,47,0,"12"),e(l,49,0,"true"),e(l,54,0),e(l,57,0),e(l,59,0,"https://www.youtube.com/embed/U7elNhHwgBU",450,50),e(l,61,0,"API Reference"),e(l,63,0,"Propeties<amexio-ee-youtube-player> ","assets/apireference/enterprise/videoplayer.json","get","properties",!1,!1),e(l,66,0,"Name","name",!1,"string",15),e(l,70,0,"Type","type",!1,"string",10),e(l,74,0,"Default","default",!1,"string",10),e(l,78,0,"Description","description",!1,"string",65),e(l,82,0,"Source"),e(l,85,0),e(l,88,0,"HTML",!0),e(l,90,0,t.htmlCode),e(l,92,0,"Type Script"),e(l,94,0,t.typeScriptCode),e(l,96,0,"Live")},function(e,l){e(l,30,0,n.cb(l,31).role),e(l,46,0,n.cb(l,47).role)})}var y=n.Oa("youtube-player",a,function(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,1,"youtube-player",[],null,null,null,f,h)),n.Ra(1,114688,null,0,a,[g.c],null,null)],function(e,l){e(l,1,0)},null)},{},{},[]),x=t("gIcY"),w=t("ZYCi");t.d(l,"YoutubePlayerModuleNgFactory",function(){return v});var v=n.Pa(i,[],function(e){return n.Za([n.ab(512,n.k,n.Ea,[[8,[r.a,u.a,y]],[3,n.k],n.z]),n.ab(4608,p.o,p.n,[n.w,[2,p.x]]),n.ab(4608,g.i,g.o,[p.d,n.D,g.m]),n.ab(4608,g.p,g.p,[g.i,g.n]),n.ab(5120,g.a,function(e){return[e]},[g.p]),n.ab(4608,g.l,g.l,[]),n.ab(6144,g.j,null,[g.l]),n.ab(4608,g.h,g.h,[g.j]),n.ab(6144,g.b,null,[g.h]),n.ab(4608,g.f,g.k,[g.b,n.s]),n.ab(4608,g.c,g.c,[g.f]),n.ab(4608,x.G,x.G,[]),n.ab(4608,c.Ta,c.Ta,[g.c]),n.ab(4608,c.ob,c.ob,[]),n.ab(4608,c.db,c.db,[n.D]),n.ab(4608,c.B,c.B,[]),n.ab(4608,c.Pb,c.Pb,[]),n.ab(4608,c.xb,c.xb,[]),n.ab(4608,x.f,x.f,[]),n.ab(4608,c.jb,c.jb,[]),n.ab(1073742336,p.c,p.c,[]),n.ab(1073742336,s.b,s.b,[]),n.ab(1073742336,g.e,g.e,[]),n.ab(1073742336,g.d,g.d,[]),n.ab(1073742336,x.D,x.D,[]),n.ab(1073742336,x.l,x.l,[]),n.ab(1073742336,c.Eb,c.Eb,[]),n.ab(1073742336,c.ec,c.ec,[]),n.ab(1073742336,c.D,c.D,[]),n.ab(1073742336,c.x,c.x,[]),n.ab(1073742336,c.G,c.G,[]),n.ab(1073742336,c.I,c.I,[]),n.ab(1073742336,x.z,x.z,[]),n.ab(1073742336,c.L,c.L,[]),n.ab(1073742336,c.p,c.p,[]),n.ab(1073742336,c.Aa,c.Aa,[]),n.ab(1073742336,c.q,c.q,[]),n.ab(1073742336,w.n,w.n,[[2,w.t],[2,w.m]]),n.ab(1073742336,i,i,[]),n.ab(256,g.m,"XSRF-TOKEN",[]),n.ab(256,g.n,"X-XSRF-TOKEN",[]),n.ab(1024,w.i,function(){return[[{path:"",component:a}]]},[])])})},U89g:function(e,l,t){"use strict";t.d(l,"a",function(){return a}),t.d(l,"b",function(){return i});var n=t("CcnG"),a=(t("d2mR"),t("Ip0R"),n.Qa({encapsulation:2,styles:[],data:{}}));function i(e){return n.mb(0,[],null,null)}},XIHC:function(e,l){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,l,t){"use strict";t.d(l,"a",function(){return n}),t.d(l,"b",function(){return a}),t("wZee"),t("XIHC");var n=function(){function e(e,l){this._renderer=e,this._el=l,this.nativeElement=l.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),a=function(){}},wZee:function(e,l){var t="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},n=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,l=0,n=t.Prism={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++l}),e.__id},clone:function(e,l){var t=n.util.type(e);switch(l=l||{},t){case"Object":if(l[n.util.objId(e)])return l[n.util.objId(e)];var a={};for(var i in l[n.util.objId(e)]=a,e)e.hasOwnProperty(i)&&(a[i]=n.util.clone(e[i],l));return a;case"Array":return l[n.util.objId(e)]?l[n.util.objId(e)]:(a=[],l[n.util.objId(e)]=a,e.forEach(function(e,t){a[t]=n.util.clone(e,l)}),a)}return e}},languages:{extend:function(e,l){var t=n.util.clone(n.languages[e]);for(var a in l)t[a]=l[a];return t},insertBefore:function(e,l,t,a){var i=(a=a||n.languages)[e];if(2==arguments.length){for(var r in t=arguments[1])t.hasOwnProperty(r)&&(i[r]=t[r]);return i}var u={};for(var o in i)if(i.hasOwnProperty(o)){if(o==l)for(var r in t)t.hasOwnProperty(r)&&(u[r]=t[r]);u[o]=i[o]}return n.languages.DFS(n.languages,function(l,t){t===a[e]&&l!=e&&(this[l]=u)}),a[e]=u},DFS:function(e,l,t,a){for(var i in a=a||{},e)e.hasOwnProperty(i)&&(l.call(e,i,e[i],t||i),"Object"!==n.util.type(e[i])||a[n.util.objId(e[i])]?"Array"!==n.util.type(e[i])||a[n.util.objId(e[i])]||(a[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],l,i,a)):(a[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],l,null,a)))}},plugins:{},highlightAll:function(e,l){n.highlightAllUnder(document,e,l)},highlightAllUnder:function(e,l,t){var a={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",a);for(var i,r=a.elements||e.querySelectorAll(a.selector),u=0;i=r[u++];)n.highlightElement(i,!0===l,a.callback)},highlightElement:function(l,a,i){for(var r,u,o=l;o&&!e.test(o.className);)o=o.parentNode;o&&(r=(o.className.match(e)||[,""])[1].toLowerCase(),u=n.languages[r]),l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,l.parentNode&&/pre/i.test((o=l.parentNode).nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+r);var s={element:l,language:r,grammar:u,code:l.textContent};if(n.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(n.hooks.run("before-highlight",s),s.element.textContent=s.code,n.hooks.run("after-highlight",s)),void n.hooks.run("complete",s);if(n.hooks.run("before-highlight",s),a&&t.Worker){var c=new Worker(n.filename);c.onmessage=function(e){s.highlightedCode=e.data,n.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),n.hooks.run("after-highlight",s),n.hooks.run("complete",s)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=n.highlight(s.code,s.grammar,s.language),n.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(l),n.hooks.run("after-highlight",s),n.hooks.run("complete",s)},highlight:function(e,l,t){var i={code:e,grammar:l,language:t};return n.hooks.run("before-tokenize",i),i.tokens=n.tokenize(i.code,i.grammar),n.hooks.run("after-tokenize",i),a.stringify(n.util.encode(i.tokens),i.language)},matchGrammar:function(e,l,t,a,i,r,u){var o=n.Token;for(var s in t)if(t.hasOwnProperty(s)&&t[s]){if(s==u)return;var c=t[s];c="Array"===n.util.type(c)?c:[c];for(var d=0;d<c.length;++d){var p=c[d],g=p.inside,h=!!p.lookbehind,m=!!p.greedy,b=0,f=p.alias;if(m&&!p.pattern.global){var y=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,y+"g")}p=p.pattern||p;for(var x=a,w=i;x<l.length;w+=l[x].length,++x){var v=l[x];if(l.length>e.length)return;if(!(v instanceof o)){if(m&&x!=l.length-1){if(p.lastIndex=w,!(C=p.exec(e)))break;for(var k=C.index+(h?C[1].length:0),S=C.index+C[0].length,F=x,A=w,R=l.length;F<R&&(A<S||!l[F].type&&!l[F-1].greedy);++F)k>=(A+=l[F].length)&&(++x,w=A);if(l[x]instanceof o)continue;j=F-x,v=e.slice(w,A),C.index-=w}else{p.lastIndex=0;var C=p.exec(v),j=1}if(C){h&&(b=C[1]?C[1].length:0),S=(k=C.index+b)+(C=C[0].slice(b)).length;var T=v.slice(0,k),N=v.slice(S),P=[x,j];T&&(++x,w+=T.length,P.push(T));var I=new o(s,g?n.tokenize(C,g):C,f,C,m);if(P.push(I),N&&P.push(N),Array.prototype.splice.apply(l,P),1!=j&&n.matchGrammar(e,l,t,x,w,!0,s),r)break}else if(r)break}}}}},tokenize:function(e,l,t){var a=[e],i=l.rest;if(i){for(var r in i)l[r]=i[r];delete l.rest}return n.matchGrammar(e,a,l,0,0,!1),a},hooks:{all:{},add:function(e,l){var t=n.hooks.all;t[e]=t[e]||[],t[e].push(l)},run:function(e,l){var t=n.hooks.all[e];if(t&&t.length)for(var a,i=0;a=t[i++];)a(l)}}},a=n.Token=function(e,l,t,n,a){this.type=e,this.content=l,this.alias=t,this.length=0|(n||"").length,this.greedy=!!a};if(a.stringify=function(e,l,t){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(t){return a.stringify(t,l,e)}).join("");var i={type:e.type,content:a.stringify(e.content,l,t),tag:"span",classes:["token",e.type],attributes:{},language:l,parent:t};if(e.alias){var r="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,r)}n.hooks.run("wrap",i);var u=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(u?" "+u:"")+">"+i.content+"</"+i.tag+">"},!t.document)return t.addEventListener?(n.disableWorkerMessageHandler||t.addEventListener("message",function(e){var l=JSON.parse(e.data),a=l.language,i=l.immediateClose;t.postMessage(n.highlight(l.code,n.languages[a],a)),i&&t.close()},!1),t.Prism):t.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(n.filename=i.src,n.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),t.Prism}();void 0!==e&&e.exports&&(e.exports=n),"undefined"!=typeof global&&(global.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),n.languages.xml=n.languages.markup,n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},n.languages.css.atrule.inside.rest=n.languages.css,n.languages.markup&&(n.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:n.languages.css,alias:"language-css",greedy:!0}}),n.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:n.languages.css}},alias:"language-css"}},n.languages.markup.tag)),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),n.languages.javascript["template-string"].inside.interpolation.inside.rest=n.languages.javascript,n.languages.markup&&n.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:n.languages.javascript,alias:"language-javascript",greedy:!0}}),n.languages.js=n.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(l){for(var t,a=l.getAttribute("data-src"),i=l,r=/\blang(?:uage)?-([\w-]+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(t=(l.className.match(r)||[,""])[1]),!t){var u=(a.match(/\.(\w+)$/)||[,""])[1];t=e[u]||u}var o=document.createElement("code");o.className="language-"+t,l.textContent="",o.textContent="Loading\u2026",l.appendChild(o);var s=new XMLHttpRequest;s.open("GET",a,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(o.textContent=s.responseText,n.highlightElement(o)):o.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},s.send(null)}),n.plugins.toolbar&&n.plugins.toolbar.registerButton("download-file",function(e){var l=e.element.parentNode;if(l&&/pre/i.test(l.nodeName)&&l.hasAttribute("data-src")&&l.hasAttribute("data-download-link")){var t=l.getAttribute("data-src"),n=document.createElement("a");return n.textContent=l.getAttribute("data-download-link-label")||"Download",n.setAttribute("download",""),n.href=t,n}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);