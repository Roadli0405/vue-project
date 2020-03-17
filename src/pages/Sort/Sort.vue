<template>
  <div class="sort_content">
    <!-- 头部 -->
    <header class="header">
      <van-search class="header_search" v-model="value" placeholder="搜索商品, 共24109款好物" input-align="center"/>
    </header>
    <!-- TreeSelect -->
    <van-tree-select :items="items" :main-active-index.sync="active" >
      <!-- 通过content插槽定义右边内容 -->
      <template slot="content">
        <!-- 分组一 -->
        <van-image v-if="active === 0" src="https://yanxuan.nosdn.127.net/9f4bcf0d57149499584d59478a606e9e.jpg "/>
        <van-grid v-if="active===0" :column-num="3" :border=false icon-size="1.5rem" :gutter="0" >
          <van-grid-item icon="https://yanxuan.nosdn.127.net/c4bf35c93af25b7c9c8c89ad1b1d19b6.png" text="文字" />
          <van-grid-item icon="https://yanxuan.nosdn.127.net/c4bf35c93af25b7c9c8c89ad1b1d19b6.png" text="文字" />
          <van-grid-item icon="https://yanxuan.nosdn.127.net/c4bf35c93af25b7c9c8c89ad1b1d19b6.png" text="文字" />
        </van-grid>
        <!-- 分组二 -->
        <van-image v-if="active === 1" src="https://yanxuan.nosdn.127.net/2ac8dde0444ba9b06991c20087d37967.jpg"/>   
      </template>
    </van-tree-select>

  </div>
</template>
<script>
  export default {
    name:'Sort',
    data () {
      return {
        value:'',  // 搜索框输入的值
        active: 0,  //侧边导航栏左边分组索引
      items: [{ text: '分组 1' }, { text: '分组 2' }] //侧边导航栏左边
      }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.sort_content
  .header
    width 100%
    padding 0.21333rem 0.3rem
    display flex
    flex-direction row
    justify-content space-around
    .header_search
      width 100%
      padding 0 .4rem
</style>
