<template lang="html">
  <header>
    <h1 @click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
import { bus } from '../main'
export default {
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  methods: {
    changeTitle: function () {
      this.title = 'Vue Wizards'
      bus.$emit('titleChanged', 'Vue Wizards')
    }
  }
}
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}

h1 {
  color: #222;
  text-align: center;
}
</style>
