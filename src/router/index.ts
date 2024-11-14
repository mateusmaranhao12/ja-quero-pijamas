import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Index from '@/views/Index.vue'
import LoginAdmin from '@/views/LoginAdmin.vue'
import AdicionarProduto from '@/views/AdicionarProduto.vue'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    name: 'index',
    component: Index
  },

  {
    path: '/login-admin',
    name: 'login-admin',
    component: LoginAdmin
  },

  {
    path: '/adicionar-produto',
    name: 'adicionar-produto',
    component: AdicionarProduto
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
