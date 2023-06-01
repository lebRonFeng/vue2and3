<template>
  <!-- Vue3组件中的模板结构可以没有根标签 -->
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <button @click="test">测试触发一下Demo组件的Hello事件</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Demo",
  props:['msg','school'],
  emits:['hello'],
  setup(props,context) {
    console.log('setup-----',context.slots)
    //数据
    let person = reactive({
      name:'张三',
      age:18
    })

    // 方法
    function test(){
      context.emit('hello',666)
    }
    // 返回一个对象（常用）
    return {
      person,
      test
    };
  },
};
</script>
