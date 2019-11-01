<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="4" lg="3" class="text-center">
        <h6 class="headline display text-uppercase">Login</h6>

        <v-text-field label="Token" v-model="token"></v-text-field>

        <v-btn depressed dark block color="primary" @click="login" class="mb-2">Login</v-btn>

        <v-btn text @click="loginAsGuest" color="secondary">Entrar como visitante</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      token: "AIzaSyA4YMQe-WqHf3XUdDspDLSPtCOEMUcha_c"
    };
  },
  methods: {
    login() {
      if (this.token) {
        this.$store.commit("setAuthToken", this.token);
        this.$store.commit("setLogged", true);
        this.$router.push("/book");
      } else {
        this.$store.commit("showErrorMessage", "Você deve informar um Token!");
      }
    },
    loginAsGuest() {
      this.$store.commit("setLogged", true);
      this.$router.push("/book");
    }
  }
};
</script>

<style scoped>
</style>