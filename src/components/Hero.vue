<template>
    <div class="overflow-hidden">
      <HeroTabs :tabs="['I’m a Passenger', 'I’m a Flight Crew Member']" :selected="selected" @selected="setSelected">
        <Tab :isSelected="selected === 'I’m a Passenger'" >
          <div :class="{ passengerHero: this.selected }">
            <PassengerHero v-if="locationGrab === false"/>
            <PassLocationSelectedHero v-if="locationGrab === true" />
          </div>
          <h2 class="lg:text-4xl text-xl font-bold text lg:mb-6 mt-8 md:mt-16">Accompany Passenger Services</h2>
        </Tab>
        <Tab :isSelected="selected === 'I’m a Flight Crew Member'" >
          <div :class="{ crewHero: this.selected }">
            <CrewHero v-if="locationGrab === false" />
            <CrewLocationSelectedHero v-if="locationGrab === true" />
          </div>
          <h2 class="lg:text-4xl text-xl font-bold text lg:mb-6 mt-8 md:mt-16">Accompany Flight Crew Services</h2>
        </Tab>
      </HeroTabs> 
    </div>
</template>


<script>

import HeroTabs from './HeroTabs';
import Tab from './Tab';
import PassengerHero from './PassengerHero';
import CrewHero from './CrewHero';
import PassLocationSelectedHero from './heros/PassengerLocationSelected.vue'
import CrewLocationSelectedHero from './heros/CrewLocationSelected.vue'

export default {
  name: 'Hero',
  components: {
    HeroTabs,
    Tab,
    PassengerHero,
    PassLocationSelectedHero,
    CrewHero,
    CrewLocationSelectedHero,
  },
  data() {
    return {
      selected: 'I’m a Passenger'
    }
  },
  props: {
    selectedLocation: Boolean,
    locationName: String,
    locationGrab: Boolean,
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
      this.$emit('selected', tab);
    }
  }
}
</script>


