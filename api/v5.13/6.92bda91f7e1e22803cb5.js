(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{BLWB:function(e,t,o){"use strict";o.r(t);var a=o("CcnG"),i=o("ZYCi"),n=o("JQBr"),l=o("Ip0R"),r=o("gIcY"),m=o("O4vx"),s=o("t/Na"),b=o("9NvV"),c=o("QVLW"),x=function(e,t,o,a){var i,n=arguments.length,l=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,o):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,a);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(l=(n<3?i(l):n>3?i(t,o,l):i(t,o))||l);return n>3&&l&&Object.defineProperty(t,o,l),l},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},h=function(){function e(e,t,o,a,i){this.route=e,this.http=t,this.httpService=o,this.cookieService=a,this.themeServiceService=i,this.hasThemeInit=!1}return e.prototype.ngOnInit=function(){var e,t=this;this.http.get("https://raw.githubusercontent.com/meta-magic/amexio-api-website/master/api/json/amexio-am.json",{responseType:"json"}).subscribe(function(t){e=t},function(e){},function(){t.amexioThemeData=e})},e.prototype.previous=function(){this.route.navigate(["getting-started"])},e.prototype.next=function(){this.route.navigate(["d3-charts"])},e.prototype.addNewTheme=function(e,t){var o=this,a=document.createElement("link");a.onload=function(){o.removeExistingTheme(t)},a.setAttribute("rel","stylesheet"),a.id="themeid",a.href=e,document.head.appendChild(a)},e.prototype.removeExistingTheme=function(e){if(null!=e&&e&&0!=e.length)for(var t=0;t<e.length;t++){var o=e[t];"themeid"==o.id&&document.head.removeChild(o)}},e.prototype.themeChange=function(e){this.themeServiceService.switchTheme(e)},e=x([Object(a.n)({selector:"theme-page",template:o("l5iu")}),d("design:paramtypes",[i.c,s.a,b.a,n.a,c.a])],e)}();o.d(t,"ThemeModule",function(){return f}),o.d(t,"routedComponents",function(){return g});var u=function(e,t,o,a){var i,n=arguments.length,l=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,o):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,a);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(l=(n<3?i(l):n>3?i(t,o,l):i(t,o))||l);return n>3&&l&&Object.defineProperty(t,o,l),l},p=[{path:"",component:h}],f=function(){function e(){}return e=u([Object(a.J)({imports:[l.b,s.b,r.d,m.j,m.d,i.d.forChild(p)],exports:[i.d],declarations:[h],providers:[n.a]})],e)}(),g=[h]},l5iu:function(e,t){e.exports='<amexio-image [path]="\'assets/images/logos/amexio_colors.jpeg\'" [tooltip]="\'Image\'"></amexio-image>\n\n<amexio-tab-view [closable]="false">\n    <amexio-tab title="Material Design" [active]="true">\n        <amexio-theme-switcher [closeable]="false" [relative]="true" [mda]="true" ></amexio-theme-switcher>\n    </amexio-tab>\n    <amexio-tab title="Amexio">\n        <amexio-theme-switcher  [closeable]="false" [relative]="true"  [mda]="false" [test-mode]="false" [data]="amexioThemeData"></amexio-theme-switcher>\n    </amexio-tab>\n    <amexio-tab title="Colors">\n        Eventually we can apply this attribute [amexio-color] to all components, currently we can apply to progress bar\n        and datapoints.\n        To know more refer the API reference section\n        <amexio-datagrid title="Amexio Colors" [enable-column-filter]="false" [http-method]="\'get\'"\n            [http-url]="\'assets/data/theme/amexio-colours.json\'" [data-reader]="\'colors\'" [enable-data-filter]="false">\n            <amexio-data-table-column [width]="15" [data-index]="\'name\'" [data-type]="\'string\'" [hidden]="false"\n                [text]="\'Name\'"></amexio-data-table-column>\n            <amexio-data-table-column [width]="15" [data-index]="\'css\'" [data-type]="\'string\'" [hidden]="false"\n                [text]="\'CSS Class Name\'">\n                <ng-template #amexioBodyTmpl let-column let-row="row">\n                    <span>\n                        [amexio-color] = \'{{row.css}}\' </span>\n                </ng-template>\n            </amexio-data-table-column>\n            <amexio-data-table-column [width]="15" [data-index]="\'BG\'" [data-type]="\'string\'" [hidden]="false"\n                [text]="\'Color\'">\n                <ng-template #amexioBodyTmpl let-column let-row="row">\n                    <span>\n                        <div [ngStyle]="{\'background-color\':row.BG, \'color\' : row.font}">\n                            This is amexio color {{ row.name }} background <b> {{ row.BG }} </b> with opposite font\n                            color <b> {{ row.font }} </b>\n                        </div>\n                    </span>\n                </ng-template>\n            </amexio-data-table-column>\n        </amexio-datagrid>\n    </amexio-tab>\n    <amexio-tab title="Getting Started">\n        <amexio-label size="large">To install the Amexio Colors:</amexio-label>\n        <amexio-box background-color="blue" border="left" border-color="blue" padding="true">\n            <amexio-label size="medium-bold">$ sudo npm install -g amexio-colors</amexio-label>\n        </amexio-box>\n        <amexio-label size="large">Check the Amexio Colors version:</amexio-label>\n        <amexio-box background-color="blue" border="left" border-color="blue" padding="true">\n            <amexio-label size="medium-bold"> $ ac </amexio-label><br />\n            <amexio-label> Amexio Colors v1.0 </amexio-label><br />\n            <amexio-label> Copyright (c) 2018, MetaMagic Global Inc, NJ, USA </amexio-label><br />\n            <amexio-label> ..... </amexio-label><br />\n        </amexio-box>\n        <amexio-label size="large">To Generate Amexio Material Design Themes</amexio-label>\n\n        <amexio-box background-color="blue" border="left" border-color="blue" padding="true">\n            <amexio-label size="medium-bold">$ pwd</amexio-label><br />\n            <amexio-label size="medium">/home/user/</amexio-label><br /><br />\n            <amexio-label size="medium-bold">$ mkdir mythemes</amexio-label><br />\n            <amexio-label size="medium-bold">$ echo "// Amexio Themes v0.0 " >> Themes-Data.txt</amexio-label><br />\n            <amexio-label size="medium-bold">$ echo "// Design-Type : Material Design " >> Themes-Data.txt\n            </amexio-label><br />\n            <amexio-label size="medium-bold">$ echo "// Theme-Version : 4.0 " >> Themes-Data.txt</amexio-label><br />\n            <amexio-label size="medium-bold">$ echo "army-olive,#4B5320,#708238" >> Themes-Data.txt</amexio-label><br />\n            <amexio-label size="medium-bold">$ echo "ash-stone-black,#544C4A,#877F7D" >> Themes-Data.txt</amexio-label>\n            <br />\n            <br />\n            <amexio-label size="medium-bold">$ ac Themes-Data.txt /home/user/mythemes/</amexio-label><br />\n        </amexio-box>\n        <amexio-label size="large"> Amexio Colors API Documentation</amexio-label>\n        <p>\n            <amexio-label>\n                Checkout the Amexio Colors API Documentation published in </amexio-label>\n            <a href="https://meta-magic.github.io/AmexioColors/" target="_blank"> GitHub Pages</a>\n            <br />\n            <amexio-label>For Testing the Themes Autogenerated by the Amexio Colors Checkout the Amexio</amexio-label>\n            <a href="https://api.amexio.org" target="_blank"> API Site</a>\n        </p>\n\n    </amexio-tab>\n</amexio-tab-view>\n\n\n<amexio-action-ce [align]="\'space-between\'">\n        <amexio-button [label]="\'Previous\'" [type]="\'theme-color\'" (onClick)="previous()">\n        </amexio-button>\n        <amexio-button [label]="\'Next\'" [type]="\'theme-color\'" [tooltip]="\'toolTip\'"  (onClick)="next()">\n        </amexio-button>\n</amexio-action-ce>'}}]);