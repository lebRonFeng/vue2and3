<template>
  <div>
    <Test1></Test1>
    <Test2></Test2>
    <Test3></Test3>
  </div>
</template>

<script>
import Test1 from "./components/test1.vue";
import Test2 from "./components/test2.vue";
import Test3 from "./components/test3.vue";
export default {
  name: "App",
  components: { Test1, Test2, Test3 },
};
</script>

<style>
</style>