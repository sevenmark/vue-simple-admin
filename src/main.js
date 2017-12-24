// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/store'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAxios, axios)

axios.interceptors.request.use(function (config) {
  if (window.location.href.indexOf('login') === -1) {
    config.headers.token = store.getters.token
  }
  return config
}, function (err) {
  return Promise.reject(err)
})

axios.interceptors.response.use(response => {
  if (response.data.status !== 0) {
    router.push({path: './login'})
  } else {
    return response
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
