import {reactive} from 'vue'
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
export {
    useRemoveItem
} 