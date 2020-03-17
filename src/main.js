import Vue from 'vue'
import App from './App.vue'
// 引入router ---配置路由器
import router from './router'
import './utils/rem'
import store from './store/index'
// 引入vant
import { Tabbar, TabbarItem, Search, Button, Tab, Tabs, Swipe, SwipeItem, NavBar, Icon, TreeSelect, Image, Grid, GridItem, Sidebar, SidebarItem } from 'vant'

Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Search)
Vue.use(Button)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(TreeSelect)
Vue.use(Image)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Sidebar)
Vue.use(SidebarItem)
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
  router,
  // 注册vuex的仓库
  store
})

