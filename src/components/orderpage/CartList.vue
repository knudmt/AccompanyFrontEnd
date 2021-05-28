<template>
    <div class="w-full">
        <div class="cart-heading-wrapper flex justify-between text-darkBlueText lg:text-xl font-bold">
            <h5 class="w-1/3 text-left">Item Name</h5>
            <h5 class="w-1/3 text-center ml-2 pl-16">Quantity</h5>
            <h5 class="w-1/3 text-right">Item Price</h5>
        </div>
        <div class="flex flex-wrap flex-col">
            <div v-for="product in cart" :key="product.id" class="border-t border-gray-400">
                <CartCard :product="product" class="locationOption w-full flex py-2 lg:py-2 rounded-sm rounded-b-none text-gray-600 lg:text-lg md:text-base text-13px text-center cursor-pointer" />
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