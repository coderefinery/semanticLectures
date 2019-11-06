<template>
  <div class="excursion">
    <v-btn
      color="primary"
      fab
      x-small
      dark
      @click="showPoints = !showPoints"
    >
      <v-icon
      >info</v-icon>
    </v-btn>
    <v-card
      class="mx-auto"
      color="#F9F9F9"
      max-width="400"
      v-if="showPoints"
    >
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="headline">San Francisco</v-list-item-title>
          <v-list-item-subtitle>Mon, 12:30 PM, Mostly sunny</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-text>
        <v-row align="center">
          <v-col class="display-3" cols="6">
            23&deg;C
          </v-col>
          <v-col cols="6">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sun.png"
              alt="Sunny image"
              width="92"
            ></v-img>
          </v-col>
        </v-row>
      </v-card-text>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-send</v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle>23 km/h</v-list-item-subtitle>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-cloud-download</v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle>48%</v-list-item-subtitle>
      </v-list-item>

      <v-slider
        v-model="time"
        :max="6"
        :tick-labels="labels"
        class="mx-4"
        ticks
      ></v-slider>

      <v-list class="transparent">
        <v-list-item
          v-for="item in forecast"
          :key="item.day"
        >
          <v-list-item-title>{{ item.day }}</v-list-item-title>

          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-subtitle class="text-right">
            {{ item.temp }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn text>Full Report</v-btn>
      </v-card-actions>
    </v-card>


    <v-btn
      color="secondary"
      class="ml-1"
      fab
      x-small
      outlined
      @click="showlinks = !showlinks"
    >
      <v-icon
      >subject</v-icon>
    </v-btn>
    <v-card
      height="400"
      width="256"
      class="mx-auto"
      v-if="showlinks"
    >
      <v-navigation-drawer permanent>
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
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
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
        items: [
          {title: 'Git-Intro', icon: 'subject'},
          {title: 'Git-Collaborative', icon: 'subject'},
          {title: 'humanities', icon: 'palette'},
          {title: 'verbose', icon: 'fitness_center'},
        ],
        labels: ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA'],
        time: 0,
        forecast: [
          { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
          { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
          { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
        ],
      }
    },
    computed: {
      tags() {
        return html.unescape(this.tagString)
      }
    },
  }
</script>

<style scoped>
  .excursion {
    display: inline-block;
  }
</style>
