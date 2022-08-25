import Vue from "vue"; // 引入Vue Vue是一个构造函数
import App from "./App.vue"; // 引入App

// 引入 bootstrap css文件
import "bootstrap/dist/css/bootstrap.css";
// import registerPlugins from "@/plugins";
Vue.config.productionTip = false;

// let a = "1";

// 全局过滤器注册
// Vue.filter("toLower", function (str) {
//   return str.toLowerCase();
// });

// 封装一个全局时间过滤器
// Vue.filter("formatTime", function (time) {
//   return dayjs(time).format("YYYY/MM/DD HH:mm:ss");
// });
// 组件是 html css javascript 的集合  组件名字是由自己决定的
// -main 入口打包 生成js 自动引入html模版

// Vue.use(函数)
// - 给函数穿个参数, Vue
// - 函数叫: 插件
// Vue.use(registerPlugins);

// $mount将App.vue文件挂载到div.App
new Vue({
  // render 渲染文件
  render: (h) => h(App),
}).$mount("#app");
