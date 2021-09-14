<template>
    <div class="apply-wrapper bg-bgBlue lg:p-32 lg:pt-12">
        <h3 class="lg:text-3xl text-2xl font-bold pt-8 lg:pt-2 lg:mb-12">Apply Now!</h3>
        <div class="form-wrapper  lg:bg-white rounded-2xl bg-bgBlue py-6 px-8 lg:py-24 lg:px-32 lg:shadow-lg max-w-screen-2xl m-auto">
            <form class="lg:flex flex-wrap m-auto" onsubmit="event.preventDefault();">
                <div class="mb-8 lg:mb-4 inline-block text-left text-lg lg:text-xl w-1/2 pl-2 lg:pl-12">
                    <label for="Height">Height (Feet)</label>
                    <input class="mt-2 h-8 lg:h-10 lg:mt-1 appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 text-sm leading-tight" v-model="heightFt" id="heightFt" type="number" name="Height" required>
                </div>
                <div class="mb-7 lg:mb-4 text-left text-lg lg:text-xl lg:w-1/2 lg:pr-12">
                    <label for="FlightNumber">Flight Number</label>
                    <input class="mt-2 h-8 lg:h-10 text-sm appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 mb-3 leading-tight" v-model="flightNum" id="flightNum" type="text" name="FlightNumber" required>
                </div>
                <div class="mb-7 lg:mb-4 text-left text-lg lg:text-xl lg:w-1/2 lg:pr-12">
                    <label for="EmailAddress">Email Address</label>
                    <input class="mt-2 h-8 lg:h-10 text-sm appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 mb-3 leading-tight" v-model="email" id="email" type="email" name="EmailAddress" required>
                </div>
                <div class="mb-8 lg:mb-4 inline-block text-left text-lg lg:text-xl w-1/2 pl-2 lg:pl-12">
                    <label for="Height">Height (Inches)</label>
                    <input class="mt-2 h-8 lg:h-10 lg:mt-1 appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 text-sm leading-tight" v-model="heightIn" id="heightIn" type="number" name="Height" required>
                </div>
                <div class="mb-8 lg:mb-4 text-left text-lg lg:text-xl lg:w-1/2 lg:pr-12">
                    <label for="Airline">Airline</label>
                    <input class="mt-2 h-8 lg:h-10 lg:mt-1 appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 text-sm leading-tight" v-model="airline" id="airline" type="text" name="Airline" required>
                </div>
                <div class="mb-8 lg:mb-4 inline-block text-left text-lg lg:text-xl w-1/2 pl-2 lg:pl-12">
                    <label for="Weight">Weight (Pounds)</label>
                    <input class="mt-2 h-8 lg:h-10 lg:mt-1 appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 text-sm leading-tight" v-model="weight" id="weight" type="number" name="Weight" required>
                </div>
                <div class="mb-8 lg:mb-4 text-left text-lg lg:text-xl lg:w-1/2 lg:pr-12">
                    <label for="SeatNumber">Seat Number</label>
                    <input class="mt-2 h-8 lg:h-10 lg:mt-1 appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 text-sm leading-tight" v-model="seatNum" id="seatNumber" type="text" name="SeatNumber" required>
                </div>
               
                
                
                
                <div class="check-box w-full lg:pt-4 flex flex-col">
                    <!--<p class="lg:text-left text-center text-lg font-bold mb-6 w-full">Check all that apply to you:</p>
                    <div class="flex flex-wrap font-bold whitespace-nowrap lg:pl-16">

                    
                    <div class="text-left w-1/3">
                        <input type="checkbox" id="CheckedBags" name="CheckedBags" class="scale-150">
                        <label for="CheckedBags">Checked Bag(s)?</label><br><br>
                    </div>
                    
                    </div> -->
                    <button class="px-4 font-semibold py-2 my-4 lg:px-12 lg:mt-12 lg:py-3 m-auto block rounded bg-seafoam lg:text-2xl text-white" @click="sendData">Submit Data</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

 
export default {
 

    data(){
        return {
            heightFt: "",
            email: "",
            heightIn: "",
            airline: "",
            weight: 0,
            seatNum: "",
            flightNum: "",
        }
    }, 
    methods:{
        sendData(){
            console.log("send data called..");

            // total inches for height
            var hgt = (this.heightFt * 12) + this.heightIn;
            console.log(hgt);

            var userInfo = {
                "email": this.email,
                "flightnumber": this.flightNum,
                "airline": this.airline,
                "hgt": hgt.toString(),
                "wgt": this.weight,
                "symptoms": {
                    "feverchills": 0,
                    "cough":0,
                    "breathingissues": 0,
                    "fatigue": 0,
                    "bodyaches": 0,
                    "headache": 0,
                    "tastesmell": 0,
                    "sorethroat": 0,
                    "congestion": 0,
                    "nausea": 0,
                    "diarrhea": 0
                }
            };
            
            fetch('https://accompanyairmineapi.azurewebsites.net/api/data', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'Accept':'application/json',
                    'Access-Control-Allow-Origin':'*'
                },
                body: JSON.stringify(userInfo)
            })
            .then(response => {
                if(response.status === 200){
                    this.$router.push('ThankyouDataModal');
                }
            })
            .catch(function(err){
                alert("ERROR: Please try again later");
            });
        }
    }
} 

</script>

<!-- 
{"email":"knudmt@outlook.com","flightnumber":"234","airline":"spirit","hgt":"722","wgt":"234","symptoms":{"feverchills":0,"cough":0,"breathingissues":0,"fatigue":0,"bodyaches":0,"headache":0,"tastesmell":0,"sorethroat":0,"congestion":0,"nausea":0,"diarrhea":0}}
{"email":"knudmt@outlook.com","flightnumber":"234","airline":"spirit","hgt":"722","wgt":"234","symptoms":{"feverchills":0,"cough":0,"breathingissues":0,"fatigue":0,"bodyaches":0,"headache":0,"tastesmell":0,"sorethroat":0,"congestion":0,"nausea":0,"diarrhea":0}}

{"email":"knudmt@outlook.com","airline":"spirit","hgt":73,"wgt":"234","symptoms":{"feverchills":0,"breathingissues":0,"fatigue":0,"bodyaches":0,"tastesmell":0,"sorethroat":0,"congestion":0,"nausea":0,"diarrhea":0}}
-->
