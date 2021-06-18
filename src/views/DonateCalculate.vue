<template>
    <div>
        <Hero :btn="false" :title="title" :text="text"  /> 
        <YourContribution />
    </div>
</template>

<script>
import Hero from '../components/heros/TreeHero.vue'
import YourContribution from '../components/tree-donation/YourFlightContribution.vue'

export default {
    components: {
        Hero,
        YourContribution
    },
    data() {
        return {
            title: 'Donate A Tree',
            text: 'Let’s find your flight and confirm the trees to donate.',
        }
    }
}
</script>