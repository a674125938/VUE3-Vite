import {reactive} from 'vue'
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
export {
    useAddItem
}