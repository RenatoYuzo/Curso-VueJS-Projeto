<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" lg="3">
        <h6 class="headline display text-uppercase">Livros</h6>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="(book, i) in booklist" :key="i" cols="12" md="3" lg="2">
        <v-card class="mx-auto">
          <v-card-title>{{book.volumeInfo.title}}</v-card-title>
          <v-card-text>{{book.volumeInfo.subtitle}}</v-card-text>

          <v-card-actions>
            <v-btn text small color="primary">Ver Detalhes</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const axios = require("axios");

export default {
  name: "BookListPage",
  data() {
    return {
      booklist: []
    };
  },
  created() {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=flowers")
      .then(response => {
        this.booklist = response.data.items;
      });
  }
};
</script>

<style scoped></style>