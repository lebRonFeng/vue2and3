<template>
  <h4>当前求和为：{{ sum }}</h4>
  <button @click="sum++">点我++</button>
  <br>
<h2>姓名：{{ name }}</h2>
<h2>年龄：{{ age }}</h2>
<h2>薪资：{{ job.j1.salary }}K</h2>
<button @click="name+='~'">修改姓名</button>
<button @click="age++">增长年龄</button>
<button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { ref,reactive,toRef,toRefs,shallowRef, readonly,shallowReadonly } from "vue";
export default {
  name: "Demo",
    setup() {
      
      let person = reactive({
        name: '张三',
        age:18,
        job:{
          j1:{
            salary: 20
          }
        }
      })

      // person = readonly(person)
      person = shallowReadonly(person)

      let sum = ref(0)
      return {
        ...toRefs(person),
        sum
      };
    },
};
</script>
