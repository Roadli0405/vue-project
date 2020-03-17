// 引入封装的拦截器
import axiosInstance from './request'
// 存放发送轮播图的ajax请求的方法的
export const reqSwiperList = () => {
  return axiosInstance({
    url: '/topic/v1/know/navWap.json',
    method: 'GET'
  })
}

// 瀑布流的ajax的方法
export const reqWaterfall = () => {
  return axiosInstance({
    url: '/topic/v1/find/recManual.json',
    method: 'GET'
  })
}
