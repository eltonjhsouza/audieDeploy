(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"4a5b":function(t,e,a){},5354:function(t,e,a){"use strict";a("fe3a")},7308:function(t,e,a){},"7fcd":function(t,e,a){"use strict";a("a8de")},"96bb":function(t,e,a){"use strict";a("7308")},a149:function(t,e,a){"use strict";a("4a5b")},a445:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("div",{staticStyle:{padding:"30px"}},[a("q-card",{staticClass:"bigger",attrs:{color:"white","text-color":"black"}},[a("q-card-section",{staticClass:"relative-position"},[a("div",{staticStyle:{display:"flex"}},[a("div",{attrs:{id:"settings-icon"}},[a("q-icon",{staticStyle:{padding:"10px","font-size":"75px"},attrs:{name:"fas fa-cogs"}})],1),a("div",{staticClass:"q-pl-lg q-pt-md",attrs:{id:"settings-title"}},[a("div",{staticClass:"ellipsis"},[t._v(t._s("Configurações"))]),a("div",{staticClass:"ellipsis"},[t._v("\n              "+t._s("Rádio")+"・"),a("span",{staticClass:"text-faded",attrs:{slot:"subtitle"},slot:"subtitle"},[t._v(t._s("station_name"))])])])])]),a("q-card-section",{staticStyle:{padding:"0px"}},[a("q-tabs",{staticClass:"text-primary",attrs:{"narrow-indicator":"",dense:"",align:"justify"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab",{attrs:{ripple:!1,name:"radio",label:"Rádio"}}),a("q-tab",{attrs:{ripple:!1,name:"streamsources",label:"Stream Sources"},on:{click:function(e){t.tab="streamsources"}}}),a("q-tab",{attrs:{ripple:!1,name:"metadata",label:"Metadata Url"}}),a("q-tab",{attrs:{ripple:!1,name:"podcast",label:"Podcast RSS"}}),a("q-tab",{attrs:{ripple:!1,name:"news",label:"Notícias RSS"}})],1),a("q-separator"),a("q-tab-panels",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab-panel",{attrs:{name:"radio"}},[a("StationInfo")],1),a("q-tab-panel",{attrs:{name:"streamsources"}},[a("streaming")],1),a("q-tab-panel",{attrs:{name:"metadata"}},[a("Metadata")],1),a("q-tab-panel",{attrs:{name:"podcast"}},[a("PodcastRss")],1),a("q-tab-panel",{attrs:{name:"news"}},[a("NewsRss")],1)],1)],1)],1)],1)])},i=[],l=a("ca30"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"q-ma-md full-widht"},[a("div",{staticClass:"flex justify-start"},[a("div",[a("q-item-label",{attrs:{header:""}},[t._v("Informe o endereço do arquivo XML contendo informações da mídia em execução")])],1)]),a("div",{staticClass:"flex q-ma-md"},[a("q-btn",{staticClass:"bg-cyan-8 text-white",attrs:{label:"Adicionar Novo"},on:{click:function(e){t.addModal=!0}}})],1),t._l(t.lstUrls,(function(e){return a("q-list",{key:e.id,staticClass:"rounded-borders",staticStyle:{width:"100%"},attrs:{bordered:"",padding:""}},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[t._v(t._s(e.description))])],1),a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[t._v(t._s(e.url))])],1),a("q-item-section",{attrs:{side:""}},[1==e.isActive?a("q-badge",{attrs:{rounded:"",color:"green",label:"Ativo"}}):a("q-badge",{attrs:{rounded:"",color:"red",label:"Inativo"}})],1),a("q-item-section",{attrs:{side:""}},[a("div",{staticClass:"text-grey-8 q-gutter-xs"},[a("q-btn",{staticClass:"gt-xs",attrs:{size:"12px",flat:"",dense:"",round:"",icon:"delete"},on:{click:function(a){return t._delete(e)}}}),a("q-btn",{staticClass:"gt-xs",attrs:{size:"12px",flat:"",dense:"",round:"",icon:"edit"},on:{click:function(a){return t.openEditModal(e)}}}),a("q-btn",{attrs:{size:"12px",flat:"",dense:"",round:"",icon:"more_vert"}})],1)])],1)],1)})),a("q-dialog",{attrs:{persistent:""},model:{value:t.addModal,callback:function(e){t.addModal=e},expression:"addModal"}},[a("q-card",{staticStyle:{width:"350px"}},[a("q-card-section",{},[a("div",{staticClass:"q-mb-md"},[a("q-input",{attrs:{outlined:"",dense:"",label:"Nome"},model:{value:t.urlStreaming.description,callback:function(e){t.$set(t.urlStreaming,"description",e)},expression:"urlStreaming.description"}})],1),a("div",{staticClass:"q-mb-md"},[a("q-input",{attrs:{outlined:"",dense:"",label:"Endereço do Streaming"},model:{value:t.urlStreaming.url,callback:function(e){t.$set(t.urlStreaming,"url",e)},expression:"urlStreaming.url"}})],1),a("div",{staticClass:"q-ma-sm flex justify-start"},[a("q-toggle",{staticClass:"q-mr-md flex",attrs:{label:"Status"},model:{value:t.urlStreaming.status,callback:function(e){t.$set(t.urlStreaming,"status",e)},expression:"urlStreaming.status"}}),a("div",{staticClass:"flex q-mt-md"},[0==t.urlStreaming.status?a("q-badge",{staticStyle:{height:"max-content"},attrs:{rounded:"",color:"red",label:"Inativo"}}):a("q-badge",{staticStyle:{height:"max-content"},attrs:{rounded:"",color:"green",label:"Ativo"}})],1)],1)]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancelar",color:"primary"}}),a("q-btn",{attrs:{flat:"",label:"Salvar",color:"primary"},on:{click:function(e){return t.save(t.urlStreaming)}}})],1)],1)],1),a("q-dialog",{attrs:{persistent:""},model:{value:t.editModal,callback:function(e){t.editModal=e},expression:"editModal"}},[a("q-card",{staticStyle:{width:"350px"}},[a("q-card-section",{},[a("div",{staticClass:"q-mb-md"},[a("q-input",{attrs:{outlined:"",dense:"",label:"Nome"},model:{value:t.urlStreaming.description,callback:function(e){t.$set(t.urlStreaming,"description",e)},expression:"urlStreaming.description"}})],1),a("div",{staticClass:"q-mb-md"},[a("q-input",{attrs:{outlined:"",dense:"",label:"Endereço do Streaming"},model:{value:t.urlStreaming.url,callback:function(e){t.$set(t.urlStreaming,"url",e)},expression:"urlStreaming.url"}})],1),a("div",{staticClass:"q-ma-sm flex justify-start"},[a("q-toggle",{staticClass:"q-mr-md flex",attrs:{label:"Status"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}}),a("div",{staticClass:"flex q-mt-md"},[0==t.urlStreaming.status?a("q-badge",{staticStyle:{height:"max-content"},attrs:{rounded:"",color:"red",label:"Inativo"}}):a("q-badge",{staticStyle:{height:"max-content"},attrs:{rounded:"",color:"green",label:"Ativo"}})],1)],1)]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancelar",color:"primary"}}),a("q-btn",{attrs:{flat:"",label:"Atualizar",color:"primary"},on:{click:function(e){return t.update(t.urlStreaming,t.status)}}})],1)],1)],1)],2)},o=[],r=(a("159b"),a("d3b7"),a("25f0"),a("5e7f")),c=(a("436b"),{name:"Metadata",data:function(){return{editModal:!1,addModal:!1,lstUrls:[],urlStreaming:{description:"",url:"",status:!0,TypeId:4},type:"",status:!0,payload:{},noData:!1}},methods:{openEditModal:function(t){this.editModal=!0,this.urlStreaming=t,this.status=t.isActive},update:function(t,e){var a=this;t.isActive=e,Object(r["j"])(t.id,t).then((function(t){console.log(t),"updated"==t&&a.$q.dialog({title:"Url",message:"Url Atualizada com sucesso!"}).onOk((function(){a.editModal=!1,a.lstUrls=[],a.getAllUrlsByTypeId()})),a.editModal=!1})).catch((function(t){console.log(t)}))},_delete:function(t){var e=this;this.$q.dialog({title:"Delete",message:"Tem certeza que deseja remover esse registro?"}).onOk((function(){Object(r["a"])(t.id).then((function(t){"ok"==t&&e.$q.dialog({title:"Url",message:"Url removida com sucesso"}).onOk((function(){e.editModal=!1,e.lstUrls=[],e.getAllUrlsByTypeId()}))})).catch((function(t){500==t.response.status&&e.$q.dialog({title:"Categoria em Uso",message:"Não é possível remover uma categoria que esteja em uso"}).onOk((function(){})),console.log(t.response.status)}))})).onCancel((function(){})).onDismiss((function(){}))},save:function(t){var e=this;console.log(t),Object(r["i"])(t).then((function(t){console.log(t),"ok"===t&&e.$q.dialog({title:"Streaming",message:"URL de streaming cadastrada com sucesso."}).onOk((function(){e.lstUrls=[],e.getAllUrlsByTypeId()}))}))},getAllUrlsByTypeId:function(){var t=this;Object(r["c"])(this.urlStreaming.TypeId).then((function(e){e.length>0&&(t.noData=!1),e.forEach((function(e){t.lstUrls.push(e)}))}))},getUrl:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){getUrl(urlStreaming.TypeId).then((function(t){console.log(t)}))}))},mounted:function(){this.getAllUrlsByTypeId()}}),d=c,u=(a("7fcd"),a("2877")),m=a("f09f"),g=a("0170"),p=a("9c40"),f=a("1c1c"),b=a("66e5"),q=a("4074"),v=a("58a81"),S=a("24e8"),h=a("a370"),x=a("27f9"),y=a("9564"),C=a("4b7e"),k=a("714f"),U=a("7f67"),I=a("eebe"),M=a.n(I),_=Object(u["a"])(d,n,o,!1,null,"d567354c",null),Q=_.exports;M()(_,"components",{QCard:m["a"],QItemLabel:g["a"],QBtn:p["a"],QList:f["a"],QItem:b["a"],QItemSection:q["a"],QBadge:v["a"],QDialog:S["a"],QCardSection:h["a"],QInput:x["a"],QToggle:y["a"],QCardActions:C["a"]}),M()(_,"directives",{Ripple:k["a"],ClosePopup:U["a"]});var A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"q-ma-md full-widht"},[a("div",{staticClass:"flex justify-start"},[a("div",[a("q-item-label",{attrs:{header:""}},[t._v("Informe o endereço do arquivo XML contendo informações da mídia em execução")])],1)]),a("div",{staticClass:"flex q-ma-md"},[a("q-btn",{staticClass:"bg-cyan-8 text-white",attrs:{label:"Adicionar Novo"},on:{click:function(e){t.addModal=!0}}})],1),t._l(t.lstUrls,(function(e){return a("q-list",{key:e.id,staticClass:"rounded-borders",staticStyle:{width:"100%"},attrs:{bordered:"",padding:""}},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[t._v(t._s(e.description))])],1),a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[t._v(t._s(e.url))])],1),a("q-item-section",{attrs:{side:""}},[1==e.isActive?a("q-badge",{attrs:{rounded:"",color:"green",label:"Ativo"}}):a("q-badge",{attrs:{rounded:"",color:"red",label:"Inativo"}})],1),a("q-item-section",{attrs:{side:""}},[a("div",{staticClass:"text-grey-8 q-gutter-xs"},[a("q-btn",{staticClass:"gt-xs",attrs:{size:"12px",flat:"",dense:"",round:"",icon:"delete"},on:{click:function(a){return t._delete(e)}}}),a("q-btn",{staticClass:"gt-xs",attrs:{size:"12px",flat:"",dense:"",round:"",icon:"edit"},on:{click:function(a){return t.openEditModal(e)}}}),a("q-btn",{attrs:{size:"12px",flat:"",dense:"",round:"",icon:"more_vert"}})],1)])],1)],1)})),a("q-dialog",{attrs:{persistent:""},model:{value:t.addModal,callback:function(e){t.addModal=e},expression:"addModal"}},[a("q-card",{staticStyle:{width:"350px"}},[a("q-card-section",{},[a("div",{staticClass:"q-mb-md"},[a("q-input",{attrs:{outlined:"",dense:"",label:"Nome"},model:{value:t.urlStreaming.description,callback:function(e){t.$set(t.urlStreaming,"description",e)},expression:"urlStreaming.description"}})],1),a("div",{staticClass:"q-mb-md"},[a("q-input",{attrs:{outlined:"",dense:"",label:"Endereço do Streaming"},model:{value:t.urlStreaming.url,callback:function(e){t.$set(t.urlStreaming,"url",e)},expression:"urlStreaming.url"}})],1),a("div",{staticClass:"q-ma-sm flex justify-start"},[a("q-toggle",{staticClass:"q-mr-md flex",attrs:{label:"Status"},model:{value:t.urlStreaming.status,callback:function(e){t.$set(t.urlStreaming,"status",e)},expression:"urlStreaming.status"}}),a("div",{staticClass:"flex q-mt-md"},[0==t.urlStreaming.status?a("q-badge",{staticStyle:{height:"max-content"},attrs:{rounded:"",color:"red",label:"Inativo"}}):a("q-badge",{staticStyle:{height:"max-content"},attrs:{rounded:"",color:"green",label:"Ativo"}})],1)],1)]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancelar",color:"primary"}}),a("q-btn",{attrs:{flat:"",label:"Salvar",color:"primary"},on:{click:function(e){return t.save(t.urlStreaming)}}})],1)],1)],1),a("q-dialog",{attrs:{persistent:""},model:{value:t.editModal,callback:function(e){t.editModal=e},expression:"editModal"}},[a("q-card",{staticStyle:{width:"350px"}},[a("q-card-section",{},[a("div",{staticClass:"q-mb-md"},[a("q-input",{attrs:{outlined:"",dense:"",label:"Nome"},model:{value:t.urlStreaming.description,callback:function(e){t.$set(t.urlStreaming,"description",e)},expression:"urlStreaming.description"}})],1),a("div",{staticClass:"q-mb-md"},[a("q-input",{attrs:{outlined:"",dense:"",label:"Endereço do Streaming"},model:{value:t.urlStreaming.url,callback:function(e){t.$set(t.urlStreaming,"url",e)},expression:"urlStreaming.url"}})],1),a("div",{staticClass:"q-ma-sm flex justify-start"},[a("q-toggle",{staticClass:"q-mr-md flex",attrs:{label:"Status"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}}),a("div",{staticClass:"flex q-mt-md"},[0==t.urlStreaming.status?a("q-badge",{staticStyle:{height:"max-content"},attrs:{rounded:"",color:"red",label:"Inativo"}}):a("q-badge",{staticStyle:{height:"max-content"},attrs:{rounded:"",color:"green",label:"Ativo"}})],1)],1)]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancelar",color:"primary"}}),a("q-btn",{attrs:{flat:"",label:"Atualizar",color:"primary"},on:{click:function(e){return t.update(t.urlStreaming,t.status)}}})],1)],1)],1)],2)},w=[],j={name:"PodcastRss",data:function(){return{editModal:!1,addModal:!1,lstUrls:[],urlStreaming:{description:"",url:"",status:!0,TypeId:2},type:"",status:!0,payload:{},noData:!1}},methods:{openEditModal:function(t){this.editModal=!0,this.urlStreaming=t,this.status=t.isActive},update:function(t,e){var a=this;t.isActive=e,Object(r["j"])(t.id,t).then((function(t){console.log(t),"updated"==t&&a.$q.dialog({title:"Url",message:"Url Atualizada com sucesso!"}).onOk((function(){a.editModal=!1,a.lstUrls=[],a.getAllUrlsByTypeId()})),a.editModal=!1})).catch((function(t){console.log(t)}))},_delete:function(t){var e=this;this.$q.dialog({title:"Delete",message:"Tem certeza que deseja remover esse registro?"}).onOk((function(){Object(r["a"])(t.id).then((function(t){"ok"==t&&e.$q.dialog({title:"Url",message:"Url removida com sucesso"}).onOk((function(){e.editModal=!1,e.addModal=!1,e.lstUrls=[],e.getAllUrlsByTypeId()}))})).catch((function(t){500==t.response.status&&e.$q.dialog({title:"Categoria em Uso",message:"Não é possível remover uma categoria que esteja em uso"}).onOk((function(){})),console.log(t.response.status)}))})).onCancel((function(){})).onDismiss((function(){}))},save:function(t){var e=this;console.log(t),Object(r["i"])(t).then((function(t){console.log(t),"ok"===t&&e.$q.dialog({title:"Streaming",message:"URL de streaming cadastrada com sucesso."}).onOk((function(){e.editModal=!1,e.addModal=!1,e.lstUrls=[],e.getAllUrlsByTypeId()}))}))},getAllUrlsByTypeId:function(){var t=this;Object(r["c"])(this.urlStreaming.TypeId).then((function(e){e.length>0&&(t.noData=!1),e.forEach((function(e){t.lstUrls.push(e)}))}))},getUrl:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){getUrl(urlStreaming.TypeId).then((function(t){console.log(t)}))}))},mounted:function(){this.getAllUrlsByTypeId()}},$=j,N=(a("b30a"),Object(u["a"])($,A,w,!1,null,"e51388aa",null)),O=N.exports;M()(N,"components",{QCard:m["a"],QItemLabel:g["a"],QBtn:p["a"],QList:f["a"],QItem:b["a"],QItemSection:q["a"],QBadge:v["a"],QDialog:S["a"],QCardSection:h["a"],QInput:x["a"],QToggle:y["a"],QCardActions:C["a"]}),M()(N,"directives",{Ripple:k["a"],ClosePopup:U["a"]});var T=a("aa53"),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"q-ma-md full-widht"},[a("div",{staticClass:"flex justify-start"},[a("div",[a("q-item-label",{attrs:{header:""}},[t._v("Você pode adicionar a URL de um feed rss em XML para compor as notíficas da emissora")])],1)]),a("div",{staticClass:"flex q-ma-md"},[a("q-btn",{staticClass:"bg-cyan-8 text-white",attrs:{label:"Adicionar Novo"},on:{click:function(e){t.addModal=!0}}})],1),t._l(t.lstUrls,(function(e){return a("q-list",{key:e.id,staticClass:"rounded-borders",staticStyle:{width:"100%"},attrs:{bordered:"",padding:""}},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[t._v(t._s(e.description))])],1),a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[t._v(t._s(e.url))])],1),a("q-item-section",{attrs:{side:""}},[1==e.isActive?a("q-badge",{attrs:{rounded:"",color:"green",label:"Ativo"}}):a("q-badge",{attrs:{rounded:"",color:"red",label:"Inativo"}})],1),a("q-item-section",{attrs:{side:""}},[a("div",{staticClass:"text-grey-8 q-gutter-xs"},[a("q-btn",{staticClass:"gt-xs",attrs:{size:"12px",flat:"",dense:"",round:"",icon:"delete"},on:{click:function(a){return t._delete(e)}}}),a("q-btn",{staticClass:"gt-xs",attrs:{size:"12px",flat:"",dense:"",round:"",icon:"edit"},on:{click:function(a){return t.openEditModal(e)}}}),a("q-btn",{attrs:{size:"12px",flat:"",dense:"",round:"",icon:"more_vert"}})],1)])],1)],1)})),a("q-dialog",{attrs:{persistent:""},model:{value:t.addModal,callback:function(e){t.addModal=e},expression:"addModal"}},[a("q-card",{staticStyle:{width:"350px"}},[a("q-card-section",{},[a("div",{staticClass:"q-mb-md"},[a("q-input",{attrs:{outlined:"",dense:"",label:"Nome"},model:{value:t.urlStreaming.description,callback:function(e){t.$set(t.urlStreaming,"description",e)},expression:"urlStreaming.description"}})],1),a("div",{staticClass:"q-mb-md"},[a("q-input",{attrs:{outlined:"",dense:"",label:"Endereço do Streaming"},model:{value:t.urlStreaming.url,callback:function(e){t.$set(t.urlStreaming,"url",e)},expression:"urlStreaming.url"}})],1),a("div",{staticClass:"q-ma-sm flex justify-start"},[a("q-toggle",{staticClass:"q-mr-md flex",attrs:{label:"Status"},model:{value:t.urlStreaming.status,callback:function(e){t.$set(t.urlStreaming,"status",e)},expression:"urlStreaming.status"}}),a("div",{staticClass:"flex q-mt-md"},[0==t.urlStreaming.status?a("q-badge",{staticStyle:{height:"max-content"},attrs:{rounded:"",color:"red",label:"Inativo"}}):a("q-badge",{staticStyle:{height:"max-content"},attrs:{rounded:"",color:"green",label:"Ativo"}})],1)],1)]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancelar",color:"primary"}}),a("q-btn",{attrs:{flat:"",label:"Salvar",color:"primary"},on:{click:function(e){return t.save(t.urlStreaming)}}})],1)],1)],1),a("q-dialog",{attrs:{persistent:""},model:{value:t.editModal,callback:function(e){t.editModal=e},expression:"editModal"}},[a("q-card",{staticStyle:{width:"350px"}},[a("q-card-section",{},[a("div",{staticClass:"q-mb-md"},[a("q-input",{attrs:{outlined:"",dense:"",label:"Nome"},model:{value:t.urlStreaming.description,callback:function(e){t.$set(t.urlStreaming,"description",e)},expression:"urlStreaming.description"}})],1),a("div",{staticClass:"q-mb-md"},[a("q-input",{attrs:{outlined:"",dense:"",label:"Endereço do Streaming"},model:{value:t.urlStreaming.url,callback:function(e){t.$set(t.urlStreaming,"url",e)},expression:"urlStreaming.url"}})],1),a("div",{staticClass:"q-ma-sm flex justify-start"},[a("q-toggle",{staticClass:"q-mr-md flex",attrs:{label:"Status"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}}),a("div",{staticClass:"flex q-mt-md"},[0==t.urlStreaming.status?a("q-badge",{staticStyle:{height:"max-content"},attrs:{rounded:"",color:"red",label:"Inativo"}}):a("q-badge",{staticStyle:{height:"max-content"},attrs:{rounded:"",color:"green",label:"Ativo"}})],1)],1)]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancelar",color:"primary"}}),a("q-btn",{attrs:{flat:"",label:"Atualizar",color:"primary"},on:{click:function(e){return t.update(t.urlStreaming,t.status)}}})],1)],1)],1)],2)},z=[],B={name:"PodcastRss",data:function(){return{editModal:!1,addModal:!1,lstUrls:[],urlStreaming:{description:"",url:"",status:!0,TypeId:3},type:"",status:!0,payload:{},noData:!1}},methods:{openEditModal:function(t){this.editModal=!0,this.urlStreaming=t,this.status=t.isActive},update:function(t,e){var a=this;t.isActive=e,Object(r["j"])(t.id,t).then((function(t){console.log(t),"updated"==t&&a.$q.dialog({title:"Url",message:"Url Atualizada com sucesso!"}).onOk((function(){a.editModal=!1,a.lstUrls=[],a.getAllUrlsByTypeId()})),a.editModal=!1})).catch((function(t){console.log(t)}))},_delete:function(t){var e=this;this.$q.dialog({title:"Delete",message:"Tem certeza que deseja remover esse registro?"}).onOk((function(){Object(r["a"])(t.id).then((function(t){"ok"==t&&e.$q.dialog({title:"Url",message:"Url removida com sucesso"}).onOk((function(){e.editModal=!1,e.addModal=!1,e.lstUrls=[],e.getAllUrlsByTypeId()}))})).catch((function(t){500==t.response.status&&e.$q.dialog({title:"Categoria em Uso",message:"Não é possível remover uma categoria que esteja em uso"}).onOk((function(){})),console.log(t.response.status)}))})).onCancel((function(){})).onDismiss((function(){}))},save:function(t){var e=this;console.log(t),Object(r["i"])(t).then((function(t){console.log(t),"ok"===t&&e.$q.dialog({title:"Streaming",message:"URL de streaming cadastrada com sucesso."}).onOk((function(){e.editModal=!1,e.addModal=!1,e.lstUrls=[],e.getAllUrlsByTypeId()}))}))},getAllUrlsByTypeId:function(){var t=this;Object(r["c"])(this.urlStreaming.TypeId).then((function(e){e.length>0&&(t.noData=!1),e.forEach((function(e){t.lstUrls.push(e)}))}))},getUrl:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){getUrl(urlStreaming.TypeId).then((function(t){console.log(t)}))}))},mounted:function(){this.getAllUrlsByTypeId()}},D=B,R=(a("96bb"),Object(u["a"])(D,E,z,!1,null,"723585ca",null)),L=R.exports;M()(R,"components",{QCard:m["a"],QItemLabel:g["a"],QBtn:p["a"],QList:f["a"],QItem:b["a"],QItemSection:q["a"],QBadge:v["a"],QDialog:S["a"],QCardSection:h["a"],QInput:x["a"],QToggle:y["a"],QCardActions:C["a"]}),M()(R,"directives",{Ripple:k["a"],ClosePopup:U["a"]});var P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"q-ma-md full-widht"},[a("div",{staticClass:"flex justify-start"},[a("div",{staticClass:"flex q-ma-md"},[a("q-item-label",{attrs:{header:""}},[t._v("Gerencie aqui as informaçoes da sua Rádio")])],1)]),a("div",{staticClass:"group q-ma-md"},[a("q-item-section",[a("q-item-label",[t._v(t._s("Nome de Exbição"))])],1),a("div",{},[a("div",{staticClass:"q-ma-md"},[a("q-item",{staticClass:"q-ml-md"},[a("q-item-section",[a("q-item-label",[a("q-input",{attrs:{disable:t.allowEdit,"float-label":"Nome da emissora",autocomplete:"off"},model:{value:t.stationName,callback:function(e){t.stationName=e},expression:"stationName"}})],1)],1),a("q-item-section",[a("q-item-label",[t.allowEdit?a("q-btn",{staticClass:"q-ma-md q-pl-md q-pr-md",attrs:{dense:"","no-caps":"",color:"primary",label:"Salvar"},on:{click:t.editStation}}):t._e()],1)],1)],1),a("q-item-section",[a("q-item-label",[t._v(t._s("LogoMarca"))])],1),a("q-item",{staticClass:"q-ml-md"},[a("q-item-section",[a("q-item-label",[a("q-input",{attrs:{type:"file"}})],1)],1),a("q-item-section",[a("q-item-label",[t.allowEdit?a("q-btn",{staticClass:"q-ma-md q-pl-md q-pr-md",attrs:{dense:"","no-caps":"",color:"primary",label:"Salvar"},on:{click:t.editStation}}):t._e()],1)],1)],1),a("q-item",[a("q-item-label",{staticClass:"q-ml-sm"},[a("q-item-label",[t._v(t._s("Imagem Padrão")+"\n        "),a("q-icon",{attrs:{name:"help_outline",color:"black"}},[a("q-tooltip",{staticStyle:{"font-size":"14px"}},[a("div",[t._v("\n          "+t._s("A Imagem padrão será utilizada quando não for possível obeter a imagem de determinado recurso como: Notícias, promoções, capa de disco e etc.:")+"\n          ")])])],1)],1),a("q-toggle",{staticClass:"q-mr-md flex",attrs:{label:"Usar Logomarca como imagem padrão?"},model:{value:t.defaultImage,callback:function(e){t.defaultImage=e},expression:"defaultImage"}})],1)],1),0==t.defaultImage?a("q-item",{staticClass:"q-ml-md"},[a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[t._v(t._s("Faça o upload da imagem padrão"))]),a("q-item-label",[a("q-input",{attrs:{type:"file"}})],1)],1),a("q-item-section",[a("q-item-label",[t.allowEdit?a("q-btn",{staticClass:"q-ma-md q-pl-md q-pr-md",attrs:{dense:"","no-caps":"",color:"primary",label:"Salvar"},on:{click:t.editStation}}):t._e()],1)],1)],1):t._e(),a("q-item",[a("q-item-label",{staticClass:"q-ml-sm"},[a("q-item-label",[t._v(t._s("Exibir nome da música e capa do álbum")+"\n        "),a("q-icon",{attrs:{name:"help_outline",color:"black"}},[a("q-tooltip",{staticStyle:{"font-size":"14px"}},[a("div",[t._v("\n          "+t._s("A Imagem padrão será utilizada quando não for possível obeter a imagem de determinado recurso como: Notícias, promoções, capa de disco e etc.:")+"\n          ")])])],1)],1),a("q-toggle",{staticClass:"q-mr-md flex",attrs:{label:"Permite exibir ou não as informções da musica em execução e a capa do disco"},model:{value:t.musicInfo,callback:function(e){t.musicInfo=e},expression:"musicInfo"}})],1)],1)],1)])],1),a("q-dialog",{attrs:{persistent:""},model:{value:t.addModal,callback:function(e){t.addModal=e},expression:"addModal"}},[a("q-card",{staticStyle:{width:"350px"}},[a("q-card-section",{},[a("div",{staticClass:"q-mb-md"},[a("q-input",{attrs:{outlined:"",dense:"",label:"Nome"},model:{value:t.urlStreaming.description,callback:function(e){t.$set(t.urlStreaming,"description",e)},expression:"urlStreaming.description"}})],1),a("div",{staticClass:"q-mb-md"},[a("q-input",{attrs:{outlined:"",dense:"",label:"Endereço do Streaming"},model:{value:t.urlStreaming.url,callback:function(e){t.$set(t.urlStreaming,"url",e)},expression:"urlStreaming.url"}})],1),a("div",{staticClass:"q-ma-sm flex justify-start"},[a("q-toggle",{staticClass:"q-mr-md flex",attrs:{label:"Status"},model:{value:t.urlStreaming.status,callback:function(e){t.$set(t.urlStreaming,"status",e)},expression:"urlStreaming.status"}}),a("div",{staticClass:"flex q-mt-md"},[0==t.urlStreaming.status?a("q-badge",{staticStyle:{height:"max-content"},attrs:{rounded:"",color:"red",label:"Inativo"}}):a("q-badge",{staticStyle:{height:"max-content"},attrs:{rounded:"",color:"green",label:"Ativo"}})],1)],1)]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancelar",color:"primary"}}),a("q-btn",{attrs:{flat:"",label:"Salvar",color:"primary"},on:{click:function(e){return t.save(t.urlStreaming)}}})],1)],1)],1),a("q-dialog",{attrs:{persistent:""},model:{value:t.editModal,callback:function(e){t.editModal=e},expression:"editModal"}},[a("q-card",{staticStyle:{width:"350px"}},[a("q-card-section",{},[a("div",{staticClass:"q-mb-md"},[a("q-input",{attrs:{outlined:"",dense:"",label:"Nome"},model:{value:t.urlStreaming.description,callback:function(e){t.$set(t.urlStreaming,"description",e)},expression:"urlStreaming.description"}})],1),a("div",{staticClass:"q-mb-md"},[a("q-input",{attrs:{outlined:"",dense:"",label:"Endereço do Streaming"},model:{value:t.urlStreaming.url,callback:function(e){t.$set(t.urlStreaming,"url",e)},expression:"urlStreaming.url"}})],1),a("div",{staticClass:"q-ma-sm flex justify-start"},[a("q-toggle",{staticClass:"q-mr-md flex",attrs:{label:"Status"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}}),a("div",{staticClass:"flex q-mt-md"},[0==t.urlStreaming.status?a("q-badge",{staticStyle:{height:"max-content"},attrs:{rounded:"",color:"red",label:"Inativo"}}):a("q-badge",{staticStyle:{height:"max-content"},attrs:{rounded:"",color:"green",label:"Ativo"}})],1)],1)]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancelar",color:"primary"}}),a("q-btn",{attrs:{flat:"",label:"Atualizar",color:"primary"},on:{click:function(e){return t.update(t.urlStreaming,t.status)}}})],1)],1)],1)],1)},X=[],F={name:"StationInfo",data:function(){return{musicInfo:!0,defaultImage:!1,stationName:"Radio ABC",allowEdit:!0,editModal:!1,addModal:!1,lstUrls:[],urlStreaming:{description:"",url:"",status:!0,TypeId:1},type:"",status:!0,payload:{},noData:!1}},methods:{openEditModal:function(t){this.editModal=!0,this.urlStreaming=t,this.status=t.isActive},update:function(t,e){var a=this;t.isActive=e,Object(r["j"])(t.id,t).then((function(t){console.log(t),"updated"==t&&a.$q.dialog({title:"Url",message:"Url Atualizada com sucesso!"}).onOk((function(){a.editModal=!1,a.lstUrls=[],a.getAllUrls()})),a.editModal=!1})).catch((function(t){console.log(t)}))},_delete:function(t){var e=this;this.$q.dialog({title:"Delete",message:"Tem certeza que deseja remover esse registro?"}).onOk((function(){Object(r["a"])(t.id).then((function(t){"ok"==t&&e.$q.dialog({title:"Url",message:"Url removida com sucesso"}).onOk((function(){e.editModal=!1,e.lstUrls=[],e.getAllUrls()}))})).catch((function(t){500==t.response.status&&e.$q.dialog({title:"Categoria em Uso",message:"Não é possível remover uma categoria que esteja em uso"}).onOk((function(){})),console.log(t.response.status)}))})).onCancel((function(){})).onDismiss((function(){}))},save:function(t){var e=this;console.log(t),Object(r["i"])(t).then((function(t){console.log(t),"ok"===t&&e.$q.dialog({title:"Streaming",message:"URL de streaming cadastrada com sucesso."}).onOk((function(){e.lstUrls=[],e.getAllUrls()}))}))},getAllUrls:function(){var t=this;Object(r["b"])().then((function(e){e.length>0&&(t.noData=!1),e.forEach((function(e){t.lstUrls.push(e)}))}))},getUrl:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){getUrl(urlStreaming.TypeId).then((function(t){console.log(t)}))})),editStation:function(){this.allowEdit=!1}},mounted:function(){this.getAllUrls()}},J=F,G=(a("5354"),a("0016")),V=a("05c0"),H=Object(u["a"])(J,P,X,!1,null,"200ada74",null),K=H.exports;M()(H,"components",{QCard:m["a"],QBtn:p["a"],QItemLabel:g["a"],QItemSection:q["a"],QItem:b["a"],QInput:x["a"],QIcon:G["a"],QTooltip:V["a"],QToggle:y["a"],QDialog:S["a"],QCardSection:h["a"],QBadge:v["a"],QCardActions:C["a"]}),M()(H,"directives",{ClosePopup:U["a"]});var W={data:function(){return{tab:"radio",editUserName:!1,editStationName:!1,lang:"",user_acronym:"",user_name:"",user_email:"",station_name:"",images:[],showImage:""}},methods:{},created:function(){},components:{Streaming:l["default"],Metadata:Q,PodcastRss:O,NewRss:Q,News:T["default"],NewsRss:L,StationInfo:K}},Y=W,Z=(a("a149"),a("9989")),tt=a("429b"),et=a("7460"),at=a("eb85"),st=a("adad"),it=a("823b"),lt=a("8572"),nt=a("eaac"),ot=a("65c6"),rt=a("f20b"),ct=Object(u["a"])(Y,s,i,!1,null,null,null);e["default"]=ct.exports;M()(ct,"components",{QPage:Z["a"],QCard:m["a"],QCardSection:h["a"],QIcon:G["a"],QTabs:tt["a"],QTab:et["a"],QSeparator:at["a"],QTabPanels:st["a"],QTabPanel:it["a"],QField:lt["a"],QInput:x["a"],QBtn:p["a"],QTable:nt["a"],QToolbar:ot["a"],QBtnDropdown:rt["a"]})},a8de:function(t,e,a){},b30a:function(t,e,a){"use strict";a("c2bc")},c2bc:function(t,e,a){},fe3a:function(t,e,a){}}]);