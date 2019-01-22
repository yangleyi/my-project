<template>
  <div class="recommend">
    ni hao
  </div>
</template>

<script>
import api from '../lib/api'
export default {
  name: 'RecommendMusic',
  props: {},
  created() {
    console.log('>>>>>>>>>>>>>>>> ', api)
    let url = `http://localhost:3000?myUrl=${api.base}`
    let obj = {
      url: api.base,
      method: 'GET',
      data: {
        type: 'search',
        search_type: '1000',
        s: '推荐歌单'
      },
      mode: 'cors'
    }
    fetch(obj.url, obj)
      .then(res => {
        console.log('>>>>>> res', res)
      })
      .then(data => {
        console.log('>>>>>> data', data)
      })
  },
  methods: {

  }
}
</script>

