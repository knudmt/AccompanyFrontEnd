<template>
    <div class="mission pt-6 pb-4 bg-blue-100  lg:py-16 m-auto">
        <div class="wrapper  lg:w-8/12 m-auto justify-center flex flex-col lg:flex-row-reverse px-6">
            <img src="../../assets/images/nashville_airport_image.png" alt="Nashville Airport" class="about-img my-3 m-auto block w-5/6 lg:w-auto h-auto">
            <div class="text-wrapper relative md:mt-2 md:mr-20 lg:mb-16">
                <h5 class="text-15px lg:text-23px lg:mb-2 uppercase md:text-left">Our Mission</h5>
                <h5 class="font-bold lg:text-3xl text-lg lg:mb-7 md:text-left mb-2 text-darkBlueText">Aviation Focus Technology Services</h5>
                <p class="text-13px lg:text-xl md:text-left">Accompany is a technology company founded on the mission of providing niche 
technology services for aviation community, Accompany will serve flight crews, 
travelers, airlines and aviation communities by offering convenience and freedom. 
Accompany aviation focus technology services has growth plans to expand in major 
airports throughout the world.</p>
            <Button msg="Get Paid to Deliver!" class="bg-seafoam my-4 border-none text-white lg:absolute left-0" />
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