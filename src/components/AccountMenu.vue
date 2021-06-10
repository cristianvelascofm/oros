<template>
  <v-container class="text-right ">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      :offset-y="true"
      class="pr-5"
      
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="#023565" elevation="5" fab dark small v-bind="attrs" v-on="on">
          <v-icon dark > mdi-account-circle </v-icon>
        </v-btn>
      </template>

      <v-card color="rgba(238, 217, 214, 1)" elevation="15">
        <v-list color="rgba(238, 217, 214, 1)">
          <v-list-item>
            <v-list-item-avatar>
              <img :src="user_photo" alt="John" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Antonio Pérez</v-list-item-title>
              <v-list-item-subtitle>Abogado</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>
         <v-list dense color="rgba(238, 217, 214, 1)">
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

            <!-- <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text @click="menu = false"> Cancelar </v-btn>
            
            </v-card-actions> -->
      </v-card>
    </v-menu>
  </v-container>
</template>

<script>
export default {
  name: "AccountMenu",
  data() {
    return {
      user_photo: "https://randomuser.me/api/portraits/men/85.jpg",
      drawer: true,
      mini: true,
      menu: false,
      items: [
        { title: "Mi Cuenta", icon: "mdi-account" },
        { title: "Cerrar Sesión", icon: "mdi-logout" },
      ],
    };
  },
};
</script>

<style>
</style>