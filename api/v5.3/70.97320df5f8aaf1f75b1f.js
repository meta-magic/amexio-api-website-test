(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{U89g:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i});var l=n("CcnG"),a=(n("d2mR"),n("Ip0R"),l.Qa({encapsulation:2,styles:[],data:{}}));function i(e){return l.mb(0,[],null,null)}},XIHC:function(e,t){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return a}),n("wZee"),n("XIHC");var l=function(){function e(e,t){this._renderer=e,this._el=t,this.nativeElement=t.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),a=function(){}},wZee:function(e,t){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},l=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,l=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,l.util.encode(e.content),e.alias):"Array"===l.util.type(e)?e.map(l.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var n=l.util.type(e);switch(t=t||{},n){case"Object":if(t[l.util.objId(e)])return t[l.util.objId(e)];var a={};for(var i in t[l.util.objId(e)]=a,e)e.hasOwnProperty(i)&&(a[i]=l.util.clone(e[i],t));return a;case"Array":return t[l.util.objId(e)]?t[l.util.objId(e)]:(a=[],t[l.util.objId(e)]=a,e.forEach(function(e,n){a[n]=l.util.clone(e,t)}),a)}return e}},languages:{extend:function(e,t){var n=l.util.clone(l.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(e,t,n,a){var i=(a=a||l.languages)[e];if(2==arguments.length){for(var r in n=arguments[1])n.hasOwnProperty(r)&&(i[r]=n[r]);return i}var u={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var r in n)n.hasOwnProperty(r)&&(u[r]=n[r]);u[o]=i[o]}return l.languages.DFS(l.languages,function(t,n){n===a[e]&&t!=e&&(this[t]=u)}),a[e]=u},DFS:function(e,t,n,a){for(var i in a=a||{},e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],n||i),"Object"!==l.util.type(e[i])||a[l.util.objId(e[i])]?"Array"!==l.util.type(e[i])||a[l.util.objId(e[i])]||(a[l.util.objId(e[i])]=!0,l.languages.DFS(e[i],t,i,a)):(a[l.util.objId(e[i])]=!0,l.languages.DFS(e[i],t,null,a)))}},plugins:{},highlightAll:function(e,t){l.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",a);for(var i,r=a.elements||e.querySelectorAll(a.selector),u=0;i=r[u++];)l.highlightElement(i,!0===t,a.callback)},highlightElement:function(t,a,i){for(var r,u,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(r=(o.className.match(e)||[,""])[1].toLowerCase(),u=l.languages[r]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,t.parentNode&&/pre/i.test((o=t.parentNode).nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+r);var s={element:t,language:r,grammar:u,code:t.textContent};if(l.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(l.hooks.run("before-highlight",s),s.element.textContent=s.code,l.hooks.run("after-highlight",s)),void l.hooks.run("complete",s);if(l.hooks.run("before-highlight",s),a&&n.Worker){var d=new Worker(l.filename);d.onmessage=function(e){s.highlightedCode=e.data,l.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),l.hooks.run("after-highlight",s),l.hooks.run("complete",s)},d.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=l.highlight(s.code,s.grammar,s.language),l.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(t),l.hooks.run("after-highlight",s),l.hooks.run("complete",s)},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return l.hooks.run("before-tokenize",i),i.tokens=l.tokenize(i.code,i.grammar),l.hooks.run("after-tokenize",i),a.stringify(l.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,n,a,i,r,u){var o=l.Token;for(var s in n)if(n.hasOwnProperty(s)&&n[s]){if(s==u)return;var d=n[s];d="Array"===l.util.type(d)?d:[d];for(var c=0;c<d.length;++c){var p=d[c],h=p.inside,g=!!p.lookbehind,m=!!p.greedy,b=0,f=p.alias;if(m&&!p.pattern.global){var y=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,y+"g")}p=p.pattern||p;for(var x=a,w=i;x<t.length;w+=t[x].length,++x){var k=t[x];if(t.length>e.length)return;if(!(k instanceof o)){if(m&&x!=t.length-1){if(p.lastIndex=w,!(A=p.exec(e)))break;for(var v=A.index+(g?A[1].length:0),S=A.index+A[0].length,C=x,T=w,R=t.length;C<R&&(T<S||!t[C].type&&!t[C-1].greedy);++C)v>=(T+=t[C].length)&&(++x,w=T);if(t[x]instanceof o)continue;F=C-x,k=e.slice(w,T),A.index-=w}else{p.lastIndex=0;var A=p.exec(k),F=1}if(A){g&&(b=A[1]?A[1].length:0),S=(v=A.index+b)+(A=A[0].slice(b)).length;var D=k.slice(0,v),j=k.slice(S),N=[x,F];D&&(++x,w+=D.length,N.push(D));var P=new o(s,h?l.tokenize(A,h):A,f,A,m);if(N.push(P),j&&N.push(j),Array.prototype.splice.apply(t,N),1!=F&&l.matchGrammar(e,t,n,x,w,!0,s),r)break}else if(r)break}}}}},tokenize:function(e,t,n){var a=[e],i=t.rest;if(i){for(var r in i)t[r]=i[r];delete t.rest}return l.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var n=l.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=l.hooks.all[e];if(n&&n.length)for(var a,i=0;a=n[i++];)a(t)}}},a=l.Token=function(e,t,n,l,a){this.type=e,this.content=t,this.alias=n,this.length=0|(l||"").length,this.greedy=!!a};if(a.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===l.util.type(e))return e.map(function(n){return a.stringify(n,t,e)}).join("");var i={type:e.type,content:a.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var r="Array"===l.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,r)}l.hooks.run("wrap",i);var u=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(u?" "+u:"")+">"+i.content+"</"+i.tag+">"},!n.document)return n.addEventListener?(l.disableWorkerMessageHandler||n.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,i=t.immediateClose;n.postMessage(l.highlight(t.code,l.languages[a],a)),i&&n.close()},!1),n.Prism):n.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(l.filename=i.src,l.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(l.highlightAll):window.setTimeout(l.highlightAll,16):document.addEventListener("DOMContentLoaded",l.highlightAll))),n.Prism}();void 0!==e&&e.exports&&(e.exports=l),"undefined"!=typeof global&&(global.Prism=l),l.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},l.languages.markup.tag.inside["attr-value"].inside.entity=l.languages.markup.entity,l.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),l.languages.xml=l.languages.markup,l.languages.html=l.languages.markup,l.languages.mathml=l.languages.markup,l.languages.svg=l.languages.markup,l.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},l.languages.css.atrule.inside.rest=l.languages.css,l.languages.markup&&(l.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:l.languages.css,alias:"language-css",greedy:!0}}),l.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:l.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:l.languages.css}},alias:"language-css"}},l.languages.markup.tag)),l.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},l.languages.javascript=l.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),l.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),l.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),l.languages.javascript["template-string"].inside.interpolation.inside.rest=l.languages.javascript,l.languages.markup&&l.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:l.languages.javascript,alias:"language-javascript",greedy:!0}}),l.languages.js=l.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var n,a=t.getAttribute("data-src"),i=t,r=/\blang(?:uage)?-([\w-]+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(n=(t.className.match(r)||[,""])[1]),!n){var u=(a.match(/\.(\w+)$/)||[,""])[1];n=e[u]||u}var o=document.createElement("code");o.className="language-"+n,t.textContent="",o.textContent="Loading\u2026",t.appendChild(o);var s=new XMLHttpRequest;s.open("GET",a,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(o.textContent=s.responseText,l.highlightElement(o)):o.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},s.send(null)}),l.plugins.toolbar&&l.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var n=t.getAttribute("data-src"),l=document.createElement("a");return l.textContent=t.getAttribute("data-download-link-label")||"Download",l.setAttribute("download",""),l.href=n,l}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))},wiKy:function(e,t,n){"use strict";n.r(t);var l=n("CcnG"),a=function(){},i=n("gTgE"),r=n("pMnS"),u=n("U89g"),o=n("d2mR"),s=n("O4vx"),d=n("Ip0R"),c=function(){function e(e){this.http=e,this.donutChartData=[["Task","Hours per Day"],["Work",11],["Eat",2],["Commute",2],["Watch TV",2],["Sleep",7]],this.getHtmlAndTypeScriptCode()}return e.prototype.getHtmlAndTypeScriptCode=function(){var e,t,n=this;this.http.get("assets/data/code/charts/donutchart/chart.html",{responseType:"text"}).subscribe(function(t){e=t},function(e){},function(){n.htmlCode=e}),this.http.get("assets/data/code/charts/donutchart/chart.text",{responseType:"text"}).subscribe(function(e){t=e},function(e){},function(){n.typeScriptCode=t}),this.http.get("assets/data/code/charts/donutchart/datasource.json",{responseType:"text"}).subscribe(function(e){t=e},function(e){},function(){n.dataSourceCode=t})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e.prototype.ngOnInit=function(){},e}(),p=n("t/Na"),h=l.Qa({encapsulation:2,styles:[],data:{}});function g(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),l.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),l.Ra(2,4243456,null,0,o.a,[l.F,l.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.htmlCode,"html")},null)}function m(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),l.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),l.Ra(2,4243456,null,0,o.a,[l.F,l.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.typeScriptCode,"typescript")},null)}function b(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),l.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),l.Ra(2,4243456,null,0,o.a,[l.F,l.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.dataSourceCode,"json")},null)}function f(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,114,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(e,t,n){var a=!0;return"document:click"===t&&(a=!1!==l.cb(e,1).onWindowClick()&&a),"document:scroll"===t&&(a=!1!==l.cb(e,1).onscroll()&&a),a},i.Wb,i.i)),l.Ra(1,5357568,null,3,s.h,[],{header:[0,"header"]},null),l.ib(603979776,1,{amexioHeader:1}),l.ib(603979776,2,{amexioBody:1}),l.ib(603979776,3,{amexioFooter:1}),(e()(),l.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,i.fc,i.r)),l.Ra(6,114688,[[1,4]],0,s.v,[],null,null),(e()(),l.kb(-1,0,[" Donut Chart "])),(e()(),l.Sa(8,0,null,1,106,"amexio-body",[],null,null,null,i.Sb,i.e)),l.Ra(9,114688,[[2,4]],0,s.d,[],null,null),(e()(),l.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),l.kb(-1,null,["An donut chart that is rendered within the browser using SVG. A donut chart is a pie chart with a hole in the center."])),(e()(),l.Sa(12,16777216,null,0,102,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(e,t,n){var a=!0;return"document:click"===t&&(a=!1!==l.cb(e,13).onWindowClick()&&a),"document:scroll"===t&&(a=!1!==l.cb(e,13).onscroll()&&a),a},i.qc,i.C)),l.Ra(13,5357568,null,2,s.L,[l.F,l.k,l.R],null,null),l.ib(603979776,4,{queryTabs:1}),l.ib(603979776,5,{queryAction:1}),(e()(),l.Sa(16,0,null,1,14,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.rc,i.D)),l.Ra(17,114688,[[4,4]],0,s.M,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),l.Sa(18,0,null,0,12,"amexio-row",[],null,null,null,i.mc,i.y)),l.Ra(19,1163264,null,0,s.H,[],null,null),(e()(),l.Sa(20,0,null,0,10,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,i.Yb,i.k)),l.Ra(21,114688,null,0,s.k,[],{size:[0,"size"]},null),(e()(),l.Sa(22,0,null,0,8,"amexio-chart-donut",[],null,null,null,i.Pc,i.Ba)),l.Ra(23,1163264,null,3,s.Va,[s.Ga],{width:[0,"width"],height:[1,"height"],data:[2,"data"]},null),l.ib(603979776,6,{chartLegendComp:1}),l.ib(603979776,7,{chartTitleComp:1}),l.ib(603979776,8,{chartAreaComp:1}),(e()(),l.Sa(27,0,null,null,1,"amexio-chart-title",[],null,null,null,i.Hc,i.T)),l.Ra(28,114688,[[7,4]],0,s.Ha,[],{title:[0,"title"]},null),(e()(),l.Sa(29,0,null,null,1,"amexio-chart-legend",[],null,null,null,i.Gc,i.S)),l.Ra(30,114688,[[6,4]],0,s.Fa,[],{position:[0,"position"]},null),(e()(),l.Sa(31,0,null,1,60,"amexio-tab",[["title","API Reference"]],null,null,null,i.rc,i.D)),l.Ra(32,114688,[[4,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),l.Sa(33,0,null,0,18,"amexio-datagrid",[["title","Chart Properties<amexio-chart-donut>"]],null,[["document","scroll"],["document","click"]],function(e,t,n){var a=!0;return"document:scroll"===t&&(a=!1!==l.cb(e,34).onscroll()&&a),"document:click"===t&&(a=!1!==l.cb(e,34).onclick()&&a),a},i.Cd,i.ob)),l.Ra(34,1163264,null,1,s.Vb,[l.l,s.Ka,l.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),l.ib(603979776,9,{columnRef:1}),(e()(),l.Sa(36,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Dd,i.pb)),l.Ra(37,49152,[[9,4]],2,s.Wb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,10,{headerTemplate:0}),l.ib(335544320,11,{bodyTemplate:0}),(e()(),l.Sa(40,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Dd,i.pb)),l.Ra(41,49152,[[9,4]],2,s.Wb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,12,{headerTemplate:0}),l.ib(335544320,13,{bodyTemplate:0}),(e()(),l.Sa(44,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Dd,i.pb)),l.Ra(45,49152,[[9,4]],2,s.Wb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,14,{headerTemplate:0}),l.ib(335544320,15,{bodyTemplate:0}),(e()(),l.Sa(48,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Dd,i.pb)),l.Ra(49,49152,[[9,4]],2,s.Wb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,16,{headerTemplate:0}),l.ib(335544320,17,{bodyTemplate:0}),(e()(),l.Sa(52,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),l.Sa(53,0,null,0,18,"amexio-datagrid",[["title","Chart Title Properties<amexio-chart-title>"]],null,[["document","scroll"],["document","click"]],function(e,t,n){var a=!0;return"document:scroll"===t&&(a=!1!==l.cb(e,54).onscroll()&&a),"document:click"===t&&(a=!1!==l.cb(e,54).onclick()&&a),a},i.Cd,i.ob)),l.Ra(54,1163264,null,1,s.Vb,[l.l,s.Ka,l.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),l.ib(603979776,18,{columnRef:1}),(e()(),l.Sa(56,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Dd,i.pb)),l.Ra(57,49152,[[18,4]],2,s.Wb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,19,{headerTemplate:0}),l.ib(335544320,20,{bodyTemplate:0}),(e()(),l.Sa(60,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Dd,i.pb)),l.Ra(61,49152,[[18,4]],2,s.Wb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,21,{headerTemplate:0}),l.ib(335544320,22,{bodyTemplate:0}),(e()(),l.Sa(64,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Dd,i.pb)),l.Ra(65,49152,[[18,4]],2,s.Wb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,23,{headerTemplate:0}),l.ib(335544320,24,{bodyTemplate:0}),(e()(),l.Sa(68,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Dd,i.pb)),l.Ra(69,49152,[[18,4]],2,s.Wb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,25,{headerTemplate:0}),l.ib(335544320,26,{bodyTemplate:0}),(e()(),l.Sa(72,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),l.Sa(73,0,null,0,18,"amexio-datagrid",[["title","Chart Legend Properties<amexio-chart-legend> "]],null,[["document","scroll"],["document","click"]],function(e,t,n){var a=!0;return"document:scroll"===t&&(a=!1!==l.cb(e,74).onscroll()&&a),"document:click"===t&&(a=!1!==l.cb(e,74).onclick()&&a),a},i.Cd,i.ob)),l.Ra(74,1163264,null,1,s.Vb,[l.l,s.Ka,l.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),l.ib(603979776,27,{columnRef:1}),(e()(),l.Sa(76,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Dd,i.pb)),l.Ra(77,49152,[[27,4]],2,s.Wb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,28,{headerTemplate:0}),l.ib(335544320,29,{bodyTemplate:0}),(e()(),l.Sa(80,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Dd,i.pb)),l.Ra(81,49152,[[27,4]],2,s.Wb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,30,{headerTemplate:0}),l.ib(335544320,31,{bodyTemplate:0}),(e()(),l.Sa(84,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Dd,i.pb)),l.Ra(85,49152,[[27,4]],2,s.Wb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,32,{headerTemplate:0}),l.ib(335544320,33,{bodyTemplate:0}),(e()(),l.Sa(88,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Dd,i.pb)),l.Ra(89,49152,[[27,4]],2,s.Wb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,34,{headerTemplate:0}),l.ib(335544320,35,{bodyTemplate:0}),(e()(),l.Sa(92,0,null,1,17,"amexio-tab",[["title","Source"]],null,null,null,i.rc,i.D)),l.Ra(93,114688,[[4,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),l.Sa(94,0,null,0,15,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),l.Sa(95,0,null,null,14,"amexio-vertical-tab-view",[],null,null,null,i.tc,i.F)),l.Ra(96,5357568,null,1,s.Q,[l.F],null,null),l.ib(603979776,36,{queryTabs:1}),(e()(),l.Sa(98,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.rc,i.D)),l.Ra(99,114688,[[36,4]],0,s.M,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),l.Ja(16777216,null,0,1,null,g)),l.Ra(101,16384,null,0,d.l,[l.R,l.O],{ngIf:[0,"ngIf"]},null),(e()(),l.Sa(102,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.rc,i.D)),l.Ra(103,114688,[[36,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),l.Ja(16777216,null,0,1,null,m)),l.Ra(105,16384,null,0,d.l,[l.R,l.O],{ngIf:[0,"ngIf"]},null),(e()(),l.Sa(106,0,null,0,3,"amexio-tab",[["title","Data Source"]],null,null,null,i.rc,i.D)),l.Ra(107,114688,[[36,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),l.Ja(16777216,null,0,1,null,b)),l.Ra(109,16384,null,0,d.l,[l.R,l.O],{ngIf:[0,"ngIf"]},null),(e()(),l.Sa(110,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.rc,i.D)),l.Ra(111,114688,[[4,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),l.Sa(112,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),l.kb(-1,null,["Amexio Sandbox"])),(e()(),l.Sa(114,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-donutchart?embed=1&file=app/charts/donutchart/donutchart.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,t){var n=t.component;e(t,1,0,"true"),e(t,6,0),e(t,9,0),e(t,13,0),e(t,17,0,"Demo","true"),e(t,19,0),e(t,21,0,"12"),e(t,23,0,"100%","400px",n.donutChartData),e(t,28,0,"My Daily Activities"),e(t,30,0,"right"),e(t,32,0,"API Reference"),e(t,34,0,"Chart Properties<amexio-chart-donut>","assets/apireference/charts/donutchart.json","get","chart",!1,!1),e(t,37,0,"Name","name",!1,"string",15),e(t,41,0,"Type","type",!1,"string",10),e(t,45,0,"Default","default",!1,"string",10),e(t,49,0,"Description","description",!1,"string",65),e(t,54,0,"Chart Title Properties<amexio-chart-title>","assets/apireference/charts/donutchart.json","get","chartTitle",!1,!1),e(t,57,0,"Name","name",!1,"string",15),e(t,61,0,"Type","type",!1,"string",10),e(t,65,0,"Default","default",!1,"string",10),e(t,69,0,"Description","description",!1,"string",65),e(t,74,0,"Chart Legend Properties<amexio-chart-legend> ","assets/apireference/charts/donutchart.json","get","chartLegend",!1,!1),e(t,77,0,"Name","name",!1,"string",15),e(t,81,0,"Type","type",!1,"string",10),e(t,85,0,"Default","default",!1,"string",10),e(t,89,0,"Description","description",!1,"string",65),e(t,93,0,"Source"),e(t,96,0),e(t,99,0,"HTML",!0),e(t,101,0,n.htmlCode),e(t,103,0,"Type Script"),e(t,105,0,n.typeScriptCode),e(t,107,0,"Data Source"),e(t,109,0,n.dataSourceCode),e(t,111,0,"Live")},function(e,t){e(t,20,0,l.cb(t,21).role)})}var y=l.Oa("donut-chart-demo",c,function(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,1,"donut-chart-demo",[],null,null,null,f,h)),l.Ra(1,114688,null,0,c,[p.c],null,null)],function(e,t){e(t,1,0)},null)},{},{},[]),x=n("gIcY"),w=n("ZYCi");n.d(t,"DonutChartDemoModuleNgFactory",function(){return k});var k=l.Pa(a,[],function(e){return l.Za([l.ab(512,l.k,l.Ea,[[8,[i.a,r.a,y]],[3,l.k],l.z]),l.ab(4608,d.n,d.m,[l.w,[2,d.w]]),l.ab(4608,x.v,x.v,[]),l.ab(4608,p.i,p.o,[d.c,l.D,p.m]),l.ab(4608,p.p,p.p,[p.i,p.n]),l.ab(5120,p.a,function(e){return[e]},[p.p]),l.ab(4608,p.l,p.l,[]),l.ab(6144,p.j,null,[p.l]),l.ab(4608,p.h,p.h,[p.j]),l.ab(6144,p.b,null,[p.h]),l.ab(4608,p.f,p.k,[p.b,l.s]),l.ab(4608,p.c,p.c,[p.f]),l.ab(4608,s.Ka,s.Ka,[p.c]),l.ab(4608,s.Ua,s.Ua,[l.D]),l.ab(4608,s.bb,s.bb,[]),l.ab(4608,s.xc,s.xc,[]),l.ab(4608,s.Ga,s.Ga,[]),l.ab(1073742336,d.b,d.b,[]),l.ab(1073742336,x.s,x.s,[]),l.ab(1073742336,x.e,x.e,[]),l.ab(1073742336,p.e,p.e,[]),l.ab(1073742336,p.d,p.d,[]),l.ab(1073742336,s.w,s.w,[]),l.ab(1073742336,s.u,s.u,[]),l.ab(1073742336,s.z,s.z,[]),l.ab(1073742336,s.B,s.B,[]),l.ab(1073742336,s.E,s.E,[]),l.ab(1073742336,s.m,s.m,[]),l.ab(1073742336,s.S,s.S,[]),l.ab(1073742336,o.b,o.b,[]),l.ab(1073742336,s.j,s.j,[]),l.ab(1073742336,w.n,w.n,[[2,w.t],[2,w.m]]),l.ab(1073742336,a,a,[]),l.ab(256,p.m,"XSRF-TOKEN",[]),l.ab(256,p.n,"X-XSRF-TOKEN",[]),l.ab(1024,w.i,function(){return[[{path:"",component:c,pathMatch:"full"}]]},[])])})}}]);