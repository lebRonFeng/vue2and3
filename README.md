# 笔记

## 脚手架文件结构
    |—— node_modules
    |—— public 
    |   |__ favicon.ico: 页签图标
    |   |__ index.html: 主页面
    |—— src
    |   |—— assets: 存放静态资源
    |   |   |__ logo.png
    |   |—— component: 存放组件
    |   |   |__ HelloWorld.vue
    |   |—— App.vue:汇总所有组件    
    |   |—— main.js: 入口文件
    |—— .gitignore: git版本管理忽略的配置
    |—— babel.config.js: babel的配置文件
    |—— package.json: 应用包配置文件
    |—— README.md: 应用描述文件
    |—— package-lock.json: 包版本控制工具

## 关于不同版本的vue
- vue.js与vue.runtime.xxx.js的区别：
    (1).vue.js是完整版的Vue,包含：核心功能+模板解析器。
    (2).vue.runtime.xxx.js是要运行版本的vue，只包含：核心功能，没有模板解析器。
- 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到createElement函数去指定具体内容。
  
## vue.config.js配置文件
> 使用vue inspect > output.js可以查看脚手架默认配置。
> 使用vue.config.js可以对脚手架进行个性化定制，详情见： https://cli.vuejs.org/zh

## ref属性
    1.被用来给元素或子组件注册引用信息(id的替代者)
    2.应用在html标签上获取的真是DOM元素，应用在组件标签上是组件实例对象(vc)
    3.使用方法：
        打标识：<h1 ref='xxx'>...</h1> 或 <School ref='xxx'></School>
        获取：this.$refs.xxx

