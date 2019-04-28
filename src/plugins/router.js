import Vue from "vue";
import VueRouter from "vue-router";

import Home from "~/pages/index.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "ورود",
      auth: true
    }
  }
];

const router = new VueRouter({
  routes,
  base: "/",
  mode: "history"
});

export default router;
