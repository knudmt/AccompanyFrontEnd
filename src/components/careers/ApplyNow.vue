<template>
    <div class="apply-wrapper bg-bgBlue lg:p-32 lg:pt-12">
        <h3 class="lg:text-3xl text-2xl font-bold pt-8 lg:pt-2 lg:mb-12">Apply Now!</h3>
        <div class="form-wrapper  lg:bg-white rounded-2xl bg-bgBlue py-6 px-8 lg:py-24 lg:px-32 lg:shadow-lg max-w-screen-2xl m-auto">
            <form class="lg:flex flex-wrap m-auto" onsubmit="event.preventDefault();">
                <div class="mb-8 lg:mb-4 text-left text-lg lg:text-xl lg:w-1/2 lg:pr-12">
                    <label for="FullName">Full Name</label>
                    <input class="mt-2 h-8 lg:h-10 appearance-none border rounded border-black w-full py-3 px-3 text-gray-700 text-sm leading-tight" id="fullname" type="text" name="FullName">
                </div>
                <div class="mb-7 lg:mb-4 text-left text-lg lg:text-xl lg:w-1/2 lg:pl-12">
                    <label for="EmailAddress">Email Address</label>
                    <input class="mt-2 h-8 lg:h-10 text-sm appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 mb-3 leading-tight" id="email" type="email" name="EmailAddress">
                </div>
                <div class="mb-8 lg:mb-4 text-left text-lg lg:text-xl lg:w-1/2 lg:pr-12">
                    <label for="PhoneNumber">Phone Number</label>
                    <input class="mt-2 h-8 lg:h-10 lg:mt-1 appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 text-sm leading-tight" id="phone" type="tel" name="PhoneNumber">
                </div>
                <div class="mb-8 lg:mb-4 text-left text-lg lg:text-xl lg:w-1/2 lg:pl-12">
                    <label for="StreetAddress">Street Address</label>
                    <input class="mt-2 h-8 lg:h-10 lg:mt-1 appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 text-sm leading-tight" id="addy" type="text" name="StreetAddress">
                </div>
                <div class="mb-8 lg:mb-4 inline-block text-left text-lg lg:text-xl w-1/2 pr-2 lg:pr-12">
                    <label for="ApartmentNumber" class="whitespace-nowrap">Apartment Number</label>
                    <input class="mt-2 h-8 lg:h-10 lg:mt-1 text-sm appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 mb-3 leading-tight" id="aptNum" type="text" name="ApartmentNumber">
                </div>
                <div class="mb-8 lg:mb-4 inline-block text-left text-lg lg:text-xl w-1/2 pl-2 lg:pl-12">
                    <label for="City">City</label>
                    <input class="mt-2 h-8 lg:h-10 lg:mt-1 text-sm appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 mb-3 leading-tight" id="city" type="text" name="City">
                </div>
                <div class="mb-8 lg:mb-4 inline-block text-left text-lg lg:text-xl w-1/2 pr-2 lg:pr-12">
                    <label for="State">State</label>
                    <input class="mt-2 h-8 lg:h-10 lg:mt-1 appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 text-sm leading-tight" id="state" type="text" name="State">
                </div>
                <div class="mb-8 lg:mb-4 inline-block text-left text-lg lg:text-xl w-1/2 pl-2 lg:pl-12">
                    <label for="ZipCode">Zip Code</label>
                    <input class="mt-2 h-8 lg:h-10 lg:mt-1 appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 text-sm leading-tight" id="zip" type="number" name="ZipCode">
                </div>
                <div class="check-box w-full lg:pt-4">
                    <p class="lg:text-left text-center text-lg font-bold mb-6">Check all that apply to you:</p>
                    <div class="lg:pl-48 text-left">
                        <input type="checkbox" id="ableToWork" name="ableToWork" class="scale-150">
                        <label for="ableToWork"> Are you legally eligible to work in the US?</label><br><br>
                        <input type="checkbox" id="bgCheck" name="bgCheck" class="scale-150">
                        <label for="bgCheck"> Are you willing to submit to a background check?</label><br><br>
                        <input type="checkbox" id="veteranStatus" name="veteranStatus" class="scale-150">
                        <label for="veteranStatus"> Are you a veteran?</label><br><br>
                        <input type="checkbox" id="transport" name="transport" class="scale-150">
                        <label for="transport"> Do you have reliable transportation?</label><br><br>
                    </div>
                    <button class="px-4 font-semibold py-2 my-4 lg:px-12 lg:mt-12 lg:py-3 m-auto block rounded bg-seafoam lg:text-2xl text-white" @click="submitApp">Apply Now</button>
                   
                </div>
            </form>
        </div>
    </div>
</template>

<script>

export default {
   
    methods: {
        getApplicant(){
            var full = document.getElementById('fullname').value;
            const nameArr = full.split(" ");
            
            var applicant = {
                'FirstName' : nameArr[0],
                'LastName' : nameArr[1],
                'Email' : this.isEmpty(document.getElementById('email').value) ? ' ' : document.getElementById('email').value,
                'StreetAddress': this.isEmpty(document.getElementById('addy').value) ? ' ' : document.getElementById('addy').value,
                'ApartmentNumber': this.isEmpty(document.getElementById('aptNum').value) ? ' ' : document.getElementById('aptNum').value,
                'City': this.isEmpty(document.getElementById('city').value) ? ' ' : document.getElementById('city').value,
                'State': this.isEmpty(document.getElementById('state').value) ? ' ' : document.getElementById('state').value,
                'ZipCode': this.isEmpty(document.getElementById('zip').value) ? ' ' : document.getElementById('zip').value,
                'Phone' : this.isEmpty(document.getElementById('phone').value) ? ' ' : document.getElementById('phone').value,
                'LegalStatus' : document.getElementById('ableToWork').checked ? 'true' : 'false',
                'BackgroundCheck': document.getElementById('bgCheck').checked ? 'true' : 'false',
                'IsVeteran': document.getElementById('veteranStatus').checked ? 'true' : 'false',
                'HasCar' : document.getElementById('transport').checked ? 'true' : 'false'
            };

            return applicant;
        },

        isEmpty(str){
            return (!str || /^\s*$/.test(str));
        },


        submitApp(){
            var applicant = this.getApplicant();
            
            fetch('https://accompanyapplicantapi.azurewebsites.net/api/applicant', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept':'application/json',
                    'Access-Control-Allow-Origin':'*'
                },
                body: JSON.stringify(applicant)
            })
            .then(response => {
                if(response.status === 200){
                    this.$router.push('ThankyouApplyModal');
                }
            })
            .catch(function(err){
                console.log('ERROR: ' + err);
            });
        }
    }
}
</script>