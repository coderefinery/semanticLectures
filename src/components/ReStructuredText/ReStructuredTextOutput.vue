<template>
  <div :class="struct.type">
    <rest-title
      v-if="struct.type === 'title'"
      :struct="struct"
    ></rest-title>
    <template
      v-else-if="struct.children"
    >
      <re-structured-text-output
        v-for="(kidStruct, index) in struct.children"
        :key="index"
        :struct="kidStruct"
      ></re-structured-text-output>
    </template>
    <RestText
      v-else-if="struct.type === 'text'"
      :struct="struct"
    ></RestText>
    <div
      v-else-if="struct.type === 'error'"
      :class="struct.type"
    >
      {{ struct.message }}
    </div>
    <kbd v-else-if="struct.type === 'unknown_line'">{{ struct }}</kbd>
    <span v-else>
      <rest-field :struct="struct"></rest-field></span>
  </div>
</template>

<script>
  import RestField from './components/RestField'
  import RestTitle from './components/RestTitle'
  import RestText from './components/RestText'
  export default {
    name: "ReStructuredTextOutput",
    components: {
      RestTitle,
      RestField,
      RestText
    },
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
  .parseTextValuesError {
    color: white;
    background-color: darkred;
  }
</style>
