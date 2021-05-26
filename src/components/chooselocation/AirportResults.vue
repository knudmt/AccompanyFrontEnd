<template>
<div>
    <h2 class="text-left text-darkBlueText text-xl font-bold mb-12 lg:mx-12">All Airports</h2>
    <ul>
        <li :key="airportOption.id" v-for="airportOption in airportOptions">
            <AirportOptionCard :airportOption="airportOption" />
        </li>
    </ul>
</div>
</template>

<script>
import AirportOptionCard from '../chooselocation/AirportOptionCard';

export default {
   name: 'AirportResults',
   components: {
       AirportOptionCard,
   },
   props: {
       airportOptions: Array
   }
    
}
</script>