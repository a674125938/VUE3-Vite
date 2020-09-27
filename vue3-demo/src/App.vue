<template>

  <div id="nav">
    <router-link to="/">OldDemo</router-link> |
    <router-link to="/Demo">Demo</router-link>|
    <router-link to="/BerDemo">BerDemo</router-link>|
    <router-link to="/LifeCycle">LifeCycle</router-link>
  </div>
  <router-view/>
</template>

<script>

import {ref} from 'vue'
export default {
  name: 'App',
  components: {

  },
  setup(){
  
  }
}
</script>
