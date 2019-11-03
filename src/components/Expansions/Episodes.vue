<template>
  <expansion
    v-for="(expansion, index) in expansions"
    :key="index"
    :id="expansion.id"
  />
</template>

<script>
  import { mapActions, mapState, mapGetters } from "../../modules/expansions"
  import NAMESPACE, * as actions from "../../modules/expansions/types"
  import * as getters from "../../modules/expansions/getters"

  import Expansion from './Expansions'
  export default {
    name: "Expansions",
    components: {
      Expansion
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
        defaultExpansion: getters.DEFAULT_EXPANSION,
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
        let defaultExpansion = this.defaultExpansion(Date.now())
        delete defaultExpansion._rules
        this[actions.POST](defaultExpansion)
      }
    },
  }
</script>

<style scoped>

</style>
