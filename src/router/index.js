import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:'/login'
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
    path: '/user/index',
    name: '我的主页',
    component: () => import('../views/user/index')
  },
  {
    path: '/user/settings',
    name: '用户设置',
    component: () => import('../views/user/settings'),
    children:[
      {
        path: '/settings/user',
        name: '账号管理',
        component: () => import('../components/settings/settingsUser')
      },
      {
        path: '/password/edit',
        name: '修改密码',
        component: () => import('../components/settings/passwordEdit')
      },
      {
        path: '/mobile/edit',
        name: '修改手机',
        component: () => import('../components/settings/mobileEdit')
      },
      {
        path: '/mail/edit',
        name: '修改邮箱',
        component: () => import('../components/settings/mailEdit')
      },
      {
        path: '/account/bind',
        name: '第三方绑定',
        component: () => import('../components/settings/accountBind')
      },
      {
        path: '/history/login',
        name: '登录历史',
        component: () => import('../components/settings/historyLogin')
      },
      {
        path: '/account/logout',
        name: '注销账户',
        component: () => import('../components/settings/accountLogout')
      }
    ]
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
