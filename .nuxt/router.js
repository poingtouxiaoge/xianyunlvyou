import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _51e91526 = () => interopDefault(import('..\\pages\\air\\index.vue' /* webpackChunkName: "pages_air_index" */))
const _ebcc1770 = () => interopDefault(import('..\\pages\\dome.vue' /* webpackChunkName: "pages_dome" */))
const _34ea5783 = () => interopDefault(import('..\\pages\\hotel\\index.vue' /* webpackChunkName: "pages_hotel_index" */))
const _9e135c46 = () => interopDefault(import('..\\pages\\post\\index.vue' /* webpackChunkName: "pages_post_index" */))
const _78a0a15e = () => interopDefault(import('..\\pages\\air\\flights.vue' /* webpackChunkName: "pages_air_flights" */))
const _2053942e = () => interopDefault(import('..\\pages\\air\\order.vue' /* webpackChunkName: "pages_air_order" */))
const _e2a5f1fa = () => interopDefault(import('..\\pages\\air\\pay.vue' /* webpackChunkName: "pages_air_pay" */))
const _30915205 = () => interopDefault(import('..\\pages\\hotel\\hotelxiangqing.vue' /* webpackChunkName: "pages_hotel_hotelxiangqing" */))
const _0e9f7625 = () => interopDefault(import('..\\pages\\post\\xiangqing.vue' /* webpackChunkName: "pages_post_xiangqing" */))
const _4cc937cf = () => interopDefault(import('..\\pages\\post\\xieyouji.vue' /* webpackChunkName: "pages_post_xieyouji" */))
const _ae5eee2e = () => interopDefault(import('..\\pages\\user\\login.vue' /* webpackChunkName: "pages_user_login" */))
const _5e73943d = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/air",
    component: _51e91526,
    name: "air"
  }, {
    path: "/dome",
    component: _ebcc1770,
    name: "dome"
  }, {
    path: "/hotel",
    component: _34ea5783,
    name: "hotel"
  }, {
    path: "/post",
    component: _9e135c46,
    name: "post"
  }, {
    path: "/air/flights",
    component: _78a0a15e,
    name: "air-flights"
  }, {
    path: "/air/order",
    component: _2053942e,
    name: "air-order"
  }, {
    path: "/air/pay",
    component: _e2a5f1fa,
    name: "air-pay"
  }, {
    path: "/hotel/hotelxiangqing",
    component: _30915205,
    name: "hotel-hotelxiangqing"
  }, {
    path: "/post/xiangqing",
    component: _0e9f7625,
    name: "post-xiangqing"
  }, {
    path: "/post/xieyouji",
    component: _4cc937cf,
    name: "post-xieyouji"
  }, {
    path: "/user/login",
    component: _ae5eee2e,
    name: "user-login"
  }, {
    path: "/",
    component: _5e73943d,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
