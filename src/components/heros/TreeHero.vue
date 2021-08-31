<template>
    <div class="contactHero bg-treeBg">
        <div class="overlay bg-overlayGray h-40v md:h-50v justify-center items-center flex">
            <div class="lg:w-4/6 w-full m-auto">
                <h2 class="lg:text-3xl text-2xl md:pb-6 text-white font-bold">{{title}}</h2>
                <p class="text-xl max- w-screen-lg m-auto text-white">{{text}}</p>
                <button @click="$router.push('DonateCalculate')" v-if="btn" class="py-2 px-10 border-white border-solid border text-white font-bold bg-seafoam mt-6">DONATE TODAY</button>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    props: {
        btn: Boolean,
        title: String,
        text: String
    }
}
</script>