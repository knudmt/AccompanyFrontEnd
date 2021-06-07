<template>
    <div class="bg-footerBlue p-7">
        <ul class="flex w-full lg:w-3/6 m-auto max-w-750px justify-around flex-wrap">
            <div @click="orderNowPush" class="cursor-pointer w-3/12 text-15px md:text-xl font-bold mb-8">Order Now</div>
            <router-link to="/" class="w-3/12 text-15px md:text-xl  font-bold">Home</router-link>
            <router-link to="/WhyUs" class="w-3/12 text-15px md:text-xl font-bold">Why Us?</router-link>
            <router-link to="/ContactUs" class="w-3/12 text-15px md:text-xl font-bold">Contact Us</router-link>
            <router-link to="/Careers" class="w-3/6 text-15px md:text-xl font-bold">Careers</router-link>
            <router-link to="/PrivacyPolicy" class="w-3/6 text-15px md:text-xl font-bold">Privacy Policy</router-link>
        </ul>
        <div class="flex-col md:flex md:flex-row-reverse justify-between">
            
            <div class="flex flex-wrap justify-center lg:justify-around items-center mt-8">
                <p class="w-full hidden lg:block text-xl font-bold mb-4">Stay Connected</p>
                <img src="../assets/images/icon-twitter.png" alt="twitter-icon" class="w-8 h-8 lg:w-10 lg:h-10 text-sm mr-6 lg:mr-0 lg:ml-1">
                <img src="../assets/images/icon-envelope.png" alt="email-icon" class="w-10 h-7 lg:w-10 lg:h-8 text-sm ml-6 lg:ml-0">
            </div>
            <p class="pt-16 text-13px md:text-lg">Copyright 2021 Accompany. All Rights Reserved.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    props: {
        selectedLocation: Boolean
    },
    methods: {
       orderNowPush() {
            if(this.selectedLocation) {
                this.$router.push('OrderResturantPicker')
            } else {
                this.$router.push('LocationPicker')
            }
        } 
    },
    watch: {
        '$route'() {
            this.isOpen = false
        }
    }
}
</script>