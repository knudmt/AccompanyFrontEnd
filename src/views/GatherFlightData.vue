<template>
    <div>
        <Hero :btn="false" :title="title" :text="text" />
        <FlightGather @search-clicked="hideAndShow()" v-if="showForm" />
        <FlightConfirm v-if="showConfirm" @back-clicked="showAndHide()" />
    </div>
</template>

<script>
import Hero from '../components/heros/TreeHero.vue'
import FlightGather from '../components/tree-donation/FlightForm.vue'
import FlightConfirm from '../components/tree-donation/FlightConfirm.vue'

export default {
    components: {
        Hero,
        FlightGather,
        FlightConfirm
    },
    data() {
        return {
            title: 'Ready to Donate A Tree?',
            text: 'Accompany data will plant trees to replace CO2 gas from your flight activity.',
            showForm: true,
            showConfirm: false
        }
    },
    methods: {
        hideAndShow() {
            this.showConfirm = true
            this.showForm = false
        },
        showAndHide() {
            this.showConfirm = false
            this.showForm = true
        }
    }
}
</script>