<template>
    <div>
        <div class="overlay bg-overlayGray h-40v md:h-50v justify-center items-center flex">
            <div class="lg:w-5/6 w-full m-auto">
                <h2 class="lg:text-4xl md:text-2xl text-lg md:p-12 md:pb-16 text-white font-bold">Looks Like You're Closest To</h2>
                <div class="text-white text-2xl font-bold underline">{{nearbyAirport}}</div>
                <div class="text-white text-xl font-bold mt-3">{{nearbyAirportAddress}}</div>
                <Button @click.native="$router.push('OrderResturantPicker')" msg="ORDER NOW!" class="bg-seafoam text-white border-white mt-12 lg:mt-8 lg:px-8 lg:py-3 lg:text-xl" />
                <p class="md:text-xl max-w-screen-lg mt-6 pt-6 m-auto text-white text-sm border-t border-solid border-gray-400">
                    Do you want your order delivered
                    somewhere else?
                </p>
                <Button @click.native="$router.push('LocationPicker')" msg="Choose Location" class="bg-seafoam text-white border-white mt-6 lg:mt-6 lg:px-6 lg:py-2 lg:text-xl" />
            </div>
        </div>
    </div>
    
</template>
<script>
import Button from '../Button.vue';
export default {
    name: 'PassengerHero',
    components: {
        Button,
    },
    data() {
        return {
            nearbyAirport: 'dynamicAirportName',
            nearbyAirportAddress: '1 Terminal Dr, Nashville, TN 37214',
            

        }
    }
}
</script>
