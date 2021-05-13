<template>
  <div class="container max-w-full">
    <Hero />
    <CareerInfo />
    <FAQ />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Hero from '../components/Hero';
import CareerInfo from '../components/careers/CareerInfo';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

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
    Footer,
  }
}
</script>
