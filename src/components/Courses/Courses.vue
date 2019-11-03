<template>
  <div class="document">
    <v-container>
      <v-layout
        align-center
      >
        <v-flex xs12>
          <v-card>
            <v-card-title>
              <h1>Courses</h1>
            </v-card-title>
            <v-card-text>
              <Course
                v-for="(item, index) in items"
                :key="index"
                :appId="item._id"
              />
              <v-btn
                small
                @click="addCourse"
              >
                Add Course
              </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import { mapActions, mapState, mapGetters } from "../../modules/courses"
  import NAMESPACE, * as actions from "../../modules/courses/types"
  import * as getters from "../../modules/courses/getters"

  import Course from './Course'
  export default {
    name: "Courses",
    components: {
      Course
    },
    computed: {
      ...mapState({
        items: (state) => state.items,
      }),
      ...mapGetters({
        defaultEpisode: getters.DEFAULT_COURSE,
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
        let defaultCourse = this.defaultEpisode(Date.now())
        delete defaultCourse._rules
        this[actions.POST](defaultCourse)
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
