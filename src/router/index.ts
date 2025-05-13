import { createRouter, createWebHistory } from 'vue-router'
import { RoutePath } from '@/router/enum/RoutePath'
import { RouteName } from '@/router/enum/RouteName'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RoutePath.Task1,
      name: RouteName.Task1,
      component: () => import('@/views/Task1View.vue'),
    },
    {
      path: RoutePath.Task2,
      name: RouteName.Task2,
      component: () => import('@/views/Task2View.vue'),
    },
  ],
})

export default router
