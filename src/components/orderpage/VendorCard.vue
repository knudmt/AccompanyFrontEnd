<template>
    <div class="flex flex-col justify-center items-center lg:items-start lg:px-20">
        <img :src="require(`../../assets/images/` + backgroundImg)" :alt="vendor.id">
        <h5 class="font-bold text-left mt-3">{{ vendor.title }}</h5>
        <div class="lg:flex justify-between items-center w-full">
            <div class="mt-2 flex-grow items-center lg:items-start flex flex-col">
                <p class="text-left leading-15px  text-13px text-gray-500">{{ vendor.fee }} delivery fee</p>
                <p class="text-left leading-15px text-13px text-gray-500">{{ vendor.deliveryTime }} mins Delivery</p>
            </div>
            <div class="my-4 lg:mb-0">
                <button @click="$emit('view-menu', vendor)" class="bg-seafoam lg:px-4 px-10 py-1 font-bold rounded text-15px text-white">View Menu</button>
            </div>
            
        </div>
        
    </div>
</template>

<script>

export default {
    name: 'VendorCard',
    components: {
    },
    props: {
        vendor: Object
    },
    data() {
        return {
            backgroundImg: this.vendor.image
        }
    }
}

</script>