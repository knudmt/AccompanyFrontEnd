<template>
    <div class="bg-bgBlue">
        <div class="w-5/6 m-auto flex flex-col-reverse lg:flex-row-reverse justify-between lg:text-left py-16">
            <div class="left lg:w-1/2">
                <h4 class="text-xl text-darkBlueText font-bold mb-4 mt-6 lg:mt-0">Methodology</h4>
                <p class="mb-6">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>
               
                <p class="mb-3">Step 1: Estimation of Aircraft Fuel Burn</p>
                <p class="mb-3">Step 2: Calculation of the passengers fuel burn based on passenger/freight</p>
                <p class="mb-3">Step 3: Calculation of seats occupied</p>
                <p class="mb-3">Step 4: CO2 Emissions Per Passenger</p>
              
                <a href="https://applications.icao.int/icec" class="py-2 px-6 inline-block mt-4 border-2 text-lg font-bold border-solid bg-white border-darkBlueText text-darkBlueText">Calculate My Flight CO2 Emission</a>
            </div>
            <div class="right lg:w-5/12 mr-10 bg-white flex flex-col w-full shadow-md">
                <div class="px-4 py-2 text-sm text-darkBlueText font-bold flex justify-between border-b border-solid border-gray-400 border-opacity-30">
                    <span>Flight Hours</span>
                    <span>Trees Planted</span>
                    <span>Total Cost</span>
                </div>
                <div class="p-6">
                    <div class="flex justify-between mb-4">
                        <span class="w-1/3 text-left">1</span>
                        <span class="w-1/3 text-center">03</span>
                        <span class="w-1/3 text-right">$15.0</span> 
                    </div>
                    <div class="flex justify-between mb-4">
                        <span class="w-1/3 text-left">2</span>
                        <span class="w-1/3 text-center">06</span>
                        <span class="w-1/3 text-right">$30.0</span> 
                    </div>
                    <div class="flex justify-between mb-4">
                        <span class="w-1/3 text-left">3</span>
                        <span class="w-1/3 text-center">09</span>
                        <span class="w-1/3 text-right">$45.0</span> 
                    </div>
                    <div class="flex justify-between mb-4">
                        <span class="w-1/3 text-left">4</span>
                        <span class="w-1/3 text-center">12</span>
                        <span class="w-1/3 text-right">$60.0</span> 
                    </div>
                    <div class="flex justify-between mb-4">
                        <span class="w-1/3 text-left">5</span>
                        <span class="w-1/3 text-center">15</span>
                        <span class="w-1/3 text-right">$75.0</span> 
                    </div>
                    <div class="flex justify-between mb-4">
                        <span class="w-1/3 text-left lg:whitespace-nowrap">Full Capacity - Heavy</span>
                        <span class="w-1/3 text-center">1000</span>
                        <span class="w-1/3 text-right">$5000.0</span> 
                    </div>
                    <div class="flex justify-between">
                        <span class="w-1/3 text-left lg:whitespace-nowrap">Full Capacity - Regional</span>
                        <span class="w-1/3 text-center">300</span>
                        <span class="w-1/3 text-right">$1500.0</span> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>