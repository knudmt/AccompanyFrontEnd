<template>
    <div v-if="isSelected" class="hotel-results">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        isSelected: {
            type: Boolean
        }
    }
}
</script>
