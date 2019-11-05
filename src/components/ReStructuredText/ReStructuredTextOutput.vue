<template>
  <div :class="struct.type">
    <div
      v-if="struct.children"
    >
      <re-structured-text-output
        v-for="(kidStruct, index) in struct.children"
        :key="index"
        :struct="kidStruct"
      ></re-structured-text-output>
    </div>
    <span
      v-else-if="struct.type === 'text'"
      v-html="struct.value"
    ></span>
    <div
      v-else-if="struct.type === 'error'"
      class="error"
    >{{struct.message}}</div>
    <kbd v-else>{{struct.type}}</kbd>
  </div>
</template>

<script>
  export default {
    name: "ReStructuredTextOutput",
    props: {
      struct: {
        type: Object,
        required: true
      }
    },
    methods: {
      // todo: loadReferences(this.source)
    }
  }
</script>

<style scoped>
  .error {
    padding: .5em;
  }
</style>
