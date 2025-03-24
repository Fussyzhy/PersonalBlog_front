import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path: '/',
      redirect: '/home'
    },
    {
      path:'/home',
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
    },
    {
      path:'/about',
      name:'about',
      component:()=>import('../views/AboutPage.vue')
    },
    {
      path:'/register',
      name:'register',
      component:()=>import('../views/RegisterPage.vue')
    }
  ]
})

export default router
