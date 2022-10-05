(self.webpackChunk=self.webpackChunk||[]).push([[576],{68805:(t,e,a)=>{"use strict";a.d(e,{Z:()=>u});var n=a(94015),r=a.n(n),s=a(23645),i=a.n(s)()(r());i.push([t.id,".suit[data-v-714ec931]{font-size:1.5em}","",{version:3,sources:["webpack://./resources/js/components/Games/Cards/PlayingCardAbbreviation.vue"],names:[],mappings:"AAsCA,uBACE,eArCF",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.suit {\r\n  font-size: 1.5em;\r\n}\r\n"],sourceRoot:""}]);const u=i},85806:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n={props:{card:{required:!0,validator:function(t){return"string"==typeof t&&2===t.length||null===t}}},computed:{suit:function(){return this.card?this.card[0]:null},suitSymbol:function(){return"D"===this.suit?"♦":"C"===this.suit?"♣":"H"===this.suit?"♥":"♠"},rank:function(){return this.card?this.card[1]:null},rankValue:function(){return"T"===this.rank?10:this.rank},color:function(){return["D","H"].indexOf(this.suit)>-1?"red":"text--primary"+(this.$vuetify.theme.isDark?" text--darken-1":"")}}}},69567:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var n=a(87757),r=a.n(n),s=a(9669),i=a.n(s),u=a(74155),l=a(68843);function o(t,e,a,n,r,s,i){try{var u=t[s](i),l=u.value}catch(t){return void a(t)}u.done?e(l):Promise.resolve(l).then(n,r)}const c={name:"KeyValueTable",props:["name","api","headers"],data:function(){return{data:null}},watch:{api:function(){this.loadData()}},created:function(){this.loadData()},methods:{value:function(t){var e=t.lookup?this.data[t.lookup][this.data[this.name][t.value]]:(0,l.U2)(this.data[this.name],t.value);return"boolean"==typeof e?e?this.$t("Yes"):this.$t("No"):t.format?this.format(t.format,e):e},format:function(t,e){return"function"==typeof u[t]?u[t](e):e},loadData:function(){var t,e=this;return(t=r().mark((function t(){var a,n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.data=null,t.next=3,i().get(e.api);case 3:a=t.sent,n=a.data,e.data=n,n[e.name]&&e.$emit("load",{data:n[e.name]});case 7:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(n,r){var s=t.apply(e,a);function i(t){o(s,n,r,i,u,"next",t)}function u(t){o(s,n,r,i,u,"throw",t)}i(void 0)}))})()}}}},24748:(t,e,a)=>{"use strict";var n=a(93379),r=a.n(n),s=a(68805),i={insert:"head",singleton:!1};r()(s.Z,i);s.Z.locals},9284:(t,e,a)=>{"use strict";a.d(e,{s:()=>n,x:()=>r});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{class:t.color+"--text"},[t._v("\n  "+t._s(t.rankValue)),a("span",{staticClass:"suit"},[t._v(t._s(t.suitSymbol))])])},r=[]},85579:(t,e,a)=>{"use strict";a.d(e,{s:()=>n,x:()=>r});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",[t._l(t.headers,(function(e){return a("tr",{key:e.value},[a("td",[t._v(t._s(e.text))]),t._v(" "),a("td",{staticClass:"text-right"},[t.data?t._t(e.value,[t._v("\n            "+t._s(t.value(e))+"\n          ")],{item:t.data[t.name]}):a("v-skeleton-loader",{attrs:{type:"text","min-width":"60"}})],2)])})),t._v(" "),t.data?t._t("after",null,{item:t.data}):t._e()],2)]},proxy:!0}],null,!0)})},r=[]},65101:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>i});var n=a(73398),r=a(81773);const s={components:{UserProfileModal:a(91235).Z,KeyValueTable:n.Z,Card:r.Z},props:["id"],computed:{headers:function(){return[{text:this.$t("Player"),value:"account.user.name"},{text:this.$t("Game"),value:"title"},{text:this.$t("Bet"),value:"bet",format:"decimal"},{text:this.$t("Win"),value:"win",format:"decimal"},{text:this.$t("Profit"),value:"profit",format:"decimal"},{text:this.$t("Deck"),value:"gameable.deck"},{text:this.$t("Bet"),value:"gameable.bet_type_title"},{text:this.$t("Win"),value:"gameable.win_type_title"},{text:this.$t("Player hand"),value:"gameable.player_hand"},{text:this.$t("Player score"),value:"gameable.player_score"},{text:this.$t("Banker hand"),value:"gameable.banker_hand"},{text:this.$t("Banker score"),value:"gameable.banker_score"},{text:this.$t("Played"),value:"updated_ago"}]}}};const i=(0,a(51900).Z)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("key-value-table",{attrs:{name:"game",api:"/api/history/games/"+t.id,headers:t.headers},scopedSlots:t._u([{key:"account.user.name",fn:function(t){var e=t.item.account.user;return[a("user-profile-modal",{attrs:{user:e}})]}},{key:"gameable.deck",fn:function(e){var n=e.item.gameable;return[t._l(n.deck.slice(0,8),(function(t){return a("card",{key:"deck-"+t,attrs:{card:t}})})),t._v("\n    ...\n  ")]}},{key:"gameable.player_hand",fn:function(e){var n=e.item.gameable;return t._l(n.player_hand,(function(t){return a("card",{key:"player-"+t,attrs:{card:t}})}))}},{key:"gameable.player_score",fn:function(e){var a=e.item.gameable;return[t._v("\n    "+t._s(a.player_score)+"\n  ")]}},{key:"gameable.banker_hand",fn:function(e){var n=e.item.gameable;return t._l(n.banker_hand,(function(t){return a("card",{key:"banker-"+t,attrs:{card:t}})}))}},{key:"gameable.banker_score",fn:function(e){var a=e.item.gameable;return[t._v("\n    "+t._s(a.banker_score)+"\n  ")]}}])})}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=baccarat-resources-js-pages-show.js.map