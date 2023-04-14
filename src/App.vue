<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDom">点我输出上方的Dom元素</button>
    <School ref="sch"/>
  </div>
</template>

<script>
import School from './components/School'
export default{
    name: 'APP',
    components: { School },
    data(){
        return {
            msg: '欢迎学习vue!'
        }
    },
    methods: {
        showDom(){
            console.log('@@')
            console.log(this.$refs);
            
        }
    },

};
</script>

<style scoped>
</style>