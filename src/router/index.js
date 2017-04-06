import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import Watch from '../components/Watch'
import VueAllProperty from '../components/VueAllProperty'
import Countdown from '../components/Countdown'
import Parent from '../components/Parent'
import Child from '../components/Child'
import RegExp from '../components/RegExp'

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
    },
    {
      path: '/parent_child',
      name: 'parent_child',
      component: Parent,
      children: [
          {
            path: '',
            component: Child
          }
      ]
    },
    {
      path: '/regexp',
      name: 'RegExp',
      component: RegExp
    }
  ]
})
