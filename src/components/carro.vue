<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
      color="#023565"
        v-model="user_name"
        :rules="nameRules"
        label="Usuario"
        required
      ></v-text-field>

      <v-text-field
      color="#023565"
        v-model="password"
        :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show_password ? 'text' : 'password'"
        name="input-10-1"
        label="Contraseña"
        hint="Debe ser Mayor a 8 Caracteres"
        counter
        @click:append="show_password = !show_password"
      >
      </v-text-field>

      <v-checkbox v-model="checkbox_remember_me" label="Recordar Usuario"></v-checkbox>

      <v-btn color="#023565" class="mr-4 white--text"> Ingresar </v-btn>
    </v-form>
  </v-container>
</template>


<script>
export default {
  name: "Logeo",
  data() {
    return {
      user_name: "",
      password: "",
      show_password: false,
      checkbox_remember_me: false,
      valid: true,
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style>
</style>