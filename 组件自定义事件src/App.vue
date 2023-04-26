<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName"/>
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
    <Student @atguigu.once="getStudentName"/>
        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
        <!-- <Student ref="student"/> -->
  </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue'
export default{
    name: 'APP',
    components: { Student, School },
    data(){
        return {
          msg: '你好'
        }
    },
    methods: {
      getSchoolName(name){
        console.log('APP收到了学校名：',name);
      },
      getStudentName(name,...paramas){
        console.log('APP收到了学生名：', name,paramas);
        
      }
    },
    mounted(){
        // this.$refs.student.$on('atguigu',this.getStudentName) //绑定自定义事件
        // this.$refs.student.$once('atguigu',this.getStudentName) //绑定自定义事件（一次性）
    }
};
</script>

<style scoped>
.app{
  background-color: gray;
  padding: 5px;
}
</style>