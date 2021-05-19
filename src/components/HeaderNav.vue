<template>
    <header>
        <div class="wrapper w-full flex items-center justify-between">
            <img src="../assets/images/AccompanyLogo@2x.png" alt="" class="lg:w-48 w-28 py-2 ml-6 lg:ml-8">
            <div :class="isOpen ? 'block' : 'hidden'" class="wrapper top-12 right-4 absolute md:static md:flex">
                <nav id="nav" class="float-right bg-gray-300 md:bg-transparent">
                    <div class="flex flex-col  md:flex-row border border-gray-400 relative border-opacity-60 md:border-none">
                        <div class="triangle-outline md:hidden"></div>
                        <div class="triangle-up md:hidden"></div>
                        <router-link to="/" class="lg:mx-8 md:mx-4 border-b md:border-none text-grayText2 bg-white whitespace-nowrap py-1 md:py-0 text-15px lg:text-xl" >Home</router-link>
                        <router-link to="/WhyUs" class="lg:mx-8 md:mx-4 border-b md:border-none text-grayText2 bg-white whitespace-nowrap py-1 md:py-0 text-15px lg:text-xl">Why Accompany?</router-link>
                        <router-link to="/Careers" class="lg:mx-8 md:mx-4 border-b md:border-none text-grayText2 bg-white whitespace-nowrap py-1 md:py-0 text-15px lg:text-xl">Careers</router-link>
                        <router-link to="/ContactUs" class="lg:mx-8 md:mx-4 border-b md:border-none text-grayText2 bg-white whitespace-nowrap text-15px py-1 md:py-0 lg:text-xl">Contact Us</router-link>
                        <div class="lg:mx-8 md:mx-4 border-b md:border-none text-black bg-white whitespace-nowrap text-15px md:hidden lg:text-xl px-24 py-1 md:py-0 font-light">ORDER NOW</div>
                    </div>
                </nav>
            <div class="smartSearch"></div>
            </div>
            <button class=" w-6 h-6 flex md:hidden flex-wrap items-center float-right mr-8 my-2" @click="toggle">
                <span class="top block h-3px w-full rounded-xl bg-darkBlueText"></span>
                <span class="mid block h-3px w-full rounded-xl bg-darkBlueText"></span>
                <span class="btm block h-3px w-full rounded-xl bg-darkBlueText"></span>
            </button>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderNav', 
    data() {
        return {
            isOpen: false
        };
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen
        }
    }
}
</script>

