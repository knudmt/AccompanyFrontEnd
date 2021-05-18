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

export default {
  name: 'WhyUs',
  data() {
    return {

    }
  },
  components: { 
    Hero,
    About,
    Mission,
    Founder,
    HowItWorks,
    DataAndBenifits,
    Partners,
    Contact,
  }
}
</script>
 
<style>
#app {
  font-family:'Helvetica', sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
