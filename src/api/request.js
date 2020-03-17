import axios from 'axios'
import errCode from '../config/errCode'
const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 20000,
  headers: {
  }
})

axiosInstance.interceptors.request.use(
  (config) => {
    let token = ''
    if (token) {
      config.headers.authorization = `Bearer ${token}`

    }

    if (config.method === 'post') {
      if (config.data) {
        config.data = Object.keys(config.data).reduce((p, c) => {
          p += `&${c}=${config.data[c]}`
          return p
        }, '').slice(1)
      }
      config.headers['content-type'] = 'application/x-www-form-urlencoded'
    }
    // console.log(config)
    return config
  }
)

axiosInstance.interceptors.response.use((response) => {
  console.log(response)
  if (response.data.status === 0 || response.data.code === 0 || response.data.code === "200") {
    return response.data.data
  } else {
    return Promise.reject(response.data.msg)
  }
},
  (err) => {
    // 根据不同错误原因，提示不同的错误信息
    let errMsg = ''
    if (err.response) {
      // 接受到响应，但是是失败的响应
      errMsg = errCode[err.response.status]
    } else {
      // 没有接受到响应
      if (err.message.indexOf('Network Error') !== -1) {
        errMsg = '网络连接错误，请重新连接网络'
      } else if (err.message.indexOf('timeout') !== -1) {
        errMsg = "网络连接超时，请连上wiff试试"
      }
    }
    return Promise.reject(errMsg || '发生未知错误，请联系管理员')
  }
)

export default axiosInstance