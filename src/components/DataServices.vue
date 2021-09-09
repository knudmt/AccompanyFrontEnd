<template>
    <div class="data-serv-wrapper px-12 py-5">
        <div class="m-auto w-full xl:w-5/6 2xl:w-4/6 lg:mt-12">
           
            <div class="data-card-wrapper flex-col md:flex md:flex-row justify-between px-6 md:px-0 items-center m-auto min-h-64">
                <div class="data-card w-full md:w-80 md:h-80 shadow-md rounded-md flex-col justify-center m-auto border-solid border-2 py-8 px-4 mb-4 md:mb-0">
                    <img src="../assets/images/InfoIcon.png" alt="" class="img-replace w-2/5 m-auto mb-4"> 
                    <p v-show="selectedTab !== 'I’m a Flight Crew Member'" class="text-13px md:text-xl">Report your carry on information to help airlines save on fuel and CO2 gases</p>
                    <p v-show="selectedTab === 'I’m a Flight Crew Member'" class="text-13px md:text-xl">Flight Crew check out your flight weight and balance data</p>
                </div>
                <div class="data-card w-full md:w-80 md:h-80 shadow-md rounded-md m-auto flex-col md:mx-6 justify-center border-solid border-2 py-8 px-4 mb-4 md:mb-0">
                    <img src="../assets/images/icon-medicine.png" alt="" class="img-replace w-2/5 m-auto mb-4">
                    <p v-if="selectedTab !== 'I’m a Flight Crew Member'" class="text-13px md:text-xl">Donate trees to be planted for your flight CO2 waste</p>
                    <p v-if="selectedTab === 'I’m a Flight Crew Member'" class="text-13px md:text-xl">Flight Crew check out overall mood of passengers on your flight- click here</p>
                </div>
                <div class="data-card w-full md:w-80 md:h-80 shadow-md rounded-md m-auto flex-col justify-center border-solid border-2 py-8 px-4 mb-4 md:mb-0">
                    <img src="../assets/images/icon-security.png" alt="" class="img-replace w-2/5 m-auto mb-4">
                    <p class="text-13px md:text-xl">Order food delivery</p>
                </div>
            </div>
            <Button @click.native="$router.push('DataServices'); scrollToTop();" msg="Submit Your Data!" class="mt-1 md:mt-14 md:mb-10 lg:text-xl lg:px-8 lg:py-3 border-2 lg:border-3 border-darkBlueText text-darkBlueText"/>
        </div>
    </div>
</template>


<script>
import Button from './Button';

export default {
  name: 'DataServices',
  components: {
    Button,
  },
  props: {
      selectedTab: String
  },
  methods: {
      scrollToTop() {
          window.scrollTo(0,0);
      }
  }
}
</script>
