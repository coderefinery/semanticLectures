<template>
  <span class="text-justify">{{struct.value}}</span>
</template>

<script>
  export default {
    name: "RestText",
    props: {
      struct: {
        type: Object,
        required: true
      }
    },
    computed: {
      hrefId() {
        return encodeURIComponent(this.struct.value)
      }
    }
  }
</script>

<style scoped>

</style>
