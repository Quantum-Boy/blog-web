<template>
  <div>
    <Menu/>
    <router-view/>
  </div>
</template>

<script>
import Menu from './components/menu.vue'
export default {
  name: 'App',
  components: {
    Menu
  },
  data () {
    return {
      activeIndex: '1'
    }
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
