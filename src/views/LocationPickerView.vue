<template>
    <div class="container max-w-full">
        <Hero />
        <LocationResults @update-location="updateLocation" />
        <Search />
    </div>
</template>

<script>
import Hero from '../components/heros/ChooseLocationHero';
import LocationResults from '../components/chooselocation/LocationResults';
import Search from '../components/chooselocation/Search';

export default {
  name: 'LocationPickerView',
  components: { 
    Hero,
    LocationResults,
    Search,
  },
  props: {
    locationName: String,
  },
  methods: {
    updateLocation(option) {
      this.$emit('updated-location', option);
    }
  }
}

</script>