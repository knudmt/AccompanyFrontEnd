<template>
    <div class="contactHero bg-treeBg">
        <div class="overlay bg-overlayGray px-10 md:px-28 pt-20 lg:pb-36 lg:pt-24 pb-12">
            <div class="lg:w-4/6 w-full m-auto">
                <h2 class="lg:text-3xl md:text-2xl text-lg md:p-12 md:pb-6 text-white font-bold">{{title}}</h2>
                <p class="lg:text-xl max- w-screen-lg m-auto text-white text-sm">{{text}}</p>
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