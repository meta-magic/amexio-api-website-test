(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{IwQQ:function(e,o,t){"use strict";t.r(o);var a=t("CcnG"),n=t("O4vx"),l=t("gIcY"),r=t("Ip0R"),i=t("t/Na"),c=t("d2mR"),m=t("ZYCi"),d=t("JQBr"),u=t("9NvV"),f=function(e,o,t,a){var n,l=arguments.length,r=l<3?o:null===a?a=Object.getOwnPropertyDescriptor(o,t):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,o,t,a);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(r=(l<3?n(r):l>3?n(o,t,r):n(o,t))||r);return l>3&&r&&Object.defineProperty(o,t,r),r},p=function(e,o){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,o)},s=function(){function e(e,o,t,a){this._cookieService=e,this.httpService=o,this.http=t,this.router=a,this.inputData=[{input:"color-palette",data:"values are classic, vibrant, random, specific. Default: classic"},{input:"gradient",data:"If set true, provides linear gradient effect for particular theme applied."}],this.componentData=[]}return e.prototype.ngOnInit=function(){this.fetchJsonData()},e.prototype.onRowSelect=function(e){this.router.navigate([e.link])},e.prototype.paletteColorTheme=function(e){var o,t=this;this.themeData=JSON.parse(this._cookieService.get("theme-info")),console.log("this._cookieService.get('theme-info')",this._cookieService.get("theme-info")),this.httpService.fetch("https://api.amexio.org/api/mda/"+this.themeData.themeName+".json").subscribe(function(e){o=e},function(e){},function(){var a=o.themeColor;e.forEach(function(e){"amexio-theme-color1"===e.colorpalette&&(e.actualColor.bgColor=a[1].value,e.actualColor.fgcolor=a[28].value),"amexio-theme-color2"===e.colorpalette&&(e.actualColor.bgColor=a[2].value,e.actualColor.fgcolor=a[29].value),"amexio-theme-color3"===e.colorpalette&&(e.actualColor.bgColor=a[3].value,e.actualColor.fgcolor=a[30].value),"amexio-theme-color4"===e.colorpalette&&(e.actualColor.bgColor=a[4].value,e.actualColor.fgcolor=a[31].value),"amexio-theme-color5"===e.colorpalette&&(e.actualColor.bgColor=a[5].value,e.actualColor.fgcolor=a[32].value),"amexio-theme-color6"===e.colorpalette&&(e.actualColor.bgColor=a[6].value,e.actualColor.fgcolor=a[33].value)}),t.componentData=e})},e.prototype.fetchJsonData=function(){var e,o=this;this.httpService.fetch("/assets/theme.json").subscribe(function(o){e=o},function(e){},function(){var t=e;o.paletteColorTheme(t)})},e=f([Object(a.n)({selector:"color-palette-demo",template:t("jF7z")}),p("design:paramtypes",[d.a,u.a,i.a,m.c])],e)}(),b=[{path:"color-palette",component:s}];t.d(o,"DirectiveModule",function(){return x});var h=function(e,o,t,a){var n,l=arguments.length,r=l<3?o:null===a?a=Object.getOwnPropertyDescriptor(o,t):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,o,t,a);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(r=(l<3?n(r):l>3?n(o,t,r):n(o,t))||r);return l>3&&r&&Object.defineProperty(o,t,r),r},x=function(){function e(){}return e=h([Object(a.J)({declarations:[s],imports:[r.b,l.d,i.b,c.a.forRoot(),n.i,m.d.forChild(b)],providers:[]})],e)}()},jF7z:function(e,o){e.exports='<amexio-row>\n  <amexio-column size="12">\n    <amexio-card [header]="true">\n      <amexio-header>\n        Color Palette Directive\n      </amexio-header>\n      <amexio-body>\n        <amexio-tab-view [closable]="false">\n          <amexio-tab title="Introduction" [active]="true">\n            <amexio-card [header]="true">\n              <amexio-header>\n                Directive: amexioColorPalette\n              </amexio-header>\n              <amexio-body>\n                <amexio-datagrid [enable-column-fiter]="false" [data]="inputData">\n                  <amexio-data-table-column [data-index]="\'input\'" [data-type]="\'string\'" [width]="30" [hidden]="false" [text]="\'Input\'">\n                  </amexio-data-table-column>\n                  <amexio-data-table-column [data-index]="\'data\'" [data-type]="\'string\'" [hidden]="false" [text]="\'Information\'">\n                  </amexio-data-table-column>\n                </amexio-datagrid>\n\n                <amexio-box amexioColorPalette [color-palette]="\'amexio-theme-color1\'" [gradient]="false" [amexio-color]="\'amexio-theme-color2\'" [border-dotted]="false"\n                  [padding]="true" [closable]="false" align="left">\n                  <b>Classic: </b>\n                  Current State of Two colors: theme color1 and theme color2\n                  <br>\n                  <b>Vibrant: </b>\n                  <br> NavBar = Theme Color 1\n                  <br> Panel Header = Theme Color 2\n                  <br> Accordion / Tabs = Theme Color 3\n                  <br> Card Header = Theme Color 4\n                  <br> Grid Header = Theme Color 5\n                  <br> Window / Dialog / box= Theme Color 6\n                  <br>\n                  <b>Random:</b>\n                  <br>\n                  Except for the NavBar, all other components can pick up a random color for the Header. panel, Accordion,\n                    Tabs, Card, Grid, Window, Dialog, box\n                </amexio-box>\n              </amexio-body>\n            </amexio-card>\n          </amexio-tab>\n          <amexio-tab title="Color-palette">\n              <amexio-datagrid  *ngIf="componentData" [enable-column-fiter]="false" [data]="componentData" (rowSelect)="onRowSelect($event)">\n                  <amexio-data-table-column [data-index]="\'componentName\'" [data-type]="\'string\'" [width]="30" [hidden]="false" [text]="\'Component\'">\n                  </amexio-data-table-column>\n                  <amexio-data-table-column [data-index]="\'colorpalette\'" [data-type]="\'string\'" [hidden]="false" [text]="\'Default Color\'">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]="\'actualColor.bgColor\'" [data-type]="\'string\'" [hidden]="false" [text]="\'Actual Color\'">\n                        <ng-template #amexioBodyTmpl let-column let-row="row">\n                            <amexio-label class="fa fa-square" [ngStyle]="{\'color\': row.actualColor.bgColor}"></amexio-label>\n                            &nbsp;{{row.actualColor.bgColor}}\n                          &nbsp; &nbsp;\n                              <amexio-label class="fa fa-square" [ngStyle]="{\'color\': row.actualColor.fgcolor}" style="border: 1px solid black"></amexio-label>\n                              &nbsp;{{row.actualColor.fgcolor}}\n                            </ng-template> \n\n                    </amexio-data-table-column>\n                </amexio-datagrid>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n  </amexio-column>\n</amexio-row>'}}]);