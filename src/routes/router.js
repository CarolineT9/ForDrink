import { createRouter, createWebHistory } from 'vue-router'

import Home from  '../pages/Home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    { path: "/", name: "home", component: Home },
    { path: "/favorites", name: "favorites", component: () => import('../pages/Favorites.vue')},

  ],
})

export default router