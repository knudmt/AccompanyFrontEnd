<template>
    <div class="lg:bg-white py-6 px-8 lg:pb-24 lg:pt-10 lg:px-32 max-w-screen-2xl m-auto">
        <h4 class="w-full mb-10 text-2 xl font-bold text-darkBlueText">Confirm Flight Informartion</h4>
        <div class="flex text-left flex-wrap lg:justify-start justify-between">
            <div class="w-1/3 flex flex-col lg:pl-24">
                <span class="lg:text-lg font-bold">Airline</span>
                <span class="lg:text-xl text-blue-600">{{airline}}</span>
            </div>
            <div class="w-1/3 flex flex-col lg:pl-24">
                <span class="lg:text-lg font-bold">Flight Distance</span>
                <span class="lg:text-xl text-blue-600">{{flightDistance}}</span>
            </div>
            <div class="w-1/3 flex flex-col lg:pl-24">
                <span class="lg:text-lg font-bold">Flight Time</span>
                <span class="lg:text-xl text-blue-600">{{flightTime}}</span>
            </div>
            <div class="w-1/3 flex flex-col mt-12 lg:pl-24">
                <span class="lg:text-lg font-bold">Aircraft</span>
                <span class="lg:text-xl text-blue-600">{{aircraft}}</span>
            </div>
            <div class="w-1/3 flex flex-col mt-12 lg:pl-24">
                <span class="lg:text-lg font-bold">CO2 Gas Emission</span>
                <span class="lg:text-xl text-blue-600">{{co2}}</span>
            </div>
        </div>  
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            airline: 'SouthWest Airline',
            flightDistance: '1,323 Miles',
            flightTime: "2 Hours",
            aircraft: 'Embraer 175',
            co2: '345'
        }
    }
}
</script>