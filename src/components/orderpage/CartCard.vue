<template>
    <div class="flex flex-col flex-wrap justify-center items-center w-1/3">
        <div class="flex justify-between items-center w-full">
            <div class="flex w-1/3">
                <img class="w-40 h-40" :src="require(`../../assets/images/` + backgroundImg)" :alt="product.id">
                <div class="flex flex-col justify-center ml-4 text-left">
                    <h5 class="mb-4 text-xl text-darkBlueText font-bold">{{ product.title }}</h5>
                    <p class="text-15px text-gray-500">{{ product.short }}</p>
                    <p class="text-15px text-gray-500">{{ product.long }}</p>
                </div> 
            </div>
           
            <Quantity />
            <p>${{ formatPrice(product.price) }}</p>
        </div>
    </div>
</template>

<script>
import Quantity from './Quantity';

export default {
    name: 'ProductCard',
    components: {
        Quantity
    },
    props: {
        product: Object
    },
    data() {
        return {
            backgroundImg: this.product.image,
            cart: []
        }
    },
    methods: {
        formatPrice(value) {
        let val = (value/1).toFixed(2)
        return val.toLocaleString("en", {useGrouping: false, minimumFractionDigits: 2,})
        }
    }
}
</script>