(function(e){function t(t){for(var s,o,a=t[0],p=t[1],u=t[2],c=0,d=[];c<a.length;c++)o=a[c],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(s in p)Object.prototype.hasOwnProperty.call(p,s)&&(e[s]=p[s]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],s=!0,a=1;a<r.length;a++){var p=r[a];0!==n[p]&&(s=!1)}s&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var s={},n={app:0},i=[];function o(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=s,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(r,s,function(t){return e[t]}.bind(null,s));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],p=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=p;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"2d49":function(e,t,r){"use strict";var s=r("86d5"),n=r.n(s);n.a},"4cf2":function(e,t,r){"use strict";var s=r("c699"),n=r.n(s);n.a},"4e68":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("img",{attrs:{alt:"SPRs logo",id:"logo",src:r("9d64")}}),s("nav",[s("ul",e._l(e.links,(function(t){return s("li",{key:t},[s("router-link",{attrs:{to:{name:t},exact:""}},[e._v(" "+e._s(t)+" "),"SPRs"==t?s("span",[e._v("("+e._s(e.sprCount)+")")]):e._e()])],1)})),0)]),s("router-view")],1)},i=[],o=(r("7db0"),r("4160"),r("159b"),r("96cf"),r("1da1")),a=r("d4ec"),p=r("bee2"),u=r("59ca"),l=(r("e71f"),function(){function e(t){Object(a["a"])(this,e),u["initializeApp"]({apiKey:t.apiKey,authDomain:t.projectId+".firebaseapp.com",databaseURL:"https://"+t.projectId+".firebaseio.com",projectId:t.projectId}),this.api=u["firestore"]()}return Object(p["a"])(e,[{key:"find",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,r,s){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.collection(t).where(r,"==",s).get();case 3:return n=e.sent,e.abrupt("return",n.docs.shift().data());case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return","Error getting documents: "+e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t,r,s){return e.apply(this,arguments)}return t}()},{key:"count",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,r,s){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.collection(t).where(r,"==",s).get();case 3:return n=e.sent,e.abrupt("return",n.size);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return","Error getting documents: "+e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t,r,s){return e.apply(this,arguments)}return t}()},{key:"totalCount",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.collection(t).get();case 3:return r=e.sent,e.abrupt("return",r.size);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return","Error getting documents: "+e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"get",value:function(e,t){return this.find(e,"id",t)}},{key:"all",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=[],e.next=3,this.api.collection(t).get();case 3:return s=e.sent,s.forEach((function(e){var t=e.data();t.id=e.id,r.push(t)})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"add",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,r){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.collection(t).add(r);case 3:return s=e.sent,e.abrupt("return",s.id);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return","Error adding document: "+e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,r,s){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.api.collection("sprs").where("slug","==",r).get().then((function(e){return e.docs[0].ref.set(s)})).then((function(){console.log("Successfully updated the record")})).catch((function(e){console.error("There was an error editing the record: "+e)}));case 1:case"end":return e.stop()}}),e,this)})));function t(t,r,s){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(e,t){this.api.collection(e).doc(t).delete()}}]),e}()),c={firebase:{apiKey:"AIzaSyCNdGcoveaNg9PNOz2rd-iJyIhNRL9Lr_E",projectId:"e28-sprs"}},d=new l({apiKey:c.firebase.apiKey,projectId:c.firebase.projectId}),v={name:"App",data:function(){return{links:["Home","SPRs","Dashboard"],sharedState:void 0}},components:{},mounted:function(){var e=this,t=0;d.totalCount("sprs").then((function(r){t=r,e.$store.commit("setSPRCount",t),e.$store.dispatch("setSPRs")}))},computed:{sprCount:function(){return this.$store.state.sprCount}}},m=v,h=(r("5c0b"),r("2877")),f=Object(h["a"])(m,n,i,!1,null,null,null),A=f.exports,y=r("8c4f"),g=r("1dce"),_=r.n(g),b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("E28: Project 3")]),r("h2",[e._v("System Problem Reports")]),r("h3",[e._v("Overview")]),r("p",[e._v("This system is an online repository for System Problem Reports (SPR). Issues that are found while using production systems can be reported by system users. These are then tracked by Project Managers and devleopers to prioritize the SPRs for resolution. ")]),r("h3",[e._v("SPR Data Structure")]),r("p",[e._v("Each System Problem Report (SPRs) will consist of the following data structure:")]),e._m(0),r("h3",[e._v("Using this system")]),r("p",[e._v("These are the things that you can currently do in the system.")]),r("ul",[r("li",[e._v("To view SPRs currently in the system, visit the SPRs page.")]),r("li",[e._v("To add an SPR, go to the SPRs page and click on the Add SPR button above the table.")]),r("li",[e._v("To edit an SPR, click on the Edit icon for that SPR.")]),r("li",[e._v("To delete an SPR, click on the Delete icon for that SPR.")]),r("li",[e._v("To view a simple dashboard of the SPRs, go to the Dashboard link in the menu.")]),r("li",[e._v("To re-seed the data, visit the "),r("router-link",{attrs:{to:{name:"admin"}}},[e._v("Admin")]),e._v(" page")],1)]),r("h3",[e._v("Things I'd like to improve:")]),e._m(1)])},w=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("Problem Title")]),r("li",[e._v("Problem Description")]),r("li",[e._v("Reported by")]),r("li",[e._v("Type: New Feature / Issue / Enhancement ")]),r("li",[e._v("Priority: High / Medium / Low")]),r("li",[e._v("Status: New / Verified / In Progress / Complete")]),r("li",[e._v("Resolution")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("Sorting the columns in the SPR table")]),r("li",[e._v("Automatically create the slug based on the title")]),r("li",[e._v("Display the SPR info when a user hovers over the SPR title")]),r("li",[e._v("Change the dashboard to a graphical one, rather than just numbers")]),r("li",[e._v("Add a filter to filter SPRs in the table")]),r("li",[e._v("Add date created, and date resolved for SPRs")])])}],R={name:"",components:{},data:function(){return{}}},S=R,P=(r("f6d5"),Object(h["a"])(S,b,w,!1,null,"f314cd28",null)),$=P.exports,k=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("p",[e._v("Below is the list of the System Problem Reports (SPRs) that have been reported through the system.")]),s("div",{attrs:{id:"SPRs"}},[s("h2",{staticStyle:{float:"left"}},[e._v("SPRs")]),s("router-link",{attrs:{to:{name:"addSpr"}}},[s("button",{staticStyle:{float:"right"},attrs:{"data-test":"add-spr-button"}},[e._v("Add SPR")])])],1),s("table",{attrs:{id:"firstTable"}},[s("thead",e._l(e.columns,(function(t){return s("th",{key:t.slug},[e._v(e._s(t))])})),0),s("tbody",e._l(e.sprs,(function(t){return s("tr",{key:t.id},[s("td",[e._v("SPR_"+e._s(t.index))]),s("td",{attrs:{"data-test":"spr-title"}},[e._v(e._s(t.title))]),s("td",[e._v(e._s(t.description))]),s("td",[e._v(e._s(t.priority))]),s("td",[e._v(e._s(t.status))]),s("td",[s("router-link",{attrs:{"data-test":"view-spr",to:{name:"viewSpr",params:{spr:t}}}},[s("img",{attrs:{alt:"view spr",id:"icon",src:r("7f61")}})]),s("router-link",{attrs:{"data-test":"edit-spr",to:{name:"spr",params:{slug:t.slug}}}},[s("img",{attrs:{alt:"edit spr",id:"icon",src:r("8170")}})]),s("img",{attrs:{"data-test":"delete-spr",alt:"delete spr",id:"icon",src:r("b32a")},on:{click:function(r){return e.deleteSPR(t.id)}}})],1)])})),0)]),e._m(0)])},x=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._v(" Icons made by "),r("a",{attrs:{href:"https://www.flaticon.com/authors/kiranshastry",title:"Kiranshastry"}},[e._v("Kiranshastry")]),e._v(" from "),r("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[e._v(" www.flaticon.com")])])}],B={name:"",components:{},data:function(){return{myIndex:0,columns:["id","title","description","priority","status","actions"],ascending:!1,sortColumn:""}},methods:{deleteSPR:function(e){d.delete("sprs",e),this.$store.commit("updateSPRCount",-1),this.$store.dispatch("setSPRs")}},computed:{sprs:function(){return this.$store.state.sprs}}},N=B,E=(r("4cf2"),Object(h["a"])(N,k,x,!1,null,"9bb46f4e",null)),j=E.exports,C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",[e._v("Below is the dashboard regarding the System Problem Reports (SPRs) in the system.")]),r("numbers-dash")],1)},T=[],I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[r("h2",[e._v("Type")]),r("p",[e._v("New Feature: "+e._s(e.type[0]))]),r("p",[e._v("Enhancement: "+e._s(e.type[1]))]),r("p",[e._v("Issue: "+e._s(e.type[2]))])]),r("div",[r("h2",[e._v("Priority")]),r("p",[e._v("High: "+e._s(e.priority[0]))]),r("p",[e._v("Medium: "+e._s(e.priority[1]))]),r("p",[e._v("Low: "+e._s(e.priority[2]))])]),r("div",[r("h2",[e._v("Status")]),r("p",[e._v("New: "+e._s(e.status[0]))]),r("p",[e._v("Verified: "+e._s(e.status[1]))]),r("p",[e._v("Resolved: "+e._s(e.status[2]))]),r("p",[e._v("Rejected: "+e._s(e.status[3]))])])])},L=[],M=(r("d81d"),r("b64b"),{name:"",components:{},data:function(){return{}},computed:{type:function(){var e=this,t=[0,0,0];return Object.keys(this.sprs).map((function(r){"New Feature"==e.sprs[r].type?t[0]++:"Enhancement"==e.sprs[r].type?t[1]++:"Issue"==e.sprs[r].type&&t[2]++})),t},priority:function(){var e=this,t=[0,0,0];return Object.keys(this.sprs).map((function(r){"High"==e.sprs[r].priority?t[0]++:"Medium"==e.sprs[r].priority?t[1]++:"Low"==e.sprs[r].priority&&t[2]++})),t},status:function(){var e=this,t=[0,0,0,0];return Object.keys(this.sprs).map((function(r){"New"==e.sprs[r].status?t[0]++:"Verified"==e.sprs[r].status?t[1]++:"Resolved"==e.sprs[r].status?t[2]++:"Rejected"==e.sprs[r].status&&t[3]++})),t},sprs:function(){return this.$store.state.sprs}}}),O=M,U=Object(h["a"])(O,I,L,!1,null,"252b5f0a",null),Q=U.exports,D={name:"",components:{"numbers-dash":Q},data:function(){return{}}},H=D,F=Object(h["a"])(H,C,T,!1,null,"47cdc378",null),V=F.exports,q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Admin")]),r("em",[e._v(" Disclaimer: This functionality is for demonstration purposes only. In a real-world application, this functionality must be locked down to administrators only. ")]),r("button",{on:{click:e.clearApi}},[e._v("Clear API")]),r("button",{on:{click:e.seedApi}},[e._v("Seed API")]),e.message?r("div",{staticClass:"alert"},[e._v(e._s(e.message))]):e._e()])},J=[],z=[{index:1,slug:"unauthorized-admin-page-login",title:"Unauthorized Admin Page Login",description:"The admin page is accessible by the public! This needs to be addressed immediately as it is a high risk.",reportedBy:"Samer",priority:"High",status:"New",type:"Issue",resolution:""},{index:2,slug:"missign-cjm-process",title:"Missing Customer Journey Map Task",description:"The system is missing the capability to add Customer Journey Maps to the services.",reportedBy:"Joni Mitchel",priority:"Medium",status:"New",type:"New Feature",resolution:""},{index:3,slug:"include-service-id-in-export",title:"Include Service ID in Export",description:"When exporting the services in the system, the service ID should also be exported so that we can always reference to the crrect servcie.",reportedBy:"Cat Stevens",priority:"Low",status:"Resolved",type:"Enhancement",resolution:"Added the Service ID column to the export file."},{index:4,slug:"profile-picture-not-updating",title:"Profile picture not updating",description:"Users reported that when they try to update their profile picture, the system tells them picture saved, but it is not really saved.  The old picture is retained.",reportedBy:"Jimi Hendrix",priority:"Low",status:"New",type:"Issue",resolution:""},{index:5,slug:"cjm-download-is-not-working",title:"CJM download is not working",description:"When users click on the download icon for CJMs, nothing happens.",reportedBy:"Jack Black",priority:"Medium",status:"Verified",type:"Issue",resolution:""},{index:6,slug:"logo-update",title:"Logo needs to be updated to the new one.",description:"Some pages still have the old logo. The new one needs to be used in all pages.",reportedBy:"Eric Clapton",priority:"High",status:"New",type:"New Feature",resolution:""}],Z={name:"",data:function(){return{message:"",collections:{sprs:z}}},methods:{clearApi:function(){var e=function(e){d.all(e).then((function(t){Object.keys(t).forEach((function(r){d.delete(e,t[r].id)}))}))};for(var t in this.collections)e(t);this.message="Clearing API"},seedApi:function(){for(var e in this.collections)for(var t in this.collections[e])d.add(e,this.collections[e][t]);this.message="Seeding API"}}},K=Z,G=(r("7a8c"),Object(h["a"])(K,q,J,!1,null,"17b8c5a6",null)),X=G.exports,Y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.spr?r("div",{attrs:{id:"spr-page"}},[r("h1",[e._v("View SPR")]),r("label",{attrs:{for:"title"}},[e._v("Title")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.spr.title,expression:"spr.title"}],attrs:{type:"text",id:"title"},domProps:{value:e.spr.title},on:{input:function(t){t.target.composing||e.$set(e.spr,"title",t.target.value)}}}),r("label",{attrs:{for:"slug"}},[e._v("URL Identifier:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.spr.slug,expression:"spr.slug"}],attrs:{type:"text",id:"slug"},domProps:{value:e.spr.slug},on:{input:function(t){t.target.composing||e.$set(e.spr,"slug",t.target.value)}}}),r("label",{attrs:{for:"description"}},[e._v("Description:")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.spr.description,expression:"spr.description"}],attrs:{id:"description"},domProps:{value:e.spr.description},on:{input:function(t){t.target.composing||e.$set(e.spr,"description",t.target.value)}}}),r("label",{attrs:{for:"reportedBy"}},[e._v("Reported By:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.spr.reportedBy,expression:"spr.reportedBy"}],attrs:{type:"text",id:"reportedBy"},domProps:{value:e.spr.reportedBy},on:{input:function(t){t.target.composing||e.$set(e.spr,"reportedBy",t.target.value)}}}),r("label",{attrs:{for:"priority"}},[e._v("Priority:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.spr.priority,expression:"spr.priority"}],attrs:{type:"radio",value:"High"},domProps:{checked:e._q(e.spr.priority,"High")},on:{change:function(t){return e.$set(e.spr,"priority","High")}}}),e._v("High "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.spr.priority,expression:"spr.priority"}],attrs:{type:"radio",value:"Medium"},domProps:{checked:e._q(e.spr.priority,"Medium")},on:{change:function(t){return e.$set(e.spr,"priority","Medium")}}}),e._v("Medium "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.spr.priority,expression:"spr.priority"}],attrs:{type:"radio",value:"Low"},domProps:{checked:e._q(e.spr.priority,"Low")},on:{change:function(t){return e.$set(e.spr,"priority","Low")}}}),e._v("Low "),r("br"),r("label",{attrs:{for:"type"}},[e._v("Type:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.spr.type,expression:"spr.type"}],attrs:{type:"radio",value:"New Feature"},domProps:{checked:e._q(e.spr.type,"New Feature")},on:{change:function(t){return e.$set(e.spr,"type","New Feature")}}}),e._v("New Feature "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.spr.type,expression:"spr.type"}],attrs:{type:"radio",value:"Enhancement"},domProps:{checked:e._q(e.spr.type,"Enhancement")},on:{change:function(t){return e.$set(e.spr,"type","Enhancement")}}}),e._v("Enhancement "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.spr.type,expression:"spr.type"}],attrs:{type:"radio",value:"Issue"},domProps:{checked:e._q(e.spr.type,"Issue")},on:{change:function(t){return e.$set(e.spr,"type","Issue")}}}),e._v("Issue "),r("br"),r("label",{attrs:{for:"status"}},[e._v("Status:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.spr.status,expression:"spr.status"}],attrs:{id:"status",name:"status"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.spr,"status",t.target.multiple?r:r[0])}}},e._l(e.spr_status,(function(t){return r("option",{key:t.id},[e._v(e._s(t))])})),0),r("br"),r("input",{attrs:{type:"submit",value:"Save"},on:{click:function(t){return t.preventDefault(),e.saveEdits(t)}}}),r("transition",{attrs:{name:"fade"}},[e.saved?r("div",{staticClass:"alert"},[e._v("SPR was saved!")]):e._e()]),r("p",[r("router-link",{attrs:{to:{name:"SPRs"}}},[e._v("← Return to SPRs list")])],1)],1):e._e()},W=[],ee={name:"",props:["slug"],data:function(){return{saved:!1,spr_status:["New","Verified","Resolved","Rejected"]}},methods:{saveEdits:function(){var e=this;d.update("sprs",this.spr.slug,this.spr).then((function(t){console.log(t),e.saved=!0,setTimeout((function(){return e.saved=!1}),3e3)}))}},computed:{spr:function(){return this.$store.getters.getSPRBySlug(this.slug)}}},te=ee,re=(r("7e2c"),Object(h["a"])(te,Y,W,!1,null,"a2373800",null)),se=re.exports,ne=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Add an SPR")]),r("label",{attrs:{for:"title"}},[e._v("Title")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.spr.title.$model,expression:"$v.spr.title.$model"}],class:{"form-input-error":e.$v.spr.title.$error},attrs:{type:"text",id:"title","data-test":"spr-title-input"},domProps:{value:e.$v.spr.title.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.spr.title,"$model",t.target.value)}}}),r("small",{staticClass:"form-help"},[e._v("Min: 5 chars")]),e.$v.spr.title.$error?r("div",[e.$v.spr.title.required?e._e():r("div",{staticClass:"form-feedback-error"},[e._v("SPR title is required.")]),e.$v.spr.title.minLength?e._e():r("div",{staticClass:"form-feedback-error"},[e._v("SPR title must be at least 5 characters long.")])]):e._e(),r("label",{attrs:{for:"slug"}},[e._v("URL Identifier:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.spr.slug.$model,expression:"$v.spr.slug.$model"}],class:{"form-input-error":e.$v.spr.slug.$error},attrs:{type:"text",id:"slug","data-test":"spr-slug-input"},domProps:{value:e.$v.spr.slug.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.spr.slug,"$model",t.target.value)}}}),r("small",{staticClass:"form-help"},[e._v("Min: 5 chars")]),e.$v.spr.slug.$error?r("div",[e.$v.spr.slug.required?e._e():r("div",{staticClass:"form-feedback-error"},[e._v("SPR slug is required.")]),e.$v.spr.slug.minLength?e.$v.spr.slug.doesNotExist?e._e():r("div",{staticClass:"form-feedback-error"},[e._v("This URL identifier is not available.")]):r("div",{staticClass:"form-feedback-error"},[e._v("SPR slug must be at least 5 characters long.")])]):e._e(),r("label",{attrs:{for:"description"}},[e._v("Description:")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.$v.spr.description.$model,expression:"$v.spr.description.$model"}],class:{"form-input-error":e.$v.spr.description.$error},attrs:{id:"description","data-test":"spr-description-textarea"},domProps:{value:e.$v.spr.description.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.spr.description,"$model",t.target.value)}}}),r("small",{staticClass:"form-help"},[e._v("Min: 25 chars")]),e.$v.spr.description.$error?r("div",[e.$v.spr.description.required?e._e():r("div",{staticClass:"form-feedback-error"},[e._v("SPR description is required.")]),e.$v.spr.description.minLength?e._e():r("div",{staticClass:"form-feedback-error"},[e._v("SPR description must be at least 25 characters long.")])]):e._e(),r("label",{attrs:{for:"reportedBy"}},[e._v("Reported By:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.spr.reportedBy.$model,expression:"$v.spr.reportedBy.$model"}],class:{"form-input-error":e.$v.spr.reportedBy.$error},attrs:{type:"text",id:"reportedBy","data-test":"spr-reportedBy-input"},domProps:{value:e.$v.spr.reportedBy.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.spr.reportedBy,"$model",t.target.value)}}}),r("small",{staticClass:"form-help"},[e._v("Min: 25 chars")]),e.$v.spr.reportedBy.$error?r("div",[e.$v.spr.reportedBy.required?e._e():r("div",{staticClass:"form-feedback-error"},[e._v("SPR reportedBy is required.")]),e.$v.spr.reportedBy.minLength?e._e():r("div",{staticClass:"form-feedback-error"},[e._v("SPR reportedBy must be at least 25 characters long.")])]):e._e(),r("label",{attrs:{for:"priority"}},[e._v("Priority:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.spr.priority,expression:"spr.priority"}],attrs:{type:"radio",value:"High"},domProps:{checked:e._q(e.spr.priority,"High")},on:{change:function(t){return e.$set(e.spr,"priority","High")}}}),e._v("High "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.spr.priority,expression:"spr.priority"}],attrs:{type:"radio",value:"Medium"},domProps:{checked:e._q(e.spr.priority,"Medium")},on:{change:function(t){return e.$set(e.spr,"priority","Medium")}}}),e._v("Medium "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.spr.priority,expression:"spr.priority"}],attrs:{type:"radio",value:"Low"},domProps:{checked:e._q(e.spr.priority,"Low")},on:{change:function(t){return e.$set(e.spr,"priority","Low")}}}),e._v("Low "),r("br"),r("label",{attrs:{for:"type"}},[e._v("Type:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.spr.type,expression:"spr.type"}],attrs:{type:"radio",value:"New Feature"},domProps:{checked:e._q(e.spr.type,"New Feature")},on:{change:function(t){return e.$set(e.spr,"type","New Feature")}}}),e._v("New Feature "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.spr.type,expression:"spr.type"}],attrs:{type:"radio",value:"Enhancement"},domProps:{checked:e._q(e.spr.type,"Enhancement")},on:{change:function(t){return e.$set(e.spr,"type","Enhancement")}}}),e._v("Enahncement "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.spr.type,expression:"spr.type"}],attrs:{type:"radio",value:"Issue"},domProps:{checked:e._q(e.spr.type,"Issue")},on:{change:function(t){return e.$set(e.spr,"type","Issue")}}}),e._v("Issue "),r("br"),r("label",{attrs:{for:"status"}},[e._v("Status:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.spr.status,expression:"spr.status"}],attrs:{id:"status",name:"status"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.spr,"status",t.target.multiple?r:r[0])}}},e._l(e.spr_status,(function(t){return r("option",{key:t.id},[e._v(e._s(t))])})),0),r("br"),r("button",{attrs:{"data-test":"add-spr-button"},on:{click:function(t){return t.preventDefault(),e.addSPR(t)}}},[e._v("Add SPR")]),e.$v.$anyError?r("div",{staticClass:"form-feedback-error"},[e._v("Please correct the above errors")]):e._e(),r("transition",{attrs:{name:"fade"}},[e.saved?r("div",{staticClass:"alert",attrs:{"data-test":"spr-added-confirmation"}},[e._v("SPR was saved!")]):e._e()]),r("p",[r("router-link",{attrs:{"data-test":"return-to-sprs",to:{name:"SPRs"}}},[e._v("← Return to SPRs list")])],1)],1)},ie=[],oe=r("b5ae"),ae={name:"",props:["slug"],data:function(){return{saved:!1,spr:{index:0,title:"",slug:"",priority:"Low",status:"New",reportedBy:"",type:"Enhancement",description:""},spr_status:["New","Verified","Resolved","Rejected"]}},validations:{spr:{title:{required:oe["required"],minLength:Object(oe["minLength"])(5)},slug:{required:oe["required"],minLength:Object(oe["minLength"])(5),doesNotExist:function(e){return!this.$store.getters.getSPRBySlug(e)}},reportedBy:{required:oe["required"],minLength:Object(oe["minLength"])(5)},description:{required:oe["required"],minLength:Object(oe["minLength"])(25)}}},methods:{addSPR:function(){var e=this;this.$v.$touch(),0==this.$v.$anyError&&(this.$v.$reset(),d.all("sprs").then((function(t){e.spr.index=t.length+1,d.add("sprs",e.spr).then((function(t){console.log("SPR with ID ",t," was saved"),e.saved=!0,setTimeout((function(){return e.saved=!1}),3e3),e.spr={index:0,title:"",slug:"",priority:"Low",status:"New",reportedBy:"",type:"Enhancement",description:""}})),e.$store.commit("updateSPRCount",1),e.$store.dispatch("setSPRs")})))}}},pe=ae,ue=(r("e799"),Object(h["a"])(pe,ne,ie,!1,null,"fb2c3e42",null)),le=ue.exports,ce=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.spr?r("div",{attrs:{id:"spr-page"}},[r("h1",[e._v("View SPR")]),r("h4",[e._v("Title")]),r("p",[e._v(e._s(e.spr.title))]),r("h4",[e._v("URL Identifier")]),r("p",[e._v(e._s(e.spr.slug))]),r("h4",[e._v("Description")]),r("p",[e._v(e._s(e.spr.description))]),r("h4",[e._v("Reported By")]),r("p",[e._v(e._s(e.spr.reportedBy))]),r("h4",[e._v("Priority")]),r("p",[e._v(e._s(e.spr.priority))]),r("h4",[e._v("Type")]),r("p",[e._v(e._s(e.spr.type))]),r("h4",[e._v("Status")]),r("p",[e._v(e._s(e.spr.status))]),r("br"),r("p",[r("router-link",{attrs:{to:{name:"SPRs"}}},[e._v("← Return to SPRs list")])],1)]):e._e()},de=[],ve={name:"",props:["spr"],data:function(){return{spr_status:["New","Verified","Resolved","Rejected"]}}},me=ve,he=(r("2d49"),Object(h["a"])(me,ce,de,!1,null,"5b18feae",null)),fe=he.exports,Ae=r("2f62");s["a"].use(Ae["a"]);var ye=new Ae["a"].Store({state:{sprCount:0,sprs:[]},mutations:{setSPRCount:function(e,t){e.sprCount=t},updateSPRCount:function(e,t){e.sprCount+=t},updateSPRs:function(e,t){e.sprs=t}},actions:{setSPRs:function(e){d.all("sprs").then((function(t){e.commit("updateSPRs",t)}))}},getters:{getSPRBySlug:function(e){return function(t){for(var r=0,s=Object.keys(e.sprs);r<s.length;r++){var n=s[r];if(console.log(t),e.sprs[n].slug==t)return e.sprs[n]}}}}});s["a"].use(y["a"]),s["a"].use(_.a);var ge=[{path:"/",component:$,name:"Home"},{path:"/sprs",component:j,name:"SPRs"},{path:"/dashboard",component:V,name:"Dashboard"},{path:"/admin",component:X,name:"admin"},{path:"/spr/:slug",component:se,name:"spr",props:!0},{path:"/sprs/create",component:le,name:"addSpr"},{path:"/viewSpr/:spr",component:fe,name:"viewSpr",props:!0}];s["a"].config.productionTip=!1;var _e=new y["a"]({routes:ge,mode:"history"});new s["a"]({store:ye,router:_e,render:function(e){return e(A)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var s=r("9c0c"),n=r.n(s);n.a},"6c58":function(e,t,r){},"7a8c":function(e,t,r){"use strict";var s=r("e961"),n=r.n(s);n.a},"7e2c":function(e,t,r){"use strict";var s=r("4e68"),n=r.n(s);n.a},"7f61":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkBQ4QNjND1FhkAAABZ0lEQVQ4y9XSzU5TURQF4K+3iQ9ASShF4siAzIxhQNGZ0jA1wRHgUxj68xT+vEibKAPUmNgQX8CpgAQrbSmJl9hQ0x4HXrFIMU5Zo5191tr7ZO3F1UfqQueaJXNuYM9HW3r/kue8cCQIenqC4Mhzk6PJaWUnBl5aNSUSuW7NKwOxovTf9EnvBO/dxriKmpqyDO6oC97KDtNn7erbEGFRW9DREbTkESnp2zHzmz6n6buHYFzbF0ugoKElA1Z0HZqFKQdi+URcETw421wQlJL6rti+HHWnyUSo6QxZndJRHZKfqkeXXOMyBHL2xRaTRllQOHteFhST+p4Tn3/d5JZDXSsgo6WhICVlWUPTGHik6+sfn2bs6KtII68lOHYsaFpAWsXAJzeH/5b1RrBtHhklVVVFY5i3LXht4mI0NsSCTeumRSLTHtsUfPNENNqDrGfa58LX9vT87FHxvm9BDgc+2PLjvy2/MvgJzr55R2B28VoAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDUtMTRUMTY6NTQ6NTErMDA6MDDKQFvPAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA1LTE0VDE2OjU0OjUxKzAwOjAwux3jcwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="},8170:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkBBkLBQ2WAyr4AAABPUlEQVQ4y6XTMUsbYRzA4SdHLFScBAUHoaSCUXFQpIvgYnBq0UH8AHX1E7iIm1sHo1tEyAcoVJyMliyOVZJBquAkGTIoFBRR8boEMZfTi/h/p7v3+b28HBztTLeCMzuyBG3wXmVZy64cGkkha17/03bFRoTvGzbhCAUDgZwjU89ARwuvK9qVRdEYf6y8cpmqfZ0CW2qGFJW49yWBQ2DLrbrBQNpDLO9RcmnWDQhd+2faX0LjsbyirKvxlLKublSjHX8Ljwte5a1BAo8GH1UdNL4MKZtRHg2+CZ3oa/B8K48Geb+UVPXGn94anPquU0lVIZ43Bxmhz3Lywhg+J0+66dWMRxWPflvyUy0SZIxEgxNr9hy68+I0B2VlCdPOH/feoOZTmzbjgrRtP3xwloDTJi36Ch1WnQsT1r1jC/Afgmd1Ql7tqhgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDQtMjVUMTE6MDU6MTMrMDA6MDAQY891AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA0LTI1VDExOjA1OjEzKzAwOjAwYT53yQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="},"86d5":function(e,t,r){},"9c0c":function(e,t,r){},"9d64":function(e,t,r){e.exports=r.p+"img/logo.cb3ef2f9.png"},b32a:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkBBkLAhC6RNDmAAABDklEQVQ4y+3TzSrEYRgF8N/M/EdENE2MnSI1aEwpKXtj4TLcAVnIwsIVuARLWckkcQMWNhK3oJTUyMdMZsZi/jPmu2ysnGfzdJ5zes/7RSuSzpVUwyrKS7QKom2GPWTMhLUobrdVEDS6MVFk5T01za/kJFBWaLZNu2/E6FV3piACjrClojeiDhVt1iMNevSsP15q26+tsOTSgK8+8sCnNbd1Axk3VvsYrmU9NBNpH2G3IMCkFOLmQ7Zktvs9cGYZO7ax4rQzWztiAsTCaazzuH6Jf8MfGaqqXfs2/LyldUOYk8awXMg23lIdCRXJnjlSykZrbaRBXni3762LfMSBwEY7PeHEa9ffXHBsvC77BhPNTnbknRNWAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA0LTI1VDExOjAyOjE2KzAwOjAwoIf7qwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wNC0yNVQxMTowMjoxNiswMDowMNHaQxcAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"},b3b1:function(e,t,r){},c699:function(e,t,r){},e799:function(e,t,r){"use strict";var s=r("6c58"),n=r.n(s);n.a},e961:function(e,t,r){},f6d5:function(e,t,r){"use strict";var s=r("b3b1"),n=r.n(s);n.a}});
//# sourceMappingURL=app.812f6926.js.map