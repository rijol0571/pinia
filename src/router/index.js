import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Dashboard from '@/views/Dashboard.vue'
import RegisterUser from '@/views/RegisterUser.vue'
import LoginUser from '@/views/LoginUser.vue'

import { useAuthStore } from '@/stores/auth'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterUser
  },
  {
    path: '/login',
    name: 'login',
    component: LoginUser
  }
]

const router = createRouter({
  history: createWebHistory(), // Using history mode
  routes
})

// Navigation guard for routes that require authentication
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const loggedIn = authStore.loggedIn

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/login') 
  } else {
    next()
  }
})

export default router
