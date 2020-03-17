// vue.config.js
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
  // return path.join(__dirname, '..', dir)
}
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        // import Vue from 'vue/dist/vue.esm.js'
        'vue$': 'vue/dist/vue.esm.js',
        // import ff from 'src/components/Header/Header.vue'
        // import ff from 'src/components/Header/Header.vue'
        //  '@123': resolve('src/components')
        //  import ff from '@123/Header/Header.vue'
        '@': resolve('src')
      }
    },
  },
  devServer: {
    proxy: {
      '/api': {
        // 目标的地址 ---配置成网易的服务器域名地址,解决跨域问题
        target: 'http://m.you.163.com',//vscode有一个小型的服务器，让小型的服务器去这个网易的域名去发送给请求，服务之间是不存在跨域的问题的，所以能请求回数据
        // 是否跨域
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}