// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import axios from 'axios'

// import Bus from './components/bus.js'
// 导入全局样式
import '@/assets/css/index.css'

// 导入elementui - js
import ElementUI from 'element-ui'
// 导入elementui - css
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/base.css';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
Vue.component(CollapseTransition.name, CollapseTransition)
// 配置公共路径
// 配置好公共路径后, 每次使用 axios 发送请求, 只需要写当前接口的路径(比如: /users) 就可以了
// axios 在发送请求之前, 会将 baseUrl + '/users' 得到完整路径, 才会发送请求
axios.defaults.baseURL = 'http://192.168.53.11/tp5seawatch/public'
// 安装插件
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
