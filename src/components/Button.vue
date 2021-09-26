<template>
    <button class="px-4 py-2 transform hover:scale-105 font-bold text-13px min-w-min rounded  border-2 border-solid">{{ msg }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
      msg: String,
  }
}
</script>