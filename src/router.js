import { createRouter, createWebHistory } from 'vue-router'
import Login from "./pages/LogIn.vue";
import Signin from "./pages/SignIn.vue";
import Hero from "./pages/coffee/Hero.vue"
import dineIndex from "./pages/dine/dineIndex.vue";
import RestoOptions from "./pages/RestoOptions.vue";
import viewReservation from "./pages/viewReservation.vue";
// import firstOption from "./pages/components/firstOption.vue"

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
      {
      path: '/',
      component: RestoOptions
    },
      {
      path: '/signin',
      component: Signin
    },
     {
      path: '/login',
      component: Login
    },
    {
      path: '/expresso',
      component: Hero
    },
    {
      path: '/dine',
      component: dineIndex
    },
    {
      path: '/view',
      component: viewReservation
    },

  ]
})

export default router
