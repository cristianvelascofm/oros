<template>
  <v-app>
    
    <v-main id="aplication" class="ma-0 pa-0">
      <v-container fluid class="ma-0 pa-0 ba-0">
        <v-layout
          
          class=""
          fill-height
          style="height: 713px"
          justify-center
          align-center
        >
          <v-flex id="left_panel" class="white--text text-center" xs5>
            <v-layout
              class="text-center"
              justify-center
              align-center
              fill-height
              style="height: 570px"
            >
              <v-flex class="text-center" xs5>
                <v-img
                  class="shrink"
                  flex
                  src="./assets/img/oros_logo.gif"
                  min-height="200"
                  height="200"
                  min-width="200"
                  width="200"
                ></v-img>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex id="right_panel" class="pink--text text-center pa-15" xs5>
            <router-view/>      
          </v-flex>
        </v-layout>
      </v-container>
      
    </v-main>
    <v-footer id='pie' xs-10 class="justify-center"  padless>
       <v-card-text class="dark--text text-center">
         <strong > Universidad del Cauca | Vicerrectoría Administrativa | SOLEMDev</strong> — {{ new Date().getFullYear() }} 
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
#aplication , #pie{
  background: linear-gradient(
    135deg,
    rgb(230, 227, 220) 0%,
    rgb(238, 217, 214) 100%
  );
}
</style>