(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{U89g:function(e,l,t){"use strict";t.d(l,"a",function(){return a}),t.d(l,"b",function(){return i});var n=t("CcnG"),a=(t("d2mR"),t("Ip0R"),n.Qa({encapsulation:2,styles:[],data:{}}));function i(e){return n.mb(0,[],null,null)}},XIHC:function(e,l){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},ar60:function(e,l,t){"use strict";t.r(l);var n=t("CcnG"),a=function(){},i=t("gTgE"),u=t("pMnS"),r=t("U89g"),o=t("d2mR"),s=t("O4vx"),c=t("Ip0R"),d=function(){function e(e){this.http=e,this.gaugeChartData=[["Label","Value"],["Memory",80],["CPU",55],["Network",68]],this.getHtmlAndTypeScriptCode()}return e.prototype.getHtmlAndTypeScriptCode=function(){var e,l,t=this;this.http.get("assets/data/code/dashboard/datapoint/datapoint.html",{responseType:"text"}).subscribe(function(l){e=l},function(e){},function(){t.htmlCode=e}),this.http.get("assets/data/code/dashboard/datapoint/datapoint.text",{responseType:"text"}).subscribe(function(e){l=e},function(e){},function(){t.typeScriptCode=l})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e.prototype.ngOnInit=function(){},e}(),g=t("t/Na"),p=n.Qa({encapsulation:2,styles:[],data:{}});function m(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,r.b,r.a)),n.Ra(2,4243456,null,0,o.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.htmlCode,"html")},null)}function h(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,r.b,r.a)),n.Ra(2,4243456,null,0,o.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.typeScriptCode,"typescript")},null)}function b(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,122,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(e,l,t){var a=!0;return"document:click"===l&&(a=!1!==n.cb(e,1).onWindowClick()&&a),"document:scroll"===l&&(a=!1!==n.cb(e,1).onscroll()&&a),a},i.cc,i.k)),n.Ra(1,5357568,null,3,s.j,[],{header:[0,"header"]},null),n.ib(603979776,1,{amexioHeader:1}),n.ib(603979776,2,{amexioBody:1}),n.ib(603979776,3,{amexioFooter:1}),(e()(),n.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,i.nc,i.v)),n.Ra(6,114688,[[1,4]],0,s.A,[],null,null),(e()(),n.kb(-1,0,[" Data Point "])),(e()(),n.Sa(8,0,null,1,114,"amexio-body",[],null,null,null,i.Wb,i.e)),n.Ra(9,114688,[[2,4]],0,s.d,[],null,null),(e()(),n.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),n.kb(-1,null,["Represent the summary of the data in bullet point format."])),(e()(),n.Sa(12,16777216,null,0,110,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(e,l,t){var a=!0;return"document:click"===l&&(a=!1!==n.cb(e,13).onWindowClick()&&a),"document:scroll"===l&&(a=!1!==n.cb(e,13).onscroll()&&a),a},i.yc,i.G)),n.Ra(13,5357568,null,2,s.Q,[n.F,n.k,n.R],null,null),n.ib(603979776,4,{queryTabs:1}),n.ib(603979776,5,{queryAction:1}),(e()(),n.Sa(16,0,null,1,47,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.zc,i.H)),n.Ra(17,114688,[[4,4]],0,s.R,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),n.Sa(18,0,null,0,45,"amexio-row",[],null,null,null,i.uc,i.C)),n.Ra(19,1163264,null,0,s.M,[],null,null),(e()(),n.Sa(20,0,null,0,21,"amexio-column",[],[[1,"class",0]],null,null,i.ec,i.m)),n.Ra(21,114688,null,0,s.m,[],{size:[0,"size"]},null),(e()(),n.Sa(22,0,null,0,19,"amexio-datapoints",[],null,null,null,i.Wc,i.Ea)),n.Ra(23,114688,null,0,s.Ya,[],{south:[0,"south"],west:[1,"west"],center:[2,"center"],east:[3,"east"],amexiocolor:[4,"amexiocolor"]},null),(e()(),n.Sa(24,0,null,1,3,"amexio-west",[],null,null,null,i.Vc,i.Da)),n.Ra(25,114688,null,0,s.Xa,[],{contentalign:[0,"contentalign"]},null),(e()(),n.Sa(26,0,null,0,1,"amexio-image",[],null,null,null,i.Hd,i.pb)),n.Ra(27,114688,null,0,s.Ub,[],{iconclass:[0,"iconclass"]},null),(e()(),n.Sa(28,0,null,2,8,"amexio-center",[],null,null,null,i.Tc,i.Ba)),n.Ra(29,114688,null,0,s.Ta,[],{contentalign:[0,"contentalign"]},null),(e()(),n.Sa(30,0,null,0,2,"amexio-label",[["size","large-bold"]],null,null,null,i.td,i.bb)),n.Ra(31,114688,null,0,s.Eb,[],{styleClass:[0,"styleClass"]},null),(e()(),n.kb(-1,0,["$200 Million"])),(e()(),n.Sa(33,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),n.Sa(34,0,null,0,2,"amexio-label",[["size","medium"]],null,null,null,i.td,i.bb)),n.Ra(35,114688,null,0,s.Eb,[],{styleClass:[0,"styleClass"]},null),(e()(),n.kb(-1,0,["Sales Volume"])),(e()(),n.Sa(37,0,null,4,4,"amexio-south",[],null,null,null,i.Uc,i.Ca)),n.Ra(38,114688,null,0,s.Wa,[],{contentalign:[0,"contentalign"],cclass:[1,"cclass"]},null),(e()(),n.Sa(39,0,null,0,2,"amexio-label",[],null,null,null,i.td,i.bb)),n.Ra(40,114688,null,0,s.Eb,[],null,null),(e()(),n.kb(-1,0,["10% More than last year"])),(e()(),n.Sa(42,0,null,0,21,"amexio-column",[],[[1,"class",0]],null,null,i.ec,i.m)),n.Ra(43,114688,null,0,s.m,[],{size:[0,"size"]},null),(e()(),n.Sa(44,0,null,0,19,"amexio-datapoints",[],null,null,null,i.Wc,i.Ea)),n.Ra(45,114688,null,0,s.Ya,[],{south:[0,"south"],west:[1,"west"],center:[2,"center"],east:[3,"east"]},null),(e()(),n.Sa(46,0,null,1,3,"amexio-west",[],null,null,null,i.Vc,i.Da)),n.Ra(47,114688,null,0,s.Xa,[],{contentalign:[0,"contentalign"]},null),(e()(),n.Sa(48,0,null,0,1,"amexio-image",[],null,null,null,i.Hd,i.pb)),n.Ra(49,114688,null,0,s.Ub,[],{iconclass:[0,"iconclass"]},null),(e()(),n.Sa(50,0,null,2,8,"amexio-center",[],null,null,null,i.Tc,i.Ba)),n.Ra(51,114688,null,0,s.Ta,[],{contentalign:[0,"contentalign"]},null),(e()(),n.Sa(52,0,null,0,2,"amexio-label",[["size","large-bold"]],null,null,null,i.td,i.bb)),n.Ra(53,114688,null,0,s.Eb,[],{styleClass:[0,"styleClass"]},null),(e()(),n.kb(-1,0,["$10 Million"])),(e()(),n.Sa(55,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),n.Sa(56,0,null,0,2,"amexio-label",[["size","medium"]],null,null,null,i.td,i.bb)),n.Ra(57,114688,null,0,s.Eb,[],{styleClass:[0,"styleClass"]},null),(e()(),n.kb(-1,0,["Sales Revenue"])),(e()(),n.Sa(59,0,null,4,4,"amexio-south",[],null,null,null,i.Uc,i.Ca)),n.Ra(60,114688,null,0,s.Wa,[],{contentalign:[0,"contentalign"]},null),(e()(),n.Sa(61,0,null,0,2,"amexio-label",[],null,null,null,i.td,i.bb)),n.Ra(62,114688,null,0,s.Eb,[],null,null),(e()(),n.kb(-1,0,["5% More than last year"])),(e()(),n.Sa(64,0,null,1,40,"amexio-tab",[["title","API Reference"]],null,null,null,i.zc,i.H)),n.Ra(65,114688,[[4,4]],0,s.R,[],{title:[0,"title"]},null),(e()(),n.Sa(66,0,null,0,18,"amexio-datagrid",[["title","Data Point Properties<amexio-datapoints>"]],null,[["document","scroll"],["document","click"]],function(e,l,t){var a=!0;return"document:scroll"===l&&(a=!1!==n.cb(e,67).onscroll()&&a),"document:click"===l&&(a=!1!==n.cb(e,67).onclick()&&a),a},i.Qd,i.yb)),n.Ra(67,1163264,null,1,s.jc,[n.l,s.Pa,n.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),n.ib(603979776,6,{columnRef:1}),(e()(),n.Sa(69,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Rd,i.zb)),n.Ra(70,49152,[[6,4]],2,s.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,7,{headerTemplate:0}),n.ib(335544320,8,{bodyTemplate:0}),(e()(),n.Sa(73,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Rd,i.zb)),n.Ra(74,49152,[[6,4]],2,s.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,9,{headerTemplate:0}),n.ib(335544320,10,{bodyTemplate:0}),(e()(),n.Sa(77,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Rd,i.zb)),n.Ra(78,49152,[[6,4]],2,s.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,11,{headerTemplate:0}),n.ib(335544320,12,{bodyTemplate:0}),(e()(),n.Sa(81,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Rd,i.zb)),n.Ra(82,49152,[[6,4]],2,s.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,13,{headerTemplate:0}),n.ib(335544320,14,{bodyTemplate:0}),(e()(),n.Sa(85,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),n.Sa(86,0,null,0,18,"amexio-datagrid",[["title"," Data Point Region Properties ( Center, East, South, North, West )"]],null,[["document","scroll"],["document","click"]],function(e,l,t){var a=!0;return"document:scroll"===l&&(a=!1!==n.cb(e,87).onscroll()&&a),"document:click"===l&&(a=!1!==n.cb(e,87).onclick()&&a),a},i.Qd,i.yb)),n.Ra(87,1163264,null,1,s.jc,[n.l,s.Pa,n.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),n.ib(603979776,15,{columnRef:1}),(e()(),n.Sa(89,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Rd,i.zb)),n.Ra(90,49152,[[15,4]],2,s.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,16,{headerTemplate:0}),n.ib(335544320,17,{bodyTemplate:0}),(e()(),n.Sa(93,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Rd,i.zb)),n.Ra(94,49152,[[15,4]],2,s.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,18,{headerTemplate:0}),n.ib(335544320,19,{bodyTemplate:0}),(e()(),n.Sa(97,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Rd,i.zb)),n.Ra(98,49152,[[15,4]],2,s.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,20,{headerTemplate:0}),n.ib(335544320,21,{bodyTemplate:0}),(e()(),n.Sa(101,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Rd,i.zb)),n.Ra(102,49152,[[15,4]],2,s.kc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,22,{headerTemplate:0}),n.ib(335544320,23,{bodyTemplate:0}),(e()(),n.Sa(105,0,null,1,12,"amexio-tab",[["title","Source"]],null,null,null,i.zc,i.H)),n.Ra(106,114688,[[4,4]],0,s.R,[],{title:[0,"title"]},null),(e()(),n.Sa(107,0,null,0,10,"amexio-vertical-tab-view",[],null,null,null,i.Bc,i.J)),n.Ra(108,5357568,null,1,s.V,[n.F],null,null),n.ib(603979776,24,{queryTabs:1}),(e()(),n.Sa(110,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.zc,i.H)),n.Ra(111,114688,[[24,4]],0,s.R,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),n.Ja(16777216,null,0,1,null,m)),n.Ra(113,16384,null,0,c.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(e()(),n.Sa(114,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.zc,i.H)),n.Ra(115,114688,[[24,4]],0,s.R,[],{title:[0,"title"]},null),(e()(),n.Ja(16777216,null,0,1,null,h)),n.Ra(117,16384,null,0,c.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(e()(),n.Sa(118,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.zc,i.H)),n.Ra(119,114688,[[4,4]],0,s.R,[],{title:[0,"title"]},null),(e()(),n.Sa(120,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),n.kb(-1,null,["Amexio Sandbox"])),(e()(),n.Sa(122,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-datapoint"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,l){var t=l.component;e(l,1,0,"true"),e(l,6,0),e(l,9,0),e(l,13,0),e(l,17,0,"Demo","true"),e(l,19,0),e(l,21,0,6),e(l,23,0,!0,!0,!0,!0,"amexio-yellow"),e(l,25,0,"center"),e(l,27,0,"fa fa-line-chart fa-3x"),e(l,29,0,"center"),e(l,31,0,"large-bold"),e(l,35,0,"medium"),e(l,38,0,"center","amexio-yellow-light"),e(l,40,0),e(l,43,0,6),e(l,45,0,!0,!0,!0,!0),e(l,47,0,"center"),e(l,49,0,"fa fa-line-chart fa-3x"),e(l,51,0,"center"),e(l,53,0,"large-bold"),e(l,57,0,"medium"),e(l,60,0,"center"),e(l,62,0),e(l,65,0,"API Reference"),e(l,67,0,"Data Point Properties<amexio-datapoints>","assets/apireference/dashboard/datapoint.json","get","datapoint",!1,!1),e(l,70,0,"Name","name",!1,"string",15),e(l,74,0,"Type","type",!1,"string",10),e(l,78,0,"Default","default",!1,"string",10),e(l,82,0,"Description","description",!1,"string",65),e(l,87,0," Data Point Region Properties ( Center, East, South, North, West )","assets/apireference/dashboard/datapoint.json","get","location",!1,!1),e(l,90,0,"Name","name",!1,"string",15),e(l,94,0,"Type","type",!1,"string",10),e(l,98,0,"Default","default",!1,"string",10),e(l,102,0,"Description","description",!1,"string",65),e(l,106,0,"Source"),e(l,108,0),e(l,111,0,"HTML",!0),e(l,113,0,t.htmlCode),e(l,115,0,"Type Script"),e(l,117,0,t.typeScriptCode),e(l,119,0,"Live")},function(e,l){e(l,20,0,n.cb(l,21).role),e(l,42,0,n.cb(l,43).role)})}var f=n.Oa("datapoint",d,function(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,1,"datapoint",[],null,null,null,b,p)),n.Ra(1,114688,null,0,d,[g.c],null,null)],function(e,l){e(l,1,0)},null)},{},{},[]),y=t("gIcY"),x=t("ZYCi");t.d(l,"DatapointsModuleNgFactory",function(){return k});var k=n.Pa(a,[],function(e){return n.Za([n.ab(512,n.k,n.Ea,[[8,[i.a,u.a,f]],[3,n.k],n.z]),n.ab(4608,c.o,c.n,[n.w,[2,c.x]]),n.ab(4608,y.E,y.E,[]),n.ab(4608,g.i,g.o,[c.d,n.D,g.m]),n.ab(4608,g.p,g.p,[g.i,g.n]),n.ab(5120,g.a,function(e){return[e]},[g.p]),n.ab(4608,g.l,g.l,[]),n.ab(6144,g.j,null,[g.l]),n.ab(4608,g.h,g.h,[g.j]),n.ab(6144,g.b,null,[g.h]),n.ab(4608,g.f,g.k,[g.b,n.s]),n.ab(4608,g.c,g.c,[g.f]),n.ab(4608,s.Pa,s.Pa,[g.c]),n.ab(4608,s.Za,s.Za,[n.D]),n.ab(4608,s.gb,s.gb,[]),n.ab(4608,s.z,s.z,[]),n.ab(4608,s.Ab,s.Ab,[]),n.ab(4608,y.e,y.e,[]),n.ab(4608,s.Sa,s.Sa,[]),n.ab(1073742336,c.c,c.c,[]),n.ab(1073742336,y.B,y.B,[]),n.ab(1073742336,y.k,y.k,[]),n.ab(1073742336,g.e,g.e,[]),n.ab(1073742336,g.d,g.d,[]),n.ab(1073742336,s.B,s.B,[]),n.ab(1073742336,s.w,s.w,[]),n.ab(1073742336,s.E,s.E,[]),n.ab(1073742336,s.G,s.G,[]),n.ab(1073742336,y.x,y.x,[]),n.ab(1073742336,s.J,s.J,[]),n.ab(1073742336,s.o,s.o,[]),n.ab(1073742336,s.X,s.X,[]),n.ab(1073742336,o.b,o.b,[]),n.ab(1073742336,s.n,s.n,[]),n.ab(1073742336,x.n,x.n,[[2,x.t],[2,x.m]]),n.ab(1073742336,a,a,[]),n.ab(256,g.m,"XSRF-TOKEN",[]),n.ab(256,g.n,"X-XSRF-TOKEN",[]),n.ab(1024,x.i,function(){return[[{path:"",component:d,pathMatch:"full"}]]},[])])})},d2mR:function(e,l,t){"use strict";t.d(l,"a",function(){return n}),t.d(l,"b",function(){return a}),t("wZee"),t("XIHC");var n=function(){function e(e,l){this._renderer=e,this._el=l,this.nativeElement=l.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),a=function(){}},wZee:function(e,l){var t="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},n=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,l=0,n=t.Prism={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++l}),e.__id},clone:function(e,l){var t=n.util.type(e);switch(l=l||{},t){case"Object":if(l[n.util.objId(e)])return l[n.util.objId(e)];var a={};for(var i in l[n.util.objId(e)]=a,e)e.hasOwnProperty(i)&&(a[i]=n.util.clone(e[i],l));return a;case"Array":return l[n.util.objId(e)]?l[n.util.objId(e)]:(a=[],l[n.util.objId(e)]=a,e.forEach(function(e,t){a[t]=n.util.clone(e,l)}),a)}return e}},languages:{extend:function(e,l){var t=n.util.clone(n.languages[e]);for(var a in l)t[a]=l[a];return t},insertBefore:function(e,l,t,a){var i=(a=a||n.languages)[e];if(2==arguments.length){for(var u in t=arguments[1])t.hasOwnProperty(u)&&(i[u]=t[u]);return i}var r={};for(var o in i)if(i.hasOwnProperty(o)){if(o==l)for(var u in t)t.hasOwnProperty(u)&&(r[u]=t[u]);r[o]=i[o]}return n.languages.DFS(n.languages,function(l,t){t===a[e]&&l!=e&&(this[l]=r)}),a[e]=r},DFS:function(e,l,t,a){for(var i in a=a||{},e)e.hasOwnProperty(i)&&(l.call(e,i,e[i],t||i),"Object"!==n.util.type(e[i])||a[n.util.objId(e[i])]?"Array"!==n.util.type(e[i])||a[n.util.objId(e[i])]||(a[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],l,i,a)):(a[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],l,null,a)))}},plugins:{},highlightAll:function(e,l){n.highlightAllUnder(document,e,l)},highlightAllUnder:function(e,l,t){var a={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",a);for(var i,u=a.elements||e.querySelectorAll(a.selector),r=0;i=u[r++];)n.highlightElement(i,!0===l,a.callback)},highlightElement:function(l,a,i){for(var u,r,o=l;o&&!e.test(o.className);)o=o.parentNode;o&&(u=(o.className.match(e)||[,""])[1].toLowerCase(),r=n.languages[u]),l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+u,l.parentNode&&/pre/i.test((o=l.parentNode).nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+u);var s={element:l,language:u,grammar:r,code:l.textContent};if(n.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(n.hooks.run("before-highlight",s),s.element.textContent=s.code,n.hooks.run("after-highlight",s)),void n.hooks.run("complete",s);if(n.hooks.run("before-highlight",s),a&&t.Worker){var c=new Worker(n.filename);c.onmessage=function(e){s.highlightedCode=e.data,n.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),n.hooks.run("after-highlight",s),n.hooks.run("complete",s)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=n.highlight(s.code,s.grammar,s.language),n.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(l),n.hooks.run("after-highlight",s),n.hooks.run("complete",s)},highlight:function(e,l,t){var i={code:e,grammar:l,language:t};return n.hooks.run("before-tokenize",i),i.tokens=n.tokenize(i.code,i.grammar),n.hooks.run("after-tokenize",i),a.stringify(n.util.encode(i.tokens),i.language)},matchGrammar:function(e,l,t,a,i,u,r){var o=n.Token;for(var s in t)if(t.hasOwnProperty(s)&&t[s]){if(s==r)return;var c=t[s];c="Array"===n.util.type(c)?c:[c];for(var d=0;d<c.length;++d){var g=c[d],p=g.inside,m=!!g.lookbehind,h=!!g.greedy,b=0,f=g.alias;if(h&&!g.pattern.global){var y=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,y+"g")}g=g.pattern||g;for(var x=a,k=i;x<l.length;k+=l[x].length,++x){var w=l[x];if(l.length>e.length)return;if(!(w instanceof o)){if(h&&x!=l.length-1){if(g.lastIndex=k,!(F=g.exec(e)))break;for(var v=F.index+(m?F[1].length:0),S=F.index+F[0].length,R=x,C=k,A=l.length;R<A&&(C<S||!l[R].type&&!l[R-1].greedy);++R)v>=(C+=l[R].length)&&(++x,k=C);if(l[x]instanceof o)continue;T=R-x,w=e.slice(k,C),F.index-=k}else{g.lastIndex=0;var F=g.exec(w),T=1}if(F){m&&(b=F[1]?F[1].length:0),S=(v=F.index+b)+(F=F[0].slice(b)).length;var E=w.slice(0,v),P=w.slice(S),j=[x,T];E&&(++x,k+=E.length,j.push(E));var z=new o(s,p?n.tokenize(F,p):F,f,F,h);if(j.push(z),P&&j.push(P),Array.prototype.splice.apply(l,j),1!=T&&n.matchGrammar(e,l,t,x,k,!0,s),u)break}else if(u)break}}}}},tokenize:function(e,l,t){var a=[e],i=l.rest;if(i){for(var u in i)l[u]=i[u];delete l.rest}return n.matchGrammar(e,a,l,0,0,!1),a},hooks:{all:{},add:function(e,l){var t=n.hooks.all;t[e]=t[e]||[],t[e].push(l)},run:function(e,l){var t=n.hooks.all[e];if(t&&t.length)for(var a,i=0;a=t[i++];)a(l)}}},a=n.Token=function(e,l,t,n,a){this.type=e,this.content=l,this.alias=t,this.length=0|(n||"").length,this.greedy=!!a};if(a.stringify=function(e,l,t){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(t){return a.stringify(t,l,e)}).join("");var i={type:e.type,content:a.stringify(e.content,l,t),tag:"span",classes:["token",e.type],attributes:{},language:l,parent:t};if(e.alias){var u="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,u)}n.hooks.run("wrap",i);var r=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(r?" "+r:"")+">"+i.content+"</"+i.tag+">"},!t.document)return t.addEventListener?(n.disableWorkerMessageHandler||t.addEventListener("message",function(e){var l=JSON.parse(e.data),a=l.language,i=l.immediateClose;t.postMessage(n.highlight(l.code,n.languages[a],a)),i&&t.close()},!1),t.Prism):t.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(n.filename=i.src,n.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),t.Prism}();void 0!==e&&e.exports&&(e.exports=n),"undefined"!=typeof global&&(global.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),n.languages.xml=n.languages.markup,n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},n.languages.css.atrule.inside.rest=n.languages.css,n.languages.markup&&(n.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:n.languages.css,alias:"language-css",greedy:!0}}),n.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:n.languages.css}},alias:"language-css"}},n.languages.markup.tag)),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),n.languages.javascript["template-string"].inside.interpolation.inside.rest=n.languages.javascript,n.languages.markup&&n.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:n.languages.javascript,alias:"language-javascript",greedy:!0}}),n.languages.js=n.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(l){for(var t,a=l.getAttribute("data-src"),i=l,u=/\blang(?:uage)?-([\w-]+)\b/i;i&&!u.test(i.className);)i=i.parentNode;if(i&&(t=(l.className.match(u)||[,""])[1]),!t){var r=(a.match(/\.(\w+)$/)||[,""])[1];t=e[r]||r}var o=document.createElement("code");o.className="language-"+t,l.textContent="",o.textContent="Loading\u2026",l.appendChild(o);var s=new XMLHttpRequest;s.open("GET",a,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(o.textContent=s.responseText,n.highlightElement(o)):o.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},s.send(null)}),n.plugins.toolbar&&n.plugins.toolbar.registerButton("download-file",function(e){var l=e.element.parentNode;if(l&&/pre/i.test(l.nodeName)&&l.hasAttribute("data-src")&&l.hasAttribute("data-download-link")){var t=l.getAttribute("data-src"),n=document.createElement("a");return n.textContent=l.getAttribute("data-download-link-label")||"Download",n.setAttribute("download",""),n.href=t,n}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);