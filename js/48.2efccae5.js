(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[48],{"713b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"hHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),a("q-toolbar-title",[t._v("\n        Audie Dashboard\n      ")]),a("q-space"),a("div",{staticClass:"q-gutter-sm row items-center no-wrap"},[a("q-btn",{attrs:{round:"",dense:"",flat:"",color:"white",icon:"notifications"}},[a("q-badge",{attrs:{color:"red","text-color":"white",floating:""}},[t._v("\n            5\n          ")]),a("q-menu",[a("q-list",{staticStyle:{"min-width":"100px"}},[a("messages"),a("q-card",{staticClass:"text-center no-shadow no-border"},[a("q-btn",{staticClass:"text-indigo-8",staticStyle:{"max-width":"120px !important"},attrs:{label:"View All",flat:"",dense:""}})],1)],1)],1)],1),a("q-btn",{attrs:{round:"",flat:""}},[a("q-avatar",{attrs:{size:"26px"}},[a("img",{attrs:{src:"https://cdn.quasar.dev/img/boy-avatar.png"}})])],1)],1)],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-primary text-white",width:250},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",{attrs:{bordered:""}},[a("q-item",{attrs:{to:"/","active-class":"q-item-no-link-highlighting"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"dashboard"}})],1),a("q-item-section",[a("q-item-label",[t._v("Dashboard")])],1)],1),a("q-expansion-item",{attrs:{"header-inset-level":0,"expand-separator":"",icon:"fas fa-mobile-alt",label:"Aplicativo"}},[a("q-list",[a("q-item",{attrs:{clickable:"","inset-level":.6},on:{click:function(e){return t.goTo()}}},[a("q-item-section",{staticClass:"text-white",attrs:{thumbnail:""}},[a("q-icon",{attrs:{name:"far fa-newspaper"}})],1),a("q-item-section",[a("q-item-label",[t._v("Noticias")])],1)],1),a("q-item",{attrs:{clickable:"","inset-level":.6}},[a("q-item-section",{staticClass:"text-white",attrs:{thumbnail:""}},[a("q-icon",{attrs:{name:"fas fa-layer-group"}})],1),a("q-item-section",[a("q-item-label",[t._v("Categorias")])],1)],1),a("q-item",{attrs:{clickable:"","inset-level":.6}},[a("q-item-section",{staticClass:"text-white",attrs:{thumbnail:""}},[a("q-icon",{attrs:{name:"fas fa-layer-group"}})],1),a("q-item-section",[a("q-item-label",[t._v("Streaming")])],1)],1),a("q-item",{attrs:{clickable:"","inset-level":.6}},[a("q-item-section",{staticClass:"text-white",attrs:{thumbnail:""}},[a("q-icon",{attrs:{name:"fas fa-layer-group"}})],1),a("q-item-section",[a("q-item-label",[t._v("Metadados")])],1)],1),a("q-item",{attrs:{clickable:"","inset-level":.6}},[a("q-item-section",{staticClass:"text-white",attrs:{thumbnail:""}},[a("q-icon",{attrs:{name:"fas fa-layer-group"}})],1),a("q-item-section",[a("q-item-label",[t._v("Identidade Visual")])],1)],1)],1)],1),a("q-expansion-item",{attrs:{"header-inset-level":0,"expand-separator":"",icon:"settings",label:"Configurações"}},[a("q-list",[a("q-item",{attrs:{clickable:"","inset-level":.6}},[a("q-item-section",{staticClass:"text-white",attrs:{thumbnail:""}},[a("q-icon",{attrs:{name:"far fa-newspaper"}})],1),a("q-item-section",[a("q-item-label",{on:{click:function(e){return t.goTo()}}},[t._v("Noticias")])],1)],1),a("q-item",{attrs:{clickable:"","inset-level":.6}},[a("q-item-section",{staticClass:"text-white",attrs:{thumbnail:""}},[a("q-icon",{attrs:{name:"far fa-newspaper"}})],1),a("q-item-section",[a("q-item-label",{on:{click:function(e){return t.goTo()}}},[t._v("Usuários e Permissões")])],1)],1),a("q-item",{attrs:{clickable:"","inset-level":.6}},[a("q-item-section",{staticClass:"text-white",attrs:{thumbnail:""}},[a("q-icon",{attrs:{name:"fas fa-layer-group"}})],1),a("q-item-section",[a("q-item-label",[t._v("Emissora")])],1)],1)],1)],1)],1)],1),a("q-page-container",{staticClass:"bg-grey-2"},[a("router-view")],1)],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{attrs:{clickable:"",to:t.link}},[t.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.icon}})],1):t._e(),a("q-item-section",[a("q-item-label",[t._v(t._s(t.title))]),a("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.caption))])],1)],1)},r=[],o={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},l=o,c=a("2877"),m=a("66e5"),d=a("4074"),u=a("0016"),b=a("0170"),q=a("eebe"),p=a.n(q),h=Object(c["a"])(l,s,r,!1,null,null,null),v=h.exports;p()(h,"components",{QItem:m["a"],QItemSection:d["a"],QIcon:u["a"],QItemLabel:b["a"]});var g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.messages,(function(e){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.id,staticStyle:{"max-width":"420px"},attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",[a("img",{attrs:{src:e.avatar}})])],1),a("q-item-section",[a("q-item-label",[t._v(t._s(e.name))]),a("q-item-label",{attrs:{caption:"",lines:"1"}},[t._v(t._s(e.msg))])],1),a("q-item-section",{attrs:{side:""}},[t._v("\n      "+t._s(e.time)+"\n    ")])],1)})),1)},f=[],w={name:"Messages",data:function(){return{messages:[{id:5,name:"Pratik Patel",msg:" -- I'll be in your neighborhood doing errands this\n            weekend. Do you want to grab brunch?",avatar:"https://avatars2.githubusercontent.com/u/34883558?s=400&v=4",time:"10:42 PM"},{id:6,name:"Winfield Stapforth",msg:" -- I'll be in your neighborhood doing errands this\n            weekend. Do you want to grab brunch?",avatar:"https://cdn.quasar.dev/img/avatar6.jpg",time:"11:17 AM"},{id:1,name:"Boy",msg:" -- I'll be in your neighborhood doing errands this\n            weekend. Do you want to grab brunch?",avatar:"https://cdn.quasar.dev/img/boy-avatar.png",time:"5:17 AM"},{id:2,name:"Jeff Galbraith",msg:" -- I'll be in your neighborhood doing errands this\n            weekend. Do you want to grab brunch?",avatar:"https://cdn.quasar.dev/team/jeff_galbraith.jpg",time:"5:17 AM"},{id:3,name:"Razvan Stoenescu",msg:" -- I'll be in your neighborhood doing errands this\n            weekend. Do you want to grab brunch?",avatar:"https://cdn.quasar.dev/team/razvan_stoenescu.jpeg",time:"5:17 AM"}]}}},y=w,_=a("cb32"),k=a("714f"),x=Object(c["a"])(y,g,f,!1,null,"6257c7c9",null),Q=x.exports;p()(x,"components",{QItem:m["a"],QItemSection:d["a"],QAvatar:_["a"],QItemLabel:b["a"]}),p()(x,"directives",{Ripple:k["a"]});var I={name:"MainLayout",components:{Messages:Q,EssentialLink:v},methods:{goTo:function(){this.$router.push({name:"News"})}},data:function(){return{leftDrawerOpen:!1}}},C=I,D=a("4d5a"),S=a("e359"),M=a("65c6"),A=a("9c40"),L=a("6ac5"),O=a("2c91"),j=a("58a81"),E=a("4e73"),T=a("1c1c"),P=a("f09f"),N=a("9404"),$=a("3b73"),z=a("09e3"),B=Object(c["a"])(C,i,n,!1,null,null,null);e["default"]=B.exports;p()(B,"components",{QLayout:D["a"],QHeader:S["a"],QToolbar:M["a"],QBtn:A["a"],QToolbarTitle:L["a"],QSpace:O["a"],QBadge:j["a"],QMenu:E["a"],QList:T["a"],QCard:P["a"],QAvatar:_["a"],QDrawer:N["a"],QItem:m["a"],QItemSection:d["a"],QIcon:u["a"],QItemLabel:b["a"],QExpansionItem:$["a"],QPageContainer:z["a"]})}}]);