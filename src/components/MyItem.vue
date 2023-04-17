<template>
    <div>
      <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" style="display:none">删除</button>
      </li>
    </div>
  </template>
  
  <script>
    export default {
      name: 'MyItem',
      // 声明接收todo对象
      props:['todo','checkTodo'],
      data(){
        return {

        }
      },
      methods:{
        handleCheck(id){
          // 通知App组件将对应的todo对象的done值取反
          this.checkTodo(id);
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
  }
  </style>