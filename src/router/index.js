import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: "Login",
    component: () => import('@/views/login/index'),
  },
  {
    path: "/",
    name: 'Dashboard',
    component: () => import('@/views/dashboard/index')
  }
];

const router = new VueRouter({
  routes
});

export default router;
