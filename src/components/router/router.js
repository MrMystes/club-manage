/**
 * Created by ntxyt on 2017/3/23.
 */

import Vue from 'vue'
import Router from 'vue-router'
import Main from '../Main.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})

