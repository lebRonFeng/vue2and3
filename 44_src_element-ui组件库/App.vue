<template>
  <div>
    <button>原生的按钮</button>
    <input type="text">
    <atguigu-row>
  <atguigu-button>默认按钮</atguigu-button>
  <atguigu-button type="primary">主要按钮</atguigu-button>
  <atguigu-button type="success">成功按钮</atguigu-button>
  <atguigu-button type="info">信息按钮</atguigu-button>
  <atguigu-button type="warning">警告按钮</atguigu-button>
  <atguigu-button type="danger">危险按钮</atguigu-button>
</atguigu-row>

<atguigu-row>
  <atguigu-button plain>朴素按钮</atguigu-button>
  <atguigu-button type="primary" plain>主要按钮</atguigu-button>
  <atguigu-button type="success" plain>成功按钮</atguigu-button>
  <atguigu-button type="info" plain>信息按钮</atguigu-button>
  <atguigu-button type="warning" plain>警告按钮</atguigu-button>
  <atguigu-button type="danger" plain>危险按钮</atguigu-button>
</atguigu-row>

<atguigu-row>
  <atguigu-button round>圆角按钮</atguigu-button>
  <atguigu-button type="primary" round>主要按钮</atguigu-button>
  <atguigu-button type="success" round>成功按钮</atguigu-button>
  <atguigu-button type="info" round>信息按钮</atguigu-button>
  <atguigu-button type="warning" round>警告按钮</atguigu-button>
  <atguigu-button type="danger" round>危险按钮</atguigu-button>
</atguigu-row>

<atguigu-row>
  <atguigu-button icon="atguigu-icon-search" circle></atguigu-button>
  <atguigu-button type="primary" icon="atguigu-icon-edit" circle></atguigu-button>
  <atguigu-button type="success" icon="atguigu-icon-check" circle></atguigu-button>
  <atguigu-button type="info" icon="atguigu-icon-message" circle></atguigu-button>
  <atguigu-button type="warning" icon="atguigu-icon-star-off" circle></atguigu-button>
  <atguigu-button type="danger" icon="atguigu-icon-delete" circle></atguigu-button>
</atguigu-row>

<div class="block">
    <span class="demonstration">默认</span>
    <atguigu-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </atguigu-date-picker>
  </div>
  </div>
</template>

<script>
	export default {
		name:'App',
    data(){
      return {
        value1:''
      }
    }
	}
</script>
