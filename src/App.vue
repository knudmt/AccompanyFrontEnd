<template>
  <div id="app">
    <HeaderNav />
    <div id="contentDiv" class="max-w-screen-3xl m-auto">
        <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav'
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    HeaderNav,
    Footer,
  }
}
</script>


<style lang="less">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
 
</style>
