import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainPage from '../views/MainPage.vue'
import MainmainPage from '../views/MainPage.vue'
import NewsCard from '../components/NewsCard.vue'
import ANewsCard from '../components/ANewsCard.vue'
import CoffeeShop from '@/views/CoffeeShop.vue' 
import ReVeiw from '../components/Review.vue'

import Coffee1 from '../components/Coffee1.vue';
import Coffee2 from '../components/Coffee2.vue';
import Coffee3 from '../components/Coffee3.vue';
import Coffee4 from '../components/Coffee4.vue';
import Coffee5 from '../components/Coffee5.vue';
import Coffee6 from '../components/Coffee6.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main', 
      component: MainPage
    },
    {
      path: '/mainpage', 
      name: 'mainpage',
      component: MainmainPage
    },
    {
      path: '/coffee-shop', 
      name: 'coffeeshop',
      component: CoffeeShop
    },
    
    {
      path: '/news',
      name: 'allnews',
      component: NewsCard
    },
    {
      path: '/news/:id',
      name: 'news',
      component: ANewsCard
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/CoffeeShop-1', 
      name: 'ท่าช้าง',
      component: Coffee1
    },
    {
      path: '/CoffeeShop-2', 
      name: 'GoodView',
      component: Coffee2,
    },
    {
      path: '/CoffeeShop-3', 
      name: 'RiverSide',
      component: Coffee3,
    },
    {
      path: '/CoffeeShop-4', 
      name: 'WarmUp',
      component: Coffee4,
    },
    {
      path: '/CoffeeShop-5', 
      name: 'ตะวันแดง',
      component: Coffee5,
    },
    {
      path: '/CoffeeShop-6', 
      name: 'Myst MAYA Chiang Mai',
      component: Coffee6,
    },
    {
      path: '//review', 
      name: 'REVIEW',
      component: ReVeiw,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
