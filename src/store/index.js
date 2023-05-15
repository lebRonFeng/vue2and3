// 该文件用于创建vuex中最为核心的store
import Vue from 'vue';
// 引入vuex
import Vuex from 'vuex';
// 应用Vuex插件
Vue.use(Vuex)

const actions ={}

const mutations ={}

const state ={}

// 创建并暴漏store
export default new Vuex.Store({
    actions,
    mutations,
    state
})