import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// main.js 开启mock 服务
import { mockXHR } from "../mock";
if (process.env.NODE_ENV === "development") {
  mockXHR();
}
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
