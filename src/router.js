import Vue from "vue";
import Router from "vue-router";

import LoginPage from "./components/login/LoginPage.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginPage
  }
];

export default new Router({
  routes
});
