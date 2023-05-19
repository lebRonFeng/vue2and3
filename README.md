# Vue3快速上手

> 1.vue3简介

- 2020年9月18日，vue.js发布3.0，代号：One Piece（海贼王）
- 耗时2年多、2600+提交、30+个RFC、600+次PR、99位贡献者
- github上的tags地址：https://github.com/vuejs/vue-next/releases/tag/v3.00

> Vue3带来了什么

1. **性能的提升**

    - 打包大小减少41%
    - 初次渲染快55%，更新渲染快133%
    - 内存减少54%
    ......

2. **源码的升级**

    - 使用Proxy代替definePerty实现响应式
    - 重写了虚拟DOM的实现和Three Shaking
    ......

3. **拥抱TypeScript**

    - vue3可以更好的支持TypeScript

4. **新的特性**

    1. Composition API（组合API）
        - setup配置
        - ref与reactive
        - watch与watchEffect
        - provide与inject
        - ......
    
    2. 新的内置组件
        - Fragment
        - Teleport
        - Suspense
    
    3. 其他改变
        - 新的生命周期钩子
        - data选项应始终被声明为一个函数
        - 移除keyCode支持作为v-on的修饰符
        - ......

## 一、创建Vue3.0工程

> 1.使用vue-cli创建

官方文档：https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create

    ## 查看@vue/cli版本，确保@vue/cli版本在4.5.0以上
    vue --versioin
    ## 安装或者升级你的@vue/cli
    npm install -g @vue/cli
    ## 创建
    vue create vue_test
    ## 启动
    cd vue_test
    npm run serve

> 使用vite创建

官方文档：https://v3.cn.vuejs.org/guide/installation.html#vite


vite官网：https://vitejs.cn

- 什么是vite? ————新一代构建工具。
- 优势如下：
    - 开发环境中，无需打包操作，可快速的冷启动。
    - 轻量快速的热重载（HMR）。
    - 真正的按需编译，不再等待整个应用编译完成。

- 传统构建与vite构建对比图

    ![节点](./public/vite.png)

    ```
    ## 创建工程
    npm init vite-app <project-name>
    ## 进入工程目录
    cd <project-name>
    ## 安装依赖
    npm install
    ## 运行
    npm run dev
    ```