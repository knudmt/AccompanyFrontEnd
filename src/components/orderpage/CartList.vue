<template>
    <div>
        <h2>Cart</h2>
        <div class="flex flex-wrap">
            <div v-for="product in cart" :key="product.id" class="w-1/3">
                <CartCard :product="product" class="locationOption w-full flex py-2 px-6 lg:py-2 rounded-sm rounded-b-none text-gray-600 lg:text-lg md:text-base text-13px text-center cursor-pointer" />
            </div>
        </div>
    </div>
</template>

<script>
import CartCard from './CartCard';

export default {
    name: 'CartList',
    components: {
        CartCard,
    },
    props: {
        cart: Array,
    },
}
</script>