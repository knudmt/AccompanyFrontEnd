<template>
    <div class="w-full m-auto lg:flex lg:justify-center">
        <div class="border-b border-black lg:border-none mb-4 mx-9 lg:w-1/3 lg:mr-44 ">
            <h4 class="text-xl text-darkBlueText mt-6 mb-2 font-bold lg:text-left lg:text-5xl">Let's Get In Touch</h4>
            <p class="text-13px px-10 lg:px-0 lg:text-left lg:text-xl">Please fill out this quick form and we 
    will be in touch soon!</p>
            <form class="bg-white rounded pt-6">
                <div class="mb-4">
                <input class="appearance-none border border-black w-full py-3 px-3 text-gray-700 text-sm leading-tight" id="fullname" type="text" placeholder="Your Full Name">
                </div>
                <div class="mb-2">
                <input class="text-sm appearance-none border border-black w-full py-3 px-3 text-gray-700 mb-3 leading-tight" id="email" type="email" placeholder="Your Email Address">
                </div>
                <div class="mb-4">
                <textarea class="textarea text-sm max-w-full min-w-full appearance-none border border-black w-full py-3 px-3 text-gray-700 mb-3 leading-tight" placeholder="Insert Your Message Here"></textarea>
                </div>
            </form>
            <Button msg="Send Email" class="bg-seafoam border-none text-white lg:text-xl px-6 mb-6 lg:float-left"/>
        </div>
        <div class="mb-6 lg:mt-16">
            <div class="text-darkBlueText font-bold text-base lg:text-left">Connect with Us</div>
            <div class="mt-4">
                <div class="mb-6 flex items-center lg:items-start w-2/4 lg:w-full m-auto">
                    <img src="../../assets/images/icon-envelope.png" alt="" class="w-6 h-4 mr-4">
                    <a class="text-sm" href="mailto:info@joinaccompany.com">info@joinaccompany.com</a>
                </div>
                <div class="mb-6 flex items-center w-2/4 lg:w-full m-auto">
                    <img src="../../assets/images/icon-twitter.png" alt="" class="w-6 h-6 mr-4">
                    <p class="text-sm">@Accompany2018</p>
                </div>
            </div>
            <div class="text-darkBlueText font-bold text-base lg:text-left">Our Hours</div>
            <p class="text-sm my-4 lg:text-left">8:00am - 8:00pm MST</p>
            <div class="text-darkBlueText lg:text-left font-bold text-base">Our Address</div>
            <p class="text-sm my-4">518 17th St. Ste 900, Denver CO 80239</p>
        </div>
    </div>
</template>

<script>
import Button from '../Button';

export default {
name: 'FormSection',
components: {
    Button,
}
}
</script>
