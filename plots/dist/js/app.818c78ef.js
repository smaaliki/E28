(function(t){function e(e){for(var n,r,o=e[0],l=e[1],d=e[2],c=0,u=[];c<o.length;c++)r=o[c],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(u.length)u.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var p=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),i=a.n(n);i.a},"0cb0":function(t,e,a){},2443:function(t,e,a){},"2e11":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("HomePage")],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Plots")]),a("data-table"),a("line-plot")],1)},o=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"data_div"}},[n("h2",[t._v("Our data is")]),n("table",[t._m(0),n("tbody",t._l(t.myData,(function(e,i){return n("tr",{key:i},[n("td",[t._v(t._s(i+1))]),n("td",[t._v(t._s(e.x))]),n("td",[t._v(t._s(e.y))]),n("td",[n("img",{attrs:{alt:"delete data point",id:"icon",src:a("b32a")},on:{click:function(e){return t.deletePoint(i)}}})])])})),0)]),n("div",{attrs:{id:"point_div"}},[n("label",{attrs:{for:"xpoint"}},[t._v("x:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.tempPoint.x,expression:"tempPoint.x"}],attrs:{type:"text",id:"xpoint"},domProps:{value:t.tempPoint.x},on:{input:function(e){e.target.composing||t.$set(t.tempPoint,"x",e.target.value)}}}),n("br"),n("label",{attrs:{for:"ypoint"}},[t._v("y:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.tempPoint.y,expression:"tempPoint.y"}],attrs:{type:"text",id:"ypoint"},domProps:{value:t.tempPoint.y},on:{input:function(e){e.target.composing||t.$set(t.tempPoint,"y",e.target.value)}}}),n("br"),n("button",{on:{click:function(e){return e.preventDefault(),t.addPoint(e)}}},[t._v("Add Point")])])])])},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{attrs:{id:"dataTable"}},[a("th",[t._v("index")]),a("th",[t._v("x Data")]),a("th",[t._v("y Data")]),a("th",[t._v("Actions")])])}],p={name:"Data",data:function(){return{myData:[{x:1,y:13},{x:2,y:45},{x:3,y:50},{x:4,y:85},{x:5,y:72},{x:6,y:63},{x:7,y:102},{x:8,y:41},{x:9,y:53},{x:10,y:150},{x:11,y:210},{x:12,y:240},{x:13,y:241},{x:14,y:294},{x:15,y:277},{x:16,y:283},{x:17,y:300},{x:18,y:331},{x:19,y:370},{x:20,y:376},{x:21,y:387},{x:22,y:398},{x:23,y:412},{x:24,y:432},{x:25,y:460},{x:26,y:477},{x:27,y:479},{x:28,y:484},{x:29,y:490},{x:30,y:483},{x:31,y:518},{x:32,y:525},{x:33,y:532},{x:34,y:536},{x:35,y:490},{x:36,y:541},{x:37,y:549},{x:38,y:552},{x:39,y:557},{x:40,y:561},{x:41,y:564},{x:42,y:567},{x:43,y:462},{x:44,y:546},{x:45,y:502},{x:46,y:553},{x:47,y:624},{x:48,y:781},{x:49,y:680},{x:50,y:783},{x:51,y:725},{x:52,y:698},{x:53,y:747},{x:54,y:796},{x:55,y:731},{x:56,y:832},{x:57,y:873},{x:58,y:941},{x:59,y:894},{x:60,y:994},{x:61,y:812},{x:62,y:781}],tempPoint:{x:60,y:754}}},mounted:function(){this.$store.commit("setPlotData",this.myData)},methods:{addPoint:function(){var t=this.tempPoint.x,e=this.tempPoint.y;this.$store.commit("addDataPoint",{x:t,y:e})},deletePoint:function(t){this.$store.commit("deleteDataPoint",t)}}},c=p,u=(a("622f"),a("2877")),h=Object(u["a"])(c,l,d,!1,null,"6551af39",null),x=h.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"plot_div"}},[a("h2",[t._v("Plot Settings")]),a("div",[a("label",{attrs:{for:"linecolor"}},[t._v("Line Color:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.lineColor,expression:"settings.lineColor"}],attrs:{type:"color",id:"linecolor"},domProps:{value:t.settings.lineColor},on:{change:t.updateLineColor,input:function(e){e.target.composing||t.$set(t.settings,"lineColor",e.target.value)}}}),a("br"),a("label",{attrs:{for:"linewidth"}},[t._v("Line Width:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.lineWidth,expression:"settings.lineWidth"}],attrs:{type:"text",id:"linewidth"},domProps:{value:t.settings.lineWidth},on:{change:t.updateLineWidth,input:function(e){e.target.composing||t.$set(t.settings,"lineWidth",e.target.value)}}}),a("br")]),a("div",[a("label",{attrs:{for:"dashLength"}},[t._v("Dash Length:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.dashLength,expression:"settings.dashLength"}],attrs:{type:"range",id:"dashLength",min:"1",max:"10",step:"1"},domProps:{value:t.settings.dashLength},on:{change:t.updateLineStyle,__r:function(e){return t.$set(t.settings,"dashLength",e.target.value)}}}),a("br"),a("label",{attrs:{for:"dashSpace"}},[t._v("Dash Space:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.dashSpace,expression:"settings.dashSpace"}],attrs:{type:"range",id:"dashSpace",min:"0",max:"10",step:"1"},domProps:{value:t.settings.dashSpace},on:{change:t.updateLineStyle,__r:function(e){return t.$set(t.settings,"dashSpace",e.target.value)}}})]),a("div",[a("label",{attrs:{for:"xAxisLabel"}},[t._v("x Axis Label:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.xAxisLabel,expression:"settings.xAxisLabel"}],attrs:{type:"text",id:"xAxisLabel"},domProps:{value:t.settings.xAxisLabel},on:{change:t.updatexAxisLabel,input:function(e){e.target.composing||t.$set(t.settings,"xAxisLabel",e.target.value)}}}),a("br"),a("label",{attrs:{for:"yAxisLabel"}},[t._v("y Axis Label:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.yAxisLabel,expression:"settings.yAxisLabel"}],attrs:{type:"text",id:"yAxisLabel"},domProps:{value:t.settings.yAxisLabel},on:{change:t.updateyAxisLabel,input:function(e){e.target.composing||t.$set(t.settings,"yAxisLabel",e.target.value)}}})]),a("div",{attrs:{id:"my_dataviz"}})])])},m=[],g=(a("d81d"),a("5698")),v={name:"Plot",data:function(){return{margin:{top:10,right:30,bottom:40,left:60},settings:{lineColor:"#ff0000",lineWidth:2,xAxisLabel:"days",yAxisLabel:"new cases",dashLength:3,dashSpace:3}}},computed:{plotData:function(){return this.$store.state.plotData},plotWidth:function(){return 600-this.margin.left-this.margin.right},plotHeight:function(){return 400-this.margin.top-this.margin.bottom}},mounted:function(){this.initializePlot()},watch:{plotData:{handler:function(){this.drawPlot()}}},methods:{initializePlot:function(){this.svg=g["e"]("#my_dataviz").append("svg").attr("width",this.plotWidth+this.margin.left+this.margin.right).attr("height",this.plotHeight+this.margin.top+this.margin.bottom).append("g").attr("transform","translate("+this.margin.left+","+this.margin.top+")");var t=g["d"]().domain([0,Math.max.apply(Math,this.plotData.map((function(t){return t.x})))]).range([0,this.plotWidth]).nice();this.svg.append("g").attr("class","xaxis").attr("transform","translate(0,"+this.plotHeight+")").call(g["a"](t));var e=g["d"]().domain([0,Math.max.apply(Math,this.plotData.map((function(t){return t.y})))]).range([this.plotHeight,0]).nice();this.svg.append("g").attr("class","yaxis").call(g["b"](e)),this.svg.append("text").attr("class","xaxis-label").attr("text-anchor","end").attr("x",this.plotWidth).attr("y",this.plotHeight+this.margin.top+20).text(this.settings.xAxisLabel),this.svg.append("text").attr("class","yaxis-label").attr("text-anchor","end").attr("transform","rotate(-90)").attr("y",20-this.margin.left).attr("x",-this.margin.top).text(this.settings.yAxisLabel),this.svg.append("path").datum(this.plotData).attr("fill","none").attr("stroke",this.settings.lineColor).attr("stroke-width",this.settings.lineWidth).style("stroke-dasharray",[this.settings.dashLength,this.settings.dashSpace]).attr("d",g["c"]().x((function(e){return t(e.x)})).y((function(t){return e(t.y)}))).attr("class","chartline")},drawPlot:function(){var t=g["d"]().domain([0,Math.max.apply(Math,this.plotData.map((function(t){return t.x})))]).range([0,this.plotWidth]).nice();this.svg.selectAll(".xaxis").call(g["a"](t));var e=g["d"]().domain([0,Math.max.apply(Math,this.plotData.map((function(t){return t.y})))]).range([this.plotHeight,0]).nice();this.svg.selectAll(".yaxis").call(g["b"](e));var a=this.svg.selectAll(".chartline");a.datum(this.plotData).attr("fill","none").attr("stroke",this.settings.lineColor).attr("stroke-width",this.settings.lineWidth).attr("d",g["c"]().x((function(e){return t(e.x)})).y((function(t){return e(t.y)}))),a.exit().remove()},updateLineColor:function(){var t=this.svg.selectAll(".chartline");t.datum(this.plotData).attr("fill","none").attr("stroke",this.settings.lineColor),t.exit().remove()},updateLineWidth:function(){var t=this.svg.selectAll(".chartline");t.datum(this.plotData).attr("fill","none").attr("stroke-width",this.settings.lineWidth),t.exit().remove()},updateLineStyle:function(){var t=this.svg.selectAll(".chartline");t.datum(this.plotData).attr("fill","none").style("stroke-dasharray",[this.settings.dashLength,this.settings.dashSpace]),t.exit().remove()},updatexAxisLabel:function(){this.svg.select(".xaxis-label").text(this.settings.xAxisLabel)},updateyAxisLabel:function(){this.svg.select(".yaxis-label").text(this.settings.yAxisLabel)}}},f=v,A=(a("5cec"),Object(u["a"])(f,y,m,!1,null,"2ba3d3c9",null)),b=A.exports,L={name:"Plot",components:{"data-table":x,"line-plot":b}},P=L,_=(a("b856"),Object(u["a"])(P,r,o,!1,null,"5480acee",null)),w=_.exports,D={name:"App",components:{HomePage:w}},S=D,M=(a("034f"),Object(u["a"])(S,i,s,!1,null,null,null)),k=M.exports,C=(a("a434"),a("2f62"));n["a"].use(C["a"]);var N=new C["a"].Store({state:{plotData:[]},mutations:{setPlotData:function(t,e){t.plotData=e},addDataPoint:function(t,e){t.plotData.push(e)},deleteDataPoint:function(t,e){t.plotData.splice(e,1)}}});n["a"].config.productionTip=!1,new n["a"]({store:N,render:function(t){return t(k)}}).$mount("#app")},"5cec":function(t,e,a){"use strict";var n=a("2443"),i=a.n(n);i.a},"622f":function(t,e,a){"use strict";var n=a("0cb0"),i=a.n(n);i.a},"85ec":function(t,e,a){},b32a:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkBBkLAhC6RNDmAAABDklEQVQ4y+3TzSrEYRgF8N/M/EdENE2MnSI1aEwpKXtj4TLcAVnIwsIVuARLWckkcQMWNhK3oJTUyMdMZsZi/jPmu2ysnGfzdJ5zes/7RSuSzpVUwyrKS7QKom2GPWTMhLUobrdVEDS6MVFk5T01za/kJFBWaLZNu2/E6FV3piACjrClojeiDhVt1iMNevSsP15q26+tsOTSgK8+8sCnNbd1Axk3VvsYrmU9NBNpH2G3IMCkFOLmQ7Zktvs9cGYZO7ax4rQzWztiAsTCaazzuH6Jf8MfGaqqXfs2/LyldUOYk8awXMg23lIdCRXJnjlSykZrbaRBXni3762LfMSBwEY7PeHEa9ffXHBsvC77BhPNTnbknRNWAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA0LTI1VDExOjAyOjE2KzAwOjAwoIf7qwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wNC0yNVQxMTowMjoxNiswMDowMNHaQxcAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"},b856:function(t,e,a){"use strict";var n=a("2e11"),i=a.n(n);i.a}});
//# sourceMappingURL=app.818c78ef.js.map