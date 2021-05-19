<template>
    <div>
        <div class="overlay bg-overlayGray px-10 md:px-28 pt-20 lg:py-52 pb-16">
            <div class="lg:w-3/6 w-full m-auto">
                <h2 class="lg:text-4xl md:text-2xl text-lg md:p-12 md:pb-16 text-white font-bold">It doesn’t look like you’re there yet.</h2>
                <p class="lg:text-3xl max-w-screen-lg m-auto text-white text-sm">Airport Name and Hotel Name are nearby, where would you like your food delivered to?</p>
                <Button msg="Choose Location" class="bg-seafoam text-white border-white mt-12 lg:mt-16 lg:px-6 lg:py-2 lg:text-xl" />
            </div>
        </div>
    </div>
    
</template>

<script>
import Button from './Button';
export default {
    name: 'PassengerHero',
    components: {
        Button,
    }
}
</script>
