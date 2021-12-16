import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:'/index'
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
    path: '/userIndex',
    name: '我的主页',
    component: () => import('../views/user/index')
  },
  {
    path: '/userSettings',
    name: '用户设置',
    component: () => import('../views/user/settings')
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
