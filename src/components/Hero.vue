<template>
    <div class="overflow-hidden">
      <HeroTabs :tabs="['I’m a Passenger', 'I’m a Flight Crew Member']" :selected="selected" @selected="setSelected">
        <Tab :isSelected="selected === 'I’m a Passenger'" >
          <div :class="{ passengerHero: this.selected }">
            <PassengerHero />
          </div>
        </Tab>
        <Tab :isSelected="selected === 'I’m a Flight Crew Member'" >
          <div :class="{ crewHero: this.selected }">
            <CrewHero />
          </div>
        </Tab>
      </HeroTabs> 
    </div>
</template>


<script>

import HeroTabs from './HeroTabs';
import Tab from './Tab';
import PassengerHero from './PassengerHero';
import CrewHero from './CrewHero';

export default {
  name: 'Hero',
  components: {
    HeroTabs,
    Tab,
    PassengerHero,
    CrewHero,
  },
  data() {
    return {
      selected: 'I’m a Passenger'
    }
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    }
  }
}
</script>


