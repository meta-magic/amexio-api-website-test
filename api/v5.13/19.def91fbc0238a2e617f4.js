(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{lODo:function(e,a){e.exports='<amexio-box amexioColorPalette [color-palette]="\'classic\'" [gradient]="true" class="api-header-style " [padding]="true"\n  align="left">   \n  <amexio-label size="large">\n        ARIA, WCAG, Section 508\n    </amexio-label>\n    <br>\n    <br>\n    The power of the Web is in its universality.\n    Access by everyone regardless of disability is an essential aspect. Tim Berners-Lee.\n    <br />\n</amexio-box>\n<amexio-row>\n    <amexio-column size="12">\n        <amexio-card style="display: block; padding-top:30px;">\n\n            <amexio-body>\n                <p>\n                    When you build a Web Application or a Web Site it\'s critical that it is designed to work for all\n                    people irrespective of the Hardware, Software, Language and Location which is used to build the\n                    App. It\'s mandatory to meet the above goal and when your application meets the above goal then it\n                    is accessible to people with a diverse range of hearing, movement, sight, and cognitive ability.\n                    <a style="color: blue;" href="https://www.w3.org/standards/webdesign/accessibility"><b>Read more...</b></a>\n                </p>\n                <br>\n                <p>\n                    Accessibility of web content requires semantic information about widgets, structures, and\n                    behaviors, in order to allow assistive technologies to convey appropriate information to persons\n                    with disabilities.\n                    This specification provides an ontology of roles, states, and properties that define accessible\n                    user interface elements and can be used to improve the accessibility and interoperability of web\n                    content and applications.\n                    These semantics are designed to allow an author to properly convey user interface behaviors and\n                    structural information to assistive technologies in document-level markup.\n                </p>\n                <p>\n                    The Web Accessibility Initiative\'s Accessible Rich Internet Applications specification (WAI-ARIA,\n                    or just ARIA) is good for bridging areas with accessibility issues that can\'t be managed with\n                    native HTML.\n                    It works by allowing you to specify attributes that modify the way an element is translated into\n                    the accessibility tree.\n                </p>\n                <p>\n                    After a brief introduction section, the guide begins with ARIA implementation patterns for\n                    common widgets that both enumerate expected behaviors.\n                    \x3c!-- >aria-label-ARIA can add extra label and description text that is only exposed to assistive technology APIs.\n                    >aria-controls-ARIA can express semantic relationships between elements that extend the standard parent/child connection, such as a custom scrollbar that controls a specific region. --\x3e\n                </p>\n                <p>\n                    ><b>Roles</b> are element types and will not change with time or user actions. And to provide\n                    normal\n                    processing of the specified element type.\n                </p>\n                <p>\n                    ><b>States and properties</b> are used to declare important attributes of an element that affect\n                    and\n                    describe interaction.\n                    They enable the user agent and operating system to properly handle the element even when the\n                    attributes are dynamically changed by client-side scripts.\n                </p>\n                <p>\n                    ><b>Managing Focus</b> to be managed by the container using the\n                    aria-activedescendant attribute on the managing container element, or by the container managing the\n                    tabindex of its child elements and setting focus on the appropriate child.When active descendant\n                    has\n                    focus, the user may navigate through the container by pressing additional\n                    keys, such as the arrow keys, to change the currently active descendant. Any additional press of\n                    the main navigation key (generally the TAB key) will move out of the container to the next widget.\n                </p>\n                <p><b>WHAT DOES ARIA DO?</b>\n                    ARIA can modify existing element semantics or add semantics to elements where no native semantics\n                    exist. It can also express semantic patterns that don\'t exist at all in HTML, like a menu or a tab\n                    panel. Often, ARIA lets us create widget-type elements that wouldn\'t be possible with plain HTML.\n                </p>\n                <ul>\n                    <li>\n                        For example, ARIA can add extra label and description text that is only exposed to\n                        assistive technology APIs.\n                    </li>\n                    <li>\n                        ARIA can express semantic relationships between elements that extend the standard parent/child\n                        connection, such as a custom scrollbar that controls a specific region.\n                    </li>\n                </ul>\n                <amexio-box border-color="blue" border="borderPosition" [padding]="true" [closable]="false" align="left">\n                    <b>Example of Aria CheckBox</b><br>\n                    <span>\n                    </span><span>\n                        <</span> <span>li><span>\n                            </span>&nbsp;\n                    </span>\n                    <span>tabindex = "0" class="checkbox" role="checkbox" checked aria-checked="true"</span>\n                    <span>></span><br>\n                    <<span>/li></span>\n\n                        \x3c!--  checked aria-checked="true"> --\x3e\n                        \x3c!-- Receive promotional offers --\x3e\n                        \x3c!-- </li> --\x3e\n\n                </amexio-box><br>\n                <amexio-box border-color="blue" border="borderPosition" [padding]="true" [closable]="false" align="left">\n                    <b>Example of Aria Button</b><br>\n                    <span>\n                    </span> <span>\n                        <</span> <span>div&nbsp;\n                    </span>\n                    <span>tabindex = "0" id="savechanges" role="button" pressed aria-pressed="false"</span>\n                    <span>></span><br>\n                    <span>\n                    </span>\n                    <<span>/div>\n                        </span>\n\n                </amexio-box>\n\n                <p>\n                    Figure illustrates the relationship between user agents (e.g., browsers),\n                    accessibility APIs, and assistive technologies. It describes the "contract" provided by the user\n                    agent to assistive technologies,which includes typical accessibility information found in the\n                    accessibility API for many of our\n                    accessible platforms for GUIs (role, state, selection, event notification,\n                    relationship information, and descriptions). The DOM, usually HTML, acts as the data model and view\n                    in a typical model-view-controller relationship, and JavaScript acts as the controller by\n                    manipulating the style and content of the displayed data.\n                    The user agent conveys relevant information to the operating system\'s accessibility API,\n                    which can be used by any assistive technologies, such as screen readers.\n                </p>\n                <amexio-image width="100%" [path]="\'assets/images/accessibilitydemo.jpeg\'" [tooltip]="\'Image\'"></amexio-image>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n\n    \x3c!-- <amexio-row>\n<amexio-column size ="12"\n                [fit]="false"> --\x3e\n    <amexio-card style="display: block; padding-top:50px">\n        <amexio-body>\n            <amexio-layout-grid [layout]="\'LayoutSample\'">\n                <amexio-grid-item [name]="\'gridtable1\'">\n                    <amexio-card [header]="true" [header-align]="\'left\'" [footer]="false" [footer-align]="\'left\'"\n                        [show]="\'showVariable\'" height="height">\n                        <amexio-header>\n                            Panel\n                        </amexio-header>\n                        <amexio-body>\n                            <amexio-datagrid [data-reader]="\'data\'" [height]="\'200\'" [http-url]="\'assets/menuaccessibilityjson/panelaccessibility.json\'"\n                                [http-method]="\'get\'" (rowSelect)="onRowSelect($event)">\n                                <amexio-data-table-column [data-index]="\'Component\'" [data-type]="\'string\'" [hidden]="false"\n                                    [text]="\'Component\'">\n                                </amexio-data-table-column>\n                                <amexio-data-table-column [data-index]="\'Keyboard\'" [data-type]="\'string\'" [hidden]="false"\n                                    [text]="\'Keyboard\'">\n                                </amexio-data-table-column>\n                                <amexio-data-table-column [data-index]="\'Screen-Reader\'" [data-type]="\'string\'"\n                                    [hidden]="false" [text]="\'Screen-Reader\'">\n                                </amexio-data-table-column>\n                            </amexio-datagrid>\n                        </amexio-body>\n                    </amexio-card>\n                </amexio-grid-item>\n                <amexio-grid-item [name]="\'gridtable2\'">\n                    <amexio-card [header]="true" [header-align]="\'left\'" [footer]="false" [footer-align]="\'left\'"\n                        [show]="\'showVariable\'" height="height">\n                        <amexio-header>\n                            App-Navigation\n                        </amexio-header>\n                        <amexio-body>\n                            <amexio-datagrid [data-reader]="\'data\'" [height]="\'200\'" [http-url]="\'assets/menuaccessibilityjson/appnavigationaccesibility.json\'"\n                                [http-method]="\'get\'" (rowSelect)="onRowSelect($event)">\n                                <amexio-data-table-column [data-index]="\'Component\'" [data-type]="\'string\'" [hidden]="false"\n                                    [text]="\'Component\'">\n                                </amexio-data-table-column>\n                                <amexio-data-table-column [data-index]="\'Keyboard\'" [data-type]="\'string\'" [hidden]="false"\n                                    [text]="\'Keyboard\'">\n                                </amexio-data-table-column>\n                                <amexio-data-table-column [data-index]="\'Screen-Reader\'" [data-type]="\'string\'"\n                                    [hidden]="false" [text]="\'Screen-Reader\'">\n                                </amexio-data-table-column>\n                            </amexio-datagrid>\n                        </amexio-body>\n                    </amexio-card>\n                </amexio-grid-item>\n                <amexio-grid-item [name]="\'gridtable3\'">\n                    <amexio-card [header]="true" [header-align]="\'left\'" [footer]="false" [footer-align]="\'left\'"\n                        [show]="\'showVariable\'" height="height">\n                        <amexio-header>\n                            Layout\n                        </amexio-header>\n                        <amexio-body>\n                            <amexio-datagrid [data-reader]="\'data\'" [height]="\'200\'" [http-url]="\'assets/menuaccessibilityjson/layoutaccessibility.json\'"\n                                [http-method]="\'get\'" (rowSelect)="onRowSelect($event)">\n                                <amexio-data-table-column [data-index]="\'Component\'" [data-type]="\'string\'" [hidden]="false"\n                                    [text]="\'Component\'">\n                                </amexio-data-table-column>\n                                <amexio-data-table-column [data-index]="\'Keyboard\'" [data-type]="\'string\'" [hidden]="false"\n                                    [text]="\'Keyboard\'">\n                                </amexio-data-table-column>\n                                <amexio-data-table-column [data-index]="\'Screen-Reader\'" [data-type]="\'string\'"\n                                    [hidden]="false" [text]="\'Screen-Reader\'">\n                                </amexio-data-table-column>\n                            </amexio-datagrid>\n\n                        </amexio-body>\n                    </amexio-card>\n                </amexio-grid-item>\n                <amexio-grid-item [name]="\'gridtable4\'">\n                    <amexio-card [header]="true" [header-align]="\'left\'" [footer]="false" [footer-align]="\'left\'"\n                        [show]="\'showVariable\'" height="height">\n                        <amexio-header>\n                            Form-Actions\n                        </amexio-header>\n                        <amexio-body>\n                            <amexio-datagrid [data-reader]="\'data\'" [height]="\'200\'" [http-url]="\'assets/menuaccessibilityjson/formactionaccessibility.json\'"\n                                [http-method]="\'get\'" (rowSelect)="onRowSelect($event)">\n                                <amexio-data-table-column [data-index]="\'Component\'" [data-type]="\'string\'" [hidden]="false"\n                                    [text]="\'Component\'">\n                                </amexio-data-table-column>\n                                <amexio-data-table-column [data-index]="\'Keyboard\'" [data-type]="\'string\'" [hidden]="false"\n                                    [text]="\'Keyboard\'">\n                                </amexio-data-table-column>\n                                <amexio-data-table-column [data-index]="\'Screen-Reader\'" [data-type]="\'string\'"\n                                    [hidden]="false" [text]="\'Screen-Reader\'">\n                                </amexio-data-table-column>\n                            </amexio-datagrid>\n                        </amexio-body>\n                    </amexio-card>\n                </amexio-grid-item>\n                <amexio-grid-item [name]="\'gridtable5\'">\n                    <amexio-card [header]="true" [header-align]="\'left\'" [footer]="false" [footer-align]="\'left\'"\n                        [show]="\'showVariable\'" height="height">\n                        <amexio-header>\n                            Enterprise\n                        </amexio-header>\n                        <amexio-body>\n                            <amexio-datagrid [data-reader]="\'data\'" [height]="\'200\'" [http-url]="\'assets/menuaccessibilityjson/enterpriseaccessibility.json\'"\n                                [http-method]="\'get\'" (rowSelect)="onRowSelect($event)">\n                                <amexio-data-table-column [data-index]="\'Component\'" [data-type]="\'string\'" [hidden]="false"\n                                    [text]="\'Component\'">\n                                </amexio-data-table-column>\n                                <amexio-data-table-column [data-index]="\'Keyboard\'" [data-type]="\'string\'" [hidden]="false"\n                                    [text]="\'Keyboard\'">\n                                </amexio-data-table-column>\n                                <amexio-data-table-column [data-index]="\'Screen-Reader\'" [data-type]="\'string\'"\n                                    [hidden]="false" [text]="\'Screen-Reader\'">\n                                </amexio-data-table-column>\n                            </amexio-datagrid>\n                        </amexio-body>\n                    </amexio-card>\n                </amexio-grid-item>\n                <amexio-grid-item [name]="\'gridtable6\'">\n                    <amexio-card [header]="true" [header-align]="\'left\'" [footer]="false" [footer-align]="\'left\'"\n                        [show]="\'showVariable\'" height="height">\n                        <amexio-header>\n                            Data\n                        </amexio-header>\n                        <amexio-body>\n                            <amexio-datagrid [data-reader]="\'data\'" [height]="\'200\'" [http-url]="\'assets/menuaccessibilityjson/dataaccessibility.json\'"\n                                [http-method]="\'get\'" (rowSelect)="onRowSelect($event)">\n                                <amexio-data-table-column [data-index]="\'Component\'" [data-type]="\'string\'" [hidden]="false"\n                                    [text]="\'Component\'">\n                                </amexio-data-table-column>\n                                <amexio-data-table-column [data-index]="\'Keyboard\'" [data-type]="\'string\'" [hidden]="false"\n                                    [text]="\'Keyboard\'">\n                                </amexio-data-table-column>\n                                <amexio-data-table-column [data-index]="\'Screen-Reader\'" [data-type]="\'string\'"\n                                    [hidden]="false" [text]="\'Screen-Reader\'">\n                                </amexio-data-table-column>\n                            </amexio-datagrid>\n                        </amexio-body>\n                    </amexio-card>\n                </amexio-grid-item>\n                <amexio-grid-item [name]="\'gridtable7\'">\n                    <amexio-card [header]="true" [header-align]="\'left\'" [footer]="false" [footer-align]="\'left\'"\n                        [show]="\'showVariable\'">\n                        <amexio-header>\n                            Form-Inputs\n                        </amexio-header>\n                        <amexio-body>\n                            <amexio-datagrid [data-reader]="\'data\'" [height]="\'920\'" [http-url]="\'assets/menuaccessibilityjson/forminputaccessibility.json\'"\n                                [http-method]="\'get\'" (rowSelect)="onRowSelect($event)">\n                                <amexio-data-table-column [data-index]="\'Component\'" [data-type]="\'string\'" [hidden]="false"\n                                    [text]="\'Component\'">\n                                </amexio-data-table-column>\n                                <amexio-data-table-column [data-index]="\'Keyboard\'" [data-type]="\'string\'" [hidden]="false"\n                                    [text]="\'Keyboard\'">\n                                </amexio-data-table-column>\n                                <amexio-data-table-column [data-index]="\'Screen-Reader\'" [data-type]="\'string\'"\n                                    [hidden]="false" [text]="\'Screen-Reader\'">\n                                </amexio-data-table-column>\n                            </amexio-datagrid>\n                        </amexio-body>\n                    </amexio-card>\n                </amexio-grid-item>\n            </amexio-layout-grid>\n        </amexio-body>\n    </amexio-card>\n\n    \x3c!-- </amexio-column>\n</amexio-row> --\x3e\n\n\n\n    <amexio-column size="size">\n        <amexio-card>\n            <amexio-body>\n                <a href="https://www.w3schools.com/html/" style="text-decoration: none;"><span style="font-weight:bold">Home:</span>\n                    <span style="text-decoration: none; color:blue"> https://www.w3schools.com/html/</span></a><br>\n                <a href="https://a11yproject.com/patterns" style="text-decoration: none;"><span style="font-weight:bold">Patterns:</span>\n                    <span style="text-decoration: none; color:blue"> https://a11yproject.com/patterns</span></a><br>\n                <a href="https://a11yproject.com/checklist" style="text-decoration: none;"><span style="font-weight:bold">Checklist:</span>\n                    <span style="text-decoration: none; color:blue"> https://a11yproject.com/checklist</span></a><br>\n                <a href="https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh"\n                    style="text-decoration: none;"><span style="font-weight:bold">WAVE\n                        - Chrome Extension:</span>\n                    <span style="text-decoration: none; color:blue">\n                        https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh</span></a><br>\n\n                <p>Overview</p>\n                <p>Evaluate web accessibility within the Chrome browser.</p>\n                <p>\n                    WAVE is a web accessibility evaluation tool developed by WebAIM.org. It provides visual feedback\n                    about the accessibility of your web content by injecting icons and indicators into your page. No\n                    automated tool can tell you if your page is accessible, but WAVE facilitates human evaluation and\n                    educates about accessibility issues. All analysis is done entirely within the Chrome browser\n                    allowing secure valuation of intranet, local, password protected, and other sensitive web pages.\n                </p>\n                <a href="https://www.powermapper.com/products/sortsite/checks/accessibility-checks/" style="text-decoration: none;"><span\n                        style="font-weight:bold">Tools to test the\n                        Site for Accessibility Compliance -Link 1</span>\n                    <span style="text-decoration: none; color:blue">https://www.powermapper.com/products/sortsite/checks/accessibility-checks/</span></a><br>\n                <a href="http://www.508checker.com/" style="text-decoration: none;"><span style="font-weight:bold">Tools\n                        to test the\n                        Site for Accessibility Compliance -Link 2</span>\n                    <span style="text-decoration: none; color:blue">http://www.508checker.com/</span></a><br>\n            </amexio-body>\n\n        </amexio-card>\n    </amexio-column>\n</amexio-row>'},wdij:function(e,a,t){"use strict";t.r(a);var n=t("CcnG"),o=t("ZYCi"),i=t("O4vx"),s=t("gIcY"),r=t("Ip0R"),d=t("d2mR"),l=t("t/Na"),c=function(e,a,t,n){var o,i=arguments.length,s=i<3?a:null===n?n=Object.getOwnPropertyDescriptor(a,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,a,t,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(i<3?o(s):i>3?o(a,t,s):o(a,t))||s);return i>3&&s&&Object.defineProperty(a,t,s),s},m=function(e,a){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,a)},p=function(){function e(e,a,t){this.http=e,this.router=a,this._gridlayoutService=t,this.createLayouts(),this._gridlayoutService.createLayout(this.gridDesktop)}return e.prototype.ngOnInit=function(){},e.prototype.onRowSelect=function(e){this.router.navigate([e.link])},e.prototype.createLayouts=function(){this.gridDesktop=new i.o("LayoutSample",i.p.Desktop).addlayout(["gridtable1","gridtable2","gridtable7"]).addlayout(["gridtable3","gridtable4","gridtable7"]).addlayout(["gridtable5","gridtable6","gridtable7"])},e=c([Object(n.n)({selector:"accesibility-page",template:t("lODo")}),m("design:paramtypes",[l.a,o.c,i.e])],e)}();t.d(a,"AccessibilityDemoModule",function(){return b});var h=function(e,a,t,n){var o,i=arguments.length,s=i<3?a:null===n?n=Object.getOwnPropertyDescriptor(a,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,a,t,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(i<3?o(s):i>3?o(a,t,s):o(a,t))||s);return i>3&&s&&Object.defineProperty(a,t,s),s},b=function(){function e(){}return e=h([Object(n.J)({declarations:[p],imports:[r.b,s.d,l.b,d.a,i.j,o.d.forChild([{path:"",component:p,pathMatch:"full"}])],providers:[]})],e)}()}}]);