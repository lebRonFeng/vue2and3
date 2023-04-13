/*
该文件是整个项目的入口文件
*/

// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vue实例对象 ---vm
new Vue({
  // 下面这行代码一会解释，完成了这个功能，将App组件放入容器种
  render: h => h(App),
}).$mount('#app')



// 另外一种写法
// new Vue({
//   el: '#app',
//   render: h => h(App),
// })

// 再换一种写法 残缺版的vue,没有模板解析器
// new Vue({
//   el: '#app',
//   template: <App></App>,
//   // comments: {App}

// })

// 当你引入一个残缺版的vue时，还想渲染页面，可以用render
// new Vue({
//   el: '#app',
//   render(createElement) {
//     return createElement('h1', '您好啊')
//   },
// })


    // render(createElement){
    //   return createElement('h1','您好啊')
    // }

    // render:createElement =>{
    //   return createElement('h1','您好啊')
    // }

    // render:createElement => createElement('h1','您好啊')
    
    // render:h => h('h1','您好啊')

        // render:h => h(<App>)