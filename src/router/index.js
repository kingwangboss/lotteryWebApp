import Vue from 'vue'
import Router from 'vue-router'
import PlanVC from '@/pages/planVC' 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PlanVC',
      component: PlanVC
    }
  ]
})
