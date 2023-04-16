import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'
// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      bgc: 'light',
      login: false
    }
  },
  mutations: {
    changeBgc (state, isDark) {
      isDark ? state.bgc = 'dark' : state.bgc = 'light'
    },
    changeLogin (state) {
      state.login = true
      console.log(111)
    }
  },
  plugins: [
    createPersistedstate({
      keys: 'blog',
      path: ['login']
    })
  ]
})

export default store
