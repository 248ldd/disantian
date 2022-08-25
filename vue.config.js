// vue 把webpack 给隐藏了

// configureWebpack里面可以配置 webpack
const { defineConfig } = require("@vue/cli-service");
// defineConfig 写代码的时候可以给提示

module.exports = defineConfig({
  // transpileDependencies 是babel用的
  lintOnSave: false,
  transpileDependencies: true,

  // 这里写 vue 的配置

  configureWebpack: {
    // 写webpack的配置
    // devServer: {
    //   open: true,
    //   port: 8888,
    //
    // 需要用 host 配置
    //   host: "localhost",
    // },
  },
});

// module.exports = {
// devServer: {
//   open: true,
//   port: 8888,
// },
// }
