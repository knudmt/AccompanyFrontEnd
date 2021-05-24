<template>
    <div class="container max-w-full">
        <Hero />
        <ToggleSwitch />
        <Search />
    </div>
</template>

<script>
import Hero from '../components/heros/ChooseLocationHero';
import ToggleSwitch from '../components/chooselocation/ToggleSwitch';
import Search from '../components/chooselocation/Search';

export default {
  name: 'LocationPickerView',
  components: { 
    Hero,
    ToggleSwitch,
    Search,
  },
}

</script>