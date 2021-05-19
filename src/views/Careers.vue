<template>
  <div class="container max-w-full">
    <Hero />
    <CareerInfo />
    <Apply />
    <Contact />
  </div>
</template>

<script>
import Hero from '../components/heros/CareersHero';
import CareerInfo from '../components/careers/CareerInfo';
import Apply from '../components/careers/ApplyNow';
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
    Apply,
    Contact,
  }
}
</script>
