<template>
    <div class="child">
      <h3>我是Child组件（子）</h3>
      {{ sum }}
    </div>
  </template>
  
  <script>
  import {ref} from 'vue'
  export default {
      name:'Child',
      setup(){
        let sum = ref(0)
        return new Promise((resolve,reject)=> {
          resolve({sum})
        },5000)
      }
  };
  </script>
  
  <style>
  .child{
      background: skyblue;
      padding: 10px;
  }
  </style>