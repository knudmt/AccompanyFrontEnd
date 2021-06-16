<template>
    <div>
        <Hero :btn="true" :title="title" :text="text" />
        <Overview />
        <Impact />
        <TreeSpecies />
        <Methodology />
    </div>
</template>

<script>
import Hero from '../components/heros/TreeHero.vue'
import Overview from '../components/tree-donation/DonateOverview.vue'
import Impact from '../components/tree-donation/Impact.vue'
import TreeSpecies from '../components/tree-donation/TreeSpecies.vue'
import Methodology from '../components/tree-donation/Methodology.vue'

export default {
    components: {
        Hero,
        Overview,
        Impact,
        TreeSpecies,
        Methodology
    },
    data() {
        return {
            title: 'Ready to Donate A Tree?',
            text: 'Accompany data will plant trees to replace CO2 gas from your flight activity.',
        }
    },
}
</script>