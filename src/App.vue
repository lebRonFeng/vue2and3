<template>
  <div class="container">
    <Category title="游戏">
      <template scope="{games}">
        <ul>
          <li v-for="(g, index) in games" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>
    
	<Category title="游戏">
		<template scope="{games}">
        <ol>
          <li style="color:red;" v-for="(g, index) in games" :key="index">{{ g }}</li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
		<template slot-scope="{games}">
          <h4 v-for="(g, index) in games" :key="index">{{ g }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  name: "App",
  components: { Category },
  //   data() {
  //     return {
  //       foods: ["火锅", "烧烤", "小龙虾", "牛排"],
  //       games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
  //       films: ["《教父》", "《拆弹专家》", "《你好，李焕英》", "《尚硅谷》"],
  //     };
  //   },
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
