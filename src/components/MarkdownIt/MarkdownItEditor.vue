<template>
  <v-textarea
    v-model="md"
    label="markdownIt input"
    counter
    full-width
    auto-grow
  ></v-textarea>
</template>

<script>
  export default {
    name: "MarkdownItEditor",
    props: {
      md: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
