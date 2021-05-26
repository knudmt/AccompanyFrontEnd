<template>
  <div class="flex flex-col px-8 py-4">
      <ul class="option-wrapper mb-12 border-black border rounded-full flex w-full text-black">
        
        <li v-for="option in options" :key="option" class="w-3/6">
          <a :class="{ optionActive: option === selected }" :option="option" @click="setOption(option)" class="locationOption w-full block py-2 px-6 lg:py-3 rounded-sm rounded-b-none lg:text-2xl md:text-xl text-13px text-center cursor-pointer whitespace-nowrap">
          {{ option }}
          </a>
        </li>
    </ul>
    <slot></slot>
  </div>
    
</template>

<script>

export default {
  name: 'ToggleSwitch',
  props: {
    options: {
      type: Array,
      required: true,
    },
    selected: {
      type: String,
      required: true,
    }
  },
  methods: {
    setOption(option) {
      this.$emit('selected', option)
    }
  }
}
</script>
