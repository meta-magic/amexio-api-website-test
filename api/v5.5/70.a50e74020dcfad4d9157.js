(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{U89g:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return i});var a=n("CcnG"),l=(n("d2mR"),n("Ip0R"),a.Qa({encapsulation:2,styles:[],data:{}}));function i(e){return a.mb(0,[],null,null)}},XIHC:function(e,t){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return l}),n("wZee"),n("XIHC");var a=function(){function e(e,t){this._renderer=e,this._el=t,this.nativeElement=t.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),l=function(){}},rAA6:function(e,t,n){"use strict";n.r(t);var a=n("CcnG"),l=function(){},i=n("gTgE"),r=n("pMnS"),u=n("U89g"),o=n("d2mR"),s=n("O4vx"),c=n("Ip0R"),d=function(){function e(e){this.http=e,this.timelineChartData=[[{datatype:"string",label:"Prime Minister"},{datatype:"date",label:"Start"},{datatype:"date",label:"End"}],["Washington",new Date(1789,3,30),new Date(1797,2,4)],["Adams",new Date(1797,2,4),new Date(1801,2,4)],["Jefferson",new Date(1801,2,4),new Date(1809,2,4)]],this.getHtmlAndTypeScriptCode()}return e.prototype.getHtmlAndTypeScriptCode=function(){var e,t,n=this;this.http.get("assets/data/code/charts/timelinechart/chart.html",{responseType:"text"}).subscribe(function(t){e=t},function(e){},function(){n.htmlCode=e}),this.http.get("assets/data/code/charts/timelinechart/chart.text",{responseType:"text"}).subscribe(function(e){t=e},function(e){},function(){n.typeScriptCode=t}),this.http.get("assets/data/code/charts/timelinechart/datasource.json",{responseType:"text"}).subscribe(function(e){t=e},function(e){},function(){n.dataSourceCode=t})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e.prototype.ngOnInit=function(){},e}(),g=n("t/Na"),p=a.Qa({encapsulation:2,styles:[],data:{}});function h(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),a.Ra(2,4243456,null,0,o.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.htmlCode,"html")},null)}function m(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),a.Ra(2,4243456,null,0,o.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.typeScriptCode,"typescript")},null)}function b(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),a.Ra(2,4243456,null,0,o.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.dataSourceCode,"json")},null)}function f(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,70,"amexio-card",[["header","true"]],null,null,null,i.cc,i.k)),a.Ra(1,5488640,null,3,s.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,1,{amexioHeader:1}),a.ib(603979776,2,{amexioBody:1}),a.ib(603979776,3,{amexioFooter:1}),(e()(),a.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,i.oc,i.w)),a.Ra(6,114688,[[1,4]],0,s.C,[],null,null),(e()(),a.kb(-1,0,[" Timeline Chart Component "])),(e()(),a.Sa(8,0,null,1,62,"amexio-body",[],null,null,null,i.Wb,i.e)),a.Ra(9,114688,[[2,4]],0,s.d,[],null,null),(e()(),a.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),a.kb(-1,null,["A timeline is a chart that depicts how a set of resources are used over time."])),(e()(),a.Sa(12,0,null,0,58,"amexio-tab-view",[],null,null,null,i.zc,i.H)),a.Ra(13,5488640,null,2,s.S,[a.F,a.k,a.F],null,null),a.ib(603979776,4,{queryTabs:1}),a.ib(603979776,5,{queryAction:1}),(e()(),a.Sa(16,0,null,1,10,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.Ac,i.I)),a.Ra(17,114688,[[4,4]],0,s.T,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),a.Sa(18,0,null,0,8,"amexio-row",[],null,null,null,i.vc,i.D)),a.Ra(19,1163264,null,0,s.O,[],null,null),(e()(),a.Sa(20,0,null,0,6,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,i.ec,i.m)),a.Ra(21,114688,null,0,s.m,[],{size:[0,"size"]},null),(e()(),a.Sa(22,0,null,0,4,"amexio-chart-timeline",[],null,null,null,i.ld,i.Ta)),a.Ra(23,1163264,null,3,s.xb,[s.Oa],{width:[0,"width"],data:[1,"data"]},null),a.ib(603979776,6,{chartLegendComp:1}),a.ib(603979776,7,{chartTitleComp:1}),a.ib(603979776,8,{chartAreaComp:1}),(e()(),a.Sa(27,0,null,1,20,"amexio-tab",[["title","API Reference"]],null,null,null,i.Ac,i.I)),a.Ra(28,114688,[[4,4]],0,s.T,[],{title:[0,"title"]},null),(e()(),a.Sa(29,0,null,0,18,"amexio-datagrid",[["title","Chart Properties<amexio-chart-timeline>"]],null,null,null,i.Pd,i.xb)),a.Ra(30,1294336,null,1,s.rc,[a.l,s.Sa,a.i,a.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,9,{columnRef:1}),(e()(),a.Sa(32,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Qd,i.yb)),a.Ra(33,49152,[[9,4]],2,s.sc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,10,{headerTemplate:0}),a.ib(335544320,11,{bodyTemplate:0}),(e()(),a.Sa(36,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Qd,i.yb)),a.Ra(37,49152,[[9,4]],2,s.sc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,12,{headerTemplate:0}),a.ib(335544320,13,{bodyTemplate:0}),(e()(),a.Sa(40,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Qd,i.yb)),a.Ra(41,49152,[[9,4]],2,s.sc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,14,{headerTemplate:0}),a.ib(335544320,15,{bodyTemplate:0}),(e()(),a.Sa(44,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Qd,i.yb)),a.Ra(45,49152,[[9,4]],2,s.sc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,16,{headerTemplate:0}),a.ib(335544320,17,{bodyTemplate:0}),(e()(),a.Sa(48,0,null,1,17,"amexio-tab",[["title","Source"]],null,null,null,i.Ac,i.I)),a.Ra(49,114688,[[4,4]],0,s.T,[],{title:[0,"title"]},null),(e()(),a.Sa(50,0,null,0,15,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),a.Sa(51,0,null,null,14,"amexio-vertical-tab-view",[],null,null,null,i.Cc,i.K)),a.Ra(52,5357568,null,1,s.X,[a.F,a.k],null,null),a.ib(603979776,18,{queryTabs:1}),(e()(),a.Sa(54,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.Ac,i.I)),a.Ra(55,114688,[[18,4]],0,s.T,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),a.Ja(16777216,null,0,1,null,h)),a.Ra(57,16384,null,0,c.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(e()(),a.Sa(58,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.Ac,i.I)),a.Ra(59,114688,[[18,4]],0,s.T,[],{title:[0,"title"]},null),(e()(),a.Ja(16777216,null,0,1,null,m)),a.Ra(61,16384,null,0,c.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(e()(),a.Sa(62,0,null,0,3,"amexio-tab",[["title","Data Source"]],null,null,null,i.Ac,i.I)),a.Ra(63,114688,[[18,4]],0,s.T,[],{title:[0,"title"]},null),(e()(),a.Ja(16777216,null,0,1,null,b)),a.Ra(65,16384,null,0,c.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(e()(),a.Sa(66,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.Ac,i.I)),a.Ra(67,114688,[[4,4]],0,s.T,[],{title:[0,"title"]},null),(e()(),a.Sa(68,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),a.kb(-1,null,["Amexio Sandbox"])),(e()(),a.Sa(70,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-timelinechart?embed=1&file=app/charts/timelinechart/timelinechart.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,t){var n=t.component;e(t,1,0,"true"),e(t,6,0),e(t,9,0),e(t,13,0),e(t,17,0,"Demo","true"),e(t,19,0),e(t,21,0,"12"),e(t,23,0,"100%",n.timelineChartData),e(t,28,0,"API Reference"),e(t,30,0,"Chart Properties<amexio-chart-timeline>","assets/apireference/charts/timelinechart.json","get","chart",!1,!1),e(t,33,0,"Name","name",!1,"string",15),e(t,37,0,"Type","type",!1,"string",10),e(t,41,0,"Default","default",!1,"string",10),e(t,45,0,"Description","description",!1,"string",65),e(t,49,0,"Source"),e(t,52,0),e(t,55,0,"HTML",!0),e(t,57,0,n.htmlCode),e(t,59,0,"Type Script"),e(t,61,0,n.typeScriptCode),e(t,63,0,"Data Source"),e(t,65,0,n.dataSourceCode),e(t,67,0,"Live")},function(e,t){e(t,20,0,a.cb(t,21).role)})}var y=a.Oa("scatter-chart-demo",d,function(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,1,"scatter-chart-demo",[],null,null,null,f,p)),a.Ra(1,114688,null,0,d,[g.c],null,null)],function(e,t){e(t,1,0)},null)},{},{},[]),v=n("gIcY"),x=n("ZYCi");n.d(t,"TimelineChartDemoModuleNgFactory",function(){return w});var w=a.Pa(l,[],function(e){return a.Za([a.ab(512,a.k,a.Ea,[[8,[i.a,r.a,y]],[3,a.k],a.z]),a.ab(4608,c.o,c.n,[a.w,[2,c.x]]),a.ab(4608,v.G,v.G,[]),a.ab(4608,g.i,g.o,[c.d,a.D,g.m]),a.ab(4608,g.p,g.p,[g.i,g.n]),a.ab(5120,g.a,function(e){return[e]},[g.p]),a.ab(4608,g.l,g.l,[]),a.ab(6144,g.j,null,[g.l]),a.ab(4608,g.h,g.h,[g.j]),a.ab(6144,g.b,null,[g.h]),a.ab(4608,g.f,g.k,[g.b,a.s]),a.ab(4608,g.c,g.c,[g.f]),a.ab(4608,s.Sa,s.Sa,[g.c]),a.ab(4608,s.mb,s.mb,[]),a.ab(4608,s.cb,s.cb,[a.D]),a.ab(4608,s.B,s.B,[]),a.ab(4608,s.Ib,s.Ib,[]),a.ab(4608,v.f,v.f,[]),a.ab(4608,s.Oa,s.Oa,[]),a.ab(1073742336,c.c,c.c,[]),a.ab(1073742336,v.D,v.D,[]),a.ab(1073742336,v.l,v.l,[]),a.ab(1073742336,g.e,g.e,[]),a.ab(1073742336,g.d,g.d,[]),a.ab(1073742336,s.Bb,s.Bb,[]),a.ab(1073742336,s.D,s.D,[]),a.ab(1073742336,s.x,s.x,[]),a.ab(1073742336,s.G,s.G,[]),a.ab(1073742336,s.I,s.I,[]),a.ab(1073742336,v.z,v.z,[]),a.ab(1073742336,s.L,s.L,[]),a.ab(1073742336,s.p,s.p,[]),a.ab(1073742336,s.Aa,s.Aa,[]),a.ab(1073742336,o.b,o.b,[]),a.ab(1073742336,s.l,s.l,[]),a.ab(1073742336,x.n,x.n,[[2,x.t],[2,x.m]]),a.ab(1073742336,l,l,[]),a.ab(256,g.m,"XSRF-TOKEN",[]),a.ab(256,g.n,"X-XSRF-TOKEN",[]),a.ab(1024,x.i,function(){return[[{path:"",component:d,pathMatch:"full"}]]},[])])})},wZee:function(e,t){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,a=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof l?new l(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var n=a.util.type(e);switch(t=t||{},n){case"Object":if(t[a.util.objId(e)])return t[a.util.objId(e)];var l={};for(var i in t[a.util.objId(e)]=l,e)e.hasOwnProperty(i)&&(l[i]=a.util.clone(e[i],t));return l;case"Array":return t[a.util.objId(e)]?t[a.util.objId(e)]:(l=[],t[a.util.objId(e)]=l,e.forEach(function(e,n){l[n]=a.util.clone(e,t)}),l)}return e}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var l in t)n[l]=t[l];return n},insertBefore:function(e,t,n,l){var i=(l=l||a.languages)[e];if(2==arguments.length){for(var r in n=arguments[1])n.hasOwnProperty(r)&&(i[r]=n[r]);return i}var u={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var r in n)n.hasOwnProperty(r)&&(u[r]=n[r]);u[o]=i[o]}return a.languages.DFS(a.languages,function(t,n){n===l[e]&&t!=e&&(this[t]=u)}),l[e]=u},DFS:function(e,t,n,l){for(var i in l=l||{},e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],n||i),"Object"!==a.util.type(e[i])||l[a.util.objId(e[i])]?"Array"!==a.util.type(e[i])||l[a.util.objId(e[i])]||(l[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,i,l)):(l[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,null,l)))}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var l={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",l);for(var i,r=l.elements||e.querySelectorAll(l.selector),u=0;i=r[u++];)a.highlightElement(i,!0===t,l.callback)},highlightElement:function(t,l,i){for(var r,u,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(r=(o.className.match(e)||[,""])[1].toLowerCase(),u=a.languages[r]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,t.parentNode&&/pre/i.test((o=t.parentNode).nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+r);var s={element:t,language:r,grammar:u,code:t.textContent};if(a.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(a.hooks.run("before-highlight",s),s.element.textContent=s.code,a.hooks.run("after-highlight",s)),void a.hooks.run("complete",s);if(a.hooks.run("before-highlight",s),l&&n.Worker){var c=new Worker(a.filename);c.onmessage=function(e){s.highlightedCode=e.data,a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),a.hooks.run("after-highlight",s),a.hooks.run("complete",s)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=a.highlight(s.code,s.grammar,s.language),a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(t),a.hooks.run("after-highlight",s),a.hooks.run("complete",s)},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),l.stringify(a.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,n,l,i,r,u){var o=a.Token;for(var s in n)if(n.hasOwnProperty(s)&&n[s]){if(s==u)return;var c=n[s];c="Array"===a.util.type(c)?c:[c];for(var d=0;d<c.length;++d){var g=c[d],p=g.inside,h=!!g.lookbehind,m=!!g.greedy,b=0,f=g.alias;if(m&&!g.pattern.global){var y=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,y+"g")}g=g.pattern||g;for(var v=l,x=i;v<t.length;x+=t[v].length,++v){var w=t[v];if(t.length>e.length)return;if(!(w instanceof o)){if(m&&v!=t.length-1){if(g.lastIndex=x,!(T=g.exec(e)))break;for(var k=T.index+(h?T[1].length:0),S=T.index+T[0].length,A=v,C=x,F=t.length;A<F&&(C<S||!t[A].type&&!t[A-1].greedy);++A)k>=(C+=t[A].length)&&(++v,x=C);if(t[v]instanceof o)continue;R=A-v,w=e.slice(x,C),T.index-=x}else{g.lastIndex=0;var T=g.exec(w),R=1}if(T){h&&(b=T[1]?T[1].length:0),S=(k=T.index+b)+(T=T[0].slice(b)).length;var I=w.slice(0,k),j=w.slice(S),N=[v,R];I&&(++v,x+=I.length,N.push(I));var P=new o(s,p?a.tokenize(T,p):T,f,T,m);if(N.push(P),j&&N.push(j),Array.prototype.splice.apply(t,N),1!=R&&a.matchGrammar(e,t,n,v,x,!0,s),r)break}else if(r)break}}}}},tokenize:function(e,t,n){var l=[e],i=t.rest;if(i){for(var r in i)t[r]=i[r];delete t.rest}return a.matchGrammar(e,l,t,0,0,!1),l},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var l,i=0;l=n[i++];)l(t)}}},l=a.Token=function(e,t,n,a,l){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!l};if(l.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map(function(n){return l.stringify(n,t,e)}).join("");var i={type:e.type,content:l.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var r="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,r)}a.hooks.run("wrap",i);var u=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(u?" "+u:"")+">"+i.content+"</"+i.tag+">"},!n.document)return n.addEventListener?(a.disableWorkerMessageHandler||n.addEventListener("message",function(e){var t=JSON.parse(e.data),l=t.language,i=t.immediateClose;n.postMessage(a.highlight(t.code,a.languages[l],l)),i&&n.close()},!1),n.Prism):n.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(a.filename=i.src,a.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),n.Prism}();void 0!==e&&e.exports&&(e.exports=a),"undefined"!=typeof global&&(global.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),a.languages.xml=a.languages.markup,a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},a.languages.css.atrule.inside.rest=a.languages.css,a.languages.markup&&(a.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:a.languages.css,alias:"language-css",greedy:!0}}),a.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:a.languages.css}},alias:"language-css"}},a.languages.markup.tag)),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),a.languages.javascript["template-string"].inside.interpolation.inside.rest=a.languages.javascript,a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:a.languages.javascript,alias:"language-javascript",greedy:!0}}),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var n,l=t.getAttribute("data-src"),i=t,r=/\blang(?:uage)?-([\w-]+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(n=(t.className.match(r)||[,""])[1]),!n){var u=(l.match(/\.(\w+)$/)||[,""])[1];n=e[u]||u}var o=document.createElement("code");o.className="language-"+n,t.textContent="",o.textContent="Loading\u2026",t.appendChild(o);var s=new XMLHttpRequest;s.open("GET",l,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(o.textContent=s.responseText,a.highlightElement(o)):o.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},s.send(null)}),a.plugins.toolbar&&a.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var n=t.getAttribute("data-src"),a=document.createElement("a");return a.textContent=t.getAttribute("data-download-link-label")||"Download",a.setAttribute("download",""),a.href=n,a}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);