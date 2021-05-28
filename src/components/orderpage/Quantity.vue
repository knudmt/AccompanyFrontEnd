<template>
    <div class="quantity-toggle w-1/3 flex justify-start">
      <button @click="decrement()">&mdash;</button>
      <input class="w-10 h-10 border border-gray-400 rounded-md mx-4 text-center" type="text" :value="quantity" readonly>
      <button @click="increment()">&#xff0b;</button>
    </div>
</template>

<script>
export default {
    name: "Quantity",
    data () {
    return {
      quantity: 1
    }
  },
  methods: {
    increment () {
      this.quantity++
    },
    decrement () {
      if(this.quantity === 1) {
        alert('Negative quantity not allowed')
      } else {
        this.quantity--
      }
    }
  }
}
</script>