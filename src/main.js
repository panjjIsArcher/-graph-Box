import Vue from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"
import store from "./store"
import "@/assets/css/common.less"
import _ from "lodash"
import "@/assets/js/util" //全局自动注册组件
Vue.prototype._ = _;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
