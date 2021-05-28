<template>
    <div class="translateCenter left-1/2 m-auto w-1/2 max-w-5xl py-5 px-6 border flex justify-between bg-white fixed bottom-10 border-black rounded-md">
        <div class="font-bold flex items-center">
            <div class="bg-cartImage w-7 h-7 mr-2 font-bold bg-no-repeat bg-cover text-15px bg-right pr-5"></div>
            {{ itemCount }} Item(s)
        </div>
        <div class="flex items-center flex-grow ml-16">
            <div class="rounded-full bg-black h-3 w-3 mr-4"></div>
            <div class="flex items-center pt-px">
                <strong class="mr-2">Total:</strong> ${{ formatPrice(totalPrice) }}
            </div>
          
        </div>
        <div class="flex items-center">
            <div @click="$emit('view-cart')" class="bg-arrowRight font-bold bg-no-repeat bg-8px text-15px bg-right pr-5">View Cart</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CartWidget",
    props: {
        cart: Array,
        itemCount: Number,
        totalPrice: Number,
    },
    data() {
        return {
            total: 0,
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