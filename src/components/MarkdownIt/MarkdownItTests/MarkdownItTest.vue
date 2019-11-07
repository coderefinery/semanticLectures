<template>
  <div class="mb-4">
     {{ item.displayName }}
    <markdown-it :md="item.body" :id="id"></markdown-it>
  </div>
</template>

<script>
  import { mapState } from "../../../modules/markdownItTests"

  import MarkdownIt from '../../MarkdownIt/MarkdownIt.vue'

  export default {
    name: 'RenderTest',
    components: {
      MarkdownIt
    },
    props: {
      id: {
        type: String,
        required: true
      },
    },
    computed: {
      ...mapState({
        item: function ({items}) {return items.find(item => {
          this.$store.commit('box/SET_SCENE_HEIGHT_IS_DIRTY', true, {root: true})
          return item.id === this.id
        })},
      }),
      reservedWords: state => [...state.reservedWords]
    },
  }
</script>

<style scoped>
</style>
