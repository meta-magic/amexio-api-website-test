(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{DVcd:function(e,n,l){"use strict";l.r(n);var t=l("CcnG"),a=function(){function e(e){this.http=e,this.getHtmlAndTypeScriptCode()}return e.prototype.getDta=function(){var e=this;this.asyncFlag=!0,setTimeout(function(){e.asyncFlag=!1},3e3)},e.prototype.getHtmlAndTypeScriptCode=function(){var e,n,l=this;this.http.get("assets/data/code/layout/timeline/timeline.html",{responseType:"text"}).subscribe(function(n){e=n},function(e){},function(){l.htmlCode=e}),this.http.get("assets/data/code/layout/timeline/timeline.text",{responseType:"text"}).subscribe(function(e){n=e},function(e){},function(){l.typeScriptCode=n})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e}(),i=function(){},r=l("gTgE"),o=l("pMnS"),u=l("U89g"),s=l("d2mR"),c=l("O4vx"),d=l("Ip0R"),g=l("t/Na"),m=t.Qa({encapsulation:2,styles:[],data:{}});function p(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),t.Ra(2,4243456,null,0,s.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,n){e(n,2,0,n.component.htmlCode,"html")},null)}function b(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),t.Ra(2,4243456,null,0,s.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,n){e(n,2,0,n.component.typeScriptCode,"typescript")},null)}function h(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,99,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(e,n,l){var a=!0;return"document:click"===n&&(a=!1!==t.cb(e,1).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==t.cb(e,1).onscroll()&&a),a},r.bc,r.k)),t.Ra(1,5357568,null,3,c.j,[],{header:[0,"header"]},null),t.ib(603979776,1,{amexioHeader:1}),t.ib(603979776,2,{amexioBody:1}),t.ib(603979776,3,{amexioFooter:1}),(e()(),t.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,r.mc,r.v)),t.Ra(6,114688,[[1,4]],0,c.A,[],null,null),(e()(),t.kb(-1,0,[" Timeline "])),(e()(),t.Sa(8,0,null,1,91,"amexio-body",[],null,null,null,r.Vb,r.e)),t.Ra(9,114688,[[2,4]],0,c.d,[],null,null),(e()(),t.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),t.kb(-1,null,[" A timeline is the presentation of a chronological sequence of events along a drawn line that enables a viewer to understand temporal relationships quickly."])),(e()(),t.Sa(12,16777216,null,0,87,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(e,n,l){var a=!0;return"document:click"===n&&(a=!1!==t.cb(e,13).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==t.cb(e,13).onscroll()&&a),a},r.xc,r.G)),t.Ra(13,5357568,null,2,c.Q,[t.F,t.k,t.R],null,null),t.ib(603979776,4,{queryTabs:1}),t.ib(603979776,5,{queryAction:1}),(e()(),t.Sa(16,0,null,1,43,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,r.yc,r.H)),t.Ra(17,114688,[[4,4]],0,c.R,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),t.Sa(18,0,null,0,41,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(e,n,l){var a=!0;return"document:click"===n&&(a=!1!==t.cb(e,19).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==t.cb(e,19).onscroll()&&a),a},r.bc,r.k)),t.Ra(19,5357568,null,3,c.j,[],{header:[0,"header"]},null),t.ib(603979776,6,{amexioHeader:1}),t.ib(603979776,7,{amexioBody:1}),t.ib(603979776,8,{amexioFooter:1}),(e()(),t.Sa(23,0,null,0,2,"amexio-header",[],null,null,null,r.mc,r.v)),t.Ra(24,114688,[[6,4]],0,c.A,[],null,null),(e()(),t.kb(-1,0,[" Timeline Component"])),(e()(),t.Sa(26,0,null,1,33,"amexio-body",[],null,null,null,r.Vb,r.e)),t.Ra(27,114688,[[7,4]],0,c.d,[],null,null),(e()(),t.Sa(28,0,null,0,31,"amexio-row",[],null,null,null,r.tc,r.C)),t.Ra(29,1163264,null,0,c.M,[],null,null),(e()(),t.Sa(30,0,null,0,29,"amexio-column",[],[[1,"class",0]],null,null,r.dc,r.m)),t.Ra(31,114688,null,0,c.m,[],{size:[0,"size"]},null),(e()(),t.Sa(32,0,null,0,27,"amexio-timeline",[],null,null,null,r.Gc,r.P)),t.Ra(33,1163264,null,1,c.Ca,[c.Za],{contentalignment:[0,"contentalignment"]},null),t.ib(603979776,9,{querylist:1}),(e()(),t.Sa(35,0,null,0,4,"amexio-timeline-event",[],[[2,"timeline-item",null]],null,null,r.Hc,r.Q)),t.Ra(36,49152,[[9,4]],0,c.Da,[],{label:[0,"label"],icon:[1,"icon"],contentborder:[2,"contentborder"],contentalignment:[3,"contentalignment"]},null),(e()(),t.Sa(37,0,null,0,2,"amexio-label",[["size","'large-bold'"]],null,null,null,r.sd,r.bb)),t.Ra(38,114688,null,0,c.Eb,[],{styleClass:[0,"styleClass"]},null),(e()(),t.kb(-1,0,["REGISTRATION"])),(e()(),t.Sa(40,0,null,0,4,"amexio-timeline-event",[],[[2,"timeline-item",null]],null,null,r.Hc,r.Q)),t.Ra(41,49152,[[9,4]],0,c.Da,[],{label:[0,"label"],icon:[1,"icon"],contentborder:[2,"contentborder"],contentalignment:[3,"contentalignment"]},null),(e()(),t.Sa(42,0,null,0,2,"amexio-label",[],null,null,null,r.sd,r.bb)),t.Ra(43,114688,null,0,c.Eb,[],null,null),(e()(),t.kb(-1,0,["Keynote Talk:Disrupting the Disruptors- Where does Blockchain go from here "])),(e()(),t.Sa(45,0,null,0,4,"amexio-timeline-event",[],[[2,"timeline-item",null]],null,null,r.Hc,r.Q)),t.Ra(46,49152,[[9,4]],0,c.Da,[],{label:[0,"label"],icon:[1,"icon"],contentborder:[2,"contentborder"],contentalignment:[3,"contentalignment"]},null),(e()(),t.Sa(47,0,null,0,2,"amexio-label",[],null,null,null,r.sd,r.bb)),t.Ra(48,114688,null,0,c.Eb,[],null,null),(e()(),t.kb(-1,0,["Blockchain in Enterprise- How Companies are using Blockchain Today "])),(e()(),t.Sa(50,0,null,0,4,"amexio-timeline-event",[],[[2,"timeline-item",null]],null,null,r.Hc,r.Q)),t.Ra(51,49152,[[9,4]],0,c.Da,[],{label:[0,"label"],icon:[1,"icon"],contentborder:[2,"contentborder"],contentalignment:[3,"contentalignment"]},null),(e()(),t.Sa(52,0,null,0,2,"amexio-label",[],null,null,null,r.sd,r.bb)),t.Ra(53,114688,null,0,c.Eb,[],null,null),(e()(),t.kb(-1,0,["Networking Break "])),(e()(),t.Sa(55,0,null,0,4,"amexio-timeline-event",[],[[2,"timeline-item",null]],null,null,r.Hc,r.Q)),t.Ra(56,49152,[[9,4]],0,c.Da,[],{label:[0,"label"],icon:[1,"icon"],contentborder:[2,"contentborder"],contentalignment:[3,"contentalignment"]},null),(e()(),t.Sa(57,0,null,0,2,"amexio-label",[],null,null,null,r.sd,r.bb)),t.Ra(58,114688,null,0,c.Eb,[],null,null),(e()(),t.kb(-1,0,["Understand Blockchain HyperLedger Fabric For Enterprises "])),(e()(),t.Sa(60,0,null,1,20,"amexio-tab",[["title","API Reference"]],null,null,null,r.yc,r.H)),t.Ra(61,114688,[[4,4]],0,c.R,[],{title:[0,"title"]},null),(e()(),t.Sa(62,0,null,0,18,"amexio-datagrid",[["title","Properties <amexio-timeline-event>"]],null,[["document","scroll"],["document","click"]],function(e,n,l){var a=!0;return"document:scroll"===n&&(a=!1!==t.cb(e,63).onscroll()&&a),"document:click"===n&&(a=!1!==t.cb(e,63).onclick()&&a),a},r.Od,r.xb)),t.Ra(63,1163264,null,1,c.jc,[t.l,c.Pa,t.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,10,{columnRef:1}),(e()(),t.Sa(65,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Pd,r.yb)),t.Ra(66,49152,[[10,4]],2,c.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,11,{headerTemplate:0}),t.ib(335544320,12,{bodyTemplate:0}),(e()(),t.Sa(69,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Pd,r.yb)),t.Ra(70,49152,[[10,4]],2,c.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,13,{headerTemplate:0}),t.ib(335544320,14,{bodyTemplate:0}),(e()(),t.Sa(73,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Pd,r.yb)),t.Ra(74,49152,[[10,4]],2,c.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,15,{headerTemplate:0}),t.ib(335544320,16,{bodyTemplate:0}),(e()(),t.Sa(77,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Pd,r.yb)),t.Ra(78,49152,[[10,4]],2,c.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,17,{headerTemplate:0}),t.ib(335544320,18,{bodyTemplate:0}),(e()(),t.Sa(81,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,r.yc,r.H)),t.Ra(82,114688,[[4,4]],0,c.R,[],{title:[0,"title"]},null),(e()(),t.Sa(83,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),t.Sa(84,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,r.Ac,r.J)),t.Ra(85,5357568,null,1,c.V,[t.F],null,null),t.ib(603979776,19,{queryTabs:1}),(e()(),t.Sa(87,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,r.yc,r.H)),t.Ra(88,114688,[[19,4]],0,c.R,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),t.Ja(16777216,null,0,1,null,p)),t.Ra(90,16384,null,0,d.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(e()(),t.Sa(91,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,r.yc,r.H)),t.Ra(92,114688,[[19,4]],0,c.R,[],{title:[0,"title"]},null),(e()(),t.Ja(16777216,null,0,1,null,b)),t.Ra(94,16384,null,0,d.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(e()(),t.Sa(95,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,r.yc,r.H)),t.Ra(96,114688,[[4,4]],0,c.R,[],{title:[0,"title"]},null),(e()(),t.Sa(97,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),t.kb(-1,null,["Amexio Sandbox"])),(e()(),t.Sa(99,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-timeline?embed=1&file=app/timeline-demo/timeline/timeline.demo.html&view=editor"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,n){var l=n.component;e(n,1,0,"true"),e(n,6,0),e(n,9,0),e(n,13,0),e(n,17,0,"Demo","true"),e(n,19,0,"true"),e(n,24,0),e(n,27,0),e(n,29,0),e(n,31,0,12),e(n,33,0,""),e(n,36,0,"08:30","fa fa-microphone",!0,"left"),e(n,38,0,"'large-bold'"),e(n,41,0,"09:00","fa fa-microphone",!0,"right"),e(n,43,0),e(n,46,0,"09:15","fa fa-microphone",!0,"left"),e(n,48,0),e(n,51,0,"09:50","fa fa-coffee",!0,"right"),e(n,53,0),e(n,56,0,"10:05","fa fa-microphone",!0,"right"),e(n,58,0),e(n,61,0,"API Reference"),e(n,63,0,"Properties <amexio-timeline-event>","assets/apireference/panes/timeline/timeline.json","get","properties",!1,!1),e(n,66,0,"Name","name",!1,"string",15),e(n,70,0,"Type","type",!1,"string",10),e(n,74,0,"Default","default",!1,"string",10),e(n,78,0,"Description","description",!1,"string",65),e(n,82,0,"Source"),e(n,85,0),e(n,88,0,"HTML",!0),e(n,90,0,l.htmlCode),e(n,92,0,"Type Script"),e(n,94,0,l.typeScriptCode),e(n,96,0,"Live")},function(e,n){e(n,30,0,t.cb(n,31).role),e(n,35,0,t.cb(n,36).label),e(n,40,0,t.cb(n,41).label),e(n,45,0,t.cb(n,46).label),e(n,50,0,t.cb(n,51).label),e(n,55,0,t.cb(n,56).label)})}var f=t.Oa("timeline-demo",a,function(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,1,"timeline-demo",[],null,null,null,h,m)),t.Ra(1,49152,null,0,a,[g.c],null,null)],null,null)},{},{},[]),y=l("gIcY"),k=l("ZYCi");l.d(n,"TimelineDemoModuleNgFactory",function(){return v});var v=t.Pa(i,[],function(e){return t.Za([t.ab(512,t.k,t.Ea,[[8,[r.a,o.a,f]],[3,t.k],t.z]),t.ab(4608,d.o,d.n,[t.w,[2,d.x]]),t.ab(4608,g.i,g.o,[d.d,t.D,g.m]),t.ab(4608,g.p,g.p,[g.i,g.n]),t.ab(5120,g.a,function(e){return[e]},[g.p]),t.ab(4608,g.l,g.l,[]),t.ab(6144,g.j,null,[g.l]),t.ab(4608,g.h,g.h,[g.j]),t.ab(6144,g.b,null,[g.h]),t.ab(4608,g.f,g.k,[g.b,t.s]),t.ab(4608,g.c,g.c,[g.f]),t.ab(4608,y.G,y.G,[]),t.ab(4608,c.Pa,c.Pa,[g.c]),t.ab(4608,c.Za,c.Za,[t.D]),t.ab(4608,c.gb,c.gb,[]),t.ab(4608,c.z,c.z,[]),t.ab(4608,c.Ab,c.Ab,[]),t.ab(4608,y.f,y.f,[]),t.ab(1073742336,d.c,d.c,[]),t.ab(1073742336,g.e,g.e,[]),t.ab(1073742336,g.d,g.d,[]),t.ab(1073742336,y.D,y.D,[]),t.ab(1073742336,y.l,y.l,[]),t.ab(1073742336,c.B,c.B,[]),t.ab(1073742336,c.w,c.w,[]),t.ab(1073742336,c.E,c.E,[]),t.ab(1073742336,c.G,c.G,[]),t.ab(1073742336,y.z,y.z,[]),t.ab(1073742336,c.J,c.J,[]),t.ab(1073742336,c.o,c.o,[]),t.ab(1073742336,c.X,c.X,[]),t.ab(1073742336,s.b,s.b,[]),t.ab(1073742336,k.n,k.n,[[2,k.t],[2,k.m]]),t.ab(1073742336,i,i,[]),t.ab(256,g.m,"XSRF-TOKEN",[]),t.ab(256,g.n,"X-XSRF-TOKEN",[]),t.ab(1024,k.i,function(){return[[{path:"",component:a}]]},[])])})},U89g:function(e,n,l){"use strict";l.d(n,"a",function(){return a}),l.d(n,"b",function(){return i});var t=l("CcnG"),a=(l("d2mR"),l("Ip0R"),t.Qa({encapsulation:2,styles:[],data:{}}));function i(e){return t.mb(0,[],null,null)}},XIHC:function(e,n){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,n,l){"use strict";l.d(n,"a",function(){return t}),l.d(n,"b",function(){return a}),l("wZee"),l("XIHC");var t=function(){function e(e,n){this._renderer=e,this._el=n,this.nativeElement=n.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),a=function(){}},wZee:function(e,n){var l="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},t=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,n=0,t=l.Prism={manual:l.Prism&&l.Prism.manual,disableWorkerMessageHandler:l.Prism&&l.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function(e,n){var l=t.util.type(e);switch(n=n||{},l){case"Object":if(n[t.util.objId(e)])return n[t.util.objId(e)];var a={};for(var i in n[t.util.objId(e)]=a,e)e.hasOwnProperty(i)&&(a[i]=t.util.clone(e[i],n));return a;case"Array":return n[t.util.objId(e)]?n[t.util.objId(e)]:(a=[],n[t.util.objId(e)]=a,e.forEach(function(e,l){a[l]=t.util.clone(e,n)}),a)}return e}},languages:{extend:function(e,n){var l=t.util.clone(t.languages[e]);for(var a in n)l[a]=n[a];return l},insertBefore:function(e,n,l,a){var i=(a=a||t.languages)[e];if(2==arguments.length){for(var r in l=arguments[1])l.hasOwnProperty(r)&&(i[r]=l[r]);return i}var o={};for(var u in i)if(i.hasOwnProperty(u)){if(u==n)for(var r in l)l.hasOwnProperty(r)&&(o[r]=l[r]);o[u]=i[u]}return t.languages.DFS(t.languages,function(n,l){l===a[e]&&n!=e&&(this[n]=o)}),a[e]=o},DFS:function(e,n,l,a){for(var i in a=a||{},e)e.hasOwnProperty(i)&&(n.call(e,i,e[i],l||i),"Object"!==t.util.type(e[i])||a[t.util.objId(e[i])]?"Array"!==t.util.type(e[i])||a[t.util.objId(e[i])]||(a[t.util.objId(e[i])]=!0,t.languages.DFS(e[i],n,i,a)):(a[t.util.objId(e[i])]=!0,t.languages.DFS(e[i],n,null,a)))}},plugins:{},highlightAll:function(e,n){t.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,l){var a={callback:l,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};t.hooks.run("before-highlightall",a);for(var i,r=a.elements||e.querySelectorAll(a.selector),o=0;i=r[o++];)t.highlightElement(i,!0===n,a.callback)},highlightElement:function(n,a,i){for(var r,o,u=n;u&&!e.test(u.className);)u=u.parentNode;u&&(r=(u.className.match(e)||[,""])[1].toLowerCase(),o=t.languages[r]),n.className=n.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,n.parentNode&&/pre/i.test((u=n.parentNode).nodeName)&&(u.className=u.className.replace(e,"").replace(/\s+/g," ")+" language-"+r);var s={element:n,language:r,grammar:o,code:n.textContent};if(t.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(t.hooks.run("before-highlight",s),s.element.textContent=s.code,t.hooks.run("after-highlight",s)),void t.hooks.run("complete",s);if(t.hooks.run("before-highlight",s),a&&l.Worker){var c=new Worker(t.filename);c.onmessage=function(e){s.highlightedCode=e.data,t.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),t.hooks.run("after-highlight",s),t.hooks.run("complete",s)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=t.highlight(s.code,s.grammar,s.language),t.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(n),t.hooks.run("after-highlight",s),t.hooks.run("complete",s)},highlight:function(e,n,l){var i={code:e,grammar:n,language:l};return t.hooks.run("before-tokenize",i),i.tokens=t.tokenize(i.code,i.grammar),t.hooks.run("after-tokenize",i),a.stringify(t.util.encode(i.tokens),i.language)},matchGrammar:function(e,n,l,a,i,r,o){var u=t.Token;for(var s in l)if(l.hasOwnProperty(s)&&l[s]){if(s==o)return;var c=l[s];c="Array"===t.util.type(c)?c:[c];for(var d=0;d<c.length;++d){var g=c[d],m=g.inside,p=!!g.lookbehind,b=!!g.greedy,h=0,f=g.alias;if(b&&!g.pattern.global){var y=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,y+"g")}g=g.pattern||g;for(var k=a,v=i;k<n.length;v+=n[k].length,++k){var x=n[k];if(n.length>e.length)return;if(!(x instanceof u)){if(b&&k!=n.length-1){if(g.lastIndex=v,!(C=g.exec(e)))break;for(var w=C.index+(p?C[1].length:0),S=C.index+C[0].length,R=k,A=v,F=n.length;R<F&&(A<S||!n[R].type&&!n[R-1].greedy);++R)w>=(A+=n[R].length)&&(++k,v=A);if(n[k]instanceof u)continue;T=R-k,x=e.slice(v,A),C.index-=v}else{g.lastIndex=0;var C=g.exec(x),T=1}if(C){p&&(h=C[1]?C[1].length:0),S=(w=C.index+h)+(C=C[0].slice(h)).length;var j=x.slice(0,w),E=x.slice(S),P=[k,T];j&&(++k,v+=j.length,P.push(j));var N=new u(s,m?t.tokenize(C,m):C,f,C,b);if(P.push(N),E&&P.push(E),Array.prototype.splice.apply(n,P),1!=T&&t.matchGrammar(e,n,l,k,v,!0,s),r)break}else if(r)break}}}}},tokenize:function(e,n,l){var a=[e],i=n.rest;if(i){for(var r in i)n[r]=i[r];delete n.rest}return t.matchGrammar(e,a,n,0,0,!1),a},hooks:{all:{},add:function(e,n){var l=t.hooks.all;l[e]=l[e]||[],l[e].push(n)},run:function(e,n){var l=t.hooks.all[e];if(l&&l.length)for(var a,i=0;a=l[i++];)a(n)}}},a=t.Token=function(e,n,l,t,a){this.type=e,this.content=n,this.alias=l,this.length=0|(t||"").length,this.greedy=!!a};if(a.stringify=function(e,n,l){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(l){return a.stringify(l,n,e)}).join("");var i={type:e.type,content:a.stringify(e.content,n,l),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:l};if(e.alias){var r="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,r)}t.hooks.run("wrap",i);var o=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(o?" "+o:"")+">"+i.content+"</"+i.tag+">"},!l.document)return l.addEventListener?(t.disableWorkerMessageHandler||l.addEventListener("message",function(e){var n=JSON.parse(e.data),a=n.language,i=n.immediateClose;l.postMessage(t.highlight(n.code,t.languages[a],a)),i&&l.close()},!1),l.Prism):l.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(t.filename=i.src,t.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(t.highlightAll):window.setTimeout(t.highlightAll,16):document.addEventListener("DOMContentLoaded",t.highlightAll))),l.Prism}();void 0!==e&&e.exports&&(e.exports=t),"undefined"!=typeof global&&(global.Prism=t),t.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),t.languages.xml=t.languages.markup,t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},t.languages.css.atrule.inside.rest=t.languages.css,t.languages.markup&&(t.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:t.languages.css,alias:"language-css",greedy:!0}}),t.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:t.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:t.languages.css}},alias:"language-css"}},t.languages.markup.tag)),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),t.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),t.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),t.languages.javascript["template-string"].inside.interpolation.inside.rest=t.languages.javascript,t.languages.markup&&t.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:t.languages.javascript,alias:"language-javascript",greedy:!0}}),t.languages.js=t.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(n){for(var l,a=n.getAttribute("data-src"),i=n,r=/\blang(?:uage)?-([\w-]+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(l=(n.className.match(r)||[,""])[1]),!l){var o=(a.match(/\.(\w+)$/)||[,""])[1];l=e[o]||o}var u=document.createElement("code");u.className="language-"+l,n.textContent="",u.textContent="Loading\u2026",n.appendChild(u);var s=new XMLHttpRequest;s.open("GET",a,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(u.textContent=s.responseText,t.highlightElement(u)):u.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},s.send(null)}),t.plugins.toolbar&&t.plugins.toolbar.registerButton("download-file",function(e){var n=e.element.parentNode;if(n&&/pre/i.test(n.nodeName)&&n.hasAttribute("data-src")&&n.hasAttribute("data-download-link")){var l=n.getAttribute("data-src"),t=document.createElement("a");return t.textContent=n.getAttribute("data-download-link-label")||"Download",t.setAttribute("download",""),t.href=l,t}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);