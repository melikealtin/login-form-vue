import { createRouter, createWebHistory } from 'vue-router'
import { getAuth } from 'firebase/auth'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: {
        authRequired: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const auth = getAuth()

  if (to.matched.some((record) => record.meta.authRequired)) {
    if (auth.currentUser) {
      next()
    } else {
      alert("You've must been logged to access this area")
      router.push('/')
    }
  } else {
    next()
  }
})

export default router
