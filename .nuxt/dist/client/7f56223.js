(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{274:function(t,e,r){"use strict";r.r(e);var n=r(17),o=(r(45),{middleware:"auth",auth:"guest",layout:"none",data:function(){return{email:"",password:""}},methods:{onLogin:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t.$auth.loginWith("local",{data:{email:t.email,password:t.password}}),t.$router.push("/")}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})))()}}}),l=r(33),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"registerPage"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-4"}),t._v(" "),r("div",{staticClass:"col-sm-4"},[r("form",{staticClass:"mt-4"},[r("div",{staticClass:"a-box a-spacing-extra-large"},[r("div",{staticClass:"a-box-inner"},[r("h1",{staticClass:"a-spacing-small"},[t._v("Prijavi se!")]),t._v(" "),r("div",{staticClass:"a-row a-spacing-base"},[r("label",{staticClass:"a-form-label",attrs:{for:"ap_customer_name"}},[t._v("Email")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info",attrs:{type:"email",id:"ap_customer_name"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"a-row a-spacing-base"},[r("label",{staticClass:"a-form-label",attrs:{for:"ap_customer_name"}},[t._v("Lozinka")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info",attrs:{type:"password",id:"ap_customer_name"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),t._m(0)]),t._v(" "),r("div",{staticClass:"a-row a-spacing-extra-large mb-4"},[r("span",{staticClass:"a-button-primary"},[r("span",{staticClass:"a-button-inner"},[r("span",{staticClass:"a-button-text",on:{click:t.onLogin}},[t._v("Prijava")])])])]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"a-row"},[r("b",[t._v("\n                  Još niste registrirani?\n                  "),r("nuxt-link",{staticClass:"a-link-emphasis",attrs:{to:"/signup"}},[t._v("Registriraj se")])],1)])])])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"a-alert-container"},[r("div",{staticClass:"a-alert-content"},[t._v("Lozinka mora imati najmanje 6 znakova")])])}],!1,null,null,null);e.default=component.exports}}]);