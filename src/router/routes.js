// 引入路由组件
import Buy from '../pages/Buy/Buy.vue'
import Msite from '../pages/Msite/Msite.vue'
import Profile from '../pages/Profile/Profile.vue'
import Sort from '../pages/Sort/Sort.vue'
// 向外暴露routes数组
export default [
  { path: '/buy', component: Buy },
  { path: '/msite', component: Msite },
  { path: '/profile', component: Profile },
  { path: '/sort', component: Sort }
]