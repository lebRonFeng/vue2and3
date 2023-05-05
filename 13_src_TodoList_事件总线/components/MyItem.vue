<template>
    <div>
      <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
            <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
            <!-- <input type="checkbox" v-model="todo.done"/> -->
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
      </li>
    </div>
  </template>
  
  <script>
    export default {
      name: 'MyItem',
      // 声明接收todo对象
      props:['todo'],
      data(){
        return {

        }
      },
      methods:{
        handleCheck(id){
          // 通知App组件将对应的todo对象的done值取反
          // this.checkTodo(id);
          this.$bus.$emit('checkTodo', id)
        },
        handleDelete(id){
          if(confirm('确定删除吗？')){
            // this.deleteTodo(id)
            this.$bus.$emit('deleteTodo', id)
          }
        }
      }
    }
  </script>
  
  <style lang="less" scoped>
  li{
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;

    label{
      float: left;
      cursor: pointer;
    }

    label,input{
      vertical-align: middle;
      margin-right: 6px;
      position: relative;
      top: -1px;
    }

    button{
      float: right;
      display: none;
      margin-top: 3px;
    }

    &:before{
      content: initial;
    }

    &:last-child{
      border-bottom: none;
    }

    &:hover{
      background-color: #ddd;
    }

    &:hover button{
      display: block;
    }
  }
  </style>