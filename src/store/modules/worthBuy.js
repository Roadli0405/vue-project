// worthBuy 里面进行buy组件的集中式状态数据的管理
// 使用axions的方法reqSwiperList请求swiper的数据
import { reqSwiperList, reqWaterfall } from '../../api/index'
// mutation-type的数据
import { GET_SWIPERLIST_DATA, GET_WATERFALL_DATA } from '../mutation-types'

const state = {
  swiperList: [],
  Waterfall: [] // 存放瀑布流首屏数据的
}
const mutations = {
  // 用了[]代表里面是一个变量,没加[]代表字符
  [GET_SWIPERLIST_DATA] (state, list) {
    // 使用list来接收state里面的wiperList
    state.swiperList = list
  },
  [GET_WATERFALL_DATA] (state, list) {
    // 使用list来接收state里面的Waterfall
    state.Waterfall = list
  }
}
const actions = {
  // 发送ajax请求
  async reqGetSwiperList ({ commit }) {
    // 接收请求回来的数据
    const result = await reqSwiperList()
    // 调用直接修改状态数据方法，传进去数据
    commit(GET_SWIPERLIST_DATA, result.navList)
    // 返回请求回来的数据
    return Promise.resolve(result.navList)
  },
  //发送ajax请求
  // 发送请求瀑布流数据的ajax
  async reqWaterfall ({ commit }) {
     // 接收请求回来的数组
    const result = await reqWaterfall()
    // 调用直接修改状态的方法, 传进去数据
    commit(GET_WATERFALL_DATA, result)
    return Promise.resolve(result)
   }
    
}
const getters = {
  // 对state.swiperList的数据进行处理
  modify (state) {
    const list = state.swiperList
    const newArr = []
    let arr = []
    list.forEach((item, index) => {
      index++
      arr.push(item)
      if (index % 8 === 0) {
        newArr.push(arr)
        arr = []
      }
    })
    return newArr
  },
  modifyWaterfall (state) {
    const list = state.Waterfall
    // 定义一个新数组
    let newArr = []
    // 对请求回来的数据进行遍历
    list.forEach((item) => {
    // concat连接两个数组    返回一个新数组
      newArr = newArr.concat(item.topics)
    })
    return newArr
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}