<template>
  <div class="container max-w-full">
    <Hero />
    <About />
    <Mission />
    <Founder />
    <HowItWorks />
    <DataAndBenifits />
    <DonateTree />
    <Partners />
    <Contact class="bg-bgBlue"/>
  </div>
</template>

<script>
import Hero from '../components/heros/WhyUsHero';
import About from '../components/whyus/About';
import Mission from '../components/whyus/Mission';
import Founder from '../components/whyus/Founder';
import HowItWorks from '../components/whyus/HowItWorks';
import DataAndBenifits from '../components/whyus/DataAndBenifits';
import DonateTree from '../components/whyus/DonateTree';
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
    DonateTree,
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
