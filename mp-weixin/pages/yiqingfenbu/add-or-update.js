(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yiqingfenbu/add-or-update"],{"1bda":function(e,n,r){"use strict";var t;r.d(n,"b",(function(){return u})),r.d(n,"c",(function(){return a})),r.d(n,"a",(function(){return t}));var u=function(){var e=this,n=e.$createElement;e._self._c},a=[]},2091:function(e,n,r){"use strict";r.r(n);var t=r("e5b2"),u=r.n(t);for(var a in t)"default"!==a&&function(e){r.d(n,e,(function(){return t[e]}))}(a);n["default"]=u.a},"40af":function(e,n,r){"use strict";var t=r("e816"),u=r.n(t);u.a},c8e5:function(e,n,r){"use strict";(function(e){r("2070");t(r("66fd"));var n=t(r("f3d2"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,r("543d")["createPage"])},e5b2:function(e,n,r){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=u(r("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,n,r,t,u,a,i){try{var o=e[a](i),s=o.value}catch(c){return void r(c)}o.done?n(s):Promise.resolve(s).then(t,u)}function i(e){return function(){var n=this,r=arguments;return new Promise((function(t,u){var i=e.apply(n,r);function o(e){a(i,t,u,o,s,"next",e)}function s(e){a(i,t,u,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("54d5"))}.bind(null,r)).catch(r.oe)},s={data:function(){return{cross:"",ruleForm:{biaoti:"",chengshi:"",xinzengquezhen:"",xinzengwuzhengzhuang:"",quezhenrenshu:"",zhiyurenshu:"",tupian:"",beizhu:""},user:{},ro:{biaoti:!1,chengshi:!1,xinzengquezhen:!1,xinzengwuzhengzhuang:!1,quezhenrenshu:!1,zhiyurenshu:!1,tupian:!1,beizhu:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var r=this;return i(t.default.mark((function u(){var a,i,o,s;return t.default.wrap((function(u){while(1)switch(u.prev=u.next){case 0:return a=e.getStorageSync("nowTable"),u.next=3,r.$api.session(a);case 3:if(i=u.sent,r.user=i.data,r.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(r.ruleForm.refid=n.refid,r.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){u.next=13;break}return r.ruleForm.id=n.id,u.next=11,r.$api.info("yiqingfenbu",r.ruleForm.id);case 11:i=u.sent,r.ruleForm=i.data;case 13:if(r.cross=n.cross,!n.cross){u.next=53;break}o=e.getStorageSync("crossObj"),u.t0=t.default.keys(o);case 17:if((u.t1=u.t0()).done){u.next=53;break}if(s=u.t1.value,"biaoti"!=s){u.next=23;break}return r.ruleForm.biaoti=o[s],r.ro.biaoti=!0,u.abrupt("continue",17);case 23:if("chengshi"!=s){u.next=27;break}return r.ruleForm.chengshi=o[s],r.ro.chengshi=!0,u.abrupt("continue",17);case 27:if("xinzengquezhen"!=s){u.next=31;break}return r.ruleForm.xinzengquezhen=o[s],r.ro.xinzengquezhen=!0,u.abrupt("continue",17);case 31:if("xinzengwuzhengzhuang"!=s){u.next=35;break}return r.ruleForm.xinzengwuzhengzhuang=o[s],r.ro.xinzengwuzhengzhuang=!0,u.abrupt("continue",17);case 35:if("quezhenrenshu"!=s){u.next=39;break}return r.ruleForm.quezhenrenshu=o[s],r.ro.quezhenrenshu=!0,u.abrupt("continue",17);case 39:if("zhiyurenshu"!=s){u.next=43;break}return r.ruleForm.zhiyurenshu=o[s],r.ro.zhiyurenshu=!0,u.abrupt("continue",17);case 43:if("tupian"!=s){u.next=47;break}return r.ruleForm.tupian=o[s],r.ro.tupian=!0,u.abrupt("continue",17);case 47:if("beizhu"!=s){u.next=51;break}return r.ruleForm.beizhu=o[s],r.ro.beizhu=!0,u.abrupt("continue",17);case 51:u.next=17;break;case 53:r.styleChange();case 54:case"end":return u.stop()}}),u)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return i(t.default.mark((function r(){var u,a,i,o,s,c,l,f,h,g;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!n.ruleForm.xinzengquezhen||n.$validate.isIntNumer(n.ruleForm.xinzengquezhen)){r.next=3;break}return n.$utils.msg("新增确诊应输入整数"),r.abrupt("return");case 3:if(!n.ruleForm.xinzengwuzhengzhuang||n.$validate.isIntNumer(n.ruleForm.xinzengwuzhengzhuang)){r.next=6;break}return n.$utils.msg("新增无症状应输入整数"),r.abrupt("return");case 6:if(!n.ruleForm.quezhenrenshu||n.$validate.isIntNumer(n.ruleForm.quezhenrenshu)){r.next=9;break}return n.$utils.msg("确诊人数应输入整数"),r.abrupt("return");case 9:if(!n.ruleForm.zhiyurenshu||n.$validate.isIntNumer(n.ruleForm.zhiyurenshu)){r.next=12;break}return n.$utils.msg("治愈人数应输入整数"),r.abrupt("return");case 12:if(!n.cross){r.next=28;break}if(o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){r.next=28;break}if(c=e.getStorageSync("crossObj"),o.startsWith("[")){r.next=24;break}for(l in c)l==o&&(c[l]=s);return f=e.getStorageSync("crossTable"),r.next=22,n.$api.update("".concat(f),c);case 22:r.next=28;break;case 24:u=Number(e.getStorageSync("userid")),a=c["id"],i=e.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 28:if(!a||!u){r.next=50;break}return n.ruleForm.crossuserid=u,n.ruleForm.crossrefid=a,h={page:1,limit:10,crossuserid:u,crossrefid:a},r.next=34,n.$api.list("yiqingfenbu",h);case 34:if(g=r.sent,!(g.data.total>=i)){r.next=40;break}return n.$utils.msg(e.getStorageSync("tips")),r.abrupt("return",!1);case 40:if(!n.ruleForm.id){r.next=45;break}return r.next=43,n.$api.update("yiqingfenbu",n.ruleForm);case 43:r.next=47;break;case 45:return r.next=47,n.$api.add("yiqingfenbu",n.ruleForm);case 47:n.$utils.msgBack("提交成功");case 48:r.next=58;break;case 50:if(!n.ruleForm.id){r.next=55;break}return r.next=53,n.$api.update("yiqingfenbu",n.ruleForm);case 53:r.next=57;break;case 55:return r.next=57,n.$api.add("yiqingfenbu",n.ruleForm);case 57:n.$utils.msgBack("提交成功");case 58:case"end":return r.stop()}}),r)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,r=n.getFullYear(),t=n.getMonth()+1,u=n.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),t=t>9?t:"0"+t,u=u>9?u:"0"+u,"".concat(r,"-").concat(t,"-").concat(u)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,r("543d")["default"])},e816:function(e,n,r){},f3d2:function(e,n,r){"use strict";r.r(n);var t=r("1bda"),u=r("2091");for(var a in u)"default"!==a&&function(e){r.d(n,e,(function(){return u[e]}))}(a);r("40af");var i,o=r("f0c5"),s=Object(o["a"])(u["default"],t["b"],t["c"],!1,null,"0536e0eb",null,!1,t["a"],i);n["default"]=s.exports}},[["c8e5","common/runtime","common/vendor"]]]);