<template>
    <div class="hero-wrapper bg-sectionGrey p-28 pb-36">
        <div class="lg:w-3/6 md:5/6 m-auto">
            <h2 class="lg:text-5xl text-3xl p-12 font-bold">It doesn’t look like you’re there yet.</h2>
            <p class="lg:text-4xl text-2xl">Airport Name and Hotel Name are nearby, where would you like your food delivered to?</p>
            <Button msg="Choose Location" class="bg-white mt-16" />
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
