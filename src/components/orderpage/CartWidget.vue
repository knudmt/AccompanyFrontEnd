<template>
    <div class="w1/2 m-auto max-w-lg border border-black rounded-md">
        <div>
            <img src="" alt="">
            {{ itemCount }} Item(s)
        </div>
        <div>
            Total: ${{ formatPrice(totalPrice) }}
        </div>
        <div>
            <div @click="$emit('view-cart')">View Cart</div>
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