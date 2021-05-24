<template>
    <div>
      <ToggleSwitch :options="['Airports', 'Hotels']" :selected="selected" @selected="setSelected">
        <ToggleOption :isSelected="selected === 'Airports'" >
          <div :class="{ airportResults: this.selected }">
            <AirportResults />
          </div>
        </ToggleOption>
        <ToggleOption :isSelected="selected === 'Hotels'" >
          <div :class="{ hotelResults: this.selected }">
            <HotelResults />
          </div>
        </ToggleOption>
      </ToggleSwitch> 
    </div>
</template>

<script>

import ToggleSwitch from '../chooselocation/ToggleSwitch';
import ToggleOption from '../chooselocation/ToggleOption';
import AirportResults from '../chooselocation/AirportResults';
import HotelResults from '../chooselocation/HotelResults';

export default {
  name: 'Hero',
  components: {
    ToggleSwitch,
    ToggleOption,
    AirportResults, 
    HotelResults,
  },
  data() {
    return {
      selected: 'Airports'
    }
  },
  methods: {
    setSelected(option) {
      this.selected = option;
    }
  }
}
</script>