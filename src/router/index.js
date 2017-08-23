import Vue from 'vue'
import Router from 'vue-router'
import PlanVC from '@/pages/planVC' 
import loginVC from '@/pages/login'
import registVC from '@/pages/regist'
import lossPwdVC from '@/pages/lossPwd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loginVC',
      component: loginVC
    },
    {
      path: '/regist',
      name: 'registVC',
      component: registVC
    },
    {
      path: '/lossPwd',
      name: 'lossPwdVC',
      component: lossPwdVC
    },
    {
      path: '/PlanVC',
      name: 'PlanVC',
      component: PlanVC
    }
  ]
})
