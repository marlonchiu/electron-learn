import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Home = require('@/components/Home.vue').default
const KeyWord = require('@/components/KeyWord.vue').default
const Report = require('@/components/Report.vue').default
const Alarm = require('@/components/Alarm.vue').default
const Help = require('@/components/Help.vue').default

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/keyword',
      name: 'keyword',
      component: KeyWord
    },
    {
      path: '/report',
      name: 'report',
      component: Report
    },
    {
      path: '/alarm',
      name: 'alarm',
      component: Alarm
    },
    {
      path: '/help',
      name: 'help',
      component: Help
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
