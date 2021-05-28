<template>
    <div>
        <h1>Vendor List</h1>
        <div class="flex flex-wrap">
            <div v-for="vendor in vendors" :key="vendor.id" class="w-1/3">
                <VendorCard @view-menu="$emit('view-menu', vendor.id)" :vendor="vendor" class="locationOption w-full flex py-2 px-6 lg:py-2 rounded-sm rounded-b-none text-gray-600 lg:text-lg md:text-base text-13px text-center cursor-pointer whitespace-nowrap" />
            </div>
        </div>
    </div>
</template>

<script>
import VendorCard from './VendorCard'

export default {
    name: 'VendorList',
    components: {
        VendorCard,
    },
    props: {
        vendors: Array,
    },
    emits: ['view-menu'],
}
</script>