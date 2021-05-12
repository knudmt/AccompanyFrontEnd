<template>
    <header>
        <div class="wrapper h-20 w-full flex items-center justify-end">
            <div :class="isOpen ? 'block' : 'hidden'" class="wrapper absolute top-24 right-20 md:static md:flex">
                <nav class="float-right bg-gray-300 md:bg-transparent">
                    <ul class="md:flex">
                        <li class="lg:mx-8 md:mx-4 mx-2 font-bold whitespace-nowrap text-xl lg:text-2xl" >Home</li>
                        <li class="lg:mx-8 md:mx-4 mx-2 whitespace-nowrap text-xl lg:text-2xl">Why Accompany?</li>
                        <li class="lg:mx-8 md:mx-4 mx-2 whitespace-nowrap text-xl lg:text-2xl">Careers</li>
                        <li class="lg:mx-8 md:mx-4 mx-2 whitespace-nowrap text-xl lg:text-2xl">Contact Us</li>
                    </ul>
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

