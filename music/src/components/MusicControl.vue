<template>
  <div class="music-box">
    <div class="music-control-box">
      <audio :src="music.url" controls="controls" class="audio">
        this is text
      </audio>
    </div>
  </div>
</template>

<script>

// const store = new Vuex.Store({
//   state: {
//     id: ''
//   }
// })

// import api from '../lib/api'
import jsonp from 'jsonp'
export default {
  name: 'MusicControl',
  // props: {
  //   id: String
  // },
  // data() {
  //   return {
  //     music: this.$store.state.music
  //   }
  // },

  computed: {
    music() {
      return this.$store.state.music
    }
  },

  created(e) {
    console.log('********************************777 store', this.$data)
    // if (!this.id) return
    this.audio = new (window.AudioContext || window.webkitAudioContext)()
    console.log('>>>>>>> this.',this.audio)
  },

  methods: {
    
  }
}
</script>

<style scoped>
  .music-box, .music-control-box {
    width: 100%;
    height: 100%;
  }
  .music-control-box {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  .audio {
    width: 100%;
    background: transparent;
  }
</style>
