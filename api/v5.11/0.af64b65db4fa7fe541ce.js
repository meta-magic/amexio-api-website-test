(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1Ycd":function(e,t){e.exports='\n<ng-content></ng-content>\n\n<ng-container *ngIf="urlSafe && stackblitzUrl">\n  <iframe style="width: 100%; height: 600px" [src]="urlSafe"\n          frameborder="0" allowfullscren="allowfullscren"></iframe>\n</ng-container>\n\n\n<ng-container *ngIf="urlSafe1 && stackblitzUrl1">\n  <iframe style="width: 100%; height: 600px" [src]="urlSafe1"\n          frameborder="0" allowfullscren="allowfullscren"></iframe>\n</ng-container>\n\n\n<ng-container *ngIf="urlSafe2 && stackblitzUrl2">\n  <iframe style="width: 100%; height: 600px" [src]="urlSafe2"\n          frameborder="0" allowfullscren="allowfullscren"></iframe>\n</ng-container>\n\n'},"2Fyb":function(e,t){e.exports='\n<ng-content></ng-content>\n<br>\n<ng-container  *ngFor="let apiData of data"> \n   <amexio-datagrid  [title]="apiData.gridTitle"   [data]="apiData.gridData">\n        <amexio-data-table-column *ngFor="let col of apiData.columnDefinition"\n                                  [data-index]="col.dataindex"\n                                  [data-type]="\'string\'"\n                                  [hidden]="false"\n                                  [text]="col.text"\n                                  [width]="col.width">\n                                  <ng-container *ngIf="col.dataindex == \'name\'">\n                                        <ng-template #amexioBodyTmpl let-column let-row="row"> \n                                                  <ng-container *ngIf="row.deprecated">\n                                                    <div style="text-decoration: line-through red;">{{row.name}}</div>\n                                                  </ng-container>\n                                                  <ng-container *ngIf="!row.deprecated">\n                                                    {{row.name}}\n                                                  </ng-container>\n                                                </ng-template>\n                                  </ng-container>\n        </amexio-data-table-column>\n   </amexio-datagrid>\n  <br><br>\n </ng-container>\n'},"D+IA":function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n("CcnG"),i=n("t/Na"),r=function(e,t,n,a){var i,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,a);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(o=(r<3?i(o):r>3?i(t,n,o):i(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e){this._httpClient=e}return e.prototype.getCall=function(e){return this._httpClient.get(e)},e=r([Object(a.B)(),o("design:paramtypes",[i.a])],e)}()},EqZn:function(e,t){e.exports='<ng-content></ng-content>\n<br>\n<ng-container *ngFor="let apiaccData of data"> \n    <amexio-datagrid [title]="apiaccData.gridTitle" [data]="apiaccData.gridData">\n        <amexio-data-table-column *ngFor="let col of apiaccData.columnDefinition" [data-index]="col.dataindex"\n            [data-type]="\'string\'" [text]="col.text" [hidden]="false" [width]="col.width">\n            <ng-container *ngIf="col.dataindex == \'name\'">\n                <ng-template #amexioBodyTmpl let-column let-row="row">\n                    <ng-container *ngIf="row.deprecated">\n                        <div style="text-decoration: line-through red;">{{row.name}}</div>\n                    </ng-container>\n                    <ng-container *ngIf="!row.deprecated">\n                        {{row.name}}\n                    </ng-container>\n                </ng-template>\n            </ng-container>\n        </amexio-data-table-column>\n    </amexio-datagrid>\n    <br><br>\n</ng-container>'},XIHC:function(e,t){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/}),Prism.languages.ts=Prism.languages.typescript},c6hr:function(e,t){e.exports="\n<ng-content ></ng-content>\n "},d2mR:function(e,t,n){"use strict";var a=n("CcnG"),i=n("Ip0R"),r=(n("wZee"),n("XIHC"),function(e,t,n,a){var i,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,a);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(o=(r<3?i(o):r>3?i(t,n,o):i(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o}),o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(){}return r([Object(a.E)("http-url"),o("design:type",String)],e.prototype,"httpUrl",void 0),r([Object(a.E)("data"),o("design:type",Array)],e.prototype,"data",void 0),e=r([Object(a.n)({selector:"amexio-api-reference",template:n("2Fyb")}),o("design:paramtypes",[])],e)}(),s=n("D+IA"),l=n("f4zW"),d=function(e,t,n,a){var i,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,a);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(o=(r<3?i(o):r>3?i(t,n,o):i(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p=function(){function e(e){this._rCService=e}return e.prototype.ngOnInit=function(){this.url?this.getComponentData():this.addCustomData(this.customComData)},e.prototype.getComponentData=function(){var e=this;this._rCService.getCall(this.url).subscribe(function(t){e.customComData?e.addCustomData(t):e.comData=t})},e.prototype.addCustomData=function(e){this.customComData.title&&(e.title=this.customComData.title),this.customComData.description&&(e.description=this.customComData.description),this.customComData.sourceMetadata&&(e.sourceMetadata=this.customComData.sourceMetadata),this.customComData.liveMetadata&&(e.liveMetadata=this.customComData.liveMetadata),this.customComData.apiaccessibledata&&this.customComData.apiaccessibledata.length>0&&(e.apiaccessibledata=this.customComData.apiaccessibledata),this.comData=e},d([Object(a.E)("url"),u("design:type",String)],e.prototype,"url",void 0),d([Object(a.E)("custom-com-data"),u("design:type",l.a)],e.prototype,"customComData",void 0),e=d([Object(a.n)({selector:"amexio-api-structure",template:n("jzsn")}),u("design:paramtypes",[s.a])],e)}(),g=function(e,t,n,a){var i,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,a);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(o=(r<3?i(o):r>3?i(t,n,o):i(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},f=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},m=function(){function e(){}return e=g([Object(a.n)({selector:"amexio-api-demo",template:n("c6hr")}),f("design:paramtypes",[])],e)}(),h=n("t/Na"),b=function(e,t,n,a){var i,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,a);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(o=(r<3?i(o):r>3?i(t,n,o):i(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},y=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(){function e(e){this._httpClient=e}return e.prototype.ngOnInit=function(){this.htmlUrl&&this.loadHtmlUrl(),this.tsUrl&&this.loadTsUrl(),this.dataSourceUrl&&this.loadDataSourceUrl(),this.dataSourceUrl1&&this.loadDataSourceUrl1(),this.dataSourceUrl2&&this.loadDataSourceUrl2(),this.dynamicUrl&&this.loadDynamicUrl(),this.moduleUrl&&this.loadModuleUrl()},e.prototype.loadHtmlUrl=function(){var e=this;this._httpClient.get("assets/data/code/"+this.htmlUrl,{responseType:"text"}).subscribe(function(t){e.htmlCode=t})},e.prototype.loadTsUrl=function(){var e=this;this._httpClient.get("assets/data/code/"+this.tsUrl,{responseType:"text"}).subscribe(function(t){e.typeScriptCode=t})},e.prototype.loadDataSourceUrl=function(){var e=this;this._httpClient.get(""+this.dataSourceUrl,{responseType:"text"}).subscribe(function(t){e.dataSource=t})},e.prototype.loadDataSourceUrl1=function(){var e=this;this._httpClient.get(""+this.dataSourceUrl1,{responseType:"text"}).subscribe(function(t){e.dataSource1=t})},e.prototype.loadDataSourceUrl2=function(){var e=this;this._httpClient.get(""+this.dataSourceUrl2,{responseType:"text"}).subscribe(function(t){e.dataSource2=t})},e.prototype.loadDynamicUrl=function(){var e=this;this._httpClient.get("assets/data/code/"+this.dynamicUrl,{responseType:"text"}).subscribe(function(t){e.dynamicCode=t})},e.prototype.loadModuleUrl=function(){var e=this;this._httpClient.get("assets/data/code/"+this.moduleUrl,{responseType:"text"}).subscribe(function(t){e.moduleCode=t})},b([Object(a.E)("ts-url"),y("design:type",String)],e.prototype,"tsUrl",void 0),b([Object(a.E)("html-url"),y("design:type",String)],e.prototype,"htmlUrl",void 0),b([Object(a.E)("data-source-url"),y("design:type",String)],e.prototype,"dataSourceUrl",void 0),b([Object(a.E)("data-source-url1"),y("design:type",String)],e.prototype,"dataSourceUrl1",void 0),b([Object(a.E)("data-source-url2"),y("design:type",String)],e.prototype,"dataSourceUrl2",void 0),b([Object(a.E)("dynamic-url"),y("design:type",String)],e.prototype,"dynamicUrl",void 0),b([Object(a.E)("module-url"),y("design:type",String)],e.prototype,"moduleUrl",void 0),e=b([Object(a.n)({selector:"amexio-api-sourcecode",template:n("vlbZ")}),y("design:paramtypes",[h.a])],e)}(),x=n("ZYjt"),w=function(e,t,n,a){var i,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,a);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(o=(r<3?i(o):r>3?i(t,n,o):i(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},k=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},D=function(){function e(e){this.sanitizer=e}return e.prototype.ngOnInit=function(){this.urlSafe=this.sanitizer.bypassSecurityTrustResourceUrl(this.stackblitzUrl),this.urlSafe1=this.sanitizer.bypassSecurityTrustResourceUrl(this.stackblitzUrl1),this.urlSafe2=this.sanitizer.bypassSecurityTrustResourceUrl(this.stackblitzUrl2)},w([Object(a.E)("disabled"),k("design:type",Boolean)],e.prototype,"disabled",void 0),w([Object(a.E)("stackblitz-url"),k("design:type",String)],e.prototype,"stackblitzUrl",void 0),w([Object(a.E)("stackblitz-url1"),k("design:type",String)],e.prototype,"stackblitzUrl1",void 0),w([Object(a.E)("stackblitz-url2"),k("design:type",String)],e.prototype,"stackblitzUrl2",void 0),e=w([Object(a.n)({selector:"amexio-api-livedemo",template:n("1Ycd")}),k("design:paramtypes",[x.c])],e)}(),S=function(e,t,n,a){var i,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,a);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(o=(r<3?i(o):r>3?i(t,n,o):i(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},j=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},F=function(){function e(){}return S([Object(a.E)("disabled"),j("design:type",Boolean)],e.prototype,"disabled",void 0),S([Object(a.E)("http-url"),j("design:type",String)],e.prototype,"httpUrl",void 0),S([Object(a.E)("data"),j("design:type",Array)],e.prototype,"data",void 0),e=S([Object(a.n)({selector:"amexio-api-accessible",template:n("EqZn")}),j("design:paramtypes",[])],e)}(),A=n("O4vx");n.d(t,"a",function(){return R});var C=function(e,t,n,a){var i,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,a);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(o=(r<3?i(o):r>3?i(t,n,o):i(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},O=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},U=function(){function e(e,t){this._renderer=e,this._el=t,this.nativeElement=t.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},C([Object(a.E)(),O("design:type",String)],e.prototype,"code",void 0),C([Object(a.E)(),O("design:type",String)],e.prototype,"language",void 0),e=C([Object(a.n)({selector:"prism-block",template:""}),O("design:paramtypes",[a.X,a.u])],e)}(),R=function(){function e(){}return t=e,e.forRoot=function(){return{ngModule:t,providers:[i.j,s.a]}},e=t=C([Object(a.J)({imports:[i.b,A.i,h.b],exports:[U,F,c,D,v,p,m],declarations:[U,F,c,D,v,p,m]})],e);var t}()},f4zW:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=function(){return function(){this.title="Title",this.description="Description",this.sourceMetadata=new i,this.liveMetadata=new r,this.apiRefMetadata=[],this.apiaccessibledata=[]}}(),i=function(){return function(){}}(),r=(function(){}(),function(){return function(){}}())},jzsn:function(e,t){e.exports='<amexio-box amexioColorPalette [color-palette]="\'classic\'" [gradient]="true" class="api-header-style "  [padding]="true" align="left">\n    <ng-container *ngIf="(comData && comData.title)">\n      <amexio-label size="large">\n          {{comData.title}}\n      </amexio-label>\n    </ng-container> <br/><br>\n    <ng-container *ngIf="(comData && comData.description)">{{comData.description}}</ng-container>\n</amexio-box>\n<amexio-card style="display: block; padding-top:30px;" >\n\n  <amexio-body>\n      <ng-container *ngIf="comData.componentDescription">\n    <amexio-box  [padding]="true" align="left">\n        <ng-container>{{comData.componentDescription}}</ng-container><br>\n        <br>\n        <amexio-label [size]="\'medium-bold\'">Key Features:</amexio-label>\n        <br>\n        <br>\n        <ng-container *ngFor="let item of comData.KeyFeatures"> \n            <li>\n              {{item}}\n            </li>\n        </ng-container>\n    </amexio-box>\n  </ng-container>\n  \n    <amexio-tab-view [closable]="true">\n      <amexio-tab title="Demo" [active]="true" [closable]="false" [disabled]="false">\n        <ng-content select="amexio-api-demo"></ng-content>\n      </amexio-tab>\n\n      <amexio-tab title="API Reference" [active]="false" [closable]="false" [disabled]="false">\n        <ng-container *ngIf="comData && comData.apiRefMetadata &&  comData.apiRefMetadata.length > 0">\n          <ng-content select="amexio-api-reference"></ng-content>\n          <amexio-api-reference [data]="comData.apiRefMetadata"></amexio-api-reference>\n        </ng-container>\n      </amexio-tab>\n\n      <amexio-tab title="Accessible" [active]="false" [closable]="false" [disabled]="false">\n        <ng-container *ngIf="comData && comData.apiaccessibledata">\n          <ng-content select="amexio-api-accessible"></ng-content>\n          <amexio-api-accessible [data]="comData.apiaccessibledata"></amexio-api-accessible>\n        </ng-container>\n      </amexio-tab>\n\n      <amexio-tab title="Source Code" [active]="false" [closable]="false" [disabled]="false">\n        <ng-container *ngIf="comData && comData.sourceMetadata">\n          <amexio-api-sourcecode [html-url]="comData.sourceMetadata.htmlUrl" [ts-url]="comData.sourceMetadata.tsUrl"\n            [dynamic-url]="comData.sourceMetadata.dynamicUrl" [module-url]="comData.sourceMetadata.moduleUrl"\n            [data-source-url]="comData.sourceMetadata.datasourceUrl" [data-source-url1]="comData.sourceMetadata.datasourceUrl1"\n            [data-source-url2]="comData.sourceMetadata.datasourceUrl2">\n          </amexio-api-sourcecode>\n        </ng-container>\n      </amexio-tab>\n\n      <amexio-tab title="Live" [active]="false" [closable]="false" [disabled]="comData?.liveMetadata?.disabled">\n        <p align="center">AmexioSandbox</p>\n        <ng-container *ngIf="comData && comData.liveMetadata">\n          <amexio-api-livedemo [disabled]="false" [stackblitz-url]="comData.liveMetadata.stackblitzUrl"\n            [stackblitz-url1]="comData.liveMetadata.stackblitzUrl1" [stackblitz-url2]="comData.liveMetadata.stackblitzUrl2">\n          </amexio-api-livedemo>\n        </ng-container>\n      </amexio-tab>\n\n\n    </amexio-tab-view>\n  </amexio-body>\n</amexio-card>'},vlbZ:function(e,t){e.exports='<div style="overflow-y: scroll">\n  <amexio-vertical-tab-view>\n\n    <ng-container *ngIf="htmlUrl">\n      <amexio-tab title="HTML" [active]="true">\n        <ng-container *ngIf=" htmlCode">\n          <prism-block [code]="htmlCode" [language]="\'html\'"></prism-block>\n        </ng-container>\n      </amexio-tab>\n    </ng-container>\n\n    <ng-container *ngIf="tsUrl">\n      <amexio-tab title="Type Script">\n        <ng-container *ngIf="  typeScriptCode">\n          <prism-block [code]="typeScriptCode" [language]="\'typescript\'"></prism-block>\n        </ng-container>\n      </amexio-tab>\n    </ng-container>\n\n    <ng-container *ngIf="dataSourceUrl">\n      <amexio-tab title="Data Source">\n        <ng-container *ngIf=" dataSource">\n          <prism-block [code]="dataSource" [language]="\'json\'"></prism-block>\n        </ng-container>\n      </amexio-tab>\n    </ng-container>\n\n    <ng-container *ngIf="dataSourceUrl1">\n        <amexio-tab title="Second Data Source">\n          <ng-container *ngIf=" dataSource1">\n            <prism-block [code]="dataSource1" [language]="\'json\'"></prism-block>\n          </ng-container>\n        </amexio-tab>\n      </ng-container>\n\n      <ng-container *ngIf="dataSourceUrl2">\n          <amexio-tab title="Third Data Source">\n            <ng-container *ngIf=" dataSource2">\n              <prism-block [code]="dataSource2" [language]="\'json\'"></prism-block>\n            </ng-container>\n          </amexio-tab>\n        </ng-container>\n\n    <ng-container *ngIf="dynamicUrl">\n        <amexio-tab title="Dynamic Code">\n          <ng-container *ngIf=" dynamicCode">\n            <prism-block [code]="dynamicCode" [language]="\'typescript\'"></prism-block>\n          </ng-container>\n        </amexio-tab>\n      </ng-container>\n\n      <ng-container *ngIf="moduleUrl">\n          <amexio-tab title="Module Code">\n            <ng-container *ngIf=" moduleCode">\n              <prism-block [code]="moduleCode" [language]="\'typescript\'"></prism-block>\n            </ng-container>\n          </amexio-tab>\n        </ng-container>\n\n  </amexio-vertical-tab-view>\n</div>\n'},wZee:function(e,t){var n=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof i?new i(e.type,a.util.encode(e.content),e.alias):Array.isArray(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var i,r,o=a.util.type(t);switch(n=n||{},o){case"Object":if(r=a.util.objId(t),n[r])return n[r];for(var c in i={},n[r]=i,t)t.hasOwnProperty(c)&&(i[c]=e(t[c],n));return i;case"Array":return r=a.util.objId(t),n[r]?n[r]:(i=[],n[r]=i,t.forEach(function(t,a){i[a]=e(t,n)}),i);default:return t}}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var i in t)n[i]=t[i];return n},insertBefore:function(e,t,n,i){var r=(i=i||a.languages)[e],o={};for(var c in r)if(r.hasOwnProperty(c)){if(c==t)for(var s in n)n.hasOwnProperty(s)&&(o[s]=n[s]);n.hasOwnProperty(c)||(o[c]=r[c])}var l=i[e];return i[e]=o,a.languages.DFS(a.languages,function(t,n){n===l&&t!=e&&(this[t]=o)}),o},DFS:function e(t,n,i,r){r=r||{};var o=a.util.objId;for(var c in t)if(t.hasOwnProperty(c)){n.call(t,c,t[c],i||c);var s=t[c],l=a.util.type(s);"Object"!==l||r[o(s)]?"Array"!==l||r[o(s)]||(r[o(s)]=!0,e(s,n,c,r)):(r[o(s)]=!0,e(s,n,null,r))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var i={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",i);for(var r,o=i.elements||e.querySelectorAll(i.selector),c=0;r=o[c++];)a.highlightElement(r,!0===t,i.callback)},highlightElement:function(n,i,r){for(var o,c,s=n;s&&!t.test(s.className);)s=s.parentNode;s&&(o=(s.className.match(t)||[,""])[1].toLowerCase(),c=a.languages[o]),n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+o,n.parentNode&&(s=n.parentNode,/pre/i.test(s.nodeName)&&(s.className=s.className.replace(t,"").replace(/\s+/g," ")+" language-"+o));var l={element:n,language:o,grammar:c,code:n.textContent},d=function(e){l.highlightedCode=e,a.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,a.hooks.run("after-highlight",l),a.hooks.run("complete",l),r&&r.call(l.element)};if(a.hooks.run("before-sanity-check",l),l.code)if(a.hooks.run("before-highlight",l),l.grammar)if(i&&e.Worker){var u=new Worker(a.filename);u.onmessage=function(e){d(e.data)},u.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else d(a.highlight(l.code,l.grammar,l.language));else d(a.util.encode(l.code));else a.hooks.run("complete",l)},highlight:function(e,t,n){var r={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",r),r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),i.stringify(a.util.encode(r.tokens),r.language)},matchGrammar:function(e,t,n,r,o,c,s){for(var l in n)if(n.hasOwnProperty(l)&&n[l]){if(l==s)return;var d=n[l];d="Array"===a.util.type(d)?d:[d];for(var u=0;u<d.length;++u){var p=d[u],g=p.inside,f=!!p.lookbehind,m=!!p.greedy,h=0,b=p.alias;if(m&&!p.pattern.global){var y=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,y+"g")}p=p.pattern||p;for(var v=r,x=o;v<t.length;x+=t[v].length,++v){var w=t[v];if(t.length>e.length)return;if(!(w instanceof i)){if(m&&v!=t.length-1){if(p.lastIndex=x,!(A=p.exec(e)))break;for(var k=A.index+(f?A[1].length:0),D=A.index+A[0].length,S=v,j=x,F=t.length;S<F&&(j<D||!t[S].type&&!t[S-1].greedy);++S)k>=(j+=t[S].length)&&(++v,x=j);if(t[v]instanceof i)continue;C=S-v,w=e.slice(x,j),A.index-=x}else{p.lastIndex=0;var A=p.exec(w),C=1}if(A){f&&(h=A[1]?A[1].length:0);D=(k=A.index+h)+(A=A[0].slice(h)).length;var O=w.slice(0,k),U=w.slice(D),R=[v,C];O&&(++v,x+=O.length,R.push(O));var I=new i(l,g?a.tokenize(A,g):A,b,A,m);if(R.push(I),U&&R.push(U),Array.prototype.splice.apply(t,R),1!=C&&a.matchGrammar(e,t,n,v,x,!0,l),c)break}else if(c)break}}}}},tokenize:function(e,t){var n=[e],i=t.rest;if(i){for(var r in i)t[r]=i[r];delete t.rest}return a.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var i,r=0;i=n[r++];)i(t)}},Token:i};function i(e,t,n,a,i){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!i}if(e.Prism=a,i.stringify=function(e,t,n){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(n){return i.stringify(n,t,e)}).join("");var r={type:e.type,content:i.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var o=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(r.classes,o)}a.hooks.run("wrap",r);var c=Object.keys(r.attributes).map(function(e){return e+'="'+(r.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+(c?" "+c:"")+">"+r.content+"</"+r.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",function(t){var n=JSON.parse(t.data),i=n.language,r=n.code,o=n.immediateClose;e.postMessage(a.highlight(r,a.languages[i],i)),o&&e.close()},!1),a):a;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(a.filename=r.src,a.manual||r.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),a}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});void 0!==e&&e.exports&&(e.exports=n),"undefined"!=typeof global&&(global.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var a={};a["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};i["language-"+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var r={};r[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:i},n.languages.insertBefore("markup","cdata",r)}}),n.languages.xml=n.languages.extend("markup",{}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:RegExp("url\\((?:"+t.source+"|.*?)\\)","i"),selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.markup.tag.addInlined("script","javascript"),n.languages.js=n.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach(function(e){if(!e.hasAttribute("data-src-loaded")){for(var a,i=e.getAttribute("data-src"),r=e,o=/\blang(?:uage)?-([\w-]+)\b/i;r&&!o.test(r.className);)r=r.parentNode;if(r&&(a=(e.className.match(o)||[,""])[1]),!a){var c=(i.match(/\.(\w+)$/)||[,""])[1];a=t[c]||c}var s=document.createElement("code");s.className="language-"+a,e.textContent="",s.textContent="Loading\u2026",e.appendChild(s);var l=new XMLHttpRequest;l.open("GET",i,!0),l.onreadystatechange=function(){4==l.readyState&&(l.status<400&&l.responseText?(s.textContent=l.responseText,n.highlightElement(s),e.setAttribute("data-src-loaded","")):l.status>=400?s.textContent="\u2716 Error "+l.status+" while fetching file: "+l.statusText:s.textContent="\u2716 Error: File does not exist or is empty")},l.send(null)}}),n.plugins.toolbar&&n.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var n=t.getAttribute("data-src"),a=document.createElement("a");return a.textContent=t.getAttribute("data-download-link-label")||"Download",a.setAttribute("download",""),a.href=n,a}})},document.addEventListener("DOMContentLoaded",function(){self.Prism.fileHighlight()}))}}]);