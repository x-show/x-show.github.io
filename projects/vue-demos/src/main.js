'use strict';
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import {routeConf} from './router'
import App from './App'

// 使用插件
Vue.use(VueResource);
Vue.use(VueRouter);

// 开启路由
let router = new VueRouter({
  hashbang: false
});
router.map(routeConf);
router.start(App, '#app');
