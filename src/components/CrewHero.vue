<template>
    <div>
        <div class="overlay bg-overlayGray justify-center items-center flex">
            <div class="lg:w-5/6 py-40 w-full m-auto">
                <h2 class="lg:text-4xl text-2xl md:p-12 md:pb-16 text-white font-bold">It doesn’t look like you’re there yet.</h2>
                <p class="lg:text-2xl text-xl px-12 md:px-0 max-w-screen-md m-auto text-white">Airport Name and Hotel Name are nearby, where would you like your food delivered to?</p>
                <Button @click.native="$router.push('LocationPicker')" msg="Choose Location" class="bg-seafoam text-white border-white mt-12 lg:mt-16 lg:px-6 lg:py-2 lg:text-xl" />
            </div>
        </div>
    </div>
    
</template>

<script>
import Button from './Button';
export default {
    name: 'CrewHero',
    components: {
        Button,
    }
}
</script>
