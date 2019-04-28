import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex'
Vue.use(Vuex);
// modules
import notifications from "./modules/notifications";


export const store = new Vuex.Store({
    strict: false,
    modules: {
        notifications
    },
    actions: {
    },
    mutations: {
    }
});
