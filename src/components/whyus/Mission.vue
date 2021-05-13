<template>
    <div class="mission p-2 bg-blue-100">
        <div class="wrapper justify-center flex flex-wrap px-6">
            <img src="" alt="" class="mx-12 my-4 bg-seafoam max-w-sm w-full border border-darkBlueText">
            <div class="text-wrapper">
                <h5 class="text-15px uppercase text-grayText">Our Mission</h5>
                <h5 class="font-bold mb-2">Aviation Focus Technology Services</h5>
                <p class="text-13px px-4">Accompany is a technology company founded on the mission of providing niche 
technology services for aviation community, Accompany will serve flight crews, 
travelers, airlines and aviation communities by offering convenience and freedom. 
Accompany aviation focus technology services has growth plans to expand in major 
airports throughout the world.</p>
            </div>
            <Button msg="Get Paid to Deliver!" class="bg-seafoam my-4 text-white" />
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