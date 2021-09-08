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
                    <!-- Stripe Section -->
                    <section class="row payment-form">
                        <h5 class="#e0e0e0 grey lighten-4">
                            Payment Method
                        </h5>

                        <div class="error red center-align white-text"> {{stripeValidationError}}</div>

                            <div class="col s12 card-element">
                                <label>Card Number</label>
                                <div id="card-number-element" class="input-value"></div>
                            </div>

                        <div class="col s6 card-element">
                            <label>Expiry Date</label>
                            <div id="card-expiry-element"></div>
                        </div>

                        <div class="col s6 card-element">
                            <label>CVC</label>
                            <div id="card-cvc-element"></div>
                        </div>

                        <div class="col s12 place-order-button-block">
                            <button class="btn col s12 #e91e63 pink" @click="getToken">Donate Now</button>
                        </div>
                    </section>

                    
                </div> 
                
                
            </form>
            
        </div>
    </div>
</template>

<script>
/* eslint-disable */

export default {
    data() {
        return {
            amount: '$0.00',
            stripe:null,
            stripeValidationError: null,
            cardNumberElement:null,
            cardExpiryElement:null,
            cardCVCElement:null,
            firstName:'',
            lastName:'',
            phone:'',
            email:''
        }
    },

     mounted(){
        this.stripe = new Stripe("pk_live_ZdmJdFuypvWwlbKrAbqW0XcQ005uK2dFUU");
        this.init();
    },

    methods: {
        
        init()
        {
            var elements = this.stripe.elements();

            this.cardNumberElement = elements.create("cardNumber");
            this.cardNumberElement.mount("#card-number-element");
            this.cardExpiryElement = elements.create("cardExpiry");
            this.cardExpiryElement.mount("#card-expiry-element");
            this.cardCVCElement = elements.create("cardCvc");
            this.cardCVCElement.mount("#card-cvc-element");
            
            // change events
            this.cardNumberElement.on("change", this.setValidationError);
            this.cardExpiryElement.on("change", this.setValidationError);
            this.cardCVCElement.on("change", this.setValidationError);
            
        },
        getToken()
        {
            console.log("GET TOKEN CALLED");
            
            this.stripe.createToken(this.cardNumberElement).then(result => {
                if(result.error){
                    console.log('ERROR: ' + result.error);
                }
                else
                {
                    console.log('TOKEN RECEIVED: ' + result.token.id);
                    this.processPayment(result.token.id);
                }
            });
        },
        processPayment(token)
        {
            // if '$' is present remove the dollar sign and then parse
            if(this.amount.includes('$')){
                console.log("CONTAINS '$' " + this.amount);
                this.amount = this.amount.replace(/\$/g, '');
                console.log("AFTER PARSING: " + this.amount);
            }
            var totalCents = parseFloat(this.amount) * 100;
            var json = { token : token, amount: totalCents };

            fetch('https://accompanypayments.azurewebsites.net/api/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept':'application/json',
                    'Access-Control-Allow-Origin':'*'
                },
                body: JSON.stringify(json)
            })
            .then(function(response){
                if(response.status === 200){
                    
                    alert("Donation Sent!");
                    window.open("https://zealous-tree-0912af910.azurestaticapps.net/thankyou.html", "_self");
                }
            })
            .catch(function(err){
                console.log('ERROR: ' + err);
            });
        },

        formatPrice(value) 
        {
            let val = (value/1).toFixed(2)
            return val.toLocaleString("en", {useGrouping: false, minimumFractionDigits: 2,})
        },
    }
}
</script>