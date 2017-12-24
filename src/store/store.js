import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken, removeToken } from './auth'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: getToken()
  },
  mutations: {
    SET_TOEKN (state, token) {
      state.token = token
    },
    REMOVE_TOKEN (state) {
      state.token = ''
    }
  },
  actions: {
    login ({commit}, token) {
      commit('SET_TOEKN', token)
      setToken(token)
    },
    logout ({commit}) {
      commit('REMOVE_TOKEN')
      removeToken()
    }
  },
  getters: {
    token: state => state.token
  }
})
export default store
