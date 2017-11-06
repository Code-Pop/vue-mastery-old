<template>
  <div id="app">
    <nav-bar/>
    <router-view/>


  </div>
</template>

<script>
import NavBar from '@/components/nav-bar'

export default {
  components: {
    NavBar
  },
  name: 'app'
}
</script>

<style lang="scss">
   @import 'style.scss';
</style>
