// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import routerConfig from './router.config.js'

Vue.config.productionTip = false
//配置路由
Vue.use(VueRouter);
const router = new VueRouter(routerConfig);
//配置ajax
Vue.prototype.axios = axios;

//配置ui组件
Vue.use(MintUI);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
