<template>
<div>
    <h2 class="text-left text-darkBlueText text-xl font-bold mb-12 lg:mx-12">All Hotels</h2>
    <ul>
        <li :key="hotelOption.id" v-for="hotelOption in hotelOptions">
            <HotelOptionCard :hotelOption="hotelOption" @location-selected="locationSelected" />
        </li>
    </ul>
</div>
</template>

<script>
import HotelOptionCard from '../chooselocation/HotelOptionCard';

export default {
   name: 'HotelResults',
   components: {
       HotelOptionCard,
   },
   props: {
       hotelOptions: Array
   },
   methods: {
       locationSelected(hotelOption) {
           this.$emit('location-selected', hotelOption)
       }
   }
}
</script>