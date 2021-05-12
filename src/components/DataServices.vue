<template>
    <div class="data-serv-wrapper px-12 py-5">
        <div class="m-auto w-full">
            <div class="data-text-wrapper">
                <p class="lg:text-big text-xl font-bold text">Accompany Data Services</p>
                <p class="lg:text-4xl text-sm mt-2 mb-4">Useful Information to Protect Passengers!</p>
            </div>
            <div class="data-card-wrapper w-full flex-col md:flex md:flex-row justify-between items-center m-auto min-h-64">
                <div class="data-card shadow-md rounded-md w-5/6 lg:w-2/6 flex-col justify-center m-auto border-solid border-2 py-8 px-4 mb-4 md:mb-0">
                    <div class="img-replace w-3/6 m-auto mb-4"></div>
                    <p class="text-13px">Save money by reporting your height & weight to airlines quicker!</p>
                </div>
                <div class="data-card shadow-md rounded-md w-5/6 m-auto lg:w-2/6 flex-col md:mx-16 justify-center border-solid border-2 py-8 px-4 mb-4 md:mb-0">
                    <div class="img-replace w-3/6 m-auto mb-4"></div>
                    <p class="text-13px">Gather information directly from other passengers on possible COVID-19 symptoms!</p>
                </div>
                <div class="data-card shadow-md rounded-md w-5/6 m-auto lg:w-2/6 flex-col justify-center border-solid border-2 py-8 px-4 mb-4 md:mb-0">
                    <div class="img-replace w-3/6 m-auto mb-4"></div>
                    <p class="text-13px">We gather your data solely with passenger safety in mind!</p>
                </div>
            </div>
            <Button msg="Submit Your Data!" class="mt-1 border-black"/>
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
