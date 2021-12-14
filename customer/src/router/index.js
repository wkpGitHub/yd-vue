import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/layout'

import login from '@/pages/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      component: Layout,
      redirect: '/test',
      children: [
        {
          path: '/test',
          name: 'test',
          meta: { title: '首页', icon: 'el-icon-s-home', noCache: true },
          component: () => import('../pages/page1')
        },
      ]
    },
  ]
})
