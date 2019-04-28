import constans from "./constans.js";

window.axios = require("axios");
// if (localStorage && localStorage.getItem("user")) {
//   let localData = JSON.parse(localStorage.getItem("user"));
//   let token = localData.token;
//   axios.defaults.headers.common["Authorization"] = token;
// }
window.axios.defaults.baseURL = constans.url.baseURL;

