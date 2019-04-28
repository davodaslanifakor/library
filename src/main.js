/* eslint-disable */
import Vue from "vue";
import App from "~/layouts/default.vue";
import router from "~/plugins/router.js";

import "~/plugins/global.js";
import { store } from "~/store/index.js";

import VueNotifications from "vue-notifications";
import iziToast from "izitoast"; // https://github.com/dolce/iziToast
import "izitoast/dist/css/iziToast.min.css";


iziToast.settings({
  rtl: true
});
function toast({ title, message, type, timeout }) {
  if (type === VueNotifications.types.warn) type = "warning";
  return iziToast[type]({ title, message, timeout });
}
const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
};
Vue.use(VueNotifications, options);



Vue.config.productionTip = false;

new Vue({
  store,
  router,
  notifications: {
    showSuccessMsg: {
      type: VueNotifications.types.success,
      title: "",
      message: "",
      timeout: 5000
    },
    showInfoMsg: {
      type: VueNotifications.types.info,
      title: "",
      message: "",
      timeout: 5000
    },
    showWarnMsg: {
      type: VueNotifications.types.warn,
      title: "",
      message: "",
      timeout: 5000
    },
    showErrorMsg: {
      type: VueNotifications.types.error,
      title: "",
      message: "",
      timeout: 5000
    }
  },
  computed: {
    success() {
      return this.$store.state.notifications.showSuccessMsg;
    },
    error() {
      return this.$store.state.notifications.showErrorMsg;
    },
    info() {
      return this.$store.state.notifications.showInfoMsg;
    },
    warn() {
      return this.$store.state.notifications.showWarnMsg;
    }
  },
  watch: {
    success(val) {
      this.showSuccessMsg({
        title: val.title,
        message: val.message
      });
    },
    error(val) {
      this.showErrorMsg({
        title: val.title,
        message: val.message
      });
    },
    info(val) {
      this.showInfoMsg({
        title: val.title,
        message: val.message
      });
    }
  },
  render: h => h(App)
}).$mount("#app");
