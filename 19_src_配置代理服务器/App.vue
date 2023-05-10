<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "APP",
  methods:{
    getStudents(){
      axios.get('http://localhost:8081/atguigu/students').then(response => {
        console.log('请求成功了',response.data)
      }).catch(err => console.log('请求失败了', err.message))
    },
    getCars(){
      axios.get('http://localhost:8081/demo/cars').then(response => {
        console.log('请求成功了',response.data)
      }).catch(err => console.log('请求失败了', err.message))
    }
  }
};
</script>

<style>
</style>