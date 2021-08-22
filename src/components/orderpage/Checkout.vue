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
                <!-- stripe div -->
                
                <section class="row payment-form">
                    <h5 class="#e0e0e0 grey lighten-4">
                        Payment Method
                        <span class="right">${{ formatPrice(totalPrice) }}</span>
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
                        <button class="btn col s12 #e91e63 pink" @click="placeOrderButtonPressed">Place Order</button>
                    </div>
                </section>
               
            
            </form>
        </div>
    </div>
    </div>
</template>


<script>
import ProductList from "./ProductList";
import User from "../../js/appUser";
import AppDelivery from "../../js/AppDelivery";
import SwiftOrder from "../../js/switfOrder";

export default {
    name: 'Checkout',
    components: {
        ProductList,
    },
    props: {
        cart: Array,
        totalPrice: Number,
    },
    data(){
        return {
            cart: [],
            viewCart: true,
            stripe: null,
            cardNumberElement:null,
            cardExpiryElement:null,
            cardCVCElement:null,
            stripeValidationError:null,
            firstName:'',
            lastName:'',
            phone:'',
            email:'',
            terminal:'',
            gate:'',
            tip:'',
            amount:0,
        }
        
    },
    mounted(){
        this.stripe = new Stripe("pk_live_ZdmJdFuypvWwlbKrAbqW0XcQ005uK2dFUU");
        this.init();
    },
    methods: 
    {
        init(){
            // invoke and mount
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

        setValidationError(event)
        {
            this.stripeValidationError = event.error ? event.error.message : "";
        },

        formatPrice(value) 
        {
            let val = (value/1).toFixed(2)
            return val.toLocaleString("en", {useGrouping: false, minimumFractionDigits: 2,})
        },

        async processToken(data){
            const response = await fetch('https://accompanypayments.azurewebsites.net/api/payment', {
                method: 'POST',
                headers: {
                    'Accept':'application/json',
                    'Access-Control-Allow-Origin':'*'
                },
                body: JSON.stringify(data)
            });
            const content = await response;
            console.log(content);

            if(content[2] === "True")
            {
                console.log(this.totalPrice * 100);
                var appDelivery = this.buildOrder();
                this.sendOrder(appDelivery);
            }
        },
        sendOrder(appDelivery)
        {
            try
            {
                var swift = new SwiftOrder(appDelivery);
                var submitted = swift.submitOrder();
            }
            catch(error)
            {
                console.log("[ERROR]: " + error.message);
                alert(error);
            }
        },
        getVendorName(id){
            switch(id)
            {
                case "11":
                    return "Chick-fil-A";
                case "6":
                    return "Pei Wei Asian Kitchen";
                case "7":
                    return "PDQ Chicken";
                case "8":
                    return "Starbucks";
                case "9":
                    return "Qdoba Mexican";
                case "10":
                    return "Wendy's";
            }
        },
        buildOrder()
        {
            var items = [];
            for(var i = 0; i < this.cart.length; i++)
            {
                var obj = 
                {
                    description : this.cart[i].title,
                    price : parseFloat(this.cart[i].price),
                    quanity : 1
                };
                items.push(obj);
            }
            var user = this.firstName + " " + this.lastName;
            var appUsr = new User(user, this.phone, this.email, this.terminal, this.gate, this.tip);
            var vendorId = window.localStorage.getItem('vendorId');
            
            return new AppDelivery(appUsr, 
                                   items, 
                                   "delivery", 
                                   this.getVendorName(vendorId), 
                                   this.totalPrice * 100);

        },
        placeOrderButtonPressed()
        {
            
            this.stripe.createToken(this.cardNumberElement).then(result => {
                if(result.error){
                    this.stripeValidationError = result.error.message;
                } 
                else {
                    var json = {
                        amount: this.amount,
                        source: result.token.id
                    }
                    this.processToken(json);
                }
            });
        }
    }
};

</script>
