<template>
  <div>
      <ul class="tab-wrapper flex w-full text-white bg-overlayGray ">
        
        <li v-for="tab in tabs" :key="tab" class="w-3/6">
          <a :class="{ active: tab === selected }" @click="setTab(tab)" class="w-full block py-2 px-6 lg:py-3 rounded-sm rounded-b-none bg-overlayBlack lg:text-2xl md:text-xl text-13px text-center cursor-pointer whitespace-nowrap">
          {{ tab }}
          </a>
        </li>
    </ul>
    <slot></slot>
  </div>
    
</template>

<script>

export default {
  name: 'HeroTabs',
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    selected: {
      type: String,
      required: true,
    }
  },
  methods: {
    setTab(tab) {
      this.$emit('selected', tab)
    }
  }
}
</script>


