(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{RQvH:function(e,l,n){"use strict";n.r(l);var t=n("CcnG"),a=function(){function e(e){this.http=e,this.getHtmlAndTypeScriptCode()}return e.prototype.getDta=function(){var e=this;this.asyncFlag=!0,setTimeout(function(){e.asyncFlag=!1},3e3)},e.prototype.getHtmlAndTypeScriptCode=function(){var e,l,n=this;this.http.get("assets/data/code/layout/fieldset/fieldset.html",{responseType:"text"}).subscribe(function(l){e=l},function(e){},function(){n.htmlCode=e}),this.http.get("assets/data/code/layout/fieldset/fieldset.text",{responseType:"text"}).subscribe(function(e){l=e},function(e){},function(){n.typeScriptCode=l})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e}(),i=function(){},r=n("gTgE"),u=n("pMnS"),o=n("U89g"),s=n("d2mR"),c=n("O4vx"),d=n("gIcY"),g=n("Ip0R"),p=n("t/Na"),m=t.Qa({encapsulation:2,styles:[],data:{}});function h(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),t.Ra(2,4243456,null,0,s.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.htmlCode,"html")},null)}function b(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),t.Ra(2,4243456,null,0,s.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.typeScriptCode,"typescript")},null)}function f(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,85,"amexio-card",[["header","true"]],null,null,null,r.bc,r.k)),t.Ra(1,5488640,null,3,c.j,[t.F],{header:[0,"header"]},null),t.ib(603979776,1,{amexioHeader:1}),t.ib(603979776,2,{amexioBody:1}),t.ib(603979776,3,{amexioFooter:1}),(e()(),t.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,r.mc,r.v)),t.Ra(6,114688,[[1,4]],0,c.A,[],null,null),(e()(),t.kb(-1,0,[" Fieldset "])),(e()(),t.Sa(8,0,null,1,77,"amexio-body",[],null,null,null,r.Vb,r.e)),t.Ra(9,114688,[[2,4]],0,c.d,[],null,null),(e()(),t.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),t.kb(-1,null,["A FieldSet is a great way to visually separate elements of a form. It's normally used when you have a form with fields that can be divided into groups.Fieldset can optionally have a title at the top"])),(e()(),t.Sa(12,0,null,0,73,"amexio-tab-view",[],null,null,null,r.xc,r.G)),t.Ra(13,5488640,null,2,c.Q,[t.F,t.k,t.F],null,null),t.ib(603979776,4,{queryTabs:1}),t.ib(603979776,5,{queryAction:1}),(e()(),t.Sa(16,0,null,1,29,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,r.yc,r.H)),t.Ra(17,114688,[[4,4]],0,c.R,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),t.Sa(18,0,null,0,27,"amexio-row",[],null,null,null,r.tc,r.C)),t.Ra(19,1163264,null,0,c.M,[],null,null),(e()(),t.Sa(20,0,null,0,25,"amexio-column",[],[[1,"class",0]],null,null,r.dc,r.m)),t.Ra(21,114688,null,0,c.m,[],{size:[0,"size"]},null),(e()(),t.Sa(22,0,null,0,23,"amexio-fieldset",[["title","Employee Registration"]],null,null,null,r.ec,r.n)),t.Ra(23,114688,null,0,c.q,[],{collapsible:[0,"collapsible"],title:[1,"title"]},null),(e()(),t.Sa(24,0,null,0,13,"amexio-row",[],null,null,null,r.tc,r.C)),t.Ra(25,1163264,null,0,c.M,[],null,null),(e()(),t.Sa(26,0,null,0,5,"amexio-column",[],[[1,"class",0]],null,null,r.dc,r.m)),t.Ra(27,114688,null,0,c.m,[],{size:[0,"size"]},null),(e()(),t.Sa(28,0,null,0,3,"amexio-text-input",[["name","country"]],null,null,null,r.Vd,r.Eb)),t.hb(5120,null,d.p,function(e){return[e]},[c.uc]),t.hb(5120,null,d.o,function(e){return[e]},[c.uc]),t.Ra(31,114688,null,0,c.uc,[],{fieldlabel:[0,"fieldlabel"],minlength:[1,"minlength"],maxlength:[2,"maxlength"],allowblank:[3,"allowblank"],errormsg:[4,"errormsg"],minerrormsg:[5,"minerrormsg"],maxerrormsg:[6,"maxerrormsg"],placeholder:[7,"placeholder"],iconfeedback:[8,"iconfeedback"],enablepopover:[9,"enablepopover"],name:[10,"name"]},null),(e()(),t.Sa(32,0,null,0,5,"amexio-column",[],[[1,"class",0]],null,null,r.dc,r.m)),t.Ra(33,114688,null,0,c.m,[],{size:[0,"size"]},null),(e()(),t.Sa(34,0,null,0,3,"amexio-text-input",[["name","name"]],null,null,null,r.Vd,r.Eb)),t.hb(5120,null,d.p,function(e){return[e]},[c.uc]),t.hb(5120,null,d.o,function(e){return[e]},[c.uc]),t.Ra(37,114688,null,0,c.uc,[],{fieldlabel:[0,"fieldlabel"],minlength:[1,"minlength"],maxlength:[2,"maxlength"],allowblank:[3,"allowblank"],errormsg:[4,"errormsg"],minerrormsg:[5,"minerrormsg"],maxerrormsg:[6,"maxerrormsg"],placeholder:[7,"placeholder"],iconfeedback:[8,"iconfeedback"],enablepopover:[9,"enablepopover"],name:[10,"name"]},null),(e()(),t.Sa(38,0,null,0,7,"amexio-row",[],null,null,null,r.tc,r.C)),t.Ra(39,1163264,null,0,c.M,[],null,null),(e()(),t.Sa(40,0,null,0,5,"amexio-column",[],[[1,"class",0]],null,null,r.dc,r.m)),t.Ra(41,114688,null,0,c.m,[],{size:[0,"size"]},null),(e()(),t.Sa(42,0,null,0,3,"amexio-textarea-input",[["name","Address"]],null,null,null,r.de,r.Mb)),t.hb(5120,null,d.p,function(e){return[e]},[c.Ec]),t.hb(5120,null,d.o,function(e){return[e]},[c.Ec]),t.Ra(45,114688,null,0,c.Ec,[],{fieldlabel:[0,"fieldlabel"],rows:[1,"rows"],columns:[2,"columns"],allowblank:[3,"allowblank"],errormsg:[4,"errormsg"],placeholder:[5,"placeholder"],iconfeedback:[6,"iconfeedback"],enablepopover:[7,"enablepopover"],name:[8,"name"]},null),(e()(),t.Sa(46,0,null,1,20,"amexio-tab",[["title","API Reference"]],null,null,null,r.yc,r.H)),t.Ra(47,114688,[[4,4]],0,c.R,[],{title:[0,"title"]},null),(e()(),t.Sa(48,0,null,0,18,"amexio-datagrid",[["title","Properties<amexio-fieldset>"]],null,null,null,r.Od,r.xb)),t.Ra(49,1294336,null,1,c.jc,[t.l,c.Pa,t.i,t.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,6,{columnRef:1}),(e()(),t.Sa(51,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Pd,r.yb)),t.Ra(52,49152,[[6,4]],2,c.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,7,{headerTemplate:0}),t.ib(335544320,8,{bodyTemplate:0}),(e()(),t.Sa(55,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Pd,r.yb)),t.Ra(56,49152,[[6,4]],2,c.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,9,{headerTemplate:0}),t.ib(335544320,10,{bodyTemplate:0}),(e()(),t.Sa(59,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Pd,r.yb)),t.Ra(60,49152,[[6,4]],2,c.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,11,{headerTemplate:0}),t.ib(335544320,12,{bodyTemplate:0}),(e()(),t.Sa(63,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Pd,r.yb)),t.Ra(64,49152,[[6,4]],2,c.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,13,{headerTemplate:0}),t.ib(335544320,14,{bodyTemplate:0}),(e()(),t.Sa(67,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,r.yc,r.H)),t.Ra(68,114688,[[4,4]],0,c.R,[],{title:[0,"title"]},null),(e()(),t.Sa(69,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),t.Sa(70,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,r.Ac,r.J)),t.Ra(71,5357568,null,1,c.V,[t.F],null,null),t.ib(603979776,15,{queryTabs:1}),(e()(),t.Sa(73,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,r.yc,r.H)),t.Ra(74,114688,[[15,4]],0,c.R,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),t.Ja(16777216,null,0,1,null,h)),t.Ra(76,16384,null,0,g.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(e()(),t.Sa(77,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,r.yc,r.H)),t.Ra(78,114688,[[15,4]],0,c.R,[],{title:[0,"title"]},null),(e()(),t.Ja(16777216,null,0,1,null,b)),t.Ra(80,16384,null,0,g.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(e()(),t.Sa(81,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,r.yc,r.H)),t.Ra(82,114688,[[4,4]],0,c.R,[],{title:[0,"title"]},null),(e()(),t.Sa(83,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),t.kb(-1,null,["Amexio Sandbox"])),(e()(),t.Sa(85,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-fieldset?embed=1&file=app/panels/fieldset/fieldset.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,l){var n=l.component;e(l,1,0,"true"),e(l,6,0),e(l,9,0),e(l,13,0),e(l,17,0,"Demo","true"),e(l,19,0),e(l,21,0,12),e(l,23,0,!0,"Employee Registration"),e(l,25,0),e(l,27,0,6),e(l,31,1,["Name",3,15,!1,"Please enter name","Name should be minimum 3 characters","Name should be less than 15 characters","Enter name",!0,!0,"country"]),e(l,33,0,6),e(l,37,1,["Surname",3,15,!1,"Please enter Surname","Surname should be minimum 3 characters","Surname should be less than 15 characters","Enter surname",!0,!0,"name"]),e(l,39,0),e(l,41,0,6),e(l,45,0,"Address","4","2",!1,"Please enter address","Enter address",!0,!0,"Address"),e(l,47,0,"API Reference"),e(l,49,0,"Properties<amexio-fieldset>","assets/apireference/layout/fieldset/fieldset.json","get","properties",!1,!1),e(l,52,0,"Name","name",!1,"string",15),e(l,56,0,"Type","type",!1,"string",10),e(l,60,0,"Default","default",!1,"string",10),e(l,64,0,"Description","description",!1,"string",65),e(l,68,0,"Source"),e(l,71,0),e(l,74,0,"HTML",!0),e(l,76,0,n.htmlCode),e(l,78,0,"Type Script"),e(l,80,0,n.typeScriptCode),e(l,82,0,"Live")},function(e,l){e(l,20,0,t.cb(l,21).role),e(l,26,0,t.cb(l,27).role),e(l,32,0,t.cb(l,33).role),e(l,40,0,t.cb(l,41).role)})}var y=t.Oa("fieldset-demo",a,function(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,1,"fieldset-demo",[],null,null,null,f,m)),t.Ra(1,49152,null,0,a,[p.c],null,null)],null,null)},{},{},[]),x=n("ZYCi");n.d(l,"FieldSetDemoModuleNgFactory",function(){return v});var v=t.Pa(i,[],function(e){return t.Za([t.ab(512,t.k,t.Ea,[[8,[r.a,u.a,y]],[3,t.k],t.z]),t.ab(4608,g.o,g.n,[t.w,[2,g.x]]),t.ab(4608,p.i,p.o,[g.d,t.D,p.m]),t.ab(4608,p.p,p.p,[p.i,p.n]),t.ab(5120,p.a,function(e){return[e]},[p.p]),t.ab(4608,p.l,p.l,[]),t.ab(6144,p.j,null,[p.l]),t.ab(4608,p.h,p.h,[p.j]),t.ab(6144,p.b,null,[p.h]),t.ab(4608,p.f,p.k,[p.b,t.s]),t.ab(4608,p.c,p.c,[p.f]),t.ab(4608,d.G,d.G,[]),t.ab(4608,c.Pa,c.Pa,[p.c]),t.ab(4608,c.Za,c.Za,[t.D]),t.ab(4608,c.gb,c.gb,[]),t.ab(4608,c.z,c.z,[]),t.ab(4608,c.Ab,c.Ab,[]),t.ab(4608,d.f,d.f,[]),t.ab(1073742336,g.c,g.c,[]),t.ab(1073742336,p.e,p.e,[]),t.ab(1073742336,p.d,p.d,[]),t.ab(1073742336,d.D,d.D,[]),t.ab(1073742336,d.l,d.l,[]),t.ab(1073742336,s.b,s.b,[]),t.ab(1073742336,c.B,c.B,[]),t.ab(1073742336,c.w,c.w,[]),t.ab(1073742336,c.E,c.E,[]),t.ab(1073742336,c.G,c.G,[]),t.ab(1073742336,d.z,d.z,[]),t.ab(1073742336,c.J,c.J,[]),t.ab(1073742336,c.o,c.o,[]),t.ab(1073742336,c.X,c.X,[]),t.ab(1073742336,x.n,x.n,[[2,x.t],[2,x.m]]),t.ab(1073742336,i,i,[]),t.ab(256,p.m,"XSRF-TOKEN",[]),t.ab(256,p.n,"X-XSRF-TOKEN",[]),t.ab(1024,x.i,function(){return[[{path:"",component:a}]]},[])])})},U89g:function(e,l,n){"use strict";n.d(l,"a",function(){return a}),n.d(l,"b",function(){return i});var t=n("CcnG"),a=(n("d2mR"),n("Ip0R"),t.Qa({encapsulation:2,styles:[],data:{}}));function i(e){return t.mb(0,[],null,null)}},XIHC:function(e,l){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,l,n){"use strict";n.d(l,"a",function(){return t}),n.d(l,"b",function(){return a}),n("wZee"),n("XIHC");var t=function(){function e(e,l){this._renderer=e,this._el=l,this.nativeElement=l.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),a=function(){}},wZee:function(e,l){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},t=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,l=0,t=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++l}),e.__id},clone:function(e,l){var n=t.util.type(e);switch(l=l||{},n){case"Object":if(l[t.util.objId(e)])return l[t.util.objId(e)];var a={};for(var i in l[t.util.objId(e)]=a,e)e.hasOwnProperty(i)&&(a[i]=t.util.clone(e[i],l));return a;case"Array":return l[t.util.objId(e)]?l[t.util.objId(e)]:(a=[],l[t.util.objId(e)]=a,e.forEach(function(e,n){a[n]=t.util.clone(e,l)}),a)}return e}},languages:{extend:function(e,l){var n=t.util.clone(t.languages[e]);for(var a in l)n[a]=l[a];return n},insertBefore:function(e,l,n,a){var i=(a=a||t.languages)[e];if(2==arguments.length){for(var r in n=arguments[1])n.hasOwnProperty(r)&&(i[r]=n[r]);return i}var u={};for(var o in i)if(i.hasOwnProperty(o)){if(o==l)for(var r in n)n.hasOwnProperty(r)&&(u[r]=n[r]);u[o]=i[o]}return t.languages.DFS(t.languages,function(l,n){n===a[e]&&l!=e&&(this[l]=u)}),a[e]=u},DFS:function(e,l,n,a){for(var i in a=a||{},e)e.hasOwnProperty(i)&&(l.call(e,i,e[i],n||i),"Object"!==t.util.type(e[i])||a[t.util.objId(e[i])]?"Array"!==t.util.type(e[i])||a[t.util.objId(e[i])]||(a[t.util.objId(e[i])]=!0,t.languages.DFS(e[i],l,i,a)):(a[t.util.objId(e[i])]=!0,t.languages.DFS(e[i],l,null,a)))}},plugins:{},highlightAll:function(e,l){t.highlightAllUnder(document,e,l)},highlightAllUnder:function(e,l,n){var a={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};t.hooks.run("before-highlightall",a);for(var i,r=a.elements||e.querySelectorAll(a.selector),u=0;i=r[u++];)t.highlightElement(i,!0===l,a.callback)},highlightElement:function(l,a,i){for(var r,u,o=l;o&&!e.test(o.className);)o=o.parentNode;o&&(r=(o.className.match(e)||[,""])[1].toLowerCase(),u=t.languages[r]),l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,l.parentNode&&/pre/i.test((o=l.parentNode).nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+r);var s={element:l,language:r,grammar:u,code:l.textContent};if(t.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(t.hooks.run("before-highlight",s),s.element.textContent=s.code,t.hooks.run("after-highlight",s)),void t.hooks.run("complete",s);if(t.hooks.run("before-highlight",s),a&&n.Worker){var c=new Worker(t.filename);c.onmessage=function(e){s.highlightedCode=e.data,t.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),t.hooks.run("after-highlight",s),t.hooks.run("complete",s)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=t.highlight(s.code,s.grammar,s.language),t.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(l),t.hooks.run("after-highlight",s),t.hooks.run("complete",s)},highlight:function(e,l,n){var i={code:e,grammar:l,language:n};return t.hooks.run("before-tokenize",i),i.tokens=t.tokenize(i.code,i.grammar),t.hooks.run("after-tokenize",i),a.stringify(t.util.encode(i.tokens),i.language)},matchGrammar:function(e,l,n,a,i,r,u){var o=t.Token;for(var s in n)if(n.hasOwnProperty(s)&&n[s]){if(s==u)return;var c=n[s];c="Array"===t.util.type(c)?c:[c];for(var d=0;d<c.length;++d){var g=c[d],p=g.inside,m=!!g.lookbehind,h=!!g.greedy,b=0,f=g.alias;if(h&&!g.pattern.global){var y=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,y+"g")}g=g.pattern||g;for(var x=a,v=i;x<l.length;v+=l[x].length,++x){var k=l[x];if(l.length>e.length)return;if(!(k instanceof o)){if(h&&x!=l.length-1){if(g.lastIndex=v,!(C=g.exec(e)))break;for(var w=C.index+(m?C[1].length:0),S=C.index+C[0].length,F=x,A=v,R=l.length;F<R&&(A<S||!l[F].type&&!l[F-1].greedy);++F)w>=(A+=l[F].length)&&(++x,v=A);if(l[x]instanceof o)continue;E=F-x,k=e.slice(v,A),C.index-=v}else{g.lastIndex=0;var C=g.exec(k),E=1}if(C){m&&(b=C[1]?C[1].length:0),S=(w=C.index+b)+(C=C[0].slice(b)).length;var P=k.slice(0,w),j=k.slice(S),N=[x,E];P&&(++x,v+=P.length,N.push(P));var T=new o(s,p?t.tokenize(C,p):C,f,C,h);if(N.push(T),j&&N.push(j),Array.prototype.splice.apply(l,N),1!=E&&t.matchGrammar(e,l,n,x,v,!0,s),r)break}else if(r)break}}}}},tokenize:function(e,l,n){var a=[e],i=l.rest;if(i){for(var r in i)l[r]=i[r];delete l.rest}return t.matchGrammar(e,a,l,0,0,!1),a},hooks:{all:{},add:function(e,l){var n=t.hooks.all;n[e]=n[e]||[],n[e].push(l)},run:function(e,l){var n=t.hooks.all[e];if(n&&n.length)for(var a,i=0;a=n[i++];)a(l)}}},a=t.Token=function(e,l,n,t,a){this.type=e,this.content=l,this.alias=n,this.length=0|(t||"").length,this.greedy=!!a};if(a.stringify=function(e,l,n){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(n){return a.stringify(n,l,e)}).join("");var i={type:e.type,content:a.stringify(e.content,l,n),tag:"span",classes:["token",e.type],attributes:{},language:l,parent:n};if(e.alias){var r="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,r)}t.hooks.run("wrap",i);var u=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(u?" "+u:"")+">"+i.content+"</"+i.tag+">"},!n.document)return n.addEventListener?(t.disableWorkerMessageHandler||n.addEventListener("message",function(e){var l=JSON.parse(e.data),a=l.language,i=l.immediateClose;n.postMessage(t.highlight(l.code,t.languages[a],a)),i&&n.close()},!1),n.Prism):n.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(t.filename=i.src,t.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(t.highlightAll):window.setTimeout(t.highlightAll,16):document.addEventListener("DOMContentLoaded",t.highlightAll))),n.Prism}();void 0!==e&&e.exports&&(e.exports=t),"undefined"!=typeof global&&(global.Prism=t),t.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),t.languages.xml=t.languages.markup,t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},t.languages.css.atrule.inside.rest=t.languages.css,t.languages.markup&&(t.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:t.languages.css,alias:"language-css",greedy:!0}}),t.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:t.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:t.languages.css}},alias:"language-css"}},t.languages.markup.tag)),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),t.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),t.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),t.languages.javascript["template-string"].inside.interpolation.inside.rest=t.languages.javascript,t.languages.markup&&t.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:t.languages.javascript,alias:"language-javascript",greedy:!0}}),t.languages.js=t.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(l){for(var n,a=l.getAttribute("data-src"),i=l,r=/\blang(?:uage)?-([\w-]+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(n=(l.className.match(r)||[,""])[1]),!n){var u=(a.match(/\.(\w+)$/)||[,""])[1];n=e[u]||u}var o=document.createElement("code");o.className="language-"+n,l.textContent="",o.textContent="Loading\u2026",l.appendChild(o);var s=new XMLHttpRequest;s.open("GET",a,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(o.textContent=s.responseText,t.highlightElement(o)):o.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},s.send(null)}),t.plugins.toolbar&&t.plugins.toolbar.registerButton("download-file",function(e){var l=e.element.parentNode;if(l&&/pre/i.test(l.nodeName)&&l.hasAttribute("data-src")&&l.hasAttribute("data-download-link")){var n=l.getAttribute("data-src"),t=document.createElement("a");return t.textContent=l.getAttribute("data-download-link-label")||"Download",t.setAttribute("download",""),t.href=n,t}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);