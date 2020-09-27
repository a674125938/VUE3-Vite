import { createRouter, createWebHashHistory } from 'vue-router'
import OldDemo from '../components/vueOld/todoList.vue'
import Demo from '../components/vueNew/todoList.vue'
import BerDemo from '../components/vueNew/betterTodoList.vue'
import LifeCycle from '../components/vueNew/lifeCycle.vue'

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
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
