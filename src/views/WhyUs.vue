<template>
  <div class="container max-w-full">
    <Hero />
    <About />
    <Mission />
    <Founder />
    <HowItWorks />
    <DataAndBenifits />
    <Partners />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Hero from '../components/Hero';
import About from '../components/whyus/About';
import Mission from '../components/whyus/Mission';
import Founder from '../components/whyus/Founder';
import HowItWorks from '../components/whyus/HowItWorks';
import DataAndBenifits from '../components/whyus/DataAndBenifits';
import Partners from '../components/Partners';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default {
  name: 'WhyUs',
  components: { 
    Hero,
    About,
    Mission,
    Founder,
    HowItWorks,
    DataAndBenifits,
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
