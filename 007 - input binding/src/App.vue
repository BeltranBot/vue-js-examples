<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'
import indexBlog from './components/indexBlog.vue'
import listBlog from './components/listBlogs.vue'
import header from './components/header.vue'

export default {
  components: {
    'add-blog': addBlog,
    'index-blog': indexBlog,
    'list-blogs': listBlog,
    'app-header': header
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
