import { wrapFunctional } from './utils'

export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Navbar } from '../..\\components\\Navbar.vue'
export { default as Pocetna } from '../..\\components\\Pocetna.vue'
export { default as Search } from '../..\\components\\Search.vue'
export { default as Sidebar } from '../..\\components\\Sidebar.vue'

export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyNavbar = import('../..\\components\\Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
export const LazyPocetna = import('../..\\components\\Pocetna.vue' /* webpackChunkName: "components/pocetna" */).then(c => wrapFunctional(c.default || c))
export const LazySearch = import('../..\\components\\Search.vue' /* webpackChunkName: "components/search" */).then(c => wrapFunctional(c.default || c))
export const LazySidebar = import('../..\\components\\Sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => wrapFunctional(c.default || c))
