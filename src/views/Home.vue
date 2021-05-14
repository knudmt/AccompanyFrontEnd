<template>
  <div class="container max-w-full">
    <HeroTabs />
    <Hero />
    <DataServices />
    <Partners />
    <Contact />
  </div>
</template>

<script>
import Hero from '../components/Hero';
import HeroTabs from '../components/HeroTabs';
import DataServices from '../components/DataServices';
import Partners from '../components/Partners';
import Contact from '../components/Contact';

export default {
  name: 'Home',
  components: { 
    HeroTabs,
    Hero,
    DataServices,
    Partners,
    Contact,
  }
}
</script>
 
<style>
#app {
  font-family:'Roboto', sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
