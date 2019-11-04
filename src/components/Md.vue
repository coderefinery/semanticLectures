<template>
  <vue-simple-markdown
    :source="md"
    :emoji="false"
  ></vue-simple-markdown>
</template>

<script>
  function getReferencedMarkdown(model, id) {
    return `referenced markdown: ${model}#${id}
    ` + '```javascript\n' +
      'const code = undefined // huh...```'
  }
  function loadReferences(md) {
    const models = [
      'episode',
      'expansion',
      'summary',
      'example',
      'cheat',
      'point'
    ]
    let rx = new RegExp(`\\{(${models.join('|')}) (\\d+)\\}`, 'gi') // {model id}

    let match
    let previousIndex = 0

    do {

      match = rx.exec(md)
      if (match) {
        const reference = match[0]  // '{model id}'
        const model = match[1]      // 'model'
        const id = match[2]         // 'id'

        const trailingText = md.substring(rx.lastIndex)

        const inserted = getReferencedMarkdown(model, id)

        rx.lastIndex -= reference.length // let rx search in inserted text

        const previousText = md.substring(previousIndex, rx.lastIndex)

        md = [
          previousText,
          inserted,           // substitute reference for its module
          trailingText
        ].join('')

        previousIndex = rx.lastIndex + inserted.length
      }
    } while(match)

    return md
  }
  export default {
    name: "Md",
    props: {
      source: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        md: ''
      }
    },
    created() {
      this.md = loadReferences(this.source)
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
