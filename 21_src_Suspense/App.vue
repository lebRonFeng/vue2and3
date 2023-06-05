<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Suspense>
        <template v-slot:default>
            <Child/>
        </template>
        <template v-slot:fallback>
            <h3>加载中...</h3>
        </template>
    </Suspense>
  </div>
</template>

<script>
// import Child from './components/Child.vue'
import { defineAsyncComponent } from "vue"; //静态引入
const Child = defineAsyncComponent(() => import("./components/Child")); //异步引入
export default {
  name: "App",
  components: { Child },
  setup() {},
};
</script>

<style>
.app {
  background: gray;
  padding: 10px;
}
</style>