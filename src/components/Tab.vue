<template>
    <div v-if="isSelected" class="lg:-mt-20 -mt-9">
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
