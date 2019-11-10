<template>
  <div class="course mb-4">
     {{ item.title }}
    <markdown-it :md="item.body" :id="id"></markdown-it>
  </div>
</template>

<script>
  import { mapActions, mapState } from "../../modules/courses"
  import * as actions from "../../modules/courses/types"

  import MarkdownIt from '../MarkdownIt/MarkdownIt.vue'

  export default {
    name: 'Course',
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
        points: function ({points}) {return [points]}
      }),
      reservedWords: state => [...state.reservedWords]
    },
    created() {
      this[actions.GET_POINTS]()
    },
    methods: {
      ...mapActions([
        actions.GET_POINTS
      ])
    }
  }
</script>

<style scoped>
  .json .string.editable {
    color: darkgreen
  }
  .json .colon {
    margin-right: .3em;
  }
  .json .block {
    margin-left: 1em;
  }
  .container {
    padding: 0
  }
</style>
