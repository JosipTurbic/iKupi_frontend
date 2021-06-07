import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Navbar: () => import('../..\\components\\Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c)),
  Pocetna: () => import('../..\\components\\Pocetna.vue' /* webpackChunkName: "components/pocetna" */).then(c => wrapFunctional(c.default || c)),
  Search: () => import('../..\\components\\Search.vue' /* webpackChunkName: "components/search" */).then(c => wrapFunctional(c.default || c)),
  Sidebar: () => import('../..\\components\\Sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
