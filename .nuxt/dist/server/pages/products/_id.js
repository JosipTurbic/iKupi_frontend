exports.ids = [5];
exports.modules = {

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/products/_id.vue?vue&type=template&id=039a6a2c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',[_vm._ssrNode("<div class=\"a-spacing-top-medium\"></div> <div class=\"container-fluid\"><div class=\"wayfinding-breadcrumbs-container\"><ul class=\"d-unordered-list a-horizontal a-size-small\"><li><span class=\"a-list-item\"><a href=\"#\" class=\"a-link-normal a-color-tertiary\">"+_vm._ssrEscape(_vm._s(_vm.product.category.type))+"</a></span></li> <li><span class=\"a-list-item\"> &gt; </span></li> <li><span class=\"a-list-item\"><a href=\"#\" class=\"a-link-normal a-color-tertiary\">"+_vm._ssrEscape(_vm._s(_vm.product.title))+"</a></span></li></ul></div></div> <div class=\"container-fluid\"><div class=\"dp-container\"><div class=\"row\"><div class=\"col-lg-3 col-md-3 col-sm-4\"><div class=\"imgBlock\"><div><img"+(_vm._ssrAttr("src",_vm.product.photo))+" class=\"img-fluid\"></div></div></div> <div class=\"col-lg-6 col-md-6 col-sm-8\"><div class=\"centerCol\"><div class=\"littleDiv\"><h1 class=\"productTitle\"><span class=\"largeTitle\">"+_vm._ssrEscape(_vm._s(_vm.product.title))+"</span> <br> <hr style=\"margin-top: 10px;\"> <div class=\"bookDescription\"><div class=\"bookDescriptonInner\">"+_vm._ssrEscape(_vm._s(_vm.product.description))+"</div></div> <hr style=\"margin-top: 10px;\"></h1> <div class=\"combinedBuyBox\"><div class=\"buyBox\"><div class=\"a-section\"><div class=\"clearfix\"><div class=\"float-left\"><form><input type=\"radio\" id=\"test1\" name=\"radio-group checked\"> <label for=\"test1\">Kupi</label></form></div> <div class=\"float-right\"><span class=\"a-size-medium a-color-price offer-price a-text-normal\">"+_vm._ssrEscape("\n                                        "+_vm._s(_vm.product.price)+" HRK\n                                     ")+"</span></div></div></div> <div class=\"a-section a-spacing-none\"><div class=\"row\"><div class=\"col-sm-5 col-5\"><select><option value=\"1\">Količina:   1</option> <option value=\"2\">Količina:   2</option> <option value=\"3\">Količina:   3</option> <option value=\"4\">Količina:   4</option> <option value=\"5\">Količina:   5</option></select></div></div></div> <div class=\"a-section a-spacing-small a-spacing-top-micro\"><div class=\"row\"><span class=\"a-color-base buyboxShippingLabel\"></span></div></div> <div class=\"a-section a-spacing-small\"><div class=\"a-section a-spacing-none\"><span class=\"a-size-medium a-color-success\">Dostupno odmah</span></div></div> <div class=\"a-section\"><div class=\"a-button-stack\"><span class=\"a-spacing-small a-button-primary a-button-icon\"><span class=\"a-button-inner\"><input type=\"submit\" name=\"submit.add-to-cart\" class=\"a-button-input\"> <span class=\"a-button-text\">Dodaj u košaricu</span></span></span></div></div> <div class=\"a-section\"><div class=\"a-button-stack\"><span class=\"a-spacing-small a-button-primary a-button-icon\"><span class=\"a-button-inner\"><input type=\"submit\" name=\"submit.add-to-cart\" class=\"a-button-input\"> <span class=\"a-button-text\">Kupi odmah</span></span></span></div></div> <br> <hr> <div class=\"a-section\"><div class=\"clearfix\"><div class=\"float-left\"><form><input type=\"radio\" id=\"test2\" name=\"radio-group\"> <label for=\"test2\">Kupi</label></form></div> <div class=\"float-right\"><span class=\"a-color-base offer-price a-text-normal\">"+_vm._ssrEscape(_vm._s(_vm.product.price)+" HRK")+"</span></div></div></div></div></div></div></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/products/_id.vue?vue&type=template&id=039a6a2c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/products/_id.vue?vue&type=script&lang=js&
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
//
//
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  async asyncData({
    $axios,
    params
  }) {
    try {
      let response = await $axios.$get(`/api/products/${params.id}`);
      console.log(response);
      return {
        product: response.product
      };
    } catch (err) {
      console.log(err);
    }
  }

});
// CONCATENATED MODULE: ./pages/products/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var products_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/products/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  products_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "fd747c00"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map