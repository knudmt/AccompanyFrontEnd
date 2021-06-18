<template>
    <div>
        <div class="w-5/6 m-auto flex flex-col-reverse lg:flex-row justify-between lg:text-left py-16">
            <div class="left lg:w-1/2">
                <h4 class="text-xl text-darkBlueText font-bold mb-4 mt-6 lg:mt-0">Overview</h4>
                <p class="mb-6">Accompany data has a program with forests across the world in North America, Latin America, Asia , Africa , Europe, and the Pacific to plant trees in conjunction with your c02 gas waste during your flight. Accompany data will plant trees to replace co2 gas from your flight activity</p>

                <div class="lg:w-full m-auto lg:whitespace-nowrap text-left">
                    <div class="flex items-center mb-6 lg:mb-2">
                        <img src="../../assets/images/check@2x.png" alt="check mark" class="w-6 mr-4">
                        <p class="pt-1">Number of trees planted estimates are based off one-way calculations*</p>
                    </div>
                    <div class="flex items-center mb-6 lg:mb-2">
                        <img src="../../assets/images/check@2x.png" alt="check mark" class="w-6 mr-4">
                        <p class="pt-1">Full Capacity Heavy flight trees planted calculations are based off two-hour flight time*</p>
                    </div>
                    <div class="flex items-center mb-6 lg:mb-2">
                        <img src="../../assets/images/check@2x.png" alt="check mark" class="w-6 mr-4">
                        <p class="pt-1">Full Capacity Regional flight trees planted calculations based off two-hour flight time*</p>
                    </div>
                </div>
                <button @click="$router.push('DonateCalculate')" class="bg-seafoam py-2 px-10 border border-solid border-white text-white font-bold rounded mt-4">Donate A Tree</button>
            </div>
            <div class="right lg:w-1/3 lg:ml-10 w-full">
                <div class="w-96 h-64 m-auto bg-gray-300"></div>
            </div>
        </div>
    </div>
</template>