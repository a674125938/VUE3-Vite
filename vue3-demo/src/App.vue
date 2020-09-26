<template>
  <div class="btnBox">
    <button @click="showThis(1)">oldDemo</button>
    <button @click="showThis(2)">Demo</button>
    <button @click="showThis(3)">BerDemo</button>
    <!-- <button @click="showThis(3)">LifeCycle</button> -->
  </div>
 
  <OldDemo v-if="showComponent == 1"></OldDemo>
  <Demo  v-if="showComponent == 2"></Demo>
  <BerDemo v-if="showComponent == 3"></BerDemo>
</template>

<script>
import OldDemo from './components/vueOld/todoList.vue'
import Demo from './components/vueNew/todoList.vue'
import BerDemo from './components/vueNew/betterTodoList.vue'
// import LifeCycle from './components/vueNew/lifeCycle.vue'
import {ref} from 'vue'
export default {
  name: 'App',
  components: {
    OldDemo,
    Demo,
    BerDemo,
    // LifeCycle
  },
  setup(){
    const showComponent = ref(1)
    function showThis(val) {
      showComponent.value = val
    }
    return {
      showComponent,
      showThis
    }
  }
}
</script>
