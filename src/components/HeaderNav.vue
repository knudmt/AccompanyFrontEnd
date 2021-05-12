<template>
    <header>
        <div class="wrapper h-20 w-full flex items-center justify-end">
            <div :class="isOpen ? 'block' : 'hidden'" class="wrapper absolute top-24 right-20 md:static md:flex">
                <nav id="nav" class="float-right bg-gray-300 md:bg-transparent">
                    <div class="md:flex">
                        <router-link to="/" class="lg:mx-8 md:mx-4 mx-2 font-bold whitespace-nowrap text-xl lg:text-2xl" >Home</router-link>
                        <router-link to="/about" class="lg:mx-8 md:mx-4 mx-2 whitespace-nowrap text-xl lg:text-2xl">Why Accompany?</router-link>
                        <span class="lg:mx-8 md:mx-4 mx-2 whitespace-nowrap text-xl lg:text-2xl">Careers</span>
                        <span class="lg:mx-8 md:mx-4 mx-2 whitespace-nowrap text-xl lg:text-2xl">Contact Us</span>
                    </div>
                </nav>
            <div class="smartSearch"></div>
            </div>
            <button class="w-12 h-12 flex md:hidden flex-wrap items-center float-right mr-4 my-2" @click="toggle">
                <span class="top block h-2 w-full bg-gray-400"></span>
                <span class="mid block h-2 w-full bg-gray-400"></span>
                <span class="btm block h-2 w-full bg-gray-400"></span>
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

