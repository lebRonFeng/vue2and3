<template>
  <div>
    <Student/>
    <hr>
    <School/>
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
            msg: '欢迎学习vue!'
        }
    },
    methods: {
    },

};
</script>

<style scoped>
</style>