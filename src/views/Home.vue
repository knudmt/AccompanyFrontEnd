<template>
  <div class="container max-w-full">
    <Hero :selectedLocation="selectedLocation" :locationName="locationName" @selected="setTab"/>
    <DataServices :selectedTab="selectedTab" />
    <Partners class="bg-bgBlue" />
    <Contact />
  </div>
</template>

<script>
import Hero from '../components/Hero';
import DataServices from '../components/DataServices';
import Partners from '../components/Partners';
import Contact from '../components/Contact';

export default {
  name: "Home",
  components: { 
    Hero,
    DataServices,
    Partners,
    Contact,
  },
  data() {
    return {
      selectedTab: "I'm a Passenger"
    }
  },
  props: {
    selectedLocation: Boolean,
    locationName: String,
  },
  created() {
    console.log(this.selectedTab)
  },
  methods: {
    setTab(tab) {
      this.selectedTab = tab;
      console.log(tab)
    }
  }
}
</script>
 
<style>
#app {
  font-family:"Helvetica", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
