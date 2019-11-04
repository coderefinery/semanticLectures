<template>
  <elaboration
    v-for="(elaboration, index) in elaborations"
    :key="index"
    :id="elaboration.id"
  />
</template>

<script>
  import { mapActions, mapState, mapGetters } from "../../modules/elaborations"
  import NAMESPACE, * as actions from "../../modules/elaborations/types"
  import * as getters from "../../modules/elaborations/getters"

  import Elaboration from './Elaborations'
  export default {
    name: "Elaborations",
    components: {
      Elaboration
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
        defaultElaboration: getters.DEFAULT_ELABORATION,
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
        let defaultElaboration = this.defaultElaboration(Date.now())
        delete defaultElaboration._rules
        this[actions.POST](defaultElaboration)
      }
    },
  }
</script>

<style scoped>

</style>
