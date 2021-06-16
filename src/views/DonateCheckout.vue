<template>
    <div>
        <Hero :btn="false" :title="title" :text="text" />
        <DonationInfo />
        <DonationLocationCheckout />
        <DonationCheckoutForm />
    </div>
</template>

<script>
import Hero from '../components/heros/TreeHero.vue'
import DonationInfo from '../components/tree-donation/DonationInfo.vue'
import DonationLocationCheckout from '../components/tree-donation/DonationLocationCheckout.vue'
import DonationCheckoutForm from '../components/tree-donation/DonationCheckoutForm.vue'
 
export default {
    components: {
        Hero,
        DonationInfo,
        DonationLocationCheckout,
        DonationCheckoutForm
    },
     data() {
        return {
            title: 'Ready to Donate A Tree?',
            text: 'Accompany data will plant trees to replace CO2 gas from your flight activity.',
        }
    },
}
</script>