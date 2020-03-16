"use strict";
const path = require("path");

const name = "anTi后台管理"; // page title

function resolve(dir) {
  return path.join(__dirname, dir);
}
const port = 9528; // dev port

module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: false,
  runtimeCompiler: true,
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    before: require("./mock/mock-server.js")
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  }
};
