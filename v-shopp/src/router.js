import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import my from './views/op.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component:()=>import("./views/Home.vue")
    },
     {
       path:'/gw',
       name:'gw',
       component:()=>import('./views/gw.vue')
     },
    {
      path:"/geren",
      name:"geren",
      component:()=>import("./views/genrenzhongxin.vue")
    },
    {
      path:"/detail/:id",
      name:"detail",
      component:()=>import("./views/Detail.vue")
    },
    {
      path: '/list',
      name: 'list',
      component:() =>import('./views/list.vue')
    }
  ]
})
