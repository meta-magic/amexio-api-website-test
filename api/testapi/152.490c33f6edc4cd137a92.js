(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{"1imY":function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),a=function(){function l(l){this.document=l,this.documentIsAccessible=void 0!==l}return l.prototype.check=function(l){return!!this.documentIsAccessible&&(l=encodeURIComponent(l),this.getCookieRegExp(l).test(this.document.cookie))},l.prototype.get=function(l){if(this.documentIsAccessible&&this.check(l)){l=encodeURIComponent(l);var n=this.getCookieRegExp(l).exec(this.document.cookie);return decodeURIComponent(n[1])}return""},l.prototype.getAll=function(){if(!this.documentIsAccessible)return{};var l={},n=this.document;if(n.cookie&&""!==n.cookie)for(var u=n.cookie.split(";"),e=0;e<u.length;e+=1){var a=u[e].split("=");a[0]=a[0].replace(/^ /,""),l[decodeURIComponent(a[0])]=decodeURIComponent(a[1])}return l},l.prototype.set=function(l,n,u,e,a,t){if(this.documentIsAccessible){var o=encodeURIComponent(l)+"="+encodeURIComponent(n)+";";u&&(o+="number"==typeof u?"expires="+new Date((new Date).getTime()+1e3*u*60*60*24).toUTCString()+";":"expires="+u.toUTCString()+";"),e&&(o+="path="+e+";"),a&&(o+="domain="+a+";"),t&&(o+="secure;"),this.document.cookie=o}},l.prototype.delete=function(l,n,u){this.documentIsAccessible&&this.set(l,"",-1,n,u)},l.prototype.deleteAll=function(l,n){if(this.documentIsAccessible){var u=this.getAll();for(var e in u)u.hasOwnProperty(e)&&this.delete(e,l,n)}},l.prototype.getCookieRegExp=function(l){var n=l.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/gi,"\\$1");return new RegExp("(?:^"+n+"|;\\s*"+n+")=(.*?)(?:;|$)","g")},l}(),t=function(){function l(l,n){this.http=l,this.cookieService=n,this.hasThemeInit=!1}return l.prototype.ngOnInit=function(){var l,n=this;this.http.get("assets/data/theme/theme-api-showcase.json",{responseType:"json"}).subscribe(function(n){l=n},function(l){},function(){n.mdThemeData=l}),this.http.get("assets/data/theme/theme-api-showcase-amexio.json",{responseType:"json"}).subscribe(function(n){l=n},function(l){},function(){n.amexioThemeData=l})},l.prototype.addNewTheme=function(l,n){var u=this,e=document.createElement("link");e.onload=function(){u.removeExistingTheme(n)},e.setAttribute("rel","stylesheet"),e.id="themeid",e.href=l,document.head.appendChild(e)},l.prototype.removeExistingTheme=function(l){if(null!=l&&l&&0!=l.length)for(var n=0;n<l.length;n++){var u=l[n];"themeid"==u.id&&document.head.removeChild(u)}},l.prototype.themeChange=function(l){this.newThemePath="assets/themes/"+l.themeCssFile+".css";var n=document.head.querySelectorAll('link[rel="stylesheet"]');this.addNewTheme(this.newThemePath,n),this.cookieService.set("theme_name_v4",l.themeCssFile)},l}(),o=function(){},i=u("gTgE"),s=u("pMnS"),b=u("O4vx"),r=u("Ip0R"),c=u("t/Na"),m=e.Qa({encapsulation:2,styles:[],data:{}});function d(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,23,"amexio-column",[],[[1,"class",0]],null,null,i.ec,i.m)),e.Ra(1,114688,null,0,b.m,[],{size:[0,"size"]},null),(l()(),e.Sa(2,0,null,0,21,"div",[["class","card-container"]],null,null,null,null,null)),(l()(),e.Sa(3,0,null,null,5,"header",[["class","card-header flex-start"]],null,null,null,null,null)),e.Ra(4,278528,null,0,r.p,[e.v,e.l,e.F],{ngStyle:[0,"ngStyle"]},null),e.fb(5,{"background-color":0,color:1}),(l()(),e.Sa(6,0,null,null,2,"amexio-label",[],null,null,null,i.ud,i.cb)),e.Ra(7,114688,null,0,b.Nb,[],null,null),(l()(),e.kb(8,0,["",""])),(l()(),e.Sa(9,0,null,null,11,"div",[["class","card-body cardbody"]],null,null,null,null,null)),(l()(),e.Sa(10,0,null,null,1,"amexio-image",[],null,null,null,i.Id,i.qb)),e.Ra(11,114688,null,0,b.ec,[],{path:[0,"path"]},null),(l()(),e.Sa(12,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(13,0,null,null,2,"amexio-label",[],null,null,null,i.ud,i.cb)),e.Ra(14,114688,null,0,b.Nb,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(15,0,["Version: ",""])),(l()(),e.Sa(16,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(17,0,null,null,2,"amexio-label",[],null,null,null,i.ud,i.cb)),e.Ra(18,114688,null,0,b.Nb,[],null,null),(l()(),e.kb(19,0,["Style: ",""])),(l()(),e.Sa(20,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(21,0,null,null,2,"footer",[["class","card-footer flex-end"]],null,null,null,null,null)),(l()(),e.Sa(22,0,null,null,1,"amexio-button",[],null,[[null,"onClick"]],function(l,n,u){var e=!0;return"onClick"===n&&(e=!1!==l.component.themeChange(l.context.$implicit)&&e),e},i.ac,i.i)),e.Ra(23,114688,null,0,b.h,[],{label:[0,"label"],type:[1,"type"]},{onClick:"onClick"})],function(l,n){l(n,1,0,12/n.parent.context.$implicit.length),l(n,4,0,l(n,5,0,n.context.$implicit.navBarBGColor,n.context.$implicit.navBarFontColor)),l(n,7,0),l(n,11,0,"assets/images/theme-icons/"+n.context.$implicit.link),l(n,14,0,"small"),l(n,18,0),l(n,23,0,"Test","default")},function(l,n){l(n,0,0,e.cb(n,1).role),l(n,8,0,n.context.$implicit.themeName),l(n,15,0,n.context.$implicit.version),l(n,19,0,n.context.$implicit.style)})}function h(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,3,"amexio-row",[],null,null,null,i.vc,i.D)),e.Ra(1,1163264,null,0,b.O,[],null,null),(l()(),e.Ja(16777216,null,0,1,null,d)),e.Ra(3,278528,null,0,r.l,[e.R,e.O,e.u],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,1,0),l(n,3,0,n.context.$implicit)},null)}function p(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,20,"amexio-column",[],[[1,"class",0]],null,null,i.ec,i.m)),e.Ra(1,114688,null,0,b.m,[],{size:[0,"size"]},null),(l()(),e.Sa(2,0,null,0,18,"div",[["class","card-container"]],null,null,null,null,null)),(l()(),e.Sa(3,0,null,null,5,"header",[["class","card-header flex-start"]],null,null,null,null,null)),e.Ra(4,278528,null,0,r.p,[e.v,e.l,e.F],{ngStyle:[0,"ngStyle"]},null),e.fb(5,{"background-color":0,color:1}),(l()(),e.Sa(6,0,null,null,2,"amexio-label",[],null,null,null,i.ud,i.cb)),e.Ra(7,114688,null,0,b.Nb,[],null,null),(l()(),e.kb(8,0,["",""])),(l()(),e.Sa(9,0,null,null,11,"div",[["class","card-body cardbody"]],null,null,null,null,null)),(l()(),e.Sa(10,0,null,null,1,"amexio-image",[],null,null,null,i.Id,i.qb)),e.Ra(11,114688,null,0,b.ec,[],{path:[0,"path"]},null),(l()(),e.Sa(12,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(13,0,null,null,2,"amexio-label",[],null,null,null,i.ud,i.cb)),e.Ra(14,114688,null,0,b.Nb,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(15,0,["Version: ",""])),(l()(),e.Sa(16,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(17,0,null,null,2,"amexio-label",[],null,null,null,i.ud,i.cb)),e.Ra(18,114688,null,0,b.Nb,[],null,null),(l()(),e.kb(19,0,["Style: ",""])),(l()(),e.Sa(20,0,null,null,0,"br",[],null,null,null,null,null))],function(l,n){l(n,1,0,12/n.parent.context.$implicit.length),l(n,4,0,l(n,5,0,n.context.$implicit.navBarBGColor,n.context.$implicit.navBarFontColor)),l(n,7,0),l(n,11,0,"assets/images/theme-icons/"+n.context.$implicit.link),l(n,14,0,"small"),l(n,18,0)},function(l,n){l(n,0,0,e.cb(n,1).role),l(n,8,0,n.context.$implicit.themeName),l(n,15,0,n.context.$implicit.version),l(n,19,0,n.context.$implicit.style)})}function x(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,3,"amexio-row",[],null,null,null,i.vc,i.D)),e.Ra(1,1163264,null,0,b.O,[],null,null),(l()(),e.Ja(16777216,null,0,1,null,p)),e.Ra(3,278528,null,0,r.l,[e.R,e.O,e.u],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,1,0),l(n,3,0,n.context.$implicit)},null)}function g(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.kb(1,null,["\n[amexio-color] = '","' "]))],null,function(l,n){l(n,1,0,n.context.row.css)})}function S(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,9,"span",[],null,null,null,null,null)),(l()(),e.Sa(1,0,null,null,8,"div",[],null,null,null,null,null)),e.Ra(2,278528,null,0,r.p,[e.v,e.l,e.F],{ngStyle:[0,"ngStyle"]},null),e.fb(3,{"background-color":0,color:1}),(l()(),e.kb(4,null,[" This is amexio color "," background "])),(l()(),e.Sa(5,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.kb(6,null,[" "," "])),(l()(),e.kb(-1,null,[" with opposite font color "])),(l()(),e.Sa(8,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.kb(9,null,[" "," "]))],function(l,n){l(n,2,0,l(n,3,0,n.context.row.BG,n.context.row.font))},function(l,n){l(n,4,0,n.context.row.name),l(n,6,0,n.context.row.BG),l(n,9,0,n.context.row.font)})}function f(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,1,"amexio-image",[],null,null,null,i.Id,i.qb)),e.Ra(1,114688,null,0,b.ec,[],{tooltip:[0,"tooltip"],path:[1,"path"]},null),(l()(),e.Sa(2,0,null,null,120,"amexio-tab-view",[],null,null,null,i.zc,i.H)),e.Ra(3,5488640,null,2,b.S,[e.F,e.k,e.F],{closable:[0,"closable"]},null),e.ib(603979776,1,{queryTabs:1}),e.ib(603979776,2,{queryAction:1}),(l()(),e.Sa(6,0,null,1,3,"amexio-tab",[["title","Material Design"]],null,null,null,i.Ac,i.I)),e.Ra(7,114688,[[1,4]],0,b.T,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e.Ja(16777216,null,0,1,null,h)),e.Ra(9,278528,null,0,r.l,[e.R,e.O,e.u],{ngForOf:[0,"ngForOf"]},null),(l()(),e.Sa(10,0,null,1,3,"amexio-tab",[["title","Amexio"]],null,null,null,i.Ac,i.I)),e.Ra(11,114688,[[1,4]],0,b.T,[],{title:[0,"title"]},null),(l()(),e.Ja(16777216,null,0,1,null,x)),e.Ra(13,278528,null,0,r.l,[e.R,e.O,e.u],{ngForOf:[0,"ngForOf"]},null),(l()(),e.Sa(14,0,null,1,19,"amexio-tab",[["title","Colors"]],null,null,null,i.Ac,i.I)),e.Ra(15,114688,[[1,4]],0,b.T,[],{title:[0,"title"]},null),(l()(),e.kb(-1,0,[" Eventually we can apply this attribute [amexio-color] to all components, currently we can apply to progress bar and datapoints. To know more refer the API reference section "])),(l()(),e.Sa(17,0,null,0,16,"amexio-datagrid",[["title","Amexio Colors"]],null,null,null,i.Pd,i.xb)),e.Ra(18,1294336,null,1,b.sc,[e.l,b.Sa,e.i,e.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e.ib(603979776,3,{columnRef:1}),(l()(),e.Sa(20,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Qd,i.yb)),e.Ra(21,49152,[[3,4]],2,b.tc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,4,{headerTemplate:0}),e.ib(335544320,5,{bodyTemplate:0}),(l()(),e.Sa(24,0,null,null,4,"amexio-data-table-column",[],null,null,null,i.Qd,i.yb)),e.Ra(25,49152,[[3,4]],2,b.tc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,6,{headerTemplate:0}),e.ib(335544320,7,{bodyTemplate:0}),(l()(),e.Ja(0,[[7,2],["amexioBodyTmpl",2]],null,0,null,g)),(l()(),e.Sa(29,0,null,null,4,"amexio-data-table-column",[],null,null,null,i.Qd,i.yb)),e.Ra(30,49152,[[3,4]],2,b.tc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,8,{headerTemplate:0}),e.ib(335544320,9,{bodyTemplate:0}),(l()(),e.Ja(0,[[9,2],["amexioBodyTmpl",2]],null,0,null,S)),(l()(),e.Sa(34,0,null,1,88,"amexio-tab",[["title","Getting Started"]],null,null,null,i.Ac,i.I)),e.Ra(35,114688,[[1,4]],0,b.T,[],{title:[0,"title"]},null),(l()(),e.Sa(36,0,null,0,2,"amexio-label",[["size","large"]],null,null,null,i.ud,i.cb)),e.Ra(37,114688,null,0,b.Nb,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,["To install the Amexio Colors:"])),(l()(),e.Sa(39,0,null,0,4,"amexio-box",[["background-color","blue"],["border","left"],["border-color","blue"],["padding","true"]],null,null,null,i.Zb,i.h)),e.Ra(40,114688,null,0,b.g,[],{border:[0,"border"],borderColor:[1,"borderColor"],bgColor:[2,"bgColor"],padding:[3,"padding"]},null),(l()(),e.Sa(41,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,i.ud,i.cb)),e.Ra(42,114688,null,0,b.Nb,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,["$ sudo npm install -g amexio-colors"])),(l()(),e.Sa(44,0,null,0,2,"amexio-label",[["size","large"]],null,null,null,i.ud,i.cb)),e.Ra(45,114688,null,0,b.Nb,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,["Check the Amexio Colors version:"])),(l()(),e.Sa(47,0,null,0,17,"amexio-box",[["background-color","blue"],["border","left"],["border-color","blue"],["padding","true"]],null,null,null,i.Zb,i.h)),e.Ra(48,114688,null,0,b.g,[],{border:[0,"border"],borderColor:[1,"borderColor"],bgColor:[2,"bgColor"],padding:[3,"padding"]},null),(l()(),e.Sa(49,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,i.ud,i.cb)),e.Ra(50,114688,null,0,b.Nb,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,[" $ ac "])),(l()(),e.Sa(52,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(53,0,null,0,2,"amexio-label",[],null,null,null,i.ud,i.cb)),e.Ra(54,114688,null,0,b.Nb,[],null,null),(l()(),e.kb(-1,0,[" Amexio Colors v1.0 "])),(l()(),e.Sa(56,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(57,0,null,0,2,"amexio-label",[],null,null,null,i.ud,i.cb)),e.Ra(58,114688,null,0,b.Nb,[],null,null),(l()(),e.kb(-1,0,[" Copyright (c) 2018, MetaMagic Global Inc, NJ, USA "])),(l()(),e.Sa(60,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(61,0,null,0,2,"amexio-label",[],null,null,null,i.ud,i.cb)),e.Ra(62,114688,null,0,b.Nb,[],null,null),(l()(),e.kb(-1,0,[" ..... "])),(l()(),e.Sa(64,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(65,0,null,0,2,"amexio-label",[["size","large"]],null,null,null,i.ud,i.cb)),e.Ra(66,114688,null,0,b.Nb,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,["To Generate Amexio Material Design Themes"])),(l()(),e.Sa(68,0,null,0,39,"amexio-box",[["background-color","blue"],["border","left"],["border-color","blue"],["padding","true"]],null,null,null,i.Zb,i.h)),e.Ra(69,114688,null,0,b.g,[],{border:[0,"border"],borderColor:[1,"borderColor"],bgColor:[2,"bgColor"],padding:[3,"padding"]},null),(l()(),e.Sa(70,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,i.ud,i.cb)),e.Ra(71,114688,null,0,b.Nb,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,["$ pwd"])),(l()(),e.Sa(73,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(74,0,null,0,2,"amexio-label",[["size","medium"]],null,null,null,i.ud,i.cb)),e.Ra(75,114688,null,0,b.Nb,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,["/home/user/"])),(l()(),e.Sa(77,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(78,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(79,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,i.ud,i.cb)),e.Ra(80,114688,null,0,b.Nb,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,["$ mkdir mythemes"])),(l()(),e.Sa(82,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(83,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,i.ud,i.cb)),e.Ra(84,114688,null,0,b.Nb,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,['$ echo "// Amexio Themes v0.0 " >> Themes-Data.txt'])),(l()(),e.Sa(86,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(87,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,i.ud,i.cb)),e.Ra(88,114688,null,0,b.Nb,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,['$ echo "// Design-Type : Material Design " >> Themes-Data.txt'])),(l()(),e.Sa(90,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(91,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,i.ud,i.cb)),e.Ra(92,114688,null,0,b.Nb,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,['$ echo "// Theme-Version : 4.0 " >> Themes-Data.txt'])),(l()(),e.Sa(94,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(95,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,i.ud,i.cb)),e.Ra(96,114688,null,0,b.Nb,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,['$ echo "army-olive,#4B5320,#708238" >> Themes-Data.txt'])),(l()(),e.Sa(98,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(99,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,i.ud,i.cb)),e.Ra(100,114688,null,0,b.Nb,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,['$ echo "ash-stone-black,#544C4A,#877F7D" >> Themes-Data.txt'])),(l()(),e.Sa(102,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(103,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(104,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,i.ud,i.cb)),e.Ra(105,114688,null,0,b.Nb,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,["$ ac Themes-Data.txt /home/user/mythemes/"])),(l()(),e.Sa(107,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(108,0,null,0,2,"amexio-label",[["size","large"]],null,null,null,i.ud,i.cb)),e.Ra(109,114688,null,0,b.Nb,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,[" Amexio Colors API Documentation"])),(l()(),e.Sa(111,0,null,0,11,"p",[],null,null,null,null,null)),(l()(),e.Sa(112,0,null,null,2,"amexio-label",[],null,null,null,i.ud,i.cb)),e.Ra(113,114688,null,0,b.Nb,[],null,null),(l()(),e.kb(-1,0,[" Checkout the Amexio Colors API Documentation published in "])),(l()(),e.Sa(115,0,null,null,1,"a",[["href","https://meta-magic.github.io/AmexioColors/"],["target","_blank"]],null,null,null,null,null)),(l()(),e.kb(-1,null,["GitHub Pages"])),(l()(),e.Sa(117,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(118,0,null,null,2,"amexio-label",[],null,null,null,i.ud,i.cb)),e.Ra(119,114688,null,0,b.Nb,[],null,null),(l()(),e.kb(-1,0,["For Testing the Themes Autogenerated by the Amexio Colors Checkout the Amexio"])),(l()(),e.Sa(121,0,null,null,1,"a",[["href","http://www.amexio.org/api/v4/index.html"],["target","_blank"]],null,null,null,null,null)),(l()(),e.kb(-1,null,["API Site"]))],function(l,n){var u=n.component;l(n,1,0,"Image","assets/images/logos/amexio_colors.jpeg"),l(n,3,0,!1),l(n,7,0,"Material Design",!0),l(n,9,0,u.mdThemeData),l(n,11,0,"Amexio"),l(n,13,0,u.amexioThemeData),l(n,15,0,"Colors"),l(n,18,0,"Amexio Colors","assets/data/theme/amexio-colours.json","get","colors",!1,!1),l(n,21,0,"Name","name",!1,"string",15),l(n,25,0,"CSS Class Name","css",!1,"string",15),l(n,30,0,"Color","BG",!1,"string",15),l(n,35,0,"Getting Started"),l(n,37,0,"large"),l(n,40,0,"left","blue","blue","true"),l(n,42,0,"medium-bold"),l(n,45,0,"large"),l(n,48,0,"left","blue","blue","true"),l(n,50,0,"medium-bold"),l(n,54,0),l(n,58,0),l(n,62,0),l(n,66,0,"large"),l(n,69,0,"left","blue","blue","true"),l(n,71,0,"medium-bold"),l(n,75,0,"medium"),l(n,80,0,"medium-bold"),l(n,84,0,"medium-bold"),l(n,88,0,"medium-bold"),l(n,92,0,"medium-bold"),l(n,96,0,"medium-bold"),l(n,100,0,"medium-bold"),l(n,105,0,"medium-bold"),l(n,109,0,"large"),l(n,113,0),l(n,119,0)},null)}var y=e.Oa("theme-page",t,function(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,1,"theme-page",[],null,null,null,f,m)),e.Ra(1,114688,null,0,t,[c.c,a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),C=u("gIcY"),k=u("ZYCi");u.d(n,"ThemeModuleNgFactory",function(){return R});var R=e.Pa(o,[],function(l){return e.Za([e.ab(512,e.k,e.Ea,[[8,[i.a,s.a,y]],[3,e.k],e.z]),e.ab(4608,r.o,r.n,[e.w,[2,r.x]]),e.ab(4608,c.i,c.o,[r.d,e.D,c.m]),e.ab(4608,c.p,c.p,[c.i,c.n]),e.ab(5120,c.a,function(l){return[l]},[c.p]),e.ab(4608,c.l,c.l,[]),e.ab(6144,c.j,null,[c.l]),e.ab(4608,c.h,c.h,[c.j]),e.ab(6144,c.b,null,[c.h]),e.ab(4608,c.f,c.k,[c.b,e.s]),e.ab(4608,c.c,c.c,[c.f]),e.ab(4608,C.G,C.G,[]),e.ab(4608,b.Sa,b.Sa,[c.c]),e.ab(4608,b.nb,b.nb,[]),e.ab(4608,b.cb,b.cb,[e.D]),e.ab(4608,b.B,b.B,[]),e.ab(4608,b.Jb,b.Jb,[]),e.ab(4608,C.f,C.f,[]),e.ab(4608,b.ib,b.ib,[]),e.ab(4608,a,a,[r.d]),e.ab(1073742336,r.c,r.c,[]),e.ab(1073742336,c.e,c.e,[]),e.ab(1073742336,c.d,c.d,[]),e.ab(1073742336,C.D,C.D,[]),e.ab(1073742336,C.l,C.l,[]),e.ab(1073742336,b.Cb,b.Cb,[]),e.ab(1073742336,b.D,b.D,[]),e.ab(1073742336,b.x,b.x,[]),e.ab(1073742336,b.G,b.G,[]),e.ab(1073742336,b.I,b.I,[]),e.ab(1073742336,C.z,C.z,[]),e.ab(1073742336,b.L,b.L,[]),e.ab(1073742336,b.p,b.p,[]),e.ab(1073742336,b.Aa,b.Aa,[]),e.ab(1073742336,k.n,k.n,[[2,k.t],[2,k.m]]),e.ab(1073742336,o,o,[]),e.ab(256,c.m,"XSRF-TOKEN",[]),e.ab(256,c.n,"X-XSRF-TOKEN",[]),e.ab(1024,k.i,function(){return[[{path:"",component:t}]]},[])])})}}]);