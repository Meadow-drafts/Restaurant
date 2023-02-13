import { createRouter, createWebHistory } from 'vue-router'
import Login from "./pages/LogIn.vue";
import Signin from "./pages/SignIn.vue";
import Hero from "./pages/coffee/Hero.vue"
import dineIndex from "./pages/dine/dineIndex.vue";
import RestoOptions from "./pages/RestoOptions.vue";

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
      {
      path: '/',
      component: Login
    },
      {
      path: '/signin',
      component: Signin
    },
     {
      path: '/options',
      component: RestoOptions
    },
    {
      path: '/expresso',
      component: Hero
    },
    {
      path: '/dine',
      component: dineIndex
    },

  ]
})

export default router
