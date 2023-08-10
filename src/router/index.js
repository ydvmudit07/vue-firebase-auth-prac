import { getAuth } from 'firebase/auth'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/sign-in',
      component: () => import('../views/SignIn.vue')
    },
    {
      path: '/Feed',
      component: () => import('../views/Feed.vue'),
      meta: {
        requiresAuth: true,
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)){
    if(getAuth().currentUser){
      next();
    }
    else{
      alert('Kindly Login')
      next("/sign-in");
    }
  }
  else{
    next();
  }
})

export default router
