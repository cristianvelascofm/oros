<template>
  <v-app>
    <v-main id="aplication" class="ma-0 pa-0">
      <v-container fluid class="ma-0 pa-0 ba-0">
        
        <router-view />
        
      </v-container>
    </v-main>
    <v-footer id="pie" xs-10 class="justify-center" padless>
      <v-card-text class="dark--text text-center">
        <strong>
          Universidad del Cauca | Vicerrectoría Administrativa |
          SOLEMDev</strong
        >
        — {{ new Date().getFullYear() }}
      </v-card-text>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>

/* Quitar El scroll Automatico de Vuetify */
 html { overflow-y: hidden !important; }
#aplication,
#pie {
  
  background: rgb(215, 215, 241) 100%;
  background: linear-gradient(
    135deg,
    rgb(230, 227, 220) 0%,
    rgb(238, 217, 214) 100%
  );
}
</style>