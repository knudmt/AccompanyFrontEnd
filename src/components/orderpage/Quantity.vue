<template>
    <div class="quantity-toggle w-1/3 flex justify-start">
      <button @click="decrement()">&mdash;</button>
      <input class="w-10 h-10 border border-gray-400 rounded-md mx-4 text-center" type="text" :value="product.quantity" readonly>
      <button @click="increment()">&#xff0b;</button>
    </div>
</template>

<script>
export default {
  name: "Quantity",
  data() {
    return {
      newTotal: 0
    }
  },  
  props: {
    product: Object,
    totalPrice: Number 
  },
  methods: {
    increment () {
      this.product.quantity++
      this.newTotal = this.totalPrice + this.product.price
      this.$emit('incremented')
    },
    decrement () {
      if(this.product.quantity === 1) {
        alert('Negative quantity not allowed')
      } else {
        this.product.quantity--
        this.newTotal = this.totalPrice - this.product.price
        this.$emit('decremented')
      }
    }
  }
}
</script>