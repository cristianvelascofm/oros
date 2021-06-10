<template>
  <v-container fluid>
    <v-layout fill-height style="height: 50px">
      <v-flex class="ma-0 pa-0 ba-0 pr-">
        <AccountMenu v-if="login_state" class="pa-0"/>
      </v-flex>
    </v-layout>
    <v-layout class="" fill-height style="height: 620px" justify-center align-center>
      <v-flex xs12 class="text-center white--text ma-0 pa-0 ba-0">
        <Home v-if="! login_state" />
        <MainOros v-if="login_state" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MainOros from "../components/MainOros";
import Home from "../components/Home";
import AccountMenu from "../components/AccountMenu";
import { mapState } from "vuex";

export default {
  name: "Oros",

  components: {
    Home,
    MainOros,
    AccountMenu,
  },

  data() {
    return {
      main_oros: false,
      home: true,
      login: false,
    };
  },
  computed:{
    ...mapState(['login_state'])
  }
};
</script>
