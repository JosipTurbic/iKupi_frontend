exports.ids = [6];
exports.modules = {

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profil.vue?vue&type=template&id=e0c04768&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',[_vm._ssrNode("<div class=\"container-fluid c-section\"><div class=\"row\"><div class=\"col-sm-3\"></div> <div class=\"col-sm-6\"><div class=\"a-spacing-top-medium\"></div> <h2>Profil</h2> <a href=\"#\">Odjavi se</a> <form><div class=\"a-spacing-top-medium\"><label>Ime</label> <input"+(_vm._ssrAttr("placeholder",_vm.$auth.$state.user.user.name))+(_vm._ssrAttr("value",(_vm.name)))+" class=\"a-input-text\" style=\"width: 100%\"></div> <div class=\"a-spacing-top-medium\"><label>Email</label> <input"+(_vm._ssrAttr("placeholder",_vm.$auth.$state.user.user.email))+(_vm._ssrAttr("value",(_vm.email)))+" class=\"a-input-text\" style=\"width: 100%\"></div> <div class=\"a-spacing-top-medium\"><label>Lozinka</label> <input"+(_vm._ssrAttr("value",(_vm.password)))+" class=\"a-input-text\" style=\"width: 100%\"></div> <hr> <div class=\"a-spacing-top-large\"><span class=\"a-button-register\"><span class=\"a-button-inner\"><span class=\"a-button-text\">Ažuriraj</span></span></span></div></form> <br></div> <div class=\"col-sm-3\"></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profil.vue?vue&type=template&id=e0c04768&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profil.vue?vue&type=script&lang=js&
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
/* harmony default export */ var profilvue_type_script_lang_js_ = ({
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },

  methods: {
    async onUpdateProfile() {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password
      };

      try {
        let response = await this.$axios.$put('/api/auth/user', data);

        if (response.success) {
          this.name = "";
          this.email = "";
          this.password = "";
          await this.$auth.fetchUser();
        }
      } catch (err) {
        console.log(err);
      }
    },

    async onLogout() {
      await this.$auth.logout();
    }

  }
});
// CONCATENATED MODULE: ./pages/profil.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilvue_type_script_lang_js_ = (profilvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/profil.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3653847a"
  
)

/* harmony default export */ var profil = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=profil.js.map