webpackJsonp([1],{"45JU":function(e,t){},ntcu:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={data:function(){return{formData:{username:"",password:"",email:""}}},methods:{handleRegister:function(){var e=this;this.$axios.post("/user",this.formData).then(function(t){console.log(t),200==t.code?(e.$message("注册成功！"),setTimeout(function(){return e.$router.push("/")},500)):e.$message(t.msg)})}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"body-login"},[a("div",{staticClass:"clear"}),e._v(" "),a("div",{staticClass:"login"},[a("h2",[e._v("新用户注册")]),e._v(" "),a("el-form",[a("el-form-item",[a("el-input",{attrs:{placeholder:"用户名"},model:{value:e.formData.username,callback:function(t){e.$set(e.formData,"username",t)},expression:"formData.username"}})],1),e._v(" "),a("el-form-item",[a("el-input",{attrs:{placeholder:"邮箱"},model:{value:e.formData.email,callback:function(t){e.$set(e.formData,"email",t)},expression:"formData.email"}})],1),e._v(" "),a("el-form-item",[a("el-input",{attrs:{type:"password",placeholder:"密码"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleRegister(t):null}},model:{value:e.formData.password,callback:function(t){e.$set(e.formData,"password",t)},expression:"formData.password"}})],1),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.handleRegister}},[e._v("注册")])],1)],1)])},staticRenderFns:[]};var n=a("VU/8")(r,s,!1,function(e){a("45JU")},"data-v-4b2106f2",null);t.default=n.exports}});
//# sourceMappingURL=1.d5f2f481e4c50980edf9.js.map