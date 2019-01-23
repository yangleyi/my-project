<template>
  <div id="app">
    <!--    
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> 
    -->
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <recommend-music/>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import RecommendMusic from './components/RecommendMusic.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    RecommendMusic
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
