import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:'/header'
  },
  {
    path: '/login',
    name: '登陆',
    component: () => import('../views/login/login')
  },
  {
    path: '/index',
    name: '主页',
    component: () => import('../views/index')
  },
  {
    path: '/header',
    name: '页眉',
    component: () => import('../views/common/header')
  }
]


const router = new VueRouter({
  routes
})

// 路由守卫
router.beforeEach((to,from,next)=>{
  console.log(to);
  console.log(from);

  next()
});


export default router
