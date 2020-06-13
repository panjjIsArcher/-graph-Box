import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path:"/",
    component:()=> import("../views/index/index"),
    name:"index",
    redirect:"transform",
    children:[
      {
        path:"/transform",
        component:()=>import("@/views/transform/transform"),
        name:"transform"
      },
      {
        path:"/button",
        component:()=> import("@/views/button/button"),
        name:"button"
      }
    ]
  },
  
];
const mode = "history";
const router = new VueRouter({
    routes,
    mode
  })
export default router
