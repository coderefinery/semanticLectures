<template>
  <episode
    v-for="(episode, index) in episodes"
    :key="index"
    :id="episode.id"
  />
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
      addCourse() {
        let defaultEpisode = this.defaultEpisode(Date.now())
        delete defaultEpisode._rules
        this[actions.POST](defaultEpisode)
      }
    },
  }
</script>

<style scoped>

</style>
