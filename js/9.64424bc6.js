(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"0e1c":function(t,a,e){t.exports=e.p+"img/trawel.c87a1818.jpeg"},"114c":function(t,a,e){t.exports=e.p+"img/bag.69a7af8e.jpg"},"12eb":function(t,a,e){t.exports=e.p+"img/jam.a6669f8b.jpg"},"1bce":function(t,a,e){t.exports=e.p+"img/laptop.97955dbf.jpg"},"290e":function(t,a,e){t.exports=e.p+"img/action.4d946c17.jpg"},"37a3":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("q-page",{staticClass:"q-pa-sm"},[s("card-social",{attrs:{icon_position:"right"}}),s("q-card",{staticClass:"q-mt-sm"},[s("q-card-section",{staticClass:"text-h6 q-pb-none"},[s("q-item",[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{color:"blue",name:"fas fa-chart-line",size:"44px"}})],1),s("q-item-section",[s("div",{staticClass:"text-h6"},[t._v("Product Sales Stats")])])],1)],1),s("q-card-section",{staticClass:"row"},[s("div",{staticClass:"col-lg-7 col-sm-12 col-xs-12 col-md-7"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-3 col-md-3 col-xs-6 col-sm-6"},[s("q-item",[s("q-item-section",{attrs:{top:"",avatar:""}},[s("q-avatar",{attrs:{color:"blue","text-color":"white",icon:"bluetooth"}})],1),s("q-item-section",[s("q-item-label",{staticClass:"text-h6 text-blue text-bold"},[t._v("4321")]),s("q-item-label",{attrs:{caption:""}},[t._v("Fashions")])],1)],1)],1),s("div",{staticClass:"col-lg-3 col-md-3 col-xs-6 col-sm-6"},[s("q-item",[s("q-item-section",{attrs:{top:"",avatar:""}},[s("q-avatar",{attrs:{color:"grey-8","text-color":"white",icon:"bluetooth"}})],1),s("q-item-section",[s("q-item-label",{staticClass:"text-h6 text-grey-8 text-bold"},[t._v("9876")]),s("q-item-label",{attrs:{caption:""}},[t._v("Electronics")])],1)],1)],1),s("div",{staticClass:"col-lg-3 col-md-3 col-xs-6 col-sm-6"},[s("q-item",[s("q-item-section",{attrs:{top:"",avatar:""}},[s("q-avatar",{attrs:{color:"green-6","text-color":"white",icon:"bluetooth"}})],1),s("q-item-section",[s("q-item-label",{staticClass:"text-h6 text-green-6 text-bold"},[t._v("345")]),s("q-item-label",{attrs:{caption:""}},[t._v("Toys")])],1)],1)],1),s("div",{staticClass:"col-lg-3 col-md-3 col-xs-6 col-sm-6"},[s("q-item",[s("q-item-section",{attrs:{top:"",avatar:""}},[s("q-avatar",{attrs:{color:"teal-8","text-color":"white",icon:"bluetooth"}})],1),s("q-item-section",[s("q-item-label",{staticClass:"text-h6 text-teal-8 text-bold"},[t._v("1021")]),s("q-item-label",{attrs:{caption:""}},[t._v("Vouchers")])],1)],1)],1)]),s("div",[s("IEcharts",{staticStyle:{height:"250px"},attrs:{option:t.getSalesOptions,resizable:!0}})],1)]),s("div",{staticClass:"col-lg-5 col-sm-12 col-xs-12 col-md-5"},[s("q-item",[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{staticClass:"q-pl-md",attrs:{color:"blue",name:"fas fa-gift",size:"24px"}})],1),s("q-item-section",[s("div",{staticClass:"text-h6"},[t._v("TODAY SALES")])])],1),s("div",[s("IEcharts",{staticStyle:{height:"250px"},attrs:{option:t.getPieOptions,resizable:!0}})],1)],1)])],1),s("q-card",{staticClass:"q-mt-sm"},[s("q-card-section",{staticClass:"text-h6 q-pb-none"},[s("q-item",[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{color:"blue",name:"fa fa-shopping-cart",size:"44px"}})],1),s("q-item-section",[s("q-item-label",[s("div",{staticClass:"text-h6"},[t._v("Latest Sales")])]),s("q-item-label",{staticClass:"text-black",attrs:{caption:""}},[t._v("\n            Monitoring Your products. Tracking sales, and shipping status here.\n          ")])],1)],1)],1),s("q-card-section",{staticClass:"q-pa-none q-ma-none"},[s("q-table",{staticClass:"no-shadow no-border",attrs:{data:t.sales_data,columns:t.sales_column,"hide-bottom":""},scopedSlots:t._u([{key:"body-cell-Products",fn:function(a){return[s("q-td",{attrs:{props:a}},[s("q-item",[s("q-item-section",[s("q-avatar",{attrs:{square:""}},[s("img",{attrs:{src:a.row.prod_img}})])],1),s("q-item-section",[s("q-item-label",[t._v(t._s(a.row.code))]),s("q-item-label",[t._v(t._s(a.row.product_name))])],1)],1)],1)]}},{key:"body-cell-Name",fn:function(a){return[s("q-td",{attrs:{props:a}},[s("q-item",[s("q-item-section",{attrs:{avatar:""}},[s("q-avatar",[s("img",{attrs:{src:a.row.avatar}})])],1),s("q-item-section",[s("q-item-label",[t._v(t._s(a.row.name))]),s("q-item-label",{attrs:{caption:""}},[t._v("Purchased date: "),s("br"),t._v(t._s(a.row.date))])],1)],1)],1)]}},{key:"body-cell-Status",fn:function(a){return[s("q-td",{staticClass:"text-left",attrs:{props:a}},[s("q-chip",{staticClass:"text-white text-capitalize",attrs:{label:a.row.status,color:t.getChipColor(a.row.status)}})],1)]}},{key:"body-cell-Stock",fn:function(a){return[s("q-td",{attrs:{props:a}},[s("q-item",[s("q-item-section",[s("q-item-label",[s("span",{staticClass:"text-blue"},["error"==a.row.type?s("q-icon",{attrs:{name:"bug_report",color:"blue",size:"20px"}}):t._e(),"info"==a.row.type?s("q-icon",{attrs:{name:"settings",color:"blue",size:"20px"}}):t._e(),"success"==a.row.type?s("q-icon",{attrs:{name:"flag",color:"blue",size:"20px"}}):t._e(),"warning"==a.row.type?s("q-icon",{attrs:{name:"fireplace",color:"blue",size:"20px"}}):t._e(),t._v("\n                    "+t._s(a.row.stock)+"\n                  ")],1),"success"==a.row.type?s("q-chip",{staticClass:"float-right text-white text-capitalize",attrs:{label:a.row.type,color:"positive"}}):t._e(),"info"==a.row.type?s("q-chip",{staticClass:"float-right text-white text-capitalize",attrs:{label:a.row.type,color:"info"}}):t._e(),"warning"==a.row.type?s("q-chip",{staticClass:"float-right text-white text-capitalize",attrs:{label:a.row.type,color:"warning"}}):t._e(),"error"==a.row.type?s("q-chip",{staticClass:"float-right text-white text-capitalize",attrs:{label:a.row.type,color:"negative"}}):t._e()],1),s("q-item-label",{attrs:{caption:""}},[s("q-linear-progress",{attrs:{dark:"",color:t.getColor(a.row.Progress),value:a.row.Progress/100}})],1)],1)],1)],1)]}}])})],1)],1),s("div",{staticClass:"row q-col-gutter-sm  q-py-sm"},[s("div",{staticClass:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},[s("q-card",[s("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify"},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[s("q-tab",{class:"contact"==t.tab?"text-blue":"",attrs:{name:"contact",icon:"contacts",label:"Contact"}}),s("q-tab",{class:"message"==t.tab?"text-blue":"",attrs:{name:"message",icon:"comment",label:"Message"}},[s("q-badge",{attrs:{color:"red",floating:""}},[t._v(t._s(t.messages.length))])],1),s("q-tab",{class:"notification"==t.tab?"text-blue":"",attrs:{name:"notification",icon:"notifications",label:"Notification"}},[s("q-badge",{attrs:{color:"red",floating:""}},[t._v("4")])],1)],1),s("q-separator"),s("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[s("q-tab-panel",{staticClass:"q-pa-sm",attrs:{name:"contact"}},[s("q-list",{staticClass:"rounded-borders",attrs:{separator:""}},t._l(t.contacts,(function(a,e){return s("q-item",{key:e},[s("q-item-section",{attrs:{avatar:""}},[s("q-avatar",[s("img",{attrs:{src:a.avatar}})])],1),s("q-item-section",[s("q-item-label",{attrs:{lines:"1"}},[t._v(t._s(a.name))]),s("q-item-label",{attrs:{caption:"",lines:"2"}},[s("span",{staticClass:"text-weight-bold"},[t._v(t._s(a.position))])])],1),s("q-item-section",{attrs:{side:""}},[s("div",{staticClass:"text-grey-8 q-gutter-xs"},[s("q-btn",{staticClass:"gt-xs",attrs:{size:"md",flat:"",color:"blue",dense:"",round:"",icon:"comment"}}),s("q-btn",{staticClass:"gt-xs",attrs:{size:"md",flat:"",color:"red",dense:"",round:"",icon:"email"}}),s("q-btn",{attrs:{size:"md",flat:"",dense:"",round:"",color:"green",icon:"phone"}})],1)])],1)})),1)],1),s("q-tab-panel",{staticClass:"q-pa-sm",attrs:{name:"message"}},t._l(t.messages,(function(a){return s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:a.id,attrs:{clickable:""}},[s("q-item-section",{attrs:{avatar:""}},[s("q-avatar",[s("img",{attrs:{src:a.avatar}})])],1),s("q-item-section",[s("q-item-label",[t._v(t._s(a.name))]),s("q-item-label",{attrs:{caption:"",lines:"1"}},[t._v(t._s(a.msg))])],1),s("q-item-section",{attrs:{side:""}},[t._v("\n                "+t._s(a.time)+"\n              ")])],1)})),1),s("q-tab-panel",{staticClass:"q-pa-sm",attrs:{name:"notification"}},[s("q-list",[s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[s("q-item-section",{attrs:{avatar:""}},[s("q-avatar",{attrs:{color:"teal","text-color":"white",icon:"info"}})],1),s("q-item-section",[t._v("Avatar-type icon")])],1),s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[s("q-item-section",{attrs:{avatar:""}},[s("q-avatar",{attrs:{color:"teal","text-color":"white",icon:"report"}})],1),s("q-item-section",[t._v("Avatar-type icon")])],1),s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[s("q-item-section",{attrs:{avatar:""}},[s("q-avatar",{attrs:{color:"teal","text-color":"white",icon:"remove"}})],1),s("q-item-section",[t._v("Avatar-type icon")])],1),s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[s("q-item-section",{attrs:{avatar:""}},[s("q-avatar",{attrs:{color:"teal","text-color":"white",icon:"remove_circle_outline"}})],1),s("q-item-section",[t._v("Avatar-type icon")])],1)],1)],1)],1)],1)],1),s("div",{staticClass:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},[s("q-carousel",{attrs:{animated:"",infinite:"",height:"360px",arrows:"","transition-prev":"slide-right","transition-next":"slide-left"},model:{value:t.slide,callback:function(a){t.slide=a},expression:"slide"}},[s("q-carousel-slide",{staticClass:"q-pa-none",attrs:{name:1}},[s("q-scroll-area",{staticClass:"fit"},[s("q-card",{staticClass:"my-card"},[s("img",{attrs:{src:e("a1ec")}}),s("q-card-section",[s("div",{staticClass:"text-h6"},[t._v("Work with something that you like, like…")]),s("div",{staticClass:"text-subtitle2"},[t._v("by John Doe")])]),s("q-card-actions",{attrs:{align:"left"}},[s("q-btn",{attrs:{label:"Share",dense:"",color:"primary","text-color":"blue",outline:""}}),s("q-btn",{attrs:{label:"Learn More",dense:"",color:"primary","text-color":"blue",outline:""}})],1)],1)],1)],1),s("q-carousel-slide",{staticClass:"q-pa-none",attrs:{name:2}},[s("q-scroll-area",{staticClass:"fit"},[s("q-card",{staticClass:"my-card"},[s("img",{attrs:{src:e("f4ac")}}),s("q-card-section",[s("div",{staticClass:"text-h6"},[t._v("Keep your schedule in the right time")]),s("div",{staticClass:"text-subtitle2"},[t._v("\n                  Aenean facilisis vitae purus facilisis semper.\n                ")])]),s("q-card-actions",{attrs:{align:"left"}},[s("q-btn",{attrs:{label:"Share",dense:"",color:"primary","text-color":"blue",outline:""}}),s("q-btn",{attrs:{label:"Learn More",dense:"",color:"primary","text-color":"blue",outline:""}})],1)],1)],1)],1),s("q-carousel-slide",{staticClass:"q-pa-none",attrs:{name:3}},[s("q-scroll-area",{staticClass:"fit"},[s("q-card",{staticClass:"my-card"},[s("img",{attrs:{src:e("0e1c")}}),s("q-card-section",[s("div",{staticClass:"text-h6"},[t._v("Travel everytime that you have a chance")]),s("div",{staticClass:"text-subtitle2"},[t._v("Curabitur egestas consequat lorem, vel fermentum augue porta id.")])]),s("q-card-actions",{attrs:{align:"left"}},[s("q-btn",{attrs:{label:"Share",dense:"",color:"primary","text-color":"blue",outline:""}}),s("q-btn",{attrs:{label:"Learn More",dense:"",color:"primary","text-color":"blue",outline:""}})],1)],1)],1)],1)],1)],1)])],1)},o=[],i=(e("e260"),e("d3b7"),e("e6cf"),e("3ca3"),e("ddb0"),e("ce44")),r={name:"Dashboard2",components:{IEcharts:i["a"],CardStatiscs:function(){return e.e(1).then(e.bind(null,"c7fd"))}},data:function(){return{slide:1,tab:"contact",messages:[{id:5,name:"Pratik Patel",msg:" -- I'll be in your neighborhood doing errands this\n            weekend. Do you want to grab brunch?",avatar:"https://avatars2.githubusercontent.com/u/34883558?s=400&v=4",time:"10:42 PM"},{id:6,name:"Winfield Stapforth",msg:" -- I'll be in your neighborhood doing errands this\n            weekend. Do you want to grab brunch?",avatar:"https://cdn.quasar.dev/img/avatar6.jpg",time:"11:17 AM"},{id:1,name:"Boy",msg:" -- I'll be in your neighborhood doing errands this\n            weekend. Do you want to grab brunch?",avatar:"https://cdn.quasar.dev/img/boy-avatar.png",time:"5:17 AM"},{id:2,name:"Jeff Galbraith",msg:" -- I'll be in your neighborhood doing errands this\n            weekend. Do you want to grab brunch?",avatar:"https://cdn.quasar.dev/team/jeff_galbraith.jpg",time:"5:17 AM"},{id:3,name:"Razvan Stoenescu",msg:" -- I'll be in your neighborhood doing errands this\n            weekend. Do you want to grab brunch?",avatar:"https://cdn.quasar.dev/team/razvan_stoenescu.jpeg",time:"5:17 AM"}],contacts:[{name:"Pratik Patel",position:"Developer",avatar:"https://avatars2.githubusercontent.com/u/34883558?s=400&v=4"},{name:"Razvan Stoenescu",position:"Developer",avatar:"https://cdn.quasar.dev/team/razvan_stoenescu.jpeg"},{name:"Jeff Galbraith",position:"Developer",avatar:"https://cdn.quasar.dev/team/jeff_galbraith.jpg"},{name:"Brunhilde Panswick",position:"Administrator",avatar:"https://cdn.quasar.dev/img/avatar2.jpg"},{name:"Winfield Stapforth",position:"Administrator",avatar:"https://cdn.quasar.dev/img/avatar6.jpg"}],sales_data:[{name:"Pratik Patel",Progress:70,status:"Canceled",stock:"14 / 30",date:"23 Oct 2018",avatar:"https://avatars3.githubusercontent.com/u/34883558?s=400&u=09455019882ac53dc69b23df570629fd84d37dd1&v=4",product_name:"Woman Bag",total:"$300,00",code:"QWE123",prod_img:e("114c")},{name:"Mayank Patel",Progress:60,status:"Sent",date:"11 Nov 2018",stock:"25 / 70",avatar:"https://avatars2.githubusercontent.com/u/27857088?s=400&u=a898efbc753d93cf4c2070a7cf3b05544b50deea&v=4",product_name:"Laptop",total:"$230,00",code:"ABC890",prod_img:e("1bce")},{name:"Mayur Patel",Progress:30,status:"Pending",stock:"35 / 50",avatar:"https://avatars0.githubusercontent.com/u/55240045?s=400&u=cf9bffc2bd2d8e42ca6e5abf40ddd6c1a03ce2860&v=4",product_name:"Pinapple Jam",total:"$34,00",date:"19 Sept 2020",code:"GHI556",prod_img:e("12eb")},{name:"Jeff Galbraith",Progress:100,status:"Paid",stock:"18 / 33",avatar:"https://avatars1.githubusercontent.com/u/10262924?s=400&u=9f601b344d597ed76581e3a6a10f3c149cb5f6dc&v=4",product_name:"Action Figure",total:"$208,00",date:"19 Sept 2020",code:"JKL345",prod_img:e("290e")}],sales_column:[{name:"Products",label:"Products",field:"Products",sortable:!0,align:"left"},{name:"Name",label:"Buyer",field:"name",sortable:!0,align:"left"},{name:"Total",label:"Total",field:"total",sortable:!0,align:"right",classes:"text-bold"},{name:"Status",label:"Status",field:"status",sortable:!0,align:"left",classes:"text-bold"},{name:"Stock",label:"Stock",field:"task",sortable:!0,align:"left"}]}},computed:{getSalesOptions:function(){return{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"2%",right:"2%",top:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}],yAxis:[{type:"value",splitLine:{show:!1}}],series:[{name:"Fashions",type:"bar",data:[40,45,27,50,32,50,70,30,30,40,67,29],color:"#546bfa"},{name:"Electronics",type:"bar",data:[124,100,20,120,117,70,110,90,50,90,20,50],color:"#3a9688"},{name:"Toys",type:"bar",data:[17,2,0,29,20,10,23,0,8,20,11,30],color:"#02a9f4"},{name:"Vouchers",type:"bar",data:[20,100,80,14,90,86,100,70,120,50,30,60],color:"#f88c2b"}]}},getPieOptions:function(){return{tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{bottom:10,left:"center",data:["Fashions","Electronics","Toys","Vouchers"]},series:[{name:"Sales",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},emphasis:{label:{show:!1,fontSize:"30",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:335,name:"Fashions",itemStyle:{color:"#546bfa"}},{value:310,name:"Electronics",itemStyle:{color:"#3a9688"}},{value:234,name:"Toys",itemStyle:{color:"#02a9f4"}},{value:135,name:"Vouchers",itemStyle:{color:"#f88c2b"}}]}]}}},methods:{getColor:function(t){return t>70&&t<=100?"green":t>50&&t<=70?"blue":"red"},getChipColor:function(t){return"Canceled"==t?"negative":"Sent"==t?"positive":"Pending"==t?"warning":"Paid"==t?"info":"dark"}}},l=r,c=e("2877"),n=e("9989"),m=e("f09f"),d=e("a370"),p=e("66e5"),b=e("4074"),u=e("0016"),v=e("cb32"),g=e("0170"),q=e("eaac"),h=e("db86"),f=e("b047"),x=e("6b1d"),y=e("429b"),_=e("7460"),C=e("58a81"),w=e("eb85"),k=e("adad"),S=e("823b"),P=e("1c1c"),Q=e("9c40"),z=e("880c"),A=e("62cd"),j=e("4983"),T=e("4b7e"),L=e("714f"),M=e("eebe"),I=e.n(M),D=Object(c["a"])(l,s,o,!1,null,"952601da",null);a["default"]=D.exports;I()(D,"components",{QPage:n["a"],QCard:m["a"],QCardSection:d["a"],QItem:p["a"],QItemSection:b["a"],QIcon:u["a"],QAvatar:v["a"],QItemLabel:g["a"],QTable:q["a"],QTd:h["a"],QChip:f["a"],QLinearProgress:x["a"],QTabs:y["a"],QTab:_["a"],QBadge:C["a"],QSeparator:w["a"],QTabPanels:k["a"],QTabPanel:S["a"],QList:P["a"],QBtn:Q["a"],QCarousel:z["a"],QCarouselSlide:A["a"],QScrollArea:j["a"],QCardActions:T["a"]}),I()(D,"directives",{Ripple:L["a"]})},a1ec:function(t,a,e){t.exports=e.p+"img/coding.1a850e0e.jpeg"},f4ac:function(t,a,e){t.exports=e.p+"img/lookgood.9b0772e2.jpeg"}}]);