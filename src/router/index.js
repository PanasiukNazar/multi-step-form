import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'greeting',
    component: () => import('@/components/Greeting.vue'),
  },

  {
    path: '/personal-info',
    name: 'personal-info',
    component: () => import('@/components/PersonalInfo.vue'),
  },

  {
    path: '/select-plan',
    name: 'select-plan',
    component: () => import('@/components/SelectPlan.vue'),
  },
  
  {
    path: '/pick-add-ons',
    name: 'pick-add-ons',
    component: () => import('@/components/AddOns.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
