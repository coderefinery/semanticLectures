<template>
  <div class="document">
    <v-container>
      <v-layout
        align-center
      >
        <v-flex xs12>
          <v-card>
            <v-card-text>
              <MarkdownItTest
                v-for="(item, index) in items"
                :key="index"
                :id="item.id"
              />
              <v-btn
                class="mt-2"
                small
                @click="addMarkdownItTest"
              >
                Add MarkdownItTest
              </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import { mapActions, mapState } from "../../../modules/markdownItTests"
  import NAMESPACE, * as actions from "../../../modules/markdownItTests/types"

  import MarkdownItTest from './MarkdownItTest'
  export default {
    name: "MarkdownItTests",
    components: {
      MarkdownItTest
    },
    computed: {
      ...mapState({
        items: (state) => state.items,
      }),
    },
    created() {
      // load items into store
      this.$store.dispatch(`${NAMESPACE}/${actions.GET_LIST}`)
      this.$store.commit('box/SET_SCENE_HEIGHT_IS_DIRTY', true) // todo: remove specific module knowledge
    },
    methods: {
      ...mapActions([
        actions.POST,
      ]),
      addMarkdownItTest() {
        //let defaultMarkdownItTest = this.defaultEpisode(Date.now())
        //delete defaultMarkdownItTest._rules
        //this[actions.POST](defaultMarkdownItTest)
      }
    },
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
