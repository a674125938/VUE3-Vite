import { createRouter, createWebHistory } from 'vue-router'
import OldDemo from '../views/vueOld/todoList.vue'
import Demo from '../views/vueNew/todoList.vue'
import BerDemo from '../views/vueNew/betterTodoList.vue'
import LifeCycle from '../views/vueNew/lifeCycle.vue'

const routes = [
  {
    path: '/',
    name: 'OldDemo',
    component: OldDemo
  },
  {
    path: '/Demo',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/BerDemo',
    name: 'BerDemo',
    component: BerDemo
  },
  {
    path: '/LifeCycle',
    name: 'LifeCycle',
    component: LifeCycle
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
