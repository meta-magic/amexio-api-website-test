(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"0M9v":function(e,t){e.exports='   \n     <amexio-api-structure [custom-com-data]="customSourceData" [url]="\'assets/componentjson/panels/panel.json\'">\n      <amexio-api-demo>\n    <amexio-row>\n    <amexio-column [size]="4">\n    </amexio-column>\n      <amexio-column [size]="4">\n        <amexio-panel [border]="true" [context-menu]="rightclickdata" [header]="true"  title="Custom Header" expanded="true" >\n          <amexio-panel-header>\n            <amexio-image [icon-class]="\'fa fa-refresh fa-fw\'" (onClick)="refreshData()">\n            </amexio-image>\n          </amexio-panel-header>\n          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n        </amexio-panel>\n        <amexio-dialogue [show-dialogue]="refreshDialogue" [title]="\'refresh\'" [message]="\'Data refresh successfully.\'"\n                        [primary-action-label]="\'ok\'" [message-type]="\'warning\'" [type]="\'alert\'">\n        </amexio-dialogue>\n      </amexio-column>\n      <amexio-column [size]="4">\n      </amexio-column>\n    </amexio-row>\n    </amexio-api-demo>\n    </amexio-api-structure>\n    '},"1Bzz":function(e,t){e.exports='   \n    <amexio-api-structure [custom-com-data]="customSourceData" [url]="\'assets/componentjson/data/tree.json\'">\n      <amexio-api-demo>\n   <amexio-row>\n      <amexio-column size="12">\n        <amexio-card [header]="true">\n          <amexio-header>\n              Tree With Context Menu \n          </amexio-header>\n          <amexio-body>\n            <amexio-treeview [data-reader]="\'data\'" [data]="treeLocalData" [context-menu]="rightclickdata">\n            </amexio-treeview>\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n    </amexio-api-demo>\n    </amexio-api-structure>'},"9l7y":function(e,t){e.exports='   \n   <amexio-api-structure [custom-com-data]="customSourceData" [url]="\'assets/componentjson/data/listbox.json\'">\n    <amexio-api-demo>\n   \n   <amexio-row>\n    <amexio-column size="12">\n      <amexio-card [header]="true">\n        <amexio-header>\n           List Box With Context Menu\n        </amexio-header>\n        <amexio-body>\n          <amexio-listbox [enable-checkbox]="true" [height]="400"\n                          [header]="\'Contacts\'" [search-placeholder]="\'Search Contacts\'"\n                          [data]="localData" [filter]="true"\n                          [data-reader]="\'response.data\'" [context-menu]="contextMenuData"\n                          [display-field]="\'name_official\'" (selectedRows)="getSelectedData($event)">\n          </amexio-listbox>\n        </amexio-body>\n      </amexio-card>\n    </amexio-column>\n  </amexio-row>\n\n  </amexio-api-demo>\n  </amexio-api-structure>\n\n     \n'},HjLU:function(e,t){e.exports='    \n      <amexio-api-structure [custom-com-data]="customSourceData" [url]="\'assets/componentjson/panels/tab.json\'">\n        <amexio-api-accessible>\n                <amexio-box border-color="blue" border="left" [padding]="true" align="left">\n                  <p>The Tab is WAI ARIA-accessible through the Tab key.This also follows the best practices for implementing the\n                    keyboard navigation for its\n                    component role and is tested against the popular screen readers.</p>\n                  <p>Role: Tablist - Indicates that the element serves as a container for a set of tabs.\n                    The aria-labelledby attribute is goverend by dynamic label of step.\n                  </p>\n                  <p>\n                    Role: Tab (Button): Indicates the element serves as a tab control.When focused, is automatically activated,\n                    causing its associated tabpanel to be displayed.\n                  </p>\n                  <p>\n                  </p>\n                </amexio-box>\n              </amexio-api-accessible>\n        <amexio-api-demo>\n    \n    <amexio-card [header]="true" [footer]="false" [footer-align]="\'right\'">\n            <amexio-header>\n                Tab layout with default context menu\n            </amexio-header>\n            <amexio-body>\n                <amexio-tab-view [tab-position]="\'top\'" [default-context-menu]="true">\n                    <amexio-tab title="Person" [active]="true" [closable]="true">\n                        Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                        Lorem Ipsum has been the industry\'s standard\n                        dummy text ever since the 1500s, when an unknown printer took a galley of type and\n                        scrambled it to make a\n                        type specimen book.\n                    </amexio-tab>\n                    <amexio-tab title="Work">\n                        Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit\n                        nisi. Nunc sit amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non\n                        eleifend nisi. Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                    <amexio-tab title="Education" [closable]="true">\n                        Education Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit\n                        nisi. Nunc sit amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non\n                        eleifend nisi. Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                </amexio-tab-view>\n            </amexio-body>\n        </amexio-card>\n        <br>\n        <amexio-card [header]="true" [footer]="false" [footer-align]="\'right\'">\n            <amexio-header>\n                Tab layout with custom context menu\n            </amexio-header>\n            <amexio-body>\n                <amexio-tab-view [context-menu]="rightclickdata">\n                    <amexio-tab title="Person" [active]="true">\n                        Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                        Lorem Ipsum has been the industry\'s standard\n                        dummy text ever since the 1500s, when an unknown printer took a galley of type and\n                        scrambled it to make a\n                        type specimen book.\n                    </amexio-tab>\n                    <amexio-tab title="Work">\n                        Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit\n                        nisi. Nunc sit amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non\n                        eleifend nisi. Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                    <amexio-tab title="Education">\n                        Education Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit\n                        nisi. Nunc sit amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non\n                        eleifend nisi. Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                    <amexio-tab title="Hobbies">\n                        Hobbies Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit\n                        nisi. Nunc sit amet aliquet risus. Aenean\n                        placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non\n                        eleifend nisi. Phasellus\n                        tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n                    </amexio-tab>\n                </amexio-tab-view>\n            </amexio-body>\n        </amexio-card>'},YM45:function(e,t){e.exports='<amexio-api-structure [custom-com-data]="customSourceData" [url]="\'assets/componentjson/panels/window.json\'">\n    <amexio-api-demo>\n\n\n        <amexio-card [header]="true">\n            <amexio-header> Window With Context-Menu </amexio-header>\n            <amexio-body>\n                <amexio-row>\n                    <amexio-column [size]="4"></amexio-column>\n                    <amexio-column [size]="4">\n                        <amexio-button type="success" (onClick)="toggleBasicWindow(\'material\')" label="Context-Menu Window"></amexio-button>\n                        <amexio-window [body-height]="40" [context-menu]="rightclickdata" [(show)]="showBasicWindowMaterial"\n                            [close-on-escape]="true" [material-design]="true" [footer]="true" [vertical-position]="\'top\'"\n                            [horizontal-position]="\'center\'">\n                            <amexio-header>\n                                Employee Form\n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-row>\n                                    <amexio-column [size]="6">\n                                        <amexio-text-input [field-label]="\'Name\'" name="country" [place-holder]="\'Enter name\'"\n                                            [enable-popover]="true" [icon-feedback]="true" [allow-blank]="false"\n                                            [error-msg]="\'Please enter name\'" [min-length]="3" [max-length]="15"\n                                            [min-error-msg]="\'Name should be minimum 3 characters\'" [max-error-msg]="\'Name should be less than 15 characters\'">\n                                        </amexio-text-input>\n                                    </amexio-column>\n                                    <amexio-column [size]="6">\n                                        <amexio-text-input [field-label]="\'Surname\'" name="name" [place-holder]="\'Enter surname\'"\n                                            [enable-popover]="true" [icon-feedback]="true" [allow-blank]="false"\n                                            [error-msg]="\'Please enter Surname\'" [min-length]="3" [max-length]="15"\n                                            [min-error-msg]="\'Surname should be minimum 3 characters\'" [max-error-msg]="\'Surname should be less than 15 characters\'">\n                                        </amexio-text-input>\n                                    </amexio-column>\n                                </amexio-row>\n\n                                <amexio-row>\n                                    <amexio-column [size]="6">\n                                        <amexio-text-input [field-label]="\'Description\'" name="country" [place-holder]="\'Description\'"\n                                            [enable-popover]="true" [icon-feedback]="true" [allow-blank]="false"\n                                            [error-msg]="\'Please enter name\'" [min-length]="3" [max-length]="15"\n                                            [min-error-msg]="\'Name should be minimum 3 characters\'" [max-error-msg]="\'Name should be less than 15 characters\'">\n                                        </amexio-text-input>\n                                    </amexio-column>\n                                    <amexio-column [size]="6">\n                                        <amexio-text-input [field-label]="\'Hobbies\'" name="name" [place-holder]="\'Hobbies\'"\n                                            [enable-popover]="true" [icon-feedback]="true" [allow-blank]="false"\n                                            [error-msg]="\'Please enter Surname\'" [min-length]="3" [max-length]="15"\n                                            [min-error-msg]="\'Surname should be minimum 3 characters\'" [max-error-msg]="\'Surname should be less than 15 characters\'">\n                                        </amexio-text-input>\n                                    </amexio-column>\n                                </amexio-row>\n\n                                <amexio-row>\n                                    <amexio-column [size]="6">\n\n                                        <amexio-textarea-input [field-label]="\'Address\'" name="Address" [place-holder]="\'Enter address\'"\n                                            [error-msg]="\'Please enter address\'" [icon-feedback]="true" [rows]="\'1\'"\n                                            [columns]="\'2\'" [allow-blank]="false" [enable-popover]="true">\n                                        </amexio-textarea-input>\n                                    </amexio-column>\n                                </amexio-row>\n                                <amexio-row>\n                                    <amexio-column [size]="6">\n                                        <amexio-text-input [field-label]="\'Phone\'" name="country" [place-holder]="\'Phone\'"\n                                            [enable-popover]="true" [icon-feedback]="true" [allow-blank]="false"\n                                            [error-msg]="\'Please enter name\'" [min-length]="3" [max-length]="15"\n                                            [min-error-msg]="\'Name should be minimum 3 characters\'" [max-error-msg]="\'Name should be less than 15 characters\'">\n                                        </amexio-text-input>\n                                    </amexio-column>\n                                    <amexio-column [size]="6">\n                                        <amexio-text-input [field-label]="\'Email\'" name="name" [place-holder]="\'Email\'"\n                                            [enable-popover]="true" [icon-feedback]="true" [allow-blank]="false"\n                                            [error-msg]="\'Please enter Surname\'" [min-length]="3" [max-length]="15"\n                                            [min-error-msg]="\'Surname should be minimum 3 characters\'" [max-error-msg]="\'Surname should be less than 15 characters\'">\n                                        </amexio-text-input>\n                                    </amexio-column>\n                                </amexio-row>\n\n                            </amexio-body>\n                            <amexio-action>\n                                <amexio-button [type]="\'default\'" (onClick)="showBasicWindowMaterial = false" label="Cancel"></amexio-button>\n                                &nbsp;&nbsp;&nbsp;\n                                <amexio-button [type]="\'theme-color\'" (onClick)="showBasicWindowMaterial = false" label="Save"></amexio-button>\n                            </amexio-action>\n\n                        </amexio-window>\n\n                    </amexio-column>\n                    <amexio-column [size]="4"></amexio-column>\n                </amexio-row>\n            </amexio-body>\n        </amexio-card>\n\n    </amexio-api-demo>\n</amexio-api-structure>'},"j+OB":function(e,t){e.exports='   \n   \n   <amexio-api-structure [custom-com-data]="customSourceData" [url]="\'assets/componentjson/data/grid.json\'">\n    <amexio-api-demo>\n       \n   <amexio-row>\n      <amexio-column size="12">\n        <amexio-card [header]="true">\n          <amexio-header>\n             Data Grid with Context Menu \n          </amexio-header>\n          <amexio-body>\n            <amexio-datagrid\n              [enable-column-filter]="true" [context-menu]="contextMenuRowData" [height]="200" title="Country Grid" [enable-checkbox]="false"  [http-method]="\'get\'" [http-url]="\'assets/data/componentdata/country.json\'" [data-reader]="\'data\'"  [page-size] = "10">\n              <amexio-data-table-column [data-index]="\'countryName\'" \n                                        [data-type]="\'string\'" \n                                        [context-menu]="contextMenuColData"\n                                        [hidden]="false" [text]="\'Name\'">\n              </amexio-data-table-column>\n              <amexio-data-table-column [data-index]="\'countryCode1\'" [data-type]="\'string\'" [hidden]="false" [text]="\'Code\'"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]="\'currencyName\'" [data-type]="\'string\'" [hidden]="false" [text]="\'Currency\'"></amexio-data-table-column>\n            </amexio-datagrid>\n         \x3c!--   <p><b>Selected row data : </b>{{selectedData | json}}</p>--\x3e\n          </amexio-body>\n        </amexio-card>\n      </amexio-column>\n    </amexio-row>\n\n    </amexio-api-demo>\n    </amexio-api-structure>'},rGF9:function(e,t,a){"use strict";a.r(t);var o=a("CcnG"),n=a("O4vx"),i=a("gIcY"),r=a("Ip0R"),s=a("t/Na"),c=a("d2mR"),m=a("f4zW"),l=function(e,t,a,o){var n,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,a):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(i<3?n(r):i>3?n(t,a,r):n(t,a))||r);return i>3&&r&&Object.defineProperty(t,a,r),r},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(){function e(e){this.http=e,this.customSourceData=new m.a,this.rightclickdata=[{text:"Add New",icon:"fa fa-plus",disabled:!0},{text:"Edit",icon:"",seperator:!0},{text:"Send data in email",icon:""}],this.flag=!0}return e.prototype.ngOnInit=function(){this.createCustomSourceData()},e.prototype.createCustomSourceData=function(){this.customSourceData.title="Card with Context Menu",this.customSourceData.description="A Simple Card which renders card based on title, body and actions that user configures with context menu option. (Right Click functionality).",this.customSourceData.sourceMetadata.htmlUrl="layout/card/carddemo/layout.html",this.customSourceData.sourceMetadata.tsUrl="layout/card/carddemo/layout.text",this.customSourceData.liveMetadata.stackblitzUrl="https://stackblitz.com/edit/amexio-card-contextmenu-demo?embed=1&file=src/app/contextualmenu/card/card.demo.component.html&view=editor"},e.prototype.toggle=function(){this.flag=!this.flag},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e=l([Object(o.n)({selector:"contextmenu-card-form",template:a("sL2j")}),u("design:paramtypes",[s.a])],e)}(),p=function(e,t,a,o){var n,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,a):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(i<3?n(r):i>3?n(t,a,r):n(t,a))||r);return i>3&&r&&Object.defineProperty(t,a,r),r},h=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},x=function(){function e(e){this.http=e,this.customSourceData=new m.a,this.contextMenuColData=[{text:"Add State",icon:"fa fa-plus",disabled:!0},{text:"Edit",icon:"",seperator:!0},{text:"Delete",icon:""}],this.contextMenuRowData=[{text:"Reload",icon:"fa fa-refresh",disabled:!1,seperator:!1},{text:"Save",icon:"fa fa-save",seperator:!1},{text:"Delete",icon:"fa fa-close"}]}return e.prototype.ngOnInit=function(){this.createCustomSourceData()},e.prototype.createCustomSourceData=function(){this.customSourceData.title="Data Grid with Context Menu",this.customSourceData.description="Data grid component to render large amount of data-set with various options like sorting in ascending or descending order, client-side pagination, column hide/unhide, single/multi selection, user define template for rendering for column header and column data, displaying summation of numeric column and with context menu(right-click mouse operation).",this.customSourceData.sourceMetadata.htmlUrl="data/contextmenugrid/contextmenugrid.html",this.customSourceData.sourceMetadata.tsUrl="data/contextmenugrid/contextmenugrid.text",this.customSourceData.sourceMetadata.datasourceUrl="assets/data/componentdata/country.json",this.customSourceData.liveMetadata.stackblitzUrl="https://stackblitz.com/edit/amexio-grid-contextmenu?embed=1&file=src/app/contextualmenu/grid/grid.demo.component.html"},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e=p([Object(o.n)({selector:"grid-context-menu-demo",template:a("j+OB")}),h("design:paramtypes",[s.a])],e)}(),f=function(e,t,a,o){var n,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,a):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(i<3?n(r):i>3?n(t,a,r):n(t,a))||r);return i>3&&r&&Object.defineProperty(t,a,r),r},b=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},g=function(){function e(e){this.http=e,this.customSourceData=new m.a,this.contextMenuData=[{text:"Add New",icon:"fa fa-arrows",disabled:!0},{text:"Edit",icon:"",seperator:!0},{text:"Send data in email",icon:""}],this.localData={response:{success:!0,message:"Fetching  Data  Request Succeeded: Profile",data:[{name:"Buck Kulkarni",name_official:"Buck Kulkarni",profile:"buck.jpg",email:"XYZ@metamagic.in"},{name:"Araf Karsh Hamid",name_official:"Araf Karsh Hamid",profile:"karsh.jpg",email:"XYZ@metamagic.in"},{name:"ketan Gote",name_official:"Ketan Gote",profile:"ketan.jpg",email:"XYZ@metamagic.in"},{name:"Dattaram Gawas",name_official:"Dattaram Gawas",profile:"dats.jpg",email:"XYZ@metamagic.in"},{name:"Sagar Jadhav",name_official:"Sagar Jadhav",profile:"sagar.jpg",email:"XYZ@metamagic.in"},{name:"Rashmi Thakkar",name_official:"Rashmi Thakkar",profile:"rashmi.jpg",email:"XYZ@metamagic.in"},{name:"Deepali Arvind",name_official:"Deepali Arvind",profile:"dipali.jpg",email:"XYZ@metamagic.in"},{name:"Ashwini Agre",name_official:"Ashwini Agre",profile:"ashwini.jpg",email:"XYZ@metamagic.in"}]}},this.projectData={response:{success:!0,message:"Fetching  Data  Request Succeeded: Profile",data:[{name:"Admin Template\t",status:" 65%"},{name:"Landing Page",status:"Finished"},{name:"Backend UI\t",status:"Rejected"},{name:"Personal Blog",status:"40%"},{name:"E-mail Templates\t",status:"13%"},{name:"Corporate Website",status:"Pending"}]}},this.browserData={response:{success:!0,message:"Fetching  Data  Request Succeeded: Profile",data:[{name:"Google Chrome",usage:"23%",icon:"GoogleChrome.jpg "},{name:"Mozila Firefox",usage:"15%",icon:"MozilaFirefox.png "},{name:"Apple Safari",usage:"7%",icon:"AppleSafari.png "},{name:"Internet Explorer",usage:"9%",icon:"InternetExplorer.jpeg"},{name:"Opera mini",usage:"20%",icon:"Operamini.jpg"},{name:"Microsoft edge",usage:"9%",icon:"Microsoftedge.jpg"}]}}}return e.prototype.ngOnInit=function(){this.createCustomSourceData()},e.prototype.createCustomSourceData=function(){this.customSourceData.title="Listbox with Context Menu",this.customSourceData.description="Simple list box which allows user to select one of more items from list based on configuration. User can provide custom template to change look and feel and with context menu (right-click mouse operation)",this.customSourceData.sourceMetadata.htmlUrl="data/contextmenulistbox/listbox.html",this.customSourceData.sourceMetadata.tsUrl="data/contextmenulistbox/listbox.text",this.customSourceData.liveMetadata.stackblitzUrl="https://stackblitz.com/edit/amexio-listbox-contextmenu?embed=1&file=src/app/contextualmenu/list/list.demo.component.html&view=editor"},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e.prototype.onRowClick=function(e){this.onRowClickData=e},e.prototype.getSelectedData=function(e){this.selectedData=e},e=f([Object(o.n)({selector:"contextmenu-listbox-demo",template:a("9l7y"),styles:["\n    .listbox-StatusYellow {\n      background-color: yellow;\n    }\n    .listbox-StatusGreen  {\n      background-color: green;\n     }\n    .listbox-StatusRed {\n      background-color: red;\n  }\n  \n.red {\n    color: red!important;\n   \n}\n.green {\n    color: green!important;\n   \n}\n.yellow {\n    color: yellow!important;\n    \n}\n.template-progressBar .progress{\n  height:5px !important;\n}  \n"]}),b("design:paramtypes",[s.a])],e)}(),y=function(e,t,a,o){var n,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,a):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(i<3?n(r):i>3?n(t,a,r):n(t,a))||r);return i>3&&r&&Object.defineProperty(t,a,r),r},w=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},D=function(){function e(e){this.http=e,this.customSourceData=new m.a,this.rightclickdata=[{text:"Add New",icon:"fa fa-plus",disabled:!0},{text:"Edit",icon:"",seperator:!0},{text:"Send data in email",icon:""}]}return e.prototype.getDta=function(){var e=this;this.asyncFlag=!0,setTimeout(function(){e.asyncFlag=!1},3e3)},e.prototype.ngOnInit=function(){this.createCustomSourceData()},e.prototype.createCustomSourceData=function(){this.customSourceData.title="Panel with Context Menu",this.customSourceData.description="Panel provides an easy way to organize big forms by grouping the fields in panel and with context menu functionality (right click option).",this.customSourceData.sourceMetadata.htmlUrl="layout/panel/panelcontextmenu/panel.html    ",this.customSourceData.sourceMetadata.tsUrl="layout/panel/panelcontextmenu/panel.text    ",this.customSourceData.liveMetadata.stackblitzUrl="https://stackblitz.com/edit/amexio-panel-contextmenu-demo?embed=1&file=src/app/contextualmenu/panel/panel.demo.component.html&view=editor"},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e.prototype.refreshData=function(){this.refreshDialogue=!this.refreshDialogue},e=y([Object(o.n)({selector:"contextmenu-panel",template:a("0M9v")}),w("design:paramtypes",[s.a])],e)}(),k=function(e,t,a,o){var n,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,a):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(i<3?n(r):i>3?n(t,a,r):n(t,a))||r);return i>3&&r&&Object.defineProperty(t,a,r),r},C=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},S=function(){function e(e){this.http=e,this.customSourceData=new m.a,this.rightclickdata=[{text:"Back",icon:"fa fa-arrow-left",disabled:!0},{text:"Reload",icon:"fa fa-refresh",seperator:!1},{text:"Save",icon:"fa fa-save"}]}return e.prototype.ngOnInit=function(){this.createCustomSourceData()},e.prototype.createCustomSourceData=function(){this.customSourceData.title="Tab with Context Menu ",this.customSourceData.description="Tab component for Angular Apps with multiple configurations such as Tab, Icon support, Scrollable tabs, Closable tab, Vertical Tabs and with custom context menu (right click operation) and default context menu(close all and close others).",this.customSourceData.sourceMetadata.htmlUrl="layout/tab/contextmenutab/tab.html",this.customSourceData.sourceMetadata.tsUrl="layout/tab/contextmenutab/tab.text",this.customSourceData.liveMetadata.stackblitzUrl="https://stackblitz.com/edit/amexio-tab-contextualmenu?embed=1&file=src/app/contextualmenu/tab/contextmenutab.demo.html&view=editor"},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e=k([Object(o.n)({selector:"context-menu-tab-demo",template:a("HjLU")}),C("design:paramtypes",[s.a])],e)}(),M=function(e,t,a,o){var n,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,a):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(i<3?n(r):i>3?n(t,a,r):n(t,a))||r);return i>3&&r&&Object.defineProperty(t,a,r),r},j=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(){function e(e){this.http=e,this.customSourceData=new m.a,this.rightclickdata=[{text:"Add New",icon:"fa fa-plus",disabled:!0},{text:"Edit",icon:"",seperator:!0},{text:"Send data in email",icon:""}]}return e.prototype.getDta=function(){var e=this;this.asyncFlag=!0,setTimeout(function(){e.asyncFlag=!1},3e3)},e.prototype.ngOnInit=function(){this.createCustomSourceData()},e.prototype.createCustomSourceData=function(){this.customSourceData.title="Window with Context Menu ",this.customSourceData.description="Window Pane component is a customizable Modal Pane in which user can enter custom content",this.customSourceData.sourceMetadata.htmlUrl="pane/contextmenuwindow/window.html",this.customSourceData.sourceMetadata.tsUrl="pane/contextmenuwindow/window.text",this.customSourceData.liveMetadata.stackblitzUrl="https://stackblitz.com/edit/amexio-window-contextmenu-demo?embed=1&file=src/app/contextualmenu/window/window.demo.component.html&view=editor"},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e.prototype.toggleBasicWindow=function(e){"material"==e?this.showBasicWindowMaterial=!this.showBasicWindowMaterial:this.showBasicWindowNonMaterial=!this.showBasicWindowNonMaterial},e.prototype.toggleMaxWindow=function(e){"material"==e?this.showMaxWindowMaterial=!this.showMaxWindowMaterial:this.showMaxWindowNonMaterial=!this.showMaxWindowNonMaterial},e.prototype.toggleClosable=function(e){"material"==e?this.showClosableMaterial=!this.showClosableMaterial:this.showClosableNonMaterial=!this.showClosableNonMaterial},e=M([Object(o.n)({selector:"contextmenu-window",template:a("YM45")}),j("design:paramtypes",[s.a])],e)}(),R=function(e,t,a,o){var n,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,a):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(i<3?n(r):i>3?n(t,a,r):n(t,a))||r);return i>3&&r&&Object.defineProperty(t,a,r),r},A=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},P=function(){function e(e){this.http=e,this.customSourceData=new m.a,this.rightclickdata=[{text:"Add New",icon:"fa fa-plus",disabled:!0},{text:"Edit",icon:"",seperator:!0},{text:"Send data in email",icon:""}],this.treeLocalData={data:[{text:"Web App",expand:!0,children:[{text:"app",expand:!0,badge:1,children:[{leaf:!0,text:"Application.js"}]},{text:"button",expand:!0,badge:3,children:[{leaf:!0,text:"Button.js"},{leaf:!0,text:"Cycle.js"},{leaf:!0,text:"Split.js"}]},{text:"container",expand:!0,badge:3,children:[{leaf:!0,text:"ButtonGroup.js"},{leaf:!0,text:"Container.js"},{leaf:!0,text:"Viewport.js",expand:!0,children:[],lazy:{"http-url":"data/treeview.json","http-method":"get"}}]},{text:"core",expand:!0,badge:1,children:[{text:"dom",expand:!0,badge:2,children:[{leaf:!0,text:"Element.form.js"},{leaf:!0,text:"Element.static-more.js"}]}]}]}]}}return e.prototype.ngOnInit=function(){this.createCustomSourceData()},e.prototype.createCustomSourceData=function(){this.customSourceData.title="Tree with Context Menu",this.customSourceData.description="A Expandable Tree component which create Tree View based on standard datasource with context menu (right-click mouse operation).",this.customSourceData.sourceMetadata.htmlUrl="data/tree/contextmenutree/tree.html",this.customSourceData.sourceMetadata.tsUrl="data/tree/contextmenutree/tree.text",this.customSourceData.sourceMetadata.datasourceUrl="assets/data/componentdata/treeview.json",this.customSourceData.liveMetadata.stackblitzUrl="https://stackblitz.com/edit/amexio-tree-contextmenu-demo?embed=1&file=src/app/contextualmenu/tree/tree.demo.component.html"},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e=R([Object(o.n)({selector:"contextmenutree-demo",template:a("1Bzz")}),A("design:paramtypes",[s.a])],e)}(),z=[{path:"contextmenu-card-form-demo",component:d},{path:"contextual-menu-grid-demo",component:x},{path:"contextual-menu-listbox-demo",component:g},{path:"contextmenu-panel-demo",component:D},{path:"contextual-menu-tab-demo",component:S},{path:"contextmenu-window-demo",component:v},{path:"contextual-menu-tree-demo",component:P}],O=a("ZYCi");a.d(t,"ContextualMenuModule",function(){return E});var I=function(e,t,a,o){var n,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,a):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(i<3?n(r):i>3?n(t,a,r):n(t,a))||r);return i>3&&r&&Object.defineProperty(t,a,r),r},E=function(){function e(){}return e=I([Object(o.J)({declarations:[d,x,g,D,S,P,v],imports:[r.b,i.d,s.b,c.a.forRoot(),n.j,O.e.forChild(z)],providers:[]})],e)}()},sL2j:function(e,t){e.exports='   \n    <amexio-api-structure [custom-com-data]="customSourceData"  [url]="\'assets/componentjson/layouts/card.json\'">\n      <amexio-api-demo>\n   <amexio-row>\n      <amexio-column size="12">\n        <amexio-button [label]="\'Hide / Un-hide Card\'" [type]="\'primary\'" [tooltip]="\'Hide/UnHide Card\'" (click)="toggle()"> </amexio-button>\n      </amexio-column>\n    </amexio-row>\n    <amexio-row>\n      <amexio-column size="12">\n        <amexio-card  [context-menu]="rightclickdata" [header]="true" [footer]="true" [show]="flag" [footer-align]="\'right\'" height="250">\n          <amexio-header>\n            Employee Registration\n          </amexio-header>\n          <amexio-body>\n            <amexio-row>\n              <amexio-column [size]="6">\n                <amexio-text-input [field-label]="\'Name\'" name="name" [place-holder]="\'Enter name\'" [icon-feedback]="true">\n                </amexio-text-input>\n              </amexio-column>\n              <amexio-column [size]="6">\n                <amexio-text-input [field-label]="\'Local Address\'" name="address" [place-holder]="\'Enter address\'" [icon-feedback]="true">\n                </amexio-text-input>\n              </amexio-column>\n            </amexio-row>\n            <amexio-row>\n              <amexio-column [size]="6">\n                <amexio-number-input [field-label]="\'Number Input\'" [place-holder]="\'Enter Age\'">\n                </amexio-number-input>\n              </amexio-column>\n              <amexio-column [size]="6">\n                <amexio-email-input [field-label]="\'Email Id\'" name="email" [place-holder]="\'Enter Email Id\'" [allow-blank]="false" [error-msg]="\'Please Enter Email Id\'"\n                  [enable-popover]="true" [icon-feedback]="true">\n                </amexio-email-input>\n              </amexio-column>\n            </amexio-row>\n            <amexio-row>\n              <amexio-column [size]="6">\n                <amexio-text-input [field-label]="\'Father Name\'" name="name" [place-holder]="\'Enter name\'" [icon-feedback]="true">\n                </amexio-text-input>\n              </amexio-column>\n              <amexio-column [size]="6">\n                <amexio-text-input [field-label]="\'Present Address\'" name="address" [place-holder]="\'Enter address\'" [icon-feedback]="true">\n                </amexio-text-input>\n              </amexio-column>\n            </amexio-row>\n            <amexio-row>\n              <amexio-column [size]="6">\n                <amexio-number-input [field-label]="\'Number Input\'" [place-holder]="\'Enter Age\'">\n                </amexio-number-input>\n              </amexio-column>\n              <amexio-column [size]="6">\n                <amexio-email-input [field-label]="\'Father Email Id\'" name="email" [place-holder]="\'Enter Email Id\'" [allow-blank]="false"\n                  [error-msg]="\'Please Enter Email Id\'" [enable-popover]="true" [icon-feedback]="true">\n                </amexio-email-input>\n              </amexio-column>\n            </amexio-row>\n          </amexio-body>\n          <amexio-action>\n            <amexio-button [label]="\'Save\'" [type]="\'primary\'"></amexio-button>\n          </amexio-action>\n        </amexio-card>\n      </amexio-column>\n    \n    </amexio-row>\n\n    \n</amexio-api-demo>\n</amexio-api-structure>'}}]);