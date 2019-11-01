(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{GI7K:function(e,a){e.exports='<amexio-row>\n    <amexio-column size="12">\n        <amexio-card [header]="false" [show]="\'true\'">\n\n            <amexio-body>\n                <amexio-image [path]="\'assets/images/logos/D3_chart_page1.jpg\'" [tooltip]="\'Image\'"></amexio-image>\n\n                <p><b>D3</b> allows you to bind arbitrary data to a Document Object Model (DOM),\n                    and then apply data-driven transformations to the document. For example,\n                    you can use D3 to generate an HTML table from an array of numbers.\n                    Or, use the same data to create an interactive SVG bar chart with smooth transitions\n                    and interaction.</p>\n\n                <p>D3 is not a monolithic framework that seeks to provide every conceivable feature.\n                    Instead, D3 solves the crux of the problem: efficient manipulation of documents\n                    based on data. This avoids proprietary representation and affords extraordinary\n                    flexibility, exposing the full capabilities of web standards such as HTML, SVG, and CSS.\n                    With minimal overhead, D3 is extremely fast, supporting large datasets and dynamic\n                    behaviors for interaction and animation. D3\u2019s functional style allows code reuse\n                    through a diverse collection of <span style="color: #0000FF"><ins>official</ins></span> and <span\n                        style="color: #0000FF"><ins>community-developed</ins></span> modules.</p>\n\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n</amexio-row>\n\n\n<amexio-row>\n    <amexio-column size="6" [fit]="true">\n        <amexio-card [header]="true" [show]="\'true\'">\n            <amexio-header>\n                amexio D3-bar chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-bar [title]="\'Population Of Cities In India\'" [label]="true" [color]="userDefineColors" [data]="userDefineColorData">\n                </amexio-d3-chart-bar>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n\n    <amexio-column size="6" [fit]="true">\n        <amexio-card [header]="true" [show]="\'true\'">\n            <amexio-header>\n                amexio D3-line chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-line [title]="\'Popularity Of XYZ & PQR\'" [label]="true" [data]="doubleLineData">\n                </amexio-d3-chart-line>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n</amexio-row>\n\n\n\n<amexio-row>\n\n    <amexio-column size="6" [fit]="true">\n        <amexio-card [header]="true" [show]="\'true\'">\n            <amexio-header>\n                amexio D3-donut chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-donut [label]="true" [title]="\'Browser Popularity\'" [color]="donutDataColor" [data]="donutData">\n                </amexio-d3-chart-donut>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n\n    <amexio-column size="6" [fit]="true">\n        <amexio-card [header]="true" [show]="\'true\'">\n            <amexio-header>\n                amexio D3-pie chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-pie [label]="true" [title]="\'Visitor Visit Country Ratio\'" [color]="userDefineColors" [data]="pieData">\n                </amexio-d3-chart-pie>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n</amexio-row>\n\n<amexio-row>\n    <amexio-column size="6" [fit]="true">\n        <amexio-card [header]="true" [show]="\'true\'">\n            <amexio-header>\n                Amexio D3-multiseries Chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-multiseries [title]="\'Market Information\'" [data]="stackData" [label]="true">\n                </amexio-d3-chart-multiseries>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n\n    <amexio-column size="6" [fit]="true">\n        <amexio-card [header]="true" [show]="\'true\'">\n            <amexio-header>\n                amexio D3-Stack Bar chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-barstack [title]="\'Market Information\'" [data]="stackData" [label]="true">\n                </amexio-d3-chart-barstack>\n\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n</amexio-row>\n<amexio-row>\n\n    <amexio-column size="6" [fit]="true">\n        <amexio-card [header]="true" [show]="\'true\'">\n            <amexio-header>\n                amexio D3-Horizontal bar chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-bar [label]="true" [title]="\'Production Information\'" [horizontal]="true" [data]="horizontalBarData">\n                </amexio-d3-chart-bar>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n\n    <amexio-column size="6" [fit]="true">\n        <amexio-card [header]="true" [show]="\'true\'">\n            <amexio-header>\n                amexio D3-Combo Chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-combochart [title]="\'State Wise Rice Production\'" [data]="comboChartData" >\n                </amexio-d3-combochart>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n</amexio-row>\n\n<amexio-row>\n\n    <amexio-column size="6" [fit]="true">\n        <amexio-card [header]="true" [show]="\'true\'">\n            <amexio-header>\n                amexio D3-Multi-Area chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-multiarea [label]="true" [data]="multiAreaData" [title]="\'Stock Market Information\'">\n                </amexio-d3-chart-multiarea>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n\n    <amexio-column size="6" [fit]="true">\n        <amexio-card [header]="true" [show]="\'true\'">\n            <amexio-header>\n                amexio D3-Scatter chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-scatter [title]="\'Age vs Weight\'" [label]="true" [data]="scatterChartData" [color]="\'green\'">\n                </amexio-d3-chart-scatter>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n</amexio-row>\n\n<amexio-row>\n    <amexio-column size="6" [fit]="true">\n        <amexio-card [header]="true" [show]="\'true\'">\n            <amexio-header>\n                amexio D3-Histogram chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-histogram [label]="true" [title]="\'Count Of Dinosaur\'" [data]="histogramdata" [color]="\'blue\'"></amexio-d3-chart-histogram>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n\n    <amexio-column size="6" [fit]="true">\n        <amexio-card [header]="true" [show]="\'true\'">\n            <amexio-header>\n                amexio D3-Waterfall chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-waterfall [title]="\'Product Information\'" [data]="waterfallChartData" [label]="true">\n                </amexio-d3-chart-waterfall>\n\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n</amexio-row>\n\n\n<amexio-row>\n    <amexio-column size="6" [fit]="true">\n        <amexio-card [header]="true" [show]="\'true\'">\n            <amexio-header>\n                amexio D3-Bubble chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-bubble [title]="\'Region Wise Life Expectancy \'" [label]="true"\n                [zoom-enable]="true" [data]="bubblechart">\n                </amexio-d3-chart-bubble>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n    <amexio-column size="6" [fit]="true">\n        <amexio-card [header]="true" [show]="\'true\'">\n            <amexio-header>\n                amexio D3-Combo Chart with multi lines\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-combochart [title]="\' Production in India\'" \n                \n               [data]="barData"\n               [bar-data-index]="barArray"\n               [line-data-index]="lineArray"\n               >\n               </amexio-d3-combochart>   \n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n</amexio-row>\n\n\n<amexio-action-ce [align]="\'space-between\'">\n        <amexio-button [label]="\'Previous\'" [type]="\'theme-color\'" (onClick)="previous()">\n        </amexio-button>\n        <amexio-button [label]="\'Next\'" [type]="\'theme-color\'" [tooltip]="\'toolTip\'"  (onClick)="next()">\n        </amexio-button>\n</amexio-action-ce>'},le9M:function(e,a,o){"use strict";o.r(a);var t=o("CcnG"),r=o("t/Na"),i=o("ZYCi"),n=function(e,a,o,t){var r,i=arguments.length,n=i<3?a:null===t?t=Object.getOwnPropertyDescriptor(a,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,a,o,t);else for(var m=e.length-1;m>=0;m--)(r=e[m])&&(n=(i<3?r(n):i>3?r(a,o,n):r(a,o))||n);return i>3&&n&&Object.defineProperty(a,o,n),n},m=function(e,a){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,a)},l=function(){function e(e,a){this.http=e,this.router=a,this.multiAreaData=[["date","index","open","close","high"],["2014",58.13,610,234,100],["2015",53.98,626,356,150],["2016",99,543,456,200],["2017",130.28,443,556,250],["2018",58.13,610,245,300],["2019",53.98,626,345,350],["2020",99,543,556,400],["2021",130.28,443,443,500]],this.comboChartData=[["State","Rice Production","Rice Export"],["W.B",600,50],["Kerala",500,100],["Goa",400,350],["Assam",250,200],["Punjab",300,250],["Bihar",400,380],["Orissa",500,200]],this.barData=[["State","Corn Export","Bajra Export","Rice Export","Wheat Export","Jowar Export"],["Andhra Pradesh",600,500,250,50,95],["Kerala",500,400,75,150,195],["Tamil Nadu",400,300,250,50,95],["Assam",250,150,75,150,195],["Maharshtra",300,200,250,50,95]],this.lineArray=[{column:"Rice Export",label:!0,color:"yellow"},{column:"Jowar Export"},{column:"Wheat Export"}],this.lineArray2=[{column:"Jowar Export"},{column:"Wheat Export",label:!0}],this.barArray=[{column:"Corn Export",label:!0},{column:"Bajra Export",label:!0}],this.horizontalBarData=[["year","production"],["2011",300],["2012",500],["2013",700],["2014",400],["2015",600],["2016",500],["2017",200]],this.userDefineColors=["#98abc5","#8a89a6","#7b6888","#6b486b","#a05d56","#d0743c","#ff8c00","#b9936c"],this.userDefineColorData=[["city","population"],["Mumbai",94423],["Kochi",69932],["Delhi",91345],["Chennai",46467],["Pune",31244],["Jaipur",30461],["Ranchi",84436]],this.bubblechart=[["ID","Life Expectancy","Fertility Rate","Region","Population"],["CAN",80.66,1.67,"North America",33739900],["DEU",79.84,1.36,"Europe",81902307],["DNK",78.6,1.84,"Europe",5523095],["EGY",72.73,2.78,"Middle East",79716203],["GBR",80.05,2,"Europe",61801570],["IRN",72.49,1.7,"Middle East",73137148],["IRQ",68.09,4.77,"Middle East",31090763],["ISR",81.55,2.96,"Middle East",7485600],["RUS",68.6,1.54,"Europe",14185e4],["USA",78.09,2.05,"North America",307007e3]]}return e.prototype.ngOnInit=function(){this.donutDataColor=["#98abc5","#8a89a6","#7b6888","#6b486b","#a05d56","#d0743c","#ff8c00"],this.donutData=[["browser","activity"],["IE",11.43],["Chrome",63.14],["Safari",3.83],["Firefox",10.23],["Others",10.01]],this.pieData=[["country","ratio"],["India",30.3],["Spain",9.52],["France",13.68],["China",18.71],["Germany",8.01],["U.K",8.01],["U.S",14.01],["Korea",4.01]],this.multiData=[["date","Sales","Expenses","Profit"],["2014",1e3,400,200],["2015",1170,460,250],["2016",660,1120,300],["2017",1030,540,350],["2018",1090,740,450],["2019",1050,640,350]],this.doubleLineData=[[{datatype:"number",label:"Day"},{datatype:"number",label:"XYZ"},{datatype:"number",label:"PQR"}],[0,0,0],[1,10,5],[2,23,15],[3,17,9],[4,18,10],[5,9,5],[6,11,3],[7,27,19],[8,33,25],[9,40,32],[10,32,24],[11,35,27],[12,30,22],[13,40,32],[14,42,34],[15,47,39]],this.stackData=[["Year","Sales","Expenses","Profit"],["2014",1e3,400,200],["2015",1170,460,250],["2016",660,1120,300],["2017",1030,540,350],["2018",1090,740,450],["2019",1050,640,350]],this.scatterChartData=[["Age","Weight"],[5,35],[8,40],[10,45],[3,12],[12,48],[6,39],[8,42],[5,32],[7,46],[1,10],[3,15],[2,8],[4,20]],this.histogramdata=[["Dinosaur","Length"],["Acrocanthosaurus (top-spined lizard)",12.2],["Albertosaurus (Alberta lizard)",9.1],["Allosaurus (other lizard)",12.2],["Apatosaurus (deceptive lizard)",22.9],["Archaeopteryx (ancient wing)",.9],["Argentinosaurus (Argentina lizard)",36.6],["Baryonyx (heavy claws)",9.1],["Brachiosaurus (arm lizard)",30.5],["Ceratosaurus (horned lizard)",6.1],["Coelophysis (hollow form)",2.7],["Compsognathus (elegant jaw)",.9],["Deinonychus (terrible claw)",2.7],["Diplodocus (double beam)",27.1],["Dromicelomimus (emu mimic)",3.4],["Gallimimus (fowl mimic)",5.5],["Mamenchisaurus (Mamenchi lizard)",21],["Megalosaurus (big lizard)",7.9],["Microvenator (small hunter)",1.2],["Ornithomimus (bird mimic)",4.6],["Oviraptor (egg robber)",1.5],["Plateosaurus (flat lizard)",7.9],["Sauronithoides (narrow-clawed lizard)",2],["Seismosaurus (tremor lizard)",45.7],["Spinosaurus (spiny lizard)",12.2],["Supersaurus (super lizard)",30.5],["Tyrannosaurus (tyrant lizard)",15.2],["Ultrasaurus (ultra lizard)",30.5],["Velociraptor (swift robber)",1.8]],this.waterfallChartData=[["name","value"],["Product Revenue",42e4],["Services Revenue",21e4],["Fixed Costs",-17e4],["letiable Costs",-14e4]]},e.prototype.previous=function(){this.router.navigate(["amexio-colors"])},e.prototype.next=function(){this.router.navigate(["amexio-accessibility"])},e=n([Object(t.n)({selector:"chart-d3-page",template:o("GI7K")}),m("design:paramtypes",[r.a,i.d])],e)}(),c=o("O4vx"),d=o("gIcY"),u=o("Ip0R"),s=o("d2mR"),x=o("Jovw");o.d(a,"ChartD3DemoModule",function(){return b});var h=function(e,a,o,t){var r,i=arguments.length,n=i<3?a:null===t?t=Object.getOwnPropertyDescriptor(a,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,a,o,t);else for(var m=e.length-1;m>=0;m--)(r=e[m])&&(n=(i<3?r(n):i>3?r(a,o,n):r(a,o))||n);return i>3&&n&&Object.defineProperty(a,o,n),n},b=function(){function e(){}return e=h([Object(t.J)({declarations:[l],imports:[u.b,d.d,r.b,s.a,c.j,i.e.forChild([{path:"",component:l,pathMatch:"full"}]),x.a],providers:[]})],e)}()}}]);