const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  /*关闭语法检查*/
  lintOnSave: false,
  // devServer:{
  //   proxy: 'http://localhost:5000'
  // }
  devServer:{
    proxy: {
      '/atguigu':{
        target: 'http://localhost:5000',
        pathRewrite:{'^/atguigu': ''}
        // ws: true,  //用于支持websocket
        // changeOrigin: true //用于控制请求头中的host值
      },
      '/demo':{
        target: 'http://localhost:5001',
        pathRewrite:{'^/demo': ''}
        // ws: true,  //用于支持websocket
        // changeOrigin: true //用于控制请求头中的host值
      },
    }
      
  }
})
