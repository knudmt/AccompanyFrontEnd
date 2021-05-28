<template>
    <div class="flex flex-col justify-center items-center">
        <img :src="require(`../../assets/images/` + backgroundImg)" :alt="vendor.id">
        <h5>{{ vendor.title }}</h5>
        <div class="lg:flex">
            <div>
                <p>{{ vendor.fee }} delivery fee</p>
                <p>{{ vendor.deliveryTime }} mins Delivery</p>
            </div>
            <div class="">
                <Button @click.native="$emit('view-menu', vendor.id)"  msg="View Menu" class="bg-seafoam text-white"></Button>
            </div>
            
        </div>
        
    </div>
</template>

<script>
import Button from "../Button";

export default {
    name: 'VendorCard',
    components: {
        Button,
    },
    props: {
        vendor: Object
    },
    data() {
        return {
            backgroundImg: this.vendor.image
        }
    }
}
</script>