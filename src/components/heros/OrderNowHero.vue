<template>
    <div class="orderNowHero bg-orderNow">
        <div class="overlay bg-overlayGray h-40v md:h-50v justify-center items-center flex">
            <div class="lg:w-4/6 w-full m-auto">
                <h2 class="lg:text-4xl text-2xl md:p-12 md:pb-10 text-white font-bold">Order Now! </h2>
                <p class="lg:text-2xl text-xl max-w-screen-lg m-auto text-white">Choose a restaurant to place your order at {{locationName}}! <br><br> or</p>
                <button @click="$router.push('LocationPicker')"  class="py-1 px-4 bg-seafoam text-white font-bold border border-solid border-white mt-4">Change Location</button>
            </div>
        </div>
    </div>
</template>   

<script>
export default {
    props: {
        locationName: String,
    }
}
</script>