<template>
  <h1>Demo-a</h1>
  <ul>
    <li v-for="item in state.list" :key="item.no" @click="delItem(item.no)">
      {{ item.no }}-{{ item.text }}
    </li>
  </ul>
  <span>编号：</span>
  <input type="text" name="" v-model="state.todoObj.no" />
  <span>干啥：</span>
  <input type="text" name="" v-model="state.todoObj.text" />
  <span>&nbsp;</span>
  <button @click="addItem">添加</button>
</template>

<script>
import {reactive} from 'vue'
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
    let state=reactive(obj)
    function addItem() {
      if(state.todoObj.no == ''){
        return
      }
      state.list.push(state.todoObj)
    }
    function delItem(no) {
       state.list=state.list.filter(item => item.no != no);
    }
    return {
      state,
      addItem,
      delItem
    }
  },


};
</script>
<style scoped></style>
