(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{BLWB:function(e,t,o){"use strict";o.r(t);var a=o("CcnG"),n=o("ZYCi"),l=o("JQBr"),i=o("Ip0R"),r=o("gIcY"),s=o("O4vx"),m=o("t/Na"),c=o("9NvV"),d=o("QVLW"),b=function(e,t,o,a){var n,l=arguments.length,i=l<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,o):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,a);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(i=(l<3?n(i):l>3?n(t,o,i):n(t,o))||i);return l>3&&i&&Object.defineProperty(t,o,i),i},x=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},h=function(){function e(e,t,o,a){this.http=e,this.httpService=t,this.cookieService=o,this.themeServiceService=a,this.hasThemeInit=!1}return e.prototype.ngOnInit=function(){var e,t=this;this.http.get("assets/data/theme/themes-api-showcase.json",{responseType:"json"}).subscribe(function(t){e=t},function(e){},function(){t.mdThemeData=e}),this.http.get("assets/data/theme/theme-api-showcase-amexio.json",{responseType:"json"}).subscribe(function(t){e=t},function(e){},function(){t.amexioThemeData=e})},e.prototype.addNewTheme=function(e,t){var o=this,a=document.createElement("link");a.onload=function(){o.removeExistingTheme(t)},a.setAttribute("rel","stylesheet"),a.id="themeid",a.href=e,document.head.appendChild(a)},e.prototype.removeExistingTheme=function(e){if(null!=e&&e&&0!=e.length)for(var t=0;t<e.length;t++){var o=e[t];"themeid"==o.id&&document.head.removeChild(o)}},e.prototype.themeChange=function(e){this.themeServiceService.switchTheme(e)},e=b([Object(a.n)({selector:"theme-page",template:o("l5iu")}),x("design:paramtypes",[m.a,c.a,l.a,d.a])],e)}(),u=function(e,t,o,a){var n,l=arguments.length,i=l<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,o):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,a);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(i=(l<3?n(i):l>3?n(t,o,i):n(t,o))||i);return l>3&&i&&Object.defineProperty(t,o,i),i},p=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(){function e(e){this.service=e,this.testmode=!0}return e.prototype.ngOnInit=function(){var e,t=this;this.service.loadThemes("https://raw.githubusercontent.com/meta-magic/amexio-api-website/master/api/amexio-mda.json").subscribe(function(t){e=t},function(e){console.log("Unable to make http call")},function(){t.data=e})},e.prototype.themeChange=function(e){this.service.switchTheme(e)},e.prototype.onChange=function(e){this.isMoreDetails=e},u([Object(a.E)("data"),p("design:type",Array)],e.prototype,"data",void 0),u([Object(a.E)("more-details"),p("design:type",Boolean)],e.prototype,"isMoreDetails",void 0),u([Object(a.E)("test-mode"),p("design:type",Boolean)],e.prototype,"testmode",void 0),e=u([Object(a.n)({selector:"amexio-theme",template:o("TyRJ")}),p("design:paramtypes",[d.a])],e)}();o.d(t,"ThemeModule",function(){return v}),o.d(t,"routedComponents",function(){return w});var g=function(e,t,o,a){var n,l=arguments.length,i=l<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,o):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,a);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(i=(l<3?n(i):l>3?n(t,o,i):n(t,o))||i);return l>3&&i&&Object.defineProperty(t,o,i),i},y=[{path:"",component:h}],v=function(){function e(){}return e=g([Object(a.J)({imports:[i.b,m.b,r.d,s.j,n.d.forChild(y)],exports:[n.d],declarations:[h,f],providers:[l.a]})],e)}(),w=[h]},TyRJ:function(e,t){e.exports='<div class="flex-row">\n    <div class="flex-col flex-col-12">\n        <div style="display: flex;" class="flex-start">\n            <label role="text" style="outline: none; cursor: text;" class="label-content medium-bold">\n                More Details: &nbsp;\n            </label>\n            <amexio-toggle (onChange)="onChange($event)" [size]="\'small\'" [type]="1" shape="square"> </amexio-toggle>\n        </div>\n    </div>\n</div>\n<div class="flex-row" *ngFor="let row of data">\n    <div [class]="\'flex-col  flex-col-\'+(12/row.length)" *ngFor="let col of row">\n        <div class="card-container">\n            <header class="card-header flex-start" style="justify-content: space-between; padding: 10px;"\n                [ngStyle]="{\'background-color\':col.navBarBGColor, \'color\':col.navBarFontColor}">\n                <label role="text" style="outline: none; cursor: text;" class="label-content medium-bold">\n                    {{col.themeName}}\n                </label>\n                <amexio-button *ngIf="testmode" [icon]="\'fa fa-check\'" [type]="\'transparent\'" (onClick)="themeChange(col)"></amexio-button>\n            </header>\n            <div *ngIf="isMoreDetails" class="card-body cardbody">\n                <img [attr.alt]="col.themeName" [attr.src]="\'assets/images/theme-icons/\'+col.themeImageFile"\n                    class="img-fluid" />\n                <br />\n                <label role="text" style="outline: none; cursor: text;" class="label-content small-bold">\n                    Version: {{col.version}}\n                </label>\n                <br />\n                <label role="text" style="outline: none; cursor: text;" class="label-content small-bold">\n                    Style: {{col.style}}\n                </label>\n\n            </div>\n            <footer class="card-footer flex-center">\n                <div *ngFor="let color of col.themes"\n                    style="display: block; height: 50px; width:100%;  margin: 0px 5px;"\n                    [ngStyle]="{\'background-color\': color}"></div>\n            </footer>\n        </div>\n    </div>\n    <div>'},l5iu:function(e,t){e.exports='<amexio-image [path]="\'assets/images/logos/amexio_colors.jpeg\'" [tooltip]="\'Image\'"></amexio-image>\n\n<amexio-tab-view [closable]="false">\n    <amexio-tab title="Material Design" [active]="true">\n        <amexio-theme></amexio-theme>  \n    </amexio-tab>\n    <amexio-tab title="Amexio">\n        <amexio-theme [test-mode]="false" [data]="amexioThemeData"></amexio-theme>  \n    </amexio-tab>\n    <amexio-tab title="Colors">\n        Eventually we can apply this attribute [amexio-color] to all components, currently we can apply to progress bar\n        and datapoints.\n        To know more refer the API reference section\n        <amexio-datagrid title="Amexio Colors" [enable-column-fiter]="false" [http-method]="\'get\'"\n            [http-url]="\'assets/data/theme/amexio-colours.json\'" [data-reader]="\'colors\'" [enable-data-filter]="false">\n            <amexio-data-table-column [width]="15" [data-index]="\'name\'" [data-type]="\'string\'" [hidden]="false"\n                [text]="\'Name\'"></amexio-data-table-column>\n            <amexio-data-table-column [width]="15" [data-index]="\'css\'" [data-type]="\'string\'" [hidden]="false"\n                [text]="\'CSS Class Name\'">\n                <ng-template #amexioBodyTmpl let-column let-row="row">\n                    <span>\n                        [amexio-color] = \'{{row.css}}\' </span>\n                </ng-template>\n            </amexio-data-table-column>\n            <amexio-data-table-column [width]="15" [data-index]="\'BG\'" [data-type]="\'string\'" [hidden]="false"\n                [text]="\'Color\'">\n                <ng-template #amexioBodyTmpl let-column let-row="row">\n                    <span>\n                        <div [ngStyle]="{\'background-color\':row.BG, \'color\' : row.font}">\n                            This is amexio color {{ row.name }} background <b> {{ row.BG }} </b> with opposite font\n                            color <b> {{ row.font }} </b>\n                        </div>\n                    </span>\n                </ng-template>\n            </amexio-data-table-column>\n        </amexio-datagrid>\n    </amexio-tab>\n    <amexio-tab title="Getting Started">\n        <amexio-label size="large">To install the Amexio Colors:</amexio-label>\n        <amexio-box background-color="blue" border="left" border-color="blue" padding="true">\n            <amexio-label size="medium-bold">$ sudo npm install -g amexio-colors</amexio-label>\n        </amexio-box>\n        <amexio-label size="large">Check the Amexio Colors version:</amexio-label>\n        <amexio-box background-color="blue" border="left" border-color="blue" padding="true">\n            <amexio-label size="medium-bold"> $ ac </amexio-label><br />\n            <amexio-label> Amexio Colors v1.0 </amexio-label><br />\n            <amexio-label> Copyright (c) 2018, MetaMagic Global Inc, NJ, USA </amexio-label><br />\n            <amexio-label> ..... </amexio-label><br />\n        </amexio-box>\n        <amexio-label size="large">To Generate Amexio Material Design Themes</amexio-label>\n\n        <amexio-box background-color="blue" border="left" border-color="blue" padding="true">\n            <amexio-label size="medium-bold">$ pwd</amexio-label><br />\n            <amexio-label size="medium">/home/user/</amexio-label><br /><br />\n            <amexio-label size="medium-bold">$ mkdir mythemes</amexio-label><br />\n            <amexio-label size="medium-bold">$ echo "// Amexio Themes v0.0 " >> Themes-Data.txt</amexio-label><br />\n            <amexio-label size="medium-bold">$ echo "// Design-Type : Material Design " >> Themes-Data.txt\n            </amexio-label><br />\n            <amexio-label size="medium-bold">$ echo "// Theme-Version : 4.0 " >> Themes-Data.txt</amexio-label><br />\n            <amexio-label size="medium-bold">$ echo "army-olive,#4B5320,#708238" >> Themes-Data.txt</amexio-label><br />\n            <amexio-label size="medium-bold">$ echo "ash-stone-black,#544C4A,#877F7D" >> Themes-Data.txt</amexio-label>\n            <br />\n            <br />\n            <amexio-label size="medium-bold">$ ac Themes-Data.txt /home/user/mythemes/</amexio-label><br />\n        </amexio-box>\n        <amexio-label size="large"> Amexio Colors API Documentation</amexio-label>\n        <p>\n            <amexio-label>\n                Checkout the Amexio Colors API Documentation published in </amexio-label>\n            <a href="https://meta-magic.github.io/AmexioColors/" target="_blank"> GitHub Pages</a>\n            <br />\n            <amexio-label>For Testing the Themes Autogenerated by the Amexio Colors Checkout the Amexio</amexio-label>\n            <a href="https://api.amexio.org" target="_blank"> API Site</a>\n        </p>\n\n    </amexio-tab>\n</amexio-tab-view>'}}]);