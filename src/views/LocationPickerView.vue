<template>
    <div class="container max-w-full">
        <Hero />
        <LocationResults />
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
}

</script>