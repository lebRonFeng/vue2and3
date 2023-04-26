import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    render: h => h(App),
    // mounted(){
    //     setTimeout(() => {
    //         // 函数体
    //         this.$destroy()
    //     }, 3000);

    // }
})