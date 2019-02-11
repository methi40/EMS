<template>
  <div id="app">
    <app-toolbar></app-toolbar>
    <router-view/>
    <mobile-menu :menu="menu" class="hidden-sm-and-up"/>
      <painpoint id="earthworks"/>
    <app-footer></app-footer>
    
  </div>
</template>

<script>
import AppToolbar from './components/AppToolbar'
import MobileMenu from './components/MobileMenu'
import AppFooter from './components/AppFooter'
export default {
  name: 'App',
  components:{
    AppToolbar,
    AppFooter,
    MobileMenu,
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
}
</style>
