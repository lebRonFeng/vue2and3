<template>
  <div>
    <Student name="李四" sex="女" :age="18"/>
  </div>
</template>

<script>
import Student from './components/Student.vue'
export default{
    name: 'APP',
    components: { Student },
    data(){
        return {
            msg: '欢迎学习vue!'
        }
    },
    methods: {
    },

};
</script>

<style scoped>
</style>