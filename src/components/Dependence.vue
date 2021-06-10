<template>
  <v-row justify="center">
    <v-dialog
      overlay-color="#023565"
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#023565"
          elevation="5"
          fab
          dark
          small
          v-bind="attrs"
          v-on="on"
          ><v-icon dark> mdi-office-building </v-icon></v-btn
        >
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">
            <h4 class="indigo--text">Nueva {{ title_form }}</h4></span
          >
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-text-field
              label="Nombre"
              prepend-icon="mdi-office-building"
              required
              color="#023565"
            ></v-text-field>

            <v-text-field
              label="NIT"
              prepend-icon="mdi-card-account-details-outline"
              required
              color="#023565"
            ></v-text-field>

            <v-text-field
              label="Representante Legal"
              prepend-icon="mdi-account-tie"
              required
              color="#023565"
            ></v-text-field>
            <v-layout>
              <v-flex xs6>
                <v-text-field
                  color="#023565"
                  prepend-icon="mdi-map-marker"
                  label="Dirección"
                ></v-text-field>
              </v-flex>
              <v-flex xs6 class="pl-2">
                <v-text-field
                  color="#023565"
                  hint="Ej: Centro,Popayán,Cauca"
                  prepend-icon="mdi-map-marker-outline"
                  label="Localidad"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs6>
                <v-text-field
                  color="#023565"
                  prepend-icon="mdi-phone-classic"
                  label="Teléfono"
                ></v-text-field>
              </v-flex>
              <v-flex xs6 class="pl-2">
                <v-text-field
                  color="#023565"
                  prepend-icon="mdi-phone-dial-outline"
                  label="Extensión"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs6>
                <v-text-field
                  color="#023565"
                  prepend-icon="mdi-cellphone"
                  label="Celular"
                ></v-text-field>
              </v-flex>
              <v-flex xs6 class="pl-2">
                <v-text-field
                  color="#023565"
                  prepend-icon="mdi-mail"
                  label="Correo Electrónico"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-text-field
              color="#023565"
              prepend-icon="mdi-web"
              label="Sitio Web"
            ></v-text-field>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="dialog = false">
            Cancelar
          </v-btn>
          <v-btn color="success darken-1" text @click="dialog = false">
            Agregar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
export default {
  name: "Dependence",
  data() {
    return {
      // Acciones del Boton del Dialgo
      dialog: false,
      title_form: "Dependecia",
    };
  },
};
</script>

<style>
</style>