<template>
  <input type="text" v-model="keyWord" />
  <h3>{{ keyWord }}</h3>
  <br />
</template>

<script>
import { ref, customRef } from "vue";
export default {
  name: "App",
  setup() {
    // 自定义函数ref——名叫myRef
    function myRef(value, delay) {
      let timer;
      return customRef((track, trigger) => {
        return {
          get() {
            console.log(`有人从muRef这个容器中读取数据了，我把${value}给他了`);
            track(); //通知vue追踪value的变化（提前和get商量一下，让他认为这个value是由用的）
            return value;
          },
          set(newValue) {
            console.log(`有人把Ref这个容器中数据改为了：${newValue}`);
            clearTimeout(timer);
            timer = setTimeout(() => {
              value = newValue;
              trigger(); //通知Vue重新解析模板
            }, delay);
          },
        };
      });
    }

    // let keyWord = ref('hello') //使用Vue提供的ref
    let keyWord = myRef("hello", 500);
    return { keyWord };
  },
};
</script>
