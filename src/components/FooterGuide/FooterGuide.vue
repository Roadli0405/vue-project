<template>
  <div class="footer_container">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/msite">首页</van-tabbar-item>
       <van-tabbar-item icon="wap-nav" to="/sort">分类</van-tabbar-item>
      <van-tabbar-item icon="gift" to="/buy">值得买</van-tabbar-item>
      <van-tabbar-item icon="friends" to="/profile">我的</van-tabbar-item>
    </van-tabbar>
  </div>
  
</template>
<script>
export default {
  name: 'FooterGuide',
  data () {
    return {
      active: 0
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus"></style>

