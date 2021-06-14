<template>
    <div class="flex flex-col flex-wrap justify-center items-center w-1/3">
        <div class="flex justify-between items-center w-full">
            <div class="flex w-1/3">
                <img class="w-32 h-32" :src="require(`../../assets/images/` + backgroundImg)" :alt="product.id">
                <div class="flex flex-col justify-center ml-4 text-left">
                    <h5 class="mb-4 text-xl text-darkBlueText font-bold">{{ product.title }}</h5>
                    <p class="text-15px text-gray-500 leading-5">{{ product.short }}</p>
                    <p class="text-15px text-gray-500 leading-5 whitespace-nowrap overflow-ellipsis overflow-hidden block w-3/4">{{ product.long }}</p>
                </div> 
            </div>
           
            <Quantity class="font-bold" :product="product" :totalPrice="totalPrice" @incremented="incremented()" @decremented="decremented()" />
            <p class="font-bold">${{ formatPrice(product.price) }}</p>
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
        product: Object,
        totalPrice: Number
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
        },
        incremented() {
            this.$emit('incremented')
        },
        decremented() {
            this.$emit('decremented')
        }
    }
}
</script>