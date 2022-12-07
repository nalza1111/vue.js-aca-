import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ComponentView from '../views/ComponentView.vue'
import ProductView from '../views/ProductView.vue'
import UserView from '../views/UserView.vue'
import UserInput2 from '../components/UserInput2.vue'
import UserUpForm from '../components/UserUpForm.vue'

const routes = [
  {
    path: '/userupform',
    name: 'userupform',
    component: UserUpForm
  },
  {
    path: '/userinput2',
    name: 'userinput2',
    component: UserInput2
  },
  {
    path: '/user',
    name: 'user',
    component: UserView
  },
  {
    path: '/product',
    name: 'productinfo',
    component: ProductView
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductView
  },
  {
    path: '/component',
    name: 'component',
    component: ComponentView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
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
