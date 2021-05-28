<template>
    <div class="container max-w-full">
        <Hero />
        <ProductList :vendors="vendors" />
    </div>
</template>

<script>
import Hero from '../components/heros/OrderResturantHero';
import ProductList from '../components/orderpage/ProductList';
export default {
  name: 'LocationPickerView',
  components: { 
    Hero,
    ProductList,
  },
  data() {
        return {
            vendors: [],
        }
    }, 
    methods: {
        async fetchVendors(){
            const res = await fetch('http://localhost:5000/vendors')
            const data = await res.json()
            return data
        }
    },
    async created() {
        this.vendors = await this.fetchVendors()
    },
}

</script>