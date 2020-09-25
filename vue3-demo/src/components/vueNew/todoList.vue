<template>
  <h1>3.0</h1>
  <!-- <ul>
    <li v-for="item in list" :key="item.no" @click="delItem(item.no)">
      {{ item.no }}-{{ item.text }}
    </li>
  </ul>
  编号：
  <input type="text" name="" v-model="todoObj.no" />
  干啥：
  <input type="text" name="" v-model="todoObj.text" />
  &nbsp;
  <button @click="addItem">添加</button> -->
</template>

<script>
import {onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted,onErrorCaptured} from 'Vue'
let obj = {
  list: [
    { no: "1", text: "吃饭" },
    { no: "2", text: "睡觉" },
    { no: "3", text: "打豆豆" },
  ],
  todoObj: {
    no: "",
    text: "",
  },
};
export default {
  name: "Demo",
  setup(props, cxt) {
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
    });
    onErrorCaptured(() => {
      console.log("onErrorCaptured");
    });
  },


};
</script>
<style scoped></style>
