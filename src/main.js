import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;
Vue.prototype.x = {a:1,b:2}
new Vue({
    el: '#app',
    render: h => h(App)
})