<template>
  <div class="container">
    <Count/>

  </div>
</template>

<script>
import Count from "./components/Count";
export default {
  name: "App",
  components: { Count },
};
</script>

<style scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>
