<template>
  <!-- Vue3组件中的模板结构可以没有根标签 -->
  <h1>一个人的信息</h1>
  <h2 v-show="person.name">姓名：{{ person.name }}</h2>
  <h2>年龄： {{ person.age }}</h2>
  <h2 v-show="person.sex">性别： {{ person.sex }}</h2>
  <h2>岗位： {{ person.job.type }}</h2>
  <h2>薪水： {{ person.job.salary }}</h2>
  <h2>测试的数据： {{ person.job.a.b.c }}</h2>
  <h3>爱好：{{ person.hobby }}</h3>
  <button @click="changeInfo">修改人的信息</button>
  <button @click="addSex">添加一个sex属性</button>
  <button @click="deleteName">删除一个name属性</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    //数据
    let person = reactive({
      name:'张三',
      age:18,
      job:{
        type:'前端工程师',
        salary: "30k",
        a:{
          b:{
            c:666
          }
        }
      },
      hobby:['抽烟','喝酒','烫头']
    })
    // 方法
    function changeInfo() {
      person.name = '李四'
      person.age = 48
      person.job.type = 'UI设计师'
      person.job.salary = '60k'
      person.job.a.b.c = 999
      person.hobby[0] = '学习'
    }
    function addSex(){
      person.sex = '男'
    }
    function deleteName(){
      delete person.name
    }

    // 返回一个对象（常用）
    return {
      person,
      changeInfo,
      addSex,
      deleteName
    };
  },
};
</script>
