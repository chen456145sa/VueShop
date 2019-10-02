<template>
  <div id="app">
    <mt-header fixed title="VueShop"></mt-header>
    <tabbar></tabbar>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Tabbar from './components/tabbar'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Tabbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
