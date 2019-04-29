const path = require("path");
module.exports = {
  devServer: {
    proxy: 'http://hiring.bsup.tk/oauth/authorize'
  },
  configureWebpack: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src/")
      }
    }
  }
};
