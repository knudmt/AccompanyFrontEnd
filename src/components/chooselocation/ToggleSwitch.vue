<template>
  <div class="flex flex-col px-8 py-4 lg:px-24">
    <div class="lg:px-40">
        <ul class="option-wrapper mb-12 border-black border-opacity-30 border rounded-full flex w-full text-black">
        
        <li v-for="option in options" :key="option" class="w-3/6" :class="option">
          <a :class="{ optionActive: option === selected }" :option="option" @click="setOption(option)" class="locationOption w-full block py-2 px-6 lg:py-2 rounded-sm rounded-b-none text-gray-600 lg:text-lg md:text-base text-13px text-center cursor-pointer whitespace-nowrap">
          {{ option }}
          </a>
        </li>
    </ul>
    </div>
      
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
