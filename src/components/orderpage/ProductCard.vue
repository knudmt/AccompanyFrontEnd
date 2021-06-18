<template>
    <div class="flex flex-col flex-wrap justify-center items-center w-1/3 px-12">
        <img :src="require(`../../assets/images/` + backgroundImg)" :alt="product.id"> 
        <h5 class="font-bold text-lg mt-2">{{ product.title }}</h5>
        <p class="text-15px text-gray-500 ">{{ product.short }}</p>
        <p class="text-15px text-gray-500 px-8">{{ product.long }}</p>
        <p class="text-base font-bold">${{ formatPrice(product.price) }}</p>
        <Button @click.native="$emit('add-cart', product)"  msg="Add to Cart" class="bg-seafoam rounded-md lg:text-sm lg:px-8 text-white mt-1"></Button>
    </div>
</template>

<script>
import Button from '../Button.vue';

export default {
    name: 'ProductCard',
    components: {
        Button
    },
    props: {
        product: Object
    },
    data() {
        return {
            backgroundImg: this.product.image,
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