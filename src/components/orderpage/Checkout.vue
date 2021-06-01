<template>
    <div>
        <div class="apply-wrapper bg-bgBlue lg:p-32 lg:pt-12">
        <div class="form-wrapper  lg:bg-white rounded-2xl bg-bgBlue py-6 px-8 lg:py-12 lg:px-32 lg:shadow-lg max-w-screen-2xl m-auto">
            <form class="lg:flex flex-wrap m-auto">
                <h4 class="text-darkBlueText text-center text-xl font-bold mb-12 w-full">Contact and Delivery Information</h4>
                <div class="mb-8 lg:mb-4 text-left text-lg lg:text-xl lg:w-1/2 lg:pr-12">
                    <label for="FirstName">First Name</label>
                    <input v-model="firstName" class="mt-2 h-8 lg:h-10 appearance-none border rounded border-black w-full py-3 px-3 text-gray-700 text-sm leading-tight" id="firstname" type="text" name="FirstName" required>
                </div>
                <div class="mb-7 lg:mb-4 text-left text-lg lg:text-xl lg:w-1/2 lg:pl-12">
                    <label for="LastName">Last Name</label>
                    <input v-model="lastName" class="mt-2 h-8 lg:h-10 text-sm appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 mb-3 leading-tight" id="lastname" type="text" name="LastName" required>
                </div>
                <div class="mb-8 lg:mb-4 text-left text-lg lg:text-xl lg:w-1/2 lg:pr-12">
                    <label for="PhoneNumber">Phone Number</label>
                    <input v-model="phone" class="mt-2 h-8 lg:h-10 lg:mt-1 appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 text-sm leading-tight" id="phonenumber" type="tel" name="PhoneNumber" required>
                </div>
                <div class="mb-8 lg:mb-4 text-left text-lg lg:text-xl lg:w-1/2 lg:pl-12">
                    <label for="EmailAddress">Email Address</label>
                    <input v-model="email" class="mt-2 h-8 lg:h-10 lg:mt-1 appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 text-sm leading-tight" id="emailaddress" type="email" name="EmailAddress" required>
                </div>
                <div class="mb-8 lg:mb-4 inline-block text-left text-lg lg:text-xl w-1/2 pr-2 lg:pr-12">
                    <label for="Terminal" class="whitespace-nowrap">Terminal</label>
                    <input v-model="terminal" class="mt-2 h-8 lg:h-10 lg:mt-1 text-sm appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 mb-3 leading-tight" id="terminal" type="text" name="Terminal" required>
                </div>
                <div class="mb-8 lg:mb-4 inline-block text-left text-lg lg:text-xl w-1/2 pl-2 lg:pl-12">
                    <label for="Gate">Gate</label>
                    <input v-model="gate" class="mt-2 h-8 lg:h-10 lg:mt-1 text-sm appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 mb-3 leading-tight" id="gate" type="text" name="Gate" required>
                </div>

                <div class="w-1/2 m-auto">
                    <div class="mb-8 lg:mb-4 inline-block text-left text-lg lg:text-xl w-1/2 pl-2 lg:pl-12">
                        <label for="Tip">Leave A Tip?</label>
                        <currency-input v-model="tip" id="leaveATip" currency="USD" name="Tip" class="mt-2 h-8 lg:h-10 lg:mt-1 text-sm appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 mb-3 leading-tight" />
                    </div>
                    <div>
                        <label for="DeliveryDate" class="block w-full">When Should We Deliver?</label>
                        <input v-model="date" type="date" id="DeliveryDateTime" name="DeliveryDate"
                            value="Today"
                            min="2021-01-01" max="2040-12-31" required>
                        <input v-model="time" type="time" id="delTime" name="DeliveryTime"
                            min="00:00" max="23:59" required>
                    </div>
                </div>
                <div>
                    <h4 class="paymentMethod text-xl text-darkBlueText text-center mt-12 font-bold">Payment Method</h4>    
                    <div class="mb-8 lg:mb-4 inline-block text-left text-lg lg:text-xl w-1/2 pl-2 lg:pl-12">
                        <label for="CardInfo">Your Card Information</label>
                        <input v-model="cardNum" id="cardInfo" name="CardInfo" type="number" class="mt-2 h-8 lg:h-10 lg:mt-1 text-sm appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 mb-3 leading-tight" required />
                    </div>
                    <div class="mb-8 lg:mb-4 inline-block text-left text-lg lg:text-xl w-1/2 pl-2 lg:pl-12">
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
                </div>
                <div class="w-full flex justify-center">
                    <input @click="processForm" :value="'Pay $' + grandTotal" class="py-2 px-8 bg-seafoam rounded-md text-white text-lg font-bold">
                </div>
                
            </form>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'Checkout',
    data: () => ({ 
        value: 3.50,
        grandTotal: '0.00',
        firstName: '',
        lastName: '',
        phone: 8000000000,
        email: '',
        Terminal: '',
        Gate: '',
        tip: 0.00,
        date: '',
        time: '',
        cardNum,
        fullNameOnCard,
        CVV,
        expDate,

    }),
    methods: {
        processForm() {
           console.log(this.firstName, this.lastName); 
        }
    }
}
</script>