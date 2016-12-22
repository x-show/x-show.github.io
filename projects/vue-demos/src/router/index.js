'use strict';
// 首页的路由
import {homeRoute} from './home.route';
// 组件的路由
import {componentsRoute} from './components.route';

let route = {};

Object.assign(route, homeRoute);
Object.assign(route, componentsRoute);

export let routeConf = route;
