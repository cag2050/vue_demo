import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import Watch from '../components/Watch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Watch',
      name: 'Watch',
      component: Watch
    }
  ]
})
