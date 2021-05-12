<template>
  <div class="container max-w-full">
    <HeaderNav />
    <HeroTabs />
    <Hero />
    <DataServices />
    <Partners />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import HeaderNav from '../components/HeaderNav';
import Hero from '../components/Hero';
import HeroTabs from '../components/HeroTabs';
import DataServices from '../components/DataServices';
import Partners from '../components/Partners';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default {
  name: 'App',
  components: {
    HeaderNav,  
    HeroTabs,
    Hero,
    DataServices,
    Partners,
    Contact,
    Footer,
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
