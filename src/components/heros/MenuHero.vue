<template>
    <div class="bg-white">
        <div class="overlay bg-overlayGray min-h-320px relative">
            <div class="w-full lg:px-24 m-auto flex justify-between items-end absolute bottom-4">
                <h2 class="lg:text-2xl text-lg text-white font-bold">{{ selectedVendor }}</h2>
                <div class="flex justify-end items-center">
                    <h3 class="lg:text-xl max-w-screen-lg m-auto text-white underline text-base mr-4 pt-2">{{ locationName }}</h3>
                    <span>
                        <button @click="$router.push('LocationPicker')" class="text-base text-white border-white border rounded-sm font-bold bg-seafoam px-3 py-1">Change Location</button>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuHero',
    props: {
        locationName: String,
        selectedVendor: String
    }
}
</script>