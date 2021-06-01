<template>
    <div class="w-full">
        <div class="cart-heading-wrapper flex justify-between text-darkBlueText lg:text-xl font-bold">
            <h5 class="w-1/3 text-left">Item Name</h5>
            <h5 class="w-1/3 text-center ml-2 pl-16">Quantity</h5>
            <h5 class="w-1/3 text-right">Item Price</h5>
        </div>
        <div class="grid border-b border-gray-400">
            <div v-for="product in cart" :key="product.id" class="py-4 border-t border-gray-400">
                <CartCard :product="product" class="locationOption w-full flex py-2 lg:py-2 rounded-sm rounded-b-none text-gray-600 lg:text-lg md:text-base text-13px text-center cursor-pointer" />
            </div>
        </div>

        <div class="flex flex-col float-right">
            <span>Tax: {{taxes}} </span>
            <span>Fees: {{ fees }} </span>
            <span>Total: {{grandTotal}}</span>
        </div>
        <div class="w-full flex justify-between">
            <div class="flex flex-col">
                <button>Back to Menu</button>
                <a href="#">Browse Restaurants </a>
            </div>
            <button @click="$emit('show-checkout')">Proceed To Checkout</button>
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
    data() {
        return {
            taxes: 0,
            fees: 0,
            grandTotal: 0,
        }
    }
}
</script>