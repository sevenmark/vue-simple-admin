import axios from 'axios'
import { getToken } from './auth'
import store from '../store/store'
import router from '../router'

const service = axios.create({
  baseURL: 'http://rap2api.taobao.org',  //  api的baseurl
  timeout: 5000                      //  请求超时时间
})

// request 拦截器
axios.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['X-token'] = getToken()  // 让每个请求携带token
  }
  return config
}, error => {
  // do something with request error
  console.log(error)
  Promise.reject(error)
})

// response 拦截器
service.interceptors.response.use(response => {
  const res = response.data
  if (res.code === 404) {
    console.log('error')
    router.push({path: './login'})
  } else {
    return response
  }
}, error => {
  console.log(error)
})
export default service
