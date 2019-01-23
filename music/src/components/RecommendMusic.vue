<template>
  <div class="recommend">
    <div v-for="item in recom" v-bind:key="item.id">
      <p>
        <b>{{ item.creator.nickname }}</b> 
        <i>{{ item.name | idenName }}</i>
      </p>
    </div>
  </div>
</template>

<script>
import api from '../lib/api'
import $ from 'jquery'
import axios from 'axios'
import jsonp from 'jsonp'
export default {
  name: 'RecommendMusic',
  props: {},
  data() {
    return {
      default: 'hahaha',
      recom: []
    }
  },
  created() {
    let myurl = `${api.base}?type=search&search_type=1000&s=推荐歌单`
    let url = `http://localhost:3000?myUrl=${escape(myurl)}`
    let obj = {
      url: url,
      method: 'GET',
      data: {},
      mode: 'cors'
    }
    // this.userjQuery(obj)
    // this.userFetch(obj)
    // this.useAxios(obj)
    this.userJsonp(obj)
  },
  filters: {
    idenName(str) {
      return JSON.parse(`"${str}"`)
    }
  },
  methods: {
    userFetch(obj) {
      fetch(obj.url, obj)
        .then(res => {
          console.log('>>>>>> res', res)
        })
        .then(data => {
          console.log('>>>>>> data', data)
        })
    },
    userjQuery(obj) {
      $.ajax({
        url: obj.url,
        data: obj.data,
        type: 'get',
        dataType: 'jsonp',
        success(data) {
          console.log('>>>> success',data)
        },
        error(err) {
          console.log('>>>> error', err)
        }
      })
    },
    useAxios(obj) {
      axios.get(obj.url)
        .then(res => {
          console.log('>>>>>>> axios res', res)
        })
        .catch(err => {
          console.log('>>>>>>> axios err', err)
        })
    },

    userJsonp(obj) {
      jsonp(obj.url, {}, (err, data) => {
        if (err) {
          console.log('>>>>>> jsonp err', err)
        } else {
          this.processData(data)
        }
      })
    },

    processData(str) {
      let data = str
      if (typeof data === 'string') {
        data = JSON.parse(data)
      }
      if (data.code !== 200) return
      this.recom = data.result.playlists
      console.log('>>>>>>>>>>>>>>>>>>', data)
    }

    // getData() {
    //     var script = document.createElement('script');
    //     script.src = 'http://localhost:3000?myUrl=' + myurl + '&callback=callBackFunc';
    //     document.documentElement.appendChild(script);
    // },
    // callBackFunc(data) {
    //     var dataa = JSON.parse(data);
    //     alert(data);
    // }
  }
}
</script>

