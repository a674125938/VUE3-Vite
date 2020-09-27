<template>
  <h1>Demo-b</h1>
  <ul>
    <li v-for="item in state.list" :key="item.no" @click="delItem(item.no)">
      {{ item.no }}-{{ item.text }}
    </li>
  </ul>
  <span>编号：</span>
  <input type="text" name="" v-model="state2.obj.no" />
  <span>干啥：</span>
  <input type="text" name="" v-model="state2.obj.text" />
  <span>&nbsp;</span>
  <button @click="addItem">添加</button>
</template>

<script>

import {useRemoveItem} from './method/remove'
import {useAddItem} from './method/add'

export default {
  name: "betterTodoList2",
  setup(props, cxt) {
   let {state,delItem} = useRemoveItem();
   let {state2,addItem} = useAddItem(state);
    
    return {
      state,
      state2,
      addItem,
      delItem
    }
  },


};



</script>
<style scoped></style>
