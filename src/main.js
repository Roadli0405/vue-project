import Vue from 'vue'
import App from './App.vue'
// 引入router ---配置路由器
import router from './router'
import './utils/rem'
// 引入vant
import { Tabbar, TabbarItem } from 'vant'
Vue.use(Tabbar)
Vue.use(TabbarItem)
// 设置浏览器的控制台中是否显示提示信息
Vue.config.productionTip = false
// 创建Vue的实例对象
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  // 注册路由器
  router
})

