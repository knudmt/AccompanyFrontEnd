<template>
  <div class="container max-w-full">
    <Hero />
    <DataForm />
    <TreeProgram />
  </div>
</template>

<script>
import Hero from '../components/heros/DataServicesHero';
import DataForm from '../components/dataservices/DataForm';
import TreeProgram from '../components/whyus/DonateTree';

export default {
  name: 'DataServices',
  data() {
    return {
      
    }
  },
  components: { 
    Hero,
    DataForm,
    TreeProgram,
  }
}
</script>
