<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <PageFooter/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import PageFooter from './components/PageFooter'

export default {
  name: 'App',
  components: {
    Navbar,
    PageFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html, body, #app{
    width: 100%;
    height: 100%;
    margin: 0px;
}
</style>
