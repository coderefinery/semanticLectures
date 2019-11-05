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
        {{ structure }}
      </v-card>
    </v-col>
    <v-col :cols="6">
      <div
        class="pa-2"
      >
        <render-re-s-t-component
          :struct="structure"
        ></render-re-s-t-component>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  import restructured from 'restructured'
  import RenderReSTComponent from "./renderReSTComponent"
  function getReferencedMarkdown(model, id) {
    return `referenced markdown: ${model}#${id}
    ` + '```javascript\n' +
      'const code = undefined // huh...```'
  }
  function loadReferences(text) {
    const models = [
      'course',
      'lecture',
      'elaboration',
      'example',
      'summary',
      'point'
    ]
    let rx = new RegExp(`\\{(${models.join('|')}) (\\d+)\\}`, 'gi') // {model id}

    let match
    let previousIndex = 0

    do {

      match = rx.exec(text)
      if (match) {
        const reference = match[0]  // '{model id}'
        const model = match[1]      // 'model'
        const id = match[2]         // 'id'

        const trailingText = text.substring(rx.lastIndex)

        const inserted = getReferencedMarkdown(model, id)

        rx.lastIndex -= reference.length // let rx search in inserted text

        const previousText = text.substring(previousIndex, rx.lastIndex)

        text = [
          previousText,
          inserted,           // substitute reference for its module
          trailingText
        ].join('')

        previousIndex = rx.lastIndex + inserted.length
      }
    } while(match)

    return text
  }
  export default {
    name: "ReStructuredText",
    components: { RenderReSTComponent },
    props: {
      txt: {
        type: String,
        required: true
      },
      id: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        structure: {}
      }
    },
    created: function() {
      console.log(this.id)

      this.structure = restructured.parse(this.txt)
      // todo: loadReferences(this.source) for each value attribute
    },
  }
</script>

<style>
  code.hljs { /* https://highlightjs.org/ */
    box-shadow: none!important;
    color: inherit!important;
    font-style: inherit!important;
    font-weight: inherit!important;
  }
</style>
