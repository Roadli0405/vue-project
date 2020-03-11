<template>
  <div class="footer_container">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/msite">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/sort">分类</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/buy">值得买</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/profile">我的</van-tabbar-item>
    </van-tabbar>
  </div>
  
</template>
<script>
export default {
  name: 'FooterGuide',
  data () {
    return {
      active: 0,
      icon: {
        active: '../imges/fenlei.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus"></style>

