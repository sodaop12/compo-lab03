import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import EventInfoView from '../views/EventInfoView.vue'
import StudentView from '../views/StudentView.vue'
const routes = [
  {
    path: '/',
    name: 'EventListView',
    component: EventListView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/event',
    name: 'EventInfoView',
    component: EventInfoView
  },
  {
    path: '/student',
    name: 'StudentView',
    component: StudentView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
