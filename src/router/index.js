import Vue from 'vue'
import Router from 'vue-router'
const page1 = () => import('@/pages/page1') 

Vue.use(Router)

export default new Router({
  base: window.__POWERED_BY_QIANKUN__ ? `/vue` : '/',
  mode: 'history',
  routes: [
    {
      path: '/page',
      name: 'page1',
      component: page1
    }
  ]
})
