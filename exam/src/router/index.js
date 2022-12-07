import { createRouter, createWebHistory } from 'vue-router'
import myBoardList from '../views/myBoardList.vue'
import myBoardWrite from '../views/myBoardWrite.vue'
import myBoardRead from '../views/myBoardRead.vue'
import myBoardUpdate from '../views/myBoardUpdate.vue'

const routes = [
  {
    path: '/myboarupdate',
    name: 'myboarupdate',
    component: myBoardUpdate
  },
  {
    path: '/myboardread',
    name: 'myboardread',
    component: myBoardRead
  },
  {
    path: '/myboardwrite',
    name: 'myboardwrite',
    component: myBoardWrite
  },
  {
    path: '/',
    name: 'myboardlist',
    component: myBoardList
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
