<template>
    <div class="w-5/6 m-auto py-6">
        <h4 class="text-darkBlueText text-xl font-bold mb-24">Your Flight CP2 to Tree Contribution</h4>
        <div class="flex justify-between items-center w-5/6 m-auto">
            <div class="mr-1 flex justify-center">
                <img class="w-2/3" src="../../assets/images/personIcon.png" alt="Person Icon">
            </div>
            <span class="text-8xl mr-6">=</span>
            <div class="flex flex-wrap w-1/2">
                <div class="w-1/4 mb-4">
                    <img class="w-2/3" src="../../assets/images/sproutIcon.png" alt="Sprout Icon">
                </div>
                <div class="w-1/4">
                    <img class="w-2/3" src="../../assets/images/sproutIcon.png" alt="Sprout Icon">
                </div>
                <div class="w-1/4">
                    <img class="w-2/3" src="../../assets/images/sproutIcon.png" alt="Sprout Icon">
                </div>
                <div class="w-1/4">
                    <img class="w-2/3" src="../../assets/images/sproutIcon.png" alt="Sprout Icon">
                </div>
                <div class="w-1/4">
                    <img class="w-2/3" src="../../assets/images/sproutIcon.png" alt="Sprout Icon">
                </div>
                <div class="w-1/4">
                    <img class="w-2/3" src="../../assets/images/sproutIcon.png" alt="Sprout Icon">
                </div>
            </div>
            <span class="text-8xl mr-6">=</span>
            <div class="py-14 px-16 border border-solid border-gray-400 border-opacity-40 rounded-full">
                <span class="text-4xl text-darkBlueText font-bold">8</span><br>
                <span class="text-2xl font-light text-gray-500">Trees</span>
            </div>
        </div>
        <div>
            <div class="mt-16 flex flex-wrap w-5/6 m-auto">
                <h4 class="text-left mb-3 w-full">Trees Pricing</h4>
                <div class="right lg:w-5/12 mr-10 bg-white flex flex-col w-full border border-solid border-gray-300 border-opacity-40 shadow-md">
                    <div class="px-4 py-2 text-sm text-darkBlueText font-bold flex justify-between border-b border-solid border-gray-400 border-opacity-30">
                        <span>Flight Hours</span>
                        <span>Trees Planted</span>
                        <span>Total Cost</span>
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between mb-4">
                            <span class="w-1/3 text-left">1</span>
                            <span class="w-1/3 text-center">0</span>
                            <span class="w-1/3 text-right">$15.0</span> 
                        </div>
                        <div class="flex justify-between mb-4">
                            <span class="w-1/3 text-left">2</span>
                            <span class="w-1/3 text-center">0</span>
                            <span class="w-1/3 text-right">$30.0</span> 
                        </div>
                        <div class="flex justify-between mb-4">
                            <span class="w-1/3 text-left">3</span>
                            <span class="w-1/3 text-center">0</span>
                            <span class="w-1/3 text-right">$45.0</span> 
                        </div>
                        <div class="flex justify-between mb-4">
                            <span class="w-1/3 text-left">4</span>
                            <span class="w-1/3 text-center">1</span>
                            <span class="w-1/3 text-right">$60.0</span> 
                        </div>
                        <div class="flex justify-between mb-4">
                            <span class="w-1/3 text-left">5</span>
                            <span class="w-1/3 text-center">1</span>
                            <span class="w-1/3 text-right">$75.0</span> 
                        </div>
                        <div class="flex justify-between mb-4">
                            <span class="w-1/3 text-left lg:whitespace-nowrap">Full Capacity - Heavy</span>
                            <span class="w-1/3 text-center">100</span>
                            <span class="w-1/3 text-right">$5000.0</span> 
                        </div>
                        <div class="flex justify-between">
                            <span class="w-1/3 text-left lg:whitespace-nowrap">Full Capacity - Regional</span>
                            <span class="w-1/3 text-center">30</span>
                            <span class="w-1/3 text-right">$1500.0</span> 
                        </div>
                    </div>
                </div>
                <div class="flex flex-col">
                    <button @click="$router.push('DonateCheckout')" class="lg:ml-6 px-10 py-2 font-bold text-white bg-seafoam mb-4">Continue</button>
                    <a href="https://applications.icao.int/icec" class="lg:ml-6 border-2 border-solid border-darkBlueText px-10 py-1 font-bold text-darkBlueText">Calculate My Flight CO2 Emission</a>
                </div>
            </div>
        </div>
    </div>
</template>