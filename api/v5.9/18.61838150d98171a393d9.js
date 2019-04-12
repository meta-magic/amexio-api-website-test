(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{lODo:function(e,a){e.exports='<amexio-row>\n    <amexio-column size="12">\n        <amexio-card [show]="\'false\'" height="height">\n            <amexio-body>\n                <amexio-label [badge]="badge" size="large" [font-color]="\'fontColor\'">\n                    Introduction\n                </amexio-label>\n                <p>\n                    Accessibility of web content requires semantic information about widgets, structures, and\n                    behaviors, in order to allow assistive technologies to convey appropriate information to persons\n                    with disabilities.\n                    This specification provides an ontology of roles, states, and properties that define accessible\n                    user interface elements and can be used to improve the accessibility and interoperability of web\n                    content and applications.\n                    These semantics are designed to allow an author to properly convey user interface behaviors and\n                    structural information to assistive technologies in document-level markup.\n                </p>\n                <p>\n                    The Web Accessibility Initiative\'s Accessible Rich Internet Applications specification (WAI-ARIA,\n                    or just ARIA) is good for bridging areas with accessibility issues that can\'t be managed with\n                    native HTML.\n                    It works by allowing you to specify attributes that modify the way an element is translated into\n                    the accessibility tree.\n                </p>\n                <p>\n                    After a brief introduction section, the guide begins with ARIA implementation patterns for\n                    common widgets that both enumerate expected behaviors.\n                    \x3c!-- >aria-label-ARIA can add extra label and description text that is only exposed to assistive technology APIs.\n                    >aria-controls-ARIA can express semantic relationships between elements that extend the standard parent/child connection, such as a custom scrollbar that controls a specific region. --\x3e\n                </p>\n                <p>\n                    ><b>Roles</b> are element types and will not change with time or user actions. And to provide\n                    normal\n                    processing of the specified element type.\n                </p>\n                <p>\n                    ><b>States and properties</b> are used to declare important attributes of an element that affect\n                    and\n                    describe interaction.\n                    They enable the user agent and operating system to properly handle the element even when the\n                    attributes are dynamically changed by client-side scripts.\n                </p>\n                <p>\n                    ><b>Managing Focus</b> to be managed by the container using the\n                    aria-activedescendant attribute on the managing container element, or by the container managing the\n                    tabindex of its child elements and setting focus on the appropriate child.When active descendant\n                    has\n                    focus, the user may navigate through the container by pressing additional\n                    keys, such as the arrow keys, to change the currently active descendant. Any additional press of\n                    the main navigation key (generally the TAB key) will move out of the container to the next widget.\n                </p>\n                <p><b>WHAT DOES ARIA DO?</b>\n                    ARIA can modify existing element semantics or add semantics to elements where no native semantics\n                    exist. It can also express semantic patterns that don\'t exist at all in HTML, like a menu or a tab\n                    panel. Often, ARIA lets us create widget-type elements that wouldn\'t be possible with plain HTML.\n                </p>\n                <ul>\n                    <li>\n                        For example, ARIA can add extra label and description text that is only exposed to\n                        assistive technology APIs.\n                    </li>\n                    <li>\n                        ARIA can express semantic relationships between elements that extend the standard parent/child\n                        connection, such as a custom scrollbar that controls a specific region.\n                    </li>\n                </ul>\n                <amexio-box border-color="blue" border="borderPosition" [padding]="true" [closable]="false" align="left">\n                    <b>Example of Aria CheckBox</b><br>\n                    <span>\n                        <</span> <span>li&nbsp;\n                    </span>\n                    <span>tabindex</span>\n                    <span>="0"&nbsp;&nbsp;</span>\n                    <span>class="checkbox"&nbsp;&nbsp;</span>\n                    <span>role="checkbox"&nbsp;&nbsp;</span>\n                    <span>checked &nbsp;&nbsp; </span>\n                    <span>aria-checked="true"</span>\n                    <span>></span><br>\n                    <span>\n                        <</span> <span>/\n                    </span>\n                    <span>li</span>\n                    <span>></span>\n                    \x3c!--  checked aria-checked="true"> --\x3e\n                    \x3c!-- Receive promotional offers --\x3e\n                    \x3c!-- </li> --\x3e\n\n                </amexio-box><br>\n                <amexio-box border-color="blue" border="borderPosition" [padding]="true" [closable]="false" align="left">\n                    <b>Example of Aria Button</b><br>\n                    <span>\n                        <</span> <span>div&nbsp;\n                    </span>\n                    <span>tabindex</span>\n                    <span>="0"&nbsp;&nbsp;</span>\n                    <span>id="savechanges"&nbsp;&nbsp;</span>\n                    <span>role="button"&nbsp;&nbsp;</span>\n                    <span>pressed &nbsp;&nbsp; </span>\n                    <span>aria-pressed="false"</span>\n                    <span>></span><br>\n                    <span>&nbsp;&nbsp;Save</span><br>\n                    <span>\n                        <</span> <span>/\n                    </span>\n                    <span>div</span>\n                    <span>></span>\n                    \x3c!--  checked aria-checked="true"> --\x3e\n                    \x3c!-- Receive promotional offers --\x3e\n                    \x3c!-- </li> --\x3e\n\n                </amexio-box>\n\n\n\n                <p>\n                    Figure illustrates the relationship between user agents (e.g., browsers),\n                    accessibility APIs, and assistive technologies. It describes the "contract" provided by the user\n                    agent to assistive technologies,which includes typical accessibility information found in the\n                    accessibility API for many of our\n                    accessible platforms for GUIs (role, state, selection, event notification,\n                    relationship information, and descriptions). The DOM, usually HTML, acts as the data model and view\n                    in a typical model-view-controller relationship, and JavaScript acts as the controller by\n                    manipulating the style and content of the displayed data.\n                    The user agent conveys relevant information to the operating system\'s accessibility API,\n                    which can be used by any assistive technologies, such as screen readers.\n                </p>\n                <amexio-image width="100%" [path]="\'assets/images/accessibilitydemo.jpeg\'" [tooltip]="\'Image\'"></amexio-image>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n</amexio-row>\n<amexio-row>\n\n    <amexio-column size="4" fit="true">\n        <amexio-card [header]="true" [header-align]="\'left\'" [footer]="false" [footer-align]="\'left\'" [show]="\'showVariable\'"\n            height="height" (rightClick)="functionName($event)" (initiated)="functionName($event)" (ready)="functionName($event)"\n            (destroy)="functionName($event)">\n            <amexio-header>\n                Panel\n            </amexio-header>\n            <amexio-body>\n                <amexio-datagrid [data-reader]="\'data\'" [height]="\'200\'" [http-url]="\'../assets/menuaccessibilityjson/panelaccessibility.json\'"\n                    [http-method]="\'get\'" (selectedRowData)="onRowSelect($event)">\n                    <amexio-data-table-column [data-index]="\'Component\'" [data-type]="\'string\'" [hidden]="false" [text]="\'Component\'">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]="\'Keyboard\'" [data-type]="\'string\'" [hidden]="false" [text]="\'Keyboard\'">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]="\'Screen-Reader\'" [data-type]="\'string\'" [hidden]="false"\n                        [text]="\'Screen-Reader\'">\n                    </amexio-data-table-column>\n                </amexio-datagrid>\n            </amexio-body>\n            <amexio-action>\n                footer\n            </amexio-action>\n        </amexio-card>\n    </amexio-column>\n    <amexio-column size="4" fit="false">\n        <amexio-card [header]="true" [header-align]="\'left\'" [footer]="false" [footer-align]="\'left\'" [show]="\'showVariable\'"\n            height="height" (rightClick)="functionName($event)" (initiated)="functionName($event)" (ready)="functionName($event)"\n            (destroy)="functionName($event)">\n            <amexio-header>\n                App-Navigation\n            </amexio-header>\n            <amexio-body>\n                <amexio-datagrid [data-reader]="\'data\'" [height]="\'200\'" [http-url]="\'../assets/menuaccessibilityjson/appnavigationaccesibility.json\'"\n                    [http-method]="\'get\'" (selectedRowData)="onRowSelect($event)">\n                    <amexio-data-table-column [data-index]="\'Component\'" [data-type]="\'string\'" [hidden]="false" [text]="\'Component\'">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]="\'Keyboard\'" [data-type]="\'string\'" [hidden]="false" [text]="\'Keyboard\'">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]="\'Screen-Reader\'" [data-type]="\'string\'" [hidden]="false"\n                        [text]="\'Screen-Reader\'">\n                    </amexio-data-table-column>\n                </amexio-datagrid>\n            </amexio-body>\n            <amexio-action>\n                footer\n            </amexio-action>\n        </amexio-card>\n    </amexio-column>\n    <amexio-column size="4" fit="true">\n        <amexio-card [header]="true" [header-align]="\'left\'" [footer]="false" [footer-align]="\'left\'" [show]="\'showVariable\'"\n            height="height" (rightClick)="functionName($event)" (initiated)="functionName($event)" (ready)="functionName($event)"\n            (destroy)="functionName($event)">\n            <amexio-header>\n                Form-Inputs\n            </amexio-header>\n            <amexio-body>\n                <amexio-datagrid [data-reader]="\'data\'" [height]="\'200\'" [http-url]="\'../assets/menuaccessibilityjson/forminputaccessibility.json\'"\n                    [http-method]="\'get\'" (selectedRowData)="onRowSelect($event)">\n                    <amexio-data-table-column [data-index]="\'Component\'" [data-type]="\'string\'" [hidden]="false" [text]="\'Component\'">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]="\'Keyboard\'" [data-type]="\'string\'" [hidden]="false" [text]="\'Keyboard\'">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]="\'Screen-Reader\'" [data-type]="\'string\'" [hidden]="false"\n                        [text]="\'Screen-Reader\'">\n                    </amexio-data-table-column>\n                </amexio-datagrid>\n            </amexio-body>\n            <amexio-action>\n                footer\n            </amexio-action>\n        </amexio-card>\n    </amexio-column>\n\n</amexio-row>\n<amexio-row>\n    <amexio-column size="4" fit="true">\n        <amexio-card [header]="true" [header-align]="\'left\'" [footer]="false" [footer-align]="\'left\'" [show]="\'showVariable\'"\n            height="height" (rightClick)="functionName($event)" (initiated)="functionName($event)" (ready)="functionName($event)"\n            (destroy)="functionName($event)">\n            <amexio-header>\n                Layout\n            </amexio-header>\n            <amexio-body>\n                <amexio-datagrid [data-reader]="\'data\'" [height]="\'200\'" [http-url]="\'../assets/menuaccessibilityjson/layoutaccessibility.json\'"\n                    [http-method]="\'get\'" (selectedRowData)="onRowSelect($event)">\n                    <amexio-data-table-column [data-index]="\'Component\'" [data-type]="\'string\'" [hidden]="false" [text]="\'Component\'">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]="\'Keyboard\'" [data-type]="\'string\'" [hidden]="false" [text]="\'Keyboard\'">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]="\'Screen-Reader\'" [data-type]="\'string\'" [hidden]="false"\n                        [text]="\'Screen-Reader\'">\n                    </amexio-data-table-column>\n                </amexio-datagrid>\n            </amexio-body>\n            <amexio-action>\n                footer\n            </amexio-action>\n        </amexio-card>\n    </amexio-column>\n    <amexio-column size="4" fit="false">\n        <amexio-card [header]="true" [header-align]="\'left\'" [footer]="false" [footer-align]="\'left\'" [show]="\'showVariable\'"\n            height="height" (rightClick)="functionName($event)" (initiated)="functionName($event)" (ready)="functionName($event)"\n            (destroy)="functionName($event)">\n            <amexio-header>\n                Form-Actions\n            </amexio-header>\n            <amexio-body>\n                <amexio-datagrid [data-reader]="\'data\'" [height]="\'200\'" [http-url]="\'../assets/menuaccessibilityjson/formactionaccessibility.json\'"\n                    [http-method]="\'get\'" (selectedRowData)="onRowSelect($event)">\n                    <amexio-data-table-column [data-index]="\'Component\'" [data-type]="\'string\'" [hidden]="false" [text]="\'Component\'">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]="\'Keyboard\'" [data-type]="\'string\'" [hidden]="false" [text]="\'Keyboard\'">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]="\'Screen-Reader\'" [data-type]="\'string\'" [hidden]="false"\n                        [text]="\'Screen-Reader\'">\n                    </amexio-data-table-column>\n                </amexio-datagrid>\n            </amexio-body>\n            <amexio-action>\n                footer\n            </amexio-action>\n        </amexio-card>\n    </amexio-column>\n    <amexio-column size="4" fit="true">\n        <amexio-card [header]="true" [header-align]="\'left\'" [footer]="false" [footer-align]="\'left\'" [show]="\'showVariable\'"\n            height="height" (rightClick)="functionName($event)" (initiated)="functionName($event)" (ready)="functionName($event)"\n            (destroy)="functionName($event)">\n            <amexio-header>\n                Form-Inputs\n            </amexio-header>\n            <amexio-body>\n                <amexio-datagrid [data-reader]="\'data\'" [height]="\'200\'" [http-url]="\'../assets/menuaccessibilityjson/forminput2accessibility.json\'"\n                    [http-method]="\'get\'" (selectedRowData)="onRowSelect($event)">\n                    <amexio-data-table-column [data-index]="\'Component\'" [data-type]="\'string\'" [hidden]="false" [text]="\'Component\'">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]="\'Keyboard\'" [data-type]="\'string\'" [hidden]="false" [text]="\'Keyboard\'">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]="\'Screen-Reader\'" [data-type]="\'string\'" [hidden]="false"\n                        [text]="\'Screen-Reader\'">\n                    </amexio-data-table-column>\n                </amexio-datagrid>\n            </amexio-body>\n            <amexio-action>\n                footer\n            </amexio-action>\n        </amexio-card>\n    </amexio-column>\n\n\n</amexio-row>\n<amexio-row>\n    <amexio-column size="4" fit="false">\n        <amexio-card [header]="true" [header-align]="\'left\'" [footer]="false" [footer-align]="\'left\'" [show]="\'showVariable\'"\n            height="height" (rightClick)="functionName($event)" (initiated)="functionName($event)" (ready)="functionName($event)"\n            (destroy)="functionName($event)">\n            <amexio-header>\n                Enterprise\n            </amexio-header>\n            <amexio-body>\n                <amexio-datagrid [data-reader]="\'data\'" [height]="\'200\'" [http-url]="\'../assets/menuaccessibilityjson/enterpriseaccessibility.json\'"\n                    [http-method]="\'get\'" (selectedRowData)="onRowSelect($event)">\n                    <amexio-data-table-column [data-index]="\'Component\'" [data-type]="\'string\'" [hidden]="false" [text]="\'Component\'">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]="\'Keyboard\'" [data-type]="\'string\'" [hidden]="false" [text]="\'Keyboard\'">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]="\'Screen-Reader\'" [data-type]="\'string\'" [hidden]="false"\n                        [text]="\'Screen-Reader\'">\n                    </amexio-data-table-column>\n                </amexio-datagrid>\n            </amexio-body>\n            <amexio-action>\n                footer\n            </amexio-action>\n        </amexio-card>\n    </amexio-column>\n    <amexio-column size="4" fit="false">\n        <amexio-card [header]="true" [header-align]="\'left\'" [footer]="false" [footer-align]="\'left\'" [show]="\'showVariable\'"\n            height="height" (rightClick)="functionName($event)" (initiated)="functionName($event)" (ready)="functionName($event)"\n            (destroy)="functionName($event)">\n            <amexio-header>\n                Data\n            </amexio-header>\n            <amexio-body>\n                <amexio-datagrid [data-reader]="\'data\'" [height]="\'200\'" [http-url]="\'../assets/menuaccessibilityjson/dataaccessibility.json\'"\n                    [http-method]="\'get\'" (selectedRowData)="onRowSelect($event)">\n                    <amexio-data-table-column [data-index]="\'Component\'" [data-type]="\'string\'" [hidden]="false" [text]="\'Component\'">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]="\'Keyboard\'" [data-type]="\'string\'" [hidden]="false" [text]="\'Keyboard\'">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]="\'Screen-Reader\'" [data-type]="\'string\'" [hidden]="false"\n                        [text]="\'Screen-Reader\'">\n                    </amexio-data-table-column>\n                </amexio-datagrid>\n            </amexio-body>\n            <amexio-action>\n                footer\n            </amexio-action>\n        </amexio-card>\n    </amexio-column>\n    <amexio-column size="4" fit="true">\n        <amexio-card [header]="true" [header-align]="\'left\'" [footer]="false" [footer-align]="\'left\'" [show]="\'showVariable\'"\n            height="height" (rightClick)="functionName($event)" (initiated)="functionName($event)" (ready)="functionName($event)"\n            (destroy)="functionName($event)">\n            <amexio-header>\n                Form-Inputs\n            </amexio-header>\n            <amexio-body>\n                <amexio-datagrid [data-reader]="\'data\'" [height]="\'200\'" [http-url]="\'../assets/menuaccessibilityjson/forminput3accessibility.json\'"\n                    [http-method]="\'get\'" (selectedRowData)="onRowSelect($event)">\n                    <amexio-data-table-column [data-index]="\'Component\'" [data-type]="\'string\'" [hidden]="false" [text]="\'Component\'">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]="\'Keyboard\'" [data-type]="\'string\'" [hidden]="false" [text]="\'Keyboard\'">\n                    </amexio-data-table-column>\n                    <amexio-data-table-column [data-index]="\'Screen-Reader\'" [data-type]="\'string\'" [hidden]="false"\n                        [text]="\'Screen-Reader\'">\n                    </amexio-data-table-column>\n                </amexio-datagrid>\n            </amexio-body>\n            <amexio-action>\n                footer\n            </amexio-action>\n        </amexio-card>\n    </amexio-column>\n</amexio-row>\n<amexio-row>\n    <amexio-column size="size">\n        <amexio-card height="height">\n            <amexio-header>\n                header\n            </amexio-header>\n            <amexio-body>\n                <a href="https://www.w3schools.com/html/" style="text-decoration: none;"><span style="font-weight:bold">Home:</span>\n                    <span style="text-decoration: none; color:blue"> https://www.w3schools.com/html/</span></a><br>\n                <a href="https://a11yproject.com/patterns" style="text-decoration: none;"><span style="font-weight:bold">Patterns:</span>\n                    <span style="text-decoration: none; color:blue"> https://a11yproject.com/patterns</span></a><br>\n                <a href="https://a11yproject.com/checklist" style="text-decoration: none;"><span style="font-weight:bold">Checklist:</span>\n                    <span style="text-decoration: none; color:blue"> https://a11yproject.com/checklist</span></a><br>\n                <a href="https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh"\n                    style="text-decoration: none;"><span style="font-weight:bold">WAVE\n                        - Chrome Extension:</span>\n                    <span style="text-decoration: none; color:blue">\n                        https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh</span></a><br>\n\n                <p>Overview</p>\n                <p>Evaluate web accessibility within the Chrome browser.</p>\n                <p>\n                    WAVE is a web accessibility evaluation tool developed by WebAIM.org. It provides visual feedback\n                    about the accessibility of your web content by injecting icons and indicators into your page. No\n                    automated tool can tell you if your page is accessible, but WAVE facilitates human evaluation and\n                    educates about accessibility issues. All analysis is done entirely within the Chrome browser\n                    allowing secure valuation of intranet, local, password protected, and other sensitive web pages.\n                </p>\n                <a href="https://www.powermapper.com/products/sortsite/checks/accessibility-checks/" style="text-decoration: none;"><span\n                        style="font-weight:bold">Tools to test the\n                        Site for Accessibility Compliance -Link 1</span>\n                    <span style="text-decoration: none; color:blue">https://www.powermapper.com/products/sortsite/checks/accessibility-checks/</span></a><br>\n                <a href="http://www.508checker.com/" style="text-decoration: none;"><span style="font-weight:bold">Tools\n                        to test the\n                        Site for Accessibility Compliance -Link 2</span>\n                    <span style="text-decoration: none; color:blue">http://www.508checker.com/</span></a><br>\n            </amexio-body>\n\n        </amexio-card>\n    </amexio-column>\n</amexio-row>'},wdij:function(e,a,n){"use strict";n.r(a);var t=n("CcnG"),o=n("ZYCi"),i=n("O4vx"),s=n("gIcY"),d=n("Ip0R"),r=n("d2mR"),c=n("t/Na"),l=function(e,a,n,t){var o,i=arguments.length,s=i<3?a:null===t?t=Object.getOwnPropertyDescriptor(a,n):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,a,n,t);else for(var d=e.length-1;d>=0;d--)(o=e[d])&&(s=(i<3?o(s):i>3?o(a,n,s):o(a,n))||s);return i>3&&s&&Object.defineProperty(a,n,s),s},m=function(e,a){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,a)},h=function(){function e(e){this.http=e}return e.prototype.ngOnInit=function(){},e=l([Object(t.n)({selector:"accesibility-page",template:n("lODo")}),m("design:paramtypes",[c.a])],e)}();n.d(a,"AccessibilityDemoModule",function(){return x});var p=function(e,a,n,t){var o,i=arguments.length,s=i<3?a:null===t?t=Object.getOwnPropertyDescriptor(a,n):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,a,n,t);else for(var d=e.length-1;d>=0;d--)(o=e[d])&&(s=(i<3?o(s):i>3?o(a,n,s):o(a,n))||s);return i>3&&s&&Object.defineProperty(a,n,s),s},x=function(){function e(){}return e=p([Object(t.J)({declarations:[h],imports:[d.b,s.d,c.b,r.a,i.i,o.d.forChild([{path:"",component:h,pathMatch:"full"}])],providers:[]})],e)}()}}]);