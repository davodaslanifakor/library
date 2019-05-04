const path = require("path");
module.exports = {
  devServer: {
    proxy: 'http://localhost:8080/'
  },
  configureWebpack: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src/")
      }
    }
  }
};
