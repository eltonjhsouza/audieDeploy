(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[58],{bd15:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"q-pa-sm"},[a("div",{staticClass:"row q-col-gutter-sm q-py-sm"},[a("div",{staticClass:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},[a("bar-chart")],1),a("div",{staticClass:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},[a("line-chart")],1),a("div",{staticClass:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},[a("scatter-plot")],1),a("div",{staticClass:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},[a("pie-chart")],1)])])},l=[],r=(a("e260"),a("d3b7"),a("e6cf"),a("3ca3"),a("ddb0"),a("b0c0"),a("ce44")),n={name:"Charts",components:{PieChart:function(){return a.e(41).then(a.bind(null,"2957"))},ScatterPlot:function(){return a.e(42).then(a.bind(null,"b9c4"))},LineChart:function(){return a.e(40).then(a.bind(null,"33e7"))},BarChart:function(){return Promise.all([a.e(0),a.e(39)]).then(a.bind(null,"7f10"))},IEcharts:r["a"]},data:function(){return{options:{title:{text:"阶梯瀑布图",subtext:"From ExcelHome",sublink:"http://e.weibo.com/1341556070/Aj1J2x5a5"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(t){var e;return e="-"!=t[1].value?t[1]:t[0],e.name+"<br/>"+e.seriesName+" : "+e.value}},legend:{data:["bar","line"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",splitLine:{show:!1},data:function(){for(var t=[],e=1;e<=11;e++)t.push(e);return t}()},yAxis:{type:"value"},series:[{name:"辅助",type:"bar",stack:"总量",z:10,itemStyle:{normal:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"},emphasis:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"}},data:[0,1e3,1440,1775,1376,1376,1565,1860,2030,1515,1280]},{name:"bar3",type:"bar",stack:"总量",data:[100,100,100,50,235,50,100,100,100,145,20]},{name:"line",type:"bar",stack:"总量",z:10,label:{normal:{show:!0,position:"top"}},data:[{value:900,itemStyle:{color:"blue"}},345,{value:393,itemStyle:{color:"blue"}},"-","-",135,178,286,"-","-","-"]},{name:"bar",type:"bar",stack:"总量",z:10,label:{normal:{show:!0,position:"bottom"}},data:["-","-","-",108,154,"-","-","-",119,361,203]},{name:"test",type:"line",symbol:"none",z:1,lineStyle:{type:"dotted"},step:"start",data:[0,1e3,1450,1935,1770,1380,1565,1850,2250,2025,1505]}]}}}},s=n,c=a("2877"),i=a("9989"),b=a("eebe"),m=a.n(b),u=Object(c["a"])(s,o,l,!1,null,"79bcab6c",null);e["default"]=u.exports;m()(u,"components",{QPage:i["a"]})}}]);