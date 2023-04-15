<template>
  <div class="demo">
    <h2>学校名称：{{ name}}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
    name: 'School',
    data(){
        return {
            name: '尚硅谷itguiguba',
            address: '北京昌平'
        }
    },
    methods:{
    }
}
</script>

<style lang="less">
.demo{
    background: skyblue;
}
</style>