<template>
  <div class="demo">
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import {hunhe,hunhe2} from '../mixin'
export default {
    name: 'School',
    data(){
        return {
            name: '尚硅谷',
            address: '北京昌平'
        }
    },
    mixins:[hunhe,hunhe2],
    // methods: {
    //   showName(){
    //    alert(this.name)
    //   }
    // },
}
</script>

<style>
.demo{
    background: #ccc;
}
</style>