(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[39],{1772:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-card",{staticClass:"bg-transparent no-shadow no-border"},[i("q-card-section",{staticClass:"row"},[i("div",{staticClass:"col-lg-12 col-sm-12 col-xs-12 col-md-12"},[i("div",{staticClass:"text-h6 float-left q-ml-md q-mt-sm"},[t._v("Filters")]),i("q-space"),i("q-select",{staticClass:"float-right",staticStyle:{"min-width":"200px"},attrs:{dense:"",outlined:"",options:["All","Free","Paid"],label:"Category"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1)]),i("q-card-section",{staticClass:"q-mx-sm"},[i("div",{staticClass:"row q-col-gutter-lg"},t._l(t.getData,(function(e){return i("div",{staticClass:"col-lg-3 col-sm-12 col-xs-12 col-md-3"},[i("q-card",{staticClass:"text-white",staticStyle:{"background-color":"#292845"}},[i("q-img",{attrs:{src:e.img}}),i("q-separator"),i("q-card-section",{staticClass:"text-h5 text-center"},[t._v("\n            "+t._s(e.title)+"\n          ")]),i("q-card-section",{staticClass:"text-justify"},[i("div",[t._v("\n              "+t._s(t.text)+"\n            ")])]),i("q-card-actions",{staticClass:"text-subtitle1",attrs:{align:"around"}},[i("q-btn",{staticClass:"bg-transparent text-capitalize",attrs:{color:"",icon:"remove_red_eye",flat:"",label:"200 Views"}}),i("div",{staticClass:"float-right"},[i("q-btn",{staticClass:"bg-transparent",attrs:{color:"",icon:"chat_bubble",flat:"",label:"56"}})],1)],1)],1)],1)})),0)])],1)},o=[],s=(i("4de4"),{name:"BasicFilter",data:function(){return{type:"All",cards_data:[{img:"https://placeimg.com/500/300/nature?t="+Math.random(),type:"free",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",title:"Title 1"},{img:"https://placeimg.com/500/300/nature?t="+Math.random(),type:"paid",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",title:"Title 2"},{img:"https://placeimg.com/500/300/nature?t="+Math.random(),type:"free",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",title:"Title 3"},{img:"https://placeimg.com/500/300/nature?t="+Math.random(),type:"free",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",title:"Title 4"},{img:"https://placeimg.com/500/300/nature?t="+Math.random(),type:"paid",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",title:"Title 5"},{img:"https://placeimg.com/500/300/nature?t="+Math.random(),type:"free",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",title:"Title 6"}],text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},computed:{getData:function(){if("All"==this.type)return this.cards_data;var t=this;return this.cards_data.filter((function(e){return e.type.toLowerCase()==t.type.toLowerCase()}))}}}),n=s,l=i("2877"),r=i("f09f"),c=i("a370"),m=i("2c91"),d=i("ddd8"),u=i("068f"),p=i("eb85"),q=i("4b7e"),g=i("9c40"),b=i("eebe"),x=i.n(b),h=Object(l["a"])(n,a,o,!1,null,"7bb63cbd",null);e["default"]=h.exports;x()(h,"components",{QCard:r["a"],QCardSection:c["a"],QSpace:m["a"],QSelect:d["a"],QImg:u["a"],QSeparator:p["a"],QCardActions:q["a"],QBtn:g["a"]})}}]);