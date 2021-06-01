<template>
    <div>
        <Hero />
        <div class="mb-16 max-w-screen-2xl min-h-800px m-auto">
            <div class="lg:px-20 w-full flex">
                <a href="/OrderResturantPicker" class="text-left mt-6 mb-12 bg-arrowRight font-bold text-darkBlueText bg-no-repeat bg-right bg-8px pr-6">Choose Restaurant</a>
            </div>
            <div class="flex flex-wrap">
                <div v-for="vendor in vendors" :key="vendor.id" class="w-1/3">
                    <VendorCard @view-menu="$emit('view-menu', vendor)" :vendor="vendor" class="locationOption w-full flex py-2 px-6 lg:py-2 rounded-sm rounded-b-none text-gray-600 lg:text-lg md:text-base text-13px text-center cursor-pointer whitespace-nowrap" />
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import VendorCard from './VendorCard'
import Hero from '../heros/OrderNowHero'

export default {
    name: 'VendorList',
    components: {
        Hero,
        VendorCard,
    },
    props: {
        vendors: Array,
    },
    emits: ['view-menu'],
}
</script>