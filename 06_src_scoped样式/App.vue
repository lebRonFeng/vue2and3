<template>
  <div>
    <School/>
    <Student/>
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
        }
    },
    methods: {
    },

};
</script>

<style scoped>
</style>