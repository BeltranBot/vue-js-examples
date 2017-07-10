/* globals Vue */
Vue.component('greeting', {
  template: '<p>Hey There, I am {{name}} <button @click="changeName">Change Name</button></p>',
  data: function () {
    return {
      name: 'Yoshi'
    }
  },
  methods: {
    changeName: function () {
      this.name = 'Mario'
    }
  }
})

new Vue({
  el: '#vue-app-one'
})

new Vue({
  el: '#vue-app-two'
})
