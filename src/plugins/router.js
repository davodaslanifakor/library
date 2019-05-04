import Vue from "vue";
import VueRouter from "vue-router";

import Home from "~/pages/index.vue";
import List from "~/pages/list.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "ورود",
      auth: false
    }
  },
  {
    path: "/list",
    component: List,
    meta: {
      title: "لیست کتاب ها",
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
