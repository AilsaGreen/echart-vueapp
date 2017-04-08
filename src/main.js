// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import echarts from 'echarts';
import axios from "axios";
import font from './common/js/font';
import VueRouter from "vue-router";
import routeconfig from "./routeconfig";

Vue.use(VueRouter);


const router = new VueRouter({
  mode: 'history', //切换路径模式，变成history模式
  scrollBehavior: () => ({ y: 0 }),
   routes:routeconfig
});

axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
  return response;
}, function (error) {
  return Promise.reject(error);
});

/*axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl:config.build.httpUrl);//配置请求的根路径
 axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';*///设置post头部信息
axios.defaults.baseURL='http://localhost:8080/';
Vue.prototype.$http = axios;//其他页面在使用axios的时候直接  this.$http就可以了
/* eslint-disable no-new */
new Vue({
  el: '#app',
  font,
  router,
  template: '<App/>',
  components: { App }
})
