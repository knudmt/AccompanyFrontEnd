<template>
  <div id="app">
    <HeaderNav :selectedLocation="selectedLocation" />
    <div id="contentDiv" class="max-w-screen-3xl m-auto">
        <router-view @updated-location="updateLocation" :locationName="locationName" />
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
  },
  data() {
    return {
      selectedLocation: false,
      locationName : 'Please select a location'
    }
  },
  methods: {
      updateLocation(option) {
      this.locationName = option.name;
      this.selectedLocation = true;
    }
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
