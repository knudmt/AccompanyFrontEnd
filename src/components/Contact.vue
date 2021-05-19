<template>
    <div class="px-8 py-12">
        <div class="contact-wrapper max-w-1320px m-auto lg:w-5/6">
            <div class="bg-overlayGray  flex-col md:flex lg:flex-row items-center py-12 px-8 lg:px-12 lg:py-16 w-full  bg-gray-600 m-auto">
              <div class="contact-text-wrapper flex-col text-center lg:text-left lg:pr-40">
                <h3 class="text-2xl md:text-4xl lg:pb-3 font-bold text-white">Let's Get In Touch!</h3>
                <p class="text-sm md:text-3xl pt-4 text-white leading-loose">Are there Airports or Hotels you want to see partner with us or are you looking to become a partner?</p>
              </div>
              <Button msg="CONTACT US!" class="w-2/6 whitespace-nowrap bg-seafoam text-white mt-4 rounded-md border-none lg:px-10 lg:py-3 lg:text-xl lg:mt-0" />
            </div>
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