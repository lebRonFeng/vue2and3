<template>
    <div>
      <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
            <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
            <!-- <input type="checkbox" v-model="todo.done"/> -->
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input 
              v-show="todo.isEdit" 
              type="text"
              ref="inputTitle" 
              :value="todo.title"
              @blur="handleBlur(todo,$event)"
            >
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button class="btn btn-edit" v-show="!todo.isEdit" @click="hanleEdit(todo)">编辑</button>
      </li>
    </div>
  </template>
  
  <script>
  import pubsub from 'pubsub-js'
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
            // this.$bus.$emit('deleteTodo', id)
            pubsub.publish('deleteTodo',id)
          }
        },
        //编辑
        hanleEdit(todo){
          if(todo.hasOwnProperty('isEdit')){
            todo.isEdit = true;
          }else {
            this.$set(todo,'isEdit',true)
          }
          this.$nextTick(function(){
            this.$refs.inputTitle.focus()
          })
        },
        // 失去焦点回调（真正执行修改逻辑）
        handleBlur(todo,e){
          todo.isEdit = false;
          if(!e.target.value.trim()) return alert('输入不能为空！')
          this.$bus.$emit('updateTodo',todo.id,e.target.value)
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