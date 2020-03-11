<template>
  <div>
    <!-- 组件视图 -->
    <router-view />
    <FooterGuide />
  </div>
</template>
<script>
// 引入FooterGuide组件
import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    name:'App',
    // 注册组件
    components: {
      FooterGuide
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>

