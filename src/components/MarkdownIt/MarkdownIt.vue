<template>
  <v-row
    no-gutters
  >
    <v-col :cols="6">
      <v-card
        grey
        class="pa-2"
        outlined
        tile
        sm-6
      >
        <markdown-it-editor :md="md"></markdown-it-editor>
      </v-card>
    </v-col>
    <v-col :cols="6">
      <div
        class="pa-2"
      >
        <markdown-it-output :md="md"></markdown-it-output>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  import MarkdownItEditor from './MarkdownItEditor'
  import MarkdownItOutput from './MarkdownItOutput'
  import MarkdownIt from 'markdown-it'
  export default {
    name: "MarkdownIt",
    components: {
      MarkdownItEditor,
      MarkdownItOutput
    },
    props: {
      md: {
        type: String,
        required: true
      }
    },
  }
</script>

<style>

</style>
