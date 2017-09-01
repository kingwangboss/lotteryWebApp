import Vue from 'vue'
import Router from 'vue-router'
import PlanVC from '@/pages/planVC' 
import loginVC from '@/pages/login'
import registVC from '@/pages/regist'
import lossPwdVC from '@/pages/lossPwd'
import PlanDetail from '@/pages/planDetail' 
import XZcaizhong from '@/pages/XZcaizhong'
import changePlan from '@/pages/changePlan'
import setParameter from '@/pages/setParameter'
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
      path: '/planVC',
      name: 'PlanVC',
      component: PlanVC
    },
    {
      path: '/XZcaizhong',
      name: 'XZcaizhong',
      component: XZcaizhong
    },
    {
      path: '/changePlan',
      name: 'changePlan',
      component: changePlan
    },
    {
      path: '/planVC/planDetail',
      name: 'PlanDetail',
      component: PlanDetail
    },
    {
      path: '/planVC/planDetail/setParameter',
      name: 'setParameter',
      component: setParameter
    }
  ]
})
