(self.webpackChunk=self.webpackChunk||[]).push([[3816],{77338:(t,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>C});var e=n(87757),s=n.n(e),r=n(9669),o=n.n(r),i=n(50175),d=n.n(i);function l(t,a,n,e,s,r,o){try{var i=t[r](o),d=i.value}catch(t){return void n(t)}i.done?a(d):Promise.resolve(d).then(e,s)}function c(t){return function(){var a=this,n=arguments;return new Promise((function(e,s){var r=t.apply(a,n);function o(t){l(r,e,s,o,i,"next",t)}function i(t){l(r,e,s,o,i,"throw",t)}o(void 0)}))}}const v={mixins:[n(18623).Z],middleware:["auth","verified","2fa_passed","admin"],metaInfo:function(){return{title:this.$t("Add-ons")}},data:function(){return{form:new(d()),data:{}}},created:function(){var t=this;return c(s().mark((function a(){var n,e;return s().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o().get("/api/admin/add-ons");case 2:n=a.sent,e=n.data,t.data=e;case 5:case"end":return a.stop()}}),a)})))()},methods:{disable:function(t){var a=this;return c(s().mark((function n(){var e,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.form.post("/api/admin/add-ons/".concat(t,"/disable"));case 2:e=n.sent,r=e.data,a.$store.dispatch("message/"+(r.success?"success":"error"),{text:r.message}),r.success&&(a.data.packages[t].enabled=!1,a.data.packages[t].update_available=!1,a.data.packages[t].update_can_be_installed=!1);case 6:case"end":return n.stop()}}),n)})))()},enable:function(t){var a=this;return c(s().mark((function n(){var e,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.form.post("/api/admin/add-ons/".concat(t,"/enable"));case 2:e=n.sent,(r=e.data).success?a.$router.go():a.$store.dispatch("message/error",{text:r.message});case 5:case"end":return n.stop()}}),n)})))()}}};var u=n(51900),_=n(43453),p=n.n(_),m=n(4330),f=n(43776),h=n(5255),b=n(4794),g=n(17024),k=n(66530),w=n(6571),x=n(57894),$=(0,u.Z)(v,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-card",{attrs:{loading:!t.data.packages}},[n("v-card-title",[t._v("\n          "+t._s(t.$t("Add-ons"))+"\n        ")]),t._v(" "),n("v-card-text",t._l(t.data.packages,(function(a,e){return n("v-row",{key:e},[n("v-col",[n("v-card",{attrs:{outlined:""}},[n("v-card-title",{staticClass:"font-weight-thin"},[t._v("\n                  "+t._s(a.name)+"\n                  "),a.enabled?[n("v-chip",{staticClass:"ml-2",attrs:{color:"secondary",small:"",label:""}},[t._v("\n                      "+t._s(a.version)+"\n                    ")])]:t._e()],2),t._v(" "),n("v-card-text",[t._v("\n                  "+t._s(a.description)+"\n                  "),a.enabled&&a.update_available&&!a.update_can_be_installed?n("div",{staticClass:"mt-2 error--text"},[t._v("\n                    "+t._s(t.$t("Please upgrade Stake to version {0} first to be able to upgrade the add-on.",[t.data.releases["add-ons"][e].min_app_version]))+"\n                  ")]):!a.installed||a.enabled||a.min_app_version_installed?t._e():n("div",{staticClass:"mt-2 error--text"},[t._v("\n                    "+t._s(t.$t("Please upgrade Stake to version {0} to use this add-on",[a.min_app_version]))+"\n                  ")])]),t._v(" "),n("v-card-actions",[a.installed&&a.min_app_version_installed?[a.update_available?[a.hash?n("v-btn",{attrs:{outlined:"",color:"warning",to:{name:"admin.add-ons.install",params:{id:e}},disabled:!a.update_can_be_installed}},[n("v-icon",{attrs:{left:""}},[t._v("\n                          mdi-upload\n                        ")]),t._v("\n                        "+t._s(t.$t("Upgrade to {0}",[t.data.releases["add-ons"][e].version]))+"\n                      ")],1):t._e()]:a.enabled?[a.hash?n("v-btn",{attrs:{outlined:"",color:"primary",to:{name:"admin.add-ons.install",params:{id:e}}}},[n("v-icon",{attrs:{left:""}},[t._v("\n                          mdi-autorenew\n                        ")]),t._v("\n                        "+t._s(t.$t("Re-install"))+"\n                      ")],1):t._e()]:t._e(),t._v(" "),a.enabled?n("v-btn",{attrs:{outlined:"",color:"error"},on:{click:function(a){return t.disable(e)}}},[n("v-icon",{attrs:{left:""}},[t._v("\n                        mdi-close\n                      ")]),t._v("\n                      "+t._s(t.$t("Disable"))+"\n                    ")],1):n("v-btn",{attrs:{outlined:"",color:"success"},on:{click:function(a){return t.enable(e)}}},[n("v-icon",{attrs:{left:""}},[t._v("\n                        mdi-check\n                      ")]),t._v("\n                      "+t._s(t.$t("Enable"))+"\n                    ")],1),t._v(" "),n("v-btn",{attrs:{outlined:"",color:"grey",to:{name:"admin.add-ons.changelog",params:{id:e}}}},[n("v-icon",{attrs:{left:""}},[t._v("\n                        mdi-text\n                      ")]),t._v("\n                      "+t._s(t.$t("Changelog"))+"\n                    ")],1)]:a.installed?t._e():[a.purchase_url?n("v-btn",{attrs:{outlined:"",color:"primary",href:a.purchase_url,target:"_blank"}},[n("v-icon",{attrs:{left:""}},[t._v("\n                        mdi-cart\n                      ")]),t._v("\n                      "+t._s(t.$t("Purchase"))+"\n                    ")],1):t._e(),t._v(" "),a.hash?n("v-btn",{attrs:{outlined:"",color:"primary",to:{name:"admin.add-ons.install",params:{id:e}}}},[n("v-icon",{attrs:{left:""}},[t._v("\n                        mdi-download\n                      ")]),t._v("\n                      "+t._s(t.$t("Install"))+"\n                    ")],1):t._e()]],2)],1)],1)],1)})),1)],1)],1)],1)],1)}),[],!1,null,null,null);const C=$.exports;p()($,{VBtn:m.Z,VCard:f.Z,VCardActions:h.h7,VCardText:h.ZB,VCardTitle:h.EB,VChip:b.Z,VCol:g.Z,VContainer:k.Z,VIcon:w.Z,VRow:x.Z})}}]);
//# sourceMappingURL=admin-add-ons.js.map