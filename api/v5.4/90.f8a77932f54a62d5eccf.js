(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{U89g:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i});var l=n("CcnG"),a=(n("d2mR"),n("Ip0R"),l.Qa({encapsulation:2,styles:[],data:{}}));function i(e){return l.mb(0,[],null,null)}},XIHC:function(e,t){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return a}),n("wZee"),n("XIHC");var l=function(){function e(e,t){this._renderer=e,this._el=t,this.nativeElement=t.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),a=function(){}},fJHA:function(e,t,n){"use strict";n.r(t);var l=n("CcnG"),a=function(){function e(e){this.http=e,this.getHtmlAndTypeScriptCode()}return e.prototype.getDta=function(){var e=this;this.asyncFlag=!0,setTimeout(function(){e.asyncFlag=!1},3e3)},e.prototype.getHtmlAndTypeScriptCode=function(){var e,t,n=this;this.http.get("assets/data/code/layout/carousel/carousel.html",{responseType:"text"}).subscribe(function(t){e=t},function(e){},function(){n.htmlCode=e}),this.http.get("assets/data/code/layout/carousel/carousel.text",{responseType:"text"}).subscribe(function(e){t=e},function(e){},function(){n.typeScriptCode=t})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e}(),i=function(){},r=n("pMnS"),u=n("gTgE"),o=n("O4vx"),s=n("U89g"),c=n("d2mR"),d=n("Ip0R"),g=n("t/Na"),p=l.Qa({encapsulation:2,styles:[],data:{}});function h(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,1,"amexio-image",[],null,null,null,u.Gd,u.pb)),l.Ra(1,114688,null,0,o.Ub,[],{path:[0,"path"],height:[1,"height"]},null)],function(e,t){e(t,1,0,l.Ua(1,"assets/images/carousel/set1/",t.context.$implicit,".jpg"),"300px")},null)}function m(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,1,"amexio-image",[],null,null,null,u.Gd,u.pb)),l.Ra(1,114688,null,0,o.Ub,[],{path:[0,"path"],height:[1,"height"]},null)],function(e,t){e(t,1,0,l.Ua(1,"assets/images/carousel/set2/",t.context.$implicit,".jpg"),"300px")},null)}function f(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),l.Sa(1,0,null,null,1,"prism-block",[],null,null,null,s.b,s.a)),l.Ra(2,4243456,null,0,c.a,[l.F,l.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.htmlCode,"html")},null)}function b(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),l.Sa(1,0,null,null,1,"prism-block",[],null,null,null,s.b,s.a)),l.Ra(2,4243456,null,0,c.a,[l.F,l.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.typeScriptCode,"typescript")},null)}function y(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,73,"amexio-card",[["header","true"]],null,null,null,u.bc,u.k)),l.Ra(1,5488640,null,3,o.j,[l.F],{header:[0,"header"]},null),l.ib(603979776,1,{amexioHeader:1}),l.ib(603979776,2,{amexioBody:1}),l.ib(603979776,3,{amexioFooter:1}),(e()(),l.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,u.mc,u.v)),l.Ra(6,114688,[[1,4]],0,o.A,[],null,null),(e()(),l.kb(-1,0,[" Carousel "])),(e()(),l.Sa(8,0,null,1,65,"amexio-body",[],null,null,null,u.Vb,u.e)),l.Ra(9,114688,[[2,4]],0,o.d,[],null,null),(e()(),l.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),l.kb(-1,null,["The CarouselView displays a collection of images or other content in a horizontal layout with built-in navigation between the items."])),(e()(),l.Sa(12,0,null,0,61,"amexio-tab-view",[],null,null,null,u.xc,u.G)),l.Ra(13,5488640,null,2,o.Q,[l.F,l.k,l.F],null,null),l.ib(603979776,4,{queryTabs:1}),l.ib(603979776,5,{queryAction:1}),(e()(),l.Sa(16,0,null,1,17,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,u.yc,u.H)),l.Ra(17,114688,[[4,4]],0,o.R,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),l.Sa(18,0,null,0,5,"amexio-carousel",[["mode","multiple"]],null,null,null,u.cc,u.l)),l.Ra(19,1163264,null,1,o.k,[],{header:[0,"header"],data:[1,"data"]},null),l.ib(603979776,6,{templates:1}),l.db(21,12),(e()(),l.Ja(0,null,null,1,null,h)),l.Ra(23,16384,[[6,4]],0,o.S,[l.O],{name:[0,"name"]},null),(e()(),l.Sa(24,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),l.Sa(25,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),l.Sa(26,0,null,0,5,"amexio-carousel",[["mode","multiple"],["shuffle-interval","2000"]],null,null,null,u.cc,u.l)),l.Ra(27,1163264,null,1,o.k,[],{header:[0,"header"],data:[1,"data"],shuffleinterval:[2,"shuffleinterval"]},null),l.ib(603979776,7,{templates:1}),l.db(29,11),(e()(),l.Ja(0,null,null,1,null,m)),l.Ra(31,16384,[[7,4]],0,o.S,[l.O],{name:[0,"name"]},null),(e()(),l.Sa(32,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),l.Sa(33,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),l.Sa(34,0,null,1,20,"amexio-tab",[["title","API Reference"]],null,null,null,u.yc,u.H)),l.Ra(35,114688,[[4,4]],0,o.R,[],{title:[0,"title"]},null),(e()(),l.Sa(36,0,null,0,18,"amexio-datagrid",[["title","Properties<amexio-carousel>"]],null,null,null,u.Od,u.xb)),l.Ra(37,1294336,null,1,o.jc,[l.l,o.Pa,l.i,l.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),l.ib(603979776,8,{columnRef:1}),(e()(),l.Sa(39,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),l.Ra(40,49152,[[8,4]],2,o.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,9,{headerTemplate:0}),l.ib(335544320,10,{bodyTemplate:0}),(e()(),l.Sa(43,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),l.Ra(44,49152,[[8,4]],2,o.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,11,{headerTemplate:0}),l.ib(335544320,12,{bodyTemplate:0}),(e()(),l.Sa(47,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),l.Ra(48,49152,[[8,4]],2,o.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,13,{headerTemplate:0}),l.ib(335544320,14,{bodyTemplate:0}),(e()(),l.Sa(51,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),l.Ra(52,49152,[[8,4]],2,o.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,15,{headerTemplate:0}),l.ib(335544320,16,{bodyTemplate:0}),(e()(),l.Sa(55,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,u.yc,u.H)),l.Ra(56,114688,[[4,4]],0,o.R,[],{title:[0,"title"]},null),(e()(),l.Sa(57,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),l.Sa(58,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,u.Ac,u.J)),l.Ra(59,5357568,null,1,o.V,[l.F],null,null),l.ib(603979776,17,{queryTabs:1}),(e()(),l.Sa(61,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,u.yc,u.H)),l.Ra(62,114688,[[17,4]],0,o.R,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),l.Ja(16777216,null,0,1,null,f)),l.Ra(64,16384,null,0,d.m,[l.R,l.O],{ngIf:[0,"ngIf"]},null),(e()(),l.Sa(65,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,u.yc,u.H)),l.Ra(66,114688,[[17,4]],0,o.R,[],{title:[0,"title"]},null),(e()(),l.Ja(16777216,null,0,1,null,b)),l.Ra(68,16384,null,0,d.m,[l.R,l.O],{ngIf:[0,"ngIf"]},null),(e()(),l.Sa(69,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,u.yc,u.H)),l.Ra(70,114688,[[4,4]],0,o.R,[],{title:[0,"title"]},null),(e()(),l.Sa(71,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),l.kb(-1,null,["Amexio Sandbox"])),(e()(),l.Sa(73,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-panel-carousel?embed=1&file=app/panels/carousel/carousel.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,t){var n=t.component;e(t,1,0,"true"),e(t,6,0),e(t,9,0),e(t,13,0),e(t,17,0,"Demo","true"),e(t,19,0,"Gallery",e(t,21,1,[1,2,3,4,5,6,7,8,9,10,11,12])),e(t,23,0,"item"),e(t,27,0,"Gallery With Auto Shuffle (2 seconds)",e(t,29,1,[1,2,3,4,5,6,7,8,9,10,11]),"2000"),e(t,31,0,"item"),e(t,35,0,"API Reference"),e(t,37,0,"Properties<amexio-carousel>","assets/apireference/layout/carousel.json","get","properties",!1,!1),e(t,40,0,"Name","name",!1,"string",15),e(t,44,0,"Type","type",!1,"string",10),e(t,48,0,"Default","default",!1,"string",10),e(t,52,0,"Description","description",!1,"string",65),e(t,56,0,"Source"),e(t,59,0),e(t,62,0,"HTML",!0),e(t,64,0,n.htmlCode),e(t,66,0,"Type Script"),e(t,68,0,n.typeScriptCode),e(t,70,0,"Live")},null)}var v=l.Oa("carousel-demo",a,function(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,1,"carousel-demo",[],null,null,null,y,p)),l.Ra(1,49152,null,0,a,[g.c],null,null)],null,null)},{},{},[]),x=n("gIcY"),k=n("ZYCi");n.d(t,"CarouselDemoModuleNgFactory",function(){return w});var w=l.Pa(i,[],function(e){return l.Za([l.ab(512,l.k,l.Ea,[[8,[r.a,u.a,v]],[3,l.k],l.z]),l.ab(4608,d.o,d.n,[l.w,[2,d.x]]),l.ab(4608,g.i,g.o,[d.d,l.D,g.m]),l.ab(4608,g.p,g.p,[g.i,g.n]),l.ab(5120,g.a,function(e){return[e]},[g.p]),l.ab(4608,g.l,g.l,[]),l.ab(6144,g.j,null,[g.l]),l.ab(4608,g.h,g.h,[g.j]),l.ab(6144,g.b,null,[g.h]),l.ab(4608,g.f,g.k,[g.b,l.s]),l.ab(4608,g.c,g.c,[g.f]),l.ab(4608,x.G,x.G,[]),l.ab(4608,o.Pa,o.Pa,[g.c]),l.ab(4608,o.Za,o.Za,[l.D]),l.ab(4608,o.gb,o.gb,[]),l.ab(4608,o.z,o.z,[]),l.ab(4608,o.Ab,o.Ab,[]),l.ab(4608,x.f,x.f,[]),l.ab(1073742336,d.c,d.c,[]),l.ab(1073742336,g.e,g.e,[]),l.ab(1073742336,g.d,g.d,[]),l.ab(1073742336,x.D,x.D,[]),l.ab(1073742336,x.l,x.l,[]),l.ab(1073742336,c.b,c.b,[]),l.ab(1073742336,k.n,k.n,[[2,k.t],[2,k.m]]),l.ab(1073742336,o.B,o.B,[]),l.ab(1073742336,o.w,o.w,[]),l.ab(1073742336,o.E,o.E,[]),l.ab(1073742336,o.G,o.G,[]),l.ab(1073742336,x.z,x.z,[]),l.ab(1073742336,o.J,o.J,[]),l.ab(1073742336,o.o,o.o,[]),l.ab(1073742336,o.X,o.X,[]),l.ab(1073742336,i,i,[]),l.ab(256,g.m,"XSRF-TOKEN",[]),l.ab(256,g.n,"X-XSRF-TOKEN",[]),l.ab(1024,k.i,function(){return[[{path:"",component:a}]]},[])])})},wZee:function(e,t){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},l=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,l=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,l.util.encode(e.content),e.alias):"Array"===l.util.type(e)?e.map(l.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var n=l.util.type(e);switch(t=t||{},n){case"Object":if(t[l.util.objId(e)])return t[l.util.objId(e)];var a={};for(var i in t[l.util.objId(e)]=a,e)e.hasOwnProperty(i)&&(a[i]=l.util.clone(e[i],t));return a;case"Array":return t[l.util.objId(e)]?t[l.util.objId(e)]:(a=[],t[l.util.objId(e)]=a,e.forEach(function(e,n){a[n]=l.util.clone(e,t)}),a)}return e}},languages:{extend:function(e,t){var n=l.util.clone(l.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(e,t,n,a){var i=(a=a||l.languages)[e];if(2==arguments.length){for(var r in n=arguments[1])n.hasOwnProperty(r)&&(i[r]=n[r]);return i}var u={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var r in n)n.hasOwnProperty(r)&&(u[r]=n[r]);u[o]=i[o]}return l.languages.DFS(l.languages,function(t,n){n===a[e]&&t!=e&&(this[t]=u)}),a[e]=u},DFS:function(e,t,n,a){for(var i in a=a||{},e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],n||i),"Object"!==l.util.type(e[i])||a[l.util.objId(e[i])]?"Array"!==l.util.type(e[i])||a[l.util.objId(e[i])]||(a[l.util.objId(e[i])]=!0,l.languages.DFS(e[i],t,i,a)):(a[l.util.objId(e[i])]=!0,l.languages.DFS(e[i],t,null,a)))}},plugins:{},highlightAll:function(e,t){l.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",a);for(var i,r=a.elements||e.querySelectorAll(a.selector),u=0;i=r[u++];)l.highlightElement(i,!0===t,a.callback)},highlightElement:function(t,a,i){for(var r,u,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(r=(o.className.match(e)||[,""])[1].toLowerCase(),u=l.languages[r]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,t.parentNode&&/pre/i.test((o=t.parentNode).nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+r);var s={element:t,language:r,grammar:u,code:t.textContent};if(l.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(l.hooks.run("before-highlight",s),s.element.textContent=s.code,l.hooks.run("after-highlight",s)),void l.hooks.run("complete",s);if(l.hooks.run("before-highlight",s),a&&n.Worker){var c=new Worker(l.filename);c.onmessage=function(e){s.highlightedCode=e.data,l.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),l.hooks.run("after-highlight",s),l.hooks.run("complete",s)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=l.highlight(s.code,s.grammar,s.language),l.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(t),l.hooks.run("after-highlight",s),l.hooks.run("complete",s)},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return l.hooks.run("before-tokenize",i),i.tokens=l.tokenize(i.code,i.grammar),l.hooks.run("after-tokenize",i),a.stringify(l.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,n,a,i,r,u){var o=l.Token;for(var s in n)if(n.hasOwnProperty(s)&&n[s]){if(s==u)return;var c=n[s];c="Array"===l.util.type(c)?c:[c];for(var d=0;d<c.length;++d){var g=c[d],p=g.inside,h=!!g.lookbehind,m=!!g.greedy,f=0,b=g.alias;if(m&&!g.pattern.global){var y=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,y+"g")}g=g.pattern||g;for(var v=a,x=i;v<t.length;x+=t[v].length,++v){var k=t[v];if(t.length>e.length)return;if(!(k instanceof o)){if(m&&v!=t.length-1){if(g.lastIndex=x,!(C=g.exec(e)))break;for(var w=C.index+(h?C[1].length:0),S=C.index+C[0].length,A=v,F=x,R=t.length;A<R&&(F<S||!t[A].type&&!t[A-1].greedy);++A)w>=(F+=t[A].length)&&(++v,x=F);if(t[v]instanceof o)continue;j=A-v,k=e.slice(x,F),C.index-=x}else{g.lastIndex=0;var C=g.exec(k),j=1}if(C){h&&(f=C[1]?C[1].length:0),S=(w=C.index+f)+(C=C[0].slice(f)).length;var P=k.slice(0,w),T=k.slice(S),N=[v,j];P&&(++v,x+=P.length,N.push(P));var E=new o(s,p?l.tokenize(C,p):C,b,C,m);if(N.push(E),T&&N.push(T),Array.prototype.splice.apply(t,N),1!=j&&l.matchGrammar(e,t,n,v,x,!0,s),r)break}else if(r)break}}}}},tokenize:function(e,t,n){var a=[e],i=t.rest;if(i){for(var r in i)t[r]=i[r];delete t.rest}return l.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var n=l.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=l.hooks.all[e];if(n&&n.length)for(var a,i=0;a=n[i++];)a(t)}}},a=l.Token=function(e,t,n,l,a){this.type=e,this.content=t,this.alias=n,this.length=0|(l||"").length,this.greedy=!!a};if(a.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===l.util.type(e))return e.map(function(n){return a.stringify(n,t,e)}).join("");var i={type:e.type,content:a.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var r="Array"===l.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,r)}l.hooks.run("wrap",i);var u=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(u?" "+u:"")+">"+i.content+"</"+i.tag+">"},!n.document)return n.addEventListener?(l.disableWorkerMessageHandler||n.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,i=t.immediateClose;n.postMessage(l.highlight(t.code,l.languages[a],a)),i&&n.close()},!1),n.Prism):n.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(l.filename=i.src,l.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(l.highlightAll):window.setTimeout(l.highlightAll,16):document.addEventListener("DOMContentLoaded",l.highlightAll))),n.Prism}();void 0!==e&&e.exports&&(e.exports=l),"undefined"!=typeof global&&(global.Prism=l),l.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},l.languages.markup.tag.inside["attr-value"].inside.entity=l.languages.markup.entity,l.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),l.languages.xml=l.languages.markup,l.languages.html=l.languages.markup,l.languages.mathml=l.languages.markup,l.languages.svg=l.languages.markup,l.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},l.languages.css.atrule.inside.rest=l.languages.css,l.languages.markup&&(l.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:l.languages.css,alias:"language-css",greedy:!0}}),l.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:l.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:l.languages.css}},alias:"language-css"}},l.languages.markup.tag)),l.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},l.languages.javascript=l.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),l.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),l.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),l.languages.javascript["template-string"].inside.interpolation.inside.rest=l.languages.javascript,l.languages.markup&&l.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:l.languages.javascript,alias:"language-javascript",greedy:!0}}),l.languages.js=l.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var n,a=t.getAttribute("data-src"),i=t,r=/\blang(?:uage)?-([\w-]+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(n=(t.className.match(r)||[,""])[1]),!n){var u=(a.match(/\.(\w+)$/)||[,""])[1];n=e[u]||u}var o=document.createElement("code");o.className="language-"+n,t.textContent="",o.textContent="Loading\u2026",t.appendChild(o);var s=new XMLHttpRequest;s.open("GET",a,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(o.textContent=s.responseText,l.highlightElement(o)):o.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},s.send(null)}),l.plugins.toolbar&&l.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var n=t.getAttribute("data-src"),l=document.createElement("a");return l.textContent=t.getAttribute("data-download-link-label")||"Download",l.setAttribute("download",""),l.href=n,l}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);