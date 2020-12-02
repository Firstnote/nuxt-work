import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2c461a47 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _2223373c = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _227bf8ac = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _4c874e2c = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _54baf000 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _2077408a = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _33519179 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _2c461a47,
    children: [{
      path: "",
      component: _2223373c,
      name: "home"
    }, {
      path: "/login",
      component: _227bf8ac,
      name: "login"
    }, {
      path: "/register",
      component: _227bf8ac,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _4c874e2c,
      name: "profile"
    }, {
      path: "/settings",
      component: _54baf000,
      name: "settings"
    }, {
      path: "/editor",
      component: _2077408a,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _33519179,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
