(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{Ft1a:function(e,t,l){"use strict";l.r(t);var n=l("CcnG"),a=function(){},i=l("gTgE"),u=l("pMnS"),r=l("Ip0R"),o=l("U89g"),d=l("d2mR"),s=l("O4vx"),c=function(){function e(e){this.http=e,this.getHtmlAndTypeScriptCode()}return e.prototype.getHtmlAndTypeScriptCode=function(){var e,t,l=this;this.http.get("assets/data/code/data/simplegrid/simplegrid.html",{responseType:"text"}).subscribe(function(t){e=t},function(e){},function(){l.htmlCode=e}),this.http.get("assets/data/code/data/simplegrid/simplegrid.text",{responseType:"text"}).subscribe(function(e){t=e},function(e){},function(){l.typeScriptCode=t}),this.http.get("assets/data/componentdata/country.json",{responseType:"text"}).subscribe(function(e){t=e},function(e){},function(){l.dataSource=t})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e.prototype.getSelectedData=function(e){this.selectedData=e},e}(),p=l("t/Na"),g=n.Qa({encapsulation:2,styles:[],data:{}});function m(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),n.Sa(1,0,null,null,1,"div",[["style","text-decoration: line-through red;"]],null,null,null,null,null)),(e()(),n.kb(2,null,["",""]))],null,function(e,t){e(t,2,0,t.parent.context.row.name)})}function h(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,1,null,null,null,null,null,null,null)),(e()(),n.kb(1,null,[" "," "]))],null,function(e,t){e(t,1,0,t.parent.context.row.name)})}function b(e){return n.mb(0,[(e()(),n.Ja(16777216,null,null,1,null,m)),n.Ra(1,16384,null,0,r.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(e()(),n.Ja(16777216,null,null,1,null,h)),n.Ra(3,16384,null,0,r.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(e()(),n.Ja(0,null,null,0))],function(e,t){e(t,1,0,t.context.row.deprecated),e(t,3,0,!t.context.row.deprecated)},null)}function f(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),n.Ra(2,4243456,null,0,d.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.htmlCode,"html")},null)}function y(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),n.Ra(2,4243456,null,0,d.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.typeScriptCode,"typescript")},null)}function x(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),n.Ra(2,4243456,null,0,d.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.dataSource,"json")},null)}function S(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,123,"amexio-card",[["header","true"]],null,null,null,i.ec,i.k)),n.Ra(1,7585792,null,3,s.j,[n.F],{header:[0,"header"]},null),n.ib(603979776,1,{amexioHeader:1}),n.ib(603979776,2,{amexioBody:1}),n.ib(603979776,3,{amexioFooter:1}),(e()(),n.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,i.qc,i.w)),n.Ra(6,1163264,[[1,4]],0,s.C,[],null,null),(e()(),n.kb(-1,0,[" Simple Data Grid "])),(e()(),n.Sa(8,0,null,1,115,"amexio-body",[],null,null,null,i.Yb,i.e)),n.Ra(9,1163264,[[2,4]],0,s.d,[],null,null),(e()(),n.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),n.kb(-1,null,["Data grid component to render large amount of data-set with various options like sorting in ascending or descending order, client-side pagination, column hide/unhide, single/multi selection, user define template for rendering for column header and column data, displaying summation of numeric column."])),(e()(),n.Sa(12,0,null,0,111,"amexio-tab-view",[],null,null,null,i.Bc,i.H)),n.Ra(13,5488640,null,2,s.S,[n.F,n.k,n.F],null,null),n.ib(603979776,4,{queryTabs:1}),n.ib(603979776,5,{queryAction:1}),(e()(),n.Sa(16,0,null,1,30,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.Cc,i.I)),n.Ra(17,114688,[[4,4]],0,s.T,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),n.Sa(18,0,null,0,28,"amexio-row",[],null,null,null,i.xc,i.D)),n.Ra(19,1163264,null,0,s.O,[],null,null),(e()(),n.Sa(20,0,null,0,26,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,i.gc,i.m)),n.Ra(21,114688,null,0,s.m,[],{size:[0,"size"]},null),(e()(),n.Sa(22,0,null,0,24,"amexio-card",[],null,null,null,i.ec,i.k)),n.Ra(23,7585792,null,3,s.j,[n.F],{header:[0,"header"]},null),n.ib(603979776,6,{amexioHeader:1}),n.ib(603979776,7,{amexioBody:1}),n.ib(603979776,8,{amexioFooter:1}),(e()(),n.Sa(27,0,null,0,2,"amexio-header",[],null,null,null,i.qc,i.w)),n.Ra(28,1163264,[[6,4]],0,s.C,[],null,null),(e()(),n.kb(-1,0,[" Simple Data Grid "])),(e()(),n.Sa(30,0,null,1,16,"amexio-body",[],null,null,null,i.Yb,i.e)),n.Ra(31,1163264,[[7,4]],0,s.d,[],null,null),(e()(),n.Sa(32,0,null,0,14,"amexio-datagrid",[["title","Simple Data Grid "]],null,null,null,i.Td,i.zb)),n.Ra(33,1294336,null,1,s.xc,[n.l,s.Ta,n.i,n.F],{title:[0,"title"],pagesize:[1,"pagesize"],httpurl:[2,"httpurl"],httpmethod:[3,"httpmethod"],datareader:[4,"datareader"],enablecheckbox:[5,"enablecheckbox"],enablecolumnfiter:[6,"enablecolumnfiter"]},null),n.ib(603979776,9,{columnRef:1}),(e()(),n.Sa(35,0,null,null,3,"amexio-data-table-column",[],null,[[null,"selectedRowData"]],function(e,t,l){var n=!0;return"selectedRowData"===t&&(n=!1!==e.component.getSelectedData(l)&&n),n},i.Ud,i.Ab)),n.Ra(36,49152,[[9,4]],2,s.yc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"]},null),n.ib(335544320,10,{headerTemplate:0}),n.ib(335544320,11,{bodyTemplate:0}),(e()(),n.Sa(39,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),n.Ra(40,49152,[[9,4]],2,s.yc,[],{text:[0,"text"],sort:[1,"sort"],dataindex:[2,"dataindex"],hidden:[3,"hidden"],datatype:[4,"datatype"]},null),n.ib(335544320,12,{headerTemplate:0}),n.ib(335544320,13,{bodyTemplate:0}),(e()(),n.Sa(43,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),n.Ra(44,49152,[[9,4]],2,s.yc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"]},null),n.ib(335544320,14,{headerTemplate:0}),n.ib(335544320,15,{bodyTemplate:0}),(e()(),n.Sa(47,0,null,1,53,"amexio-tab",[["title","API Reference"]],null,null,null,i.Cc,i.I)),n.Ra(48,114688,[[4,4]],0,s.T,[],{title:[0,"title"]},null),(e()(),n.Sa(49,0,null,0,19,"amexio-datagrid",[["title","Properties<amexio-datagrid>"]],null,null,null,i.Td,i.zb)),n.Ra(50,1294336,null,1,s.xc,[n.l,s.Ta,n.i,n.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),n.ib(603979776,16,{columnRef:1}),(e()(),n.Sa(52,0,null,null,4,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),n.Ra(53,49152,[[16,4]],2,s.yc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,17,{headerTemplate:0}),n.ib(335544320,18,{bodyTemplate:0}),(e()(),n.Ja(0,[[18,2],["amexioBodyTmpl",2]],null,0,null,b)),(e()(),n.Sa(57,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),n.Ra(58,49152,[[16,4]],2,s.yc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,19,{headerTemplate:0}),n.ib(335544320,20,{bodyTemplate:0}),(e()(),n.Sa(61,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),n.Ra(62,49152,[[16,4]],2,s.yc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,21,{headerTemplate:0}),n.ib(335544320,22,{bodyTemplate:0}),(e()(),n.Sa(65,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),n.Ra(66,49152,[[16,4]],2,s.yc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,23,{headerTemplate:0}),n.ib(335544320,24,{bodyTemplate:0}),(e()(),n.Sa(69,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),n.Sa(70,0,null,0,18,"amexio-datagrid",[["title","Column Properties <amexio-data-table-colum>"]],null,null,null,i.Td,i.zb)),n.Ra(71,1294336,null,1,s.xc,[n.l,s.Ta,n.i,n.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),n.ib(603979776,25,{columnRef:1}),(e()(),n.Sa(73,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),n.Ra(74,49152,[[25,4]],2,s.yc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,26,{headerTemplate:0}),n.ib(335544320,27,{bodyTemplate:0}),(e()(),n.Sa(77,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),n.Ra(78,49152,[[25,4]],2,s.yc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,28,{headerTemplate:0}),n.ib(335544320,29,{bodyTemplate:0}),(e()(),n.Sa(81,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),n.Ra(82,49152,[[25,4]],2,s.yc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,30,{headerTemplate:0}),n.ib(335544320,31,{bodyTemplate:0}),(e()(),n.Sa(85,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),n.Ra(86,49152,[[25,4]],2,s.yc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,32,{headerTemplate:0}),n.ib(335544320,33,{bodyTemplate:0}),(e()(),n.Sa(89,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),n.Sa(90,0,null,0,10,"amexio-datagrid",[["title","Events"]],null,null,null,i.Td,i.zb)),n.Ra(91,1294336,null,1,s.xc,[n.l,s.Ta,n.i,n.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),n.ib(603979776,34,{columnRef:1}),(e()(),n.Sa(93,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),n.Ra(94,49152,[[34,4]],2,s.yc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,35,{headerTemplate:0}),n.ib(335544320,36,{bodyTemplate:0}),(e()(),n.Sa(97,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),n.Ra(98,49152,[[34,4]],2,s.yc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,37,{headerTemplate:0}),n.ib(335544320,38,{bodyTemplate:0}),(e()(),n.Sa(101,0,null,1,17,"amexio-tab",[["title","Source"]],null,null,null,i.Cc,i.I)),n.Ra(102,114688,[[4,4]],0,s.T,[],{title:[0,"title"]},null),(e()(),n.Sa(103,0,null,0,15,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),n.Sa(104,0,null,null,14,"amexio-vertical-tab-view",[],null,null,null,i.Ec,i.K)),n.Ra(105,5357568,null,1,s.X,[n.F,n.k],null,null),n.ib(603979776,39,{queryTabs:1}),(e()(),n.Sa(107,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.Cc,i.I)),n.Ra(108,114688,[[39,4]],0,s.T,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),n.Ja(16777216,null,0,1,null,f)),n.Ra(110,16384,null,0,r.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(e()(),n.Sa(111,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.Cc,i.I)),n.Ra(112,114688,[[39,4]],0,s.T,[],{title:[0,"title"]},null),(e()(),n.Ja(16777216,null,0,1,null,y)),n.Ra(114,16384,null,0,r.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(e()(),n.Sa(115,0,null,0,3,"amexio-tab",[["title","DataSource"]],null,null,null,i.Cc,i.I)),n.Ra(116,114688,[[39,4]],0,s.T,[],{title:[0,"title"]},null),(e()(),n.Ja(16777216,null,0,1,null,x)),n.Ra(118,16384,null,0,r.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(e()(),n.Sa(119,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.Cc,i.I)),n.Ra(120,114688,[[4,4]],0,s.T,[],{title:[0,"title"]},null),(e()(),n.Sa(121,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),n.kb(-1,null,["Amexio Sandbox"])),(e()(),n.Sa(123,0,null,0,0,"iframe",[["src","https://stackblitz.com/edit/amexio-v4-simple-grid?embed=1&file=app/grid/simplegrid/simplegrid.demo.html&view=editor"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,t){var l=t.component;e(t,1,0,"true"),e(t,6,0),e(t,9,0),e(t,13,0),e(t,17,0,"Demo","true"),e(t,19,0),e(t,21,0,"12"),e(t,23,0,!0),e(t,28,0),e(t,31,0),e(t,33,0,"Simple Data Grid ",10,"assets/data/componentdata/country.json","get","data",!1,!0),e(t,36,0,"Name","countryName",!1,"string"),e(t,40,0,"Code",!1,"countryCode1",!1,"string"),e(t,44,0,"Currency","currencyName",!1,"string"),e(t,48,0,"API Reference"),e(t,50,0,"Properties<amexio-datagrid>","assets/apireference/data/grid.json","get","properties",!1,!1),e(t,53,0,"Name","name",!1,"string",20),e(t,58,0,"Type","type",!1,"string",10),e(t,62,0,"Default","default",!1,"string",10),e(t,66,0,"Description","description",!1,"string",65),e(t,71,0,"Column Properties <amexio-data-table-colum>","assets/apireference/data/grid.json","get","columnProperties",!1,!1),e(t,74,0,"Name","name",!1,"string",15),e(t,78,0,"Type","type",!1,"string",10),e(t,82,0,"Default","default",!1,"string",10),e(t,86,0,"Description","description",!1,"string",65),e(t,91,0,"Events","assets/apireference/data/grid.json","get","events",!1),e(t,94,0,"Name","name",!1,"string",20),e(t,98,0,"Description","description",!1,"string",65),e(t,102,0,"Source"),e(t,105,0),e(t,108,0,"HTML",!0),e(t,110,0,l.htmlCode),e(t,112,0,"Type Script"),e(t,114,0,l.typeScriptCode),e(t,116,0,"DataSource"),e(t,118,0,l.dataSource),e(t,120,0,"Live")},function(e,t){e(t,20,0,n.cb(t,21).role)})}var w=n.Oa("simplegridr-demo",c,function(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,1,"simplegridr-demo",[],null,null,null,S,g)),n.Ra(1,49152,null,0,c,[p.c],null,null)],null,null)},{},{},[]),v=l("gIcY"),k=l("ZYCi");l.d(t,"SimpleGridDemoModuleNgFactory",function(){return T});var T=n.Pa(a,[],function(e){return n.Za([n.ab(512,n.k,n.Ea,[[8,[i.a,u.a,w]],[3,n.k],n.z]),n.ab(4608,r.o,r.n,[n.w,[2,r.x]]),n.ab(4608,v.G,v.G,[]),n.ab(4608,p.i,p.o,[r.d,n.D,p.m]),n.ab(4608,p.p,p.p,[p.i,p.n]),n.ab(5120,p.a,function(e){return[e]},[p.p]),n.ab(4608,p.l,p.l,[]),n.ab(6144,p.j,null,[p.l]),n.ab(4608,p.h,p.h,[p.j]),n.ab(6144,p.b,null,[p.h]),n.ab(4608,p.f,p.k,[p.b,n.s]),n.ab(4608,p.c,p.c,[p.f]),n.ab(4608,s.Ta,s.Ta,[p.c]),n.ab(4608,s.ob,s.ob,[]),n.ab(4608,s.db,s.db,[n.D]),n.ab(4608,s.B,s.B,[]),n.ab(4608,s.Lb,s.Lb,[]),n.ab(4608,s.xb,s.xb,[]),n.ab(4608,v.f,v.f,[]),n.ab(4608,s.jb,s.jb,[]),n.ab(1073742336,r.c,r.c,[]),n.ab(1073742336,v.D,v.D,[]),n.ab(1073742336,v.l,v.l,[]),n.ab(1073742336,p.e,p.e,[]),n.ab(1073742336,p.d,p.d,[]),n.ab(1073742336,d.b,d.b,[]),n.ab(1073742336,s.Eb,s.Eb,[]),n.ab(1073742336,s.D,s.D,[]),n.ab(1073742336,s.x,s.x,[]),n.ab(1073742336,s.G,s.G,[]),n.ab(1073742336,s.I,s.I,[]),n.ab(1073742336,v.z,v.z,[]),n.ab(1073742336,s.L,s.L,[]),n.ab(1073742336,s.p,s.p,[]),n.ab(1073742336,s.Aa,s.Aa,[]),n.ab(1073742336,k.n,k.n,[[2,k.t],[2,k.m]]),n.ab(1073742336,a,a,[]),n.ab(256,p.m,"XSRF-TOKEN",[]),n.ab(256,p.n,"X-XSRF-TOKEN",[]),n.ab(1024,k.i,function(){return[[{path:"",component:c,pathMatch:"full"}]]},[])])})},U89g:function(e,t,l){"use strict";l.d(t,"a",function(){return a}),l.d(t,"b",function(){return i});var n=l("CcnG"),a=(l("d2mR"),l("Ip0R"),n.Qa({encapsulation:2,styles:[],data:{}}));function i(e){return n.mb(0,[],null,null)}},XIHC:function(e,t){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,t,l){"use strict";l.d(t,"a",function(){return n}),l.d(t,"b",function(){return a}),l("wZee"),l("XIHC");var n=function(){function e(e,t){this._renderer=e,this._el=t,this.nativeElement=t.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),a=function(){}},wZee:function(e,t){var l="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},n=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,n=l.Prism={manual:l.Prism&&l.Prism.manual,disableWorkerMessageHandler:l.Prism&&l.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var l=n.util.type(e);switch(t=t||{},l){case"Object":if(t[n.util.objId(e)])return t[n.util.objId(e)];var a={};for(var i in t[n.util.objId(e)]=a,e)e.hasOwnProperty(i)&&(a[i]=n.util.clone(e[i],t));return a;case"Array":return t[n.util.objId(e)]?t[n.util.objId(e)]:(a=[],t[n.util.objId(e)]=a,e.forEach(function(e,l){a[l]=n.util.clone(e,t)}),a)}return e}},languages:{extend:function(e,t){var l=n.util.clone(n.languages[e]);for(var a in t)l[a]=t[a];return l},insertBefore:function(e,t,l,a){var i=(a=a||n.languages)[e];if(2==arguments.length){for(var u in l=arguments[1])l.hasOwnProperty(u)&&(i[u]=l[u]);return i}var r={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var u in l)l.hasOwnProperty(u)&&(r[u]=l[u]);r[o]=i[o]}return n.languages.DFS(n.languages,function(t,l){l===a[e]&&t!=e&&(this[t]=r)}),a[e]=r},DFS:function(e,t,l,a){for(var i in a=a||{},e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],l||i),"Object"!==n.util.type(e[i])||a[n.util.objId(e[i])]?"Array"!==n.util.type(e[i])||a[n.util.objId(e[i])]||(a[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,i,a)):(a[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,null,a)))}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,l){var a={callback:l,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",a);for(var i,u=a.elements||e.querySelectorAll(a.selector),r=0;i=u[r++];)n.highlightElement(i,!0===t,a.callback)},highlightElement:function(t,a,i){for(var u,r,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(u=(o.className.match(e)||[,""])[1].toLowerCase(),r=n.languages[u]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+u,t.parentNode&&/pre/i.test((o=t.parentNode).nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+u);var d={element:t,language:u,grammar:r,code:t.textContent};if(n.hooks.run("before-sanity-check",d),!d.code||!d.grammar)return d.code&&(n.hooks.run("before-highlight",d),d.element.textContent=d.code,n.hooks.run("after-highlight",d)),void n.hooks.run("complete",d);if(n.hooks.run("before-highlight",d),a&&l.Worker){var s=new Worker(n.filename);s.onmessage=function(e){d.highlightedCode=e.data,n.hooks.run("before-insert",d),d.element.innerHTML=d.highlightedCode,i&&i.call(d.element),n.hooks.run("after-highlight",d),n.hooks.run("complete",d)},s.postMessage(JSON.stringify({language:d.language,code:d.code,immediateClose:!0}))}else d.highlightedCode=n.highlight(d.code,d.grammar,d.language),n.hooks.run("before-insert",d),d.element.innerHTML=d.highlightedCode,i&&i.call(t),n.hooks.run("after-highlight",d),n.hooks.run("complete",d)},highlight:function(e,t,l){var i={code:e,grammar:t,language:l};return n.hooks.run("before-tokenize",i),i.tokens=n.tokenize(i.code,i.grammar),n.hooks.run("after-tokenize",i),a.stringify(n.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,l,a,i,u,r){var o=n.Token;for(var d in l)if(l.hasOwnProperty(d)&&l[d]){if(d==r)return;var s=l[d];s="Array"===n.util.type(s)?s:[s];for(var c=0;c<s.length;++c){var p=s[c],g=p.inside,m=!!p.lookbehind,h=!!p.greedy,b=0,f=p.alias;if(h&&!p.pattern.global){var y=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,y+"g")}p=p.pattern||p;for(var x=a,S=i;x<t.length;S+=t[x].length,++x){var w=t[x];if(t.length>e.length)return;if(!(w instanceof o)){if(h&&x!=t.length-1){if(p.lastIndex=S,!(F=p.exec(e)))break;for(var v=F.index+(m?F[1].length:0),k=F.index+F[0].length,T=x,A=S,R=t.length;T<R&&(A<k||!t[T].type&&!t[T-1].greedy);++T)v>=(A+=t[T].length)&&(++x,S=A);if(t[x]instanceof o)continue;C=T-x,w=e.slice(S,A),F.index-=S}else{p.lastIndex=0;var F=p.exec(w),C=1}if(F){m&&(b=F[1]?F[1].length:0),k=(v=F.index+b)+(F=F[0].slice(b)).length;var j=w.slice(0,v),I=w.slice(k),N=[x,C];j&&(++x,S+=j.length,N.push(j));var D=new o(d,g?n.tokenize(F,g):F,f,F,h);if(N.push(D),I&&N.push(I),Array.prototype.splice.apply(t,N),1!=C&&n.matchGrammar(e,t,l,x,S,!0,d),u)break}else if(u)break}}}}},tokenize:function(e,t,l){var a=[e],i=t.rest;if(i){for(var u in i)t[u]=i[u];delete t.rest}return n.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var l=n.hooks.all;l[e]=l[e]||[],l[e].push(t)},run:function(e,t){var l=n.hooks.all[e];if(l&&l.length)for(var a,i=0;a=l[i++];)a(t)}}},a=n.Token=function(e,t,l,n,a){this.type=e,this.content=t,this.alias=l,this.length=0|(n||"").length,this.greedy=!!a};if(a.stringify=function(e,t,l){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(l){return a.stringify(l,t,e)}).join("");var i={type:e.type,content:a.stringify(e.content,t,l),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:l};if(e.alias){var u="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,u)}n.hooks.run("wrap",i);var r=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(r?" "+r:"")+">"+i.content+"</"+i.tag+">"},!l.document)return l.addEventListener?(n.disableWorkerMessageHandler||l.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,i=t.immediateClose;l.postMessage(n.highlight(t.code,n.languages[a],a)),i&&l.close()},!1),l.Prism):l.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(n.filename=i.src,n.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),l.Prism}();void 0!==e&&e.exports&&(e.exports=n),"undefined"!=typeof global&&(global.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),n.languages.xml=n.languages.markup,n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},n.languages.css.atrule.inside.rest=n.languages.css,n.languages.markup&&(n.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:n.languages.css,alias:"language-css",greedy:!0}}),n.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:n.languages.css}},alias:"language-css"}},n.languages.markup.tag)),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),n.languages.javascript["template-string"].inside.interpolation.inside.rest=n.languages.javascript,n.languages.markup&&n.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:n.languages.javascript,alias:"language-javascript",greedy:!0}}),n.languages.js=n.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var l,a=t.getAttribute("data-src"),i=t,u=/\blang(?:uage)?-([\w-]+)\b/i;i&&!u.test(i.className);)i=i.parentNode;if(i&&(l=(t.className.match(u)||[,""])[1]),!l){var r=(a.match(/\.(\w+)$/)||[,""])[1];l=e[r]||r}var o=document.createElement("code");o.className="language-"+l,t.textContent="",o.textContent="Loading\u2026",t.appendChild(o);var d=new XMLHttpRequest;d.open("GET",a,!0),d.onreadystatechange=function(){4==d.readyState&&(d.status<400&&d.responseText?(o.textContent=d.responseText,n.highlightElement(o)):o.textContent=d.status>=400?"\u2716 Error "+d.status+" while fetching file: "+d.statusText:"\u2716 Error: File does not exist or is empty")},d.send(null)}),n.plugins.toolbar&&n.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var l=t.getAttribute("data-src"),n=document.createElement("a");return n.textContent=t.getAttribute("data-download-link-label")||"Download",n.setAttribute("download",""),n.href=l,n}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);