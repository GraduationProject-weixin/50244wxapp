(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yonghu/add-or-update"],{"0f2e":function(e,n,t){"use strict";t.r(n);var r=t("2819"),a=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=a.a},"14e9":function(e,n,t){"use strict";(function(e){t("48e8");r(t("66fd"));var n=r(t("86d6"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},"24a0":function(e,n,t){"use strict";var r=t("acaa"),a=t.n(r);a.a},2819:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,r,a,u,o){try{var i=e[u](o),s=i.value}catch(c){return void t(c)}i.done?n(s):Promise.resolve(s).then(r,a)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function i(e){u(o,r,a,i,s,"next",e)}function s(e){u(o,r,a,i,s,"throw",e)}i(void 0)}))}}var i=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("b7aa"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{cross:"",ro:{username:!1,password:!1,yonghuName:!1,yonghuPhoto:!1,yonghuPhone:!1,yonghuEmail:!1,sexTypes:!1,banjiTypes:!1,yonghuDelete:!1,createTime:!1},ruleForm:{username:"",password:"",yonghuName:"",yonghuPhoto:"",yonghuPhone:"",yonghuEmail:"",sexTypes:"",sexValue:"",banjiTypes:"",banjiValue:"",yonghuDelete:"",createTime:""},user:{},sexTypesOptions:[],sexTypesIndex:0,banjiTypesOptions:[],banjiTypesIndex:0}},components:{wPicker:i},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var n=this;return o(r.default.mark((function t(){var a,u,o,i,s;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={page:1,limit:100,dicCode:"sex_types"},t.next=3,n.$api.page("dictionary",a);case 3:return u=t.sent,n.sexTypesOptions=u.data.list,o={page:1,limit:100,dicCode:"banji_types"},t.next=8,n.$api.page("dictionary",o);case 8:if(i=t.sent,n.banjiTypesOptions=i.data.list,!e.id){t.next=16;break}return n.ruleForm.id=e.id,t.next=14,n.$api.info("yonghu",n.ruleForm.id);case 14:s=t.sent,n.ruleForm=s.data;case 16:e.yonghuId&&(n.ruleForm.yonghuId=e.yonghuId);case 17:case"end":return t.stop()}}),t)})))()},methods:{sexTypesChange:function(e){this.sexTypesIndex=e.target.value,this.ruleForm.sexValue=this.sexTypesOptions[this.sexTypesIndex].indexName,this.ruleForm.sexTypes=this.sexTypesOptions[this.sexTypesIndex].codeIndex},banjiTypesChange:function(e){this.banjiTypesIndex=e.target.value,this.ruleForm.banjiValue=this.banjiTypesOptions[this.banjiTypesIndex].indexName,this.ruleForm.banjiTypes=this.banjiTypesOptions[this.banjiTypesIndex].codeIndex},yonghuPhotoTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.yonghuPhoto=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){}))}))},createTimeConfirm:function(e){console.log(e),this.ruleForm.createTime=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return o(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.ruleForm.username){t.next=3;break}return n.$utils.msg("账户不能为空"),t.abrupt("return");case 3:if(n.ruleForm.yonghuName){t.next=6;break}return n.$utils.msg("学生姓名不能为空"),t.abrupt("return");case 6:if(n.ruleForm.yonghuPhoto){t.next=9;break}return n.$utils.msg("头像不能为空"),t.abrupt("return");case 9:if(n.ruleForm.yonghuPhone||n.$validate.isMobile(n.ruleForm.yonghuPhone)){t.next=12;break}return n.$utils.msg("手机号不能为空并且需要输入正确格式"),t.abrupt("return");case 12:if(n.ruleForm.yonghuEmail||n.$validate.isEmail(n.ruleForm.yonghuEmail)){t.next=15;break}return n.$utils.msg("电子邮箱不能为空并且需要输入正确格式"),t.abrupt("return");case 15:if(n.ruleForm.sexTypes){t.next=18;break}return n.$utils.msg("性别不能为空"),t.abrupt("return");case 18:if(n.ruleForm.banjiTypes){t.next=21;break}return n.$utils.msg("班级不能为空"),t.abrupt("return");case 21:if(!n.ruleForm.id){t.next=26;break}return t.next=24,n.$api.update("yonghu",n.ruleForm);case 24:t.next=28;break;case 26:return t.next=28,n.$api.save("yonghu",n.ruleForm);case 28:e.setStorageSync("pingluenStateState",!0),n.$utils.msgBack("提交成功");case 30:case"end":return t.stop()}}),t)})))()},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,a=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(t,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,t("543d")["default"])},4042:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"b7aa"))}},a=function(){var e=this,n=e.$createElement;e._self._c},u=[]},"86d6":function(e,n,t){"use strict";t.r(n);var r=t("4042"),a=t("0f2e");for(var u in a)"default"!==u&&function(e){t.d(n,e,(function(){return a[e]}))}(u);t("24a0");var o,i=t("f0c5"),s=Object(i["a"])(a["default"],r["b"],r["c"],!1,null,"4342335e",null,!1,r["a"],o);n["default"]=s.exports},acaa:function(e,n,t){}},[["14e9","common/runtime","common/vendor"]]]);