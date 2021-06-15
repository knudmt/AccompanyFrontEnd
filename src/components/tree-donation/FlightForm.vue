<template>
    <div class="bg-bgBlue lg:p-32 lg:pt-12">
        <div class="form-wrapper  lg:bg-white rounded-2xl bg-bgBlue py-6 px-8 lg:pb-24 lg:pt-12 lg:px-32 lg:shadow-lg max-w-screen-2xl m-auto">
            <h3 class="lg:text-2xl text-xl font-bold lg:mb-12 w-full">Find Your Flight</h3>
            <form class="lg:flex flex-wrap m-auto">
                <div class="mb-8 lg:mb-4 text-left text-lg lg:text-xl lg:w-1/2 lg:pr-12">
                    <label for="airline" class="font-bold text-base">Search Airline</label>
                    <input class="mt-2 h-8 lg:h-10 appearance-none border rounded border-black w-full py-3 px-3 text-gray-700 text-sm leading-tight" id="airline" type="text" name="airline">
                </div>
                <div class="mb-8 lg:mb-4 inline-block text-left text-lg lg:text-xl w-1/2 pl-2 lg:pl-12">
                    <label for="flight-number" class="font-bold text-base">Enter Flight Number</label>
                    <input class="mt-2 h-8 lg:h-10 lg:mt-1 appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 text-sm leading-tight" id="flight-number" type="text" name="flight-number">
                </div>
                <div class="mb-7 lg:mb-4 text-left text-lg lg:text-xl lg:w-1/2 lg:pr-12">
                    <label for="From" class="font-bold text-base">From City/Airport</label>
                    <input class="mt-2 h-8 lg:h-10 text-sm appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 mb-3 leading-tight" id="From" type="text" name="From">
                </div>
                <div class="mb-8 lg:mb-4 inline-block text-left text-lg lg:text-xl w-1/2 pl-2 lg:pl-12">
                    <label for="To" class="font-bold text-base">To City/Airport</label>
                    <input class="mt-2 h-8 lg:h-10 lg:mt-1 appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 text-sm leading-tight" id="To" type="text" name="To">
                </div>
                <div class="mb-8 lg:mb-4 text-left text-lg lg:text-xl lg:w-1/2 lg:pr-12">
                    <label for="Departure" class="font-bold text-base">Departure Date</label>
                    <input class="mt-2 h-8 lg:h-10 lg:mt-1 appearance-none rounded border border-black w-full py-3 px-3 text-gray-700 text-sm leading-tight" id="Departure" type="text" name="Departure">
                </div>
                <div class="w-full mt-4">
                    <input type="submit" value="Search Flight" class="bg-seafoam py-2 px-12 rounded text-white font-bold">
                </div>
            </form>
        </div>
    </div>
</template>