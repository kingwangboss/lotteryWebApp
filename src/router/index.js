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
import buy from '@/pages/buy'
import about from '@/pages/wo/about'
import feeback from '@/pages/wo/feeback'
import shouquan from '@/pages/wo/shouquan'
import XGpwd from '@/pages/wo/XGpwd'
import pay from '@/pages/pay'
import planShare from '@/pages/planShare'
import setting1 from '@/pages/shujufenxi/setting1'
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
      path: '/buy',
      name: 'buy',
      component: buy
    },
    {
      path: '/pay',
      name: 'pay',
      component: pay
    },
    {
      path: '/planShare',
      name: 'planShare',
      component: planShare
    },
    {
      path: '/wo/about',
      name: 'about',
      component: about
    },
    {
      path: '/wo/feeback',
      name: 'feeback',
      component: feeback
    },
    {
      path: '/wo/shouquan',
      name: 'shouquan',
      component: shouquan
    },
    {
      path: '/wo/XGpwd',
      name: 'XGpwd',
      component: XGpwd
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
    },
    {
      path: '/shujufenxi/setting1',
      name: 'setting1',
      component: setting1
    }
  ]
})
