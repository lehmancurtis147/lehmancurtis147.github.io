(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b549d820"],{"4c53":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"d-flex justify-space-between flex-column flex-grow-1"},[a("div",{staticClass:"mt-n4"},[a("h6",{staticClass:"text-h6 pb-4"},[t._v(" Installation complete ")]),null!==t.$root.$data.release?a("div",{staticClass:"text-body-1"},[a("p",[t._v(" Congratulations! Your "+t._s(t.getDeviceName(t.$root.$data.product))+" is now running "+t._s(t.$root.$data.OS_NAME)+" "+t._s(t.$root.$data.release.version)+". ")]),a("p",[t._v(" If you like "+t._s(t.$root.$data.OS_NAME)+", please consider donating to support development and cover maintenance costs: ")])]):t._e()]),a("div",{staticClass:"d-flex flex-wrap justify-space-around"},t._l(t.$root.$data.DONATION_LINKS,(function(e){return a("v-card",{key:e.url,staticClass:"ma-4 d-flex flex-column",class:e.highlight?"v-card--p-highlight":null,attrs:{outlined:"",rel:"noreferer","max-width":"16rem",ripple:"",href:e.url,target:"_blank"}},[a("v-card-title",[a("div",{staticClass:"pr-2"},[a("img",{staticClass:"d-inline justify-space-between",attrs:{height:"80px",width:"80px",src:n("66ee")}})]),t._v(" "+t._s(e.title)+" ")]),a("v-card-subtitle",[t._v(t._s(e.description))])],1)})),1),a("div",{staticClass:"d-flex justify-space-between"},[a("v-btn",{attrs:{text:""},on:{click:function(e){return t.$bubble("prevStep")}}},[t._v(" Back ")])],1)])},i=[],A=n("1da1"),s=(n("96cf"),n("9dd2")),c={name:"FinishStep",props:["device","blobStore","active"],watch:{active:function(){var t=Object(A["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e&&this.saEvent("step_finish");case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},methods:{getDeviceName:s["a"]}},r=c,o=(n("ccd2"),n("0c7c")),C=n("6544"),l=n.n(C),u=n("8336"),w=n("b0af"),f=n("99d9"),E=n("a523"),p=Object(o["a"])(r,a,i,!1,null,"96a9d7f6",null);e["default"]=p.exports;l()(p,{VBtn:u["a"],VCard:w["a"],VCardSubtitle:f["b"],VCardTitle:f["d"],VContainer:E["a"]})},"66ee":function(t,e){t.exports="data:image/png;base64,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"},"9dd2":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a={U50A_ATT:"5041C",U50A_PLUS_ATT:"5059R",U50A_PLUS_TF:"A502DL",simba6_cricket:"6060C",idol4:"6055",FERMI_TF:"A501DL"};function i(t){return t in a?a[t]:t}},ca89:function(t,e,n){},ccd2:function(t,e,n){"use strict";n("ca89")}}]);
//# sourceMappingURL=chunk-b549d820.532e76e8.js.map