<template>
  <div id="app">
    <sidebar></sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import sidebar from './components/Sidebar.vue';

export default {
  name: 'app',
  name: 'app',
  components: {
    sidebar
  }
}
</script>

<style>
@import '//at.alicdn.com/t/font_496303_kqrjhri8l25d0a4i.css';

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body, #app {
  height: 100%;
}

body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  -moz-osx-font-smoothing: grayscale;  
  background-color: #eee;
}

a {
  text-decoration: none;
  color: #444;
}

.btn{
  color: #666;
  font-size: 12px;
  padding: 2px 4px;
  background-color: #fff;
  border: none;
  box-shadow: 0px 0px 2px 0px #ccc;
  cursor: pointer;
  display: inline-block;
}

#app {
  display: flex;
  align-items: stretch;
}
</style>
