<template>
    <div class="w-5/6 m-auto py-20">
        <h4 class="text-2xl font-bold text-left mb-6">Passenger Information</h4>
        <div>
            <form class="lg:flex flex-wrap m-auto">
                <div class="flex flex-wrap">
                    <div class="mb-8 lg:mb-4 text-left text-lg lg:text-xl lg:w-1/2 w-full lg:pr-12">
                        <label for="FirstName">First Name</label>
                        <input v-model="firstName" class="mt-2 h-8 lg:h-10 appearance-none border rounded border-black w-full py-3 px-3 text-gray-700 text-sm leading-tight" id="firstname" type="text" name="FirstName" required>
                    </div>
                    <div class="mb-7 lg:mb-4 text-left text-lg lg:text-xl lg:w-1/2 w-full lg:pl-12">
                        <label for="LastName">Last Name</label>
                        <input v-model="lastName" class="mt-2 h-8 lg:h-10 text-sm appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 mb-3 leading-tight" id="lastname" type="text" name="LastName" required>
                    </div>
                    <div class="mb-8 lg:mb-4 text-left text-lg lg:text-xl lg:w-1/2 w-full lg:pr-12">
                        <label for="PhoneNumber">Phone Number</label>
                        <input v-model="phone" class="mt-2 h-8 lg:h-10 lg:mt-1 appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 text-sm leading-tight" id="phonenumber" type="tel" name="PhoneNumber" required>
                    </div>
                    <div class="mb-8 lg:mb-4 text-left text-lg lg:text-xl lg:w-1/2 w-full lg:pl-12">
                        <label for="EmailAddress">Email Address</label>
                        <input v-model="email" class="mt-2 h-8 lg:h-10 lg:mt-1 appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 text-sm leading-tight" id="emailaddress" type="email" name="EmailAddress" required>
                    </div>
                </div>
               
                <div class="flex mt-24 lg:flex-row flex-col">
                    <div class="w-full lg:w-1/2">
                        <div class="mb-8 lg:mb-4 text-left text-lg lg:text-xl lg:w-full lg:pr-12">
                            <label for="Amount">Amount</label>
                            <input v-model="amount" class="mt-2 h-8 lg:h-10 lg:mt-1 appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 text-sm leading-tight" placeholder="$0.00" id="amountDonate" type="email" name="Amount" required>
                            <p class="italic text-gray-400 text-sm mt-2">Please reference the tree pricing above to determine the appropriate donation amount based on your flight’s information.</p>
                        </div>
                    </div>

                    <div class="w-full lg:w-1/2">
                        <div class="mb-8 lg:mb-4 inline-block text-left text-lg lg:text-xl w-full pl-2 lg:pl-12">
                            <label for="CardInfo">Your Card Information</label>
                            <input v-model="cardNum" id="cardInfo" name="CardInfo" type="number" class="mt-2 h-8 lg:h-10 lg:mt-1 text-sm appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 mb-3 leading-tight" required />
                        </div>
                        <div class="mb-8 lg:mb-4 inline-block text-left text-lg lg:text-xl w-full pl-2 lg:pl-12">
                            <label for="CardName">Full Name on Card</label>
                            <input v-model="fullNameOnCard" id="cardName" name="CardName" type="text" class="mt-2 h-8 lg:h-10 lg:mt-1 text-sm appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 mb-3 leading-tight" required />
                        </div>
                        <div class="mb-8 lg:mb-4 inline-block text-left text-lg lg:text-xl w-1/2 pl-2 lg:pl-12">
                            <label for="CVV">CVV</label>
                            <input v-model="cvv" id="cvv" name="CVV" type="number" maxlength="3" class="mt-2 h-8 lg:h-10 lg:mt-1 text-sm appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 mb-3 leading-tight" required />
                        </div>
                            <div class="mb-8 lg:mb-4 inline-block text-left text-lg lg:text-xl w-1/2 pl-2 lg:pl-12">
                                <label for="ExpDate">Exp. Date</label>
                                <input v-model="expDate" type="number" id="expDate" name="ExpDate" maxlength="4" class="mt-2 h-8 lg:h-10 lg:mt-1 text-sm appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 mb-3 leading-tight" required>
                            </div>
                            <button @click="$router.push('DonationCheckoutModal')" class="px-10 rounded float-right py-2 text-lg bg-seafoam text-white font-bold mt-4">Donate {{amount}}</button>
                    </div>

                    
                </div> 
                
                
            </form>
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            amount: '$0.00'
        }
    }
}
</script>