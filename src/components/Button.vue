<template>
    <button class="px-4 py-2 font-bold text-13px min-w-min lg:text-2xl rounded  border-2 border-solid">{{ msg }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
      msg: String,
  }
}
</script>