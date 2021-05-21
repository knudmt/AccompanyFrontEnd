<template>
    <div class="mission pt-7 pb-4 bg-bgBlue  lg:py-12 m-auto">
        <div class="wrapper lg:w-9/12 m-auto justify-center flex flex-col lg:flex-row-reverse px-9">
            <img src="../../assets/images/nashville_airport_image.png" alt="Nashville Airport" class="about-img w-10/12 m-auto block max-w-md h-auto">
            <div class="text-wrapper relative md:mt-4 md:mr-40 lg:mb-50px">
                <h5 class="text-15px lg:text-lg mt-3 font-light lg:mb-4 uppercase md:text-left">Our Mission</h5>
                <h5 class="font-bold lg:text-2xl text-lg lg:mb-7 md:text-left mb-2 text-darkBlueText whitespace-nowrap">Aviation Focus Technology Services</h5>
                <p class="text-13px lg:text-base md:text-left">Accompany is a technology company founded on the mission of providing niche 
                  technology services for aviation community, Accompany will serve flight crews, 
                  travelers, airlines and aviation communities by offering convenience and freedom. 
                  Accompany aviation focus technology services has growth plans to expand in major 
                  airports throughout the world.
                </p>
                <Button msg="Get Paid to Deliver!" class="bg-seafoam my-5 border-none text-white lg:text-base lg:px-5 font-bold lg:absolute left-0" />
            </div>
        </div>
    </div>
</template>

<script>
import Button from '../Button';

export default {
  name: 'Mission',
  components: {
    Button,
  }
}
</script>