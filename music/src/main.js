import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from './lib/api'
import jsonp from 'jsonp'
Vue.use(Element)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    id: '',
    music: {}
  },
  mutations: {
    getMusic(state) {
      let myurl = `${api.base}?type=song&id=${state.id}`
      let url = `http://localhost:3000?myUrl=${escape(myurl)}`
      let obj = {
        url: url,
        method: 'GET',
        data: {}
      }
      jsonp(obj.url, {}, (err, res) => {
        if (err) {
          console.log('>>>>>> jsonp err', err)
        } else {
          let data = JSON.parse(res)
          store.state.music = data.data[0]
          console.log('music song data,', data, store)
        }
      })
    }

  }
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
