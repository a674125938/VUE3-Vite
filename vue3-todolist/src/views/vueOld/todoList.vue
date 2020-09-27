<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="item in list" :key="item.no" @click="delItem(item.no)">{{item.no}}-{{item.text}}</li>
    </ul>
    编号：
    <input type="text" name="" v-model="todoObj.no">
    干啥：
    <input type="text" name="" v-model="todoObj.text">
    &nbsp;
    <button @click="addItem">添加</button>
  </div>
</template>

<script>
export default {
  name: 'oldDemo',

  data() {
    return {
      msg: '2.X',
      list:[
        {no:'1',text:'吃饭'},
        {no:'2',text:'睡觉'},
        {no:'3',text:'打豆豆'},
      ],
      todoObj:{
        no:'',
        text:''
      }
    }
  },
  // beforeCreate(){
  //   console.log('beforeCreate')
  // },
  // created(){
  //   console.log('created')
  // },
  // beforeMount(){
  //   console.log('beforeMount')
  // },
  // mounted(){
  //   console.log('mounted')
  // },
  // beforeUpdate(){
  //   console.log('beforeUpdate')
  // },
  // updated(){
  //   console.log('updated')
  // },
  //注意 beforeDestroy 被替换 beforeUnmount
  // beforeDestroy(){
  //   console.log('beforeDestroy')
  // },
  // beforeUnmount(){
  //   console.log('beforeUnmount')
  // },
  //注意 destroyed 被替换 unmounted
  // destroyed(){
  //   console.log('destroyed')
  // },
  // unmounted(){
  //   console.log('unmounted')
  // },
  // errorCaptured(){
  //   console.log('errorCaptured')
  // },
  methods:{
    delItem(no){
      this.list=this.list.filter(item => item.no != no);
    },
    addItem(){
      if(!this.todoObj.no){
        return
      }
      this.list.push(this.todoObj)
    }
  }
}
</script>
<style scoped>

</style>