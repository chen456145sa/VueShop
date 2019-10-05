// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import routerConfig from './router.config.js'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
//配置路由
Vue.use(VueRouter);
const router = new VueRouter(routerConfig);
//配置ajax
Vue.prototype.axios = axios;

//配置ui组件
Vue.use(MintUI);
//配置jsonp发送
Vue.use(VueResource);

//格式化日期   this.format 调用
Vue.prototype.format = function(dat,fmt) {   
		var o = {
    "M+" : dat.getMonth()+1,                 //月份
    "d+" : dat.getDate(),                    //日
    "h+" : dat.getHours(),                   //小时
    "m+" : dat.getMinutes(),                 //分
    "s+" : dat.getSeconds(),                 //秒
    "q+" : Math.floor((dat.getMonth()+3)/3), //季度
    "S"  : dat.getMilliseconds()             //毫秒
  };

  if(/(y+)/.test(fmt)){
    fmt=fmt.replace(RegExp.$1, (dat.getFullYear()+"").substr(4 - RegExp.$1.length));
  }
        
  for(var k in o){
    if(new RegExp("("+ k +")").test(fmt)){
      fmt = fmt.replace(
        RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));  
    }       
  }
  return fmt;
}

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
