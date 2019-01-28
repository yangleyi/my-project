<template>
  <div id="app">
    <!--    
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> 
    -->
    <el-container>

      <el-header>Header</el-header>

      <el-main>
        <block-item type="每日推荐"/>
      </el-main>

      <el-footer>
        <music-control src="https://api.imjad.cn/cloudmusic/?type=song&id=30064351&br=128000"/>
      </el-footer>

    </el-container>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BlockItem from './components/BlockItem.vue'
import MusicControl from './components/MusicControl.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    BlockItem,
    MusicControl
  }
}
</script>

<style>
  html, body, #app, .el-container {
    height: 100%;
    width: 100%;
  }
  body {
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .el-header, .el-footer {
    background: #F56C6C;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    
  }
</style>
