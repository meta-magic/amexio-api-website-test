(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{"1imY":function(l,n,e){"use strict";e.r(n);var u=e("CcnG"),a=function(){function l(l){this.document=l,this.documentIsAccessible=void 0!==l}return l.prototype.check=function(l){return!!this.documentIsAccessible&&(l=encodeURIComponent(l),this.getCookieRegExp(l).test(this.document.cookie))},l.prototype.get=function(l){if(this.documentIsAccessible&&this.check(l)){l=encodeURIComponent(l);var n=this.getCookieRegExp(l).exec(this.document.cookie);return decodeURIComponent(n[1])}return""},l.prototype.getAll=function(){if(!this.documentIsAccessible)return{};var l={},n=this.document;if(n.cookie&&""!==n.cookie)for(var e=n.cookie.split(";"),u=0;u<e.length;u+=1){var a=e[u].split("=");a[0]=a[0].replace(/^ /,""),l[decodeURIComponent(a[0])]=decodeURIComponent(a[1])}return l},l.prototype.set=function(l,n,e,u,a,t){if(this.documentIsAccessible){var o=encodeURIComponent(l)+"="+encodeURIComponent(n)+";";e&&(o+="number"==typeof e?"expires="+new Date((new Date).getTime()+1e3*e*60*60*24).toUTCString()+";":"expires="+e.toUTCString()+";"),u&&(o+="path="+u+";"),a&&(o+="domain="+a+";"),t&&(o+="secure;"),this.document.cookie=o}},l.prototype.delete=function(l,n,e){this.documentIsAccessible&&this.set(l,"",-1,n,e)},l.prototype.deleteAll=function(l,n){if(this.documentIsAccessible){var e=this.getAll();for(var u in e)e.hasOwnProperty(u)&&this.delete(u,l,n)}},l.prototype.getCookieRegExp=function(l){var n=l.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/gi,"\\$1");return new RegExp("(?:^"+n+"|;\\s*"+n+")=(.*?)(?:;|$)","g")},l}(),t=function(){function l(l,n){this.http=l,this.cookieService=n,this.hasThemeInit=!1}return l.prototype.ngOnInit=function(){var l,n=this;this.http.get("assets/data/theme/theme-api-showcase.json",{responseType:"json"}).subscribe(function(n){l=n},function(l){},function(){n.mdThemeData=l}),this.http.get("assets/data/theme/theme-api-showcase-amexio.json",{responseType:"json"}).subscribe(function(n){l=n},function(l){},function(){n.amexioThemeData=l})},l.prototype.addNewTheme=function(l,n){var e=this,u=document.createElement("link");u.onload=function(){e.removeExistingTheme(n)},u.setAttribute("rel","stylesheet"),u.id="themeid",u.href=l,document.head.appendChild(u)},l.prototype.removeExistingTheme=function(l){if(null!=l&&l&&0!=l.length)for(var n=0;n<l.length;n++){var e=l[n];"themeid"==e.id&&document.head.removeChild(e)}},l.prototype.themeChange=function(l){this.newThemePath="assets/themes/"+l.themeCssFile+".css";var n=document.head.querySelectorAll('link[rel="stylesheet"]');this.addNewTheme(this.newThemePath,n),this.cookieService.set("theme_name_v4",l.themeCssFile)},l}(),o=function(){},i=e("gTgE"),s=e("pMnS"),b=e("O4vx"),r=e("Ip0R"),m=e("t/Na"),c=u.Qa({encapsulation:2,styles:[],data:{}});function d(l){return u.mb(0,[(l()(),u.Sa(0,0,null,null,23,"amexio-column",[],[[1,"class",0]],null,null,i.dc,i.m)),u.Ra(1,114688,null,0,b.m,[],{size:[0,"size"]},null),(l()(),u.Sa(2,0,null,0,21,"div",[["class","card-container"]],null,null,null,null,null)),(l()(),u.Sa(3,0,null,null,5,"header",[["class","card-header flex-start"]],null,null,null,null,null)),u.Ra(4,278528,null,0,r.p,[u.v,u.l,u.F],{ngStyle:[0,"ngStyle"]},null),u.fb(5,{"background-color":0,color:1}),(l()(),u.Sa(6,0,null,null,2,"amexio-label",[],null,null,null,i.sd,i.bb)),u.Ra(7,114688,null,0,b.Hb,[],null,null),(l()(),u.kb(8,0,["",""])),(l()(),u.Sa(9,0,null,null,11,"div",[["class","card-body cardbody"]],null,null,null,null,null)),(l()(),u.Sa(10,0,null,null,1,"amexio-image",[],null,null,null,i.Gd,i.pb)),u.Ra(11,114688,null,0,b.Xb,[],{path:[0,"path"]},null),(l()(),u.Sa(12,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Sa(13,0,null,null,2,"amexio-label",[],null,null,null,i.sd,i.bb)),u.Ra(14,114688,null,0,b.Hb,[],{styleClass:[0,"styleClass"]},null),(l()(),u.kb(15,0,["Version: ",""])),(l()(),u.Sa(16,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Sa(17,0,null,null,2,"amexio-label",[],null,null,null,i.sd,i.bb)),u.Ra(18,114688,null,0,b.Hb,[],null,null),(l()(),u.kb(19,0,["Style: ",""])),(l()(),u.Sa(20,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Sa(21,0,null,null,2,"footer",[["class","card-footer flex-end"]],null,null,null,null,null)),(l()(),u.Sa(22,0,null,null,1,"amexio-button",[],null,[[null,"onClick"]],function(l,n,e){var u=!0;return"onClick"===n&&(u=!1!==l.component.themeChange(l.context.$implicit)&&u),u},i.Zb,i.i)),u.Ra(23,114688,null,0,b.h,[],{label:[0,"label"],type:[1,"type"]},{onClick:"onClick"})],function(l,n){l(n,1,0,12/n.parent.context.$implicit.length),l(n,4,0,l(n,5,0,n.context.$implicit.navBarBGColor,n.context.$implicit.navBarFontColor)),l(n,7,0),l(n,11,0,"assets/images/theme-icons/"+n.context.$implicit.link),l(n,14,0,"small"),l(n,18,0),l(n,23,0,"Test","default")},function(l,n){l(n,0,0,u.cb(n,1).role),l(n,8,0,n.context.$implicit.themeName),l(n,15,0,n.context.$implicit.version),l(n,19,0,n.context.$implicit.style)})}function h(l){return u.mb(0,[(l()(),u.Sa(0,0,null,null,3,"amexio-row",[],null,null,null,i.tc,i.C)),u.Ra(1,1163264,null,0,b.N,[],null,null),(l()(),u.Ja(16777216,null,0,1,null,d)),u.Ra(3,278528,null,0,r.l,[u.R,u.O,u.u],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,1,0),l(n,3,0,n.context.$implicit)},null)}function p(l){return u.mb(0,[(l()(),u.Sa(0,0,null,null,20,"amexio-column",[],[[1,"class",0]],null,null,i.dc,i.m)),u.Ra(1,114688,null,0,b.m,[],{size:[0,"size"]},null),(l()(),u.Sa(2,0,null,0,18,"div",[["class","card-container"]],null,null,null,null,null)),(l()(),u.Sa(3,0,null,null,5,"header",[["class","card-header flex-start"]],null,null,null,null,null)),u.Ra(4,278528,null,0,r.p,[u.v,u.l,u.F],{ngStyle:[0,"ngStyle"]},null),u.fb(5,{"background-color":0,color:1}),(l()(),u.Sa(6,0,null,null,2,"amexio-label",[],null,null,null,i.sd,i.bb)),u.Ra(7,114688,null,0,b.Hb,[],null,null),(l()(),u.kb(8,0,["",""])),(l()(),u.Sa(9,0,null,null,11,"div",[["class","card-body cardbody"]],null,null,null,null,null)),(l()(),u.Sa(10,0,null,null,1,"amexio-image",[],null,null,null,i.Gd,i.pb)),u.Ra(11,114688,null,0,b.Xb,[],{path:[0,"path"]},null),(l()(),u.Sa(12,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Sa(13,0,null,null,2,"amexio-label",[],null,null,null,i.sd,i.bb)),u.Ra(14,114688,null,0,b.Hb,[],{styleClass:[0,"styleClass"]},null),(l()(),u.kb(15,0,["Version: ",""])),(l()(),u.Sa(16,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Sa(17,0,null,null,2,"amexio-label",[],null,null,null,i.sd,i.bb)),u.Ra(18,114688,null,0,b.Hb,[],null,null),(l()(),u.kb(19,0,["Style: ",""])),(l()(),u.Sa(20,0,null,null,0,"br",[],null,null,null,null,null))],function(l,n){l(n,1,0,12/n.parent.context.$implicit.length),l(n,4,0,l(n,5,0,n.context.$implicit.navBarBGColor,n.context.$implicit.navBarFontColor)),l(n,7,0),l(n,11,0,"assets/images/theme-icons/"+n.context.$implicit.link),l(n,14,0,"small"),l(n,18,0)},function(l,n){l(n,0,0,u.cb(n,1).role),l(n,8,0,n.context.$implicit.themeName),l(n,15,0,n.context.$implicit.version),l(n,19,0,n.context.$implicit.style)})}function x(l){return u.mb(0,[(l()(),u.Sa(0,0,null,null,3,"amexio-row",[],null,null,null,i.tc,i.C)),u.Ra(1,1163264,null,0,b.N,[],null,null),(l()(),u.Ja(16777216,null,0,1,null,p)),u.Ra(3,278528,null,0,r.l,[u.R,u.O,u.u],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,1,0),l(n,3,0,n.context.$implicit)},null)}function g(l){return u.mb(0,[(l()(),u.Sa(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.kb(1,null,["\n[amexio-color] = '","' "]))],null,function(l,n){l(n,1,0,n.context.row.css)})}function S(l){return u.mb(0,[(l()(),u.Sa(0,0,null,null,9,"span",[],null,null,null,null,null)),(l()(),u.Sa(1,0,null,null,8,"div",[],null,null,null,null,null)),u.Ra(2,278528,null,0,r.p,[u.v,u.l,u.F],{ngStyle:[0,"ngStyle"]},null),u.fb(3,{"background-color":0,color:1}),(l()(),u.kb(4,null,[" This is amexio color "," background "])),(l()(),u.Sa(5,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.kb(6,null,[" "," "])),(l()(),u.kb(-1,null,[" with opposite font color "])),(l()(),u.Sa(8,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.kb(9,null,[" "," "]))],function(l,n){l(n,2,0,l(n,3,0,n.context.row.BG,n.context.row.font))},function(l,n){l(n,4,0,n.context.row.name),l(n,6,0,n.context.row.BG),l(n,9,0,n.context.row.font)})}function y(l){return u.mb(0,[(l()(),u.Sa(0,0,null,null,1,"amexio-image",[],null,null,null,i.Gd,i.pb)),u.Ra(1,114688,null,0,b.Xb,[],{tooltip:[0,"tooltip"],path:[1,"path"]},null),(l()(),u.Sa(2,0,null,null,120,"amexio-tab-view",[],null,null,null,i.xc,i.G)),u.Ra(3,5488640,null,2,b.R,[u.F,u.k,u.F],{closable:[0,"closable"]},null),u.ib(603979776,1,{queryTabs:1}),u.ib(603979776,2,{queryAction:1}),(l()(),u.Sa(6,0,null,1,3,"amexio-tab",[["title","Material Design"]],null,null,null,i.yc,i.H)),u.Ra(7,114688,[[1,4]],0,b.S,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),u.Ja(16777216,null,0,1,null,h)),u.Ra(9,278528,null,0,r.l,[u.R,u.O,u.u],{ngForOf:[0,"ngForOf"]},null),(l()(),u.Sa(10,0,null,1,3,"amexio-tab",[["title","Amexio"]],null,null,null,i.yc,i.H)),u.Ra(11,114688,[[1,4]],0,b.S,[],{title:[0,"title"]},null),(l()(),u.Ja(16777216,null,0,1,null,x)),u.Ra(13,278528,null,0,r.l,[u.R,u.O,u.u],{ngForOf:[0,"ngForOf"]},null),(l()(),u.Sa(14,0,null,1,19,"amexio-tab",[["title","Colors"]],null,null,null,i.yc,i.H)),u.Ra(15,114688,[[1,4]],0,b.S,[],{title:[0,"title"]},null),(l()(),u.kb(-1,0,[" Eventually we can apply this attribute [amexio-color] to all components, currently we can apply to progress bar and datapoints. To know more refer the API reference section "])),(l()(),u.Sa(17,0,null,0,16,"amexio-datagrid",[["title","Amexio Colors"]],null,null,null,i.Od,i.xb)),u.Ra(18,1294336,null,1,b.mc,[u.l,b.Qa,u.i,u.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),u.ib(603979776,3,{columnRef:1}),(l()(),u.Sa(20,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),u.Ra(21,49152,[[3,4]],2,b.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u.ib(335544320,4,{headerTemplate:0}),u.ib(335544320,5,{bodyTemplate:0}),(l()(),u.Sa(24,0,null,null,4,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),u.Ra(25,49152,[[3,4]],2,b.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u.ib(335544320,6,{headerTemplate:0}),u.ib(335544320,7,{bodyTemplate:0}),(l()(),u.Ja(0,[[7,2],["amexioBodyTmpl",2]],null,0,null,g)),(l()(),u.Sa(29,0,null,null,4,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),u.Ra(30,49152,[[3,4]],2,b.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u.ib(335544320,8,{headerTemplate:0}),u.ib(335544320,9,{bodyTemplate:0}),(l()(),u.Ja(0,[[9,2],["amexioBodyTmpl",2]],null,0,null,S)),(l()(),u.Sa(34,0,null,1,88,"amexio-tab",[["title","Getting Started"]],null,null,null,i.yc,i.H)),u.Ra(35,114688,[[1,4]],0,b.S,[],{title:[0,"title"]},null),(l()(),u.Sa(36,0,null,0,2,"amexio-label",[["size","large"]],null,null,null,i.sd,i.bb)),u.Ra(37,114688,null,0,b.Hb,[],{styleClass:[0,"styleClass"]},null),(l()(),u.kb(-1,0,["To install the Amexio Colors:"])),(l()(),u.Sa(39,0,null,0,4,"amexio-box",[["background-color","blue"],["border","left"],["border-color","blue"],["padding","true"]],null,null,null,i.Yb,i.h)),u.Ra(40,114688,null,0,b.g,[],{border:[0,"border"],borderColor:[1,"borderColor"],bgColor:[2,"bgColor"],padding:[3,"padding"]},null),(l()(),u.Sa(41,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,i.sd,i.bb)),u.Ra(42,114688,null,0,b.Hb,[],{styleClass:[0,"styleClass"]},null),(l()(),u.kb(-1,0,["$ sudo npm install -g amexio-colors"])),(l()(),u.Sa(44,0,null,0,2,"amexio-label",[["size","large"]],null,null,null,i.sd,i.bb)),u.Ra(45,114688,null,0,b.Hb,[],{styleClass:[0,"styleClass"]},null),(l()(),u.kb(-1,0,["Check the Amexio Colors version:"])),(l()(),u.Sa(47,0,null,0,17,"amexio-box",[["background-color","blue"],["border","left"],["border-color","blue"],["padding","true"]],null,null,null,i.Yb,i.h)),u.Ra(48,114688,null,0,b.g,[],{border:[0,"border"],borderColor:[1,"borderColor"],bgColor:[2,"bgColor"],padding:[3,"padding"]},null),(l()(),u.Sa(49,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,i.sd,i.bb)),u.Ra(50,114688,null,0,b.Hb,[],{styleClass:[0,"styleClass"]},null),(l()(),u.kb(-1,0,[" $ ac "])),(l()(),u.Sa(52,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Sa(53,0,null,0,2,"amexio-label",[],null,null,null,i.sd,i.bb)),u.Ra(54,114688,null,0,b.Hb,[],null,null),(l()(),u.kb(-1,0,[" Amexio Colors v1.0 "])),(l()(),u.Sa(56,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Sa(57,0,null,0,2,"amexio-label",[],null,null,null,i.sd,i.bb)),u.Ra(58,114688,null,0,b.Hb,[],null,null),(l()(),u.kb(-1,0,[" Copyright (c) 2018, MetaMagic Global Inc, NJ, USA "])),(l()(),u.Sa(60,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Sa(61,0,null,0,2,"amexio-label",[],null,null,null,i.sd,i.bb)),u.Ra(62,114688,null,0,b.Hb,[],null,null),(l()(),u.kb(-1,0,[" ..... "])),(l()(),u.Sa(64,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Sa(65,0,null,0,2,"amexio-label",[["size","large"]],null,null,null,i.sd,i.bb)),u.Ra(66,114688,null,0,b.Hb,[],{styleClass:[0,"styleClass"]},null),(l()(),u.kb(-1,0,["To Generate Amexio Material Design Themes"])),(l()(),u.Sa(68,0,null,0,39,"amexio-box",[["background-color","blue"],["border","left"],["border-color","blue"],["padding","true"]],null,null,null,i.Yb,i.h)),u.Ra(69,114688,null,0,b.g,[],{border:[0,"border"],borderColor:[1,"borderColor"],bgColor:[2,"bgColor"],padding:[3,"padding"]},null),(l()(),u.Sa(70,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,i.sd,i.bb)),u.Ra(71,114688,null,0,b.Hb,[],{styleClass:[0,"styleClass"]},null),(l()(),u.kb(-1,0,["$ pwd"])),(l()(),u.Sa(73,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Sa(74,0,null,0,2,"amexio-label",[["size","medium"]],null,null,null,i.sd,i.bb)),u.Ra(75,114688,null,0,b.Hb,[],{styleClass:[0,"styleClass"]},null),(l()(),u.kb(-1,0,["/home/user/"])),(l()(),u.Sa(77,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Sa(78,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Sa(79,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,i.sd,i.bb)),u.Ra(80,114688,null,0,b.Hb,[],{styleClass:[0,"styleClass"]},null),(l()(),u.kb(-1,0,["$ mkdir mythemes"])),(l()(),u.Sa(82,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Sa(83,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,i.sd,i.bb)),u.Ra(84,114688,null,0,b.Hb,[],{styleClass:[0,"styleClass"]},null),(l()(),u.kb(-1,0,['$ echo "// Amexio Themes v0.0 " >> Themes-Data.txt'])),(l()(),u.Sa(86,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Sa(87,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,i.sd,i.bb)),u.Ra(88,114688,null,0,b.Hb,[],{styleClass:[0,"styleClass"]},null),(l()(),u.kb(-1,0,['$ echo "// Design-Type : Material Design " >> Themes-Data.txt'])),(l()(),u.Sa(90,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Sa(91,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,i.sd,i.bb)),u.Ra(92,114688,null,0,b.Hb,[],{styleClass:[0,"styleClass"]},null),(l()(),u.kb(-1,0,['$ echo "// Theme-Version : 4.0 " >> Themes-Data.txt'])),(l()(),u.Sa(94,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Sa(95,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,i.sd,i.bb)),u.Ra(96,114688,null,0,b.Hb,[],{styleClass:[0,"styleClass"]},null),(l()(),u.kb(-1,0,['$ echo "army-olive,#4B5320,#708238" >> Themes-Data.txt'])),(l()(),u.Sa(98,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Sa(99,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,i.sd,i.bb)),u.Ra(100,114688,null,0,b.Hb,[],{styleClass:[0,"styleClass"]},null),(l()(),u.kb(-1,0,['$ echo "ash-stone-black,#544C4A,#877F7D" >> Themes-Data.txt'])),(l()(),u.Sa(102,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Sa(103,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Sa(104,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,i.sd,i.bb)),u.Ra(105,114688,null,0,b.Hb,[],{styleClass:[0,"styleClass"]},null),(l()(),u.kb(-1,0,["$ ac Themes-Data.txt /home/user/mythemes/"])),(l()(),u.Sa(107,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Sa(108,0,null,0,2,"amexio-label",[["size","large"]],null,null,null,i.sd,i.bb)),u.Ra(109,114688,null,0,b.Hb,[],{styleClass:[0,"styleClass"]},null),(l()(),u.kb(-1,0,[" Amexio Colors API Documentation"])),(l()(),u.Sa(111,0,null,0,11,"p",[],null,null,null,null,null)),(l()(),u.Sa(112,0,null,null,2,"amexio-label",[],null,null,null,i.sd,i.bb)),u.Ra(113,114688,null,0,b.Hb,[],null,null),(l()(),u.kb(-1,0,[" Checkout the Amexio Colors API Documentation published in "])),(l()(),u.Sa(115,0,null,null,1,"a",[["href","https://meta-magic.github.io/AmexioColors/"],["target","_blank"]],null,null,null,null,null)),(l()(),u.kb(-1,null,[" GitHub Pages"])),(l()(),u.Sa(117,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Sa(118,0,null,null,2,"amexio-label",[],null,null,null,i.sd,i.bb)),u.Ra(119,114688,null,0,b.Hb,[],null,null),(l()(),u.kb(-1,0,["For Testing the Themes Autogenerated by the Amexio Colors Checkout the Amexio"])),(l()(),u.Sa(121,0,null,null,1,"a",[["href","https://api.amexio.org/api/v5.5/index.html#/getting-started"],["target","_blank"]],null,null,null,null,null)),(l()(),u.kb(-1,null,[" API Site"]))],function(l,n){var e=n.component;l(n,1,0,"Image","assets/images/logos/amexio_colors.jpeg"),l(n,3,0,!1),l(n,7,0,"Material Design",!0),l(n,9,0,e.mdThemeData),l(n,11,0,"Amexio"),l(n,13,0,e.amexioThemeData),l(n,15,0,"Colors"),l(n,18,0,"Amexio Colors","assets/data/theme/amexio-colours.json","get","colors",!1,!1),l(n,21,0,"Name","name",!1,"string",15),l(n,25,0,"CSS Class Name","css",!1,"string",15),l(n,30,0,"Color","BG",!1,"string",15),l(n,35,0,"Getting Started"),l(n,37,0,"large"),l(n,40,0,"left","blue","blue","true"),l(n,42,0,"medium-bold"),l(n,45,0,"large"),l(n,48,0,"left","blue","blue","true"),l(n,50,0,"medium-bold"),l(n,54,0),l(n,58,0),l(n,62,0),l(n,66,0,"large"),l(n,69,0,"left","blue","blue","true"),l(n,71,0,"medium-bold"),l(n,75,0,"medium"),l(n,80,0,"medium-bold"),l(n,84,0,"medium-bold"),l(n,88,0,"medium-bold"),l(n,92,0,"medium-bold"),l(n,96,0,"medium-bold"),l(n,100,0,"medium-bold"),l(n,105,0,"medium-bold"),l(n,109,0,"large"),l(n,113,0),l(n,119,0)},null)}var f=u.Oa("theme-page",t,function(l){return u.mb(0,[(l()(),u.Sa(0,0,null,null,1,"theme-page",[],null,null,null,y,c)),u.Ra(1,114688,null,0,t,[m.c,a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),C=e("gIcY"),k=e("ZYCi");e.d(n,"ThemeModuleNgFactory",function(){return R});var R=u.Pa(o,[],function(l){return u.Za([u.ab(512,u.k,u.Ea,[[8,[i.a,s.a,f]],[3,u.k],u.z]),u.ab(4608,r.o,r.n,[u.w,[2,r.x]]),u.ab(4608,m.i,m.o,[r.d,u.D,m.m]),u.ab(4608,m.p,m.p,[m.i,m.n]),u.ab(5120,m.a,function(l){return[l]},[m.p]),u.ab(4608,m.l,m.l,[]),u.ab(6144,m.j,null,[m.l]),u.ab(4608,m.h,m.h,[m.j]),u.ab(6144,m.b,null,[m.h]),u.ab(4608,m.f,m.k,[m.b,u.s]),u.ab(4608,m.c,m.c,[m.f]),u.ab(4608,C.G,C.G,[]),u.ab(4608,b.Qa,b.Qa,[m.c]),u.ab(4608,b.ab,b.ab,[u.D]),u.ab(4608,b.jb,b.jb,[]),u.ab(4608,b.A,b.A,[]),u.ab(4608,b.Db,b.Db,[]),u.ab(4608,C.f,C.f,[]),u.ab(4608,a,a,[r.d]),u.ab(1073742336,r.c,r.c,[]),u.ab(1073742336,m.e,m.e,[]),u.ab(1073742336,m.d,m.d,[]),u.ab(1073742336,C.D,C.D,[]),u.ab(1073742336,C.l,C.l,[]),u.ab(1073742336,b.C,b.C,[]),u.ab(1073742336,b.x,b.x,[]),u.ab(1073742336,b.F,b.F,[]),u.ab(1073742336,b.H,b.H,[]),u.ab(1073742336,C.z,C.z,[]),u.ab(1073742336,b.K,b.K,[]),u.ab(1073742336,b.p,b.p,[]),u.ab(1073742336,b.Y,b.Y,[]),u.ab(1073742336,k.n,k.n,[[2,k.t],[2,k.m]]),u.ab(1073742336,o,o,[]),u.ab(256,m.m,"XSRF-TOKEN",[]),u.ab(256,m.n,"X-XSRF-TOKEN",[]),u.ab(1024,k.i,function(){return[[{path:"",component:t}]]},[])])})}}]);