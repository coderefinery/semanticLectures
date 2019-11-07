<template>
  <div class="excursion">
    <v-btn
      color="secondary"
      fab
      x-small
      outlined
      :aria-disabled="!points.length"
      @click="showPoints = !showPoints"
    >
      <v-icon>info</v-icon>
    </v-btn>


    <v-btn
      color="primary"
      class="ml-1"
      fab
      outlined
      x-small
      @click="showlinks = !showlinks"
    >
      <v-icon>subject</v-icon>
    </v-btn>
    <v-card
      v-if="showlinks"
    >
      <v-navigation-drawer
        permanent
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Excursions
            </v-list-item-title>
            <v-list-item-subtitle>
              jump to related topics
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list
          dense
          nav
        >
          <v-list-item
            v-for="item in excursions"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon>mdi-arrow-right</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
          <div
            v-if="flavors.length"
            class="pr-2 pl-2"
          >
            <v-select
              :items="flavors"
              :value="preferredFlavor"
              label="track"
              @change="setFlavor"
            ></v-select>
          </div>
      </v-navigation-drawer>
    </v-card>
    <v-card
      v-if="showPoints"
    >
      <markdown-it-output
        v-for="(point, index) in points"
        :key="index"
        :md="point"></markdown-it-output>
    </v-card>
  </div>
</template>

<script>
  import { html } from '../../../lib/escape'
  export default {
    name: "Excursions",
    props: {
      tagString: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        showPoints: false,
        showlinks: false,
        excursions: [ // todo: assemble these from available materials
          {title: 'Git-Intro', icon: 'subject', action: {icon: 'mdi-arrow-right'}},
          {title: 'Git-Collaborative', icon: 'subject', action: {icon: 'mdi-arrow-right'}},
        ],
      }
    },
    computed: {
      tags() {
        return html.unescape(this.tagString)
      },
      flavors() {
        return this.$store.state.flavors
      },
      preferredFlavor() {
        return this.$store.state.preferredFlavor
      },
      points() {
        let points = [

        ]
        return points
      }
    },
    methods: {
      setFlavor(value) {
        this.$store.commit('SET_FLAVOR', value)
      }
    }
  }
</script>

<style scoped>
  .excursion {
    display: inline-block;
  }
</style>
