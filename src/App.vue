<template>
  <div id="app">
    <mt-header fixed title="VueShop"></mt-header>
    <transition>
    	<router-view></router-view>
    </transition>
    
    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from './components/tabbar'
export default {
  name: 'App',
  components: {
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
  margin-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden; /*去横向滚动条*/
}
/*tabbar动画*/
.v-enter {
	opacity: 1;
	transform: translateX(100%);
}
.v-leave-to {
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.v-enter-active,
.v-leave-active {
	transition: all 0.5s ease;
}

</style>
