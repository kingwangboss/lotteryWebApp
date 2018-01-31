import Vue from 'vue'
import Router from 'vue-router'
import PlanVC from '@/pages/planVC'
// import loginVC from '@/pages/login'
// import registVC from '@/pages/regist'
// import regist1VC from '@/pages/regist1'
// import lossPwdVC from '@/pages/lossPwd'
// import lossPwdVC1 from '@/pages/lossPwd1'
// import lossPwdv1VC from '@/pages/lossPwdv1'
// import lossPwdv1VC1 from '@/pages/lossPwdv2'
import PlanDetail from '@/pages/planDetail'
// import XZcaizhong from '@/pages/XZcaizhong'
// import changePlan from '@/pages/changePlan'
// import setParameter from '@/pages/setParameter'
// import buy from '@/pages/buy2'
// import about from '@/pages/wo/about'
// import feeback from '@/pages/wo/feeback'
// import shouquan from '@/pages/wo/shouquan'
// import XGpwd from '@/pages/wo/XGpwd'
// import pay from '@/pages/pay'
// import planShare from '@/pages/planShare'
// import setting1 from '@/pages/shujufenxi/setting1'
// import setting2 from '@/pages/shujufenxi/setting2'
// import setting3 from '@/pages/shujufenxi/setting3'
// import setting4 from '@/pages/shujufenxi/setting4'
// import routerPush from '@/pages/routerPush'
// import isNeedLogin from '@/pages/isNeedLogin'
// import error from '@/pages/error'
// import test from '@/pages/test'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'isNeedLogin',
      // component: isNeedLogin
      component: resolve => require(['@/pages/isNeedLogin'], resolve)
    },
    {
      path: '/login',
      name: 'loginVC',
      // component: loginVC
      component: resolve => require(['@/pages/login'], resolve)
    },
    {
      path: '/regist',
      name: 'registVC',
      // component: registVC
      component: resolve => require(['@/pages/regist'], resolve)
    },
    {
      path: '/regist1',
      name: 'regist1VC',
      // component: regist1VC
      component: resolve => require(['@/pages/regist1'], resolve)
    },
    {
      path: '/lossPwd',
      name: 'lossPwdVC',
      // component: lossPwdVC
      component: resolve => require(['@/pages/lossPwd'], resolve)
    },
    {
      path: '/lossPwd1',
      name: 'lossPwdVC1',
      // component: lossPwdVC1
      component: resolve => require(['@/pages/lossPwd1'], resolve)
    },
    {
      path: '/lossPwdv1',
      name: 'lossPwdv1VC',
      // component: lossPwdv1VC
      component: resolve => require(['@/pages/lossPwdv1'], resolve)
    },
    {
      path: '/lossPwdv2',
      name: 'lossPwdv1VC1',
      // component: lossPwdv1VC1
      component: resolve => require(['@/pages/lossPwdv2'], resolve)
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
      // component: XZcaizhong
      component: resolve => require(['@/pages/XZcaizhong'], resolve),
    },
    {
      path: '/changePlan',
      name: 'changePlan',
      // component: changePlan
      component: resolve => require(['@/pages/changePlan'], resolve),
    },
    {
      path: '/buy',
      name: 'buy',
      // component: buy
      component: resolve => require(['@/pages/buy2'], resolve),
    },
    {
      path: '/pay',
      name: 'pay',
      // component: pay
      component: resolve => require(['@/pages/pay'], resolve),
    },
    {
      path: '/planShare',
      name: 'planShare',
      // component: planShare
      component: resolve => require(['@/pages/planShare'], resolve),
    },
    {
      path: '/wo/about',
      name: 'about',
      // component: about
      component: resolve => require(['@/pages/wo/about'], resolve),
    },
    {
      path: '/wo/feeback',
      name: 'feeback',
      // component: feeback
      component: resolve => require(['@/pages/wo/feeback'], resolve),
    },
    {
      path: '/wo/shouquan',
      name: 'shouquan',
      // component: shouquan
      component: resolve => require(['@/pages/wo/shouquan'], resolve),
    },
    {
      path: '/wo/XGpwd',
      name: 'XGpwd',
      // component: XGpwd
      component: resolve => require(['@/pages/wo/XGpwd'], resolve),
    },
    {
      path: '/planVC/planDetail',
      name: 'PlanDetail',
      component: PlanDetail
    },
    {
      path: '/planVC/planDetail/setParameter',
      name: 'setParameter',
      // component: setParameter
      component: resolve => require(['@/pages/setParameter'], resolve),
    },
    {
      path: '/shujufenxi/setting1',
      name: 'setting1',
      // component: setting1
      component: resolve => require(['@/pages/shujufenxi/setting1'], resolve),
    },
    {
      path: '/shujufenxi/setting2',
      name: 'setting2',
      // component: setting2
      component: resolve => require(['@/pages/shujufenxi/setting2'], resolve),
    },
    {
      path: '/shujufenxi/setting3',
      name: 'setting3',
      // component: setting3
      component: resolve => require(['@/pages/shujufenxi/setting3'], resolve),
    },
    {
      path: '/shujufenxi/setting4',
      name: 'setting4',
      // component: setting4
      component: resolve => require(['@/pages/shujufenxi/setting4'], resolve),
    },
    {
      path: '/routerPush',
      name: 'routerPush',
      // component: routerPush
      component: resolve => require(['@/pages/routerPush'], resolve),
    },
    {
      path: '/suoshuizuhao',
      name: 'suoshuizuhao',
      component: resolve => require(['@/pages/suoshuizuhao'], resolve),
    },
    {
      path: '/error',
      name: 'error',
      // component: error
      component: resolve => require(['@/pages/error'], resolve),
    },
    {
      path: '/test',
      name: 'test',
      // component: test
      component: resolve => require(['@/pages/test'], resolve),
    },
  ]
})
