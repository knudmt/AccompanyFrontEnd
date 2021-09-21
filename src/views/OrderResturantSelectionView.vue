<template>
    <div class="container max-w-full">
        <VendorList @view-menu="fetchMenu" v-if="show" :locationName="locationName" :vendors="vendors" />
        <div v-else>
            
            <ProductList :locationName="locationName" :selectedVendor="selectedVendor" :menu="menu"/>
          


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
            show: true,
            selectedVendor: '',
        }
    }, 
    props: {
        locationName: String
    },
    methods: {
        async fetchVendors(){
            const res = await fetch('http://localhost:5000/vendors')
            const data = await res.json()
            return data
        },
        async fetchMenu(vendor){
            const res = await fetch(`http://localhost:5000/${vendor.id}`)
            const data = await res.json()
            this.menu = data
            this.show = !this.show
            this.selectedVendor = vendor.title
            return data
        }
    },
    async created() {
        this.vendors = await this.fetchVendors()
    },
}

</script>