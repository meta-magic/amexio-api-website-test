(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1Ycd":function(e,t){e.exports='\n<ng-content></ng-content>\n\n<ng-container *ngIf="urlSafe && stackblitzUrl">\n  <iframe style="width: 100%; height: 600px" [src]="urlSafe"\n          frameborder="0" allowfullscren="allowfullscren"></iframe>\n</ng-container>\n\n\n<ng-container *ngIf="urlSafe1 && stackblitzUrl1">\n  <iframe style="width: 100%; height: 600px" [src]="urlSafe1"\n          frameborder="0" allowfullscren="allowfullscren"></iframe>\n</ng-container>\n\n\n<ng-container *ngIf="urlSafe2 && stackblitzUrl2">\n  <iframe style="width: 100%; height: 600px" [src]="urlSafe2"\n          frameborder="0" allowfullscren="allowfullscren"></iframe>\n</ng-container>\n\n'},"2Fyb":function(e,t){e.exports='\n<ng-content></ng-content>\n<br>\n<ng-container  *ngFor="let apiData of data"> \n   <amexio-datagrid  [title]="apiData.gridTitle"   [data]="apiData.gridData">\n        <amexio-data-table-column *ngFor="let col of apiData.columnDefinition"\n                                  [data-index]="col.dataindex"\n                                  [data-type]="\'string\'"\n                                  [hidden]="false"\n                                  [text]="col.text"\n                                  [width]="col.width">\n                                  <ng-container *ngIf="col.dataindex == \'name\'">\n                                        <ng-template #amexioBodyTmpl let-column let-row="row"> \n                                                  <ng-container *ngIf="row.deprecated">\n                                                    <div style="text-decoration: line-through red;">{{row.name}}</div>\n                                                  </ng-container>\n                                                  <ng-container *ngIf="!row.deprecated">\n                                                    {{row.name}}\n                                                  </ng-container>\n                                                </ng-template>\n                                  </ng-container>\n        </amexio-data-table-column>\n   </amexio-datagrid>\n  <br><br>\n </ng-container>\n'},"D+IA":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n("CcnG"),i=n("t/Na"),o=function(e,t,n,a){var i,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(r=(o<3?i(r):o>3?i(t,n,r):i(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r},r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(e){this._httpClient=e}return e.prototype.getCall=function(e){return this._httpClient.get(e)},e=o([Object(a.B)(),r("design:paramtypes",[i.a])],e)}()},EqZn:function(e,t){e.exports='\n\n<ng-content></ng-content>\n<br>\n<ng-container *ngFor="let apiaccData of data"> \n    <amexio-datagrid [title]="apiaccData.gridTitle" [data]="apiaccData.gridData">\n        <amexio-data-table-column *ngFor="let col of apiaccData.columnDefinition" [data-index]="col.dataindex"\n            [data-type]="\'string\'" [text]="col.text" [hidden]="false" [width]="col.width">\n            <ng-container *ngIf="col.dataindex == \'name\'">\n                <ng-template #amexioBodyTmpl let-column let-row="row">\n                    <ng-container *ngIf="row.deprecated">\n                        <div style="text-decoration: line-through red;">{{row.name}}</div>\n                    </ng-container>\n                    <ng-container *ngIf="!row.deprecated">\n                        {{row.name}}\n                    </ng-container>\n                </ng-template>\n            </ng-container>\n        </amexio-data-table-column>\n    </amexio-datagrid>\n    <br><br>\n</ng-container>\n\n'},XIHC:function(e,t){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/}),Prism.languages.ts=Prism.languages.typescript},c6hr:function(e,t){e.exports="\n<ng-content ></ng-content>\n "},d2mR:function(e,t,n){"use strict";var a=n("CcnG"),i=n("Ip0R"),o=(n("wZee"),n("XIHC"),function(e,t,n,a){var i,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(r=(o<3?i(r):o>3?i(t,n,r):i(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(){}return o([Object(a.E)("http-url"),r("design:type",String)],e.prototype,"httpUrl",void 0),o([Object(a.E)("data"),r("design:type",Array)],e.prototype,"data",void 0),e=o([Object(a.n)({selector:"amexio-api-reference",template:n("2Fyb")}),r("design:paramtypes",[])],e)}(),c=n("D+IA"),l=n("f4zW"),d=function(e,t,n,a){var i,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(r=(o<3?i(r):o>3?i(t,n,r):i(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p=function(){function e(e){this._rCService=e}return e.prototype.ngOnInit=function(){this.url?this.getComponentData():this.addCustomData(this.customComData)},e.prototype.getComponentData=function(){var e=this;this._rCService.getCall(this.url).subscribe(function(t){e.customComData?e.addCustomData(t):(e.comData=t,e.accessibilityCheck(e.comData))})},e.prototype.addCustomData=function(e){this.customComData.title&&(e.title=this.customComData.title),this.customComData.description&&(e.description=this.customComData.description),this.customComData.sourceMetadata&&(e.sourceMetadata=this.customComData.sourceMetadata),this.customComData.liveMetadata&&(e.liveMetadata=this.customComData.liveMetadata),this.customComData.apiaccessibledata&&this.customComData.apiaccessibledata.length>0&&(e.apiaccessibledata=this.customComData.apiaccessibledata),this.customComData.componentDescription&&(e.componentDescription=this.customComData.componentDescription),this.customComData.compFeaturesTitle&&(e.compFeaturesTitle=this.customComData.compFeaturesTitle),this.customComData.keyFeatures&&(e.keyFeatures=this.customComData.keyFeatures),this.comData=e,this.accessibilityCheck(this.comData)},e.prototype.accessibilityCheck=function(e){e&&e.hasOwnProperty("isAccessibility")&&!1===e.isAccessibility&&this.tabRef.disableTab(2),e&&e.liveMetadata.disabled&&!0===e.liveMetadata.disabled&&this.tabRef.disableTab(4)},d([Object(a.E)("url"),u("design:type",String)],e.prototype,"url",void 0),d([Object(a.E)("custom-com-data"),u("design:type",l.a)],e.prototype,"customComData",void 0),d([Object(a.La)("tab"),u("design:type",Object)],e.prototype,"tabRef",void 0),e=d([Object(a.n)({selector:"amexio-api-structure",template:n("jzsn")}),u("design:paramtypes",[c.a])],e)}(),g=function(e,t,n,a){var i,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(r=(o<3?i(r):o>3?i(t,n,r):i(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r},f=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},m=function(){function e(){}return e=g([Object(a.n)({selector:"amexio-api-demo",template:n("c6hr")}),f("design:paramtypes",[])],e)}(),h=n("t/Na"),b=function(e,t,n,a){var i,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(r=(o<3?i(r):o>3?i(t,n,r):i(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r},y=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(){function e(e){this._httpClient=e}return e.prototype.ngOnInit=function(){this.htmlUrl&&this.loadHtmlUrl(),this.tsUrl&&this.loadTsUrl(),this.dataSourceUrl&&this.loadDataSourceUrl(),this.dataSourceUrl1&&this.loadDataSourceUrl1(),this.dataSourceUrl2&&this.loadDataSourceUrl2(),this.dynamicUrl&&this.loadDynamicUrl(),this.moduleUrl&&this.loadModuleUrl()},e.prototype.loadHtmlUrl=function(){var e=this;this._httpClient.get("assets/data/code/"+this.htmlUrl,{responseType:"text"}).subscribe(function(t){e.htmlCode=t})},e.prototype.loadTsUrl=function(){var e=this;this._httpClient.get("assets/data/code/"+this.tsUrl,{responseType:"text"}).subscribe(function(t){e.typeScriptCode=t})},e.prototype.loadDataSourceUrl=function(){var e=this;this._httpClient.get(""+this.dataSourceUrl,{responseType:"text"}).subscribe(function(t){e.dataSource=t})},e.prototype.loadDataSourceUrl1=function(){var e=this;this._httpClient.get(""+this.dataSourceUrl1,{responseType:"text"}).subscribe(function(t){e.dataSource1=t})},e.prototype.loadDataSourceUrl2=function(){var e=this;this._httpClient.get(""+this.dataSourceUrl2,{responseType:"text"}).subscribe(function(t){e.dataSource2=t})},e.prototype.loadDynamicUrl=function(){var e=this;this._httpClient.get("assets/data/code/"+this.dynamicUrl,{responseType:"text"}).subscribe(function(t){e.dynamicCode=t})},e.prototype.loadModuleUrl=function(){var e=this;this._httpClient.get("assets/data/code/"+this.moduleUrl,{responseType:"text"}).subscribe(function(t){e.moduleCode=t})},b([Object(a.E)("ts-url"),y("design:type",String)],e.prototype,"tsUrl",void 0),b([Object(a.E)("html-url"),y("design:type",String)],e.prototype,"htmlUrl",void 0),b([Object(a.E)("data-source-url"),y("design:type",String)],e.prototype,"dataSourceUrl",void 0),b([Object(a.E)("data-source-url1"),y("design:type",String)],e.prototype,"dataSourceUrl1",void 0),b([Object(a.E)("data-source-url2"),y("design:type",String)],e.prototype,"dataSourceUrl2",void 0),b([Object(a.E)("dynamic-url"),y("design:type",String)],e.prototype,"dynamicUrl",void 0),b([Object(a.E)("module-url"),y("design:type",String)],e.prototype,"moduleUrl",void 0),e=b([Object(a.n)({selector:"amexio-api-sourcecode",template:n("vlbZ")}),y("design:paramtypes",[h.a])],e)}(),x=n("ZYjt"),w=function(e,t,n,a){var i,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(r=(o<3?i(r):o>3?i(t,n,r):i(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r},k=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},D=function(){function e(e){this.sanitizer=e}return e.prototype.ngOnInit=function(){this.urlSafe=this.sanitizer.bypassSecurityTrustResourceUrl(this.stackblitzUrl),this.urlSafe1=this.sanitizer.bypassSecurityTrustResourceUrl(this.stackblitzUrl1),this.urlSafe2=this.sanitizer.bypassSecurityTrustResourceUrl(this.stackblitzUrl2)},w([Object(a.E)("disabled"),k("design:type",Boolean)],e.prototype,"disabled",void 0),w([Object(a.E)("stackblitz-url"),k("design:type",String)],e.prototype,"stackblitzUrl",void 0),w([Object(a.E)("stackblitz-url1"),k("design:type",String)],e.prototype,"stackblitzUrl1",void 0),w([Object(a.E)("stackblitz-url2"),k("design:type",String)],e.prototype,"stackblitzUrl2",void 0),e=w([Object(a.n)({selector:"amexio-api-livedemo",template:n("1Ycd")}),k("design:paramtypes",[x.c])],e)}(),F=function(e,t,n,a){var i,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(r=(o<3?i(r):o>3?i(t,n,r):i(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r},j=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},S=function(){function e(){}return F([Object(a.E)("disabled"),j("design:type",Boolean)],e.prototype,"disabled",void 0),F([Object(a.E)("isAccessibility"),j("design:type",Boolean)],e.prototype,"isAccessibility",void 0),F([Object(a.E)("http-url"),j("design:type",String)],e.prototype,"httpUrl",void 0),F([Object(a.E)("data"),j("design:type",Array)],e.prototype,"data",void 0),e=F([Object(a.n)({selector:"amexio-api-accessible",template:n("EqZn")}),j("design:paramtypes",[])],e)}(),C=n("O4vx");n.d(t,"a",function(){return R});var A=function(e,t,n,a){var i,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(r=(o<3?i(r):o>3?i(t,n,r):i(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r},O=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},U=function(){function e(e,t){this._renderer=e,this._el=t,this.nativeElement=t.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},A([Object(a.E)(),O("design:type",String)],e.prototype,"code",void 0),A([Object(a.E)(),O("design:type",String)],e.prototype,"language",void 0),e=A([Object(a.n)({selector:"prism-block",template:""}),O("design:paramtypes",[a.X,a.u])],e)}(),R=function(){function e(){}return t=e,e.forRoot=function(){return{ngModule:t,providers:[i.j,c.a]}},e=t=A([Object(a.J)({imports:[i.b,C.j,h.b],exports:[U,S,s,D,v,p,m],declarations:[U,S,s,D,v,p,m]})],e);var t}()},f4zW:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=function(){return function(){this.title="Title",this.description="Description",this.sourceMetadata=new i,this.liveMetadata=new o,this.apiRefMetadata=[],this.apiaccessibledata=[],this.componentDescription="",this.compFeaturesTitle="",this.keyFeatures="",this.isAccessibility=!0}}(),i=function(){return function(){}}(),o=(function(){}(),function(){return function(){}}())},jzsn:function(e,t){e.exports='<amexio-box amexioColorPalette [color-palette]="\'classic\'" [gradient]="true" class="api-header-style " [padding]="true"\n  align="left">\n  <ng-container *ngIf="(comData && comData?.title)">\n    <amexio-label size="large">\n      {{comData?.title}}\n    </amexio-label>\n  </ng-container> <br /><br>\n  <ng-container *ngIf="(comData && comData?.description)">\n    {{comData?.description}}\n  </ng-container>\n</amexio-box>\n<amexio-card style="display: block; padding-top:30px;">\n\n  <amexio-body>\n    <ng-container *ngIf="comData?.componentDescription">\n      <amexio-box [padding]="true" align="left">\n        <ng-container>{{comData?.componentDescription}}</ng-container><br>\n        <ng-container>\n            <ol>\n            <ng-container *ngFor="let item of comData.descriptionDetail">\n                <li>\n                  {{item}}\n                </li>\n              </ng-container>\n            </ol>\n              \x3c!-- <br> --\x3e\n          <amexio-label [size]="\'medium-bold\'">{{comData?.compFeaturesTitle}}</amexio-label><br>\n        </ng-container>\n        <br>\n        <ng-container *ngFor="let item of comData.keyFeatures">\n          <li>\n            {{item}}\n          </li>\n        </ng-container>\n      </amexio-box>\n\n\n    </ng-container>\n    <amexio-tab-view #tab [closable]="true">\n      <amexio-tab title="Demo" [active]="true" [closable]="false" [disabled]="false">\n        <ng-content select="amexio-api-demo"></ng-content>\n      </amexio-tab>\n\n      <amexio-tab title="API Reference" [active]="false" [closable]="false" [disabled]="false">\n        <ng-container *ngIf="comData && comData.apiRefMetadata &&  comData.apiRefMetadata.length > 0">\n          <ng-content select="amexio-api-reference"></ng-content>\n          <amexio-api-reference [data]="comData.apiRefMetadata"></amexio-api-reference>\n        </ng-container>\n      </amexio-tab>\n\n\n      <amexio-tab title="Accessible" [active]="false" [closable]="false" [disabled]="false">\n        <ng-container *ngIf="(comData && comData.apiaccessibledata )">\n          <ng-content select="amexio-api-accessible"></ng-content>\n          <amexio-api-accessible [disabled]="false" [data]="comData.apiaccessibledata"></amexio-api-accessible>\n        </ng-container>\n      </amexio-tab>\n\n      <amexio-tab title="Source Code" [active]="false" [closable]="false" [disabled]="false">\n        <ng-container *ngIf="comData && comData.sourceMetadata">\n\n          <amexio-api-sourcecode [html-url]="comData.sourceMetadata.htmlUrl" [ts-url]="comData.sourceMetadata.tsUrl"\n            [dynamic-url]="comData.sourceMetadata.dynamicUrl" [module-url]="comData.sourceMetadata.moduleUrl"\n            [data-source-url]="comData.sourceMetadata.datasourceUrl" [data-source-url1]="comData.sourceMetadata.datasourceUrl1"\n            [data-source-url2]="comData.sourceMetadata.datasourceUrl2">\n          </amexio-api-sourcecode>\n        </ng-container>\n      </amexio-tab>\n\n      <amexio-tab title="Live" [active]="false" [closable]="false" [disabled]="false">\n        <p align="center">AmexioSandbox</p>\n        <ng-container *ngIf="comData && comData.liveMetadata">\n          <amexio-api-livedemo [disabled]="false" [stackblitz-url]="comData.liveMetadata.stackblitzUrl"\n            [stackblitz-url1]="comData.liveMetadata.stackblitzUrl1" [stackblitz-url2]="comData.liveMetadata.stackblitzUrl2">\n          </amexio-api-livedemo>\n        </ng-container>\n      </amexio-tab>\n\n\n    </amexio-tab-view>\n  </amexio-body>\n</amexio-card>'},vlbZ:function(e,t){e.exports='<div style="overflow-y: scroll">\n  <amexio-vertical-tab-view>\n\n    <ng-container *ngIf="htmlUrl">\n      <amexio-tab title="HTML" [active]="true">\n        <ng-container *ngIf=" htmlCode">\n          <prism-block [code]="htmlCode" [language]="\'html\'"></prism-block>\n        </ng-container>\n      </amexio-tab>\n    </ng-container>\n\n    <ng-container *ngIf="tsUrl">\n      <amexio-tab title="Type Script">\n        <ng-container *ngIf="  typeScriptCode">\n          <prism-block [code]="typeScriptCode" [language]="\'typescript\'"></prism-block>\n        </ng-container>\n      </amexio-tab>\n    </ng-container>\n\n    <ng-container *ngIf="dataSourceUrl">\n      <amexio-tab title="Data Source">\n        <ng-container *ngIf=" dataSource">\n          <prism-block [code]="dataSource" [language]="\'json\'"></prism-block>\n        </ng-container>\n      </amexio-tab>\n    </ng-container>\n\n    <ng-container *ngIf="dataSourceUrl1">\n        <amexio-tab title="Second Data Source">\n          <ng-container *ngIf=" dataSource1">\n            <prism-block [code]="dataSource1" [language]="\'json\'"></prism-block>\n          </ng-container>\n        </amexio-tab>\n      </ng-container>\n\n      <ng-container *ngIf="dataSourceUrl2">\n          <amexio-tab title="Third Data Source">\n            <ng-container *ngIf=" dataSource2">\n              <prism-block [code]="dataSource2" [language]="\'json\'"></prism-block>\n            </ng-container>\n          </amexio-tab>\n        </ng-container>\n\n    <ng-container *ngIf="dynamicUrl">\n        <amexio-tab title="Dynamic Code">\n          <ng-container *ngIf=" dynamicCode">\n            <prism-block [code]="dynamicCode" [language]="\'typescript\'"></prism-block>\n          </ng-container>\n        </amexio-tab>\n      </ng-container>\n\n      <ng-container *ngIf="moduleUrl">\n          <amexio-tab title="Module Code">\n            <ng-container *ngIf=" moduleCode">\n              <prism-block [code]="moduleCode" [language]="\'typescript\'"></prism-block>\n            </ng-container>\n          </amexio-tab>\n        </ng-container>\n\n  </amexio-vertical-tab-view>\n</div>\n'},wZee:function(e,t){var n=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof i?new i(e.type,a.util.encode(e.content),e.alias):Array.isArray(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var i,o,r=a.util.type(t);switch(n=n||{},r){case"Object":if(o=a.util.objId(t),n[o])return n[o];for(var s in i={},n[o]=i,t)t.hasOwnProperty(s)&&(i[s]=e(t[s],n));return i;case"Array":return o=a.util.objId(t),n[o]?n[o]:(i=[],n[o]=i,t.forEach(function(t,a){i[a]=e(t,n)}),i);default:return t}}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var i in t)n[i]=t[i];return n},insertBefore:function(e,t,n,i){var o=(i=i||a.languages)[e],r={};for(var s in o)if(o.hasOwnProperty(s)){if(s==t)for(var c in n)n.hasOwnProperty(c)&&(r[c]=n[c]);n.hasOwnProperty(s)||(r[s]=o[s])}var l=i[e];return i[e]=r,a.languages.DFS(a.languages,function(t,n){n===l&&t!=e&&(this[t]=r)}),r},DFS:function e(t,n,i,o){o=o||{};var r=a.util.objId;for(var s in t)if(t.hasOwnProperty(s)){n.call(t,s,t[s],i||s);var c=t[s],l=a.util.type(c);"Object"!==l||o[r(c)]?"Array"!==l||o[r(c)]||(o[r(c)]=!0,e(c,n,s,o)):(o[r(c)]=!0,e(c,n,null,o))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var i={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",i);for(var o,r=i.elements||e.querySelectorAll(i.selector),s=0;o=r[s++];)a.highlightElement(o,!0===t,i.callback)},highlightElement:function(n,i,o){for(var r,s,c=n;c&&!t.test(c.className);)c=c.parentNode;c&&(r=(c.className.match(t)||[,""])[1].toLowerCase(),s=a.languages[r]),n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+r,n.parentNode&&(c=n.parentNode,/pre/i.test(c.nodeName)&&(c.className=c.className.replace(t,"").replace(/\s+/g," ")+" language-"+r));var l={element:n,language:r,grammar:s,code:n.textContent},d=function(e){l.highlightedCode=e,a.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,a.hooks.run("after-highlight",l),a.hooks.run("complete",l),o&&o.call(l.element)};if(a.hooks.run("before-sanity-check",l),l.code)if(a.hooks.run("before-highlight",l),l.grammar)if(i&&e.Worker){var u=new Worker(a.filename);u.onmessage=function(e){d(e.data)},u.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else d(a.highlight(l.code,l.grammar,l.language));else d(a.util.encode(l.code));else a.hooks.run("complete",l)},highlight:function(e,t,n){var o={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",o),o.tokens=a.tokenize(o.code,o.grammar),a.hooks.run("after-tokenize",o),i.stringify(a.util.encode(o.tokens),o.language)},matchGrammar:function(e,t,n,o,r,s,c){for(var l in n)if(n.hasOwnProperty(l)&&n[l]){if(l==c)return;var d=n[l];d="Array"===a.util.type(d)?d:[d];for(var u=0;u<d.length;++u){var p=d[u],g=p.inside,f=!!p.lookbehind,m=!!p.greedy,h=0,b=p.alias;if(m&&!p.pattern.global){var y=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,y+"g")}p=p.pattern||p;for(var v=o,x=r;v<t.length;x+=t[v].length,++v){var w=t[v];if(t.length>e.length)return;if(!(w instanceof i)){if(m&&v!=t.length-1){if(p.lastIndex=x,!(C=p.exec(e)))break;for(var k=C.index+(f?C[1].length:0),D=C.index+C[0].length,F=v,j=x,S=t.length;F<S&&(j<D||!t[F].type&&!t[F-1].greedy);++F)k>=(j+=t[F].length)&&(++v,x=j);if(t[v]instanceof i)continue;A=F-v,w=e.slice(x,j),C.index-=x}else{p.lastIndex=0;var C=p.exec(w),A=1}if(C){f&&(h=C[1]?C[1].length:0);D=(k=C.index+h)+(C=C[0].slice(h)).length;var O=w.slice(0,k),U=w.slice(D),R=[v,A];O&&(++v,x+=O.length,R.push(O));var E=new i(l,g?a.tokenize(C,g):C,b,C,m);if(R.push(E),U&&R.push(U),Array.prototype.splice.apply(t,R),1!=A&&a.matchGrammar(e,t,n,v,x,!0,l),s)break}else if(s)break}}}}},tokenize:function(e,t){var n=[e],i=t.rest;if(i){for(var o in i)t[o]=i[o];delete t.rest}return a.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var i,o=0;i=n[o++];)i(t)}},Token:i};function i(e,t,n,a,i){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!i}if(e.Prism=a,i.stringify=function(e,t,n){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(n){return i.stringify(n,t,e)}).join("");var o={type:e.type,content:i.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var r=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(o.classes,r)}a.hooks.run("wrap",o);var s=Object.keys(o.attributes).map(function(e){return e+'="'+(o.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+(s?" "+s:"")+">"+o.content+"</"+o.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",function(t){var n=JSON.parse(t.data),i=n.language,o=n.code,r=n.immediateClose;e.postMessage(a.highlight(o,a.languages[i],i)),r&&e.close()},!1),a):a;var o=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return o&&(a.filename=o.src,a.manual||o.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),a}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});void 0!==e&&e.exports&&(e.exports=n),"undefined"!=typeof global&&(global.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var a={};a["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};i["language-"+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var o={};o[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:i},n.languages.insertBefore("markup","cdata",o)}}),n.languages.xml=n.languages.extend("markup",{}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:RegExp("url\\((?:"+t.source+"|.*?)\\)","i"),selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.markup.tag.addInlined("script","javascript"),n.languages.js=n.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach(function(e){if(!e.hasAttribute("data-src-loaded")){for(var a,i=e.getAttribute("data-src"),o=e,r=/\blang(?:uage)?-([\w-]+)\b/i;o&&!r.test(o.className);)o=o.parentNode;if(o&&(a=(e.className.match(r)||[,""])[1]),!a){var s=(i.match(/\.(\w+)$/)||[,""])[1];a=t[s]||s}var c=document.createElement("code");c.className="language-"+a,e.textContent="",c.textContent="Loading\u2026",e.appendChild(c);var l=new XMLHttpRequest;l.open("GET",i,!0),l.onreadystatechange=function(){4==l.readyState&&(l.status<400&&l.responseText?(c.textContent=l.responseText,n.highlightElement(c),e.setAttribute("data-src-loaded","")):l.status>=400?c.textContent="\u2716 Error "+l.status+" while fetching file: "+l.statusText:c.textContent="\u2716 Error: File does not exist or is empty")},l.send(null)}}),n.plugins.toolbar&&n.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var n=t.getAttribute("data-src"),a=document.createElement("a");return a.textContent=t.getAttribute("data-download-link-label")||"Download",a.setAttribute("download",""),a.href=n,a}})},document.addEventListener("DOMContentLoaded",function(){self.Prism.fileHighlight()}))}}]);