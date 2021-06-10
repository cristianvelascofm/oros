import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Indica Cuando está Iniciada o no una Sesión
    login_state: false,
    // El panel Derecho activo en el Main Oros
    panel_active: '', 
    stand_by: true,
  },
  mutations: {
    login(state){
      state.login_state = true
    },
    formActive(state,active){
      state.panel_active = active
      state.stand_by = false
    }
  },
  actions: {
  },
  modules: {
  }
})
