import Vue from "vue";
import "es6-promise/auto";
import Vuex from "vuex";
Vue.use(Vuex);
// modules
import notifications from "./modules/notifications";
import verify from "./modules/verify";

export const store = new Vuex.Store({
  state: {},
  strict: false,
  modules: {
    notifications,
    verify
  },
  actions: {},
  mutations: {}
});
