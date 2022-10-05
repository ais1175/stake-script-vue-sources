(self.webpackChunk=self.webpackChunk||[]).push([[3940],{35425:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const r={props:["id","small"]}},26964:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var r=a(15566);const n={name:"UserLink",components:{UserAvatar:a(34929).Z},props:["user"],computed:{providers:function(){return(0,r.v)("oauth")}}}},67834:(e,t,a)=>{"use strict";a.d(t,{Z:()=>f});var r=a(87757),n=a.n(r),s=a(9669),i=a.n(s),o=a(20629),l=a(68843),u=a(74155),c=a(95530);function d(e,t,a,r,n,s,i){try{var o=e[s](i),l=o.value}catch(e){return void a(e)}o.done?t(l):Promise.resolve(l).then(r,n)}function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){h(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const f={name:"DataTable",components:{SearchMenu:a(23134).Z,FilterMenu:c.Z},props:{title:{type:String,required:!0},api:{type:String,required:!0},filters:{type:Array,required:!1,default:function(){return[]}},headers:{type:Array,required:!0},sortBy:{type:String,required:!1,default:"id"},sortDesc:{type:Boolean,required:!1,default:!0},search:{type:Boolean,required:!1,default:!1},searchPlaceholder:{type:String,required:!1,default:null},hideFooter:{type:Boolean,required:!1,default:!1}},data:function(){return{loading:!0,options:{},items:[],itemsTotal:0}},computed:p(p({},(0,o.Se)({cacheGet:"cache/get"})),{},{cacheKey:function(){return"datatable."+this.$route.name},footerProps:function(){return{"items-per-page-options":[5,10,25,50],"items-per-page-text":this.$t("Rows per page")}},sortDirection:function(){return this.options.sortDesc?"desc":"asc"},slotHeaderMap:function(){return this.headers.reduce((function(e,t){return e["item."+t.value]=t,e}),{})}}),created:function(){this.options=this.cacheGet(this.cacheKey)||{page:1,itemsPerPage:10,sortBy:this.sortBy,sortDesc:this.sortDesc,search:null,filters:{}}},methods:p(p({},(0,o.nv)({cachePut:"cache/put"})),{},{get:function(){return l.U2.apply(void 0,arguments)},format:function(e,t){return"function"==typeof u[e]?u[e](t):t},updateDataTableOptions:function(e){var t=e.page,a=e.itemsPerPage,r=e.sortBy,n=e.sortDesc;this.options=p(p({},this.options),{},{page:t,itemsPerPage:a,sortBy:r[0],sortDesc:n[0]}),this.cacheOptions(),this.fetchData()},cacheOptions:function(){var e=p(p({},this.options),{},{filters:{},search:null});this.cachePut({key:this.cacheKey,value:e})},filterData:function(e){this.options.filters=e,this.fetchData()},searchData:function(e){this.options.search=e,this.fetchData()},fetchData:function(){var e,t=this;return(e=n().mark((function e(){var a,r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,i().get(t.api,{params:p({page:t.options.page,items_per_page:t.options.itemsPerPage,sort_by:t.options.sortBy,sort_direction:t.sortDirection,search:t.options.search},t.options.filters)});case 3:a=e.sent,r=a.data,t.items=r.items,t.itemsTotal=r.count,t.loading=!1;case 8:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(r,n){var s=e.apply(t,a);function i(e){d(s,r,n,i,o,"next",e)}function o(e){d(s,r,n,i,o,"throw",e)}i(void 0)}))})()}})}},13860:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const r={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{value:null,options:[{text:this.$t("All"),value:null},{text:this.$t("Pending"),value:"pending"},{text:this.$t("Approved"),value:"approved"},{text:this.$t("Rejected"),value:"rejected"}]}},methods:{change:function(){this.$emit("change",{status:this.value})}}}},41140:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const r={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{value:null,options:[{text:this.$t("All"),value:null},{text:this.$t("Sign up"),value:"sign_up"},{text:this.$t("Game loss"),value:"game_loss"},{text:this.$t("Game win"),value:"game_win"},{text:this.$t("Deposit"),value:"deposit"}]}},methods:{change:function(){this.$emit("change",{type:this.value})}}}},23817:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const r={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{value:"month",options:[{text:this.$t("Week"),value:"week"},{text:this.$t("Month"),value:"month"},{text:this.$t("Year"),value:"year"}]}},methods:{change:function(){this.$emit("change",{period:this.value})}}}},92270:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const r={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{value:null,options:[{text:this.$t("All"),value:null},{text:this.$t("Created"),value:"created"},{text:this.$t("Pending"),value:"pending"},{text:this.$t("Completed"),value:"completed"},{text:this.$t("Cancelled"),value:"cancelled"}]}},methods:{change:function(){this.$emit("change",{status:this.value})}}}},53182:(e,t,a)=>{"use strict";a.d(t,{Z:()=>f});var r=a(307),n=a(80141),s=a(88203),i=a(58766),o=a(551),l=a(27157),u=a(58571),c=a(31359),d=a(5025);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){h(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const f={components:{PeriodFilter:r.Z,ComparisonPeriodFilter:n.Z,UserRoleFilter:s.Z,UserStatusFilter:i.Z,GameFilter:o.Z,GameResultFilter:l.Z,DepositWithdrawalStatusFilter:u.Z,AffiliateCommissionTypeFilter:c.Z,AffiliateCommissionStatusFilter:d.Z},props:{filters:{type:Array,required:!0},disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{menu:!1,values:{},key:1}},methods:{change:function(e){this.values=p(p({},this.values),e)},reset:function(){this.key++,this.values={},this.apply()},apply:function(){this.menu=!1,this.$emit("apply",this.values)}}}},61862:(e,t,a)=>{"use strict";function r(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}a.d(t,{Z:()=>s});const s={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{value:null}},computed:{games:function(){return this.$store.getters["package-manager/getByType"](["game","prediction"])},options:function(){var e=this;return[{text:this.$t("All"),value:null}].concat(r(Object.keys(this.games).map((function(t){return{text:e.games[t].name,value:t}}))))}},methods:{change:function(){this.$emit("change",{game:this.value})}}}},33205:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const r={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{value:null,options:[{text:this.$t("All"),value:null},{text:this.$t("Profitable"),value:"profitable"},{text:this.$t("Unprofitable"),value:"unprofitable"}]}},methods:{change:function(){this.$emit("change",{result:this.value})}}}},29839:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const r={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{value:null,options:[{text:this.$t("All time"),value:null},{text:this.$t("This week"),value:"week"},{text:this.$t("Previous week"),value:"prev_week"},{text:this.$t("This month"),value:"month"},{text:this.$t("Previous month"),value:"prev_month"},{text:this.$t("This year"),value:"year"},{text:this.$t("Previous year"),value:"prev_year"}]}},methods:{change:function(){this.$emit("change",{period:this.value})}}}},48044:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const r={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{value:["user","bot","admin"],options:[{text:this.$t("User"),value:"user"},{text:this.$t("Bot"),value:"bot"},{text:this.$t("Admin"),value:"admin"}]}},methods:{change:function(){this.$emit("change",{roles:this.value})}}}},58593:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const r={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{value:null,options:[{text:this.$t("All"),value:null},{text:this.$t("Active"),value:"active"},{text:this.$t("Blocked"),value:"blocked"}]}},methods:{change:function(){this.$emit("change",{status:this.value})}}}},95392:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const r={props:{placeholder:{type:String,required:!1,default:null},disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{menu:!1,value:null}},methods:{reset:function(){this.value=null,this.search()},search:function(){this.menu=!1,this.$emit("search",this.value)}}}},22241:(e,t,a)=>{"use strict";a.d(t,{s:()=>r,x:()=>n});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-menu",{attrs:{"offset-y":!0,transition:"scroll-y-transition",bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-btn",e._g({attrs:{icon:""}},r),[a("v-icon",{attrs:{small:e.small}},[e._v("mdi-dots-vertical")])],1)]}}])},[e._v(" "),a("v-list",[a("v-list-item",{attrs:{to:{name:"admin.chat.messages.delete",params:{id:e.id}},exact:""}},[a("v-list-item-icon",[a("v-icon",{attrs:{small:e.small}},[e._v("mdi-delete")])],1),e._v(" "),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(e.$t("Delete")))])],1)],1)],1)],1)},n=[]},26294:(e,t,a)=>{"use strict";a.d(t,{s:()=>r,x:()=>n});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"text-no-wrap"},[a("user-avatar",{attrs:{user:e.user}}),e._v(" "),a("router-link",{staticClass:"mr-1",attrs:{to:{name:"admin.users.show",params:{id:e.user.id}}}},[e._v(e._s(e.user.name))]),e._v(" "),e.user.is_active?e._e():a("v-chip",{attrs:{color:"error",small:"",label:""}},[e._v(e._s(e.$t("Blocked")))]),e._v(" "),e.user.is_admin?a("v-chip",{attrs:{color:"primary",small:"",outlined:"",label:""}},[e._v(e._s(e.$t("Admin")))]):e.user.is_bot?a("v-chip",{attrs:{color:"warning",small:"",outlined:"",label:""}},[e._v(e._s(e.$t("Bot")))]):e._e(),e._v(" "),e._l(e.user.profiles,(function(t){return a("v-tooltip",{key:t.id,attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(r){var n=r.on;return[a("v-icon",e._g({attrs:{small:""}},n),[e._v("mdi-"+e._s(e.providers[t.provider_name].mdi||t.provider_name))])]}}],null,!0)},[e._v(" "),a("span",[e._v(e._s(t.provider_name)+" "+e._s(e.$t("profile ID"))+" "+e._s(t.provider_user_id))])])})),e._v(" "),e.user.referrer?a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-icon",e._g({attrs:{small:""}},r),[e._v("mdi-account-arrow-left")])]}}],null,!1,2018221753)},[e._v(" "),a("span",[e._v(e._s(e.$t("Referred by {0}",[e.user.referrer.name])))])]):e._e(),e._v(" "),e.user.two_factor_auth_enabled?a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-icon",e._g({attrs:{small:""}},r),[e._v("mdi-two-factor-authentication")])]}}],null,!1,2737254619)},[e._v(" "),a("span",[e._v(e._s(e.$t("Two-factor authentication enabled")))])]):e._e()],2)},n=[]},8230:(e,t,a)=>{"use strict";a.d(t,{s:()=>r,x:()=>n});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-toolbar",[e._t("toolbar-prepend"),e._v(" "),a("v-toolbar-title",[e._v("\n      "+e._s(e.title)+"\n    ")]),e._v(" "),a("v-spacer"),e._v(" "),a("v-btn",{attrs:{icon:"",loading:e.loading,disabled:e.loading},on:{click:e.fetchData}},[a("v-icon",[e._v("mdi-cached")])],1),e._v(" "),e.filters.length?a("filter-menu",{attrs:{filters:e.filters,disabled:e.loading},on:{apply:function(t){return e.filterData(t)}}}):e._e(),e._v(" "),e.search?a("search-menu",{attrs:{placeholder:e.searchPlaceholder,disabled:e.loading},on:{search:function(t){return e.searchData(t)}}}):e._e(),e._v(" "),e._t("toolbar-append")],2),e._v(" "),a("v-card-text",[e._t("table-prepend"),e._v(" "),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.items,page:e.options.page,"sort-by":e.options.sortBy,"sort-desc":e.options.sortDesc,"items-per-page":e.options.itemsPerPage,"footer-props":e.footerProps,"server-items-length":e.itemsTotal,loading:e.loading,"must-sort":!0,"hide-default-footer":e.hideFooter,"no-data-text":e.$t("No data found"),"no-results-text":e.$t("No data found")},on:{"update:options":e.updateDataTableOptions},scopedSlots:e._u([{key:"loading",fn:function(){return e._l(Array(e.options.itemsPerPage).fill(0),(function(e,t){return a("div",{key:t,staticClass:"align-center my-7"},[a("v-skeleton-loader",{attrs:{type:"text"}})],1)}))},proxy:!0},e._l(e.slotHeaderMap,(function(t,a){return{key:a,fn:function(r){var n=r.item;return[e.$scopedSlots[a]?e._t(a,null,{item:n}):[e._v("\n          "+e._s(t.format?e.format(t.format,e.get(n,t.value)):e.get(n,t.value))+"\n        ")]]}}}))],null,!0)}),e._v(" "),e._t("table-append")],2)],1)},n=[]},33132:(e,t,a)=>{"use strict";a.d(t,{s:()=>r,x:()=>n});var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-select",{attrs:{items:e.options,label:e.$t("Status"),disabled:e.disabled,outlined:""},on:{change:e.change},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})},n=[]},29375:(e,t,a)=>{"use strict";a.d(t,{s:()=>r,x:()=>n});var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-select",{attrs:{items:e.options,label:e.$t("Type"),disabled:e.disabled,outlined:""},on:{change:e.change},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})},n=[]},89355:(e,t,a)=>{"use strict";a.d(t,{s:()=>r,x:()=>n});var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-select",{attrs:{items:e.options,label:e.$t("Period"),disabled:e.disabled,outlined:""},on:{change:e.change},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})},n=[]},24504:(e,t,a)=>{"use strict";a.d(t,{s:()=>r,x:()=>n});var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-select",{attrs:{items:e.options,label:e.$t("Status"),disabled:e.disabled,outlined:""},on:{change:e.change},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})},n=[]},80930:(e,t,a)=>{"use strict";a.d(t,{s:()=>r,x:()=>n});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-menu",{attrs:{"close-on-content-click":!1,left:"","offset-x":"","nudge-width":300},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-btn",e._g({attrs:{icon:"",disabled:e.disabled}},r),[a("v-icon",{attrs:{color:Object.keys(e.values).length?"primary":void 0}},[e._v("\n        mdi-filter-outline\n      ")])],1)]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),a("v-card",{attrs:{outlined:""}},[a("v-card-title",[e._v("\n      "+e._s(e.$t("Filter"))+"\n    ")]),e._v(" "),a("v-divider"),e._v(" "),a("v-card-text",{staticClass:"pt-5"},e._l(e.filters,(function(t){return a(t+"-filter",{key:t+"-"+e.key,tag:"component",on:{change:function(t){return e.change(t)}}})})),1),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{color:"primary",text:"",disabled:e.disabled},on:{click:e.reset}},[e._v("\n        "+e._s(e.$t("Reset"))+"\n      ")]),e._v(" "),a("v-btn",{attrs:{color:"primary",text:"",disabled:e.disabled},on:{click:e.apply}},[e._v("\n        "+e._s(e.$t("Apply"))+"\n      ")])],1)],1)],1)},n=[]},39433:(e,t,a)=>{"use strict";a.d(t,{s:()=>r,x:()=>n});var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-select",{attrs:{items:e.options,label:e.$t("Game"),disabled:e.disabled,outlined:""},on:{change:e.change},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})},n=[]},89439:(e,t,a)=>{"use strict";a.d(t,{s:()=>r,x:()=>n});var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-select",{attrs:{items:e.options,label:e.$t("Result"),disabled:e.disabled,outlined:""},on:{change:e.change},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})},n=[]},60045:(e,t,a)=>{"use strict";a.d(t,{s:()=>r,x:()=>n});var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-select",{attrs:{items:e.options,label:e.$t("Period"),disabled:e.disabled,outlined:""},on:{change:e.change},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})},n=[]},67763:(e,t,a)=>{"use strict";a.d(t,{s:()=>r,x:()=>n});var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-select",{attrs:{items:e.options,label:e.$t("Role"),disabled:e.disabled,outlined:"",multiple:""},on:{change:e.change},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})},n=[]},60878:(e,t,a)=>{"use strict";a.d(t,{s:()=>r,x:()=>n});var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-select",{attrs:{items:e.options,label:e.$t("Status"),disabled:e.disabled,outlined:""},on:{change:e.change},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})},n=[]},25179:(e,t,a)=>{"use strict";a.d(t,{s:()=>r,x:()=>n});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-menu",{attrs:{"close-on-content-click":!1,left:"","offset-x":"","nudge-width":300},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-btn",e._g({attrs:{icon:"",disabled:e.disabled}},r),[a("v-icon",{attrs:{color:e.value?"primary":void 0}},[e._v("\n        mdi-magnify\n      ")])],1)]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),a("v-card",{attrs:{outlined:""}},[a("v-card-title",[e._v("\n      "+e._s(e.$t("Search"))+"\n    ")]),e._v(" "),a("v-divider"),e._v(" "),a("v-card-text",{staticClass:"pt-5"},[a("v-form",{on:{submit:function(t){return t.preventDefault(),e.search(t)}}},[a("v-text-field",{attrs:{label:e.$t("Search"),placeholder:e.placeholder||e.$t("Search..."),outlined:"",autofocus:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)],1),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{color:"primary",text:"",disabled:e.disabled},on:{click:e.reset}},[e._v("\n        "+e._s(e.$t("Reset"))+"\n      ")]),e._v(" "),a("v-btn",{attrs:{color:"primary",text:"",disabled:e.disabled},on:{click:e.search}},[e._v("\n        "+e._s(e.$t("Search"))+"\n      ")])],1)],1)],1)},n=[]},75762:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var r=a(79752),n=a(29827);const s={components:{ChatMessageMenu:a(83642).Z,DataTable:r.Z,UserLink:n.Z},middleware:["auth","verified","2fa_passed","admin"],metaInfo:function(){return{title:this.$t("Chat messages")}},computed:{headers:function(){return[{text:this.$t("ID"),value:"id"},{text:this.$t("Name"),value:"name",sortable:!1},{text:this.$t("Room"),value:"room.name",sortable:!1},{text:this.$t("Message"),value:"message",sortable:!1},{text:this.$t("Posted"),value:"created_ago",align:"right"},{value:"actions",sortable:!1,align:"right"}]}}};var i=a(51900),o=a(43453),l=a.n(o),u=a(66530),c=(0,i.Z)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("data-table",{attrs:{api:"/api/admin/chat/messages",title:e.$t("Chat messages"),headers:e.headers,filters:["period"],search:!0,"search-placeholder":e.$t("Message ID or text, user name or email")},scopedSlots:e._u([{key:"item.name",fn:function(e){var t=e.item.user;return[a("user-link",{attrs:{user:t}})]}},{key:"item.actions",fn:function(e){var t=e.item;return[a("chat-message-menu",{attrs:{id:t.id,small:""}})]}}])})],1)}),[],!1,null,null,null);const d=c.exports;l()(c,{VContainer:u.Z})}}]);
//# sourceMappingURL=admin-chat-messages.js.map