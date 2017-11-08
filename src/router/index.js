import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import News from '@/pages/news'
import Learn from '@/pages/learn'
import About from '@/pages/about'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/learn',
      name: 'Learn',
      component: Learn
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
