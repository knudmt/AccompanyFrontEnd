<template>
    <div class="bg-bgBlue lg:p-32 lg:pt-12">
        <div class="lg:bg-white rounded-2xl bg-bgBlue py-6 px-8 lg:pb-24 lg:pt-10 lg:px-32 lg:shadow-lg max-w-screen-2xl m-auto">
            <h4 class="w-full mb-10 text-2 xl font-bold text-darkBlueText">Confirm Flight Informartion</h4>
            <div class="flex text-left flex-wrap justify-between">
                <div class="w-1/3 flex flex-col">
                    <span class="text-lg font-bold">Airline</span>
                    <span class="text-xl text-blue-600">{{airline}}</span>
                </div>
                <div class="w-1/3 flex flex-col">
                    <span class="text-lg font-bold">Date</span>
                    <span class="text-xl text-blue-600">{{date}}</span>
                </div>
                <div class="w-1/3 flex flex-col">
                    <span class="text-lg font-bold">Flight Route</span>
                    <span class="text-xl text-blue-600">{{route[0]}} to {{route[1]}}</span>
                </div>
                <div class="w-1/3 flex flex-col mt-12">
                    <span class="text-lg font-bold">Departure Time</span>
                    <span class="text-xl text-blue-600">{{departureTime}}</span>
                </div>
                <div class="w-1/3 flex flex-col mt-12">
                    <span class="text-lg font-bold">Arrival Time</span>
                    <span class="text-xl text-blue-600">{{arrivalTime}}</span>
                </div>
                <div class="w-1/3 flex flex-col mt-12">
                    <span class="text-lg font-bold">Aircraft</span>
                    <span class="text-xl text-blue-600">{{aircraft}}</span>
                </div>
            </div>
            <div class="mt-10">
                <button @click="$emit('back-clicked')" class="border border-solid border-darkBlueText font-bold px-6 py-1 rounded">Back</button>
                <button @click="$router.push('DonateCalculate')" class="bg-seafoam font-bold text-white px-6 py-1 rounded ml-6">Continue</button>
            </div>
            
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            airline: 'SouthWest Airline',
            date: 'Monday, June 7, 2021',
            route: ["SEA", "SFO"],
            departureTime: '8:34 PM',
            arrivalTime: '10:21 PM',
            aircraft: 'Embraer 175'
        }
    },
}
</script>