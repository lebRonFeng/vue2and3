<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge+1 }}</h2>
    <button @click="updateAge">尝试修改年龄</button>
  </div>
</template>

<script>
export default {
    name: 'School',
    data(){
      console.log(this);
        return {
            // name: '张三',
            // sex: '男',
            // age: 18,
            msg: '我是尚硅谷的一个学生',
            myAge:this.age
        }
    },
    methods: {
      updateAge(){
        this.myAge++
      }
    },
    // ①props: ['name', 'sex', 'age','phone'] //简单声明接收

    // ②接收的同时对数据进行限制
    // props: {
    //   name:String,
    //   age:Number,
    //   sex:String
    // }

    // ③接收的同时对数据：进行限制+默认值的指定+必要性的限制
    props: {
      name:{
        type: String, //name 的类型为字符串
        require:true //name是必要的
      },
      age:{
        type: Number,
        default:99   //默认值
      },
      sex:{
        type: String,
        require:true 
      }
    }
}
</script>
