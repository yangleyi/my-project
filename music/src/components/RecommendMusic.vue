<template>
  <div class="recommend">
    <div v-for="item in recom" v-bind:key="item.id">
      <div class="item" @click="getItem(item)">
        <img :src="item.coverImgUrl" class="item-img">
        <p class="item-name"><b>{{ item.name | idenName }}</b></p>
      </div>
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
      recom: []
    }
  },
  created() {
    let myurl = `${api.base}?type=search&search_type=1000&s=每日推荐`
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
      // return JSON.parse(`"${str}"`)
      return unescape(str.replace(/\\/g, '%'))
    }
  },
  methods: {
    getItem(obj) {
      let myurl = `${api.base}?type=playlist&id=${obj.id}`
      let url = `http://localhost:3000?myUrl=${escape(myurl)}`
      console.log('>>>>>> get item', obj)
      jsonp(url, {}, (err, data) => {
        if (err) {
          console.log('>>>>> get list err',err)
        } else {
          console.log('>>>>>>> list', JSON.parse(data))
        }
      })
    },
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
<style scoped>
  .recommend {
    display: inline-flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .item {
    width: 200px;
    height: 200px;
    margin-bottom: 10px;
  }
  .item-img {
    width: 100%;
    max-height: 160px;
  }
  .item-name {
    text-align: left;
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>


