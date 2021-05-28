<template>
    <div class="flex flex-col flex-wrap justify-center items-center w-1/3">
        <img :src="require(`../../assets/images/` + backgroundImg)" :alt="product.id">
        <h5>{{ product.title }}</h5>
        <p>{{ product.desc }}</p>
        <p>${{ formatPrice(product.price) }}</p>
    </div>
</template>

<script>
import Button from '../Button';

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