<template>
  <div class="app">
    <h1>{{ msg }}，学生姓名是：{{ studentName }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName"/>
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
    <!-- <Student @atguigu="getStudentName" @demo="m1"/> -->
        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
        <Student ref="student" @click.native="show"/> 
        <!-- .native会被解析为原生事件，否则需要在Student子组件中this.$emit('click')来触发 -->
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
          msg: '你好啊',
          studentName:''
        }
    },
    methods: {
      getSchoolName(name){
        console.log('APP收到了学校名：',name);
      },
      getStudentName(name,...paramas){
        console.log('APP收到了学生名：', name,paramas);
        this.studentName = name;
      },
      m1(){
        console.log('demo事件被触发了')
      },
      show(){
        alert('123')
      }
    },
    mounted(){
      /* 坑~留意
        this.$refs.student.$on('atguigu',function(name){
          console.log('APP收到了学生名：', name,paramas);
        this.studentName = name;
        })
       */

      /**
       * 解决方法1：App中定义函数后再调用，让this指向app
       * this.$refs.student.$on('atguigu',this.getStudentName) //绑定自定义事件
       */

      /* 解决方法2：回调函数形式，利用this向外找的特点指向app
       this.$refs.student.$on('atguigu',(name,...paramas) => {
          console.log('APP收到了学生名：', name,paramas);
        this.studentName = name;
        })
        */
        this.$refs.student.$on('atguigu',this.getStudentName) //绑定自定义事件
        
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