<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="4" lg="3" class="text-center">
        <h6 class="headline">Login</h6>

        <v-text-field label="Token" v-model="token"></v-text-field>

        <v-btn depressed dark block color="green" @click="login">Login</v-btn>

        <v-btn text @click="loginAsGuest">Entrar como visitante</v-btn>
      </v-col>
    </v-row>

    <v-snackbar v-model="showMessage">
      {{ message }}
      <v-btn text @click="showMessage = false">Fechar</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      token: "",
      message: "",
      showMessage: false
    };
  },
  methods: {
    login() {
      if (this.token) {
        this.$store.commit("setAuthToken", this.token);
        this.$router.push("/book");
      } else {
        this.message = "Você deve informar um Token!";
        this.showMessage = true;
      }
    },
    loginAsGuest() {
      this.$router.push("/book");
    }
  }
};
</script>

<style scoped>
</style>