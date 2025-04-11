import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/pages/HomePage.vue'
import TeamPage from '../components/pages/TeamPage.vue'
import DownloadsPage from '../components/pages/DownloadsPage.vue'
import FeedbackPage from '../components/pages/FeedbackPage.vue'
import DonatePage from '../components/pages/DonatePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/team',
      name: 'team',
      component: TeamPage
    },
    {
      path: '/downloads',
      name: 'downloads',
      component: DownloadsPage
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: FeedbackPage
    },
    {
      path: '/donate',
      name: 'donate',
      component: DonatePage
    },
  ]
})

export default router