<template>
  <div class="bg-bgBlue m-auto">
    <div class="how-it-works pb-4 lg:py-12 m-auto lg:w-9/12 lg:px-8">
      <div class="wrapper flex justify-center flex-col lg:flex-row-reverse">
        <div
          class="flex items-center my-4 lg:mt-8 max-h-80 w-5/6 lg:w-auto m-auto"
        >
          <div @click="next" class="arrow-left lg:mr-8 mt-4 lg:mt-12"></div>
          <Carousel>
            <CarouselSlide :visibleSlide="visibleSlide" :index="0">
              <img
                src="../../assets/images/one_tree_planted_logo@2x.png"
                class="about-img bg-white my-4 lg:my-0 rounded-xl lg:rounded-3xl lg:mt-12 m-auto w-9/12 lg:w-auto max-w-350px"
              />
            </CarouselSlide>
            <CarouselSlide :visibleSlide="visibleSlide" :index="1">
              <img
                src="../../assets/images/one_tree_planted_logo3@2x.png"
                class="about-img bg-white my-4 rounded lg:my-0 lg:mt-12 m-auto w-9/12 lg:w-auto max-w-350px"
              />
            </CarouselSlide>
            <CarouselSlide :visibleSlide="visibleSlide" :index="2">
              <img
                src="../../assets/images/one_tree_planted_logo2@2x.png"
                class="about-img bg-white rounded my-4 lg:my-0 lg:mt-12 m-auto w-9/12 lg:w-auto max-w-350px"
              />
            </CarouselSlide>
          </Carousel>
          <div @click="prev" class="arrow-right lg:ml-8 mt-4 lg:mt-12"></div>
        </div>

        <div
          class="text-wrapper text-15px lg:text-base w-11/12 px-4 lg:px-0 m-auto md:mt-2 md:mr-48 lg:w-3/6 flex flex-col"
        >
          <h5
            class="font-bold text-darkBlueText text-xl lg:text-2xl lg:text-left mb-4"
          >
            Donate A Tree Program
          </h5>
          <div>
            <p class="lg:text-left mb-6">
              Accompany data has a program with forests across the world in
              North America, Latin America, Asia , Africa , Europe, and the
              Pacific to plant trees in conjunction with your c02 gas waste
              during your flight. Accompany data will plant trees to replace co2
              gas from your flight activity
            </p>
            <p class="lg:text-left">
              Passengers enter your flight data below and have your instant co2
              gases percentage below per your flight.
            </p>
          </div>
          <div class="w-full">
            <button
              class="bg-seafoam text-15px lg:text-base py-2 px-4 lg:py-3 lg:px-10 text-white font-bold lg:float-left rounded-md my-3 lg:mt-6 lg:mb-7"
            >
              Calculate Your Data!
            </button>
          </div>

          <div class="lg:text-left">
            <p class="mb-4 lg:mb-1">
              At Accompany data we are here to help save our planet, don’t feel
              bad about placing co2 gas per your flight, Accompany data program
              to plant trees via your actual co2 gas waste per flight is below.
            </p>
            <p class="mb-4 lg:mb-1 text-darkBlueText">
              Check out the TREES below and prices
            </p>
            <p class="text-darkBlueText mb-3">
              Prices below are based off 1 passenger - except Full Capacity
              flights - ( FULL FLIGHT)
            </p>
          </div>

          <div
            class="py-4 shadow-md border border-gray-700 border-opacity-30 rounded-md mb-8 bg-white"
          >
            <img
              src="../../assets/images/whyus-table-img@2x.png"
              alt=""
              class="about-img bg-white my-4 lg:my-0 m-auto w-fullh-full"
            />
          </div>
          <div class="flex">
            <span class="check-mark"></span>
            <p class="text-left mb-4 text-sm lg:text-lg">
              Number of trees planted estimates are based off one way
              calculations*
            </p>
          </div>
          <div class="flex">
            <span class="check-mark"></span>
            <p class="text-left mb-4 text-sm lg:text-lg">
              Full Capacity Heavy flight trees planted calculations are based
              two hour flight time*
            </p>
          </div>
          <div class="flex">
            <span class="check-mark"></span>
            <p class="text-left mb-4 text-sm lg:text-lg">
              Full Capacity Regional flight trees planted calculations based off
              two hour flight time*
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>   

<script>
import Carousel from "./Carousel";
import CarouselSlide from "./CarouselSlide";

export default {
  data() {
    return {
      slides: [
        "../../assets/images/one_tree_planted_logo@2x.png",
        "../../assets/images/one_tree_planted_logo2@2x.png",
        "../../assets/images/one_tree_planted_logo3@2x.png",
      ],
      visibleSlide: 0,
    };
  },
  
  methods: {
    next() {
      if (this.visibleSlide >= this.slides.length - 1) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide++;
      }
    },
    prev() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slides.length - 1;
      } else {
        this.visibleSlide--;
      }
    },
  },
  components: {
    Carousel,
    CarouselSlide,
  },
};
</script>
