import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "./store";
import axios from './axios';
import VueAxios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss' // global css
import './icons/index'
import '@/permission' // permission control
import '@/error' // error log 
// main.js 开启mock 服务
import { mockXHR } from "../mock";
if (process.env.NODE_ENV === "development") {
  mockXHR();
}
Vue.use(VueAxios, axios)
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
