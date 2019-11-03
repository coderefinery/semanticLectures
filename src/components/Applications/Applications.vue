<template>
  <div class="document">
    <v-container>
      <v-layout
        align-center
      >
        <v-flex xs12>
          <v-card>
            <v-card-title>
              <h1>Applications</h1>
            </v-card-title>
            <v-card-text>
              <application
                v-for="(item, index) in items"
                :key="index"
                :appId="item._id"
              />
              <v-btn
                small
                @click="addApplication"
              >
                Add Application
              </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import { mapActions, mapState, mapGetters } from "../../modules/applications"
  import NAMESPACE, * as actions from "../../modules/applications/types"
  import * as getters from "../../modules/applications/getters"

  import Application from './Application'

  export default {
    name: 'Applications',
    components: {
      Application
    },
    computed: {
      ...mapState({
        items: (state) => state.items,
      }),
      ...mapGetters({
        defaultApplication: getters.DEFAULT_APPLICATION,
      }),
      namespace () {
        return NAMESPACE
      }
    },
    created() {
      // load items into store
      this.$store.dispatch(`${NAMESPACE}/${actions.GET_LIST}`)
    },
    methods: {
      ...mapActions([
        actions.POST,
      ]),
      addApplication() {
        const timestamp = Date.now()
        let defaultApp = this.defaultApplication(timestamp)
        delete defaultApp._rules
        this[actions.POST](defaultApp)
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
