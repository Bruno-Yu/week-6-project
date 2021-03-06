import { createRouter, createWebHashHistory } from 'vue-router';
import FrontView from '../views/FrontView.vue';

const routes = [
  {
    path: '/',
    name: 'frontView',
    component: FrontView,
    children: [
      {
        path: '',
        component: () => import('../views/IndexView.vue'),
      },
      {
        path: '/productsView',
        component: () => import('../views/ProductsView.vue'),
      },
      {
        path: '/cartView',
        component: () => import('../views/CartView.vue'),
      },
      {
        path: '/about',
        component: () => import('../views/AboutView.vue'),
      },
    ],
  },

  {
    path: '/admin',
    name: 'dashboardView',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/ProductsAdmin.vue'),
      },
      {
        path: '/orderAmin',
        component: () => import('../views/OrdersAdmin.vue'),
      },
      {
        path: '/couponsAdmin',
        component: () => import('../views/CouponsAdmin.vue'),
      },
      {
        path: '/aboutAdmin',
        component: () => import('../views/AboutAdmin.vue'),
      },
      {
        path: '/eventAdmin',
        component: () => import('../views/EventAdmin.vue'),
      },
    ],
  },
  {
    path: '/trueusLogin',
    name: 'trueusLogin',
    component: () => import('../views/TrueusLogin.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
});

export default router;
