import axios from 'axios';
import router from '../router'
import { Loading, Message } from 'element-ui'
import { Toast, MessageBox } from 'mint-ui'
// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = '';
var loadinginstace
// http request 拦截器
axios.interceptors.request.use(
  config => {
    // element ui Loading方法
    loadinginstace = Loading.service({ fullscreen: true })
    return config
  }, error => {
    loadinginstace.close()
    Message.error({
      message: '加载超时'
    })
    return Promise.reject(error)
  }
  // config => {
  //   config.data = JSON.stringify(config.data);
  //   // config.headers = {
  //   //   'Content-Type': 'application/x-www-form-urlencoded'
  //   // };
  //   if (token) {
  //     config.params = { 'token': token }
  //   }
  //   return config;
  // },
  // err => {
  //   return Promise.reject(err);
  // }
);


// http response 拦截器
axios.interceptors.response.use(
  response => {// 响应成功关闭loading
    loadinginstace.close()
    // console.log(response);
    console.log('拦截器 MsgType:' + response.data.MsgType)
    console.log('拦截器 Msg:' + response.data.Msg)
    console.log(response);
    if (response.data.MsgType === 1 && response.data.Msg!=null) {
      MessageBox({
        title: '提示',
        message: response.data.Msg,
        showCancelButton: false,
      })
    } else if (response.data.MsgType === 2 && response.data.Msg!=null) {
      MessageBox({
        title: '提示',
        message: response.data.Msg,
        showCancelButton: true,
        confirmButtonText: '去购买',
        cancelButtonText: '知道了'
      }).then(action => {
        console.log('去购买')
      })
    } else if (response.data.MsgType === 3 && response.data.Msg!=null) {
      MessageBox({
        title: '提示',
        message: response.data.Msg,
        showCancelButton: true,
        confirmButtonText: '联系客服',
        cancelButtonText: '知道了'
      }).then(action => {
        console.log('联系客服')
      })
    } else if (response.data.MsgType === 4 && response.data.Msg!=null) {
      MessageBox({
        title: '提示',
        message: response.data.Msg,
        showCancelButton: true,
        confirmButtonText: '了解详情',
        cancelButtonText: '知道了'
      }).then(action => {
        console.log('了解详情')
      })
    } else if (response.data.MsgType === 5 && response.data.Msg!=null) {
      MessageBox({
        title: '提示',
        message: response.data.Msg,
        showCancelButton: true,
        confirmButtonText: '去升级',
        cancelButtonText: '知道了'
      }).then(action => {
        console.log('去升级')
      })
    } else if(response.data.Msg!=null) {
      Toast({
        message: response.data.Msg,
        position: 'bottom',
        duration: 2000
      })
    }


    if (response.data.Code === 'Suc') {
      return response
    } else if (response.data.Code === 'PushedOffLine') {
      router.push({
        path: "/"
      })
    }
  }, error => {
    loadinginstace.close()
    Message.error({
      message: '加载失败'
    })
    return Promise.reject(error)
  }
  // response => {
  //   if (response.data.errCode == 2) {
  //     router.push({
  //       path: '/',
  //       query: { redirect: router.currentRoute.fullPath }  //从哪个页面跳转
  //     })
  //   }
  //   return response;
  // },
  // error => {
  //   // if (error.response) {
  //   //     switch (error.response.status) {
  //   //         case 401:
  //   //             // 401 清除token信息并跳转到登录页面
  //   //             store.commit(types.LOGOUT);
  //   //             router.replace({
  //   //                 path: 'login',
  //   //                 query: {redirect: router.currentRoute.fullPath}
  //   //             })
  //   //     }
  //   // }
  //   return Promise.reject(error.response.data)
  // }
);

export default axios;

/**
 * fetch 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function fetch(url, params = {}) {

  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
  })
}

/**
 * patch 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
  })
}

/**
 * put 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
  })
}

