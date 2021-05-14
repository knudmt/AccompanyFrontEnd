<template>
    <div class="hero-wrapper bg-sectionGrey px-10 md:px-28 pt-20 lg:pt-56 pb-16 lg:pb-40">
        <div class="lg:w-5/6 w-full m-auto">
            <h2 class="lg:text-5xl md:text-3xl text-lg md:p-12 md:pb-16 font-bold">Dynamic Title Text</h2>
            <p class="lg:text-4xl max-w-screen-lg m-auto text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ipsam, ducimus rem eveniet maiores libero.</p>
            <Button msg="Choose Location" class="bg-seafoam text-white border-white mt-12 lg:mt-16.5" />
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
