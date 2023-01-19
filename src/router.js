import { createRouter, createWebHistory } from 'vue-router'
import SignUp from "./pages/SignUp.vue";
import Hero from "./pages/coffee/Hero.vue"
import dineIndex from "./pages/dine/dineIndex.vue";
import RestoOptions from "./pages/RestoOptions.vue";

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
      {
      path: '/',
      component: SignUp
    },
     {
      path: '/options',
      component: RestoOptions
    },
    {
      path: '/hero',
      component: Hero
    },
 {
      path: '/dine',
      component: dineIndex
    },

  ]
})

export default router
