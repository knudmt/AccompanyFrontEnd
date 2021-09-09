<template>
    <div class="wrapper w-full">
        <div class="w-5/6 m-auto flex flex-col-reverse lg:flex-row justify-between lg:text-left py-16">
            <div class="left pt-10 lg:w-1/2">
                <h4 class="text-xl md:text-2xl text-darkBlueText font-bold mb-4 mt-6 lg:mt-0">Reduce Your Waste</h4>
                <p class="mb-6 text-left text-xl md:text-lg">
                    Planting trees remains one of the best ways to reduce global carbon emissions 
                    <br> <br>
                    The average mature tree is capable of sequestering 48 Ibs of carbon each year 
                    <br> <br>
                    As global deforestation continues, Accompany aviation focus reforestation projects are planting trees that will clean the air we breathe for years to come.
                </p>
                <button class="px-10 mt-2 py-3 font-bold text-xl text-white bg-seafoam rounded-lg">
                    <a href="https://applications.icao.int/icec" target="_blank">Calculate 1 Passenger CO2 Waste</a>
                </button>
            </div>
            <div class="right flex pb-12 relative flex-col items-center justify-center lg:w-1/3 lg:ml-24">
                <div class="w-full flex justify-center relative top-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="287.219" height="64.664" viewBox="0 0 287.219 64.664"><defs></defs><path class="a" d="M0,0S28-26,64-40s64-16,80-16a211.96,211.96,0,0,1,80,16c34,14,56,40,56,40" transform="translate(3.402 61)"/></svg>
                </div>
                <div class="flex items-center justify-between">
                    <div class="w-48 mr-36 h-48 flex flex-col items-center justify-center rounded-full m-auto bg-white shadow-md">
                        <div class="transform img w-14 h-14"></div>
                        <p class="font-black text-2xl text-seafoam">ATL</p>
                        <p class="italic font-thin">Atlanta Airport</p>
                    </div>
                    <div class="w-48 h-48 flex flex-col items-center justify-center rounded-full m-auto bg-white shadow-md">
                        <div class="transform rotate-90 img w-14 h-14"></div>
                        <p class="font-black text-2xl text-seafoam">LAX</p>
                        <p class="italic font-thin">Los Angeles Airport</p>
                    </div>
                </div>
                <div class="italic px-12 mt-4 md:text-lg">
                    <span class="font-bold text-seafoam">15 mature trees</span> need to be planted to cover the CO2 waste emission for a flight from ATL to LAX. 
                </div>
                
                
            </div>
        </div>
    </div>
</template>


<style scoped>
.img {
    background-image: url('../../assets/images/Icon material-local-airport@2x.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.wrapper {
    background-color: #FBFBFB;
}
.a{fill:#1f9889;}

.a{fill:none;stroke:#1f9889;stroke-width:10px;stroke-dasharray:5;}
</style>