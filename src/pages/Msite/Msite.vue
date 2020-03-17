<template>
  <!--首页-->
  <section class="msite">
    <!--首页头部-->
    <header class="header">
      <img
        id="msite_logo"
        src="./imges/logo.png"
        alt="logo"
      >
      <van-search
        class="serach_msite"
        v-model="value"
        shape="round"
        placeholder="搜索商品, 共24162款好物"
      />
      <van-button
        type="primary"
        size="mini"
        plain
        to="profile"
        class="serach_login"
      >登录</van-button>
    </header>
    <!-- Tab标签栏 -->
    <van-tabs v-model="active" title-active-color="#DD1A21">
      <van-tab title="推荐">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
        </van-swipe>
      </van-tab>
      <van-tab title="居家生活">居家生活</van-tab>
      <van-tab title="服饰鞋包">服饰鞋包</van-tab>
      <van-tab title="美食酒水">美食酒水</van-tab>
      <van-tab title="个护清洁">个护清洁</van-tab>
      <van-tab title="母婴亲子">母婴亲子</van-tab>
      <van-tab title="运动旅行">运动旅行</van-tab>
      <van-tab title="数码家电">数码家电</van-tab>
      <van-tab title="全球特色">全球特色</van-tab>
    </van-tabs>
  </section>
</template>
<script>
export default {
  name: 'Msite',
  data () {
    return {
      value: '',
       active: 0
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.msite
  .header
    width 100%
    padding 0.21333rem 0.3rem
    display flex
    flex-direction row
    justify-content space-around
    #msite_logo
      display inline-block
      width 1.84rem
      height 0.53333rem
    .serach_msite
      height 0.74667rem
    .serach_login
      border 1px solid #DD1A21
      color #DD1A21
      border-radius 0.10667rem
      margin-right 0.61333rem
    .my-swipe .van-swipe-item 
      color #fff
      font-size 20px
      line-height 150px
      text-align center
      background-color #39a9ed
  
</style>
