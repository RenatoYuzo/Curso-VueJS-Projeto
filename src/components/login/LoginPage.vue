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
  </v-container>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      token: ""
    };
  },
  methods: {
    login() {
      this.$store.commit("setAuthToken", this.token);
    },
    loginAsGuest() {
      //TODO
      alert(this.$store.state.authToken);
    }
  }
};
</script>

<style scoped>
</style>