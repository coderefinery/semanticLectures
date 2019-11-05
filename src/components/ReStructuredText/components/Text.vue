<template>
  <span class="text" v-html="value"></span>
</template>

<script>
  export default {
    name: "Text",
    props: {
      type: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  .commment {
    color: darkgreen;
  }
</style>
