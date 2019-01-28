<template>
  <div class="music-box">
    <div class="music-control-box">
      <audio :src="src" controls="controls" class="audio">
        this is text
      </audio>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicControl',
  props: {
    src: String
  },

  created(e) {
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
