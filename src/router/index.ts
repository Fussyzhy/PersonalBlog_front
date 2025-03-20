import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path:'/',
      name:'home',
      component:()=>import('../views/HomePage.vue')
    },
    {
      path:'/login',
      name:'login',
      component:()=>import('../views/LoginPage.vue')
    },
    {
      path:'/article',
      name:'article',
      component:()=>import('../views/ArticleList.vue')
    },
    {
      path:'/work',
      name:'work',
      component:()=>import('../views/WorksPage.vue')
    }
  ]
})

export default router
