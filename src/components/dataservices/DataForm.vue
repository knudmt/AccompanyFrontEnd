<template>
    <div class="apply-wrapper bg-bgBlue lg:p-32 lg:pt-12">
        <h3 class="lg:text-3xl text-2xl font-bold pt-8 lg:pt-2 lg:mb-12">Apply Now!</h3>
        <div class="form-wrapper  lg:bg-white rounded-2xl bg-bgBlue py-6 px-8 lg:py-24 lg:px-32 lg:shadow-lg max-w-screen-2xl m-auto">
            <form class="lg:flex flex-wrap m-auto">
                <div class="mb-8 lg:mb-4 text-left text-lg lg:text-xl lg:w-1/2 lg:pr-12">
                    <label for="FullName">Full Name</label>
                    <input class="mt-2 h-8 lg:h-10 appearance-none border rounded border-black w-full py-3 px-3 text-gray-700 text-sm leading-tight" id="fullname" type="text" name="FullName">
                </div>
                <div class="mb-8 lg:mb-4 inline-block text-left text-lg lg:text-xl w-1/2 pl-2 lg:pl-12">
                    <label for="Height">Height (Feet)</label>
                    <input class="mt-2 h-8 lg:h-10 lg:mt-1 appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 text-sm leading-tight" id="geight" type="text" name="Height">
                </div>
                <div class="mb-7 lg:mb-4 text-left text-lg lg:text-xl lg:w-1/2 lg:pr-12">
                    <label for="EmailAddress">Email Address</label>
                    <input class="mt-2 h-8 lg:h-10 text-sm appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 mb-3 leading-tight" id="email" type="email" name="EmailAddress">
                </div>
                <div class="mb-8 lg:mb-4 inline-block text-left text-lg lg:text-xl w-1/2 pl-2 lg:pl-12">
                    <label for="Height">Height (Inches)</label>
                    <input class="mt-2 h-8 lg:h-10 lg:mt-1 appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 text-sm leading-tight" id="geight" type="text" name="Height">
                </div>
                <div class="mb-8 lg:mb-4 text-left text-lg lg:text-xl lg:w-1/2 lg:pr-12">
                    <label for="Airline">Airline</label>
                    <input class="mt-2 h-8 lg:h-10 lg:mt-1 appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 text-sm leading-tight" id="airline" type="text" name="Airline">
                </div>
                <div class="mb-8 lg:mb-4 inline-block text-left text-lg lg:text-xl w-1/2 pl-2 lg:pl-12">
                    <label for="Weight">Weight (Pounds)</label>
                    <input class="mt-2 h-8 lg:h-10 lg:mt-1 appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 text-sm leading-tight" id="weight" type="number" name="Weight">
                </div>
                <div class="mb-8 lg:mb-4 text-left text-lg lg:text-xl lg:w-1/2 lg:pr-12">
                    <label for="SeatNumber">Seat Number</label>
                    <input class="mt-2 h-8 lg:h-10 lg:mt-1 appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 text-sm leading-tight" id="seatNumber" type="number" name="SeatNumber">
                </div>
                <div class="mb-8 lg:mb-4 text-left text-lg lg:text-xl lg:w-1/2 flex">
                    <div class="mb-8 lg:mb-4 inline-block text-left text-lg lg:text-xl w-1/2 pl-2 lg:pl-12">
                        <label for="Terminal" class="whitespace-nowrap">Terminal</label>
                        <input class="mt-2 h-8 lg:h-10 lg:mt-1 text-sm appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 mb-3 leading-tight" id="terminal" type="text" name="Terminal">
                    </div>
                    <div class="mb-8 lg:mb-4 inline-block text-left text-lg lg:text-xl w-1/2 pl-2 lg:pl-12">
                        <label for="Gate">Gate</label>
                        <input class="mt-2 h-8 lg:h-10 lg:mt-1 text-sm appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 mb-3 leading-tight" id="gate" type="text" name="Gate">
                    </div>
                </div>
                
                
                
                <div class="check-box w-full lg:pt-4 flex flex-col">
                    <p class="lg:text-left text-center text-lg font-bold mb-6 w-full">Check all that apply to you:</p>
                    <div class="flex flex-wrap font-bold whitespace-nowrap lg:pl-16">

                    <div class="text-left w-1/3">
                        <input type="checkbox" id="FeverChills" name="FeverChills" class="scale-150">
                        <label for="FeverChills">Fever/Chills</label><br><br>
                    </div>
                    <div class="text-left w-1/3">
                        <input type="checkbox" id="Cough" name="Cough" class="scale-150">
                        <label for="Cough">Cough</label><br><br>
                    </div>
                    <div class="text-left w-1/3">
                        <input type="checkbox" id="Breathing" name="Breathing" class="scale-150">
                        <label for="Breathing">Shortness of Breath or Difficulty Breathing</label><br><br>
                    </div>
                    <div class="text-left w-1/3">
                        <input type="checkbox" id="Fatigue" name="Fatigue" class="scale-150">
                        <label for="Fatigue">Fatigue</label><br><br>
                    </div>
                    <div class="text-left w-1/3">
                        <input type="checkbox" id="Headache" name="Headache" class="scale-150">
                        <label for="Headache">Headache</label><br><br>
                    </div>
                    <div class="text-left w-1/3">
                        <input type="checkbox" id="Muscle" name="Muscle" class="scale-150">
                        <label for="Muscle">Muscle or Body Aches</label><br><br>
                    </div>
                    <div class="text-left w-1/3">
                        <input type="checkbox" id="SoreThroat" name="SoreThroat" class="scale-150">
                        <label for="SoreThroat">Sore Throat</label><br><br>
                    </div>
                    <div class="text-left w-1/3">
                        <input type="checkbox" id="Diarrhea" name="Diarrhea" class="scale-150">
                        <label for="Diarrhea">Diarrhea</label><br><br>
                    </div>
                     <div class="text-left w-1/3">
                        <input type="checkbox" id="TasteSmallLoss" name="TasteSmallLoss" class="scale-150">
                        <label for="TasteSmallLoss">New Loss of Taste or Smell</label><br><br>
                    </div>
                    <div class="text-left w-1/3">
                        <input type="checkbox" id="Congestion" name="Congestion" class="scale-150">
                        <label for="Congestion">Congestion or runny nose</label><br><br>
                    </div>
                    <div class="text-left w-1/3">
                        <input type="checkbox" id="Nausea" name="Nausea" class="scale-150">
                        <label for="Nausea">Nausea or Vomiting</label><br><br>
                    </div>
                    <div class="text-left w-1/3">
                        <input type="checkbox" id="CheckedBags" name="CheckedBags" class="scale-150">
                        <label for="CheckedBags">Checked Bag(s)?</label><br><br>
                    </div>
                    
                    </div>
                    
                    <input type="submit" value="Submit Data" class="px-4 font-semibold py-2 my-4 lg:px-12 lg:mt-12 lg:py-3 m-auto block rounded bg-seafoam lg:text-2xl text-white">
                </div>
            </form>
        </div>
    </div>
</template>