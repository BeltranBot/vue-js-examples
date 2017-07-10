<template>
  <div id="app">
    <add-blog></add-blog>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'

export default {
  components: {
    'add-blog': addBlog
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  method: {

  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Nunito SemiBold';
}
</style>
