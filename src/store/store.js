import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import { getToken, setToken, removeToken } from '../utils/auth'
import { loginByUsername } from '../utils/login'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: getToken()
  },
  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
    }
  },
  actions: {
    LoginByUsername ({commit}, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password).then(response => {
          const data = response.data
          commit('SET_TOKEN', data.token)
          setToken(data.token)
          router.push({path: '/'})
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    LogOut ({commit}) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  },
  getters: {
    token: state => state.token
  }
})
export default store
