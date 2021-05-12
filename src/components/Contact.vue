<template>
    <div class="px-8 py-10">
        <div class="contact-wrapper flex-col md:flex lg:flex-row items-center py-12 px-8 w-full lg:w-4/6 bg-gray-600 m-auto">
            <div class="contact-text-wrapper flex-col text-center lg:text-left lg:pr-40">
                <h3 class="text-2xl font-bold text-white">Let's Get In Touch!</h3>
                <p class=" text-sm pt-4 text-white leading-loose">Are there Airports or Hotels you want to see partner with us or are you looking to become a partner?</p>
            </div>
            <Button msg="CONTACT US!" class="w-2/6 whitespace-nowrap bg-seafoam text-white mt-4 rounded-md border-none lg:mt-0" />
        </div>
    </div>
</template>


<script>
import Button from './Button';

export default {
  name: 'Contact',
  components: {
    Button,
  }
}
</script>