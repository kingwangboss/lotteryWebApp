import Vue from 'vue'
import Router from 'vue-router'
import PlanVC from '@/pages/planVC'
import loginVC from '@/pages/login'
import registVC from '@/pages/regist'
import regist1VC from '@/pages/regist1'
import lossPwdVC from '@/pages/lossPwd'
import lossPwdVC1 from '@/pages/lossPwd1'
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
import setting2 from '@/pages/shujufenxi/setting2'
import setting3 from '@/pages/shujufenxi/setting3'
import setting4 from '@/pages/shujufenxi/setting4'
import routerPush from '@/pages/routerPush'
import isNeedLogin from '@/pages/isNeedLogin'
import error from '@/pages/error'
import test from '@/pages/test'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'isNeedLogin',
      component: isNeedLogin
    },
    {
      path: '/login',
      name: 'loginVC',
      component: loginVC
    },
    {
      path: '/regist',
      name: 'registVC',
      component: registVC
    },
    {
      path: '/regist1',
      name: 'regist1VC',
      component: regist1VC
    },
    {
      path: '/lossPwd',
      name: 'lossPwdVC',
      component: lossPwdVC
    },
    {
      path: '/lossPwd1',
      name: 'lossPwdVC1',
      component: lossPwdVC1
    },
    {
      path: '/planVC',
      name: 'PlanVC',
      component: PlanVC,
      beforeEnter(to, form, next) {
        if (to.path === '/login') {
          next({ name: 'loginVC' })
        }

        next()
      }
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
    },
    {
      path: '/shujufenxi/setting2',
      name: 'setting2',
      component: setting2
    },
    {
      path: '/shujufenxi/setting3',
      name: 'setting3',
      component: setting3
    },
    {
      path: '/shujufenxi/setting4',
      name: 'setting4',
      component: setting4
    },
    {
      path: '/routerPush',
      name: 'routerPush',
      component: routerPush
    },
    {
      path: '/error',
      name: 'error',
      component: error
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
  ]
})
