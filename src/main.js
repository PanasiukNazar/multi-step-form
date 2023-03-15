import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles.css'
const VueFormulate = require('@braid/vue-formulate')


Vue.config.productionTip = false
Vue.use(VueFormulate.default)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
