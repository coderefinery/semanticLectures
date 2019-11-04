<template>
  <div class="episodes">
    <v-container>
      <v-layout
        align-center
      >
        <v-flex xs12>
          <v-card>
            <v-card-title>
              <h1>episodes</h1>
            </v-card-title>
            <v-card-text>
              <episode
                v-for="(item, index) in items"
                :key="index"
                :appId="item._id"
              />
              <v-btn
                small
                @click="addEpisode"
              >
                Add Episode
              </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import { mapActions, mapState, mapGetters } from "../../modules/episodes"
  import NAMESPACE, * as actions from "../../modules/episodes/types"
  import * as getters from "../../modules/episodes/getters"

  import Episode from './Episodes'
  export default {
    name: "Episodes",
    components: {
      Episode
    },
    props: {
      id: {
        type: String,
        required: true
      }
    },
    computed: {
      ...mapState({
        items: (state) => state.items,
      }),
      ...mapGetters({
        defaultEpisode: getters.DEFAULT_EPISODE,
      })
    },
    created() {
      // load items into store
      this.$store.dispatch(`${NAMESPACE}/${actions.GET_LIST}`)
    },
    methods: {
      ...mapActions([
        actions.POST,
      ]),
      addEpisode() {
        let defaultEpisode = this.defaultEpisode(Date.now())
        delete defaultEpisode._rules
        this[actions.POST](defaultEpisode)
      }
    },
  }
</script>

<style scoped>

</style>
