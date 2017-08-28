import axios from 'axios';
import router from '../router'
import { Loading, Message } from 'element-ui'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'https://ycwidx.cpnet.com';
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
    console.log('拦截器 MsgType'+response.data.MsgType)
    console.log('拦截器 Msg'+response.data.Msg)
    if(response.data.Code === 'Suc'){
      return response
    }else{
      
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

