<template>
  <div class="container max-w-full">
    <Hero />
    <FormSection />
    <FAQ />
    <Partners />
  </div>
</template>

<script>
import Hero from '../components/Hero';
import FormSection from '../components/contactus/FormSection';
import FAQ from '../components/contactus/FAQ.vue';
import Partners from '../components/Partners';

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
  }
}
</script>
