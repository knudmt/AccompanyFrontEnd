<template>
    <div class="w-full m-auto lg:flex lg:justify-center mt-8">
        <div class="border-b border-black lg:border-none mb-4 mx-9 lg:w-1/3 lg:mr-52 ">
            <h4 class="text-xl text-darkBlueText mt-6 mb-2 font-bold lg:text-left lg:text-4xl">Let's Get In Touch</h4>
            <p class="text-13px px-10 lg:px-0 lg:mb-2 lg:text-left lg:text-lg">Please fill out this quick form and we 
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
            <Button msg="Send Email" class="bg-seafoam border-none text-white lg:text-base px-8 mb-6 lg:float-left lg:mt-4"/>
        </div>
        <div class="mb-6 lg:mt-20">
            <div class="text-darkBlueText font-bold text-base lg:text-lg lg:text-left">Connect with Us</div>
            <div class="mt-4">
                <div class="mb-6 flex items-center lg:items-start w-2/4 lg:w-full m-auto">
                    <img src="../../assets/images/email-icon-contact@2x.png" alt="" class="w-7 mr-5">
                    <a class="text-sm" href="mailto:info@joinaccompany.com">info@joinaccompany.com</a>
                </div>
                <div class="mb-6 flex items-center w-2/4 lg:w-full m-auto">
                    <img src="../../assets/images/TwitterIconContact.png" alt="" class="w-7 mr-5">
                    <p class="text-sm">@Accompany2018</p>
                </div>
            </div>

            <div class="text-darkBlueText font-bold text-base lg:text-left lg:text-lg">Our Hours</div>
            <div class="flex items-center justify-center lg:justify-start">
                <img src="../../assets/images/clock-icon.png" alt="" class="w-6 h-6 mr-4">
                <p class="text-sm my-4 lg:text-left">8:00am - 8:00pm MST</p>    
            </div>
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
