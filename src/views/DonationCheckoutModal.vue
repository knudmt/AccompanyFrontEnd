<template>
    <div class="bg-gray-500 py-24">
        <div class="w-2/3 bg-white rounded-lg m-auto p-4">
            <span class="float-right text-xl">X</span>

            <div class="flex flex-col w-1/2 m-auto">
                <img src="../assets/images/donationSuccess.png" alt="Donation Successful">
                <h4 class="text-darkBlueText text-2xl font-bold mb-2">Donation Successful!</h4>
                <p class="text-sm text-gray-400 mb-4">
                    Your donation was successful and your tree planting request has been placed! Check your email for updates on your order! Thank you for your donation and effort towards our environment. 
                </p>
            </div>
            

            <button @click="$router.push('/')" class="px-10 py-2 bg-seafoam text-white text-xl font-bold rounded mb-4">Back to Home</button>
        </div>
    </div>
</template>