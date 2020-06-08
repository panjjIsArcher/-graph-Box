import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path:"/",
    component:()=> import("../views/index/index")
  },
  
];
const mode = "history";
const router = new VueRouter({
    routes,
    mode
  })
export default router
