import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SportsView from '@/views/SportsView.vue'
import NationalView from '@/views/NationalView.vue'
import WorldView from '@/views/WorldView.vue'
import BusinessView from '@/views/BusinessView.vue'
import EntertainmentView from '@/views/EntertainmentView.vue'
import TechnologyView from '@/views/TechnologyView.vue'
import HealthView from '@/views/HealthView.vue'
import LatestView from '@/views/LatestView.vue'
import postView from '@/views/PostView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/Sports',
      name: 'Sports',
      component: SportsView,
    },
    {
      path: '/National',
      name: 'National',
      component: NationalView,
    },
    {
      path: '/World',
      name: 'World',
      component: WorldView,
    },
    {
      path: '/Business',
      name: 'Business',
      component: BusinessView,
    },
    {
      path: '/Entertainment',
      name: 'Entertainment',
      component: EntertainmentView,
    },
    {
      path: '/Technology',
      name: 'Technology',
      component: TechnologyView,
    },
    {
      path: '/Health',
      name: 'Health',
      component: HealthView,
    },
    {
      path: '/Latest',
      name: 'Latest',
      component: LatestView,
    },
    {
      path: '/postView',
      name: 'postView',
      component: postView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
