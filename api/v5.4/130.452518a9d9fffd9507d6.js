(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{LVu6:function(e,l,t){"use strict";t.r(l);var n=t("CcnG"),a=function(){},i=t("gTgE"),u=t("pMnS"),r=t("Ip0R"),o=t("U89g"),s=t("d2mR"),d=t("O4vx"),c=function(){function e(e){this.http=e,this.getHtmlAndTypeScriptCode()}return e.prototype.onRecordSelect=function(e){this.outputData=e},e.prototype.getHtmlAndTypeScriptCode=function(){var e,l,t,n=this;this.http.get("assets/data/code/forms/taginput/form.html",{responseType:"text"}).subscribe(function(l){e=l},function(e){},function(){n.htmlCode=e}),this.http.get("assets/data/code/forms/taginput/form.text",{responseType:"text"}).subscribe(function(e){l=e},function(e){},function(){n.typeScriptCode=l}),this.http.get("assets/data/componentdata/country.json",{responseType:"text"}).subscribe(function(e){t=e},function(e){},function(){n.dataSource=t})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e}(),g=t("t/Na"),p=n.Qa({encapsulation:2,styles:[],data:{}});function m(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,4,null,null,null,null,null,null,null)),(e()(),n.Sa(1,0,null,null,3,"pre",[],null,null,null,null,null)),(e()(),n.Sa(2,0,null,null,2,"code",[],null,null,null,null,null)),(e()(),n.kb(3,null,["  "," "])),n.eb(0,r.g,[])],null,function(e,l){var t=l.component;e(l,3,0,n.lb(l,3,0,n.cb(l,4).transform(t.outputData)))})}function h(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),n.Ra(2,4243456,null,0,s.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.htmlCode,"html")},null)}function b(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),n.Ra(2,4243456,null,0,s.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.typeScriptCode,"typescript")},null)}function f(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),n.Ra(2,4243456,null,0,s.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.dataSource,"json")},null)}function y(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,107,"amexio-card",[["header","true"]],null,null,null,i.bc,i.k)),n.Ra(1,5488640,null,3,d.j,[n.F],{header:[0,"header"]},null),n.ib(603979776,1,{amexioHeader:1}),n.ib(603979776,2,{amexioBody:1}),n.ib(603979776,3,{amexioFooter:1}),(e()(),n.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),n.Ra(6,114688,[[1,4]],0,d.A,[],null,null),(e()(),n.kb(-1,0,[" Tag Input "])),(e()(),n.Sa(8,0,null,1,99,"amexio-body",[],null,null,null,i.Vb,i.e)),n.Ra(9,114688,[[2,4]],0,d.d,[],null,null),(e()(),n.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),n.kb(-1,null,["Tags based multi input with typeahead facility."])),(e()(),n.Sa(12,0,null,0,95,"amexio-tab-view",[],null,null,null,i.xc,i.G)),n.Ra(13,5488640,null,2,d.Q,[n.F,n.k,n.F],null,null),n.ib(603979776,4,{queryTabs:1}),n.ib(603979776,5,{queryAction:1}),(e()(),n.Sa(16,0,null,1,35,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.yc,i.H)),n.Ra(17,114688,[[4,4]],0,d.R,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),n.Sa(18,0,null,0,33,"amexio-row",[],null,null,null,i.tc,i.C)),n.Ra(19,1163264,null,0,d.M,[],null,null),(e()(),n.Sa(20,0,null,0,31,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,i.dc,i.m)),n.Ra(21,114688,null,0,d.m,[],{size:[0,"size"]},null),(e()(),n.Sa(22,0,null,0,29,"amexio-card",[["header","true"]],null,null,null,i.bc,i.k)),n.Ra(23,5488640,null,3,d.j,[n.F],{header:[0,"header"]},null),n.ib(603979776,6,{amexioHeader:1}),n.ib(603979776,7,{amexioBody:1}),n.ib(603979776,8,{amexioFooter:1}),(e()(),n.Sa(27,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),n.Ra(28,114688,[[6,4]],0,d.A,[],null,null),(e()(),n.kb(-1,0,[" Simple Tags Input "])),(e()(),n.Sa(30,0,null,1,21,"amexio-body",[],null,null,null,i.Vb,i.e)),n.Ra(31,114688,[[7,4]],0,d.d,[],null,null),(e()(),n.Sa(32,0,null,0,19,"amexio-row",[],null,null,null,i.tc,i.C)),n.Ra(33,1163264,null,0,d.M,[],null,null),(e()(),n.Sa(34,0,null,0,3,"amexio-column",[],[[1,"class",0]],null,null,i.dc,i.m)),n.Ra(35,114688,null,0,d.m,[],{size:[0,"size"]},null),(e()(),n.Sa(36,0,null,0,1,"amexio-tag-input",[],null,[[null,"onChange"],["document","click"],["document","touchstart"]],function(e,l,t){var a=!0,i=e.component;return"document:click"===l&&(a=!1!==n.cb(e,37).onElementOutClick(t.target)&&a),"document:touchstart"===l&&(a=!1!==n.cb(e,37).onElementOutClick(t.target)&&a),"onChange"===l&&(a=!1!==i.onRecordSelect(t)&&a),a},i.pd,i.Ya)),n.Ra(37,114688,null,0,d.Bb,[d.Pa,n.l,n.F],{fieldlabel:[0,"fieldlabel"],datareader:[1,"datareader"],httpmethod:[2,"httpmethod"],httpurl:[3,"httpurl"],displayfield:[4,"displayfield"],valuefield:[5,"valuefield"],key:[6,"key"]},{onChange:"onChange"}),(e()(),n.Sa(38,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,i.dc,i.m)),n.Ra(39,114688,null,0,d.m,[],{size:[0,"size"]},null),(e()(),n.Sa(40,0,null,0,11,"amexio-card",[],null,null,null,i.bc,i.k)),n.Ra(41,5488640,null,3,d.j,[n.F],{header:[0,"header"],bodyheight:[1,"bodyheight"]},null),n.ib(603979776,9,{amexioHeader:1}),n.ib(603979776,10,{amexioBody:1}),n.ib(603979776,11,{amexioFooter:1}),(e()(),n.Sa(45,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),n.Ra(46,114688,[[9,4]],0,d.A,[],null,null),(e()(),n.kb(-1,0,[" Output Code "])),(e()(),n.Sa(48,0,null,1,3,"amexio-body",[],null,null,null,i.Vb,i.e)),n.Ra(49,114688,[[10,4]],0,d.d,[],null,null),(e()(),n.Ja(16777216,null,0,1,null,m)),n.Ra(51,16384,null,0,r.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(e()(),n.Sa(52,0,null,1,32,"amexio-tab",[["title","API Reference"]],null,null,null,i.yc,i.H)),n.Ra(53,114688,[[4,4]],0,d.R,[],{title:[0,"title"]},null),(e()(),n.Sa(54,0,null,0,18,"amexio-datagrid",[["title","Properties <amexio-tag-input>"]],null,null,null,i.Od,i.xb)),n.Ra(55,1294336,null,1,d.jc,[n.l,d.Pa,n.i,n.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),n.ib(603979776,12,{columnRef:1}),(e()(),n.Sa(57,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),n.Ra(58,49152,[[12,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,13,{headerTemplate:0}),n.ib(335544320,14,{bodyTemplate:0}),(e()(),n.Sa(61,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),n.Ra(62,49152,[[12,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,15,{headerTemplate:0}),n.ib(335544320,16,{bodyTemplate:0}),(e()(),n.Sa(65,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),n.Ra(66,49152,[[12,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,17,{headerTemplate:0}),n.ib(335544320,18,{bodyTemplate:0}),(e()(),n.Sa(69,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),n.Ra(70,49152,[[12,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,19,{headerTemplate:0}),n.ib(335544320,20,{bodyTemplate:0}),(e()(),n.Sa(73,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),n.Sa(74,0,null,0,10,"amexio-datagrid",[["title","Events <amexio-tag-input>"]],null,null,null,i.Od,i.xb)),n.Ra(75,1294336,null,1,d.jc,[n.l,d.Pa,n.i,n.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),n.ib(603979776,21,{columnRef:1}),(e()(),n.Sa(77,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),n.Ra(78,49152,[[21,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,22,{headerTemplate:0}),n.ib(335544320,23,{bodyTemplate:0}),(e()(),n.Sa(81,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),n.Ra(82,49152,[[21,4]],2,d.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,24,{headerTemplate:0}),n.ib(335544320,25,{bodyTemplate:0}),(e()(),n.Sa(85,0,null,1,17,"amexio-tab",[["title","Source"]],null,null,null,i.yc,i.H)),n.Ra(86,114688,[[4,4]],0,d.R,[],{title:[0,"title"]},null),(e()(),n.Sa(87,0,null,0,15,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),n.Sa(88,0,null,null,14,"amexio-vertical-tab-view",[],null,null,null,i.Ac,i.J)),n.Ra(89,5357568,null,1,d.V,[n.F],null,null),n.ib(603979776,26,{queryTabs:1}),(e()(),n.Sa(91,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.yc,i.H)),n.Ra(92,114688,[[26,4]],0,d.R,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),n.Ja(16777216,null,0,1,null,h)),n.Ra(94,16384,null,0,r.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(e()(),n.Sa(95,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.yc,i.H)),n.Ra(96,114688,[[26,4]],0,d.R,[],{title:[0,"title"]},null),(e()(),n.Ja(16777216,null,0,1,null,b)),n.Ra(98,16384,null,0,r.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(e()(),n.Sa(99,0,null,0,3,"amexio-tab",[["title","Data Source"]],null,null,null,i.yc,i.H)),n.Ra(100,114688,[[26,4]],0,d.R,[],{title:[0,"title"]},null),(e()(),n.Ja(16777216,null,0,1,null,f)),n.Ra(102,16384,null,0,r.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(e()(),n.Sa(103,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.yc,i.H)),n.Ra(104,114688,[[4,4]],0,d.R,[],{title:[0,"title"]},null),(e()(),n.Sa(105,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),n.kb(-1,null,["Amexio Sandbox"])),(e()(),n.Sa(107,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-taginput?embed=1&file=app/forms/taginput/taginput.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,l){var t=l.component;e(l,1,0,"true"),e(l,6,0),e(l,9,0),e(l,13,0),e(l,17,0,"Demo","true"),e(l,19,0),e(l,21,0,"12"),e(l,23,0,"true"),e(l,28,0),e(l,31,0),e(l,33,0),e(l,35,0,6),e(l,37,0,"Country Name","data","get","assets/data/componentdata/country.json","countryName","countryName","countryName"),e(l,39,0,6),e(l,41,0,!0,50),e(l,46,0),e(l,49,0),e(l,51,0,t.outputData),e(l,53,0,"API Reference"),e(l,55,0,"Properties <amexio-tag-input>","assets/apireference/forms/taginput.json","get","properties",!1,!1),e(l,58,0,"Name","name",!1,"string",15),e(l,62,0,"Type","type",!1,"string",10),e(l,66,0,"Default","default",!1,"string",10),e(l,70,0,"Description","description",!1,"string",65),e(l,75,0,"Events <amexio-tag-input>","assets/apireference/forms/taginput.json","get","events",!1),e(l,78,0,"Name","name",!1,"string",20),e(l,82,0,"Description","description",!1,"string",80),e(l,86,0,"Source"),e(l,89,0),e(l,92,0,"HTML",!0),e(l,94,0,t.htmlCode),e(l,96,0,"Type Script"),e(l,98,0,t.typeScriptCode),e(l,100,0,"Data Source"),e(l,102,0,t.dataSource),e(l,104,0,"Live")},function(e,l){e(l,20,0,n.cb(l,21).role),e(l,34,0,n.cb(l,35).role),e(l,38,0,n.cb(l,39).role)})}var x=n.Oa("taginput-demo",c,function(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,1,"taginput-demo",[],null,null,null,y,p)),n.Ra(1,49152,null,0,c,[g.c],null,null)],null,null)},{},{},[]),v=t("gIcY"),k=t("ZYCi");t.d(l,"TagInputDemoModuleNgFactory",function(){return S});var S=n.Pa(a,[],function(e){return n.Za([n.ab(512,n.k,n.Ea,[[8,[i.a,u.a,x]],[3,n.k],n.z]),n.ab(4608,r.o,r.n,[n.w,[2,r.x]]),n.ab(4608,v.G,v.G,[]),n.ab(4608,g.i,g.o,[r.d,n.D,g.m]),n.ab(4608,g.p,g.p,[g.i,g.n]),n.ab(5120,g.a,function(e){return[e]},[g.p]),n.ab(4608,g.l,g.l,[]),n.ab(6144,g.j,null,[g.l]),n.ab(4608,g.h,g.h,[g.j]),n.ab(6144,g.b,null,[g.h]),n.ab(4608,g.f,g.k,[g.b,n.s]),n.ab(4608,g.c,g.c,[g.f]),n.ab(4608,d.Pa,d.Pa,[g.c]),n.ab(4608,d.Za,d.Za,[n.D]),n.ab(4608,d.gb,d.gb,[]),n.ab(4608,d.z,d.z,[]),n.ab(4608,d.Ab,d.Ab,[]),n.ab(4608,v.f,v.f,[]),n.ab(1073742336,r.c,r.c,[]),n.ab(1073742336,v.D,v.D,[]),n.ab(1073742336,v.l,v.l,[]),n.ab(1073742336,g.e,g.e,[]),n.ab(1073742336,g.d,g.d,[]),n.ab(1073742336,s.b,s.b,[]),n.ab(1073742336,d.B,d.B,[]),n.ab(1073742336,d.w,d.w,[]),n.ab(1073742336,d.E,d.E,[]),n.ab(1073742336,d.G,d.G,[]),n.ab(1073742336,v.z,v.z,[]),n.ab(1073742336,d.J,d.J,[]),n.ab(1073742336,d.o,d.o,[]),n.ab(1073742336,d.X,d.X,[]),n.ab(1073742336,k.n,k.n,[[2,k.t],[2,k.m]]),n.ab(1073742336,a,a,[]),n.ab(256,g.m,"XSRF-TOKEN",[]),n.ab(256,g.n,"X-XSRF-TOKEN",[]),n.ab(1024,k.i,function(){return[[{path:"",component:c,pathMatch:"full"}]]},[])])})},U89g:function(e,l,t){"use strict";t.d(l,"a",function(){return a}),t.d(l,"b",function(){return i});var n=t("CcnG"),a=(t("d2mR"),t("Ip0R"),n.Qa({encapsulation:2,styles:[],data:{}}));function i(e){return n.mb(0,[],null,null)}},XIHC:function(e,l){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,l,t){"use strict";t.d(l,"a",function(){return n}),t.d(l,"b",function(){return a}),t("wZee"),t("XIHC");var n=function(){function e(e,l){this._renderer=e,this._el=l,this.nativeElement=l.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),a=function(){}},wZee:function(e,l){var t="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},n=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,l=0,n=t.Prism={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++l}),e.__id},clone:function(e,l){var t=n.util.type(e);switch(l=l||{},t){case"Object":if(l[n.util.objId(e)])return l[n.util.objId(e)];var a={};for(var i in l[n.util.objId(e)]=a,e)e.hasOwnProperty(i)&&(a[i]=n.util.clone(e[i],l));return a;case"Array":return l[n.util.objId(e)]?l[n.util.objId(e)]:(a=[],l[n.util.objId(e)]=a,e.forEach(function(e,t){a[t]=n.util.clone(e,l)}),a)}return e}},languages:{extend:function(e,l){var t=n.util.clone(n.languages[e]);for(var a in l)t[a]=l[a];return t},insertBefore:function(e,l,t,a){var i=(a=a||n.languages)[e];if(2==arguments.length){for(var u in t=arguments[1])t.hasOwnProperty(u)&&(i[u]=t[u]);return i}var r={};for(var o in i)if(i.hasOwnProperty(o)){if(o==l)for(var u in t)t.hasOwnProperty(u)&&(r[u]=t[u]);r[o]=i[o]}return n.languages.DFS(n.languages,function(l,t){t===a[e]&&l!=e&&(this[l]=r)}),a[e]=r},DFS:function(e,l,t,a){for(var i in a=a||{},e)e.hasOwnProperty(i)&&(l.call(e,i,e[i],t||i),"Object"!==n.util.type(e[i])||a[n.util.objId(e[i])]?"Array"!==n.util.type(e[i])||a[n.util.objId(e[i])]||(a[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],l,i,a)):(a[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],l,null,a)))}},plugins:{},highlightAll:function(e,l){n.highlightAllUnder(document,e,l)},highlightAllUnder:function(e,l,t){var a={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",a);for(var i,u=a.elements||e.querySelectorAll(a.selector),r=0;i=u[r++];)n.highlightElement(i,!0===l,a.callback)},highlightElement:function(l,a,i){for(var u,r,o=l;o&&!e.test(o.className);)o=o.parentNode;o&&(u=(o.className.match(e)||[,""])[1].toLowerCase(),r=n.languages[u]),l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+u,l.parentNode&&/pre/i.test((o=l.parentNode).nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+u);var s={element:l,language:u,grammar:r,code:l.textContent};if(n.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(n.hooks.run("before-highlight",s),s.element.textContent=s.code,n.hooks.run("after-highlight",s)),void n.hooks.run("complete",s);if(n.hooks.run("before-highlight",s),a&&t.Worker){var d=new Worker(n.filename);d.onmessage=function(e){s.highlightedCode=e.data,n.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),n.hooks.run("after-highlight",s),n.hooks.run("complete",s)},d.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=n.highlight(s.code,s.grammar,s.language),n.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(l),n.hooks.run("after-highlight",s),n.hooks.run("complete",s)},highlight:function(e,l,t){var i={code:e,grammar:l,language:t};return n.hooks.run("before-tokenize",i),i.tokens=n.tokenize(i.code,i.grammar),n.hooks.run("after-tokenize",i),a.stringify(n.util.encode(i.tokens),i.language)},matchGrammar:function(e,l,t,a,i,u,r){var o=n.Token;for(var s in t)if(t.hasOwnProperty(s)&&t[s]){if(s==r)return;var d=t[s];d="Array"===n.util.type(d)?d:[d];for(var c=0;c<d.length;++c){var g=d[c],p=g.inside,m=!!g.lookbehind,h=!!g.greedy,b=0,f=g.alias;if(h&&!g.pattern.global){var y=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,y+"g")}g=g.pattern||g;for(var x=a,v=i;x<l.length;v+=l[x].length,++x){var k=l[x];if(l.length>e.length)return;if(!(k instanceof o)){if(h&&x!=l.length-1){if(g.lastIndex=v,!(C=g.exec(e)))break;for(var S=C.index+(m?C[1].length:0),w=C.index+C[0].length,R=x,F=v,A=l.length;R<A&&(F<w||!l[R].type&&!l[R-1].greedy);++R)S>=(F+=l[R].length)&&(++x,v=F);if(l[x]instanceof o)continue;j=R-x,k=e.slice(v,F),C.index-=v}else{g.lastIndex=0;var C=g.exec(k),j=1}if(C){m&&(b=C[1]?C[1].length:0),w=(S=C.index+b)+(C=C[0].slice(b)).length;var T=k.slice(0,S),P=k.slice(w),N=[x,j];T&&(++x,v+=T.length,N.push(T));var E=new o(s,p?n.tokenize(C,p):C,f,C,h);if(N.push(E),P&&N.push(P),Array.prototype.splice.apply(l,N),1!=j&&n.matchGrammar(e,l,t,x,v,!0,s),u)break}else if(u)break}}}}},tokenize:function(e,l,t){var a=[e],i=l.rest;if(i){for(var u in i)l[u]=i[u];delete l.rest}return n.matchGrammar(e,a,l,0,0,!1),a},hooks:{all:{},add:function(e,l){var t=n.hooks.all;t[e]=t[e]||[],t[e].push(l)},run:function(e,l){var t=n.hooks.all[e];if(t&&t.length)for(var a,i=0;a=t[i++];)a(l)}}},a=n.Token=function(e,l,t,n,a){this.type=e,this.content=l,this.alias=t,this.length=0|(n||"").length,this.greedy=!!a};if(a.stringify=function(e,l,t){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(t){return a.stringify(t,l,e)}).join("");var i={type:e.type,content:a.stringify(e.content,l,t),tag:"span",classes:["token",e.type],attributes:{},language:l,parent:t};if(e.alias){var u="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,u)}n.hooks.run("wrap",i);var r=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(r?" "+r:"")+">"+i.content+"</"+i.tag+">"},!t.document)return t.addEventListener?(n.disableWorkerMessageHandler||t.addEventListener("message",function(e){var l=JSON.parse(e.data),a=l.language,i=l.immediateClose;t.postMessage(n.highlight(l.code,n.languages[a],a)),i&&t.close()},!1),t.Prism):t.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(n.filename=i.src,n.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),t.Prism}();void 0!==e&&e.exports&&(e.exports=n),"undefined"!=typeof global&&(global.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),n.languages.xml=n.languages.markup,n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},n.languages.css.atrule.inside.rest=n.languages.css,n.languages.markup&&(n.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:n.languages.css,alias:"language-css",greedy:!0}}),n.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:n.languages.css}},alias:"language-css"}},n.languages.markup.tag)),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),n.languages.javascript["template-string"].inside.interpolation.inside.rest=n.languages.javascript,n.languages.markup&&n.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:n.languages.javascript,alias:"language-javascript",greedy:!0}}),n.languages.js=n.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(l){for(var t,a=l.getAttribute("data-src"),i=l,u=/\blang(?:uage)?-([\w-]+)\b/i;i&&!u.test(i.className);)i=i.parentNode;if(i&&(t=(l.className.match(u)||[,""])[1]),!t){var r=(a.match(/\.(\w+)$/)||[,""])[1];t=e[r]||r}var o=document.createElement("code");o.className="language-"+t,l.textContent="",o.textContent="Loading\u2026",l.appendChild(o);var s=new XMLHttpRequest;s.open("GET",a,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(o.textContent=s.responseText,n.highlightElement(o)):o.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},s.send(null)}),n.plugins.toolbar&&n.plugins.toolbar.registerButton("download-file",function(e){var l=e.element.parentNode;if(l&&/pre/i.test(l.nodeName)&&l.hasAttribute("data-src")&&l.hasAttribute("data-download-link")){var t=l.getAttribute("data-src"),n=document.createElement("a");return n.textContent=l.getAttribute("data-download-link-label")||"Download",n.setAttribute("download",""),n.href=t,n}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);