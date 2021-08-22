<template>
    <div class="w-full">
        <div class="cart-heading-wrapper flex justify-between text-darkBlueText lg:text-xl font-bold">
            <h5 class="w-1/3 text-left">Item Name</h5>
            <h5 class="w-1/3 text-center ml-2 pl-16">Quantity</h5>
            <h5 class="w-1/3 text-right">Item Price</h5>
        </div>
        <div class="grid border-b border-gray-400">
            <div v-for="product in cart" :key="product.id" class="py-4 border-t border-gray-400">
                <CartCard :product="product" :totalPrice="totalPrice" @incremented="calculateTotal(product)" @decremented="decrementTotal(product)" class="locationOption w-full flex py-2 lg:py-2 rounded-sm rounded-b-none text-gray-600 lg:text-lg md:text-base text-13px text-center cursor-pointer" />
            </div>
        </div>

        <div class="flex flex-col justify-start float-right">
            <div class="mb-4 px-28 mt-8 flex justify-between"><span class="mr-24 text-xl text-darkBlueText font-bold">Tax:</span><span class="text-2xl text-darkBlueText font-bold">${{taxes}}</span></div>
            <div class="mb-4 px-28 flex justify-between"><span class="mr-24 text-xl text-darkBlueText font-bold">Fees:</span><span class="text-2xl text-darkBlueText font-bold">${{ fees }} </span></div>
            <div class="border-t border-gray-500 mb-12 px-28 pt-4 flex justify-between"><span class="mr-24 text-2xl text-darkBlueText font-bold">Total:</span><span class="text-2xl text-darkBlueText font-bold">${{ formatPrice(totalPrice) }}</span></div>
        </div>
        <div class="w-full flex justify-between">
            <div class="flex flex-col">
                <button class="py-2 px-16 mb-2 bg-white border-2 border-darkBlueText text-darkBlueText text-lg font-bold">Back to Menu</button>
                <a class="underline" href="#">Browse Restaurants </a>
            </div>
            <span>
                <button class="px-6 py-3 text-white font-bold bg-seafoam rounded-sm text-lg" @click="$emit('show-checkout')">Proceed To Checkout</button>
            </span>
            
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
        totalPrice: Number,
        product: Object,
    },
    data() {
        return {
            taxes: 0,
            fees: 0,
            grandTotal: 0,
        }
    },
    methods: {
        formatPrice(value) {
        let val = (value/1).toFixed(2)
        return val.toLocaleString("en", {useGrouping: false, minimumFractionDigits: 2,})
        },

        calculateTotal(item) {
            this.totalPrice += item.price
        },

        decrementTotal(item) {
            this.totalPrice -= item.price
        },
        printCart(){
            console.log("CART: " + this.cart);
        }
    },
}
</script>