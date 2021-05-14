<template>
  <div class="container max-w-full">
    <Hero />
    <CareerInfo />
    <FAQ />
    <Contact />
  </div>
</template>

<script>
import Hero from '../components/Hero';
import CareerInfo from '../components/careers/CareerInfo';
import Contact from '../components/Contact';

export default {
  name: 'Careers',
  data() {
    return {
      
    }
  },
  components: { 
    Hero,
    CareerInfo,
    Contact,
  }
}
</script>
