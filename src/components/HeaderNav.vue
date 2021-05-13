<template>
    <header>
        <div class="wrapper h-50px w-full flex items-center justify-end">
            <div :class="isOpen ? 'block' : 'hidden'" class="wrapper absolute top-24 right-20 md:static md:flex">
                <nav id="nav" class="float-right bg-gray-300 md:bg-transparent">
                    <div class="md:flex">
                        <router-link to="/" class="lg:mx-8 md:mx-4 mx-2 font-bold whitespace-nowrap text-xl lg:text-2xl" >Home</router-link>
                        <router-link to="/WhyUs" class="lg:mx-8 md:mx-4 mx-2 whitespace-nowrap text-xl lg:text-2xl">Why Accompany?</router-link>
                        <span class="lg:mx-8 md:mx-4 mx-2 whitespace-nowrap text-xl lg:text-2xl">Careers</span>
                        <router-link to="/ContactUs" class="lg:mx-8 md:mx-4 mx-2 whitespace-nowrap text-xl lg:text-2xl">Contact Us</router-link>
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

