import Vue from "vue";
import VueRouter from "vue-router";

/* Layout */
import Layout from '@/layout'

Vue.use(VueRouter);

export const constantRoutes  = [
  {
    path: '/login',
    name: "Login",
    component: () => import('@/views/login/index'),
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: '首页',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard', affix: true }
    }]
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: (resolve) => require(['@/views/features/redirect'], resolve)
      }
    ]
  },
  {
    path: '/account',
    component: Layout,
    hidden: true,
    redirect: 'noredirect',
    children: [
      {
        path: 'profile',
        name: '个人资料',
        component: () => import('@/views/account/profile.vue'),

        meta: { title: '个人资料' }

      },
      {
        path: 'timeline',
        name: '最近活动',
        component: () => import('@/views/account/timeline.vue'),
        hidden: true,
        meta: { title: '最近活动' }

      },
      {
        path: 'updatePwd',
        name: '修改密码',
        component: () => import('@/views/account/updatePwd.vue'),
        hidden: true,
        meta: { title: '修改密码' }
      }
    ]
  }

];

const createRouter = () => new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})


const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
