(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{U89g:function(e,l,n){"use strict";n.d(l,"a",function(){return a}),n.d(l,"b",function(){return u});var t=n("CcnG"),a=(n("d2mR"),n("Ip0R"),t.Qa({encapsulation:2,styles:[],data:{}}));function u(e){return t.mb(0,[],null,null)}},XIHC:function(e,l){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,l,n){"use strict";n.d(l,"a",function(){return t}),n.d(l,"b",function(){return a}),n("wZee"),n("XIHC");var t=function(){function e(e,l){this._renderer=e,this._el=l,this.nativeElement=l.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),a=function(){}},qNET:function(e,l,n){"use strict";n.r(l);var t=n("CcnG"),a=function(){},u=n("gTgE"),i=n("pMnS"),r=n("Ip0R"),o=n("U89g"),s=n("d2mR"),d=n("O4vx"),c=n("gIcY"),p=function(){function e(e){this.http=e,this.getHtmlAndTypeScriptCode()}return e.prototype.getHtmlAndTypeScriptCode=function(){var e,l,n,t=this;this.http.get("assets/data/code/forms/dropdownfilter/form.html",{responseType:"text"}).subscribe(function(l){e=l},function(e){},function(){t.htmlCode=e}),this.http.get("assets/data/code/forms/dropdownfilter/form.text",{responseType:"text"}).subscribe(function(e){l=e},function(e){},function(){t.typeScriptCode=l}),this.http.get("assets/data/componentdata/country.json",{responseType:"text"}).subscribe(function(e){n=e},function(e){},function(){t.dataSource=n})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e}(),g=n("t/Na"),m=t.Qa({encapsulation:2,styles:[],data:{}});function h(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,1,null,null,null,null,null,null,null)),(e()(),t.kb(1,null,[" "," "]))],null,function(e,l){e(l,1,0,l.component.countryCode1)})}function b(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),t.Sa(1,0,null,null,1,"div",[["style","text-decoration: line-through red;"]],null,null,null,null,null)),(e()(),t.kb(2,null,["",""]))],null,function(e,l){e(l,2,0,l.parent.context.row.name)})}function f(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,1,null,null,null,null,null,null,null)),(e()(),t.kb(1,null,[" "," "]))],null,function(e,l){e(l,1,0,l.parent.context.row.name)})}function y(e){return t.mb(0,[(e()(),t.Ja(16777216,null,null,1,null,b)),t.Ra(1,16384,null,0,r.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(e()(),t.Ja(16777216,null,null,1,null,f)),t.Ra(3,16384,null,0,r.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(e()(),t.Ja(0,null,null,0))],function(e,l){e(l,1,0,l.context.row.deprecated),e(l,3,0,!l.context.row.deprecated)},null)}function x(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),t.Ra(2,4243456,null,0,s.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.htmlCode,"html")},null)}function w(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),t.Ra(2,4243456,null,0,s.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.typeScriptCode,"typescript")},null)}function v(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),t.Ra(2,4243456,null,0,s.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.dataSource,"json")},null)}function S(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,114,"amexio-card",[["header","true"]],null,null,null,u.dc,u.k)),t.Ra(1,7585792,null,3,d.j,[t.F],{header:[0,"header"]},null),t.ib(603979776,1,{amexioHeader:1}),t.ib(603979776,2,{amexioBody:1}),t.ib(603979776,3,{amexioFooter:1}),(e()(),t.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,u.pc,u.w)),t.Ra(6,2211840,[[1,4]],0,d.C,[],null,null),(e()(),t.kb(-1,0,[" Dropdown Filter "])),(e()(),t.Sa(8,0,null,1,106,"amexio-body",[],null,null,null,u.Xb,u.e)),t.Ra(9,2211840,[[2,4]],0,d.d,[],null,null),(e()(),t.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),t.kb(-1,null,["Drop-Down component has been created to render N numbers of drop-down items based on data-set configured. Data-set can be configured using HTTP call OR Define fix number of dropdown-items. User can configure different attributes for enabling filter, multi-select, maximum selection in case of multi select. "])),(e()(),t.Sa(12,0,null,0,102,"amexio-tab-view",[],null,null,null,u.Ac,u.H)),t.Ra(13,5488640,null,2,d.S,[t.F,t.k,t.F],null,null),t.ib(603979776,4,{queryTabs:1}),t.ib(603979776,5,{queryAction:1}),(e()(),t.Sa(16,0,null,1,41,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,u.Bc,u.I)),t.Ra(17,114688,[[4,4]],0,d.T,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),t.Sa(18,0,null,0,39,"amexio-row",[],null,null,null,u.wc,u.D)),t.Ra(19,1163264,null,0,d.O,[],null,null),(e()(),t.Sa(20,0,null,0,23,"amexio-column",[["size","6"]],[[1,"class",0]],null,null,u.fc,u.m)),t.Ra(21,114688,null,0,d.m,[],{size:[0,"size"]},null),(e()(),t.Sa(22,0,null,0,21,"amexio-card",[["header","true"]],null,null,null,u.dc,u.k)),t.Ra(23,7585792,null,3,d.j,[t.F],{header:[0,"header"]},null),t.ib(603979776,6,{amexioHeader:1}),t.ib(603979776,7,{amexioBody:1}),t.ib(603979776,8,{amexioFooter:1}),(e()(),t.Sa(27,0,null,0,2,"amexio-header",[],null,null,null,u.pc,u.w)),t.Ra(28,2211840,[[6,4]],0,d.C,[],null,null),(e()(),t.kb(-1,0,[" Dropdown Filter Component "])),(e()(),t.Sa(30,0,null,1,13,"amexio-body",[],null,null,null,u.Xb,u.e)),t.Ra(31,2211840,[[7,4]],0,d.d,[],null,null),(e()(),t.Sa(32,0,null,0,11,"amexio-row",[],null,null,null,u.wc,u.D)),t.Ra(33,1163264,null,0,d.O,[],null,null),(e()(),t.Sa(34,0,null,0,9,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,u.fc,u.m)),t.Ra(35,114688,null,0,d.m,[],{size:[0,"size"]},null),(e()(),t.Sa(36,0,null,0,7,"amexio-dropdown",[["name","countryCode1"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(e,l,n){var t=!0;return"ngModelChange"===l&&(t=!1!==(e.component.countryCode1=n)&&t),t},u.ce,u.Jb)),t.Ra(37,114688,null,1,d.Ic,[d.Ta,t.l,t.F,t.i],{fieldlabel:[0,"fieldlabel"],datareader:[1,"datareader"],httpmethod:[2,"httpmethod"],httpurl:[3,"httpurl"],displayfield:[4,"displayfield"],valuefield:[5,"valuefield"],search:[6,"search"],placeholder:[7,"placeholder"],enablesort:[8,"enablesort"],sort:[9,"sort"],name:[10,"name"]},null),t.ib(335544320,9,{bodyTemplate:0}),t.hb(1024,null,c.o,function(e){return[e]},[d.Ic]),t.hb(1024,null,c.p,function(e){return[e]},[d.Ic]),t.Ra(41,671744,null,0,c.u,[[8,null],[6,c.o],[8,null],[6,c.p]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.hb(2048,null,c.q,null,[c.u]),t.Ra(43,16384,null,0,c.r,[[4,c.q]],null,null),(e()(),t.Sa(44,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,u.fc,u.m)),t.Ra(45,114688,null,0,d.m,[],{size:[0,"size"]},null),(e()(),t.Sa(46,0,null,0,11,"amexio-card",[["header","true"]],null,null,null,u.dc,u.k)),t.Ra(47,7585792,null,3,d.j,[t.F],{header:[0,"header"]},null),t.ib(603979776,10,{amexioHeader:1}),t.ib(603979776,11,{amexioBody:1}),t.ib(603979776,12,{amexioFooter:1}),(e()(),t.Sa(51,0,null,0,2,"amexio-header",[],null,null,null,u.pc,u.w)),t.Ra(52,2211840,[[10,4]],0,d.C,[],null,null),(e()(),t.kb(-1,0,[" Selected Record Data "])),(e()(),t.Sa(54,0,null,1,3,"amexio-body",[],null,null,null,u.Xb,u.e)),t.Ra(55,2211840,[[11,4]],0,d.d,[],null,null),(e()(),t.Ja(16777216,null,0,1,null,h)),t.Ra(57,16384,null,0,r.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(e()(),t.Sa(58,0,null,1,33,"amexio-tab",[["title","API Reference"]],null,null,null,u.Bc,u.I)),t.Ra(59,114688,[[4,4]],0,d.T,[],{title:[0,"title"]},null),(e()(),t.Sa(60,0,null,0,19,"amexio-datagrid",[["title","Properties <amexio-dropdown>"]],null,null,null,u.Rd,u.yb)),t.Ra(61,1294336,null,1,d.tc,[t.l,d.Ta,t.i,t.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,13,{columnRef:1}),(e()(),t.Sa(63,0,null,null,4,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),t.Ra(64,49152,[[13,4]],2,d.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,14,{headerTemplate:0}),t.ib(335544320,15,{bodyTemplate:0}),(e()(),t.Ja(0,[[15,2],["amexioBodyTmpl",2]],null,0,null,y)),(e()(),t.Sa(68,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),t.Ra(69,49152,[[13,4]],2,d.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,16,{headerTemplate:0}),t.ib(335544320,17,{bodyTemplate:0}),(e()(),t.Sa(72,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),t.Ra(73,49152,[[13,4]],2,d.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,18,{headerTemplate:0}),t.ib(335544320,19,{bodyTemplate:0}),(e()(),t.Sa(76,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),t.Ra(77,49152,[[13,4]],2,d.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,20,{headerTemplate:0}),t.ib(335544320,21,{bodyTemplate:0}),(e()(),t.Sa(80,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),t.Sa(81,0,null,0,10,"amexio-datagrid",[["title","Events"]],null,null,null,u.Rd,u.yb)),t.Ra(82,1294336,null,1,d.tc,[t.l,d.Ta,t.i,t.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),t.ib(603979776,22,{columnRef:1}),(e()(),t.Sa(84,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),t.Ra(85,49152,[[22,4]],2,d.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,23,{headerTemplate:0}),t.ib(335544320,24,{bodyTemplate:0}),(e()(),t.Sa(88,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),t.Ra(89,49152,[[22,4]],2,d.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,25,{headerTemplate:0}),t.ib(335544320,26,{bodyTemplate:0}),(e()(),t.Sa(92,0,null,1,17,"amexio-tab",[["title","Source"]],null,null,null,u.Bc,u.I)),t.Ra(93,114688,[[4,4]],0,d.T,[],{title:[0,"title"]},null),(e()(),t.Sa(94,0,null,0,15,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),t.Sa(95,0,null,null,14,"amexio-vertical-tab-view",[],null,null,null,u.Dc,u.K)),t.Ra(96,5357568,null,1,d.X,[t.F,t.k],null,null),t.ib(603979776,27,{queryTabs:1}),(e()(),t.Sa(98,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,u.Bc,u.I)),t.Ra(99,114688,[[27,4]],0,d.T,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),t.Ja(16777216,null,0,1,null,x)),t.Ra(101,16384,null,0,r.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(e()(),t.Sa(102,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,u.Bc,u.I)),t.Ra(103,114688,[[27,4]],0,d.T,[],{title:[0,"title"]},null),(e()(),t.Ja(16777216,null,0,1,null,w)),t.Ra(105,16384,null,0,r.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(e()(),t.Sa(106,0,null,0,3,"amexio-tab",[["title","Data Source"]],null,null,null,u.Bc,u.I)),t.Ra(107,114688,[[27,4]],0,d.T,[],{title:[0,"title"]},null),(e()(),t.Ja(16777216,null,0,1,null,v)),t.Ra(109,16384,null,0,r.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(e()(),t.Sa(110,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,u.Bc,u.I)),t.Ra(111,114688,[[4,4]],0,d.T,[],{title:[0,"title"]},null),(e()(),t.Sa(112,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),t.kb(-1,null,["Amexio Sandbox"])),(e()(),t.Sa(114,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-dropdown-filter?embed=1&file=app/forms/dropdownfilter/dropdownfilter.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,l){var n=l.component;e(l,1,0,"true"),e(l,6,0),e(l,9,0),e(l,13,0),e(l,17,0,"Demo","true"),e(l,19,0),e(l,21,0,"6"),e(l,23,0,"true"),e(l,28,0),e(l,31,0),e(l,33,0),e(l,35,0,"12"),e(l,37,1,["Choose Country","data","get","assets/data/componentdata/country.json","countryName","countryCode1",!0,"Choose",!0,"asc","countryCode1"]),e(l,41,0,"countryCode1",n.countryCode1),e(l,45,0,6),e(l,47,0,"true"),e(l,52,0),e(l,55,0),e(l,57,0,n.countryCode1),e(l,59,0,"API Reference"),e(l,61,0,"Properties <amexio-dropdown>","assets/apireference/forms/dropdown.json","get","properties",!1,!1),e(l,64,0,"Name","name",!1,"string",20),e(l,69,0,"Type","type",!1,"string",10),e(l,73,0,"Default","default",!1,"string",10),e(l,77,0,"Description","description",!1,"string",65),e(l,82,0,"Events","assets/apireference/forms/dropdown.json","get","events",!1),e(l,85,0,"Name","name",!1,"string",20),e(l,89,0,"Description","description",!1,"string",80),e(l,93,0,"Source"),e(l,96,0),e(l,99,0,"HTML",!0),e(l,101,0,n.htmlCode),e(l,103,0,"Type Script"),e(l,105,0,n.typeScriptCode),e(l,107,0,"Data Source"),e(l,109,0,n.dataSource),e(l,111,0,"Live")},function(e,l){e(l,20,0,t.cb(l,21).role),e(l,34,0,t.cb(l,35).role),e(l,36,0,t.cb(l,43).ngClassUntouched,t.cb(l,43).ngClassTouched,t.cb(l,43).ngClassPristine,t.cb(l,43).ngClassDirty,t.cb(l,43).ngClassValid,t.cb(l,43).ngClassInvalid,t.cb(l,43).ngClassPending),e(l,44,0,t.cb(l,45).role)})}var k=t.Oa("dropdownfilter",p,function(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,1,"dropdownfilter",[],null,null,null,S,m)),t.Ra(1,49152,null,0,p,[g.c],null,null)],null,null)},{},{},[]),C=n("ZYCi");n.d(l,"DropDownFilterDemoModuleNgFactory",function(){return R});var R=t.Pa(a,[],function(e){return t.Za([t.ab(512,t.k,t.Ea,[[8,[u.a,i.a,k]],[3,t.k],t.z]),t.ab(4608,r.o,r.n,[t.w,[2,r.x]]),t.ab(4608,c.G,c.G,[]),t.ab(4608,g.i,g.o,[r.d,t.D,g.m]),t.ab(4608,g.p,g.p,[g.i,g.n]),t.ab(5120,g.a,function(e){return[e]},[g.p]),t.ab(4608,g.l,g.l,[]),t.ab(6144,g.j,null,[g.l]),t.ab(4608,g.h,g.h,[g.j]),t.ab(6144,g.b,null,[g.h]),t.ab(4608,g.f,g.k,[g.b,t.s]),t.ab(4608,g.c,g.c,[g.f]),t.ab(4608,d.Ta,d.Ta,[g.c]),t.ab(4608,d.ob,d.ob,[]),t.ab(4608,d.db,d.db,[t.D]),t.ab(4608,d.B,d.B,[]),t.ab(4608,d.Kb,d.Kb,[]),t.ab(4608,c.f,c.f,[]),t.ab(4608,d.jb,d.jb,[]),t.ab(1073742336,r.c,r.c,[]),t.ab(1073742336,c.D,c.D,[]),t.ab(1073742336,c.l,c.l,[]),t.ab(1073742336,g.e,g.e,[]),t.ab(1073742336,g.d,g.d,[]),t.ab(1073742336,s.b,s.b,[]),t.ab(1073742336,d.Db,d.Db,[]),t.ab(1073742336,d.D,d.D,[]),t.ab(1073742336,d.x,d.x,[]),t.ab(1073742336,d.G,d.G,[]),t.ab(1073742336,d.I,d.I,[]),t.ab(1073742336,c.z,c.z,[]),t.ab(1073742336,d.L,d.L,[]),t.ab(1073742336,d.p,d.p,[]),t.ab(1073742336,d.Aa,d.Aa,[]),t.ab(1073742336,C.n,C.n,[[2,C.t],[2,C.m]]),t.ab(1073742336,a,a,[]),t.ab(256,g.m,"XSRF-TOKEN",[]),t.ab(256,g.n,"X-XSRF-TOKEN",[]),t.ab(1024,C.i,function(){return[[{path:"",component:p,pathMatch:"full"}]]},[])])})},wZee:function(e,l){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},t=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,l=0,t=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++l}),e.__id},clone:function(e,l){var n=t.util.type(e);switch(l=l||{},n){case"Object":if(l[t.util.objId(e)])return l[t.util.objId(e)];var a={};for(var u in l[t.util.objId(e)]=a,e)e.hasOwnProperty(u)&&(a[u]=t.util.clone(e[u],l));return a;case"Array":return l[t.util.objId(e)]?l[t.util.objId(e)]:(a=[],l[t.util.objId(e)]=a,e.forEach(function(e,n){a[n]=t.util.clone(e,l)}),a)}return e}},languages:{extend:function(e,l){var n=t.util.clone(t.languages[e]);for(var a in l)n[a]=l[a];return n},insertBefore:function(e,l,n,a){var u=(a=a||t.languages)[e];if(2==arguments.length){for(var i in n=arguments[1])n.hasOwnProperty(i)&&(u[i]=n[i]);return u}var r={};for(var o in u)if(u.hasOwnProperty(o)){if(o==l)for(var i in n)n.hasOwnProperty(i)&&(r[i]=n[i]);r[o]=u[o]}return t.languages.DFS(t.languages,function(l,n){n===a[e]&&l!=e&&(this[l]=r)}),a[e]=r},DFS:function(e,l,n,a){for(var u in a=a||{},e)e.hasOwnProperty(u)&&(l.call(e,u,e[u],n||u),"Object"!==t.util.type(e[u])||a[t.util.objId(e[u])]?"Array"!==t.util.type(e[u])||a[t.util.objId(e[u])]||(a[t.util.objId(e[u])]=!0,t.languages.DFS(e[u],l,u,a)):(a[t.util.objId(e[u])]=!0,t.languages.DFS(e[u],l,null,a)))}},plugins:{},highlightAll:function(e,l){t.highlightAllUnder(document,e,l)},highlightAllUnder:function(e,l,n){var a={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};t.hooks.run("before-highlightall",a);for(var u,i=a.elements||e.querySelectorAll(a.selector),r=0;u=i[r++];)t.highlightElement(u,!0===l,a.callback)},highlightElement:function(l,a,u){for(var i,r,o=l;o&&!e.test(o.className);)o=o.parentNode;o&&(i=(o.className.match(e)||[,""])[1].toLowerCase(),r=t.languages[i]),l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+i,l.parentNode&&/pre/i.test((o=l.parentNode).nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+i);var s={element:l,language:i,grammar:r,code:l.textContent};if(t.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(t.hooks.run("before-highlight",s),s.element.textContent=s.code,t.hooks.run("after-highlight",s)),void t.hooks.run("complete",s);if(t.hooks.run("before-highlight",s),a&&n.Worker){var d=new Worker(t.filename);d.onmessage=function(e){s.highlightedCode=e.data,t.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,u&&u.call(s.element),t.hooks.run("after-highlight",s),t.hooks.run("complete",s)},d.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=t.highlight(s.code,s.grammar,s.language),t.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,u&&u.call(l),t.hooks.run("after-highlight",s),t.hooks.run("complete",s)},highlight:function(e,l,n){var u={code:e,grammar:l,language:n};return t.hooks.run("before-tokenize",u),u.tokens=t.tokenize(u.code,u.grammar),t.hooks.run("after-tokenize",u),a.stringify(t.util.encode(u.tokens),u.language)},matchGrammar:function(e,l,n,a,u,i,r){var o=t.Token;for(var s in n)if(n.hasOwnProperty(s)&&n[s]){if(s==r)return;var d=n[s];d="Array"===t.util.type(d)?d:[d];for(var c=0;c<d.length;++c){var p=d[c],g=p.inside,m=!!p.lookbehind,h=!!p.greedy,b=0,f=p.alias;if(h&&!p.pattern.global){var y=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,y+"g")}p=p.pattern||p;for(var x=a,w=u;x<l.length;w+=l[x].length,++x){var v=l[x];if(l.length>e.length)return;if(!(v instanceof o)){if(h&&x!=l.length-1){if(p.lastIndex=w,!(T=p.exec(e)))break;for(var S=T.index+(m?T[1].length:0),k=T.index+T[0].length,C=x,R=w,F=l.length;C<F&&(R<k||!l[C].type&&!l[C-1].greedy);++C)S>=(R+=l[C].length)&&(++x,w=R);if(l[x]instanceof o)continue;A=C-x,v=e.slice(w,R),T.index-=w}else{p.lastIndex=0;var T=p.exec(v),A=1}if(T){m&&(b=T[1]?T[1].length:0),k=(S=T.index+b)+(T=T[0].slice(b)).length;var I=v.slice(0,S),j=v.slice(k),D=[x,A];I&&(++x,w+=I.length,D.push(I));var N=new o(s,g?t.tokenize(T,g):T,f,T,h);if(D.push(N),j&&D.push(j),Array.prototype.splice.apply(l,D),1!=A&&t.matchGrammar(e,l,n,x,w,!0,s),i)break}else if(i)break}}}}},tokenize:function(e,l,n){var a=[e],u=l.rest;if(u){for(var i in u)l[i]=u[i];delete l.rest}return t.matchGrammar(e,a,l,0,0,!1),a},hooks:{all:{},add:function(e,l){var n=t.hooks.all;n[e]=n[e]||[],n[e].push(l)},run:function(e,l){var n=t.hooks.all[e];if(n&&n.length)for(var a,u=0;a=n[u++];)a(l)}}},a=t.Token=function(e,l,n,t,a){this.type=e,this.content=l,this.alias=n,this.length=0|(t||"").length,this.greedy=!!a};if(a.stringify=function(e,l,n){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(n){return a.stringify(n,l,e)}).join("");var u={type:e.type,content:a.stringify(e.content,l,n),tag:"span",classes:["token",e.type],attributes:{},language:l,parent:n};if(e.alias){var i="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(u.classes,i)}t.hooks.run("wrap",u);var r=Object.keys(u.attributes).map(function(e){return e+'="'+(u.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+u.tag+' class="'+u.classes.join(" ")+'"'+(r?" "+r:"")+">"+u.content+"</"+u.tag+">"},!n.document)return n.addEventListener?(t.disableWorkerMessageHandler||n.addEventListener("message",function(e){var l=JSON.parse(e.data),a=l.language,u=l.immediateClose;n.postMessage(t.highlight(l.code,t.languages[a],a)),u&&n.close()},!1),n.Prism):n.Prism;var u=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return u&&(t.filename=u.src,t.manual||u.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(t.highlightAll):window.setTimeout(t.highlightAll,16):document.addEventListener("DOMContentLoaded",t.highlightAll))),n.Prism}();void 0!==e&&e.exports&&(e.exports=t),"undefined"!=typeof global&&(global.Prism=t),t.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),t.languages.xml=t.languages.markup,t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},t.languages.css.atrule.inside.rest=t.languages.css,t.languages.markup&&(t.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:t.languages.css,alias:"language-css",greedy:!0}}),t.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:t.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:t.languages.css}},alias:"language-css"}},t.languages.markup.tag)),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),t.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),t.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),t.languages.javascript["template-string"].inside.interpolation.inside.rest=t.languages.javascript,t.languages.markup&&t.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:t.languages.javascript,alias:"language-javascript",greedy:!0}}),t.languages.js=t.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(l){for(var n,a=l.getAttribute("data-src"),u=l,i=/\blang(?:uage)?-([\w-]+)\b/i;u&&!i.test(u.className);)u=u.parentNode;if(u&&(n=(l.className.match(i)||[,""])[1]),!n){var r=(a.match(/\.(\w+)$/)||[,""])[1];n=e[r]||r}var o=document.createElement("code");o.className="language-"+n,l.textContent="",o.textContent="Loading\u2026",l.appendChild(o);var s=new XMLHttpRequest;s.open("GET",a,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(o.textContent=s.responseText,t.highlightElement(o)):o.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},s.send(null)}),t.plugins.toolbar&&t.plugins.toolbar.registerButton("download-file",function(e){var l=e.element.parentNode;if(l&&/pre/i.test(l.nodeName)&&l.hasAttribute("data-src")&&l.hasAttribute("data-download-link")){var n=l.getAttribute("data-src"),t=document.createElement("a");return t.textContent=l.getAttribute("data-download-link-label")||"Download",t.setAttribute("download",""),t.href=n,t}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);