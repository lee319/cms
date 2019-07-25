import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Main from '@/view/main'

// 组件异步加载，实现按需加载，进去哪个页面请求那个。提高首屏渲染速度
// const login = (resolve) => require(['@/view/login/login.vue'], resolve)
// const main = (resolve) => require(['@/view/main'], resolve)
// const cancellation = (resolve) => require(['@/view/home/cancellation/cancellation.vue'], resolve)
// const admin = (resolve) => require(['@/view/home/admin/admin.vue'], resolve)
Vue.use(Router)

const route = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      meta: {
        title: 'Login - 登录'
      },
      component: () =>
        import('@/view/login/login.vue')
    },
    {
      path: '/',
      name: 'home',
      component: Main,
      redirect: '/order',
      children: [{
        path: 'order',
        name: 'order',
        meta: {
          hideInMenu: true,
          notCache: true
        },
        component: () =>
          import('@/view/home/order/order.vue')
      },
      {
        path: 'create',
        name: 'create',
        meta: {
          hideInMenu: true,
          notCache: true
        },
        component: () =>
          import('@/view/home/create/create.vue')
      },
      {
        path: 'return',
        name: 'return',
        meta: {
          hideInMenu: true,
          notCache: true
        },
        component: () =>
          import('@/view/home/return/return.vue')
      },
      {
        path: 'upload',
        name: 'upload',
        meta: {
          hideInMenu: true,
          notCache: true
        },
        component: () =>
          import('@/view/home/upload/upload.vue')
      }]
    }]
})

// 须在Router里添加mete字段
route.beforeEach((to, form, next) => {
  // 在此处判断token失效与否，跳转不同路由
  let roles = localStorage.getItem('roles') ? localStorage.getItem('roles') : ''
  NProgress.start()
  // iView.start()
  // mete字段没有时 说明为admin权限
  if (to.meta && !to.meta.role) {
    next()
  } else if (to.meta && to.meta.role.length && to.meta.role.includes(roles)) {
    next()
  } else if (to.meta && to.meta.role.length && !to.meta.role.includes(roles)) {
    route.push('/404page')
  }
})

route.afterEach(() => {
  NProgress.done()
})

export default route