exports.ids = [7];
exports.modules = {

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/signup.vue?vue&type=template&id=2bad2d8a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"registerPage"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-sm-4\"></div> "),_vm._ssrNode("<div class=\"col-sm-4\">","</div>",[_vm._ssrNode("<form class=\"mt-4\">","</form>",[_vm._ssrNode("<div class=\"a-box a-spacing-extra-large\">","</div>",[_vm._ssrNode("<div class=\"a-box-inner\">","</div>",[_vm._ssrNode("<h1 class=\"a-spacing-small\">Napravi svoj račun!</h1> <div class=\"a-row a-spacing-base\"><label for=\"ap_customer_name\" class=\"a-form-label\">Vaše ime</label> <input type=\"text\" id=\"ap_customer_name\""+(_vm._ssrAttr("value",(_vm.name)))+" class=\"a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info\"></div> <div class=\"a-row a-spacing-base\"><label for=\"ap_customer_name\" class=\"a-form-label\">Email</label> <input type=\"email\" id=\"ap_customer_name\""+(_vm._ssrAttr("value",(_vm.email)))+" class=\"a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info\"></div> <div class=\"a-row a-spacing-base\"><label for=\"ap_customer_name\" class=\"a-form-label\">Lozinka</label> <input type=\"password\" id=\"ap_customer_name\""+(_vm._ssrAttr("value",(_vm.password)))+" class=\"a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info\"> <div class=\"a-alert-container\"><div class=\"a-alert-content\">Lozinka mora imati najmanje 6 znakova</div></div></div> <div class=\"a-row a-spacing-extra-large mb-4\"><span class=\"a-button-primary\"><span class=\"a-button-inner\"><span class=\"a-button-text\">Napravi svoj račun!</span></span></span></div> <hr> "),_vm._ssrNode("<div class=\"a-row\">","</div>",[_vm._ssrNode("<b>","</b>",[_vm._ssrNode("\n                  Jeste li već registrirani?\n                  "),_c('nuxt-link',{staticClass:"a-link-emphasis",attrs:{"to":"/login"}},[_vm._v("Prijavi se")])],2)])],2)])])])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/signup.vue?vue&type=template&id=2bad2d8a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/signup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var signupvue_type_script_lang_js_ = ({
  middleware: "auth",
  auth: "guest",
  layout: "none",

  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },

  methods: {
    async onSignup() {
      try {
        let data = {
          name: this.name,
          email: this.email,
          password: this.password
        };
        let response = await this.$axios.$post("/api/auth/signup", data);
        console.log(response);

        if (response.success) {
          this.$auth.loginWith("local", {
            data: {
              email: this.email,
              password: this.password
            }
          });
          this.$router.push("/");
        }
      } catch (err) {
        console.log(err);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/signup.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_signupvue_type_script_lang_js_ = (signupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/signup.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_signupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "59a2e956"
  
)

/* harmony default export */ var signup = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=signup.js.map