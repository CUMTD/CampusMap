(this["webpackJsonpcampus-map"]=this["webpackJsonpcampus-map"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),c=a(3),o=a.n(c),s=a(4),m=a(1);function i(e,t){switch(t.type){case n.SelectPointOfInterestCategory:return Object(m.a)({},e,{selectedPointOfInterestCategory:t.category,selectedPointOfInterest:null});case n.SelectPointOfInterest:var a=t.poi?e.pointOfInterestCategories.filter((function(e){return e.pointsOfInterest.filter((function(e){var a;return e.name===(null===(a=t.poi)||void 0===a?void 0:a.name)})).length>0}))[0]:e.selectedPointOfInterestCategory;return Object(m.a)({},e,{selectedPointOfInterest:t.poi,selectedPointOfInterestCategory:a});case n.Clear:return Object(m.a)({},e,{selectedPointOfInterest:null,selectedPointOfInterestCategory:null});case n.SetFullScreen:return Object(m.a)({},e,{fullScreen:t.fullScreen});case n.SetShowStreets:return Object(m.a)({},e,{showStreets:t.showStreets});case n.SetShowLabels:return Object(m.a)({},e,{showLabels:t.showLabels});default:return e}}!function(e){e[e.SelectPointOfInterestCategory=0]="SelectPointOfInterestCategory",e[e.SelectPointOfInterest=1]="SelectPointOfInterest",e[e.Clear=2]="Clear",e[e.SetFullScreen=3]="SetFullScreen",e[e.SetShowStreets=4]="SetShowStreets",e[e.SetShowLabels=5]="SetShowLabels"}(n||(n={}));var u={pointOfInterestCategories:[{name:"Housing",icon:"house",pointsOfInterest:[{name:"Allen Hall",x:435,y:311,routeNumbers:[10,12,13,21]},{name:"Armory House",x:163,y:255,routeNumbers:[]},{name:"Busey Evans Hall",x:410,y:280,routeNumbers:[2,10,12,21,22]},{name:"Daniels Hall",x:440,y:175,routeNumbers:[5]},{name:"Florida Avenue Residence Hall (FAR)",x:435,y:440,routeNumbers:[12,13,21,22]},{name:"Hendrick House",x:475,y:175,routeNumbers:[5]},{name:"Ikenberry Commons",x:165,y:350,routeNumbers:[1,10,22]},{name:"Illini Tower",x:215,y:270,routeNumbers:[22]},{name:"Illinois Street Residence Hall (ISR)",x:435,y:190,routeNumbers:[5,22]},{name:"Lincoln Avenue Residence Hall (LAR)",x:460,y:311,routeNumbers:[2,22]},{name:"Newman Hall",x:270,y:260,routeNumbers:[1,13,21,22]},{name:"Orchard Downs",x:564,y:482.5,routeNumbers:[12]},{name:"Pennsylvania Avenue Residence Hall (PAR)",x:450,y:415,routeNumbers:[12,13,21,22]},{name:"Stratford House",x:210,y:225,routeNumbers:[22]}]},{name:"Academic Buildings",icon:"school",pointsOfInterest:[{name:"Activities and Recreation Center (ARC)",x:165,y:382,routeNumbers:[22]},{name:"Altgeld Hall",x:313,y:195,routeNumbers:[1,2,5,12,13,21,22]},{name:"Armory",x:245,y:305,routeNumbers:[1,13,21,22]},{name:"Bevier Hall",x:378,y:300,routeNumbers:[10,12,13,21,22]},{name:"Business Instructional Facility (BIF)",x:262,y:335,routeNumbers:[10,21,22]},{name:"Campus Recreation Center East (CRCE)",x:434,y:303,routeNumbers:[10,12,13,21,22]},{name:"Ceramics Building",x:378,y:131,routeNumbers:[10,13,22]},{name:"Chemical and Life Sciences",x:378,y:222,routeNumbers:[2,10,12,21,22]},{name:"College of Veterinary Medicine (Vet-Med)",x:455.3,y:580.3,routeNumbers:[21]},{name:"David Kinley Hall (DKH)",x:320,y:332,routeNumbers:[10,13,22]},{name:"Electrical and Computer Engineering (ECE)",x:310,y:65,routeNumbers:[1,2,12]},{name:"Education Building",x:275,y:350,routeNumbers:[21]},{name:"English Building",x:310,y:230,routeNumbers:[1,13,21,22]},{name:"Everitt Laboratory",x:310,y:150,routeNumbers:[1,2,12]},{name:"Foellinger Auditorium",x:340,y:297,routeNumbers:[10,13,22]},{name:"Grainger Engineering Library",x:330,y:90,routeNumbers:[1,2,12]},{name:"Gregory Hall",x:310,y:275,routeNumbers:[1,13,21,22]},{name:"Henry Administration Building",x:310,y:205,routeNumbers:[1,13,21,22]},{name:"Japan House",x:500,y:545,routeNumbers:[21]},{name:"Kenny Gym",x:310,y:108,routeNumbers:[1,2,12]},{name:"Krannert Center for the Performing Arts",x:410,y:210,routeNumbers:[2,10,12,21,22]},{name:"Law Building",x:245,y:380,routeNumbers:[21,22]},{name:"Lincoln Hall",x:310,y:255,routeNumbers:[1,13,21,22]},{name:"Loomis Laboratory",x:412,y:160,routeNumbers:[5,10,13,21,22]},{name:"Main Library",x:290,y:295,routeNumbers:[1,10,13,21,22]},{name:"McKinley Health Center",x:465,y:350,routeNumbers:[2,22]},{name:"Memorial Stadium",x:140,y:475,routeNumbers:[1,10]},{name:"Mumford Hall",x:360,y:335,routeNumbers:[10,13,22]},{name:"Noyes Laboratory",x:368,y:235,routeNumbers:[2,10,12,21,22]},{name:"Plant Science Laboratory",x:420,y:255,routeNumbers:[12,13,21]},{name:"Siebel Center for Computer Science",x:375,y:100,routeNumbers:[22]},{name:"State Farm Center",x:140,y:505,routeNumbers:[1,10]},{name:"Wohlers Hall",x:275,y:335,routeNumbers:[10,21,22]}]}],selectedPointOfInterestCategory:null,selectedPointOfInterest:null,routes:[{number:1,name:"Yellow"},{number:2,name:"Red"},{number:5,name:"Green"},{number:10,name:"Gold"},{number:12,name:"Teal"},{number:13,name:"Silver"},{number:21,name:"Raven"},{number:22,name:"Illini"}],fullScreen:!1,showStreets:!0,showLabels:!0},f=(a(10),a(11),a(12),a(13),function(){var e=Object(r.useContext)(I);return l.a.createElement("button",{onClick:function(){e.dispatch({type:n.SetFullScreen,fullScreen:!e.state.fullScreen})},className:"full-screen-button"},l.a.createElement("i",{className:"material-icons"},e.state.fullScreen?"fullscreen_exit":"fullscreen"))}),d=function(){var e=Object(r.useContext)(I).state.showLabels?"block":"none",t={fill:"#fff",fontFamily:"interstate, sans-serif",fontWeight:800,fontSize:12,display:e},a={fill:"#fff",stroke:"#222",strokeWidth:1.5},n={fill:"#A5238D",display:e};return l.a.createElement("g",null,l.a.createElement("g",{id:"E-14"},l.a.createElement("circle",{style:a,id:"E-141",cx:"107.5",cy:"507.5",r:"7.5"}),l.a.createElement("path",{style:n,d:"M171 497c0-2.484-2.016-4.5-4.5-4.5h-31a4.502 4.502 0 00-4.5 4.5v21c0 2.484 2.016 4.5 4.5 4.5h31c2.484 0 4.5-2.016 4.5-4.5v-21zm-55 10.5l15-2.5v5l-15-2.5z"}),l.a.createElement("g",{style:t},l.a.createElement("text",{x:"165.316",y:"603.374",transform:"translate(-24 -97.5)"},"Lot"),l.a.createElement("text",{x:"161.752",y:"615.374",transform:"translate(-24 -97.5)"},"E-14"))),l.a.createElement("g",{id:"Research-Park"},l.a.createElement("circle",{style:a,id:"RP",cx:"105",cy:"597.5",r:"7.5"}),l.a.createElement("path",{style:n,fill:"#44ff9a",d:"M123.5 600l-10-2.5 10-2.5v-8c0-2.484 2.016-4.5 4.5-4.5h51c2.484 0 4.5 2.016 4.5 4.5v21c0 2.484-2.016 4.5-4.5 4.5h-51a4.502 4.502 0 01-4.5-4.5v-8z"}),l.a.createElement("g",{style:t},l.a.createElement("text",{x:"158.75",y:"603.374",transform:"translate(-31.5 -7.5)"},"Research"),l.a.createElement("text",{x:"171.668",y:"615.374",transform:"translate(-31.5 -7.5)"},"Park"))),l.a.createElement("g",{id:"FAR-PAR"},l.a.createElement("path",{style:a,d:"M452.5 420c0-4.139-3.361-7.5-7.5-7.5a7.504 7.504 0 00-7.5 7.5v10c0 4.139 3.361 7.5 7.5 7.5 4.139 0 7.5-3.361 7.5-7.5v-10z"}),l.a.createElement("path",{style:n,d:"M442.5 452.5l2.5-15 2.5 15h13c2.484 0 4.5 2.016 4.5 4.5v21c0 2.484-2.016 4.5-4.5 4.5h-31a4.502 4.502 0 01-4.5-4.5v-21c0-2.484 2.016-4.5 4.5-4.5h13z"}),l.a.createElement("g",{style:t},l.a.createElement("text",{x:"437.814",y:"463.374",transform:"translate(-5 2.5)"},"FAR"),l.a.createElement("text",{x:"437.502",y:"475.374",transform:"translate(-5 2.5)"},"PAR"))),l.a.createElement("g",{id:"IT"},l.a.createElement("path",{style:a,d:"M75.277 70c0-5.519-4.481-10-10-10s-10 4.481-10 10 4.481 10 10 10 10-4.481 10-10z"}),l.a.createElement("path",{style:n,d:"M83.328 85.154c.374-.1.767-.154 1.172-.154h51c2.484 0 4.5 2.016 4.5 4.5v21c0 2.484-2.016 4.5-4.5 4.5h-51a4.502 4.502 0 01-4.5-4.5v-21c0-.405.054-.798.154-1.172l-7.935-11.109 11.109 7.935z"}),l.a.createElement("g",{style:t},l.a.createElement("text",{x:"89.255",y:"98.374",transform:"translate(1.305)"},"Illinois"),l.a.createElement("text",{x:"83.621",y:"110.374",transform:"translate(1.305)"},"Terminal"))),l.a.createElement("g",{id:"Urbana"},l.a.createElement("circle",{style:a,cx:"690",cy:"122.462",r:"10"}),l.a.createElement("path",{style:n,d:"M671.558 104.875a4.5 4.5 0 01-1.058.125h-51a4.502 4.502 0 01-4.5-4.5v-21c0-2.484 2.016-4.5 4.5-4.5h51c2.484 0 4.5 2.016 4.5 4.5v21c0 .28-.026.554-.075.82l8.692 12.168-12.059-8.613z"}),l.a.createElement("g",{style:t},l.a.createElement("text",{x:"644",y:"99.374",transform:"translate(-20 -11)"},"Lincoln"),l.a.createElement("text",{x:"644.51",y:"111.374",transform:"translate(-20 -11)"},"Square"))),l.a.createElement("g",{id:"IU"},l.a.createElement("path",{style:a,d:"M350 155.182c0-4.139-3.361-7.5-7.5-7.5a7.504 7.504 0 00-7.5 7.5v25c0 4.139 3.361 7.5 7.5 7.5 4.139 0 7.5-3.361 7.5-7.5v-25z"}),l.a.createElement("path",{style:n,d:"M340 197.5l2.5-10 2.5 10h26.887c2.484 0 4.5 2.016 4.5 4.5v21c0 2.484-2.016 4.5-4.5 4.5h-41a4.502 4.502 0 01-4.5-4.5v-21c0-2.484 2.017-4.5 4.5-4.5H340z"}),l.a.createElement("g",{style:t},l.a.createElement("text",{x:"334.612",y:"218.374",transform:"translate(3.887 -7.5)"},"Illini"),l.a.createElement("text",{x:"330.706",y:"230.374",transform:"translate(3.887 -7.5)"},"Union"))),l.a.createElement("g",{id:"Plaza"},l.a.createElement("path",{style:a,d:"M315 217.5c0-4.139-3.361-7.5-7.5-7.5h-20a7.504 7.504 0 00-7.5 7.5c0 4.139 3.361 7.5 7.5 7.5h20c4.139 0 7.5-3.361 7.5-7.5z"}),l.a.createElement("path",{style:n,d:"M270 219.981V228c0 2.484-2.016 4.5-4.5 4.5h-41a4.502 4.502 0 01-4.5-4.5v-21c0-2.484 2.016-4.5 4.5-4.5h41c2.484 0 4.5 2.016 4.5 4.5v7.981l10 2.5-10 2.5z"}),l.a.createElement("g",{style:t},l.a.createElement("text",{x:"239.234",y:"223.374",transform:"translate(-15 -7.5)"},"Transit"),l.a.createElement("text",{x:"244.106",y:"235.374",transform:"translate(-15 -7.5)"},"Plaza"))))},h=function(){var e={fill:"none",stroke:"#ccc",strokeWidth:2};return l.a.createElement("g",null,l.a.createElement("path",{style:{stroke:"#0d79f2",strokeOpacity:.2,strokeWidth:4,fill:"none"},d:"M298.754 153.384c-2.1.89 4.545-.39 6.814-.619 1.613-.163 3.291-.052 4.831-.558 8.756-2.875 15.257-8.887 24.158-11.149 7.417-1.886 16.373-1.232 23.6 1.115 2.91.944 5.557 2.7 8.548 3.344 9.148 1.972 17.929.93 26.944.93"}),l.a.createElement("path",{className:"n-quad",style:e,d:"M300.999 144.96c30.394-15.274 60.093-15.945 89 0M313.999 136.823c0-44.145 60.942-44.008 59.989.137M324.999 110.96l48 26M363.999 110.96l-50 28"}),l.a.createElement("path",{className:"main-quad",style:e,d:"M330 199.96h24.999v66.7H330zM330 199.96l24.999 24.573M354.999 224.533L330 245.597M330 245.597l24.999 21.063M330 224.533l24.999-24.573M330 224.533l24.999 21.064M354.999 245.597L330 266.66M330 245.597h24.999M330 224.533h24.999"}))},y=function(){var e=Object(r.useContext)(I);return e.state.selectedPointOfInterest?l.a.createElement(r.Fragment,null,l.a.createElement("path",{fill:"#3E0216",opacity:.4,transform:"translate(".concat(e.state.selectedPointOfInterest.x-7,",").concat(e.state.selectedPointOfInterest.y-25,")"),d:"M13.597 2.764C15.074 3.973 16 5.701 16 7.617 16 14.114 8.5 26 8.5 26s-.329-.452-.85-1.241C8.706 23.043 15 12.569 15 6.617c0-1.436-.52-2.767-1.403-3.853zM6.304 9.696a2.501 2.501 0 113.392-3.392 2.5 2.5 0 00-3.392 3.392z"}),l.a.createElement("path",{fill:"#E72B6B",transform:"translate(".concat(e.state.selectedPointOfInterest.x-7,",").concat(e.state.selectedPointOfInterest.y-25,")"),d:"M7.5 25S15 13.114 15 6.617C15 2.965 11.639 0 7.5 0 3.361 0 0 2.965 0 6.617 0 14.718 7.5 25 7.5 25zm0-20a2.5 2.5 0 010 5 2.5 2.5 0 010-5z"})):null},E=function(e){var t,a=e.active?e.color:e.offColor,n={stroke:a,strokeMiterlimit:10,fill:"none",strokeWidth:5,strokeLinejoin:"round",strokeLinecap:"round",zIndex:(e.active?100:10)+e.number},c=Object(m.a)({},n,{fill:a});return l.a.createElement(r.Fragment,null,l.a.cloneElement(e.children,{style:n,key:"line"}),null===(t=e.arrows)||void 0===t?void 0:t.map((function(e,t){return l.a.cloneElement(e,{style:c,key:t})})))};function b(e,t){switch(e){case 1:return l.a.createElement(E,{key:e,number:e,color:"#fcee1f",offColor:"#fefbd1",active:t,arrows:[l.a.createElement("path",{d:"M97.499 630.447l7.5 15 7.5-15h-15z"}),l.a.createElement("path",{d:"M57.5 50L65 35l7.5 15h-15z"})]},l.a.createElement("path",{d:"M104.999 633.447V324.96a10.001 10.001 0 0110.001-10l154.958.002a9.997 9.997 0 0010-10v-20a5.002 5.002 0 015-5h10a9.997 9.997 0 0010-10v-195a10.003 10.003 0 00-10-10H70a4.998 4.998 0 01-5-5V47"}));case 2:return l.a.createElement(E,{key:e,number:e,color:"#e7131a",offColor:"#f9b8ba",active:t,arrows:[l.a.createElement("path",{d:"M536.958 407.462l15-7.5-15-7.5v15z"}),l.a.createElement("path",{d:"M52.5 28L60 13l7.5 15h-15z"})]},l.a.createElement("path",{d:"M539.958 399.962h-50c-5.523 0-10-4.477-10-10v-110c0-5.522-4.477-10-10-10h-60c-5.523 0-10-4.477-10-10v-80c0-5.522-4.477-10-10-10h-85.051a4.949 4.949 0 01-4.949-4.949V75.026a5.065 5.065 0 00-5.064-5.064H109.958l-39.959-.002c-5.523 0-10-4.477-9.999-10V25"}));case 5:return l.a.createElement(E,{key:e,number:e,color:"#008063",offColor:"#cae0d9",active:t,arrows:[l.a.createElement("path",{d:"M44.999 57.462l-15 7.5 15 7.5v-15z"}),l.a.createElement("path",{d:"M720.006 112.487L735 120l-15.006 7.487.012-15z"})]},l.a.createElement("path",{d:"M41.999 64.962h7.959a10.001 10.001 0 0110 10v75c0 16.569 13.431 30 30 30h570a29.998 29.998 0 0030-30v-19.991a10 10 0 0110.008-10l23.034.019"}));case 10:return l.a.createElement(E,{key:e,number:e,color:"#c7994a",offColor:"#f0e6d4",active:t,arrows:[l.a.createElement("path",{d:"M59.999 502.46l-15 7.5 15 7.5v-15z"}),l.a.createElement("path",{d:"M687.5 95l7.5-15 7.5 15h-15z"})]},l.a.createElement("path",{d:"M56.999 509.96h43c5.523 0 10-4.477 10-10v-175a5.001 5.001 0 015-5l264.959.002a9.997 9.997 0 0010-10v-190c0-5.522 4.477-10 10-10h123.69c4.179 0 8.331.674 12.296 1.996l17.793 5.931a40.42 40.42 0 0012.779 2.073H685c5.522 0 9.999-4.477 10-9.999V92"}));case 12:return l.a.createElement(E,{key:e,number:e,color:"#006991",offColor:"#c9dae3",active:t},l.a.createElement("g",null,l.a.createElement("path",{d:"M569.958 482.462c0 2.76-2.24 5-5 5s-5-2.24-5-5c0-2.759 2.24-5 5-5s5 2.241 5 5z"}),l.a.createElement("path",{d:"M59.958 74.962h235v90c0 5.523 4.477 10 10 10h85.056a4.945 4.945 0 014.944 4.944v120.056a10 10 0 0010 10h20c5.523 0 10 4.478 10 10v69.752a10.25 10.25 0 01-10.248 10.248h-4.86a4.892 4.892 0 00-4.892 4.892v15.105l.001.003h54.999c5.523 0 10 4.478 10 10v15a10 10 0 0010 10h65a10.001 10.001 0 0110 10v12.5"})));case 13:return l.a.createElement(E,{key:e,number:e,color:"#999",offColor:"#ccc",active:t},l.a.createElement("path",{d:"M689.958 124.962H566.065a37.63 37.63 0 01-11.9-1.931l-19.162-6.387a32.765 32.765 0 00-10.363-1.682H399.773a4.815 4.815 0 00-4.815 4.815v35.185a10 10 0 01-10 10h-75a10.001 10.001 0 00-10 10v94.785a5.215 5.215 0 01-5.215 5.215h-9.785c-5.523 0-10 4.478-10 10v20c0 5.523 4.477 10 10 10h140.059a4.942 4.942 0 014.941 4.941v69.884a5.175 5.175 0 01-5.176 5.175h-4.824c-5.523 0-10 4.478-10 10v14.997a5.004 5.004 0 005.003 5.003h29.997"}));case 21:return l.a.createElement(E,{key:e,number:e,color:"#000",offColor:"#ddd",active:t},l.a.createElement("g",null,l.a.createElement("path",{d:"M451.726 583.801a5.001 5.001 0 017.071-7.071 5.001 5.001 0 01-7.071 7.071z"}),l.a.createElement("path",{d:"M404.958 389.962h20v-70h-10c-5.523 0-10-4.477-10-10v-145a10.003 10.003 0 00-10-10h-95a10.001 10.001 0 00-10 10v100h-10c-5.523 0-10 4.478-10 10v105c0 5.523 4.477 10 10 10h125v30c0 5.523 4.477 10 10 10h50c5.523 0 10 4.478 10 10v155.172a2 2 0 01-3.414 1.414l-12.747-12.747"})));case 22:return l.a.createElement(E,{key:e,number:e,color:"#5A1D5A",offColor:"#eee9ef",active:t,arrows:[l.a.createElement("path",{d:"M377.458 79.962l7.5-15 7.5 15h-15z"})]},l.a.createElement("path",{d:"M444.958 424.962h20a9.997 9.997 0 0010-10v-210c0-5.522-4.477-10-10-10h-70c-5.523 0-10 4.478-10 10v110c0 5.523-4.477 10-10 10H239.956c-13.806 0-24.998 11.192-24.998 24.998v.002a25 25 0 01-25 25h-45c-16.569 0-30-13.431-30-30v-90c0-16.568 13.431-30 30-30h47.5a22.5 22.5 0 0122.5 22.5s0 0 0 0c0 12.427 10.074 22.5 22.5 22.5h57.5v-100c0-5.522 4.477-10 10-10h69.976c5.536 0 10.024-4.487 10.024-10.023V76.962"}))}throw new Error("Unknown route")}var v=function(){for(var e=Object(r.useContext)(I),t=[],a=[],n=function(){var n=o[c],r=!e.state.selectedPointOfInterest||e.state.selectedPointOfInterest&&e.state.selectedPointOfInterest.routeNumbers.filter((function(e){return e===n})).length>0,l=b(n,r);r?t.push(l):a.push(l)},c=0,o=[22,21,13,12,10,5,2,1];c<o.length;c++)n();return l.a.createElement("g",null,a,t)},x=function(e){return l.a.createElement("text",{style:{fontFamily:"interstate, sans-serif",fontWeight:800,fontSize:12,textTransform:"uppercase"},x:e.x,y:e.y,transform:!0===e.rotate?"rotate(90 ".concat(e.x," ").concat(e.y,")"):"rotate(0)"},e.children)},p=function(){return Object(r.useContext)(I).state.showStreets?l.a.createElement(r.Fragment,null,l.a.createElement(x,{x:370,y:235,rotate:!0},"Goodwin"),l.a.createElement(x,{x:485,y:310,rotate:!0},"Lincoln"),l.a.createElement(x,{x:90,y:330,rotate:!0},"First"),l.a.createElement(x,{x:160,y:58},"White"),l.a.createElement(x,{x:420,y:105},"Springfield"),l.a.createElement(x,{x:410,y:170},"Green"),l.a.createElement(x,{x:300,y:340},"Gregory")):null},g=function(){var e=Object(r.useContext)(I).state.fullScreen?{position:"fixed",top:0,right:0,bottom:0,left:0}:{};return l.a.createElement("div",{className:"map",style:e},l.a.createElement(f,null),l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",strokeLinecap:"round",strokeMiterlimit:"1.5",clipRule:"evenodd",viewBox:"0 0 740 665"},l.a.createElement(p,null),l.a.createElement(h,null),l.a.createElement(v,null),l.a.createElement(d,null),l.a.createElement(y,null)))},N=(a(14),function(e){var t,a=Object(r.useContext)(I),c=(null===(t=a.state.selectedPointOfInterestCategory)||void 0===t?void 0:t.name)===e.name;return l.a.createElement("button",{disabled:c,onClick:function(){console.log("click"),a.dispatch({type:n.SelectPointOfInterestCategory,category:e})},className:c?"open":"closed"},l.a.createElement("i",{className:"material-icons"},e.icon),e.name)}),C=(a(15),function(){var e=Object(r.useContext)(I);return l.a.createElement("button",{className:"clear-button",onClick:function(){e.dispatch({type:n.Clear})}},l.a.createElement("i",{className:"material-icons"},"arrow_back"))}),S=function(e){var t,a=Object(r.useContext)(I),c=(null===(t=a.state.selectedPointOfInterest)||void 0===t?void 0:t.name)===e.name;return l.a.createElement("button",{disabled:c,className:c?"selected":"unselected",onClick:function(){a.dispatch({type:n.SelectPointOfInterest,poi:e})}},l.a.createElement("i",{className:"material-icons"},c?"check_box":"check_box_outline_blank"),e.name)},O=function(){var e,t,a=Object(r.useContext)(I),n=null!==a.state.selectedPointOfInterestCategory;return l.a.createElement("div",{className:"points-of-interest ".concat(n?"open":"closed")},l.a.createElement("div",{className:"title"},l.a.createElement(C,null),l.a.createElement("h2",null,null===(e=a.state.selectedPointOfInterestCategory)||void 0===e?void 0:e.name)),l.a.createElement("ul",{className:"points-of-interest-list"},n?null===(t=a.state.selectedPointOfInterestCategory)||void 0===t?void 0:t.pointsOfInterest.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement(S,e))})):null))},k=(a(16),function(e){return l.a.createElement("label",{className:"toggle",tabIndex:0,onKeyUp:function(t){" "!==t.key&&"Enter"!==t.key||e.changeCallback(!e.checked)}},l.a.createElement("input",{type:"checkbox",checked:e.checked,onChange:function(t){e.changeCallback(t.target.checked)}}),l.a.createElement("i",{className:"material-icons"},e.checked?"toggle_on":"toggle_off"),e.children)}),M=function(){var e=Object(r.useContext)(I);return l.a.createElement("div",{className:"picker"},l.a.createElement("ul",{className:"category-list"},e.state.pointOfInterestCategories.map((function(e){return l.a.createElement("li",{className:"category",key:e.name},l.a.createElement(N,e))}))),l.a.createElement("div",{className:"toggles"},l.a.createElement(k,{checked:e.state.showStreets,changeCallback:function(t){e.dispatch({type:n.SetShowStreets,showStreets:t})}},"Show Streets"),l.a.createElement(k,{checked:e.state.showLabels,changeCallback:function(t){e.dispatch({type:n.SetShowLabels,showLabels:t})}},"Show Labels")),l.a.createElement(O,null))},w=function(){return l.a.createElement("div",{className:"container"},l.a.createElement(M,null),l.a.createElement(g,null))},I=Object(r.createContext)({dispatch:function(){},state:Object(m.a)({},u)});var P=function(){var e=Object(r.useReducer)(i,Object(m.a)({},u)),t=Object(s.a)(e,2),a={state:t[0],dispatch:t[1]};return l.a.createElement(I.Provider,{value:a},l.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(r.StrictMode,null,l.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.99a6945b.chunk.js.map