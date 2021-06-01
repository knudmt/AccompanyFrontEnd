<template>
    <div class="flex flex-col lg:flex-row lg:items-center justify-center lg:mx-12 lg:px-12 lg:mb-16 border-b border-black border-opacity-25 pb-4">
        <div class="option-logo w-40 h-40 bg-contain bg-no-repeat bg-center m-auto" :class="hotelOption.image"></div>
        <div class="flex flex-col lg:text-left lg:flex-grow lg:ml-12">
              
            <h5 class="text-darkBlueText font-bold text-lg">{{ hotelOption.name }}</h5>
            <p class="mb-2">{{ hotelOption.address }}</p>
            <div class="star-rating flex justify-center lg:justify-start mb-3">
                <i class="far fa-star mr-1" aria-hidden="true"></i>
                <i class="far fa-star mr-1" aria-hidden="true"></i>
                <i class="far fa-star mr-1" aria-hidden="true"></i>
                <i class="far fa-star mr-1" aria-hidden="true"></i>
                <i class="far fa-star" aria-hidden="true"></i>
            </div>
            <div class="flex justify-center lg:justify-start">
                <img src="../../assets/images/FoodIcon@2x.png" class="w-6" alt="fork and spoon icon">
                <div class="counter">00</div>
            </div>                      
        </div>


        <Button @click.native="orderNowPush" msg="ORDER NOW!" class="bg-seafoam text-white border-white mt-2 lg:mt-16 lg:px-6 lg:py-2 lg:text-lg w-1/2 lg:w-48 rounded-md m-auto" />
    </div>
</template>

<script>
import Button from '../Button';

export default {
    name: 'HotelOptionCard',
    components: {
        Button,
    },
    props: {
        hotelOption: Object
    },
    methods: {
        orderNowPush() {
            this.$emit('location-selected', this.hotelOption);
            this.$router.push('OrderResturantPicker');
        }
    }
}
</script>