import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)
// import Api from './lib/api'
let api = require('./lib/api')


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  Api: api
}).$mount('#app')
