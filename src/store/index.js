import Vue from 'vue'
import Vuex from 'vuex'
import postsModule from './posts'
import mainService from '../main.service'

Vue.use(Vuex)

const state = {
  isAuthenticated: false
}

const store = new Vuex.Store({
  modules: {
    postsModule
  },
  state,
  getters: {
    isAuthenticated: (state) => {
      return state.isAuthenticated
    }
  },
  mutations: {
    logout (state) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('token', null)
        window.localStorage.setItem('tokenExpiration', null)
      }
      state.isAuthenticated = false
    },

    login (state, token) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('token', token.token)
        window.localStorage.setItem('tokenExpiration', token.expiration)
      }
      state.isAuthenticated = true
    }
  },
  actions: {
    logout (context) {
      context.commit('logout')
    },
    login (context, credentials) {
      return new Promise(resolve => {
        mainService.login(credentials).then(data => {
          context.commit('login', data)
          resolve()
        })
          .catch(() => window.alert('Could not login!'))
      })
    }
  }

})

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function () {
    let expiration = window.localStorage.getItem('tokenExpiration')
    let unixTimestamp = new Date().getTime() / 1000
    if (expiration !== null && parseInt(expiration) - unixTimestamp > 0) {
      store.state.isAuthenticated = true
    }
  })
}

export default store
