<template>
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2 class="atguigu">学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
export default {
    name: 'School',
    data(){
        return {
            name: '张三',
            sex: '男',
        }
    },
}
</script>
<style scoped lang="less">
.demo{
  background: pink;
  .atguigu{
    font-size: 40px;
  }
}
</style>