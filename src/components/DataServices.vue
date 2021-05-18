<template>
    <div class="data-serv-wrapper px-12 py-5">
        <div class="m-auto w-full xl:w-5/6 2xl:w-4/6 lg:mt-12">
            <div class="data-text-wrapper">
                <p class="lg:text-big text-xl font-bold text lg:mb-10">Accompany Data Services</p>
                <p class="lg:text-4xl text-sm mt-2 mb-4 lg:mb-10">Useful Information to Protect Passengers!</p>
            </div>
            <div class="data-card-wrapper flex-col md:flex md:flex-row justify-between px-6 md:px-0 items-center m-auto min-h-64">
                <div class="data-card w-full md:w-80 md:h-80 shadow-md rounded-md flex-col justify-center m-auto border-solid border-2 py-8 px-4 mb-4 md:mb-0">
                    <img src="../assets/images/icon-wallet.png" alt="" class="img-replace w-2/5 m-auto mb-4"> 
                    <p class="text-13px md:text-xl">Save money by reporting your height & weight to airlines quicker!</p>
                </div>
                <div class="data-card w-full md:w-80 md:h-80 shadow-md rounded-md m-auto flex-col md:mx-6 justify-center border-solid border-2 py-8 px-4 mb-4 md:mb-0">
                    <img src="../assets/images/icon-medicine.png" alt="" class="img-replace w-2/5 m-auto mb-4">
                    <p class="text-13px md:text-xl">Gather information directly from other passengers on possible COVID-19 symptoms!</p>
                </div>
                <div class="data-card w-full md:w-80 md:h-80 shadow-md rounded-md m-auto flex-col justify-center border-solid border-2 py-8 px-4 mb-4 md:mb-0">
                    <img src="../assets/images/icon-security.png" alt="" class="img-replace w-2/5 m-auto mb-4">
                    <p class="text-13px md:text-xl">We gather your data solely with passenger safety in mind!</p>
                </div>
            </div>
            <Button msg="Submit Your Data!" class="mt-1 md:mt-14 md:mb-10 lg:text-2xl lg:px-10 lg:py-4 border-2 lg:border-3 border-darkBlueText text-darkBlueText"/>
        </div>
    </div>
</template>


<script>
import Button from './Button';

export default {
  name: 'DataServices',
  components: {
    Button,
  }
}
</script>
