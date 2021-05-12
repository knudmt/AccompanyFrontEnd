<template>
    <div class="data-serv-wrapper p-12 mb-8">
        <div class="m-auto w-5/6">
            <div class="data-text-wrapper">
                <p class="lg:text-big text-4xl font-bold text">Accompany Data Services</p>
                <p class="lg:text-4xl text-2xl mt-8 mb-12">Useful Information to Protect Passengers!</p>
            </div>
            <div class="data-card-wrapper w-full flex-col md:flex md:flex-row justify-between items-center m-auto min-h-64">
                <div class="data-card w-full lg:w-2/6 flex-col justify-center border-solid border-sectionGrey border-2 py-8 px-4 mb-4 md:mb-0">
                    <div class="img-replace w-3/6 m-auto mb-4"></div>
                    <p class="text-2xl">Save money by reporting your height & weight to airlines quicker!</p>
                </div>
                <div class="data-card w-full lg:w-2/6 flex-col md:mx-16 justify-center border-solid border-sectionGrey border-2 py-8 px-4 mb-4 md:mb-0">
                    <div class="img-replace w-3/6 m-auto mb-4"></div>
                    <p class="text-2xl">Gather information directly from other passengers on possible COVID-19 symptoms!</p>
                </div>
                <div class="data-card w-full lg:w-2/6 flex-col justify-center border-solid border-sectionGrey border-2 py-8 px-4 mb-4 md:mb-0">
                    <div class="img-replace w-3/6 m-auto mb-4"></div>
                    <p class="text-2xl">We gather your data solely with passenger safety in mind!</p>
                </div>
            </div>
            <Button msg="Submit Your Data!" class="mt-12"/>
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
