<template>
  <div class="buy_content">
    <!-- 头部 -->
    <header class="header">
      <van-nav-bar title="值得买">
        <van-icon
          name="wap-home-o"
          size=".8rem"
          color="#000"
          slot="left"
        />
        <van-icon
          name="search"
          size=".8rem"
          color="#000"
          slot="right"
        />
      </van-nav-bar>
    </header>
    <!-- 中部 -->
    <div class="b-swiperTab-container">
      <!-- swiper头部 -->
      <div class="buy_swiperHeader">
        <img
          src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png"
          class="b-title"
        >
        <div class="b-text">严选好物&nbsp;用心生活</div>
        <img
          src="http://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png"
          class="b-bg"
        >
      </div>
      <!-- swiper -->
      <nav class="msite_nav">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <!-- 把大数组里面的两个小数组进行遍历 -->
            <div
              class="swiper-slide"
              v-for="(item,index) in swiperList"
              :key="index"
            >
              <!-- 前面遍历出来的item是一个数组，所以需要在进行遍历 -->
              <a
                href="javascript:;"
                class="link_to_food"
                v-for="(i,ind) in item"
                :key="ind"
              >
                <div class="food_container">
                  <!-- 必须要使用双引号 -->
                  <img
                    :src="i.picUrl"
                    class="u-topPic"
                  >
                </div>
                <div class="m-detail">
                  <div class="u-mainText">{{i.mainTitle}}</div>
                  <div class="u-descText">{{i.viceTitle}}</div>
                </div>
              </a>
            </div>
          </div>
          <!-- 分页器 -->
          <div
            class="swiper-scrollbar"
            style="opacity:1"
          ></div>

        </div>
      </nav>
    </div>
    <!-- 瀑布流区域 -->
    <footer class="buy_footer">
      <div class="buy_baoguo">
        <div class="meiyige" v-for="(item,index) in Waterfall" :key="index">
          <!-- 大图地方 -->
          <div class="buy_foo_bg">
            <img
              :src="item.picUrl"
              class="buy_foo_image"
            >
            <p class="buy_foo_bgtext">{{item.title}}</p>
          </div>
          <!-- 横杠 -->
          <div class="buy_empty"></div>
          <!-- 头像区域 -->
          <div class="buy_appraise">
            <div class="buy_appraise_right">
              <img
                :src="item.avatar"
                class="buy_appraise_userpic"
              >
              <p class="buy_appraise_userName">{{item.nickname}}</p>
            </div>
            <div class="buy_appraise_upArea_hand">
              <img
                src="data:image/png;base64,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"
                class="buy_appraise_hand"
              >
              <span class="buy_appraise_upText">17K</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
// 引入ajax接口
// import { reqWaterfall } from '../../api/index'
// 引入getters辅助函数
import { mapGetters } from 'vuex'
// 引入Swiper
import Swiper from 'swiper'
// 引入Swiper的样式
import 'swiper/css/swiper.css'
export default {
  name: 'Buy',
  // 界面渲染完毕 
  // data () {
  //   return {
  //     swiperList: []  // 存放swiper数据的
  //   }
  // },
  // data () {
  //   return {
  //     Waterfall: [] // 存放瀑布流首屏数据的
  //   }
  // },
  async mounted () {
    // // 发送请求瀑布流数据的ajax
    // const result = await reqWaterfall()
    // console.log(result)
    // // 定义一个新数组
    // let newArr = []
    // // 对请求回来的数据进行遍历
    // result.forEach((item) => {
    //   // concat连接两个数组    返回一个新数组
    //   newArr = newArr.concat(item.topics)
    // })
    // // 打印新数组
    // console.log(newArr)
    // this.Waterfall = newArr
    this.$store.dispatch('reqWaterfall').then((res) =>{
      console.log(res)
    }) 
    
    // 发送axion请求
    // const result = await reqSwiperList()
    // console.log(result)
    // 对axion请求回来的数据进行处理封装
    // this.handleArr(result.navList)
    this.$store.dispatch('reqGetSwiperList').then((res) => {
      console.log(res)
      // this.$nextTick页面渲染完毕,在加载轮播图
      this.$nextTick(() => {
        new Swiper('.swiper-container', {
          loop: true, // 循环模式选项
          scrollbar: {
            el: '.swiper-scrollbar',
            hide: true
          }
        })
      })
    })

  },
  computed: {
    ...mapGetters({
      swiperList: 'modify',
      Waterfall:'modifyWaterfall'
    })
  }
  // methods: {
  // 处理axion数据
  //   handleArr (arrList) {
  // 使用List接收axions请求回来的数据
  //     let list = arrList
  // 定义一个大数组
  //     const newArr = []
  // 定义一个小数组
  //     let arr = []
  // 吧请求回来的数据进行遍历
  //     list.forEach((item, index) => {
  //       index++
  // 吧数据都添加到小数组里面
  //       arr.push(item) 
  // 判断索引值等于8的时候吧小数组添加到大数组里面
  //       if (index % 8 === 0) {
  //         newArr.push(arr)
  // 清空小数组
  //         arr = []
  //       }
  //     })
  // 让state的状态数据等于大数组
  //     this.swiperList = newArr
  //   }
  // }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scope>
.b-swiperTab-container
  width 100%
  height auto
  position relative
  .buy_swiperHeader
    width 100%
    .b-title
      position absolute
      width 1.8rem
      height auto
      top 0.8rem
      left 0.3rem
      z-index 2
    .b-text
      font-size 0.4rem
      line-height 0.44rem
      height 0.44rem
      position absolute
      font-family 'PingFangSC-Regular'
      left 2.2rem
      top 1.15rem
      color #FFF
      z-index 2
    .b-bg
      width 10rem
      height auto
      position absolute
      top 0
      left 0
  .msite_nav
    width 9.5rem
    background-color #fff
    border-radius 0.16rem
    position absolute
    top 2rem
    left 0.25rem
   
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          margin-top 0.5rem
          .link_to_food
            width 25%
            margin-bottom 0.5rem
            .food_container
              display block
              width 100%
              text-align center
              font-size 0
              .u-topPic
                display inline-block
                width 1.6rem
                height 1.6rem
            .m-detail
              // width 1.68rem
              margin-top 0.15rem
              display flex
              justify-content center
              align-items flex-start
              flex-wrap wrap
              .u-mainText
                font-family 'PingFang-SC-Bold'
                font-weight bold
                font-size 0.4rem
                white-space nowrap
                // overflow hidden
                color #333333
                text-align center
                line-height 0.4rem
              .u-descText
                width 1.68rem
                margin-top 0.02rem
                font-family 'PingFangSC-Regular'
                font-size 0.2rem
                color #999999
                text-align center
                height 0.3rem
                line-height 0.3rem
                white-space nowrap
      .swiper-scrollbar
        height 2px
        width 30%
        margin-left 35%
        >div.swiper-scrollbar-drag
          background #DD1A21
          height 2px
.buy_footer
  width 100%
  background-color #eeeeee
  .buy_baoguo
    padding 8.9rem 0.2rem 0 0.2rem
    columns 2
    // column-gap控制分栏布局中间隔
    column-gap 0.2rem
    .meiyige
      width 100%
      border-radius 15px
      overflow hidden
      margin-bottom 8px
      background-color #fff
      .buy_foo_bg
        width 100%
        .buy_foo_image
          width 100%
        .buy_foo_bgtext
          width 5rem
          line-height 0.4rem
          color #333
          font-size 0.42rem
          box-sizing border-box
          padding 0.19rem 0.18rem 0
      .buy_empty
        width 5rem
        height 0.3rem
        background-color #fff
      .buy_appraise
        display flex
        justify-content space-between
        width 5rem
        padding 0.19rem 0.17rem 0.25rem
        .buy_appraise_right
          display flex
          justify-content right
          .buy_appraise_userpic
            width 0.58rem
            height 0.58rem
            border-radius 50%
          .buy_appraise_userName
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            font-size 0.3rem
            color #7f7f7f
            height 0.48rem
            line-height 0.48rem
            margin-left 0.08rem
        .buy_appraise_upArea_hand
          width 2rem
          flex-direction row
          display flex
          justify-content flex-end
          align-items center
          padding-right 0.6rem
          .buy_appraise_hand
            width 0.7rem
            height 0.6rem
          .buy_appraise_upText
            font-size 0.35rem
            color #7f7f7f
            max-width 0.9rem
            text-align right
            height 0.6rem
            line-height 0.6rem
            margin-left 0.02rem
</style>
