(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"34df":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"bg-white"},[a("div",{staticClass:"row q-mt-xs",attrs:{group:"columns"}},[a("div",{staticClass:"col-3 rounded-borders q-px-xs"},[a("q-card",{staticClass:"q-pa-xs custom_bg "},[a("q-item",{staticClass:"q-pa-none text-white q-pa-sm rounded-borders",staticStyle:{cursor:"move"}},[a("q-item-section",{staticClass:"text-h6 text-weight-bolder text-color"},[t._v("PLANNED TASKS")]),a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"more_vert"}},[a("q-menu",{attrs:{"transition-show":"fade","transition-hide":"fade"}},[a("q-list",{staticStyle:{"min-width":"100px"}},[a("q-item",{attrs:{clickable:""}},[a("q-item-section",[t._v("Remove")])],1),a("q-item",{attrs:{clickable:""}},[a("q-item-section",[t._v("Option 1")])],1),a("q-item",{attrs:{clickable:""}},[a("q-item-section",[t._v("Option 2")])],1)],1)],1)],1)],1)],1),a("q-scroll-area",{ref:"first",staticClass:"col",style:{height:t.getHeight},attrs:{"thumb-style":t.thumbStyle,"bar-style":t.barStyle}},[a("draggable",t._b({staticClass:"list-group",attrs:{list:t.planned_task,group:"tasks"},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1}}},"draggable",t.dragOptions,!1),t._l(t.planned_task,(function(e,s){return a("q-card",{key:s,staticClass:"rounded-borders q-my-sm",on:{mouseover:function(e){return t.$set(t.task_selected_index,"planned",s)},mouseleave:function(e){t.task_selected_index.planned=null}}},[a("q-card-section",{staticClass:"row q-pa-sm"},[a("div",{staticClass:"col-12"},[a("span",{staticClass:"text-weight-bold text-h6 q-ml-sm"},[t._v(t._s(e.title))]),a("span",{staticClass:"float-right text-grey-8 q-mt-sm"},[t._v(t._s(e.label)+"\n                  "),s==t.task_selected_index.planned?a("q-icon",{staticClass:"absolute-top-right q-mr-md q-mt-xs text-red",attrs:{filled:"",size:"xs",name:"close"},on:{click:function(e){return t.deleteTask("panned",t.task_selected_index.planned)}}}):t._e()],1)])]),a("q-card-section",{staticClass:"q-pa-sm"},t._l(e.tags,(function(e,s){return a("q-chip",{key:s,attrs:{dense:"",color:e.color,"text-color":"white"}},[t._v("\n                  "+t._s(e.name)+"\n                ")])})),1),a("q-card-section",{staticClass:"q-pa-sm text-grey-8"},[t._v("\n                "+t._s(e.description)+"\n              ")])],1)})),1),t.add_model.planned?a("q-card",{staticClass:"full-width"},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("\n                Add Task\n              ")])]),a("q-card-section",{staticClass:"q-pa-sm"},[a("q-input",{attrs:{dense:"",label:"Title",outlined:""},model:{value:t.add_data.planned.title,callback:function(e){t.$set(t.add_data.planned,"title",e)},expression:"add_data.planned.title"}}),a("q-input",{staticClass:"q-mt-sm",attrs:{dense:"",label:"Label",outlined:""},model:{value:t.add_data.planned.label,callback:function(e){t.$set(t.add_data.planned,"label",e)},expression:"add_data.planned.label"}}),a("q-input",{staticClass:"q-mt-sm",attrs:{dense:"",label:"Description",outlined:""},model:{value:t.add_data.planned.description,callback:function(e){t.$set(t.add_data.planned,"description",e)},expression:"add_data.planned.description"}})],1),a("q-card-actions",{staticClass:"q-pa-sm text-grey-8",attrs:{align:"right"}},[a("q-btn",{staticClass:"text-capitalize",attrs:{label:"Add",color:"indigo-5"}}),a("q-btn",{staticClass:"text-capitalize",attrs:{label:"Cancel",color:"primary"},on:{click:function(e){t.add_model.planned=!1}}})],1)],1):a("q-item",[a("q-btn",{attrs:{icon:"add",rounded:"",flat:"",label:"Add Task"},on:{click:function(e){t.add_model.planned=!0}}})],1)],1)],1)],1),a("div",{staticClass:"col-3 q-px-xs"},[a("q-card",{staticClass:"q-pa-xs custom_bg "},[a("q-item",{staticClass:"q-pa-none text-white q-pa-sm",staticStyle:{cursor:"move"}},[a("q-item-section",{staticClass:"text-h6 text-weight-bolder text-color"},[t._v("WORK IN PROGRESS")]),a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"more_vert"}},[a("q-menu",{attrs:{"transition-show":"fade","transition-hide":"fade"}},[a("q-list",{staticStyle:{"min-width":"100px"}},[a("q-item",{attrs:{clickable:""}},[a("q-item-section",[t._v("Remove")])],1),a("q-item",{attrs:{clickable:""}},[a("q-item-section",[t._v("Option 1")])],1),a("q-item",{attrs:{clickable:""}},[a("q-item-section",[t._v("Option 2")])],1)],1)],1)],1)],1)],1),a("q-scroll-area",{ref:"first",staticClass:"col",style:{height:t.getHeight},attrs:{"thumb-style":t.thumbStyle,"bar-style":t.barStyle}},[a("draggable",t._b({staticClass:"list-group",attrs:{list:t.wip_task,group:"tasks"},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1}}},"draggable",t.dragOptions,!1),t._l(t.wip_task,(function(e,s){return a("q-card",{key:s,staticClass:"rounded-borders q-my-sm",on:{mouseover:function(e){t.task_selected_index.wip=s},mouseleave:function(e){t.task_selected_index.wip=null}}},[a("q-card-section",{staticClass:"row q-pa-sm"},[a("div",{staticClass:"col-12"},[a("span",{staticClass:"text-weight-bold text-h6 q-ml-sm"},[t._v(t._s(e.title))]),a("span",{staticClass:"float-right text-grey-8 q-mt-sm"},[t._v(t._s(e.label)+"\n                  "),s==t.task_selected_index.wip?a("q-icon",{staticClass:"absolute-top-right q-mr-md q-mt-xs text-red",attrs:{filled:"",size:"xs",name:"close"},on:{click:function(e){return t.deleteTask("wip",t.task_selected_index.wip)}}}):t._e()],1)])]),a("q-card-section",{staticClass:"q-pa-sm"},t._l(e.tags,(function(e,s){return a("q-chip",{key:s,attrs:{dense:"",color:e.color,"text-color":"white"}},[t._v("\n                  "+t._s(e.name)+"\n                ")])})),1),a("q-card-section",{staticClass:"q-pa-sm text-grey-8"},[t._v("\n                "+t._s(e.description)+"\n              ")])],1)})),1),t.add_model.wip?a("q-card",{staticClass:"full-width"},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("\n                Add Task\n              ")])]),a("q-card-section",{staticClass:"q-pa-sm"},[a("q-input",{attrs:{dense:"",label:"Title",outlined:""},model:{value:t.add_data.wip.title,callback:function(e){t.$set(t.add_data.wip,"title",e)},expression:"add_data.wip.title"}}),a("q-input",{staticClass:"q-mt-sm",attrs:{dense:"",label:"Label",outlined:""},model:{value:t.add_data.wip.label,callback:function(e){t.$set(t.add_data.wip,"label",e)},expression:"add_data.wip.label"}}),a("q-input",{staticClass:"q-mt-sm",attrs:{dense:"",label:"Description",outlined:""},model:{value:t.add_data.wip.description,callback:function(e){t.$set(t.add_data.wip,"description",e)},expression:"add_data.wip.description"}})],1),a("q-card-actions",{staticClass:"q-pa-sm text-grey-8",attrs:{align:"right"}},[a("q-btn",{staticClass:"text-capitalize",attrs:{label:"Add",color:"indigo-5"}}),a("q-btn",{staticClass:"text-capitalize",attrs:{label:"Cancel",color:"primary"},on:{click:function(e){t.add_model.wip=!1}}})],1)],1):a("q-item",[a("q-btn",{attrs:{icon:"add",rounded:"",flat:"",label:"Add Task"},on:{click:function(e){t.add_model.wip=!0}}})],1)],1)],1)],1),a("div",{staticClass:"col-3 q-px-xs"},[a("q-card",{staticClass:"q-pa-xs custom_bg2 "},[a("q-item",{staticClass:"q-pa-none text-white q-pa-sm",staticStyle:{cursor:"move"}},[a("q-item-section",{staticClass:"text-h6 text-weight-bolder text-color"},[t._v("BLOCKED\n          ")]),a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"more_vert"}},[a("q-menu",{attrs:{"transition-show":"fade","transition-hide":"fade"}},[a("q-list",{staticStyle:{"min-width":"100px"}},[a("q-item",{attrs:{clickable:""}},[a("q-item-section",[t._v("Remove")])],1),a("q-item",{attrs:{clickable:""}},[a("q-item-section",[t._v("Option 1")])],1),a("q-item",{attrs:{clickable:""}},[a("q-item-section",[t._v("Option 2")])],1)],1)],1)],1)],1)],1),a("q-scroll-area",{ref:"first",staticClass:"col",style:{height:t.getHeight},attrs:{"thumb-style":t.thumbStyle,"bar-style":t.barStyle}},[a("draggable",t._b({staticClass:"list-group",attrs:{list:t.blocked_task,group:"tasks"},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1}}},"draggable",t.dragOptions,!1),t._l(t.blocked_task,(function(e,s){return a("q-card",{key:s,staticClass:"rounded-borders q-my-sm",on:{mouseover:function(e){t.task_selected_index.blocked=s},mouseleave:function(e){t.task_selected_index.blocked=null}}},[a("q-card-section",{staticClass:"row q-pa-sm"},[a("div",{staticClass:"col-12"},[a("span",{staticClass:"text-weight-bold text-h6 q-ml-sm"},[t._v(t._s(e.title))]),a("span",{staticClass:"float-right text-grey-8 q-mt-sm"},[t._v(t._s(e.label)+"\n\n                  "),s==t.task_selected_index.blocked?a("q-icon",{staticClass:"absolute-top-right q-mr-md q-mt-xs text-red",attrs:{filled:"",size:"xs",name:"close"},on:{click:function(e){return t.deleteTask("blocked",t.task_selected_index.blocked)}}}):t._e()],1)])]),a("q-card-section",{staticClass:"q-pa-sm"},t._l(e.tags,(function(e,s){return a("q-chip",{key:s,attrs:{dense:"",color:e.color,"text-color":"white"}},[t._v("\n                  "+t._s(e.name)+"\n                ")])})),1),a("q-card-section",{staticClass:"q-pa-sm text-grey-8"},[t._v("\n                "+t._s(e.description)+"\n              ")])],1)})),1),t.add_model.blocked?a("q-card",{staticClass:"full-width"},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("\n                Add Task\n              ")])]),a("q-card-section",{staticClass:"q-pa-sm"},[a("q-input",{attrs:{dense:"",label:"Title",outlined:""},model:{value:t.add_data.blocked.title,callback:function(e){t.$set(t.add_data.blocked,"title",e)},expression:"add_data.blocked.title"}}),a("q-input",{staticClass:"q-mt-sm",attrs:{dense:"",label:"Label",outlined:""},model:{value:t.add_data.blocked.label,callback:function(e){t.$set(t.add_data.blocked,"label",e)},expression:"add_data.blocked.label"}}),a("q-input",{staticClass:"q-mt-sm",attrs:{dense:"",label:"Description",outlined:""},model:{value:t.add_data.blocked.description,callback:function(e){t.$set(t.add_data.blocked,"description",e)},expression:"add_data.blocked.description"}})],1),a("q-card-actions",{staticClass:"q-pa-sm text-grey-8",attrs:{align:"right"}},[a("q-btn",{staticClass:"text-capitalize",attrs:{label:"Add",color:"indigo-5"}}),a("q-btn",{staticClass:"text-capitalize",attrs:{label:"Cancel",color:"primary"},on:{click:function(e){t.add_model.blocked=!1}}})],1)],1):a("q-item",[a("q-btn",{attrs:{icon:"add",rounded:"",flat:"",label:"Add Task"},on:{click:function(e){t.add_model.blocked=!0}}})],1)],1)],1)],1),a("div",{staticClass:"col-3 q-px-xs"},[a("q-card",{staticClass:"q-pa-xs custom_bg2 "},[a("q-item",{staticClass:"q-pa-none text-white q-pa-sm",staticStyle:{cursor:"move"}},[a("q-item-section",{staticClass:"text-h6 text-weight-bolder text-color"},[t._v("COMPLETED\n          ")]),a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"more_vert"}},[a("q-menu",{attrs:{"transition-show":"fade","transition-hide":"fade"}},[a("q-list",{staticStyle:{"min-width":"100px"}},[a("q-item",{attrs:{clickable:""}},[a("q-item-section",[t._v("Remove")])],1),a("q-item",{attrs:{clickable:""}},[a("q-item-section",[t._v("Option 1")])],1),a("q-item",{attrs:{clickable:""}},[a("q-item-section",[t._v("Option 2")])],1)],1)],1)],1)],1)],1),a("q-scroll-area",{ref:"first",staticClass:"col",style:{height:t.getHeight},attrs:{"thumb-style":t.thumbStyle,"bar-style":t.barStyle}},[a("draggable",t._b({staticClass:"list-group",attrs:{list:t.completed_task,group:"tasks"},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1}}},"draggable",t.dragOptions,!1),t._l(t.completed_task,(function(e,s){return a("q-card",{key:s,staticClass:"rounded-borders q-my-sm",on:{mouseover:function(e){t.task_selected_index.completed=s},mouseleave:function(e){t.task_selected_index.completed=null}}},[a("q-card-section",{staticClass:"row q-pa-sm"},[a("div",{staticClass:"col-12"},[a("span",{staticClass:"text-weight-bold text-h6 q-ml-sm"},[t._v(t._s(e.title))]),a("span",{staticClass:"float-right text-grey-8 q-mt-sm"},[t._v(t._s(e.label)+"\n                  "),s==t.task_selected_index.completed?a("q-icon",{staticClass:"absolute-top-right q-mr-md q-mt-xs text-red",attrs:{filled:"",size:"xs",name:"close"},on:{click:function(e){return t.deleteTask("completed",t.task_selected_index.completed)}}}):t._e()],1)])]),a("q-card-section",{staticClass:"q-pa-sm"},t._l(e.tags,(function(e,s){return a("q-chip",{key:s,attrs:{dense:"",color:e.color,"text-color":"white"}},[t._v("\n                  "+t._s(e.name)+"\n                ")])})),1),a("q-card-section",{staticClass:"q-pa-sm text-grey-8"},[t._v("\n                "+t._s(e.description)+"\n              ")])],1)})),1),t.add_model.completed?a("q-card",{staticClass:"full-width"},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("\n                Add Task\n              ")])]),a("q-card-section",{staticClass:"q-pa-sm"},[a("q-input",{attrs:{dense:"",label:"Title",outlined:""},model:{value:t.add_data.completed.title,callback:function(e){t.$set(t.add_data.completed,"title",e)},expression:"add_data.completed.title"}}),a("q-input",{staticClass:"q-mt-sm",attrs:{dense:"",label:"Label",outlined:""},model:{value:t.add_data.completed.label,callback:function(e){t.$set(t.add_data.completed,"label",e)},expression:"add_data.completed.label"}}),a("q-input",{staticClass:"q-mt-sm",attrs:{dense:"",label:"Description",outlined:""},model:{value:t.add_data.completed.description,callback:function(e){t.$set(t.add_data.completed,"description",e)},expression:"add_data.completed.description"}})],1),a("q-card-actions",{staticClass:"q-pa-sm text-grey-8",attrs:{align:"right"}},[a("q-btn",{staticClass:"text-capitalize",attrs:{label:"Add",color:"indigo-5"}}),a("q-btn",{staticClass:"text-capitalize",attrs:{label:"Cancel",color:"primary"},on:{click:function(e){t.add_model.completed=!1}}})],1)],1):a("q-item",[a("q-btn",{attrs:{icon:"add",rounded:"",flat:"",label:"Add Task"},on:{click:function(e){t.add_model.completed=!0}}})],1)],1)],1)],1)]),a("q-resize-observer",{on:{resize:t.onResize}})],1)},i=[],l=(a("a434"),a("2b0e")),n=a("b76a"),o=a.n(n);l["a"].component("draggable",o.a);var c={name:"TaskBoard",data:function(){return{task_selected_index:{blocked:null,completed:null,planned:null,wip:null},thumbStyle:{right:"4px",borderRadius:"5px",backgroundColor:"#027be3",width:"5px",opacity:.75},add_model:{blocked:!1,completed:!1,planned:!1,wip:!1},add_data:{blocked:{},completed:{},planned:{},wip:{}},size:{},barStyle:{right:"2px",borderRadius:"9px",backgroundColor:"#027be3",width:"9px",opacity:.2},planned_task:[{title:"Buy milk",label:"15 mins",tags:[{name:"Error",color:"negative"},{name:"Warning",color:"warning"}],description:"2 Gallons of milk at the Deli store"},{title:"Dispose Garbage",label:"10 mins",tags:[{name:"Info",color:"info"},{name:"Success",color:"positive"}],description:"Sort out recyclable and waste as needed"},{title:"Write Blog",label:"10 mins",tags:[{name:"Warning",color:"warning"}],description:"Can AI make memes?"},{title:"Pay Rent",label:"5 mins",tags:[{name:"Error",color:"negative"},{name:"Warning",color:"warning"},{name:"Info",color:"info"}],description:"Transfer to bank account"}],wip_task:[{title:"Clean House",label:"30 mins",tags:[{name:"Error",color:"negative"},{name:"Success",color:"positive"}],description:"Soap wash and polish floor. Polish windows and doors. Scrap all broken glasses"},{title:"Go Trekking",label:"30 mins",tags:[{name:"Info",color:"info"},{name:"Success",color:"positive"},{name:"Info",color:"info"},{name:"Success",color:"positive"},{name:"Info",color:"info"},{name:"Success",color:"positive"}],description:"Completed 10km on cycle"}],blocked_task:[{title:"Morning Jog",label:"30 mins",tags:[{name:"Error",color:"negative"}],description:"Track using fitbit"}],completed_task:[{title:"Practice Meditation",label:"15 mins",tags:[],description:"Use Headspace app"},{title:"Maintain Daily Journal",label:"15 mins",tags:[],description:"Use Spreadsheet for now"},{title:"Go Trekking",label:"15 mins",tags:[{name:"Info",color:"info"},{name:"Success",color:"positive"}],description:"Completed 10km on cycle"}]}},computed:{dragOptions:function(){return{animation:200,group:"description",disabled:!1,ghostClass:"ghost"}},getHeight:function(){return this.size.height-90+"px"}},methods:{onResize:function(t){this.size=t},deleteTask:function(t,e){"panned"==t&&this.planned_task.splice(e,1),"wip"==t&&this.wip_task.splice(e,1),"completed"==t&&this.completed_task.splice(e,1),"blocked"==t&&this.blocked_task.splice(e,1)}}},d=c,r=(a("6910"),a("2877")),m=a("9989"),p=a("f09f"),u=a("66e5"),b=a("4074"),q=a("0016"),_=a("4e73"),g=a("1c1c"),k=a("4983"),x=a("a370"),f=a("b047"),C=a("27f9"),h=a("4b7e"),v=a("9c40"),w=a("3980"),y=a("eebe"),S=a.n(y),T=Object(r["a"])(d,s,i,!1,null,"e79187b8",null);e["default"]=T.exports;S()(T,"components",{QPage:m["a"],QCard:p["a"],QItem:u["a"],QItemSection:b["a"],QIcon:q["a"],QMenu:_["a"],QList:g["a"],QScrollArea:k["a"],QCardSection:x["a"],QChip:f["a"],QInput:C["a"],QCardActions:h["a"],QBtn:v["a"],QResizeObserver:w["a"]})},6910:function(t,e,a){"use strict";a("9d10")},"9d10":function(t,e,a){}}]);