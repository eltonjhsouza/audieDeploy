(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[35],{"33e7":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-card",{staticClass:"q-pa-sm text-white",staticStyle:{"background-color":"#38b1c5"}},[i("q-card-section",{staticClass:"text-h6"},[e._v("\n    Line Bar\n  ")]),i("q-card-section",{staticClass:"q-pa-none q-pt-md"},[i("IEcharts",{ref:"barRef",staticStyle:{height:"300px"},attrs:{option:e.line_chart,resizable:!0},on:{ready:e.onReady}})],1)],1)},n=[],s=i("ce44"),o={name:"LineChart",data:function(){return{ins:null,line_chart:{},bar:{}}},methods:{onReady:function(e,t){this.echarts=t,this.line_chart={tooltip:{show:!0},title:{show:!0,textStyle:{color:"rgba(0, 0, 0 , .87)",fontFamily:"sans-serif"}},grid:{containLabel:!0,left:"0",bottom:"0",right:"0"},xAxis:{show:!1,type:"category",axisLine:{lineStyle:{color:"rgba(0, 0, 0 , .54)",type:"dashed"}},axisTick:{show:!0,alignWithLabel:!0,lineStyle:{show:!0,color:"rgba(0, 0, 0 , .54)",type:"dashed"}},axisLabel:{show:!1},boundaryGap:!1},yAxis:{show:!1,type:"value",axisLine:{lineStyle:{color:"rgba(0, 0, 0 , .54)",type:"dashed"}},axisLabel:{show:!1},splitLine:{lineStyle:{type:"dashed"}},axisTick:{show:!0,lineStyle:{show:!0,color:"rgba(0, 0, 0 , .54)",type:"dashed"}}},series:[{type:"line",areaStyle:{},smooth:!1}],dataset:{source:[{month:"Jan","Unique Visit":296,"Page View":548},{month:"Feb","Unique Visit":1181,"Page View":714},{month:"Mar","Unique Visit":235,"Page View":961},{month:"Apr","Unique Visit":294,"Page View":580},{month:"May","Unique Visit":765,"Page View":730},{month:"Jun","Unique Visit":412,"Page View":1249},{month:"Jul","Unique Visit":1125,"Page View":267},{month:"Aug","Unique Visit":800,"Page View":251},{month:"Sep","Unique Visit":948,"Page View":1043},{month:"Oct","Unique Visit":1046,"Page View":1118},{month:"Nov","Unique Visit":363,"Page View":573},{month:"Dec","Unique Visit":909,"Page View":283}]},color:["#45c2c5"]}}},components:{IEcharts:s["a"]}},r=o,l=i("2877"),c=i("f09f"),h=i("a370"),u=i("eebe"),w=i.n(u),d=Object(l["a"])(r,a,n,!1,null,"79477ff1",null);t["default"]=d.exports;w()(d,"components",{QCard:c["a"],QCardSection:h["a"]})}}]);