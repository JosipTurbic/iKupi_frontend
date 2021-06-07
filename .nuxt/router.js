import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5b5e5df0 = () => interopDefault(import('..\\pages\\address\\index.vue' /* webpackChunkName: "pages/address/index" */))
const _4c97f2ca = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _3f5baa7b = () => interopDefault(import('..\\pages\\higijena.vue' /* webpackChunkName: "pages/higijena" */))
const _f250f960 = () => interopDefault(import('..\\pages\\hrana.vue' /* webpackChunkName: "pages/hrana" */))
const _544bdaa2 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _7e54738f = () => interopDefault(import('..\\pages\\orders.vue' /* webpackChunkName: "pages/orders" */))
const _5c652b4c = () => interopDefault(import('..\\pages\\payment.vue' /* webpackChunkName: "pages/payment" */))
const _1fcd0245 = () => interopDefault(import('..\\pages\\pice.vue' /* webpackChunkName: "pages/pice" */))
const _b1f9fd5e = () => interopDefault(import('..\\pages\\placeorder.vue' /* webpackChunkName: "pages/placeorder" */))
const _0e72cb66 = () => interopDefault(import('..\\pages\\profil.vue' /* webpackChunkName: "pages/profil" */))
const _25da5cd2 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _31c23042 = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _3c570d2a = () => interopDefault(import('..\\pages\\slatkisi.vue' /* webpackChunkName: "pages/slatkisi" */))
const _027c4d3a = () => interopDefault(import('..\\pages\\sport.vue' /* webpackChunkName: "pages/sport" */))
const _61b3b0d7 = () => interopDefault(import('..\\pages\\address\\add.vue' /* webpackChunkName: "pages/address/add" */))
const _006f7570 = () => interopDefault(import('..\\pages\\address\\_id.vue' /* webpackChunkName: "pages/address/_id" */))
const _570c7a1c = () => interopDefault(import('..\\pages\\products\\_id.vue' /* webpackChunkName: "pages/products/_id" */))
const _0c326f98 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/address",
    component: _5b5e5df0,
    name: "address"
  }, {
    path: "/cart",
    component: _4c97f2ca,
    name: "cart"
  }, {
    path: "/higijena",
    component: _3f5baa7b,
    name: "higijena"
  }, {
    path: "/hrana",
    component: _f250f960,
    name: "hrana"
  }, {
    path: "/login",
    component: _544bdaa2,
    name: "login"
  }, {
    path: "/orders",
    component: _7e54738f,
    name: "orders"
  }, {
    path: "/payment",
    component: _5c652b4c,
    name: "payment"
  }, {
    path: "/pice",
    component: _1fcd0245,
    name: "pice"
  }, {
    path: "/placeorder",
    component: _b1f9fd5e,
    name: "placeorder"
  }, {
    path: "/profil",
    component: _0e72cb66,
    name: "profil"
  }, {
    path: "/search",
    component: _25da5cd2,
    name: "search"
  }, {
    path: "/signup",
    component: _31c23042,
    name: "signup"
  }, {
    path: "/slatkisi",
    component: _3c570d2a,
    name: "slatkisi"
  }, {
    path: "/sport",
    component: _027c4d3a,
    name: "sport"
  }, {
    path: "/address/add",
    component: _61b3b0d7,
    name: "address-add"
  }, {
    path: "/address/:id",
    component: _006f7570,
    name: "address-id"
  }, {
    path: "/products/:id?",
    component: _570c7a1c,
    name: "products-id"
  }, {
    path: "/",
    component: _0c326f98,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
