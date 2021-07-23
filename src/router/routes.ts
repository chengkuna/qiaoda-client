export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login.vue'),
  },
  {
    path: '/work',
    name: 'work',
    component: () => import('@/pages/work.vue'),
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('@/pages/setting/index.vue'),
  },
]
