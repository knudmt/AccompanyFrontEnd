<template>
  <div class="container max-w-full">
    <Hero />
    <FormSection />
    <FAQ />
    <Partners />
    <Footer />
  </div>
</template>

<script>
import Hero from '../components/Hero';
import FormSection from '../components/contactus/FormSection';
import FAQ from '../components/contactus/FAQ.vue';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

export default {
  name: 'ContactUs',
  data() {
    return {
      
    }
  },
  components: { 
    Hero,
    FormSection,
    FAQ,
    Partners,
    Footer,
  }
}
</script>
