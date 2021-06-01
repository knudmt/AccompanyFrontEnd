<template>
    <div>
      <ToggleSwitch :options="['Airports', 'Hotels']" :selected="selected" @selected="setSelected">
        <ToggleOption :isSelected="selected === 'Airports'" >
          <div :class="{ airportResults: this.selected }">
            <AirportResults :airportOptions="airportOptions" @location-selected="updateLocation" />
          </div>
        </ToggleOption>
        <ToggleOption :isSelected="selected === 'Hotels'" >
          <div :class="{ hotelResults: this.selected }">
            <HotelResults :hotelOptions="hotelOptions" @location-selected="updateLocation" />
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
      selected: 'Airports',
      hotelOptions: [],
      airportOptions: [],

    }
  },
  created() {
    this.hotelOptions = [
          {
              id: 'Hilton',
              image: 'bg-Hilton',
              name: 'Hilton Hotels and Resorts',
              address: '1234 Fake Address Ave, City, GA 12345',
              rating: 0,
              count: 0,
          },
          {
              id: 'Hyatt',
              image: 'bg-Hyatt',
              name: 'Hyatt Hotels and Resorts',
              address: '1234 Fake Address Ave, City, GA 12345',
              rating: 0,
              count: 0,
          },
          {
              id: 'Marriott',
              image: 'bg-Marriott',
              name: 'Marriott Hotels and Resorts',
              address: '1234 Fake Address Ave, City, GA 12345',
              rating: 0,
              count: 0,
          },
    ],
    this.airportOptions = [
             {
                id: 'Hartsfield',
                image: 'bg-Hartsfield',
                name: 'Hartsfield Jackson Atlanta International Airport',
                address: '6000 N Terminal Pkwy, Atlanta, GA 30320',
                rating: 0,
                count: 0,
            },
            {
                id: 'Armstrong',
                image: 'bg-Armstrong',
                name: 'Louis Armstrong New Orleans International Airport',
                address: '1 Terminal Dr, Kenner, LA 70062',
                rating: 0,
                count: 0,
            },
            {
                id: 'Nashville',
                image: 'bg-Nashville',
                name: 'Nashville International Airport',
                address: '1 Terminal Dr, Nashville, TN 37214',
                rating: 0,
                count: 0,
            },
    ]
  },
  methods: {
    setSelected(option) {
      this.selected = option;
    },
    updateLocation(option) {
      this.$emit('update-location', option)
    }
  }
}
</script>