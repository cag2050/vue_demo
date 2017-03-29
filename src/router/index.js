import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import Watch from '../components/Watch'
import VueAllProperty from '../components/VueAllProperty'
import Countdown from '../components/Countdown'

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
    },
    {
      path: '/VueAllProperty',
      name: 'VueAllProperty',
      component: VueAllProperty
    },
    {
      path: '/Countdown',
      name: 'Countdown',
      component: Countdown
    }
  ]
})
