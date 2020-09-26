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
import {reactive} from 'vue'


export default {
  name: "betterTodoList",
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

function useAddItem(state) {
    let state2 = reactive({
      obj:{
         no: "",
          text: "",
      }  
    })
    function addItem(e) {
        e.preventDefault()
        if(state2.no == ''){
          return
        }
        let setItem = Object.assign({},state2.obj)
        state.list.push(setItem)
        state2.obj.no="";
        state2.obj.text="";
    }
    return {
      state2,addItem
    }
}
function useRemoveItem(no) {
    let state = reactive({
       list: [
        { no: "1", text: "吃饭" },
        { no: "2", text: "睡觉" },
        { no: "3", text: "打豆豆" },
      ],
    })
    function delItem(no) {
       state.list=state.list.filter(item => item.no != no);
    }
    return {
      state,delItem
    }
}

</script>
<style scoped></style>
