<template>
    <div class="hero-wrapper bg-sectionGrey px-10 md:px-28 pt-20 pb-16">
        <div class="lg:w-3/6 w-full m-auto">
            <h2 class="lg:text-5xl md:text-3xl text-lg md:p-12 mb-6 font-bold">It doesn’t look like you’re there yet.</h2>
            <p class="lg:text-4xl text-sm">Airport Name and Hotel Name are nearby, where would you like your food delivered to?</p>
            <Button msg="Choose Location" class="bg-seafoam text-white border-white mt-8" />
        </div>
    </div>
</template>


<script>
import Button from './Button';

export default {
  name: 'Hero',
  components: {
    Button,
  }
}
</script>
