<template>
    <div class="container max-w-full">
        <VendorList @view-menu="fetchMenu" v-if="show" :vendors="vendors" />
        <div v-else>
            
            <ProductList :menu="menu"/>
          


        </div>
        
    </div>
</template>


<script>

import VendorList from '../components/orderpage/VendorList';
import ProductList from '../components/orderpage/ProductList';

export default {
  name: 'LocationPickerView',
  components: { 
    VendorList,
    ProductList,
  },
  data() {
        return {
            vendors: [],
            menu: [],
            show: true
        }
    }, 
    methods: {
        async fetchVendors(){
            const res = await fetch('http://localhost:5000/vendors')
            const data = await res.json()
            return data
        },
        async fetchMenu(id){
            const res = await fetch(`http://localhost:5000/${id}`)
            const data = await res.json()
            this.menu = data
            this.show = !this.show
            return data
        }
    },
    async created() {
        this.vendors = await this.fetchVendors()
    },
}

</script>