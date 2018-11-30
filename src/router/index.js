import Vue from 'vue'
import hook from './hook'
import Router from 'vue-router'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    }
  ]
})

for (let h in hook) router[h](hook[h])

export default router
