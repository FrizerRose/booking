import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { fetchCompanyFromURL } from '@/utils/helpers';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/reschedule/:appointmentID',
    name: 'Reschedule',
    // lazy loaded route
    component: () => import(/* webpackChunkName: "cancel" */ '../views/Reschedule.vue'),
  },
  {
    path: '/cancel/:appointmentID',
    name: 'Cancel',
    // lazy loaded route
    component: () => import(/* webpackChunkName: "cancel" */ '../views/Cancel.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue'),
    // Allows props to be passed to the 404 page through route
    // params, such as `resource` to define what wasn't found.
    props: true,
  },
  // Redirect any unmatched routes to the 404 page.
  {
    path: '/:pathMatch(.*)*',
    redirect: '404',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Simulate native-like scroll behavior when navigating to a new
  // route and using back/forward buttons.
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, left: 0 };
  },
});

router.beforeEach((to, from, next) => {
  fetchCompanyFromURL();
  next();
});

export default router;
