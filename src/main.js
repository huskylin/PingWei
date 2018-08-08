import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
