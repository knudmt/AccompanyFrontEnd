<template>
  <div class="container max-w-full">
    <ContactHero />
    <FormSection />
    <FAQ />
    <Partners class="bg-white" />
  </div>
</template>

<script>
import ContactHero from '../components/heros/ContactHero';
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
    ContactHero,
    FormSection,
    FAQ,
    Partners,
  }
}
</script>
