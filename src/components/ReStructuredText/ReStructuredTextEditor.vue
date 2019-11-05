<template>
  <v-textarea
    v-model="reST"
    label="reStructuredText"
    counter
    full-width
    auto-grow
  ></v-textarea>
</template>

<script>
  export default {
    name: "ReStructuredTextEditor",
    props: {
      reST: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
