<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group 
      appear
      name="animate_animated animate_bounce"
      enter-active-class="animate_swing"
      leave-active-class="animate__backOutUp">
      <h1 v-show="isShow" key="1">你好啊！</h1>
      <h1 v-show="!isShow" key="2">尚硅谷！</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css';
export default {
  name: "test3",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: green;
}

/* 进入的起点/离开的终点 */
/* .hello-enter,.hello-leave-to {
  transform: translateX(-100%);
} */
/* 进入的终点/离开的起点 */
/* .hello-enter-to,.hello-leave {
  transform: translateX(0);
}
.hello-enter-to,.hello-leave{
  transition: 0.5s linear;
} */
</style>