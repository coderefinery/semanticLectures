<template>
  <v-runtime-template :template="template"></v-runtime-template>
</template>

<script>
  import VRuntimeTemplate from "v-runtime-template";
  import mit from './markdownIt'
  export default {
    name: "MarkdownItOutput",
    components: {
      VRuntimeTemplate
    },
    props: {
      md: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        template: '<span>empty</span>'
      }
    },
    created() {
      this.template = `<div class="mitOutput">${mit.render(this.md)}</div>`
    }
  }
</script>

<style>
  .mitOutput pre.hljs code { /* https://highlightjs.org/ */
    /* override vuetify styles */
    box-shadow: none!important;
    border-radius: 0!important;
    background-color: transparent!important;
    color: inherit!important;
    font-style: inherit!important;
    font-weight: inherit!important;
  }
  .mitOutput blockquote {
    margin-left: 1em;
  }
</style>
