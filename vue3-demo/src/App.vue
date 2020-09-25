<template>
  <!-- <Demo></Demo> -->
  <LifeCycle></LifeCycle>
</template>

<script>
// import Demo from './components/vueOld/todoList.vue'
import Demo from './components/vueNew/todoList.vue'
import LifeCycle from './components/vueNew/lifeCycle.vue'

export default {
  name: 'App',
  components: {
    Demo,
    LifeCycle
  },
  
}
</script>
