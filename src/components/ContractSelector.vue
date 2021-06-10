<template>
  <v-row justify="center">
    <v-dialog
      overlay-color="#023565"
      persistent
      max-width="600px"
      v-model="dialog_contract_selector"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">
            <h4 class="indigo--text">Nuevo Contrato</h4></span
          >
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-select
              prepend-icon="mdi-file-document-edit"
              color="#023565"
              :items="contract_type"
              label="Tipo de Contrato"
            ></v-select>
          </v-container>
        </v-card-text>
        <v-divider></v-divider>
        <v-flex class="text-right">
          <v-btn small color="red" text class="mr-3 white--text" dark @click="$store.state.dialog_contract_selector = false">Cancelar</v-btn>
          <v-btn small color="success" text dark @click=" $store.state.dialog_contract_selector = false">Continuar</v-btn>
        </v-flex>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ContractSelector",
  data() {
    return {
      contract_type: [
        {
          id: "0",
          text: "Laboral",
        },
        {
          id: "1",
          text: "Educativa",
        },
        {
          id: "2",
          text: "Servicios",
        },
      ],
    };
  },
  computed:{
      ...mapState(['dialog_contract_selector'])
  }
};
</script>

<style>
</style>