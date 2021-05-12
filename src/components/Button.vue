<template>
    <button class="px-8 py-3 font-bold text-xl min-w-min lg:text-2xl border-4 border-solid border-black">{{ msg }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
      msg: String,
  }
}
</script>