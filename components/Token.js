
define(["Vue"], function(Vue) {
  Vue.component("Token", {
    props: {
      token: {
        type: Object,
        required: true
      }
    },
    template: 'hello'
    // template: '<div class="token" v-bind:class="this.token.color" v-for="n in this.token.count">{{this.token.value}}</div>'
  }) 
}) 