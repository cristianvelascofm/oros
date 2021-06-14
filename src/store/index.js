import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Indica Cuando está Iniciada o no una Sesión
    login_state: false,
    // El panel Derecho activo en el Main Oros
    panel_active: '', 
    
    type_user: 'root',
    dialog_contract_selector: false,

    // Variables para activacion de Paneles
    stand_by: true,
    table_panel: false,
    account_panel: false,
    formulario_nuevo: false,
    new_person: false,
    new_contract: false,
    title_form_person: '',
  },
  mutations: {
    login(state){
      state.login_state = true
    },
    formActive(state,active){
      
      state.panel_active = active
      if(active != 'Close'){
        if(active == "Contratos"){
          state.new_contract = true
          state.new_person = false
        }else{
          state.new_person = true
          state.new_contract = false
          var title = ""
          for(var i = 0; i < active.length-1 ; i++){
            title = title + active.charAt(i)
          }
          state.title_form_person = title
          
        }
        state.table_panel = true
        state.stand_by = false
      }else{
      state.stand_by = true
      state.table_panel = false
    }
    },
    closeDialogForm(state){
      state.formulario_nuevo = false
    },
    accountMenu(state,action){
      if(action == 'Cerrar Sesión'){
        state.login_state = false
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
