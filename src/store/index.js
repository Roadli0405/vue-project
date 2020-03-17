import state from './state'
import mutations from './mutations'
import actions from './actions'
import Vue from 'vue'
import Vuex from 'vuex'
import worthBuy from './modules/worthBuy'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    worthBuy
  }
})